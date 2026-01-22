import{g as ie,R as Z,r as S,j as d,s as je}from"./main-DdFHfJsj.js";import{a as _}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as Oe}from"./useHeader-ycHOJC5z.js";import{B as Le}from"./Container-sz0ta-F3.js";import{F as R,S as Ve,a as Me,T as qe}from"./common-p2nbeD7y.js";import{s as Fe,a as Ye}from"./display-CJakH6Xg.js";import{m as H,s as Ue}from"./common-DjdCxSrg.js";import{B as Be}from"./Card-BNWG98vS.js";import{a as ze}from"./date-kF-GY4rH.js";import{S as We}from"./Send-CulGUB5Y.js";import{a as ce,N as L}from"./NumberFlow-client-48rw3j0J-CFpaRRO2.js";import"./toDate-qOSwr3PX.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./getYear-BVTrOhcD.js";import"./getMonth-CwBXqN0c.js";import"./getDay-BBGk_gga.js";var J={exports:{}},K,de;function Ge(){if(de)return K;de=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return K=n,K}var X,pe;function Qe(){if(pe)return X;pe=1;var n=Ge();function e(){}function t(){}return t.resetWarningCache=e,X=function(){function r(u,p,c,a,s,l){if(l!==n){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:t,resetWarningCache:e};return o.PropTypes=o,o},X}var fe;function Ze(){return fe||(fe=1,J.exports=Qe()()),J.exports}var He=Ze();const b=ie(He);var $,he;function Je(){return he||(he=1,$=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,i,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(i=r;i--!==0;)if(!n(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=r;i--!==0;){var u=o[i];if(!n(e[u],t[u]))return!1}return!0}return e!==e&&t!==t}),$}var Ke=Je();const Xe=ie(Ke);var V={exports:{}},ee,ye;function $e(){if(ye)return ee;ye=1;var n;return n=function(){var e={},t={};return e.on=function(r,i){var o={name:r,handler:i};return t[r]=t[r]||[],t[r].unshift(o),o},e.off=function(r){var i=t[r.name].indexOf(r);i!==-1&&t[r.name].splice(i,1)},e.trigger=function(r,i){var o=t[r],u;if(o)for(u=o.length;u--;)o[u].handler(i)},e},ee=n,ee}var M={exports:{}},te,me;function et(){if(me)return te;me=1,te=function(i,o,u){var p=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");typeof o=="function"&&(u=o,o={}),o=o||{},u=u||function(){},c.type=o.type||"text/javascript",c.charset=o.charset||"utf8",c.async="async"in o?!!o.async:!0,c.src=i,o.attrs&&n(c,o.attrs),o.text&&(c.text=""+o.text);var a="onload"in c?e:t;a(c,u),c.onload||e(c,u),p.appendChild(c)};function n(r,i){for(var o in i)r.setAttribute(o,i[o])}function e(r,i){r.onload=function(){this.onerror=this.onload=null,i(null,r)},r.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+this.src),r)}}function t(r,i){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,i(null,r))}}return te}var ge;function tt(){return ge||(ge=1,(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t=et(),r=i(t);function i(o){return o&&o.__esModule?o:{default:o}}e.default=function(o){var u=new Promise(function(p){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){p(window.YT);return}else{var c=window.location.protocol==="http:"?"http:":"https:";(0,r.default)(c+"//www.youtube.com/iframe_api",function(s){s&&o.trigger("error",s)})}var a=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){a&&a(),p(window.YT)}});return u},n.exports=e.default})(M,M.exports)),M.exports}var q={exports:{}},F={exports:{}},Y={exports:{}},re,ve;function rt(){if(ve)return re;ve=1;var n=1e3,e=n*60,t=e*60,r=t*24,i=r*365.25;re=function(a,s){s=s||{};var l=typeof a;if(l==="string"&&a.length>0)return o(a);if(l==="number"&&isNaN(a)===!1)return s.long?p(a):u(a);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(a))};function o(a){if(a=String(a),!(a.length>100)){var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);if(s){var l=parseFloat(s[1]),f=(s[2]||"ms").toLowerCase();switch(f){case"years":case"year":case"yrs":case"yr":case"y":return l*i;case"days":case"day":case"d":return l*r;case"hours":case"hour":case"hrs":case"hr":case"h":return l*t;case"minutes":case"minute":case"mins":case"min":case"m":return l*e;case"seconds":case"second":case"secs":case"sec":case"s":return l*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}}}function u(a){return a>=r?Math.round(a/r)+"d":a>=t?Math.round(a/t)+"h":a>=e?Math.round(a/e)+"m":a>=n?Math.round(a/n)+"s":a+"ms"}function p(a){return c(a,r,"day")||c(a,t,"hour")||c(a,e,"minute")||c(a,n,"second")||a+" ms"}function c(a,s,l){if(!(a<s))return a<s*1.5?Math.floor(a/s)+" "+l:Math.ceil(a/s)+" "+l+"s"}return re}var be;function at(){return be||(be=1,(function(n,e){e=n.exports=i.debug=i.default=i,e.coerce=c,e.disable=u,e.enable=o,e.enabled=p,e.humanize=rt(),e.names=[],e.skips=[],e.formatters={};var t;function r(a){var s=0,l;for(l in a)s=(s<<5)-s+a.charCodeAt(l),s|=0;return e.colors[Math.abs(s)%e.colors.length]}function i(a){function s(){if(s.enabled){var l=s,f=+new Date,y=f-(t||f);l.diff=y,l.prev=t,l.curr=f,t=f;for(var h=new Array(arguments.length),v=0;v<h.length;v++)h[v]=arguments[v];h[0]=e.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var g=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(x,C){if(x==="%%")return x;g++;var w=e.formatters[C];if(typeof w=="function"){var A=h[g];x=w.call(l,A),h.splice(g,1),g--}return x}),e.formatArgs.call(l,h);var P=s.log||e.log||console.log.bind(console);P.apply(l,h)}}return s.namespace=a,s.enabled=e.enabled(a),s.useColors=e.useColors(),s.color=r(a),typeof e.init=="function"&&e.init(s),s}function o(a){e.save(a),e.names=[],e.skips=[];for(var s=(typeof a=="string"?a:"").split(/[\s,]+/),l=s.length,f=0;f<l;f++)s[f]&&(a=s[f].replace(/\*/g,".*?"),a[0]==="-"?e.skips.push(new RegExp("^"+a.substr(1)+"$")):e.names.push(new RegExp("^"+a+"$")))}function u(){e.enable("")}function p(a){var s,l;for(s=0,l=e.skips.length;s<l;s++)if(e.skips[s].test(a))return!1;for(s=0,l=e.names.length;s<l;s++)if(e.names[s].test(a))return!0;return!1}function c(a){return a instanceof Error?a.stack||a.message:a}})(Y,Y.exports)),Y.exports}var xe;function nt(){return xe||(xe=1,(function(n,e){var t={};e=n.exports=at(),e.log=o,e.formatArgs=i,e.save=u,e.load=p,e.useColors=r,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(a){try{return JSON.stringify(a)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}};function i(a){var s=this.useColors;if(a[0]=(s?"%c":"")+this.namespace+(s?" %c":" ")+a[0]+(s?"%c ":" ")+"+"+e.humanize(this.diff),!!s){var l="color: "+this.color;a.splice(1,0,l,"color: inherit");var f=0,y=0;a[0].replace(/%[a-zA-Z%]/g,function(h){h!=="%%"&&(f++,h==="%c"&&(y=f))}),a.splice(y,0,l)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(a){try{a==null?e.storage.removeItem("debug"):e.storage.debug=a}catch{}}function p(){var a;try{a=e.storage.debug}catch{}return!a&&typeof process<"u"&&"env"in process&&(a=t.DEBUG),a}e.enable(p());function c(){try{return window.localStorage}catch{}}})(F,F.exports)),F.exports}var U={exports:{}},Ce;function it(){return Ce||(Ce=1,(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],n.exports=e.default})(U,U.exports)),U.exports}var B={exports:{}},we;function ot(){return we||(we=1,(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],n.exports=e.default})(B,B.exports)),B.exports}var z={exports:{}},W={exports:{}},Pe;function st(){return Pe||(Pe=1,(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},n.exports=e.default})(W,W.exports)),W.exports}var Se;function lt(){return Se||(Se=1,(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t=st(),r=i(t);function i(o){return o&&o.__esModule?o:{default:o}}e.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},n.exports=e.default})(z,z.exports)),z.exports}var _e;function ut(){return _e||(_e=1,(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t=nt(),r=s(t),i=it(),o=s(i),u=ot(),p=s(u),c=lt(),a=s(c);function s(y){return y&&y.__esModule?y:{default:y}}var l=(0,r.default)("youtube-player"),f={};f.proxyEvents=function(y){var h={},v=function(N){var T="on"+N.slice(0,1).toUpperCase()+N.slice(1);h[T]=function(m){l('event "%s"',T,m),y.trigger(N,m)}},g=!0,P=!1,x=void 0;try{for(var C=p.default[Symbol.iterator](),w;!(g=(w=C.next()).done);g=!0){var A=w.value;v(A)}}catch(O){P=!0,x=O}finally{try{!g&&C.return&&C.return()}finally{if(P)throw x}}return h},f.promisifyPlayer=function(y){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v={},g=function(T){h&&a.default[T]?v[T]=function(){for(var m=arguments.length,I=Array(m),k=0;k<m;k++)I[k]=arguments[k];return y.then(function(E){var D=a.default[T],Re=E.getPlayerState(),oe=E[T].apply(E,I);return D.stateChangeRequired||Array.isArray(D.acceptableStates)&&D.acceptableStates.indexOf(Re)===-1?new Promise(function(se){var Ne=function le(){var De=E.getPlayerState(),ue=void 0;typeof D.timeout=="number"&&(ue=setTimeout(function(){E.removeEventListener("onStateChange",le),se()},D.timeout)),Array.isArray(D.acceptableStates)&&D.acceptableStates.indexOf(De)!==-1&&(E.removeEventListener("onStateChange",le),clearTimeout(ue),se())};E.addEventListener("onStateChange",Ne)}).then(function(){return oe}):oe})}:v[T]=function(){for(var m=arguments.length,I=Array(m),k=0;k<m;k++)I[k]=arguments[k];return y.then(function(E){return E[T].apply(E,I)})}},P=!0,x=!1,C=void 0;try{for(var w=o.default[Symbol.iterator](),A;!(P=(A=w.next()).done);P=!0){var O=A.value;g(O)}}catch(N){x=!0,C=N}finally{try{!P&&w.return&&w.return()}finally{if(x)throw C}}return v},e.default=f,n.exports=e.default})(q,q.exports)),q.exports}var Te;function ct(){return Te||(Te=1,(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},r=$e(),i=a(r),o=tt(),u=a(o),p=ut(),c=a(p);function a(l){return l&&l.__esModule?l:{default:l}}var s=void 0;e.default=function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,h=(0,i.default)();if(s||(s=(0,u.default)(h)),f.events)throw new Error("Event handlers cannot be overwritten.");if(typeof l=="string"&&!document.getElementById(l))throw new Error('Element "'+l+'" does not exist.');f.events=c.default.proxyEvents(h);var v=new Promise(function(P){if((typeof l>"u"?"undefined":t(l))==="object"&&l.playVideo instanceof Function){var x=l;P(x)}else s.then(function(C){var w=new C.Player(l,f);return h.on("ready",function(){P(w)}),null})}),g=c.default.promisifyPlayer(v,y);return g.on=h.on,g.off=h.off,g},n.exports=e.default})(V,V.exports)),V.exports}var dt=ct();const pt=ie(dt);var ft=Object.defineProperty,ht=Object.defineProperties,yt=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,Ae=(n,e,t)=>e in n?ft(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ae=(n,e)=>{for(var t in e||(e={}))mt.call(e,t)&&Ae(n,t,e[t]);if(Ee)for(var t of Ee(e))gt.call(e,t)&&Ae(n,t,e[t]);return n},ne=(n,e)=>ht(n,yt(e)),vt=(n,e,t)=>new Promise((r,i)=>{var o=c=>{try{p(t.next(c))}catch(a){i(a)}},u=c=>{try{p(t.throw(c))}catch(a){i(a)}},p=c=>c.done?r(c.value):Promise.resolve(c.value).then(o,u);p((t=t.apply(n,e)).next())});function bt(n,e){var t,r;if(n.videoId!==e.videoId)return!0;const i=((t=n.opts)==null?void 0:t.playerVars)||{},o=((r=e.opts)==null?void 0:r.playerVars)||{};return i.start!==o.start||i.end!==o.end}function Ie(n={}){return ne(ae({},n),{height:0,width:0,playerVars:ne(ae({},n.playerVars),{autoplay:0,start:0,end:0})})}function xt(n,e){return n.videoId!==e.videoId||!Xe(Ie(n.opts),Ie(e.opts))}function Ct(n,e){var t,r,i,o;return n.id!==e.id||n.className!==e.className||((t=n.opts)==null?void 0:t.width)!==((r=e.opts)==null?void 0:r.width)||((i=n.opts)==null?void 0:i.height)!==((o=e.opts)==null?void 0:o.height)||n.iframeClassName!==e.iframeClassName||n.title!==e.title}var wt={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},Pt={videoId:b.string,id:b.string,className:b.string,iframeClassName:b.string,style:b.object,title:b.string,loading:b.oneOf(["lazy","eager"]),opts:b.objectOf(b.any),onReady:b.func,onError:b.func,onPlay:b.func,onPause:b.func,onEnd:b.func,onStateChange:b.func,onPlaybackRateChange:b.func,onPlaybackQualityChange:b.func},G=class extends Z.Component{constructor(n){super(n),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,r;return(r=(t=this.props).onReady)==null?void 0:r.call(t,e)},this.onPlayerError=e=>{var t,r;return(r=(t=this.props).onError)==null?void 0:r.call(t,e)},this.onPlayerStateChange=e=>{var t,r,i,o,u,p,c,a;switch((r=(t=this.props).onStateChange)==null||r.call(t,e),e.data){case G.PlayerState.ENDED:(o=(i=this.props).onEnd)==null||o.call(i,e);break;case G.PlayerState.PLAYING:(p=(u=this.props).onPlay)==null||p.call(u,e);break;case G.PlayerState.PAUSED:(a=(c=this.props).onPause)==null||a.call(c,e);break}},this.onPlayerPlaybackRateChange=e=>{var t,r;return(r=(t=this.props).onPlaybackRateChange)==null?void 0:r.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,r;return(r=(t=this.props).onPlaybackQualityChange)==null?void 0:r.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=ne(ae({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=pt(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(t=>{this.props.title&&t.setAttribute("title",this.props.title),this.props.loading&&t.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(t=>{this.props.id?t.setAttribute("id",this.props.id):t.removeAttribute("id"),this.props.iframeClassName?t.setAttribute("class",this.props.iframeClassName):t.removeAttribute("class"),this.props.opts&&this.props.opts.width?t.setAttribute("width",this.props.opts.width.toString()):t.removeAttribute("width"),this.props.opts&&this.props.opts.height?t.setAttribute("height",this.props.opts.height.toString()):t.removeAttribute("height"),this.props.title?t.setAttribute("title",this.props.title):t.setAttribute("title","YouTube video player"),this.props.loading?t.setAttribute("loading",this.props.loading):t.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,r,i;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let o=!1;const u={videoId:this.props.videoId};if((t=this.props.opts)!=null&&t.playerVars&&(o=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(u.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(u.endSeconds=this.props.opts.playerVars.end)),o){(r=this.internalPlayer)==null||r.loadVideoById(u);return}(i=this.internalPlayer)==null||i.cueVideoById(u)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(n){return vt(this,null,function*(){Ct(n,this.props)&&this.updatePlayer(),xt(n,this.props)&&(yield this.resetPlayer()),bt(n,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return Z.createElement("div",{className:this.props.className,style:this.props.style},Z.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Q=G;Q.propTypes=Pt;Q.defaultProps=wt;Q.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var St=Q;function _t(n,e){const{width:t,height:r,controller:i=!0}=e||{},[o,u]=S.useState(0),[p,c]=S.useState(0),[a,s]=S.useState(-1),[l,f]=S.useState(1),[y,h]=S.useState(),v={width:t,height:r},g={playerVars:{start:0,controls:i?1:0,modestbranding:1,iv_load_policy:3,rel:0}},P=v?{...v,...g}:g;function x(m){s(m.data),n.current?.internalPlayer.getDuration().then(I=>{c(I)})}function C(m){if(s(m.data),m.data!==1)clearInterval(y);else{const I=setInterval(()=>{u(m.target.getCurrentTime().toFixed(0))},1e3);h(I)}}function w(m){f(m.target.getPlaybackRate())}return{playerConnect:{onReady:x,onPlay:C,onStateChange:C,onPlaybackRateChange:w},currentTime:o,duration:p,playerState:a,handlePlayPause:()=>{a===1?n.current?.internalPlayer.pauseVideo():n.current?.internalPlayer.playVideo()},playbackRate:l,handlePlaybackRate:m=>{n.current?.internalPlayer.setPlaybackRate(m).then(()=>{f(m)})},handleSeekTo:m=>{n.current?.internalPlayer.seekTo(m)},opts:P}}const Tt=(n,e)=>{const t=S.useRef(0);return()=>{const r=Date.now();r-t.current>=e&&(t.current=r,n())}},ke=[{author:"홍길동",writtenAt:"2024-04-24T06:40",time:"03:20",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-24T06:42",time:"04:20",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-24T06:43",time:"07:11",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-24T06:06",time:"09:55",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-24T21:34",time:"10:01",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-24T20:30",time:"12:12",contents:"우리 센터가 상대 센터보다 작아서 이건 박스게임 보다는 사이드 플레이가 좋을 것 같은데  상대도 센터 믿고 게임하는게 보이니까 좌측 비어있으니 좌측으로 돌고 @김민우 중간으로 빠져서 패스해봐"},{author:"홍길동",writtenAt:"2024-04-25T12:27",time:"14:33",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-25T12:32",time:"15:41",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-25T12:37",time:"64:11",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-25T13:40",time:"66:08",contents:"내용입니다. 오른쪽에서 왼쪽으로 이동. 실수를 줄여야 합니다."},{author:"홍길동",writtenAt:"2024-04-25T20:18",time:"90:48",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-25T21:32",time:"91:34",contents:"여기임"},{author:"홍길동",writtenAt:"2024-04-25T21:32",time:"120:34",contents:"여기임"}],j={youtubeId:"IVKWwtZFU3k",title:"2024 KUSF 대학배구 U-리그",subTitle:"한양대 : 인하대",description:"01:06:50 ~ 02:01:30 TEAM1(과기대) vs Scuba(시립대) 상대는 56번이 메인이니까 56번 위주로 보기",createdAt:"2024-06-13",players:[{playerName:"지민",playerId:"827421"},{playerName:"석우",playerId:"800421"},{playerName:"미란",playerId:"98462"},{playerName:"지원",playerId:"123"},{playerName:"현우",playerId:"322"},{playerName:"대원",playerId:"12"},{playerName:"재원",playerId:"56"},{playerName:"주원",playerId:"78"},{playerName:"도원",playerId:"827421"},{playerName:"강훈",playerId:"827421"},{playerName:"태민",playerId:"827421"}]},Et="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2836'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2836)'%3e%3cpath%20d='M7.875%206.74625L10.5787%203.198C10.7582%202.95783%2010.9714%202.7815%2011.2183%202.669C11.4651%202.55633%2011.7257%202.5%2012%202.5C12.2743%202.5%2012.5349%202.55633%2012.7817%202.669C13.0286%202.7815%2013.2417%202.95783%2013.4212%203.198L16.125%206.74625L20.2595%208.14225C20.6545%208.26925%2020.9625%208.49317%2021.1835%208.814C21.4047%209.135%2021.5152%209.4895%2021.5152%209.8775C21.5152%2010.0567%2021.4891%2010.2353%2021.4368%2010.4133C21.3844%2010.5913%2021.2984%2010.7618%2021.1788%2010.925L18.4865%2014.6615L18.5865%2018.627C18.6032%2019.1535%2018.4296%2019.5972%2018.0658%2019.9583C17.7021%2020.3194%2017.2783%2020.5%2016.7943%2020.5C16.7801%2020.5%2016.6128%2020.4782%2016.2923%2020.4345L12%2019.2038L7.70775%2020.4345C7.62442%2020.4678%207.53842%2020.4871%207.44975%2020.4923C7.36108%2020.4974%207.27975%2020.5%207.20575%2020.5C6.71725%2020.5%206.29225%2020.3194%205.93075%2019.9583C5.56925%2019.5972%205.39683%2019.1535%205.4135%2018.627L5.5135%2014.6365L2.8365%2010.925C2.71683%2010.7612%202.63083%2010.5899%202.5785%2010.4113C2.52617%2010.2324%202.5%2010.0537%202.5%209.875C2.5%209.49783%202.60983%209.14708%202.8295%208.82275C3.04917%208.49842%203.356%208.26842%203.75%208.13275L7.875%206.74625ZM8.802%208.0385L4.23075%209.5615C4.13458%209.5935%204.06892%209.65925%204.03375%209.75875C3.99842%209.85808%204.01283%209.94942%204.077%2010.0328L7.023%2014.1905L6.9135%2018.6578C6.907%2018.7668%206.94542%2018.8533%207.02875%2018.9172C7.11208%2018.9814%207.20508%2018.9975%207.30775%2018.9655L12%2017.648L16.6923%2018.9905C16.7949%2019.0225%2016.8879%2019.0064%2016.9712%2018.9423C17.0546%2018.8783%2017.093%2018.7917%2017.0865%2018.6828L16.977%2014.1905L19.923%2010.0827C19.9872%209.99942%2020.0016%209.90808%2019.9663%209.80875C19.9311%209.70925%2019.8654%209.6435%2019.7693%209.6115L15.198%208.0385L12.2405%204.13475C12.1827%204.05125%2012.1025%204.0095%2012%204.0095C11.8975%204.0095%2011.8173%204.05125%2011.7595%204.13475L8.802%208.0385Z'%20/%3e%3c/g%3e%3c/svg%3e",At="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2770'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2770)'%3e%3cpath%20d='M16.8055%2021.5C16.057%2021.5%2015.4215%2021.2383%2014.899%2020.7148C14.3767%2020.1912%2014.1155%2019.5556%2014.1155%2018.8078C14.1155%2018.7078%2014.1501%2018.4648%2014.2193%2018.0788L7.10775%2013.8923C6.86675%2014.1423%206.58042%2014.3381%206.24875%2014.4798C5.91708%2014.6214%205.56175%2014.6923%205.18275%2014.6923C4.43758%2014.6923%203.80417%2014.4294%203.2825%2013.9038C2.76083%2013.3781%202.5%2012.7435%202.5%2012C2.5%2011.2565%202.76083%2010.6219%203.2825%2010.0962C3.80417%209.57058%204.43758%209.30775%205.18275%209.30775C5.56175%209.30775%205.91708%209.37858%206.24875%209.52025C6.58042%209.66192%206.86675%209.85775%207.10775%2010.1077L14.2193%205.93075C14.1796%205.80775%2014.1523%205.68725%2014.1375%205.56925C14.1228%205.45125%2014.1155%205.32558%2014.1155%205.19225C14.1155%204.44442%2014.3774%203.80875%2014.9012%203.28525C15.4253%202.76175%2016.0615%202.5%2016.81%202.5C17.5585%202.5%2018.1939%202.762%2018.7163%203.286C19.2388%203.80983%2019.5%204.446%2019.5%205.1945C19.5%205.943%2019.2383%206.5785%2018.7148%207.101C18.1912%207.62333%2017.5556%207.8845%2016.8077%207.8845C16.4269%207.8845%2016.0728%207.81208%2015.7452%207.66725C15.4176%207.52242%2015.1333%207.325%2014.8923%207.075L7.78075%2011.2615C7.82042%2011.3847%207.84767%2011.5052%207.8625%2011.623C7.87717%2011.741%207.8845%2011.8667%207.8845%2012C7.8845%2012.1333%207.87717%2012.259%207.8625%2012.377C7.84767%2012.4948%207.82042%2012.6153%207.78075%2012.7385L14.8923%2016.925C15.1333%2016.675%2015.4176%2016.4776%2015.7452%2016.3328C16.0728%2016.1879%2016.4269%2016.1155%2016.8077%2016.1155C17.5556%2016.1155%2018.1912%2016.3774%2018.7148%2016.9012C19.2383%2017.4253%2019.5%2018.0615%2019.5%2018.81C19.5%2019.5585%2019.238%2020.1939%2018.714%2020.7163C18.1902%2021.2388%2017.554%2021.5%2016.8055%2021.5ZM16.8077%2020C17.1456%2020%2017.4287%2019.8857%2017.6572%2019.6572C17.8857%2019.4287%2018%2019.1456%2018%2018.8078C18%2018.4699%2017.8857%2018.1868%2017.6572%2017.9583C17.4287%2017.7296%2017.1456%2017.6152%2016.8077%2017.6152C16.4699%2017.6152%2016.1868%2017.7296%2015.9583%2017.9583C15.7296%2018.1868%2015.6152%2018.4699%2015.6152%2018.8078C15.6152%2019.1456%2015.7296%2019.4287%2015.9583%2019.6572C16.1868%2019.8857%2016.4699%2020%2016.8077%2020ZM5.18275%2013.1923C5.52325%2013.1923%205.80867%2013.078%206.039%2012.8495C6.2695%2012.621%206.38475%2012.3378%206.38475%2012C6.38475%2011.6622%206.2695%2011.379%206.039%2011.1505C5.80867%2010.922%205.52325%2010.8077%205.18275%2010.8077C4.84758%2010.8077%204.56667%2010.922%204.34%2011.1505C4.11333%2011.379%204%2011.6622%204%2012C4%2012.3378%204.11333%2012.621%204.34%2012.8495C4.56667%2013.078%204.84758%2013.1923%205.18275%2013.1923ZM16.8077%206.38475C17.1456%206.38475%2017.4287%206.27042%2017.6572%206.04175C17.8857%205.81325%2018%205.53008%2018%205.19225C18%204.85442%2017.8857%204.57125%2017.6572%204.34275C17.4287%204.11425%2017.1456%204%2016.8077%204C16.4699%204%2016.1868%204.11425%2015.9583%204.34275C15.7296%204.57125%2015.6152%204.85442%2015.6152%205.19225C15.6152%205.53008%2015.7296%205.81325%2015.9583%206.04175C16.1868%206.27042%2016.4699%206.38475%2016.8077%206.38475Z'%20/%3e%3c/g%3e%3c/svg%3e";function It(n){const[e,t]=S.useState({show:!1,playerId:"",x:0,y:0}),r=(i,o)=>{const u=o.currentTarget,p=u.getBoundingClientRect();p.left+window.scrollX,p.top+window.scrollY+u.clientHeight};return d.jsxs(kt,{children:[d.jsx("h3",{className:"video-match",children:n.subTitle}),d.jsx("h2",{className:"video-title",children:n.title}),d.jsx("p",{className:"video-description",children:n.description}),d.jsxs("div",{className:"video-setting",children:[d.jsx("span",{children:n.createdAt}),d.jsxs("ul",{className:"video-share",children:[d.jsx("li",{children:d.jsx(Et,{})}),d.jsx("li",{children:d.jsx(At,{})})]})]}),d.jsx("div",{className:"match-players-wrapper",children:d.jsx("ul",{className:"match-players",ref:i=>Ye(i,"horizontal"),onScroll:i=>Fe(i,"horizontal"),children:n.players.map((i,o)=>d.jsx("li",{onClick:u=>r(i.playerId,u),children:i.playerName},`${i.playerId}${o}`))})})]})}const kt=_.div`
  padding: 0 20px 16px;

  .video-match {
    margin-bottom: 2px;
    ${R.body4("regular")};
    color: var(--gray600);
  }
  .video-title {
    ${R.body2("semibold")};
  }
  .video-description {
    margin: 12px 0 8px;
    color: var(--gray800);
    ${R.body4("regular")};
  }
  .video-setting {
    margin: 16px 0 6px;
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray300);
    color: var(--gray700);
    ${R.body4("regular")};

    .video-share {
      display: flex;
      gap: 12px;
      svg {
        width: 16px;
        height: 16px;
        fill: var(--gray700);
      }
    }
  }

  .match-players-wrapper {
    ${Ve("var(--background-light-rgb)")};
  }
  .match-players {
    display: flex;
    gap: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    ${Me};

    li {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      overflow: hidden;
      border: 1px solid var(--gray300);
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: -0.5px;
    }
  }
`;function Rt(n){const{commentValue:e,activeComment:t,setActiveComment:r,handleSeekTo:i,playerDuration:o,playerCurrentTime:u,nextCommentTime:p}=n,c=H(e.time),a=p?H(p):o,s=c<=u&&a>u,l=f=>{i(H(f))};return d.jsxs(Nt,{children:[d.jsx(Dt,{onClick:()=>l(e.time),children:d.jsx("div",{className:s?"now-active":"",children:e.time})}),d.jsx(jt,{ref:f=>{f&&s&&t!==e.time&&(f.scrollIntoView({block:"center",behavior:"smooth"}),r(e.time))},"data-info":`${e.author} • ${ze(e.writtenAt,{displayDateType:".",displayDayName:"hide",displayYear:"not-this-year",displayTime:"24h"})}`,children:d.jsx("span",{className:"contents",children:e.contents})})]})}const Nt=_.li`
  position: relative;
  margin: 0 -16px;
  padding: 8px 16px 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: "";
    position: absolute;
    border-left: 1px dashed var(--gray500);
    width: 1px;
    height: calc(100% - 2px);
    left: calc(27px + 16px);
    top: 0;
  }

  &:first-of-type::before {
    top: 16px;
    height: calc(100% - 16px);
  }
  &:last-of-type::before {
    height: 16px;
  }
`,Dt=_.div`
  ${R.body4("regular")};
  margin: 8px 0;
  height: 100%;
  z-index: 1;

  div {
    padding: 3px 0;
    width: 54px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.05rem;
    font-weight: 800;
    border-radius: 24px;
    background-color: var(--background-light);
    user-select: none;
    word-break: keep-all;
    transition: transform 0.2s;
  }
  div.now-active {
    border: 1px solid transparent;
    background-color: var(--main);
    color: #fff;
  }
  &:active > div {
    transform: scale(0.95);
  }
`,jt=_(Be)`
  flex: 1;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.2s;
  ${R.body3("regular")};
  line-height: 2.4rem;

  &::after {
    content: attr(data-info);
    display: block;
    opacity: 0.6;
    margin-top: 6px;
    ${R.body4("regular")}
  }
`;function Ot({articleId:n,currentTime:e}){const[t,r]=S.useState("");return d.jsxs(Lt,{children:[d.jsx("button",{type:"button","aria-label":"현재 재생시간 설정",className:`target-time ${t!==""?"valid-time":""}`,onClick:()=>r(Ue(e)),children:t===""?"지 금":t}),d.jsx("input",{type:"text",className:"target-comment",disabled:t==="",placeholder:t===""?"지금을 눌러 코멘트 시간 설정":"여기에 코멘트 넣기..."}),d.jsx("button",{type:"button",className:"comment-submit","aria-label":"댓글 등록",children:d.jsx(We,{width:20,height:20})})]})}const Lt=_.div`
  display: flex;
  ${R.body3("semibold")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  button.target-time {
    min-width: 52px;
    padding: 6px 2px;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.045rem;
    font-variant-numeric: tabular-nums;
    text-align: center;
    border-radius: 8px;

    color: var(--white);
    background-color: var(--gray500);
    &.valid-time {
      font-weight: 700;
      color: var(--main);
      background-color: rgba(var(--sub2-rgb), 0.7);
    }
  }

  .target-comment {
    width: calc(100% - 28px);
    padding: 6px 8px;
    font-size: 1.4rem;
    border-radius: 8px;
    border: 1px solid var(--primary300);
    ${qe("var(--background-light)",{focus:!0})};

    &:disabled {
      border: 1px solid var(--gray200);
      & + button.comment-submit > svg {
        fill: var(--gray400);
      }
    }
  }
  .comment-submit {
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: var(--main);
    }
  }
`;function Vt({currentTime:n,duration:e,playbackRate:t,handlePlaybackRate:r,playerState:i,handlePlayPause:o}){const u=l=>{const f=Math.floor(l/3600),y=Math.floor(l%3600/60)+f*60,h=l%60;return{mm:y,ss:h}},{mm:p,ss:c}=u(n),{mm:a,ss:s}=u(e);return d.jsxs(Mt,{children:[d.jsxs("p",{children:[d.jsxs(ce,{children:[d.jsx(L,{trend:0,value:p,format:{minimumIntegerDigits:2,maximumFractionDigits:3}}),d.jsx(L,{prefix:":",trend:1,value:c,digits:{1:{max:5}},format:{minimumIntegerDigits:2},willChange:!0})]}),"/",d.jsxs(ce,{children:[d.jsx(L,{trend:0,value:a,format:{minimumIntegerDigits:2,maximumFractionDigits:3}}),d.jsx(L,{prefix:":",trend:1,value:s,digits:{1:{max:5}},format:{minimumIntegerDigits:2}})]})]}),d.jsxs("button",{type:"button",className:"playback-rate",onClick:()=>{r(t===1?2:1)},children:["x",t]}),d.jsx("button",{type:"button",className:`play-pause-btn ${i===1&&"playing"}`,onClick:o,disabled:i===3,children:i===1?"일시정지":i===3?"버퍼링":"재생"})]})}const Mt=_.div`
  display: flex;
  padding: 0 2px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  p {
    user-select: none;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.045rem;
    font-variant-numeric: tabular-nums;
  }
  button {
    padding: 6px 12px;
    font-size: 1.6rem;
    border-radius: 10px;
  }
  button.play-pause-btn {
    width: 82px;
    color: var(--white);
    background-color: var(--main);

    &:disabled {
      color: var(--gray500);
      background-color: var(--gray200);
    }
    &.playing {
      background-color: var(--warning500);
    }
  }

  button.playback-rate {
    flex: 1;
    margin: 0 8px;
    background-color: var(--gray200);
  }
`;function lr(){const{articleId:n}=je.useParams();Oe({title:j.title});const e=S.useRef(null),t=S.useRef(null),[r,i]=S.useState(""),[o,u]=S.useState(!1),[p,c]=S.useState({ready:!1,width:500}),a={width:o?p.width/2:p.width,height:o?Math.floor(p.width*(9/16))/2:Math.floor(p.width*(9/16))},{playerConnect:s,currentTime:l,duration:f,handleSeekTo:y,handlePlayPause:h,playerState:v,playbackRate:g,handlePlaybackRate:P,opts:x}=_t(e,{...a,controller:!1}),C=Tt(()=>{window.scrollY>a.height*1.1?u(!0):u(!1)},50);return S.useLayoutEffect(()=>(t.current&&c({ready:!0,width:t.current.clientWidth}),window.addEventListener("scroll",C),()=>{window.removeEventListener("scroll",C)}),[t.current]),d.jsxs(qt,{ref:t,children:[d.jsx(Ft,{className:o?"mini":"",height:a.height,children:p.ready&&d.jsx(Yt,{className:o?"mini":"",children:d.jsx(St,{ref:e,videoId:j.youtubeId,opts:x,...s})})}),d.jsxs(Ut,{children:[d.jsx(Bt,{children:d.jsx(It,{subTitle:j.subTitle,title:j.title,description:j.description,createdAt:j.createdAt,players:j.players})}),d.jsx(zt,{children:ke.map((w,A)=>d.jsx(Rt,{handleSeekTo:y,activeComment:r,setActiveComment:i,playerCurrentTime:l,playerDuration:f,nextCommentTime:ke[A+1]?.time,commentValue:w},w.time))}),d.jsxs(Wt,{children:[d.jsx(Vt,{duration:f,currentTime:l,playerState:v,playbackRate:g,handlePlaybackRate:P,handlePlayPause:h}),d.jsx(Ot,{articleId:n,currentTime:l})]})]})]})}const qt=_(Le)`
  display: flex;
  flex-direction: column;
  padding: 0 16px 40px;
`,Ft=_.section`
  margin: 0 -16px;
  width: calc(var(--mobile-max-width));
  height: ${({height:n})=>n}px;
  overflow: hidden;
  z-index: 10;
  &.mini {
    height: ${({height:n})=>n*2}px;
  }
`,Yt=_.div`
  &.mini {
    position: fixed;
    margin: 20px 16px 0;
    right: 50%;
    border-radius: 12px;
    overflow: hidden;
    transform: translateX(calc(50% + var(--mobile-max-width) / 4));
  }
`,Ut=_.section`
  flex: 1;
`,Bt=_.div`
  display: flex;
  padding-top: 12px;
  margin-left: -16px;
  margin-right: -16px;
  flex-direction: column;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  gap: 16px;
  background: var(--background-light);
  box-shadow: var(--shadow-alpha20);
`,zt=_.ul`
  padding: 12px 16px;
  margin-left: -16px;
  margin-right: -16px;
`,Wt=_.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 16px;
  bottom: 0;
  width: var(--mobile-max-width);
  margin: 0 -16px;
  padding: 8px 14px calc(20px + env(safe-area-inset-bottom) / 2);
  border-top: 1px solid var(--gray100);
  background: var(--white);
  z-index: 10;
`;export{lr as component};
