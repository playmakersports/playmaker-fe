import{r as g,i as Qe,k as et}from"./main-DdFHfJsj.js";import{F as _e}from"./common-p2nbeD7y.js";import{a as Re}from"./styled-components.browser.esm-B_lRBw7u.js";function pe(){return typeof window<"u"}function ne(e){return tt(e)?(e.nodeName||"").toLowerCase():"#document"}function N(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(tt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function tt(e){return pe()?e instanceof Node||e instanceof N(e).Node:!1}function O(e){return pe()?e instanceof Element||e instanceof N(e).Element:!1}function W(e){return pe()?e instanceof HTMLElement||e instanceof N(e).HTMLElement:!1}function Ae(e){return!pe()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof N(e).ShadowRoot}const bt=new Set(["inline","contents"]);function ce(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=I(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!bt.has(r)}const Rt=new Set(["table","td","th"]);function Ct(e){return Rt.has(ne(e))}const Et=[":popover-open",":modal"];function he(e){return Et.some(t=>{try{return e.matches(t)}catch{return!1}})}const St=["transform","translate","scale","rotate","perspective"],Pt=["transform","translate","scale","rotate","perspective","filter"],At=["paint","layout","strict","content"];function ke(e){const t=we(),o=O(e)?I(e):e;return St.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||Pt.some(n=>(o.willChange||"").includes(n))||At.some(n=>(o.contain||"").includes(n))}function Tt(e){let t=X(e);for(;W(t)&&!j(t);){if(ke(t))return t;if(he(t))return null;t=X(t)}return null}function we(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Dt=new Set(["html","body","#document"]);function j(e){return Dt.has(ne(e))}function I(e){return N(e).getComputedStyle(e)}function ye(e){return O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function X(e){if(ne(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ae(e)&&e.host||Y(e);return Ae(t)?t.host:t}function nt(e){const t=X(e);return j(t)?e.ownerDocument?e.ownerDocument.body:e.body:W(t)&&ce(t)?t:nt(t)}function J(e,t,o){var n;t===void 0&&(t=[]),o===void 0&&(o=!0);const r=nt(e),s=r===((n=e.ownerDocument)==null?void 0:n.body),i=N(r);if(s){const c=Te(i);return t.concat(i,i.visualViewport||[],ce(r)?r:[],c&&o?J(c):[])}return t.concat(r,J(r,[],o))}function Te(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}const Ot=["top","right","bottom","left"],$e=Math.min,ie=Math.max,ue=Math.round,H=e=>({x:e,y:e}),kt={left:"right",right:"left",bottom:"top",top:"bottom"},Lt={start:"end",end:"start"};function xe(e,t){return typeof e=="function"?e(t):e}function ee(e){return e.split("-")[0]}function ve(e){return e.split("-")[1]}function Mt(e){return e==="x"?"y":"x"}function ot(e){return e==="y"?"height":"width"}const _t=new Set(["top","bottom"]);function Z(e){return _t.has(ee(e))?"y":"x"}function rt(e){return Mt(Z(e))}function $t(e,t,o){o===void 0&&(o=!1);const n=ve(e),r=rt(e),s=ot(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=de(i)),[i,de(i)]}function Ft(e){const t=de(e);return[De(e),t,De(t)]}function De(e){return e.replace(/start|end/g,t=>Lt[t])}const Fe=["left","right"],Ne=["right","left"],Nt=["top","bottom"],Bt=["bottom","top"];function It(e,t,o){switch(e){case"top":case"bottom":return o?t?Ne:Fe:t?Fe:Ne;case"left":case"right":return t?Nt:Bt;default:return[]}}function Wt(e,t,o,n){const r=ve(e);let s=It(ee(e),o==="start",n);return r&&(s=s.map(i=>i+"-"+r),t&&(s=s.concat(s.map(De)))),s}function de(e){return e.replace(/left|right|bottom|top/g,t=>kt[t])}function Vt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ht(e){return typeof e!="number"?Vt(e):{top:e,right:e,bottom:e,left:e}}function me(e){const{x:t,y:o,width:n,height:r}=e;return{width:n,height:r,top:o,left:t,right:t+n,bottom:o+r,x:t,y:o}}function Be(e,t){if(!e||!t)return!1;const o=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(o&&Ae(o)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function re(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ce(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const o=e;return o.target!=null&&t.contains(o.target)}function Kt(e){return e.matches("html,body")}function Ie(e){return e?.ownerDocument||document}function ae(e,t,o){return o===void 0&&(o=!0),e.filter(r=>{var s;return r.parentId===t&&(!o||((s=r.context)==null?void 0:s.open))}).flatMap(r=>[r,...ae(e,r.id,o)])}function jt(e){return"nativeEvent"in e}var Xt=typeof document<"u",Yt=function(){},te=Xt?g.useLayoutEffect:Yt;const Ut={...Qe};function le(e){const t=g.useRef(e);return te(()=>{t.current=e}),t}const qt=Ut.useInsertionEffect,Zt=qt||(e=>e());function G(e){const t=g.useRef(()=>{});return Zt(()=>{t.current=e}),g.useCallback(function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return t.current==null?void 0:t.current(...n)},[])}function We(e,t,o){let{reference:n,floating:r}=e;const s=Z(t),i=rt(t),c=ot(i),a=ee(t),l=s==="y",f=n.x+n.width/2-r.width/2,m=n.y+n.height/2-r.height/2,p=n[c]/2-r[c]/2;let u;switch(a){case"top":u={x:f,y:n.y-r.height};break;case"bottom":u={x:f,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:m};break;case"left":u={x:n.x-r.width,y:m};break;default:u={x:n.x,y:n.y}}switch(ve(t)){case"start":u[i]-=p*(o&&l?-1:1);break;case"end":u[i]+=p*(o&&l?-1:1);break}return u}const zt=async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:i}=o,c=s.filter(Boolean),a=await(i.isRTL==null?void 0:i.isRTL(t));let l=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:m}=We(l,n,a),p=n,u={},w=0;for(let y=0;y<c.length;y++){const{name:v,fn:C}=c[y],{x:E,y:x,data:R,reset:b}=await C({x:f,y:m,initialPlacement:n,placement:p,strategy:r,middlewareData:u,rects:l,platform:i,elements:{reference:e,floating:t}});f=E??f,m=x??m,u={...u,[v]:{...u[v],...R}},b&&w<=50&&(w++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(l=b.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:f,y:m}=We(l,p,a)),y=-1)}return{x:f,y:m,placement:p,strategy:r,middlewareData:u}};async function Oe(e,t){var o;t===void 0&&(t={});const{x:n,y:r,platform:s,rects:i,elements:c,strategy:a}=e,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:p=!1,padding:u=0}=xe(t,e),w=Ht(u),v=c[p?m==="floating"?"reference":"floating":m],C=me(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(v)))==null||o?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a})),E=m==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),R=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},b=me(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:E,offsetParent:x,strategy:a}):E);return{top:(C.top-b.top+w.top)/R.y,bottom:(b.bottom-C.bottom+w.bottom)/R.y,left:(C.left-b.left+w.left)/R.x,right:(b.right-C.right+w.right)/R.x}}const Gt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:a,elements:l}=t,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:y=!0,...v}=xe(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const C=ee(r),E=Z(c),x=ee(c)===c,R=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=p||(x||!y?[de(c)]:Ft(c)),M=w!=="none";!p&&M&&b.push(...Wt(c,y,w,R));const $=[c,...b],k=await Oe(t,v),L=[];let _=((n=s.flip)==null?void 0:n.overflows)||[];if(f&&L.push(k[C]),m){const h=$t(r,i,R);L.push(k[h[0]],k[h[1]])}if(_=[..._,{placement:r,overflows:L}],!L.every(h=>h<=0)){var V,U;const h=(((V=s.flip)==null?void 0:V.index)||0)+1,D=$[h];if(D&&(!(m==="alignment"?E!==Z(D):!1)||_.every(d=>Z(d.placement)===E?d.overflows[0]>0:!0)))return{data:{index:h,overflows:_},reset:{placement:D}};let P=(U=_.filter(A=>A.overflows[0]<=0).sort((A,d)=>A.overflows[1]-d.overflows[1])[0])==null?void 0:U.placement;if(!P)switch(u){case"bestFit":{var B;const A=(B=_.filter(d=>{if(M){const S=Z(d.placement);return S===E||S==="y"}return!0}).map(d=>[d.placement,d.overflows.filter(S=>S>0).reduce((S,T)=>S+T,0)]).sort((d,S)=>d[1]-S[1])[0])==null?void 0:B[0];A&&(P=A);break}case"initialPlacement":P=c;break}if(r!==P)return{reset:{placement:P}}}return{}}}};function Ve(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function He(e){return Ot.some(t=>e[t]>=0)}const Jt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:o}=t,{strategy:n="referenceHidden",...r}=xe(e,t);switch(n){case"referenceHidden":{const s=await Oe(t,{...r,elementContext:"reference"}),i=Ve(s,o.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:He(i)}}}case"escaped":{const s=await Oe(t,{...r,altBoundary:!0}),i=Ve(s,o.floating);return{data:{escapedOffsets:i,escaped:He(i)}}}default:return{}}}}},Qt=new Set(["left","top"]);async function en(e,t){const{placement:o,platform:n,elements:r}=e,s=await(n.isRTL==null?void 0:n.isRTL(r.floating)),i=ee(o),c=ve(o),a=Z(o)==="y",l=Qt.has(i)?-1:1,f=s&&a?-1:1,m=xe(t,e);let{mainAxis:p,crossAxis:u,alignmentAxis:w}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return c&&typeof w=="number"&&(u=c==="end"?w*-1:w),a?{x:u*f,y:p*l}:{x:p*l,y:u*f}}const tn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:r,y:s,placement:i,middlewareData:c}=t,a=await en(t,e);return i===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:r+a.x,y:s+a.y,data:{...a,placement:i}}}}};function it(e){const t=I(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=W(e),s=r?e.offsetWidth:o,i=r?e.offsetHeight:n,c=ue(o)!==s||ue(n)!==i;return c&&(o=s,n=i),{width:o,height:n,$:c}}function st(e){return O(e)?e:e.contextElement}function Q(e){const t=st(e);if(!W(t))return H(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:s}=it(t);let i=(s?ue(o.width):o.width)/n,c=(s?ue(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const nn=H(0);function ct(e){const t=N(e);return!we()||!t.visualViewport?nn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function on(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==N(e)?!1:t}function se(e,t,o,n){t===void 0&&(t=!1),o===void 0&&(o=!1);const r=e.getBoundingClientRect(),s=st(e);let i=H(1);t&&(n?O(n)&&(i=Q(n)):i=Q(e));const c=on(s,o,n)?ct(s):H(0);let a=(r.left+c.x)/i.x,l=(r.top+c.y)/i.y,f=r.width/i.x,m=r.height/i.y;if(s){const p=N(s),u=n&&O(n)?N(n):n;let w=p,y=Te(w);for(;y&&n&&u!==w;){const v=Q(y),C=y.getBoundingClientRect(),E=I(y),x=C.left+(y.clientLeft+parseFloat(E.paddingLeft))*v.x,R=C.top+(y.clientTop+parseFloat(E.paddingTop))*v.y;a*=v.x,l*=v.y,f*=v.x,m*=v.y,a+=x,l+=R,w=N(y),y=Te(w)}}return me({width:f,height:m,x:a,y:l})}function be(e,t){const o=ye(e).scrollLeft;return t?t.left+o:se(Y(e)).left+o}function lt(e,t){const o=e.getBoundingClientRect(),n=o.left+t.scrollLeft-be(e,o),r=o.top+t.scrollTop;return{x:n,y:r}}function rn(e){let{elements:t,rect:o,offsetParent:n,strategy:r}=e;const s=r==="fixed",i=Y(n),c=t?he(t.floating):!1;if(n===i||c&&s)return o;let a={scrollLeft:0,scrollTop:0},l=H(1);const f=H(0),m=W(n);if((m||!m&&!s)&&((ne(n)!=="body"||ce(i))&&(a=ye(n)),W(n))){const u=se(n);l=Q(n),f.x=u.x+n.clientLeft,f.y=u.y+n.clientTop}const p=i&&!m&&!s?lt(i,a):H(0);return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-a.scrollLeft*l.x+f.x+p.x,y:o.y*l.y-a.scrollTop*l.y+f.y+p.y}}function sn(e){return Array.from(e.getClientRects())}function cn(e){const t=Y(e),o=ye(e),n=e.ownerDocument.body,r=ie(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=ie(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+be(e);const c=-o.scrollTop;return I(n).direction==="rtl"&&(i+=ie(t.clientWidth,n.clientWidth)-r),{width:r,height:s,x:i,y:c}}const Ke=25;function ln(e,t){const o=N(e),n=Y(e),r=o.visualViewport;let s=n.clientWidth,i=n.clientHeight,c=0,a=0;if(r){s=r.width,i=r.height;const f=we();(!f||f&&t==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}const l=be(n);if(l<=0){const f=n.ownerDocument,m=f.body,p=getComputedStyle(m),u=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,w=Math.abs(n.clientWidth-m.clientWidth-u);w<=Ke&&(s-=w)}else l<=Ke&&(s+=l);return{width:s,height:i,x:c,y:a}}const an=new Set(["absolute","fixed"]);function fn(e,t){const o=se(e,!0,t==="fixed"),n=o.top+e.clientTop,r=o.left+e.clientLeft,s=W(e)?Q(e):H(1),i=e.clientWidth*s.x,c=e.clientHeight*s.y,a=r*s.x,l=n*s.y;return{width:i,height:c,x:a,y:l}}function je(e,t,o){let n;if(t==="viewport")n=ln(e,o);else if(t==="document")n=cn(Y(e));else if(O(t))n=fn(t,o);else{const r=ct(e);n={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return me(n)}function at(e,t){const o=X(e);return o===t||!O(o)||j(o)?!1:I(o).position==="fixed"||at(o,t)}function un(e,t){const o=t.get(e);if(o)return o;let n=J(e,[],!1).filter(c=>O(c)&&ne(c)!=="body"),r=null;const s=I(e).position==="fixed";let i=s?X(e):e;for(;O(i)&&!j(i);){const c=I(i),a=ke(i);!a&&c.position==="fixed"&&(r=null),(s?!a&&!r:!a&&c.position==="static"&&!!r&&an.has(r.position)||ce(i)&&!a&&at(e,i))?n=n.filter(f=>f!==i):r=c,i=X(i)}return t.set(e,n),n}function dn(e){let{element:t,boundary:o,rootBoundary:n,strategy:r}=e;const i=[...o==="clippingAncestors"?he(t)?[]:un(t,this._c):[].concat(o),n],c=i[0],a=i.reduce((l,f)=>{const m=je(t,f,r);return l.top=ie(m.top,l.top),l.right=$e(m.right,l.right),l.bottom=$e(m.bottom,l.bottom),l.left=ie(m.left,l.left),l},je(t,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function mn(e){const{width:t,height:o}=it(e);return{width:t,height:o}}function gn(e,t,o){const n=W(t),r=Y(t),s=o==="fixed",i=se(e,!0,s,t);let c={scrollLeft:0,scrollTop:0};const a=H(0);function l(){a.x=be(r)}if(n||!n&&!s)if((ne(t)!=="body"||ce(r))&&(c=ye(t)),n){const u=se(t,!0,s,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else r&&l();s&&!n&&r&&l();const f=r&&!n&&!s?lt(r,c):H(0),m=i.left+c.scrollLeft-a.x-f.x,p=i.top+c.scrollTop-a.y-f.y;return{x:m,y:p,width:i.width,height:i.height}}function Ee(e){return I(e).position==="static"}function Xe(e,t){if(!W(e)||I(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return Y(e)===o&&(o=o.ownerDocument.body),o}function ft(e,t){const o=N(e);if(he(e))return o;if(!W(e)){let r=X(e);for(;r&&!j(r);){if(O(r)&&!Ee(r))return r;r=X(r)}return o}let n=Xe(e,t);for(;n&&Ct(n)&&Ee(n);)n=Xe(n,t);return n&&j(n)&&Ee(n)&&!ke(n)?o:n||Tt(e)||o}const pn=async function(e){const t=this.getOffsetParent||ft,o=this.getDimensions,n=await o(e.floating);return{reference:gn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function hn(e){return I(e).direction==="rtl"}const wn={convertOffsetParentRelativeRectToViewportRelativeRect:rn,getDocumentElement:Y,getClippingRect:dn,getOffsetParent:ft,getElementRects:pn,getClientRects:sn,getDimensions:mn,getScale:Q,isElement:O,isRTL:hn},yn=tn,xn=Gt,vn=Jt,bn=(e,t,o)=>{const n=new Map,r={platform:wn,...o},s={...r.platform,_c:n};return zt(e,t,{...r,platform:s})};var Rn=typeof document<"u",Cn=function(){},fe=Rn?g.useLayoutEffect:Cn;function ge(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let o,n,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(o=e.length,o!==t.length)return!1;for(n=o;n--!==0;)if(!ge(e[n],t[n]))return!1;return!0}if(r=Object.keys(e),o=r.length,o!==Object.keys(t).length)return!1;for(n=o;n--!==0;)if(!{}.hasOwnProperty.call(t,r[n]))return!1;for(n=o;n--!==0;){const s=r[n];if(!(s==="_owner"&&e.$$typeof)&&!ge(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function ut(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ye(e,t){const o=ut(e);return Math.round(t*o)/o}function Se(e){const t=g.useRef(e);return fe(()=>{t.current=e}),t}function En(e){e===void 0&&(e={});const{placement:t="bottom",strategy:o="absolute",middleware:n=[],platform:r,elements:{reference:s,floating:i}={},transform:c=!0,whileElementsMounted:a,open:l}=e,[f,m]=g.useState({x:0,y:0,strategy:o,placement:t,middlewareData:{},isPositioned:!1}),[p,u]=g.useState(n);ge(p,n)||u(n);const[w,y]=g.useState(null),[v,C]=g.useState(null),E=g.useCallback(d=>{d!==M.current&&(M.current=d,y(d))},[]),x=g.useCallback(d=>{d!==$.current&&($.current=d,C(d))},[]),R=s||w,b=i||v,M=g.useRef(null),$=g.useRef(null),k=g.useRef(f),L=a!=null,_=Se(a),V=Se(r),U=Se(l),B=g.useCallback(()=>{if(!M.current||!$.current)return;const d={placement:t,strategy:o,middleware:p};V.current&&(d.platform=V.current),bn(M.current,$.current,d).then(S=>{const T={...S,isPositioned:U.current!==!1};h.current&&!ge(k.current,T)&&(k.current=T,et.flushSync(()=>{m(T)}))})},[p,t,o,V,U]);fe(()=>{l===!1&&k.current.isPositioned&&(k.current.isPositioned=!1,m(d=>({...d,isPositioned:!1})))},[l]);const h=g.useRef(!1);fe(()=>(h.current=!0,()=>{h.current=!1}),[]),fe(()=>{if(R&&(M.current=R),b&&($.current=b),R&&b){if(_.current)return _.current(R,b,B);B()}},[R,b,B,_,L]);const D=g.useMemo(()=>({reference:M,floating:$,setReference:E,setFloating:x}),[E,x]),P=g.useMemo(()=>({reference:R,floating:b}),[R,b]),A=g.useMemo(()=>{const d={position:o,left:0,top:0};if(!P.floating)return d;const S=Ye(P.floating,f.x),T=Ye(P.floating,f.y);return c?{...d,transform:"translate("+S+"px, "+T+"px)",...ut(P.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:S,top:T}},[o,c,P.floating,f.x,f.y]);return g.useMemo(()=>({...f,update:B,refs:D,elements:P,floatingStyles:A}),[f,B,D,P,A])}const jn=(e,t)=>({...yn(e),options:[e,t]}),Xn=(e,t)=>({...xn(e),options:[e,t]}),Yn=(e,t)=>({...vn(e),options:[e,t]}),Sn="data-floating-ui-focusable",Ue="active",qe="selected",Pn={...Qe};let Ze=!1,An=0;const ze=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+An++;function Tn(){const[e,t]=g.useState(()=>Ze?ze():void 0);return te(()=>{e==null&&t(ze())},[]),g.useEffect(()=>{Ze=!0},[]),e}const Dn=Pn.useId,On=Dn||Tn;function kn(){const e=new Map;return{emit(t,o){var n;(n=e.get(t))==null||n.forEach(r=>r(o))},on(t,o){e.has(t)||e.set(t,new Set),e.get(t).add(o)},off(t,o){var n;(n=e.get(t))==null||n.delete(o)}}}const Ln=g.createContext(null),Mn=g.createContext(null),_n=()=>{var e;return((e=g.useContext(Ln))==null?void 0:e.id)||null},dt=()=>g.useContext(Mn);function $n(e){return"data-floating-ui-"+e}const Fn={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Nn={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ge=e=>{var t,o;return{escapeKey:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(o=e?.outsidePress)!=null?o:!0}};function Un(e,t){t===void 0&&(t={});const{open:o,onOpenChange:n,elements:r,dataRef:s}=e,{enabled:i=!0,escapeKey:c=!0,outsidePress:a=!0,outsidePressEvent:l="pointerdown",referencePress:f=!1,referencePressEvent:m="pointerdown",ancestorScroll:p=!1,bubbles:u,capture:w}=t,y=dt(),v=G(typeof a=="function"?a:()=>!1),C=typeof a=="function"?v:a,E=g.useRef(!1),{escapeKey:x,outsidePress:R}=Ge(u),{escapeKey:b,outsidePress:M}=Ge(w),$=g.useRef(!1),k=G(h=>{var D;if(!o||!i||!c||h.key!=="Escape"||$.current)return;const P=(D=s.current.floatingContext)==null?void 0:D.nodeId,A=y?ae(y.nodesRef.current,P):[];if(!x&&(h.stopPropagation(),A.length>0)){let d=!0;if(A.forEach(S=>{var T;if((T=S.context)!=null&&T.open&&!S.context.dataRef.current.__escapeKeyBubbles){d=!1;return}}),!d)return}n(!1,jt(h)?h.nativeEvent:h,"escape-key")}),L=G(h=>{var D;const P=()=>{var A;k(h),(A=re(h))==null||A.removeEventListener("keydown",P)};(D=re(h))==null||D.addEventListener("keydown",P)}),_=G(h=>{var D;const P=s.current.insideReactTree;s.current.insideReactTree=!1;const A=E.current;if(E.current=!1,l==="click"&&A||P||typeof C=="function"&&!C(h))return;const d=re(h),S="["+$n("inert")+"]",T=Ie(r.floating).querySelectorAll(S);let q=O(d)?d:null;for(;q&&!j(q);){const F=X(q);if(j(F)||!O(F))break;q=F}if(T.length&&O(d)&&!Kt(d)&&!Be(d,r.floating)&&Array.from(T).every(F=>!Be(q,F)))return;if(W(d)&&B){const F=j(d),K=I(d),oe=/auto|scroll/,gt=F||oe.test(K.overflowX),pt=F||oe.test(K.overflowY),ht=gt&&d.clientWidth>0&&d.scrollWidth>d.clientWidth,wt=pt&&d.clientHeight>0&&d.scrollHeight>d.clientHeight,yt=K.direction==="rtl",xt=wt&&(yt?h.offsetX<=d.offsetWidth-d.clientWidth:h.offsetX>d.clientWidth),vt=ht&&h.offsetY>d.clientHeight;if(xt||vt)return}const Le=(D=s.current.floatingContext)==null?void 0:D.nodeId,mt=y&&ae(y.nodesRef.current,Le).some(F=>{var K;return Ce(h,(K=F.context)==null?void 0:K.elements.floating)});if(Ce(h,r.floating)||Ce(h,r.domReference)||mt)return;const Me=y?ae(y.nodesRef.current,Le):[];if(Me.length>0){let F=!0;if(Me.forEach(K=>{var oe;if((oe=K.context)!=null&&oe.open&&!K.context.dataRef.current.__outsidePressBubbles){F=!1;return}}),!F)return}n(!1,h,"outside-press")}),V=G(h=>{var D;const P=()=>{var A;_(h),(A=re(h))==null||A.removeEventListener(l,P)};(D=re(h))==null||D.addEventListener(l,P)});g.useEffect(()=>{if(!o||!i)return;s.current.__escapeKeyBubbles=x,s.current.__outsidePressBubbles=R;let h=-1;function D(T){n(!1,T,"ancestor-scroll")}function P(){window.clearTimeout(h),$.current=!0}function A(){h=window.setTimeout(()=>{$.current=!1},we()?5:0)}const d=Ie(r.floating);c&&(d.addEventListener("keydown",b?L:k,b),d.addEventListener("compositionstart",P),d.addEventListener("compositionend",A)),C&&d.addEventListener(l,M?V:_,M);let S=[];return p&&(O(r.domReference)&&(S=J(r.domReference)),O(r.floating)&&(S=S.concat(J(r.floating))),!O(r.reference)&&r.reference&&r.reference.contextElement&&(S=S.concat(J(r.reference.contextElement)))),S=S.filter(T=>{var q;return T!==((q=d.defaultView)==null?void 0:q.visualViewport)}),S.forEach(T=>{T.addEventListener("scroll",D,{passive:!0})}),()=>{c&&(d.removeEventListener("keydown",b?L:k,b),d.removeEventListener("compositionstart",P),d.removeEventListener("compositionend",A)),C&&d.removeEventListener(l,M?V:_,M),S.forEach(T=>{T.removeEventListener("scroll",D)}),window.clearTimeout(h)}},[s,r,c,C,l,o,n,p,i,x,R,k,b,L,_,M,V]),g.useEffect(()=>{s.current.insideReactTree=!1},[s,C,l]);const U=g.useMemo(()=>({onKeyDown:k,...f&&{[Fn[m]]:h=>{n(!1,h.nativeEvent,"reference-press")},...m!=="click"&&{onClick(h){n(!1,h.nativeEvent,"reference-press")}}}}),[k,n,f,m]),B=g.useMemo(()=>({onKeyDown:k,onMouseDown(){E.current=!0},onMouseUp(){E.current=!0},[Nn[l]]:()=>{s.current.insideReactTree=!0}}),[k,l,s]);return g.useMemo(()=>i?{reference:U,floating:B}:{},[i,U,B])}function Bn(e){const{open:t=!1,onOpenChange:o,elements:n}=e,r=On(),s=g.useRef({}),[i]=g.useState(()=>kn()),c=_n()!=null,[a,l]=g.useState(n.reference),f=G((u,w,y)=>{s.current.openEvent=u?w:void 0,i.emit("openchange",{open:u,event:w,reason:y,nested:c}),o?.(u,w,y)}),m=g.useMemo(()=>({setPositionReference:l}),[]),p=g.useMemo(()=>({reference:a||n.reference||null,floating:n.floating||null,domReference:n.reference}),[a,n.reference,n.floating]);return g.useMemo(()=>({dataRef:s,open:t,onOpenChange:f,elements:p,events:i,floatingId:r,refs:m}),[t,f,p,i,r,m])}function qn(e){e===void 0&&(e={});const{nodeId:t}=e,o=Bn({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||o,r=n.elements,[s,i]=g.useState(null),[c,a]=g.useState(null),f=r?.domReference||s,m=g.useRef(null),p=dt();te(()=>{f&&(m.current=f)},[f]);const u=En({...e,elements:{...r,...c&&{reference:c}}}),w=g.useCallback(x=>{const R=O(x)?{getBoundingClientRect:()=>x.getBoundingClientRect(),getClientRects:()=>x.getClientRects(),contextElement:x}:x;a(R),u.refs.setReference(R)},[u.refs]),y=g.useCallback(x=>{(O(x)||x===null)&&(m.current=x,i(x)),(O(u.refs.reference.current)||u.refs.reference.current===null||x!==null&&!O(x))&&u.refs.setReference(x)},[u.refs]),v=g.useMemo(()=>({...u.refs,setReference:y,setPositionReference:w,domReference:m}),[u.refs,y,w]),C=g.useMemo(()=>({...u.elements,domReference:f}),[u.elements,f]),E=g.useMemo(()=>({...u,...n,refs:v,elements:C,nodeId:t}),[u,v,C,t,n]);return te(()=>{n.dataRef.current.floatingContext=E;const x=p?.nodesRef.current.find(R=>R.id===t);x&&(x.context=E)}),g.useMemo(()=>({...u,context:E,refs:v,elements:C}),[u,v,C,E])}function Pe(e,t,o){const n=new Map,r=o==="item";let s=e;if(r&&e){const{[Ue]:i,[qe]:c,...a}=e;s=a}return{...o==="floating"&&{tabIndex:-1,[Sn]:""},...s,...t.map(i=>{const c=i?i[o]:null;return typeof c=="function"?e?c(e):null:c}).concat(e).reduce((i,c)=>(c&&Object.entries(c).forEach(a=>{let[l,f]=a;if(!(r&&[Ue,qe].includes(l)))if(l.indexOf("on")===0){if(n.has(l)||n.set(l,[]),typeof f=="function"){var m;(m=n.get(l))==null||m.push(f),i[l]=function(){for(var p,u=arguments.length,w=new Array(u),y=0;y<u;y++)w[y]=arguments[y];return(p=n.get(l))==null?void 0:p.map(v=>v(...w)).find(v=>v!==void 0)}}}else i[l]=f}),i),{})}}function Zn(e){e===void 0&&(e=[]);const t=e.map(c=>c?.reference),o=e.map(c=>c?.floating),n=e.map(c=>c?.item),r=g.useCallback(c=>Pe(c,e,"reference"),t),s=g.useCallback(c=>Pe(c,e,"floating"),o),i=g.useCallback(c=>Pe(c,e,"item"),n);return g.useMemo(()=>({getReferenceProps:r,getFloatingProps:s,getItemProps:i}),[r,s,i])}const Je=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(t,o)=>(o?"-":"")+t.toLowerCase());function z(e,t){return typeof e=="function"?e(t):e}function In(e,t){const[o,n]=g.useState(e);return e&&!o&&n(!0),g.useEffect(()=>{if(!e&&o){const r=setTimeout(()=>n(!1),t);return()=>clearTimeout(r)}},[e,o,t]),o}function Wn(e,t){t===void 0&&(t={});const{open:o,elements:{floating:n}}=e,{duration:r=250}=t,i=(typeof r=="number"?r:r.close)||0,[c,a]=g.useState("unmounted"),l=In(o,i);return!l&&c==="close"&&a("unmounted"),te(()=>{if(n){if(o){a("initial");const f=requestAnimationFrame(()=>{et.flushSync(()=>{a("open")})});return()=>{cancelAnimationFrame(f)}}a("close")}},[o,n]),{isMounted:l,status:c}}function zn(e,t){t===void 0&&(t={});const{initial:o={opacity:0},open:n,close:r,common:s,duration:i=250}=t,c=e.placement,a=c.split("-")[0],l=g.useMemo(()=>({side:a,placement:c}),[a,c]),f=typeof i=="number",m=(f?i:i.open)||0,p=(f?i:i.close)||0,[u,w]=g.useState(()=>({...z(s,l),...z(o,l)})),{isMounted:y,status:v}=Wn(e,{duration:i}),C=le(o),E=le(n),x=le(r),R=le(s);return te(()=>{const b=z(C.current,l),M=z(x.current,l),$=z(R.current,l),k=z(E.current,l)||Object.keys(b).reduce((L,_)=>(L[_]="",L),{});if(v==="initial"&&w(L=>({transitionProperty:L.transitionProperty,...$,...b})),v==="open"&&w({transitionProperty:Object.keys(k).map(Je).join(","),transitionDuration:m+"ms",...$,...k}),v==="close"){const L=M||b;w({transitionProperty:Object.keys(L).map(Je).join(","),transitionDuration:p+"ms",...$,...L})}},[p,x,C,E,R,m,v,l]),{isMounted:y,styles:u}}const Gn={Box:Re.div`
    position: absolute;
    display: flex;
    padding: 4px;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    min-width: 140px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-lg);
    z-index: 50;
    overflow: auto;
    box-sizing: border-box;
    &[data-size="small"] {
      width: inherit;
    }
  `,List:Re.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    max-height: 40vh;

    button[type="button"] {
      position: relative;
      user-select: none;
      display: flex;
      align-items: center;
      max-height: 40px;
      min-height: 40px;
      justify-content: space-between;
      padding: 8px 10px;
      border-radius: 8px;
      font-variant-numeric: tabular-nums;
      color: var(--gray700);
      ${_e.body4("medium")};

      & svg {
        display: none;
        width: 24px;
        height: 24px;
        fill: var(--primary500);
      }

      &:hover {
        background-color: var(--gray50);
      }
      &:focus {
        background-color: var(--gray100);
        outline: none;
      }
      &:active {
        background-color: var(--gray100);
        span.option-name {
          transform: scale(0.95);
          transition: transform 0.25s;
        }
      }

      &[data-divided="true"] {
        margin-top: 4px;
        &::before {
          content: "";
          position: absolute;
          width: calc(100% + 8px);
          height: 1px;
          top: -4px;
          left: -4px;
          background-color: var(--gray200);
        }
      }

      &[data-active="true"],
      &[aria-selected="true"] {
        background-color: var(--gray50);
        span.icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        & svg {
          display: block;
        }
      }
    }
  `,MultiList:Re.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    max-height: 40vh;

    button[type="button"] {
      position: relative;
      user-select: none;
      display: flex;
      gap: 10px;
      align-items: center;
      max-height: 40px;
      min-height: 40px;
      padding: 8px 10px;
      border-radius: 8px;
      font-variant-numeric: tabular-nums;
      ${_e.body4("regular")};

      &:hover {
        background-color: var(--gray50);
      }
      &:focus {
        background-color: var(--gray100);
        outline: none;
      }
      &:active {
        background-color: var(--gray100);
        span.option-name {
          transform: scale(0.95);
          transition: transform 0.25s;
        }
      }

      span.icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 6px;
        border: 1px solid var(--gray200);

        & svg {
          width: 100%;
          height: 100%;
          display: none;
        }
      }

      &[data-active="true"],
      &[aria-selected="true"] {
        background-color: var(--primary50);
        &:focus {
          background-color: var(--primary100);
        }
        span.icon {
          background-color: var(--primary500);
          border-color: transparent;
          & svg {
            display: block;
            fill: var(--white);
          }
        }
      }
    }
  `};export{Gn as D,Un as a,Zn as b,zn as c,Xn as f,Yn as h,jn as o,qn as u};
