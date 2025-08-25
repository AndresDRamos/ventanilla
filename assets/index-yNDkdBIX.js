(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Rg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var Yf={exports:{}},Is={},Xf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),Ag=Symbol.for("react.portal"),Og=Symbol.for("react.fragment"),Ig=Symbol.for("react.strict_mode"),Lg=Symbol.for("react.profiler"),Ng=Symbol.for("react.provider"),zg=Symbol.for("react.context"),Dg=Symbol.for("react.forward_ref"),Ug=Symbol.for("react.suspense"),Fg=Symbol.for("react.memo"),Mg=Symbol.for("react.lazy"),Cc=Symbol.iterator;function Bg(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var Zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eh=Object.assign,th={};function Ln(e,t,r){this.props=e,this.context=t,this.refs=th,this.updater=r||Zf}Ln.prototype.isReactComponent={};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rh(){}rh.prototype=Ln.prototype;function pu(e,t,r){this.props=e,this.context=t,this.refs=th,this.updater=r||Zf}var mu=pu.prototype=new rh;mu.constructor=pu;eh(mu,Ln.prototype);mu.isPureReactComponent=!0;var jc=Array.isArray,nh=Object.prototype.hasOwnProperty,gu={current:null},oh={key:!0,ref:!0,__self:!0,__source:!0};function ih(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)nh.call(t,n)&&!oh.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Ko,type:e,key:i,ref:s,props:o,_owner:gu.current}}function Wg(e,t){return{$$typeof:Ko,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ko}function qg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Pc=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qg(""+e.key):t.toString(36)}function Di(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ko:case Ag:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+da(s,0):n,jc(o)?(r="",e!=null&&(r=e.replace(Pc,"$&/")+"/"),Di(o,t,r,"",function(u){return u})):o!=null&&(vu(o)&&(o=Wg(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Pc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",jc(e))for(var a=0;a<e.length;a++){i=e[a];var l=n+da(i,a);s+=Di(i,t,r,l,o)}else if(l=Bg(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=n+da(i,a++),s+=Di(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function si(e,t,r){if(e==null)return e;var n=[],o=0;return Di(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Hg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Ui={transition:null},Vg={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Ui,ReactCurrentOwner:gu};q.Children={map:si,forEach:function(e,t,r){si(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Ln;q.Fragment=Og;q.Profiler=Lg;q.PureComponent=pu;q.StrictMode=Ig;q.Suspense=Ug;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vg;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=eh({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=gu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)nh.call(t,l)&&!oh.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:Ko,type:e.type,key:o,ref:i,props:n,_owner:s}};q.createContext=function(e){return e={$$typeof:zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ng,_context:e},e.Consumer=e};q.createElement=ih;q.createFactory=function(e){var t=ih.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Dg,render:e}};q.isValidElement=vu;q.lazy=function(e){return{$$typeof:Mg,_payload:{_status:-1,_result:e},_init:Hg}};q.memo=function(e,t){return{$$typeof:Fg,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Ui.transition;Ui.transition={};try{e()}finally{Ui.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return ze.current.useCallback(e,t)};q.useContext=function(e){return ze.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};q.useEffect=function(e,t){return ze.current.useEffect(e,t)};q.useId=function(){return ze.current.useId()};q.useImperativeHandle=function(e,t,r){return ze.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return ze.current.useMemo(e,t)};q.useReducer=function(e,t,r){return ze.current.useReducer(e,t,r)};q.useRef=function(e){return ze.current.useRef(e)};q.useState=function(e){return ze.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return ze.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return ze.current.useTransition()};q.version="18.2.0";Xf.exports=q;var w=Xf.exports;const Tt=$g(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg=w,Gg=Symbol.for("react.element"),Jg=Symbol.for("react.fragment"),Qg=Object.prototype.hasOwnProperty,Yg=Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xg={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Qg.call(t,n)&&!Xg.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Gg,type:e,key:i,ref:s,props:o,_owner:Yg.current}}Is.Fragment=Jg;Is.jsx=sh;Is.jsxs=sh;Yf.exports=Is;var d=Yf.exports,Xa={},ah={exports:{}},Ze={},lh={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var N=j.length;j.push(O);e:for(;0<N;){var z=N-1>>>1,D=j[z];if(0<o(D,O))j[z]=O,j[N]=D,N=z;else break e}}function r(j){return j.length===0?null:j[0]}function n(j){if(j.length===0)return null;var O=j[0],N=j.pop();if(N!==O){j[0]=N;e:for(var z=0,D=j.length,Oe=D>>>1;z<Oe;){var je=2*(z+1)-1,He=j[je],Se=je+1,Ve=j[Se];if(0>o(He,N))Se<D&&0>o(Ve,He)?(j[z]=Ve,j[Se]=N,z=Se):(j[z]=He,j[je]=N,z=je);else if(Se<D&&0>o(Ve,N))j[z]=Ve,j[Se]=N,z=Se;else break e}}return O}function o(j,O){var N=j.sortIndex-O.sortIndex;return N!==0?N:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,v=!1,x=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var O=r(u);O!==null;){if(O.callback===null)n(u);else if(O.startTime<=j)n(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=r(u)}}function _(j){if(y=!1,g(j),!x)if(r(l)!==null)x=!0,ce(E);else{var O=r(u);O!==null&&ke(_,O.startTime-j)}}function E(j,O){x=!1,y&&(y=!1,p(T),T=-1),v=!0;var N=h;try{for(g(O),f=r(l);f!==null&&(!(f.expirationTime>O)||j&&!H());){var z=f.callback;if(typeof z=="function"){f.callback=null,h=f.priorityLevel;var D=z(f.expirationTime<=O);O=e.unstable_now(),typeof D=="function"?f.callback=D:f===r(l)&&n(l),g(O)}else n(l);f=r(l)}if(f!==null)var Oe=!0;else{var je=r(u);je!==null&&ke(_,je.startTime-O),Oe=!1}return Oe}finally{f=null,h=N,v=!1}}var b=!1,C=null,T=-1,L=5,$=-1;function H(){return!(e.unstable_now()-$<L)}function R(){if(C!==null){var j=e.unstable_now();$=j;var O=!0;try{O=C(!0,j)}finally{O?J():(b=!1,C=null)}}else b=!1}var J;if(typeof m=="function")J=function(){m(R)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ae=fe.port2;fe.port1.onmessage=R,J=function(){ae.postMessage(null)}}else J=function(){S(R,0)};function ce(j){C=j,b||(b=!0,J())}function ke(j,O){T=S(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ce(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var N=h;h=O;try{return j()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=h;h=j;try{return O()}finally{h=N}},e.unstable_scheduleCallback=function(j,O,N){var z=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?z+N:z):N=z,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=N+D,j={id:c++,callback:O,priorityLevel:j,startTime:N,expirationTime:D,sortIndex:-1},N>z?(j.sortIndex=N,t(u,j),r(l)===null&&j===r(u)&&(y?(p(T),T=-1):y=!0,ke(_,N-z))):(j.sortIndex=D,t(l,j),x||v||(x=!0,ce(E))),j},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(j){var O=h;return function(){var N=h;h=O;try{return j.apply(this,arguments)}finally{h=N}}}})(uh);lh.exports=uh;var Zg=lh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch=w,Xe=Zg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dh=new Set,Co={};function Wr(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(Co[e]=t,e=0;e<t.length;e++)dh.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Za=Object.prototype.hasOwnProperty,ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tc={},$c={};function tv(e){return Za.call($c,e)?!0:Za.call(Tc,e)?!1:ev.test(e)?$c[e]=!0:(Tc[e]=!0,!1)}function rv(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nv(e,t,r,n){if(t===null||typeof t>"u"||rv(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yu,wu);Ce[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yu,wu);Ce[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yu,wu);Ce[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function xu(e,t,r,n){var o=Ce.hasOwnProperty(t)?Ce[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nv(t,r,o,n)&&(r=null),n||o===null?tv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Gt=ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),rn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),hh=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),rl=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),ph=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,fa;function no(e){if(fa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);fa=t&&t[1]||""}return`
`+fa+e}var ha=!1;function pa(e,t){if(!e||ha)return"";ha=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ha=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?no(e):""}function ov(e){switch(e.tag){case 5:return no(e.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return e=pa(e.type,!1),e;case 11:return e=pa(e.type.render,!1),e;case 1:return e=pa(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case rn:return"Portal";case el:return"Profiler";case _u:return"StrictMode";case tl:return"Suspense";case rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hh:return(e.displayName||"Context")+".Consumer";case fh:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Su:return t=e.displayName||null,t!==null?t:nl(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return nl(e(t))}catch{}}return null}function iv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sv(e){var t=mh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=sv(e))}function gh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=mh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ol(e,t){var r=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ac(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=gr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vh(e,t){t=t.checked,t!=null&&xu(e,"checked",t,!1)}function il(e,t){vh(e,t);var r=gr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,r):t.hasOwnProperty("defaultValue")&&sl(e,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function sl(e,t,r){(t!=="number"||ns(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var oo=Array.isArray;function gn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+gr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(oo(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:gr(r)}}function yh(e,t){var r=gr(t.value),n=gr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,xh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},av=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){av.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function _h(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function kh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=_h(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var lv=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(e,t){if(t){if(lv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,vn=null,yn=null;function Nc(e){if(e=Qo(e)){if(typeof fl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Us(t),fl(e.stateNode,e.type,t))}}function Sh(e){vn?yn?yn.push(e):yn=[e]:vn=e}function bh(){if(vn){var e=vn,t=yn;if(yn=vn=null,Nc(e),t)for(e=0;e<t.length;e++)Nc(t[e])}}function Eh(e,t){return e(t)}function Ch(){}var ma=!1;function jh(e,t,r){if(ma)return e(t,r);ma=!0;try{return Eh(e,t,r)}finally{ma=!1,(vn!==null||yn!==null)&&(Ch(),bh())}}function Po(e,t){var r=e.stateNode;if(r===null)return null;var n=Us(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var hl=!1;if(Wt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){hl=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{hl=!1}function uv(e,t,r,n,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var po=!1,os=null,is=!1,pl=null,cv={onError:function(e){po=!0,os=e}};function dv(e,t,r,n,o,i,s,a,l){po=!1,os=null,uv.apply(cv,arguments)}function fv(e,t,r,n,o,i,s,a,l){if(dv.apply(this,arguments),po){if(po){var u=os;po=!1,os=null}else throw Error(P(198));is||(is=!0,pl=u)}}function qr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ph(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(qr(e)!==e)throw Error(P(188))}function hv(e){var t=e.alternate;if(!t){if(t=qr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return zc(o),e;if(i===n)return zc(o),t;i=i.sibling}throw Error(P(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s)throw Error(P(189))}}if(r.alternate!==n)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function Th(e){return e=hv(e),e!==null?$h(e):null}function $h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$h(e);if(t!==null)return t;e=e.sibling}return null}var Rh=Xe.unstable_scheduleCallback,Dc=Xe.unstable_cancelCallback,pv=Xe.unstable_shouldYield,mv=Xe.unstable_requestPaint,de=Xe.unstable_now,gv=Xe.unstable_getCurrentPriorityLevel,Eu=Xe.unstable_ImmediatePriority,Ah=Xe.unstable_UserBlockingPriority,ss=Xe.unstable_NormalPriority,vv=Xe.unstable_LowPriority,Oh=Xe.unstable_IdlePriority,Ls=null,$t=null;function yv(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:_v,wv=Math.log,xv=Math.LN2;function _v(e){return e>>>=0,e===0?32:31-(wv(e)/xv|0)|0}var ci=64,di=4194304;function io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function as(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?n=io(a):(i&=s,i!==0&&(n=io(i)))}else s=r&~o,s!==0?n=io(s):i!==0&&(n=io(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-vt(t),o=1<<r,n|=e[r],t&=~o;return n}function kv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-vt(i),a=1<<s,l=o[s];l===-1?(!(a&r)||a&n)&&(o[s]=kv(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ih(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function ga(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Go(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=r}function bv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-vt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Cu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-vt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var G=0;function Lh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nh,ju,zh,Dh,Uh,gl=!1,fi=[],ar=null,lr=null,ur=null,To=new Map,$o=new Map,rr=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":To.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(t.pointerId)}}function Gn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Qo(t),t!==null&&ju(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Cv(e,t,r,n,o){switch(t){case"focusin":return ar=Gn(ar,e,t,r,n,o),!0;case"dragenter":return lr=Gn(lr,e,t,r,n,o),!0;case"mouseover":return ur=Gn(ur,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return To.set(i,Gn(To.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,$o.set(i,Gn($o.get(i)||null,e,t,r,n,o)),!0}return!1}function Fh(e){var t=Rr(e.target);if(t!==null){var r=qr(t);if(r!==null){if(t=r.tag,t===13){if(t=Ph(r),t!==null){e.blockedOn=t,Uh(e.priority,function(){zh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);dl=n,r.target.dispatchEvent(n),dl=null}else return t=Qo(r),t!==null&&ju(t),e.blockedOn=r,!1;t.shift()}return!0}function Fc(e,t,r){Fi(e)&&r.delete(t)}function jv(){gl=!1,ar!==null&&Fi(ar)&&(ar=null),lr!==null&&Fi(lr)&&(lr=null),ur!==null&&Fi(ur)&&(ur=null),To.forEach(Fc),$o.forEach(Fc)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,jv)))}function Ro(e){function t(o){return Jn(o,e)}if(0<fi.length){Jn(fi[0],e);for(var r=1;r<fi.length;r++){var n=fi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ar!==null&&Jn(ar,e),lr!==null&&Jn(lr,e),ur!==null&&Jn(ur,e),To.forEach(t),$o.forEach(t),r=0;r<rr.length;r++)n=rr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<rr.length&&(r=rr[0],r.blockedOn===null);)Fh(r),r.blockedOn===null&&rr.shift()}var wn=Gt.ReactCurrentBatchConfig,ls=!0;function Pv(e,t,r,n){var o=G,i=wn.transition;wn.transition=null;try{G=1,Pu(e,t,r,n)}finally{G=o,wn.transition=i}}function Tv(e,t,r,n){var o=G,i=wn.transition;wn.transition=null;try{G=4,Pu(e,t,r,n)}finally{G=o,wn.transition=i}}function Pu(e,t,r,n){if(ls){var o=vl(e,t,r,n);if(o===null)Ca(e,t,n,us,r),Uc(e,n);else if(Cv(o,e,t,r,n))n.stopPropagation();else if(Uc(e,n),t&4&&-1<Ev.indexOf(e)){for(;o!==null;){var i=Qo(o);if(i!==null&&Nh(i),i=vl(e,t,r,n),i===null&&Ca(e,t,n,us,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Ca(e,t,n,null,r)}}var us=null;function vl(e,t,r,n){if(us=null,e=bu(n),e=Rr(e),e!==null)if(t=qr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ph(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return us=e,null}function Mh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case Eu:return 1;case Ah:return 4;case ss:case vv:return 16;case Oh:return 536870912;default:return 16}default:return 16}}var ir=null,Tu=null,Mi=null;function Bh(){if(Mi)return Mi;var e,t=Tu,r=t.length,n,o="value"in ir?ir.value:ir.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Mi=o.slice(e,1<n?1-n:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function Mc(){return!1}function et(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hi:Mc,this.isPropagationStopped=Mc,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=et(Nn),Jo=se({},Nn,{view:0,detail:0}),$v=et(Jo),va,ya,Qn,Ns=se({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(va=e.screenX-Qn.screenX,ya=e.screenY-Qn.screenY):ya=va=0,Qn=e),va)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),Bc=et(Ns),Rv=se({},Ns,{dataTransfer:0}),Av=et(Rv),Ov=se({},Jo,{relatedTarget:0}),wa=et(Ov),Iv=se({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=et(Iv),Nv=se({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zv=et(Nv),Dv=se({},Nn,{data:0}),Wc=et(Dv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mv[e])?!!t[e]:!1}function Ru(){return Bv}var Wv=se({},Jo,{key:function(e){if(e.key){var t=Uv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qv=et(Wv),Hv=se({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=et(Hv),Vv=se({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Kv=et(Vv),Gv=se({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=et(Gv),Qv=se({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=et(Qv),Xv=[9,13,27,32],Au=Wt&&"CompositionEvent"in window,mo=null;Wt&&"documentMode"in document&&(mo=document.documentMode);var Zv=Wt&&"TextEvent"in window&&!mo,Wh=Wt&&(!Au||mo&&8<mo&&11>=mo),Hc=" ",Vc=!1;function qh(e,t){switch(e){case"keyup":return Xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function ey(e,t){switch(e){case"compositionend":return Hh(t);case"keypress":return t.which!==32?null:(Vc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Vc?null:e;default:return null}}function ty(e,t){if(on)return e==="compositionend"||!Au&&qh(e,t)?(e=Bh(),Mi=Tu=ir=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wh&&t.locale!=="ko"?null:t.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ry[e.type]:t==="textarea"}function Vh(e,t,r,n){Sh(n),t=cs(t,"onChange"),0<t.length&&(r=new $u("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var go=null,Ao=null;function ny(e){np(e,0)}function zs(e){var t=ln(e);if(gh(t))return e}function oy(e,t){if(e==="change")return t}var Kh=!1;if(Wt){var xa;if(Wt){var _a="oninput"in document;if(!_a){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),_a=typeof Gc.oninput=="function"}xa=_a}else xa=!1;Kh=xa&&(!document.documentMode||9<document.documentMode)}function Jc(){go&&(go.detachEvent("onpropertychange",Gh),Ao=go=null)}function Gh(e){if(e.propertyName==="value"&&zs(Ao)){var t=[];Vh(t,Ao,e,bu(e)),jh(ny,t)}}function iy(e,t,r){e==="focusin"?(Jc(),go=t,Ao=r,go.attachEvent("onpropertychange",Gh)):e==="focusout"&&Jc()}function sy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(Ao)}function ay(e,t){if(e==="click")return zs(t)}function ly(e,t){if(e==="input"||e==="change")return zs(t)}function uy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:uy;function Oo(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Za.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yc(e,t){var r=Qc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qc(r)}}function Jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qh(){for(var e=window,t=ns();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ns(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cy(e){var t=Qh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Jh(r.ownerDocument.documentElement,r)){if(n!==null&&Ou(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Yc(r,i);var s=Yc(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dy=Wt&&"documentMode"in document&&11>=document.documentMode,sn=null,yl=null,vo=null,wl=!1;function Xc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wl||sn==null||sn!==ns(n)||(n=sn,"selectionStart"in n&&Ou(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vo&&Oo(vo,n)||(vo=n,n=cs(yl,"onSelect"),0<n.length&&(t=new $u("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=sn)))}function pi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var an={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},ka={},Yh={};Wt&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Ds(e){if(ka[e])return ka[e];if(!an[e])return e;var t=an[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Yh)return ka[e]=t[r];return e}var Xh=Ds("animationend"),Zh=Ds("animationiteration"),ep=Ds("animationstart"),tp=Ds("transitionend"),rp=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){rp.set(e,t),Wr(t,[e])}for(var Sa=0;Sa<Zc.length;Sa++){var ba=Zc[Sa],fy=ba.toLowerCase(),hy=ba[0].toUpperCase()+ba.slice(1);yr(fy,"on"+hy)}yr(Xh,"onAnimationEnd");yr(Zh,"onAnimationIteration");yr(ep,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(tp,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function ed(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,fv(n,t,void 0,e),e.currentTarget=null}function np(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;ed(o,a,u),i=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;ed(o,a,u),i=l}}}if(is)throw e=pl,is=!1,pl=null,e}function Z(e,t){var r=t[bl];r===void 0&&(r=t[bl]=new Set);var n=e+"__bubble";r.has(n)||(op(t,e,2,!1),r.add(n))}function Ea(e,t,r){var n=0;t&&(n|=4),op(r,e,n,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[mi]){e[mi]=!0,dh.forEach(function(r){r!=="selectionchange"&&(py.has(r)||Ea(r,!1,e),Ea(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,Ea("selectionchange",!1,t))}}function op(e,t,r,n){switch(Mh(t)){case 1:var o=Pv;break;case 4:o=Tv;break;default:o=Pu}r=o.bind(null,t,r,e),o=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ca(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Rr(a),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}a=a.parentNode}}n=n.return}jh(function(){var u=i,c=bu(r),f=[];e:{var h=rp.get(e);if(h!==void 0){var v=$u,x=e;switch(e){case"keypress":if(Bi(r)===0)break e;case"keydown":case"keyup":v=qv;break;case"focusin":x="focus",v=wa;break;case"focusout":x="blur",v=wa;break;case"beforeblur":case"afterblur":v=wa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kv;break;case Xh:case Zh:case ep:v=Lv;break;case tp:v=Jv;break;case"scroll":v=$v;break;case"wheel":v=Yv;break;case"copy":case"cut":case"paste":v=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qc}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Po(m,p),_!=null&&y.push(Lo(m,_,g)))),S)break;m=m.return}0<y.length&&(h=new v(h,x,null,r,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&r!==dl&&(x=r.relatedTarget||r.fromElement)&&(Rr(x)||x[qt]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=r.relatedTarget||r.toElement,v=u,x=x?Rr(x):null,x!==null&&(S=qr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=Bc,_="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=qc,_="onPointerLeave",p="onPointerEnter",m="pointer"),S=v==null?h:ln(v),g=x==null?h:ln(x),h=new y(_,m+"leave",v,r,c),h.target=S,h.relatedTarget=g,_=null,Rr(c)===u&&(y=new y(p,m+"enter",x,r,c),y.target=g,y.relatedTarget=S,_=y),S=_,v&&x)t:{for(y=v,p=x,m=0,g=y;g;g=Vr(g))m++;for(g=0,_=p;_;_=Vr(_))g++;for(;0<m-g;)y=Vr(y),m--;for(;0<g-m;)p=Vr(p),g--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break t;y=Vr(y),p=Vr(p)}y=null}else y=null;v!==null&&td(f,h,v,y,!1),x!==null&&S!==null&&td(f,S,x,y,!0)}}e:{if(h=u?ln(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=oy;else if(Kc(h))if(Kh)E=ly;else{E=sy;var b=iy}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=ay);if(E&&(E=E(e,u))){Vh(f,E,r,c);break e}b&&b(e,h,u),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&sl(h,"number",h.value)}switch(b=u?ln(u):window,e){case"focusin":(Kc(b)||b.contentEditable==="true")&&(sn=b,yl=u,vo=null);break;case"focusout":vo=yl=sn=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,Xc(f,r,c);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":Xc(f,r,c)}var C;if(Au)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else on?qh(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Wh&&r.locale!=="ko"&&(on||T!=="onCompositionStart"?T==="onCompositionEnd"&&on&&(C=Bh()):(ir=c,Tu="value"in ir?ir.value:ir.textContent,on=!0)),b=cs(u,T),0<b.length&&(T=new Wc(T,e,null,r,c),f.push({event:T,listeners:b}),C?T.data=C:(C=Hh(r),C!==null&&(T.data=C)))),(C=Zv?ey(e,r):ty(e,r))&&(u=cs(u,"onBeforeInput"),0<u.length&&(c=new Wc("onBeforeInput","beforeinput",null,r,c),f.push({event:c,listeners:u}),c.data=C))}np(f,t)})}function Lo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function cs(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Po(e,r),i!=null&&n.unshift(Lo(e,i,o)),i=Po(e,t),i!=null&&n.push(Lo(e,i,o))),e=e.return}return n}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function td(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,o?(l=Po(r,i),l!=null&&s.unshift(Lo(r,l,a))):o||(l=Po(r,i),l!=null&&s.push(Lo(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function rd(e){return(typeof e=="string"?e:""+e).replace(my,`
`).replace(gy,"")}function gi(e,t,r){if(t=rd(t),rd(e)!==t&&r)throw Error(P(425))}function ds(){}var xl=null,_l=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(wy)}:Sl;function wy(e){setTimeout(function(){throw e})}function ja(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Ro(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Ro(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+zn,No="__reactProps$"+zn,qt="__reactContainer$"+zn,bl="__reactEvents$"+zn,xy="__reactListeners$"+zn,_y="__reactHandles$"+zn;function Rr(e){var t=e[Pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qt]||r[Pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=od(e);e!==null;){if(r=e[Pt])return r;e=od(e)}return t}e=r,r=e.parentNode}return null}function Qo(e){return e=e[Pt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Us(e){return e[No]||null}var El=[],un=-1;function wr(e){return{current:e}}function te(e){0>un||(e.current=El[un],El[un]=null,un--)}function Y(e,t){un++,El[un]=e.current,e.current=t}var vr={},Ae=wr(vr),Be=wr(!1),Dr=vr;function Sn(e,t){var r=e.type.contextTypes;if(!r)return vr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function fs(){te(Be),te(Ae)}function id(e,t,r){if(Ae.current!==vr)throw Error(P(168));Y(Ae,t),Y(Be,r)}function ip(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(P(108,iv(e)||"Unknown",o));return se({},r,n)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,Dr=Ae.current,Y(Ae,e),Y(Be,Be.current),!0}function sd(e,t,r){var n=e.stateNode;if(!n)throw Error(P(169));r?(e=ip(e,t,Dr),n.__reactInternalMemoizedMergedChildContext=e,te(Be),te(Ae),Y(Ae,e)):te(Be),Y(Be,r)}var Dt=null,Fs=!1,Pa=!1;function sp(e){Dt===null?Dt=[e]:Dt.push(e)}function ky(e){Fs=!0,sp(e)}function xr(){if(!Pa&&Dt!==null){Pa=!0;var e=0,t=G;try{var r=Dt;for(G=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Dt=null,Fs=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),Rh(Eu,xr),o}finally{G=t,Pa=!1}}return null}var cn=[],dn=0,ps=null,ms=0,tt=[],rt=0,Ur=null,Ut=1,Ft="";function Cr(e,t){cn[dn++]=ms,cn[dn++]=ps,ps=e,ms=t}function ap(e,t,r){tt[rt++]=Ut,tt[rt++]=Ft,tt[rt++]=Ur,Ur=e;var n=Ut;e=Ft;var o=32-vt(n)-1;n&=~(1<<o),r+=1;var i=32-vt(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,Ut=1<<32-vt(t)+o|r<<o|n,Ft=i+e}else Ut=1<<i|r<<o|n,Ft=e}function Iu(e){e.return!==null&&(Cr(e,1),ap(e,1,0))}function Lu(e){for(;e===ps;)ps=cn[--dn],cn[dn]=null,ms=cn[--dn],cn[dn]=null;for(;e===Ur;)Ur=tt[--rt],tt[rt]=null,Ft=tt[--rt],tt[rt]=null,Ut=tt[--rt],tt[rt]=null}var Ye=null,Qe=null,re=!1,gt=null;function lp(e,t){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ad(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ur!==null?{id:Ut,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ye=e,Qe=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(re){var t=Qe;if(t){var r=t;if(!ad(e,t)){if(Cl(e))throw Error(P(418));t=cr(r.nextSibling);var n=Ye;t&&ad(e,t)?lp(n,r):(e.flags=e.flags&-4097|2,re=!1,Ye=e)}}else{if(Cl(e))throw Error(P(418));e.flags=e.flags&-4097|2,re=!1,Ye=e}}}function ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function vi(e){if(e!==Ye)return!1;if(!re)return ld(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=Qe)){if(Cl(e))throw up(),Error(P(418));for(;t;)lp(e,t),t=cr(t.nextSibling)}if(ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=cr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ye?cr(e.stateNode.nextSibling):null;return!0}function up(){for(var e=Qe;e;)e=cr(e.nextSibling)}function bn(){Qe=Ye=null,re=!1}function Nu(e){gt===null?gt=[e]:gt.push(e)}var Sy=Gt.ReactCurrentBatchConfig;function ht(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var gs=wr(null),vs=null,fn=null,zu=null;function Du(){zu=fn=vs=null}function Uu(e){var t=gs.current;te(gs),e._currentValue=t}function Pl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function xn(e,t){vs=e,zu=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},fn===null){if(vs===null)throw Error(P(308));fn=e,vs.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return t}var Ar=null;function Fu(e){Ar===null?Ar=[e]:Ar.push(e)}function cp(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Fu(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ht(e,n)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var tr=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,V&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ht(e,r)}return o=n.interleaved,o===null?(t.next=t,Fu(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ht(e,r)}function Wi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Cu(e,r)}}function ud(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ys(e,t,r,n){var o=e.updateQueue;tr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;s=0,c=u=l=null,a=i;do{var h=a.lane,v=a.eventTime;if((n&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(h=t,v=r,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(v,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(v,f,h):x,h==null)break e;f=se({},f,h);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Mr|=s,e.lanes=s,e.memoizedState=f}}function cd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(P(191,o));o.call(n)}}}var fp=new ch.Component().refs;function Tl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ms={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=hr(e),i=Mt(n,o);i.payload=t,r!=null&&(i.callback=r),t=dr(e,i,o),t!==null&&(yt(t,e,o,n),Wi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=hr(e),i=Mt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=dr(e,i,o),t!==null&&(yt(t,e,o,n),Wi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),n=hr(e),o=Mt(r,n);o.tag=2,t!=null&&(o.callback=t),t=dr(e,o,n),t!==null&&(yt(t,e,n,r),Wi(t,e,n))}};function dd(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Oo(r,n)||!Oo(o,i):!0}function hp(e,t,r){var n=!1,o=vr,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=We(t)?Dr:Ae.current,n=t.contextTypes,i=(n=n!=null)?Sn(e,o):vr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ms,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function $l(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=fp,Mu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=We(t)?Dr:Ae.current,o.context=Sn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Tl(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ms.enqueueReplaceState(o,o.state,null),ys(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var n=r.stateNode}if(!n)throw Error(P(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===fp&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hd(e){var t=e._init;return t(e._payload)}function pp(e){function t(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function r(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function n(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function o(p,m){return p=pr(p,m),p.index=0,p.sibling=null,p}function i(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,g,_){return m===null||m.tag!==6?(m=La(g,p.mode,_),m.return=p,m):(m=o(m,g),m.return=p,m)}function l(p,m,g,_){var E=g.type;return E===nn?c(p,m,g.props.children,_,g.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===er&&hd(E)===m.type)?(_=o(m,g.props),_.ref=Yn(p,m,g),_.return=p,_):(_=Ji(g.type,g.key,g.props,null,p.mode,_),_.ref=Yn(p,m,g),_.return=p,_)}function u(p,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Na(g,p.mode,_),m.return=p,m):(m=o(m,g.children||[]),m.return=p,m)}function c(p,m,g,_,E){return m===null||m.tag!==7?(m=Nr(g,p.mode,_,E),m.return=p,m):(m=o(m,g),m.return=p,m)}function f(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=La(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ai:return g=Ji(m.type,m.key,m.props,null,p.mode,g),g.ref=Yn(p,null,m),g.return=p,g;case rn:return m=Na(m,p.mode,g),m.return=p,m;case er:var _=m._init;return f(p,_(m._payload),g)}if(oo(m)||Vn(m))return m=Nr(m,p.mode,g,null),m.return=p,m;yi(p,m)}return null}function h(p,m,g,_){var E=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(p,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:return g.key===E?l(p,m,g,_):null;case rn:return g.key===E?u(p,m,g,_):null;case er:return E=g._init,h(p,m,E(g._payload),_)}if(oo(g)||Vn(g))return E!==null?null:c(p,m,g,_,null);yi(p,g)}return null}function v(p,m,g,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(m,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ai:return p=p.get(_.key===null?g:_.key)||null,l(m,p,_,E);case rn:return p=p.get(_.key===null?g:_.key)||null,u(m,p,_,E);case er:var b=_._init;return v(p,m,g,b(_._payload),E)}if(oo(_)||Vn(_))return p=p.get(g)||null,c(m,p,_,E,null);yi(m,_)}return null}function x(p,m,g,_){for(var E=null,b=null,C=m,T=m=0,L=null;C!==null&&T<g.length;T++){C.index>T?(L=C,C=null):L=C.sibling;var $=h(p,C,g[T],_);if($===null){C===null&&(C=L);break}e&&C&&$.alternate===null&&t(p,C),m=i($,m,T),b===null?E=$:b.sibling=$,b=$,C=L}if(T===g.length)return r(p,C),re&&Cr(p,T),E;if(C===null){for(;T<g.length;T++)C=f(p,g[T],_),C!==null&&(m=i(C,m,T),b===null?E=C:b.sibling=C,b=C);return re&&Cr(p,T),E}for(C=n(p,C);T<g.length;T++)L=v(C,p,T,g[T],_),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?T:L.key),m=i(L,m,T),b===null?E=L:b.sibling=L,b=L);return e&&C.forEach(function(H){return t(p,H)}),re&&Cr(p,T),E}function y(p,m,g,_){var E=Vn(g);if(typeof E!="function")throw Error(P(150));if(g=E.call(g),g==null)throw Error(P(151));for(var b=E=null,C=m,T=m=0,L=null,$=g.next();C!==null&&!$.done;T++,$=g.next()){C.index>T?(L=C,C=null):L=C.sibling;var H=h(p,C,$.value,_);if(H===null){C===null&&(C=L);break}e&&C&&H.alternate===null&&t(p,C),m=i(H,m,T),b===null?E=H:b.sibling=H,b=H,C=L}if($.done)return r(p,C),re&&Cr(p,T),E;if(C===null){for(;!$.done;T++,$=g.next())$=f(p,$.value,_),$!==null&&(m=i($,m,T),b===null?E=$:b.sibling=$,b=$);return re&&Cr(p,T),E}for(C=n(p,C);!$.done;T++,$=g.next())$=v(C,p,T,$.value,_),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?T:$.key),m=i($,m,T),b===null?E=$:b.sibling=$,b=$);return e&&C.forEach(function(R){return t(p,R)}),re&&Cr(p,T),E}function S(p,m,g,_){if(typeof g=="object"&&g!==null&&g.type===nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:e:{for(var E=g.key,b=m;b!==null;){if(b.key===E){if(E=g.type,E===nn){if(b.tag===7){r(p,b.sibling),m=o(b,g.props.children),m.return=p,p=m;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===er&&hd(E)===b.type){r(p,b.sibling),m=o(b,g.props),m.ref=Yn(p,b,g),m.return=p,p=m;break e}r(p,b);break}else t(p,b);b=b.sibling}g.type===nn?(m=Nr(g.props.children,p.mode,_,g.key),m.return=p,p=m):(_=Ji(g.type,g.key,g.props,null,p.mode,_),_.ref=Yn(p,m,g),_.return=p,p=_)}return s(p);case rn:e:{for(b=g.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(p,m.sibling),m=o(m,g.children||[]),m.return=p,p=m;break e}else{r(p,m);break}else t(p,m);m=m.sibling}m=Na(g,p.mode,_),m.return=p,p=m}return s(p);case er:return b=g._init,S(p,m,b(g._payload),_)}if(oo(g))return x(p,m,g,_);if(Vn(g))return y(p,m,g,_);yi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(p,m.sibling),m=o(m,g),m.return=p,p=m):(r(p,m),m=La(g,p.mode,_),m.return=p,p=m),s(p)):r(p,m)}return S}var En=pp(!0),mp=pp(!1),Yo={},Rt=wr(Yo),zo=wr(Yo),Do=wr(Yo);function Or(e){if(e===Yo)throw Error(P(174));return e}function Bu(e,t){switch(Y(Do,t),Y(zo,e),Y(Rt,Yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}te(Rt),Y(Rt,t)}function Cn(){te(Rt),te(zo),te(Do)}function gp(e){Or(Do.current);var t=Or(Rt.current),r=ll(t,e.type);t!==r&&(Y(zo,e),Y(Rt,r))}function Wu(e){zo.current===e&&(te(Rt),te(zo))}var oe=wr(0);function ws(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function qu(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var qi=Gt.ReactCurrentDispatcher,$a=Gt.ReactCurrentBatchConfig,Fr=0,ie=null,ve=null,we=null,xs=!1,yo=!1,Uo=0,by=0;function Pe(){throw Error(P(321))}function Hu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!xt(e[r],t[r]))return!1;return!0}function Vu(e,t,r,n,o,i){if(Fr=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?Py:Ty,e=r(n,o),yo){i=0;do{if(yo=!1,Uo=0,25<=i)throw Error(P(301));i+=1,we=ve=null,t.updateQueue=null,qi.current=$y,e=r(n,o)}while(yo)}if(qi.current=_s,t=ve!==null&&ve.next!==null,Fr=0,we=ve=ie=null,xs=!1,t)throw Error(P(300));return e}function Ku(){var e=Uo!==0;return Uo=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ie.memoizedState=we=e:we=we.next=e,we}function lt(){if(ve===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?ie.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(P(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?ie.memoizedState=we=e:we=we.next=e}return we}function Fo(e,t){return typeof t=="function"?t(e):t}function Ra(e){var t=lt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=ve,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((Fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=n):l=l.next=f,ie.lanes|=c,Mr|=c}u=u.next}while(u!==null&&u!==i);l===null?s=n:l.next=a,xt(n,t.memoizedState)||(Me=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,Mr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Aa(e){var t=lt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);xt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function vp(){}function yp(e,t){var r=ie,n=lt(),o=t(),i=!xt(n.memoizedState,o);if(i&&(n.memoizedState=o,Me=!0),n=n.queue,Gu(_p.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,Mo(9,xp.bind(null,r,n,o,t),void 0,null),_e===null)throw Error(P(349));Fr&30||wp(r,t,o)}return o}function wp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xp(e,t,r,n){t.value=r,t.getSnapshot=n,kp(t)&&Sp(e)}function _p(e,t,r){return r(function(){kp(t)&&Sp(e)})}function kp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!xt(e,r)}catch{return!0}}function Sp(e){var t=Ht(e,1);t!==null&&yt(t,e,1,-1)}function pd(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t.queue=e,e=e.dispatch=jy.bind(null,ie,e),[t.memoizedState,e]}function Mo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function bp(){return lt().memoizedState}function Hi(e,t,r,n){var o=Et();ie.flags|=e,o.memoizedState=Mo(1|t,r,void 0,n===void 0?null:n)}function Bs(e,t,r,n){var o=lt();n=n===void 0?null:n;var i=void 0;if(ve!==null){var s=ve.memoizedState;if(i=s.destroy,n!==null&&Hu(n,s.deps)){o.memoizedState=Mo(t,r,i,n);return}}ie.flags|=e,o.memoizedState=Mo(1|t,r,i,n)}function md(e,t){return Hi(8390656,8,e,t)}function Gu(e,t){return Bs(2048,8,e,t)}function Ep(e,t){return Bs(4,2,e,t)}function Cp(e,t){return Bs(4,4,e,t)}function jp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pp(e,t,r){return r=r!=null?r.concat([e]):null,Bs(4,4,jp.bind(null,t,e),r)}function Ju(){}function Tp(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function $p(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Rp(e,t,r){return Fr&21?(xt(r,t)||(r=Ih(),ie.lanes|=r,Mr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=r)}function Ey(e,t){var r=G;G=r!==0&&4>r?r:4,e(!0);var n=$a.transition;$a.transition={};try{e(!1),t()}finally{G=r,$a.transition=n}}function Ap(){return lt().memoizedState}function Cy(e,t,r){var n=hr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Op(e))Ip(t,r);else if(r=cp(e,t,r,n),r!==null){var o=Ne();yt(r,e,n,o),Lp(r,t,n)}}function jy(e,t,r){var n=hr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Op(e))Ip(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,r);if(o.hasEagerState=!0,o.eagerState=a,xt(a,s)){var l=t.interleaved;l===null?(o.next=o,Fu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=cp(e,t,o,n),r!==null&&(o=Ne(),yt(r,e,n,o),Lp(r,t,n))}}function Op(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ip(e,t){yo=xs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Lp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Cu(e,r)}}var _s={readContext:at,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Py={readContext:at,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:md,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Hi(4194308,4,jp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var r=Et();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Et();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Cy.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:pd,useDebugValue:Ju,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=pd(!1),t=e[0];return e=Ey.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ie,o=Et();if(re){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),_e===null)throw Error(P(349));Fr&30||wp(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,md(_p.bind(null,n,i,e),[e]),n.flags|=2048,Mo(9,xp.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Et(),t=_e.identifierPrefix;if(re){var r=Ft,n=Ut;r=(n&~(1<<32-vt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Uo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=by++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ty={readContext:at,useCallback:Tp,useContext:at,useEffect:Gu,useImperativeHandle:Pp,useInsertionEffect:Ep,useLayoutEffect:Cp,useMemo:$p,useReducer:Ra,useRef:bp,useState:function(){return Ra(Fo)},useDebugValue:Ju,useDeferredValue:function(e){var t=lt();return Rp(t,ve.memoizedState,e)},useTransition:function(){var e=Ra(Fo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:vp,useSyncExternalStore:yp,useId:Ap,unstable_isNewReconciler:!1},$y={readContext:at,useCallback:Tp,useContext:at,useEffect:Gu,useImperativeHandle:Pp,useInsertionEffect:Ep,useLayoutEffect:Cp,useMemo:$p,useReducer:Aa,useRef:bp,useState:function(){return Aa(Fo)},useDebugValue:Ju,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:Rp(t,ve.memoizedState,e)},useTransition:function(){var e=Aa(Fo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:vp,useSyncExternalStore:yp,useId:Ap,unstable_isNewReconciler:!1};function jn(e,t){try{var r="",n=t;do r+=ov(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Oa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ry=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,r){r=Mt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ss||(Ss=!0,Ml=n),Rl(e,t)},r}function zp(e,t,r){r=Mt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Rl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Rl(e,t),typeof n!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function gd(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Ry;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Hy.bind(null,e,t,r),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yd(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Mt(-1,1),t.tag=2,dr(r,t,1))),r.lanes|=1),e)}var Ay=Gt.ReactCurrentOwner,Me=!1;function Le(e,t,r,n){t.child=e===null?mp(t,null,r,n):En(t,e.child,r,n)}function wd(e,t,r,n,o){r=r.render;var i=t.ref;return xn(t,o),n=Vu(e,t,r,n,i,o),r=Ku(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(re&&r&&Iu(t),t.flags|=1,Le(e,t,n,o),t.child)}function xd(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!nc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Dp(e,t,i,n,o)):(e=Ji(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:Oo,r(s,n)&&e.ref===t.ref)return Vt(e,t,o)}return t.flags|=1,e=pr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Dp(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Oo(i,n)&&e.ref===t.ref)if(Me=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Vt(e,t,o)}return Al(e,t,r,n,o)}function Up(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(pn,Je),Je|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(pn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Y(pn,Je),Je|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Y(pn,Je),Je|=n;return Le(e,t,o,r),t.child}function Fp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,r,n,o){var i=We(r)?Dr:Ae.current;return i=Sn(t,i),xn(t,o),r=Vu(e,t,r,n,i,o),n=Ku(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(re&&n&&Iu(t),t.flags|=1,Le(e,t,r,o),t.child)}function _d(e,t,r,n,o){if(We(r)){var i=!0;hs(t)}else i=!1;if(xn(t,o),t.stateNode===null)Vi(e,t),hp(t,r,n),$l(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=at(u):(u=We(r)?Dr:Ae.current,u=Sn(t,u));var c=r.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==u)&&fd(t,s,n,u),tr=!1;var h=t.memoizedState;s.state=h,ys(t,n,s,o),l=t.memoizedState,a!==n||h!==l||Be.current||tr?(typeof c=="function"&&(Tl(t,r,c,n),l=t.memoizedState),(a=tr||dd(t,r,a,n,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=u,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,dp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ht(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=at(l):(l=We(r)?Dr:Ae.current,l=Sn(t,l));var v=r.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&fd(t,s,n,l),tr=!1,h=t.memoizedState,s.state=h,ys(t,n,s,o);var x=t.memoizedState;a!==f||h!==x||Be.current||tr?(typeof v=="function"&&(Tl(t,r,v,n),x=t.memoizedState),(u=tr||dd(t,r,u,n,h,x,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),s.props=n,s.state=x,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Ol(e,t,r,n,i,o)}function Ol(e,t,r,n,o,i){Fp(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&sd(t,r,!1),Vt(e,t,i);n=t.stateNode,Ay.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=En(t,e.child,null,i),t.child=En(t,null,a,i)):Le(e,t,a,i),t.memoizedState=n.state,o&&sd(t,r,!0),t.child}function Mp(e){var t=e.stateNode;t.pendingContext?id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&id(e,t.context,!1),Bu(e,t.containerInfo)}function kd(e,t,r,n,o){return bn(),Nu(o),t.flags|=256,Le(e,t,r,n),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bp(e,t,r){var n=t.pendingProps,o=oe.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(oe,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Hs(s,n,0,null),e=Nr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ll(r),t.memoizedState=Il,e):Qu(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Oy(e,t,s,n,a,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=pr(o,l),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=pr(a,i):(i=Nr(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?Ll(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=Il,n}return i=e.child,e=i.sibling,n=pr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Qu(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,r,n){return n!==null&&Nu(n),En(t,e.child,null,r),e=Qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oy(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Oa(Error(P(422))),wi(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Hs({mode:"visible",children:n.children},o,0,null),i=Nr(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&En(t,e.child,null,s),t.child.memoizedState=Ll(s),t.memoizedState=Il,i);if(!(t.mode&1))return wi(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(P(419)),n=Oa(i,n,void 0),wi(e,t,s,n)}if(a=(s&e.childLanes)!==0,Me||a){if(n=_e,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ht(e,o),yt(n,e,o,-1))}return rc(),n=Oa(Error(P(421))),wi(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Vy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=cr(o.nextSibling),Ye=t,re=!0,gt=null,e!==null&&(tt[rt++]=Ut,tt[rt++]=Ft,tt[rt++]=Ur,Ut=e.id,Ft=e.overflow,Ur=t),t=Qu(t,n.children),t.flags|=4096,t)}function Sd(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Pl(e.return,t,r)}function Ia(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Wp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Le(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,r,t);else if(e.tag===19)Sd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Y(oe,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&ws(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ia(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ws(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ia(t,!0,r,null,i);break;case"together":Ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=pr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=pr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Iy(e,t,r){switch(t.tag){case 3:Mp(t),bn();break;case 5:gp(t);break;case 1:We(t.type)&&hs(t);break;case 4:Bu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Y(gs,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Y(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?Bp(e,t,r):(Y(oe,oe.current&1),e=Vt(e,t,r),e!==null?e.sibling:null);Y(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Wp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Up(e,t,r)}return Vt(e,t,r)}var qp,Nl,Hp,Vp;qp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Nl=function(){};Hp=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Or(Rt.current);var i=null;switch(r){case"input":o=ol(e,o),n=ol(e,n),i=[];break;case"select":o=se({},o,{value:void 0}),n=se({},n,{value:void 0}),i=[];break;case"textarea":o=al(e,o),n=al(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ds)}ul(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var l=n[u];if(a=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Vp=function(e,t,r,n){r!==n&&(t.flags|=4)};function Xn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ly(e,t,r){var n=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return We(t.type)&&fs(),Te(t),null;case 3:return n=t.stateNode,Cn(),te(Be),te(Ae),qu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(ql(gt),gt=null))),Nl(e,t),Te(t),null;case 5:Wu(t);var o=Or(Do.current);if(r=t.type,e!==null&&t.stateNode!=null)Hp(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(P(166));return Te(t),null}if(e=Or(Rt.current),vi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Pt]=t,n[No]=i,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<so.length;o++)Z(so[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":Ac(n,i),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Z("invalid",n);break;case"textarea":Ic(n,i),Z("invalid",n)}ul(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&gi(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&gi(n.textContent,a,e),o=["children",""+a]):Co.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",n)}switch(r){case"input":li(n),Oc(n,i,!0);break;case"textarea":li(n),Lc(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ds)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Pt]=t,e[No]=n,qp(e,t,!1,!1),t.stateNode=e;e:{switch(s=cl(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<so.length;o++)Z(so[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":Ac(e,n),o=ol(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=se({},n,{value:void 0}),Z("invalid",e);break;case"textarea":Ic(e,n),o=al(e,n),Z("invalid",e);break;default:o=n}ul(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?kh(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xh(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&jo(e,l):typeof l=="number"&&jo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&xu(e,i,l,s))}switch(r){case"input":li(e),Oc(e,n,!1);break;case"textarea":li(e),Lc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+gr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?gn(e,!!n.multiple,i,!1):n.defaultValue!=null&&gn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ds)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Vp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(P(166));if(r=Or(Do.current),Or(Rt.current),vi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Pt]=t,(i=n.nodeValue!==r)&&(e=Ye,e!==null))switch(e.tag){case 3:gi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Pt]=t,t.stateNode=n}return Te(t),null;case 13:if(te(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Qe!==null&&t.mode&1&&!(t.flags&128))up(),bn(),t.flags|=98560,i=!1;else if(i=vi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Pt]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else gt!==null&&(ql(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ye===0&&(ye=3):rc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Cn(),Nl(e,t),e===null&&Io(t.stateNode.containerInfo),Te(t),null;case 10:return Uu(t.type._context),Te(t),null;case 17:return We(t.type)&&fs(),Te(t),null;case 19:if(te(oe),i=t.memoizedState,i===null)return Te(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Xn(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ws(e),s!==null){for(t.flags|=128,Xn(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Y(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>Pn&&(t.flags|=128,n=!0,Xn(i,!1),t.lanes=4194304)}else{if(!n)if(e=ws(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!re)return Te(t),null}else 2*de()-i.renderingStartTime>Pn&&r!==1073741824&&(t.flags|=128,n=!0,Xn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,r=oe.current,Y(oe,n?r&1|2:r&1),t):(Te(t),null);case 22:case 23:return tc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Je&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Ny(e,t){switch(Lu(t),t.tag){case 1:return We(t.type)&&fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(),te(Be),te(Ae),qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wu(t),null;case 13:if(te(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(oe),null;case 4:return Cn(),null;case 10:return Uu(t.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var xi=!1,$e=!1,zy=typeof WeakSet=="function"?WeakSet:Set,A=null;function hn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ue(e,t,n)}else r.current=null}function zl(e,t,r){try{r()}catch(n){ue(e,t,n)}}var bd=!1;function Dy(e,t){if(xl=ls,e=Qh(),Ou(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var v;f!==r||o!==0&&f.nodeType!==3||(a=s+o),f!==i||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===r&&++u===o&&(a=s),h===i&&++c===n&&(l=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(_l={focusedElem:e,selectionRange:r},ls=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,S=x.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:ht(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(_){ue(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return x=bd,bd=!1,x}function wo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&zl(t,r,i)}o=o.next}while(o!==n)}}function Ws(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Dl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Kp(e){var t=e.alternate;t!==null&&(e.alternate=null,Kp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[No],delete t[bl],delete t[xy],delete t[_y])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gp(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ds));else if(n!==4&&(e=e.child,e!==null))for(Ul(e,t,r),e=e.sibling;e!==null;)Ul(e,t,r),e=e.sibling}function Fl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Fl(e,t,r),e=e.sibling;e!==null;)Fl(e,t,r),e=e.sibling}var be=null,pt=!1;function Qt(e,t,r){for(r=r.child;r!==null;)Jp(e,t,r),r=r.sibling}function Jp(e,t,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ls,r)}catch{}switch(r.tag){case 5:$e||hn(r,t);case 6:var n=be,o=pt;be=null,Qt(e,t,r),be=n,pt=o,be!==null&&(pt?(e=be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):be.removeChild(r.stateNode));break;case 18:be!==null&&(pt?(e=be,r=r.stateNode,e.nodeType===8?ja(e.parentNode,r):e.nodeType===1&&ja(e,r),Ro(e)):ja(be,r.stateNode));break;case 4:n=be,o=pt,be=r.stateNode.containerInfo,pt=!0,Qt(e,t,r),be=n,pt=o;break;case 0:case 11:case 14:case 15:if(!$e&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&zl(r,t,s),o=o.next}while(o!==n)}Qt(e,t,r);break;case 1:if(!$e&&(hn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){ue(r,t,a)}Qt(e,t,r);break;case 21:Qt(e,t,r);break;case 22:r.mode&1?($e=(n=$e)||r.memoizedState!==null,Qt(e,t,r),$e=n):Qt(e,t,r);break;default:Qt(e,t,r)}}function Cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new zy),t.forEach(function(n){var o=Ky.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function dt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,pt=!1;break e;case 3:be=a.stateNode.containerInfo,pt=!0;break e;case 4:be=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(be===null)throw Error(P(160));Jp(i,s,o),be=null,pt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ue(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qp(t,e),t=t.sibling}function Qp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),bt(e),n&4){try{wo(3,e,e.return),Ws(3,e)}catch(y){ue(e,e.return,y)}try{wo(5,e,e.return)}catch(y){ue(e,e.return,y)}}break;case 1:dt(t,e),bt(e),n&512&&r!==null&&hn(r,r.return);break;case 5:if(dt(t,e),bt(e),n&512&&r!==null&&hn(r,r.return),e.flags&32){var o=e.stateNode;try{jo(o,"")}catch(y){ue(e,e.return,y)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&vh(o,i),cl(a,s);var u=cl(a,i);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?kh(o,f):c==="dangerouslySetInnerHTML"?xh(o,f):c==="children"?jo(o,f):xu(o,c,f,u)}switch(a){case"input":il(o,i);break;case"textarea":yh(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?gn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?gn(o,!!i.multiple,i.defaultValue,!0):gn(o,!!i.multiple,i.multiple?[]:"",!1))}o[No]=i}catch(y){ue(e,e.return,y)}}break;case 6:if(dt(t,e),bt(e),n&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ue(e,e.return,y)}}break;case 3:if(dt(t,e),bt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ro(t.containerInfo)}catch(y){ue(e,e.return,y)}break;case 4:dt(t,e),bt(e);break;case 13:dt(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zu=de())),n&4&&Cd(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?($e=(u=$e)||c,dt(t,e),$e=u):dt(t,e),bt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(f=A=c;A!==null;){switch(h=A,v=h.child,h.tag){case 0:case 11:case 14:case 15:wo(4,h,h.return);break;case 1:hn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ue(n,r,y)}}break;case 5:hn(h,h.return);break;case 22:if(h.memoizedState!==null){Pd(f);continue}}v!==null?(v.return=h,A=v):Pd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_h("display",s))}catch(y){ue(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ue(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dt(t,e),bt(e),n&4&&Cd(e);break;case 21:break;default:dt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gp(r)){var n=r;break e}r=r.return}throw Error(P(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(jo(o,""),n.flags&=-33);var i=Ed(e);Fl(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,a=Ed(e);Ul(e,a,s);break;default:throw Error(P(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uy(e,t,r){A=e,Yp(e)}function Yp(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||xi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||$e;a=xi;var u=$e;if(xi=s,($e=l)&&!u)for(A=o;A!==null;)s=A,l=s.child,s.tag===22&&s.memoizedState!==null?Td(o):l!==null?(l.return=s,A=l):Td(o);for(;i!==null;)A=i,Yp(i),i=i.sibling;A=o,xi=a,$e=u}jd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):jd(e)}}function jd(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||Ws(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!$e)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:ht(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cd(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}cd(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}$e||t.flags&512&&Dl(t)}catch(h){ue(t,t.return,h)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Pd(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function Td(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ws(4,t)}catch(l){ue(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){ue(t,o,l)}}var i=t.return;try{Dl(t)}catch(l){ue(t,i,l)}break;case 5:var s=t.return;try{Dl(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var Fy=Math.ceil,ks=Gt.ReactCurrentDispatcher,Yu=Gt.ReactCurrentOwner,it=Gt.ReactCurrentBatchConfig,V=0,_e=null,pe=null,Ee=0,Je=0,pn=wr(0),ye=0,Bo=null,Mr=0,qs=0,Xu=0,xo=null,Ue=null,Zu=0,Pn=1/0,Lt=null,Ss=!1,Ml=null,fr=null,_i=!1,sr=null,bs=0,_o=0,Bl=null,Ki=-1,Gi=0;function Ne(){return V&6?de():Ki!==-1?Ki:Ki=de()}function hr(e){return e.mode&1?V&2&&Ee!==0?Ee&-Ee:Sy.transition!==null?(Gi===0&&(Gi=Ih()),Gi):(e=G,e!==0||(e=window.event,e=e===void 0?16:Mh(e.type)),e):1}function yt(e,t,r,n){if(50<_o)throw _o=0,Bl=null,Error(P(185));Go(e,r,n),(!(V&2)||e!==_e)&&(e===_e&&(!(V&2)&&(qs|=r),ye===4&&nr(e,Ee)),qe(e,n),r===1&&V===0&&!(t.mode&1)&&(Pn=de()+500,Fs&&xr()))}function qe(e,t){var r=e.callbackNode;Sv(e,t);var n=as(e,e===_e?Ee:0);if(n===0)r!==null&&Dc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Dc(r),t===1)e.tag===0?ky($d.bind(null,e)):sp($d.bind(null,e)),yy(function(){!(V&6)&&xr()}),r=null;else{switch(Lh(n)){case 1:r=Eu;break;case 4:r=Ah;break;case 16:r=ss;break;case 536870912:r=Oh;break;default:r=ss}r=im(r,Xp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Xp(e,t){if(Ki=-1,Gi=0,V&6)throw Error(P(327));var r=e.callbackNode;if(_n()&&e.callbackNode!==r)return null;var n=as(e,e===_e?Ee:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Es(e,n);else{t=n;var o=V;V|=2;var i=em();(_e!==e||Ee!==t)&&(Lt=null,Pn=de()+500,Lr(e,t));do try{Wy();break}catch(a){Zp(e,a)}while(!0);Du(),ks.current=i,V=o,pe!==null?t=0:(_e=null,Ee=0,t=ye)}if(t!==0){if(t===2&&(o=ml(e),o!==0&&(n=o,t=Wl(e,o))),t===1)throw r=Bo,Lr(e,0),nr(e,n),qe(e,de()),r;if(t===6)nr(e,n);else{if(o=e.current.alternate,!(n&30)&&!My(o)&&(t=Es(e,n),t===2&&(i=ml(e),i!==0&&(n=i,t=Wl(e,i))),t===1))throw r=Bo,Lr(e,0),nr(e,n),qe(e,de()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(P(345));case 2:jr(e,Ue,Lt);break;case 3:if(nr(e,n),(n&130023424)===n&&(t=Zu+500-de(),10<t)){if(as(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(jr.bind(null,e,Ue,Lt),t);break}jr(e,Ue,Lt);break;case 4:if(nr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-vt(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=de()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Fy(n/1960))-n,10<n){e.timeoutHandle=Sl(jr.bind(null,e,Ue,Lt),n);break}jr(e,Ue,Lt);break;case 5:jr(e,Ue,Lt);break;default:throw Error(P(329))}}}return qe(e,de()),e.callbackNode===r?Xp.bind(null,e):null}function Wl(e,t){var r=xo;return e.current.memoizedState.isDehydrated&&(Lr(e,t).flags|=256),e=Es(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&ql(t)),e}function ql(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function My(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~Xu,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-vt(t),n=1<<r;e[r]=-1,t&=~n}}function $d(e){if(V&6)throw Error(P(327));_n();var t=as(e,0);if(!(t&1))return qe(e,de()),null;var r=Es(e,t);if(e.tag!==0&&r===2){var n=ml(e);n!==0&&(t=n,r=Wl(e,n))}if(r===1)throw r=Bo,Lr(e,0),nr(e,t),qe(e,de()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,Ue,Lt),qe(e,de()),null}function ec(e,t){var r=V;V|=1;try{return e(t)}finally{V=r,V===0&&(Pn=de()+500,Fs&&xr())}}function Br(e){sr!==null&&sr.tag===0&&!(V&6)&&_n();var t=V;V|=1;var r=it.transition,n=G;try{if(it.transition=null,G=1,e)return e()}finally{G=n,it.transition=r,V=t,!(V&6)&&xr()}}function tc(){Je=pn.current,te(pn)}function Lr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,vy(r)),pe!==null)for(r=pe.return;r!==null;){var n=r;switch(Lu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&fs();break;case 3:Cn(),te(Be),te(Ae),qu();break;case 5:Wu(n);break;case 4:Cn();break;case 13:te(oe);break;case 19:te(oe);break;case 10:Uu(n.type._context);break;case 22:case 23:tc()}r=r.return}if(_e=e,pe=e=pr(e.current,null),Ee=Je=t,ye=0,Bo=null,Xu=qs=Mr=0,Ue=xo=null,Ar!==null){for(t=0;t<Ar.length;t++)if(r=Ar[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}Ar=null}return e}function Zp(e,t){do{var r=pe;try{if(Du(),qi.current=_s,xs){for(var n=ie.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}xs=!1}if(Fr=0,we=ve=ie=null,yo=!1,Uo=0,Yu.current=null,r===null||r.return===null){ye=1,Bo=t,pe=null;break}e:{var i=e,s=r.return,a=r,l=t;if(t=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=vd(s);if(v!==null){v.flags&=-257,yd(v,s,a,i,t),v.mode&1&&gd(i,u,t),t=v,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){gd(i,u,t),rc();break e}l=Error(P(426))}}else if(re&&a.mode&1){var S=vd(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),yd(S,s,a,i,t),Nu(jn(l,a));break e}}i=l=jn(l,a),ye!==4&&(ye=2),xo===null?xo=[i]:xo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Np(i,l,t);ud(i,p);break e;case 1:a=l;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fr===null||!fr.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=zp(i,a,t);ud(i,_);break e}}i=i.return}while(i!==null)}rm(r)}catch(E){t=E,pe===r&&r!==null&&(pe=r=r.return);continue}break}while(!0)}function em(){var e=ks.current;return ks.current=_s,e===null?_s:e}function rc(){(ye===0||ye===3||ye===2)&&(ye=4),_e===null||!(Mr&268435455)&&!(qs&268435455)||nr(_e,Ee)}function Es(e,t){var r=V;V|=2;var n=em();(_e!==e||Ee!==t)&&(Lt=null,Lr(e,t));do try{By();break}catch(o){Zp(e,o)}while(!0);if(Du(),V=r,ks.current=n,pe!==null)throw Error(P(261));return _e=null,Ee=0,ye}function By(){for(;pe!==null;)tm(pe)}function Wy(){for(;pe!==null&&!pv();)tm(pe)}function tm(e){var t=om(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?rm(e):pe=t,Yu.current=null}function rm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ny(r,t),r!==null){r.flags&=32767,pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,pe=null;return}}else if(r=Ly(r,t,Je),r!==null){pe=r;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ye===0&&(ye=5)}function jr(e,t,r){var n=G,o=it.transition;try{it.transition=null,G=1,qy(e,t,r,n)}finally{it.transition=o,G=n}return null}function qy(e,t,r,n){do _n();while(sr!==null);if(V&6)throw Error(P(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(bv(e,i),e===_e&&(pe=_e=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_i||(_i=!0,im(ss,function(){return _n(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=it.transition,it.transition=null;var s=G;G=1;var a=V;V|=4,Yu.current=null,Dy(e,r),Qp(r,e),cy(_l),ls=!!xl,_l=xl=null,e.current=r,Uy(r),mv(),V=a,G=s,it.transition=i}else e.current=r;if(_i&&(_i=!1,sr=e,bs=o),i=e.pendingLanes,i===0&&(fr=null),yv(r.stateNode),qe(e,de()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Ss)throw Ss=!1,e=Ml,Ml=null,e;return bs&1&&e.tag!==0&&_n(),i=e.pendingLanes,i&1?e===Bl?_o++:(_o=0,Bl=e):_o=0,xr(),null}function _n(){if(sr!==null){var e=Lh(bs),t=it.transition,r=G;try{if(it.transition=null,G=16>e?16:e,sr===null)var n=!1;else{if(e=sr,sr=null,bs=0,V&6)throw Error(P(331));var o=V;for(V|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:wo(8,c,i)}var f=c.child;if(f!==null)f.return=c,A=f;else for(;A!==null;){c=A;var h=c.sibling,v=c.return;if(Kp(c),c===u){A=null;break}if(h!==null){h.return=v,A=h;break}A=v}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,A=p;break e}A=i.return}}var m=e.current;for(A=m;A!==null;){s=A;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,A=g;else e:for(s=m;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ws(9,a)}}catch(E){ue(a,a.return,E)}if(a===s){A=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,A=_;break e}A=a.return}}if(V=o,xr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ls,e)}catch{}n=!0}return n}finally{G=r,it.transition=t}}return!1}function Rd(e,t,r){t=jn(r,t),t=Np(e,t,1),e=dr(e,t,1),t=Ne(),e!==null&&(Go(e,1,t),qe(e,t))}function ue(e,t,r){if(e.tag===3)Rd(e,e,r);else for(;t!==null;){if(t.tag===3){Rd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(fr===null||!fr.has(n))){e=jn(r,e),e=zp(t,e,1),t=dr(t,e,1),e=Ne(),t!==null&&(Go(t,1,e),qe(t,e));break}}t=t.return}}function Hy(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Ee&r)===r&&(ye===4||ye===3&&(Ee&130023424)===Ee&&500>de()-Zu?Lr(e,0):Xu|=r),qe(e,t)}function nm(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var r=Ne();e=Ht(e,t),e!==null&&(Go(e,t,r),qe(e,r))}function Vy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nm(e,r)}function Ky(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(P(314))}n!==null&&n.delete(t),nm(e,r)}var om;om=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Me=!1,Iy(e,t,r);Me=!!(e.flags&131072)}else Me=!1,re&&t.flags&1048576&&ap(t,ms,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Vi(e,t),e=t.pendingProps;var o=Sn(t,Ae.current);xn(t,r),o=Vu(null,t,n,e,o,r);var i=Ku();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(n)?(i=!0,hs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Mu(t),o.updater=Ms,t.stateNode=o,o._reactInternals=t,$l(t,n,e,r),t=Ol(null,t,n,!0,i,r)):(t.tag=0,re&&i&&Iu(t),Le(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Jy(n),e=ht(n,e),o){case 0:t=Al(null,t,n,e,r);break e;case 1:t=_d(null,t,n,e,r);break e;case 11:t=wd(null,t,n,e,r);break e;case 14:t=xd(null,t,n,ht(n.type,e),r);break e}throw Error(P(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),Al(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),_d(e,t,n,o,r);case 3:e:{if(Mp(t),e===null)throw Error(P(387));n=t.pendingProps,i=t.memoizedState,o=i.element,dp(e,t),ys(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=jn(Error(P(423)),t),t=kd(e,t,n,r,o);break e}else if(n!==o){o=jn(Error(P(424)),t),t=kd(e,t,n,r,o);break e}else for(Qe=cr(t.stateNode.containerInfo.firstChild),Ye=t,re=!0,gt=null,r=mp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(bn(),n===o){t=Vt(e,t,r);break e}Le(e,t,n,r)}t=t.child}return t;case 5:return gp(t),e===null&&jl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,kl(n,o)?s=null:i!==null&&kl(n,i)&&(t.flags|=32),Fp(e,t),Le(e,t,s,r),t.child;case 6:return e===null&&jl(t),null;case 13:return Bp(e,t,r);case 4:return Bu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=En(t,null,n,r):Le(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),wd(e,t,n,o,r);case 7:return Le(e,t,t.pendingProps,r),t.child;case 8:return Le(e,t,t.pendingProps.children,r),t.child;case 12:return Le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Y(gs,n._currentValue),n._currentValue=s,i!==null)if(xt(i.value,s)){if(i.children===o.children&&!Be.current){t=Vt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Mt(-1,r&-r),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Pl(i.return,r,t),a.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Pl(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Le(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,xn(t,r),o=at(o),n=n(o),t.flags|=1,Le(e,t,n,r),t.child;case 14:return n=t.type,o=ht(n,t.pendingProps),o=ht(n.type,o),xd(e,t,n,o,r);case 15:return Dp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),Vi(e,t),t.tag=1,We(n)?(e=!0,hs(t)):e=!1,xn(t,r),hp(t,n,o),$l(t,n,o,r),Ol(null,t,n,!0,e,r);case 19:return Wp(e,t,r);case 22:return Up(e,t,r)}throw Error(P(156,t.tag))};function im(e,t){return Rh(e,t)}function Gy(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,r,n){return new Gy(e,t,r,n)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jy(e){if(typeof e=="function")return nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===Su)return 14}return 2}function pr(e,t){var r=e.alternate;return r===null?(r=ot(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ji(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")nc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case nn:return Nr(r.children,o,i,t);case _u:s=8,o|=8;break;case el:return e=ot(12,r,t,o|2),e.elementType=el,e.lanes=i,e;case tl:return e=ot(13,r,t,o),e.elementType=tl,e.lanes=i,e;case rl:return e=ot(19,r,t,o),e.elementType=rl,e.lanes=i,e;case ph:return Hs(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fh:s=10;break e;case hh:s=9;break e;case ku:s=11;break e;case Su:s=14;break e;case er:s=16,n=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=ot(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Nr(e,t,r,n){return e=ot(7,e,n,t),e.lanes=r,e}function Hs(e,t,r,n){return e=ot(22,e,n,t),e.elementType=ph,e.lanes=r,e.stateNode={isHidden:!1},e}function La(e,t,r){return e=ot(6,e,null,t),e.lanes=r,e}function Na(e,t,r){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qy(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function oc(e,t,r,n,o,i,s,a,l){return e=new Qy(e,t,r,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(i),e}function Yy(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function sm(e){if(!e)return vr;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(We(r))return ip(e,r,t)}return t}function am(e,t,r,n,o,i,s,a,l){return e=oc(r,n,!0,e,o,i,s,a,l),e.context=sm(null),r=e.current,n=Ne(),o=hr(r),i=Mt(n,o),i.callback=t??null,dr(r,i,o),e.current.lanes=o,Go(e,o,n),qe(e,n),e}function Vs(e,t,r,n){var o=t.current,i=Ne(),s=hr(o);return r=sm(r),t.context===null?t.context=r:t.pendingContext=r,t=Mt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=dr(o,t,s),e!==null&&(yt(e,o,s,i),Wi(e,o,s)),s}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ic(e,t){Ad(e,t),(e=e.alternate)&&Ad(e,t)}function Xy(){return null}var lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function sc(e){this._internalRoot=e}Ks.prototype.render=sc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Vs(e,t,null,null)};Ks.prototype.unmount=sc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Br(function(){Vs(null,e,null,null)}),t[qt]=null}};function Ks(e){this._internalRoot=e}Ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<rr.length&&t!==0&&t<rr[r].priority;r++);rr.splice(r,0,e),r===0&&Fh(e)}};function ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function Zy(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Cs(s);i.call(u)}}var s=am(t,n,e,0,null,!1,!1,"",Od);return e._reactRootContainer=s,e[qt]=s.current,Io(e.nodeType===8?e.parentNode:e),Br(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var u=Cs(l);a.call(u)}}var l=oc(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=l,e[qt]=l.current,Io(e.nodeType===8?e.parentNode:e),Br(function(){Vs(t,l,r,n)}),l}function Js(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Cs(s);a.call(l)}}Vs(t,s,e,o)}else s=Zy(r,t,e,o,n);return Cs(s)}Nh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=io(t.pendingLanes);r!==0&&(Cu(t,r|1),qe(t,de()),!(V&6)&&(Pn=de()+500,xr()))}break;case 13:Br(function(){var n=Ht(e,1);if(n!==null){var o=Ne();yt(n,e,1,o)}}),ic(e,1)}};ju=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=Ne();yt(t,e,134217728,r)}ic(e,134217728)}};zh=function(e){if(e.tag===13){var t=hr(e),r=Ht(e,t);if(r!==null){var n=Ne();yt(r,e,t,n)}ic(e,t)}};Dh=function(){return G};Uh=function(e,t){var r=G;try{return G=e,t()}finally{G=r}};fl=function(e,t,r){switch(t){case"input":if(il(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Us(n);if(!o)throw Error(P(90));gh(n),il(n,o)}}}break;case"textarea":yh(e,r);break;case"select":t=r.value,t!=null&&gn(e,!!r.multiple,t,!1)}};Eh=ec;Ch=Br;var e0={usingClientEntryPoint:!1,Events:[Qo,ln,Us,Sh,bh,ec]},Zn={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},t0={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Th(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||Xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Ls=ki.inject(t0),$t=ki}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0;Ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ac(t))throw Error(P(200));return Yy(e,t,null,r)};Ze.createRoot=function(e,t){if(!ac(e))throw Error(P(299));var r=!1,n="",o=lm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=oc(e,1,!1,null,null,r,!1,n,o),e[qt]=t.current,Io(e.nodeType===8?e.parentNode:e),new sc(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Th(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Br(e)};Ze.hydrate=function(e,t,r){if(!Gs(t))throw Error(P(200));return Js(null,e,t,!0,r)};Ze.hydrateRoot=function(e,t,r){if(!ac(e))throw Error(P(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=lm;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=am(t,null,e,1,r??null,o,!1,i,s),e[qt]=t.current,Io(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ks(t)};Ze.render=function(e,t,r){if(!Gs(t))throw Error(P(200));return Js(null,e,t,!1,r)};Ze.unmountComponentAtNode=function(e){if(!Gs(e))throw Error(P(40));return e._reactRootContainer?(Br(function(){Js(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=ec;Ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Gs(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Js(e,t,r,!1,n)};Ze.version="18.2.0-next-9e3b772b8-20220608";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(e){console.error(e)}}um(),ah.exports=Ze;var r0=ah.exports,Id=r0;Xa.createRoot=Id.createRoot,Xa.hydrateRoot=Id.hydrateRoot;const n0="modulepreload",o0=function(e){return"/ventanilla/"+e},Ld={},Dn=function(t,r,n){let o=Promise.resolve();return r&&r.length>0&&(document.getElementsByTagName("link"),o=Promise.all(r.map(i=>{if(i=o0(i),i in Ld)return;Ld[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":n0,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((u,c)=>{l.addEventListener("load",u),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})}))),o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Nd="popstate";function i0(e={}){function t(n,o){let{pathname:i,search:s,hash:a}=n.location;return Hl("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Wo(o)}return a0(t,r,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _t(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s0(){return Math.random().toString(36).substring(2,10)}function zd(e,t){return{usr:e.state,key:e.key,idx:t}}function Hl(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Un(t):t,state:r,key:t&&t.key||n||s0()}}function Wo({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Un(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function a0(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:i=!1}=n,s=o.history,a="POP",l=null,u=c();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function c(){return(s.state||{idx:null}).idx}function f(){a="POP";let S=c(),p=S==null?null:S-u;u=S,l&&l({action:a,location:y.location,delta:p})}function h(S,p){a="PUSH";let m=Hl(y.location,S,p);u=c()+1;let g=zd(m,u),_=y.createHref(m);try{s.pushState(g,"",_)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(_)}i&&l&&l({action:a,location:y.location,delta:1})}function v(S,p){a="REPLACE";let m=Hl(y.location,S,p);u=c();let g=zd(m,u),_=y.createHref(m);s.replaceState(g,"",_),i&&l&&l({action:a,location:y.location,delta:0})}function x(S){return l0(S)}let y={get action(){return a},get location(){return e(o,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Nd,f),l=S,()=>{o.removeEventListener(Nd,f),l=null}},createHref(S){return t(o,S)},createURL:x,encodeLocation(S){let p=x(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(S){return s.go(S)}};return y}function l0(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),ne(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Wo(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function cm(e,t,r="/"){return u0(e,t,r,!1)}function u0(e,t,r,n){let o=typeof t=="string"?Un(t):t,i=Kt(o.pathname||"/",r);if(i==null)return null;let s=dm(e);c0(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=_0(i);a=w0(s[l],u,n)}return a}function dm(e,t=[],r=[],n="",o=!1){let i=(s,a,l=o,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(n)&&l)return;ne(c.relativePath.startsWith(n),`Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(n.length)}let f=Bt([n,c.relativePath]),h=r.concat(c);s.children&&s.children.length>0&&(ne(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),dm(s.children,t,h,f,l)),!(s.path==null&&!s.index)&&t.push({path:f,score:v0(f,s.index),routesMeta:h})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of fm(s.path))i(s,a,!0,u)}),t}function fm(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let s=fm(n.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function c0(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:y0(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var d0=/^:[\w-]+$/,f0=3,h0=2,p0=1,m0=10,g0=-2,Dd=e=>e==="*";function v0(e,t){let r=e.split("/"),n=r.length;return r.some(Dd)&&(n+=g0),t&&(n+=h0),r.filter(o=>!Dd(o)).reduce((o,i)=>o+(d0.test(i)?f0:i===""?p0:m0),n)}function y0(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function w0(e,t,r=!1){let{routesMeta:n}=e,o={},i="/",s=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=js({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f&&u&&r&&!n[n.length-1].route.index&&(f=js({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Bt([i,f.pathname]),pathnameBase:E0(Bt([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Bt([i,f.pathnameBase]))}return s}function js(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=x0(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:n.reduce((u,{paramName:c,isOptional:f},h)=>{if(c==="*"){let x=a[h]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[h];return f&&!v?u[c]=void 0:u[c]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function x0(e,t=!1,r=!0){_t(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function _0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _t(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Kt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function k0(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Un(e):e;return{pathname:r?r.startsWith("/")?r:S0(r,t):t,search:C0(n),hash:j0(o)}}function S0(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function za(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function b0(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function lc(e){let t=b0(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function uc(e,t,r,n=!1){let o;typeof e=="string"?o=Un(e):(o={...e},ne(!o.pathname||!o.pathname.includes("?"),za("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),za("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),za("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=r;else{let f=t.length-1;if(!n&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=k0(o,a),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Bt=e=>e.join("/").replace(/\/\/+/g,"/"),E0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function P0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var hm=["POST","PUT","PATCH","DELETE"];new Set(hm);var T0=["GET",...hm];new Set(T0);var Fn=w.createContext(null);Fn.displayName="DataRouter";var Qs=w.createContext(null);Qs.displayName="DataRouterState";w.createContext(!1);var pm=w.createContext({isTransitioning:!1});pm.displayName="ViewTransition";var $0=w.createContext(new Map);$0.displayName="Fetchers";var R0=w.createContext(null);R0.displayName="Await";var kt=w.createContext(null);kt.displayName="Navigation";var Xo=w.createContext(null);Xo.displayName="Location";var St=w.createContext({outlet:null,matches:[],isDataRoute:!1});St.displayName="Route";var cc=w.createContext(null);cc.displayName="RouteError";function A0(e,{relative:t}={}){ne(Mn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=w.useContext(kt),{hash:o,pathname:i,search:s}=ei(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Bt([r,i])),n.createHref({pathname:a,search:s,hash:o})}function Mn(){return w.useContext(Xo)!=null}function Jt(){return ne(Mn(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Xo).location}var mm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gm(e){w.useContext(kt).static||w.useLayoutEffect(e)}function Zo(){let{isDataRoute:e}=w.useContext(St);return e?V0():O0()}function O0(){ne(Mn(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Fn),{basename:t,navigator:r}=w.useContext(kt),{matches:n}=w.useContext(St),{pathname:o}=Jt(),i=JSON.stringify(lc(n)),s=w.useRef(!1);return gm(()=>{s.current=!0}),w.useCallback((l,u={})=>{if(_t(s.current,mm),!s.current)return;if(typeof l=="number"){r.go(l);return}let c=uc(l,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Bt([t,c.pathname])),(u.replace?r.replace:r.push)(c,u.state,u)},[t,r,i,o,e])}w.createContext(null);function I0(){let{matches:e}=w.useContext(St),t=e[e.length-1];return t?t.params:{}}function ei(e,{relative:t}={}){let{matches:r}=w.useContext(St),{pathname:n}=Jt(),o=JSON.stringify(lc(r));return w.useMemo(()=>uc(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function L0(e,t){return vm(e,t)}function vm(e,t,r,n){var p;ne(Mn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=w.useContext(kt),{matches:i}=w.useContext(St),s=i[i.length-1],a=s?s.params:{},l=s?s.pathname:"/",u=s?s.pathnameBase:"/",c=s&&s.route;{let m=c&&c.path||"";ym(l,!c||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=Jt(),h;if(t){let m=typeof t=="string"?Un(t):t;ne(u==="/"||((p=m.pathname)==null?void 0:p.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=f;let v=h.pathname||"/",x=v;if(u!=="/"){let m=u.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=cm(e,{pathname:x});_t(c||y!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),_t(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=F0(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Bt([u,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:Bt([u,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,r,n);return t&&S?w.createElement(Xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},S):S}function N0(){let e=H0(),t=P0(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:o},r):null,s)}var z0=w.createElement(N0,null),D0=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?w.createElement(St.Provider,{value:this.props.routeContext},w.createElement(cc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function U0({routeContext:e,match:t,children:r}){let n=w.useContext(Fn);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(St.Provider,{value:e},r)}function F0(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let l=o.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);ne(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let s=!1,a=-1;if(r)for(let l=0;l<o.length;l++){let u=o[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=l),u.route.id){let{loaderData:c,errors:f}=r,h=u.route.loader&&!c.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||h){s=!0,a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}return o.reduceRight((l,u,c)=>{let f,h=!1,v=null,x=null;r&&(f=i&&u.route.id?i[u.route.id]:void 0,v=u.route.errorElement||z0,s&&(a<0&&c===0?(ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,x=null):a===c&&(h=!0,x=u.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,c+1)),S=()=>{let p;return f?p=v:h?p=x:u.route.Component?p=w.createElement(u.route.Component,null):u.route.element?p=u.route.element:p=l,w.createElement(U0,{match:u,routeContext:{outlet:l,matches:y,isDataRoute:r!=null},children:p})};return r&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?w.createElement(D0,{location:r.location,revalidation:r.revalidation,component:v,error:f,children:S(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):S()},null)}function dc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function M0(e){let t=w.useContext(Fn);return ne(t,dc(e)),t}function B0(e){let t=w.useContext(Qs);return ne(t,dc(e)),t}function W0(e){let t=w.useContext(St);return ne(t,dc(e)),t}function fc(e){let t=W0(e),r=t.matches[t.matches.length-1];return ne(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function q0(){return fc("useRouteId")}function H0(){var n;let e=w.useContext(cc),t=B0("useRouteError"),r=fc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function V0(){let{router:e}=M0("useNavigate"),t=fc("useNavigate"),r=w.useRef(!1);return gm(()=>{r.current=!0}),w.useCallback(async(o,i={})=>{_t(r.current,mm),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Ud={};function ym(e,t,r){!t&&!Ud[e]&&(Ud[e]=!0,_t(!1,r))}w.memo(K0);function K0({routes:e,future:t,state:r}){return vm(e,void 0,r,t)}function Kr({to:e,replace:t,state:r,relative:n}){ne(Mn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=w.useContext(kt);_t(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=w.useContext(St),{pathname:s}=Jt(),a=Zo(),l=uc(e,lc(i),s,n==="path"),u=JSON.stringify(l);return w.useEffect(()=>{a(JSON.parse(u),{replace:t,state:r,relative:n})},[a,u,n,t,r]),null}function Pr(e){ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function G0({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:i=!1}){ne(!Mn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:s,navigator:o,static:i,future:{}}),[s,o,i]);typeof r=="string"&&(r=Un(r));let{pathname:l="/",search:u="",hash:c="",state:f=null,key:h="default"}=r,v=w.useMemo(()=>{let x=Kt(l,s);return x==null?null:{location:{pathname:x,search:u,hash:c,state:f,key:h},navigationType:n}},[s,l,u,c,f,h,n]);return _t(v!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:w.createElement(kt.Provider,{value:a},w.createElement(Xo.Provider,{children:t,value:v}))}function J0({children:e,location:t}){return L0(Vl(e),t)}function Vl(e,t=[]){let r=[];return w.Children.forEach(e,(n,o)=>{if(!w.isValidElement(n))return;let i=[...t,o];if(n.type===w.Fragment){r.push.apply(r,Vl(n.props.children,i));return}ne(n.type===Pr,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ne(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Vl(n.props.children,i)),r.push(s)}),r}var Qi="get",Yi="application/x-www-form-urlencoded";function Ys(e){return e!=null&&typeof e.tagName=="string"}function Q0(e){return Ys(e)&&e.tagName.toLowerCase()==="button"}function Y0(e){return Ys(e)&&e.tagName.toLowerCase()==="form"}function X0(e){return Ys(e)&&e.tagName.toLowerCase()==="input"}function Z0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ew(e,t){return e.button===0&&(!t||t==="_self")&&!Z0(e)}var Si=null;function tw(){if(Si===null)try{new FormData(document.createElement("form"),0),Si=!1}catch{Si=!0}return Si}var rw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Da(e){return e!=null&&!rw.has(e)?(_t(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yi}"`),null):e}function nw(e,t){let r,n,o,i,s;if(Y0(e)){let a=e.getAttribute("action");n=a?Kt(a,t):null,r=e.getAttribute("method")||Qi,o=Da(e.getAttribute("enctype"))||Yi,i=new FormData(e)}else if(Q0(e)||X0(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(n=l?Kt(l,t):null,r=e.getAttribute("formmethod")||a.getAttribute("method")||Qi,o=Da(e.getAttribute("formenctype"))||Da(a.getAttribute("enctype"))||Yi,i=new FormData(a,e),!tw()){let{name:u,type:c,value:f}=e;if(c==="image"){let h=u?`${u}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else u&&i.append(u,f)}}else{if(Ys(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Qi,n=null,o=Yi,s=e}return i&&o==="text/plain"&&(s=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ow(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&Kt(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function iw(e,t){if(e.id in t)return t[e.id];try{let r=await Dn(()=>import(e.module),__vite__mapDeps([]));return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sw(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function aw(e,t,r){let n=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let s=await iw(i,r);return s.links?s.links():[]}return[]}));return dw(n.flat(1).filter(sw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Fd(e,t,r,n,o,i){let s=(l,u)=>r[u]?l.route.id!==r[u].route.id:!0,a=(l,u)=>{var c;return r[u].pathname!==l.pathname||((c=r[u].route.path)==null?void 0:c.endsWith("*"))&&r[u].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,u)=>s(l,u)||a(l,u)):i==="data"?t.filter((l,u)=>{var f;let c=n.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function lw(e,t,{includeHydrateFallback:r}={}){return uw(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function uw(e){return[...new Set(e)]}function cw(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function dw(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let i=JSON.stringify(cw(o));return r.has(i)||(r.add(i),n.push({key:i,link:o})),n},[])}function wm(){let e=w.useContext(Fn);return hc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function fw(){let e=w.useContext(Qs);return hc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var pc=w.createContext(void 0);pc.displayName="FrameworkContext";function xm(){let e=w.useContext(pc);return hc(e,"You must render this element inside a <HydratedRouter> element"),e}function hw(e,t){let r=w.useContext(pc),[n,o]=w.useState(!1),[i,s]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:f}=t,h=w.useRef(null);w.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let y=p=>{p.forEach(m=>{s(m.isIntersecting)})},S=new IntersectionObserver(y,{threshold:.5});return h.current&&S.observe(h.current),()=>{S.disconnect()}}},[e]),w.useEffect(()=>{if(n){let y=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(y)}}},[n]);let v=()=>{o(!0)},x=()=>{o(!1),s(!1)};return r?e!=="intent"?[i,h,{}]:[i,h,{onFocus:eo(a,v),onBlur:eo(l,x),onMouseEnter:eo(u,v),onMouseLeave:eo(c,x),onTouchStart:eo(f,v)}]:[!1,h,{}]}function eo(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function pw({page:e,...t}){let{router:r}=wm(),n=w.useMemo(()=>cm(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?w.createElement(gw,{page:e,matches:n,...t}):null}function mw(e){let{manifest:t,routeModules:r}=xm(),[n,o]=w.useState([]);return w.useEffect(()=>{let i=!1;return aw(e,t,r).then(s=>{i||o(s)}),()=>{i=!0}},[e,t,r]),n}function gw({page:e,matches:t,...r}){let n=Jt(),{manifest:o,routeModules:i}=xm(),{basename:s}=wm(),{loaderData:a,matches:l}=fw(),u=w.useMemo(()=>Fd(e,t,l,o,n,"data"),[e,t,l,o,n]),c=w.useMemo(()=>Fd(e,t,l,o,n,"assets"),[e,t,l,o,n]),f=w.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let x=new Set,y=!1;if(t.forEach(p=>{var g;let m=o.routes[p.route.id];!m||!m.hasLoader||(!u.some(_=>_.route.id===p.route.id)&&p.route.id in a&&((g=i[p.route.id])!=null&&g.shouldRevalidate)||m.hasClientLoader?y=!0:x.add(p.route.id))}),x.size===0)return[];let S=ow(e,s,"data");return y&&x.size>0&&S.searchParams.set("_routes",t.filter(p=>x.has(p.route.id)).map(p=>p.route.id).join(",")),[S.pathname+S.search]},[s,a,n,o,u,t,e,i]),h=w.useMemo(()=>lw(c,o),[c,o]),v=mw(c);return w.createElement(w.Fragment,null,f.map(x=>w.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),h.map(x=>w.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),v.map(({key:x,link:y})=>w.createElement("link",{key:x,nonce:r.nonce,...y})))}function vw(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var _m=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_m&&(window.__reactRouterVersion="7.8.1")}catch{}function yw({basename:e,children:t,window:r}){let n=w.useRef();n.current==null&&(n.current=i0({window:r,v5Compat:!0}));let o=n.current,[i,s]=w.useState({action:o.action,location:o.location}),a=w.useCallback(l=>{w.startTransition(()=>s(l))},[s]);return w.useLayoutEffect(()=>o.listen(a),[o,a]),w.createElement(G0,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sm=w.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f,...h},v){let{basename:x}=w.useContext(kt),y=typeof u=="string"&&km.test(u),S,p=!1;if(typeof u=="string"&&y&&(S=u,_m))try{let L=new URL(window.location.href),$=u.startsWith("//")?new URL(L.protocol+u):new URL(u),H=Kt($.pathname,x);$.origin===L.origin&&H!=null?u=H+$.search+$.hash:p=!0}catch{_t(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=A0(u,{relative:o}),[g,_,E]=hw(n,h),b=kw(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:o,viewTransition:f});function C(L){t&&t(L),L.defaultPrevented||b(L)}let T=w.createElement("a",{...h,...E,href:S||m,onClick:p||i?t:C,ref:vw(v,_),target:l,"data-discover":!y&&r==="render"?"true":void 0});return g&&!y?w.createElement(w.Fragment,null,T,w.createElement(pw,{page:m})):T});Sm.displayName="Link";var ww=w.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:i,to:s,viewTransition:a,children:l,...u},c){let f=ei(s,{relative:u.relative}),h=Jt(),v=w.useContext(Qs),{navigator:x,basename:y}=w.useContext(kt),S=v!=null&&jw(f)&&a===!0,p=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,m=h.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(m=m.toLowerCase(),g=g?g.toLowerCase():null,p=p.toLowerCase()),g&&y&&(g=Kt(g,y)||g);const _=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=m===p||!o&&m.startsWith(p)&&m.charAt(_)==="/",b=g!=null&&(g===p||!o&&g.startsWith(p)&&g.charAt(p.length)==="/"),C={isActive:E,isPending:b,isTransitioning:S},T=E?t:void 0,L;typeof n=="function"?L=n(C):L=[n,E?"active":null,b?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let $=typeof i=="function"?i(C):i;return w.createElement(Sm,{...u,"aria-current":T,className:L,ref:c,style:$,to:s,viewTransition:a},typeof l=="function"?l(C):l)});ww.displayName="NavLink";var xw=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:i,method:s=Qi,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:f,...h},v)=>{let x=Ew(),y=Cw(a,{relative:u}),S=s.toLowerCase()==="get"?"get":"post",p=typeof a=="string"&&km.test(a),m=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let _=g.nativeEvent.submitter,E=(_==null?void 0:_.getAttribute("formmethod"))||s;x(_||g.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:o,state:i,relative:u,preventScrollReset:c,viewTransition:f})};return w.createElement("form",{ref:v,method:S,action:y,onSubmit:n?l:m,...h,"data-discover":!p&&e==="render"?"true":void 0})});xw.displayName="Form";function _w(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bm(e){let t=w.useContext(Fn);return ne(t,_w(e)),t}function kw(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:i,viewTransition:s}={}){let a=Zo(),l=Jt(),u=ei(e,{relative:i});return w.useCallback(c=>{if(ew(c,t)){c.preventDefault();let f=r!==void 0?r:Wo(l)===Wo(u);a(e,{replace:f,state:n,preventScrollReset:o,relative:i,viewTransition:s})}},[l,a,u,r,n,t,e,o,i,s])}var Sw=0,bw=()=>`__${String(++Sw)}__`;function Ew(){let{router:e}=bm("useSubmit"),{basename:t}=w.useContext(kt),r=q0();return w.useCallback(async(n,o={})=>{let{action:i,method:s,encType:a,formData:l,body:u}=nw(n,t);if(o.navigate===!1){let c=o.fetcherKey||bw();await e.fetch(c,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||s,formEncType:o.encType||a,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||s,formEncType:o.encType||a,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Cw(e,{relative:t}={}){let{basename:r}=w.useContext(kt),n=w.useContext(St);ne(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),i={...ei(e||".",{relative:t})},s=Jt();if(e==null){i.search=s.search;let a=new URLSearchParams(i.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let c=a.toString();i.search=c?`?${c}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:Bt([r,i.pathname])),Wo(i)}function jw(e,{relative:t}={}){let r=w.useContext(pm);ne(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=bm("useViewTransitionState"),o=ei(e,{relative:t});if(!r.isTransitioning)return!1;let i=Kt(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Kt(r.nextLocation.pathname,n)||r.nextLocation.pathname;return js(o.pathname,s)!=null||js(o.pathname,i)!=null}var Re=function(){return Re=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Re.apply(this,arguments)};function qo(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var ee="-ms-",ko="-moz-",K="-webkit-",Em="comm",Xs="rule",mc="decl",Pw="@import",Cm="@keyframes",Tw="@layer",jm=Math.abs,gc=String.fromCharCode,Kl=Object.assign;function $w(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function Pm(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Xi(e,t,r){return e.indexOf(t,r)}function xe(e,t){return e.charCodeAt(t)|0}function Tn(e,t,r){return e.slice(t,r)}function jt(e){return e.length}function Tm(e){return e.length}function ao(e,t){return t.push(e),e}function Rw(e,t){return e.map(t).join("")}function Md(e,t){return e.filter(function(r){return!Nt(r,t)})}var Zs=1,$n=1,$m=0,ut=0,he=0,Bn="";function ea(e,t,r,n,o,i,s,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Zs,column:$n,length:s,return:"",siblings:a}}function Xt(e,t){return Kl(ea("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Gr(e){for(;e.root;)e=Xt(e.root,{children:[e]});ao(e,e.siblings)}function Aw(){return he}function Ow(){return he=ut>0?xe(Bn,--ut):0,$n--,he===10&&($n=1,Zs--),he}function wt(){return he=ut<$m?xe(Bn,ut++):0,$n++,he===10&&($n=1,Zs++),he}function zr(){return xe(Bn,ut)}function Zi(){return ut}function ta(e,t){return Tn(Bn,e,t)}function Gl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Iw(e){return Zs=$n=1,$m=jt(Bn=e),ut=0,[]}function Lw(e){return Bn="",e}function Ua(e){return Pm(ta(ut-1,Jl(e===91?e+2:e===40?e+1:e)))}function Nw(e){for(;(he=zr())&&he<33;)wt();return Gl(e)>2||Gl(he)>3?"":" "}function zw(e,t){for(;--t&&wt()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return ta(e,Zi()+(t<6&&zr()==32&&wt()==32))}function Jl(e){for(;wt();)switch(he){case e:return ut;case 34:case 39:e!==34&&e!==39&&Jl(he);break;case 40:e===41&&Jl(e);break;case 92:wt();break}return ut}function Dw(e,t){for(;wt()&&e+he!==57;)if(e+he===84&&zr()===47)break;return"/*"+ta(t,ut-1)+"*"+gc(e===47?e:wt())}function Uw(e){for(;!Gl(zr());)wt();return ta(e,ut)}function Fw(e){return Lw(es("",null,null,null,[""],e=Iw(e),0,[0],e))}function es(e,t,r,n,o,i,s,a,l){for(var u=0,c=0,f=s,h=0,v=0,x=0,y=1,S=1,p=1,m=0,g="",_=o,E=i,b=n,C=g;S;)switch(x=m,m=wt()){case 40:if(x!=108&&xe(C,f-1)==58){Xi(C+=B(Ua(m),"&","&\f"),"&\f",jm(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Ua(m);break;case 9:case 10:case 13:case 32:C+=Nw(x);break;case 92:C+=zw(Zi()-1,7);continue;case 47:switch(zr()){case 42:case 47:ao(Mw(Dw(wt(),Zi()),t,r,l),l);break;default:C+="/"}break;case 123*y:a[u++]=jt(C)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:p==-1&&(C=B(C,/\f/g,"")),v>0&&jt(C)-f&&ao(v>32?Wd(C+";",n,r,f-1,l):Wd(B(C," ","")+";",n,r,f-2,l),l);break;case 59:C+=";";default:if(ao(b=Bd(C,t,r,u,c,o,a,g,_=[],E=[],f,i),i),m===123)if(c===0)es(C,t,b,b,_,i,f,a,E);else switch(h===99&&xe(C,3)===110?100:h){case 100:case 108:case 109:case 115:es(e,b,b,n&&ao(Bd(e,b,b,0,0,o,a,g,o,_=[],f,E),E),o,E,f,a,n?_:E);break;default:es(C,b,b,b,[""],E,0,a,E)}}u=c=v=0,y=p=1,g=C="",f=s;break;case 58:f=1+jt(C),v=x;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&Ow()==125)continue}switch(C+=gc(m),m*y){case 38:p=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(jt(C)-1)*p,p=1;break;case 64:zr()===45&&(C+=Ua(wt())),h=zr(),c=f=jt(g=C+=Uw(Zi())),m++;break;case 45:x===45&&jt(C)==2&&(y=0)}}return i}function Bd(e,t,r,n,o,i,s,a,l,u,c,f){for(var h=o-1,v=o===0?i:[""],x=Tm(v),y=0,S=0,p=0;y<n;++y)for(var m=0,g=Tn(e,h+1,h=jm(S=s[y])),_=e;m<x;++m)(_=Pm(S>0?v[m]+" "+g:B(g,/&\f/g,v[m])))&&(l[p++]=_);return ea(e,t,r,o===0?Xs:a,l,u,c,f)}function Mw(e,t,r,n){return ea(e,t,r,Em,gc(Aw()),Tn(e,2,-2),0,n)}function Wd(e,t,r,n,o){return ea(e,t,r,mc,Tn(e,0,n),Tn(e,n+1,-1),n,o)}function Rm(e,t,r){switch($w(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return ko+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+ko+e+ee+e+e;case 5936:switch(xe(e,t+11)){case 114:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+ee+e+e;case 6165:return K+e+ee+"flex-"+e+e;case 5187:return K+e+B(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return K+e+ee+"flex-item-"+B(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":ee+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return K+e+ee+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+ee+B(e,"shrink","negative")+e;case 5292:return K+e+ee+B(e,"basis","preferred-size")+e;case 6060:return K+"box-"+B(e,"-grow","")+K+e+ee+B(e,"grow","positive")+e;case 4554:return K+B(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return ee+"grid-column-align"+Tn(e,t)+e;break;case 2592:case 3360:return ee+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Nt(n.props,/grid-\w+-end/)})?~Xi(e+(r=r[t].value),"span",0)?e:ee+B(e,"-start","")+e+ee+"grid-row-span:"+(~Xi(r,"span",0)?Nt(r,/\d+/):+Nt(r,/\d+/)-+Nt(e,/\d+/))+";":ee+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Nt(n.props,/grid-\w+-start/)})?e:ee+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+ko+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xi(e,"stretch",0)?Rm(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,l,u){return ee+o+":"+i+u+(s?ee+o+"-span:"+(a?l:+l-+i)+u:"")+e});case 4949:if(xe(e,t+6)===121)return B(e,":",":"+K)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(xe(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+ee+"$2box$3")+e;case 100:return B(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Ps(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Bw(e,t,r,n){switch(e.type){case Tw:if(e.children.length)break;case Pw:case mc:return e.return=e.return||e.value;case Em:return"";case Cm:return e.return=e.value+"{"+Ps(e.children,n)+"}";case Xs:if(!jt(e.value=e.props.join(",")))return""}return jt(r=Ps(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ww(e){var t=Tm(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function qw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Hw(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case mc:e.return=Rm(e.value,e.length,r);return;case Cm:return Ps([Xt(e,{value:B(e.value,"@","@"+K)})],n);case Xs:if(e.length)return Rw(r=e.props,function(o){switch(Nt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gr(Xt(e,{props:[B(o,/:(read-\w+)/,":"+ko+"$1")]})),Gr(Xt(e,{props:[o]})),Kl(e,{props:Md(r,n)});break;case"::placeholder":Gr(Xt(e,{props:[B(o,/:(plac\w+)/,":"+K+"input-$1")]})),Gr(Xt(e,{props:[B(o,/:(plac\w+)/,":"+ko+"$1")]})),Gr(Xt(e,{props:[B(o,/:(plac\w+)/,ee+"input-$1")]})),Gr(Xt(e,{props:[o]})),Kl(e,{props:Md(r,n)});break}return""})}}var Vw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},Rn=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",Am="active",Om="data-styled-version",ra="6.1.19",vc=`/*!sc*/
`,Ts=typeof window<"u"&&typeof document<"u",Kw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),Gw={},na=Object.freeze([]),An=Object.freeze({});function Im(e,t,r){return r===void 0&&(r=An),e.theme!==r.theme&&e.theme||t||r.theme}var Lm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qw=/(^-|-$)/g;function qd(e){return e.replace(Jw,"-").replace(Qw,"")}var Yw=/(a)(d)/gi,bi=52,Hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ql(e){var t,r="";for(t=Math.abs(e);t>bi;t=t/bi|0)r=Hd(t%bi)+r;return(Hd(t%bi)+r).replace(Yw,"$1-$2")}var Fa,Nm=5381,mn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},zm=function(e){return mn(Nm,e)};function Dm(e){return Ql(zm(e)>>>0)}function Xw(e){return e.displayName||e.name||"Component"}function Ma(e){return typeof e=="string"&&!0}var Um=typeof Symbol=="function"&&Symbol.for,Fm=Um?Symbol.for("react.memo"):60115,Zw=Um?Symbol.for("react.forward_ref"):60112,ex={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rx=((Fa={})[Zw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fa[Fm]=Mm,Fa);function Vd(e){return("type"in(t=e)&&t.type.$$typeof)===Fm?Mm:"$$typeof"in e?rx[e.$$typeof]:ex;var t}var nx=Object.defineProperty,ox=Object.getOwnPropertyNames,Kd=Object.getOwnPropertySymbols,ix=Object.getOwnPropertyDescriptor,sx=Object.getPrototypeOf,Gd=Object.prototype;function Bm(e,t,r){if(typeof t!="string"){if(Gd){var n=sx(t);n&&n!==Gd&&Bm(e,n,r)}var o=ox(t);Kd&&(o=o.concat(Kd(t)));for(var i=Vd(e),s=Vd(t),a=0;a<o.length;++a){var l=o[a];if(!(l in tx||r&&r[l]||s&&l in s||i&&l in i)){var u=ix(t,l);try{nx(e,l,u)}catch{}}}}return e}function On(e){return typeof e=="function"}function yc(e){return typeof e=="object"&&"styledComponentId"in e}function Ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Yl(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xl(e,t,r){if(r===void 0&&(r=!1),!r&&!Ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Xl(e[n],t[n]);else if(Ho(t))for(var n in t)e[n]=Xl(e[n],t[n]);return e}function wc(e,t){Object.defineProperty(e,"toString",{value:t})}function ti(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ax=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw ti(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(vc);return r},e}(),ts=new Map,$s=new Map,rs=1,Ei=function(e){if(ts.has(e))return ts.get(e);for(;$s.has(rs);)rs++;var t=rs++;return ts.set(e,t),$s.set(t,e),t},lx=function(e,t){rs=t+1,ts.set(e,t),$s.set(t,e)},ux="style[".concat(Rn,"][").concat(Om,'="').concat(ra,'"]'),cx=new RegExp("^".concat(Rn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dx=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},fx=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(vc),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var l=a.match(cx);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(lx(c,u),dx(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Jd=function(e){for(var t=document.querySelectorAll(ux),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Rn)!==Am&&(fx(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function hx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wm=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Rn,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Rn,Am),n.setAttribute(Om,ra);var s=hx();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},px=function(){function e(t){this.element=Wm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw ti(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),mx=function(){function e(t){this.element=Wm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qd=Ts,vx={isServer:!Ts,useCSSOMInjection:!Kw},Rs=function(){function e(t,r,n){t===void 0&&(t=An),r===void 0&&(r={});var o=this;this.options=Re(Re({},vx),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Ts&&Qd&&(Qd=!1,Jd(this)),wc(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",u=function(f){var h=function(p){return $s.get(p)}(f);if(h===void 0)return"continue";var v=i.names.get(h),x=s.getGroup(f);if(v===void 0||!v.size||x.length===0)return"continue";var y="".concat(Rn,".g").concat(f,'[id="').concat(h,'"]'),S="";v!==void 0&&v.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(x).concat(y,'{content:"').concat(S,'"}').concat(vc)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return Ei(t)},e.prototype.rehydrate=function(){!this.server&&Ts&&Jd(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Re(Re({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new gx(o):n?new px(o):new mx(o)}(this.options),new ax(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Ei(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Ei(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ei(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yx=/&/g,wx=/^\s*\/\/.*$/gm;function qm(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=qm(r.children,t)),r})}function xx(e){var t,r,n,o=An,i=o.options,s=i===void 0?An:i,a=o.plugins,l=a===void 0?na:a,u=function(h,v,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===Xs&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(yx,r).replace(n,u))}),s.prefix&&c.push(Hw),c.push(Bw);var f=function(h,v,x,y){v===void 0&&(v=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var S=h.replace(wx,""),p=Fw(x||v?"".concat(x," ").concat(v," { ").concat(S," }"):S);s.namespace&&(p=qm(p,s.namespace));var m=[];return Ps(p,Ww(c.concat(qw(function(g){return m.push(g)})))),m};return f.hash=l.length?l.reduce(function(h,v){return v.name||ti(15),mn(h,v.name)},Nm).toString():"",f}var _x=new Rs,Zl=xx(),Hm=Tt.createContext({shouldForwardProp:void 0,styleSheet:_x,stylis:Zl});Hm.Consumer;Tt.createContext(void 0);function eu(){return w.useContext(Hm)}var kx=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Zl);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,wc(this,function(){throw ti(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zl),this.name+t.hash},e}(),Sx=function(e){return e>="A"&&e<="Z"};function Yd(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Sx(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Vm=function(e){return e==null||e===!1||e===""},Km=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Vm(i)&&(Array.isArray(i)&&i.isCss||On(i)?n.push("".concat(Yd(o),":"),i,";"):Ho(i)?n.push.apply(n,qo(qo(["".concat(o," {")],Km(i),!1),["}"],!1)):n.push("".concat(Yd(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Vw||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function mr(e,t,r,n){if(Vm(e))return[];if(yc(e))return[".".concat(e.styledComponentId)];if(On(e)){if(!On(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return mr(o,t,r,n)}var i;return e instanceof kx?r?(e.inject(r,n),[e.getName(n)]):[e]:Ho(e)?Km(e):Array.isArray(e)?Array.prototype.concat.apply(na,e.map(function(s){return mr(s,t,r,n)})):[e.toString()]}function Gm(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(On(r)&&!yc(r))return!1}return!0}var bx=zm(ra),Ex=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Gm(t),this.componentId=r,this.baseHash=mn(bx,r),this.baseStyle=n,Rs.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Ir(o,this.staticRulesId);else{var i=Yl(mr(this.rules,t,r,n)),s=Ql(mn(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=Ir(o,s),this.staticRulesId=s}else{for(var l=mn(this.baseHash,n.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=Yl(mr(f,t,r,n));l=mn(l,h+c),u+=h}}if(u){var v=Ql(l>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(u,".".concat(v),void 0,this.componentId)),o=Ir(o,v)}}return o},e}(),xc=Tt.createContext(void 0);xc.Consumer;var Ba={};function Cx(e,t,r){var n=yc(e),o=e,i=!Ma(e),s=t.attrs,a=s===void 0?na:s,l=t.componentId,u=l===void 0?function(_,E){var b=typeof _!="string"?"sc":qd(_);Ba[b]=(Ba[b]||0)+1;var C="".concat(b,"-").concat(Dm(ra+b+Ba[b]));return E?"".concat(E,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(_){return Ma(_)?"styled.".concat(_):"Styled(".concat(Xw(_),")")}(e):c,h=t.displayName&&t.componentId?"".concat(qd(t.displayName),"-").concat(t.componentId):t.componentId||u,v=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(n&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(_,E){return y(_,E)&&S(_,E)}}else x=y}var p=new Ex(r,h,n?o.componentStyle:void 0);function m(_,E){return function(b,C,T){var L=b.attrs,$=b.componentStyle,H=b.defaultProps,R=b.foldedComponentIds,J=b.styledComponentId,fe=b.target,ae=Tt.useContext(xc),ce=eu(),ke=b.shouldForwardProp||ce.shouldForwardProp,j=Im(C,ae,H)||An,O=function(He,Se,Ve){for(var F,X=Re(Re({},Se),{className:void 0,theme:Ve}),Ke=0;Ke<He.length;Ke+=1){var At=On(F=He[Ke])?F(X):F;for(var ct in At)X[ct]=ct==="className"?Ir(X[ct],At[ct]):ct==="style"?Re(Re({},X[ct]),At[ct]):At[ct]}return Se.className&&(X.className=Ir(X.className,Se.className)),X}(L,C,j),N=O.as||fe,z={};for(var D in O)O[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&O.theme===j||(D==="forwardedAs"?z.as=O.forwardedAs:ke&&!ke(D,N)||(z[D]=O[D]));var Oe=function(He,Se){var Ve=eu(),F=He.generateAndInjectStyles(Se,Ve.styleSheet,Ve.stylis);return F}($,O),je=Ir(R,J);return Oe&&(je+=" "+Oe),O.className&&(je+=" "+O.className),z[Ma(N)&&!Lm.has(N)?"class":"className"]=je,T&&(z.ref=T),w.createElement(N,z)}(g,_,E)}m.displayName=f;var g=Tt.forwardRef(m);return g.attrs=v,g.componentStyle=p,g.displayName=f,g.shouldForwardProp=x,g.foldedComponentIds=n?Ir(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=h,g.target=n?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=n?function(E){for(var b=[],C=1;C<arguments.length;C++)b[C-1]=arguments[C];for(var T=0,L=b;T<L.length;T++)Xl(E,L[T],!0);return E}({},o.defaultProps,_):_}}),wc(g,function(){return".".concat(g.styledComponentId)}),i&&Bm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Xd(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Zd=function(e){return Object.assign(e,{isCss:!0})};function Jm(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(On(e)||Ho(e))return Zd(mr(Xd(na,qo([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?mr(n):Zd(mr(Xd(n,t)))}function tu(e,t,r){if(r===void 0&&(r=An),!t)throw ti(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,Jm.apply(void 0,qo([o],i,!1)))};return n.attrs=function(o){return tu(e,t,Re(Re({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return tu(e,t,Re(Re({},r),o))},n}var Qm=function(e){return tu(Cx,e)},k=Qm;Lm.forEach(function(e){k[e]=Qm(e)});var jx=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Gm(t),Rs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Yl(mr(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Rs.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Px(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Jm.apply(void 0,qo([e],t,!1)),o="sc-global-".concat(Dm(JSON.stringify(n))),i=new jx(n,o),s=function(l){var u=eu(),c=Tt.useContext(xc),f=Tt.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),Tt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,h){if(i.isStatic)i.renderStyles(l,Gw,c,h);else{var v=Re(Re({},u),{theme:Im(u,f,s.defaultProps)});i.renderStyles(l,v,c,h)}}return Tt.memo(s)}const Tx=Px`
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
`,$x=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Dn(()=>Promise.resolve().then(()=>Wn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class _c extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class Rx extends _c{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class ef extends _c{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class tf extends _c{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var ru;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(ru||(ru={}));var Ax=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class Ox{constructor(t,{headers:r={},customFetch:n,region:o=ru.Any}={}){this.url=t,this.headers=r,this.region=o,this.fetch=$x(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return Ax(this,void 0,void 0,function*(){try{const{headers:o,method:i,body:s}=r;let a={},{region:l}=r;l||(l=this.region);const u=new URL(`${this.url}/${t}`);l&&l!=="any"&&(a["x-region"]=l,u.searchParams.set("forceFunctionRegion",l));let c;s&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",c=s):typeof s=="string"?(a["Content-Type"]="text/plain",c=s):typeof FormData<"u"&&s instanceof FormData?c=s:(a["Content-Type"]="application/json",c=JSON.stringify(s)));const f=yield this.fetch(u.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),o),body:c}).catch(y=>{throw new Rx(y)}),h=f.headers.get("x-relay-error");if(h&&h==="true")throw new ef(f);if(!f.ok)throw new tf(f);let v=((n=f.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),x;return v==="application/json"?x=yield f.json():v==="application/octet-stream"?x=yield f.blob():v==="text/event-stream"?x=f:v==="multipart/form-data"?x=yield f.formData():x=yield f.text(),{data:x,error:null,response:f}}catch(o){return{data:null,error:o,response:o instanceof tf||o instanceof ef?o.context:void 0}}})}}var Fe={},kc={},oa={},ri={},ia={},sa={},Ix=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},In=Ix();const Lx=In.fetch,Ym=In.fetch.bind(In),Xm=In.Headers,Nx=In.Request,zx=In.Response,Wn=Object.freeze(Object.defineProperty({__proto__:null,Headers:Xm,Request:Nx,Response:zx,default:Ym,fetch:Lx},Symbol.toStringTag,{value:"Module"})),Dx=Rg(Wn);var aa={};Object.defineProperty(aa,"__esModule",{value:!0});let Ux=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};aa.default=Ux;var Zm=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sa,"__esModule",{value:!0});const Fx=Zm(Dx),Mx=Zm(aa);let Bx=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=Fx.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let o=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var s,a,l;let u=null,c=null,f=null,h=i.status,v=i.statusText;if(i.ok){if(this.method!=="HEAD"){const p=await i.text();p===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?c=p:c=JSON.parse(p))}const y=(s=this.headers.Prefer)===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),S=(a=i.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");y&&S&&S.length>1&&(f=parseInt(S[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(c)&&(c.length>1?(u={code:"PGRST116",details:`Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},c=null,f=null,h=406,v="Not Acceptable"):c.length===1?c=c[0]:c=null)}else{const y=await i.text();try{u=JSON.parse(y),Array.isArray(u)&&i.status===404&&(c=[],u=null,h=200,v="OK")}catch{i.status===404&&y===""?(h=204,v="No Content"):u={message:y}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,h=200,v="OK"),u&&this.shouldThrowOnError)throw new Mx.default(u)}return{error:u,data:c,count:f,status:h,statusText:v}});return this.shouldThrowOnError||(o=o.catch(i=>{var s,a,l;return{error:{message:`${(s=i==null?void 0:i.name)!==null&&s!==void 0?s:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),o.then(t,r)}returns(){return this}overrideTypes(){return this}};sa.default=Bx;var Wx=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ia,"__esModule",{value:!0});const qx=Wx(sa);let Hx=class extends qx.default{select(t){let r=!1;const n=(t??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:o,referencedTable:i=o}={}){const s=i?`${i}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const o=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(o,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:o=n}={}){const i=typeof o>"u"?"offset":`${o}.offset`,s=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(s,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:o=!1,wal:i=!1,format:s="text"}={}){var a;const l=[t?"analyze":null,r?"verbose":null,n?"settings":null,o?"buffers":null,i?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${s}; for="${u}"; options=${l};`,s==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};ia.default=Hx;var Vx=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ri,"__esModule",{value:!0});const Kx=Vx(ia);let Gx=class extends Kx.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:o}={}){let i="";o==="plain"?i="pl":o==="phrase"?i="ph":o==="websearch"&&(i="w");const s=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${i}fts${s}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const o=n?`${n}.or`:"or";return this.url.searchParams.append(o,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};ri.default=Gx;var Jx=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oa,"__esModule",{value:!0});const to=Jx(ri);let Qx=class{constructor(t,{headers:r={},schema:n,fetch:o}){this.url=t,this.headers=r,this.schema=n,this.fetch=o}select(t,{head:r=!1,count:n}={}){const o=r?"HEAD":"GET";let i=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!i?"":(a==='"'&&(i=!i),a)).join("");return this.url.searchParams.set("select",s),n&&(this.headers.Prefer=`count=${n}`),new to.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const o="POST",i=[];if(this.headers.Prefer&&i.push(this.headers.Prefer),r&&i.push(`count=${r}`),n||i.push("missing=default"),this.headers.Prefer=i.join(","),Array.isArray(t)){const s=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(s.length>0){const a=[...new Set(s)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new to.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:o,defaultToNull:i=!0}={}){const s="POST",a=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&a.push(this.headers.Prefer),o&&a.push(`count=${o}`),i||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((u,c)=>u.concat(Object.keys(c)),[]);if(l.length>0){const u=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",u.join(","))}}return new to.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",o=[];return this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),this.headers.Prefer=o.join(","),new to.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new to.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};oa.default=Qx;var la={},ua={};Object.defineProperty(ua,"__esModule",{value:!0});ua.version=void 0;ua.version="0.0.0-automated";Object.defineProperty(la,"__esModule",{value:!0});la.DEFAULT_HEADERS=void 0;const Yx=ua;la.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${Yx.version}`};var eg=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kc,"__esModule",{value:!0});const Xx=eg(oa),Zx=eg(ri),e1=la;let t1=class tg{constructor(t,{headers:r={},schema:n,fetch:o}={}){this.url=t,this.headers=Object.assign(Object.assign({},e1.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=o}from(t){const r=new URL(`${this.url}/${t}`);return new Xx.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new tg(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:o=!1,count:i}={}){let s;const a=new URL(`${this.url}/rpc/${t}`);let l;n||o?(s=n?"HEAD":"GET",Object.entries(r).filter(([c,f])=>f!==void 0).map(([c,f])=>[c,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([c,f])=>{a.searchParams.append(c,f)})):(s="POST",l=r);const u=Object.assign({},this.headers);return i&&(u.Prefer=`count=${i}`),new Zx.default({method:s,url:a,headers:u,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};kc.default=t1;var qn=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.PostgrestError=Fe.PostgrestBuilder=Fe.PostgrestTransformBuilder=Fe.PostgrestFilterBuilder=Fe.PostgrestQueryBuilder=Fe.PostgrestClient=void 0;const rg=qn(kc);Fe.PostgrestClient=rg.default;const ng=qn(oa);Fe.PostgrestQueryBuilder=ng.default;const og=qn(ri);Fe.PostgrestFilterBuilder=og.default;const ig=qn(ia);Fe.PostgrestTransformBuilder=ig.default;const sg=qn(sa);Fe.PostgrestBuilder=sg.default;const ag=qn(aa);Fe.PostgrestError=ag.default;var r1=Fe.default={PostgrestClient:rg.default,PostgrestQueryBuilder:ng.default,PostgrestFilterBuilder:og.default,PostgrestTransformBuilder:ig.default,PostgrestBuilder:sg.default,PostgrestError:ag.default};const{PostgrestClient:n1,PostgrestQueryBuilder:bE,PostgrestFilterBuilder:EE,PostgrestTransformBuilder:CE,PostgrestBuilder:jE,PostgrestError:PE}=r1;class o1{static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"&&process.versions&&process.versions.node){const r=parseInt(process.versions.node.split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const i1="2.15.1",s1=`realtime-js/${i1}`,a1="1.0.0",nu=1e4,l1=1e3,u1=100;var So;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(So||(So={}));var me;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(me||(me={}));var mt;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(mt||(mt={}));var ou;(function(e){e.websocket="websocket"})(ou||(ou={}));var $r;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})($r||($r={}));class c1{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const o=r.getUint8(1),i=r.getUint8(2);let s=this.HEADER_LENGTH+2;const a=n.decode(t.slice(s,s+o));s=s+o;const l=n.decode(t.slice(s,s+i));s=s+i;const u=JSON.parse(n.decode(t.slice(s,t.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class lg{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Q;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Q||(Q={}));const rf=(e,t,r={})=>{var n;const o=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((i,s)=>(i[s]=d1(s,e,t,o),i),{})},d1=(e,t,r,n)=>{const o=t.find(a=>a.name===e),i=o==null?void 0:o.type,s=r[e];return i&&!n.includes(i)?ug(i,s):iu(s)},ug=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return m1(t,r)}switch(e){case Q.bool:return f1(t);case Q.float4:case Q.float8:case Q.int2:case Q.int4:case Q.int8:case Q.numeric:case Q.oid:return h1(t);case Q.json:case Q.jsonb:return p1(t);case Q.timestamp:return g1(t);case Q.abstime:case Q.date:case Q.daterange:case Q.int4range:case Q.int8range:case Q.money:case Q.reltime:case Q.text:case Q.time:case Q.timestamptz:case Q.timetz:case Q.tsrange:case Q.tstzrange:return iu(t);default:return iu(t)}},iu=e=>e,f1=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},h1=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},p1=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},m1=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let i;const s=e.slice(1,r);try{i=JSON.parse("["+s+"]")}catch{i=s?s.split(","):[]}return i.map(a=>ug(t,a))}return e},g1=e=>typeof e=="string"?e.replace(" ","T"):e,cg=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"};class Wa{constructor(t,r,n={},o=nu){this.channel=t,this.event=r,this.payload=n,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var nf;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(nf||(nf={}));class bo{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=bo.syncState(this.state,o,i,s),this.pendingDiffs.forEach(l=>{this.state=bo.syncDiff(this.state,l,i,s)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=bo.syncDiff(this.state,o,i,s),a())}),this.onJoin((o,i,s)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:i,newPresences:s})}),this.onLeave((o,i,s)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:i,leftPresences:s})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,o){const i=this.cloneDeep(t),s=this.transformState(r),a={},l={};return this.map(i,(u,c)=>{s[u]||(l[u]=c)}),this.map(s,(u,c)=>{const f=i[u];if(f){const h=c.map(S=>S.presence_ref),v=f.map(S=>S.presence_ref),x=c.filter(S=>v.indexOf(S.presence_ref)<0),y=f.filter(S=>h.indexOf(S.presence_ref)<0);x.length>0&&(a[u]=x),y.length>0&&(l[u]=y)}else a[u]=c}),this.syncDiff(i,{joins:a,leaves:l},n,o)}static syncDiff(t,r,n,o){const{joins:i,leaves:s}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),o||(o=()=>{}),this.map(i,(a,l)=>{var u;const c=(u=t[a])!==null&&u!==void 0?u:[];if(t[a]=this.cloneDeep(l),c.length>0){const f=t[a].map(v=>v.presence_ref),h=c.filter(v=>f.indexOf(v.presence_ref)<0);t[a].unshift(...h)}n(a,c,l)}),this.map(s,(a,l)=>{let u=t[a];if(!u)return;const c=l.map(f=>f.presence_ref);u=u.filter(f=>c.indexOf(f.presence_ref)<0),t[a]=u,o(a,u,l),u.length===0&&delete t[a]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const o=t[n];return"metas"in o?r[n]=o.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):r[n]=o,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var of;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(of||(of={}));var Eo;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(Eo||(Eo={}));var zt;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(zt||(zt={}));class Sc{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=me.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new Wa(this,mt.join,this.params,this.timeout),this.rejoinTimer=new lg(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=me.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=me.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=me.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=me.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=me.errored,this.rejoinTimer.scheduleTimeout())}),this._on(mt.reply,{},(o,i)=>{this._trigger(this._replyEventName(i),o)}),this.presence=new bo(this),this.broadcastEndpointURL=cg(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,o;if(this.socket.isConnected()||this.socket.connect(),this.state==me.closed){const{config:{broadcast:i,presence:s,private:a}}=this.params,l=(o=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(h=>h.filter))!==null&&o!==void 0?o:[],u=!!this.bindings[Eo.PRESENCE]&&this.bindings[Eo.PRESENCE].length>0,c={},f={broadcast:i,presence:Object.assign(Object.assign({},s),{enabled:u}),postgres_changes:l,private:a};this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this._onError(h=>t==null?void 0:t(zt.CHANNEL_ERROR,h)),this._onClose(()=>t==null?void 0:t(zt.CLOSED)),this.updateJoinPayload(Object.assign({config:f},c)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:h})=>{var v;if(this.socket.setAuth(),h===void 0){t==null||t(zt.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,y=(v=x==null?void 0:x.length)!==null&&v!==void 0?v:0,S=[];for(let p=0;p<y;p++){const m=x[p],{filter:{event:g,schema:_,table:E,filter:b}}=m,C=h&&h[p];if(C&&C.event===g&&C.schema===_&&C.table===E&&C.filter===b)S.push(Object.assign(Object.assign({},m),{id:C.id}));else{this.unsubscribe(),this.state=me.errored,t==null||t(zt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=S,t&&t(zt.SUBSCRIBED);return}}).receive("error",h=>{this.state=me.errored,t==null||t(zt.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(h).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(zt.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===me.joined&&t===Eo.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(t,r,n)}async send(t,r={}){var n,o;if(!this._canPush()&&t.type==="broadcast"){const{event:i,payload:s}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:s,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((o=u.body)===null||o===void 0?void 0:o.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var s,a,l;const u=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(s=this.params)===null||s===void 0?void 0:s.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),u.receive("ok",()=>i("ok")),u.receive("error",()=>i("error")),u.receive("timeout",()=>i("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=me.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(mt.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(o=>{n=new Wa(this,mt.leave,{},t),n.receive("ok",()=>{r(),o("ok")}).receive("timeout",()=>{r(),o("timed out")}).receive("error",()=>{o("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=me.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const o=new AbortController,i=setTimeout(()=>o.abort(),n),s=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(i),s}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new Wa(this,t,r,n);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>u1){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var o,i;const s=t.toLocaleLowerCase(),{close:a,error:l,leave:u,join:c}=mt;if(n&&[a,l,u,c].indexOf(s)>=0&&n!==this._joinRef())return;let h=this._onMessage(s,r,n);if(r&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(v=>{var x,y,S;return((x=v.filter)===null||x===void 0?void 0:x.event)==="*"||((S=(y=v.filter)===null||y===void 0?void 0:y.event)===null||S===void 0?void 0:S.toLocaleLowerCase())===s}).map(v=>v.callback(h,n)):(i=this.bindings[s])===null||i===void 0||i.filter(v=>{var x,y,S,p,m,g;if(["broadcast","presence","postgres_changes"].includes(s))if("id"in v){const _=v.id,E=(x=v.filter)===null||x===void 0?void 0:x.event;return _&&((y=r.ids)===null||y===void 0?void 0:y.includes(_))&&(E==="*"||(E==null?void 0:E.toLocaleLowerCase())===((S=r.data)===null||S===void 0?void 0:S.type.toLocaleLowerCase()))}else{const _=(m=(p=v==null?void 0:v.filter)===null||p===void 0?void 0:p.event)===null||m===void 0?void 0:m.toLocaleLowerCase();return _==="*"||_===((g=r==null?void 0:r.event)===null||g===void 0?void 0:g.toLocaleLowerCase())}else return v.type.toLocaleLowerCase()===s}).map(v=>{if(typeof h=="object"&&"ids"in h){const x=h.data,{schema:y,table:S,commit_timestamp:p,type:m,errors:g}=x;h=Object.assign(Object.assign({},{schema:y,table:S,commit_timestamp:p,eventType:m,new:{},old:{},errors:g}),this._getPayloadRecords(x))}v.callback(h,n)})}_isClosed(){return this.state===me.closed}_isJoined(){return this.state===me.joined}_isJoining(){return this.state===me.joining}_isLeaving(){return this.state===me.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const o=t.toLocaleLowerCase(),i={type:o,filter:r,callback:n};return this.bindings[o]?this.bindings[o].push(i):this.bindings[o]=[i],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(o=>{var i;return!(((i=o.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===n&&Sc.isEqual(o.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(mt.close,{},t)}_onError(t){this._on(mt.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=me.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=rf(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=rf(t.columns,t.old_record)),r}}const sf=()=>{},Ci={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},v1=[1e3,2e3,5e3,1e4],y1=1e4,w1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class x1{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=nu,this.transport=null,this.heartbeatIntervalMs=Ci.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=sf,this.ref=0,this.reconnectTimer=null,this.logger=sf,this.conn=null,this.sendBuffer=[],this.serializer=new c1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...s)=>Dn(()=>Promise.resolve().then(()=>Wn),void 0).then(({default:a})=>a(...s)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):i=fetch,(...s)=>i(...s)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${ou.websocket}`,this.httpEndpoint=cg(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=o1.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:a1}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},t?this.conn.close(t,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case So.connecting:return $r.Connecting;case So.open:return $r.Open;case So.closing:return $r.Closing;default:return $r.Closed}}isConnected(){return this.connectionState()===$r.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,o=this.getChannels().find(i=>i.topic===n);if(o)return o;{const i=new Sc(`realtime:${t}`,r,this);return this.channels.push(i),i}}push(t){const{topic:r,event:n,payload:o,ref:i}=t,s=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${i})`,o),this.isConnected()?s():this.sendBuffer.push(s)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(l1,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},Ci.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{r.topic==="phoenix"&&r.event==="phx_reply"&&this.heartbeatCallback(r.payload.status==="ok"?"ok":"error"),r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:o,payload:i,ref:s}=r,a=s?`(${s})`:"",l=i.status||"";this.log("receive",`${l} ${n} ${o} ${a}`.trim(),i),this.channels.filter(u=>u._isMember(n)).forEach(u=>u._trigger(o,i,s)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(mt.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",o=new URLSearchParams(r);return`${t}${n}${o}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([w1],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r;t?r=t:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const o={access_token:r,version:s1};r&&n.updateJoinPayload(o),n.joinedOnce&&n._isJoined()&&n._push(mt.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new lg(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Ci.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,o,i,s,a,l,u;if(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:nu,this.heartbeatIntervalMs=(o=t==null?void 0:t.heartbeatIntervalMs)!==null&&o!==void 0?o:Ci.HEARTBEAT_INTERVAL,this.worker=(i=t==null?void 0:t.worker)!==null&&i!==void 0?i:!1,this.accessToken=(s=t==null?void 0:t.accessToken)!==null&&s!==void 0?s:null,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(a=t==null?void 0:t.reconnectAfterMs)!==null&&a!==void 0?a:c=>v1[c-1]||y1,this.encode=(l=t==null?void 0:t.encode)!==null&&l!==void 0?l:(c,f)=>f(JSON.stringify(c)),this.decode=(u=t==null?void 0:t.decode)!==null&&u!==void 0?u:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}class bc extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function ge(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class _1 extends bc{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class su extends bc{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var k1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const dg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Dn(()=>Promise.resolve().then(()=>Wn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},S1=()=>k1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Dn(()=>Promise.resolve().then(()=>Wn),void 0)).Response:Response}),au=e=>{if(Array.isArray(e))return e.map(r=>au(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const o=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));t[o]=au(n)}),t},b1=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var Hr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const qa=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),E1=(e,t,r)=>Hr(void 0,void 0,void 0,function*(){const n=yield S1();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(o=>{const i=e.status||500,s=(o==null?void 0:o.statusCode)||i+"";t(new _1(qa(o),i,s))}).catch(o=>{t(new su(qa(o),o))}):t(new su(qa(e),e))}),C1=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?o:(b1(n)?(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),o.body=JSON.stringify(n)):o.body=n,t!=null&&t.duplex&&(o.duplex=t.duplex),Object.assign(Object.assign({},o),r))};function ni(e,t,r,n,o,i){return Hr(this,void 0,void 0,function*(){return new Promise((s,a)=>{e(r,C1(t,n,o,i)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>s(l)).catch(l=>E1(l,a,n))})})}function As(e,t,r,n){return Hr(this,void 0,void 0,function*(){return ni(e,"GET",t,r,n)})}function Ct(e,t,r,n,o){return Hr(this,void 0,void 0,function*(){return ni(e,"POST",t,n,o,r)})}function lu(e,t,r,n,o){return Hr(this,void 0,void 0,function*(){return ni(e,"PUT",t,n,o,r)})}function j1(e,t,r,n){return Hr(this,void 0,void 0,function*(){return ni(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function fg(e,t,r,n,o){return Hr(this,void 0,void 0,function*(){return ni(e,"DELETE",t,n,o,r)})}var Ie=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const P1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},af={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class T1{constructor(t,r={},n,o){this.url=t,this.headers=r,this.bucketId=n,this.fetch=dg(o)}uploadOrUpdate(t,r,n,o){return Ie(this,void 0,void 0,function*(){try{let i;const s=Object.assign(Object.assign({},af),o);let a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(s.upsert)});const l=s.metadata;typeof Blob<"u"&&n instanceof Blob?(i=new FormData,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",n)):typeof FormData<"u"&&n instanceof FormData?(i=n,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=n,a["cache-control"]=`max-age=${s.cacheControl}`,a["content-type"]=s.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(a=Object.assign(Object.assign({},a),o.headers));const u=this._removeEmptyFolders(r),c=this._getFinalPath(u),f=yield(t=="PUT"?lu:Ct)(this.fetch,`${this.url}/object/${c}`,i,Object.assign({headers:a},s!=null&&s.duplex?{duplex:s.duplex}:{}));return{data:{path:u,id:f.Id,fullPath:f.Key},error:null}}catch(i){if(ge(i))return{data:null,error:i};throw i}})}upload(t,r,n){return Ie(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,o){return Ie(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(t),s=this._getFinalPath(i),a=new URL(this.url+`/object/upload/sign/${s}`);a.searchParams.set("token",r);try{let l;const u=Object.assign({upsert:af.upsert},o),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",u.cacheControl)):(l=n,c["cache-control"]=`max-age=${u.cacheControl}`,c["content-type"]=u.contentType);const f=yield lu(this.fetch,a.toString(),l,{headers:c});return{data:{path:i,fullPath:f.Key},error:null}}catch(l){if(ge(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,r){return Ie(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const o=Object.assign({},this.headers);r!=null&&r.upsert&&(o["x-upsert"]="true");const i=yield Ct(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:o}),s=new URL(this.url+i.url),a=s.searchParams.get("token");if(!a)throw new bc("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:a},error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}update(t,r,n){return Ie(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return Ie(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}copy(t,r,n){return Ie(this,void 0,void 0,function*(){try{return{data:{path:(yield Ct(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}createSignedUrl(t,r,n){return Ie(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),i=yield Ct(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${s}`)},{data:i,error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}createSignedUrls(t,r,n){return Ie(this,void 0,void 0,function*(){try{const o=yield Ct(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),i=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:o.map(s=>Object.assign(Object.assign({},s),{signedUrl:s.signedURL?encodeURI(`${this.url}${s.signedURL}${i}`):null})),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}download(t,r){return Ie(this,void 0,void 0,function*(){const o=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),s=i?`?${i}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield As(this.fetch,`${this.url}/${o}/${a}${s}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(ge(a))return{data:null,error:a};throw a}})}info(t){return Ie(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield As(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:au(n),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}exists(t){return Ie(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield j1(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(ge(n)&&n instanceof su){const o=n.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),o=[],i=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";i!==""&&o.push(i);const a=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});l!==""&&o.push(l);let u=o.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${u}`)}}}remove(t){return Ie(this,void 0,void 0,function*(){try{return{data:yield fg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}list(t,r,n){return Ie(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},P1),r),{prefix:t||""});return{data:yield Ct(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},n),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}listV2(t,r){return Ie(this,void 0,void 0,function*(){try{const n=Object.assign({},t);return{data:yield Ct(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const $1="2.11.0",R1={"X-Client-Info":`storage-js/${$1}`};var Jr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class A1{constructor(t,r={},n,o){const i=new URL(t);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href,this.headers=Object.assign(Object.assign({},R1),r),this.fetch=dg(n)}listBuckets(){return Jr(this,void 0,void 0,function*(){try{return{data:yield As(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(ge(t))return{data:null,error:t};throw t}})}getBucket(t){return Jr(this,void 0,void 0,function*(){try{return{data:yield As(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Jr(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Jr(this,void 0,void 0,function*(){try{return{data:yield lu(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Jr(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Jr(this,void 0,void 0,function*(){try{return{data:yield fg(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}}class O1 extends A1{constructor(t,r={},n,o){super(t,r,n,o)}from(t){return new T1(this.url,this.headers,t,this.fetch)}}const I1="2.55.0";let lo="";typeof Deno<"u"?lo="deno":typeof document<"u"?lo="web":typeof navigator<"u"&&navigator.product==="ReactNative"?lo="react-native":lo="node";const L1={"X-Client-Info":`supabase-js-${lo}/${I1}`},N1={headers:L1},z1={schema:"public"},D1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},U1={};var F1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const M1=e=>{let t;return e?t=e:typeof fetch>"u"?t=Ym:t=fetch,(...r)=>t(...r)},B1=()=>typeof Headers>"u"?Xm:Headers,W1=(e,t,r)=>{const n=M1(r),o=B1();return(i,s)=>F1(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let u=new o(s==null?void 0:s.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),n(i,Object.assign(Object.assign({},s),{headers:u}))})};var q1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};function H1(e){return e.endsWith("/")?e:e+"/"}function V1(e,t){var r,n;const{db:o,auth:i,realtime:s,global:a}=e,{db:l,auth:u,realtime:c,global:f}=t,h={db:Object.assign(Object.assign({},l),o),auth:Object.assign(Object.assign({},u),i),realtime:Object.assign(Object.assign({},c),s),storage:{},global:Object.assign(Object.assign(Object.assign({},f),a),{headers:Object.assign(Object.assign({},(r=f==null?void 0:f.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>q1(this,void 0,void 0,function*(){return""})};return e.accessToken?h.accessToken=e.accessToken:delete h.accessToken,h}const hg="2.71.1",en=30*1e3,uu=3,Ha=uu*en,K1="http://localhost:9999",G1="supabase.auth.token",J1={"X-Client-Info":`gotrue-js/${hg}`},cu="X-Supabase-Api-Version",pg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Q1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Y1=10*60*1e3;class Ec extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function M(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class X1 extends Ec{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function Z1(e){return M(e)&&e.name==="AuthApiError"}class mg extends Ec{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class _r extends Ec{constructor(t,r,n,o){super(t,n,o),this.name=r,this.status=n}}class Zt extends _r{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function e_(e){return M(e)&&e.name==="AuthSessionMissingError"}class ji extends _r{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Pi extends _r{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Ti extends _r{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function t_(e){return M(e)&&e.name==="AuthImplicitGrantRedirectError"}class lf extends _r{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class du extends _r{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function Va(e){return M(e)&&e.name==="AuthRetryableFetchError"}class uf extends _r{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class fu extends _r{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Os="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),cf=` 	
\r=`.split(""),r_=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<cf.length;t+=1)e[cf[t].charCodeAt(0)]=-2;for(let t=0;t<Os.length;t+=1)e[Os[t].charCodeAt(0)]=t;return e})();function df(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Os[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Os[n]),t.queuedBits-=6}}function gg(e,t,r){const n=r_[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function ff(e){const t=[],r=s=>{t.push(String.fromCodePoint(s))},n={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},i=s=>{i_(s,n,r)};for(let s=0;s<e.length;s+=1)gg(e.charCodeAt(s),o,i);return t.join("")}function n_(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function o_(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const o=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}n_(n,t)}}function i_(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function s_(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};for(let o=0;o<e.length;o+=1)gg(e.charCodeAt(o),r,n);return new Uint8Array(t)}function a_(e){const t=[];return o_(e,r=>t.push(r)),new Uint8Array(t)}function l_(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};return e.forEach(o=>df(o,r,n)),df(null,r,n),t.join("")}function u_(e){return Math.round(Date.now()/1e3)+e}function c_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const ft=()=>typeof window<"u"&&typeof document<"u",kr={tested:!1,writable:!1},vg=()=>{if(!ft())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(kr.tested)return kr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),kr.tested=!0,kr.writable=!0}catch{kr.tested=!0,kr.writable=!1}return kr.writable};function d_(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,i)=>{t[i]=o})}catch{}return r.searchParams.forEach((n,o)=>{t[o]=n}),t}const yg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Dn(()=>Promise.resolve().then(()=>Wn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},f_=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",tn=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},Sr=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Yt=async(e,t)=>{await e.removeItem(t)};class ca{constructor(){this.promise=new ca.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}ca.promiseConstructor=Promise;function Ka(e){const t=e.split(".");if(t.length!==3)throw new fu("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!Q1.test(t[n]))throw new fu("JWT not in base64url format");return{header:JSON.parse(ff(t[0])),payload:JSON.parse(ff(t[1])),signature:s_(t[2]),raw:{header:t[0],payload:t[1]}}}async function h_(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function p_(e,t){return new Promise((n,o)=>{(async()=>{for(let i=0;i<1/0;i++)try{const s=await e(i);if(!t(i,null,s)){n(s);return}}catch(s){if(!t(i,s)){o(s);return}}})()})}function m_(e){return("0"+e.toString(16)).substr(-2)}function g_(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let o="";for(let i=0;i<56;i++)o+=r.charAt(Math.floor(Math.random()*n));return o}return crypto.getRandomValues(t),Array.from(t,m_).join("")}async function v_(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(n);return Array.from(o).map(i=>String.fromCharCode(i)).join("")}async function y_(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await v_(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Qr(e,t,r=!1){const n=g_();let o=n;r&&(o+="/PASSWORD_RECOVERY"),await tn(e,`${t}-code-verifier`,o);const i=await y_(n);return[i,n===i?"plain":"s256"]}const w_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function x_(e){const t=e.headers.get(cu);if(!t||!t.match(w_))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function __(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function k_(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const S_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Yr(e){if(!S_.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ga(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function hf(e){return JSON.parse(JSON.stringify(e))}var b_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Tr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),E_=[502,503,504];async function pf(e){var t;if(!f_(e))throw new du(Tr(e),0);if(E_.includes(e.status))throw new du(Tr(e),e.status);let r;try{r=await e.json()}catch(i){throw new mg(Tr(i),i)}let n;const o=x_(e);if(o&&o.getTime()>=pg["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new uf(Tr(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Zt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,s)=>i&&typeof s=="string",!0))throw new uf(Tr(r),e.status,r.weak_password.reasons);throw new X1(Tr(r),e.status||500,n)}const C_=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(n),Object.assign(Object.assign({},o),r))};async function W(e,t,r,n){var o;const i=Object.assign({},n==null?void 0:n.headers);i[cu]||(i[cu]=pg["2024-01-01"].name),n!=null&&n.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const s=(o=n==null?void 0:n.query)!==null&&o!==void 0?o:{};n!=null&&n.redirectTo&&(s.redirect_to=n.redirectTo);const a=Object.keys(s).length?"?"+new URLSearchParams(s).toString():"",l=await j_(e,t,r+a,{headers:i,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function j_(e,t,r,n,o,i){const s=C_(t,n,o,i);let a;try{a=await e(r,Object.assign({},s))}catch(l){throw console.error(l),new du(Tr(l),0)}if(a.ok||await pf(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await pf(l)}}function It(e){var t;let r=null;R_(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=u_(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function mf(e){const t=It(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function or(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function P_(e){return{data:e,error:null}}function T_(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i}=e,s=b_(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i},l=Object.assign({},s);return{data:{properties:a,user:l},error:null}}function $_(e){return e}function R_(e){return e.access_token&&e.refresh_token&&e.expires_in}const Ja=["global","local","others"];var A_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};class O_{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=yg(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=Ja[0]){if(Ja.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ja.join(", ")}`);try{return await W(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(M(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await W(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:or})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=A_(t,["options"]),o=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(o.new_email=n==null?void 0:n.newEmail,delete o.newEmail),await W(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:T_,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(M(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await W(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:or})}catch(r){if(M(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,o,i,s,a,l;try{const u={nextPage:null,lastPage:0,total:0},c=await W(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&i!==void 0?i:""},xform:$_});if(c.error)throw c.error;const f=await c.json(),h=(s=c.headers.get("x-total-count"))!==null&&s!==void 0?s:0,v=(l=(a=c.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return v.length>0&&(v.forEach(x=>{const y=parseInt(x.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(x.split(";")[1].split("=")[1]);u[`${S}Page`]=y}),u.total=parseInt(h)),{data:Object.assign(Object.assign({},f),u),error:null}}catch(u){if(M(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){Yr(t);try{return await W(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:or})}catch(r){if(M(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){Yr(t);try{return await W(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:or})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){Yr(t);try{return await W(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:or})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){Yr(t.userId);try{const{data:r,error:n}=await W(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:n}}catch(r){if(M(r))return{data:null,error:r};throw r}}async _deleteFactor(t){Yr(t.userId),Yr(t.id);try{return{data:await W(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(M(r))return{data:null,error:r};throw r}}}function gf(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function I_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Xr={debug:!!(globalThis&&vg()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class wg extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class L_ extends wg{}async function N_(e,t,r){Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async o=>{if(o){Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,o.name);try{return await r()}finally{Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,o.name)}}else{if(t===0)throw Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new L_(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Xr.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}I_();const z_={url:K1,storageKey:G1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:J1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function vf(e,t,r){return await r()}const Zr={};class Vo{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Vo.nextInstanceID,Vo.nextInstanceID+=1,this.instanceID>0&&ft()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},z_),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new O_({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=yg(o.fetch),this.lock=o.lock||vf,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:ft()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=N_:this.lock=vf,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:vg()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=gf(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=gf(this.memoryStorage)),ft()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=Zr[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){Zr[this.storageKey]=Object.assign(Object.assign({},Zr[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=Zr[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){Zr[this.storageKey]=Object.assign(Object.assign({},Zr[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${hg}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=d_(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),ft()&&this.detectSessionInUrl&&n!=="none"){const{data:o,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),t_(i)){const l=(t=i.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:s,redirectType:a}=o;return this._debug("#_initialize()","detected session in URL",s,"redirect type",a),await this._saveSession(s),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return M(r)?{error:r}:{error:new mg("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,o;try{const i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:It}),{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,u=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(M(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(t){var r,n,o;try{let i;if("email"in t){const{email:c,password:f,options:h}=t;let v=null,x=null;this.flowType==="pkce"&&([v,x]=await Qr(this.storage,this.storageKey)),i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:c,password:f,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:v,code_challenge_method:x},xform:It})}else if("phone"in t){const{phone:c,password:f,options:h}=t;i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:f,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},channel:(o=h==null?void 0:h.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:It})}else throw new Pi("You must provide either an email or phone number and a password");const{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,u=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(M(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(t){try{let r;if("email"in t){const{email:i,password:s,options:a}=t;r=await W(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:mf})}else if("phone"in t){const{phone:i,password:s,options:a}=t;r=await W(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:mf})}else throw new Pi("You must provide either an email or phone number and a password");const{data:n,error:o}=r;return o?{data:{user:null,session:null},error:o}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new ji}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:o})}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,o,i;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(i=t.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,o,i,s,a,l,u,c,f,h,v;let x,y;if("message"in t)x=t.message,y=t.signature;else{const{chain:S,wallet:p,statement:m,options:g}=t;let _;if(ft())if(typeof p=="object")_=p;else{const b=window;if("solana"in b&&typeof b.solana=="object"&&("signIn"in b.solana&&typeof b.solana.signIn=="function"||"signMessage"in b.solana&&typeof b.solana.signMessage=="function"))_=b.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(g!=null&&g.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");_=p}const E=new URL((r=g==null?void 0:g.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in _&&_.signIn){const b=await _.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},g==null?void 0:g.signInWithSolana),{version:"1",domain:E.host,uri:E.href}),m?{statement:m}:null));let C;if(Array.isArray(b)&&b[0]&&typeof b[0]=="object")C=b[0];else if(b&&typeof b=="object"&&"signedMessage"in b&&"signature"in b)C=b;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in C&&"signature"in C&&(typeof C.signedMessage=="string"||C.signedMessage instanceof Uint8Array)&&C.signature instanceof Uint8Array)x=typeof C.signedMessage=="string"?C.signedMessage:new TextDecoder().decode(C.signedMessage),y=C.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in _)||typeof _.signMessage!="function"||!("publicKey"in _)||typeof _!="object"||!_.publicKey||!("toBase58"in _.publicKey)||typeof _.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");x=[`${E.host} wants you to sign in with your Solana account:`,_.publicKey.toBase58(),...m?["",m,""]:[""],"Version: 1",`URI: ${E.href}`,`Issued At: ${(o=(n=g==null?void 0:g.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((i=g==null?void 0:g.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${g.signInWithSolana.notBefore}`]:[],...!((s=g==null?void 0:g.signInWithSolana)===null||s===void 0)&&s.expirationTime?[`Expiration Time: ${g.signInWithSolana.expirationTime}`]:[],...!((a=g==null?void 0:g.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${g.signInWithSolana.chainId}`]:[],...!((l=g==null?void 0:g.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${g.signInWithSolana.nonce}`]:[],...!((u=g==null?void 0:g.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${g.signInWithSolana.requestId}`]:[],...!((f=(c=g==null?void 0:g.signInWithSolana)===null||c===void 0?void 0:c.resources)===null||f===void 0)&&f.length?["Resources",...g.signInWithSolana.resources.map(C=>`- ${C}`)]:[]].join(`
`);const b=await _.signMessage(new TextEncoder().encode(x),"utf8");if(!b||!(b instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");y=b}}try{const{data:S,error:p}=await W(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:x,signature:l_(y)},!((h=t.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(v=t.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:It});if(p)throw p;return!S||!S.session||!S.user?{data:{user:null,session:null},error:new ji}:(S.session&&(await this._saveSession(S.session),await this._notifyAllSubscribers("SIGNED_IN",S.session)),{data:Object.assign({},S),error:p})}catch(S){if(M(S))return{data:{user:null,session:null},error:S};throw S}}async _exchangeCodeForSession(t){const r=await Sr(this.storage,`${this.storageKey}-code-verifier`),[n,o]=(r??"").split("/");try{const{data:i,error:s}=await W(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:It});if(await Yt(this.storage,`${this.storageKey}-code-verifier`),s)throw s;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new ji}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:o??null}),error:s})}catch(i){if(M(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(t){try{const{options:r,provider:n,token:o,access_token:i,nonce:s}=t,a=await W(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:o,access_token:i,nonce:s,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:It}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new ji}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,o,i,s;try{if("email"in t){const{email:a,options:l}=t;let u=null,c=null;this.flowType==="pkce"&&([u,c]=await Qr(this.storage,this.storageKey));const{error:f}=await W(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:f}}if("phone"in t){const{phone:a,options:l}=t,{data:u,error:c}=await W(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(s=l==null?void 0:l.channel)!==null&&s!==void 0?s:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:c}}throw new Pi("You must provide either an email or phone number.")}catch(a){if(M(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var r,n;try{let o,i;"options"in t&&(o=(r=t.options)===null||r===void 0?void 0:r.redirectTo,i=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:s,error:a}=await W(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:i}}),redirectTo:o,xform:It});if(a)throw a;if(!s)throw new Error("An error occurred on token verification.");const l=s.session,u=s.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(o){if(M(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var r,n,o;try{let i=null,s=null;return this.flowType==="pkce"&&([i,s]=await Qr(this.storage,this.storageKey)),await W(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:s}),headers:this.headers,xform:P_})}catch(i){if(M(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Zt;const{error:o}=await W(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(M(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:o,options:i}=t,{error:s}=await W(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:s}}else if("phone"in t){const{phone:n,type:o,options:i}=t,{data:s,error:a}=await W(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:s==null?void 0:s.message_id},error:a}}throw new Pi("You must provide either an email or phone number and a type")}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await Sr(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<Ha:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const s=await Sr(this.userStorage,this.storageKey+"-user");s!=null&&s.user?t.user=s.user:t.user=Ga()}if(this.storage.isServer&&t.user){let s=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,u,c)=>(!s&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),s=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,c))})}return{data:{session:t},error:null}}const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{session:null},error:i}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await W(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:or}):await this._useSession(async r=>{var n,o,i;const{data:s,error:a}=r;if(a)throw a;return!(!((n=s.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Zt}:await W(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(o=s.session)===null||o===void 0?void 0:o.access_token)!==null&&i!==void 0?i:void 0,xform:or})})}catch(r){if(M(r))return e_(r)&&(await this._removeSession(),await Yt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:o,error:i}=n;if(i)throw i;if(!o.session)throw new Zt;const s=o.session;let a=null,l=null;this.flowType==="pkce"&&t.email!=null&&([a,l]=await Qr(this.storage,this.storageKey));const{data:u,error:c}=await W(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:s.access_token,xform:or});if(c)throw c;return s.user=u.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),{data:{user:s.user},error:null}})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Zt;const r=Date.now()/1e3;let n=r,o=!0,i=null;const{payload:s}=Ka(t.access_token);if(s.exp&&(n=s.exp,o=n<=r),o){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};i=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;i={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(r){if(M(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:s,error:a}=r;if(a)throw a;t=(n=s.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Zt;const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{user:null,session:null},error:i}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!ft())throw new Ti("No browser detected.");if(t.error||t.error_description||t.error_code)throw new Ti(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new lf("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ti("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new lf("No code detected.");const{data:m,error:g}=await this._exchangeCodeForSession(t.code);if(g)throw g;const _=new URL(window.location.href);return _.searchParams.delete("code"),window.history.replaceState(window.history.state,"",_.toString()),{data:{session:m.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:o,access_token:i,refresh_token:s,expires_in:a,expires_at:l,token_type:u}=t;if(!i||!a||!s||!u)throw new Ti("No session defined in URL");const c=Math.round(Date.now()/1e3),f=parseInt(a);let h=c+f;l&&(h=parseInt(l));const v=h-c;v*1e3<=en&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${f}s`);const x=h-f;c-x>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",x,h,c):c-x<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",x,h,c);const{data:y,error:S}=await this._getUser(i);if(S)throw S;const p={provider_token:n,provider_refresh_token:o,access_token:i,expires_in:f,expires_at:h,refresh_token:s,token_type:u,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:t.type},error:null}}catch(n){if(M(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await Sr(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{error:i};const s=(n=o.session)===null||n===void 0?void 0:n.access_token;if(s){const{error:a}=await this.admin.signOut(s,t);if(a&&!(Z1(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Yt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=c_(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,o;try{const{data:{session:i},error:s}=r;if(s)throw s;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",t,"session",i)}catch(i){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",i),console.error(i)}})}async resetPasswordForEmail(t,r={}){let n=null,o=null;this.flowType==="pkce"&&([n,o]=await Qr(this.storage,this.storageKey,!0));try{return await W(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(M(i))return{data:null,error:i};throw i}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(M(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:o}=await this._useSession(async i=>{var s,a,l,u,c;const{data:f,error:h}=i;if(h)throw h;const v=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(s=t.options)===null||s===void 0?void 0:s.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await W(this.fetch,"GET",v,{headers:this.headers,jwt:(c=(u=f.session)===null||u===void 0?void 0:u.access_token)!==null&&c!==void 0?c:void 0})});if(o)throw o;return ft()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(M(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)throw s;return await W(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(M(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await p_(async o=>(o>0&&await h_(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await W(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:It})),(o,i)=>{const s=200*Math.pow(2,o);return i&&Va(i)&&Date.now()+s-n<en})}catch(n){if(this._debug(r,"error",n),M(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),ft()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const o=await Sr(this.storage,this.storageKey);if(o&&this.userStorage){let s=await Sr(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!s&&(s={user:o.user},await tn(this.userStorage,this.storageKey+"-user",s)),o.user=(t=s==null?void 0:s.user)!==null&&t!==void 0?t:Ga()}else if(o&&!o.user&&!o.user){const s=await Sr(this.storage,this.storageKey+"-user");s&&(s!=null&&s.user)?(o.user=s.user,await Yt(this.storage,this.storageKey+"-user"),await tn(this.storage,this.storageKey,o)):o.user=Ga()}if(this._debug(n,"session from storage",o),!this._isValidSession(o)){this._debug(n,"session is not valid"),o!==null&&await this._removeSession();return}const i=((r=o.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Ha;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${Ha}s`),i){if(this.autoRefreshToken&&o.refresh_token){const{error:s}=await this._callRefreshToken(o.refresh_token);s&&(console.error(s),Va(s)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",s),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:s,error:a}=await this._getUser(o.access_token);!a&&(s!=null&&s.user)?(o.user=s.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(s){console.error("Error getting user data:",s),this._debug(n,"error getting user data, skipping SIGNED_IN notification",s)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(n,"error",o),console.error(o);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Zt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new ca;const{data:i,error:s}=await this._refreshAccessToken(t);if(s)throw s;if(!i.session)throw new Zt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const a={session:i.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(i){if(this._debug(o,"error",i),M(i)){const s={session:null,error:i};return Va(i)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(s),s}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,r,n=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const i=[],s=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,r)}catch(l){i.push(l)}});if(await Promise.all(s),i.length>0){for(let a=0;a<i.length;a+=1)console.error(i[a]);throw i[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await tn(this.userStorage,this.storageKey+"-user",{user:r.user});const o=Object.assign({},r);delete o.user;const i=hf(o);await tn(this.storage,this.storageKey,i)}else{const o=hf(r);await tn(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await Yt(this.storage,this.storageKey),await Yt(this.storage,this.storageKey+"-code-verifier"),await Yt(this.storage,this.storageKey+"-user"),this.userStorage&&await Yt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&ft()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),en);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((n.expires_at*1e3-t)/en);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${en}ms, refresh threshold is ${uu} ticks`),o<=uu&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof wg)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ft()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const o=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&o.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&o.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,s]=await Qr(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(s)}`});o.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);o.push(i.toString())}return n!=null&&n.skipBrowserRedirect&&o.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await W(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(M(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)return{data:null,error:s};const a=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:u}=await W(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return u?{data:null,error:u}:(t.factorType==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(r){if(M(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{data:null,error:i};const{data:s,error:a}=await W(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:a})})}catch(r){if(M(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await W(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(M(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],o=n.filter(s=>s.factor_type==="totp"&&s.status==="verified"),i=n.filter(s=>s.factor_type==="phone"&&s.status==="verified");return{data:{all:n,totp:o,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:o},error:i}=t;if(i)return{data:null,error:i};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=Ka(o.access_token);let a=null;s.aal&&(a=s.aal);let l=a;((n=(r=o.user.factors)===null||r===void 0?void 0:r.filter(f=>f.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const c=s.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(a=>a.kid===t);if(n)return n;const o=Date.now();if(n=this.jwks.keys.find(a=>a.kid===t),n&&this.jwks_cached_at+Y1>o)return n;const{data:i,error:s}=await W(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(s)throw s;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=o,n=i.keys.find(a=>a.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:v,error:x}=await this.getSession();if(x||!v.session)return{data:null,error:x};n=v.session.access_token}const{header:o,payload:i,signature:s,raw:{header:a,payload:l}}=Ka(n);r!=null&&r.allowExpired||__(i.exp);const u=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!u){const{error:v}=await this.getUser(n);if(v)throw v;return{data:{claims:i,header:o,signature:s},error:null}}const c=k_(o.alg),f=await crypto.subtle.importKey("jwk",u,c,!0,["verify"]);if(!await crypto.subtle.verify(c,f,s,a_(`${a}.${l}`)))throw new fu("Invalid JWT signature");return{data:{claims:i,header:o,signature:s},error:null}}catch(n){if(M(n))return{data:null,error:n};throw n}}}Vo.nextInstanceID=0;const D_=Vo;class U_ extends D_{constructor(t){super(t)}}var F_=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class M_{constructor(t,r,n){var o,i,s;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const a=H1(t),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const u=`sb-${l.hostname.split(".")[0]}-auth-token`,c={db:z1,realtime:U1,auth:Object.assign(Object.assign({},D1),{storageKey:u}),global:N1},f=V1(n??{},c);this.storageKey=(o=f.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(i=f.global.headers)!==null&&i!==void 0?i:{},f.accessToken?(this.accessToken=f.accessToken,this.auth=new Proxy({},{get:(h,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((s=f.auth)!==null&&s!==void 0?s:{},this.headers,f.global.fetch),this.fetch=W1(r,this._getAccessToken.bind(this),f.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},f.realtime)),this.rest=new n1(new URL("rest/v1",l).href,{headers:this.headers,schema:f.db.schema,fetch:this.fetch}),this.storage=new O1(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),f.accessToken||this._listenForAuthEvents()}get functions(){return new Ox(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return F_(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,storageKey:i,flowType:s,lock:a,debug:l},u,c){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new U_({url:this.authUrl.href,headers:Object.assign(Object.assign({},f),u),storageKey:i,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,flowType:s,lock:a,debug:l,fetch:c,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new x1(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const B_=(e,t,r)=>new M_(e,t,r);function W_(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}W_()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const I=B_("https://mdmknxkztpimoedhdjci.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A"),xg=w.createContext(),q_=({children:e})=>{const[t,r]=w.useState(!0),[n,o]=w.useState(!1),[i,s]=w.useState(null),[a,l]=w.useState(null),[u,c]=w.useState(null),f=async(m,g)=>{c(null);try{o(!0);const{data:_,error:E}=await I.from("usuarios").select("idUsuario, nombre, usuario, correo, idRol").eq("usuario",m).eq("contraseña",g).single();if(E)throw E.code==="PGRST116"?new Error("Usuario o contraseña incorrectos"):new Error(`Error de base de datos: ${E.message}`);if(!_)throw new Error("Usuario o contraseña incorrectos");const b={id:_.idUsuario,nombre:_.nombre,usuario:_.usuario,correo:_.correo,idRol:_.idRol,rol:"Administrador",type:"admin"};return s(b),l(null),localStorage.setItem("user",JSON.stringify(b)),localStorage.removeItem("employeeData"),{success:!0,user:b}}catch(_){return c(_.message),{success:!1,error:_.message}}finally{o(!1)}},h=w.useCallback(m=>{const g={id:m.idEmpleado,idEmpleado:m.idEmpleado,codigoEmpleado:m.codigoEmpleado,empleado:m.empleado,idPlanta:m.idPlanta,planta:m.planta,idEsquemaPago:m.idEsquemaPago||null,type:"employee"};return l(g),s(null),localStorage.setItem("employeeData",JSON.stringify(g)),localStorage.removeItem("user"),{success:!0,employee:g}},[]),v=w.useCallback(()=>{s(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("employeeData")},[]),x=()=>{try{const m=localStorage.getItem("user"),g=localStorage.getItem("employeeData");if(m){const _=JSON.parse(m);return s(_),l(null),_}if(g){const _=JSON.parse(g);return l(_),s(null),_}}catch(m){console.error("Error al obtener usuario guardado:",m),localStorage.removeItem("user"),localStorage.removeItem("employeeData")}return null},y=w.useCallback(m=>{if(a){const g={...a,...m};return l(g),localStorage.setItem("employeeData",JSON.stringify(g)),g}return null},[a]),S=w.useCallback(()=>{c(null)},[]);w.useEffect(()=>{x(),r(!1)},[]);const p={user:i,employeeData:a,loading:n,initializing:t,authError:u,adminLogin:f,employeeLogin:h,logout:v,getCurrentUser:x,updateEmployeeData:y,clearAuthError:S};return d.jsx(xg.Provider,{value:p,children:e})},oi=()=>{const e=w.useContext(xg);if(!e)throw new Error("useAppAuth debe usarse dentro de AuthProvider");return e},_g=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("plantas").select("idPlanta, planta").order("planta");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching plantas:",a)}finally{n(!1)}})()},[]),{plantas:e,loading:r,error:o}},kg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("esquemasPago").select("idEsquemaPago, esquemaPago").order("esquemaPago");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching esquemas de pago:",a)}finally{n(!1)}})()},[]),{esquemas:e,loading:r,error:o}},Sg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("tiposSolicitud").select("idTipoSolicitud, tipoSolicitud").order("tipoSolicitud");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching tipos de solicitud:",a)}finally{n(!1)}})()},[]),{tipos:e,loading:r,error:o}},bg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("prioridades").select("idPrioridad, prioridad").order("idPrioridad");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching prioridades:",a)}finally{n(!1)}})()},[]),{prioridades:e,loading:r,error:o}},H_=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null);return{createTicket:async i=>{try{t(!0),n(null);const{data:s}=await I.from("empleados").select("idPlanta").eq("idEmpleado",i.idEmpleado).single();if(!s)throw new Error("No se encontró información del empleado");const{data:a}=await I.from("asignaciones").select("idUsuario").eq("idPlanta",s.idPlanta).eq("idTipoSolicitud",i.idTipoSolicitud).single();if(!a)throw new Error("No se encontró usuario asignado para esta combinación de planta y tipo de solicitud");const{data:l,error:u}=await I.from("tickets").insert([{idEmpleado:i.idEmpleado,idTipoSolicitud:i.idTipoSolicitud,descripcion:i.descripcion,idPrioridad:i.idPrioridad}]).select().single();if(u)throw u;const{error:c}=await I.from("seguimientos").insert([{idTicket:l.idTicket,idUsuario:a.idUsuario,idEstado:1}]);if(c)throw c;return{success:!0,ticket:l}}catch(s){return n(s.message),console.error("Error creating ticket:",s),{success:!1,error:s.message}}finally{t(!1)}},loading:e,error:r}},Eg=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null),o=w.useCallback(async l=>{t(!0),n(null);try{const{data:u,error:c}=await I.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("codigoEmpleado",l).single();if(c){if(c.code==="PGRST116")return{success:!0,empleado:null};throw c}return{success:!0,empleado:u}}catch(u){return console.error("Error al buscar empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),i=w.useCallback(async(l,u,c,f)=>{t(!0),n(null);try{const{data:h,error:v}=await I.from("empleados").insert([{codigoEmpleado:l,nombre:u,idPlanta:c,idEsquemaPago:f}]).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(v)throw v;return{success:!0,empleado:h}}catch(h){return console.error("Error al crear empleado:",h),n(h.message),{success:!1,error:h.message}}finally{t(!1)}},[]),s=w.useCallback(async l=>{t(!0),n(null);try{const{data:u,error:c}=await I.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("idEmpleado",l).single();if(c)throw c;return{success:!0,empleado:u}}catch(u){return console.error("Error al obtener empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),a=w.useCallback(async(l,u)=>{t(!0),n(null);try{const{data:c,error:f}=await I.from("empleados").update({idEsquemaPago:u}).eq("idEmpleado",l).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(f)throw f;return{success:!0,empleado:c}}catch(c){return console.error("Error al actualizar esquema de pago:",c),n(c.message),{success:!1,error:c.message}}finally{t(!1)}},[]);return{loading:e,error:r,buscarEmpleadoPorCodigo:o,crearEmpleado:i,obtenerEmpleadoPorId:s,actualizarEsquemaPago:a}},V_=()=>{const[e,t]=w.useState(""),[r,n]=w.useState(""),[o,i]=w.useState(""),[s,a]=w.useState(""),[l,u]=w.useState(""),[c,f]=w.useState(!1),[h,v]=w.useState(1),{employeeLogin:x}=oi(),y=Zo(),{plantas:S,loading:p}=_g(),{esquemas:m,loading:g}=kg(),{buscarEmpleadoPorCodigo:_,crearEmpleado:E,loading:b}=Eg(),C=async $=>{var H;if($.preventDefault(),u(""),!e.trim()){u("Por favor, ingrese su código de empleado");return}if(!/^\d+$/.test(e)){u("El código de empleado debe contener solo números");return}f(!0);try{const R=await _(e.trim());if(!R.success){u("Error al buscar empleado: "+R.error),f(!1);return}if(R.empleado){const J={idEmpleado:R.empleado.idEmpleado,codigoEmpleado:R.empleado.codigoEmpleado,empleado:R.empleado.nombre,idPlanta:R.empleado.idPlanta,planta:(H=R.empleado.plantas)==null?void 0:H.planta,idEsquemaPago:R.empleado.idEsquemaPago||null};x(J),y("/employee")}else v(2)}catch(R){u("Error al procesar la búsqueda"),console.error("Error:",R)}finally{f(!1)}},T=async $=>{var H;if($.preventDefault(),u(""),!r.trim()||!o||!s){u("Por favor, complete todos los campos");return}f(!0);try{const R=await E(e.trim(),r.trim(),o,s);if(!R.success){u("Error al registrar empleado: "+R.error),f(!1);return}x({idEmpleado:R.empleado.idEmpleado,codigoEmpleado:R.empleado.codigoEmpleado,empleado:R.empleado.nombre,idPlanta:R.empleado.idPlanta,planta:(H=R.empleado.plantas)==null?void 0:H.planta,idEsquemaPago:R.empleado.idEsquemaPago||null}),y("/employee")}catch(R){u("Error al procesar el registro"),console.error("Error:",R)}finally{f(!1)}},L=()=>{v(1),n(""),i(""),a(""),u("")};return h===1?d.jsxs(yf,{onSubmit:C,children:[d.jsx(xf,{children:"Acceso Empleado"}),d.jsx(wf,{children:"Ingresa tu código de empleado para acceder al sistema"}),l&&d.jsx(bf,{children:l}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Número de Empleado"}),d.jsx(K_,{type:"text",inputMode:"numeric",pattern:"[0-9]*",placeholder:"Ej: 12345",value:e,onChange:$=>{const H=$.target.value.replace(/\D/g,"");t(H)},disabled:c||b,required:!0,autoComplete:"employee-id"})]}),d.jsx(Sf,{type:"submit",disabled:c||b,children:c||b?"Verificando...":"Acceder"})]}):d.jsxs(yf,{onSubmit:T,children:[d.jsx(xf,{children:"Registro de Empleado"}),d.jsx(wf,{children:"No encontramos tu código de empleado. Por favor, completa la siguiente información:"}),l&&d.jsx(bf,{children:l}),d.jsxs(J_,{children:["Código de empleado: ",d.jsx("strong",{children:e})]}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Nombre Completo"}),d.jsx(G_,{type:"text",placeholder:"Ej: Juan Pérez García",value:r,onChange:$=>n($.target.value),disabled:c||b||g,required:!0,autoComplete:"name"})]}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Planta"}),p?d.jsx(kf,{disabled:!0,children:"Cargando plantas..."}):d.jsxs(_f,{value:o,onChange:$=>i($.target.value),disabled:c||b||g,required:!0,children:[d.jsx("option",{value:"",children:"Seleccione su planta..."}),S.map($=>d.jsx("option",{value:$.idPlanta,children:$.planta},$.idPlanta))]})]}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Esquema de Pago"}),g?d.jsx(kf,{disabled:!0,children:"Cargando esquemas..."}):d.jsxs(_f,{value:s,onChange:$=>a($.target.value),disabled:c||b||g,required:!0,children:[d.jsx("option",{value:"",children:"Seleccione su esquema de pago..."}),m.map($=>d.jsx("option",{value:$.idEsquemaPago,children:$.esquemaPago},$.idEsquemaPago))]})]}),d.jsxs(Q_,{children:[d.jsx(Y_,{type:"button",onClick:L,disabled:c||b||g,children:"Volver"}),d.jsx(Sf,{type:"submit",disabled:c||b||g,style:{flex:1},children:c||b||g?"Registrando...":"Registrar y Acceder"})]})]})},yf=k.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,wf=k.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,xf=k.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,$i=k.div`
  margin-bottom: 1.5rem;
`,Ri=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,Cg=k.input`
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
`,K_=k(Cg)`
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
`,G_=k(Cg)``,_f=k.select`
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
`,kf=k.div`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: var(--color-gray);
`,Sf=k.button`
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
`,bf=k.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,J_=k.div`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.9rem;
`,Q_=k.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Y_=k.button`
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
`,X_=()=>{const[e,t]=w.useState(""),[r,n]=w.useState(""),[o,i]=w.useState(!1),{adminLogin:s,authError:a,clearAuthError:l}=oi(),u=Zo(),c=w.useRef(null);w.useEffect(()=>{c.current&&c.current.focus()},[]);const f=async h=>{if(h.preventDefault(),h.stopPropagation(),!(!e.trim()||!r.trim())){l(),i(!0);try{(await s(e.trim(),r)).success&&(t(""),n(""),u("/admin"))}catch(v){console.error("Error en handleSubmit:",v)}finally{i(!1)}}};return d.jsxs(Z_,{onSubmit:f,children:[d.jsx(tk,{children:"Acceso Administrador"}),d.jsx(ek,{children:"Ingresa tus credenciales de administrador para acceder al panel de control"}),a&&d.jsxs(nk,{$shake:!!a,children:[d.jsx(ok,{children:"⚠️"}),a]}),d.jsxs(Ef,{children:[d.jsx(Cf,{children:"Usuario"}),d.jsx(jf,{ref:c,type:"text",placeholder:"Ingrese su usuario",value:e,onChange:h=>{t(h.target.value),a&&l()},disabled:o,autoComplete:"username",$hasError:a&&!e.trim()})]}),d.jsxs(Ef,{children:[d.jsx(Cf,{children:"Contraseña"}),d.jsx(jf,{type:"password",placeholder:"Ingrese su contraseña",value:r,onChange:h=>{n(h.target.value),a&&l()},disabled:o,autoComplete:"current-password",$hasError:a&&!r.trim()})]}),d.jsx(rk,{type:"submit",disabled:o||!e.trim()||!r.trim(),onSubmit:h=>h.preventDefault(),children:o?d.jsxs(d.Fragment,{children:[d.jsx(ik,{}),"Iniciando sesión..."]}):"Iniciar Sesión"})]})},Z_=k.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,ek=k.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,tk=k.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,Ef=k.div`
  margin-bottom: 1.5rem;
`,Cf=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,jf=k.input`
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
`,rk=k.button`
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
`,nk=k.div`
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
`,ok=k.span`
  font-size: 1rem;
  flex-shrink: 0;
`,ik=k.div`
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
`,sk="/ventanilla/assets/logo-DOgx6EZv.png",ak=()=>{const[e,t]=w.useState("employee");return d.jsxs(lk,{children:[d.jsxs(uk,{children:[d.jsx("img",{src:sk,alt:"Logo de la empresa",style:{height:"80px"}}),d.jsx(ck,{children:"Ventanilla de atención al empleado"})]}),d.jsx(dk,{children:d.jsxs(fk,{children:[d.jsxs(hk,{children:[d.jsxs(Pf,{$active:e==="employee",onClick:()=>t("employee"),children:[d.jsx(Tf,{children:"👤"}),"Empleado"]}),d.jsxs(Pf,{$active:e==="admin",onClick:()=>t("admin"),children:[d.jsx(Tf,{children:"🔑"}),"Administrador"]})]}),d.jsxs(pk,{children:[e==="employee"&&d.jsx(V_,{}),e==="admin"&&d.jsx(X_,{})]})]})})]})},lk=k.div`
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
`,uk=k.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    /* Removido el filtro que estaba causando problemas */
  }
`,ck=k.h1`
  color: var(--color-primary);
  font-size: 28px;
  font-weight: 600;
  margin: 16px 0 0 0;
`,dk=k.div`
  width: 100%;
  max-width: 500px;
`,fk=k.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,hk=k.div`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,Pf=k.button`
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
`,Tf=k.span`
  font-size: 16px;
`,pk=k.div`
  padding: 0;
`,mk=async(e,t)=>{try{const r=crypto.randomUUID(),n=new Date;n.setDate(n.getDate()+7);const{error:o}=await I.from("ticket_tokens").insert({token:r,id_ticket:e,id_usuario:t,fecha_expiracion:n.toISOString()});if(o)throw o;return r}catch(r){throw console.error("Error generando token:",r),r}},$f=async(e,t)=>{try{console.log("Iniciando notificación por email para:",{ticketId:e.idTicket,usuario:t.nombre});const r=await mk(e.idTicket,t.idUsuario),o=`https://andresdramos.github.io/ventanilla/ticket/${r}`,{data:i,error:s}=await I.functions.invoke("send-email-notification",{body:{ticketData:e,usuario:t,directLink:o}});if(s)throw console.error("Error invocando Edge Function:",s),s;return console.log("Edge Function response:",i),{success:i.success,token:r,directLink:o,emailResult:{success:i.success,messageId:i.messageId,to:i.to}}}catch(r){return console.error("Error enviando notificación de delegación:",r),{success:!1,error:r.message}}},gk=e=>{const[t,r]=w.useState([]),[n,o]=w.useState(!0),[i,s]=w.useState(null),a=w.useRef(!1),l=w.useRef(null),u=w.useCallback(async(c={})=>{if(e)try{o(!0);const f=async p=>{var m;try{if((m=p.seguimientos)==null?void 0:m.find(E=>E.idEstado===1))return{success:!0,mensaje:"Ya tiene seguimiento inicial"};const{error:_}=await I.from("seguimientos").insert({idTicket:p.idTicket,idUsuario:null,idEstado:1});if(_)throw _;return{success:!0,mensaje:"Seguimiento inicial creado"}}catch(g){return console.error("Error creando seguimiento inicial:",g),{success:!1,error:g.message}}};let h=I.from("tickets").select(`
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
        `).order("idTicket",{ascending:!1});if((e==null?void 0:e.idRol)===2){const{data:p}=await I.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);if(!(p&&p.length>0)){r([]),o(!1);return}}if(c.planta){const{data:p}=await I.from("empleados").select("idEmpleado").eq("idPlanta",c.planta);if(p&&p.length>0){const m=p.map(g=>g.idEmpleado);h=h.in("idEmpleado",m)}else{r([]),o(!1);return}}if(c.tipoSolicitud&&(h=h.eq("idTipoSolicitud",c.tipoSolicitud)),c.prioridad&&(h=h.eq("idPrioridad",c.prioridad)),c.empleado){const{data:p}=await I.from("empleados").select("idEmpleado").or(`codigoEmpleado.ilike.%${c.empleado}%,nombre.ilike.%${c.empleado}%`);if(p&&p.length>0){const m=p.map(g=>g.idEmpleado);h=h.in("idEmpleado",m)}else{r([]),o(!1);return}}const{data:v,error:x}=await h;if(x)throw x;let y=v||[];const S=y.filter(p=>{var m;return!((m=p.seguimientos)!=null&&m.find(g=>g.idEstado===1))});if(S.length>0){const p=S.map(m=>f(m));try{await Promise.all(p);const{data:m}=await h;m&&(y=m)}catch(m){console.error("Error en migración de seguimientos:",m)}}if((e==null?void 0:e.idRol)!==1)if(e.idRol===3){const{data:p}=await I.from("delegaciones").select("idTicket").eq("idUsuario",e.id).eq("bActivo",!0);if(p&&p.length>0){const m=p.map(g=>g.idTicket);y=y.filter(g=>m.includes(g.idTicket))}else y=[]}else{const{data:p}=await I.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);p&&p.length>0?y=y.filter(m=>p.some(_=>{var E;return((E=m.empleados)==null?void 0:E.idPlanta)===_.idPlanta&&m.idTipoSolicitud===_.idTipoSolicitud})):y=[]}c.sortBy==="prioridad"?y.sort((p,m)=>p.idPrioridad-m.idPrioridad):y.sort((p,m)=>{var E,b,C,T;const g=(b=(E=p.seguimientos)==null?void 0:E.find(L=>L.idEstado===1))==null?void 0:b.fecha,_=(T=(C=m.seguimientos)==null?void 0:C.find(L=>L.idEstado===1))==null?void 0:T.fecha;return!g&&!_?0:g?_?new Date(_)-new Date(g):-1:1}),r(y),s(null)}catch(f){console.error("Error fetching tickets:",f),s(f.message)}finally{o(!1)}},[e]);return w.useEffect(()=>{e&&(l.current!==e.id||!a.current)&&(l.current=e.id,a.current=!0,u())},[e,u]),{tickets:t,loading:n,error:i,refetchTickets:u}},vk=e=>({total:e.length,sinAtender:e.filter(r=>r.idEstado===1).length,reasignados:e.filter(r=>r.idEstado===2).length,atendidos:e.filter(r=>r.idEstado===3).length,cerrados:e.filter(r=>r.idEstado===4).length,cancelados:e.filter(r=>r.idEstado===5).length}),jg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0);w.useEffect(()=>{(async()=>{try{const{data:s,error:a}=await I.from("asignaciones").select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `);if(a)throw a;t(s||[])}catch(s){console.error("Error fetching asignaciones:",s)}finally{n(!1)}})()},[]);const o=w.useCallback((i,s)=>{var l;const a=e.find(u=>u.idPlanta===i&&u.idTipoSolicitud===s);return((l=a==null?void 0:a.usuarios)==null?void 0:l.nombre)||"No asignado"},[e]);return{asignaciones:e,loading:r,getResponsable:o}},yk=e=>{const[t,r]=w.useState(!1),n=w.useCallback(async(l,u,c)=>{var f;try{r(!0);const{error:h}=await I.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:3});if(h)throw h;const{data:v,error:x}=await I.from("atenciones").insert({idTicket:l,respuesta:c}).select().single();if(x)throw x;const{error:y}=await I.from("tickets").update({idEstado:3}).eq("idTicket",l);if(y)throw y;const{error:S}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);return S&&!((f=S.message)!=null&&f.includes("0 rows"))&&console.warn("Error al desactivar delegaciones:",S),{success:!0,atencion:v}}catch(h){return console.error("Error al registrar la atención:",h),{success:!1,error:h.message}}finally{r(!1)}},[]),o=w.useCallback(async(l,u,c)=>{try{r(!0);try{const{error:g}=await I.from("ticket_tokens").update({usado:!0,fecha_uso:new Date().toISOString()}).eq("id_ticket",l).eq("usado",!1);g&&console.warn("Advertencia al invalidar tokens en delegación:",g)}catch(g){console.warn("Error manejando tokens (no crítico):",g)}const{data:f,error:h}=await I.from("tickets").select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `).eq("idTicket",l).single();if(h)throw h;const{data:v,error:x}=await I.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",c).single();if(x)throw x;const{error:y}=await I.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:2});if(y)throw y;const{error:S}=await I.from("tickets").update({idEstado:2}).eq("idTicket",l);if(S)throw S;const{error:p}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(p)throw p;const{error:m}=await I.from("delegaciones").insert({idTicket:l,idUsuario:c});if(m)throw m;try{const g=await $f(f,v);g.success?console.log("Notificación enviada exitosamente:",{token:g.token,directLink:g.directLink,emailSent:g.emailResult.success}):console.warn("Error enviando notificación (delegación completada):",g.error)}catch(g){console.warn("Error en sistema de notificaciones (delegación completada):",g)}return{success:!0,mensaje:"Ticket delegado exitosamente.",ticketData:f,usuarioDestino:v}}catch(f){return console.error("Error al delegar el ticket:",f),{success:!1,error:f.message}}finally{r(!1)}},[]),i=w.useCallback(async(l,u,c)=>{try{r(!0);const{error:f}=await I.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:5});if(f)throw f;const{data:h,error:v}=await I.from("atenciones").insert({idTicket:l,respuesta:c}).select().single();if(v)throw v;const{error:x}=await I.from("tickets").update({idEstado:5}).eq("idTicket",l);if(x)throw x;return{success:!0,atencion:h}}catch(f){return console.error("Error al cancelar el ticket:",f),{success:!1,error:f.message}}finally{r(!1)}},[]),s=w.useCallback(async(l,u)=>{if(!e)return{success:!1,error:"Usuario no disponible"};r(!0);try{try{const{error:v}=await I.from("ticket_tokens").update({usado:!0,fecha_uso:new Date().toISOString()}).eq("id_ticket",l).eq("usado",!1);v&&console.warn("Advertencia al invalidar tokens en reasignación:",v)}catch(v){console.warn("Error manejando tokens en reasignación (no crítico):",v)}const{error:c}=await I.from("seguimientos").insert({idTicket:l,idUsuario:e.id,idEstado:2});if(c)throw c;const{error:f}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(f)throw f;const{error:h}=await I.from("delegaciones").insert({idTicket:l,idUsuario:u});if(h)throw h;try{const{data:v,error:x}=await I.from("usuarios").select("idUsuario, idRol, correo, nombre").eq("idUsuario",u).single();if(!x&&v&&v.idRol===3){const{data:y,error:S}=await I.from("tickets").select(`
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            `).eq("idTicket",l).single();if(!S&&y){const p=await $f(y,v);p.success?console.log("Notificación de reasignación enviada exitosamente:",{token:p.token,email:v.correo}):console.error("Error al enviar notificación de reasignación:",p.error)}}}catch(v){console.error("Error en proceso de notificación de reasignación:",v)}return{success:!0}}catch(c){return console.error("Error al re-asignar el ticket:",c),{success:!1,error:c.message}}finally{r(!1)}},[e]),a=w.useCallback(async l=>{r(!0);try{const{error:u}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(u)throw u;return{success:!0}}catch(u){return console.error("Error al autoasignarse el ticket:",u),{success:!1,error:u.message}}finally{r(!1)}},[]);return{crearAtencion:n,delegarTicket:o,cancelarTicket:i,reasignarTicket:s,autoasignarTicket:a,loading:t}},Pg=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null),o=w.useCallback(async(s,a=null)=>{try{t(!0),n(null);let l=3;a===5?l=5:a===3&&(l=3);const{data:u,error:c}=await I.from("seguimientos").select(`
          idUsuario,
          fecha,
          usuarios (
            nombre
          )
        `).eq("idTicket",s).eq("idEstado",l).order("fecha",{ascending:!1}).limit(1).single();return c?(console.error("Error obteniendo seguimiento:",c),null):!u||!u.usuarios?null:{nombre:u.usuarios.nombre,fecha:u.fecha}}catch(l){return console.error("Error en obtenerUsuarioQueAtendio:",l),n(l.message),null}finally{t(!1)}},[]),i=w.useCallback(async s=>{if(!s||s.length===0)return{};try{t(!0),n(null);const{data:a,error:l}=await I.from("seguimientos").select(`
          idTicket,
          idUsuario,
          fecha,
          usuarios (
            nombre,
            apellidos
          )
        `).in("idTicket",s).eq("idEstado",3).order("fecha",{ascending:!1});if(l)return console.error("Error obteniendo seguimientos:",l),{};const u={};return a.forEach(c=>{!u[c.idTicket]&&c.usuarios&&(u[c.idTicket]={nombre:`${c.usuarios.nombre} ${c.usuarios.apellidos}`.trim(),fecha:c.fecha})}),u}catch(a){return console.error("Error en obtenerUsuariosQueAtendieron:",a),n(a.message),{}}finally{t(!1)}},[]);return{obtenerUsuarioQueAtendio:o,obtenerUsuariosQueAtendieron:i,loading:e,error:r}},nt=e=>{if(!e)return"Fecha no disponible";if(e.includes("T")&&e.includes("+00:00")){const r=e.split("T")[0],n=e.split("T")[1].split("+")[0],[o,i,s]=r.split("-"),[a,l]=n.split(":");return`${s}/${i}/${o}, ${a}:${l}`}return new Date(e).toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},wk=({user:e,onLogout:t})=>d.jsxs(xk,{children:[d.jsxs(_k,{children:[d.jsx("h1",{children:"Dashboard Administrativo"}),d.jsxs("p",{children:["Bienvenido, ",e==null?void 0:e.nombre]})]}),d.jsx(kk,{onClick:t,children:"Cerrar Sesión"})]}),xk=k.header`
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
`,_k=k.div`
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
`,kk=k.button`
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
`,Sk=({stats:e,statsFilter:t,onStatsFilterChange:r})=>{const n={sinAtender:{id:1,label:"Nuevos",color:"var(--color-estado-sin-atender)",count:e.sinAtender},reasignados:{id:2,label:"Asignados",color:"var(--color-estado-delegado)",count:e.reasignados},atendidos:{id:3,label:"Atendidos",color:"var(--color-estado-atendido)",count:e.atendidos},cerrados:{id:4,label:"Cerrados",color:"var(--color-estado-cerrado)",count:e.cerrados},cancelados:{id:5,label:"Cancelados",color:"var(--color-estado-cancelado)",count:e.cancelados}},o=i=>{r(t===i?null:i)};return d.jsxs(bk,{children:[d.jsxs(Ek,{children:["Tickets: ",e.total]}),d.jsx(Ck,{children:Object.entries(n).map(([i,s])=>d.jsxs(jk,{$active:t===i,$color:s.color,onClick:()=>o(i),children:[d.jsx(Pk,{$active:t===i,$color:s.color,children:s.count}),d.jsx(Tk,{$active:t===i,$color:s.color,children:s.label})]},i))})]})},bk=k.div`
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
  }
`,Ek=k.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`,Ck=k.div`
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
`,jk=k.div`
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
`,Pk=k.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  margin-bottom: 0.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`,Tk=k.div`
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,$k=({tempFilters:e,onTempFilterChange:t,onApplyFilters:r,onClearFilters:n,plantas:o,tipos:i,prioridades:s})=>{const[a,l]=w.useState(!1);return d.jsxs(Rk,{children:[d.jsxs(Ak,{onClick:()=>l(!a),children:[d.jsx("h3",{children:"Filtros"}),d.jsx(Ok,{$expanded:a,children:a?"▲":"▼"})]}),a&&d.jsxs(Ik,{children:[d.jsxs(Lk,{children:[d.jsxs(Ai,{children:[d.jsx("label",{children:"Planta:"}),d.jsxs("select",{value:e.planta,onChange:u=>t("planta",u.target.value),children:[d.jsx("option",{value:"",children:"Todas"}),o.map(u=>d.jsx("option",{value:u.idPlanta,children:u.planta},u.idPlanta))]})]}),d.jsxs(Ai,{children:[d.jsx("label",{children:"Tipo:"}),d.jsxs("select",{value:e.tipoSolicitud,onChange:u=>t("tipoSolicitud",u.target.value),children:[d.jsx("option",{value:"",children:"Todos"}),i.sort((u,c)=>u.idTipoSolicitud-c.idTipoSolicitud).map(u=>d.jsx("option",{value:u.idTipoSolicitud,children:u.tipoSolicitud},u.idTipoSolicitud))]})]}),d.jsxs(Ai,{children:[d.jsx("label",{children:"Prioridad:"}),d.jsxs("select",{value:e.prioridad,onChange:u=>t("prioridad",u.target.value),children:[d.jsx("option",{value:"",children:"Todas"}),s.map(u=>d.jsx("option",{value:u.idPrioridad,children:u.prioridad},u.idPrioridad))]})]}),d.jsxs(Ai,{children:[d.jsx("label",{children:"Empleado:"}),d.jsx("input",{type:"text",placeholder:"Código o nombre...",value:e.empleado,onChange:u=>t("empleado",u.target.value)})]})]}),d.jsxs(Nk,{children:[d.jsx("label",{children:"Ordenar por:"}),d.jsxs("select",{value:e.sortBy,onChange:u=>t("sortBy",u.target.value),children:[d.jsx("option",{value:"fecha",children:"Fecha de creación"}),d.jsx("option",{value:"prioridad",children:"Prioridad"})]})]}),d.jsxs(zk,{children:[d.jsx(Uk,{onClick:n,children:"Limpiar"}),d.jsx(Dk,{onClick:r,children:"Aplicar"})]})]})]})},Rk=k.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`,Ak=k.div`
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
`,Ok=k.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`,Ik=k.div`
  padding: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`,Lk=k.div`
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
`,Ai=k.div`
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
`,Nk=k.div`
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
`,zk=k.div`
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
`,Dk=k.button`
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
`,Uk=k.button`
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
`,hu=({ticket:e,mode:t="employee",formatDate:r,getPriorityColor:n,getResponsable:o,onAtender:i,onVerRespuesta:s,onShowDetails:a,isResolved:l=!1,isExpanded:u=!1,onToggleExpand:c,currentUser:f=null})=>{var _,E,b,C,T,L,$,H;const h=R=>{var J,fe;if(R.idEstado===2&&((J=R.delegaciones)==null?void 0:J.length)>0){const ae=R.delegaciones.find(ce=>ce.bActivo===!0);return((fe=ae==null?void 0:ae.usuarios)==null?void 0:fe.nombre)||null}return null},v=R=>{var fe,ae;const J=(ae=(fe=R.seguimientos)==null?void 0:fe.find(ce=>ce.idEstado===1))==null?void 0:ae.fecha;return J?r?r(J):nt(J):"Pendiente seguimiento inicial"},x=R=>{var J,fe,ae,ce,ke,j,O,N;switch(R.idEstado){case 1:return v(R);case 2:{const z=(fe=(J=R.seguimientos)==null?void 0:J.find(D=>D.idEstado===2))==null?void 0:fe.fecha;return z?r?r(z):nt(z):v(R)}case 3:{const z=(ce=(ae=R.seguimientos)==null?void 0:ae.find(D=>D.idEstado===3))==null?void 0:ce.fecha;return z?r?r(z):nt(z):v(R)}case 4:{const z=(j=(ke=R.seguimientos)==null?void 0:ke.find(D=>D.idEstado===4))==null?void 0:j.fecha;return z?r?r(z):nt(z):v(R)}case 5:{const z=(N=(O=R.seguimientos)==null?void 0:O.find(D=>D.idEstado===5))==null?void 0:N.fecha;return z?r?r(z):nt(z):v(R)}default:return v(R)}},y=()=>{switch(e.idEstado){case 1:return"var(--color-estado-sin-atender)";case 2:return"var(--color-estado-delegado)";case 3:return"var(--color-estado-atendido)";case 4:return"var(--color-estado-cerrado)";case 5:return"var(--color-estado-cancelado)";default:return"#ffc107"}},S=R=>{switch(R){case 1:return"Sin atender";case 2:return"Asignado";case 3:return"Atendido";case 4:return"Cerrado";case 5:return"Cancelado";default:return"Pendiente"}},p=R=>{switch(R){case 1:return"Fecha de creación:";case 2:return"Fecha de asignación:";case 3:return"Fecha de atención:";case 4:return"Fecha de cierre:";case 5:return"Fecha de cancelación:";default:return"Fecha de creación:"}},m=R=>{switch(R){case 1:return"var(--color-estado-sin-atender)";case 2:return"var(--color-estado-delegado)";case 3:return"var(--color-estado-atendido)";case 4:return"var(--color-estado-cerrado)";case 5:return"var(--color-estado-cancelado)";default:return"#ffc107"}},g=t==="employee"?l:e.atenciones&&e.atenciones.length>0;return d.jsxs(Fk,{$isResolved:g,$borderColor:y(),$isExpanded:u,children:[d.jsxs(Mk,{onClick:()=>c&&c(e.idTicket),children:[d.jsxs(Bk,{children:[d.jsx(qk,{$priority:n(e.idPrioridad),children:(_=e.prioridades)==null?void 0:_.prioridad}),d.jsxs(Hk,{children:["#",e.idTicket]})]}),d.jsx(Wk,{children:t==="admin"?g?d.jsx(Yk,{children:d.jsx(Xk,{onClick:R=>{R.stopPropagation(),s&&s(e)},title:"Ver respuesta del ticket",children:d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),d.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}):d.jsxs(Vk,{children:[d.jsx(Kk,{onClick:R=>{R.stopPropagation(),i&&i(e)},children:"Atender"}),d.jsx(Rf,{onClick:R=>{R.stopPropagation(),c&&c(e.idTicket)},children:u?"▲":"▼"})]}):d.jsxs(Gk,{children:[d.jsx(Jk,{$estadoColor:m(e.idEstado),onClick:R=>{R.stopPropagation(),a&&a(e)},children:S(e.idEstado)}),d.jsx(Rf,{onClick:R=>{R.stopPropagation(),c&&c(e.idTicket)},children:u?"▲":"▼"})]})})]}),d.jsx(Qk,{$isExpanded:u,children:t==="admin"?d.jsxs(d.Fragment,{children:[d.jsxs(br,{children:[d.jsx(Ot,{children:"Empleado:"}),d.jsxs(Er,{children:[(E=e.empleados)==null?void 0:E.nombre," - Código:"," ",(b=e.empleados)==null?void 0:b.codigoEmpleado]})]}),d.jsxs(br,{children:[d.jsx(Ot,{children:"Planta:"}),d.jsx(Er,{children:(T=(C=e.empleados)==null?void 0:C.plantas)==null?void 0:T.planta})]}),d.jsxs(br,{children:[d.jsx(Ot,{children:"Fecha:"}),d.jsx(Er,{children:x(e)})]}),o&&d.jsxs(br,{children:[d.jsx(Ot,{children:(f==null?void 0:f.idRol)===3?e.idEstado===2?"Delegado a:":"Asignado por:":e.idEstado===2?"Delegado a:":"Responsable:"}),d.jsx(Er,{children:e.idEstado===2&&h(e)?h(e):o((L=e.empleados)==null?void 0:L.idPlanta,e.idTipoSolicitud)})]}),d.jsxs(Af,{children:[d.jsx(Ot,{children:"Descripción:"}),d.jsx(Of,{children:e.descripcion})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs(br,{children:[d.jsx(Ot,{children:p(e.idEstado)}),d.jsx(Er,{children:x(e)})]}),d.jsxs(br,{children:[d.jsx(Ot,{children:"Tipo:"}),d.jsx(Er,{children:($=e.tiposSolicitud)==null?void 0:$.tipoSolicitud})]}),d.jsxs(Af,{children:[d.jsx(Ot,{children:"Descripción:"}),d.jsx(Of,{children:e.descripcion})]}),o&&d.jsxs(br,{children:[d.jsx(Ot,{children:e.idEstado===2?"Delegado a:":"Responsable:"}),d.jsx(Er,{children:e.idEstado===2&&h(e)?h(e):o((H=e.empleados)==null?void 0:H.idPlanta,e.idTipoSolicitud)})]})]})})]})},Fk=k.div`
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
`,Mk=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${e=>e.$isResolved?"#f8f9fa":"white"};
  border-bottom: ${e=>e.$isExpanded?"1px solid #e9ecef":"none"};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`,Bk=k.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`,Wk=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,qk=k.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$priority};
`,Hk=k.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Vk=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kk=k.button`
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
`,Gk=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Jk=k.button`
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
`,Rf=k.button`
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
`,Qk=k.div`
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
`,br=k.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`,Ot=k.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.8rem;
  min-width: 120px;

  @media (max-width: 768px) {
    min-width: auto;
    font-size: 0.75rem;
  }
`,Er=k.span`
  color: #495057;
  font-size: 0.8rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 0.75rem;
  }
`,Af=k.div`
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e9ecef;
`,Yk=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Xk=k.button`
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
`,Of=k.div`
  color: #495057;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zk=({tickets:e,mode:t="admin",onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,expandedTicketId:a,onToggleExpand:l,currentUser:u=null})=>e.length===0?d.jsx(If,{children:d.jsx(tS,{children:"No se encontraron tickets"})}):d.jsx(If,{children:d.jsx(eS,{children:e.map(c=>d.jsx(hu,{ticket:c,mode:t,onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,isExpanded:a===c.idTicket,onToggleExpand:l,currentUser:u},c.idTicket))})}),If=k.div`
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
`,eS=k.div`
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
`,tS=k.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  margin: 1rem;
`,rS=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null),s=async()=>{try{n(!0),i(null);const{data:a,error:l}=await I.from("usuarios").select("*").order("idUsuario",{ascending:!1});if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching users:",a)}finally{n(!1)}};return w.useEffect(()=>{s()},[]),{users:e,loading:r,error:o,refetch:s}},nS=({ticket:e,isOpen:t,onClose:r,mode:n="view",onSubmit:o,onDelegate:i,onReassign:s=null,onSelfAssign:a=null,loading:l=!1,usuarioQueAtendio:u=null,currentUser:c=null})=>{var E,b,C,T,L,$,H,R,J,fe,ae,ce,ke;const[f,h]=w.useState(""),[v,x]=w.useState(""),[y,S]=w.useState(""),{users:p}=rS(),m=()=>{if(v==="respond"){if(!f.trim()){alert("Debe ingresar una respuesta");return}o==null||o(f.trim(),"respond")}else if(v==="delegate"){if(!y){alert("Debe seleccionar un usuario para delegar");return}i==null||i(y)}else if(v==="cancel"){if(!f.trim()){alert("Debe ingresar el motivo de cancelación");return}o==null||o(f.trim(),"cancel")}else if(v==="reassign"){if(!y){alert("Debe seleccionar un usuario para re-asignar");return}s==null||s(y)}else if(v==="selfassign"){if(!f.trim()){alert("Debe ingresar una respuesta");return}a==null||a(),o==null||o(f.trim(),"respond")}else{if(!f.trim()&&n==="attend"){alert("Debe ingresar una respuesta");return}o==null||o(f.trim())}},g=()=>{h(""),x(""),S(""),r==null||r()},_=j=>{h(""),S(""),x(j)};return!t||!e?null:d.jsx(oS,{children:d.jsxs(iS,{children:[d.jsxs(sS,{children:[d.jsxs(aS,{children:[d.jsx(gS,{$priority:(b=(E=e.prioridades)==null?void 0:E.prioridad)==null?void 0:b.toLowerCase(),children:(C=e.prioridades)==null?void 0:C.prioridad}),d.jsxs("h3",{children:["#",e.idTicket]})]}),d.jsx(lS,{onClick:g,children:"×"})]}),d.jsxs(uS,{children:[d.jsx(hS,{children:d.jsxs(pS,{children:[(T=e.empleados)==null?void 0:T.nombre," (",(L=e.empleados)==null?void 0:L.codigoEmpleado,") -"," ",(H=($=e.empleados)==null?void 0:$.plantas)==null?void 0:H.planta]})}),d.jsxs(CS,{children:[d.jsx(jS,{children:"Fecha de generación:"})," ",d.jsx(PS,{children:(J=(R=e.seguimientos)==null?void 0:R.find(j=>j.idEstado===1))!=null&&J.fecha?nt(e.seguimientos.find(j=>j.idEstado===1).fecha):"No disponible"})]}),d.jsxs(mS,{children:["Tipo: ",(fe=e.tiposSolicitud)==null?void 0:fe.tipoSolicitud]}),d.jsx(vS,{children:d.jsx(yS,{children:e.descripcion})}),n==="attend"&&e.idEstado===2&&c&&(c.idRol===1||c.idRol===2)&&e.delegaciones&&e.delegaciones.length>0&&d.jsx(bS,{children:e.delegaciones.filter(j=>j.bActivo===!0).map(j=>{var O;return d.jsxs(ES,{children:[d.jsx("strong",{children:"Reasignado a:"})," ",((O=j.usuarios)==null?void 0:O.nombre)||"Usuario desconocido"]},j.idDelegacion)})}),n==="attend"&&e.idEstado===2&&c&&(c.idRol===1||c.idRol===2)&&d.jsxs(Lf,{children:[d.jsx(ro,{$active:v==="reassign",onClick:()=>_("reassign"),children:"Re-asignar"}),d.jsx(ro,{$active:v==="selfassign",onClick:()=>_("selfassign"),children:"Autoasignar"})]}),v==="reassign"&&d.jsxs(Uf,{children:[d.jsx(Ff,{children:"Re-asignar a:"}),d.jsxs(Nf,{value:y,onChange:j=>S(j.target.value),children:[d.jsx("option",{value:"",children:"Seleccione un usuario"}),p.filter(j=>{var N,z;const O=((z=(N=e.delegaciones)==null?void 0:N.filter(D=>D.bActivo===!0))==null?void 0:z.map(D=>{var Oe;return(Oe=D.usuarios)==null?void 0:Oe.idUsuario}))||[];return j.idRol===3&&!O.includes(j.idUsuario)}).map(j=>d.jsx("option",{value:j.idUsuario,children:j.nombre},j.idUsuario))]})]}),v==="selfassign"&&d.jsxs(zf,{children:[d.jsx(Df,{children:e.idEstado===5?"Su motivo de cancelación:":"Su respuesta:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>h(j.target.value),placeholder:e.idEstado===5?"Escriba su motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),n==="attend"&&e.idEstado===1&&d.jsxs(d.Fragment,{children:[d.jsxs(Lf,{children:[d.jsx(ro,{$active:v==="respond",onClick:()=>_("respond"),children:"Responder"}),d.jsx(ro,{$active:v==="delegate",onClick:()=>_("delegate"),children:"Reasignar"}),d.jsx(ro,{$active:v==="cancel",onClick:()=>_("cancel"),children:"Cancelar"})]}),v==="respond"&&d.jsxs(zf,{children:[d.jsx(Df,{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>h(j.target.value),placeholder:e.idEstado===5?"Escriba el motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),v==="delegate"&&d.jsxs(Uf,{children:[d.jsx(Ff,{children:"Delegar a:"}),d.jsxs(Nf,{value:y,onChange:j=>S(j.target.value),children:[d.jsx("option",{value:"",children:"Seleccione un usuario"}),p.filter(j=>j.idRol===3).map(j=>d.jsx("option",{value:j.idUsuario,children:j.nombre},j.idUsuario))]})]}),v==="cancel"&&d.jsxs(wS,{children:[d.jsx(xS,{children:"Motivo de cancelación:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>h(j.target.value),placeholder:"Escriba el motivo por el cual se cancela este ticket..."})]})]}),n==="attend"&&e.idEstado!==1&&!(e.idEstado===2&&c&&(c.idRol===1||c.idRol===2))&&d.jsxs(d.Fragment,{children:[d.jsx("label",{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>h(j.target.value),placeholder:e.idEstado===5?"Escriba el motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),n==="response"&&d.jsxs(d.Fragment,{children:[d.jsxs(_S,{children:[d.jsx(kS,{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),d.jsx(SS,{children:((ce=(ae=e.atenciones)==null?void 0:ae[0])==null?void 0:ce.respuesta)||(e.idEstado===5?"No hay motivo de cancelación disponible":"No hay respuesta disponible")})]}),d.jsxs(fS,{children:[d.jsx("strong",{children:e.idEstado===5?"Cancelado por:":"Atendido por:"})," ",(u==null?void 0:u.nombre)||"No disponible",d.jsx("br",{}),d.jsx("strong",{children:e.idEstado===5?"Fecha de cancelación:":"Fecha de atención:"})," ",u!=null&&u.fecha?nt(u.fecha):"No disponible"]}),e.idEstado===4&&((ke=e.atenciones)==null?void 0:ke[0])&&d.jsxs(TS,{children:[d.jsx($S,{children:"Evaluación del Empleado"}),e.atenciones[0].calificacion&&d.jsxs(RS,{children:[d.jsx(AS,{children:"Calificación:"}),d.jsx(OS,{$rating:e.atenciones[0].calificacion,children:[1,2,3].map(j=>d.jsx(IS,{$filled:j<=e.atenciones[0].calificacion,children:"★"},j))})]}),e.atenciones[0].comentario&&d.jsxs(LS,{children:[d.jsx(NS,{children:"Comentario del empleado:"}),d.jsx(zS,{children:e.atenciones[0].comentario})]}),!e.atenciones[0].calificacion&&!e.atenciones[0].comentario&&d.jsx(DS,{children:"El empleado no proporcionó evaluación del servicio"})]})]})]}),n!=="response"&&e.idEstado!==4&&(n==="attend"&&e.idEstado===1&&v||n==="attend"&&e.idEstado===2&&v||n==="attend"&&e.idEstado!==1&&!(e.idEstado===2&&c&&(c.idRol===1||c.idRol===2))||n!=="attend")&&d.jsx(cS,{children:n==="attend"&&d.jsx(dS,{onClick:m,disabled:l||v==="respond"&&!f.trim()||v==="cancel"&&!f.trim()||v==="delegate"&&!y||v==="reassign"&&!y||v==="selfassign"&&!f.trim(),children:l?"Enviando...":v==="delegate"?"Reasignar Ticket":v==="cancel"?"Cancelar Ticket":v==="reassign"?"Re-asignar Ticket":v==="selfassign"?"Autoasignar y Responder":"Enviar Respuesta"})})]})})},oS=k.div`
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
`,iS=k.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`,sS=k.div`
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
`,aS=k.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,lS=k.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`,uS=k.div`
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
`,Oi=k.textarea`
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
`,cS=k.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
`,dS=k.button`
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
`,fS=k.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`,hS=k.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,pS=k.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,mS=k.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,gS=k.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  background: ${e=>{switch(e.$priority){case"alta":return"#dc3545";case"media":return"#fd7e14";case"baja":return"#28a745";default:return"#6c757d"}}};

  color: white;
`,vS=k.div`
  margin-bottom: 1.5rem;
`,yS=k.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,Lf=k.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,ro=k.button`
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
`,Nf=k.select`
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
`,zf=k.div`
  margin-top: 1rem;
`,Df=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Uf=k.div`
  margin-top: 1rem;
`,Ff=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,wS=k.div`
  margin-top: 1rem;
`,xS=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,_S=k.div`
  margin-bottom: 1.5rem;
`,kS=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,SS=k.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,bS=k.div`
  margin-bottom: 1.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`,ES=k.p`
  margin: 1rem;
  color: #424242;
  font-size: 1rem;
  font-weight: 500;
  vertical-align: middle;
`,CS=k.div`
  margin-bottom: 0.5rem;
`,jS=k.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,PS=k.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  display: inline;
`,TS=k.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f0f8f5;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  border-left: 4px solid #28a745;
`,$S=k.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
`,RS=k.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,AS=k.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,OS=k.div`
  display: flex;
  gap: 0.2rem;
`,IS=k.span`
  font-size: 1.2rem;
  color: ${e=>e.$filled?"#ffc107":"#e9ecef"};
  text-shadow: ${e=>e.$filled?"0 0 1px rgba(0,0,0,0.3)":"none"};
`,LS=k.div`
  margin-bottom: 0.5rem;
`,NS=k.div`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,zS=k.div`
  padding: 0.75rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2rem;
  font-style: italic;
`,DS=k.div`
  color: #6c757d;
  font-style: italic;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
`,US=()=>{const{user:e,logout:t}=oi(),[r,n]=w.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[o,i]=w.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[s,a]=w.useState("sinAtender"),[l,u]=w.useState({show:!1,mode:"view",ticket:null}),[c,f]=w.useState(null),[h,v]=w.useState(null),{tickets:x,loading:y,refetchTickets:S}=gk(e),p=vk(x),{getResponsable:m}=jg(),{crearAtencion:g,delegarTicket:_,cancelarTicket:E,reasignarTicket:b,autoasignarTicket:C,loading:T}=yk(e),{obtenerUsuarioQueAtendio:L}=Pg(),{plantas:$}=_g(),{tipos:H}=Sg(),{prioridades:R}=bg();w.useEffect(()=>{e&&S(r)},[r,e,S]);const J=(F,X)=>{i(Ke=>({...Ke,[F]:X}))},fe=()=>{n(o)},ae=()=>{const F={planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"};i(F),n(F)},ce=F=>{u({show:!0,mode:"attend",ticket:F})},ke=async F=>{u({show:!0,mode:"response",ticket:F});try{const X=await L(F.idTicket,F.idEstado);f(X)}catch(X){console.error("Error obteniendo usuario que atendió:",X),f(null)}},j=()=>{u({show:!1,mode:"view",ticket:null}),f(null)},O=async(F,X="respond")=>{let Ke;try{X==="respond"?Ke=await g(l.ticket.idTicket,e.id,F):X==="cancel"&&(Ke=await E(l.ticket.idTicket,e.id,F)),Ke.success?(j(),S(r)):alert("Error al procesar la solicitud: "+Ke.error)}catch(At){alert("Error inesperado: "+At.message)}},N=async F=>{const X=await _(l.ticket.idTicket,e.id,F);X.success?(j(),S(r)):alert("Error al delegar el ticket: "+X.error)},z=async F=>{if(!l.ticket)return;const X=await b(l.ticket.idTicket,F);X.success?(j(),S(r)):alert("Error al re-asignar el ticket: "+X.error)},D=async()=>{if(!l.ticket)return;const F=await C(l.ticket.idTicket);F.success||alert("Error al autoasignarse el ticket: "+F.error)},Oe=F=>{v(h===F?null:F)},je=x.filter(F=>{if((e==null?void 0:e.idRol)===3||!s)return!0;switch(s){case"sinAtender":return F.idEstado===1;case"reasignados":return F.idEstado===2;case"atendidos":return F.idEstado===3;case"cerrados":return F.idEstado===4;case"cancelados":return F.idEstado===5;default:return!0}}),He=F=>{a(F)},Se=F=>{switch(F){case 3:return"#E06363";case 2:return"#E0C563";case 1:return"#636EE0";default:return"#6c757d"}},Ve=F=>nt(F);return y?d.jsx(Mf,{children:d.jsx(MS,{children:"Cargando dashboard..."})}):d.jsxs(Mf,{children:[d.jsxs(FS,{children:[d.jsx(wk,{user:e,onLogout:t}),(e==null?void 0:e.idRol)!==3&&d.jsx(Sk,{stats:p,statsFilter:s,onStatsFilterChange:He}),d.jsx($k,{tempFilters:o,onTempFilterChange:J,onApplyFilters:fe,onClearFilters:ae,plantas:$,tipos:H,prioridades:R})]}),d.jsx(Zk,{tickets:je,mode:"admin",onAtender:ce,onVerRespuesta:ke,getResponsable:m,formatDate:Ve,getPriorityColor:Se,expandedTicketId:h,onToggleExpand:Oe,currentUser:e}),d.jsx(nS,{ticket:l.ticket,isOpen:l.show,onClose:j,mode:l.mode,onSubmit:O,onDelegate:N,onReassign:z,onSelfAssign:D,currentUser:e,loading:T,usuarioQueAtendio:c})]})},Mf=k.div`
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
`,FS=k.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,MS=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: var(--color-gray);
`,BS=e=>{const[t,r]=w.useState([]),[n,o]=w.useState(!1),[i,s]=w.useState(null);w.useEffect(()=>{(async()=>{if(e){o(!0),s(null);try{const{data:h,error:v}=await I.from("tickets").select(`
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
          `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(v)throw v;r(h||[])}catch(h){s(h.message),console.error("Error fetching employee tickets:",h)}finally{o(!1)}}})()},[e]);const a=async()=>{if(e){o(!0),s(null);try{const{data:f,error:h}=await I.from("tickets").select(`
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
        `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(h)throw h;r(f||[])}catch(f){s(f.message),console.error("Error fetching employee tickets:",f)}finally{o(!1)}}},l=async(f,h,v="")=>{try{o(!0),s(null);const{data:x,error:y}=await I.from("atenciones").select("*").eq("idTicket",f);if(y)throw new Error(`Error consultando atenciones: ${y.message}`);if(!x||x.length===0)throw new Error(`No se encontró ninguna atención previa para el ticket ${f}. El ticket debe haber sido atendido antes de poder calificarlo.`);const{error:S}=await I.from("tickets").update({idEstado:4}).eq("idTicket",f);if(S)throw new Error(`Error actualizando ticket: ${S.message}`);const{error:p}=await I.from("seguimientos").insert({idTicket:f,idEstado:4,fecha:new Date().toISOString()});if(p)throw new Error(`Error insertando seguimiento: ${p.message}`);const m=x[0].idAtencion,{data:g,error:_}=await I.from("atenciones").update({calificacion:h,comentario:v}).eq("idAtencion",m).select();if(_)throw new Error(`Error actualizando atención: ${_.message}`);if(!g||g.length===0)throw new Error("No se pudo actualizar la atención. El registro pudo haber sido modificado por otra transacción.");return await a(),{success:!0,message:"Calificación enviada correctamente"}}catch(x){const y=x.message||"Error desconocido al calificar ticket";return s(y),{success:!1,error:y}}finally{o(!1)}},u=t.filter(f=>!f.atenciones||f.atenciones.length===0),c=t.filter(f=>f.atenciones&&f.atenciones.length>0);return{tickets:t,pendingTickets:u,resolvedTickets:c,loading:n,error:i,refetch:a,calificarTicket:l}},WS=({employeeData:e,onTicketSubmitted:t,onBack:r})=>{const[n,o]=w.useState({idTipoSolicitud:"",descripcion:"",idPrioridad:""}),[i,s]=w.useState({}),{tipos:a,loading:l}=Sg(),{prioridades:u,loading:c}=bg(),{createTicket:f,loading:h}=H_(),v=(p,m)=>{o(g=>({...g,[p]:m})),i[p]&&s(g=>({...g,[p]:""}))},x=()=>{const p={};return n.idTipoSolicitud||(p.idTipoSolicitud="Debe seleccionar un tipo de solicitud"),n.descripcion.trim()||(p.descripcion="Debe proporcionar una descripción"),n.idPrioridad||(p.idPrioridad="Debe seleccionar una prioridad"),s(p),Object.keys(p).length===0},y=async p=>{if(p.preventDefault(),!x())return;const m={idEmpleado:e.idEmpleado,idTipoSolicitud:parseInt(n.idTipoSolicitud),descripcion:n.descripcion.trim(),idPrioridad:parseInt(n.idPrioridad)},g=await f(m);g.success&&t(g.ticket)};return l||c?d.jsx(Bf,{children:d.jsx(qS,{children:"Cargando formulario..."})}):d.jsx(Bf,{children:d.jsxs(YS,{children:[d.jsxs(XS,{children:[r&&d.jsx(QS,{onClick:r,type:"button",title:"Volver",children:"← Volver"}),d.jsx(ZS,{children:"Crear Nueva Solicitud"})]}),d.jsxs(HS,{onSubmit:y,children:[d.jsxs(VS,{children:[d.jsxs(Wf,{children:[d.jsx(Qa,{children:"Tipo de Solicitud *"}),d.jsxs(qf,{value:n.idTipoSolicitud,onChange:p=>v("idTipoSolicitud",p.target.value),hasError:i.idTipoSolicitud,children:[d.jsx("option",{value:"",children:"Seleccione un tipo..."}),a.sort((p,m)=>p.idTipoSolicitud-m.idTipoSolicitud).map(p=>d.jsx("option",{value:p.idTipoSolicitud,children:p.tipoSolicitud},p.idTipoSolicitud))]}),i.idTipoSolicitud&&d.jsx(Ya,{children:i.idTipoSolicitud})]}),d.jsxs(Wf,{children:[d.jsx(Qa,{children:"Prioridad *"}),d.jsxs(qf,{value:n.idPrioridad,onChange:p=>v("idPrioridad",p.target.value),hasError:i.idPrioridad,children:[d.jsx("option",{value:"",children:"Seleccione una prioridad..."}),u.map(p=>d.jsx("option",{value:p.idPrioridad,children:p.prioridad},p.idPrioridad))]}),i.idPrioridad&&d.jsx(Ya,{children:i.idPrioridad})]})]}),d.jsxs(KS,{children:[d.jsx(Qa,{children:"Descripción del Problema *"}),d.jsx(GS,{rows:"3",placeholder:"Describe detalladamente tu solicitud o problema...",value:n.descripcion,onChange:p=>v("descripcion",p.target.value),hasError:i.descripcion}),i.descripcion&&d.jsx(Ya,{children:i.descripcion})]}),d.jsx(JS,{type:"submit",disabled:h,children:h?"📋 Creando ticket...":"📋 Crear Ticket"})]})]})})},Bf=k.div`
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
`,qS=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-gray);
  font-size: 1.1rem;
`,HS=k.form`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,VS=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`,KS=k.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,Wf=k.div`
  display: flex;
  flex-direction: column;
`,Qa=k.label`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,qf=k.select`
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
`,GS=k.textarea`
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
`,Ya=k.span`
  color: var(--color-danger);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`,JS=k.button`
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
`,QS=k.button`
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
`,YS=k.div`
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
`,XS=k.div`
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
`,ZS=k.h2`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`,eb=({employeeData:e,onLogout:t})=>{var X,Ke,At,ct;const{logout:r}=oi(),[n,o]=w.useState("pending"),[i,s]=w.useState(!1),[a,l]=w.useState(null),[u,c]=w.useState(!0),[f,h]=w.useState(null),[v,x]=w.useState(!1),[y,S]=w.useState(null),[p,m]=w.useState(null),[g,_]=w.useState(1),[E,b]=w.useState(""),[C,T]=w.useState(!1),[L,$]=w.useState(!1),{buscarEmpleadoPorCodigo:H}=Eg(),{esquemas:R}=kg(),{getResponsable:J}=jg(),{obtenerUsuarioQueAtendio:fe}=Pg(),{pendingTickets:ae,resolvedTickets:ce,loading:ke,error:j,refetch:O,calificarTicket:N}=BS(a==null?void 0:a.idEmpleado),z=u||ke;w.useEffect(()=>{(async()=>{if(e!=null&&e.codigoEmpleado){c(!0);try{const le=await H(e.codigoEmpleado);le.success&&le.empleado?l(le.empleado):(console.warn("No se encontró el empleado en BD, usando datos de sesión"),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}}))}catch(le){console.error("Error al buscar empleado:",le),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}finally{c(!1)}}})()},[e,H]);const D=U=>{switch(U){case 1:return"#dc3545";case 2:return"#ffc107";case 3:return"#28a745";default:return"#6c757d"}},Oe=U=>nt(U),je=U=>{h(f===U?null:U)},He=async U=>{if(S(U),x(!0),m(null),_(1),b(""),T(!1),U.idEstado===3||U.idEstado===5||U.atenciones&&U.atenciones.length>0)try{const le=await fe(U.idTicket,U.idEstado);m(le),U.idEstado===3&&U.atenciones&&U.atenciones.length>0&&(!U.atenciones[0].calificacion||U.atenciones[0].calificacion===0)&&T(!0)}catch(le){console.error("Error obteniendo usuario que atendió/canceló:",le),m(null)}},Se=async()=>{if(!(E.trim()&&g===1&&!window.confirm("Has escrito un comentario pero tienes la calificación mínima (1 estrella). ¿Deseas continuar?"))){$(!0);try{const U=await N(y.idTicket,g,E);U.success?(alert("Calificación enviada exitosamente. El ticket ha sido cerrado."),T(!1),x(!1)):alert(`Error al enviar la calificación: ${U.error}`)}catch(U){console.error("Error enviando calificación:",U),alert("Error al enviar la calificación. Inténtalo de nuevo.")}finally{$(!1)}}},Ve=()=>{s(!1),O()},F=()=>{r(),t&&t()};return i?d.jsx(WS,{employeeData:a||e,onTicketSubmitted:Ve,onLogout:F,onBack:()=>s(!1)}):d.jsxs(tb,{children:[d.jsxs(rb,{children:[d.jsxs(ob,{children:[d.jsxs(ib,{children:[d.jsx(ab,{children:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}),d.jsxs(lb,{children:["Código:"," ",(a==null?void 0:a.codigoEmpleado)||(e==null?void 0:e.codigoEmpleado)," ","| Planta:"," ",((X=a==null?void 0:a.plantas)==null?void 0:X.planta)||(e==null?void 0:e.planta)," | Esquema:"," ",((Ke=R.find(U=>U.idEsquemaPago===((a==null?void 0:a.idEsquemaPago)||(e==null?void 0:e.idEsquemaPago))))==null?void 0:Ke.esquemaPago)||"No configurado"]})]}),d.jsx(sb,{children:d.jsx(ub,{onClick:F,children:"Cerrar Sesión"})})]}),d.jsxs(cb,{children:[d.jsxs(Hf,{$active:n==="pending",onClick:()=>{o("pending"),h(null)},children:["Tickets Pendientes (",ae.length,")"]}),d.jsxs(Hf,{$active:n==="resolved",onClick:()=>{o("resolved"),h(null)},children:["Tickets Resueltos (",ce.length,")"]})]})]}),d.jsx(nb,{children:d.jsx(db,{children:d.jsx(fb,{children:z?d.jsx(mb,{children:"Cargando tickets..."}):j?d.jsxs(gb,{children:["Error al cargar tickets: ",j]}):d.jsx(d.Fragment,{children:n==="pending"?d.jsx(d.Fragment,{children:ae.length===0?d.jsxs(Vf,{children:[d.jsx(Kf,{children:"📋"}),d.jsx(Gf,{children:"No tienes tickets pendientes"}),d.jsx(Jf,{children:"Aquí aparecerán los tickets que hayas creado y aún no han sido atendidos."})]}):ae.map(U=>d.jsx(hu,{ticket:U,mode:"employee",formatDate:Oe,getPriorityColor:D,getResponsable:J,isResolved:!1,isExpanded:f===U.idTicket,onToggleExpand:je,onShowDetails:He},U.idTicket))}):d.jsx(d.Fragment,{children:ce.length===0?d.jsxs(Vf,{children:[d.jsx(Kf,{children:"✅"}),d.jsx(Gf,{children:"No tienes tickets resueltos"}),d.jsx(Jf,{children:"Aquí aparecerán los tickets que hayan sido atendidos."})]}):ce.map(U=>d.jsx(hu,{ticket:U,mode:"employee",formatDate:Oe,getPriorityColor:D,getResponsable:J,isResolved:!0,isExpanded:f===U.idTicket,onToggleExpand:je,onShowDetails:He},U.idTicket))})})})})}),d.jsx(hb,{children:d.jsx(pb,{onClick:()=>s(!0),children:"+ Crear Nuevo Ticket"})}),v&&d.jsx(vb,{children:d.jsxs(yb,{children:[d.jsxs(wb,{children:[d.jsxs(Sb,{children:[d.jsx(bb,{$color:D(y==null?void 0:y.idPrioridad),children:(At=y==null?void 0:y.prioridades)==null?void 0:At.prioridad}),d.jsxs("h3",{children:["#",y==null?void 0:y.idTicket]})]}),d.jsx(xb,{onClick:()=>x(!1),children:"×"})]}),d.jsxs(Tb,{children:[d.jsxs(uo,{children:[d.jsx(co,{children:"Fecha de creación:"}),d.jsx(fo,{children:(()=>{var le,Hn;const U=(Hn=(le=y==null?void 0:y.seguimientos)==null?void 0:le.find(ii=>ii.idEstado===1))==null?void 0:Hn.fecha;return U?nt(U):"Pendiente seguimiento inicial"})()})]}),d.jsxs(uo,{children:[d.jsx(co,{children:"Tipo:"}),d.jsx(fo,{children:(ct=y==null?void 0:y.tiposSolicitud)==null?void 0:ct.tipoSolicitud})]}),d.jsx(Eb,{children:d.jsx(Cb,{children:y==null?void 0:y.descripcion})}),y!=null&&y.atenciones&&y.atenciones.length>0||(y==null?void 0:y.idEstado)===5?d.jsxs(d.Fragment,{children:[(y==null?void 0:y.atenciones)&&y.atenciones.length>0&&d.jsxs(jb,{children:[d.jsx(Pb,{children:"Respuesta:"}),d.jsx(Ab,{children:y.atenciones[0].respuesta||"No hay respuesta disponible"})]}),d.jsxs(_b,{$idEstado:y==null?void 0:y.idEstado,children:[d.jsxs(uo,{children:[d.jsx(co,{children:(y==null?void 0:y.idEstado)===5?"Cancelado por:":"Atendido por:"}),d.jsx(fo,{children:(p==null?void 0:p.nombre)||"No disponible"})]}),d.jsxs(uo,{children:[d.jsx(co,{children:(y==null?void 0:y.idEstado)===5?"Fecha de cancelación:":"Fecha de atención:"}),d.jsx(fo,{children:(()=>{var Hn,ii;const U=(y==null?void 0:y.idEstado)===5?5:3,le=(ii=(Hn=y==null?void 0:y.seguimientos)==null?void 0:Hn.find(Tg=>Tg.idEstado===U))==null?void 0:ii.fecha;return le?nt(le):"No disponible"})()})]})]}),(y==null?void 0:y.atenciones)&&y.atenciones.length>0&&y.atenciones[0].calificacion&&y.atenciones[0].calificacion>0&&d.jsxs(Db,{children:[d.jsx(kb,{children:"Tu calificación:"}),d.jsx(Ub,{children:Array.from({length:3},(U,le)=>d.jsx(Fb,{$filled:le<y.atenciones[0].calificacion,children:"★"},le))}),y.atenciones[0].comentario&&d.jsxs(Mb,{children:[d.jsx("strong",{children:"Tu comentario:"})," ",y.atenciones[0].comentario]})]})]}):null,C&&(y==null?void 0:y.idEstado)===3&&d.jsxs(d.Fragment,{children:[d.jsx(Ob,{children:"¿Cómo lo calificarías?"}),d.jsx(Ib,{children:Array.from({length:3},(U,le)=>d.jsx(Lb,{$filled:le<g,onClick:()=>_(le+1)},le))}),d.jsx(Nb,{placeholder:"Comentario adicional (opcional)",value:E,onChange:U=>b(U.target.value),rows:2})]})]}),d.jsxs($b,{children:[C&&(y==null?void 0:y.idEstado)===3&&d.jsx(zb,{onClick:Se,disabled:L,children:L?"Enviando...":"Enviar Calificación"}),d.jsx(Rb,{onClick:()=>x(!1),children:"Cerrar"})]})]})})]})},tb=k.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,rb=k.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`,nb=k.div`
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
`,ob=k.header`
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
`,ib=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,sb=k.div`
  display: flex;
  align-items: center;
`,ab=k.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
`,lb=k.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,ub=k.button`
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
`,cb=k.div`
  display: flex;
  background: #e9ecef;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`,db=k.div`
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
`,Hf=k.button`
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
`,fb=k.section`
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
`,hb=k.div`
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
`,pb=k.button`
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
`,mb=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  min-height: 300px;
`,gb=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
  min-height: 300px;
`,Vf=k.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  min-height: 300px;
`,Kf=k.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Gf=k.h3`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`,Jf=k.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,vb=k.div`
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
`,yb=k.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`,wb=k.div`
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
`,xb=k.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`,uo=k.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.4rem 0;
  border-bottom: 1px dotted #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`,co=k.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
  min-width: fit-content;
  margin-right: 1rem;
`,fo=k.span`
  color: #495057;
  font-size: 0.9rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
  }
`,_b=k.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  background: ${e=>{switch(e.$idEstado){case 5:return"var(--color-estado-cancelado-bg)";case 3:return"#e9f7ef";default:return"#e9f7ef"}}};
  border-radius: 4px;
  border-left: 4px solid ${e=>{switch(e.$idEstado){case 5:return"var(--color-estado-cancelado)";case 3:return"#28a745";default:return"#28a745"}}};
  
  ${uo} {
    padding: 0.25rem 0;
    margin-bottom: 0;
  }
  
  ${co} {
    font-size: 0.85rem;
  }
  
  ${fo} {
    font-size: 0.85rem;
  }
`,kb=k.div`
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,Sb=k.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,bb=k.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$color||"var(--color-gray)"};
`,Eb=k.div`
  margin-bottom: 1rem;
`,Cb=k.p`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid var(--color-primary);
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
  margin: 0;
`,jb=k.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
`,Pb=k.h5`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-weight: 600;
`,Tb=k.div`
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
`,$b=k.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
`,Rb=k.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #5a6268;
  }
`,Ab=k.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-bottom: 1rem;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`,Ob=k.h5`
  margin: 1.5rem 0 0.8rem 0;
  color: var(--color-primary);
  text-align: center;
  font-size: 1rem;
`,Ib=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
`,Lb=k.button`
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
`,Nb=k.textarea`
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
`,zb=k.button`
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
`,Db=k.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #e8f5e8;
  border-radius: 4px;
  border: 1px solid #28a745;
`,Ub=k.div`
  display: inline-flex;
  margin-left: 0.5rem;
`,Fb=k.span`
  color: ${e=>e.$filled?"#ffc107":"#ddd"};
  font-size: 1.2rem;
`,Mb=k.div`
  margin-top: 0.5rem;
  font-style: italic;
  color: #495057;
`,Bb=()=>{var y,S,p,m;const{token:e}=I0(),t=Zo(),[r,n]=w.useState(null),[o,i]=w.useState(!0),[s,a]=w.useState(!1),[l,u]=w.useState(""),[c,f]=w.useState(null),[h,v]=w.useState(!1);w.useEffect(()=>{e&&(async()=>{if(!e){f("Token no encontrado en la URL"),i(!1);return}try{i(!0);const{data:_,error:E}=await I.from("ticket_tokens").select(`
            *,
            tickets (
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            ),
            usuarios (nombre, correo)
          `).eq("token",e).eq("usado",!1).gt("fecha_expiracion",new Date().toISOString()).single();if(E||!_)throw(E==null?void 0:E.code)==="PGRST116"?new Error("Enlace inválido, expirado o ya utilizado. Este ticket puede haber sido reasignado a otro usuario."):new Error("Enlace inválido, expirado o ya utilizado");if(_.tickets.idEstado!==2)throw new Error("Este ticket ya no está disponible para responder");const{data:b,error:C}=await I.from("delegaciones").select("bActivo").eq("idTicket",_.tickets.idTicket).eq("idUsuario",_.id_usuario).eq("bActivo",!0).single();if(C||!b)throw new Error("Este ticket ha sido reasignado a otro usuario. Tu enlace ya no es válido.");const{data:T,error:L}=await I.from("seguimientos").select("fecha").eq("idTicket",_.tickets.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();T&&!L&&(_.tickets.fechaCreacion=T.fecha),n(_)}catch(_){console.error("Error cargando ticket:",_),f(_.message)}finally{i(!1)}})()},[e]);const x=async()=>{if(!l.trim()){f("Por favor escribe una respuesta");return}try{a(!0),f(null);const{error:g}=await I.from("atenciones").insert({idTicket:r.tickets.idTicket,respuesta:l.trim()});if(g)throw console.error("Error en atenciones:",g),new Error(`Error creando atención: ${g.message}`);const{error:_}=await I.from("seguimientos").insert({idTicket:r.tickets.idTicket,idUsuario:r.id_usuario,idEstado:3});if(_)throw console.error("Error en seguimientos:",_),new Error(`Error creando seguimiento: ${_.message}`);const{error:E}=await I.from("tickets").update({idEstado:3}).eq("idTicket",r.tickets.idTicket);if(E)throw console.error("Error en tickets:",E),new Error(`Error actualizando ticket: ${E.message}`);const{error:b}=await I.from("ticket_tokens").update({usado:!0,fecha_uso:new Date().toISOString()}).eq("token",e);if(b)throw console.error("Error en ticket_tokens:",b),new Error(`Error marcando token como usado: ${b.message}`);const{error:C}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",r.tickets.idTicket).eq("idUsuario",r.id_usuario);if(C)throw console.error("Error en delegaciones:",C),new Error(`Error desactivando delegación: ${C.message}`);v(!0),setTimeout(()=>{window.close(),t("/")},3e3)}catch(g){console.error("Error enviando respuesta:",g),f(g.message)}finally{a(!1)}};return o?d.jsx(Ii,{children:d.jsxs(oE,{children:[d.jsx(iE,{}),d.jsx("p",{children:"Cargando ticket..."})]})}):c?d.jsx(Ii,{children:d.jsxs(sE,{children:[d.jsx(aE,{children:"❌"}),d.jsx(lE,{children:"Enlace No Válido"}),d.jsx(uE,{children:c}),d.jsx(cE,{children:"Este enlace puede haber expirado, ya fue utilizado, o el ticket ya no está disponible para responder."})]})}):h?d.jsx(Ii,{children:d.jsxs(dE,{children:[d.jsx(fE,{children:"✅"}),d.jsx(hE,{children:"¡Respuesta Enviada!"}),d.jsx(pE,{children:"Tu respuesta ha sido registrada exitosamente. El ticket ha sido marcado como atendido."}),d.jsx(mE,{children:"Esta ventana se cerrará automáticamente en unos segundos..."})]})}):d.jsx(Ii,{children:d.jsxs(Wb,{children:[d.jsx(qb,{children:d.jsx(Hb,{children:d.jsxs(Vb,{children:["Ticket #",r.tickets.idTicket]})})}),d.jsxs(Kb,{children:[d.jsxs(Li,{children:[d.jsx(Ni,{children:"Empleado:"}),d.jsx(zi,{children:((y=r.tickets.empleados)==null?void 0:y.nombre)||"No especificado"})]}),d.jsxs(Li,{children:[d.jsx(Ni,{children:"Planta:"}),d.jsx(zi,{children:((p=(S=r.tickets.empleados)==null?void 0:S.plantas)==null?void 0:p.planta)||"No especificada"})]}),d.jsxs(Li,{children:[d.jsx(Ni,{children:"Tipo:"}),d.jsx(zi,{children:((m=r.tickets.tiposSolicitud)==null?void 0:m.tipoSolicitud)||"No especificado"})]}),d.jsxs(Li,{children:[d.jsx(Ni,{children:"Fecha:"}),d.jsx(zi,{children:nt(r.tickets.fechaCreacion)})]})]}),d.jsxs(Gb,{children:[d.jsx(Qf,{children:"Descripción del Problema"}),d.jsx(Jb,{children:r.tickets.descripcion})]}),d.jsxs(Qb,{children:[d.jsx(Qf,{children:"Tu Respuesta"}),d.jsx(Yb,{value:l,onChange:g=>u(g.target.value),placeholder:"Escribe aquí tu respuesta o solución al problema...",rows:4,disabled:s}),d.jsxs(Xb,{$isNearLimit:l.length>400,children:[l.length,"/500 caracteres"]})]}),c&&d.jsxs(gE,{children:["❌ ",c]}),d.jsxs(Zb,{children:[d.jsx(eE,{onClick:x,disabled:!l.trim()||s,children:s?"Enviando...":"Enviar Respuesta y Cerrar Ticket"}),d.jsx(tE,{children:"Una vez enviada la respuesta, el ticket se marcará como atendido y este enlace quedará deshabilitado."})]}),d.jsx(rE,{children:d.jsxs(nE,{children:["Respondiendo como: ",d.jsx("strong",{children:r.usuarios.nombre})," (",r.usuarios.correo,")"]})})]})})},Ii=k.div`
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
`,Wb=k.div`
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
`,qb=k.div`
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
`,Hb=k.div`
  flex: 1;
`,Vb=k.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Kb=k.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,Li=k.div`
  display: flex;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 6px;
  }
`,Ni=k.span`
  font-weight: 600;
  color: #374151;
  width: 120px;
  flex-shrink: 0;
`,zi=k.span`
  color: #1f2937;
  flex: 1;
`,Gb=k.div`
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,Qf=k.h3`
  margin: 0 0 10px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Jb=k.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 6px;
  padding: 15px;
  color: #92400e;
  font-style: italic;
  line-height: 1.5;
  font-size: 14px;
  
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 13px;
  }
`,Qb=k.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,Yb=k.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  font-family: inherit;
  min-height: 100px;
  
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
    min-height: 80px;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    background: #f3f4f6;
    color: #6b7280;
  }
`,Xb=k.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
  color: ${e=>e.$isNearLimit?"#ef4444":"#6b7280"};
`,Zb=k.div`
  padding: 20px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,eE=k.button`
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
  
  &:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,tE=k.p`
  text-align: center;
  margin: 10px 0 0 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,rE=k.div`
  background: #e5e7eb;
  padding: 15px 20px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`,nE=k.p`
  margin: 0;
  text-align: center;
  color: #374151;
  font-size: 13px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,oE=k.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`,iE=k.div`
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
`,sE=k.div`
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
`,aE=k.div`
  font-size: 64px;
  margin-bottom: 20px;
`,lE=k.h2`
  color: #dc2626;
  margin: 0 0 15px 0;
  font-size: 24px;
`,uE=k.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,cE=k.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,dE=k.div`
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
`,fE=k.div`
  font-size: 64px;
  margin-bottom: 20px;
`,hE=k.h2`
  color: #059669;
  margin: 0 0 15px 0;
  font-size: 24px;
`,pE=k.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,mE=k.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,gE=k.div`
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
`,vE=()=>{const{user:e,employeeData:t,initializing:r}=oi(),n=Jt();return r?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.2rem"},children:"Cargando..."}):d.jsxs(J0,{children:[d.jsx(Pr,{path:"/ticket/:token",element:d.jsx(Bb,{})}),d.jsx(Pr,{path:"/login",element:d.jsx(ak,{})}),d.jsx(Pr,{path:"/admin/*",element:e&&e.type==="admin"?d.jsx(US,{}):d.jsx(Kr,{to:"/login",state:{from:n},replace:!0})}),d.jsx(Pr,{path:"/employee/*",element:t&&t.type==="employee"?d.jsx(eb,{employeeData:t}):d.jsx(Kr,{to:"/login",state:{from:n},replace:!0})}),d.jsx(Pr,{path:"/",element:e&&e.type==="admin"?d.jsx(Kr,{to:"/admin",replace:!0}):t&&t.type==="employee"?d.jsx(Kr,{to:"/employee",replace:!0}):d.jsx(Kr,{to:"/login",replace:!0})}),d.jsx(Pr,{path:"*",element:d.jsx(Kr,{to:"/",replace:!0})})]})};function yE(){return d.jsxs(yw,{basename:"/ventanilla",children:[d.jsx(Tx,{}),d.jsx(q_,{children:d.jsx(vE,{})})]})}Xa.createRoot(document.getElementById("root")).render(d.jsx(Tt.StrictMode,{children:d.jsx(yE,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}