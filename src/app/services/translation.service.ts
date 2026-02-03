pptxPrompt import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiKeyService } from './api-key.service';

/** Minimal OpenRouter chat types */
type ChatRole = 'system' | 'user' | 'assistant';
interface ChatMessage {
  role: ChatRole;
  content: string;
}
interface OpenRouterChoice {
  message?: { role?: string; content?: string };
}
interface OpenRouterResponse {
  choices?: OpenRouterChoice[];
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private openRouterApiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  // prefer-inject over constructor DI
  private readonly http = inject(HttpClient);
  private readonly apiKeyService = inject(ApiKeyService);

  private docxPrompt = `You are a document formatting assistant. 
You will be provided two inputs in HTML format:
1. An English HTML document that contains unique identifiers for each text segment (e.g., <p id="P1">, <p id="P2">).
2. A block of French text that is the translation of the English document.

Your task: return the French document in HTML format such that:
1. All English text is replaced with its correct French translation.
2. The HTML structure (tags, attributes, order) remains unchanged.
3. Each text element retains its original unique ID.
Do not add extra commentary or leftover English text.`;

  private pptxPrompt = `You are a presentation formatting assistant. 
Inputs:
1. English HTML containing IDs like S3_T1, S3_T2.
2. A block of French text.

Your task: 
1. Replace the English text with correct French translation.
2. Preserve the same HTML structure and unique IDs.
3. If the French text is one paragraph but the English input is split into multiple segments, split it appropriately.
Return only the French HTML document.`;

  private readonly models: string[] = [
    'meta-llama/llama-3.3-70b-instruct:free',
    'nvidia/nemotron-3-nano-30b-a3b:free',
    'deepseek/deepseek-r1-0528:free',
    'qwen/qwen3-next-80b-a3b-instruct:free',
    'xiaomi/mimo-v2-flash:free',
    'google/gemma-3-27b-it:free',
  ];

  /**
   * Aligns French text with the English HTML structure.
   */
  async alignTranslation(
    englishHtml: string,
    frenchText: string,
    englishFile: File | null,
  ): Promise<string | null> {
    // Clean English HTML
    englishHtml = englishHtml.replace(/<img[^>]*>/g, '');

    // Select prompt based on file type
    const fileExtension = englishFile?.name.split('.').pop()?.toLowerCase();
    const systemPrompt =
      fileExtension === 'pptx' ? this.pptxPrompt : this.docxPrompt;

    // Build chat request
    const combinedPrompt = `${systemPrompt}\n\nEnglish Document (HTML):\n${englishHtml}\n\nFrench Text:\n${frenchText}\n\nReturn the French document in HTML format that exactly follows the structure of the English document.`;

    const requestMessages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: combinedPrompt },
    ];

    let finalResponse: string | null = null;

    for (const model of this.models) {
      const aiResponse = await this.getORData(model, requestMessages, 0.0);
      const text = aiResponse?.choices?.[0]?.message?.content;
      if (text) {
        finalResponse = this.removeCodeFences(text);
        console.log('AI response received.');
        break; // Stop at first successful response
      }
    }

    return finalResponse;
  }

  /**
   * Fetches data from OpenRouter API
   */
  private async getORData(
    model: string,
    messages: ChatMessage[],
    temperature = 0.0,
  ): Promise<OpenRouterResponse | undefined> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) throw new Error('API key is required.');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Title': 'Content Assistant',
    });

    const payload = { model, messages, temperature };

    try {
      const resp = (await this.http
        .post(this.openRouterApiUrl, payload, {
          headers,
          responseType: 'text', // keep text to check content-type ourselves
          observe: 'response',
        })
        .toPromise()) as HttpResponse<string> | null;

      const ct = resp?.headers.get('content-type') || '';
      if (ct.includes('application/json') && typeof resp?.body === 'string') {
        return JSON.parse(resp.body) as OpenRouterResponse;
      } else {
        console.error(
          `OpenRouter non-JSON (status ${resp?.status}, ${ct}):\n`,
          (resp?.body || '').slice(0, 500),
        );
        return undefined; // let alignTranslation() try the next model
      }
    } catch (err: unknown) {
      const httpErr = err as { status?: number; error?: unknown };
      const status = httpErr?.status;
      const bodySnippet =
        typeof httpErr?.error === 'string'
          ? httpErr.error.slice(0, 500)
          : JSON.stringify(httpErr?.error);
      console.error(
        `OpenRouter HTTP error (model: ${model}) status=${status}: ${bodySnippet}`,
      );
      return undefined; // keep falling back
    }
  }

  /**
   * Removes ``` code fences from AI output
   */
  private removeCodeFences(str: string): string {
    return str
      .replace(/^```(?:html|json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  /**
   * Builds a mapping of paragraph IDs to French text from HTML.
   */
  buildFrenchTextMap(finalFrenchHtml: string): Record<string, string> {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = finalFrenchHtml;
    const frenchMap: Record<string, string> = {};
    tempDiv.querySelectorAll('p[id]').forEach((p) => {
      const id = p.getAttribute('id');
      const text = p.textContent?.trim() || '';
      if (id && text) frenchMap[id] = text;
    });
    return frenchMap;
  }
}
