import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PopoverModule, Popover } from 'primeng/popover';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { SortEvent } from 'primeng/api';
import { UploadStateService } from '../../services/upload-state.service';
import { LinkAiService, AiVerdict } from '../../services/link-ai.service';
import { ContentExtractorService } from '../../services/content-extractor.service';
import type {
  ExtractResult,
  DestMeta,
} from '../../services/content-extractor.service';
import { FetchService } from '../../../../services/fetch.service';
import { Output, EventEmitter } from '@angular/core';

type LinkType =
  | 'CRA page'
  | 'Canada.ca'
  | 'external'
  | 'anchor'
  | 'mailto'
  | 'download';
type UiHealth = 'severe' | 'minor' | 'ok' | 'unknown';
type LinkMatchStatus = 'match' | 'mismatch' | 'unknown' | 'na';

const CANADA_ORIGIN = 'https://www.canada.ca';

/** Treat both apex and www as Canada.ca (no other subdomains). */
function isCanadaHost(u: URL): boolean {
  const h = u.hostname.toLowerCase().replace(/^www\./, '');
  return h === 'canada.ca';
}

/** Canonicalize AEM repo paths to vanity paths/absolute URLs on canada.ca */
function canonicalizeCanadaHref(href: string): string {
  if (!href) return href;
  href = href.replace(
    /^https?:\/\/(?:www\.)?canada\.ca\/content\/canadasite/i,
    CANADA_ORIGIN,
  );
  href = href.replace(/^\/content\/canadasite/i, '');
  return href;
}

/** Drop any kind of footnote link (refs + “return to footnote … referrer”, etc.) */
function isFootnoteLink(a: HTMLAnchorElement): boolean {
  const hrefAttr = (a.getAttribute('href') || '').trim();
  const textish =
    (a.textContent || '') +
    ' ' +
    (a.getAttribute('aria-label') || '') +
    ' ' +
    (a.title || '');

  if (
    a.closest(
      '.footnote, .footnotes, #footnotes, section.footnotes, ol.footnotes, ' +
        '.ref-list, .references, [role="doc-footnote"], [role="doc-endnotes"], ' +
        '[role="doc-backlink"], nav[aria-label="Footnotes"]',
    )
  )
    return true;

  if (a.closest('sup')) return true;

  const hash = (() => {
    try {
      return new URL(hrefAttr, 'https://x').hash || hrefAttr;
    } catch {
      return hrefAttr;
    }
  })();
  if (
    /^#(?:fn|fnref|footnote)\w*/i.test(hash) ||
    /#(?:fn|footnote)\d+(?:[-:_][\w]+)*$/i.test(hash)
  )
    return true;

  if (/\b(return|back)\s+to\s+footnote\b/i.test(textish)) return true;
  if (/\breferrer\b/i.test(textish) && /footnote/i.test(textish)) return true;

  if (
    /\b(doc-noteref|noteref|fnref|fn-rtn|return-footnote|footnote-back)\b/i.test(
      a.className,
    )
  )
    return true;

  return false;
}

/** Strip visible footnote markers like “[1]”, “†”, “(footnote 3)” from link text */
function stripFootnoteText(text: string): string {
  return (text || '')
    .replace(/\[\d+\]/g, '')
    .replace(/(?:^|\s)\(\s*footnote\s*\d+\s*\)/gi, '')
    .replace(/[*†‡§¶]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// --- Safe debug view of ExtractResult (keeps exact literal union types) ---
type TitleSourceFromExtract = ExtractResult extends { titleSource?: infer T }
  ? T
  : never;
type IntroSourceFromExtract = ExtractResult extends { introSource?: infer T }
  ? T
  : never;
type ContentTextFromExtract = ExtractResult extends { contentText?: infer T }
  ? T
  : string | null;

type DebugExtractResult = ExtractResult & {
  titleSource?: TitleSourceFromExtract;
  introSource?: IntroSourceFromExtract;
  contentText?: ContentTextFromExtract;
  anchorMeta?: { id?: string; headingTag?: string };
};

interface HeadingData {
  order: number; // Index
  type: LinkType; // Link Type
  text: string; // Link name on page
  href: string; // Original href
  absUrl: string | null; // Resolved absolute URL
  destH1: string | null; // Destination title (guessed/extracted)
  matchStatus: LinkMatchStatus;
  searchTerm: string;
  clicks: number | null;

  // Extracted fields (optional)
  extractedSource?: 'canada' | 'external' | 'anchor';
  extractedTitle?: string | null;
  extractedIntro?: string | null;
  extractedCandidate?: string | null;

  // AI verdict (optional)
  aiVerdict?: 'match' | 'mismatch' | 'uncertain';
  aiConfidence?: number; // 0..1
  aiMatchedFields?: AiVerdict['matchedFields'];
  aiRationale?: string;

  repeatCount?: number; // how many times this destination appeared
  textVariants?: string[]; // distinct link texts that point to this destination
  hasTextConflict?: boolean; // true if >1 distinct link texts

  httpStatus?: number | null; // last HEAD status, if checked
  is404?: boolean; // true if 404/410/etc.
  anchorMissing?: boolean; // true if #target not found on the same page
}

type ColumnField =
  | 'order'
  | 'type'
  | 'text'
  | 'destH1'
  | 'matchStatus'
  | 'explanation'
  | 'searchTerm'
  | 'clicks';

interface LinkReportColumn {
  field: ColumnField;
  header: string;
}

interface UploadDataShape {
  originalHtml?: string | null;
  modifiedHtml?: string | null;
  pageUrl?: string | null;
}

@Component({
  selector: 'ca-link-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    PopoverModule,
    CheckboxModule,
    ButtonModule,
  ],
  templateUrl: './link-report.component.html',
  styles: [
    `
      /* Base chip */
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.15rem 0.55rem;
        border-radius: 9999px;
        border: 1px solid transparent;
        font-weight: 500;
        line-height: 1.1;
      }

      /* Make the PrimeIcons inherit the chip color (wins over theme) */
      .chip .pi {
        color: inherit !important;
      }

      /* Variants */
      .chip-severe {
        background: #fee2e2;
        border-color: #fecaca;
        color: #b91c1c; /* text + icon */
      }
      .chip-minor {
        background: #fef3c7;
        border-color: #fde68a;
        color: #92400e;
      }
      .chip-ok {
        background: #dcfce7;
        border-color: #86efac;
        color: #166534;
      }
      .chip-unk {
        background: #e5e7eb;
        border-color: #cbd5e1;
        color: #334155;
      }

      .health-cell .chip {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
      .chip-label {
        line-height: 1;
      }
      .break-all {
        word-break: break-all;
      }
      .muted {
        color: #6b7280;
        font-size: 12px;
      }
      .flex {
        display: flex;
      }
      .justify-center {
        justify-content: center;
      }
      .header-with-filter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
      }
      .p-button-sm {
        padding: 0.15rem 0.35rem;
        height: 1.6rem;
        width: 1.6rem;
      }
      .filter-panel {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.25rem 0.25rem 0.1rem;
      }
      .variant-list {
        list-style: none;
        margin: 0.15rem 0 0; /* tight spacing */
        padding: 0;
      }
      .variant-list > li {
        margin: 0.05rem 0;
      }

      .filter-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.2;
      }
      .divider {
        height: 1px;
        background: #e5e7eb;
        margin: 0.25rem 0;
      }
      .filter-label {
        cursor: pointer;
        user-select: none;
      }

      .filter-muted {
        color: #6b7280;
        font-size: 12px;
      }
      .exp-badge {
        display: inline-block;
        margin-left: 0.35rem;
        padding: 0.1rem 0.45rem;
        font-size: 12px;
        line-height: 1.1;
        border-radius: 9999px;
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #fecaca;
        white-space: nowrap;
      }
    `,
  ],
})
export class LinkReportComponent implements OnInit {
  @Output() hasProblemsChange = new EventEmitter<boolean>();
  @ViewChild('typePanel') typePanel!: Popover;
  // prefer-inject: replace constructor DI
  private readonly uploadState = inject(UploadStateService);
  private readonly linkAi = inject(LinkAiService);
  private readonly extractor = inject(ContentExtractorService);
  private readonly fetchService = inject(FetchService);
  private readonly HEALTH_RANK: Record<UiHealth, number> = {
    severe: 3,
    minor: 2,
    ok: 1,
    unknown: 0,
  };

  uiHealth(r: HeadingData): UiHealth {
    // count “issues”
    const issues =
      (r.hasTextConflict ? 1 : 0) +
      (r.is404 ? 1 : 0) +
      (r.anchorMissing ? 1 : 0) +
      (r.matchStatus === 'mismatch' ? 1 : 0);

    if (issues >= 2) return 'severe';
    if (issues === 1) return 'minor';

    // explicit OK states
    if (r.matchStatus === 'match' || r.matchStatus === 'na') return 'ok';

    return 'unknown';
  }
  healthLabel(h: UiHealth): string {
    switch (h) {
      case 'severe':
        return 'Severe';
      case 'minor':
        return 'Minor';
      case 'ok':
        return 'OK';
      default:
        return 'Unknown';
    }
  }

  // data & selection
  headings: HeadingData[] = [];
  selectedHeading!: HeadingData;

  onCustomSort(event: SortEvent): void {
    const data = (event.data ?? []) as HeadingData[];
    const order = (event.order ?? 1) as 1 | -1;
    const field = event.field as 'order' | 'matchStatus' | string;

    if (field === 'order') {
      data.sort((a, b) => (a.order - b.order) * order);
      return;
    }

    if (field === 'matchStatus') {
      data.sort(
        (a, b) =>
          (this.HEALTH_RANK[this.uiHealth(a)] -
            this.HEALTH_RANK[this.uiHealth(b)]) *
          order,
      );
      return;
    }

    // ignore sort for any other field (no-op)
  }

  private emitProblems(): void {
    const hasProblems = this.headings.some(
      (r) =>
        r.hasTextConflict ||
        r.is404 ||
        r.anchorMissing ||
        r.matchStatus === 'mismatch',
    );
    this.hasProblemsChange.emit(hasProblems); // <-- emit the output the parent listens to
  }

  // columns (with placeholders at the end)
  cols: LinkReportColumn[] = [
    { field: 'order', header: 'Index' },
    { field: 'type', header: 'Link Type' },
    { field: 'text', header: 'Link name on page' },
    { field: 'destH1', header: 'Destination link content' },
    { field: 'matchStatus', header: 'Health' },
    { field: 'explanation', header: 'Pain points' },
    { field: 'searchTerm', header: 'Search term' },
    { field: 'clicks', header: 'Clicks' },
  ];

  // --- DEBUG LOGGING HELPERS ---
  private readonly COLLAPSE_GROUPS = false;
  private readonly DEBUG_LOG = true;

  private truncate(s: string | null | undefined, n = 200): string {
    if (s == null) return '';
    const t = String(s).trim();
    return t.length > n ? t.slice(0, n) + '…' : t;
  }
  getOtherVariants(row: HeadingData): string[] {
    if (!row?.textVariants?.length) return [];
    return row.textVariants.filter((v) => v !== row.text);
  }

  getOtherVariantsPreview(row: HeadingData, take = 5): string[] {
    return this.getOtherVariants(row).slice(0, take);
  }

  getOtherVariantsExtraCount(row: HeadingData, take = 5): number {
    const total = this.getOtherVariants(row).length;
    return total > take ? total - take : 0;
  }

  private logRowExtraction(
    row: HeadingData,
    source:
      | 'canada'
      | 'external'
      | 'anchor'
      | 'mailto'
      | 'tel'
      | 'download'
      | 'none',
    result: ExtractResult | null,
    meta: DestMeta | null,
    candidate: string | null,
    heuristic: LinkMatchStatus,
    ai: AiVerdict | null,
    finalStatus: LinkMatchStatus,
    err?: unknown,
  ): void {
    if (!this.DEBUG_LOG) return;
    // Derive optional debug field types from ExtractResult so we stay compatible
    type TitleSourceFromExtract = ExtractResult extends {
      titleSource?: infer T;
    }
      ? T
      : never;
    type IntroSourceFromExtract = ExtractResult extends {
      introSource?: infer T;
    }
      ? T
      : never;
    type ContentTextFromExtract = ExtractResult extends {
      contentText?: infer T;
    }
      ? T
      : string | null;

    // Merge ExtractResult with optional debug fields (no incompatible widening)
    type DebugExtractResult = ExtractResult & {
      titleSource?: TitleSourceFromExtract;
      introSource?: IntroSourceFromExtract;
      contentText?: ContentTextFromExtract;
      anchorMeta?: { id?: string; headingTag?: string };
    };

    const r = (result ?? {}) as DebugExtractResult;
    const header = `[Link#${row.order}] ${row.type} — ${row.text}  →  ${
      row.absUrl || row.href || ''
    }`;

    if (this.COLLAPSE_GROUPS) console.groupCollapsed(header);
    else console.group(header);

    console.log('Type:', row.type);
    console.log('href:', row.href);
    console.log('absUrl:', row.absUrl);

    if (row.httpStatus != null) {
      console.log(
        'HTTP status (HEAD):',
        row.httpStatus,
        row.is404 ? '→ NOT FOUND' : '',
      );
    }
    if (row.anchorMissing) {
      console.log('Anchor target not found on the page.');
    }

    if (source === 'canada' && result) {
      console.log(`CANADA H1 (titleSource=${r.titleSource ?? '-'}) ::`);
      console.log(this.truncate(result.title, 1000));
      console.log(`CANADA Intro (introSource=${r.introSource ?? '-'}) ::`);
      console.log(this.truncate(result.intro, 1000));
    } else if (source === 'anchor' && result) {
      console.log('ANCHOR id:', r.anchorMeta?.id || '(none)');
      console.log('ANCHOR heading tag:', r.anchorMeta?.headingTag || '(none)');
      console.log(`Section heading (titleSource=${r.titleSource ?? '-'}) ::`);
      console.log(this.truncate(result.title, 1000));
      console.log(
        `First paragraph in section (introSource=${r.introSource ?? '-'}) ::`,
      );
      console.log(this.truncate(result.intro, 1000));
    } else if (source === 'external' && result) {
      console.log(`EXTERNAL Title (titleSource=${r.titleSource ?? '-'}) ::`);
      console.log(this.truncate(result.title, 1000));
      console.log(`EXTERNAL Intro (introSource=${r.introSource ?? '-'}) ::`);
      console.log(this.truncate(result.intro, 1000));
      if (r.contentText) {
        console.log('EXTERNAL Body preview ::');
        console.log(this.truncate(r.contentText, 1000));
      }
    } else if (row.type === 'mailto' || row.type === 'download') {
      console.log('No extract (mailto/tel/download).');
    } else {
      console.log('No extract — likely blocked host or fetch failure.');
    }

    if (meta) {
      console.log('AI meta sent →', meta);
    }

    console.log('Candidate (title + intro) →');
    console.log(this.truncate(candidate, 1000));

    console.log('Heuristic:', heuristic);
    console.log('AI verdict:', ai);
    console.log('Final matchStatus:', finalStatus);

    if (err) console.warn('Extract/AI error:', err);

    console.groupEnd();
  }

  private logSummaryTable(): void {
    if (!this.DEBUG_LOG) return;
    const rows = this.headings.map((r) => ({
      order: r.order,
      type: r.type,
      text: this.truncate(r.text, 80),
      url: r.absUrl || r.href,
      extractedTitle: this.truncate(r.extractedTitle, 200),
      extractedIntro: this.truncate(r.extractedIntro, 200),
      match: r.matchStatus,
      ai: r.aiVerdict || '',
      conf: r.aiConfidence ?? '',
    }));
    console.table(rows);
  }

  sourceVersion: 'original' | 'modified' = 'original';

  // ----- Filter state (dropdown with ALL + 6 types) -----
  linkTypes: LinkType[] = [
    'CRA page',
    'Canada.ca',
    'external',
    'anchor',
    'mailto',
    'download',
  ];

  /** ALL is checked by default (means: include all types). */
  allSelected = true;

  /** Individual type checkboxes are listed, initially unchecked. */
  typeChecks: Record<LinkType, boolean> = {
    'CRA page': false,
    'Canada.ca': false,
    external: false,
    anchor: false,
    mailto: false,
    download: false,
  };

  onAllToggle(): void {
    // individuals remain as-is (unchecked) and ignored when ALL = true
  }

  onTypeToggle(t: LinkType): void {
    if (this.allSelected) this.allSelected = false;

    // Read + reassign to ensure the key exists as a boolean (and to satisfy lint)
    this.typeChecks[t] = !!this.typeChecks[t];
  }

  private activeTypes(): Set<LinkType> {
    if (this.allSelected) return new Set(this.linkTypes);
    const picked = this.linkTypes.filter((t) => this.typeChecks[t]);
    return new Set(picked);
  }

  get filteredHeadings(): HeadingData[] {
    const activeTypes = this.activeTypes();
    return this.headings.filter(
      (r) => activeTypes.has(r.type) && this.matchStatusPass(r.matchStatus),
    );
  }

  ngOnInit(): void {
    //Temporarily disabled for testing with API keys
    //void this.extractLinks();
  }

  /** Build a stable key for the "destination" (dedupe by this). */
  private destKeyForRow(
    r: Pick<HeadingData, 'type' | 'absUrl' | 'href'>,
  ): string {
    const raw = r.absUrl || r.href || '';
    if (!raw) return '';

    // anchor links are intentionally kept distinct by their hash
    if (r.type === 'anchor') {
      return raw.trim().toLowerCase();
    }

    try {
      // 1) normalize URL
      let u = new URL(raw);

      // Force https for stability
      u.protocol = 'https:';

      // Lowercase host and fold apex→www for canada.ca
      u.hostname = u.hostname
        .toLowerCase()
        .replace(/^canada\.ca$/, 'www.canada.ca');

      // Canonicalize AEM repo paths to vanity
      u = new URL(canonicalizeCanadaHref(u.toString()));

      // Drop hash
      u.hash = '';

      // Drop all query params by default (add allowlist if you ever need them)
      u.search = '';

      // Fold index.html
      u.pathname = u.pathname.replace(/\/index\.html?$/i, '/');

      // 2) CRA-specific folding:
      //    collapse filenames that include a regional/provincial code before "-e.html"
      //    e.g. 5000-g-on-e.html -> 5000-g-e.html
      if (/^\/en\/revenue-agency\//i.test(u.pathname)) {
        // common province/territory short codes + 'c' (combined)
        const PT = new Set([
          'ab',
          'bc',
          'mb',
          'nb',
          'nl',
          'ns',
          'nt',
          'nu',
          'on',
          'pe',
          'qc',
          'sk',
          'yt',
          'c',
        ]);
        u.pathname = u.pathname.replace(
          /\/([^/]+?)-([a-z]{1,3})-e\.html$/i,
          (_m, base, code) =>
            PT.has(String(code).toLowerCase()) ? `/${base}-e.html` : _m,
        );
      }

      // Trim trailing slash (but not the root "/")
      if (u.pathname.length > 1 && u.pathname.endsWith('/')) {
        u.pathname = u.pathname.slice(0, -1);
      }

      return u.toString();
    } catch {
      return raw.trim().toLowerCase();
    }
  }

  private dedupeByDestination(rows: HeadingData[]): HeadingData[] {
    interface Group {
      rep: HeadingData;
      names: Set<string>;
      count: number;
    }

    const map = new Map<string, Group>();

    for (const r of rows) {
      const key = this.destKeyForRow(r) || `row-${r.order}`;
      const g = map.get(key);
      if (g) {
        g.count += 1;
        g.names.add(r.text);
      } else {
        map.set(key, { rep: { ...r }, names: new Set([r.text]), count: 1 });
      }
    }

    const out: HeadingData[] = [];
    let idx = 1;
    for (const { rep, names, count } of map.values()) {
      out.push({
        ...rep,
        order: idx++,
        repeatCount: count,
        hasTextConflict: names.size > 1,
        textVariants: Array.from(names),
      });
    }
    return out;
  }

  async extractLinks(): Promise<void> {
    const { html, baseUrl } = this.getHtmlToAnalyze();
    if (!html) {
      this.headings = [];
      return;
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');

    // Collect anchors, drop all footnotes/backlinks
    const anchors = Array.from(
      doc.querySelectorAll<HTMLAnchorElement>('body a[href]'),
    ).filter((a) => {
      if (isFootnoteLink(a)) return false;
      const href = (a.getAttribute('href') || '').trim().toLowerCase();
      if (href.startsWith('tel:')) return false; // strip off tel links
      return true;
    });

    // 1) Build initial rows using current logic
    const initialRows: HeadingData[] = anchors.map((a, i): HeadingData => {
      const rawHref = (a.getAttribute('href') || '').trim();
      const absUrl = this.resolveUrl(rawHref, baseUrl);

      const visible =
        a.textContent || a.getAttribute('aria-label') || a.title || '';
      const text = stripFootnoteText(visible);

      const type = this.classify(rawHref, absUrl, a);

      let destH1: string | null = null;
      let matchStatus: LinkMatchStatus = 'unknown';

      if (type === 'anchor') {
        const h1 = doc.querySelector('h1');
        destH1 = h1 ? (h1.textContent || '').trim() : null;
        matchStatus = this.smartMatch(text, destH1);
      } else if (type === 'mailto' || type === 'download') {
        matchStatus = 'na';
      } else {
        const { guess, pathTokens } = this.smartSlugGuess(
          text,
          absUrl || rawHref,
        );
        destH1 = guess;
        matchStatus = this.smartMatch(text, destH1, pathTokens);
      }

      return {
        order: i + 1,
        type,
        text,
        href: rawHref,
        absUrl,
        destH1,
        matchStatus,
        searchTerm: '',
        clicks: null,
        // repeatCount/textVariants/hasTextConflict are filled by the deduper
      };
    });

    // 1.5) DEDUPE by destination (show once per URL/#anchor; flag conflicts)
    this.headings = this.dedupeByDestination(initialRows);

    // 2) Enrich only the deduped set (extract content + AI + logging)
    await this.enrichWithExtractedContent(doc);
    this.emitProblems();
  }
  // Match-status filter state
  matchAllSelected = true; // ALL by default
  matchChecks: Record<'match' | 'mismatch', boolean> = {
    match: false,
    mismatch: false,
  };

  onMatchAllToggle(): void {
    // nothing else needed; individuals remain as-is and ignored when ALL = true
  }

  onMatchToggle(s: 'match' | 'mismatch'): void {
    if (this.matchAllSelected) this.matchAllSelected = false;
    // normalize the toggled value (and “use” s so ESLint is happy)
    this.matchChecks[s] = !!this.matchChecks[s];
  }

  // Helper to check if a row passes the match-status filter
  private matchStatusPass(
    ms: 'match' | 'mismatch' | 'unknown' | 'na',
  ): boolean {
    if (this.matchAllSelected) return true; // include everything
    // Only filter to 'match' / 'mismatch'; unknown/na are hidden when a specific filter is on
    if (ms === 'match') return !!this.matchChecks.match;
    if (ms === 'mismatch') return !!this.matchChecks.mismatch;
    return false; // hide unknown/na when not ALL
  }

  /** HEAD the destination to detect 404/410/etc. Uses allowlist for Canada.ca, 'none' for externals. */
  private async checkUrlStatus(absUrl: string): Promise<number | null> {
    try {
      const url = new URL(absUrl);
      const hostLc = url.hostname.toLowerCase().replace(/^www\./, '');
      const hostMode = hostLc === 'canada.ca' ? 'prod' : 'none';
      // NOTE: 'none' skips allowlist but still subject to browser CORS
      const resp = await this.fetchService.fetchStatus(
        absUrl,
        hostMode,
        2,
        'none',
      );
      return resp.status ?? null;
    } catch {
      return null;
    }
  }

  /** Treat 404/410 as "not found". */
  private isNotFoundStatus(code: number | null | undefined): boolean {
    return code === 404 || code === 410;
  }

  /**
   * For each row, use ContentExtractorService to fetch a better "candidate text"
   * (title + intro), ask AI, and re-evaluate matchStatus. Logs the exact content used.
   */
  private async enrichWithExtractedContent(sourceDoc: Document): Promise<void> {
    const rows = this.headings;

    const CONCURRENCY = Math.min(4, rows.length);
    let idx = 0;

    const worker = async () => {
      for (;;) {
        const i = idx++;
        if (i >= rows.length) break;
        const row = rows[i];

        // Skip types we won't fetch, but LOG it as N/A
        if (row.type === 'mailto' || row.type === 'download') {
          this.logRowExtraction(
            row,
            row.type,
            null,
            null,
            null,
            row.matchStatus,
            null,
            row.matchStatus,
          );
          continue; // already 'na'
        }

        let result: ExtractResult | null = null;
        let source: 'canada' | 'external' | 'anchor' | null = null;
        let lastError: unknown = null;

        try {
          if (row.type === 'anchor') {
            const res = this.extractor.extractAnchor(sourceDoc, row.href);
            result = res;
            source = 'anchor';
          } else if (row.absUrl) {
            // Decide canada vs external by host
            let isCanada = false;
            try {
              const u = new URL(row.absUrl);
              isCanada = isCanadaHost(u);
            } catch {
              /* ignore URL parse error; treat as external below */
            }
            if (isCanada) {
              result = await this.extractor.extractCanada(row.absUrl, {
                retries: 2,
                delay: 'none',
              });
              source = 'canada';
            } else {
              result = await this.extractor.extractExternal(row.absUrl, {
                retries: 2,
                delay: 'none',
              });
              source = 'external';
            }
          }
        } catch (err) {
          lastError = err;
        }

        if (result) {
          const candidate = this.extractor.buildCandidateText(result);

          // Build minimal DestMeta for AI
          const meta: DestMeta = {
            finalUrl: row.absUrl ?? row.href ?? null,
            h1: result.title ?? null,
            title: result.title ?? null,
            metaDescription: result.intro ?? null,
            headings: row.destH1 ? [row.destH1] : [],
            bodyPreview:
              (result as DebugExtractResult).contentText ||
              result.intro ||
              null,
          };

          // Ask AI
          let ai: AiVerdict | null = null;
          try {
            ai = await this.linkAi.judge(row.text, meta);
          } catch (err) {
            lastError = lastError || err;
          }

          // Blend AI with heuristic
          const heuristic: LinkMatchStatus = this.smartMatch(
            row.text,
            candidate,
          );
          const blend = (
            v: AiVerdict | null,
            fallback: LinkMatchStatus,
          ): LinkMatchStatus => {
            if (!v) return fallback;
            if (v.verdict === 'match' && v.confidence >= 0.7) return 'match';
            if (v.verdict === 'mismatch' && v.confidence >= 0.7)
              return 'mismatch';
            return fallback; // uncertain/low-confidence → keep heuristic
          };
          const base = heuristic === 'unknown' ? row.matchStatus : heuristic;
          const finalStatus = blend(ai, base);

          rows[i] = {
            ...row,
            extractedSource: source || undefined,
            extractedTitle: result.title ?? null,
            extractedIntro: result.intro ?? null,
            extractedCandidate: candidate || null,
            destH1: result.title ?? row.destH1,
            matchStatus: finalStatus,

            aiVerdict: ai?.verdict,
            aiConfidence: ai?.confidence,
            aiMatchedFields: ai?.matchedFields,
            aiRationale: ai?.rationale,
          };

          // LOG success case with exact content
          this.logRowExtraction(
            rows[i],
            source || 'none',
            result,
            meta,
            candidate,
            heuristic,
            ai,
            finalStatus,
            lastError,
          );
        } else {
          // No result (blocked/failed/no absUrl) — keep row as-is and LOG it
          this.logRowExtraction(
            row,
            (source as unknown as 'none') || 'none',
            null,
            null,
            null,
            row.matchStatus,
            null,
            row.matchStatus,
            lastError,
          );
        }
      }
    };

    await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

    // trigger change detection by reassigning
    this.headings = [...rows];

    // Final summary table
    this.logSummaryTable();
    this.emitProblems();
  }

  // ---------- helpers ----------

  private getHtmlToAnalyze(): { html: string | null; baseUrl: string | null } {
    const get = this.uploadState.getUploadData?.();
    const data: unknown = get;

    const shape = (d: unknown): UploadDataShape | null => {
      if (d && typeof d === 'object') {
        const o = d as Record<string, unknown>;
        return {
          originalHtml: (o['originalHtml'] as string) ?? null,
          modifiedHtml: (o['modifiedHtml'] as string) ?? null,
          pageUrl: (o['pageUrl'] as string) ?? null,
        };
      }
      return null;
    };

    const parsed = shape(data);

    if (!parsed) return { html: null, baseUrl: null };

    const html: string | null =
      (this.sourceVersion === 'modified'
        ? parsed.modifiedHtml
        : parsed.originalHtml) || null;

    let baseUrl: string | null = null;
    if (html) {
      try {
        const tmp = new DOMParser().parseFromString(html, 'text/html');
        const b = tmp.querySelector('base[href]')?.getAttribute('href')?.trim();
        if (b) baseUrl = b;
      } catch {
        /* ignore base parsing */
      }
    }
    if (!baseUrl && parsed.pageUrl) baseUrl = parsed.pageUrl;

    return { html, baseUrl };
  }

  private resolveUrl(href: string, baseUrl: string | null): string | null {
    try {
      if (!href) return null;
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return href; // no network calls for these
      }

      // Canonicalize Canada.ca AEM repo paths & root-relative links
      if (/^\/(?:content\/canadasite|en|fr)\//i.test(href)) {
        const canon = canonicalizeCanadaHref(href);
        return new URL(canon, CANADA_ORIGIN).toString();
      }

      // Absolute canada.ca URL that still has /content/canadasite
      if (/^https?:\/\/(?:www\.)?canada\.ca\/content\/canadasite/i.test(href)) {
        return canonicalizeCanadaHref(href);
      }

      // Normal resolution
      let out: URL;
      if (baseUrl) out = new URL(href, baseUrl);
      else out = new URL(href);

      // FetchService only allows www.canada.ca (not apex)
      const hostLc = out.hostname.toLowerCase().replace(/^www\./, '');
      if (hostLc === 'canada.ca') {
        out.hostname = 'www.canada.ca';
      }

      return out.toString();
    } catch {
      return null;
    }
  }

  buildMismatchReason(row: HeadingData): string {
    // Prefer AI rationale if you have it; otherwise show a compact placeholder
    if (row.aiRationale && row.aiRationale.trim()) {
      return row.aiRationale.trim();
    }
    const parts: string[] = [];
    if (row.hasTextConflict)
      parts.push('Different link names → same destination.');
    if (row.is404) parts.push('Destination not found (404/410).');
    if (row.anchorMissing) parts.push('Anchor target missing.');
    if (!parts.length) parts.push('Reason placeholder.');
    return parts.join(' ');
  }

  /** 6-type classifier; order matters. Canada.ca = apex or www only. */
  private classify(
    href: string,
    absUrl: string | null,
    anchorEl?: HTMLAnchorElement,
  ): LinkType {
    const raw = (href || '').trim();

    // 1) anchor
    if (raw.startsWith('#')) return 'anchor';

    // 2) special schemes
    if (/^mailto:/i.test(raw)) return 'mailto';

    // 3) download (pdf / <a download> / /webform path)
    const pathForTest = absUrl || raw;
    const isPdf = /\.pdf(\?|#|$)/i.test(pathForTest);
    const hasDownloadAttr = !!anchorEl?.hasAttribute('download');
    let isWebform = false;
    try {
      const u = new URL(absUrl || raw, CANADA_ORIGIN);
      isWebform = /\/webform(s)?\//i.test(u.pathname);
    } catch {
      /* ignore URL parse failure */
    }
    if (isPdf || hasDownloadAttr || isWebform) return 'download';

    // 4) Host-based classification
    try {
      const u = new URL(absUrl || raw, CANADA_ORIGIN);
      const hostLc = u.hostname.toLowerCase().replace(/^www\./, '');

      if (hostLc === 'canada.ca') {
        const p = u.pathname.toLowerCase();

        // 4a) CRA pages
        if (p.startsWith('/en/revenue-agency')) {
          return 'CRA page';
        }

        // 4b) Canada.ca services (explicitly requested)
        if (p.startsWith('/en/services')) {
          return 'Canada.ca';
        }

        // 4c) Any other canada.ca content → still treat as Canada.ca
        return 'Canada.ca';
      }
    } catch {
      /* fall through */
    }

    // 5) everything else
    return 'external';
  }

  // ---------- smart slug + smart match ----------

  private normalizeText(s: string) {
    return s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[/\-_]+/g, ' ')
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private tokenize(s: string) {
    const STOP = new Set([
      'a',
      'an',
      'the',
      'for',
      'to',
      'of',
      'and',
      'or',
      'on',
      'in',
      'with',
      'your',
      'program',
      'account',
      'information',
      'returns',
      'return',
      'services',
      'service',
      'tax',
      'taxes',
      'business',
      'businesses',
      'topics',
      'en',
      'fr',
    ]);
    return this.normalizeText(s)
      .split(' ')
      .filter((w) => w && !STOP.has(w));
  }

  private pathSegments(urlStr?: string | null): string[] {
    if (!urlStr) return [];
    try {
      const u = new URL(urlStr);
      const raw = u.pathname.split('/').filter(Boolean);
      return raw.map((seg) =>
        decodeURIComponent(seg).replace(/\.(html?|php|aspx?)$/i, ''),
      );
    } catch {
      return [];
    }
  }

  private smartSlugGuess(
    linkText: string,
    absUrl?: string | null,
  ): { guess: string | null; pathTokens: Set<string> } {
    const linkTokens = this.tokenize(linkText);

    // parse path segments
    const segs = this.pathSegments(absUrl);

    // ignore common boilerplate path parts
    const IGNORE = new Set([
      'en',
      'fr',
      'gov',
      'content',
      'services',
      'service',
      'government',
      'governments',
      'government-id',
      'id',
      'topics',
      'programs',
      'about',
      'info',
    ]);

    // try to split long glued words like "bcservicescardapp"
    const splitHard = (s: string): string[] => {
      const spaced = s
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Za-z])([0-9])/g, '$1 $2')
        .replace(/([0-9])([A-Za-z])/g, '$1 $2');
      // give common substrings a chance to split
      const soft = spaced.replace(
        /(bcservice|bcservices|service|services|card|login|app)/gi,
        ' $1 ',
      );
      const tokens = this.tokenize(soft);
      return tokens.length ? tokens : this.tokenize(spaced);
    };

    // build tokens for each segment (skip ignored)
    const segTokensList = segs.map((raw) => {
      const lowered = raw.toLowerCase();
      if (IGNORE.has(lowered)) return [] as string[];
      const tokens = this.tokenize(raw);
      if (tokens.length <= 1 && /[a-z]{8,}/i.test(raw)) return splitHard(raw);
      return tokens;
    });

    // collect all path tokens
    const allTokens = new Set<string>();
    for (const toks of segTokensList) for (const t of toks) allTokens.add(t);

    // score: overlap with linkText; tie-breaker favors *later* segments
    let bestGuess: string | null = null;
    let bestScore = -1;
    for (let i = 0; i < segTokensList.length; i++) {
      const segTokens = segTokensList[i];
      if (!segTokens.length) continue;

      let score = 0;
      if (linkTokens.length) {
        const cover =
          linkTokens.filter((t) => segTokens.includes(t)).length /
          linkTokens.length;
        const setL = new Set(linkTokens);
        const setS = new Set(segTokens);
        const inter = [...setL].filter((w) => setS.has(w)).length;
        const union = new Set([...setL, ...setS]).size || 1;
        const jacc = inter / union;
        score = cover * 0.7 + jacc * 0.3;
      }
      // prefer later segments on ties
      score += i / 1000;

      if (score > bestScore) {
        bestScore = score;
        bestGuess = segTokens.join(' ');
      }
    }

    // fallback: take the last non-ignored segment and split it nicely
    if (!bestGuess) {
      for (let i = segs.length - 1; i >= 0; i--) {
        const s = segs[i].toLowerCase();
        if (IGNORE.has(s)) continue;
        const toks = splitHard(segs[i]);
        bestGuess = toks.join(' ') || segs[i];
        for (const t of toks) allTokens.add(t);
        break;
      }
    }

    return { guess: bestGuess, pathTokens: allTokens };
  }

  private smartMatch(
    linkText: string,
    candidate: string | null,
    extraTokens?: Set<string>,
  ): LinkMatchStatus {
    if (!candidate && (!extraTokens || extraTokens.size === 0))
      return 'unknown';

    const A = this.tokenize(linkText);
    const B = this.tokenize(candidate || '');
    if (A.length === 0) return 'unknown';

    if (this.normalizeText(linkText) === this.normalizeText(candidate || ''))
      return 'match';

    const basket = new Set(B);
    if (extraTokens) for (const t of extraTokens) basket.add(t);
    const allIn = A.every((t) => basket.has(t));
    if (allIn) return 'match';

    const setA = new Set(A);
    const setB = new Set(B);
    const inter = [...setA].filter((w) => setB.has(w)).length;
    const union = new Set([...setA, ...setB]).size || 1;
    const j = inter / union;

    return j >= 0.6 ? 'match' : 'mismatch';
  }

  // style hooks used by template — actually use the row to satisfy no-unused-vars
  getTextStyle(row: HeadingData) {
    // Example: de-emphasize NA items
    return row.matchStatus === 'na' ? { opacity: 0.7 } : {};
  }
}
