import{$ as Ne,$a as T,A as dc,Aa as Cc,Ab as tt,Ba as wc,Bb as Ke,Ca as Sc,Da as Dc,Db as ue,Ea as xc,Eb as yn,F as Ra,Fa as jn,Fb as X,Ga as so,Gb as J,H as tr,Ha as Ec,Hb as ja,Ib as Fc,Ja as b,Jb as Ct,K as Fe,Ka as Hn,Kb as be,L as Ut,La as pi,Lb as Oe,M as k,Ma as Tc,Mb as rt,N as ne,Na as Qt,Nb as Ic,Oa as j,Ob as hi,P as fe,Pb as fi,Qa as ir,Qb as mi,R as z,Ra as Na,Rb as oe,S as M,Sb as Mc,T as ui,Tb as wt,Ub as uo,V as pc,Va as H,W as hc,Wa as ie,X as fc,Xa as se,Xb as po,Y as ot,Ya as lo,Z as q,Za as O,_ as W,_b as Lc,aa as I,ac as Te,bb as co,bc as Ae,c as cc,ca as mn,cb as Ac,db as kc,dc as Ht,f as hn,fa as mc,ga as Y,gb as F,gc as Xt,ha as jt,hb as g,hc as Rc,i as ro,ia as Oa,ib as bn,ic as Oc,j as fn,ja as gn,jb as at,jc as Bc,ka as vt,kb as kt,kc as V,l as ci,la as Re,lb as K,lc as st,ma as gc,mb as Xe,mc as lt,na as Ba,nb as $a,nc as ct,o as Vt,oa as bc,ob as Va,oc as rr,pa as _t,pb as Ua,qb as D,ra as Pa,rb as x,s as Ma,sa as yc,sb as L,sc as or,t as La,tb as We,tc as zn,u as oo,ub as Ge,v as uc,va as nr,vb as $e,vc as vn,wa as Un,wb as _e,wc as ho,x as ao,xa as di,xc as qn,ya as vc,yb as Q,z as er,za as _c,zb as S}from"./chunk-I5MMSQAM.js";import{a as U,b as Le,e as ng,f as ig,h as he}from"./chunk-C3GRVDOV.js";var $d=ng((Nd,Ns)=>{"use strict";(function(t){function i(){var n=t();return n.default||n}if(typeof Nd=="object"&&typeof Ns=="object")Ns.exports=i();else if(typeof define=="function"&&define.amd)define(i);else{var e=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:this||{};e.prettierPlugins=e.prettierPlugins||{},e.prettierPlugins.html=i()}})(function(){"use strict";var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,o=r=>{throw TypeError(r)},l=(r,a,s)=>a in r?t(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,u=(r,a)=>{for(var s in a)t(r,s,{get:a[s],enumerable:!0})},h=(r,a,s,c)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of e(a))!n.call(r,d)&&d!==s&&t(r,d,{get:()=>a[d],enumerable:!(c=i(a,d))||c.enumerable});return r},f=r=>h(t({},"__esModule",{value:!0}),r),y=(r,a,s)=>l(r,typeof a!="symbol"?a+"":a,s),v=(r,a,s)=>a.has(r)||o("Cannot "+s),C=(r,a,s)=>(v(r,a,"read from private field"),s?s.call(r):a.get(r)),w=(r,a,s)=>a.has(r)?o("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(r):a.set(r,s),E=(r,a,s,c)=>(v(r,a,"write to private field"),c?c.call(r,s):a.set(r,s),s),G={};u(G,{languages:()=>Hf,options:()=>qf,parsers:()=>Ml,printers:()=>eg});var $=(r,a,s,c)=>{if(!(r&&a==null))return a.replaceAll?a.replaceAll(s,c):s.global?a.replace(s,c):a.split(s).join(c)},P=$,ye="string",De="array",ve="cursor",ke="indent",ft="align",mt="trim",an="group",Gt="fill",sn="if-break",ln="indent-if-break",Mn="line-suffix",Ln="line-suffix-boundary",gt="line",cn="label",un="break-parent",Rn=new Set([ve,ke,ft,mt,an,Gt,sn,ln,Mn,Ln,gt,cn,un]),Yn=(r,a,s)=>{if(!(r&&a==null))return Array.isArray(a)||typeof a=="string"?a[s<0?a.length+s:s]:a.at(s)},$t=Yn;function Zn(r){if(typeof r=="string")return ye;if(Array.isArray(r))return De;if(!r)return;let{type:a}=r;if(Rn.has(a))return a}var On=Zn,Qn=r=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(r);function Xn(r){let a=r===null?"null":typeof r;if(a!=="string"&&a!=="object")return`Unexpected doc '${a}', 
Expected it to be 'string' or 'object'.`;if(On(r))throw new Error("doc is valid.");let s=Object.prototype.toString.call(r);if(s!=="[object Object]")return`Unexpected doc '${s}'.`;let c=Qn([...Rn].map(d=>`'${d}'`));return`Unexpected doc.type '${r.type}'.
Expected it to be ${c}.`}var Ir=class extends Error{name="InvalidDocError";constructor(r){super(Xn(r)),this.doc=r}},Mr=Ir;function Ni(r,a){if(typeof r=="string")return a(r);let s=new Map;return c(r);function c(p){if(s.has(p))return s.get(p);let m=d(p);return s.set(p,m),m}function d(p){switch(On(p)){case De:return a(p.map(c));case Gt:return a(Le(U({},p),{parts:p.parts.map(c)}));case sn:return a(Le(U({},p),{breakContents:c(p.breakContents),flatContents:c(p.flatContents)}));case an:{let{expandedStates:m,contents:_}=p;return m?(m=m.map(c),_=m[0]):_=c(_),a(Le(U({},p),{contents:_,expandedStates:m}))}case ft:case ke:case ln:case cn:case Mn:return a(Le(U({},p),{contents:c(p.contents)}));case ye:case ve:case mt:case Ln:case gt:case un:return a(p);default:throw new Mr(p)}}}function it(r,a=up){return Ni(r,s=>typeof s=="string"?ei(a,s.split(`
`)):s)}var $i=()=>{},Kt=$i,Lr=$i,ea=$i;function bt(r){return Kt(r),{type:ke,contents:r}}function Rr(r,a){return Kt(a),{type:ft,contents:a,n:r}}function Me(r,a={}){return Kt(r),Lr(a.expandedStates,!0),{type:an,id:a.id,contents:r,break:!!a.shouldBreak,expandedStates:a.expandedStates}}function ta(r){return Rr(Number.NEGATIVE_INFINITY,r)}function na(r){return Rr({type:"root"},r)}function Or(r){return ea(r),{type:Gt,parts:r}}function Jn(r,a="",s={}){return Kt(r),a!==""&&Kt(a),{type:sn,breakContents:r,flatContents:a,groupId:s.groupId}}function ia(r,a){return Kt(r),{type:ln,contents:r,groupId:a.groupId,negate:a.negate}}var Bn={type:un},ra={type:gt,hard:!0},oa={type:gt,hard:!0,literal:!0},Ie={type:gt},ze={type:gt,soft:!0},xe=[ra,Bn],up=[oa,Bn];function ei(r,a){Kt(r),Lr(a);let s=[];for(let c=0;c<a.length;c++)c!==0&&s.push(r),s.push(a[c]);return s}var Br="'",zs='"';function dp(r,a){let s=a===!0||a===Br?Br:zs,c=s===Br?zs:Br,d=0,p=0;for(let m of r)m===s?d++:m===c&&p++;return d>p?c:s}var pp=dp;function hp(r){if(typeof r!="string")throw new TypeError("Expected a string");return r.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var Et,fp=class{constructor(r){w(this,Et),E(this,Et,new Set(r))}getLeadingWhitespaceCount(r){let a=C(this,Et),s=0;for(let c=0;c<r.length&&a.has(r.charAt(c));c++)s++;return s}getTrailingWhitespaceCount(r){let a=C(this,Et),s=0;for(let c=r.length-1;c>=0&&a.has(r.charAt(c));c--)s++;return s}getLeadingWhitespace(r){let a=this.getLeadingWhitespaceCount(r);return r.slice(0,a)}getTrailingWhitespace(r){let a=this.getTrailingWhitespaceCount(r);return r.slice(r.length-a)}hasLeadingWhitespace(r){return C(this,Et).has(r.charAt(0))}hasTrailingWhitespace(r){return C(this,Et).has($t(!1,r,-1))}trimStart(r){let a=this.getLeadingWhitespaceCount(r);return r.slice(a)}trimEnd(r){let a=this.getTrailingWhitespaceCount(r);return r.slice(0,r.length-a)}trim(r){return this.trimEnd(this.trimStart(r))}split(r,a=!1){let s=`[${hp([...C(this,Et)].join(""))}]+`,c=new RegExp(a?`(${s})`:s,"u");return r.split(c)}hasWhitespaceCharacter(r){let a=C(this,Et);return Array.prototype.some.call(r,s=>a.has(s))}hasNonWhitespaceCharacter(r){let a=C(this,Et);return Array.prototype.some.call(r,s=>!a.has(s))}isWhitespaceOnly(r){let a=C(this,Et);return Array.prototype.every.call(r,s=>a.has(s))}};Et=new WeakMap;var mp=fp,gp=["	",`
`,"\f","\r"," "],bp=new mp(gp),Yt=bp,yp=class extends Error{name="UnexpectedNodeError";constructor(r,a,s="type"){super(`Unexpected ${a} node ${s}: ${JSON.stringify(r[s])}.`),this.node=r}},vp=yp;function _p(r){return r?.type==="front-matter"}var Pr=_p,Cp=new Set(["sourceSpan","startSourceSpan","endSourceSpan","nameSpan","valueSpan","keySpan","tagDefinition","tokens","valueTokens","switchValueSourceSpan","expSourceSpan","valueSourceSpan"]),wp=new Set(["if","else if","for","switch","case"]);function qs(r,a){var s;if(r.type==="text"||r.type==="comment"||Pr(r)||r.type==="yaml"||r.type==="toml")return null;if(r.type==="attribute"&&delete a.value,r.type==="docType"&&delete a.value,r.type==="angularControlFlowBlock"&&(s=r.parameters)!=null&&s.children)for(let c of a.parameters.children)wp.has(r.name)?delete c.expression:c.expression=c.expression.trim();r.type==="angularIcuExpression"&&(a.switchValue=r.switchValue.trim()),r.type==="angularLetDeclarationInitializer"&&delete a.value}qs.ignoredProperties=Cp;var Sp=qs;function Dp(r,a){return he(this,null,function*(){if(r.language==="yaml"){let s=r.value.trim(),c=s?yield a(s,{parser:"yaml"}):"";return na([r.startDelimiter,r.explicitLanguage,xe,c,c?xe:"",r.endDelimiter])}})}var xp=Dp;function Nr(r,a=!0){return[bt([ze,r]),a?ze:""]}function ti(r,a){let s=r.type==="NGRoot"?r.node.type==="NGMicrosyntax"&&r.node.body.length===1&&r.node.body[0].type==="NGMicrosyntaxExpression"?r.node.body[0].expression:r.node:r.type==="JsExpressionRoot"?r.node:r;return s&&(s.type==="ObjectExpression"||s.type==="ArrayExpression"||(a.parser==="__vue_expression"||a.parser==="__vue_ts_expression")&&(s.type==="TemplateLiteral"||s.type==="StringLiteral"))}function Tt(r,a,s,c){return he(this,null,function*(){s=U({__isInHtmlAttribute:!0,__embeddedInHtml:!0},s);let d=!0;c&&(s.__onHtmlBindingRoot=(m,_)=>{d=c(m,_)});let p=yield a(r,s,a);return d?Me(p):Nr(p)})}function Ep(r,a,s,c){let{node:d}=s,p=c.originalText.slice(d.sourceSpan.start.offset,d.sourceSpan.end.offset);return/^\s*$/u.test(p)?"":Tt(p,r,{parser:"__ng_directive",__isInHtmlAttribute:!1},ti)}var Tp=Ep,Ap=(r,a)=>{if(!(r&&a==null))return a.toReversed||!Array.isArray(a)?a.toReversed():[...a].reverse()},kp=Ap;function Fp(r){return Array.isArray(r)&&r.length>0}var aa=Fp,Ws,Gs,Ks,Ys,Zs,Ip=((Ws=globalThis.Deno)==null?void 0:Ws.build.os)==="windows"||((Ks=(Gs=globalThis.navigator)==null?void 0:Gs.platform)==null?void 0:Ks.startsWith("Win"))||((Zs=(Ys=globalThis.process)==null?void 0:Ys.platform)==null?void 0:Zs.startsWith("win"))||!1;function Qs(r){if(r=r instanceof URL?r:new URL(r),r.protocol!=="file:")throw new TypeError(`URL must be a file URL: received "${r.protocol}"`);return r}function Mp(r){return r=Qs(r),decodeURIComponent(r.pathname.replace(/%(?![0-9A-Fa-f]{2})/g,"%25"))}function Lp(r){r=Qs(r);let a=decodeURIComponent(r.pathname.replace(/\//g,"\\").replace(/%(?![0-9A-Fa-f]{2})/g,"%25")).replace(/^\\*([A-Za-z]:)(\\|$)/,"$1\\");return r.hostname!==""&&(a=`\\\\${r.hostname}${a}`),a}function Rp(r){return Ip?Lp(r):Mp(r)}var Op=Rp,Bp=r=>String(r).split(/[/\\]/u).pop();function Xs(r,a){if(!a)return;let s=Bp(a).toLowerCase();return r.find(({filenames:c})=>c?.some(d=>d.toLowerCase()===s))??r.find(({extensions:c})=>c?.some(d=>s.endsWith(d)))}function Pp(r,a){if(a)return r.find(({name:s})=>s.toLowerCase()===a)??r.find(({aliases:s})=>s?.includes(a))??r.find(({extensions:s})=>s?.includes(`.${a}`))}function Js(r,a){if(a){if(String(a).startsWith("file:"))try{a=Op(a)}catch{return}if(typeof a=="string")return r.find(({isSupported:s})=>s?.({filepath:a}))}}function Np(r,a){let s=kp(!1,r.plugins).flatMap(d=>d.languages??[]),c=Pp(s,a.language)??Xs(s,a.physicalFile)??Xs(s,a.file)??Js(s,a.physicalFile)??Js(s,a.file)??(a.physicalFile,void 0);return c?.parsers[0]}var $r=Np,$p="inline",el={area:"none",base:"none",basefont:"none",datalist:"none",head:"none",link:"none",meta:"none",noembed:"none",noframes:"none",param:"block",rp:"none",script:"block",style:"none",template:"inline",title:"none",html:"block",body:"block",address:"block",blockquote:"block",center:"block",dialog:"block",div:"block",figure:"block",figcaption:"block",footer:"block",form:"block",header:"block",hr:"block",legend:"block",listing:"block",main:"block",p:"block",plaintext:"block",pre:"block",search:"block",xmp:"block",slot:"contents",ruby:"ruby",rt:"ruby-text",article:"block",aside:"block",h1:"block",h2:"block",h3:"block",h4:"block",h5:"block",h6:"block",hgroup:"block",nav:"block",section:"block",dir:"block",dd:"block",dl:"block",dt:"block",menu:"block",ol:"block",ul:"block",li:"list-item",table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell",input:"inline-block",button:"inline-block",fieldset:"block",details:"block",summary:"block",marquee:"inline-block",source:"block",track:"block",meter:"inline-block",progress:"inline-block",object:"inline-block",video:"inline-block",audio:"inline-block",select:"inline-block",option:"block",optgroup:"block"},Vp="normal",tl={listing:"pre",plaintext:"pre",pre:"pre",xmp:"pre",nobr:"nowrap",table:"initial",textarea:"pre-wrap"};function Up(r){return r.type==="element"&&!r.hasExplicitNamespace&&!["html","svg"].includes(r.namespace)}var Vi=Up,jp=r=>P(!1,r,/^[\t\f\r ]*\n/gu,""),nl=r=>jp(Yt.trimEnd(r)),Hp=r=>{let a=r,s=Yt.getLeadingWhitespace(a);s&&(a=a.slice(s.length));let c=Yt.getTrailingWhitespace(a);return c&&(a=a.slice(0,-c.length)),{leadingWhitespace:s,trailingWhitespace:c,text:a}};function il(r,a){return!!(r.type==="ieConditionalComment"&&r.lastChild&&!r.lastChild.isSelfClosing&&!r.lastChild.endSourceSpan||r.type==="ieConditionalComment"&&!r.complete||ni(r)&&r.children.some(s=>s.type!=="text"&&s.type!=="interpolation")||ca(r,a)&&!Zt(r,a)&&r.type!=="interpolation")}function Vr(r){return r.type==="attribute"||!r.parent||!r.prev?!1:zp(r.prev)}function zp(r){return r.type==="comment"&&r.value.trim()==="prettier-ignore"}function yt(r){return r.type==="text"||r.type==="comment"}function Zt(r,a){return r.type==="element"&&(r.fullName==="script"||r.fullName==="style"||r.fullName==="svg:style"||r.fullName==="svg:script"||r.fullName==="mj-style"&&a.parser==="mjml"||Vi(r)&&(r.name==="script"||r.name==="style"))}function qp(r,a){return r.children&&!Zt(r,a)}function Wp(r,a){return Zt(r,a)||r.type==="interpolation"||rl(r)}function rl(r){return pl(r).startsWith("pre")}function Gp(r,a){var s,c;let d=p();if(d&&!r.prev&&(c=(s=r.parent)==null?void 0:s.tagDefinition)!=null&&c.ignoreFirstLf)return r.type==="interpolation";return d;function p(){return Pr(r)||r.type==="angularControlFlowBlock"?!1:(r.type==="text"||r.type==="interpolation")&&r.prev&&(r.prev.type==="text"||r.prev.type==="interpolation")?!0:!r.parent||r.parent.cssDisplay==="none"?!1:ni(r.parent)?!0:!(!r.prev&&(r.parent.type==="root"||ni(r)&&r.parent||Zt(r.parent,a)||jr(r.parent,a)||!nh(r.parent.cssDisplay))||r.prev&&!oh(r.prev.cssDisplay))}}function Kp(r,a){return Pr(r)||r.type==="angularControlFlowBlock"?!1:(r.type==="text"||r.type==="interpolation")&&r.next&&(r.next.type==="text"||r.next.type==="interpolation")?!0:!r.parent||r.parent.cssDisplay==="none"?!1:ni(r.parent)?!0:!(!r.next&&(r.parent.type==="root"||ni(r)&&r.parent||Zt(r.parent,a)||jr(r.parent,a)||!ih(r.parent.cssDisplay))||r.next&&!rh(r.next.cssDisplay))}function Yp(r,a){return ah(r.cssDisplay)&&!Zt(r,a)}function Ur(r){return Pr(r)||r.next&&r.sourceSpan.end&&r.sourceSpan.end.line+1<r.next.sourceSpan.start.line}function Zp(r){return ol(r)||r.type==="element"&&r.children.length>0&&(["body","script","style"].includes(r.name)||r.children.some(a=>Xp(a)))||r.firstChild&&r.firstChild===r.lastChild&&r.firstChild.type!=="text"&&sl(r.firstChild)&&(!r.lastChild.isTrailingSpaceSensitive||ll(r.lastChild))}function ol(r){return r.type==="element"&&r.children.length>0&&(["html","head","ul","ol","select"].includes(r.name)||r.cssDisplay.startsWith("table")&&r.cssDisplay!=="table-cell")}function sa(r){return cl(r)||r.prev&&Qp(r.prev)||al(r)}function Qp(r){return cl(r)||r.type==="element"&&r.fullName==="br"||al(r)}function al(r){return sl(r)&&ll(r)}function sl(r){return r.hasLeadingSpaces&&(r.prev?r.prev.sourceSpan.end.line<r.sourceSpan.start.line:r.parent.type==="root"||r.parent.startSourceSpan.end.line<r.sourceSpan.start.line)}function ll(r){return r.hasTrailingSpaces&&(r.next?r.next.sourceSpan.start.line>r.sourceSpan.end.line:r.parent.type==="root"||r.parent.endSourceSpan&&r.parent.endSourceSpan.start.line>r.sourceSpan.end.line)}function cl(r){switch(r.type){case"ieConditionalComment":case"comment":case"directive":return!0;case"element":return["script","select"].includes(r.name)}return!1}function la(r){return r.lastChild?la(r.lastChild):r}function Xp(r){var a;return(a=r.children)==null?void 0:a.some(s=>s.type!=="text")}function ul(r){if(r)switch(r){case"module":case"text/javascript":case"text/babel":case"text/jsx":case"application/javascript":return"babel";case"application/x-typescript":return"typescript";case"text/markdown":return"markdown";case"text/html":return"html";case"text/x-handlebars-template":return"glimmer";default:if(r.endsWith("json")||r.endsWith("importmap")||r==="speculationrules")return"json"}}function Jp(r,a){let{name:s,attrMap:c}=r;if(s!=="script"||Object.prototype.hasOwnProperty.call(c,"src"))return;let{type:d,lang:p}=r.attrMap;return!p&&!d?"babel":$r(a,{language:p})??ul(d)}function eh(r,a){if(!ca(r,a))return;let{attrMap:s}=r;if(Object.prototype.hasOwnProperty.call(s,"src"))return;let{type:c,lang:d}=s;return $r(a,{language:d})??ul(c)}function th(r,a){if(r.name==="style"){let{lang:s}=r.attrMap;return s?$r(a,{language:s}):"css"}if(r.name==="mj-style"&&a.parser==="mjml")return"css"}function dl(r,a){return Jp(r,a)??th(r,a)??eh(r,a)}function Ui(r){return r==="block"||r==="list-item"||r.startsWith("table")}function nh(r){return!Ui(r)&&r!=="inline-block"}function ih(r){return!Ui(r)&&r!=="inline-block"}function rh(r){return!Ui(r)}function oh(r){return!Ui(r)}function ah(r){return!Ui(r)&&r!=="inline-block"}function ni(r){return pl(r).startsWith("pre")}function sh(r,a){let s=r;for(;s;){if(a(s))return!0;s=s.parent}return!1}function lh(r,a){var s;if(ii(r,a))return"block";if(((s=r.prev)==null?void 0:s.type)==="comment"){let d=r.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);if(d)return d[1]}let c=!1;if(r.type==="element"&&r.namespace==="svg")if(sh(r,d=>d.fullName==="svg:foreignObject"))c=!0;else return r.name==="svg"?"inline-block":"block";switch(a.htmlWhitespaceSensitivity){case"strict":return"inline";case"ignore":return"block";default:if(r.type==="element"&&(!r.namespace||c||Vi(r))&&Object.prototype.hasOwnProperty.call(el,r.name))return el[r.name]}return $p}function pl(r){return r.type==="element"&&(!r.namespace||Vi(r))&&Object.prototype.hasOwnProperty.call(tl,r.name)?tl[r.name]:Vp}function ch(r){let a=Number.POSITIVE_INFINITY;for(let s of r.split(`
`)){if(s.length===0)continue;let c=Yt.getLeadingWhitespaceCount(s);if(c===0)return 0;s.length!==c&&c<a&&(a=c)}return a===Number.POSITIVE_INFINITY?0:a}function hl(r,a=ch(r)){return a===0?r:r.split(`
`).map(s=>s.slice(a)).join(`
`)}function fl(r){return P(!1,P(!1,r,"&apos;","'"),"&quot;",'"')}function dn(r){return fl(r.value)}var uh=new Set(["template","style","script"]);function jr(r,a){return ii(r,a)&&!uh.has(r.fullName)}function ii(r,a){return a.parser==="vue"&&r.type==="element"&&r.parent.type==="root"&&r.fullName.toLowerCase()!=="html"}function ca(r,a){return ii(r,a)&&(jr(r,a)||r.attrMap.lang&&r.attrMap.lang!=="html")}function dh(r){let a=r.fullName;return a.charAt(0)==="#"||a==="slot-scope"||a==="v-slot"||a.startsWith("v-slot:")}function ph(r,a){let s=r.parent;if(!ii(s,a))return!1;let c=s.fullName,d=r.fullName;return c==="script"&&d==="setup"||c==="style"&&d==="vars"}function ml(r,a=r.value){return r.parent.isWhitespaceSensitive?r.parent.isIndentationSensitive?it(a):it(hl(nl(a)),xe):ei(Ie,Yt.split(a))}function gl(r,a){return ii(r,a)&&r.name==="script"}var bl=/\{\{(.+?)\}\}/su;function hh(r,a){return he(this,null,function*(){let s=[];for(let[c,d]of r.split(bl).entries())if(c%2===0)s.push(it(d));else try{s.push(Me(["{{",bt([Ie,yield Tt(d,a,{parser:"__ng_interpolation",__isInHtmlInterpolation:!0})]),Ie,"}}"]))}catch{s.push("{{",it(d),"}}")}return s})}function ua({parser:r}){return(a,s,c)=>Tt(dn(c.node),a,{parser:r},ti)}var fh=ua({parser:"__ng_action"}),mh=ua({parser:"__ng_binding"}),gh=ua({parser:"__ng_directive"});function bh(r,a){if(a.parser!=="angular")return;let{node:s}=r,c=s.fullName;if(c.startsWith("(")&&c.endsWith(")")||c.startsWith("on-"))return fh;if(c.startsWith("[")&&c.endsWith("]")||/^bind(?:on)?-/u.test(c)||/^ng-(?:if|show|hide|class|style)$/u.test(c))return mh;if(c.startsWith("*"))return gh;let d=dn(s);if(/^i18n(?:-.+)?$/u.test(c))return()=>Nr(Or(ml(s,d.trim())),!d.includes("@@"));if(bl.test(d))return p=>hh(d,p)}var yh=bh;function vh(r,a){let{node:s}=r,c=dn(s);if(s.fullName==="class"&&!a.parentParser&&!c.includes("{{"))return()=>c.trim().split(/\s+/u).join(" ")}var _h=vh;function yl(r){return r==="	"||r===`
`||r==="\f"||r==="\r"||r===" "}var Ch=/^[ \t\n\r\u000c]+/,wh=/^[, \t\n\r\u000c]+/,Sh=/^[^ \t\n\r\u000c]+/,Dh=/[,]+$/,vl=/^\d+$/,xh=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function Eh(r){let a=r.length,s,c,d,p,m,_=0,A;function N(le){let Ee,Ue=le.exec(r.substring(_));if(Ue)return[Ee]=Ue,_+=Ee.length,Ee}let R=[];for(;;){if(N(wh),_>=a){if(R.length===0)throw new Error("Must contain one or more image candidate strings.");return R}A=_,s=N(Sh),c=[],s.slice(-1)===","?(s=s.replace(Dh,""),te()):de()}function de(){for(N(Ch),d="",p="in descriptor";;){if(m=r.charAt(_),p==="in descriptor")if(yl(m))d&&(c.push(d),d="",p="after descriptor");else if(m===","){_+=1,d&&c.push(d),te();return}else if(m==="(")d+=m,p="in parens";else if(m===""){d&&c.push(d),te();return}else d+=m;else if(p==="in parens")if(m===")")d+=m,p="in descriptor";else if(m===""){c.push(d),te();return}else d+=m;else if(p==="after descriptor"&&!yl(m))if(m===""){te();return}else p="in descriptor",_-=1;_+=1}}function te(){let le=!1,Ee,Ue,qe,Qe,B={},ce,je,Pe,et,li;for(Qe=0;Qe<c.length;Qe++)ce=c[Qe],je=ce[ce.length-1],Pe=ce.substring(0,ce.length-1),et=parseInt(Pe,10),li=parseFloat(Pe),vl.test(Pe)&&je==="w"?((Ee||Ue)&&(le=!0),et===0?le=!0:Ee=et):xh.test(Pe)&&je==="x"?((Ee||Ue||qe)&&(le=!0),li<0?le=!0:Ue=li):vl.test(Pe)&&je==="h"?((qe||Ue)&&(le=!0),et===0?le=!0:qe=et):le=!0;if(!le)B.source={value:s,startOffset:A},Ee&&(B.width={value:Ee}),Ue&&(B.density={value:Ue}),qe&&(B.height={value:qe}),R.push(B);else throw new Error(`Invalid srcset descriptor found in "${r}" at "${ce}".`)}}var Th=Eh;function Ah(r){if(r.node.fullName==="srcset"&&(r.parent.fullName==="img"||r.parent.fullName==="source"))return()=>Fh(dn(r.node))}var _l={width:"w",height:"h",density:"x"},kh=Object.keys(_l);function Fh(r){let a=Th(r),s=kh.filter(R=>a.some(de=>Object.prototype.hasOwnProperty.call(de,R)));if(s.length>1)throw new Error("Mixed descriptor in srcset is not supported");let[c]=s,d=_l[c],p=a.map(R=>R.source.value),m=Math.max(...p.map(R=>R.length)),_=a.map(R=>R[c]?String(R[c].value):""),A=_.map(R=>{let de=R.indexOf(".");return de===-1?R.length:de}),N=Math.max(...A);return Nr(ei([",",Ie],p.map((R,de)=>{let te=[R],le=_[de];if(le){let Ee=m-R.length+1,Ue=N-A[de],qe=" ".repeat(Ee+Ue);te.push(Jn(qe," "),le+d)}return te})))}var Ih=Ah;function Mh(r,a){let{node:s}=r,c=dn(r.node).trim();if(s.fullName==="style"&&!a.parentParser&&!c.includes("{{"))return d=>he(null,null,function*(){return Nr(yield d(c,{parser:"css",__isHTMLStyleAttribute:!0}))})}var da=new WeakMap;function Lh(r,a){let{root:s}=r;return da.has(s)||da.set(s,s.children.some(c=>gl(c,a)&&["ts","typescript"].includes(c.attrMap.lang))),da.get(s)}var pa=Lh;function Rh(r,a,s){let{node:c}=s,d=dn(c);return Tt(`type T<${d}> = any`,r,{parser:"babel-ts",__isEmbeddedTypescriptGenericParameters:!0},ti)}function Oh(r,a,{parseWithTs:s}){return Tt(`function _(${r}) {}`,a,{parser:s?"babel-ts":"babel",__isVueBindings:!0})}function Bh(r,a,s,c){return he(this,null,function*(){let d=dn(s.node),{left:p,operator:m,right:_}=Ph(d),A=pa(s,c);return[Me(yield Tt(`function _(${p}) {}`,r,{parser:A?"babel-ts":"babel",__isVueForBindingLeft:!0}))," ",m," ",yield Tt(_,r,{parser:A?"__ts_expression":"__js_expression"})]})}function Ph(r){let a=/(.*?)\s+(in|of)\s+(.*)/su,s=/,([^,\]}]*)(?:,([^,\]}]*))?$/u,c=/^\(|\)$/gu,d=r.match(a);if(!d)return;let p={};if(p.for=d[3].trim(),!p.for)return;let m=P(!1,d[1].trim(),c,""),_=m.match(s);_?(p.alias=m.replace(s,""),p.iterator1=_[1].trim(),_[2]&&(p.iterator2=_[2].trim())):p.alias=m;let A=[p.alias,p.iterator1,p.iterator2];if(!A.some((N,R)=>!N&&(R===0||A.slice(R+1).some(Boolean))))return{left:A.filter(Boolean).join(","),operator:d[2],right:p.for}}function Nh(r,a){if(a.parser!=="vue")return;let{node:s}=r,c=s.fullName;if(c==="v-for")return Bh;if(c==="generic"&&gl(s.parent,a))return Rh;let d=dn(s),p=pa(r,a);if(dh(s)||ph(s,a))return m=>Oh(d,m,{parseWithTs:p});if(c.startsWith("@")||c.startsWith("v-on:"))return m=>$h(d,m,{parseWithTs:p});if(c.startsWith(":")||c.startsWith(".")||c.startsWith("v-bind:"))return m=>Vh(d,m,{parseWithTs:p});if(c.startsWith("v-"))return m=>Cl(d,m,{parseWithTs:p})}function $h(c,d,p){return he(this,arguments,function*(r,a,{parseWithTs:s}){var m;try{return yield Cl(r,a,{parseWithTs:s})}catch(_){if(((m=_.cause)==null?void 0:m.code)!=="BABEL_PARSER_SYNTAX_ERROR")throw _}return Tt(r,a,{parser:s?"__vue_ts_event_binding":"__vue_event_binding"},ti)})}function Vh(r,a,{parseWithTs:s}){return Tt(r,a,{parser:s?"__vue_ts_expression":"__vue_expression"},ti)}function Cl(r,a,{parseWithTs:s}){return Tt(r,a,{parser:s?"__ts_expression":"__js_expression"},ti)}var Uh=Nh;function jh(r,a){let{node:s}=r;if(s.value){if(/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(a.originalText.slice(s.valueSpan.start.offset,s.valueSpan.end.offset))||a.parser==="lwc"&&s.value.startsWith("{")&&s.value.endsWith("}"))return[s.rawName,"=",s.value];for(let c of[Ih,Mh,_h,Uh,yh]){let d=c(r,a);if(d)return Hh(d)}}}function Hh(r){return(a,s,c,d)=>he(null,null,function*(){let p=yield r(a,s,c,d);if(p)return p=Ni(p,m=>typeof m=="string"?P(!1,m,'"',"&quot;"):m),[c.node.rawName,'="',Me(p),'"']})}var zh=jh,qh=new Proxy(()=>{},{get:()=>qh});function ji(r){return r.sourceSpan.start.offset}function Hr(r){return r.sourceSpan.end.offset}function ha(r,a){return[r.isSelfClosing?"":Wh(r,a),Hi(r,a)]}function Wh(r,a){return r.lastChild&&Wi(r.lastChild)?"":[Gh(r,a),fa(r,a)]}function Hi(r,a){return(r.next?Nn(r.next):qi(r.parent))?"":[zi(r,a),Pn(r,a)]}function Gh(r,a){return qi(r)?zi(r.lastChild,a):""}function Pn(r,a){return Wi(r)?fa(r.parent,a):zr(r)?ga(r.next,a):""}function fa(r,a){if(wl(r,a))return"";switch(r.type){case"ieConditionalComment":return"<!";case"element":if(r.hasHtmComponentClosingTag)return"<//";default:return`</${r.rawName}`}}function zi(r,a){if(wl(r,a))return"";switch(r.type){case"ieConditionalComment":case"ieConditionalEndComment":return"[endif]-->";case"ieConditionalStartComment":return"]><!-->";case"interpolation":return"}}";case"angularIcuExpression":return"}";case"element":if(r.isSelfClosing)return"/>";default:return">"}}function wl(r,a){return!r.isSelfClosing&&!r.endSourceSpan&&(Vr(r)||il(r.parent,a))}function Nn(r){return r.prev&&r.prev.type!=="docType"&&r.type!=="angularControlFlowBlock"&&!yt(r.prev)&&r.isLeadingSpaceSensitive&&!r.hasLeadingSpaces}function qi(r){var a;return((a=r.lastChild)==null?void 0:a.isTrailingSpaceSensitive)&&!r.lastChild.hasTrailingSpaces&&!yt(la(r.lastChild))&&!ni(r)}function Wi(r){return!r.next&&!r.hasTrailingSpaces&&r.isTrailingSpaceSensitive&&yt(la(r))}function zr(r){return r.next&&!yt(r.next)&&yt(r)&&r.isTrailingSpaceSensitive&&!r.hasTrailingSpaces}function Kh(r){let a=r.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);return a?a[1]?a[1].split(/\s+/u):!0:!1}function qr(r){return!r.prev&&r.isLeadingSpaceSensitive&&!r.hasLeadingSpaces}function Yh(r,a,s){var c;let{node:d}=r;if(!aa(d.attrs))return d.isSelfClosing?" ":"";let p=((c=d.prev)==null?void 0:c.type)==="comment"&&Kh(d.prev.value),m=typeof p=="boolean"?()=>p:Array.isArray(p)?de=>p.includes(de.rawName):()=>!1,_=r.map(({node:de})=>m(de)?it(a.originalText.slice(ji(de),Hr(de))):s(),"attrs"),A=d.type==="element"&&d.fullName==="script"&&d.attrs.length===1&&d.attrs[0].fullName==="src"&&d.children.length===0,N=a.singleAttributePerLine&&d.attrs.length>1&&!ii(d,a)?xe:Ie,R=[bt([A?" ":Ie,ei(N,_)])];return d.firstChild&&qr(d.firstChild)||d.isSelfClosing&&qi(d.parent)||A?R.push(d.isSelfClosing?" ":""):R.push(a.bracketSameLine?d.isSelfClosing?" ":"":d.isSelfClosing?Ie:ze),R}function Zh(r){return r.firstChild&&qr(r.firstChild)?"":ba(r)}function ma(r,a,s){let{node:c}=r;return[Gi(c,a),Yh(r,a,s),c.isSelfClosing?"":Zh(c)]}function Gi(r,a){return r.prev&&zr(r.prev)?"":[$n(r,a),ga(r,a)]}function $n(r,a){return qr(r)?ba(r.parent):Nn(r)?zi(r.prev,a):""}var Sl="<!doctype";function ga(r,a){switch(r.type){case"ieConditionalComment":case"ieConditionalStartComment":return`<!--[if ${r.condition}`;case"ieConditionalEndComment":return"<!--<!";case"interpolation":return"{{";case"docType":{if(r.value==="html"){let{filepath:c}=a;if(c&&/\.html?$/u.test(c))return Sl}let s=ji(r);return a.originalText.slice(s,s+Sl.length)}case"angularIcuExpression":return"{";case"element":if(r.condition)return`<!--[if ${r.condition}]><!--><${r.rawName}`;default:return`<${r.rawName}`}}function ba(r){switch(r.type){case"ieConditionalComment":return"]>";case"element":if(r.condition)return"><!--<![endif]-->";default:return">"}}function Qh(r,a){if(!r.endSourceSpan)return"";let s=r.startSourceSpan.end.offset;r.firstChild&&qr(r.firstChild)&&(s-=ba(r).length);let c=r.endSourceSpan.start.offset;return r.lastChild&&Wi(r.lastChild)?c+=fa(r,a).length:qi(r)&&(c-=zi(r.lastChild,a).length),a.originalText.slice(s,c)}var Dl=Qh,Xh=new Set(["if","else if","for","switch","case"]);function Jh(r,a){let{node:s}=r;switch(s.type){case"element":if(Zt(s,a)||s.type==="interpolation")return;if(!s.isSelfClosing&&ca(s,a)){let c=dl(s,a);return c?(d,p)=>he(null,null,function*(){let m=Dl(s,a),_=/^\s*$/u.test(m),A="";return _||(A=yield d(nl(m),{parser:c,__embeddedInHtml:!0}),_=A===""),[$n(s,a),Me(ma(r,a,p)),_?"":xe,A,_?"":xe,ha(s,a),Pn(s,a)]}):void 0}break;case"text":if(Zt(s.parent,a)){let c=dl(s.parent,a);if(c)return d=>he(null,null,function*(){let p=c==="markdown"?hl(s.value.replace(/^[^\S\n]*\n/u,"")):s.value,m={parser:c,__embeddedInHtml:!0};if(a.parser==="html"&&c==="babel"){let _="script",{attrMap:A}=s.parent;A&&(A.type==="module"||(A.type==="text/babel"||A.type==="text/jsx")&&A["data-type"]==="module")&&(_="module"),m.__babelSourceType=_}return[Bn,$n(s,a),yield d(p,m),Pn(s,a)]})}else if(s.parent.type==="interpolation")return c=>he(null,null,function*(){let d={__isInHtmlInterpolation:!0,__embeddedInHtml:!0};return a.parser==="angular"?d.parser="__ng_interpolation":a.parser==="vue"?d.parser=pa(r,a)?"__vue_ts_expression":"__vue_expression":d.parser="__js_expression",[bt([Ie,yield c(s.value,d)]),s.parent.next&&Nn(s.parent.next)?" ":Ie]});break;case"attribute":return zh(r,a);case"front-matter":return c=>xp(s,c);case"angularControlFlowBlockParameters":return Xh.has(r.parent.name)?Tp:void 0;case"angularLetDeclarationInitializer":return c=>Tt(s.value,c,{parser:"__ng_binding",__isInHtmlAttribute:!1})}}var ef=Jh,Ki=null;function Yi(r){if(Ki!==null&&typeof Ki.property){let a=Ki;return Ki=Yi.prototype=null,a}return Ki=Yi.prototype=r??Object.create(null),new Yi}var tf=10;for(let r=0;r<=tf;r++)Yi();function nf(r){return Yi(r)}function rf(r,a="type"){nf(r);function s(c){let d=c[a],p=r[d];if(!Array.isArray(p))throw Object.assign(new Error(`Missing visitor keys for '${d}'.`),{node:c});return p}return s}var of=rf,af={"front-matter":[],root:["children"],element:["attrs","children"],ieConditionalComment:["children"],ieConditionalStartComment:[],ieConditionalEndComment:[],interpolation:["children"],text:["children"],docType:[],comment:[],attribute:[],cdata:[],angularControlFlowBlock:["children","parameters"],angularControlFlowBlockParameters:["children"],angularControlFlowBlockParameter:[],angularLetDeclaration:["init"],angularLetDeclarationInitializer:[],angularIcuExpression:["cases"],angularIcuCase:["expression"]},sf=af,lf=of(sf),cf=lf,uf="format",df=/^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u,pf=/^\s*<!--\s*@(?:format|prettier)\s*-->/u;function hf(r){return pf.test(r)}function ff(r){return df.test(r)}function mf(r){return`<!-- @${uf} -->

${r}`}var gf=new Map([["if",new Set(["else if","else"])],["else if",new Set(["else if","else"])],["for",new Set(["empty"])],["defer",new Set(["placeholder","error","loading"])],["placeholder",new Set(["placeholder","error","loading"])],["error",new Set(["placeholder","error","loading"])],["loading",new Set(["placeholder","error","loading"])]]);function xl(r){let a=Hr(r);return r.type==="element"&&!r.endSourceSpan&&aa(r.children)?Math.max(a,xl($t(!1,r.children,-1))):a}function Zi(r,a,s){let c=r.node;if(Vr(c)){let d=xl(c);return[$n(c,a),it(Yt.trimEnd(a.originalText.slice(ji(c)+(c.prev&&zr(c.prev)?ga(c).length:0),d-(c.next&&Nn(c.next)?zi(c,a).length:0)))),Pn(c,a)]}return s()}function Wr(r,a){return yt(r)&&yt(a)?r.isTrailingSpaceSensitive?r.hasTrailingSpaces?sa(a)?xe:Ie:"":sa(a)?xe:ze:zr(r)&&(Vr(a)||a.firstChild||a.isSelfClosing||a.type==="element"&&a.attrs.length>0)||r.type==="element"&&r.isSelfClosing&&Nn(a)?"":!a.isLeadingSpaceSensitive||sa(a)||Nn(a)&&r.lastChild&&Wi(r.lastChild)&&r.lastChild.lastChild&&Wi(r.lastChild.lastChild)?xe:a.hasLeadingSpaces?Ie:ze}function ya(r,a,s){let{node:c}=r;if(ol(c))return[Bn,...r.map(p=>{let m=p.node,_=m.prev?Wr(m.prev,m):"";return[_?[_,Ur(m.prev)?xe:""]:"",Zi(p,a,s)]},"children")];let d=c.children.map(()=>Symbol(""));return r.map((p,m)=>{let _=p.node;if(yt(_)){if(_.prev&&yt(_.prev)){let Ee=Wr(_.prev,_);if(Ee)return Ur(_.prev)?[xe,xe,Zi(p,a,s)]:[Ee,Zi(p,a,s)]}return Zi(p,a,s)}let A=[],N=[],R=[],de=[],te=_.prev?Wr(_.prev,_):"",le=_.next?Wr(_,_.next):"";return te&&(Ur(_.prev)?A.push(xe,xe):te===xe?A.push(xe):yt(_.prev)?N.push(te):N.push(Jn("",ze,{groupId:d[m-1]}))),le&&(Ur(_)?yt(_.next)&&de.push(xe,xe):le===xe?yt(_.next)&&de.push(xe):R.push(le)),[...A,Me([...N,Me([Zi(p,a,s),...R],{id:d[m]})]),...de]},"children")}function bf(r,a,s){let{node:c}=r,d=[];yf(r)&&d.push("} "),d.push("@",c.name),c.parameters&&d.push(" (",Me(s("parameters")),")"),d.push(" {");let p=El(c);return c.children.length>0?(c.firstChild.hasLeadingSpaces=!0,c.lastChild.hasTrailingSpaces=!0,d.push(bt([xe,ya(r,a,s)])),p&&d.push(xe,"}")):p&&d.push("}"),Me(d,{shouldBreak:!0})}function El(r){var a,s;return!(((a=r.next)==null?void 0:a.type)==="angularControlFlowBlock"&&(s=gf.get(r.name))!=null&&s.has(r.next.name))}function yf(r){let{previous:a}=r;return a?.type==="angularControlFlowBlock"&&!Vr(a)&&!El(a)}function vf(r,a,s){return[bt([ze,ei([";",Ie],r.map(s,"children"))]),ze]}function _f(r,a,s){let{node:c}=r;return[Gi(c,a),Me([c.switchValue.trim(),", ",c.clause,c.cases.length>0?[",",bt([Ie,ei(Ie,r.map(s,"cases"))])]:"",ze]),Hi(c,a)]}function Cf(r,a,s){let{node:c}=r;return[c.value," {",Me([bt([ze,r.map(({node:d,isLast:p})=>{let m=[s()];return d.type==="text"&&(d.hasLeadingSpaces&&m.unshift(Ie),d.hasTrailingSpaces&&!p&&m.push(Ie)),m},"expression")]),ze]),"}"]}function wf(r,a,s){let{node:c}=r;if(il(c,a))return[$n(c,a),Me(ma(r,a,s)),it(Dl(c,a)),...ha(c,a),Pn(c,a)];let d=c.children.length===1&&(c.firstChild.type==="interpolation"||c.firstChild.type==="angularIcuExpression")&&c.firstChild.isLeadingSpaceSensitive&&!c.firstChild.hasLeadingSpaces&&c.lastChild.isTrailingSpaceSensitive&&!c.lastChild.hasTrailingSpaces,p=Symbol("element-attr-group-id"),m=R=>Me([Me(ma(r,a,s),{id:p}),R,ha(c,a)]),_=R=>d?ia(R,{groupId:p}):(Zt(c,a)||jr(c,a))&&c.parent.type==="root"&&a.parser==="vue"&&!a.vueIndentScriptAndStyle?R:bt(R),A=()=>d?Jn(ze,"",{groupId:p}):c.firstChild.hasLeadingSpaces&&c.firstChild.isLeadingSpaceSensitive?Ie:c.firstChild.type==="text"&&c.isWhitespaceSensitive&&c.isIndentationSensitive?ta(ze):ze,N=()=>(c.next?Nn(c.next):qi(c.parent))?c.lastChild.hasTrailingSpaces&&c.lastChild.isTrailingSpaceSensitive?" ":"":d?Jn(ze,"",{groupId:p}):c.lastChild.hasTrailingSpaces&&c.lastChild.isTrailingSpaceSensitive?Ie:(c.lastChild.type==="comment"||c.lastChild.type==="text"&&c.isWhitespaceSensitive&&c.isIndentationSensitive)&&new RegExp(`\\n[\\t ]{${a.tabWidth*(r.ancestors.length-1)}}$`,"u").test(c.lastChild.value)?"":ze;return c.children.length===0?m(c.hasDanglingSpaces&&c.isDanglingSpaceSensitive?Ie:""):m([Zp(c)?Bn:"",_([A(),ya(r,a,s)]),N()])}function Gr(r){return r>=9&&r<=32||r==160}function va(r){return 48<=r&&r<=57}function Kr(r){return r>=97&&r<=122||r>=65&&r<=90}function Sf(r){return r>=97&&r<=102||r>=65&&r<=70||va(r)}function _a(r){return r===10||r===13}function Tl(r){return 48<=r&&r<=55}function Ca(r){return r===39||r===34||r===96}var Df=/-+([a-z0-9])/g;function xf(r){return r.replace(Df,(...a)=>a[1].toUpperCase())}var wa=class Rd{constructor(a,s,c,d){this.file=a,this.offset=s,this.line=c,this.col=d}toString(){return this.offset!=null?`${this.file.url}@${this.line}:${this.col}`:this.file.url}moveBy(a){let s=this.file.content,c=s.length,d=this.offset,p=this.line,m=this.col;for(;d>0&&a<0;)if(d--,a++,s.charCodeAt(d)==10){p--;let _=s.substring(0,d-1).lastIndexOf(`
`);m=_>0?d-_:d}else m--;for(;d<c&&a>0;){let _=s.charCodeAt(d);d++,a--,_==10?(p++,m=0):m++}return new Rd(this.file,d,p,m)}getContext(a,s){let c=this.file.content,d=this.offset;if(d!=null){d>c.length-1&&(d=c.length-1);let p=d,m=0,_=0;for(;m<a&&d>0&&(d--,m++,!(c[d]==`
`&&++_==s)););for(m=0,_=0;m<a&&p<c.length-1&&(p++,m++,!(c[p]==`
`&&++_==s)););return{before:c.substring(d,this.offset),after:c.substring(this.offset,p+1)}}return null}},Al=class{constructor(r,a){this.content=r,this.url=a}},re=class{constructor(r,a,s=r,c=null){this.start=r,this.end=a,this.fullStart=s,this.details=c}toString(){return this.start.file.content.substring(this.start.offset,this.end.offset)}},Yr;(function(r){r[r.WARNING=0]="WARNING",r[r.ERROR=1]="ERROR"})(Yr||(Yr={}));var kl=class{constructor(r,a,s=Yr.ERROR,c){this.span=r,this.msg=a,this.level=s,this.relatedError=c}contextualMessage(){let r=this.span.start.getContext(100,3);return r?`${this.msg} ("${r.before}[${Yr[this.level]} ->]${r.after}")`:this.msg}toString(){let r=this.span.details?`, ${this.span.details}`:"";return`${this.contextualMessage()}: ${this.span.start}${r}`}},Ef=[Af,kf,If,Lf,Rf,Pf,Of,Bf,Nf,Mf];function Tf(r,a){for(let s of Ef)s(r,a);return r}function Af(r){r.walk(a=>{if(a.type==="element"&&a.tagDefinition.ignoreFirstLf&&a.children.length>0&&a.children[0].type==="text"&&a.children[0].value[0]===`
`){let s=a.children[0];s.value.length===1?a.removeChild(s):s.value=s.value.slice(1)}})}function kf(r){let a=s=>{var c,d;return s.type==="element"&&((c=s.prev)==null?void 0:c.type)==="ieConditionalStartComment"&&s.prev.sourceSpan.end.offset===s.startSourceSpan.start.offset&&((d=s.firstChild)==null?void 0:d.type)==="ieConditionalEndComment"&&s.firstChild.sourceSpan.start.offset===s.startSourceSpan.end.offset};r.walk(s=>{if(s.children)for(let c=0;c<s.children.length;c++){let d=s.children[c];if(!a(d))continue;let p=d.prev,m=d.firstChild;s.removeChild(p),c--;let _=new re(p.sourceSpan.start,m.sourceSpan.end),A=new re(_.start,d.sourceSpan.end);d.condition=p.condition,d.sourceSpan=A,d.startSourceSpan=_,d.removeChild(m)}})}function Ff(r,a,s){r.walk(c=>{if(c.children)for(let d=0;d<c.children.length;d++){let p=c.children[d];if(p.type!=="text"&&!a(p))continue;p.type!=="text"&&(p.type="text",p.value=s(p));let m=p.prev;!m||m.type!=="text"||(m.value+=p.value,m.sourceSpan=new re(m.sourceSpan.start,p.sourceSpan.end),c.removeChild(p),d--)}})}function If(r){return Ff(r,a=>a.type==="cdata",a=>`<![CDATA[${a.value}]]>`)}function Mf(r){let a=s=>{var c,d;return s.type==="element"&&s.attrs.length===0&&s.children.length===1&&s.firstChild.type==="text"&&!Yt.hasWhitespaceCharacter(s.children[0].value)&&!s.firstChild.hasLeadingSpaces&&!s.firstChild.hasTrailingSpaces&&s.isLeadingSpaceSensitive&&!s.hasLeadingSpaces&&s.isTrailingSpaceSensitive&&!s.hasTrailingSpaces&&((c=s.prev)==null?void 0:c.type)==="text"&&((d=s.next)==null?void 0:d.type)==="text"};r.walk(s=>{if(s.children)for(let c=0;c<s.children.length;c++){let d=s.children[c];if(!a(d))continue;let p=d.prev,m=d.next;p.value+=`<${d.rawName}>`+d.firstChild.value+`</${d.rawName}>`+m.value,p.sourceSpan=new re(p.sourceSpan.start,m.sourceSpan.end),p.isTrailingSpaceSensitive=m.isTrailingSpaceSensitive,p.hasTrailingSpaces=m.hasTrailingSpaces,s.removeChild(d),c--,s.removeChild(m)}})}function Lf(r,a){if(a.parser==="html")return;let s=/\{\{(.+?)\}\}/su;r.walk(c=>{if(qp(c,a))for(let d of c.children){if(d.type!=="text")continue;let p=d.sourceSpan.start,m=null,_=d.value.split(s);for(let A=0;A<_.length;A++,p=m){let N=_[A];if(A%2===0){m=p.moveBy(N.length),N.length>0&&c.insertChildBefore(d,{type:"text",value:N,sourceSpan:new re(p,m)});continue}m=p.moveBy(N.length+4),c.insertChildBefore(d,{type:"interpolation",sourceSpan:new re(p,m),children:N.length===0?[]:[{type:"text",value:N,sourceSpan:new re(p.moveBy(2),m.moveBy(-2))}]})}c.removeChild(d)}})}function Rf(r,a){r.walk(s=>{let c=s.$children;if(!c)return;if(c.length===0||c.length===1&&c[0].type==="text"&&Yt.trim(c[0].value).length===0){s.hasDanglingSpaces=c.length>0,s.$children=[];return}let d=Wp(s,a),p=rl(s);if(!d)for(let m=0;m<c.length;m++){let _=c[m];if(_.type!=="text")continue;let{leadingWhitespace:A,text:N,trailingWhitespace:R}=Hp(_.value),de=_.prev,te=_.next;N?(_.value=N,_.sourceSpan=new re(_.sourceSpan.start.moveBy(A.length),_.sourceSpan.end.moveBy(-R.length)),A&&(de&&(de.hasTrailingSpaces=!0),_.hasLeadingSpaces=!0),R&&(_.hasTrailingSpaces=!0,te&&(te.hasLeadingSpaces=!0))):(s.removeChild(_),m--,(A||R)&&(de&&(de.hasTrailingSpaces=!0),te&&(te.hasLeadingSpaces=!0)))}s.isWhitespaceSensitive=d,s.isIndentationSensitive=p})}function Of(r){r.walk(a=>{a.isSelfClosing=!a.children||a.type==="element"&&(a.tagDefinition.isVoid||a.endSourceSpan&&a.startSourceSpan.start===a.endSourceSpan.start&&a.startSourceSpan.end===a.endSourceSpan.end)})}function Bf(r,a){r.walk(s=>{s.type==="element"&&(s.hasHtmComponentClosingTag=s.endSourceSpan&&/^<\s*\/\s*\/\s*>$/u.test(a.originalText.slice(s.endSourceSpan.start.offset,s.endSourceSpan.end.offset)))})}function Pf(r,a){r.walk(s=>{s.cssDisplay=lh(s,a)})}function Nf(r,a){r.walk(s=>{let{children:c}=s;if(c){if(c.length===0){s.isDanglingSpaceSensitive=Yp(s,a);return}for(let d of c)d.isLeadingSpaceSensitive=Gp(d,a),d.isTrailingSpaceSensitive=Kp(d,a);for(let d=0;d<c.length;d++){let p=c[d];p.isLeadingSpaceSensitive=(d===0||p.prev.isTrailingSpaceSensitive)&&p.isLeadingSpaceSensitive,p.isTrailingSpaceSensitive=(d===c.length-1||p.next.isLeadingSpaceSensitive)&&p.isTrailingSpaceSensitive}}})}var $f=Tf;function Vf(r,a,s){let{node:c}=r;switch(c.type){case"front-matter":return it(c.raw);case"root":return a.__onHtmlRoot&&a.__onHtmlRoot(c),[Me(ya(r,a,s)),xe];case"element":case"ieConditionalComment":return wf(r,a,s);case"angularControlFlowBlock":return bf(r,a,s);case"angularControlFlowBlockParameters":return vf(r,a,s);case"angularControlFlowBlockParameter":return Yt.trim(c.expression);case"angularLetDeclaration":return Me(["@let ",Me([c.id," =",Me(bt([Ie,s("init")]))]),";"]);case"angularLetDeclarationInitializer":return c.value;case"angularIcuExpression":return _f(r,a,s);case"angularIcuCase":return Cf(r,a,s);case"ieConditionalStartComment":case"ieConditionalEndComment":return[Gi(c),Hi(c)];case"interpolation":return[Gi(c,a),...r.map(s,"children"),Hi(c,a)];case"text":{if(c.parent.type==="interpolation"){let _=/\n[^\S\n]*$/u,A=_.test(c.value),N=A?c.value.replace(_,""):c.value;return[it(N),A?xe:""]}let d=$n(c,a),p=ml(c),m=Pn(c,a);return p[0]=[d,p[0]],p.push([p.pop(),m]),Or(p)}case"docType":return[Me([Gi(c,a)," ",P(!1,c.value.replace(/^html\b/iu,"html"),/\s+/gu," ")]),Hi(c,a)];case"comment":return[$n(c,a),it(a.originalText.slice(ji(c),Hr(c))),Pn(c,a)];case"attribute":{if(c.value===null)return c.rawName;let d=fl(c.value),p=pp(d,'"');return[c.rawName,"=",p,it(p==='"'?P(!1,d,'"',"&quot;"):P(!1,d,"'","&apos;")),p]}case"cdata":default:throw new vp(c,"HTML")}}var Uf={preprocess:$f,print:Vf,insertPragma:mf,massageAstNode:Sp,embed:ef,getVisitorKeys:cf},jf=Uf,Hf=[{name:"Angular",type:"markup",extensions:[".component.html"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["angular"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"HTML",type:"markup",extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["html"],vscodeLanguageIds:["html"],linguistLanguageId:146},{name:"Lightning Web Components",type:"markup",extensions:[],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["lwc"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"MJML",type:"markup",extensions:[".mjml"],tmScope:"text.mjml.basic",aceMode:"html",aliases:["MJML","mjml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["mjml"],filenames:[],vscodeLanguageIds:["mjml"],linguistLanguageId:146},{name:"Vue",type:"markup",extensions:[".vue"],tmScope:"source.vue",aceMode:"html",parsers:["vue"],vscodeLanguageIds:["vue"],linguistLanguageId:391}],Fl={bracketSpacing:{category:"Common",type:"boolean",default:!0,description:"Print spaces between brackets.",oppositeDescription:"Do not print spaces between brackets."},objectWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap object literals.",choices:[{value:"preserve",description:"Keep as multi-line, if there is a newline between the opening brace and first property."},{value:"collapse",description:"Fit to a single line when possible."}]},singleQuote:{category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."},proseWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap prose.",choices:[{value:"always",description:"Wrap prose if it exceeds the print width."},{value:"never",description:"Do not wrap prose."},{value:"preserve",description:"Wrap prose as-is."}]},bracketSameLine:{category:"Common",type:"boolean",default:!1,description:"Put > of opening tags on the last line instead of on a new line."},singleAttributePerLine:{category:"Common",type:"boolean",default:!1,description:"Enforce single attribute per line in HTML, Vue and JSX."}},Il="HTML",zf={bracketSameLine:Fl.bracketSameLine,htmlWhitespaceSensitivity:{category:Il,type:"choice",default:"css",description:"How to handle whitespaces in HTML.",choices:[{value:"css",description:"Respect the default value of CSS display property."},{value:"strict",description:"Whitespaces are considered sensitive."},{value:"ignore",description:"Whitespaces are considered insensitive."}]},singleAttributePerLine:Fl.singleAttributePerLine,vueIndentScriptAndStyle:{category:Il,type:"boolean",default:!1,description:"Indent script and style tags in Vue files."}},qf=zf,Ml={};u(Ml,{angular:()=>Qm,html:()=>Km,lwc:()=>Jm,mjml:()=>Zm,vue:()=>Xm});var a1=new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`,"g"),Ll;(function(r){r[r.Emulated=0]="Emulated",r[r.None=2]="None",r[r.ShadowDom=3]="ShadowDom"})(Ll||(Ll={}));var Rl;(function(r){r[r.OnPush=0]="OnPush",r[r.Default=1]="Default"})(Rl||(Rl={}));var Ol;(function(r){r[r.None=0]="None",r[r.SignalBased=1]="SignalBased",r[r.HasDecoratorInputTransform=2]="HasDecoratorInputTransform"})(Ol||(Ol={}));var Bl={name:"custom-elements"},Pl={name:"no-errors-schema"},Vn;(function(r){r[r.NONE=0]="NONE",r[r.HTML=1]="HTML",r[r.STYLE=2]="STYLE",r[r.SCRIPT=3]="SCRIPT",r[r.URL=4]="URL",r[r.RESOURCE_URL=5]="RESOURCE_URL"})(Vn||(Vn={}));var Nl;(function(r){r[r.Error=0]="Error",r[r.Warning=1]="Warning",r[r.Ignore=2]="Ignore"})(Nl||(Nl={}));var At;(function(r){r[r.RAW_TEXT=0]="RAW_TEXT",r[r.ESCAPABLE_RAW_TEXT=1]="ESCAPABLE_RAW_TEXT",r[r.PARSABLE_DATA=2]="PARSABLE_DATA"})(At||(At={}));function Zr(r,a=!0){if(r[0]!=":")return[null,r];let s=r.indexOf(":",1);if(s===-1){if(a)throw new Error(`Unsupported format "${r}" expecting ":namespace:name"`);return[null,r]}return[r.slice(1,s),r.slice(s+1)]}function $l(r){return Zr(r)[1]==="ng-container"}function Vl(r){return Zr(r)[1]==="ng-content"}function Qr(r){return r===null?null:Zr(r)[0]}function Xr(r,a){return r?`:${r}:${a}`:a}var Jr;function Ul(){return Jr||(Jr={},eo(Vn.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),eo(Vn.STYLE,["*|style"]),eo(Vn.URL,["*|formAction","area|href","area|ping","audio|src","a|href","a|ping","blockquote|cite","body|background","del|cite","form|action","img|src","input|src","ins|cite","q|cite","source|src","track|src","video|poster","video|src"]),eo(Vn.RESOURCE_URL,["applet|code","applet|codebase","base|href","embed|src","frame|src","head|profile","html|manifest","iframe|src","link|href","media|src","object|codebase","object|data","script|src"])),Jr}function eo(r,a){for(let s of a)Jr[s.toLowerCase()]=r}var Wf=class{},Gf="boolean",Kf="number",Yf="string",Zf="object",Qf=["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored","[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":svg:graphics^:svg:|",":svg:animation^:svg:|*begin,*end,*repeat",":svg:geometry^:svg:|",":svg:componentTransferFunction^:svg:|",":svg:gradient^:svg:|",":svg:textContent^:svg:graphics|",":svg:textPositioning^:svg:textContent|","a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username","area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username","audio^media|","br^[HTMLElement]|clear","base^[HTMLElement]|href,target","body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink","button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value","canvas^[HTMLElement]|#height,#width","content^[HTMLElement]|select","dl^[HTMLElement]|!compact","data^[HTMLElement]|value","datalist^[HTMLElement]|","details^[HTMLElement]|!open","dialog^[HTMLElement]|!open,returnValue","dir^[HTMLElement]|!compact","div^[HTMLElement]|align","embed^[HTMLElement]|align,height,name,src,type,width","fieldset^[HTMLElement]|!disabled,name","font^[HTMLElement]|color,face,size","form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target","frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src","frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows","hr^[HTMLElement]|align,color,!noShade,size,width","head^[HTMLElement]|","h1,h2,h3,h4,h5,h6^[HTMLElement]|align","html^[HTMLElement]|version","iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width","img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width","input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width","li^[HTMLElement]|type,#value","label^[HTMLElement]|htmlFor","legend^[HTMLElement]|align","link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type","map^[HTMLElement]|name","marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width","menu^[HTMLElement]|!compact","meta^[HTMLElement]|content,httpEquiv,media,name,scheme","meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value","ins,del^[HTMLElement]|cite,dateTime","ol^[HTMLElement]|!compact,!reversed,#start,type","object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width","optgroup^[HTMLElement]|!disabled,label","option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value","output^[HTMLElement]|defaultValue,%htmlFor,name,value","p^[HTMLElement]|align","param^[HTMLElement]|name,type,value,valueType","picture^[HTMLElement]|","pre^[HTMLElement]|#width","progress^[HTMLElement]|#max,#value","q,blockquote,cite^[HTMLElement]|","script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type","select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value","slot^[HTMLElement]|name","source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width","span^[HTMLElement]|","style^[HTMLElement]|!disabled,media,type","caption^[HTMLElement]|align","th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width","col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width","table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width","tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign","tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign","template^[HTMLElement]|","textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap","time^[HTMLElement]|dateTime","title^[HTMLElement]|text","track^[HTMLElement]|!default,kind,label,src,srclang","ul^[HTMLElement]|!compact,type","unknown^[HTMLElement]|","video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",":svg:a^:svg:graphics|",":svg:animate^:svg:animation|",":svg:animateMotion^:svg:animation|",":svg:animateTransform^:svg:animation|",":svg:circle^:svg:geometry|",":svg:clipPath^:svg:graphics|",":svg:defs^:svg:graphics|",":svg:desc^:svg:|",":svg:discard^:svg:|",":svg:ellipse^:svg:geometry|",":svg:feBlend^:svg:|",":svg:feColorMatrix^:svg:|",":svg:feComponentTransfer^:svg:|",":svg:feComposite^:svg:|",":svg:feConvolveMatrix^:svg:|",":svg:feDiffuseLighting^:svg:|",":svg:feDisplacementMap^:svg:|",":svg:feDistantLight^:svg:|",":svg:feDropShadow^:svg:|",":svg:feFlood^:svg:|",":svg:feFuncA^:svg:componentTransferFunction|",":svg:feFuncB^:svg:componentTransferFunction|",":svg:feFuncG^:svg:componentTransferFunction|",":svg:feFuncR^:svg:componentTransferFunction|",":svg:feGaussianBlur^:svg:|",":svg:feImage^:svg:|",":svg:feMerge^:svg:|",":svg:feMergeNode^:svg:|",":svg:feMorphology^:svg:|",":svg:feOffset^:svg:|",":svg:fePointLight^:svg:|",":svg:feSpecularLighting^:svg:|",":svg:feSpotLight^:svg:|",":svg:feTile^:svg:|",":svg:feTurbulence^:svg:|",":svg:filter^:svg:|",":svg:foreignObject^:svg:graphics|",":svg:g^:svg:graphics|",":svg:image^:svg:graphics|decoding",":svg:line^:svg:geometry|",":svg:linearGradient^:svg:gradient|",":svg:mpath^:svg:|",":svg:marker^:svg:|",":svg:mask^:svg:|",":svg:metadata^:svg:|",":svg:path^:svg:geometry|",":svg:pattern^:svg:|",":svg:polygon^:svg:geometry|",":svg:polyline^:svg:geometry|",":svg:radialGradient^:svg:gradient|",":svg:rect^:svg:geometry|",":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",":svg:script^:svg:|type",":svg:set^:svg:animation|",":svg:stop^:svg:|",":svg:style^:svg:|!disabled,media,title,type",":svg:switch^:svg:graphics|",":svg:symbol^:svg:|",":svg:tspan^:svg:textPositioning|",":svg:text^:svg:textPositioning|",":svg:textPath^:svg:textContent|",":svg:title^:svg:|",":svg:use^:svg:graphics|",":svg:view^:svg:|#zoomAndPan","data^[HTMLElement]|value","keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name","menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default","summary^[HTMLElement]|","time^[HTMLElement]|dateTime",":svg:cursor^:svg:|",":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":math:math^:math:|",":math:maction^:math:|",":math:menclose^:math:|",":math:merror^:math:|",":math:mfenced^:math:|",":math:mfrac^:math:|",":math:mi^:math:|",":math:mmultiscripts^:math:|",":math:mn^:math:|",":math:mo^:math:|",":math:mover^:math:|",":math:mpadded^:math:|",":math:mphantom^:math:|",":math:mroot^:math:|",":math:mrow^:math:|",":math:ms^:math:|",":math:mspace^:math:|",":math:msqrt^:math:|",":math:mstyle^:math:|",":math:msub^:math:|",":math:msubsup^:math:|",":math:msup^:math:|",":math:mtable^:math:|",":math:mtd^:math:|",":math:mtext^:math:|",":math:mtr^:math:|",":math:munder^:math:|",":math:munderover^:math:|",":math:semantics^:math:|"],jl=new Map(Object.entries({class:"className",for:"htmlFor",formaction:"formAction",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"})),Xf=Array.from(jl).reduce((r,[a,s])=>(r.set(a,s),r),new Map),Jf=class extends Wf{constructor(){super(),this._schema=new Map,this._eventSchema=new Map,Qf.forEach(r=>{let a=new Map,s=new Set,[c,d]=r.split("|"),p=d.split(","),[m,_]=c.split("^");m.split(",").forEach(N=>{this._schema.set(N.toLowerCase(),a),this._eventSchema.set(N.toLowerCase(),s)});let A=_&&this._schema.get(_.toLowerCase());if(A){for(let[N,R]of A)a.set(N,R);for(let N of this._eventSchema.get(_.toLowerCase()))s.add(N)}p.forEach(N=>{if(N.length>0)switch(N[0]){case"*":s.add(N.substring(1));break;case"!":a.set(N.substring(1),Gf);break;case"#":a.set(N.substring(1),Kf);break;case"%":a.set(N.substring(1),Zf);break;default:a.set(N,Yf)}})})}hasProperty(r,a,s){if(s.some(c=>c.name===Pl.name))return!0;if(r.indexOf("-")>-1){if($l(r)||Vl(r))return!1;if(s.some(c=>c.name===Bl.name))return!0}return(this._schema.get(r.toLowerCase())||this._schema.get("unknown")).has(a)}hasElement(r,a){return a.some(s=>s.name===Pl.name)||r.indexOf("-")>-1&&($l(r)||Vl(r)||a.some(s=>s.name===Bl.name))?!0:this._schema.has(r.toLowerCase())}securityContext(r,a,s){s&&(a=this.getMappedPropName(a)),r=r.toLowerCase(),a=a.toLowerCase();let c=Ul()[r+"|"+a];return c||(c=Ul()["*|"+a],c||Vn.NONE)}getMappedPropName(r){return jl.get(r)??r}getDefaultComponentElementName(){return"ng-component"}validateProperty(r){return r.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event property '${r}' is disallowed for security reasons, please use (${r.slice(2)})=...
If '${r}' is a directive input, make sure the directive is imported by the current module.`}:{error:!1}}validateAttribute(r){return r.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event attribute '${r}' is disallowed for security reasons, please use (${r.slice(2)})=...`}:{error:!1}}allKnownElementNames(){return Array.from(this._schema.keys())}allKnownAttributesOfElement(r){let a=this._schema.get(r.toLowerCase())||this._schema.get("unknown");return Array.from(a.keys()).map(s=>Xf.get(s)??s)}allKnownEventsOfElement(r){return Array.from(this._eventSchema.get(r.toLowerCase())??[])}normalizeAnimationStyleProperty(r){return xf(r)}normalizeAnimationStyleValue(r,a,s){let c="",d=s.toString().trim(),p=null;if(em(r)&&s!==0&&s!=="0")if(typeof s=="number")c="px";else{let m=s.match(/^[+-]?[\d\.]+([a-z]*)$/);m&&m[1].length==0&&(p=`Please provide a CSS unit value for ${a}:${s}`)}return{error:p,value:d+c}}};function em(r){switch(r){case"width":case"height":case"minWidth":case"minHeight":case"maxWidth":case"maxHeight":case"left":case"top":case"bottom":case"right":case"fontSize":case"outlineWidth":case"outlineOffset":case"paddingTop":case"paddingLeft":case"paddingBottom":case"paddingRight":case"marginTop":case"marginLeft":case"marginBottom":case"marginRight":case"borderRadius":case"borderWidth":case"borderTopWidth":case"borderLeftWidth":case"borderRightWidth":case"borderBottomWidth":case"textIndent":return!0;default:return!1}}var ee=class{constructor({closedByChildren:r,implicitNamespacePrefix:a,contentType:s=At.PARSABLE_DATA,closedByParent:c=!1,isVoid:d=!1,ignoreFirstLf:p=!1,preventNamespaceInheritance:m=!1,canSelfClose:_=!1}={}){this.closedByChildren={},this.closedByParent=!1,r&&r.length>0&&r.forEach(A=>this.closedByChildren[A]=!0),this.isVoid=d,this.closedByParent=c||d,this.implicitNamespacePrefix=a||null,this.contentType=s,this.ignoreFirstLf=p,this.preventNamespaceInheritance=m,this.canSelfClose=_??d}isClosedByChild(r){return this.isVoid||r.toLowerCase()in this.closedByChildren}getContentType(r){return typeof this.contentType=="object"?(r===void 0?void 0:this.contentType[r])??this.contentType.default:this.contentType}},Hl,Qi;function Sa(r){return Qi||(Hl=new ee({canSelfClose:!0}),Qi=Object.assign(Object.create(null),{base:new ee({isVoid:!0}),meta:new ee({isVoid:!0}),area:new ee({isVoid:!0}),embed:new ee({isVoid:!0}),link:new ee({isVoid:!0}),img:new ee({isVoid:!0}),input:new ee({isVoid:!0}),param:new ee({isVoid:!0}),hr:new ee({isVoid:!0}),br:new ee({isVoid:!0}),source:new ee({isVoid:!0}),track:new ee({isVoid:!0}),wbr:new ee({isVoid:!0}),p:new ee({closedByChildren:["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"],closedByParent:!0}),thead:new ee({closedByChildren:["tbody","tfoot"]}),tbody:new ee({closedByChildren:["tbody","tfoot"],closedByParent:!0}),tfoot:new ee({closedByChildren:["tbody"],closedByParent:!0}),tr:new ee({closedByChildren:["tr"],closedByParent:!0}),td:new ee({closedByChildren:["td","th"],closedByParent:!0}),th:new ee({closedByChildren:["td","th"],closedByParent:!0}),col:new ee({isVoid:!0}),svg:new ee({implicitNamespacePrefix:"svg"}),foreignObject:new ee({implicitNamespacePrefix:"svg",preventNamespaceInheritance:!0}),math:new ee({implicitNamespacePrefix:"math"}),li:new ee({closedByChildren:["li"],closedByParent:!0}),dt:new ee({closedByChildren:["dt","dd"]}),dd:new ee({closedByChildren:["dt","dd"],closedByParent:!0}),rb:new ee({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rt:new ee({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rtc:new ee({closedByChildren:["rb","rtc","rp"],closedByParent:!0}),rp:new ee({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),optgroup:new ee({closedByChildren:["optgroup"],closedByParent:!0}),option:new ee({closedByChildren:["option","optgroup"],closedByParent:!0}),pre:new ee({ignoreFirstLf:!0}),listing:new ee({ignoreFirstLf:!0}),style:new ee({contentType:At.RAW_TEXT}),script:new ee({contentType:At.RAW_TEXT}),title:new ee({contentType:{default:At.ESCAPABLE_RAW_TEXT,svg:At.PARSABLE_DATA}}),textarea:new ee({contentType:At.ESCAPABLE_RAW_TEXT,ignoreFirstLf:!0})}),new Jf().allKnownElementNames().forEach(a=>{!Qi[a]&&Qr(a)===null&&(Qi[a]=new ee({canSelfClose:!1}))})),Qi[r]??Hl}var ri=class{constructor(r,a){this.sourceSpan=r,this.i18n=a}},tm=class extends ri{constructor(r,a,s,c){super(a,c),this.value=r,this.tokens=s,this.type="text"}visit(r,a){return r.visitText(this,a)}},nm=class extends ri{constructor(r,a,s,c){super(a,c),this.value=r,this.tokens=s,this.type="cdata"}visit(r,a){return r.visitCdata(this,a)}},im=class extends ri{constructor(r,a,s,c,d,p){super(c,p),this.switchValue=r,this.type=a,this.cases=s,this.switchValueSourceSpan=d}visit(r,a){return r.visitExpansion(this,a)}},rm=class{constructor(r,a,s,c,d){this.value=r,this.expression=a,this.sourceSpan=s,this.valueSourceSpan=c,this.expSourceSpan=d,this.type="expansionCase"}visit(r,a){return r.visitExpansionCase(this,a)}},om=class extends ri{constructor(r,a,s,c,d,p,m){super(s,m),this.name=r,this.value=a,this.keySpan=c,this.valueSpan=d,this.valueTokens=p,this.type="attribute"}visit(r,a){return r.visitAttribute(this,a)}get nameSpan(){return this.keySpan}},pn=class extends ri{constructor(r,a,s,c,d,p=null,m=null,_){super(c,_),this.name=r,this.attrs=a,this.children=s,this.startSourceSpan=d,this.endSourceSpan=p,this.nameSpan=m,this.type="element"}visit(r,a){return r.visitElement(this,a)}},am=class{constructor(r,a){this.value=r,this.sourceSpan=a,this.type="comment"}visit(r,a){return r.visitComment(this,a)}},sm=class{constructor(r,a){this.value=r,this.sourceSpan=a,this.type="docType"}visit(r,a){return r.visitDocType(this,a)}},oi=class extends ri{constructor(r,a,s,c,d,p,m=null,_){super(c,_),this.name=r,this.parameters=a,this.children=s,this.nameSpan=d,this.startSourceSpan=p,this.endSourceSpan=m,this.type="block"}visit(r,a){return r.visitBlock(this,a)}},zl=class{constructor(r,a){this.expression=r,this.sourceSpan=a,this.type="blockParameter",this.startSourceSpan=null,this.endSourceSpan=null}visit(r,a){return r.visitBlockParameter(this,a)}},ql=class{constructor(r,a,s,c,d){this.name=r,this.value=a,this.sourceSpan=s,this.nameSpan=c,this.valueSpan=d,this.type="letDeclaration",this.startSourceSpan=null,this.endSourceSpan=null}visit(r,a){return r.visitLetDeclaration(this,a)}};function Wl(r,a,s=null){let c=[],d=r.visit?p=>r.visit(p,s)||p.visit(r,s):p=>p.visit(r,s);return a.forEach(p=>{let m=d(p);m&&c.push(m)}),c}var lm=class{constructor(){}visitElement(r,a){this.visitChildren(a,s=>{s(r.attrs),s(r.children)})}visitAttribute(r,a){}visitText(r,a){}visitCdata(r,a){}visitComment(r,a){}visitDocType(r,a){}visitExpansion(r,a){return this.visitChildren(a,s=>{s(r.cases)})}visitExpansionCase(r,a){}visitBlock(r,a){this.visitChildren(a,s=>{s(r.parameters),s(r.children)})}visitBlockParameter(r,a){}visitLetDeclaration(r,a){}visitChildren(r,a){let s=[],c=this;function d(p){p&&s.push(Wl(c,p,r))}return a(d),Array.prototype.concat.apply([],s)}},to={AElig:"\xC6",AMP:"&",amp:"&",Aacute:"\xC1",Abreve:"\u0102",Acirc:"\xC2",Acy:"\u0410",Afr:"\u{1D504}",Agrave:"\xC0",Alpha:"\u0391",Amacr:"\u0100",And:"\u2A53",Aogon:"\u0104",Aopf:"\u{1D538}",ApplyFunction:"\u2061",af:"\u2061",Aring:"\xC5",angst:"\xC5",Ascr:"\u{1D49C}",Assign:"\u2254",colone:"\u2254",coloneq:"\u2254",Atilde:"\xC3",Auml:"\xC4",Backslash:"\u2216",setminus:"\u2216",setmn:"\u2216",smallsetminus:"\u2216",ssetmn:"\u2216",Barv:"\u2AE7",Barwed:"\u2306",doublebarwedge:"\u2306",Bcy:"\u0411",Because:"\u2235",becaus:"\u2235",because:"\u2235",Bernoullis:"\u212C",Bscr:"\u212C",bernou:"\u212C",Beta:"\u0392",Bfr:"\u{1D505}",Bopf:"\u{1D539}",Breve:"\u02D8",breve:"\u02D8",Bumpeq:"\u224E",HumpDownHump:"\u224E",bump:"\u224E",CHcy:"\u0427",COPY:"\xA9",copy:"\xA9",Cacute:"\u0106",Cap:"\u22D2",CapitalDifferentialD:"\u2145",DD:"\u2145",Cayleys:"\u212D",Cfr:"\u212D",Ccaron:"\u010C",Ccedil:"\xC7",Ccirc:"\u0108",Cconint:"\u2230",Cdot:"\u010A",Cedilla:"\xB8",cedil:"\xB8",CenterDot:"\xB7",centerdot:"\xB7",middot:"\xB7",Chi:"\u03A7",CircleDot:"\u2299",odot:"\u2299",CircleMinus:"\u2296",ominus:"\u2296",CirclePlus:"\u2295",oplus:"\u2295",CircleTimes:"\u2297",otimes:"\u2297",ClockwiseContourIntegral:"\u2232",cwconint:"\u2232",CloseCurlyDoubleQuote:"\u201D",rdquo:"\u201D",rdquor:"\u201D",CloseCurlyQuote:"\u2019",rsquo:"\u2019",rsquor:"\u2019",Colon:"\u2237",Proportion:"\u2237",Colone:"\u2A74",Congruent:"\u2261",equiv:"\u2261",Conint:"\u222F",DoubleContourIntegral:"\u222F",ContourIntegral:"\u222E",conint:"\u222E",oint:"\u222E",Copf:"\u2102",complexes:"\u2102",Coproduct:"\u2210",coprod:"\u2210",CounterClockwiseContourIntegral:"\u2233",awconint:"\u2233",Cross:"\u2A2F",Cscr:"\u{1D49E}",Cup:"\u22D3",CupCap:"\u224D",asympeq:"\u224D",DDotrahd:"\u2911",DJcy:"\u0402",DScy:"\u0405",DZcy:"\u040F",Dagger:"\u2021",ddagger:"\u2021",Darr:"\u21A1",Dashv:"\u2AE4",DoubleLeftTee:"\u2AE4",Dcaron:"\u010E",Dcy:"\u0414",Del:"\u2207",nabla:"\u2207",Delta:"\u0394",Dfr:"\u{1D507}",DiacriticalAcute:"\xB4",acute:"\xB4",DiacriticalDot:"\u02D9",dot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",dblac:"\u02DD",DiacriticalGrave:"`",grave:"`",DiacriticalTilde:"\u02DC",tilde:"\u02DC",Diamond:"\u22C4",diam:"\u22C4",diamond:"\u22C4",DifferentialD:"\u2146",dd:"\u2146",Dopf:"\u{1D53B}",Dot:"\xA8",DoubleDot:"\xA8",die:"\xA8",uml:"\xA8",DotDot:"\u20DC",DotEqual:"\u2250",doteq:"\u2250",esdot:"\u2250",DoubleDownArrow:"\u21D3",Downarrow:"\u21D3",dArr:"\u21D3",DoubleLeftArrow:"\u21D0",Leftarrow:"\u21D0",lArr:"\u21D0",DoubleLeftRightArrow:"\u21D4",Leftrightarrow:"\u21D4",hArr:"\u21D4",iff:"\u21D4",DoubleLongLeftArrow:"\u27F8",Longleftarrow:"\u27F8",xlArr:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",Longleftrightarrow:"\u27FA",xhArr:"\u27FA",DoubleLongRightArrow:"\u27F9",Longrightarrow:"\u27F9",xrArr:"\u27F9",DoubleRightArrow:"\u21D2",Implies:"\u21D2",Rightarrow:"\u21D2",rArr:"\u21D2",DoubleRightTee:"\u22A8",vDash:"\u22A8",DoubleUpArrow:"\u21D1",Uparrow:"\u21D1",uArr:"\u21D1",DoubleUpDownArrow:"\u21D5",Updownarrow:"\u21D5",vArr:"\u21D5",DoubleVerticalBar:"\u2225",par:"\u2225",parallel:"\u2225",shortparallel:"\u2225",spar:"\u2225",DownArrow:"\u2193",ShortDownArrow:"\u2193",darr:"\u2193",downarrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",duarr:"\u21F5",DownBreve:"\u0311",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVector:"\u21BD",leftharpoondown:"\u21BD",lhard:"\u21BD",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVector:"\u21C1",rhard:"\u21C1",rightharpoondown:"\u21C1",DownRightVectorBar:"\u2957",DownTee:"\u22A4",top:"\u22A4",DownTeeArrow:"\u21A7",mapstodown:"\u21A7",Dscr:"\u{1D49F}",Dstrok:"\u0110",ENG:"\u014A",ETH:"\xD0",Eacute:"\xC9",Ecaron:"\u011A",Ecirc:"\xCA",Ecy:"\u042D",Edot:"\u0116",Efr:"\u{1D508}",Egrave:"\xC8",Element:"\u2208",in:"\u2208",isin:"\u2208",isinv:"\u2208",Emacr:"\u0112",EmptySmallSquare:"\u25FB",EmptyVerySmallSquare:"\u25AB",Eogon:"\u0118",Eopf:"\u{1D53C}",Epsilon:"\u0395",Equal:"\u2A75",EqualTilde:"\u2242",eqsim:"\u2242",esim:"\u2242",Equilibrium:"\u21CC",rightleftharpoons:"\u21CC",rlhar:"\u21CC",Escr:"\u2130",expectation:"\u2130",Esim:"\u2A73",Eta:"\u0397",Euml:"\xCB",Exists:"\u2203",exist:"\u2203",ExponentialE:"\u2147",ee:"\u2147",exponentiale:"\u2147",Fcy:"\u0424",Ffr:"\u{1D509}",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",blacksquare:"\u25AA",squarf:"\u25AA",squf:"\u25AA",Fopf:"\u{1D53D}",ForAll:"\u2200",forall:"\u2200",Fouriertrf:"\u2131",Fscr:"\u2131",GJcy:"\u0403",GT:">",gt:">",Gamma:"\u0393",Gammad:"\u03DC",Gbreve:"\u011E",Gcedil:"\u0122",Gcirc:"\u011C",Gcy:"\u0413",Gdot:"\u0120",Gfr:"\u{1D50A}",Gg:"\u22D9",ggg:"\u22D9",Gopf:"\u{1D53E}",GreaterEqual:"\u2265",ge:"\u2265",geq:"\u2265",GreaterEqualLess:"\u22DB",gel:"\u22DB",gtreqless:"\u22DB",GreaterFullEqual:"\u2267",gE:"\u2267",geqq:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",gl:"\u2277",gtrless:"\u2277",GreaterSlantEqual:"\u2A7E",geqslant:"\u2A7E",ges:"\u2A7E",GreaterTilde:"\u2273",gsim:"\u2273",gtrsim:"\u2273",Gscr:"\u{1D4A2}",Gt:"\u226B",NestedGreaterGreater:"\u226B",gg:"\u226B",HARDcy:"\u042A",Hacek:"\u02C7",caron:"\u02C7",Hat:"^",Hcirc:"\u0124",Hfr:"\u210C",Poincareplane:"\u210C",HilbertSpace:"\u210B",Hscr:"\u210B",hamilt:"\u210B",Hopf:"\u210D",quaternions:"\u210D",HorizontalLine:"\u2500",boxh:"\u2500",Hstrok:"\u0126",HumpEqual:"\u224F",bumpe:"\u224F",bumpeq:"\u224F",IEcy:"\u0415",IJlig:"\u0132",IOcy:"\u0401",Iacute:"\xCD",Icirc:"\xCE",Icy:"\u0418",Idot:"\u0130",Ifr:"\u2111",Im:"\u2111",image:"\u2111",imagpart:"\u2111",Igrave:"\xCC",Imacr:"\u012A",ImaginaryI:"\u2148",ii:"\u2148",Int:"\u222C",Integral:"\u222B",int:"\u222B",Intersection:"\u22C2",bigcap:"\u22C2",xcap:"\u22C2",InvisibleComma:"\u2063",ic:"\u2063",InvisibleTimes:"\u2062",it:"\u2062",Iogon:"\u012E",Iopf:"\u{1D540}",Iota:"\u0399",Iscr:"\u2110",imagline:"\u2110",Itilde:"\u0128",Iukcy:"\u0406",Iuml:"\xCF",Jcirc:"\u0134",Jcy:"\u0419",Jfr:"\u{1D50D}",Jopf:"\u{1D541}",Jscr:"\u{1D4A5}",Jsercy:"\u0408",Jukcy:"\u0404",KHcy:"\u0425",KJcy:"\u040C",Kappa:"\u039A",Kcedil:"\u0136",Kcy:"\u041A",Kfr:"\u{1D50E}",Kopf:"\u{1D542}",Kscr:"\u{1D4A6}",LJcy:"\u0409",LT:"<",lt:"<",Lacute:"\u0139",Lambda:"\u039B",Lang:"\u27EA",Laplacetrf:"\u2112",Lscr:"\u2112",lagran:"\u2112",Larr:"\u219E",twoheadleftarrow:"\u219E",Lcaron:"\u013D",Lcedil:"\u013B",Lcy:"\u041B",LeftAngleBracket:"\u27E8",lang:"\u27E8",langle:"\u27E8",LeftArrow:"\u2190",ShortLeftArrow:"\u2190",larr:"\u2190",leftarrow:"\u2190",slarr:"\u2190",LeftArrowBar:"\u21E4",larrb:"\u21E4",LeftArrowRightArrow:"\u21C6",leftrightarrows:"\u21C6",lrarr:"\u21C6",LeftCeiling:"\u2308",lceil:"\u2308",LeftDoubleBracket:"\u27E6",lobrk:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21C3",dharl:"\u21C3",downharpoonleft:"\u21C3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230A",lfloor:"\u230A",LeftRightArrow:"\u2194",harr:"\u2194",leftrightarrow:"\u2194",LeftRightVector:"\u294E",LeftTee:"\u22A3",dashv:"\u22A3",LeftTeeArrow:"\u21A4",mapstoleft:"\u21A4",LeftTeeVector:"\u295A",LeftTriangle:"\u22B2",vartriangleleft:"\u22B2",vltri:"\u22B2",LeftTriangleBar:"\u29CF",LeftTriangleEqual:"\u22B4",ltrie:"\u22B4",trianglelefteq:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21BF",uharl:"\u21BF",upharpoonleft:"\u21BF",LeftUpVectorBar:"\u2958",LeftVector:"\u21BC",leftharpoonup:"\u21BC",lharu:"\u21BC",LeftVectorBar:"\u2952",LessEqualGreater:"\u22DA",leg:"\u22DA",lesseqgtr:"\u22DA",LessFullEqual:"\u2266",lE:"\u2266",leqq:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",lg:"\u2276",LessLess:"\u2AA1",LessSlantEqual:"\u2A7D",leqslant:"\u2A7D",les:"\u2A7D",LessTilde:"\u2272",lesssim:"\u2272",lsim:"\u2272",Lfr:"\u{1D50F}",Ll:"\u22D8",Lleftarrow:"\u21DA",lAarr:"\u21DA",Lmidot:"\u013F",LongLeftArrow:"\u27F5",longleftarrow:"\u27F5",xlarr:"\u27F5",LongLeftRightArrow:"\u27F7",longleftrightarrow:"\u27F7",xharr:"\u27F7",LongRightArrow:"\u27F6",longrightarrow:"\u27F6",xrarr:"\u27F6",Lopf:"\u{1D543}",LowerLeftArrow:"\u2199",swarr:"\u2199",swarrow:"\u2199",LowerRightArrow:"\u2198",searr:"\u2198",searrow:"\u2198",Lsh:"\u21B0",lsh:"\u21B0",Lstrok:"\u0141",Lt:"\u226A",NestedLessLess:"\u226A",ll:"\u226A",Map:"\u2905",Mcy:"\u041C",MediumSpace:"\u205F",Mellintrf:"\u2133",Mscr:"\u2133",phmmat:"\u2133",Mfr:"\u{1D510}",MinusPlus:"\u2213",mnplus:"\u2213",mp:"\u2213",Mopf:"\u{1D544}",Mu:"\u039C",NJcy:"\u040A",Nacute:"\u0143",Ncaron:"\u0147",Ncedil:"\u0145",Ncy:"\u041D",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",ZeroWidthSpace:"\u200B",NewLine:`
`,Nfr:"\u{1D511}",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nbsp:"\xA0",Nopf:"\u2115",naturals:"\u2115",Not:"\u2AEC",NotCongruent:"\u2262",nequiv:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",npar:"\u2226",nparallel:"\u2226",nshortparallel:"\u2226",nspar:"\u2226",NotElement:"\u2209",notin:"\u2209",notinva:"\u2209",NotEqual:"\u2260",ne:"\u2260",NotEqualTilde:"\u2242\u0338",nesim:"\u2242\u0338",NotExists:"\u2204",nexist:"\u2204",nexists:"\u2204",NotGreater:"\u226F",ngt:"\u226F",ngtr:"\u226F",NotGreaterEqual:"\u2271",nge:"\u2271",ngeq:"\u2271",NotGreaterFullEqual:"\u2267\u0338",ngE:"\u2267\u0338",ngeqq:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",nGtv:"\u226B\u0338",NotGreaterLess:"\u2279",ntgl:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",NotGreaterTilde:"\u2275",ngsim:"\u2275",NotHumpDownHump:"\u224E\u0338",nbump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",nbumpe:"\u224F\u0338",NotLeftTriangle:"\u22EA",nltri:"\u22EA",ntriangleleft:"\u22EA",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangleEqual:"\u22EC",nltrie:"\u22EC",ntrianglelefteq:"\u22EC",NotLess:"\u226E",nless:"\u226E",nlt:"\u226E",NotLessEqual:"\u2270",nle:"\u2270",nleq:"\u2270",NotLessGreater:"\u2278",ntlg:"\u2278",NotLessLess:"\u226A\u0338",nLtv:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",NotLessTilde:"\u2274",nlsim:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",NotPrecedes:"\u2280",npr:"\u2280",nprec:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",npre:"\u2AAF\u0338",npreceq:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",nprcue:"\u22E0",NotReverseElement:"\u220C",notni:"\u220C",notniva:"\u220C",NotRightTriangle:"\u22EB",nrtri:"\u22EB",ntriangleright:"\u22EB",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangleEqual:"\u22ED",nrtrie:"\u22ED",ntrianglerighteq:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",nsqsube:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",nsqsupe:"\u22E3",NotSubset:"\u2282\u20D2",nsubset:"\u2282\u20D2",vnsub:"\u2282\u20D2",NotSubsetEqual:"\u2288",nsube:"\u2288",nsubseteq:"\u2288",NotSucceeds:"\u2281",nsc:"\u2281",nsucc:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",nsce:"\u2AB0\u0338",nsucceq:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",nsccue:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",nsupset:"\u2283\u20D2",vnsup:"\u2283\u20D2",NotSupersetEqual:"\u2289",nsupe:"\u2289",nsupseteq:"\u2289",NotTilde:"\u2241",nsim:"\u2241",NotTildeEqual:"\u2244",nsime:"\u2244",nsimeq:"\u2244",NotTildeFullEqual:"\u2247",ncong:"\u2247",NotTildeTilde:"\u2249",nap:"\u2249",napprox:"\u2249",NotVerticalBar:"\u2224",nmid:"\u2224",nshortmid:"\u2224",nsmid:"\u2224",Nscr:"\u{1D4A9}",Ntilde:"\xD1",Nu:"\u039D",OElig:"\u0152",Oacute:"\xD3",Ocirc:"\xD4",Ocy:"\u041E",Odblac:"\u0150",Ofr:"\u{1D512}",Ograve:"\xD2",Omacr:"\u014C",Omega:"\u03A9",ohm:"\u03A9",Omicron:"\u039F",Oopf:"\u{1D546}",OpenCurlyDoubleQuote:"\u201C",ldquo:"\u201C",OpenCurlyQuote:"\u2018",lsquo:"\u2018",Or:"\u2A54",Oscr:"\u{1D4AA}",Oslash:"\xD8",Otilde:"\xD5",Otimes:"\u2A37",Ouml:"\xD6",OverBar:"\u203E",oline:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",tbrk:"\u23B4",OverParenthesis:"\u23DC",PartialD:"\u2202",part:"\u2202",Pcy:"\u041F",Pfr:"\u{1D513}",Phi:"\u03A6",Pi:"\u03A0",PlusMinus:"\xB1",plusmn:"\xB1",pm:"\xB1",Popf:"\u2119",primes:"\u2119",Pr:"\u2ABB",Precedes:"\u227A",pr:"\u227A",prec:"\u227A",PrecedesEqual:"\u2AAF",pre:"\u2AAF",preceq:"\u2AAF",PrecedesSlantEqual:"\u227C",prcue:"\u227C",preccurlyeq:"\u227C",PrecedesTilde:"\u227E",precsim:"\u227E",prsim:"\u227E",Prime:"\u2033",Product:"\u220F",prod:"\u220F",Proportional:"\u221D",prop:"\u221D",propto:"\u221D",varpropto:"\u221D",vprop:"\u221D",Pscr:"\u{1D4AB}",Psi:"\u03A8",QUOT:'"',quot:'"',Qfr:"\u{1D514}",Qopf:"\u211A",rationals:"\u211A",Qscr:"\u{1D4AC}",RBarr:"\u2910",drbkarow:"\u2910",REG:"\xAE",circledR:"\xAE",reg:"\xAE",Racute:"\u0154",Rang:"\u27EB",Rarr:"\u21A0",twoheadrightarrow:"\u21A0",Rarrtl:"\u2916",Rcaron:"\u0158",Rcedil:"\u0156",Rcy:"\u0420",Re:"\u211C",Rfr:"\u211C",real:"\u211C",realpart:"\u211C",ReverseElement:"\u220B",SuchThat:"\u220B",ni:"\u220B",niv:"\u220B",ReverseEquilibrium:"\u21CB",leftrightharpoons:"\u21CB",lrhar:"\u21CB",ReverseUpEquilibrium:"\u296F",duhar:"\u296F",Rho:"\u03A1",RightAngleBracket:"\u27E9",rang:"\u27E9",rangle:"\u27E9",RightArrow:"\u2192",ShortRightArrow:"\u2192",rarr:"\u2192",rightarrow:"\u2192",srarr:"\u2192",RightArrowBar:"\u21E5",rarrb:"\u21E5",RightArrowLeftArrow:"\u21C4",rightleftarrows:"\u21C4",rlarr:"\u21C4",RightCeiling:"\u2309",rceil:"\u2309",RightDoubleBracket:"\u27E7",robrk:"\u27E7",RightDownTeeVector:"\u295D",RightDownVector:"\u21C2",dharr:"\u21C2",downharpoonright:"\u21C2",RightDownVectorBar:"\u2955",RightFloor:"\u230B",rfloor:"\u230B",RightTee:"\u22A2",vdash:"\u22A2",RightTeeArrow:"\u21A6",map:"\u21A6",mapsto:"\u21A6",RightTeeVector:"\u295B",RightTriangle:"\u22B3",vartriangleright:"\u22B3",vrtri:"\u22B3",RightTriangleBar:"\u29D0",RightTriangleEqual:"\u22B5",rtrie:"\u22B5",trianglerighteq:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVector:"\u21BE",uharr:"\u21BE",upharpoonright:"\u21BE",RightUpVectorBar:"\u2954",RightVector:"\u21C0",rharu:"\u21C0",rightharpoonup:"\u21C0",RightVectorBar:"\u2953",Ropf:"\u211D",reals:"\u211D",RoundImplies:"\u2970",Rrightarrow:"\u21DB",rAarr:"\u21DB",Rscr:"\u211B",realine:"\u211B",Rsh:"\u21B1",rsh:"\u21B1",RuleDelayed:"\u29F4",SHCHcy:"\u0429",SHcy:"\u0428",SOFTcy:"\u042C",Sacute:"\u015A",Sc:"\u2ABC",Scaron:"\u0160",Scedil:"\u015E",Scirc:"\u015C",Scy:"\u0421",Sfr:"\u{1D516}",ShortUpArrow:"\u2191",UpArrow:"\u2191",uarr:"\u2191",uparrow:"\u2191",Sigma:"\u03A3",SmallCircle:"\u2218",compfn:"\u2218",Sopf:"\u{1D54A}",Sqrt:"\u221A",radic:"\u221A",Square:"\u25A1",squ:"\u25A1",square:"\u25A1",SquareIntersection:"\u2293",sqcap:"\u2293",SquareSubset:"\u228F",sqsub:"\u228F",sqsubset:"\u228F",SquareSubsetEqual:"\u2291",sqsube:"\u2291",sqsubseteq:"\u2291",SquareSuperset:"\u2290",sqsup:"\u2290",sqsupset:"\u2290",SquareSupersetEqual:"\u2292",sqsupe:"\u2292",sqsupseteq:"\u2292",SquareUnion:"\u2294",sqcup:"\u2294",Sscr:"\u{1D4AE}",Star:"\u22C6",sstarf:"\u22C6",Sub:"\u22D0",Subset:"\u22D0",SubsetEqual:"\u2286",sube:"\u2286",subseteq:"\u2286",Succeeds:"\u227B",sc:"\u227B",succ:"\u227B",SucceedsEqual:"\u2AB0",sce:"\u2AB0",succeq:"\u2AB0",SucceedsSlantEqual:"\u227D",sccue:"\u227D",succcurlyeq:"\u227D",SucceedsTilde:"\u227F",scsim:"\u227F",succsim:"\u227F",Sum:"\u2211",sum:"\u2211",Sup:"\u22D1",Supset:"\u22D1",Superset:"\u2283",sup:"\u2283",supset:"\u2283",SupersetEqual:"\u2287",supe:"\u2287",supseteq:"\u2287",THORN:"\xDE",TRADE:"\u2122",trade:"\u2122",TSHcy:"\u040B",TScy:"\u0426",Tab:"	",Tau:"\u03A4",Tcaron:"\u0164",Tcedil:"\u0162",Tcy:"\u0422",Tfr:"\u{1D517}",Therefore:"\u2234",there4:"\u2234",therefore:"\u2234",Theta:"\u0398",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",Tilde:"\u223C",sim:"\u223C",thicksim:"\u223C",thksim:"\u223C",TildeEqual:"\u2243",sime:"\u2243",simeq:"\u2243",TildeFullEqual:"\u2245",cong:"\u2245",TildeTilde:"\u2248",ap:"\u2248",approx:"\u2248",asymp:"\u2248",thickapprox:"\u2248",thkap:"\u2248",Topf:"\u{1D54B}",TripleDot:"\u20DB",tdot:"\u20DB",Tscr:"\u{1D4AF}",Tstrok:"\u0166",Uacute:"\xDA",Uarr:"\u219F",Uarrocir:"\u2949",Ubrcy:"\u040E",Ubreve:"\u016C",Ucirc:"\xDB",Ucy:"\u0423",Udblac:"\u0170",Ufr:"\u{1D518}",Ugrave:"\xD9",Umacr:"\u016A",UnderBar:"_",lowbar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",bbrk:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",bigcup:"\u22C3",xcup:"\u22C3",UnionPlus:"\u228E",uplus:"\u228E",Uogon:"\u0172",Uopf:"\u{1D54C}",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21C5",udarr:"\u21C5",UpDownArrow:"\u2195",updownarrow:"\u2195",varr:"\u2195",UpEquilibrium:"\u296E",udhar:"\u296E",UpTee:"\u22A5",bot:"\u22A5",bottom:"\u22A5",perp:"\u22A5",UpTeeArrow:"\u21A5",mapstoup:"\u21A5",UpperLeftArrow:"\u2196",nwarr:"\u2196",nwarrow:"\u2196",UpperRightArrow:"\u2197",nearr:"\u2197",nearrow:"\u2197",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",Uring:"\u016E",Uscr:"\u{1D4B0}",Utilde:"\u0168",Uuml:"\xDC",VDash:"\u22AB",Vbar:"\u2AEB",Vcy:"\u0412",Vdash:"\u22A9",Vdashl:"\u2AE6",Vee:"\u22C1",bigvee:"\u22C1",xvee:"\u22C1",Verbar:"\u2016",Vert:"\u2016",VerticalBar:"\u2223",mid:"\u2223",shortmid:"\u2223",smid:"\u2223",VerticalLine:"|",verbar:"|",vert:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",wr:"\u2240",wreath:"\u2240",VeryThinSpace:"\u200A",hairsp:"\u200A",Vfr:"\u{1D519}",Vopf:"\u{1D54D}",Vscr:"\u{1D4B1}",Vvdash:"\u22AA",Wcirc:"\u0174",Wedge:"\u22C0",bigwedge:"\u22C0",xwedge:"\u22C0",Wfr:"\u{1D51A}",Wopf:"\u{1D54E}",Wscr:"\u{1D4B2}",Xfr:"\u{1D51B}",Xi:"\u039E",Xopf:"\u{1D54F}",Xscr:"\u{1D4B3}",YAcy:"\u042F",YIcy:"\u0407",YUcy:"\u042E",Yacute:"\xDD",Ycirc:"\u0176",Ycy:"\u042B",Yfr:"\u{1D51C}",Yopf:"\u{1D550}",Yscr:"\u{1D4B4}",Yuml:"\u0178",ZHcy:"\u0416",Zacute:"\u0179",Zcaron:"\u017D",Zcy:"\u0417",Zdot:"\u017B",Zeta:"\u0396",Zfr:"\u2128",zeetrf:"\u2128",Zopf:"\u2124",integers:"\u2124",Zscr:"\u{1D4B5}",aacute:"\xE1",abreve:"\u0103",ac:"\u223E",mstpos:"\u223E",acE:"\u223E\u0333",acd:"\u223F",acirc:"\xE2",acy:"\u0430",aelig:"\xE6",afr:"\u{1D51E}",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",alpha:"\u03B1",amacr:"\u0101",amalg:"\u2A3F",and:"\u2227",wedge:"\u2227",andand:"\u2A55",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",angle:"\u2220",ange:"\u29A4",angmsd:"\u2221",measuredangle:"\u2221",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angzarr:"\u237C",aogon:"\u0105",aopf:"\u{1D552}",apE:"\u2A70",apacir:"\u2A6F",ape:"\u224A",approxeq:"\u224A",apid:"\u224B",apos:"'",aring:"\xE5",ascr:"\u{1D4B6}",ast:"*",midast:"*",atilde:"\xE3",auml:"\xE4",awint:"\u2A11",bNot:"\u2AED",backcong:"\u224C",bcong:"\u224C",backepsilon:"\u03F6",bepsi:"\u03F6",backprime:"\u2035",bprime:"\u2035",backsim:"\u223D",bsim:"\u223D",backsimeq:"\u22CD",bsime:"\u22CD",barvee:"\u22BD",barwed:"\u2305",barwedge:"\u2305",bbrktbrk:"\u23B6",bcy:"\u0431",bdquo:"\u201E",ldquor:"\u201E",bemptyv:"\u29B0",beta:"\u03B2",beth:"\u2136",between:"\u226C",twixt:"\u226C",bfr:"\u{1D51F}",bigcirc:"\u25EF",xcirc:"\u25EF",bigodot:"\u2A00",xodot:"\u2A00",bigoplus:"\u2A01",xoplus:"\u2A01",bigotimes:"\u2A02",xotime:"\u2A02",bigsqcup:"\u2A06",xsqcup:"\u2A06",bigstar:"\u2605",starf:"\u2605",bigtriangledown:"\u25BD",xdtri:"\u25BD",bigtriangleup:"\u25B3",xutri:"\u25B3",biguplus:"\u2A04",xuplus:"\u2A04",bkarow:"\u290D",rbarr:"\u290D",blacklozenge:"\u29EB",lozf:"\u29EB",blacktriangle:"\u25B4",utrif:"\u25B4",blacktriangledown:"\u25BE",dtrif:"\u25BE",blacktriangleleft:"\u25C2",ltrif:"\u25C2",blacktriangleright:"\u25B8",rtrif:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bnot:"\u2310",bopf:"\u{1D553}",bowtie:"\u22C8",boxDL:"\u2557",boxDR:"\u2554",boxDl:"\u2556",boxDr:"\u2553",boxH:"\u2550",boxHD:"\u2566",boxHU:"\u2569",boxHd:"\u2564",boxHu:"\u2567",boxUL:"\u255D",boxUR:"\u255A",boxUl:"\u255C",boxUr:"\u2559",boxV:"\u2551",boxVH:"\u256C",boxVL:"\u2563",boxVR:"\u2560",boxVh:"\u256B",boxVl:"\u2562",boxVr:"\u255F",boxbox:"\u29C9",boxdL:"\u2555",boxdR:"\u2552",boxdl:"\u2510",boxdr:"\u250C",boxhD:"\u2565",boxhU:"\u2568",boxhd:"\u252C",boxhu:"\u2534",boxminus:"\u229F",minusb:"\u229F",boxplus:"\u229E",plusb:"\u229E",boxtimes:"\u22A0",timesb:"\u22A0",boxuL:"\u255B",boxuR:"\u2558",boxul:"\u2518",boxur:"\u2514",boxv:"\u2502",boxvH:"\u256A",boxvL:"\u2561",boxvR:"\u255E",boxvh:"\u253C",boxvl:"\u2524",boxvr:"\u251C",brvbar:"\xA6",bscr:"\u{1D4B7}",bsemi:"\u204F",bsol:"\\",bsolb:"\u29C5",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bumpE:"\u2AAE",cacute:"\u0107",cap:"\u2229",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",capcup:"\u2A47",capdot:"\u2A40",caps:"\u2229\uFE00",caret:"\u2041",ccaps:"\u2A4D",ccaron:"\u010D",ccedil:"\xE7",ccirc:"\u0109",ccups:"\u2A4C",ccupssm:"\u2A50",cdot:"\u010B",cemptyv:"\u29B2",cent:"\xA2",cfr:"\u{1D520}",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",chi:"\u03C7",cir:"\u25CB",cirE:"\u29C3",circ:"\u02C6",circeq:"\u2257",cire:"\u2257",circlearrowleft:"\u21BA",olarr:"\u21BA",circlearrowright:"\u21BB",orarr:"\u21BB",circledS:"\u24C8",oS:"\u24C8",circledast:"\u229B",oast:"\u229B",circledcirc:"\u229A",ocir:"\u229A",circleddash:"\u229D",odash:"\u229D",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",clubs:"\u2663",clubsuit:"\u2663",colon:":",comma:",",commat:"@",comp:"\u2201",complement:"\u2201",congdot:"\u2A6D",copf:"\u{1D554}",copysr:"\u2117",crarr:"\u21B5",cross:"\u2717",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",curlyeqprec:"\u22DE",cuesc:"\u22DF",curlyeqsucc:"\u22DF",cularr:"\u21B6",curvearrowleft:"\u21B6",cularrp:"\u293D",cup:"\u222A",cupbrcap:"\u2A48",cupcap:"\u2A46",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curvearrowright:"\u21B7",curarrm:"\u293C",curlyvee:"\u22CE",cuvee:"\u22CE",curlywedge:"\u22CF",cuwed:"\u22CF",curren:"\xA4",cwint:"\u2231",cylcty:"\u232D",dHar:"\u2965",dagger:"\u2020",daleth:"\u2138",dash:"\u2010",hyphen:"\u2010",dbkarow:"\u290F",rBarr:"\u290F",dcaron:"\u010F",dcy:"\u0434",ddarr:"\u21CA",downdownarrows:"\u21CA",ddotseq:"\u2A77",eDDot:"\u2A77",deg:"\xB0",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",dfr:"\u{1D521}",diamondsuit:"\u2666",diams:"\u2666",digamma:"\u03DD",gammad:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",djcy:"\u0452",dlcorn:"\u231E",llcorner:"\u231E",dlcrop:"\u230D",dollar:"$",dopf:"\u{1D555}",doteqdot:"\u2251",eDot:"\u2251",dotminus:"\u2238",minusd:"\u2238",dotplus:"\u2214",plusdo:"\u2214",dotsquare:"\u22A1",sdotb:"\u22A1",drcorn:"\u231F",lrcorner:"\u231F",drcrop:"\u230C",dscr:"\u{1D4B9}",dscy:"\u0455",dsol:"\u29F6",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",triangledown:"\u25BF",dwangle:"\u29A6",dzcy:"\u045F",dzigrarr:"\u27FF",eacute:"\xE9",easter:"\u2A6E",ecaron:"\u011B",ecir:"\u2256",eqcirc:"\u2256",ecirc:"\xEA",ecolon:"\u2255",eqcolon:"\u2255",ecy:"\u044D",edot:"\u0117",efDot:"\u2252",fallingdotseq:"\u2252",efr:"\u{1D522}",eg:"\u2A9A",egrave:"\xE8",egs:"\u2A96",eqslantgtr:"\u2A96",egsdot:"\u2A98",el:"\u2A99",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",eqslantless:"\u2A95",elsdot:"\u2A97",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",emptyv:"\u2205",varnothing:"\u2205",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",eng:"\u014B",ensp:"\u2002",eogon:"\u0119",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",epsilon:"\u03B5",epsiv:"\u03F5",straightepsilon:"\u03F5",varepsilon:"\u03F5",equals:"=",equest:"\u225F",questeq:"\u225F",equivDD:"\u2A78",eqvparsl:"\u29E5",erDot:"\u2253",risingdotseq:"\u2253",erarr:"\u2971",escr:"\u212F",eta:"\u03B7",eth:"\xF0",euml:"\xEB",euro:"\u20AC",excl:"!",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",ffr:"\u{1D523}",filig:"\uFB01",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",fopf:"\u{1D557}",fork:"\u22D4",pitchfork:"\u22D4",forkv:"\u2AD9",fpartint:"\u2A0D",frac12:"\xBD",half:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",sfrown:"\u2322",fscr:"\u{1D4BB}",gEl:"\u2A8C",gtreqqless:"\u2A8C",gacute:"\u01F5",gamma:"\u03B3",gap:"\u2A86",gtrapprox:"\u2A86",gbreve:"\u011F",gcirc:"\u011D",gcy:"\u0433",gdot:"\u0121",gescc:"\u2AA9",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",gfr:"\u{1D524}",gimel:"\u2137",gjcy:"\u0453",glE:"\u2A92",gla:"\u2AA5",glj:"\u2AA4",gnE:"\u2269",gneqq:"\u2269",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gneq:"\u2A88",gnsim:"\u22E7",gopf:"\u{1D558}",gscr:"\u210A",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gtdot:"\u22D7",gtrdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrarr:"\u2978",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",hardcy:"\u044A",harrcir:"\u2948",harrw:"\u21AD",leftrightsquigarrow:"\u21AD",hbar:"\u210F",hslash:"\u210F",planck:"\u210F",plankv:"\u210F",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",mldr:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",hksearow:"\u2925",searhk:"\u2925",hkswarow:"\u2926",swarhk:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",larrhk:"\u21A9",hookrightarrow:"\u21AA",rarrhk:"\u21AA",hopf:"\u{1D559}",horbar:"\u2015",hscr:"\u{1D4BD}",hstrok:"\u0127",hybull:"\u2043",iacute:"\xED",icirc:"\xEE",icy:"\u0438",iecy:"\u0435",iexcl:"\xA1",ifr:"\u{1D526}",igrave:"\xEC",iiiint:"\u2A0C",qint:"\u2A0C",iiint:"\u222D",tint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",ijlig:"\u0133",imacr:"\u012B",imath:"\u0131",inodot:"\u0131",imof:"\u22B7",imped:"\u01B5",incare:"\u2105",infin:"\u221E",infintie:"\u29DD",intcal:"\u22BA",intercal:"\u22BA",intlarhk:"\u2A17",intprod:"\u2A3C",iprod:"\u2A3C",iocy:"\u0451",iogon:"\u012F",iopf:"\u{1D55A}",iota:"\u03B9",iquest:"\xBF",iscr:"\u{1D4BE}",isinE:"\u22F9",isindot:"\u22F5",isins:"\u22F4",isinsv:"\u22F3",itilde:"\u0129",iukcy:"\u0456",iuml:"\xEF",jcirc:"\u0135",jcy:"\u0439",jfr:"\u{1D527}",jmath:"\u0237",jopf:"\u{1D55B}",jscr:"\u{1D4BF}",jsercy:"\u0458",jukcy:"\u0454",kappa:"\u03BA",kappav:"\u03F0",varkappa:"\u03F0",kcedil:"\u0137",kcy:"\u043A",kfr:"\u{1D528}",kgreen:"\u0138",khcy:"\u0445",kjcy:"\u045C",kopf:"\u{1D55C}",kscr:"\u{1D4C0}",lAtail:"\u291B",lBarr:"\u290E",lEg:"\u2A8B",lesseqqgtr:"\u2A8B",lHar:"\u2962",lacute:"\u013A",laemptyv:"\u29B4",lambda:"\u03BB",langd:"\u2991",lap:"\u2A85",lessapprox:"\u2A85",laquo:"\xAB",larrbfs:"\u291F",larrfs:"\u291D",larrlp:"\u21AB",looparrowleft:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",leftarrowtail:"\u21A2",lat:"\u2AAB",latail:"\u2919",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lbbrk:"\u2772",lbrace:"{",lcub:"{",lbrack:"[",lsqb:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",lcaron:"\u013E",lcedil:"\u013C",lcy:"\u043B",ldca:"\u2936",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",leq:"\u2264",leftleftarrows:"\u21C7",llarr:"\u21C7",leftthreetimes:"\u22CB",lthree:"\u22CB",lescc:"\u2AA8",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessdot:"\u22D6",ltdot:"\u22D6",lfisht:"\u297C",lfr:"\u{1D529}",lgE:"\u2A91",lharul:"\u296A",lhblk:"\u2584",ljcy:"\u0459",llhard:"\u296B",lltri:"\u25FA",lmidot:"\u0140",lmoust:"\u23B0",lmoustache:"\u23B0",lnE:"\u2268",lneqq:"\u2268",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lneq:"\u2A87",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",longmapsto:"\u27FC",xmap:"\u27FC",looparrowright:"\u21AC",rarrlp:"\u21AC",lopar:"\u2985",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",loz:"\u25CA",lozenge:"\u25CA",lpar:"(",lparlt:"\u2993",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",lsime:"\u2A8D",lsimg:"\u2A8F",lsquor:"\u201A",sbquo:"\u201A",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltrPar:"\u2996",ltri:"\u25C3",triangleleft:"\u25C3",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",mDDot:"\u223A",macr:"\xAF",strns:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",marker:"\u25AE",mcomma:"\u2A29",mcy:"\u043C",mdash:"\u2014",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midcir:"\u2AF0",minus:"\u2212",minusdu:"\u2A2A",mlcp:"\u2ADB",models:"\u22A7",mopf:"\u{1D55E}",mscr:"\u{1D4C2}",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nGg:"\u22D9\u0338",nGt:"\u226B\u20D2",nLeftarrow:"\u21CD",nlArr:"\u21CD",nLeftrightarrow:"\u21CE",nhArr:"\u21CE",nLl:"\u22D8\u0338",nLt:"\u226A\u20D2",nRightarrow:"\u21CF",nrArr:"\u21CF",nVDash:"\u22AF",nVdash:"\u22AE",nacute:"\u0144",nang:"\u2220\u20D2",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",natur:"\u266E",natural:"\u266E",ncap:"\u2A43",ncaron:"\u0148",ncedil:"\u0146",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",ncy:"\u043D",ndash:"\u2013",neArr:"\u21D7",nearhk:"\u2924",nedot:"\u2250\u0338",nesear:"\u2928",toea:"\u2928",nfr:"\u{1D52B}",nharr:"\u21AE",nleftrightarrow:"\u21AE",nhpar:"\u2AF2",nis:"\u22FC",nisd:"\u22FA",njcy:"\u045A",nlE:"\u2266\u0338",nleqq:"\u2266\u0338",nlarr:"\u219A",nleftarrow:"\u219A",nldr:"\u2025",nopf:"\u{1D55F}",not:"\xAC",notinE:"\u22F9\u0338",notindot:"\u22F5\u0338",notinvb:"\u22F7",notinvc:"\u22F6",notnivb:"\u22FE",notnivc:"\u22FD",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",nrarr:"\u219B",nrightarrow:"\u219B",nrarrc:"\u2933\u0338",nrarrw:"\u219D\u0338",nscr:"\u{1D4C3}",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsubseteqq:"\u2AC5\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupseteqq:"\u2AC6\u0338",ntilde:"\xF1",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvDash:"\u22AD",nvHarr:"\u2904",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwArr:"\u21D6",nwarhk:"\u2923",nwnear:"\u2927",oacute:"\xF3",ocirc:"\xF4",ocy:"\u043E",odblac:"\u0151",odiv:"\u2A38",odsold:"\u29BC",oelig:"\u0153",ofcir:"\u29BF",ofr:"\u{1D52C}",ogon:"\u02DB",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",olcir:"\u29BE",olcross:"\u29BB",olt:"\u29C0",omacr:"\u014D",omega:"\u03C9",omicron:"\u03BF",omid:"\u29B6",oopf:"\u{1D560}",opar:"\u29B7",operp:"\u29B9",or:"\u2228",vee:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",oscr:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oslash:"\xF8",osol:"\u2298",otilde:"\xF5",otimesas:"\u2A36",ouml:"\xF6",ovbar:"\u233D",para:"\xB6",parsim:"\u2AF3",parsl:"\u2AFD",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",pertenk:"\u2031",pfr:"\u{1D52D}",phi:"\u03C6",phiv:"\u03D5",straightphi:"\u03D5",varphi:"\u03D5",phone:"\u260E",pi:"\u03C0",piv:"\u03D6",varpi:"\u03D6",planckh:"\u210E",plus:"+",plusacir:"\u2A23",pluscir:"\u2A22",plusdu:"\u2A25",pluse:"\u2A72",plussim:"\u2A26",plustwo:"\u2A27",pointint:"\u2A15",popf:"\u{1D561}",pound:"\xA3",prE:"\u2AB3",prap:"\u2AB7",precapprox:"\u2AB7",precnapprox:"\u2AB9",prnap:"\u2AB9",precneqq:"\u2AB5",prnE:"\u2AB5",precnsim:"\u22E8",prnsim:"\u22E8",prime:"\u2032",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prurel:"\u22B0",pscr:"\u{1D4C5}",psi:"\u03C8",puncsp:"\u2008",qfr:"\u{1D52E}",qopf:"\u{1D562}",qprime:"\u2057",qscr:"\u{1D4C6}",quatint:"\u2A16",quest:"?",rAtail:"\u291C",rHar:"\u2964",race:"\u223D\u0331",racute:"\u0155",raemptyv:"\u29B3",rangd:"\u2992",range:"\u29A5",raquo:"\xBB",rarrap:"\u2975",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291E",rarrpl:"\u2945",rarrsim:"\u2974",rarrtl:"\u21A3",rightarrowtail:"\u21A3",rarrw:"\u219D",rightsquigarrow:"\u219D",ratail:"\u291A",ratio:"\u2236",rbbrk:"\u2773",rbrace:"}",rcub:"}",rbrack:"]",rsqb:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",rcaron:"\u0159",rcedil:"\u0157",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdsh:"\u21B3",rect:"\u25AD",rfisht:"\u297D",rfr:"\u{1D52F}",rharul:"\u296C",rho:"\u03C1",rhov:"\u03F1",varrho:"\u03F1",rightrightarrows:"\u21C9",rrarr:"\u21C9",rightthreetimes:"\u22CC",rthree:"\u22CC",ring:"\u02DA",rlm:"\u200F",rmoust:"\u23B1",rmoustache:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",ropar:"\u2986",ropf:"\u{1D563}",roplus:"\u2A2E",rotimes:"\u2A35",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rsaquo:"\u203A",rscr:"\u{1D4C7}",rtimes:"\u22CA",rtri:"\u25B9",triangleright:"\u25B9",rtriltri:"\u29CE",ruluhar:"\u2968",rx:"\u211E",sacute:"\u015B",scE:"\u2AB4",scap:"\u2AB8",succapprox:"\u2AB8",scaron:"\u0161",scedil:"\u015F",scirc:"\u015D",scnE:"\u2AB6",succneqq:"\u2AB6",scnap:"\u2ABA",succnapprox:"\u2ABA",scnsim:"\u22E9",succnsim:"\u22E9",scpolint:"\u2A13",scy:"\u0441",sdot:"\u22C5",sdote:"\u2A66",seArr:"\u21D8",sect:"\xA7",semi:";",seswar:"\u2929",tosa:"\u2929",sext:"\u2736",sfr:"\u{1D530}",sharp:"\u266F",shchcy:"\u0449",shcy:"\u0448",shy:"\xAD",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",varsigma:"\u03C2",simdot:"\u2A6A",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",smashp:"\u2A33",smeparsl:"\u29E4",smile:"\u2323",ssmile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",softcy:"\u044C",sol:"/",solb:"\u29C4",solbar:"\u233F",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",sqcaps:"\u2293\uFE00",sqcups:"\u2294\uFE00",sscr:"\u{1D4C8}",star:"\u2606",sub:"\u2282",subset:"\u2282",subE:"\u2AC5",subseteqq:"\u2AC5",subdot:"\u2ABD",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subsetneqq:"\u2ACB",subne:"\u228A",subsetneq:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",supE:"\u2AC6",supseteqq:"\u2AC6",supdot:"\u2ABE",supdsub:"\u2AD8",supedot:"\u2AC4",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supsetneqq:"\u2ACC",supne:"\u228B",supsetneq:"\u228B",supplus:"\u2AC0",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swArr:"\u21D9",swnwar:"\u292A",szlig:"\xDF",target:"\u2316",tau:"\u03C4",tcaron:"\u0165",tcedil:"\u0163",tcy:"\u0442",telrec:"\u2315",tfr:"\u{1D531}",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",vartheta:"\u03D1",thorn:"\xFE",times:"\xD7",timesbar:"\u2A31",timesd:"\u2A30",topbot:"\u2336",topcir:"\u2AF1",topf:"\u{1D565}",topfork:"\u2ADA",tprime:"\u2034",triangle:"\u25B5",utri:"\u25B5",triangleq:"\u225C",trie:"\u225C",tridot:"\u25EC",triminus:"\u2A3A",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",tscr:"\u{1D4C9}",tscy:"\u0446",tshcy:"\u045B",tstrok:"\u0167",uHar:"\u2963",uacute:"\xFA",ubrcy:"\u045E",ubreve:"\u016D",ucirc:"\xFB",ucy:"\u0443",udblac:"\u0171",ufisht:"\u297E",ufr:"\u{1D532}",ugrave:"\xF9",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",umacr:"\u016B",uogon:"\u0173",uopf:"\u{1D566}",upsi:"\u03C5",upsilon:"\u03C5",upuparrows:"\u21C8",uuarr:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",uring:"\u016F",urtri:"\u25F9",uscr:"\u{1D4CA}",utdot:"\u22F0",utilde:"\u0169",uuml:"\xFC",uwangle:"\u29A7",vBar:"\u2AE8",vBarv:"\u2AE9",vangrt:"\u299C",varsubsetneq:"\u228A\uFE00",vsubne:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",vsubnE:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",vsupne:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vsupnE:"\u2ACC\uFE00",vcy:"\u0432",veebar:"\u22BB",veeeq:"\u225A",vellip:"\u22EE",vfr:"\u{1D533}",vopf:"\u{1D567}",vscr:"\u{1D4CB}",vzigzag:"\u299A",wcirc:"\u0175",wedbar:"\u2A5F",wedgeq:"\u2259",weierp:"\u2118",wp:"\u2118",wfr:"\u{1D534}",wopf:"\u{1D568}",wscr:"\u{1D4CC}",xfr:"\u{1D535}",xi:"\u03BE",xnis:"\u22FB",xopf:"\u{1D569}",xscr:"\u{1D4CD}",yacute:"\xFD",yacy:"\u044F",ycirc:"\u0177",ycy:"\u044B",yen:"\xA5",yfr:"\u{1D536}",yicy:"\u0457",yopf:"\u{1D56A}",yscr:"\u{1D4CE}",yucy:"\u044E",yuml:"\xFF",zacute:"\u017A",zcaron:"\u017E",zcy:"\u0437",zdot:"\u017C",zeta:"\u03B6",zfr:"\u{1D537}",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"},cm="\uE500";to.ngsp=cm;var um=[/@/,/^\s*$/,/[<>]/,/^[{}]$/,/&(#|[a-z])/i,/^\/\//];function dm(r,a){if(a!=null&&!(Array.isArray(a)&&a.length==2))throw new Error(`Expected '${r}' to be an array, [start, end].`);if(a!=null){let s=a[0],c=a[1];um.forEach(d=>{if(d.test(s)||d.test(c))throw new Error(`['${s}', '${c}'] contains unusable interpolation symbol.`)})}}var pm=class Od{static fromArray(a){return a?(dm("interpolation",a),new Od(a[0],a[1])):Gl}constructor(a,s){this.start=a,this.end=s}},Gl=new pm("{{","}}"),Da=class extends kl{constructor(r,a,s){super(s,r),this.tokenType=a}},hm=class{constructor(r,a,s){this.tokens=r,this.errors=a,this.nonNormalizedIcuExpressions=s}};function fm(r,a,s,c={}){let d=new bm(new Al(r,a),s,c);return d.tokenize(),new hm(Sm(d.tokens),d.errors,d.nonNormalizedIcuExpressions)}var mm=/\r\n?/g;function ai(r){return`Unexpected character "${r===0?"EOF":String.fromCharCode(r)}"`}function Kl(r){return`Unknown entity "${r}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`}function gm(r,a){return`Unable to parse entity "${a}" - ${r} character reference entities must end with ";"`}var no;(function(r){r.HEX="hexadecimal",r.DEC="decimal"})(no||(no={}));var xa=class{constructor(r){this.error=r}},bm=class{constructor(r,a,s){this._getTagContentType=a,this._currentTokenStart=null,this._currentTokenType=null,this._expansionCaseStack=[],this._inInterpolation=!1,this._fullNameStack=[],this.tokens=[],this.errors=[],this.nonNormalizedIcuExpressions=[],this._tokenizeIcu=s.tokenizeExpansionForms||!1,this._interpolationConfig=s.interpolationConfig||Gl,this._leadingTriviaCodePoints=s.leadingTriviaChars&&s.leadingTriviaChars.map(d=>d.codePointAt(0)||0),this._canSelfClose=s.canSelfClose||!1,this._allowHtmComponentClosingTags=s.allowHtmComponentClosingTags||!1;let c=s.range||{endPos:r.content.length,startPos:0,startLine:0,startCol:0};this._cursor=s.escapedString?new Dm(r,c):new Jl(r,c),this._preserveLineEndings=s.preserveLineEndings||!1,this._i18nNormalizeLineEndingsInICUs=s.i18nNormalizeLineEndingsInICUs||!1,this._tokenizeBlocks=s.tokenizeBlocks??!0,this._tokenizeLet=s.tokenizeLet??!0;try{this._cursor.init()}catch(d){this.handleError(d)}}_processCarriageReturns(r){return this._preserveLineEndings?r:r.replace(mm,`
`)}tokenize(){for(;this._cursor.peek()!==0;){let r=this._cursor.clone();try{if(this._attemptCharCode(60))if(this._attemptCharCode(33))this._attemptStr("[CDATA[")?this._consumeCdata(r):this._attemptStr("--")?this._consumeComment(r):this._attemptStrCaseInsensitive("doctype")?this._consumeDocType(r):this._consumeBogusComment(r);else if(this._attemptCharCode(47))this._consumeTagClose(r);else{let a=this._cursor.clone();this._attemptCharCode(63)?(this._cursor=a,this._consumeBogusComment(r)):this._consumeTagOpen(r)}else this._tokenizeLet&&this._cursor.peek()===64&&!this._inInterpolation&&this._attemptStr("@let")?this._consumeLetDeclaration(r):this._tokenizeBlocks&&this._attemptCharCode(64)?this._consumeBlockStart(r):this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansionCase()&&!this._isInExpansionForm()&&this._attemptCharCode(125)?this._consumeBlockEnd(r):this._tokenizeIcu&&this._tokenizeExpansionForm()||this._consumeWithInterpolation(5,8,()=>this._isTextEnd(),()=>this._isTagStart())}catch(a){this.handleError(a)}}this._beginToken(34),this._endToken([])}_getBlockName(){let r=!1,a=this._cursor.clone();return this._attemptCharCodeUntilFn(s=>Gr(s)?!r:Ql(s)?(r=!0,!1):!0),this._cursor.getChars(a).trim()}_consumeBlockStart(r){this._beginToken(25,r);let a=this._endToken([this._getBlockName()]);if(this._cursor.peek()===40)if(this._cursor.advance(),this._consumeBlockParameters(),this._attemptCharCodeUntilFn(Be),this._attemptCharCode(41))this._attemptCharCodeUntilFn(Be);else{a.type=29;return}this._attemptCharCode(123)?(this._beginToken(26),this._endToken([])):a.type=29}_consumeBlockEnd(r){this._beginToken(27,r),this._endToken([])}_consumeBlockParameters(){for(this._attemptCharCodeUntilFn(Xl);this._cursor.peek()!==41&&this._cursor.peek()!==0;){this._beginToken(28);let r=this._cursor.clone(),a=null,s=0;for(;this._cursor.peek()!==59&&this._cursor.peek()!==0||a!==null;){let c=this._cursor.peek();if(c===92)this._cursor.advance();else if(c===a)a=null;else if(a===null&&Ca(c))a=c;else if(c===40&&a===null)s++;else if(c===41&&a===null){if(s===0)break;s>0&&s--}this._cursor.advance()}this._endToken([this._cursor.getChars(r)]),this._attemptCharCodeUntilFn(Xl)}}_consumeLetDeclaration(r){if(this._beginToken(30,r),Gr(this._cursor.peek()))this._attemptCharCodeUntilFn(Be);else{let s=this._endToken([this._cursor.getChars(r)]);s.type=33;return}let a=this._endToken([this._getLetDeclarationName()]);if(this._attemptCharCodeUntilFn(Be),!this._attemptCharCode(61)){a.type=33;return}this._attemptCharCodeUntilFn(s=>Be(s)&&!_a(s)),this._consumeLetDeclarationValue(),this._cursor.peek()===59?(this._beginToken(32),this._endToken([]),this._cursor.advance()):(a.type=33,a.sourceSpan=this._cursor.getSpan(r))}_getLetDeclarationName(){let r=this._cursor.clone(),a=!1;return this._attemptCharCodeUntilFn(s=>Kr(s)||s===36||s===95||a&&va(s)?(a=!0,!1):!0),this._cursor.getChars(r).trim()}_consumeLetDeclarationValue(){let r=this._cursor.clone();for(this._beginToken(31,r);this._cursor.peek()!==0;){let a=this._cursor.peek();if(a===59)break;Ca(a)&&(this._cursor.advance(),this._attemptCharCodeUntilFn(s=>s===92?(this._cursor.advance(),!1):s===a)),this._cursor.advance()}this._endToken([this._cursor.getChars(r)])}_tokenizeExpansionForm(){if(this.isExpansionFormStart())return this._consumeExpansionFormStart(),!0;if(Cm(this._cursor.peek())&&this._isInExpansionForm())return this._consumeExpansionCaseStart(),!0;if(this._cursor.peek()===125){if(this._isInExpansionCase())return this._consumeExpansionCaseEnd(),!0;if(this._isInExpansionForm())return this._consumeExpansionFormEnd(),!0}return!1}_beginToken(r,a=this._cursor.clone()){this._currentTokenStart=a,this._currentTokenType=r}_endToken(r,a){if(this._currentTokenStart===null)throw new Da("Programming error - attempted to end a token when there was no start to the token",this._currentTokenType,this._cursor.getSpan(a));if(this._currentTokenType===null)throw new Da("Programming error - attempted to end a token which has no token type",null,this._cursor.getSpan(this._currentTokenStart));let s={type:this._currentTokenType,parts:r,sourceSpan:(a??this._cursor).getSpan(this._currentTokenStart,this._leadingTriviaCodePoints)};return this.tokens.push(s),this._currentTokenStart=null,this._currentTokenType=null,s}_createError(r,a){this._isInExpansionForm()&&(r+=` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);let s=new Da(r,this._currentTokenType,a);return this._currentTokenStart=null,this._currentTokenType=null,new xa(s)}handleError(r){if(r instanceof Ea&&(r=this._createError(r.msg,this._cursor.getSpan(r.cursor))),r instanceof xa)this.errors.push(r.error);else throw r}_attemptCharCode(r){return this._cursor.peek()===r?(this._cursor.advance(),!0):!1}_attemptCharCodeCaseInsensitive(r){return wm(this._cursor.peek(),r)?(this._cursor.advance(),!0):!1}_requireCharCode(r){let a=this._cursor.clone();if(!this._attemptCharCode(r))throw this._createError(ai(this._cursor.peek()),this._cursor.getSpan(a))}_attemptStr(r){let a=r.length;if(this._cursor.charsLeft()<a)return!1;let s=this._cursor.clone();for(let c=0;c<a;c++)if(!this._attemptCharCode(r.charCodeAt(c)))return this._cursor=s,!1;return!0}_attemptStrCaseInsensitive(r){for(let a=0;a<r.length;a++)if(!this._attemptCharCodeCaseInsensitive(r.charCodeAt(a)))return!1;return!0}_requireStr(r){let a=this._cursor.clone();if(!this._attemptStr(r))throw this._createError(ai(this._cursor.peek()),this._cursor.getSpan(a))}_requireStrCaseInsensitive(r){let a=this._cursor.clone();if(!this._attemptStrCaseInsensitive(r))throw this._createError(ai(this._cursor.peek()),this._cursor.getSpan(a))}_attemptCharCodeUntilFn(r){for(;!r(this._cursor.peek());)this._cursor.advance()}_requireCharCodeUntilFn(r,a){let s=this._cursor.clone();if(this._attemptCharCodeUntilFn(r),this._cursor.diff(s)<a)throw this._createError(ai(this._cursor.peek()),this._cursor.getSpan(s))}_attemptUntilChar(r){for(;this._cursor.peek()!==r;)this._cursor.advance()}_readChar(){let r=String.fromCodePoint(this._cursor.peek());return this._cursor.advance(),r}_consumeEntity(r){this._beginToken(9);let a=this._cursor.clone();if(this._cursor.advance(),this._attemptCharCode(35)){let s=this._attemptCharCode(120)||this._attemptCharCode(88),c=this._cursor.clone();if(this._attemptCharCodeUntilFn(vm),this._cursor.peek()!=59){this._cursor.advance();let p=s?no.HEX:no.DEC;throw this._createError(gm(p,this._cursor.getChars(a)),this._cursor.getSpan())}let d=this._cursor.getChars(c);this._cursor.advance();try{let p=parseInt(d,s?16:10);this._endToken([String.fromCharCode(p),this._cursor.getChars(a)])}catch{throw this._createError(Kl(this._cursor.getChars(a)),this._cursor.getSpan())}}else{let s=this._cursor.clone();if(this._attemptCharCodeUntilFn(_m),this._cursor.peek()!=59)this._beginToken(r,a),this._cursor=s,this._endToken(["&"]);else{let c=this._cursor.getChars(s);this._cursor.advance();let d=to[c];if(!d)throw this._createError(Kl(c),this._cursor.getSpan(a));this._endToken([d,`&${c};`])}}}_consumeRawText(r,a){this._beginToken(r?6:7);let s=[];for(;;){let c=this._cursor.clone(),d=a();if(this._cursor=c,d)break;r&&this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(s.join(""))]),s.length=0,this._consumeEntity(6),this._beginToken(6)):s.push(this._readChar())}this._endToken([this._processCarriageReturns(s.join(""))])}_consumeComment(r){this._beginToken(10,r),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("-->")),this._beginToken(11),this._requireStr("-->"),this._endToken([])}_consumeBogusComment(r){this._beginToken(10,r),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(11),this._cursor.advance(),this._endToken([])}_consumeCdata(r){this._beginToken(12,r),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("]]>")),this._beginToken(13),this._requireStr("]]>"),this._endToken([])}_consumeDocType(r){this._beginToken(18,r),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(19),this._cursor.advance(),this._endToken([])}_consumePrefixAndName(){let r=this._cursor.clone(),a="";for(;this._cursor.peek()!==58&&!ym(this._cursor.peek());)this._cursor.advance();let s;this._cursor.peek()===58?(a=this._cursor.getChars(r),this._cursor.advance(),s=this._cursor.clone()):s=r,this._requireCharCodeUntilFn(Yl,a===""?0:1);let c=this._cursor.getChars(s);return[a,c]}_consumeTagOpen(r){let a,s,c,d=[];try{if(!Kr(this._cursor.peek()))throw this._createError(ai(this._cursor.peek()),this._cursor.getSpan(r));for(c=this._consumeTagOpenStart(r),s=c.parts[0],a=c.parts[1],this._attemptCharCodeUntilFn(Be);this._cursor.peek()!==47&&this._cursor.peek()!==62&&this._cursor.peek()!==60&&this._cursor.peek()!==0;){let[m,_]=this._consumeAttributeName();if(this._attemptCharCodeUntilFn(Be),this._attemptCharCode(61)){this._attemptCharCodeUntilFn(Be);let A=this._consumeAttributeValue();d.push({prefix:m,name:_,value:A})}else d.push({prefix:m,name:_});this._attemptCharCodeUntilFn(Be)}this._consumeTagOpenEnd()}catch(m){if(m instanceof xa){c?c.type=4:(this._beginToken(5,r),this._endToken(["<"]));return}throw m}if(this._canSelfClose&&this.tokens[this.tokens.length-1].type===2)return;let p=this._getTagContentType(a,s,this._fullNameStack.length>0,d);this._handleFullNameStackForTagOpen(s,a),p===At.RAW_TEXT?this._consumeRawTextWithTagClose(s,a,!1):p===At.ESCAPABLE_RAW_TEXT&&this._consumeRawTextWithTagClose(s,a,!0)}_consumeRawTextWithTagClose(r,a,s){this._consumeRawText(s,()=>!this._attemptCharCode(60)||!this._attemptCharCode(47)||(this._attemptCharCodeUntilFn(Be),!this._attemptStrCaseInsensitive(r?`${r}:${a}`:a))?!1:(this._attemptCharCodeUntilFn(Be),this._attemptCharCode(62))),this._beginToken(3),this._requireCharCodeUntilFn(c=>c===62,3),this._cursor.advance(),this._endToken([r,a]),this._handleFullNameStackForTagClose(r,a)}_consumeTagOpenStart(r){this._beginToken(0,r);let a=this._consumePrefixAndName();return this._endToken(a)}_consumeAttributeName(){let r=this._cursor.peek();if(r===39||r===34)throw this._createError(ai(r),this._cursor.getSpan());this._beginToken(14);let a=this._consumePrefixAndName();return this._endToken(a),a}_consumeAttributeValue(){let r;if(this._cursor.peek()===39||this._cursor.peek()===34){let a=this._cursor.peek();this._consumeQuote(a);let s=()=>this._cursor.peek()===a;r=this._consumeWithInterpolation(16,17,s,s),this._consumeQuote(a)}else{let a=()=>Yl(this._cursor.peek());r=this._consumeWithInterpolation(16,17,a,a)}return r}_consumeQuote(r){this._beginToken(15),this._requireCharCode(r),this._endToken([String.fromCodePoint(r)])}_consumeTagOpenEnd(){let r=this._attemptCharCode(47)?2:1;this._beginToken(r),this._requireCharCode(62),this._endToken([])}_consumeTagClose(r){if(this._beginToken(3,r),this._attemptCharCodeUntilFn(Be),this._allowHtmComponentClosingTags&&this._attemptCharCode(47))this._attemptCharCodeUntilFn(Be),this._requireCharCode(62),this._endToken([]);else{let[a,s]=this._consumePrefixAndName();this._attemptCharCodeUntilFn(Be),this._requireCharCode(62),this._endToken([a,s]),this._handleFullNameStackForTagClose(a,s)}}_consumeExpansionFormStart(){this._beginToken(20),this._requireCharCode(123),this._endToken([]),this._expansionCaseStack.push(20),this._beginToken(7);let r=this._readUntil(44),a=this._processCarriageReturns(r);if(this._i18nNormalizeLineEndingsInICUs)this._endToken([a]);else{let c=this._endToken([r]);a!==r&&this.nonNormalizedIcuExpressions.push(c)}this._requireCharCode(44),this._attemptCharCodeUntilFn(Be),this._beginToken(7);let s=this._readUntil(44);this._endToken([s]),this._requireCharCode(44),this._attemptCharCodeUntilFn(Be)}_consumeExpansionCaseStart(){this._beginToken(21);let r=this._readUntil(123).trim();this._endToken([r]),this._attemptCharCodeUntilFn(Be),this._beginToken(22),this._requireCharCode(123),this._endToken([]),this._attemptCharCodeUntilFn(Be),this._expansionCaseStack.push(22)}_consumeExpansionCaseEnd(){this._beginToken(23),this._requireCharCode(125),this._endToken([]),this._attemptCharCodeUntilFn(Be),this._expansionCaseStack.pop()}_consumeExpansionFormEnd(){this._beginToken(24),this._requireCharCode(125),this._endToken([]),this._expansionCaseStack.pop()}_consumeWithInterpolation(r,a,s,c){this._beginToken(r);let d=[];for(;!s();){let m=this._cursor.clone();this._interpolationConfig&&this._attemptStr(this._interpolationConfig.start)?(this._endToken([this._processCarriageReturns(d.join(""))],m),d.length=0,this._consumeInterpolation(a,m,c),this._beginToken(r)):this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(d.join(""))]),d.length=0,this._consumeEntity(r),this._beginToken(r)):d.push(this._readChar())}this._inInterpolation=!1;let p=this._processCarriageReturns(d.join(""));return this._endToken([p]),p}_consumeInterpolation(r,a,s){let c=[];this._beginToken(r,a),c.push(this._interpolationConfig.start);let d=this._cursor.clone(),p=null,m=!1;for(;this._cursor.peek()!==0&&(s===null||!s());){let _=this._cursor.clone();if(this._isTagStart()){this._cursor=_,c.push(this._getProcessedChars(d,_)),this._endToken(c);return}if(p===null)if(this._attemptStr(this._interpolationConfig.end)){c.push(this._getProcessedChars(d,_)),c.push(this._interpolationConfig.end),this._endToken(c);return}else this._attemptStr("//")&&(m=!0);let A=this._cursor.peek();this._cursor.advance(),A===92?this._cursor.advance():A===p?p=null:!m&&p===null&&Ca(A)&&(p=A)}c.push(this._getProcessedChars(d,this._cursor)),this._endToken(c)}_getProcessedChars(r,a){return this._processCarriageReturns(a.getChars(r))}_isTextEnd(){return!!(this._isTagStart()||this._cursor.peek()===0||this._tokenizeIcu&&!this._inInterpolation&&(this.isExpansionFormStart()||this._cursor.peek()===125&&this._isInExpansionCase())||this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansion()&&(this._isBlockStart()||this._cursor.peek()===64||this._cursor.peek()===125))}_isTagStart(){if(this._cursor.peek()===60){let r=this._cursor.clone();r.advance();let a=r.peek();if(97<=a&&a<=122||65<=a&&a<=90||a===47||a===33)return!0}return!1}_isBlockStart(){if(this._tokenizeBlocks&&this._cursor.peek()===64){let r=this._cursor.clone();if(r.advance(),Ql(r.peek()))return!0}return!1}_readUntil(r){let a=this._cursor.clone();return this._attemptUntilChar(r),this._cursor.getChars(a)}_isInExpansion(){return this._isInExpansionCase()||this._isInExpansionForm()}_isInExpansionCase(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===22}_isInExpansionForm(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===20}isExpansionFormStart(){if(this._cursor.peek()!==123)return!1;if(this._interpolationConfig){let r=this._cursor.clone(),a=this._attemptStr(this._interpolationConfig.start);return this._cursor=r,!a}return!0}_handleFullNameStackForTagOpen(r,a){let s=Xr(r,a);(this._fullNameStack.length===0||this._fullNameStack[this._fullNameStack.length-1]===s)&&this._fullNameStack.push(s)}_handleFullNameStackForTagClose(r,a){let s=Xr(r,a);this._fullNameStack.length!==0&&this._fullNameStack[this._fullNameStack.length-1]===s&&this._fullNameStack.pop()}};function Be(r){return!Gr(r)||r===0}function Yl(r){return Gr(r)||r===62||r===60||r===47||r===39||r===34||r===61||r===0}function ym(r){return(r<97||122<r)&&(r<65||90<r)&&(r<48||r>57)}function vm(r){return r===59||r===0||!Sf(r)}function _m(r){return r===59||r===0||!Kr(r)}function Cm(r){return r!==125}function wm(r,a){return Zl(r)===Zl(a)}function Zl(r){return r>=97&&r<=122?r-97+65:r}function Ql(r){return Kr(r)||va(r)||r===95}function Xl(r){return r!==59&&Be(r)}function Sm(r){let a=[],s;for(let c=0;c<r.length;c++){let d=r[c];s&&s.type===5&&d.type===5||s&&s.type===16&&d.type===16?(s.parts[0]+=d.parts[0],s.sourceSpan.end=d.sourceSpan.end):(s=d,a.push(s))}return a}var Jl=class Bs{constructor(a,s){if(a instanceof Bs){this.file=a.file,this.input=a.input,this.end=a.end;let c=a.state;this.state={peek:c.peek,offset:c.offset,line:c.line,column:c.column}}else{if(!s)throw new Error("Programming error: the range argument must be provided with a file argument.");this.file=a,this.input=a.content,this.end=s.endPos,this.state={peek:-1,offset:s.startPos,line:s.startLine,column:s.startCol}}}clone(){return new Bs(this)}peek(){return this.state.peek}charsLeft(){return this.end-this.state.offset}diff(a){return this.state.offset-a.state.offset}advance(){this.advanceState(this.state)}init(){this.updatePeek(this.state)}getSpan(a,s){a=a||this;let c=a;if(s)for(;this.diff(a)>0&&s.indexOf(a.peek())!==-1;)c===a&&(a=a.clone()),a.advance();let d=this.locationFromCursor(a),p=this.locationFromCursor(this),m=c!==a?this.locationFromCursor(c):d;return new re(d,p,m)}getChars(a){return this.input.substring(a.state.offset,this.state.offset)}charAt(a){return this.input.charCodeAt(a)}advanceState(a){if(a.offset>=this.end)throw this.state=a,new Ea('Unexpected character "EOF"',this);let s=this.charAt(a.offset);s===10?(a.line++,a.column=0):_a(s)||a.column++,a.offset++,this.updatePeek(a)}updatePeek(a){a.peek=a.offset>=this.end?0:this.charAt(a.offset)}locationFromCursor(a){return new wa(a.file,a.state.offset,a.state.line,a.state.column)}},Dm=class Ps extends Jl{constructor(a,s){a instanceof Ps?(super(a),this.internalState=U({},a.internalState)):(super(a,s),this.internalState=this.state)}advance(){this.state=this.internalState,super.advance(),this.processEscapeSequence()}init(){super.init(),this.processEscapeSequence()}clone(){return new Ps(this)}getChars(a){let s=a.clone(),c="";for(;s.internalState.offset<this.internalState.offset;)c+=String.fromCodePoint(s.peek()),s.advance();return c}processEscapeSequence(){let a=()=>this.internalState.peek;if(a()===92)if(this.internalState=U({},this.state),this.advanceState(this.internalState),a()===110)this.state.peek=10;else if(a()===114)this.state.peek=13;else if(a()===118)this.state.peek=11;else if(a()===116)this.state.peek=9;else if(a()===98)this.state.peek=8;else if(a()===102)this.state.peek=12;else if(a()===117)if(this.advanceState(this.internalState),a()===123){this.advanceState(this.internalState);let s=this.clone(),c=0;for(;a()!==125;)this.advanceState(this.internalState),c++;this.state.peek=this.decodeHexDigits(s,c)}else{let s=this.clone();this.advanceState(this.internalState),this.advanceState(this.internalState),this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(s,4)}else if(a()===120){this.advanceState(this.internalState);let s=this.clone();this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(s,2)}else if(Tl(a())){let s="",c=0,d=this.clone();for(;Tl(a())&&c<3;)d=this.clone(),s+=String.fromCodePoint(a()),this.advanceState(this.internalState),c++;this.state.peek=parseInt(s,8),this.internalState=d.internalState}else _a(this.internalState.peek)?(this.advanceState(this.internalState),this.state=this.internalState):this.state.peek=this.internalState.peek}decodeHexDigits(a,s){let c=this.input.slice(a.internalState.offset,a.internalState.offset+s),d=parseInt(c,16);if(isNaN(d))throw a.state=a.internalState,new Ea("Invalid hexadecimal escape sequence",a);return d}},Ea=class{constructor(r,a){this.msg=r,this.cursor=a}},Je=class Bd extends kl{static create(a,s,c){return new Bd(a,s,c)}constructor(a,s,c){super(s,c),this.elementName=a}},xm=class{constructor(r,a){this.rootNodes=r,this.errors=a}},Em=class{constructor(r){this.getTagDefinition=r}parse(r,a,s,c=!1,d){let p=le=>(Ee,...Ue)=>le(Ee.toLowerCase(),...Ue),m=c?this.getTagDefinition:p(this.getTagDefinition),_=le=>m(le).getContentType(),A=c?d:p(d),N=fm(r,a,d?(le,Ee,Ue,qe)=>{let Qe=A(le,Ee,Ue,qe);return Qe!==void 0?Qe:_(le)}:_,s),R=s&&s.canSelfClose||!1,de=s&&s.allowHtmComponentClosingTags||!1,te=new Tm(N.tokens,m,R,de,c);return te.build(),new xm(te.rootNodes,N.errors.concat(te.errors))}},Tm=class Pd{constructor(a,s,c,d,p){this.tokens=a,this.getTagDefinition=s,this.canSelfClose=c,this.allowHtmComponentClosingTags=d,this.isTagNameCaseSensitive=p,this._index=-1,this._containerStack=[],this.rootNodes=[],this.errors=[],this._advance()}build(){for(;this._peek.type!==34;)this._peek.type===0||this._peek.type===4?this._consumeStartTag(this._advance()):this._peek.type===3?(this._closeVoidElement(),this._consumeEndTag(this._advance())):this._peek.type===12?(this._closeVoidElement(),this._consumeCdata(this._advance())):this._peek.type===10?(this._closeVoidElement(),this._consumeComment(this._advance())):this._peek.type===5||this._peek.type===7||this._peek.type===6?(this._closeVoidElement(),this._consumeText(this._advance())):this._peek.type===20?this._consumeExpansion(this._advance()):this._peek.type===25?(this._closeVoidElement(),this._consumeBlockOpen(this._advance())):this._peek.type===27?(this._closeVoidElement(),this._consumeBlockClose(this._advance())):this._peek.type===29?(this._closeVoidElement(),this._consumeIncompleteBlock(this._advance())):this._peek.type===30?(this._closeVoidElement(),this._consumeLet(this._advance())):this._peek.type===18?this._consumeDocType(this._advance()):this._peek.type===33?(this._closeVoidElement(),this._consumeIncompleteLet(this._advance())):this._advance();for(let a of this._containerStack)a instanceof oi&&this.errors.push(Je.create(a.name,a.sourceSpan,`Unclosed block "${a.name}"`))}_advance(){let a=this._peek;return this._index<this.tokens.length-1&&this._index++,this._peek=this.tokens[this._index],a}_advanceIf(a){return this._peek.type===a?this._advance():null}_consumeCdata(a){let s=this._advance(),c=this._getText(s),d=this._advanceIf(13);this._addToParent(new nm(c,new re(a.sourceSpan.start,(d||s).sourceSpan.end),[s]))}_consumeComment(a){let s=this._advanceIf(7),c=this._advanceIf(11),d=s!=null?s.parts[0].trim():null,p=c==null?a.sourceSpan:new re(a.sourceSpan.start,c.sourceSpan.end,a.sourceSpan.fullStart);this._addToParent(new am(d,p))}_consumeDocType(a){let s=this._advanceIf(7),c=this._advanceIf(19),d=s!=null?s.parts[0].trim():null,p=new re(a.sourceSpan.start,(c||s||a).sourceSpan.end);this._addToParent(new sm(d,p))}_consumeExpansion(a){let s=this._advance(),c=this._advance(),d=[];for(;this._peek.type===21;){let m=this._parseExpansionCase();if(!m)return;d.push(m)}if(this._peek.type!==24){this.errors.push(Je.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '}'."));return}let p=new re(a.sourceSpan.start,this._peek.sourceSpan.end,a.sourceSpan.fullStart);this._addToParent(new im(s.parts[0],c.parts[0],d,p,s.sourceSpan)),this._advance()}_parseExpansionCase(){let a=this._advance();if(this._peek.type!==22)return this.errors.push(Je.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '{'.")),null;let s=this._advance(),c=this._collectExpansionExpTokens(s);if(!c)return null;let d=this._advance();c.push({type:34,parts:[],sourceSpan:d.sourceSpan});let p=new Pd(c,this.getTagDefinition,this.canSelfClose,this.allowHtmComponentClosingTags,this.isTagNameCaseSensitive);if(p.build(),p.errors.length>0)return this.errors=this.errors.concat(p.errors),null;let m=new re(a.sourceSpan.start,d.sourceSpan.end,a.sourceSpan.fullStart),_=new re(s.sourceSpan.start,d.sourceSpan.end,s.sourceSpan.fullStart);return new rm(a.parts[0],p.rootNodes,m,a.sourceSpan,_)}_collectExpansionExpTokens(a){let s=[],c=[22];for(;;){if((this._peek.type===20||this._peek.type===22)&&c.push(this._peek.type),this._peek.type===23)if(ec(c,22)){if(c.pop(),c.length===0)return s}else return this.errors.push(Je.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===24)if(ec(c,20))c.pop();else return this.errors.push(Je.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===34)return this.errors.push(Je.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;s.push(this._advance())}}_getText(a){let s=a.parts[0];if(s.length>0&&s[0]==`
`){let c=this._getClosestParentElement();c!=null&&c.children.length==0&&this.getTagDefinition(c.name).ignoreFirstLf&&(s=s.substring(1))}return s}_consumeText(a){let s=[a],c=a.sourceSpan,d=a.parts[0];if(d.length>0&&d[0]===`
`){let p=this._getContainer();p!=null&&p.children.length===0&&this.getTagDefinition(p.name).ignoreFirstLf&&(d=d.substring(1),s[0]={type:a.type,sourceSpan:a.sourceSpan,parts:[d]})}for(;this._peek.type===8||this._peek.type===5||this._peek.type===9;)a=this._advance(),s.push(a),a.type===8?d+=a.parts.join("").replace(/&([^;]+);/g,tc):a.type===9?d+=a.parts[0]:d+=a.parts.join("");if(d.length>0){let p=a.sourceSpan;this._addToParent(new tm(d,new re(c.start,p.end,c.fullStart,c.details),s))}}_closeVoidElement(){let a=this._getContainer();a instanceof pn&&this.getTagDefinition(a.name).isVoid&&this._containerStack.pop()}_consumeStartTag(a){let[s,c]=a.parts,d=[];for(;this._peek.type===14;)d.push(this._consumeAttr(this._advance()));let p=this._getElementFullName(s,c,this._getClosestParentElement()),m=!1;if(this._peek.type===2){this._advance(),m=!0;let le=this.getTagDefinition(p);this.canSelfClose||le.canSelfClose||Qr(p)!==null||le.isVoid||this.errors.push(Je.create(p,a.sourceSpan,`Only void, custom and foreign elements can be self closed "${a.parts[1]}"`))}else this._peek.type===1&&(this._advance(),m=!1);let _=this._peek.sourceSpan.fullStart,A=new re(a.sourceSpan.start,_,a.sourceSpan.fullStart),N=new re(a.sourceSpan.start,_,a.sourceSpan.fullStart),R=new re(a.sourceSpan.start.moveBy(1),a.sourceSpan.end),de=new pn(p,d,[],A,N,void 0,R),te=this._getContainer();this._pushContainer(de,te instanceof pn&&this.getTagDefinition(te.name).isClosedByChild(de.name)),m?this._popContainer(p,pn,A):a.type===4&&(this._popContainer(p,pn,null),this.errors.push(Je.create(p,A,`Opening tag "${p}" not terminated.`)))}_pushContainer(a,s){s&&this._containerStack.pop(),this._addToParent(a),this._containerStack.push(a)}_consumeEndTag(a){let s=this.allowHtmComponentClosingTags&&a.parts.length===0?null:this._getElementFullName(a.parts[0],a.parts[1],this._getClosestParentElement());if(s&&this.getTagDefinition(s).isVoid)this.errors.push(Je.create(s,a.sourceSpan,`Void elements do not have end tags "${a.parts[1]}"`));else if(!this._popContainer(s,pn,a.sourceSpan)){let c=`Unexpected closing tag "${s}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;this.errors.push(Je.create(s,a.sourceSpan,c))}}_popContainer(a,s,c){let d=!1;for(let p=this._containerStack.length-1;p>=0;p--){let m=this._containerStack[p];if(Qr(m.name)?m.name===a:(a==null||m.name.toLowerCase()===a.toLowerCase())&&m instanceof s)return m.endSourceSpan=c,m.sourceSpan.end=c!==null?c.end:m.sourceSpan.end,this._containerStack.splice(p,this._containerStack.length-p),!d;(m instanceof oi||m instanceof pn&&!this.getTagDefinition(m.name).closedByParent)&&(d=!0)}return!1}_consumeAttr(a){let s=Xr(a.parts[0],a.parts[1]),c=a.sourceSpan.end,d;this._peek.type===15&&(d=this._advance());let p="",m=[],_,A;if(this._peek.type===16)for(_=this._peek.sourceSpan,A=this._peek.sourceSpan.end;this._peek.type===16||this._peek.type===17||this._peek.type===9;){let R=this._advance();m.push(R),R.type===17?p+=R.parts.join("").replace(/&([^;]+);/g,tc):R.type===9?p+=R.parts[0]:p+=R.parts.join(""),A=c=R.sourceSpan.end}this._peek.type===15&&(A=c=this._advance().sourceSpan.end);let N=_&&A&&new re(d?.sourceSpan.start??_.start,A,d?.sourceSpan.fullStart??_.fullStart);return new om(s,p,new re(a.sourceSpan.start,c,a.sourceSpan.fullStart),a.sourceSpan,N,m.length>0?m:void 0,void 0)}_consumeBlockOpen(a){let s=[];for(;this._peek.type===28;){let _=this._advance();s.push(new zl(_.parts[0],_.sourceSpan))}this._peek.type===26&&this._advance();let c=this._peek.sourceSpan.fullStart,d=new re(a.sourceSpan.start,c,a.sourceSpan.fullStart),p=new re(a.sourceSpan.start,c,a.sourceSpan.fullStart),m=new oi(a.parts[0],s,[],d,a.sourceSpan,p);this._pushContainer(m,!1)}_consumeBlockClose(a){this._popContainer(null,oi,a.sourceSpan)||this.errors.push(Je.create(null,a.sourceSpan,'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'))}_consumeIncompleteBlock(a){let s=[];for(;this._peek.type===28;){let _=this._advance();s.push(new zl(_.parts[0],_.sourceSpan))}let c=this._peek.sourceSpan.fullStart,d=new re(a.sourceSpan.start,c,a.sourceSpan.fullStart),p=new re(a.sourceSpan.start,c,a.sourceSpan.fullStart),m=new oi(a.parts[0],s,[],d,a.sourceSpan,p);this._pushContainer(m,!1),this._popContainer(null,oi,null),this.errors.push(Je.create(a.parts[0],d,`Incomplete block "${a.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`))}_consumeLet(a){let s=a.parts[0],c,d;if(this._peek.type!==31){this.errors.push(Je.create(a.parts[0],a.sourceSpan,`Invalid @let declaration "${s}". Declaration must have a value.`));return}else c=this._advance();if(this._peek.type!==32){this.errors.push(Je.create(a.parts[0],a.sourceSpan,`Unterminated @let declaration "${s}". Declaration must be terminated with a semicolon.`));return}else d=this._advance();let p=d.sourceSpan.fullStart,m=new re(a.sourceSpan.start,p,a.sourceSpan.fullStart),_=a.sourceSpan.toString().lastIndexOf(s),A=a.sourceSpan.start.moveBy(_),N=new re(A,a.sourceSpan.end),R=new ql(s,c.parts[0],m,N,c.sourceSpan);this._addToParent(R)}_consumeIncompleteLet(a){let s=a.parts[0]??"",c=s?` "${s}"`:"";if(s.length>0){let d=a.sourceSpan.toString().lastIndexOf(s),p=a.sourceSpan.start.moveBy(d),m=new re(p,a.sourceSpan.end),_=new re(a.sourceSpan.start,a.sourceSpan.start.moveBy(0)),A=new ql(s,"",a.sourceSpan,m,_);this._addToParent(A)}this.errors.push(Je.create(a.parts[0],a.sourceSpan,`Incomplete @let declaration${c}. @let declarations must be written as \`@let <name> = <value>;\``))}_getContainer(){return this._containerStack.length>0?this._containerStack[this._containerStack.length-1]:null}_getClosestParentElement(){for(let a=this._containerStack.length-1;a>-1;a--)if(this._containerStack[a]instanceof pn)return this._containerStack[a];return null}_addToParent(a){let s=this._getContainer();s===null?this.rootNodes.push(a):s.children.push(a)}_getElementFullName(a,s,c){if(a===""&&(a=this.getTagDefinition(s).implicitNamespacePrefix||"",a===""&&c!=null)){let d=Zr(c.name)[1];this.getTagDefinition(d).preventNamespaceInheritance||(a=Qr(c.name))}return Xr(a,s)}};function ec(r,a){return r.length>0&&r[r.length-1]===a}function tc(r,a){return to[a]!==void 0?to[a]||r:/^#x[a-f0-9]+$/i.test(a)?String.fromCodePoint(parseInt(a.slice(2),16)):/^#\d+$/.test(a)?String.fromCodePoint(parseInt(a.slice(1),10)):r}var Am=class extends Em{constructor(){super(Sa)}parse(r,a,s,c=!1,d){return super.parse(r,a,s,c,d)}},Ta=null,km=()=>(Ta||(Ta=new Am),Ta);function nc(r,a={}){let{canSelfClose:s=!1,allowHtmComponentClosingTags:c=!1,isTagNameCaseSensitive:d=!1,getTagContentType:p,tokenizeAngularBlocks:m=!1,tokenizeAngularLetDeclaration:_=!1}=a;return km().parse(r,"angular-html-parser",{tokenizeExpansionForms:m,interpolationConfig:void 0,canSelfClose:s,allowHtmComponentClosingTags:c,tokenizeBlocks:m,tokenizeLet:_},d,p)}function Fm(r,a){let s=new SyntaxError(r+" ("+a.loc.start.line+":"+a.loc.start.column+")");return Object.assign(s,a)}var Im=Fm,Xi=3;function Mm(r){let a=r.slice(0,Xi);if(a!=="---"&&a!=="+++")return;let s=r.indexOf(`
`,Xi);if(s===-1)return;let c=r.slice(Xi,s).trim(),d=r.indexOf(`
${a}`,s),p=c;if(p||(p=a==="+++"?"toml":"yaml"),d===-1&&a==="---"&&p==="yaml"&&(d=r.indexOf(`
...`,s)),d===-1)return;let m=d+1+Xi,_=r.charAt(m+1);if(!/\s?/u.test(_))return;let A=r.slice(0,m);return{type:"front-matter",language:p,explicitLanguage:c,value:r.slice(s+1,d),startDelimiter:a,endDelimiter:A.slice(-Xi),raw:A}}function Lm(r){let a=Mm(r);if(!a)return{content:r};let{raw:s}=a;return{frontMatter:a,content:P(!1,s,/[^\n]/gu," ")+r.slice(s.length)}}var Rm=Lm,io={attrs:!0,children:!0,cases:!0,expression:!0},ic=new Set(["parent"]),si,Aa,ka,Om=class Fr{constructor(a={}){w(this,si),y(this,"type"),y(this,"parent");for(let s of new Set([...ic,...Object.keys(a)]))this.setProperty(s,a[s])}setProperty(a,s){if(this[a]!==s){if(a in io&&(s=s.map(c=>this.createChild(c))),!ic.has(a)){this[a]=s;return}Object.defineProperty(this,a,{value:s,enumerable:!1,configurable:!0})}}map(a){let s;for(let c in io){let d=this[c];if(d){let p=Pm(d,m=>m.map(a));s!==d&&(s||(s=new Fr({parent:this.parent})),s.setProperty(c,p))}}if(s)for(let c in this)c in io||(s[c]=this[c]);return a(s||this)}walk(a){for(let s in io){let c=this[s];if(c)for(let d=0;d<c.length;d++)c[d].walk(a)}a(this)}createChild(a){let s=a instanceof Fr?a.clone():new Fr(a);return s.setProperty("parent",this),s}insertChildBefore(a,s){let c=this.$children;c.splice(c.indexOf(a),0,this.createChild(s))}removeChild(a){let s=this.$children;s.splice(s.indexOf(a),1)}replaceChild(a,s){let c=this.$children;c[c.indexOf(a)]=this.createChild(s)}clone(){return new Fr(this)}get $children(){return this[C(this,si,Aa)]}set $children(a){this[C(this,si,Aa)]=a}get firstChild(){var a;return(a=this.$children)==null?void 0:a[0]}get lastChild(){return $t(!0,this.$children,-1)}get prev(){let a=C(this,si,ka);return a[a.indexOf(this)-1]}get next(){let a=C(this,si,ka);return a[a.indexOf(this)+1]}get rawName(){return this.hasExplicitNamespace?this.fullName:this.name}get fullName(){return this.namespace?this.namespace+":"+this.name:this.name}get attrMap(){return Object.fromEntries(this.attrs.map(a=>[a.fullName,a.value]))}};si=new WeakSet,Aa=function(){return this.type==="angularIcuCase"?"expression":this.type==="angularIcuExpression"?"cases":"children"},ka=function(){var r;return((r=this.parent)==null?void 0:r.$children)??[]};var Bm=Om;function Pm(r,a){let s=r.map(a);return s.some((c,d)=>c!==r[d])?s:r}var Nm=[{regex:/^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su,parse:Vm},{regex:/^\[if([^\]]*)\]><!$/u,parse:Um},{regex:/^<!\s*\[endif\]$/u,parse:jm}];function $m(r,a){if(r.value)for(let{regex:s,parse:c}of Nm){let d=r.value.match(s);if(d)return c(r,a,d)}return null}function Vm(r,a,s){let[,c,d,p]=s,m=4+c.length,_=r.sourceSpan.start.moveBy(m),A=_.moveBy(p.length),[N,R]=(()=>{try{return[!0,a(p,_).children]}catch{return[!1,[{type:"text",value:p,sourceSpan:new re(_,A)}]]}})();return{type:"ieConditionalComment",complete:N,children:R,condition:P(!1,d.trim(),/\s+/gu," "),sourceSpan:r.sourceSpan,startSourceSpan:new re(r.sourceSpan.start,_),endSourceSpan:new re(A,r.sourceSpan.end)}}function Um(r,a,s){let[,c]=s;return{type:"ieConditionalStartComment",condition:P(!1,c.trim(),/\s+/gu," "),sourceSpan:r.sourceSpan}}function jm(r){return{type:"ieConditionalEndComment",sourceSpan:r.sourceSpan}}var Fa=new Map([["*",new Set(["accesskey","autocapitalize","autofocus","class","contenteditable","dir","draggable","enterkeyhint","hidden","id","inert","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","popover","slot","spellcheck","style","tabindex","title","translate","writingsuggestions"])],["a",new Set(["charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","target","type"])],["applet",new Set(["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"])],["area",new Set(["alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","target","type"])],["audio",new Set(["autoplay","controls","crossorigin","loop","muted","preload","src"])],["base",new Set(["href","target"])],["basefont",new Set(["color","face","size"])],["blockquote",new Set(["cite"])],["body",new Set(["alink","background","bgcolor","link","text","vlink"])],["br",new Set(["clear"])],["button",new Set(["disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","popovertarget","popovertargetaction","type","value"])],["canvas",new Set(["height","width"])],["caption",new Set(["align"])],["col",new Set(["align","char","charoff","span","valign","width"])],["colgroup",new Set(["align","char","charoff","span","valign","width"])],["data",new Set(["value"])],["del",new Set(["cite","datetime"])],["details",new Set(["name","open"])],["dialog",new Set(["open"])],["dir",new Set(["compact"])],["div",new Set(["align"])],["dl",new Set(["compact"])],["embed",new Set(["height","src","type","width"])],["fieldset",new Set(["disabled","form","name"])],["font",new Set(["color","face","size"])],["form",new Set(["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"])],["frame",new Set(["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"])],["frameset",new Set(["cols","rows"])],["h1",new Set(["align"])],["h2",new Set(["align"])],["h3",new Set(["align"])],["h4",new Set(["align"])],["h5",new Set(["align"])],["h6",new Set(["align"])],["head",new Set(["profile"])],["hr",new Set(["align","noshade","size","width"])],["html",new Set(["manifest","version"])],["iframe",new Set(["align","allow","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","loading","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"])],["img",new Set(["align","alt","border","crossorigin","decoding","fetchpriority","height","hspace","ismap","loading","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"])],["input",new Set(["accept","align","alt","autocomplete","checked","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","popovertarget","popovertargetaction","readonly","required","size","src","step","type","usemap","value","width"])],["ins",new Set(["cite","datetime"])],["isindex",new Set(["prompt"])],["label",new Set(["for","form"])],["legend",new Set(["align"])],["li",new Set(["type","value"])],["link",new Set(["as","blocking","charset","color","crossorigin","disabled","fetchpriority","href","hreflang","imagesizes","imagesrcset","integrity","media","referrerpolicy","rel","rev","sizes","target","type"])],["map",new Set(["name"])],["menu",new Set(["compact"])],["meta",new Set(["charset","content","http-equiv","media","name","scheme"])],["meter",new Set(["high","low","max","min","optimum","value"])],["object",new Set(["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","type","typemustmatch","usemap","vspace","width"])],["ol",new Set(["compact","reversed","start","type"])],["optgroup",new Set(["disabled","label"])],["option",new Set(["disabled","label","selected","value"])],["output",new Set(["for","form","name"])],["p",new Set(["align"])],["param",new Set(["name","type","value","valuetype"])],["pre",new Set(["width"])],["progress",new Set(["max","value"])],["q",new Set(["cite"])],["script",new Set(["async","blocking","charset","crossorigin","defer","fetchpriority","integrity","language","nomodule","referrerpolicy","src","type"])],["select",new Set(["autocomplete","disabled","form","multiple","name","required","size"])],["slot",new Set(["name"])],["source",new Set(["height","media","sizes","src","srcset","type","width"])],["style",new Set(["blocking","media","type"])],["table",new Set(["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"])],["tbody",new Set(["align","char","charoff","valign"])],["td",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["template",new Set(["shadowrootclonable","shadowrootdelegatesfocus","shadowrootmode"])],["textarea",new Set(["autocomplete","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","wrap"])],["tfoot",new Set(["align","char","charoff","valign"])],["th",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["thead",new Set(["align","char","charoff","valign"])],["time",new Set(["datetime"])],["tr",new Set(["align","bgcolor","char","charoff","valign"])],["track",new Set(["default","kind","label","src","srclang"])],["ul",new Set(["compact","type"])],["video",new Set(["autoplay","controls","crossorigin","height","loop","muted","playsinline","poster","preload","src","width"])]]),Hm=new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]);function zm(r){if(r.type==="block"){if(r.name=P(!1,r.name.toLowerCase(),/\s+/gu," ").trim(),r.type="angularControlFlowBlock",!aa(r.parameters)){delete r.parameters;return}for(let a of r.parameters)a.type="angularControlFlowBlockParameter";r.parameters={type:"angularControlFlowBlockParameters",children:r.parameters,sourceSpan:new re(r.parameters[0].sourceSpan.start,$t(!1,r.parameters,-1).sourceSpan.end)}}}function qm(r){r.type==="letDeclaration"&&(r.type="angularLetDeclaration",r.id=r.name,r.init={type:"angularLetDeclarationInitializer",sourceSpan:new re(r.valueSpan.start,r.valueSpan.end),value:r.value},delete r.name,delete r.value)}function Wm(r){(r.type==="plural"||r.type==="select")&&(r.clause=r.type,r.type="angularIcuExpression"),r.type==="expansionCase"&&(r.type="angularIcuCase")}function rc(r,a,s){let{name:c,canSelfClose:d=!0,normalizeTagName:p=!1,normalizeAttributeName:m=!1,allowHtmComponentClosingTags:_=!1,isTagNameCaseSensitive:A=!1,shouldParseAsRawText:N}=a,{rootNodes:R,errors:de}=nc(r,{canSelfClose:d,allowHtmComponentClosingTags:_,isTagNameCaseSensitive:A,getTagContentType:N?(...B)=>N(...B)?At.RAW_TEXT:void 0:void 0,tokenizeAngularBlocks:c==="angular"?!0:void 0,tokenizeAngularLetDeclaration:c==="angular"?!0:void 0});if(c==="vue"){if(R.some(Pe=>Pe.type==="docType"&&Pe.value==="html"||Pe.type==="element"&&Pe.name.toLowerCase()==="html"))return rc(r,Ia,s);let B,ce=()=>B??(B=nc(r,{canSelfClose:d,allowHtmComponentClosingTags:_,isTagNameCaseSensitive:A})),je=Pe=>ce().rootNodes.find(({startSourceSpan:et})=>et&&et.start.offset===Pe.startSourceSpan.start.offset)??Pe;for(let[Pe,et]of R.entries()){let{endSourceSpan:li,startSourceSpan:tg}=et;if(li===null)de=ce().errors,R[Pe]=je(et);else if(Gm(et,s)){let sc=ce().errors.find(lc=>lc.span.start.offset>tg.start.offset&&lc.span.start.offset<li.end.offset);sc&&oc(sc),R[Pe]=je(et)}}}de.length>0&&oc(de[0]);let te=B=>{let ce=B.name.startsWith(":")?B.name.slice(1).split(":")[0]:null,je=B.nameSpan.toString(),Pe=ce!==null&&je.startsWith(`${ce}:`),et=Pe?je.slice(ce.length+1):je;B.name=et,B.namespace=ce,B.hasExplicitNamespace=Pe},le=B=>{switch(B.type){case"element":te(B);for(let ce of B.attrs)te(ce),ce.valueSpan?(ce.value=ce.valueSpan.toString(),/["']/u.test(ce.value[0])&&(ce.value=ce.value.slice(1,-1))):ce.value=null;break;case"comment":B.value=B.sourceSpan.toString().slice(4,-3);break;case"text":B.value=B.sourceSpan.toString();break}},Ee=(B,ce)=>{let je=B.toLowerCase();return ce(je)?je:B},Ue=B=>{if(B.type==="element"&&(p&&(!B.namespace||B.namespace===B.tagDefinition.implicitNamespacePrefix||Vi(B))&&(B.name=Ee(B.name,ce=>Hm.has(ce))),m))for(let ce of B.attrs)ce.namespace||(ce.name=Ee(ce.name,je=>Fa.has(B.name)&&(Fa.get("*").has(je)||Fa.get(B.name).has(je))))},qe=B=>{B.sourceSpan&&B.endSourceSpan&&(B.sourceSpan=new re(B.sourceSpan.start,B.endSourceSpan.end))},Qe=B=>{if(B.type==="element"){let ce=Sa(A?B.name:B.name.toLowerCase());!B.namespace||B.namespace===ce.implicitNamespacePrefix||Vi(B)?B.tagDefinition=ce:B.tagDefinition=Sa("")}};return Wl(new class extends lm{visitExpansionCase(B,ce){c==="angular"&&this.visitChildren(ce,je=>{je(B.expression)})}visit(B){le(B),Qe(B),Ue(B),qe(B)}},R),R}function Gm(r,a){var s;if(r.type!=="element"||r.name!=="template")return!1;let c=(s=r.attrs.find(d=>d.name==="lang"))==null?void 0:s.value;return!c||$r(a,{language:c})==="html"}function oc(r){let{msg:a,span:{start:s,end:c}}=r;throw Im(a,{loc:{start:{line:s.line+1,column:s.col+1},end:{line:c.line+1,column:c.col+1}},cause:r})}function ac(r,a,s={},c=!0){let{frontMatter:d,content:p}=c?Rm(r):{frontMatter:null,content:r},m=new Al(r,s.filepath),_=new wa(m,0,0,0),A=_.moveBy(r.length),N={type:"root",sourceSpan:new re(_,A),children:rc(p,a,s)};if(d){let te=new wa(m,0,0,0),le=te.moveBy(d.raw.length);d.sourceSpan=new re(te,le),N.children.unshift(d)}let R=new Bm(N),de=(te,le)=>{let{offset:Ee}=le,Ue=P(!1,r.slice(0,Ee),/[^\n\r]/gu," "),qe=ac(Ue+te,a,s,!1);qe.sourceSpan=new re(le,$t(!1,qe.children,-1).sourceSpan.end);let Qe=qe.children[0];return Qe.length===Ee?qe.children.shift():(Qe.sourceSpan=new re(Qe.sourceSpan.start.moveBy(Ee),Qe.sourceSpan.end),Qe.value=Qe.value.slice(Ee)),qe};return R.walk(te=>{if(te.type==="comment"){let le=$m(te,de);le&&te.parent.replaceChild(te,le)}zm(te),qm(te),Wm(te)}),R}function Ji(r){return{parse:(a,s)=>ac(a,r,s),hasPragma:hf,hasIgnorePragma:ff,astFormat:"html",locStart:ji,locEnd:Hr}}var Ia={name:"html",normalizeTagName:!0,normalizeAttributeName:!0,allowHtmComponentClosingTags:!0},Km=Ji(Ia),Ym=new Set(["mj-style","mj-raw"]),Zm=Ji(Le(U({},Ia),{name:"mjml",shouldParseAsRawText:r=>Ym.has(r)})),Qm=Ji({name:"angular"}),Xm=Ji({name:"vue",isTagNameCaseSensitive:!0,shouldParseAsRawText(r,a,s,c){return r.toLowerCase()!=="html"&&!s&&(r!=="template"||c.some(({name:d,value:p})=>d==="lang"&&p!=="html"&&p!==""&&p!==void 0))}}),Jm=Ji({name:"lwc",canSelfClose:!1}),eg={html:jf};return f(G)})});var Ce=new fe("");var $c=null;function St(){return $c}function Ha(t){$c??=t}var ar=class{},sr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>M(Vc),providedIn:"platform"})}return t})(),rg=new fe(""),Vc=(()=>{class t extends sr{_location;_history;_doc=M(Ce);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return St().getBaseHref(this._doc)}onPopState(e){let n=St().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=St().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function fo(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Pc(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Ft(t){return t&&t[0]!=="?"?`?${t}`:t}var gi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:()=>M(Uc),providedIn:"root"})}return t})(),mo=new fe(""),Uc=(()=>{class t extends gi{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??M(Ce).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return fo(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Ft(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,l){let u=this.prepareExternalUrl(o+Ft(l));this._platformLocation.pushState(e,n,u)}replaceState(e,n,o,l){let u=this.prepareExternalUrl(o+Ft(l));this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(z(sr),z(mo,8))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jc=(()=>{class t{_subject=new hn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=sg(Pc(Nc(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Ft(n))}normalize(e){return t.stripTrailingSlash(ag(this._basePath,Nc(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ft(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ft(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=Ft;static joinWithSlash=fo;static stripTrailingSlash=Pc;static \u0275fac=function(n){return new(n||t)(z(gi))};static \u0275prov=k({token:t,factory:()=>og(),providedIn:"root"})}return t})();function og(){return new jc(z(gi))}function ag(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Nc(t){return t.replace(/\/index.html$/,"")}function sg(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var lg=(()=>{class t extends gi{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=fo(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,l){let u=this.prepareExternalUrl(o+Ft(l))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,u)}replaceState(e,n,o,l){let u=this.prepareExternalUrl(o+Ft(l))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(z(sr),z(mo,8))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var za=/\s+/,Hc=[],nt=(()=>{class t{_ngEl;_renderer;initialClasses=Hc;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(za):Hc}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(za):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(za).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(j(vt),j(Qt))};static \u0275dir=se({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var go=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},bi=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,l,u)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new go(o.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)n.remove(l===null?void 0:l);else if(l!==null){let h=n.get(l);n.move(h,u),zc(h,o)}});for(let o=0,l=n.length;o<l;o++){let h=n.get(o).context;h.index=o,h.count=l,h.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let l=n.get(o.currentIndex);zc(l,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(j(ir),j(pi),j(Rc))};static \u0275dir=se({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function zc(t,i){t.context.$implicit=i.item}var He=(()=>{class t{_viewContainer;_context=new bo;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){qc(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){qc(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(j(ir),j(pi))};static \u0275dir=se({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),bo=class{$implicit=null;ngIf=null};function qc(t,i){if(t&&!t.createEmbeddedView)throw new Fe(2020,!1)}var qa=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,e){this._viewContainerRef=i,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},Wc=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=se({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),cg=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,o){this.ngSwitch=o,o._addCase(),this._view=new qa(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)(j(ir),j(pi),j(Wc,9))};static \u0275dir=se({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})();var It=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,l]=e.split("."),u=o.indexOf("-")===-1?void 0:Hn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,l?`${n}${l}`:n,u):this._renderer.removeStyle(this._ngEl.nativeElement,o,u)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(j(vt),j(Oc),j(Qt))};static \u0275dir=se({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),ut=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(j(ir))};static \u0275dir=se({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ot]})}return t})();function ug(t,i){return new Fe(2100,!1)}var Wa=class{createSubscription(i,e){return lt(()=>i.subscribe({next:e,error:n=>{throw n}}))}dispose(i){lt(()=>i.unsubscribe())}},Ga=class{createSubscription(i,e){return i.then(n=>e?.(n),n=>{throw n}),{unsubscribe:()=>{e=null}}}dispose(i){i.unsubscribe()}},dg=new Ga,pg=new Wa,hg=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(co(e))return dg;if(Ac(e))return pg;throw ug(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(j(Xt,16))};static \u0275pipe=lo({name:"async",type:t,pure:!1})}return t})();var me=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();function lr(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,l]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(l)}return null}var yo="browser",Gc="server";function _n(t){return t===yo}function yi(t){return t===Gc}var Wn=class{};var Z_=(()=>{class t{static \u0275prov=k({token:t,providedIn:"root",factory:()=>new Ka(M(Ce),window)})}return t})(),Ka=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=mg(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,o=e.top+this.window.pageYOffset,l=this.offset();this.window.scrollTo(n-l[0],o-l[1])}};function mg(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let l=o.shadowRoot;if(l){let u=l.getElementById(i)||l.querySelector(`[name="${i}"]`);if(u)return u}o=n.nextNode()}}return null}var Co=new fe(""),Xa=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,o,l){return this._findPluginFor(n).addEventListener(e,n,o,l)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(l=>l.supports(e)),!n)throw new Fe(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(z(Co),z(jt))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),cr=class{_doc;constructor(i){this._doc=i}manager},vo="ng-app-id";function Yc(t){for(let i of t)i.remove()}function Zc(t,i){let e=i.createElement("style");return e.textContent=t,e}function gg(t,i,e,n){let o=t.head?.querySelectorAll(`style[${vo}="${i}"],link[${vo}="${i}"]`);if(o)for(let l of o)l.removeAttribute(vo),l instanceof HTMLLinkElement?n.set(l.href.slice(l.href.lastIndexOf("/")+1),{usage:0,elements:[l]}):l.textContent&&e.set(l.textContent,{usage:0,elements:[l]})}function Za(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Ja=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,o,l={}){this.doc=e,this.appId=n,this.nonce=o,this.isServer=yi(l),gg(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,Zc);n?.forEach(o=>this.addUsage(o,this.external,Za))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let l=n.get(e);l?l.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(u=>this.addElement(u,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(Yc(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Yc(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,Zc(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,Za(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(vo,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(z(Ce),z(Ba),z(Pa,8),z(_t))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Ya={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},es=/%COMP%/g;var Xc="%COMP%",bg=`_nghost-${Xc}`,yg=`_ngcontent-${Xc}`,vg=!0,_g=new fe("",{providedIn:"root",factory:()=>vg});function Cg(t){return yg.replace(es,t)}function wg(t){return bg.replace(es,t)}function Jc(t,i){return i.map(e=>e.replace(es,t))}var ts=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,o,l,u,h,f,y=null,v=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=l,this.doc=u,this.platformId=h,this.ngZone=f,this.nonce=y,this.tracingService=v,this.platformIsServer=yi(h),this.defaultRenderer=new ur(e,u,f,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===nr.ShadowDom&&(n=Le(U({},n),{encapsulation:nr.Emulated}));let o=this.getOrCreateRenderer(e,n);return o instanceof _o?o.applyToHost(e):o instanceof dr&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,l=o.get(n.id);if(!l){let u=this.doc,h=this.ngZone,f=this.eventManager,y=this.sharedStylesHost,v=this.removeStylesOnCompDestroy,C=this.platformIsServer,w=this.tracingService;switch(n.encapsulation){case nr.Emulated:l=new _o(f,y,n,this.appId,v,u,h,C,w);break;case nr.ShadowDom:return new Qa(f,y,e,n,u,h,this.nonce,C,w);default:l=new dr(f,y,n,v,u,h,C,w);break}o.set(n.id,l)}return l}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(z(Xa),z(Ja),z(Ba),z(_g),z(Ce),z(_t),z(jt),z(Pa),z(yc,8))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),ur=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,o,l){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=o,this.tracingService=l}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Ya[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Qc(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Qc(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new Fe(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,o){if(o){e=o+":"+e;let l=Ya[o];l?i.setAttributeNS(l,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let o=Ya[n];o?i.removeAttributeNS(o,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,o){o&(Hn.DashCase|Hn.Important)?i.style.setProperty(e,n,o&Hn.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Hn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,o){if(typeof i=="string"&&(i=St().getGlobalEventTarget(this.doc,i),!i))throw new Fe(5102,!1);let l=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(l=this.tracingService.wrapEventListener(i,e,l)),this.eventManager.addEventListener(i,e,l,o)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function Qc(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Qa=class extends ur{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,o,l,u,h,f,y){super(i,l,u,f,y),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let v=o.styles;v=Jc(o.id,v);for(let w of v){let E=document.createElement("style");h&&E.setAttribute("nonce",h),E.textContent=w,this.shadowRoot.appendChild(E)}let C=o.getExternalStyles?.();if(C)for(let w of C){let E=Za(w,l);h&&E.setAttribute("nonce",h),this.shadowRoot.appendChild(E)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},dr=class extends ur{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,o,l,u,h,f,y){super(i,l,u,h,f),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let v=n.styles;this.styles=y?Jc(y,v):v,this.styleUrls=n.getExternalStyles?.(y)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},_o=class extends dr{contentAttr;hostAttr;constructor(i,e,n,o,l,u,h,f,y){let v=o+"-"+n.id;super(i,e,n,l,u,h,f,y,v),this.contentAttr=Cg(v),this.hostAttr=wg(v)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var wo=class t extends ar{supportsDOMEvents=!0;static makeCurrent(){Ha(new t)}onAndCancel(i,e,n,o){return i.addEventListener(e,n,o),()=>{i.removeEventListener(e,n,o)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Dg();return e==null?null:xg(e)}resetBaseElement(){pr=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return lr(document.cookie,i)}},pr=null;function Dg(){return pr=pr||document.head.querySelector("base"),pr?pr.getAttribute("href"):null}function xg(t){return new URL(t,document.baseURI).pathname}var Eg=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),tu=(()=>{class t extends cr{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,l){return e.addEventListener(n,o,l),()=>this.removeEventListener(e,n,o,l)}removeEventListener(e,n,o,l){return e.removeEventListener(n,o,l)}static \u0275fac=function(n){return new(n||t)(z(Ce))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),eu=["alt","control","meta","shift"],Tg={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ag={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},nu=(()=>{class t extends cr{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,o,l){let u=t.parseEventName(n),h=t.eventCallback(u.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>St().onAndCancel(e,u.domEventName,h,l))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let l=t._normalizeKey(n.pop()),u="",h=n.indexOf("code");if(h>-1&&(n.splice(h,1),u="code."),eu.forEach(y=>{let v=n.indexOf(y);v>-1&&(n.splice(v,1),u+=y+".")}),u+=l,n.length!=0||l.length===0)return null;let f={};return f.domEventName=o,f.fullKey=u,f}static matchEventFullKeyCode(e,n){let o=Tg[e.key]||e.key,l="";return n.indexOf("code.")>-1&&(o=e.code,l="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),eu.forEach(u=>{if(u!==o){let h=Ag[u];h(e)&&(l+=u+".")}}),l+=o,l===n)}static eventCallback(e,n,o){return l=>{t.matchEventFullKeyCode(l,e)&&o.runGuarded(()=>n(l))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(z(Ce))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();function kg(t,i){return Bc(U({rootComponent:t},Fg(i)))}function Fg(t){return{appProviders:[...Og,...t?.providers??[]],platformProviders:Rg}}function Ig(){wo.makeCurrent()}function Mg(){return new Oa}function Lg(){return gc(document),document}var Rg=[{provide:_t,useValue:yo},{provide:bc,useValue:Ig,multi:!0},{provide:Ce,useFactory:Lg}];var Og=[{provide:pc,useValue:"root"},{provide:Oa,useFactory:Mg},{provide:Co,useClass:tu,multi:!0,deps:[Ce]},{provide:Co,useClass:nu,multi:!0,deps:[Ce]},ts,Ja,Xa,{provide:Tc,useExisting:ts},{provide:Wn,useClass:Eg},[]];var _i=class{},hr=class{},Cn=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),l=e.slice(n+1).trim();this.addHeaderEntry(o,l)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let l=i.value;if(!l)this.headers.delete(e),this.normalizedNames.delete(e);else{let u=this.headers.get(e);if(!u)return;u=u.filter(h=>l.indexOf(h)===-1),u.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,u)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(l=>l.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Do=class{encodeKey(i){return iu(i)}encodeValue(i){return iu(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Bg(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let l=o.indexOf("="),[u,h]=l==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,l)),i.decodeValue(o.slice(l+1))],f=e.get(u)||[];f.push(h),e.set(u,f)}),e}var Pg=/%(\d[a-f0-9])/gi,Ng={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function iu(t){return encodeURIComponent(t).replace(Pg,(i,e)=>Ng[e]??i)}function So(t){return`${t}`}var Jt=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Do,i.fromString){if(i.fromObject)throw new Fe(2805,!1);this.map=Bg(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(So):[So(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(l=>{e.push({param:n,value:l,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(So(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(So(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var xo=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function $g(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ru(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function ou(t){return typeof Blob<"u"&&t instanceof Blob}function au(t){return typeof FormData<"u"&&t instanceof FormData}function Vg(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var su="Content-Type",lu="Accept",cu="X-Request-URL",uu="text/plain",du="application/json",Ug=`${du}, ${uu}, */*`,vi=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let l;if($g(this.method)||o?(this.body=n!==void 0?n:null,l=o):l=n,l&&(this.reportProgress=!!l.reportProgress,this.withCredentials=!!l.withCredentials,l.responseType&&(this.responseType=l.responseType),l.headers&&(this.headers=l.headers),l.context&&(this.context=l.context),l.params&&(this.params=l.params),this.transferCache=l.transferCache),this.headers??=new Cn,this.context??=new xo,!this.params)this.params=new Jt,this.urlWithParams=e;else{let u=this.params.toString();if(u.length===0)this.urlWithParams=e;else{let h=e.indexOf("?"),f=h===-1?"?":h<e.length-1?"&":"";this.urlWithParams=e+f+u}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ru(this.body)||ou(this.body)||au(this.body)||Vg(this.body)?this.body:this.body instanceof Jt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||au(this.body)?null:ou(this.body)?this.body.type||null:ru(this.body)?null:typeof this.body=="string"?uu:this.body instanceof Jt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?du:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,l=i.transferCache??this.transferCache,u=i.body!==void 0?i.body:this.body,h=i.withCredentials??this.withCredentials,f=i.reportProgress??this.reportProgress,y=i.headers||this.headers,v=i.params||this.params,C=i.context??this.context;return i.setHeaders!==void 0&&(y=Object.keys(i.setHeaders).reduce((w,E)=>w.set(E,i.setHeaders[E]),y)),i.setParams&&(v=Object.keys(i.setParams).reduce((w,E)=>w.set(E,i.setParams[E]),v)),new t(e,n,u,{params:v,headers:y,context:C,reportProgress:f,responseType:o,withCredentials:h,transferCache:l})}},Lt=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Lt||{}),Ci=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new Cn,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},Eo=class t extends Ci{constructor(i={}){super(i)}type=Lt.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},fr=class t extends Ci{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Lt.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},mr=class extends Ci{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},jg=200,Hg=204;function ns(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Ao=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let l;if(e instanceof vi)l=e;else{let f;o.headers instanceof Cn?f=o.headers:f=new Cn(o.headers);let y;o.params&&(o.params instanceof Jt?y=o.params:y=new Jt({fromObject:o.params})),l=new vi(e,n,o.body!==void 0?o.body:null,{headers:f,context:o.context,params:y,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let u=fn(l).pipe(ao(f=>this.handler.handle(f)));if(e instanceof vi||o.observe==="events")return u;let h=u.pipe(uc(f=>f instanceof fr));switch(o.observe||"body"){case"body":switch(l.responseType){case"arraybuffer":return h.pipe(Vt(f=>{if(f.body!==null&&!(f.body instanceof ArrayBuffer))throw new Fe(2806,!1);return f.body}));case"blob":return h.pipe(Vt(f=>{if(f.body!==null&&!(f.body instanceof Blob))throw new Fe(2807,!1);return f.body}));case"text":return h.pipe(Vt(f=>{if(f.body!==null&&typeof f.body!="string")throw new Fe(2808,!1);return f.body}));case"json":default:return h.pipe(Vt(f=>f.body))}case"response":return h;default:throw new Fe(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Jt().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,ns(o,n))}post(e,n,o={}){return this.request("POST",e,ns(o,n))}put(e,n,o={}){return this.request("PUT",e,ns(o,n))}static \u0275fac=function(n){return new(n||t)(z(_i))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var zg=new fe("");function qg(t,i){return i(t)}function Wg(t,i,e){return(n,o)=>fc(e,()=>i(n,l=>t(l,o)))}var pu=new fe(""),hu=new fe(""),fu=new fe("",{providedIn:"root",factory:()=>!0});var To=(()=>{class t extends _i{backend;injector;chain=null;pendingTasks=M(mc);contributeToStability=M(fu);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(pu),...this.injector.get(hu,[])]));this.chain=n.reduceRight((o,l)=>Wg(o,l,this.injector),qg)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(dc(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(z(hr),z(hc))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Gg=/^\)\]\}',?\n/,Kg=RegExp(`^${cu}:`,"m");function Yg(t){return"responseURL"in t&&t.responseURL?t.responseURL:Kg.test(t.getAllResponseHeaders())?t.getResponseHeader(cu):null}var is=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new Fe(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?ro(n.\u0275loadImpl()):fn(null)).pipe(tr(()=>new cc(l=>{let u=n.build();if(u.open(e.method,e.urlWithParams),e.withCredentials&&(u.withCredentials=!0),e.headers.forEach(($,P)=>u.setRequestHeader($,P.join(","))),e.headers.has(lu)||u.setRequestHeader(lu,Ug),!e.headers.has(su)){let $=e.detectContentTypeHeader();$!==null&&u.setRequestHeader(su,$)}if(e.responseType){let $=e.responseType.toLowerCase();u.responseType=$!=="json"?$:"text"}let h=e.serializeBody(),f=null,y=()=>{if(f!==null)return f;let $=u.statusText||"OK",P=new Cn(u.getAllResponseHeaders()),ye=Yg(u)||e.url;return f=new Eo({headers:P,status:u.status,statusText:$,url:ye}),f},v=()=>{let{headers:$,status:P,statusText:ye,url:De}=y(),ve=null;P!==Hg&&(ve=typeof u.response>"u"?u.responseText:u.response),P===0&&(P=ve?jg:0);let ke=P>=200&&P<300;if(e.responseType==="json"&&typeof ve=="string"){let ft=ve;ve=ve.replace(Gg,"");try{ve=ve!==""?JSON.parse(ve):null}catch(mt){ve=ft,ke&&(ke=!1,ve={error:mt,text:ve})}}ke?(l.next(new fr({body:ve,headers:$,status:P,statusText:ye,url:De||void 0})),l.complete()):l.error(new mr({error:ve,headers:$,status:P,statusText:ye,url:De||void 0}))},C=$=>{let{url:P}=y(),ye=new mr({error:$,status:u.status||0,statusText:u.statusText||"Unknown Error",url:P||void 0});l.error(ye)},w=!1,E=$=>{w||(l.next(y()),w=!0);let P={type:Lt.DownloadProgress,loaded:$.loaded};$.lengthComputable&&(P.total=$.total),e.responseType==="text"&&u.responseText&&(P.partialText=u.responseText),l.next(P)},G=$=>{let P={type:Lt.UploadProgress,loaded:$.loaded};$.lengthComputable&&(P.total=$.total),l.next(P)};return u.addEventListener("load",v),u.addEventListener("error",C),u.addEventListener("timeout",C),u.addEventListener("abort",C),e.reportProgress&&(u.addEventListener("progress",E),h!==null&&u.upload&&u.upload.addEventListener("progress",G)),u.send(h),l.next({type:Lt.Sent}),()=>{u.removeEventListener("error",C),u.removeEventListener("abort",C),u.removeEventListener("load",v),u.removeEventListener("timeout",C),e.reportProgress&&(u.removeEventListener("progress",E),h!==null&&u.upload&&u.upload.removeEventListener("progress",G)),u.readyState!==u.DONE&&u.abort()}})))}static \u0275fac=function(n){return new(n||t)(z(Wn))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),mu=new fe(""),Zg="XSRF-TOKEN",Qg=new fe("",{providedIn:"root",factory:()=>Zg}),Xg="X-XSRF-TOKEN",Jg=new fe("",{providedIn:"root",factory:()=>Xg}),gr=class{},e0=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=lr(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(z(Ce),z(Qg))};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();function t0(t,i){let e=t.url.toLowerCase();if(!M(mu)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=M(gr).getToken(),o=M(Jg);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}function n0(...t){let i=[Ao,is,To,{provide:_i,useExisting:To},{provide:hr,useFactory:()=>M(zg,{optional:!0})??M(is)},{provide:pu,useValue:t0,multi:!0},{provide:mu,useValue:!0},{provide:gr,useClass:e0}];for(let e of t)i.push(...e.\u0275providers);return ui(i)}var Aw=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(z(Ce))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=z(i0),o},providedIn:"root"})}return t})(),i0=(()=>{class t extends rs{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case jn.NONE:return n;case jn.HTML:return di(n,"HTML")?Un(n):xc(this._doc,String(n)).toString();case jn.STYLE:return di(n,"Style")?Un(n):n;case jn.SCRIPT:if(di(n,"Script"))return Un(n);throw new Fe(5200,!1);case jn.URL:return di(n,"URL")?Un(n):Dc(String(n));case jn.RESOURCE_URL:if(di(n,"ResourceURL"))return Un(n);throw new Fe(5201,!1);default:throw new Fe(5202,!1)}}bypassSecurityTrustHtml(e){return vc(e)}bypassSecurityTrustStyle(e){return _c(e)}bypassSecurityTrustScript(e){return Cc(e)}bypassSecurityTrustUrl(e){return wc(e)}bypassSecurityTrustResourceUrl(e){return Sc(e)}static \u0275fac=function(n){return new(n||t)(z(Ce))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wi=class{},gu=(()=>{class t extends wi{getTranslation(e){return fn({})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),yr=class{},bu=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();function Fo(t,i){if(t===i)return!0;if(t===null||i===null)return!1;if(t!==t&&i!==i)return!0;let e=typeof t,n=typeof i,o,l,u;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(i))return!1;if((o=t.length)==i.length){for(l=0;l<o;l++)if(!Fo(t[l],i[l]))return!1;return!0}}else{if(Array.isArray(i))return!1;u=Object.create(null);for(l in t){if(!Fo(t[l],i[l]))return!1;u[l]=!0}for(l in i)if(!(l in u)&&typeof i[l]<"u")return!1;return!0}return!1}function wn(t){return typeof t<"u"&&t!==null}function _r(t){return ko(t)&&!ds(t)&&t!==null}function ko(t){return typeof t=="object"}function ds(t){return Array.isArray(t)}function ps(t){return typeof t=="string"}function r0(t){return typeof t=="function"}function os(t,i){let e=Object.assign({},t);return ko(t)?(ko(t)&&ko(i)&&Object.keys(i).forEach(n=>{_r(i[n])?n in t?e[n]=os(t[n],i[n]):Object.assign(e,{[n]:i[n]}):Object.assign(e,{[n]:i[n]})}),e):os({},i)}function as(t,i){let e=i.split(".");i="";do i+=e.shift(),wn(t)&&wn(t[i])&&(_r(t[i])||ds(t[i])||!e.length)?(t=t[i],i=""):e.length?i+=".":t=void 0;while(e.length);return t}function o0(t,i,e){let n=i.split("."),o=t;for(let l=0;l<n.length;l++){let u=n[l];l===n.length-1?o[u]=e:((!o[u]||!_r(o[u]))&&(o[u]={}),o=o[u])}}var Si=class{},yu=(()=>{class t extends Si{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(ps(e))return this.interpolateString(e,n);if(r0(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(o,l)=>{let u=as(n,l);return wn(u)?u:o}):e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Di=class{},vu=(()=>{class t extends Di{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),vr=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new Y;onLangChange=new Y;onDefaultLangChange=new Y},ss=new fe("ISOLATE_TRANSLATE_SERVICE"),ls=new fe("USE_DEFAULT_LANG"),cs=new fe("DEFAULT_LANGUAGE"),us=new fe("USE_EXTEND"),br=t=>ci(t)?t:fn(t),en=(()=>{class t{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,n,o,l,u,h=!0,f=!1,y=!1,v){this.store=e,this.currentLoader=n,this.compiler=o,this.parser=l,this.missingTranslationHandler=u,this.useDefaultLang=h,this.extend=y,f&&(this.store=new vr),v&&this.setDefaultLang(v)}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=e),n.pipe(er(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return fn(this.translations[e]);this.currentLang||(this.currentLang=e);let n=this.retrieveTranslations(e);return ci(n)?(n.pipe(er(1)).subscribe(()=>{this.changeLang(e)}),n):(this.changeLang(e),fn(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(Ra(1),er(1));return this.loadingTranslations=n.pipe(Vt(o=>this.compiler.compileTranslations(o,e)),Ra(1),er(1)),this.loadingTranslations.subscribe({next:o=>{this.translations[e]=this.extend&&this.translations[e]?U(U({},o),this.translations[e]):o,this.updateLangs(),this.pending=!1},error:o=>{this.pending=!1}}),n}setTranslation(e,n,o=!1){let l=this.compiler.compileTranslations(n,e);(o||this.extend)&&this.translations[e]?this.translations[e]=os(this.translations[e],l):this.translations[e]=l,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let n=e.filter(o=>!this.langs.includes(o));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,n,o){let l;if(e&&(l=this.runInterpolation(as(e,n),o)),l===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(l=this.runInterpolation(as(this.translations[this.defaultLang],n),o)),l===void 0){let u={key:n,translateService:this};typeof o<"u"&&(u.interpolateParams=o),l=this.missingTranslationHandler.handle(u)}return l!==void 0?l:n}runInterpolation(e,n){if(ds(e))return e.map(o=>this.runInterpolation(o,n));if(_r(e)){let o={};for(let l in e){let u=this.runInterpolation(e[l],n);u!==void 0&&(o[l]=u)}return o}else return this.parser.interpolate(e,n)}getParsedResult(e,n,o){if(n instanceof Array){let l={},u=!1;for(let f of n)l[f]=this.getParsedResultForKey(e,f,o),u=u||ci(l[f]);if(!u)return l;let h=n.map(f=>br(l[f]));return oo(h).pipe(Vt(f=>{let y={};return f.forEach((v,C)=>{y[n[C]]=v}),y}))}return this.getParsedResultForKey(e,n,o)}get(e,n){if(!wn(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(ao(o=>br(this.getParsedResult(o,e,n)))):br(this.getParsedResult(this.translations[this.currentLang],e,n))}getStreamOnTranslationChange(e,n){if(!wn(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return Ma(La(()=>this.get(e,n)),this.onTranslationChange.pipe(tr(o=>{let l=this.getParsedResult(o.translations,e,n);return br(l)})))}stream(e,n){if(!wn(e)||!e.length)throw new Error('Parameter "key" required');return Ma(La(()=>this.get(e,n)),this.onLangChange.pipe(tr(o=>{let l=this.getParsedResult(o.translations,e,n);return br(l)})))}instant(e,n){if(!wn(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let o=this.getParsedResult(this.translations[this.currentLang],e,n);return ci(o)?Array.isArray(e)?e.reduce((l,u)=>(l[u]=u,l),{}):e:o}set(e,n,o=this.currentLang){o0(this.translations[o],e,ps(n)?this.compiler.compile(n,o):this.compiler.compileTranslations(n,o)),this.updateLangs(),this.onTranslationChange.emit({lang:o,translations:this.translations[o]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||t)(z(vr),z(wi),z(Di),z(Si),z(yr),z(ls),z(ss),z(us),z(cs))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sn=(()=>{class t{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,n){this.translate=e,this._ref=n}updateValue(e,n,o){let l=u=>{this.value=u!==void 0?u:e,this.lastKey=e,this._ref.markForCheck()};if(o){let u=this.translate.getParsedResult(o,e,n);ci(u)?u.subscribe(l):l(u)}this.translate.get(e,n).subscribe(l)}transform(e,...n){if(!e||!e.length)return e;if(Fo(e,this.lastKey)&&Fo(n,this.lastParams))return this.value;let o;if(wn(n[0])&&n.length)if(ps(n[0])&&n[0].length){let l=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{o=JSON.parse(l)}catch(u){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else _r(n[0])&&(o=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,o),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(l=>{this.lastKey&&l.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,o,l.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(l=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,o,l.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,o))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)(j(en,16),j(Xt,16))};static \u0275pipe=lo({name:"translate",type:t,pure:!1});static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Dn=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[e.loader||{provide:wi,useClass:gu},e.compiler||{provide:Di,useClass:vu},e.parser||{provide:Si,useClass:yu},e.missingTranslationHandler||{provide:yr,useClass:bu},vr,{provide:ss,useValue:e.isolate},{provide:ls,useValue:e.useDefaultLang},{provide:us,useValue:e.extend},{provide:cs,useValue:e.defaultLanguage},en]}}static forChild(e={}){return{ngModule:t,providers:[e.loader||{provide:wi,useClass:gu},e.compiler||{provide:Di,useClass:vu},e.parser||{provide:Si,useClass:yu},e.missingTranslationHandler||{provide:yr,useClass:bu},{provide:ss,useValue:e.isolate},{provide:ls,useValue:e.useDefaultLang},{provide:us,useValue:e.extend},{provide:cs,useValue:e.defaultLanguage},en]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var Tu=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(j(Qt),j(vt))};static \u0275dir=se({type:t})}return t})(),a0=(()=>{class t extends Tu{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275dir=se({type:t,features:[O]})}return t})(),Ai=new fe("");var s0={provide:Ai,useExisting:Ut(()=>ki),multi:!0};function l0(){let t=St()?St().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var c0=new fe(""),ki=(()=>{class t extends Tu{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!l0())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(j(Qt),j(vt),j(c0,8))};static \u0275dir=se({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&Q("input",function(u){return o._handleInput(u.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(u){return o._compositionEnd(u.target.value)})},standalone:!1,features:[oe([s0]),O]})}return t})();function Au(t){return t==null||u0(t)===0}function u0(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var $o=new fe(""),ku=new fe("");function d0(t){return Au(t.value)?{required:!0}:null}function p0(t){if(!t)return hs;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(Au(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function hs(t){return null}function Fu(t){return t!=null}function Iu(t){return co(t)?ro(t):t}function Mu(t){let i={};return t.forEach(e=>{i=e!=null?U(U({},i),e):i}),Object.keys(i).length===0?null:i}function Lu(t,i){return i.map(e=>e(t))}function h0(t){return!t.validate}function Ru(t){return t.map(i=>h0(i)?i:e=>i.validate(e))}function f0(t){if(!t)return null;let i=t.filter(Fu);return i.length==0?null:function(e){return Mu(Lu(e,i))}}function bs(t){return t!=null?f0(Ru(t)):null}function m0(t){if(!t)return null;let i=t.filter(Fu);return i.length==0?null:function(e){let n=Lu(e,i).map(Iu);return oo(n).pipe(Vt(Mu))}}function ys(t){return t!=null?m0(Ru(t)):null}function _u(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function g0(t){return t._rawValidators}function b0(t){return t._rawAsyncValidators}function fs(t){return t?Array.isArray(t)?t:[t]:[]}function Lo(t,i){return Array.isArray(t)?t.includes(i):t===i}function Cu(t,i){let e=fs(i);return fs(t).forEach(o=>{Lo(e,o)||e.push(o)}),e}function wu(t,i){return fs(i).filter(e=>!Lo(t,e))}var Ro=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=bs(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ys(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Ti=class extends Ro{name;get formDirective(){return null}get path(){return null}},Rt=class extends Ro{_parent=null;name=null;valueAccessor=null},Oo=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},y0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},nS=Le(U({},y0),{"[class.ng-submitted]":"isSubmitted"}),Fi=(()=>{class t extends Oo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(j(Rt,2))};static \u0275dir=se({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&at("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[O]})}return t})(),Vo=(()=>{class t extends Oo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(j(Ti,10))};static \u0275dir=se({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&at("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[O]})}return t})();var Cr="VALID",Mo="INVALID",xi="PENDING",wr="DISABLED",xn=class{},Bo=class extends xn{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Dr=class extends xn{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},xr=class extends xn{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ei=class extends xn{status;source;constructor(i,e){super(),this.status=i,this.source=e}},ms=class extends xn{source;constructor(i){super(),this.source=i}},gs=class extends xn{source;constructor(i){super(),this.source=i}};function Ou(t){return(Uo(t)?t.validators:t)||null}function v0(t){return Array.isArray(t)?bs(t):t||null}function Bu(t,i){return(Uo(i)?i.asyncValidators:t)||null}function _0(t){return Array.isArray(t)?ys(t):t||null}function Uo(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function C0(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new Fe(1e3,"");if(!n[e])throw new Fe(1001,"")}function w0(t,i,e){t._forEachChild((n,o)=>{if(e[o]===void 0)throw new Fe(1002,"")})}var Po=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return lt(this.statusReactive)}set status(i){lt(()=>this.statusReactive.set(i))}_status=ct(()=>this.statusReactive());statusReactive=Re(void 0);get valid(){return this.status===Cr}get invalid(){return this.status===Mo}get pending(){return this.status==xi}get disabled(){return this.status===wr}get enabled(){return this.status!==wr}errors;get pristine(){return lt(this.pristineReactive)}set pristine(i){lt(()=>this.pristineReactive.set(i))}_pristine=ct(()=>this.pristineReactive());pristineReactive=Re(!0);get dirty(){return!this.pristine}get touched(){return lt(this.touchedReactive)}set touched(i){lt(()=>this.touchedReactive.set(i))}_touched=ct(()=>this.touchedReactive());touchedReactive=Re(!1);get untouched(){return!this.touched}_events=new hn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Cu(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Cu(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(wu(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(wu(i,this._rawAsyncValidators))}hasValidator(i){return Lo(this._rawValidators,i)}hasAsyncValidator(i){return Lo(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(Le(U({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new xr(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new xr(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(Le(U({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Dr(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Dr(!0,n))}markAsPending(i={}){this.status=xi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ei(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(Le(U({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=wr,this.errors=null,this._forEachChild(o=>{o.disable(Le(U({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Bo(this.value,n)),this._events.next(new Ei(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Le(U({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Cr,this._forEachChild(n=>{n.enable(Le(U({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Le(U({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Cr||this.status===xi)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Bo(this.value,e)),this._events.next(new Ei(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(Le(U({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?wr:Cr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=xi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=Iu(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Ei(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new Y,this.statusChanges=new Y}_calculateStatus(){return this._allControlsDisabled()?wr:this.errors?Mo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xi)?xi:this._anyControlsHaveStatus(Mo)?Mo:Cr}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new Dr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new xr(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Uo(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=v0(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=_0(this._rawAsyncValidators)}},No=class extends Po{constructor(i,e,n){super(Ou(e),Bu(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){w0(this,!0,i),Object.keys(i).forEach(n=>{C0(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((o,l)=>{n=e(n,o,l)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var vs=new fe("",{providedIn:"root",factory:()=>_s}),_s="always";function S0(t,i){return[...i.path,t]}function Pu(t,i,e=_s){Nu(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),x0(t,i),T0(t,i),E0(t,i),D0(t,i)}function Su(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function D0(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Nu(t,i){let e=g0(t);i.validator!==null?t.setValidators(_u(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=b0(t);i.asyncValidator!==null?t.setAsyncValidators(_u(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();Su(i._rawValidators,o),Su(i._rawAsyncValidators,o)}function x0(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&$u(t,i)})}function E0(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&$u(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function $u(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function T0(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function A0(t,i){t==null,Nu(t,i)}function k0(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function F0(t){return Object.getPrototypeOf(t.constructor)===a0}function I0(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function M0(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(l=>{l.constructor===ki?e=l:F0(l)?n=l:o=l}),o||n||e||null}var L0={provide:Ti,useExisting:Ut(()=>Er)},Sr=Promise.resolve(),Er=(()=>{class t extends Ti{callSetDisabledState;get submitted(){return lt(this.submittedReactive)}_submitted=ct(()=>this.submittedReactive());submittedReactive=Re(!1);_directives=new Set;form;ngSubmit=new Y;options;constructor(e,n,o){super(),this.callSetDisabledState=o,this.form=new No({},bs(e),ys(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Sr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Pu(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Sr.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Sr.then(()=>{let n=this._findContainer(e.path),o=new No({});A0(o,e),n.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Sr.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Sr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),I0(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ms(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1),this.form._events.next(new gs(this.form))}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(j($o,10),j(ku,10),j(vs,8))};static \u0275dir=se({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,o){n&1&&Q("submit",function(u){return o.onSubmit(u)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[oe([L0]),O]})}return t})();function Du(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function xu(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var R0=class extends Po{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Ou(e),Bu(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Uo(e)&&(e.nonNullable||e.initialValueIsDefault)&&(xu(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Du(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Du(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){xu(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var O0={provide:Rt,useExisting:Ut(()=>Ot)},Eu=Promise.resolve(),Ot=(()=>{class t extends Rt{_changeDetectorRef;callSetDisabledState;control=new R0;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Y;constructor(e,n,o,l,u,h){super(),this._changeDetectorRef=u,this.callSetDisabledState=h,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=M0(this,l)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),k0(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Pu(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Eu.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&V(n);Eu.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?S0(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(j(Ti,9),j($o,10),j(ku,10),j(Ai,10),j(Xt,8),j(vs,8))};static \u0275dir=se({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[oe([O0]),O,ot]})}return t})();var jo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=se({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Vu=(()=>{class t{_validator=hs;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):hs,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=se({type:t,features:[ot]})}return t})();var B0={provide:$o,useExisting:Ut(()=>Tr),multi:!0};var Tr=(()=>{class t extends Vu{required;inputName="required";normalizeInput=V;createValidator=e=>d0;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275dir=se({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&F("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[oe([B0]),O]})}return t})();var P0={provide:$o,useExisting:Ut(()=>Cs),multi:!0},Cs=(()=>{class t extends Vu{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>p0(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275dir=se({type:t,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&F("pattern",o._enabled?o.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[oe([P0]),O]})}return t})();var N0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var En=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:vs,useValue:e.callSetDisabledState??_s}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[N0]})}return t})();function Uu(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function zt(t,i){if(t&&i){let e=n=>{Uu(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function $0(){return window.innerWidth-document.documentElement.offsetWidth}function Ii(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function aS(t="p-overflow-hidden"){let i=Ii(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,$0()+"px"),zt(document.body,t)}function qt(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function sS(t="p-overflow-hidden"){let i=Ii(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),qt(document.body,t)}function ju(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function Hu(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,l=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:l}}function V0(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function U0(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function lS(t,i,e=!0){var n,o,l,u;if(t){let h=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ju(t),f=h.height,y=h.width,v=i.offsetHeight,C=i.offsetWidth,w=i.getBoundingClientRect(),E=U0(),G=V0(),$=Hu(),P,ye,De="top";w.top+v+f>$.height?(P=w.top+E-f,De="bottom",P<0&&(P=E)):P=v+w.top+E,w.left+y>$.width?ye=Math.max(0,w.left+G+C-y):ye=w.left+G,t.style.top=P+"px",t.style.left=ye+"px",t.style.transformOrigin=De,e&&(t.style.marginTop=De==="bottom"?`calc(${(o=(n=Ii(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(u=(l=Ii(/-anchor-gutter$/))==null?void 0:l.value)!=null?u:"")}}function cS(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function zu(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function uS(t,i,e=!0){var n,o,l,u;if(t){let h=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ju(t),f=i.offsetHeight,y=i.getBoundingClientRect(),v=Hu(),C,w,E="top";y.top+f+h.height>v.height?(C=-1*h.height,E="bottom",y.top+C<0&&(C=-1*y.top)):C=f,h.width>v.width?w=y.left*-1:y.left+h.width>v.width?w=(y.left+h.width-v.width)*-1:w=0,t.style.top=C+"px",t.style.left=w+"px",t.style.transformOrigin=E,e&&(t.style.marginTop=E==="bottom"?`calc(${(o=(n=Ii(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(u=(l=Ii(/-anchor-gutter$/))==null?void 0:l.value)!=null?u:"")}}function Mi(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ws(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),Mi(i)?i:void 0}function dS(t,i){let e=ws(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Ss(t,i={}){if(Mi(t)){let e=(n,o)=>{var l,u;let h=(l=t?.$attrs)!=null&&l[n]?[(u=t?.$attrs)==null?void 0:u[n]]:[];return[o].flat().reduce((f,y)=>{if(y!=null){let v=typeof y;if(v==="string"||v==="number")f.push(y);else if(v==="object"){let C=Array.isArray(y)?e(n,y):Object.entries(y).map(([w,E])=>n==="style"&&(E||E===0)?`${w.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${E}`:E?w:void 0);f=C.length?f.concat(C.filter(w=>!!w)):f}}return f},h)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let l=n.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?Ss(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function pS(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function j0(t,i){return Mi(t)?Array.from(t.querySelectorAll(i)):[]}function Li(t,i){return Mi(t)?t.matches(i)?t:t.querySelector(i):null}function hS(t,i){t&&document.activeElement!==t&&t.focus(i)}function fS(t,i){if(Mi(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function qu(t,i=""){let e=j0(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function mS(t,i){let e=qu(t,i);return e.length>0?e[0]:null}function Ds(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Wu(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function gS(t){var i;if(t){let e=(i=Wu(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function bS(t,i){let e=qu(t,i);return e.length>0?e[e.length-1]:null}function Gu(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function xs(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function yS(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function H0(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Wu(t))}function vS(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let o=ws((l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t);return o?.nodeType===9||H0(o)?o:void 0}}function Es(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function _S(t){return!!(t&&t.offsetParent!=null)}function CS(t){return t?getComputedStyle(t).direction==="rtl":!1}function wS(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ku(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function SS(t,i){let e=ws(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function DS(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),l=o?parseFloat(o):0,u=t.getBoundingClientRect(),f=i.getBoundingClientRect().top+document.body.scrollTop-(u.top+document.body.scrollTop)-n-l,y=t.scrollTop,v=t.clientHeight,C=xs(i);f<0?t.scrollTop=y+f:f+C>v&&(t.scrollTop=y+f-v+C)}function xS(t,i="",e){Mi(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Yu(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(o=>{o(e)})},clear(){t.clear()}}}var z0=Object.defineProperty,Zu=Object.getOwnPropertySymbols,q0=Object.prototype.hasOwnProperty,W0=Object.prototype.propertyIsEnumerable,Qu=(t,i,e)=>i in t?z0(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,G0=(t,i)=>{for(var e in i||(i={}))q0.call(i,e)&&Qu(t,e,i[e]);if(Zu)for(var e of Zu(i))W0.call(i,e)&&Qu(t,e,i[e]);return t};function Ye(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ts(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),l,u,h;if(n&&o){if(u=t.length,u!=i.length)return!1;for(l=u;l--!==0;)if(!Ts(t[l],i[l],e))return!1;return!0}if(n!=o)return!1;let f=t instanceof Date,y=i instanceof Date;if(f!=y)return!1;if(f&&y)return t.getTime()==i.getTime();let v=t instanceof RegExp,C=i instanceof RegExp;if(v!=C)return!1;if(v&&C)return t.toString()==i.toString();let w=Object.keys(t);if(u=w.length,u!==Object.keys(i).length)return!1;for(l=u;l--!==0;)if(!Object.prototype.hasOwnProperty.call(i,w[l]))return!1;for(l=u;l--!==0;)if(h=w[l],!Ts(t[h],i[h],e))return!1;return!0}function K0(t,i){return Ts(t,i)}function Ju(t){return!!(t&&t.constructor&&t.call&&t.apply)}function we(t){return!Ye(t)}function Ho(t,i){if(!t||!i)return null;try{let e=t[i];if(we(e))return e}catch{}if(Object.keys(t).length){if(Ju(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,l=e.length;o<l;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Gn(t,i,e){return e?Ho(t,e)===Ho(i,e):K0(t,i)}function ed(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Gn(t,e))return!0}return!1}function kS(t,i){let e=-1;if(we(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function Bt(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Dt(t,...i){return Ju(t)?t(...i):t}function Tn(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Xu(t){return Tn(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function zo(t,i="",e={}){let n=Xu(i).split("."),o=n.shift();return o?Bt(t)?zo(Dt(t[Object.keys(t).find(l=>Xu(l)===o)||""],e),n.join("."),e):void 0:Dt(t,e)}function qo(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function FS(t){return t instanceof Date&&t.constructor===Date}function td(t){return we(t)&&!isNaN(t)}function IS(t=""){return we(t)&&t.length===1&&!!t.match(/\S| /)}function dt(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function kr(...t){let i=(e={},n={})=>{let o=G0({},e);return Object.keys(n).forEach(l=>{Bt(n[l])&&l in e&&Bt(e[l])?o[l]=i(e[l],n[l]):o[l]=n[l]}),o};return t.reduce((e,n,o)=>o===0?n:i(e,n),{})}function Kn(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function pt(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Wo(t){return Tn(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function As(t){return Tn(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var Go={};function tn(t="pui_id_"){return Go.hasOwnProperty(t)||(Go[t]=0),Go[t]++,`${t}${Go[t]}`}function Y0(){let t=[],i=(u,h,f=999)=>{let y=o(u,h,f),v=y.value+(y.key===u?0:f)+1;return t.push({key:u,value:v}),v},e=u=>{t=t.filter(h=>h.value!==u)},n=(u,h)=>o(u,h).value,o=(u,h,f=0)=>[...t].reverse().find(y=>h?!0:y.key===u)||{key:u,value:f},l=u=>u&&parseInt(u.style.zIndex,10)||0;return{get:l,set:(u,h,f)=>{h&&(h.style.zIndex=String(i(u,!0,f)))},clear:u=>{u&&(e(l(u)),u.style.zIndex="")},getCurrent:u=>n(u,!0)}}var RS=Y0();var nd=["*"];var Ze=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),GS=(()=>{class t{static AND="and";static OR="or"}return t})(),KS=(()=>{class t{filter(e,n,o,l,u){let h=[];if(e)for(let f of e)for(let y of n){let v=Ho(f,y);if(this.filters[l](v,o,u)){h.push(f);break}}return h}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let l=pt(n.toString()).toLocaleLowerCase(o);return pt(e.toString()).toLocaleLowerCase(o).slice(0,l.length)===l},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let l=pt(n.toString()).toLocaleLowerCase(o);return pt(e.toString()).toLocaleLowerCase(o).indexOf(l)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let l=pt(n.toString()).toLocaleLowerCase(o);return pt(e.toString()).toLocaleLowerCase(o).indexOf(l)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let l=pt(n.toString()).toLocaleLowerCase(o),u=pt(e.toString()).toLocaleLowerCase(o);return u.indexOf(l,u.length-l.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:pt(e.toString()).toLocaleLowerCase(o)==pt(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:pt(e.toString()).toLocaleLowerCase(o)!=pt(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(Gn(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YS=(()=>{class t{clickSource=new hn;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var id=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:nd,decls:1,vars:0,template:function(n,o){n&1&&(tt(),Ke(0))},encapsulation:2})}return t})(),rd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:nd,decls:1,vars:0,template:function(n,o){n&1&&(tt(),Ke(0))},encapsulation:2})}return t})(),xt=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(j(pi))};static \u0275dir=se({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ae=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[me]})}return t})(),An=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Z0=Object.defineProperty,Q0=Object.defineProperties,X0=Object.getOwnPropertyDescriptors,Ko=Object.getOwnPropertySymbols,sd=Object.prototype.hasOwnProperty,ld=Object.prototype.propertyIsEnumerable,od=(t,i,e)=>i in t?Z0(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Nt=(t,i)=>{for(var e in i||(i={}))sd.call(i,e)&&od(t,e,i[e]);if(Ko)for(var e of Ko(i))ld.call(i,e)&&od(t,e,i[e]);return t},ks=(t,i)=>Q0(t,X0(i)),nn=(t,i)=>{var e={};for(var n in t)sd.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Ko)for(var n of Ko(t))i.indexOf(n)<0&&ld.call(t,n)&&(e[n]=t[n]);return e};function XS(...t){return kr(...t)}var J0=Yu(),ht=J0;function ad(t,i){qo(t)?t.push(...i||[]):Bt(t)&&Object.assign(t,i)}function eb(t){return Bt(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function tb(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Fs(t="",i=""){return tb(`${Tn(t,!1)&&Tn(i,!1)?`${t}-`:t}${i}`)}function cd(t="",i=""){return`--${Fs(t,i)}`}function nb(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function ud(t,i="",e="",n=[],o){if(Tn(t)){let l=/{([^}]*)}/g,u=t.trim();if(nb(u))return;if(dt(u,l)){let h=u.replaceAll(l,v=>{let w=v.replace(/{|}/g,"").split(".").filter(E=>!n.some(G=>dt(E,G)));return`var(${cd(e,Wo(w.join("-")))}${we(o)?`, ${o}`:""})`}),f=/(\d+\s+[\+\-\*\/]\s+\d+)/g,y=/var\([^)]+\)/g;return dt(h.replace(y,"0"),f)?`calc(${h})`:h}return u}else if(td(t))return t}function ib(t,i,e){Tn(i,!1)&&t.push(`${i}:${e};`)}function Ri(t,i){return t?`${t}{${i}}`:""}var Oi=(...t)=>rb(Se.getTheme(),...t),rb=(t={},i,e,n)=>{if(i){let{variable:o,options:l}=Se.defaults||{},{prefix:u,transform:h}=t?.options||l||{},y=dt(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||Ye(n)&&h==="strict"?Se.getTokenValue(i):ud(y,void 0,u,[o.excludedKeyRegex],e)}return""};function ob(t,i={}){let e=Se.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:l=e.excludedKeyRegex}=i,u=(y,v="")=>Object.entries(y).reduce((C,[w,E])=>{let G=dt(w,l)?Fs(v):Fs(v,Wo(w)),$=eb(E);if(Bt($)){let{variables:P,tokens:ye}=u($,G);ad(C.tokens,ye),ad(C.variables,P)}else C.tokens.push((n?G.replace(`${n}-`,""):G).replaceAll("-",".")),ib(C.variables,cd(G),ud($,G,n,[l]));return C},{variables:[],tokens:[]}),{variables:h,tokens:f}=u(t,n);return{value:h,tokens:f,declarations:h.join(""),css:Ri(o,h.join(""))}}var Pt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return ob(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var l,u,h,f,y,v,C;let{preset:w,options:E}=i,G,$,P,ye,De,ve,ke;if(we(w)&&E.transform!=="strict"){let{primitive:ft,semantic:mt,extend:an}=w,Gt=mt||{},{colorScheme:sn}=Gt,ln=nn(Gt,["colorScheme"]),Mn=an||{},{colorScheme:Ln}=Mn,gt=nn(Mn,["colorScheme"]),cn=sn||{},{dark:un}=cn,Rn=nn(cn,["dark"]),Yn=Ln||{},{dark:$t}=Yn,Zn=nn(Yn,["dark"]),On=we(ft)?this._toVariables({primitive:ft},E):{},Qn=we(ln)?this._toVariables({semantic:ln},E):{},Xn=we(Rn)?this._toVariables({light:Rn},E):{},Ir=we(un)?this._toVariables({dark:un},E):{},Mr=we(gt)?this._toVariables({semantic:gt},E):{},Ni=we(Zn)?this._toVariables({light:Zn},E):{},it=we($t)?this._toVariables({dark:$t},E):{},[$i,Kt]=[(l=On.declarations)!=null?l:"",On.tokens],[Lr,ea]=[(u=Qn.declarations)!=null?u:"",Qn.tokens||[]],[bt,Rr]=[(h=Xn.declarations)!=null?h:"",Xn.tokens||[]],[Me,ta]=[(f=Ir.declarations)!=null?f:"",Ir.tokens||[]],[na,Or]=[(y=Mr.declarations)!=null?y:"",Mr.tokens||[]],[Jn,ia]=[(v=Ni.declarations)!=null?v:"",Ni.tokens||[]],[Bn,ra]=[(C=it.declarations)!=null?C:"",it.tokens||[]];G=this.transformCSS(t,$i,"light","variable",E,n,o),$=Kt;let oa=this.transformCSS(t,`${Lr}${bt}`,"light","variable",E,n,o),Ie=this.transformCSS(t,`${Me}`,"dark","variable",E,n,o);P=`${oa}${Ie}`,ye=[...new Set([...ea,...Rr,...ta])];let ze=this.transformCSS(t,`${na}${Jn}color-scheme:light`,"light","variable",E,n,o),xe=this.transformCSS(t,`${Bn}color-scheme:dark`,"dark","variable",E,n,o);De=`${ze}${xe}`,ve=[...new Set([...Or,...ia,...ra])],ke=Dt(w.css,{dt:Oi})}return{primitive:{css:G,tokens:$},semantic:{css:P,tokens:ye},global:{css:De,tokens:ve},style:ke}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:l,selector:u}){var h,f,y;let v,C,w;if(we(i)&&e.transform!=="strict"){let E=t.replace("-directive",""),G=i,{colorScheme:$,extend:P,css:ye}=G,De=nn(G,["colorScheme","extend","css"]),ve=P||{},{colorScheme:ke}=ve,ft=nn(ve,["colorScheme"]),mt=$||{},{dark:an}=mt,Gt=nn(mt,["dark"]),sn=ke||{},{dark:ln}=sn,Mn=nn(sn,["dark"]),Ln=we(De)?this._toVariables({[E]:Nt(Nt({},De),ft)},e):{},gt=we(Gt)?this._toVariables({[E]:Nt(Nt({},Gt),Mn)},e):{},cn=we(an)?this._toVariables({[E]:Nt(Nt({},an),ln)},e):{},[un,Rn]=[(h=Ln.declarations)!=null?h:"",Ln.tokens||[]],[Yn,$t]=[(f=gt.declarations)!=null?f:"",gt.tokens||[]],[Zn,On]=[(y=cn.declarations)!=null?y:"",cn.tokens||[]],Qn=this.transformCSS(E,`${un}${Yn}`,"light","variable",e,o,l,u),Xn=this.transformCSS(E,Zn,"dark","variable",e,o,l,u);v=`${Qn}${Xn}`,C=[...new Set([...Rn,...$t,...On])],w=Dt(ye,{dt:Oi})}return{css:v,tokens:C,style:w}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var l;let{preset:u,options:h}=i,f=(l=u?.components)==null?void 0:l[t];return this.getPreset({name:t,preset:f,options:h,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var l;let u=t.replace("-directive",""),{preset:h,options:f}=i,y=(l=h?.directives)==null?void 0:l[u];return this.getPreset({name:u,preset:y,options:f,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${Dt(o.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:l}){let u=this.getCommon({name:t,theme:i,params:e,set:o,defaults:l}),h=Object.entries(n).reduce((f,[y,v])=>f.push(`${y}="${v}"`)&&f,[]).join(" ");return Object.entries(u||{}).reduce((f,[y,v])=>{if(v?.css){let C=Kn(v?.css),w=`${y}-variables`;f.push(`<style type="text/css" data-primevue-style-id="${w}" ${h}>${C}</style>`)}return f},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:l}){var u;let h={name:t,theme:i,params:e,set:o,defaults:l},f=(u=t.includes("-directive")?this.getPresetD(h):this.getPresetC(h))==null?void 0:u.css,y=Object.entries(n).reduce((v,[C,w])=>v.push(`${C}="${w}"`)&&v,[]).join(" ");return f?`<style type="text/css" data-primevue-style-id="${t}-variables" ${y}>${Kn(f)}</style>`:""},createTokens(t={},i,e="",n="",o={}){return Object.entries(t).forEach(([l,u])=>{let h=dt(l,i.variable.excludedKeyRegex)?e:e?`${e}.${As(l)}`:As(l),f=n?`${n}.${l}`:l;Bt(u)?this.createTokens(u,i,h,f,o):(o[h]||(o[h]={paths:[],computed(y,v={}){var C,w;return this.paths.length===1?(C=this.paths[0])==null?void 0:C.computed(this.paths[0].scheme,v.binding):y&&y!=="none"?(w=this.paths.find(E=>E.scheme===y))==null?void 0:w.computed(y,v.binding):this.paths.map(E=>E.computed(E.scheme,v[E.scheme]))}}),o[h].paths.push({path:f,value:u,scheme:f.includes("colorScheme.light")?"light":f.includes("colorScheme.dark")?"dark":"none",computed(y,v={}){let C=/{([^}]*)}/g,w=u;if(v.name=this.path,v.binding||(v.binding={}),dt(u,C)){let G=u.trim().replaceAll(C,ye=>{var De;let ve=ye.replace(/{|}/g,""),ke=(De=o[ve])==null?void 0:De.computed(y,v);return qo(ke)&&ke.length===2?`light-dark(${ke[0].value},${ke[1].value})`:ke?.value}),$=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,P=/var\([^)]+\)/g;w=dt(G.replace(P,"0"),$)?`calc(${G})`:G}return Ye(v.binding)&&delete v.binding,{colorScheme:y,path:this.path,paths:v,value:w.includes("undefined")?void 0:w}}}))}),o},getTokenValue(t,i,e){var n;let l=(f=>f.split(".").filter(v=>!dt(v.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),u=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,h=[(n=t[l])==null?void 0:n.computed(u)].flat().filter(f=>f);return h.length===1?h[0].value:h.reduce((f={},y)=>{let v=y,{colorScheme:C}=v,w=nn(v,["colorScheme"]);return f[C]=w,f},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Ri(we(i)?`${t}${i},${t} ${i}`:t,n):Ri(t,we(i)?Ri(i,n):n)},transformCSS(t,i,e,n,o={},l,u,h){if(we(i)){let{cssLayer:f}=o;if(n!=="style"){let y=this.getColorSchemeOption(o,u);i=e==="dark"?y.reduce((v,{type:C,selector:w})=>(we(w)&&(v+=w.includes("[CSS]")?w.replace("[CSS]",i):this.getSelectorRule(w,h,C,i)),v),""):Ri(h??":root",i)}if(f){let y={name:"primeui",order:"primeui"};Bt(f)&&(y.name=Dt(f.name,{name:t,type:n})),we(y.name)&&(i=Ri(`@layer ${y.name}`,i),l?.layerNames(y.name))}return i}return""}},Se={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=ks(Nt({},i),{options:Nt(Nt({},this.defaults.options),i.options)}),this._tokens=Pt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ht.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ks(Nt({},this.theme),{preset:t}),this._tokens=Pt.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ht.emit("preset:change",t),ht.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ks(Nt({},this.theme),{options:t}),this.clearLoadedStyleNames(),ht.emit("options:change",t),ht.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Pt.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return Pt.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Pt.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Pt.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Pt.getPreset(o)},getLayerOrderCSS(t=""){return Pt.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return Pt.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return Pt.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return Pt.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),ht.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&ht.emit("theme:load"))}};var ab=0,dd=(()=>{class t{document=M(Ce);use(e,n={}){let o=!1,l=e,u=null,{immediate:h=!0,manual:f=!1,name:y=`style_${++ab}`,id:v=void 0,media:C=void 0,nonce:w=void 0,first:E=!1,props:G={}}=n;if(this.document){if(u=this.document.querySelector(`style[data-primeng-style-id="${y}"]`)||v&&this.document.getElementById(v)||this.document.createElement("style"),!u.isConnected){l=e;let $=this.document.head;E&&$.firstChild?$.insertBefore(u,$.firstChild):$.appendChild(u),Ss(u,{type:"text/css",media:C,nonce:w,"data-primeng-style-id":y})}return u.textContent!==l&&(u.textContent=l),{id:v,name:y,el:u,css:l}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bi={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},sb=({dt:t})=>`
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
`,lb=({dt:t})=>`
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
`,pe=(()=>{class t{name="base";useStyle=M(dd);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},o=l=>l)=>{let l=o(Dt(e,{dt:Oi}));return l?this.useStyle.use(Kn(l),U({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>Se.transformCSS(e.name||this.name,`${o}${n}`));loadGlobalCSS=(e={})=>this.load(lb,e);loadGlobalTheme=(e={},n="")=>this.load(sb,e,(o="")=>Se.transformCSS(e.name||this.name,`${o}${n}`));getCommonTheme=e=>Se.getCommon(this.name,e);getComponentTheme=e=>Se.getComponent(this.name,e);getDirectiveTheme=e=>Se.getDirective(this.name,e);getPresetTheme=(e,n,o)=>Se.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>Se.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=Dt(this.css,{dt:Oi}),l=Kn(`${o}${e}`),u=Object.entries(n).reduce((h,[f,y])=>h.push(`${f}="${y}"`)&&h,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${u}>${l}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>Se.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[Se.getStyleSheet(this.name,e,n)];if(this.theme){let l=this.name==="base"?"global-style":`${this.name}-style`,u=Dt(this.theme,{dt:Oi}),h=Kn(Se.transformCSS(l,u)),f=Object.entries(n).reduce((y,[v,C])=>y.push(`${v}="${C}"`)&&y,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${l}" ${f}>${h}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cb=(()=>{class t{theme=Re(void 0);csp=Re({nonce:void 0});isThemeChanged=!1;document=M(Ce);baseStyle=M(pe);constructor(){rr(()=>{ht.on("theme:change",e=>{lt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),rr(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){Se.clearLoadedStyleNames(),ht.clear()}onThemeChange(e){Se.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!Se.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:l}=this.baseStyle.getCommonTheme?.()||{},u={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,U({name:"primitive-variables"},u)),this.baseStyle.load(n?.css,U({name:"semantic-variables"},u)),this.baseStyle.load(o?.css,U({name:"global-variables"},u)),this.baseStyle.loadGlobalTheme(U({name:"global-style"},u),l),Se.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Is=(()=>{class t extends cb{ripple=Re(!1);platformId=M(_t);inputStyle=Re(null);inputVariant=Re(null);overlayOptions={};csp=Re({nonce:void 0});filterMatchModeOptions={text:[Ze.STARTS_WITH,Ze.CONTAINS,Ze.NOT_CONTAINS,Ze.ENDS_WITH,Ze.EQUALS,Ze.NOT_EQUALS],numeric:[Ze.EQUALS,Ze.NOT_EQUALS,Ze.LESS_THAN,Ze.LESS_THAN_OR_EQUAL_TO,Ze.GREATER_THAN,Ze.GREATER_THAN_OR_EQUAL_TO],date:[Ze.DATE_IS,Ze.DATE_IS_NOT,Ze.DATE_BEFORE,Ze.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new hn;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=U(U({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:l,inputVariant:u,theme:h,overlayOptions:f,translation:y,filterMatchModeOptions:v}=e||{};n&&this.csp.set(n),o&&this.ripple.set(o),l&&this.inputStyle.set(l),u&&this.inputVariant.set(u),f&&(this.overlayOptions=f),y&&this.setTranslation(y),v&&(this.filterMatchModeOptions=v),h&&this.setThemeConfig({theme:h,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ub=new fe("PRIME_NG_CONFIG");function AD(...t){let i=t?.map(n=>({provide:ub,useValue:n,multi:!1})),e=kc(()=>{let n=M(Is);t?.forEach(o=>n.setConfig(o))});return ui([...i,e])}var pd=(()=>{class t extends pe{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ge=(()=>{class t{document=M(Ce);platformId=M(_t);el=M(vt);injector=M(mn);cd=M(Xt);renderer=M(Qt);config=M(Is);baseComponentStyle=M(pd);baseStyle=M(pe);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=tn("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return zo(e,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!yi(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>ht.off("theme:change",e))}_loadStyles(){let e=()=>{Bi.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Bi.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Bi.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Bi.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Se.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:l}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,U({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,U({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,U({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(U({name:"global-style"},this.styleOptions),l),Se.setLoadedStyleName("common")}if(!Se.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,U({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(U({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Se.setLoadedStyleName(this.componentStyle?.name)}if(!Se.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,U({name:"layer-order",first:!0},this.styleOptions)),Se.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,U({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Bi.clearLoadedStyleNames(),ht.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:U({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=se({type:t,inputs:{dt:"dt"},features:[oe([pd,pe]),ot]})}return t})();var Ms=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let l=0;l<o.length;l++)e.classList.add(o[l])}else{let o=n.split(" ");for(let l=0;l<o.length;l++)e.className+=" "+o[l]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(l=>this.removeClass(e,l)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var l=0;l<n.length;l++){if(n[l]==e)return o;n[l].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],l=0;for(var u=0;u<o.length;u++){if(o[u]==e)return l;o[u].attributes&&o[u].attributes[n]&&o[u].nodeType==1&&l++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",l=!0){e&&n&&(l&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let l=De=>{if(De)return getComputedStyle(De).getPropertyValue("position")==="relative"?De:l(De.parentElement)},u=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),h=n.offsetHeight,f=n.getBoundingClientRect(),y=this.getWindowScrollTop(),v=this.getWindowScrollLeft(),C=this.getViewport(),E=l(e)?.getBoundingClientRect()||{top:-1*y,left:-1*v},G,$;f.top+h+u.height>C.height?(G=f.top-E.top-u.height,e.style.transformOrigin="bottom",f.top+G<0&&(G=-1*f.top)):(G=h+f.top-E.top,e.style.transformOrigin="top");let P=f.left+u.width-C.width,ye=f.left-E.left;u.width>C.width?$=(f.left-E.left)*-1:P>0?$=ye-P:$=f.left-E.left,e.style.top=G+"px",e.style.left=$+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,o=!0){let l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),u=l.height,h=l.width,f=n.offsetHeight,y=n.offsetWidth,v=n.getBoundingClientRect(),C=this.getWindowScrollTop(),w=this.getWindowScrollLeft(),E=this.getViewport(),G,$;v.top+f+u>E.height?(G=v.top+C-u,e.style.transformOrigin="bottom",G<0&&(G=C)):(G=f+v.top+C,e.style.transformOrigin="top"),v.left+h>E.width?$=Math.max(0,v.left+w+y-h):$=v.left+w,e.style.top=G+"px",e.style.left=$+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),l=/(auto|scroll)/,u=h=>{let f=window.getComputedStyle(h,null);return l.test(f.getPropertyValue("overflow"))||l.test(f.getPropertyValue("overflowX"))||l.test(f.getPropertyValue("overflowY"))};for(let h of o){let f=h.nodeType===1&&h.dataset.scrollselectors;if(f){let y=f.split(",");for(let v of y){let C=this.findSingle(h,v);C&&u(C)&&n.push(C)}}h.nodeType!==9&&u(h)&&n.push(h)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),l=o?parseFloat(o):0,u=getComputedStyle(e).getPropertyValue("paddingTop"),h=u?parseFloat(u):0,f=e.getBoundingClientRect(),v=n.getBoundingClientRect().top+document.body.scrollTop-(f.top+document.body.scrollTop)-l-h,C=e.scrollTop,w=e.clientHeight,E=this.getOuterHeight(n);v<0?e.scrollTop=C+v:v+E>w&&(e.scrollTop=C+v-w+E)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,l=0,u=function(){l=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=l,o=+new Date,+l<1&&(window.requestAnimationFrame&&requestAnimationFrame(u)||setTimeout(u,16))};u()}static fadeOut(e,n){var o=1,l=50,u=n,h=l/u;let f=setInterval(()=>{o=o-h,o<=0&&(o=0,clearInterval(f)),e.style.opacity=o},l)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,l=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(u){return[].indexOf.call(document.querySelectorAll(u),this)!==-1};return l.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let l=getComputedStyle(e);o+=parseFloat(l.marginLeft)+parseFloat(l.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let l=getComputedStyle(e);o+=parseFloat(l.marginTop)+parseFloat(l.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,l=n.getElementsByTagName("body")[0],u=e.innerWidth||o.clientWidth||l.clientWidth,h=e.innerHeight||o.clientHeight||l.clientHeight;return{width:u,height:h}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var l=e.indexOf("rv:");return!0}var u=e.indexOf("Edge/");return u>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),l=[];for(let u of o){let h=getComputedStyle(u);this.isVisible(u)&&h.display!="none"&&h.visibility!="hidden"&&l.push(u)}return l}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let l=getComputedStyle(o);if(this.isVisible(o)&&l.display!="none"&&l.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),l=0;if(o&&o.length>0){let u=o.indexOf(o[0].ownerDocument.activeElement);n?u==-1||u===0?l=o.length-1:l=u-1:u!=-1&&u!==o.length-1&&(l=u+1)}return o[l]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let u=(h=>!!(h&&h.constructor&&h.call&&h.apply))(e)?e():e;return u&&u.nodeType===9||this.isExist(u)?u:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let l=document.createElement(e);return this.setAttributes(l,n),l.append(...o),l}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(l,u)=>{let h=e?.$attrs?.[l]?[e?.$attrs?.[l]]:[];return[u].flat().reduce((f,y)=>{if(y!=null){let v=typeof y;if(v==="string"||v==="number")f.push(y);else if(v==="object"){let C=Array.isArray(y)?o(l,y):Object.entries(y).map(([w,E])=>l==="style"&&(E||E===0)?`${w.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${E}`:E?w:void 0);f=C.length?f.concat(C.filter(w=>!!w)):f}}return f},h)};Object.entries(n).forEach(([l,u])=>{if(u!=null){let h=l.match(/^on(.+)/);h?e.addEventListener(h[1].toLowerCase(),u):l==="pBind"?this.setAttributes(e,u):(u=l==="class"?[...new Set(o("class",u))].join(" ").trim():l==="style"?o("style",u).join(";").trim():u,(e.$attrs=e.$attrs||{})&&(e.$attrs[l]=u),e.setAttribute(l,u))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),hd=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Ms.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Yo=(()=>{class t extends ge{autofocus=!1;_autofocus=!1;focused=!1;platformId=M(_t);document=M(Ce);host=M(vt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){_n(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Ms.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275dir=se({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",V],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[O]})}return t})(),ZD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var db=["input"],pb=(t,i,e,n,o)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":t,"p-disabled":i,"p-variant-filled":e,"p-radiobutton-sm p-inputfield-sm":n,"p-radiobutton-lg p-inputfield-lg":o}),hb=({dt:t})=>`
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
`,fb={root:({instance:t,props:i})=>["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},fd=(()=>{class t extends pe{name="radiobutton";theme=hb;classes=fb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var mb={provide:Ai,useExisting:Ut(()=>Zo),multi:!0},gb=(()=>{class t{accessors=[];add(e,n){this.accessors.push([e,n])}remove(e){this.accessors=this.accessors.filter(n=>n[1]!==e)}select(e){this.accessors.forEach(n=>{this.isSameGroup(n,e)&&n[1]!==e&&n[1].writeValue(e.value)})}isSameGroup(e,n){return e[0].control?e[0].control.root===n.control.control.root&&e[1].name===n.name:!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zo=(()=>{class t extends ge{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new Y;onFocus=new Y;onBlur=new Y;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=M(fd);injector=M(mn);registry=M(gb);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(Rt),this.checkName(),this.registry.add(this.control,this)}onChange(e){this.disabled||this.select(e)}select(e){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.binary?this.checked=!!e:this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,o){if(n&1&&yn(db,5),n&2){let l;X(l=J())&&(o.inputViewChild=l.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",V],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",st],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",V],binary:[2,"binary","binary",V]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([mb,fd]),O],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(n,o){if(n&1){let l=_e();D(0,"div",1)(1,"input",2,0),Q("focus",function(h){return q(l),W(o.onInputFocus(h))})("blur",function(h){return q(l),W(o.onInputBlur(h))})("change",function(h){return q(l),W(o.onChange(h))}),x(),D(3,"div",3),L(4,"div",4),x()()}n&2&&(K(o.styleClass),g("ngStyle",o.style)("ngClass",po(18,pb,o.checked,o.disabled,o.variant==="filled"||o.config.inputStyle()==="filled"||o.config.inputVariant()==="filled",o.size==="small",o.size==="large")),F("data-pc-name","radiobutton")("data-pc-section","root"),b(),g("checked",o.checked)("disabled",o.disabled)("value",o.value)("pAutoFocus",o.autofocus),F("id",o.inputId)("name",o.name)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("tabindex",o.tabindex)("aria-checked",o.checked),b(2),F("data-pc-section","input"),b(),F("data-pc-section","icon"))},dependencies:[me,nt,It,Yo,ae],encapsulation:2,changeDetection:0})}return t})(),px=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Zo,ae,ae]})}return t})();var bb=({dt:t})=>`
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
`,yb={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":we(t.value)&&String(t.value).length===1,"p-badge-dot":Ye(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},md=(()=>{class t extends pe{name="badge";theme=bb;classes=yb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Ls=(()=>{class t extends ge{styleClass=gn();style=gn();badgeSize=gn();size=gn();severity=gn();value=gn();badgeDisabled=gn(!1,{transform:V});_componentStyle=M(md);containerClass=ct(()=>{let e="p-badge p-component";return we(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),Ye(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(kt(o.style()),K(o.containerClass()),bn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[oe([md]),O],decls:1,vars:1,template:function(n,o){n&1&&be(0),n&2&&Oe(o.value())},dependencies:[me,ae],encapsulation:2,changeDetection:0})}return t})(),gd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ls,ae,ae]})}return t})();var _b=["*"],Cb=`
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
`,wb=(()=>{class t extends pe{name="baseicon";inlineStyles=Cb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Ve=(()=>{class t extends ge{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=Ye(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",V],styleClass:"styleClass"},features:[oe([wb]),O],ngContentSelectors:_b,decls:1,vars:0,template:function(n,o){n&1&&(tt(),Ke(0))},encapsulation:2,changeDetection:0})}return t})();var bd=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["CheckIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0),L(1,"path",1),x()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Vx=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["ChevronDownIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0),L(1,"path",1),x()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Hx=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["ChevronLeftIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0),L(1,"path",1),x()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Wx=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["ChevronRightIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0),L(1,"path",1),x()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Yx=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["ChevronUpIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0),L(1,"path",1),x()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var yd=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["MinusIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0),L(1,"path",1),x()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var vd=(()=>{class t extends Ve{pathId;ngOnInit(){this.pathId="url(#"+tn()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["PlusIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0)(1,"g"),L(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),b(),F("clip-path",o.pathId),b(3),g("id",o.pathId))},encapsulation:2})}return t})();var _d=(()=>{class t extends Ve{pathId;ngOnInit(){this.pathId="url(#"+tn()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["SpinnerIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0)(1,"g"),L(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),b(),F("clip-path",o.pathId),b(3),g("id",o.pathId))},encapsulation:2})}return t})();var Qo=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["TimesIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0),L(1,"path",1),x()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Cd=(()=>{class t extends Ve{pathId;ngOnInit(){this.pathId="url(#"+tn()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["UploadIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Ne(),D(0,"svg",0)(1,"g"),L(2,"path",1),x(),D(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(K(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),b(),F("clip-path",o.pathId),b(3),g("id",o.pathId))},encapsulation:2})}return t})();var Sb=({dt:t})=>`
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
`,Db={root:"p-ink"},wd=(()=>{class t extends pe{name="ripple";theme=Sb;classes=Db;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Xo=(()=>{class t extends ge{zone=M(jt);_componentStyle=M(wd);animationListener;mouseDownListener;timeout;constructor(){super(),rr(()=>{_n(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(qt(n,"p-ink-active"),!Ds(n)&&!Es(n)){let h=Math.max(zu(this.el.nativeElement),xs(this.el.nativeElement));n.style.height=h+"px",n.style.width=h+"px"}let o=Gu(this.el.nativeElement),l=e.pageX-o.left+this.document.body.scrollTop-Es(n)/2,u=e.pageY-o.top+this.document.body.scrollLeft-Ds(n)/2;this.renderer.setStyle(n,"top",u+"px"),this.renderer.setStyle(n,"left",l+"px"),zt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let h=this.getInk();h&&qt(h,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&qt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),qt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ku(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=se({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[oe([wd]),O]})}return t})(),yE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var xb=["content"],Eb=["loadingicon"],Tb=["icon"],Ab=["*"],xd=t=>({class:t});function kb(t,i){t&1&&$e(0)}function Fb(t,i){if(t&1&&L(0,"span",8),t&2){let e=S(3);g("ngClass",e.iconClass()),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ib(t,i){if(t&1&&L(0,"SpinnerIcon",9),t&2){let e=S(3);g("styleClass",e.spinnerIconClass())("spin",!0),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function Mb(t,i){if(t&1&&(We(0),T(1,Fb,1,3,"span",6)(2,Ib,1,4,"SpinnerIcon",7),Ge()),t&2){let e=S(2);b(),g("ngIf",e.loadingIcon),b(),g("ngIf",!e.loadingIcon)}}function Lb(t,i){}function Rb(t,i){if(t&1&&T(0,Lb,0,0,"ng-template",10),t&2){let e=S(2);g("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Ob(t,i){if(t&1&&(We(0),T(1,Mb,3,2,"ng-container",2)(2,Rb,1,1,null,5),Ge()),t&2){let e=S();b(),g("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),b(),g("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",wt(3,xd,e.iconClass()))}}function Bb(t,i){if(t&1&&L(0,"span",8),t&2){let e=S(2);K(e.icon),g("ngClass",e.iconClass()),F("data-pc-section","icon")}}function Pb(t,i){}function Nb(t,i){if(t&1&&T(0,Pb,0,0,"ng-template",10),t&2){let e=S(2);g("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function $b(t,i){if(t&1&&(We(0),T(1,Bb,1,4,"span",11)(2,Nb,1,1,null,5),Ge()),t&2){let e=S();b(),g("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),b(),g("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",wt(3,xd,e.iconClass()))}}function Vb(t,i){if(t&1&&(D(0,"span",12),be(1),x()),t&2){let e=S();F("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),b(),Oe(e.label)}}function Ub(t,i){if(t&1&&L(0,"p-badge",13),t&2){let e=S();g("value",e.badge)("severity",e.badgeSeverity)}}var jb=({dt:t})=>`
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
`,Hb={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Fn=(()=>{class t extends pe{name="button";theme=jb;classes=Hb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var kn={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Sd=(()=>{class t extends ge{_componentStyle=M(Fn);static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275dir=se({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&at("p-button-label",!0)},features:[oe([Fn]),O]})}return t})(),Dd=(()=>{class t extends ge{_componentStyle=M(Fn);static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275dir=se({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&at("p-button-icon",!0)},features:[oe([Fn]),O]})}return t})(),VE=(()=>{class t extends ge{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Na(Dd);labelSignal=Na(Sd);isIconOnly=ct(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(kn);isTextButton=ct(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;_componentStyle=M(Fn);ngAfterViewInit(){super.ngAfterViewInit(),zt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let l in o)this[l]=o[l]}}getStyleClass(){let e=[kn.button,kn.component];return this.icon&&!this.label&&Ye(this.htmlElement.textContent)&&e.push(kn.iconOnly),this.loading&&(e.push(kn.disabled,kn.loading),!this.icon&&this.label&&e.push(kn.labelOnly),this.icon&&!this.label&&!Ye(this.htmlElement.textContent)&&e.push(kn.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ye(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(l=>o===`p-button-${l}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Li(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Li(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&zt(n,o);let l=this.getIconClass();l&&zt(n,l),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Li(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Li(this.htmlElement,".p-button-icon"),n=Li(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275dir=se({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,l){n&1&&(ja(l,o.iconSignal,Dd,5),ja(l,o.labelSignal,Sd,5)),n&2&&Fc(2)},hostVars:4,hostBindings:function(n,o){n&2&&at("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",V],rounded:[2,"rounded","rounded",V],text:[2,"text","text",V],outlined:[2,"outlined","outlined",V],size:"size",plain:[2,"plain","plain",V],fluid:[2,"fluid","fluid",V],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[oe([Fn]),O,ot]})}return t})(),rn=(()=>{class t extends ge{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new Y;onFocus=new Y;onBlur=new Y;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ye(this.fluid)?!!n:this.fluid}_componentStyle=M(Fn);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let l in o)this[l]=o[l]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-button"]],contentQueries:function(n,o,l){if(n&1&&(ue(l,xb,5),ue(l,Eb,5),ue(l,Tb,5),ue(l,xt,4)),n&2){let u;X(u=J())&&(o.contentTemplate=u.first),X(u=J())&&(o.loadingIconTemplate=u.first),X(u=J())&&(o.iconTemplate=u.first),X(u=J())&&(o.templates=u)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",V],loading:[2,"loading","loading",V],loadingIcon:"loadingIcon",raised:[2,"raised","raised",V],rounded:[2,"rounded","rounded",V],text:[2,"text","text",V],plain:[2,"plain","plain",V],severity:"severity",outlined:[2,"outlined","outlined",V],link:[2,"link","link",V],tabindex:[2,"tabindex","tabindex",st],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",V],fluid:[2,"fluid","fluid",V],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([Fn]),O,ot],ngContentSelectors:Ab,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(tt(),D(0,"button",0),Q("click",function(u){return o.onClick.emit(u)})("focus",function(u){return o.onFocus.emit(u)})("blur",function(u){return o.onBlur.emit(u)}),Ke(1),T(2,kb,1,0,"ng-container",1)(3,Ob,3,5,"ng-container",2)(4,$b,3,5,"ng-container",2)(5,Vb,2,3,"span",3)(6,Ub,1,2,"p-badge",4),x()),n&2&&(g("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),F("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),b(2),g("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),b(),g("ngIf",o.loading),b(),g("ngIf",!o.loading),b(),g("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),b(),g("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[me,nt,He,ut,It,Xo,Yo,_d,gd,Ls,ae],encapsulation:2,changeDetection:0})}return t})(),Pi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[me,rn,ae,ae]})}return t})();var Wt=class t{selectedUploadType=Re("url");getSelectedUploadType=ct(()=>this.selectedUploadType());setUploadType(i){this.selectedUploadType.set(i)}uploadData=Re(null);getUploadData=ct(()=>this.uploadData());setUploadData(i){this.uploadData.set(i)}mergeModifiedData(i){let e=this.uploadData()||{};this.uploadData.set(Le(U({},e),{modifiedHtml:i.modifiedHtml,modifiedUrl:i.modifiedUrl}))}resetUploadFlow(){this.selectedUploadType.set("url"),this.uploadData.set(null)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};var zb=["header"],qb=["title"],Wb=["subtitle"],Gb=["content"],Kb=["footer"],Yb=["*",[["p-header"]],[["p-footer"]]],Zb=["*","p-header","p-footer"];function Qb(t,i){t&1&&$e(0)}function Xb(t,i){if(t&1&&(D(0,"div",8),Ke(1,1),T(2,Qb,1,0,"ng-container",6),x()),t&2){let e=S();b(2),g("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Jb(t,i){if(t&1&&(We(0),be(1),Ge()),t&2){let e=S(2);b(),Oe(e.header)}}function ey(t,i){t&1&&$e(0)}function ty(t,i){if(t&1&&(D(0,"div",9),T(1,Jb,2,1,"ng-container",10)(2,ey,1,0,"ng-container",6),x()),t&2){let e=S();b(),g("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),b(),g("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function ny(t,i){if(t&1&&(We(0),be(1),Ge()),t&2){let e=S(2);b(),Oe(e.subheader)}}function iy(t,i){t&1&&$e(0)}function ry(t,i){if(t&1&&(D(0,"div",11),T(1,ny,2,1,"ng-container",10)(2,iy,1,0,"ng-container",6),x()),t&2){let e=S();b(),g("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),b(),g("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function oy(t,i){t&1&&$e(0)}function ay(t,i){t&1&&$e(0)}function sy(t,i){if(t&1&&(D(0,"div",12),Ke(1,2),T(2,ay,1,0,"ng-container",6),x()),t&2){let e=S();b(2),g("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var ly=({dt:t})=>`
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
`,cy={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ed=(()=>{class t extends pe{name="card";theme=ly;classes=cy;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var uy=(()=>{class t extends ge{header;subheader;set style(e){Gn(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Re(null);_componentStyle=M(Ed);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-card"]],contentQueries:function(n,o,l){if(n&1&&(ue(l,id,5),ue(l,rd,5),ue(l,zb,4),ue(l,qb,4),ue(l,Wb,4),ue(l,Gb,4),ue(l,Kb,4),ue(l,xt,4)),n&2){let u;X(u=J())&&(o.headerFacet=u.first),X(u=J())&&(o.footerFacet=u.first),X(u=J())&&(o.headerTemplate=u.first),X(u=J())&&(o.titleTemplate=u.first),X(u=J())&&(o.subtitleTemplate=u.first),X(u=J())&&(o.contentTemplate=u.first),X(u=J())&&(o.footerTemplate=u.first),X(u=J())&&(o.templates=u)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[oe([Ed]),O],ngContentSelectors:Zb,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,o){n&1&&(tt(Yb),D(0,"div",0),T(1,Xb,3,1,"div",1),D(2,"div",2),T(3,ty,3,2,"div",3)(4,ry,3,2,"div",4),D(5,"div",5),Ke(6),T(7,oy,1,0,"ng-container",6),x(),T(8,sy,3,1,"div",7),x()()),n&2&&(K(o.styleClass),g("ngClass","p-card p-component")("ngStyle",o._style()),F("data-pc-name","card"),b(),g("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),b(2),g("ngIf",o.header||o.titleTemplate||o._titleTemplate),b(),g("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),b(3),g("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),b(),g("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[me,nt,He,ut,It,ae],encapsulation:2,changeDetection:0})}return t})(),rT=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[uy,ae,ae]})}return t})();function dy(t,i){if(t&1){let e=_e();D(0,"div",3)(1,"p-radioButton",4),mi("ngModelChange",function(o){q(e);let l=S();return fi(l.selected,o)||(l.selected=o),W(o)}),Q("ngModelChange",function(o){q(e);let l=S();return W(l.onChange(o))}),x(),D(2,"label",5),L(3,"i"),be(4),Te(5,"translate"),x()()}if(t&2){let e=i.$implicit,n=i.index,o=S();b(),g("inputId",o.name+"-"+n)("name",o.name)("value",e.value),hi("ngModel",o.selected),b(),g("for",o.name+"-"+n),b(),K(e.icon),b(),rt(" ",Ae(5,8,e.label)," ")}}var Td=class t{label;name;options=[];selected;selectedChange=new Y;onChange(i){this.selectedChange.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=H({type:t,selectors:[["ca-horizontal-radio-buttons"]],inputs:{label:"label",name:"name",options:"options",selected:"selected"},outputs:{selectedChange:"selectedChange"},decls:6,vars:7,consts:[[1,"mb-1","font-semibold","block",3,"for"],["role","radiogroup",1,"flex","flex-wrap","gap-3"],["class","field-radiobutton",4,"ngFor","ngForOf"],[1,"field-radiobutton"],[3,"ngModelChange","inputId","name","value","ngModel"],[3,"for"]],template:function(e,n){e&1&&(D(0,"div")(1,"label",0),be(2),Te(3,"translate"),x(),D(4,"div",1),T(5,dy,6,10,"div",2),x()()),e&2&&(b(),g("for",n.name+"-0"),F("id",n.name+"-label"),b(),Oe(Ae(3,5,n.label)),b(2),F("aria-labelledby",n.name+"-label"),b(),g("ngForOf",n.options))},dependencies:[me,bi,En,Fi,Ot,Dn,Sn,Zo],encapsulation:2})};var Ad=`
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
                    <p>Who should file a tax return, how to get ready and file taxes, payment and filing due dates,
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
                                <h3><a
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
`,kd=`
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
</div>`,Fd=`
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
</div>`,Id=`
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
</div>`,Md=`
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
</ul>`,Ld=`
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
</ul>`;var py=ig($d());var In=class t{constructor(i){this.uploadState=i}allowedHosts=new Set(["cra-design.github.io","cra-proto.github.io","gc-proto.github.io","test.canada.ca","www.canada.ca"]);fetchAndProcess(i){return he(this,null,function*(){let e=new URL(i);if(!this.allowedHosts.has(e.host))throw new Error(`${e.host} is blocked`);let n=yield fetch(i);if(!n.ok)throw new Error(`Fetch failed: HTTP ${n.status}`);console.warn(`Response code: ${n.status}`);let o=yield n.text();return this.extractContent(o)})}extractContent(i){return he(this,null,function*(){let e=new DOMParser().parseFromString(i,"text/html");yield this.processAjaxReplacements(e),yield this.processJsonReplacements(e),this.processModalDialogs(e),this.updateRelativeURLs(e,"https://www.canada.ca"),this.cleanupUnnecessaryElements(e),this.displayInvisibleElements(e),this.addToc(e);let n=e.querySelector("main");n||console.warn("No <main> tag found. Using full <body> content instead.");let o=n?n.innerHTML:e.body.innerHTML.trim();return yield this.formatHtml(o)})}formatHtml(i){return he(this,null,function*(){try{let{default:e}=yield import("./chunk-EAVPTRKQ.js");return e.format(i,{parser:"html",plugins:[py],htmlWhitespaceSensitivity:"ignore"})}catch(e){return console.error("Error formatting HTML:",e),i}})}processAjaxReplacements(i){return he(this,null,function*(){let e="https://www.canada.ca",n=(h,f)=>he(null,null,function*(){try{let y=yield fetch(h);return f==="json"?y.json():y.text()}catch(y){return console.error(`Error fetching URL: ${h}`,y),f==="json"?{}:""}}),o=()=>he(null,null,function*(){let h=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]');if(h.length)for(let f of h){let y=f.tagName.toLowerCase(),v=f.attributes;for(let C=0;C<v.length;C++){let w=v[C],E=w.name,G=w.value;if(!E.startsWith("data-ajax-")||!G.startsWith("/"))continue;let[$,P]=G.split("#"),ye=`${e}${$}`,De=yield n(ye,"text");if(!De)continue;let ve=new DOMParser().parseFromString(De,"text/html"),ke;if(P){let mt=ve.querySelector(`#${P}`);ke=mt?mt.outerHTML:""}else ke=ve.documentElement.innerHTML;if(!ke)continue;let ft=`
          <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
            <${y}>${ke}</${y}>
          </div>
        `;f.outerHTML=ft}}}),l,u=0;do l=u,yield o(),u=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]').length;while(u&&u!==l)})}processJsonReplacements(i){return he(this,null,function*(){let e="https://www.canada.ca",n=(v,C)=>he(null,null,function*(){try{let w=yield fetch(v);return C==="json"?w.json():w.text()}catch(w){return console.error(`Error fetching URL: ${v}`,w),C==="json"?{}:""}}),o=v=>{let[C,w=""]=v.split("#");return{url:C,jsonKey:w.slice(1)}},l=v=>{try{return JSON.parse(v.replace(/&quot;/g,'"'))}catch(C){return console.error("Error parsing JSON config:",C),null}},u=(v,C)=>C.split("/").reduce((w,E)=>w&&w[E]!==void 0?w[E]:void 0,v),h=i.querySelectorAll("[data-wb-jsonmanager]");if(!h.length)return;let f=new Map;yield Promise.all(Array.from(h).map(v=>he(null,null,function*(){let C=v.getAttribute("data-wb-jsonmanager");if(!C)return;let w=l(C);if(!w?.url||!w?.name)return;let{url:E,jsonKey:G}=o(w.url),$=`${e}${E}`;try{let P=yield n($,"json"),ye=u(P,G);f.set(w.name,ye)}catch(P){console.error(`Error fetching JSON for ${w.name}:`,P)}}))),i.querySelectorAll("[data-json-replace]").forEach(v=>{let w=(v.getAttribute("data-json-replace")||"").match(/^#\[(.*?)\](.*)$/);if(!w)return;let E=w[1],G=w[2].substring(1);if(!f.has(E)){console.warn(`No JSON data found for: ${E}`);return}let $=f.get(E),ye=`
      <div style="
        border: 3px dashed #fbc02f;
        padding: 8px;
        border-radius: 4px;
      "> 
        ${u($,G)} 
      </div>
    `;v.outerHTML=ye})})}cleanupUnnecessaryElements(i){["section#chat-bottom-bar","#gc-pft","header","footer","charlie"].forEach(n=>{i.querySelectorAll(n).forEach(o=>o.remove())})}displayInvisibleElements(i){[".wb-inv",".hidden",".nojs-show"].forEach(n=>{i.querySelectorAll(n).forEach(o=>{o.classList.remove(...n.split(".").filter(Boolean)),o.style.border="2px solid #6F9FFF"})})}processModalDialogs(i){i.querySelectorAll(".modal-dialog.modal-content").forEach(n=>{n.classList.remove("mfp-hide");let o=i.createElement("div");for(o.setAttribute("style","border: 2px dashed #666; padding: 8px; border-radius: 4px;");n.firstChild;)o.appendChild(n.firstChild);n.appendChild(o)})}updateRelativeURLs(i,e){let n=i.querySelectorAll("a"),o=i.querySelectorAll("img");n.forEach(l=>{let u=l.getAttribute("href");u&&(u.startsWith("/")?(l.setAttribute("href",`${e}${u}`),l.setAttribute("target","_blank")):/^(http|https):\/\//.test(u)&&l.setAttribute("target","_blank"))}),o.forEach(l=>{let u=l.getAttribute("src");u&&u.startsWith("/")&&l.setAttribute("src",`${e}${u}`)})}addToc(i){let e=i.querySelector(".section.mwsinpagetoc");if(!e)return;let n=Array.from(e.querySelectorAll("a")).map(l=>{let u=l.getAttribute("href"),h=l.textContent?.trim();return u?.startsWith("#")&&h?{id:u.slice(1),text:h}:null}).filter(l=>l!==null);if(!n.length)return;i.querySelectorAll("h2, h3, h4, h5, h6").forEach(l=>{let u=l.textContent?.trim();if(!u)return;let h=n.find(f=>f.text===u);h&&l.setAttribute("id",h.id)})}loadSampleDataset(i="webpage"){return he(this,null,function*(){let e,n;switch(i){case"snippet":e=yield this.extractContent(Fd),n=yield this.formatHtml(Id);break;case"word":e=yield this.extractContent(Md),n=yield this.formatHtml(Ld);break;default:e=yield this.extractContent(Ad),n=yield this.formatHtml(kd);break}this.uploadState.setUploadData({originalUrl:`Original ${i}`,originalHtml:e,modifiedUrl:`Modified ${i}`,modifiedHtml:n})})}static \u0275fac=function(e){return new(e||t)(z(Wt))};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};var hy=({dt:t})=>`
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
`,fy={root:({instance:t,props:i})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large","p-invalid":i.invalid,"p-variant-filled":i.variant==="filled","p-inputtext-fluid":i.fluid}]},Vd=(()=>{class t extends pe{name="inputtext";theme=hy;classes=fy;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Ud=(()=>{class t extends ge{ngModel;variant;fluid;pSize;filled;_componentStyle=M(Vd);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ye(this.fluid)?!!n:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)(j(Ot,8))};static \u0275dir=se({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,o){if(n&1&&Q("input",function(u){return o.onInput(u)}),n&2){let l;at("p-filled",o.filled)("p-variant-filled",((l=o.variant)!==null&&l!==void 0?l:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",V],pSize:"pSize"},features:[oe([Vd]),O]})}return t})(),jd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var gy=["*"],by=({dt:t})=>`
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
`,yy={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},Hd=(()=>{class t extends pe{name="inputgroup";theme=by;classes=yy;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Vs=(()=>{class t extends ge{style;styleClass;_componentStyle=M(Hd);static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(n,o){n&2&&(F("data-pc-name","inputgroup"),kt(o.style),K(o.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[oe([Hd]),O],ngContentSelectors:gy,decls:1,vars:0,template:function(n,o){n&1&&(tt(),Ke(0))},dependencies:[me,ae],encapsulation:2})}return t})(),zd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Vs,ae,ae]})}return t})();var _y=["*"],Cy={root:"p-inputgroupaddon"},qd=(()=>{class t extends pe{name="inputgroupaddon";classes=Cy;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Us=(()=>{class t extends ge{style;styleClass;_componentStyle=M(qd);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(n,o){n&2&&(F("data-pc-name","inputgroupaddon"),kt(o.hostStyle),K(o.styleClass),at("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[oe([qd]),O],ngContentSelectors:_y,decls:1,vars:0,template:function(n,o){n&1&&(tt(),Ke(0))},dependencies:[me],encapsulation:2})}return t})(),Wd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Us,ae,ae]})}return t})();var Sy=["container"],Dy=["icon"],xy=["closeicon"],Ey=["*"],Ty=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),Ay=t=>({value:"visible()",params:t}),ky=t=>({closeCallback:t});function Fy(t,i){t&1&&$e(0)}function Iy(t,i){if(t&1&&T(0,Fy,1,0,"ng-container",7),t&2){let e=S(2);g("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function My(t,i){if(t&1&&L(0,"i",3),t&2){let e=S(2);g("ngClass",e.icon)}}function Ly(t,i){if(t&1&&L(0,"span",9),t&2){let e=S(3);g("ngClass",e.cx("text"))("innerHTML",e.text,so)}}function Ry(t,i){if(t&1&&(D(0,"div"),T(1,Ly,1,2,"span",8),x()),t&2){let e=S(2);b(),g("ngIf",!e.escape)}}function Oy(t,i){if(t&1&&(D(0,"span",5),be(1),x()),t&2){let e=S(3);g("ngClass",e.cx("text")),b(),Oe(e.text)}}function By(t,i){if(t&1&&T(0,Oy,2,2,"span",10),t&2){let e=S(2);g("ngIf",e.escape&&e.text)}}function Py(t,i){t&1&&$e(0)}function Ny(t,i){if(t&1&&T(0,Py,1,0,"ng-container",11),t&2){let e=S(2);g("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",wt(2,ky,e.close.bind(e)))}}function $y(t,i){if(t&1&&(D(0,"span",5),Ke(1),x()),t&2){let e=S(2);g("ngClass",e.cx("text"))}}function Vy(t,i){if(t&1&&L(0,"i",13),t&2){let e=S(3);g("ngClass",e.closeIcon)}}function Uy(t,i){t&1&&$e(0)}function jy(t,i){if(t&1&&T(0,Uy,1,0,"ng-container",7),t&2){let e=S(3);g("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Hy(t,i){t&1&&L(0,"TimesIcon",14)}function zy(t,i){if(t&1){let e=_e();D(0,"button",12),Q("click",function(o){q(e);let l=S(2);return W(l.close(o))}),T(1,Vy,1,1,"i",13)(2,jy,1,1,"ng-container")(3,Hy,1,0,"TimesIcon",14),x()}if(t&2){let e=S(2);F("aria-label",e.closeAriaLabel),b(),Xe(e.closeIcon?1:-1),b(),Xe(e.closeIconTemplate||e._closeIconTemplate?2:-1),b(),Xe(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function qy(t,i){if(t&1&&(D(0,"div",1)(1,"div",2),T(2,Iy,1,1,"ng-container")(3,My,1,1,"i",3)(4,Ry,2,1,"div",4)(5,By,1,1,"ng-template",null,0,Ht)(7,Ny,1,4,"ng-container")(8,$y,2,1,"span",5)(9,zy,4,4,"button",6),x()()),t&2){let e=Ct(6),n=S();g("ngClass",n.containerClass)("@messageAnimation",wt(13,Ay,uo(10,Ty,n.showTransitionOptions,n.hideTransitionOptions))),F("aria-live","polite")("role","alert"),b(2),Xe(n.iconTemplate||n._iconTemplate?2:-1),b(),Xe(n.icon?3:-1),b(),g("ngIf",!n.escape)("ngIfElse",e),b(3),Xe(n.containerTemplate||n._containerTemplate?7:8),b(2),Xe(n.closable?9:-1)}}var Wy=({dt:t})=>`
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
}`,Gy={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Gd=(()=>{class t extends pe{name="message";theme=Wy;classes=Gy;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var on=(()=>{class t extends ge{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new Y;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",n=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${n}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Re(!0);_componentStyle=M(Gd);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-message"]],contentQueries:function(n,o,l){if(n&1&&(ue(l,Sy,4),ue(l,Dy,4),ue(l,xy,4),ue(l,xt,4)),n&2){let u;X(u=J())&&(o.containerTemplate=u.first),X(u=J())&&(o.iconTemplate=u.first),X(u=J())&&(o.closeIconTemplate=u.first),X(u=J())&&(o.templates=u)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",V],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",V],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[oe([Gd]),O],ngContentSelectors:Ey,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(n,o){n&1&&(tt(),T(0,qy,10,15,"div",1)),n&2&&Xe(o.visible()?0:-1)},dependencies:[me,nt,He,ut,Qo,Xo,ae],encapsulation:2,data:{animation:[or("messageAnimation",[qn(":enter",[vn({opacity:0,transform:"translateY(-25%)"}),zn("{{showTransitionParams}}")]),qn(":leave",[zn("{{hideTransitionParams}}",vn({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),Kd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[on,ae,ae]})}return t})();function Yy(t,i){t&1&&(L(0,"div",16),Te(1,"translate")),t&2&&g("@slideDown",void 0)("innerHTML",Ae(1,2,"page.upload.url.example"),so)}function Zy(t,i){t&1&&(D(0,"div"),be(1),Te(2,"translate"),x()),t&2&&(b(),rt(" ",Ae(2,1,"page.upload.url.error.required"),". "))}function Qy(t,i){t&1&&(D(0,"div"),be(1),Te(2,"translate"),x()),t&2&&(b(),rt(" ",Ae(2,1,"page.upload.url.error.pattern")," "))}function Xy(t,i){if(t&1&&(D(0,"div",17),T(1,Zy,3,3,"div",18)(2,Qy,3,3,"div",18),x()),t&2){S();let e=Ct(17);b(),g("ngIf",e.errors==null?null:e.errors.required),b(),g("ngIf",e.errors==null?null:e.errors.pattern)}}function Jy(t,i){if(t&1&&L(0,"p-message",19),t&2){let e=S();g("text",e.error)}}function ev(t,i){if(t&1){let e=_e();D(0,"p-button",20),Te(1,"translate"),Q("onClick",function(){q(e);let o=S();return W(o.loadSampleData())}),x()}t&2&&g("label",Ae(1,1,"page.upload.sample"))}var Yd=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.url.modified":"page.upload.url.original"}uploadComplete=new Y;userInput="";error="";loading=!1;showHelp=!1;getHtmlContent(){return he(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.url.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.fetchAndProcess(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.userInput,originalHtml:n,modifiedUrl:this.userInput,modifiedHtml:n}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:this.userInput,modifiedHtml:n}),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return he(this,null,function*(){yield this.urlDataService.loadSampleDataset("webpage"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(j(In),j(Wt),j(en))};static \u0275cmp=H({type:t,selectors:[["ca-upload-url"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:25,vars:22,consts:[["form","ngForm"],["urlField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"pi","pi-question-circle","text-primary","cursor-pointer",3,"click","ariaLabel"],["class","text-sm mt-2",3,"innerHTML",4,"ngIf"],[1,"mt-3"],["for","userInput",1,"font-semibold"],[1,"pi","pi-globe"],["id","userInput","pInputText","","type","url","name","userInput","required","","pattern","https?://.+","autocomplete","url","fluid","",1,"w-full",3,"ngModelChange","ngModel","placeholder"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-sm","mt-2",3,"innerHTML"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let o=_e();D(0,"form",2,0),Q("ngSubmit",function(){return q(o),W(n.getHtmlContent())}),D(2,"fieldset",3)(3,"legend",4),be(4),Te(5,"translate"),D(6,"i",5),Te(7,"translate"),Q("click",function(){return q(o),W(n.showHelp=!n.showHelp)}),x()(),T(8,Yy,2,4,"div",6),D(9,"div",7)(10,"label",8),be(11),Te(12,"translate"),x(),D(13,"p-inputGroup")(14,"p-inputgroup-addon"),L(15,"i",9),x(),D(16,"input",10,1),Te(18,"translate"),mi("ngModelChange",function(u){return q(o),fi(n.userInput,u)||(n.userInput=u),W(u)}),x()(),T(19,Xy,3,2,"div",11),x(),T(20,Jy,1,1,"p-message",12),D(21,"div",13),L(22,"p-button",14),Te(23,"translate"),T(24,ev,2,3,"p-button",15),x()()()}if(e&2){let o=Ct(1),l=Ct(17);b(4),rt(" ",Ae(5,12,"page.upload.url.legend")," "),b(2),g("ariaLabel",Ae(7,14,"page.upload.url.toggleHelp")),b(2),g("ngIf",n.showHelp),b(3),Oe(Ae(12,16,n.labelKey)),b(5),hi("ngModel",n.userInput),g("placeholder",Ae(18,18,"page.upload.url.placeholder")),b(3),g("ngIf",l.invalid&&l.touched),b(),g("ngIf",n.error),b(2),g("label",Ae(23,20,"page.upload.continue"))("loading",n.loading)("disabled",o.invalid),b(2),g("ngIf",n.showSampleDataButton)}},dependencies:[me,He,Dn,Sn,En,jo,ki,Fi,Vo,Tr,Cs,Ot,Er,Pi,rn,jd,Ud,zd,Vs,Wd,Us,Kd,on],styles:["[_nghost-%COMP%]{display:block}"],data:{animation:[or("slideDown",[ho("void",vn({opacity:0,transform:"translateY(-20px)"})),ho("*",vn({opacity:1,transform:"translateY(0)"})),qn(":enter",zn("200ms ease-out")),qn(":leave",zn("100ms ease-in",vn({opacity:0,transform:"translateY(-10px)"})))])]}})};var tv=({dt:t})=>`
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
`,nv={root:({instance:t,props:i})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":i.autoResize,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":i.fluid}]},Zd=(()=>{class t extends pe{name="textarea";theme=tv;classes=nv;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Qd=(()=>{class t extends ge{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new Y;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=M(Zd);constructor(e,n){super(),this.ngModel=e,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(j(Ot,8),j(Rt,8))};static \u0275dir=se({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,o){n&1&&Q("input",function(u){return o.onInput(u)}),n&2&&at("p-filled",o.filled)("p-textarea-resizable",o.autoResize)("p-variant-filled",o.variant==="filled"||o.config.inputStyle()==="filled"||o.config.inputVariant()==="filled")("p-textarea-fluid",o.hasFluid)("p-textarea-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-textarea-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",V],variant:"variant",fluid:[2,"fluid","fluid",V],pSize:"pSize"},outputs:{onResize:"onResize"},features:[oe([Zd]),O]})}return t})(),Xd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();function rv(t,i){t&1&&(D(0,"div"),be(1),Te(2,"translate"),x()),t&2&&(b(),rt(" ",Ae(2,1,"page.upload.paste.error.required")," "))}function ov(t,i){if(t&1&&(D(0,"div",13),T(1,rv,3,3,"div",14),x()),t&2){S();let e=Ct(11);b(),g("ngIf",e.errors==null?null:e.errors.required)}}function av(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=S();g("text",e.error)}}function sv(t,i){if(t&1){let e=_e();D(0,"p-button",16),Te(1,"translate"),Q("onClick",function(){q(e);let o=S();return W(o.loadSampleData())}),x()}t&2&&g("label",Ae(1,1,"page.upload.sample"))}var Jd=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.paste.modified":"page.upload.paste.original"}uploadComplete=new Y;userInput="";error="";loading=!1;getPasteContent(){return he(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.paste.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.extractContent(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:"Copy/Paste",originalHtml:n,modifiedUrl:"Copy/Paste",modifiedHtml:n}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:"Copy/Paste",modifiedHtml:n}),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return he(this,null,function*(){yield this.urlDataService.loadSampleDataset("snippet"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(j(In),j(Wt),j(en))};static \u0275cmp=H({type:t,selectors:[["ca-upload-paste"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:18,vars:15,consts:[["form","ngForm"],["inputField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"mt-3"],["for","source",1,"font-semibold"],["type","text","id","source","pTextarea","","rows","3","name","userInput","required","","fluid","",1,"w-full",3,"ngModelChange","ngModel"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let o=_e();D(0,"form",2,0),Q("ngSubmit",function(){return q(o),W(n.getPasteContent())}),D(2,"fieldset",3)(3,"legend",4),be(4),Te(5,"translate"),x(),D(6,"div",5)(7,"label",6),be(8),Te(9,"translate"),x(),D(10,"textarea",7,1),mi("ngModelChange",function(u){return q(o),fi(n.userInput,u)||(n.userInput=u),W(u)}),x(),T(12,ov,2,1,"div",8),x(),T(13,av,1,1,"p-message",9),D(14,"div",10),L(15,"p-button",11),Te(16,"translate"),T(17,sv,2,3,"p-button",12),x()()()}if(e&2){let o=Ct(1),l=Ct(11);b(4),rt(" ",Ae(5,9,"page.upload.paste.legend")," "),b(4),Oe(Ae(9,11,n.labelKey)),b(2),hi("ngModel",n.userInput),b(2),g("ngIf",l.invalid&&l.touched),b(),g("ngIf",n.error),b(2),g("label",Ae(16,13,"page.upload.continue"))("loading",n.loading)("disabled",o.invalid),b(2),g("ngIf",n.showSampleDataButton)}},dependencies:[me,He,Dn,Sn,En,jo,ki,Fi,Vo,Tr,Ot,Er,Pi,rn,Xd,Qd,on],styles:["[_nghost-%COMP%]{display:block}"]})};var lv=["content"],cv=(t,i)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":i}),uv=t=>({$implicit:t});function dv(t,i){if(t&1&&(D(0,"div"),be(1),x()),t&2){let e=S(2);bn("display",e.value!=null&&e.value!==0?"flex":"none"),F("data-pc-section","label"),b(),Ic("",e.value,"",e.unit,"")}}function pv(t,i){t&1&&$e(0)}function hv(t,i){if(t&1&&(D(0,"div",3)(1,"div",4),T(2,dv,2,5,"div",5)(3,pv,1,0,"ng-container",6),x()()),t&2){let e=S();K(e.valueStyleClass),bn("width",e.value+"%")("background",e.color),g("ngClass","p-progressbar-value p-progressbar-value-animate"),F("data-pc-section","value"),b(2),g("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),b(),g("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",wt(11,uv,e.value))}}function fv(t,i){if(t&1&&(D(0,"div",7),L(1,"div",8),x()),t&2){let e=S();K(e.valueStyleClass),g("ngClass","p-progressbar-indeterminate-container"),F("data-pc-section","container"),b(),bn("background",e.color),F("data-pc-section","value")}}var mv=({dt:t})=>`
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
`,gv={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},ep=(()=>{class t extends pe{name="progressbar";theme=mv;classes=gv;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var js=(()=>{class t extends ge{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=M(ep);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(n,o,l){if(n&1&&(ue(l,lv,4),ue(l,xt,4)),n&2){let u;X(u=J())&&(o.contentTemplate=u.first),X(u=J())&&(o.templates=u)}},inputs:{value:[2,"value","value",st],showValue:[2,"showValue","showValue",V],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[oe([ep]),O],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(n,o){n&1&&(D(0,"div",0),T(1,hv,4,13,"div",1)(2,fv,2,7,"div",2),x()),n&2&&(K(o.styleClass),g("ngStyle",o.style)("ngClass",uo(12,cv,o.mode==="determinate",o.mode==="indeterminate")),F("aria-valuemin",0)("aria-valuenow",o.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",o.value+o.unit),b(),g("ngIf",o.mode==="determinate"),b(),g("ngIf",o.mode==="indeterminate"))},dependencies:[me,nt,He,ut,It,ae],encapsulation:2,changeDetection:0})}return t})(),tF=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[js,ae,ae]})}return t})();var bv=["file"],yv=["header"],tp=["content"],vv=["toolbar"],_v=["chooseicon"],Cv=["filelabel"],wv=["uploadicon"],Sv=["cancelicon"],Dv=["empty"],xv=["advancedfileinput"],Ev=["basicfileinput"],Tv=(t,i,e,n,o)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,uploadCallback:o}),Av=(t,i,e,n,o,l,u,h)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,removeUploadedFileCallback:o,removeFileCallback:l,progress:u,messages:h}),kv=t=>({$implicit:t});function Fv(t,i){if(t&1&&L(0,"span"),t&2){let e=S(3);K(e.chooseIcon),F("aria-label",!0)("data-pc-section","chooseicon")}}function Iv(t,i){t&1&&L(0,"PlusIcon"),t&2&&F("aria-label",!0)("data-pc-section","chooseicon")}function Mv(t,i){}function Lv(t,i){t&1&&T(0,Mv,0,0,"ng-template")}function Rv(t,i){if(t&1&&(D(0,"span"),T(1,Lv,1,0,null,11),x()),t&2){let e=S(4);F("aria-label",!0)("data-pc-section","chooseicon"),b(),g("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function Ov(t,i){if(t&1&&(We(0),T(1,Iv,1,2,"PlusIcon",9)(2,Rv,2,3,"span",9),Ge()),t&2){let e=S(3);b(),g("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),b(),g("ngIf",e.chooseIconTemplate||e._chooseIconTemplate)}}function Bv(t,i){if(t&1&&L(0,"span",21),t&2){let e=S(4);g("ngClass",e.uploadIcon),F("aria-hidden",!0)}}function Pv(t,i){t&1&&L(0,"UploadIcon")}function Nv(t,i){}function $v(t,i){t&1&&T(0,Nv,0,0,"ng-template")}function Vv(t,i){if(t&1&&(D(0,"span"),T(1,$v,1,0,null,11),x()),t&2){let e=S(5);F("aria-hidden",!0),b(),g("ngTemplateOutlet",e.uploadIconTemplate||e._uploadIconTemplate)}}function Uv(t,i){if(t&1&&(We(0),T(1,Pv,1,0,"UploadIcon",9)(2,Vv,2,2,"span",9),Ge()),t&2){let e=S(4);b(),g("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),b(),g("ngIf",e.uploadIconTemplate||e._uploadIconTemplate)}}function jv(t,i){if(t&1){let e=_e();D(0,"p-button",19),Q("onClick",function(){q(e);let o=S(3);return W(o.upload())}),T(1,Bv,1,2,"span",20)(2,Uv,3,2,"ng-container",9),x()}if(t&2){let e=S(3);g("label",e.uploadButtonLabel)("disabled",!e.hasFiles()||e.isFileLimitExceeded())("styleClass","p-fileupload-upload-button "+e.uploadStyleClass)("buttonProps",e.uploadButtonProps),b(),g("ngIf",e.uploadIcon),b(),g("ngIf",!e.uploadIcon)}}function Hv(t,i){if(t&1&&L(0,"span",21),t&2){let e=S(4);g("ngClass",e.cancelIcon)}}function zv(t,i){t&1&&L(0,"TimesIcon"),t&2&&F("aria-hidden",!0)}function qv(t,i){}function Wv(t,i){t&1&&T(0,qv,0,0,"ng-template")}function Gv(t,i){if(t&1&&(D(0,"span"),T(1,Wv,1,0,null,11),x()),t&2){let e=S(5);F("aria-hidden",!0),b(),g("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function Kv(t,i){if(t&1&&(We(0),T(1,zv,1,1,"TimesIcon",9)(2,Gv,2,2,"span",9),Ge()),t&2){let e=S(4);b(),g("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),b(),g("ngIf",e.cancelIconTemplate||e._cancelIconTemplate)}}function Yv(t,i){if(t&1){let e=_e();D(0,"p-button",19),Q("onClick",function(){q(e);let o=S(3);return W(o.clear())}),T(1,Hv,1,1,"span",20)(2,Kv,3,2,"ng-container",9),x()}if(t&2){let e=S(3);g("label",e.cancelButtonLabel)("disabled",!e.hasFiles()||e.uploading)("styleClass","p-fileupload-cancel-button "+e.cancelStyleClass)("buttonProps",e.cancelButtonProps),b(),g("ngIf",e.cancelIcon),b(),g("ngIf",!e.cancelIcon)}}function Zv(t,i){if(t&1){let e=_e();We(0),D(1,"p-button",16),Q("focus",function(){q(e);let o=S(2);return W(o.onFocus())})("blur",function(){q(e);let o=S(2);return W(o.onBlur())})("onClick",function(){q(e);let o=S(2);return W(o.choose())})("keydown.enter",function(){q(e);let o=S(2);return W(o.choose())}),D(2,"input",7,0),Q("change",function(o){q(e);let l=S(2);return W(l.onFileSelect(o))}),x(),T(4,Fv,1,4,"span",17)(5,Ov,3,2,"ng-container",9),x(),T(6,jv,3,6,"p-button",18)(7,Yv,3,6,"p-button",18),Ge()}if(t&2){let e=S(2);b(),g("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled||e.isChooseDisabled())("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),F("data-pc-section","choosebutton"),b(),g("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),F("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),b(2),g("ngIf",e.chooseIcon),b(),g("ngIf",!e.chooseIcon),b(),g("ngIf",!e.auto&&e.showUploadButton),b(),g("ngIf",!e.auto&&e.showCancelButton)}}function Qv(t,i){t&1&&$e(0)}function Xv(t,i){t&1&&$e(0)}function Jv(t,i){if(t&1&&L(0,"p-progressbar",22),t&2){let e=S(2);g("value",e.progress)("showValue",!1)}}function e2(t,i){if(t&1&&L(0,"p-message",14),t&2){let e=i.$implicit;g("severity",e.severity)("text",e.text)}}function t2(t,i){if(t&1){let e=_e();D(0,"img",33),Q("error",function(o){q(e);let l=S(5);return W(l.imageError(o))}),x()}if(t&2){let e=S().$implicit,n=S(4);g("src",e.objectURL,Ec)("width",n.previewWidth)}}function n2(t,i){t&1&&L(0,"TimesIcon")}function i2(t,i){}function r2(t,i){t&1&&T(0,i2,0,0,"ng-template")}function o2(t,i){if(t&1&&T(0,n2,1,0,"TimesIcon",9)(1,r2,1,0,null,11),t&2){let e=S(5);g("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),b(),g("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function a2(t,i){if(t&1){let e=_e();D(0,"div",24),T(1,t2,1,2,"img",27),D(2,"div",28)(3,"div",29),be(4),x(),D(5,"span",30),be(6),x()(),D(7,"div",31)(8,"p-button",32),Q("onClick",function(o){let l=q(e).index,u=S(4);return W(u.remove(o,l))}),T(9,o2,2,2,"ng-template",null,2,Ht),x()()()}if(t&2){let e=i.$implicit,n=S(4);b(),g("ngIf",n.isImage(e)),b(3),Oe(e.name),b(2),Oe(n.formatSize(e.size)),b(2),g("disabled",n.uploading)("styleClass","p-fileupload-file-remove-button "+n.removeStyleClass)}}function s2(t,i){if(t&1&&T(0,a2,11,5,"div",26),t&2){let e=S(3);g("ngForOf",e.files)}}function l2(t,i){}function c2(t,i){if(t&1&&T(0,l2,0,0,"ng-template",25),t&2){let e=S(3);g("ngForOf",e.files)("ngForTemplate",e.fileTemplate||e._fileTemplate)}}function u2(t,i){if(t&1&&(D(0,"div",23),T(1,s2,1,1,"div",24)(2,c2,1,2,null,25),x()),t&2){let e=S(2);b(),Xe(!e.fileTemplate&&!e._fileTemplate?1:-1),b(),Xe(e.fileTemplate||e._fileTemplate?2:-1)}}function d2(t,i){t&1&&$e(0)}function p2(t,i){t&1&&$e(0)}function h2(t,i){if(t&1&&T(0,p2,1,0,"ng-container",11),t&2){let e=S(2);g("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function f2(t,i){if(t&1){let e=_e();D(0,"div",6)(1,"input",7,0),Q("change",function(o){q(e);let l=S();return W(l.onFileSelect(o))}),x(),D(3,"div",8),T(4,Zv,8,15,"ng-container",9)(5,Qv,1,0,"ng-container",10)(6,Xv,1,0,"ng-container",11),x(),D(7,"div",12,1),Q("dragenter",function(o){q(e);let l=S();return W(l.onDragEnter(o))})("dragleave",function(o){q(e);let l=S();return W(l.onDragLeave(o))})("drop",function(o){q(e);let l=S();return W(l.onDrop(o))}),T(9,Jv,1,2,"p-progressbar",13),Va(10,e2,1,2,"p-message",14,$a),T(12,u2,3,2,"div",15)(13,d2,1,0,"ng-container",10)(14,h2,1,1,"ng-container"),x()()}if(t&2){let e=S();K(e.styleClass),g("ngClass","p-fileupload p-fileupload-advanced p-component")("ngStyle",e.style),F("data-pc-name","fileupload")("data-pc-section","root"),b(),bn("display","none"),g("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),F("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),b(3),g("ngIf",!e.headerTemplate&&!e._headerTemplate),b(),g("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",po(24,Tv,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.upload.bind(e))),b(),g("ngTemplateOutlet",e.toolbarTemplate||e._toolbarTemplate),b(),F("data-pc-section","content"),b(2),g("ngIf",e.hasFiles()),b(),Ua(e.msgs),b(2),g("ngIf",e.hasFiles()),b(),g("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Lc(30,Av,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.removeUploadedFile.bind(e),e.remove.bind(e),e.progress,e.msgs)),b(),Xe((e.emptyTemplate||e._emptyTemplate)&&!e.hasFiles()&&!e.hasUploadedFiles()?14:-1)}}function m2(t,i){if(t&1&&L(0,"p-message",14),t&2){let e=i.$implicit;g("severity",e.severity)("text",e.text)}}function g2(t,i){if(t&1&&L(0,"span",37),t&2){let e=S(4);g("ngClass",e.uploadIcon)}}function b2(t,i){t&1&&L(0,"UploadIcon",40),t&2&&g("styleClass","p-button-icon p-button-icon-left")}function y2(t,i){}function v2(t,i){t&1&&T(0,y2,0,0,"ng-template")}function _2(t,i){if(t&1&&(D(0,"span",41),T(1,v2,1,0,null,11),x()),t&2){let e=S(5);b(),g("ngTemplateOutlet",e._uploadIconTemplate||e.uploadIconTemplate)}}function C2(t,i){if(t&1&&(We(0),T(1,b2,1,1,"UploadIcon",38)(2,_2,2,1,"span",39),Ge()),t&2){let e=S(4);b(),g("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),b(),g("ngIf",e._uploadIconTemplate||e.uploadIconTemplate)}}function w2(t,i){if(t&1&&T(0,g2,1,1,"span",36)(1,C2,3,2,"ng-container",9),t&2){let e=S(3);g("ngIf",e.uploadIcon),b(),g("ngIf",!e.uploadIcon)}}function S2(t,i){if(t&1&&L(0,"span",43),t&2){let e=S(4);g("ngClass",e.chooseIcon)}}function D2(t,i){t&1&&L(0,"PlusIcon"),t&2&&F("data-pc-section","uploadicon")}function x2(t,i){}function E2(t,i){t&1&&T(0,x2,0,0,"ng-template")}function T2(t,i){if(t&1&&(We(0),T(1,D2,1,1,"PlusIcon",9)(2,E2,1,0,null,11),Ge()),t&2){let e=S(4);b(),g("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),b(),g("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function A2(t,i){if(t&1&&T(0,S2,1,1,"span",42)(1,T2,3,2,"ng-container",9),t&2){let e=S(3);g("ngIf",e.chooseIcon),b(),g("ngIf",!e.chooseIcon)}}function k2(t,i){if(t&1&&T(0,w2,2,2)(1,A2,2,2),t&2){let e=S(2);Xe(e.hasFiles()&&!e.auto?0:1)}}function F2(t,i){if(t&1&&(D(0,"span"),be(1),x()),t&2){let e=S(3);K(e.cx("filelabel")),b(),rt(" ",e.basicFileChosenLabel()," ")}}function I2(t,i){t&1&&$e(0)}function M2(t,i){if(t&1&&T(0,I2,1,0,"ng-container",10),t&2){let e=S(3);g("ngTemplateOutlet",e.fileLabelTemplate||e._fileLabelTemplate)("ngTemplateOutletContext",wt(2,kv,e.files))}}function L2(t,i){if(t&1&&T(0,F2,2,3,"span",44)(1,M2,1,4,"ng-container"),t&2){let e=S(2);Xe(!e.fileLabelTemplate&&!e._fileLabelTemplate?0:1)}}function R2(t,i){if(t&1){let e=_e();D(0,"div",21),Va(1,m2,1,2,"p-message",14,$a),D(3,"p-button",34),Q("onClick",function(){q(e);let o=S();return W(o.onBasicUploaderClick())})("keydown",function(o){q(e);let l=S();return W(l.onBasicKeydown(o))}),T(4,k2,2,1,"ng-template",null,2,Ht),D(6,"input",35,3),Q("change",function(o){q(e);let l=S();return W(l.onFileSelect(o))})("focus",function(){q(e);let o=S();return W(o.onFocus())})("blur",function(){q(e);let o=S();return W(o.onBlur())}),x()(),T(8,L2,2,1),x()}if(t&2){let e=S();K(e.styleClass),g("ngClass","p-fileupload p-fileupload-basic p-component"),F("data-pc-name","fileupload"),b(),Ua(e.msgs),b(2),kt(e.style),g("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled)("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),b(3),g("accept",e.accept)("multiple",e.multiple)("disabled",e.disabled),F("aria-label",e.browseFilesLabel)("data-pc-section","input"),b(2),Xe(e.auto?-1:8)}}var O2=({dt:t})=>`
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
`,B2={root:({instance:t})=>`p-fileupload p-fileupload-${t.mode} p-component`,header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},np=(()=>{class t extends pe{name="fileupload";theme=O2;classes=B2;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Hs=(()=>{class t extends ge{name;url;method="post";multiple;accept;disabled;auto;withCredentials;maxFileSize;invalidFileSizeMessageSummary="{0}: Invalid file size, ";invalidFileSizeMessageDetail="maximum upload size is {0}.";invalidFileTypeMessageSummary="{0}: Invalid file type, ";invalidFileTypeMessageDetail="allowed file types: {0}.";invalidFileLimitMessageDetail="limit is {0} at most.";invalidFileLimitMessageSummary="Maximum number of files exceeded, ";style;styleClass;previewWidth=50;chooseLabel;uploadLabel;cancelLabel;chooseIcon;uploadIcon;cancelIcon;showUploadButton=!0;showCancelButton=!0;mode="advanced";headers;customUpload;fileLimit;uploadStyleClass;cancelStyleClass;removeStyleClass;chooseStyleClass;chooseButtonProps;uploadButtonProps={severity:"secondary"};cancelButtonProps={severity:"secondary"};onBeforeUpload=new Y;onSend=new Y;onUpload=new Y;onError=new Y;onClear=new Y;onRemove=new Y;onSelect=new Y;onProgress=new Y;uploadHandler=new Y;onImageError=new Y;onRemoveUploadedFile=new Y;fileTemplate;headerTemplate;contentTemplate;toolbarTemplate;chooseIconTemplate;fileLabelTemplate;uploadIconTemplate;cancelIconTemplate;emptyTemplate;advancedFileInput;basicFileInput;content;set files(e){this._files=[];for(let n=0;n<e.length;n++){let o=e[n];this.validate(o)&&(this.isImage(o)&&(o.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[n]))),this._files.push(e[n]))}}get files(){return this._files}get basicButtonLabel(){return this.auto||!this.hasFiles()?this.chooseLabel:this.uploadLabel??this.files[0].name}_files=[];progress=0;dragHighlight;msgs;uploadedFileCount=0;focus;uploading;duplicateIEEvent;translationSubscription;dragOverListener;uploadedFiles=[];sanitizer=M(rs);zone=M(jt);http=M(Ao);_componentStyle=M(np);ngOnInit(){super.ngOnInit(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()})}ngAfterViewInit(){super.ngAfterViewInit(),_n(this.platformId)&&this.mode==="advanced"&&this.zone.runOutsideAngular(()=>{this.content&&(this.dragOverListener=this.renderer.listen(this.content.nativeElement,"dragover",this.onDragOver.bind(this)))})}_headerTemplate;_contentTemplate;_toolbarTemplate;_chooseIconTemplate;_uploadIconTemplate;_cancelIconTemplate;_emptyTemplate;_fileTemplate;_fileLabelTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"file":this._fileTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"toolbar":this._toolbarTemplate=e.template;break;case"chooseicon":this._chooseIconTemplate=e.template;break;case"uploadicon":this._uploadIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"filelabel":this._fileLabelTemplate=e.template;break;default:this._fileTemplate=e.template;break}})}basicFileChosenLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles()?this.files&&this.files.length===1?this.files[0].name:this.config.getTranslation("fileChosenMessage")?.replace("{0}",this.files.length):this.config.getTranslation("noFileChosenMessage")||""}getTranslation(e){return this.config.getTranslation(e)}choose(){this.advancedFileInput?.nativeElement.click()}onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.msgs=[],this.multiple||(this.files=[]);let n=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let o=0;o<n.length;o++){let l=n[o];this.isFileSelected(l)||this.validate(l)&&(this.isImage(l)&&(l.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(n[o]))),this.files.push(n[o]))}this.onSelect.emit({originalEvent:e,files:n,currentFiles:this.files}),this.checkFileLimit(n),this.hasFiles()&&this.auto&&(this.mode!=="advanced"||!this.isFileLimitExceeded())&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()}isFileSelected(e){for(let n of this.files)if(n.name+n.type+n.size===e.name+e.type+e.size)return!0;return!1}isIE11(){if(_n(this.platformId))return!!this.document.defaultView.MSInputMethodContext&&!!this.document.documentMode}validate(e){if(this.msgs=this.msgs||[],this.accept&&!this.isFileTypeValid(e)){let n=`${this.invalidFileTypeMessageSummary.replace("{0}",e.name)} ${this.invalidFileTypeMessageDetail.replace("{0}",this.accept)}`;return this.msgs.push({severity:"error",text:n}),!1}if(this.maxFileSize&&e.size>this.maxFileSize){let n=`${this.invalidFileSizeMessageSummary.replace("{0}",e.name)} ${this.invalidFileSizeMessageDetail.replace("{0}",this.formatSize(this.maxFileSize))}`;return this.msgs.push({severity:"error",text:n}),!1}return!0}isFileTypeValid(e){let n=this.accept?.split(",").map(o=>o.trim());for(let o of n)if(this.isWildcard(o)?this.getTypeClass(e.type)===this.getTypeClass(o):e.type==o||this.getFileExtension(e).toLowerCase()===o.toLowerCase())return!0;return!1}getTypeClass(e){return e.substring(0,e.indexOf("/"))}isWildcard(e){return e.indexOf("*")!==-1}getFileExtension(e){return"."+e.name.split(".").pop()}isImage(e){return/^image\//.test(e.type)}onImageLoad(e){window.URL.revokeObjectURL(e.src)}uploader(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.uploadHandler.emit({files:this.files}),this.cd.markForCheck();else{this.uploading=!0,this.msgs=[];let e=new FormData;this.onBeforeUpload.emit({formData:e});for(let n=0;n<this.files.length;n++)e.append(this.name,this.files[n],this.files[n].name);this.http.request(this.method,this.url,{body:e,headers:this.headers,reportProgress:!0,observe:"events",withCredentials:this.withCredentials}).subscribe(n=>{switch(n.type){case Lt.Sent:this.onSend.emit({originalEvent:n,formData:e});break;case Lt.Response:this.uploading=!1,this.progress=0,n.status>=200&&n.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.onUpload.emit({originalEvent:n,files:this.files})):this.onError.emit({files:this.files}),this.uploadedFiles.push(...this.files),this.clear();break;case Lt.UploadProgress:{n.loaded&&(this.progress=Math.round(n.loaded*100/n.total)),this.onProgress.emit({originalEvent:n,progress:this.progress});break}}this.cd.markForCheck()},n=>{this.uploading=!1,this.onError.emit({files:this.files,error:n})})}}clear(){this.files=[],this.uploadedFileCount=0,this.onClear.emit(),this.clearInputElement(),this.msgs=[],this.cd.markForCheck()}remove(e,n){this.clearInputElement(),this.onRemove.emit({originalEvent:e,file:this.files[n]}),this.files.splice(n,1),this.checkFileLimit(this.files)}removeUploadedFile(e){let n=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.onRemoveUploadedFile.emit({file:n,files:this.uploadedFiles})}isFileLimitExceeded(){let n=this.auto?this.files.length:this.files.length+this.uploadedFileCount;return this.fileLimit&&this.fileLimit<=n&&this.focus&&(this.focus=!1),this.fileLimit&&this.fileLimit<n}isChooseDisabled(){return this.auto?this.fileLimit&&this.fileLimit<=this.files.length:this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount}checkFileLimit(e){this.msgs??=[];let n=this.msgs.length>0&&this.fileLimit&&this.fileLimit<e.length;if(this.isFileLimitExceeded()||n){let o=`${this.invalidFileLimitMessageSummary.replace("{0}",this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}",this.fileLimit.toString())}`;this.msgs.push({severity:"error",text:o})}else this.msgs=this.msgs.filter(o=>!o.text.includes(this.invalidFileLimitMessageSummary))}clearInputElement(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.advancedFileInput.nativeElement.value=""),this.basicFileInput&&this.basicFileInput.nativeElement&&(this.basicFileInput.nativeElement.value="")}clearIEInput(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.duplicateIEEvent=!0,this.advancedFileInput.nativeElement.value="")}hasFiles(){return this.files&&this.files.length>0}hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0}onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())}onDragOver(e){this.disabled||(zt(this.content?.nativeElement,"p-fileupload-highlight"),this.dragHighlight=!0,e.stopPropagation(),e.preventDefault())}onDragLeave(e){this.disabled||qt(this.content?.nativeElement,"p-fileupload-highlight")}onDrop(e){if(!this.disabled){qt(this.content?.nativeElement,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();let n=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||n&&n.length===1)&&this.onFileSelect(e)}}onFocus(){this.focus=!0}onBlur(){this.focus=!1}formatSize(e){let l=this.getTranslation(An.FILE_SIZE_TYPES);if(e===0)return`0 ${l[0]}`;let u=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,u)).toFixed(3)} ${l[u]}`}upload(){this.hasFiles()&&this.uploader()}onBasicUploaderClick(){this.basicFileInput?.nativeElement.click()}onBasicKeydown(e){switch(e.code){case"Space":case"Enter":this.onBasicUploaderClick(),e.preventDefault();break}}imageError(e){this.onImageError.emit(e)}getBlockableElement(){return this.el.nativeElement.children[0]}get chooseButtonLabel(){return this.chooseLabel||this.config.getTranslation(An.CHOOSE)}get uploadButtonLabel(){return this.uploadLabel||this.config.getTranslation(An.UPLOAD)}get cancelButtonLabel(){return this.cancelLabel||this.config.getTranslation(An.CANCEL)}get browseFilesLabel(){return this.config.getTranslation(An.ARIA)[An.BROWSE_FILES]}get pendingLabel(){return this.config.getTranslation(An.PENDING)}ngOnDestroy(){this.content&&this.content.nativeElement&&this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-fileupload"],["p-fileUpload"]],contentQueries:function(n,o,l){if(n&1&&(ue(l,bv,4),ue(l,yv,4),ue(l,tp,4),ue(l,vv,4),ue(l,_v,4),ue(l,Cv,4),ue(l,wv,4),ue(l,Sv,4),ue(l,Dv,4),ue(l,xt,4)),n&2){let u;X(u=J())&&(o.fileTemplate=u.first),X(u=J())&&(o.headerTemplate=u.first),X(u=J())&&(o.contentTemplate=u.first),X(u=J())&&(o.toolbarTemplate=u.first),X(u=J())&&(o.chooseIconTemplate=u.first),X(u=J())&&(o.fileLabelTemplate=u.first),X(u=J())&&(o.uploadIconTemplate=u.first),X(u=J())&&(o.cancelIconTemplate=u.first),X(u=J())&&(o.emptyTemplate=u.first),X(u=J())&&(o.templates=u)}},viewQuery:function(n,o){if(n&1&&(yn(xv,5),yn(Ev,5),yn(tp,5)),n&2){let l;X(l=J())&&(o.advancedFileInput=l.first),X(l=J())&&(o.basicFileInput=l.first),X(l=J())&&(o.content=l.first)}},inputs:{name:"name",url:"url",method:"method",multiple:[2,"multiple","multiple",V],accept:"accept",disabled:[2,"disabled","disabled",V],auto:[2,"auto","auto",V],withCredentials:[2,"withCredentials","withCredentials",V],maxFileSize:[2,"maxFileSize","maxFileSize",st],invalidFileSizeMessageSummary:"invalidFileSizeMessageSummary",invalidFileSizeMessageDetail:"invalidFileSizeMessageDetail",invalidFileTypeMessageSummary:"invalidFileTypeMessageSummary",invalidFileTypeMessageDetail:"invalidFileTypeMessageDetail",invalidFileLimitMessageDetail:"invalidFileLimitMessageDetail",invalidFileLimitMessageSummary:"invalidFileLimitMessageSummary",style:"style",styleClass:"styleClass",previewWidth:[2,"previewWidth","previewWidth",st],chooseLabel:"chooseLabel",uploadLabel:"uploadLabel",cancelLabel:"cancelLabel",chooseIcon:"chooseIcon",uploadIcon:"uploadIcon",cancelIcon:"cancelIcon",showUploadButton:[2,"showUploadButton","showUploadButton",V],showCancelButton:[2,"showCancelButton","showCancelButton",V],mode:"mode",headers:"headers",customUpload:[2,"customUpload","customUpload",V],fileLimit:[2,"fileLimit","fileLimit",e=>st(e,null)],uploadStyleClass:"uploadStyleClass",cancelStyleClass:"cancelStyleClass",removeStyleClass:"removeStyleClass",chooseStyleClass:"chooseStyleClass",chooseButtonProps:"chooseButtonProps",uploadButtonProps:"uploadButtonProps",cancelButtonProps:"cancelButtonProps",files:"files"},outputs:{onBeforeUpload:"onBeforeUpload",onSend:"onSend",onUpload:"onUpload",onError:"onError",onClear:"onClear",onRemove:"onRemove",onSelect:"onSelect",onProgress:"onProgress",uploadHandler:"uploadHandler",onImageError:"onImageError",onRemoveUploadedFile:"onRemoveUploadedFile"},features:[oe([np]),O],decls:2,vars:2,consts:[["advancedfileinput",""],["content",""],["icon",""],["basicfileinput",""],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","file",3,"change","multiple","accept","disabled"],[1,"p-fileupload-header"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"p-fileupload-content",3,"dragenter","dragleave","drop"],[3,"value","showValue",4,"ngIf"],[3,"severity","text"],["class","p-fileupload-file-list",4,"ngIf"],[3,"focus","blur","onClick","keydown.enter","styleClass","disabled","label","buttonProps"],[3,"class",4,"ngIf"],[3,"label","disabled","styleClass","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","disabled","styleClass","buttonProps"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"value","showValue"],[1,"p-fileupload-file-list"],[1,"p-fileupload-file"],["ngFor","",3,"ngForOf","ngForTemplate"],["class","p-fileupload-file",4,"ngFor","ngForOf"],["class","p-fileupload-file-thumbnail",3,"src","width","error",4,"ngIf"],[1,"p-fileupload-file-info"],[1,"p-fileupload-file-name"],[1,"p-fileupload-file-size"],[1,"p-fileupload-file-actions"],["text","","rounded","","severity","danger",3,"onClick","disabled","styleClass"],[1,"p-fileupload-file-thumbnail",3,"error","src","width"],[3,"onClick","keydown","styleClass","disabled","label","buttonProps"],["type","file",3,"change","focus","blur","accept","multiple","disabled"],["class","p-button-icon p-button-icon-left",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-button-icon p-button-icon-left",4,"ngIf"],[3,"styleClass"],[1,"p-button-icon","p-button-icon-left"],["class","p-button-icon p-button-icon-left pi",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left","pi",3,"ngClass"],[3,"class"]],template:function(n,o){n&1&&T(0,f2,15,39,"div",4)(1,R2,9,16,"div",5),n&2&&(g("ngIf",o.mode==="advanced"),b(),g("ngIf",o.mode==="basic"))},dependencies:[me,nt,bi,He,ut,It,rn,js,on,vd,Cd,Qo,ae],encapsulation:2,changeDetection:0})}return t})(),ip=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Hs,ae,ae]})}return t})();function N2(t,i){}function $2(t,i){}function V2(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=S(2);g("text",e.error)}}function U2(t,i){if(t&1){let e=_e();D(0,"div",8)(1,"p",9),L(2,"i",10),be(3),L(4,"br"),be(5),x()(),T(6,V2,1,1,"p-message",11),D(7,"div",12)(8,"p-button",13),Te(9,"translate"),Q("onClick",function(){q(e);let o=S();return W(o.emitData())}),x(),D(10,"p-button",14),Te(11,"translate"),Q("onClick",function(){q(e);let o=S();return W(o.loadSampleData())}),x()()}if(t&2){let e=i.$implicit,n=S();b(3),Oe(e.name),b(2),rt("",n.formatSize(e.size)," "),b(),g("ngIf",n.error),b(2),g("label",Ae(9,7,"page.upload.continue"))("loading",n.loading)("disabled",!n.uploadedFileName),b(2),g("label",Ae(11,9,"page.upload.sample"))}}function j2(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=S(2);g("text",e.error)}}function H2(t,i){if(t&1){let e=_e();D(0,"p-button",14),Te(1,"translate"),Q("onClick",function(){q(e);let o=S(2);return W(o.loadSampleData())}),x()}t&2&&g("label",Ae(1,1,"page.upload.sample"))}function z2(t,i){if(t&1){let e=_e();D(0,"div",16),Q("click",function(){q(e),S();let o=Ct(5);return W(o.choose())}),L(1,"i",17),D(2,"p",18),be(3),Te(4,"translate"),x()(),T(5,j2,1,1,"p-message",11),D(6,"div",12)(7,"p-button",13),Te(8,"translate"),Q("onClick",function(){q(e);let o=S();return W(o.emitData())}),x(),T(9,H2,2,3,"p-button",19),x()}if(t&2){let e=S();b(3),Oe(Ae(4,6,"page.upload.word.instruction")),b(2),g("ngIf",e.error),b(2),g("label",Ae(8,8,"page.upload.continue"))("loading",e.loading)("disabled",!e.uploadedFileName),b(2),g("ngIf",e.showSampleDataButton)}}var rp=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;uploadComplete=new Y;error="";loading=!1;extractedHtml="";uploadedFileName="";formatSize(i){let o=this.translate.instant("fileSizeTypes"),l=this.translate.instant("fileSizeTypes.warning");if(!o||!Array.isArray(o))return console.warn(l),`${i} B`;if(i===0)return`0 ${o[0]}`;let u=Math.floor(Math.log(i)/Math.log(1024)),h=parseFloat((i/Math.pow(1024,u)).toFixed(1)),f=Math.min(u,o.length-1);return`${h} ${o[f]}`}getWordContent(i){this.loading=!0;let e=this.translate.instant("page.upload.word.error.upload"),n=this.translate.instant("page.upload.word.error.doc"),o=this.translate.instant("page.upload.error.unknown"),l=this.translate.instant("page.upload.word.error.try"),u=i.files?.[0];if(!u){this.error=e,this.loading=!1;return}this.uploadedFileName=u.name;let h=new FileReader;h.onload=()=>he(this,null,function*(){let f=h.result;try{let C=(yield(yield import("./chunk-LDKNIF4L.js")).convertToHtml({arrayBuffer:f})).value.trim();if(!C){this.error=n;return}this.extractedHtml=C}catch(y){this.error=`${l} ${y.message||y||o}`}finally{this.loading=!1}}),h.readAsArrayBuffer(u)}emitData(){this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.uploadedFileName,originalHtml:this.extractedHtml,modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.uploadComplete.emit()}loadSampleData(){return he(this,null,function*(){yield this.urlDataService.loadSampleDataset("word"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(j(In),j(Wt),j(en))};static \u0275cmp=H({type:t,selectors:[["ca-upload-word"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:14,vars:4,consts:[["fileUploadRef",""],["header",""],["content",""],["file",""],["empty",""],[1,"border-none","p-0","m-0"],[1,"font-bold","mb-3","p-0"],["name","word[]","accept",".docx","auto","true","maxFileSize","1000000","mode","advanced","styleClass","border-none",3,"uploadHandler","customUpload"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-solid","border-round","border-200","surface-100"],[1,"text-xl"],[1,"pi","pi-file-word","text-blue-500","text-2xl","mr-1"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"onClick","label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"onClick","label"],["severity","error",3,"text"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-dashed","border-round","border-200","surface-100","hover:surface-200","hover:border-primary-400","transition-colors","transition-duration-500","cursor-pointer",3,"click"],[1,"pi","pi-upload","border-2","border-circle","border-300","p-4","text-5xl","text-color-secondary"],[1,"m-0","mt-3"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"]],template:function(e,n){if(e&1){let o=_e();D(0,"fieldset",5)(1,"legend",6),be(2),Te(3,"translate"),x(),D(4,"p-fileupload",7,0),Q("uploadHandler",function(u){return q(o),W(n.getWordContent(u))}),T(6,N2,0,0,"ng-template",null,1,Ht)(8,$2,0,0,"ng-template",null,2,Ht)(10,U2,12,11,"ng-template",null,3,Ht)(12,z2,10,10,"ng-template",null,4,Ht),x()()}e&2&&(b(2),rt(" ",Ae(3,2,"page.upload.word.legend")," "),b(2),g("customUpload",!0))},dependencies:[me,He,Dn,Sn,En,ip,Hs,Pi,rn,on],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .p-fileupload-header{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload-content{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload .p-progressbar{margin:0!important;padding:0!important;height:0!important;display:none!important;border:none!important}  .p-fileupload{--p-fileupload-content-gap: 0rem}"]})};var op=class t{constructor(){}saveData(i,e){localStorage.setItem(i,e),console.log("Saved "+i+": "+e)}getData(i){return localStorage.getItem(i)}removeData(i){localStorage.removeItem(i),console.log("Removed "+i)}clearData(){localStorage.clear(),console.log("Removed all stored values")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};var q2=["checkboxicon"],W2=["input"],G2=()=>({"p-checkbox-input":!0}),K2=t=>({checked:t,class:"p-checkbox-icon"});function Y2(t,i){if(t&1&&L(0,"span",8),t&2){let e=S(3);g("ngClass",e.checkboxIcon),F("data-pc-section","icon")}}function Z2(t,i){t&1&&L(0,"CheckIcon",9),t&2&&(g("styleClass","p-checkbox-icon"),F("data-pc-section","icon"))}function Q2(t,i){if(t&1&&(We(0),T(1,Y2,1,2,"span",7)(2,Z2,1,2,"CheckIcon",6),Ge()),t&2){let e=S(2);b(),g("ngIf",e.checkboxIcon),b(),g("ngIf",!e.checkboxIcon)}}function X2(t,i){t&1&&L(0,"MinusIcon",9),t&2&&(g("styleClass","p-checkbox-icon"),F("data-pc-section","icon"))}function J2(t,i){if(t&1&&(We(0),T(1,Q2,3,2,"ng-container",4)(2,X2,1,2,"MinusIcon",6),Ge()),t&2){let e=S();b(),g("ngIf",e.checked),b(),g("ngIf",e._indeterminate())}}function e1(t,i){}function t1(t,i){t&1&&T(0,e1,0,0,"ng-template")}var n1=({dt:t})=>`
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
`,i1={root:({instance:t,props:i})=>["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ap=(()=>{class t extends pe{name="checkbox";theme=n1;classes=i1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var r1={provide:Ai,useExisting:Ut(()=>sp),multi:!0},sp=(()=>{class t extends ge{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new Y;onFocus=new Y;onBlur=new Y;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:ed(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=Re(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=M(ap);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,o=this.injector.get(Rt,null,{optional:!0,self:!0}),l=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=l.filter(u=>!Gn(u,this.value)):n=l?[...l,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=H({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,l){if(n&1&&(ue(l,q2,4),ue(l,xt,4)),n&2){let u;X(u=J())&&(o.checkboxIconTemplate=u.first),X(u=J())&&(o.templates=u)}},viewQuery:function(n,o){if(n&1&&yn(W2,5),n&2){let l;X(l=J())&&(o.inputViewChild=l.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",V],binary:[2,"binary","binary",V],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",st],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",V],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",V],required:[2,"required","required",V],autofocus:[2,"autofocus","autofocus",V],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([r1,ap]),O,ot],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let l=_e();D(0,"div",1)(1,"input",2,0),Q("focus",function(h){return q(l),W(o.onInputFocus(h))})("blur",function(h){return q(l),W(o.onInputBlur(h))})("change",function(h){return q(l),W(o.handleChange(h))}),x(),D(3,"div",3),T(4,J2,3,2,"ng-container",4)(5,t1,1,0,null,5),x()()}n&2&&(kt(o.style),K(o.styleClass),g("ngClass",o.containerClass),F("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),b(),kt(o.inputStyle),K(o.inputClass),g("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",Mc(26,G2)),F("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),b(3),g("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),b(),g("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",wt(27,K2,o.checked)))},dependencies:[me,nt,He,ut,bd,yd,ae],encapsulation:2,changeDetection:0})}return t})(),i3=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[sp,ae,ae]})}return t})();var lp=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),l,u,h;if(n&&o){if(u=i.length,u!=e.length)return!1;for(l=u;l--!==0;)if(!this.equalsByValue(i[l],e[l]))return!1;return!0}if(n!=o)return!1;var f=this.isDate(i),y=this.isDate(e);if(f!=y)return!1;if(f&&y)return i.getTime()==e.getTime();var v=i instanceof RegExp,C=e instanceof RegExp;if(v!=C)return!1;if(v&&C)return i.toString()==e.toString();var w=Object.keys(i);if(u=w.length,u!==Object.keys(e).length)return!1;for(l=u;l--!==0;)if(!Object.prototype.hasOwnProperty.call(e,w[l]))return!1;for(l=u;l--!==0;)if(h=w[l],!this.equalsByValue(i[h],e[h]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let l=0,u=n.length;l<u;++l){if(o==null)return null;o=o[n[l]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let l=!1;for(let u=0;u<n.length;u++)if(this.findIndexInList(n[u],o)>e){n.splice(u,0,i),l=!0;break}l||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let l=-1,u=this.isEmpty(i),h=this.isEmpty(e);return u&&h?l=0:u?l=o:h?l=-o:typeof i=="string"&&typeof e=="string"?l=i.localeCompare(e,n,{numeric:!0}):l=i<e?-1:i>e?1:0,l}static sort(i,e,n=1,o,l=1){let u=t.compare(i,e,o,n),h=n;return(t.isEmpty(i)||t.isEmpty(e))&&(h=l===1?n:l),h*u}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return U(U({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),l,u,h;if(n&&o){if(u=i.length,u!=e.length)return!1;for(l=u;l--!==0;)if(!this.deepEquals(i[l],e[l]))return!1;return!0}if(n!=o)return!1;var f=i instanceof Date,y=e instanceof Date;if(f!=y)return!1;if(f&&y)return i.getTime()==e.getTime();var v=i instanceof RegExp,C=e instanceof RegExp;if(v!=C)return!1;if(v&&C)return i.toString()==e.toString();var w=Object.keys(i);if(u=w.length,u!==Object.keys(e).length)return!1;for(l=u;l--!==0;)if(!Object.prototype.hasOwnProperty.call(e,w[l]))return!1;for(l=u;l--!==0;)if(h=w[l],!this.deepEquals(i[h],e[h]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},cp=0;function o3(t="pn_id_"){return cp++,`${t}${cp}`}function o1(){let t=[],i=(l,u)=>{let h=t.length>0?t[t.length-1]:{key:l,value:u},f=h.value+(h.key===l?0:u)+2;return t.push({key:l,value:f}),f},e=l=>{t=t.filter(u=>u.value!==l)},n=()=>t.length>0?t[t.length-1].value:0,o=l=>l&&parseInt(l.style.zIndex,10)||0;return{get:o,set:(l,u,h)=>{u&&(u.style.zIndex=String(i(l,h)))},clear:l=>{l&&(e(o(l)),l.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var a3=o1(),s3=t=>!!t;export{Ce as a,rg as b,gi as c,Uc as d,jc as e,lg as f,nt as g,bi as h,He as i,Wc as j,cg as k,It as l,ut as m,hg as n,me as o,_n as p,Z_ as q,ts as r,kg as s,Cn as t,Ao as u,n0 as v,Aw as w,rs as x,wi as y,en as z,Sn as A,Dn as B,Uu as C,zt as D,aS as E,qt as F,sS as G,Hu as H,V0 as I,U0 as J,lS as K,cS as L,zu as M,uS as N,dS as O,pS as P,j0 as Q,Li as R,hS as S,fS as T,qu as U,mS as V,Ds as W,gS as X,bS as Y,Gu as Z,xs as _,yS as $,vS as aa,Es as ba,_S as ca,CS as da,wS as ea,SS as fa,DS as ga,xS as ha,Ye as ia,K0 as ja,we as ka,Ho as la,Gn as ma,kS as na,FS as oa,IS as pa,tn as qa,Ze as ra,GS as sa,KS as ta,YS as ua,id as va,rd as wa,xt as xa,ae as ya,An as za,XS as Aa,pe as Ba,Is as Ca,AD as Da,Ai as Ea,ki as Fa,Rt as Ga,Fi as Ha,Ot as Ia,Tr as Ja,En as Ka,ge as La,Ms as Ma,hd as Na,Yo as Oa,ZD as Pa,Zo as Qa,px as Ra,Ve as Sa,bd as Ta,Vx as Ua,Hx as Va,Wx as Wa,Yx as Xa,yd as Ya,vd as Za,_d as _a,Qo as $a,Xo as ab,yE as bb,VE as cb,rn as db,Pi as eb,Ud as fb,jd as gb,Vs as hb,zd as ib,on as jb,Kd as kb,Wt as lb,In as mb,Yd as nb,Qd as ob,Jd as pb,js as qb,tF as rb,ip as sb,rp as tb,lp as ub,o3 as vb,a3 as wb,s3 as xb,uy as yb,rT as zb,op as Ab,sp as Bb,i3 as Cb,Td as Db};
