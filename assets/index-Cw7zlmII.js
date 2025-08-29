(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ig(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Og(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var Yf={exports:{}},Es={},Xf={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),Lg=Symbol.for("react.portal"),Ng=Symbol.for("react.fragment"),Ug=Symbol.for("react.strict_mode"),zg=Symbol.for("react.profiler"),Dg=Symbol.for("react.provider"),Fg=Symbol.for("react.context"),Mg=Symbol.for("react.forward_ref"),Bg=Symbol.for("react.suspense"),qg=Symbol.for("react.memo"),Wg=Symbol.for("react.lazy"),_u=Symbol.iterator;function Vg(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eh=Object.assign,th={};function On(e,t,r){this.props=e,this.context=t,this.refs=th,this.updater=r||Zf}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rh(){}rh.prototype=On.prototype;function uc(e,t,r){this.props=e,this.context=t,this.refs=th,this.updater=r||Zf}var dc=uc.prototype=new rh;dc.constructor=uc;eh(dc,On.prototype);dc.isPureReactComponent=!0;var Su=Array.isArray,nh=Object.prototype.hasOwnProperty,fc={current:null},oh={key:!0,ref:!0,__self:!0,__source:!0};function ih(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)nh.call(t,n)&&!oh.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Bo,type:e,key:i,ref:s,props:o,_owner:fc.current}}function Hg(e,t){return{$$typeof:Bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bo}function Gg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Eu=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gg(""+e.key):t.toString(36)}function ji(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Bo:case Lg:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+ra(s,0):n,Su(o)?(r="",e!=null&&(r=e.replace(Eu,"$&/")+"/"),ji(o,t,r,"",function(c){return c})):o!=null&&(hc(o)&&(o=Hg(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Eu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",Su(e))for(var a=0;a<e.length;a++){i=e[a];var l=n+ra(i,a);s+=ji(i,t,r,l,o)}else if(l=Vg(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=n+ra(i,a++),s+=ji(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ei(e,t,r){if(e==null)return e;var n=[],o=0;return ji(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Kg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Pi={transition:null},Jg={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:fc};B.Children={map:ei,forEach:function(e,t,r){ei(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ei(e,function(){t++}),t},toArray:function(e){return ei(e,function(t){return t})||[]},only:function(e){if(!hc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=On;B.Fragment=Ng;B.Profiler=zg;B.PureComponent=uc;B.StrictMode=Ug;B.Suspense=Bg;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg;B.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=eh({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=fc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)nh.call(t,l)&&!oh.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:Bo,type:e.type,key:o,ref:i,props:n,_owner:s}};B.createContext=function(e){return e={$$typeof:Fg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dg,_context:e},e.Consumer=e};B.createElement=ih;B.createFactory=function(e){var t=ih.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Mg,render:e}};B.isValidElement=hc;B.lazy=function(e){return{$$typeof:Wg,_payload:{_status:-1,_result:e},_init:Kg}};B.memo=function(e,t){return{$$typeof:qg,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return Re.current.useCallback(e,t)};B.useContext=function(e){return Re.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};B.useEffect=function(e,t){return Re.current.useEffect(e,t)};B.useId=function(){return Re.current.useId()};B.useImperativeHandle=function(e,t,r){return Re.current.useImperativeHandle(e,t,r)};B.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Re.current.useMemo(e,t)};B.useReducer=function(e,t,r){return Re.current.useReducer(e,t,r)};B.useRef=function(e){return Re.current.useRef(e)};B.useState=function(e){return Re.current.useState(e)};B.useSyncExternalStore=function(e,t,r){return Re.current.useSyncExternalStore(e,t,r)};B.useTransition=function(){return Re.current.useTransition()};B.version="18.2.0";Xf.exports=B;var w=Xf.exports;const St=Ig(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg=w,Yg=Symbol.for("react.element"),Xg=Symbol.for("react.fragment"),Zg=Object.prototype.hasOwnProperty,ev=Qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tv={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Zg.call(t,n)&&!tv.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Yg,type:e,key:i,ref:s,props:o,_owner:ev.current}}Es.Fragment=Xg;Es.jsx=sh;Es.jsxs=sh;Yf.exports=Es;var f=Yf.exports,Ga={},ah={exports:{}},Ve={},lh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,O){var L=R.length;R.push(O);e:for(;0<L;){var V=L-1>>>1,H=R[V];if(0<o(H,O))R[V]=O,R[L]=H,L=V;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var O=R[0],L=R.pop();if(L!==O){R[0]=L;e:for(var V=0,H=R.length,Ke=H>>>1;V<Ke;){var be=2*(V+1)-1,U=R[be],G=be+1,ot=R[G];if(0>o(U,L))G<H&&0>o(ot,U)?(R[V]=ot,R[G]=L,V=G):(R[V]=U,R[be]=L,V=be);else if(G<H&&0>o(ot,L))R[V]=ot,R[G]=L,V=G;else break e}}return O}function o(R,O){var L=R.sortIndex-O.sortIndex;return L!==0?L:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,v=!1,y=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var O=r(c);O!==null;){if(O.callback===null)n(c);else if(O.startTime<=R)n(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=r(c)}}function k(R){if(x=!1,p(R),!y)if(r(l)!==null)y=!0,yt(E);else{var O=r(c);O!==null&&Ge(k,O.startTime-R)}}function E(R,O){y=!1,x&&(x=!1,m(j),j=-1),v=!0;var L=h;try{for(p(O),d=r(l);d!==null&&(!(d.expirationTime>O)||R&&!q());){var V=d.callback;if(typeof V=="function"){d.callback=null,h=d.priorityLevel;var H=V(d.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?d.callback=H:d===r(l)&&n(l),p(O)}else n(l);d=r(l)}if(d!==null)var Ke=!0;else{var be=r(c);be!==null&&Ge(k,be.startTime-O),Ke=!1}return Ke}finally{d=null,h=L,v=!1}}var C=!1,S=null,j=-1,I=5,$=-1;function q(){return!(e.unstable_now()-$<I)}function F(){if(S!==null){var R=e.unstable_now();$=R;var O=!0;try{O=S(!0,R)}finally{O?De():(C=!1,S=null)}}else C=!1}var De;if(typeof g=="function")De=function(){g(F)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,xr=Wt.port2;Wt.port1.onmessage=F,De=function(){xr.postMessage(null)}}else De=function(){_(F,0)};function yt(R){S=R,C||(C=!0,De())}function Ge(R,O){j=_(function(){R(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,yt(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var L=h;h=O;try{return R()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=h;h=R;try{return O()}finally{h=L}},e.unstable_scheduleCallback=function(R,O,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,R={id:u++,callback:O,priorityLevel:R,startTime:L,expirationTime:H,sortIndex:-1},L>V?(R.sortIndex=L,t(c,R),r(l)===null&&R===r(c)&&(x?(m(j),j=-1):x=!0,Ge(k,L-V))):(R.sortIndex=H,t(l,R),y||v||(y=!0,yt(E))),R},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(R){var O=h;return function(){var L=h;h=O;try{return R.apply(this,arguments)}finally{h=L}}}})(ch);lh.exports=ch;var rv=lh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=w,We=rv;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dh=new Set,ko={};function Mr(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(ko[e]=t,e=0;e<t.length;e++)dh.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cu={},Tu={};function ov(e){return Ka.call(Tu,e)?!0:Ka.call(Cu,e)?!1:nv.test(e)?Tu[e]=!0:(Cu[e]=!0,!1)}function iv(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sv(e,t,r,n){if(t===null||typeof t>"u"||iv(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var pc=/[\-:]([a-z])/g;function mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pc,mc);ke[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pc,mc);ke[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pc,mc);ke[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function gc(e,t,r,n){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sv(t,r,o,n)&&(r=null),n||o===null?ov(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Bt=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ti=Symbol.for("react.element"),tn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),hh=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ya=Symbol.for("react.suspense_list"),wc=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),ph=Symbol.for("react.offscreen"),ju=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,na;function to(e){if(na===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var oa=!1;function ia(e,t){if(!e||oa)return"";oa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{oa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?to(e):""}function av(e){switch(e.tag){case 5:return to(e.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function Xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rn:return"Fragment";case tn:return"Portal";case Ja:return"Profiler";case vc:return"StrictMode";case Qa:return"Suspense";case Ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hh:return(e.displayName||"Context")+".Consumer";case fh:return(e._context.displayName||"Context")+".Provider";case yc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wc:return t=e.displayName||null,t!==null?t:Xa(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Xa(e(t))}catch{}}return null}function lv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(t);case 8:return t===vc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cv(e){var t=mh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=cv(e))}function gh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=mh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Za(e,t){var r=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Pu(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=pr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vh(e,t){t=t.checked,t!=null&&gc(e,"checked",t,!1)}function el(e,t){vh(e,t);var r=pr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tl(e,t.type,r):t.hasOwnProperty("defaultValue")&&tl(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function tl(e,t,r){(t!=="number"||Ki(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ro=Array.isArray;function mn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+pr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ru(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(ro(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pr(r)}}function yh(e,t){var r=pr(t.value),n=pr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,xh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(e){uv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ao[t]=ao[e]})});function kh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ao.hasOwnProperty(e)&&ao[e]?(""+t).trim():t+"px"}function bh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=kh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var dv=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(dv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,gn=null,vn=null;function Iu(e){if(e=Vo(e)){if(typeof al!="function")throw Error(T(280));var t=e.stateNode;t&&(t=$s(t),al(e.stateNode,e.type,t))}}function _h(e){gn?vn?vn.push(e):vn=[e]:gn=e}function Sh(){if(gn){var e=gn,t=vn;if(vn=gn=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function Eh(e,t){return e(t)}function Ch(){}var sa=!1;function Th(e,t,r){if(sa)return e(t,r);sa=!0;try{return Eh(e,t,r)}finally{sa=!1,(gn!==null||vn!==null)&&(Ch(),Sh())}}function _o(e,t){var r=e.stateNode;if(r===null)return null;var n=$s(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var ll=!1;if(Ut)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){ll=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{ll=!1}function fv(e,t,r,n,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var lo=!1,Ji=null,Qi=!1,cl=null,hv={onError:function(e){lo=!0,Ji=e}};function pv(e,t,r,n,o,i,s,a,l){lo=!1,Ji=null,fv.apply(hv,arguments)}function mv(e,t,r,n,o,i,s,a,l){if(pv.apply(this,arguments),lo){if(lo){var c=Ji;lo=!1,Ji=null}else throw Error(T(198));Qi||(Qi=!0,cl=c)}}function Br(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function jh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if(Br(e)!==e)throw Error(T(188))}function gv(e){var t=e.alternate;if(!t){if(t=Br(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Ou(o),e;if(i===n)return Ou(o),t;i=i.sibling}throw Error(T(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s)throw Error(T(189))}}if(r.alternate!==n)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function Ph(e){return e=gv(e),e!==null?$h(e):null}function $h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$h(e);if(t!==null)return t;e=e.sibling}return null}var Rh=We.unstable_scheduleCallback,Lu=We.unstable_cancelCallback,vv=We.unstable_shouldYield,yv=We.unstable_requestPaint,ce=We.unstable_now,wv=We.unstable_getCurrentPriorityLevel,kc=We.unstable_ImmediatePriority,Ah=We.unstable_UserBlockingPriority,Yi=We.unstable_NormalPriority,xv=We.unstable_LowPriority,Ih=We.unstable_IdlePriority,Cs=null,Et=null;function kv(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Cs,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Sv,bv=Math.log,_v=Math.LN2;function Sv(e){return e>>>=0,e===0?32:31-(bv(e)/_v|0)|0}var oi=64,ii=4194304;function no(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?n=no(a):(i&=s,i!==0&&(n=no(i)))}else s=r&~o,s!==0?n=no(s):i!==0&&(n=no(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-dt(t),o=1<<r,n|=e[r],t&=~o;return n}function Ev(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-dt(i),a=1<<s,l=o[s];l===-1?(!(a&r)||a&n)&&(o[s]=Ev(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oh(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function aa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function qo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=r}function Tv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-dt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function bc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-dt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var Q=0;function Lh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nh,_c,Uh,zh,Dh,dl=!1,si=[],ir=null,sr=null,ar=null,So=new Map,Eo=new Map,er=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":So.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(t.pointerId)}}function Gn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Vo(t),t!==null&&_c(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Pv(e,t,r,n,o){switch(t){case"focusin":return ir=Gn(ir,e,t,r,n,o),!0;case"dragenter":return sr=Gn(sr,e,t,r,n,o),!0;case"mouseover":return ar=Gn(ar,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return So.set(i,Gn(So.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Eo.set(i,Gn(Eo.get(i)||null,e,t,r,n,o)),!0}return!1}function Fh(e){var t=Pr(e.target);if(t!==null){var r=Br(t);if(r!==null){if(t=r.tag,t===13){if(t=jh(r),t!==null){e.blockedOn=t,Dh(e.priority,function(){Uh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);sl=n,r.target.dispatchEvent(n),sl=null}else return t=Vo(r),t!==null&&_c(t),e.blockedOn=r,!1;t.shift()}return!0}function Uu(e,t,r){$i(e)&&r.delete(t)}function $v(){dl=!1,ir!==null&&$i(ir)&&(ir=null),sr!==null&&$i(sr)&&(sr=null),ar!==null&&$i(ar)&&(ar=null),So.forEach(Uu),Eo.forEach(Uu)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,dl||(dl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,$v)))}function Co(e){function t(o){return Kn(o,e)}if(0<si.length){Kn(si[0],e);for(var r=1;r<si.length;r++){var n=si[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ir!==null&&Kn(ir,e),sr!==null&&Kn(sr,e),ar!==null&&Kn(ar,e),So.forEach(t),Eo.forEach(t),r=0;r<er.length;r++)n=er[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<er.length&&(r=er[0],r.blockedOn===null);)Fh(r),r.blockedOn===null&&er.shift()}var yn=Bt.ReactCurrentBatchConfig,Zi=!0;function Rv(e,t,r,n){var o=Q,i=yn.transition;yn.transition=null;try{Q=1,Sc(e,t,r,n)}finally{Q=o,yn.transition=i}}function Av(e,t,r,n){var o=Q,i=yn.transition;yn.transition=null;try{Q=4,Sc(e,t,r,n)}finally{Q=o,yn.transition=i}}function Sc(e,t,r,n){if(Zi){var o=fl(e,t,r,n);if(o===null)va(e,t,n,es,r),Nu(e,n);else if(Pv(o,e,t,r,n))n.stopPropagation();else if(Nu(e,n),t&4&&-1<jv.indexOf(e)){for(;o!==null;){var i=Vo(o);if(i!==null&&Nh(i),i=fl(e,t,r,n),i===null&&va(e,t,n,es,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else va(e,t,n,null,r)}}var es=null;function fl(e,t,r,n){if(es=null,e=xc(n),e=Pr(e),e!==null)if(t=Br(e),t===null)e=null;else if(r=t.tag,r===13){if(e=jh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return es=e,null}function Mh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wv()){case kc:return 1;case Ah:return 4;case Yi:case xv:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var nr=null,Ec=null,Ri=null;function Bh(){if(Ri)return Ri;var e,t=Ec,r=t.length,n,o="value"in nr?nr.value:nr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Ri=o.slice(e,1<n?1-n:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function zu(){return!1}function He(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ai:zu,this.isPropagationStopped=zu,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=He(Ln),Wo=ae({},Ln,{view:0,detail:0}),Iv=He(Wo),la,ca,Jn,Ts=ae({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(la=e.screenX-Jn.screenX,ca=e.screenY-Jn.screenY):ca=la=0,Jn=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),Du=He(Ts),Ov=ae({},Ts,{dataTransfer:0}),Lv=He(Ov),Nv=ae({},Wo,{relatedTarget:0}),ua=He(Nv),Uv=ae({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=He(Uv),Dv=ae({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fv=He(Dv),Mv=ae({},Ln,{data:0}),Fu=He(Mv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wv[e])?!!t[e]:!1}function Tc(){return Vv}var Hv=ae({},Wo,{key:function(e){if(e.key){var t=Bv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gv=He(Hv),Kv=ae({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=He(Kv),Jv=ae({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Qv=He(Jv),Yv=ae({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=He(Yv),Zv=ae({},Ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=He(Zv),t0=[9,13,27,32],jc=Ut&&"CompositionEvent"in window,co=null;Ut&&"documentMode"in document&&(co=document.documentMode);var r0=Ut&&"TextEvent"in window&&!co,qh=Ut&&(!jc||co&&8<co&&11>=co),Bu=" ",qu=!1;function Wh(e,t){switch(e){case"keyup":return t0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function n0(e,t){switch(e){case"compositionend":return Vh(t);case"keypress":return t.which!==32?null:(qu=!0,Bu);case"textInput":return e=t.data,e===Bu&&qu?null:e;default:return null}}function o0(e,t){if(nn)return e==="compositionend"||!jc&&Wh(e,t)?(e=Bh(),Ri=Ec=nr=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qh&&t.locale!=="ko"?null:t.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i0[e.type]:t==="textarea"}function Hh(e,t,r,n){_h(n),t=ts(t,"onChange"),0<t.length&&(r=new Cc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var uo=null,To=null;function s0(e){np(e,0)}function js(e){var t=an(e);if(gh(t))return e}function a0(e,t){if(e==="change")return t}var Gh=!1;if(Ut){var da;if(Ut){var fa="oninput"in document;if(!fa){var Vu=document.createElement("div");Vu.setAttribute("oninput","return;"),fa=typeof Vu.oninput=="function"}da=fa}else da=!1;Gh=da&&(!document.documentMode||9<document.documentMode)}function Hu(){uo&&(uo.detachEvent("onpropertychange",Kh),To=uo=null)}function Kh(e){if(e.propertyName==="value"&&js(To)){var t=[];Hh(t,To,e,xc(e)),Th(s0,t)}}function l0(e,t,r){e==="focusin"?(Hu(),uo=t,To=r,uo.attachEvent("onpropertychange",Kh)):e==="focusout"&&Hu()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(To)}function u0(e,t){if(e==="click")return js(t)}function d0(e,t){if(e==="input"||e==="change")return js(t)}function f0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:f0;function jo(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Ka.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,t){var r=Gu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gu(r)}}function Jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qh(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ki(e.document)}return t}function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h0(e){var t=Qh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Jh(r.ownerDocument.documentElement,r)){if(n!==null&&Pc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Ku(r,i);var s=Ku(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p0=Ut&&"documentMode"in document&&11>=document.documentMode,on=null,hl=null,fo=null,pl=!1;function Ju(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pl||on==null||on!==Ki(n)||(n=on,"selectionStart"in n&&Pc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),fo&&jo(fo,n)||(fo=n,n=ts(hl,"onSelect"),0<n.length&&(t=new Cc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=on)))}function li(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var sn={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionend:li("Transition","TransitionEnd")},ha={},Yh={};Ut&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function Ps(e){if(ha[e])return ha[e];if(!sn[e])return e;var t=sn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Yh)return ha[e]=t[r];return e}var Xh=Ps("animationend"),Zh=Ps("animationiteration"),ep=Ps("animationstart"),tp=Ps("transitionend"),rp=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){rp.set(e,t),Mr(t,[e])}for(var pa=0;pa<Qu.length;pa++){var ma=Qu[pa],m0=ma.toLowerCase(),g0=ma[0].toUpperCase()+ma.slice(1);gr(m0,"on"+g0)}gr(Xh,"onAnimationEnd");gr(Zh,"onAnimationIteration");gr(ep,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(tp,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Yu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,mv(n,t,void 0,e),e.currentTarget=null}function np(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Yu(o,a,c),i=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Yu(o,a,c),i=l}}}if(Qi)throw e=cl,Qi=!1,cl=null,e}function Z(e,t){var r=t[wl];r===void 0&&(r=t[wl]=new Set);var n=e+"__bubble";r.has(n)||(op(t,e,2,!1),r.add(n))}function ga(e,t,r){var n=0;t&&(n|=4),op(r,e,n,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[ci]){e[ci]=!0,dh.forEach(function(r){r!=="selectionchange"&&(v0.has(r)||ga(r,!1,e),ga(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,ga("selectionchange",!1,t))}}function op(e,t,r,n){switch(Mh(t)){case 1:var o=Rv;break;case 4:o=Av;break;default:o=Sc}r=o.bind(null,t,r,e),o=void 0,!ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function va(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Pr(a),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}a=a.parentNode}}n=n.return}Th(function(){var c=i,u=xc(r),d=[];e:{var h=rp.get(e);if(h!==void 0){var v=Cc,y=e;switch(e){case"keypress":if(Ai(r)===0)break e;case"keydown":case"keyup":v=Gv;break;case"focusin":y="focus",v=ua;break;case"focusout":y="blur",v=ua;break;case"beforeblur":case"afterblur":v=ua;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qv;break;case Xh:case Zh:case ep:v=zv;break;case tp:v=Xv;break;case"scroll":v=Iv;break;case"wheel":v=e0;break;case"copy":case"cut":case"paste":v=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Mu}var x=(t&4)!==0,_=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,p;g!==null;){p=g;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,m!==null&&(k=_o(g,m),k!=null&&x.push($o(g,k,p)))),_)break;g=g.return}0<x.length&&(h=new v(h,y,null,r,u),d.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&r!==sl&&(y=r.relatedTarget||r.fromElement)&&(Pr(y)||y[zt]))break e;if((v||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=c,y=y?Pr(y):null,y!==null&&(_=Br(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=Du,k="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Mu,k="onPointerLeave",m="onPointerEnter",g="pointer"),_=v==null?h:an(v),p=y==null?h:an(y),h=new x(k,g+"leave",v,r,u),h.target=_,h.relatedTarget=p,k=null,Pr(u)===c&&(x=new x(m,g+"enter",y,r,u),x.target=p,x.relatedTarget=_,k=x),_=k,v&&y)t:{for(x=v,m=y,g=0,p=x;p;p=Vr(p))g++;for(p=0,k=m;k;k=Vr(k))p++;for(;0<g-p;)x=Vr(x),g--;for(;0<p-g;)m=Vr(m),p--;for(;g--;){if(x===m||m!==null&&x===m.alternate)break t;x=Vr(x),m=Vr(m)}x=null}else x=null;v!==null&&Xu(d,h,v,x,!1),y!==null&&_!==null&&Xu(d,_,y,x,!0)}}e:{if(h=c?an(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=a0;else if(Wu(h))if(Gh)E=d0;else{E=c0;var C=l0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=u0);if(E&&(E=E(e,c))){Hh(d,E,r,u);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&tl(h,"number",h.value)}switch(C=c?an(c):window,e){case"focusin":(Wu(C)||C.contentEditable==="true")&&(on=C,hl=c,fo=null);break;case"focusout":fo=hl=on=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,Ju(d,r,u);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":Ju(d,r,u)}var S;if(jc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else nn?Wh(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(qh&&r.locale!=="ko"&&(nn||j!=="onCompositionStart"?j==="onCompositionEnd"&&nn&&(S=Bh()):(nr=u,Ec="value"in nr?nr.value:nr.textContent,nn=!0)),C=ts(c,j),0<C.length&&(j=new Fu(j,e,null,r,u),d.push({event:j,listeners:C}),S?j.data=S:(S=Vh(r),S!==null&&(j.data=S)))),(S=r0?n0(e,r):o0(e,r))&&(c=ts(c,"onBeforeInput"),0<c.length&&(u=new Fu("onBeforeInput","beforeinput",null,r,u),d.push({event:u,listeners:c}),u.data=S))}np(d,t)})}function $o(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ts(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=_o(e,r),i!=null&&n.unshift($o(e,i,o)),i=_o(e,t),i!=null&&n.push($o(e,i,o))),e=e.return}return n}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,c=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&c!==null&&(a=c,o?(l=_o(r,i),l!=null&&s.unshift($o(r,l,a))):o||(l=_o(r,i),l!=null&&s.push($o(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var y0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Zu(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(w0,"")}function ui(e,t,r){if(t=Zu(t),Zu(e)!==t&&r)throw Error(T(425))}function rs(){}var ml=null,gl=null;function vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(b0)}:yl;function b0(e){setTimeout(function(){throw e})}function ya(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Co(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Co(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),_t="__reactFiber$"+Nn,Ro="__reactProps$"+Nn,zt="__reactContainer$"+Nn,wl="__reactEvents$"+Nn,_0="__reactListeners$"+Nn,S0="__reactHandles$"+Nn;function Pr(e){var t=e[_t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[zt]||r[_t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=td(e);e!==null;){if(r=e[_t])return r;e=td(e)}return t}e=r,r=e.parentNode}return null}function Vo(e){return e=e[_t]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function $s(e){return e[Ro]||null}var xl=[],ln=-1;function vr(e){return{current:e}}function te(e){0>ln||(e.current=xl[ln],xl[ln]=null,ln--)}function X(e,t){ln++,xl[ln]=e.current,e.current=t}var mr={},Te=vr(mr),Ne=vr(!1),Nr=mr;function bn(e,t){var r=e.type.contextTypes;if(!r)return mr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function ns(){te(Ne),te(Te)}function rd(e,t,r){if(Te.current!==mr)throw Error(T(168));X(Te,t),X(Ne,r)}function ip(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(T(108,lv(e)||"Unknown",o));return ae({},r,n)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Nr=Te.current,X(Te,e),X(Ne,Ne.current),!0}function nd(e,t,r){var n=e.stateNode;if(!n)throw Error(T(169));r?(e=ip(e,t,Nr),n.__reactInternalMemoizedMergedChildContext=e,te(Ne),te(Te),X(Te,e)):te(Ne),X(Ne,r)}var At=null,Rs=!1,wa=!1;function sp(e){At===null?At=[e]:At.push(e)}function E0(e){Rs=!0,sp(e)}function yr(){if(!wa&&At!==null){wa=!0;var e=0,t=Q;try{var r=At;for(Q=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}At=null,Rs=!1}catch(o){throw At!==null&&(At=At.slice(e+1)),Rh(kc,yr),o}finally{Q=t,wa=!1}}return null}var cn=[],un=0,is=null,ss=0,Je=[],Qe=0,Ur=null,It=1,Ot="";function Sr(e,t){cn[un++]=ss,cn[un++]=is,is=e,ss=t}function ap(e,t,r){Je[Qe++]=It,Je[Qe++]=Ot,Je[Qe++]=Ur,Ur=e;var n=It;e=Ot;var o=32-dt(n)-1;n&=~(1<<o),r+=1;var i=32-dt(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,It=1<<32-dt(t)+o|r<<o|n,Ot=i+e}else It=1<<i|r<<o|n,Ot=e}function $c(e){e.return!==null&&(Sr(e,1),ap(e,1,0))}function Rc(e){for(;e===is;)is=cn[--un],cn[un]=null,ss=cn[--un],cn[un]=null;for(;e===Ur;)Ur=Je[--Qe],Je[Qe]=null,Ot=Je[--Qe],Je[Qe]=null,It=Je[--Qe],Je[Qe]=null}var qe=null,Be=null,re=!1,ut=null;function lp(e,t){var r=Xe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function od(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Be=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ur!==null?{id:It,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Xe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Be=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(re){var t=Be;if(t){var r=t;if(!od(e,t)){if(kl(e))throw Error(T(418));t=lr(r.nextSibling);var n=qe;t&&od(e,t)?lp(n,r):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(kl(e))throw Error(T(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function di(e){if(e!==qe)return!1;if(!re)return id(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vl(e.type,e.memoizedProps)),t&&(t=Be)){if(kl(e))throw cp(),Error(T(418));for(;t;)lp(e,t),t=lr(t.nextSibling)}if(id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Be=lr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=qe?lr(e.stateNode.nextSibling):null;return!0}function cp(){for(var e=Be;e;)e=lr(e.nextSibling)}function _n(){Be=qe=null,re=!1}function Ac(e){ut===null?ut=[e]:ut.push(e)}var C0=Bt.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var as=vr(null),ls=null,dn=null,Ic=null;function Oc(){Ic=dn=ls=null}function Lc(e){var t=as.current;te(as),e._currentValue=t}function _l(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function wn(e,t){ls=e,Ic=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Ic!==e)if(e={context:e,memoizedValue:t,next:null},dn===null){if(ls===null)throw Error(T(308));dn=e,ls.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return t}var $r=null;function Nc(e){$r===null?$r=[e]:$r.push(e)}function up(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Nc(t)):(r.next=o.next,o.next=r),t.interleaved=r,Dt(e,n)}function Dt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Zt=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,W&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Dt(e,r)}return o=n.interleaved,o===null?(t.next=t,Nc(n)):(t.next=o.next,o.next=t),n.interleaved=t,Dt(e,r)}function Ii(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bc(e,r)}}function sd(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function cs(e,t,r,n){var o=e.updateQueue;Zt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,u=c=l=null,a=i;do{var h=a.lane,v=a.eventTime;if((n&h)===h){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(h=t,v=r,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=ae({},d,h);break e;case 2:Zt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=d):u=u.next=v,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(u===null&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Dr|=s,e.lanes=s,e.memoizedState=d}}function ad(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(T(191,o));o.call(n)}}}var fp=new uh.Component().refs;function Sl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ae({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var As={isMounted:function(e){return(e=e._reactInternals)?Br(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=$e(),o=dr(e),i=Lt(n,o);i.payload=t,r!=null&&(i.callback=r),t=cr(e,i,o),t!==null&&(ft(t,e,o,n),Ii(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=$e(),o=dr(e),i=Lt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=cr(e,i,o),t!==null&&(ft(t,e,o,n),Ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=$e(),n=dr(e),o=Lt(r,n);o.tag=2,t!=null&&(o.callback=t),t=cr(e,o,n),t!==null&&(ft(t,e,n,r),Ii(t,e,n))}};function ld(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!jo(r,n)||!jo(o,i):!0}function hp(e,t,r){var n=!1,o=mr,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(o=Ue(t)?Nr:Te.current,n=t.contextTypes,i=(n=n!=null)?bn(e,o):mr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=As,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function cd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&As.enqueueReplaceState(t,t.state,null)}function El(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=fp,Uc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=tt(i):(i=Ue(t)?Nr:Te.current,o.context=bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Sl(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&As.enqueueReplaceState(o,o.state,null),cs(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var n=r.stateNode}if(!n)throw Error(T(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===fp&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ud(e){var t=e._init;return t(e._payload)}function pp(e){function t(m,g){if(e){var p=m.deletions;p===null?(m.deletions=[g],m.flags|=16):p.push(g)}}function r(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function n(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function o(m,g){return m=fr(m,g),m.index=0,m.sibling=null,m}function i(m,g,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<g?(m.flags|=2,g):p):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,p,k){return g===null||g.tag!==6?(g=Ca(p,m.mode,k),g.return=m,g):(g=o(g,p),g.return=m,g)}function l(m,g,p,k){var E=p.type;return E===rn?u(m,g,p.props.children,k,p.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xt&&ud(E)===g.type)?(k=o(g,p.props),k.ref=Qn(m,g,p),k.return=m,k):(k=Di(p.type,p.key,p.props,null,m.mode,k),k.ref=Qn(m,g,p),k.return=m,k)}function c(m,g,p,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==p.containerInfo||g.stateNode.implementation!==p.implementation?(g=Ta(p,m.mode,k),g.return=m,g):(g=o(g,p.children||[]),g.return=m,g)}function u(m,g,p,k,E){return g===null||g.tag!==7?(g=Or(p,m.mode,k,E),g.return=m,g):(g=o(g,p),g.return=m,g)}function d(m,g,p){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ca(""+g,m.mode,p),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ti:return p=Di(g.type,g.key,g.props,null,m.mode,p),p.ref=Qn(m,null,g),p.return=m,p;case tn:return g=Ta(g,m.mode,p),g.return=m,g;case Xt:var k=g._init;return d(m,k(g._payload),p)}if(ro(g)||Vn(g))return g=Or(g,m.mode,p,null),g.return=m,g;fi(m,g)}return null}function h(m,g,p,k){var E=g!==null?g.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(m,g,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ti:return p.key===E?l(m,g,p,k):null;case tn:return p.key===E?c(m,g,p,k):null;case Xt:return E=p._init,h(m,g,E(p._payload),k)}if(ro(p)||Vn(p))return E!==null?null:u(m,g,p,k,null);fi(m,p)}return null}function v(m,g,p,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(p)||null,a(g,m,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ti:return m=m.get(k.key===null?p:k.key)||null,l(g,m,k,E);case tn:return m=m.get(k.key===null?p:k.key)||null,c(g,m,k,E);case Xt:var C=k._init;return v(m,g,p,C(k._payload),E)}if(ro(k)||Vn(k))return m=m.get(p)||null,u(g,m,k,E,null);fi(g,k)}return null}function y(m,g,p,k){for(var E=null,C=null,S=g,j=g=0,I=null;S!==null&&j<p.length;j++){S.index>j?(I=S,S=null):I=S.sibling;var $=h(m,S,p[j],k);if($===null){S===null&&(S=I);break}e&&S&&$.alternate===null&&t(m,S),g=i($,g,j),C===null?E=$:C.sibling=$,C=$,S=I}if(j===p.length)return r(m,S),re&&Sr(m,j),E;if(S===null){for(;j<p.length;j++)S=d(m,p[j],k),S!==null&&(g=i(S,g,j),C===null?E=S:C.sibling=S,C=S);return re&&Sr(m,j),E}for(S=n(m,S);j<p.length;j++)I=v(S,m,j,p[j],k),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?j:I.key),g=i(I,g,j),C===null?E=I:C.sibling=I,C=I);return e&&S.forEach(function(q){return t(m,q)}),re&&Sr(m,j),E}function x(m,g,p,k){var E=Vn(p);if(typeof E!="function")throw Error(T(150));if(p=E.call(p),p==null)throw Error(T(151));for(var C=E=null,S=g,j=g=0,I=null,$=p.next();S!==null&&!$.done;j++,$=p.next()){S.index>j?(I=S,S=null):I=S.sibling;var q=h(m,S,$.value,k);if(q===null){S===null&&(S=I);break}e&&S&&q.alternate===null&&t(m,S),g=i(q,g,j),C===null?E=q:C.sibling=q,C=q,S=I}if($.done)return r(m,S),re&&Sr(m,j),E;if(S===null){for(;!$.done;j++,$=p.next())$=d(m,$.value,k),$!==null&&(g=i($,g,j),C===null?E=$:C.sibling=$,C=$);return re&&Sr(m,j),E}for(S=n(m,S);!$.done;j++,$=p.next())$=v(S,m,j,$.value,k),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?j:$.key),g=i($,g,j),C===null?E=$:C.sibling=$,C=$);return e&&S.forEach(function(F){return t(m,F)}),re&&Sr(m,j),E}function _(m,g,p,k){if(typeof p=="object"&&p!==null&&p.type===rn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ti:e:{for(var E=p.key,C=g;C!==null;){if(C.key===E){if(E=p.type,E===rn){if(C.tag===7){r(m,C.sibling),g=o(C,p.props.children),g.return=m,m=g;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xt&&ud(E)===C.type){r(m,C.sibling),g=o(C,p.props),g.ref=Qn(m,C,p),g.return=m,m=g;break e}r(m,C);break}else t(m,C);C=C.sibling}p.type===rn?(g=Or(p.props.children,m.mode,k,p.key),g.return=m,m=g):(k=Di(p.type,p.key,p.props,null,m.mode,k),k.ref=Qn(m,g,p),k.return=m,m=k)}return s(m);case tn:e:{for(C=p.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===p.containerInfo&&g.stateNode.implementation===p.implementation){r(m,g.sibling),g=o(g,p.children||[]),g.return=m,m=g;break e}else{r(m,g);break}else t(m,g);g=g.sibling}g=Ta(p,m.mode,k),g.return=m,m=g}return s(m);case Xt:return C=p._init,_(m,g,C(p._payload),k)}if(ro(p))return y(m,g,p,k);if(Vn(p))return x(m,g,p,k);fi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,g!==null&&g.tag===6?(r(m,g.sibling),g=o(g,p),g.return=m,m=g):(r(m,g),g=Ca(p,m.mode,k),g.return=m,m=g),s(m)):r(m,g)}return _}var Sn=pp(!0),mp=pp(!1),Ho={},Ct=vr(Ho),Ao=vr(Ho),Io=vr(Ho);function Rr(e){if(e===Ho)throw Error(T(174));return e}function zc(e,t){switch(X(Io,t),X(Ao,e),X(Ct,Ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nl(t,e)}te(Ct),X(Ct,t)}function En(){te(Ct),te(Ao),te(Io)}function gp(e){Rr(Io.current);var t=Rr(Ct.current),r=nl(t,e.type);t!==r&&(X(Ao,e),X(Ct,r))}function Dc(e){Ao.current===e&&(te(Ct),te(Ao))}var ie=vr(0);function us(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=[];function Fc(){for(var e=0;e<xa.length;e++)xa[e]._workInProgressVersionPrimary=null;xa.length=0}var Oi=Bt.ReactCurrentDispatcher,ka=Bt.ReactCurrentBatchConfig,zr=0,se=null,pe=null,ge=null,ds=!1,ho=!1,Oo=0,T0=0;function _e(){throw Error(T(321))}function Mc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!pt(e[r],t[r]))return!1;return!0}function Bc(e,t,r,n,o,i){if(zr=i,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?R0:A0,e=r(n,o),ho){i=0;do{if(ho=!1,Oo=0,25<=i)throw Error(T(301));i+=1,ge=pe=null,t.updateQueue=null,Oi.current=I0,e=r(n,o)}while(ho)}if(Oi.current=fs,t=pe!==null&&pe.next!==null,zr=0,ge=pe=se=null,ds=!1,t)throw Error(T(300));return e}function qc(){var e=Oo!==0;return Oo=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?se.memoizedState=ge=e:ge=ge.next=e,ge}function rt(){if(pe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?se.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(T(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?se.memoizedState=ge=e:ge=ge.next=e}return ge}function Lo(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=rt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=pe,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=n):l=l.next=d,se.lanes|=u,Dr|=u}c=c.next}while(c!==null&&c!==i);l===null?s=n:l.next=a,pt(n,t.memoizedState)||(Le=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,se.lanes|=i,Dr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _a(e){var t=rt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);pt(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function vp(){}function yp(e,t){var r=se,n=rt(),o=t(),i=!pt(n.memoizedState,o);if(i&&(n.memoizedState=o,Le=!0),n=n.queue,Wc(kp.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(r.flags|=2048,No(9,xp.bind(null,r,n,o,t),void 0,null),ye===null)throw Error(T(349));zr&30||wp(r,t,o)}return o}function wp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xp(e,t,r,n){t.value=r,t.getSnapshot=n,bp(t)&&_p(e)}function kp(e,t,r){return r(function(){bp(t)&&_p(e)})}function bp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!pt(e,r)}catch{return!0}}function _p(e){var t=Dt(e,1);t!==null&&ft(t,e,1,-1)}function dd(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t.queue=e,e=e.dispatch=$0.bind(null,se,e),[t.memoizedState,e]}function No(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Sp(){return rt().memoizedState}function Li(e,t,r,n){var o=xt();se.flags|=e,o.memoizedState=No(1|t,r,void 0,n===void 0?null:n)}function Is(e,t,r,n){var o=rt();n=n===void 0?null:n;var i=void 0;if(pe!==null){var s=pe.memoizedState;if(i=s.destroy,n!==null&&Mc(n,s.deps)){o.memoizedState=No(t,r,i,n);return}}se.flags|=e,o.memoizedState=No(1|t,r,i,n)}function fd(e,t){return Li(8390656,8,e,t)}function Wc(e,t){return Is(2048,8,e,t)}function Ep(e,t){return Is(4,2,e,t)}function Cp(e,t){return Is(4,4,e,t)}function Tp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jp(e,t,r){return r=r!=null?r.concat([e]):null,Is(4,4,Tp.bind(null,t,e),r)}function Vc(){}function Pp(e,t){var r=rt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Mc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function $p(e,t){var r=rt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Mc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Rp(e,t,r){return zr&21?(pt(r,t)||(r=Oh(),se.lanes|=r,Dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=r)}function j0(e,t){var r=Q;Q=r!==0&&4>r?r:4,e(!0);var n=ka.transition;ka.transition={};try{e(!1),t()}finally{Q=r,ka.transition=n}}function Ap(){return rt().memoizedState}function P0(e,t,r){var n=dr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ip(e))Op(t,r);else if(r=up(e,t,r,n),r!==null){var o=$e();ft(r,e,n,o),Lp(r,t,n)}}function $0(e,t,r){var n=dr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))Op(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,r);if(o.hasEagerState=!0,o.eagerState=a,pt(a,s)){var l=t.interleaved;l===null?(o.next=o,Nc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=up(e,t,o,n),r!==null&&(o=$e(),ft(r,e,n,o),Lp(r,t,n))}}function Ip(e){var t=e.alternate;return e===se||t!==null&&t===se}function Op(e,t){ho=ds=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Lp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bc(e,r)}}var fs={readContext:tt,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},R0={readContext:tt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:fd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Li(4194308,4,Tp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var r=xt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=xt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=P0.bind(null,se,e),[n.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:dd,useDebugValue:Vc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=dd(!1),t=e[0];return e=j0.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=se,o=xt();if(re){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),ye===null)throw Error(T(349));zr&30||wp(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,fd(kp.bind(null,n,i,e),[e]),n.flags|=2048,No(9,xp.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=xt(),t=ye.identifierPrefix;if(re){var r=Ot,n=It;r=(n&~(1<<32-dt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Oo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=T0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},A0={readContext:tt,useCallback:Pp,useContext:tt,useEffect:Wc,useImperativeHandle:jp,useInsertionEffect:Ep,useLayoutEffect:Cp,useMemo:$p,useReducer:ba,useRef:Sp,useState:function(){return ba(Lo)},useDebugValue:Vc,useDeferredValue:function(e){var t=rt();return Rp(t,pe.memoizedState,e)},useTransition:function(){var e=ba(Lo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:vp,useSyncExternalStore:yp,useId:Ap,unstable_isNewReconciler:!1},I0={readContext:tt,useCallback:Pp,useContext:tt,useEffect:Wc,useImperativeHandle:jp,useInsertionEffect:Ep,useLayoutEffect:Cp,useMemo:$p,useReducer:_a,useRef:Sp,useState:function(){return _a(Lo)},useDebugValue:Vc,useDeferredValue:function(e){var t=rt();return pe===null?t.memoizedState=e:Rp(t,pe.memoizedState,e)},useTransition:function(){var e=_a(Lo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:vp,useSyncExternalStore:yp,useId:Ap,unstable_isNewReconciler:!1};function Cn(e,t){try{var r="",n=t;do r+=av(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Sa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,r){r=Lt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ps||(ps=!0,Nl=n),Cl(e,t)},r}function Up(e,t,r){r=Lt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Cl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Cl(e,t),typeof n!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function hd(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new O0;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=K0.bind(null,e,t,r),t.then(e,e))}function pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function md(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Lt(-1,1),t.tag=2,cr(r,t,1))),r.lanes|=1),e)}var L0=Bt.ReactCurrentOwner,Le=!1;function Pe(e,t,r,n){t.child=e===null?mp(t,null,r,n):Sn(t,e.child,r,n)}function gd(e,t,r,n,o){r=r.render;var i=t.ref;return wn(t,o),n=Bc(e,t,r,n,i,o),r=qc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(re&&r&&$c(t),t.flags|=1,Pe(e,t,n,o),t.child)}function vd(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Zc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,zp(e,t,i,n,o)):(e=Di(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:jo,r(s,n)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=fr(i,n),e.ref=t.ref,e.return=t,t.child=e}function zp(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(jo(i,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return Tl(e,t,r,n,o)}function Dp(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(hn,Me),Me|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(hn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,X(hn,Me),Me|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,X(hn,Me),Me|=n;return Pe(e,t,o,r),t.child}function Fp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,r,n,o){var i=Ue(r)?Nr:Te.current;return i=bn(t,i),wn(t,o),r=Bc(e,t,r,n,i,o),n=qc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(re&&n&&$c(t),t.flags|=1,Pe(e,t,r,o),t.child)}function yd(e,t,r,n,o){if(Ue(r)){var i=!0;os(t)}else i=!1;if(wn(t,o),t.stateNode===null)Ni(e,t),hp(t,r,n),El(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=tt(c):(c=Ue(r)?Nr:Te.current,c=bn(t,c));var u=r.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==c)&&cd(t,s,n,c),Zt=!1;var h=t.memoizedState;s.state=h,cs(t,n,s,o),l=t.memoizedState,a!==n||h!==l||Ne.current||Zt?(typeof u=="function"&&(Sl(t,r,u,n),l=t.memoizedState),(a=Zt||ld(t,r,a,n,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=c,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,dp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:at(t.type,a),s.props=c,d=t.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=Ue(r)?Nr:Te.current,l=bn(t,l));var v=r.getDerivedStateFromProps;(u=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&cd(t,s,n,l),Zt=!1,h=t.memoizedState,s.state=h,cs(t,n,s,o);var y=t.memoizedState;a!==d||h!==y||Ne.current||Zt?(typeof v=="function"&&(Sl(t,r,v,n),y=t.memoizedState),(c=Zt||ld(t,r,c,n,h,y,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),s.props=n,s.state=y,s.context=l,n=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return jl(e,t,r,n,i,o)}function jl(e,t,r,n,o,i){Fp(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&nd(t,r,!1),Ft(e,t,i);n=t.stateNode,L0.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Sn(t,e.child,null,i),t.child=Sn(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=n.state,o&&nd(t,r,!0),t.child}function Mp(e){var t=e.stateNode;t.pendingContext?rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rd(e,t.context,!1),zc(e,t.containerInfo)}function wd(e,t,r,n,o){return _n(),Ac(o),t.flags|=256,Pe(e,t,r,n),t.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bp(e,t,r){var n=t.pendingProps,o=ie.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(ie,o&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ns(s,n,0,null),e=Or(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$l(r),t.memoizedState=Pl,e):Hc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return N0(e,t,s,n,a,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=fr(o,l),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=fr(a,i):(i=Or(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?$l(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=Pl,n}return i=e.child,e=i.sibling,n=fr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Hc(e,t){return t=Ns({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hi(e,t,r,n){return n!==null&&Ac(n),Sn(t,e.child,null,r),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function N0(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Sa(Error(T(422))),hi(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Ns({mode:"visible",children:n.children},o,0,null),i=Or(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Sn(t,e.child,null,s),t.child.memoizedState=$l(s),t.memoizedState=Pl,i);if(!(t.mode&1))return hi(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(T(419)),n=Sa(i,n,void 0),hi(e,t,s,n)}if(a=(s&e.childLanes)!==0,Le||a){if(n=ye,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Dt(e,o),ft(n,e,o,-1))}return Xc(),n=Sa(Error(T(421))),hi(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=J0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Be=lr(o.nextSibling),qe=t,re=!0,ut=null,e!==null&&(Je[Qe++]=It,Je[Qe++]=Ot,Je[Qe++]=Ur,It=e.id,Ot=e.overflow,Ur=t),t=Hc(t,n.children),t.flags|=4096,t)}function xd(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),_l(e.return,t,r)}function Ea(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function qp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Pe(e,t,n.children,r),n=ie.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,r,t);else if(e.tag===19)xd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(X(ie,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&us(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ea(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&us(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ea(t,!0,r,null,i);break;case"together":Ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=fr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function U0(e,t,r){switch(t.tag){case 3:Mp(t),_n();break;case 5:gp(t);break;case 1:Ue(t.type)&&os(t);break;case 4:zc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;X(as,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(X(ie,ie.current&1),t.flags|=128,null):r&t.child.childLanes?Bp(e,t,r):(X(ie,ie.current&1),e=Ft(e,t,r),e!==null?e.sibling:null);X(ie,ie.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return qp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(ie,ie.current),n)break;return null;case 22:case 23:return t.lanes=0,Dp(e,t,r)}return Ft(e,t,r)}var Wp,Rl,Vp,Hp;Wp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Rl=function(){};Vp=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Rr(Ct.current);var i=null;switch(r){case"input":o=Za(e,o),n=Za(e,n),i=[];break;case"select":o=ae({},o,{value:void 0}),n=ae({},n,{value:void 0}),i=[];break;case"textarea":o=rl(e,o),n=rl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=rs)}ol(r,n);var s;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var l=n[c];if(a=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Hp=function(e,t,r,n){r!==n&&(t.flags|=4)};function Yn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function z0(e,t,r){var n=t.pendingProps;switch(Rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Ue(t.type)&&ns(),Se(t),null;case 3:return n=t.stateNode,En(),te(Ne),te(Te),Fc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Dl(ut),ut=null))),Rl(e,t),Se(t),null;case 5:Dc(t);var o=Rr(Io.current);if(r=t.type,e!==null&&t.stateNode!=null)Vp(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(T(166));return Se(t),null}if(e=Rr(Ct.current),di(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[_t]=t,n[Ro]=i,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<oo.length;o++)Z(oo[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":Pu(n,i),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Z("invalid",n);break;case"textarea":Ru(n,i),Z("invalid",n)}ol(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&ui(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ui(n.textContent,a,e),o=["children",""+a]):ko.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",n)}switch(r){case"input":ri(n),$u(n,i,!0);break;case"textarea":ri(n),Au(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=rs)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[_t]=t,e[Ro]=n,Wp(e,t,!1,!1),t.stateNode=e;e:{switch(s=il(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<oo.length;o++)Z(oo[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":Pu(e,n),o=Za(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=ae({},n,{value:void 0}),Z("invalid",e);break;case"textarea":Ru(e,n),o=rl(e,n),Z("invalid",e);break;default:o=n}ol(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?bh(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xh(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&bo(e,l):typeof l=="number"&&bo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ko.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&gc(e,i,l,s))}switch(r){case"input":ri(e),$u(e,n,!1);break;case"textarea":ri(e),Au(e);break;case"option":n.value!=null&&e.setAttribute("value",""+pr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?mn(e,!!n.multiple,i,!1):n.defaultValue!=null&&mn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=rs)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(T(166));if(r=Rr(Io.current),Rr(Ct.current),di(t)){if(n=t.stateNode,r=t.memoizedProps,n[_t]=t,(i=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:ui(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[_t]=t,t.stateNode=n}return Se(t),null;case 13:if(te(ie),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Be!==null&&t.mode&1&&!(t.flags&128))cp(),_n(),t.flags|=98560,i=!1;else if(i=di(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[_t]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),i=!1}else ut!==null&&(Dl(ut),ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?me===0&&(me=3):Xc())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return En(),Rl(e,t),e===null&&Po(t.stateNode.containerInfo),Se(t),null;case 10:return Lc(t.type._context),Se(t),null;case 17:return Ue(t.type)&&ns(),Se(t),null;case 19:if(te(ie),i=t.memoizedState,i===null)return Se(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Yn(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=us(e),s!==null){for(t.flags|=128,Yn(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return X(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Tn&&(t.flags|=128,n=!0,Yn(i,!1),t.lanes=4194304)}else{if(!n)if(e=us(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!re)return Se(t),null}else 2*ce()-i.renderingStartTime>Tn&&r!==1073741824&&(t.flags|=128,n=!0,Yn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,r=ie.current,X(ie,n?r&1|2:r&1),t):(Se(t),null);case 22:case 23:return Yc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Me&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function D0(e,t){switch(Rc(t),t.tag){case 1:return Ue(t.type)&&ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),te(Ne),te(Te),Fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dc(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return En(),null;case 10:return Lc(t.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var pi=!1,Ee=!1,F0=typeof WeakSet=="function"?WeakSet:Set,A=null;function fn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){le(e,t,n)}else r.current=null}function Al(e,t,r){try{r()}catch(n){le(e,t,n)}}var kd=!1;function M0(e,t){if(ml=Zi,e=Qh(),Pc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var v;d!==r||o!==0&&d.nodeType!==3||(a=s+o),d!==i||n!==0&&d.nodeType!==3||(l=s+n),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break t;if(h===r&&++c===o&&(a=s),h===i&&++u===n&&(l=s),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(gl={focusedElem:e,selectionRange:r},Zi=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,_=y.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:at(t.type,x),_);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){le(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=kd,kd=!1,y}function po(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Al(t,r,i)}o=o.next}while(o!==n)}}function Os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Il(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Gp(e){var t=e.alternate;t!==null&&(e.alternate=null,Gp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Ro],delete t[wl],delete t[_0],delete t[S0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kp(e){return e.tag===5||e.tag===3||e.tag===4}function bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=rs));else if(n!==4&&(e=e.child,e!==null))for(Ol(e,t,r),e=e.sibling;e!==null;)Ol(e,t,r),e=e.sibling}function Ll(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ll(e,t,r),e=e.sibling;e!==null;)Ll(e,t,r),e=e.sibling}var we=null,lt=!1;function Vt(e,t,r){for(r=r.child;r!==null;)Jp(e,t,r),r=r.sibling}function Jp(e,t,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Cs,r)}catch{}switch(r.tag){case 5:Ee||fn(r,t);case 6:var n=we,o=lt;we=null,Vt(e,t,r),we=n,lt=o,we!==null&&(lt?(e=we,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):we.removeChild(r.stateNode));break;case 18:we!==null&&(lt?(e=we,r=r.stateNode,e.nodeType===8?ya(e.parentNode,r):e.nodeType===1&&ya(e,r),Co(e)):ya(we,r.stateNode));break;case 4:n=we,o=lt,we=r.stateNode.containerInfo,lt=!0,Vt(e,t,r),we=n,lt=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Al(r,t,s),o=o.next}while(o!==n)}Vt(e,t,r);break;case 1:if(!Ee&&(fn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){le(r,t,a)}Vt(e,t,r);break;case 21:Vt(e,t,r);break;case 22:r.mode&1?(Ee=(n=Ee)||r.memoizedState!==null,Vt(e,t,r),Ee=n):Vt(e,t,r);break;default:Vt(e,t,r)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new F0),t.forEach(function(n){var o=Q0.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function it(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,lt=!1;break e;case 3:we=a.stateNode.containerInfo,lt=!0;break e;case 4:we=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(we===null)throw Error(T(160));Jp(i,s,o),we=null,lt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){le(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qp(t,e),t=t.sibling}function Qp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),wt(e),n&4){try{po(3,e,e.return),Os(3,e)}catch(x){le(e,e.return,x)}try{po(5,e,e.return)}catch(x){le(e,e.return,x)}}break;case 1:it(t,e),wt(e),n&512&&r!==null&&fn(r,r.return);break;case 5:if(it(t,e),wt(e),n&512&&r!==null&&fn(r,r.return),e.flags&32){var o=e.stateNode;try{bo(o,"")}catch(x){le(e,e.return,x)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&vh(o,i),il(a,s);var c=il(a,i);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?bh(o,d):u==="dangerouslySetInnerHTML"?xh(o,d):u==="children"?bo(o,d):gc(o,u,d,c)}switch(a){case"input":el(o,i);break;case"textarea":yh(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?mn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?mn(o,!!i.multiple,i.defaultValue,!0):mn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ro]=i}catch(x){le(e,e.return,x)}}break;case 6:if(it(t,e),wt(e),n&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){le(e,e.return,x)}}break;case 3:if(it(t,e),wt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(x){le(e,e.return,x)}break;case 4:it(t,e),wt(e);break;case 13:it(t,e),wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Jc=ce())),n&4&&_d(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||u,it(t,e),Ee=c):it(t,e),wt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(d=A=u;A!==null;){switch(h=A,v=h.child,h.tag){case 0:case 11:case 14:case 15:po(4,h,h.return);break;case 1:fn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){le(n,r,x)}}break;case 5:fn(h,h.return);break;case 22:if(h.memoizedState!==null){Ed(d);continue}}v!==null?(v.return=h,A=v):Ed(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kh("display",s))}catch(x){le(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){le(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(t,e),wt(e),n&4&&_d(e);break;case 21:break;default:it(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Kp(r)){var n=r;break e}r=r.return}throw Error(T(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(bo(o,""),n.flags&=-33);var i=bd(e);Ll(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,a=bd(e);Ol(e,a,s);break;default:throw Error(T(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function B0(e,t,r){A=e,Yp(e)}function Yp(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||pi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Ee;a=pi;var c=Ee;if(pi=s,(Ee=l)&&!c)for(A=o;A!==null;)s=A,l=s.child,s.tag===22&&s.memoizedState!==null?Cd(o):l!==null?(l.return=s,A=l):Cd(o);for(;i!==null;)A=i,Yp(i),i=i.sibling;A=o,pi=a,Ee=c}Sd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):Sd(e)}}function Sd(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Os(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ee)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:at(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ad(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ad(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Co(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ee||t.flags&512&&Il(t)}catch(h){le(t,t.return,h)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Ed(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function Cd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Os(4,t)}catch(l){le(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){le(t,o,l)}}var i=t.return;try{Il(t)}catch(l){le(t,i,l)}break;case 5:var s=t.return;try{Il(t)}catch(l){le(t,s,l)}}}catch(l){le(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var q0=Math.ceil,hs=Bt.ReactCurrentDispatcher,Gc=Bt.ReactCurrentOwner,Ze=Bt.ReactCurrentBatchConfig,W=0,ye=null,de=null,xe=0,Me=0,hn=vr(0),me=0,Uo=null,Dr=0,Ls=0,Kc=0,mo=null,Ie=null,Jc=0,Tn=1/0,Pt=null,ps=!1,Nl=null,ur=null,mi=!1,or=null,ms=0,go=0,Ul=null,Ui=-1,zi=0;function $e(){return W&6?ce():Ui!==-1?Ui:Ui=ce()}function dr(e){return e.mode&1?W&2&&xe!==0?xe&-xe:C0.transition!==null?(zi===0&&(zi=Oh()),zi):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Mh(e.type)),e):1}function ft(e,t,r,n){if(50<go)throw go=0,Ul=null,Error(T(185));qo(e,r,n),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(Ls|=r),me===4&&tr(e,xe)),ze(e,n),r===1&&W===0&&!(t.mode&1)&&(Tn=ce()+500,Rs&&yr()))}function ze(e,t){var r=e.callbackNode;Cv(e,t);var n=Xi(e,e===ye?xe:0);if(n===0)r!==null&&Lu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Lu(r),t===1)e.tag===0?E0(Td.bind(null,e)):sp(Td.bind(null,e)),k0(function(){!(W&6)&&yr()}),r=null;else{switch(Lh(n)){case 1:r=kc;break;case 4:r=Ah;break;case 16:r=Yi;break;case 536870912:r=Ih;break;default:r=Yi}r=im(r,Xp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Xp(e,t){if(Ui=-1,zi=0,W&6)throw Error(T(327));var r=e.callbackNode;if(xn()&&e.callbackNode!==r)return null;var n=Xi(e,e===ye?xe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=gs(e,n);else{t=n;var o=W;W|=2;var i=em();(ye!==e||xe!==t)&&(Pt=null,Tn=ce()+500,Ir(e,t));do try{H0();break}catch(a){Zp(e,a)}while(!0);Oc(),hs.current=i,W=o,de!==null?t=0:(ye=null,xe=0,t=me)}if(t!==0){if(t===2&&(o=ul(e),o!==0&&(n=o,t=zl(e,o))),t===1)throw r=Uo,Ir(e,0),tr(e,n),ze(e,ce()),r;if(t===6)tr(e,n);else{if(o=e.current.alternate,!(n&30)&&!W0(o)&&(t=gs(e,n),t===2&&(i=ul(e),i!==0&&(n=i,t=zl(e,i))),t===1))throw r=Uo,Ir(e,0),tr(e,n),ze(e,ce()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(T(345));case 2:Er(e,Ie,Pt);break;case 3:if(tr(e,n),(n&130023424)===n&&(t=Jc+500-ce(),10<t)){if(Xi(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){$e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yl(Er.bind(null,e,Ie,Pt),t);break}Er(e,Ie,Pt);break;case 4:if(tr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-dt(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*q0(n/1960))-n,10<n){e.timeoutHandle=yl(Er.bind(null,e,Ie,Pt),n);break}Er(e,Ie,Pt);break;case 5:Er(e,Ie,Pt);break;default:throw Error(T(329))}}}return ze(e,ce()),e.callbackNode===r?Xp.bind(null,e):null}function zl(e,t){var r=mo;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=gs(e,t),e!==2&&(t=Ie,Ie=r,t!==null&&Dl(t)),e}function Dl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function W0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tr(e,t){for(t&=~Kc,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-dt(t),n=1<<r;e[r]=-1,t&=~n}}function Td(e){if(W&6)throw Error(T(327));xn();var t=Xi(e,0);if(!(t&1))return ze(e,ce()),null;var r=gs(e,t);if(e.tag!==0&&r===2){var n=ul(e);n!==0&&(t=n,r=zl(e,n))}if(r===1)throw r=Uo,Ir(e,0),tr(e,t),ze(e,ce()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Er(e,Ie,Pt),ze(e,ce()),null}function Qc(e,t){var r=W;W|=1;try{return e(t)}finally{W=r,W===0&&(Tn=ce()+500,Rs&&yr())}}function Fr(e){or!==null&&or.tag===0&&!(W&6)&&xn();var t=W;W|=1;var r=Ze.transition,n=Q;try{if(Ze.transition=null,Q=1,e)return e()}finally{Q=n,Ze.transition=r,W=t,!(W&6)&&yr()}}function Yc(){Me=hn.current,te(hn)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,x0(r)),de!==null)for(r=de.return;r!==null;){var n=r;switch(Rc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ns();break;case 3:En(),te(Ne),te(Te),Fc();break;case 5:Dc(n);break;case 4:En();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Lc(n.type._context);break;case 22:case 23:Yc()}r=r.return}if(ye=e,de=e=fr(e.current,null),xe=Me=t,me=0,Uo=null,Kc=Ls=Dr=0,Ie=mo=null,$r!==null){for(t=0;t<$r.length;t++)if(r=$r[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}$r=null}return e}function Zp(e,t){do{var r=de;try{if(Oc(),Oi.current=fs,ds){for(var n=se.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}ds=!1}if(zr=0,ge=pe=se=null,ho=!1,Oo=0,Gc.current=null,r===null||r.return===null){me=1,Uo=t,de=null;break}e:{var i=e,s=r.return,a=r,l=t;if(t=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=pd(s);if(v!==null){v.flags&=-257,md(v,s,a,i,t),v.mode&1&&hd(i,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){hd(i,c,t),Xc();break e}l=Error(T(426))}}else if(re&&a.mode&1){var _=pd(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),md(_,s,a,i,t),Ac(Cn(l,a));break e}}i=l=Cn(l,a),me!==4&&(me=2),mo===null?mo=[i]:mo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Np(i,l,t);sd(i,m);break e;case 1:a=l;var g=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ur===null||!ur.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Up(i,a,t);sd(i,k);break e}}i=i.return}while(i!==null)}rm(r)}catch(E){t=E,de===r&&r!==null&&(de=r=r.return);continue}break}while(!0)}function em(){var e=hs.current;return hs.current=fs,e===null?fs:e}function Xc(){(me===0||me===3||me===2)&&(me=4),ye===null||!(Dr&268435455)&&!(Ls&268435455)||tr(ye,xe)}function gs(e,t){var r=W;W|=2;var n=em();(ye!==e||xe!==t)&&(Pt=null,Ir(e,t));do try{V0();break}catch(o){Zp(e,o)}while(!0);if(Oc(),W=r,hs.current=n,de!==null)throw Error(T(261));return ye=null,xe=0,me}function V0(){for(;de!==null;)tm(de)}function H0(){for(;de!==null&&!vv();)tm(de)}function tm(e){var t=om(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?rm(e):de=t,Gc.current=null}function rm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=D0(r,t),r!==null){r.flags&=32767,de=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(r=z0(r,t,Me),r!==null){de=r;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function Er(e,t,r){var n=Q,o=Ze.transition;try{Ze.transition=null,Q=1,G0(e,t,r,n)}finally{Ze.transition=o,Q=n}return null}function G0(e,t,r,n){do xn();while(or!==null);if(W&6)throw Error(T(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Tv(e,i),e===ye&&(de=ye=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||mi||(mi=!0,im(Yi,function(){return xn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ze.transition,Ze.transition=null;var s=Q;Q=1;var a=W;W|=4,Gc.current=null,M0(e,r),Qp(r,e),h0(gl),Zi=!!ml,gl=ml=null,e.current=r,B0(r),yv(),W=a,Q=s,Ze.transition=i}else e.current=r;if(mi&&(mi=!1,or=e,ms=o),i=e.pendingLanes,i===0&&(ur=null),kv(r.stateNode),ze(e,ce()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ps)throw ps=!1,e=Nl,Nl=null,e;return ms&1&&e.tag!==0&&xn(),i=e.pendingLanes,i&1?e===Ul?go++:(go=0,Ul=e):go=0,yr(),null}function xn(){if(or!==null){var e=Lh(ms),t=Ze.transition,r=Q;try{if(Ze.transition=null,Q=16>e?16:e,or===null)var n=!1;else{if(e=or,or=null,ms=0,W&6)throw Error(T(331));var o=W;for(W|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(A=c;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:po(8,u,i)}var d=u.child;if(d!==null)d.return=u,A=d;else for(;A!==null;){u=A;var h=u.sibling,v=u.return;if(Gp(u),u===c){A=null;break}if(h!==null){h.return=v,A=h;break}A=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:po(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,A=m;break e}A=i.return}}var g=e.current;for(A=g;A!==null;){s=A;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,A=p;else e:for(s=g;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Os(9,a)}}catch(E){le(a,a.return,E)}if(a===s){A=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,A=k;break e}A=a.return}}if(W=o,yr(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Cs,e)}catch{}n=!0}return n}finally{Q=r,Ze.transition=t}}return!1}function jd(e,t,r){t=Cn(r,t),t=Np(e,t,1),e=cr(e,t,1),t=$e(),e!==null&&(qo(e,1,t),ze(e,t))}function le(e,t,r){if(e.tag===3)jd(e,e,r);else for(;t!==null;){if(t.tag===3){jd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ur===null||!ur.has(n))){e=Cn(r,e),e=Up(t,e,1),t=cr(t,e,1),e=$e(),t!==null&&(qo(t,1,e),ze(t,e));break}}t=t.return}}function K0(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&r,ye===e&&(xe&r)===r&&(me===4||me===3&&(xe&130023424)===xe&&500>ce()-Jc?Ir(e,0):Kc|=r),ze(e,t)}function nm(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var r=$e();e=Dt(e,t),e!==null&&(qo(e,t,r),ze(e,r))}function J0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nm(e,r)}function Q0(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(t),nm(e,r)}var om;om=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Le=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Le=!1,U0(e,t,r);Le=!!(e.flags&131072)}else Le=!1,re&&t.flags&1048576&&ap(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ni(e,t),e=t.pendingProps;var o=bn(t,Te.current);wn(t,r),o=Bc(null,t,n,e,o,r);var i=qc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(n)?(i=!0,os(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Uc(t),o.updater=As,t.stateNode=o,o._reactInternals=t,El(t,n,e,r),t=jl(null,t,n,!0,i,r)):(t.tag=0,re&&i&&$c(t),Pe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=X0(n),e=at(n,e),o){case 0:t=Tl(null,t,n,e,r);break e;case 1:t=yd(null,t,n,e,r);break e;case 11:t=gd(null,t,n,e,r);break e;case 14:t=vd(null,t,n,at(n.type,e),r);break e}throw Error(T(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),Tl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),yd(e,t,n,o,r);case 3:e:{if(Mp(t),e===null)throw Error(T(387));n=t.pendingProps,i=t.memoizedState,o=i.element,dp(e,t),cs(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Cn(Error(T(423)),t),t=wd(e,t,n,r,o);break e}else if(n!==o){o=Cn(Error(T(424)),t),t=wd(e,t,n,r,o);break e}else for(Be=lr(t.stateNode.containerInfo.firstChild),qe=t,re=!0,ut=null,r=mp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_n(),n===o){t=Ft(e,t,r);break e}Pe(e,t,n,r)}t=t.child}return t;case 5:return gp(t),e===null&&bl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,vl(n,o)?s=null:i!==null&&vl(n,i)&&(t.flags|=32),Fp(e,t),Pe(e,t,s,r),t.child;case 6:return e===null&&bl(t),null;case 13:return Bp(e,t,r);case 4:return zc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Sn(t,null,n,r):Pe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),gd(e,t,n,o,r);case 7:return Pe(e,t,t.pendingProps,r),t.child;case 8:return Pe(e,t,t.pendingProps.children,r),t.child;case 12:return Pe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,X(as,n._currentValue),n._currentValue=s,i!==null)if(pt(i.value,s)){if(i.children===o.children&&!Ne.current){t=Ft(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Lt(-1,r&-r),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),_l(i.return,r,t),a.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),_l(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Pe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,wn(t,r),o=tt(o),n=n(o),t.flags|=1,Pe(e,t,n,r),t.child;case 14:return n=t.type,o=at(n,t.pendingProps),o=at(n.type,o),vd(e,t,n,o,r);case 15:return zp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),Ni(e,t),t.tag=1,Ue(n)?(e=!0,os(t)):e=!1,wn(t,r),hp(t,n,o),El(t,n,o,r),jl(null,t,n,!0,e,r);case 19:return qp(e,t,r);case 22:return Dp(e,t,r)}throw Error(T(156,t.tag))};function im(e,t){return Rh(e,t)}function Y0(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,r,n){return new Y0(e,t,r,n)}function Zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X0(e){if(typeof e=="function")return Zc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yc)return 11;if(e===wc)return 14}return 2}function fr(e,t){var r=e.alternate;return r===null?(r=Xe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Di(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")Zc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case rn:return Or(r.children,o,i,t);case vc:s=8,o|=8;break;case Ja:return e=Xe(12,r,t,o|2),e.elementType=Ja,e.lanes=i,e;case Qa:return e=Xe(13,r,t,o),e.elementType=Qa,e.lanes=i,e;case Ya:return e=Xe(19,r,t,o),e.elementType=Ya,e.lanes=i,e;case ph:return Ns(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fh:s=10;break e;case hh:s=9;break e;case yc:s=11;break e;case wc:s=14;break e;case Xt:s=16,n=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Xe(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Or(e,t,r,n){return e=Xe(7,e,n,t),e.lanes=r,e}function Ns(e,t,r,n){return e=Xe(22,e,n,t),e.elementType=ph,e.lanes=r,e.stateNode={isHidden:!1},e}function Ca(e,t,r){return e=Xe(6,e,null,t),e.lanes=r,e}function Ta(e,t,r){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z0(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eu(e,t,r,n,o,i,s,a,l){return e=new Z0(e,t,r,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Xe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(i),e}function ey(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function sm(e){if(!e)return mr;e=e._reactInternals;e:{if(Br(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if(Ue(r))return ip(e,r,t)}return t}function am(e,t,r,n,o,i,s,a,l){return e=eu(r,n,!0,e,o,i,s,a,l),e.context=sm(null),r=e.current,n=$e(),o=dr(r),i=Lt(n,o),i.callback=t??null,cr(r,i,o),e.current.lanes=o,qo(e,o,n),ze(e,n),e}function Us(e,t,r,n){var o=t.current,i=$e(),s=dr(o);return r=sm(r),t.context===null?t.context=r:t.pendingContext=r,t=Lt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=cr(o,t,s),e!==null&&(ft(e,o,s,i),Ii(e,o,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function tu(e,t){Pd(e,t),(e=e.alternate)&&Pd(e,t)}function ty(){return null}var lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}zs.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Us(e,t,null,null)};zs.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fr(function(){Us(null,e,null,null)}),t[zt]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=zh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<er.length&&t!==0&&t<er[r].priority;r++);er.splice(r,0,e),r===0&&Fh(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function ry(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var c=vs(s);i.call(c)}}var s=am(t,n,e,0,null,!1,!1,"",$d);return e._reactRootContainer=s,e[zt]=s.current,Po(e.nodeType===8?e.parentNode:e),Fr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var c=vs(l);a.call(c)}}var l=eu(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=l,e[zt]=l.current,Po(e.nodeType===8?e.parentNode:e),Fr(function(){Us(t,l,r,n)}),l}function Fs(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=vs(s);a.call(l)}}Us(t,s,e,o)}else s=ry(r,t,e,o,n);return vs(s)}Nh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=no(t.pendingLanes);r!==0&&(bc(t,r|1),ze(t,ce()),!(W&6)&&(Tn=ce()+500,yr()))}break;case 13:Fr(function(){var n=Dt(e,1);if(n!==null){var o=$e();ft(n,e,1,o)}}),tu(e,1)}};_c=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var r=$e();ft(t,e,134217728,r)}tu(e,134217728)}};Uh=function(e){if(e.tag===13){var t=dr(e),r=Dt(e,t);if(r!==null){var n=$e();ft(r,e,t,n)}tu(e,t)}};zh=function(){return Q};Dh=function(e,t){var r=Q;try{return Q=e,t()}finally{Q=r}};al=function(e,t,r){switch(t){case"input":if(el(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=$s(n);if(!o)throw Error(T(90));gh(n),el(n,o)}}}break;case"textarea":yh(e,r);break;case"select":t=r.value,t!=null&&mn(e,!!r.multiple,t,!1)}};Eh=Qc;Ch=Fr;var ny={usingClientEntryPoint:!1,Events:[Vo,an,$s,_h,Sh,Qc]},Xn={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oy={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ph(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{Cs=gi.inject(oy),Et=gi}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny;Ve.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(T(200));return ey(e,t,null,r)};Ve.createRoot=function(e,t){if(!nu(e))throw Error(T(299));var r=!1,n="",o=lm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=eu(e,1,!1,null,null,r,!1,n,o),e[zt]=t.current,Po(e.nodeType===8?e.parentNode:e),new ru(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Ph(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return Fr(e)};Ve.hydrate=function(e,t,r){if(!Ds(t))throw Error(T(200));return Fs(null,e,t,!0,r)};Ve.hydrateRoot=function(e,t,r){if(!nu(e))throw Error(T(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=lm;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=am(t,null,e,1,r??null,o,!1,i,s),e[zt]=t.current,Po(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new zs(t)};Ve.render=function(e,t,r){if(!Ds(t))throw Error(T(200));return Fs(null,e,t,!1,r)};Ve.unmountComponentAtNode=function(e){if(!Ds(e))throw Error(T(40));return e._reactRootContainer?(Fr(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Qc;Ve.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ds(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Fs(e,t,r,!1,n)};Ve.version="18.2.0-next-9e3b772b8-20220608";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),ah.exports=Ve;var iy=ah.exports,Rd=iy;Ga.createRoot=Rd.createRoot,Ga.hydrateRoot=Rd.hydrateRoot;const sy="modulepreload",ay=function(e){return"/ventanilla/"+e},Ad={},Un=function(t,r,n){let o=Promise.resolve();return r&&r.length>0&&(document.getElementsByTagName("link"),o=Promise.all(r.map(i=>{if(i=ay(i),i in Ad)return;Ad[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":sy,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))),o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Id="popstate";function ly(e={}){function t(n,o){let{pathname:i,search:s,hash:a}=n.location;return Fl("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:zo(o)}return uy(t,r,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cy(){return Math.random().toString(36).substring(2,10)}function Od(e,t){return{usr:e.state,key:e.key,idx:t}}function Fl(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?zn(t):t,state:r,key:t&&t.key||n||cy()}}function zo({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function uy(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:i=!1}=n,s=o.history,a="POP",l=null,c=u();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function u(){return(s.state||{idx:null}).idx}function d(){a="POP";let _=u(),m=_==null?null:_-c;c=_,l&&l({action:a,location:x.location,delta:m})}function h(_,m){a="PUSH";let g=Fl(x.location,_,m);c=u()+1;let p=Od(g,c),k=x.createHref(g);try{s.pushState(p,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(k)}i&&l&&l({action:a,location:x.location,delta:1})}function v(_,m){a="REPLACE";let g=Fl(x.location,_,m);c=u();let p=Od(g,c),k=x.createHref(g);s.replaceState(p,"",k),i&&l&&l({action:a,location:x.location,delta:0})}function y(_){return dy(_)}let x={get action(){return a},get location(){return e(o,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Id,d),l=_,()=>{o.removeEventListener(Id,d),l=null}},createHref(_){return t(o,_)},createURL:y,encodeLocation(_){let m=y(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(_){return s.go(_)}};return x}function dy(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),ne(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:zo(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function um(e,t,r="/"){return fy(e,t,r,!1)}function fy(e,t,r,n){let o=typeof t=="string"?zn(t):t,i=Mt(o.pathname||"/",r);if(i==null)return null;let s=dm(e);hy(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=Sy(i);a=by(s[l],c,n)}return a}function dm(e,t=[],r=[],n="",o=!1){let i=(s,a,l=o,c)=>{let u={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(n)&&l)return;ne(u.relativePath.startsWith(n),`Absolute route path "${u.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(n.length)}let d=Nt([n,u.relativePath]),h=r.concat(u);s.children&&s.children.length>0&&(ne(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),dm(s.children,t,h,d,l)),!(s.path==null&&!s.index)&&t.push({path:d,score:xy(d,s.index),routesMeta:h})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of fm(s.path))i(s,a,!0,c)}),t}function fm(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let s=fm(n.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function hy(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ky(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var py=/^:[\w-]+$/,my=3,gy=2,vy=1,yy=10,wy=-2,Ld=e=>e==="*";function xy(e,t){let r=e.split("/"),n=r.length;return r.some(Ld)&&(n+=wy),t&&(n+=gy),r.filter(o=>!Ld(o)).reduce((o,i)=>o+(py.test(i)?my:i===""?vy:yy),n)}function ky(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function by(e,t,r=!1){let{routesMeta:n}=e,o={},i="/",s=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=ys({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&r&&!n[n.length-1].route.index&&(d=ys({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(o,d.params),s.push({params:o,pathname:Nt([i,d.pathname]),pathnameBase:jy(Nt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Nt([i,d.pathnameBase]))}return s}function ys(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=_y(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:n.reduce((c,{paramName:u,isOptional:d},h)=>{if(u==="*"){let y=a[h]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return d&&!v?c[u]=void 0:c[u]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function _y(e,t=!1,r=!0){mt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Sy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Mt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Ey(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?zn(e):e;return{pathname:r?r.startsWith("/")?r:Cy(r,t):t,search:Py(n),hash:$y(o)}}function Cy(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function ja(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ty(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ou(e){let t=Ty(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function iu(e,t,r,n=!1){let o;typeof e=="string"?o=zn(e):(o={...e},ne(!o.pathname||!o.pathname.includes("?"),ja("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),ja("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),ja("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=r;else{let d=t.length-1;if(!n&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;o.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=Ey(o,a),c=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var Nt=e=>e.join("/").replace(/\/\/+/g,"/"),jy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Py=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$y=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var hm=["POST","PUT","PATCH","DELETE"];new Set(hm);var Ay=["GET",...hm];new Set(Ay);var Dn=w.createContext(null);Dn.displayName="DataRouter";var Ms=w.createContext(null);Ms.displayName="DataRouterState";w.createContext(!1);var pm=w.createContext({isTransitioning:!1});pm.displayName="ViewTransition";var Iy=w.createContext(new Map);Iy.displayName="Fetchers";var Oy=w.createContext(null);Oy.displayName="Await";var gt=w.createContext(null);gt.displayName="Navigation";var Go=w.createContext(null);Go.displayName="Location";var vt=w.createContext({outlet:null,matches:[],isDataRoute:!1});vt.displayName="Route";var su=w.createContext(null);su.displayName="RouteError";function Ly(e,{relative:t}={}){ne(Fn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=w.useContext(gt),{hash:o,pathname:i,search:s}=Jo(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Nt([r,i])),n.createHref({pathname:a,search:s,hash:o})}function Fn(){return w.useContext(Go)!=null}function qt(){return ne(Fn(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Go).location}var mm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gm(e){w.useContext(gt).static||w.useLayoutEffect(e)}function Ko(){let{isDataRoute:e}=w.useContext(vt);return e?Jy():Ny()}function Ny(){ne(Fn(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Dn),{basename:t,navigator:r}=w.useContext(gt),{matches:n}=w.useContext(vt),{pathname:o}=qt(),i=JSON.stringify(ou(n)),s=w.useRef(!1);return gm(()=>{s.current=!0}),w.useCallback((l,c={})=>{if(mt(s.current,mm),!s.current)return;if(typeof l=="number"){r.go(l);return}let u=iu(l,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Nt([t,u.pathname])),(c.replace?r.replace:r.push)(u,c.state,c)},[t,r,i,o,e])}w.createContext(null);function Uy(){let{matches:e}=w.useContext(vt),t=e[e.length-1];return t?t.params:{}}function Jo(e,{relative:t}={}){let{matches:r}=w.useContext(vt),{pathname:n}=qt(),o=JSON.stringify(ou(r));return w.useMemo(()=>iu(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function zy(e,t){return vm(e,t)}function vm(e,t,r,n){var m;ne(Fn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=w.useContext(gt),{matches:i}=w.useContext(vt),s=i[i.length-1],a=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";ym(l,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=qt(),h;if(t){let g=typeof t=="string"?zn(t):t;ne(c==="/"||((m=g.pathname)==null?void 0:m.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),h=g}else h=d;let v=h.pathname||"/",y=v;if(c!=="/"){let g=c.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=um(e,{pathname:y});mt(u||x!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),mt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=qy(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:Nt([c,o.encodeLocation?o.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Nt([c,o.encodeLocation?o.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r,n);return t&&_?w.createElement(Go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},_):_}function Dy(){let e=Ky(),t=Ry(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:o},r):null,s)}var Fy=w.createElement(Dy,null),My=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?w.createElement(vt.Provider,{value:this.props.routeContext},w.createElement(su.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function By({routeContext:e,match:t,children:r}){let n=w.useContext(Dn);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(vt.Provider,{value:e},r)}function qy(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let l=o.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);ne(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let s=!1,a=-1;if(r)for(let l=0;l<o.length;l++){let c=o[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:u,errors:d}=r,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!d||d[c.route.id]===void 0);if(c.route.lazy||h){s=!0,a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}return o.reduceRight((l,c,u)=>{let d,h=!1,v=null,y=null;r&&(d=i&&c.route.id?i[c.route.id]:void 0,v=c.route.errorElement||Fy,s&&(a<0&&u===0?(ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,y=null):a===u&&(h=!0,y=c.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,u+1)),_=()=>{let m;return d?m=v:h?m=y:c.route.Component?m=w.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=l,w.createElement(By,{match:c,routeContext:{outlet:l,matches:x,isDataRoute:r!=null},children:m})};return r&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?w.createElement(My,{location:r.location,revalidation:r.revalidation,component:v,error:d,children:_(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):_()},null)}function au(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(e){let t=w.useContext(Dn);return ne(t,au(e)),t}function Vy(e){let t=w.useContext(Ms);return ne(t,au(e)),t}function Hy(e){let t=w.useContext(vt);return ne(t,au(e)),t}function lu(e){let t=Hy(e),r=t.matches[t.matches.length-1];return ne(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Gy(){return lu("useRouteId")}function Ky(){var n;let e=w.useContext(su),t=Vy("useRouteError"),r=lu("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Jy(){let{router:e}=Wy("useNavigate"),t=lu("useNavigate"),r=w.useRef(!1);return gm(()=>{r.current=!0}),w.useCallback(async(o,i={})=>{mt(r.current,mm),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Nd={};function ym(e,t,r){!t&&!Nd[e]&&(Nd[e]=!0,mt(!1,r))}w.memo(Qy);function Qy({routes:e,future:t,state:r}){return vm(e,void 0,r,t)}function Hr({to:e,replace:t,state:r,relative:n}){ne(Fn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=w.useContext(gt);mt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=w.useContext(vt),{pathname:s}=qt(),a=Ko(),l=iu(e,ou(i),s,n==="path"),c=JSON.stringify(l);return w.useEffect(()=>{a(JSON.parse(c),{replace:t,state:r,relative:n})},[a,c,n,t,r]),null}function Cr(e){ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yy({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:i=!1}){ne(!Fn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:s,navigator:o,static:i,future:{}}),[s,o,i]);typeof r=="string"&&(r=zn(r));let{pathname:l="/",search:c="",hash:u="",state:d=null,key:h="default"}=r,v=w.useMemo(()=>{let y=Mt(l,s);return y==null?null:{location:{pathname:y,search:c,hash:u,state:d,key:h},navigationType:n}},[s,l,c,u,d,h,n]);return mt(v!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:w.createElement(gt.Provider,{value:a},w.createElement(Go.Provider,{children:t,value:v}))}function Xy({children:e,location:t}){return zy(Ml(e),t)}function Ml(e,t=[]){let r=[];return w.Children.forEach(e,(n,o)=>{if(!w.isValidElement(n))return;let i=[...t,o];if(n.type===w.Fragment){r.push.apply(r,Ml(n.props.children,i));return}ne(n.type===Cr,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ne(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Ml(n.props.children,i)),r.push(s)}),r}var Fi="get",Mi="application/x-www-form-urlencoded";function Bs(e){return e!=null&&typeof e.tagName=="string"}function Zy(e){return Bs(e)&&e.tagName.toLowerCase()==="button"}function ew(e){return Bs(e)&&e.tagName.toLowerCase()==="form"}function tw(e){return Bs(e)&&e.tagName.toLowerCase()==="input"}function rw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nw(e,t){return e.button===0&&(!t||t==="_self")&&!rw(e)}var vi=null;function ow(){if(vi===null)try{new FormData(document.createElement("form"),0),vi=!1}catch{vi=!0}return vi}var iw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pa(e){return e!=null&&!iw.has(e)?(mt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mi}"`),null):e}function sw(e,t){let r,n,o,i,s;if(ew(e)){let a=e.getAttribute("action");n=a?Mt(a,t):null,r=e.getAttribute("method")||Fi,o=Pa(e.getAttribute("enctype"))||Mi,i=new FormData(e)}else if(Zy(e)||tw(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(n=l?Mt(l,t):null,r=e.getAttribute("formmethod")||a.getAttribute("method")||Fi,o=Pa(e.getAttribute("formenctype"))||Pa(a.getAttribute("enctype"))||Mi,i=new FormData(a,e),!ow()){let{name:c,type:u,value:d}=e;if(u==="image"){let h=c?`${c}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else c&&i.append(c,d)}}else{if(Bs(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Fi,n=null,o=Mi,s=e}return i&&o==="text/plain"&&(s=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function aw(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&Mt(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function lw(e,t){if(e.id in t)return t[e.id];try{let r=await Un(()=>import(e.module),__vite__mapDeps([]));return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cw(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function uw(e,t,r){let n=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let s=await lw(i,r);return s.links?s.links():[]}return[]}));return pw(n.flat(1).filter(cw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ud(e,t,r,n,o,i){let s=(l,c)=>r[c]?l.route.id!==r[c].route.id:!0,a=(l,c)=>{var u;return r[c].pathname!==l.pathname||((u=r[c].route.path)==null?void 0:u.endsWith("*"))&&r[c].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,c)=>s(l,c)||a(l,c)):i==="data"?t.filter((l,c)=>{var d;let u=n.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(s(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=r[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function dw(e,t,{includeHydrateFallback:r}={}){return fw(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function fw(e){return[...new Set(e)]}function hw(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function pw(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let i=JSON.stringify(hw(o));return r.has(i)||(r.add(i),n.push({key:i,link:o})),n},[])}function wm(){let e=w.useContext(Dn);return cu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function mw(){let e=w.useContext(Ms);return cu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var uu=w.createContext(void 0);uu.displayName="FrameworkContext";function xm(){let e=w.useContext(uu);return cu(e,"You must render this element inside a <HydratedRouter> element"),e}function gw(e,t){let r=w.useContext(uu),[n,o]=w.useState(!1),[i,s]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=t,h=w.useRef(null);w.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=m=>{m.forEach(g=>{s(g.isIntersecting)})},_=new IntersectionObserver(x,{threshold:.5});return h.current&&_.observe(h.current),()=>{_.disconnect()}}},[e]),w.useEffect(()=>{if(n){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[n]);let v=()=>{o(!0)},y=()=>{o(!1),s(!1)};return r?e!=="intent"?[i,h,{}]:[i,h,{onFocus:Zn(a,v),onBlur:Zn(l,y),onMouseEnter:Zn(c,v),onMouseLeave:Zn(u,y),onTouchStart:Zn(d,v)}]:[!1,h,{}]}function Zn(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function vw({page:e,...t}){let{router:r}=wm(),n=w.useMemo(()=>um(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?w.createElement(ww,{page:e,matches:n,...t}):null}function yw(e){let{manifest:t,routeModules:r}=xm(),[n,o]=w.useState([]);return w.useEffect(()=>{let i=!1;return uw(e,t,r).then(s=>{i||o(s)}),()=>{i=!0}},[e,t,r]),n}function ww({page:e,matches:t,...r}){let n=qt(),{manifest:o,routeModules:i}=xm(),{basename:s}=wm(),{loaderData:a,matches:l}=mw(),c=w.useMemo(()=>Ud(e,t,l,o,n,"data"),[e,t,l,o,n]),u=w.useMemo(()=>Ud(e,t,l,o,n,"assets"),[e,t,l,o,n]),d=w.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let y=new Set,x=!1;if(t.forEach(m=>{var p;let g=o.routes[m.route.id];!g||!g.hasLoader||(!c.some(k=>k.route.id===m.route.id)&&m.route.id in a&&((p=i[m.route.id])!=null&&p.shouldRevalidate)||g.hasClientLoader?x=!0:y.add(m.route.id))}),y.size===0)return[];let _=aw(e,s,"data");return x&&y.size>0&&_.searchParams.set("_routes",t.filter(m=>y.has(m.route.id)).map(m=>m.route.id).join(",")),[_.pathname+_.search]},[s,a,n,o,c,t,e,i]),h=w.useMemo(()=>dw(u,o),[u,o]),v=yw(u);return w.createElement(w.Fragment,null,d.map(y=>w.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...r})),h.map(y=>w.createElement("link",{key:y,rel:"modulepreload",href:y,...r})),v.map(({key:y,link:x})=>w.createElement("link",{key:y,nonce:r.nonce,...x})))}function xw(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{km&&(window.__reactRouterVersion="7.8.1")}catch{}function kw({basename:e,children:t,window:r}){let n=w.useRef();n.current==null&&(n.current=ly({window:r,v5Compat:!0}));let o=n.current,[i,s]=w.useState({action:o.action,location:o.location}),a=w.useCallback(l=>{w.startTransition(()=>s(l))},[s]);return w.useLayoutEffect(()=>o.listen(a),[o,a]),w.createElement(Yy,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_m=w.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d,...h},v){let{basename:y}=w.useContext(gt),x=typeof c=="string"&&bm.test(c),_,m=!1;if(typeof c=="string"&&x&&(_=c,km))try{let I=new URL(window.location.href),$=c.startsWith("//")?new URL(I.protocol+c):new URL(c),q=Mt($.pathname,y);$.origin===I.origin&&q!=null?c=q+$.search+$.hash:m=!0}catch{mt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=Ly(c,{relative:o}),[p,k,E]=gw(n,h),C=Ew(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:o,viewTransition:d});function S(I){t&&t(I),I.defaultPrevented||C(I)}let j=w.createElement("a",{...h,...E,href:_||g,onClick:m||i?t:S,ref:xw(v,k),target:l,"data-discover":!x&&r==="render"?"true":void 0});return p&&!x?w.createElement(w.Fragment,null,j,w.createElement(vw,{page:g})):j});_m.displayName="Link";var bw=w.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:i,to:s,viewTransition:a,children:l,...c},u){let d=Jo(s,{relative:c.relative}),h=qt(),v=w.useContext(Ms),{navigator:y,basename:x}=w.useContext(gt),_=v!=null&&$w(d)&&a===!0,m=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,g=h.pathname,p=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(g=g.toLowerCase(),p=p?p.toLowerCase():null,m=m.toLowerCase()),p&&x&&(p=Mt(p,x)||p);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let E=g===m||!o&&g.startsWith(m)&&g.charAt(k)==="/",C=p!=null&&(p===m||!o&&p.startsWith(m)&&p.charAt(m.length)==="/"),S={isActive:E,isPending:C,isTransitioning:_},j=E?t:void 0,I;typeof n=="function"?I=n(S):I=[n,E?"active":null,C?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let $=typeof i=="function"?i(S):i;return w.createElement(_m,{...c,"aria-current":j,className:I,ref:u,style:$,to:s,viewTransition:a},typeof l=="function"?l(S):l)});bw.displayName="NavLink";var _w=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:i,method:s=Fi,action:a,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:d,...h},v)=>{let y=jw(),x=Pw(a,{relative:c}),_=s.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&bm.test(a),g=p=>{if(l&&l(p),p.defaultPrevented)return;p.preventDefault();let k=p.nativeEvent.submitter,E=(k==null?void 0:k.getAttribute("formmethod"))||s;y(k||p.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:o,state:i,relative:c,preventScrollReset:u,viewTransition:d})};return w.createElement("form",{ref:v,method:_,action:x,onSubmit:n?l:g,...h,"data-discover":!m&&e==="render"?"true":void 0})});_w.displayName="Form";function Sw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sm(e){let t=w.useContext(Dn);return ne(t,Sw(e)),t}function Ew(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:i,viewTransition:s}={}){let a=Ko(),l=qt(),c=Jo(e,{relative:i});return w.useCallback(u=>{if(nw(u,t)){u.preventDefault();let d=r!==void 0?r:zo(l)===zo(c);a(e,{replace:d,state:n,preventScrollReset:o,relative:i,viewTransition:s})}},[l,a,c,r,n,t,e,o,i,s])}var Cw=0,Tw=()=>`__${String(++Cw)}__`;function jw(){let{router:e}=Sm("useSubmit"),{basename:t}=w.useContext(gt),r=Gy();return w.useCallback(async(n,o={})=>{let{action:i,method:s,encType:a,formData:l,body:c}=sw(n,t);if(o.navigate===!1){let u=o.fetcherKey||Tw();await e.fetch(u,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||s,formEncType:o.encType||a,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||s,formEncType:o.encType||a,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Pw(e,{relative:t}={}){let{basename:r}=w.useContext(gt),n=w.useContext(vt);ne(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),i={...Jo(e||".",{relative:t})},s=qt();if(e==null){i.search=s.search;let a=new URLSearchParams(i.search),l=a.getAll("index");if(l.some(u=>u==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let u=a.toString();i.search=u?`?${u}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:Nt([r,i.pathname])),zo(i)}function $w(e,{relative:t}={}){let r=w.useContext(pm);ne(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Sm("useViewTransitionState"),o=Jo(e,{relative:t});if(!r.isTransitioning)return!1;let i=Mt(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Mt(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ys(o.pathname,s)!=null||ys(o.pathname,i)!=null}var Ce=function(){return Ce=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Ce.apply(this,arguments)};function Do(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var ee="-ms-",vo="-moz-",K="-webkit-",Em="comm",qs="rule",du="decl",Rw="@import",Cm="@keyframes",Aw="@layer",Tm=Math.abs,fu=String.fromCharCode,Bl=Object.assign;function Iw(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function jm(e){return e.trim()}function $t(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,r){return e.replace(t,r)}function Bi(e,t,r){return e.indexOf(t,r)}function ve(e,t){return e.charCodeAt(t)|0}function jn(e,t,r){return e.slice(t,r)}function bt(e){return e.length}function Pm(e){return e.length}function io(e,t){return t.push(e),e}function Ow(e,t){return e.map(t).join("")}function zd(e,t){return e.filter(function(r){return!$t(r,t)})}var Ws=1,Pn=1,$m=0,nt=0,ue=0,Mn="";function Vs(e,t,r,n,o,i,s,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ws,column:Pn,length:s,return:"",siblings:a}}function Qt(e,t){return Bl(Vs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Gr(e){for(;e.root;)e=Qt(e.root,{children:[e]});io(e,e.siblings)}function Lw(){return ue}function Nw(){return ue=nt>0?ve(Mn,--nt):0,Pn--,ue===10&&(Pn=1,Ws--),ue}function ht(){return ue=nt<$m?ve(Mn,nt++):0,Pn++,ue===10&&(Pn=1,Ws++),ue}function Lr(){return ve(Mn,nt)}function qi(){return nt}function Hs(e,t){return jn(Mn,e,t)}function ql(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uw(e){return Ws=Pn=1,$m=bt(Mn=e),nt=0,[]}function zw(e){return Mn="",e}function $a(e){return jm(Hs(nt-1,Wl(e===91?e+2:e===40?e+1:e)))}function Dw(e){for(;(ue=Lr())&&ue<33;)ht();return ql(e)>2||ql(ue)>3?"":" "}function Fw(e,t){for(;--t&&ht()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Hs(e,qi()+(t<6&&Lr()==32&&ht()==32))}function Wl(e){for(;ht();)switch(ue){case e:return nt;case 34:case 39:e!==34&&e!==39&&Wl(ue);break;case 40:e===41&&Wl(e);break;case 92:ht();break}return nt}function Mw(e,t){for(;ht()&&e+ue!==57;)if(e+ue===84&&Lr()===47)break;return"/*"+Hs(t,nt-1)+"*"+fu(e===47?e:ht())}function Bw(e){for(;!ql(Lr());)ht();return Hs(e,nt)}function qw(e){return zw(Wi("",null,null,null,[""],e=Uw(e),0,[0],e))}function Wi(e,t,r,n,o,i,s,a,l){for(var c=0,u=0,d=s,h=0,v=0,y=0,x=1,_=1,m=1,g=0,p="",k=o,E=i,C=n,S=p;_;)switch(y=g,g=ht()){case 40:if(y!=108&&ve(S,d-1)==58){Bi(S+=D($a(g),"&","&\f"),"&\f",Tm(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=$a(g);break;case 9:case 10:case 13:case 32:S+=Dw(y);break;case 92:S+=Fw(qi()-1,7);continue;case 47:switch(Lr()){case 42:case 47:io(Ww(Mw(ht(),qi()),t,r,l),l);break;default:S+="/"}break;case 123*x:a[c++]=bt(S)*m;case 125*x:case 59:case 0:switch(g){case 0:case 125:_=0;case 59+u:m==-1&&(S=D(S,/\f/g,"")),v>0&&bt(S)-d&&io(v>32?Fd(S+";",n,r,d-1,l):Fd(D(S," ","")+";",n,r,d-2,l),l);break;case 59:S+=";";default:if(io(C=Dd(S,t,r,c,u,o,a,p,k=[],E=[],d,i),i),g===123)if(u===0)Wi(S,t,C,C,k,i,d,a,E);else switch(h===99&&ve(S,3)===110?100:h){case 100:case 108:case 109:case 115:Wi(e,C,C,n&&io(Dd(e,C,C,0,0,o,a,p,o,k=[],d,E),E),o,E,d,a,n?k:E);break;default:Wi(S,C,C,C,[""],E,0,a,E)}}c=u=v=0,x=m=1,p=S="",d=s;break;case 58:d=1+bt(S),v=y;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&Nw()==125)continue}switch(S+=fu(g),g*x){case 38:m=u>0?1:(S+="\f",-1);break;case 44:a[c++]=(bt(S)-1)*m,m=1;break;case 64:Lr()===45&&(S+=$a(ht())),h=Lr(),u=d=bt(p=S+=Bw(qi())),g++;break;case 45:y===45&&bt(S)==2&&(x=0)}}return i}function Dd(e,t,r,n,o,i,s,a,l,c,u,d){for(var h=o-1,v=o===0?i:[""],y=Pm(v),x=0,_=0,m=0;x<n;++x)for(var g=0,p=jn(e,h+1,h=Tm(_=s[x])),k=e;g<y;++g)(k=jm(_>0?v[g]+" "+p:D(p,/&\f/g,v[g])))&&(l[m++]=k);return Vs(e,t,r,o===0?qs:a,l,c,u,d)}function Ww(e,t,r,n){return Vs(e,t,r,Em,fu(Lw()),jn(e,2,-2),0,n)}function Fd(e,t,r,n,o){return Vs(e,t,r,du,jn(e,0,n),jn(e,n+1,-1),n,o)}function Rm(e,t,r){switch(Iw(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return vo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+vo+e+ee+e+e;case 5936:switch(ve(e,t+11)){case 114:return K+e+ee+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+ee+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+ee+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+ee+e+e;case 6165:return K+e+ee+"flex-"+e+e;case 5187:return K+e+D(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return K+e+ee+"flex-item-"+D(e,/flex-|-self/g,"")+($t(e,/flex-|baseline/)?"":ee+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return K+e+ee+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+ee+D(e,"shrink","negative")+e;case 5292:return K+e+ee+D(e,"basis","preferred-size")+e;case 6060:return K+"box-"+D(e,"-grow","")+K+e+ee+D(e,"grow","positive")+e;case 4554:return K+D(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!$t(e,/flex-|baseline/))return ee+"grid-column-align"+jn(e,t)+e;break;case 2592:case 3360:return ee+D(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,$t(n.props,/grid-\w+-end/)})?~Bi(e+(r=r[t].value),"span",0)?e:ee+D(e,"-start","")+e+ee+"grid-row-span:"+(~Bi(r,"span",0)?$t(r,/\d+/):+$t(r,/\d+/)-+$t(e,/\d+/))+";":ee+D(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return $t(n.props,/grid-\w+-start/)})?e:ee+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+vo+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bi(e,"stretch",0)?Rm(D(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,l,c){return ee+o+":"+i+c+(s?ee+o+"-span:"+(a?l:+l-+i)+c:"")+e});case 4949:if(ve(e,t+6)===121)return D(e,":",":"+K)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ve(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+ee+"$2box$3")+e;case 100:return D(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function ws(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Vw(e,t,r,n){switch(e.type){case Aw:if(e.children.length)break;case Rw:case du:return e.return=e.return||e.value;case Em:return"";case Cm:return e.return=e.value+"{"+ws(e.children,n)+"}";case qs:if(!bt(e.value=e.props.join(",")))return""}return bt(r=ws(e.children,n))?e.return=e.value+"{"+r+"}":""}function Hw(e){var t=Pm(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function Gw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kw(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case du:e.return=Rm(e.value,e.length,r);return;case Cm:return ws([Qt(e,{value:D(e.value,"@","@"+K)})],n);case qs:if(e.length)return Ow(r=e.props,function(o){switch($t(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gr(Qt(e,{props:[D(o,/:(read-\w+)/,":"+vo+"$1")]})),Gr(Qt(e,{props:[o]})),Bl(e,{props:zd(r,n)});break;case"::placeholder":Gr(Qt(e,{props:[D(o,/:(plac\w+)/,":"+K+"input-$1")]})),Gr(Qt(e,{props:[D(o,/:(plac\w+)/,":"+vo+"$1")]})),Gr(Qt(e,{props:[D(o,/:(plac\w+)/,ee+"input-$1")]})),Gr(Qt(e,{props:[o]})),Bl(e,{props:zd(r,n)});break}return""})}}var Jw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fe={},$n=typeof process<"u"&&Fe!==void 0&&(Fe.REACT_APP_SC_ATTR||Fe.SC_ATTR)||"data-styled",Am="active",Im="data-styled-version",Gs="6.1.19",hu=`/*!sc*/
`,xs=typeof window<"u"&&typeof document<"u",Qw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Fe!==void 0&&Fe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Fe.REACT_APP_SC_DISABLE_SPEEDY!==""?Fe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Fe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Fe!==void 0&&Fe.SC_DISABLE_SPEEDY!==void 0&&Fe.SC_DISABLE_SPEEDY!==""&&Fe.SC_DISABLE_SPEEDY!=="false"&&Fe.SC_DISABLE_SPEEDY),Yw={},Ks=Object.freeze([]),Rn=Object.freeze({});function Om(e,t,r){return r===void 0&&(r=Rn),e.theme!==r.theme&&e.theme||t||r.theme}var Lm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zw=/(^-|-$)/g;function Md(e){return e.replace(Xw,"-").replace(Zw,"")}var ex=/(a)(d)/gi,yi=52,Bd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vl(e){var t,r="";for(t=Math.abs(e);t>yi;t=t/yi|0)r=Bd(t%yi)+r;return(Bd(t%yi)+r).replace(ex,"$1-$2")}var Ra,Nm=5381,pn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Um=function(e){return pn(Nm,e)};function zm(e){return Vl(Um(e)>>>0)}function tx(e){return e.displayName||e.name||"Component"}function Aa(e){return typeof e=="string"&&!0}var Dm=typeof Symbol=="function"&&Symbol.for,Fm=Dm?Symbol.for("react.memo"):60115,rx=Dm?Symbol.for("react.forward_ref"):60112,nx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ox={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ix=((Ra={})[rx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ra[Fm]=Mm,Ra);function qd(e){return("type"in(t=e)&&t.type.$$typeof)===Fm?Mm:"$$typeof"in e?ix[e.$$typeof]:nx;var t}var sx=Object.defineProperty,ax=Object.getOwnPropertyNames,Wd=Object.getOwnPropertySymbols,lx=Object.getOwnPropertyDescriptor,cx=Object.getPrototypeOf,Vd=Object.prototype;function Bm(e,t,r){if(typeof t!="string"){if(Vd){var n=cx(t);n&&n!==Vd&&Bm(e,n,r)}var o=ax(t);Wd&&(o=o.concat(Wd(t)));for(var i=qd(e),s=qd(t),a=0;a<o.length;++a){var l=o[a];if(!(l in ox||r&&r[l]||s&&l in s||i&&l in i)){var c=lx(t,l);try{sx(e,l,c)}catch{}}}}return e}function An(e){return typeof e=="function"}function pu(e){return typeof e=="object"&&"styledComponentId"in e}function Ar(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hl(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Fo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gl(e,t,r){if(r===void 0&&(r=!1),!r&&!Fo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Gl(e[n],t[n]);else if(Fo(t))for(var n in t)e[n]=Gl(e[n],t[n]);return e}function mu(e,t){Object.defineProperty(e,"toString",{value:t})}function Qo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ux=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Qo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(hu);return r},e}(),Vi=new Map,ks=new Map,Hi=1,wi=function(e){if(Vi.has(e))return Vi.get(e);for(;ks.has(Hi);)Hi++;var t=Hi++;return Vi.set(e,t),ks.set(t,e),t},dx=function(e,t){Hi=t+1,Vi.set(e,t),ks.set(t,e)},fx="style[".concat($n,"][").concat(Im,'="').concat(Gs,'"]'),hx=new RegExp("^".concat($n,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),px=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},mx=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(hu),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var l=a.match(hx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(dx(u,c),px(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},Hd=function(e){for(var t=document.querySelectorAll(fx),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute($n)!==Am&&(mx(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function gx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qm=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat($n,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute($n,Am),n.setAttribute(Im,Gs);var s=gx();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},vx=function(){function e(t){this.element=qm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw Qo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),yx=function(){function e(t){this.element=qm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gd=xs,xx={isServer:!xs,useCSSOMInjection:!Qw},bs=function(){function e(t,r,n){t===void 0&&(t=Rn),r===void 0&&(r={});var o=this;this.options=Ce(Ce({},xx),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&xs&&Gd&&(Gd=!1,Hd(this)),mu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",c=function(d){var h=function(m){return ks.get(m)}(d);if(h===void 0)return"continue";var v=i.names.get(h),y=s.getGroup(d);if(v===void 0||!v.size||y.length===0)return"continue";var x="".concat($n,".g").concat(d,'[id="').concat(h,'"]'),_="";v!==void 0&&v.forEach(function(m){m.length>0&&(_+="".concat(m,","))}),l+="".concat(y).concat(x,'{content:"').concat(_,'"}').concat(hu)},u=0;u<a;u++)c(u);return l}(o)})}return e.registerId=function(t){return wi(t)},e.prototype.rehydrate=function(){!this.server&&xs&&Hd(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Ce(Ce({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new wx(o):n?new vx(o):new yx(o)}(this.options),new ux(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(wi(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(wi(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(wi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kx=/&/g,bx=/^\s*\/\/.*$/gm;function Wm(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Wm(r.children,t)),r})}function _x(e){var t,r,n,o=Rn,i=o.options,s=i===void 0?Rn:i,a=o.plugins,l=a===void 0?Ks:a,c=function(h,v,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):h},u=l.slice();u.push(function(h){h.type===qs&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(kx,r).replace(n,c))}),s.prefix&&u.push(Kw),u.push(Vw);var d=function(h,v,y,x){v===void 0&&(v=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var _=h.replace(bx,""),m=qw(y||v?"".concat(y," ").concat(v," { ").concat(_," }"):_);s.namespace&&(m=Wm(m,s.namespace));var g=[];return ws(m,Hw(u.concat(Gw(function(p){return g.push(p)})))),g};return d.hash=l.length?l.reduce(function(h,v){return v.name||Qo(15),pn(h,v.name)},Nm).toString():"",d}var Sx=new bs,Kl=_x(),Vm=St.createContext({shouldForwardProp:void 0,styleSheet:Sx,stylis:Kl});Vm.Consumer;St.createContext(void 0);function Jl(){return w.useContext(Vm)}var Ex=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Kl);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,mu(this,function(){throw Qo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kl),this.name+t.hash},e}(),Cx=function(e){return e>="A"&&e<="Z"};function Kd(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Cx(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Hm=function(e){return e==null||e===!1||e===""},Gm=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Hm(i)&&(Array.isArray(i)&&i.isCss||An(i)?n.push("".concat(Kd(o),":"),i,";"):Fo(i)?n.push.apply(n,Do(Do(["".concat(o," {")],Gm(i),!1),["}"],!1)):n.push("".concat(Kd(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Jw||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function hr(e,t,r,n){if(Hm(e))return[];if(pu(e))return[".".concat(e.styledComponentId)];if(An(e)){if(!An(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return hr(o,t,r,n)}var i;return e instanceof Ex?r?(e.inject(r,n),[e.getName(n)]):[e]:Fo(e)?Gm(e):Array.isArray(e)?Array.prototype.concat.apply(Ks,e.map(function(s){return hr(s,t,r,n)})):[e.toString()]}function Km(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(An(r)&&!pu(r))return!1}return!0}var Tx=Um(Gs),jx=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Km(t),this.componentId=r,this.baseHash=pn(Tx,r),this.baseStyle=n,bs.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Ar(o,this.staticRulesId);else{var i=Hl(hr(this.rules,t,r,n)),s=Vl(pn(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=Ar(o,s),this.staticRulesId=s}else{for(var l=pn(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var h=Hl(hr(d,t,r,n));l=pn(l,h+u),c+=h}}if(c){var v=Vl(l>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(c,".".concat(v),void 0,this.componentId)),o=Ar(o,v)}}return o},e}(),gu=St.createContext(void 0);gu.Consumer;var Ia={};function Px(e,t,r){var n=pu(e),o=e,i=!Aa(e),s=t.attrs,a=s===void 0?Ks:s,l=t.componentId,c=l===void 0?function(k,E){var C=typeof k!="string"?"sc":Md(k);Ia[C]=(Ia[C]||0)+1;var S="".concat(C,"-").concat(zm(Gs+C+Ia[C]));return E?"".concat(E,"-").concat(S):S}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(k){return Aa(k)?"styled.".concat(k):"Styled(".concat(tx(k),")")}(e):u,h=t.displayName&&t.componentId?"".concat(Md(t.displayName),"-").concat(t.componentId):t.componentId||c,v=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(n&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;y=function(k,E){return x(k,E)&&_(k,E)}}else y=x}var m=new jx(r,h,n?o.componentStyle:void 0);function g(k,E){return function(C,S,j){var I=C.attrs,$=C.componentStyle,q=C.defaultProps,F=C.foldedComponentIds,De=C.styledComponentId,Wt=C.target,xr=St.useContext(gu),yt=Jl(),Ge=C.shouldForwardProp||yt.shouldForwardProp,R=Om(S,xr,q)||Rn,O=function(U,G,ot){for(var kr,Tt=Ce(Ce({},G),{className:void 0,theme:ot}),Zo=0;Zo<U.length;Zo+=1){var z=An(kr=U[Zo])?kr(Tt):kr;for(var oe in z)Tt[oe]=oe==="className"?Ar(Tt[oe],z[oe]):oe==="style"?Ce(Ce({},Tt[oe]),z[oe]):z[oe]}return G.className&&(Tt.className=Ar(Tt.className,G.className)),Tt}(I,S,R),L=O.as||Wt,V={};for(var H in O)O[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&O.theme===R||(H==="forwardedAs"?V.as=O.forwardedAs:Ge&&!Ge(H,L)||(V[H]=O[H]));var Ke=function(U,G){var ot=Jl(),kr=U.generateAndInjectStyles(G,ot.styleSheet,ot.stylis);return kr}($,O),be=Ar(F,De);return Ke&&(be+=" "+Ke),O.className&&(be+=" "+O.className),V[Aa(L)&&!Lm.has(L)?"class":"className"]=be,j&&(V.ref=j),w.createElement(L,V)}(p,k,E)}g.displayName=d;var p=St.forwardRef(g);return p.attrs=v,p.componentStyle=m,p.displayName=d,p.shouldForwardProp=y,p.foldedComponentIds=n?Ar(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=n?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(E){for(var C=[],S=1;S<arguments.length;S++)C[S-1]=arguments[S];for(var j=0,I=C;j<I.length;j++)Gl(E,I[j],!0);return E}({},o.defaultProps,k):k}}),mu(p,function(){return".".concat(p.styledComponentId)}),i&&Bm(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Jd(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Qd=function(e){return Object.assign(e,{isCss:!0})};function Jm(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(An(e)||Fo(e))return Qd(hr(Jd(Ks,Do([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?hr(n):Qd(hr(Jd(n,t)))}function Ql(e,t,r){if(r===void 0&&(r=Rn),!t)throw Qo(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,Jm.apply(void 0,Do([o],i,!1)))};return n.attrs=function(o){return Ql(e,t,Ce(Ce({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Ql(e,t,Ce(Ce({},r),o))},n}var Qm=function(e){return Ql(Px,e)},b=Qm;Lm.forEach(function(e){b[e]=Qm(e)});var $x=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Km(t),bs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Hl(hr(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&bs.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Rx(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Jm.apply(void 0,Do([e],t,!1)),o="sc-global-".concat(zm(JSON.stringify(n))),i=new $x(n,o),s=function(l){var c=Jl(),u=St.useContext(gu),d=St.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(d,l,c.styleSheet,u,c.stylis),St.useLayoutEffect(function(){if(!c.styleSheet.server)return a(d,l,c.styleSheet,u,c.stylis),function(){return i.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,d,h){if(i.isStatic)i.renderStyles(l,Yw,u,h);else{var v=Ce(Ce({},c),{theme:Om(c,d,s.defaultProps)});i.renderStyles(l,v,u,h)}}return St.memo(s)}const Ax=Rx`
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
`,Ix=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Un(()=>Promise.resolve().then(()=>Bn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class vu extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class Ox extends vu{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class Yd extends vu{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class Xd extends vu{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Yl;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(Yl||(Yl={}));var Lx=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class Nx{constructor(t,{headers:r={},customFetch:n,region:o=Yl.Any}={}){this.url=t,this.headers=r,this.region=o,this.fetch=Ix(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return Lx(this,void 0,void 0,function*(){try{const{headers:o,method:i,body:s}=r;let a={},{region:l}=r;l||(l=this.region);const c=new URL(`${this.url}/${t}`);l&&l!=="any"&&(a["x-region"]=l,c.searchParams.set("forceFunctionRegion",l));let u;s&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",u=s):typeof s=="string"?(a["Content-Type"]="text/plain",u=s):typeof FormData<"u"&&s instanceof FormData?u=s:(a["Content-Type"]="application/json",u=JSON.stringify(s)));const d=yield this.fetch(c.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),o),body:u}).catch(x=>{throw new Ox(x)}),h=d.headers.get("x-relay-error");if(h&&h==="true")throw new Yd(d);if(!d.ok)throw new Xd(d);let v=((n=d.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),y;return v==="application/json"?y=yield d.json():v==="application/octet-stream"?y=yield d.blob():v==="text/event-stream"?y=d:v==="multipart/form-data"?y=yield d.formData():y=yield d.text(),{data:y,error:null,response:d}}catch(o){return{data:null,error:o,response:o instanceof Xd||o instanceof Yd?o.context:void 0}}})}}var Oe={},yu={},Js={},Yo={},Qs={},Ys={},Ux=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},In=Ux();const zx=In.fetch,Ym=In.fetch.bind(In),Xm=In.Headers,Dx=In.Request,Fx=In.Response,Bn=Object.freeze(Object.defineProperty({__proto__:null,Headers:Xm,Request:Dx,Response:Fx,default:Ym,fetch:zx},Symbol.toStringTag,{value:"Module"})),Mx=Og(Bn);var Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});let Bx=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};Xs.default=Bx;var Zm=et&&et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ys,"__esModule",{value:!0});const qx=Zm(Mx),Wx=Zm(Xs);let Vx=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=qx.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let o=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var s,a,l;let c=null,u=null,d=null,h=i.status,v=i.statusText;if(i.ok){if(this.method!=="HEAD"){const m=await i.text();m===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?u=m:u=JSON.parse(m))}const x=(s=this.headers.Prefer)===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),_=(a=i.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");x&&_&&_.length>1&&(d=parseInt(_[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(u)&&(u.length>1?(c={code:"PGRST116",details:`Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},u=null,d=null,h=406,v="Not Acceptable"):u.length===1?u=u[0]:u=null)}else{const x=await i.text();try{c=JSON.parse(x),Array.isArray(c)&&i.status===404&&(u=[],c=null,h=200,v="OK")}catch{i.status===404&&x===""?(h=204,v="No Content"):c={message:x}}if(c&&this.isMaybeSingle&&(!((l=c==null?void 0:c.details)===null||l===void 0)&&l.includes("0 rows"))&&(c=null,h=200,v="OK"),c&&this.shouldThrowOnError)throw new Wx.default(c)}return{error:c,data:u,count:d,status:h,statusText:v}});return this.shouldThrowOnError||(o=o.catch(i=>{var s,a,l;return{error:{message:`${(s=i==null?void 0:i.name)!==null&&s!==void 0?s:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),o.then(t,r)}returns(){return this}overrideTypes(){return this}};Ys.default=Vx;var Hx=et&&et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qs,"__esModule",{value:!0});const Gx=Hx(Ys);let Kx=class extends Gx.default{select(t){let r=!1;const n=(t??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:o,referencedTable:i=o}={}){const s=i?`${i}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const o=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(o,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:o=n}={}){const i=typeof o>"u"?"offset":`${o}.offset`,s=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(s,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:o=!1,wal:i=!1,format:s="text"}={}){var a;const l=[t?"analyze":null,r?"verbose":null,n?"settings":null,o?"buffers":null,i?"wal":null].filter(Boolean).join("|"),c=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${s}; for="${c}"; options=${l};`,s==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};Qs.default=Kx;var Jx=et&&et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yo,"__esModule",{value:!0});const Qx=Jx(Qs);let Yx=class extends Qx.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:o}={}){let i="";o==="plain"?i="pl":o==="phrase"?i="ph":o==="websearch"&&(i="w");const s=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${i}fts${s}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const o=n?`${n}.or`:"or";return this.url.searchParams.append(o,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};Yo.default=Yx;var Xx=et&&et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Js,"__esModule",{value:!0});const eo=Xx(Yo);let Zx=class{constructor(t,{headers:r={},schema:n,fetch:o}){this.url=t,this.headers=r,this.schema=n,this.fetch=o}select(t,{head:r=!1,count:n}={}){const o=r?"HEAD":"GET";let i=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!i?"":(a==='"'&&(i=!i),a)).join("");return this.url.searchParams.set("select",s),n&&(this.headers.Prefer=`count=${n}`),new eo.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const o="POST",i=[];if(this.headers.Prefer&&i.push(this.headers.Prefer),r&&i.push(`count=${r}`),n||i.push("missing=default"),this.headers.Prefer=i.join(","),Array.isArray(t)){const s=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(s.length>0){const a=[...new Set(s)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new eo.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:o,defaultToNull:i=!0}={}){const s="POST",a=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&a.push(this.headers.Prefer),o&&a.push(`count=${o}`),i||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((c,u)=>c.concat(Object.keys(u)),[]);if(l.length>0){const c=[...new Set(l)].map(u=>`"${u}"`);this.url.searchParams.set("columns",c.join(","))}}return new eo.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",o=[];return this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),this.headers.Prefer=o.join(","),new eo.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new eo.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};Js.default=Zx;var Zs={},ea={};Object.defineProperty(ea,"__esModule",{value:!0});ea.version=void 0;ea.version="0.0.0-automated";Object.defineProperty(Zs,"__esModule",{value:!0});Zs.DEFAULT_HEADERS=void 0;const e1=ea;Zs.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${e1.version}`};var eg=et&&et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});const t1=eg(Js),r1=eg(Yo),n1=Zs;let o1=class tg{constructor(t,{headers:r={},schema:n,fetch:o}={}){this.url=t,this.headers=Object.assign(Object.assign({},n1.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=o}from(t){const r=new URL(`${this.url}/${t}`);return new t1.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new tg(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:o=!1,count:i}={}){let s;const a=new URL(`${this.url}/rpc/${t}`);let l;n||o?(s=n?"HEAD":"GET",Object.entries(r).filter(([u,d])=>d!==void 0).map(([u,d])=>[u,Array.isArray(d)?`{${d.join(",")}}`:`${d}`]).forEach(([u,d])=>{a.searchParams.append(u,d)})):(s="POST",l=r);const c=Object.assign({},this.headers);return i&&(c.Prefer=`count=${i}`),new r1.default({method:s,url:a,headers:c,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};yu.default=o1;var qn=et&&et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.PostgrestError=Oe.PostgrestBuilder=Oe.PostgrestTransformBuilder=Oe.PostgrestFilterBuilder=Oe.PostgrestQueryBuilder=Oe.PostgrestClient=void 0;const rg=qn(yu);Oe.PostgrestClient=rg.default;const ng=qn(Js);Oe.PostgrestQueryBuilder=ng.default;const og=qn(Yo);Oe.PostgrestFilterBuilder=og.default;const ig=qn(Qs);Oe.PostgrestTransformBuilder=ig.default;const sg=qn(Ys);Oe.PostgrestBuilder=sg.default;const ag=qn(Xs);Oe.PostgrestError=ag.default;var i1=Oe.default={PostgrestClient:rg.default,PostgrestQueryBuilder:ng.default,PostgrestFilterBuilder:og.default,PostgrestTransformBuilder:ig.default,PostgrestBuilder:sg.default,PostgrestError:ag.default};const{PostgrestClient:s1,PostgrestQueryBuilder:KE,PostgrestFilterBuilder:JE,PostgrestTransformBuilder:QE,PostgrestBuilder:YE,PostgrestError:XE}=i1;class a1{static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"&&process.versions&&process.versions.node){const r=parseInt(process.versions.node.split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const l1="2.15.1",c1=`realtime-js/${l1}`,u1="1.0.0",Xl=1e4,d1=1e3,f1=100;var yo;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(yo||(yo={}));var fe;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(fe||(fe={}));var ct;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(ct||(ct={}));var Zl;(function(e){e.websocket="websocket"})(Zl||(Zl={}));var jr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(jr||(jr={}));class h1{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const o=r.getUint8(1),i=r.getUint8(2);let s=this.HEADER_LENGTH+2;const a=n.decode(t.slice(s,s+o));s=s+o;const l=n.decode(t.slice(s,s+i));s=s+i;const c=JSON.parse(n.decode(t.slice(s,t.byteLength)));return{ref:null,topic:a,event:l,payload:c}}}class lg{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Y;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Y||(Y={}));const Zd=(e,t,r={})=>{var n;const o=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((i,s)=>(i[s]=p1(s,e,t,o),i),{})},p1=(e,t,r,n)=>{const o=t.find(a=>a.name===e),i=o==null?void 0:o.type,s=r[e];return i&&!n.includes(i)?cg(i,s):ec(s)},cg=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return y1(t,r)}switch(e){case Y.bool:return m1(t);case Y.float4:case Y.float8:case Y.int2:case Y.int4:case Y.int8:case Y.numeric:case Y.oid:return g1(t);case Y.json:case Y.jsonb:return v1(t);case Y.timestamp:return w1(t);case Y.abstime:case Y.date:case Y.daterange:case Y.int4range:case Y.int8range:case Y.money:case Y.reltime:case Y.text:case Y.time:case Y.timestamptz:case Y.timetz:case Y.tsrange:case Y.tstzrange:return ec(t);default:return ec(t)}},ec=e=>e,m1=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},g1=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},v1=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},y1=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let i;const s=e.slice(1,r);try{i=JSON.parse("["+s+"]")}catch{i=s?s.split(","):[]}return i.map(a=>cg(t,a))}return e},w1=e=>typeof e=="string"?e.replace(" ","T"):e,ug=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"};class Oa{constructor(t,r,n={},o=Xl){this.channel=t,this.event=r,this.payload=n,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var ef;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(ef||(ef={}));class wo{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=wo.syncState(this.state,o,i,s),this.pendingDiffs.forEach(l=>{this.state=wo.syncDiff(this.state,l,i,s)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=wo.syncDiff(this.state,o,i,s),a())}),this.onJoin((o,i,s)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:i,newPresences:s})}),this.onLeave((o,i,s)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:i,leftPresences:s})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,o){const i=this.cloneDeep(t),s=this.transformState(r),a={},l={};return this.map(i,(c,u)=>{s[c]||(l[c]=u)}),this.map(s,(c,u)=>{const d=i[c];if(d){const h=u.map(_=>_.presence_ref),v=d.map(_=>_.presence_ref),y=u.filter(_=>v.indexOf(_.presence_ref)<0),x=d.filter(_=>h.indexOf(_.presence_ref)<0);y.length>0&&(a[c]=y),x.length>0&&(l[c]=x)}else a[c]=u}),this.syncDiff(i,{joins:a,leaves:l},n,o)}static syncDiff(t,r,n,o){const{joins:i,leaves:s}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),o||(o=()=>{}),this.map(i,(a,l)=>{var c;const u=(c=t[a])!==null&&c!==void 0?c:[];if(t[a]=this.cloneDeep(l),u.length>0){const d=t[a].map(v=>v.presence_ref),h=u.filter(v=>d.indexOf(v.presence_ref)<0);t[a].unshift(...h)}n(a,u,l)}),this.map(s,(a,l)=>{let c=t[a];if(!c)return;const u=l.map(d=>d.presence_ref);c=c.filter(d=>u.indexOf(d.presence_ref)<0),t[a]=c,o(a,c,l),c.length===0&&delete t[a]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const o=t[n];return"metas"in o?r[n]=o.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):r[n]=o,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var tf;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(tf||(tf={}));var xo;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(xo||(xo={}));var Rt;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(Rt||(Rt={}));class wu{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=fe.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new Oa(this,ct.join,this.params,this.timeout),this.rejoinTimer=new lg(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=fe.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=fe.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=fe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=fe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=fe.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ct.reply,{},(o,i)=>{this._trigger(this._replyEventName(i),o)}),this.presence=new wo(this),this.broadcastEndpointURL=ug(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,o;if(this.socket.isConnected()||this.socket.connect(),this.state==fe.closed){const{config:{broadcast:i,presence:s,private:a}}=this.params,l=(o=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(h=>h.filter))!==null&&o!==void 0?o:[],c=!!this.bindings[xo.PRESENCE]&&this.bindings[xo.PRESENCE].length>0,u={},d={broadcast:i,presence:Object.assign(Object.assign({},s),{enabled:c}),postgres_changes:l,private:a};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(h=>t==null?void 0:t(Rt.CHANNEL_ERROR,h)),this._onClose(()=>t==null?void 0:t(Rt.CLOSED)),this.updateJoinPayload(Object.assign({config:d},u)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:h})=>{var v;if(this.socket.setAuth(),h===void 0){t==null||t(Rt.SUBSCRIBED);return}else{const y=this.bindings.postgres_changes,x=(v=y==null?void 0:y.length)!==null&&v!==void 0?v:0,_=[];for(let m=0;m<x;m++){const g=y[m],{filter:{event:p,schema:k,table:E,filter:C}}=g,S=h&&h[m];if(S&&S.event===p&&S.schema===k&&S.table===E&&S.filter===C)_.push(Object.assign(Object.assign({},g),{id:S.id}));else{this.unsubscribe(),this.state=fe.errored,t==null||t(Rt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=_,t&&t(Rt.SUBSCRIBED);return}}).receive("error",h=>{this.state=fe.errored,t==null||t(Rt.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(h).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(Rt.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===fe.joined&&t===xo.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(t,r,n)}async send(t,r={}){var n,o;if(!this._canPush()&&t.type==="broadcast"){const{event:i,payload:s}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:s,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((o=c.body)===null||o===void 0?void 0:o.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var s,a,l;const c=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(s=this.params)===null||s===void 0?void 0:s.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),c.receive("ok",()=>i("ok")),c.receive("error",()=>i("error")),c.receive("timeout",()=>i("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=fe.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ct.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(o=>{n=new Oa(this,ct.leave,{},t),n.receive("ok",()=>{r(),o("ok")}).receive("timeout",()=>{r(),o("timed out")}).receive("error",()=>{o("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=fe.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const o=new AbortController,i=setTimeout(()=>o.abort(),n),s=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(i),s}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new Oa(this,t,r,n);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>f1){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var o,i;const s=t.toLocaleLowerCase(),{close:a,error:l,leave:c,join:u}=ct;if(n&&[a,l,c,u].indexOf(s)>=0&&n!==this._joinRef())return;let h=this._onMessage(s,r,n);if(r&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(v=>{var y,x,_;return((y=v.filter)===null||y===void 0?void 0:y.event)==="*"||((_=(x=v.filter)===null||x===void 0?void 0:x.event)===null||_===void 0?void 0:_.toLocaleLowerCase())===s}).map(v=>v.callback(h,n)):(i=this.bindings[s])===null||i===void 0||i.filter(v=>{var y,x,_,m,g,p;if(["broadcast","presence","postgres_changes"].includes(s))if("id"in v){const k=v.id,E=(y=v.filter)===null||y===void 0?void 0:y.event;return k&&((x=r.ids)===null||x===void 0?void 0:x.includes(k))&&(E==="*"||(E==null?void 0:E.toLocaleLowerCase())===((_=r.data)===null||_===void 0?void 0:_.type.toLocaleLowerCase()))}else{const k=(g=(m=v==null?void 0:v.filter)===null||m===void 0?void 0:m.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return k==="*"||k===((p=r==null?void 0:r.event)===null||p===void 0?void 0:p.toLocaleLowerCase())}else return v.type.toLocaleLowerCase()===s}).map(v=>{if(typeof h=="object"&&"ids"in h){const y=h.data,{schema:x,table:_,commit_timestamp:m,type:g,errors:p}=y;h=Object.assign(Object.assign({},{schema:x,table:_,commit_timestamp:m,eventType:g,new:{},old:{},errors:p}),this._getPayloadRecords(y))}v.callback(h,n)})}_isClosed(){return this.state===fe.closed}_isJoined(){return this.state===fe.joined}_isJoining(){return this.state===fe.joining}_isLeaving(){return this.state===fe.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const o=t.toLocaleLowerCase(),i={type:o,filter:r,callback:n};return this.bindings[o]?this.bindings[o].push(i):this.bindings[o]=[i],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(o=>{var i;return!(((i=o.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===n&&wu.isEqual(o.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(ct.close,{},t)}_onError(t){this._on(ct.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=fe.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=Zd(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=Zd(t.columns,t.old_record)),r}}const rf=()=>{},xi={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},x1=[1e3,2e3,5e3,1e4],k1=1e4,b1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class _1{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Xl,this.transport=null,this.heartbeatIntervalMs=xi.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=rf,this.ref=0,this.reconnectTimer=null,this.logger=rf,this.conn=null,this.sendBuffer=[],this.serializer=new h1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...s)=>Un(()=>Promise.resolve().then(()=>Bn),void 0).then(({default:a})=>a(...s)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):i=fetch,(...s)=>i(...s)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${Zl.websocket}`,this.httpEndpoint=ug(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=a1.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:u1}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},t?this.conn.close(t,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case yo.connecting:return jr.Connecting;case yo.open:return jr.Open;case yo.closing:return jr.Closing;default:return jr.Closed}}isConnected(){return this.connectionState()===jr.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,o=this.getChannels().find(i=>i.topic===n);if(o)return o;{const i=new wu(`realtime:${t}`,r,this);return this.channels.push(i),i}}push(t){const{topic:r,event:n,payload:o,ref:i}=t,s=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${i})`,o),this.isConnected()?s():this.sendBuffer.push(s)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(d1,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},xi.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{r.topic==="phoenix"&&r.event==="phx_reply"&&this.heartbeatCallback(r.payload.status==="ok"?"ok":"error"),r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:o,payload:i,ref:s}=r,a=s?`(${s})`:"",l=i.status||"";this.log("receive",`${l} ${n} ${o} ${a}`.trim(),i),this.channels.filter(c=>c._isMember(n)).forEach(c=>c._trigger(o,i,s)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(ct.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",o=new URLSearchParams(r);return`${t}${n}${o}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([b1],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r;t?r=t:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const o={access_token:r,version:c1};r&&n.updateJoinPayload(o),n.joinedOnce&&n._isJoined()&&n._push(ct.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new lg(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},xi.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,o,i,s,a,l,c;if(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:Xl,this.heartbeatIntervalMs=(o=t==null?void 0:t.heartbeatIntervalMs)!==null&&o!==void 0?o:xi.HEARTBEAT_INTERVAL,this.worker=(i=t==null?void 0:t.worker)!==null&&i!==void 0?i:!1,this.accessToken=(s=t==null?void 0:t.accessToken)!==null&&s!==void 0?s:null,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(a=t==null?void 0:t.reconnectAfterMs)!==null&&a!==void 0?a:u=>x1[u-1]||k1,this.encode=(l=t==null?void 0:t.encode)!==null&&l!==void 0?l:(u,d)=>d(JSON.stringify(u)),this.decode=(c=t==null?void 0:t.decode)!==null&&c!==void 0?c:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}class xu extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function he(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class S1 extends xu{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class tc extends xu{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var E1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const dg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Un(()=>Promise.resolve().then(()=>Bn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},C1=()=>E1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Un(()=>Promise.resolve().then(()=>Bn),void 0)).Response:Response}),rc=e=>{if(Array.isArray(e))return e.map(r=>rc(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const o=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));t[o]=rc(n)}),t},T1=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var qr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const La=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),j1=(e,t,r)=>qr(void 0,void 0,void 0,function*(){const n=yield C1();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(o=>{const i=e.status||500,s=(o==null?void 0:o.statusCode)||i+"";t(new S1(La(o),i,s))}).catch(o=>{t(new tc(La(o),o))}):t(new tc(La(e),e))}),P1=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?o:(T1(n)?(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),o.body=JSON.stringify(n)):o.body=n,t!=null&&t.duplex&&(o.duplex=t.duplex),Object.assign(Object.assign({},o),r))};function Xo(e,t,r,n,o,i){return qr(this,void 0,void 0,function*(){return new Promise((s,a)=>{e(r,P1(t,n,o,i)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>s(l)).catch(l=>j1(l,a,n))})})}function _s(e,t,r,n){return qr(this,void 0,void 0,function*(){return Xo(e,"GET",t,r,n)})}function kt(e,t,r,n,o){return qr(this,void 0,void 0,function*(){return Xo(e,"POST",t,n,o,r)})}function nc(e,t,r,n,o){return qr(this,void 0,void 0,function*(){return Xo(e,"PUT",t,n,o,r)})}function $1(e,t,r,n){return qr(this,void 0,void 0,function*(){return Xo(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function fg(e,t,r,n,o){return qr(this,void 0,void 0,function*(){return Xo(e,"DELETE",t,n,o,r)})}var je=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const R1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},nf={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class A1{constructor(t,r={},n,o){this.url=t,this.headers=r,this.bucketId=n,this.fetch=dg(o)}uploadOrUpdate(t,r,n,o){return je(this,void 0,void 0,function*(){try{let i;const s=Object.assign(Object.assign({},nf),o);let a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(s.upsert)});const l=s.metadata;typeof Blob<"u"&&n instanceof Blob?(i=new FormData,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",n)):typeof FormData<"u"&&n instanceof FormData?(i=n,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=n,a["cache-control"]=`max-age=${s.cacheControl}`,a["content-type"]=s.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(a=Object.assign(Object.assign({},a),o.headers));const c=this._removeEmptyFolders(r),u=this._getFinalPath(c),d=yield(t=="PUT"?nc:kt)(this.fetch,`${this.url}/object/${u}`,i,Object.assign({headers:a},s!=null&&s.duplex?{duplex:s.duplex}:{}));return{data:{path:c,id:d.Id,fullPath:d.Key},error:null}}catch(i){if(he(i))return{data:null,error:i};throw i}})}upload(t,r,n){return je(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,o){return je(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(t),s=this._getFinalPath(i),a=new URL(this.url+`/object/upload/sign/${s}`);a.searchParams.set("token",r);try{let l;const c=Object.assign({upsert:nf.upsert},o),u=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",c.cacheControl)):(l=n,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType);const d=yield nc(this.fetch,a.toString(),l,{headers:u});return{data:{path:i,fullPath:d.Key},error:null}}catch(l){if(he(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,r){return je(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const o=Object.assign({},this.headers);r!=null&&r.upsert&&(o["x-upsert"]="true");const i=yield kt(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:o}),s=new URL(this.url+i.url),a=s.searchParams.get("token");if(!a)throw new xu("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:a},error:null}}catch(n){if(he(n))return{data:null,error:n};throw n}})}update(t,r,n){return je(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return je(this,void 0,void 0,function*(){try{return{data:yield kt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(he(o))return{data:null,error:o};throw o}})}copy(t,r,n){return je(this,void 0,void 0,function*(){try{return{data:{path:(yield kt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(he(o))return{data:null,error:o};throw o}})}createSignedUrl(t,r,n){return je(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),i=yield kt(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${s}`)},{data:i,error:null}}catch(o){if(he(o))return{data:null,error:o};throw o}})}createSignedUrls(t,r,n){return je(this,void 0,void 0,function*(){try{const o=yield kt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),i=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:o.map(s=>Object.assign(Object.assign({},s),{signedUrl:s.signedURL?encodeURI(`${this.url}${s.signedURL}${i}`):null})),error:null}}catch(o){if(he(o))return{data:null,error:o};throw o}})}download(t,r){return je(this,void 0,void 0,function*(){const o=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),s=i?`?${i}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield _s(this.fetch,`${this.url}/${o}/${a}${s}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(he(a))return{data:null,error:a};throw a}})}info(t){return je(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield _s(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:rc(n),error:null}}catch(n){if(he(n))return{data:null,error:n};throw n}})}exists(t){return je(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield $1(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(he(n)&&n instanceof tc){const o=n.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),o=[],i=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";i!==""&&o.push(i);const a=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});l!==""&&o.push(l);let c=o.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${c}`)}}}remove(t){return je(this,void 0,void 0,function*(){try{return{data:yield fg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(he(r))return{data:null,error:r};throw r}})}list(t,r,n){return je(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},R1),r),{prefix:t||""});return{data:yield kt(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},n),error:null}}catch(o){if(he(o))return{data:null,error:o};throw o}})}listV2(t,r){return je(this,void 0,void 0,function*(){try{const n=Object.assign({},t);return{data:yield kt(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(he(n))return{data:null,error:n};throw n}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const I1="2.11.0",O1={"X-Client-Info":`storage-js/${I1}`};var Kr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class L1{constructor(t,r={},n,o){const i=new URL(t);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href,this.headers=Object.assign(Object.assign({},O1),r),this.fetch=dg(n)}listBuckets(){return Kr(this,void 0,void 0,function*(){try{return{data:yield _s(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(he(t))return{data:null,error:t};throw t}})}getBucket(t){return Kr(this,void 0,void 0,function*(){try{return{data:yield _s(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(he(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Kr(this,void 0,void 0,function*(){try{return{data:yield kt(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(he(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Kr(this,void 0,void 0,function*(){try{return{data:yield nc(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(he(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Kr(this,void 0,void 0,function*(){try{return{data:yield kt(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(he(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Kr(this,void 0,void 0,function*(){try{return{data:yield fg(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(he(r))return{data:null,error:r};throw r}})}}class N1 extends L1{constructor(t,r={},n,o){super(t,r,n,o)}from(t){return new A1(this.url,this.headers,t,this.fetch)}}const U1="2.55.0";let so="";typeof Deno<"u"?so="deno":typeof document<"u"?so="web":typeof navigator<"u"&&navigator.product==="ReactNative"?so="react-native":so="node";const z1={"X-Client-Info":`supabase-js-${so}/${U1}`},D1={headers:z1},F1={schema:"public"},M1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},B1={};var q1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const W1=e=>{let t;return e?t=e:typeof fetch>"u"?t=Ym:t=fetch,(...r)=>t(...r)},V1=()=>typeof Headers>"u"?Xm:Headers,H1=(e,t,r)=>{const n=W1(r),o=V1();return(i,s)=>q1(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let c=new o(s==null?void 0:s.headers);return c.has("apikey")||c.set("apikey",e),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(i,Object.assign(Object.assign({},s),{headers:c}))})};var G1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};function K1(e){return e.endsWith("/")?e:e+"/"}function J1(e,t){var r,n;const{db:o,auth:i,realtime:s,global:a}=e,{db:l,auth:c,realtime:u,global:d}=t,h={db:Object.assign(Object.assign({},l),o),auth:Object.assign(Object.assign({},c),i),realtime:Object.assign(Object.assign({},u),s),storage:{},global:Object.assign(Object.assign(Object.assign({},d),a),{headers:Object.assign(Object.assign({},(r=d==null?void 0:d.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>G1(this,void 0,void 0,function*(){return""})};return e.accessToken?h.accessToken=e.accessToken:delete h.accessToken,h}const hg="2.71.1",Zr=30*1e3,oc=3,Na=oc*Zr,Q1="http://localhost:9999",Y1="supabase.auth.token",X1={"X-Client-Info":`gotrue-js/${hg}`},ic="X-Supabase-Api-Version",pg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Z1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,ek=10*60*1e3;class ku extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function N(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class tk extends ku{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function rk(e){return N(e)&&e.name==="AuthApiError"}class mg extends ku{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class wr extends ku{constructor(t,r,n,o){super(t,n,o),this.name=r,this.status=n}}class Yt extends wr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function nk(e){return N(e)&&e.name==="AuthSessionMissingError"}class ki extends wr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class bi extends wr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class _i extends wr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function ok(e){return N(e)&&e.name==="AuthImplicitGrantRedirectError"}class of extends wr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class sc extends wr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function Ua(e){return N(e)&&e.name==="AuthRetryableFetchError"}class sf extends wr{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class ac extends wr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ss="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),af=` 	
\r=`.split(""),ik=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<af.length;t+=1)e[af[t].charCodeAt(0)]=-2;for(let t=0;t<Ss.length;t+=1)e[Ss[t].charCodeAt(0)]=t;return e})();function lf(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Ss[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Ss[n]),t.queuedBits-=6}}function gg(e,t,r){const n=ik[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function cf(e){const t=[],r=s=>{t.push(String.fromCodePoint(s))},n={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},i=s=>{lk(s,n,r)};for(let s=0;s<e.length;s+=1)gg(e.charCodeAt(s),o,i);return t.join("")}function sk(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function ak(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const o=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}sk(n,t)}}function lk(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function ck(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};for(let o=0;o<e.length;o+=1)gg(e.charCodeAt(o),r,n);return new Uint8Array(t)}function uk(e){const t=[];return ak(e,r=>t.push(r)),new Uint8Array(t)}function dk(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};return e.forEach(o=>lf(o,r,n)),lf(null,r,n),t.join("")}function fk(e){return Math.round(Date.now()/1e3)+e}function hk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const st=()=>typeof window<"u"&&typeof document<"u",br={tested:!1,writable:!1},vg=()=>{if(!st())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(br.tested)return br.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),br.tested=!0,br.writable=!0}catch{br.tested=!0,br.writable=!1}return br.writable};function pk(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,i)=>{t[i]=o})}catch{}return r.searchParams.forEach((n,o)=>{t[o]=n}),t}const yg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Un(()=>Promise.resolve().then(()=>Bn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},mk=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",en=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},_r=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Ht=async(e,t)=>{await e.removeItem(t)};class ta{constructor(){this.promise=new ta.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}ta.promiseConstructor=Promise;function za(e){const t=e.split(".");if(t.length!==3)throw new ac("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!Z1.test(t[n]))throw new ac("JWT not in base64url format");return{header:JSON.parse(cf(t[0])),payload:JSON.parse(cf(t[1])),signature:ck(t[2]),raw:{header:t[0],payload:t[1]}}}async function gk(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function vk(e,t){return new Promise((n,o)=>{(async()=>{for(let i=0;i<1/0;i++)try{const s=await e(i);if(!t(i,null,s)){n(s);return}}catch(s){if(!t(i,s)){o(s);return}}})()})}function yk(e){return("0"+e.toString(16)).substr(-2)}function wk(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let o="";for(let i=0;i<56;i++)o+=r.charAt(Math.floor(Math.random()*n));return o}return crypto.getRandomValues(t),Array.from(t,yk).join("")}async function xk(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(n);return Array.from(o).map(i=>String.fromCharCode(i)).join("")}async function kk(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await xk(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Jr(e,t,r=!1){const n=wk();let o=n;r&&(o+="/PASSWORD_RECOVERY"),await en(e,`${t}-code-verifier`,o);const i=await kk(n);return[i,n===i?"plain":"s256"]}const bk=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function _k(e){const t=e.headers.get(ic);if(!t||!t.match(bk))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function Sk(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function Ek(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Ck=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Qr(e){if(!Ck.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Da(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function uf(e){return JSON.parse(JSON.stringify(e))}var Tk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Tr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),jk=[502,503,504];async function df(e){var t;if(!mk(e))throw new sc(Tr(e),0);if(jk.includes(e.status))throw new sc(Tr(e),e.status);let r;try{r=await e.json()}catch(i){throw new mg(Tr(i),i)}let n;const o=_k(e);if(o&&o.getTime()>=pg["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new sf(Tr(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Yt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,s)=>i&&typeof s=="string",!0))throw new sf(Tr(r),e.status,r.weak_password.reasons);throw new tk(Tr(r),e.status||500,n)}const Pk=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(n),Object.assign(Object.assign({},o),r))};async function M(e,t,r,n){var o;const i=Object.assign({},n==null?void 0:n.headers);i[ic]||(i[ic]=pg["2024-01-01"].name),n!=null&&n.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const s=(o=n==null?void 0:n.query)!==null&&o!==void 0?o:{};n!=null&&n.redirectTo&&(s.redirect_to=n.redirectTo);const a=Object.keys(s).length?"?"+new URLSearchParams(s).toString():"",l=await $k(e,t,r+a,{headers:i,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function $k(e,t,r,n,o,i){const s=Pk(t,n,o,i);let a;try{a=await e(r,Object.assign({},s))}catch(l){throw console.error(l),new sc(Tr(l),0)}if(a.ok||await df(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await df(l)}}function jt(e){var t;let r=null;Ok(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=fk(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function ff(e){const t=jt(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function rr(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function Rk(e){return{data:e,error:null}}function Ak(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i}=e,s=Tk(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i},l=Object.assign({},s);return{data:{properties:a,user:l},error:null}}function Ik(e){return e}function Ok(e){return e.access_token&&e.refresh_token&&e.expires_in}const Fa=["global","local","others"];var Lk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};class Nk{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=yg(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=Fa[0]){if(Fa.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Fa.join(", ")}`);try{return await M(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(N(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await M(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:rr})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=Lk(t,["options"]),o=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(o.new_email=n==null?void 0:n.newEmail,delete o.newEmail),await M(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:Ak,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(N(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await M(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:rr})}catch(r){if(N(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,o,i,s,a,l;try{const c={nextPage:null,lastPage:0,total:0},u=await M(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&i!==void 0?i:""},xform:Ik});if(u.error)throw u.error;const d=await u.json(),h=(s=u.headers.get("x-total-count"))!==null&&s!==void 0?s:0,v=(l=(a=u.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return v.length>0&&(v.forEach(y=>{const x=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),_=JSON.parse(y.split(";")[1].split("=")[1]);c[`${_}Page`]=x}),c.total=parseInt(h)),{data:Object.assign(Object.assign({},d),c),error:null}}catch(c){if(N(c))return{data:{users:[]},error:c};throw c}}async getUserById(t){Qr(t);try{return await M(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:rr})}catch(r){if(N(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){Qr(t);try{return await M(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:rr})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){Qr(t);try{return await M(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:rr})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){Qr(t.userId);try{const{data:r,error:n}=await M(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:n}}catch(r){if(N(r))return{data:null,error:r};throw r}}async _deleteFactor(t){Qr(t.userId),Qr(t.id);try{return{data:await M(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(N(r))return{data:null,error:r};throw r}}}function hf(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function Uk(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Yr={debug:!!(globalThis&&vg()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class wg extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class zk extends wg{}async function Dk(e,t,r){Yr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),Yr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async o=>{if(o){Yr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,o.name);try{return await r()}finally{Yr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,o.name)}}else{if(t===0)throw Yr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new zk(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Yr.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}Uk();const Fk={url:Q1,storageKey:Y1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:X1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function pf(e,t,r){return await r()}const Xr={};class Mo{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Mo.nextInstanceID,Mo.nextInstanceID+=1,this.instanceID>0&&st()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},Fk),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new Nk({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=yg(o.fetch),this.lock=o.lock||pf,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:st()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=Dk:this.lock=pf,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:vg()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=hf(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=hf(this.memoryStorage)),st()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=Xr[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){Xr[this.storageKey]=Object.assign(Object.assign({},Xr[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=Xr[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){Xr[this.storageKey]=Object.assign(Object.assign({},Xr[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${hg}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=pk(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),st()&&this.detectSessionInUrl&&n!=="none"){const{data:o,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),ok(i)){const l=(t=i.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:s,redirectType:a}=o;return this._debug("#_initialize()","detected session in URL",s,"redirect type",a),await this._saveSession(s),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return N(r)?{error:r}:{error:new mg("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,o;try{const i=await M(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:jt}),{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if(N(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(t){var r,n,o;try{let i;if("email"in t){const{email:u,password:d,options:h}=t;let v=null,y=null;this.flowType==="pkce"&&([v,y]=await Jr(this.storage,this.storageKey)),i=await M(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:u,password:d,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:v,code_challenge_method:y},xform:jt})}else if("phone"in t){const{phone:u,password:d,options:h}=t;i=await M(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:d,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},channel:(o=h==null?void 0:h.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:jt})}else throw new bi("You must provide either an email or phone number and a password");const{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if(N(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(t){try{let r;if("email"in t){const{email:i,password:s,options:a}=t;r=await M(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ff})}else if("phone"in t){const{phone:i,password:s,options:a}=t;r=await M(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ff})}else throw new bi("You must provide either an email or phone number and a password");const{data:n,error:o}=r;return o?{data:{user:null,session:null},error:o}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new ki}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:o})}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,o,i;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(i=t.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,o,i,s,a,l,c,u,d,h,v;let y,x;if("message"in t)y=t.message,x=t.signature;else{const{chain:_,wallet:m,statement:g,options:p}=t;let k;if(st())if(typeof m=="object")k=m;else{const C=window;if("solana"in C&&typeof C.solana=="object"&&("signIn"in C.solana&&typeof C.solana.signIn=="function"||"signMessage"in C.solana&&typeof C.solana.signMessage=="function"))k=C.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(p!=null&&p.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=m}const E=new URL((r=p==null?void 0:p.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in k&&k.signIn){const C=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},p==null?void 0:p.signInWithSolana),{version:"1",domain:E.host,uri:E.href}),g?{statement:g}:null));let S;if(Array.isArray(C)&&C[0]&&typeof C[0]=="object")S=C[0];else if(C&&typeof C=="object"&&"signedMessage"in C&&"signature"in C)S=C;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in S&&"signature"in S&&(typeof S.signedMessage=="string"||S.signedMessage instanceof Uint8Array)&&S.signature instanceof Uint8Array)y=typeof S.signedMessage=="string"?S.signedMessage:new TextDecoder().decode(S.signedMessage),x=S.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${E.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),...g?["",g,""]:[""],"Version: 1",`URI: ${E.href}`,`Issued At: ${(o=(n=p==null?void 0:p.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((i=p==null?void 0:p.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${p.signInWithSolana.notBefore}`]:[],...!((s=p==null?void 0:p.signInWithSolana)===null||s===void 0)&&s.expirationTime?[`Expiration Time: ${p.signInWithSolana.expirationTime}`]:[],...!((a=p==null?void 0:p.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${p.signInWithSolana.chainId}`]:[],...!((l=p==null?void 0:p.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${p.signInWithSolana.nonce}`]:[],...!((c=p==null?void 0:p.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${p.signInWithSolana.requestId}`]:[],...!((d=(u=p==null?void 0:p.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||d===void 0)&&d.length?["Resources",...p.signInWithSolana.resources.map(S=>`- ${S}`)]:[]].join(`
`);const C=await k.signMessage(new TextEncoder().encode(y),"utf8");if(!C||!(C instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");x=C}}try{const{data:_,error:m}=await M(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:dk(x)},!((h=t.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(v=t.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:jt});if(m)throw m;return!_||!_.session||!_.user?{data:{user:null,session:null},error:new ki}:(_.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),{data:Object.assign({},_),error:m})}catch(_){if(N(_))return{data:{user:null,session:null},error:_};throw _}}async _exchangeCodeForSession(t){const r=await _r(this.storage,`${this.storageKey}-code-verifier`),[n,o]=(r??"").split("/");try{const{data:i,error:s}=await M(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:jt});if(await Ht(this.storage,`${this.storageKey}-code-verifier`),s)throw s;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new ki}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:o??null}),error:s})}catch(i){if(N(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(t){try{const{options:r,provider:n,token:o,access_token:i,nonce:s}=t,a=await M(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:o,access_token:i,nonce:s,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:jt}),{data:l,error:c}=a;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new ki}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,o,i,s;try{if("email"in t){const{email:a,options:l}=t;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await Jr(this.storage,this.storageKey));const{error:d}=await M(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in t){const{phone:a,options:l}=t,{data:c,error:u}=await M(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(s=l==null?void 0:l.channel)!==null&&s!==void 0?s:"sms"}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:u}}throw new bi("You must provide either an email or phone number.")}catch(a){if(N(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var r,n;try{let o,i;"options"in t&&(o=(r=t.options)===null||r===void 0?void 0:r.redirectTo,i=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:s,error:a}=await M(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:i}}),redirectTo:o,xform:jt});if(a)throw a;if(!s)throw new Error("An error occurred on token verification.");const l=s.session,c=s.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(o){if(N(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var r,n,o;try{let i=null,s=null;return this.flowType==="pkce"&&([i,s]=await Jr(this.storage,this.storageKey)),await M(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:s}),headers:this.headers,xform:Rk})}catch(i){if(N(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Yt;const{error:o}=await M(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(N(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:o,options:i}=t,{error:s}=await M(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:s}}else if("phone"in t){const{phone:n,type:o,options:i}=t,{data:s,error:a}=await M(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:s==null?void 0:s.message_id},error:a}}throw new bi("You must provide either an email or phone number and a type")}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await _r(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<Na:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const s=await _r(this.userStorage,this.storageKey+"-user");s!=null&&s.user?t.user=s.user:t.user=Da()}if(this.storage.isServer&&t.user){let s=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,c,u)=>(!s&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),s=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,u))})}return{data:{session:t},error:null}}const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{session:null},error:i}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await M(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:rr}):await this._useSession(async r=>{var n,o,i;const{data:s,error:a}=r;if(a)throw a;return!(!((n=s.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Yt}:await M(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(o=s.session)===null||o===void 0?void 0:o.access_token)!==null&&i!==void 0?i:void 0,xform:rr})})}catch(r){if(N(r))return nk(r)&&(await this._removeSession(),await Ht(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:o,error:i}=n;if(i)throw i;if(!o.session)throw new Yt;const s=o.session;let a=null,l=null;this.flowType==="pkce"&&t.email!=null&&([a,l]=await Jr(this.storage,this.storageKey));const{data:c,error:u}=await M(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:s.access_token,xform:rr});if(u)throw u;return s.user=c.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),{data:{user:s.user},error:null}})}catch(n){if(N(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Yt;const r=Date.now()/1e3;let n=r,o=!0,i=null;const{payload:s}=za(t.access_token);if(s.exp&&(n=s.exp,o=n<=r),o){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};i=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;i={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(r){if(N(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:s,error:a}=r;if(a)throw a;t=(n=s.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Yt;const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{user:null,session:null},error:i}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(N(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!st())throw new _i("No browser detected.");if(t.error||t.error_description||t.error_code)throw new _i(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new of("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new _i("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new of("No code detected.");const{data:g,error:p}=await this._exchangeCodeForSession(t.code);if(p)throw p;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:g.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:o,access_token:i,refresh_token:s,expires_in:a,expires_at:l,token_type:c}=t;if(!i||!a||!s||!c)throw new _i("No session defined in URL");const u=Math.round(Date.now()/1e3),d=parseInt(a);let h=u+d;l&&(h=parseInt(l));const v=h-u;v*1e3<=Zr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${d}s`);const y=h-d;u-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,h,u):u-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",y,h,u);const{data:x,error:_}=await this._getUser(i);if(_)throw _;const m={provider_token:n,provider_refresh_token:o,access_token:i,expires_in:d,expires_at:h,refresh_token:s,token_type:c,user:x.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:m,redirectType:t.type},error:null}}catch(n){if(N(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await _r(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{error:i};const s=(n=o.session)===null||n===void 0?void 0:n.access_token;if(s){const{error:a}=await this.admin.signOut(s,t);if(a&&!(rk(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Ht(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=hk(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,o;try{const{data:{session:i},error:s}=r;if(s)throw s;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",t,"session",i)}catch(i){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",i),console.error(i)}})}async resetPasswordForEmail(t,r={}){let n=null,o=null;this.flowType==="pkce"&&([n,o]=await Jr(this.storage,this.storageKey,!0));try{return await M(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(N(i))return{data:null,error:i};throw i}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(N(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:o}=await this._useSession(async i=>{var s,a,l,c,u;const{data:d,error:h}=i;if(h)throw h;const v=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(s=t.options)===null||s===void 0?void 0:s.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await M(this.fetch,"GET",v,{headers:this.headers,jwt:(u=(c=d.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(o)throw o;return st()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(N(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)throw s;return await M(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(N(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await vk(async o=>(o>0&&await gk(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await M(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:jt})),(o,i)=>{const s=200*Math.pow(2,o);return i&&Ua(i)&&Date.now()+s-n<Zr})}catch(n){if(this._debug(r,"error",n),N(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),st()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const o=await _r(this.storage,this.storageKey);if(o&&this.userStorage){let s=await _r(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!s&&(s={user:o.user},await en(this.userStorage,this.storageKey+"-user",s)),o.user=(t=s==null?void 0:s.user)!==null&&t!==void 0?t:Da()}else if(o&&!o.user&&!o.user){const s=await _r(this.storage,this.storageKey+"-user");s&&(s!=null&&s.user)?(o.user=s.user,await Ht(this.storage,this.storageKey+"-user"),await en(this.storage,this.storageKey,o)):o.user=Da()}if(this._debug(n,"session from storage",o),!this._isValidSession(o)){this._debug(n,"session is not valid"),o!==null&&await this._removeSession();return}const i=((r=o.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Na;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${Na}s`),i){if(this.autoRefreshToken&&o.refresh_token){const{error:s}=await this._callRefreshToken(o.refresh_token);s&&(console.error(s),Ua(s)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",s),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:s,error:a}=await this._getUser(o.access_token);!a&&(s!=null&&s.user)?(o.user=s.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(s){console.error("Error getting user data:",s),this._debug(n,"error getting user data, skipping SIGNED_IN notification",s)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(n,"error",o),console.error(o);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Yt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new ta;const{data:i,error:s}=await this._refreshAccessToken(t);if(s)throw s;if(!i.session)throw new Yt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const a={session:i.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(i){if(this._debug(o,"error",i),N(i)){const s={session:null,error:i};return Ua(i)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(s),s}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,r,n=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const i=[],s=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,r)}catch(l){i.push(l)}});if(await Promise.all(s),i.length>0){for(let a=0;a<i.length;a+=1)console.error(i[a]);throw i[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await en(this.userStorage,this.storageKey+"-user",{user:r.user});const o=Object.assign({},r);delete o.user;const i=uf(o);await en(this.storage,this.storageKey,i)}else{const o=uf(r);await en(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await Ht(this.storage,this.storageKey),await Ht(this.storage,this.storageKey+"-code-verifier"),await Ht(this.storage,this.storageKey+"-user"),this.userStorage&&await Ht(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&st()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Zr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((n.expires_at*1e3-t)/Zr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Zr}ms, refresh threshold is ${oc} ticks`),o<=oc&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof wg)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!st()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const o=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&o.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&o.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,s]=await Jr(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(s)}`});o.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);o.push(i.toString())}return n!=null&&n.skipBrowserRedirect&&o.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await M(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(N(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)return{data:null,error:s};const a=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:c}=await M(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return c?{data:null,error:c}:(t.factorType==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(r){if(N(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{data:null,error:i};const{data:s,error:a}=await M(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:a})})}catch(r){if(N(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await M(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(N(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],o=n.filter(s=>s.factor_type==="totp"&&s.status==="verified"),i=n.filter(s=>s.factor_type==="phone"&&s.status==="verified");return{data:{all:n,totp:o,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:o},error:i}=t;if(i)return{data:null,error:i};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=za(o.access_token);let a=null;s.aal&&(a=s.aal);let l=a;((n=(r=o.user.factors)===null||r===void 0?void 0:r.filter(d=>d.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const u=s.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:u},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(a=>a.kid===t);if(n)return n;const o=Date.now();if(n=this.jwks.keys.find(a=>a.kid===t),n&&this.jwks_cached_at+ek>o)return n;const{data:i,error:s}=await M(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(s)throw s;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=o,n=i.keys.find(a=>a.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:v,error:y}=await this.getSession();if(y||!v.session)return{data:null,error:y};n=v.session.access_token}const{header:o,payload:i,signature:s,raw:{header:a,payload:l}}=za(n);r!=null&&r.allowExpired||Sk(i.exp);const c=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!c){const{error:v}=await this.getUser(n);if(v)throw v;return{data:{claims:i,header:o,signature:s},error:null}}const u=Ek(o.alg),d=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,d,s,uk(`${a}.${l}`)))throw new ac("Invalid JWT signature");return{data:{claims:i,header:o,signature:s},error:null}}catch(n){if(N(n))return{data:null,error:n};throw n}}}Mo.nextInstanceID=0;const Mk=Mo;class Bk extends Mk{constructor(t){super(t)}}var qk=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class Wk{constructor(t,r,n){var o,i,s;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const a=K1(t),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const c=`sb-${l.hostname.split(".")[0]}-auth-token`,u={db:F1,realtime:B1,auth:Object.assign(Object.assign({},M1),{storageKey:c}),global:D1},d=J1(n??{},u);this.storageKey=(o=d.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(i=d.global.headers)!==null&&i!==void 0?i:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(h,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((s=d.auth)!==null&&s!==void 0?s:{},this.headers,d.global.fetch),this.fetch=H1(r,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},d.realtime)),this.rest=new s1(new URL("rest/v1",l).href,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),this.storage=new N1(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),d.accessToken||this._listenForAuthEvents()}get functions(){return new Nx(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return qk(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,storageKey:i,flowType:s,lock:a,debug:l},c,u){const d={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Bk({url:this.authUrl.href,headers:Object.assign(Object.assign({},d),c),storageKey:i,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,flowType:s,lock:a,debug:l,fetch:u,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new _1(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const Vk=(e,t,r)=>new Wk(e,t,r);function Hk(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}Hk()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const P=Vk("https://mdmknxkztpimoedhdjci.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A"),xg=w.createContext(),Gk=({children:e})=>{const[t,r]=w.useState(!0),[n,o]=w.useState(!1),[i,s]=w.useState(null),[a,l]=w.useState(null),[c,u]=w.useState(null),d=async(p,k)=>{u(null);try{o(!0);const{data:E,error:C}=await P.from("usuarios").select("idUsuario, nombre, usuario, correo, idRol").eq("usuario",p).eq("contraseña",k).single();if(C)throw C.code==="PGRST116"?new Error("Usuario o contraseña incorrectos"):new Error(`Error de base de datos: ${C.message}`);if(!E)throw new Error("Usuario o contraseña incorrectos");const S={id:E.idUsuario,idUsuario:E.idUsuario,nombre:E.nombre,usuario:E.usuario,correo:E.correo,idRol:E.idRol,rol:"Administrador",type:"admin"};return s(S),l(null),localStorage.setItem("user",JSON.stringify(S)),localStorage.removeItem("employeeData"),{success:!0,user:S}}catch(E){return u(E.message),{success:!1,error:E.message}}finally{o(!1)}},h=w.useCallback(p=>{const k={id:p.idEmpleado,idEmpleado:p.idEmpleado,codigoEmpleado:p.codigoEmpleado,empleado:p.empleado,idPlanta:p.idPlanta,planta:p.planta,idEsquemaPago:p.idEsquemaPago||null,type:"employee"};return l(k),s(null),localStorage.setItem("employeeData",JSON.stringify(k)),localStorage.removeItem("user"),{success:!0,employee:k}},[]),v=w.useCallback(()=>{s(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("employeeData")},[]),y=w.useCallback(async p=>{try{o(!0);const k={id:p.idUsuario,idUsuario:p.idUsuario,nombre:p.nombre,usuario:p.usuario||p.correo,correo:p.correo,idRol:p.idRol,rol:"Administrador",type:"admin"};return s(k),l(null),localStorage.setItem("user",JSON.stringify(k)),localStorage.removeItem("employeeData"),{success:!0,user:k}}catch(k){throw console.error("Error en auto-login:",k),u("Error en autenticación automática"),k}finally{o(!1)}},[]),x=()=>{try{const p=localStorage.getItem("user"),k=localStorage.getItem("employeeData");if(p){const E=JSON.parse(p);return s(E),l(null),E}if(k){const E=JSON.parse(k);return l(E),s(null),E}}catch(p){console.error("Error al obtener usuario guardado:",p),localStorage.removeItem("user"),localStorage.removeItem("employeeData")}return null},_=w.useCallback(p=>{if(a){const k={...a,...p};return l(k),localStorage.setItem("employeeData",JSON.stringify(k)),k}return null},[a]),m=w.useCallback(()=>{u(null)},[]);w.useEffect(()=>{x(),r(!1)},[]);const g={user:i,employeeData:a,loading:n,initializing:t,authError:c,adminLogin:d,adminAutoLogin:y,employeeLogin:h,logout:v,getCurrentUser:x,updateEmployeeData:_,clearAuthError:m};return f.jsx(xg.Provider,{value:g,children:e})},Wn=()=>{const e=w.useContext(xg);if(!e)throw new Error("useAppAuth debe usarse dentro de AuthProvider");return e},J={container:`
    font-family: Arial, sans-serif; 
    line-height: 1.6; 
    color: #333; 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px;
  `,header:`
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
    color: white; 
    padding: 30px; 
    border-radius: 10px 10px 0 0; 
    text-align: center;
  `,title:"margin: 0; font-size: 28px;",subtitle:"margin: 10px 0 0 0; opacity: 0.9;",content:`
    background: #f8fafc; 
    padding: 30px; 
    border-radius: 0 0 10px 10px; 
    border: 1px solid #e2e8f0;
  `,card:`
    background: white; 
    padding: 25px; 
    border-radius: 8px; 
    margin-bottom: 25px; 
    border-left: 4px solid #2563eb;
  `,greeting:"color: #1e40af; margin-top: 0;",infoSection:`
    background: #f1f5f9; 
    padding: 20px; 
    border-radius: 6px; 
    margin: 20px 0;
  `,infoTable:"width: 100%; border-collapse: collapse;",infoLabel:`
    padding: 8px 0; 
    font-weight: bold; 
    color: #374151; 
    width: 120px;
  `,infoValue:"padding: 8px 0; color: #1f2937;",descriptionSection:`
    background: #fef3c7; 
    border: 1px solid #f59e0b; 
    padding: 15px; 
    border-radius: 6px; 
    margin: 20px 0;
  `,descriptionTitle:"margin: 0; font-weight: bold; color: #92400e;",descriptionText:`
    margin: 10px 0 0 0; 
    color: #92400e; 
    font-style: italic;
  `,buttonSection:"text-align: center; margin: 30px 0;",button:`
    display: inline-block; 
    background: #2563eb; 
    color: white; 
    padding: 15px 30px; 
    text-decoration: none; 
    border-radius: 8px; 
    font-weight: bold; 
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(37, 99, 235, 0.25);
  `,noteSection:`
    background: #e0f2fe; 
    padding: 15px; 
    border-radius: 6px; 
    border-left: 4px solid #0284c7;
  `,noteText:`
    margin: 0; 
    font-size: 14px; 
    color: #0c4a6e;
  `,footer:`
    text-align: center; 
    color: #64748b; 
    font-size: 12px; 
    margin-top: 30px; 
    padding-top: 30px; 
    border-top: 1px solid #e2e8f0;
  `},mf={nuevo:{title:"Nuevo Ticket Asignado",action:"asignado",actionText:"Se te ha asignado un nuevo ticket para atención:"},delegado:{title:"Ticket Delegado",action:"delegado",actionText:"Se te ha delegado un ticket para atención:"},reasignado:{title:"Ticket Reasignado",action:"reasignado",actionText:"Se te ha reasignado un ticket para atención:"}},bu=({ticket:e,usuario:t,directLink:r,fechaCreacion:n="Fecha no disponible",tipo:o="nuevo"})=>{var s,a,l,c,u;const i=mf[o]||mf.nuevo;return`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${i.title}</title>
    </head>
    <body style="${J.container}">
      
      <div style="${J.header}">
        <h1 style="${J.title}">${i.title}</h1>
        <p style="${J.subtitle}">Sistema de Atención EZI</p>
      </div>

      <div style="${J.content}">
        
        <div style="${J.card}">
          <h2 style="${J.greeting}">Hola ${t.nombre},</h2>
          <p style="font-size: 16px; margin-bottom: 20px;">
            ${i.actionText}
          </p>

          <div style="${J.infoSection}">
            <table style="${J.infoTable}">
              <tr>
                <td style="${J.infoLabel}">Ticket:</td>
                <td style="${J.infoValue}">#${e.idTicket}</td>
              </tr>
              <tr>
                <td style="${J.infoLabel}">Empleado:</td>
                <td style="${J.infoValue}">${((s=e.empleados)==null?void 0:s.nombre)||"No especificado"}</td>
              </tr>
              <tr>
                <td style="${J.infoLabel}">Planta:</td>
                <td style="${J.infoValue}">${((l=(a=e.empleados)==null?void 0:a.plantas)==null?void 0:l.planta)||"No especificada"}</td>
              </tr>
              <tr>
                <td style="${J.infoLabel}">Tipo:</td>
                <td style="${J.infoValue}">${((c=e.tiposSolicitud)==null?void 0:c.tipoSolicitud)||"No especificado"}</td>
              </tr>
              <tr>
                <td style="${J.infoLabel}">Prioridad:</td>
                <td style="${J.infoValue}">${((u=e.prioridades)==null?void 0:u.prioridad)||"Normal"}</td>
              </tr>
              <tr>
                <td style="${J.infoLabel}">Fecha:</td>
                <td style="${J.infoValue}">${n}</td>
              </tr>
            </table>
          </div>

          <div style="${J.descriptionSection}">
            <p style="${J.descriptionTitle}">Descripción:</p>
            <p style="${J.descriptionText}">
              "${e.descripcion}"
            </p>
          </div>

          <div style="${J.buttonSection}">
            <a href="${r}" 
               style="${J.button}"
               target="_blank">
              Ver y Responder Ticket
            </a>
          </div>

          <div style="${J.noteSection}">
            <p style="${J.noteText}">
              <strong>Acceso directo:</strong> Este enlace te permite ver y responder el ticket sin necesidad de iniciar sesión. 
              Válido por 7 días.
            </p>
          </div>

        </div>

        <div style="${J.footer}">
          <p style="margin: 0;">
            Sistema de Tickets - EZI<br>
            Este email fue generado automáticamente por el sistema de gestión de tickets.
          </p>
        </div>

      </div>
    </body>
    </html>
  `};var Kk={VITE_APP_SUPABASE_URL:"https://mdmknxkztpimoedhdjci.supabase.co",VITE_APP_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A",VITE_APP_BASE_URL:"https://andresdramos.github.io",BASE_URL:"/ventanilla/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const kg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("plantas").select("idPlanta, planta").order("planta");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching plantas:",a)}finally{n(!1)}})()},[]),{plantas:e,loading:r,error:o}},bg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("esquemasPago").select("idEsquemaPago, esquemaPago").order("esquemaPago");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching esquemas de pago:",a)}finally{n(!1)}})()},[]),{esquemas:e,loading:r,error:o}},_g=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("tiposSolicitud").select("idTipoSolicitud, tipoSolicitud").order("tipoSolicitud");if(l)throw l;t(a||[])}catch(a){i(a.message)}finally{n(!1)}})()},[]),{tipos:e,loading:r,error:o}},Sg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("prioridades").select("idPrioridad, prioridad").order("idPrioridad");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching prioridades:",a)}finally{n(!1)}})()},[]),{prioridades:e,loading:r,error:o}},Jk=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null);return{createTicket:async i=>{try{t(!0),n(null);const{data:s}=await P.from("empleados").select("idPlanta").eq("idEmpleado",i.idEmpleado).single();if(!s)throw new Error("No se encontró información del empleado");const{data:a}=await P.from("asignaciones").select("idUsuario").eq("idPlanta",s.idPlanta).eq("idTipoSolicitud",i.idTipoSolicitud).single();if(!a)throw new Error("No se encontró usuario asignado para esta combinación de planta y tipo de solicitud");const{data:l,error:c}=await P.from("tickets").insert([{idEmpleado:i.idEmpleado,idTipoSolicitud:i.idTipoSolicitud,descripcion:i.descripcion,idPrioridad:i.idPrioridad}]).select().single();if(c)throw c;const{error:u}=await P.from("seguimientos").insert([{idTicket:l.idTicket,idUsuario:a.idUsuario,idEstado:1}]);if(u)throw u;const d=crypto.randomUUID(),h=new Date;h.setDate(h.getDate()+7);const{error:v}=await P.from("ticket_tokens").insert({token:d,idTicket:l.idTicket,idUsuario:a.idUsuario,fecha_expiracion:h.toISOString(),bActivo:!0});if(v)throw v;try{const{data:y,error:x}=await P.from("tickets").select(`
            *,
            empleados (
              nombre,
              plantas (planta)
            ),
            tiposSolicitud (tipoSolicitud),
            prioridades (prioridad)
          `).eq("idTicket",l.idTicket).single(),{data:_,error:m}=await P.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",a.idUsuario).single();if(!x&&!m&&y&&_){const p=`https://andresdramos.github.io/ventanilla/ticket/${d}`,{data:k,error:E}=await P.from("seguimientos").select("fecha").eq("idTicket",y.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();let C="Fecha no disponible";k&&!E&&(C=new Date(k.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}));const S=bu({ticket:y,usuario:_,directLink:p,fechaCreacion:C,tipo:"nuevo"});console.log("📧 Iniciando llamada al endpoint ASP.NET...");const j={destinatario:_.correo,asunto:`Nuevo Ticket Asignado - #${y.idTicket}`,mensaje:S};console.log("📦 Payload del email:",j);const I=Kk.VITE_EMAIL_ENDPOINT||"https://cors-anywhere.herokuapp.com/http://172.17.201.2/SendEmail.aspx",$=await fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)});console.log("🔄 Response status:",$.status),console.log("🔄 Response OK:",$.ok);const q=await $.json();console.log("📨 Email result:",q),q.success?console.log("✅ Email enviado exitosamente al usuario asignado"):console.error("❌ Email no enviado:",q.error)}else console.error("❌ Error obteniendo datos para notificación:",{ticketCompletoError:x,usuarioError:m,hasTicketCompleto:!!y,hasUsuarioAsignado:!!_})}catch(y){console.warn("⚠️ Error en sistema de notificaciones (ticket creado exitosamente):",y.message)}return{success:!0,ticket:l}}catch(s){return n(s.message),console.error("Error creating ticket:",s),{success:!1,error:s.message}}finally{t(!1)}},loading:e,error:r}},Eg=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null),o=w.useCallback(async l=>{t(!0),n(null);try{const{data:c,error:u}=await P.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("codigoEmpleado",l).single();if(u){if(u.code==="PGRST116")return{success:!0,empleado:null};throw u}return{success:!0,empleado:c}}catch(c){return console.error("Error al buscar empleado:",c),n(c.message),{success:!1,error:c.message}}finally{t(!1)}},[]),i=w.useCallback(async(l,c,u,d)=>{t(!0),n(null);try{const{data:h,error:v}=await P.from("empleados").insert([{codigoEmpleado:l,nombre:c,idPlanta:u,idEsquemaPago:d}]).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(v)throw v;return{success:!0,empleado:h}}catch(h){return console.error("Error al crear empleado:",h),n(h.message),{success:!1,error:h.message}}finally{t(!1)}},[]),s=w.useCallback(async l=>{t(!0),n(null);try{const{data:c,error:u}=await P.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("idEmpleado",l).single();if(u)throw u;return{success:!0,empleado:c}}catch(c){return console.error("Error al obtener empleado:",c),n(c.message),{success:!1,error:c.message}}finally{t(!1)}},[]),a=w.useCallback(async(l,c)=>{t(!0),n(null);try{const{data:u,error:d}=await P.from("empleados").update({idEsquemaPago:c}).eq("idEmpleado",l).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(d)throw d;return{success:!0,empleado:u}}catch(u){return console.error("Error al actualizar esquema de pago:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]);return{loading:e,error:r,buscarEmpleadoPorCodigo:o,crearEmpleado:i,obtenerEmpleadoPorId:s,actualizarEsquemaPago:a}},Qk=()=>{const[e,t]=w.useState(""),[r,n]=w.useState(""),[o,i]=w.useState(""),[s,a]=w.useState(""),[l,c]=w.useState(""),[u,d]=w.useState(!1),[h,v]=w.useState(1),{employeeLogin:y}=Wn(),x=Ko(),{plantas:_,loading:m}=kg(),{esquemas:g,loading:p}=bg(),{buscarEmpleadoPorCodigo:k,crearEmpleado:E,loading:C}=Eg(),S=async $=>{var q;if($.preventDefault(),c(""),!e.trim()){c("Por favor, ingrese su código de empleado");return}if(!/^\d+$/.test(e)){c("El código de empleado debe contener solo números");return}d(!0);try{const F=await k(e.trim());if(!F.success){c("Error al buscar empleado: "+F.error),d(!1);return}if(F.empleado){const De={idEmpleado:F.empleado.idEmpleado,codigoEmpleado:F.empleado.codigoEmpleado,empleado:F.empleado.nombre,idPlanta:F.empleado.idPlanta,planta:(q=F.empleado.plantas)==null?void 0:q.planta,idEsquemaPago:F.empleado.idEsquemaPago||null};y(De),x("/employee")}else v(2)}catch(F){c("Error al procesar la búsqueda"),console.error("Error:",F)}finally{d(!1)}},j=async $=>{var q;if($.preventDefault(),c(""),!r.trim()||!o||!s){c("Por favor, complete todos los campos");return}d(!0);try{const F=await E(e.trim(),r.trim(),o,s);if(!F.success){c("Error al registrar empleado: "+F.error),d(!1);return}y({idEmpleado:F.empleado.idEmpleado,codigoEmpleado:F.empleado.codigoEmpleado,empleado:F.empleado.nombre,idPlanta:F.empleado.idPlanta,planta:(q=F.empleado.plantas)==null?void 0:q.planta,idEsquemaPago:F.empleado.idEsquemaPago||null}),x("/employee")}catch(F){c("Error al procesar el registro"),console.error("Error:",F)}finally{d(!1)}},I=()=>{v(1),n(""),i(""),a(""),c("")};return h===1?f.jsxs(gf,{onSubmit:S,children:[f.jsx(yf,{children:"Acceso Empleado"}),f.jsx(vf,{children:"Ingresa tu código de empleado para acceder al sistema"}),l&&f.jsx(bf,{children:l}),f.jsxs(Si,{children:[f.jsx(Ei,{children:"Número de Empleado"}),f.jsx(Yk,{type:"text",inputMode:"numeric",pattern:"[0-9]*",placeholder:"Ej: 12345",value:e,onChange:$=>{const q=$.target.value.replace(/\D/g,"");t(q)},disabled:u||C,required:!0,autoComplete:"employee-id"})]}),f.jsx(kf,{type:"submit",disabled:u||C,children:u||C?"Verificando...":"Acceder"})]}):f.jsxs(gf,{onSubmit:j,children:[f.jsx(yf,{children:"Registro de Empleado"}),f.jsx(vf,{children:"No encontramos tu código de empleado. Por favor, completa la siguiente información:"}),l&&f.jsx(bf,{children:l}),f.jsxs(Zk,{children:["Código de empleado: ",f.jsx("strong",{children:e})]}),f.jsxs(Si,{children:[f.jsx(Ei,{children:"Nombre Completo"}),f.jsx(Xk,{type:"text",placeholder:"Ej: Juan Pérez García",value:r,onChange:$=>n($.target.value),disabled:u||C||p,required:!0,autoComplete:"name"})]}),f.jsxs(Si,{children:[f.jsx(Ei,{children:"Planta"}),m?f.jsx(xf,{disabled:!0,children:"Cargando plantas..."}):f.jsxs(wf,{value:o,onChange:$=>i($.target.value),disabled:u||C||p,required:!0,children:[f.jsx("option",{value:"",children:"Seleccione su planta..."}),_.map($=>f.jsx("option",{value:$.idPlanta,children:$.planta},$.idPlanta))]})]}),f.jsxs(Si,{children:[f.jsx(Ei,{children:"Esquema de Pago"}),p?f.jsx(xf,{disabled:!0,children:"Cargando esquemas..."}):f.jsxs(wf,{value:s,onChange:$=>a($.target.value),disabled:u||C||p,required:!0,children:[f.jsx("option",{value:"",children:"Seleccione su esquema de pago..."}),g.map($=>f.jsx("option",{value:$.idEsquemaPago,children:$.esquemaPago},$.idEsquemaPago))]})]}),f.jsxs(eb,{children:[f.jsx(tb,{type:"button",onClick:I,disabled:u||C||p,children:"Volver"}),f.jsx(kf,{type:"submit",disabled:u||C||p,style:{flex:1},children:u||C||p?"Registrando...":"Registrar y Acceder"})]})]})},gf=b.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,vf=b.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,yf=b.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,Si=b.div`
  margin-bottom: 1.5rem;
`,Ei=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,Cg=b.input`
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
`,Yk=b(Cg)`
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
`,Xk=b(Cg)``,wf=b.select`
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
`,xf=b.div`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: var(--color-gray);
`,kf=b.button`
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
`,bf=b.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,Zk=b.div`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.9rem;
`,eb=b.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,tb=b.button`
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
`,rb=()=>{const[e,t]=w.useState(""),[r,n]=w.useState(""),[o,i]=w.useState(!1),{adminLogin:s,authError:a,clearAuthError:l}=Wn(),c=Ko(),u=w.useRef(null);w.useEffect(()=>{u.current&&u.current.focus()},[]);const d=async h=>{if(h.preventDefault(),h.stopPropagation(),!(!e.trim()||!r.trim())){l(),i(!0);try{(await s(e.trim(),r)).success&&(t(""),n(""),c("/admin"))}catch(v){console.error("Error en handleSubmit:",v)}finally{i(!1)}}};return f.jsxs(nb,{onSubmit:d,children:[f.jsx(ib,{children:"Acceso Administrador"}),f.jsx(ob,{children:"Ingresa tus credenciales de administrador para acceder al panel de control"}),a&&f.jsxs(ab,{$shake:!!a,children:[f.jsx(lb,{children:"⚠️"}),a]}),f.jsxs(_f,{children:[f.jsx(Sf,{children:"Usuario"}),f.jsx(Ef,{ref:u,type:"text",placeholder:"Ingrese su usuario",value:e,onChange:h=>{t(h.target.value),a&&l()},disabled:o,autoComplete:"username",$hasError:a&&!e.trim()})]}),f.jsxs(_f,{children:[f.jsx(Sf,{children:"Contraseña"}),f.jsx(Ef,{type:"password",placeholder:"Ingrese su contraseña",value:r,onChange:h=>{n(h.target.value),a&&l()},disabled:o,autoComplete:"current-password",$hasError:a&&!r.trim()})]}),f.jsx(sb,{type:"submit",disabled:o||!e.trim()||!r.trim(),onSubmit:h=>h.preventDefault(),children:o?f.jsxs(f.Fragment,{children:[f.jsx(cb,{}),"Iniciando sesión..."]}):"Iniciar Sesión"})]})},nb=b.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,ob=b.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,ib=b.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,_f=b.div`
  margin-bottom: 1.5rem;
`,Sf=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,Ef=b.input`
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
`,sb=b.button`
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
`,ab=b.div`
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
`,lb=b.span`
  font-size: 1rem;
  flex-shrink: 0;
`,cb=b.div`
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
`,ub="/ventanilla/assets/logo-DOgx6EZv.png",db=()=>{const[e,t]=w.useState("employee");return f.jsxs(fb,{children:[f.jsxs(hb,{children:[f.jsx("img",{src:ub,alt:"Logo de la empresa",style:{height:"80px"}}),f.jsx(pb,{children:"Ventanilla de atención al empleado"})]}),f.jsx(mb,{children:f.jsxs(gb,{children:[f.jsxs(vb,{children:[f.jsxs(Cf,{$active:e==="employee",onClick:()=>t("employee"),children:[f.jsx(Tf,{children:"👤"}),"Empleado"]}),f.jsxs(Cf,{$active:e==="admin",onClick:()=>t("admin"),children:[f.jsx(Tf,{children:"🔑"}),"Administrador"]})]}),f.jsxs(yb,{children:[e==="employee"&&f.jsx(Qk,{}),e==="admin"&&f.jsx(rb,{})]})]})})]})},fb=b.div`
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
`,hb=b.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    /* Removido el filtro que estaba causando problemas */
  }
`,pb=b.h1`
  color: var(--color-primary);
  font-size: 28px;
  font-weight: 600;
  margin: 16px 0 0 0;
`,mb=b.div`
  width: 100%;
  max-width: 500px;
`,gb=b.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,vb=b.div`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,Cf=b.button`
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
`,Tf=b.span`
  font-size: 16px;
`,yb=b.div`
  padding: 0;
`;var wb={VITE_APP_SUPABASE_URL:"https://mdmknxkztpimoedhdjci.supabase.co",VITE_APP_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A",VITE_APP_BASE_URL:"https://andresdramos.github.io",BASE_URL:"/ventanilla/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const xb=async(e,t)=>{try{const r=crypto.randomUUID(),n=new Date;n.setDate(n.getDate()+7);const{error:o}=await P.from("ticket_tokens").insert({token:r,idTicket:e,idUsuario:t,fecha_expiracion:n.toISOString(),bActivo:!0});if(o)throw o;return r}catch(r){throw console.error("Error generando token:",r),r}},jf=async(e,t)=>{try{const r=await xb(e.idTicket,t.idUsuario),o=`https://andresdramos.github.io/ventanilla/ticket/${r}`,{data:i,error:s}=await P.from("seguimientos").select("fecha").eq("idTicket",e.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();let a="Fecha no disponible";i&&!s&&(a=new Date(i.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}));const l=bu({ticket:e,usuario:t,directLink:o,fechaCreacion:a,tipo:"delegado"}),c=wb.VITE_EMAIL_ENDPOINT||"https://cors-anywhere.herokuapp.com/http://172.17.201.2/SendEmail.aspx",d=await(await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({destinatario:t.correo,asunto:`Ticket Delegado para Atención - #${e.idTicket}`,mensaje:l})})).json();if(!d.success)throw new Error(d.error||"Error enviando email");return{success:!0,token:r,directLink:o,emailResult:{success:!0,messageId:"internal-email-"+Date.now(),to:t.correo}}}catch(r){return console.error("Error enviando notificación de delegación:",r),{success:!1,error:r.message}}},kb=(e,t=[])=>{const[r,n]=w.useState([]),[o,i]=w.useState(!0),[s,a]=w.useState(null),l=w.useRef(!1),c=w.useRef(null),u=w.useCallback(async(d={})=>{if(e){if(e.idRol===2&&(!t||t.length===0)){const v=l.current?Date.now()-15e3:Date.now();if(Date.now()-v<15e3){console.log("⏳ Esperando asignaciones para usuario idRol = 2...");return}else console.warn("⚠️ Timeout esperando asignaciones - procediendo sin filtrar")}try{i(!0),console.log("🔄 Iniciando fetch de tickets para usuario:",e.idUsuario,"idRol:",e.idRol);const h=async g=>{var p;try{if((p=g.seguimientos)==null?void 0:p.find(C=>C.idEstado===1))return{success:!0,mensaje:"Ya tiene seguimiento inicial"};const{error:E}=await P.from("seguimientos").insert({idTicket:g.idTicket,idUsuario:null,idEstado:1});if(E)throw E;return{success:!0,mensaje:"Seguimiento inicial creado"}}catch(k){return console.error("Error creando seguimiento inicial:",k),{success:!1,error:k.message}}};let v=P.from("tickets").select(`
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
        `).order("idTicket",{ascending:!1});if((e==null?void 0:e.idRol)===2&&!e.idUsuario){n([]),i(!1);return}if(d.planta){const{data:g}=await P.from("empleados").select("idEmpleado").eq("idPlanta",d.planta);if(g&&g.length>0){const p=g.map(k=>k.idEmpleado);v=v.in("idEmpleado",p)}else{n([]),i(!1);return}}if(d.tipoSolicitud&&(v=v.eq("idTipoSolicitud",d.tipoSolicitud)),d.prioridad&&(v=v.eq("idPrioridad",d.prioridad)),d.empleado){const{data:g}=await P.from("empleados").select("idEmpleado").or(`codigoEmpleado.ilike.%${d.empleado}%,nombre.ilike.%${d.empleado}%`);if(g&&g.length>0){const p=g.map(k=>k.idEmpleado);v=v.in("idEmpleado",p)}else{n([]),i(!1);return}}const{data:y,error:x}=await v;if(x)throw x;let _=y||[];const m=_.filter(g=>{var p;return!((p=g.seguimientos)!=null&&p.find(k=>k.idEstado===1))});if(m.length>0){const g=m.map(p=>h(p));try{await Promise.all(g);const{data:p}=await v;p&&(_=p)}catch(p){console.error("Error en migración de seguimientos:",p)}}if((e==null?void 0:e.idRol)!==1)if(e.idRol===3){const{data:g}=await P.from("delegaciones").select("idTicket").eq("idUsuario",e.idUsuario).eq("bActivo",!0);if(g&&g.length>0){const p=g.map(k=>k.idTicket);_=_.filter(k=>p.includes(k.idTicket))}else _=[]}else{const g=t.filter(p=>p.idUsuario===e.idUsuario);g&&g.length>0?_=_.filter(p=>g.some(E=>{var C;return((C=p.empleados)==null?void 0:C.idPlanta)===E.idPlanta&&p.idTipoSolicitud===E.idTipoSolicitud})):t.length===0?console.warn("⚠️ Sin asignaciones disponibles - mostrando todos los tickets"):_=[]}d.sortBy==="prioridad"?_.sort((g,p)=>g.idPrioridad-p.idPrioridad):_.sort((g,p)=>{var C,S,j,I;const k=(S=(C=g.seguimientos)==null?void 0:C.find($=>$.idEstado===1))==null?void 0:S.fecha,E=(I=(j=p.seguimientos)==null?void 0:j.find($=>$.idEstado===1))==null?void 0:I.fecha;return!k&&!E?0:k?E?new Date(E)-new Date(k):-1:1}),n(_),a(null)}catch(h){console.error("Error fetching tickets:",h),a(h.message)}finally{i(!1)}}},[e,t]);return w.useEffect(()=>{e&&(c.current!==e.idUsuario||!l.current)&&(c.current=e.idUsuario,l.current=!0,e.idRol===2?(console.log("🔍 Usuario idRol = 2, verificando asignaciones:",t==null?void 0:t.length),t&&t.length>0?(console.log("✅ Asignaciones disponibles, ejecutando fetch"),u()):console.log("⏳ Asignaciones aún no disponibles, esperando...")):(console.log("👤 Usuario idRol =",e.idRol,"ejecutando fetch inmediato"),u()))},[e,u,t]),{tickets:r,loading:o,error:s,refetchTickets:u}},bb=e=>({total:e.length,sinAtender:e.filter(r=>r.idEstado===1).length,reasignados:e.filter(r=>r.idEstado===2).length,atendidos:e.filter(r=>r.idEstado===3).length,cerrados:e.filter(r=>r.idEstado===4).length,cancelados:e.filter(r=>r.idEstado===5).length}),Tg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0);w.useEffect(()=>{(async()=>{try{console.log("🔄 Iniciando fetch de asignaciones...");const s=new Promise((u,d)=>setTimeout(()=>d(new Error("Timeout al cargar asignaciones")),1e4)),a=P.from("asignaciones").select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `),{data:l,error:c}=await Promise.race([a,s]);if(c)throw c;console.log("✅ Asignaciones obtenidas:",(l==null?void 0:l.length)||0,"registros"),t(l||[])}catch(s){console.error("❌ Error fetching asignaciones:",s),t([]),s.message==="Timeout al cargar asignaciones"&&console.warn("⚠️ Timeout en asignaciones - el sistema continuará con funcionalidad limitada")}finally{n(!1),console.log("🏁 useAsignaciones loading terminado")}})()},[]);const o=w.useCallback((i,s)=>{var l;const a=e.find(c=>c.idPlanta===i&&c.idTipoSolicitud===s);return((l=a==null?void 0:a.usuarios)==null?void 0:l.nombre)||"No asignado"},[e]);return{asignaciones:e,loading:r,getResponsable:o}},_b=e=>{const[t,r]=w.useState(!1),n=w.useCallback(async(l,c,u)=>{var d;try{r(!0);const{error:h}=await P.from("seguimientos").insert({idTicket:l,idUsuario:c,idEstado:3});if(h)throw h;const{data:v,error:y}=await P.from("atenciones").insert({idTicket:l,idUsuario:c,respuesta:u}).select().single();if(y)throw y;const{error:x}=await P.from("tickets").update({idEstado:3}).eq("idTicket",l);if(x)throw x;const{error:_}=await P.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);return _&&((d=_.message)!=null&&d.includes("0 rows")),{success:!0,atencion:v}}catch(h){return console.error("Error al registrar la atención:",h),{success:!1,error:h.message}}finally{r(!1)}},[]),o=w.useCallback(async(l,c,u)=>{try{r(!0);try{const{error:p}=await P.from("ticket_tokens").update({bActivo:!1,fecha_uso:new Date().toISOString()}).eq("idTicket",l).eq("bActivo",!0)}catch{}const{data:d,error:h}=await P.from("tickets").select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `).eq("idTicket",l).single();if(h)throw h;const{data:v,error:y}=await P.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",u).single();if(y)throw y;const{error:x}=await P.from("seguimientos").insert({idTicket:l,idUsuario:c,idEstado:2});if(x)throw x;const{error:_}=await P.from("tickets").update({idEstado:2}).eq("idTicket",l);if(_)throw _;const{error:m}=await P.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(m)throw m;const{error:g}=await P.from("delegaciones").insert({idTicket:l,idUsuario:u});if(g)throw g;try{(await jf(d,v)).success}catch{}return{success:!0,mensaje:"Ticket delegado exitosamente.",ticketData:d,usuarioDestino:v}}catch(d){return console.error("Error al delegar el ticket:",d),{success:!1,error:d.message}}finally{r(!1)}},[]),i=w.useCallback(async(l,c,u)=>{try{r(!0);const{error:d}=await P.from("seguimientos").insert({idTicket:l,idUsuario:c,idEstado:5});if(d)throw d;const{data:h,error:v}=await P.from("atenciones").insert({idTicket:l,respuesta:u}).select().single();if(v)throw v;const{error:y}=await P.from("tickets").update({idEstado:5}).eq("idTicket",l);if(y)throw y;return{success:!0,atencion:h}}catch(d){return console.error("Error al cancelar el ticket:",d),{success:!1,error:d.message}}finally{r(!1)}},[]),s=w.useCallback(async(l,c)=>{if(!e)return{success:!1,error:"Usuario no disponible"};r(!0);try{try{const{error:v}=await P.from("ticket_tokens").update({bActivo:!1,fecha_uso:new Date().toISOString()}).eq("idTicket",l).eq("bActivo",!0)}catch{}const{error:u}=await P.from("seguimientos").insert({idTicket:l,idUsuario:e.idUsuario,idEstado:2});if(u)throw u;const{error:d}=await P.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(d)throw d;const{error:h}=await P.from("delegaciones").insert({idTicket:l,idUsuario:c});if(h)throw h;try{const{data:v,error:y}=await P.from("usuarios").select("idUsuario, idRol, correo, nombre").eq("idUsuario",c).single();if(!y&&v&&v.idRol===3){const{data:x,error:_}=await P.from("tickets").select(`
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            `).eq("idTicket",l).single();if(!_&&x){const m=await jf(x,v);m.success||console.error("Error al enviar notificación de reasignación:",m.error)}}}catch(v){console.error("Error en proceso de notificación de reasignación:",v)}return{success:!0}}catch(u){return console.error("Error al re-asignar el ticket:",u),{success:!1,error:u.message}}finally{r(!1)}},[e]),a=w.useCallback(async l=>{r(!0);try{const{error:c}=await P.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(c)throw c;return{success:!0}}catch(c){return console.error("Error al autoasignarse el ticket:",c),{success:!1,error:c.message}}finally{r(!1)}},[]);return{crearAtencion:n,delegarTicket:o,cancelarTicket:i,reasignarTicket:s,autoasignarTicket:a,loading:t}},jg=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null),o=w.useCallback(async(s,a=null)=>{var l,c;try{if(t(!0),n(null),!s||isNaN(parseInt(s)))return null;const{data:u,error:d}=await P.from("atenciones").select(`
          idUsuario,
          usuarios (
            nombre
          )
        `).eq("idTicket",parseInt(s)).limit(1).maybeSingle();if(!d&&((l=u==null?void 0:u.usuarios)!=null&&l.nombre))return{nombre:u.usuarios.nombre,fecha:null};const{data:h,error:v}=await P.from("tickets").select("idEmpleado, idTipoSolicitud").eq("idTicket",s).maybeSingle();if(!v&&h){const{data:y,error:x}=await P.from("empleados").select("idPlanta").eq("idEmpleado",h.idEmpleado).maybeSingle();if(!x&&y){const{data:_,error:m}=await P.from("asignaciones").select(`
              usuarios (
                nombre
              )
            `).eq("idTipoSolicitud",h.idTipoSolicitud).eq("idPlanta",y.idPlanta).maybeSingle();if(!m&&((c=_==null?void 0:_.usuarios)!=null&&c.nombre))return{nombre:_.usuarios.nombre,fecha:null}}}return null}catch(u){return console.error("Error en obtenerUsuarioQueAtendio:",u),n(u.message),null}finally{t(!1)}},[]),i=w.useCallback(async s=>{var a;if(!s||s.length===0)return{};try{t(!0),n(null);const{data:l,error:c}=await P.from("atenciones").select(`
          idTicket,
          idUsuario,
          usuarios (
            nombre
          )
        `).in("idTicket",s),u={};!c&&l&&l.forEach(h=>{var v;(v=h.usuarios)!=null&&v.nombre&&(u[h.idTicket]={nombre:h.usuarios.nombre,fecha:null})});const d=s.filter(h=>!u[h]);if(d.length>0){const{data:h,error:v}=await P.from("tickets").select("idTicket, idEmpleado, idTipoSolicitud").in("idTicket",d);if(!v&&h)for(const y of h){const{data:x,error:_}=await P.from("empleados").select("idPlanta").eq("idEmpleado",y.idEmpleado).maybeSingle();if(!_&&x){const{data:m,error:g}=await P.from("asignaciones").select(`
                  usuarios (
                    nombre
                  )
                `).eq("idTipoSolicitud",y.idTipoSolicitud).eq("idPlanta",x.idPlanta).maybeSingle();!g&&((a=m==null?void 0:m.usuarios)!=null&&a.nombre)&&(u[y.idTicket]={nombre:m.usuarios.nombre,fecha:null})}}}return u}catch(l){return console.error("Error en obtenerUsuariosQueAtendieron:",l),n(l.message),{}}finally{t(!1)}},[]);return{obtenerUsuarioQueAtendio:o,obtenerUsuariosQueAtendieron:i,loading:e,error:r}},Ye=e=>{if(!e)return"Fecha no disponible";if(e.includes("T")&&e.includes("+00:00")){const r=e.split("T")[0],n=e.split("T")[1].split("+")[0],[o,i,s]=r.split("-"),[a,l]=n.split(":");return`${s}/${i}/${o}, ${a}:${l}`}return new Date(e).toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},Sb=({user:e,onLogout:t})=>f.jsxs(Eb,{children:[f.jsxs(Cb,{children:[f.jsx("h1",{children:"Dashboard Administrativo"}),f.jsxs("p",{children:["Bienvenido, ",e==null?void 0:e.nombre]})]}),f.jsx(Tb,{onClick:t,children:"Cerrar Sesión"})]}),Eb=b.header`
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
`,Cb=b.div`
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
`,Tb=b.button`
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
`,jb=({stats:e,statsFilter:t,onStatsFilterChange:r})=>{const n={sinAtender:{id:1,label:"Nuevos",color:"var(--color-estado-sin-atender)",count:e.sinAtender},reasignados:{id:2,label:"Asignados",color:"var(--color-estado-delegado)",count:e.reasignados},atendidos:{id:3,label:"Atendidos",color:"var(--color-estado-atendido)",count:e.atendidos},cerrados:{id:4,label:"Cerrados",color:"var(--color-estado-cerrado)",count:e.cerrados},cancelados:{id:5,label:"Cancelados",color:"var(--color-estado-cancelado)",count:e.cancelados}},o=i=>{r(t===i?null:i)};return f.jsxs(Pb,{children:[f.jsxs($b,{children:["Tickets: ",e.total]}),f.jsx(Rb,{children:Object.entries(n).map(([i,s])=>f.jsxs(Ab,{$active:t===i,$color:s.color,onClick:()=>o(i),children:[f.jsx(Ib,{$active:t===i,$color:s.color,children:s.count}),f.jsx(Ob,{$active:t===i,$color:s.color,children:s.label})]},i))})]})},Pb=b.div`
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
  }
`,$b=b.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`,Rb=b.div`
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
`,Ab=b.div`
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
`,Ib=b.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  margin-bottom: 0.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`,Ob=b.div`
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,Lb=({tempFilters:e,onTempFilterChange:t,onApplyFilters:r,onClearFilters:n,plantas:o,tipos:i,prioridades:s})=>{const[a,l]=w.useState(!1);return f.jsxs(Nb,{children:[f.jsxs(Ub,{onClick:()=>l(!a),children:[f.jsx("h3",{children:"Filtros"}),f.jsx(zb,{$expanded:a,children:a?"▲":"▼"})]}),a&&f.jsxs(Db,{children:[f.jsxs(Fb,{children:[f.jsxs(Ci,{children:[f.jsx("label",{children:"Planta:"}),f.jsxs("select",{value:e.planta,onChange:c=>t("planta",c.target.value),children:[f.jsx("option",{value:"",children:"Todas"}),o.map(c=>f.jsx("option",{value:c.idPlanta,children:c.planta},c.idPlanta))]})]}),f.jsxs(Ci,{children:[f.jsx("label",{children:"Tipo:"}),f.jsxs("select",{value:e.tipoSolicitud,onChange:c=>t("tipoSolicitud",c.target.value),children:[f.jsx("option",{value:"",children:"Todos"}),i.sort((c,u)=>c.idTipoSolicitud-u.idTipoSolicitud).map(c=>f.jsx("option",{value:c.idTipoSolicitud,children:c.tipoSolicitud},c.idTipoSolicitud))]})]}),f.jsxs(Ci,{children:[f.jsx("label",{children:"Prioridad:"}),f.jsxs("select",{value:e.prioridad,onChange:c=>t("prioridad",c.target.value),children:[f.jsx("option",{value:"",children:"Todas"}),s.map(c=>f.jsx("option",{value:c.idPrioridad,children:c.prioridad},c.idPrioridad))]})]}),f.jsxs(Ci,{children:[f.jsx("label",{children:"Empleado:"}),f.jsx("input",{type:"text",placeholder:"Código o nombre...",value:e.empleado,onChange:c=>t("empleado",c.target.value)})]})]}),f.jsxs(Mb,{children:[f.jsx("label",{children:"Ordenar por:"}),f.jsxs("select",{value:e.sortBy,onChange:c=>t("sortBy",c.target.value),children:[f.jsx("option",{value:"fecha",children:"Fecha de creación"}),f.jsx("option",{value:"prioridad",children:"Prioridad"})]})]}),f.jsxs(Bb,{children:[f.jsx(Wb,{onClick:n,children:"Limpiar"}),f.jsx(qb,{onClick:r,children:"Aplicar"})]})]})]})},Nb=b.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`,Ub=b.div`
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
`,zb=b.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`,Db=b.div`
  padding: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`,Fb=b.div`
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
`,Ci=b.div`
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
`,Mb=b.div`
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
`,Bb=b.div`
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
`,qb=b.button`
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
`,Wb=b.button`
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
`,Pg=(e,t,r)=>{const[n,o]=w.useState(null);return w.useEffect(()=>{(async()=>{var a,l;if(!e||!e.idTicket){o(null);return}try{const{data:c,error:u}=await P.from("ticket_tokens").select("idUsuario").eq("idTicket",e.idTicket).eq("bActivo",!0).maybeSingle();let d=null;if(!u&&(c!=null&&c.idUsuario))d=c.idUsuario;else{if(e.idTipoSolicitud&&e.idEmpleado)try{const{data:h,error:v}=await P.from("empleados").select("idPlanta").eq("idEmpleado",e.idEmpleado).single();if(!v&&(h!=null&&h.idPlanta)){const{data:y,error:x}=await P.from("asignaciones").select("idUsuario").eq("idTipoSolicitud",e.idTipoSolicitud).eq("idPlanta",h.idPlanta).single();!x&&(y!=null&&y.idUsuario)&&(d=y.idUsuario)}}catch{}d||(d=((a=e.asignaciones)==null?void 0:a.idUsuario)||null)}if(d){const{data:h,error:v}=await P.from("usuarios").select("nombre").eq("idUsuario",d).single();!v&&(h!=null&&h.nombre)?o(h.nombre):o(null)}else o(null)}catch{const u=(l=e.asignaciones)==null?void 0:l.idUsuario;if(u)try{const{data:d,error:h}=await P.from("usuarios").select("nombre").eq("idUsuario",u).single();!h&&(d!=null&&d.nombre)?o(d.nombre):o(null)}catch{o(null)}else o(null)}})()},[e]),w.useMemo(()=>{var h;const s=()=>n,a=()=>{var y,x;const v=(x=(y=e.seguimientos)==null?void 0:y.find(_=>_.idEstado===1))==null?void 0:x.fecha;return v?r?r(v):Ye(v):"Pendiente seguimiento inicial"},l=()=>{const v={1:()=>a(),2:()=>{var x,_;const y=(_=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===2))==null?void 0:_.fecha;return y?r?r(y):Ye(y):a()},3:()=>{var x,_;const y=(_=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===3))==null?void 0:_.fecha;return y?r?r(y):Ye(y):a()},4:()=>{var x,_;const y=(_=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===4))==null?void 0:_.fecha;return y?r?r(y):Ye(y):a()},5:()=>{var x,_;const y=(_=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===5))==null?void 0:_.fecha;return y?r?r(y):Ye(y):a()}};return v[e.idEstado]?v[e.idEstado]():a()},c=()=>({1:"Sin atender",2:"Asignado",3:"Atendido",4:"Cerrado",5:"Cancelado"})[e.idEstado]||"Pendiente",u=()=>({1:"var(--color-estado-sin-atender)",2:"var(--color-estado-delegado)",3:"var(--color-estado-atendido)",4:"var(--color-estado-cerrado)",5:"var(--color-estado-cancelado)"})[e.idEstado]||"#ffc107",d=()=>({1:"Fecha de creación:",2:"Fecha de asignación:",3:"Fecha de atención:",4:"Fecha de cierre:",5:"Fecha de cancelación:"})[e.idEstado]||"Fecha de creación:";return{usuarioDelegado:s(),fechaCreacion:a(),fechaRelevante:l(),estadoTexto:c(),estadoColor:u(),etiquetaFecha:d(),borderColor:u(),isResolved:t==="admin"?((h=e.atenciones)==null?void 0:h.length)>0:!1}},[e,t,r,n])},Vb=b.div`
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
`,Hb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${e=>e.$isResolved?"#f8f9fa":"white"};
  border-bottom: ${e=>e.$isExpanded?"1px solid #e9ecef":"none"};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`,Gb=b.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`,Kb=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Jb=b.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$priority||"var(--color-secondary)"};
`,Qb=b.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Yb=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Xb=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Zb=b.button`
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
`,e_=b.button`
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
`,t_=b.button`
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
`,$g=b.button`
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
`,r_=b.div`
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
`,Gt=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #f8f9fa;
`,Kt=b.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
  min-width: 120px;
`,Jt=b.span`
  color: var(--color-text);
  font-size: 0.85rem;
  text-align: right;
  flex: 1;
`;b.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
  }
`;b.p`
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
`;const n_=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,o_=({ticket:e,ticketData:t,onAtender:r,onVerRespuesta:n,isExpanded:o,onToggleExpand:i})=>{const s=c=>{c.stopPropagation(),r==null||r(e)},a=c=>{c.stopPropagation(),n==null||n(e)},l=c=>{c.stopPropagation(),i==null||i()};return f.jsxs(f.Fragment,{children:[t.isResolved?f.jsx(n_,{children:f.jsx(e_,{onClick:a,title:"Ver respuesta del ticket",children:f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}):f.jsx(Yb,{children:f.jsx(Zb,{onClick:s,children:"Atender"})}),f.jsx($g,{onClick:l,children:o?"▲":"▼"})]})},i_=({ticket:e,ticketData:t,onShowDetails:r,isExpanded:n,onToggleExpand:o})=>{const i=a=>{a.stopPropagation(),r==null||r(e)},s=a=>{a.stopPropagation(),o==null||o()};return f.jsxs(f.Fragment,{children:[f.jsx(Xb,{children:f.jsx(t_,{$estadoColor:t.estadoColor,onClick:i,title:"Ver detalles del ticket",children:t.estadoTexto})}),f.jsx($g,{onClick:s,children:n?"▲":"▼"})]})},s_=({ticket:e,mode:t,ticketData:r,getPriorityColor:n,onAtender:o,onVerRespuesta:i,onShowDetails:s,isExpanded:a,onToggleExpand:l})=>{var c;return f.jsxs(Hb,{$isResolved:r.isResolved,$isExpanded:a,onClick:l,children:[f.jsxs(Gb,{children:[f.jsx(Jb,{$priority:n(e.idPrioridad),children:(c=e.prioridades)==null?void 0:c.prioridad}),f.jsxs(Qb,{children:["#",e.idTicket]})]}),f.jsx(Kb,{children:t==="admin"?f.jsx(o_,{ticket:e,ticketData:r,onAtender:o,onVerRespuesta:i,isExpanded:a,onToggleExpand:l}):f.jsx(i_,{ticket:e,ticketData:r,onShowDetails:s,isExpanded:a,onToggleExpand:l})})]})},a_=(e,t,r)=>r==="employee"?"Asignado a:":(e==null?void 0:e.idRol)===3?t===2?"Asignado a:":"Asignado por:":"Asignado a:",l_=(e,t,r)=>{var n;return t.usuarioDelegado?t.usuarioDelegado:(r==null?void 0:r((n=e.empleados)==null?void 0:n.idPlanta,e.idTipoSolicitud))||"No asignado"},c_=(e,t=20)=>e?e.length>t?`${e.substring(0,t).trim()}...`:e:"",u_=({ticket:e,mode:t,ticketData:r,getResponsable:n,currentUser:o,isExpanded:i})=>{var l,c,u,d;const s=a_(o,e.idEstado,t),a=l_(e,r,n);return f.jsx(r_,{$isExpanded:i,children:t==="admin"?f.jsxs(f.Fragment,{children:[f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:"Empleado:"}),f.jsx(Jt,{$isExpanded:i,children:c_((l=e.empleados)==null?void 0:l.nombre)})]}),f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:"Código:"}),f.jsx(Jt,{$isExpanded:i,children:(c=e.empleados)==null?void 0:c.codigoEmpleado})]}),f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:"Fecha:"}),f.jsx(Jt,{$isExpanded:i,children:r.fechaRelevante})]}),f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:"Tipo:"}),f.jsx(Jt,{$isExpanded:i,children:(u=e.tiposSolicitud)==null?void 0:u.tipoSolicitud})]}),n&&f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:s}),f.jsx(Jt,{$isExpanded:i,children:a})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:r.etiquetaFecha}),f.jsx(Jt,{$isExpanded:i,children:r.fechaRelevante})]}),f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:"Tipo:"}),f.jsx(Jt,{$isExpanded:i,children:(d=e.tiposSolicitud)==null?void 0:d.tipoSolicitud})]}),n&&f.jsxs(Gt,{$isExpanded:i,children:[f.jsx(Kt,{$isExpanded:i,children:s}),f.jsx(Jt,{$isExpanded:i,children:a})]})]})})},lc=({ticket:e,mode:t="employee",formatDate:r,getPriorityColor:n,getResponsable:o,onAtender:i,onVerRespuesta:s,onShowDetails:a,isExpanded:l=!1,onToggleExpand:c,currentUser:u=null})=>{const d=Pg(e,t,r),h=()=>{c==null||c(e.idTicket)};return f.jsxs(Vb,{$borderColor:d.borderColor,$isResolved:d.isResolved,$isExpanded:l,children:[f.jsx(s_,{ticket:e,mode:t,ticketData:d,getPriorityColor:n,onAtender:i,onVerRespuesta:s,onShowDetails:a,isExpanded:l,onToggleExpand:h}),f.jsx(u_,{ticket:e,mode:t,ticketData:d,getResponsable:o,currentUser:u,isExpanded:l})]})},d_=({tickets:e,mode:t="admin",onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,expandedTicketId:a,onToggleExpand:l,currentUser:c=null})=>e.length===0?f.jsx(Pf,{children:f.jsx(h_,{children:"No se encontraron tickets"})}):f.jsx(Pf,{children:f.jsx(f_,{children:e.map(u=>f.jsx(lc,{ticket:u,mode:t,onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,isExpanded:a===u.idTicket,onToggleExpand:l,currentUser:c},u.idTicket))})}),Pf=b.div`
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
`,f_=b.div`
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
`,h_=b.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  margin: 1rem;
`,p_=(e,t)=>{const[r,n]=w.useState(""),[o,i]=w.useState(""),[s,a]=w.useState(""),[l,c]=w.useState(1),[u,d]=w.useState("");w.useEffect(()=>{e||h()},[e]);const h=()=>{n(""),i(""),a(""),c(1),d("")};return{respuesta:r,setRespuesta:p=>{n(p)},actionType:o,setActionType:i,selectedUser:s,setSelectedUser:p=>{a(p)},calificacion:l,setCalificacion:p=>{c(p)},comentario:u,setComentario:p=>{d(p)},resetState:h,handleClose:()=>{h(),t==null||t()},handleActionChange:p=>{n(""),a(""),i(p)}}},m_=({onSubmit:e,onDelegate:t,onReassign:r,onSelfAssign:n})=>({handleSubmit:(i,s,a)=>{switch(i){case"respond":case"cancel":if(!s.trim())return alert(i==="cancel"?"Debe ingresar un motivo de cancelación":"Debe ingresar una respuesta"),!1;break;case"delegate":if(!a)return alert("Debe seleccionar un usuario para delegar"),!1;break;case"reassign":if(!a)return alert("Debe seleccionar un usuario para reasignar"),!1;break;case"selfassign":if(!s.trim())return alert("Debe ingresar una respuesta"),!1;break;default:return alert("Debe seleccionar una acción"),!1}try{switch(i){case"respond":e==null||e(s.trim(),"respond");break;case"cancel":e==null||e(s.trim(),"cancel");break;case"delegate":t==null||t(a);break;case"reassign":r==null||r(a);break;case"selfassign":n==null||n(),setTimeout(()=>{e==null||e(s.trim(),"respond")},100);break;default:return!1}return!0}catch(l){return console.error("Error en handleSubmit:",l),alert("Error al procesar la acción. Inténtalo de nuevo."),!1}}}),g_=b.div`
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
`,v_=b.div`
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
`,y_=b.div`
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
`,w_=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,x_=b.button`
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
`,k_=b.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;

  background: ${e=>{var t;switch((t=e.$priority)==null?void 0:t.toLowerCase()){case"alta":return"#E06363";case"media":return"#E0C563";case"baja":return"#636EE0";default:return"#6c757d"}}};
`,b_=b.div`
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
`,__=b.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,S_=b.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,E_=b.p`
  margin-bottom: 1rem;
  color: var(--color-primary);
`,C_=b.span`
  font-weight: 600;
`,T_=b.span`
  color: #495057;
`,j_=b.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,P_=b.div`
  margin-bottom: 1.5rem;
`,$_=b.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
  white-space: pre-wrap;
`;b.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`;b.p`
  margin: 0;
  color: #1565c0;
  font-size: 0.85rem;
`;const $f=b.div`
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid var(--color-accent);
`,Ma=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ba=b.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
`,qa=b.span`
  color: #495057;
  font-size: 0.85rem;
`,R_=b.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,A_=b.button`
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
`,I_=b.div`
  margin-top: 1rem;
`,O_=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,L_=b.textarea`
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
`,Rf=b.div`
  margin-top: 1rem;
`,Af=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;b.select`
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
`;const N_=b.div`
  margin-bottom: 1.5rem;
`,If=b.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`,U_=b.h5`
  margin: 0 0 0.75rem 0;
  color: var(--color-primary);
  font-weight: 600;
`,z_=b.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`,D_=b.div`
  margin-top: 0.5rem;
  padding: 0;
  background: none;
  border: none;
  font-size: 0.75rem;
  opacity: 0.85;
`,Of=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Lf=b.span`
  font-weight: 500;
  color: #6c757d;
  font-size: 0.7rem;
`,Nf=b.span`
  color: #495057;
  font-size: 0.7rem;
  font-weight: 400;
`,F_=b.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`,M_=b.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,B_=b.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,q_=b.button`
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
`,W_=b.div`
  text-align: left;
`,V_=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,H_=b.textarea`
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
`,G_=b.div`
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
`,Uf=b.button`
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
`,K_=({ticket:e,onClose:t})=>{var r,n;return f.jsxs(y_,{children:[f.jsxs(w_,{children:[f.jsx(k_,{$priority:(r=e.prioridades)==null?void 0:r.prioridad,children:(n=e.prioridades)==null?void 0:n.prioridad}),f.jsxs("h3",{children:["#",e.idTicket]})]}),f.jsx(x_,{onClick:t,children:"×"})]})},J_=({ticket:e})=>{var r,n,o,i,s,a,l;const t=(n=(r=e.seguimientos)==null?void 0:r.find(c=>c.idEstado===1))!=null&&n.fecha?Ye(e.seguimientos.find(c=>c.idEstado===1).fecha):"No disponible";return f.jsxs(f.Fragment,{children:[f.jsx(__,{children:f.jsxs(S_,{children:[(o=e.empleados)==null?void 0:o.nombre," (",(i=e.empleados)==null?void 0:i.codigoEmpleado,") -"," ",(a=(s=e.empleados)==null?void 0:s.plantas)==null?void 0:a.planta]})}),f.jsxs(E_,{children:[f.jsx(C_,{children:"Fecha de generación:"})," ",f.jsx(T_,{children:t})]}),f.jsxs(j_,{children:["Tipo: ",(l=e.tiposSolicitud)==null?void 0:l.tipoSolicitud]}),f.jsx(P_,{children:f.jsx($_,{children:e.descripcion})})]})},Q_=({ticket:e,mode:t})=>{var n,o;const r=Pg(e,"admin",i=>Ye(i));if(!e||t==="response")return null;if(e.idEstado===1)return f.jsx($f,{children:f.jsxs(Ma,{children:[f.jsx(Ba,{children:"Asignado a:"}),f.jsx(qa,{children:(r==null?void 0:r.usuarioDelegado)||"Determinando asignación..."})]})});if(e.idEstado===2){const i=(o=(n=e.seguimientos)==null?void 0:n.find(s=>s.idEstado===2))==null?void 0:o.fecha;return f.jsx(f.Fragment,{children:f.jsxs($f,{children:[f.jsxs(Ma,{children:[f.jsx(Ba,{children:"Asignado a:"}),f.jsx(qa,{children:(r==null?void 0:r.usuarioDelegado)||"Usuario no disponible"})]}),f.jsxs(Ma,{children:[f.jsx(Ba,{children:"Fecha de asignación:"}),f.jsx(qa,{children:i?Ye(i):"Fecha no disponible"})]})]})})}return null},Y_=(e,t)=>{if(!e||!t)return[];const r=[];return(t.idRol===1||t.idRol===2||t.idRol===3)&&(e.idEstado===1&&(r.push({type:"respond",label:"Responder"}),r.push({type:"cancel",label:"Cancelar"}),(t.idRol===1||t.idRol===2)&&r.push({type:"delegate",label:"Asignar"})),e.idEstado===2&&(r.push({type:"respond",label:"Responder"}),r.push({type:"cancel",label:"Cancelar"}),(t.idRol===1||t.idRol===2)&&r.push({type:"reassign",label:"Reasignar"}))),r},X_=(e,t=!1)=>{if(t)return"Procesando...";switch(e){case"respond":return"Enviar Respuesta";case"cancel":return"Cancelar Ticket";case"delegate":return"Asignar";case"reassign":return"Reasignar";case"selfassign":return"Autoasignar y Responder";default:return"Procesar"}},Z_=(e,t,r,n)=>{if(n)return!1;switch(e){case"respond":case"cancel":case"selfassign":return t.trim().length>0;case"delegate":case"reassign":return r.length>0;default:return!1}},eS=(e,t)=>{if((t==null?void 0:t.idEstado)===5)return"Motivo de cancelación:";switch(e){case"cancel":return"Motivo de cancelación:";case"respond":case"selfassign":default:return"Su respuesta:"}},tS=e=>{switch(e){case"cancel":return"Ingrese el motivo por el cual se cancela este ticket...";case"respond":case"selfassign":default:return"Ingrese su respuesta aquí..."}},rS=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null),s=async()=>{try{n(!0),i(null);const{data:a,error:l}=await P.from("usuarios").select("*").order("idUsuario",{ascending:!1});if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching users:",a)}finally{n(!1)}};return w.useEffect(()=>{s()},[]),{users:e,loading:r,error:o,refetch:s}},cc=({selectedUser:e,onUserSelect:t,placeholder:r="Seleccionar usuario...",disabled:n=!1,allowedRoles:o=[2,3],customFilter:i=null})=>{const[s,a]=w.useState(!1),[l,c]=w.useState(""),[u,d]=w.useState([]),[h,v]=w.useState({top:0,left:0,width:0}),y=w.useRef(null),x=w.useRef(null),{users:_}=rS();w.useEffect(()=>{let S=_.filter(j=>o.includes(j.idRol));i&&(S=S.filter(i)),l&&(S=S.filter(j=>j.nombre.toLowerCase().includes(l.toLowerCase()))),d(S)},[_,l,o,i]),w.useEffect(()=>{const S=$=>{y.current&&!y.current.contains($.target)&&a(!1)},j=()=>{s&&m()},I=()=>{s&&m()};return document.addEventListener("mousedown",S),window.addEventListener("resize",j),window.addEventListener("scroll",I,!0),()=>{document.removeEventListener("mousedown",S),window.removeEventListener("resize",j),window.removeEventListener("scroll",I,!0)}},[s]);const m=()=>{if(x.current){const S=x.current.getBoundingClientRect();v({top:S.bottom+window.scrollY,left:S.left+window.scrollX,width:S.width})}},g=S=>{t(S.idUsuario),a(!1),c("")},p=()=>{n||(s||m(),a(!s))},k=S=>{c(S.target.value),s||(m(),a(!0))},E=()=>{if(e){const S=_.find(j=>j.idUsuario===parseInt(e));return S?S.nombre:""}return l||""},C=()=>e&&!s?"":r;return f.jsxs(nS,{ref:y,children:[f.jsxs(oS,{ref:x,children:[f.jsx(iS,{type:"text",value:E(),onChange:k,onClick:p,placeholder:C(),disabled:n,$hasValue:!!e}),f.jsx(sS,{$isOpen:s,$disabled:n,onClick:p,children:"▼"})]}),s&&!n&&f.jsx(aS,{$top:h.top,$left:h.left,$width:h.width,children:u.length>0?u.map(S=>f.jsx(lS,{onClick:()=>g(S),$selected:e===S.idUsuario.toString(),children:S.nombre},S.idUsuario)):f.jsx(cS,{children:l?"No se encontraron usuarios":"No hay usuarios disponibles"})})]})},nS=b.div`
  position: relative;
  width: 100%;
  z-index: 1000;
`,oS=b.div`
  position: relative;
  display: flex;
  align-items: center;
`,iS=b.input`
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
`,sS=b.div`
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
`,aS=b.ul`
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
`,lS=b.li`
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
`,cS=b.li`
  padding: 0.75rem;
  color: #6c757d;
  font-style: italic;
  text-align: center;
  background: #f8f9fa;
`,zf=({ticket:e,mode:t,currentUser:r,modalState:n})=>{if(t==="rating")return f.jsxs(F_,{children:[f.jsx(M_,{children:"¿Cómo calificarías el servicio?"}),f.jsx(B_,{children:Array.from({length:3},(i,s)=>f.jsx(q_,{type:"button",$filled:s<n.calificacion,onClick:()=>n.setCalificacion(s+1),children:s<n.calificacion?"★":"☆"},s))}),f.jsxs(W_,{children:[f.jsx(V_,{children:"Comentario adicional (opcional):"}),f.jsx(H_,{value:n.comentario,onChange:i=>n.setComentario(i.target.value),placeholder:"Comparte tu experiencia con el servicio...",rows:3})]})]});if(t!=="attend")return null;const o=Y_(e,r);return f.jsxs(f.Fragment,{children:[o.length>0&&f.jsx(R_,{children:o.map(i=>f.jsx(A_,{$active:n.actionType===i.type,onClick:()=>n.handleActionChange(i.type),children:i.label},i.type))}),f.jsx(uS,{actionType:n.actionType,ticket:e,modalState:n})]})},uS=({actionType:e,ticket:t,modalState:r})=>{switch(e){case"respond":case"selfassign":case"cancel":return f.jsxs(I_,{children:[f.jsx(O_,{children:eS(e,t)}),f.jsx(L_,{value:r.respuesta,onChange:n=>r.setRespuesta(n.target.value),placeholder:tS(e),rows:6})]});case"delegate":return f.jsxs(Rf,{children:[f.jsx(Af,{children:"Seleccionar usuario para delegar:"}),f.jsx(cc,{selectedUser:r.selectedUser,onUserSelect:n=>r.setSelectedUser(n),placeholder:"Seleccione un usuario...",allowedRoles:[2,3],customFilter:n=>{var s,a,l,c,u;if(n.idUsuario===((s=r.currentUser)==null?void 0:s.id))return!1;const o=(l=(a=t.atenciones)==null?void 0:a[0])==null?void 0:l.idUsuario;if(o&&n.idUsuario===o)return!1;const i=(u=(c=t.ticket_tokens)==null?void 0:c.find(d=>d.bActivo))==null?void 0:u.idUsuario;return!(i&&n.idUsuario===i)}})]});case"reassign":return f.jsxs(Rf,{children:[f.jsx(Af,{children:"Seleccionar usuario para reasignar:"}),f.jsx(cc,{selectedUser:r.selectedUser,onUserSelect:n=>r.setSelectedUser(n),placeholder:"Seleccione un usuario...",allowedRoles:[2,3],customFilter:n=>{var s,a,l,c,u;if(n.idUsuario===((s=r.currentUser)==null?void 0:s.id))return!1;const o=(l=(a=t.atenciones)==null?void 0:a[0])==null?void 0:l.idUsuario;if(o&&n.idUsuario===o)return!1;const i=(u=(c=t.ticket_tokens)==null?void 0:c.find(d=>d.bActivo))==null?void 0:u.idUsuario;return!(i&&n.idUsuario===i)}})]});default:return null}},dS=({ticket:e,usuarioQueAtendio:t})=>{var s;if(!e)return null;const r=e.atenciones&&e.atenciones.length>0&&e.atenciones[0].respuesta,n=e.atenciones&&e.atenciones.length>0,o=n?e.atenciones[0]:null,i=((s=o==null?void 0:o.usuarios)==null?void 0:s.nombre)||(t==null?void 0:t.nombre)||"No disponible";return f.jsxs(N_,{children:[r&&f.jsxs(f.Fragment,{children:[f.jsx(U_,{children:"Respuesta:"}),f.jsx(z_,{children:o.respuesta})]}),(n||e.idEstado===5||e.idEstado===3)&&f.jsxs(D_,{children:[f.jsxs(Of,{children:[f.jsx(Lf,{children:e.idEstado===5?"Cancelado por:":"Atendido por:"}),f.jsx(Nf,{children:i})]}),f.jsxs(Of,{children:[f.jsx(Lf,{children:e.idEstado===5?"Fecha de cancelación:":"Fecha de atención:"}),f.jsx(Nf,{children:(()=>{var c,u;const a=e.idEstado===5?5:3,l=(u=(c=e.seguimientos)==null?void 0:c.find(d=>d.idEstado===a))==null?void 0:u.fecha;return l?Ye(l):"No disponible"})()})]})]}),e.idEstado===4&&(o==null?void 0:o.calificacion)&&o.calificacion>0&&f.jsx(If,{children:f.jsxs("div",{children:[f.jsxs("div",{style:{marginBottom:"0.5rem"},children:[f.jsx("strong",{children:"Calificación del empleado:"}),f.jsxs("span",{style:{marginLeft:"0.5rem",fontSize:"1.2rem",color:"#ffc107"},children:["★".repeat(o.calificacion),"☆".repeat(3-o.calificacion)]}),f.jsxs("span",{style:{marginLeft:"0.25rem",fontSize:"0.9rem",color:"#6c757d"},children:["(",o.calificacion,"/3)"]})]}),o.comentario&&o.comentario.trim()&&f.jsxs("div",{style:{marginTop:"0.5rem"},children:[f.jsx("strong",{children:"Comentarios del empleado:"}),f.jsxs("div",{style:{marginTop:"0.25rem",padding:"0.5rem",background:"#f8f9fa",borderRadius:"4px",fontStyle:"italic",color:"#495057"},children:["“",o.comentario,"”"]})]})]})}),e.idEstado===5&&f.jsxs(If,{style:{background:"#fff3cd",borderLeftColor:"#ffc107",color:"#856404"},children:[f.jsx("strong",{children:"Estado:"})," Este ticket ha sido cancelado."]})]})},fS=({mode:e,actionType:t,loading:r,onSubmit:n,respuesta:o,selectedUser:i,calificacion:s})=>{const a=e==="attend"&&t,l=e==="rating",c=d=>{d.preventDefault(),n==null||n()},u=s>=1&&s<=3;return f.jsxs(G_,{children:[a&&f.jsx(Uf,{onClick:c,disabled:!Z_(t,o,i,r),children:X_(t,r)}),l&&f.jsx(Uf,{onClick:c,disabled:!u||r,children:r?"Enviando...":"Enviar Calificación"})]})},Rg=({ticket:e,isOpen:t,onClose:r,mode:n="view",onSubmit:o,onDelegate:i,onReassign:s,onSelfAssign:a,loading:l=!1,usuarioQueAtendio:c=null,currentUser:u=null})=>{var _;const d=p_(t,r),h=m_({onSubmit:o,onDelegate:i,onReassign:s,onSelfAssign:a});if(!t||!e)return null;const v=()=>{if(n==="rating"&&o){o({calificacion:d.calificacion,comentario:d.comentario});return}h.handleSubmit(d.actionType,d.respuesta,d.selectedUser)&&d.resetState()},y=n==="response"||n==="view"&&(e.idEstado===3||e.idEstado===4||e.idEstado===5)||e.atenciones&&e.atenciones.length>0&&e.atenciones[0].respuesta,x=n==="rating"||n==="view"&&e.idEstado===3&&(u==null?void 0:u.tipo)==="employee"&&((_=e.atenciones)==null?void 0:_[0])&&(!e.atenciones[0].calificacion||e.atenciones[0].calificacion===0);return f.jsx(g_,{children:f.jsxs(v_,{children:[f.jsx(K_,{ticket:e,onClose:d.handleClose}),f.jsxs(b_,{children:[f.jsx(J_,{ticket:e}),f.jsx(Q_,{ticket:e,mode:n,currentUser:u}),y&&f.jsx(dS,{ticket:e,usuarioQueAtendio:c}),x?f.jsx(zf,{ticket:e,mode:"rating",currentUser:u,modalState:d}):y?null:f.jsx(zf,{ticket:e,mode:n,currentUser:u,modalState:d})]}),f.jsx(fS,{mode:x?"rating":n,actionType:d.actionType,loading:l,onSubmit:v,respuesta:d.respuesta,selectedUser:d.selectedUser,onClose:d.handleClose,calificacion:d.calificacion})]})})},hS=()=>{const{user:e,logout:t}=Wn(),[r,n]=w.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[o,i]=w.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[s,a]=w.useState("sinAtender"),[l,c]=w.useState({show:!1,mode:"view",ticket:null}),[u,d]=w.useState(null),[h,v]=w.useState(null),{asignaciones:y,loading:x,getResponsable:_}=Tg(),{tickets:m,loading:g,refetchTickets:p}=kb(e,y),k=bb(m),{crearAtencion:E,delegarTicket:C,cancelarTicket:S,reasignarTicket:j,autoasignarTicket:I,loading:$}=_b(e),{obtenerUsuarioQueAtendio:q}=jg(),{plantas:F}=kg(),{tipos:De}=_g(),{prioridades:Wt}=Sg();w.useEffect(()=>{e&&p(r)},[r,e,p]);const xr=(z,oe)=>{i(Wr=>({...Wr,[z]:oe}))},yt=()=>{n(o)},Ge=()=>{const z={planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"};i(z),n(z)},R=z=>{c({show:!0,mode:"attend",ticket:z})},O=async z=>{c({show:!0,mode:"response",ticket:z});try{const oe=await q(z.idTicket,z.idEstado);d(oe)}catch(oe){console.error("Error obteniendo usuario que atendió:",oe),d(null)}},L=()=>{c({show:!1,mode:"view",ticket:null}),d(null)},V=async(z,oe="respond")=>{let Wr;try{oe==="respond"?Wr=await E(l.ticket.idTicket,e.id,z):oe==="cancel"&&(Wr=await S(l.ticket.idTicket,e.id,z)),Wr.success?(L(),p(r)):alert("Error al procesar la solicitud: "+Wr.error)}catch(Ag){alert("Error inesperado: "+Ag.message)}},H=async z=>{const oe=await C(l.ticket.idTicket,e.id,z);oe.success?(L(),p(r)):alert("Error al delegar el ticket: "+oe.error)},Ke=async z=>{if(!l.ticket)return;const oe=await j(l.ticket.idTicket,z);oe.success?(L(),p(r)):alert("Error al re-asignar el ticket: "+oe.error)},be=async()=>{if(!l.ticket)return;const z=await I(l.ticket.idTicket);z.success||alert("Error al autoasignarse el ticket: "+z.error)},U=z=>{v(h===z?null:z)},G=m.filter(z=>{if((e==null?void 0:e.idRol)===3||!s)return!0;switch(s){case"sinAtender":return z.idEstado===1;case"reasignados":return z.idEstado===2;case"atendidos":return z.idEstado===3;case"cerrados":return z.idEstado===4;case"cancelados":return z.idEstado===5;default:return!0}}),ot=z=>{a(z)},kr=z=>{switch(z){case 3:return"#E06363";case 2:return"#E0C563";case 1:return"#636EE0";default:return"#6c757d"}},Tt=z=>Ye(z);return(e==null?void 0:e.idRol)===2&&x||g?f.jsx(Df,{children:f.jsx(mS,{children:"Cargando dashboard..."})}):f.jsxs(Df,{children:[f.jsxs(pS,{children:[f.jsx(Sb,{user:e,onLogout:t}),(e==null?void 0:e.idRol)!==3&&f.jsx(jb,{stats:k,statsFilter:s,onStatsFilterChange:ot}),f.jsx(Lb,{tempFilters:o,onTempFilterChange:xr,onApplyFilters:yt,onClearFilters:Ge,plantas:F,tipos:De,prioridades:Wt})]}),f.jsx(d_,{tickets:G,mode:"admin",onAtender:R,onVerRespuesta:O,getResponsable:_,formatDate:Tt,getPriorityColor:kr,expandedTicketId:h,onToggleExpand:U,currentUser:e}),f.jsx(Rg,{ticket:l.ticket,isOpen:l.show,onClose:L,mode:l.mode,onSubmit:V,onDelegate:H,onReassign:Ke,onSelfAssign:be,currentUser:e,loading:$,usuarioQueAtendio:u})]})},Df=b.div`
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
`,pS=b.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,mS=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: var(--color-gray);
`,gS=e=>{const[t,r]=w.useState([]),[n,o]=w.useState(!1),[i,s]=w.useState(null);w.useEffect(()=>{(async()=>{if(e){o(!0),s(null);try{const{data:h,error:v}=await P.from("tickets").select(`
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
          `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(v)throw v;r(h||[])}catch(h){s(h.message),console.error("Error fetching employee tickets:",h)}finally{o(!1)}}})()},[e]);const a=async()=>{if(e){o(!0),s(null);try{const{data:d,error:h}=await P.from("tickets").select(`
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
        `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(h)throw h;r(d||[])}catch(d){s(d.message),console.error("Error fetching employee tickets:",d)}finally{o(!1)}}},l=async(d,h,v="")=>{try{o(!0),s(null);const{data:y,error:x}=await P.from("atenciones").select("*").eq("idTicket",d);if(x)throw new Error(`Error consultando atenciones: ${x.message}`);if(!y||y.length===0)throw new Error(`No se encontró ninguna atención previa para el ticket ${d}. El ticket debe haber sido atendido antes de poder calificarlo.`);const{error:_}=await P.from("tickets").update({idEstado:4}).eq("idTicket",d);if(_)throw new Error(`Error actualizando ticket: ${_.message}`);const{error:m}=await P.from("seguimientos").insert({idTicket:d,idEstado:4,fecha:new Date().toISOString()});if(m)throw new Error(`Error insertando seguimiento: ${m.message}`);const g=y[0].idAtencion,{data:p,error:k}=await P.from("atenciones").update({calificacion:h,comentario:v}).eq("idAtencion",g).select();if(k)throw new Error(`Error actualizando atención: ${k.message}`);if(!p||p.length===0)throw new Error("No se pudo actualizar la atención. El registro pudo haber sido modificado por otra transacción.");return await a(),{success:!0,message:"Calificación enviada correctamente"}}catch(y){const x=y.message||"Error desconocido al calificar ticket";return s(x),{success:!1,error:x}}finally{o(!1)}},c=t.filter(d=>!d.atenciones||d.atenciones.length===0),u=t.filter(d=>d.atenciones&&d.atenciones.length>0);return{tickets:t,pendingTickets:c,resolvedTickets:u,loading:n,error:i,refetch:a,calificarTicket:l}},vS=({employeeData:e,onTicketSubmitted:t,onBack:r})=>{const[n,o]=w.useState({idTipoSolicitud:"",descripcion:"",idPrioridad:""}),[i,s]=w.useState({}),{tipos:a,loading:l}=_g(),{prioridades:c,loading:u}=Sg(),{createTicket:d,loading:h}=Jk(),v=(m,g)=>{o(p=>({...p,[m]:g})),i[m]&&s(p=>({...p,[m]:""}))},y=()=>{const m={};return n.idTipoSolicitud||(m.idTipoSolicitud="Debe seleccionar un tipo de solicitud"),n.descripcion.trim()||(m.descripcion="Debe proporcionar una descripción"),n.idPrioridad||(m.idPrioridad="Debe seleccionar una prioridad"),s(m),Object.keys(m).length===0},x=async m=>{if(m.preventDefault(),!y())return;const g={idEmpleado:e.idEmpleado,idTipoSolicitud:parseInt(n.idTipoSolicitud),descripcion:n.descripcion.trim(),idPrioridad:parseInt(n.idPrioridad)},p=await d(g);p.success&&t(p.ticket)};return l||u?f.jsx(Ff,{children:f.jsx(yS,{children:"Cargando formulario..."})}):f.jsx(Ff,{children:f.jsxs(ES,{children:[f.jsxs(CS,{children:[r&&f.jsx(SS,{onClick:r,type:"button",title:"Volver",children:"← Volver"}),f.jsx(TS,{children:"Crear Nueva Solicitud"})]}),f.jsxs(wS,{onSubmit:x,children:[f.jsxs(xS,{children:[f.jsxs(Mf,{children:[f.jsx(Wa,{children:"Tipo de Solicitud *"}),f.jsxs(Bf,{value:n.idTipoSolicitud,onChange:m=>v("idTipoSolicitud",m.target.value),hasError:i.idTipoSolicitud,children:[f.jsx("option",{value:"",children:"Seleccione un tipo..."}),a.sort((m,g)=>m.idTipoSolicitud-g.idTipoSolicitud).map(m=>f.jsx("option",{value:m.idTipoSolicitud,children:m.tipoSolicitud},m.idTipoSolicitud))]}),i.idTipoSolicitud&&f.jsx(Va,{children:i.idTipoSolicitud})]}),f.jsxs(Mf,{children:[f.jsx(Wa,{children:"Prioridad *"}),f.jsxs(Bf,{value:n.idPrioridad,onChange:m=>v("idPrioridad",m.target.value),hasError:i.idPrioridad,children:[f.jsx("option",{value:"",children:"Seleccione una prioridad..."}),c.map(m=>f.jsx("option",{value:m.idPrioridad,children:m.prioridad},m.idPrioridad))]}),i.idPrioridad&&f.jsx(Va,{children:i.idPrioridad})]})]}),f.jsxs(kS,{children:[f.jsx(Wa,{children:"Descripción del Problema *"}),f.jsx(bS,{rows:"3",placeholder:"Describe detalladamente tu solicitud o problema...",value:n.descripcion,onChange:m=>v("descripcion",m.target.value),hasError:i.descripcion}),i.descripcion&&f.jsx(Va,{children:i.descripcion})]}),f.jsx(_S,{type:"submit",disabled:h,children:h?"📋 Creando ticket...":"📋 Crear Ticket"})]})]})})},Ff=b.div`
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
`,yS=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-gray);
  font-size: 1.1rem;
`,wS=b.form`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,xS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`,kS=b.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,Mf=b.div`
  display: flex;
  flex-direction: column;
`,Wa=b.label`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Bf=b.select`
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
`,bS=b.textarea`
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
`,Va=b.span`
  color: var(--color-danger);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`,_S=b.button`
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
`,SS=b.button`
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
`,ES=b.div`
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
`,CS=b.div`
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
`,TS=b.h2`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`,jS=({employeeData:e,onLogout:t})=>{var H,Ke,be;const{logout:r}=Wn(),[n,o]=w.useState("pending"),[i,s]=w.useState(!1),[a,l]=w.useState(null),[c,u]=w.useState(!0),[d,h]=w.useState(null),[v,y]=w.useState(!1),[x,_]=w.useState(null),[m,g]=w.useState(null),[p,k]=w.useState(!1),{buscarEmpleadoPorCodigo:E}=Eg(),{esquemas:C}=bg(),{getResponsable:S}=Tg(),{obtenerUsuarioQueAtendio:j}=jg(),{pendingTickets:I,resolvedTickets:$,loading:q,error:F,refetch:De,calificarTicket:Wt}=gS(a==null?void 0:a.idEmpleado),xr=c||q;w.useEffect(()=>{(async()=>{if(e!=null&&e.codigoEmpleado){u(!0);try{const G=await E(e.codigoEmpleado);G.success&&G.empleado?l(G.empleado):l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}catch(G){console.error("Error al buscar empleado:",G),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}finally{u(!1)}}})()},[e,E]);const yt=U=>{switch(U){case 1:return"#dc3545";case 2:return"#ffc107";case 3:return"#28a745";default:return"#6c757d"}},Ge=U=>Ye(U),R=U=>{h(d===U?null:U)},O=async U=>{if(_(U),y(!0),g(null),U.idEstado===3||U.idEstado===5||U.atenciones&&U.atenciones.length>0)try{const G=await j(U.idTicket,U.idEstado);g(G)}catch(G){console.error("Error obteniendo usuario que atendió/canceló:",G),g(null)}},L=()=>{s(!1),De()},V=()=>{r(),t&&t()};return i?f.jsx(vS,{employeeData:a||e,onTicketSubmitted:L,onLogout:V,onBack:()=>s(!1)}):f.jsxs(PS,{children:[f.jsxs($S,{children:[f.jsxs(AS,{children:[f.jsxs(IS,{children:[f.jsx(LS,{children:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}),f.jsxs(NS,{children:["Código:"," ",(a==null?void 0:a.codigoEmpleado)||(e==null?void 0:e.codigoEmpleado)," ","| Planta:"," ",((H=a==null?void 0:a.plantas)==null?void 0:H.planta)||(e==null?void 0:e.planta)," | Esquema:"," ",((Ke=C.find(U=>U.idEsquemaPago===((a==null?void 0:a.idEsquemaPago)||(e==null?void 0:e.idEsquemaPago))))==null?void 0:Ke.esquemaPago)||"No configurado"]})]}),f.jsx(OS,{children:f.jsx(US,{onClick:V,children:"Cerrar Sesión"})})]}),f.jsxs(zS,{children:[f.jsxs(qf,{$active:n==="pending",onClick:()=>{o("pending"),h(null)},children:["Tickets Pendientes (",I.length,")"]}),f.jsxs(qf,{$active:n==="resolved",onClick:()=>{o("resolved"),h(null)},children:["Tickets Resueltos (",$.length,")"]})]})]}),f.jsx(RS,{children:f.jsx(DS,{children:f.jsx(FS,{children:xr?f.jsx(qS,{children:"Cargando tickets..."}):F?f.jsxs(WS,{children:["Error al cargar tickets: ",F]}):f.jsx(f.Fragment,{children:n==="pending"?f.jsx(f.Fragment,{children:I.length===0?f.jsxs(Wf,{children:[f.jsx(Vf,{children:"📋"}),f.jsx(Hf,{children:"No tienes tickets pendientes"}),f.jsx(Gf,{children:"Aquí aparecerán los tickets que hayas creado y aún no han sido atendidos."})]}):I.map(U=>f.jsx(lc,{ticket:U,mode:"employee",formatDate:Ge,getPriorityColor:yt,getResponsable:S,isResolved:!1,isExpanded:d===U.idTicket,onToggleExpand:R,onShowDetails:O},U.idTicket))}):f.jsx(f.Fragment,{children:$.length===0?f.jsxs(Wf,{children:[f.jsx(Vf,{children:"✅"}),f.jsx(Hf,{children:"No tienes tickets resueltos"}),f.jsx(Gf,{children:"Aquí aparecerán los tickets que hayan sido atendidos."})]}):$.map(U=>f.jsx(lc,{ticket:U,mode:"employee",formatDate:Ge,getPriorityColor:yt,getResponsable:S,isResolved:!0,isExpanded:d===U.idTicket,onToggleExpand:R,onShowDetails:O},U.idTicket))})})})})}),f.jsx(MS,{children:f.jsx(BS,{onClick:()=>s(!0),children:"+ Crear Nuevo Ticket"})}),f.jsx(Rg,{ticket:x,isOpen:v,onClose:()=>y(!1),mode:(x==null?void 0:x.idEstado)===3&&((be=x==null?void 0:x.atenciones)!=null&&be[0])&&(!x.atenciones[0].calificacion||x.atenciones[0].calificacion===0)?"rating":"view",onSubmit:async U=>{if(U.calificacion){k(!0);try{const G=await Wt(x.idTicket,U.calificacion,U.comentario||"");G.success?(alert("Calificación enviada exitosamente. El ticket ha sido cerrado."),y(!1)):alert(`Error al enviar la calificación: ${G.error}`)}catch(G){console.error("Error enviando calificación:",G),alert("Error al enviar la calificación. Inténtalo de nuevo.")}finally{k(!1)}}},loading:p,usuarioQueAtendio:m,currentUser:{tipo:"employee",idUsuario:(a==null?void 0:a.idEmpleado)||(e==null?void 0:e.idEmpleado),nombre:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}})]})},PS=b.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
`,$S=b.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`,RS=b.div`
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
`,AS=b.header`
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
`,IS=b.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,OS=b.div`
  display: flex;
  align-items: center;
`,LS=b.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
`,NS=b.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,US=b.button`
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
`,zS=b.div`
  display: flex;
  background: #e9ecef;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`,DS=b.div`
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 30vw;
`,qf=b.button`
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
`,FS=b.section`
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
`,MS=b.div`
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
`,BS=b.button`
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
`,qS=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  min-height: 300px;
`,WS=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
  min-height: 300px;
`,Wf=b.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  min-height: 300px;
`,Vf=b.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Hf=b.h3`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`,Gf=b.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,VS=()=>{const{token:e}=Uy(),t=Ko(),[r,n]=w.useState(null),[o,i]=w.useState(!0),[s,a]=w.useState(""),[l,c]=w.useState(null),[u,d]=w.useState(!1),[h,v]=w.useState("responder"),[y,x]=w.useState(""),[_,m]=w.useState([]),[g,p]=w.useState(!1),[k,E]=w.useState(""),[C,S]=w.useState(!1);return w.useEffect(()=>{(async()=>{try{const{data:I,error:$}=await P.from("usuarios").select("idUsuario, nombre, correo").eq("idRol",3).order("nombre");if($)throw $;m(I||[])}catch(I){console.error("Error cargando usuarios:",I)}})()},[]),w.useEffect(()=>{e&&(async()=>{if(!e){c("Token no encontrado en la URL"),i(!1);return}try{i(!0);const I=await HS(e);n(I)}catch(I){console.error("Error cargando ticket:",I),c(I.message)}finally{i(!1)}})()},[e]),{ticket:r,loading:o,response:s,setResponse:a,error:l,setError:c,success:u,setSuccess:d,actionType:h,setActionType:v,selectedUser:y,setSelectedUser:x,users:_,isSubmitting:g,setIsSubmitting:p,responseMessage:k,setResponseMessage:E,isSubmitted:C,setIsSubmitted:S,token:e,navigate:t}},HS=async e=>{const{data:t,error:r}=await P.from("ticket_tokens").select("*").eq("token",e).eq("bActivo",!0).gt("fecha_expiracion",new Date().toISOString()).single();if(r||!t)throw(r==null?void 0:r.code)==="PGRST116"?new Error("Enlace inválido, expirado o ya utilizado. Este ticket puede haber sido reasignado a otro usuario."):new Error("Enlace inválido, expirado o ya utilizado");const n=t.idTicket||t.id_ticket,{data:o,error:i}=await P.from("tickets").select(`
      *,
      empleados (nombre, codigoEmpleado, idPlanta, plantas (planta)),
      tiposSolicitud (tipoSolicitud),
      prioridades (prioridad),
      estados (estado)
    `).eq("idTicket",n).single();if(i||!o)throw new Error("Ticket no encontrado");const s=t.idUsuario||t.id_usuario,{data:a}=await P.from("usuarios").select("idUsuario, nombre, correo, idRol").eq("idUsuario",s).single(),l={...t,tickets:o,usuarios:a};if(l.tickets.idEstado!==1&&l.tickets.idEstado!==2)throw new Error("Este ticket ya no está disponible para responder");const{data:c,error:u}=await P.from("seguimientos").select("fecha").eq("idTicket",l.tickets.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();return c&&!u&&(l.tickets.fechaCreacion=c.fecha),l};var GS={VITE_APP_SUPABASE_URL:"https://mdmknxkztpimoedhdjci.supabase.co",VITE_APP_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A",VITE_APP_BASE_URL:"https://andresdramos.github.io",BASE_URL:"/ventanilla/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const KS=(e,t,r)=>({handleSubmitResponse:async(s,a,l,c)=>{if(!s.trim()){l("Por favor escribe una respuesta");return}try{a(!0),l(null);const{error:u}=await P.from("atenciones").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,respuesta:s.trim()});if(u)throw new Error(`Error creando atención: ${u.message}`);const{error:d}=await P.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:3});if(d)throw new Error(`Error creando seguimiento: ${d.message}`);const{error:h}=await P.from("tickets").update({idEstado:3}).eq("idTicket",e.tickets.idTicket);if(h)throw new Error(`Error actualizando ticket: ${h.message}`);const{error:v}=await P.from("ticket_tokens").update({bActivo:!1}).eq("token",t);if(v)throw new Error(`Error desactivando token: ${v.message}`);const{error:y}=await P.from("delegaciones").update({bActivo:!1}).eq("idTicket",e.tickets.idTicket).eq("idUsuario",e.idUsuario);c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){console.error("Error enviando respuesta:",u),l(u.message)}finally{a(!1)}},handleReasignTicket:async(s,a,l,c)=>{if(!s){alert("Seleccione un usuario para reasignar");return}try{a(!0);const{error:u}=await P.from("ticket_tokens").update({bActivo:!1}).eq("token",t);if(u)throw new Error(`Error desactivando token: ${u.message}`);const{data:d,error:h}=await P.from("tickets").select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `).eq("idTicket",e.tickets.idTicket).single();if(h)throw new Error(`Error obteniendo ticket: ${h.message}`);const{data:v,error:y}=await P.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",s).single();if(y)throw new Error(`Error obteniendo usuario: ${y.message}`);const{error:x}=await P.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:2});if(x)throw new Error(`Error creando seguimiento: ${x.message}`);const{error:_}=await P.from("tickets").update({idEstado:2}).eq("idTicket",e.tickets.idTicket);if(_)throw new Error(`Error actualizando ticket: ${_.message}`);const m=crypto.randomUUID(),g=new Date;g.setDate(g.getDate()+7);const{error:p}=await P.from("ticket_tokens").insert({token:m,idTicket:e.tickets.idTicket,idUsuario:s,fecha_expiracion:g.toISOString(),bActivo:!0});if(p)throw new Error(`Error creando token: ${p.message}`);try{const E=`https://andresdramos.github.io/ventanilla/ticket/${m}`;console.log("🔄 Enviando notificación de reasignación desde ticket-response a:",v.nombre,v.correo);const{data:C,error:S}=await P.from("seguimientos").select("fecha").eq("idTicket",d.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();let j="Fecha no disponible";C&&!S&&(j=new Date(C.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}));const I=bu({ticket:d,usuario:v,directLink:E,fechaCreacion:j,tipo:"reasignado"}),$=GS.VITE_EMAIL_ENDPOINT||"https://cors-anywhere.herokuapp.com/http://172.17.201.2/SendEmail.aspx";console.log("📧 Enviando email a endpoint:",$);const F=await(await fetch($,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({destinatario:v.correo,asunto:`Ticket Reasignado para Atención - #${d.idTicket}`,mensaje:I})})).json();console.log("📨 Resultado de email de reasignación:",F),F.success?console.log("✅ Email de reasignación enviado exitosamente"):console.warn("⚠️ Email no enviado en reasignación:",F.error)}catch(k){console.warn("⚠️ Error en sistema de notificaciones de reasignación:",k.message)}l("Ticket reasignado exitosamente. Se ha enviado una notificación al usuario asignado."),c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){throw console.error("Error reasignando ticket:",u),new Error("Error al reasignar el ticket: "+u.message)}finally{a(!1)}},handleCancelTicket:async(s,a,l,c)=>{if(!s.trim()){alert("Debe ingresar el motivo de cancelación");return}try{a(!0),await P.from("atenciones").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,respuesta:s.trim()}),await P.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:5}),await P.from("tickets").update({idEstado:5}).eq("idTicket",e.tickets.idTicket),await P.from("ticket_tokens").update({bActivo:!1}).eq("token",t),l("Ticket cancelado exitosamente"),c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){throw console.error("Error cancelando ticket:",u),new Error("Error al cancelar el ticket: "+u.message)}finally{a(!1)}}}),Ti=b.div`
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
`,JS=b.div`
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
`,QS=b.div`
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
`,YS=b.div`
  flex: 1;
`,XS=b.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Kf=b.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,ZS=b.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,eE=b.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,tE=b.div`
  margin-bottom: 0.5rem;
`,rE=b.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,nE=b.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  display: inline;
`,oE=b.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,Gi=b.h3`
  margin: 0 0 10px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,iE=b.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,sE=b.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,aE=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,Ha=b.button`
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
`,Jf=b.textarea`
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
`,Qf=b.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
  color: ${e=>e.$isNearLimit?"#ef4444":"#6b7280"};
`;b.select`
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
`;const lE=b.div`
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
`,cE=b.div`
  padding: 20px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,uE=b.button`
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
`,dE=b.p`
  text-align: center;
  margin: 10px 0 0 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,fE=b.div`
  background: #e5e7eb;
  padding: 15px 20px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`,hE=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`,pE=b.p`
  margin: 0;
  color: #374151;
  font-size: 13px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,mE=b.button`
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
`,gE=b.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`,vE=b.div`
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
`,yE=b.div`
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
`,wE=b.div`
  font-size: 64px;
  margin-bottom: 20px;
`,xE=b.h2`
  color: #dc2626;
  margin: 0 0 15px 0;
  font-size: 24px;
`,kE=b.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,bE=b.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,_E=b.div`
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
`,SE=b.div`
  font-size: 64px;
  margin-bottom: 20px;
`,EE=b.h2`
  color: #059669;
  margin: 0 0 15px 0;
  font-size: 24px;
`,CE=b.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,TE=b.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,jE=({ticket:e})=>{const{adminAutoLogin:t}=Wn(),r=async()=>{const n=e.usuarios;if(n.idRol===2)try{(await t(n)).success?setTimeout(()=>{window.open("/ventanilla/admin","_blank")},200):(console.warn("⚠️ Auto-login falló, abriendo sin autenticación"),window.open("/ventanilla/admin","_blank"))}catch(o){console.error("❌ Error en auto-login:",o),window.open("/ventanilla/admin","_blank")}else window.open("/ventanilla/admin","_blank")};return f.jsxs(QS,{children:[f.jsx(YS,{children:f.jsxs(XS,{children:["Ticket #",e.tickets.idTicket]})}),f.jsx(mE,{onClick:r,title:"Ir al panel de administrador",children:"Panel Admin"})]})},PE=({ticket:e})=>{var t,r,n,o,i;return f.jsxs(f.Fragment,{children:[f.jsxs(Kf,{children:[f.jsx(ZS,{children:f.jsxs(eE,{children:[((t=e.tickets.empleados)==null?void 0:t.nombre)||"No especificado"," ","(",f.jsx("span",{children:((r=e.tickets.empleados)==null?void 0:r.codigoEmpleado)||"No especificado"}),") - ",((o=(n=e.tickets.empleados)==null?void 0:n.plantas)==null?void 0:o.planta)||"No especificada"]})}),f.jsxs(tE,{children:[f.jsx(rE,{children:"Fecha de generación:"})," ",f.jsx(nE,{children:Ye(e.tickets.fechaCreacion)})]}),f.jsxs(oE,{children:["Tipo: ",((i=e.tickets.tiposSolicitud)==null?void 0:i.tipoSolicitud)||"No especificado"]})]}),f.jsxs(Kf,{children:[f.jsx(Gi,{children:"Descripción del Problema"}),f.jsx(iE,{children:e.tickets.descripcion})]})]})},$E=(e,t)=>{if(t)return"Procesando...";switch(e){case"responder":return"Enviar Respuesta y Cerrar Ticket";case"reasignar":return"Reasignar Ticket";case"cancelar":return"Cancelar Ticket";default:return"Procesar"}},RE=e=>{switch(e){case"responder":return"Una vez enviada la respuesta, el ticket se marcará como atendido.";case"reasignar":return"El ticket será reasignado al usuario seleccionado.";case"cancelar":return"El ticket será marcado como cancelado con el motivo especificado.";default:return""}},AE=e=>{switch(e){case"reasignar":return"¡Ticket Reasignado!";case"cancelar":return"¡Ticket Cancelado!";default:return"¡Respuesta Enviada!"}},IE=({ticketData:e,actions:t})=>{var x;const{actionType:r,setActionType:n,response:o,setResponse:i,selectedUser:s,setSelectedUser:a,isSubmitting:l,error:c,ticket:u}=e,d=(x=u==null?void 0:u.usuarios)==null?void 0:x.idRol,v=(()=>{const _=["responder"];return d===2?["responder","reasignar","cancelar"]:d===3?["responder"]:_})();w.useEffect(()=>{v.includes(r)||n(v[0]||"responder")},[r,v,n]);const y=async()=>{try{switch(r){case"responder":await t.handleSubmitResponse(o,e.setIsSubmitting,e.setError,e.setSuccess);break;case"reasignar":await t.handleReasignTicket(s,e.setIsSubmitting,e.setResponseMessage,e.setIsSubmitted);break;case"cancelar":await t.handleCancelTicket(o,e.setIsSubmitting,e.setResponseMessage,e.setIsSubmitted);break;default:throw new Error("Acción no válida")}}catch(_){e.setError(_.message)}};return f.jsxs(f.Fragment,{children:[f.jsxs(sE,{children:[f.jsxs(aE,{children:[v.includes("responder")&&f.jsx(Ha,{$selected:r==="responder",onClick:()=>n("responder"),children:"Responder"}),v.includes("reasignar")&&f.jsx(Ha,{$selected:r==="reasignar",onClick:()=>n("reasignar"),children:"Reasignar"}),v.includes("cancelar")&&f.jsx(Ha,{$selected:r==="cancelar",onClick:()=>n("cancelar"),children:"Cancelar"})]}),f.jsx(OE,{actionType:r,response:o,setResponse:i,selectedUser:s,setSelectedUser:a,isSubmitting:l})]}),c&&f.jsxs(lE,{children:["❌ ",c]}),f.jsxs(cE,{children:[f.jsx(uE,{onClick:y,disabled:l||r==="responder"&&!o.trim()||r==="reasignar"&&!s||r==="cancelar"&&!o.trim(),children:$E(r,l)}),f.jsx(dE,{children:RE(r)})]})]})},OE=({actionType:e,response:t,setResponse:r,selectedUser:n,setSelectedUser:o,isSubmitting:i})=>{switch(e){case"responder":return f.jsxs("div",{children:[f.jsx(Gi,{children:"Tu Respuesta"}),f.jsx(Jf,{value:t,onChange:s=>r(s.target.value),placeholder:"Escribe aquí tu respuesta o solución al problema...",rows:4,disabled:i}),f.jsxs(Qf,{$isNearLimit:t.length>400,children:[t.length,"/500 caracteres"]})]});case"reasignar":return f.jsxs("div",{children:[f.jsx(Gi,{children:"Reasignar a"}),f.jsx(cc,{selectedUser:n,onUserSelect:o,placeholder:"Seleccionar usuario para reasignación...",excludeRoles:[1],disabled:i})]});case"cancelar":return f.jsxs("div",{children:[f.jsx(Gi,{children:"Motivo de cancelación"}),f.jsx(Jf,{value:t,onChange:s=>r(s.target.value),placeholder:"Describe el motivo por el cual se cancela este ticket...",rows:4,disabled:i}),f.jsxs(Qf,{$isNearLimit:t.length>400,children:[t.length,"/500 caracteres"]})]});default:return null}},LE=({ticket:e})=>f.jsx(fE,{children:f.jsx(hE,{children:f.jsxs(pE,{children:["Respondiendo como: ",f.jsx("strong",{children:e.usuarios.nombre})," (",e.usuarios.correo,")"]})})}),NE=({ticketData:e,actions:t})=>f.jsxs(JS,{children:[f.jsx(jE,{ticket:e.ticket}),f.jsx(PE,{ticket:e.ticket}),f.jsx(IE,{ticketData:e,actions:t}),f.jsx(LE,{ticket:e.ticket})]}),UE=()=>f.jsxs(gE,{children:[f.jsx(vE,{}),f.jsx("p",{children:"Cargando ticket..."})]}),zE=({error:e})=>f.jsxs(yE,{children:[f.jsx(wE,{children:"❌"}),f.jsx(xE,{children:"Enlace No Válido"}),f.jsx(kE,{children:e}),f.jsx(bE,{children:"Este enlace puede haber expirado, ya fue utilizado, o el ticket ya no está disponible para responder."})]}),DE=({actionType:e,responseMessage:t})=>{const r=()=>t||"Tu respuesta ha sido registrada exitosamente. El ticket ha sido marcado como atendido.";return f.jsxs(_E,{children:[f.jsx(SE,{children:"✅"}),f.jsx(EE,{children:AE(e)}),f.jsx(CE,{children:r()}),f.jsx(TE,{children:"Esta ventana se cerrará automáticamente en unos segundos..."})]})},FE=()=>{const e=VS(),t=KS(e.ticket,e.token,e.navigate),{loading:r,error:n,success:o,isSubmitted:i,actionType:s,responseMessage:a}=e;return r?f.jsx(Ti,{children:f.jsx(UE,{})}):n?f.jsx(Ti,{children:f.jsx(zE,{error:n})}):o||i?f.jsx(Ti,{children:f.jsx(DE,{actionType:s,responseMessage:a})}):f.jsx(Ti,{children:f.jsx(NE,{ticketData:e,actions:t})})},ME=()=>{const{user:e,employeeData:t,initializing:r}=Wn(),n=qt();return r?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.2rem"},children:"Cargando..."}):f.jsxs(Xy,{children:[f.jsx(Cr,{path:"/ticket/:token",element:f.jsx(FE,{})}),f.jsx(Cr,{path:"/login",element:f.jsx(db,{})}),f.jsx(Cr,{path:"/admin/*",element:e&&e.type==="admin"?f.jsx(hS,{}):f.jsx(Hr,{to:"/login",state:{from:n},replace:!0})}),f.jsx(Cr,{path:"/employee/*",element:t&&t.type==="employee"?f.jsx(jS,{employeeData:t}):f.jsx(Hr,{to:"/login",state:{from:n},replace:!0})}),f.jsx(Cr,{path:"/",element:e&&e.type==="admin"?f.jsx(Hr,{to:"/admin",replace:!0}):t&&t.type==="employee"?f.jsx(Hr,{to:"/employee",replace:!0}):f.jsx(Hr,{to:"/login",replace:!0})}),f.jsx(Cr,{path:"*",element:f.jsx(Hr,{to:"/",replace:!0})})]})};function BE(){return f.jsxs(kw,{basename:"/ventanilla",children:[f.jsx(Ax,{}),f.jsx(Gk,{children:f.jsx(ME,{})})]})}Ga.createRoot(document.getElementById("root")).render(f.jsx(St.StrictMode,{children:f.jsx(BE,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}