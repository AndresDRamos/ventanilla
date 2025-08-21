(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Eg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var sf={exports:{}},us={},af={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),bg=Symbol.for("react.portal"),jg=Symbol.for("react.fragment"),Cg=Symbol.for("react.strict_mode"),Tg=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),Rg=Symbol.for("react.suspense"),Og=Symbol.for("react.memo"),Ig=Symbol.for("react.lazy"),Bu=Symbol.iterator;function Lg(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uf=Object.assign,cf={};function jn(e,t,r){this.props=e,this.context=t,this.refs=cf,this.updater=r||lf}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function df(){}df.prototype=jn.prototype;function zl(e,t,r){this.props=e,this.context=t,this.refs=cf,this.updater=r||lf}var Dl=zl.prototype=new df;Dl.constructor=zl;uf(Dl,jn.prototype);Dl.isPureReactComponent=!0;var qu=Array.isArray,ff=Object.prototype.hasOwnProperty,Ul={current:null},hf={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)ff.call(t,n)&&!hf.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Ro,type:e,key:i,ref:s,props:o,_owner:Ul.current}}function Ng(e,t){return{$$typeof:Ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ro}function zg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Wu=/\/+/g;function Ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zg(""+e.key):t.toString(36)}function mi(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ro:case bg:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+Ds(s,0):n,qu(o)?(r="",e!=null&&(r=e.replace(Wu,"$&/")+"/"),mi(o,t,r,"",function(u){return u})):o!=null&&(Fl(o)&&(o=Ng(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Wu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",qu(e))for(var a=0;a<e.length;a++){i=e[a];var l=n+Ds(i,a);s+=mi(i,t,r,l,o)}else if(l=Lg(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=n+Ds(i,a++),s+=mi(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qo(e,t,r){if(e==null)return e;var n=[],o=0;return mi(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Dg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},vi={transition:null},Ug={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:vi,ReactCurrentOwner:Ul};function gf(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:qo,forEach:function(e,t,r){qo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return qo(e,function(){t++}),t},toArray:function(e){return qo(e,function(t){return t})||[]},only:function(e){if(!Fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=jn;H.Fragment=jg;H.Profiler=Tg;H.PureComponent=zl;H.StrictMode=Cg;H.Suspense=Rg;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ug;H.act=gf;H.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=uf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ul.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ff.call(t,l)&&!hf.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:Ro,type:e.type,key:o,ref:i,props:n,_owner:s}};H.createContext=function(e){return e={$$typeof:$g,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pg,_context:e},e.Consumer=e};H.createElement=pf;H.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Ag,render:e}};H.isValidElement=Fl;H.lazy=function(e){return{$$typeof:Ig,_payload:{_status:-1,_result:e},_init:Dg}};H.memo=function(e,t){return{$$typeof:Og,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=vi.transition;vi.transition={};try{e()}finally{vi.transition=t}};H.unstable_act=gf;H.useCallback=function(e,t){return Ne.current.useCallback(e,t)};H.useContext=function(e){return Ne.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ne.current.useEffect(e,t)};H.useId=function(){return Ne.current.useId()};H.useImperativeHandle=function(e,t,r){return Ne.current.useImperativeHandle(e,t,r)};H.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ne.current.useMemo(e,t)};H.useReducer=function(e,t,r){return Ne.current.useReducer(e,t,r)};H.useRef=function(e){return Ne.current.useRef(e)};H.useState=function(e){return Ne.current.useState(e)};H.useSyncExternalStore=function(e,t,r){return Ne.current.useSyncExternalStore(e,t,r)};H.useTransition=function(){return Ne.current.useTransition()};H.version="18.3.1";af.exports=H;var C=af.exports;const bt=kg(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=C,Mg=Symbol.for("react.element"),Bg=Symbol.for("react.fragment"),qg=Object.prototype.hasOwnProperty,Wg=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hg={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)qg.call(t,n)&&!Hg.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Mg,type:e,key:i,ref:s,props:o,_owner:Wg.current}}us.Fragment=Bg;us.jsx=mf;us.jsxs=mf;sf.exports=us;var f=sf.exports,ka={},vf={exports:{}},Xe={},yf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,A){var I=b.length;b.push(A);e:for(;0<I;){var N=I-1>>>1,D=b[N];if(0<o(D,A))b[N]=A,b[I]=D,I=N;else break e}}function r(b){return b.length===0?null:b[0]}function n(b){if(b.length===0)return null;var A=b[0],I=b.pop();if(I!==A){b[0]=I;e:for(var N=0,D=b.length,Re=D>>>1;N<Re;){var je=2*(N+1)-1,We=b[je],Se=je+1,He=b[Se];if(0>o(We,I))Se<D&&0>o(He,We)?(b[N]=He,b[Se]=I,N=Se):(b[N]=We,b[je]=I,N=je);else if(Se<D&&0>o(He,I))b[N]=He,b[Se]=I,N=Se;else break e}}return A}function o(b,A){var I=b.sortIndex-A.sortIndex;return I!==0?I:b.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,p=3,v=!1,w=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var A=r(u);A!==null;){if(A.callback===null)n(u);else if(A.startTime<=b)n(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=r(u)}}function x(b){if(y=!1,m(b),!w)if(r(l)!==null)w=!0,ue(k);else{var A=r(u);A!==null&&xe(x,A.startTime-b)}}function k(b,A){w=!1,y&&(y=!1,h(P),P=-1),v=!0;var I=p;try{for(m(A),d=r(l);d!==null&&(!(d.expirationTime>A)||b&&!z());){var N=d.callback;if(typeof N=="function"){d.callback=null,p=d.priorityLevel;var D=N(d.expirationTime<=A);A=e.unstable_now(),typeof D=="function"?d.callback=D:d===r(l)&&n(l),m(A)}else n(l);d=r(l)}if(d!==null)var Re=!0;else{var je=r(u);je!==null&&xe(x,je.startTime-A),Re=!1}return Re}finally{d=null,p=I,v=!1}}var E=!1,S=null,P=-1,R=5,O=-1;function z(){return!(e.unstable_now()-O<R)}function L(){if(S!==null){var b=e.unstable_now();O=b;var A=!0;try{A=S(!0,b)}finally{A?Y():(E=!1,S=null)}}else E=!1}var Y;if(typeof g=="function")Y=function(){g(L)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,se=de.port2;de.port1.onmessage=L,Y=function(){se.postMessage(null)}}else Y=function(){j(L,0)};function ue(b){S=b,E||(E=!0,Y())}function xe(b,A){P=j(function(){b(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,ue(k))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(b){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var I=p;p=A;try{return b()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var I=p;p=b;try{return A()}finally{p=I}},e.unstable_scheduleCallback=function(b,A,I){var N=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?N+I:N):I=N,b){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=I+D,b={id:c++,callback:A,priorityLevel:b,startTime:I,expirationTime:D,sortIndex:-1},I>N?(b.sortIndex=I,t(u,b),r(l)===null&&b===r(u)&&(y?(h(P),P=-1):y=!0,xe(x,I-N))):(b.sortIndex=D,t(l,b),w||v||(w=!0,ue(k))),b},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(b){var A=p;return function(){var I=p;p=A;try{return b.apply(this,arguments)}finally{p=I}}}})(wf);yf.exports=wf;var Vg=yf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg=C,Ye=Vg;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _f=new Set,fo={};function Lr(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(fo[e]=t,e=0;e<t.length;e++)_f.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,Kg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hu={},Vu={};function Qg(e){return Ea.call(Vu,e)?!0:Ea.call(Hu,e)?!1:Kg.test(e)?Vu[e]=!0:(Hu[e]=!0,!1)}function Jg(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yg(e,t,r,n){if(t===null||typeof t>"u"||Jg(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function Bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ml,Bl);be[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ml,Bl);be[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ml,Bl);be[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function ql(e,t,r,n){var o=be.hasOwnProperty(t)?be[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yg(t,r,o,n)&&(r=null),n||o===null?Qg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Bt=Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),Ca=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),kf=Symbol.for("react.offscreen"),Gu=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Us;function qn(e){if(Us===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var Fs=!1;function Ms(e,t){if(!e||Fs)return"";Fs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Fs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?qn(e):""}function Xg(e){switch(e.tag){case 5:return qn(e.type);case 16:return qn("Lazy");case 13:return qn("Suspense");case 19:return qn("SuspenseList");case 0:case 2:case 15:return e=Ms(e.type,!1),e;case 11:return e=Ms(e.type.render,!1),e;case 1:return e=Ms(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case Gr:return"Portal";case ba:return"Profiler";case Wl:return"StrictMode";case ja:return"Suspense";case Ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sf:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case Hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function Zg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function em(e){var t=Ef(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ho(e){e._valueTracker||(e._valueTracker=em(e))}function bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ef(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pa(e,t){var r=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ku(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ur(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jf(e,t){t=t.checked,t!=null&&ql(e,"checked",t,!1)}function $a(e,t){jf(e,t);var r=ur(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Aa(e,t.type,r):t.hasOwnProperty("defaultValue")&&Aa(e,t.type,ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Aa(e,t,r){(t!=="number"||Oi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Wn=Array.isArray;function an(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ur(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ju(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(Wn(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ur(r)}}function Cf(e,t){var r=ur(t.value),n=ur(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vo,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ho(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tm=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function $f(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function Af(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=$f(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var rm=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(e,t){if(t){if(rm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function La(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Na=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,ln=null,un=null;function Xu(e){if(e=Lo(e)){if(typeof za!="function")throw Error(T(280));var t=e.stateNode;t&&(t=ps(t),za(e.stateNode,e.type,t))}}function Rf(e){ln?un?un.push(e):un=[e]:ln=e}function Of(){if(ln){var e=ln,t=un;if(un=ln=null,Xu(e),t)for(e=0;e<t.length;e++)Xu(t[e])}}function If(e,t){return e(t)}function Lf(){}var Bs=!1;function Nf(e,t,r){if(Bs)return e(t,r);Bs=!0;try{return If(e,t,r)}finally{Bs=!1,(ln!==null||un!==null)&&(Lf(),Of())}}function po(e,t){var r=e.stateNode;if(r===null)return null;var n=ps(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var Da=!1;if(Dt)try{var In={};Object.defineProperty(In,"passive",{get:function(){Da=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Da=!1}function nm(e,t,r,n,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var Zn=!1,Ii=null,Li=!1,Ua=null,om={onError:function(e){Zn=!0,Ii=e}};function im(e,t,r,n,o,i,s,a,l){Zn=!1,Ii=null,nm.apply(om,arguments)}function sm(e,t,r,n,o,i,s,a,l){if(im.apply(this,arguments),Zn){if(Zn){var u=Ii;Zn=!1,Ii=null}else throw Error(T(198));Li||(Li=!0,Ua=u)}}function Nr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zu(e){if(Nr(e)!==e)throw Error(T(188))}function am(e){var t=e.alternate;if(!t){if(t=Nr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Zu(o),e;if(i===n)return Zu(o),t;i=i.sibling}throw Error(T(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s)throw Error(T(189))}}if(r.alternate!==n)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function Df(e){return e=am(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Ff=Ye.unstable_scheduleCallback,ec=Ye.unstable_cancelCallback,lm=Ye.unstable_shouldYield,um=Ye.unstable_requestPaint,ce=Ye.unstable_now,cm=Ye.unstable_getCurrentPriorityLevel,Kl=Ye.unstable_ImmediatePriority,Mf=Ye.unstable_UserBlockingPriority,Ni=Ye.unstable_NormalPriority,dm=Ye.unstable_LowPriority,Bf=Ye.unstable_IdlePriority,cs=null,jt=null;function fm(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(cs,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:gm,hm=Math.log,pm=Math.LN2;function gm(e){return e>>>=0,e===0?32:31-(hm(e)/pm|0)|0}var Go=64,Ko=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?n=Hn(a):(i&=s,i!==0&&(n=Hn(i)))}else s=r&~o,s!==0?n=Hn(s):i!==0&&(n=Hn(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-mt(t),o=1<<r,n|=e[r],t&=~o;return n}function mm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-mt(i),a=1<<s,l=o[s];l===-1?(!(a&r)||a&n)&&(o[s]=mm(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Fa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qf(){var e=Go;return Go<<=1,!(Go&4194240)&&(Go=64),e}function qs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Oo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=r}function ym(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-mt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Ql(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-mt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var K=0;function Wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hf,Jl,Vf,Gf,Kf,Ma=!1,Qo=[],er=null,tr=null,rr=null,go=new Map,mo=new Map,Qt=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function Ln(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Lo(t),t!==null&&Jl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _m(e,t,r,n,o){switch(t){case"focusin":return er=Ln(er,e,t,r,n,o),!0;case"dragenter":return tr=Ln(tr,e,t,r,n,o),!0;case"mouseover":return rr=Ln(rr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return go.set(i,Ln(go.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,mo.set(i,Ln(mo.get(i)||null,e,t,r,n,o)),!0}return!1}function Qf(e){var t=kr(e.target);if(t!==null){var r=Nr(t);if(r!==null){if(t=r.tag,t===13){if(t=zf(r),t!==null){e.blockedOn=t,Kf(e.priority,function(){Vf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Na=n,r.target.dispatchEvent(n),Na=null}else return t=Lo(r),t!==null&&Jl(t),e.blockedOn=r,!1;t.shift()}return!0}function rc(e,t,r){yi(e)&&r.delete(t)}function xm(){Ma=!1,er!==null&&yi(er)&&(er=null),tr!==null&&yi(tr)&&(tr=null),rr!==null&&yi(rr)&&(rr=null),go.forEach(rc),mo.forEach(rc)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ma||(Ma=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,xm)))}function vo(e){function t(o){return Nn(o,e)}if(0<Qo.length){Nn(Qo[0],e);for(var r=1;r<Qo.length;r++){var n=Qo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(er!==null&&Nn(er,e),tr!==null&&Nn(tr,e),rr!==null&&Nn(rr,e),go.forEach(t),mo.forEach(t),r=0;r<Qt.length;r++)n=Qt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Qt.length&&(r=Qt[0],r.blockedOn===null);)Qf(r),r.blockedOn===null&&Qt.shift()}var cn=Bt.ReactCurrentBatchConfig,Di=!0;function Sm(e,t,r,n){var o=K,i=cn.transition;cn.transition=null;try{K=1,Yl(e,t,r,n)}finally{K=o,cn.transition=i}}function km(e,t,r,n){var o=K,i=cn.transition;cn.transition=null;try{K=4,Yl(e,t,r,n)}finally{K=o,cn.transition=i}}function Yl(e,t,r,n){if(Di){var o=Ba(e,t,r,n);if(o===null)Zs(e,t,n,Ui,r),tc(e,n);else if(_m(o,e,t,r,n))n.stopPropagation();else if(tc(e,n),t&4&&-1<wm.indexOf(e)){for(;o!==null;){var i=Lo(o);if(i!==null&&Hf(i),i=Ba(e,t,r,n),i===null&&Zs(e,t,n,Ui,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Zs(e,t,n,null,r)}}var Ui=null;function Ba(e,t,r,n){if(Ui=null,e=Gl(n),e=kr(e),e!==null)if(t=Nr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=zf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function Jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cm()){case Kl:return 1;case Mf:return 4;case Ni:case dm:return 16;case Bf:return 536870912;default:return 16}default:return 16}}var Xt=null,Xl=null,wi=null;function Yf(){if(wi)return wi;var e,t=Xl,r=t.length,n,o="value"in Xt?Xt.value:Xt.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return wi=o.slice(e,1<n?1-n:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function nc(){return!1}function Ze(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jo:nc,this.isPropagationStopped=nc,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Ze(Cn),Io=ie({},Cn,{view:0,detail:0}),Em=Ze(Io),Ws,Hs,zn,ds=ie({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Ws=e.screenX-zn.screenX,Hs=e.screenY-zn.screenY):Hs=Ws=0,zn=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),oc=Ze(ds),bm=ie({},ds,{dataTransfer:0}),jm=Ze(bm),Cm=ie({},Io,{relatedTarget:0}),Vs=Ze(Cm),Tm=ie({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pm=Ze(Tm),$m=ie({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Am=Ze($m),Rm=ie({},Cn,{data:0}),ic=Ze(Rm),Om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lm[e])?!!t[e]:!1}function eu(){return Nm}var zm=ie({},Io,{key:function(e){if(e.key){var t=Om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dm=Ze(zm),Um=ie({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=Ze(Um),Fm=ie({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Mm=Ze(Fm),Bm=ie({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qm=Ze(Bm),Wm=ie({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hm=Ze(Wm),Vm=[9,13,27,32],tu=Dt&&"CompositionEvent"in window,eo=null;Dt&&"documentMode"in document&&(eo=document.documentMode);var Gm=Dt&&"TextEvent"in window&&!eo,Xf=Dt&&(!tu||eo&&8<eo&&11>=eo),ac=" ",lc=!1;function Zf(e,t){switch(e){case"keyup":return Vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function Km(e,t){switch(e){case"compositionend":return eh(t);case"keypress":return t.which!==32?null:(lc=!0,ac);case"textInput":return e=t.data,e===ac&&lc?null:e;default:return null}}function Qm(e,t){if(Qr)return e==="compositionend"||!tu&&Zf(e,t)?(e=Yf(),wi=Xl=Xt=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var Jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jm[e.type]:t==="textarea"}function th(e,t,r,n){Rf(n),t=Fi(t,"onChange"),0<t.length&&(r=new Zl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var to=null,yo=null;function Ym(e){fh(e,0)}function fs(e){var t=Xr(e);if(bf(t))return e}function Xm(e,t){if(e==="change")return t}var rh=!1;if(Dt){var Gs;if(Dt){var Ks="oninput"in document;if(!Ks){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Ks=typeof cc.oninput=="function"}Gs=Ks}else Gs=!1;rh=Gs&&(!document.documentMode||9<document.documentMode)}function dc(){to&&(to.detachEvent("onpropertychange",nh),yo=to=null)}function nh(e){if(e.propertyName==="value"&&fs(yo)){var t=[];th(t,yo,e,Gl(e)),Nf(Ym,t)}}function Zm(e,t,r){e==="focusin"?(dc(),to=t,yo=r,to.attachEvent("onpropertychange",nh)):e==="focusout"&&dc()}function ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fs(yo)}function tv(e,t){if(e==="click")return fs(t)}function rv(e,t){if(e==="input"||e==="change")return fs(t)}function nv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:nv;function wo(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Ea.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var r=fc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fc(r)}}function oh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ih(){for(var e=window,t=Oi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Oi(e.document)}return t}function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ov(e){var t=ih(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&oh(r.ownerDocument.documentElement,r)){if(n!==null&&ru(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=hc(r,i);var s=hc(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iv=Dt&&"documentMode"in document&&11>=document.documentMode,Jr=null,qa=null,ro=null,Wa=!1;function pc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wa||Jr==null||Jr!==Oi(n)||(n=Jr,"selectionStart"in n&&ru(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ro&&wo(ro,n)||(ro=n,n=Fi(qa,"onSelect"),0<n.length&&(t=new Zl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Jr)))}function Yo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yr={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Qs={},sh={};Dt&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function hs(e){if(Qs[e])return Qs[e];if(!Yr[e])return e;var t=Yr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in sh)return Qs[e]=t[r];return e}var ah=hs("animationend"),lh=hs("animationiteration"),uh=hs("animationstart"),ch=hs("transitionend"),dh=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(e,t){dh.set(e,t),Lr(t,[e])}for(var Js=0;Js<gc.length;Js++){var Ys=gc[Js],sv=Ys.toLowerCase(),av=Ys[0].toUpperCase()+Ys.slice(1);dr(sv,"on"+av)}dr(ah,"onAnimationEnd");dr(lh,"onAnimationIteration");dr(uh,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(ch,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function mc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,sm(n,t,void 0,e),e.currentTarget=null}function fh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;mc(o,a,u),i=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;mc(o,a,u),i=l}}}if(Li)throw e=Ua,Li=!1,Ua=null,e}function Z(e,t){var r=t[Qa];r===void 0&&(r=t[Qa]=new Set);var n=e+"__bubble";r.has(n)||(hh(t,e,2,!1),r.add(n))}function Xs(e,t,r){var n=0;t&&(n|=4),hh(r,e,n,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[Xo]){e[Xo]=!0,_f.forEach(function(r){r!=="selectionchange"&&(lv.has(r)||Xs(r,!1,e),Xs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,Xs("selectionchange",!1,t))}}function hh(e,t,r,n){switch(Jf(t)){case 1:var o=Sm;break;case 4:o=km;break;default:o=Yl}r=o.bind(null,t,r,e),o=void 0,!Da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Zs(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=kr(a),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}a=a.parentNode}}n=n.return}Nf(function(){var u=i,c=Gl(r),d=[];e:{var p=dh.get(e);if(p!==void 0){var v=Zl,w=e;switch(e){case"keypress":if(_i(r)===0)break e;case"keydown":case"keyup":v=Dm;break;case"focusin":w="focus",v=Vs;break;case"focusout":w="blur",v=Vs;break;case"beforeblur":case"afterblur":v=Vs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Mm;break;case ah:case lh:case uh:v=Pm;break;case ch:v=qm;break;case"scroll":v=Em;break;case"wheel":v=Hm;break;case"copy":case"cut":case"paste":v=Am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sc}var y=(t&4)!==0,j=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var g=u,m;g!==null;){m=g;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=po(g,h),x!=null&&y.push(xo(g,x,m)))),j)break;g=g.return}0<y.length&&(p=new v(p,w,null,r,c),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&r!==Na&&(w=r.relatedTarget||r.fromElement)&&(kr(w)||w[Ut]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=r.relatedTarget||r.toElement,v=u,w=w?kr(w):null,w!==null&&(j=Nr(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(y=oc,x="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=sc,x="onPointerLeave",h="onPointerEnter",g="pointer"),j=v==null?p:Xr(v),m=w==null?p:Xr(w),p=new y(x,g+"leave",v,r,c),p.target=j,p.relatedTarget=m,x=null,kr(c)===u&&(y=new y(h,g+"enter",w,r,c),y.target=m,y.relatedTarget=j,x=y),j=x,v&&w)t:{for(y=v,h=w,g=0,m=y;m;m=Dr(m))g++;for(m=0,x=h;x;x=Dr(x))m++;for(;0<g-m;)y=Dr(y),g--;for(;0<m-g;)h=Dr(h),m--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=Dr(y),h=Dr(h)}y=null}else y=null;v!==null&&vc(d,p,v,y,!1),w!==null&&j!==null&&vc(d,j,w,y,!0)}}e:{if(p=u?Xr(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=Xm;else if(uc(p))if(rh)k=rv;else{k=ev;var E=Zm}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=tv);if(k&&(k=k(e,u))){th(d,k,r,c);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Aa(p,"number",p.value)}switch(E=u?Xr(u):window,e){case"focusin":(uc(E)||E.contentEditable==="true")&&(Jr=E,qa=u,ro=null);break;case"focusout":ro=qa=Jr=null;break;case"mousedown":Wa=!0;break;case"contextmenu":case"mouseup":case"dragend":Wa=!1,pc(d,r,c);break;case"selectionchange":if(iv)break;case"keydown":case"keyup":pc(d,r,c)}var S;if(tu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qr?Zf(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Xf&&r.locale!=="ko"&&(Qr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qr&&(S=Yf()):(Xt=c,Xl="value"in Xt?Xt.value:Xt.textContent,Qr=!0)),E=Fi(u,P),0<E.length&&(P=new ic(P,e,null,r,c),d.push({event:P,listeners:E}),S?P.data=S:(S=eh(r),S!==null&&(P.data=S)))),(S=Gm?Km(e,r):Qm(e,r))&&(u=Fi(u,"onBeforeInput"),0<u.length&&(c=new ic("onBeforeInput","beforeinput",null,r,c),d.push({event:c,listeners:u}),c.data=S))}fh(d,t)})}function xo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fi(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=po(e,r),i!=null&&n.unshift(xo(e,i,o)),i=po(e,t),i!=null&&n.push(xo(e,i,o))),e=e.return}return n}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,o?(l=po(r,i),l!=null&&s.unshift(xo(r,l,a))):o||(l=po(r,i),l!=null&&s.push(xo(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var uv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace(uv,`
`).replace(cv,"")}function Zo(e,t,r){if(t=yc(t),yc(e)!==t&&r)throw Error(T(425))}function Mi(){}var Ha=null,Va=null;function Ga(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,wc=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof wc<"u"?function(e){return wc.resolve(null).then(e).catch(hv)}:Ka;function hv(e){setTimeout(function(){throw e})}function ea(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),vo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);vo(t)}function nr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),Et="__reactFiber$"+Tn,So="__reactProps$"+Tn,Ut="__reactContainer$"+Tn,Qa="__reactEvents$"+Tn,pv="__reactListeners$"+Tn,gv="__reactHandles$"+Tn;function kr(e){var t=e[Et];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ut]||r[Et]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=_c(e);e!==null;){if(r=e[Et])return r;e=_c(e)}return t}e=r,r=e.parentNode}return null}function Lo(e){return e=e[Et]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function ps(e){return e[So]||null}var Ja=[],Zr=-1;function fr(e){return{current:e}}function te(e){0>Zr||(e.current=Ja[Zr],Ja[Zr]=null,Zr--)}function J(e,t){Zr++,Ja[Zr]=e.current,e.current=t}var cr={},Ae=fr(cr),Me=fr(!1),$r=cr;function pn(e,t){var r=e.type.contextTypes;if(!r)return cr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Bi(){te(Me),te(Ae)}function xc(e,t,r){if(Ae.current!==cr)throw Error(T(168));J(Ae,t),J(Me,r)}function ph(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(T(108,Zg(e)||"Unknown",o));return ie({},r,n)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,$r=Ae.current,J(Ae,e),J(Me,Me.current),!0}function Sc(e,t,r){var n=e.stateNode;if(!n)throw Error(T(169));r?(e=ph(e,t,$r),n.__reactInternalMemoizedMergedChildContext=e,te(Me),te(Ae),J(Ae,e)):te(Me),J(Me,r)}var It=null,gs=!1,ta=!1;function gh(e){It===null?It=[e]:It.push(e)}function mv(e){gs=!0,gh(e)}function hr(){if(!ta&&It!==null){ta=!0;var e=0,t=K;try{var r=It;for(K=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}It=null,gs=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),Ff(Kl,hr),o}finally{K=t,ta=!1}}return null}var en=[],tn=0,Wi=null,Hi=0,et=[],tt=0,Ar=null,Lt=1,Nt="";function wr(e,t){en[tn++]=Hi,en[tn++]=Wi,Wi=e,Hi=t}function mh(e,t,r){et[tt++]=Lt,et[tt++]=Nt,et[tt++]=Ar,Ar=e;var n=Lt;e=Nt;var o=32-mt(n)-1;n&=~(1<<o),r+=1;var i=32-mt(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,Lt=1<<32-mt(t)+o|r<<o|n,Nt=i+e}else Lt=1<<i|r<<o|n,Nt=e}function nu(e){e.return!==null&&(wr(e,1),mh(e,1,0))}function ou(e){for(;e===Wi;)Wi=en[--tn],en[tn]=null,Hi=en[--tn],en[tn]=null;for(;e===Ar;)Ar=et[--tt],et[tt]=null,Nt=et[--tt],et[tt]=null,Lt=et[--tt],et[tt]=null}var Je=null,Qe=null,re=!1,pt=null;function vh(e,t){var r=rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function kc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Qe=nr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ar!==null?{id:Lt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Je=e,Qe=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(re){var t=Qe;if(t){var r=t;if(!kc(e,t)){if(Ya(e))throw Error(T(418));t=nr(r.nextSibling);var n=Je;t&&kc(e,t)?vh(n,r):(e.flags=e.flags&-4097|2,re=!1,Je=e)}}else{if(Ya(e))throw Error(T(418));e.flags=e.flags&-4097|2,re=!1,Je=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function ei(e){if(e!==Je)return!1;if(!re)return Ec(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ga(e.type,e.memoizedProps)),t&&(t=Qe)){if(Ya(e))throw yh(),Error(T(418));for(;t;)vh(e,t),t=nr(t.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=nr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Je?nr(e.stateNode.nextSibling):null;return!0}function yh(){for(var e=Qe;e;)e=nr(e.nextSibling)}function gn(){Qe=Je=null,re=!1}function iu(e){pt===null?pt=[e]:pt.push(e)}var vv=Bt.ReactCurrentBatchConfig;function Dn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var n=r.stateNode}if(!n)throw Error(T(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bc(e){var t=e._init;return t(e._payload)}function wh(e){function t(h,g){if(e){var m=h.deletions;m===null?(h.deletions=[g],h.flags|=16):m.push(g)}}function r(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function n(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function o(h,g){return h=ar(h,g),h.index=0,h.sibling=null,h}function i(h,g,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<g?(h.flags|=2,g):m):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,m,x){return g===null||g.tag!==6?(g=la(m,h.mode,x),g.return=h,g):(g=o(g,m),g.return=h,g)}function l(h,g,m,x){var k=m.type;return k===Kr?c(h,g,m.props.children,x,m.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&bc(k)===g.type)?(x=o(g,m.props),x.ref=Dn(h,g,m),x.return=h,x):(x=Ci(m.type,m.key,m.props,null,h.mode,x),x.ref=Dn(h,g,m),x.return=h,x)}function u(h,g,m,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=ua(m,h.mode,x),g.return=h,g):(g=o(g,m.children||[]),g.return=h,g)}function c(h,g,m,x,k){return g===null||g.tag!==7?(g=Tr(m,h.mode,x,k),g.return=h,g):(g=o(g,m),g.return=h,g)}function d(h,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=la(""+g,h.mode,m),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:return m=Ci(g.type,g.key,g.props,null,h.mode,m),m.ref=Dn(h,null,g),m.return=h,m;case Gr:return g=ua(g,h.mode,m),g.return=h,g;case Gt:var x=g._init;return d(h,x(g._payload),m)}if(Wn(g)||On(g))return g=Tr(g,h.mode,m,null),g.return=h,g;ti(h,g)}return null}function p(h,g,m,x){var k=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(h,g,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:return m.key===k?l(h,g,m,x):null;case Gr:return m.key===k?u(h,g,m,x):null;case Gt:return k=m._init,p(h,g,k(m._payload),x)}if(Wn(m)||On(m))return k!==null?null:c(h,g,m,x,null);ti(h,m)}return null}function v(h,g,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,a(g,h,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wo:return h=h.get(x.key===null?m:x.key)||null,l(g,h,x,k);case Gr:return h=h.get(x.key===null?m:x.key)||null,u(g,h,x,k);case Gt:var E=x._init;return v(h,g,m,E(x._payload),k)}if(Wn(x)||On(x))return h=h.get(m)||null,c(g,h,x,k,null);ti(g,x)}return null}function w(h,g,m,x){for(var k=null,E=null,S=g,P=g=0,R=null;S!==null&&P<m.length;P++){S.index>P?(R=S,S=null):R=S.sibling;var O=p(h,S,m[P],x);if(O===null){S===null&&(S=R);break}e&&S&&O.alternate===null&&t(h,S),g=i(O,g,P),E===null?k=O:E.sibling=O,E=O,S=R}if(P===m.length)return r(h,S),re&&wr(h,P),k;if(S===null){for(;P<m.length;P++)S=d(h,m[P],x),S!==null&&(g=i(S,g,P),E===null?k=S:E.sibling=S,E=S);return re&&wr(h,P),k}for(S=n(h,S);P<m.length;P++)R=v(S,h,P,m[P],x),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?P:R.key),g=i(R,g,P),E===null?k=R:E.sibling=R,E=R);return e&&S.forEach(function(z){return t(h,z)}),re&&wr(h,P),k}function y(h,g,m,x){var k=On(m);if(typeof k!="function")throw Error(T(150));if(m=k.call(m),m==null)throw Error(T(151));for(var E=k=null,S=g,P=g=0,R=null,O=m.next();S!==null&&!O.done;P++,O=m.next()){S.index>P?(R=S,S=null):R=S.sibling;var z=p(h,S,O.value,x);if(z===null){S===null&&(S=R);break}e&&S&&z.alternate===null&&t(h,S),g=i(z,g,P),E===null?k=z:E.sibling=z,E=z,S=R}if(O.done)return r(h,S),re&&wr(h,P),k;if(S===null){for(;!O.done;P++,O=m.next())O=d(h,O.value,x),O!==null&&(g=i(O,g,P),E===null?k=O:E.sibling=O,E=O);return re&&wr(h,P),k}for(S=n(h,S);!O.done;P++,O=m.next())O=v(S,h,P,O.value,x),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?P:O.key),g=i(O,g,P),E===null?k=O:E.sibling=O,E=O);return e&&S.forEach(function(L){return t(h,L)}),re&&wr(h,P),k}function j(h,g,m,x){if(typeof m=="object"&&m!==null&&m.type===Kr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:e:{for(var k=m.key,E=g;E!==null;){if(E.key===k){if(k=m.type,k===Kr){if(E.tag===7){r(h,E.sibling),g=o(E,m.props.children),g.return=h,h=g;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&bc(k)===E.type){r(h,E.sibling),g=o(E,m.props),g.ref=Dn(h,E,m),g.return=h,h=g;break e}r(h,E);break}else t(h,E);E=E.sibling}m.type===Kr?(g=Tr(m.props.children,h.mode,x,m.key),g.return=h,h=g):(x=Ci(m.type,m.key,m.props,null,h.mode,x),x.ref=Dn(h,g,m),x.return=h,h=x)}return s(h);case Gr:e:{for(E=m.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){r(h,g.sibling),g=o(g,m.children||[]),g.return=h,h=g;break e}else{r(h,g);break}else t(h,g);g=g.sibling}g=ua(m,h.mode,x),g.return=h,h=g}return s(h);case Gt:return E=m._init,j(h,g,E(m._payload),x)}if(Wn(m))return w(h,g,m,x);if(On(m))return y(h,g,m,x);ti(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(r(h,g.sibling),g=o(g,m),g.return=h,h=g):(r(h,g),g=la(m,h.mode,x),g.return=h,h=g),s(h)):r(h,g)}return j}var mn=wh(!0),_h=wh(!1),Vi=fr(null),Gi=null,rn=null,su=null;function au(){su=rn=Gi=null}function lu(e){var t=Vi.current;te(Vi),e._currentValue=t}function Za(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function dn(e,t){Gi=e,su=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(su!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(Gi===null)throw Error(T(308));rn=e,Gi.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Er=null;function uu(e){Er===null?Er=[e]:Er.push(e)}function xh(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,uu(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ft(e,n)}function Ft(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kt=!1;function cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,V&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ft(e,r)}return o=n.interleaved,o===null?(t.next=t,uu(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ft(e,r)}function xi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ql(e,r)}}function jc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ki(e,t,r,n){var o=e.updateQueue;Kt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,c=u=l=null,a=i;do{var p=a.lane,v=a.eventTime;if((n&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(p=t,v=r,y.tag){case 1:if(w=y.payload,typeof w=="function"){d=w.call(v,d,p);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(v,d,p):w,p==null)break e;d=ie({},d,p);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Or|=s,e.lanes=s,e.memoizedState=d}}function Cc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(T(191,o));o.call(n)}}}var No={},Ct=fr(No),ko=fr(No),Eo=fr(No);function br(e){if(e===No)throw Error(T(174));return e}function du(e,t){switch(J(Eo,t),J(ko,e),J(Ct,No),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oa(t,e)}te(Ct),J(Ct,t)}function vn(){te(Ct),te(ko),te(Eo)}function kh(e){br(Eo.current);var t=br(Ct.current),r=Oa(t,e.type);t!==r&&(J(ko,e),J(Ct,r))}function fu(e){ko.current===e&&(te(Ct),te(ko))}var ne=fr(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function hu(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var Si=Bt.ReactCurrentDispatcher,na=Bt.ReactCurrentBatchConfig,Rr=0,oe=null,me=null,ye=null,Ji=!1,no=!1,bo=0,yv=0;function Ce(){throw Error(T(321))}function pu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!wt(e[r],t[r]))return!1;return!0}function gu(e,t,r,n,o,i){if(Rr=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?Sv:kv,e=r(n,o),no){i=0;do{if(no=!1,bo=0,25<=i)throw Error(T(301));i+=1,ye=me=null,t.updateQueue=null,Si.current=Ev,e=r(n,o)}while(no)}if(Si.current=Yi,t=me!==null&&me.next!==null,Rr=0,ye=me=oe=null,Ji=!1,t)throw Error(T(300));return e}function mu(){var e=bo!==0;return bo=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?oe.memoizedState=ye=e:ye=ye.next=e,ye}function st(){if(me===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?oe.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(T(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?oe.memoizedState=ye=e:ye=ye.next=e}return ye}function jo(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=st(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=me,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((Rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=n):l=l.next=d,oe.lanes|=c,Or|=c}u=u.next}while(u!==null&&u!==i);l===null?s=n:l.next=a,wt(n,t.memoizedState)||(Fe=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,Or|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ia(e){var t=st(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);wt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Eh(){}function bh(e,t){var r=oe,n=st(),o=t(),i=!wt(n.memoizedState,o);if(i&&(n.memoizedState=o,Fe=!0),n=n.queue,vu(Th.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(r.flags|=2048,Co(9,Ch.bind(null,r,n,o,t),void 0,null),_e===null)throw Error(T(349));Rr&30||jh(r,t,o)}return o}function jh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ch(e,t,r,n){t.value=r,t.getSnapshot=n,Ph(t)&&$h(e)}function Th(e,t,r){return r(function(){Ph(t)&&$h(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!wt(e,r)}catch{return!0}}function $h(e){var t=Ft(e,1);t!==null&&vt(t,e,1,-1)}function Tc(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=xv.bind(null,oe,e),[t.memoizedState,e]}function Co(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Ah(){return st().memoizedState}function ki(e,t,r,n){var o=xt();oe.flags|=e,o.memoizedState=Co(1|t,r,void 0,n===void 0?null:n)}function ms(e,t,r,n){var o=st();n=n===void 0?null:n;var i=void 0;if(me!==null){var s=me.memoizedState;if(i=s.destroy,n!==null&&pu(n,s.deps)){o.memoizedState=Co(t,r,i,n);return}}oe.flags|=e,o.memoizedState=Co(1|t,r,i,n)}function Pc(e,t){return ki(8390656,8,e,t)}function vu(e,t){return ms(2048,8,e,t)}function Rh(e,t){return ms(4,2,e,t)}function Oh(e,t){return ms(4,4,e,t)}function Ih(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,r){return r=r!=null?r.concat([e]):null,ms(4,4,Ih.bind(null,t,e),r)}function yu(){}function Nh(e,t){var r=st();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&pu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function zh(e,t){var r=st();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&pu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Dh(e,t,r){return Rr&21?(wt(r,t)||(r=qf(),oe.lanes|=r,Or|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=r)}function wv(e,t){var r=K;K=r!==0&&4>r?r:4,e(!0);var n=na.transition;na.transition={};try{e(!1),t()}finally{K=r,na.transition=n}}function Uh(){return st().memoizedState}function _v(e,t,r){var n=sr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Fh(e))Mh(t,r);else if(r=xh(e,t,r,n),r!==null){var o=Le();vt(r,e,n,o),Bh(r,t,n)}}function xv(e,t,r){var n=sr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fh(e))Mh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,r);if(o.hasEagerState=!0,o.eagerState=a,wt(a,s)){var l=t.interleaved;l===null?(o.next=o,uu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=xh(e,t,o,n),r!==null&&(o=Le(),vt(r,e,n,o),Bh(r,t,n))}}function Fh(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Mh(e,t){no=Ji=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ql(e,r)}}var Yi={readContext:it,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Sv={readContext:it,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Pc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ki(4194308,4,Ih.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var r=xt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=xt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=_v.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Tc,useDebugValue:yu,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Tc(!1),t=e[0];return e=wv.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oe,o=xt();if(re){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),_e===null)throw Error(T(349));Rr&30||jh(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Pc(Th.bind(null,n,i,e),[e]),n.flags|=2048,Co(9,Ch.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=xt(),t=_e.identifierPrefix;if(re){var r=Nt,n=Lt;r=(n&~(1<<32-mt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=bo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=yv++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kv={readContext:it,useCallback:Nh,useContext:it,useEffect:vu,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:Oh,useMemo:zh,useReducer:oa,useRef:Ah,useState:function(){return oa(jo)},useDebugValue:yu,useDeferredValue:function(e){var t=st();return Dh(t,me.memoizedState,e)},useTransition:function(){var e=oa(jo)[0],t=st().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:bh,useId:Uh,unstable_isNewReconciler:!1},Ev={readContext:it,useCallback:Nh,useContext:it,useEffect:vu,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:Oh,useMemo:zh,useReducer:ia,useRef:Ah,useState:function(){return ia(jo)},useDebugValue:yu,useDeferredValue:function(e){var t=st();return me===null?t.memoizedState=e:Dh(t,me.memoizedState,e)},useTransition:function(){var e=ia(jo)[0],t=st().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:bh,useId:Uh,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function el(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ie({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vs={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Le(),o=sr(e),i=zt(n,o);i.payload=t,r!=null&&(i.callback=r),t=or(e,i,o),t!==null&&(vt(t,e,o,n),xi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Le(),o=sr(e),i=zt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=or(e,i,o),t!==null&&(vt(t,e,o,n),xi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Le(),n=sr(e),o=zt(r,n);o.tag=2,t!=null&&(o.callback=t),t=or(e,o,n),t!==null&&(vt(t,e,n,r),xi(t,e,n))}};function $c(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!wo(r,n)||!wo(o,i):!0}function qh(e,t,r){var n=!1,o=cr,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Be(t)?$r:Ae.current,n=t.contextTypes,i=(n=n!=null)?pn(e,o):cr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vs,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ac(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function tl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},cu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Be(t)?$r:Ae.current,o.context=pn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(el(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&vs.enqueueReplaceState(o,o.state,null),Ki(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t){try{var r="",n=t;do r+=Xg(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function sa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function rl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var bv=typeof WeakMap=="function"?WeakMap:Map;function Wh(e,t,r){r=zt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Zi||(Zi=!0,fl=n),rl(e,t)},r}function Hh(e,t,r){r=zt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){rl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){rl(e,t),typeof n!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Rc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new bv;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Uv.bind(null,e,t,r),t.then(e,e))}function Oc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ic(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=zt(-1,1),t.tag=2,or(r,t,1))),r.lanes|=1),e)}var jv=Bt.ReactCurrentOwner,Fe=!1;function Ie(e,t,r,n){t.child=e===null?_h(t,null,r,n):mn(t,e.child,r,n)}function Lc(e,t,r,n,o){r=r.render;var i=t.ref;return dn(t,o),n=gu(e,t,r,n,i,o),r=mu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(re&&r&&nu(t),t.flags|=1,Ie(e,t,n,o),t.child)}function Nc(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!ju(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Vh(e,t,i,n,o)):(e=Ci(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:wo,r(s,n)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=ar(i,n),e.ref=t.ref,e.return=t,t.child=e}function Vh(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(wo(i,n)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return nl(e,t,r,n,o)}function Gh(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(on,Ke),Ke|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(on,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,J(on,Ke),Ke|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,J(on,Ke),Ke|=n;return Ie(e,t,o,r),t.child}function Kh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function nl(e,t,r,n,o){var i=Be(r)?$r:Ae.current;return i=pn(t,i),dn(t,o),r=gu(e,t,r,n,i,o),n=mu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(re&&n&&nu(t),t.flags|=1,Ie(e,t,r,o),t.child)}function zc(e,t,r,n,o){if(Be(r)){var i=!0;qi(t)}else i=!1;if(dn(t,o),t.stateNode===null)Ei(e,t),qh(t,r,n),tl(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Be(r)?$r:Ae.current,u=pn(t,u));var c=r.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==u)&&Ac(t,s,n,u),Kt=!1;var p=t.memoizedState;s.state=p,Ki(t,n,s,o),l=t.memoizedState,a!==n||p!==l||Me.current||Kt?(typeof c=="function"&&(el(t,r,c,n),l=t.memoizedState),(a=Kt||$c(t,r,a,n,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=u,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Sh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),s.props=u,d=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=it(l):(l=Be(r)?$r:Ae.current,l=pn(t,l));var v=r.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Ac(t,s,n,l),Kt=!1,p=t.memoizedState,s.state=p,Ki(t,n,s,o);var w=t.memoizedState;a!==d||p!==w||Me.current||Kt?(typeof v=="function"&&(el(t,r,v,n),w=t.memoizedState),(u=Kt||$c(t,r,u,n,p,w,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return ol(e,t,r,n,i,o)}function ol(e,t,r,n,o,i){Kh(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&Sc(t,r,!1),Mt(e,t,i);n=t.stateNode,jv.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=mn(t,e.child,null,i),t.child=mn(t,null,a,i)):Ie(e,t,a,i),t.memoizedState=n.state,o&&Sc(t,r,!0),t.child}function Qh(e){var t=e.stateNode;t.pendingContext?xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xc(e,t.context,!1),du(e,t.containerInfo)}function Dc(e,t,r,n,o){return gn(),iu(o),t.flags|=256,Ie(e,t,r,n),t.child}var il={dehydrated:null,treeContext:null,retryLane:0};function sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jh(e,t,r){var n=t.pendingProps,o=ne.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ne,o&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=_s(s,n,0,null),e=Tr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=sl(r),t.memoizedState=il,e):wu(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Cv(e,t,s,n,a,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=ar(o,l),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=ar(a,i):(i=Tr(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?sl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=il,n}return i=e.child,e=i.sibling,n=ar(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function wu(e,t){return t=_s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,r,n){return n!==null&&iu(n),mn(t,e.child,null,r),e=wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cv(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=sa(Error(T(422))),ri(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=_s({mode:"visible",children:n.children},o,0,null),i=Tr(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&mn(t,e.child,null,s),t.child.memoizedState=sl(s),t.memoizedState=il,i);if(!(t.mode&1))return ri(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(T(419)),n=sa(i,n,void 0),ri(e,t,s,n)}if(a=(s&e.childLanes)!==0,Fe||a){if(n=_e,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ft(e,o),vt(n,e,o,-1))}return bu(),n=sa(Error(T(421))),ri(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=nr(o.nextSibling),Je=t,re=!0,pt=null,e!==null&&(et[tt++]=Lt,et[tt++]=Nt,et[tt++]=Ar,Lt=e.id,Nt=e.overflow,Ar=t),t=wu(t,n.children),t.flags|=4096,t)}function Uc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Za(e.return,t,r)}function aa(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Yh(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Ie(e,t,n.children,r),n=ne.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,r,t);else if(e.tag===19)Uc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(ne,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Qi(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),aa(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qi(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}aa(t,!0,r,null,i);break;case"together":aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=ar(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ar(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Tv(e,t,r){switch(t.tag){case 3:Qh(t),gn();break;case 5:kh(t);break;case 1:Be(t.type)&&qi(t);break;case 4:du(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;J(Vi,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):r&t.child.childLanes?Jh(e,t,r):(J(ne,ne.current&1),e=Mt(e,t,r),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Yh(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ne,ne.current),n)break;return null;case 22:case 23:return t.lanes=0,Gh(e,t,r)}return Mt(e,t,r)}var Xh,al,Zh,ep;Xh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};al=function(){};Zh=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,br(Ct.current);var i=null;switch(r){case"input":o=Pa(e,o),n=Pa(e,n),i=[];break;case"select":o=ie({},o,{value:void 0}),n=ie({},n,{value:void 0}),i=[];break;case"textarea":o=Ra(e,o),n=Ra(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Mi)}Ia(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var l=n[u];if(a=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};ep=function(e,t,r,n){r!==n&&(t.flags|=4)};function Un(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Pv(e,t,r){var n=t.pendingProps;switch(ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Be(t.type)&&Bi(),Te(t),null;case 3:return n=t.stateNode,vn(),te(Me),te(Ae),hu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(gl(pt),pt=null))),al(e,t),Te(t),null;case 5:fu(t);var o=br(Eo.current);if(r=t.type,e!==null&&t.stateNode!=null)Zh(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(T(166));return Te(t),null}if(e=br(Ct.current),ei(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Et]=t,n[So]=i,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<Vn.length;o++)Z(Vn[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":Ku(n,i),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Z("invalid",n);break;case"textarea":Ju(n,i),Z("invalid",n)}Ia(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&Zo(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Zo(n.textContent,a,e),o=["children",""+a]):fo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",n)}switch(r){case"input":Ho(n),Qu(n,i,!0);break;case"textarea":Ho(n),Yu(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Mi)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Et]=t,e[So]=n,Xh(e,t,!1,!1),t.stateNode=e;e:{switch(s=La(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<Vn.length;o++)Z(Vn[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":Ku(e,n),o=Pa(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=ie({},n,{value:void 0}),Z("invalid",e);break;case"textarea":Ju(e,n),o=Ra(e,n),Z("invalid",e);break;default:o=n}Ia(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Af(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pf(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ho(e,l):typeof l=="number"&&ho(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&ql(e,i,l,s))}switch(r){case"input":Ho(e),Qu(e,n,!1);break;case"textarea":Ho(e),Yu(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ur(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?an(e,!!n.multiple,i,!1):n.defaultValue!=null&&an(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Mi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)ep(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(T(166));if(r=br(Eo.current),br(Ct.current),ei(t)){if(n=t.stateNode,r=t.memoizedProps,n[Et]=t,(i=n.nodeValue!==r)&&(e=Je,e!==null))switch(e.tag){case 3:Zo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Et]=t,t.stateNode=n}return Te(t),null;case 13:if(te(ne),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Qe!==null&&t.mode&1&&!(t.flags&128))yh(),gn(),t.flags|=98560,i=!1;else if(i=ei(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[Et]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else pt!==null&&(gl(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ve===0&&(ve=3):bu())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return vn(),al(e,t),e===null&&_o(t.stateNode.containerInfo),Te(t),null;case 10:return lu(t.type._context),Te(t),null;case 17:return Be(t.type)&&Bi(),Te(t),null;case 19:if(te(ne),i=t.memoizedState,i===null)return Te(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Un(i,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Qi(e),s!==null){for(t.flags|=128,Un(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>wn&&(t.flags|=128,n=!0,Un(i,!1),t.lanes=4194304)}else{if(!n)if(e=Qi(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Un(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!re)return Te(t),null}else 2*ce()-i.renderingStartTime>wn&&r!==1073741824&&(t.flags|=128,n=!0,Un(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,r=ne.current,J(ne,n?r&1|2:r&1),t):(Te(t),null);case 22:case 23:return Eu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ke&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function $v(e,t){switch(ou(t),t.tag){case 1:return Be(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),te(Me),te(Ae),hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fu(t),null;case 13:if(te(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ne),null;case 4:return vn(),null;case 10:return lu(t.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var ni=!1,Pe=!1,Av=typeof WeakSet=="function"?WeakSet:Set,$=null;function nn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){le(e,t,n)}else r.current=null}function ll(e,t,r){try{r()}catch(n){le(e,t,n)}}var Fc=!1;function Rv(e,t){if(Ha=Di,e=ih(),ru(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==r||o!==0&&d.nodeType!==3||(a=s+o),d!==i||n!==0&&d.nodeType!==3||(l=s+n),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===r&&++u===o&&(a=s),p===i&&++c===n&&(l=s),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Va={focusedElem:e,selectionRange:r},Di=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,j=w.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:dt(t.type,y),j);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(x){le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return w=Fc,Fc=!1,w}function oo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ll(t,r,i)}o=o.next}while(o!==n)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ul(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function tp(e){var t=e.alternate;t!==null&&(e.alternate=null,tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[So],delete t[Qa],delete t[pv],delete t[gv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rp(e){return e.tag===5||e.tag===3||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Mi));else if(n!==4&&(e=e.child,e!==null))for(cl(e,t,r),e=e.sibling;e!==null;)cl(e,t,r),e=e.sibling}function dl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(dl(e,t,r),e=e.sibling;e!==null;)dl(e,t,r),e=e.sibling}var ke=null,ft=!1;function qt(e,t,r){for(r=r.child;r!==null;)np(e,t,r),r=r.sibling}function np(e,t,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(cs,r)}catch{}switch(r.tag){case 5:Pe||nn(r,t);case 6:var n=ke,o=ft;ke=null,qt(e,t,r),ke=n,ft=o,ke!==null&&(ft?(e=ke,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ke.removeChild(r.stateNode));break;case 18:ke!==null&&(ft?(e=ke,r=r.stateNode,e.nodeType===8?ea(e.parentNode,r):e.nodeType===1&&ea(e,r),vo(e)):ea(ke,r.stateNode));break;case 4:n=ke,o=ft,ke=r.stateNode.containerInfo,ft=!0,qt(e,t,r),ke=n,ft=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ll(r,t,s),o=o.next}while(o!==n)}qt(e,t,r);break;case 1:if(!Pe&&(nn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){le(r,t,a)}qt(e,t,r);break;case 21:qt(e,t,r);break;case 22:r.mode&1?(Pe=(n=Pe)||r.memoizedState!==null,qt(e,t,r),Pe=n):qt(e,t,r);break;default:qt(e,t,r)}}function Bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Av),t.forEach(function(n){var o=Mv.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function ut(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,ft=!1;break e;case 3:ke=a.stateNode.containerInfo,ft=!0;break e;case 4:ke=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(ke===null)throw Error(T(160));np(i,s,o),ke=null,ft=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){le(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)op(t,e),t=t.sibling}function op(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),_t(e),n&4){try{oo(3,e,e.return),ys(3,e)}catch(y){le(e,e.return,y)}try{oo(5,e,e.return)}catch(y){le(e,e.return,y)}}break;case 1:ut(t,e),_t(e),n&512&&r!==null&&nn(r,r.return);break;case 5:if(ut(t,e),_t(e),n&512&&r!==null&&nn(r,r.return),e.flags&32){var o=e.stateNode;try{ho(o,"")}catch(y){le(e,e.return,y)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&jf(o,i),La(a,s);var u=La(a,i);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Af(o,d):c==="dangerouslySetInnerHTML"?Pf(o,d):c==="children"?ho(o,d):ql(o,c,d,u)}switch(a){case"input":$a(o,i);break;case"textarea":Cf(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?an(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?an(o,!!i.multiple,i.defaultValue,!0):an(o,!!i.multiple,i.multiple?[]:"",!1))}o[So]=i}catch(y){le(e,e.return,y)}}break;case 6:if(ut(t,e),_t(e),n&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){le(e,e.return,y)}}break;case 3:if(ut(t,e),_t(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(y){le(e,e.return,y)}break;case 4:ut(t,e),_t(e);break;case 13:ut(t,e),_t(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Su=ce())),n&4&&Bc(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||c,ut(t,e),Pe=u):ut(t,e),_t(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for($=e,c=e.child;c!==null;){for(d=$=c;$!==null;){switch(p=$,v=p.child,p.tag){case 0:case 11:case 14:case 15:oo(4,p,p.return);break;case 1:nn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){le(n,r,y)}}break;case 5:nn(p,p.return);break;case 22:if(p.memoizedState!==null){Wc(d);continue}}v!==null?(v.return=p,$=v):Wc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$f("display",s))}catch(y){le(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){le(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(t,e),_t(e),n&4&&Bc(e);break;case 21:break;default:ut(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(rp(r)){var n=r;break e}r=r.return}throw Error(T(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(ho(o,""),n.flags&=-33);var i=Mc(e);dl(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,a=Mc(e);cl(e,a,s);break;default:throw Error(T(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ov(e,t,r){$=e,ip(e)}function ip(e,t,r){for(var n=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||ni;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=ni;var u=Pe;if(ni=s,(Pe=l)&&!u)for($=o;$!==null;)s=$,l=s.child,s.tag===22&&s.memoizedState!==null?Hc(o):l!==null?(l.return=s,$=l):Hc(o);for(;i!==null;)$=i,ip(i),i=i.sibling;$=o,ni=a,Pe=u}qc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):qc(e)}}function qc(e){for(;$!==null;){var t=$;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||ys(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Pe)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:dt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cc(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Cc(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Pe||t.flags&512&&ul(t)}catch(p){le(t,t.return,p)}}if(t===e){$=null;break}if(r=t.sibling,r!==null){r.return=t.return,$=r;break}$=t.return}}function Wc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var r=t.sibling;if(r!==null){r.return=t.return,$=r;break}$=t.return}}function Hc(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ys(4,t)}catch(l){le(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){le(t,o,l)}}var i=t.return;try{ul(t)}catch(l){le(t,i,l)}break;case 5:var s=t.return;try{ul(t)}catch(l){le(t,s,l)}}}catch(l){le(t,t.return,l)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var Iv=Math.ceil,Xi=Bt.ReactCurrentDispatcher,_u=Bt.ReactCurrentOwner,nt=Bt.ReactCurrentBatchConfig,V=0,_e=null,he=null,Ee=0,Ke=0,on=fr(0),ve=0,To=null,Or=0,ws=0,xu=0,io=null,De=null,Su=0,wn=1/0,At=null,Zi=!1,fl=null,ir=null,oi=!1,Zt=null,es=0,so=0,hl=null,bi=-1,ji=0;function Le(){return V&6?ce():bi!==-1?bi:bi=ce()}function sr(e){return e.mode&1?V&2&&Ee!==0?Ee&-Ee:vv.transition!==null?(ji===0&&(ji=qf()),ji):(e=K,e!==0||(e=window.event,e=e===void 0?16:Jf(e.type)),e):1}function vt(e,t,r,n){if(50<so)throw so=0,hl=null,Error(T(185));Oo(e,r,n),(!(V&2)||e!==_e)&&(e===_e&&(!(V&2)&&(ws|=r),ve===4&&Jt(e,Ee)),qe(e,n),r===1&&V===0&&!(t.mode&1)&&(wn=ce()+500,gs&&hr()))}function qe(e,t){var r=e.callbackNode;vm(e,t);var n=zi(e,e===_e?Ee:0);if(n===0)r!==null&&ec(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ec(r),t===1)e.tag===0?mv(Vc.bind(null,e)):gh(Vc.bind(null,e)),fv(function(){!(V&6)&&hr()}),r=null;else{switch(Wf(n)){case 1:r=Kl;break;case 4:r=Mf;break;case 16:r=Ni;break;case 536870912:r=Bf;break;default:r=Ni}r=hp(r,sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function sp(e,t){if(bi=-1,ji=0,V&6)throw Error(T(327));var r=e.callbackNode;if(fn()&&e.callbackNode!==r)return null;var n=zi(e,e===_e?Ee:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ts(e,n);else{t=n;var o=V;V|=2;var i=lp();(_e!==e||Ee!==t)&&(At=null,wn=ce()+500,Cr(e,t));do try{zv();break}catch(a){ap(e,a)}while(!0);au(),Xi.current=i,V=o,he!==null?t=0:(_e=null,Ee=0,t=ve)}if(t!==0){if(t===2&&(o=Fa(e),o!==0&&(n=o,t=pl(e,o))),t===1)throw r=To,Cr(e,0),Jt(e,n),qe(e,ce()),r;if(t===6)Jt(e,n);else{if(o=e.current.alternate,!(n&30)&&!Lv(o)&&(t=ts(e,n),t===2&&(i=Fa(e),i!==0&&(n=i,t=pl(e,i))),t===1))throw r=To,Cr(e,0),Jt(e,n),qe(e,ce()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(T(345));case 2:_r(e,De,At);break;case 3:if(Jt(e,n),(n&130023424)===n&&(t=Su+500-ce(),10<t)){if(zi(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ka(_r.bind(null,e,De,At),t);break}_r(e,De,At);break;case 4:if(Jt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-mt(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Iv(n/1960))-n,10<n){e.timeoutHandle=Ka(_r.bind(null,e,De,At),n);break}_r(e,De,At);break;case 5:_r(e,De,At);break;default:throw Error(T(329))}}}return qe(e,ce()),e.callbackNode===r?sp.bind(null,e):null}function pl(e,t){var r=io;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=ts(e,t),e!==2&&(t=De,De=r,t!==null&&gl(t)),e}function gl(e){De===null?De=e:De.push.apply(De,e)}function Lv(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!wt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~xu,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-mt(t),n=1<<r;e[r]=-1,t&=~n}}function Vc(e){if(V&6)throw Error(T(327));fn();var t=zi(e,0);if(!(t&1))return qe(e,ce()),null;var r=ts(e,t);if(e.tag!==0&&r===2){var n=Fa(e);n!==0&&(t=n,r=pl(e,n))}if(r===1)throw r=To,Cr(e,0),Jt(e,t),qe(e,ce()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_r(e,De,At),qe(e,ce()),null}function ku(e,t){var r=V;V|=1;try{return e(t)}finally{V=r,V===0&&(wn=ce()+500,gs&&hr())}}function Ir(e){Zt!==null&&Zt.tag===0&&!(V&6)&&fn();var t=V;V|=1;var r=nt.transition,n=K;try{if(nt.transition=null,K=1,e)return e()}finally{K=n,nt.transition=r,V=t,!(V&6)&&hr()}}function Eu(){Ke=on.current,te(on)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,dv(r)),he!==null)for(r=he.return;r!==null;){var n=r;switch(ou(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Bi();break;case 3:vn(),te(Me),te(Ae),hu();break;case 5:fu(n);break;case 4:vn();break;case 13:te(ne);break;case 19:te(ne);break;case 10:lu(n.type._context);break;case 22:case 23:Eu()}r=r.return}if(_e=e,he=e=ar(e.current,null),Ee=Ke=t,ve=0,To=null,xu=ws=Or=0,De=io=null,Er!==null){for(t=0;t<Er.length;t++)if(r=Er[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}Er=null}return e}function ap(e,t){do{var r=he;try{if(au(),Si.current=Yi,Ji){for(var n=oe.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Ji=!1}if(Rr=0,ye=me=oe=null,no=!1,bo=0,_u.current=null,r===null||r.return===null){ve=1,To=t,he=null;break}e:{var i=e,s=r.return,a=r,l=t;if(t=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Oc(s);if(v!==null){v.flags&=-257,Ic(v,s,a,i,t),v.mode&1&&Rc(i,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){Rc(i,u,t),bu();break e}l=Error(T(426))}}else if(re&&a.mode&1){var j=Oc(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ic(j,s,a,i,t),iu(yn(l,a));break e}}i=l=yn(l,a),ve!==4&&(ve=2),io===null?io=[i]:io.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Wh(i,l,t);jc(i,h);break e;case 1:a=l;var g=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ir===null||!ir.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Hh(i,a,t);jc(i,x);break e}}i=i.return}while(i!==null)}cp(r)}catch(k){t=k,he===r&&r!==null&&(he=r=r.return);continue}break}while(!0)}function lp(){var e=Xi.current;return Xi.current=Yi,e===null?Yi:e}function bu(){(ve===0||ve===3||ve===2)&&(ve=4),_e===null||!(Or&268435455)&&!(ws&268435455)||Jt(_e,Ee)}function ts(e,t){var r=V;V|=2;var n=lp();(_e!==e||Ee!==t)&&(At=null,Cr(e,t));do try{Nv();break}catch(o){ap(e,o)}while(!0);if(au(),V=r,Xi.current=n,he!==null)throw Error(T(261));return _e=null,Ee=0,ve}function Nv(){for(;he!==null;)up(he)}function zv(){for(;he!==null&&!lm();)up(he)}function up(e){var t=fp(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?cp(e):he=t,_u.current=null}function cp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=$v(r,t),r!==null){r.flags&=32767,he=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(r=Pv(r,t,Ke),r!==null){he=r;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function _r(e,t,r){var n=K,o=nt.transition;try{nt.transition=null,K=1,Dv(e,t,r,n)}finally{nt.transition=o,K=n}return null}function Dv(e,t,r,n){do fn();while(Zt!==null);if(V&6)throw Error(T(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(ym(e,i),e===_e&&(he=_e=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||oi||(oi=!0,hp(Ni,function(){return fn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var s=K;K=1;var a=V;V|=4,_u.current=null,Rv(e,r),op(r,e),ov(Va),Di=!!Ha,Va=Ha=null,e.current=r,Ov(r),um(),V=a,K=s,nt.transition=i}else e.current=r;if(oi&&(oi=!1,Zt=e,es=o),i=e.pendingLanes,i===0&&(ir=null),fm(r.stateNode),qe(e,ce()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Zi)throw Zi=!1,e=fl,fl=null,e;return es&1&&e.tag!==0&&fn(),i=e.pendingLanes,i&1?e===hl?so++:(so=0,hl=e):so=0,hr(),null}function fn(){if(Zt!==null){var e=Wf(es),t=nt.transition,r=K;try{if(nt.transition=null,K=16>e?16:e,Zt===null)var n=!1;else{if(e=Zt,Zt=null,es=0,V&6)throw Error(T(331));var o=V;for(V|=4,$=e.current;$!==null;){var i=$,s=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:oo(8,c,i)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var p=c.sibling,v=c.return;if(tp(c),c===u){$=null;break}if(p!==null){p.return=v,$=p;break}$=v}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}$=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,$=s;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,$=h;break e}$=i.return}}var g=e.current;for($=g;$!==null;){s=$;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,$=m;else e:for(s=g;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ys(9,a)}}catch(k){le(a,a.return,k)}if(a===s){$=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,$=x;break e}$=a.return}}if(V=o,hr(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(cs,e)}catch{}n=!0}return n}finally{K=r,nt.transition=t}}return!1}function Gc(e,t,r){t=yn(r,t),t=Wh(e,t,1),e=or(e,t,1),t=Le(),e!==null&&(Oo(e,1,t),qe(e,t))}function le(e,t,r){if(e.tag===3)Gc(e,e,r);else for(;t!==null;){if(t.tag===3){Gc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ir===null||!ir.has(n))){e=yn(r,e),e=Hh(t,e,1),t=or(t,e,1),e=Le(),t!==null&&(Oo(t,1,e),qe(t,e));break}}t=t.return}}function Uv(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Ee&r)===r&&(ve===4||ve===3&&(Ee&130023424)===Ee&&500>ce()-Su?Cr(e,0):xu|=r),qe(e,t)}function dp(e,t){t===0&&(e.mode&1?(t=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):t=1);var r=Le();e=Ft(e,t),e!==null&&(Oo(e,t,r),qe(e,r))}function Fv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),dp(e,r)}function Mv(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(t),dp(e,r)}var fp;fp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Fe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Fe=!1,Tv(e,t,r);Fe=!!(e.flags&131072)}else Fe=!1,re&&t.flags&1048576&&mh(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ei(e,t),e=t.pendingProps;var o=pn(t,Ae.current);dn(t,r),o=gu(null,t,n,e,o,r);var i=mu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(n)?(i=!0,qi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cu(t),o.updater=vs,t.stateNode=o,o._reactInternals=t,tl(t,n,e,r),t=ol(null,t,n,!0,i,r)):(t.tag=0,re&&i&&nu(t),Ie(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ei(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=qv(n),e=dt(n,e),o){case 0:t=nl(null,t,n,e,r);break e;case 1:t=zc(null,t,n,e,r);break e;case 11:t=Lc(null,t,n,e,r);break e;case 14:t=Nc(null,t,n,dt(n.type,e),r);break e}throw Error(T(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),nl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),zc(e,t,n,o,r);case 3:e:{if(Qh(t),e===null)throw Error(T(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Sh(e,t),Ki(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=yn(Error(T(423)),t),t=Dc(e,t,n,r,o);break e}else if(n!==o){o=yn(Error(T(424)),t),t=Dc(e,t,n,r,o);break e}else for(Qe=nr(t.stateNode.containerInfo.firstChild),Je=t,re=!0,pt=null,r=_h(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gn(),n===o){t=Mt(e,t,r);break e}Ie(e,t,n,r)}t=t.child}return t;case 5:return kh(t),e===null&&Xa(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Ga(n,o)?s=null:i!==null&&Ga(n,i)&&(t.flags|=32),Kh(e,t),Ie(e,t,s,r),t.child;case 6:return e===null&&Xa(t),null;case 13:return Jh(e,t,r);case 4:return du(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=mn(t,null,n,r):Ie(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),Lc(e,t,n,o,r);case 7:return Ie(e,t,t.pendingProps,r),t.child;case 8:return Ie(e,t,t.pendingProps.children,r),t.child;case 12:return Ie(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,J(Vi,n._currentValue),n._currentValue=s,i!==null)if(wt(i.value,s)){if(i.children===o.children&&!Me.current){t=Mt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=zt(-1,r&-r),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Za(i.return,r,t),a.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Za(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ie(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,dn(t,r),o=it(o),n=n(o),t.flags|=1,Ie(e,t,n,r),t.child;case 14:return n=t.type,o=dt(n,t.pendingProps),o=dt(n.type,o),Nc(e,t,n,o,r);case 15:return Vh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),Ei(e,t),t.tag=1,Be(n)?(e=!0,qi(t)):e=!1,dn(t,r),qh(t,n,o),tl(t,n,o,r),ol(null,t,n,!0,e,r);case 19:return Yh(e,t,r);case 22:return Gh(e,t,r)}throw Error(T(156,t.tag))};function hp(e,t){return Ff(e,t)}function Bv(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,r,n){return new Bv(e,t,r,n)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qv(e){if(typeof e=="function")return ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Vl)return 14}return 2}function ar(e,t){var r=e.alternate;return r===null?(r=rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ci(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")ju(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Kr:return Tr(r.children,o,i,t);case Wl:s=8,o|=8;break;case ba:return e=rt(12,r,t,o|2),e.elementType=ba,e.lanes=i,e;case ja:return e=rt(13,r,t,o),e.elementType=ja,e.lanes=i,e;case Ca:return e=rt(19,r,t,o),e.elementType=Ca,e.lanes=i,e;case kf:return _s(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:s=10;break e;case Sf:s=9;break e;case Hl:s=11;break e;case Vl:s=14;break e;case Gt:s=16,n=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=rt(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Tr(e,t,r,n){return e=rt(7,e,n,t),e.lanes=r,e}function _s(e,t,r,n){return e=rt(22,e,n,t),e.elementType=kf,e.lanes=r,e.stateNode={isHidden:!1},e}function la(e,t,r){return e=rt(6,e,null,t),e.lanes=r,e}function ua(e,t,r){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wv(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qs(0),this.expirationTimes=qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Cu(e,t,r,n,o,i,s,a,l){return e=new Wv(e,t,r,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(i),e}function Hv(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function pp(e){if(!e)return cr;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if(Be(r))return ph(e,r,t)}return t}function gp(e,t,r,n,o,i,s,a,l){return e=Cu(r,n,!0,e,o,i,s,a,l),e.context=pp(null),r=e.current,n=Le(),o=sr(r),i=zt(n,o),i.callback=t??null,or(r,i,o),e.current.lanes=o,Oo(e,o,n),qe(e,n),e}function xs(e,t,r,n){var o=t.current,i=Le(),s=sr(o);return r=pp(r),t.context===null?t.context=r:t.pendingContext=r,t=zt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=or(o,t,s),e!==null&&(vt(e,o,s,i),xi(e,o,s)),s}function rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Tu(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function Vv(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pu(e){this._internalRoot=e}Ss.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));xs(e,t,null,null)};Ss.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){xs(null,e,null,null)}),t[Ut]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Qt.length&&t!==0&&t<Qt[r].priority;r++);Qt.splice(r,0,e),r===0&&Qf(e)}};function $u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qc(){}function Gv(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=rs(s);i.call(u)}}var s=gp(t,n,e,0,null,!1,!1,"",Qc);return e._reactRootContainer=s,e[Ut]=s.current,_o(e.nodeType===8?e.parentNode:e),Ir(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var u=rs(l);a.call(u)}}var l=Cu(e,0,!1,null,null,!1,!1,"",Qc);return e._reactRootContainer=l,e[Ut]=l.current,_o(e.nodeType===8?e.parentNode:e),Ir(function(){xs(t,l,r,n)}),l}function Es(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=rs(s);a.call(l)}}xs(t,s,e,o)}else s=Gv(r,t,e,o,n);return rs(s)}Hf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Hn(t.pendingLanes);r!==0&&(Ql(t,r|1),qe(t,ce()),!(V&6)&&(wn=ce()+500,hr()))}break;case 13:Ir(function(){var n=Ft(e,1);if(n!==null){var o=Le();vt(n,e,1,o)}}),Tu(e,1)}};Jl=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var r=Le();vt(t,e,134217728,r)}Tu(e,134217728)}};Vf=function(e){if(e.tag===13){var t=sr(e),r=Ft(e,t);if(r!==null){var n=Le();vt(r,e,t,n)}Tu(e,t)}};Gf=function(){return K};Kf=function(e,t){var r=K;try{return K=e,t()}finally{K=r}};za=function(e,t,r){switch(t){case"input":if($a(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ps(n);if(!o)throw Error(T(90));bf(n),$a(n,o)}}}break;case"textarea":Cf(e,r);break;case"select":t=r.value,t!=null&&an(e,!!r.multiple,t,!1)}};If=ku;Lf=Ir;var Kv={usingClientEntryPoint:!1,Events:[Lo,Xr,ps,Rf,Of,ku]},Fn={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qv={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Df(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||Vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{cs=ii.inject(Qv),jt=ii}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv;Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(t))throw Error(T(200));return Hv(e,t,null,r)};Xe.createRoot=function(e,t){if(!$u(e))throw Error(T(299));var r=!1,n="",o=mp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cu(e,1,!1,null,null,r,!1,n,o),e[Ut]=t.current,_o(e.nodeType===8?e.parentNode:e),new Pu(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Df(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Ir(e)};Xe.hydrate=function(e,t,r){if(!ks(t))throw Error(T(200));return Es(null,e,t,!0,r)};Xe.hydrateRoot=function(e,t,r){if(!$u(e))throw Error(T(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=mp;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=gp(t,null,e,1,r??null,o,!1,i,s),e[Ut]=t.current,_o(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ss(t)};Xe.render=function(e,t,r){if(!ks(t))throw Error(T(200));return Es(null,e,t,!1,r)};Xe.unmountComponentAtNode=function(e){if(!ks(e))throw Error(T(40));return e._reactRootContainer?(Ir(function(){Es(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};Xe.unstable_batchedUpdates=ku;Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ks(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Es(e,t,r,!1,n)};Xe.version="18.3.1-next-f1338f8080-20240426";function vp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vp)}catch(e){console.error(e)}}vp(),vf.exports=Xe;var Jv=vf.exports,Jc=Jv;ka.createRoot=Jc.createRoot,ka.hydrateRoot=Jc.hydrateRoot;var $e=function(){return $e=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},$e.apply(this,arguments)};function Po(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var ee="-ms-",ao="-moz-",G="-webkit-",yp="comm",bs="rule",Au="decl",Yv="@import",wp="@keyframes",Xv="@layer",_p=Math.abs,Ru=String.fromCharCode,ml=Object.assign;function Zv(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function xp(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,r){return e.replace(t,r)}function Ti(e,t,r){return e.indexOf(t,r)}function we(e,t){return e.charCodeAt(t)|0}function _n(e,t,r){return e.slice(t,r)}function kt(e){return e.length}function Sp(e){return e.length}function Gn(e,t){return t.push(e),e}function e0(e,t){return e.map(t).join("")}function Yc(e,t){return e.filter(function(r){return!Rt(r,t)})}var js=1,xn=1,kp=0,at=0,fe=0,Pn="";function Cs(e,t,r,n,o,i,s,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:js,column:xn,length:s,return:"",siblings:a}}function Ht(e,t){return ml(Cs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ur(e){for(;e.root;)e=Ht(e.root,{children:[e]});Gn(e,e.siblings)}function t0(){return fe}function r0(){return fe=at>0?we(Pn,--at):0,xn--,fe===10&&(xn=1,js--),fe}function yt(){return fe=at<kp?we(Pn,at++):0,xn++,fe===10&&(xn=1,js++),fe}function Pr(){return we(Pn,at)}function Pi(){return at}function Ts(e,t){return _n(Pn,e,t)}function vl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function n0(e){return js=xn=1,kp=kt(Pn=e),at=0,[]}function o0(e){return Pn="",e}function ca(e){return xp(Ts(at-1,yl(e===91?e+2:e===40?e+1:e)))}function i0(e){for(;(fe=Pr())&&fe<33;)yt();return vl(e)>2||vl(fe)>3?"":" "}function s0(e,t){for(;--t&&yt()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Ts(e,Pi()+(t<6&&Pr()==32&&yt()==32))}function yl(e){for(;yt();)switch(fe){case e:return at;case 34:case 39:e!==34&&e!==39&&yl(fe);break;case 40:e===41&&yl(e);break;case 92:yt();break}return at}function a0(e,t){for(;yt()&&e+fe!==57;)if(e+fe===84&&Pr()===47)break;return"/*"+Ts(t,at-1)+"*"+Ru(e===47?e:yt())}function l0(e){for(;!vl(Pr());)yt();return Ts(e,at)}function u0(e){return o0($i("",null,null,null,[""],e=n0(e),0,[0],e))}function $i(e,t,r,n,o,i,s,a,l){for(var u=0,c=0,d=s,p=0,v=0,w=0,y=1,j=1,h=1,g=0,m="",x=o,k=i,E=n,S=m;j;)switch(w=g,g=yt()){case 40:if(w!=108&&we(S,d-1)==58){Ti(S+=q(ca(g),"&","&\f"),"&\f",_p(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:S+=ca(g);break;case 9:case 10:case 13:case 32:S+=i0(w);break;case 92:S+=s0(Pi()-1,7);continue;case 47:switch(Pr()){case 42:case 47:Gn(c0(a0(yt(),Pi()),t,r,l),l);break;default:S+="/"}break;case 123*y:a[u++]=kt(S)*h;case 125*y:case 59:case 0:switch(g){case 0:case 125:j=0;case 59+c:h==-1&&(S=q(S,/\f/g,"")),v>0&&kt(S)-d&&Gn(v>32?Zc(S+";",n,r,d-1,l):Zc(q(S," ","")+";",n,r,d-2,l),l);break;case 59:S+=";";default:if(Gn(E=Xc(S,t,r,u,c,o,a,m,x=[],k=[],d,i),i),g===123)if(c===0)$i(S,t,E,E,x,i,d,a,k);else switch(p===99&&we(S,3)===110?100:p){case 100:case 108:case 109:case 115:$i(e,E,E,n&&Gn(Xc(e,E,E,0,0,o,a,m,o,x=[],d,k),k),o,k,d,a,n?x:k);break;default:$i(S,E,E,E,[""],k,0,a,k)}}u=c=v=0,y=h=1,m=S="",d=s;break;case 58:d=1+kt(S),v=w;default:if(y<1){if(g==123)--y;else if(g==125&&y++==0&&r0()==125)continue}switch(S+=Ru(g),g*y){case 38:h=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(kt(S)-1)*h,h=1;break;case 64:Pr()===45&&(S+=ca(yt())),p=Pr(),c=d=kt(m=S+=l0(Pi())),g++;break;case 45:w===45&&kt(S)==2&&(y=0)}}return i}function Xc(e,t,r,n,o,i,s,a,l,u,c,d){for(var p=o-1,v=o===0?i:[""],w=Sp(v),y=0,j=0,h=0;y<n;++y)for(var g=0,m=_n(e,p+1,p=_p(j=s[y])),x=e;g<w;++g)(x=xp(j>0?v[g]+" "+m:q(m,/&\f/g,v[g])))&&(l[h++]=x);return Cs(e,t,r,o===0?bs:a,l,u,c,d)}function c0(e,t,r,n){return Cs(e,t,r,yp,Ru(t0()),_n(e,2,-2),0,n)}function Zc(e,t,r,n,o){return Cs(e,t,r,Au,_n(e,0,n),_n(e,n+1,-1),n,o)}function Ep(e,t,r){switch(Zv(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 4789:return ao+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+ao+e+ee+e+e;case 5936:switch(we(e,t+11)){case 114:return G+e+ee+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+ee+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+ee+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+ee+e+e;case 6165:return G+e+ee+"flex-"+e+e;case 5187:return G+e+q(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return G+e+ee+"flex-item-"+q(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":ee+"grid-row-"+q(e,/flex-|-self/g,""))+e;case 4675:return G+e+ee+"flex-line-pack"+q(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+ee+q(e,"shrink","negative")+e;case 5292:return G+e+ee+q(e,"basis","preferred-size")+e;case 6060:return G+"box-"+q(e,"-grow","")+G+e+ee+q(e,"grow","positive")+e;case 4554:return G+q(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return ee+"grid-column-align"+_n(e,t)+e;break;case 2592:case 3360:return ee+q(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Rt(n.props,/grid-\w+-end/)})?~Ti(e+(r=r[t].value),"span",0)?e:ee+q(e,"-start","")+e+ee+"grid-row-span:"+(~Ti(r,"span",0)?Rt(r,/\d+/):+Rt(r,/\d+/)-+Rt(e,/\d+/))+";":ee+q(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Rt(n.props,/grid-\w+-start/)})?e:ee+q(q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+ao+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ti(e,"stretch",0)?Ep(q(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,l,u){return ee+o+":"+i+u+(s?ee+o+"-span:"+(a?l:+l-+i)+u:"")+e});case 4949:if(we(e,t+6)===121)return q(e,":",":"+G)+e;break;case 6444:switch(we(e,we(e,14)===45?18:11)){case 120:return q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(we(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+ee+"$2box$3")+e;case 100:return q(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(e,"scroll-","scroll-snap-")+e}return e}function ns(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function d0(e,t,r,n){switch(e.type){case Xv:if(e.children.length)break;case Yv:case Au:return e.return=e.return||e.value;case yp:return"";case wp:return e.return=e.value+"{"+ns(e.children,n)+"}";case bs:if(!kt(e.value=e.props.join(",")))return""}return kt(r=ns(e.children,n))?e.return=e.value+"{"+r+"}":""}function f0(e){var t=Sp(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function h0(e){return function(t){t.root||(t=t.return)&&e(t)}}function p0(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Au:e.return=Ep(e.value,e.length,r);return;case wp:return ns([Ht(e,{value:q(e.value,"@","@"+G)})],n);case bs:if(e.length)return e0(r=e.props,function(o){switch(Rt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ur(Ht(e,{props:[q(o,/:(read-\w+)/,":"+ao+"$1")]})),Ur(Ht(e,{props:[o]})),ml(e,{props:Yc(r,n)});break;case"::placeholder":Ur(Ht(e,{props:[q(o,/:(plac\w+)/,":"+G+"input-$1")]})),Ur(Ht(e,{props:[q(o,/:(plac\w+)/,":"+ao+"$1")]})),Ur(Ht(e,{props:[q(o,/:(plac\w+)/,ee+"input-$1")]})),Ur(Ht(e,{props:[o]})),ml(e,{props:Yc(r,n)});break}return""})}}var g0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},Sn=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",bp="active",jp="data-styled-version",Ps="6.1.19",Ou=`/*!sc*/
`,os=typeof window<"u"&&typeof document<"u",m0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),v0={},$s=Object.freeze([]),kn=Object.freeze({});function Cp(e,t,r){return r===void 0&&(r=kn),e.theme!==r.theme&&e.theme||t||r.theme}var Tp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),y0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,w0=/(^-|-$)/g;function ed(e){return e.replace(y0,"-").replace(w0,"")}var _0=/(a)(d)/gi,si=52,td=function(e){return String.fromCharCode(e+(e>25?39:97))};function wl(e){var t,r="";for(t=Math.abs(e);t>si;t=t/si|0)r=td(t%si)+r;return(td(t%si)+r).replace(_0,"$1-$2")}var da,Pp=5381,sn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},$p=function(e){return sn(Pp,e)};function Ap(e){return wl($p(e)>>>0)}function x0(e){return e.displayName||e.name||"Component"}function fa(e){return typeof e=="string"&&!0}var Rp=typeof Symbol=="function"&&Symbol.for,Op=Rp?Symbol.for("react.memo"):60115,S0=Rp?Symbol.for("react.forward_ref"):60112,k0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ip={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b0=((da={})[S0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},da[Op]=Ip,da);function rd(e){return("type"in(t=e)&&t.type.$$typeof)===Op?Ip:"$$typeof"in e?b0[e.$$typeof]:k0;var t}var j0=Object.defineProperty,C0=Object.getOwnPropertyNames,nd=Object.getOwnPropertySymbols,T0=Object.getOwnPropertyDescriptor,P0=Object.getPrototypeOf,od=Object.prototype;function Lp(e,t,r){if(typeof t!="string"){if(od){var n=P0(t);n&&n!==od&&Lp(e,n,r)}var o=C0(t);nd&&(o=o.concat(nd(t)));for(var i=rd(e),s=rd(t),a=0;a<o.length;++a){var l=o[a];if(!(l in E0||r&&r[l]||s&&l in s||i&&l in i)){var u=T0(t,l);try{j0(e,l,u)}catch{}}}}return e}function En(e){return typeof e=="function"}function Iu(e){return typeof e=="object"&&"styledComponentId"in e}function jr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _l(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function $o(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xl(e,t,r){if(r===void 0&&(r=!1),!r&&!$o(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=xl(e[n],t[n]);else if($o(t))for(var n in t)e[n]=xl(e[n],t[n]);return e}function Lu(e,t){Object.defineProperty(e,"toString",{value:t})}function zo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw zo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Ou);return r},e}(),Ai=new Map,is=new Map,Ri=1,ai=function(e){if(Ai.has(e))return Ai.get(e);for(;is.has(Ri);)Ri++;var t=Ri++;return Ai.set(e,t),is.set(t,e),t},A0=function(e,t){Ri=t+1,Ai.set(e,t),is.set(t,e)},R0="style[".concat(Sn,"][").concat(jp,'="').concat(Ps,'"]'),O0=new RegExp("^".concat(Sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),I0=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},L0=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ou),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var l=a.match(O0);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(A0(c,u),I0(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},id=function(e){for(var t=document.querySelectorAll(R0),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Sn)!==bp&&(L0(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function N0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Np=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Sn,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Sn,bp),n.setAttribute(jp,Ps);var s=N0();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},z0=function(){function e(t){this.element=Np(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw zo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),D0=function(){function e(t){this.element=Np(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),U0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),sd=os,F0={isServer:!os,useCSSOMInjection:!m0},ss=function(){function e(t,r,n){t===void 0&&(t=kn),r===void 0&&(r={});var o=this;this.options=$e($e({},F0),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&os&&sd&&(sd=!1,id(this)),Lu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",u=function(d){var p=function(h){return is.get(h)}(d);if(p===void 0)return"continue";var v=i.names.get(p),w=s.getGroup(d);if(v===void 0||!v.size||w.length===0)return"continue";var y="".concat(Sn,".g").concat(d,'[id="').concat(p,'"]'),j="";v!==void 0&&v.forEach(function(h){h.length>0&&(j+="".concat(h,","))}),l+="".concat(w).concat(y,'{content:"').concat(j,'"}').concat(Ou)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return ai(t)},e.prototype.rehydrate=function(){!this.server&&os&&id(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e($e($e({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new U0(o):n?new z0(o):new D0(o)}(this.options),new $0(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ai(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ai(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ai(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),M0=/&/g,B0=/^\s*\/\/.*$/gm;function zp(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=zp(r.children,t)),r})}function q0(e){var t,r,n,o=kn,i=o.options,s=i===void 0?kn:i,a=o.plugins,l=a===void 0?$s:a,u=function(p,v,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):p},c=l.slice();c.push(function(p){p.type===bs&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(M0,r).replace(n,u))}),s.prefix&&c.push(p0),c.push(d0);var d=function(p,v,w,y){v===void 0&&(v=""),w===void 0&&(w=""),y===void 0&&(y="&"),t=y,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var j=p.replace(B0,""),h=u0(w||v?"".concat(w," ").concat(v," { ").concat(j," }"):j);s.namespace&&(h=zp(h,s.namespace));var g=[];return ns(h,f0(c.concat(h0(function(m){return g.push(m)})))),g};return d.hash=l.length?l.reduce(function(p,v){return v.name||zo(15),sn(p,v.name)},Pp).toString():"",d}var W0=new ss,Sl=q0(),Dp=bt.createContext({shouldForwardProp:void 0,styleSheet:W0,stylis:Sl});Dp.Consumer;bt.createContext(void 0);function kl(){return C.useContext(Dp)}var H0=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Sl);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Lu(this,function(){throw zo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Sl),this.name+t.hash},e}(),V0=function(e){return e>="A"&&e<="Z"};function ad(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;V0(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Up=function(e){return e==null||e===!1||e===""},Fp=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Up(i)&&(Array.isArray(i)&&i.isCss||En(i)?n.push("".concat(ad(o),":"),i,";"):$o(i)?n.push.apply(n,Po(Po(["".concat(o," {")],Fp(i),!1),["}"],!1)):n.push("".concat(ad(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in g0||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function lr(e,t,r,n){if(Up(e))return[];if(Iu(e))return[".".concat(e.styledComponentId)];if(En(e)){if(!En(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return lr(o,t,r,n)}var i;return e instanceof H0?r?(e.inject(r,n),[e.getName(n)]):[e]:$o(e)?Fp(e):Array.isArray(e)?Array.prototype.concat.apply($s,e.map(function(s){return lr(s,t,r,n)})):[e.toString()]}function Mp(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(En(r)&&!Iu(r))return!1}return!0}var G0=$p(Ps),K0=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Mp(t),this.componentId=r,this.baseHash=sn(G0,r),this.baseStyle=n,ss.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=jr(o,this.staticRulesId);else{var i=_l(lr(this.rules,t,r,n)),s=wl(sn(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=jr(o,s),this.staticRulesId=s}else{for(var l=sn(this.baseHash,n.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var p=_l(lr(d,t,r,n));l=sn(l,p+c),u+=p}}if(u){var v=wl(l>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(u,".".concat(v),void 0,this.componentId)),o=jr(o,v)}}return o},e}(),Nu=bt.createContext(void 0);Nu.Consumer;var ha={};function Q0(e,t,r){var n=Iu(e),o=e,i=!fa(e),s=t.attrs,a=s===void 0?$s:s,l=t.componentId,u=l===void 0?function(x,k){var E=typeof x!="string"?"sc":ed(x);ha[E]=(ha[E]||0)+1;var S="".concat(E,"-").concat(Ap(Ps+E+ha[E]));return k?"".concat(k,"-").concat(S):S}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(x){return fa(x)?"styled.".concat(x):"Styled(".concat(x0(x),")")}(e):c,p=t.displayName&&t.componentId?"".concat(ed(t.displayName),"-").concat(t.componentId):t.componentId||u,v=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(n&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;w=function(x,k){return y(x,k)&&j(x,k)}}else w=y}var h=new K0(r,p,n?o.componentStyle:void 0);function g(x,k){return function(E,S,P){var R=E.attrs,O=E.componentStyle,z=E.defaultProps,L=E.foldedComponentIds,Y=E.styledComponentId,de=E.target,se=bt.useContext(Nu),ue=kl(),xe=E.shouldForwardProp||ue.shouldForwardProp,b=Cp(S,se,z)||kn,A=function(We,Se,He){for(var F,X=$e($e({},Se),{className:void 0,theme:He}),Ve=0;Ve<We.length;Ve+=1){var Tt=En(F=We[Ve])?F(X):F;for(var lt in Tt)X[lt]=lt==="className"?jr(X[lt],Tt[lt]):lt==="style"?$e($e({},X[lt]),Tt[lt]):Tt[lt]}return Se.className&&(X.className=jr(X.className,Se.className)),X}(R,S,b),I=A.as||de,N={};for(var D in A)A[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&A.theme===b||(D==="forwardedAs"?N.as=A.forwardedAs:xe&&!xe(D,I)||(N[D]=A[D]));var Re=function(We,Se){var He=kl(),F=We.generateAndInjectStyles(Se,He.styleSheet,He.stylis);return F}(O,A),je=jr(L,Y);return Re&&(je+=" "+Re),A.className&&(je+=" "+A.className),N[fa(I)&&!Tp.has(I)?"class":"className"]=je,P&&(N.ref=P),C.createElement(I,N)}(m,x,k)}g.displayName=d;var m=bt.forwardRef(g);return m.attrs=v,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=w,m.foldedComponentIds=n?jr(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=p,m.target=n?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(k){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var P=0,R=E;P<R.length;P++)xl(k,R[P],!0);return k}({},o.defaultProps,x):x}}),Lu(m,function(){return".".concat(m.styledComponentId)}),i&&Lp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function ld(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var ud=function(e){return Object.assign(e,{isCss:!0})};function Bp(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(En(e)||$o(e))return ud(lr(ld($s,Po([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?lr(n):ud(lr(ld(n,t)))}function El(e,t,r){if(r===void 0&&(r=kn),!t)throw zo(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,Bp.apply(void 0,Po([o],i,!1)))};return n.attrs=function(o){return El(e,t,$e($e({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return El(e,t,$e($e({},r),o))},n}var qp=function(e){return El(Q0,e)},_=qp;Tp.forEach(function(e){_[e]=qp(e)});var J0=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Mp(t),ss.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(_l(lr(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&ss.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Y0(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Bp.apply(void 0,Po([e],t,!1)),o="sc-global-".concat(Ap(JSON.stringify(n))),i=new J0(n,o),s=function(l){var u=kl(),c=bt.useContext(Nu),d=bt.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),bt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,p){if(i.isStatic)i.renderStyles(l,v0,c,p);else{var v=$e($e({},u),{theme:Cp(u,d,s.defaultProps)});i.renderStyles(l,v,c,p)}}return bt.memo(s)}const X0=Y0`
  :root {
    --color-primary: #373a36;
    --color-accent: #ff5c35;
    --color-secondary: #c7c8c7;
    --color-white: #ffffff;
    --color-gray: #909288;
    --color-light: #d9d8d6;
    --color-danger: #ff4438;
    --color-pink: #f4d3d6;
    --color-bg: #e5e1e6;
    --color-shadow: rgba(55, 58, 54, 0.08);

    /* Estados de Tickets */
    --color-estado-sin-atender: #ff5507; /* Amarillo - Sin atender (1) */
    --color-estado-sin-atender-bg: #fff8e1;
    --color-estado-delegado: #17a2b8; /* Azul - Delegado (2) */
    --color-estado-delegado-bg: #e3f2fd;
    --color-estado-atendido: #28a745; /* Verde - Atendido (3) */
    --color-estado-atendido-bg: #e8f5e8;
    --color-estado-cerrado: #6c757d; /* Gris - Cerrado (4) */
    --color-estado-cerrado-bg: #f8f9fa;
    --color-estado-cancelado: #dc3545; /* Rojo - Cancelado (5) */
    --color-estado-cancelado-bg: #f8d7da;

    /* Prioridades - Solo 3 niveles */
    --color-prioridad-baja: #6c757d; /* Gris - Baja prioridad */
    --color-prioridad-baja-bg: #f8f9fa;
    --color-prioridad-media: #ffc107; /* Amarillo - Media prioridad */
    --color-prioridad-media-bg: #fff8e1;
    --color-prioridad-alta: #fd7e14; /* Naranja - Alta prioridad */
    --color-prioridad-alta-bg: #fff4e6;

    /* Variaciones para hover y estados activos */
    --color-estado-sin-atender-hover: #e6a800;
    --color-estado-delegado-hover: #138496;
    --color-estado-atendido-hover: #1e7e34;
    --color-estado-cerrado-hover: #545b62;
    --color-estado-cancelado-hover: #c82333;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--color-bg);
    color: var(--color-primary);
    min-height: 100vh;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    color: var(--color-primary);
    margin-top: 0;
    font-weight: 700;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: var(--color-danger);
    text-decoration: underline;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }

  button {
    background: var(--color-accent);
    color: var(--color-white);
    border: none;
    border-radius: 4px;
    padding: 0.5em 1.2em;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 2px 8px var(--color-shadow);
    transition: background 0.2s;
  }
  button:hover {
    background: var(--color-danger);
  }

  ::selection {
    background: var(--color-pink);
    color: var(--color-primary);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    background: var(--color-light);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 8px;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--color-white);
    box-shadow: 0 2px 8px var(--color-shadow);
    border-radius: 8px;
  }

  /* Estados de Tickets - Clases utilitarias */
  .estado-sin-atender {
    color: var(--color-estado-sin-atender);
    background: var(--color-estado-sin-atender-bg);
    border-color: var(--color-estado-sin-atender);
  }

  .estado-delegado {
    color: var(--color-estado-delegado);
    background: var(--color-estado-delegado-bg);
    border-color: var(--color-estado-delegado);
  }

  .estado-atendido {
    color: var(--color-estado-atendido);
    background: var(--color-estado-atendido-bg);
    border-color: var(--color-estado-atendido);
  }

  .estado-cerrado {
    color: var(--color-estado-cerrado);
    background: var(--color-estado-cerrado-bg);
    border-color: var(--color-estado-cerrado);
  }

  .estado-cancelado {
    color: var(--color-estado-cancelado);
    background: var(--color-estado-cancelado-bg);
    border-color: var(--color-estado-cancelado);
  }

  /* Prioridades - Solo 3 niveles */
  .prioridad-baja {
    color: var(--color-prioridad-baja);
    background: var(--color-prioridad-baja-bg);
    border: 1px solid var(--color-prioridad-baja);
  }

  .prioridad-media {
    color: var(--color-prioridad-media);
    background: var(--color-prioridad-media-bg);
    border: 1px solid var(--color-prioridad-media);
  }

  .prioridad-alta {
    color: var(--color-prioridad-alta);
    background: var(--color-prioridad-alta-bg);
    border: 1px solid var(--color-prioridad-alta);
  }

  /* Badges base */
  .badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    vertical-align: baseline;
    transition: all 0.2s ease;
  }

  .badge:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px var(--color-shadow);
  }

  /* Tarjetas con estados */
  .card-ticket {
    transition: all 0.3s ease;
    border-left: 4px solid var(--color-secondary);
  }

  .card-ticket.sin-atender {
    border-left-color: var(--color-estado-sin-atender);
  }

  .card-ticket.delegado {
    border-left-color: var(--color-estado-delegado);
  }

  .card-ticket.atendido {
    border-left-color: var(--color-estado-atendido);
  }

  .card-ticket.cerrado {
    border-left-color: var(--color-estado-cerrado);
  }

  .card-ticket.cancelado {
    border-left-color: var(--color-estado-cancelado);
  }

  .card-ticket:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--color-shadow);
  }
`,Z0="modulepreload",ey=function(e){return"/ventanilla/"+e},cd={},Do=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(l=>{if(l=ey(l),l in cd)return;cd[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Z0,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((p,v)=>{d.addEventListener("load",p),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},ty=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Do(async()=>{const{default:n}=await Promise.resolve().then(()=>$n);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class zu extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class ry extends zu{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class dd extends zu{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class fd extends zu{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var bl;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(bl||(bl={}));var ny=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class oy{constructor(t,{headers:r={},customFetch:n,region:o=bl.Any}={}){this.url=t,this.headers=r,this.region=o,this.fetch=ty(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return ny(this,void 0,void 0,function*(){try{const{headers:o,method:i,body:s}=r;let a={},{region:l}=r;l||(l=this.region);const u=new URL(`${this.url}/${t}`);l&&l!=="any"&&(a["x-region"]=l,u.searchParams.set("forceFunctionRegion",l));let c;s&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",c=s):typeof s=="string"?(a["Content-Type"]="text/plain",c=s):typeof FormData<"u"&&s instanceof FormData?c=s:(a["Content-Type"]="application/json",c=JSON.stringify(s)));const d=yield this.fetch(u.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),o),body:c}).catch(y=>{throw new ry(y)}),p=d.headers.get("x-relay-error");if(p&&p==="true")throw new dd(d);if(!d.ok)throw new fd(d);let v=((n=d.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),w;return v==="application/json"?w=yield d.json():v==="application/octet-stream"?w=yield d.blob():v==="text/event-stream"?w=d:v==="multipart/form-data"?w=yield d.formData():w=yield d.text(),{data:w,error:null,response:d}}catch(o){return{data:null,error:o,response:o instanceof fd||o instanceof dd?o.context:void 0}}})}}var Ue={},Du={},As={},Uo={},Rs={},Os={},iy=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},bn=iy();const sy=bn.fetch,Wp=bn.fetch.bind(bn),Hp=bn.Headers,ay=bn.Request,ly=bn.Response,$n=Object.freeze(Object.defineProperty({__proto__:null,Headers:Hp,Request:ay,Response:ly,default:Wp,fetch:sy},Symbol.toStringTag,{value:"Module"})),uy=Eg($n);var Is={};Object.defineProperty(Is,"__esModule",{value:!0});let cy=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};Is.default=cy;var Vp=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Os,"__esModule",{value:!0});const dy=Vp(uy),fy=Vp(Is);let hy=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=dy.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let o=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var s,a,l;let u=null,c=null,d=null,p=i.status,v=i.statusText;if(i.ok){if(this.method!=="HEAD"){const h=await i.text();h===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?c=h:c=JSON.parse(h))}const y=(s=this.headers.Prefer)===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),j=(a=i.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");y&&j&&j.length>1&&(d=parseInt(j[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(c)&&(c.length>1?(u={code:"PGRST116",details:`Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},c=null,d=null,p=406,v="Not Acceptable"):c.length===1?c=c[0]:c=null)}else{const y=await i.text();try{u=JSON.parse(y),Array.isArray(u)&&i.status===404&&(c=[],u=null,p=200,v="OK")}catch{i.status===404&&y===""?(p=204,v="No Content"):u={message:y}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,p=200,v="OK"),u&&this.shouldThrowOnError)throw new fy.default(u)}return{error:u,data:c,count:d,status:p,statusText:v}});return this.shouldThrowOnError||(o=o.catch(i=>{var s,a,l;return{error:{message:`${(s=i==null?void 0:i.name)!==null&&s!==void 0?s:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),o.then(t,r)}returns(){return this}overrideTypes(){return this}};Os.default=hy;var py=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rs,"__esModule",{value:!0});const gy=py(Os);let my=class extends gy.default{select(t){let r=!1;const n=(t??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:o,referencedTable:i=o}={}){const s=i?`${i}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const o=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(o,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:o=n}={}){const i=typeof o>"u"?"offset":`${o}.offset`,s=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(s,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:o=!1,wal:i=!1,format:s="text"}={}){var a;const l=[t?"analyze":null,r?"verbose":null,n?"settings":null,o?"buffers":null,i?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${s}; for="${u}"; options=${l};`,s==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};Rs.default=my;var vy=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uo,"__esModule",{value:!0});const yy=vy(Rs);let wy=class extends yy.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:o}={}){let i="";o==="plain"?i="pl":o==="phrase"?i="ph":o==="websearch"&&(i="w");const s=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${i}fts${s}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const o=n?`${n}.or`:"or";return this.url.searchParams.append(o,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};Uo.default=wy;var _y=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(As,"__esModule",{value:!0});const Mn=_y(Uo);let xy=class{constructor(t,{headers:r={},schema:n,fetch:o}){this.url=t,this.headers=r,this.schema=n,this.fetch=o}select(t,{head:r=!1,count:n}={}){const o=r?"HEAD":"GET";let i=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!i?"":(a==='"'&&(i=!i),a)).join("");return this.url.searchParams.set("select",s),n&&(this.headers.Prefer=`count=${n}`),new Mn.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const o="POST",i=[];if(this.headers.Prefer&&i.push(this.headers.Prefer),r&&i.push(`count=${r}`),n||i.push("missing=default"),this.headers.Prefer=i.join(","),Array.isArray(t)){const s=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(s.length>0){const a=[...new Set(s)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new Mn.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:o,defaultToNull:i=!0}={}){const s="POST",a=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&a.push(this.headers.Prefer),o&&a.push(`count=${o}`),i||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((u,c)=>u.concat(Object.keys(c)),[]);if(l.length>0){const u=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",u.join(","))}}return new Mn.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",o=[];return this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),this.headers.Prefer=o.join(","),new Mn.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new Mn.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};As.default=xy;var Ls={},Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});Ns.version=void 0;Ns.version="0.0.0-automated";Object.defineProperty(Ls,"__esModule",{value:!0});Ls.DEFAULT_HEADERS=void 0;const Sy=Ns;Ls.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${Sy.version}`};var Gp=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Du,"__esModule",{value:!0});const ky=Gp(As),Ey=Gp(Uo),by=Ls;let jy=class Kp{constructor(t,{headers:r={},schema:n,fetch:o}={}){this.url=t,this.headers=Object.assign(Object.assign({},by.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=o}from(t){const r=new URL(`${this.url}/${t}`);return new ky.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new Kp(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:o=!1,count:i}={}){let s;const a=new URL(`${this.url}/rpc/${t}`);let l;n||o?(s=n?"HEAD":"GET",Object.entries(r).filter(([c,d])=>d!==void 0).map(([c,d])=>[c,Array.isArray(d)?`{${d.join(",")}}`:`${d}`]).forEach(([c,d])=>{a.searchParams.append(c,d)})):(s="POST",l=r);const u=Object.assign({},this.headers);return i&&(u.Prefer=`count=${i}`),new Ey.default({method:s,url:a,headers:u,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};Du.default=jy;var An=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ue,"__esModule",{value:!0});Ue.PostgrestError=Ue.PostgrestBuilder=Ue.PostgrestTransformBuilder=Ue.PostgrestFilterBuilder=Ue.PostgrestQueryBuilder=Ue.PostgrestClient=void 0;const Qp=An(Du);Ue.PostgrestClient=Qp.default;const Jp=An(As);Ue.PostgrestQueryBuilder=Jp.default;const Yp=An(Uo);Ue.PostgrestFilterBuilder=Yp.default;const Xp=An(Rs);Ue.PostgrestTransformBuilder=Xp.default;const Zp=An(Os);Ue.PostgrestBuilder=Zp.default;const eg=An(Is);Ue.PostgrestError=eg.default;var Cy=Ue.default={PostgrestClient:Qp.default,PostgrestQueryBuilder:Jp.default,PostgrestFilterBuilder:Yp.default,PostgrestTransformBuilder:Xp.default,PostgrestBuilder:Zp.default,PostgrestError:eg.default};const{PostgrestClient:Ty,PostgrestQueryBuilder:vS,PostgrestFilterBuilder:yS,PostgrestTransformBuilder:wS,PostgrestBuilder:_S,PostgrestError:xS}=Cy;class Py{static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"&&process.versions&&process.versions.node){const r=parseInt(process.versions.node.split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const $y="2.15.1",Ay=`realtime-js/${$y}`,Ry="1.0.0",jl=1e4,Oy=1e3,Iy=100;var lo;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(lo||(lo={}));var pe;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(pe||(pe={}));var ht;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(ht||(ht={}));var Cl;(function(e){e.websocket="websocket"})(Cl||(Cl={}));var Sr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(Sr||(Sr={}));class Ly{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const o=r.getUint8(1),i=r.getUint8(2);let s=this.HEADER_LENGTH+2;const a=n.decode(t.slice(s,s+o));s=s+o;const l=n.decode(t.slice(s,s+i));s=s+i;const u=JSON.parse(n.decode(t.slice(s,t.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class tg{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Q;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Q||(Q={}));const hd=(e,t,r={})=>{var n;const o=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((i,s)=>(i[s]=Ny(s,e,t,o),i),{})},Ny=(e,t,r,n)=>{const o=t.find(a=>a.name===e),i=o==null?void 0:o.type,s=r[e];return i&&!n.includes(i)?rg(i,s):Tl(s)},rg=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return Fy(t,r)}switch(e){case Q.bool:return zy(t);case Q.float4:case Q.float8:case Q.int2:case Q.int4:case Q.int8:case Q.numeric:case Q.oid:return Dy(t);case Q.json:case Q.jsonb:return Uy(t);case Q.timestamp:return My(t);case Q.abstime:case Q.date:case Q.daterange:case Q.int4range:case Q.int8range:case Q.money:case Q.reltime:case Q.text:case Q.time:case Q.timestamptz:case Q.timetz:case Q.tsrange:case Q.tstzrange:return Tl(t);default:return Tl(t)}},Tl=e=>e,zy=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},Dy=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Uy=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},Fy=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let i;const s=e.slice(1,r);try{i=JSON.parse("["+s+"]")}catch{i=s?s.split(","):[]}return i.map(a=>rg(t,a))}return e},My=e=>typeof e=="string"?e.replace(" ","T"):e,ng=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"};class pa{constructor(t,r,n={},o=jl){this.channel=t,this.event=r,this.payload=n,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var pd;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(pd||(pd={}));class uo{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=uo.syncState(this.state,o,i,s),this.pendingDiffs.forEach(l=>{this.state=uo.syncDiff(this.state,l,i,s)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=uo.syncDiff(this.state,o,i,s),a())}),this.onJoin((o,i,s)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:i,newPresences:s})}),this.onLeave((o,i,s)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:i,leftPresences:s})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,o){const i=this.cloneDeep(t),s=this.transformState(r),a={},l={};return this.map(i,(u,c)=>{s[u]||(l[u]=c)}),this.map(s,(u,c)=>{const d=i[u];if(d){const p=c.map(j=>j.presence_ref),v=d.map(j=>j.presence_ref),w=c.filter(j=>v.indexOf(j.presence_ref)<0),y=d.filter(j=>p.indexOf(j.presence_ref)<0);w.length>0&&(a[u]=w),y.length>0&&(l[u]=y)}else a[u]=c}),this.syncDiff(i,{joins:a,leaves:l},n,o)}static syncDiff(t,r,n,o){const{joins:i,leaves:s}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),o||(o=()=>{}),this.map(i,(a,l)=>{var u;const c=(u=t[a])!==null&&u!==void 0?u:[];if(t[a]=this.cloneDeep(l),c.length>0){const d=t[a].map(v=>v.presence_ref),p=c.filter(v=>d.indexOf(v.presence_ref)<0);t[a].unshift(...p)}n(a,c,l)}),this.map(s,(a,l)=>{let u=t[a];if(!u)return;const c=l.map(d=>d.presence_ref);u=u.filter(d=>c.indexOf(d.presence_ref)<0),t[a]=u,o(a,u,l),u.length===0&&delete t[a]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const o=t[n];return"metas"in o?r[n]=o.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):r[n]=o,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var gd;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(gd||(gd={}));var co;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(co||(co={}));var Ot;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(Ot||(Ot={}));class Uu{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=pe.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new pa(this,ht.join,this.params,this.timeout),this.rejoinTimer=new tg(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=pe.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=pe.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=pe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=pe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=pe.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ht.reply,{},(o,i)=>{this._trigger(this._replyEventName(i),o)}),this.presence=new uo(this),this.broadcastEndpointURL=ng(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,o;if(this.socket.isConnected()||this.socket.connect(),this.state==pe.closed){const{config:{broadcast:i,presence:s,private:a}}=this.params,l=(o=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(p=>p.filter))!==null&&o!==void 0?o:[],u=!!this.bindings[co.PRESENCE]&&this.bindings[co.PRESENCE].length>0,c={},d={broadcast:i,presence:Object.assign(Object.assign({},s),{enabled:u}),postgres_changes:l,private:a};this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this._onError(p=>t==null?void 0:t(Ot.CHANNEL_ERROR,p)),this._onClose(()=>t==null?void 0:t(Ot.CLOSED)),this.updateJoinPayload(Object.assign({config:d},c)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:p})=>{var v;if(this.socket.setAuth(),p===void 0){t==null||t(Ot.SUBSCRIBED);return}else{const w=this.bindings.postgres_changes,y=(v=w==null?void 0:w.length)!==null&&v!==void 0?v:0,j=[];for(let h=0;h<y;h++){const g=w[h],{filter:{event:m,schema:x,table:k,filter:E}}=g,S=p&&p[h];if(S&&S.event===m&&S.schema===x&&S.table===k&&S.filter===E)j.push(Object.assign(Object.assign({},g),{id:S.id}));else{this.unsubscribe(),this.state=pe.errored,t==null||t(Ot.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=j,t&&t(Ot.SUBSCRIBED);return}}).receive("error",p=>{this.state=pe.errored,t==null||t(Ot.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(p).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(Ot.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===pe.joined&&t===co.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(t,r,n)}async send(t,r={}){var n,o;if(!this._canPush()&&t.type==="broadcast"){const{event:i,payload:s}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:s,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((o=u.body)===null||o===void 0?void 0:o.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var s,a,l;const u=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(s=this.params)===null||s===void 0?void 0:s.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),u.receive("ok",()=>i("ok")),u.receive("error",()=>i("error")),u.receive("timeout",()=>i("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=pe.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ht.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(o=>{n=new pa(this,ht.leave,{},t),n.receive("ok",()=>{r(),o("ok")}).receive("timeout",()=>{r(),o("timed out")}).receive("error",()=>{o("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=pe.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const o=new AbortController,i=setTimeout(()=>o.abort(),n),s=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(i),s}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new pa(this,t,r,n);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>Iy){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var o,i;const s=t.toLocaleLowerCase(),{close:a,error:l,leave:u,join:c}=ht;if(n&&[a,l,u,c].indexOf(s)>=0&&n!==this._joinRef())return;let p=this._onMessage(s,r,n);if(r&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(v=>{var w,y,j;return((w=v.filter)===null||w===void 0?void 0:w.event)==="*"||((j=(y=v.filter)===null||y===void 0?void 0:y.event)===null||j===void 0?void 0:j.toLocaleLowerCase())===s}).map(v=>v.callback(p,n)):(i=this.bindings[s])===null||i===void 0||i.filter(v=>{var w,y,j,h,g,m;if(["broadcast","presence","postgres_changes"].includes(s))if("id"in v){const x=v.id,k=(w=v.filter)===null||w===void 0?void 0:w.event;return x&&((y=r.ids)===null||y===void 0?void 0:y.includes(x))&&(k==="*"||(k==null?void 0:k.toLocaleLowerCase())===((j=r.data)===null||j===void 0?void 0:j.type.toLocaleLowerCase()))}else{const x=(g=(h=v==null?void 0:v.filter)===null||h===void 0?void 0:h.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return x==="*"||x===((m=r==null?void 0:r.event)===null||m===void 0?void 0:m.toLocaleLowerCase())}else return v.type.toLocaleLowerCase()===s}).map(v=>{if(typeof p=="object"&&"ids"in p){const w=p.data,{schema:y,table:j,commit_timestamp:h,type:g,errors:m}=w;p=Object.assign(Object.assign({},{schema:y,table:j,commit_timestamp:h,eventType:g,new:{},old:{},errors:m}),this._getPayloadRecords(w))}v.callback(p,n)})}_isClosed(){return this.state===pe.closed}_isJoined(){return this.state===pe.joined}_isJoining(){return this.state===pe.joining}_isLeaving(){return this.state===pe.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const o=t.toLocaleLowerCase(),i={type:o,filter:r,callback:n};return this.bindings[o]?this.bindings[o].push(i):this.bindings[o]=[i],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(o=>{var i;return!(((i=o.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===n&&Uu.isEqual(o.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(ht.close,{},t)}_onError(t){this._on(ht.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=pe.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=hd(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=hd(t.columns,t.old_record)),r}}const md=()=>{},li={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},By=[1e3,2e3,5e3,1e4],qy=1e4,Wy=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Hy{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=jl,this.transport=null,this.heartbeatIntervalMs=li.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=md,this.ref=0,this.reconnectTimer=null,this.logger=md,this.conn=null,this.sendBuffer=[],this.serializer=new Ly,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...s)=>Do(async()=>{const{default:a}=await Promise.resolve().then(()=>$n);return{default:a}},void 0).then(({default:a})=>a(...s)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):i=fetch,(...s)=>i(...s)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${Cl.websocket}`,this.httpEndpoint=ng(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=Py.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:Ry}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},t?this.conn.close(t,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case lo.connecting:return Sr.Connecting;case lo.open:return Sr.Open;case lo.closing:return Sr.Closing;default:return Sr.Closed}}isConnected(){return this.connectionState()===Sr.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,o=this.getChannels().find(i=>i.topic===n);if(o)return o;{const i=new Uu(`realtime:${t}`,r,this);return this.channels.push(i),i}}push(t){const{topic:r,event:n,payload:o,ref:i}=t,s=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${i})`,o),this.isConnected()?s():this.sendBuffer.push(s)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(Oy,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},li.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{r.topic==="phoenix"&&r.event==="phx_reply"&&this.heartbeatCallback(r.payload.status==="ok"?"ok":"error"),r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:o,payload:i,ref:s}=r,a=s?`(${s})`:"",l=i.status||"";this.log("receive",`${l} ${n} ${o} ${a}`.trim(),i),this.channels.filter(u=>u._isMember(n)).forEach(u=>u._trigger(o,i,s)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(ht.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",o=new URLSearchParams(r);return`${t}${n}${o}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([Wy],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r;t?r=t:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const o={access_token:r,version:Ay};r&&n.updateJoinPayload(o),n.joinedOnce&&n._isJoined()&&n._push(ht.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new tg(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},li.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,o,i,s,a,l,u;if(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:jl,this.heartbeatIntervalMs=(o=t==null?void 0:t.heartbeatIntervalMs)!==null&&o!==void 0?o:li.HEARTBEAT_INTERVAL,this.worker=(i=t==null?void 0:t.worker)!==null&&i!==void 0?i:!1,this.accessToken=(s=t==null?void 0:t.accessToken)!==null&&s!==void 0?s:null,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(a=t==null?void 0:t.reconnectAfterMs)!==null&&a!==void 0?a:c=>By[c-1]||qy,this.encode=(l=t==null?void 0:t.encode)!==null&&l!==void 0?l:(c,d)=>d(JSON.stringify(c)),this.decode=(u=t==null?void 0:t.decode)!==null&&u!==void 0?u:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}class Fu extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function ge(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class Vy extends Fu{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Pl extends Fu{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var Gy=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const og=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Do(async()=>{const{default:n}=await Promise.resolve().then(()=>$n);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},Ky=()=>Gy(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Do(()=>Promise.resolve().then(()=>$n),void 0)).Response:Response}),$l=e=>{if(Array.isArray(e))return e.map(r=>$l(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const o=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));t[o]=$l(n)}),t},Qy=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var zr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const ga=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Jy=(e,t,r)=>zr(void 0,void 0,void 0,function*(){const n=yield Ky();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(o=>{const i=e.status||500,s=(o==null?void 0:o.statusCode)||i+"";t(new Vy(ga(o),i,s))}).catch(o=>{t(new Pl(ga(o),o))}):t(new Pl(ga(e),e))}),Yy=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?o:(Qy(n)?(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),o.body=JSON.stringify(n)):o.body=n,t!=null&&t.duplex&&(o.duplex=t.duplex),Object.assign(Object.assign({},o),r))};function Fo(e,t,r,n,o,i){return zr(this,void 0,void 0,function*(){return new Promise((s,a)=>{e(r,Yy(t,n,o,i)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>s(l)).catch(l=>Jy(l,a,n))})})}function as(e,t,r,n){return zr(this,void 0,void 0,function*(){return Fo(e,"GET",t,r,n)})}function St(e,t,r,n,o){return zr(this,void 0,void 0,function*(){return Fo(e,"POST",t,n,o,r)})}function Al(e,t,r,n,o){return zr(this,void 0,void 0,function*(){return Fo(e,"PUT",t,n,o,r)})}function Xy(e,t,r,n){return zr(this,void 0,void 0,function*(){return Fo(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function ig(e,t,r,n,o){return zr(this,void 0,void 0,function*(){return Fo(e,"DELETE",t,n,o,r)})}var Oe=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const Zy={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},vd={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class ew{constructor(t,r={},n,o){this.url=t,this.headers=r,this.bucketId=n,this.fetch=og(o)}uploadOrUpdate(t,r,n,o){return Oe(this,void 0,void 0,function*(){try{let i;const s=Object.assign(Object.assign({},vd),o);let a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(s.upsert)});const l=s.metadata;typeof Blob<"u"&&n instanceof Blob?(i=new FormData,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",n)):typeof FormData<"u"&&n instanceof FormData?(i=n,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=n,a["cache-control"]=`max-age=${s.cacheControl}`,a["content-type"]=s.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(a=Object.assign(Object.assign({},a),o.headers));const u=this._removeEmptyFolders(r),c=this._getFinalPath(u),d=yield(t=="PUT"?Al:St)(this.fetch,`${this.url}/object/${c}`,i,Object.assign({headers:a},s!=null&&s.duplex?{duplex:s.duplex}:{}));return{data:{path:u,id:d.Id,fullPath:d.Key},error:null}}catch(i){if(ge(i))return{data:null,error:i};throw i}})}upload(t,r,n){return Oe(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,o){return Oe(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(t),s=this._getFinalPath(i),a=new URL(this.url+`/object/upload/sign/${s}`);a.searchParams.set("token",r);try{let l;const u=Object.assign({upsert:vd.upsert},o),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",u.cacheControl)):(l=n,c["cache-control"]=`max-age=${u.cacheControl}`,c["content-type"]=u.contentType);const d=yield Al(this.fetch,a.toString(),l,{headers:c});return{data:{path:i,fullPath:d.Key},error:null}}catch(l){if(ge(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,r){return Oe(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const o=Object.assign({},this.headers);r!=null&&r.upsert&&(o["x-upsert"]="true");const i=yield St(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:o}),s=new URL(this.url+i.url),a=s.searchParams.get("token");if(!a)throw new Fu("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:a},error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}update(t,r,n){return Oe(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return Oe(this,void 0,void 0,function*(){try{return{data:yield St(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}copy(t,r,n){return Oe(this,void 0,void 0,function*(){try{return{data:{path:(yield St(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}createSignedUrl(t,r,n){return Oe(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),i=yield St(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${s}`)},{data:i,error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}createSignedUrls(t,r,n){return Oe(this,void 0,void 0,function*(){try{const o=yield St(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),i=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:o.map(s=>Object.assign(Object.assign({},s),{signedUrl:s.signedURL?encodeURI(`${this.url}${s.signedURL}${i}`):null})),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}download(t,r){return Oe(this,void 0,void 0,function*(){const o=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),s=i?`?${i}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield as(this.fetch,`${this.url}/${o}/${a}${s}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(ge(a))return{data:null,error:a};throw a}})}info(t){return Oe(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield as(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:$l(n),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}exists(t){return Oe(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield Xy(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(ge(n)&&n instanceof Pl){const o=n.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),o=[],i=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";i!==""&&o.push(i);const a=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});l!==""&&o.push(l);let u=o.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${u}`)}}}remove(t){return Oe(this,void 0,void 0,function*(){try{return{data:yield ig(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}list(t,r,n){return Oe(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},Zy),r),{prefix:t||""});return{data:yield St(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},n),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}listV2(t,r){return Oe(this,void 0,void 0,function*(){try{const n=Object.assign({},t);return{data:yield St(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const tw="2.11.0",rw={"X-Client-Info":`storage-js/${tw}`};var Fr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class nw{constructor(t,r={},n,o){const i=new URL(t);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href,this.headers=Object.assign(Object.assign({},rw),r),this.fetch=og(n)}listBuckets(){return Fr(this,void 0,void 0,function*(){try{return{data:yield as(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(ge(t))return{data:null,error:t};throw t}})}getBucket(t){return Fr(this,void 0,void 0,function*(){try{return{data:yield as(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Fr(this,void 0,void 0,function*(){try{return{data:yield St(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Fr(this,void 0,void 0,function*(){try{return{data:yield Al(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Fr(this,void 0,void 0,function*(){try{return{data:yield St(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Fr(this,void 0,void 0,function*(){try{return{data:yield ig(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}}class ow extends nw{constructor(t,r={},n,o){super(t,r,n,o)}from(t){return new ew(this.url,this.headers,t,this.fetch)}}const iw="2.55.0";let Kn="";typeof Deno<"u"?Kn="deno":typeof document<"u"?Kn="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Kn="react-native":Kn="node";const sw={"X-Client-Info":`supabase-js-${Kn}/${iw}`},aw={headers:sw},lw={schema:"public"},uw={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},cw={};var dw=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const fw=e=>{let t;return e?t=e:typeof fetch>"u"?t=Wp:t=fetch,(...r)=>t(...r)},hw=()=>typeof Headers>"u"?Hp:Headers,pw=(e,t,r)=>{const n=fw(r),o=hw();return(i,s)=>dw(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let u=new o(s==null?void 0:s.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),n(i,Object.assign(Object.assign({},s),{headers:u}))})};var gw=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};function mw(e){return e.endsWith("/")?e:e+"/"}function vw(e,t){var r,n;const{db:o,auth:i,realtime:s,global:a}=e,{db:l,auth:u,realtime:c,global:d}=t,p={db:Object.assign(Object.assign({},l),o),auth:Object.assign(Object.assign({},u),i),realtime:Object.assign(Object.assign({},c),s),storage:{},global:Object.assign(Object.assign(Object.assign({},d),a),{headers:Object.assign(Object.assign({},(r=d==null?void 0:d.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>gw(this,void 0,void 0,function*(){return""})};return e.accessToken?p.accessToken=e.accessToken:delete p.accessToken,p}const sg="2.71.1",Hr=30*1e3,Rl=3,ma=Rl*Hr,yw="http://localhost:9999",ww="supabase.auth.token",_w={"X-Client-Info":`gotrue-js/${sg}`},Ol="X-Supabase-Api-Version",ag={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},xw=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Sw=10*60*1e3;class Mu extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function B(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class kw extends Mu{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function Ew(e){return B(e)&&e.name==="AuthApiError"}class lg extends Mu{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class pr extends Mu{constructor(t,r,n,o){super(t,n,o),this.name=r,this.status=n}}class Vt extends pr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function bw(e){return B(e)&&e.name==="AuthSessionMissingError"}class ui extends pr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ci extends pr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class di extends pr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function jw(e){return B(e)&&e.name==="AuthImplicitGrantRedirectError"}class yd extends pr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Il extends pr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function va(e){return B(e)&&e.name==="AuthRetryableFetchError"}class wd extends pr{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class Ll extends pr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const ls="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),_d=` 	
\r=`.split(""),Cw=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<_d.length;t+=1)e[_d[t].charCodeAt(0)]=-2;for(let t=0;t<ls.length;t+=1)e[ls[t].charCodeAt(0)]=t;return e})();function xd(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(ls[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(ls[n]),t.queuedBits-=6}}function ug(e,t,r){const n=Cw[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function Sd(e){const t=[],r=s=>{t.push(String.fromCodePoint(s))},n={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},i=s=>{$w(s,n,r)};for(let s=0;s<e.length;s+=1)ug(e.charCodeAt(s),o,i);return t.join("")}function Tw(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function Pw(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const o=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}Tw(n,t)}}function $w(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function Aw(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};for(let o=0;o<e.length;o+=1)ug(e.charCodeAt(o),r,n);return new Uint8Array(t)}function Rw(e){const t=[];return Pw(e,r=>t.push(r)),new Uint8Array(t)}function Ow(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};return e.forEach(o=>xd(o,r,n)),xd(null,r,n),t.join("")}function Iw(e){return Math.round(Date.now()/1e3)+e}function Lw(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const ct=()=>typeof window<"u"&&typeof document<"u",gr={tested:!1,writable:!1},cg=()=>{if(!ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(gr.tested)return gr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),gr.tested=!0,gr.writable=!0}catch{gr.tested=!0,gr.writable=!1}return gr.writable};function Nw(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,i)=>{t[i]=o})}catch{}return r.searchParams.forEach((n,o)=>{t[o]=n}),t}const dg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Do(async()=>{const{default:n}=await Promise.resolve().then(()=>$n);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},zw=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",Vr=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},mr=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Wt=async(e,t)=>{await e.removeItem(t)};class zs{constructor(){this.promise=new zs.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}zs.promiseConstructor=Promise;function ya(e){const t=e.split(".");if(t.length!==3)throw new Ll("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!xw.test(t[n]))throw new Ll("JWT not in base64url format");return{header:JSON.parse(Sd(t[0])),payload:JSON.parse(Sd(t[1])),signature:Aw(t[2]),raw:{header:t[0],payload:t[1]}}}async function Dw(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Uw(e,t){return new Promise((n,o)=>{(async()=>{for(let i=0;i<1/0;i++)try{const s=await e(i);if(!t(i,null,s)){n(s);return}}catch(s){if(!t(i,s)){o(s);return}}})()})}function Fw(e){return("0"+e.toString(16)).substr(-2)}function Mw(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let o="";for(let i=0;i<56;i++)o+=r.charAt(Math.floor(Math.random()*n));return o}return crypto.getRandomValues(t),Array.from(t,Fw).join("")}async function Bw(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(n);return Array.from(o).map(i=>String.fromCharCode(i)).join("")}async function qw(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await Bw(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Mr(e,t,r=!1){const n=Mw();let o=n;r&&(o+="/PASSWORD_RECOVERY"),await Vr(e,`${t}-code-verifier`,o);const i=await qw(n);return[i,n===i?"plain":"s256"]}const Ww=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Hw(e){const t=e.headers.get(Ol);if(!t||!t.match(Ww))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function Vw(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function Gw(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Kw=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Br(e){if(!Kw.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function wa(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function kd(e){return JSON.parse(JSON.stringify(e))}var Qw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const xr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Jw=[502,503,504];async function Ed(e){var t;if(!zw(e))throw new Il(xr(e),0);if(Jw.includes(e.status))throw new Il(xr(e),e.status);let r;try{r=await e.json()}catch(i){throw new lg(xr(i),i)}let n;const o=Hw(e);if(o&&o.getTime()>=ag["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new wd(xr(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Vt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,s)=>i&&typeof s=="string",!0))throw new wd(xr(r),e.status,r.weak_password.reasons);throw new kw(xr(r),e.status||500,n)}const Yw=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(n),Object.assign(Object.assign({},o),r))};async function W(e,t,r,n){var o;const i=Object.assign({},n==null?void 0:n.headers);i[Ol]||(i[Ol]=ag["2024-01-01"].name),n!=null&&n.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const s=(o=n==null?void 0:n.query)!==null&&o!==void 0?o:{};n!=null&&n.redirectTo&&(s.redirect_to=n.redirectTo);const a=Object.keys(s).length?"?"+new URLSearchParams(s).toString():"",l=await Xw(e,t,r+a,{headers:i,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function Xw(e,t,r,n,o,i){const s=Yw(t,n,o,i);let a;try{a=await e(r,Object.assign({},s))}catch(l){throw console.error(l),new Il(xr(l),0)}if(a.ok||await Ed(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await Ed(l)}}function $t(e){var t;let r=null;r1(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=Iw(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function bd(e){const t=$t(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function Yt(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function Zw(e){return{data:e,error:null}}function e1(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i}=e,s=Qw(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i},l=Object.assign({},s);return{data:{properties:a,user:l},error:null}}function t1(e){return e}function r1(e){return e.access_token&&e.refresh_token&&e.expires_in}const _a=["global","local","others"];var n1=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};class o1{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=dg(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=_a[0]){if(_a.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${_a.join(", ")}`);try{return await W(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(B(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await W(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Yt})}catch(n){if(B(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=n1(t,["options"]),o=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(o.new_email=n==null?void 0:n.newEmail,delete o.newEmail),await W(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:e1,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(B(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await W(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Yt})}catch(r){if(B(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,o,i,s,a,l;try{const u={nextPage:null,lastPage:0,total:0},c=await W(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&i!==void 0?i:""},xform:t1});if(c.error)throw c.error;const d=await c.json(),p=(s=c.headers.get("x-total-count"))!==null&&s!==void 0?s:0,v=(l=(a=c.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return v.length>0&&(v.forEach(w=>{const y=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),j=JSON.parse(w.split(";")[1].split("=")[1]);u[`${j}Page`]=y}),u.total=parseInt(p)),{data:Object.assign(Object.assign({},d),u),error:null}}catch(u){if(B(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){Br(t);try{return await W(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Yt})}catch(r){if(B(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){Br(t);try{return await W(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:Yt})}catch(n){if(B(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){Br(t);try{return await W(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:Yt})}catch(n){if(B(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){Br(t.userId);try{const{data:r,error:n}=await W(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:n}}catch(r){if(B(r))return{data:null,error:r};throw r}}async _deleteFactor(t){Br(t.userId),Br(t.id);try{return{data:await W(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(B(r))return{data:null,error:r};throw r}}}function jd(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function i1(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const qr={debug:!!(globalThis&&cg()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class fg extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class s1 extends fg{}async function a1(e,t,r){qr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),qr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async o=>{if(o){qr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,o.name);try{return await r()}finally{qr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,o.name)}}else{if(t===0)throw qr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new s1(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(qr.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}i1();const l1={url:yw,storageKey:ww,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:_w,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Cd(e,t,r){return await r()}const Wr={};class Ao{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ao.nextInstanceID,Ao.nextInstanceID+=1,this.instanceID>0&&ct()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},l1),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new o1({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=dg(o.fetch),this.lock=o.lock||Cd,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:ct()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=a1:this.lock=Cd,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:cg()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=jd(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=jd(this.memoryStorage)),ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=Wr[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){Wr[this.storageKey]=Object.assign(Object.assign({},Wr[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=Wr[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){Wr[this.storageKey]=Object.assign(Object.assign({},Wr[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${sg}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=Nw(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),ct()&&this.detectSessionInUrl&&n!=="none"){const{data:o,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),jw(i)){const l=(t=i.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:s,redirectType:a}=o;return this._debug("#_initialize()","detected session in URL",s,"redirect type",a),await this._saveSession(s),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return B(r)?{error:r}:{error:new lg("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,o;try{const i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:$t}),{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,u=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(B(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(t){var r,n,o;try{let i;if("email"in t){const{email:c,password:d,options:p}=t;let v=null,w=null;this.flowType==="pkce"&&([v,w]=await Mr(this.storage,this.storageKey)),i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:c,password:d,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:v,code_challenge_method:w},xform:$t})}else if("phone"in t){const{phone:c,password:d,options:p}=t;i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:d,data:(n=p==null?void 0:p.data)!==null&&n!==void 0?n:{},channel:(o=p==null?void 0:p.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:$t})}else throw new ci("You must provide either an email or phone number and a password");const{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,u=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(B(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(t){try{let r;if("email"in t){const{email:i,password:s,options:a}=t;r=await W(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:bd})}else if("phone"in t){const{phone:i,password:s,options:a}=t;r=await W(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:bd})}else throw new ci("You must provide either an email or phone number and a password");const{data:n,error:o}=r;return o?{data:{user:null,session:null},error:o}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new ui}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:o})}catch(r){if(B(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,o,i;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(i=t.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,o,i,s,a,l,u,c,d,p,v;let w,y;if("message"in t)w=t.message,y=t.signature;else{const{chain:j,wallet:h,statement:g,options:m}=t;let x;if(ct())if(typeof h=="object")x=h;else{const E=window;if("solana"in E&&typeof E.solana=="object"&&("signIn"in E.solana&&typeof E.solana.signIn=="function"||"signMessage"in E.solana&&typeof E.solana.signMessage=="function"))x=E.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof h!="object"||!(m!=null&&m.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");x=h}const k=new URL((r=m==null?void 0:m.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in x&&x.signIn){const E=await x.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},m==null?void 0:m.signInWithSolana),{version:"1",domain:k.host,uri:k.href}),g?{statement:g}:null));let S;if(Array.isArray(E)&&E[0]&&typeof E[0]=="object")S=E[0];else if(E&&typeof E=="object"&&"signedMessage"in E&&"signature"in E)S=E;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in S&&"signature"in S&&(typeof S.signedMessage=="string"||S.signedMessage instanceof Uint8Array)&&S.signature instanceof Uint8Array)w=typeof S.signedMessage=="string"?S.signedMessage:new TextDecoder().decode(S.signedMessage),y=S.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in x)||typeof x.signMessage!="function"||!("publicKey"in x)||typeof x!="object"||!x.publicKey||!("toBase58"in x.publicKey)||typeof x.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");w=[`${k.host} wants you to sign in with your Solana account:`,x.publicKey.toBase58(),...g?["",g,""]:[""],"Version: 1",`URI: ${k.href}`,`Issued At: ${(o=(n=m==null?void 0:m.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((i=m==null?void 0:m.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${m.signInWithSolana.notBefore}`]:[],...!((s=m==null?void 0:m.signInWithSolana)===null||s===void 0)&&s.expirationTime?[`Expiration Time: ${m.signInWithSolana.expirationTime}`]:[],...!((a=m==null?void 0:m.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${m.signInWithSolana.chainId}`]:[],...!((l=m==null?void 0:m.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${m.signInWithSolana.nonce}`]:[],...!((u=m==null?void 0:m.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${m.signInWithSolana.requestId}`]:[],...!((d=(c=m==null?void 0:m.signInWithSolana)===null||c===void 0?void 0:c.resources)===null||d===void 0)&&d.length?["Resources",...m.signInWithSolana.resources.map(S=>`- ${S}`)]:[]].join(`
`);const E=await x.signMessage(new TextEncoder().encode(w),"utf8");if(!E||!(E instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");y=E}}try{const{data:j,error:h}=await W(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:w,signature:Ow(y)},!((p=t.options)===null||p===void 0)&&p.captchaToken?{gotrue_meta_security:{captcha_token:(v=t.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:$t});if(h)throw h;return!j||!j.session||!j.user?{data:{user:null,session:null},error:new ui}:(j.session&&(await this._saveSession(j.session),await this._notifyAllSubscribers("SIGNED_IN",j.session)),{data:Object.assign({},j),error:h})}catch(j){if(B(j))return{data:{user:null,session:null},error:j};throw j}}async _exchangeCodeForSession(t){const r=await mr(this.storage,`${this.storageKey}-code-verifier`),[n,o]=(r??"").split("/");try{const{data:i,error:s}=await W(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:$t});if(await Wt(this.storage,`${this.storageKey}-code-verifier`),s)throw s;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new ui}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:o??null}),error:s})}catch(i){if(B(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(t){try{const{options:r,provider:n,token:o,access_token:i,nonce:s}=t,a=await W(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:o,access_token:i,nonce:s,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:$t}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new ui}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(r){if(B(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,o,i,s;try{if("email"in t){const{email:a,options:l}=t;let u=null,c=null;this.flowType==="pkce"&&([u,c]=await Mr(this.storage,this.storageKey));const{error:d}=await W(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in t){const{phone:a,options:l}=t,{data:u,error:c}=await W(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(s=l==null?void 0:l.channel)!==null&&s!==void 0?s:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:c}}throw new ci("You must provide either an email or phone number.")}catch(a){if(B(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var r,n;try{let o,i;"options"in t&&(o=(r=t.options)===null||r===void 0?void 0:r.redirectTo,i=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:s,error:a}=await W(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:i}}),redirectTo:o,xform:$t});if(a)throw a;if(!s)throw new Error("An error occurred on token verification.");const l=s.session,u=s.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(o){if(B(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var r,n,o;try{let i=null,s=null;return this.flowType==="pkce"&&([i,s]=await Mr(this.storage,this.storageKey)),await W(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:s}),headers:this.headers,xform:Zw})}catch(i){if(B(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Vt;const{error:o}=await W(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(B(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:o,options:i}=t,{error:s}=await W(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:s}}else if("phone"in t){const{phone:n,type:o,options:i}=t,{data:s,error:a}=await W(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:s==null?void 0:s.message_id},error:a}}throw new ci("You must provide either an email or phone number and a type")}catch(r){if(B(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await mr(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<ma:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const s=await mr(this.userStorage,this.storageKey+"-user");s!=null&&s.user?t.user=s.user:t.user=wa()}if(this.storage.isServer&&t.user){let s=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,u,c)=>(!s&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),s=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,c))})}return{data:{session:t},error:null}}const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{session:null},error:i}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await W(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Yt}):await this._useSession(async r=>{var n,o,i;const{data:s,error:a}=r;if(a)throw a;return!(!((n=s.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Vt}:await W(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(o=s.session)===null||o===void 0?void 0:o.access_token)!==null&&i!==void 0?i:void 0,xform:Yt})})}catch(r){if(B(r))return bw(r)&&(await this._removeSession(),await Wt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:o,error:i}=n;if(i)throw i;if(!o.session)throw new Vt;const s=o.session;let a=null,l=null;this.flowType==="pkce"&&t.email!=null&&([a,l]=await Mr(this.storage,this.storageKey));const{data:u,error:c}=await W(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:s.access_token,xform:Yt});if(c)throw c;return s.user=u.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),{data:{user:s.user},error:null}})}catch(n){if(B(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Vt;const r=Date.now()/1e3;let n=r,o=!0,i=null;const{payload:s}=ya(t.access_token);if(s.exp&&(n=s.exp,o=n<=r),o){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};i=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;i={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(r){if(B(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:s,error:a}=r;if(a)throw a;t=(n=s.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Vt;const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{user:null,session:null},error:i}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(B(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!ct())throw new di("No browser detected.");if(t.error||t.error_description||t.error_code)throw new di(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new yd("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new di("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new yd("No code detected.");const{data:g,error:m}=await this._exchangeCodeForSession(t.code);if(m)throw m;const x=new URL(window.location.href);return x.searchParams.delete("code"),window.history.replaceState(window.history.state,"",x.toString()),{data:{session:g.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:o,access_token:i,refresh_token:s,expires_in:a,expires_at:l,token_type:u}=t;if(!i||!a||!s||!u)throw new di("No session defined in URL");const c=Math.round(Date.now()/1e3),d=parseInt(a);let p=c+d;l&&(p=parseInt(l));const v=p-c;v*1e3<=Hr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${d}s`);const w=p-d;c-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,p,c):c-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,p,c);const{data:y,error:j}=await this._getUser(i);if(j)throw j;const h={provider_token:n,provider_refresh_token:o,access_token:i,expires_in:d,expires_at:p,refresh_token:s,token_type:u,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:h,redirectType:t.type},error:null}}catch(n){if(B(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await mr(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{error:i};const s=(n=o.session)===null||n===void 0?void 0:n.access_token;if(s){const{error:a}=await this.admin.signOut(s,t);if(a&&!(Ew(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Wt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=Lw(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,o;try{const{data:{session:i},error:s}=r;if(s)throw s;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",t,"session",i)}catch(i){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",i),console.error(i)}})}async resetPasswordForEmail(t,r={}){let n=null,o=null;this.flowType==="pkce"&&([n,o]=await Mr(this.storage,this.storageKey,!0));try{return await W(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(B(i))return{data:null,error:i};throw i}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(B(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:o}=await this._useSession(async i=>{var s,a,l,u,c;const{data:d,error:p}=i;if(p)throw p;const v=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(s=t.options)===null||s===void 0?void 0:s.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await W(this.fetch,"GET",v,{headers:this.headers,jwt:(c=(u=d.session)===null||u===void 0?void 0:u.access_token)!==null&&c!==void 0?c:void 0})});if(o)throw o;return ct()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(B(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)throw s;return await W(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(B(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await Uw(async o=>(o>0&&await Dw(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await W(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:$t})),(o,i)=>{const s=200*Math.pow(2,o);return i&&va(i)&&Date.now()+s-n<Hr})}catch(n){if(this._debug(r,"error",n),B(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),ct()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const o=await mr(this.storage,this.storageKey);if(o&&this.userStorage){let s=await mr(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!s&&(s={user:o.user},await Vr(this.userStorage,this.storageKey+"-user",s)),o.user=(t=s==null?void 0:s.user)!==null&&t!==void 0?t:wa()}else if(o&&!o.user&&!o.user){const s=await mr(this.storage,this.storageKey+"-user");s&&(s!=null&&s.user)?(o.user=s.user,await Wt(this.storage,this.storageKey+"-user"),await Vr(this.storage,this.storageKey,o)):o.user=wa()}if(this._debug(n,"session from storage",o),!this._isValidSession(o)){this._debug(n,"session is not valid"),o!==null&&await this._removeSession();return}const i=((r=o.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<ma;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${ma}s`),i){if(this.autoRefreshToken&&o.refresh_token){const{error:s}=await this._callRefreshToken(o.refresh_token);s&&(console.error(s),va(s)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",s),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:s,error:a}=await this._getUser(o.access_token);!a&&(s!=null&&s.user)?(o.user=s.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(s){console.error("Error getting user data:",s),this._debug(n,"error getting user data, skipping SIGNED_IN notification",s)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(n,"error",o),console.error(o);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Vt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new zs;const{data:i,error:s}=await this._refreshAccessToken(t);if(s)throw s;if(!i.session)throw new Vt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const a={session:i.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(i){if(this._debug(o,"error",i),B(i)){const s={session:null,error:i};return va(i)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(s),s}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,r,n=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const i=[],s=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,r)}catch(l){i.push(l)}});if(await Promise.all(s),i.length>0){for(let a=0;a<i.length;a+=1)console.error(i[a]);throw i[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await Vr(this.userStorage,this.storageKey+"-user",{user:r.user});const o=Object.assign({},r);delete o.user;const i=kd(o);await Vr(this.storage,this.storageKey,i)}else{const o=kd(r);await Vr(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await Wt(this.storage,this.storageKey),await Wt(this.storage,this.storageKey+"-code-verifier"),await Wt(this.storage,this.storageKey+"-user"),this.userStorage&&await Wt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&ct()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Hr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((n.expires_at*1e3-t)/Hr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Hr}ms, refresh threshold is ${Rl} ticks`),o<=Rl&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof fg)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ct()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const o=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&o.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&o.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,s]=await Mr(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(s)}`});o.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);o.push(i.toString())}return n!=null&&n.skipBrowserRedirect&&o.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await W(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(B(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)return{data:null,error:s};const a=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:u}=await W(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return u?{data:null,error:u}:(t.factorType==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(r){if(B(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{data:null,error:i};const{data:s,error:a}=await W(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:a})})}catch(r){if(B(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await W(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(B(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],o=n.filter(s=>s.factor_type==="totp"&&s.status==="verified"),i=n.filter(s=>s.factor_type==="phone"&&s.status==="verified");return{data:{all:n,totp:o,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:o},error:i}=t;if(i)return{data:null,error:i};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=ya(o.access_token);let a=null;s.aal&&(a=s.aal);let l=a;((n=(r=o.user.factors)===null||r===void 0?void 0:r.filter(d=>d.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const c=s.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(a=>a.kid===t);if(n)return n;const o=Date.now();if(n=this.jwks.keys.find(a=>a.kid===t),n&&this.jwks_cached_at+Sw>o)return n;const{data:i,error:s}=await W(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(s)throw s;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=o,n=i.keys.find(a=>a.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:v,error:w}=await this.getSession();if(w||!v.session)return{data:null,error:w};n=v.session.access_token}const{header:o,payload:i,signature:s,raw:{header:a,payload:l}}=ya(n);r!=null&&r.allowExpired||Vw(i.exp);const u=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!u){const{error:v}=await this.getUser(n);if(v)throw v;return{data:{claims:i,header:o,signature:s},error:null}}const c=Gw(o.alg),d=await crypto.subtle.importKey("jwk",u,c,!0,["verify"]);if(!await crypto.subtle.verify(c,d,s,Rw(`${a}.${l}`)))throw new Ll("Invalid JWT signature");return{data:{claims:i,header:o,signature:s},error:null}}catch(n){if(B(n))return{data:null,error:n};throw n}}}Ao.nextInstanceID=0;const u1=Ao;class c1 extends u1{constructor(t){super(t)}}var d1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(d){s(d)}}function l(c){try{u(n.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class f1{constructor(t,r,n){var o,i,s;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const a=mw(t),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const u=`sb-${l.hostname.split(".")[0]}-auth-token`,c={db:lw,realtime:cw,auth:Object.assign(Object.assign({},uw),{storageKey:u}),global:aw},d=vw(n??{},c);this.storageKey=(o=d.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(i=d.global.headers)!==null&&i!==void 0?i:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(p,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((s=d.auth)!==null&&s!==void 0?s:{},this.headers,d.global.fetch),this.fetch=pw(r,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},d.realtime)),this.rest=new Ty(new URL("rest/v1",l).href,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),this.storage=new ow(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),d.accessToken||this._listenForAuthEvents()}get functions(){return new oy(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return d1(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,storageKey:i,flowType:s,lock:a,debug:l},u,c){const d={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new c1({url:this.authUrl.href,headers:Object.assign(Object.assign({},d),u),storageKey:i,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,flowType:s,lock:a,debug:l,fetch:c,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new Hy(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const h1=(e,t,r)=>new f1(e,t,r);function p1(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}p1()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const M=h1("https://mdmknxkztpimoedhdjci.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A"),hg=C.createContext(),g1=({children:e})=>{const[t,r]=C.useState(!1),[n,o]=C.useState(null),[i,s]=C.useState(null),a=async(v,w)=>{try{r(!0);const{data:y,error:j}=await M.from("usuarios").select("idUsuario, nombre, usuario, correo, idRol").eq("usuario",v).eq("contraseña",w).single();if(j)throw console.error("Error de Supabase:",j),j.code==="PGRST116"?new Error("Usuario o contraseña incorrectos"):new Error(`Error de base de datos: ${j.message}`);if(!y)throw new Error("Usuario o contraseña incorrectos");const h={id:y.idUsuario,nombre:y.nombre,usuario:y.usuario,correo:y.correo,idRol:y.idRol,rol:"Administrador",type:"admin"};return o(h),s(null),localStorage.setItem("user",JSON.stringify(h)),localStorage.removeItem("employeeData"),{success:!0,user:h}}catch(y){return console.error("Error en login:",y),{success:!1,error:y.message}}finally{r(!1)}},l=C.useCallback(v=>{const w={id:v.idEmpleado,idEmpleado:v.idEmpleado,codigoEmpleado:v.codigoEmpleado,empleado:v.empleado,idPlanta:v.idPlanta,planta:v.planta,idEsquemaPago:v.idEsquemaPago||null,type:"employee"};return s(w),o(null),localStorage.setItem("employeeData",JSON.stringify(w)),localStorage.removeItem("user"),{success:!0,employee:w}},[]),u=C.useCallback(()=>{o(null),s(null),localStorage.removeItem("user"),localStorage.removeItem("employeeData")},[]),c=C.useCallback(()=>{try{const v=localStorage.getItem("user"),w=localStorage.getItem("employeeData");if(v){const y=JSON.parse(v);return o(y),s(null),y}if(w){const y=JSON.parse(w);return s(y),o(null),y}}catch(v){console.error("Error al obtener usuario guardado:",v),localStorage.removeItem("user"),localStorage.removeItem("employeeData")}return null},[]),d=C.useCallback(v=>{if(i){const w={...i,...v};return s(w),localStorage.setItem("employeeData",JSON.stringify(w)),w}return null},[i]);C.useEffect(()=>{c()},[c]);const p={user:n,employeeData:i,loading:t,adminLogin:a,employeeLogin:l,logout:u,getCurrentUser:c,updateEmployeeData:d};return f.jsx(hg.Provider,{value:p,children:e})},Mo=()=>{const e=C.useContext(hg);if(!e)throw new Error("useAppAuth debe usarse dentro de AuthProvider");return e},pg=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,i]=C.useState(null);return C.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await M.from("plantas").select("idPlanta, planta").order("planta");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching plantas:",a)}finally{n(!1)}})()},[]),{plantas:e,loading:r,error:o}},gg=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,i]=C.useState(null);return C.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await M.from("esquemasPago").select("idEsquemaPago, esquemaPago").order("esquemaPago");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching esquemas de pago:",a)}finally{n(!1)}})()},[]),{esquemas:e,loading:r,error:o}},mg=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,i]=C.useState(null);return C.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await M.from("tiposSolicitud").select("idTipoSolicitud, tipoSolicitud").order("tipoSolicitud");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching tipos de solicitud:",a)}finally{n(!1)}})()},[]),{tipos:e,loading:r,error:o}},vg=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,i]=C.useState(null);return C.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await M.from("prioridades").select("idPrioridad, prioridad").order("idPrioridad");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching prioridades:",a)}finally{n(!1)}})()},[]),{prioridades:e,loading:r,error:o}},m1=()=>{const[e,t]=C.useState(!1),[r,n]=C.useState(null);return{createTicket:async i=>{try{t(!0),n(null);const{data:s}=await M.from("empleados").select("idPlanta").eq("idEmpleado",i.idEmpleado).single();if(!s)throw new Error("No se encontró información del empleado");const{data:a}=await M.from("asignaciones").select("idUsuario").eq("idPlanta",s.idPlanta).eq("idTipoSolicitud",i.idTipoSolicitud).single();if(!a)throw new Error("No se encontró usuario asignado para esta combinación de planta y tipo de solicitud");const{data:l,error:u}=await M.from("tickets").insert([{idEmpleado:i.idEmpleado,idTipoSolicitud:i.idTipoSolicitud,descripcion:i.descripcion,idPrioridad:i.idPrioridad}]).select().single();if(u)throw u;const{error:c}=await M.from("seguimientos").insert([{idTicket:l.idTicket,idUsuario:a.idUsuario,idEstado:1}]);if(c)throw c;return{success:!0,ticket:l}}catch(s){return n(s.message),console.error("Error creating ticket:",s),{success:!1,error:s.message}}finally{t(!1)}},loading:e,error:r}},yg=()=>{const[e,t]=C.useState(!1),[r,n]=C.useState(null),o=C.useCallback(async l=>{t(!0),n(null);try{const{data:u,error:c}=await M.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("codigoEmpleado",l).single();if(c){if(c.code==="PGRST116")return{success:!0,empleado:null};throw c}return{success:!0,empleado:u}}catch(u){return console.error("Error al buscar empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),i=C.useCallback(async(l,u,c,d)=>{t(!0),n(null);try{const{data:p,error:v}=await M.from("empleados").insert([{codigoEmpleado:l,nombre:u,idPlanta:c,idEsquemaPago:d}]).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(v)throw v;return{success:!0,empleado:p}}catch(p){return console.error("Error al crear empleado:",p),n(p.message),{success:!1,error:p.message}}finally{t(!1)}},[]),s=C.useCallback(async l=>{t(!0),n(null);try{const{data:u,error:c}=await M.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("idEmpleado",l).single();if(c)throw c;return{success:!0,empleado:u}}catch(u){return console.error("Error al obtener empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),a=C.useCallback(async(l,u)=>{t(!0),n(null);try{const{data:c,error:d}=await M.from("empleados").update({idEsquemaPago:u}).eq("idEmpleado",l).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(d)throw d;return{success:!0,empleado:c}}catch(c){return console.error("Error al actualizar esquema de pago:",c),n(c.message),{success:!1,error:c.message}}finally{t(!1)}},[]);return{loading:e,error:r,buscarEmpleadoPorCodigo:o,crearEmpleado:i,obtenerEmpleadoPorId:s,actualizarEsquemaPago:a}},v1=()=>{const[e,t]=C.useState(""),[r,n]=C.useState(""),[o,i]=C.useState(""),[s,a]=C.useState(""),[l,u]=C.useState(""),[c,d]=C.useState(!1),[p,v]=C.useState(1),{employeeLogin:w}=Mo(),{plantas:y,loading:j}=pg(),{esquemas:h,loading:g}=gg(),{buscarEmpleadoPorCodigo:m,crearEmpleado:x,loading:k}=yg(),E=async R=>{var O;if(R.preventDefault(),u(""),!e.trim()){u("Por favor, ingrese su código de empleado");return}if(!/^\d+$/.test(e)){u("El código de empleado debe contener solo números");return}d(!0);try{const z=await m(e.trim());if(!z.success){u("Error al buscar empleado: "+z.error),d(!1);return}if(z.empleado){const L={idEmpleado:z.empleado.idEmpleado,codigoEmpleado:z.empleado.codigoEmpleado,empleado:z.empleado.nombre,idPlanta:z.empleado.idPlanta,planta:(O=z.empleado.plantas)==null?void 0:O.planta,idEsquemaPago:z.empleado.idEsquemaPago||null};w(L)}else v(2)}catch(z){u("Error al procesar la búsqueda"),console.error("Error:",z)}finally{d(!1)}},S=async R=>{var O;if(R.preventDefault(),u(""),!r.trim()||!o||!s){u("Por favor, complete todos los campos");return}d(!0);try{const z=await x(e.trim(),r.trim(),o,s);if(!z.success){u("Error al registrar empleado: "+z.error),d(!1);return}w({idEmpleado:z.empleado.idEmpleado,codigoEmpleado:z.empleado.codigoEmpleado,empleado:z.empleado.nombre,idPlanta:z.empleado.idPlanta,planta:(O=z.empleado.plantas)==null?void 0:O.planta,idEsquemaPago:z.empleado.idEsquemaPago||null})}catch(z){u("Error al procesar el registro"),console.error("Error:",z)}finally{d(!1)}},P=()=>{v(1),n(""),i(""),a(""),u("")};return p===1?f.jsxs(Td,{onSubmit:E,children:[f.jsx($d,{children:"Acceso Empleado"}),f.jsx(Pd,{children:"Ingresa tu código de empleado para acceder al sistema"}),l&&f.jsx(Id,{children:l}),f.jsxs(fi,{children:[f.jsx(hi,{children:"Número de Empleado"}),f.jsx(y1,{type:"text",inputMode:"numeric",pattern:"[0-9]*",placeholder:"Ej: 12345",value:e,onChange:R=>{const O=R.target.value.replace(/\D/g,"");t(O)},disabled:c||k,required:!0,autoComplete:"employee-id"})]}),f.jsx(Od,{type:"submit",disabled:c||k,children:c||k?"Verificando...":"Acceder"})]}):f.jsxs(Td,{onSubmit:S,children:[f.jsx($d,{children:"Registro de Empleado"}),f.jsx(Pd,{children:"No encontramos tu código de empleado. Por favor, completa la siguiente información:"}),l&&f.jsx(Id,{children:l}),f.jsxs(_1,{children:["Código de empleado: ",f.jsx("strong",{children:e})]}),f.jsxs(fi,{children:[f.jsx(hi,{children:"Nombre Completo"}),f.jsx(w1,{type:"text",placeholder:"Ej: Juan Pérez García",value:r,onChange:R=>n(R.target.value),disabled:c||k||g,required:!0,autoComplete:"name"})]}),f.jsxs(fi,{children:[f.jsx(hi,{children:"Planta"}),j?f.jsx(Rd,{disabled:!0,children:"Cargando plantas..."}):f.jsxs(Ad,{value:o,onChange:R=>i(R.target.value),disabled:c||k||g,required:!0,children:[f.jsx("option",{value:"",children:"Seleccione su planta..."}),y.map(R=>f.jsx("option",{value:R.idPlanta,children:R.planta},R.idPlanta))]})]}),f.jsxs(fi,{children:[f.jsx(hi,{children:"Esquema de Pago"}),g?f.jsx(Rd,{disabled:!0,children:"Cargando esquemas..."}):f.jsxs(Ad,{value:s,onChange:R=>a(R.target.value),disabled:c||k||g,required:!0,children:[f.jsx("option",{value:"",children:"Seleccione su esquema de pago..."}),h.map(R=>f.jsx("option",{value:R.idEsquemaPago,children:R.esquemaPago},R.idEsquemaPago))]})]}),f.jsxs(x1,{children:[f.jsx(S1,{type:"button",onClick:P,disabled:c||k||g,children:"Volver"}),f.jsx(Od,{type:"submit",disabled:c||k||g,style:{flex:1},children:c||k||g?"Registrando...":"Registrar y Acceder"})]})]})},Td=_.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,Pd=_.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,$d=_.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,fi=_.div`
  margin-bottom: 1.5rem;
`,hi=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,wg=_.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    background-color: var(--color-light);
    cursor: not-allowed;
  }
`,y1=_(wg)`
  /* Ocultar botones de incremento/decremento en navegadores webkit */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Ocultar botones en Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`,w1=_(wg)``,Ad=_.select`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-white);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`,Rd=_.div`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: var(--color-gray);
`,Od=_.button`
  width: 100%;
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: inherit;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`,Id=_.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,_1=_.div`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.9rem;
`,x1=_.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,S1=_.button`
  flex: 1;
  background-color: #6c757d;
  color: var(--color-white);
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: inherit;

  &:hover:not(:disabled) {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`,k1=()=>{const[e,t]=C.useState(""),[r,n]=C.useState(""),[o,i]=C.useState(""),{adminLogin:s,loading:a}=Mo(),l=async u=>{if(u.preventDefault(),i(""),!e.trim()||!r.trim()){i("Por favor, complete todos los campos");return}const c=await s(e.trim(),r);c.success||i(c.error)};return f.jsxs(E1,{onSubmit:l,children:[f.jsx(j1,{children:"Acceso Administrador"}),f.jsx(b1,{children:"Ingresa tus credenciales de administrador para acceder al panel de control"}),o&&f.jsx(T1,{children:o}),f.jsxs(Ld,{children:[f.jsx(Nd,{children:"Usuario"}),f.jsx(zd,{type:"text",placeholder:"Usuario",value:e,onChange:u=>t(u.target.value),disabled:a,autoComplete:"username"})]}),f.jsxs(Ld,{children:[f.jsx(Nd,{children:"Contraseña"}),f.jsx(zd,{type:"password",placeholder:"Contraseña",value:r,onChange:u=>n(u.target.value),disabled:a,autoComplete:"current-password"})]}),f.jsx(C1,{type:"submit",disabled:a,children:a?"Iniciando sesión...":"Iniciar Sesión"})]})},E1=_.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,b1=_.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,j1=_.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,Ld=_.div`
  margin-bottom: 1.5rem;
`,Nd=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,zd=_.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    background-color: var(--color-light);
    cursor: not-allowed;
  }
`,C1=_.button`
  width: 100%;
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: inherit;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`,T1=_.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,P1="/ventanilla/assets/logo-DOgx6EZv.png",$1=()=>{const[e,t]=C.useState("employee");return f.jsxs(A1,{children:[f.jsxs(R1,{children:[f.jsx("img",{src:P1,alt:"Logo de la empresa",style:{height:"80px"}}),f.jsx(O1,{children:"Ventanilla de atención al empleado"})]}),f.jsx(I1,{children:f.jsxs(L1,{children:[f.jsxs(N1,{children:[f.jsxs(Dd,{$active:e==="employee",onClick:()=>t("employee"),children:[f.jsx(Ud,{children:"👤"}),"Empleado"]}),f.jsxs(Dd,{$active:e==="admin",onClick:()=>t("admin"),children:[f.jsx(Ud,{children:"🔑"}),"Administrador"]})]}),f.jsxs(z1,{children:[e==="employee"&&f.jsx(v1,{}),e==="admin"&&f.jsx(k1,{})]})]})})]})},A1=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
`,R1=_.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    /* Removido el filtro que estaba causando problemas */
  }
`,O1=_.h1`
  color: var(--color-primary);
  font-size: 28px;
  font-weight: 600;
  margin: 16px 0 0 0;
`,I1=_.div`
  width: 100%;
  max-width: 500px;
`,L1=_.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,N1=_.div`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,Dd=_.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 20px;
  border: none;
  background: ${e=>e.$active?"white":"transparent"};
  color: ${e=>e.$active?"var(--primary-color)":"#6c757d"};
  font-size: 14px;
  font-weight: ${e=>e.$active?"600":"500"};
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: ${e=>e.$active?"2px solid var(--primary-color)":"2px solid transparent"};

  &:hover {
    background: ${e=>e.$active?"white":"#f8f9fa"};
    color: ${e=>e.$active?"var(--primary-color)":"var(--text-color)"};
  }
`,Ud=_.span`
  font-size: 16px;
`,z1=_.div`
  padding: 0;
`,D1=e=>{const[t,r]=C.useState([]),[n,o]=C.useState(!0),[i,s]=C.useState(null),a=C.useRef(!1),l=C.useRef(null),u=C.useCallback(async(c={})=>{if(e)try{o(!0);const d=async h=>{var g;try{if((g=h.seguimientos)==null?void 0:g.find(k=>k.idEstado===1))return{success:!0,mensaje:"Ya tiene seguimiento inicial"};const{error:x}=await M.from("seguimientos").insert({idTicket:h.idTicket,idUsuario:null,idEstado:1});if(x)throw x;return{success:!0,mensaje:"Seguimiento inicial creado"}}catch(m){return console.error("Error creando seguimiento inicial:",m),{success:!1,error:m.message}}};let p=M.from("tickets").select(`
          *,
          empleados (
            idEmpleado,
            codigoEmpleado,
            nombre,
            idPlanta,
            idEsquemaPago,
            plantas (
              idPlanta,
              planta
            )
          ),
          tiposSolicitud:idTipoSolicitud (tipoSolicitud),
          prioridades:idPrioridad (prioridad),
          atenciones (
            idAtencion,
            respuesta,
            calificacion,
            comentario
          ),
          seguimientos (
            idSeguimiento,
            fecha,
            idEstado,
            estados (
              idEstado,
              estado
            ),
            usuarios (
              idUsuario,
              nombre
            )
          ),
          delegaciones (
            idDelegacion,
            bActivo,
            usuarios (
              idUsuario,
              nombre
            )
          )
        `).order("idTicket",{ascending:!1});if((e==null?void 0:e.idRol)===2){const{data:h}=await M.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);if(!(h&&h.length>0)){r([]),o(!1);return}}if(c.planta){const{data:h}=await M.from("empleados").select("idEmpleado").eq("idPlanta",c.planta);if(h&&h.length>0){const g=h.map(m=>m.idEmpleado);p=p.in("idEmpleado",g)}else{r([]),o(!1);return}}if(c.tipoSolicitud&&(p=p.eq("idTipoSolicitud",c.tipoSolicitud)),c.prioridad&&(p=p.eq("idPrioridad",c.prioridad)),c.empleado){const{data:h}=await M.from("empleados").select("idEmpleado").or(`codigoEmpleado.ilike.%${c.empleado}%,nombre.ilike.%${c.empleado}%`);if(h&&h.length>0){const g=h.map(m=>m.idEmpleado);p=p.in("idEmpleado",g)}else{r([]),o(!1);return}}const{data:v,error:w}=await p;if(w)throw w;let y=v||[];const j=y.filter(h=>{var g;return!((g=h.seguimientos)!=null&&g.find(m=>m.idEstado===1))});if(j.length>0){const h=j.map(g=>d(g));try{await Promise.all(h);const{data:g}=await p;g&&(y=g)}catch(g){console.error("Error en migración de seguimientos:",g)}}if((e==null?void 0:e.idRol)!==1)if(e.idRol===3){const{data:h}=await M.from("delegaciones").select("idTicket").eq("idUsuario",e.id).eq("bActivo",!0);if(h&&h.length>0){const g=h.map(m=>m.idTicket);y=y.filter(m=>g.includes(m.idTicket))}else y=[]}else{const{data:h}=await M.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);h&&h.length>0?y=y.filter(g=>h.some(x=>{var k;return((k=g.empleados)==null?void 0:k.idPlanta)===x.idPlanta&&g.idTipoSolicitud===x.idTipoSolicitud})):y=[]}c.sortBy==="prioridad"?y.sort((h,g)=>h.idPrioridad-g.idPrioridad):y.sort((h,g)=>{var k,E,S,P;const m=(E=(k=h.seguimientos)==null?void 0:k.find(R=>R.idEstado===1))==null?void 0:E.fecha,x=(P=(S=g.seguimientos)==null?void 0:S.find(R=>R.idEstado===1))==null?void 0:P.fecha;return!m&&!x?0:m?x?new Date(x)-new Date(m):-1:1}),r(y),s(null)}catch(d){console.error("Error fetching tickets:",d),s(d.message)}finally{o(!1)}},[e]);return C.useEffect(()=>{e&&(l.current!==e.id||!a.current)&&(l.current=e.id,a.current=!0,u())},[e,u]),{tickets:t,loading:n,error:i,refetchTickets:u}},U1=e=>({total:e.length,sinAtender:e.filter(r=>r.idEstado===1).length,reasignados:e.filter(r=>r.idEstado===2).length,atendidos:e.filter(r=>r.idEstado===3).length,cerrados:e.filter(r=>r.idEstado===4).length,cancelados:e.filter(r=>r.idEstado===5).length}),_g=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0);C.useEffect(()=>{(async()=>{try{const{data:s,error:a}=await M.from("asignaciones").select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `);if(a)throw a;t(s||[])}catch(s){console.error("Error fetching asignaciones:",s)}finally{n(!1)}})()},[]);const o=C.useCallback((i,s)=>{var l;const a=e.find(u=>u.idPlanta===i&&u.idTipoSolicitud===s);return((l=a==null?void 0:a.usuarios)==null?void 0:l.nombre)||"No asignado"},[e]);return{asignaciones:e,loading:r,getResponsable:o}},F1=e=>{const[t,r]=C.useState(!1),n=C.useCallback(async(l,u,c)=>{var d;try{r(!0);const{error:p}=await M.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:3});if(p)throw p;const{data:v,error:w}=await M.from("atenciones").insert({idTicket:l,respuesta:c}).select().single();if(w)throw w;const{error:y}=await M.from("tickets").update({idEstado:3}).eq("idTicket",l);if(y)throw y;const{error:j}=await M.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);return j&&!((d=j.message)!=null&&d.includes("0 rows"))&&console.warn("Error al desactivar delegaciones:",j),{success:!0,atencion:v}}catch(p){return console.error("Error al registrar la atención:",p),{success:!1,error:p.message}}finally{r(!1)}},[]),o=C.useCallback(async(l,u,c)=>{try{r(!0);const{error:d}=await M.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:2});if(d)throw d;const{error:p}=await M.from("tickets").update({idEstado:2}).eq("idTicket",l);if(p)throw p;const{error:v}=await M.from("delegaciones").insert({idTicket:l,idUsuario:c});if(v)throw v;return{success:!0,mensaje:"Ticket delegado exitosamente"}}catch(d){return console.error("Error al delegar el ticket:",d),{success:!1,error:d.message}}finally{r(!1)}},[]),i=C.useCallback(async(l,u,c)=>{try{r(!0);const{error:d}=await M.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:5});if(d)throw d;const{data:p,error:v}=await M.from("atenciones").insert({idTicket:l,respuesta:c}).select().single();if(v)throw v;const{error:w}=await M.from("tickets").update({idEstado:5}).eq("idTicket",l);if(w)throw w;return{success:!0,atencion:p}}catch(d){return console.error("Error al cancelar el ticket:",d),{success:!1,error:d.message}}finally{r(!1)}},[]),s=C.useCallback(async(l,u)=>{if(!e)return{success:!1,error:"Usuario no disponible"};r(!0);try{const{error:c}=await M.from("seguimientos").insert({idTicket:l,idUsuario:e.id,idEstado:2});if(c)throw c;const{error:d}=await M.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(d)throw d;const{error:p}=await M.from("delegaciones").insert({idTicket:l,idUsuario:u});if(p)throw p;return{success:!0}}catch(c){return console.error("Error al re-asignar el ticket:",c),{success:!1,error:c.message}}finally{r(!1)}},[e]),a=C.useCallback(async l=>{r(!0);try{const{error:u}=await M.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(u)throw u;return{success:!0}}catch(u){return console.error("Error al autoasignarse el ticket:",u),{success:!1,error:u.message}}finally{r(!1)}},[]);return{crearAtencion:n,delegarTicket:o,cancelarTicket:i,reasignarTicket:s,autoasignarTicket:a,loading:t}},xg=()=>{const[e,t]=C.useState(!1),[r,n]=C.useState(null),o=C.useCallback(async(s,a=null)=>{try{t(!0),n(null);let l=3;a===5?l=5:a===3&&(l=3);const{data:u,error:c}=await M.from("seguimientos").select(`
          idUsuario,
          fecha,
          usuarios (
            nombre
          )
        `).eq("idTicket",s).eq("idEstado",l).order("fecha",{ascending:!1}).limit(1).single();return c?(console.error("Error obteniendo seguimiento:",c),null):!u||!u.usuarios?null:{nombre:u.usuarios.nombre,fecha:u.fecha}}catch(l){return console.error("Error en obtenerUsuarioQueAtendio:",l),n(l.message),null}finally{t(!1)}},[]),i=C.useCallback(async s=>{if(!s||s.length===0)return{};try{t(!0),n(null);const{data:a,error:l}=await M.from("seguimientos").select(`
          idTicket,
          idUsuario,
          fecha,
          usuarios (
            nombre,
            apellidos
          )
        `).in("idTicket",s).eq("idEstado",3).order("fecha",{ascending:!1});if(l)return console.error("Error obteniendo seguimientos:",l),{};const u={};return a.forEach(c=>{!u[c.idTicket]&&c.usuarios&&(u[c.idTicket]={nombre:`${c.usuarios.nombre} ${c.usuarios.apellidos}`.trim(),fecha:c.fecha})}),u}catch(a){return console.error("Error en obtenerUsuariosQueAtendieron:",a),n(a.message),{}}finally{t(!1)}},[]);return{obtenerUsuarioQueAtendio:o,obtenerUsuariosQueAtendieron:i,loading:e,error:r}},gt=e=>{if(e.includes("T")&&e.includes("+00:00")){const r=e.split("T")[0],n=e.split("T")[1].split("+")[0],[o,i,s]=r.split("-"),[a,l]=n.split(":");return`${s}/${i}/${o}, ${a}:${l}`}return new Date(e).toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},M1=({user:e,onLogout:t})=>f.jsxs(B1,{children:[f.jsxs(q1,{children:[f.jsx("h1",{children:"Dashboard Administrativo"}),f.jsxs("p",{children:["Bienvenido, ",e==null?void 0:e.nombre]})]}),f.jsx(W1,{onClick:t,children:"Cerrar Sesión"})]}),B1=_.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0.8rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`,q1=_.div`
  h1 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 0.3rem 0 0 0;
    color: var(--color-gray);
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`,W1=_.button`
  background-color: var(--color-danger);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d63384;
    transform: translateY(-1px);
  }
`,H1=({stats:e,statsFilter:t,onStatsFilterChange:r})=>{const n={sinAtender:{id:1,label:"Sin Atender",color:"var(--color-estado-sin-atender)",count:e.sinAtender},reasignados:{id:2,label:"Asignados",color:"var(--color-estado-delegado)",count:e.reasignados},atendidos:{id:3,label:"Atendidos",color:"var(--color-estado-atendido)",count:e.atendidos},cerrados:{id:4,label:"Cerrados",color:"var(--color-estado-cerrado)",count:e.cerrados},cancelados:{id:5,label:"Cancelados",color:"var(--color-estado-cancelado)",count:e.cancelados}},o=i=>{r(t===i?null:i)};return f.jsxs(V1,{children:[f.jsxs(G1,{children:["Tickets: ",e.total]}),f.jsx(K1,{children:Object.entries(n).map(([i,s])=>f.jsxs(Q1,{$active:t===i,$color:s.color,onClick:()=>o(i),children:[f.jsx(J1,{$active:t===i,$color:s.color,children:s.count}),f.jsx(Y1,{$active:t===i,$color:s.color,children:s.label})]},i))})]})},V1=_.div`
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
  }
`,G1=_.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`,K1=_.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Q1=_.div`
  background: white;
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${e=>e.$active?"100%":"0"};
    height: 3px;
    background: ${e=>e.$active?e.$color:"transparent"};
    transition: width 0.25s ease;
  }
`,J1=_.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  margin-bottom: 0.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`,Y1=_.div`
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,X1=({tempFilters:e,onTempFilterChange:t,onApplyFilters:r,onClearFilters:n,plantas:o,tipos:i,prioridades:s})=>{const[a,l]=C.useState(!1);return f.jsxs(Z1,{children:[f.jsxs(e_,{onClick:()=>l(!a),children:[f.jsx("h3",{children:"Filtros"}),f.jsx(t_,{$expanded:a,children:a?"▲":"▼"})]}),a&&f.jsxs(r_,{children:[f.jsxs(n_,{children:[f.jsxs(pi,{children:[f.jsx("label",{children:"Planta:"}),f.jsxs("select",{value:e.planta,onChange:u=>t("planta",u.target.value),children:[f.jsx("option",{value:"",children:"Todas"}),o.map(u=>f.jsx("option",{value:u.idPlanta,children:u.planta},u.idPlanta))]})]}),f.jsxs(pi,{children:[f.jsx("label",{children:"Tipo:"}),f.jsxs("select",{value:e.tipoSolicitud,onChange:u=>t("tipoSolicitud",u.target.value),children:[f.jsx("option",{value:"",children:"Todos"}),i.sort((u,c)=>u.idTipoSolicitud-c.idTipoSolicitud).map(u=>f.jsx("option",{value:u.idTipoSolicitud,children:u.tipoSolicitud},u.idTipoSolicitud))]})]}),f.jsxs(pi,{children:[f.jsx("label",{children:"Prioridad:"}),f.jsxs("select",{value:e.prioridad,onChange:u=>t("prioridad",u.target.value),children:[f.jsx("option",{value:"",children:"Todas"}),s.map(u=>f.jsx("option",{value:u.idPrioridad,children:u.prioridad},u.idPrioridad))]})]}),f.jsxs(pi,{children:[f.jsx("label",{children:"Empleado:"}),f.jsx("input",{type:"text",placeholder:"Código o nombre...",value:e.empleado,onChange:u=>t("empleado",u.target.value)})]})]}),f.jsxs(o_,{children:[f.jsx("label",{children:"Ordenar por:"}),f.jsxs("select",{value:e.sortBy,onChange:u=>t("sortBy",u.target.value),children:[f.jsx("option",{value:"fecha",children:"Fecha de creación"}),f.jsx("option",{value:"prioridad",children:"Prioridad"})]})]}),f.jsxs(i_,{children:[f.jsx(a_,{onClick:n,children:"Limpiar"}),f.jsx(s_,{onClick:r,children:"Aplicar"})]})]})]})},Z1=_.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`,e_=_.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: ${e=>e.$expanded?"1px solid #eee":"none"};

  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`,t_=_.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`,r_=_.div`
  padding: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`,n_=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-bottom: 0.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,pi=_.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.3rem;
    font-weight: 500;
    color: var(--color-primary);
    font-size: 0.85rem;
  }

  select,
  input {
    padding: 0.4rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.85rem;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }
`,o_=_.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;

  label {
    font-weight: 500;
    color: var(--color-primary);
    font-size: 0.85rem;
  }

  select {
    padding: 0.4rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.85rem;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }
`,i_=_.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid #eee;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`,s_=_.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`,a_=_.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: #5a6268;
  }
`,Nl=({ticket:e,mode:t="employee",formatDate:r,getPriorityColor:n,getResponsable:o,onAtender:i,onVerRespuesta:s,onShowDetails:a,isResolved:l=!1,isExpanded:u=!1,onToggleExpand:c,currentUser:d=null})=>{var x,k,E,S,P,R,O,z;const p=L=>{var Y,de;if(L.idEstado===2&&((Y=L.delegaciones)==null?void 0:Y.length)>0){const se=L.delegaciones.find(ue=>ue.bActivo===!0);return((de=se==null?void 0:se.usuarios)==null?void 0:de.nombre)||null}return null},v=L=>{var de,se;const Y=(se=(de=L.seguimientos)==null?void 0:de.find(ue=>ue.idEstado===1))==null?void 0:se.fecha;return Y?r?r(Y):gt(Y):"Pendiente seguimiento inicial"},w=L=>{var Y,de,se,ue,xe,b,A,I;switch(L.idEstado){case 1:return v(L);case 2:{const N=(de=(Y=L.seguimientos)==null?void 0:Y.find(D=>D.idEstado===2))==null?void 0:de.fecha;return N?r?r(N):gt(N):v(L)}case 3:{const N=(ue=(se=L.seguimientos)==null?void 0:se.find(D=>D.idEstado===3))==null?void 0:ue.fecha;return N?r?r(N):gt(N):v(L)}case 4:{const N=(b=(xe=L.seguimientos)==null?void 0:xe.find(D=>D.idEstado===4))==null?void 0:b.fecha;return N?r?r(N):gt(N):v(L)}case 5:{const N=(I=(A=L.seguimientos)==null?void 0:A.find(D=>D.idEstado===5))==null?void 0:I.fecha;return N?r?r(N):gt(N):v(L)}default:return v(L)}},y=()=>{switch(e.idEstado){case 1:return"var(--color-estado-sin-atender)";case 2:return"var(--color-estado-delegado)";case 3:return"var(--color-estado-atendido)";case 4:return"var(--color-estado-cerrado)";case 5:return"var(--color-estado-cancelado)";default:return"#ffc107"}},j=L=>{switch(L){case 1:return"Sin atender";case 2:return"Asignado";case 3:return"Atendido";case 4:return"Cerrado";case 5:return"Cancelado";default:return"Pendiente"}},h=L=>{switch(L){case 1:return"Fecha de creación:";case 2:return"Fecha de asignación:";case 3:return"Fecha de atención:";case 4:return"Fecha de cierre:";case 5:return"Fecha de cancelación:";default:return"Fecha de creación:"}},g=L=>{switch(L){case 1:return"var(--color-estado-sin-atender)";case 2:return"var(--color-estado-delegado)";case 3:return"var(--color-estado-atendido)";case 4:return"var(--color-estado-cerrado)";case 5:return"var(--color-estado-cancelado)";default:return"#ffc107"}},m=t==="employee"?l:e.atenciones&&e.atenciones.length>0;return f.jsxs(l_,{$isResolved:m,$borderColor:y(),$isExpanded:u,children:[f.jsxs(u_,{onClick:()=>c&&c(e.idTicket),children:[f.jsxs(c_,{children:[f.jsx(f_,{$priority:n(e.idPrioridad),children:(x=e.prioridades)==null?void 0:x.prioridad}),f.jsxs(h_,{children:["#",e.idTicket]})]}),f.jsx(d_,{children:t==="admin"?m?f.jsx(w_,{children:f.jsx(__,{onClick:L=>{L.stopPropagation(),s&&s(e)},title:"Ver respuesta del ticket",children:f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}):f.jsxs(p_,{children:[f.jsx(g_,{onClick:L=>{L.stopPropagation(),i&&i(e)},children:"Atender"}),f.jsx(Fd,{onClick:L=>{L.stopPropagation(),c&&c(e.idTicket)},children:u?"▲":"▼"})]}):f.jsxs(m_,{children:[f.jsx(v_,{$estadoColor:g(e.idEstado),onClick:L=>{L.stopPropagation(),a&&a(e)},children:j(e.idEstado)}),f.jsx(Fd,{onClick:L=>{L.stopPropagation(),c&&c(e.idTicket)},children:u?"▲":"▼"})]})})]}),f.jsx(y_,{$isExpanded:u,children:t==="admin"?f.jsxs(f.Fragment,{children:[f.jsxs(vr,{children:[f.jsx(Pt,{children:"Empleado:"}),f.jsxs(yr,{children:[(k=e.empleados)==null?void 0:k.nombre," - Código:"," ",(E=e.empleados)==null?void 0:E.codigoEmpleado]})]}),f.jsxs(vr,{children:[f.jsx(Pt,{children:"Planta:"}),f.jsx(yr,{children:(P=(S=e.empleados)==null?void 0:S.plantas)==null?void 0:P.planta})]}),f.jsxs(vr,{children:[f.jsx(Pt,{children:"Fecha:"}),f.jsx(yr,{children:w(e)})]}),o&&f.jsxs(vr,{children:[f.jsx(Pt,{children:(d==null?void 0:d.idRol)===3?"Asignado por:":"Responsable:"}),f.jsx(yr,{children:o((R=e.empleados)==null?void 0:R.idPlanta,e.idTipoSolicitud)})]}),f.jsxs(Md,{children:[f.jsx(Pt,{children:"Descripción:"}),f.jsx(Bd,{children:e.descripcion})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(vr,{children:[f.jsx(Pt,{children:h(e.idEstado)}),f.jsx(yr,{children:w(e)})]}),f.jsxs(vr,{children:[f.jsx(Pt,{children:"Tipo:"}),f.jsx(yr,{children:(O=e.tiposSolicitud)==null?void 0:O.tipoSolicitud})]}),f.jsxs(Md,{children:[f.jsx(Pt,{children:"Descripción:"}),f.jsx(Bd,{children:e.descripcion})]}),o&&f.jsxs(vr,{children:[f.jsx(Pt,{children:"Responsable:"}),f.jsx(yr,{children:e.idEstado===2&&p(e)?p(e):o((z=e.empleados)==null?void 0:z.idPlanta,e.idTipoSolicitud)})]})]})})]})},l_=_.div`
  background: white;
  border-radius: 8px;
  border-left: 4px solid ${e=>e.$borderColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`,u_=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${e=>e.$isResolved?"#f8f9fa":"white"};
  border-bottom: ${e=>e.$isExpanded?"1px solid #e9ecef":"none"};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`,c_=_.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`,d_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,f_=_.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$priority};
`,h_=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,p_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,g_=_.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2a2d29;
    transform: translateY(-1px);
  }
`,m_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,v_=_.button`
  background: ${e=>e.$estadoColor||"#ffc107"};
  color: white;
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }
`,Fd=_.button`
  background: none;
  border: none;
  color: var(--color-gray);
  cursor: pointer;
  padding: 0.25rem;
  font-size: 0.8rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--color-primary);
  }
`,y_=_.div`
  display: ${e=>e.$isExpanded?"block":"none"};
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;

  @media (min-width: 769px) {
    display: block;
    border-top: none;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`,vr=_.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`,Pt=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.8rem;
  min-width: 120px;

  @media (max-width: 768px) {
    min-width: auto;
    font-size: 0.75rem;
  }
`,yr=_.span`
  color: #495057;
  font-size: 0.8rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 0.75rem;
  }
`,Md=_.div`
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e9ecef;
`,w_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,__=_.button`
  background: #17a2b8;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #138496;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Bd=_.div`
  color: #495057;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,x_=({tickets:e,mode:t="admin",onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,expandedTicketId:a,onToggleExpand:l,currentUser:u=null})=>e.length===0?f.jsx(qd,{children:f.jsx(k_,{children:"No se encontraron tickets"})}):f.jsx(qd,{children:f.jsx(S_,{children:e.map(c=>f.jsx(Nl,{ticket:c,mode:t,onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,isExpanded:a===c.idTicket,onToggleExpand:l,currentUser:u},c.idTicket))})}),qd=_.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 0.5rem;

  /* Estilo del scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;

    &:hover {
      background: #a8a8a8;
    }
  }
`,S_=_.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  align-content: start;
  min-height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.8rem;
    grid-row-gap: 0.4rem;
    padding: 0.5rem;
  }
`,k_=_.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  margin: 1rem;
`,E_=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,i]=C.useState(null),s=async()=>{try{n(!0),i(null);const{data:a,error:l}=await M.from("usuarios").select("*").order("idUsuario",{ascending:!1});if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching users:",a)}finally{n(!1)}};return C.useEffect(()=>{s()},[]),{users:e,loading:r,error:o,refetch:s}},b_=({ticket:e,isOpen:t,onClose:r,mode:n="view",onSubmit:o,onDelegate:i,onReassign:s=null,onSelfAssign:a=null,loading:l=!1,usuarioQueAtendio:u=null,currentUser:c=null})=>{var k,E,S,P,R,O,z,L,Y,de,se,ue,xe;const[d,p]=C.useState(""),[v,w]=C.useState(""),[y,j]=C.useState(""),{users:h}=E_(),g=()=>{if(v==="respond"){if(!d.trim()){alert("Debe ingresar una respuesta");return}o==null||o(d.trim(),"respond")}else if(v==="delegate"){if(!y){alert("Debe seleccionar un usuario para delegar");return}i==null||i(y)}else if(v==="cancel"){if(!d.trim()){alert("Debe ingresar el motivo de cancelación");return}o==null||o(d.trim(),"cancel")}else if(v==="reassign"){if(!y){alert("Debe seleccionar un usuario para re-asignar");return}s==null||s(y)}else if(v==="selfassign"){if(!d.trim()){alert("Debe ingresar una respuesta");return}a==null||a(),o==null||o(d.trim(),"respond")}else{if(!d.trim()&&n==="attend"){alert("Debe ingresar una respuesta");return}o==null||o(d.trim())}},m=()=>{p(""),w(""),j(""),r==null||r()},x=b=>{p(""),j(""),w(b)};return!t||!e?null:f.jsx(j_,{children:f.jsxs(C_,{children:[f.jsxs(T_,{children:[f.jsxs(P_,{children:[f.jsx(D_,{$priority:(E=(k=e.prioridades)==null?void 0:k.prioridad)==null?void 0:E.toLowerCase(),children:(S=e.prioridades)==null?void 0:S.prioridad}),f.jsxs("h3",{children:["#",e.idTicket]})]}),f.jsx($_,{onClick:m,children:"×"})]}),f.jsxs(A_,{children:[f.jsx(L_,{children:f.jsxs(N_,{children:[(P=e.empleados)==null?void 0:P.nombre," (",(R=e.empleados)==null?void 0:R.codigoEmpleado,") -"," ",(z=(O=e.empleados)==null?void 0:O.plantas)==null?void 0:z.planta]})}),f.jsxs(K_,{children:[f.jsx(Q_,{children:"Fecha de generación:"})," ",f.jsx(J_,{children:(Y=(L=e.seguimientos)==null?void 0:L.find(b=>b.idEstado===1))!=null&&Y.fecha?gt(e.seguimientos.find(b=>b.idEstado===1).fecha):"No disponible"})]}),f.jsxs(z_,{children:["Tipo: ",(de=e.tiposSolicitud)==null?void 0:de.tipoSolicitud]}),f.jsx(U_,{children:f.jsx(F_,{children:e.descripcion})}),n==="attend"&&e.idEstado===2&&c&&(c.idRol===1||c.idRol===2)&&e.delegaciones&&e.delegaciones.length>0&&f.jsx(V_,{children:e.delegaciones.filter(b=>b.bActivo===!0).map(b=>{var A;return f.jsxs(G_,{children:[f.jsx("strong",{children:"Reasignado a:"})," ",((A=b.usuarios)==null?void 0:A.nombre)||"Usuario desconocido"]},b.idDelegacion)})}),n==="attend"&&e.idEstado===2&&c&&(c.idRol===1||c.idRol===2)&&f.jsxs(Wd,{children:[f.jsx(Bn,{$active:v==="reassign",onClick:()=>x("reassign"),children:"Re-asignar"}),f.jsx(Bn,{$active:v==="selfassign",onClick:()=>x("selfassign"),children:"Autoasignar"})]}),v==="reassign"&&f.jsxs(Kd,{children:[f.jsx(Qd,{children:"Re-asignar a:"}),f.jsxs(Hd,{value:y,onChange:b=>j(b.target.value),children:[f.jsx("option",{value:"",children:"Seleccione un usuario"}),h.filter(b=>{var I,N;const A=((N=(I=e.delegaciones)==null?void 0:I.filter(D=>D.bActivo===!0))==null?void 0:N.map(D=>{var Re;return(Re=D.usuarios)==null?void 0:Re.idUsuario}))||[];return b.idRol===3&&!A.includes(b.idUsuario)}).map(b=>f.jsx("option",{value:b.idUsuario,children:b.nombre},b.idUsuario))]})]}),v==="selfassign"&&f.jsxs(Vd,{children:[f.jsx(Gd,{children:e.idEstado===5?"Su motivo de cancelación:":"Su respuesta:"}),f.jsx(gi,{rows:"4",value:d,onChange:b=>p(b.target.value),placeholder:e.idEstado===5?"Escriba su motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),n==="attend"&&e.idEstado===1&&f.jsxs(f.Fragment,{children:[f.jsxs(Wd,{children:[f.jsx(Bn,{$active:v==="respond",onClick:()=>x("respond"),children:"Responder"}),f.jsx(Bn,{$active:v==="delegate",onClick:()=>x("delegate"),children:"Reasignar"}),f.jsx(Bn,{$active:v==="cancel",onClick:()=>x("cancel"),children:"Cancelar"})]}),v==="respond"&&f.jsxs(Vd,{children:[f.jsx(Gd,{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),f.jsx(gi,{rows:"4",value:d,onChange:b=>p(b.target.value),placeholder:e.idEstado===5?"Escriba el motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),v==="delegate"&&f.jsxs(Kd,{children:[f.jsx(Qd,{children:"Delegar a:"}),f.jsxs(Hd,{value:y,onChange:b=>j(b.target.value),children:[f.jsx("option",{value:"",children:"Seleccione un usuario"}),h.filter(b=>b.idRol===3).map(b=>f.jsx("option",{value:b.idUsuario,children:b.nombre},b.idUsuario))]})]}),v==="cancel"&&f.jsxs(M_,{children:[f.jsx(B_,{children:"Motivo de cancelación:"}),f.jsx(gi,{rows:"4",value:d,onChange:b=>p(b.target.value),placeholder:"Escriba el motivo por el cual se cancela este ticket..."})]})]}),n==="attend"&&e.idEstado!==1&&!(e.idEstado===2&&c&&(c.idRol===1||c.idRol===2))&&f.jsxs(f.Fragment,{children:[f.jsx("label",{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),f.jsx(gi,{rows:"4",value:d,onChange:b=>p(b.target.value),placeholder:e.idEstado===5?"Escriba el motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),n==="response"&&f.jsxs(f.Fragment,{children:[f.jsxs(q_,{children:[f.jsx(W_,{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),f.jsx(H_,{children:((ue=(se=e.atenciones)==null?void 0:se[0])==null?void 0:ue.respuesta)||(e.idEstado===5?"No hay motivo de cancelación disponible":"No hay respuesta disponible")})]}),f.jsxs(I_,{children:[f.jsx("strong",{children:e.idEstado===5?"Cancelado por:":"Atendido por:"})," ",(u==null?void 0:u.nombre)||"No disponible",f.jsx("br",{}),f.jsx("strong",{children:e.idEstado===5?"Fecha de cancelación:":"Fecha de atención:"})," ",u!=null&&u.fecha?gt(u.fecha):"No disponible"]}),e.idEstado===4&&((xe=e.atenciones)==null?void 0:xe[0])&&f.jsxs(Y_,{children:[f.jsx(X_,{children:"Evaluación del Empleado"}),e.atenciones[0].calificacion&&f.jsxs(Z_,{children:[f.jsx(ex,{children:"Calificación:"}),f.jsx(tx,{$rating:e.atenciones[0].calificacion,children:[1,2,3].map(b=>f.jsx(rx,{$filled:b<=e.atenciones[0].calificacion,children:"★"},b))})]}),e.atenciones[0].comentario&&f.jsxs(nx,{children:[f.jsx(ox,{children:"Comentario del empleado:"}),f.jsx(ix,{children:e.atenciones[0].comentario})]}),!e.atenciones[0].calificacion&&!e.atenciones[0].comentario&&f.jsx(sx,{children:"El empleado no proporcionó evaluación del servicio"})]})]})]}),n!=="response"&&e.idEstado!==4&&(n==="attend"&&e.idEstado===1&&v||n==="attend"&&e.idEstado===2&&v||n==="attend"&&e.idEstado!==1&&!(e.idEstado===2&&c&&(c.idRol===1||c.idRol===2))||n!=="attend")&&f.jsx(R_,{children:n==="attend"&&f.jsx(O_,{onClick:g,disabled:l||v==="respond"&&!d.trim()||v==="cancel"&&!d.trim()||v==="delegate"&&!y||v==="reassign"&&!y||v==="selfassign"&&!d.trim(),children:l?"Enviando...":v==="delegate"?"Reasignar Ticket":v==="cancel"?"Cancelar Ticket":v==="reassign"?"Re-asignar Ticket":v==="selfassign"?"Autoasignar y Responder":"Enviar Respuesta"})})]})})},j_=_.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,C_=_.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`,T_=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;

  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.2rem;
  }
`,P_=_.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,$_=_.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`,A_=_.div`
  padding: 1.5rem;

  p {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--color-primary);
  }
`,gi=_.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,R_=_.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
`,O_=_.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`,I_=_.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`,L_=_.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,N_=_.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,z_=_.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,D_=_.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  background: ${e=>{switch(e.$priority){case"alta":return"#dc3545";case"media":return"#fd7e14";case"baja":return"#28a745";default:return"#6c757d"}}};

  color: white;
`,U_=_.div`
  margin-bottom: 1.5rem;
`,F_=_.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,Wd=_.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,Bn=_.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid
    ${e=>e.$active?"var(--color-accent)":"#dee2e6"};
  background: ${e=>e.$active?"var(--color-accent)":"white"};
  color: ${e=>e.$active?"white":"var(--color-primary)"};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  flex: 1;

  &:hover {
    border-color: var(--color-accent);
    background: ${e=>e.$active?"#e54a2e":"#fff5f5"};
  }
`,Hd=_.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  background: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,Vd=_.div`
  margin-top: 1rem;
`,Gd=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Kd=_.div`
  margin-top: 1rem;
`,Qd=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,M_=_.div`
  margin-top: 1rem;
`,B_=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,q_=_.div`
  margin-bottom: 1.5rem;
`,W_=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,H_=_.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,V_=_.div`
  margin-bottom: 1.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`,G_=_.p`
  margin: 1rem;
  color: #424242;
  font-size: 1rem;
  font-weight: 500;
  vertical-align: middle;
`,K_=_.div`
  margin-bottom: 0.5rem;
`,Q_=_.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,J_=_.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  display: inline;
`,Y_=_.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f0f8f5;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  border-left: 4px solid #28a745;
`,X_=_.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
`,Z_=_.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ex=_.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,tx=_.div`
  display: flex;
  gap: 0.2rem;
`,rx=_.span`
  font-size: 1.2rem;
  color: ${e=>e.$filled?"#ffc107":"#e9ecef"};
  text-shadow: ${e=>e.$filled?"0 0 1px rgba(0,0,0,0.3)":"none"};
`,nx=_.div`
  margin-bottom: 0.5rem;
`,ox=_.div`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,ix=_.div`
  padding: 0.75rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2rem;
  font-style: italic;
`,sx=_.div`
  color: #6c757d;
  font-style: italic;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
`,ax=()=>{const{user:e,logout:t}=Mo(),[r,n]=C.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[o,i]=C.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[s,a]=C.useState("sinAtender"),[l,u]=C.useState({show:!1,mode:"view",ticket:null}),[c,d]=C.useState(null),[p,v]=C.useState(null),{tickets:w,loading:y,refetchTickets:j}=D1(e),h=U1(w),{getResponsable:g}=_g(),{crearAtencion:m,delegarTicket:x,cancelarTicket:k,reasignarTicket:E,autoasignarTicket:S,loading:P}=F1(e),{obtenerUsuarioQueAtendio:R}=xg(),{plantas:O}=pg(),{tipos:z}=mg(),{prioridades:L}=vg();C.useEffect(()=>{e&&j(r)},[r,e,j]);const Y=(F,X)=>{i(Ve=>({...Ve,[F]:X}))},de=()=>{n(o)},se=()=>{const F={planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"};i(F),n(F)},ue=F=>{u({show:!0,mode:"attend",ticket:F})},xe=async F=>{u({show:!0,mode:"response",ticket:F});try{const X=await R(F.idTicket,F.idEstado);d(X)}catch(X){console.error("Error obteniendo usuario que atendió:",X),d(null)}},b=()=>{u({show:!1,mode:"view",ticket:null}),d(null)},A=async(F,X="respond")=>{let Ve;try{X==="respond"?Ve=await m(l.ticket.idTicket,e.id,F):X==="cancel"&&(Ve=await k(l.ticket.idTicket,e.id,F)),Ve.success?(b(),j(r)):alert("Error al procesar la solicitud: "+Ve.error)}catch(Tt){alert("Error inesperado: "+Tt.message)}},I=async F=>{const X=await x(l.ticket.idTicket,e.id,F);X.success?(b(),j(r)):alert("Error al delegar el ticket: "+X.error)},N=async F=>{if(!l.ticket)return;const X=await E(l.ticket.idTicket,F);X.success?(b(),j(r)):alert("Error al re-asignar el ticket: "+X.error)},D=async()=>{if(!l.ticket)return;const F=await S(l.ticket.idTicket);F.success||alert("Error al autoasignarse el ticket: "+F.error)},Re=F=>{v(p===F?null:F)},je=w.filter(F=>{if((e==null?void 0:e.idRol)===3||!s)return!0;switch(s){case"sinAtender":return F.idEstado===1;case"reasignados":return F.idEstado===2;case"atendidos":return F.idEstado===3;case"cerrados":return F.idEstado===4;case"cancelados":return F.idEstado===5;default:return!0}}),We=F=>{a(F)},Se=F=>{switch(F){case 3:return"#E06363";case 2:return"#E0C563";case 1:return"#636EE0";default:return"#6c757d"}},He=F=>gt(F);return y?f.jsx(Jd,{children:f.jsx(ux,{children:"Cargando dashboard..."})}):f.jsxs(Jd,{children:[f.jsxs(lx,{children:[f.jsx(M1,{user:e,onLogout:t}),(e==null?void 0:e.idRol)!==3&&f.jsx(H1,{stats:h,statsFilter:s,onStatsFilterChange:We}),f.jsx(X1,{tempFilters:o,onTempFilterChange:Y,onApplyFilters:de,onClearFilters:se,plantas:O,tipos:z,prioridades:L})]}),f.jsx(x_,{tickets:je,mode:"admin",onAtender:ue,onVerRespuesta:xe,getResponsable:g,formatDate:He,getPriorityColor:Se,expandedTicketId:p,onToggleExpand:Re,currentUser:e}),f.jsx(b_,{ticket:l.ticket,isOpen:l.show,onClose:b,mode:l.mode,onSubmit:A,onDelegate:I,onReassign:N,onSelfAssign:D,currentUser:e,loading:P,usuarioQueAtendio:c})]})},Jd=_.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 0.5rem;
    height: 100vh;
  }
`,lx=_.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ux=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: var(--color-gray);
`,cx=e=>{const[t,r]=C.useState([]),[n,o]=C.useState(!1),[i,s]=C.useState(null);C.useEffect(()=>{(async()=>{if(e){o(!0),s(null);try{const{data:p,error:v}=await M.from("tickets").select(`
            *,
            empleados (
              idEmpleado,
              codigoEmpleado,
              nombre,
              idPlanta,
              idEsquemaPago,
              plantas (
                idPlanta,
                planta
              )
            ),
            tiposSolicitud (
              idTipoSolicitud,
              tipoSolicitud
            ),
            prioridades (
              idPrioridad,
              prioridad
            ),
            atenciones (
              idAtencion,
              respuesta,
              calificacion,
              comentario
            ),
            seguimientos (
              idSeguimiento,
              fecha,
              idEstado,
              estados (
                idEstado,
                estado
              ),
              usuarios (
                idUsuario,
                nombre
              )
            ),
            delegaciones (
              idDelegacion,
              bActivo,
              usuarios (
                idUsuario,
                nombre
              )
            )
          `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(v)throw v;r(p||[])}catch(p){s(p.message),console.error("Error fetching employee tickets:",p)}finally{o(!1)}}})()},[e]);const a=async()=>{if(e){o(!0),s(null);try{const{data:d,error:p}=await M.from("tickets").select(`
          *,
          empleados (
            idEmpleado,
            codigoEmpleado,
            nombre,
            idPlanta,
            idEsquemaPago,
            plantas (
              idPlanta,
              planta
            )
          ),
          tiposSolicitud (
            idTipoSolicitud,
            tipoSolicitud
          ),
          prioridades (
            idPrioridad,
            prioridad
          ),
          atenciones (
            idAtencion,
            respuesta,
            calificacion,
            comentario
          ),
          seguimientos (
            idSeguimiento,
            fecha,
            idEstado,
            estados (
              idEstado,
              estado
            ),
            usuarios (
              idUsuario,
              nombre
            )
          ),
          delegaciones (
            idDelegacion,
            bActivo,
            usuarios (
              idUsuario,
              nombre
            )
          )
        `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(p)throw p;r(d||[])}catch(d){s(d.message),console.error("Error fetching employee tickets:",d)}finally{o(!1)}}},l=async(d,p,v="")=>{try{o(!0),s(null);const{data:w,error:y}=await M.from("atenciones").select("*").eq("idTicket",d);if(y)throw new Error(`Error consultando atenciones: ${y.message}`);if(!w||w.length===0)throw new Error(`No se encontró ninguna atención previa para el ticket ${d}. El ticket debe haber sido atendido antes de poder calificarlo.`);const{error:j}=await M.from("tickets").update({idEstado:4}).eq("idTicket",d);if(j)throw new Error(`Error actualizando ticket: ${j.message}`);const{error:h}=await M.from("seguimientos").insert({idTicket:d,idEstado:4,fecha:new Date().toISOString()});if(h)throw new Error(`Error insertando seguimiento: ${h.message}`);const g=w[0].idAtencion,{data:m,error:x}=await M.from("atenciones").update({calificacion:p,comentario:v}).eq("idAtencion",g).select();if(x)throw new Error(`Error actualizando atención: ${x.message}`);if(!m||m.length===0)throw new Error("No se pudo actualizar la atención. El registro pudo haber sido modificado por otra transacción.");return await a(),{success:!0,message:"Calificación enviada correctamente"}}catch(w){const y=w.message||"Error desconocido al calificar ticket";return s(y),{success:!1,error:y}}finally{o(!1)}},u=t.filter(d=>!d.atenciones||d.atenciones.length===0),c=t.filter(d=>d.atenciones&&d.atenciones.length>0);return{tickets:t,pendingTickets:u,resolvedTickets:c,loading:n,error:i,refetch:a,calificarTicket:l}},dx=({employeeData:e,onTicketSubmitted:t,onBack:r})=>{const[n,o]=C.useState({idTipoSolicitud:"",descripcion:"",idPrioridad:""}),[i,s]=C.useState({}),{tipos:a,loading:l}=mg(),{prioridades:u,loading:c}=vg(),{createTicket:d,loading:p}=m1(),v=(h,g)=>{o(m=>({...m,[h]:g})),i[h]&&s(m=>({...m,[h]:""}))},w=()=>{const h={};return n.idTipoSolicitud||(h.idTipoSolicitud="Debe seleccionar un tipo de solicitud"),n.descripcion.trim()||(h.descripcion="Debe proporcionar una descripción"),n.idPrioridad||(h.idPrioridad="Debe seleccionar una prioridad"),s(h),Object.keys(h).length===0},y=async h=>{if(h.preventDefault(),!w())return;const g={idEmpleado:e.idEmpleado,idTipoSolicitud:parseInt(n.idTipoSolicitud),descripcion:n.descripcion.trim(),idPrioridad:parseInt(n.idPrioridad)},m=await d(g);m.success&&t(m.ticket)};return l||c?f.jsx(Yd,{children:f.jsx(fx,{children:"Cargando formulario..."})}):f.jsx(Yd,{children:f.jsxs(wx,{children:[f.jsxs(_x,{children:[r&&f.jsx(yx,{onClick:r,type:"button",title:"Volver",children:"← Volver"}),f.jsx(xx,{children:"Crear Nueva Solicitud"})]}),f.jsxs(hx,{onSubmit:y,children:[f.jsxs(px,{children:[f.jsxs(Xd,{children:[f.jsx(xa,{children:"Tipo de Solicitud *"}),f.jsxs(Zd,{value:n.idTipoSolicitud,onChange:h=>v("idTipoSolicitud",h.target.value),hasError:i.idTipoSolicitud,children:[f.jsx("option",{value:"",children:"Seleccione un tipo..."}),a.sort((h,g)=>h.idTipoSolicitud-g.idTipoSolicitud).map(h=>f.jsx("option",{value:h.idTipoSolicitud,children:h.tipoSolicitud},h.idTipoSolicitud))]}),i.idTipoSolicitud&&f.jsx(Sa,{children:i.idTipoSolicitud})]}),f.jsxs(Xd,{children:[f.jsx(xa,{children:"Prioridad *"}),f.jsxs(Zd,{value:n.idPrioridad,onChange:h=>v("idPrioridad",h.target.value),hasError:i.idPrioridad,children:[f.jsx("option",{value:"",children:"Seleccione una prioridad..."}),u.map(h=>f.jsx("option",{value:h.idPrioridad,children:h.prioridad},h.idPrioridad))]}),i.idPrioridad&&f.jsx(Sa,{children:i.idPrioridad})]})]}),f.jsxs(gx,{children:[f.jsx(xa,{children:"Descripción del Problema *"}),f.jsx(mx,{rows:"3",placeholder:"Describe detalladamente tu solicitud o problema...",value:n.descripcion,onChange:h=>v("descripcion",h.target.value),hasError:i.descripcion}),i.descripcion&&f.jsx(Sa,{children:i.descripcion})]}),f.jsx(vx,{type:"submit",disabled:p,children:p?"📋 Creando ticket...":"📋 Crear Ticket"})]})]})})},Yd=_.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0.5rem;
    max-width: 100vw;
  }
`,fx=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-gray);
  font-size: 1.1rem;
`,hx=_.form`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,px=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`,gx=_.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,Xd=_.div`
  display: flex;
  flex-direction: column;
`,xa=_.label`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Zd=_.select`
  padding: 0.6rem;
  border: 2px solid
    ${e=>e.hasError?"var(--color-danger)":"var(--color-secondary)"};
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  background-color: var(--color-white);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,mx=_.textarea`
  padding: 0.6rem;
  border: 2px solid
    ${e=>e.hasError?"var(--color-danger)":"var(--color-secondary)"};
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 60px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,Sa=_.span`
  color: var(--color-danger);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`,vx=_.button`
  width: 100%;
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: inherit;
  margin-top: auto;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`,yx=_.button`
  background: var(--color-secondary);
  color: black;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;


  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-2px);
  }
`,wx=_.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--color-shadow);
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`,_x=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`,xx=_.h2`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`,Sx=({employeeData:e,onLogout:t})=>{var X,Ve,Tt,lt;const{logout:r}=Mo(),[n,o]=C.useState("pending"),[i,s]=C.useState(!1),[a,l]=C.useState(null),[u,c]=C.useState(!0),[d,p]=C.useState(null),[v,w]=C.useState(!1),[y,j]=C.useState(null),[h,g]=C.useState(null),[m,x]=C.useState(1),[k,E]=C.useState(""),[S,P]=C.useState(!1),[R,O]=C.useState(!1),{buscarEmpleadoPorCodigo:z}=yg(),{esquemas:L}=gg(),{getResponsable:Y}=_g(),{obtenerUsuarioQueAtendio:de}=xg(),{pendingTickets:se,resolvedTickets:ue,loading:xe,error:b,refetch:A,calificarTicket:I}=cx(a==null?void 0:a.idEmpleado),N=u||xe;C.useEffect(()=>{(async()=>{if(e!=null&&e.codigoEmpleado){c(!0);try{const ae=await z(e.codigoEmpleado);ae.success&&ae.empleado?l(ae.empleado):(console.warn("No se encontró el empleado en BD, usando datos de sesión"),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}}))}catch(ae){console.error("Error al buscar empleado:",ae),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}finally{c(!1)}}})()},[e,z]);const D=U=>{switch(U){case 1:return"#dc3545";case 2:return"#ffc107";case 3:return"#28a745";default:return"#6c757d"}},Re=U=>gt(U),je=U=>{p(d===U?null:U)},We=async U=>{if(j(U),w(!0),g(null),x(1),E(""),P(!1),U.idEstado===3||U.idEstado===5||U.atenciones&&U.atenciones.length>0)try{const ae=await de(U.idTicket,U.idEstado);g(ae),U.idEstado===3&&U.atenciones&&U.atenciones.length>0&&(!U.atenciones[0].calificacion||U.atenciones[0].calificacion===0)&&P(!0)}catch(ae){console.error("Error obteniendo usuario que atendió/canceló:",ae),g(null)}},Se=async()=>{if(!(k.trim()&&m===1&&!window.confirm("Has escrito un comentario pero tienes la calificación mínima (1 estrella). ¿Deseas continuar?"))){O(!0);try{const U=await I(y.idTicket,m,k);U.success?(alert("Calificación enviada exitosamente. El ticket ha sido cerrado."),P(!1),w(!1)):alert(`Error al enviar la calificación: ${U.error}`)}catch(U){console.error("Error enviando calificación:",U),alert("Error al enviar la calificación. Inténtalo de nuevo.")}finally{O(!1)}}},He=()=>{s(!1),A()},F=()=>{r(),t&&t()};return i?f.jsx(dx,{employeeData:a||e,onTicketSubmitted:He,onLogout:F,onBack:()=>s(!1)}):f.jsxs(kx,{children:[f.jsxs(Ex,{children:[f.jsxs(jx,{children:[f.jsxs(Cx,{children:[f.jsx(Px,{children:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}),f.jsxs($x,{children:["Código:"," ",(a==null?void 0:a.codigoEmpleado)||(e==null?void 0:e.codigoEmpleado)," ","| Planta:"," ",((X=a==null?void 0:a.plantas)==null?void 0:X.planta)||(e==null?void 0:e.planta)," | Esquema:"," ",((Ve=L.find(U=>U.idEsquemaPago===((a==null?void 0:a.idEsquemaPago)||(e==null?void 0:e.idEsquemaPago))))==null?void 0:Ve.esquemaPago)||"No configurado"]})]}),f.jsx(Tx,{children:f.jsx(Ax,{onClick:F,children:"Cerrar Sesión"})})]}),f.jsxs(Rx,{children:[f.jsxs(ef,{$active:n==="pending",onClick:()=>{o("pending"),p(null)},children:["Tickets Pendientes (",se.length,")"]}),f.jsxs(ef,{$active:n==="resolved",onClick:()=>{o("resolved"),p(null)},children:["Tickets Resueltos (",ue.length,")"]})]})]}),f.jsx(bx,{children:f.jsx(Ox,{children:f.jsx(Ix,{children:N?f.jsx(zx,{children:"Cargando tickets..."}):b?f.jsxs(Dx,{children:["Error al cargar tickets: ",b]}):f.jsx(f.Fragment,{children:n==="pending"?f.jsx(f.Fragment,{children:se.length===0?f.jsxs(tf,{children:[f.jsx(rf,{children:"📋"}),f.jsx(nf,{children:"No tienes tickets pendientes"}),f.jsx(of,{children:"Aquí aparecerán los tickets que hayas creado y aún no han sido atendidos."})]}):se.map(U=>f.jsx(Nl,{ticket:U,mode:"employee",formatDate:Re,getPriorityColor:D,getResponsable:Y,isResolved:!1,isExpanded:d===U.idTicket,onToggleExpand:je,onShowDetails:We},U.idTicket))}):f.jsx(f.Fragment,{children:ue.length===0?f.jsxs(tf,{children:[f.jsx(rf,{children:"✅"}),f.jsx(nf,{children:"No tienes tickets resueltos"}),f.jsx(of,{children:"Aquí aparecerán los tickets que hayan sido atendidos."})]}):ue.map(U=>f.jsx(Nl,{ticket:U,mode:"employee",formatDate:Re,getPriorityColor:D,getResponsable:Y,isResolved:!0,isExpanded:d===U.idTicket,onToggleExpand:je,onShowDetails:We},U.idTicket))})})})})}),f.jsx(Lx,{children:f.jsx(Nx,{onClick:()=>s(!0),children:"+ Crear Nuevo Ticket"})}),v&&f.jsx(Ux,{children:f.jsxs(Fx,{children:[f.jsxs(Mx,{children:[f.jsxs(Hx,{children:[f.jsx(Vx,{$color:D(y==null?void 0:y.idPrioridad),children:(Tt=y==null?void 0:y.prioridades)==null?void 0:Tt.prioridad}),f.jsxs("h3",{children:["#",y==null?void 0:y.idTicket]})]}),f.jsx(Bx,{onClick:()=>w(!1),children:"×"})]}),f.jsxs(Yx,{children:[f.jsxs(Qn,{children:[f.jsx(Jn,{children:"Fecha de creación:"}),f.jsx(Yn,{children:(()=>{var ae,Rn;const U=(Rn=(ae=y==null?void 0:y.seguimientos)==null?void 0:ae.find(Bo=>Bo.idEstado===1))==null?void 0:Rn.fecha;return U?gt(U):"Pendiente seguimiento inicial"})()})]}),f.jsxs(Qn,{children:[f.jsx(Jn,{children:"Tipo:"}),f.jsx(Yn,{children:(lt=y==null?void 0:y.tiposSolicitud)==null?void 0:lt.tipoSolicitud})]}),f.jsx(Gx,{children:f.jsx(Kx,{children:y==null?void 0:y.descripcion})}),y!=null&&y.atenciones&&y.atenciones.length>0||(y==null?void 0:y.idEstado)===5?f.jsxs(f.Fragment,{children:[(y==null?void 0:y.atenciones)&&y.atenciones.length>0&&f.jsxs(Qx,{children:[f.jsx(Jx,{children:"Respuesta:"}),f.jsx(eS,{children:y.atenciones[0].respuesta||"No hay respuesta disponible"})]}),f.jsxs(qx,{$idEstado:y==null?void 0:y.idEstado,children:[f.jsxs(Qn,{children:[f.jsx(Jn,{children:(y==null?void 0:y.idEstado)===5?"Cancelado por:":"Atendido por:"}),f.jsx(Yn,{children:(h==null?void 0:h.nombre)||"No disponible"})]}),f.jsxs(Qn,{children:[f.jsx(Jn,{children:(y==null?void 0:y.idEstado)===5?"Fecha de cancelación:":"Fecha de atención:"}),f.jsx(Yn,{children:(()=>{var Rn,Bo;const U=(y==null?void 0:y.idEstado)===5?5:3,ae=(Bo=(Rn=y==null?void 0:y.seguimientos)==null?void 0:Rn.find(Sg=>Sg.idEstado===U))==null?void 0:Bo.fecha;return ae?gt(ae):"No disponible"})()})]})]}),(y==null?void 0:y.atenciones)&&y.atenciones.length>0&&y.atenciones[0].calificacion&&y.atenciones[0].calificacion>0&&f.jsxs(sS,{children:[f.jsx(Wx,{children:"Tu calificación:"}),f.jsx(aS,{children:Array.from({length:3},(U,ae)=>f.jsx(lS,{$filled:ae<y.atenciones[0].calificacion,children:"★"},ae))}),y.atenciones[0].comentario&&f.jsxs(uS,{children:[f.jsx("strong",{children:"Tu comentario:"})," ",y.atenciones[0].comentario]})]})]}):null,S&&(y==null?void 0:y.idEstado)===3&&f.jsxs(f.Fragment,{children:[f.jsx(tS,{children:"¿Cómo lo calificarías?"}),f.jsx(rS,{children:Array.from({length:3},(U,ae)=>f.jsx(nS,{$filled:ae<m,onClick:()=>x(ae+1)},ae))}),f.jsx(oS,{placeholder:"Comentario adicional (opcional)",value:k,onChange:U=>E(U.target.value),rows:2})]})]}),f.jsxs(Xx,{children:[S&&(y==null?void 0:y.idEstado)===3&&f.jsx(iS,{onClick:Se,disabled:R,children:R?"Enviando...":"Enviar Calificación"}),f.jsx(Zx,{onClick:()=>w(!1),children:"Cerrar"})]})]})})]})},kx=_.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ex=_.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`,bx=_.div`
  flex: 1;
  overflow-y: auto;

  /* Estilo del scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`,jx=_.header`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`,Cx=_.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Tx=_.div`
  display: flex;
  align-items: center;
`,Px=_.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
`,$x=_.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,Ax=_.button`
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background: #e54a2e;
  }
`,Rx=_.div`
  display: flex;
  background: #e9ecef;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`,Ox=_.div`
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
`,ef=_.button`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  background: ${e=>e.$active?"white":"#e9ecef"};
  color: ${e=>e.$active?"var(--color-primary)":"#6c757d"};
  font-weight: ${e=>e.$active?"600":"500"};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${e=>e.$active?"white":"#d1ecf1"};
    color: ${e=>e.$active?"var(--color-primary)":"#495057"};
  }
`,Ix=_.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  align-content: start;
  flex: 1;
  min-height: 400px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.8rem;
    grid-row-gap: 0.8rem;
    padding: 0.5rem;
  }
`,Lx=_.div`
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
`,Nx=_.button`
  width: 100%;
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background: #e54a2e;
    transform: translateY(-1px);
  }
`,zx=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  min-height: 300px;
`,Dx=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
  min-height: 300px;
`,tf=_.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  min-height: 300px;
`,rf=_.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,nf=_.h3`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`,of=_.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,Ux=_.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Fx=_.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`,Mx=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;

  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.1rem;
  }
`,Bx=_.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`,Qn=_.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.4rem 0;
  border-bottom: 1px dotted #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`,Jn=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
  min-width: fit-content;
  margin-right: 1rem;
`,Yn=_.span`
  color: #495057;
  font-size: 0.9rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
  }
`,qx=_.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  background: ${e=>{switch(e.$idEstado){case 5:return"var(--color-estado-cancelado-bg)";case 3:return"#e9f7ef";default:return"#e9f7ef"}}};
  border-radius: 4px;
  border-left: 4px solid ${e=>{switch(e.$idEstado){case 5:return"var(--color-estado-cancelado)";case 3:return"#28a745";default:return"#28a745"}}};
  
  ${Qn} {
    padding: 0.25rem 0;
    margin-bottom: 0;
  }
  
  ${Jn} {
    font-size: 0.85rem;
  }
  
  ${Yn} {
    font-size: 0.85rem;
  }
`,Wx=_.div`
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,Hx=_.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Vx=_.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$color||"var(--color-gray)"};
`,Gx=_.div`
  margin-bottom: 1rem;
`,Kx=_.p`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid var(--color-primary);
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
  margin: 0;
`,Qx=_.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
`,Jx=_.h5`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-weight: 600;
`,Yx=_.div`
  padding: 1rem;

  p {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--color-primary);
  }
`,Xx=_.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
`,Zx=_.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #5a6268;
  }
`,eS=_.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-bottom: 1rem;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`,tS=_.h5`
  margin: 1.5rem 0 0.8rem 0;
  color: var(--color-primary);
  text-align: center;
  font-size: 1rem;
`,rS=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
`,nS=_.button`
  background: none !important;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0;
  margin: 0 0.1rem;
  
  /* Eliminar todos los efectos de fondo y selección */
  background-color: transparent !important;
  box-shadow: none !important;
  
  /* Usar diferentes caracteres para relleno y borde más fino */
  color: var(--color-accent);
  
  &:before {
    content: ${e=>e.$filled?'"★"':'"☆"'};
  }

  &:hover {
    color: var(--color-accent);
    background: none !important;
    background-color: transparent !important;
  }

  &:focus {
    outline: none;
    background: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:active {
    background: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:visited {
    background: none !important;
    background-color: transparent !important;
  }
`,oS=_.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(55, 58, 54, 0.1);
  }
`,iS=_.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-right: 1rem;

  &:hover:not(:disabled) {
    background: #218838;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`,sS=_.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #e8f5e8;
  border-radius: 4px;
  border: 1px solid #28a745;
`,aS=_.div`
  display: inline-flex;
  margin-left: 0.5rem;
`,lS=_.span`
  color: ${e=>e.$filled?"#ffc107":"#ddd"};
  font-size: 1.2rem;
`,uS=_.div`
  margin-top: 0.5rem;
  font-style: italic;
  color: #495057;
`,cS=()=>{const{user:e,employeeData:t,logout:r}=Mo(),[n,o]=C.useState(!0);return C.useEffect(()=>{const s=setTimeout(()=>{o(!1)},100);return()=>clearTimeout(s)},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:"Cargando..."}):e&&e.type==="admin"?f.jsx(ax,{}):t&&t.type==="employee"?f.jsx(Sx,{employeeData:t,onLogout:r}):f.jsx($1,{})};function dS(){return f.jsxs(g1,{children:[f.jsx(X0,{}),f.jsx(cS,{})]})}ka.createRoot(document.getElementById("root")).render(f.jsx(bt.StrictMode,{children:f.jsx(dS,{})}));
