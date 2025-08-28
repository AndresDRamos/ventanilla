(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Ze=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Pg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var Kf={exports:{}},Cs={},Gf={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),$g=Symbol.for("react.portal"),Rg=Symbol.for("react.fragment"),Ag=Symbol.for("react.strict_mode"),Ig=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),Ng=Symbol.for("react.forward_ref"),Ug=Symbol.for("react.suspense"),zg=Symbol.for("react.memo"),Dg=Symbol.for("react.lazy"),bu=Symbol.iterator;function Fg(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var Qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jf=Object.assign,Yf={};function In(e,t,r){this.props=e,this.context=t,this.refs=Yf,this.updater=r||Qf}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xf(){}Xf.prototype=In.prototype;function dc(e,t,r){this.props=e,this.context=t,this.refs=Yf,this.updater=r||Qf}var fc=dc.prototype=new Xf;fc.constructor=dc;Jf(fc,In.prototype);fc.isPureReactComponent=!0;var Su=Array.isArray,Zf=Object.prototype.hasOwnProperty,hc={current:null},eh={key:!0,ref:!0,__self:!0,__source:!0};function th(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Zf.call(t,n)&&!eh.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Mo,type:e,key:i,ref:s,props:o,_owner:hc.current}}function Mg(e,t){return{$$typeof:Mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mo}function Bg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Eu=/\/+/g;function na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bg(""+e.key):t.toString(36)}function Pi(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Mo:case $g:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+na(s,0):n,Su(o)?(r="",e!=null&&(r=e.replace(Eu,"$&/")+"/"),Pi(o,t,r,"",function(c){return c})):o!=null&&(pc(o)&&(o=Mg(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Eu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",Su(e))for(var a=0;a<e.length;a++){i=e[a];var l=n+na(i,a);s+=Pi(i,t,r,l,o)}else if(l=Fg(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=n+na(i,a++),s+=Pi(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Xo(e,t,r){if(e==null)return e;var n=[],o=0;return Pi(e,n,"","",function(i){return t.call(r,i,o++)}),n}function qg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},$i={transition:null},Wg={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:$i,ReactCurrentOwner:hc};M.Children={map:Xo,forEach:function(e,t,r){Xo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Xo(e,function(){t++}),t},toArray:function(e){return Xo(e,function(t){return t})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=In;M.Fragment=Rg;M.Profiler=Ig;M.PureComponent=dc;M.StrictMode=Ag;M.Suspense=Ug;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wg;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Jf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=hc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Zf.call(t,l)&&!eh.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:Mo,type:e.type,key:o,ref:i,props:n,_owner:s}};M.createContext=function(e){return e={$$typeof:Lg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Og,_context:e},e.Consumer=e};M.createElement=th;M.createFactory=function(e){var t=th.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Ng,render:e}};M.isValidElement=pc;M.lazy=function(e){return{$$typeof:Dg,_payload:{_status:-1,_result:e},_init:qg}};M.memo=function(e,t){return{$$typeof:zg,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return $e.current.useCallback(e,t)};M.useContext=function(e){return $e.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};M.useEffect=function(e,t){return $e.current.useEffect(e,t)};M.useId=function(){return $e.current.useId()};M.useImperativeHandle=function(e,t,r){return $e.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return $e.current.useMemo(e,t)};M.useReducer=function(e,t,r){return $e.current.useReducer(e,t,r)};M.useRef=function(e){return $e.current.useRef(e)};M.useState=function(e){return $e.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return $e.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return $e.current.useTransition()};M.version="18.2.0";Gf.exports=M;var x=Gf.exports;const St=Tg(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg=x,Vg=Symbol.for("react.element"),Kg=Symbol.for("react.fragment"),Gg=Object.prototype.hasOwnProperty,Qg=Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jg={key:!0,ref:!0,__self:!0,__source:!0};function rh(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Gg.call(t,n)&&!Jg.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Vg,type:e,key:i,ref:s,props:o,_owner:Qg.current}}Cs.Fragment=Kg;Cs.jsx=rh;Cs.jsxs=rh;Kf.exports=Cs;var f=Kf.exports,Ga={},nh={exports:{}},He={},oh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,O){var L=R.length;R.push(O);e:for(;0<L;){var W=L-1>>>1,H=R[W];if(0<o(H,O))R[W]=O,R[L]=H,L=W;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var O=R[0],L=R.pop();if(L!==O){R[0]=L;e:for(var W=0,H=R.length,Ge=H>>>1;W<Ge;){var ke=2*(W+1)-1,z=R[ke],V=ke+1,nt=R[V];if(0>o(z,L))V<H&&0>o(nt,z)?(R[W]=nt,R[V]=L,W=V):(R[W]=z,R[ke]=L,W=ke);else if(V<H&&0>o(nt,L))R[W]=nt,R[V]=L,W=V;else break e}}return O}function o(R,O){var L=R.sortIndex-O.sortIndex;return L!==0?L:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,v=!1,y=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var O=r(c);O!==null;){if(O.callback===null)n(c);else if(O.startTime<=R)n(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=r(c)}}function k(R){if(w=!1,m(R),!y)if(r(l)!==null)y=!0,vt(E);else{var O=r(c);O!==null&&Ke(k,O.startTime-R)}}function E(R,O){y=!1,w&&(w=!1,p(P),P=-1),v=!0;var L=h;try{for(m(O),d=r(l);d!==null&&(!(d.expirationTime>O)||R&&!Q());){var W=d.callback;if(typeof W=="function"){d.callback=null,h=d.priorityLevel;var H=W(d.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?d.callback=H:d===r(l)&&n(l),m(O)}else n(l);d=r(l)}if(d!==null)var Ge=!0;else{var ke=r(c);ke!==null&&Ke(k,ke.startTime-O),Ge=!1}return Ge}finally{d=null,h=L,v=!1}}var C=!1,S=null,P=-1,I=5,$=-1;function Q(){return!(e.unstable_now()-$<I)}function B(){if(S!==null){var R=e.unstable_now();$=R;var O=!0;try{O=S(!0,R)}finally{O?De():(C=!1,S=null)}}else C=!1}var De;if(typeof g=="function")De=function(){g(B)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,xr=qt.port2;qt.port1.onmessage=B,De=function(){xr.postMessage(null)}}else De=function(){b(B,0)};function vt(R){S=R,C||(C=!0,De())}function Ke(R,O){P=b(function(){R(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,vt(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var L=h;h=O;try{return R()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=h;h=R;try{return O()}finally{h=L}},e.unstable_scheduleCallback=function(R,O,L){var W=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?W+L:W):L=W,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,R={id:u++,callback:O,priorityLevel:R,startTime:L,expirationTime:H,sortIndex:-1},L>W?(R.sortIndex=L,t(c,R),r(l)===null&&R===r(c)&&(w?(p(P),P=-1):w=!0,Ke(k,L-W))):(R.sortIndex=H,t(l,R),y||v||(y=!0,vt(E))),R},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(R){var O=h;return function(){var L=h;h=O;try{return R.apply(this,arguments)}finally{h=L}}}})(ih);oh.exports=ih;var Yg=oh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh=x,We=Yg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ah=new Set,xo={};function Fr(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(xo[e]=t,e=0;e<t.length;e++)ah.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=Object.prototype.hasOwnProperty,Xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cu={},ju={};function Zg(e){return Qa.call(ju,e)?!0:Qa.call(Cu,e)?!1:Xg.test(e)?ju[e]=!0:(Cu[e]=!0,!1)}function ev(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tv(e,t,r,n){if(t===null||typeof t>"u"||ev(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var mc=/[\-:]([a-z])/g;function gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mc,gc);xe[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mc,gc);xe[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mc,gc);xe[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function vc(e,t,r,n){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tv(t,r,o,n)&&(r=null),n||o===null?Zg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Mt=sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),ch=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),Ya=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),uh=Symbol.for("react.offscreen"),Tu=Symbol.iterator;function Wn(e){return e===null||typeof e!="object"?null:(e=Tu&&e[Tu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,oa;function eo(e){if(oa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);oa=t&&t[1]||""}return`
`+oa+e}var ia=!1;function sa(e,t){if(!e||ia)return"";ia=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ia=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?eo(e):""}function rv(e){switch(e.tag){case 5:return eo(e.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return e=sa(e.type,!1),e;case 11:return e=sa(e.type.render,!1),e;case 1:return e=sa(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case Ja:return"Profiler";case yc:return"StrictMode";case Ya:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ch:return(e.displayName||"Context")+".Consumer";case lh:return(e._context.displayName||"Context")+".Provider";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function nv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ov(e){var t=dh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=ov(e))}function fh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=dh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var r=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Pu(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=pr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hh(e,t){t=t.checked,t!=null&&vc(e,"checked",t,!1)}function tl(e,t){hh(e,t);var r=pr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rl(e,t.type,r):t.hasOwnProperty("defaultValue")&&rl(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function rl(e,t,r){(t!=="number"||Qi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var to=Array.isArray;function pn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+pr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ru(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(j(92));if(to(r)){if(1<r.length)throw Error(j(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pr(r)}}function ph(e,t){var r=pr(t.value),n=pr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,gh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(e){iv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),so[t]=so[e]})});function vh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||so.hasOwnProperty(e)&&so[e]?(""+t).trim():t+"px"}function yh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=vh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var sv=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function il(e,t){if(t){if(sv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,mn=null,gn=null;function Iu(e){if(e=Wo(e)){if(typeof ll!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Rs(t),ll(e.stateNode,e.type,t))}}function wh(e){mn?gn?gn.push(e):gn=[e]:mn=e}function xh(){if(mn){var e=mn,t=gn;if(gn=mn=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function kh(e,t){return e(t)}function _h(){}var aa=!1;function bh(e,t,r){if(aa)return e(t,r);aa=!0;try{return kh(e,t,r)}finally{aa=!1,(mn!==null||gn!==null)&&(_h(),xh())}}function _o(e,t){var r=e.stateNode;if(r===null)return null;var n=Rs(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(j(231,t,typeof r));return r}var cl=!1;if(Nt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){cl=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{cl=!1}function av(e,t,r,n,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var ao=!1,Ji=null,Yi=!1,ul=null,lv={onError:function(e){ao=!0,Ji=e}};function cv(e,t,r,n,o,i,s,a,l){ao=!1,Ji=null,av.apply(lv,arguments)}function uv(e,t,r,n,o,i,s,a,l){if(cv.apply(this,arguments),ao){if(ao){var c=Ji;ao=!1,Ji=null}else throw Error(j(198));Yi||(Yi=!0,ul=c)}}function Mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Sh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if(Mr(e)!==e)throw Error(j(188))}function dv(e){var t=e.alternate;if(!t){if(t=Mr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Ou(o),e;if(i===n)return Ou(o),t;i=i.sibling}throw Error(j(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?e:t}function Eh(e){return e=dv(e),e!==null?Ch(e):null}function Ch(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ch(e);if(t!==null)return t;e=e.sibling}return null}var jh=We.unstable_scheduleCallback,Lu=We.unstable_cancelCallback,fv=We.unstable_shouldYield,hv=We.unstable_requestPaint,le=We.unstable_now,pv=We.unstable_getCurrentPriorityLevel,_c=We.unstable_ImmediatePriority,Th=We.unstable_UserBlockingPriority,Xi=We.unstable_NormalPriority,mv=We.unstable_LowPriority,Ph=We.unstable_IdlePriority,js=null,Et=null;function gv(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(js,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:wv,vv=Math.log,yv=Math.LN2;function wv(e){return e>>>=0,e===0?32:31-(vv(e)/yv|0)|0}var ri=64,ni=4194304;function ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?n=ro(a):(i&=s,i!==0&&(n=ro(i)))}else s=r&~o,s!==0?n=ro(s):i!==0&&(n=ro(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ut(t),o=1<<r,n|=e[r],t&=~o;return n}function xv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ut(i),a=1<<s,l=o[s];l===-1?(!(a&r)||a&n)&&(o[s]=xv(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $h(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function la(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Bo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=r}function _v(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-ut(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function bc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ut(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var G=0;function Rh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,Sc,Ih,Oh,Lh,fl=!1,oi=[],ir=null,sr=null,ar=null,bo=new Map,So=new Map,er=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function Vn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Wo(t),t!==null&&Sc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sv(e,t,r,n,o){switch(t){case"focusin":return ir=Vn(ir,e,t,r,n,o),!0;case"dragenter":return sr=Vn(sr,e,t,r,n,o),!0;case"mouseover":return ar=Vn(ar,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return bo.set(i,Vn(bo.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,So.set(i,Vn(So.get(i)||null,e,t,r,n,o)),!0}return!1}function Nh(e){var t=Tr(e.target);if(t!==null){var r=Mr(t);if(r!==null){if(t=r.tag,t===13){if(t=Sh(r),t!==null){e.blockedOn=t,Lh(e.priority,function(){Ih(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);al=n,r.target.dispatchEvent(n),al=null}else return t=Wo(r),t!==null&&Sc(t),e.blockedOn=r,!1;t.shift()}return!0}function Uu(e,t,r){Ri(e)&&r.delete(t)}function Ev(){fl=!1,ir!==null&&Ri(ir)&&(ir=null),sr!==null&&Ri(sr)&&(sr=null),ar!==null&&Ri(ar)&&(ar=null),bo.forEach(Uu),So.forEach(Uu)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Ev)))}function Eo(e){function t(o){return Kn(o,e)}if(0<oi.length){Kn(oi[0],e);for(var r=1;r<oi.length;r++){var n=oi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ir!==null&&Kn(ir,e),sr!==null&&Kn(sr,e),ar!==null&&Kn(ar,e),bo.forEach(t),So.forEach(t),r=0;r<er.length;r++)n=er[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<er.length&&(r=er[0],r.blockedOn===null);)Nh(r),r.blockedOn===null&&er.shift()}var vn=Mt.ReactCurrentBatchConfig,es=!0;function Cv(e,t,r,n){var o=G,i=vn.transition;vn.transition=null;try{G=1,Ec(e,t,r,n)}finally{G=o,vn.transition=i}}function jv(e,t,r,n){var o=G,i=vn.transition;vn.transition=null;try{G=4,Ec(e,t,r,n)}finally{G=o,vn.transition=i}}function Ec(e,t,r,n){if(es){var o=hl(e,t,r,n);if(o===null)ya(e,t,n,ts,r),Nu(e,n);else if(Sv(o,e,t,r,n))n.stopPropagation();else if(Nu(e,n),t&4&&-1<bv.indexOf(e)){for(;o!==null;){var i=Wo(o);if(i!==null&&Ah(i),i=hl(e,t,r,n),i===null&&ya(e,t,n,ts,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else ya(e,t,n,null,r)}}var ts=null;function hl(e,t,r,n){if(ts=null,e=kc(n),e=Tr(e),e!==null)if(t=Mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Sh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ts=e,null}function Uh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pv()){case _c:return 1;case Th:return 4;case Xi:case mv:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var nr=null,Cc=null,Ai=null;function zh(){if(Ai)return Ai;var e,t=Cc,r=t.length,n,o="value"in nr?nr.value:nr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Ai=o.slice(e,1<n?1-n:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function zu(){return!1}function Ve(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:zu,this.isPropagationStopped=zu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=Ve(On),qo=ie({},On,{view:0,detail:0}),Tv=Ve(qo),ca,ua,Gn,Ts=ie({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(ca=e.screenX-Gn.screenX,ua=e.screenY-Gn.screenY):ua=ca=0,Gn=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Du=Ve(Ts),Pv=ie({},Ts,{dataTransfer:0}),$v=Ve(Pv),Rv=ie({},qo,{relatedTarget:0}),da=Ve(Rv),Av=ie({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Ve(Av),Ov=ie({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lv=Ve(Ov),Nv=ie({},On,{data:0}),Fu=Ve(Nv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dv[e])?!!t[e]:!1}function Tc(){return Fv}var Mv=ie({},qo,{key:function(e){if(e.key){var t=Uv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=Ve(Mv),qv=ie({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Ve(qv),Wv=ie({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Hv=Ve(Wv),Vv=ie({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Ve(Vv),Gv=ie({},Ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=Ve(Gv),Jv=[9,13,27,32],Pc=Nt&&"CompositionEvent"in window,lo=null;Nt&&"documentMode"in document&&(lo=document.documentMode);var Yv=Nt&&"TextEvent"in window&&!lo,Dh=Nt&&(!Pc||lo&&8<lo&&11>=lo),Bu=" ",qu=!1;function Fh(e,t){switch(e){case"keyup":return Jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function Xv(e,t){switch(e){case"compositionend":return Mh(t);case"keypress":return t.which!==32?null:(qu=!0,Bu);case"textInput":return e=t.data,e===Bu&&qu?null:e;default:return null}}function Zv(e,t){if(rn)return e==="compositionend"||!Pc&&Fh(e,t)?(e=zh(),Ai=Cc=nr=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dh&&t.locale!=="ko"?null:t.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!e0[e.type]:t==="textarea"}function Bh(e,t,r,n){wh(n),t=rs(t,"onChange"),0<t.length&&(r=new jc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var co=null,Co=null;function t0(e){Zh(e,0)}function Ps(e){var t=sn(e);if(fh(t))return e}function r0(e,t){if(e==="change")return t}var qh=!1;if(Nt){var fa;if(Nt){var ha="oninput"in document;if(!ha){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),ha=typeof Hu.oninput=="function"}fa=ha}else fa=!1;qh=fa&&(!document.documentMode||9<document.documentMode)}function Vu(){co&&(co.detachEvent("onpropertychange",Wh),Co=co=null)}function Wh(e){if(e.propertyName==="value"&&Ps(Co)){var t=[];Bh(t,Co,e,kc(e)),bh(t0,t)}}function n0(e,t,r){e==="focusin"?(Vu(),co=t,Co=r,co.attachEvent("onpropertychange",Wh)):e==="focusout"&&Vu()}function o0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(Co)}function i0(e,t){if(e==="click")return Ps(t)}function s0(e,t){if(e==="input"||e==="change")return Ps(t)}function a0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:a0;function jo(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Qa.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function Ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gu(e,t){var r=Ku(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ku(r)}}function Hh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vh(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Qi(e.document)}return t}function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function l0(e){var t=Vh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Hh(r.ownerDocument.documentElement,r)){if(n!==null&&$c(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Gu(r,i);var s=Gu(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var c0=Nt&&"documentMode"in document&&11>=document.documentMode,nn=null,pl=null,uo=null,ml=!1;function Qu(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ml||nn==null||nn!==Qi(n)||(n=nn,"selectionStart"in n&&$c(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),uo&&jo(uo,n)||(uo=n,n=rs(pl,"onSelect"),0<n.length&&(t=new jc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=nn)))}function si(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var on={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},pa={},Kh={};Nt&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function $s(e){if(pa[e])return pa[e];if(!on[e])return e;var t=on[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Kh)return pa[e]=t[r];return e}var Gh=$s("animationend"),Qh=$s("animationiteration"),Jh=$s("animationstart"),Yh=$s("transitionend"),Xh=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){Xh.set(e,t),Fr(t,[e])}for(var ma=0;ma<Ju.length;ma++){var ga=Ju[ma],u0=ga.toLowerCase(),d0=ga[0].toUpperCase()+ga.slice(1);gr(u0,"on"+d0)}gr(Gh,"onAnimationEnd");gr(Qh,"onAnimationIteration");gr(Jh,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Yh,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Yu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,uv(n,t,void 0,e),e.currentTarget=null}function Zh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Yu(o,a,c),i=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Yu(o,a,c),i=l}}}if(Yi)throw e=ul,Yi=!1,ul=null,e}function X(e,t){var r=t[xl];r===void 0&&(r=t[xl]=new Set);var n=e+"__bubble";r.has(n)||(ep(t,e,2,!1),r.add(n))}function va(e,t,r){var n=0;t&&(n|=4),ep(r,e,n,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function To(e){if(!e[ai]){e[ai]=!0,ah.forEach(function(r){r!=="selectionchange"&&(f0.has(r)||va(r,!1,e),va(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,va("selectionchange",!1,t))}}function ep(e,t,r,n){switch(Uh(t)){case 1:var o=Cv;break;case 4:o=jv;break;default:o=Ec}r=o.bind(null,t,r,e),o=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function ya(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Tr(a),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}a=a.parentNode}}n=n.return}bh(function(){var c=i,u=kc(r),d=[];e:{var h=Xh.get(e);if(h!==void 0){var v=jc,y=e;switch(e){case"keypress":if(Ii(r)===0)break e;case"keydown":case"keyup":v=Bv;break;case"focusin":y="focus",v=da;break;case"focusout":y="blur",v=da;break;case"beforeblur":case"afterblur":v=da;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hv;break;case Gh:case Qh:case Jh:v=Iv;break;case Yh:v=Kv;break;case"scroll":v=Tv;break;case"wheel":v=Qv;break;case"copy":case"cut":case"paste":v=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Mu}var w=(t&4)!==0,b=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var g=c,m;g!==null;){m=g;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=_o(g,p),k!=null&&w.push(Po(g,k,m)))),b)break;g=g.return}0<w.length&&(h=new v(h,y,null,r,u),d.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&r!==al&&(y=r.relatedTarget||r.fromElement)&&(Tr(y)||y[Ut]))break e;if((v||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=c,y=y?Tr(y):null,y!==null&&(b=Mr(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=Du,k="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Mu,k="onPointerLeave",p="onPointerEnter",g="pointer"),b=v==null?h:sn(v),m=y==null?h:sn(y),h=new w(k,g+"leave",v,r,u),h.target=b,h.relatedTarget=m,k=null,Tr(u)===c&&(w=new w(p,g+"enter",y,r,u),w.target=m,w.relatedTarget=b,k=w),b=k,v&&y)t:{for(w=v,p=y,g=0,m=w;m;m=Wr(m))g++;for(m=0,k=p;k;k=Wr(k))m++;for(;0<g-m;)w=Wr(w),g--;for(;0<m-g;)p=Wr(p),m--;for(;g--;){if(w===p||p!==null&&w===p.alternate)break t;w=Wr(w),p=Wr(p)}w=null}else w=null;v!==null&&Xu(d,h,v,w,!1),y!==null&&b!==null&&Xu(d,b,y,w,!0)}}e:{if(h=c?sn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=r0;else if(Wu(h))if(qh)E=s0;else{E=o0;var C=n0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=i0);if(E&&(E=E(e,c))){Bh(d,E,r,u);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&rl(h,"number",h.value)}switch(C=c?sn(c):window,e){case"focusin":(Wu(C)||C.contentEditable==="true")&&(nn=C,pl=c,uo=null);break;case"focusout":uo=pl=nn=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Qu(d,r,u);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":Qu(d,r,u)}var S;if(Pc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else rn?Fh(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Dh&&r.locale!=="ko"&&(rn||P!=="onCompositionStart"?P==="onCompositionEnd"&&rn&&(S=zh()):(nr=u,Cc="value"in nr?nr.value:nr.textContent,rn=!0)),C=rs(c,P),0<C.length&&(P=new Fu(P,e,null,r,u),d.push({event:P,listeners:C}),S?P.data=S:(S=Mh(r),S!==null&&(P.data=S)))),(S=Yv?Xv(e,r):Zv(e,r))&&(c=rs(c,"onBeforeInput"),0<c.length&&(u=new Fu("onBeforeInput","beforeinput",null,r,u),d.push({event:u,listeners:c}),u.data=S))}Zh(d,t)})}function Po(e,t,r){return{instance:e,listener:t,currentTarget:r}}function rs(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=_o(e,r),i!=null&&n.unshift(Po(e,i,o)),i=_o(e,t),i!=null&&n.push(Po(e,i,o))),e=e.return}return n}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,c=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&c!==null&&(a=c,o?(l=_o(r,i),l!=null&&s.unshift(Po(r,l,a))):o||(l=_o(r,i),l!=null&&s.push(Po(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var h0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Zu(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(p0,"")}function li(e,t,r){if(t=Zu(t),Zu(e)!==t&&r)throw Error(j(425))}function ns(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(v0)}:wl;function v0(e){setTimeout(function(){throw e})}function wa(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Eo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Eo(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ln,$o="__reactProps$"+Ln,Ut="__reactContainer$"+Ln,xl="__reactEvents$"+Ln,y0="__reactListeners$"+Ln,w0="__reactHandles$"+Ln;function Tr(e){var t=e[bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ut]||r[bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=td(e);e!==null;){if(r=e[bt])return r;e=td(e)}return t}e=r,r=e.parentNode}return null}function Wo(e){return e=e[bt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Rs(e){return e[$o]||null}var kl=[],an=-1;function vr(e){return{current:e}}function ee(e){0>an||(e.current=kl[an],kl[an]=null,an--)}function Y(e,t){an++,kl[an]=e.current,e.current=t}var mr={},Ce=vr(mr),Ne=vr(!1),Lr=mr;function kn(e,t){var r=e.type.contextTypes;if(!r)return mr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function os(){ee(Ne),ee(Ce)}function rd(e,t,r){if(Ce.current!==mr)throw Error(j(168));Y(Ce,t),Y(Ne,r)}function tp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(j(108,nv(e)||"Unknown",o));return ie({},r,n)}function is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Lr=Ce.current,Y(Ce,e),Y(Ne,Ne.current),!0}function nd(e,t,r){var n=e.stateNode;if(!n)throw Error(j(169));r?(e=tp(e,t,Lr),n.__reactInternalMemoizedMergedChildContext=e,ee(Ne),ee(Ce),Y(Ce,e)):ee(Ne),Y(Ne,r)}var Rt=null,As=!1,xa=!1;function rp(e){Rt===null?Rt=[e]:Rt.push(e)}function x0(e){As=!0,rp(e)}function yr(){if(!xa&&Rt!==null){xa=!0;var e=0,t=G;try{var r=Rt;for(G=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Rt=null,As=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),jh(_c,yr),o}finally{G=t,xa=!1}}return null}var ln=[],cn=0,ss=null,as=0,Qe=[],Je=0,Nr=null,At=1,It="";function br(e,t){ln[cn++]=as,ln[cn++]=ss,ss=e,as=t}function np(e,t,r){Qe[Je++]=At,Qe[Je++]=It,Qe[Je++]=Nr,Nr=e;var n=At;e=It;var o=32-ut(n)-1;n&=~(1<<o),r+=1;var i=32-ut(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,At=1<<32-ut(t)+o|r<<o|n,It=i+e}else At=1<<i|r<<o|n,It=e}function Rc(e){e.return!==null&&(br(e,1),np(e,1,0))}function Ac(e){for(;e===ss;)ss=ln[--cn],ln[cn]=null,as=ln[--cn],ln[cn]=null;for(;e===Nr;)Nr=Qe[--Je],Qe[Je]=null,It=Qe[--Je],Qe[Je]=null,At=Qe[--Je],Qe[Je]=null}var qe=null,Be=null,te=!1,ct=null;function op(e,t){var r=Ye(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function od(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Be=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Nr!==null?{id:At,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ye(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Be=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(te){var t=Be;if(t){var r=t;if(!od(e,t)){if(_l(e))throw Error(j(418));t=lr(r.nextSibling);var n=qe;t&&od(e,t)?op(n,r):(e.flags=e.flags&-4097|2,te=!1,qe=e)}}else{if(_l(e))throw Error(j(418));e.flags=e.flags&-4097|2,te=!1,qe=e}}}function id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ci(e){if(e!==qe)return!1;if(!te)return id(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Be)){if(_l(e))throw ip(),Error(j(418));for(;t;)op(e,t),t=lr(t.nextSibling)}if(id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Be=lr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=qe?lr(e.stateNode.nextSibling):null;return!0}function ip(){for(var e=Be;e;)e=lr(e.nextSibling)}function _n(){Be=qe=null,te=!1}function Ic(e){ct===null?ct=[e]:ct.push(e)}var k0=Mt.ReactCurrentBatchConfig;function st(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ls=vr(null),cs=null,un=null,Oc=null;function Lc(){Oc=un=cs=null}function Nc(e){var t=ls.current;ee(ls),e._currentValue=t}function Sl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function yn(e,t){cs=e,Oc=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(Oc!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(cs===null)throw Error(j(308));un=e,cs.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var Pr=null;function Uc(e){Pr===null?Pr=[e]:Pr.push(e)}function sp(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Uc(t)):(r.next=o.next,o.next=r),t.interleaved=r,zt(e,n)}function zt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Zt=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,q&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,zt(e,r)}return o=n.interleaved,o===null?(t.next=t,Uc(n)):(t.next=o.next,o.next=t),n.interleaved=t,zt(e,r)}function Oi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bc(e,r)}}function sd(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function us(e,t,r,n){var o=e.updateQueue;Zt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,u=c=l=null,a=i;do{var h=a.lane,v=a.eventTime;if((n&h)===h){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(h=t,v=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=ie({},d,h);break e;case 2:Zt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=d):u=u.next=v,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(u===null&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zr|=s,e.lanes=s,e.memoizedState=d}}function ad(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(j(191,o));o.call(n)}}}var lp=new sh.Component().refs;function El(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ie({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Is={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Pe(),o=dr(e),i=Ot(n,o);i.payload=t,r!=null&&(i.callback=r),t=cr(e,i,o),t!==null&&(dt(t,e,o,n),Oi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Pe(),o=dr(e),i=Ot(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=cr(e,i,o),t!==null&&(dt(t,e,o,n),Oi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Pe(),n=dr(e),o=Ot(r,n);o.tag=2,t!=null&&(o.callback=t),t=cr(e,o,n),t!==null&&(dt(t,e,n,r),Oi(t,e,n))}};function ld(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!jo(r,n)||!jo(o,i):!0}function cp(e,t,r){var n=!1,o=mr,i=t.contextType;return typeof i=="object"&&i!==null?i=et(i):(o=Ue(t)?Lr:Ce.current,n=t.contextTypes,i=(n=n!=null)?kn(e,o):mr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Is,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function cd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function Cl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=lp,zc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=et(i):(i=Ue(t)?Lr:Ce.current,o.context=kn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(El(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Is.enqueueReplaceState(o,o.state,null),us(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===lp&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ud(e){var t=e._init;return t(e._payload)}function up(e){function t(p,g){if(e){var m=p.deletions;m===null?(p.deletions=[g],p.flags|=16):m.push(g)}}function r(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function n(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function o(p,g){return p=fr(p,g),p.index=0,p.sibling=null,p}function i(p,g,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<g?(p.flags|=2,g):m):(p.flags|=2,g)):(p.flags|=1048576,g)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,g,m,k){return g===null||g.tag!==6?(g=ja(m,p.mode,k),g.return=p,g):(g=o(g,m),g.return=p,g)}function l(p,g,m,k){var E=m.type;return E===tn?u(p,g,m.props.children,k,m.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xt&&ud(E)===g.type)?(k=o(g,m.props),k.ref=Qn(p,g,m),k.return=p,k):(k=Fi(m.type,m.key,m.props,null,p.mode,k),k.ref=Qn(p,g,m),k.return=p,k)}function c(p,g,m,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=Ta(m,p.mode,k),g.return=p,g):(g=o(g,m.children||[]),g.return=p,g)}function u(p,g,m,k,E){return g===null||g.tag!==7?(g=Ir(m,p.mode,k,E),g.return=p,g):(g=o(g,m),g.return=p,g)}function d(p,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ja(""+g,p.mode,m),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zo:return m=Fi(g.type,g.key,g.props,null,p.mode,m),m.ref=Qn(p,null,g),m.return=p,m;case en:return g=Ta(g,p.mode,m),g.return=p,g;case Xt:var k=g._init;return d(p,k(g._payload),m)}if(to(g)||Wn(g))return g=Ir(g,p.mode,m,null),g.return=p,g;ui(p,g)}return null}function h(p,g,m,k){var E=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,g,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Zo:return m.key===E?l(p,g,m,k):null;case en:return m.key===E?c(p,g,m,k):null;case Xt:return E=m._init,h(p,g,E(m._payload),k)}if(to(m)||Wn(m))return E!==null?null:u(p,g,m,k,null);ui(p,m)}return null}function v(p,g,m,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,a(g,p,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Zo:return p=p.get(k.key===null?m:k.key)||null,l(g,p,k,E);case en:return p=p.get(k.key===null?m:k.key)||null,c(g,p,k,E);case Xt:var C=k._init;return v(p,g,m,C(k._payload),E)}if(to(k)||Wn(k))return p=p.get(m)||null,u(g,p,k,E,null);ui(g,k)}return null}function y(p,g,m,k){for(var E=null,C=null,S=g,P=g=0,I=null;S!==null&&P<m.length;P++){S.index>P?(I=S,S=null):I=S.sibling;var $=h(p,S,m[P],k);if($===null){S===null&&(S=I);break}e&&S&&$.alternate===null&&t(p,S),g=i($,g,P),C===null?E=$:C.sibling=$,C=$,S=I}if(P===m.length)return r(p,S),te&&br(p,P),E;if(S===null){for(;P<m.length;P++)S=d(p,m[P],k),S!==null&&(g=i(S,g,P),C===null?E=S:C.sibling=S,C=S);return te&&br(p,P),E}for(S=n(p,S);P<m.length;P++)I=v(S,p,P,m[P],k),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?P:I.key),g=i(I,g,P),C===null?E=I:C.sibling=I,C=I);return e&&S.forEach(function(Q){return t(p,Q)}),te&&br(p,P),E}function w(p,g,m,k){var E=Wn(m);if(typeof E!="function")throw Error(j(150));if(m=E.call(m),m==null)throw Error(j(151));for(var C=E=null,S=g,P=g=0,I=null,$=m.next();S!==null&&!$.done;P++,$=m.next()){S.index>P?(I=S,S=null):I=S.sibling;var Q=h(p,S,$.value,k);if(Q===null){S===null&&(S=I);break}e&&S&&Q.alternate===null&&t(p,S),g=i(Q,g,P),C===null?E=Q:C.sibling=Q,C=Q,S=I}if($.done)return r(p,S),te&&br(p,P),E;if(S===null){for(;!$.done;P++,$=m.next())$=d(p,$.value,k),$!==null&&(g=i($,g,P),C===null?E=$:C.sibling=$,C=$);return te&&br(p,P),E}for(S=n(p,S);!$.done;P++,$=m.next())$=v(S,p,P,$.value,k),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?P:$.key),g=i($,g,P),C===null?E=$:C.sibling=$,C=$);return e&&S.forEach(function(B){return t(p,B)}),te&&br(p,P),E}function b(p,g,m,k){if(typeof m=="object"&&m!==null&&m.type===tn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Zo:e:{for(var E=m.key,C=g;C!==null;){if(C.key===E){if(E=m.type,E===tn){if(C.tag===7){r(p,C.sibling),g=o(C,m.props.children),g.return=p,p=g;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xt&&ud(E)===C.type){r(p,C.sibling),g=o(C,m.props),g.ref=Qn(p,C,m),g.return=p,p=g;break e}r(p,C);break}else t(p,C);C=C.sibling}m.type===tn?(g=Ir(m.props.children,p.mode,k,m.key),g.return=p,p=g):(k=Fi(m.type,m.key,m.props,null,p.mode,k),k.ref=Qn(p,g,m),k.return=p,p=k)}return s(p);case en:e:{for(C=m.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){r(p,g.sibling),g=o(g,m.children||[]),g.return=p,p=g;break e}else{r(p,g);break}else t(p,g);g=g.sibling}g=Ta(m,p.mode,k),g.return=p,p=g}return s(p);case Xt:return C=m._init,b(p,g,C(m._payload),k)}if(to(m))return y(p,g,m,k);if(Wn(m))return w(p,g,m,k);ui(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(r(p,g.sibling),g=o(g,m),g.return=p,p=g):(r(p,g),g=ja(m,p.mode,k),g.return=p,p=g),s(p)):r(p,g)}return b}var bn=up(!0),dp=up(!1),Ho={},Ct=vr(Ho),Ro=vr(Ho),Ao=vr(Ho);function $r(e){if(e===Ho)throw Error(j(174));return e}function Dc(e,t){switch(Y(Ao,t),Y(Ro,e),Y(Ct,Ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}ee(Ct),Y(Ct,t)}function Sn(){ee(Ct),ee(Ro),ee(Ao)}function fp(e){$r(Ao.current);var t=$r(Ct.current),r=ol(t,e.type);t!==r&&(Y(Ro,e),Y(Ct,r))}function Fc(e){Ro.current===e&&(ee(Ct),ee(Ro))}var ne=vr(0);function ds(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ka=[];function Mc(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var Li=Mt.ReactCurrentDispatcher,_a=Mt.ReactCurrentBatchConfig,Ur=0,oe=null,he=null,me=null,fs=!1,fo=!1,Io=0,_0=0;function _e(){throw Error(j(321))}function Bc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ht(e[r],t[r]))return!1;return!0}function qc(e,t,r,n,o,i){if(Ur=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?C0:j0,e=r(n,o),fo){i=0;do{if(fo=!1,Io=0,25<=i)throw Error(j(301));i+=1,me=he=null,t.updateQueue=null,Li.current=T0,e=r(n,o)}while(fo)}if(Li.current=hs,t=he!==null&&he.next!==null,Ur=0,me=he=oe=null,fs=!1,t)throw Error(j(300));return e}function Wc(){var e=Io!==0;return Io=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function tt(){if(he===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,he=e;else{if(e===null)throw Error(j(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function Oo(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=tt(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=he,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((Ur&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=n):l=l.next=d,oe.lanes|=u,zr|=u}c=c.next}while(c!==null&&c!==i);l===null?s=n:l.next=a,ht(n,t.memoizedState)||(Le=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,zr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Sa(e){var t=tt(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ht(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function hp(){}function pp(e,t){var r=oe,n=tt(),o=t(),i=!ht(n.memoizedState,o);if(i&&(n.memoizedState=o,Le=!0),n=n.queue,Hc(vp.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(r.flags|=2048,Lo(9,gp.bind(null,r,n,o,t),void 0,null),ve===null)throw Error(j(349));Ur&30||mp(r,t,o)}return o}function mp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function gp(e,t,r,n){t.value=r,t.getSnapshot=n,yp(t)&&wp(e)}function vp(e,t,r){return r(function(){yp(t)&&wp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ht(e,r)}catch{return!0}}function wp(e){var t=zt(e,1);t!==null&&dt(t,e,1,-1)}function dd(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t.queue=e,e=e.dispatch=E0.bind(null,oe,e),[t.memoizedState,e]}function Lo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function xp(){return tt().memoizedState}function Ni(e,t,r,n){var o=xt();oe.flags|=e,o.memoizedState=Lo(1|t,r,void 0,n===void 0?null:n)}function Os(e,t,r,n){var o=tt();n=n===void 0?null:n;var i=void 0;if(he!==null){var s=he.memoizedState;if(i=s.destroy,n!==null&&Bc(n,s.deps)){o.memoizedState=Lo(t,r,i,n);return}}oe.flags|=e,o.memoizedState=Lo(1|t,r,i,n)}function fd(e,t){return Ni(8390656,8,e,t)}function Hc(e,t){return Os(2048,8,e,t)}function kp(e,t){return Os(4,2,e,t)}function _p(e,t){return Os(4,4,e,t)}function bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,r){return r=r!=null?r.concat([e]):null,Os(4,4,bp.bind(null,t,e),r)}function Vc(){}function Ep(e,t){var r=tt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Bc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Cp(e,t){var r=tt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Bc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function jp(e,t,r){return Ur&21?(ht(r,t)||(r=$h(),oe.lanes|=r,zr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=r)}function b0(e,t){var r=G;G=r!==0&&4>r?r:4,e(!0);var n=_a.transition;_a.transition={};try{e(!1),t()}finally{G=r,_a.transition=n}}function Tp(){return tt().memoizedState}function S0(e,t,r){var n=dr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Pp(e))$p(t,r);else if(r=sp(e,t,r,n),r!==null){var o=Pe();dt(r,e,n,o),Rp(r,t,n)}}function E0(e,t,r){var n=dr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Pp(e))$p(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,r);if(o.hasEagerState=!0,o.eagerState=a,ht(a,s)){var l=t.interleaved;l===null?(o.next=o,Uc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=sp(e,t,o,n),r!==null&&(o=Pe(),dt(r,e,n,o),Rp(r,t,n))}}function Pp(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function $p(e,t){fo=fs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Rp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bc(e,r)}}var hs={readContext:et,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},C0={readContext:et,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:fd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ni(4194308,4,bp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var r=xt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=xt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=S0.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:dd,useDebugValue:Vc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=dd(!1),t=e[0];return e=b0.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oe,o=xt();if(te){if(r===void 0)throw Error(j(407));r=r()}else{if(r=t(),ve===null)throw Error(j(349));Ur&30||mp(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,fd(vp.bind(null,n,i,e),[e]),n.flags|=2048,Lo(9,gp.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=xt(),t=ve.identifierPrefix;if(te){var r=It,n=At;r=(n&~(1<<32-ut(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Io++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=_0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},j0={readContext:et,useCallback:Ep,useContext:et,useEffect:Hc,useImperativeHandle:Sp,useInsertionEffect:kp,useLayoutEffect:_p,useMemo:Cp,useReducer:ba,useRef:xp,useState:function(){return ba(Oo)},useDebugValue:Vc,useDeferredValue:function(e){var t=tt();return jp(t,he.memoizedState,e)},useTransition:function(){var e=ba(Oo)[0],t=tt().memoizedState;return[e,t]},useMutableSource:hp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1},T0={readContext:et,useCallback:Ep,useContext:et,useEffect:Hc,useImperativeHandle:Sp,useInsertionEffect:kp,useLayoutEffect:_p,useMemo:Cp,useReducer:Sa,useRef:xp,useState:function(){return Sa(Oo)},useDebugValue:Vc,useDeferredValue:function(e){var t=tt();return he===null?t.memoizedState=e:jp(t,he.memoizedState,e)},useTransition:function(){var e=Sa(Oo)[0],t=tt().memoizedState;return[e,t]},useMutableSource:hp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1};function En(e,t){try{var r="",n=t;do r+=rv(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ea(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function Ap(e,t,r){r=Ot(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ms||(ms=!0,Ul=n),jl(e,t)},r}function Ip(e,t,r){r=Ot(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){jl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){jl(e,t),typeof n!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function hd(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new P0;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=q0.bind(null,e,t,r),t.then(e,e))}function pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function md(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ot(-1,1),t.tag=2,cr(r,t,1))),r.lanes|=1),e)}var $0=Mt.ReactCurrentOwner,Le=!1;function Te(e,t,r,n){t.child=e===null?dp(t,null,r,n):bn(t,e.child,r,n)}function gd(e,t,r,n,o){r=r.render;var i=t.ref;return yn(t,o),n=qc(e,t,r,n,i,o),r=Wc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(te&&r&&Rc(t),t.flags|=1,Te(e,t,n,o),t.child)}function vd(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!eu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Op(e,t,i,n,o)):(e=Fi(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:jo,r(s,n)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=fr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Op(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(jo(i,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return Tl(e,t,r,n,o)}function Lp(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(fn,Me),Me|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(fn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Y(fn,Me),Me|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Y(fn,Me),Me|=n;return Te(e,t,o,r),t.child}function Np(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,r,n,o){var i=Ue(r)?Lr:Ce.current;return i=kn(t,i),yn(t,o),r=qc(e,t,r,n,i,o),n=Wc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(te&&n&&Rc(t),t.flags|=1,Te(e,t,r,o),t.child)}function yd(e,t,r,n,o){if(Ue(r)){var i=!0;is(t)}else i=!1;if(yn(t,o),t.stateNode===null)Ui(e,t),cp(t,r,n),Cl(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=et(c):(c=Ue(r)?Lr:Ce.current,c=kn(t,c));var u=r.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==c)&&cd(t,s,n,c),Zt=!1;var h=t.memoizedState;s.state=h,us(t,n,s,o),l=t.memoizedState,a!==n||h!==l||Ne.current||Zt?(typeof u=="function"&&(El(t,r,u,n),l=t.memoizedState),(a=Zt||ld(t,r,a,n,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=c,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,ap(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:st(t.type,a),s.props=c,d=t.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=et(l):(l=Ue(r)?Lr:Ce.current,l=kn(t,l));var v=r.getDerivedStateFromProps;(u=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&cd(t,s,n,l),Zt=!1,h=t.memoizedState,s.state=h,us(t,n,s,o);var y=t.memoizedState;a!==d||h!==y||Ne.current||Zt?(typeof v=="function"&&(El(t,r,v,n),y=t.memoizedState),(c=Zt||ld(t,r,c,n,h,y,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),s.props=n,s.state=y,s.context=l,n=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Pl(e,t,r,n,i,o)}function Pl(e,t,r,n,o,i){Np(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&nd(t,r,!1),Dt(e,t,i);n=t.stateNode,$0.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=bn(t,e.child,null,i),t.child=bn(t,null,a,i)):Te(e,t,a,i),t.memoizedState=n.state,o&&nd(t,r,!0),t.child}function Up(e){var t=e.stateNode;t.pendingContext?rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rd(e,t.context,!1),Dc(e,t.containerInfo)}function wd(e,t,r,n,o){return _n(),Ic(o),t.flags|=256,Te(e,t,r,n),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zp(e,t,r){var n=t.pendingProps,o=ne.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(ne,o&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Us(s,n,0,null),e=Ir(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Rl(r),t.memoizedState=$l,e):Kc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return R0(e,t,s,n,a,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=fr(o,l),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=fr(a,i):(i=Ir(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?Rl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=$l,n}return i=e.child,e=i.sibling,n=fr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Kc(e,t){return t=Us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,r,n){return n!==null&&Ic(n),bn(t,e.child,null,r),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function R0(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Ea(Error(j(422))),di(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Us({mode:"visible",children:n.children},o,0,null),i=Ir(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&bn(t,e.child,null,s),t.child.memoizedState=Rl(s),t.memoizedState=$l,i);if(!(t.mode&1))return di(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(j(419)),n=Ea(i,n,void 0),di(e,t,s,n)}if(a=(s&e.childLanes)!==0,Le||a){if(n=ve,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,zt(e,o),dt(n,e,o,-1))}return Zc(),n=Ea(Error(j(421))),di(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=W0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Be=lr(o.nextSibling),qe=t,te=!0,ct=null,e!==null&&(Qe[Je++]=At,Qe[Je++]=It,Qe[Je++]=Nr,At=e.id,It=e.overflow,Nr=t),t=Kc(t,n.children),t.flags|=4096,t)}function xd(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Sl(e.return,t,r)}function Ca(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Dp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Te(e,t,n.children,r),n=ne.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,r,t);else if(e.tag===19)xd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Y(ne,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&ds(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ca(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ds(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ca(t,!0,r,null,i);break;case"together":Ca(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),zr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,r=fr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function A0(e,t,r){switch(t.tag){case 3:Up(t),_n();break;case 5:fp(t);break;case 1:Ue(t.type)&&is(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Y(ls,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Y(ne,ne.current&1),t.flags|=128,null):r&t.child.childLanes?zp(e,t,r):(Y(ne,ne.current&1),e=Dt(e,t,r),e!==null?e.sibling:null);Y(ne,ne.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Dp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(ne,ne.current),n)break;return null;case 22:case 23:return t.lanes=0,Lp(e,t,r)}return Dt(e,t,r)}var Fp,Al,Mp,Bp;Fp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Al=function(){};Mp=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,$r(Ct.current);var i=null;switch(r){case"input":o=el(e,o),n=el(e,n),i=[];break;case"select":o=ie({},o,{value:void 0}),n=ie({},n,{value:void 0}),i=[];break;case"textarea":o=nl(e,o),n=nl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ns)}il(r,n);var s;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var l=n[c];if(a=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Bp=function(e,t,r,n){r!==n&&(t.flags|=4)};function Jn(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function I0(e,t,r){var n=t.pendingProps;switch(Ac(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ue(t.type)&&os(),be(t),null;case 3:return n=t.stateNode,Sn(),ee(Ne),ee(Ce),Mc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Fl(ct),ct=null))),Al(e,t),be(t),null;case 5:Fc(t);var o=$r(Ao.current);if(r=t.type,e!==null&&t.stateNode!=null)Mp(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(j(166));return be(t),null}if(e=$r(Ct.current),ci(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[bt]=t,n[$o]=i,e=(t.mode&1)!==0,r){case"dialog":X("cancel",n),X("close",n);break;case"iframe":case"object":case"embed":X("load",n);break;case"video":case"audio":for(o=0;o<no.length;o++)X(no[o],n);break;case"source":X("error",n);break;case"img":case"image":case"link":X("error",n),X("load",n);break;case"details":X("toggle",n);break;case"input":Pu(n,i),X("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},X("invalid",n);break;case"textarea":Ru(n,i),X("invalid",n)}il(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&li(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&li(n.textContent,a,e),o=["children",""+a]):xo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",n)}switch(r){case"input":ei(n),$u(n,i,!0);break;case"textarea":ei(n),Au(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ns)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[bt]=t,e[$o]=n,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(s=sl(r,n),r){case"dialog":X("cancel",e),X("close",e),o=n;break;case"iframe":case"object":case"embed":X("load",e),o=n;break;case"video":case"audio":for(o=0;o<no.length;o++)X(no[o],e);o=n;break;case"source":X("error",e),o=n;break;case"img":case"image":case"link":X("error",e),X("load",e),o=n;break;case"details":X("toggle",e),o=n;break;case"input":Pu(e,n),o=el(e,n),X("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=ie({},n,{value:void 0}),X("invalid",e);break;case"textarea":Ru(e,n),o=nl(e,n),X("invalid",e);break;default:o=n}il(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?yh(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gh(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ko(e,l):typeof l=="number"&&ko(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&X("scroll",e):l!=null&&vc(e,i,l,s))}switch(r){case"input":ei(e),$u(e,n,!1);break;case"textarea":ei(e),Au(e);break;case"option":n.value!=null&&e.setAttribute("value",""+pr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?pn(e,!!n.multiple,i,!1):n.defaultValue!=null&&pn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ns)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Bp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(j(166));if(r=$r(Ao.current),$r(Ct.current),ci(t)){if(n=t.stateNode,r=t.memoizedProps,n[bt]=t,(i=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:li(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[bt]=t,t.stateNode=n}return be(t),null;case 13:if(ee(ne),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Be!==null&&t.mode&1&&!(t.flags&128))ip(),_n(),t.flags|=98560,i=!1;else if(i=ci(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[bt]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else ct!==null&&(Fl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?pe===0&&(pe=3):Zc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Sn(),Al(e,t),e===null&&To(t.stateNode.containerInfo),be(t),null;case 10:return Nc(t.type._context),be(t),null;case 17:return Ue(t.type)&&os(),be(t),null;case 19:if(ee(ne),i=t.memoizedState,i===null)return be(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Jn(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ds(e),s!==null){for(t.flags|=128,Jn(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Y(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>Cn&&(t.flags|=128,n=!0,Jn(i,!1),t.lanes=4194304)}else{if(!n)if(e=ds(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Jn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!te)return be(t),null}else 2*le()-i.renderingStartTime>Cn&&r!==1073741824&&(t.flags|=128,n=!0,Jn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,r=ne.current,Y(ne,n?r&1|2:r&1),t):(be(t),null);case 22:case 23:return Xc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Me&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function O0(e,t){switch(Ac(t),t.tag){case 1:return Ue(t.type)&&os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(),ee(Ne),ee(Ce),Mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fc(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return Sn(),null;case 10:return Nc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var fi=!1,Se=!1,L0=typeof WeakSet=="function"?WeakSet:Set,A=null;function dn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ae(e,t,n)}else r.current=null}function Il(e,t,r){try{r()}catch(n){ae(e,t,n)}}var kd=!1;function N0(e,t){if(gl=es,e=Vh(),$c(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var v;d!==r||o!==0&&d.nodeType!==3||(a=s+o),d!==i||n!==0&&d.nodeType!==3||(l=s+n),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break t;if(h===r&&++c===o&&(a=s),h===i&&++u===n&&(l=s),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(vl={focusedElem:e,selectionRange:r},es=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,b=y.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:st(t.type,w),b);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){ae(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=kd,kd=!1,y}function ho(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Il(t,r,i)}o=o.next}while(o!==n)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ol(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function qp(e){var t=e.alternate;t!==null&&(e.alternate=null,qp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[$o],delete t[xl],delete t[y0],delete t[w0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function _d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ns));else if(n!==4&&(e=e.child,e!==null))for(Ll(e,t,r),e=e.sibling;e!==null;)Ll(e,t,r),e=e.sibling}function Nl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Nl(e,t,r),e=e.sibling;e!==null;)Nl(e,t,r),e=e.sibling}var ye=null,at=!1;function Ht(e,t,r){for(r=r.child;r!==null;)Hp(e,t,r),r=r.sibling}function Hp(e,t,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(js,r)}catch{}switch(r.tag){case 5:Se||dn(r,t);case 6:var n=ye,o=at;ye=null,Ht(e,t,r),ye=n,at=o,ye!==null&&(at?(e=ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ye.removeChild(r.stateNode));break;case 18:ye!==null&&(at?(e=ye,r=r.stateNode,e.nodeType===8?wa(e.parentNode,r):e.nodeType===1&&wa(e,r),Eo(e)):wa(ye,r.stateNode));break;case 4:n=ye,o=at,ye=r.stateNode.containerInfo,at=!0,Ht(e,t,r),ye=n,at=o;break;case 0:case 11:case 14:case 15:if(!Se&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Il(r,t,s),o=o.next}while(o!==n)}Ht(e,t,r);break;case 1:if(!Se&&(dn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){ae(r,t,a)}Ht(e,t,r);break;case 21:Ht(e,t,r);break;case 22:r.mode&1?(Se=(n=Se)||r.memoizedState!==null,Ht(e,t,r),Se=n):Ht(e,t,r);break;default:Ht(e,t,r)}}function bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new L0),t.forEach(function(n){var o=H0.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function ot(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,at=!1;break e;case 3:ye=a.stateNode.containerInfo,at=!0;break e;case 4:ye=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(ye===null)throw Error(j(160));Hp(i,s,o),ye=null,at=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ae(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling}function Vp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),wt(e),n&4){try{ho(3,e,e.return),Ls(3,e)}catch(w){ae(e,e.return,w)}try{ho(5,e,e.return)}catch(w){ae(e,e.return,w)}}break;case 1:ot(t,e),wt(e),n&512&&r!==null&&dn(r,r.return);break;case 5:if(ot(t,e),wt(e),n&512&&r!==null&&dn(r,r.return),e.flags&32){var o=e.stateNode;try{ko(o,"")}catch(w){ae(e,e.return,w)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&hh(o,i),sl(a,s);var c=sl(a,i);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?yh(o,d):u==="dangerouslySetInnerHTML"?gh(o,d):u==="children"?ko(o,d):vc(o,u,d,c)}switch(a){case"input":tl(o,i);break;case"textarea":ph(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?pn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?pn(o,!!i.multiple,i.defaultValue,!0):pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[$o]=i}catch(w){ae(e,e.return,w)}}break;case 6:if(ot(t,e),wt(e),n&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ae(e,e.return,w)}}break;case 3:if(ot(t,e),wt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Eo(t.containerInfo)}catch(w){ae(e,e.return,w)}break;case 4:ot(t,e),wt(e);break;case 13:ot(t,e),wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Jc=le())),n&4&&bd(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Se=(c=Se)||u,ot(t,e),Se=c):ot(t,e),wt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(d=A=u;A!==null;){switch(h=A,v=h.child,h.tag){case 0:case 11:case 14:case 15:ho(4,h,h.return);break;case 1:dn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ae(n,r,w)}}break;case 5:dn(h,h.return);break;case 22:if(h.memoizedState!==null){Ed(d);continue}}v!==null?(v.return=h,A=v):Ed(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vh("display",s))}catch(w){ae(e,e.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){ae(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ot(t,e),wt(e),n&4&&bd(e);break;case 21:break;default:ot(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Wp(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(ko(o,""),n.flags&=-33);var i=_d(e);Nl(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,a=_d(e);Ll(e,a,s);break;default:throw Error(j(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function U0(e,t,r){A=e,Kp(e)}function Kp(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||fi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Se;a=fi;var c=Se;if(fi=s,(Se=l)&&!c)for(A=o;A!==null;)s=A,l=s.child,s.tag===22&&s.memoizedState!==null?Cd(o):l!==null?(l.return=s,A=l):Cd(o);for(;i!==null;)A=i,Kp(i),i=i.sibling;A=o,fi=a,Se=c}Sd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):Sd(e)}}function Sd(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Ls(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Se)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:st(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ad(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ad(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Eo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Se||t.flags&512&&Ol(t)}catch(h){ae(t,t.return,h)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Ed(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function Cd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ls(4,t)}catch(l){ae(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){ae(t,o,l)}}var i=t.return;try{Ol(t)}catch(l){ae(t,i,l)}break;case 5:var s=t.return;try{Ol(t)}catch(l){ae(t,s,l)}}}catch(l){ae(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var z0=Math.ceil,ps=Mt.ReactCurrentDispatcher,Gc=Mt.ReactCurrentOwner,Xe=Mt.ReactCurrentBatchConfig,q=0,ve=null,ue=null,we=0,Me=0,fn=vr(0),pe=0,No=null,zr=0,Ns=0,Qc=0,po=null,Ae=null,Jc=0,Cn=1/0,Tt=null,ms=!1,Ul=null,ur=null,hi=!1,or=null,gs=0,mo=0,zl=null,zi=-1,Di=0;function Pe(){return q&6?le():zi!==-1?zi:zi=le()}function dr(e){return e.mode&1?q&2&&we!==0?we&-we:k0.transition!==null?(Di===0&&(Di=$h()),Di):(e=G,e!==0||(e=window.event,e=e===void 0?16:Uh(e.type)),e):1}function dt(e,t,r,n){if(50<mo)throw mo=0,zl=null,Error(j(185));Bo(e,r,n),(!(q&2)||e!==ve)&&(e===ve&&(!(q&2)&&(Ns|=r),pe===4&&tr(e,we)),ze(e,n),r===1&&q===0&&!(t.mode&1)&&(Cn=le()+500,As&&yr()))}function ze(e,t){var r=e.callbackNode;kv(e,t);var n=Zi(e,e===ve?we:0);if(n===0)r!==null&&Lu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Lu(r),t===1)e.tag===0?x0(jd.bind(null,e)):rp(jd.bind(null,e)),g0(function(){!(q&6)&&yr()}),r=null;else{switch(Rh(n)){case 1:r=_c;break;case 4:r=Th;break;case 16:r=Xi;break;case 536870912:r=Ph;break;default:r=Xi}r=tm(r,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Gp(e,t){if(zi=-1,Di=0,q&6)throw Error(j(327));var r=e.callbackNode;if(wn()&&e.callbackNode!==r)return null;var n=Zi(e,e===ve?we:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=vs(e,n);else{t=n;var o=q;q|=2;var i=Jp();(ve!==e||we!==t)&&(Tt=null,Cn=le()+500,Ar(e,t));do try{M0();break}catch(a){Qp(e,a)}while(!0);Lc(),ps.current=i,q=o,ue!==null?t=0:(ve=null,we=0,t=pe)}if(t!==0){if(t===2&&(o=dl(e),o!==0&&(n=o,t=Dl(e,o))),t===1)throw r=No,Ar(e,0),tr(e,n),ze(e,le()),r;if(t===6)tr(e,n);else{if(o=e.current.alternate,!(n&30)&&!D0(o)&&(t=vs(e,n),t===2&&(i=dl(e),i!==0&&(n=i,t=Dl(e,i))),t===1))throw r=No,Ar(e,0),tr(e,n),ze(e,le()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(j(345));case 2:Sr(e,Ae,Tt);break;case 3:if(tr(e,n),(n&130023424)===n&&(t=Jc+500-le(),10<t)){if(Zi(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wl(Sr.bind(null,e,Ae,Tt),t);break}Sr(e,Ae,Tt);break;case 4:if(tr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-ut(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*z0(n/1960))-n,10<n){e.timeoutHandle=wl(Sr.bind(null,e,Ae,Tt),n);break}Sr(e,Ae,Tt);break;case 5:Sr(e,Ae,Tt);break;default:throw Error(j(329))}}}return ze(e,le()),e.callbackNode===r?Gp.bind(null,e):null}function Dl(e,t){var r=po;return e.current.memoizedState.isDehydrated&&(Ar(e,t).flags|=256),e=vs(e,t),e!==2&&(t=Ae,Ae=r,t!==null&&Fl(t)),e}function Fl(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function D0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tr(e,t){for(t&=~Qc,t&=~Ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ut(t),n=1<<r;e[r]=-1,t&=~n}}function jd(e){if(q&6)throw Error(j(327));wn();var t=Zi(e,0);if(!(t&1))return ze(e,le()),null;var r=vs(e,t);if(e.tag!==0&&r===2){var n=dl(e);n!==0&&(t=n,r=Dl(e,n))}if(r===1)throw r=No,Ar(e,0),tr(e,t),ze(e,le()),r;if(r===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sr(e,Ae,Tt),ze(e,le()),null}function Yc(e,t){var r=q;q|=1;try{return e(t)}finally{q=r,q===0&&(Cn=le()+500,As&&yr())}}function Dr(e){or!==null&&or.tag===0&&!(q&6)&&wn();var t=q;q|=1;var r=Xe.transition,n=G;try{if(Xe.transition=null,G=1,e)return e()}finally{G=n,Xe.transition=r,q=t,!(q&6)&&yr()}}function Xc(){Me=fn.current,ee(fn)}function Ar(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,m0(r)),ue!==null)for(r=ue.return;r!==null;){var n=r;switch(Ac(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&os();break;case 3:Sn(),ee(Ne),ee(Ce),Mc();break;case 5:Fc(n);break;case 4:Sn();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:Nc(n.type._context);break;case 22:case 23:Xc()}r=r.return}if(ve=e,ue=e=fr(e.current,null),we=Me=t,pe=0,No=null,Qc=Ns=zr=0,Ae=po=null,Pr!==null){for(t=0;t<Pr.length;t++)if(r=Pr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}Pr=null}return e}function Qp(e,t){do{var r=ue;try{if(Lc(),Li.current=hs,fs){for(var n=oe.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}fs=!1}if(Ur=0,me=he=oe=null,fo=!1,Io=0,Gc.current=null,r===null||r.return===null){pe=1,No=t,ue=null;break}e:{var i=e,s=r.return,a=r,l=t;if(t=we,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=pd(s);if(v!==null){v.flags&=-257,md(v,s,a,i,t),v.mode&1&&hd(i,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){hd(i,c,t),Zc();break e}l=Error(j(426))}}else if(te&&a.mode&1){var b=pd(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),md(b,s,a,i,t),Ic(En(l,a));break e}}i=l=En(l,a),pe!==4&&(pe=2),po===null?po=[i]:po.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ap(i,l,t);sd(i,p);break e;case 1:a=l;var g=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ur===null||!ur.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Ip(i,a,t);sd(i,k);break e}}i=i.return}while(i!==null)}Xp(r)}catch(E){t=E,ue===r&&r!==null&&(ue=r=r.return);continue}break}while(!0)}function Jp(){var e=ps.current;return ps.current=hs,e===null?hs:e}function Zc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(zr&268435455)&&!(Ns&268435455)||tr(ve,we)}function vs(e,t){var r=q;q|=2;var n=Jp();(ve!==e||we!==t)&&(Tt=null,Ar(e,t));do try{F0();break}catch(o){Qp(e,o)}while(!0);if(Lc(),q=r,ps.current=n,ue!==null)throw Error(j(261));return ve=null,we=0,pe}function F0(){for(;ue!==null;)Yp(ue)}function M0(){for(;ue!==null&&!fv();)Yp(ue)}function Yp(e){var t=em(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Xp(e):ue=t,Gc.current=null}function Xp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=O0(r,t),r!==null){r.flags&=32767,ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ue=null;return}}else if(r=I0(r,t,Me),r!==null){ue=r;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);pe===0&&(pe=5)}function Sr(e,t,r){var n=G,o=Xe.transition;try{Xe.transition=null,G=1,B0(e,t,r,n)}finally{Xe.transition=o,G=n}return null}function B0(e,t,r,n){do wn();while(or!==null);if(q&6)throw Error(j(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(_v(e,i),e===ve&&(ue=ve=null,we=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||hi||(hi=!0,tm(Xi,function(){return wn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var s=G;G=1;var a=q;q|=4,Gc.current=null,N0(e,r),Vp(r,e),l0(vl),es=!!gl,vl=gl=null,e.current=r,U0(r),hv(),q=a,G=s,Xe.transition=i}else e.current=r;if(hi&&(hi=!1,or=e,gs=o),i=e.pendingLanes,i===0&&(ur=null),gv(r.stateNode),ze(e,le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ms)throw ms=!1,e=Ul,Ul=null,e;return gs&1&&e.tag!==0&&wn(),i=e.pendingLanes,i&1?e===zl?mo++:(mo=0,zl=e):mo=0,yr(),null}function wn(){if(or!==null){var e=Rh(gs),t=Xe.transition,r=G;try{if(Xe.transition=null,G=16>e?16:e,or===null)var n=!1;else{if(e=or,or=null,gs=0,q&6)throw Error(j(331));var o=q;for(q|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(A=c;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:ho(8,u,i)}var d=u.child;if(d!==null)d.return=u,A=d;else for(;A!==null;){u=A;var h=u.sibling,v=u.return;if(qp(u),u===c){A=null;break}if(h!==null){h.return=v,A=h;break}A=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ho(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,A=p;break e}A=i.return}}var g=e.current;for(A=g;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=g;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ls(9,a)}}catch(E){ae(a,a.return,E)}if(a===s){A=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,A=k;break e}A=a.return}}if(q=o,yr(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(js,e)}catch{}n=!0}return n}finally{G=r,Xe.transition=t}}return!1}function Td(e,t,r){t=En(r,t),t=Ap(e,t,1),e=cr(e,t,1),t=Pe(),e!==null&&(Bo(e,1,t),ze(e,t))}function ae(e,t,r){if(e.tag===3)Td(e,e,r);else for(;t!==null;){if(t.tag===3){Td(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ur===null||!ur.has(n))){e=En(r,e),e=Ip(t,e,1),t=cr(t,e,1),e=Pe(),t!==null&&(Bo(t,1,e),ze(t,e));break}}t=t.return}}function q0(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&r,ve===e&&(we&r)===r&&(pe===4||pe===3&&(we&130023424)===we&&500>le()-Jc?Ar(e,0):Qc|=r),ze(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=ni,ni<<=1,!(ni&130023424)&&(ni=4194304)):t=1);var r=Pe();e=zt(e,t),e!==null&&(Bo(e,t,r),ze(e,r))}function W0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Zp(e,r)}function H0(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(t),Zp(e,r)}var em;em=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Le=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Le=!1,A0(e,t,r);Le=!!(e.flags&131072)}else Le=!1,te&&t.flags&1048576&&np(t,as,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ui(e,t),e=t.pendingProps;var o=kn(t,Ce.current);yn(t,r),o=qc(null,t,n,e,o,r);var i=Wc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(n)?(i=!0,is(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zc(t),o.updater=Is,t.stateNode=o,o._reactInternals=t,Cl(t,n,e,r),t=Pl(null,t,n,!0,i,r)):(t.tag=0,te&&i&&Rc(t),Te(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=K0(n),e=st(n,e),o){case 0:t=Tl(null,t,n,e,r);break e;case 1:t=yd(null,t,n,e,r);break e;case 11:t=gd(null,t,n,e,r);break e;case 14:t=vd(null,t,n,st(n.type,e),r);break e}throw Error(j(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),Tl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),yd(e,t,n,o,r);case 3:e:{if(Up(t),e===null)throw Error(j(387));n=t.pendingProps,i=t.memoizedState,o=i.element,ap(e,t),us(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=En(Error(j(423)),t),t=wd(e,t,n,r,o);break e}else if(n!==o){o=En(Error(j(424)),t),t=wd(e,t,n,r,o);break e}else for(Be=lr(t.stateNode.containerInfo.firstChild),qe=t,te=!0,ct=null,r=dp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_n(),n===o){t=Dt(e,t,r);break e}Te(e,t,n,r)}t=t.child}return t;case 5:return fp(t),e===null&&bl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,yl(n,o)?s=null:i!==null&&yl(n,i)&&(t.flags|=32),Np(e,t),Te(e,t,s,r),t.child;case 6:return e===null&&bl(t),null;case 13:return zp(e,t,r);case 4:return Dc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=bn(t,null,n,r):Te(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),gd(e,t,n,o,r);case 7:return Te(e,t,t.pendingProps,r),t.child;case 8:return Te(e,t,t.pendingProps.children,r),t.child;case 12:return Te(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Y(ls,n._currentValue),n._currentValue=s,i!==null)if(ht(i.value,s)){if(i.children===o.children&&!Ne.current){t=Dt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Ot(-1,r&-r),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Sl(i.return,r,t),a.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(j(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Sl(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Te(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,yn(t,r),o=et(o),n=n(o),t.flags|=1,Te(e,t,n,r),t.child;case 14:return n=t.type,o=st(n,t.pendingProps),o=st(n.type,o),vd(e,t,n,o,r);case 15:return Op(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),Ui(e,t),t.tag=1,Ue(n)?(e=!0,is(t)):e=!1,yn(t,r),cp(t,n,o),Cl(t,n,o,r),Pl(null,t,n,!0,e,r);case 19:return Dp(e,t,r);case 22:return Lp(e,t,r)}throw Error(j(156,t.tag))};function tm(e,t){return jh(e,t)}function V0(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,r,n){return new V0(e,t,r,n)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K0(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wc)return 11;if(e===xc)return 14}return 2}function fr(e,t){var r=e.alternate;return r===null?(r=Ye(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Fi(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")eu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case tn:return Ir(r.children,o,i,t);case yc:s=8,o|=8;break;case Ja:return e=Ye(12,r,t,o|2),e.elementType=Ja,e.lanes=i,e;case Ya:return e=Ye(13,r,t,o),e.elementType=Ya,e.lanes=i,e;case Xa:return e=Ye(19,r,t,o),e.elementType=Xa,e.lanes=i,e;case uh:return Us(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lh:s=10;break e;case ch:s=9;break e;case wc:s=11;break e;case xc:s=14;break e;case Xt:s=16,n=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ye(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Ir(e,t,r,n){return e=Ye(7,e,n,t),e.lanes=r,e}function Us(e,t,r,n){return e=Ye(22,e,n,t),e.elementType=uh,e.lanes=r,e.stateNode={isHidden:!1},e}function ja(e,t,r){return e=Ye(6,e,null,t),e.lanes=r,e}function Ta(e,t,r){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function G0(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tu(e,t,r,n,o,i,s,a,l){return e=new G0(e,t,r,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(i),e}function Q0(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function rm(e){if(!e)return mr;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var r=e.type;if(Ue(r))return tp(e,r,t)}return t}function nm(e,t,r,n,o,i,s,a,l){return e=tu(r,n,!0,e,o,i,s,a,l),e.context=rm(null),r=e.current,n=Pe(),o=dr(r),i=Ot(n,o),i.callback=t??null,cr(r,i,o),e.current.lanes=o,Bo(e,o,n),ze(e,n),e}function zs(e,t,r,n){var o=t.current,i=Pe(),s=dr(o);return r=rm(r),t.context===null?t.context=r:t.pendingContext=r,t=Ot(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=cr(o,t,s),e!==null&&(dt(e,o,s,i),Oi(e,o,s)),s}function ys(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ru(e,t){Pd(e,t),(e=e.alternate)&&Pd(e,t)}function J0(){return null}var om=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}Ds.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));zs(e,t,null,null)};Ds.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dr(function(){zs(null,e,null,null)}),t[Ut]=null}};function Ds(e){this._internalRoot=e}Ds.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<er.length&&t!==0&&t<er[r].priority;r++);er.splice(r,0,e),r===0&&Nh(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Y0(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var c=ys(s);i.call(c)}}var s=nm(t,n,e,0,null,!1,!1,"",$d);return e._reactRootContainer=s,e[Ut]=s.current,To(e.nodeType===8?e.parentNode:e),Dr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var c=ys(l);a.call(c)}}var l=tu(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=l,e[Ut]=l.current,To(e.nodeType===8?e.parentNode:e),Dr(function(){zs(t,l,r,n)}),l}function Ms(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=ys(s);a.call(l)}}zs(t,s,e,o)}else s=Y0(r,t,e,o,n);return ys(s)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ro(t.pendingLanes);r!==0&&(bc(t,r|1),ze(t,le()),!(q&6)&&(Cn=le()+500,yr()))}break;case 13:Dr(function(){var n=zt(e,1);if(n!==null){var o=Pe();dt(n,e,1,o)}}),ru(e,1)}};Sc=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var r=Pe();dt(t,e,134217728,r)}ru(e,134217728)}};Ih=function(e){if(e.tag===13){var t=dr(e),r=zt(e,t);if(r!==null){var n=Pe();dt(r,e,t,n)}ru(e,t)}};Oh=function(){return G};Lh=function(e,t){var r=G;try{return G=e,t()}finally{G=r}};ll=function(e,t,r){switch(t){case"input":if(tl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Rs(n);if(!o)throw Error(j(90));fh(n),tl(n,o)}}}break;case"textarea":ph(e,r);break;case"select":t=r.value,t!=null&&pn(e,!!r.multiple,t,!1)}};kh=Yc;_h=Dr;var X0={usingClientEntryPoint:!1,Events:[Wo,sn,Rs,wh,xh,Yc]},Yn={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Z0={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eh(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{js=pi.inject(Z0),Et=pi}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;He.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(j(200));return Q0(e,t,null,r)};He.createRoot=function(e,t){if(!ou(e))throw Error(j(299));var r=!1,n="",o=om;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tu(e,1,!1,null,null,r,!1,n,o),e[Ut]=t.current,To(e.nodeType===8?e.parentNode:e),new nu(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Eh(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Dr(e)};He.hydrate=function(e,t,r){if(!Fs(t))throw Error(j(200));return Ms(null,e,t,!0,r)};He.hydrateRoot=function(e,t,r){if(!ou(e))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=om;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=nm(t,null,e,1,r??null,o,!1,i,s),e[Ut]=t.current,To(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ds(t)};He.render=function(e,t,r){if(!Fs(t))throw Error(j(200));return Ms(null,e,t,!1,r)};He.unmountComponentAtNode=function(e){if(!Fs(e))throw Error(j(40));return e._reactRootContainer?(Dr(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};He.unstable_batchedUpdates=Yc;He.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Fs(r))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ms(e,t,r,!1,n)};He.version="18.2.0-next-9e3b772b8-20220608";function im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(im)}catch(e){console.error(e)}}im(),nh.exports=He;var ey=nh.exports,Rd=ey;Ga.createRoot=Rd.createRoot,Ga.hydrateRoot=Rd.hydrateRoot;const ty="modulepreload",ry=function(e){return"/ventanilla/"+e},Ad={},Nn=function(t,r,n){let o=Promise.resolve();return r&&r.length>0&&(document.getElementsByTagName("link"),o=Promise.all(r.map(i=>{if(i=ry(i),i in Ad)return;Ad[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":ty,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))),o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Id="popstate";function ny(e={}){function t(n,o){let{pathname:i,search:s,hash:a}=n.location;return Ml("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Uo(o)}return iy(t,r,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oy(){return Math.random().toString(36).substring(2,10)}function Od(e,t){return{usr:e.state,key:e.key,idx:t}}function Ml(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Un(t):t,state:r,key:t&&t.key||n||oy()}}function Uo({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Un(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function iy(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:i=!1}=n,s=o.history,a="POP",l=null,c=u();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function u(){return(s.state||{idx:null}).idx}function d(){a="POP";let b=u(),p=b==null?null:b-c;c=b,l&&l({action:a,location:w.location,delta:p})}function h(b,p){a="PUSH";let g=Ml(w.location,b,p);c=u()+1;let m=Od(g,c),k=w.createHref(g);try{s.pushState(m,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(k)}i&&l&&l({action:a,location:w.location,delta:1})}function v(b,p){a="REPLACE";let g=Ml(w.location,b,p);c=u();let m=Od(g,c),k=w.createHref(g);s.replaceState(m,"",k),i&&l&&l({action:a,location:w.location,delta:0})}function y(b){return sy(b)}let w={get action(){return a},get location(){return e(o,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Id,d),l=b,()=>{o.removeEventListener(Id,d),l=null}},createHref(b){return t(o,b)},createURL:y,encodeLocation(b){let p=y(b);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(b){return s.go(b)}};return w}function sy(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),re(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Uo(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function sm(e,t,r="/"){return ay(e,t,r,!1)}function ay(e,t,r,n){let o=typeof t=="string"?Un(t):t,i=Ft(o.pathname||"/",r);if(i==null)return null;let s=am(e);ly(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=wy(i);a=vy(s[l],c,n)}return a}function am(e,t=[],r=[],n="",o=!1){let i=(s,a,l=o,c)=>{let u={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(n)&&l)return;re(u.relativePath.startsWith(n),`Absolute route path "${u.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(n.length)}let d=Lt([n,u.relativePath]),h=r.concat(u);s.children&&s.children.length>0&&(re(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),am(s.children,t,h,d,l)),!(s.path==null&&!s.index)&&t.push({path:d,score:my(d,s.index),routesMeta:h})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of lm(s.path))i(s,a,!0,c)}),t}function lm(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let s=lm(n.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function ly(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:gy(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var cy=/^:[\w-]+$/,uy=3,dy=2,fy=1,hy=10,py=-2,Ld=e=>e==="*";function my(e,t){let r=e.split("/"),n=r.length;return r.some(Ld)&&(n+=py),t&&(n+=dy),r.filter(o=>!Ld(o)).reduce((o,i)=>o+(cy.test(i)?uy:i===""?fy:hy),n)}function gy(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function vy(e,t,r=!1){let{routesMeta:n}=e,o={},i="/",s=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=ws({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&r&&!n[n.length-1].route.index&&(d=ws({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(o,d.params),s.push({params:o,pathname:Lt([i,d.pathname]),pathnameBase:by(Lt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Lt([i,d.pathnameBase]))}return s}function ws(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=yy(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:n.reduce((c,{paramName:u,isOptional:d},h)=>{if(u==="*"){let y=a[h]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return d&&!v?c[u]=void 0:c[u]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function yy(e,t=!1,r=!0){pt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function wy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ft(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function xy(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Un(e):e;return{pathname:r?r.startsWith("/")?r:ky(r,t):t,search:Sy(n),hash:Ey(o)}}function ky(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Pa(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _y(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function iu(e){let t=_y(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function su(e,t,r,n=!1){let o;typeof e=="string"?o=Un(e):(o={...e},re(!o.pathname||!o.pathname.includes("?"),Pa("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Pa("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Pa("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=r;else{let d=t.length-1;if(!n&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;o.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=xy(o,a),c=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var Lt=e=>e.join("/").replace(/\/\/+/g,"/"),by=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ey=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var cm=["POST","PUT","PATCH","DELETE"];new Set(cm);var jy=["GET",...cm];new Set(jy);var zn=x.createContext(null);zn.displayName="DataRouter";var Bs=x.createContext(null);Bs.displayName="DataRouterState";x.createContext(!1);var um=x.createContext({isTransitioning:!1});um.displayName="ViewTransition";var Ty=x.createContext(new Map);Ty.displayName="Fetchers";var Py=x.createContext(null);Py.displayName="Await";var mt=x.createContext(null);mt.displayName="Navigation";var Vo=x.createContext(null);Vo.displayName="Location";var gt=x.createContext({outlet:null,matches:[],isDataRoute:!1});gt.displayName="Route";var au=x.createContext(null);au.displayName="RouteError";function $y(e,{relative:t}={}){re(Dn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=x.useContext(mt),{hash:o,pathname:i,search:s}=Go(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Lt([r,i])),n.createHref({pathname:a,search:s,hash:o})}function Dn(){return x.useContext(Vo)!=null}function Bt(){return re(Dn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Vo).location}var dm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fm(e){x.useContext(mt).static||x.useLayoutEffect(e)}function Ko(){let{isDataRoute:e}=x.useContext(gt);return e?Wy():Ry()}function Ry(){re(Dn(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(zn),{basename:t,navigator:r}=x.useContext(mt),{matches:n}=x.useContext(gt),{pathname:o}=Bt(),i=JSON.stringify(iu(n)),s=x.useRef(!1);return fm(()=>{s.current=!0}),x.useCallback((l,c={})=>{if(pt(s.current,dm),!s.current)return;if(typeof l=="number"){r.go(l);return}let u=su(l,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Lt([t,u.pathname])),(c.replace?r.replace:r.push)(u,c.state,c)},[t,r,i,o,e])}x.createContext(null);function Ay(){let{matches:e}=x.useContext(gt),t=e[e.length-1];return t?t.params:{}}function Go(e,{relative:t}={}){let{matches:r}=x.useContext(gt),{pathname:n}=Bt(),o=JSON.stringify(iu(r));return x.useMemo(()=>su(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function Iy(e,t){return hm(e,t)}function hm(e,t,r,n){var p;re(Dn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=x.useContext(mt),{matches:i}=x.useContext(gt),s=i[i.length-1],a=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";pm(l,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=Bt(),h;if(t){let g=typeof t=="string"?Un(t):t;re(c==="/"||((p=g.pathname)==null?void 0:p.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),h=g}else h=d;let v=h.pathname||"/",y=v;if(c!=="/"){let g=c.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(g.length).join("/")}let w=sm(e,{pathname:y});pt(u||w!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),pt(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=zy(w&&w.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:Lt([c,o.encodeLocation?o.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Lt([c,o.encodeLocation?o.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r,n);return t&&b?x.createElement(Vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},b):b}function Oy(){let e=qy(),t=Cy(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:i},"ErrorBoundary")," or"," ",x.createElement("code",{style:i},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:o},r):null,s)}var Ly=x.createElement(Oy,null),Ny=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?x.createElement(gt.Provider,{value:this.props.routeContext},x.createElement(au.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Uy({routeContext:e,match:t,children:r}){let n=x.useContext(zn);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(gt.Provider,{value:e},r)}function zy(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let l=o.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);re(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let s=!1,a=-1;if(r)for(let l=0;l<o.length;l++){let c=o[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:u,errors:d}=r,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!d||d[c.route.id]===void 0);if(c.route.lazy||h){s=!0,a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}return o.reduceRight((l,c,u)=>{let d,h=!1,v=null,y=null;r&&(d=i&&c.route.id?i[c.route.id]:void 0,v=c.route.errorElement||Ly,s&&(a<0&&u===0?(pm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,y=null):a===u&&(h=!0,y=c.route.hydrateFallbackElement||null)));let w=t.concat(o.slice(0,u+1)),b=()=>{let p;return d?p=v:h?p=y:c.route.Component?p=x.createElement(c.route.Component,null):c.route.element?p=c.route.element:p=l,x.createElement(Uy,{match:c,routeContext:{outlet:l,matches:w,isDataRoute:r!=null},children:p})};return r&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?x.createElement(Ny,{location:r.location,revalidation:r.revalidation,component:v,error:d,children:b(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):b()},null)}function lu(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dy(e){let t=x.useContext(zn);return re(t,lu(e)),t}function Fy(e){let t=x.useContext(Bs);return re(t,lu(e)),t}function My(e){let t=x.useContext(gt);return re(t,lu(e)),t}function cu(e){let t=My(e),r=t.matches[t.matches.length-1];return re(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function By(){return cu("useRouteId")}function qy(){var n;let e=x.useContext(au),t=Fy("useRouteError"),r=cu("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Wy(){let{router:e}=Dy("useNavigate"),t=cu("useNavigate"),r=x.useRef(!1);return fm(()=>{r.current=!0}),x.useCallback(async(o,i={})=>{pt(r.current,dm),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Nd={};function pm(e,t,r){!t&&!Nd[e]&&(Nd[e]=!0,pt(!1,r))}x.memo(Hy);function Hy({routes:e,future:t,state:r}){return hm(e,void 0,r,t)}function Hr({to:e,replace:t,state:r,relative:n}){re(Dn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=x.useContext(mt);pt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=x.useContext(gt),{pathname:s}=Bt(),a=Ko(),l=su(e,iu(i),s,n==="path"),c=JSON.stringify(l);return x.useEffect(()=>{a(JSON.parse(c),{replace:t,state:r,relative:n})},[a,c,n,t,r]),null}function Er(e){re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vy({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:i=!1}){re(!Dn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=x.useMemo(()=>({basename:s,navigator:o,static:i,future:{}}),[s,o,i]);typeof r=="string"&&(r=Un(r));let{pathname:l="/",search:c="",hash:u="",state:d=null,key:h="default"}=r,v=x.useMemo(()=>{let y=Ft(l,s);return y==null?null:{location:{pathname:y,search:c,hash:u,state:d,key:h},navigationType:n}},[s,l,c,u,d,h,n]);return pt(v!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:x.createElement(mt.Provider,{value:a},x.createElement(Vo.Provider,{children:t,value:v}))}function Ky({children:e,location:t}){return Iy(Bl(e),t)}function Bl(e,t=[]){let r=[];return x.Children.forEach(e,(n,o)=>{if(!x.isValidElement(n))return;let i=[...t,o];if(n.type===x.Fragment){r.push.apply(r,Bl(n.props.children,i));return}re(n.type===Er,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),re(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Bl(n.props.children,i)),r.push(s)}),r}var Mi="get",Bi="application/x-www-form-urlencoded";function qs(e){return e!=null&&typeof e.tagName=="string"}function Gy(e){return qs(e)&&e.tagName.toLowerCase()==="button"}function Qy(e){return qs(e)&&e.tagName.toLowerCase()==="form"}function Jy(e){return qs(e)&&e.tagName.toLowerCase()==="input"}function Yy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xy(e,t){return e.button===0&&(!t||t==="_self")&&!Yy(e)}var mi=null;function Zy(){if(mi===null)try{new FormData(document.createElement("form"),0),mi=!1}catch{mi=!0}return mi}var ew=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $a(e){return e!=null&&!ew.has(e)?(pt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bi}"`),null):e}function tw(e,t){let r,n,o,i,s;if(Qy(e)){let a=e.getAttribute("action");n=a?Ft(a,t):null,r=e.getAttribute("method")||Mi,o=$a(e.getAttribute("enctype"))||Bi,i=new FormData(e)}else if(Gy(e)||Jy(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(n=l?Ft(l,t):null,r=e.getAttribute("formmethod")||a.getAttribute("method")||Mi,o=$a(e.getAttribute("formenctype"))||$a(a.getAttribute("enctype"))||Bi,i=new FormData(a,e),!Zy()){let{name:c,type:u,value:d}=e;if(u==="image"){let h=c?`${c}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else c&&i.append(c,d)}}else{if(qs(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Mi,n=null,o=Bi,s=e}return i&&o==="text/plain"&&(s=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rw(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&Ft(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function nw(e,t){if(e.id in t)return t[e.id];try{let r=await Nn(()=>import(e.module),__vite__mapDeps([]));return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ow(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function iw(e,t,r){let n=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let s=await nw(i,r);return s.links?s.links():[]}return[]}));return cw(n.flat(1).filter(ow).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ud(e,t,r,n,o,i){let s=(l,c)=>r[c]?l.route.id!==r[c].route.id:!0,a=(l,c)=>{var u;return r[c].pathname!==l.pathname||((u=r[c].route.path)==null?void 0:u.endsWith("*"))&&r[c].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,c)=>s(l,c)||a(l,c)):i==="data"?t.filter((l,c)=>{var d;let u=n.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(s(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=r[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function sw(e,t,{includeHydrateFallback:r}={}){return aw(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function aw(e){return[...new Set(e)]}function lw(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function cw(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let i=JSON.stringify(lw(o));return r.has(i)||(r.add(i),n.push({key:i,link:o})),n},[])}function mm(){let e=x.useContext(zn);return uu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function uw(){let e=x.useContext(Bs);return uu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var du=x.createContext(void 0);du.displayName="FrameworkContext";function gm(){let e=x.useContext(du);return uu(e,"You must render this element inside a <HydratedRouter> element"),e}function dw(e,t){let r=x.useContext(du),[n,o]=x.useState(!1),[i,s]=x.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=t,h=x.useRef(null);x.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let w=p=>{p.forEach(g=>{s(g.isIntersecting)})},b=new IntersectionObserver(w,{threshold:.5});return h.current&&b.observe(h.current),()=>{b.disconnect()}}},[e]),x.useEffect(()=>{if(n){let w=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(w)}}},[n]);let v=()=>{o(!0)},y=()=>{o(!1),s(!1)};return r?e!=="intent"?[i,h,{}]:[i,h,{onFocus:Xn(a,v),onBlur:Xn(l,y),onMouseEnter:Xn(c,v),onMouseLeave:Xn(u,y),onTouchStart:Xn(d,v)}]:[!1,h,{}]}function Xn(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function fw({page:e,...t}){let{router:r}=mm(),n=x.useMemo(()=>sm(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?x.createElement(pw,{page:e,matches:n,...t}):null}function hw(e){let{manifest:t,routeModules:r}=gm(),[n,o]=x.useState([]);return x.useEffect(()=>{let i=!1;return iw(e,t,r).then(s=>{i||o(s)}),()=>{i=!0}},[e,t,r]),n}function pw({page:e,matches:t,...r}){let n=Bt(),{manifest:o,routeModules:i}=gm(),{basename:s}=mm(),{loaderData:a,matches:l}=uw(),c=x.useMemo(()=>Ud(e,t,l,o,n,"data"),[e,t,l,o,n]),u=x.useMemo(()=>Ud(e,t,l,o,n,"assets"),[e,t,l,o,n]),d=x.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let y=new Set,w=!1;if(t.forEach(p=>{var m;let g=o.routes[p.route.id];!g||!g.hasLoader||(!c.some(k=>k.route.id===p.route.id)&&p.route.id in a&&((m=i[p.route.id])!=null&&m.shouldRevalidate)||g.hasClientLoader?w=!0:y.add(p.route.id))}),y.size===0)return[];let b=rw(e,s,"data");return w&&y.size>0&&b.searchParams.set("_routes",t.filter(p=>y.has(p.route.id)).map(p=>p.route.id).join(",")),[b.pathname+b.search]},[s,a,n,o,c,t,e,i]),h=x.useMemo(()=>sw(u,o),[u,o]),v=hw(u);return x.createElement(x.Fragment,null,d.map(y=>x.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...r})),h.map(y=>x.createElement("link",{key:y,rel:"modulepreload",href:y,...r})),v.map(({key:y,link:w})=>x.createElement("link",{key:y,nonce:r.nonce,...w})))}function mw(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vm&&(window.__reactRouterVersion="7.8.1")}catch{}function gw({basename:e,children:t,window:r}){let n=x.useRef();n.current==null&&(n.current=ny({window:r,v5Compat:!0}));let o=n.current,[i,s]=x.useState({action:o.action,location:o.location}),a=x.useCallback(l=>{x.startTransition(()=>s(l))},[s]);return x.useLayoutEffect(()=>o.listen(a),[o,a]),x.createElement(Vy,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wm=x.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d,...h},v){let{basename:y}=x.useContext(mt),w=typeof c=="string"&&ym.test(c),b,p=!1;if(typeof c=="string"&&w&&(b=c,vm))try{let I=new URL(window.location.href),$=c.startsWith("//")?new URL(I.protocol+c):new URL(c),Q=Ft($.pathname,y);$.origin===I.origin&&Q!=null?c=Q+$.search+$.hash:p=!0}catch{pt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=$y(c,{relative:o}),[m,k,E]=dw(n,h),C=xw(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:o,viewTransition:d});function S(I){t&&t(I),I.defaultPrevented||C(I)}let P=x.createElement("a",{...h,...E,href:b||g,onClick:p||i?t:S,ref:mw(v,k),target:l,"data-discover":!w&&r==="render"?"true":void 0});return m&&!w?x.createElement(x.Fragment,null,P,x.createElement(fw,{page:g})):P});wm.displayName="Link";var vw=x.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:i,to:s,viewTransition:a,children:l,...c},u){let d=Go(s,{relative:c.relative}),h=Bt(),v=x.useContext(Bs),{navigator:y,basename:w}=x.useContext(mt),b=v!=null&&Ew(d)&&a===!0,p=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,g=h.pathname,m=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(g=g.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase()),m&&w&&(m=Ft(m,w)||m);const k=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=g===p||!o&&g.startsWith(p)&&g.charAt(k)==="/",C=m!=null&&(m===p||!o&&m.startsWith(p)&&m.charAt(p.length)==="/"),S={isActive:E,isPending:C,isTransitioning:b},P=E?t:void 0,I;typeof n=="function"?I=n(S):I=[n,E?"active":null,C?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let $=typeof i=="function"?i(S):i;return x.createElement(wm,{...c,"aria-current":P,className:I,ref:u,style:$,to:s,viewTransition:a},typeof l=="function"?l(S):l)});vw.displayName="NavLink";var yw=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:i,method:s=Mi,action:a,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:d,...h},v)=>{let y=bw(),w=Sw(a,{relative:c}),b=s.toLowerCase()==="get"?"get":"post",p=typeof a=="string"&&ym.test(a),g=m=>{if(l&&l(m),m.defaultPrevented)return;m.preventDefault();let k=m.nativeEvent.submitter,E=(k==null?void 0:k.getAttribute("formmethod"))||s;y(k||m.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:o,state:i,relative:c,preventScrollReset:u,viewTransition:d})};return x.createElement("form",{ref:v,method:b,action:w,onSubmit:n?l:g,...h,"data-discover":!p&&e==="render"?"true":void 0})});yw.displayName="Form";function ww(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xm(e){let t=x.useContext(zn);return re(t,ww(e)),t}function xw(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:i,viewTransition:s}={}){let a=Ko(),l=Bt(),c=Go(e,{relative:i});return x.useCallback(u=>{if(Xy(u,t)){u.preventDefault();let d=r!==void 0?r:Uo(l)===Uo(c);a(e,{replace:d,state:n,preventScrollReset:o,relative:i,viewTransition:s})}},[l,a,c,r,n,t,e,o,i,s])}var kw=0,_w=()=>`__${String(++kw)}__`;function bw(){let{router:e}=xm("useSubmit"),{basename:t}=x.useContext(mt),r=By();return x.useCallback(async(n,o={})=>{let{action:i,method:s,encType:a,formData:l,body:c}=tw(n,t);if(o.navigate===!1){let u=o.fetcherKey||_w();await e.fetch(u,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||s,formEncType:o.encType||a,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||s,formEncType:o.encType||a,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Sw(e,{relative:t}={}){let{basename:r}=x.useContext(mt),n=x.useContext(gt);re(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),i={...Go(e||".",{relative:t})},s=Bt();if(e==null){i.search=s.search;let a=new URLSearchParams(i.search),l=a.getAll("index");if(l.some(u=>u==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let u=a.toString();i.search=u?`?${u}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:Lt([r,i.pathname])),Uo(i)}function Ew(e,{relative:t}={}){let r=x.useContext(um);re(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=xm("useViewTransitionState"),o=Go(e,{relative:t});if(!r.isTransitioning)return!1;let i=Ft(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Ft(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ws(o.pathname,s)!=null||ws(o.pathname,i)!=null}var Ee=function(){return Ee=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Ee.apply(this,arguments)};function zo(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",go="-moz-",K="-webkit-",km="comm",Ws="rule",fu="decl",Cw="@import",_m="@keyframes",jw="@layer",bm=Math.abs,hu=String.fromCharCode,ql=Object.assign;function Tw(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Sm(e){return e.trim()}function Pt(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,r){return e.replace(t,r)}function qi(e,t,r){return e.indexOf(t,r)}function ge(e,t){return e.charCodeAt(t)|0}function jn(e,t,r){return e.slice(t,r)}function _t(e){return e.length}function Em(e){return e.length}function oo(e,t){return t.push(e),e}function Pw(e,t){return e.map(t).join("")}function zd(e,t){return e.filter(function(r){return!Pt(r,t)})}var Hs=1,Tn=1,Cm=0,rt=0,ce=0,Fn="";function Vs(e,t,r,n,o,i,s,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Hs,column:Tn,length:s,return:"",siblings:a}}function Jt(e,t){return ql(Vs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vr(e){for(;e.root;)e=Jt(e.root,{children:[e]});oo(e,e.siblings)}function $w(){return ce}function Rw(){return ce=rt>0?ge(Fn,--rt):0,Tn--,ce===10&&(Tn=1,Hs--),ce}function ft(){return ce=rt<Cm?ge(Fn,rt++):0,Tn++,ce===10&&(Tn=1,Hs++),ce}function Or(){return ge(Fn,rt)}function Wi(){return rt}function Ks(e,t){return jn(Fn,e,t)}function Wl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Aw(e){return Hs=Tn=1,Cm=_t(Fn=e),rt=0,[]}function Iw(e){return Fn="",e}function Ra(e){return Sm(Ks(rt-1,Hl(e===91?e+2:e===40?e+1:e)))}function Ow(e){for(;(ce=Or())&&ce<33;)ft();return Wl(e)>2||Wl(ce)>3?"":" "}function Lw(e,t){for(;--t&&ft()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Ks(e,Wi()+(t<6&&Or()==32&&ft()==32))}function Hl(e){for(;ft();)switch(ce){case e:return rt;case 34:case 39:e!==34&&e!==39&&Hl(ce);break;case 40:e===41&&Hl(e);break;case 92:ft();break}return rt}function Nw(e,t){for(;ft()&&e+ce!==57;)if(e+ce===84&&Or()===47)break;return"/*"+Ks(t,rt-1)+"*"+hu(e===47?e:ft())}function Uw(e){for(;!Wl(Or());)ft();return Ks(e,rt)}function zw(e){return Iw(Hi("",null,null,null,[""],e=Aw(e),0,[0],e))}function Hi(e,t,r,n,o,i,s,a,l){for(var c=0,u=0,d=s,h=0,v=0,y=0,w=1,b=1,p=1,g=0,m="",k=o,E=i,C=n,S=m;b;)switch(y=g,g=ft()){case 40:if(y!=108&&ge(S,d-1)==58){qi(S+=D(Ra(g),"&","&\f"),"&\f",bm(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Ra(g);break;case 9:case 10:case 13:case 32:S+=Ow(y);break;case 92:S+=Lw(Wi()-1,7);continue;case 47:switch(Or()){case 42:case 47:oo(Dw(Nw(ft(),Wi()),t,r,l),l);break;default:S+="/"}break;case 123*w:a[c++]=_t(S)*p;case 125*w:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+u:p==-1&&(S=D(S,/\f/g,"")),v>0&&_t(S)-d&&oo(v>32?Fd(S+";",n,r,d-1,l):Fd(D(S," ","")+";",n,r,d-2,l),l);break;case 59:S+=";";default:if(oo(C=Dd(S,t,r,c,u,o,a,m,k=[],E=[],d,i),i),g===123)if(u===0)Hi(S,t,C,C,k,i,d,a,E);else switch(h===99&&ge(S,3)===110?100:h){case 100:case 108:case 109:case 115:Hi(e,C,C,n&&oo(Dd(e,C,C,0,0,o,a,m,o,k=[],d,E),E),o,E,d,a,n?k:E);break;default:Hi(S,C,C,C,[""],E,0,a,E)}}c=u=v=0,w=p=1,m=S="",d=s;break;case 58:d=1+_t(S),v=y;default:if(w<1){if(g==123)--w;else if(g==125&&w++==0&&Rw()==125)continue}switch(S+=hu(g),g*w){case 38:p=u>0?1:(S+="\f",-1);break;case 44:a[c++]=(_t(S)-1)*p,p=1;break;case 64:Or()===45&&(S+=Ra(ft())),h=Or(),u=d=_t(m=S+=Uw(Wi())),g++;break;case 45:y===45&&_t(S)==2&&(w=0)}}return i}function Dd(e,t,r,n,o,i,s,a,l,c,u,d){for(var h=o-1,v=o===0?i:[""],y=Em(v),w=0,b=0,p=0;w<n;++w)for(var g=0,m=jn(e,h+1,h=bm(b=s[w])),k=e;g<y;++g)(k=Sm(b>0?v[g]+" "+m:D(m,/&\f/g,v[g])))&&(l[p++]=k);return Vs(e,t,r,o===0?Ws:a,l,c,u,d)}function Dw(e,t,r,n){return Vs(e,t,r,km,hu($w()),jn(e,2,-2),0,n)}function Fd(e,t,r,n,o){return Vs(e,t,r,fu,jn(e,0,n),jn(e,n+1,-1),n,o)}function jm(e,t,r){switch(Tw(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return go+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+go+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return K+e+Z+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+Z+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+Z+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+Z+e+e;case 6165:return K+e+Z+"flex-"+e+e;case 5187:return K+e+D(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return K+e+Z+"flex-item-"+D(e,/flex-|-self/g,"")+(Pt(e,/flex-|baseline/)?"":Z+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return K+e+Z+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+Z+D(e,"shrink","negative")+e;case 5292:return K+e+Z+D(e,"basis","preferred-size")+e;case 6060:return K+"box-"+D(e,"-grow","")+K+e+Z+D(e,"grow","positive")+e;case 4554:return K+D(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!Pt(e,/flex-|baseline/))return Z+"grid-column-align"+jn(e,t)+e;break;case 2592:case 3360:return Z+D(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Pt(n.props,/grid-\w+-end/)})?~qi(e+(r=r[t].value),"span",0)?e:Z+D(e,"-start","")+e+Z+"grid-row-span:"+(~qi(r,"span",0)?Pt(r,/\d+/):+Pt(r,/\d+/)-+Pt(e,/\d+/))+";":Z+D(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Pt(n.props,/grid-\w+-start/)})?e:Z+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+go+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qi(e,"stretch",0)?jm(D(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,l,c){return Z+o+":"+i+c+(s?Z+o+"-span:"+(a?l:+l-+i)+c:"")+e});case 4949:if(ge(e,t+6)===121)return D(e,":",":"+K)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ge(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+Z+"$2box$3")+e;case 100:return D(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function xs(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Fw(e,t,r,n){switch(e.type){case jw:if(e.children.length)break;case Cw:case fu:return e.return=e.return||e.value;case km:return"";case _m:return e.return=e.value+"{"+xs(e.children,n)+"}";case Ws:if(!_t(e.value=e.props.join(",")))return""}return _t(r=xs(e.children,n))?e.return=e.value+"{"+r+"}":""}function Mw(e){var t=Em(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function Bw(e){return function(t){t.root||(t=t.return)&&e(t)}}function qw(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case fu:e.return=jm(e.value,e.length,r);return;case _m:return xs([Jt(e,{value:D(e.value,"@","@"+K)})],n);case Ws:if(e.length)return Pw(r=e.props,function(o){switch(Pt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vr(Jt(e,{props:[D(o,/:(read-\w+)/,":"+go+"$1")]})),Vr(Jt(e,{props:[o]})),ql(e,{props:zd(r,n)});break;case"::placeholder":Vr(Jt(e,{props:[D(o,/:(plac\w+)/,":"+K+"input-$1")]})),Vr(Jt(e,{props:[D(o,/:(plac\w+)/,":"+go+"$1")]})),Vr(Jt(e,{props:[D(o,/:(plac\w+)/,Z+"input-$1")]})),Vr(Jt(e,{props:[o]})),ql(e,{props:zd(r,n)});break}return""})}}var Ww={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fe={},Pn=typeof process<"u"&&Fe!==void 0&&(Fe.REACT_APP_SC_ATTR||Fe.SC_ATTR)||"data-styled",Tm="active",Pm="data-styled-version",Gs="6.1.19",pu=`/*!sc*/
`,ks=typeof window<"u"&&typeof document<"u",Hw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Fe!==void 0&&Fe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Fe.REACT_APP_SC_DISABLE_SPEEDY!==""?Fe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Fe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Fe!==void 0&&Fe.SC_DISABLE_SPEEDY!==void 0&&Fe.SC_DISABLE_SPEEDY!==""&&Fe.SC_DISABLE_SPEEDY!=="false"&&Fe.SC_DISABLE_SPEEDY),Vw={},Qs=Object.freeze([]),$n=Object.freeze({});function $m(e,t,r){return r===void 0&&(r=$n),e.theme!==r.theme&&e.theme||t||r.theme}var Rm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gw=/(^-|-$)/g;function Md(e){return e.replace(Kw,"-").replace(Gw,"")}var Qw=/(a)(d)/gi,gi=52,Bd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vl(e){var t,r="";for(t=Math.abs(e);t>gi;t=t/gi|0)r=Bd(t%gi)+r;return(Bd(t%gi)+r).replace(Qw,"$1-$2")}var Aa,Am=5381,hn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Im=function(e){return hn(Am,e)};function Om(e){return Vl(Im(e)>>>0)}function Jw(e){return e.displayName||e.name||"Component"}function Ia(e){return typeof e=="string"&&!0}var Lm=typeof Symbol=="function"&&Symbol.for,Nm=Lm?Symbol.for("react.memo"):60115,Yw=Lm?Symbol.for("react.forward_ref"):60112,Xw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Um={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ex=((Aa={})[Yw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Aa[Nm]=Um,Aa);function qd(e){return("type"in(t=e)&&t.type.$$typeof)===Nm?Um:"$$typeof"in e?ex[e.$$typeof]:Xw;var t}var tx=Object.defineProperty,rx=Object.getOwnPropertyNames,Wd=Object.getOwnPropertySymbols,nx=Object.getOwnPropertyDescriptor,ox=Object.getPrototypeOf,Hd=Object.prototype;function zm(e,t,r){if(typeof t!="string"){if(Hd){var n=ox(t);n&&n!==Hd&&zm(e,n,r)}var o=rx(t);Wd&&(o=o.concat(Wd(t)));for(var i=qd(e),s=qd(t),a=0;a<o.length;++a){var l=o[a];if(!(l in Zw||r&&r[l]||s&&l in s||i&&l in i)){var c=nx(t,l);try{tx(e,l,c)}catch{}}}}return e}function Rn(e){return typeof e=="function"}function mu(e){return typeof e=="object"&&"styledComponentId"in e}function Rr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Kl(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Do(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gl(e,t,r){if(r===void 0&&(r=!1),!r&&!Do(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Gl(e[n],t[n]);else if(Do(t))for(var n in t)e[n]=Gl(e[n],t[n]);return e}function gu(e,t){Object.defineProperty(e,"toString",{value:t})}function Qo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ix=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Qo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(pu);return r},e}(),Vi=new Map,_s=new Map,Ki=1,vi=function(e){if(Vi.has(e))return Vi.get(e);for(;_s.has(Ki);)Ki++;var t=Ki++;return Vi.set(e,t),_s.set(t,e),t},sx=function(e,t){Ki=t+1,Vi.set(e,t),_s.set(t,e)},ax="style[".concat(Pn,"][").concat(Pm,'="').concat(Gs,'"]'),lx=new RegExp("^".concat(Pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cx=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},ux=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(pu),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var l=a.match(lx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(sx(u,c),cx(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},Vd=function(e){for(var t=document.querySelectorAll(ax),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Pn)!==Tm&&(ux(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function dx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dm=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Pn,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Pn,Tm),n.setAttribute(Pm,Gs);var s=dx();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},fx=function(){function e(t){this.element=Dm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw Qo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),hx=function(){function e(t){this.element=Dm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),px=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Kd=ks,mx={isServer:!ks,useCSSOMInjection:!Hw},bs=function(){function e(t,r,n){t===void 0&&(t=$n),r===void 0&&(r={});var o=this;this.options=Ee(Ee({},mx),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&ks&&Kd&&(Kd=!1,Vd(this)),gu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",c=function(d){var h=function(p){return _s.get(p)}(d);if(h===void 0)return"continue";var v=i.names.get(h),y=s.getGroup(d);if(v===void 0||!v.size||y.length===0)return"continue";var w="".concat(Pn,".g").concat(d,'[id="').concat(h,'"]'),b="";v!==void 0&&v.forEach(function(p){p.length>0&&(b+="".concat(p,","))}),l+="".concat(y).concat(w,'{content:"').concat(b,'"}').concat(pu)},u=0;u<a;u++)c(u);return l}(o)})}return e.registerId=function(t){return vi(t)},e.prototype.rehydrate=function(){!this.server&&ks&&Vd(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Ee(Ee({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new px(o):n?new fx(o):new hx(o)}(this.options),new ix(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(vi(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(vi(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(vi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),gx=/&/g,vx=/^\s*\/\/.*$/gm;function Fm(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Fm(r.children,t)),r})}function yx(e){var t,r,n,o=$n,i=o.options,s=i===void 0?$n:i,a=o.plugins,l=a===void 0?Qs:a,c=function(h,v,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):h},u=l.slice();u.push(function(h){h.type===Ws&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(gx,r).replace(n,c))}),s.prefix&&u.push(qw),u.push(Fw);var d=function(h,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var b=h.replace(vx,""),p=zw(y||v?"".concat(y," ").concat(v," { ").concat(b," }"):b);s.namespace&&(p=Fm(p,s.namespace));var g=[];return xs(p,Mw(u.concat(Bw(function(m){return g.push(m)})))),g};return d.hash=l.length?l.reduce(function(h,v){return v.name||Qo(15),hn(h,v.name)},Am).toString():"",d}var wx=new bs,Ql=yx(),Mm=St.createContext({shouldForwardProp:void 0,styleSheet:wx,stylis:Ql});Mm.Consumer;St.createContext(void 0);function Jl(){return x.useContext(Mm)}var xx=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Ql);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,gu(this,function(){throw Qo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ql),this.name+t.hash},e}(),kx=function(e){return e>="A"&&e<="Z"};function Gd(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;kx(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Bm=function(e){return e==null||e===!1||e===""},qm=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Bm(i)&&(Array.isArray(i)&&i.isCss||Rn(i)?n.push("".concat(Gd(o),":"),i,";"):Do(i)?n.push.apply(n,zo(zo(["".concat(o," {")],qm(i),!1),["}"],!1)):n.push("".concat(Gd(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Ww||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function hr(e,t,r,n){if(Bm(e))return[];if(mu(e))return[".".concat(e.styledComponentId)];if(Rn(e)){if(!Rn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return hr(o,t,r,n)}var i;return e instanceof xx?r?(e.inject(r,n),[e.getName(n)]):[e]:Do(e)?qm(e):Array.isArray(e)?Array.prototype.concat.apply(Qs,e.map(function(s){return hr(s,t,r,n)})):[e.toString()]}function Wm(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Rn(r)&&!mu(r))return!1}return!0}var _x=Im(Gs),bx=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Wm(t),this.componentId=r,this.baseHash=hn(_x,r),this.baseStyle=n,bs.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Rr(o,this.staticRulesId);else{var i=Kl(hr(this.rules,t,r,n)),s=Vl(hn(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=Rr(o,s),this.staticRulesId=s}else{for(var l=hn(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var h=Kl(hr(d,t,r,n));l=hn(l,h+u),c+=h}}if(c){var v=Vl(l>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(c,".".concat(v),void 0,this.componentId)),o=Rr(o,v)}}return o},e}(),vu=St.createContext(void 0);vu.Consumer;var Oa={};function Sx(e,t,r){var n=mu(e),o=e,i=!Ia(e),s=t.attrs,a=s===void 0?Qs:s,l=t.componentId,c=l===void 0?function(k,E){var C=typeof k!="string"?"sc":Md(k);Oa[C]=(Oa[C]||0)+1;var S="".concat(C,"-").concat(Om(Gs+C+Oa[C]));return E?"".concat(E,"-").concat(S):S}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(k){return Ia(k)?"styled.".concat(k):"Styled(".concat(Jw(k),")")}(e):u,h=t.displayName&&t.componentId?"".concat(Md(t.displayName),"-").concat(t.componentId):t.componentId||c,v=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(n&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(k,E){return w(k,E)&&b(k,E)}}else y=w}var p=new bx(r,h,n?o.componentStyle:void 0);function g(k,E){return function(C,S,P){var I=C.attrs,$=C.componentStyle,Q=C.defaultProps,B=C.foldedComponentIds,De=C.styledComponentId,qt=C.target,xr=St.useContext(vu),vt=Jl(),Ke=C.shouldForwardProp||vt.shouldForwardProp,R=$m(S,xr,Q)||$n,O=function(z,V,nt){for(var U,se=Ee(Ee({},V),{className:void 0,theme:nt}),yt=0;yt<z.length;yt+=1){var qr=Rn(U=z[yt])?U(se):U;for(var Wt in qr)se[Wt]=Wt==="className"?Rr(se[Wt],qr[Wt]):Wt==="style"?Ee(Ee({},se[Wt]),qr[Wt]):qr[Wt]}return V.className&&(se.className=Rr(se.className,V.className)),se}(I,S,R),L=O.as||qt,W={};for(var H in O)O[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&O.theme===R||(H==="forwardedAs"?W.as=O.forwardedAs:Ke&&!Ke(H,L)||(W[H]=O[H]));var Ge=function(z,V){var nt=Jl(),U=z.generateAndInjectStyles(V,nt.styleSheet,nt.stylis);return U}($,O),ke=Rr(B,De);return Ge&&(ke+=" "+Ge),O.className&&(ke+=" "+O.className),W[Ia(L)&&!Rm.has(L)?"class":"className"]=ke,P&&(W.ref=P),x.createElement(L,W)}(m,k,E)}g.displayName=d;var m=St.forwardRef(g);return m.attrs=v,m.componentStyle=p,m.displayName=d,m.shouldForwardProp=y,m.foldedComponentIds=n?Rr(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=h,m.target=n?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(E){for(var C=[],S=1;S<arguments.length;S++)C[S-1]=arguments[S];for(var P=0,I=C;P<I.length;P++)Gl(E,I[P],!0);return E}({},o.defaultProps,k):k}}),gu(m,function(){return".".concat(m.styledComponentId)}),i&&zm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Qd(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Jd=function(e){return Object.assign(e,{isCss:!0})};function Hm(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Rn(e)||Do(e))return Jd(hr(Qd(Qs,zo([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?hr(n):Jd(hr(Qd(n,t)))}function Yl(e,t,r){if(r===void 0&&(r=$n),!t)throw Qo(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,Hm.apply(void 0,zo([o],i,!1)))};return n.attrs=function(o){return Yl(e,t,Ee(Ee({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Yl(e,t,Ee(Ee({},r),o))},n}var Vm=function(e){return Yl(Sx,e)},_=Vm;Rm.forEach(function(e){_[e]=Vm(e)});var Ex=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Wm(t),bs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Kl(hr(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&bs.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Cx(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Hm.apply(void 0,zo([e],t,!1)),o="sc-global-".concat(Om(JSON.stringify(n))),i=new Ex(n,o),s=function(l){var c=Jl(),u=St.useContext(vu),d=St.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(d,l,c.styleSheet,u,c.stylis),St.useLayoutEffect(function(){if(!c.styleSheet.server)return a(d,l,c.styleSheet,u,c.stylis),function(){return i.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,d,h){if(i.isStatic)i.renderStyles(l,Vw,u,h);else{var v=Ee(Ee({},c),{theme:$m(c,d,s.defaultProps)});i.renderStyles(l,v,u,h)}}return St.memo(s)}const jx=Cx`
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
`,Tx=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Nn(()=>Promise.resolve().then(()=>Mn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class yu extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class Px extends yu{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class Yd extends yu{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class Xd extends yu{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Xl;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(Xl||(Xl={}));var $x=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class Rx{constructor(t,{headers:r={},customFetch:n,region:o=Xl.Any}={}){this.url=t,this.headers=r,this.region=o,this.fetch=Tx(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return $x(this,void 0,void 0,function*(){try{const{headers:o,method:i,body:s}=r;let a={},{region:l}=r;l||(l=this.region);const c=new URL(`${this.url}/${t}`);l&&l!=="any"&&(a["x-region"]=l,c.searchParams.set("forceFunctionRegion",l));let u;s&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",u=s):typeof s=="string"?(a["Content-Type"]="text/plain",u=s):typeof FormData<"u"&&s instanceof FormData?u=s:(a["Content-Type"]="application/json",u=JSON.stringify(s)));const d=yield this.fetch(c.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),o),body:u}).catch(w=>{throw new Px(w)}),h=d.headers.get("x-relay-error");if(h&&h==="true")throw new Yd(d);if(!d.ok)throw new Xd(d);let v=((n=d.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),y;return v==="application/json"?y=yield d.json():v==="application/octet-stream"?y=yield d.blob():v==="text/event-stream"?y=d:v==="multipart/form-data"?y=yield d.formData():y=yield d.text(),{data:y,error:null,response:d}}catch(o){return{data:null,error:o,response:o instanceof Xd||o instanceof Yd?o.context:void 0}}})}}var Ie={},wu={},Js={},Jo={},Ys={},Xs={},Ax=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},An=Ax();const Ix=An.fetch,Km=An.fetch.bind(An),Gm=An.Headers,Ox=An.Request,Lx=An.Response,Mn=Object.freeze(Object.defineProperty({__proto__:null,Headers:Gm,Request:Ox,Response:Lx,default:Km,fetch:Ix},Symbol.toStringTag,{value:"Module"})),Nx=Pg(Mn);var Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});let Ux=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};Zs.default=Ux;var Qm=Ze&&Ze.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xs,"__esModule",{value:!0});const zx=Qm(Nx),Dx=Qm(Zs);let Fx=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=zx.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let o=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var s,a,l;let c=null,u=null,d=null,h=i.status,v=i.statusText;if(i.ok){if(this.method!=="HEAD"){const p=await i.text();p===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?u=p:u=JSON.parse(p))}const w=(s=this.headers.Prefer)===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),b=(a=i.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");w&&b&&b.length>1&&(d=parseInt(b[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(u)&&(u.length>1?(c={code:"PGRST116",details:`Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},u=null,d=null,h=406,v="Not Acceptable"):u.length===1?u=u[0]:u=null)}else{const w=await i.text();try{c=JSON.parse(w),Array.isArray(c)&&i.status===404&&(u=[],c=null,h=200,v="OK")}catch{i.status===404&&w===""?(h=204,v="No Content"):c={message:w}}if(c&&this.isMaybeSingle&&(!((l=c==null?void 0:c.details)===null||l===void 0)&&l.includes("0 rows"))&&(c=null,h=200,v="OK"),c&&this.shouldThrowOnError)throw new Dx.default(c)}return{error:c,data:u,count:d,status:h,statusText:v}});return this.shouldThrowOnError||(o=o.catch(i=>{var s,a,l;return{error:{message:`${(s=i==null?void 0:i.name)!==null&&s!==void 0?s:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),o.then(t,r)}returns(){return this}overrideTypes(){return this}};Xs.default=Fx;var Mx=Ze&&Ze.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ys,"__esModule",{value:!0});const Bx=Mx(Xs);let qx=class extends Bx.default{select(t){let r=!1;const n=(t??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:o,referencedTable:i=o}={}){const s=i?`${i}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const o=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(o,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:o=n}={}){const i=typeof o>"u"?"offset":`${o}.offset`,s=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(s,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:o=!1,wal:i=!1,format:s="text"}={}){var a;const l=[t?"analyze":null,r?"verbose":null,n?"settings":null,o?"buffers":null,i?"wal":null].filter(Boolean).join("|"),c=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${s}; for="${c}"; options=${l};`,s==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};Ys.default=qx;var Wx=Ze&&Ze.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Jo,"__esModule",{value:!0});const Hx=Wx(Ys);let Vx=class extends Hx.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:o}={}){let i="";o==="plain"?i="pl":o==="phrase"?i="ph":o==="websearch"&&(i="w");const s=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${i}fts${s}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const o=n?`${n}.or`:"or";return this.url.searchParams.append(o,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};Jo.default=Vx;var Kx=Ze&&Ze.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Js,"__esModule",{value:!0});const Zn=Kx(Jo);let Gx=class{constructor(t,{headers:r={},schema:n,fetch:o}){this.url=t,this.headers=r,this.schema=n,this.fetch=o}select(t,{head:r=!1,count:n}={}){const o=r?"HEAD":"GET";let i=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!i?"":(a==='"'&&(i=!i),a)).join("");return this.url.searchParams.set("select",s),n&&(this.headers.Prefer=`count=${n}`),new Zn.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const o="POST",i=[];if(this.headers.Prefer&&i.push(this.headers.Prefer),r&&i.push(`count=${r}`),n||i.push("missing=default"),this.headers.Prefer=i.join(","),Array.isArray(t)){const s=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(s.length>0){const a=[...new Set(s)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new Zn.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:o,defaultToNull:i=!0}={}){const s="POST",a=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&a.push(this.headers.Prefer),o&&a.push(`count=${o}`),i||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((c,u)=>c.concat(Object.keys(u)),[]);if(l.length>0){const c=[...new Set(l)].map(u=>`"${u}"`);this.url.searchParams.set("columns",c.join(","))}}return new Zn.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",o=[];return this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),this.headers.Prefer=o.join(","),new Zn.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new Zn.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};Js.default=Gx;var ea={},ta={};Object.defineProperty(ta,"__esModule",{value:!0});ta.version=void 0;ta.version="0.0.0-automated";Object.defineProperty(ea,"__esModule",{value:!0});ea.DEFAULT_HEADERS=void 0;const Qx=ta;ea.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${Qx.version}`};var Jm=Ze&&Ze.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});const Jx=Jm(Js),Yx=Jm(Jo),Xx=ea;let Zx=class Ym{constructor(t,{headers:r={},schema:n,fetch:o}={}){this.url=t,this.headers=Object.assign(Object.assign({},Xx.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=o}from(t){const r=new URL(`${this.url}/${t}`);return new Jx.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new Ym(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:o=!1,count:i}={}){let s;const a=new URL(`${this.url}/rpc/${t}`);let l;n||o?(s=n?"HEAD":"GET",Object.entries(r).filter(([u,d])=>d!==void 0).map(([u,d])=>[u,Array.isArray(d)?`{${d.join(",")}}`:`${d}`]).forEach(([u,d])=>{a.searchParams.append(u,d)})):(s="POST",l=r);const c=Object.assign({},this.headers);return i&&(c.Prefer=`count=${i}`),new Yx.default({method:s,url:a,headers:c,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};wu.default=Zx;var Bn=Ze&&Ze.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.PostgrestError=Ie.PostgrestBuilder=Ie.PostgrestTransformBuilder=Ie.PostgrestFilterBuilder=Ie.PostgrestQueryBuilder=Ie.PostgrestClient=void 0;const Xm=Bn(wu);Ie.PostgrestClient=Xm.default;const Zm=Bn(Js);Ie.PostgrestQueryBuilder=Zm.default;const eg=Bn(Jo);Ie.PostgrestFilterBuilder=eg.default;const tg=Bn(Ys);Ie.PostgrestTransformBuilder=tg.default;const rg=Bn(Xs);Ie.PostgrestBuilder=rg.default;const ng=Bn(Zs);Ie.PostgrestError=ng.default;var e1=Ie.default={PostgrestClient:Xm.default,PostgrestQueryBuilder:Zm.default,PostgrestFilterBuilder:eg.default,PostgrestTransformBuilder:tg.default,PostgrestBuilder:rg.default,PostgrestError:ng.default};const{PostgrestClient:t1,PostgrestQueryBuilder:BE,PostgrestFilterBuilder:qE,PostgrestTransformBuilder:WE,PostgrestBuilder:HE,PostgrestError:VE}=e1;class r1{static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"&&process.versions&&process.versions.node){const r=parseInt(process.versions.node.split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const n1="2.15.1",o1=`realtime-js/${n1}`,i1="1.0.0",Zl=1e4,s1=1e3,a1=100;var vo;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(vo||(vo={}));var de;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(de||(de={}));var lt;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(lt||(lt={}));var ec;(function(e){e.websocket="websocket"})(ec||(ec={}));var jr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(jr||(jr={}));class l1{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const o=r.getUint8(1),i=r.getUint8(2);let s=this.HEADER_LENGTH+2;const a=n.decode(t.slice(s,s+o));s=s+o;const l=n.decode(t.slice(s,s+i));s=s+i;const c=JSON.parse(n.decode(t.slice(s,t.byteLength)));return{ref:null,topic:a,event:l,payload:c}}}class og{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var J;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(J||(J={}));const Zd=(e,t,r={})=>{var n;const o=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((i,s)=>(i[s]=c1(s,e,t,o),i),{})},c1=(e,t,r,n)=>{const o=t.find(a=>a.name===e),i=o==null?void 0:o.type,s=r[e];return i&&!n.includes(i)?ig(i,s):tc(s)},ig=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return h1(t,r)}switch(e){case J.bool:return u1(t);case J.float4:case J.float8:case J.int2:case J.int4:case J.int8:case J.numeric:case J.oid:return d1(t);case J.json:case J.jsonb:return f1(t);case J.timestamp:return p1(t);case J.abstime:case J.date:case J.daterange:case J.int4range:case J.int8range:case J.money:case J.reltime:case J.text:case J.time:case J.timestamptz:case J.timetz:case J.tsrange:case J.tstzrange:return tc(t);default:return tc(t)}},tc=e=>e,u1=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},d1=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},f1=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},h1=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let i;const s=e.slice(1,r);try{i=JSON.parse("["+s+"]")}catch{i=s?s.split(","):[]}return i.map(a=>ig(t,a))}return e},p1=e=>typeof e=="string"?e.replace(" ","T"):e,sg=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"};class La{constructor(t,r,n={},o=Zl){this.channel=t,this.event=r,this.payload=n,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var ef;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(ef||(ef={}));class yo{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=yo.syncState(this.state,o,i,s),this.pendingDiffs.forEach(l=>{this.state=yo.syncDiff(this.state,l,i,s)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=yo.syncDiff(this.state,o,i,s),a())}),this.onJoin((o,i,s)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:i,newPresences:s})}),this.onLeave((o,i,s)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:i,leftPresences:s})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,o){const i=this.cloneDeep(t),s=this.transformState(r),a={},l={};return this.map(i,(c,u)=>{s[c]||(l[c]=u)}),this.map(s,(c,u)=>{const d=i[c];if(d){const h=u.map(b=>b.presence_ref),v=d.map(b=>b.presence_ref),y=u.filter(b=>v.indexOf(b.presence_ref)<0),w=d.filter(b=>h.indexOf(b.presence_ref)<0);y.length>0&&(a[c]=y),w.length>0&&(l[c]=w)}else a[c]=u}),this.syncDiff(i,{joins:a,leaves:l},n,o)}static syncDiff(t,r,n,o){const{joins:i,leaves:s}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),o||(o=()=>{}),this.map(i,(a,l)=>{var c;const u=(c=t[a])!==null&&c!==void 0?c:[];if(t[a]=this.cloneDeep(l),u.length>0){const d=t[a].map(v=>v.presence_ref),h=u.filter(v=>d.indexOf(v.presence_ref)<0);t[a].unshift(...h)}n(a,u,l)}),this.map(s,(a,l)=>{let c=t[a];if(!c)return;const u=l.map(d=>d.presence_ref);c=c.filter(d=>u.indexOf(d.presence_ref)<0),t[a]=c,o(a,c,l),c.length===0&&delete t[a]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const o=t[n];return"metas"in o?r[n]=o.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):r[n]=o,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var tf;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(tf||(tf={}));var wo;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(wo||(wo={}));var $t;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})($t||($t={}));class xu{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=de.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new La(this,lt.join,this.params,this.timeout),this.rejoinTimer=new og(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=de.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=de.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=de.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=de.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=de.errored,this.rejoinTimer.scheduleTimeout())}),this._on(lt.reply,{},(o,i)=>{this._trigger(this._replyEventName(i),o)}),this.presence=new yo(this),this.broadcastEndpointURL=sg(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,o;if(this.socket.isConnected()||this.socket.connect(),this.state==de.closed){const{config:{broadcast:i,presence:s,private:a}}=this.params,l=(o=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(h=>h.filter))!==null&&o!==void 0?o:[],c=!!this.bindings[wo.PRESENCE]&&this.bindings[wo.PRESENCE].length>0,u={},d={broadcast:i,presence:Object.assign(Object.assign({},s),{enabled:c}),postgres_changes:l,private:a};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(h=>t==null?void 0:t($t.CHANNEL_ERROR,h)),this._onClose(()=>t==null?void 0:t($t.CLOSED)),this.updateJoinPayload(Object.assign({config:d},u)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:h})=>{var v;if(this.socket.setAuth(),h===void 0){t==null||t($t.SUBSCRIBED);return}else{const y=this.bindings.postgres_changes,w=(v=y==null?void 0:y.length)!==null&&v!==void 0?v:0,b=[];for(let p=0;p<w;p++){const g=y[p],{filter:{event:m,schema:k,table:E,filter:C}}=g,S=h&&h[p];if(S&&S.event===m&&S.schema===k&&S.table===E&&S.filter===C)b.push(Object.assign(Object.assign({},g),{id:S.id}));else{this.unsubscribe(),this.state=de.errored,t==null||t($t.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=b,t&&t($t.SUBSCRIBED);return}}).receive("error",h=>{this.state=de.errored,t==null||t($t.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(h).join(", ")||"error")))}).receive("timeout",()=>{t==null||t($t.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===de.joined&&t===wo.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(t,r,n)}async send(t,r={}){var n,o;if(!this._canPush()&&t.type==="broadcast"){const{event:i,payload:s}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:s,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((o=c.body)===null||o===void 0?void 0:o.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var s,a,l;const c=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(s=this.params)===null||s===void 0?void 0:s.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),c.receive("ok",()=>i("ok")),c.receive("error",()=>i("error")),c.receive("timeout",()=>i("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=de.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(lt.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(o=>{n=new La(this,lt.leave,{},t),n.receive("ok",()=>{r(),o("ok")}).receive("timeout",()=>{r(),o("timed out")}).receive("error",()=>{o("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=de.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const o=new AbortController,i=setTimeout(()=>o.abort(),n),s=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(i),s}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new La(this,t,r,n);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>a1){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var o,i;const s=t.toLocaleLowerCase(),{close:a,error:l,leave:c,join:u}=lt;if(n&&[a,l,c,u].indexOf(s)>=0&&n!==this._joinRef())return;let h=this._onMessage(s,r,n);if(r&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(v=>{var y,w,b;return((y=v.filter)===null||y===void 0?void 0:y.event)==="*"||((b=(w=v.filter)===null||w===void 0?void 0:w.event)===null||b===void 0?void 0:b.toLocaleLowerCase())===s}).map(v=>v.callback(h,n)):(i=this.bindings[s])===null||i===void 0||i.filter(v=>{var y,w,b,p,g,m;if(["broadcast","presence","postgres_changes"].includes(s))if("id"in v){const k=v.id,E=(y=v.filter)===null||y===void 0?void 0:y.event;return k&&((w=r.ids)===null||w===void 0?void 0:w.includes(k))&&(E==="*"||(E==null?void 0:E.toLocaleLowerCase())===((b=r.data)===null||b===void 0?void 0:b.type.toLocaleLowerCase()))}else{const k=(g=(p=v==null?void 0:v.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return k==="*"||k===((m=r==null?void 0:r.event)===null||m===void 0?void 0:m.toLocaleLowerCase())}else return v.type.toLocaleLowerCase()===s}).map(v=>{if(typeof h=="object"&&"ids"in h){const y=h.data,{schema:w,table:b,commit_timestamp:p,type:g,errors:m}=y;h=Object.assign(Object.assign({},{schema:w,table:b,commit_timestamp:p,eventType:g,new:{},old:{},errors:m}),this._getPayloadRecords(y))}v.callback(h,n)})}_isClosed(){return this.state===de.closed}_isJoined(){return this.state===de.joined}_isJoining(){return this.state===de.joining}_isLeaving(){return this.state===de.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const o=t.toLocaleLowerCase(),i={type:o,filter:r,callback:n};return this.bindings[o]?this.bindings[o].push(i):this.bindings[o]=[i],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(o=>{var i;return!(((i=o.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===n&&xu.isEqual(o.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(lt.close,{},t)}_onError(t){this._on(lt.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=de.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=Zd(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=Zd(t.columns,t.old_record)),r}}const rf=()=>{},yi={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},m1=[1e3,2e3,5e3,1e4],g1=1e4,v1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class y1{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Zl,this.transport=null,this.heartbeatIntervalMs=yi.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=rf,this.ref=0,this.reconnectTimer=null,this.logger=rf,this.conn=null,this.sendBuffer=[],this.serializer=new l1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...s)=>Nn(()=>Promise.resolve().then(()=>Mn),void 0).then(({default:a})=>a(...s)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):i=fetch,(...s)=>i(...s)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${ec.websocket}`,this.httpEndpoint=sg(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=r1.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:i1}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},t?this.conn.close(t,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case vo.connecting:return jr.Connecting;case vo.open:return jr.Open;case vo.closing:return jr.Closing;default:return jr.Closed}}isConnected(){return this.connectionState()===jr.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,o=this.getChannels().find(i=>i.topic===n);if(o)return o;{const i=new xu(`realtime:${t}`,r,this);return this.channels.push(i),i}}push(t){const{topic:r,event:n,payload:o,ref:i}=t,s=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${i})`,o),this.isConnected()?s():this.sendBuffer.push(s)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(s1,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},yi.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{r.topic==="phoenix"&&r.event==="phx_reply"&&this.heartbeatCallback(r.payload.status==="ok"?"ok":"error"),r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:o,payload:i,ref:s}=r,a=s?`(${s})`:"",l=i.status||"";this.log("receive",`${l} ${n} ${o} ${a}`.trim(),i),this.channels.filter(c=>c._isMember(n)).forEach(c=>c._trigger(o,i,s)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(lt.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",o=new URLSearchParams(r);return`${t}${n}${o}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([v1],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r;t?r=t:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const o={access_token:r,version:o1};r&&n.updateJoinPayload(o),n.joinedOnce&&n._isJoined()&&n._push(lt.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new og(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},yi.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,o,i,s,a,l,c;if(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:Zl,this.heartbeatIntervalMs=(o=t==null?void 0:t.heartbeatIntervalMs)!==null&&o!==void 0?o:yi.HEARTBEAT_INTERVAL,this.worker=(i=t==null?void 0:t.worker)!==null&&i!==void 0?i:!1,this.accessToken=(s=t==null?void 0:t.accessToken)!==null&&s!==void 0?s:null,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(a=t==null?void 0:t.reconnectAfterMs)!==null&&a!==void 0?a:u=>m1[u-1]||g1,this.encode=(l=t==null?void 0:t.encode)!==null&&l!==void 0?l:(u,d)=>d(JSON.stringify(u)),this.decode=(c=t==null?void 0:t.decode)!==null&&c!==void 0?c:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}class ku extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function fe(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class w1 extends ku{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class rc extends ku{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var x1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const ag=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Nn(()=>Promise.resolve().then(()=>Mn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},k1=()=>x1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Nn(()=>Promise.resolve().then(()=>Mn),void 0)).Response:Response}),nc=e=>{if(Array.isArray(e))return e.map(r=>nc(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const o=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));t[o]=nc(n)}),t},_1=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var Br=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const Na=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),b1=(e,t,r)=>Br(void 0,void 0,void 0,function*(){const n=yield k1();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(o=>{const i=e.status||500,s=(o==null?void 0:o.statusCode)||i+"";t(new w1(Na(o),i,s))}).catch(o=>{t(new rc(Na(o),o))}):t(new rc(Na(e),e))}),S1=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?o:(_1(n)?(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),o.body=JSON.stringify(n)):o.body=n,t!=null&&t.duplex&&(o.duplex=t.duplex),Object.assign(Object.assign({},o),r))};function Yo(e,t,r,n,o,i){return Br(this,void 0,void 0,function*(){return new Promise((s,a)=>{e(r,S1(t,n,o,i)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>s(l)).catch(l=>b1(l,a,n))})})}function Ss(e,t,r,n){return Br(this,void 0,void 0,function*(){return Yo(e,"GET",t,r,n)})}function kt(e,t,r,n,o){return Br(this,void 0,void 0,function*(){return Yo(e,"POST",t,n,o,r)})}function oc(e,t,r,n,o){return Br(this,void 0,void 0,function*(){return Yo(e,"PUT",t,n,o,r)})}function E1(e,t,r,n){return Br(this,void 0,void 0,function*(){return Yo(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function lg(e,t,r,n,o){return Br(this,void 0,void 0,function*(){return Yo(e,"DELETE",t,n,o,r)})}var je=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const C1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},nf={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class j1{constructor(t,r={},n,o){this.url=t,this.headers=r,this.bucketId=n,this.fetch=ag(o)}uploadOrUpdate(t,r,n,o){return je(this,void 0,void 0,function*(){try{let i;const s=Object.assign(Object.assign({},nf),o);let a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(s.upsert)});const l=s.metadata;typeof Blob<"u"&&n instanceof Blob?(i=new FormData,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",n)):typeof FormData<"u"&&n instanceof FormData?(i=n,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=n,a["cache-control"]=`max-age=${s.cacheControl}`,a["content-type"]=s.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(a=Object.assign(Object.assign({},a),o.headers));const c=this._removeEmptyFolders(r),u=this._getFinalPath(c),d=yield(t=="PUT"?oc:kt)(this.fetch,`${this.url}/object/${u}`,i,Object.assign({headers:a},s!=null&&s.duplex?{duplex:s.duplex}:{}));return{data:{path:c,id:d.Id,fullPath:d.Key},error:null}}catch(i){if(fe(i))return{data:null,error:i};throw i}})}upload(t,r,n){return je(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,o){return je(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(t),s=this._getFinalPath(i),a=new URL(this.url+`/object/upload/sign/${s}`);a.searchParams.set("token",r);try{let l;const c=Object.assign({upsert:nf.upsert},o),u=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",c.cacheControl)):(l=n,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType);const d=yield oc(this.fetch,a.toString(),l,{headers:u});return{data:{path:i,fullPath:d.Key},error:null}}catch(l){if(fe(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,r){return je(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const o=Object.assign({},this.headers);r!=null&&r.upsert&&(o["x-upsert"]="true");const i=yield kt(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:o}),s=new URL(this.url+i.url),a=s.searchParams.get("token");if(!a)throw new ku("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:a},error:null}}catch(n){if(fe(n))return{data:null,error:n};throw n}})}update(t,r,n){return je(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return je(this,void 0,void 0,function*(){try{return{data:yield kt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(fe(o))return{data:null,error:o};throw o}})}copy(t,r,n){return je(this,void 0,void 0,function*(){try{return{data:{path:(yield kt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(fe(o))return{data:null,error:o};throw o}})}createSignedUrl(t,r,n){return je(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),i=yield kt(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${s}`)},{data:i,error:null}}catch(o){if(fe(o))return{data:null,error:o};throw o}})}createSignedUrls(t,r,n){return je(this,void 0,void 0,function*(){try{const o=yield kt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),i=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:o.map(s=>Object.assign(Object.assign({},s),{signedUrl:s.signedURL?encodeURI(`${this.url}${s.signedURL}${i}`):null})),error:null}}catch(o){if(fe(o))return{data:null,error:o};throw o}})}download(t,r){return je(this,void 0,void 0,function*(){const o=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),s=i?`?${i}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield Ss(this.fetch,`${this.url}/${o}/${a}${s}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(fe(a))return{data:null,error:a};throw a}})}info(t){return je(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield Ss(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:nc(n),error:null}}catch(n){if(fe(n))return{data:null,error:n};throw n}})}exists(t){return je(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield E1(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(fe(n)&&n instanceof rc){const o=n.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),o=[],i=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";i!==""&&o.push(i);const a=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});l!==""&&o.push(l);let c=o.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${c}`)}}}remove(t){return je(this,void 0,void 0,function*(){try{return{data:yield lg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(fe(r))return{data:null,error:r};throw r}})}list(t,r,n){return je(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},C1),r),{prefix:t||""});return{data:yield kt(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},n),error:null}}catch(o){if(fe(o))return{data:null,error:o};throw o}})}listV2(t,r){return je(this,void 0,void 0,function*(){try{const n=Object.assign({},t);return{data:yield kt(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(fe(n))return{data:null,error:n};throw n}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const T1="2.11.0",P1={"X-Client-Info":`storage-js/${T1}`};var Kr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class $1{constructor(t,r={},n,o){const i=new URL(t);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href,this.headers=Object.assign(Object.assign({},P1),r),this.fetch=ag(n)}listBuckets(){return Kr(this,void 0,void 0,function*(){try{return{data:yield Ss(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(fe(t))return{data:null,error:t};throw t}})}getBucket(t){return Kr(this,void 0,void 0,function*(){try{return{data:yield Ss(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(fe(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Kr(this,void 0,void 0,function*(){try{return{data:yield kt(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(fe(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Kr(this,void 0,void 0,function*(){try{return{data:yield oc(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(fe(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Kr(this,void 0,void 0,function*(){try{return{data:yield kt(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(fe(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Kr(this,void 0,void 0,function*(){try{return{data:yield lg(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(fe(r))return{data:null,error:r};throw r}})}}class R1 extends $1{constructor(t,r={},n,o){super(t,r,n,o)}from(t){return new j1(this.url,this.headers,t,this.fetch)}}const A1="2.55.0";let io="";typeof Deno<"u"?io="deno":typeof document<"u"?io="web":typeof navigator<"u"&&navigator.product==="ReactNative"?io="react-native":io="node";const I1={"X-Client-Info":`supabase-js-${io}/${A1}`},O1={headers:I1},L1={schema:"public"},N1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},U1={};var z1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const D1=e=>{let t;return e?t=e:typeof fetch>"u"?t=Km:t=fetch,(...r)=>t(...r)},F1=()=>typeof Headers>"u"?Gm:Headers,M1=(e,t,r)=>{const n=D1(r),o=F1();return(i,s)=>z1(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let c=new o(s==null?void 0:s.headers);return c.has("apikey")||c.set("apikey",e),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(i,Object.assign(Object.assign({},s),{headers:c}))})};var B1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};function q1(e){return e.endsWith("/")?e:e+"/"}function W1(e,t){var r,n;const{db:o,auth:i,realtime:s,global:a}=e,{db:l,auth:c,realtime:u,global:d}=t,h={db:Object.assign(Object.assign({},l),o),auth:Object.assign(Object.assign({},c),i),realtime:Object.assign(Object.assign({},u),s),storage:{},global:Object.assign(Object.assign(Object.assign({},d),a),{headers:Object.assign(Object.assign({},(r=d==null?void 0:d.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>B1(this,void 0,void 0,function*(){return""})};return e.accessToken?h.accessToken=e.accessToken:delete h.accessToken,h}const cg="2.71.1",Xr=30*1e3,ic=3,Ua=ic*Xr,H1="http://localhost:9999",V1="supabase.auth.token",K1={"X-Client-Info":`gotrue-js/${cg}`},sc="X-Supabase-Api-Version",ug={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},G1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Q1=10*60*1e3;class _u extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function N(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class J1 extends _u{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function Y1(e){return N(e)&&e.name==="AuthApiError"}class dg extends _u{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class wr extends _u{constructor(t,r,n,o){super(t,n,o),this.name=r,this.status=n}}class Yt extends wr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function X1(e){return N(e)&&e.name==="AuthSessionMissingError"}class wi extends wr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class xi extends wr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class ki extends wr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function Z1(e){return N(e)&&e.name==="AuthImplicitGrantRedirectError"}class of extends wr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class ac extends wr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function za(e){return N(e)&&e.name==="AuthRetryableFetchError"}class sf extends wr{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class lc extends wr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Es="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),af=` 	
\r=`.split(""),ek=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<af.length;t+=1)e[af[t].charCodeAt(0)]=-2;for(let t=0;t<Es.length;t+=1)e[Es[t].charCodeAt(0)]=t;return e})();function lf(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Es[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Es[n]),t.queuedBits-=6}}function fg(e,t,r){const n=ek[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function cf(e){const t=[],r=s=>{t.push(String.fromCodePoint(s))},n={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},i=s=>{nk(s,n,r)};for(let s=0;s<e.length;s+=1)fg(e.charCodeAt(s),o,i);return t.join("")}function tk(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function rk(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const o=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}tk(n,t)}}function nk(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function ok(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};for(let o=0;o<e.length;o+=1)fg(e.charCodeAt(o),r,n);return new Uint8Array(t)}function ik(e){const t=[];return rk(e,r=>t.push(r)),new Uint8Array(t)}function sk(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};return e.forEach(o=>lf(o,r,n)),lf(null,r,n),t.join("")}function ak(e){return Math.round(Date.now()/1e3)+e}function lk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const it=()=>typeof window<"u"&&typeof document<"u",kr={tested:!1,writable:!1},hg=()=>{if(!it())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(kr.tested)return kr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),kr.tested=!0,kr.writable=!0}catch{kr.tested=!0,kr.writable=!1}return kr.writable};function ck(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,i)=>{t[i]=o})}catch{}return r.searchParams.forEach((n,o)=>{t[o]=n}),t}const pg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Nn(()=>Promise.resolve().then(()=>Mn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},uk=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",Zr=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},_r=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Vt=async(e,t)=>{await e.removeItem(t)};class ra{constructor(){this.promise=new ra.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}ra.promiseConstructor=Promise;function Da(e){const t=e.split(".");if(t.length!==3)throw new lc("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!G1.test(t[n]))throw new lc("JWT not in base64url format");return{header:JSON.parse(cf(t[0])),payload:JSON.parse(cf(t[1])),signature:ok(t[2]),raw:{header:t[0],payload:t[1]}}}async function dk(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function fk(e,t){return new Promise((n,o)=>{(async()=>{for(let i=0;i<1/0;i++)try{const s=await e(i);if(!t(i,null,s)){n(s);return}}catch(s){if(!t(i,s)){o(s);return}}})()})}function hk(e){return("0"+e.toString(16)).substr(-2)}function pk(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let o="";for(let i=0;i<56;i++)o+=r.charAt(Math.floor(Math.random()*n));return o}return crypto.getRandomValues(t),Array.from(t,hk).join("")}async function mk(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(n);return Array.from(o).map(i=>String.fromCharCode(i)).join("")}async function gk(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await mk(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Gr(e,t,r=!1){const n=pk();let o=n;r&&(o+="/PASSWORD_RECOVERY"),await Zr(e,`${t}-code-verifier`,o);const i=await gk(n);return[i,n===i?"plain":"s256"]}const vk=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function yk(e){const t=e.headers.get(sc);if(!t||!t.match(vk))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function wk(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function xk(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const kk=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Qr(e){if(!kk.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Fa(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function uf(e){return JSON.parse(JSON.stringify(e))}var _k=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Cr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),bk=[502,503,504];async function df(e){var t;if(!uk(e))throw new ac(Cr(e),0);if(bk.includes(e.status))throw new ac(Cr(e),e.status);let r;try{r=await e.json()}catch(i){throw new dg(Cr(i),i)}let n;const o=yk(e);if(o&&o.getTime()>=ug["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new sf(Cr(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Yt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,s)=>i&&typeof s=="string",!0))throw new sf(Cr(r),e.status,r.weak_password.reasons);throw new J1(Cr(r),e.status||500,n)}const Sk=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(n),Object.assign(Object.assign({},o),r))};async function F(e,t,r,n){var o;const i=Object.assign({},n==null?void 0:n.headers);i[sc]||(i[sc]=ug["2024-01-01"].name),n!=null&&n.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const s=(o=n==null?void 0:n.query)!==null&&o!==void 0?o:{};n!=null&&n.redirectTo&&(s.redirect_to=n.redirectTo);const a=Object.keys(s).length?"?"+new URLSearchParams(s).toString():"",l=await Ek(e,t,r+a,{headers:i,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function Ek(e,t,r,n,o,i){const s=Sk(t,n,o,i);let a;try{a=await e(r,Object.assign({},s))}catch(l){throw console.error(l),new ac(Cr(l),0)}if(a.ok||await df(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await df(l)}}function jt(e){var t;let r=null;Pk(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=ak(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function ff(e){const t=jt(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function rr(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function Ck(e){return{data:e,error:null}}function jk(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i}=e,s=_k(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i},l=Object.assign({},s);return{data:{properties:a,user:l},error:null}}function Tk(e){return e}function Pk(e){return e.access_token&&e.refresh_token&&e.expires_in}const Ma=["global","local","others"];var $k=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};class Rk{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=pg(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=Ma[0]){if(Ma.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ma.join(", ")}`);try{return await F(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(N(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await F(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:rr})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=$k(t,["options"]),o=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(o.new_email=n==null?void 0:n.newEmail,delete o.newEmail),await F(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:jk,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(N(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await F(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:rr})}catch(r){if(N(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,o,i,s,a,l;try{const c={nextPage:null,lastPage:0,total:0},u=await F(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&i!==void 0?i:""},xform:Tk});if(u.error)throw u.error;const d=await u.json(),h=(s=u.headers.get("x-total-count"))!==null&&s!==void 0?s:0,v=(l=(a=u.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return v.length>0&&(v.forEach(y=>{const w=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(y.split(";")[1].split("=")[1]);c[`${b}Page`]=w}),c.total=parseInt(h)),{data:Object.assign(Object.assign({},d),c),error:null}}catch(c){if(N(c))return{data:{users:[]},error:c};throw c}}async getUserById(t){Qr(t);try{return await F(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:rr})}catch(r){if(N(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){Qr(t);try{return await F(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:rr})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){Qr(t);try{return await F(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:rr})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){Qr(t.userId);try{const{data:r,error:n}=await F(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:n}}catch(r){if(N(r))return{data:null,error:r};throw r}}async _deleteFactor(t){Qr(t.userId),Qr(t.id);try{return{data:await F(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(N(r))return{data:null,error:r};throw r}}}function hf(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function Ak(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Jr={debug:!!(globalThis&&hg()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class mg extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class Ik extends mg{}async function Ok(e,t,r){Jr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),Jr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async o=>{if(o){Jr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,o.name);try{return await r()}finally{Jr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,o.name)}}else{if(t===0)throw Jr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new Ik(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Jr.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}Ak();const Lk={url:H1,storageKey:V1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:K1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function pf(e,t,r){return await r()}const Yr={};class Fo{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Fo.nextInstanceID,Fo.nextInstanceID+=1,this.instanceID>0&&it()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},Lk),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new Rk({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=pg(o.fetch),this.lock=o.lock||pf,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:it()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=Ok:this.lock=pf,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:hg()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=hf(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=hf(this.memoryStorage)),it()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=Yr[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){Yr[this.storageKey]=Object.assign(Object.assign({},Yr[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=Yr[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){Yr[this.storageKey]=Object.assign(Object.assign({},Yr[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${cg}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=ck(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),it()&&this.detectSessionInUrl&&n!=="none"){const{data:o,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),Z1(i)){const l=(t=i.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:s,redirectType:a}=o;return this._debug("#_initialize()","detected session in URL",s,"redirect type",a),await this._saveSession(s),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return N(r)?{error:r}:{error:new dg("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,o;try{const i=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:jt}),{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if(N(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(t){var r,n,o;try{let i;if("email"in t){const{email:u,password:d,options:h}=t;let v=null,y=null;this.flowType==="pkce"&&([v,y]=await Gr(this.storage,this.storageKey)),i=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:u,password:d,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:v,code_challenge_method:y},xform:jt})}else if("phone"in t){const{phone:u,password:d,options:h}=t;i=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:d,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},channel:(o=h==null?void 0:h.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:jt})}else throw new xi("You must provide either an email or phone number and a password");const{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if(N(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(t){try{let r;if("email"in t){const{email:i,password:s,options:a}=t;r=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ff})}else if("phone"in t){const{phone:i,password:s,options:a}=t;r=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ff})}else throw new xi("You must provide either an email or phone number and a password");const{data:n,error:o}=r;return o?{data:{user:null,session:null},error:o}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new wi}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:o})}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,o,i;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(i=t.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,o,i,s,a,l,c,u,d,h,v;let y,w;if("message"in t)y=t.message,w=t.signature;else{const{chain:b,wallet:p,statement:g,options:m}=t;let k;if(it())if(typeof p=="object")k=p;else{const C=window;if("solana"in C&&typeof C.solana=="object"&&("signIn"in C.solana&&typeof C.solana.signIn=="function"||"signMessage"in C.solana&&typeof C.solana.signMessage=="function"))k=C.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(m!=null&&m.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=p}const E=new URL((r=m==null?void 0:m.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in k&&k.signIn){const C=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},m==null?void 0:m.signInWithSolana),{version:"1",domain:E.host,uri:E.href}),g?{statement:g}:null));let S;if(Array.isArray(C)&&C[0]&&typeof C[0]=="object")S=C[0];else if(C&&typeof C=="object"&&"signedMessage"in C&&"signature"in C)S=C;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in S&&"signature"in S&&(typeof S.signedMessage=="string"||S.signedMessage instanceof Uint8Array)&&S.signature instanceof Uint8Array)y=typeof S.signedMessage=="string"?S.signedMessage:new TextDecoder().decode(S.signedMessage),w=S.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${E.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),...g?["",g,""]:[""],"Version: 1",`URI: ${E.href}`,`Issued At: ${(o=(n=m==null?void 0:m.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((i=m==null?void 0:m.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${m.signInWithSolana.notBefore}`]:[],...!((s=m==null?void 0:m.signInWithSolana)===null||s===void 0)&&s.expirationTime?[`Expiration Time: ${m.signInWithSolana.expirationTime}`]:[],...!((a=m==null?void 0:m.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${m.signInWithSolana.chainId}`]:[],...!((l=m==null?void 0:m.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${m.signInWithSolana.nonce}`]:[],...!((c=m==null?void 0:m.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${m.signInWithSolana.requestId}`]:[],...!((d=(u=m==null?void 0:m.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||d===void 0)&&d.length?["Resources",...m.signInWithSolana.resources.map(S=>`- ${S}`)]:[]].join(`
`);const C=await k.signMessage(new TextEncoder().encode(y),"utf8");if(!C||!(C instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");w=C}}try{const{data:b,error:p}=await F(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:sk(w)},!((h=t.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(v=t.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:jt});if(p)throw p;return!b||!b.session||!b.user?{data:{user:null,session:null},error:new wi}:(b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers("SIGNED_IN",b.session)),{data:Object.assign({},b),error:p})}catch(b){if(N(b))return{data:{user:null,session:null},error:b};throw b}}async _exchangeCodeForSession(t){const r=await _r(this.storage,`${this.storageKey}-code-verifier`),[n,o]=(r??"").split("/");try{const{data:i,error:s}=await F(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:jt});if(await Vt(this.storage,`${this.storageKey}-code-verifier`),s)throw s;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new wi}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:o??null}),error:s})}catch(i){if(N(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(t){try{const{options:r,provider:n,token:o,access_token:i,nonce:s}=t,a=await F(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:o,access_token:i,nonce:s,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:jt}),{data:l,error:c}=a;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new wi}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,o,i,s;try{if("email"in t){const{email:a,options:l}=t;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await Gr(this.storage,this.storageKey));const{error:d}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in t){const{phone:a,options:l}=t,{data:c,error:u}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(s=l==null?void 0:l.channel)!==null&&s!==void 0?s:"sms"}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:u}}throw new xi("You must provide either an email or phone number.")}catch(a){if(N(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var r,n;try{let o,i;"options"in t&&(o=(r=t.options)===null||r===void 0?void 0:r.redirectTo,i=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:s,error:a}=await F(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:i}}),redirectTo:o,xform:jt});if(a)throw a;if(!s)throw new Error("An error occurred on token verification.");const l=s.session,c=s.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(o){if(N(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var r,n,o;try{let i=null,s=null;return this.flowType==="pkce"&&([i,s]=await Gr(this.storage,this.storageKey)),await F(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:s}),headers:this.headers,xform:Ck})}catch(i){if(N(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Yt;const{error:o}=await F(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(N(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:o,options:i}=t,{error:s}=await F(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:s}}else if("phone"in t){const{phone:n,type:o,options:i}=t,{data:s,error:a}=await F(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:s==null?void 0:s.message_id},error:a}}throw new xi("You must provide either an email or phone number and a type")}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await _r(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<Ua:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const s=await _r(this.userStorage,this.storageKey+"-user");s!=null&&s.user?t.user=s.user:t.user=Fa()}if(this.storage.isServer&&t.user){let s=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,c,u)=>(!s&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),s=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,u))})}return{data:{session:t},error:null}}const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{session:null},error:i}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:rr}):await this._useSession(async r=>{var n,o,i;const{data:s,error:a}=r;if(a)throw a;return!(!((n=s.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Yt}:await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(o=s.session)===null||o===void 0?void 0:o.access_token)!==null&&i!==void 0?i:void 0,xform:rr})})}catch(r){if(N(r))return X1(r)&&(await this._removeSession(),await Vt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:o,error:i}=n;if(i)throw i;if(!o.session)throw new Yt;const s=o.session;let a=null,l=null;this.flowType==="pkce"&&t.email!=null&&([a,l]=await Gr(this.storage,this.storageKey));const{data:c,error:u}=await F(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:s.access_token,xform:rr});if(u)throw u;return s.user=c.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),{data:{user:s.user},error:null}})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Yt;const r=Date.now()/1e3;let n=r,o=!0,i=null;const{payload:s}=Da(t.access_token);if(s.exp&&(n=s.exp,o=n<=r),o){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};i=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;i={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(r){if(N(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:s,error:a}=r;if(a)throw a;t=(n=s.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Yt;const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{user:null,session:null},error:i}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!it())throw new ki("No browser detected.");if(t.error||t.error_description||t.error_code)throw new ki(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new of("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new ki("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new of("No code detected.");const{data:g,error:m}=await this._exchangeCodeForSession(t.code);if(m)throw m;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:g.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:o,access_token:i,refresh_token:s,expires_in:a,expires_at:l,token_type:c}=t;if(!i||!a||!s||!c)throw new ki("No session defined in URL");const u=Math.round(Date.now()/1e3),d=parseInt(a);let h=u+d;l&&(h=parseInt(l));const v=h-u;v*1e3<=Xr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${d}s`);const y=h-d;u-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,h,u):u-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",y,h,u);const{data:w,error:b}=await this._getUser(i);if(b)throw b;const p={provider_token:n,provider_refresh_token:o,access_token:i,expires_in:d,expires_at:h,refresh_token:s,token_type:c,user:w.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:t.type},error:null}}catch(n){if(N(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await _r(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{error:i};const s=(n=o.session)===null||n===void 0?void 0:n.access_token;if(s){const{error:a}=await this.admin.signOut(s,t);if(a&&!(Y1(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Vt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=lk(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,o;try{const{data:{session:i},error:s}=r;if(s)throw s;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",t,"session",i)}catch(i){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",i),console.error(i)}})}async resetPasswordForEmail(t,r={}){let n=null,o=null;this.flowType==="pkce"&&([n,o]=await Gr(this.storage,this.storageKey,!0));try{return await F(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(N(i))return{data:null,error:i};throw i}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(N(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:o}=await this._useSession(async i=>{var s,a,l,c,u;const{data:d,error:h}=i;if(h)throw h;const v=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(s=t.options)===null||s===void 0?void 0:s.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await F(this.fetch,"GET",v,{headers:this.headers,jwt:(u=(c=d.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(o)throw o;return it()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(N(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)throw s;return await F(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(N(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await fk(async o=>(o>0&&await dk(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await F(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:jt})),(o,i)=>{const s=200*Math.pow(2,o);return i&&za(i)&&Date.now()+s-n<Xr})}catch(n){if(this._debug(r,"error",n),N(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),it()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const o=await _r(this.storage,this.storageKey);if(o&&this.userStorage){let s=await _r(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!s&&(s={user:o.user},await Zr(this.userStorage,this.storageKey+"-user",s)),o.user=(t=s==null?void 0:s.user)!==null&&t!==void 0?t:Fa()}else if(o&&!o.user&&!o.user){const s=await _r(this.storage,this.storageKey+"-user");s&&(s!=null&&s.user)?(o.user=s.user,await Vt(this.storage,this.storageKey+"-user"),await Zr(this.storage,this.storageKey,o)):o.user=Fa()}if(this._debug(n,"session from storage",o),!this._isValidSession(o)){this._debug(n,"session is not valid"),o!==null&&await this._removeSession();return}const i=((r=o.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Ua;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${Ua}s`),i){if(this.autoRefreshToken&&o.refresh_token){const{error:s}=await this._callRefreshToken(o.refresh_token);s&&(console.error(s),za(s)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",s),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:s,error:a}=await this._getUser(o.access_token);!a&&(s!=null&&s.user)?(o.user=s.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(s){console.error("Error getting user data:",s),this._debug(n,"error getting user data, skipping SIGNED_IN notification",s)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(n,"error",o),console.error(o);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Yt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new ra;const{data:i,error:s}=await this._refreshAccessToken(t);if(s)throw s;if(!i.session)throw new Yt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const a={session:i.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(i){if(this._debug(o,"error",i),N(i)){const s={session:null,error:i};return za(i)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(s),s}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,r,n=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const i=[],s=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,r)}catch(l){i.push(l)}});if(await Promise.all(s),i.length>0){for(let a=0;a<i.length;a+=1)console.error(i[a]);throw i[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await Zr(this.userStorage,this.storageKey+"-user",{user:r.user});const o=Object.assign({},r);delete o.user;const i=uf(o);await Zr(this.storage,this.storageKey,i)}else{const o=uf(r);await Zr(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await Vt(this.storage,this.storageKey),await Vt(this.storage,this.storageKey+"-code-verifier"),await Vt(this.storage,this.storageKey+"-user"),this.userStorage&&await Vt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&it()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Xr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((n.expires_at*1e3-t)/Xr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Xr}ms, refresh threshold is ${ic} ticks`),o<=ic&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof mg)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!it()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const o=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&o.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&o.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,s]=await Gr(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(s)}`});o.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);o.push(i.toString())}return n!=null&&n.skipBrowserRedirect&&o.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await F(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(N(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)return{data:null,error:s};const a=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:c}=await F(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return c?{data:null,error:c}:(t.factorType==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(r){if(N(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{data:null,error:i};const{data:s,error:a}=await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:a})})}catch(r){if(N(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(N(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],o=n.filter(s=>s.factor_type==="totp"&&s.status==="verified"),i=n.filter(s=>s.factor_type==="phone"&&s.status==="verified");return{data:{all:n,totp:o,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:o},error:i}=t;if(i)return{data:null,error:i};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=Da(o.access_token);let a=null;s.aal&&(a=s.aal);let l=a;((n=(r=o.user.factors)===null||r===void 0?void 0:r.filter(d=>d.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const u=s.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:u},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(a=>a.kid===t);if(n)return n;const o=Date.now();if(n=this.jwks.keys.find(a=>a.kid===t),n&&this.jwks_cached_at+Q1>o)return n;const{data:i,error:s}=await F(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(s)throw s;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=o,n=i.keys.find(a=>a.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:v,error:y}=await this.getSession();if(y||!v.session)return{data:null,error:y};n=v.session.access_token}const{header:o,payload:i,signature:s,raw:{header:a,payload:l}}=Da(n);r!=null&&r.allowExpired||wk(i.exp);const c=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!c){const{error:v}=await this.getUser(n);if(v)throw v;return{data:{claims:i,header:o,signature:s},error:null}}const u=xk(o.alg),d=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,d,s,ik(`${a}.${l}`)))throw new lc("Invalid JWT signature");return{data:{claims:i,header:o,signature:s},error:null}}catch(n){if(N(n))return{data:null,error:n};throw n}}}Fo.nextInstanceID=0;const Nk=Fo;class Uk extends Nk{constructor(t){super(t)}}var zk=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class Dk{constructor(t,r,n){var o,i,s;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const a=q1(t),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const c=`sb-${l.hostname.split(".")[0]}-auth-token`,u={db:L1,realtime:U1,auth:Object.assign(Object.assign({},N1),{storageKey:c}),global:O1},d=W1(n??{},u);this.storageKey=(o=d.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(i=d.global.headers)!==null&&i!==void 0?i:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(h,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((s=d.auth)!==null&&s!==void 0?s:{},this.headers,d.global.fetch),this.fetch=M1(r,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},d.realtime)),this.rest=new t1(new URL("rest/v1",l).href,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),this.storage=new R1(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),d.accessToken||this._listenForAuthEvents()}get functions(){return new Rx(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return zk(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,storageKey:i,flowType:s,lock:a,debug:l},c,u){const d={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Uk({url:this.authUrl.href,headers:Object.assign(Object.assign({},d),c),storageKey:i,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,flowType:s,lock:a,debug:l,fetch:u,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new y1(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const Fk=(e,t,r)=>new Dk(e,t,r);function Mk(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}Mk()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const T=Fk("https://mdmknxkztpimoedhdjci.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A"),gg=x.createContext(),Bk=({children:e})=>{const[t,r]=x.useState(!0),[n,o]=x.useState(!1),[i,s]=x.useState(null),[a,l]=x.useState(null),[c,u]=x.useState(null),d=async(m,k)=>{u(null);try{o(!0);const{data:E,error:C}=await T.from("usuarios").select("idUsuario, nombre, usuario, correo, idRol").eq("usuario",m).eq("contraseña",k).single();if(C)throw C.code==="PGRST116"?new Error("Usuario o contraseña incorrectos"):new Error(`Error de base de datos: ${C.message}`);if(!E)throw new Error("Usuario o contraseña incorrectos");const S={id:E.idUsuario,nombre:E.nombre,usuario:E.usuario,correo:E.correo,idRol:E.idRol,rol:"Administrador",type:"admin"};return s(S),l(null),localStorage.setItem("user",JSON.stringify(S)),localStorage.removeItem("employeeData"),{success:!0,user:S}}catch(E){return u(E.message),{success:!1,error:E.message}}finally{o(!1)}},h=x.useCallback(m=>{const k={id:m.idEmpleado,idEmpleado:m.idEmpleado,codigoEmpleado:m.codigoEmpleado,empleado:m.empleado,idPlanta:m.idPlanta,planta:m.planta,idEsquemaPago:m.idEsquemaPago||null,type:"employee"};return l(k),s(null),localStorage.setItem("employeeData",JSON.stringify(k)),localStorage.removeItem("user"),{success:!0,employee:k}},[]),v=x.useCallback(()=>{s(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("employeeData")},[]),y=x.useCallback(async m=>{try{o(!0);const k={id:m.idUsuario,nombre:m.nombre,usuario:m.usuario||m.correo,correo:m.correo,idRol:m.idRol,rol:"Administrador",type:"admin"};return s(k),l(null),localStorage.setItem("user",JSON.stringify(k)),localStorage.removeItem("employeeData"),{success:!0,user:k}}catch(k){throw console.error("Error en auto-login:",k),u("Error en autenticación automática"),k}finally{o(!1)}},[]),w=()=>{try{const m=localStorage.getItem("user"),k=localStorage.getItem("employeeData");if(m){const E=JSON.parse(m);return s(E),l(null),E}if(k){const E=JSON.parse(k);return l(E),s(null),E}}catch(m){console.error("Error al obtener usuario guardado:",m),localStorage.removeItem("user"),localStorage.removeItem("employeeData")}return null},b=x.useCallback(m=>{if(a){const k={...a,...m};return l(k),localStorage.setItem("employeeData",JSON.stringify(k)),k}return null},[a]),p=x.useCallback(()=>{u(null)},[]);x.useEffect(()=>{w(),r(!1)},[]);const g={user:i,employeeData:a,loading:n,initializing:t,authError:c,adminLogin:d,adminAutoLogin:y,employeeLogin:h,logout:v,getCurrentUser:w,updateEmployeeData:b,clearAuthError:p};return f.jsx(gg.Provider,{value:g,children:e})},qn=()=>{const e=x.useContext(gg);if(!e)throw new Error("useAppAuth debe usarse dentro de AuthProvider");return e},vg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await T.from("plantas").select("idPlanta, planta").order("planta");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching plantas:",a)}finally{n(!1)}})()},[]),{plantas:e,loading:r,error:o}},yg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await T.from("esquemasPago").select("idEsquemaPago, esquemaPago").order("esquemaPago");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching esquemas de pago:",a)}finally{n(!1)}})()},[]),{esquemas:e,loading:r,error:o}},wg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await T.from("tiposSolicitud").select("idTipoSolicitud, tipoSolicitud").order("tipoSolicitud");if(l)throw l;t(a||[])}catch(a){i(a.message)}finally{n(!1)}})()},[]),{tipos:e,loading:r,error:o}},xg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await T.from("prioridades").select("idPrioridad, prioridad").order("idPrioridad");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching prioridades:",a)}finally{n(!1)}})()},[]),{prioridades:e,loading:r,error:o}},qk=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(null);return{createTicket:async i=>{try{t(!0),n(null);const{data:s}=await T.from("empleados").select("idPlanta").eq("idEmpleado",i.idEmpleado).single();if(!s)throw new Error("No se encontró información del empleado");const{data:a}=await T.from("asignaciones").select("idUsuario").eq("idPlanta",s.idPlanta).eq("idTipoSolicitud",i.idTipoSolicitud).single();if(!a)throw new Error("No se encontró usuario asignado para esta combinación de planta y tipo de solicitud");const{data:l,error:c}=await T.from("tickets").insert([{idEmpleado:i.idEmpleado,idTipoSolicitud:i.idTipoSolicitud,descripcion:i.descripcion,idPrioridad:i.idPrioridad}]).select().single();if(c)throw c;const{error:u}=await T.from("seguimientos").insert([{idTicket:l.idTicket,idUsuario:a.idUsuario,idEstado:1}]);if(u)throw u;const d=crypto.randomUUID(),h=new Date;h.setDate(h.getDate()+7);const{error:v}=await T.from("ticket_tokens").insert({token:d,idTicket:l.idTicket,idUsuario:a.idUsuario,fecha_expiracion:h.toISOString(),bActivo:!0});if(v)throw v;try{const{data:y,error:w}=await T.from("tickets").select(`
            *,
            empleados (
              nombre,
              plantas (planta)
            ),
            tiposSolicitud (tipoSolicitud),
            prioridades (prioridad)
          `).eq("idTicket",l.idTicket).single(),{data:b,error:p}=await T.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",a.idUsuario).single();if(!w&&!p&&y&&b){const m=`https://andresdramos.github.io/ventanilla/ticket/${d}`,{data:k,error:E}=await T.functions.invoke("send-email-notification",{body:{ticketData:y,usuario:b,directLink:m,notificationType:"nuevo"}});if(E)throw console.error("Error invocando Edge Function:",E),E;({success:k.success,token:d,directLink:m,emailResult:{success:k.success,messageId:k.messageId,to:k.to}}).success}}catch{}return{success:!0,ticket:l}}catch(s){return n(s.message),console.error("Error creating ticket:",s),{success:!1,error:s.message}}finally{t(!1)}},loading:e,error:r}},kg=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(null),o=x.useCallback(async l=>{t(!0),n(null);try{const{data:c,error:u}=await T.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("codigoEmpleado",l).single();if(u){if(u.code==="PGRST116")return{success:!0,empleado:null};throw u}return{success:!0,empleado:c}}catch(c){return console.error("Error al buscar empleado:",c),n(c.message),{success:!1,error:c.message}}finally{t(!1)}},[]),i=x.useCallback(async(l,c,u,d)=>{t(!0),n(null);try{const{data:h,error:v}=await T.from("empleados").insert([{codigoEmpleado:l,nombre:c,idPlanta:u,idEsquemaPago:d}]).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(v)throw v;return{success:!0,empleado:h}}catch(h){return console.error("Error al crear empleado:",h),n(h.message),{success:!1,error:h.message}}finally{t(!1)}},[]),s=x.useCallback(async l=>{t(!0),n(null);try{const{data:c,error:u}=await T.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("idEmpleado",l).single();if(u)throw u;return{success:!0,empleado:c}}catch(c){return console.error("Error al obtener empleado:",c),n(c.message),{success:!1,error:c.message}}finally{t(!1)}},[]),a=x.useCallback(async(l,c)=>{t(!0),n(null);try{const{data:u,error:d}=await T.from("empleados").update({idEsquemaPago:c}).eq("idEmpleado",l).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(d)throw d;return{success:!0,empleado:u}}catch(u){return console.error("Error al actualizar esquema de pago:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]);return{loading:e,error:r,buscarEmpleadoPorCodigo:o,crearEmpleado:i,obtenerEmpleadoPorId:s,actualizarEsquemaPago:a}},Wk=()=>{const[e,t]=x.useState(""),[r,n]=x.useState(""),[o,i]=x.useState(""),[s,a]=x.useState(""),[l,c]=x.useState(""),[u,d]=x.useState(!1),[h,v]=x.useState(1),{employeeLogin:y}=qn(),w=Ko(),{plantas:b,loading:p}=vg(),{esquemas:g,loading:m}=yg(),{buscarEmpleadoPorCodigo:k,crearEmpleado:E,loading:C}=kg(),S=async $=>{var Q;if($.preventDefault(),c(""),!e.trim()){c("Por favor, ingrese su código de empleado");return}if(!/^\d+$/.test(e)){c("El código de empleado debe contener solo números");return}d(!0);try{const B=await k(e.trim());if(!B.success){c("Error al buscar empleado: "+B.error),d(!1);return}if(B.empleado){const De={idEmpleado:B.empleado.idEmpleado,codigoEmpleado:B.empleado.codigoEmpleado,empleado:B.empleado.nombre,idPlanta:B.empleado.idPlanta,planta:(Q=B.empleado.plantas)==null?void 0:Q.planta,idEsquemaPago:B.empleado.idEsquemaPago||null};y(De),w("/employee")}else v(2)}catch(B){c("Error al procesar la búsqueda"),console.error("Error:",B)}finally{d(!1)}},P=async $=>{var Q;if($.preventDefault(),c(""),!r.trim()||!o||!s){c("Por favor, complete todos los campos");return}d(!0);try{const B=await E(e.trim(),r.trim(),o,s);if(!B.success){c("Error al registrar empleado: "+B.error),d(!1);return}y({idEmpleado:B.empleado.idEmpleado,codigoEmpleado:B.empleado.codigoEmpleado,empleado:B.empleado.nombre,idPlanta:B.empleado.idPlanta,planta:(Q=B.empleado.plantas)==null?void 0:Q.planta,idEsquemaPago:B.empleado.idEsquemaPago||null}),w("/employee")}catch(B){c("Error al procesar el registro"),console.error("Error:",B)}finally{d(!1)}},I=()=>{v(1),n(""),i(""),a(""),c("")};return h===1?f.jsxs(mf,{onSubmit:S,children:[f.jsx(vf,{children:"Acceso Empleado"}),f.jsx(gf,{children:"Ingresa tu código de empleado para acceder al sistema"}),l&&f.jsx(kf,{children:l}),f.jsxs(_i,{children:[f.jsx(bi,{children:"Número de Empleado"}),f.jsx(Hk,{type:"text",inputMode:"numeric",pattern:"[0-9]*",placeholder:"Ej: 12345",value:e,onChange:$=>{const Q=$.target.value.replace(/\D/g,"");t(Q)},disabled:u||C,required:!0,autoComplete:"employee-id"})]}),f.jsx(xf,{type:"submit",disabled:u||C,children:u||C?"Verificando...":"Acceder"})]}):f.jsxs(mf,{onSubmit:P,children:[f.jsx(vf,{children:"Registro de Empleado"}),f.jsx(gf,{children:"No encontramos tu código de empleado. Por favor, completa la siguiente información:"}),l&&f.jsx(kf,{children:l}),f.jsxs(Kk,{children:["Código de empleado: ",f.jsx("strong",{children:e})]}),f.jsxs(_i,{children:[f.jsx(bi,{children:"Nombre Completo"}),f.jsx(Vk,{type:"text",placeholder:"Ej: Juan Pérez García",value:r,onChange:$=>n($.target.value),disabled:u||C||m,required:!0,autoComplete:"name"})]}),f.jsxs(_i,{children:[f.jsx(bi,{children:"Planta"}),p?f.jsx(wf,{disabled:!0,children:"Cargando plantas..."}):f.jsxs(yf,{value:o,onChange:$=>i($.target.value),disabled:u||C||m,required:!0,children:[f.jsx("option",{value:"",children:"Seleccione su planta..."}),b.map($=>f.jsx("option",{value:$.idPlanta,children:$.planta},$.idPlanta))]})]}),f.jsxs(_i,{children:[f.jsx(bi,{children:"Esquema de Pago"}),m?f.jsx(wf,{disabled:!0,children:"Cargando esquemas..."}):f.jsxs(yf,{value:s,onChange:$=>a($.target.value),disabled:u||C||m,required:!0,children:[f.jsx("option",{value:"",children:"Seleccione su esquema de pago..."}),g.map($=>f.jsx("option",{value:$.idEsquemaPago,children:$.esquemaPago},$.idEsquemaPago))]})]}),f.jsxs(Gk,{children:[f.jsx(Qk,{type:"button",onClick:I,disabled:u||C||m,children:"Volver"}),f.jsx(xf,{type:"submit",disabled:u||C||m,style:{flex:1},children:u||C||m?"Registrando...":"Registrar y Acceder"})]})]})},mf=_.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,gf=_.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,vf=_.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,_i=_.div`
  margin-bottom: 1.5rem;
`,bi=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,_g=_.input`
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
`,Hk=_(_g)`
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
`,Vk=_(_g)``,yf=_.select`
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
`,wf=_.div`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: var(--color-gray);
`,xf=_.button`
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
`,kf=_.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,Kk=_.div`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.9rem;
`,Gk=_.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Qk=_.button`
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
`,Jk=()=>{const[e,t]=x.useState(""),[r,n]=x.useState(""),[o,i]=x.useState(!1),{adminLogin:s,authError:a,clearAuthError:l}=qn(),c=Ko(),u=x.useRef(null);x.useEffect(()=>{u.current&&u.current.focus()},[]);const d=async h=>{if(h.preventDefault(),h.stopPropagation(),!(!e.trim()||!r.trim())){l(),i(!0);try{(await s(e.trim(),r)).success&&(t(""),n(""),c("/admin"))}catch(v){console.error("Error en handleSubmit:",v)}finally{i(!1)}}};return f.jsxs(Yk,{onSubmit:d,children:[f.jsx(Zk,{children:"Acceso Administrador"}),f.jsx(Xk,{children:"Ingresa tus credenciales de administrador para acceder al panel de control"}),a&&f.jsxs(t_,{$shake:!!a,children:[f.jsx(r_,{children:"⚠️"}),a]}),f.jsxs(_f,{children:[f.jsx(bf,{children:"Usuario"}),f.jsx(Sf,{ref:u,type:"text",placeholder:"Ingrese su usuario",value:e,onChange:h=>{t(h.target.value),a&&l()},disabled:o,autoComplete:"username",$hasError:a&&!e.trim()})]}),f.jsxs(_f,{children:[f.jsx(bf,{children:"Contraseña"}),f.jsx(Sf,{type:"password",placeholder:"Ingrese su contraseña",value:r,onChange:h=>{n(h.target.value),a&&l()},disabled:o,autoComplete:"current-password",$hasError:a&&!r.trim()})]}),f.jsx(e_,{type:"submit",disabled:o||!e.trim()||!r.trim(),onSubmit:h=>h.preventDefault(),children:o?f.jsxs(f.Fragment,{children:[f.jsx(n_,{}),"Iniciando sesión..."]}):"Iniciar Sesión"})]})},Yk=_.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,Xk=_.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,Zk=_.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,_f=_.div`
  margin-bottom: 1.5rem;
`,bf=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,Sf=_.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${e=>e.$hasError?"var(--color-danger)":"var(--color-secondary)"};
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?"var(--color-danger)":"var(--color-accent)"};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(220, 53, 69, 0.25)":"rgba(229, 74, 46, 0.25)"};
  }

  &:disabled {
    background-color: var(--color-light);
    cursor: not-allowed;
    opacity: 0.7;
  }

  ${e=>e.$hasError&&`
    background-color: rgba(220, 53, 69, 0.05);
  `}
`,e_=_.button`
  width: 100%;
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(229, 74, 46, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }
`,t_=_.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: ${e=>e.$shake?"shake 0.5s ease-in-out":"none"};
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`,r_=_.span`
  font-size: 1rem;
  flex-shrink: 0;
`,n_=_.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,o_="/ventanilla/assets/logo-DOgx6EZv.png",i_=()=>{const[e,t]=x.useState("employee");return f.jsxs(s_,{children:[f.jsxs(a_,{children:[f.jsx("img",{src:o_,alt:"Logo de la empresa",style:{height:"80px"}}),f.jsx(l_,{children:"Ventanilla de atención al empleado"})]}),f.jsx(c_,{children:f.jsxs(u_,{children:[f.jsxs(d_,{children:[f.jsxs(Ef,{$active:e==="employee",onClick:()=>t("employee"),children:[f.jsx(Cf,{children:"👤"}),"Empleado"]}),f.jsxs(Ef,{$active:e==="admin",onClick:()=>t("admin"),children:[f.jsx(Cf,{children:"🔑"}),"Administrador"]})]}),f.jsxs(f_,{children:[e==="employee"&&f.jsx(Wk,{}),e==="admin"&&f.jsx(Jk,{})]})]})})]})},s_=_.div`
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
`,a_=_.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    /* Removido el filtro que estaba causando problemas */
  }
`,l_=_.h1`
  color: var(--color-primary);
  font-size: 28px;
  font-weight: 600;
  margin: 16px 0 0 0;
`,c_=_.div`
  width: 100%;
  max-width: 500px;
`,u_=_.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,d_=_.div`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,Ef=_.button`
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
`,Cf=_.span`
  font-size: 16px;
`,f_=_.div`
  padding: 0;
`,h_=async(e,t)=>{try{const r=crypto.randomUUID(),n=new Date;n.setDate(n.getDate()+7);const{error:o}=await T.from("ticket_tokens").insert({token:r,idTicket:e,idUsuario:t,fecha_expiracion:n.toISOString(),bActivo:!0});if(o)throw o;return r}catch(r){throw console.error("Error generando token:",r),r}},jf=async(e,t)=>{try{const r=await h_(e.idTicket,t.idUsuario),o=`https://andresdramos.github.io/ventanilla/ticket/${r}`,{data:i,error:s}=await T.functions.invoke("send-email-notification",{body:{ticketData:e,usuario:t,directLink:o,notificationType:"delegacion"}});if(s)throw console.error("Error invocando Edge Function:",s),s;return{success:i.success,token:r,directLink:o,emailResult:{success:i.success,messageId:i.messageId,to:i.to}}}catch(r){return console.error("Error enviando notificación de delegación:",r),{success:!1,error:r.message}}},p_=e=>{const[t,r]=x.useState([]),[n,o]=x.useState(!0),[i,s]=x.useState(null),a=x.useRef(!1),l=x.useRef(null),c=x.useCallback(async(u={})=>{if(e)try{o(!0);const d=async p=>{var g;try{if((g=p.seguimientos)==null?void 0:g.find(E=>E.idEstado===1))return{success:!0,mensaje:"Ya tiene seguimiento inicial"};const{error:k}=await T.from("seguimientos").insert({idTicket:p.idTicket,idUsuario:null,idEstado:1});if(k)throw k;return{success:!0,mensaje:"Seguimiento inicial creado"}}catch(m){return console.error("Error creando seguimiento inicial:",m),{success:!1,error:m.message}}};let h=T.from("tickets").select(`
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
            comentario,
            usuarios (
              nombre
            )
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
          )
        `).order("idTicket",{ascending:!1});if((e==null?void 0:e.idRol)===2){const{data:p}=await T.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);if(!(p&&p.length>0)){r([]),o(!1);return}}if(u.planta){const{data:p}=await T.from("empleados").select("idEmpleado").eq("idPlanta",u.planta);if(p&&p.length>0){const g=p.map(m=>m.idEmpleado);h=h.in("idEmpleado",g)}else{r([]),o(!1);return}}if(u.tipoSolicitud&&(h=h.eq("idTipoSolicitud",u.tipoSolicitud)),u.prioridad&&(h=h.eq("idPrioridad",u.prioridad)),u.empleado){const{data:p}=await T.from("empleados").select("idEmpleado").or(`codigoEmpleado.ilike.%${u.empleado}%,nombre.ilike.%${u.empleado}%`);if(p&&p.length>0){const g=p.map(m=>m.idEmpleado);h=h.in("idEmpleado",g)}else{r([]),o(!1);return}}const{data:v,error:y}=await h;if(y)throw y;let w=v||[];const b=w.filter(p=>{var g;return!((g=p.seguimientos)!=null&&g.find(m=>m.idEstado===1))});if(b.length>0){const p=b.map(g=>d(g));try{await Promise.all(p);const{data:g}=await h;g&&(w=g)}catch(g){console.error("Error en migración de seguimientos:",g)}}if((e==null?void 0:e.idRol)!==1)if(e.idRol===3){const{data:p}=await T.from("delegaciones").select("idTicket").eq("idUsuario",e.id).eq("bActivo",!0);if(p&&p.length>0){const g=p.map(m=>m.idTicket);w=w.filter(m=>g.includes(m.idTicket))}else w=[]}else{const{data:p}=await T.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);p&&p.length>0?w=w.filter(g=>p.some(k=>{var E;return((E=g.empleados)==null?void 0:E.idPlanta)===k.idPlanta&&g.idTipoSolicitud===k.idTipoSolicitud})):w=[]}u.sortBy==="prioridad"?w.sort((p,g)=>p.idPrioridad-g.idPrioridad):w.sort((p,g)=>{var E,C,S,P;const m=(C=(E=p.seguimientos)==null?void 0:E.find(I=>I.idEstado===1))==null?void 0:C.fecha,k=(P=(S=g.seguimientos)==null?void 0:S.find(I=>I.idEstado===1))==null?void 0:P.fecha;return!m&&!k?0:m?k?new Date(k)-new Date(m):-1:1}),r(w),s(null)}catch(d){console.error("Error fetching tickets:",d),s(d.message)}finally{o(!1)}},[e]);return x.useEffect(()=>{e&&(l.current!==e.id||!a.current)&&(l.current=e.id,a.current=!0,c())},[e,c]),{tickets:t,loading:n,error:i,refetchTickets:c}},m_=e=>({total:e.length,sinAtender:e.filter(r=>r.idEstado===1).length,reasignados:e.filter(r=>r.idEstado===2).length,atendidos:e.filter(r=>r.idEstado===3).length,cerrados:e.filter(r=>r.idEstado===4).length,cancelados:e.filter(r=>r.idEstado===5).length}),bg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const{data:s,error:a}=await T.from("asignaciones").select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `);if(a)throw a;t(s||[])}catch(s){console.error("Error fetching asignaciones:",s)}finally{n(!1)}})()},[]);const o=x.useCallback((i,s)=>{var l;const a=e.find(c=>c.idPlanta===i&&c.idTipoSolicitud===s);return((l=a==null?void 0:a.usuarios)==null?void 0:l.nombre)||"No asignado"},[e]);return{asignaciones:e,loading:r,getResponsable:o}},g_=e=>{const[t,r]=x.useState(!1),n=x.useCallback(async(l,c,u)=>{var d;try{r(!0);const{error:h}=await T.from("seguimientos").insert({idTicket:l,idUsuario:c,idEstado:3});if(h)throw h;const{data:v,error:y}=await T.from("atenciones").insert({idTicket:l,idUsuario:c,respuesta:u}).select().single();if(y)throw y;const{error:w}=await T.from("tickets").update({idEstado:3}).eq("idTicket",l);if(w)throw w;const{error:b}=await T.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);return b&&((d=b.message)!=null&&d.includes("0 rows")),{success:!0,atencion:v}}catch(h){return console.error("Error al registrar la atención:",h),{success:!1,error:h.message}}finally{r(!1)}},[]),o=x.useCallback(async(l,c,u)=>{try{r(!0);try{const{error:m}=await T.from("ticket_tokens").update({bActivo:!1,fecha_uso:new Date().toISOString()}).eq("idTicket",l).eq("bActivo",!0)}catch{}const{data:d,error:h}=await T.from("tickets").select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `).eq("idTicket",l).single();if(h)throw h;const{data:v,error:y}=await T.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",u).single();if(y)throw y;const{error:w}=await T.from("seguimientos").insert({idTicket:l,idUsuario:c,idEstado:2});if(w)throw w;const{error:b}=await T.from("tickets").update({idEstado:2}).eq("idTicket",l);if(b)throw b;const{error:p}=await T.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(p)throw p;const{error:g}=await T.from("delegaciones").insert({idTicket:l,idUsuario:u});if(g)throw g;try{(await jf(d,v)).success}catch{}return{success:!0,mensaje:"Ticket delegado exitosamente.",ticketData:d,usuarioDestino:v}}catch(d){return console.error("Error al delegar el ticket:",d),{success:!1,error:d.message}}finally{r(!1)}},[]),i=x.useCallback(async(l,c,u)=>{try{r(!0);const{error:d}=await T.from("seguimientos").insert({idTicket:l,idUsuario:c,idEstado:5});if(d)throw d;const{data:h,error:v}=await T.from("atenciones").insert({idTicket:l,respuesta:u}).select().single();if(v)throw v;const{error:y}=await T.from("tickets").update({idEstado:5}).eq("idTicket",l);if(y)throw y;return{success:!0,atencion:h}}catch(d){return console.error("Error al cancelar el ticket:",d),{success:!1,error:d.message}}finally{r(!1)}},[]),s=x.useCallback(async(l,c)=>{if(!e)return{success:!1,error:"Usuario no disponible"};r(!0);try{try{const{error:v}=await T.from("ticket_tokens").update({bActivo:!1,fecha_uso:new Date().toISOString()}).eq("idTicket",l).eq("bActivo",!0)}catch{}const{error:u}=await T.from("seguimientos").insert({idTicket:l,idUsuario:e.id,idEstado:2});if(u)throw u;const{error:d}=await T.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(d)throw d;const{error:h}=await T.from("delegaciones").insert({idTicket:l,idUsuario:c});if(h)throw h;try{const{data:v,error:y}=await T.from("usuarios").select("idUsuario, idRol, correo, nombre").eq("idUsuario",c).single();if(!y&&v&&v.idRol===3){const{data:w,error:b}=await T.from("tickets").select(`
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            `).eq("idTicket",l).single();if(!b&&w){const p=await jf(w,v);p.success||console.error("Error al enviar notificación de reasignación:",p.error)}}}catch(v){console.error("Error en proceso de notificación de reasignación:",v)}return{success:!0}}catch(u){return console.error("Error al re-asignar el ticket:",u),{success:!1,error:u.message}}finally{r(!1)}},[e]),a=x.useCallback(async l=>{r(!0);try{const{error:c}=await T.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(c)throw c;return{success:!0}}catch(c){return console.error("Error al autoasignarse el ticket:",c),{success:!1,error:c.message}}finally{r(!1)}},[]);return{crearAtencion:n,delegarTicket:o,cancelarTicket:i,reasignarTicket:s,autoasignarTicket:a,loading:t}},Sg=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(null),o=x.useCallback(async(s,a=null)=>{var l,c;try{if(t(!0),n(null),!s||isNaN(parseInt(s)))return null;const{data:u,error:d}=await T.from("atenciones").select(`
          idUsuario,
          usuarios (
            nombre
          )
        `).eq("idTicket",parseInt(s)).limit(1).maybeSingle();if(!d&&((l=u==null?void 0:u.usuarios)!=null&&l.nombre))return{nombre:u.usuarios.nombre,fecha:null};const{data:h,error:v}=await T.from("tickets").select("idEmpleado, idTipoSolicitud").eq("idTicket",s).maybeSingle();if(!v&&h){const{data:y,error:w}=await T.from("empleados").select("idPlanta").eq("idEmpleado",h.idEmpleado).maybeSingle();if(!w&&y){const{data:b,error:p}=await T.from("asignaciones").select(`
              usuarios (
                nombre
              )
            `).eq("idTipoSolicitud",h.idTipoSolicitud).eq("idPlanta",y.idPlanta).maybeSingle();if(!p&&((c=b==null?void 0:b.usuarios)!=null&&c.nombre))return{nombre:b.usuarios.nombre,fecha:null}}}return null}catch(u){return console.error("Error en obtenerUsuarioQueAtendio:",u),n(u.message),null}finally{t(!1)}},[]),i=x.useCallback(async s=>{var a;if(!s||s.length===0)return{};try{t(!0),n(null);const{data:l,error:c}=await T.from("atenciones").select(`
          idTicket,
          idUsuario,
          usuarios (
            nombre
          )
        `).in("idTicket",s),u={};!c&&l&&l.forEach(h=>{var v;(v=h.usuarios)!=null&&v.nombre&&(u[h.idTicket]={nombre:h.usuarios.nombre,fecha:null})});const d=s.filter(h=>!u[h]);if(d.length>0){const{data:h,error:v}=await T.from("tickets").select("idTicket, idEmpleado, idTipoSolicitud").in("idTicket",d);if(!v&&h)for(const y of h){const{data:w,error:b}=await T.from("empleados").select("idPlanta").eq("idEmpleado",y.idEmpleado).maybeSingle();if(!b&&w){const{data:p,error:g}=await T.from("asignaciones").select(`
                  usuarios (
                    nombre
                  )
                `).eq("idTipoSolicitud",y.idTipoSolicitud).eq("idPlanta",w.idPlanta).maybeSingle();!g&&((a=p==null?void 0:p.usuarios)!=null&&a.nombre)&&(u[y.idTicket]={nombre:p.usuarios.nombre,fecha:null})}}}return u}catch(l){return console.error("Error en obtenerUsuariosQueAtendieron:",l),n(l.message),{}}finally{t(!1)}},[]);return{obtenerUsuarioQueAtendio:o,obtenerUsuariosQueAtendieron:i,loading:e,error:r}},Oe=e=>{if(!e)return"Fecha no disponible";if(e.includes("T")&&e.includes("+00:00")){const r=e.split("T")[0],n=e.split("T")[1].split("+")[0],[o,i,s]=r.split("-"),[a,l]=n.split(":");return`${s}/${i}/${o}, ${a}:${l}`}return new Date(e).toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},v_=({user:e,onLogout:t})=>f.jsxs(y_,{children:[f.jsxs(w_,{children:[f.jsx("h1",{children:"Dashboard Administrativo"}),f.jsxs("p",{children:["Bienvenido, ",e==null?void 0:e.nombre]})]}),f.jsx(x_,{onClick:t,children:"Cerrar Sesión"})]}),y_=_.header`
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
`,w_=_.div`
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
`,x_=_.button`
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
`,k_=({stats:e,statsFilter:t,onStatsFilterChange:r})=>{const n={sinAtender:{id:1,label:"Nuevos",color:"var(--color-estado-sin-atender)",count:e.sinAtender},reasignados:{id:2,label:"Asignados",color:"var(--color-estado-delegado)",count:e.reasignados},atendidos:{id:3,label:"Atendidos",color:"var(--color-estado-atendido)",count:e.atendidos},cerrados:{id:4,label:"Cerrados",color:"var(--color-estado-cerrado)",count:e.cerrados},cancelados:{id:5,label:"Cancelados",color:"var(--color-estado-cancelado)",count:e.cancelados}},o=i=>{r(t===i?null:i)};return f.jsxs(__,{children:[f.jsxs(b_,{children:["Tickets: ",e.total]}),f.jsx(S_,{children:Object.entries(n).map(([i,s])=>f.jsxs(E_,{$active:t===i,$color:s.color,onClick:()=>o(i),children:[f.jsx(C_,{$active:t===i,$color:s.color,children:s.count}),f.jsx(j_,{$active:t===i,$color:s.color,children:s.label})]},i))})]})},__=_.div`
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
  }
`,b_=_.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`,S_=_.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, fr);
    gap: 0.5rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,E_=_.div`
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
`,C_=_.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  margin-bottom: 0.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`,j_=_.div`
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,T_=({tempFilters:e,onTempFilterChange:t,onApplyFilters:r,onClearFilters:n,plantas:o,tipos:i,prioridades:s})=>{const[a,l]=x.useState(!1);return f.jsxs(P_,{children:[f.jsxs($_,{onClick:()=>l(!a),children:[f.jsx("h3",{children:"Filtros"}),f.jsx(R_,{$expanded:a,children:a?"▲":"▼"})]}),a&&f.jsxs(A_,{children:[f.jsxs(I_,{children:[f.jsxs(Si,{children:[f.jsx("label",{children:"Planta:"}),f.jsxs("select",{value:e.planta,onChange:c=>t("planta",c.target.value),children:[f.jsx("option",{value:"",children:"Todas"}),o.map(c=>f.jsx("option",{value:c.idPlanta,children:c.planta},c.idPlanta))]})]}),f.jsxs(Si,{children:[f.jsx("label",{children:"Tipo:"}),f.jsxs("select",{value:e.tipoSolicitud,onChange:c=>t("tipoSolicitud",c.target.value),children:[f.jsx("option",{value:"",children:"Todos"}),i.sort((c,u)=>c.idTipoSolicitud-u.idTipoSolicitud).map(c=>f.jsx("option",{value:c.idTipoSolicitud,children:c.tipoSolicitud},c.idTipoSolicitud))]})]}),f.jsxs(Si,{children:[f.jsx("label",{children:"Prioridad:"}),f.jsxs("select",{value:e.prioridad,onChange:c=>t("prioridad",c.target.value),children:[f.jsx("option",{value:"",children:"Todas"}),s.map(c=>f.jsx("option",{value:c.idPrioridad,children:c.prioridad},c.idPrioridad))]})]}),f.jsxs(Si,{children:[f.jsx("label",{children:"Empleado:"}),f.jsx("input",{type:"text",placeholder:"Código o nombre...",value:e.empleado,onChange:c=>t("empleado",c.target.value)})]})]}),f.jsxs(O_,{children:[f.jsx("label",{children:"Ordenar por:"}),f.jsxs("select",{value:e.sortBy,onChange:c=>t("sortBy",c.target.value),children:[f.jsx("option",{value:"fecha",children:"Fecha de creación"}),f.jsx("option",{value:"prioridad",children:"Prioridad"})]})]}),f.jsxs(L_,{children:[f.jsx(U_,{onClick:n,children:"Limpiar"}),f.jsx(N_,{onClick:r,children:"Aplicar"})]})]})]})},P_=_.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`,$_=_.div`
  padding: 0.5rem 1rem;
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
`,R_=_.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`,A_=_.div`
  padding: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`,I_=_.div`
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
`,Si=_.div`
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
`,O_=_.div`
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
`,L_=_.div`
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
`,N_=_.button`
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
`,U_=_.button`
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
`,Eg=(e,t,r)=>{const[n,o]=x.useState(null);return x.useEffect(()=>{(async()=>{var a,l;if(!e||!e.idTicket){o(null);return}try{const{data:c,error:u}=await T.from("ticket_tokens").select("idUsuario").eq("idTicket",e.idTicket).eq("bActivo",!0).maybeSingle();let d=null;if(!u&&(c!=null&&c.idUsuario))d=c.idUsuario;else{if(e.idTipoSolicitud&&e.idEmpleado)try{const{data:h,error:v}=await T.from("empleados").select("idPlanta").eq("idEmpleado",e.idEmpleado).single();if(!v&&(h!=null&&h.idPlanta)){const{data:y,error:w}=await T.from("asignaciones").select("idUsuario").eq("idTipoSolicitud",e.idTipoSolicitud).eq("idPlanta",h.idPlanta).single();!w&&(y!=null&&y.idUsuario)&&(d=y.idUsuario)}}catch{}d||(d=((a=e.asignaciones)==null?void 0:a.idUsuario)||null)}if(d){const{data:h,error:v}=await T.from("usuarios").select("nombre").eq("idUsuario",d).single();!v&&(h!=null&&h.nombre)?o(h.nombre):o(null)}else o(null)}catch{const u=(l=e.asignaciones)==null?void 0:l.idUsuario;if(u)try{const{data:d,error:h}=await T.from("usuarios").select("nombre").eq("idUsuario",u).single();!h&&(d!=null&&d.nombre)?o(d.nombre):o(null)}catch{o(null)}else o(null)}})()},[e]),x.useMemo(()=>{var h;const s=()=>n,a=()=>{var y,w;const v=(w=(y=e.seguimientos)==null?void 0:y.find(b=>b.idEstado===1))==null?void 0:w.fecha;return v?r?r(v):Oe(v):"Pendiente seguimiento inicial"},l=()=>{const v={1:()=>a(),2:()=>{var w,b;const y=(b=(w=e.seguimientos)==null?void 0:w.find(p=>p.idEstado===2))==null?void 0:b.fecha;return y?r?r(y):Oe(y):a()},3:()=>{var w,b;const y=(b=(w=e.seguimientos)==null?void 0:w.find(p=>p.idEstado===3))==null?void 0:b.fecha;return y?r?r(y):Oe(y):a()},4:()=>{var w,b;const y=(b=(w=e.seguimientos)==null?void 0:w.find(p=>p.idEstado===4))==null?void 0:b.fecha;return y?r?r(y):Oe(y):a()},5:()=>{var w,b;const y=(b=(w=e.seguimientos)==null?void 0:w.find(p=>p.idEstado===5))==null?void 0:b.fecha;return y?r?r(y):Oe(y):a()}};return v[e.idEstado]?v[e.idEstado]():a()},c=()=>({1:"Sin atender",2:"Asignado",3:"Atendido",4:"Cerrado",5:"Cancelado"})[e.idEstado]||"Pendiente",u=()=>({1:"var(--color-estado-sin-atender)",2:"var(--color-estado-delegado)",3:"var(--color-estado-atendido)",4:"var(--color-estado-cerrado)",5:"var(--color-estado-cancelado)"})[e.idEstado]||"#ffc107",d=()=>({1:"Fecha de creación:",2:"Fecha de asignación:",3:"Fecha de atención:",4:"Fecha de cierre:",5:"Fecha de cancelación:"})[e.idEstado]||"Fecha de creación:";return{usuarioDelegado:s(),fechaCreacion:a(),fechaRelevante:l(),estadoTexto:c(),estadoColor:u(),etiquetaFecha:d(),borderColor:u(),isResolved:t==="admin"?((h=e.atenciones)==null?void 0:h.length)>0:!1}},[e,t,r,n])},z_=_.div`
  background: white;
  border-radius: 8px;
  border-left: 4px solid var(--color-secondary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`,D_=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${e=>e.$isResolved?"#f8f9fa":"white"};
  border-bottom: ${e=>e.$isExpanded?"1px solid #e9ecef":"none"};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`,F_=_.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`,M_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,B_=_.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$priority||"var(--color-secondary)"};
`,q_=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,W_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,H_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,V_=_.button`
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

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`,K_=_.button`
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.4rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  width: 32px;
  height: 32px;

  &:hover {
    background: var(--color-accent-dark, #d4ac0d);
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,G_=_.button`
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

  @media (max-width: 768px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
`,Cg=_.button`
  background: transparent;
  border: none;
  color: var(--color-gray);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }

  @media (min-width: 769px) {
    display: none;
  }
`,Q_=_.div`
  overflow: hidden;
  
  @media (max-width: 768px) {
    /* Controlar altura y visibilidad sin cambiar layout interno */
    max-height: ${e=>e.$isExpanded?"500px":"0px"};
    padding: ${e=>e.$isExpanded?"0.5rem 0":"0"};
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    
    /* Forzar layout consistente manteniendo los elementos en su estado expandido */
    /* para evitar cambios de altura durante la transición */
  }

  @media (min-width: 769px) {
    max-height: none;
  }
`,Kt=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #f8f9fa;
`,Gt=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
  min-width: 120px;
`,Qt=_.span`
  color: var(--color-text);
  font-size: 0.85rem;
  text-align: right;
  flex: 1;
`;_.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
  }
`;_.p`
  margin: 0;
  color: #495057;
  font-size: 0.85rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;const J_=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Y_=({ticket:e,ticketData:t,onAtender:r,onVerRespuesta:n,isExpanded:o,onToggleExpand:i})=>{const s=c=>{c.stopPropagation(),r==null||r(e)},a=c=>{c.stopPropagation(),n==null||n(e)},l=c=>{c.stopPropagation(),i==null||i()};return f.jsxs(f.Fragment,{children:[t.isResolved?f.jsx(J_,{children:f.jsx(K_,{onClick:a,title:"Ver respuesta del ticket",children:f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}):f.jsx(W_,{children:f.jsx(V_,{onClick:s,children:"Atender"})}),f.jsx(Cg,{onClick:l,children:o?"▲":"▼"})]})},X_=({ticket:e,ticketData:t,onShowDetails:r,isExpanded:n,onToggleExpand:o})=>{const i=a=>{a.stopPropagation(),r==null||r(e)},s=a=>{a.stopPropagation(),o==null||o()};return f.jsxs(f.Fragment,{children:[f.jsx(H_,{children:f.jsx(G_,{$estadoColor:t.estadoColor,onClick:i,title:"Ver detalles del ticket",children:t.estadoTexto})}),f.jsx(Cg,{onClick:s,children:n?"▲":"▼"})]})},Z_=({ticket:e,mode:t,ticketData:r,getPriorityColor:n,onAtender:o,onVerRespuesta:i,onShowDetails:s,isExpanded:a,onToggleExpand:l})=>{var c;return f.jsxs(D_,{$isResolved:r.isResolved,$isExpanded:a,onClick:l,children:[f.jsxs(F_,{children:[f.jsx(B_,{$priority:n(e.idPrioridad),children:(c=e.prioridades)==null?void 0:c.prioridad}),f.jsxs(q_,{children:["#",e.idTicket]})]}),f.jsx(M_,{children:t==="admin"?f.jsx(Y_,{ticket:e,ticketData:r,onAtender:o,onVerRespuesta:i,isExpanded:a,onToggleExpand:l}):f.jsx(X_,{ticket:e,ticketData:r,onShowDetails:s,isExpanded:a,onToggleExpand:l})})]})},eb=(e,t,r)=>r==="employee"?"Asignado a:":(e==null?void 0:e.idRol)===3?t===2?"Asignado a:":"Asignado por:":"Asignado a:",tb=(e,t,r)=>{var n;return t.usuarioDelegado?t.usuarioDelegado:(r==null?void 0:r((n=e.empleados)==null?void 0:n.idPlanta,e.idTipoSolicitud))||"No asignado"},rb=(e,t=20)=>e?e.length>t?`${e.substring(0,t).trim()}...`:e:"",nb=({ticket:e,mode:t,ticketData:r,getResponsable:n,currentUser:o,isExpanded:i})=>{var l,c,u,d;const s=eb(o,e.idEstado,t),a=tb(e,r,n);return f.jsx(Q_,{$isExpanded:i,children:t==="admin"?f.jsxs(f.Fragment,{children:[f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:"Empleado:"}),f.jsx(Qt,{$isExpanded:i,children:rb((l=e.empleados)==null?void 0:l.nombre)})]}),f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:"Código:"}),f.jsx(Qt,{$isExpanded:i,children:(c=e.empleados)==null?void 0:c.codigoEmpleado})]}),f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:"Fecha:"}),f.jsx(Qt,{$isExpanded:i,children:r.fechaRelevante})]}),f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:"Tipo:"}),f.jsx(Qt,{$isExpanded:i,children:(u=e.tiposSolicitud)==null?void 0:u.tipoSolicitud})]}),n&&f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:s}),f.jsx(Qt,{$isExpanded:i,children:a})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:r.etiquetaFecha}),f.jsx(Qt,{$isExpanded:i,children:r.fechaRelevante})]}),f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:"Tipo:"}),f.jsx(Qt,{$isExpanded:i,children:(d=e.tiposSolicitud)==null?void 0:d.tipoSolicitud})]}),n&&f.jsxs(Kt,{$isExpanded:i,children:[f.jsx(Gt,{$isExpanded:i,children:s}),f.jsx(Qt,{$isExpanded:i,children:a})]})]})})},cc=({ticket:e,mode:t="employee",formatDate:r,getPriorityColor:n,getResponsable:o,onAtender:i,onVerRespuesta:s,onShowDetails:a,isExpanded:l=!1,onToggleExpand:c,currentUser:u=null})=>{const d=Eg(e,t,r),h=()=>{c==null||c(e.idTicket)};return f.jsxs(z_,{$borderColor:d.borderColor,$isResolved:d.isResolved,$isExpanded:l,children:[f.jsx(Z_,{ticket:e,mode:t,ticketData:d,getPriorityColor:n,onAtender:i,onVerRespuesta:s,onShowDetails:a,isExpanded:l,onToggleExpand:h}),f.jsx(nb,{ticket:e,mode:t,ticketData:d,getResponsable:o,currentUser:u,isExpanded:l})]})},ob=({tickets:e,mode:t="admin",onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,expandedTicketId:a,onToggleExpand:l,currentUser:c=null})=>e.length===0?f.jsx(Tf,{children:f.jsx(sb,{children:"No se encontraron tickets"})}):f.jsx(Tf,{children:f.jsx(ib,{children:e.map(u=>f.jsx(cc,{ticket:u,mode:t,onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,isExpanded:a===u.idTicket,onToggleExpand:l,currentUser:c},u.idTicket))})}),Tf=_.div`
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
`,ib=_.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 0.5rem;
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
`,sb=_.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  margin: 1rem;
`,ab=(e,t)=>{const[r,n]=x.useState(""),[o,i]=x.useState(""),[s,a]=x.useState(""),[l,c]=x.useState(1),[u,d]=x.useState("");x.useEffect(()=>{e||h()},[e]);const h=()=>{n(""),i(""),a(""),c(1),d("")};return{respuesta:r,setRespuesta:m=>{n(m)},actionType:o,setActionType:i,selectedUser:s,setSelectedUser:m=>{a(m)},calificacion:l,setCalificacion:m=>{c(m)},comentario:u,setComentario:m=>{d(m)},resetState:h,handleClose:()=>{h(),t==null||t()},handleActionChange:m=>{n(""),a(""),i(m)}}},lb=({onSubmit:e,onDelegate:t,onReassign:r,onSelfAssign:n})=>({handleSubmit:(i,s,a)=>{switch(i){case"respond":case"cancel":if(!s.trim())return alert(i==="cancel"?"Debe ingresar un motivo de cancelación":"Debe ingresar una respuesta"),!1;break;case"delegate":if(!a)return alert("Debe seleccionar un usuario para delegar"),!1;break;case"reassign":if(!a)return alert("Debe seleccionar un usuario para reasignar"),!1;break;case"selfassign":if(!s.trim())return alert("Debe ingresar una respuesta"),!1;break;default:return alert("Debe seleccionar una acción"),!1}try{switch(i){case"respond":e==null||e(s.trim(),"respond");break;case"cancel":e==null||e(s.trim(),"cancel");break;case"delegate":t==null||t(a);break;case"reassign":r==null||r(a);break;case"selfassign":n==null||n(),setTimeout(()=>{e==null||e(s.trim(),"respond")},100);break;default:return!1}return!0}catch(l){return console.error("Error en handleSubmit:",l),alert("Error al procesar la acción. Inténtalo de nuevo."),!1}}}),cb=_.div`
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
`,ub=_.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }
`,db=_.div`
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
`,fb=_.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,hb=_.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
    background: #f8f9fa;
  }
`,pb=_.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;

  background: ${e=>{var t;switch((t=e.$priority)==null?void 0:t.toLowerCase()){case"alta":return"#E06363";case"media":return"#E0C563";case"baja":return"#636EE0";default:return"#6c757d"}}};
`,mb=_.div`
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
`,gb=_.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,vb=_.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,yb=_.p`
  margin-bottom: 1rem;
  color: var(--color-primary);
`,wb=_.span`
  font-weight: 600;
`,xb=_.span`
  color: #495057;
`,kb=_.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,_b=_.div`
  margin-bottom: 1.5rem;
`,bb=_.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
  white-space: pre-wrap;
`,Sb=_.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`,Eb=_.p`
  margin: 0;
  color: #1565c0;
  font-size: 0.85rem;
`,Pf=_.div`
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid var(--color-accent);
`,Ba=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,qa=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
`,Wa=_.span`
  color: #495057;
  font-size: 0.85rem;
`,Cb=_.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,jb=_.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${e=>e.$active?"var(--color-accent)":"#dee2e6"};
  background: ${e=>e.$active?"var(--color-accent)":"white"};
  color: ${e=>e.$active?"white":"var(--color-primary)"};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  flex: 1;
  font-size: 0.9rem;

  &:hover {
    border-color: var(--color-accent);
    background: ${e=>e.$active?"#e54a2e":"#fff5f5"};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
  }
`,Tb=_.div`
  margin-top: 1rem;
`,Pb=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,$b=_.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
  min-height: 120px;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(245, 101, 101, 0.1);
  }

  &::placeholder {
    color: #6c757d;
    font-style: italic;
  }
`,$f=_.div`
  margin-top: 1rem;
`,Rf=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;_.select`
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
    box-shadow: 0 0 0 2px rgba(245, 101, 101, 0.1);
  }
`;const Rb=_.div`
  margin-bottom: 1.5rem;
`,Af=_.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`,Ab=_.h5`
  margin: 0 0 0.75rem 0;
  color: var(--color-primary);
  font-weight: 600;
`,Ib=_.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`,If=_.div`
  margin-top: 0.5rem;
  padding: 0;
  background: none;
  border: none;
  font-size: 0.75rem;
  opacity: 0.85;
`,Ei=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ci=_.span`
  font-weight: 500;
  color: #6c757d;
  font-size: 0.7rem;
`,ji=_.span`
  color: #495057;
  font-size: 0.7rem;
  font-weight: 400;
`,Ob=_.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`,Lb=_.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,Nb=_.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,Ub=_.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${e=>e.$filled?"#ffc107":"#dee2e6"};
  cursor: pointer;
  transition: color 0.2s ease, transform 0.1s ease;
  padding: 0.25rem;

  &:hover {
    color: #ffc107;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`,zb=_.div`
  text-align: left;
`,Db=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Fb=_.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
    font-style: italic;
  }
`,Mb=_.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
  background: #f8f9fa;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0.75rem;
  }
`,Of=_.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,Bb=({ticket:e,onClose:t})=>{var r,n;return f.jsxs(db,{children:[f.jsxs(fb,{children:[f.jsx(pb,{$priority:(r=e.prioridades)==null?void 0:r.prioridad,children:(n=e.prioridades)==null?void 0:n.prioridad}),f.jsxs("h3",{children:["#",e.idTicket]})]}),f.jsx(hb,{onClick:t,children:"×"})]})},qb=({ticket:e})=>{var r,n,o,i,s,a,l;const t=(n=(r=e.seguimientos)==null?void 0:r.find(c=>c.idEstado===1))!=null&&n.fecha?Oe(e.seguimientos.find(c=>c.idEstado===1).fecha):"No disponible";return f.jsxs(f.Fragment,{children:[f.jsx(gb,{children:f.jsxs(vb,{children:[(o=e.empleados)==null?void 0:o.nombre," (",(i=e.empleados)==null?void 0:i.codigoEmpleado,") -"," ",(a=(s=e.empleados)==null?void 0:s.plantas)==null?void 0:a.planta]})}),f.jsxs(yb,{children:[f.jsx(wb,{children:"Fecha de generación:"})," ",f.jsx(xb,{children:t})]}),f.jsxs(kb,{children:["Tipo: ",(l=e.tiposSolicitud)==null?void 0:l.tipoSolicitud]}),f.jsx(_b,{children:f.jsx(bb,{children:e.descripcion})})]})},Wb=({ticket:e,mode:t,currentUser:r})=>{var o,i;const n=Eg(e,"admin",s=>Oe(s));if(!e||t==="response")return null;if(e.idEstado===1)return f.jsx(Pf,{children:f.jsxs(Ba,{children:[f.jsx(qa,{children:"Asignado a:"}),f.jsx(Wa,{children:(n==null?void 0:n.usuarioDelegado)||"Determinando asignación..."})]})});if(e.idEstado===2){const s=(i=(o=e.seguimientos)==null?void 0:o.find(a=>a.idEstado===2))==null?void 0:i.fecha;return f.jsxs(f.Fragment,{children:[f.jsxs(Pf,{children:[f.jsxs(Ba,{children:[f.jsx(qa,{children:"Asignado a:"}),f.jsx(Wa,{children:(n==null?void 0:n.usuarioDelegado)||"Usuario no disponible"})]}),f.jsxs(Ba,{children:[f.jsx(qa,{children:"Fecha de asignación:"}),f.jsx(Wa,{children:s?Oe(s):"Fecha no disponible"})]})]}),f.jsx(Sb,{children:f.jsxs(Eb,{children:["Este ticket fue reasignado el"," ",s?Oe(s):"fecha no disponible",".",(r==null?void 0:r.idRol)===3&&f.jsx("span",{children:" Usted puede atender este ticket directamente."})]})})]})}return null},Hb=(e,t)=>{if(!e||!t)return[];const r=[];return(t.idRol===1||t.idRol===2||t.idRol===3)&&(e.idEstado===1&&(r.push({type:"respond",label:"Responder"}),r.push({type:"cancel",label:"Cancelar"}),(t.idRol===1||t.idRol===2)&&r.push({type:"delegate",label:"Asignar"})),e.idEstado===2&&(r.push({type:"respond",label:"Responder"}),r.push({type:"cancel",label:"Cancelar"}),(t.idRol===1||t.idRol===2)&&r.push({type:"reassign",label:"Reasignar"}))),r},Vb=(e,t=!1)=>{if(t)return"Procesando...";switch(e){case"respond":return"Enviar Respuesta";case"cancel":return"Cancelar Ticket";case"delegate":return"Asignar";case"reassign":return"Reasignar";case"selfassign":return"Autoasignar y Responder";default:return"Procesar"}},Kb=(e,t,r,n)=>{if(n)return!1;switch(e){case"respond":case"cancel":case"selfassign":return t.trim().length>0;case"delegate":case"reassign":return r.length>0;default:return!1}},Gb=(e,t)=>{if((t==null?void 0:t.idEstado)===5)return"Motivo de cancelación:";switch(e){case"cancel":return"Motivo de cancelación:";case"respond":case"selfassign":default:return"Su respuesta:"}},Qb=e=>{switch(e){case"cancel":return"Ingrese el motivo por el cual se cancela este ticket...";case"respond":case"selfassign":default:return"Ingrese su respuesta aquí..."}},Jb=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null),s=async()=>{try{n(!0),i(null);const{data:a,error:l}=await T.from("usuarios").select("*").order("idUsuario",{ascending:!1});if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching users:",a)}finally{n(!1)}};return x.useEffect(()=>{s()},[]),{users:e,loading:r,error:o,refetch:s}},uc=({selectedUser:e,onUserSelect:t,placeholder:r="Seleccionar usuario...",disabled:n=!1,allowedRoles:o=[2,3],customFilter:i=null})=>{const[s,a]=x.useState(!1),[l,c]=x.useState(""),[u,d]=x.useState([]),[h,v]=x.useState({top:0,left:0,width:0}),y=x.useRef(null),w=x.useRef(null),{users:b}=Jb();x.useEffect(()=>{let S=b.filter(P=>o.includes(P.idRol));i&&(S=S.filter(i)),l&&(S=S.filter(P=>P.nombre.toLowerCase().includes(l.toLowerCase()))),d(S)},[b,l,o,i]),x.useEffect(()=>{const S=$=>{y.current&&!y.current.contains($.target)&&a(!1)},P=()=>{s&&p()},I=()=>{s&&p()};return document.addEventListener("mousedown",S),window.addEventListener("resize",P),window.addEventListener("scroll",I,!0),()=>{document.removeEventListener("mousedown",S),window.removeEventListener("resize",P),window.removeEventListener("scroll",I,!0)}},[s]);const p=()=>{if(w.current){const S=w.current.getBoundingClientRect();v({top:S.bottom+window.scrollY,left:S.left+window.scrollX,width:S.width})}},g=S=>{t(S.idUsuario),a(!1),c("")},m=()=>{n||(s||p(),a(!s))},k=S=>{c(S.target.value),s||(p(),a(!0))},E=()=>{if(e){const S=b.find(P=>P.idUsuario===parseInt(e));return S?S.nombre:""}return l||""},C=()=>e&&!s?"":r;return f.jsxs(Yb,{ref:y,children:[f.jsxs(Xb,{ref:w,children:[f.jsx(Zb,{type:"text",value:E(),onChange:k,onClick:m,placeholder:C(),disabled:n,$hasValue:!!e}),f.jsx(eS,{$isOpen:s,$disabled:n,onClick:m,children:"▼"})]}),s&&!n&&f.jsx(tS,{$top:h.top,$left:h.left,$width:h.width,children:u.length>0?u.map(S=>f.jsx(rS,{onClick:()=>g(S),$selected:e===S.idUsuario.toString(),children:S.nombre},S.idUsuario)):f.jsx(nS,{children:l?"No se encontraron usuarios":"No hay usuarios disponibles"})})]})},Yb=_.div`
  position: relative;
  width: 100%;
  z-index: 1000;
`,Xb=_.div`
  position: relative;
  display: flex;
  align-items: center;
`,Zb=_.input`
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  background: ${e=>e.disabled?"#f8f9fa":"white"};
  color: ${e=>e.disabled?"#6c757d":"#495057"};
  box-sizing: border-box;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
    font-style: italic;
  }
`,eS=_.div`
  position: absolute;
  right: 0.75rem;
  font-size: 0.8rem;
  color: ${e=>e.$disabled?"#adb5bd":"#6c757d"};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: transform 0.2s ease;
  transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)"};
  user-select: none;

  &:hover {
    color: ${e=>e.$disabled?"#adb5bd":"var(--color-accent)"};
  }
`,tS=_.ul`
  position: fixed;
  top: ${e=>e.$top}px;
  left: ${e=>e.$left}px;
  width: ${e=>e.$width}px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 9999;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,rS=_.li`
  padding: 0.7rem;
  cursor: pointer;
  background: ${e=>e.$selected?"#f8f9fa":"white"};
  color: #495057;
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${e=>e.$selected?"#e9ecef":"#f8f9fa"};
  }

  &:last-child {
    border-bottom: none;
  }
`,nS=_.li`
  padding: 0.75rem;
  color: #6c757d;
  font-style: italic;
  text-align: center;
  background: #f8f9fa;
`,oS=({ticket:e,mode:t,currentUser:r,modalState:n})=>{if(t==="rating")return f.jsxs(Ob,{children:[f.jsx(Lb,{children:"¿Cómo calificarías el servicio?"}),f.jsx(Nb,{children:Array.from({length:3},(i,s)=>f.jsx(Ub,{type:"button",$filled:s<n.calificacion,onClick:()=>n.setCalificacion(s+1),children:s<n.calificacion?"★":"☆"},s))}),f.jsxs(zb,{children:[f.jsx(Db,{children:"Comentario adicional (opcional):"}),f.jsx(Fb,{value:n.comentario,onChange:i=>n.setComentario(i.target.value),placeholder:"Comparte tu experiencia con el servicio...",rows:3})]})]});if(t!=="attend")return null;const o=Hb(e,r);return f.jsxs(f.Fragment,{children:[o.length>0&&f.jsx(Cb,{children:o.map(i=>f.jsx(jb,{$active:n.actionType===i.type,onClick:()=>n.handleActionChange(i.type),children:i.label},i.type))}),f.jsx(iS,{actionType:n.actionType,ticket:e,modalState:n})]})},iS=({actionType:e,ticket:t,modalState:r})=>{switch(e){case"respond":case"selfassign":case"cancel":return f.jsxs(Tb,{children:[f.jsx(Pb,{children:Gb(e,t)}),f.jsx($b,{value:r.respuesta,onChange:n=>r.setRespuesta(n.target.value),placeholder:Qb(e),rows:6})]});case"delegate":return f.jsxs($f,{children:[f.jsx(Rf,{children:"Seleccionar usuario para delegar:"}),f.jsx(uc,{selectedUser:r.selectedUser,onUserSelect:n=>r.setSelectedUser(n),placeholder:"Seleccione un usuario...",allowedRoles:[2,3],customFilter:n=>{var s,a,l,c,u;if(n.idUsuario===((s=r.currentUser)==null?void 0:s.id))return!1;const o=(l=(a=t.atenciones)==null?void 0:a[0])==null?void 0:l.idUsuario;if(o&&n.idUsuario===o)return!1;const i=(u=(c=t.ticket_tokens)==null?void 0:c.find(d=>d.bActivo))==null?void 0:u.idUsuario;return!(i&&n.idUsuario===i)}})]});case"reassign":return f.jsxs($f,{children:[f.jsx(Rf,{children:"Seleccionar usuario para reasignar:"}),f.jsx(uc,{selectedUser:r.selectedUser,onUserSelect:n=>r.setSelectedUser(n),placeholder:"Seleccione un usuario...",allowedRoles:[2,3],customFilter:n=>{var s,a,l,c,u;if(n.idUsuario===((s=r.currentUser)==null?void 0:s.id))return!1;const o=(l=(a=t.atenciones)==null?void 0:a[0])==null?void 0:l.idUsuario;if(o&&n.idUsuario===o)return!1;const i=(u=(c=t.ticket_tokens)==null?void 0:c.find(d=>d.bActivo))==null?void 0:u.idUsuario;return!(i&&n.idUsuario===i)}})]});default:return null}},sS=({ticket:e,usuarioQueAtendio:t})=>{var i;if(!e)return null;const r=e.atenciones&&e.atenciones.length>0,n=r?e.atenciones[0]:null,o=((i=n==null?void 0:n.usuarios)==null?void 0:i.nombre)||(t==null?void 0:t.nombre)||"No disponible";return f.jsxs(Rb,{children:[r&&n.respuesta&&f.jsxs(f.Fragment,{children:[f.jsx(Ab,{children:"Respuesta:"}),f.jsx(Ib,{children:n.respuesta}),(r||e.idEstado===5||e.idEstado===3)&&f.jsxs(If,{children:[f.jsxs(Ei,{children:[f.jsx(Ci,{children:e.idEstado===5?"Cancelado por:":"Atendido por:"}),f.jsx(ji,{children:o})]}),f.jsxs(Ei,{children:[f.jsx(Ci,{children:e.idEstado===5?"Fecha de cancelación:":"Fecha de atención:"}),f.jsx(ji,{children:(()=>{var l,c;const s=e.idEstado===5?5:3,a=(c=(l=e.seguimientos)==null?void 0:l.find(u=>u.idEstado===s))==null?void 0:c.fecha;return a?Oe(a):"No disponible"})()})]})]})]}),!r&&(e.idEstado===5||e.idEstado===3)&&f.jsxs(If,{children:[f.jsxs(Ei,{children:[f.jsx(Ci,{children:e.idEstado===5?"Cancelado por:":"Atendido por:"}),f.jsx(ji,{children:o})]}),f.jsxs(Ei,{children:[f.jsx(Ci,{children:e.idEstado===5?"Fecha de cancelación:":"Fecha de atención:"}),f.jsx(ji,{children:(()=>{var l,c;const s=e.idEstado===5?5:3,a=(c=(l=e.seguimientos)==null?void 0:l.find(u=>u.idEstado===s))==null?void 0:c.fecha;return a?Oe(a):"No disponible"})()})]})]}),e.idEstado===4&&f.jsx(Af,{children:(n==null?void 0:n.calificacion)&&n.calificacion>0&&f.jsxs("div",{children:[f.jsxs("div",{style:{marginBottom:"0.5rem"},children:[f.jsx("strong",{children:"Calificación del empleado:"}),f.jsxs("span",{style:{marginLeft:"0.5rem",fontSize:"1.2rem",color:"#ffc107"},children:["★".repeat(n.calificacion),"☆".repeat(3-n.calificacion)]}),f.jsxs("span",{style:{marginLeft:"0.25rem",fontSize:"0.9rem",color:"#6c757d"},children:["(",n.calificacion,"/3)"]})]}),n.comentario&&n.comentario.trim()&&f.jsxs("div",{style:{marginTop:"0.5rem"},children:[f.jsx("strong",{children:"Comentarios del empleado:"}),f.jsxs("div",{style:{marginTop:"0.25rem",padding:"0.5rem",background:"#f8f9fa",borderRadius:"4px",fontStyle:"italic",color:"#495057"},children:["“",n.comentario,"”"]})]})]})}),e.idEstado===5&&f.jsxs(Af,{style:{background:"#fff3cd",borderLeftColor:"#ffc107",color:"#856404"},children:[f.jsx("strong",{children:"Estado:"})," Este ticket ha sido cancelado."]})]})},aS=({mode:e,actionType:t,loading:r,onSubmit:n,respuesta:o,selectedUser:i,calificacion:s})=>{const a=e==="attend"&&t,l=e==="rating",c=d=>{d.preventDefault(),n==null||n()},u=s>=1&&s<=3;return f.jsxs(Mb,{children:[a&&f.jsx(Of,{onClick:c,disabled:!Kb(t,o,i,r),children:Vb(t,r)}),l&&f.jsx(Of,{onClick:c,disabled:!u||r,children:r?"Enviando...":"Enviar Calificación"})]})},jg=({ticket:e,isOpen:t,onClose:r,mode:n="view",onSubmit:o,onDelegate:i,onReassign:s,onSelfAssign:a,loading:l=!1,usuarioQueAtendio:c=null,currentUser:u=null})=>{var b;const d=ab(t,r),h=lb({onSubmit:o,onDelegate:i,onReassign:s,onSelfAssign:a});if(!t||!e)return null;const v=()=>{if(n==="rating"&&o){o({calificacion:d.calificacion,comentario:d.comentario});return}h.handleSubmit(d.actionType,d.respuesta,d.selectedUser)&&d.resetState()},y=n==="response"||n==="view"&&(e.idEstado===3||e.idEstado===4||e.idEstado===5),w=n==="rating"||n==="view"&&e.idEstado===3&&(u==null?void 0:u.tipo)==="employee"&&((b=e.atenciones)==null?void 0:b[0])&&(!e.atenciones[0].calificacion||e.atenciones[0].calificacion===0);return f.jsx(cb,{children:f.jsxs(ub,{children:[f.jsx(Bb,{ticket:e,onClose:d.handleClose}),f.jsxs(mb,{children:[f.jsx(qb,{ticket:e}),f.jsx(Wb,{ticket:e,mode:n,currentUser:u}),y?f.jsx(sS,{ticket:e,usuarioQueAtendio:c}):f.jsx(oS,{ticket:e,mode:w?"rating":n,currentUser:u,modalState:d})]}),f.jsx(aS,{mode:w?"rating":n,actionType:d.actionType,loading:l,onSubmit:v,respuesta:d.respuesta,selectedUser:d.selectedUser,onClose:d.handleClose,calificacion:d.calificacion})]})})},lS=()=>{const{user:e,logout:t}=qn(),[r,n]=x.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[o,i]=x.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[s,a]=x.useState("sinAtender"),[l,c]=x.useState({show:!1,mode:"view",ticket:null}),[u,d]=x.useState(null),[h,v]=x.useState(null),{tickets:y,loading:w,refetchTickets:b}=p_(e),p=m_(y),{getResponsable:g}=bg(),{crearAtencion:m,delegarTicket:k,cancelarTicket:E,reasignarTicket:C,autoasignarTicket:S,loading:P}=g_(e),{obtenerUsuarioQueAtendio:I}=Sg(),{plantas:$}=vg(),{tipos:Q}=wg(),{prioridades:B}=xg();x.useEffect(()=>{e&&b(r)},[r,e,b]);const De=(U,se)=>{i(yt=>({...yt,[U]:se}))},qt=()=>{n(o)},xr=()=>{const U={planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"};i(U),n(U)},vt=U=>{c({show:!0,mode:"attend",ticket:U})},Ke=async U=>{c({show:!0,mode:"response",ticket:U});try{const se=await I(U.idTicket,U.idEstado);d(se)}catch(se){console.error("Error obteniendo usuario que atendió:",se),d(null)}},R=()=>{c({show:!1,mode:"view",ticket:null}),d(null)},O=async(U,se="respond")=>{let yt;try{se==="respond"?yt=await m(l.ticket.idTicket,e.id,U):se==="cancel"&&(yt=await E(l.ticket.idTicket,e.id,U)),yt.success?(R(),b(r)):alert("Error al procesar la solicitud: "+yt.error)}catch(qr){alert("Error inesperado: "+qr.message)}},L=async U=>{const se=await k(l.ticket.idTicket,e.id,U);se.success?(R(),b(r)):alert("Error al delegar el ticket: "+se.error)},W=async U=>{if(!l.ticket)return;const se=await C(l.ticket.idTicket,U);se.success?(R(),b(r)):alert("Error al re-asignar el ticket: "+se.error)},H=async()=>{if(!l.ticket)return;const U=await S(l.ticket.idTicket);U.success||alert("Error al autoasignarse el ticket: "+U.error)},Ge=U=>{v(h===U?null:U)},ke=y.filter(U=>{if((e==null?void 0:e.idRol)===3||!s)return!0;switch(s){case"sinAtender":return U.idEstado===1;case"reasignados":return U.idEstado===2;case"atendidos":return U.idEstado===3;case"cerrados":return U.idEstado===4;case"cancelados":return U.idEstado===5;default:return!0}}),z=U=>{a(U)},V=U=>{switch(U){case 3:return"#E06363";case 2:return"#E0C563";case 1:return"#636EE0";default:return"#6c757d"}},nt=U=>Oe(U);return w?f.jsx(Lf,{children:f.jsx(uS,{children:"Cargando dashboard..."})}):f.jsxs(Lf,{children:[f.jsxs(cS,{children:[f.jsx(v_,{user:e,onLogout:t}),(e==null?void 0:e.idRol)!==3&&f.jsx(k_,{stats:p,statsFilter:s,onStatsFilterChange:z}),f.jsx(T_,{tempFilters:o,onTempFilterChange:De,onApplyFilters:qt,onClearFilters:xr,plantas:$,tipos:Q,prioridades:B})]}),f.jsx(ob,{tickets:ke,mode:"admin",onAtender:vt,onVerRespuesta:Ke,getResponsable:g,formatDate:nt,getPriorityColor:V,expandedTicketId:h,onToggleExpand:Ge,currentUser:e}),f.jsx(jg,{ticket:l.ticket,isOpen:l.show,onClose:R,mode:l.mode,onSubmit:O,onDelegate:L,onReassign:W,onSelfAssign:H,currentUser:e,loading:P,usuarioQueAtendio:u})]})},Lf=_.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f8f9fa;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 0.5rem;
    height: 100vh;
  }
`,cS=_.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,uS=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: var(--color-gray);
`,dS=e=>{const[t,r]=x.useState([]),[n,o]=x.useState(!1),[i,s]=x.useState(null);x.useEffect(()=>{(async()=>{if(e){o(!0),s(null);try{const{data:h,error:v}=await T.from("tickets").select(`
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
              comentario,
              usuarios (
                nombre
              )
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
            )
          `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(v)throw v;r(h||[])}catch(h){s(h.message),console.error("Error fetching employee tickets:",h)}finally{o(!1)}}})()},[e]);const a=async()=>{if(e){o(!0),s(null);try{const{data:d,error:h}=await T.from("tickets").select(`
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
            comentario,
            usuarios (
              nombre
            )
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
          )
        `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(h)throw h;r(d||[])}catch(d){s(d.message),console.error("Error fetching employee tickets:",d)}finally{o(!1)}}},l=async(d,h,v="")=>{try{o(!0),s(null);const{data:y,error:w}=await T.from("atenciones").select("*").eq("idTicket",d);if(w)throw new Error(`Error consultando atenciones: ${w.message}`);if(!y||y.length===0)throw new Error(`No se encontró ninguna atención previa para el ticket ${d}. El ticket debe haber sido atendido antes de poder calificarlo.`);const{error:b}=await T.from("tickets").update({idEstado:4}).eq("idTicket",d);if(b)throw new Error(`Error actualizando ticket: ${b.message}`);const{error:p}=await T.from("seguimientos").insert({idTicket:d,idEstado:4,fecha:new Date().toISOString()});if(p)throw new Error(`Error insertando seguimiento: ${p.message}`);const g=y[0].idAtencion,{data:m,error:k}=await T.from("atenciones").update({calificacion:h,comentario:v}).eq("idAtencion",g).select();if(k)throw new Error(`Error actualizando atención: ${k.message}`);if(!m||m.length===0)throw new Error("No se pudo actualizar la atención. El registro pudo haber sido modificado por otra transacción.");return await a(),{success:!0,message:"Calificación enviada correctamente"}}catch(y){const w=y.message||"Error desconocido al calificar ticket";return s(w),{success:!1,error:w}}finally{o(!1)}},c=t.filter(d=>!d.atenciones||d.atenciones.length===0),u=t.filter(d=>d.atenciones&&d.atenciones.length>0);return{tickets:t,pendingTickets:c,resolvedTickets:u,loading:n,error:i,refetch:a,calificarTicket:l}},fS=({employeeData:e,onTicketSubmitted:t,onBack:r})=>{const[n,o]=x.useState({idTipoSolicitud:"",descripcion:"",idPrioridad:""}),[i,s]=x.useState({}),{tipos:a,loading:l}=wg(),{prioridades:c,loading:u}=xg(),{createTicket:d,loading:h}=qk(),v=(p,g)=>{o(m=>({...m,[p]:g})),i[p]&&s(m=>({...m,[p]:""}))},y=()=>{const p={};return n.idTipoSolicitud||(p.idTipoSolicitud="Debe seleccionar un tipo de solicitud"),n.descripcion.trim()||(p.descripcion="Debe proporcionar una descripción"),n.idPrioridad||(p.idPrioridad="Debe seleccionar una prioridad"),s(p),Object.keys(p).length===0},w=async p=>{if(p.preventDefault(),!y())return;const g={idEmpleado:e.idEmpleado,idTipoSolicitud:parseInt(n.idTipoSolicitud),descripcion:n.descripcion.trim(),idPrioridad:parseInt(n.idPrioridad)},m=await d(g);m.success&&t(m.ticket)};return l||u?f.jsx(Nf,{children:f.jsx(hS,{children:"Cargando formulario..."})}):f.jsx(Nf,{children:f.jsxs(xS,{children:[f.jsxs(kS,{children:[r&&f.jsx(wS,{onClick:r,type:"button",title:"Volver",children:"← Volver"}),f.jsx(_S,{children:"Crear Nueva Solicitud"})]}),f.jsxs(pS,{onSubmit:w,children:[f.jsxs(mS,{children:[f.jsxs(Uf,{children:[f.jsx(Ha,{children:"Tipo de Solicitud *"}),f.jsxs(zf,{value:n.idTipoSolicitud,onChange:p=>v("idTipoSolicitud",p.target.value),hasError:i.idTipoSolicitud,children:[f.jsx("option",{value:"",children:"Seleccione un tipo..."}),a.sort((p,g)=>p.idTipoSolicitud-g.idTipoSolicitud).map(p=>f.jsx("option",{value:p.idTipoSolicitud,children:p.tipoSolicitud},p.idTipoSolicitud))]}),i.idTipoSolicitud&&f.jsx(Va,{children:i.idTipoSolicitud})]}),f.jsxs(Uf,{children:[f.jsx(Ha,{children:"Prioridad *"}),f.jsxs(zf,{value:n.idPrioridad,onChange:p=>v("idPrioridad",p.target.value),hasError:i.idPrioridad,children:[f.jsx("option",{value:"",children:"Seleccione una prioridad..."}),c.map(p=>f.jsx("option",{value:p.idPrioridad,children:p.prioridad},p.idPrioridad))]}),i.idPrioridad&&f.jsx(Va,{children:i.idPrioridad})]})]}),f.jsxs(gS,{children:[f.jsx(Ha,{children:"Descripción del Problema *"}),f.jsx(vS,{rows:"3",placeholder:"Describe detalladamente tu solicitud o problema...",value:n.descripcion,onChange:p=>v("descripcion",p.target.value),hasError:i.descripcion}),i.descripcion&&f.jsx(Va,{children:i.descripcion})]}),f.jsx(yS,{type:"submit",disabled:h,children:h?"📋 Creando ticket...":"📋 Crear Ticket"})]})]})})},Nf=_.div`
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
`,hS=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-gray);
  font-size: 1.1rem;
`,pS=_.form`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,mS=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`,gS=_.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,Uf=_.div`
  display: flex;
  flex-direction: column;
`,Ha=_.label`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,zf=_.select`
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
`,vS=_.textarea`
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
`,Va=_.span`
  color: var(--color-danger);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`,yS=_.button`
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
`,wS=_.button`
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
`,xS=_.div`
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
`,kS=_.div`
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
`,_S=_.h2`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`,bS=({employeeData:e,onLogout:t})=>{var H,Ge,ke;const{logout:r}=qn(),[n,o]=x.useState("pending"),[i,s]=x.useState(!1),[a,l]=x.useState(null),[c,u]=x.useState(!0),[d,h]=x.useState(null),[v,y]=x.useState(!1),[w,b]=x.useState(null),[p,g]=x.useState(null),[m,k]=x.useState(!1),{buscarEmpleadoPorCodigo:E}=kg(),{esquemas:C}=yg(),{getResponsable:S}=bg(),{obtenerUsuarioQueAtendio:P}=Sg(),{pendingTickets:I,resolvedTickets:$,loading:Q,error:B,refetch:De,calificarTicket:qt}=dS(a==null?void 0:a.idEmpleado),xr=c||Q;x.useEffect(()=>{(async()=>{if(e!=null&&e.codigoEmpleado){u(!0);try{const V=await E(e.codigoEmpleado);V.success&&V.empleado?l(V.empleado):l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}catch(V){console.error("Error al buscar empleado:",V),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}finally{u(!1)}}})()},[e,E]);const vt=z=>{switch(z){case 1:return"#dc3545";case 2:return"#ffc107";case 3:return"#28a745";default:return"#6c757d"}},Ke=z=>Oe(z),R=z=>{h(d===z?null:z)},O=async z=>{if(b(z),y(!0),g(null),z.idEstado===3||z.idEstado===5||z.atenciones&&z.atenciones.length>0)try{const V=await P(z.idTicket,z.idEstado);g(V)}catch(V){console.error("Error obteniendo usuario que atendió/canceló:",V),g(null)}},L=()=>{s(!1),De()},W=()=>{r(),t&&t()};return i?f.jsx(fS,{employeeData:a||e,onTicketSubmitted:L,onLogout:W,onBack:()=>s(!1)}):f.jsxs(SS,{children:[f.jsxs(ES,{children:[f.jsxs(jS,{children:[f.jsxs(TS,{children:[f.jsx($S,{children:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}),f.jsxs(RS,{children:["Código:"," ",(a==null?void 0:a.codigoEmpleado)||(e==null?void 0:e.codigoEmpleado)," ","| Planta:"," ",((H=a==null?void 0:a.plantas)==null?void 0:H.planta)||(e==null?void 0:e.planta)," | Esquema:"," ",((Ge=C.find(z=>z.idEsquemaPago===((a==null?void 0:a.idEsquemaPago)||(e==null?void 0:e.idEsquemaPago))))==null?void 0:Ge.esquemaPago)||"No configurado"]})]}),f.jsx(PS,{children:f.jsx(AS,{onClick:W,children:"Cerrar Sesión"})})]}),f.jsxs(IS,{children:[f.jsxs(Df,{$active:n==="pending",onClick:()=>{o("pending"),h(null)},children:["Tickets Pendientes (",I.length,")"]}),f.jsxs(Df,{$active:n==="resolved",onClick:()=>{o("resolved"),h(null)},children:["Tickets Resueltos (",$.length,")"]})]})]}),f.jsx(CS,{children:f.jsx(OS,{children:f.jsx(LS,{children:xr?f.jsx(zS,{children:"Cargando tickets..."}):B?f.jsxs(DS,{children:["Error al cargar tickets: ",B]}):f.jsx(f.Fragment,{children:n==="pending"?f.jsx(f.Fragment,{children:I.length===0?f.jsxs(Ff,{children:[f.jsx(Mf,{children:"📋"}),f.jsx(Bf,{children:"No tienes tickets pendientes"}),f.jsx(qf,{children:"Aquí aparecerán los tickets que hayas creado y aún no han sido atendidos."})]}):I.map(z=>f.jsx(cc,{ticket:z,mode:"employee",formatDate:Ke,getPriorityColor:vt,getResponsable:S,isResolved:!1,isExpanded:d===z.idTicket,onToggleExpand:R,onShowDetails:O},z.idTicket))}):f.jsx(f.Fragment,{children:$.length===0?f.jsxs(Ff,{children:[f.jsx(Mf,{children:"✅"}),f.jsx(Bf,{children:"No tienes tickets resueltos"}),f.jsx(qf,{children:"Aquí aparecerán los tickets que hayan sido atendidos."})]}):$.map(z=>f.jsx(cc,{ticket:z,mode:"employee",formatDate:Ke,getPriorityColor:vt,getResponsable:S,isResolved:!0,isExpanded:d===z.idTicket,onToggleExpand:R,onShowDetails:O},z.idTicket))})})})})}),f.jsx(NS,{children:f.jsx(US,{onClick:()=>s(!0),children:"+ Crear Nuevo Ticket"})}),f.jsx(jg,{ticket:w,isOpen:v,onClose:()=>y(!1),mode:(w==null?void 0:w.idEstado)===3&&((ke=w==null?void 0:w.atenciones)!=null&&ke[0])&&(!w.atenciones[0].calificacion||w.atenciones[0].calificacion===0)?"rating":"view",onSubmit:async z=>{if(z.calificacion){k(!0);try{const V=await qt(w.idTicket,z.calificacion,z.comentario||"");V.success?(alert("Calificación enviada exitosamente. El ticket ha sido cerrado."),y(!1)):alert(`Error al enviar la calificación: ${V.error}`)}catch(V){console.error("Error enviando calificación:",V),alert("Error al enviar la calificación. Inténtalo de nuevo.")}finally{k(!1)}}},loading:m,usuarioQueAtendio:p,currentUser:{tipo:"employee",idUsuario:(a==null?void 0:a.idEmpleado)||(e==null?void 0:e.idEmpleado),nombre:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}})]})},SS=_.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
`,ES=_.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`,CS=_.div`
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
`,jS=_.header`
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
`,TS=_.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,PS=_.div`
  display: flex;
  align-items: center;
`,$S=_.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
`,RS=_.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,AS=_.button`
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
`,IS=_.div`
  display: flex;
  background: #e9ecef;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`,OS=_.div`
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 30vw;
`,Df=_.button`
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
`,LS=_.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
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
`,NS=_.div`
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
`,US=_.button`
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
`,zS=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  min-height: 300px;
`,DS=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
  min-height: 300px;
`,Ff=_.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  min-height: 300px;
`,Mf=_.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Bf=_.h3`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`,qf=_.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,FS=()=>{const{token:e}=Ay(),t=Ko(),[r,n]=x.useState(null),[o,i]=x.useState(!0),[s,a]=x.useState(""),[l,c]=x.useState(null),[u,d]=x.useState(!1),[h,v]=x.useState("responder"),[y,w]=x.useState(""),[b,p]=x.useState([]),[g,m]=x.useState(!1),[k,E]=x.useState(""),[C,S]=x.useState(!1);return x.useEffect(()=>{(async()=>{try{const{data:I,error:$}=await T.from("usuarios").select("idUsuario, nombre, correo").eq("idRol",3).order("nombre");if($)throw $;p(I||[])}catch(I){console.error("Error cargando usuarios:",I)}})()},[]),x.useEffect(()=>{e&&(async()=>{if(!e){c("Token no encontrado en la URL"),i(!1);return}try{i(!0);const I=await MS(e);n(I)}catch(I){console.error("Error cargando ticket:",I),c(I.message)}finally{i(!1)}})()},[e]),{ticket:r,loading:o,response:s,setResponse:a,error:l,setError:c,success:u,setSuccess:d,actionType:h,setActionType:v,selectedUser:y,setSelectedUser:w,users:b,isSubmitting:g,setIsSubmitting:m,responseMessage:k,setResponseMessage:E,isSubmitted:C,setIsSubmitted:S,token:e,navigate:t}},MS=async e=>{const{data:t,error:r}=await T.from("ticket_tokens").select("*").eq("token",e).eq("bActivo",!0).gt("fecha_expiracion",new Date().toISOString()).single();if(r||!t)throw(r==null?void 0:r.code)==="PGRST116"?new Error("Enlace inválido, expirado o ya utilizado. Este ticket puede haber sido reasignado a otro usuario."):new Error("Enlace inválido, expirado o ya utilizado");const n=t.idTicket||t.id_ticket,{data:o,error:i}=await T.from("tickets").select(`
      *,
      empleados (nombre, codigoEmpleado, idPlanta, plantas (planta)),
      tiposSolicitud (tipoSolicitud),
      prioridades (prioridad),
      estados (estado)
    `).eq("idTicket",n).single();if(i||!o)throw new Error("Ticket no encontrado");const s=t.idUsuario||t.id_usuario,{data:a}=await T.from("usuarios").select("nombre, correo, idRol").eq("idUsuario",s).single(),l={...t,tickets:o,usuarios:a};if(l.tickets.idEstado!==1&&l.tickets.idEstado!==2)throw new Error("Este ticket ya no está disponible para responder");const{data:c,error:u}=await T.from("seguimientos").select("fecha").eq("idTicket",l.tickets.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();return c&&!u&&(l.tickets.fechaCreacion=c.fecha),l},BS=(e,t,r)=>({handleSubmitResponse:async(s,a,l,c)=>{if(!s.trim()){l("Por favor escribe una respuesta");return}try{a(!0),l(null);const{error:u}=await T.from("atenciones").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,respuesta:s.trim()});if(u)throw new Error(`Error creando atención: ${u.message}`);const{error:d}=await T.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:3});if(d)throw new Error(`Error creando seguimiento: ${d.message}`);const{error:h}=await T.from("tickets").update({idEstado:3}).eq("idTicket",e.tickets.idTicket);if(h)throw new Error(`Error actualizando ticket: ${h.message}`);const{error:v}=await T.from("ticket_tokens").update({bActivo:!1}).eq("token",t);if(v)throw new Error(`Error desactivando token: ${v.message}`);const{error:y}=await T.from("delegaciones").update({bActivo:!1}).eq("idTicket",e.tickets.idTicket).eq("idUsuario",e.idUsuario);c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){console.error("Error enviando respuesta:",u),l(u.message)}finally{a(!1)}},handleReasignTicket:async(s,a,l,c)=>{if(!s){alert("Seleccione un usuario para reasignar");return}try{a(!0);const{error:u}=await T.from("ticket_tokens").update({bActivo:!1}).eq("token",t);if(u)throw new Error(`Error desactivando token: ${u.message}`);const{data:d,error:h}=await T.from("tickets").select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `).eq("idTicket",e.tickets.idTicket).single();if(h)throw new Error(`Error obteniendo ticket: ${h.message}`);const{data:v,error:y}=await T.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",s).single();if(y)throw new Error(`Error obteniendo usuario: ${y.message}`);const{error:w}=await T.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:2});if(w)throw new Error(`Error creando seguimiento: ${w.message}`);const{error:b}=await T.from("tickets").update({idEstado:2}).eq("idTicket",e.tickets.idTicket);if(b)throw new Error(`Error actualizando ticket: ${b.message}`);const p=crypto.randomUUID(),g=new Date;g.setDate(g.getDate()+7);const{error:m}=await T.from("ticket_tokens").insert({token:p,idTicket:e.tickets.idTicket,idUsuario:s,fecha_expiracion:g.toISOString(),bActivo:!0});if(m)throw new Error(`Error creando token: ${m.message}`);try{const E=`https://andresdramos.github.io/ventanilla/ticket/${p}`,{data:C,error:S}=await T.functions.invoke("send-email-notification",{body:{ticketData:d,usuario:v,directLink:E,notificationType:"delegacion"}});if(S)throw console.error("Error invocando Edge Function:",S),S;C.success}catch{}l("Ticket reasignado exitosamente. Se ha enviado una notificación al usuario asignado."),c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){throw console.error("Error reasignando ticket:",u),new Error("Error al reasignar el ticket: "+u.message)}finally{a(!1)}},handleCancelTicket:async(s,a,l,c)=>{if(!s.trim()){alert("Debe ingresar el motivo de cancelación");return}try{a(!0),await T.from("atenciones").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,respuesta:s.trim()}),await T.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:5}),await T.from("tickets").update({idEstado:5}).eq("idTicket",e.tickets.idTicket),await T.from("ticket_tokens").update({bActivo:!1}).eq("token",t),l("Ticket cancelado exitosamente"),c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){throw console.error("Error cancelando ticket:",u),new Error("Error al cancelar el ticket: "+u.message)}finally{a(!1)}}}),Ti=_.div`
  min-height: 100vh;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  @media (max-width: 768px) {
    padding: 5px;
    align-items: flex-start;
    padding-top: 20px;
  }
`,qS=_.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--color-shadow);
  max-width: 700px;
  width: 100%;
  overflow: hidden;
  margin: auto;
  
  @media (max-width: 768px) {
    margin: 0;
    border-radius: 8px;
    max-width: 100%;
  }
`,WS=_.div`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    gap: 10px;
  }
`,HS=_.div`
  flex: 1;
`,VS=_.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Wf=_.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,KS=_.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,GS=_.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,QS=_.div`
  margin-bottom: 0.5rem;
`,JS=_.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,YS=_.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  display: inline;
`,XS=_.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,Gi=_.h3`
  margin: 0 0 10px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,ZS=_.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,eE=_.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,tE=_.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,Ka=_.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: 2px solid ${e=>e.$selected?"var(--color-accent)":"#dee2e6"};
  background: ${e=>e.$selected?"var(--color-accent)":"white"};
  color: ${e=>e.$selected?"white":"var(--color-primary)"};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 14px;
  
  &:hover {
    border-color: var(--color-accent);
    background: ${e=>e.$selected?"#e54a2e":"#fff5f5"};
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,Hf=_.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
  min-height: 100px;
  
  @media (max-width: 768px) {
    min-height: 80px;
  }
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &:disabled {
    background: #f3f4f6;
    color: #6b7280;
  }
`,Vf=_.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
  color: ${e=>e.$isNearLimit?"#ef4444":"#6b7280"};
`;_.select`
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
  
  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;const rE=_.div`
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #dc2626;
  padding: 12px;
  margin: 0 20px;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  
  @media (max-width: 768px) {
    margin: 0 15px;
    padding: 10px;
    font-size: 13px;
  }
`,nE=_.div`
  padding: 20px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,oE=_.button`
  width: 100%;
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
  
  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }
  
  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`,iE=_.p`
  text-align: center;
  margin: 10px 0 0 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,sE=_.div`
  background: #e5e7eb;
  padding: 15px 20px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`,aE=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`,lE=_.p`
  margin: 0;
  color: #374151;
  font-size: 13px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,cE=_.button`
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(5, 150, 105, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 12px;
  }
`,uE=_.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`,dE=_.div`
  width: 32px;
  height: 32px;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin: 0 auto 12px auto;
  }
`,fE=_.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  max-width: 500px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
    max-width: 100%;
  }
`,hE=_.div`
  font-size: 64px;
  margin-bottom: 20px;
`,pE=_.h2`
  color: #dc2626;
  margin: 0 0 15px 0;
  font-size: 24px;
`,mE=_.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,gE=_.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,vE=_.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  max-width: 500px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
    max-width: 100%;
  }
`,yE=_.div`
  font-size: 64px;
  margin-bottom: 20px;
`,wE=_.h2`
  color: #059669;
  margin: 0 0 15px 0;
  font-size: 24px;
`,xE=_.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,kE=_.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,_E=({ticket:e})=>{const{adminAutoLogin:t}=qn(),r=async()=>{const n=e.usuarios;if(n.idRol===2)try{await t(n),window.open("/ventanilla/admin","_blank")}catch(o){console.error("Error en auto-login:",o),window.open("/ventanilla/admin","_blank")}else window.open("/ventanilla/admin","_blank")};return f.jsxs(WS,{children:[f.jsx(HS,{children:f.jsxs(VS,{children:["Ticket #",e.tickets.idTicket]})}),f.jsx(cE,{onClick:r,title:"Ir al panel de administrador",children:"Panel Admin"})]})},bE=({ticket:e})=>{var t,r,n,o,i;return f.jsxs(f.Fragment,{children:[f.jsxs(Wf,{children:[f.jsx(KS,{children:f.jsxs(GS,{children:[((t=e.tickets.empleados)==null?void 0:t.nombre)||"No especificado"," ","(",f.jsx("span",{children:((r=e.tickets.empleados)==null?void 0:r.codigoEmpleado)||"No especificado"}),") - ",((o=(n=e.tickets.empleados)==null?void 0:n.plantas)==null?void 0:o.planta)||"No especificada"]})}),f.jsxs(QS,{children:[f.jsx(JS,{children:"Fecha de generación:"})," ",f.jsx(YS,{children:Oe(e.tickets.fechaCreacion)})]}),f.jsxs(XS,{children:["Tipo: ",((i=e.tickets.tiposSolicitud)==null?void 0:i.tipoSolicitud)||"No especificado"]})]}),f.jsxs(Wf,{children:[f.jsx(Gi,{children:"Descripción del Problema"}),f.jsx(ZS,{children:e.tickets.descripcion})]})]})},SE=(e,t)=>{if(t)return"Procesando...";switch(e){case"responder":return"Enviar Respuesta y Cerrar Ticket";case"reasignar":return"Reasignar Ticket";case"cancelar":return"Cancelar Ticket";default:return"Procesar"}},EE=e=>{switch(e){case"responder":return"Una vez enviada la respuesta, el ticket se marcará como atendido.";case"reasignar":return"El ticket será reasignado al usuario seleccionado.";case"cancelar":return"El ticket será marcado como cancelado con el motivo especificado.";default:return""}},CE=e=>{switch(e){case"reasignar":return"¡Ticket Reasignado!";case"cancelar":return"¡Ticket Cancelado!";default:return"¡Respuesta Enviada!"}},jE=({ticketData:e,actions:t})=>{var w;const{actionType:r,setActionType:n,response:o,setResponse:i,selectedUser:s,setSelectedUser:a,isSubmitting:l,error:c,ticket:u}=e,d=(w=u==null?void 0:u.usuarios)==null?void 0:w.idRol,v=(()=>{const b=["responder"];return d===2?["responder","reasignar","cancelar"]:d===3?["responder"]:b})();x.useEffect(()=>{v.includes(r)||n(v[0]||"responder")},[r,v,n]);const y=async()=>{try{switch(r){case"responder":await t.handleSubmitResponse(o,e.setIsSubmitting,e.setError,e.setSuccess);break;case"reasignar":await t.handleReasignTicket(s,e.setIsSubmitting,e.setResponseMessage,e.setIsSubmitted);break;case"cancelar":await t.handleCancelTicket(o,e.setIsSubmitting,e.setResponseMessage,e.setIsSubmitted);break;default:throw new Error("Acción no válida")}}catch(b){e.setError(b.message)}};return f.jsxs(f.Fragment,{children:[f.jsxs(eE,{children:[f.jsxs(tE,{children:[v.includes("responder")&&f.jsx(Ka,{$selected:r==="responder",onClick:()=>n("responder"),children:"Responder"}),v.includes("reasignar")&&f.jsx(Ka,{$selected:r==="reasignar",onClick:()=>n("reasignar"),children:"Reasignar"}),v.includes("cancelar")&&f.jsx(Ka,{$selected:r==="cancelar",onClick:()=>n("cancelar"),children:"Cancelar"})]}),f.jsx(TE,{actionType:r,response:o,setResponse:i,selectedUser:s,setSelectedUser:a,isSubmitting:l})]}),c&&f.jsxs(rE,{children:["❌ ",c]}),f.jsxs(nE,{children:[f.jsx(oE,{onClick:y,disabled:l||r==="responder"&&!o.trim()||r==="reasignar"&&!s||r==="cancelar"&&!o.trim(),children:SE(r,l)}),f.jsx(iE,{children:EE(r)})]})]})},TE=({actionType:e,response:t,setResponse:r,selectedUser:n,setSelectedUser:o,isSubmitting:i})=>{switch(e){case"responder":return f.jsxs("div",{children:[f.jsx(Gi,{children:"Tu Respuesta"}),f.jsx(Hf,{value:t,onChange:s=>r(s.target.value),placeholder:"Escribe aquí tu respuesta o solución al problema...",rows:4,disabled:i}),f.jsxs(Vf,{$isNearLimit:t.length>400,children:[t.length,"/500 caracteres"]})]});case"reasignar":return f.jsxs("div",{children:[f.jsx(Gi,{children:"Reasignar a"}),f.jsx(uc,{selectedUser:n,onUserSelect:o,placeholder:"Seleccionar usuario para reasignación...",excludeRoles:[1],disabled:i})]});case"cancelar":return f.jsxs("div",{children:[f.jsx(Gi,{children:"Motivo de cancelación"}),f.jsx(Hf,{value:t,onChange:s=>r(s.target.value),placeholder:"Describe el motivo por el cual se cancela este ticket...",rows:4,disabled:i}),f.jsxs(Vf,{$isNearLimit:t.length>400,children:[t.length,"/500 caracteres"]})]});default:return null}},PE=({ticket:e})=>f.jsx(sE,{children:f.jsx(aE,{children:f.jsxs(lE,{children:["Respondiendo como: ",f.jsx("strong",{children:e.usuarios.nombre})," (",e.usuarios.correo,")"]})})}),$E=({ticketData:e,actions:t})=>f.jsxs(qS,{children:[f.jsx(_E,{ticket:e.ticket}),f.jsx(bE,{ticket:e.ticket}),f.jsx(jE,{ticketData:e,actions:t}),f.jsx(PE,{ticket:e.ticket})]}),RE=()=>f.jsxs(uE,{children:[f.jsx(dE,{}),f.jsx("p",{children:"Cargando ticket..."})]}),AE=({error:e})=>f.jsxs(fE,{children:[f.jsx(hE,{children:"❌"}),f.jsx(pE,{children:"Enlace No Válido"}),f.jsx(mE,{children:e}),f.jsx(gE,{children:"Este enlace puede haber expirado, ya fue utilizado, o el ticket ya no está disponible para responder."})]}),IE=({actionType:e,responseMessage:t})=>{const r=()=>t||"Tu respuesta ha sido registrada exitosamente. El ticket ha sido marcado como atendido.";return f.jsxs(vE,{children:[f.jsx(yE,{children:"✅"}),f.jsx(wE,{children:CE(e)}),f.jsx(xE,{children:r()}),f.jsx(kE,{children:"Esta ventana se cerrará automáticamente en unos segundos..."})]})},OE=()=>{const e=FS(),t=BS(e.ticket,e.token,e.navigate),{loading:r,error:n,success:o,isSubmitted:i,actionType:s,responseMessage:a}=e;return r?f.jsx(Ti,{children:f.jsx(RE,{})}):n?f.jsx(Ti,{children:f.jsx(AE,{error:n})}):o||i?f.jsx(Ti,{children:f.jsx(IE,{actionType:s,responseMessage:a})}):f.jsx(Ti,{children:f.jsx($E,{ticketData:e,actions:t})})},LE=()=>{const{user:e,employeeData:t,initializing:r}=qn(),n=Bt();return r?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.2rem"},children:"Cargando..."}):f.jsxs(Ky,{children:[f.jsx(Er,{path:"/ticket/:token",element:f.jsx(OE,{})}),f.jsx(Er,{path:"/login",element:f.jsx(i_,{})}),f.jsx(Er,{path:"/admin/*",element:e&&e.type==="admin"?f.jsx(lS,{}):f.jsx(Hr,{to:"/login",state:{from:n},replace:!0})}),f.jsx(Er,{path:"/employee/*",element:t&&t.type==="employee"?f.jsx(bS,{employeeData:t}):f.jsx(Hr,{to:"/login",state:{from:n},replace:!0})}),f.jsx(Er,{path:"/",element:e&&e.type==="admin"?f.jsx(Hr,{to:"/admin",replace:!0}):t&&t.type==="employee"?f.jsx(Hr,{to:"/employee",replace:!0}):f.jsx(Hr,{to:"/login",replace:!0})}),f.jsx(Er,{path:"*",element:f.jsx(Hr,{to:"/",replace:!0})})]})};function NE(){return f.jsxs(gw,{basename:"/ventanilla",children:[f.jsx(jx,{}),f.jsx(Bk,{children:f.jsx(LE,{})})]})}Ga.createRoot(document.getElementById("root")).render(f.jsx(St.StrictMode,{children:f.jsx(NE,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}