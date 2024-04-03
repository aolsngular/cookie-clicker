var xt=Object.defineProperty;var Et=(r,t,e)=>t in r?xt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var _=(r,t,e)=>(Et(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,J=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),X=new WeakMap;let pt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(e,t))}return t}toString(){return this.cssText}};const St=r=>new pt(typeof r=="string"?r:r+"",void 0,K),C=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new pt(e,r,K)},Ct=(r,t)=>{if(J)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Y=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return St(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nt,defineProperty:Pt,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Mt,getOwnPropertySymbols:Ut,getPrototypeOf:Lt}=Object,y=globalThis,tt=y.trustedTypes,Ht=tt?tt.emptyScript:"",j=y.reactiveElementPolyfillSupport,P=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Ht:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ft=(r,t)=>!Nt(r,t),et={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ft};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Pt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Lt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...Mt(e),...Ut(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Y(i))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:q;this._$Em=i,this[i]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ft)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,j==null||j({ReactiveElement:w}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,R=k.trustedTypes,st=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,mt="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+$,Ot=`<${gt}>`,A=document,M=()=>A.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,Dt=r=>$t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,rt=/>/g,v=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,nt=/"/g,yt=/^(?:script|style|textarea|title)$/i,Tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=Tt(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),at=new WeakMap,b=A.createTreeWalker(A,129);function _t(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Rt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=N;for(let l=0;l<e;l++){const a=r[l];let c,u,h=-1,p=0;for(;p<a.length&&(n.lastIndex=p,u=n.exec(a),u!==null);)p=n.lastIndex,n===N?u[1]==="!--"?n=it:u[1]!==void 0?n=rt:u[2]!==void 0?(yt.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=v):u[3]!==void 0&&(n=v):n===v?u[0]===">"?(n=i??N,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?v:u[3]==='"'?nt:ot):n===nt||n===ot?n=v:n===it||n===rt?n=N:(n=v,i=void 0);const g=n===v&&r[l+1].startsWith("/>")?" ":"";o+=n===N?a+Ot:h>=0?(s.push(c),a.slice(0,h)+mt+a.slice(h)+$+g):a+$+(h===-2?l:g)}return[_t(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class L{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,u]=Rt(t,e);if(this.el=L.createElement(c,s),b.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=b.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(mt)){const p=u[n++],g=i.getAttribute(h).split($),D=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:D[2],strings:g,ctor:D[1]==="."?zt:D[1]==="?"?jt:D[1]==="@"?Bt:z}),i.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(yt.test(i.tagName)){const h=i.textContent.split($),p=h.length-1;if(p>0){i.textContent=R?R.emptyScript:"";for(let g=0;g<p;g++)i.append(h[g],M()),b.nextNode(),a.push({type:2,index:++o});i.append(h[p],M())}}}else if(i.nodeType===8)if(i.data===gt)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){var n,l;if(t===E)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class It{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??A).importNode(e,!0);b.currentNode=i;let o=b.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Vt(o,this,t)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=b.nextNode(),n++)}return b.currentNode=A,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=L.createElement(_t(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new It(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new L(t)),e}k(t){$t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new O(this.S(M()),this.S(M()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=S(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=S(this,l[s+a],e,a),c===E&&(c=this._$AH[a]),n||(n=!U(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class jt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Bt extends z{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??d)===E)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const V=k.litHtmlPolyfillSupport;V==null||V(L,O),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.1.2");const Wt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new O(t.insertBefore(M(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}};var ut;m._$litElement$=!0,m.finalized=!0,(ut=globalThis.litElementHydrateSupport)==null||ut.call(globalThis,{LitElement:m});const W=globalThis.litElementPolyfillSupport;W==null||W({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=new WeakMap,lt=r=>{if((e=>e.pattern!==void 0)(r))return r.pattern;let t=ht.get(r);return t===void 0&&ht.set(r,t=new URLPattern({pathname:r.path})),t};let F=class{constructor(t,e,s){this.routes=[],this.o=[],this.t={},this.i=i=>{if(i.routes===this)return;const o=i.routes;this.o.push(o),o.h=this,i.stopImmediatePropagation(),i.onDisconnect=()=>{var l;(l=this.o)==null||l.splice(this.o.indexOf(o)>>>0,1)};const n=ct(this.t);n!==void 0&&o.goto(n)},(this.l=t).addController(this),this.routes=[...e],this.fallback=s==null?void 0:s.fallback}link(t){var e;if(t!=null&&t.startsWith("/"))return t;if(t!=null&&t.startsWith("."))throw Error("Not implemented");return t??(t=this.u),(((e=this.h)==null?void 0:e.link())??"")+t}async goto(t){let e;if(this.routes.length===0&&this.fallback===void 0)e=t,this.u="",this.t={0:e};else{const s=this.p(t);if(s===void 0)throw Error("No route found for "+t);const i=lt(s).exec({pathname:t}),o=(i==null?void 0:i.pathname.groups)??{};if(e=ct(o),typeof s.enter=="function"&&await s.enter(o)===!1)return;this.v=s,this.t=o,this.u=e===void 0?t:t.substring(0,t.length-e.length)}if(e!==void 0)for(const s of this.o)s.goto(e);this.l.requestUpdate()}outlet(){var t,e;return(e=(t=this.v)==null?void 0:t.render)==null?void 0:e.call(t,this.t)}get params(){return this.t}p(t){const e=this.routes.find(s=>lt(s).test({pathname:t}));return e||this.fallback===void 0?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(H.eventName,this.i);const t=new H(this);this.l.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;(t=this._)==null||t.call(this),this.h=void 0}};const ct=r=>{let t;for(const e of Object.keys(r))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&r[t]};class H extends Event{constructor(t){super(H.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}H.eventName="lit-routes-connected";const qt=C`
  :host {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.lit:hover {
    filter: drop-shadow(0 0 2em #325cffaa);
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  ::slotted(h1) {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`,Gt=C`
  .form {
    width: 80%;
    max-width: 400px;
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 150px;
  }
  label {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    margin-top: 10px;
  }
  button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #90c9f9;
    color: #000;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
    margin-top: 10px;
  }

  button:hover {
    background-color: #0056b3;
  }
  .icon-login {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #ce93d9;
    background-size: contain;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`,Jt=C`
  .game-container,
  .game-action {
    display: flex;
    width: 80%;
    max-width: 450px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    margin-top: 20px;
  }
  .game-message {
    text-align: center;
  }
  .game-points {
    text-align: right;
    margin: 20px;
  }
  .game-points span {
    font-size: 24px;
  }
`,Kt=C`
  .header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    align-content: center;
    color: #fff;
    background-color: #262626;
  }
  .header-user {
    width: 70%;
  }
  .header-user,
  .header-option {
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    text-transform: capitalize;
  }
  .header-option {
    justify-content: right;
    width: 15%;
  }
  .header-user {
    margin-left: 25px;
  }
  .header-user-icon {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(/bbva-exercise/icons/user-solid.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 10px;
  }
  select {
    border: none;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
  button {
    background-color: #262626;
    border: none;
  }
`,I="/cookie-clicker";class vt extends m{static get properties(){return{playerName:{type:String}}}constructor(){super(),this.playerName="User",this._routes=new F(this,Q)}_exitGame(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("exit-game",{detail:{playerName:this.playerName},bubbles:!0,composed:!0})),window.location=`${I}/`}render(){return f`
      <div class="header">
        <div class="header-user">
          <span> Hi ${this.playerName} </span>
        </div>
        <div class="header-option">
          <button type="button" class="button" @click="${this._exitGame}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M320,320c-11.782,0-21.333,9.551-21.333,21.333v128h-256V42.667h256v128c0,11.782,9.551,21.333,21.333,21.333     s21.333-9.551,21.333-21.333V21.333C341.333,9.551,331.782,0,320,0H21.333C9.551,0,0,9.551,0,21.333v469.333     C0,502.449,9.551,512,21.333,512H320c11.782,0,21.333-9.551,21.333-21.333V341.333C341.333,329.551,331.782,320,320,320z"
                    />
                    <path
                      d="M507.164,269.52c0.204-0.248,0.38-0.509,0.571-0.764c0.226-0.302,0.461-0.598,0.671-0.913     c0.204-0.304,0.38-0.62,0.566-0.932c0.17-0.285,0.349-0.564,0.506-0.857c0.17-0.318,0.315-0.646,0.468-0.971     c0.145-0.306,0.297-0.607,0.428-0.921c0.13-0.315,0.236-0.637,0.35-0.957c0.121-0.337,0.25-0.669,0.354-1.013     c0.097-0.32,0.168-0.646,0.249-0.969c0.089-0.351,0.187-0.698,0.258-1.055c0.074-0.375,0.118-0.753,0.173-1.13     c0.044-0.311,0.104-0.617,0.135-0.933c0.138-1.4,0.138-2.811,0-4.211c-0.031-0.315-0.09-0.621-0.135-0.933     c-0.054-0.377-0.098-0.756-0.173-1.13c-0.071-0.358-0.169-0.704-0.258-1.055c-0.081-0.324-0.152-0.649-0.249-0.969     c-0.104-0.344-0.233-0.677-0.354-1.013c-0.115-0.32-0.22-0.642-0.35-0.957c-0.13-0.314-0.283-0.615-0.428-0.921     c-0.153-0.325-0.297-0.653-0.468-0.971c-0.157-0.293-0.336-0.572-0.506-0.857c-0.186-0.312-0.363-0.628-0.566-0.932     c-0.211-0.315-0.445-0.611-0.671-0.913c-0.191-0.255-0.368-0.516-0.571-0.764c-0.439-0.535-0.903-1.05-1.392-1.54     c-0.007-0.008-0.014-0.016-0.021-0.023l-85.333-85.333c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17l48.915,48.915     H256c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h183.163l-48.915,48.915     c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l85.333-85.333c0.008-0.008,0.014-0.016,0.021-0.023     C506.261,270.57,506.725,270.055,507.164,269.52z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    `}}_(vt,"styles",[Kt]);customElements.define("header-user",vt);const x={cost_start_points:50},Ft=C`
  button.autoclicker {
    margin-top: 20px;
  }
`,Z=C`
  button {
    width: 100%;
    max-width: 280px;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 16px;
    font-weight: 500;
    font-family: inherit;
    background-color: #007bff;
    text-transform: uppercase;
    cursor: pointer;
    transition: border-color 0.25s;
  }
`;class bt extends m{static get properties(){return{autoClickerCost:{type:Number},autoMergeLevel:{type:Number},currentPoints:{type:Number}}}constructor(){super(),this.currentPoints=0,this.autoClickerCost=x.cost_start_points,this.autoMergeLevel=1}_buyAutoclicker(){this.autoMergeLevel=this.autoMergeLevel+1,this.autoClickerCost=x.cost_start_points+x.cost_start_points*this.autoMergeLevel,this.dispatchEvent(new CustomEvent("autoclicker-on",{detail:{autoMergeLevel:this.autoMergeLevel},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.currentPoints>50&&(this.autoClickerCost=x.cost_start_points+x.cost_start_points*this.autoMergeLevel)}render(){return f`
      <button
        type="button"
        class="button autoclicker"
        @click="${this._buyAutoclicker}"
        ?disabled="${this.currentPoints<this.autoClickerCost}"
      >
        Buy autoclicker(${this.autoClickerCost})
      </button>
    `}}_(bt,"styles",[Ft,Z]);window.customElements.define("custom-autoclicker",bt);class Zt{constructor(){this.playerData=this.loadPlayerData()||[]}loadPlayerData(){const t=sessionStorage.getItem("playerData");return t?JSON.parse(t):[]}savePlayerData(){sessionStorage.setItem("playerData",JSON.stringify(this.playerData))}updatePlayer(t,e,s){const i=this.playerData.findIndex(o=>o.playerName===t);i>-1?(this.playerData[i].count=e,this.playerData[i].autoMergeLevel=s):this.playerData.push({playerName:t,count:e,autoMergeLevel:s}),this.savePlayerData()}getPlayerData(t){return this.playerData.find(e=>e.playerName===t)||null}}const dt=new Zt;class At extends m{static get properties(){return{playerName:{type:String},count:{type:Number},autoMergeLevel:{type:Number}}}constructor(){super(),this.playerList=[],this.playerName="anonymous",this.count=0,this.autoMergeLevel=0,this.intervalId=[]}loadInitialPlayerData(){const t=dt.getPlayerData(this.playerName);if(t){this.playerName=t.playerName,this.count=t.count,this.autoMergeLevel=t.autoMergeLevel;const e=setInterval(()=>{this.count+=1*this.autoMergeLevel},100);this.intervalId.push(e)}}handleExitGame(t){dt.updatePlayer(this.playerName,this.count,this.autoMergeLevel),this.intervalId.forEach((e,s)=>{clearInterval(this.intervalId[s])})}_merge(){this.count=this.count+1}startAutoClicker(t){this.autoMergeLevel=t.detail.autoMergeLevel;const e=setInterval(()=>{this.count=this.count+1},100);this.intervalId.push(e)}updated(t){t.has("playerName")&&this.loadInitialPlayerData()}render(){return f`
      <header-user
        .playerName="${this.playerName}"
        @exit-game=${this.handleExitGame}
      ></header-user>
      <div>
        <h2>Merged pull request: ${this.count}</h2>
        ${this.autoMergeLevel>0?f` <h2>Automerge: ${this.autoMergeLevel}</h2>`:""}
      </div>
      <div>
        <button type="button" class="button" @click="${this._merge}">
          Merge
        </button>
      </div>
      ${this.count>x.cost_start_points?f`
            <div>
              <custom-autoclicker
                currentPoints=${this.count}
                autoMergeLevel=${this.autoMergeLevel}
                @autoclicker-on=${this.startAutoClicker}
              />
            </div>
          `:""}
    `}}_(At,"styles",[Jt,Z]);customElements.define("game-view",At);const Q=[{path:`${I}/`,render:()=>f`<home-view></home-view>`},{path:`${I}/game/:playerName`,render:r=>{const t=r.playerName||"";return f`<game-view .playerName=${t}></game-view>`}}];class G extends m{constructor(){super(),this.userName="",this._routes=new F(this,Q)}handleInput(t){this.userName=t.target.value}handleStartGame(t){t.preventDefault();const e=this.userName.trim();e?window.location=`${I}/game/${e}`:alert("Por favor, introduce tu nombre.")}render(){return f`
      <div class="form">
        <span class="icon-login">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"
            />
          </svg>
        </span>
        <form id="register-form" @submit="${this.handleStartGame}">
          <label>Create new player</label>
          <input
            type="text"
            .value="${this.userName}"
            @input="${this.handleInput}"
            placeholder="Name"
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
    `}}_(G,"styles",[Gt,Z]),_(G,"properties",{userName:{type:String}});customElements.define("home-view",G);class wt extends m{static get properties(){return{}}constructor(){super(),this._routes=new F(this,Q),this._routes.goto(window.location.pathname)}render(){return f` <main>${this._routes.outlet()}</main> `}}_(wt,"styles",[qt]);window.customElements.define("app-container",wt);
