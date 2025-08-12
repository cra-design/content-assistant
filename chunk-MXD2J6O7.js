import{$ as J,$a as Ua,$b as Qp,A as pr,Aa as Mp,Ab as _,Ac as hc,B as ti,Ba as Rp,Bb as Qe,C as Ql,Ca as Lp,Cb as Be,Cc as fc,D as Cp,Da as Op,Ea as Pp,Eb as Y,F as wp,Fa as Np,Fb as ln,G as Yl,Ga as Bi,Gb as j,H as Sp,Ha as Ba,Hb as H,I as Ct,Ia as Bp,Ib as pc,J as Dp,Ja as $p,Jb as qp,K as wt,Ka as b,Kb as Xt,L as fe,La as $i,Lb as ge,M as ut,Ma as ri,Mb as qe,N as k,Na as Vp,Nb as mt,O as ie,Oa as Zt,Ob as Wp,P as xp,Pa as B,Pb as mr,Q as se,Qa as Up,Qb as gr,R as Zl,Ra as Un,Rb as br,S as Q,Sa as rc,Sb as oe,T as w,Ta as oc,Tb as Gp,U as ni,Ua as jp,Ub as ke,Va as $a,Vb as oi,W as Ep,Wa as N,X as ii,Xa as re,Xb as Kp,Y as Qt,Ya as ce,Yb as ja,Z as ot,Za as Va,_ as X,_a as O,a as bp,aa as Ne,ab as A,b as vp,ba as F,bb as ac,bc as $e,c as yp,ca as Xl,cb as fr,cc as Ve,d as Wl,da as sn,db as Hp,e as Gl,ea as Jl,eb as mo,ec as xn,f as nt,fb as sc,fc as Yp,g as Kt,ga as Na,gb as lc,h as Vn,ha as W,hb as T,hc as Pt,i as ct,ia as ft,ib as m,ic as Zp,j as Z,ja as ec,jb as Dn,jc as Xp,k as uo,ka as Rt,kb as Ze,kc as Jp,l as ei,la as At,lb as St,lc as P,m as _p,ma as Ke,mb as V,mc as Me,na as Tp,nb as Ee,nc as Nt,o as ye,oa as tc,ob as cc,oc as Xe,p as Oa,pa as Ap,pb as uc,pc as go,q as Mt,qa as Yt,qb as dc,qc as eh,r as po,rb as D,s as ho,sa as nc,sb as x,t as dr,ta as Ip,tb as M,tc as cn,u as Pa,ua as ic,ub as He,uc as It,v as Sn,va as kp,vb as ze,w as Pi,wa as fo,wb as xe,wc as bt,x as on,xa as Ni,xb as Te,xc as un,y as Kl,ya as hr,yb as zp,yc as Dt,z as an,za as Fp,zb as ee}from"./chunk-25UEKKHO.js";import{a as I,b as Se,e as Iy,f as ky,h as De}from"./chunk-C3GRVDOV.js";var og=Iy((rg,zu)=>{"use strict";(function(t){function i(){var n=t();return n.default||n}if(typeof rg=="object"&&typeof zu=="object")zu.exports=i();else if(typeof define=="function"&&define.amd)define(i);else{var e=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:this||{};e.prettierPlugins=e.prettierPlugins||{},e.prettierPlugins.html=i()}})(function(){"use strict";var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,r=o=>{throw TypeError(o)},s=(o,a,c)=>a in o?t(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c,l=(o,a)=>{for(var c in a)t(o,c,{get:a[c],enumerable:!0})},d=(o,a,c,u)=>{if(a&&typeof a=="object"||typeof a=="function")for(let p of e(a))!n.call(o,p)&&p!==c&&t(o,p,{get:()=>a[p],enumerable:!(u=i(a,p))||u.enumerable});return o},h=o=>d(t({},"__esModule",{value:!0}),o),g=(o,a,c)=>s(o,typeof a!="symbol"?a+"":a,c),y=(o,a,c)=>a.has(o)||r("Cannot "+c),S=(o,a,c)=>(y(o,a,"read from private field"),c?c.call(o):a.get(o)),E=(o,a,c)=>a.has(o)?r("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(o):a.set(o,c),R=(o,a,c,u)=>(y(o,a,"write to private field"),u?u.call(o,c):a.set(o,c),c),q={};l(q,{languages:()=>gv,options:()=>vv,parsers:()=>Vd,printers:()=>Ty});var U=(o,a,c,u)=>{if(!(o&&a==null))return a.replaceAll?a.replaceAll(c,u):c.global?a.replace(c,u):a.split(c).join(u)},$=U,_e="string",Ie="array",Ce="cursor",Ge="indent",zt="align",Ot="trim",Gn="group",Pn="fill",Kn="if-break",Qn="indent-if-break",Ti="line-suffix",Ai="line-suffix-boundary",qt="line",Yn="label",Zn="break-parent",Ii=new Set([Ce,Ge,zt,Ot,Gn,Pn,Kn,Qn,Ti,Ai,qt,Yn,Zn]),Zi=(o,a,c)=>{if(!(o&&a==null))return Array.isArray(a)||typeof a=="string"?a[c<0?a.length+c:c]:a.at(c)},wn=Zi;function Xi(o){if(typeof o=="string")return _e;if(Array.isArray(o))return Ie;if(!o)return;let{type:a}=o;if(Ii.has(a))return a}var ki=Xi,Ji=o=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(o);function er(o){let a=o===null?"null":typeof o;if(a!=="string"&&a!=="object")return`Unexpected doc '${a}', 
Expected it to be 'string' or 'object'.`;if(ki(o))throw new Error("doc is valid.");let c=Object.prototype.toString.call(o);if(c!=="[object Object]")return`Unexpected doc '${c}'.`;let u=Ji([...Ii].map(p=>`'${p}'`));return`Unexpected doc.type '${o.type}'.
Expected it to be ${u}.`}var la=class extends Error{name="InvalidDocError";constructor(o){super(er(o)),this.doc=o}},ca=la;function Kr(o,a){if(typeof o=="string")return a(o);let c=new Map;return u(o);function u(f){if(c.has(f))return c.get(f);let v=p(f);return c.set(f,v),v}function p(f){switch(ki(f)){case Ie:return a(f.map(u));case Pn:return a(Se(I({},f),{parts:f.parts.map(u)}));case Kn:return a(Se(I({},f),{breakContents:u(f.breakContents),flatContents:u(f.flatContents)}));case Gn:{let{expandedStates:v,contents:C}=f;return v?(v=v.map(u),C=v[0]):C=u(C),a(Se(I({},f),{contents:C,expandedStates:v}))}case zt:case Ge:case Qn:case Yn:case Ti:return a(Se(I({},f),{contents:u(f.contents)}));case _e:case Ce:case Ot:case Ai:case qt:case Zn:return a(f);default:throw new ca(f)}}}function Ft(o,a=Bg){return Kr(o,c=>typeof c=="string"?nr(a,c.split(`
`)):c)}var Qr=()=>{},Nn=Qr,ua=Qr,fl=Qr;function Wt(o){return Nn(o),{type:Ge,contents:o}}function da(o,a){return Nn(a),{type:zt,contents:a,n:o}}function tt(o,a={}){return Nn(o),ua(a.expandedStates,!0),{type:Gn,id:a.id,contents:o,break:!!a.shouldBreak,expandedStates:a.expandedStates}}function ml(o){return da(Number.NEGATIVE_INFINITY,o)}function gl(o){return da({type:"root"},o)}function pa(o){return fl(o),{type:Pn,parts:o}}function tr(o,a="",c={}){return Nn(o),a!==""&&Nn(a),{type:Kn,breakContents:o,flatContents:a,groupId:c.groupId}}function bl(o,a){return Nn(o),{type:Qn,contents:o,groupId:a.groupId,negate:a.negate}}var Fi={type:Zn},vl={type:qt,hard:!0},yl={type:qt,hard:!0,literal:!0},Ye={type:qt},ht={type:qt,soft:!0},Oe=[vl,Fi],Bg=[yl,Fi];function nr(o,a){Nn(o),ua(a);let c=[];for(let u=0;u<a.length;u++)u!==0&&c.push(o),c.push(a[u]);return c}var ha="'",Xu='"';function $g(o,a){let c=a===!0||a===ha?ha:Xu,u=c===ha?Xu:ha,p=0,f=0;for(let v of o)v===c?p++:v===u&&f++;return p>f?u:c}var Vg=$g;function Ug(o){if(typeof o!="string")throw new TypeError("Expected a string");return o.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var tn,jg=class{constructor(o){E(this,tn),R(this,tn,new Set(o))}getLeadingWhitespaceCount(o){let a=S(this,tn),c=0;for(let u=0;u<o.length&&a.has(o.charAt(u));u++)c++;return c}getTrailingWhitespaceCount(o){let a=S(this,tn),c=0;for(let u=o.length-1;u>=0&&a.has(o.charAt(u));u--)c++;return c}getLeadingWhitespace(o){let a=this.getLeadingWhitespaceCount(o);return o.slice(0,a)}getTrailingWhitespace(o){let a=this.getTrailingWhitespaceCount(o);return o.slice(o.length-a)}hasLeadingWhitespace(o){return S(this,tn).has(o.charAt(0))}hasTrailingWhitespace(o){return S(this,tn).has(wn(!1,o,-1))}trimStart(o){let a=this.getLeadingWhitespaceCount(o);return o.slice(a)}trimEnd(o){let a=this.getTrailingWhitespaceCount(o);return o.slice(0,o.length-a)}trim(o){return this.trimEnd(this.trimStart(o))}split(o,a=!1){let c=`[${Ug([...S(this,tn)].join(""))}]+`,u=new RegExp(a?`(${c})`:c,"u");return o.split(u)}hasWhitespaceCharacter(o){let a=S(this,tn);return Array.prototype.some.call(o,c=>a.has(c))}hasNonWhitespaceCharacter(o){let a=S(this,tn);return Array.prototype.some.call(o,c=>!a.has(c))}isWhitespaceOnly(o){let a=S(this,tn);return Array.prototype.every.call(o,c=>a.has(c))}};tn=new WeakMap;var Hg=jg,zg=["	",`
`,"\f","\r"," "],qg=new Hg(zg),Bn=qg,Wg=class extends Error{name="UnexpectedNodeError";constructor(o,a,c="type"){super(`Unexpected ${a} node ${c}: ${JSON.stringify(o[c])}.`),this.node=o}},Gg=Wg;function Kg(o){return o?.type==="front-matter"}var fa=Kg,Qg=new Set(["sourceSpan","startSourceSpan","endSourceSpan","nameSpan","valueSpan","keySpan","tagDefinition","tokens","valueTokens","switchValueSourceSpan","expSourceSpan","valueSourceSpan"]),Yg=new Set(["if","else if","for","switch","case"]);function Ju(o,a){var c;if(o.type==="text"||o.type==="comment"||fa(o)||o.type==="yaml"||o.type==="toml")return null;if(o.type==="attribute"&&delete a.value,o.type==="docType"&&delete a.value,o.type==="angularControlFlowBlock"&&(c=o.parameters)!=null&&c.children)for(let u of a.parameters.children)Yg.has(o.name)?delete u.expression:u.expression=u.expression.trim();o.type==="angularIcuExpression"&&(a.switchValue=o.switchValue.trim()),o.type==="angularLetDeclarationInitializer"&&delete a.value}Ju.ignoredProperties=Qg;var Zg=Ju;function Xg(o,a){return De(this,null,function*(){if(o.language==="yaml"){let c=o.value.trim(),u=c?yield a(c,{parser:"yaml"}):"";return gl([o.startDelimiter,o.explicitLanguage,Oe,u,u?Oe:"",o.endDelimiter])}})}var Jg=Xg;function ma(o,a=!0){return[Wt([ht,o]),a?ht:""]}function ir(o,a){let c=o.type==="NGRoot"?o.node.type==="NGMicrosyntax"&&o.node.body.length===1&&o.node.body[0].type==="NGMicrosyntaxExpression"?o.node.body[0].expression:o.node:o.type==="JsExpressionRoot"?o.node:o;return c&&(c.type==="ObjectExpression"||c.type==="ArrayExpression"||(a.parser==="__vue_expression"||a.parser==="__vue_ts_expression")&&(c.type==="TemplateLiteral"||c.type==="StringLiteral"))}function nn(o,a,c,u){return De(this,null,function*(){c=I({__isInHtmlAttribute:!0,__embeddedInHtml:!0},c);let p=!0;u&&(c.__onHtmlBindingRoot=(v,C)=>{p=u(v,C)});let f=yield a(o,c,a);return p?tt(f):ma(f)})}function e0(o,a,c,u){let{node:p}=c,f=u.originalText.slice(p.sourceSpan.start.offset,p.sourceSpan.end.offset);return/^\s*$/u.test(f)?"":nn(f,o,{parser:"__ng_directive",__isInHtmlAttribute:!1},ir)}var t0=e0,n0=(o,a)=>{if(!(o&&a==null))return a.toReversed||!Array.isArray(a)?a.toReversed():[...a].reverse()},i0=n0;function r0(o){return Array.isArray(o)&&o.length>0}var _l=r0,ed,td,nd,id,rd,o0=((ed=globalThis.Deno)==null?void 0:ed.build.os)==="windows"||((nd=(td=globalThis.navigator)==null?void 0:td.platform)==null?void 0:nd.startsWith("Win"))||((rd=(id=globalThis.process)==null?void 0:id.platform)==null?void 0:rd.startsWith("win"))||!1;function od(o){if(o=o instanceof URL?o:new URL(o),o.protocol!=="file:")throw new TypeError(`URL must be a file URL: received "${o.protocol}"`);return o}function a0(o){return o=od(o),decodeURIComponent(o.pathname.replace(/%(?![0-9A-Fa-f]{2})/g,"%25"))}function s0(o){o=od(o);let a=decodeURIComponent(o.pathname.replace(/\//g,"\\").replace(/%(?![0-9A-Fa-f]{2})/g,"%25")).replace(/^\\*([A-Za-z]:)(\\|$)/,"$1\\");return o.hostname!==""&&(a=`\\\\${o.hostname}${a}`),a}function l0(o){return o0?s0(o):a0(o)}var c0=l0,u0=o=>String(o).split(/[/\\]/u).pop();function ad(o,a){if(!a)return;let c=u0(a).toLowerCase();return o.find(({filenames:u})=>u?.some(p=>p.toLowerCase()===c))??o.find(({extensions:u})=>u?.some(p=>c.endsWith(p)))}function d0(o,a){if(a)return o.find(({name:c})=>c.toLowerCase()===a)??o.find(({aliases:c})=>c?.includes(a))??o.find(({extensions:c})=>c?.includes(`.${a}`))}function sd(o,a){if(a){if(String(a).startsWith("file:"))try{a=c0(a)}catch{return}if(typeof a=="string")return o.find(({isSupported:c})=>c?.({filepath:a}))}}function p0(o,a){let c=i0(!1,o.plugins).flatMap(p=>p.languages??[]),u=d0(c,a.language)??ad(c,a.physicalFile)??ad(c,a.file)??sd(c,a.physicalFile)??sd(c,a.file)??(a.physicalFile,void 0);return u?.parsers[0]}var ga=p0,h0="inline",ld={area:"none",base:"none",basefont:"none",datalist:"none",head:"none",link:"none",meta:"none",noembed:"none",noframes:"none",param:"block",rp:"none",script:"block",style:"none",template:"inline",title:"none",html:"block",body:"block",address:"block",blockquote:"block",center:"block",dialog:"block",div:"block",figure:"block",figcaption:"block",footer:"block",form:"block",header:"block",hr:"block",legend:"block",listing:"block",main:"block",p:"block",plaintext:"block",pre:"block",search:"block",xmp:"block",slot:"contents",ruby:"ruby",rt:"ruby-text",article:"block",aside:"block",h1:"block",h2:"block",h3:"block",h4:"block",h5:"block",h6:"block",hgroup:"block",nav:"block",section:"block",dir:"block",dd:"block",dl:"block",dt:"block",menu:"block",ol:"block",ul:"block",li:"list-item",table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell",input:"inline-block",button:"inline-block",fieldset:"block",details:"block",summary:"block",marquee:"inline-block",source:"block",track:"block",meter:"inline-block",progress:"inline-block",object:"inline-block",video:"inline-block",audio:"inline-block",select:"inline-block",option:"block",optgroup:"block"},f0="normal",cd={listing:"pre",plaintext:"pre",pre:"pre",xmp:"pre",nobr:"nowrap",table:"initial",textarea:"pre-wrap"};function m0(o){return o.type==="element"&&!o.hasExplicitNamespace&&!["html","svg"].includes(o.namespace)}var Yr=m0,g0=o=>$(!1,o,/^[\t\f\r ]*\n/gu,""),ud=o=>g0(Bn.trimEnd(o)),b0=o=>{let a=o,c=Bn.getLeadingWhitespace(a);c&&(a=a.slice(c.length));let u=Bn.getTrailingWhitespace(a);return u&&(a=a.slice(0,-u.length)),{leadingWhitespace:c,trailingWhitespace:u,text:a}};function dd(o,a){return!!(o.type==="ieConditionalComment"&&o.lastChild&&!o.lastChild.isSelfClosing&&!o.lastChild.endSourceSpan||o.type==="ieConditionalComment"&&!o.complete||rr(o)&&o.children.some(c=>c.type!=="text"&&c.type!=="interpolation")||Sl(o,a)&&!$n(o,a)&&o.type!=="interpolation")}function ba(o){return o.type==="attribute"||!o.parent||!o.prev?!1:v0(o.prev)}function v0(o){return o.type==="comment"&&o.value.trim()==="prettier-ignore"}function Gt(o){return o.type==="text"||o.type==="comment"}function $n(o,a){return o.type==="element"&&(o.fullName==="script"||o.fullName==="style"||o.fullName==="svg:style"||o.fullName==="svg:script"||o.fullName==="mj-style"&&a.parser==="mjml"||Yr(o)&&(o.name==="script"||o.name==="style"))}function y0(o,a){return o.children&&!$n(o,a)}function _0(o,a){return $n(o,a)||o.type==="interpolation"||pd(o)}function pd(o){return _d(o).startsWith("pre")}function C0(o,a){var c,u;let p=f();if(p&&!o.prev&&(u=(c=o.parent)==null?void 0:c.tagDefinition)!=null&&u.ignoreFirstLf)return o.type==="interpolation";return p;function f(){return fa(o)||o.type==="angularControlFlowBlock"?!1:(o.type==="text"||o.type==="interpolation")&&o.prev&&(o.prev.type==="text"||o.prev.type==="interpolation")?!0:!o.parent||o.parent.cssDisplay==="none"?!1:rr(o.parent)?!0:!(!o.prev&&(o.parent.type==="root"||rr(o)&&o.parent||$n(o.parent,a)||ya(o.parent,a)||!k0(o.parent.cssDisplay))||o.prev&&!R0(o.prev.cssDisplay))}}function w0(o,a){return fa(o)||o.type==="angularControlFlowBlock"?!1:(o.type==="text"||o.type==="interpolation")&&o.next&&(o.next.type==="text"||o.next.type==="interpolation")?!0:!o.parent||o.parent.cssDisplay==="none"?!1:rr(o.parent)?!0:!(!o.next&&(o.parent.type==="root"||rr(o)&&o.parent||$n(o.parent,a)||ya(o.parent,a)||!F0(o.parent.cssDisplay))||o.next&&!M0(o.next.cssDisplay))}function S0(o,a){return L0(o.cssDisplay)&&!$n(o,a)}function va(o){return fa(o)||o.next&&o.sourceSpan.end&&o.sourceSpan.end.line+1<o.next.sourceSpan.start.line}function D0(o){return hd(o)||o.type==="element"&&o.children.length>0&&(["body","script","style"].includes(o.name)||o.children.some(a=>E0(a)))||o.firstChild&&o.firstChild===o.lastChild&&o.firstChild.type!=="text"&&md(o.firstChild)&&(!o.lastChild.isTrailingSpaceSensitive||gd(o.lastChild))}function hd(o){return o.type==="element"&&o.children.length>0&&(["html","head","ul","ol","select"].includes(o.name)||o.cssDisplay.startsWith("table")&&o.cssDisplay!=="table-cell")}function Cl(o){return bd(o)||o.prev&&x0(o.prev)||fd(o)}function x0(o){return bd(o)||o.type==="element"&&o.fullName==="br"||fd(o)}function fd(o){return md(o)&&gd(o)}function md(o){return o.hasLeadingSpaces&&(o.prev?o.prev.sourceSpan.end.line<o.sourceSpan.start.line:o.parent.type==="root"||o.parent.startSourceSpan.end.line<o.sourceSpan.start.line)}function gd(o){return o.hasTrailingSpaces&&(o.next?o.next.sourceSpan.start.line>o.sourceSpan.end.line:o.parent.type==="root"||o.parent.endSourceSpan&&o.parent.endSourceSpan.start.line>o.sourceSpan.end.line)}function bd(o){switch(o.type){case"ieConditionalComment":case"comment":case"directive":return!0;case"element":return["script","select"].includes(o.name)}return!1}function wl(o){return o.lastChild?wl(o.lastChild):o}function E0(o){var a;return(a=o.children)==null?void 0:a.some(c=>c.type!=="text")}function vd(o){if(o)switch(o){case"module":case"text/javascript":case"text/babel":case"text/jsx":case"application/javascript":return"babel";case"application/x-typescript":return"typescript";case"text/markdown":return"markdown";case"text/html":return"html";case"text/x-handlebars-template":return"glimmer";default:if(o.endsWith("json")||o.endsWith("importmap")||o==="speculationrules")return"json"}}function T0(o,a){let{name:c,attrMap:u}=o;if(c!=="script"||Object.prototype.hasOwnProperty.call(u,"src"))return;let{type:p,lang:f}=o.attrMap;return!f&&!p?"babel":ga(a,{language:f})??vd(p)}function A0(o,a){if(!Sl(o,a))return;let{attrMap:c}=o;if(Object.prototype.hasOwnProperty.call(c,"src"))return;let{type:u,lang:p}=c;return ga(a,{language:p})??vd(u)}function I0(o,a){if(o.name==="style"){let{lang:c}=o.attrMap;return c?ga(a,{language:c}):"css"}if(o.name==="mj-style"&&a.parser==="mjml")return"css"}function yd(o,a){return T0(o,a)??I0(o,a)??A0(o,a)}function Zr(o){return o==="block"||o==="list-item"||o.startsWith("table")}function k0(o){return!Zr(o)&&o!=="inline-block"}function F0(o){return!Zr(o)&&o!=="inline-block"}function M0(o){return!Zr(o)}function R0(o){return!Zr(o)}function L0(o){return!Zr(o)&&o!=="inline-block"}function rr(o){return _d(o).startsWith("pre")}function O0(o,a){let c=o;for(;c;){if(a(c))return!0;c=c.parent}return!1}function P0(o,a){var c;if(or(o,a))return"block";if(((c=o.prev)==null?void 0:c.type)==="comment"){let p=o.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);if(p)return p[1]}let u=!1;if(o.type==="element"&&o.namespace==="svg")if(O0(o,p=>p.fullName==="svg:foreignObject"))u=!0;else return o.name==="svg"?"inline-block":"block";switch(a.htmlWhitespaceSensitivity){case"strict":return"inline";case"ignore":return"block";default:if(o.type==="element"&&(!o.namespace||u||Yr(o))&&Object.prototype.hasOwnProperty.call(ld,o.name))return ld[o.name]}return h0}function _d(o){return o.type==="element"&&(!o.namespace||Yr(o))&&Object.prototype.hasOwnProperty.call(cd,o.name)?cd[o.name]:f0}function N0(o){let a=Number.POSITIVE_INFINITY;for(let c of o.split(`
`)){if(c.length===0)continue;let u=Bn.getLeadingWhitespaceCount(c);if(u===0)return 0;c.length!==u&&u<a&&(a=u)}return a===Number.POSITIVE_INFINITY?0:a}function Cd(o,a=N0(o)){return a===0?o:o.split(`
`).map(c=>c.slice(a)).join(`
`)}function wd(o){return $(!1,$(!1,o,"&apos;","'"),"&quot;",'"')}function Xn(o){return wd(o.value)}var B0=new Set(["template","style","script"]);function ya(o,a){return or(o,a)&&!B0.has(o.fullName)}function or(o,a){return a.parser==="vue"&&o.type==="element"&&o.parent.type==="root"&&o.fullName.toLowerCase()!=="html"}function Sl(o,a){return or(o,a)&&(ya(o,a)||o.attrMap.lang&&o.attrMap.lang!=="html")}function $0(o){let a=o.fullName;return a.charAt(0)==="#"||a==="slot-scope"||a==="v-slot"||a.startsWith("v-slot:")}function V0(o,a){let c=o.parent;if(!or(c,a))return!1;let u=c.fullName,p=o.fullName;return u==="script"&&p==="setup"||u==="style"&&p==="vars"}function Sd(o,a=o.value){return o.parent.isWhitespaceSensitive?o.parent.isIndentationSensitive?Ft(a):Ft(Cd(ud(a)),Oe):nr(Ye,Bn.split(a))}function Dd(o,a){return or(o,a)&&o.name==="script"}var xd=/\{\{(.+?)\}\}/su;function U0(o,a){return De(this,null,function*(){let c=[];for(let[u,p]of o.split(xd).entries())if(u%2===0)c.push(Ft(p));else try{c.push(tt(["{{",Wt([Ye,yield nn(p,a,{parser:"__ng_interpolation",__isInHtmlInterpolation:!0})]),Ye,"}}"]))}catch{c.push("{{",Ft(p),"}}")}return c})}function Dl({parser:o}){return(a,c,u)=>nn(Xn(u.node),a,{parser:o},ir)}var j0=Dl({parser:"__ng_action"}),H0=Dl({parser:"__ng_binding"}),z0=Dl({parser:"__ng_directive"});function q0(o,a){if(a.parser!=="angular")return;let{node:c}=o,u=c.fullName;if(u.startsWith("(")&&u.endsWith(")")||u.startsWith("on-"))return j0;if(u.startsWith("[")&&u.endsWith("]")||/^bind(?:on)?-/u.test(u)||/^ng-(?:if|show|hide|class|style)$/u.test(u))return H0;if(u.startsWith("*"))return z0;let p=Xn(c);if(/^i18n(?:-.+)?$/u.test(u))return()=>ma(pa(Sd(c,p.trim())),!p.includes("@@"));if(xd.test(p))return f=>U0(p,f)}var W0=q0;function G0(o,a){let{node:c}=o,u=Xn(c);if(c.fullName==="class"&&!a.parentParser&&!u.includes("{{"))return()=>u.trim().split(/\s+/u).join(" ")}var K0=G0;function Ed(o){return o==="	"||o===`
`||o==="\f"||o==="\r"||o===" "}var Q0=/^[ \t\n\r\u000c]+/,Y0=/^[, \t\n\r\u000c]+/,Z0=/^[^ \t\n\r\u000c]+/,X0=/[,]+$/,Td=/^\d+$/,J0=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function eb(o){let a=o.length,c,u,p,f,v,C=0,L;function K(be){let Pe,st=be.exec(o.substring(C));if(st)return[Pe]=st,C+=Pe.length,Pe}let z=[];for(;;){if(K(Y0),C>=a){if(z.length===0)throw new Error("Must contain one or more image candidate strings.");return z}L=C,c=K(Z0),u=[],c.slice(-1)===","?(c=c.replace(X0,""),he()):we()}function we(){for(K(Q0),p="",f="in descriptor";;){if(v=o.charAt(C),f==="in descriptor")if(Ed(v))p&&(u.push(p),p="",f="after descriptor");else if(v===","){C+=1,p&&u.push(p),he();return}else if(v==="(")p+=v,f="in parens";else if(v===""){p&&u.push(p),he();return}else p+=v;else if(f==="in parens")if(v===")")p+=v,f="in descriptor";else if(v===""){u.push(p),he();return}else p+=v;else if(f==="after descriptor"&&!Ed(v))if(v===""){he();return}else f="in descriptor",C-=1;C+=1}}function he(){let be=!1,Pe,st,gt,_t,G={},ve,lt,rt,Tt,ur;for(_t=0;_t<u.length;_t++)ve=u[_t],lt=ve[ve.length-1],rt=ve.substring(0,ve.length-1),Tt=parseInt(rt,10),ur=parseFloat(rt),Td.test(rt)&&lt==="w"?((Pe||st)&&(be=!0),Tt===0?be=!0:Pe=Tt):J0.test(rt)&&lt==="x"?((Pe||st||gt)&&(be=!0),ur<0?be=!0:st=ur):Td.test(rt)&&lt==="h"?((gt||st)&&(be=!0),Tt===0?be=!0:gt=Tt):be=!0;if(!be)G.source={value:c,startOffset:L},Pe&&(G.width={value:Pe}),st&&(G.density={value:st}),gt&&(G.height={value:gt}),z.push(G);else throw new Error(`Invalid srcset descriptor found in "${o}" at "${ve}".`)}}var tb=eb;function nb(o){if(o.node.fullName==="srcset"&&(o.parent.fullName==="img"||o.parent.fullName==="source"))return()=>rb(Xn(o.node))}var Ad={width:"w",height:"h",density:"x"},ib=Object.keys(Ad);function rb(o){let a=tb(o),c=ib.filter(z=>a.some(we=>Object.prototype.hasOwnProperty.call(we,z)));if(c.length>1)throw new Error("Mixed descriptor in srcset is not supported");let[u]=c,p=Ad[u],f=a.map(z=>z.source.value),v=Math.max(...f.map(z=>z.length)),C=a.map(z=>z[u]?String(z[u].value):""),L=C.map(z=>{let we=z.indexOf(".");return we===-1?z.length:we}),K=Math.max(...L);return ma(nr([",",Ye],f.map((z,we)=>{let he=[z],be=C[we];if(be){let Pe=v-z.length+1,st=K-L[we],gt=" ".repeat(Pe+st);he.push(tr(gt," "),be+p)}return he})))}var ob=nb;function ab(o,a){let{node:c}=o,u=Xn(o.node).trim();if(c.fullName==="style"&&!a.parentParser&&!u.includes("{{"))return p=>De(null,null,function*(){return ma(yield p(u,{parser:"css",__isHTMLStyleAttribute:!0}))})}var xl=new WeakMap;function sb(o,a){let{root:c}=o;return xl.has(c)||xl.set(c,c.children.some(u=>Dd(u,a)&&["ts","typescript"].includes(u.attrMap.lang))),xl.get(c)}var El=sb;function lb(o,a,c){let{node:u}=c,p=Xn(u);return nn(`type T<${p}> = any`,o,{parser:"babel-ts",__isEmbeddedTypescriptGenericParameters:!0},ir)}function cb(o,a,{parseWithTs:c}){return nn(`function _(${o}) {}`,a,{parser:c?"babel-ts":"babel",__isVueBindings:!0})}function ub(o,a,c,u){return De(this,null,function*(){let p=Xn(c.node),{left:f,operator:v,right:C}=db(p),L=El(c,u);return[tt(yield nn(`function _(${f}) {}`,o,{parser:L?"babel-ts":"babel",__isVueForBindingLeft:!0}))," ",v," ",yield nn(C,o,{parser:L?"__ts_expression":"__js_expression"})]})}function db(o){let a=/(.*?)\s+(in|of)\s+(.*)/su,c=/,([^,\]}]*)(?:,([^,\]}]*))?$/u,u=/^\(|\)$/gu,p=o.match(a);if(!p)return;let f={};if(f.for=p[3].trim(),!f.for)return;let v=$(!1,p[1].trim(),u,""),C=v.match(c);C?(f.alias=v.replace(c,""),f.iterator1=C[1].trim(),C[2]&&(f.iterator2=C[2].trim())):f.alias=v;let L=[f.alias,f.iterator1,f.iterator2];if(!L.some((K,z)=>!K&&(z===0||L.slice(z+1).some(Boolean))))return{left:L.filter(Boolean).join(","),operator:p[2],right:f.for}}function pb(o,a){if(a.parser!=="vue")return;let{node:c}=o,u=c.fullName;if(u==="v-for")return ub;if(u==="generic"&&Dd(c.parent,a))return lb;let p=Xn(c),f=El(o,a);if($0(c)||V0(c,a))return v=>cb(p,v,{parseWithTs:f});if(u.startsWith("@")||u.startsWith("v-on:"))return v=>hb(p,v,{parseWithTs:f});if(u.startsWith(":")||u.startsWith(".")||u.startsWith("v-bind:"))return v=>fb(p,v,{parseWithTs:f});if(u.startsWith("v-"))return v=>Id(p,v,{parseWithTs:f})}function hb(u,p,f){return De(this,arguments,function*(o,a,{parseWithTs:c}){var v;try{return yield Id(o,a,{parseWithTs:c})}catch(C){if(((v=C.cause)==null?void 0:v.code)!=="BABEL_PARSER_SYNTAX_ERROR")throw C}return nn(o,a,{parser:c?"__vue_ts_event_binding":"__vue_event_binding"},ir)})}function fb(o,a,{parseWithTs:c}){return nn(o,a,{parser:c?"__vue_ts_expression":"__vue_expression"},ir)}function Id(o,a,{parseWithTs:c}){return nn(o,a,{parser:c?"__ts_expression":"__js_expression"},ir)}var mb=pb;function gb(o,a){let{node:c}=o;if(c.value){if(/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(a.originalText.slice(c.valueSpan.start.offset,c.valueSpan.end.offset))||a.parser==="lwc"&&c.value.startsWith("{")&&c.value.endsWith("}"))return[c.rawName,"=",c.value];for(let u of[ob,ab,K0,mb,W0]){let p=u(o,a);if(p)return bb(p)}}}function bb(o){return(a,c,u,p)=>De(null,null,function*(){let f=yield o(a,c,u,p);if(f)return f=Kr(f,v=>typeof v=="string"?$(!1,v,'"',"&quot;"):v),[u.node.rawName,'="',tt(f),'"']})}var vb=gb,yb=new Proxy(()=>{},{get:()=>yb});function Xr(o){return o.sourceSpan.start.offset}function _a(o){return o.sourceSpan.end.offset}function Tl(o,a){return[o.isSelfClosing?"":_b(o,a),Jr(o,a)]}function _b(o,a){return o.lastChild&&no(o.lastChild)?"":[Cb(o,a),Al(o,a)]}function Jr(o,a){return(o.next?Ri(o.next):to(o.parent))?"":[eo(o,a),Mi(o,a)]}function Cb(o,a){return to(o)?eo(o.lastChild,a):""}function Mi(o,a){return no(o)?Al(o.parent,a):Ca(o)?kl(o.next,a):""}function Al(o,a){if(kd(o,a))return"";switch(o.type){case"ieConditionalComment":return"<!";case"element":if(o.hasHtmComponentClosingTag)return"<//";default:return`</${o.rawName}`}}function eo(o,a){if(kd(o,a))return"";switch(o.type){case"ieConditionalComment":case"ieConditionalEndComment":return"[endif]-->";case"ieConditionalStartComment":return"]><!-->";case"interpolation":return"}}";case"angularIcuExpression":return"}";case"element":if(o.isSelfClosing)return"/>";default:return">"}}function kd(o,a){return!o.isSelfClosing&&!o.endSourceSpan&&(ba(o)||dd(o.parent,a))}function Ri(o){return o.prev&&o.prev.type!=="docType"&&o.type!=="angularControlFlowBlock"&&!Gt(o.prev)&&o.isLeadingSpaceSensitive&&!o.hasLeadingSpaces}function to(o){var a;return((a=o.lastChild)==null?void 0:a.isTrailingSpaceSensitive)&&!o.lastChild.hasTrailingSpaces&&!Gt(wl(o.lastChild))&&!rr(o)}function no(o){return!o.next&&!o.hasTrailingSpaces&&o.isTrailingSpaceSensitive&&Gt(wl(o))}function Ca(o){return o.next&&!Gt(o.next)&&Gt(o)&&o.isTrailingSpaceSensitive&&!o.hasTrailingSpaces}function wb(o){let a=o.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);return a?a[1]?a[1].split(/\s+/u):!0:!1}function wa(o){return!o.prev&&o.isLeadingSpaceSensitive&&!o.hasLeadingSpaces}function Sb(o,a,c){var u;let{node:p}=o;if(!_l(p.attrs))return p.isSelfClosing?" ":"";let f=((u=p.prev)==null?void 0:u.type)==="comment"&&wb(p.prev.value),v=typeof f=="boolean"?()=>f:Array.isArray(f)?we=>f.includes(we.rawName):()=>!1,C=o.map(({node:we})=>v(we)?Ft(a.originalText.slice(Xr(we),_a(we))):c(),"attrs"),L=p.type==="element"&&p.fullName==="script"&&p.attrs.length===1&&p.attrs[0].fullName==="src"&&p.children.length===0,K=a.singleAttributePerLine&&p.attrs.length>1&&!or(p,a)?Oe:Ye,z=[Wt([L?" ":Ye,nr(K,C)])];return p.firstChild&&wa(p.firstChild)||p.isSelfClosing&&to(p.parent)||L?z.push(p.isSelfClosing?" ":""):z.push(a.bracketSameLine?p.isSelfClosing?" ":"":p.isSelfClosing?Ye:ht),z}function Db(o){return o.firstChild&&wa(o.firstChild)?"":Fl(o)}function Il(o,a,c){let{node:u}=o;return[io(u,a),Sb(o,a,c),u.isSelfClosing?"":Db(u)]}function io(o,a){return o.prev&&Ca(o.prev)?"":[Li(o,a),kl(o,a)]}function Li(o,a){return wa(o)?Fl(o.parent):Ri(o)?eo(o.prev,a):""}var Fd="<!doctype";function kl(o,a){switch(o.type){case"ieConditionalComment":case"ieConditionalStartComment":return`<!--[if ${o.condition}`;case"ieConditionalEndComment":return"<!--<!";case"interpolation":return"{{";case"docType":{if(o.value==="html"){let{filepath:u}=a;if(u&&/\.html?$/u.test(u))return Fd}let c=Xr(o);return a.originalText.slice(c,c+Fd.length)}case"angularIcuExpression":return"{";case"element":if(o.condition)return`<!--[if ${o.condition}]><!--><${o.rawName}`;default:return`<${o.rawName}`}}function Fl(o){switch(o.type){case"ieConditionalComment":return"]>";case"element":if(o.condition)return"><!--<![endif]-->";default:return">"}}function xb(o,a){if(!o.endSourceSpan)return"";let c=o.startSourceSpan.end.offset;o.firstChild&&wa(o.firstChild)&&(c-=Fl(o).length);let u=o.endSourceSpan.start.offset;return o.lastChild&&no(o.lastChild)?u+=Al(o,a).length:to(o)&&(u-=eo(o.lastChild,a).length),a.originalText.slice(c,u)}var Md=xb,Eb=new Set(["if","else if","for","switch","case"]);function Tb(o,a){let{node:c}=o;switch(c.type){case"element":if($n(c,a)||c.type==="interpolation")return;if(!c.isSelfClosing&&Sl(c,a)){let u=yd(c,a);return u?(p,f)=>De(null,null,function*(){let v=Md(c,a),C=/^\s*$/u.test(v),L="";return C||(L=yield p(ud(v),{parser:u,__embeddedInHtml:!0}),C=L===""),[Li(c,a),tt(Il(o,a,f)),C?"":Oe,L,C?"":Oe,Tl(c,a),Mi(c,a)]}):void 0}break;case"text":if($n(c.parent,a)){let u=yd(c.parent,a);if(u)return p=>De(null,null,function*(){let f=u==="markdown"?Cd(c.value.replace(/^[^\S\n]*\n/u,"")):c.value,v={parser:u,__embeddedInHtml:!0};if(a.parser==="html"&&u==="babel"){let C="script",{attrMap:L}=c.parent;L&&(L.type==="module"||(L.type==="text/babel"||L.type==="text/jsx")&&L["data-type"]==="module")&&(C="module"),v.__babelSourceType=C}return[Fi,Li(c,a),yield p(f,v),Mi(c,a)]})}else if(c.parent.type==="interpolation")return u=>De(null,null,function*(){let p={__isInHtmlInterpolation:!0,__embeddedInHtml:!0};return a.parser==="angular"?p.parser="__ng_interpolation":a.parser==="vue"?p.parser=El(o,a)?"__vue_ts_expression":"__vue_expression":p.parser="__js_expression",[Wt([Ye,yield u(c.value,p)]),c.parent.next&&Ri(c.parent.next)?" ":Ye]});break;case"attribute":return vb(o,a);case"front-matter":return u=>Jg(c,u);case"angularControlFlowBlockParameters":return Eb.has(o.parent.name)?t0:void 0;case"angularLetDeclarationInitializer":return u=>nn(c.value,u,{parser:"__ng_binding",__isInHtmlAttribute:!1})}}var Ab=Tb,ro=null;function oo(o){if(ro!==null&&typeof ro.property){let a=ro;return ro=oo.prototype=null,a}return ro=oo.prototype=o??Object.create(null),new oo}var Ib=10;for(let o=0;o<=Ib;o++)oo();function kb(o){return oo(o)}function Fb(o,a="type"){kb(o);function c(u){let p=u[a],f=o[p];if(!Array.isArray(f))throw Object.assign(new Error(`Missing visitor keys for '${p}'.`),{node:u});return f}return c}var Mb=Fb,Rb={"front-matter":[],root:["children"],element:["attrs","children"],ieConditionalComment:["children"],ieConditionalStartComment:[],ieConditionalEndComment:[],interpolation:["children"],text:["children"],docType:[],comment:[],attribute:[],cdata:[],angularControlFlowBlock:["children","parameters"],angularControlFlowBlockParameters:["children"],angularControlFlowBlockParameter:[],angularLetDeclaration:["init"],angularLetDeclarationInitializer:[],angularIcuExpression:["cases"],angularIcuCase:["expression"]},Lb=Rb,Ob=Mb(Lb),Pb=Ob,Nb="format",Bb=/^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u,$b=/^\s*<!--\s*@(?:format|prettier)\s*-->/u;function Vb(o){return $b.test(o)}function Ub(o){return Bb.test(o)}function jb(o){return`<!-- @${Nb} -->

${o}`}var Hb=new Map([["if",new Set(["else if","else"])],["else if",new Set(["else if","else"])],["for",new Set(["empty"])],["defer",new Set(["placeholder","error","loading"])],["placeholder",new Set(["placeholder","error","loading"])],["error",new Set(["placeholder","error","loading"])],["loading",new Set(["placeholder","error","loading"])]]);function Rd(o){let a=_a(o);return o.type==="element"&&!o.endSourceSpan&&_l(o.children)?Math.max(a,Rd(wn(!1,o.children,-1))):a}function ao(o,a,c){let u=o.node;if(ba(u)){let p=Rd(u);return[Li(u,a),Ft(Bn.trimEnd(a.originalText.slice(Xr(u)+(u.prev&&Ca(u.prev)?kl(u).length:0),p-(u.next&&Ri(u.next)?eo(u,a).length:0)))),Mi(u,a)]}return c()}function Sa(o,a){return Gt(o)&&Gt(a)?o.isTrailingSpaceSensitive?o.hasTrailingSpaces?Cl(a)?Oe:Ye:"":Cl(a)?Oe:ht:Ca(o)&&(ba(a)||a.firstChild||a.isSelfClosing||a.type==="element"&&a.attrs.length>0)||o.type==="element"&&o.isSelfClosing&&Ri(a)?"":!a.isLeadingSpaceSensitive||Cl(a)||Ri(a)&&o.lastChild&&no(o.lastChild)&&o.lastChild.lastChild&&no(o.lastChild.lastChild)?Oe:a.hasLeadingSpaces?Ye:ht}function Ml(o,a,c){let{node:u}=o;if(hd(u))return[Fi,...o.map(f=>{let v=f.node,C=v.prev?Sa(v.prev,v):"";return[C?[C,va(v.prev)?Oe:""]:"",ao(f,a,c)]},"children")];let p=u.children.map(()=>Symbol(""));return o.map((f,v)=>{let C=f.node;if(Gt(C)){if(C.prev&&Gt(C.prev)){let Pe=Sa(C.prev,C);if(Pe)return va(C.prev)?[Oe,Oe,ao(f,a,c)]:[Pe,ao(f,a,c)]}return ao(f,a,c)}let L=[],K=[],z=[],we=[],he=C.prev?Sa(C.prev,C):"",be=C.next?Sa(C,C.next):"";return he&&(va(C.prev)?L.push(Oe,Oe):he===Oe?L.push(Oe):Gt(C.prev)?K.push(he):K.push(tr("",ht,{groupId:p[v-1]}))),be&&(va(C)?Gt(C.next)&&we.push(Oe,Oe):be===Oe?Gt(C.next)&&we.push(Oe):z.push(be)),[...L,tt([...K,tt([ao(f,a,c),...z],{id:p[v]})]),...we]},"children")}function zb(o,a,c){let{node:u}=o,p=[];qb(o)&&p.push("} "),p.push("@",u.name),u.parameters&&p.push(" (",tt(c("parameters")),")"),p.push(" {");let f=Ld(u);return u.children.length>0?(u.firstChild.hasLeadingSpaces=!0,u.lastChild.hasTrailingSpaces=!0,p.push(Wt([Oe,Ml(o,a,c)])),f&&p.push(Oe,"}")):f&&p.push("}"),tt(p,{shouldBreak:!0})}function Ld(o){var a,c;return!(((a=o.next)==null?void 0:a.type)==="angularControlFlowBlock"&&(c=Hb.get(o.name))!=null&&c.has(o.next.name))}function qb(o){let{previous:a}=o;return a?.type==="angularControlFlowBlock"&&!ba(a)&&!Ld(a)}function Wb(o,a,c){return[Wt([ht,nr([";",Ye],o.map(c,"children"))]),ht]}function Gb(o,a,c){let{node:u}=o;return[io(u,a),tt([u.switchValue.trim(),", ",u.clause,u.cases.length>0?[",",Wt([Ye,nr(Ye,o.map(c,"cases"))])]:"",ht]),Jr(u,a)]}function Kb(o,a,c){let{node:u}=o;return[u.value," {",tt([Wt([ht,o.map(({node:p,isLast:f})=>{let v=[c()];return p.type==="text"&&(p.hasLeadingSpaces&&v.unshift(Ye),p.hasTrailingSpaces&&!f&&v.push(Ye)),v},"expression")]),ht]),"}"]}function Qb(o,a,c){let{node:u}=o;if(dd(u,a))return[Li(u,a),tt(Il(o,a,c)),Ft(Md(u,a)),...Tl(u,a),Mi(u,a)];let p=u.children.length===1&&(u.firstChild.type==="interpolation"||u.firstChild.type==="angularIcuExpression")&&u.firstChild.isLeadingSpaceSensitive&&!u.firstChild.hasLeadingSpaces&&u.lastChild.isTrailingSpaceSensitive&&!u.lastChild.hasTrailingSpaces,f=Symbol("element-attr-group-id"),v=z=>tt([tt(Il(o,a,c),{id:f}),z,Tl(u,a)]),C=z=>p?bl(z,{groupId:f}):($n(u,a)||ya(u,a))&&u.parent.type==="root"&&a.parser==="vue"&&!a.vueIndentScriptAndStyle?z:Wt(z),L=()=>p?tr(ht,"",{groupId:f}):u.firstChild.hasLeadingSpaces&&u.firstChild.isLeadingSpaceSensitive?Ye:u.firstChild.type==="text"&&u.isWhitespaceSensitive&&u.isIndentationSensitive?ml(ht):ht,K=()=>(u.next?Ri(u.next):to(u.parent))?u.lastChild.hasTrailingSpaces&&u.lastChild.isTrailingSpaceSensitive?" ":"":p?tr(ht,"",{groupId:f}):u.lastChild.hasTrailingSpaces&&u.lastChild.isTrailingSpaceSensitive?Ye:(u.lastChild.type==="comment"||u.lastChild.type==="text"&&u.isWhitespaceSensitive&&u.isIndentationSensitive)&&new RegExp(`\\n[\\t ]{${a.tabWidth*(o.ancestors.length-1)}}$`,"u").test(u.lastChild.value)?"":ht;return u.children.length===0?v(u.hasDanglingSpaces&&u.isDanglingSpaceSensitive?Ye:""):v([D0(u)?Fi:"",C([L(),Ml(o,a,c)]),K()])}function Da(o){return o>=9&&o<=32||o==160}function Rl(o){return 48<=o&&o<=57}function xa(o){return o>=97&&o<=122||o>=65&&o<=90}function Yb(o){return o>=97&&o<=102||o>=65&&o<=70||Rl(o)}function Ll(o){return o===10||o===13}function Od(o){return 48<=o&&o<=55}function Ol(o){return o===39||o===34||o===96}var Zb=/-+([a-z0-9])/g;function Xb(o){return o.replace(Zb,(...a)=>a[1].toUpperCase())}var Pl=class eg{constructor(a,c,u,p){this.file=a,this.offset=c,this.line=u,this.col=p}toString(){return this.offset!=null?`${this.file.url}@${this.line}:${this.col}`:this.file.url}moveBy(a){let c=this.file.content,u=c.length,p=this.offset,f=this.line,v=this.col;for(;p>0&&a<0;)if(p--,a++,c.charCodeAt(p)==10){f--;let C=c.substring(0,p-1).lastIndexOf(`
`);v=C>0?p-C:p}else v--;for(;p<u&&a>0;){let C=c.charCodeAt(p);p++,a--,C==10?(f++,v=0):v++}return new eg(this.file,p,f,v)}getContext(a,c){let u=this.file.content,p=this.offset;if(p!=null){p>u.length-1&&(p=u.length-1);let f=p,v=0,C=0;for(;v<a&&p>0&&(p--,v++,!(u[p]==`
`&&++C==c)););for(v=0,C=0;v<a&&f<u.length-1&&(f++,v++,!(u[f]==`
`&&++C==c)););return{before:u.substring(p,this.offset),after:u.substring(this.offset,f+1)}}return null}},Pd=class{constructor(o,a){this.content=o,this.url=a}},me=class{constructor(o,a,c=o,u=null){this.start=o,this.end=a,this.fullStart=c,this.details=u}toString(){return this.start.file.content.substring(this.start.offset,this.end.offset)}},Ea;(function(o){o[o.WARNING=0]="WARNING",o[o.ERROR=1]="ERROR"})(Ea||(Ea={}));var Nd=class{constructor(o,a,c=Ea.ERROR,u){this.span=o,this.msg=a,this.level=c,this.relatedError=u}contextualMessage(){let o=this.span.start.getContext(100,3);return o?`${this.msg} ("${o.before}[${Ea[this.level]} ->]${o.after}")`:this.msg}toString(){let o=this.span.details?`, ${this.span.details}`:"";return`${this.contextualMessage()}: ${this.span.start}${o}`}},Jb=[tv,nv,rv,av,sv,uv,lv,cv,dv,ov];function ev(o,a){for(let c of Jb)c(o,a);return o}function tv(o){o.walk(a=>{if(a.type==="element"&&a.tagDefinition.ignoreFirstLf&&a.children.length>0&&a.children[0].type==="text"&&a.children[0].value[0]===`
`){let c=a.children[0];c.value.length===1?a.removeChild(c):c.value=c.value.slice(1)}})}function nv(o){let a=c=>{var u,p;return c.type==="element"&&((u=c.prev)==null?void 0:u.type)==="ieConditionalStartComment"&&c.prev.sourceSpan.end.offset===c.startSourceSpan.start.offset&&((p=c.firstChild)==null?void 0:p.type)==="ieConditionalEndComment"&&c.firstChild.sourceSpan.start.offset===c.startSourceSpan.end.offset};o.walk(c=>{if(c.children)for(let u=0;u<c.children.length;u++){let p=c.children[u];if(!a(p))continue;let f=p.prev,v=p.firstChild;c.removeChild(f),u--;let C=new me(f.sourceSpan.start,v.sourceSpan.end),L=new me(C.start,p.sourceSpan.end);p.condition=f.condition,p.sourceSpan=L,p.startSourceSpan=C,p.removeChild(v)}})}function iv(o,a,c){o.walk(u=>{if(u.children)for(let p=0;p<u.children.length;p++){let f=u.children[p];if(f.type!=="text"&&!a(f))continue;f.type!=="text"&&(f.type="text",f.value=c(f));let v=f.prev;!v||v.type!=="text"||(v.value+=f.value,v.sourceSpan=new me(v.sourceSpan.start,f.sourceSpan.end),u.removeChild(f),p--)}})}function rv(o){return iv(o,a=>a.type==="cdata",a=>`<![CDATA[${a.value}]]>`)}function ov(o){let a=c=>{var u,p;return c.type==="element"&&c.attrs.length===0&&c.children.length===1&&c.firstChild.type==="text"&&!Bn.hasWhitespaceCharacter(c.children[0].value)&&!c.firstChild.hasLeadingSpaces&&!c.firstChild.hasTrailingSpaces&&c.isLeadingSpaceSensitive&&!c.hasLeadingSpaces&&c.isTrailingSpaceSensitive&&!c.hasTrailingSpaces&&((u=c.prev)==null?void 0:u.type)==="text"&&((p=c.next)==null?void 0:p.type)==="text"};o.walk(c=>{if(c.children)for(let u=0;u<c.children.length;u++){let p=c.children[u];if(!a(p))continue;let f=p.prev,v=p.next;f.value+=`<${p.rawName}>`+p.firstChild.value+`</${p.rawName}>`+v.value,f.sourceSpan=new me(f.sourceSpan.start,v.sourceSpan.end),f.isTrailingSpaceSensitive=v.isTrailingSpaceSensitive,f.hasTrailingSpaces=v.hasTrailingSpaces,c.removeChild(p),u--,c.removeChild(v)}})}function av(o,a){if(a.parser==="html")return;let c=/\{\{(.+?)\}\}/su;o.walk(u=>{if(y0(u,a))for(let p of u.children){if(p.type!=="text")continue;let f=p.sourceSpan.start,v=null,C=p.value.split(c);for(let L=0;L<C.length;L++,f=v){let K=C[L];if(L%2===0){v=f.moveBy(K.length),K.length>0&&u.insertChildBefore(p,{type:"text",value:K,sourceSpan:new me(f,v)});continue}v=f.moveBy(K.length+4),u.insertChildBefore(p,{type:"interpolation",sourceSpan:new me(f,v),children:K.length===0?[]:[{type:"text",value:K,sourceSpan:new me(f.moveBy(2),v.moveBy(-2))}]})}u.removeChild(p)}})}function sv(o,a){o.walk(c=>{let u=c.$children;if(!u)return;if(u.length===0||u.length===1&&u[0].type==="text"&&Bn.trim(u[0].value).length===0){c.hasDanglingSpaces=u.length>0,c.$children=[];return}let p=_0(c,a),f=pd(c);if(!p)for(let v=0;v<u.length;v++){let C=u[v];if(C.type!=="text")continue;let{leadingWhitespace:L,text:K,trailingWhitespace:z}=b0(C.value),we=C.prev,he=C.next;K?(C.value=K,C.sourceSpan=new me(C.sourceSpan.start.moveBy(L.length),C.sourceSpan.end.moveBy(-z.length)),L&&(we&&(we.hasTrailingSpaces=!0),C.hasLeadingSpaces=!0),z&&(C.hasTrailingSpaces=!0,he&&(he.hasLeadingSpaces=!0))):(c.removeChild(C),v--,(L||z)&&(we&&(we.hasTrailingSpaces=!0),he&&(he.hasLeadingSpaces=!0)))}c.isWhitespaceSensitive=p,c.isIndentationSensitive=f})}function lv(o){o.walk(a=>{a.isSelfClosing=!a.children||a.type==="element"&&(a.tagDefinition.isVoid||a.endSourceSpan&&a.startSourceSpan.start===a.endSourceSpan.start&&a.startSourceSpan.end===a.endSourceSpan.end)})}function cv(o,a){o.walk(c=>{c.type==="element"&&(c.hasHtmComponentClosingTag=c.endSourceSpan&&/^<\s*\/\s*\/\s*>$/u.test(a.originalText.slice(c.endSourceSpan.start.offset,c.endSourceSpan.end.offset)))})}function uv(o,a){o.walk(c=>{c.cssDisplay=P0(c,a)})}function dv(o,a){o.walk(c=>{let{children:u}=c;if(u){if(u.length===0){c.isDanglingSpaceSensitive=S0(c,a);return}for(let p of u)p.isLeadingSpaceSensitive=C0(p,a),p.isTrailingSpaceSensitive=w0(p,a);for(let p=0;p<u.length;p++){let f=u[p];f.isLeadingSpaceSensitive=(p===0||f.prev.isTrailingSpaceSensitive)&&f.isLeadingSpaceSensitive,f.isTrailingSpaceSensitive=(p===u.length-1||f.next.isLeadingSpaceSensitive)&&f.isTrailingSpaceSensitive}}})}var pv=ev;function hv(o,a,c){let{node:u}=o;switch(u.type){case"front-matter":return Ft(u.raw);case"root":return a.__onHtmlRoot&&a.__onHtmlRoot(u),[tt(Ml(o,a,c)),Oe];case"element":case"ieConditionalComment":return Qb(o,a,c);case"angularControlFlowBlock":return zb(o,a,c);case"angularControlFlowBlockParameters":return Wb(o,a,c);case"angularControlFlowBlockParameter":return Bn.trim(u.expression);case"angularLetDeclaration":return tt(["@let ",tt([u.id," =",tt(Wt([Ye,c("init")]))]),";"]);case"angularLetDeclarationInitializer":return u.value;case"angularIcuExpression":return Gb(o,a,c);case"angularIcuCase":return Kb(o,a,c);case"ieConditionalStartComment":case"ieConditionalEndComment":return[io(u),Jr(u)];case"interpolation":return[io(u,a),...o.map(c,"children"),Jr(u,a)];case"text":{if(u.parent.type==="interpolation"){let C=/\n[^\S\n]*$/u,L=C.test(u.value),K=L?u.value.replace(C,""):u.value;return[Ft(K),L?Oe:""]}let p=Li(u,a),f=Sd(u),v=Mi(u,a);return f[0]=[p,f[0]],f.push([f.pop(),v]),pa(f)}case"docType":return[tt([io(u,a)," ",$(!1,u.value.replace(/^html\b/iu,"html"),/\s+/gu," ")]),Jr(u,a)];case"comment":return[Li(u,a),Ft(a.originalText.slice(Xr(u),_a(u))),Mi(u,a)];case"attribute":{if(u.value===null)return u.rawName;let p=wd(u.value),f=Vg(p,'"');return[u.rawName,"=",f,Ft(f==='"'?$(!1,p,'"',"&quot;"):$(!1,p,"'","&apos;")),f]}case"cdata":default:throw new Gg(u,"HTML")}}var fv={preprocess:pv,print:hv,insertPragma:jb,massageAstNode:Zg,embed:Ab,getVisitorKeys:Pb},mv=fv,gv=[{name:"Angular",type:"markup",extensions:[".component.html"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["angular"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"HTML",type:"markup",extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["html"],vscodeLanguageIds:["html"],linguistLanguageId:146},{name:"Lightning Web Components",type:"markup",extensions:[],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["lwc"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"MJML",type:"markup",extensions:[".mjml"],tmScope:"text.mjml.basic",aceMode:"html",aliases:["MJML","mjml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["mjml"],filenames:[],vscodeLanguageIds:["mjml"],linguistLanguageId:146},{name:"Vue",type:"markup",extensions:[".vue"],tmScope:"source.vue",aceMode:"html",parsers:["vue"],vscodeLanguageIds:["vue"],linguistLanguageId:391}],Bd={bracketSpacing:{category:"Common",type:"boolean",default:!0,description:"Print spaces between brackets.",oppositeDescription:"Do not print spaces between brackets."},objectWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap object literals.",choices:[{value:"preserve",description:"Keep as multi-line, if there is a newline between the opening brace and first property."},{value:"collapse",description:"Fit to a single line when possible."}]},singleQuote:{category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."},proseWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap prose.",choices:[{value:"always",description:"Wrap prose if it exceeds the print width."},{value:"never",description:"Do not wrap prose."},{value:"preserve",description:"Wrap prose as-is."}]},bracketSameLine:{category:"Common",type:"boolean",default:!1,description:"Put > of opening tags on the last line instead of on a new line."},singleAttributePerLine:{category:"Common",type:"boolean",default:!1,description:"Enforce single attribute per line in HTML, Vue and JSX."}},$d="HTML",bv={bracketSameLine:Bd.bracketSameLine,htmlWhitespaceSensitivity:{category:$d,type:"choice",default:"css",description:"How to handle whitespaces in HTML.",choices:[{value:"css",description:"Respect the default value of CSS display property."},{value:"strict",description:"Whitespaces are considered sensitive."},{value:"ignore",description:"Whitespaces are considered insensitive."}]},singleAttributePerLine:Bd.singleAttributePerLine,vueIndentScriptAndStyle:{category:$d,type:"boolean",default:!1,description:"Indent script and style tags in Vue files."}},vv=bv,Vd={};l(Vd,{angular:()=>Dy,html:()=>Cy,lwc:()=>Ey,mjml:()=>Sy,vue:()=>xy});var nT=new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`,"g"),Ud;(function(o){o[o.Emulated=0]="Emulated",o[o.None=2]="None",o[o.ShadowDom=3]="ShadowDom"})(Ud||(Ud={}));var jd;(function(o){o[o.OnPush=0]="OnPush",o[o.Default=1]="Default"})(jd||(jd={}));var Hd;(function(o){o[o.None=0]="None",o[o.SignalBased=1]="SignalBased",o[o.HasDecoratorInputTransform=2]="HasDecoratorInputTransform"})(Hd||(Hd={}));var zd={name:"custom-elements"},qd={name:"no-errors-schema"},Oi;(function(o){o[o.NONE=0]="NONE",o[o.HTML=1]="HTML",o[o.STYLE=2]="STYLE",o[o.SCRIPT=3]="SCRIPT",o[o.URL=4]="URL",o[o.RESOURCE_URL=5]="RESOURCE_URL"})(Oi||(Oi={}));var Wd;(function(o){o[o.Error=0]="Error",o[o.Warning=1]="Warning",o[o.Ignore=2]="Ignore"})(Wd||(Wd={}));var rn;(function(o){o[o.RAW_TEXT=0]="RAW_TEXT",o[o.ESCAPABLE_RAW_TEXT=1]="ESCAPABLE_RAW_TEXT",o[o.PARSABLE_DATA=2]="PARSABLE_DATA"})(rn||(rn={}));function Ta(o,a=!0){if(o[0]!=":")return[null,o];let c=o.indexOf(":",1);if(c===-1){if(a)throw new Error(`Unsupported format "${o}" expecting ":namespace:name"`);return[null,o]}return[o.slice(1,c),o.slice(c+1)]}function Gd(o){return Ta(o)[1]==="ng-container"}function Kd(o){return Ta(o)[1]==="ng-content"}function Aa(o){return o===null?null:Ta(o)[0]}function Ia(o,a){return o?`:${o}:${a}`:a}var ka;function Qd(){return ka||(ka={},Fa(Oi.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),Fa(Oi.STYLE,["*|style"]),Fa(Oi.URL,["*|formAction","area|href","area|ping","audio|src","a|href","a|ping","blockquote|cite","body|background","del|cite","form|action","img|src","input|src","ins|cite","q|cite","source|src","track|src","video|poster","video|src"]),Fa(Oi.RESOURCE_URL,["applet|code","applet|codebase","base|href","embed|src","frame|src","head|profile","html|manifest","iframe|src","link|href","media|src","object|codebase","object|data","script|src"])),ka}function Fa(o,a){for(let c of a)ka[c.toLowerCase()]=o}var yv=class{},_v="boolean",Cv="number",wv="string",Sv="object",Dv=["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored","[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":svg:graphics^:svg:|",":svg:animation^:svg:|*begin,*end,*repeat",":svg:geometry^:svg:|",":svg:componentTransferFunction^:svg:|",":svg:gradient^:svg:|",":svg:textContent^:svg:graphics|",":svg:textPositioning^:svg:textContent|","a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username","area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username","audio^media|","br^[HTMLElement]|clear","base^[HTMLElement]|href,target","body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink","button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value","canvas^[HTMLElement]|#height,#width","content^[HTMLElement]|select","dl^[HTMLElement]|!compact","data^[HTMLElement]|value","datalist^[HTMLElement]|","details^[HTMLElement]|!open","dialog^[HTMLElement]|!open,returnValue","dir^[HTMLElement]|!compact","div^[HTMLElement]|align","embed^[HTMLElement]|align,height,name,src,type,width","fieldset^[HTMLElement]|!disabled,name","font^[HTMLElement]|color,face,size","form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target","frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src","frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows","hr^[HTMLElement]|align,color,!noShade,size,width","head^[HTMLElement]|","h1,h2,h3,h4,h5,h6^[HTMLElement]|align","html^[HTMLElement]|version","iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width","img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width","input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width","li^[HTMLElement]|type,#value","label^[HTMLElement]|htmlFor","legend^[HTMLElement]|align","link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type","map^[HTMLElement]|name","marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width","menu^[HTMLElement]|!compact","meta^[HTMLElement]|content,httpEquiv,media,name,scheme","meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value","ins,del^[HTMLElement]|cite,dateTime","ol^[HTMLElement]|!compact,!reversed,#start,type","object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width","optgroup^[HTMLElement]|!disabled,label","option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value","output^[HTMLElement]|defaultValue,%htmlFor,name,value","p^[HTMLElement]|align","param^[HTMLElement]|name,type,value,valueType","picture^[HTMLElement]|","pre^[HTMLElement]|#width","progress^[HTMLElement]|#max,#value","q,blockquote,cite^[HTMLElement]|","script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type","select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value","slot^[HTMLElement]|name","source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width","span^[HTMLElement]|","style^[HTMLElement]|!disabled,media,type","caption^[HTMLElement]|align","th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width","col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width","table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width","tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign","tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign","template^[HTMLElement]|","textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap","time^[HTMLElement]|dateTime","title^[HTMLElement]|text","track^[HTMLElement]|!default,kind,label,src,srclang","ul^[HTMLElement]|!compact,type","unknown^[HTMLElement]|","video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",":svg:a^:svg:graphics|",":svg:animate^:svg:animation|",":svg:animateMotion^:svg:animation|",":svg:animateTransform^:svg:animation|",":svg:circle^:svg:geometry|",":svg:clipPath^:svg:graphics|",":svg:defs^:svg:graphics|",":svg:desc^:svg:|",":svg:discard^:svg:|",":svg:ellipse^:svg:geometry|",":svg:feBlend^:svg:|",":svg:feColorMatrix^:svg:|",":svg:feComponentTransfer^:svg:|",":svg:feComposite^:svg:|",":svg:feConvolveMatrix^:svg:|",":svg:feDiffuseLighting^:svg:|",":svg:feDisplacementMap^:svg:|",":svg:feDistantLight^:svg:|",":svg:feDropShadow^:svg:|",":svg:feFlood^:svg:|",":svg:feFuncA^:svg:componentTransferFunction|",":svg:feFuncB^:svg:componentTransferFunction|",":svg:feFuncG^:svg:componentTransferFunction|",":svg:feFuncR^:svg:componentTransferFunction|",":svg:feGaussianBlur^:svg:|",":svg:feImage^:svg:|",":svg:feMerge^:svg:|",":svg:feMergeNode^:svg:|",":svg:feMorphology^:svg:|",":svg:feOffset^:svg:|",":svg:fePointLight^:svg:|",":svg:feSpecularLighting^:svg:|",":svg:feSpotLight^:svg:|",":svg:feTile^:svg:|",":svg:feTurbulence^:svg:|",":svg:filter^:svg:|",":svg:foreignObject^:svg:graphics|",":svg:g^:svg:graphics|",":svg:image^:svg:graphics|decoding",":svg:line^:svg:geometry|",":svg:linearGradient^:svg:gradient|",":svg:mpath^:svg:|",":svg:marker^:svg:|",":svg:mask^:svg:|",":svg:metadata^:svg:|",":svg:path^:svg:geometry|",":svg:pattern^:svg:|",":svg:polygon^:svg:geometry|",":svg:polyline^:svg:geometry|",":svg:radialGradient^:svg:gradient|",":svg:rect^:svg:geometry|",":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",":svg:script^:svg:|type",":svg:set^:svg:animation|",":svg:stop^:svg:|",":svg:style^:svg:|!disabled,media,title,type",":svg:switch^:svg:graphics|",":svg:symbol^:svg:|",":svg:tspan^:svg:textPositioning|",":svg:text^:svg:textPositioning|",":svg:textPath^:svg:textContent|",":svg:title^:svg:|",":svg:use^:svg:graphics|",":svg:view^:svg:|#zoomAndPan","data^[HTMLElement]|value","keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name","menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default","summary^[HTMLElement]|","time^[HTMLElement]|dateTime",":svg:cursor^:svg:|",":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":math:math^:math:|",":math:maction^:math:|",":math:menclose^:math:|",":math:merror^:math:|",":math:mfenced^:math:|",":math:mfrac^:math:|",":math:mi^:math:|",":math:mmultiscripts^:math:|",":math:mn^:math:|",":math:mo^:math:|",":math:mover^:math:|",":math:mpadded^:math:|",":math:mphantom^:math:|",":math:mroot^:math:|",":math:mrow^:math:|",":math:ms^:math:|",":math:mspace^:math:|",":math:msqrt^:math:|",":math:mstyle^:math:|",":math:msub^:math:|",":math:msubsup^:math:|",":math:msup^:math:|",":math:mtable^:math:|",":math:mtd^:math:|",":math:mtext^:math:|",":math:mtr^:math:|",":math:munder^:math:|",":math:munderover^:math:|",":math:semantics^:math:|"],Yd=new Map(Object.entries({class:"className",for:"htmlFor",formaction:"formAction",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"})),xv=Array.from(Yd).reduce((o,[a,c])=>(o.set(a,c),o),new Map),Ev=class extends yv{constructor(){super(),this._schema=new Map,this._eventSchema=new Map,Dv.forEach(o=>{let a=new Map,c=new Set,[u,p]=o.split("|"),f=p.split(","),[v,C]=u.split("^");v.split(",").forEach(K=>{this._schema.set(K.toLowerCase(),a),this._eventSchema.set(K.toLowerCase(),c)});let L=C&&this._schema.get(C.toLowerCase());if(L){for(let[K,z]of L)a.set(K,z);for(let K of this._eventSchema.get(C.toLowerCase()))c.add(K)}f.forEach(K=>{if(K.length>0)switch(K[0]){case"*":c.add(K.substring(1));break;case"!":a.set(K.substring(1),_v);break;case"#":a.set(K.substring(1),Cv);break;case"%":a.set(K.substring(1),Sv);break;default:a.set(K,wv)}})})}hasProperty(o,a,c){if(c.some(u=>u.name===qd.name))return!0;if(o.indexOf("-")>-1){if(Gd(o)||Kd(o))return!1;if(c.some(u=>u.name===zd.name))return!0}return(this._schema.get(o.toLowerCase())||this._schema.get("unknown")).has(a)}hasElement(o,a){return a.some(c=>c.name===qd.name)||o.indexOf("-")>-1&&(Gd(o)||Kd(o)||a.some(c=>c.name===zd.name))?!0:this._schema.has(o.toLowerCase())}securityContext(o,a,c){c&&(a=this.getMappedPropName(a)),o=o.toLowerCase(),a=a.toLowerCase();let u=Qd()[o+"|"+a];return u||(u=Qd()["*|"+a],u||Oi.NONE)}getMappedPropName(o){return Yd.get(o)??o}getDefaultComponentElementName(){return"ng-component"}validateProperty(o){return o.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event property '${o}' is disallowed for security reasons, please use (${o.slice(2)})=...
If '${o}' is a directive input, make sure the directive is imported by the current module.`}:{error:!1}}validateAttribute(o){return o.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event attribute '${o}' is disallowed for security reasons, please use (${o.slice(2)})=...`}:{error:!1}}allKnownElementNames(){return Array.from(this._schema.keys())}allKnownAttributesOfElement(o){let a=this._schema.get(o.toLowerCase())||this._schema.get("unknown");return Array.from(a.keys()).map(c=>xv.get(c)??c)}allKnownEventsOfElement(o){return Array.from(this._eventSchema.get(o.toLowerCase())??[])}normalizeAnimationStyleProperty(o){return Xb(o)}normalizeAnimationStyleValue(o,a,c){let u="",p=c.toString().trim(),f=null;if(Tv(o)&&c!==0&&c!=="0")if(typeof c=="number")u="px";else{let v=c.match(/^[+-]?[\d\.]+([a-z]*)$/);v&&v[1].length==0&&(f=`Please provide a CSS unit value for ${a}:${c}`)}return{error:f,value:p+u}}};function Tv(o){switch(o){case"width":case"height":case"minWidth":case"minHeight":case"maxWidth":case"maxHeight":case"left":case"top":case"bottom":case"right":case"fontSize":case"outlineWidth":case"outlineOffset":case"paddingTop":case"paddingLeft":case"paddingBottom":case"paddingRight":case"marginTop":case"marginLeft":case"marginBottom":case"marginRight":case"borderRadius":case"borderWidth":case"borderTopWidth":case"borderLeftWidth":case"borderRightWidth":case"borderBottomWidth":case"textIndent":return!0;default:return!1}}var pe=class{constructor({closedByChildren:o,implicitNamespacePrefix:a,contentType:c=rn.PARSABLE_DATA,closedByParent:u=!1,isVoid:p=!1,ignoreFirstLf:f=!1,preventNamespaceInheritance:v=!1,canSelfClose:C=!1}={}){this.closedByChildren={},this.closedByParent=!1,o&&o.length>0&&o.forEach(L=>this.closedByChildren[L]=!0),this.isVoid=p,this.closedByParent=u||p,this.implicitNamespacePrefix=a||null,this.contentType=c,this.ignoreFirstLf=f,this.preventNamespaceInheritance=v,this.canSelfClose=C??p}isClosedByChild(o){return this.isVoid||o.toLowerCase()in this.closedByChildren}getContentType(o){return typeof this.contentType=="object"?(o===void 0?void 0:this.contentType[o])??this.contentType.default:this.contentType}},Zd,so;function Nl(o){return so||(Zd=new pe({canSelfClose:!0}),so=Object.assign(Object.create(null),{base:new pe({isVoid:!0}),meta:new pe({isVoid:!0}),area:new pe({isVoid:!0}),embed:new pe({isVoid:!0}),link:new pe({isVoid:!0}),img:new pe({isVoid:!0}),input:new pe({isVoid:!0}),param:new pe({isVoid:!0}),hr:new pe({isVoid:!0}),br:new pe({isVoid:!0}),source:new pe({isVoid:!0}),track:new pe({isVoid:!0}),wbr:new pe({isVoid:!0}),p:new pe({closedByChildren:["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"],closedByParent:!0}),thead:new pe({closedByChildren:["tbody","tfoot"]}),tbody:new pe({closedByChildren:["tbody","tfoot"],closedByParent:!0}),tfoot:new pe({closedByChildren:["tbody"],closedByParent:!0}),tr:new pe({closedByChildren:["tr"],closedByParent:!0}),td:new pe({closedByChildren:["td","th"],closedByParent:!0}),th:new pe({closedByChildren:["td","th"],closedByParent:!0}),col:new pe({isVoid:!0}),svg:new pe({implicitNamespacePrefix:"svg"}),foreignObject:new pe({implicitNamespacePrefix:"svg",preventNamespaceInheritance:!0}),math:new pe({implicitNamespacePrefix:"math"}),li:new pe({closedByChildren:["li"],closedByParent:!0}),dt:new pe({closedByChildren:["dt","dd"]}),dd:new pe({closedByChildren:["dt","dd"],closedByParent:!0}),rb:new pe({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rt:new pe({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rtc:new pe({closedByChildren:["rb","rtc","rp"],closedByParent:!0}),rp:new pe({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),optgroup:new pe({closedByChildren:["optgroup"],closedByParent:!0}),option:new pe({closedByChildren:["option","optgroup"],closedByParent:!0}),pre:new pe({ignoreFirstLf:!0}),listing:new pe({ignoreFirstLf:!0}),style:new pe({contentType:rn.RAW_TEXT}),script:new pe({contentType:rn.RAW_TEXT}),title:new pe({contentType:{default:rn.ESCAPABLE_RAW_TEXT,svg:rn.PARSABLE_DATA}}),textarea:new pe({contentType:rn.ESCAPABLE_RAW_TEXT,ignoreFirstLf:!0})}),new Ev().allKnownElementNames().forEach(a=>{!so[a]&&Aa(a)===null&&(so[a]=new pe({canSelfClose:!1}))})),so[o]??Zd}var ar=class{constructor(o,a){this.sourceSpan=o,this.i18n=a}},Av=class extends ar{constructor(o,a,c,u){super(a,u),this.value=o,this.tokens=c,this.type="text"}visit(o,a){return o.visitText(this,a)}},Iv=class extends ar{constructor(o,a,c,u){super(a,u),this.value=o,this.tokens=c,this.type="cdata"}visit(o,a){return o.visitCdata(this,a)}},kv=class extends ar{constructor(o,a,c,u,p,f){super(u,f),this.switchValue=o,this.type=a,this.cases=c,this.switchValueSourceSpan=p}visit(o,a){return o.visitExpansion(this,a)}},Fv=class{constructor(o,a,c,u,p){this.value=o,this.expression=a,this.sourceSpan=c,this.valueSourceSpan=u,this.expSourceSpan=p,this.type="expansionCase"}visit(o,a){return o.visitExpansionCase(this,a)}},Mv=class extends ar{constructor(o,a,c,u,p,f,v){super(c,v),this.name=o,this.value=a,this.keySpan=u,this.valueSpan=p,this.valueTokens=f,this.type="attribute"}visit(o,a){return o.visitAttribute(this,a)}get nameSpan(){return this.keySpan}},Jn=class extends ar{constructor(o,a,c,u,p,f=null,v=null,C){super(u,C),this.name=o,this.attrs=a,this.children=c,this.startSourceSpan=p,this.endSourceSpan=f,this.nameSpan=v,this.type="element"}visit(o,a){return o.visitElement(this,a)}},Rv=class{constructor(o,a){this.value=o,this.sourceSpan=a,this.type="comment"}visit(o,a){return o.visitComment(this,a)}},Lv=class{constructor(o,a){this.value=o,this.sourceSpan=a,this.type="docType"}visit(o,a){return o.visitDocType(this,a)}},sr=class extends ar{constructor(o,a,c,u,p,f,v=null,C){super(u,C),this.name=o,this.parameters=a,this.children=c,this.nameSpan=p,this.startSourceSpan=f,this.endSourceSpan=v,this.type="block"}visit(o,a){return o.visitBlock(this,a)}},Xd=class{constructor(o,a){this.expression=o,this.sourceSpan=a,this.type="blockParameter",this.startSourceSpan=null,this.endSourceSpan=null}visit(o,a){return o.visitBlockParameter(this,a)}},Jd=class{constructor(o,a,c,u,p){this.name=o,this.value=a,this.sourceSpan=c,this.nameSpan=u,this.valueSpan=p,this.type="letDeclaration",this.startSourceSpan=null,this.endSourceSpan=null}visit(o,a){return o.visitLetDeclaration(this,a)}};function ep(o,a,c=null){let u=[],p=o.visit?f=>o.visit(f,c)||f.visit(o,c):f=>f.visit(o,c);return a.forEach(f=>{let v=p(f);v&&u.push(v)}),u}var Ov=class{constructor(){}visitElement(o,a){this.visitChildren(a,c=>{c(o.attrs),c(o.children)})}visitAttribute(o,a){}visitText(o,a){}visitCdata(o,a){}visitComment(o,a){}visitDocType(o,a){}visitExpansion(o,a){return this.visitChildren(a,c=>{c(o.cases)})}visitExpansionCase(o,a){}visitBlock(o,a){this.visitChildren(a,c=>{c(o.parameters),c(o.children)})}visitBlockParameter(o,a){}visitLetDeclaration(o,a){}visitChildren(o,a){let c=[],u=this;function p(f){f&&c.push(ep(u,f,o))}return a(p),Array.prototype.concat.apply([],c)}},Ma={AElig:"\xC6",AMP:"&",amp:"&",Aacute:"\xC1",Abreve:"\u0102",Acirc:"\xC2",Acy:"\u0410",Afr:"\u{1D504}",Agrave:"\xC0",Alpha:"\u0391",Amacr:"\u0100",And:"\u2A53",Aogon:"\u0104",Aopf:"\u{1D538}",ApplyFunction:"\u2061",af:"\u2061",Aring:"\xC5",angst:"\xC5",Ascr:"\u{1D49C}",Assign:"\u2254",colone:"\u2254",coloneq:"\u2254",Atilde:"\xC3",Auml:"\xC4",Backslash:"\u2216",setminus:"\u2216",setmn:"\u2216",smallsetminus:"\u2216",ssetmn:"\u2216",Barv:"\u2AE7",Barwed:"\u2306",doublebarwedge:"\u2306",Bcy:"\u0411",Because:"\u2235",becaus:"\u2235",because:"\u2235",Bernoullis:"\u212C",Bscr:"\u212C",bernou:"\u212C",Beta:"\u0392",Bfr:"\u{1D505}",Bopf:"\u{1D539}",Breve:"\u02D8",breve:"\u02D8",Bumpeq:"\u224E",HumpDownHump:"\u224E",bump:"\u224E",CHcy:"\u0427",COPY:"\xA9",copy:"\xA9",Cacute:"\u0106",Cap:"\u22D2",CapitalDifferentialD:"\u2145",DD:"\u2145",Cayleys:"\u212D",Cfr:"\u212D",Ccaron:"\u010C",Ccedil:"\xC7",Ccirc:"\u0108",Cconint:"\u2230",Cdot:"\u010A",Cedilla:"\xB8",cedil:"\xB8",CenterDot:"\xB7",centerdot:"\xB7",middot:"\xB7",Chi:"\u03A7",CircleDot:"\u2299",odot:"\u2299",CircleMinus:"\u2296",ominus:"\u2296",CirclePlus:"\u2295",oplus:"\u2295",CircleTimes:"\u2297",otimes:"\u2297",ClockwiseContourIntegral:"\u2232",cwconint:"\u2232",CloseCurlyDoubleQuote:"\u201D",rdquo:"\u201D",rdquor:"\u201D",CloseCurlyQuote:"\u2019",rsquo:"\u2019",rsquor:"\u2019",Colon:"\u2237",Proportion:"\u2237",Colone:"\u2A74",Congruent:"\u2261",equiv:"\u2261",Conint:"\u222F",DoubleContourIntegral:"\u222F",ContourIntegral:"\u222E",conint:"\u222E",oint:"\u222E",Copf:"\u2102",complexes:"\u2102",Coproduct:"\u2210",coprod:"\u2210",CounterClockwiseContourIntegral:"\u2233",awconint:"\u2233",Cross:"\u2A2F",Cscr:"\u{1D49E}",Cup:"\u22D3",CupCap:"\u224D",asympeq:"\u224D",DDotrahd:"\u2911",DJcy:"\u0402",DScy:"\u0405",DZcy:"\u040F",Dagger:"\u2021",ddagger:"\u2021",Darr:"\u21A1",Dashv:"\u2AE4",DoubleLeftTee:"\u2AE4",Dcaron:"\u010E",Dcy:"\u0414",Del:"\u2207",nabla:"\u2207",Delta:"\u0394",Dfr:"\u{1D507}",DiacriticalAcute:"\xB4",acute:"\xB4",DiacriticalDot:"\u02D9",dot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",dblac:"\u02DD",DiacriticalGrave:"`",grave:"`",DiacriticalTilde:"\u02DC",tilde:"\u02DC",Diamond:"\u22C4",diam:"\u22C4",diamond:"\u22C4",DifferentialD:"\u2146",dd:"\u2146",Dopf:"\u{1D53B}",Dot:"\xA8",DoubleDot:"\xA8",die:"\xA8",uml:"\xA8",DotDot:"\u20DC",DotEqual:"\u2250",doteq:"\u2250",esdot:"\u2250",DoubleDownArrow:"\u21D3",Downarrow:"\u21D3",dArr:"\u21D3",DoubleLeftArrow:"\u21D0",Leftarrow:"\u21D0",lArr:"\u21D0",DoubleLeftRightArrow:"\u21D4",Leftrightarrow:"\u21D4",hArr:"\u21D4",iff:"\u21D4",DoubleLongLeftArrow:"\u27F8",Longleftarrow:"\u27F8",xlArr:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",Longleftrightarrow:"\u27FA",xhArr:"\u27FA",DoubleLongRightArrow:"\u27F9",Longrightarrow:"\u27F9",xrArr:"\u27F9",DoubleRightArrow:"\u21D2",Implies:"\u21D2",Rightarrow:"\u21D2",rArr:"\u21D2",DoubleRightTee:"\u22A8",vDash:"\u22A8",DoubleUpArrow:"\u21D1",Uparrow:"\u21D1",uArr:"\u21D1",DoubleUpDownArrow:"\u21D5",Updownarrow:"\u21D5",vArr:"\u21D5",DoubleVerticalBar:"\u2225",par:"\u2225",parallel:"\u2225",shortparallel:"\u2225",spar:"\u2225",DownArrow:"\u2193",ShortDownArrow:"\u2193",darr:"\u2193",downarrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",duarr:"\u21F5",DownBreve:"\u0311",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVector:"\u21BD",leftharpoondown:"\u21BD",lhard:"\u21BD",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVector:"\u21C1",rhard:"\u21C1",rightharpoondown:"\u21C1",DownRightVectorBar:"\u2957",DownTee:"\u22A4",top:"\u22A4",DownTeeArrow:"\u21A7",mapstodown:"\u21A7",Dscr:"\u{1D49F}",Dstrok:"\u0110",ENG:"\u014A",ETH:"\xD0",Eacute:"\xC9",Ecaron:"\u011A",Ecirc:"\xCA",Ecy:"\u042D",Edot:"\u0116",Efr:"\u{1D508}",Egrave:"\xC8",Element:"\u2208",in:"\u2208",isin:"\u2208",isinv:"\u2208",Emacr:"\u0112",EmptySmallSquare:"\u25FB",EmptyVerySmallSquare:"\u25AB",Eogon:"\u0118",Eopf:"\u{1D53C}",Epsilon:"\u0395",Equal:"\u2A75",EqualTilde:"\u2242",eqsim:"\u2242",esim:"\u2242",Equilibrium:"\u21CC",rightleftharpoons:"\u21CC",rlhar:"\u21CC",Escr:"\u2130",expectation:"\u2130",Esim:"\u2A73",Eta:"\u0397",Euml:"\xCB",Exists:"\u2203",exist:"\u2203",ExponentialE:"\u2147",ee:"\u2147",exponentiale:"\u2147",Fcy:"\u0424",Ffr:"\u{1D509}",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",blacksquare:"\u25AA",squarf:"\u25AA",squf:"\u25AA",Fopf:"\u{1D53D}",ForAll:"\u2200",forall:"\u2200",Fouriertrf:"\u2131",Fscr:"\u2131",GJcy:"\u0403",GT:">",gt:">",Gamma:"\u0393",Gammad:"\u03DC",Gbreve:"\u011E",Gcedil:"\u0122",Gcirc:"\u011C",Gcy:"\u0413",Gdot:"\u0120",Gfr:"\u{1D50A}",Gg:"\u22D9",ggg:"\u22D9",Gopf:"\u{1D53E}",GreaterEqual:"\u2265",ge:"\u2265",geq:"\u2265",GreaterEqualLess:"\u22DB",gel:"\u22DB",gtreqless:"\u22DB",GreaterFullEqual:"\u2267",gE:"\u2267",geqq:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",gl:"\u2277",gtrless:"\u2277",GreaterSlantEqual:"\u2A7E",geqslant:"\u2A7E",ges:"\u2A7E",GreaterTilde:"\u2273",gsim:"\u2273",gtrsim:"\u2273",Gscr:"\u{1D4A2}",Gt:"\u226B",NestedGreaterGreater:"\u226B",gg:"\u226B",HARDcy:"\u042A",Hacek:"\u02C7",caron:"\u02C7",Hat:"^",Hcirc:"\u0124",Hfr:"\u210C",Poincareplane:"\u210C",HilbertSpace:"\u210B",Hscr:"\u210B",hamilt:"\u210B",Hopf:"\u210D",quaternions:"\u210D",HorizontalLine:"\u2500",boxh:"\u2500",Hstrok:"\u0126",HumpEqual:"\u224F",bumpe:"\u224F",bumpeq:"\u224F",IEcy:"\u0415",IJlig:"\u0132",IOcy:"\u0401",Iacute:"\xCD",Icirc:"\xCE",Icy:"\u0418",Idot:"\u0130",Ifr:"\u2111",Im:"\u2111",image:"\u2111",imagpart:"\u2111",Igrave:"\xCC",Imacr:"\u012A",ImaginaryI:"\u2148",ii:"\u2148",Int:"\u222C",Integral:"\u222B",int:"\u222B",Intersection:"\u22C2",bigcap:"\u22C2",xcap:"\u22C2",InvisibleComma:"\u2063",ic:"\u2063",InvisibleTimes:"\u2062",it:"\u2062",Iogon:"\u012E",Iopf:"\u{1D540}",Iota:"\u0399",Iscr:"\u2110",imagline:"\u2110",Itilde:"\u0128",Iukcy:"\u0406",Iuml:"\xCF",Jcirc:"\u0134",Jcy:"\u0419",Jfr:"\u{1D50D}",Jopf:"\u{1D541}",Jscr:"\u{1D4A5}",Jsercy:"\u0408",Jukcy:"\u0404",KHcy:"\u0425",KJcy:"\u040C",Kappa:"\u039A",Kcedil:"\u0136",Kcy:"\u041A",Kfr:"\u{1D50E}",Kopf:"\u{1D542}",Kscr:"\u{1D4A6}",LJcy:"\u0409",LT:"<",lt:"<",Lacute:"\u0139",Lambda:"\u039B",Lang:"\u27EA",Laplacetrf:"\u2112",Lscr:"\u2112",lagran:"\u2112",Larr:"\u219E",twoheadleftarrow:"\u219E",Lcaron:"\u013D",Lcedil:"\u013B",Lcy:"\u041B",LeftAngleBracket:"\u27E8",lang:"\u27E8",langle:"\u27E8",LeftArrow:"\u2190",ShortLeftArrow:"\u2190",larr:"\u2190",leftarrow:"\u2190",slarr:"\u2190",LeftArrowBar:"\u21E4",larrb:"\u21E4",LeftArrowRightArrow:"\u21C6",leftrightarrows:"\u21C6",lrarr:"\u21C6",LeftCeiling:"\u2308",lceil:"\u2308",LeftDoubleBracket:"\u27E6",lobrk:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21C3",dharl:"\u21C3",downharpoonleft:"\u21C3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230A",lfloor:"\u230A",LeftRightArrow:"\u2194",harr:"\u2194",leftrightarrow:"\u2194",LeftRightVector:"\u294E",LeftTee:"\u22A3",dashv:"\u22A3",LeftTeeArrow:"\u21A4",mapstoleft:"\u21A4",LeftTeeVector:"\u295A",LeftTriangle:"\u22B2",vartriangleleft:"\u22B2",vltri:"\u22B2",LeftTriangleBar:"\u29CF",LeftTriangleEqual:"\u22B4",ltrie:"\u22B4",trianglelefteq:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21BF",uharl:"\u21BF",upharpoonleft:"\u21BF",LeftUpVectorBar:"\u2958",LeftVector:"\u21BC",leftharpoonup:"\u21BC",lharu:"\u21BC",LeftVectorBar:"\u2952",LessEqualGreater:"\u22DA",leg:"\u22DA",lesseqgtr:"\u22DA",LessFullEqual:"\u2266",lE:"\u2266",leqq:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",lg:"\u2276",LessLess:"\u2AA1",LessSlantEqual:"\u2A7D",leqslant:"\u2A7D",les:"\u2A7D",LessTilde:"\u2272",lesssim:"\u2272",lsim:"\u2272",Lfr:"\u{1D50F}",Ll:"\u22D8",Lleftarrow:"\u21DA",lAarr:"\u21DA",Lmidot:"\u013F",LongLeftArrow:"\u27F5",longleftarrow:"\u27F5",xlarr:"\u27F5",LongLeftRightArrow:"\u27F7",longleftrightarrow:"\u27F7",xharr:"\u27F7",LongRightArrow:"\u27F6",longrightarrow:"\u27F6",xrarr:"\u27F6",Lopf:"\u{1D543}",LowerLeftArrow:"\u2199",swarr:"\u2199",swarrow:"\u2199",LowerRightArrow:"\u2198",searr:"\u2198",searrow:"\u2198",Lsh:"\u21B0",lsh:"\u21B0",Lstrok:"\u0141",Lt:"\u226A",NestedLessLess:"\u226A",ll:"\u226A",Map:"\u2905",Mcy:"\u041C",MediumSpace:"\u205F",Mellintrf:"\u2133",Mscr:"\u2133",phmmat:"\u2133",Mfr:"\u{1D510}",MinusPlus:"\u2213",mnplus:"\u2213",mp:"\u2213",Mopf:"\u{1D544}",Mu:"\u039C",NJcy:"\u040A",Nacute:"\u0143",Ncaron:"\u0147",Ncedil:"\u0145",Ncy:"\u041D",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",ZeroWidthSpace:"\u200B",NewLine:`
`,Nfr:"\u{1D511}",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nbsp:"\xA0",Nopf:"\u2115",naturals:"\u2115",Not:"\u2AEC",NotCongruent:"\u2262",nequiv:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",npar:"\u2226",nparallel:"\u2226",nshortparallel:"\u2226",nspar:"\u2226",NotElement:"\u2209",notin:"\u2209",notinva:"\u2209",NotEqual:"\u2260",ne:"\u2260",NotEqualTilde:"\u2242\u0338",nesim:"\u2242\u0338",NotExists:"\u2204",nexist:"\u2204",nexists:"\u2204",NotGreater:"\u226F",ngt:"\u226F",ngtr:"\u226F",NotGreaterEqual:"\u2271",nge:"\u2271",ngeq:"\u2271",NotGreaterFullEqual:"\u2267\u0338",ngE:"\u2267\u0338",ngeqq:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",nGtv:"\u226B\u0338",NotGreaterLess:"\u2279",ntgl:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",NotGreaterTilde:"\u2275",ngsim:"\u2275",NotHumpDownHump:"\u224E\u0338",nbump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",nbumpe:"\u224F\u0338",NotLeftTriangle:"\u22EA",nltri:"\u22EA",ntriangleleft:"\u22EA",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangleEqual:"\u22EC",nltrie:"\u22EC",ntrianglelefteq:"\u22EC",NotLess:"\u226E",nless:"\u226E",nlt:"\u226E",NotLessEqual:"\u2270",nle:"\u2270",nleq:"\u2270",NotLessGreater:"\u2278",ntlg:"\u2278",NotLessLess:"\u226A\u0338",nLtv:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",NotLessTilde:"\u2274",nlsim:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",NotPrecedes:"\u2280",npr:"\u2280",nprec:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",npre:"\u2AAF\u0338",npreceq:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",nprcue:"\u22E0",NotReverseElement:"\u220C",notni:"\u220C",notniva:"\u220C",NotRightTriangle:"\u22EB",nrtri:"\u22EB",ntriangleright:"\u22EB",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangleEqual:"\u22ED",nrtrie:"\u22ED",ntrianglerighteq:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",nsqsube:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",nsqsupe:"\u22E3",NotSubset:"\u2282\u20D2",nsubset:"\u2282\u20D2",vnsub:"\u2282\u20D2",NotSubsetEqual:"\u2288",nsube:"\u2288",nsubseteq:"\u2288",NotSucceeds:"\u2281",nsc:"\u2281",nsucc:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",nsce:"\u2AB0\u0338",nsucceq:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",nsccue:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",nsupset:"\u2283\u20D2",vnsup:"\u2283\u20D2",NotSupersetEqual:"\u2289",nsupe:"\u2289",nsupseteq:"\u2289",NotTilde:"\u2241",nsim:"\u2241",NotTildeEqual:"\u2244",nsime:"\u2244",nsimeq:"\u2244",NotTildeFullEqual:"\u2247",ncong:"\u2247",NotTildeTilde:"\u2249",nap:"\u2249",napprox:"\u2249",NotVerticalBar:"\u2224",nmid:"\u2224",nshortmid:"\u2224",nsmid:"\u2224",Nscr:"\u{1D4A9}",Ntilde:"\xD1",Nu:"\u039D",OElig:"\u0152",Oacute:"\xD3",Ocirc:"\xD4",Ocy:"\u041E",Odblac:"\u0150",Ofr:"\u{1D512}",Ograve:"\xD2",Omacr:"\u014C",Omega:"\u03A9",ohm:"\u03A9",Omicron:"\u039F",Oopf:"\u{1D546}",OpenCurlyDoubleQuote:"\u201C",ldquo:"\u201C",OpenCurlyQuote:"\u2018",lsquo:"\u2018",Or:"\u2A54",Oscr:"\u{1D4AA}",Oslash:"\xD8",Otilde:"\xD5",Otimes:"\u2A37",Ouml:"\xD6",OverBar:"\u203E",oline:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",tbrk:"\u23B4",OverParenthesis:"\u23DC",PartialD:"\u2202",part:"\u2202",Pcy:"\u041F",Pfr:"\u{1D513}",Phi:"\u03A6",Pi:"\u03A0",PlusMinus:"\xB1",plusmn:"\xB1",pm:"\xB1",Popf:"\u2119",primes:"\u2119",Pr:"\u2ABB",Precedes:"\u227A",pr:"\u227A",prec:"\u227A",PrecedesEqual:"\u2AAF",pre:"\u2AAF",preceq:"\u2AAF",PrecedesSlantEqual:"\u227C",prcue:"\u227C",preccurlyeq:"\u227C",PrecedesTilde:"\u227E",precsim:"\u227E",prsim:"\u227E",Prime:"\u2033",Product:"\u220F",prod:"\u220F",Proportional:"\u221D",prop:"\u221D",propto:"\u221D",varpropto:"\u221D",vprop:"\u221D",Pscr:"\u{1D4AB}",Psi:"\u03A8",QUOT:'"',quot:'"',Qfr:"\u{1D514}",Qopf:"\u211A",rationals:"\u211A",Qscr:"\u{1D4AC}",RBarr:"\u2910",drbkarow:"\u2910",REG:"\xAE",circledR:"\xAE",reg:"\xAE",Racute:"\u0154",Rang:"\u27EB",Rarr:"\u21A0",twoheadrightarrow:"\u21A0",Rarrtl:"\u2916",Rcaron:"\u0158",Rcedil:"\u0156",Rcy:"\u0420",Re:"\u211C",Rfr:"\u211C",real:"\u211C",realpart:"\u211C",ReverseElement:"\u220B",SuchThat:"\u220B",ni:"\u220B",niv:"\u220B",ReverseEquilibrium:"\u21CB",leftrightharpoons:"\u21CB",lrhar:"\u21CB",ReverseUpEquilibrium:"\u296F",duhar:"\u296F",Rho:"\u03A1",RightAngleBracket:"\u27E9",rang:"\u27E9",rangle:"\u27E9",RightArrow:"\u2192",ShortRightArrow:"\u2192",rarr:"\u2192",rightarrow:"\u2192",srarr:"\u2192",RightArrowBar:"\u21E5",rarrb:"\u21E5",RightArrowLeftArrow:"\u21C4",rightleftarrows:"\u21C4",rlarr:"\u21C4",RightCeiling:"\u2309",rceil:"\u2309",RightDoubleBracket:"\u27E7",robrk:"\u27E7",RightDownTeeVector:"\u295D",RightDownVector:"\u21C2",dharr:"\u21C2",downharpoonright:"\u21C2",RightDownVectorBar:"\u2955",RightFloor:"\u230B",rfloor:"\u230B",RightTee:"\u22A2",vdash:"\u22A2",RightTeeArrow:"\u21A6",map:"\u21A6",mapsto:"\u21A6",RightTeeVector:"\u295B",RightTriangle:"\u22B3",vartriangleright:"\u22B3",vrtri:"\u22B3",RightTriangleBar:"\u29D0",RightTriangleEqual:"\u22B5",rtrie:"\u22B5",trianglerighteq:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVector:"\u21BE",uharr:"\u21BE",upharpoonright:"\u21BE",RightUpVectorBar:"\u2954",RightVector:"\u21C0",rharu:"\u21C0",rightharpoonup:"\u21C0",RightVectorBar:"\u2953",Ropf:"\u211D",reals:"\u211D",RoundImplies:"\u2970",Rrightarrow:"\u21DB",rAarr:"\u21DB",Rscr:"\u211B",realine:"\u211B",Rsh:"\u21B1",rsh:"\u21B1",RuleDelayed:"\u29F4",SHCHcy:"\u0429",SHcy:"\u0428",SOFTcy:"\u042C",Sacute:"\u015A",Sc:"\u2ABC",Scaron:"\u0160",Scedil:"\u015E",Scirc:"\u015C",Scy:"\u0421",Sfr:"\u{1D516}",ShortUpArrow:"\u2191",UpArrow:"\u2191",uarr:"\u2191",uparrow:"\u2191",Sigma:"\u03A3",SmallCircle:"\u2218",compfn:"\u2218",Sopf:"\u{1D54A}",Sqrt:"\u221A",radic:"\u221A",Square:"\u25A1",squ:"\u25A1",square:"\u25A1",SquareIntersection:"\u2293",sqcap:"\u2293",SquareSubset:"\u228F",sqsub:"\u228F",sqsubset:"\u228F",SquareSubsetEqual:"\u2291",sqsube:"\u2291",sqsubseteq:"\u2291",SquareSuperset:"\u2290",sqsup:"\u2290",sqsupset:"\u2290",SquareSupersetEqual:"\u2292",sqsupe:"\u2292",sqsupseteq:"\u2292",SquareUnion:"\u2294",sqcup:"\u2294",Sscr:"\u{1D4AE}",Star:"\u22C6",sstarf:"\u22C6",Sub:"\u22D0",Subset:"\u22D0",SubsetEqual:"\u2286",sube:"\u2286",subseteq:"\u2286",Succeeds:"\u227B",sc:"\u227B",succ:"\u227B",SucceedsEqual:"\u2AB0",sce:"\u2AB0",succeq:"\u2AB0",SucceedsSlantEqual:"\u227D",sccue:"\u227D",succcurlyeq:"\u227D",SucceedsTilde:"\u227F",scsim:"\u227F",succsim:"\u227F",Sum:"\u2211",sum:"\u2211",Sup:"\u22D1",Supset:"\u22D1",Superset:"\u2283",sup:"\u2283",supset:"\u2283",SupersetEqual:"\u2287",supe:"\u2287",supseteq:"\u2287",THORN:"\xDE",TRADE:"\u2122",trade:"\u2122",TSHcy:"\u040B",TScy:"\u0426",Tab:"	",Tau:"\u03A4",Tcaron:"\u0164",Tcedil:"\u0162",Tcy:"\u0422",Tfr:"\u{1D517}",Therefore:"\u2234",there4:"\u2234",therefore:"\u2234",Theta:"\u0398",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",Tilde:"\u223C",sim:"\u223C",thicksim:"\u223C",thksim:"\u223C",TildeEqual:"\u2243",sime:"\u2243",simeq:"\u2243",TildeFullEqual:"\u2245",cong:"\u2245",TildeTilde:"\u2248",ap:"\u2248",approx:"\u2248",asymp:"\u2248",thickapprox:"\u2248",thkap:"\u2248",Topf:"\u{1D54B}",TripleDot:"\u20DB",tdot:"\u20DB",Tscr:"\u{1D4AF}",Tstrok:"\u0166",Uacute:"\xDA",Uarr:"\u219F",Uarrocir:"\u2949",Ubrcy:"\u040E",Ubreve:"\u016C",Ucirc:"\xDB",Ucy:"\u0423",Udblac:"\u0170",Ufr:"\u{1D518}",Ugrave:"\xD9",Umacr:"\u016A",UnderBar:"_",lowbar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",bbrk:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",bigcup:"\u22C3",xcup:"\u22C3",UnionPlus:"\u228E",uplus:"\u228E",Uogon:"\u0172",Uopf:"\u{1D54C}",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21C5",udarr:"\u21C5",UpDownArrow:"\u2195",updownarrow:"\u2195",varr:"\u2195",UpEquilibrium:"\u296E",udhar:"\u296E",UpTee:"\u22A5",bot:"\u22A5",bottom:"\u22A5",perp:"\u22A5",UpTeeArrow:"\u21A5",mapstoup:"\u21A5",UpperLeftArrow:"\u2196",nwarr:"\u2196",nwarrow:"\u2196",UpperRightArrow:"\u2197",nearr:"\u2197",nearrow:"\u2197",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",Uring:"\u016E",Uscr:"\u{1D4B0}",Utilde:"\u0168",Uuml:"\xDC",VDash:"\u22AB",Vbar:"\u2AEB",Vcy:"\u0412",Vdash:"\u22A9",Vdashl:"\u2AE6",Vee:"\u22C1",bigvee:"\u22C1",xvee:"\u22C1",Verbar:"\u2016",Vert:"\u2016",VerticalBar:"\u2223",mid:"\u2223",shortmid:"\u2223",smid:"\u2223",VerticalLine:"|",verbar:"|",vert:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",wr:"\u2240",wreath:"\u2240",VeryThinSpace:"\u200A",hairsp:"\u200A",Vfr:"\u{1D519}",Vopf:"\u{1D54D}",Vscr:"\u{1D4B1}",Vvdash:"\u22AA",Wcirc:"\u0174",Wedge:"\u22C0",bigwedge:"\u22C0",xwedge:"\u22C0",Wfr:"\u{1D51A}",Wopf:"\u{1D54E}",Wscr:"\u{1D4B2}",Xfr:"\u{1D51B}",Xi:"\u039E",Xopf:"\u{1D54F}",Xscr:"\u{1D4B3}",YAcy:"\u042F",YIcy:"\u0407",YUcy:"\u042E",Yacute:"\xDD",Ycirc:"\u0176",Ycy:"\u042B",Yfr:"\u{1D51C}",Yopf:"\u{1D550}",Yscr:"\u{1D4B4}",Yuml:"\u0178",ZHcy:"\u0416",Zacute:"\u0179",Zcaron:"\u017D",Zcy:"\u0417",Zdot:"\u017B",Zeta:"\u0396",Zfr:"\u2128",zeetrf:"\u2128",Zopf:"\u2124",integers:"\u2124",Zscr:"\u{1D4B5}",aacute:"\xE1",abreve:"\u0103",ac:"\u223E",mstpos:"\u223E",acE:"\u223E\u0333",acd:"\u223F",acirc:"\xE2",acy:"\u0430",aelig:"\xE6",afr:"\u{1D51E}",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",alpha:"\u03B1",amacr:"\u0101",amalg:"\u2A3F",and:"\u2227",wedge:"\u2227",andand:"\u2A55",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",angle:"\u2220",ange:"\u29A4",angmsd:"\u2221",measuredangle:"\u2221",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angzarr:"\u237C",aogon:"\u0105",aopf:"\u{1D552}",apE:"\u2A70",apacir:"\u2A6F",ape:"\u224A",approxeq:"\u224A",apid:"\u224B",apos:"'",aring:"\xE5",ascr:"\u{1D4B6}",ast:"*",midast:"*",atilde:"\xE3",auml:"\xE4",awint:"\u2A11",bNot:"\u2AED",backcong:"\u224C",bcong:"\u224C",backepsilon:"\u03F6",bepsi:"\u03F6",backprime:"\u2035",bprime:"\u2035",backsim:"\u223D",bsim:"\u223D",backsimeq:"\u22CD",bsime:"\u22CD",barvee:"\u22BD",barwed:"\u2305",barwedge:"\u2305",bbrktbrk:"\u23B6",bcy:"\u0431",bdquo:"\u201E",ldquor:"\u201E",bemptyv:"\u29B0",beta:"\u03B2",beth:"\u2136",between:"\u226C",twixt:"\u226C",bfr:"\u{1D51F}",bigcirc:"\u25EF",xcirc:"\u25EF",bigodot:"\u2A00",xodot:"\u2A00",bigoplus:"\u2A01",xoplus:"\u2A01",bigotimes:"\u2A02",xotime:"\u2A02",bigsqcup:"\u2A06",xsqcup:"\u2A06",bigstar:"\u2605",starf:"\u2605",bigtriangledown:"\u25BD",xdtri:"\u25BD",bigtriangleup:"\u25B3",xutri:"\u25B3",biguplus:"\u2A04",xuplus:"\u2A04",bkarow:"\u290D",rbarr:"\u290D",blacklozenge:"\u29EB",lozf:"\u29EB",blacktriangle:"\u25B4",utrif:"\u25B4",blacktriangledown:"\u25BE",dtrif:"\u25BE",blacktriangleleft:"\u25C2",ltrif:"\u25C2",blacktriangleright:"\u25B8",rtrif:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bnot:"\u2310",bopf:"\u{1D553}",bowtie:"\u22C8",boxDL:"\u2557",boxDR:"\u2554",boxDl:"\u2556",boxDr:"\u2553",boxH:"\u2550",boxHD:"\u2566",boxHU:"\u2569",boxHd:"\u2564",boxHu:"\u2567",boxUL:"\u255D",boxUR:"\u255A",boxUl:"\u255C",boxUr:"\u2559",boxV:"\u2551",boxVH:"\u256C",boxVL:"\u2563",boxVR:"\u2560",boxVh:"\u256B",boxVl:"\u2562",boxVr:"\u255F",boxbox:"\u29C9",boxdL:"\u2555",boxdR:"\u2552",boxdl:"\u2510",boxdr:"\u250C",boxhD:"\u2565",boxhU:"\u2568",boxhd:"\u252C",boxhu:"\u2534",boxminus:"\u229F",minusb:"\u229F",boxplus:"\u229E",plusb:"\u229E",boxtimes:"\u22A0",timesb:"\u22A0",boxuL:"\u255B",boxuR:"\u2558",boxul:"\u2518",boxur:"\u2514",boxv:"\u2502",boxvH:"\u256A",boxvL:"\u2561",boxvR:"\u255E",boxvh:"\u253C",boxvl:"\u2524",boxvr:"\u251C",brvbar:"\xA6",bscr:"\u{1D4B7}",bsemi:"\u204F",bsol:"\\",bsolb:"\u29C5",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bumpE:"\u2AAE",cacute:"\u0107",cap:"\u2229",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",capcup:"\u2A47",capdot:"\u2A40",caps:"\u2229\uFE00",caret:"\u2041",ccaps:"\u2A4D",ccaron:"\u010D",ccedil:"\xE7",ccirc:"\u0109",ccups:"\u2A4C",ccupssm:"\u2A50",cdot:"\u010B",cemptyv:"\u29B2",cent:"\xA2",cfr:"\u{1D520}",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",chi:"\u03C7",cir:"\u25CB",cirE:"\u29C3",circ:"\u02C6",circeq:"\u2257",cire:"\u2257",circlearrowleft:"\u21BA",olarr:"\u21BA",circlearrowright:"\u21BB",orarr:"\u21BB",circledS:"\u24C8",oS:"\u24C8",circledast:"\u229B",oast:"\u229B",circledcirc:"\u229A",ocir:"\u229A",circleddash:"\u229D",odash:"\u229D",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",clubs:"\u2663",clubsuit:"\u2663",colon:":",comma:",",commat:"@",comp:"\u2201",complement:"\u2201",congdot:"\u2A6D",copf:"\u{1D554}",copysr:"\u2117",crarr:"\u21B5",cross:"\u2717",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",curlyeqprec:"\u22DE",cuesc:"\u22DF",curlyeqsucc:"\u22DF",cularr:"\u21B6",curvearrowleft:"\u21B6",cularrp:"\u293D",cup:"\u222A",cupbrcap:"\u2A48",cupcap:"\u2A46",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curvearrowright:"\u21B7",curarrm:"\u293C",curlyvee:"\u22CE",cuvee:"\u22CE",curlywedge:"\u22CF",cuwed:"\u22CF",curren:"\xA4",cwint:"\u2231",cylcty:"\u232D",dHar:"\u2965",dagger:"\u2020",daleth:"\u2138",dash:"\u2010",hyphen:"\u2010",dbkarow:"\u290F",rBarr:"\u290F",dcaron:"\u010F",dcy:"\u0434",ddarr:"\u21CA",downdownarrows:"\u21CA",ddotseq:"\u2A77",eDDot:"\u2A77",deg:"\xB0",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",dfr:"\u{1D521}",diamondsuit:"\u2666",diams:"\u2666",digamma:"\u03DD",gammad:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",djcy:"\u0452",dlcorn:"\u231E",llcorner:"\u231E",dlcrop:"\u230D",dollar:"$",dopf:"\u{1D555}",doteqdot:"\u2251",eDot:"\u2251",dotminus:"\u2238",minusd:"\u2238",dotplus:"\u2214",plusdo:"\u2214",dotsquare:"\u22A1",sdotb:"\u22A1",drcorn:"\u231F",lrcorner:"\u231F",drcrop:"\u230C",dscr:"\u{1D4B9}",dscy:"\u0455",dsol:"\u29F6",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",triangledown:"\u25BF",dwangle:"\u29A6",dzcy:"\u045F",dzigrarr:"\u27FF",eacute:"\xE9",easter:"\u2A6E",ecaron:"\u011B",ecir:"\u2256",eqcirc:"\u2256",ecirc:"\xEA",ecolon:"\u2255",eqcolon:"\u2255",ecy:"\u044D",edot:"\u0117",efDot:"\u2252",fallingdotseq:"\u2252",efr:"\u{1D522}",eg:"\u2A9A",egrave:"\xE8",egs:"\u2A96",eqslantgtr:"\u2A96",egsdot:"\u2A98",el:"\u2A99",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",eqslantless:"\u2A95",elsdot:"\u2A97",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",emptyv:"\u2205",varnothing:"\u2205",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",eng:"\u014B",ensp:"\u2002",eogon:"\u0119",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",epsilon:"\u03B5",epsiv:"\u03F5",straightepsilon:"\u03F5",varepsilon:"\u03F5",equals:"=",equest:"\u225F",questeq:"\u225F",equivDD:"\u2A78",eqvparsl:"\u29E5",erDot:"\u2253",risingdotseq:"\u2253",erarr:"\u2971",escr:"\u212F",eta:"\u03B7",eth:"\xF0",euml:"\xEB",euro:"\u20AC",excl:"!",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",ffr:"\u{1D523}",filig:"\uFB01",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",fopf:"\u{1D557}",fork:"\u22D4",pitchfork:"\u22D4",forkv:"\u2AD9",fpartint:"\u2A0D",frac12:"\xBD",half:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",sfrown:"\u2322",fscr:"\u{1D4BB}",gEl:"\u2A8C",gtreqqless:"\u2A8C",gacute:"\u01F5",gamma:"\u03B3",gap:"\u2A86",gtrapprox:"\u2A86",gbreve:"\u011F",gcirc:"\u011D",gcy:"\u0433",gdot:"\u0121",gescc:"\u2AA9",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",gfr:"\u{1D524}",gimel:"\u2137",gjcy:"\u0453",glE:"\u2A92",gla:"\u2AA5",glj:"\u2AA4",gnE:"\u2269",gneqq:"\u2269",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gneq:"\u2A88",gnsim:"\u22E7",gopf:"\u{1D558}",gscr:"\u210A",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gtdot:"\u22D7",gtrdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrarr:"\u2978",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",hardcy:"\u044A",harrcir:"\u2948",harrw:"\u21AD",leftrightsquigarrow:"\u21AD",hbar:"\u210F",hslash:"\u210F",planck:"\u210F",plankv:"\u210F",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",mldr:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",hksearow:"\u2925",searhk:"\u2925",hkswarow:"\u2926",swarhk:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",larrhk:"\u21A9",hookrightarrow:"\u21AA",rarrhk:"\u21AA",hopf:"\u{1D559}",horbar:"\u2015",hscr:"\u{1D4BD}",hstrok:"\u0127",hybull:"\u2043",iacute:"\xED",icirc:"\xEE",icy:"\u0438",iecy:"\u0435",iexcl:"\xA1",ifr:"\u{1D526}",igrave:"\xEC",iiiint:"\u2A0C",qint:"\u2A0C",iiint:"\u222D",tint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",ijlig:"\u0133",imacr:"\u012B",imath:"\u0131",inodot:"\u0131",imof:"\u22B7",imped:"\u01B5",incare:"\u2105",infin:"\u221E",infintie:"\u29DD",intcal:"\u22BA",intercal:"\u22BA",intlarhk:"\u2A17",intprod:"\u2A3C",iprod:"\u2A3C",iocy:"\u0451",iogon:"\u012F",iopf:"\u{1D55A}",iota:"\u03B9",iquest:"\xBF",iscr:"\u{1D4BE}",isinE:"\u22F9",isindot:"\u22F5",isins:"\u22F4",isinsv:"\u22F3",itilde:"\u0129",iukcy:"\u0456",iuml:"\xEF",jcirc:"\u0135",jcy:"\u0439",jfr:"\u{1D527}",jmath:"\u0237",jopf:"\u{1D55B}",jscr:"\u{1D4BF}",jsercy:"\u0458",jukcy:"\u0454",kappa:"\u03BA",kappav:"\u03F0",varkappa:"\u03F0",kcedil:"\u0137",kcy:"\u043A",kfr:"\u{1D528}",kgreen:"\u0138",khcy:"\u0445",kjcy:"\u045C",kopf:"\u{1D55C}",kscr:"\u{1D4C0}",lAtail:"\u291B",lBarr:"\u290E",lEg:"\u2A8B",lesseqqgtr:"\u2A8B",lHar:"\u2962",lacute:"\u013A",laemptyv:"\u29B4",lambda:"\u03BB",langd:"\u2991",lap:"\u2A85",lessapprox:"\u2A85",laquo:"\xAB",larrbfs:"\u291F",larrfs:"\u291D",larrlp:"\u21AB",looparrowleft:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",leftarrowtail:"\u21A2",lat:"\u2AAB",latail:"\u2919",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lbbrk:"\u2772",lbrace:"{",lcub:"{",lbrack:"[",lsqb:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",lcaron:"\u013E",lcedil:"\u013C",lcy:"\u043B",ldca:"\u2936",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",leq:"\u2264",leftleftarrows:"\u21C7",llarr:"\u21C7",leftthreetimes:"\u22CB",lthree:"\u22CB",lescc:"\u2AA8",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessdot:"\u22D6",ltdot:"\u22D6",lfisht:"\u297C",lfr:"\u{1D529}",lgE:"\u2A91",lharul:"\u296A",lhblk:"\u2584",ljcy:"\u0459",llhard:"\u296B",lltri:"\u25FA",lmidot:"\u0140",lmoust:"\u23B0",lmoustache:"\u23B0",lnE:"\u2268",lneqq:"\u2268",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lneq:"\u2A87",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",longmapsto:"\u27FC",xmap:"\u27FC",looparrowright:"\u21AC",rarrlp:"\u21AC",lopar:"\u2985",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",loz:"\u25CA",lozenge:"\u25CA",lpar:"(",lparlt:"\u2993",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",lsime:"\u2A8D",lsimg:"\u2A8F",lsquor:"\u201A",sbquo:"\u201A",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltrPar:"\u2996",ltri:"\u25C3",triangleleft:"\u25C3",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",mDDot:"\u223A",macr:"\xAF",strns:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",marker:"\u25AE",mcomma:"\u2A29",mcy:"\u043C",mdash:"\u2014",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midcir:"\u2AF0",minus:"\u2212",minusdu:"\u2A2A",mlcp:"\u2ADB",models:"\u22A7",mopf:"\u{1D55E}",mscr:"\u{1D4C2}",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nGg:"\u22D9\u0338",nGt:"\u226B\u20D2",nLeftarrow:"\u21CD",nlArr:"\u21CD",nLeftrightarrow:"\u21CE",nhArr:"\u21CE",nLl:"\u22D8\u0338",nLt:"\u226A\u20D2",nRightarrow:"\u21CF",nrArr:"\u21CF",nVDash:"\u22AF",nVdash:"\u22AE",nacute:"\u0144",nang:"\u2220\u20D2",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",natur:"\u266E",natural:"\u266E",ncap:"\u2A43",ncaron:"\u0148",ncedil:"\u0146",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",ncy:"\u043D",ndash:"\u2013",neArr:"\u21D7",nearhk:"\u2924",nedot:"\u2250\u0338",nesear:"\u2928",toea:"\u2928",nfr:"\u{1D52B}",nharr:"\u21AE",nleftrightarrow:"\u21AE",nhpar:"\u2AF2",nis:"\u22FC",nisd:"\u22FA",njcy:"\u045A",nlE:"\u2266\u0338",nleqq:"\u2266\u0338",nlarr:"\u219A",nleftarrow:"\u219A",nldr:"\u2025",nopf:"\u{1D55F}",not:"\xAC",notinE:"\u22F9\u0338",notindot:"\u22F5\u0338",notinvb:"\u22F7",notinvc:"\u22F6",notnivb:"\u22FE",notnivc:"\u22FD",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",nrarr:"\u219B",nrightarrow:"\u219B",nrarrc:"\u2933\u0338",nrarrw:"\u219D\u0338",nscr:"\u{1D4C3}",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsubseteqq:"\u2AC5\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupseteqq:"\u2AC6\u0338",ntilde:"\xF1",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvDash:"\u22AD",nvHarr:"\u2904",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwArr:"\u21D6",nwarhk:"\u2923",nwnear:"\u2927",oacute:"\xF3",ocirc:"\xF4",ocy:"\u043E",odblac:"\u0151",odiv:"\u2A38",odsold:"\u29BC",oelig:"\u0153",ofcir:"\u29BF",ofr:"\u{1D52C}",ogon:"\u02DB",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",olcir:"\u29BE",olcross:"\u29BB",olt:"\u29C0",omacr:"\u014D",omega:"\u03C9",omicron:"\u03BF",omid:"\u29B6",oopf:"\u{1D560}",opar:"\u29B7",operp:"\u29B9",or:"\u2228",vee:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",oscr:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oslash:"\xF8",osol:"\u2298",otilde:"\xF5",otimesas:"\u2A36",ouml:"\xF6",ovbar:"\u233D",para:"\xB6",parsim:"\u2AF3",parsl:"\u2AFD",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",pertenk:"\u2031",pfr:"\u{1D52D}",phi:"\u03C6",phiv:"\u03D5",straightphi:"\u03D5",varphi:"\u03D5",phone:"\u260E",pi:"\u03C0",piv:"\u03D6",varpi:"\u03D6",planckh:"\u210E",plus:"+",plusacir:"\u2A23",pluscir:"\u2A22",plusdu:"\u2A25",pluse:"\u2A72",plussim:"\u2A26",plustwo:"\u2A27",pointint:"\u2A15",popf:"\u{1D561}",pound:"\xA3",prE:"\u2AB3",prap:"\u2AB7",precapprox:"\u2AB7",precnapprox:"\u2AB9",prnap:"\u2AB9",precneqq:"\u2AB5",prnE:"\u2AB5",precnsim:"\u22E8",prnsim:"\u22E8",prime:"\u2032",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prurel:"\u22B0",pscr:"\u{1D4C5}",psi:"\u03C8",puncsp:"\u2008",qfr:"\u{1D52E}",qopf:"\u{1D562}",qprime:"\u2057",qscr:"\u{1D4C6}",quatint:"\u2A16",quest:"?",rAtail:"\u291C",rHar:"\u2964",race:"\u223D\u0331",racute:"\u0155",raemptyv:"\u29B3",rangd:"\u2992",range:"\u29A5",raquo:"\xBB",rarrap:"\u2975",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291E",rarrpl:"\u2945",rarrsim:"\u2974",rarrtl:"\u21A3",rightarrowtail:"\u21A3",rarrw:"\u219D",rightsquigarrow:"\u219D",ratail:"\u291A",ratio:"\u2236",rbbrk:"\u2773",rbrace:"}",rcub:"}",rbrack:"]",rsqb:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",rcaron:"\u0159",rcedil:"\u0157",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdsh:"\u21B3",rect:"\u25AD",rfisht:"\u297D",rfr:"\u{1D52F}",rharul:"\u296C",rho:"\u03C1",rhov:"\u03F1",varrho:"\u03F1",rightrightarrows:"\u21C9",rrarr:"\u21C9",rightthreetimes:"\u22CC",rthree:"\u22CC",ring:"\u02DA",rlm:"\u200F",rmoust:"\u23B1",rmoustache:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",ropar:"\u2986",ropf:"\u{1D563}",roplus:"\u2A2E",rotimes:"\u2A35",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rsaquo:"\u203A",rscr:"\u{1D4C7}",rtimes:"\u22CA",rtri:"\u25B9",triangleright:"\u25B9",rtriltri:"\u29CE",ruluhar:"\u2968",rx:"\u211E",sacute:"\u015B",scE:"\u2AB4",scap:"\u2AB8",succapprox:"\u2AB8",scaron:"\u0161",scedil:"\u015F",scirc:"\u015D",scnE:"\u2AB6",succneqq:"\u2AB6",scnap:"\u2ABA",succnapprox:"\u2ABA",scnsim:"\u22E9",succnsim:"\u22E9",scpolint:"\u2A13",scy:"\u0441",sdot:"\u22C5",sdote:"\u2A66",seArr:"\u21D8",sect:"\xA7",semi:";",seswar:"\u2929",tosa:"\u2929",sext:"\u2736",sfr:"\u{1D530}",sharp:"\u266F",shchcy:"\u0449",shcy:"\u0448",shy:"\xAD",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",varsigma:"\u03C2",simdot:"\u2A6A",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",smashp:"\u2A33",smeparsl:"\u29E4",smile:"\u2323",ssmile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",softcy:"\u044C",sol:"/",solb:"\u29C4",solbar:"\u233F",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",sqcaps:"\u2293\uFE00",sqcups:"\u2294\uFE00",sscr:"\u{1D4C8}",star:"\u2606",sub:"\u2282",subset:"\u2282",subE:"\u2AC5",subseteqq:"\u2AC5",subdot:"\u2ABD",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subsetneqq:"\u2ACB",subne:"\u228A",subsetneq:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",supE:"\u2AC6",supseteqq:"\u2AC6",supdot:"\u2ABE",supdsub:"\u2AD8",supedot:"\u2AC4",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supsetneqq:"\u2ACC",supne:"\u228B",supsetneq:"\u228B",supplus:"\u2AC0",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swArr:"\u21D9",swnwar:"\u292A",szlig:"\xDF",target:"\u2316",tau:"\u03C4",tcaron:"\u0165",tcedil:"\u0163",tcy:"\u0442",telrec:"\u2315",tfr:"\u{1D531}",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",vartheta:"\u03D1",thorn:"\xFE",times:"\xD7",timesbar:"\u2A31",timesd:"\u2A30",topbot:"\u2336",topcir:"\u2AF1",topf:"\u{1D565}",topfork:"\u2ADA",tprime:"\u2034",triangle:"\u25B5",utri:"\u25B5",triangleq:"\u225C",trie:"\u225C",tridot:"\u25EC",triminus:"\u2A3A",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",tscr:"\u{1D4C9}",tscy:"\u0446",tshcy:"\u045B",tstrok:"\u0167",uHar:"\u2963",uacute:"\xFA",ubrcy:"\u045E",ubreve:"\u016D",ucirc:"\xFB",ucy:"\u0443",udblac:"\u0171",ufisht:"\u297E",ufr:"\u{1D532}",ugrave:"\xF9",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",umacr:"\u016B",uogon:"\u0173",uopf:"\u{1D566}",upsi:"\u03C5",upsilon:"\u03C5",upuparrows:"\u21C8",uuarr:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",uring:"\u016F",urtri:"\u25F9",uscr:"\u{1D4CA}",utdot:"\u22F0",utilde:"\u0169",uuml:"\xFC",uwangle:"\u29A7",vBar:"\u2AE8",vBarv:"\u2AE9",vangrt:"\u299C",varsubsetneq:"\u228A\uFE00",vsubne:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",vsubnE:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",vsupne:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vsupnE:"\u2ACC\uFE00",vcy:"\u0432",veebar:"\u22BB",veeeq:"\u225A",vellip:"\u22EE",vfr:"\u{1D533}",vopf:"\u{1D567}",vscr:"\u{1D4CB}",vzigzag:"\u299A",wcirc:"\u0175",wedbar:"\u2A5F",wedgeq:"\u2259",weierp:"\u2118",wp:"\u2118",wfr:"\u{1D534}",wopf:"\u{1D568}",wscr:"\u{1D4CC}",xfr:"\u{1D535}",xi:"\u03BE",xnis:"\u22FB",xopf:"\u{1D569}",xscr:"\u{1D4CD}",yacute:"\xFD",yacy:"\u044F",ycirc:"\u0177",ycy:"\u044B",yen:"\xA5",yfr:"\u{1D536}",yicy:"\u0457",yopf:"\u{1D56A}",yscr:"\u{1D4CE}",yucy:"\u044E",yuml:"\xFF",zacute:"\u017A",zcaron:"\u017E",zcy:"\u0437",zdot:"\u017C",zeta:"\u03B6",zfr:"\u{1D537}",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"},Pv="\uE500";Ma.ngsp=Pv;var Nv=[/@/,/^\s*$/,/[<>]/,/^[{}]$/,/&(#|[a-z])/i,/^\/\//];function Bv(o,a){if(a!=null&&!(Array.isArray(a)&&a.length==2))throw new Error(`Expected '${o}' to be an array, [start, end].`);if(a!=null){let c=a[0],u=a[1];Nv.forEach(p=>{if(p.test(c)||p.test(u))throw new Error(`['${c}', '${u}'] contains unusable interpolation symbol.`)})}}var $v=class tg{static fromArray(a){return a?(Bv("interpolation",a),new tg(a[0],a[1])):tp}constructor(a,c){this.start=a,this.end=c}},tp=new $v("{{","}}"),Bl=class extends Nd{constructor(o,a,c){super(c,o),this.tokenType=a}},Vv=class{constructor(o,a,c){this.tokens=o,this.errors=a,this.nonNormalizedIcuExpressions=c}};function Uv(o,a,c,u={}){let p=new zv(new Pd(o,a),c,u);return p.tokenize(),new Vv(Yv(p.tokens),p.errors,p.nonNormalizedIcuExpressions)}var jv=/\r\n?/g;function lr(o){return`Unexpected character "${o===0?"EOF":String.fromCharCode(o)}"`}function np(o){return`Unknown entity "${o}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`}function Hv(o,a){return`Unable to parse entity "${a}" - ${o} character reference entities must end with ";"`}var Ra;(function(o){o.HEX="hexadecimal",o.DEC="decimal"})(Ra||(Ra={}));var $l=class{constructor(o){this.error=o}},zv=class{constructor(o,a,c){this._getTagContentType=a,this._currentTokenStart=null,this._currentTokenType=null,this._expansionCaseStack=[],this._inInterpolation=!1,this._fullNameStack=[],this.tokens=[],this.errors=[],this.nonNormalizedIcuExpressions=[],this._tokenizeIcu=c.tokenizeExpansionForms||!1,this._interpolationConfig=c.interpolationConfig||tp,this._leadingTriviaCodePoints=c.leadingTriviaChars&&c.leadingTriviaChars.map(p=>p.codePointAt(0)||0),this._canSelfClose=c.canSelfClose||!1,this._allowHtmComponentClosingTags=c.allowHtmComponentClosingTags||!1;let u=c.range||{endPos:o.content.length,startPos:0,startLine:0,startCol:0};this._cursor=c.escapedString?new Zv(o,u):new sp(o,u),this._preserveLineEndings=c.preserveLineEndings||!1,this._i18nNormalizeLineEndingsInICUs=c.i18nNormalizeLineEndingsInICUs||!1,this._tokenizeBlocks=c.tokenizeBlocks??!0,this._tokenizeLet=c.tokenizeLet??!0;try{this._cursor.init()}catch(p){this.handleError(p)}}_processCarriageReturns(o){return this._preserveLineEndings?o:o.replace(jv,`
`)}tokenize(){for(;this._cursor.peek()!==0;){let o=this._cursor.clone();try{if(this._attemptCharCode(60))if(this._attemptCharCode(33))this._attemptStr("[CDATA[")?this._consumeCdata(o):this._attemptStr("--")?this._consumeComment(o):this._attemptStrCaseInsensitive("doctype")?this._consumeDocType(o):this._consumeBogusComment(o);else if(this._attemptCharCode(47))this._consumeTagClose(o);else{let a=this._cursor.clone();this._attemptCharCode(63)?(this._cursor=a,this._consumeBogusComment(o)):this._consumeTagOpen(o)}else this._tokenizeLet&&this._cursor.peek()===64&&!this._inInterpolation&&this._attemptStr("@let")?this._consumeLetDeclaration(o):this._tokenizeBlocks&&this._attemptCharCode(64)?this._consumeBlockStart(o):this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansionCase()&&!this._isInExpansionForm()&&this._attemptCharCode(125)?this._consumeBlockEnd(o):this._tokenizeIcu&&this._tokenizeExpansionForm()||this._consumeWithInterpolation(5,8,()=>this._isTextEnd(),()=>this._isTagStart())}catch(a){this.handleError(a)}}this._beginToken(34),this._endToken([])}_getBlockName(){let o=!1,a=this._cursor.clone();return this._attemptCharCodeUntilFn(c=>Da(c)?!o:op(c)?(o=!0,!1):!0),this._cursor.getChars(a).trim()}_consumeBlockStart(o){this._beginToken(25,o);let a=this._endToken([this._getBlockName()]);if(this._cursor.peek()===40)if(this._cursor.advance(),this._consumeBlockParameters(),this._attemptCharCodeUntilFn(it),this._attemptCharCode(41))this._attemptCharCodeUntilFn(it);else{a.type=29;return}this._attemptCharCode(123)?(this._beginToken(26),this._endToken([])):a.type=29}_consumeBlockEnd(o){this._beginToken(27,o),this._endToken([])}_consumeBlockParameters(){for(this._attemptCharCodeUntilFn(ap);this._cursor.peek()!==41&&this._cursor.peek()!==0;){this._beginToken(28);let o=this._cursor.clone(),a=null,c=0;for(;this._cursor.peek()!==59&&this._cursor.peek()!==0||a!==null;){let u=this._cursor.peek();if(u===92)this._cursor.advance();else if(u===a)a=null;else if(a===null&&Ol(u))a=u;else if(u===40&&a===null)c++;else if(u===41&&a===null){if(c===0)break;c>0&&c--}this._cursor.advance()}this._endToken([this._cursor.getChars(o)]),this._attemptCharCodeUntilFn(ap)}}_consumeLetDeclaration(o){if(this._beginToken(30,o),Da(this._cursor.peek()))this._attemptCharCodeUntilFn(it);else{let c=this._endToken([this._cursor.getChars(o)]);c.type=33;return}let a=this._endToken([this._getLetDeclarationName()]);if(this._attemptCharCodeUntilFn(it),!this._attemptCharCode(61)){a.type=33;return}this._attemptCharCodeUntilFn(c=>it(c)&&!Ll(c)),this._consumeLetDeclarationValue(),this._cursor.peek()===59?(this._beginToken(32),this._endToken([]),this._cursor.advance()):(a.type=33,a.sourceSpan=this._cursor.getSpan(o))}_getLetDeclarationName(){let o=this._cursor.clone(),a=!1;return this._attemptCharCodeUntilFn(c=>xa(c)||c===36||c===95||a&&Rl(c)?(a=!0,!1):!0),this._cursor.getChars(o).trim()}_consumeLetDeclarationValue(){let o=this._cursor.clone();for(this._beginToken(31,o);this._cursor.peek()!==0;){let a=this._cursor.peek();if(a===59)break;Ol(a)&&(this._cursor.advance(),this._attemptCharCodeUntilFn(c=>c===92?(this._cursor.advance(),!1):c===a)),this._cursor.advance()}this._endToken([this._cursor.getChars(o)])}_tokenizeExpansionForm(){if(this.isExpansionFormStart())return this._consumeExpansionFormStart(),!0;if(Kv(this._cursor.peek())&&this._isInExpansionForm())return this._consumeExpansionCaseStart(),!0;if(this._cursor.peek()===125){if(this._isInExpansionCase())return this._consumeExpansionCaseEnd(),!0;if(this._isInExpansionForm())return this._consumeExpansionFormEnd(),!0}return!1}_beginToken(o,a=this._cursor.clone()){this._currentTokenStart=a,this._currentTokenType=o}_endToken(o,a){if(this._currentTokenStart===null)throw new Bl("Programming error - attempted to end a token when there was no start to the token",this._currentTokenType,this._cursor.getSpan(a));if(this._currentTokenType===null)throw new Bl("Programming error - attempted to end a token which has no token type",null,this._cursor.getSpan(this._currentTokenStart));let c={type:this._currentTokenType,parts:o,sourceSpan:(a??this._cursor).getSpan(this._currentTokenStart,this._leadingTriviaCodePoints)};return this.tokens.push(c),this._currentTokenStart=null,this._currentTokenType=null,c}_createError(o,a){this._isInExpansionForm()&&(o+=` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);let c=new Bl(o,this._currentTokenType,a);return this._currentTokenStart=null,this._currentTokenType=null,new $l(c)}handleError(o){if(o instanceof Vl&&(o=this._createError(o.msg,this._cursor.getSpan(o.cursor))),o instanceof $l)this.errors.push(o.error);else throw o}_attemptCharCode(o){return this._cursor.peek()===o?(this._cursor.advance(),!0):!1}_attemptCharCodeCaseInsensitive(o){return Qv(this._cursor.peek(),o)?(this._cursor.advance(),!0):!1}_requireCharCode(o){let a=this._cursor.clone();if(!this._attemptCharCode(o))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(a))}_attemptStr(o){let a=o.length;if(this._cursor.charsLeft()<a)return!1;let c=this._cursor.clone();for(let u=0;u<a;u++)if(!this._attemptCharCode(o.charCodeAt(u)))return this._cursor=c,!1;return!0}_attemptStrCaseInsensitive(o){for(let a=0;a<o.length;a++)if(!this._attemptCharCodeCaseInsensitive(o.charCodeAt(a)))return!1;return!0}_requireStr(o){let a=this._cursor.clone();if(!this._attemptStr(o))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(a))}_requireStrCaseInsensitive(o){let a=this._cursor.clone();if(!this._attemptStrCaseInsensitive(o))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(a))}_attemptCharCodeUntilFn(o){for(;!o(this._cursor.peek());)this._cursor.advance()}_requireCharCodeUntilFn(o,a){let c=this._cursor.clone();if(this._attemptCharCodeUntilFn(o),this._cursor.diff(c)<a)throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(c))}_attemptUntilChar(o){for(;this._cursor.peek()!==o;)this._cursor.advance()}_readChar(){let o=String.fromCodePoint(this._cursor.peek());return this._cursor.advance(),o}_consumeEntity(o){this._beginToken(9);let a=this._cursor.clone();if(this._cursor.advance(),this._attemptCharCode(35)){let c=this._attemptCharCode(120)||this._attemptCharCode(88),u=this._cursor.clone();if(this._attemptCharCodeUntilFn(Wv),this._cursor.peek()!=59){this._cursor.advance();let f=c?Ra.HEX:Ra.DEC;throw this._createError(Hv(f,this._cursor.getChars(a)),this._cursor.getSpan())}let p=this._cursor.getChars(u);this._cursor.advance();try{let f=parseInt(p,c?16:10);this._endToken([String.fromCharCode(f),this._cursor.getChars(a)])}catch{throw this._createError(np(this._cursor.getChars(a)),this._cursor.getSpan())}}else{let c=this._cursor.clone();if(this._attemptCharCodeUntilFn(Gv),this._cursor.peek()!=59)this._beginToken(o,a),this._cursor=c,this._endToken(["&"]);else{let u=this._cursor.getChars(c);this._cursor.advance();let p=Ma[u];if(!p)throw this._createError(np(u),this._cursor.getSpan(a));this._endToken([p,`&${u};`])}}}_consumeRawText(o,a){this._beginToken(o?6:7);let c=[];for(;;){let u=this._cursor.clone(),p=a();if(this._cursor=u,p)break;o&&this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(c.join(""))]),c.length=0,this._consumeEntity(6),this._beginToken(6)):c.push(this._readChar())}this._endToken([this._processCarriageReturns(c.join(""))])}_consumeComment(o){this._beginToken(10,o),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("-->")),this._beginToken(11),this._requireStr("-->"),this._endToken([])}_consumeBogusComment(o){this._beginToken(10,o),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(11),this._cursor.advance(),this._endToken([])}_consumeCdata(o){this._beginToken(12,o),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("]]>")),this._beginToken(13),this._requireStr("]]>"),this._endToken([])}_consumeDocType(o){this._beginToken(18,o),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(19),this._cursor.advance(),this._endToken([])}_consumePrefixAndName(){let o=this._cursor.clone(),a="";for(;this._cursor.peek()!==58&&!qv(this._cursor.peek());)this._cursor.advance();let c;this._cursor.peek()===58?(a=this._cursor.getChars(o),this._cursor.advance(),c=this._cursor.clone()):c=o,this._requireCharCodeUntilFn(ip,a===""?0:1);let u=this._cursor.getChars(c);return[a,u]}_consumeTagOpen(o){let a,c,u,p=[];try{if(!xa(this._cursor.peek()))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(o));for(u=this._consumeTagOpenStart(o),c=u.parts[0],a=u.parts[1],this._attemptCharCodeUntilFn(it);this._cursor.peek()!==47&&this._cursor.peek()!==62&&this._cursor.peek()!==60&&this._cursor.peek()!==0;){let[v,C]=this._consumeAttributeName();if(this._attemptCharCodeUntilFn(it),this._attemptCharCode(61)){this._attemptCharCodeUntilFn(it);let L=this._consumeAttributeValue();p.push({prefix:v,name:C,value:L})}else p.push({prefix:v,name:C});this._attemptCharCodeUntilFn(it)}this._consumeTagOpenEnd()}catch(v){if(v instanceof $l){u?u.type=4:(this._beginToken(5,o),this._endToken(["<"]));return}throw v}if(this._canSelfClose&&this.tokens[this.tokens.length-1].type===2)return;let f=this._getTagContentType(a,c,this._fullNameStack.length>0,p);this._handleFullNameStackForTagOpen(c,a),f===rn.RAW_TEXT?this._consumeRawTextWithTagClose(c,a,!1):f===rn.ESCAPABLE_RAW_TEXT&&this._consumeRawTextWithTagClose(c,a,!0)}_consumeRawTextWithTagClose(o,a,c){this._consumeRawText(c,()=>!this._attemptCharCode(60)||!this._attemptCharCode(47)||(this._attemptCharCodeUntilFn(it),!this._attemptStrCaseInsensitive(o?`${o}:${a}`:a))?!1:(this._attemptCharCodeUntilFn(it),this._attemptCharCode(62))),this._beginToken(3),this._requireCharCodeUntilFn(u=>u===62,3),this._cursor.advance(),this._endToken([o,a]),this._handleFullNameStackForTagClose(o,a)}_consumeTagOpenStart(o){this._beginToken(0,o);let a=this._consumePrefixAndName();return this._endToken(a)}_consumeAttributeName(){let o=this._cursor.peek();if(o===39||o===34)throw this._createError(lr(o),this._cursor.getSpan());this._beginToken(14);let a=this._consumePrefixAndName();return this._endToken(a),a}_consumeAttributeValue(){let o;if(this._cursor.peek()===39||this._cursor.peek()===34){let a=this._cursor.peek();this._consumeQuote(a);let c=()=>this._cursor.peek()===a;o=this._consumeWithInterpolation(16,17,c,c),this._consumeQuote(a)}else{let a=()=>ip(this._cursor.peek());o=this._consumeWithInterpolation(16,17,a,a)}return o}_consumeQuote(o){this._beginToken(15),this._requireCharCode(o),this._endToken([String.fromCodePoint(o)])}_consumeTagOpenEnd(){let o=this._attemptCharCode(47)?2:1;this._beginToken(o),this._requireCharCode(62),this._endToken([])}_consumeTagClose(o){if(this._beginToken(3,o),this._attemptCharCodeUntilFn(it),this._allowHtmComponentClosingTags&&this._attemptCharCode(47))this._attemptCharCodeUntilFn(it),this._requireCharCode(62),this._endToken([]);else{let[a,c]=this._consumePrefixAndName();this._attemptCharCodeUntilFn(it),this._requireCharCode(62),this._endToken([a,c]),this._handleFullNameStackForTagClose(a,c)}}_consumeExpansionFormStart(){this._beginToken(20),this._requireCharCode(123),this._endToken([]),this._expansionCaseStack.push(20),this._beginToken(7);let o=this._readUntil(44),a=this._processCarriageReturns(o);if(this._i18nNormalizeLineEndingsInICUs)this._endToken([a]);else{let u=this._endToken([o]);a!==o&&this.nonNormalizedIcuExpressions.push(u)}this._requireCharCode(44),this._attemptCharCodeUntilFn(it),this._beginToken(7);let c=this._readUntil(44);this._endToken([c]),this._requireCharCode(44),this._attemptCharCodeUntilFn(it)}_consumeExpansionCaseStart(){this._beginToken(21);let o=this._readUntil(123).trim();this._endToken([o]),this._attemptCharCodeUntilFn(it),this._beginToken(22),this._requireCharCode(123),this._endToken([]),this._attemptCharCodeUntilFn(it),this._expansionCaseStack.push(22)}_consumeExpansionCaseEnd(){this._beginToken(23),this._requireCharCode(125),this._endToken([]),this._attemptCharCodeUntilFn(it),this._expansionCaseStack.pop()}_consumeExpansionFormEnd(){this._beginToken(24),this._requireCharCode(125),this._endToken([]),this._expansionCaseStack.pop()}_consumeWithInterpolation(o,a,c,u){this._beginToken(o);let p=[];for(;!c();){let v=this._cursor.clone();this._interpolationConfig&&this._attemptStr(this._interpolationConfig.start)?(this._endToken([this._processCarriageReturns(p.join(""))],v),p.length=0,this._consumeInterpolation(a,v,u),this._beginToken(o)):this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(p.join(""))]),p.length=0,this._consumeEntity(o),this._beginToken(o)):p.push(this._readChar())}this._inInterpolation=!1;let f=this._processCarriageReturns(p.join(""));return this._endToken([f]),f}_consumeInterpolation(o,a,c){let u=[];this._beginToken(o,a),u.push(this._interpolationConfig.start);let p=this._cursor.clone(),f=null,v=!1;for(;this._cursor.peek()!==0&&(c===null||!c());){let C=this._cursor.clone();if(this._isTagStart()){this._cursor=C,u.push(this._getProcessedChars(p,C)),this._endToken(u);return}if(f===null)if(this._attemptStr(this._interpolationConfig.end)){u.push(this._getProcessedChars(p,C)),u.push(this._interpolationConfig.end),this._endToken(u);return}else this._attemptStr("//")&&(v=!0);let L=this._cursor.peek();this._cursor.advance(),L===92?this._cursor.advance():L===f?f=null:!v&&f===null&&Ol(L)&&(f=L)}u.push(this._getProcessedChars(p,this._cursor)),this._endToken(u)}_getProcessedChars(o,a){return this._processCarriageReturns(a.getChars(o))}_isTextEnd(){return!!(this._isTagStart()||this._cursor.peek()===0||this._tokenizeIcu&&!this._inInterpolation&&(this.isExpansionFormStart()||this._cursor.peek()===125&&this._isInExpansionCase())||this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansion()&&(this._isBlockStart()||this._cursor.peek()===64||this._cursor.peek()===125))}_isTagStart(){if(this._cursor.peek()===60){let o=this._cursor.clone();o.advance();let a=o.peek();if(97<=a&&a<=122||65<=a&&a<=90||a===47||a===33)return!0}return!1}_isBlockStart(){if(this._tokenizeBlocks&&this._cursor.peek()===64){let o=this._cursor.clone();if(o.advance(),op(o.peek()))return!0}return!1}_readUntil(o){let a=this._cursor.clone();return this._attemptUntilChar(o),this._cursor.getChars(a)}_isInExpansion(){return this._isInExpansionCase()||this._isInExpansionForm()}_isInExpansionCase(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===22}_isInExpansionForm(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===20}isExpansionFormStart(){if(this._cursor.peek()!==123)return!1;if(this._interpolationConfig){let o=this._cursor.clone(),a=this._attemptStr(this._interpolationConfig.start);return this._cursor=o,!a}return!0}_handleFullNameStackForTagOpen(o,a){let c=Ia(o,a);(this._fullNameStack.length===0||this._fullNameStack[this._fullNameStack.length-1]===c)&&this._fullNameStack.push(c)}_handleFullNameStackForTagClose(o,a){let c=Ia(o,a);this._fullNameStack.length!==0&&this._fullNameStack[this._fullNameStack.length-1]===c&&this._fullNameStack.pop()}};function it(o){return!Da(o)||o===0}function ip(o){return Da(o)||o===62||o===60||o===47||o===39||o===34||o===61||o===0}function qv(o){return(o<97||122<o)&&(o<65||90<o)&&(o<48||o>57)}function Wv(o){return o===59||o===0||!Yb(o)}function Gv(o){return o===59||o===0||!xa(o)}function Kv(o){return o!==125}function Qv(o,a){return rp(o)===rp(a)}function rp(o){return o>=97&&o<=122?o-97+65:o}function op(o){return xa(o)||Rl(o)||o===95}function ap(o){return o!==59&&it(o)}function Yv(o){let a=[],c;for(let u=0;u<o.length;u++){let p=o[u];c&&c.type===5&&p.type===5||c&&c.type===16&&p.type===16?(c.parts[0]+=p.parts[0],c.sourceSpan.end=p.sourceSpan.end):(c=p,a.push(c))}return a}var sp=class ju{constructor(a,c){if(a instanceof ju){this.file=a.file,this.input=a.input,this.end=a.end;let u=a.state;this.state={peek:u.peek,offset:u.offset,line:u.line,column:u.column}}else{if(!c)throw new Error("Programming error: the range argument must be provided with a file argument.");this.file=a,this.input=a.content,this.end=c.endPos,this.state={peek:-1,offset:c.startPos,line:c.startLine,column:c.startCol}}}clone(){return new ju(this)}peek(){return this.state.peek}charsLeft(){return this.end-this.state.offset}diff(a){return this.state.offset-a.state.offset}advance(){this.advanceState(this.state)}init(){this.updatePeek(this.state)}getSpan(a,c){a=a||this;let u=a;if(c)for(;this.diff(a)>0&&c.indexOf(a.peek())!==-1;)u===a&&(a=a.clone()),a.advance();let p=this.locationFromCursor(a),f=this.locationFromCursor(this),v=u!==a?this.locationFromCursor(u):p;return new me(p,f,v)}getChars(a){return this.input.substring(a.state.offset,this.state.offset)}charAt(a){return this.input.charCodeAt(a)}advanceState(a){if(a.offset>=this.end)throw this.state=a,new Vl('Unexpected character "EOF"',this);let c=this.charAt(a.offset);c===10?(a.line++,a.column=0):Ll(c)||a.column++,a.offset++,this.updatePeek(a)}updatePeek(a){a.peek=a.offset>=this.end?0:this.charAt(a.offset)}locationFromCursor(a){return new Pl(a.file,a.state.offset,a.state.line,a.state.column)}},Zv=class Hu extends sp{constructor(a,c){a instanceof Hu?(super(a),this.internalState=I({},a.internalState)):(super(a,c),this.internalState=this.state)}advance(){this.state=this.internalState,super.advance(),this.processEscapeSequence()}init(){super.init(),this.processEscapeSequence()}clone(){return new Hu(this)}getChars(a){let c=a.clone(),u="";for(;c.internalState.offset<this.internalState.offset;)u+=String.fromCodePoint(c.peek()),c.advance();return u}processEscapeSequence(){let a=()=>this.internalState.peek;if(a()===92)if(this.internalState=I({},this.state),this.advanceState(this.internalState),a()===110)this.state.peek=10;else if(a()===114)this.state.peek=13;else if(a()===118)this.state.peek=11;else if(a()===116)this.state.peek=9;else if(a()===98)this.state.peek=8;else if(a()===102)this.state.peek=12;else if(a()===117)if(this.advanceState(this.internalState),a()===123){this.advanceState(this.internalState);let c=this.clone(),u=0;for(;a()!==125;)this.advanceState(this.internalState),u++;this.state.peek=this.decodeHexDigits(c,u)}else{let c=this.clone();this.advanceState(this.internalState),this.advanceState(this.internalState),this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(c,4)}else if(a()===120){this.advanceState(this.internalState);let c=this.clone();this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(c,2)}else if(Od(a())){let c="",u=0,p=this.clone();for(;Od(a())&&u<3;)p=this.clone(),c+=String.fromCodePoint(a()),this.advanceState(this.internalState),u++;this.state.peek=parseInt(c,8),this.internalState=p.internalState}else Ll(this.internalState.peek)?(this.advanceState(this.internalState),this.state=this.internalState):this.state.peek=this.internalState.peek}decodeHexDigits(a,c){let u=this.input.slice(a.internalState.offset,a.internalState.offset+c),p=parseInt(u,16);if(isNaN(p))throw a.state=a.internalState,new Vl("Invalid hexadecimal escape sequence",a);return p}},Vl=class{constructor(o,a){this.msg=o,this.cursor=a}},Et=class ng extends Nd{static create(a,c,u){return new ng(a,c,u)}constructor(a,c,u){super(c,u),this.elementName=a}},Xv=class{constructor(o,a){this.rootNodes=o,this.errors=a}},Jv=class{constructor(o){this.getTagDefinition=o}parse(o,a,c,u=!1,p){let f=be=>(Pe,...st)=>be(Pe.toLowerCase(),...st),v=u?this.getTagDefinition:f(this.getTagDefinition),C=be=>v(be).getContentType(),L=u?p:f(p),K=Uv(o,a,p?(be,Pe,st,gt)=>{let _t=L(be,Pe,st,gt);return _t!==void 0?_t:C(be)}:C,c),z=c&&c.canSelfClose||!1,we=c&&c.allowHtmComponentClosingTags||!1,he=new ey(K.tokens,v,z,we,u);return he.build(),new Xv(he.rootNodes,K.errors.concat(he.errors))}},ey=class ig{constructor(a,c,u,p,f){this.tokens=a,this.getTagDefinition=c,this.canSelfClose=u,this.allowHtmComponentClosingTags=p,this.isTagNameCaseSensitive=f,this._index=-1,this._containerStack=[],this.rootNodes=[],this.errors=[],this._advance()}build(){for(;this._peek.type!==34;)this._peek.type===0||this._peek.type===4?this._consumeStartTag(this._advance()):this._peek.type===3?(this._closeVoidElement(),this._consumeEndTag(this._advance())):this._peek.type===12?(this._closeVoidElement(),this._consumeCdata(this._advance())):this._peek.type===10?(this._closeVoidElement(),this._consumeComment(this._advance())):this._peek.type===5||this._peek.type===7||this._peek.type===6?(this._closeVoidElement(),this._consumeText(this._advance())):this._peek.type===20?this._consumeExpansion(this._advance()):this._peek.type===25?(this._closeVoidElement(),this._consumeBlockOpen(this._advance())):this._peek.type===27?(this._closeVoidElement(),this._consumeBlockClose(this._advance())):this._peek.type===29?(this._closeVoidElement(),this._consumeIncompleteBlock(this._advance())):this._peek.type===30?(this._closeVoidElement(),this._consumeLet(this._advance())):this._peek.type===18?this._consumeDocType(this._advance()):this._peek.type===33?(this._closeVoidElement(),this._consumeIncompleteLet(this._advance())):this._advance();for(let a of this._containerStack)a instanceof sr&&this.errors.push(Et.create(a.name,a.sourceSpan,`Unclosed block "${a.name}"`))}_advance(){let a=this._peek;return this._index<this.tokens.length-1&&this._index++,this._peek=this.tokens[this._index],a}_advanceIf(a){return this._peek.type===a?this._advance():null}_consumeCdata(a){let c=this._advance(),u=this._getText(c),p=this._advanceIf(13);this._addToParent(new Iv(u,new me(a.sourceSpan.start,(p||c).sourceSpan.end),[c]))}_consumeComment(a){let c=this._advanceIf(7),u=this._advanceIf(11),p=c!=null?c.parts[0].trim():null,f=u==null?a.sourceSpan:new me(a.sourceSpan.start,u.sourceSpan.end,a.sourceSpan.fullStart);this._addToParent(new Rv(p,f))}_consumeDocType(a){let c=this._advanceIf(7),u=this._advanceIf(19),p=c!=null?c.parts[0].trim():null,f=new me(a.sourceSpan.start,(u||c||a).sourceSpan.end);this._addToParent(new Lv(p,f))}_consumeExpansion(a){let c=this._advance(),u=this._advance(),p=[];for(;this._peek.type===21;){let v=this._parseExpansionCase();if(!v)return;p.push(v)}if(this._peek.type!==24){this.errors.push(Et.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '}'."));return}let f=new me(a.sourceSpan.start,this._peek.sourceSpan.end,a.sourceSpan.fullStart);this._addToParent(new kv(c.parts[0],u.parts[0],p,f,c.sourceSpan)),this._advance()}_parseExpansionCase(){let a=this._advance();if(this._peek.type!==22)return this.errors.push(Et.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '{'.")),null;let c=this._advance(),u=this._collectExpansionExpTokens(c);if(!u)return null;let p=this._advance();u.push({type:34,parts:[],sourceSpan:p.sourceSpan});let f=new ig(u,this.getTagDefinition,this.canSelfClose,this.allowHtmComponentClosingTags,this.isTagNameCaseSensitive);if(f.build(),f.errors.length>0)return this.errors=this.errors.concat(f.errors),null;let v=new me(a.sourceSpan.start,p.sourceSpan.end,a.sourceSpan.fullStart),C=new me(c.sourceSpan.start,p.sourceSpan.end,c.sourceSpan.fullStart);return new Fv(a.parts[0],f.rootNodes,v,a.sourceSpan,C)}_collectExpansionExpTokens(a){let c=[],u=[22];for(;;){if((this._peek.type===20||this._peek.type===22)&&u.push(this._peek.type),this._peek.type===23)if(lp(u,22)){if(u.pop(),u.length===0)return c}else return this.errors.push(Et.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===24)if(lp(u,20))u.pop();else return this.errors.push(Et.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===34)return this.errors.push(Et.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;c.push(this._advance())}}_getText(a){let c=a.parts[0];if(c.length>0&&c[0]==`
`){let u=this._getClosestParentElement();u!=null&&u.children.length==0&&this.getTagDefinition(u.name).ignoreFirstLf&&(c=c.substring(1))}return c}_consumeText(a){let c=[a],u=a.sourceSpan,p=a.parts[0];if(p.length>0&&p[0]===`
`){let f=this._getContainer();f!=null&&f.children.length===0&&this.getTagDefinition(f.name).ignoreFirstLf&&(p=p.substring(1),c[0]={type:a.type,sourceSpan:a.sourceSpan,parts:[p]})}for(;this._peek.type===8||this._peek.type===5||this._peek.type===9;)a=this._advance(),c.push(a),a.type===8?p+=a.parts.join("").replace(/&([^;]+);/g,cp):a.type===9?p+=a.parts[0]:p+=a.parts.join("");if(p.length>0){let f=a.sourceSpan;this._addToParent(new Av(p,new me(u.start,f.end,u.fullStart,u.details),c))}}_closeVoidElement(){let a=this._getContainer();a instanceof Jn&&this.getTagDefinition(a.name).isVoid&&this._containerStack.pop()}_consumeStartTag(a){let[c,u]=a.parts,p=[];for(;this._peek.type===14;)p.push(this._consumeAttr(this._advance()));let f=this._getElementFullName(c,u,this._getClosestParentElement()),v=!1;if(this._peek.type===2){this._advance(),v=!0;let be=this.getTagDefinition(f);this.canSelfClose||be.canSelfClose||Aa(f)!==null||be.isVoid||this.errors.push(Et.create(f,a.sourceSpan,`Only void, custom and foreign elements can be self closed "${a.parts[1]}"`))}else this._peek.type===1&&(this._advance(),v=!1);let C=this._peek.sourceSpan.fullStart,L=new me(a.sourceSpan.start,C,a.sourceSpan.fullStart),K=new me(a.sourceSpan.start,C,a.sourceSpan.fullStart),z=new me(a.sourceSpan.start.moveBy(1),a.sourceSpan.end),we=new Jn(f,p,[],L,K,void 0,z),he=this._getContainer();this._pushContainer(we,he instanceof Jn&&this.getTagDefinition(he.name).isClosedByChild(we.name)),v?this._popContainer(f,Jn,L):a.type===4&&(this._popContainer(f,Jn,null),this.errors.push(Et.create(f,L,`Opening tag "${f}" not terminated.`)))}_pushContainer(a,c){c&&this._containerStack.pop(),this._addToParent(a),this._containerStack.push(a)}_consumeEndTag(a){let c=this.allowHtmComponentClosingTags&&a.parts.length===0?null:this._getElementFullName(a.parts[0],a.parts[1],this._getClosestParentElement());if(c&&this.getTagDefinition(c).isVoid)this.errors.push(Et.create(c,a.sourceSpan,`Void elements do not have end tags "${a.parts[1]}"`));else if(!this._popContainer(c,Jn,a.sourceSpan)){let u=`Unexpected closing tag "${c}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;this.errors.push(Et.create(c,a.sourceSpan,u))}}_popContainer(a,c,u){let p=!1;for(let f=this._containerStack.length-1;f>=0;f--){let v=this._containerStack[f];if(Aa(v.name)?v.name===a:(a==null||v.name.toLowerCase()===a.toLowerCase())&&v instanceof c)return v.endSourceSpan=u,v.sourceSpan.end=u!==null?u.end:v.sourceSpan.end,this._containerStack.splice(f,this._containerStack.length-f),!p;(v instanceof sr||v instanceof Jn&&!this.getTagDefinition(v.name).closedByParent)&&(p=!0)}return!1}_consumeAttr(a){let c=Ia(a.parts[0],a.parts[1]),u=a.sourceSpan.end,p;this._peek.type===15&&(p=this._advance());let f="",v=[],C,L;if(this._peek.type===16)for(C=this._peek.sourceSpan,L=this._peek.sourceSpan.end;this._peek.type===16||this._peek.type===17||this._peek.type===9;){let z=this._advance();v.push(z),z.type===17?f+=z.parts.join("").replace(/&([^;]+);/g,cp):z.type===9?f+=z.parts[0]:f+=z.parts.join(""),L=u=z.sourceSpan.end}this._peek.type===15&&(L=u=this._advance().sourceSpan.end);let K=C&&L&&new me(p?.sourceSpan.start??C.start,L,p?.sourceSpan.fullStart??C.fullStart);return new Mv(c,f,new me(a.sourceSpan.start,u,a.sourceSpan.fullStart),a.sourceSpan,K,v.length>0?v:void 0,void 0)}_consumeBlockOpen(a){let c=[];for(;this._peek.type===28;){let C=this._advance();c.push(new Xd(C.parts[0],C.sourceSpan))}this._peek.type===26&&this._advance();let u=this._peek.sourceSpan.fullStart,p=new me(a.sourceSpan.start,u,a.sourceSpan.fullStart),f=new me(a.sourceSpan.start,u,a.sourceSpan.fullStart),v=new sr(a.parts[0],c,[],p,a.sourceSpan,f);this._pushContainer(v,!1)}_consumeBlockClose(a){this._popContainer(null,sr,a.sourceSpan)||this.errors.push(Et.create(null,a.sourceSpan,'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'))}_consumeIncompleteBlock(a){let c=[];for(;this._peek.type===28;){let C=this._advance();c.push(new Xd(C.parts[0],C.sourceSpan))}let u=this._peek.sourceSpan.fullStart,p=new me(a.sourceSpan.start,u,a.sourceSpan.fullStart),f=new me(a.sourceSpan.start,u,a.sourceSpan.fullStart),v=new sr(a.parts[0],c,[],p,a.sourceSpan,f);this._pushContainer(v,!1),this._popContainer(null,sr,null),this.errors.push(Et.create(a.parts[0],p,`Incomplete block "${a.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`))}_consumeLet(a){let c=a.parts[0],u,p;if(this._peek.type!==31){this.errors.push(Et.create(a.parts[0],a.sourceSpan,`Invalid @let declaration "${c}". Declaration must have a value.`));return}else u=this._advance();if(this._peek.type!==32){this.errors.push(Et.create(a.parts[0],a.sourceSpan,`Unterminated @let declaration "${c}". Declaration must be terminated with a semicolon.`));return}else p=this._advance();let f=p.sourceSpan.fullStart,v=new me(a.sourceSpan.start,f,a.sourceSpan.fullStart),C=a.sourceSpan.toString().lastIndexOf(c),L=a.sourceSpan.start.moveBy(C),K=new me(L,a.sourceSpan.end),z=new Jd(c,u.parts[0],v,K,u.sourceSpan);this._addToParent(z)}_consumeIncompleteLet(a){let c=a.parts[0]??"",u=c?` "${c}"`:"";if(c.length>0){let p=a.sourceSpan.toString().lastIndexOf(c),f=a.sourceSpan.start.moveBy(p),v=new me(f,a.sourceSpan.end),C=new me(a.sourceSpan.start,a.sourceSpan.start.moveBy(0)),L=new Jd(c,"",a.sourceSpan,v,C);this._addToParent(L)}this.errors.push(Et.create(a.parts[0],a.sourceSpan,`Incomplete @let declaration${u}. @let declarations must be written as \`@let <name> = <value>;\``))}_getContainer(){return this._containerStack.length>0?this._containerStack[this._containerStack.length-1]:null}_getClosestParentElement(){for(let a=this._containerStack.length-1;a>-1;a--)if(this._containerStack[a]instanceof Jn)return this._containerStack[a];return null}_addToParent(a){let c=this._getContainer();c===null?this.rootNodes.push(a):c.children.push(a)}_getElementFullName(a,c,u){if(a===""&&(a=this.getTagDefinition(c).implicitNamespacePrefix||"",a===""&&u!=null)){let p=Ta(u.name)[1];this.getTagDefinition(p).preventNamespaceInheritance||(a=Aa(u.name))}return Ia(a,c)}};function lp(o,a){return o.length>0&&o[o.length-1]===a}function cp(o,a){return Ma[a]!==void 0?Ma[a]||o:/^#x[a-f0-9]+$/i.test(a)?String.fromCodePoint(parseInt(a.slice(2),16)):/^#\d+$/.test(a)?String.fromCodePoint(parseInt(a.slice(1),10)):o}var ty=class extends Jv{constructor(){super(Nl)}parse(o,a,c,u=!1,p){return super.parse(o,a,c,u,p)}},Ul=null,ny=()=>(Ul||(Ul=new ty),Ul);function up(o,a={}){let{canSelfClose:c=!1,allowHtmComponentClosingTags:u=!1,isTagNameCaseSensitive:p=!1,getTagContentType:f,tokenizeAngularBlocks:v=!1,tokenizeAngularLetDeclaration:C=!1}=a;return ny().parse(o,"angular-html-parser",{tokenizeExpansionForms:v,interpolationConfig:void 0,canSelfClose:c,allowHtmComponentClosingTags:u,tokenizeBlocks:v,tokenizeLet:C},p,f)}function iy(o,a){let c=new SyntaxError(o+" ("+a.loc.start.line+":"+a.loc.start.column+")");return Object.assign(c,a)}var ry=iy,lo=3;function oy(o){let a=o.slice(0,lo);if(a!=="---"&&a!=="+++")return;let c=o.indexOf(`
`,lo);if(c===-1)return;let u=o.slice(lo,c).trim(),p=o.indexOf(`
${a}`,c),f=u;if(f||(f=a==="+++"?"toml":"yaml"),p===-1&&a==="---"&&f==="yaml"&&(p=o.indexOf(`
...`,c)),p===-1)return;let v=p+1+lo,C=o.charAt(v+1);if(!/\s?/u.test(C))return;let L=o.slice(0,v);return{type:"front-matter",language:f,explicitLanguage:u,value:o.slice(c+1,p),startDelimiter:a,endDelimiter:L.slice(-lo),raw:L}}function ay(o){let a=oy(o);if(!a)return{content:o};let{raw:c}=a;return{frontMatter:a,content:$(!1,c,/[^\n]/gu," ")+o.slice(c.length)}}var sy=ay,La={attrs:!0,children:!0,cases:!0,expression:!0},dp=new Set(["parent"]),cr,jl,Hl,ly=class aa{constructor(a={}){E(this,cr),g(this,"type"),g(this,"parent");for(let c of new Set([...dp,...Object.keys(a)]))this.setProperty(c,a[c])}setProperty(a,c){if(this[a]!==c){if(a in La&&(c=c.map(u=>this.createChild(u))),!dp.has(a)){this[a]=c;return}Object.defineProperty(this,a,{value:c,enumerable:!1,configurable:!0})}}map(a){let c;for(let u in La){let p=this[u];if(p){let f=uy(p,v=>v.map(a));c!==p&&(c||(c=new aa({parent:this.parent})),c.setProperty(u,f))}}if(c)for(let u in this)u in La||(c[u]=this[u]);return a(c||this)}walk(a){for(let c in La){let u=this[c];if(u)for(let p=0;p<u.length;p++)u[p].walk(a)}a(this)}createChild(a){let c=a instanceof aa?a.clone():new aa(a);return c.setProperty("parent",this),c}insertChildBefore(a,c){let u=this.$children;u.splice(u.indexOf(a),0,this.createChild(c))}removeChild(a){let c=this.$children;c.splice(c.indexOf(a),1)}replaceChild(a,c){let u=this.$children;u[u.indexOf(a)]=this.createChild(c)}clone(){return new aa(this)}get $children(){return this[S(this,cr,jl)]}set $children(a){this[S(this,cr,jl)]=a}get firstChild(){var a;return(a=this.$children)==null?void 0:a[0]}get lastChild(){return wn(!0,this.$children,-1)}get prev(){let a=S(this,cr,Hl);return a[a.indexOf(this)-1]}get next(){let a=S(this,cr,Hl);return a[a.indexOf(this)+1]}get rawName(){return this.hasExplicitNamespace?this.fullName:this.name}get fullName(){return this.namespace?this.namespace+":"+this.name:this.name}get attrMap(){return Object.fromEntries(this.attrs.map(a=>[a.fullName,a.value]))}};cr=new WeakSet,jl=function(){return this.type==="angularIcuCase"?"expression":this.type==="angularIcuExpression"?"cases":"children"},Hl=function(){var o;return((o=this.parent)==null?void 0:o.$children)??[]};var cy=ly;function uy(o,a){let c=o.map(a);return c.some((u,p)=>u!==o[p])?c:o}var dy=[{regex:/^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su,parse:hy},{regex:/^\[if([^\]]*)\]><!$/u,parse:fy},{regex:/^<!\s*\[endif\]$/u,parse:my}];function py(o,a){if(o.value)for(let{regex:c,parse:u}of dy){let p=o.value.match(c);if(p)return u(o,a,p)}return null}function hy(o,a,c){let[,u,p,f]=c,v=4+u.length,C=o.sourceSpan.start.moveBy(v),L=C.moveBy(f.length),[K,z]=(()=>{try{return[!0,a(f,C).children]}catch{return[!1,[{type:"text",value:f,sourceSpan:new me(C,L)}]]}})();return{type:"ieConditionalComment",complete:K,children:z,condition:$(!1,p.trim(),/\s+/gu," "),sourceSpan:o.sourceSpan,startSourceSpan:new me(o.sourceSpan.start,C),endSourceSpan:new me(L,o.sourceSpan.end)}}function fy(o,a,c){let[,u]=c;return{type:"ieConditionalStartComment",condition:$(!1,u.trim(),/\s+/gu," "),sourceSpan:o.sourceSpan}}function my(o){return{type:"ieConditionalEndComment",sourceSpan:o.sourceSpan}}var zl=new Map([["*",new Set(["accesskey","autocapitalize","autofocus","class","contenteditable","dir","draggable","enterkeyhint","hidden","id","inert","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","popover","slot","spellcheck","style","tabindex","title","translate","writingsuggestions"])],["a",new Set(["charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","target","type"])],["applet",new Set(["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"])],["area",new Set(["alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","target","type"])],["audio",new Set(["autoplay","controls","crossorigin","loop","muted","preload","src"])],["base",new Set(["href","target"])],["basefont",new Set(["color","face","size"])],["blockquote",new Set(["cite"])],["body",new Set(["alink","background","bgcolor","link","text","vlink"])],["br",new Set(["clear"])],["button",new Set(["disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","popovertarget","popovertargetaction","type","value"])],["canvas",new Set(["height","width"])],["caption",new Set(["align"])],["col",new Set(["align","char","charoff","span","valign","width"])],["colgroup",new Set(["align","char","charoff","span","valign","width"])],["data",new Set(["value"])],["del",new Set(["cite","datetime"])],["details",new Set(["name","open"])],["dialog",new Set(["open"])],["dir",new Set(["compact"])],["div",new Set(["align"])],["dl",new Set(["compact"])],["embed",new Set(["height","src","type","width"])],["fieldset",new Set(["disabled","form","name"])],["font",new Set(["color","face","size"])],["form",new Set(["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"])],["frame",new Set(["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"])],["frameset",new Set(["cols","rows"])],["h1",new Set(["align"])],["h2",new Set(["align"])],["h3",new Set(["align"])],["h4",new Set(["align"])],["h5",new Set(["align"])],["h6",new Set(["align"])],["head",new Set(["profile"])],["hr",new Set(["align","noshade","size","width"])],["html",new Set(["manifest","version"])],["iframe",new Set(["align","allow","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","loading","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"])],["img",new Set(["align","alt","border","crossorigin","decoding","fetchpriority","height","hspace","ismap","loading","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"])],["input",new Set(["accept","align","alt","autocomplete","checked","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","popovertarget","popovertargetaction","readonly","required","size","src","step","type","usemap","value","width"])],["ins",new Set(["cite","datetime"])],["isindex",new Set(["prompt"])],["label",new Set(["for","form"])],["legend",new Set(["align"])],["li",new Set(["type","value"])],["link",new Set(["as","blocking","charset","color","crossorigin","disabled","fetchpriority","href","hreflang","imagesizes","imagesrcset","integrity","media","referrerpolicy","rel","rev","sizes","target","type"])],["map",new Set(["name"])],["menu",new Set(["compact"])],["meta",new Set(["charset","content","http-equiv","media","name","scheme"])],["meter",new Set(["high","low","max","min","optimum","value"])],["object",new Set(["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","type","typemustmatch","usemap","vspace","width"])],["ol",new Set(["compact","reversed","start","type"])],["optgroup",new Set(["disabled","label"])],["option",new Set(["disabled","label","selected","value"])],["output",new Set(["for","form","name"])],["p",new Set(["align"])],["param",new Set(["name","type","value","valuetype"])],["pre",new Set(["width"])],["progress",new Set(["max","value"])],["q",new Set(["cite"])],["script",new Set(["async","blocking","charset","crossorigin","defer","fetchpriority","integrity","language","nomodule","referrerpolicy","src","type"])],["select",new Set(["autocomplete","disabled","form","multiple","name","required","size"])],["slot",new Set(["name"])],["source",new Set(["height","media","sizes","src","srcset","type","width"])],["style",new Set(["blocking","media","type"])],["table",new Set(["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"])],["tbody",new Set(["align","char","charoff","valign"])],["td",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["template",new Set(["shadowrootclonable","shadowrootdelegatesfocus","shadowrootmode"])],["textarea",new Set(["autocomplete","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","wrap"])],["tfoot",new Set(["align","char","charoff","valign"])],["th",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["thead",new Set(["align","char","charoff","valign"])],["time",new Set(["datetime"])],["tr",new Set(["align","bgcolor","char","charoff","valign"])],["track",new Set(["default","kind","label","src","srclang"])],["ul",new Set(["compact","type"])],["video",new Set(["autoplay","controls","crossorigin","height","loop","muted","playsinline","poster","preload","src","width"])]]),gy=new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]);function by(o){if(o.type==="block"){if(o.name=$(!1,o.name.toLowerCase(),/\s+/gu," ").trim(),o.type="angularControlFlowBlock",!_l(o.parameters)){delete o.parameters;return}for(let a of o.parameters)a.type="angularControlFlowBlockParameter";o.parameters={type:"angularControlFlowBlockParameters",children:o.parameters,sourceSpan:new me(o.parameters[0].sourceSpan.start,wn(!1,o.parameters,-1).sourceSpan.end)}}}function vy(o){o.type==="letDeclaration"&&(o.type="angularLetDeclaration",o.id=o.name,o.init={type:"angularLetDeclarationInitializer",sourceSpan:new me(o.valueSpan.start,o.valueSpan.end),value:o.value},delete o.name,delete o.value)}function yy(o){(o.type==="plural"||o.type==="select")&&(o.clause=o.type,o.type="angularIcuExpression"),o.type==="expansionCase"&&(o.type="angularIcuCase")}function pp(o,a,c){let{name:u,canSelfClose:p=!0,normalizeTagName:f=!1,normalizeAttributeName:v=!1,allowHtmComponentClosingTags:C=!1,isTagNameCaseSensitive:L=!1,shouldParseAsRawText:K}=a,{rootNodes:z,errors:we}=up(o,{canSelfClose:p,allowHtmComponentClosingTags:C,isTagNameCaseSensitive:L,getTagContentType:K?(...G)=>K(...G)?rn.RAW_TEXT:void 0:void 0,tokenizeAngularBlocks:u==="angular"?!0:void 0,tokenizeAngularLetDeclaration:u==="angular"?!0:void 0});if(u==="vue"){if(z.some(rt=>rt.type==="docType"&&rt.value==="html"||rt.type==="element"&&rt.name.toLowerCase()==="html"))return pp(o,ql,c);let G,ve=()=>G??(G=up(o,{canSelfClose:p,allowHtmComponentClosingTags:C,isTagNameCaseSensitive:L})),lt=rt=>ve().rootNodes.find(({startSourceSpan:Tt})=>Tt&&Tt.start.offset===rt.startSourceSpan.start.offset)??rt;for(let[rt,Tt]of z.entries()){let{endSourceSpan:ur,startSourceSpan:Ay}=Tt;if(ur===null)we=ve().errors,z[rt]=lt(Tt);else if(_y(Tt,c)){let mp=ve().errors.find(gp=>gp.span.start.offset>Ay.start.offset&&gp.span.start.offset<ur.end.offset);mp&&hp(mp),z[rt]=lt(Tt)}}}we.length>0&&hp(we[0]);let he=G=>{let ve=G.name.startsWith(":")?G.name.slice(1).split(":")[0]:null,lt=G.nameSpan.toString(),rt=ve!==null&&lt.startsWith(`${ve}:`),Tt=rt?lt.slice(ve.length+1):lt;G.name=Tt,G.namespace=ve,G.hasExplicitNamespace=rt},be=G=>{switch(G.type){case"element":he(G);for(let ve of G.attrs)he(ve),ve.valueSpan?(ve.value=ve.valueSpan.toString(),/["']/u.test(ve.value[0])&&(ve.value=ve.value.slice(1,-1))):ve.value=null;break;case"comment":G.value=G.sourceSpan.toString().slice(4,-3);break;case"text":G.value=G.sourceSpan.toString();break}},Pe=(G,ve)=>{let lt=G.toLowerCase();return ve(lt)?lt:G},st=G=>{if(G.type==="element"&&(f&&(!G.namespace||G.namespace===G.tagDefinition.implicitNamespacePrefix||Yr(G))&&(G.name=Pe(G.name,ve=>gy.has(ve))),v))for(let ve of G.attrs)ve.namespace||(ve.name=Pe(ve.name,lt=>zl.has(G.name)&&(zl.get("*").has(lt)||zl.get(G.name).has(lt))))},gt=G=>{G.sourceSpan&&G.endSourceSpan&&(G.sourceSpan=new me(G.sourceSpan.start,G.endSourceSpan.end))},_t=G=>{if(G.type==="element"){let ve=Nl(L?G.name:G.name.toLowerCase());!G.namespace||G.namespace===ve.implicitNamespacePrefix||Yr(G)?G.tagDefinition=ve:G.tagDefinition=Nl("")}};return ep(new class extends Ov{visitExpansionCase(G,ve){u==="angular"&&this.visitChildren(ve,lt=>{lt(G.expression)})}visit(G){be(G),_t(G),st(G),gt(G)}},z),z}function _y(o,a){var c;if(o.type!=="element"||o.name!=="template")return!1;let u=(c=o.attrs.find(p=>p.name==="lang"))==null?void 0:c.value;return!u||ga(a,{language:u})==="html"}function hp(o){let{msg:a,span:{start:c,end:u}}=o;throw ry(a,{loc:{start:{line:c.line+1,column:c.col+1},end:{line:u.line+1,column:u.col+1}},cause:o})}function fp(o,a,c={},u=!0){let{frontMatter:p,content:f}=u?sy(o):{frontMatter:null,content:o},v=new Pd(o,c.filepath),C=new Pl(v,0,0,0),L=C.moveBy(o.length),K={type:"root",sourceSpan:new me(C,L),children:pp(f,a,c)};if(p){let he=new Pl(v,0,0,0),be=he.moveBy(p.raw.length);p.sourceSpan=new me(he,be),K.children.unshift(p)}let z=new cy(K),we=(he,be)=>{let{offset:Pe}=be,st=$(!1,o.slice(0,Pe),/[^\n\r]/gu," "),gt=fp(st+he,a,c,!1);gt.sourceSpan=new me(be,wn(!1,gt.children,-1).sourceSpan.end);let _t=gt.children[0];return _t.length===Pe?gt.children.shift():(_t.sourceSpan=new me(_t.sourceSpan.start.moveBy(Pe),_t.sourceSpan.end),_t.value=_t.value.slice(Pe)),gt};return z.walk(he=>{if(he.type==="comment"){let be=py(he,we);be&&he.parent.replaceChild(he,be)}by(he),vy(he),yy(he)}),z}function co(o){return{parse:(a,c)=>fp(a,o,c),hasPragma:Vb,hasIgnorePragma:Ub,astFormat:"html",locStart:Xr,locEnd:_a}}var ql={name:"html",normalizeTagName:!0,normalizeAttributeName:!0,allowHtmComponentClosingTags:!0},Cy=co(ql),wy=new Set(["mj-style","mj-raw"]),Sy=co(Se(I({},ql),{name:"mjml",shouldParseAsRawText:o=>wy.has(o)})),Dy=co({name:"angular"}),xy=co({name:"vue",isTagNameCaseSensitive:!0,shouldParseAsRawText(o,a,c,u){return o.toLowerCase()!=="html"&&!c&&(o!=="template"||u.some(({name:p,value:f})=>p==="lang"&&f!=="html"&&f!==""&&f!==void 0))}}),Ey=co({name:"lwc",canSelfClose:!1}),Ty={html:mv};return h(q)})});var Fe=new se("");var ih=null;function Jt(){return ih}function mc(t){ih??=t}var bo=class{},vo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>w(rh),providedIn:"platform"})}return t})(),gc=new se(""),rh=(()=>{class t extends vo{_location;_history;_doc=w(Fe);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Jt().getBaseHref(this._doc)}onPopState(e){let n=Jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Ha(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function th(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function dn(t){return t&&t[0]!=="?"?`?${t}`:t}var pn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>w(qa),providedIn:"root"})}return t})(),za=new se(""),qa=(()=>{class t extends pn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??w(Fe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ha(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+dn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,s){let l=this.prepareExternalUrl(r+dn(s));this._platformLocation.pushState(e,n,l)}replaceState(e,n,r,s){let l=this.prepareExternalUrl(r+dn(s));this._platformLocation.replaceState(e,n,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Q(vo),Q(za,8))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ai=(()=>{class t{_subject=new nt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Ry(th(nh(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+dn(n))}normalize(e){return t.stripTrailingSlash(My(this._basePath,nh(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+dn(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+dn(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=dn;static joinWithSlash=Ha;static stripTrailingSlash=th;static \u0275fac=function(n){return new(n||t)(Q(pn))};static \u0275prov=k({token:t,factory:()=>Fy(),providedIn:"root"})}return t})();function Fy(){return new ai(Q(pn))}function My(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function nh(t){return t.replace(/\/index.html$/,"")}function Ry(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Cc=(()=>{class t extends pn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Ha(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,s){let l=this.prepareExternalUrl(r+dn(s))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,l)}replaceState(e,n,r,s){let l=this.prepareExternalUrl(r+dn(s))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Q(vo),Q(za,8))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var bc=/\s+/,oh=[],We=(()=>{class t{_ngEl;_renderer;initialClasses=oh;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(bc):oh}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(bc):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(bc).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(B(At),B(Zt))};static \u0275dir=ce({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Wa=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},si=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,s,l)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new Wa(r.item,this._ngForOf,-1,-1),l===null?void 0:l);else if(l==null)n.remove(s===null?void 0:s);else if(s!==null){let d=n.get(s);n.move(d,l),ah(d,r)}});for(let r=0,s=n.length;r<s;r++){let d=n.get(r).context;d.index=r,d.count=s,d.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let s=n.get(r.currentIndex);ah(s,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(B(Un),B(ri),B(Zp))};static \u0275dir=ce({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function ah(t,i){t.context.$implicit=i.item}var Ue=(()=>{class t{_viewContainer;_context=new Ga;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){sh(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){sh(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(B(Un),B(ri))};static \u0275dir=ce({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Ga=class{$implicit=null;ngIf=null};function sh(t,i){if(t&&!t.createEmbeddedView)throw new fe(2020,!1)}var vc=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,e){this._viewContainerRef=i,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},lh=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),Ly=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,r){this.ngSwitch=r,r._addCase(),this._view=new vc(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)(B(Un),B(ri),B(lh,9))};static \u0275dir=ce({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})();var vt=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,s]=e.split("."),l=r.indexOf("-")===-1?void 0:$i.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,s?`${n}${s}`:n,l):this._renderer.removeStyle(this._ngEl.nativeElement,r,l)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(B(At),B(Xp),B(Zt))};static \u0275dir=ce({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Je=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(B(Un))};static \u0275dir=ce({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ot]})}return t})();function Oy(t,i){return new fe(2100,!1)}var yc=class{createSubscription(i,e){return Nt(()=>i.subscribe({next:e,error:n=>{throw n}}))}dispose(i){Nt(()=>i.unsubscribe())}},_c=class{createSubscription(i,e){return i.then(n=>e?.(n),n=>{throw n}),{unsubscribe:()=>{e=null}}}dispose(i){i.unsubscribe()}},Py=new _c,Ny=new yc,By=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(fr(e))return Py;if(Hp(e))return Ny;throw Oy(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(B(Pt,16))};static \u0275pipe=Va({name:"async",type:t,pure:!1})}return t})();var le=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function yo(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(s)}return null}var Ka="browser",ch="server";function En(t){return t===Ka}function vr(t){return t===ch}var Vi=class{};var dh=(()=>{class t{static \u0275prov=k({token:t,providedIn:"root",factory:()=>new wc(w(Fe),window)})}return t})(),wc=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=Vy(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}};function Vy(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let s=r.shadowRoot;if(s){let l=s.getElementById(i)||s.querySelector(`[name="${i}"]`);if(l)return l}r=n.nextNode()}}return null}var Za=new se(""),Ec=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,s){return this._findPluginFor(n).addEventListener(e,n,r,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(s=>s.supports(e)),!n)throw new fe(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(Q(Za),Q(ft))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),_o=class{_doc;constructor(i){this._doc=i}manager},Qa="ng-app-id";function ph(t){for(let i of t)i.remove()}function hh(t,i){let e=i.createElement("style");return e.textContent=t,e}function Uy(t,i,e,n){let r=t.head?.querySelectorAll(`style[${Qa}="${i}"],link[${Qa}="${i}"]`);if(r)for(let s of r)s.removeAttribute(Qa),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function Dc(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Tc=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,s={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=vr(s),Uy(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,hh);n?.forEach(r=>this.addUsage(r,this.external,Dc))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let s=n.get(e);s?s.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(l=>this.addElement(l,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(ph(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ph(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,hh(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,Dc(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Qa,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(Q(Fe),Q(tc),Q(nc,8),Q(Yt))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Sc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ac=/%COMP%/g;var mh="%COMP%",jy=`_nghost-${mh}`,Hy=`_ngcontent-${mh}`,zy=!0,qy=new se("",{providedIn:"root",factory:()=>zy});function Wy(t){return Hy.replace(Ac,t)}function Gy(t){return jy.replace(Ac,t)}function gh(t,i){return i.map(e=>e.replace(Ac,t))}var Ic=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,s,l,d,h,g=null,y=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=l,this.platformId=d,this.ngZone=h,this.nonce=g,this.tracingService=y,this.platformIsServer=vr(d),this.defaultRenderer=new Co(e,l,h,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===fo.ShadowDom&&(n=Se(I({},n),{encapsulation:fo.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof Ya?r.applyToHost(e):r instanceof wo&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let l=this.doc,d=this.ngZone,h=this.eventManager,g=this.sharedStylesHost,y=this.removeStylesOnCompDestroy,S=this.platformIsServer,E=this.tracingService;switch(n.encapsulation){case fo.Emulated:s=new Ya(h,g,n,this.appId,y,l,d,S,E);break;case fo.ShadowDom:return new xc(h,g,e,n,l,d,this.nonce,S,E);default:s=new wo(h,g,n,y,l,d,S,E);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(Q(Ec),Q(Tc),Q(tc),Q(qy),Q(Fe),Q(Yt),Q(ft),Q(nc),Q(Ip,8))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Co=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,s){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Sc[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(fh(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(fh(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new fe(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let s=Sc[r];s?i.setAttributeNS(s,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Sc[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&($i.DashCase|$i.Important)?i.style.setProperty(e,n,r&$i.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&$i.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Jt().getGlobalEventTarget(this.doc,i),!i))throw new fe(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(i,e,s)),this.eventManager.addEventListener(i,e,s,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function fh(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var xc=class extends Co{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,r,s,l,d,h,g){super(i,s,l,h,g),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let y=r.styles;y=gh(r.id,y);for(let E of y){let R=document.createElement("style");d&&R.setAttribute("nonce",d),R.textContent=E,this.shadowRoot.appendChild(R)}let S=r.getExternalStyles?.();if(S)for(let E of S){let R=Dc(E,s);d&&R.setAttribute("nonce",d),this.shadowRoot.appendChild(R)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},wo=class extends Co{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,s,l,d,h,g){super(i,s,l,d,h),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let y=n.styles;this.styles=g?gh(g,y):y,this.styleUrls=n.getExternalStyles?.(g)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ya=class extends wo{contentAttr;hostAttr;constructor(i,e,n,r,s,l,d,h,g){let y=r+"-"+n.id;super(i,e,n,s,l,d,h,g,y),this.contentAttr=Wy(y),this.hostAttr=Gy(y)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Xa=class t extends bo{supportsDOMEvents=!0;static makeCurrent(){mc(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Qy();return e==null?null:Yy(e)}resetBaseElement(){So=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return yo(document.cookie,i)}},So=null;function Qy(){return So=So||document.head.querySelector("base"),So?So.getAttribute("href"):null}function Yy(t){return new URL(t,document.baseURI).pathname}var Zy=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),vh=(()=>{class t extends _o{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,s){return e.addEventListener(n,r,s),()=>this.removeEventListener(e,n,r,s)}removeEventListener(e,n,r,s){return e.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),bh=["alt","control","meta","shift"],Xy={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Jy={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},yh=(()=>{class t extends _o{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,s){let l=t.parseEventName(n),d=t.eventCallback(l.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Jt().onAndCancel(e,l.domEventName,d,s))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=t._normalizeKey(n.pop()),l="",d=n.indexOf("code");if(d>-1&&(n.splice(d,1),l="code."),bh.forEach(g=>{let y=n.indexOf(g);y>-1&&(n.splice(y,1),l+=g+".")}),l+=s,n.length!=0||s.length===0)return null;let h={};return h.domEventName=r,h.fullKey=l,h}static matchEventFullKeyCode(e,n){let r=Xy[e.key]||e.key,s="";return n.indexOf("code.")>-1&&(r=e.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),bh.forEach(l=>{if(l!==r){let d=Jy[l];d(e)&&(s+=l+".")}}),s+=r,s===n)}static eventCallback(e,n,r){return s=>{t.matchEventFullKeyCode(s,e)&&r.runGuarded(()=>n(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();function e1(t,i){return Jp(I({rootComponent:t},t1(i)))}function t1(t){return{appProviders:[...a1,...t?.providers??[]],platformProviders:o1}}function n1(){Xa.makeCurrent()}function i1(){return new ec}function r1(){return Tp(document),document}var o1=[{provide:Yt,useValue:Ka},{provide:Ap,useValue:n1,multi:!0},{provide:Fe,useFactory:r1}];var a1=[{provide:Ep,useValue:"root"},{provide:ec,useFactory:i1},{provide:Za,useClass:vh,multi:!0,deps:[Fe]},{provide:Za,useClass:yh,multi:!0,deps:[Fe]},Ic,Tc,Ec,{provide:Vp,useExisting:Ic},{provide:Vi,useClass:Zy},[]];var _r=class{},Do=class{},li=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),s=e.slice(n+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let s=i.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let l=this.headers.get(e);if(!l)return;l=l.filter(d=>s.indexOf(d)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var es=class{encodeKey(i){return _h(i)}encodeValue(i){return _h(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function s1(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[l,d]=s==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,s)),i.decodeValue(r.slice(s+1))],h=e.get(l)||[];h.push(d),e.set(l,h)}),e}var l1=/%(\d[a-f0-9])/gi,c1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function _h(t){return encodeURIComponent(t).replace(l1,(i,e)=>c1[e]??i)}function Ja(t){return`${t}`}var jn=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new es,i.fromString){if(i.fromObject)throw new fe(2805,!1);this.map=s1(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(Ja):[Ja(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(s=>{e.push({param:n,value:s,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Ja(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(Ja(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var ts=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function u1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ch(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function wh(t){return typeof Blob<"u"&&t instanceof Blob}function Sh(t){return typeof FormData<"u"&&t instanceof FormData}function d1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Dh="Content-Type",xh="Accept",Eh="X-Request-URL",Th="text/plain",Ah="application/json",p1=`${Ah}, ${Th}, */*`,yr=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let s;if(u1(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new li,this.context??=new ts,!this.params)this.params=new jn,this.urlWithParams=e;else{let l=this.params.toString();if(l.length===0)this.urlWithParams=e;else{let d=e.indexOf("?"),h=d===-1?"?":d<e.length-1?"&":"";this.urlWithParams=e+h+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ch(this.body)||wh(this.body)||Sh(this.body)||d1(this.body)?this.body:this.body instanceof jn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Sh(this.body)?null:wh(this.body)?this.body.type||null:Ch(this.body)?null:typeof this.body=="string"?Th:this.body instanceof jn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ah:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,s=i.transferCache??this.transferCache,l=i.body!==void 0?i.body:this.body,d=i.withCredentials??this.withCredentials,h=i.reportProgress??this.reportProgress,g=i.headers||this.headers,y=i.params||this.params,S=i.context??this.context;return i.setHeaders!==void 0&&(g=Object.keys(i.setHeaders).reduce((E,R)=>E.set(R,i.setHeaders[R]),g)),i.setParams&&(y=Object.keys(i.setParams).reduce((E,R)=>E.set(R,i.setParams[R]),y)),new t(e,n,l,{params:y,headers:g,context:S,reportProgress:h,responseType:r,withCredentials:d,transferCache:s})}},hn=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(hn||{}),Cr=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new li,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},ns=class t extends Cr{constructor(i={}){super(i)}type=hn.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},xo=class t extends Cr{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=hn.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Eo=class extends Cr{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},h1=200,f1=204;function kc(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var rs=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let s;if(e instanceof yr)s=e;else{let h;r.headers instanceof li?h=r.headers:h=new li(r.headers);let g;r.params&&(r.params instanceof jn?g=r.params:g=new jn({fromObject:r.params})),s=new yr(e,n,r.body!==void 0?r.body:null,{headers:h,context:r.context,params:g,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let l=Z(s).pipe(on(h=>this.handler.handle(h)));if(e instanceof yr||r.observe==="events")return l;let d=l.pipe(Sn(h=>h instanceof xo));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return d.pipe(ye(h=>{if(h.body!==null&&!(h.body instanceof ArrayBuffer))throw new fe(2806,!1);return h.body}));case"blob":return d.pipe(ye(h=>{if(h.body!==null&&!(h.body instanceof Blob))throw new fe(2807,!1);return h.body}));case"text":return d.pipe(ye(h=>{if(h.body!==null&&typeof h.body!="string")throw new fe(2808,!1);return h.body}));case"json":default:return d.pipe(ye(h=>h.body))}case"response":return d;default:throw new fe(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new jn().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,kc(r,n))}post(e,n,r={}){return this.request("POST",e,kc(r,n))}put(e,n,r={}){return this.request("PUT",e,kc(r,n))}static \u0275fac=function(n){return new(n||t)(Q(_r))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var m1=new se("");function g1(t,i){return i(t)}function b1(t,i,e){return(n,r)=>Qt(e,()=>i(n,s=>t(s,r)))}var Ih=new se(""),kh=new se(""),Fh=new se("",{providedIn:"root",factory:()=>!0});var is=(()=>{class t extends _r{backend;injector;chain=null;pendingTasks=w(Na);contributeToStability=w(Fh);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Ih),...this.injector.get(kh,[])]));this.chain=n.reduceRight((r,s)=>b1(r,s,this.injector),g1)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(pr(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(Q(Do),Q(ii))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var v1=/^\)\]\}',?\n/,y1=RegExp(`^${Eh}:`,"m");function _1(t){return"responseURL"in t&&t.responseURL?t.responseURL:y1.test(t.getAllResponseHeaders())?t.getResponseHeader(Eh):null}var Fc=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new fe(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?ct(n.\u0275loadImpl()):Z(null)).pipe(Ct(()=>new yp(s=>{let l=n.build();if(l.open(e.method,e.urlWithParams),e.withCredentials&&(l.withCredentials=!0),e.headers.forEach((U,$)=>l.setRequestHeader(U,$.join(","))),e.headers.has(xh)||l.setRequestHeader(xh,p1),!e.headers.has(Dh)){let U=e.detectContentTypeHeader();U!==null&&l.setRequestHeader(Dh,U)}if(e.responseType){let U=e.responseType.toLowerCase();l.responseType=U!=="json"?U:"text"}let d=e.serializeBody(),h=null,g=()=>{if(h!==null)return h;let U=l.statusText||"OK",$=new li(l.getAllResponseHeaders()),_e=_1(l)||e.url;return h=new ns({headers:$,status:l.status,statusText:U,url:_e}),h},y=()=>{let{headers:U,status:$,statusText:_e,url:Ie}=g(),Ce=null;$!==f1&&(Ce=typeof l.response>"u"?l.responseText:l.response),$===0&&($=Ce?h1:0);let Ge=$>=200&&$<300;if(e.responseType==="json"&&typeof Ce=="string"){let zt=Ce;Ce=Ce.replace(v1,"");try{Ce=Ce!==""?JSON.parse(Ce):null}catch(Ot){Ce=zt,Ge&&(Ge=!1,Ce={error:Ot,text:Ce})}}Ge?(s.next(new xo({body:Ce,headers:U,status:$,statusText:_e,url:Ie||void 0})),s.complete()):s.error(new Eo({error:Ce,headers:U,status:$,statusText:_e,url:Ie||void 0}))},S=U=>{let{url:$}=g(),_e=new Eo({error:U,status:l.status||0,statusText:l.statusText||"Unknown Error",url:$||void 0});s.error(_e)},E=!1,R=U=>{E||(s.next(g()),E=!0);let $={type:hn.DownloadProgress,loaded:U.loaded};U.lengthComputable&&($.total=U.total),e.responseType==="text"&&l.responseText&&($.partialText=l.responseText),s.next($)},q=U=>{let $={type:hn.UploadProgress,loaded:U.loaded};U.lengthComputable&&($.total=U.total),s.next($)};return l.addEventListener("load",y),l.addEventListener("error",S),l.addEventListener("timeout",S),l.addEventListener("abort",S),e.reportProgress&&(l.addEventListener("progress",R),d!==null&&l.upload&&l.upload.addEventListener("progress",q)),l.send(d),s.next({type:hn.Sent}),()=>{l.removeEventListener("error",S),l.removeEventListener("abort",S),l.removeEventListener("load",y),l.removeEventListener("timeout",S),e.reportProgress&&(l.removeEventListener("progress",R),d!==null&&l.upload&&l.upload.removeEventListener("progress",q)),l.readyState!==l.DONE&&l.abort()}})))}static \u0275fac=function(n){return new(n||t)(Q(Vi))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Mh=new se(""),C1="XSRF-TOKEN",w1=new se("",{providedIn:"root",factory:()=>C1}),S1="X-XSRF-TOKEN",D1=new se("",{providedIn:"root",factory:()=>S1}),To=class{},x1=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=yo(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(Q(Fe),Q(w1))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();function E1(t,i){let e=t.url.toLowerCase();if(!w(Mh)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=w(To).getToken(),r=w(D1);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),i(t)}function T1(...t){let i=[rs,Fc,is,{provide:_r,useExisting:is},{provide:Do,useFactory:()=>w(m1,{optional:!0})??w(Fc)},{provide:Ih,useValue:E1,multi:!0},{provide:Mh,useValue:!0},{provide:To,useClass:x1}];for(let e of t)i.push(...e.\u0275providers);return ni(i)}var Rh=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Q(I1),r},providedIn:"root"})}return t})(),I1=(()=>{class t extends Mc{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Bi.NONE:return n;case Bi.HTML:return hr(n,"HTML")?Ni(n):Np(this._doc,String(n)).toString();case Bi.STYLE:return hr(n,"Style")?Ni(n):n;case Bi.SCRIPT:if(hr(n,"Script"))return Ni(n);throw new fe(5200,!1);case Bi.URL:return hr(n,"URL")?Ni(n):Pp(String(n));case Bi.RESOURCE_URL:if(hr(n,"ResourceURL"))return Ni(n);throw new fe(5201,!1);default:throw new fe(5202,!1)}}bypassSecurityTrustHtml(e){return Fp(e)}bypassSecurityTrustStyle(e){return Mp(e)}bypassSecurityTrustScript(e){return Rp(e)}bypassSecurityTrustUrl(e){return Lp(e)}bypassSecurityTrustResourceUrl(e){return Op(e)}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wr=class{},Lh=(()=>{class t extends wr{getTranslation(e){return Z({})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Io=class{},Oh=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();function as(t,i){if(t===i)return!0;if(t===null||i===null)return!1;if(t!==t&&i!==i)return!0;let e=typeof t,n=typeof i,r,s,l;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(i))return!1;if((r=t.length)==i.length){for(s=0;s<r;s++)if(!as(t[s],i[s]))return!1;return!0}}else{if(Array.isArray(i))return!1;l=Object.create(null);for(s in t){if(!as(t[s],i[s]))return!1;l[s]=!0}for(s in i)if(!(s in l)&&typeof i[s]<"u")return!1;return!0}return!1}function ci(t){return typeof t<"u"&&t!==null}function Fo(t){return os(t)&&!$c(t)&&t!==null}function os(t){return typeof t=="object"}function $c(t){return Array.isArray(t)}function Vc(t){return typeof t=="string"}function F1(t){return typeof t=="function"}function Rc(t,i){let e=Object.assign({},t);return os(t)?(os(t)&&os(i)&&Object.keys(i).forEach(n=>{Fo(i[n])?n in t?e[n]=Rc(t[n],i[n]):Object.assign(e,{[n]:i[n]}):Object.assign(e,{[n]:i[n]})}),e):Rc({},i)}function Lc(t,i){let e=i.split(".");i="";do i+=e.shift(),ci(t)&&ci(t[i])&&(Fo(t[i])||$c(t[i])||!e.length)?(t=t[i],i=""):e.length?i+=".":t=void 0;while(e.length);return t}function M1(t,i,e){let n=i.split("."),r=t;for(let s=0;s<n.length;s++){let l=n[s];s===n.length-1?r[l]=e:((!r[l]||!Fo(r[l]))&&(r[l]={}),r=r[l])}}var Sr=class{},Ph=(()=>{class t extends Sr{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(Vc(e))return this.interpolateString(e,n);if(F1(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(r,s)=>{let l=Lc(n,s);return ci(l)?l:r}):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Dr=class{},Nh=(()=>{class t extends Dr{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),ko=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new W;onLangChange=new W;onDefaultLangChange=new W},Oc=new se("ISOLATE_TRANSLATE_SERVICE"),Pc=new se("USE_DEFAULT_LANG"),Nc=new se("DEFAULT_LANGUAGE"),Bc=new se("USE_EXTEND"),Ao=t=>ei(t)?t:Z(t),Hn=(()=>{class t{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,n,r,s,l,d=!0,h=!1,g=!1,y){this.store=e,this.currentLoader=n,this.compiler=r,this.parser=s,this.missingTranslationHandler=l,this.useDefaultLang=d,this.extend=g,h&&(this.store=new ko),y&&this.setDefaultLang(y)}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=e),n.pipe(an(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return Z(this.translations[e]);this.currentLang||(this.currentLang=e);let n=this.retrieveTranslations(e);return ei(n)?(n.pipe(an(1)).subscribe(()=>{this.changeLang(e)}),n):(this.changeLang(e),Z(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(Yl(1),an(1));return this.loadingTranslations=n.pipe(ye(r=>this.compiler.compileTranslations(r,e)),Yl(1),an(1)),this.loadingTranslations.subscribe({next:r=>{this.translations[e]=this.extend&&this.translations[e]?I(I({},r),this.translations[e]):r,this.updateLangs(),this.pending=!1},error:r=>{this.pending=!1}}),n}setTranslation(e,n,r=!1){let s=this.compiler.compileTranslations(n,e);(r||this.extend)&&this.translations[e]?this.translations[e]=Rc(this.translations[e],s):this.translations[e]=s,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let n=e.filter(r=>!this.langs.includes(r));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,n,r){let s;if(e&&(s=this.runInterpolation(Lc(e,n),r)),s===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.runInterpolation(Lc(this.translations[this.defaultLang],n),r)),s===void 0){let l={key:n,translateService:this};typeof r<"u"&&(l.interpolateParams=r),s=this.missingTranslationHandler.handle(l)}return s!==void 0?s:n}runInterpolation(e,n){if($c(e))return e.map(r=>this.runInterpolation(r,n));if(Fo(e)){let r={};for(let s in e){let l=this.runInterpolation(e[s],n);l!==void 0&&(r[s]=l)}return r}else return this.parser.interpolate(e,n)}getParsedResult(e,n,r){if(n instanceof Array){let s={},l=!1;for(let h of n)s[h]=this.getParsedResultForKey(e,h,r),l=l||ei(s[h]);if(!l)return s;let d=n.map(h=>Ao(s[h]));return Pa(d).pipe(ye(h=>{let g={};return h.forEach((y,S)=>{g[n[S]]=y}),g}))}return this.getParsedResultForKey(e,n,r)}get(e,n){if(!ci(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(on(r=>Ao(this.getParsedResult(r,e,n)))):Ao(this.getParsedResult(this.translations[this.currentLang],e,n))}getStreamOnTranslationChange(e,n){if(!ci(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return ho(dr(()=>this.get(e,n)),this.onTranslationChange.pipe(Ct(r=>{let s=this.getParsedResult(r.translations,e,n);return Ao(s)})))}stream(e,n){if(!ci(e)||!e.length)throw new Error('Parameter "key" required');return ho(dr(()=>this.get(e,n)),this.onLangChange.pipe(Ct(r=>{let s=this.getParsedResult(r.translations,e,n);return Ao(s)})))}instant(e,n){if(!ci(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let r=this.getParsedResult(this.translations[this.currentLang],e,n);return ei(r)?Array.isArray(e)?e.reduce((s,l)=>(s[l]=l,s),{}):e:r}set(e,n,r=this.currentLang){M1(this.translations[r],e,Vc(n)?this.compiler.compile(n,r):this.compiler.compileTranslations(n,r)),this.updateLangs(),this.onTranslationChange.emit({lang:r,translations:this.translations[r]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||t)(Q(ko),Q(wr),Q(Dr),Q(Sr),Q(Io),Q(Pc),Q(Oc),Q(Bc),Q(Nc))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ui=(()=>{class t{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,n){this.translate=e,this._ref=n}updateValue(e,n,r){let s=l=>{this.value=l!==void 0?l:e,this.lastKey=e,this._ref.markForCheck()};if(r){let l=this.translate.getParsedResult(r,e,n);ei(l)?l.subscribe(s):s(l)}this.translate.get(e,n).subscribe(s)}transform(e,...n){if(!e||!e.length)return e;if(as(e,this.lastKey)&&as(n,this.lastParams))return this.value;let r;if(ci(n[0])&&n.length)if(Vc(n[0])&&n[0].length){let s=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{r=JSON.parse(s)}catch(l){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else Fo(n[0])&&(r=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,r),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,r,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)(B(Hn,16),B(Pt,16))};static \u0275pipe=Va({name:"translate",type:t,pure:!1});static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var di=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[e.loader||{provide:wr,useClass:Lh},e.compiler||{provide:Dr,useClass:Nh},e.parser||{provide:Sr,useClass:Ph},e.missingTranslationHandler||{provide:Io,useClass:Oh},ko,{provide:Oc,useValue:e.isolate},{provide:Pc,useValue:e.useDefaultLang},{provide:Bc,useValue:e.extend},{provide:Nc,useValue:e.defaultLanguage},Hn]}}static forChild(e={}){return{ngModule:t,providers:[e.loader||{provide:wr,useClass:Lh},e.compiler||{provide:Dr,useClass:Nh},e.parser||{provide:Sr,useClass:Ph},e.missingTranslationHandler||{provide:Io,useClass:Oh},{provide:Oc,useValue:e.isolate},{provide:Pc,useValue:e.useDefaultLang},{provide:Bc,useValue:e.extend},{provide:Nc,useValue:e.defaultLanguage},Hn]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var de="primary",zo=Symbol("RouteTitle"),qc=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Hi(t){return new qc(t)}function qh(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let r={};for(let s=0;s<n.length;s++){let l=n[s],d=t[s];if(l[0]===":")r[l.substring(1)]=d;else if(l!==d.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function R1(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!Tn(t[e],i[e]))return!1;return!0}function Tn(t,i){let e=t?Wc(t):void 0,n=i?Wc(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let s=0;s<e.length;s++)if(r=e[s],!Wh(t[r],i[r]))return!1;return!0}function Wc(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Wh(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,s)=>n[s]===r)}else return t===i}function Gh(t){return t.length>0?t[t.length-1]:null}function gi(t){return ei(t)?t:fr(t)?ct(Promise.resolve(t)):Z(t)}var L1={exact:Qh,subset:Yh},Kh={exact:O1,subset:P1,ignored:()=>!0};function Bh(t,i,e){return L1[e.paths](t.root,i.root,e.matrixParams)&&Kh[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function O1(t,i){return Tn(t,i)}function Qh(t,i,e){if(!Ui(t.segments,i.segments)||!us(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Qh(t.children[n],i.children[n],e))return!1;return!0}function P1(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Wh(t[e],i[e]))}function Yh(t,i,e){return Zh(t,i,i.segments,e)}function Zh(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Ui(r,e)||i.hasChildren()||!us(r,e,n))}else if(t.segments.length===e.length){if(!Ui(t.segments,e)||!us(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Yh(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),s=e.slice(t.segments.length);return!Ui(t.segments,r)||!us(t.segments,r,n)||!t.children[de]?!1:Zh(t.children[de],i,s,n)}}function us(t,i,e){return i.every((n,r)=>Kh[e](t[r].parameters,n.parameters))}var In=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Ae([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Hi(this.queryParams),this._queryParamMap}toString(){return $1.serialize(this)}},Ae=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ds(this)}},pi=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Hi(this.parameters),this._parameterMap}toString(){return Jh(this)}};function N1(t,i){return Ui(t,i)&&t.every((e,n)=>Tn(e.parameters,i[n].parameters))}function Ui(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function B1(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===de&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==de&&(e=e.concat(i(r,n)))}),e}var zi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>new hi,providedIn:"root"})}return t})(),hi=class{parse(i){let e=new Kc(i);return new In(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Mo(i.root,!0)}`,n=j1(i.queryParams),r=typeof i.fragment=="string"?`#${V1(i.fragment)}`:"";return`${e}${n}${r}`}},$1=new hi;function ds(t){return t.segments.map(i=>Jh(i)).join("/")}function Mo(t,i){if(!t.hasChildren())return ds(t);if(i){let e=t.children[de]?Mo(t.children[de],!1):"",n=[];return Object.entries(t.children).forEach(([r,s])=>{r!==de&&n.push(`${r}:${Mo(s,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=B1(t,(n,r)=>r===de?[Mo(t.children[de],!1)]:[`${r}:${Mo(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[de]!=null?`${ds(t)}/${e[0]}`:`${ds(t)}/(${e.join("//")})`}}function Xh(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ls(t){return Xh(t).replace(/%3B/gi,";")}function V1(t){return encodeURI(t)}function Gc(t){return Xh(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ps(t){return decodeURIComponent(t)}function $h(t){return ps(t.replace(/\+/g,"%20"))}function Jh(t){return`${Gc(t.path)}${U1(t.parameters)}`}function U1(t){return Object.entries(t).map(([i,e])=>`;${Gc(i)}=${Gc(e)}`).join("")}function j1(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${ls(e)}=${ls(r)}`).join("&"):`${ls(e)}=${ls(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var H1=/^[^\/()?;#]+/;function Uc(t){let i=t.match(H1);return i?i[0]:""}var z1=/^[^\/()?;=#]+/;function q1(t){let i=t.match(z1);return i?i[0]:""}var W1=/^[^=?&#]+/;function G1(t){let i=t.match(W1);return i?i[0]:""}var K1=/^[^&#]+/;function Q1(t){let i=t.match(K1);return i?i[0]:""}var Kc=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ae([],{}):new Ae([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[de]=new Ae(i,e)),n}parseSegment(){let i=Uc(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new fe(4009,!1);return this.capture(i),new pi(ps(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=q1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Uc(this.remaining);r&&(n=r,this.capture(n))}i[ps(e)]=ps(n)}parseQueryParam(i){let e=G1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let l=Q1(this.remaining);l&&(n=l,this.capture(n))}let r=$h(e),s=$h(n);if(i.hasOwnProperty(r)){let l=i[r];Array.isArray(l)||(l=[l],i[r]=l),l.push(s)}else i[r]=s}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Uc(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new fe(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):i&&(s=de);let l=this.parseChildren();e[s]=Object.keys(l).length===1?l[de]:new Ae([],l),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new fe(4011,!1)}};function ef(t){return t.segments.length>0?new Ae([],{[de]:t}):t}function tf(t){let i={};for(let[n,r]of Object.entries(t.children)){let s=tf(r);if(n===de&&s.segments.length===0&&s.hasChildren())for(let[l,d]of Object.entries(s.children))i[l]=d;else(s.segments.length>0||s.hasChildren())&&(i[n]=s)}let e=new Ae(t.segments,i);return Y1(e)}function Y1(t){if(t.numberOfChildren===1&&t.children[de]){let i=t.children[de];return new Ae(t.segments.concat(i.segments),i.children)}return t}function fi(t){return t instanceof In}function nf(t,i,e=null,n=null){let r=rf(t);return of(r,i,e,n)}function rf(t){let i;function e(s){let l={};for(let h of s.children){let g=e(h);l[h.outlet]=g}let d=new Ae(s.url,l);return s===t&&(i=d),d}let n=e(t.root),r=ef(n);return i??r}function of(t,i,e,n){let r=t;for(;r.parent;)r=r.parent;if(i.length===0)return jc(r,r,r,e,n);let s=Z1(i);if(s.toRoot())return jc(r,r,new Ae([],{}),e,n);let l=X1(s,r,t),d=l.processChildren?Lo(l.segmentGroup,l.index,s.commands):sf(l.segmentGroup,l.index,s.commands);return jc(r,l.segmentGroup,d,e,n)}function fs(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Po(t){return typeof t=="object"&&t!=null&&t.outlets}function jc(t,i,e,n,r){let s={};n&&Object.entries(n).forEach(([h,g])=>{s[h]=Array.isArray(g)?g.map(y=>`${y}`):`${g}`});let l;t===i?l=e:l=af(t,i,e);let d=ef(tf(l));return new In(d,s,r)}function af(t,i,e){let n={};return Object.entries(t.children).forEach(([r,s])=>{s===i?n[r]=e:n[r]=af(s,i,e)}),new Ae(t.segments,n)}var ms=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&fs(n[0]))throw new fe(4003,!1);let r=n.find(Po);if(r&&r!==Gh(n))throw new fe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Z1(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new ms(!0,0,t);let i=0,e=!1,n=t.reduce((r,s,l)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let d={};return Object.entries(s.outlets).forEach(([h,g])=>{d[h]=typeof g=="string"?g.split("/"):g}),[...r,{outlets:d}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:l===0?(s.split("/").forEach((d,h)=>{h==0&&d==="."||(h==0&&d===""?e=!0:d===".."?i++:d!=""&&r.push(d))}),r):[...r,s]},[]);return new ms(e,i,n)}var Tr=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function X1(t,i,e){if(t.isAbsolute)return new Tr(i,!0,0);if(!e)return new Tr(i,!1,NaN);if(e.parent===null)return new Tr(e,!0,0);let n=fs(t.commands[0])?0:1,r=e.segments.length-1+n;return J1(e,r,t.numberOfDoubleDots)}function J1(t,i,e){let n=t,r=i,s=e;for(;s>r;){if(s-=r,n=n.parent,!n)throw new fe(4005,!1);r=n.segments.length}return new Tr(n,!1,r-s)}function e2(t){return Po(t[0])?t[0].outlets:{[de]:t}}function sf(t,i,e){if(t??=new Ae([],{}),t.segments.length===0&&t.hasChildren())return Lo(t,i,e);let n=t2(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let s=new Ae(t.segments.slice(0,n.pathIndex),{});return s.children[de]=new Ae(t.segments.slice(n.pathIndex),t.children),Lo(s,0,r)}else return n.match&&r.length===0?new Ae(t.segments,{}):n.match&&!t.hasChildren()?Qc(t,i,e):n.match?Lo(t,0,r):Qc(t,i,e)}function Lo(t,i,e){if(e.length===0)return new Ae(t.segments,{});{let n=e2(e),r={};if(Object.keys(n).some(s=>s!==de)&&t.children[de]&&t.numberOfChildren===1&&t.children[de].segments.length===0){let s=Lo(t.children[de],i,e);return new Ae(t.segments,s.children)}return Object.entries(n).forEach(([s,l])=>{typeof l=="string"&&(l=[l]),l!==null&&(r[s]=sf(t.children[s],i,l))}),Object.entries(t.children).forEach(([s,l])=>{n[s]===void 0&&(r[s]=l)}),new Ae(t.segments,r)}}function t2(t,i,e){let n=0,r=i,s={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return s;let l=t.segments[r],d=e[n];if(Po(d))break;let h=`${d}`,g=n<e.length-1?e[n+1]:null;if(r>0&&h===void 0)break;if(h&&g&&typeof g=="object"&&g.outlets===void 0){if(!Uh(h,g,l))return s;n+=2}else{if(!Uh(h,{},l))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Qc(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let s=e[r];if(Po(s)){let h=n2(s.outlets);return new Ae(n,h)}if(r===0&&fs(e[0])){let h=t.segments[i];n.push(new pi(h.path,Vh(e[0]))),r++;continue}let l=Po(s)?s.outlets[de]:`${s}`,d=r<e.length-1?e[r+1]:null;l&&d&&fs(d)?(n.push(new pi(l,Vh(d))),r+=2):(n.push(new pi(l,{})),r++)}return new Ae(n,{})}function n2(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Qc(new Ae([],{}),0,n))}),i}function Vh(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Uh(t,i,e){return t==e.path&&Tn(i,e.parameters)}var hs="imperative",dt=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(dt||{}),$t=class{id;url;constructor(i,e){this.id=i,this.url=e}},mi=class extends $t{type=dt.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Vt=class extends $t{urlAfterRedirects;type=dt.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Lt=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(Lt||{}),Ir=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Ir||{}),An=class extends $t{reason;code;type=dt.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},kn=class extends $t{reason;code;type=dt.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},kr=class extends $t{error;target;type=dt.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},No=class extends $t{urlAfterRedirects;state;type=dt.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gs=class extends $t{urlAfterRedirects;state;type=dt.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bs=class extends $t{urlAfterRedirects;state;shouldActivate;type=dt.GuardsCheckEnd;constructor(i,e,n,r,s){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},vs=class extends $t{urlAfterRedirects;state;type=dt.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ys=class extends $t{urlAfterRedirects;state;type=dt.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_s=class{route;type=dt.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Cs=class{route;type=dt.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ws=class{snapshot;type=dt.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ss=class{snapshot;type=dt.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ds=class{snapshot;type=dt.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xs=class{snapshot;type=dt.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fr=class{routerEvent;position;anchor;type=dt.Scroll;constructor(i,e,n){this.routerEvent=i,this.position=e,this.anchor=n}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},Bo=class{},Mr=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function i2(t,i){return t.providers&&!t._injector&&(t._injector=$a(t.providers,i,`Route: ${t.path}`)),t._injector??i}function fn(t){return t.outlet||de}function r2(t,i){let e=t.filter(n=>fn(n)===i);return e.push(...t.filter(n=>fn(n)!==i)),e}function qo(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Es=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return qo(this.route?.snapshot)??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new qi(this.rootInjector)}},qi=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Es(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(Q(ii))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ts=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Yc(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=Yc(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Zc(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Zc(i,this._root).map(e=>e.value)}};function Yc(t,i){if(t===i.value)return i;for(let e of i.children){let n=Yc(t,e);if(n)return n}return null}function Zc(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Zc(t,e);if(n.length)return n.unshift(i),n}return[]}var Bt=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Er(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var $o=class extends Ts{snapshot;constructor(i,e){super(i),this.snapshot=e,ou(this,i)}toString(){return this.snapshot.toString()}};function lf(t){let i=o2(t),e=new Kt([new pi("",{})]),n=new Kt({}),r=new Kt({}),s=new Kt({}),l=new Kt(""),d=new Fn(e,n,s,l,r,de,t,i.root);return d.snapshot=i.root,new $o(new Bt(d,[]),i)}function o2(t){let i={},e={},n={},r="",s=new ji([],i,n,r,e,de,t,null,{});return new Vo("",new Bt(s,[]))}var Fn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,s,l,d,h){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=l,this.component=d,this._futureSnapshot=h,this.title=this.dataSubject?.pipe(ye(g=>g[zo]))??Z(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ye(i=>Hi(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ye(i=>Hi(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function As(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:I(I({},i.params),t.params),data:I(I({},i.data),t.data),resolve:I(I(I(I({},t.data),i.data),r?.data),t._resolvedData)}:n={params:I({},t.params),data:I({},t.data),resolve:I(I({},t.data),t._resolvedData??{})},r&&uf(r)&&(n.resolve[zo]=r.title),n}var ji=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[zo]}constructor(i,e,n,r,s,l,d,h,g){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=l,this.component=d,this.routeConfig=h,this._resolve=g}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Hi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Hi(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Vo=class extends Ts{url;constructor(i,e){super(e),this.url=i,ou(this,e)}toString(){return cf(this._root)}};function ou(t,i){i.value._routerState=t,i.children.forEach(e=>ou(t,e))}function cf(t){let i=t.children.length>0?` { ${t.children.map(cf).join(", ")} } `:"";return`${t.value}${i}`}function Hc(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Tn(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Tn(i.params,e.params)||t.paramsSubject.next(e.params),R1(i.url,e.url)||t.urlSubject.next(e.url),Tn(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Xc(t,i){let e=Tn(t.params,i.params)&&N1(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||Xc(t.parent,i.parent))}function uf(t){return typeof t.title=="string"||t.title===null}var df=new se(""),au=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=de;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=Rt(void 0);parentContexts=w(qi);location=w(Un);changeDetector=w(Pt);inputBinder=w(Wo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new fe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new fe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new fe(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new fe(4013,!1);this._activatedRoute=e;let r=this.location,l=e.snapshot.component,d=this.parentContexts.getOrCreateContext(this.name).children,h=new Jc(e,d,r.injector,this.routerOutletData);this.activated=r.createComponent(l,{index:r.length,injector:h,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ot]})}return t})(),Jc=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===Fn?this.route:i===qi?this.childContexts:i===df?this.outletData:this.parent.get(i,e)}},Wo=new se(""),su=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=Oa([n.queryParams,n.params,n.data]).pipe(Ct(([s,l,d],h)=>(d=I(I(I({},s),l),d),h===0?Z(d):Promise.resolve(d)))).subscribe(s=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let l=eh(n.component);if(!l){this.unsubscribeFromRouteData(e);return}for(let{templateName:d}of l.inputs)e.activatedComponentRef.setInput(d,s[d])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),lu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=N({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&M(0,"router-outlet")},dependencies:[au],encapsulation:2})}return t})();function cu(t){let i=t.children&&t.children.map(cu),e=i?Se(I({},t),{children:i}):I({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==de&&(e.component=lu),e}function a2(t,i,e){let n=Uo(t,i._root,e?e._root:void 0);return new $o(n,i)}function Uo(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=s2(t,i,e);return new Bt(n,r)}else{if(t.shouldAttach(i.value)){let s=t.retrieve(i.value);if(s!==null){let l=s.route;return l.value._futureSnapshot=i.value,l.children=i.children.map(d=>Uo(t,d)),l}}let n=l2(i.value),r=i.children.map(s=>Uo(t,s));return new Bt(n,r)}}function s2(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Uo(t,n,r);return Uo(t,n)})}function l2(t){return new Fn(new Kt(t.url),new Kt(t.params),new Kt(t.queryParams),new Kt(t.fragment),new Kt(t.data),t.outlet,t.component,t)}var Rr=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},pf="ngNavigationCancelingError";function Is(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=fi(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=hf(!1,Lt.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function hf(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[pf]=!0,e.cancellationCode=i,e}function c2(t){return ff(t)&&fi(t.url)}function ff(t){return!!t&&t[pf]}var u2=(t,i,e,n)=>ye(r=>(new eu(i,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),eu=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,s){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Hc(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=Er(e);i.children.forEach(s=>{let l=s.value.outlet;this.deactivateRoutes(s,r[l],n),delete r[l]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(i,e,n){let r=i.value,s=e?e.value:null;if(r===s)if(r.component){let l=n.getContext(r.outlet);l&&this.deactivateChildRoutes(i,e,l.children)}else this.deactivateChildRoutes(i,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,s=Er(i);for(let l of Object.values(s))this.deactivateRouteAndItsChildren(l,r);if(n&&n.outlet){let l=n.outlet.detach(),d=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:l,route:i,contexts:d})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,s=Er(i);for(let l of Object.values(s))this.deactivateRouteAndItsChildren(l,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=Er(e);i.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new xs(s.value.snapshot))}),i.children.length&&this.forwardEvent(new Ss(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,s=e?e.value:null;if(Hc(r),r===s)if(r.component){let l=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,l.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let l=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let d=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),l.children.onOutletReAttached(d.contexts),l.attachRef=d.componentRef,l.route=d.route.value,l.outlet&&l.outlet.attach(d.componentRef,d.route.value),Hc(d.route.value),this.activateChildRoutes(i,null,l.children)}else l.attachRef=null,l.route=r,l.outlet&&l.outlet.activateWith(r,l.injector),this.activateChildRoutes(i,null,l.children)}else this.activateChildRoutes(i,null,n)}},ks=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Ar=class{component;route;constructor(i,e){this.component=i,this.route=e}};function d2(t,i,e){let n=t._root,r=i?i._root:null;return Ro(n,r,e,[n.value])}function p2(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Or(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!xp(t)?t:i.get(t):n}function Ro(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Er(i);return t.children.forEach(l=>{h2(l,s[l.value.outlet],e,n.concat([l.value]),r),delete s[l.value.outlet]}),Object.entries(s).forEach(([l,d])=>Oo(d,e.getContext(l),r)),r}function h2(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=t.value,l=i?i.value:null,d=e?e.getContext(t.value.outlet):null;if(l&&s.routeConfig===l.routeConfig){let h=f2(l,s,s.routeConfig.runGuardsAndResolvers);h?r.canActivateChecks.push(new ks(n)):(s.data=l.data,s._resolvedData=l._resolvedData),s.component?Ro(t,i,d?d.children:null,n,r):Ro(t,i,e,n,r),h&&d&&d.outlet&&d.outlet.isActivated&&r.canDeactivateChecks.push(new Ar(d.outlet.component,l))}else l&&Oo(i,d,r),r.canActivateChecks.push(new ks(n)),s.component?Ro(t,null,d?d.children:null,n,r):Ro(t,null,e,n,r);return r}function f2(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!Ui(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Ui(t.url,i.url)||!Tn(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Xc(t,i)||!Tn(t.queryParams,i.queryParams);case"paramsChange":default:return!Xc(t,i)}}function Oo(t,i,e){let n=Er(t),r=t.value;Object.entries(n).forEach(([s,l])=>{r.component?i?Oo(l,i.children.getContext(s),e):Oo(l,null,e):Oo(l,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Ar(i.outlet.component,r)):e.canDeactivateChecks.push(new Ar(null,r)):e.canDeactivateChecks.push(new Ar(null,r))}function Go(t){return typeof t=="function"}function m2(t){return typeof t=="boolean"}function g2(t){return t&&Go(t.canLoad)}function b2(t){return t&&Go(t.canActivate)}function v2(t){return t&&Go(t.canActivateChild)}function y2(t){return t&&Go(t.canDeactivate)}function _2(t){return t&&Go(t.canMatch)}function mf(t){return t instanceof _p||t?.name==="EmptyError"}var cs=Symbol("INITIAL_VALUE");function Lr(){return Ct(t=>Oa(t.map(i=>i.pipe(an(1),Sp(cs)))).pipe(ye(i=>{for(let e of i)if(e!==!0){if(e===cs)return cs;if(e===!1||C2(e))return e}return!0}),Sn(i=>i!==cs),an(1)))}function C2(t){return fi(t)||t instanceof Rr}function w2(t,i){return Mt(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:l}}=e;return l.length===0&&s.length===0?Z(Se(I({},e),{guardsResult:!0})):S2(l,n,r,t).pipe(Mt(d=>d&&m2(d)?D2(n,s,t,i):Z(d)),ye(d=>Se(I({},e),{guardsResult:d})))})}function S2(t,i,e,n){return ct(t).pipe(Mt(r=>I2(r.component,r.route,e,i,n)),ti(r=>r!==!0,!0))}function D2(t,i,e,n){return ct(i).pipe(on(r=>ho(E2(r.route.parent,n),x2(r.route,n),A2(t,r.path,e),T2(t,r.route,e))),ti(r=>r!==!0,!0))}function x2(t,i){return t!==null&&i&&i(new Ds(t)),Z(!0)}function E2(t,i){return t!==null&&i&&i(new ws(t)),Z(!0)}function T2(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return Z(!0);let r=n.map(s=>dr(()=>{let l=qo(i)??e,d=Or(s,l),h=b2(d)?d.canActivate(i,t):Qt(l,()=>d(i,t));return gi(h).pipe(ti())}));return Z(r).pipe(Lr())}function A2(t,i,e){let n=i[i.length-1],s=i.slice(0,i.length-1).reverse().map(l=>p2(l)).filter(l=>l!==null).map(l=>dr(()=>{let d=l.guards.map(h=>{let g=qo(l.node)??e,y=Or(h,g),S=v2(y)?y.canActivateChild(n,t):Qt(g,()=>y(n,t));return gi(S).pipe(ti())});return Z(d).pipe(Lr())}));return Z(s).pipe(Lr())}function I2(t,i,e,n,r){let s=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!s||s.length===0)return Z(!0);let l=s.map(d=>{let h=qo(i)??r,g=Or(d,h),y=y2(g)?g.canDeactivate(t,i,e,n):Qt(h,()=>g(t,i,e,n));return gi(y).pipe(ti())});return Z(l).pipe(Lr())}function k2(t,i,e,n){let r=i.canLoad;if(r===void 0||r.length===0)return Z(!0);let s=r.map(l=>{let d=Or(l,t),h=g2(d)?d.canLoad(i,e):Qt(t,()=>d(i,e));return gi(h)});return Z(s).pipe(Lr(),gf(n))}function gf(t){return vp(wt(i=>{if(typeof i!="boolean")throw Is(t,i)}),ye(i=>i===!0))}function F2(t,i,e,n){let r=i.canMatch;if(!r||r.length===0)return Z(!0);let s=r.map(l=>{let d=Or(l,t),h=_2(d)?d.canMatch(i,e):Qt(t,()=>d(i,e));return gi(h)});return Z(s).pipe(Lr(),gf(n))}var jo=class{segmentGroup;constructor(i){this.segmentGroup=i||null}},Ho=class extends Error{urlTree;constructor(i){super(),this.urlTree=i}};function xr(t){return uo(new jo(t))}function M2(t){return uo(new fe(4e3,!1))}function R2(t){return uo(hf(!1,Lt.GuardRejected))}var tu=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Z(n);if(r.numberOfChildren>1||!r.children[de])return M2(`${i.redirectTo}`);r=r.children[de]}}applyRedirectCommands(i,e,n,r,s){if(typeof e!="string"){let d=e,{queryParams:h,fragment:g,routeConfig:y,url:S,outlet:E,params:R,data:q,title:U}=r,$=Qt(s,()=>d({params:R,data:q,queryParams:h,fragment:g,routeConfig:y,url:S,outlet:E,title:U}));if($ instanceof In)throw new Ho($);e=$}let l=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),i,n);if(e[0]==="/")throw new Ho(l);return l}applyRedirectCreateUrlTree(i,e,n,r){let s=this.createSegmentGroup(i,e.root,n,r);return new In(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let d=s.substring(1);n[r]=e[d]}else n[r]=s}),n}createSegmentGroup(i,e,n,r){let s=this.createSegments(i,e.segments,n,r),l={};return Object.entries(e.children).forEach(([d,h])=>{l[d]=this.createSegmentGroup(i,h,n,r)}),new Ae(s,l)}createSegments(i,e,n,r){return e.map(s=>s.path[0]===":"?this.findPosParam(i,s,r):this.findOrReturn(s,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new fe(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}},nu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function L2(t,i,e,n,r){let s=bf(t,i,e);return s.matched?(n=i2(i,n),F2(n,i,e,r).pipe(ye(l=>l===!0?s:I({},nu)))):Z(s)}function bf(t,i,e){if(i.path==="**")return O2(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?I({},nu):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||qh)(e,t,i);if(!r)return I({},nu);let s={};Object.entries(r.posParams??{}).forEach(([d,h])=>{s[d]=h.path});let l=r.consumed.length>0?I(I({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:l,positionalParamSegments:r.posParams??{}}}function O2(t){return{matched:!0,parameters:t.length>0?Gh(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function jh(t,i,e,n){return e.length>0&&B2(t,e,n)?{segmentGroup:new Ae(i,N2(n,new Ae(e,t.children))),slicedSegments:[]}:e.length===0&&$2(t,e,n)?{segmentGroup:new Ae(t.segments,P2(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new Ae(t.segments,t.children),slicedSegments:e}}function P2(t,i,e,n){let r={};for(let s of e)if(Ms(t,i,s)&&!n[fn(s)]){let l=new Ae([],{});r[fn(s)]=l}return I(I({},n),r)}function N2(t,i){let e={};e[de]=i;for(let n of t)if(n.path===""&&fn(n)!==de){let r=new Ae([],{});e[fn(n)]=r}return e}function B2(t,i,e){return e.some(n=>Ms(t,i,n)&&fn(n)!==de)}function $2(t,i,e){return e.some(n=>Ms(t,i,n))}function Ms(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function V2(t,i,e){return i.length===0&&!t.children[e]}var iu=class{};function U2(t,i,e,n,r,s,l="emptyOnly"){return new ru(t,i,e,n,r,l,s).recognize()}var j2=31,ru=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,s,l,d){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=l,this.urlSerializer=d,this.applyRedirects=new tu(this.urlSerializer,this.urlTree)}noMatchError(i){return new fe(4002,`'${i.segmentGroup}'`)}recognize(){let i=jh(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(ye(({children:e,rootSnapshot:n})=>{let r=new Bt(n,e),s=new Vo("",r),l=nf(n,[],this.urlTree.queryParams,this.urlTree.fragment);return l.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(l),{state:s,tree:l}}))}match(i){let e=new ji([],Object.freeze({}),Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),de,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,de,e).pipe(ye(n=>({children:n,rootSnapshot:e})),Pi(n=>{if(n instanceof Ho)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof jo?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,s):this.processSegment(i,e,n,n.segments,r,!0,s).pipe(ye(l=>l instanceof Bt?[l]:[]))}processChildren(i,e,n,r){let s=[];for(let l of Object.keys(n.children))l==="primary"?s.unshift(l):s.push(l);return ct(s).pipe(on(l=>{let d=n.children[l],h=r2(e,l);return this.processSegmentGroup(i,h,d,l,r)}),wp((l,d)=>(l.push(...d),l)),Kl(null),Cp(),Mt(l=>{if(l===null)return xr(n);let d=vf(l);return H2(d),Z(d)}))}processSegment(i,e,n,r,s,l,d){return ct(e).pipe(on(h=>this.processSegmentAgainstRoute(h._injector??i,e,h,n,r,s,l,d).pipe(Pi(g=>{if(g instanceof jo)return Z(null);throw g}))),ti(h=>!!h),Pi(h=>{if(mf(h))return V2(n,r,s)?Z(new iu):xr(n);throw h}))}processSegmentAgainstRoute(i,e,n,r,s,l,d,h){return fn(n)!==l&&(l===de||!Ms(r,s,n))?xr(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,s,l,h):this.allowRedirects&&d?this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,s,l,h):xr(r)}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,s,l,d){let{matched:h,parameters:g,consumedSegments:y,positionalParamSegments:S,remainingSegments:E}=bf(e,r,s);if(!h)return xr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>j2&&(this.allowRedirects=!1));let R=new ji(s,g,Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,Hh(r),fn(r),r.component??r._loadedComponent??null,r,zh(r)),q=As(R,d,this.paramsInheritanceStrategy);R.params=Object.freeze(q.params),R.data=Object.freeze(q.data);let U=this.applyRedirects.applyRedirectCommands(y,r.redirectTo,S,R,i);return this.applyRedirects.lineralizeSegments(r,U).pipe(Mt($=>this.processSegment(i,n,e,$.concat(E),l,!1,d)))}matchSegmentAgainstRoute(i,e,n,r,s,l){let d=L2(e,n,r,i,this.urlSerializer);return n.path==="**"&&(e.children={}),d.pipe(Ct(h=>h.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(Ct(({routes:g})=>{let y=n._loadedInjector??i,{parameters:S,consumedSegments:E,remainingSegments:R}=h,q=new ji(E,S,Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,Hh(n),fn(n),n.component??n._loadedComponent??null,n,zh(n)),U=As(q,l,this.paramsInheritanceStrategy);q.params=Object.freeze(U.params),q.data=Object.freeze(U.data);let{segmentGroup:$,slicedSegments:_e}=jh(e,E,R,g);if(_e.length===0&&$.hasChildren())return this.processChildren(y,g,$,q).pipe(ye(Ce=>new Bt(q,Ce)));if(g.length===0&&_e.length===0)return Z(new Bt(q,[]));let Ie=fn(n)===s;return this.processSegment(y,g,$,_e,Ie?de:s,!0,q).pipe(ye(Ce=>new Bt(q,Ce instanceof Bt?[Ce]:[])))}))):xr(e)))}getChildConfig(i,e,n){return e.children?Z({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?Z({routes:e._loadedRoutes,injector:e._loadedInjector}):k2(i,e,n,this.urlSerializer).pipe(Mt(r=>r?this.configLoader.loadChildren(i,e).pipe(wt(s=>{e._loadedRoutes=s.routes,e._loadedInjector=s.injector})):R2(e))):Z({routes:[],injector:i})}};function H2(t){t.sort((i,e)=>i.value.outlet===de?-1:e.value.outlet===de?1:i.value.outlet.localeCompare(e.value.outlet))}function z2(t){let i=t.value.routeConfig;return i&&i.path===""}function vf(t){let i=[],e=new Set;for(let n of t){if(!z2(n)){i.push(n);continue}let r=i.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=vf(n.children);i.push(new Bt(n.value,r))}return i.filter(n=>!e.has(n))}function Hh(t){return t.data||{}}function zh(t){return t.resolve||{}}function q2(t,i,e,n,r,s){return Mt(l=>U2(t,i,e,n,l.extractedUrl,r,s).pipe(ye(({state:d,tree:h})=>Se(I({},l),{targetSnapshot:d,urlAfterRedirects:h}))))}function W2(t,i){return Mt(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return Z(e);let s=new Set(r.map(h=>h.route)),l=new Set;for(let h of s)if(!l.has(h))for(let g of yf(h))l.add(g);let d=0;return ct(l).pipe(on(h=>s.has(h)?G2(h,n,t,i):(h.data=As(h,h.parent,t).resolve,Z(void 0))),wt(()=>d++),Ql(1),Mt(h=>d===l.size?Z(e):Vn))})}function yf(t){let i=t.children.map(e=>yf(e)).flat();return[t,...i]}function G2(t,i,e,n){let r=t.routeConfig,s=t._resolve;return r?.title!==void 0&&!uf(r)&&(s[zo]=r.title),K2(s,t,i,n).pipe(ye(l=>(t._resolvedData=l,t.data=As(t,t.parent,e).resolve,null)))}function K2(t,i,e,n){let r=Wc(t);if(r.length===0)return Z({});let s={};return ct(r).pipe(Mt(l=>Q2(t[l],i,e,n).pipe(ti(),wt(d=>{if(d instanceof Rr)throw Is(new hi,d);s[l]=d}))),Ql(1),ye(()=>s),Pi(l=>mf(l)?Vn:uo(l)))}function Q2(t,i,e,n){let r=qo(i)??n,s=Or(t,r),l=s.resolve?s.resolve(i,e):Qt(r,()=>s(i,e));return gi(l)}function zc(t){return Ct(i=>{let e=t(i);return e?ct(e).pipe(ye(()=>i)):Z(i)})}var uu=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===de);return n}getResolvedTitleForRoute(e){return e.data[zo]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>w(_f),providedIn:"root"})}return t})(),_f=(()=>{class t extends uu{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(Q(Rh))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wi=new se("",{providedIn:"root",factory:()=>({})}),Gi=new se(""),Rs=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=w(Yp);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Z(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=gi(e.loadComponent()).pipe(ye(wf),wt(s=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=s}),pr(()=>{this.componentLoaders.delete(e)})),r=new Gl(n,()=>new nt).pipe(Wl());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Z({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=Cf(n,this.compiler,e,this.onLoadEndListener).pipe(pr(()=>{this.childrenLoaders.delete(n)})),l=new Gl(s,()=>new nt).pipe(Wl());return this.childrenLoaders.set(n,l),l}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Cf(t,i,e,n){return gi(t.loadChildren()).pipe(ye(wf),Mt(r=>r instanceof jp||Array.isArray(r)?Z(r):ct(i.compileModuleAsync(r))),ye(r=>{n&&n(t);let s,l,d=!1;return Array.isArray(r)?(l=r,d=!0):(s=r.create(e).injector,l=s.get(Gi,[],{optional:!0,self:!0}).flat()),{routes:l.map(cu),injector:s}}))}function Y2(t){return t&&typeof t=="object"&&"default"in t}function wf(t){return Y2(t)?t.default:t}var Ls=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>w(Z2),providedIn:"root"})}return t})(),Z2=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),du=new se(""),pu=new se("");function Sf(t,i,e){let n=t.get(pu),r=t.get(Fe);return t.get(ft).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(g=>setTimeout(g));let s,l=new Promise(g=>{s=g}),d=r.startViewTransition(()=>(s(),X2(t))),{onViewTransitionCreated:h}=n;return h&&Qt(t,()=>h({transition:d,from:i,to:e})),l})}function X2(t){return new Promise(i=>{kp({read:()=>setTimeout(i)},{injector:t})})}var hu=new se(""),Os=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new nt;transitionAbortSubject=new nt;configLoader=w(Rs);environmentInjector=w(ii);destroyRef=w(Jl);urlSerializer=w(zi);rootContexts=w(qi);location=w(ai);inputBindingEnabled=w(Wo,{optional:!0})!==null;titleStrategy=w(uu);options=w(Wi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=w(Ls);createViewTransition=w(du,{optional:!0});navigationErrorHandler=w(hu,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Z(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new _s(r)),n=r=>this.events.next(new Cs(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(Se(I({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(e){return this.transitions=new Kt(null),this.transitions.pipe(Sn(n=>n!==null),Ct(n=>{let r=!1,s=!1;return Z(n).pipe(Ct(l=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Lt.SupersededByNewNavigation),Vn;this.currentTransition=n,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Se(I({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&h!=="reload"){let g="";return this.events.next(new kn(l.id,this.urlSerializer.serialize(l.rawUrl),g,Ir.IgnoredSameUrlNavigation)),l.resolve(!1),Vn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Z(l).pipe(Ct(g=>(this.events.next(new mi(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Vn:Promise.resolve(g))),q2(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),wt(g=>{n.targetSnapshot=g.targetSnapshot,n.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation=Se(I({},this.currentNavigation),{finalUrl:g.urlAfterRedirects});let y=new No(g.id,this.urlSerializer.serialize(g.extractedUrl),this.urlSerializer.serialize(g.urlAfterRedirects),g.targetSnapshot);this.events.next(y)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:g,extractedUrl:y,source:S,restoredState:E,extras:R}=l,q=new mi(g,this.urlSerializer.serialize(y),S,E);this.events.next(q);let U=lf(this.rootComponentType).snapshot;return this.currentTransition=n=Se(I({},l),{targetSnapshot:U,urlAfterRedirects:y,extras:Se(I({},R),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=y,Z(n)}else{let g="";return this.events.next(new kn(l.id,this.urlSerializer.serialize(l.extractedUrl),g,Ir.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Vn}}),wt(l=>{let d=new gs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}),ye(l=>(this.currentTransition=n=Se(I({},l),{guards:d2(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),n)),w2(this.environmentInjector,l=>this.events.next(l)),wt(l=>{if(n.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw Is(this.urlSerializer,l.guardsResult);let d=new bs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(d)}),Sn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Lt.GuardRejected),!1)),zc(l=>{if(l.guards.canActivateChecks.length!==0)return Z(l).pipe(wt(d=>{let h=new vs(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}),Ct(d=>{let h=!1;return Z(d).pipe(W2(this.paramsInheritanceStrategy,this.environmentInjector),wt({next:()=>h=!0,complete:()=>{h||this.cancelNavigationTransition(d,"",Lt.NoDataFromResolver)}}))}),wt(d=>{let h=new ys(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}))}),zc(l=>{let d=h=>{let g=[];h.routeConfig?.loadComponent&&!h.routeConfig._loadedComponent&&g.push(this.configLoader.loadComponent(h.routeConfig).pipe(wt(y=>{h.component=y}),ye(()=>{})));for(let y of h.children)g.push(...d(y));return g};return Oa(d(l.targetSnapshot.root)).pipe(Kl(null),an(1))}),zc(()=>this.afterPreactivation()),Ct(()=>{let{currentSnapshot:l,targetSnapshot:d}=n,h=this.createViewTransition?.(this.environmentInjector,l.root,d.root);return h?ct(h).pipe(ye(()=>n)):Z(n)}),ye(l=>{let d=a2(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=n=Se(I({},l),{targetRouterState:d}),this.currentNavigation.targetRouterState=d,n}),wt(()=>{this.events.next(new Bo)}),u2(this.rootContexts,e.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),an(1),wt({next:l=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Vt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{r=!0}}),Dp(this.transitionAbortSubject.pipe(wt(l=>{throw l}))),pr(()=>{!r&&!s&&this.cancelNavigationTransition(n,"",Lt.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),Pi(l=>{if(this.destroyed)return n.resolve(!1),Vn;if(s=!0,ff(l))this.events.next(new An(n.id,this.urlSerializer.serialize(n.extractedUrl),l.message,l.cancellationCode)),c2(l)?this.events.next(new Mr(l.url,l.navigationBehaviorOptions)):n.resolve(!1);else{let d=new kr(n.id,this.urlSerializer.serialize(n.extractedUrl),l,n.targetSnapshot??void 0);try{let h=Qt(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(h instanceof Rr){let{message:g,cancellationCode:y}=Is(this.urlSerializer,h);this.events.next(new An(n.id,this.urlSerializer.serialize(n.extractedUrl),g,y)),this.events.next(new Mr(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(d),l}catch(h){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(h)}}return Vn}))}))}cancelNavigationTransition(e,n,r){let s=new An(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(s),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function J2(t){return t!==hs}var Df=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>w(e_),providedIn:"root"})}return t})(),Fs=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},e_=(()=>{class t extends Fs{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xf=(()=>{class t{urlSerializer=w(zi);options=w(Wi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=w(ai);urlHandlingStrategy=w(Ls);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new In;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let s=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,l=r??s;return l instanceof In?this.urlSerializer.serialize(l):l}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=lf(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>w(t_),providedIn:"root"})}return t})(),t_=(()=>{class t extends xf{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate")})})}handleRouterEvent(e,n){e instanceof mi?this.updateStateMemento():e instanceof kn?this.commitTransition(n):e instanceof No?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Bo?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof An&&(e.code===Lt.GuardRejected||e.code===Lt.NoDataFromResolver)?this.restoreHistory(n):e instanceof kr?this.restoreHistory(n,!0):e instanceof Vt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:s,state:l}=n;if(this.location.isCurrentPathEqualTo(e)||s){let d=this.browserPageId,h=I(I({},l),this.generateNgRouterState(r,d));this.location.replaceState(e,"",h)}else{let d=I(I({},l),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",d)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===e.finalUrl&&s===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ps(t,i){t.events.pipe(Sn(e=>e instanceof Vt||e instanceof An||e instanceof kr||e instanceof kn),ye(e=>e instanceof Vt||e instanceof kn?0:(e instanceof An?e.code===Lt.Redirect||e.code===Lt.SupersededByNewNavigation:!1)?2:1),Sn(e=>e!==2),an(1)).subscribe(()=>{i()})}var n_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},i_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},mn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=w(ac);stateManager=w(xf);options=w(Wi,{optional:!0})||{};pendingTasks=w(Na);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=w(Os);urlSerializer=w(zi);location=w(ai);urlHandlingStrategy=w(Ls);_events=new nt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=w(Df);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=w(Gi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!w(Wo,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new bp;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof An&&n.code!==Lt.Redirect&&n.code!==Lt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Vt)this.navigated=!0;else if(n instanceof Mr){let l=n.navigationBehaviorOptions,d=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),h=I({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||J2(r.source)},l);this.scheduleNavigation(d,hs,null,h,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}o_(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),hs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r)=>{this.navigateToSyncWithBrowser(e,r,n)})}navigateToSyncWithBrowser(e,n,r){let s={replaceUrl:!0},l=r?.navigationId?r:null;if(r){let h=I({},r);delete h.navigationId,delete h.\u0275routerPageId,Object.keys(h).length!==0&&(s.state=h)}let d=this.parseUrl(e);this.scheduleNavigation(d,n,l,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(cu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:s,fragment:l,queryParamsHandling:d,preserveFragment:h}=n,g=h?this.currentUrlTree.fragment:l,y=null;switch(d??this.options.defaultQueryParamsHandling){case"merge":y=I(I({},this.currentUrlTree.queryParams),s);break;case"preserve":y=this.currentUrlTree.queryParams;break;default:y=s||null}y!==null&&(y=this.removeEmptyProps(y));let S;try{let E=r?r.snapshot:this.routerState.snapshot.root;S=rf(E)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),S=this.currentUrlTree.root}return of(S,e,y,g??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=fi(e)?e:this.parseUrl(e),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,hs,null,n)}navigate(e,n={skipLocationChange:!1}){return r_(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=I({},n_):n===!1?r=I({},i_):r=n,fi(e))return Bh(this.currentUrlTree,e,r);let s=this.parseUrl(e);return Bh(this.currentUrlTree,s,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(e,n,r,s,l){if(this.disposed)return Promise.resolve(!1);let d,h,g;l?(d=l.resolve,h=l.reject,g=l.promise):g=new Promise((S,E)=>{d=S,h=E});let y=this.pendingTasks.add();return Ps(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(y))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:s,resolve:d,reject:h,promise:g,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),g.catch(S=>Promise.reject(S))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function r_(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new fe(4008,!1)}function o_(t){return!(t instanceof Bo)&&!(t instanceof Mr)}var Ns=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new nt;constructor(e,n,r,s,l,d){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=s,this.el=l,this.locationStrategy=d;let h=l.nativeElement.tagName?.toLowerCase();this.isAnchorElement=h==="a"||h==="area",this.isAnchorElement?this.subscription=e.events.subscribe(g=>{g instanceof Vt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(fi(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,s,l){let d=this.urlTree;if(d===null||this.isAnchorElement&&(e!==0||n||r||s||l||typeof this.target=="string"&&this.target!="_self"))return!0;let h={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(d,h),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:$p(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,s=this.el.nativeElement;n!==null?r.setAttribute(s,e,n):r.removeAttribute(s,e)}get urlTree(){return this.routerLinkInput===null?null:fi(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||t)(B(mn),B(Fn),Xl("tabindex"),B(Zt),B(At),B(pn))};static \u0275dir=ce({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&ee("click",function(l){return r.onClick(l.button,l.ctrlKey,l.shiftKey,l.altKey,l.metaKey)}),n&2&&T("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",P],skipLocationChange:[2,"skipLocationChange","skipLocationChange",P],replaceUrl:[2,"replaceUrl","replaceUrl",P],routerLink:"routerLink"},features:[ot]})}return t})(),a_=(()=>{class t{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new W;constructor(e,n,r,s,l){this.router=e,this.element=n,this.renderer=r,this.cdr=s,this.link=l,this.routerEventsSubscription=e.events.subscribe(d=>{d instanceof Vt&&this.update()})}ngAfterContentInit(){Z(this.links.changes,Z(null)).pipe(po()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=ct(e).pipe(po()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=s_(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let s=r.urlTree;return s?e.isActive(s,n):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(B(mn),B(At),B(Zt),B(Pt),B(Ns,8))};static \u0275dir=ce({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,s){if(n&1&&Y(s,Ns,5),n&2){let l;j(l=H())&&(r.links=l)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[ot]})}return t})();function s_(t){return!!t.paths}var Ko=class{};var Ef=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,s){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(Sn(e=>e instanceof Vt),on(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,n){let r=[];for(let s of n){s.providers&&!s._injector&&(s._injector=$a(s.providers,e,`Route: ${s.path}`));let l=s._injector??e,d=s._loadedInjector??l;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(l,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(d,s.children??s._loadedRoutes))}return ct(r).pipe(po())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(e,n):r=Z(null);let s=r.pipe(Mt(l=>l===null?Z(void 0):(n._loadedRoutes=l.routes,n._loadedInjector=l.injector,this.processRoutes(l.injector??e,l.routes))));if(n.loadComponent&&!n._loadedComponent){let l=this.loader.loadComponent(n);return ct([s,l]).pipe(po())}else return s})}static \u0275fac=function(n){return new(n||t)(Q(mn),Q(ii),Q(Ko),Q(Rs))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Tf=new se(""),l_=(()=>{class t{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(e,n,r,s,l={}){this.urlSerializer=e,this.transitions=n,this.viewportScroller=r,this.zone=s,this.options=l,l.scrollPositionRestoration||="disabled",l.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof mi?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Vt?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof kn&&e.code===Ir.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Fr&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Fr(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Up()};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();function c_(t,...i){return ni([{provide:Gi,multi:!0,useValue:t},[],{provide:Fn,useFactory:Af,deps:[mn]},{provide:sc,multi:!0,useFactory:If},i.map(e=>e.\u0275providers)])}function Af(t){return t.routerState.root}function Qo(t,i){return{\u0275kind:t,\u0275providers:i}}function If(){let t=w(sn);return i=>{let e=t.get(lc);if(i!==e.components[0])return;let n=t.get(mn),r=t.get(kf);t.get(mu)===1&&n.initialNavigation(),t.get(Rf,null,Zl.Optional)?.setUpPreloading(),t.get(Tf,null,Zl.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var kf=new se("",{factory:()=>new nt}),mu=new se("",{providedIn:"root",factory:()=>1});function Ff(){let t=[{provide:mu,useValue:0},mo(()=>{let i=w(sn);return i.get(gc,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(mn),s=i.get(kf);Ps(r,()=>{n(!0)}),i.get(Os).afterPreactivation=()=>(n(!0),s.closed?Z(void 0):s),r.initialNavigation()}))})];return Qo(2,t)}function Mf(){let t=[mo(()=>{w(mn).setUpLocationChangeListener()}),{provide:mu,useValue:2}];return Qo(3,t)}var Rf=new se("");function Lf(t){return Qo(0,[{provide:Rf,useExisting:Ef},{provide:Ko,useExisting:t}])}function Of(){return Qo(8,[su,{provide:Wo,useExisting:su}])}function Pf(t){ic("NgRouterViewTransitions");let i=[{provide:du,useValue:Sf},{provide:pu,useValue:I({skipNextTransition:!!t?.skipInitialTransition},t)}];return Qo(9,i)}var Nf=[ai,{provide:zi,useClass:hi},mn,qi,{provide:Fn,useFactory:Af,deps:[mn]},Rs,[]],u_=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[Nf,[],{provide:Gi,multi:!0,useValue:e},[],n?.errorHandler?{provide:hu,useValue:n.errorHandler}:[],{provide:Wi,useValue:n||{}},n?.useHash?p_():h_(),d_(),n?.preloadingStrategy?Lf(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?f_(n):[],n?.bindToComponentInputs?Of().\u0275providers:[],n?.enableViewTransitions?Pf().\u0275providers:[],m_()]}}static forChild(e){return{ngModule:t,providers:[{provide:Gi,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function d_(){return{provide:Tf,useFactory:()=>{let t=w(dh),i=w(ft),e=w(Wi),n=w(Os),r=w(zi);return e.scrollOffset&&t.setOffset(e.scrollOffset),new l_(r,n,t,i,e)}}}function p_(){return{provide:pn,useClass:Cc}}function h_(){return{provide:pn,useClass:qa}}function f_(t){return[t.initialNavigation==="disabled"?Mf().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Ff().\u0275providers:[]]}var fu=new se("");function m_(){return[{provide:fu,useFactory:If},{provide:sc,multi:!0,useExisting:fu}]}function Ki(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Mn(t,i){if(t&&i){let e=n=>{Ki(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function g_(){return window.innerWidth-document.documentElement.offsetWidth}function Pr(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function v3(t="p-overflow-hidden"){let i=Pr(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,g_()+"px"),Mn(document.body,t)}function Rn(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function y3(t="p-overflow-hidden"){let i=Pr(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),Rn(document.body,t)}function Bf(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function Bs(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,s=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:s}}function gu(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function bu(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function _3(t,i,e=!0){var n,r,s,l;if(t){let d=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Bf(t),h=d.height,g=d.width,y=i.offsetHeight,S=i.offsetWidth,E=i.getBoundingClientRect(),R=bu(),q=gu(),U=Bs(),$,_e,Ie="top";E.top+y+h>U.height?($=E.top+R-h,Ie="bottom",$<0&&($=R)):$=y+E.top+R,E.left+g>U.width?_e=Math.max(0,E.left+q+S-g):_e=E.left+q,t.style.top=$+"px",t.style.left=_e+"px",t.style.transformOrigin=Ie,e&&(t.style.marginTop=Ie==="bottom"?`calc(${(r=(n=Pr(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(l=(s=Pr(/-anchor-gutter$/))==null?void 0:s.value)!=null?l:"")}}function C3(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Ln(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function w3(t,i,e=!0){var n,r,s,l;if(t){let d=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Bf(t),h=i.offsetHeight,g=i.getBoundingClientRect(),y=Bs(),S,E,R="top";g.top+h+d.height>y.height?(S=-1*d.height,R="bottom",g.top+S<0&&(S=-1*g.top)):S=h,d.width>y.width?E=g.left*-1:g.left+d.width>y.width?E=(g.left+d.width-y.width)*-1:E=0,t.style.top=S+"px",t.style.left=E+"px",t.style.transformOrigin=R,e&&(t.style.marginTop=R==="bottom"?`calc(${(r=(n=Pr(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(l=(s=Pr(/-anchor-gutter$/))==null?void 0:s.value)!=null?l:"")}}function Nr(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function vu(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),Nr(i)?i:void 0}function yu(t,i){let e=vu(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function $s(t,i={}){if(Nr(t)){let e=(n,r)=>{var s,l;let d=(s=t?.$attrs)!=null&&s[n]?[(l=t?.$attrs)==null?void 0:l[n]]:[];return[r].flat().reduce((h,g)=>{if(g!=null){let y=typeof g;if(y==="string"||y==="number")h.push(g);else if(y==="object"){let S=Array.isArray(g)?e(n,g):Object.entries(g).map(([E,R])=>n==="style"&&(R||R===0)?`${E.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${R}`:R?E:void 0);h=S.length?h.concat(S.filter(E=>!!E)):h}}return h},d)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let s=n.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?$s(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function S3(t,i={},...e){if(t){let n=document.createElement(t);return $s(n,i),n.append(...e),n}}function $f(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function b_(t,i){return Nr(t)?Array.from(t.querySelectorAll(i)):[]}function kt(t,i){return Nr(t)?t.matches(i)?t:t.querySelector(i):null}function _u(t,i){t&&document.activeElement!==t&&t.focus(i)}function Yo(t,i){if(Nr(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Vf(t,i=""){let e=b_(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function D3(t,i){let e=Vf(t,i);return e.length>0?e[0]:null}function Cu(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Uf(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function x3(t){var i;if(t){let e=(i=Uf(t))==null?void 0:i.childNodes,n=0;if(e)for(let r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}}return-1}function E3(t,i){let e=Vf(t,i);return e.length>0?e[e.length-1]:null}function jf(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function gn(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function T3(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function v_(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Uf(t))}function A3(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let r=vu((s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t);return r?.nodeType===9||v_(r)?r:void 0}}function wu(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function I3(t){return!!(t&&t.offsetParent!=null)}function k3(t){return t?getComputedStyle(t).direction==="rtl":!1}function F3(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Hf(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function zf(t,i){let e=vu(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function M3(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),s=r?parseFloat(r):0,l=t.getBoundingClientRect(),h=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-s,g=t.scrollTop,y=t.clientHeight,S=gn(i);h<0?t.scrollTop=g+h:h+S>y&&(t.scrollTop=g+h-y+S)}function qf(t,i="",e){Nr(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Wf(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}var y_=Object.defineProperty,Gf=Object.getOwnPropertySymbols,__=Object.prototype.hasOwnProperty,C_=Object.prototype.propertyIsEnumerable,Kf=(t,i,e)=>i in t?y_(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,w_=(t,i)=>{for(var e in i||(i={}))__.call(i,e)&&Kf(t,e,i[e]);if(Gf)for(var e of Gf(i))C_.call(i,e)&&Kf(t,e,i[e]);return t};function pt(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Su(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),s,l,d;if(n&&r){if(l=t.length,l!=i.length)return!1;for(s=l;s--!==0;)if(!Su(t[s],i[s],e))return!1;return!0}if(n!=r)return!1;let h=t instanceof Date,g=i instanceof Date;if(h!=g)return!1;if(h&&g)return t.getTime()==i.getTime();let y=t instanceof RegExp,S=i instanceof RegExp;if(y!=S)return!1;if(y&&S)return t.toString()==i.toString();let E=Object.keys(t);if(l=E.length,l!==Object.keys(i).length)return!1;for(s=l;s--!==0;)if(!Object.prototype.hasOwnProperty.call(i,E[s]))return!1;for(s=l;s--!==0;)if(d=E[s],!Su(t[d],i[d],e))return!1;return!0}function S_(t,i){return Su(t,i)}function Yf(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Re(t){return!pt(t)}function Vs(t,i){if(!t||!i)return null;try{let e=t[i];if(Re(e))return e}catch{}if(Object.keys(t).length){if(Yf(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,s=e.length;r<s;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function Qi(t,i,e){return e?Vs(t,e)===Vs(i,e):S_(t,i)}function Zf(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Qi(t,e))return!0}return!1}function P3(t,i){let e=-1;if(Re(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function bn(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function en(t,...i){return Yf(t)?t(...i):t}function bi(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Qf(t){return bi(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Us(t,i="",e={}){let n=Qf(i).split("."),r=n.shift();return r?bn(t)?Us(en(t[Object.keys(t).find(s=>Qf(s)===r)||""],e),n.join("."),e):void 0:en(t,e)}function js(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function N3(t){return t instanceof Date&&t.constructor===Date}function Xf(t){return Re(t)&&!isNaN(t)}function B3(t=""){return Re(t)&&t.length===1&&!!t.match(/\S| /)}function Ut(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Zo(...t){let i=(e={},n={})=>{let r=w_({},e);return Object.keys(n).forEach(s=>{bn(n[s])&&s in e&&bn(e[s])?r[s]=i(e[s],n[s]):r[s]=n[s]}),r};return t.reduce((e,n,r)=>r===0?n:i(e,n),{})}function Yi(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function jt(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Hs(t){return bi(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function Du(t){return bi(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var zs={};function et(t="pui_id_"){return zs.hasOwnProperty(t)||(zs[t]=0),zs[t]++,`${t}${zs[t]}`}function D_(){let t=[],i=(l,d,h=999)=>{let g=r(l,d,h),y=g.value+(g.key===l?0:h)+1;return t.push({key:l,value:y}),y},e=l=>{t=t.filter(d=>d.value!==l)},n=(l,d)=>r(l,d).value,r=(l,d,h=0)=>[...t].reverse().find(g=>d?!0:g.key===l)||{key:l,value:h},s=l=>l&&parseInt(l.style.zIndex,10)||0;return{get:s,set:(l,d,h)=>{d&&(d.style.zIndex=String(i(l,!0,h)))},clear:l=>{l&&(e(s(l)),l.style.zIndex="")},getCurrent:l=>n(l,!0)}}var U3=D_();var Jf=["*"],x_=function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t}(x_||{}),eF=(()=>{class t{requireConfirmationSource=new nt;acceptConfirmationSource=new nt;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var yt=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),tF=(()=>{class t{static AND="and";static OR="or"}return t})(),nF=(()=>{class t{filter(e,n,r,s,l){let d=[];if(e)for(let h of e)for(let g of n){let y=Vs(h,g);if(this.filters[s](y,r,l)){d.push(h);break}}return d}filters={startsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let s=jt(n.toString()).toLocaleLowerCase(r);return jt(e.toString()).toLocaleLowerCase(r).slice(0,s.length)===s},contains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let s=jt(n.toString()).toLocaleLowerCase(r);return jt(e.toString()).toLocaleLowerCase(r).indexOf(s)!==-1},notContains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let s=jt(n.toString()).toLocaleLowerCase(r);return jt(e.toString()).toLocaleLowerCase(r).indexOf(s)===-1},endsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let s=jt(n.toString()).toLocaleLowerCase(r),l=jt(e.toString()).toLocaleLowerCase(r);return l.indexOf(s,l.length-s.length)!==-1},equals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:jt(e.toString()).toLocaleLowerCase(r)==jt(n.toString()).toLocaleLowerCase(r),notEquals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:jt(e.toString()).toLocaleLowerCase(r)!=jt(n.toString()).toLocaleLowerCase(r),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let r=0;r<n.length;r++)if(Qi(e,n[r]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,r)=>this.filters.equals(e,n,r),isNot:(e,n,r)=>this.filters.notEquals(e,n,r),before:(e,n,r)=>this.filters.lt(e,n,r),after:(e,n,r)=>this.filters.gt(e,n,r),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),em=(()=>{class t{messageSource=new nt;clearSource=new nt;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),iF=(()=>{class t{clickSource=new nt;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=N({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Jf,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},encapsulation:2})}return t})(),tm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=N({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Jf,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},encapsulation:2})}return t})(),at=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(B(ri))};static \u0275dir=ce({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),te=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[le]})}return t})(),vi=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var cm=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(B(Zt),B(At))};static \u0275dir=ce({type:t})}return t})(),E_=(()=>{class t extends cm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275dir=ce({type:t,features:[O]})}return t})(),_i=new se("");var T_={provide:_i,useExisting:ut(()=>Ur),multi:!0};function A_(){let t=Jt()?Jt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var I_=new se(""),Ur=(()=>{class t extends cm{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!A_())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(B(Zt),B(At),B(I_,8))};static \u0275dir=ce({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&ee("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[oe([T_]),O]})}return t})();function um(t){return t==null||k_(t)===0}function k_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Js=new se(""),dm=new se("");function F_(t){return um(t.value)?{required:!0}:null}function M_(t){if(!t)return xu;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(um(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function xu(t){return null}function pm(t){return t!=null}function hm(t){return fr(t)?ct(t):t}function fm(t){let i={};return t.forEach(e=>{i=e!=null?I(I({},i),e):i}),Object.keys(i).length===0?null:i}function mm(t,i){return i.map(e=>e(t))}function R_(t){return!t.validate}function gm(t){return t.map(i=>R_(i)?i:e=>i.validate(e))}function L_(t){if(!t)return null;let i=t.filter(pm);return i.length==0?null:function(e){return fm(mm(e,i))}}function Iu(t){return t!=null?L_(gm(t)):null}function O_(t){if(!t)return null;let i=t.filter(pm);return i.length==0?null:function(e){let n=mm(e,i).map(hm);return Pa(n).pipe(ye(fm))}}function ku(t){return t!=null?O_(gm(t)):null}function nm(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function P_(t){return t._rawValidators}function N_(t){return t._rawAsyncValidators}function Eu(t){return t?Array.isArray(t)?t:[t]:[]}function Gs(t,i){return Array.isArray(t)?t.includes(i):t===i}function im(t,i){let e=Eu(i);return Eu(t).forEach(r=>{Gs(e,r)||e.push(r)}),e}function rm(t,i){return Eu(i).filter(e=>!Gs(t,e))}var Ks=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Iu(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ku(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Vr=class extends Ks{name;get formDirective(){return null}get path(){return null}},vn=class extends Ks{_parent=null;name=null;valueAccessor=null},Qs=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},B_={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},_F=Se(I({},B_),{"[class.ng-submitted]":"isSubmitted"}),jr=(()=>{class t extends Qs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(B(vn,2))};static \u0275dir=ce({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Ze("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[O]})}return t})(),el=(()=>{class t extends Qs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(B(Vr,10))};static \u0275dir=ce({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Ze("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[O]})}return t})();var Xo="VALID",Ws="INVALID",Br="PENDING",Jo="DISABLED",yi=class{},Ys=class extends yi{value;source;constructor(i,e){super(),this.value=i,this.source=e}},ta=class extends yi{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},na=class extends yi{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},$r=class extends yi{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Tu=class extends yi{source;constructor(i){super(),this.source=i}},Au=class extends yi{source;constructor(i){super(),this.source=i}};function bm(t){return(tl(t)?t.validators:t)||null}function $_(t){return Array.isArray(t)?Iu(t):t||null}function vm(t,i){return(tl(i)?i.asyncValidators:t)||null}function V_(t){return Array.isArray(t)?ku(t):t||null}function tl(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function U_(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new fe(1e3,"");if(!n[e])throw new fe(1001,"")}function j_(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new fe(1002,"")})}var Zs=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Nt(this.statusReactive)}set status(i){Nt(()=>this.statusReactive.set(i))}_status=Xe(()=>this.statusReactive());statusReactive=Ke(void 0);get valid(){return this.status===Xo}get invalid(){return this.status===Ws}get pending(){return this.status==Br}get disabled(){return this.status===Jo}get enabled(){return this.status!==Jo}errors;get pristine(){return Nt(this.pristineReactive)}set pristine(i){Nt(()=>this.pristineReactive.set(i))}_pristine=Xe(()=>this.pristineReactive());pristineReactive=Ke(!0);get dirty(){return!this.pristine}get touched(){return Nt(this.touchedReactive)}set touched(i){Nt(()=>this.touchedReactive.set(i))}_touched=Xe(()=>this.touchedReactive());touchedReactive=Ke(!1);get untouched(){return!this.touched}_events=new nt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(im(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(im(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(rm(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(rm(i,this._rawAsyncValidators))}hasValidator(i){return Gs(this._rawValidators,i)}hasAsyncValidator(i){return Gs(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(Se(I({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new na(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new na(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(Se(I({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new ta(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new ta(!0,n))}markAsPending(i={}){this.status=Br;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new $r(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(Se(I({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Jo,this.errors=null,this._forEachChild(r=>{r.disable(Se(I({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ys(this.value,n)),this._events.next(new $r(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Se(I({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Xo,this._forEachChild(n=>{n.enable(Se(I({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Se(I({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xo||this.status===Br)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ys(this.value,e)),this._events.next(new $r(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(Se(I({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Jo:Xo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Br,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=hm(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new $r(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?Jo:this.errors?Ws:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Br)?Br:this._anyControlsHaveStatus(Ws)?Ws:Xo}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),r&&this._events.next(new ta(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new na(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){tl(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=$_(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=V_(this._rawAsyncValidators)}},Xs=class extends Zs{constructor(i,e,n){super(bm(e),vm(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){j_(this,!0,i),Object.keys(i).forEach(n=>{U_(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,s)=>{n=e(n,r,s)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Fu=new se("",{providedIn:"root",factory:()=>Mu}),Mu="always";function H_(t,i){return[...i.path,t]}function ym(t,i,e=Mu){_m(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),q_(t,i),G_(t,i),W_(t,i),z_(t,i)}function om(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function z_(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function _m(t,i){let e=P_(t);i.validator!==null?t.setValidators(nm(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=N_(t);i.asyncValidator!==null?t.setAsyncValidators(nm(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();om(i._rawValidators,r),om(i._rawAsyncValidators,r)}function q_(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Cm(t,i)})}function W_(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Cm(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Cm(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function G_(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function K_(t,i){t==null,_m(t,i)}function Q_(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Y_(t){return Object.getPrototypeOf(t.constructor)===E_}function Z_(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function X_(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(s=>{s.constructor===Ur?e=s:Y_(s)?n=s:r=s}),r||n||e||null}var J_={provide:Vr,useExisting:ut(()=>ia)},ea=Promise.resolve(),ia=(()=>{class t extends Vr{callSetDisabledState;get submitted(){return Nt(this.submittedReactive)}_submitted=Xe(()=>this.submittedReactive());submittedReactive=Ke(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new Xs({},Iu(e),ku(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ea.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),ym(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ea.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ea.then(()=>{let n=this._findContainer(e.path),r=new Xs({});K_(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ea.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){ea.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Z_(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Tu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1),this.form._events.next(new Au(this.form))}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(B(Js,10),B(dm,10),B(Fu,8))};static \u0275dir=ce({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&ee("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[oe([J_]),O]})}return t})();function am(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function sm(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var eC=class extends Zs{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(bm(e),vm(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),tl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(sm(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){am(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){am(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){sm(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var tC={provide:vn,useExisting:ut(()=>yn)},lm=Promise.resolve(),yn=(()=>{class t extends vn{_changeDetectorRef;callSetDisabledState;control=new eC;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new W;constructor(e,n,r,s,l,d){super(),this._changeDetectorRef=l,this.callSetDisabledState=d,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=X_(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Q_(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ym(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){lm.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&P(n);lm.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?H_(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(B(Vr,9),B(Js,10),B(dm,10),B(_i,10),B(Pt,8),B(Fu,8))};static \u0275dir=ce({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[oe([tC]),O,ot]})}return t})();var nl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var wm=(()=>{class t{_validator=xu;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):xu,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,features:[ot]})}return t})();var nC={provide:Js,useExisting:ut(()=>ra),multi:!0};var ra=(()=>{class t extends wm{required;inputName="required";normalizeInput=P;createValidator=e=>F_;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&T("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[oe([nC]),O]})}return t})();var iC={provide:Js,useExisting:ut(()=>Ru),multi:!0},Ru=(()=>{class t extends wm{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>M_(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&T("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[oe([iC]),O]})}return t})();var rC=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var Ci=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Fu,useValue:e.callSetDisabledState??Mu}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[rC]})}return t})();var oC=Object.defineProperty,aC=Object.defineProperties,sC=Object.getOwnPropertyDescriptors,il=Object.getOwnPropertySymbols,xm=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,Sm=(t,i,e)=>i in t?oC(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Cn=(t,i)=>{for(var e in i||(i={}))xm.call(i,e)&&Sm(t,e,i[e]);if(il)for(var e of il(i))Em.call(i,e)&&Sm(t,e,i[e]);return t},Lu=(t,i)=>aC(t,sC(i)),zn=(t,i)=>{var e={};for(var n in t)xm.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&il)for(var n of il(t))i.indexOf(n)<0&&Em.call(t,n)&&(e[n]=t[n]);return e};function DF(...t){return Zo(...t)}var lC=Wf(),Ht=lC;function Dm(t,i){js(t)?t.push(...i||[]):bn(t)&&Object.assign(t,i)}function cC(t){return bn(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function uC(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ou(t="",i=""){return uC(`${bi(t,!1)&&bi(i,!1)?`${t}-`:t}${i}`)}function Tm(t="",i=""){return`--${Ou(t,i)}`}function dC(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Am(t,i="",e="",n=[],r){if(bi(t)){let s=/{([^}]*)}/g,l=t.trim();if(dC(l))return;if(Ut(l,s)){let d=l.replaceAll(s,y=>{let E=y.replace(/{|}/g,"").split(".").filter(R=>!n.some(q=>Ut(R,q)));return`var(${Tm(e,Hs(E.join("-")))}${Re(r)?`, ${r}`:""})`}),h=/(\d+\s+[\+\-\*\/]\s+\d+)/g,g=/var\([^)]+\)/g;return Ut(d.replace(g,"0"),h)?`calc(${d})`:d}return l}else if(Xf(t))return t}function pC(t,i,e){bi(i,!1)&&t.push(`${i}:${e};`)}function Hr(t,i){return t?`${t}{${i}}`:""}var zr=(...t)=>hC(Le.getTheme(),...t),hC=(t={},i,e,n)=>{if(i){let{variable:r,options:s}=Le.defaults||{},{prefix:l,transform:d}=t?.options||s||{},g=Ut(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||pt(n)&&d==="strict"?Le.getTokenValue(i):Am(g,void 0,l,[r.excludedKeyRegex],e)}return""};function fC(t,i={}){let e=Le.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:s=e.excludedKeyRegex}=i,l=(g,y="")=>Object.entries(g).reduce((S,[E,R])=>{let q=Ut(E,s)?Ou(y):Ou(y,Hs(E)),U=cC(R);if(bn(U)){let{variables:$,tokens:_e}=l(U,q);Dm(S.tokens,_e),Dm(S.variables,$)}else S.tokens.push((n?q.replace(`${n}-`,""):q).replaceAll("-",".")),pC(S.variables,Tm(q),Am(U,q,n,[s]));return S},{variables:[],tokens:[]}),{variables:d,tokens:h}=l(t,n);return{value:d,tokens:h,declarations:d.join(""),css:Hr(r,d.join(""))}}var _n={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return fC(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var s,l,d,h,g,y,S;let{preset:E,options:R}=i,q,U,$,_e,Ie,Ce,Ge;if(Re(E)&&R.transform!=="strict"){let{primitive:zt,semantic:Ot,extend:Gn}=E,Pn=Ot||{},{colorScheme:Kn}=Pn,Qn=zn(Pn,["colorScheme"]),Ti=Gn||{},{colorScheme:Ai}=Ti,qt=zn(Ti,["colorScheme"]),Yn=Kn||{},{dark:Zn}=Yn,Ii=zn(Yn,["dark"]),Zi=Ai||{},{dark:wn}=Zi,Xi=zn(Zi,["dark"]),ki=Re(zt)?this._toVariables({primitive:zt},R):{},Ji=Re(Qn)?this._toVariables({semantic:Qn},R):{},er=Re(Ii)?this._toVariables({light:Ii},R):{},la=Re(Zn)?this._toVariables({dark:Zn},R):{},ca=Re(qt)?this._toVariables({semantic:qt},R):{},Kr=Re(Xi)?this._toVariables({light:Xi},R):{},Ft=Re(wn)?this._toVariables({dark:wn},R):{},[Qr,Nn]=[(s=ki.declarations)!=null?s:"",ki.tokens],[ua,fl]=[(l=Ji.declarations)!=null?l:"",Ji.tokens||[]],[Wt,da]=[(d=er.declarations)!=null?d:"",er.tokens||[]],[tt,ml]=[(h=la.declarations)!=null?h:"",la.tokens||[]],[gl,pa]=[(g=ca.declarations)!=null?g:"",ca.tokens||[]],[tr,bl]=[(y=Kr.declarations)!=null?y:"",Kr.tokens||[]],[Fi,vl]=[(S=Ft.declarations)!=null?S:"",Ft.tokens||[]];q=this.transformCSS(t,Qr,"light","variable",R,n,r),U=Nn;let yl=this.transformCSS(t,`${ua}${Wt}`,"light","variable",R,n,r),Ye=this.transformCSS(t,`${tt}`,"dark","variable",R,n,r);$=`${yl}${Ye}`,_e=[...new Set([...fl,...da,...ml])];let ht=this.transformCSS(t,`${gl}${tr}color-scheme:light`,"light","variable",R,n,r),Oe=this.transformCSS(t,`${Fi}color-scheme:dark`,"dark","variable",R,n,r);Ie=`${ht}${Oe}`,Ce=[...new Set([...pa,...bl,...vl])],Ge=en(E.css,{dt:zr})}return{primitive:{css:q,tokens:U},semantic:{css:$,tokens:_e},global:{css:Ie,tokens:Ce},style:Ge}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:s,selector:l}){var d,h,g;let y,S,E;if(Re(i)&&e.transform!=="strict"){let R=t.replace("-directive",""),q=i,{colorScheme:U,extend:$,css:_e}=q,Ie=zn(q,["colorScheme","extend","css"]),Ce=$||{},{colorScheme:Ge}=Ce,zt=zn(Ce,["colorScheme"]),Ot=U||{},{dark:Gn}=Ot,Pn=zn(Ot,["dark"]),Kn=Ge||{},{dark:Qn}=Kn,Ti=zn(Kn,["dark"]),Ai=Re(Ie)?this._toVariables({[R]:Cn(Cn({},Ie),zt)},e):{},qt=Re(Pn)?this._toVariables({[R]:Cn(Cn({},Pn),Ti)},e):{},Yn=Re(Gn)?this._toVariables({[R]:Cn(Cn({},Gn),Qn)},e):{},[Zn,Ii]=[(d=Ai.declarations)!=null?d:"",Ai.tokens||[]],[Zi,wn]=[(h=qt.declarations)!=null?h:"",qt.tokens||[]],[Xi,ki]=[(g=Yn.declarations)!=null?g:"",Yn.tokens||[]],Ji=this.transformCSS(R,`${Zn}${Zi}`,"light","variable",e,r,s,l),er=this.transformCSS(R,Xi,"dark","variable",e,r,s,l);y=`${Ji}${er}`,S=[...new Set([...Ii,...wn,...ki])],E=en(_e,{dt:zr})}return{css:y,tokens:S,style:E}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var s;let{preset:l,options:d}=i,h=(s=l?.components)==null?void 0:s[t];return this.getPreset({name:t,preset:h,options:d,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var s;let l=t.replace("-directive",""),{preset:d,options:h}=i,g=(s=d?.directives)==null?void 0:s[l];return this.getPreset({name:l,preset:g,options:h,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${en(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:s}){let l=this.getCommon({name:t,theme:i,params:e,set:r,defaults:s}),d=Object.entries(n).reduce((h,[g,y])=>h.push(`${g}="${y}"`)&&h,[]).join(" ");return Object.entries(l||{}).reduce((h,[g,y])=>{if(y?.css){let S=Yi(y?.css),E=`${g}-variables`;h.push(`<style type="text/css" data-primevue-style-id="${E}" ${d}>${S}</style>`)}return h},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:s}){var l;let d={name:t,theme:i,params:e,set:r,defaults:s},h=(l=t.includes("-directive")?this.getPresetD(d):this.getPresetC(d))==null?void 0:l.css,g=Object.entries(n).reduce((y,[S,E])=>y.push(`${S}="${E}"`)&&y,[]).join(" ");return h?`<style type="text/css" data-primevue-style-id="${t}-variables" ${g}>${Yi(h)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([s,l])=>{let d=Ut(s,i.variable.excludedKeyRegex)?e:e?`${e}.${Du(s)}`:Du(s),h=n?`${n}.${s}`:s;bn(l)?this.createTokens(l,i,d,h,r):(r[d]||(r[d]={paths:[],computed(g,y={}){var S,E;return this.paths.length===1?(S=this.paths[0])==null?void 0:S.computed(this.paths[0].scheme,y.binding):g&&g!=="none"?(E=this.paths.find(R=>R.scheme===g))==null?void 0:E.computed(g,y.binding):this.paths.map(R=>R.computed(R.scheme,y[R.scheme]))}}),r[d].paths.push({path:h,value:l,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed(g,y={}){let S=/{([^}]*)}/g,E=l;if(y.name=this.path,y.binding||(y.binding={}),Ut(l,S)){let q=l.trim().replaceAll(S,_e=>{var Ie;let Ce=_e.replace(/{|}/g,""),Ge=(Ie=r[Ce])==null?void 0:Ie.computed(g,y);return js(Ge)&&Ge.length===2?`light-dark(${Ge[0].value},${Ge[1].value})`:Ge?.value}),U=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,$=/var\([^)]+\)/g;E=Ut(q.replace($,"0"),U)?`calc(${q})`:q}return pt(y.binding)&&delete y.binding,{colorScheme:g,path:this.path,paths:y,value:E.includes("undefined")?void 0:E}}}))}),r},getTokenValue(t,i,e){var n;let s=(h=>h.split(".").filter(y=>!Ut(y.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),l=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,d=[(n=t[s])==null?void 0:n.computed(l)].flat().filter(h=>h);return d.length===1?d[0].value:d.reduce((h={},g)=>{let y=g,{colorScheme:S}=y,E=zn(y,["colorScheme"]);return h[S]=E,h},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Hr(Re(i)?`${t}${i},${t} ${i}`:t,n):Hr(t,Re(i)?Hr(i,n):n)},transformCSS(t,i,e,n,r={},s,l,d){if(Re(i)){let{cssLayer:h}=r;if(n!=="style"){let g=this.getColorSchemeOption(r,l);i=e==="dark"?g.reduce((y,{type:S,selector:E})=>(Re(E)&&(y+=E.includes("[CSS]")?E.replace("[CSS]",i):this.getSelectorRule(E,d,S,i)),y),""):Hr(d??":root",i)}if(h){let g={name:"primeui",order:"primeui"};bn(h)&&(g.name=en(h.name,{name:t,type:n})),Re(g.name)&&(i=Hr(`@layer ${g.name}`,i),s?.layerNames(g.name))}return i}return""}},Le={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Lu(Cn({},i),{options:Cn(Cn({},this.defaults.options),i.options)}),this._tokens=_n.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Ht.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Lu(Cn({},this.theme),{preset:t}),this._tokens=_n.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Ht.emit("preset:change",t),Ht.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Lu(Cn({},this.theme),{options:t}),this.clearLoadedStyleNames(),Ht.emit("options:change",t),Ht.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return _n.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return _n.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return _n.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return _n.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return _n.getPreset(r)},getLayerOrderCSS(t=""){return _n.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return _n.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return _n.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return _n.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Ht.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&Ht.emit("theme:load"))}};var mC=0,Im=(()=>{class t{document=w(Fe);use(e,n={}){let r=!1,s=e,l=null,{immediate:d=!0,manual:h=!1,name:g=`style_${++mC}`,id:y=void 0,media:S=void 0,nonce:E=void 0,first:R=!1,props:q={}}=n;if(this.document){if(l=this.document.querySelector(`style[data-primeng-style-id="${g}"]`)||y&&this.document.getElementById(y)||this.document.createElement("style"),!l.isConnected){s=e;let U=this.document.head;R&&U.firstChild?U.insertBefore(l,U.firstChild):U.appendChild(l),$s(l,{type:"text/css",media:S,nonce:E,"data-primeng-style-id":g})}return l.textContent!==s&&(l.textContent=s),{id:y,name:g,el:l,css:s}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qr={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},gC=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,bC=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ue=(()=>{class t{name="base";useStyle=w(Im);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=s=>s)=>{let s=r(en(e,{dt:zr}));return s?this.useStyle.use(Yi(s),I({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>Le.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(bC,e);loadGlobalTheme=(e={},n="")=>this.load(gC,e,(r="")=>Le.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>Le.getCommon(this.name,e);getComponentTheme=e=>Le.getComponent(this.name,e);getDirectiveTheme=e=>Le.getDirective(this.name,e);getPresetTheme=(e,n,r)=>Le.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>Le.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=en(this.css,{dt:zr}),s=Yi(`${r}${e}`),l=Object.entries(n).reduce((d,[h,g])=>d.push(`${h}="${g}"`)&&d,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${l}>${s}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>Le.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[Le.getStyleSheet(this.name,e,n)];if(this.theme){let s=this.name==="base"?"global-style":`${this.name}-style`,l=en(this.theme,{dt:zr}),d=Yi(Le.transformCSS(s,l)),h=Object.entries(n).reduce((g,[y,S])=>g.push(`${y}="${S}"`)&&g,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${s}" ${h}>${d}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vC=(()=>{class t{theme=Ke(void 0);csp=Ke({nonce:void 0});isThemeChanged=!1;document=w(Fe);baseStyle=w(ue);constructor(){go(()=>{Ht.on("theme:change",e=>{Nt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),go(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){Le.clearLoadedStyleNames(),Ht.clear()}onThemeChange(e){Le.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!Le.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:s}=this.baseStyle.getCommonTheme?.()||{},l={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,I({name:"primitive-variables"},l)),this.baseStyle.load(n?.css,I({name:"semantic-variables"},l)),this.baseStyle.load(r?.css,I({name:"global-variables"},l)),this.baseStyle.loadGlobalTheme(I({name:"global-style"},l),s),Le.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pu=(()=>{class t extends vC{ripple=Ke(!1);platformId=w(Yt);inputStyle=Ke(null);inputVariant=Ke(null);overlayOptions={};csp=Ke({nonce:void 0});filterMatchModeOptions={text:[yt.STARTS_WITH,yt.CONTAINS,yt.NOT_CONTAINS,yt.ENDS_WITH,yt.EQUALS,yt.NOT_EQUALS],numeric:[yt.EQUALS,yt.NOT_EQUALS,yt.LESS_THAN,yt.LESS_THAN_OR_EQUAL_TO,yt.GREATER_THAN,yt.GREATER_THAN_OR_EQUAL_TO],date:[yt.DATE_IS,yt.DATE_IS_NOT,yt.DATE_BEFORE,yt.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new nt;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=I(I({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:s,inputVariant:l,theme:d,overlayOptions:h,translation:g,filterMatchModeOptions:y}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),s&&this.inputStyle.set(s),l&&this.inputVariant.set(l),h&&(this.overlayOptions=h),g&&this.setTranslation(g),y&&(this.filterMatchModeOptions=y),d&&this.setThemeConfig({theme:d,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yC=new se("PRIME_NG_CONFIG");function e4(...t){let i=t?.map(n=>({provide:yC,useValue:n,multi:!1})),e=mo(()=>{let n=w(Pu);t?.forEach(r=>n.setConfig(r))});return ni([...i,e])}var km=(()=>{class t extends ue{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ae=(()=>{class t{document=w(Fe);platformId=w(Yt);el=w(At);injector=w(sn);cd=w(Pt);renderer=w(Zt);config=w(Pu);baseComponentStyle=w(km);baseStyle=w(ue);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=et("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return Us(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!vr(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Ht.off("theme:change",e))}_loadStyles(){let e=()=>{qr.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),qr.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!qr.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),qr.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Le.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:s}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,I({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,I({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,I({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(I({name:"global-style"},this.styleOptions),s),Le.setLoadedStyleName("common")}if(!Le.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,I({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(I({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Le.setLoadedStyleName(this.componentStyle?.name)}if(!Le.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,I({name:"layer-order",first:!0},this.styleOptions)),Le.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,I({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){qr.clearLoadedStyleNames(),Ht.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:I({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,inputs:{dt:"dt"},features:[oe([km,ue]),ot]})}return t})();var Nu=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let s=0;s<r.length;s++)e.classList.add(r[s])}else{let r=n.split(" ");for(let s=0;s<r.length;s++)e.className+=" "+r[s]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(s=>this.removeClass(e,s)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var s=0;s<n.length;s++){if(n[s]==e)return r;n[s].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],s=0;for(var l=0;l<r.length;l++){if(r[l]==e)return s;r[l].attributes&&r[l].attributes[n]&&r[l].nodeType==1&&s++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",s=!0){e&&n&&(s&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let s=Ie=>{if(Ie)return getComputedStyle(Ie).getPropertyValue("position")==="relative"?Ie:s(Ie.parentElement)},l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),d=n.offsetHeight,h=n.getBoundingClientRect(),g=this.getWindowScrollTop(),y=this.getWindowScrollLeft(),S=this.getViewport(),R=s(e)?.getBoundingClientRect()||{top:-1*g,left:-1*y},q,U;h.top+d+l.height>S.height?(q=h.top-R.top-l.height,e.style.transformOrigin="bottom",h.top+q<0&&(q=-1*h.top)):(q=d+h.top-R.top,e.style.transformOrigin="top");let $=h.left+l.width-S.width,_e=h.left-R.left;l.width>S.width?U=(h.left-R.left)*-1:$>0?U=_e-$:U=h.left-R.left,e.style.top=q+"px",e.style.left=U+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=s.height,d=s.width,h=n.offsetHeight,g=n.offsetWidth,y=n.getBoundingClientRect(),S=this.getWindowScrollTop(),E=this.getWindowScrollLeft(),R=this.getViewport(),q,U;y.top+h+l>R.height?(q=y.top+S-l,e.style.transformOrigin="bottom",q<0&&(q=S)):(q=h+y.top+S,e.style.transformOrigin="top"),y.left+d>R.width?U=Math.max(0,y.left+E+g-d):U=y.left+E,e.style.top=q+"px",e.style.left=U+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),s=/(auto|scroll)/,l=d=>{let h=window.getComputedStyle(d,null);return s.test(h.getPropertyValue("overflow"))||s.test(h.getPropertyValue("overflowX"))||s.test(h.getPropertyValue("overflowY"))};for(let d of r){let h=d.nodeType===1&&d.dataset.scrollselectors;if(h){let g=h.split(",");for(let y of g){let S=this.findSingle(d,y);S&&l(S)&&n.push(S)}}d.nodeType!==9&&l(d)&&n.push(d)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),s=r?parseFloat(r):0,l=getComputedStyle(e).getPropertyValue("paddingTop"),d=l?parseFloat(l):0,h=e.getBoundingClientRect(),y=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-s-d,S=e.scrollTop,E=e.clientHeight,R=this.getOuterHeight(n);y<0?e.scrollTop=S+y:y+R>E&&(e.scrollTop=S+y-E+R)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,s=0,l=function(){s=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=s,r=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};l()}static fadeOut(e,n){var r=1,s=50,l=n,d=s/l;let h=setInterval(()=>{r=r-d,r<=0&&(r=0,clearInterval(h)),e.style.opacity=r},s)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,s=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(l){return[].indexOf.call(document.querySelectorAll(l),this)!==-1};return s.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let s=getComputedStyle(e);r+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let s=getComputedStyle(e);r+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,s=n.getElementsByTagName("body")[0],l=e.innerWidth||r.clientWidth||s.clientWidth,d=e.innerHeight||r.clientHeight||s.clientHeight;return{width:l,height:d}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var s=e.indexOf("rv:");return!0}var l=e.indexOf("Edge/");return l>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),s=[];for(let l of r){let d=getComputedStyle(l);this.isVisible(l)&&d.display!="none"&&d.visibility!="hidden"&&s.push(l)}return s}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let s=getComputedStyle(r);if(this.isVisible(r)&&s.display!="none"&&s.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),s=0;if(r&&r.length>0){let l=r.indexOf(r[0].ownerDocument.activeElement);n?l==-1||l===0?s=r.length-1:s=l-1:l!=-1&&l!==r.length-1&&(s=l+1)}return r[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let l=(d=>!!(d&&d.constructor&&d.call&&d.apply))(e)?e():e;return l&&l.nodeType===9||this.isExist(l)?l:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let s=document.createElement(e);return this.setAttributes(s,n),s.append(...r),s}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(s,l)=>{let d=e?.$attrs?.[s]?[e?.$attrs?.[s]]:[];return[l].flat().reduce((h,g)=>{if(g!=null){let y=typeof g;if(y==="string"||y==="number")h.push(g);else if(y==="object"){let S=Array.isArray(g)?r(s,g):Object.entries(g).map(([E,R])=>s==="style"&&(R||R===0)?`${E.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${R}`:R?E:void 0);h=S.length?h.concat(S.filter(E=>!!E)):h}}return h},d)};Object.entries(n).forEach(([s,l])=>{if(l!=null){let d=s.match(/^on(.+)/);d?e.addEventListener(d[1].toLowerCase(),l):s==="pBind"?this.setAttributes(e,l):(l=s==="class"?[...new Set(r("class",l))].join(" ").trim():s==="style"?r("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=l),e.setAttribute(s,l))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),rl=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Nu.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var ol=(()=>{class t extends ae{autofocus=!1;_autofocus=!1;focused=!1;platformId=w(Yt);document=w(Fe);host=w(At);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){En(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Nu.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",P],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[O]})}return t})(),w4=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var _C=["input"],CC=(t,i,e,n,r)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":t,"p-disabled":i,"p-variant-filled":e,"p-radiobutton-sm p-inputfield-sm":n,"p-radiobutton-lg p-inputfield-lg":r}),wC=({dt:t})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${t("radiobutton.width")};
    height: ${t("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${t("radiobutton.border.color")};
    background: ${t("radiobutton.background")};
    width: ${t("radiobutton.width")};
    height: ${t("radiobutton.height")};
    transition: background ${t("radiobutton.transition.duration")}, color ${t("radiobutton.transition.duration")}, border-color ${t("radiobutton.transition.duration")}, box-shadow ${t("radiobutton.transition.duration")}, outline-color ${t("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${t("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${t("radiobutton.icon.size")};
    width: ${t("radiobutton.icon.size")};
    height: ${t("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${t("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${t("radiobutton.checked.border.color")};
    background: ${t("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${t("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${t("radiobutton.checked.hover.border.color")};
    background: ${t("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${t("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${t("radiobutton.focus.border.color")};
    box-shadow: ${t("radiobutton.focus.ring.shadow")};
    outline: ${t("radiobutton.focus.ring.width")} ${t("radiobutton.focus.ring.style")} ${t("radiobutton.focus.ring.color")};
    outline-offset: ${t("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${t("radiobutton.checked.focus.border.color")};
}

p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${t("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${t("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${t("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${t("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${t("radiobutton.disabled.background")};
    border-color: ${t("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${t("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${t("radiobutton.sm.width")};
    height: ${t("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${t("radiobutton.icon.sm.size")};
    width: ${t("radiobutton.icon.sm.size")};
    height: ${t("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${t("radiobutton.lg.width")};
    height: ${t("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${t("radiobutton.icon.lg.size")};
    width: ${t("radiobutton.icon.lg.size")};
    height: ${t("radiobutton.icon.lg.size")};
}
`,SC={root:({instance:t,props:i})=>["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Fm=(()=>{class t extends ue{name="radiobutton";theme=wC;classes=SC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var DC={provide:_i,useExisting:ut(()=>al),multi:!0},xC=(()=>{class t{accessors=[];add(e,n){this.accessors.push([e,n])}remove(e){this.accessors=this.accessors.filter(n=>n[1]!==e)}select(e){this.accessors.forEach(n=>{this.isSameGroup(n,e)&&n[1]!==e&&n[1].writeValue(e.value)})}isSameGroup(e,n){return e[0].control?e[0].control.root===n.control.control.root&&e[1].name===n.name:!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),al=(()=>{class t extends ae{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new W;onFocus=new W;onBlur=new W;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=w(Fm);injector=w(sn);registry=w(xC);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(vn),this.checkName(),this.registry.add(this.control,this)}onChange(e){this.disabled||this.select(e)}select(e){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.binary?this.checked=!!e:this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,r){if(n&1&&ln(_C,5),n&2){let s;j(s=H())&&(r.inputViewChild=s.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",P],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",Me],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",P],binary:[2,"binary","binary",P]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([DC,Fm]),O],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(n,r){if(n&1){let s=Te();D(0,"div",1)(1,"input",2,0),ee("focus",function(d){return X(s),J(r.onInputFocus(d))})("blur",function(d){return X(s),J(r.onInputBlur(d))})("change",function(d){return X(s),J(r.onChange(d))}),x(),D(3,"div",3),M(4,"div",4),x()()}n&2&&(V(r.styleClass),m("ngStyle",r.style)("ngClass",ja(18,CC,r.checked,r.disabled,r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled",r.size==="small",r.size==="large")),T("data-pc-name","radiobutton")("data-pc-section","root"),b(),m("checked",r.checked)("disabled",r.disabled)("value",r.value)("pAutoFocus",r.autofocus),T("id",r.inputId)("name",r.name)("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel)("tabindex",r.tabindex)("aria-checked",r.checked),b(2),T("data-pc-section","input"),b(),T("data-pc-section","icon"))},dependencies:[le,We,vt,ol,te],encapsulation:2,changeDetection:0})}return t})(),B4=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[al,te,te]})}return t})();var EC=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,TC={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":Re(t.value)&&String(t.value).length===1,"p-badge-dot":pt(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Mm=(()=>{class t extends ue{name="badge";theme=EC;classes=TC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Bu=(()=>{class t extends ae{styleClass=Rt();style=Rt();badgeSize=Rt();size=Rt();severity=Rt();value=Rt();badgeDisabled=Rt(!1,{transform:P});_componentStyle=w(Mm);containerClass=Xe(()=>{let e="p-badge p-component";return Re(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),pt(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(St(r.style()),V(r.containerClass()),Dn("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[oe([Mm]),O],decls:1,vars:1,template:function(n,r){n&1&&ge(0),n&2&&qe(r.value())},dependencies:[le,te],encapsulation:2,changeDetection:0})}return t})(),Rm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Bu,te,te]})}return t})();var IC=["*"],kC=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,FC=(()=>{class t extends ue{name="baseicon";inlineStyles=kC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var je=(()=>{class t extends ae{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=pt(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",P],styleClass:"styleClass"},features:[oe([FC]),O],ngContentSelectors:IC,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},encapsulation:2,changeDetection:0})}return t})();var sl=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["CheckIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0),M(1,"path",1),x()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var $u=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["ChevronDownIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0),M(1,"path",1),x()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var fM=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["ChevronLeftIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0),M(1,"path",1),x()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var bM=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["ChevronRightIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0),M(1,"path",1),x()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Vu=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["ChevronUpIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0),M(1,"path",1),x()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Lm=(()=>{class t extends je{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["ExclamationTriangleIcon"]],features:[O],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0)(1,"g"),M(2,"path",1)(3,"path",2)(4,"path",3),x(),D(5,"defs")(6,"clipPath",4),M(7,"rect",5),x()()()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),T("clip-path",r.pathId),b(5),m("id",r.pathId))},encapsulation:2})}return t})();var Om=(()=>{class t extends je{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["InfoCircleIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0)(1,"g"),M(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),M(5,"rect",3),x()()()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),T("clip-path",r.pathId),b(3),m("id",r.pathId))},encapsulation:2})}return t})();var Pm=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["MinusIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0),M(1,"path",1),x()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Nm=(()=>{class t extends je{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["PlusIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0)(1,"g"),M(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),M(5,"rect",3),x()()()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),T("clip-path",r.pathId),b(3),m("id",r.pathId))},encapsulation:2})}return t})();var Bm=(()=>{class t extends je{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["SpinnerIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0)(1,"g"),M(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),M(5,"rect",3),x()()()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),T("clip-path",r.pathId),b(3),m("id",r.pathId))},encapsulation:2})}return t})();var Wr=(()=>{class t extends je{static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["TimesIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0),M(1,"path",1),x()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var $m=(()=>{class t extends je{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["TimesCircleIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0)(1,"g"),M(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),M(5,"rect",3),x()()()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),T("clip-path",r.pathId),b(3),m("id",r.pathId))},encapsulation:2})}return t})();var Vm=(()=>{class t extends je{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["UploadIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Ne(),D(0,"svg",0)(1,"g"),M(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),M(5,"rect",3),x()()()),n&2&&(V(r.getClassNames()),T("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),T("clip-path",r.pathId),b(3),m("id",r.pathId))},encapsulation:2})}return t})();var MC=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,RC={root:"p-ink"},Um=(()=>{class t extends ue{name="ripple";theme=MC;classes=RC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var wi=(()=>{class t extends ae{zone=w(ft);_componentStyle=w(Um);animationListener;mouseDownListener;timeout;constructor(){super(),go(()=>{En(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Rn(n,"p-ink-active"),!Cu(n)&&!wu(n)){let d=Math.max(Ln(this.el.nativeElement),gn(this.el.nativeElement));n.style.height=d+"px",n.style.width=d+"px"}let r=jf(this.el.nativeElement),s=e.pageX-r.left+this.document.body.scrollTop-wu(n)/2,l=e.pageY-r.top+this.document.body.scrollLeft-Cu(n)/2;this.renderer.setStyle(n,"top",l+"px"),this.renderer.setStyle(n,"left",s+"px"),Mn(n,"p-ink-active"),this.timeout=setTimeout(()=>{let d=this.getInk();d&&Rn(d,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Rn(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Rn(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Hf(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[oe([Um]),O]})}return t})(),ZM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var LC=["content"],OC=["loadingicon"],PC=["icon"],NC=["*"],qm=t=>({class:t});function BC(t,i){t&1&&xe(0)}function $C(t,i){if(t&1&&M(0,"span",8),t&2){let e=_(3);m("ngClass",e.iconClass()),T("aria-hidden",!0)("data-pc-section","loadingicon")}}function VC(t,i){if(t&1&&M(0,"SpinnerIcon",9),t&2){let e=_(3);m("styleClass",e.spinnerIconClass())("spin",!0),T("aria-hidden",!0)("data-pc-section","loadingicon")}}function UC(t,i){if(t&1&&(He(0),A(1,$C,1,3,"span",6)(2,VC,1,4,"SpinnerIcon",7),ze()),t&2){let e=_(2);b(),m("ngIf",e.loadingIcon),b(),m("ngIf",!e.loadingIcon)}}function jC(t,i){}function HC(t,i){if(t&1&&A(0,jC,0,0,"ng-template",10),t&2){let e=_(2);m("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function zC(t,i){if(t&1&&(He(0),A(1,UC,3,2,"ng-container",2)(2,HC,1,1,null,5),ze()),t&2){let e=_();b(),m("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),b(),m("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",ke(3,qm,e.iconClass()))}}function qC(t,i){if(t&1&&M(0,"span",8),t&2){let e=_(2);V(e.icon),m("ngClass",e.iconClass()),T("data-pc-section","icon")}}function WC(t,i){}function GC(t,i){if(t&1&&A(0,WC,0,0,"ng-template",10),t&2){let e=_(2);m("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function KC(t,i){if(t&1&&(He(0),A(1,qC,1,4,"span",11)(2,GC,1,1,null,5),ze()),t&2){let e=_();b(),m("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),b(),m("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ke(3,qm,e.iconClass()))}}function QC(t,i){if(t&1&&(D(0,"span",12),ge(1),x()),t&2){let e=_();T("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),b(),qe(e.label)}}function YC(t,i){if(t&1&&M(0,"p-badge",13),t&2){let e=_();m("value",e.badge)("severity",e.badgeSeverity)}}var ZC=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,XC={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Di=(()=>{class t extends ue{name="button";theme=ZC;classes=XC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Si={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Hm=(()=>{class t extends ae{_componentStyle=w(Di);static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ze("p-button-label",!0)},features:[oe([Di]),O]})}return t})(),zm=(()=>{class t extends ae{_componentStyle=w(Di);static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ze("p-button-icon",!0)},features:[oe([Di]),O]})}return t})(),vR=(()=>{class t extends ae{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=rc(zm);labelSignal=rc(Hm);isIconOnly=Xe(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Si);isTextButton=Xe(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=w(Di);ngAfterViewInit(){super.ngAfterViewInit(),Mn(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let s in r)this[s]=r[s]}}getStyleClass(){let e=[Si.button,Si.component];return this.icon&&!this.label&&pt(this.htmlElement.textContent)&&e.push(Si.iconOnly),this.loading&&(e.push(Si.disabled,Si.loading),!this.icon&&this.label&&e.push(Si.labelOnly),this.icon&&!this.label&&!pt(this.htmlElement.textContent)&&e.push(Si.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return pt(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(r=>e.some(s=>r===`p-button-${s}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!kt(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!kt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&Mn(n,r);let s=this.getIconClass();s&&Mn(n,s),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=kt(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=kt(this.htmlElement,".p-button-icon"),n=kt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,s){n&1&&(pc(s,r.iconSignal,zm,5),pc(s,r.labelSignal,Hm,5)),n&2&&qp(2)},hostVars:4,hostBindings:function(n,r){n&2&&Ze("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",P],rounded:[2,"rounded","rounded",P],text:[2,"text","text",P],outlined:[2,"outlined","outlined",P],size:"size",plain:[2,"plain","plain",P],fluid:[2,"fluid","fluid",P],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[oe([Di]),O,ot]})}return t})(),qn=(()=>{class t extends ae{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new W;onFocus=new W;onBlur=new W;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return pt(this.fluid)?!!n:this.fluid}_componentStyle=w(Di);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let s in r)this[s]=r[s]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-button"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,LC,5),Y(s,OC,5),Y(s,PC,5),Y(s,at,4)),n&2){let l;j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.loadingIconTemplate=l.first),j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",P],loading:[2,"loading","loading",P],loadingIcon:"loadingIcon",raised:[2,"raised","raised",P],rounded:[2,"rounded","rounded",P],text:[2,"text","text",P],plain:[2,"plain","plain",P],severity:"severity",outlined:[2,"outlined","outlined",P],link:[2,"link","link",P],tabindex:[2,"tabindex","tabindex",Me],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",P],fluid:[2,"fluid","fluid",P],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([Di]),O,ot],ngContentSelectors:NC,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(Qe(),D(0,"button",0),ee("click",function(l){return r.onClick.emit(l)})("focus",function(l){return r.onFocus.emit(l)})("blur",function(l){return r.onBlur.emit(l)}),Be(1),A(2,BC,1,0,"ng-container",1)(3,zC,3,5,"ng-container",2)(4,KC,3,5,"ng-container",2)(5,QC,2,3,"span",3)(6,YC,1,2,"p-badge",4),x()),n&2&&(m("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),T("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),b(2),m("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),b(),m("ngIf",r.loading),b(),m("ngIf",!r.loading),b(),m("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),b(),m("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[le,We,Ue,Je,vt,wi,ol,Bm,Rm,Bu,te],encapsulation:2,changeDetection:0})}return t})(),Gr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[le,qn,te,te]})}return t})();var JC=["container"],ew=["icon"],tw=["closeicon"],nw=["*"],iw=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),rw=t=>({value:"visible()",params:t}),ow=t=>({closeCallback:t});function aw(t,i){t&1&&xe(0)}function sw(t,i){if(t&1&&A(0,aw,1,0,"ng-container",7),t&2){let e=_(2);m("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function lw(t,i){if(t&1&&M(0,"i",3),t&2){let e=_(2);m("ngClass",e.icon)}}function cw(t,i){if(t&1&&M(0,"span",9),t&2){let e=_(3);m("ngClass",e.cx("text"))("innerHTML",e.text,Ba)}}function uw(t,i){if(t&1&&(D(0,"div"),A(1,cw,1,2,"span",8),x()),t&2){let e=_(2);b(),m("ngIf",!e.escape)}}function dw(t,i){if(t&1&&(D(0,"span",5),ge(1),x()),t&2){let e=_(3);m("ngClass",e.cx("text")),b(),qe(e.text)}}function pw(t,i){if(t&1&&A(0,dw,2,2,"span",10),t&2){let e=_(2);m("ngIf",e.escape&&e.text)}}function hw(t,i){t&1&&xe(0)}function fw(t,i){if(t&1&&A(0,hw,1,0,"ng-container",11),t&2){let e=_(2);m("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",ke(2,ow,e.close.bind(e)))}}function mw(t,i){if(t&1&&(D(0,"span",5),Be(1),x()),t&2){let e=_(2);m("ngClass",e.cx("text"))}}function gw(t,i){if(t&1&&M(0,"i",13),t&2){let e=_(3);m("ngClass",e.closeIcon)}}function bw(t,i){t&1&&xe(0)}function vw(t,i){if(t&1&&A(0,bw,1,0,"ng-container",7),t&2){let e=_(3);m("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function yw(t,i){t&1&&M(0,"TimesIcon",14)}function _w(t,i){if(t&1){let e=Te();D(0,"button",12),ee("click",function(r){X(e);let s=_(2);return J(s.close(r))}),A(1,gw,1,1,"i",13)(2,vw,1,1,"ng-container")(3,yw,1,0,"TimesIcon",14),x()}if(t&2){let e=_(2);T("aria-label",e.closeAriaLabel),b(),Ee(e.closeIcon?1:-1),b(),Ee(e.closeIconTemplate||e._closeIconTemplate?2:-1),b(),Ee(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Cw(t,i){if(t&1&&(D(0,"div",1)(1,"div",2),A(2,sw,1,1,"ng-container")(3,lw,1,1,"i",3)(4,uw,2,1,"div",4)(5,pw,1,1,"ng-template",null,0,xn)(7,fw,1,4,"ng-container")(8,mw,2,1,"span",5)(9,_w,4,4,"button",6),x()()),t&2){let e=Xt(6),n=_();m("ngClass",n.containerClass)("@messageAnimation",ke(13,rw,oi(10,iw,n.showTransitionOptions,n.hideTransitionOptions))),T("aria-live","polite")("role","alert"),b(2),Ee(n.iconTemplate||n._iconTemplate?2:-1),b(),Ee(n.icon?3:-1),b(),m("ngIf",!n.escape)("ngIfElse",e),b(3),Ee(n.containerTemplate||n._containerTemplate?7:8),b(2),Ee(n.closable?9:-1)}}var ww=({dt:t})=>`
.p-message {
    border-radius: ${t("message.border.radius")};
    outline-width: ${t("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${t("message.content.padding")};
    gap: ${t("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${t("message.close.button.width")};
    height: ${t("message.close.button.height")};
    border-radius: ${t("message.close.button.border.radius")};
    background: transparent;
    transition: background ${t("message.transition.duration")}, color ${t("message.transition.duration")}, outline-color ${t("message.transition.duration")}, box-shadow ${t("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${t("message.close.icon.size")};
    width: ${t("message.close.icon.size")};
    height: ${t("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${t("message.close.button.focus.ring.width")};
    outline-style: ${t("message.close.button.focus.ring.style")};
    outline-offset: ${t("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${t("message.info.background")};
    outline-color: ${t("message.info.border.color")};
    color: ${t("message.info.color")};
    box-shadow: ${t("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${t("message.info.close.button.focus.ring.color")};
    box-shadow: ${t("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${t("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${t("message.info.outlined.color")};
    outline-color: ${t("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${t("message.info.simple.color")};
}

.p-message-success {
    background: ${t("message.success.background")};
    outline-color: ${t("message.success.border.color")};
    color: ${t("message.success.color")};
    box-shadow: ${t("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${t("message.success.close.button.focus.ring.color")};
    box-shadow: ${t("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${t("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${t("message.success.outlined.color")};
    outline-color: ${t("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${t("message.success.simple.color")};
}

.p-message-warn {
    background: ${t("message.warn.background")};
    outline-color: ${t("message.warn.border.color")};
    color: ${t("message.warn.color")};
    box-shadow: ${t("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${t("message.warn.close.button.focus.ring.color")};
    box-shadow: ${t("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${t("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${t("message.warn.outlined.color")};
    outline-color: ${t("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${t("message.warn.simple.color")};
}

.p-message-error {
    background: ${t("message.error.background")};
    outline-color: ${t("message.error.border.color")};
    color: ${t("message.error.color")};
    box-shadow: ${t("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${t("message.error.close.button.focus.ring.color")};
    box-shadow: ${t("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${t("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${t("message.error.outlined.color")};
    outline-color: ${t("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${t("message.error.simple.color")};
}

.p-message-secondary {
    background: ${t("message.secondary.background")};
    outline-color: ${t("message.secondary.border.color")};
    color: ${t("message.secondary.color")};
    box-shadow: ${t("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${t("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${t("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${t("message.secondary.outlined.color")};
    outline-color: ${t("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${t("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${t("message.contrast.background")};
    outline-color: ${t("message.contrast.border.color")};
    color: ${t("message.contrast.color")};
    box-shadow: ${t("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${t("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${t("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${t("message.contrast.outlined.color")};
    outline-color: ${t("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${t("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${t("message.text.font.size")};
    font-weight: ${t("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${t("message.icon.size")};
    width: ${t("message.icon.size")};
    height: ${t("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${t("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${t("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${t("message.icon.sm.size")};
    width: ${t("message.icon.sm.size")};
    height: ${t("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${t("message.close.icon.sm.size")};
    width: ${t("message.close.icon.sm.size")};
    height: ${t("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${t("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${t("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${t("message.icon.lg.size")};
    width: ${t("message.icon.lg.size")};
    height: ${t("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${t("message.close.icon.lg.size")};
    width: ${t("message.close.icon.lg.size")};
    height: ${t("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${t("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${t("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Sw={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Wm=(()=>{class t extends ue{name="message";theme=ww;classes=Sw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Wn=(()=>{class t extends ae{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new W;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",n=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${n}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Ke(!0);_componentStyle=w(Wm);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-message"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,JC,4),Y(s,ew,4),Y(s,tw,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.containerTemplate=l.first),j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.closeIconTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",P],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",P],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[oe([Wm]),O],ngContentSelectors:nw,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(n,r){n&1&&(Qe(),A(0,Cw,10,15,"div",1)),n&2&&Ee(r.visible()?0:-1)},dependencies:[le,We,Ue,Je,Wr,wi,te],encapsulation:2,data:{animation:[cn("messageAnimation",[Dt(":enter",[bt({opacity:0,transform:"translateY(-25%)"}),It("{{showTransitionParams}}")]),Dt(":leave",[It("{{hideTransitionParams}}",bt({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),Gm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Wn,te,te]})}return t})();var On=class t{selectedUploadType=Ke("url");getSelectedUploadType=Xe(()=>this.selectedUploadType());setUploadType(i){this.selectedUploadType.set(i)}uploadData=Ke(null);getUploadData=Xe(()=>this.uploadData());setUploadData(i){this.uploadData.set(i)}mergeModifiedData(i){let e=this.uploadData()||{};this.uploadData.set(Se(I({},e),{modifiedHtml:i.modifiedHtml,modifiedUrl:i.modifiedUrl}))}mergeOriginalData(i){let e=this.uploadData()||{};this.uploadData.set(Se(I({},e),{originalHtml:i.originalHtml,originalUrl:i.originalUrl}))}resetUploadFlow(){this.selectedUploadType.set("url"),this.uploadData.set(null)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};var Km=`
<!DOCTYPE html>
<html class="no-js" dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Personal income tax - Canada.ca</title>
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <script src="//assets.adobedtm.com/be5dfd287373/abb618326704/launch-3eac5e076135.min.js"><\/script>
    <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
    <link rel="canonical" href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html" />
    <link rel="alternate" hreflang="en"
        href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html" />
    <link rel="alternate" hreflang="fr"
        href="https://www.canada.ca/fr/services/impots/impot-sur-le-revenu/impot-sur-le-revenu-des-particuliers.html" />
    <meta name="description"
        content="Who should file a tax return, filing and payment dates, filing options to report income and claim deductions, how to pay taxes, and options after filing. " />
    <meta name="keywords"
        content="cra tax return, income tax, tax filing, filing options, t1, reporting income, claiming deductions, paying taxes, netfile access code, balance owing, refunds, notice of assessment, noa, tax rates and income brackets, due dates, payment dates, interest and penalties, help others with taxes" />
    <meta name="author" content="Canada Revenue Agency" />
    <meta name="dcterms.title" content="Personal income tax" />
    <meta name="dcterms.description"
        content="Who should file a tax return, filing and payment dates, filing options to report income and claim deductions, how to pay taxes, and options after filing. " />
    <meta name="dcterms.creator" content="Canada Revenue Agency" />
    <meta name="dcterms.language" title="ISO639-2/T" content="eng" />
    <meta name="dcterms.issued" title="W3CDTF" content="2020-10-27" />
    <meta name="dcterms.modified" title="W3CDTF" content="2025-07-15" />
    <meta name="dcterms.spatial" content="Canada" />
    <meta name="dcterms.identifier" content="Canada_Revenue_Agency" />
    <!-- MWS-1244 Include Facebook metadata on page -->
    <meta prefix="fb: https://www.facebook.com/2008/fbml" property="fb:pages"
        content="378967748836213, 160339344047502, 184605778338568, 237796269600506, 10860597051, 14498271095, 209857686718, 160504807323251, 111156792247197, 113429762015861, 502566449790031, 312292485564363, 1471831713076413, 22724568071, 17294463927, 1442463402719857, 247990812241506, 730097607131117, 1142481292546228, 1765602380419601, 131514060764735, 307780276294187, 427238637642566, 525934210910141, 1016214671785090, 192657607776229, 586856208161152, 1146080748799944, 408143085978521, 490290084411688, 163828286987751, 565688503775086, 460123390028, 318424514044, 632493333805962, 370233926766473, 173004244677, 1562729973959056, 362400293941960, 769857139754987, 167891083224996, 466882737009651, 126404198009505, 135409166525475, 664638680273646, 169011506491295, 217171551640146, 182842831756930, 1464645710444681, 218822426028, 218740415905, 123326971154939, 125058490980757, 1062292210514762, 1768389106741505, 310939332270090, 285960408117397, 985916134909087, 655533774808209, 1522633664630497, 686814348097821, 230798677012118, 320520588000085, 103201203106202, 273375356172196, 61263506236, 353102841161, 1061339807224729, 1090791104267764, 395867780593657, 1597876400459657, 388427768185631, 937815283021844, 207409132619743, 1952090675003143, 206529629372368, 218566908564369, 175257766291975, 118472908172897, 767088219985590, 478573952173735, 465264530180856, 317418191615817, 428040827230778, 222493134493922, 196833853688656, 194633827256676, 252002641498535, 398018420213195, 265626156847421, 202442683196210, 384350631577399, 385499078129720, 178433945604162, 398240836869162, 326182960762584, 354672164565195, 375081249171867, 333050716732105, 118996871563050, 240349086055056, 119579301504003, 185184131584797, 333647780005544, 306255172770146, 369589566399283, 117461228379000, 349774478396157, 201995959908210, 307017162692056, 145928592172074, 122656527842056">
    <!-- MWS-1890 JSON-LD output -->
    <link rel="stylesheet" href="/etc/designs/canada/wet-boew/css/wet-boew.min.css" />
    <link rel="stylesheet" href="/etc/designs/canada/wet-boew/css/theme.css" />
    <link href="https://cra-arc.gc.ca/wet-boew/css/custom/theme-topic.css" rel="stylesheet">
    <noscript>
        <link rel="stylesheet" href="/etc/designs/canada/wet-boew/css/noscript.min.css" />
    </noscript>
    <link href="/etc/designs/canada/wet-boew/assets/favicon.ico" rel="icon" type="image/x-icon" />
    <script>!function (a) { var e = "https://s.go-mpulse.net/boomerang/", t = "addEventListener"; if ("False" == "True") a.BOOMR_config = a.BOOMR_config || {}, a.BOOMR_config.PageParams = a.BOOMR_config.PageParams || {}, a.BOOMR_config.PageParams.pci = !0, e = "https://s2.go-mpulse.net/boomerang/"; if (window.BOOMR_API_key = "KBFUZ-C9D7G-RB8SX-GRGEN-HGMC9", function () { function n(e) { a.BOOMR_onload = e && e.timeStamp || (new Date).getTime() } if (!a.BOOMR || !a.BOOMR.version && !a.BOOMR.snippetExecuted) { a.BOOMR = a.BOOMR || {}, a.BOOMR.snippetExecuted = !0; var i, _, o, r = document.createElement("iframe"); if (a[t]) a[t]("load", n, !1); else if (a.attachEvent) a.attachEvent("onload", n); r.src = "javascript:void(0)", r.title = "", r.role = "presentation", (r.frameElement || r).style.cssText = "width:0;height:0;border:0;display:none;", o = document.getElementsByTagName("script")[0], o.parentNode.insertBefore(r, o); try { _ = r.contentWindow.document } catch (O) { i = document.domain, r.src = "javascript:var d=document.open();d.domain='" + i + "';void(0);", _ = r.contentWindow.document } _.open()._l = function () { var a = this.createElement("script"); if (i) this.domain = i; a.id = "boomr-if-as", a.src = e + "KBFUZ-C9D7G-RB8SX-GRGEN-HGMC9", BOOMR_lstart = (new Date).getTime(), this.body.appendChild(a) }, _.write("<bo" + 'dy onload="document._l();">'), _.close() } }(), "".length > 0) if (a && "performance" in a && a.performance && "function" == typeof a.performance.setResourceTimingBufferSize) a.performance.setResourceTimingBufferSize(); !function () { if (BOOMR = a.BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {}, !BOOMR.plugins.AK) { var e = "" == "true" ? 1 : 0, t = "", n = "jihaowixzgwh62dx6cma-f-4fa20d003-clientnsv4-s.akamaihd.net", i = "false" == "true" ? 2 : 1, _ = { "ak.v": "39", "ak.cp": "789605", "ak.ai": parseInt("231651", 10), "ak.ol": "0", "ak.cr": 19, "ak.ipv": 4, "ak.proto": "h3", "ak.rid": "c11d898", "ak.r": 47372, "ak.a2": e, "ak.m": "dscb", "ak.n": "essl", "ak.bpcip": "74.14.7.0", "ak.cport": 54553, "ak.gh": "23.195.36.173", "ak.quicv": "0x00000001", "ak.tlsv": "tls1.3", "ak.0rtt": "", "ak.0rtt.ed": "", "ak.csrc": "-", "ak.acc": "", "ak.t": "1752690840", "ak.ak": "hOBiQwZUYzCg5VSAfCLimQ==GfSG1NBpaEm1uHU8dDT46T3CilDTDcCqVh9Tp88/WFVlnu6mJln2iKbSRezA0d5nBfkIdSWaE6y0kcPpQT9w/w2aVlmrpaN4zgDZYPtt1yBOID9aI5WsujiQ2HpbH1m3dRV0KDLCkTceIkE4pr8SgnnROdMSnbHPtOKoJ8gdWaGha0GV1LKQDkqvqZ9lpyD5rCnpFqiccDX91NtbGbuREJEjeF+QOpnHcT1OWOWAOLhn7A2TRErvspUqojrxk0Oncr8vPGx1MCXNunU6BrMSLhncxZzIyx39Qw/kz2+TEG+htTI112YAsoZqaGo9VK0IL884jXMJpGsZpawkk2sBnbXR9ISFMuHOJt0IZZJ/pFra7vugu9eKLJq471IFGLBg776n/uxiUKRH3hmbJWjs1gNzGUye+p9PF30dPYU1kco=", "ak.pv": "810", "ak.dpoabenc": "", "ak.tf": i }; if ("" !== t) _["ak.ruds"] = t; var o = { i: !1, av: function (e) { var t = "http.initiator"; if (e && (!e[t] || "spa_hard" === e[t])) _["ak.feo"] = void 0 !== a.aFeoApplied ? 1 : 0, BOOMR.addVar(_) }, rv: function () { var a = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.0rtt.ed", "ak.r", "ak.acc", "ak.t", "ak.tf"]; BOOMR.removeVar(a) } }; BOOMR.plugins.AK = { akVars: _, akDNSPreFetchDomain: n, init: function () { if (!o.i) { var a = BOOMR.subscribe; a("before_beacon", o.av, null, null), a("onbeacon", o.rv, null, null), o.i = !0 } return this }, is_complete: function () { return !0 } } } }() }(window);<\/script>
</head>

<body vocab="http://schema.org/" typeof="WebPage" resource="#wb-webpage">
    <nav>
        <ul id="wb-tphp">
            <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>
            <li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to &#34;About this
                    site&#34;</a></li>
        </ul>
    </nav>
    <header>
        <div id="wb-bnr" class="container">
            <div class="row">
                <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
                    <h2 class="wb-inv">Language selection</h2>
                    <ul class="list-inline mrgn-bttm-0">
                        <li>
                            <a lang="fr" hreflang="fr"
                                href="/fr/services/impots/impot-sur-le-revenu/impot-sur-le-revenu-des-particuliers.html">
                                <span class="hidden-xs">Fran\xE7ais</span>
                                <abbr title="Fran\xE7ais"
                                    class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">fr</abbr>
                            </a>
                        </li>
                    </ul>
                </section>
                <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
                    <a href="https://www.canada.ca/en.html" property="URL">
                        <img src="/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="Government of Canada"
                            property="logo">
                        <span class="wb-inv"> /
                            <span lang="fr">Gouvernement du Canada</span>
                        </span></a>
                    <meta property="name" content="Government of Canada">
                    <meta property="areaServed" typeof="Country" content="Canada">
                    <link property="logo" href="/etc/designs/canada/wet-boew/assets/wmms-blk.svg">
                </div>
                <section id="wb-srch"
                    class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">
                    <h2>Search</h2>
                    <form action="/en/revenue-agency/search.html" method="get" name="cse-search-box" role="search">
                        <div class="form-group wb-srch-qry">
                            <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>
                            <input name="cdn" value="canada" type="hidden" />
                            <input name="st" value="s" type="hidden" />
                            <input name="num" value="10" type="hidden" />
                            <input name="langs" value="en" type="hidden" />
                            <input name="st1rt" value="1" type="hidden" />
                            <input name="s5bm3ts21rch" value="x" type="hidden" />
                            <input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q"
                                type="search" value="" size="34" maxlength="170" placeholder="Search CRA" /> <datalist
                                id="wb-srch-q-ac"></datalist>
                        </div>
                        <div class="form-group submit">
                            <button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub">
                                <span class="glyphicon-search glyphicon"></span>
                                <span class="wb-inv">Search</span></button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
        <hr />
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <nav class="gcweb-menu" typeof="SiteNavigationElement">
                        <h2 class="wb-inv">Menu</h2>
                        <button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main
                            </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button>
                        <ul role="menu" aria-orientation="vertical"
                            data-ajax-replace="/content/dam/canada/sitemenu/sitemenu-v2-en.html">
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration
                                    and citizenship</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/">Travel
                                    and tourism</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/business.html">Business and industry</a>
                            </li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/health.html">Health</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/environment.html">Environment and natural
                                    resources</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/defence.html">National security and
                                    defence</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a>
                            </li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/policing.html">Policing, justice and
                                    emergencies</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/transport.html">Transport and
                                    infrastructure</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="http://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the
                                    world</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/science.html">Science and innovation</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-xs-5 col-xs-offset-7 col-md-offset-0 col-md-4">
                    <section id="wb-so">
                        <h2 class="wb-inv">Sign in</h2><a class="btn btn-primary"
                            href="/en/revenue-agency/services/e-services/cra-login-services.html"><span
                                class="visible-xs">Sign in</span><span class="hidden-xs">CRA sign in</span></a>
                    </section>
                </div>
            </div>
        </div>
        <nav id="wb-bc" property="breadcrumb">
            <h2 class="wb-inv">You are here:</h2>
            <div class="container">
                <ol class="breadcrumb">
                    <li><a href='/en.html'>Home</a></li>
                    <li><a href='/en/services/taxes.html'>Taxes</a></li>
                    <li><a href='/en/services/taxes/income-tax.html'>Income tax</a></li>
                </ol>
            </div>
        </nav>
    </header>
    <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
        <div class="mwsgeneric-base-html parbase section">
            <div class="provisional profile">
                <div class="container">
                    <div class="intro mrgn-bttm-md">
                        <h1 property="name" id="wb-cont">Personal income tax </h1>
                    </div>
                    <p><a href="#who">Who should file</a> a tax return, how to get ready and file taxes, payment and filing due dates,
                        reporting income and claiming deductions, and how to make payments or check the status of your
                        refund.</p>
                </div>
            </div>
            <section class="provisional most-requested-bullets well well-sm brdr-0 brdr-rds-0">
                <div class="container">
                    <div class="row">
                        <div class="pddng-r-0 col-md-2">
                            <h2 class="mrgn-tp-md">
                                Most requested
                            </h2>
                        </div>
                        <div class="col-md-10">
                            <!-- change to colcount-md-1 if you only have 2-3 most requested items -->
                            <ul class="wb-eqht mrgn-tp-md mrgn-bttm-md colcount-md-2">
                                <li><a
                                        href="/en/services/taxes/income-tax/personal-income-tax/how-file/tax-software.html">File
                                        a return with tax software</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html">File
                                        a paper return</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips.html">Tax
                                        slips</a></li>
                                <li><a href="/en/revenue-agency/services/forms-publications.html">Forms and publications
                                    </a></li>
                                <li><a
                                        href="/en/revenue-agency/services/payments/payments-cra/individual-payments/make-payment.html">Make
                                        a payment</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/refunds.html">Tax
                                        refund</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/change-your-address.html">Change
                                        your address</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit/individuals.html">Direct
                                        deposit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="row">
                    <section class="gc-srvinfo col-md-12">
                        <div class="wb-eqht row">
                            <div class="col-md-6 col-lg-4">
                                <h3 id="who"><a
                                        href="/en/services/taxes/income-tax/personal-income-tax/who-should-file-tax.html">Who
                                        should file</a></h3>
                                <p>Determine if you need to file a tax return, what are your tax obligations</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html">Get
                                        ready to file</a></h3>
                                <p>What's new for 2024, get tax slips, NETFILE access code, update your information</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/how-file.html">How to
                                        file</a></h3>
                                <p>File using tax software or by paper, get help from a tax specialist or service</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/revenue-agency/services/payments/payments-cra.html">Paying your
                                        taxes</a></h3>
                                <p>Find options to pay a debt now or over time, pay 2025 taxes by instalments</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/after-you-file.html">After
                                        you file</a></h3>
                                <p>Get your notice of assessment (NOA), refund, proof of income, pay a balance owing,
                                    change a return</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/help-others.html">Help
                                        others with their taxes</a></h3>
                                <p>Authorized representatives, free tax clinics, filing for someone who died</p>
                            </div>
                        </div>
                        <h2 class="mrgn-bttm-0">Understand how taxes work</h2>
                        <div class="wb-eqht row">
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html">Due
                                        dates and payment dates</a></h3>
                                <p>Filing and payment due dates for taxes, contributions, instalments or other amounts
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/reporting-income.html">
                                        Types of income to report
                                    </a></h3>
                                <p>What you need to report as income, how to enter amounts on your tax return</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html">
                                        Deductions, credits, and expenses to claim
                                    </a></h3>
                                <p>Deductions, credits, and expenses to reduce the amount of tax you have to pay</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html">Tax
                                        rates and income brackets
                                    </a></h3>
                                <p>Find federal, provincial and territorial tax rates, understand income tax brackets
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties.html">Interest
                                        and penalties</a></h3>
                                <p>When and how interest charges and penalties are applied, late-filing, other penalties
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/revenue-agency/services/tax/individuals/educational-programs.html">Learn
                                        about your taxes</a></h3>
                                <p>Learn about our tax system, how it works, why we pay taxes</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="well well-sm brdr-0 brdr-rds-0 mrgn-tp-lg">
                <div class="container">
                    <h2 class="mrgn-tp-md h3">Focus on</h2>
                    <ul class="mrgn-tp-md mrgn-bttm-md colcount-md-2">
                        <li><a
                                href="/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities.html">Persons
                                with disabilities and their caregivers</a></li>
                        <li><a
                                href="/en/revenue-agency/services/tax/individuals/segments/changes-your-taxes-when-you-retire-turn-65-years-old.html">Adults
                                65 years and older</a></li>
                        <li><a
                                href="/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html">Newcomers
                                to Canada</a></li>
                        <li><a href="/en/revenue-agency/services/tax/individuals/segments/students.html">Students</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="provisional gc-prtts mrgn-tp-0">
                        <div class="row">
                            <section class="provisional col-md-12 mrgn-bttm-md mrgn-tp-0">
                                <h2>Features</h2>
                                <div class="wb-eqht row">
                                    <!-- feature 1 -->
                                    <div class="col-md-4 col-sm-6 mrgn-lft-0">
                                        <div class="well eqht-trgt"><a
                                                href="/en/revenue-agency/campaigns/dedicated-telephone-service.html"
                                                data-gc-analytics="promo:promotionalfeature">
                                                <figure>
                                                    <div> <img
                                                            src="/content/dam/cra-arc/camp-promo/features/ft-20250516-360x203.jpg"
                                                            alt="" class="img-responsive thumbnail mrgn-bttm-sm"> </div>
                                                    <figcaption>Dedicated Telephone Service</figcaption>
                                                    <div>
                                                        <p>Income tax service providers&nbsp;\u2013 register for our free
                                                            telephone service for help with your interpretive income tax
                                                            questions.</p>
                                                    </div>
                                                </figure>
                                            </a> </div>
                                    </div>
                                    <!-- feature 2 -->
                                    <div class="col-md-4 col-sm-6 mrgn-rght-0 mrgn-lft-0">
                                        <div class="well eqht-trgt"><a
                                                href="/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals/filing-dates-tax-return.html"
                                                data-gc-analytics="promo:promotionalfeature">
                                                <figure>
                                                    <div> <img
                                                            src="/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-19.jpg"
                                                            alt="" class="img-responsive thumbnail mrgn-bttm-sm"> </div>
                                                    <figcaption>Self-employed deadline</figcaption>
                                                    <div>
                                                        <p>Self-employed? Make sure to file before the deadline!</p>
                                                    </div>
                                                </figure>
                                            </a> </div>
                                    </div>
                                    <!-- feature 3 -->
                                    <div class="col-md-4 col-sm-6 mrgn-rght-0">
                                        <div class="well eqht-trgt"><a
                                                href="/en/services/taxes/income-tax/personal-income-tax/after-you-file/change-return.html"
                                                data-gc-analytics="promo:promotionalfeature">
                                                <figure>
                                                    <div>
                                                        <img src="/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-20.jpg"
                                                            alt="" class="img-responsive thumbnail mrgn-bttm-sm">
                                                    </div>
                                                    <figcaption>Request a change to your tax return online</figcaption>
                                                    <div>
                                                        <p>For faster service, submit your change request online.</p>
                                                    </div>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <section class="gc-contributors col-md-8">
                        <h2>From:</h2>
                        <ul>
                            <li><a href="/en/revenue-agency.html">Canada Revenue Agency</a></li>
                        </ul>
                    </section>
                    <section class="col-md-4 mrgn-bttm-sm">
                        <div data-ajax-replace="/content/dam/cra-arc/includes/social-media.txt#social-media-en">
                        </div>
                    </section>
                </div>
                <charlie></charlie>
                <section data-ajax-replace="/content/dam/cra-arc/includes/chatbot.txt#eng"></section>
            </div>
            <div class="container pagedetails ">
                <h2 class="wb-inv">Page details</h2>
                <div class="row">
                    <div class="col-sm-8 col-md-9 col-lg-9">
                        <div class="wb-disable-allow"
                            data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html"
                            data-feedback-section="PTR" data-feedback-theme="Taxes"></div>
                    </div>
                </div>
                <dl id="wb-dtmd">
                    <dt>
                        Date modified:
                    </dt>
                    <dd>
                        <time property="dateModified">2025-07-09</time>
                    </dd>
                </dl>
            </div>
        </div>
    </main>
    <footer>
        <footer id="wb-info">
            <h2 class="wb-inv">About this site</h2>
            <div class="gc-contextual">
                <div class="container">
                    <nav>
                        <h3>Canada Revenue Agency (CRA)</h3>
                        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
                            <li><a href="https://www.canada.ca/en/revenue-agency/corporate/contact-information.html">Contact
                                    the CRA</a></li>
                            <li><a href="https://www.canada.ca/en/revenue-agency/services/update-information-cra.html">Update
                                    your information</a></li>
                            <li><a
                                    href="https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra.html">About
                                    the CRA</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="gc-main-footer">
                <div class="container">
                    <nav>
                        <h3>Government of Canada</h3>
                        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
                            <li><a href="https://www.canada.ca/en/contact.html">All Contacts</a></li>
                            <li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a>
                            </li>
                            <li><a href="https://www.canada.ca/en/government/system.html">About government</a></li>
                        </ul>
                        <h4><span class="wb-inv">Themes and topics</span></h4>
                        <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                            <li><a href="https://www.canada.ca/en/services/jobs.html">Jobs</a></li>
                            <li><a href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and
                                    citizenship</a></li>
                            <li><a href="https://travel.gc.ca/">Travel and tourism</a></li>
                            <li><a href="https://www.canada.ca/en/services/business.html">Business</a></li>
                            <li><a href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
                            <li><a href="https://www.canada.ca/en/services/health.html">Health</a></li>
                            <li><a href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
                            <li><a href="https://www.canada.ca/en/services/environment.html">Environment and natural
                                    resources</a></li>
                            <li><a href="https://www.canada.ca/en/services/defence.html">National security and
                                    defence</a></li>
                            <li><a href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a>
                            </li>
                            <li><a href="https://www.canada.ca/en/services/policing.html">Policing, justice and
                                    emergencies</a></li>
                            <li><a href="https://www.canada.ca/en/services/transport.html">Transport and
                                    infrastructure</a></li>
                            <li><a href="https://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the
                                    world</a></li>
                            <li><a href="https://www.canada.ca/en/services/finance.html">Money and finance</a></li>
                            <li><a href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li>
                            <li><a href="https://www.canada.ca/en/services/indigenous-peoples.html">Indigenous
                                    peoples</a></li>
                            <li><a href="https://www.canada.ca/en/services/veterans.html">Veterans and military</a></li>
                            <li><a href="https://www.canada.ca/en/services/youth.html">Youth</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="gc-sub-footer">
                <div class="container d-flex align-items-center">
                    <nav>
                        <h3 class="wb-inv">Government of Canada Corporate</h3>
                        <ul>
                            <li><a href="https://www.canada.ca/en/social.html">Social media</a></li>
                            <li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li>
                            <li><a href="https://www.canada.ca/en/government/about.html">About Canada.ca</a></li>
                            <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
                            <li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>
                        </ul>
                    </nav>
                    <div class="wtrmrk align-self-end">
                        <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg"
                            alt="Symbol of the Government of Canada" />
                    </div>
                </div>
            </div>
        </footer>
    </footer>
    <script type="text/javascript">_satellite.pageBottom();<\/script>
    <script src="/etc.clientlibs/clientlibs/granite/jquery.min.js"><\/script>
    <script src="/etc.clientlibs/clientlibs/granite/utils.min.js"><\/script>
    <script src="/etc/designs/canada/clientlib-publish.min.js"><\/script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"><\/script>
    <script src="/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
    <script src="/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
    <script src="https://d14b1ho5p6410z.cloudfront.net/bundle-chatbot.js" type="module"><\/script>
</body>

</html>
`,Qm=`
<div class="mwsgeneric-base-html parbase section">
    <div class="provisional profile">
        <div class="container">
            <div class="intro mrgn-bttm-md">
                <h1 property="name" id="wb-cont">Personal income tax</h1>
            </div>
            <p>Learn who should file a tax return, how to get ready, when and how to file, and how to check your refund
                or make a payment.</p>
        </div>
    </div>
    <section class="provisional most-requested-bullets well well-sm brdr-0 brdr-rds-0">
        <div class="container">
            <div class="row">
                <div class="pddng-r-0 col-md-2">
                    <h2 class="mrgn-tp-md">Most requested</h2>
                </div>
                <div class="col-md-10">
                    <ul class="wb-eqht mrgn-tp-md mrgn-bttm-md colcount-md-2">
                        <li><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file/tax-software.html"
                                target="_blank">File online with tax software</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html"
                                target="_blank">File by paper</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips.html"
                                target="_blank">Find your tax slips</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications.html"
                                target="_blank">Get forms and guides</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/make-payment.html"
                                target="_blank">Make a tax payment</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/refunds.html"
                                target="_blank">Track your tax refund</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/change-your-address.html"
                                target="_blank">Update your address</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit/individuals.html"
                                target="_blank">Set up direct deposit</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row">
            <section class="gc-srvinfo col-md-12">
                <div class="wb-eqht row">
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/who-should-file-tax.html"
                                target="_blank">Who should file</a></h3>
                        <p>Find out if you need to file a tax return and what your responsibilities are.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html"
                                target="_blank">Get ready to file</a></h3>
                        <p>See what\u2019s new for 2024, find your slips, access NETFILE, and update your info.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file.html"
                                target="_blank">How to file</a></h3>
                        <p>Learn how to file your taxes online or by paper, or get help if needed.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra.html"
                                target="_blank">Paying your taxes</a></h3>
                        <p>Explore how to pay now or over time, including instalments for 2025.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file.html"
                                target="_blank">After you file</a></h3>
                        <p>Get your Notice of Assessment, refund, proof of income, or make changes.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/help-others.html"
                                target="_blank">Help others</a></h3>
                        <p>Act for someone else, use free tax clinics, or file for someone who died.</p>
                    </div>
                </div>
                <h2 class="mrgn-bttm-0">Understand how taxes work</h2>
                <div class="wb-eqht row">
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html"
                                target="_blank">Due dates and payments</a></h3>
                        <p>Check deadlines for filing, payments, instalments, and other contributions.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/reporting-income.html"
                                target="_blank">Income to report</a></h3>
                        <p>What counts as income and how to include it on your return.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html"
                                target="_blank">Deductions and credits</a></h3>
                        <p>Lower your taxes by claiming deductions, credits, and expenses.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html"
                                target="_blank">Tax rates</a></h3>
                        <p>See federal, provincial, and territorial tax rates and brackets.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties.html"
                                target="_blank">Interest and penalties</a></h3>
                        <p>When interest or penalties apply, like for late filing or other issues.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs.html"
                                target="_blank">Learn about taxes</a></h3>
                        <p>Understand how Canada's tax system works and why we pay taxes.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="well well-sm brdr-0 brdr-rds-0 mrgn-tp-lg">
        <div class="container">
            <h2 class="mrgn-tp-md h3">Focus on</h2>
            <ul class="mrgn-tp-md mrgn-bttm-md colcount-md-2">
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities.html"
                        target="_blank">People with disabilities and caregivers</a></li>
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/changes-your-taxes-when-you-retire-turn-65-years-old.html"
                        target="_blank">Seniors (65 and older)</a></li>
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html"
                        target="_blank">Newcomers to Canada</a></li>
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/students.html"
                        target="_blank">Students</a></li>
            </ul>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="provisional gc-prtts mrgn-tp-0">
                <div class="row">
                    <section class="provisional col-md-12 mrgn-bttm-md mrgn-tp-0">
                        <h2>Features</h2>
                        <div class="wb-eqht row">
                            <div class="col-md-4 col-sm-6 mrgn-lft-0">
                                <div class="well eqht-trgt">
                                    <a href="https://www.canada.ca/en/revenue-agency/campaigns/dedicated-telephone-service.html"
                                        target="_blank">
                                        <figure>
                                            <div><img
                                                    src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/ft-20250516-360x203.jpg"
                                                    alt="" class="img-responsive thumbnail mrgn-bttm-sm"></div>
                                            <figcaption>Dedicated Telephone Service</figcaption>
                                            <div>
                                                <p>Tax professionals can register for free phone help with tax
                                                    questions.</p>
                                            </div>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mrgn-rght-0 mrgn-lft-0">
                                <div class="well eqht-trgt">
                                    <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals/filing-dates-tax-return.html"
                                        target="_blank">
                                        <figure>
                                            <div><img
                                                    src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-19.jpg"
                                                    alt="" class="img-responsive thumbnail mrgn-bttm-sm"></div>
                                            <figcaption>Self-employed deadline</figcaption>
                                            <div>
                                                <p>If you're self-employed, don\u2019t miss the deadline to file!</p>
                                            </div>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mrgn-rght-0">
                                <div class="well eqht-trgt">
                                    <a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file/change-return.html"
                                        target="_blank">
                                        <figure>
                                            <div><img
                                                    src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-20.jpg"
                                                    alt="" class="img-responsive thumbnail mrgn-bttm-sm"></div>
                                            <figcaption>Change your return online</figcaption>
                                            <div>
                                                <p>Need to fix your tax return? Do it online for faster service.</p>
                                            </div>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <section class="gc-contributors col-md-8">
                <h2>From:</h2>
                <ul>
                    <li><a href="https://www.canada.ca/en/revenue-agency.html" target="_blank">Canada Revenue Agency</a>
                    </li>
                </ul>
            </section>
            <section class="col-md-4 mrgn-bttm-sm">
                <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
                    <div>
                        <div id="social-media-en" class="gc-followus gc-followus-horizontal">
                            <h2>On social media</h2>
                            <ul class="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/canrevagency/" rel="external"
                                        class="social-lnk facebook" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            Facebook
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/CanRevAgency" rel="external" class="x-social"
                                        target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            X
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/CanRevAgency" rel="external"
                                        class="social-lnk youtube" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            YouTube
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.instagram.com/canrevagency" rel="external"
                                        class="social-lnk instagram" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            Instagram
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/cra-arc" rel="external"
                                        class="social-lnk linkedin" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            LinkedIn
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section data-ajax-replace="/content/dam/cra-arc/includes/chatbot.txt#eng"></section>
    </div>
    <div class="container pagedetails">
        <h2 style="border: 2px solid rgb(111, 159, 255);">Page details</h2>
        <div class="row">
            <div class="col-sm-8 col-md-9 col-lg-9">
                <div class="wb-disable-allow"
                    data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html"
                    data-feedback-section="PTR" data-feedback-theme="Taxes"></div>
            </div>
        </div>
        <dl id="wb-dtmd">
            <dt>Date modified:</dt>
            <dd><time property="dateModified">2025-07-09</time></dd>
        </dl>
    </div>
</div>`,Ym=`
<div class="container">
    <div class="row">
        <!-- showing the basic doormat pattern - refer to the Services and information documentation for options -->
        <section class="gc-srvinfo col-md-12">
            <h2 class="wb-inv">Services and information</h2>
            <div class="wb-eqht row">
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/income-tax.html">Income tax</a></h3>
                    <p>Personal, business, corporation, trust, and non-resident income tax, taxes for someone who died
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/payments.html">Payments</a></h3>
                    <p>How to send money to the CRA, receive your payments, options if you are unable to pay a debt</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/child-and-family-benefits.html">Tax credits and benefits for
                            individuals</a></h3>
                    <p>Payment dates, eligibility for children, caregivers, people with disabilities, workers and others
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html">GST/HST</a>
                    </h3>
                    <p>GST/HST accounts, collect and remit the tax, file a return, claim rebates, search the GST/HST
                        registry</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/payroll.html">Payroll</a></h3>
                    <p>Payroll accounts, deductions and contributions, information returns, and benefits and allowances
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/business-number.html">Business number</a></h3>
                    <p>When and how to register for a business number, CRA program accounts, and other government
                        programs</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/charities.html">Charities and giving</a></h3>
                    <p>How to register and run a charity, charities listings, and charitable tax credits</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/savings-and-pension-plans.html">Savings and pension plans</a></h3>
                    <p>Tax-free savings accounts, registered savings plans, pooled pension plans, and plan
                        administration</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/excise-taxes-duties-and-levies.html">Excise and specialty taxes</a>
                    </h3>
                    <p>Duties, customs, charges, tax on underused housing, luxury items, digital services revenue</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/corporate/scams-fraud.html">Scams and fraud</a></h3>
                    <p>Protect yourself against scams, how to report scams, identity theft, or tax cheating</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/support-difficult-situations.html">Support in difficult
                            situations</a></h3>
                    <p>Support in situations of abuse or disaster, CRA debts during financial hardship, past COVID-19
                        payments</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance.html">Compliance
                            and enforcement</a></h3>
                    <p>Reporting obligations, debt collection, audits, tax relief, objections or appeals</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/make-a-service-complaint.html">CRA Service feedback</a>
                    </h3>
                    <p>Send feedback to the CRA about a service experience</p>
                </div>
            </div>
        </section>
    </div>
</div>`,Zm=`
<div class="container">
    <div class="row">
        <!-- showing the basic doormat pattern - refer to the Services and information documentation for options -->
        <section class="gc-srvinfo col-md-12">
            <h2 class="wb-inv">Services and information</h2>
            <div class="wb-eqht row">
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/income-tax.html">Income tax</a></h3>
                    <p>Personal, business, corporate, trust, and non-resident income tax, taxes for someone who has
                        passed away</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/payments.html">Payments</a></h3>
                    <p>How to pay the CRA, get your payments, and what to do if you can\u2019t pay a debt</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/child-and-family-benefits.html">Tax credits and benefits for
                            individuals</a></h3>
                    <p>Payment dates and eligibility for children, caregivers, people with disabilities, workers, and
                        others</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html">GST/HST</a>
                    </h3>
                    <p>GST/HST accounts, how to collect and send the tax, file returns, claim rebates, and search the
                        registry</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/payroll.html">Payroll</a></h3>
                    <p>Payroll accounts, deductions and contributions, information returns, benefits, and allowances</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/business-number.html">Business number</a></h3>
                    <p>When and how to register for a business number, CRA program accounts, and other government
                        services</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/charities.html">Charities and giving</a></h3>
                    <p>How to register and manage a charity, search charity listings, and claim charitable tax credits
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/savings-and-pension-plans.html">Savings and pension plans</a></h3>
                    <p>Tax-free savings accounts, registered plans, pooled pension plans, and how to manage them</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/excise-taxes-duties-and-levies.html">Excise and specialty taxes</a>
                    </h3>
                    <p>Duties, customs, charges, taxes on underused housing, luxury goods, and digital services</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/corporate/scams-fraud.html">Scams and fraud</a></h3>
                    <p>Protect yourself from scams, report fraud, identity theft, or tax cheating</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/support-difficult-situations.html">Support in difficult
                            situations</a></h3>
                    <p>Help for situations like abuse or natural disasters, CRA debts during financial hardship,
                        COVID-19 support</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance.html">Compliance
                            and enforcement</a></h3>
                    <p>What you must report, collections, audits, tax relief, and how to file objections or appeals</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/make-a-service-complaint.html">CRA Service feedback</a>
                    </h3>
                    <p>Share your feedback about a service experience with the CRA</p>
                </div>
            </div>
        </section>
    </div>
</div>`,Xm=`
<h1><a id="_tvxp2n7qvrhi"></a><strong>Who has to file a return</strong></h1>
<p>File a 2024 return if:</p>
<ul>
    <li>The CRA sent you a request to file a return</li>
    <li>You have to pay tax or want to claim a refund</li>
    <li>You or your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-address-information/marital-status.html">spouse
            or common-law partner</a> want to begin or continue receiving credits and benefits, such as:<ul>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html">Canada
                    child benefit</a> (CCB) and related provincial and territorial benefits</li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html">goods
                    and services tax/harmonized sales tax</a> (GST/HST) credit and related provincial and territorial
                credits and benefits</li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-carbon-rebate.html">Canada
                    Carbon Rebate</a> (CCR) (depending on your province or territory of residence)</li>
            <li>the <a
                    href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement.html">guaranteed
                    income supplement</a> (GIS)</li>
        </ul>
    </li>
</ul>
<h2><a id="_vzmhdfku778x"></a><strong>Note</strong></h2>
<p>If you have a spouse or common-law partner, they also have to file a return. For more information, see <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114.html">Booklet
        T4114, Canada Child Benefit and Related Federal, Provincial and Territorial Programs</a>, <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210.html">Guide
        RC4210, GST/HST Credit</a>, and <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4215.html">Guide
        RC4215, Canada Carbon Rebate</a>.</p>
<ul>
    <li>You want to claim the <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html">Canada
            workers benefit</a> (CWB) and receive advanced Canada workers benefit (ACWB) payments</li>
    <li>You and your spouse or common-law partner are jointly electing to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">split
            pension income</a></li>
    <li>You disposed of capital property (which may be a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/principal-residence-other-real-estate.html">principal
            residence</a>) or realized a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains.html">taxable
            capital gain</a> in 2024</li>
    <li>You have to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc2">repay
            all or part of your old age security (OAS) benefits</a> or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc1">employment
            insurance (EI) benefits</a></li>
    <li>You have not repaid all of the amounts that you withdrew from your registered retirement savings plan (RRSP)
        under the <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html">Home
            Buyers' Plan</a> (HBP) or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan.html">Lifelong
            Learning Plan</a> (LLP)</li>
    <li>You have to <a
            href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/contributions.html">contribute to the
            Canada Pension Plan</a> (CPP) for 2024 (your total net self-employment income and pensionable employment
        income is <strong>more than $3,500</strong>)</li>
    <li>You are <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-42120-employment-insurance-premiums-payable-on-self-employment-other-eligible-earnings.html">paying
            EI premiums on self-employment income or other eligible earnings</a></li>
    <li>You incurred a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html">non-capital
            loss</a> in 2024 that you want to be able to apply to other years</li>
    <li>You want to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts/transferring-carrying-forward-amounts.html">transfer
            unused tuition fees or carry forward unused tuition, education and textbook amounts</a> to a future year
    </li>
    <li>You want to report income that would allow you to contribute to an RRSP, a pooled registered pension plan (PRPP)
        or a specified pension plan (SPP) to keep your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html">RRSP
            deduction limit</a> for future years up to date (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s7.html">Schedule
            7</a>)</li>
    <li>You opened a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html">First
            home savings account</a> (FHSA) in 2023 or 2024 and want to keep your FHSA participation room up to date
        (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s15.html">Schedule
            15</a>)</li>
    <li>You want to carry forward the unused <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-41200-investment-tax-credit.html">investment
            tax credit</a> on expenditures that you incurred in 2024</li>
    <li>You want to report income that will allow you to increase your <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-training-credit.html">Canada
            training credit</a> limit</li>
</ul>
<h2><a id="_fvte9fmxb3pp"></a><strong>Deceased persons</strong></h2>
<p>If you are the legal representative (executor, administrator or liquidator) for the estate of a person who died in
    2024, you may have to file a 2024 return for that person.</p>
<p>Send the legal document that names you as the legal representative, such as a complete copy of the will, grant of
    probate or letters of administration, to the CRA.</p>
<p>If there is no legal document naming a legal representative, you may request to be the representative by completing
    <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc552.html">Form RC552, Register
        as Representative for a Deceased Person</a>.
</p>
<p>Send the document to the CRA online using <a
        href="https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html">Represent a
        Client</a> or <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/sending-a-tax-return.html">by
        mail</a> to the tax centre of the person who died.</p>
<p>For more information, go to <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/doing-taxes-someone-died.html">Doing
        taxes for someone who died</a>.</p>
<h2><a id="_tfqp7u2v3vi9"></a><strong>Forms and publications</strong></h2>
<ul>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html">Income
            Tax Package</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/non-residents.html">Income
            Tax Package for Non-Residents and Deemed Residents of Canada</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4112.html">Guide
            RC4112, Lifelong Learning Plan (LLP)</a></li>
</ul>
<h2><a id="_7fcwjqx0tush"></a><strong>Related topics</strong></h2>
<ul>
    <li><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html">Get ready
            to do your taxes</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html">Line
            22200 \u2013 Deduction for CPP or QPP contributions on self-employment income and other earnings</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html">Line
            23500 \u2013 Social benefits repayment</a></li>
</ul>`,Jm=`
<h1><a id="_tvxp2n7qvrhi"></a><strong>Who needs to file a tax return</strong></h1>
<p>File a return for 2024 if any of these apply to you:</p>
<ul>
    <li>The CRA asked you to file a return</li>
    <li>You owe taxes or want to get a refund</li>
    <li>You or your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-address-information/marital-status.html">spouse
            or common-law partner</a> want to start or keep getting payments like:
        <ul>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html">Canada
                    child benefit</a> (CCB)</li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html">GST/HST
                    credit</a></li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-carbon-rebate.html">Canada
                    Carbon Rebate</a> (CCR)</li>
            <li>the <a
                    href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement.html">Guaranteed
                    Income Supplement</a> (GIS)</li>
        </ul>
    </li>
</ul>
<h2><a id="_vzmhdfku778x"></a><strong>Important</strong></h2>
<p>If you have a spouse or common-law partner, they also need to file a return. Learn more in:</p>
<ul>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114.html">T4114 -
            Canada Child Benefit guide</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210.html">RC4210 -
            GST/HST Credit guide</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4215.html">RC4215 -
            Canada Carbon Rebate guide</a></li>
</ul>
<p>You also need to file a return if:</p>
<ul>
    <li>You want to get the <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html">Canada
            workers benefit</a> or advance payments (ACWB)</li>
    <li>You and your spouse or partner are choosing to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">split
            pension income</a></li>
    <li>You sold property like a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/principal-residence-other-real-estate.html">home</a>
        or had a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains.html">capital
            gain</a></li>
    <li>You have to repay part or all of your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc2">Old
            Age Security</a> or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc1">Employment
            Insurance</a> benefits</li>
    <li>You haven\u2019t repaid money you withdrew from your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html">Home
            Buyers\u2019 Plan</a> or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan.html">Lifelong
            Learning Plan</a></li>
    <li>You need to pay into the <a
            href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/contributions.html">Canada Pension
            Plan</a> (CPP) because your 2024 income from self-employment or work is over $3,500</li>
    <li>You are paying <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-42120-employment-insurance-premiums-payable-on-self-employment-other-eligible-earnings.html">Employment
            Insurance (EI) premiums</a> on self-employment or other earnings</li>
    <li>You had a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html">non-capital
            loss</a> in 2024 and want to use it later</li>
    <li>You want to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts/transferring-carrying-forward-amounts.html">transfer
            or carry forward unused tuition, education, or textbook amounts</a></li>
    <li>You want to report income so you can keep your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html">RRSP
            limit</a> up to date (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s7.html">Schedule
            7</a>)</li>
    <li>You opened a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html">First
            Home Savings Account</a> (FHSA) in 2023 or 2024 and want to keep your participation room up to date (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s15.html">Schedule
            15</a>)</li>
    <li>You want to carry forward the unused <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-41200-investment-tax-credit.html">investment
            tax credit</a> for costs from 2024</li>
    <li>You want to report income to raise your <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-training-credit.html">Canada
            training credit</a> limit</li>
</ul>
<h2><a id="_fvte9fmxb3pp"></a><strong>If someone has died</strong></h2>
<p>If you are managing the affairs of someone who died in 2024, you may need to file their 2024 return.</p>
<p>Send the CRA a legal document that names you as the representative (such as a full copy of the will or probate
    papers).</p>
<p>If there\u2019s no legal document, you can ask to be the representative by sending <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc552.html">Form RC552</a>.</p>
<p>Send your document online through <a
        href="https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html">Represent a
        Client</a> or <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/sending-a-tax-return.html">by
        mail</a> to the tax centre of the deceased person.</p>
<p>More details: <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/doing-taxes-someone-died.html">Doing
        taxes for someone who died</a></p>
<h2><a id="_tfqp7u2v3vi9"></a><strong>Helpful forms and guides</strong></h2>
<ul>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html">General
            Income Tax Package</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/non-residents.html">Tax
            Package for Non-Residents</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4112.html">RC4112 \u2013
            Lifelong Learning Plan (LLP)</a></li>
</ul>
<h2><a id="_7fcwjqx0tush"></a><strong>Related information</strong></h2>
<ul>
    <li><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html">Getting
            ready to do your taxes</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html">CPP/QPP
            deduction for self-employment</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html">Social
            benefits repayment</a></li>
</ul>`;var xw=ky(og());var xi=class t{constructor(i){this.uploadState=i}allowedHosts=new Set(["cra-design.github.io","cra-proto.github.io","gc-proto.github.io","test.canada.ca","www.canada.ca"]);fetchAndProcess(i){return De(this,null,function*(){let e=new URL(i);if(!this.allowedHosts.has(e.host))throw new Error(`${e.host} is blocked`);let n=yield fetch(`${i}?_=${Date.now()}`);if(!n.ok)throw new Error(`Fetch failed: HTTP ${n.status}`);console.warn(`Response code: ${n.status}`);let r=yield n.text();return this.extractContent(r)})}extractContent(i){return De(this,null,function*(){let e=new DOMParser().parseFromString(i,"text/html");yield this.processAjaxReplacements(e),yield this.processJsonReplacements(e),this.processModalDialogs(e),this.updateRelativeURLs(e,"https://www.canada.ca"),this.cleanupUnnecessaryElements(e),this.displayInvisibleElements(e),this.addToc(e);let n=e.querySelector("main");n||console.warn("No <main> tag found. Using full <body> content instead.");let r=n?n.outerHTML:e.body.innerHTML.trim();return yield this.formatHtml(r)})}formatHtml(i,e){return De(this,null,function*(){try{let{default:n}=yield import("./chunk-EAVPTRKQ.js");return e==="word"&&(i=`<main  property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">${i}</main>`,i=i.replace("<h1>",'<h1 property="name" id="wb-cont" dir="ltr">').replace("<table>",'<table class="wb-tables table table-striped">')),e!=="ai"&&(i=`<body vocab="http://schema.org/" typeof="WebPage" resource="#wb-webpage" class=" cnt-wdth-lmtd">${i}</body>`),e==="ai"&&(i=this.aiCleanup(i)),n.format(i,{parser:"html",plugins:[xw],htmlWhitespaceSensitivity:"ignore"})}catch(n){return console.error("Error formatting HTML:",n),i}})}aiCleanup(i){i=i.replace(/<p>```html<\/p>/,"```html\n").replace(/<p>```<\/p>/,"\n```");let e=i.match(/```(?:html)?\r?\n([\s\S]*?)\r?\n```/);e&&(i=e[1]),i=i.replace(/^<p>/,"").replace(/<\/p>$/,"").trim();let n=new DOMParser().parseFromString(i,"text/html");return n.querySelectorAll("p").forEach(r=>{let s=r.children;s.length===1&&s[0].matches("div, section, ul, ol, table, h1, h2, h3, h4, h5, h6")&&r.replaceWith(...r.childNodes)}),n.querySelectorAll("p").forEach(r=>{r.innerHTML.trim()===""&&r.remove()}),n.body.outerHTML}processAjaxReplacements(i){return De(this,null,function*(){let e="https://www.canada.ca",n=(d,h)=>De(null,null,function*(){try{let g=yield fetch(d);return h==="json"?g.json():g.text()}catch(g){return console.error(`Error fetching URL: ${d}`,g),h==="json"?{}:""}}),r=()=>De(null,null,function*(){let d=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]');if(d.length)for(let h of d){let g=h.tagName.toLowerCase(),y=h.attributes;for(let S=0;S<y.length;S++){let E=y[S],R=E.name,q=E.value;if(!R.startsWith("data-ajax-")||!q.startsWith("/"))continue;let[U,$]=q.split("#"),_e=`${e}${U}`,Ie=yield n(_e,"text");if(!Ie)continue;let Ce=new DOMParser().parseFromString(Ie,"text/html"),Ge;if($){let Ot=Ce.querySelector(`#${$}`);Ge=Ot?Ot.outerHTML:""}else{if(/<html[\s>]/i.test(Ie)&&/<body[\s>]/i.test(Ie)){console.warn(`Skipping full document injection from: ${_e}`);continue}Ge=Ce.body?Ce.body.innerHTML:Ce.documentElement.innerHTML}if(!Ge)continue;let zt=`
          <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
            <${g}>${Ge}</${g}>
          </div>
        `;h.outerHTML=zt}}}),s,l=0;do s=l,yield r(),l=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]').length;while(l&&l!==s)})}processJsonReplacements(i){return De(this,null,function*(){let e="https://www.canada.ca",n=(y,S)=>De(null,null,function*(){try{let E=yield fetch(y);return S==="json"?E.json():E.text()}catch(E){return console.error(`Error fetching URL: ${y}`,E),S==="json"?{}:""}}),r=y=>{let[S,E=""]=y.split("#");return{url:S,jsonKey:E.slice(1)}},s=y=>{try{return JSON.parse(y.replace(/&quot;/g,'"'))}catch(S){return console.error("Error parsing JSON config:",S),null}},l=(y,S)=>S.split("/").reduce((E,R)=>E&&E[R]!==void 0?E[R]:void 0,y),d=i.querySelectorAll("[data-wb-jsonmanager]");if(!d.length)return;let h=new Map;yield Promise.all(Array.from(d).map(y=>De(null,null,function*(){let S=y.getAttribute("data-wb-jsonmanager");if(!S)return;let E=s(S);if(!E?.url||!E?.name)return;let{url:R,jsonKey:q}=r(E.url),U=`${e}${R}`;try{let $=yield n(U,"json"),_e=l($,q);h.set(E.name,_e)}catch($){console.error(`Error fetching JSON for ${E.name}:`,$)}}))),i.querySelectorAll("[data-json-replace]").forEach(y=>{let E=(y.getAttribute("data-json-replace")||"").match(/^#\[(.*?)\](.*)$/);if(!E)return;let R=E[1],q=E[2].substring(1);if(!h.has(R)){console.warn(`No JSON data found for: ${R}`);return}let U=h.get(R),_e=`
      <div style="
        border: 3px dashed #fbc02f;
        padding: 8px;
        border-radius: 4px;
      "> 
        ${l(U,q)} 
      </div>
    `;y.outerHTML=_e})})}cleanupUnnecessaryElements(i){["section#chat-bottom-bar","#gc-pft","header","footer","charlie"].forEach(n=>{i.querySelectorAll(n).forEach(r=>r.remove())})}displayInvisibleElements(i){[".wb-inv",".hidden",".nojs-show"].forEach(n=>{i.querySelectorAll(n).forEach(r=>{r.classList.remove(...n.split(".").filter(Boolean)),r.style.border="2px solid #6F9FFF"})})}processModalDialogs(i){i.querySelectorAll(".modal-dialog.modal-content").forEach(n=>{n.classList.remove("mfp-hide");let r=i.createElement("div");for(r.setAttribute("style","border: 2px dashed #666; padding: 8px; border-radius: 4px;");n.firstChild;)r.appendChild(n.firstChild);n.appendChild(r)})}updateRelativeURLs(i,e){let n=i.querySelectorAll("a"),r=i.querySelectorAll("img");n.forEach(s=>{let l=s.getAttribute("href");l&&(l.startsWith("/")?(s.setAttribute("href",`${e}${l}`),s.setAttribute("target","_blank")):/^(http|https):\/\//.test(l)&&s.setAttribute("target","_blank"))}),r.forEach(s=>{let l=s.getAttribute("src");l&&l.startsWith("/")&&s.setAttribute("src",`${e}${l}`)})}addToc(i){let e=i.querySelector(".section.mwsinpagetoc");if(!e)return;let n=Array.from(e.querySelectorAll("a")).map(s=>{let l=s.getAttribute("href"),d=s.textContent?.trim();return l?.startsWith("#")&&d?{id:l.slice(1),text:d}:null}).filter(s=>s!==null);if(!n.length)return;i.querySelectorAll("h2, h3, h4, h5, h6").forEach(s=>{let l=s.textContent?.trim();if(!l)return;let d=n.find(h=>h.text===l);d&&s.setAttribute("id",d.id)})}loadSampleDataset(i="webpage"){return De(this,null,function*(){let e,n;switch(i){case"snippet":e=yield this.extractContent(Ym),n=yield this.formatHtml(Zm);break;case"word":e=yield this.formatHtml(Xm,"word"),n=yield this.formatHtml(Jm,"word");break;default:e=yield this.extractContent(Km),n=yield this.formatHtml(Qm);break}this.uploadState.setUploadData({originalUrl:`Original ${i}`,originalHtml:e,modifiedUrl:`Modified ${i}`,modifiedHtml:n})})}static \u0275fac=function(e){return new(e||t)(Q(On))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};var ag=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),s,l,d;if(n&&r){if(l=i.length,l!=e.length)return!1;for(s=l;s--!==0;)if(!this.equalsByValue(i[s],e[s]))return!1;return!0}if(n!=r)return!1;var h=this.isDate(i),g=this.isDate(e);if(h!=g)return!1;if(h&&g)return i.getTime()==e.getTime();var y=i instanceof RegExp,S=e instanceof RegExp;if(y!=S)return!1;if(y&&S)return i.toString()==e.toString();var E=Object.keys(i);if(l=E.length,l!==Object.keys(e).length)return!1;for(s=l;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,E[s]))return!1;for(s=l;s--!==0;)if(d=E[s],!this.equalsByValue(i[d],e[d]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),r=i;for(let s=0,l=n.length;s<l;++s){if(r==null)return null;r=r[n[s]]}return r}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let r;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,r){if(n.length>0){let s=!1;for(let l=0;l<n.length;l++)if(this.findIndexInList(n[l],r)>e){n.splice(l,0,i),s=!0;break}s||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let r=0;r<e.length;r++)if(e[r]==i){n=r;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,r=1){let s=-1,l=this.isEmpty(i),d=this.isEmpty(e);return l&&d?s=0:l?s=r:d?s=-r:typeof i=="string"&&typeof e=="string"?s=i.localeCompare(e,n,{numeric:!0}):s=i<e?-1:i>e?1:0,s}static sort(i,e,n=1,r,s=1){let l=t.compare(i,e,r,n),d=n;return(t.isEmpty(i)||t.isEmpty(e))&&(d=s===1?n:s),d*l}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return I(I({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),s,l,d;if(n&&r){if(l=i.length,l!=e.length)return!1;for(s=l;s--!==0;)if(!this.deepEquals(i[s],e[s]))return!1;return!0}if(n!=r)return!1;var h=i instanceof Date,g=e instanceof Date;if(h!=g)return!1;if(h&&g)return i.getTime()==e.getTime();var y=i instanceof RegExp,S=e instanceof RegExp;if(y!=S)return!1;if(y&&S)return i.toString()==e.toString();var E=Object.keys(i);if(l=E.length,l!==Object.keys(e).length)return!1;for(s=l;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,E[s]))return!1;for(s=l;s--!==0;)if(d=E[s],!this.deepEquals(i[d],e[d]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},sg=0;function ML(t="pn_id_"){return sg++,`${t}${sg}`}function Ew(){let t=[],i=(s,l)=>{let d=t.length>0?t[t.length-1]:{key:s,value:l},h=d.value+(d.key===s?0:l)+2;return t.push({key:s,value:h}),h},e=s=>{t=t.filter(l=>l.value!==s)},n=()=>t.length>0?t[t.length-1].value:0,r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,l,d)=>{l&&(l.style.zIndex=String(i(s,d)))},clear:s=>{s&&(e(r(s)),s.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var Ei=Ew(),cl=t=>!!t;var Tw=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,Aw={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},lg=(()=>{class t extends ue{name="tooltip";theme=Tw;classes=Aw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var WL=(()=>{class t extends ae{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:et("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=w(lg);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),En(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=I(I({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Ki(e.relatedTarget,"p-tooltip")||Ki(e.relatedTarget,"p-tooltip-text")||Ki(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?yu(this.container,this.el.nativeElement):yu(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),$f(this.container,250),this.getOption("tooltipZIndex")==="auto"?Ei.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Ei.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof ri){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(r=>this.tooltipText.appendChild(r))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[r,s]of n[e].entries())if(r===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+gu(),r=e.top+bu();return{left:n,top:r}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?kt(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=Ln(e),r=(gn(e)-gn(this.container))/2;this.alignTooltip(n,r)}alignLeft(){this.preAlign("left");let e=Ln(this.container),n=(gn(this.el.nativeElement)-gn(this.container))/2;this.alignTooltip(-e,n)}alignTop(){this.preAlign("top");let e=(Ln(this.el.nativeElement)-Ln(this.container))/2,n=gn(this.container);this.alignTooltip(e,-n)}alignBottom(){this.preAlign("bottom");let e=(Ln(this.el.nativeElement)-Ln(this.container))/2,n=gn(this.el.nativeElement);this.alignTooltip(e,n)}alignTooltip(e,n){let r=this.getHostOffset(),s=r.left+e,l=r.top+n;this.container.style.left=s+this.getOption("positionLeft")+"px",this.container.style.top=l+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=I(I({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Ki(e,"p-inputwrapper")?kt(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,r=e.left,s=Ln(this.container),l=gn(this.container),d=Bs();return r+s>d.width||r<0||n<0||n+l>d.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new rl(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):zf(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Ei.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(B(ft),B(Un))};static \u0275dir=ce({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",P],showDelay:[2,"showDelay","showDelay",Me],hideDelay:[2,"hideDelay","hideDelay",Me],life:[2,"life","life",Me],positionTop:[2,"positionTop","positionTop",Me],positionLeft:[2,"positionLeft","positionLeft",Me],autoHide:[2,"autoHide","autoHide",P],fitContent:[2,"fitContent","fitContent",P],hideOnEscape:[2,"hideOnEscape","hideOnEscape",P],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[oe([lg]),O,ot]})}return t})(),GL=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var cg=["container"],Iw=(t,i,e,n)=>({showTransformParams:t,hideTransformParams:i,showTransitionParams:e,hideTransitionParams:n}),kw=t=>({value:"visible",params:t}),Fw=(t,i)=>({$implicit:t,closeFn:i}),Mw=t=>({$implicit:t});function Rw(t,i){t&1&&xe(0)}function Lw(t,i){if(t&1&&A(0,Rw,1,0,"ng-container",3),t&2){let e=_();m("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",oi(2,Fw,e.message,e.onCloseIconClick))}}function Ow(t,i){if(t&1&&M(0,"span",4),t&2){let e=_(3);m("ngClass",e.cx("messageIcon"))}}function Pw(t,i){t&1&&M(0,"CheckIcon"),t&2&&T("aria-hidden",!0)("data-pc-section","icon")}function Nw(t,i){t&1&&M(0,"InfoCircleIcon"),t&2&&T("aria-hidden",!0)("data-pc-section","icon")}function Bw(t,i){t&1&&M(0,"TimesCircleIcon"),t&2&&T("aria-hidden",!0)("data-pc-section","icon")}function $w(t,i){t&1&&M(0,"ExclamationTriangleIcon"),t&2&&T("aria-hidden",!0)("data-pc-section","icon")}function Vw(t,i){t&1&&M(0,"InfoCircleIcon"),t&2&&T("aria-hidden",!0)("data-pc-section","icon")}function Uw(t,i){if(t&1&&(D(0,"span",4),A(1,Pw,1,2,"CheckIcon")(2,Nw,1,2,"InfoCircleIcon")(3,Bw,1,2,"TimesCircleIcon")(4,$w,1,2,"ExclamationTriangleIcon")(5,Vw,1,2,"InfoCircleIcon"),x()),t&2){let e,n=_(3);m("ngClass",n.cx("messageIcon")),T("aria-hidden",!0)("data-pc-section","icon"),b(),Ee((e=n.message.severity)==="success"?1:e==="info"?2:e==="error"?3:e==="warn"?4:5)}}function jw(t,i){if(t&1&&(He(0),A(1,Ow,1,1,"span",6)(2,Uw,6,4,"span",6),D(3,"div",4)(4,"div",4),ge(5),x(),D(6,"div",4),ge(7),x()(),ze()),t&2){let e=_(2);b(),m("ngIf",e.message.icon),b(),m("ngIf",!e.message.icon),b(),m("ngClass",e.cx("messageText")),T("data-pc-section","text"),b(),m("ngClass",e.cx("summary")),T("data-pc-section","summary"),b(),mt(" ",e.message.summary," "),b(),m("ngClass",e.cx("detail")),T("data-pc-section","detail"),b(),qe(e.message.detail)}}function Hw(t,i){t&1&&xe(0)}function zw(t,i){if(t&1&&M(0,"span",4),t&2){let e=_(4);m("ngClass",e.cx("closeIcon"))}}function qw(t,i){if(t&1&&A(0,zw,1,1,"span",6),t&2){let e=_(3);m("ngIf",e.message.closeIcon)}}function Ww(t,i){if(t&1&&M(0,"TimesIcon",4),t&2){let e=_(3);m("ngClass",e.cx("closeIcon")),T("aria-hidden",!0)("data-pc-section","closeicon")}}function Gw(t,i){if(t&1){let e=Te();D(0,"div")(1,"button",7),ee("click",function(r){X(e);let s=_(2);return J(s.onCloseIconClick(r))})("keydown.enter",function(r){X(e);let s=_(2);return J(s.onCloseIconClick(r))}),A(2,qw,1,1,"span",4)(3,Ww,1,3,"TimesIcon",4),x()()}if(t&2){let e=_(2);b(),m("ariaLabel",e.closeAriaLabel),T("class",e.cx("closeButton"))("data-pc-section","closebutton"),b(),Ee(e.message.closeIcon?2:3)}}function Kw(t,i){if(t&1&&(D(0,"div",4),A(1,jw,8,10,"ng-container",5)(2,Hw,1,0,"ng-container",3)(3,Gw,4,4,"div"),x()),t&2){let e=_();V(e.message==null?null:e.message.contentStyleClass),m("ngClass",e.cx("messageContent")),T("data-pc-section","content"),b(),m("ngIf",!e.template),b(),m("ngTemplateOutlet",e.template)("ngTemplateOutletContext",ke(8,Mw,e.message)),b(),Ee((e.message==null?null:e.message.closable)!==!1?3:-1)}}var Qw=["message"],Yw=["headless"];function Zw(t,i){if(t&1){let e=Te();D(0,"p-toastItem",3),ee("onClose",function(r){X(e);let s=_();return J(s.onMessageClose(r))})("@toastAnimation.start",function(r){X(e);let s=_();return J(s.onAnimationStart(r))})("@toastAnimation.done",function(r){X(e);let s=_();return J(s.onAnimationEnd(r))}),x()}if(t&2){let e=i.$implicit,n=i.index,r=_();m("message",e)("index",n)("life",r.life)("template",r.template||r._template)("headlessTemplate",r.headlessTemplate||r._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",r.showTransformOptions)("hideTransformOptions",r.hideTransformOptions)("showTransitionOptions",r.showTransitionOptions)("hideTransitionOptions",r.hideTransitionOptions)}}var Xw=({dt:t})=>`
.p-toast {
    width: ${t("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${t("toast.icon.size")};
    width: ${t("toast.icon.size")};
    height: ${t("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${t("toast.content.padding")};
    gap: ${t("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${t("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${t("toast.summary.font.weight")};
    font-size: ${t("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${t("toast.detail.font.weight")};
    font-size: ${t("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${t("toast.transition.duration")}, color ${t("toast.transition.duration")}, outline-color ${t("toast.transition.duration")}, box-shadow ${t("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${t("toast.close.button.width")};
    height: ${t("toast.close.button.height")};
    border-radius: ${t("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${t("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${t("toast.blur")});
    border-radius: ${t("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${t("toast.close.icon.size")};
    width: ${t("toast.close.icon.size")};
    height: ${t("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${t("focus.ring.width")};
    outline-style: ${t("focus.ring.style")};
    outline-offset: ${t("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${t("toast.info.background")};
    border-color: ${t("toast.info.border.color")};
    color: ${t("toast.info.color")};
    box-shadow: ${t("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${t("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.info.close.button.focus.ring.color")};
    box-shadow: ${t("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${t("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${t("toast.success.background")};
    border-color: ${t("toast.success.border.color")};
    color: ${t("toast.success.color")};
    box-shadow: ${t("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${t("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.success.close.button.focus.ring.color")};
    box-shadow: ${t("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${t("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${t("toast.warn.background")};
    border-color: ${t("toast.warn.border.color")};
    color: ${t("toast.warn.color")};
    box-shadow: ${t("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${t("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${t("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${t("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${t("toast.error.background")};
    border-color: ${t("toast.error.border.color")};
    color: ${t("toast.error.color")};
    box-shadow: ${t("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${t("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.error.close.button.focus.ring.color")};
    box-shadow: ${t("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${t("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${t("toast.secondary.background")};
    border-color: ${t("toast.secondary.border.color")};
    color: ${t("toast.secondary.color")};
    box-shadow: ${t("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${t("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${t("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${t("toast.contrast.background")};
    border-color: ${t("toast.contrast.border.color")};
    color: ${t("toast.contrast.color")};
    box-shadow: ${t("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${t("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${t("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`,Jw={root:({instance:t})=>{let{_position:i}=t;return{position:"fixed",top:i==="top-right"||i==="top-left"||i==="top-center"?"20px":i==="center"?"50%":null,right:(i==="top-right"||i==="bottom-right")&&"20px",bottom:(i==="bottom-left"||i==="bottom-right"||i==="bottom-center")&&"20px",left:i==="top-left"||i==="bottom-left"?"20px":i==="center"||i==="top-center"||i==="bottom-center"?"50%":null}}},eS={root:({instance:t})=>({"p-toast p-component":!0,[`p-toast-${t._position}`]:!!t._position}),message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},ul=(()=>{class t extends ue{name="toast";theme=Xw;classes=eS;inlineStyles=Jw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var tS=(()=>{class t extends ae{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new W;containerViewChild;_componentStyle=w(ul);timeout;constructor(e){super(),this.zone=e}ngAfterViewInit(){super.ngAfterViewInit(),this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=e=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(B(ft))};static \u0275cmp=N({type:t,selectors:[["p-toastItem"]],viewQuery:function(n,r){if(n&1&&ln(cg,5),n&2){let s;j(s=H())&&(r.containerViewChild=s.first)}},inputs:{message:"message",index:[2,"index","index",Me],life:[2,"life","life",Me],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[oe([ul]),O],decls:4,vars:15,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[3,"ngClass","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["type","button","autofocus","",3,"click","keydown.enter","ariaLabel"]],template:function(n,r){if(n&1){let s=Te();D(0,"div",1,0),ee("mouseenter",function(){return X(s),J(r.onMouseEnter())})("mouseleave",function(){return X(s),J(r.onMouseLeave())}),A(2,Lw,1,5,"ng-container")(3,Kw,4,10,"div",2),x()}n&2&&(V(r.message==null?null:r.message.styleClass),m("ngClass",r.cx("message"))("@messageState",ke(13,kw,Kp(8,Iw,r.showTransformOptions,r.hideTransformOptions,r.showTransitionOptions,r.hideTransitionOptions))),T("id",r.message==null?null:r.message.id)("data-pc-name","toast")("data-pc-section","root"),b(2),Ee(r.headlessTemplate?2:3))},dependencies:[le,We,Ue,Je,sl,Lm,Om,Wr,$m,te],encapsulation:2,data:{animation:[cn("messageState",[un("visible",bt({transform:"translateY(0)",opacity:1})),Dt("void => *",[bt({transform:"{{showTransformParams}}",opacity:0}),It("{{showTransitionParams}}")]),Dt("* => void",[It("{{hideTransitionParams}}",bt({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return t})(),mO=(()=>{class t extends ae{key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new W;template;headlessTemplate;containerViewChild;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=w(em);_componentStyle=w(ul);styleElement;id=et("pn_id_");templates;ngOnInit(){super.ngOnInit(),this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let n=e.filter(r=>this.canAdd(r));this.add(n)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let n=this.key===e.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,e)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,e)),n}containsMessage(e,n){return e?e.find(r=>r.summary===n.summary&&r.detail==n.detail&&r.severity===n.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.cd.detectChanges()}onAnimationStart(e){e.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&Ei.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(e){e.toState==="void"&&this.autoZIndex&&pt(this.messages)&&Ei.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints){let r="";for(let s in this.breakpoints[n])r+=s+":"+this.breakpoints[n][s]+" !important;";e+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${r}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),qf(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&Ei.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-toast"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,Qw,5),Y(s,Yw,5),Y(s,at,4)),n&2){let l;j(l=H())&&(r.template=l.first),j(l=H())&&(r.headlessTemplate=l.first),j(l=H())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&ln(cg,5),n&2){let s;j(s=H())&&(r.containerViewChild=s.first)}},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",P],baseZIndex:[2,"baseZIndex","baseZIndex",Me],life:[2,"life","life",Me],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",P],preventDuplicates:[2,"preventDuplicates","preventDuplicates",P],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[oe([ul]),O],decls:3,vars:7,consts:[["container",""],[3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(n,r){n&1&&(D(0,"div",1,0),A(2,Zw,1,10,"p-toastItem",2),x()),n&2&&(St(r.style),V(r.styleClass),m("ngClass",r.cx("root"))("ngStyle",r.sx("root")),b(2),m("ngForOf",r.messages))},dependencies:[le,We,si,vt,tS,te],encapsulation:2,data:{animation:[cn("toastAnimation",[Dt(":enter, :leave",[fc("@*",hc())])])]},changeDetection:0})}return t})();var nS=["header"],iS=["title"],rS=["subtitle"],oS=["content"],aS=["footer"],sS=["*",[["p-header"]],[["p-footer"]]],lS=["*","p-header","p-footer"];function cS(t,i){t&1&&xe(0)}function uS(t,i){if(t&1&&(D(0,"div",8),Be(1,1),A(2,cS,1,0,"ng-container",6),x()),t&2){let e=_();b(2),m("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function dS(t,i){if(t&1&&(He(0),ge(1),ze()),t&2){let e=_(2);b(),qe(e.header)}}function pS(t,i){t&1&&xe(0)}function hS(t,i){if(t&1&&(D(0,"div",9),A(1,dS,2,1,"ng-container",10)(2,pS,1,0,"ng-container",6),x()),t&2){let e=_();b(),m("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),b(),m("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function fS(t,i){if(t&1&&(He(0),ge(1),ze()),t&2){let e=_(2);b(),qe(e.subheader)}}function mS(t,i){t&1&&xe(0)}function gS(t,i){if(t&1&&(D(0,"div",11),A(1,fS,2,1,"ng-container",10)(2,mS,1,0,"ng-container",6),x()),t&2){let e=_();b(),m("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),b(),m("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function bS(t,i){t&1&&xe(0)}function vS(t,i){t&1&&xe(0)}function yS(t,i){if(t&1&&(D(0,"div",12),Be(1,2),A(2,vS,1,0,"ng-container",6),x()),t&2){let e=_();b(2),m("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var _S=({dt:t})=>`
.p-card {
    background: ${t("card.background")};
    color: ${t("card.color")};
    box-shadow: ${t("card.shadow")};
    border-radius: ${t("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${t("card.caption.gap")};
}

.p-card-body {
    padding: ${t("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("card.body.gap")};
}

.p-card-title {
    font-size: ${t("card.title.font.size")};
    font-weight: ${t("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${t("card.subtitle.color")};
}
`,CS={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ug=(()=>{class t extends ue{name="card";theme=_S;classes=CS;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var wS=(()=>{class t extends ae{header;subheader;set style(e){Qi(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Ke(null);_componentStyle=w(ug);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-card"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,qs,5),Y(s,tm,5),Y(s,nS,4),Y(s,iS,4),Y(s,rS,4),Y(s,oS,4),Y(s,aS,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.headerFacet=l.first),j(l=H())&&(r.footerFacet=l.first),j(l=H())&&(r.headerTemplate=l.first),j(l=H())&&(r.titleTemplate=l.first),j(l=H())&&(r.subtitleTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.footerTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[oe([ug]),O],ngContentSelectors:lS,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,r){n&1&&(Qe(sS),D(0,"div",0),A(1,uS,3,1,"div",1),D(2,"div",2),A(3,hS,3,2,"div",3)(4,gS,3,2,"div",4),D(5,"div",5),Be(6),A(7,bS,1,0,"ng-container",6),x(),A(8,yS,3,1,"div",7),x()()),n&2&&(V(r.styleClass),m("ngClass","p-card p-component")("ngStyle",r._style()),T("data-pc-name","card"),b(),m("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),b(2),m("ngIf",r.header||r.titleTemplate||r._titleTemplate),b(),m("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),b(3),m("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),b(),m("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[le,We,Ue,Je,vt,te],encapsulation:2,changeDetection:0})}return t})(),FO=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[wS,te,te]})}return t})();var SS=["icon"],DS=["content"],pg=t=>({$implicit:t}),xS=(t,i)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":i});function ES(t,i){t&1&&xe(0)}function TS(t,i){if(t&1&&M(0,"span",0),t&2){let e=_(3);V(e.checked?e.onIcon:e.offIcon),m("ngClass",oi(4,xS,e.iconPos==="left",e.iconPos==="right")),T("data-pc-section","icon")}}function AS(t,i){if(t&1&&A(0,TS,1,7,"span",2),t&2){let e=_(2);Ee(e.onIcon||e.offIcon?0:-1)}}function IS(t,i){t&1&&xe(0)}function kS(t,i){if(t&1&&A(0,IS,1,0,"ng-container",1),t&2){let e=_(2);m("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ke(2,pg,e.checked))}}function FS(t,i){if(t&1&&(A(0,AS,1,1)(1,kS,1,4,"ng-container"),D(2,"span",0),ge(3),x()),t&2){let e=_();Ee(e.iconTemplate?1:0),b(2),m("ngClass",e.cx("label")),T("data-pc-section","label"),b(),qe(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var MS=({dt:t})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
    padding: ${t("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${t("togglebutton.content.border.radius")};
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${t("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${t("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,RS={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},dg=(()=>{class t extends ue{name="togglebutton";theme=MS;classes=RS;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var LS={provide:_i,useExisting:ut(()=>hg),multi:!0},hg=(()=>{class t extends ae{get hostClass(){return this.styleClass||""}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new W;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=w(dg);onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,SS,4),Y(s,DS,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.templates=l)}},hostVars:23,hostBindings:function(n,r){n&1&&ee("keydown",function(l){return r.onKeyDown(l)})("click",function(l){return r.toggle(l)}),n&2&&(zp("tabindex",r.tabindex),T("disabled",r.disabled)("aria-labelledby",r.ariaLabelledBy)("aria-pressed",r.checked)("data-p-checked",r.active)("data-p-disabled",r.disabled)("type","button"),V(r.hostClass),Ze("p-togglebutton",!0)("p-togglebutton-checked",r.checked)("p-disabled",r.disabled)("p-togglebutton-sm",r.size==="small")("p-inputfield-sm",r.size==="small")("p-togglebutton-lg",r.size==="large")("p-inputfield-lg",r.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",P],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Me],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",P],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[oe([LS,dg]),Ua([wi]),O],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,r){n&1&&(D(0,"span",0),A(1,ES,1,0,"ng-container",1)(2,FS,4,4),x()),n&2&&(m("ngClass",r.cx("content")),b(),m("ngTemplateOutlet",r.contentTemplate||r._contentTemplate)("ngTemplateOutletContext",ke(4,pg,r.checked)),b(),Ee(r.contentTemplate?-1:2))},dependencies:[le,We,Je,te],encapsulation:2,changeDetection:0})}return t})(),QO=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[hg,te,te]})}return t})();function OS(t,i){if(t&1){let e=Te();D(0,"div",3)(1,"p-radioButton",4),br("ngModelChange",function(r){X(e);let s=_();return gr(s.selected,r)||(s.selected=r),J(r)}),ee("ngModelChange",function(r){X(e);let s=_();return J(s.onChange(r))}),x(),D(2,"label",5),M(3,"i"),ge(4),$e(5,"translate"),x()()}if(t&2){let e=i.$implicit,n=i.index,r=_();b(),m("inputId",r.name+"-"+n)("name",r.name)("value",e.value),mr("ngModel",r.selected),b(),m("for",r.name+"-"+n),b(),V(e.icon),b(),mt(" ",Ve(5,8,e.label)," ")}}var fg=class t{label;name;options=[];selected;selectedChange=new W;onChange(i){this.selectedChange.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=N({type:t,selectors:[["ca-horizontal-radio-buttons"]],inputs:{label:"label",name:"name",options:"options",selected:"selected"},outputs:{selectedChange:"selectedChange"},decls:6,vars:7,consts:[[1,"mb-1","font-semibold","block",3,"for"],["role","radiogroup",1,"flex","flex-wrap","gap-3"],["class","field-radiobutton",4,"ngFor","ngForOf"],[1,"field-radiobutton"],[3,"ngModelChange","inputId","name","value","ngModel"],[3,"for"]],template:function(e,n){e&1&&(D(0,"div")(1,"label",0),ge(2),$e(3,"translate"),x(),D(4,"div",1),A(5,OS,6,10,"div",2),x()()),e&2&&(b(),m("for",n.name+"-0"),T("id",n.name+"-label"),b(),qe(Ve(3,5,n.label)),b(2),T("aria-labelledby",n.name+"-label"),b(),m("ngForOf",n.options))},dependencies:[le,si,Ci,jr,yn,di,ui,al],encapsulation:2})};var PS=(n=>(n.Original="original",n.Modified="modified",n.Diff="diff",n))(PS||{});var NS=(h=>(h.Gemini="google/gemini-2.0-flash-exp:free",h.DeepSeekChatV3="deepseek/deepseek-chat-v3-0324:free",h.Qwen="qwen/qwen3-235b-a22b:free",h.Llama32="meta-llama/llama-3.2-3b-instruct:free",h.Mistral="mistralai/mistral-small-3.1-24b-instruct:free",h.Kimi="moonshotai/kimi-k2:free",h.Llama33="meta-llama/llama-3.3-70b-instruct:free",h.Llama31="meta-llama/llama-3.1-405b-instruct:free",h))(NS||{});var BS=["start"],$S=["end"],VS=["center"],US=["*"];function jS(t,i){t&1&&xe(0)}function HS(t,i){if(t&1&&(D(0,"div",4),A(1,jS,1,0,"ng-container",5),x()),t&2){let e=_();T("data-pc-section","start"),b(),m("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function zS(t,i){t&1&&xe(0)}function qS(t,i){if(t&1&&(D(0,"div",6),A(1,zS,1,0,"ng-container",5),x()),t&2){let e=_();T("data-pc-section","center"),b(),m("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function WS(t,i){t&1&&xe(0)}function GS(t,i){if(t&1&&(D(0,"div",7),A(1,WS,1,0,"ng-container",5),x()),t&2){let e=_();T("data-pc-section","end"),b(),m("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var KS=({dt:t})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${t("toolbar.padding")};
    background: ${t("toolbar.background")};
    border: 1px solid ${t("toolbar.border.color")};
    color: ${t("toolbar.color")};
    border-radius: ${t("toolbar.border.radius")};
    gap: ${t("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,QS={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},mg=(()=>{class t extends ue{name="toolbar";theme=KS;classes=QS;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var YS=(()=>{class t extends ae{style;styleClass;ariaLabelledBy;_componentStyle=w(mg);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-toolbar"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,BS,4),Y(s,$S,4),Y(s,VS,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.startTemplate=l.first),j(l=H())&&(r.endTemplate=l.first),j(l=H())&&(r.centerTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[oe([mg]),O],ngContentSelectors:US,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-start",4,"ngIf"],["class","p-toolbar-center",4,"ngIf"],["class","p-toolbar-end",4,"ngIf"],[1,"p-toolbar-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-center"],[1,"p-toolbar-end"]],template:function(n,r){n&1&&(Qe(),D(0,"div",0),Be(1),A(2,HS,2,2,"div",1)(3,qS,2,2,"div",2)(4,GS,2,2,"div",3),x()),n&2&&(V(r.styleClass),m("ngClass","p-toolbar p-component")("ngStyle",r.style),T("aria-labelledby",r.ariaLabelledBy)("data-pc-name","toolbar"),b(2),m("ngIf",r.startTemplate||r._startTemplate),b(),m("ngIf",r.centerTemplate||r._centerTemplate),b(),m("ngIf",r.endTemplate||r._endTemplate))},dependencies:[le,We,Ue,Je,vt,te],encapsulation:2,changeDetection:0})}return t})(),_9=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[YS,te,te]})}return t})();var ZS=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,XS={root:({instance:t,props:i})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large","p-invalid":i.invalid,"p-variant-filled":i.variant==="filled","p-inputtext-fluid":i.fluid}]},gg=(()=>{class t extends ue{name="inputtext";theme=ZS;classes=XS;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var bg=(()=>{class t extends ae{ngModel;variant;fluid;pSize;filled;_componentStyle=w(gg);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return pt(this.fluid)?!!n:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)(B(yn,8))};static \u0275dir=ce({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,r){if(n&1&&ee("input",function(l){return r.onInput(l)}),n&2){let s;Ze("p-filled",r.filled)("p-variant-filled",((s=r.variant)!==null&&s!==void 0?s:r.config.inputStyle()||r.config.inputVariant())==="filled")("p-inputtext-fluid",r.hasFluid)("p-inputtext-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-inputtext-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",P],pSize:"pSize"},features:[oe([gg]),O]})}return t})(),vg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var eD=["*"],tD=({dt:t})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,nD={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},yg=(()=>{class t extends ue{name="inputgroup";theme=tD;classes=nD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Gu=(()=>{class t extends ae{style;styleClass;_componentStyle=w(yg);static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(n,r){n&2&&(T("data-pc-name","inputgroup"),St(r.style),V(r.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[oe([yg]),O],ngContentSelectors:eD,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le,te],encapsulation:2})}return t})(),_g=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Gu,te,te]})}return t})();var rD=["*"],oD={root:"p-inputgroupaddon"},Cg=(()=>{class t extends ue{name="inputgroupaddon";classes=oD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Ku=(()=>{class t extends ae{style;styleClass;_componentStyle=w(Cg);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(n,r){n&2&&(T("data-pc-name","inputgroupaddon"),St(r.hostStyle),V(r.styleClass),Ze("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[oe([Cg]),O],ngContentSelectors:rD,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le],encapsulation:2})}return t})(),wg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Ku,te,te]})}return t})();function sD(t,i){t&1&&(M(0,"div",16),$e(1,"translate")),t&2&&m("@slideDown",void 0)("innerHTML",Ve(1,2,"page.upload.url.example"),Ba)}function lD(t,i){t&1&&(D(0,"div"),ge(1),$e(2,"translate"),x()),t&2&&(b(),mt(" ",Ve(2,1,"page.upload.url.error.required"),". "))}function cD(t,i){t&1&&(D(0,"div"),ge(1),$e(2,"translate"),x()),t&2&&(b(),mt(" ",Ve(2,1,"page.upload.url.error.pattern")," "))}function uD(t,i){if(t&1&&(D(0,"div",17),A(1,lD,3,3,"div",18)(2,cD,3,3,"div",18),x()),t&2){_();let e=Xt(17);b(),m("ngIf",e.errors==null?null:e.errors.required),b(),m("ngIf",e.errors==null?null:e.errors.pattern)}}function dD(t,i){if(t&1&&M(0,"p-message",19),t&2){let e=_();m("text",e.error)}}function pD(t,i){if(t&1){let e=Te();D(0,"p-button",20),$e(1,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.loadSampleData())}),x()}t&2&&m("label",Ve(1,1,"page.upload.sample"))}var Sg=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.url.modified":"page.upload.url.original"}uploadComplete=new W;userInput="";error="";loading=!1;showHelp=!1;getHtmlContent(){return De(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.url.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.fetchAndProcess(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.userInput,originalHtml:n,modifiedUrl:this.userInput,modifiedHtml:n}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:this.userInput,modifiedHtml:n}),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return De(this,null,function*(){yield this.urlDataService.loadSampleDataset("webpage"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(B(xi),B(On),B(Hn))};static \u0275cmp=N({type:t,selectors:[["ca-upload-url"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:25,vars:22,consts:[["form","ngForm"],["urlField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"pi","pi-question-circle","text-primary","cursor-pointer",3,"click","ariaLabel"],["class","text-sm mt-2",3,"innerHTML",4,"ngIf"],[1,"mt-3"],["for","userInput",1,"font-semibold"],[1,"pi","pi-globe"],["id","userInput","pInputText","","type","url","name","userInput","required","","pattern","https?://.+","autocomplete","url","fluid","",1,"w-full",3,"ngModelChange","ngModel","placeholder"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-sm","mt-2",3,"innerHTML"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let r=Te();D(0,"form",2,0),ee("ngSubmit",function(){return X(r),J(n.getHtmlContent())}),D(2,"fieldset",3)(3,"legend",4),ge(4),$e(5,"translate"),D(6,"i",5),$e(7,"translate"),ee("click",function(){return X(r),J(n.showHelp=!n.showHelp)}),x()(),A(8,sD,2,4,"div",6),D(9,"div",7)(10,"label",8),ge(11),$e(12,"translate"),x(),D(13,"p-inputGroup")(14,"p-inputgroup-addon"),M(15,"i",9),x(),D(16,"input",10,1),$e(18,"translate"),br("ngModelChange",function(l){return X(r),gr(n.userInput,l)||(n.userInput=l),J(l)}),x()(),A(19,uD,3,2,"div",11),x(),A(20,dD,1,1,"p-message",12),D(21,"div",13),M(22,"p-button",14),$e(23,"translate"),A(24,pD,2,3,"p-button",15),x()()()}if(e&2){let r=Xt(1),s=Xt(17);b(4),mt(" ",Ve(5,12,"page.upload.url.legend")," "),b(2),m("ariaLabel",Ve(7,14,"page.upload.url.toggleHelp")),b(2),m("ngIf",n.showHelp),b(3),qe(Ve(12,16,n.labelKey)),b(5),mr("ngModel",n.userInput),m("placeholder",Ve(18,18,"page.upload.url.placeholder")),b(3),m("ngIf",s.invalid&&s.touched),b(),m("ngIf",n.error),b(2),m("label",Ve(23,20,"page.upload.continue"))("loading",n.loading)("disabled",r.invalid),b(2),m("ngIf",n.showSampleDataButton)}},dependencies:[le,Ue,di,ui,Ci,nl,Ur,jr,el,ra,Ru,yn,ia,Gr,qn,vg,bg,_g,Gu,wg,Ku,Gm,Wn],styles:["[_nghost-%COMP%]{display:block}"],data:{animation:[cn("slideDown",[un("void",bt({opacity:0,transform:"translateY(-20px)"})),un("*",bt({opacity:1,transform:"translateY(0)"})),Dt(":enter",It("200ms ease-out")),Dt(":leave",It("100ms ease-in",bt({opacity:0,transform:"translateY(-10px)"})))])]}})};var hD=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${t("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${t("textarea.sm.font.size")};
    padding-block: ${t("textarea.sm.padding.y")};
    padding-inline: ${t("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${t("textarea.lg.font.size")};
    padding-block: ${t("textarea.lg.padding.y")};
    padding-inline: ${t("textarea.lg.padding.x")};
}
`,fD={root:({instance:t,props:i})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":i.autoResize,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":i.fluid}]},Dg=(()=>{class t extends ue{name="textarea";theme=hD;classes=fD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var xg=(()=>{class t extends ae{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new W;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=w(Dg);constructor(e,n){super(),this.ngModel=e,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(B(yn,8),B(vn,8))};static \u0275dir=ce({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,r){n&1&&ee("input",function(l){return r.onInput(l)}),n&2&&Ze("p-filled",r.filled)("p-textarea-resizable",r.autoResize)("p-variant-filled",r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled")("p-textarea-fluid",r.hasFluid)("p-textarea-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-textarea-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",P],variant:"variant",fluid:[2,"fluid","fluid",P],pSize:"pSize"},outputs:{onResize:"onResize"},features:[oe([Dg]),O]})}return t})(),Eg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function gD(t,i){t&1&&(D(0,"div"),ge(1),$e(2,"translate"),x()),t&2&&(b(),mt(" ",Ve(2,1,"page.upload.paste.error.required")," "))}function bD(t,i){if(t&1&&(D(0,"div",13),A(1,gD,3,3,"div",14),x()),t&2){_();let e=Xt(11);b(),m("ngIf",e.errors==null?null:e.errors.required)}}function vD(t,i){if(t&1&&M(0,"p-message",15),t&2){let e=_();m("text",e.error)}}function yD(t,i){if(t&1){let e=Te();D(0,"p-button",16),$e(1,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.loadSampleData())}),x()}t&2&&m("label",Ve(1,1,"page.upload.sample"))}var Tg=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.paste.modified":"page.upload.paste.original"}uploadComplete=new W;userInput="";error="";loading=!1;getPasteContent(){return De(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.paste.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.extractContent(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:"Copy/Paste",originalHtml:n,modifiedUrl:"Copy/Paste",modifiedHtml:n}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:"Copy/Paste",modifiedHtml:n}),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return De(this,null,function*(){yield this.urlDataService.loadSampleDataset("snippet"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(B(xi),B(On),B(Hn))};static \u0275cmp=N({type:t,selectors:[["ca-upload-paste"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:18,vars:15,consts:[["form","ngForm"],["inputField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"mt-3"],["for","source",1,"font-semibold"],["type","text","id","source","pTextarea","","rows","3","name","userInput","required","","fluid","",1,"w-full",3,"ngModelChange","ngModel"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let r=Te();D(0,"form",2,0),ee("ngSubmit",function(){return X(r),J(n.getPasteContent())}),D(2,"fieldset",3)(3,"legend",4),ge(4),$e(5,"translate"),x(),D(6,"div",5)(7,"label",6),ge(8),$e(9,"translate"),x(),D(10,"textarea",7,1),br("ngModelChange",function(l){return X(r),gr(n.userInput,l)||(n.userInput=l),J(l)}),x(),A(12,bD,2,1,"div",8),x(),A(13,vD,1,1,"p-message",9),D(14,"div",10),M(15,"p-button",11),$e(16,"translate"),A(17,yD,2,3,"p-button",12),x()()()}if(e&2){let r=Xt(1),s=Xt(11);b(4),mt(" ",Ve(5,9,"page.upload.paste.legend")," "),b(4),qe(Ve(9,11,n.labelKey)),b(2),mr("ngModel",n.userInput),b(2),m("ngIf",s.invalid&&s.touched),b(),m("ngIf",n.error),b(2),m("label",Ve(16,13,"page.upload.continue"))("loading",n.loading)("disabled",r.invalid),b(2),m("ngIf",n.showSampleDataButton)}},dependencies:[le,Ue,di,ui,Ci,nl,Ur,jr,el,ra,yn,ia,Gr,qn,Eg,xg,Wn],styles:["[_nghost-%COMP%]{display:block}"]})};var _D=["content"],CD=(t,i)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":i}),wD=t=>({$implicit:t});function SD(t,i){if(t&1&&(D(0,"div"),ge(1),x()),t&2){let e=_(2);Dn("display",e.value!=null&&e.value!==0?"flex":"none"),T("data-pc-section","label"),b(),Wp("",e.value,"",e.unit,"")}}function DD(t,i){t&1&&xe(0)}function xD(t,i){if(t&1&&(D(0,"div",3)(1,"div",4),A(2,SD,2,5,"div",5)(3,DD,1,0,"ng-container",6),x()()),t&2){let e=_();V(e.valueStyleClass),Dn("width",e.value+"%")("background",e.color),m("ngClass","p-progressbar-value p-progressbar-value-animate"),T("data-pc-section","value"),b(2),m("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),b(),m("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ke(11,wD,e.value))}}function ED(t,i){if(t&1&&(D(0,"div",7),M(1,"div",8),x()),t&2){let e=_();V(e.valueStyleClass),m("ngClass","p-progressbar-indeterminate-container"),T("data-pc-section","container"),b(),Dn("background",e.color),T("data-pc-section","value")}}var TD=({dt:t})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${t("progressbar.height")};
    background: ${t("progressbar.background")};
    border-radius: ${t("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${t("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${t("progressbar.label.color")};
    font-size: ${t("progressbar.label.font.size")};
    font-weight: ${t("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,AD={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},Ag=(()=>{class t extends ue{name="progressbar";theme=TD;classes=AD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Qu=(()=>{class t extends ae{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=w(Ag);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,_D,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{value:[2,"value","value",Me],showValue:[2,"showValue","showValue",P],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[oe([Ag]),O],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(n,r){n&1&&(D(0,"div",0),A(1,xD,4,13,"div",1)(2,ED,2,7,"div",2),x()),n&2&&(V(r.styleClass),m("ngStyle",r.style)("ngClass",oi(12,CD,r.mode==="determinate",r.mode==="indeterminate")),T("aria-valuemin",0)("aria-valuenow",r.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",r.value+r.unit),b(),m("ngIf",r.mode==="determinate"),b(),m("ngIf",r.mode==="indeterminate"))},dependencies:[le,We,Ue,Je,vt,te],encapsulation:2,changeDetection:0})}return t})(),Q5=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Qu,te,te]})}return t})();var ID=["file"],kD=["header"],Ig=["content"],FD=["toolbar"],MD=["chooseicon"],RD=["filelabel"],LD=["uploadicon"],OD=["cancelicon"],PD=["empty"],ND=["advancedfileinput"],BD=["basicfileinput"],$D=(t,i,e,n,r)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,uploadCallback:r}),VD=(t,i,e,n,r,s,l,d)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,removeUploadedFileCallback:r,removeFileCallback:s,progress:l,messages:d}),UD=t=>({$implicit:t});function jD(t,i){if(t&1&&M(0,"span"),t&2){let e=_(3);V(e.chooseIcon),T("aria-label",!0)("data-pc-section","chooseicon")}}function HD(t,i){t&1&&M(0,"PlusIcon"),t&2&&T("aria-label",!0)("data-pc-section","chooseicon")}function zD(t,i){}function qD(t,i){t&1&&A(0,zD,0,0,"ng-template")}function WD(t,i){if(t&1&&(D(0,"span"),A(1,qD,1,0,null,11),x()),t&2){let e=_(4);T("aria-label",!0)("data-pc-section","chooseicon"),b(),m("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function GD(t,i){if(t&1&&(He(0),A(1,HD,1,2,"PlusIcon",9)(2,WD,2,3,"span",9),ze()),t&2){let e=_(3);b(),m("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),b(),m("ngIf",e.chooseIconTemplate||e._chooseIconTemplate)}}function KD(t,i){if(t&1&&M(0,"span",21),t&2){let e=_(4);m("ngClass",e.uploadIcon),T("aria-hidden",!0)}}function QD(t,i){t&1&&M(0,"UploadIcon")}function YD(t,i){}function ZD(t,i){t&1&&A(0,YD,0,0,"ng-template")}function XD(t,i){if(t&1&&(D(0,"span"),A(1,ZD,1,0,null,11),x()),t&2){let e=_(5);T("aria-hidden",!0),b(),m("ngTemplateOutlet",e.uploadIconTemplate||e._uploadIconTemplate)}}function JD(t,i){if(t&1&&(He(0),A(1,QD,1,0,"UploadIcon",9)(2,XD,2,2,"span",9),ze()),t&2){let e=_(4);b(),m("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),b(),m("ngIf",e.uploadIconTemplate||e._uploadIconTemplate)}}function ex(t,i){if(t&1){let e=Te();D(0,"p-button",19),ee("onClick",function(){X(e);let r=_(3);return J(r.upload())}),A(1,KD,1,2,"span",20)(2,JD,3,2,"ng-container",9),x()}if(t&2){let e=_(3);m("label",e.uploadButtonLabel)("disabled",!e.hasFiles()||e.isFileLimitExceeded())("styleClass","p-fileupload-upload-button "+e.uploadStyleClass)("buttonProps",e.uploadButtonProps),b(),m("ngIf",e.uploadIcon),b(),m("ngIf",!e.uploadIcon)}}function tx(t,i){if(t&1&&M(0,"span",21),t&2){let e=_(4);m("ngClass",e.cancelIcon)}}function nx(t,i){t&1&&M(0,"TimesIcon"),t&2&&T("aria-hidden",!0)}function ix(t,i){}function rx(t,i){t&1&&A(0,ix,0,0,"ng-template")}function ox(t,i){if(t&1&&(D(0,"span"),A(1,rx,1,0,null,11),x()),t&2){let e=_(5);T("aria-hidden",!0),b(),m("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function ax(t,i){if(t&1&&(He(0),A(1,nx,1,1,"TimesIcon",9)(2,ox,2,2,"span",9),ze()),t&2){let e=_(4);b(),m("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),b(),m("ngIf",e.cancelIconTemplate||e._cancelIconTemplate)}}function sx(t,i){if(t&1){let e=Te();D(0,"p-button",19),ee("onClick",function(){X(e);let r=_(3);return J(r.clear())}),A(1,tx,1,1,"span",20)(2,ax,3,2,"ng-container",9),x()}if(t&2){let e=_(3);m("label",e.cancelButtonLabel)("disabled",!e.hasFiles()||e.uploading)("styleClass","p-fileupload-cancel-button "+e.cancelStyleClass)("buttonProps",e.cancelButtonProps),b(),m("ngIf",e.cancelIcon),b(),m("ngIf",!e.cancelIcon)}}function lx(t,i){if(t&1){let e=Te();He(0),D(1,"p-button",16),ee("focus",function(){X(e);let r=_(2);return J(r.onFocus())})("blur",function(){X(e);let r=_(2);return J(r.onBlur())})("onClick",function(){X(e);let r=_(2);return J(r.choose())})("keydown.enter",function(){X(e);let r=_(2);return J(r.choose())}),D(2,"input",7,0),ee("change",function(r){X(e);let s=_(2);return J(s.onFileSelect(r))}),x(),A(4,jD,1,4,"span",17)(5,GD,3,2,"ng-container",9),x(),A(6,ex,3,6,"p-button",18)(7,sx,3,6,"p-button",18),ze()}if(t&2){let e=_(2);b(),m("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled||e.isChooseDisabled())("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),T("data-pc-section","choosebutton"),b(),m("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),T("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),b(2),m("ngIf",e.chooseIcon),b(),m("ngIf",!e.chooseIcon),b(),m("ngIf",!e.auto&&e.showUploadButton),b(),m("ngIf",!e.auto&&e.showCancelButton)}}function cx(t,i){t&1&&xe(0)}function ux(t,i){t&1&&xe(0)}function dx(t,i){if(t&1&&M(0,"p-progressbar",22),t&2){let e=_(2);m("value",e.progress)("showValue",!1)}}function px(t,i){if(t&1&&M(0,"p-message",14),t&2){let e=i.$implicit;m("severity",e.severity)("text",e.text)}}function hx(t,i){if(t&1){let e=Te();D(0,"img",33),ee("error",function(r){X(e);let s=_(5);return J(s.imageError(r))}),x()}if(t&2){let e=_().$implicit,n=_(4);m("src",e.objectURL,Bp)("width",n.previewWidth)}}function fx(t,i){t&1&&M(0,"TimesIcon")}function mx(t,i){}function gx(t,i){t&1&&A(0,mx,0,0,"ng-template")}function bx(t,i){if(t&1&&A(0,fx,1,0,"TimesIcon",9)(1,gx,1,0,null,11),t&2){let e=_(5);m("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),b(),m("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function vx(t,i){if(t&1){let e=Te();D(0,"div",24),A(1,hx,1,2,"img",27),D(2,"div",28)(3,"div",29),ge(4),x(),D(5,"span",30),ge(6),x()(),D(7,"div",31)(8,"p-button",32),ee("onClick",function(r){let s=X(e).index,l=_(4);return J(l.remove(r,s))}),A(9,bx,2,2,"ng-template",null,2,xn),x()()()}if(t&2){let e=i.$implicit,n=_(4);b(),m("ngIf",n.isImage(e)),b(3),qe(e.name),b(2),qe(n.formatSize(e.size)),b(2),m("disabled",n.uploading)("styleClass","p-fileupload-file-remove-button "+n.removeStyleClass)}}function yx(t,i){if(t&1&&A(0,vx,11,5,"div",26),t&2){let e=_(3);m("ngForOf",e.files)}}function _x(t,i){}function Cx(t,i){if(t&1&&A(0,_x,0,0,"ng-template",25),t&2){let e=_(3);m("ngForOf",e.files)("ngForTemplate",e.fileTemplate||e._fileTemplate)}}function wx(t,i){if(t&1&&(D(0,"div",23),A(1,yx,1,1,"div",24)(2,Cx,1,2,null,25),x()),t&2){let e=_(2);b(),Ee(!e.fileTemplate&&!e._fileTemplate?1:-1),b(),Ee(e.fileTemplate||e._fileTemplate?2:-1)}}function Sx(t,i){t&1&&xe(0)}function Dx(t,i){t&1&&xe(0)}function xx(t,i){if(t&1&&A(0,Dx,1,0,"ng-container",11),t&2){let e=_(2);m("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Ex(t,i){if(t&1){let e=Te();D(0,"div",6)(1,"input",7,0),ee("change",function(r){X(e);let s=_();return J(s.onFileSelect(r))}),x(),D(3,"div",8),A(4,lx,8,15,"ng-container",9)(5,cx,1,0,"ng-container",10)(6,ux,1,0,"ng-container",11),x(),D(7,"div",12,1),ee("dragenter",function(r){X(e);let s=_();return J(s.onDragEnter(r))})("dragleave",function(r){X(e);let s=_();return J(s.onDragLeave(r))})("drop",function(r){X(e);let s=_();return J(s.onDrop(r))}),A(9,dx,1,2,"p-progressbar",13),uc(10,px,1,2,"p-message",14,cc),A(12,wx,3,2,"div",15)(13,Sx,1,0,"ng-container",10)(14,xx,1,1,"ng-container"),x()()}if(t&2){let e=_();V(e.styleClass),m("ngClass","p-fileupload p-fileupload-advanced p-component")("ngStyle",e.style),T("data-pc-name","fileupload")("data-pc-section","root"),b(),Dn("display","none"),m("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),T("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),b(3),m("ngIf",!e.headerTemplate&&!e._headerTemplate),b(),m("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",ja(24,$D,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.upload.bind(e))),b(),m("ngTemplateOutlet",e.toolbarTemplate||e._toolbarTemplate),b(),T("data-pc-section","content"),b(2),m("ngIf",e.hasFiles()),b(),dc(e.msgs),b(2),m("ngIf",e.hasFiles()),b(),m("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Qp(30,VD,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.removeUploadedFile.bind(e),e.remove.bind(e),e.progress,e.msgs)),b(),Ee((e.emptyTemplate||e._emptyTemplate)&&!e.hasFiles()&&!e.hasUploadedFiles()?14:-1)}}function Tx(t,i){if(t&1&&M(0,"p-message",14),t&2){let e=i.$implicit;m("severity",e.severity)("text",e.text)}}function Ax(t,i){if(t&1&&M(0,"span",37),t&2){let e=_(4);m("ngClass",e.uploadIcon)}}function Ix(t,i){t&1&&M(0,"UploadIcon",40),t&2&&m("styleClass","p-button-icon p-button-icon-left")}function kx(t,i){}function Fx(t,i){t&1&&A(0,kx,0,0,"ng-template")}function Mx(t,i){if(t&1&&(D(0,"span",41),A(1,Fx,1,0,null,11),x()),t&2){let e=_(5);b(),m("ngTemplateOutlet",e._uploadIconTemplate||e.uploadIconTemplate)}}function Rx(t,i){if(t&1&&(He(0),A(1,Ix,1,1,"UploadIcon",38)(2,Mx,2,1,"span",39),ze()),t&2){let e=_(4);b(),m("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),b(),m("ngIf",e._uploadIconTemplate||e.uploadIconTemplate)}}function Lx(t,i){if(t&1&&A(0,Ax,1,1,"span",36)(1,Rx,3,2,"ng-container",9),t&2){let e=_(3);m("ngIf",e.uploadIcon),b(),m("ngIf",!e.uploadIcon)}}function Ox(t,i){if(t&1&&M(0,"span",43),t&2){let e=_(4);m("ngClass",e.chooseIcon)}}function Px(t,i){t&1&&M(0,"PlusIcon"),t&2&&T("data-pc-section","uploadicon")}function Nx(t,i){}function Bx(t,i){t&1&&A(0,Nx,0,0,"ng-template")}function $x(t,i){if(t&1&&(He(0),A(1,Px,1,1,"PlusIcon",9)(2,Bx,1,0,null,11),ze()),t&2){let e=_(4);b(),m("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),b(),m("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function Vx(t,i){if(t&1&&A(0,Ox,1,1,"span",42)(1,$x,3,2,"ng-container",9),t&2){let e=_(3);m("ngIf",e.chooseIcon),b(),m("ngIf",!e.chooseIcon)}}function Ux(t,i){if(t&1&&A(0,Lx,2,2)(1,Vx,2,2),t&2){let e=_(2);Ee(e.hasFiles()&&!e.auto?0:1)}}function jx(t,i){if(t&1&&(D(0,"span"),ge(1),x()),t&2){let e=_(3);V(e.cx("filelabel")),b(),mt(" ",e.basicFileChosenLabel()," ")}}function Hx(t,i){t&1&&xe(0)}function zx(t,i){if(t&1&&A(0,Hx,1,0,"ng-container",10),t&2){let e=_(3);m("ngTemplateOutlet",e.fileLabelTemplate||e._fileLabelTemplate)("ngTemplateOutletContext",ke(2,UD,e.files))}}function qx(t,i){if(t&1&&A(0,jx,2,3,"span",44)(1,zx,1,4,"ng-container"),t&2){let e=_(2);Ee(!e.fileLabelTemplate&&!e._fileLabelTemplate?0:1)}}function Wx(t,i){if(t&1){let e=Te();D(0,"div",21),uc(1,Tx,1,2,"p-message",14,cc),D(3,"p-button",34),ee("onClick",function(){X(e);let r=_();return J(r.onBasicUploaderClick())})("keydown",function(r){X(e);let s=_();return J(s.onBasicKeydown(r))}),A(4,Ux,2,1,"ng-template",null,2,xn),D(6,"input",35,3),ee("change",function(r){X(e);let s=_();return J(s.onFileSelect(r))})("focus",function(){X(e);let r=_();return J(r.onFocus())})("blur",function(){X(e);let r=_();return J(r.onBlur())}),x()(),A(8,qx,2,1),x()}if(t&2){let e=_();V(e.styleClass),m("ngClass","p-fileupload p-fileupload-basic p-component"),T("data-pc-name","fileupload"),b(),dc(e.msgs),b(2),St(e.style),m("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled)("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),b(3),m("accept",e.accept)("multiple",e.multiple)("disabled",e.disabled),T("aria-label",e.browseFilesLabel)("data-pc-section","input"),b(2),Ee(e.auto?-1:8)}}var Gx=({dt:t})=>`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${t("fileupload.border.color")};
    border-radius: ${t("fileupload.border.radius")};
    background: ${t("fileupload.background")};
    color: ${t("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${t("fileupload.header.padding")};
    background: ${t("fileupload.header.background")};
    color: ${t("fileupload.header.color")};
    border-style: solid;
    border-width: ${t("fileupload.header.border.width")};
    border-color: ${t("fileupload.header.border.color")};
    border-radius: ${t("fileupload.header.border.radius")};
    gap: ${t("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.content.gap")};
    transition: border-color ${t("fileupload.transition.duration")};
    padding: ${t("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${t("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${t("fileupload.file.padding")};
    border-bottom: 1px solid ${t("fileupload.file.border.color")};
    gap: ${t("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${t("fileupload.content.highlight.border.color")};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${t("fileupload.basic.gap")};
}
`,Kx={root:({instance:t})=>`p-fileupload p-fileupload-${t.mode} p-component`,header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},kg=(()=>{class t extends ue{name="fileupload";theme=Gx;classes=Kx;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Yu=(()=>{class t extends ae{name;url;method="post";multiple;accept;disabled;auto;withCredentials;maxFileSize;invalidFileSizeMessageSummary="{0}: Invalid file size, ";invalidFileSizeMessageDetail="maximum upload size is {0}.";invalidFileTypeMessageSummary="{0}: Invalid file type, ";invalidFileTypeMessageDetail="allowed file types: {0}.";invalidFileLimitMessageDetail="limit is {0} at most.";invalidFileLimitMessageSummary="Maximum number of files exceeded, ";style;styleClass;previewWidth=50;chooseLabel;uploadLabel;cancelLabel;chooseIcon;uploadIcon;cancelIcon;showUploadButton=!0;showCancelButton=!0;mode="advanced";headers;customUpload;fileLimit;uploadStyleClass;cancelStyleClass;removeStyleClass;chooseStyleClass;chooseButtonProps;uploadButtonProps={severity:"secondary"};cancelButtonProps={severity:"secondary"};onBeforeUpload=new W;onSend=new W;onUpload=new W;onError=new W;onClear=new W;onRemove=new W;onSelect=new W;onProgress=new W;uploadHandler=new W;onImageError=new W;onRemoveUploadedFile=new W;fileTemplate;headerTemplate;contentTemplate;toolbarTemplate;chooseIconTemplate;fileLabelTemplate;uploadIconTemplate;cancelIconTemplate;emptyTemplate;advancedFileInput;basicFileInput;content;set files(e){this._files=[];for(let n=0;n<e.length;n++){let r=e[n];this.validate(r)&&(this.isImage(r)&&(r.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[n]))),this._files.push(e[n]))}}get files(){return this._files}get basicButtonLabel(){return this.auto||!this.hasFiles()?this.chooseLabel:this.uploadLabel??this.files[0].name}_files=[];progress=0;dragHighlight;msgs;uploadedFileCount=0;focus;uploading;duplicateIEEvent;translationSubscription;dragOverListener;uploadedFiles=[];sanitizer=w(Mc);zone=w(ft);http=w(rs);_componentStyle=w(kg);ngOnInit(){super.ngOnInit(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()})}ngAfterViewInit(){super.ngAfterViewInit(),En(this.platformId)&&this.mode==="advanced"&&this.zone.runOutsideAngular(()=>{this.content&&(this.dragOverListener=this.renderer.listen(this.content.nativeElement,"dragover",this.onDragOver.bind(this)))})}_headerTemplate;_contentTemplate;_toolbarTemplate;_chooseIconTemplate;_uploadIconTemplate;_cancelIconTemplate;_emptyTemplate;_fileTemplate;_fileLabelTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"file":this._fileTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"toolbar":this._toolbarTemplate=e.template;break;case"chooseicon":this._chooseIconTemplate=e.template;break;case"uploadicon":this._uploadIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"filelabel":this._fileLabelTemplate=e.template;break;default:this._fileTemplate=e.template;break}})}basicFileChosenLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles()?this.files&&this.files.length===1?this.files[0].name:this.config.getTranslation("fileChosenMessage")?.replace("{0}",this.files.length):this.config.getTranslation("noFileChosenMessage")||""}getTranslation(e){return this.config.getTranslation(e)}choose(){this.advancedFileInput?.nativeElement.click()}onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.msgs=[],this.multiple||(this.files=[]);let n=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let r=0;r<n.length;r++){let s=n[r];this.isFileSelected(s)||this.validate(s)&&(this.isImage(s)&&(s.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(n[r]))),this.files.push(n[r]))}this.onSelect.emit({originalEvent:e,files:n,currentFiles:this.files}),this.checkFileLimit(n),this.hasFiles()&&this.auto&&(this.mode!=="advanced"||!this.isFileLimitExceeded())&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()}isFileSelected(e){for(let n of this.files)if(n.name+n.type+n.size===e.name+e.type+e.size)return!0;return!1}isIE11(){if(En(this.platformId))return!!this.document.defaultView.MSInputMethodContext&&!!this.document.documentMode}validate(e){if(this.msgs=this.msgs||[],this.accept&&!this.isFileTypeValid(e)){let n=`${this.invalidFileTypeMessageSummary.replace("{0}",e.name)} ${this.invalidFileTypeMessageDetail.replace("{0}",this.accept)}`;return this.msgs.push({severity:"error",text:n}),!1}if(this.maxFileSize&&e.size>this.maxFileSize){let n=`${this.invalidFileSizeMessageSummary.replace("{0}",e.name)} ${this.invalidFileSizeMessageDetail.replace("{0}",this.formatSize(this.maxFileSize))}`;return this.msgs.push({severity:"error",text:n}),!1}return!0}isFileTypeValid(e){let n=this.accept?.split(",").map(r=>r.trim());for(let r of n)if(this.isWildcard(r)?this.getTypeClass(e.type)===this.getTypeClass(r):e.type==r||this.getFileExtension(e).toLowerCase()===r.toLowerCase())return!0;return!1}getTypeClass(e){return e.substring(0,e.indexOf("/"))}isWildcard(e){return e.indexOf("*")!==-1}getFileExtension(e){return"."+e.name.split(".").pop()}isImage(e){return/^image\//.test(e.type)}onImageLoad(e){window.URL.revokeObjectURL(e.src)}uploader(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.uploadHandler.emit({files:this.files}),this.cd.markForCheck();else{this.uploading=!0,this.msgs=[];let e=new FormData;this.onBeforeUpload.emit({formData:e});for(let n=0;n<this.files.length;n++)e.append(this.name,this.files[n],this.files[n].name);this.http.request(this.method,this.url,{body:e,headers:this.headers,reportProgress:!0,observe:"events",withCredentials:this.withCredentials}).subscribe(n=>{switch(n.type){case hn.Sent:this.onSend.emit({originalEvent:n,formData:e});break;case hn.Response:this.uploading=!1,this.progress=0,n.status>=200&&n.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.onUpload.emit({originalEvent:n,files:this.files})):this.onError.emit({files:this.files}),this.uploadedFiles.push(...this.files),this.clear();break;case hn.UploadProgress:{n.loaded&&(this.progress=Math.round(n.loaded*100/n.total)),this.onProgress.emit({originalEvent:n,progress:this.progress});break}}this.cd.markForCheck()},n=>{this.uploading=!1,this.onError.emit({files:this.files,error:n})})}}clear(){this.files=[],this.uploadedFileCount=0,this.onClear.emit(),this.clearInputElement(),this.msgs=[],this.cd.markForCheck()}remove(e,n){this.clearInputElement(),this.onRemove.emit({originalEvent:e,file:this.files[n]}),this.files.splice(n,1),this.checkFileLimit(this.files)}removeUploadedFile(e){let n=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.onRemoveUploadedFile.emit({file:n,files:this.uploadedFiles})}isFileLimitExceeded(){let n=this.auto?this.files.length:this.files.length+this.uploadedFileCount;return this.fileLimit&&this.fileLimit<=n&&this.focus&&(this.focus=!1),this.fileLimit&&this.fileLimit<n}isChooseDisabled(){return this.auto?this.fileLimit&&this.fileLimit<=this.files.length:this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount}checkFileLimit(e){this.msgs??=[];let n=this.msgs.length>0&&this.fileLimit&&this.fileLimit<e.length;if(this.isFileLimitExceeded()||n){let r=`${this.invalidFileLimitMessageSummary.replace("{0}",this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}",this.fileLimit.toString())}`;this.msgs.push({severity:"error",text:r})}else this.msgs=this.msgs.filter(r=>!r.text.includes(this.invalidFileLimitMessageSummary))}clearInputElement(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.advancedFileInput.nativeElement.value=""),this.basicFileInput&&this.basicFileInput.nativeElement&&(this.basicFileInput.nativeElement.value="")}clearIEInput(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.duplicateIEEvent=!0,this.advancedFileInput.nativeElement.value="")}hasFiles(){return this.files&&this.files.length>0}hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0}onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())}onDragOver(e){this.disabled||(Mn(this.content?.nativeElement,"p-fileupload-highlight"),this.dragHighlight=!0,e.stopPropagation(),e.preventDefault())}onDragLeave(e){this.disabled||Rn(this.content?.nativeElement,"p-fileupload-highlight")}onDrop(e){if(!this.disabled){Rn(this.content?.nativeElement,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();let n=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||n&&n.length===1)&&this.onFileSelect(e)}}onFocus(){this.focus=!0}onBlur(){this.focus=!1}formatSize(e){let s=this.getTranslation(vi.FILE_SIZE_TYPES);if(e===0)return`0 ${s[0]}`;let l=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,l)).toFixed(3)} ${s[l]}`}upload(){this.hasFiles()&&this.uploader()}onBasicUploaderClick(){this.basicFileInput?.nativeElement.click()}onBasicKeydown(e){switch(e.code){case"Space":case"Enter":this.onBasicUploaderClick(),e.preventDefault();break}}imageError(e){this.onImageError.emit(e)}getBlockableElement(){return this.el.nativeElement.children[0]}get chooseButtonLabel(){return this.chooseLabel||this.config.getTranslation(vi.CHOOSE)}get uploadButtonLabel(){return this.uploadLabel||this.config.getTranslation(vi.UPLOAD)}get cancelButtonLabel(){return this.cancelLabel||this.config.getTranslation(vi.CANCEL)}get browseFilesLabel(){return this.config.getTranslation(vi.ARIA)[vi.BROWSE_FILES]}get pendingLabel(){return this.config.getTranslation(vi.PENDING)}ngOnDestroy(){this.content&&this.content.nativeElement&&this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-fileupload"],["p-fileUpload"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,ID,4),Y(s,kD,4),Y(s,Ig,4),Y(s,FD,4),Y(s,MD,4),Y(s,RD,4),Y(s,LD,4),Y(s,OD,4),Y(s,PD,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.fileTemplate=l.first),j(l=H())&&(r.headerTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.toolbarTemplate=l.first),j(l=H())&&(r.chooseIconTemplate=l.first),j(l=H())&&(r.fileLabelTemplate=l.first),j(l=H())&&(r.uploadIconTemplate=l.first),j(l=H())&&(r.cancelIconTemplate=l.first),j(l=H())&&(r.emptyTemplate=l.first),j(l=H())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&(ln(ND,5),ln(BD,5),ln(Ig,5)),n&2){let s;j(s=H())&&(r.advancedFileInput=s.first),j(s=H())&&(r.basicFileInput=s.first),j(s=H())&&(r.content=s.first)}},inputs:{name:"name",url:"url",method:"method",multiple:[2,"multiple","multiple",P],accept:"accept",disabled:[2,"disabled","disabled",P],auto:[2,"auto","auto",P],withCredentials:[2,"withCredentials","withCredentials",P],maxFileSize:[2,"maxFileSize","maxFileSize",Me],invalidFileSizeMessageSummary:"invalidFileSizeMessageSummary",invalidFileSizeMessageDetail:"invalidFileSizeMessageDetail",invalidFileTypeMessageSummary:"invalidFileTypeMessageSummary",invalidFileTypeMessageDetail:"invalidFileTypeMessageDetail",invalidFileLimitMessageDetail:"invalidFileLimitMessageDetail",invalidFileLimitMessageSummary:"invalidFileLimitMessageSummary",style:"style",styleClass:"styleClass",previewWidth:[2,"previewWidth","previewWidth",Me],chooseLabel:"chooseLabel",uploadLabel:"uploadLabel",cancelLabel:"cancelLabel",chooseIcon:"chooseIcon",uploadIcon:"uploadIcon",cancelIcon:"cancelIcon",showUploadButton:[2,"showUploadButton","showUploadButton",P],showCancelButton:[2,"showCancelButton","showCancelButton",P],mode:"mode",headers:"headers",customUpload:[2,"customUpload","customUpload",P],fileLimit:[2,"fileLimit","fileLimit",e=>Me(e,null)],uploadStyleClass:"uploadStyleClass",cancelStyleClass:"cancelStyleClass",removeStyleClass:"removeStyleClass",chooseStyleClass:"chooseStyleClass",chooseButtonProps:"chooseButtonProps",uploadButtonProps:"uploadButtonProps",cancelButtonProps:"cancelButtonProps",files:"files"},outputs:{onBeforeUpload:"onBeforeUpload",onSend:"onSend",onUpload:"onUpload",onError:"onError",onClear:"onClear",onRemove:"onRemove",onSelect:"onSelect",onProgress:"onProgress",uploadHandler:"uploadHandler",onImageError:"onImageError",onRemoveUploadedFile:"onRemoveUploadedFile"},features:[oe([kg]),O],decls:2,vars:2,consts:[["advancedfileinput",""],["content",""],["icon",""],["basicfileinput",""],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","file",3,"change","multiple","accept","disabled"],[1,"p-fileupload-header"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"p-fileupload-content",3,"dragenter","dragleave","drop"],[3,"value","showValue",4,"ngIf"],[3,"severity","text"],["class","p-fileupload-file-list",4,"ngIf"],[3,"focus","blur","onClick","keydown.enter","styleClass","disabled","label","buttonProps"],[3,"class",4,"ngIf"],[3,"label","disabled","styleClass","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","disabled","styleClass","buttonProps"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"value","showValue"],[1,"p-fileupload-file-list"],[1,"p-fileupload-file"],["ngFor","",3,"ngForOf","ngForTemplate"],["class","p-fileupload-file",4,"ngFor","ngForOf"],["class","p-fileupload-file-thumbnail",3,"src","width","error",4,"ngIf"],[1,"p-fileupload-file-info"],[1,"p-fileupload-file-name"],[1,"p-fileupload-file-size"],[1,"p-fileupload-file-actions"],["text","","rounded","","severity","danger",3,"onClick","disabled","styleClass"],[1,"p-fileupload-file-thumbnail",3,"error","src","width"],[3,"onClick","keydown","styleClass","disabled","label","buttonProps"],["type","file",3,"change","focus","blur","accept","multiple","disabled"],["class","p-button-icon p-button-icon-left",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-button-icon p-button-icon-left",4,"ngIf"],[3,"styleClass"],[1,"p-button-icon","p-button-icon-left"],["class","p-button-icon p-button-icon-left pi",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left","pi",3,"ngClass"],[3,"class"]],template:function(n,r){n&1&&A(0,Ex,15,39,"div",4)(1,Wx,9,16,"div",5),n&2&&(m("ngIf",r.mode==="advanced"),b(),m("ngIf",r.mode==="basic"))},dependencies:[le,We,si,Ue,Je,vt,qn,Qu,Wn,Nm,Vm,Wr,te],encapsulation:2,changeDetection:0})}return t})(),Fg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Yu,te,te]})}return t})();function Yx(t,i){}function Zx(t,i){}function Xx(t,i){if(t&1&&M(0,"p-message",15),t&2){let e=_(2);m("text",e.error)}}function Jx(t,i){if(t&1){let e=Te();D(0,"div",8)(1,"p",9),M(2,"i",10),ge(3),M(4,"br"),ge(5),x()(),A(6,Xx,1,1,"p-message",11),D(7,"div",12)(8,"p-button",13),$e(9,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.emitData())}),x(),D(10,"p-button",14),$e(11,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.loadSampleData())}),x()()}if(t&2){let e=i.$implicit,n=_();b(3),qe(e.name),b(2),mt("",n.formatSize(e.size)," "),b(),m("ngIf",n.error),b(2),m("label",Ve(9,7,"page.upload.continue"))("loading",n.loading)("disabled",!n.uploadedFileName),b(2),m("label",Ve(11,9,"page.upload.sample"))}}function eE(t,i){if(t&1&&M(0,"p-message",15),t&2){let e=_(2);m("text",e.error)}}function tE(t,i){if(t&1){let e=Te();D(0,"p-button",14),$e(1,"translate"),ee("onClick",function(){X(e);let r=_(2);return J(r.loadSampleData())}),x()}t&2&&m("label",Ve(1,1,"page.upload.sample"))}function nE(t,i){if(t&1){let e=Te();D(0,"div",16),ee("click",function(){X(e),_();let r=Xt(5);return J(r.choose())}),M(1,"i",17),D(2,"p",18),ge(3),$e(4,"translate"),x()(),A(5,eE,1,1,"p-message",11),D(6,"div",12)(7,"p-button",13),$e(8,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.emitData())}),x(),A(9,tE,2,3,"p-button",19),x()}if(t&2){let e=_();b(3),qe(Ve(4,6,"page.upload.word.instruction")),b(2),m("ngIf",e.error),b(2),m("label",Ve(8,8,"page.upload.continue"))("loading",e.loading)("disabled",!e.uploadedFileName),b(2),m("ngIf",e.showSampleDataButton)}}var Mg=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;uploadComplete=new W;error="";loading=!1;extractedHtml="";uploadedFileName="";formatSize(i){let r=this.translate.instant("fileSizeTypes"),s=this.translate.instant("fileSizeTypes.warning");if(!r||!Array.isArray(r))return console.warn(s),`${i} B`;if(i===0)return`0 ${r[0]}`;let l=Math.floor(Math.log(i)/Math.log(1024)),d=parseFloat((i/Math.pow(1024,l)).toFixed(1)),h=Math.min(l,r.length-1);return`${d} ${r[h]}`}getWordContent(i){this.loading=!0;let e=this.translate.instant("page.upload.word.error.upload"),n=this.translate.instant("page.upload.word.error.doc"),r=this.translate.instant("page.upload.error.unknown"),s=this.translate.instant("page.upload.word.error.try"),l=i.files?.[0];if(!l){this.error=e,this.loading=!1;return}this.uploadedFileName=l.name;let d=new FileReader;d.onload=()=>De(this,null,function*(){let h=d.result;try{var g=(yield(yield import("./chunk-LDKNIF4L.js")).convertToHtml({arrayBuffer:h})).value.trim();if(!g){this.error=n;return}g=yield this.urlDataService.formatHtml(g,"word"),this.extractedHtml=g}catch(y){this.error=`${s} ${y.message||y||r}`}finally{this.loading=!1}}),d.readAsArrayBuffer(l)}emitData(){this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.uploadedFileName,originalHtml:this.extractedHtml,modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.uploadComplete.emit()}loadSampleData(){return De(this,null,function*(){yield this.urlDataService.loadSampleDataset("word"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(B(xi),B(On),B(Hn))};static \u0275cmp=N({type:t,selectors:[["ca-upload-word"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:14,vars:4,consts:[["fileUploadRef",""],["header",""],["content",""],["file",""],["empty",""],[1,"border-none","p-0","m-0"],[1,"font-bold","mb-3","p-0"],["name","word[]","accept",".docx","auto","true","maxFileSize","1000000","mode","advanced","styleClass","border-none",3,"uploadHandler","customUpload"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-solid","border-round","border-200","surface-100"],[1,"text-xl"],[1,"pi","pi-file-word","text-blue-500","text-2xl","mr-1"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"onClick","label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"onClick","label"],["severity","error",3,"text"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-dashed","border-round","border-200","surface-100","hover:surface-200","hover:border-primary-400","transition-colors","transition-duration-500","cursor-pointer",3,"click"],[1,"pi","pi-upload","border-2","border-circle","border-300","p-4","text-5xl","text-color-secondary"],[1,"m-0","mt-3"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"]],template:function(e,n){if(e&1){let r=Te();D(0,"fieldset",5)(1,"legend",6),ge(2),$e(3,"translate"),x(),D(4,"p-fileupload",7,0),ee("uploadHandler",function(l){return X(r),J(n.getWordContent(l))}),A(6,Yx,0,0,"ng-template",null,1,xn)(8,Zx,0,0,"ng-template",null,2,xn)(10,Jx,12,11,"ng-template",null,3,xn)(12,nE,10,10,"ng-template",null,4,xn),x()()}e&2&&(b(2),mt(" ",Ve(3,2,"page.upload.word.legend")," "),b(2),m("customUpload",!0))},dependencies:[le,Ue,di,ui,Ci,Fg,Yu,Gr,qn,Wn],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .p-fileupload-header{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload-content{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload .p-progressbar{margin:0!important;padding:0!important;height:0!important;display:none!important;border:none!important}  .p-fileupload{--p-fileupload-content-gap: 0rem}"]})};var iE=["checkboxicon"],rE=["input"],oE=()=>({"p-checkbox-input":!0}),aE=t=>({checked:t,class:"p-checkbox-icon"});function sE(t,i){if(t&1&&M(0,"span",8),t&2){let e=_(3);m("ngClass",e.checkboxIcon),T("data-pc-section","icon")}}function lE(t,i){t&1&&M(0,"CheckIcon",9),t&2&&(m("styleClass","p-checkbox-icon"),T("data-pc-section","icon"))}function cE(t,i){if(t&1&&(He(0),A(1,sE,1,2,"span",7)(2,lE,1,2,"CheckIcon",6),ze()),t&2){let e=_(2);b(),m("ngIf",e.checkboxIcon),b(),m("ngIf",!e.checkboxIcon)}}function uE(t,i){t&1&&M(0,"MinusIcon",9),t&2&&(m("styleClass","p-checkbox-icon"),T("data-pc-section","icon"))}function dE(t,i){if(t&1&&(He(0),A(1,cE,3,2,"ng-container",4)(2,uE,1,2,"MinusIcon",6),ze()),t&2){let e=_();b(),m("ngIf",e.checked),b(),m("ngIf",e._indeterminate())}}function pE(t,i){}function hE(t,i){t&1&&A(0,pE,0,0,"ng-template")}var fE=({dt:t})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${t("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${t("checkbox.border.radius")};
    border: 1px solid ${t("checkbox.border.color")};
    background: ${t("checkbox.background")};
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
    transition: background ${t("checkbox.transition.duration")}, color ${t("checkbox.transition.duration")}, border-color ${t("checkbox.transition.duration")}, box-shadow ${t("checkbox.transition.duration")}, outline-color ${t("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${t("checkbox.transition.duration")};
    color: ${t("checkbox.icon.color")};
    font-size: ${t("checkbox.icon.size")};
    width: ${t("checkbox.icon.size")};
    height: ${t("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${t("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${t("checkbox.checked.border.color")};
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
    border-color: ${t("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.focus.border.color")};
    box-shadow: ${t("checkbox.focus.ring.shadow")};
    outline: ${t("checkbox.focus.ring.width")} ${t("checkbox.focus.ring.style")} ${t("checkbox.focus.ring.color")};
    outline-offset: ${t("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${t("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${t("checkbox.disabled.background")};
    border-color: ${t("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${t("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${t("checkbox.sm.width")};
    height: ${t("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${t("checkbox.icon.sm.size")};
    width: ${t("checkbox.icon.sm.size")};
    height: ${t("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${t("checkbox.lg.width")};
    height: ${t("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${t("checkbox.icon.lg.size")};
    width: ${t("checkbox.icon.lg.size")};
    height: ${t("checkbox.icon.lg.size")};
}
`,mE={root:({instance:t,props:i})=>["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Rg=(()=>{class t extends ue{name="checkbox";theme=fE;classes=mE;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var gE={provide:_i,useExisting:ut(()=>Lg),multi:!0},Lg=(()=>{class t extends ae{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new W;onFocus=new W;onBlur=new W;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Zf(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=Ke(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=w(Rg);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,r=this.injector.get(vn,null,{optional:!0,self:!0}),s=r&&!this.formControl?r.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=s.filter(l=>!Qi(l,this.value)):n=s?[...s,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,iE,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.checkboxIconTemplate=l.first),j(l=H())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&ln(rE,5),n&2){let s;j(s=H())&&(r.inputViewChild=s.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",P],binary:[2,"binary","binary",P],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Me],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",P],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",P],required:[2,"required","required",P],autofocus:[2,"autofocus","autofocus",P],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([gE,Rg]),O,ot],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,r){if(n&1){let s=Te();D(0,"div",1)(1,"input",2,0),ee("focus",function(d){return X(s),J(r.onInputFocus(d))})("blur",function(d){return X(s),J(r.onInputBlur(d))})("change",function(d){return X(s),J(r.handleChange(d))}),x(),D(3,"div",3),A(4,dE,3,2,"ng-container",4)(5,hE,1,0,null,5),x()()}n&2&&(St(r.style),V(r.styleClass),m("ngClass",r.containerClass),T("data-p-highlight",r.checked)("data-p-checked",r.checked)("data-p-disabled",r.disabled),b(),St(r.inputStyle),V(r.inputClass),m("value",r.value)("checked",r.checked)("disabled",r.disabled)("readonly",r.readonly)("ngClass",Gp(26,oE)),T("id",r.inputId)("name",r.name)("tabindex",r.tabindex)("required",r.required?!0:null)("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel),b(3),m("ngIf",!r.checkboxIconTemplate&&!r._checkboxIconTemplate),b(),m("ngTemplateOutlet",r.checkboxIconTemplate||r._checkboxIconTemplate)("ngTemplateOutletContext",ke(27,aE,r.checked)))},dependencies:[le,We,Ue,Je,sl,Pm,te],encapsulation:2,changeDetection:0})}return t})(),Y6=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Lg,te,te]})}return t})();var hl=["*"],bE=["toggleicon"],vE=t=>({active:t});function yE(t,i){}function _E(t,i){t&1&&A(0,yE,0,0,"ng-template")}function CE(t,i){if(t&1&&A(0,_E,1,0,null,0),t&2){let e=_();m("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",ke(2,vE,e.active()))}}function wE(t,i){if(t&1&&M(0,"span",4),t&2){let e=_(3);V(e.pcAccordion.collapseIcon),m("ngClass",e.pcAccordion.iconClass),T("aria-hidden",!0)}}function SE(t,i){if(t&1&&M(0,"ChevronDownIcon",4),t&2){let e=_(3);m("ngClass",e.pcAccordion.iconClass),T("aria-hidden",!0)}}function DE(t,i){if(t&1&&(He(0),A(1,wE,1,4,"span",2)(2,SE,1,2,"ChevronDownIcon",3),ze()),t&2){let e=_(2);b(),m("ngIf",e.pcAccordion.collapseIcon),b(),m("ngIf",!e.pcAccordion.collapseIcon)}}function xE(t,i){if(t&1&&M(0,"span",4),t&2){let e=_(3);V(e.pcAccordion.expandIcon),m("ngClass",e.pcAccordion.iconClass),T("aria-hidden",!0)}}function EE(t,i){if(t&1&&M(0,"ChevronUpIcon",4),t&2){let e=_(3);m("ngClass",e.pcAccordion.iconClass),T("aria-hidden",!0)}}function TE(t,i){if(t&1&&(He(0),A(1,xE,1,4,"span",2)(2,EE,1,2,"ChevronUpIcon",3),ze()),t&2){let e=_(2);b(),m("ngIf",e.pcAccordion.expandIcon),b(),m("ngIf",!e.pcAccordion.expandIcon)}}function AE(t,i){if(t&1&&A(0,DE,3,2,"ng-container",1)(1,TE,3,2,"ng-container",1),t&2){let e=_();m("ngIf",e.active()),b(),m("ngIf",!e.active())}}var dl=t=>({transitionParams:t}),Og=t=>({value:"visible",params:t}),Pg=t=>({value:"hidden",params:t}),IE=["header"],kE=["icon"],FE=["content"],ME=["*",[["p-header"]]],RE=["*","p-header"],LE=t=>({$implicit:t});function OE(t,i){if(t&1&&ge(0),t&2){let e=_();mt(" ",e.header," ")}}function PE(t,i){t&1&&xe(0)}function NE(t,i){if(t&1&&A(0,PE,1,0,"ng-container",4),t&2){let e=_(2);m("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function BE(t,i){t&1&&Be(0,1)}function $E(t,i){if(t&1&&A(0,NE,1,1,"ng-container")(1,BE,1,0),t&2){let e=_();Ee(e.headerTemplate||e._headerTemplate?0:-1),b(),Ee(e.headerFacet?1:-1)}}function VE(t,i){}function UE(t,i){t&1&&A(0,VE,0,0,"ng-template")}function jE(t,i){if(t&1&&A(0,UE,1,0,null,5),t&2){let e=_();m("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ke(2,LE,e.selected))}}function HE(t,i){if(t&1&&M(0,"span",8),t&2){let e=_(3);V(e.accordion.collapseIcon),m("ngClass",e.iconClass),T("aria-hidden",!0)}}function zE(t,i){if(t&1&&M(0,"ChevronDownIcon",8),t&2){let e=_(3);m("ngClass",e.iconClass),T("aria-hidden",!0)}}function qE(t,i){if(t&1&&(He(0),A(1,HE,1,4,"span",6)(2,zE,1,2,"ChevronDownIcon",7),ze()),t&2){let e=_(2);b(),m("ngIf",e.accordion.collapseIcon),b(),m("ngIf",!e.accordion.collapseIcon)}}function WE(t,i){if(t&1&&M(0,"span",8),t&2){let e=_(3);V(e.accordion.expandIcon),m("ngClass",e.iconClass),T("aria-hidden",!0)}}function GE(t,i){if(t&1&&M(0,"ChevronUpIcon",8),t&2){let e=_(3);m("ngClass",e.iconClass),T("aria-hidden",!0)}}function KE(t,i){if(t&1&&(He(0),A(1,WE,1,4,"span",6)(2,GE,1,2,"ChevronUpIcon",7),ze()),t&2){let e=_(2);b(),m("ngIf",e.accordion.expandIcon),b(),m("ngIf",!e.accordion.expandIcon)}}function QE(t,i){if(t&1&&A(0,qE,3,2,"ng-container",3)(1,KE,3,2,"ng-container",3),t&2){let e=_();m("ngIf",e.selected),b(),m("ngIf",!e.selected)}}function YE(t,i){t&1&&xe(0)}function ZE(t,i){if(t&1&&(He(0),A(1,YE,1,0,"ng-container",4),ze()),t&2){let e=_();b(),m("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}var XE=({dt:t})=>`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${t("accordion.panel.border.width")};
    border-color: ${t("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${t("accordion.header.padding")};
    color: ${t("accordion.header.color")};
    background: ${t("accordion.header.background")};
    border-style: solid;
    border-width: ${t("accordion.header.border.width")};
    border-color: ${t("accordion.header.border.color")};
    font-weight: ${t("accordion.header.font.weight")};
    border-radius: ${t("accordion.header.border.radius")};
    transition: background ${t("accordion.transition.duration")}; color ${t("accordion.transition.duration")}color ${t("accordion.transition.duration")}, outline-color ${t("accordion.transition.duration")}, box-shadow ${t("accordion.transition.duration")};
    outline-color: transparent;
    position: relative;
    overflow: hidden;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${t("accordion.header.first.border.width")};
    border-start-start-radius: ${t("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${t("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${t("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${t("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${t("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius:${t("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${t("accordion.header.focus.ring.shadow")};
    outline: ${t("accordion.header.focus.ring.width")} ${t("accordion.header.focus.ring.style")} ${t("accordion.header.focus.ring.color")};
    outline-offset: ${t("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${t("accordion.header.hover.background")};
    color: ${t("accordion.header.hover.color")}
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${t("accordion.header.active.background")};
    color: ${t("accordion.header.active.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: ${t("accordion.header.active.hover.background")};
    color: ${t("accordion.header.active.hover.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${t("accordion.content.border.width")};
    border-color: ${t("accordion.content.border.color")};
    background-color: ${t("accordion.content.background")};
    color: ${t("accordion.content.color")};
    padding: ${t("accordion.content.padding")}
}

/*For PrimeNG*/

.p-accordion .p-accordioncontent {
    overflow: hidden;
}

.p-accordionpanel.p-accordioncontent:not(.ng-animating) {
    overflow: inherit;
}

.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: ${t("accordion.header.padding")};
}
`,JE={root:"p-accordion p-component"},pl=(()=>{class t extends ue{name="accordion";theme=XE;classes=JE;static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Zu=(()=>{class t extends ae{pcAccordion=w(ut(()=>sa));value=oc(void 0);disabled=Rt(!1,{transform:e=>cl(e)});active=Xe(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,n){return Array.isArray(e)?e.includes(n):e===n}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:9,hostBindings:function(n,r){n&2&&(T("data-pc-name","accordionpanel")("data-p-disabled",r.disabled())("data-p-active",r.active()),Ze("p-accordionpanel",!0)("p-accordionpanel-active",r.active())("p-disabled",r.disabled()))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[O],ngContentSelectors:hl,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le],encapsulation:2,changeDetection:0})}return t})(),eT=(()=>{class t extends ae{pcAccordion=w(ut(()=>sa));pcAccordionPanel=w(ut(()=>Zu));id=Xe(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=Xe(()=>this.pcAccordionPanel.active());disabled=Xe(()=>this.pcAccordionPanel.disabled());ariaControls=Xe(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){let n=this.active();this.changeActiveValue();let r=this.active(),s=this.pcAccordionPanel.value();!n&&r?this.pcAccordion.onOpen.emit({originalEvent:e,index:s}):n&&!r&&this.pcAccordion.onClose.emit({originalEvent:e,index:s})}onFocus(){this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return kt(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,n=!1){let r=n?e:e.nextElementSibling;return r?Yo(r,"data-p-disabled")?this.findNextPanel(r):this.findHeader(r):null}findPrevPanel(e,n=!1){let r=n?e:e.previousElementSibling;return r?Yo(r,"data-p-disabled")?this.findPrevPanel(r):this.findHeader(r):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,n){_u(n)}arrowDownKey(e){let n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEnterKey(e){this.changeActiveValue(),e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(n,r,s){if(n&1&&Y(s,bE,5),n&2){let l;j(l=H())&&(r.toggleicon=l.first)}},hostVars:13,hostBindings:function(n,r){n&1&&ee("click",function(l){return r.onClick(l)})("focus",function(l){return r.onFocus(l)})("keydown",function(l){return r.onKeydown(l)}),n&2&&(T("id",r.id())("aria-expanded",r.active())("aria-controls",r.ariaControls())("aria-disabled",r.disabled())("role","button")("tabindex",r.disabled()?"-1":"0")("data-p-active",r.active())("data-p-disabled",r.disabled())("data-pc-name","accordionheader"),Dn("user-select","none"),Ze("p-accordionheader",!0))},features:[Ua([wi]),O],ngContentSelectors:hl,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,r){n&1&&(Qe(),Be(0),A(1,CE,1,4)(2,AE,2,2)),n&2&&(b(),Ee(r.toggleicon?1:2))},dependencies:[le,We,Ue,Je,$u,Vu],encapsulation:2,changeDetection:0})}return t})(),tT=(()=>{class t extends ae{pcAccordion=w(ut(()=>sa));pcAccordionPanel=w(ut(()=>Zu));active=Xe(()=>this.pcAccordionPanel.active());ariaLabelledby=Xe(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=Xe(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:7,hostBindings:function(n,r){n&2&&(T("id",r.id())("role","region")("data-pc-name","accordioncontent")("data-p-active",r.active())("aria-labelledby",r.ariaLabelledby()),Ze("p-accordioncontent",!0))},features:[O],ngContentSelectors:hl,decls:2,vars:9,consts:[[1,"p-accordioncontent-content"]],template:function(n,r){n&1&&(Qe(),D(0,"div",0),Be(1),x()),n&2&&m("@content",r.active()?ke(3,Og,ke(1,dl,r.pcAccordion.transitionOptions)):ke(7,Pg,ke(5,dl,r.pcAccordion.transitionOptions)))},dependencies:[le],encapsulation:2,data:{animation:[cn("content",[un("hidden",bt({height:"0",paddingBottom:"0",visibility:"hidden"})),un("visible",bt({height:"*",visibility:"visible"})),Dt("visible <=> hidden",[It("{{transitionParams}}")]),Dt("void => *",It(0))])]},changeDetection:0})}return t})(),Ng=(()=>{class t extends ae{get hostClass(){return this.tabStyleClass}get hostStyle(){return this.tabStyle}id=et("pn_id_");header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.cd.detectChanges())}headerAriaLevel=2;selectedChange=new W;headerFacet;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordionheader-toggle-icon icon-end":"p-accordionheader-toggle-icon icon-start"}headerTemplate;iconTemplate;contentTemplate;templates;_headerTemplate;_iconTemplate;_contentTemplate;loaded=!1;accordion=w(ut(()=>sa));_componentStyle=w(pl);ngOnInit(){super.ngOnInit(),console.log("AccordionTab is deprecated as of v18, please use the new structure instead.")}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:n});else{if(!this.accordion.multiple())for(var r=0;r<this.accordion.tabs.length;r++)this.accordion.tabs[r].selected&&(this.accordion.tabs[r].selected=!1,this.accordion.tabs[r].selectedChange.emit(!1),this.accordion.tabs[r].cd.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.cd.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){e=n;break}return e}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-accordionTab"],["p-accordion-tab"],["p-accordiontab"]],contentQueries:function(n,r,s){if(n&1&&(Y(s,IE,4),Y(s,kE,4),Y(s,FE,4),Y(s,qs,4),Y(s,at,4)),n&2){let l;j(l=H())&&(r.headerTemplate=l.first),j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.headerFacet=l),j(l=H())&&(r.templates=l)}},hostVars:9,hostBindings:function(n,r){n&2&&(T("data-pc-name","accordiontab"),St(r.hostStyle),V(r.hostClass),Ze("p-accordionpanel",!0)("p-accordionpanel-active",r.selected))},inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:[2,"disabled","disabled",P],cache:[2,"cache","cache",P],transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:[2,"headerAriaLevel","headerAriaLevel",Me]},outputs:{selectedChange:"selectedChange"},features:[oe([pl]),O],ngContentSelectors:RE,decls:9,vars:30,consts:[["type","button",1,"p-accordionheader",3,"click","keydown","disabled","ngClass","ngStyle"],["role","region",1,"p-accordioncontent"],[1,"p-accordioncontent-content",3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,r){n&1&&(Qe(ME),D(0,"button",0),ee("click",function(l){return r.toggle(l)})("keydown",function(l){return r.onKeydown(l)}),A(1,OE,1,1)(2,$E,2,2)(3,jE,1,4)(4,QE,2,2),x(),D(5,"div",1)(6,"div",2),Be(7),A(8,ZE,2,1,"ng-container",3),x()()),n&2&&(Ze("p-disabled",r.disabled),m("disabled",r.disabled)("ngClass",r.headerStyleClass)("ngStyle",r.headerStyle),T("aria-expanded",r.selected)("aria-level",r.headerAriaLevel)("data-p-disabled",r.disabled)("data-pc-section","accordionheader")("tabindex",r.disabled?null:0)("id",r.getTabHeaderActionId(r.id))("aria-controls",r.getTabContentId(r.id)),b(),Ee(!r.headerTemplate&&!r._headerTemplate?1:2),b(2),Ee(r.iconTemplate||r._iconTemplate?3:4),b(2),m("@tabContent",r.selected?ke(24,Og,ke(22,dl,r.transitionOptions)):ke(28,Pg,ke(26,dl,r.transitionOptions))),T("id",r.getTabContentId(r.id))("aria-hidden",!r.selected)("aria-labelledby",r.getTabHeaderActionId(r.id))("data-pc-section","toggleablecontent"),b(),m("ngClass",r.contentStyleClass)("ngStyle",r.contentStyle),b(2),m("ngIf",(r.contentTemplate||r._contentTemplate)&&(r.cache?r.loaded:r.selected)))},dependencies:[le,We,Ue,Je,vt,$u,Vu],encapsulation:2,data:{animation:[cn("tabContent",[un("hidden",bt({height:"0",visibility:"hidden"})),un("visible",bt({height:"*",visibility:"visible"})),Dt("visible <=> hidden",[It("{{transitionParams}}")]),Dt("void => *",It(0))])]},changeDetection:0})}return t})(),sa=(()=>{class t extends ae{get hostClass(){return this.styleClass}get hostStyle(){return this.style}value=oc(void 0);multiple=Rt(!1,{transform:e=>cl(e)});style;styleClass;expandIcon;collapseIcon;selectOnFocus=Rt(!1,{transform:e=>cl(e)});set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";activeIndexChange=new W;set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new W;onOpen=new W;id=Ke(et("pn_id_"));tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];_componentStyle=w(pl);get activeIndex(){return this._activeIndex}get headerAriaLevel(){return this._headerAriaLevel}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&(_u(e),this.selectOnFocus()&&this.tabs.forEach((n,r)=>{let s=this.multiple()?this._activeIndex.includes(r):r===this._activeIndex;this.multiple()?(this._activeIndex||(this._activeIndex=[]),n.id==e.id&&(n.selected=!n.selected,this._activeIndex.includes(r)?this._activeIndex=this._activeIndex.filter(l=>l!==r):this._activeIndex.push(r))):n.id==e.id?(n.selected=!n.selected,this._activeIndex=r):n.selected=!1,n.selectedChange.emit(s),this.activeIndexChange.emit(this._activeIndex),n.cd.markForCheck()}))}findNextHeaderAction(e,n=!1){let r=n?e:e.nextElementSibling,s=kt(r,'[data-pc-section="accordionheader"]');return s?Yo(s,"data-p-disabled")?this.findNextHeaderAction(s.parentElement):kt(s.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,n=!1){let r=n?e:e.previousElementSibling,s=kt(r,'[data-pc-section="accordionheader"]');return s?Yo(s,"data-p-disabled")?this.findPrevHeaderAction(s.parentElement):kt(s.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.cd.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let n=this.multiple()?this._activeIndex.includes(e):e===this._activeIndex;n!==this.tabs[e].selected&&(this.tabs[e].selected=n,this.tabs[e].selectedChange.emit(n),this.tabs[e].cd.markForCheck())}}isTabActive(e){return this.multiple()?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,n){return e.props?e.props[n]:void 0}updateActiveIndex(){let e=this.multiple()?[]:null;this.tabs.forEach((n,r)=>{if(n.selected)if(this.multiple())e.push(r);else{e=r;return}}),this.preventActiveIndexPropagation=!0,this._activeIndex=e,this.activeIndexChange.emit(e)}updateValue(e){let n=this.value();if(this.multiple()){let r=Array.isArray(n)?[...n]:[],s=r.indexOf(e);s!==-1?r.splice(s,1):r.push(e),this.value.set(r)}else n===e?this.value.set(void 0):this.value.set(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=F(t)))(r||t)}})();static \u0275cmp=N({type:t,selectors:[["p-accordion"]],contentQueries:function(n,r,s){if(n&1&&Y(s,Ng,5),n&2){let l;j(l=H())&&(r.tabList=l)}},hostVars:8,hostBindings:function(n,r){n&1&&ee("keydown",function(l){return r.onKeydown(l)}),n&2&&(St(r.hostStyle),V(r.hostClass),Ze("p-accordion",!0)("p-component",!0))},inputs:{value:[1,"value"],multiple:[1,"multiple"],style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",activeIndex:"activeIndex",headerAriaLevel:"headerAriaLevel"},outputs:{value:"valueChange",activeIndexChange:"activeIndexChange",onClose:"onClose",onOpen:"onOpen"},features:[oe([pl]),O],ngContentSelectors:hl,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le,te],encapsulation:2,changeDetection:0})}return t})(),v7=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[sa,Ng,te,Zu,eT,tT,te]})}return t})();export{Fe as a,We as b,si as c,Ue as d,lh as e,Ly as f,vt as g,Je as h,By as i,le as j,En as k,Ic as l,e1 as m,li as n,rs as o,T1 as p,Rh as q,Mc as r,wr as s,Hn as t,ui as u,di as v,Fn as w,au as x,uu as y,mn as z,Ns as A,a_ as B,c_ as C,u_ as D,Ki as E,Mn as F,v3 as G,Rn as H,y3 as I,Bs as J,_3 as K,C3 as L,Ln as M,w3 as N,yu as O,S3 as P,b_ as Q,kt as R,_u as S,Yo as T,Vf as U,D3 as V,Cu as W,x3 as X,E3 as Y,jf as Z,gn as _,T3 as $,A3 as aa,wu as ba,I3 as ca,k3 as da,F3 as ea,M3 as fa,qf as ga,pt as ha,S_ as ia,Re as ja,Vs as ka,Qi as la,P3 as ma,N3 as na,B3 as oa,et as pa,x_ as qa,eF as ra,yt as sa,tF as ta,nF as ua,em as va,iF as wa,tm as xa,at as ya,te as za,vi as Aa,DF as Ba,ue as Ca,Pu as Da,e4 as Ea,_i as Fa,Ur as Ga,vn as Ha,jr as Ia,yn as Ja,ra as Ka,Ci as La,ae as Ma,Nu as Na,rl as Oa,ol as Pa,w4 as Qa,al as Ra,B4 as Sa,je as Ta,sl as Ua,$u as Va,fM as Wa,bM as Xa,Vu as Ya,Pm as Za,Nm as _a,Bm as $a,Wr as ab,$m as bb,wi as cb,ZM as db,vR as eb,qn as fb,Gr as gb,bg as hb,vg as ib,Gu as jb,_g as kb,Wn as lb,Gm as mb,On as nb,xi as ob,Sg as pb,xg as qb,Eg as rb,Tg as sb,Qu as tb,Q5 as ub,Fg as vb,Mg as wb,ag as xb,ML as yb,Ei as zb,WL as Ab,GL as Bb,mO as Cb,wS as Db,FO as Eb,Lg as Fb,Y6 as Gb,hg as Hb,QO as Ib,Zu as Jb,eT as Kb,tT as Lb,Ng as Mb,sa as Nb,v7 as Ob,fg as Pb,PS as Qb,NS as Rb,YS as Sb,_9 as Tb};
