(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $g(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var Qf={exports:{}},Is={},Yf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),Rg=Symbol.for("react.portal"),Ag=Symbol.for("react.fragment"),Og=Symbol.for("react.strict_mode"),Ig=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),zg=Symbol.for("react.forward_ref"),Dg=Symbol.for("react.suspense"),Ug=Symbol.for("react.memo"),Fg=Symbol.for("react.lazy"),Cc=Symbol.iterator;function Mg(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var Xf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zf=Object.assign,eh={};function Nn(e,t,r){this.props=e,this.context=t,this.refs=eh,this.updater=r||Xf}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function th(){}th.prototype=Nn.prototype;function pu(e,t,r){this.props=e,this.context=t,this.refs=eh,this.updater=r||Xf}var mu=pu.prototype=new th;mu.constructor=pu;Zf(mu,Nn.prototype);mu.isPureReactComponent=!0;var jc=Array.isArray,rh=Object.prototype.hasOwnProperty,gu={current:null},nh={key:!0,ref:!0,__self:!0,__source:!0};function oh(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)rh.call(t,n)&&!nh.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Jo,type:e,key:i,ref:s,props:o,_owner:gu.current}}function Bg(e,t){return{$$typeof:Jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jo}function Wg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Pc=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wg(""+e.key):t.toString(36)}function Di(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Jo:case Rg:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+da(s,0):n,jc(o)?(r="",e!=null&&(r=e.replace(Pc,"$&/")+"/"),Di(o,t,r,"",function(u){return u})):o!=null&&(vu(o)&&(o=Bg(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Pc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",jc(e))for(var a=0;a<e.length;a++){i=e[a];var l=n+da(i,a);s+=Di(i,t,r,l,o)}else if(l=Mg(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=n+da(i,a++),s+=Di(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function si(e,t,r){if(e==null)return e;var n=[],o=0;return Di(e,n,"","",function(i){return t.call(r,i,o++)}),n}function qg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Ui={transition:null},Hg={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Ui,ReactCurrentOwner:gu};q.Children={map:si,forEach:function(e,t,r){si(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Nn;q.Fragment=Ag;q.Profiler=Ig;q.PureComponent=pu;q.StrictMode=Og;q.Suspense=Dg;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hg;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Zf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=gu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)rh.call(t,l)&&!nh.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:Jo,type:e.type,key:o,ref:i,props:n,_owner:s}};q.createContext=function(e){return e={$$typeof:Ng,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lg,_context:e},e.Consumer=e};q.createElement=oh;q.createFactory=function(e){var t=oh.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:zg,render:e}};q.isValidElement=vu;q.lazy=function(e){return{$$typeof:Fg,_payload:{_status:-1,_result:e},_init:qg}};q.memo=function(e,t){return{$$typeof:Ug,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Ui.transition;Ui.transition={};try{e()}finally{Ui.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return ze.current.useCallback(e,t)};q.useContext=function(e){return ze.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};q.useEffect=function(e,t){return ze.current.useEffect(e,t)};q.useId=function(){return ze.current.useId()};q.useImperativeHandle=function(e,t,r){return ze.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return ze.current.useMemo(e,t)};q.useReducer=function(e,t,r){return ze.current.useReducer(e,t,r)};q.useRef=function(e){return ze.current.useRef(e)};q.useState=function(e){return ze.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return ze.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return ze.current.useTransition()};q.version="18.2.0";Yf.exports=q;var x=Yf.exports;const Tt=Tg(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg=x,Kg=Symbol.for("react.element"),Gg=Symbol.for("react.fragment"),Jg=Object.prototype.hasOwnProperty,Qg=Vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yg={key:!0,ref:!0,__self:!0,__source:!0};function ih(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Jg.call(t,n)&&!Yg.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Kg,type:e,key:i,ref:s,props:o,_owner:Qg.current}}Is.Fragment=Gg;Is.jsx=ih;Is.jsxs=ih;Qf.exports=Is;var d=Qf.exports,Xa={},sh={exports:{}},Ze={},ah={exports:{}},lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var N=j.length;j.push(O);e:for(;0<N;){var z=N-1>>>1,D=j[z];if(0<o(D,O))j[z]=O,j[N]=D,N=z;else break e}}function r(j){return j.length===0?null:j[0]}function n(j){if(j.length===0)return null;var O=j[0],N=j.pop();if(N!==O){j[0]=N;e:for(var z=0,D=j.length,Oe=D>>>1;z<Oe;){var je=2*(z+1)-1,He=j[je],Se=je+1,Ve=j[Se];if(0>o(He,N))Se<D&&0>o(Ve,He)?(j[z]=Ve,j[Se]=N,z=Se):(j[z]=He,j[je]=N,z=je);else if(Se<D&&0>o(Ve,N))j[z]=Ve,j[Se]=N,z=Se;else break e}}return O}function o(j,O){var N=j.sortIndex-O.sortIndex;return N!==0?N:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,p=3,y=!1,w=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var O=r(u);O!==null;){if(O.callback===null)n(u);else if(O.startTime<=j)n(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=r(u)}}function k(j){if(v=!1,g(j),!w)if(r(l)!==null)w=!0,ce(b);else{var O=r(u);O!==null&&ke(k,O.startTime-j)}}function b(j,O){w=!1,v&&(v=!1,h(T),T=-1),y=!0;var N=p;try{for(g(O),f=r(l);f!==null&&(!(f.expirationTime>O)||j&&!H());){var z=f.callback;if(typeof z=="function"){f.callback=null,p=f.priorityLevel;var D=z(f.expirationTime<=O);O=e.unstable_now(),typeof D=="function"?f.callback=D:f===r(l)&&n(l),g(O)}else n(l);f=r(l)}if(f!==null)var Oe=!0;else{var je=r(u);je!==null&&ke(k,je.startTime-O),Oe=!1}return Oe}finally{f=null,p=N,y=!1}}var E=!1,C=null,T=-1,L=5,$=-1;function H(){return!(e.unstable_now()-$<L)}function R(){if(C!==null){var j=e.unstable_now();$=j;var O=!0;try{O=C(!0,j)}finally{O?J():(E=!1,C=null)}}else E=!1}var J;if(typeof m=="function")J=function(){m(R)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ae=fe.port2;fe.port1.onmessage=R,J=function(){ae.postMessage(null)}}else J=function(){S(R,0)};function ce(j){C=j,E||(E=!0,J())}function ke(j,O){T=S(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,ce(b))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var N=p;p=O;try{return j()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=p;p=j;try{return O()}finally{p=N}},e.unstable_scheduleCallback=function(j,O,N){var z=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?z+N:z):N=z,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=N+D,j={id:c++,callback:O,priorityLevel:j,startTime:N,expirationTime:D,sortIndex:-1},N>z?(j.sortIndex=N,t(u,j),r(l)===null&&j===r(u)&&(v?(h(T),T=-1):v=!0,ke(k,N-z))):(j.sortIndex=D,t(l,j),w||y||(w=!0,ce(b))),j},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(j){var O=p;return function(){var N=p;p=O;try{return j.apply(this,arguments)}finally{p=N}}}})(lh);ah.exports=lh;var Xg=ah.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=x,Xe=Xg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ch=new Set,Po={};function qr(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(Po[e]=t,e=0;e<t.length;e++)ch.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Za=Object.prototype.hasOwnProperty,Zg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tc={},$c={};function ev(e){return Za.call($c,e)?!0:Za.call(Tc,e)?!1:Zg.test(e)?$c[e]=!0:(Tc[e]=!0,!1)}function tv(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rv(e,t,r,n){if(t===null||typeof t>"u"||tv(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yu,wu);Ce[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yu,wu);Ce[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yu,wu);Ce[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function xu(e,t,r,n){var o=Ce.hasOwnProperty(t)?Ce[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rv(t,r,o,n)&&(r=null),n||o===null?ev(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Gt=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),nn=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),dh=Symbol.for("react.provider"),fh=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),rl=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),hh=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,fa;function io(e){if(fa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);fa=t&&t[1]||""}return`
`+fa+e}var ha=!1;function pa(e,t){if(!e||ha)return"";ha=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ha=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?io(e):""}function nv(e){switch(e.tag){case 5:return io(e.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return e=pa(e.type,!1),e;case 11:return e=pa(e.type.render,!1),e;case 1:return e=pa(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case on:return"Fragment";case nn:return"Portal";case el:return"Profiler";case _u:return"StrictMode";case tl:return"Suspense";case rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fh:return(e.displayName||"Context")+".Consumer";case dh:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Su:return t=e.displayName||null,t!==null?t:nl(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return nl(e(t))}catch{}}return null}function ov(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ph(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iv(e){var t=ph(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=iv(e))}function mh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ph(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ol(e,t){var r=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ac(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=mr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gh(e,t){t=t.checked,t!=null&&xu(e,"checked",t,!1)}function il(e,t){gh(e,t);var r=mr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,r):t.hasOwnProperty("defaultValue")&&sl(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function sl(e,t,r){(t!=="number"||ns(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var so=Array.isArray;function vn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+mr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(so(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:mr(r)}}function vh(e,t){var r=mr(t.value),n=mr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,wh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function To(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sv=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(e){sv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mo[t]=mo[e]})});function xh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||mo.hasOwnProperty(e)&&mo[e]?(""+t).trim():t+"px"}function _h(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=xh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var av=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(e,t){if(t){if(av[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,yn=null,wn=null;function Nc(e){if(e=Xo(e)){if(typeof fl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Us(t),fl(e.stateNode,e.type,t))}}function kh(e){yn?wn?wn.push(e):wn=[e]:yn=e}function Sh(){if(yn){var e=yn,t=wn;if(wn=yn=null,Nc(e),t)for(e=0;e<t.length;e++)Nc(t[e])}}function bh(e,t){return e(t)}function Eh(){}var ma=!1;function Ch(e,t,r){if(ma)return e(t,r);ma=!0;try{return bh(e,t,r)}finally{ma=!1,(yn!==null||wn!==null)&&(Eh(),Sh())}}function $o(e,t){var r=e.stateNode;if(r===null)return null;var n=Us(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var hl=!1;if(Wt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){hl=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{hl=!1}function lv(e,t,r,n,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var go=!1,os=null,is=!1,pl=null,uv={onError:function(e){go=!0,os=e}};function cv(e,t,r,n,o,i,s,a,l){go=!1,os=null,lv.apply(uv,arguments)}function dv(e,t,r,n,o,i,s,a,l){if(cv.apply(this,arguments),go){if(go){var u=os;go=!1,os=null}else throw Error(P(198));is||(is=!0,pl=u)}}function Hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function jh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(Hr(e)!==e)throw Error(P(188))}function fv(e){var t=e.alternate;if(!t){if(t=Hr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return zc(o),e;if(i===n)return zc(o),t;i=i.sibling}throw Error(P(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s)throw Error(P(189))}}if(r.alternate!==n)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function Ph(e){return e=fv(e),e!==null?Th(e):null}function Th(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Th(e);if(t!==null)return t;e=e.sibling}return null}var $h=Xe.unstable_scheduleCallback,Dc=Xe.unstable_cancelCallback,hv=Xe.unstable_shouldYield,pv=Xe.unstable_requestPaint,de=Xe.unstable_now,mv=Xe.unstable_getCurrentPriorityLevel,Eu=Xe.unstable_ImmediatePriority,Rh=Xe.unstable_UserBlockingPriority,ss=Xe.unstable_NormalPriority,gv=Xe.unstable_LowPriority,Ah=Xe.unstable_IdlePriority,Ls=null,$t=null;function vv(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:xv,yv=Math.log,wv=Math.LN2;function xv(e){return e>>>=0,e===0?32:31-(yv(e)/wv|0)|0}var ci=64,di=4194304;function ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function as(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?n=ao(a):(i&=s,i!==0&&(n=ao(i)))}else s=r&~o,s!==0?n=ao(s):i!==0&&(n=ao(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-vt(t),o=1<<r,n|=e[r],t&=~o;return n}function _v(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-vt(i),a=1<<s,l=o[s];l===-1?(!(a&r)||a&n)&&(o[s]=_v(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oh(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function ga(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Qo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=r}function Sv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-vt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Cu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-vt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var G=0;function Ih(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lh,ju,Nh,zh,Dh,gl=!1,fi=[],sr=null,ar=null,lr=null,Ro=new Map,Ao=new Map,tr=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function Qn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Xo(t),t!==null&&ju(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ev(e,t,r,n,o){switch(t){case"focusin":return sr=Qn(sr,e,t,r,n,o),!0;case"dragenter":return ar=Qn(ar,e,t,r,n,o),!0;case"mouseover":return lr=Qn(lr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Ro.set(i,Qn(Ro.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Ao.set(i,Qn(Ao.get(i)||null,e,t,r,n,o)),!0}return!1}function Uh(e){var t=Ar(e.target);if(t!==null){var r=Hr(t);if(r!==null){if(t=r.tag,t===13){if(t=jh(r),t!==null){e.blockedOn=t,Dh(e.priority,function(){Nh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);dl=n,r.target.dispatchEvent(n),dl=null}else return t=Xo(r),t!==null&&ju(t),e.blockedOn=r,!1;t.shift()}return!0}function Fc(e,t,r){Fi(e)&&r.delete(t)}function Cv(){gl=!1,sr!==null&&Fi(sr)&&(sr=null),ar!==null&&Fi(ar)&&(ar=null),lr!==null&&Fi(lr)&&(lr=null),Ro.forEach(Fc),Ao.forEach(Fc)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Cv)))}function Oo(e){function t(o){return Yn(o,e)}if(0<fi.length){Yn(fi[0],e);for(var r=1;r<fi.length;r++){var n=fi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(sr!==null&&Yn(sr,e),ar!==null&&Yn(ar,e),lr!==null&&Yn(lr,e),Ro.forEach(t),Ao.forEach(t),r=0;r<tr.length;r++)n=tr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<tr.length&&(r=tr[0],r.blockedOn===null);)Uh(r),r.blockedOn===null&&tr.shift()}var xn=Gt.ReactCurrentBatchConfig,ls=!0;function jv(e,t,r,n){var o=G,i=xn.transition;xn.transition=null;try{G=1,Pu(e,t,r,n)}finally{G=o,xn.transition=i}}function Pv(e,t,r,n){var o=G,i=xn.transition;xn.transition=null;try{G=4,Pu(e,t,r,n)}finally{G=o,xn.transition=i}}function Pu(e,t,r,n){if(ls){var o=vl(e,t,r,n);if(o===null)Ca(e,t,n,us,r),Uc(e,n);else if(Ev(o,e,t,r,n))n.stopPropagation();else if(Uc(e,n),t&4&&-1<bv.indexOf(e)){for(;o!==null;){var i=Xo(o);if(i!==null&&Lh(i),i=vl(e,t,r,n),i===null&&Ca(e,t,n,us,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Ca(e,t,n,null,r)}}var us=null;function vl(e,t,r,n){if(us=null,e=bu(n),e=Ar(e),e!==null)if(t=Hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=jh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return us=e,null}function Fh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mv()){case Eu:return 1;case Rh:return 4;case ss:case gv:return 16;case Ah:return 536870912;default:return 16}default:return 16}}var or=null,Tu=null,Mi=null;function Mh(){if(Mi)return Mi;var e,t=Tu,r=t.length,n,o="value"in or?or.value:or.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Mi=o.slice(e,1<n?1-n:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function Mc(){return!1}function et(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hi:Mc,this.isPropagationStopped=Mc,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=et(zn),Yo=se({},zn,{view:0,detail:0}),Tv=et(Yo),va,ya,Xn,Ns=se({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(va=e.screenX-Xn.screenX,ya=e.screenY-Xn.screenY):ya=va=0,Xn=e),va)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),Bc=et(Ns),$v=se({},Ns,{dataTransfer:0}),Rv=et($v),Av=se({},Yo,{relatedTarget:0}),wa=et(Av),Ov=se({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=et(Ov),Lv=se({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nv=et(Lv),zv=se({},zn,{data:0}),Wc=et(zv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fv[e])?!!t[e]:!1}function Ru(){return Mv}var Bv=se({},Yo,{key:function(e){if(e.key){var t=Dv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wv=et(Bv),qv=se({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=et(qv),Hv=se({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Vv=et(Hv),Kv=se({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=et(Kv),Jv=se({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=et(Jv),Yv=[9,13,27,32],Au=Wt&&"CompositionEvent"in window,vo=null;Wt&&"documentMode"in document&&(vo=document.documentMode);var Xv=Wt&&"TextEvent"in window&&!vo,Bh=Wt&&(!Au||vo&&8<vo&&11>=vo),Hc=" ",Vc=!1;function Wh(e,t){switch(e){case"keyup":return Yv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function Zv(e,t){switch(e){case"compositionend":return qh(t);case"keypress":return t.which!==32?null:(Vc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Vc?null:e;default:return null}}function ey(e,t){if(sn)return e==="compositionend"||!Au&&Wh(e,t)?(e=Mh(),Mi=Tu=or=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bh&&t.locale!=="ko"?null:t.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ty[e.type]:t==="textarea"}function Hh(e,t,r,n){kh(n),t=cs(t,"onChange"),0<t.length&&(r=new $u("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var yo=null,Io=null;function ry(e){rp(e,0)}function zs(e){var t=un(e);if(mh(t))return e}function ny(e,t){if(e==="change")return t}var Vh=!1;if(Wt){var xa;if(Wt){var _a="oninput"in document;if(!_a){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),_a=typeof Gc.oninput=="function"}xa=_a}else xa=!1;Vh=xa&&(!document.documentMode||9<document.documentMode)}function Jc(){yo&&(yo.detachEvent("onpropertychange",Kh),Io=yo=null)}function Kh(e){if(e.propertyName==="value"&&zs(Io)){var t=[];Hh(t,Io,e,bu(e)),Ch(ry,t)}}function oy(e,t,r){e==="focusin"?(Jc(),yo=t,Io=r,yo.attachEvent("onpropertychange",Kh)):e==="focusout"&&Jc()}function iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(Io)}function sy(e,t){if(e==="click")return zs(t)}function ay(e,t){if(e==="input"||e==="change")return zs(t)}function ly(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:ly;function Lo(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Za.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yc(e,t){var r=Qc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qc(r)}}function Gh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jh(){for(var e=window,t=ns();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ns(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uy(e){var t=Jh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Gh(r.ownerDocument.documentElement,r)){if(n!==null&&Ou(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Yc(r,i);var s=Yc(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cy=Wt&&"documentMode"in document&&11>=document.documentMode,an=null,yl=null,wo=null,wl=!1;function Xc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wl||an==null||an!==ns(n)||(n=an,"selectionStart"in n&&Ou(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),wo&&Lo(wo,n)||(wo=n,n=cs(yl,"onSelect"),0<n.length&&(t=new $u("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=an)))}function pi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ln={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},ka={},Qh={};Wt&&(Qh=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Ds(e){if(ka[e])return ka[e];if(!ln[e])return e;var t=ln[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Qh)return ka[e]=t[r];return e}var Yh=Ds("animationend"),Xh=Ds("animationiteration"),Zh=Ds("animationstart"),ep=Ds("transitionend"),tp=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){tp.set(e,t),qr(t,[e])}for(var Sa=0;Sa<Zc.length;Sa++){var ba=Zc[Sa],dy=ba.toLowerCase(),fy=ba[0].toUpperCase()+ba.slice(1);yr(dy,"on"+fy)}yr(Yh,"onAnimationEnd");yr(Xh,"onAnimationIteration");yr(Zh,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(ep,"onTransitionEnd");Sn("onMouseEnter",["mouseout","mouseover"]);Sn("onMouseLeave",["mouseout","mouseover"]);Sn("onPointerEnter",["pointerout","pointerover"]);Sn("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function ed(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,dv(n,t,void 0,e),e.currentTarget=null}function rp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;ed(o,a,u),i=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;ed(o,a,u),i=l}}}if(is)throw e=pl,is=!1,pl=null,e}function Z(e,t){var r=t[bl];r===void 0&&(r=t[bl]=new Set);var n=e+"__bubble";r.has(n)||(np(t,e,2,!1),r.add(n))}function Ea(e,t,r){var n=0;t&&(n|=4),np(r,e,n,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function No(e){if(!e[mi]){e[mi]=!0,ch.forEach(function(r){r!=="selectionchange"&&(hy.has(r)||Ea(r,!1,e),Ea(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,Ea("selectionchange",!1,t))}}function np(e,t,r,n){switch(Fh(t)){case 1:var o=jv;break;case 4:o=Pv;break;default:o=Pu}r=o.bind(null,t,r,e),o=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ca(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Ar(a),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}a=a.parentNode}}n=n.return}Ch(function(){var u=i,c=bu(r),f=[];e:{var p=tp.get(e);if(p!==void 0){var y=$u,w=e;switch(e){case"keypress":if(Bi(r)===0)break e;case"keydown":case"keyup":y=Wv;break;case"focusin":w="focus",y=wa;break;case"focusout":w="blur",y=wa;break;case"beforeblur":case"afterblur":y=wa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Vv;break;case Yh:case Xh:case Zh:y=Iv;break;case ep:y=Gv;break;case"scroll":y=Tv;break;case"wheel":y=Qv;break;case"copy":case"cut":case"paste":y=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qc}var v=(t&4)!==0,S=!v&&e==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var m=u,g;m!==null;){g=m;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,h!==null&&(k=$o(m,h),k!=null&&v.push(zo(m,k,g)))),S)break;m=m.return}0<v.length&&(p=new y(p,w,null,r,c),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&r!==dl&&(w=r.relatedTarget||r.fromElement)&&(Ar(w)||w[qt]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=r.relatedTarget||r.toElement,y=u,w=w?Ar(w):null,w!==null&&(S=Hr(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=Bc,k="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=qc,k="onPointerLeave",h="onPointerEnter",m="pointer"),S=y==null?p:un(y),g=w==null?p:un(w),p=new v(k,m+"leave",y,r,c),p.target=S,p.relatedTarget=g,k=null,Ar(c)===u&&(v=new v(h,m+"enter",w,r,c),v.target=g,v.relatedTarget=S,k=v),S=k,y&&w)t:{for(v=y,h=w,m=0,g=v;g;g=Kr(g))m++;for(g=0,k=h;k;k=Kr(k))g++;for(;0<m-g;)v=Kr(v),m--;for(;0<g-m;)h=Kr(h),g--;for(;m--;){if(v===h||h!==null&&v===h.alternate)break t;v=Kr(v),h=Kr(h)}v=null}else v=null;y!==null&&td(f,p,y,v,!1),w!==null&&S!==null&&td(f,S,w,v,!0)}}e:{if(p=u?un(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var b=ny;else if(Kc(p))if(Vh)b=ay;else{b=iy;var E=oy}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=sy);if(b&&(b=b(e,u))){Hh(f,b,r,c);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&sl(p,"number",p.value)}switch(E=u?un(u):window,e){case"focusin":(Kc(E)||E.contentEditable==="true")&&(an=E,yl=u,wo=null);break;case"focusout":wo=yl=an=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,Xc(f,r,c);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":Xc(f,r,c)}var C;if(Au)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else sn?Wh(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Bh&&r.locale!=="ko"&&(sn||T!=="onCompositionStart"?T==="onCompositionEnd"&&sn&&(C=Mh()):(or=c,Tu="value"in or?or.value:or.textContent,sn=!0)),E=cs(u,T),0<E.length&&(T=new Wc(T,e,null,r,c),f.push({event:T,listeners:E}),C?T.data=C:(C=qh(r),C!==null&&(T.data=C)))),(C=Xv?Zv(e,r):ey(e,r))&&(u=cs(u,"onBeforeInput"),0<u.length&&(c=new Wc("onBeforeInput","beforeinput",null,r,c),f.push({event:c,listeners:u}),c.data=C))}rp(f,t)})}function zo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function cs(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=$o(e,r),i!=null&&n.unshift(zo(e,i,o)),i=$o(e,t),i!=null&&n.push(zo(e,i,o))),e=e.return}return n}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function td(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,o?(l=$o(r,i),l!=null&&s.unshift(zo(r,l,a))):o||(l=$o(r,i),l!=null&&s.push(zo(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var py=/\r\n?/g,my=/\u0000|\uFFFD/g;function rd(e){return(typeof e=="string"?e:""+e).replace(py,`
`).replace(my,"")}function gi(e,t,r){if(t=rd(t),rd(e)!==t&&r)throw Error(P(425))}function ds(){}var xl=null,_l=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(yy)}:Sl;function yy(e){setTimeout(function(){throw e})}function ja(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Oo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Oo(t)}function ur(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Dn,Do="__reactProps$"+Dn,qt="__reactContainer$"+Dn,bl="__reactEvents$"+Dn,wy="__reactListeners$"+Dn,xy="__reactHandles$"+Dn;function Ar(e){var t=e[Pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qt]||r[Pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=od(e);e!==null;){if(r=e[Pt])return r;e=od(e)}return t}e=r,r=e.parentNode}return null}function Xo(e){return e=e[Pt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Us(e){return e[Do]||null}var El=[],cn=-1;function wr(e){return{current:e}}function te(e){0>cn||(e.current=El[cn],El[cn]=null,cn--)}function Y(e,t){cn++,El[cn]=e.current,e.current=t}var gr={},Ae=wr(gr),Be=wr(!1),Ur=gr;function bn(e,t){var r=e.type.contextTypes;if(!r)return gr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function fs(){te(Be),te(Ae)}function id(e,t,r){if(Ae.current!==gr)throw Error(P(168));Y(Ae,t),Y(Be,r)}function op(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(P(108,ov(e)||"Unknown",o));return se({},r,n)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Ur=Ae.current,Y(Ae,e),Y(Be,Be.current),!0}function sd(e,t,r){var n=e.stateNode;if(!n)throw Error(P(169));r?(e=op(e,t,Ur),n.__reactInternalMemoizedMergedChildContext=e,te(Be),te(Ae),Y(Ae,e)):te(Be),Y(Be,r)}var Dt=null,Fs=!1,Pa=!1;function ip(e){Dt===null?Dt=[e]:Dt.push(e)}function _y(e){Fs=!0,ip(e)}function xr(){if(!Pa&&Dt!==null){Pa=!0;var e=0,t=G;try{var r=Dt;for(G=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Dt=null,Fs=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),$h(Eu,xr),o}finally{G=t,Pa=!1}}return null}var dn=[],fn=0,ps=null,ms=0,tt=[],rt=0,Fr=null,Ut=1,Ft="";function jr(e,t){dn[fn++]=ms,dn[fn++]=ps,ps=e,ms=t}function sp(e,t,r){tt[rt++]=Ut,tt[rt++]=Ft,tt[rt++]=Fr,Fr=e;var n=Ut;e=Ft;var o=32-vt(n)-1;n&=~(1<<o),r+=1;var i=32-vt(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,Ut=1<<32-vt(t)+o|r<<o|n,Ft=i+e}else Ut=1<<i|r<<o|n,Ft=e}function Iu(e){e.return!==null&&(jr(e,1),sp(e,1,0))}function Lu(e){for(;e===ps;)ps=dn[--fn],dn[fn]=null,ms=dn[--fn],dn[fn]=null;for(;e===Fr;)Fr=tt[--rt],tt[rt]=null,Ft=tt[--rt],tt[rt]=null,Ut=tt[--rt],tt[rt]=null}var Ye=null,Qe=null,re=!1,gt=null;function ap(e,t){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ad(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=ur(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Fr!==null?{id:Ut,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ye=e,Qe=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(re){var t=Qe;if(t){var r=t;if(!ad(e,t)){if(Cl(e))throw Error(P(418));t=ur(r.nextSibling);var n=Ye;t&&ad(e,t)?ap(n,r):(e.flags=e.flags&-4097|2,re=!1,Ye=e)}}else{if(Cl(e))throw Error(P(418));e.flags=e.flags&-4097|2,re=!1,Ye=e}}}function ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function vi(e){if(e!==Ye)return!1;if(!re)return ld(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=Qe)){if(Cl(e))throw lp(),Error(P(418));for(;t;)ap(e,t),t=ur(t.nextSibling)}if(ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=ur(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ye?ur(e.stateNode.nextSibling):null;return!0}function lp(){for(var e=Qe;e;)e=ur(e.nextSibling)}function En(){Qe=Ye=null,re=!1}function Nu(e){gt===null?gt=[e]:gt.push(e)}var ky=Gt.ReactCurrentBatchConfig;function ht(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var gs=wr(null),vs=null,hn=null,zu=null;function Du(){zu=hn=vs=null}function Uu(e){var t=gs.current;te(gs),e._currentValue=t}function Pl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function _n(e,t){vs=e,zu=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(vs===null)throw Error(P(308));hn=e,vs.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Or=null;function Fu(e){Or===null?Or=[e]:Or.push(e)}function up(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Fu(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ht(e,n)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var er=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,V&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ht(e,r)}return o=n.interleaved,o===null?(t.next=t,Fu(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ht(e,r)}function Wi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Cu(e,r)}}function ud(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ys(e,t,r,n){var o=e.updateQueue;er=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;s=0,c=u=l=null,a=i;do{var p=a.lane,y=a.eventTime;if((n&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(p=t,y=r,v.tag){case 1:if(w=v.payload,typeof w=="function"){f=w.call(y,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,p=typeof w=="function"?w.call(y,f,p):w,p==null)break e;f=se({},f,p);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Br|=s,e.lanes=s,e.memoizedState=f}}function cd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(P(191,o));o.call(n)}}}var dp=new uh.Component().refs;function Tl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ms={isMounted:function(e){return(e=e._reactInternals)?Hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=fr(e),i=Mt(n,o);i.payload=t,r!=null&&(i.callback=r),t=cr(e,i,o),t!==null&&(yt(t,e,o,n),Wi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=fr(e),i=Mt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=cr(e,i,o),t!==null&&(yt(t,e,o,n),Wi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),n=fr(e),o=Mt(r,n);o.tag=2,t!=null&&(o.callback=t),t=cr(e,o,n),t!==null&&(yt(t,e,n,r),Wi(t,e,n))}};function dd(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Lo(r,n)||!Lo(o,i):!0}function fp(e,t,r){var n=!1,o=gr,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=We(t)?Ur:Ae.current,n=t.contextTypes,i=(n=n!=null)?bn(e,o):gr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ms,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function $l(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=dp,Mu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=We(t)?Ur:Ae.current,o.context=bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Tl(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ms.enqueueReplaceState(o,o.state,null),ys(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var n=r.stateNode}if(!n)throw Error(P(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===dp&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hd(e){var t=e._init;return t(e._payload)}function hp(e){function t(h,m){if(e){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function r(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function n(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=hr(h,m),h.index=0,h.sibling=null,h}function i(h,m,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,m,g,k){return m===null||m.tag!==6?(m=La(g,h.mode,k),m.return=h,m):(m=o(m,g),m.return=h,m)}function l(h,m,g,k){var b=g.type;return b===on?c(h,m,g.props.children,k,g.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zt&&hd(b)===m.type)?(k=o(m,g.props),k.ref=Zn(h,m,g),k.return=h,k):(k=Ji(g.type,g.key,g.props,null,h.mode,k),k.ref=Zn(h,m,g),k.return=h,k)}function u(h,m,g,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Na(g,h.mode,k),m.return=h,m):(m=o(m,g.children||[]),m.return=h,m)}function c(h,m,g,k,b){return m===null||m.tag!==7?(m=zr(g,h.mode,k,b),m.return=h,m):(m=o(m,g),m.return=h,m)}function f(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=La(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ai:return g=Ji(m.type,m.key,m.props,null,h.mode,g),g.ref=Zn(h,null,m),g.return=h,g;case nn:return m=Na(m,h.mode,g),m.return=h,m;case Zt:var k=m._init;return f(h,k(m._payload),g)}if(so(m)||Gn(m))return m=zr(m,h.mode,g,null),m.return=h,m;yi(h,m)}return null}function p(h,m,g,k){var b=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,m,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:return g.key===b?l(h,m,g,k):null;case nn:return g.key===b?u(h,m,g,k):null;case Zt:return b=g._init,p(h,m,b(g._payload),k)}if(so(g)||Gn(g))return b!==null?null:c(h,m,g,k,null);yi(h,g)}return null}function y(h,m,g,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(g)||null,a(m,h,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ai:return h=h.get(k.key===null?g:k.key)||null,l(m,h,k,b);case nn:return h=h.get(k.key===null?g:k.key)||null,u(m,h,k,b);case Zt:var E=k._init;return y(h,m,g,E(k._payload),b)}if(so(k)||Gn(k))return h=h.get(g)||null,c(m,h,k,b,null);yi(m,k)}return null}function w(h,m,g,k){for(var b=null,E=null,C=m,T=m=0,L=null;C!==null&&T<g.length;T++){C.index>T?(L=C,C=null):L=C.sibling;var $=p(h,C,g[T],k);if($===null){C===null&&(C=L);break}e&&C&&$.alternate===null&&t(h,C),m=i($,m,T),E===null?b=$:E.sibling=$,E=$,C=L}if(T===g.length)return r(h,C),re&&jr(h,T),b;if(C===null){for(;T<g.length;T++)C=f(h,g[T],k),C!==null&&(m=i(C,m,T),E===null?b=C:E.sibling=C,E=C);return re&&jr(h,T),b}for(C=n(h,C);T<g.length;T++)L=y(C,h,T,g[T],k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?T:L.key),m=i(L,m,T),E===null?b=L:E.sibling=L,E=L);return e&&C.forEach(function(H){return t(h,H)}),re&&jr(h,T),b}function v(h,m,g,k){var b=Gn(g);if(typeof b!="function")throw Error(P(150));if(g=b.call(g),g==null)throw Error(P(151));for(var E=b=null,C=m,T=m=0,L=null,$=g.next();C!==null&&!$.done;T++,$=g.next()){C.index>T?(L=C,C=null):L=C.sibling;var H=p(h,C,$.value,k);if(H===null){C===null&&(C=L);break}e&&C&&H.alternate===null&&t(h,C),m=i(H,m,T),E===null?b=H:E.sibling=H,E=H,C=L}if($.done)return r(h,C),re&&jr(h,T),b;if(C===null){for(;!$.done;T++,$=g.next())$=f(h,$.value,k),$!==null&&(m=i($,m,T),E===null?b=$:E.sibling=$,E=$);return re&&jr(h,T),b}for(C=n(h,C);!$.done;T++,$=g.next())$=y(C,h,T,$.value,k),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?T:$.key),m=i($,m,T),E===null?b=$:E.sibling=$,E=$);return e&&C.forEach(function(R){return t(h,R)}),re&&jr(h,T),b}function S(h,m,g,k){if(typeof g=="object"&&g!==null&&g.type===on&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:e:{for(var b=g.key,E=m;E!==null;){if(E.key===b){if(b=g.type,b===on){if(E.tag===7){r(h,E.sibling),m=o(E,g.props.children),m.return=h,h=m;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zt&&hd(b)===E.type){r(h,E.sibling),m=o(E,g.props),m.ref=Zn(h,E,g),m.return=h,h=m;break e}r(h,E);break}else t(h,E);E=E.sibling}g.type===on?(m=zr(g.props.children,h.mode,k,g.key),m.return=h,h=m):(k=Ji(g.type,g.key,g.props,null,h.mode,k),k.ref=Zn(h,m,g),k.return=h,h=k)}return s(h);case nn:e:{for(E=g.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(h,m.sibling),m=o(m,g.children||[]),m.return=h,h=m;break e}else{r(h,m);break}else t(h,m);m=m.sibling}m=Na(g,h.mode,k),m.return=h,h=m}return s(h);case Zt:return E=g._init,S(h,m,E(g._payload),k)}if(so(g))return w(h,m,g,k);if(Gn(g))return v(h,m,g,k);yi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(h,m.sibling),m=o(m,g),m.return=h,h=m):(r(h,m),m=La(g,h.mode,k),m.return=h,h=m),s(h)):r(h,m)}return S}var Cn=hp(!0),pp=hp(!1),Zo={},Rt=wr(Zo),Uo=wr(Zo),Fo=wr(Zo);function Ir(e){if(e===Zo)throw Error(P(174));return e}function Bu(e,t){switch(Y(Fo,t),Y(Uo,e),Y(Rt,Zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}te(Rt),Y(Rt,t)}function jn(){te(Rt),te(Uo),te(Fo)}function mp(e){Ir(Fo.current);var t=Ir(Rt.current),r=ll(t,e.type);t!==r&&(Y(Uo,e),Y(Rt,r))}function Wu(e){Uo.current===e&&(te(Rt),te(Uo))}var oe=wr(0);function ws(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function qu(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var qi=Gt.ReactCurrentDispatcher,$a=Gt.ReactCurrentBatchConfig,Mr=0,ie=null,ve=null,we=null,xs=!1,xo=!1,Mo=0,Sy=0;function Pe(){throw Error(P(321))}function Hu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!xt(e[r],t[r]))return!1;return!0}function Vu(e,t,r,n,o,i){if(Mr=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?jy:Py,e=r(n,o),xo){i=0;do{if(xo=!1,Mo=0,25<=i)throw Error(P(301));i+=1,we=ve=null,t.updateQueue=null,qi.current=Ty,e=r(n,o)}while(xo)}if(qi.current=_s,t=ve!==null&&ve.next!==null,Mr=0,we=ve=ie=null,xs=!1,t)throw Error(P(300));return e}function Ku(){var e=Mo!==0;return Mo=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ie.memoizedState=we=e:we=we.next=e,we}function lt(){if(ve===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?ie.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(P(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?ie.memoizedState=we=e:we=we.next=e}return we}function Bo(e,t){return typeof t=="function"?t(e):t}function Ra(e){var t=lt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=ve,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((Mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=n):l=l.next=f,ie.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==i);l===null?s=n:l.next=a,xt(n,t.memoizedState)||(Me=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,Br|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Aa(e){var t=lt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);xt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function gp(){}function vp(e,t){var r=ie,n=lt(),o=t(),i=!xt(n.memoizedState,o);if(i&&(n.memoizedState=o,Me=!0),n=n.queue,Gu(xp.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,Wo(9,wp.bind(null,r,n,o,t),void 0,null),_e===null)throw Error(P(349));Mr&30||yp(r,t,o)}return o}function yp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wp(e,t,r,n){t.value=r,t.getSnapshot=n,_p(t)&&kp(e)}function xp(e,t,r){return r(function(){_p(t)&&kp(e)})}function _p(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!xt(e,r)}catch{return!0}}function kp(e){var t=Ht(e,1);t!==null&&yt(t,e,1,-1)}function pd(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Cy.bind(null,ie,e),[t.memoizedState,e]}function Wo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Sp(){return lt().memoizedState}function Hi(e,t,r,n){var o=Et();ie.flags|=e,o.memoizedState=Wo(1|t,r,void 0,n===void 0?null:n)}function Bs(e,t,r,n){var o=lt();n=n===void 0?null:n;var i=void 0;if(ve!==null){var s=ve.memoizedState;if(i=s.destroy,n!==null&&Hu(n,s.deps)){o.memoizedState=Wo(t,r,i,n);return}}ie.flags|=e,o.memoizedState=Wo(1|t,r,i,n)}function md(e,t){return Hi(8390656,8,e,t)}function Gu(e,t){return Bs(2048,8,e,t)}function bp(e,t){return Bs(4,2,e,t)}function Ep(e,t){return Bs(4,4,e,t)}function Cp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jp(e,t,r){return r=r!=null?r.concat([e]):null,Bs(4,4,Cp.bind(null,t,e),r)}function Ju(){}function Pp(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Tp(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function $p(e,t,r){return Mr&21?(xt(r,t)||(r=Oh(),ie.lanes|=r,Br|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=r)}function by(e,t){var r=G;G=r!==0&&4>r?r:4,e(!0);var n=$a.transition;$a.transition={};try{e(!1),t()}finally{G=r,$a.transition=n}}function Rp(){return lt().memoizedState}function Ey(e,t,r){var n=fr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ap(e))Op(t,r);else if(r=up(e,t,r,n),r!==null){var o=Ne();yt(r,e,n,o),Ip(r,t,n)}}function Cy(e,t,r){var n=fr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ap(e))Op(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,r);if(o.hasEagerState=!0,o.eagerState=a,xt(a,s)){var l=t.interleaved;l===null?(o.next=o,Fu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=up(e,t,o,n),r!==null&&(o=Ne(),yt(r,e,n,o),Ip(r,t,n))}}function Ap(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Op(e,t){xo=xs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ip(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Cu(e,r)}}var _s={readContext:at,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},jy={readContext:at,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:md,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Hi(4194308,4,Cp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var r=Et();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Et();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ey.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:pd,useDebugValue:Ju,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=pd(!1),t=e[0];return e=by.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ie,o=Et();if(re){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),_e===null)throw Error(P(349));Mr&30||yp(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,md(xp.bind(null,n,i,e),[e]),n.flags|=2048,Wo(9,wp.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Et(),t=_e.identifierPrefix;if(re){var r=Ft,n=Ut;r=(n&~(1<<32-vt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Mo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Sy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Py={readContext:at,useCallback:Pp,useContext:at,useEffect:Gu,useImperativeHandle:jp,useInsertionEffect:bp,useLayoutEffect:Ep,useMemo:Tp,useReducer:Ra,useRef:Sp,useState:function(){return Ra(Bo)},useDebugValue:Ju,useDeferredValue:function(e){var t=lt();return $p(t,ve.memoizedState,e)},useTransition:function(){var e=Ra(Bo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:vp,useId:Rp,unstable_isNewReconciler:!1},Ty={readContext:at,useCallback:Pp,useContext:at,useEffect:Gu,useImperativeHandle:jp,useInsertionEffect:bp,useLayoutEffect:Ep,useMemo:Tp,useReducer:Aa,useRef:Sp,useState:function(){return Aa(Bo)},useDebugValue:Ju,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:$p(t,ve.memoizedState,e)},useTransition:function(){var e=Aa(Bo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:vp,useId:Rp,unstable_isNewReconciler:!1};function Pn(e,t){try{var r="",n=t;do r+=nv(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Oa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function Lp(e,t,r){r=Mt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ss||(Ss=!0,Ml=n),Rl(e,t)},r}function Np(e,t,r){r=Mt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Rl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Rl(e,t),typeof n!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function gd(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new $y;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=qy.bind(null,e,t,r),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yd(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Mt(-1,1),t.tag=2,cr(r,t,1))),r.lanes|=1),e)}var Ry=Gt.ReactCurrentOwner,Me=!1;function Le(e,t,r,n){t.child=e===null?pp(t,null,r,n):Cn(t,e.child,r,n)}function wd(e,t,r,n,o){r=r.render;var i=t.ref;return _n(t,o),n=Vu(e,t,r,n,i,o),r=Ku(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(re&&r&&Iu(t),t.flags|=1,Le(e,t,n,o),t.child)}function xd(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!nc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,zp(e,t,i,n,o)):(e=Ji(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:Lo,r(s,n)&&e.ref===t.ref)return Vt(e,t,o)}return t.flags|=1,e=hr(i,n),e.ref=t.ref,e.return=t,t.child=e}function zp(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Lo(i,n)&&e.ref===t.ref)if(Me=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Vt(e,t,o)}return Al(e,t,r,n,o)}function Dp(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(mn,Je),Je|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(mn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Y(mn,Je),Je|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Y(mn,Je),Je|=n;return Le(e,t,o,r),t.child}function Up(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,r,n,o){var i=We(r)?Ur:Ae.current;return i=bn(t,i),_n(t,o),r=Vu(e,t,r,n,i,o),n=Ku(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(re&&n&&Iu(t),t.flags|=1,Le(e,t,r,o),t.child)}function _d(e,t,r,n,o){if(We(r)){var i=!0;hs(t)}else i=!1;if(_n(t,o),t.stateNode===null)Vi(e,t),fp(t,r,n),$l(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=at(u):(u=We(r)?Ur:Ae.current,u=bn(t,u));var c=r.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==u)&&fd(t,s,n,u),er=!1;var p=t.memoizedState;s.state=p,ys(t,n,s,o),l=t.memoizedState,a!==n||p!==l||Be.current||er?(typeof c=="function"&&(Tl(t,r,c,n),l=t.memoizedState),(a=er||dd(t,r,a,n,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=u,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,cp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ht(t.type,a),s.props=u,f=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=at(l):(l=We(r)?Ur:Ae.current,l=bn(t,l));var y=r.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&fd(t,s,n,l),er=!1,p=t.memoizedState,s.state=p,ys(t,n,s,o);var w=t.memoizedState;a!==f||p!==w||Be.current||er?(typeof y=="function"&&(Tl(t,r,y,n),w=t.memoizedState),(u=er||dd(t,r,u,n,p,w,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Ol(e,t,r,n,i,o)}function Ol(e,t,r,n,o,i){Up(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&sd(t,r,!1),Vt(e,t,i);n=t.stateNode,Ry.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,a,i)):Le(e,t,a,i),t.memoizedState=n.state,o&&sd(t,r,!0),t.child}function Fp(e){var t=e.stateNode;t.pendingContext?id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&id(e,t.context,!1),Bu(e,t.containerInfo)}function kd(e,t,r,n,o){return En(),Nu(o),t.flags|=256,Le(e,t,r,n),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,r){var n=t.pendingProps,o=oe.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(oe,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Hs(s,n,0,null),e=zr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ll(r),t.memoizedState=Il,e):Qu(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ay(e,t,s,n,a,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=hr(o,l),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=hr(a,i):(i=zr(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?Ll(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=Il,n}return i=e.child,e=i.sibling,n=hr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Qu(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,r,n){return n!==null&&Nu(n),Cn(t,e.child,null,r),e=Qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ay(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Oa(Error(P(422))),wi(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Hs({mode:"visible",children:n.children},o,0,null),i=zr(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Cn(t,e.child,null,s),t.child.memoizedState=Ll(s),t.memoizedState=Il,i);if(!(t.mode&1))return wi(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(P(419)),n=Oa(i,n,void 0),wi(e,t,s,n)}if(a=(s&e.childLanes)!==0,Me||a){if(n=_e,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ht(e,o),yt(n,e,o,-1))}return rc(),n=Oa(Error(P(421))),wi(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=ur(o.nextSibling),Ye=t,re=!0,gt=null,e!==null&&(tt[rt++]=Ut,tt[rt++]=Ft,tt[rt++]=Fr,Ut=e.id,Ft=e.overflow,Fr=t),t=Qu(t,n.children),t.flags|=4096,t)}function Sd(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Pl(e.return,t,r)}function Ia(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Bp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Le(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,r,t);else if(e.tag===19)Sd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Y(oe,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&ws(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ia(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ws(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ia(t,!0,r,null,i);break;case"together":Ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=hr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=hr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Oy(e,t,r){switch(t.tag){case 3:Fp(t),En();break;case 5:mp(t);break;case 1:We(t.type)&&hs(t);break;case 4:Bu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Y(gs,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Y(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?Mp(e,t,r):(Y(oe,oe.current&1),e=Vt(e,t,r),e!==null?e.sibling:null);Y(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Bp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Dp(e,t,r)}return Vt(e,t,r)}var Wp,Nl,qp,Hp;Wp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Nl=function(){};qp=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Ir(Rt.current);var i=null;switch(r){case"input":o=ol(e,o),n=ol(e,n),i=[];break;case"select":o=se({},o,{value:void 0}),n=se({},n,{value:void 0}),i=[];break;case"textarea":o=al(e,o),n=al(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ds)}ul(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Po.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var l=n[u];if(a=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Hp=function(e,t,r,n){r!==n&&(t.flags|=4)};function eo(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Iy(e,t,r){var n=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return We(t.type)&&fs(),Te(t),null;case 3:return n=t.stateNode,jn(),te(Be),te(Ae),qu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(ql(gt),gt=null))),Nl(e,t),Te(t),null;case 5:Wu(t);var o=Ir(Fo.current);if(r=t.type,e!==null&&t.stateNode!=null)qp(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(P(166));return Te(t),null}if(e=Ir(Rt.current),vi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Pt]=t,n[Do]=i,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<lo.length;o++)Z(lo[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":Ac(n,i),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Z("invalid",n);break;case"textarea":Ic(n,i),Z("invalid",n)}ul(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&gi(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&gi(n.textContent,a,e),o=["children",""+a]):Po.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",n)}switch(r){case"input":li(n),Oc(n,i,!0);break;case"textarea":li(n),Lc(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ds)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Pt]=t,e[Do]=n,Wp(e,t,!1,!1),t.stateNode=e;e:{switch(s=cl(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<lo.length;o++)Z(lo[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":Ac(e,n),o=ol(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=se({},n,{value:void 0}),Z("invalid",e);break;case"textarea":Ic(e,n),o=al(e,n),Z("invalid",e);break;default:o=n}ul(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?_h(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wh(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&To(e,l):typeof l=="number"&&To(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Po.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&xu(e,i,l,s))}switch(r){case"input":li(e),Oc(e,n,!1);break;case"textarea":li(e),Lc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+mr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?vn(e,!!n.multiple,i,!1):n.defaultValue!=null&&vn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ds)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(P(166));if(r=Ir(Fo.current),Ir(Rt.current),vi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Pt]=t,(i=n.nodeValue!==r)&&(e=Ye,e!==null))switch(e.tag){case 3:gi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Pt]=t,t.stateNode=n}return Te(t),null;case 13:if(te(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Qe!==null&&t.mode&1&&!(t.flags&128))lp(),En(),t.flags|=98560,i=!1;else if(i=vi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Pt]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else gt!==null&&(ql(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ye===0&&(ye=3):rc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return jn(),Nl(e,t),e===null&&No(t.stateNode.containerInfo),Te(t),null;case 10:return Uu(t.type._context),Te(t),null;case 17:return We(t.type)&&fs(),Te(t),null;case 19:if(te(oe),i=t.memoizedState,i===null)return Te(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)eo(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ws(e),s!==null){for(t.flags|=128,eo(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Y(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>Tn&&(t.flags|=128,n=!0,eo(i,!1),t.lanes=4194304)}else{if(!n)if(e=ws(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!re)return Te(t),null}else 2*de()-i.renderingStartTime>Tn&&r!==1073741824&&(t.flags|=128,n=!0,eo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,r=oe.current,Y(oe,n?r&1|2:r&1),t):(Te(t),null);case 22:case 23:return tc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Je&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Ly(e,t){switch(Lu(t),t.tag){case 1:return We(t.type)&&fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),te(Be),te(Ae),qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wu(t),null;case 13:if(te(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(oe),null;case 4:return jn(),null;case 10:return Uu(t.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var xi=!1,$e=!1,Ny=typeof WeakSet=="function"?WeakSet:Set,A=null;function pn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ue(e,t,n)}else r.current=null}function zl(e,t,r){try{r()}catch(n){ue(e,t,n)}}var bd=!1;function zy(e,t){if(xl=ls,e=Jh(),Ou(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var y;f!==r||o!==0&&f.nodeType!==3||(a=s+o),f!==i||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===r&&++u===o&&(a=s),p===i&&++c===n&&(l=s),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(_l={focusedElem:e,selectionRange:r},ls=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,S=w.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:ht(t.type,v),S);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ue(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return w=bd,bd=!1,w}function _o(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&zl(t,r,i)}o=o.next}while(o!==n)}}function Ws(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Dl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Vp(e){var t=e.alternate;t!==null&&(e.alternate=null,Vp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Do],delete t[bl],delete t[wy],delete t[xy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kp(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ds));else if(n!==4&&(e=e.child,e!==null))for(Ul(e,t,r),e=e.sibling;e!==null;)Ul(e,t,r),e=e.sibling}function Fl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Fl(e,t,r),e=e.sibling;e!==null;)Fl(e,t,r),e=e.sibling}var be=null,pt=!1;function Jt(e,t,r){for(r=r.child;r!==null;)Gp(e,t,r),r=r.sibling}function Gp(e,t,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ls,r)}catch{}switch(r.tag){case 5:$e||pn(r,t);case 6:var n=be,o=pt;be=null,Jt(e,t,r),be=n,pt=o,be!==null&&(pt?(e=be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):be.removeChild(r.stateNode));break;case 18:be!==null&&(pt?(e=be,r=r.stateNode,e.nodeType===8?ja(e.parentNode,r):e.nodeType===1&&ja(e,r),Oo(e)):ja(be,r.stateNode));break;case 4:n=be,o=pt,be=r.stateNode.containerInfo,pt=!0,Jt(e,t,r),be=n,pt=o;break;case 0:case 11:case 14:case 15:if(!$e&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&zl(r,t,s),o=o.next}while(o!==n)}Jt(e,t,r);break;case 1:if(!$e&&(pn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){ue(r,t,a)}Jt(e,t,r);break;case 21:Jt(e,t,r);break;case 22:r.mode&1?($e=(n=$e)||r.memoizedState!==null,Jt(e,t,r),$e=n):Jt(e,t,r);break;default:Jt(e,t,r)}}function Cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ny),t.forEach(function(n){var o=Vy.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function dt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,pt=!1;break e;case 3:be=a.stateNode.containerInfo,pt=!0;break e;case 4:be=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(be===null)throw Error(P(160));Gp(i,s,o),be=null,pt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ue(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jp(t,e),t=t.sibling}function Jp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),bt(e),n&4){try{_o(3,e,e.return),Ws(3,e)}catch(v){ue(e,e.return,v)}try{_o(5,e,e.return)}catch(v){ue(e,e.return,v)}}break;case 1:dt(t,e),bt(e),n&512&&r!==null&&pn(r,r.return);break;case 5:if(dt(t,e),bt(e),n&512&&r!==null&&pn(r,r.return),e.flags&32){var o=e.stateNode;try{To(o,"")}catch(v){ue(e,e.return,v)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&gh(o,i),cl(a,s);var u=cl(a,i);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?_h(o,f):c==="dangerouslySetInnerHTML"?wh(o,f):c==="children"?To(o,f):xu(o,c,f,u)}switch(a){case"input":il(o,i);break;case"textarea":vh(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?vn(o,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?vn(o,!!i.multiple,i.defaultValue,!0):vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Do]=i}catch(v){ue(e,e.return,v)}}break;case 6:if(dt(t,e),bt(e),n&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ue(e,e.return,v)}}break;case 3:if(dt(t,e),bt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(v){ue(e,e.return,v)}break;case 4:dt(t,e),bt(e);break;case 13:dt(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zu=de())),n&4&&Cd(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?($e=(u=$e)||c,dt(t,e),$e=u):dt(t,e),bt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(f=A=c;A!==null;){switch(p=A,y=p.child,p.tag){case 0:case 11:case 14:case 15:_o(4,p,p.return);break;case 1:pn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ue(n,r,v)}}break;case 5:pn(p,p.return);break;case 22:if(p.memoizedState!==null){Pd(f);continue}}y!==null?(y.return=p,A=y):Pd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xh("display",s))}catch(v){ue(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){ue(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dt(t,e),bt(e),n&4&&Cd(e);break;case 21:break;default:dt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Kp(r)){var n=r;break e}r=r.return}throw Error(P(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(To(o,""),n.flags&=-33);var i=Ed(e);Fl(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,a=Ed(e);Ul(e,a,s);break;default:throw Error(P(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dy(e,t,r){A=e,Qp(e)}function Qp(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||xi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||$e;a=xi;var u=$e;if(xi=s,($e=l)&&!u)for(A=o;A!==null;)s=A,l=s.child,s.tag===22&&s.memoizedState!==null?Td(o):l!==null?(l.return=s,A=l):Td(o);for(;i!==null;)A=i,Qp(i),i=i.sibling;A=o,xi=a,$e=u}jd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):jd(e)}}function jd(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||Ws(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!$e)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:ht(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cd(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}cd(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Oo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}$e||t.flags&512&&Dl(t)}catch(p){ue(t,t.return,p)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Pd(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function Td(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ws(4,t)}catch(l){ue(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){ue(t,o,l)}}var i=t.return;try{Dl(t)}catch(l){ue(t,i,l)}break;case 5:var s=t.return;try{Dl(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var Uy=Math.ceil,ks=Gt.ReactCurrentDispatcher,Yu=Gt.ReactCurrentOwner,it=Gt.ReactCurrentBatchConfig,V=0,_e=null,pe=null,Ee=0,Je=0,mn=wr(0),ye=0,qo=null,Br=0,qs=0,Xu=0,ko=null,Ue=null,Zu=0,Tn=1/0,Lt=null,Ss=!1,Ml=null,dr=null,_i=!1,ir=null,bs=0,So=0,Bl=null,Ki=-1,Gi=0;function Ne(){return V&6?de():Ki!==-1?Ki:Ki=de()}function fr(e){return e.mode&1?V&2&&Ee!==0?Ee&-Ee:ky.transition!==null?(Gi===0&&(Gi=Oh()),Gi):(e=G,e!==0||(e=window.event,e=e===void 0?16:Fh(e.type)),e):1}function yt(e,t,r,n){if(50<So)throw So=0,Bl=null,Error(P(185));Qo(e,r,n),(!(V&2)||e!==_e)&&(e===_e&&(!(V&2)&&(qs|=r),ye===4&&rr(e,Ee)),qe(e,n),r===1&&V===0&&!(t.mode&1)&&(Tn=de()+500,Fs&&xr()))}function qe(e,t){var r=e.callbackNode;kv(e,t);var n=as(e,e===_e?Ee:0);if(n===0)r!==null&&Dc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Dc(r),t===1)e.tag===0?_y($d.bind(null,e)):ip($d.bind(null,e)),vy(function(){!(V&6)&&xr()}),r=null;else{switch(Ih(n)){case 1:r=Eu;break;case 4:r=Rh;break;case 16:r=ss;break;case 536870912:r=Ah;break;default:r=ss}r=om(r,Yp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Yp(e,t){if(Ki=-1,Gi=0,V&6)throw Error(P(327));var r=e.callbackNode;if(kn()&&e.callbackNode!==r)return null;var n=as(e,e===_e?Ee:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Es(e,n);else{t=n;var o=V;V|=2;var i=Zp();(_e!==e||Ee!==t)&&(Lt=null,Tn=de()+500,Nr(e,t));do try{By();break}catch(a){Xp(e,a)}while(!0);Du(),ks.current=i,V=o,pe!==null?t=0:(_e=null,Ee=0,t=ye)}if(t!==0){if(t===2&&(o=ml(e),o!==0&&(n=o,t=Wl(e,o))),t===1)throw r=qo,Nr(e,0),rr(e,n),qe(e,de()),r;if(t===6)rr(e,n);else{if(o=e.current.alternate,!(n&30)&&!Fy(o)&&(t=Es(e,n),t===2&&(i=ml(e),i!==0&&(n=i,t=Wl(e,i))),t===1))throw r=qo,Nr(e,0),rr(e,n),qe(e,de()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(P(345));case 2:Pr(e,Ue,Lt);break;case 3:if(rr(e,n),(n&130023424)===n&&(t=Zu+500-de(),10<t)){if(as(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(Pr.bind(null,e,Ue,Lt),t);break}Pr(e,Ue,Lt);break;case 4:if(rr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-vt(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=de()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Uy(n/1960))-n,10<n){e.timeoutHandle=Sl(Pr.bind(null,e,Ue,Lt),n);break}Pr(e,Ue,Lt);break;case 5:Pr(e,Ue,Lt);break;default:throw Error(P(329))}}}return qe(e,de()),e.callbackNode===r?Yp.bind(null,e):null}function Wl(e,t){var r=ko;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=Es(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&ql(t)),e}function ql(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function Fy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t){for(t&=~Xu,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-vt(t),n=1<<r;e[r]=-1,t&=~n}}function $d(e){if(V&6)throw Error(P(327));kn();var t=as(e,0);if(!(t&1))return qe(e,de()),null;var r=Es(e,t);if(e.tag!==0&&r===2){var n=ml(e);n!==0&&(t=n,r=Wl(e,n))}if(r===1)throw r=qo,Nr(e,0),rr(e,t),qe(e,de()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,Ue,Lt),qe(e,de()),null}function ec(e,t){var r=V;V|=1;try{return e(t)}finally{V=r,V===0&&(Tn=de()+500,Fs&&xr())}}function Wr(e){ir!==null&&ir.tag===0&&!(V&6)&&kn();var t=V;V|=1;var r=it.transition,n=G;try{if(it.transition=null,G=1,e)return e()}finally{G=n,it.transition=r,V=t,!(V&6)&&xr()}}function tc(){Je=mn.current,te(mn)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,gy(r)),pe!==null)for(r=pe.return;r!==null;){var n=r;switch(Lu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&fs();break;case 3:jn(),te(Be),te(Ae),qu();break;case 5:Wu(n);break;case 4:jn();break;case 13:te(oe);break;case 19:te(oe);break;case 10:Uu(n.type._context);break;case 22:case 23:tc()}r=r.return}if(_e=e,pe=e=hr(e.current,null),Ee=Je=t,ye=0,qo=null,Xu=qs=Br=0,Ue=ko=null,Or!==null){for(t=0;t<Or.length;t++)if(r=Or[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}Or=null}return e}function Xp(e,t){do{var r=pe;try{if(Du(),qi.current=_s,xs){for(var n=ie.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}xs=!1}if(Mr=0,we=ve=ie=null,xo=!1,Mo=0,Yu.current=null,r===null||r.return===null){ye=1,qo=t,pe=null;break}e:{var i=e,s=r.return,a=r,l=t;if(t=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=vd(s);if(y!==null){y.flags&=-257,yd(y,s,a,i,t),y.mode&1&&gd(i,u,t),t=y,l=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){gd(i,u,t),rc();break e}l=Error(P(426))}}else if(re&&a.mode&1){var S=vd(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),yd(S,s,a,i,t),Nu(Pn(l,a));break e}}i=l=Pn(l,a),ye!==4&&(ye=2),ko===null?ko=[i]:ko.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Lp(i,l,t);ud(i,h);break e;case 1:a=l;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(dr===null||!dr.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Np(i,a,t);ud(i,k);break e}}i=i.return}while(i!==null)}tm(r)}catch(b){t=b,pe===r&&r!==null&&(pe=r=r.return);continue}break}while(!0)}function Zp(){var e=ks.current;return ks.current=_s,e===null?_s:e}function rc(){(ye===0||ye===3||ye===2)&&(ye=4),_e===null||!(Br&268435455)&&!(qs&268435455)||rr(_e,Ee)}function Es(e,t){var r=V;V|=2;var n=Zp();(_e!==e||Ee!==t)&&(Lt=null,Nr(e,t));do try{My();break}catch(o){Xp(e,o)}while(!0);if(Du(),V=r,ks.current=n,pe!==null)throw Error(P(261));return _e=null,Ee=0,ye}function My(){for(;pe!==null;)em(pe)}function By(){for(;pe!==null&&!hv();)em(pe)}function em(e){var t=nm(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?tm(e):pe=t,Yu.current=null}function tm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ly(r,t),r!==null){r.flags&=32767,pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,pe=null;return}}else if(r=Iy(r,t,Je),r!==null){pe=r;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ye===0&&(ye=5)}function Pr(e,t,r){var n=G,o=it.transition;try{it.transition=null,G=1,Wy(e,t,r,n)}finally{it.transition=o,G=n}return null}function Wy(e,t,r,n){do kn();while(ir!==null);if(V&6)throw Error(P(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Sv(e,i),e===_e&&(pe=_e=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_i||(_i=!0,om(ss,function(){return kn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=it.transition,it.transition=null;var s=G;G=1;var a=V;V|=4,Yu.current=null,zy(e,r),Jp(r,e),uy(_l),ls=!!xl,_l=xl=null,e.current=r,Dy(r),pv(),V=a,G=s,it.transition=i}else e.current=r;if(_i&&(_i=!1,ir=e,bs=o),i=e.pendingLanes,i===0&&(dr=null),vv(r.stateNode),qe(e,de()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Ss)throw Ss=!1,e=Ml,Ml=null,e;return bs&1&&e.tag!==0&&kn(),i=e.pendingLanes,i&1?e===Bl?So++:(So=0,Bl=e):So=0,xr(),null}function kn(){if(ir!==null){var e=Ih(bs),t=it.transition,r=G;try{if(it.transition=null,G=16>e?16:e,ir===null)var n=!1;else{if(e=ir,ir=null,bs=0,V&6)throw Error(P(331));var o=V;for(V|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:_o(8,c,i)}var f=c.child;if(f!==null)f.return=c,A=f;else for(;A!==null;){c=A;var p=c.sibling,y=c.return;if(Vp(c),c===u){A=null;break}if(p!==null){p.return=y,A=p;break}A=y}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_o(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,A=h;break e}A=i.return}}var m=e.current;for(A=m;A!==null;){s=A;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,A=g;else e:for(s=m;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ws(9,a)}}catch(b){ue(a,a.return,b)}if(a===s){A=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,A=k;break e}A=a.return}}if(V=o,xr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ls,e)}catch{}n=!0}return n}finally{G=r,it.transition=t}}return!1}function Rd(e,t,r){t=Pn(r,t),t=Lp(e,t,1),e=cr(e,t,1),t=Ne(),e!==null&&(Qo(e,1,t),qe(e,t))}function ue(e,t,r){if(e.tag===3)Rd(e,e,r);else for(;t!==null;){if(t.tag===3){Rd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(dr===null||!dr.has(n))){e=Pn(r,e),e=Np(t,e,1),t=cr(t,e,1),e=Ne(),t!==null&&(Qo(t,1,e),qe(t,e));break}}t=t.return}}function qy(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Ee&r)===r&&(ye===4||ye===3&&(Ee&130023424)===Ee&&500>de()-Zu?Nr(e,0):Xu|=r),qe(e,t)}function rm(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var r=Ne();e=Ht(e,t),e!==null&&(Qo(e,t,r),qe(e,r))}function Hy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),rm(e,r)}function Vy(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(P(314))}n!==null&&n.delete(t),rm(e,r)}var nm;nm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Me=!1,Oy(e,t,r);Me=!!(e.flags&131072)}else Me=!1,re&&t.flags&1048576&&sp(t,ms,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Vi(e,t),e=t.pendingProps;var o=bn(t,Ae.current);_n(t,r),o=Vu(null,t,n,e,o,r);var i=Ku();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(n)?(i=!0,hs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Mu(t),o.updater=Ms,t.stateNode=o,o._reactInternals=t,$l(t,n,e,r),t=Ol(null,t,n,!0,i,r)):(t.tag=0,re&&i&&Iu(t),Le(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Gy(n),e=ht(n,e),o){case 0:t=Al(null,t,n,e,r);break e;case 1:t=_d(null,t,n,e,r);break e;case 11:t=wd(null,t,n,e,r);break e;case 14:t=xd(null,t,n,ht(n.type,e),r);break e}throw Error(P(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),Al(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),_d(e,t,n,o,r);case 3:e:{if(Fp(t),e===null)throw Error(P(387));n=t.pendingProps,i=t.memoizedState,o=i.element,cp(e,t),ys(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Pn(Error(P(423)),t),t=kd(e,t,n,r,o);break e}else if(n!==o){o=Pn(Error(P(424)),t),t=kd(e,t,n,r,o);break e}else for(Qe=ur(t.stateNode.containerInfo.firstChild),Ye=t,re=!0,gt=null,r=pp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(En(),n===o){t=Vt(e,t,r);break e}Le(e,t,n,r)}t=t.child}return t;case 5:return mp(t),e===null&&jl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,kl(n,o)?s=null:i!==null&&kl(n,i)&&(t.flags|=32),Up(e,t),Le(e,t,s,r),t.child;case 6:return e===null&&jl(t),null;case 13:return Mp(e,t,r);case 4:return Bu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Cn(t,null,n,r):Le(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),wd(e,t,n,o,r);case 7:return Le(e,t,t.pendingProps,r),t.child;case 8:return Le(e,t,t.pendingProps.children,r),t.child;case 12:return Le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Y(gs,n._currentValue),n._currentValue=s,i!==null)if(xt(i.value,s)){if(i.children===o.children&&!Be.current){t=Vt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Mt(-1,r&-r),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Pl(i.return,r,t),a.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Pl(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Le(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,_n(t,r),o=at(o),n=n(o),t.flags|=1,Le(e,t,n,r),t.child;case 14:return n=t.type,o=ht(n,t.pendingProps),o=ht(n.type,o),xd(e,t,n,o,r);case 15:return zp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ht(n,o),Vi(e,t),t.tag=1,We(n)?(e=!0,hs(t)):e=!1,_n(t,r),fp(t,n,o),$l(t,n,o,r),Ol(null,t,n,!0,e,r);case 19:return Bp(e,t,r);case 22:return Dp(e,t,r)}throw Error(P(156,t.tag))};function om(e,t){return $h(e,t)}function Ky(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,r,n){return new Ky(e,t,r,n)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gy(e){if(typeof e=="function")return nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===Su)return 14}return 2}function hr(e,t){var r=e.alternate;return r===null?(r=ot(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ji(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")nc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case on:return zr(r.children,o,i,t);case _u:s=8,o|=8;break;case el:return e=ot(12,r,t,o|2),e.elementType=el,e.lanes=i,e;case tl:return e=ot(13,r,t,o),e.elementType=tl,e.lanes=i,e;case rl:return e=ot(19,r,t,o),e.elementType=rl,e.lanes=i,e;case hh:return Hs(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dh:s=10;break e;case fh:s=9;break e;case ku:s=11;break e;case Su:s=14;break e;case Zt:s=16,n=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=ot(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function zr(e,t,r,n){return e=ot(7,e,n,t),e.lanes=r,e}function Hs(e,t,r,n){return e=ot(22,e,n,t),e.elementType=hh,e.lanes=r,e.stateNode={isHidden:!1},e}function La(e,t,r){return e=ot(6,e,null,t),e.lanes=r,e}function Na(e,t,r){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jy(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function oc(e,t,r,n,o,i,s,a,l){return e=new Jy(e,t,r,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(i),e}function Qy(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function im(e){if(!e)return gr;e=e._reactInternals;e:{if(Hr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(We(r))return op(e,r,t)}return t}function sm(e,t,r,n,o,i,s,a,l){return e=oc(r,n,!0,e,o,i,s,a,l),e.context=im(null),r=e.current,n=Ne(),o=fr(r),i=Mt(n,o),i.callback=t??null,cr(r,i,o),e.current.lanes=o,Qo(e,o,n),qe(e,n),e}function Vs(e,t,r,n){var o=t.current,i=Ne(),s=fr(o);return r=im(r),t.context===null?t.context=r:t.pendingContext=r,t=Mt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=cr(o,t,s),e!==null&&(yt(e,o,s,i),Wi(e,o,s)),s}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ic(e,t){Ad(e,t),(e=e.alternate)&&Ad(e,t)}function Yy(){return null}var am=typeof reportError=="function"?reportError:function(e){console.error(e)};function sc(e){this._internalRoot=e}Ks.prototype.render=sc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Vs(e,t,null,null)};Ks.prototype.unmount=sc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wr(function(){Vs(null,e,null,null)}),t[qt]=null}};function Ks(e){this._internalRoot=e}Ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=zh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tr.length&&t!==0&&t<tr[r].priority;r++);tr.splice(r,0,e),r===0&&Uh(e)}};function ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function Xy(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Cs(s);i.call(u)}}var s=sm(t,n,e,0,null,!1,!1,"",Od);return e._reactRootContainer=s,e[qt]=s.current,No(e.nodeType===8?e.parentNode:e),Wr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var u=Cs(l);a.call(u)}}var l=oc(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=l,e[qt]=l.current,No(e.nodeType===8?e.parentNode:e),Wr(function(){Vs(t,l,r,n)}),l}function Js(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Cs(s);a.call(l)}}Vs(t,s,e,o)}else s=Xy(r,t,e,o,n);return Cs(s)}Lh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ao(t.pendingLanes);r!==0&&(Cu(t,r|1),qe(t,de()),!(V&6)&&(Tn=de()+500,xr()))}break;case 13:Wr(function(){var n=Ht(e,1);if(n!==null){var o=Ne();yt(n,e,1,o)}}),ic(e,1)}};ju=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=Ne();yt(t,e,134217728,r)}ic(e,134217728)}};Nh=function(e){if(e.tag===13){var t=fr(e),r=Ht(e,t);if(r!==null){var n=Ne();yt(r,e,t,n)}ic(e,t)}};zh=function(){return G};Dh=function(e,t){var r=G;try{return G=e,t()}finally{G=r}};fl=function(e,t,r){switch(t){case"input":if(il(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Us(n);if(!o)throw Error(P(90));mh(n),il(n,o)}}}break;case"textarea":vh(e,r);break;case"select":t=r.value,t!=null&&vn(e,!!r.multiple,t,!1)}};bh=ec;Eh=Wr;var Zy={usingClientEntryPoint:!1,Events:[Xo,un,Us,kh,Sh,ec]},to={findFiberByHostInstance:Ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},e0={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ph(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||Yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Ls=ki.inject(e0),$t=ki}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;Ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ac(t))throw Error(P(200));return Qy(e,t,null,r)};Ze.createRoot=function(e,t){if(!ac(e))throw Error(P(299));var r=!1,n="",o=am;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=oc(e,1,!1,null,null,r,!1,n,o),e[qt]=t.current,No(e.nodeType===8?e.parentNode:e),new sc(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Ph(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Wr(e)};Ze.hydrate=function(e,t,r){if(!Gs(t))throw Error(P(200));return Js(null,e,t,!0,r)};Ze.hydrateRoot=function(e,t,r){if(!ac(e))throw Error(P(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=am;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=sm(t,null,e,1,r??null,o,!1,i,s),e[qt]=t.current,No(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ks(t)};Ze.render=function(e,t,r){if(!Gs(t))throw Error(P(200));return Js(null,e,t,!1,r)};Ze.unmountComponentAtNode=function(e){if(!Gs(e))throw Error(P(40));return e._reactRootContainer?(Wr(function(){Js(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=ec;Ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Gs(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Js(e,t,r,!1,n)};Ze.version="18.2.0-next-9e3b772b8-20220608";function lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lm)}catch(e){console.error(e)}}lm(),sh.exports=Ze;var t0=sh.exports,Id=t0;Xa.createRoot=Id.createRoot,Xa.hydrateRoot=Id.hydrateRoot;const r0="modulepreload",n0=function(e){return"/ventanilla/"+e},Ld={},vr=function(t,r,n){let o=Promise.resolve();return r&&r.length>0&&(document.getElementsByTagName("link"),o=Promise.all(r.map(i=>{if(i=n0(i),i in Ld)return;Ld[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":r0,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((u,c)=>{l.addEventListener("load",u),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})}))),o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Nd="popstate";function o0(e={}){function t(n,o){let{pathname:i,search:s,hash:a}=n.location;return Hl("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Ho(o)}return s0(t,r,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _t(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function i0(){return Math.random().toString(36).substring(2,10)}function zd(e,t){return{usr:e.state,key:e.key,idx:t}}function Hl(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Un(t):t,state:r,key:t&&t.key||n||i0()}}function Ho({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Un(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function s0(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:i=!1}=n,s=o.history,a="POP",l=null,u=c();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function c(){return(s.state||{idx:null}).idx}function f(){a="POP";let S=c(),h=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:h})}function p(S,h){a="PUSH";let m=Hl(v.location,S,h);u=c()+1;let g=zd(m,u),k=v.createHref(m);try{s.pushState(g,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(k)}i&&l&&l({action:a,location:v.location,delta:1})}function y(S,h){a="REPLACE";let m=Hl(v.location,S,h);u=c();let g=zd(m,u),k=v.createHref(m);s.replaceState(g,"",k),i&&l&&l({action:a,location:v.location,delta:0})}function w(S){return a0(S)}let v={get action(){return a},get location(){return e(o,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Nd,f),l=S,()=>{o.removeEventListener(Nd,f),l=null}},createHref(S){return t(o,S)},createURL:w,encodeLocation(S){let h=w(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:y,go(S){return s.go(S)}};return v}function a0(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),ne(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Ho(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function um(e,t,r="/"){return l0(e,t,r,!1)}function l0(e,t,r,n){let o=typeof t=="string"?Un(t):t,i=Kt(o.pathname||"/",r);if(i==null)return null;let s=cm(e);u0(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=x0(i);a=y0(s[l],u,n)}return a}function cm(e,t=[],r=[],n="",o=!1){let i=(s,a,l=o,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(n)&&l)return;ne(c.relativePath.startsWith(n),`Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(n.length)}let f=Bt([n,c.relativePath]),p=r.concat(c);s.children&&s.children.length>0&&(ne(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),cm(s.children,t,p,f,l)),!(s.path==null&&!s.index)&&t.push({path:f,score:g0(f,s.index),routesMeta:p})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of dm(s.path))i(s,a,!0,u)}),t}function dm(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let s=dm(n.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function u0(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:v0(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var c0=/^:[\w-]+$/,d0=3,f0=2,h0=1,p0=10,m0=-2,Dd=e=>e==="*";function g0(e,t){let r=e.split("/"),n=r.length;return r.some(Dd)&&(n+=m0),t&&(n+=f0),r.filter(o=>!Dd(o)).reduce((o,i)=>o+(c0.test(i)?d0:i===""?h0:p0),n)}function v0(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function y0(e,t,r=!1){let{routesMeta:n}=e,o={},i="/",s=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=js({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!f&&u&&r&&!n[n.length-1].route.index&&(f=js({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Bt([i,f.pathname]),pathnameBase:b0(Bt([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Bt([i,f.pathnameBase]))}return s}function js(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=w0(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:n.reduce((u,{paramName:c,isOptional:f},p)=>{if(c==="*"){let w=a[p]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[p];return f&&!y?u[c]=void 0:u[c]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function w0(e,t=!1,r=!0){_t(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function x0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _t(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Kt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function _0(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Un(e):e;return{pathname:r?r.startsWith("/")?r:k0(r,t):t,search:E0(n),hash:C0(o)}}function k0(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function za(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function S0(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function lc(e){let t=S0(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function uc(e,t,r,n=!1){let o;typeof e=="string"?o=Un(e):(o={...e},ne(!o.pathname||!o.pathname.includes("?"),za("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),za("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),za("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=r;else{let f=t.length-1;if(!n&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=_0(o,a),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Bt=e=>e.join("/").replace(/\/\/+/g,"/"),b0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function j0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var fm=["POST","PUT","PATCH","DELETE"];new Set(fm);var P0=["GET",...fm];new Set(P0);var Fn=x.createContext(null);Fn.displayName="DataRouter";var Qs=x.createContext(null);Qs.displayName="DataRouterState";x.createContext(!1);var hm=x.createContext({isTransitioning:!1});hm.displayName="ViewTransition";var T0=x.createContext(new Map);T0.displayName="Fetchers";var $0=x.createContext(null);$0.displayName="Await";var kt=x.createContext(null);kt.displayName="Navigation";var ei=x.createContext(null);ei.displayName="Location";var St=x.createContext({outlet:null,matches:[],isDataRoute:!1});St.displayName="Route";var cc=x.createContext(null);cc.displayName="RouteError";function R0(e,{relative:t}={}){ne(Mn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=x.useContext(kt),{hash:o,pathname:i,search:s}=ti(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Bt([r,i])),n.createHref({pathname:a,search:s,hash:o})}function Mn(){return x.useContext(ei)!=null}function _r(){return ne(Mn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(ei).location}var pm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mm(e){x.useContext(kt).static||x.useLayoutEffect(e)}function Bn(){let{isDataRoute:e}=x.useContext(St);return e?H0():A0()}function A0(){ne(Mn(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Fn),{basename:t,navigator:r}=x.useContext(kt),{matches:n}=x.useContext(St),{pathname:o}=_r(),i=JSON.stringify(lc(n)),s=x.useRef(!1);return mm(()=>{s.current=!0}),x.useCallback((l,u={})=>{if(_t(s.current,pm),!s.current)return;if(typeof l=="number"){r.go(l);return}let c=uc(l,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Bt([t,c.pathname])),(u.replace?r.replace:r.push)(c,u.state,u)},[t,r,i,o,e])}x.createContext(null);function O0(){let{matches:e}=x.useContext(St),t=e[e.length-1];return t?t.params:{}}function ti(e,{relative:t}={}){let{matches:r}=x.useContext(St),{pathname:n}=_r(),o=JSON.stringify(lc(r));return x.useMemo(()=>uc(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function I0(e,t){return gm(e,t)}function gm(e,t,r,n){var h;ne(Mn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=x.useContext(kt),{matches:i}=x.useContext(St),s=i[i.length-1],a=s?s.params:{},l=s?s.pathname:"/",u=s?s.pathnameBase:"/",c=s&&s.route;{let m=c&&c.path||"";vm(l,!c||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=_r(),p;if(t){let m=typeof t=="string"?Un(t):t;ne(u==="/"||((h=m.pathname)==null?void 0:h.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),p=m}else p=f;let y=p.pathname||"/",w=y;if(u!=="/"){let m=u.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=um(e,{pathname:w});_t(c||v!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),_t(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=U0(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Bt([u,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:Bt([u,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,r,n);return t&&S?x.createElement(ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},S):S}function L0(){let e=q0(),t=j0(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:i},"ErrorBoundary")," or"," ",x.createElement("code",{style:i},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:o},r):null,s)}var N0=x.createElement(L0,null),z0=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?x.createElement(St.Provider,{value:this.props.routeContext},x.createElement(cc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function D0({routeContext:e,match:t,children:r}){let n=x.useContext(Fn);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(St.Provider,{value:e},r)}function U0(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let l=o.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);ne(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let s=!1,a=-1;if(r)for(let l=0;l<o.length;l++){let u=o[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=l),u.route.id){let{loaderData:c,errors:f}=r,p=u.route.loader&&!c.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||p){s=!0,a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}return o.reduceRight((l,u,c)=>{let f,p=!1,y=null,w=null;r&&(f=i&&u.route.id?i[u.route.id]:void 0,y=u.route.errorElement||N0,s&&(a<0&&c===0?(vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,w=null):a===c&&(p=!0,w=u.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,c+1)),S=()=>{let h;return f?h=y:p?h=w:u.route.Component?h=x.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=l,x.createElement(D0,{match:u,routeContext:{outlet:l,matches:v,isDataRoute:r!=null},children:h})};return r&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?x.createElement(z0,{location:r.location,revalidation:r.revalidation,component:y,error:f,children:S(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):S()},null)}function dc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F0(e){let t=x.useContext(Fn);return ne(t,dc(e)),t}function M0(e){let t=x.useContext(Qs);return ne(t,dc(e)),t}function B0(e){let t=x.useContext(St);return ne(t,dc(e)),t}function fc(e){let t=B0(e),r=t.matches[t.matches.length-1];return ne(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function W0(){return fc("useRouteId")}function q0(){var n;let e=x.useContext(cc),t=M0("useRouteError"),r=fc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function H0(){let{router:e}=F0("useNavigate"),t=fc("useNavigate"),r=x.useRef(!1);return mm(()=>{r.current=!0}),x.useCallback(async(o,i={})=>{_t(r.current,pm),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Ud={};function vm(e,t,r){!t&&!Ud[e]&&(Ud[e]=!0,_t(!1,r))}x.memo(V0);function V0({routes:e,future:t,state:r}){return gm(e,void 0,r,t)}function Gr({to:e,replace:t,state:r,relative:n}){ne(Mn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=x.useContext(kt);_t(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=x.useContext(St),{pathname:s}=_r(),a=Bn(),l=uc(e,lc(i),s,n==="path"),u=JSON.stringify(l);return x.useEffect(()=>{a(JSON.parse(u),{replace:t,state:r,relative:n})},[a,u,n,t,r]),null}function Tr(e){ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function K0({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:i=!1}){ne(!Mn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=x.useMemo(()=>({basename:s,navigator:o,static:i,future:{}}),[s,o,i]);typeof r=="string"&&(r=Un(r));let{pathname:l="/",search:u="",hash:c="",state:f=null,key:p="default"}=r,y=x.useMemo(()=>{let w=Kt(l,s);return w==null?null:{location:{pathname:w,search:u,hash:c,state:f,key:p},navigationType:n}},[s,l,u,c,f,p,n]);return _t(y!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:x.createElement(kt.Provider,{value:a},x.createElement(ei.Provider,{children:t,value:y}))}function G0({children:e,location:t}){return I0(Vl(e),t)}function Vl(e,t=[]){let r=[];return x.Children.forEach(e,(n,o)=>{if(!x.isValidElement(n))return;let i=[...t,o];if(n.type===x.Fragment){r.push.apply(r,Vl(n.props.children,i));return}ne(n.type===Tr,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ne(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Vl(n.props.children,i)),r.push(s)}),r}var Qi="get",Yi="application/x-www-form-urlencoded";function Ys(e){return e!=null&&typeof e.tagName=="string"}function J0(e){return Ys(e)&&e.tagName.toLowerCase()==="button"}function Q0(e){return Ys(e)&&e.tagName.toLowerCase()==="form"}function Y0(e){return Ys(e)&&e.tagName.toLowerCase()==="input"}function X0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Z0(e,t){return e.button===0&&(!t||t==="_self")&&!X0(e)}var Si=null;function ew(){if(Si===null)try{new FormData(document.createElement("form"),0),Si=!1}catch{Si=!0}return Si}var tw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Da(e){return e!=null&&!tw.has(e)?(_t(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yi}"`),null):e}function rw(e,t){let r,n,o,i,s;if(Q0(e)){let a=e.getAttribute("action");n=a?Kt(a,t):null,r=e.getAttribute("method")||Qi,o=Da(e.getAttribute("enctype"))||Yi,i=new FormData(e)}else if(J0(e)||Y0(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(n=l?Kt(l,t):null,r=e.getAttribute("formmethod")||a.getAttribute("method")||Qi,o=Da(e.getAttribute("formenctype"))||Da(a.getAttribute("enctype"))||Yi,i=new FormData(a,e),!ew()){let{name:u,type:c,value:f}=e;if(c==="image"){let p=u?`${u}.`:"";i.append(`${p}x`,"0"),i.append(`${p}y`,"0")}else u&&i.append(u,f)}}else{if(Ys(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Qi,n=null,o=Yi,s=e}return i&&o==="text/plain"&&(s=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nw(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&Kt(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function ow(e,t){if(e.id in t)return t[e.id];try{let r=await vr(()=>import(e.module),__vite__mapDeps([]));return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iw(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function sw(e,t,r){let n=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let s=await ow(i,r);return s.links?s.links():[]}return[]}));return cw(n.flat(1).filter(iw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Fd(e,t,r,n,o,i){let s=(l,u)=>r[u]?l.route.id!==r[u].route.id:!0,a=(l,u)=>{var c;return r[u].pathname!==l.pathname||((c=r[u].route.path)==null?void 0:c.endsWith("*"))&&r[u].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,u)=>s(l,u)||a(l,u)):i==="data"?t.filter((l,u)=>{var f;let c=n.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function aw(e,t,{includeHydrateFallback:r}={}){return lw(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function lw(e){return[...new Set(e)]}function uw(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function cw(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let i=JSON.stringify(uw(o));return r.has(i)||(r.add(i),n.push({key:i,link:o})),n},[])}function ym(){let e=x.useContext(Fn);return hc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function dw(){let e=x.useContext(Qs);return hc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var pc=x.createContext(void 0);pc.displayName="FrameworkContext";function wm(){let e=x.useContext(pc);return hc(e,"You must render this element inside a <HydratedRouter> element"),e}function fw(e,t){let r=x.useContext(pc),[n,o]=x.useState(!1),[i,s]=x.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:f}=t,p=x.useRef(null);x.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let v=h=>{h.forEach(m=>{s(m.isIntersecting)})},S=new IntersectionObserver(v,{threshold:.5});return p.current&&S.observe(p.current),()=>{S.disconnect()}}},[e]),x.useEffect(()=>{if(n){let v=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(v)}}},[n]);let y=()=>{o(!0)},w=()=>{o(!1),s(!1)};return r?e!=="intent"?[i,p,{}]:[i,p,{onFocus:ro(a,y),onBlur:ro(l,w),onMouseEnter:ro(u,y),onMouseLeave:ro(c,w),onTouchStart:ro(f,y)}]:[!1,p,{}]}function ro(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function hw({page:e,...t}){let{router:r}=ym(),n=x.useMemo(()=>um(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?x.createElement(mw,{page:e,matches:n,...t}):null}function pw(e){let{manifest:t,routeModules:r}=wm(),[n,o]=x.useState([]);return x.useEffect(()=>{let i=!1;return sw(e,t,r).then(s=>{i||o(s)}),()=>{i=!0}},[e,t,r]),n}function mw({page:e,matches:t,...r}){let n=_r(),{manifest:o,routeModules:i}=wm(),{basename:s}=ym(),{loaderData:a,matches:l}=dw(),u=x.useMemo(()=>Fd(e,t,l,o,n,"data"),[e,t,l,o,n]),c=x.useMemo(()=>Fd(e,t,l,o,n,"assets"),[e,t,l,o,n]),f=x.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let w=new Set,v=!1;if(t.forEach(h=>{var g;let m=o.routes[h.route.id];!m||!m.hasLoader||(!u.some(k=>k.route.id===h.route.id)&&h.route.id in a&&((g=i[h.route.id])!=null&&g.shouldRevalidate)||m.hasClientLoader?v=!0:w.add(h.route.id))}),w.size===0)return[];let S=nw(e,s,"data");return v&&w.size>0&&S.searchParams.set("_routes",t.filter(h=>w.has(h.route.id)).map(h=>h.route.id).join(",")),[S.pathname+S.search]},[s,a,n,o,u,t,e,i]),p=x.useMemo(()=>aw(c,o),[c,o]),y=pw(c);return x.createElement(x.Fragment,null,f.map(w=>x.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),p.map(w=>x.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),y.map(({key:w,link:v})=>x.createElement("link",{key:w,nonce:r.nonce,...v})))}function gw(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xm&&(window.__reactRouterVersion="7.8.1")}catch{}function vw({basename:e,children:t,window:r}){let n=x.useRef();n.current==null&&(n.current=o0({window:r,v5Compat:!0}));let o=n.current,[i,s]=x.useState({action:o.action,location:o.location}),a=x.useCallback(l=>{x.startTransition(()=>s(l))},[s]);return x.useLayoutEffect(()=>o.listen(a),[o,a]),x.createElement(K0,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var _m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,km=x.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f,...p},y){let{basename:w}=x.useContext(kt),v=typeof u=="string"&&_m.test(u),S,h=!1;if(typeof u=="string"&&v&&(S=u,xm))try{let L=new URL(window.location.href),$=u.startsWith("//")?new URL(L.protocol+u):new URL(u),H=Kt($.pathname,w);$.origin===L.origin&&H!=null?u=H+$.search+$.hash:h=!0}catch{_t(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=R0(u,{relative:o}),[g,k,b]=fw(n,p),E=_w(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:o,viewTransition:f});function C(L){t&&t(L),L.defaultPrevented||E(L)}let T=x.createElement("a",{...p,...b,href:S||m,onClick:h||i?t:C,ref:gw(y,k),target:l,"data-discover":!v&&r==="render"?"true":void 0});return g&&!v?x.createElement(x.Fragment,null,T,x.createElement(hw,{page:m})):T});km.displayName="Link";var yw=x.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:i,to:s,viewTransition:a,children:l,...u},c){let f=ti(s,{relative:u.relative}),p=_r(),y=x.useContext(Qs),{navigator:w,basename:v}=x.useContext(kt),S=y!=null&&Cw(f)&&a===!0,h=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,m=p.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(m=m.toLowerCase(),g=g?g.toLowerCase():null,h=h.toLowerCase()),g&&v&&(g=Kt(g,v)||g);const k=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let b=m===h||!o&&m.startsWith(h)&&m.charAt(k)==="/",E=g!=null&&(g===h||!o&&g.startsWith(h)&&g.charAt(h.length)==="/"),C={isActive:b,isPending:E,isTransitioning:S},T=b?t:void 0,L;typeof n=="function"?L=n(C):L=[n,b?"active":null,E?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let $=typeof i=="function"?i(C):i;return x.createElement(km,{...u,"aria-current":T,className:L,ref:c,style:$,to:s,viewTransition:a},typeof l=="function"?l(C):l)});yw.displayName="NavLink";var ww=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:i,method:s=Qi,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:f,...p},y)=>{let w=bw(),v=Ew(a,{relative:u}),S=s.toLowerCase()==="get"?"get":"post",h=typeof a=="string"&&_m.test(a),m=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let k=g.nativeEvent.submitter,b=(k==null?void 0:k.getAttribute("formmethod"))||s;w(k||g.currentTarget,{fetcherKey:t,method:b,navigate:r,replace:o,state:i,relative:u,preventScrollReset:c,viewTransition:f})};return x.createElement("form",{ref:y,method:S,action:v,onSubmit:n?l:m,...p,"data-discover":!h&&e==="render"?"true":void 0})});ww.displayName="Form";function xw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sm(e){let t=x.useContext(Fn);return ne(t,xw(e)),t}function _w(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:i,viewTransition:s}={}){let a=Bn(),l=_r(),u=ti(e,{relative:i});return x.useCallback(c=>{if(Z0(c,t)){c.preventDefault();let f=r!==void 0?r:Ho(l)===Ho(u);a(e,{replace:f,state:n,preventScrollReset:o,relative:i,viewTransition:s})}},[l,a,u,r,n,t,e,o,i,s])}var kw=0,Sw=()=>`__${String(++kw)}__`;function bw(){let{router:e}=Sm("useSubmit"),{basename:t}=x.useContext(kt),r=W0();return x.useCallback(async(n,o={})=>{let{action:i,method:s,encType:a,formData:l,body:u}=rw(n,t);if(o.navigate===!1){let c=o.fetcherKey||Sw();await e.fetch(c,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||s,formEncType:o.encType||a,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||s,formEncType:o.encType||a,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Ew(e,{relative:t}={}){let{basename:r}=x.useContext(kt),n=x.useContext(St);ne(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),i={...ti(e||".",{relative:t})},s=_r();if(e==null){i.search=s.search;let a=new URLSearchParams(i.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let c=a.toString();i.search=c?`?${c}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:Bt([r,i.pathname])),Ho(i)}function Cw(e,{relative:t}={}){let r=x.useContext(hm);ne(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Sm("useViewTransitionState"),o=ti(e,{relative:t});if(!r.isTransitioning)return!1;let i=Kt(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Kt(r.nextLocation.pathname,n)||r.nextLocation.pathname;return js(o.pathname,s)!=null||js(o.pathname,i)!=null}var Re=function(){return Re=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Re.apply(this,arguments)};function Vo(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var ee="-ms-",bo="-moz-",K="-webkit-",bm="comm",Xs="rule",mc="decl",jw="@import",Em="@keyframes",Pw="@layer",Cm=Math.abs,gc=String.fromCharCode,Kl=Object.assign;function Tw(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function jm(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Xi(e,t,r){return e.indexOf(t,r)}function xe(e,t){return e.charCodeAt(t)|0}function $n(e,t,r){return e.slice(t,r)}function jt(e){return e.length}function Pm(e){return e.length}function uo(e,t){return t.push(e),e}function $w(e,t){return e.map(t).join("")}function Md(e,t){return e.filter(function(r){return!Nt(r,t)})}var Zs=1,Rn=1,Tm=0,ut=0,he=0,Wn="";function ea(e,t,r,n,o,i,s,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Zs,column:Rn,length:s,return:"",siblings:a}}function Yt(e,t){return Kl(ea("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jr(e){for(;e.root;)e=Yt(e.root,{children:[e]});uo(e,e.siblings)}function Rw(){return he}function Aw(){return he=ut>0?xe(Wn,--ut):0,Rn--,he===10&&(Rn=1,Zs--),he}function wt(){return he=ut<Tm?xe(Wn,ut++):0,Rn++,he===10&&(Rn=1,Zs++),he}function Dr(){return xe(Wn,ut)}function Zi(){return ut}function ta(e,t){return $n(Wn,e,t)}function Gl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ow(e){return Zs=Rn=1,Tm=jt(Wn=e),ut=0,[]}function Iw(e){return Wn="",e}function Ua(e){return jm(ta(ut-1,Jl(e===91?e+2:e===40?e+1:e)))}function Lw(e){for(;(he=Dr())&&he<33;)wt();return Gl(e)>2||Gl(he)>3?"":" "}function Nw(e,t){for(;--t&&wt()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return ta(e,Zi()+(t<6&&Dr()==32&&wt()==32))}function Jl(e){for(;wt();)switch(he){case e:return ut;case 34:case 39:e!==34&&e!==39&&Jl(he);break;case 40:e===41&&Jl(e);break;case 92:wt();break}return ut}function zw(e,t){for(;wt()&&e+he!==57;)if(e+he===84&&Dr()===47)break;return"/*"+ta(t,ut-1)+"*"+gc(e===47?e:wt())}function Dw(e){for(;!Gl(Dr());)wt();return ta(e,ut)}function Uw(e){return Iw(es("",null,null,null,[""],e=Ow(e),0,[0],e))}function es(e,t,r,n,o,i,s,a,l){for(var u=0,c=0,f=s,p=0,y=0,w=0,v=1,S=1,h=1,m=0,g="",k=o,b=i,E=n,C=g;S;)switch(w=m,m=wt()){case 40:if(w!=108&&xe(C,f-1)==58){Xi(C+=B(Ua(m),"&","&\f"),"&\f",Cm(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Ua(m);break;case 9:case 10:case 13:case 32:C+=Lw(w);break;case 92:C+=Nw(Zi()-1,7);continue;case 47:switch(Dr()){case 42:case 47:uo(Fw(zw(wt(),Zi()),t,r,l),l);break;default:C+="/"}break;case 123*v:a[u++]=jt(C)*h;case 125*v:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:h==-1&&(C=B(C,/\f/g,"")),y>0&&jt(C)-f&&uo(y>32?Wd(C+";",n,r,f-1,l):Wd(B(C," ","")+";",n,r,f-2,l),l);break;case 59:C+=";";default:if(uo(E=Bd(C,t,r,u,c,o,a,g,k=[],b=[],f,i),i),m===123)if(c===0)es(C,t,E,E,k,i,f,a,b);else switch(p===99&&xe(C,3)===110?100:p){case 100:case 108:case 109:case 115:es(e,E,E,n&&uo(Bd(e,E,E,0,0,o,a,g,o,k=[],f,b),b),o,b,f,a,n?k:b);break;default:es(C,E,E,E,[""],b,0,a,b)}}u=c=y=0,v=h=1,g=C="",f=s;break;case 58:f=1+jt(C),y=w;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&Aw()==125)continue}switch(C+=gc(m),m*v){case 38:h=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(jt(C)-1)*h,h=1;break;case 64:Dr()===45&&(C+=Ua(wt())),p=Dr(),c=f=jt(g=C+=Dw(Zi())),m++;break;case 45:w===45&&jt(C)==2&&(v=0)}}return i}function Bd(e,t,r,n,o,i,s,a,l,u,c,f){for(var p=o-1,y=o===0?i:[""],w=Pm(y),v=0,S=0,h=0;v<n;++v)for(var m=0,g=$n(e,p+1,p=Cm(S=s[v])),k=e;m<w;++m)(k=jm(S>0?y[m]+" "+g:B(g,/&\f/g,y[m])))&&(l[h++]=k);return ea(e,t,r,o===0?Xs:a,l,u,c,f)}function Fw(e,t,r,n){return ea(e,t,r,bm,gc(Rw()),$n(e,2,-2),0,n)}function Wd(e,t,r,n,o){return ea(e,t,r,mc,$n(e,0,n),$n(e,n+1,-1),n,o)}function $m(e,t,r){switch(Tw(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return bo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+bo+e+ee+e+e;case 5936:switch(xe(e,t+11)){case 114:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+ee+e+e;case 6165:return K+e+ee+"flex-"+e+e;case 5187:return K+e+B(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return K+e+ee+"flex-item-"+B(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":ee+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return K+e+ee+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+ee+B(e,"shrink","negative")+e;case 5292:return K+e+ee+B(e,"basis","preferred-size")+e;case 6060:return K+"box-"+B(e,"-grow","")+K+e+ee+B(e,"grow","positive")+e;case 4554:return K+B(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return ee+"grid-column-align"+$n(e,t)+e;break;case 2592:case 3360:return ee+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Nt(n.props,/grid-\w+-end/)})?~Xi(e+(r=r[t].value),"span",0)?e:ee+B(e,"-start","")+e+ee+"grid-row-span:"+(~Xi(r,"span",0)?Nt(r,/\d+/):+Nt(r,/\d+/)-+Nt(e,/\d+/))+";":ee+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Nt(n.props,/grid-\w+-start/)})?e:ee+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+bo+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xi(e,"stretch",0)?$m(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,l,u){return ee+o+":"+i+u+(s?ee+o+"-span:"+(a?l:+l-+i)+u:"")+e});case 4949:if(xe(e,t+6)===121)return B(e,":",":"+K)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(xe(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+ee+"$2box$3")+e;case 100:return B(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Ps(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Mw(e,t,r,n){switch(e.type){case Pw:if(e.children.length)break;case jw:case mc:return e.return=e.return||e.value;case bm:return"";case Em:return e.return=e.value+"{"+Ps(e.children,n)+"}";case Xs:if(!jt(e.value=e.props.join(",")))return""}return jt(r=Ps(e.children,n))?e.return=e.value+"{"+r+"}":""}function Bw(e){var t=Pm(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function Ww(e){return function(t){t.root||(t=t.return)&&e(t)}}function qw(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case mc:e.return=$m(e.value,e.length,r);return;case Em:return Ps([Yt(e,{value:B(e.value,"@","@"+K)})],n);case Xs:if(e.length)return $w(r=e.props,function(o){switch(Nt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(Yt(e,{props:[B(o,/:(read-\w+)/,":"+bo+"$1")]})),Jr(Yt(e,{props:[o]})),Kl(e,{props:Md(r,n)});break;case"::placeholder":Jr(Yt(e,{props:[B(o,/:(plac\w+)/,":"+K+"input-$1")]})),Jr(Yt(e,{props:[B(o,/:(plac\w+)/,":"+bo+"$1")]})),Jr(Yt(e,{props:[B(o,/:(plac\w+)/,ee+"input-$1")]})),Jr(Yt(e,{props:[o]})),Kl(e,{props:Md(r,n)});break}return""})}}var Hw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},An=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",Rm="active",Am="data-styled-version",ra="6.1.19",vc=`/*!sc*/
`,Ts=typeof window<"u"&&typeof document<"u",Vw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),Kw={},na=Object.freeze([]),On=Object.freeze({});function Om(e,t,r){return r===void 0&&(r=On),e.theme!==r.theme&&e.theme||t||r.theme}var Im=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jw=/(^-|-$)/g;function qd(e){return e.replace(Gw,"-").replace(Jw,"")}var Qw=/(a)(d)/gi,bi=52,Hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ql(e){var t,r="";for(t=Math.abs(e);t>bi;t=t/bi|0)r=Hd(t%bi)+r;return(Hd(t%bi)+r).replace(Qw,"$1-$2")}var Fa,Lm=5381,gn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Nm=function(e){return gn(Lm,e)};function zm(e){return Ql(Nm(e)>>>0)}function Yw(e){return e.displayName||e.name||"Component"}function Ma(e){return typeof e=="string"&&!0}var Dm=typeof Symbol=="function"&&Symbol.for,Um=Dm?Symbol.for("react.memo"):60115,Xw=Dm?Symbol.for("react.forward_ref"):60112,Zw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ex={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tx=((Fa={})[Xw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fa[Um]=Fm,Fa);function Vd(e){return("type"in(t=e)&&t.type.$$typeof)===Um?Fm:"$$typeof"in e?tx[e.$$typeof]:Zw;var t}var rx=Object.defineProperty,nx=Object.getOwnPropertyNames,Kd=Object.getOwnPropertySymbols,ox=Object.getOwnPropertyDescriptor,ix=Object.getPrototypeOf,Gd=Object.prototype;function Mm(e,t,r){if(typeof t!="string"){if(Gd){var n=ix(t);n&&n!==Gd&&Mm(e,n,r)}var o=nx(t);Kd&&(o=o.concat(Kd(t)));for(var i=Vd(e),s=Vd(t),a=0;a<o.length;++a){var l=o[a];if(!(l in ex||r&&r[l]||s&&l in s||i&&l in i)){var u=ox(t,l);try{rx(e,l,u)}catch{}}}}return e}function In(e){return typeof e=="function"}function yc(e){return typeof e=="object"&&"styledComponentId"in e}function Lr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Yl(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Ko(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xl(e,t,r){if(r===void 0&&(r=!1),!r&&!Ko(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Xl(e[n],t[n]);else if(Ko(t))for(var n in t)e[n]=Xl(e[n],t[n]);return e}function wc(e,t){Object.defineProperty(e,"toString",{value:t})}function ri(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var sx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw ri(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(vc);return r},e}(),ts=new Map,$s=new Map,rs=1,Ei=function(e){if(ts.has(e))return ts.get(e);for(;$s.has(rs);)rs++;var t=rs++;return ts.set(e,t),$s.set(t,e),t},ax=function(e,t){rs=t+1,ts.set(e,t),$s.set(t,e)},lx="style[".concat(An,"][").concat(Am,'="').concat(ra,'"]'),ux=new RegExp("^".concat(An,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cx=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},dx=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(vc),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var l=a.match(ux);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(ax(c,u),cx(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Jd=function(e){for(var t=document.querySelectorAll(lx),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(An)!==Rm&&(dx(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function fx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bm=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(An,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(An,Rm),n.setAttribute(Am,ra);var s=fx();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},hx=function(){function e(t){this.element=Bm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw ri(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),px=function(){function e(t){this.element=Bm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qd=Ts,gx={isServer:!Ts,useCSSOMInjection:!Vw},Rs=function(){function e(t,r,n){t===void 0&&(t=On),r===void 0&&(r={});var o=this;this.options=Re(Re({},gx),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Ts&&Qd&&(Qd=!1,Jd(this)),wc(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",u=function(f){var p=function(h){return $s.get(h)}(f);if(p===void 0)return"continue";var y=i.names.get(p),w=s.getGroup(f);if(y===void 0||!y.size||w.length===0)return"continue";var v="".concat(An,".g").concat(f,'[id="').concat(p,'"]'),S="";y!==void 0&&y.forEach(function(h){h.length>0&&(S+="".concat(h,","))}),l+="".concat(w).concat(v,'{content:"').concat(S,'"}').concat(vc)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return Ei(t)},e.prototype.rehydrate=function(){!this.server&&Ts&&Jd(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Re(Re({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new mx(o):n?new hx(o):new px(o)}(this.options),new sx(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Ei(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Ei(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ei(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vx=/&/g,yx=/^\s*\/\/.*$/gm;function Wm(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Wm(r.children,t)),r})}function wx(e){var t,r,n,o=On,i=o.options,s=i===void 0?On:i,a=o.plugins,l=a===void 0?na:a,u=function(p,y,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):p},c=l.slice();c.push(function(p){p.type===Xs&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(vx,r).replace(n,u))}),s.prefix&&c.push(qw),c.push(Mw);var f=function(p,y,w,v){y===void 0&&(y=""),w===void 0&&(w=""),v===void 0&&(v="&"),t=v,r=y,n=new RegExp("\\".concat(r,"\\b"),"g");var S=p.replace(yx,""),h=Uw(w||y?"".concat(w," ").concat(y," { ").concat(S," }"):S);s.namespace&&(h=Wm(h,s.namespace));var m=[];return Ps(h,Bw(c.concat(Ww(function(g){return m.push(g)})))),m};return f.hash=l.length?l.reduce(function(p,y){return y.name||ri(15),gn(p,y.name)},Lm).toString():"",f}var xx=new Rs,Zl=wx(),qm=Tt.createContext({shouldForwardProp:void 0,styleSheet:xx,stylis:Zl});qm.Consumer;Tt.createContext(void 0);function eu(){return x.useContext(qm)}var _x=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Zl);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,wc(this,function(){throw ri(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zl),this.name+t.hash},e}(),kx=function(e){return e>="A"&&e<="Z"};function Yd(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;kx(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Hm=function(e){return e==null||e===!1||e===""},Vm=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Hm(i)&&(Array.isArray(i)&&i.isCss||In(i)?n.push("".concat(Yd(o),":"),i,";"):Ko(i)?n.push.apply(n,Vo(Vo(["".concat(o," {")],Vm(i),!1),["}"],!1)):n.push("".concat(Yd(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Hw||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function pr(e,t,r,n){if(Hm(e))return[];if(yc(e))return[".".concat(e.styledComponentId)];if(In(e)){if(!In(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return pr(o,t,r,n)}var i;return e instanceof _x?r?(e.inject(r,n),[e.getName(n)]):[e]:Ko(e)?Vm(e):Array.isArray(e)?Array.prototype.concat.apply(na,e.map(function(s){return pr(s,t,r,n)})):[e.toString()]}function Km(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(In(r)&&!yc(r))return!1}return!0}var Sx=Nm(ra),bx=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Km(t),this.componentId=r,this.baseHash=gn(Sx,r),this.baseStyle=n,Rs.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Lr(o,this.staticRulesId);else{var i=Yl(pr(this.rules,t,r,n)),s=Ql(gn(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=Lr(o,s),this.staticRulesId=s}else{for(var l=gn(this.baseHash,n.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var p=Yl(pr(f,t,r,n));l=gn(l,p+c),u+=p}}if(u){var y=Ql(l>>>0);r.hasNameForId(this.componentId,y)||r.insertRules(this.componentId,y,n(u,".".concat(y),void 0,this.componentId)),o=Lr(o,y)}}return o},e}(),xc=Tt.createContext(void 0);xc.Consumer;var Ba={};function Ex(e,t,r){var n=yc(e),o=e,i=!Ma(e),s=t.attrs,a=s===void 0?na:s,l=t.componentId,u=l===void 0?function(k,b){var E=typeof k!="string"?"sc":qd(k);Ba[E]=(Ba[E]||0)+1;var C="".concat(E,"-").concat(zm(ra+E+Ba[E]));return b?"".concat(b,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(k){return Ma(k)?"styled.".concat(k):"Styled(".concat(Yw(k),")")}(e):c,p=t.displayName&&t.componentId?"".concat(qd(t.displayName),"-").concat(t.componentId):t.componentId||u,y=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(n&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;w=function(k,b){return v(k,b)&&S(k,b)}}else w=v}var h=new bx(r,p,n?o.componentStyle:void 0);function m(k,b){return function(E,C,T){var L=E.attrs,$=E.componentStyle,H=E.defaultProps,R=E.foldedComponentIds,J=E.styledComponentId,fe=E.target,ae=Tt.useContext(xc),ce=eu(),ke=E.shouldForwardProp||ce.shouldForwardProp,j=Om(C,ae,H)||On,O=function(He,Se,Ve){for(var F,X=Re(Re({},Se),{className:void 0,theme:Ve}),Ke=0;Ke<He.length;Ke+=1){var At=In(F=He[Ke])?F(X):F;for(var ct in At)X[ct]=ct==="className"?Lr(X[ct],At[ct]):ct==="style"?Re(Re({},X[ct]),At[ct]):At[ct]}return Se.className&&(X.className=Lr(X.className,Se.className)),X}(L,C,j),N=O.as||fe,z={};for(var D in O)O[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&O.theme===j||(D==="forwardedAs"?z.as=O.forwardedAs:ke&&!ke(D,N)||(z[D]=O[D]));var Oe=function(He,Se){var Ve=eu(),F=He.generateAndInjectStyles(Se,Ve.styleSheet,Ve.stylis);return F}($,O),je=Lr(R,J);return Oe&&(je+=" "+Oe),O.className&&(je+=" "+O.className),z[Ma(N)&&!Im.has(N)?"class":"className"]=je,T&&(z.ref=T),x.createElement(N,z)}(g,k,b)}m.displayName=f;var g=Tt.forwardRef(m);return g.attrs=y,g.componentStyle=h,g.displayName=f,g.shouldForwardProp=w,g.foldedComponentIds=n?Lr(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=p,g.target=n?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(b){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var T=0,L=E;T<L.length;T++)Xl(b,L[T],!0);return b}({},o.defaultProps,k):k}}),wc(g,function(){return".".concat(g.styledComponentId)}),i&&Mm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Xd(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Zd=function(e){return Object.assign(e,{isCss:!0})};function Gm(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(In(e)||Ko(e))return Zd(pr(Xd(na,Vo([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?pr(n):Zd(pr(Xd(n,t)))}function tu(e,t,r){if(r===void 0&&(r=On),!t)throw ri(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,Gm.apply(void 0,Vo([o],i,!1)))};return n.attrs=function(o){return tu(e,t,Re(Re({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return tu(e,t,Re(Re({},r),o))},n}var Jm=function(e){return tu(Ex,e)},_=Jm;Im.forEach(function(e){_[e]=Jm(e)});var Cx=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Km(t),Rs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Yl(pr(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Rs.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function jx(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Gm.apply(void 0,Vo([e],t,!1)),o="sc-global-".concat(zm(JSON.stringify(n))),i=new Cx(n,o),s=function(l){var u=eu(),c=Tt.useContext(xc),f=Tt.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),Tt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,p){if(i.isStatic)i.renderStyles(l,Kw,c,p);else{var y=Re(Re({},u),{theme:Om(u,f,s.defaultProps)});i.renderStyles(l,y,c,p)}}return Tt.memo(s)}const Px=jx`
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
`,Tx=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>vr(()=>Promise.resolve().then(()=>qn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class _c extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class $x extends _c{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class ef extends _c{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class tf extends _c{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var ru;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(ru||(ru={}));var Rx=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class Ax{constructor(t,{headers:r={},customFetch:n,region:o=ru.Any}={}){this.url=t,this.headers=r,this.region=o,this.fetch=Tx(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return Rx(this,void 0,void 0,function*(){try{const{headers:o,method:i,body:s}=r;let a={},{region:l}=r;l||(l=this.region);const u=new URL(`${this.url}/${t}`);l&&l!=="any"&&(a["x-region"]=l,u.searchParams.set("forceFunctionRegion",l));let c;s&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",c=s):typeof s=="string"?(a["Content-Type"]="text/plain",c=s):typeof FormData<"u"&&s instanceof FormData?c=s:(a["Content-Type"]="application/json",c=JSON.stringify(s)));const f=yield this.fetch(u.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),o),body:c}).catch(v=>{throw new $x(v)}),p=f.headers.get("x-relay-error");if(p&&p==="true")throw new ef(f);if(!f.ok)throw new tf(f);let y=((n=f.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),w;return y==="application/json"?w=yield f.json():y==="application/octet-stream"?w=yield f.blob():y==="text/event-stream"?w=f:y==="multipart/form-data"?w=yield f.formData():w=yield f.text(),{data:w,error:null,response:f}}catch(o){return{data:null,error:o,response:o instanceof tf||o instanceof ef?o.context:void 0}}})}}var Fe={},kc={},oa={},ni={},ia={},sa={},Ox=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},Ln=Ox();const Ix=Ln.fetch,Qm=Ln.fetch.bind(Ln),Ym=Ln.Headers,Lx=Ln.Request,Nx=Ln.Response,qn=Object.freeze(Object.defineProperty({__proto__:null,Headers:Ym,Request:Lx,Response:Nx,default:Qm,fetch:Ix},Symbol.toStringTag,{value:"Module"})),zx=$g(qn);var aa={};Object.defineProperty(aa,"__esModule",{value:!0});let Dx=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};aa.default=Dx;var Xm=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sa,"__esModule",{value:!0});const Ux=Xm(zx),Fx=Xm(aa);let Mx=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=Ux.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let o=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var s,a,l;let u=null,c=null,f=null,p=i.status,y=i.statusText;if(i.ok){if(this.method!=="HEAD"){const h=await i.text();h===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?c=h:c=JSON.parse(h))}const v=(s=this.headers.Prefer)===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),S=(a=i.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");v&&S&&S.length>1&&(f=parseInt(S[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(c)&&(c.length>1?(u={code:"PGRST116",details:`Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},c=null,f=null,p=406,y="Not Acceptable"):c.length===1?c=c[0]:c=null)}else{const v=await i.text();try{u=JSON.parse(v),Array.isArray(u)&&i.status===404&&(c=[],u=null,p=200,y="OK")}catch{i.status===404&&v===""?(p=204,y="No Content"):u={message:v}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,p=200,y="OK"),u&&this.shouldThrowOnError)throw new Fx.default(u)}return{error:u,data:c,count:f,status:p,statusText:y}});return this.shouldThrowOnError||(o=o.catch(i=>{var s,a,l;return{error:{message:`${(s=i==null?void 0:i.name)!==null&&s!==void 0?s:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),o.then(t,r)}returns(){return this}overrideTypes(){return this}};sa.default=Mx;var Bx=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ia,"__esModule",{value:!0});const Wx=Bx(sa);let qx=class extends Wx.default{select(t){let r=!1;const n=(t??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:o,referencedTable:i=o}={}){const s=i?`${i}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const o=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(o,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:o=n}={}){const i=typeof o>"u"?"offset":`${o}.offset`,s=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(s,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:o=!1,wal:i=!1,format:s="text"}={}){var a;const l=[t?"analyze":null,r?"verbose":null,n?"settings":null,o?"buffers":null,i?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${s}; for="${u}"; options=${l};`,s==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};ia.default=qx;var Hx=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ni,"__esModule",{value:!0});const Vx=Hx(ia);let Kx=class extends Vx.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:o}={}){let i="";o==="plain"?i="pl":o==="phrase"?i="ph":o==="websearch"&&(i="w");const s=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${i}fts${s}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const o=n?`${n}.or`:"or";return this.url.searchParams.append(o,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};ni.default=Kx;var Gx=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oa,"__esModule",{value:!0});const no=Gx(ni);let Jx=class{constructor(t,{headers:r={},schema:n,fetch:o}){this.url=t,this.headers=r,this.schema=n,this.fetch=o}select(t,{head:r=!1,count:n}={}){const o=r?"HEAD":"GET";let i=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!i?"":(a==='"'&&(i=!i),a)).join("");return this.url.searchParams.set("select",s),n&&(this.headers.Prefer=`count=${n}`),new no.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const o="POST",i=[];if(this.headers.Prefer&&i.push(this.headers.Prefer),r&&i.push(`count=${r}`),n||i.push("missing=default"),this.headers.Prefer=i.join(","),Array.isArray(t)){const s=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(s.length>0){const a=[...new Set(s)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new no.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:o,defaultToNull:i=!0}={}){const s="POST",a=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&a.push(this.headers.Prefer),o&&a.push(`count=${o}`),i||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((u,c)=>u.concat(Object.keys(c)),[]);if(l.length>0){const u=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",u.join(","))}}return new no.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",o=[];return this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),this.headers.Prefer=o.join(","),new no.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new no.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};oa.default=Jx;var la={},ua={};Object.defineProperty(ua,"__esModule",{value:!0});ua.version=void 0;ua.version="0.0.0-automated";Object.defineProperty(la,"__esModule",{value:!0});la.DEFAULT_HEADERS=void 0;const Qx=ua;la.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${Qx.version}`};var Zm=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kc,"__esModule",{value:!0});const Yx=Zm(oa),Xx=Zm(ni),Zx=la;let e1=class eg{constructor(t,{headers:r={},schema:n,fetch:o}={}){this.url=t,this.headers=Object.assign(Object.assign({},Zx.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=o}from(t){const r=new URL(`${this.url}/${t}`);return new Yx.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new eg(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:o=!1,count:i}={}){let s;const a=new URL(`${this.url}/rpc/${t}`);let l;n||o?(s=n?"HEAD":"GET",Object.entries(r).filter(([c,f])=>f!==void 0).map(([c,f])=>[c,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([c,f])=>{a.searchParams.append(c,f)})):(s="POST",l=r);const u=Object.assign({},this.headers);return i&&(u.Prefer=`count=${i}`),new Xx.default({method:s,url:a,headers:u,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};kc.default=e1;var Hn=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.PostgrestError=Fe.PostgrestBuilder=Fe.PostgrestTransformBuilder=Fe.PostgrestFilterBuilder=Fe.PostgrestQueryBuilder=Fe.PostgrestClient=void 0;const tg=Hn(kc);Fe.PostgrestClient=tg.default;const rg=Hn(oa);Fe.PostgrestQueryBuilder=rg.default;const ng=Hn(ni);Fe.PostgrestFilterBuilder=ng.default;const og=Hn(ia);Fe.PostgrestTransformBuilder=og.default;const ig=Hn(sa);Fe.PostgrestBuilder=ig.default;const sg=Hn(aa);Fe.PostgrestError=sg.default;var t1=Fe.default={PostgrestClient:tg.default,PostgrestQueryBuilder:rg.default,PostgrestFilterBuilder:ng.default,PostgrestTransformBuilder:og.default,PostgrestBuilder:ig.default,PostgrestError:sg.default};const{PostgrestClient:r1,PostgrestQueryBuilder:_E,PostgrestFilterBuilder:kE,PostgrestTransformBuilder:SE,PostgrestBuilder:bE,PostgrestError:EE}=t1;class n1{static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"&&process.versions&&process.versions.node){const r=parseInt(process.versions.node.split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const o1="2.15.1",i1=`realtime-js/${o1}`,s1="1.0.0",nu=1e4,a1=1e3,l1=100;var Eo;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(Eo||(Eo={}));var me;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(me||(me={}));var mt;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(mt||(mt={}));var ou;(function(e){e.websocket="websocket"})(ou||(ou={}));var Rr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(Rr||(Rr={}));class u1{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const o=r.getUint8(1),i=r.getUint8(2);let s=this.HEADER_LENGTH+2;const a=n.decode(t.slice(s,s+o));s=s+o;const l=n.decode(t.slice(s,s+i));s=s+i;const u=JSON.parse(n.decode(t.slice(s,t.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class ag{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Q;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Q||(Q={}));const rf=(e,t,r={})=>{var n;const o=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((i,s)=>(i[s]=c1(s,e,t,o),i),{})},c1=(e,t,r,n)=>{const o=t.find(a=>a.name===e),i=o==null?void 0:o.type,s=r[e];return i&&!n.includes(i)?lg(i,s):iu(s)},lg=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return p1(t,r)}switch(e){case Q.bool:return d1(t);case Q.float4:case Q.float8:case Q.int2:case Q.int4:case Q.int8:case Q.numeric:case Q.oid:return f1(t);case Q.json:case Q.jsonb:return h1(t);case Q.timestamp:return m1(t);case Q.abstime:case Q.date:case Q.daterange:case Q.int4range:case Q.int8range:case Q.money:case Q.reltime:case Q.text:case Q.time:case Q.timestamptz:case Q.timetz:case Q.tsrange:case Q.tstzrange:return iu(t);default:return iu(t)}},iu=e=>e,d1=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},f1=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},h1=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},p1=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let i;const s=e.slice(1,r);try{i=JSON.parse("["+s+"]")}catch{i=s?s.split(","):[]}return i.map(a=>lg(t,a))}return e},m1=e=>typeof e=="string"?e.replace(" ","T"):e,ug=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"};class Wa{constructor(t,r,n={},o=nu){this.channel=t,this.event=r,this.payload=n,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var nf;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(nf||(nf={}));class Co{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Co.syncState(this.state,o,i,s),this.pendingDiffs.forEach(l=>{this.state=Co.syncDiff(this.state,l,i,s)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Co.syncDiff(this.state,o,i,s),a())}),this.onJoin((o,i,s)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:i,newPresences:s})}),this.onLeave((o,i,s)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:i,leftPresences:s})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,o){const i=this.cloneDeep(t),s=this.transformState(r),a={},l={};return this.map(i,(u,c)=>{s[u]||(l[u]=c)}),this.map(s,(u,c)=>{const f=i[u];if(f){const p=c.map(S=>S.presence_ref),y=f.map(S=>S.presence_ref),w=c.filter(S=>y.indexOf(S.presence_ref)<0),v=f.filter(S=>p.indexOf(S.presence_ref)<0);w.length>0&&(a[u]=w),v.length>0&&(l[u]=v)}else a[u]=c}),this.syncDiff(i,{joins:a,leaves:l},n,o)}static syncDiff(t,r,n,o){const{joins:i,leaves:s}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),o||(o=()=>{}),this.map(i,(a,l)=>{var u;const c=(u=t[a])!==null&&u!==void 0?u:[];if(t[a]=this.cloneDeep(l),c.length>0){const f=t[a].map(y=>y.presence_ref),p=c.filter(y=>f.indexOf(y.presence_ref)<0);t[a].unshift(...p)}n(a,c,l)}),this.map(s,(a,l)=>{let u=t[a];if(!u)return;const c=l.map(f=>f.presence_ref);u=u.filter(f=>c.indexOf(f.presence_ref)<0),t[a]=u,o(a,u,l),u.length===0&&delete t[a]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const o=t[n];return"metas"in o?r[n]=o.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):r[n]=o,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var of;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(of||(of={}));var jo;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(jo||(jo={}));var zt;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(zt||(zt={}));class Sc{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=me.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new Wa(this,mt.join,this.params,this.timeout),this.rejoinTimer=new ag(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=me.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=me.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=me.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=me.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=me.errored,this.rejoinTimer.scheduleTimeout())}),this._on(mt.reply,{},(o,i)=>{this._trigger(this._replyEventName(i),o)}),this.presence=new Co(this),this.broadcastEndpointURL=ug(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,o;if(this.socket.isConnected()||this.socket.connect(),this.state==me.closed){const{config:{broadcast:i,presence:s,private:a}}=this.params,l=(o=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(p=>p.filter))!==null&&o!==void 0?o:[],u=!!this.bindings[jo.PRESENCE]&&this.bindings[jo.PRESENCE].length>0,c={},f={broadcast:i,presence:Object.assign(Object.assign({},s),{enabled:u}),postgres_changes:l,private:a};this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this._onError(p=>t==null?void 0:t(zt.CHANNEL_ERROR,p)),this._onClose(()=>t==null?void 0:t(zt.CLOSED)),this.updateJoinPayload(Object.assign({config:f},c)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:p})=>{var y;if(this.socket.setAuth(),p===void 0){t==null||t(zt.SUBSCRIBED);return}else{const w=this.bindings.postgres_changes,v=(y=w==null?void 0:w.length)!==null&&y!==void 0?y:0,S=[];for(let h=0;h<v;h++){const m=w[h],{filter:{event:g,schema:k,table:b,filter:E}}=m,C=p&&p[h];if(C&&C.event===g&&C.schema===k&&C.table===b&&C.filter===E)S.push(Object.assign(Object.assign({},m),{id:C.id}));else{this.unsubscribe(),this.state=me.errored,t==null||t(zt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=S,t&&t(zt.SUBSCRIBED);return}}).receive("error",p=>{this.state=me.errored,t==null||t(zt.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(p).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(zt.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===me.joined&&t===jo.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(t,r,n)}async send(t,r={}){var n,o;if(!this._canPush()&&t.type==="broadcast"){const{event:i,payload:s}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:s,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((o=u.body)===null||o===void 0?void 0:o.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var s,a,l;const u=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(s=this.params)===null||s===void 0?void 0:s.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),u.receive("ok",()=>i("ok")),u.receive("error",()=>i("error")),u.receive("timeout",()=>i("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=me.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(mt.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(o=>{n=new Wa(this,mt.leave,{},t),n.receive("ok",()=>{r(),o("ok")}).receive("timeout",()=>{r(),o("timed out")}).receive("error",()=>{o("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=me.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const o=new AbortController,i=setTimeout(()=>o.abort(),n),s=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(i),s}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new Wa(this,t,r,n);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>l1){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var o,i;const s=t.toLocaleLowerCase(),{close:a,error:l,leave:u,join:c}=mt;if(n&&[a,l,u,c].indexOf(s)>=0&&n!==this._joinRef())return;let p=this._onMessage(s,r,n);if(r&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(y=>{var w,v,S;return((w=y.filter)===null||w===void 0?void 0:w.event)==="*"||((S=(v=y.filter)===null||v===void 0?void 0:v.event)===null||S===void 0?void 0:S.toLocaleLowerCase())===s}).map(y=>y.callback(p,n)):(i=this.bindings[s])===null||i===void 0||i.filter(y=>{var w,v,S,h,m,g;if(["broadcast","presence","postgres_changes"].includes(s))if("id"in y){const k=y.id,b=(w=y.filter)===null||w===void 0?void 0:w.event;return k&&((v=r.ids)===null||v===void 0?void 0:v.includes(k))&&(b==="*"||(b==null?void 0:b.toLocaleLowerCase())===((S=r.data)===null||S===void 0?void 0:S.type.toLocaleLowerCase()))}else{const k=(m=(h=y==null?void 0:y.filter)===null||h===void 0?void 0:h.event)===null||m===void 0?void 0:m.toLocaleLowerCase();return k==="*"||k===((g=r==null?void 0:r.event)===null||g===void 0?void 0:g.toLocaleLowerCase())}else return y.type.toLocaleLowerCase()===s}).map(y=>{if(typeof p=="object"&&"ids"in p){const w=p.data,{schema:v,table:S,commit_timestamp:h,type:m,errors:g}=w;p=Object.assign(Object.assign({},{schema:v,table:S,commit_timestamp:h,eventType:m,new:{},old:{},errors:g}),this._getPayloadRecords(w))}y.callback(p,n)})}_isClosed(){return this.state===me.closed}_isJoined(){return this.state===me.joined}_isJoining(){return this.state===me.joining}_isLeaving(){return this.state===me.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const o=t.toLocaleLowerCase(),i={type:o,filter:r,callback:n};return this.bindings[o]?this.bindings[o].push(i):this.bindings[o]=[i],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(o=>{var i;return!(((i=o.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===n&&Sc.isEqual(o.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(mt.close,{},t)}_onError(t){this._on(mt.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=me.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=rf(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=rf(t.columns,t.old_record)),r}}const sf=()=>{},Ci={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},g1=[1e3,2e3,5e3,1e4],v1=1e4,y1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class w1{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=nu,this.transport=null,this.heartbeatIntervalMs=Ci.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=sf,this.ref=0,this.reconnectTimer=null,this.logger=sf,this.conn=null,this.sendBuffer=[],this.serializer=new u1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...s)=>vr(()=>Promise.resolve().then(()=>qn),void 0).then(({default:a})=>a(...s)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):i=fetch,(...s)=>i(...s)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${ou.websocket}`,this.httpEndpoint=ug(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=n1.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:s1}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},t?this.conn.close(t,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Eo.connecting:return Rr.Connecting;case Eo.open:return Rr.Open;case Eo.closing:return Rr.Closing;default:return Rr.Closed}}isConnected(){return this.connectionState()===Rr.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,o=this.getChannels().find(i=>i.topic===n);if(o)return o;{const i=new Sc(`realtime:${t}`,r,this);return this.channels.push(i),i}}push(t){const{topic:r,event:n,payload:o,ref:i}=t,s=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${i})`,o),this.isConnected()?s():this.sendBuffer.push(s)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(a1,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},Ci.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{r.topic==="phoenix"&&r.event==="phx_reply"&&this.heartbeatCallback(r.payload.status==="ok"?"ok":"error"),r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:o,payload:i,ref:s}=r,a=s?`(${s})`:"",l=i.status||"";this.log("receive",`${l} ${n} ${o} ${a}`.trim(),i),this.channels.filter(u=>u._isMember(n)).forEach(u=>u._trigger(o,i,s)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(mt.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",o=new URLSearchParams(r);return`${t}${n}${o}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([y1],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r;t?r=t:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const o={access_token:r,version:i1};r&&n.updateJoinPayload(o),n.joinedOnce&&n._isJoined()&&n._push(mt.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new ag(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Ci.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,o,i,s,a,l,u;if(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:nu,this.heartbeatIntervalMs=(o=t==null?void 0:t.heartbeatIntervalMs)!==null&&o!==void 0?o:Ci.HEARTBEAT_INTERVAL,this.worker=(i=t==null?void 0:t.worker)!==null&&i!==void 0?i:!1,this.accessToken=(s=t==null?void 0:t.accessToken)!==null&&s!==void 0?s:null,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(a=t==null?void 0:t.reconnectAfterMs)!==null&&a!==void 0?a:c=>g1[c-1]||v1,this.encode=(l=t==null?void 0:t.encode)!==null&&l!==void 0?l:(c,f)=>f(JSON.stringify(c)),this.decode=(u=t==null?void 0:t.decode)!==null&&u!==void 0?u:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}class bc extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function ge(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class x1 extends bc{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class su extends bc{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var _1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const cg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>vr(()=>Promise.resolve().then(()=>qn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},k1=()=>_1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield vr(()=>Promise.resolve().then(()=>qn),void 0)).Response:Response}),au=e=>{if(Array.isArray(e))return e.map(r=>au(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const o=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));t[o]=au(n)}),t},S1=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var Vr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const qa=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),b1=(e,t,r)=>Vr(void 0,void 0,void 0,function*(){const n=yield k1();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(o=>{const i=e.status||500,s=(o==null?void 0:o.statusCode)||i+"";t(new x1(qa(o),i,s))}).catch(o=>{t(new su(qa(o),o))}):t(new su(qa(e),e))}),E1=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?o:(S1(n)?(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),o.body=JSON.stringify(n)):o.body=n,t!=null&&t.duplex&&(o.duplex=t.duplex),Object.assign(Object.assign({},o),r))};function oi(e,t,r,n,o,i){return Vr(this,void 0,void 0,function*(){return new Promise((s,a)=>{e(r,E1(t,n,o,i)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>s(l)).catch(l=>b1(l,a,n))})})}function As(e,t,r,n){return Vr(this,void 0,void 0,function*(){return oi(e,"GET",t,r,n)})}function Ct(e,t,r,n,o){return Vr(this,void 0,void 0,function*(){return oi(e,"POST",t,n,o,r)})}function lu(e,t,r,n,o){return Vr(this,void 0,void 0,function*(){return oi(e,"PUT",t,n,o,r)})}function C1(e,t,r,n){return Vr(this,void 0,void 0,function*(){return oi(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function dg(e,t,r,n,o){return Vr(this,void 0,void 0,function*(){return oi(e,"DELETE",t,n,o,r)})}var Ie=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const j1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},af={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class P1{constructor(t,r={},n,o){this.url=t,this.headers=r,this.bucketId=n,this.fetch=cg(o)}uploadOrUpdate(t,r,n,o){return Ie(this,void 0,void 0,function*(){try{let i;const s=Object.assign(Object.assign({},af),o);let a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(s.upsert)});const l=s.metadata;typeof Blob<"u"&&n instanceof Blob?(i=new FormData,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",n)):typeof FormData<"u"&&n instanceof FormData?(i=n,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=n,a["cache-control"]=`max-age=${s.cacheControl}`,a["content-type"]=s.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(a=Object.assign(Object.assign({},a),o.headers));const u=this._removeEmptyFolders(r),c=this._getFinalPath(u),f=yield(t=="PUT"?lu:Ct)(this.fetch,`${this.url}/object/${c}`,i,Object.assign({headers:a},s!=null&&s.duplex?{duplex:s.duplex}:{}));return{data:{path:u,id:f.Id,fullPath:f.Key},error:null}}catch(i){if(ge(i))return{data:null,error:i};throw i}})}upload(t,r,n){return Ie(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,o){return Ie(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(t),s=this._getFinalPath(i),a=new URL(this.url+`/object/upload/sign/${s}`);a.searchParams.set("token",r);try{let l;const u=Object.assign({upsert:af.upsert},o),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",u.cacheControl)):(l=n,c["cache-control"]=`max-age=${u.cacheControl}`,c["content-type"]=u.contentType);const f=yield lu(this.fetch,a.toString(),l,{headers:c});return{data:{path:i,fullPath:f.Key},error:null}}catch(l){if(ge(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,r){return Ie(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const o=Object.assign({},this.headers);r!=null&&r.upsert&&(o["x-upsert"]="true");const i=yield Ct(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:o}),s=new URL(this.url+i.url),a=s.searchParams.get("token");if(!a)throw new bc("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:a},error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}update(t,r,n){return Ie(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return Ie(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}copy(t,r,n){return Ie(this,void 0,void 0,function*(){try{return{data:{path:(yield Ct(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}createSignedUrl(t,r,n){return Ie(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),i=yield Ct(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${s}`)},{data:i,error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}createSignedUrls(t,r,n){return Ie(this,void 0,void 0,function*(){try{const o=yield Ct(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),i=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:o.map(s=>Object.assign(Object.assign({},s),{signedUrl:s.signedURL?encodeURI(`${this.url}${s.signedURL}${i}`):null})),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}download(t,r){return Ie(this,void 0,void 0,function*(){const o=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),s=i?`?${i}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield As(this.fetch,`${this.url}/${o}/${a}${s}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(ge(a))return{data:null,error:a};throw a}})}info(t){return Ie(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield As(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:au(n),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}exists(t){return Ie(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield C1(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(ge(n)&&n instanceof su){const o=n.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),o=[],i=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";i!==""&&o.push(i);const a=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});l!==""&&o.push(l);let u=o.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${u}`)}}}remove(t){return Ie(this,void 0,void 0,function*(){try{return{data:yield dg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}list(t,r,n){return Ie(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},j1),r),{prefix:t||""});return{data:yield Ct(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},n),error:null}}catch(o){if(ge(o))return{data:null,error:o};throw o}})}listV2(t,r){return Ie(this,void 0,void 0,function*(){try{const n=Object.assign({},t);return{data:yield Ct(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const T1="2.11.0",$1={"X-Client-Info":`storage-js/${T1}`};var Qr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class R1{constructor(t,r={},n,o){const i=new URL(t);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href,this.headers=Object.assign(Object.assign({},$1),r),this.fetch=cg(n)}listBuckets(){return Qr(this,void 0,void 0,function*(){try{return{data:yield As(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(ge(t))return{data:null,error:t};throw t}})}getBucket(t){return Qr(this,void 0,void 0,function*(){try{return{data:yield As(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Qr(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Qr(this,void 0,void 0,function*(){try{return{data:yield lu(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ge(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Qr(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Qr(this,void 0,void 0,function*(){try{return{data:yield dg(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(ge(r))return{data:null,error:r};throw r}})}}class A1 extends R1{constructor(t,r={},n,o){super(t,r,n,o)}from(t){return new P1(this.url,this.headers,t,this.fetch)}}const O1="2.55.0";let co="";typeof Deno<"u"?co="deno":typeof document<"u"?co="web":typeof navigator<"u"&&navigator.product==="ReactNative"?co="react-native":co="node";const I1={"X-Client-Info":`supabase-js-${co}/${O1}`},L1={headers:I1},N1={schema:"public"},z1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},D1={};var U1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};const F1=e=>{let t;return e?t=e:typeof fetch>"u"?t=Qm:t=fetch,(...r)=>t(...r)},M1=()=>typeof Headers>"u"?Ym:Headers,B1=(e,t,r)=>{const n=F1(r),o=M1();return(i,s)=>U1(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let u=new o(s==null?void 0:s.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),n(i,Object.assign(Object.assign({},s),{headers:u}))})};var W1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};function q1(e){return e.endsWith("/")?e:e+"/"}function H1(e,t){var r,n;const{db:o,auth:i,realtime:s,global:a}=e,{db:l,auth:u,realtime:c,global:f}=t,p={db:Object.assign(Object.assign({},l),o),auth:Object.assign(Object.assign({},u),i),realtime:Object.assign(Object.assign({},c),s),storage:{},global:Object.assign(Object.assign(Object.assign({},f),a),{headers:Object.assign(Object.assign({},(r=f==null?void 0:f.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>W1(this,void 0,void 0,function*(){return""})};return e.accessToken?p.accessToken=e.accessToken:delete p.accessToken,p}const fg="2.71.1",tn=30*1e3,uu=3,Ha=uu*tn,V1="http://localhost:9999",K1="supabase.auth.token",G1={"X-Client-Info":`gotrue-js/${fg}`},cu="X-Supabase-Api-Version",hg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},J1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Q1=10*60*1e3;class Ec extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function M(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class Y1 extends Ec{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function X1(e){return M(e)&&e.name==="AuthApiError"}class pg extends Ec{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class kr extends Ec{constructor(t,r,n,o){super(t,n,o),this.name=r,this.status=n}}class Xt extends kr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Z1(e){return M(e)&&e.name==="AuthSessionMissingError"}class ji extends kr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Pi extends kr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Ti extends kr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function e_(e){return M(e)&&e.name==="AuthImplicitGrantRedirectError"}class lf extends kr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class du extends kr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function Va(e){return M(e)&&e.name==="AuthRetryableFetchError"}class uf extends kr{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class fu extends kr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Os="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),cf=` 	
\r=`.split(""),t_=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<cf.length;t+=1)e[cf[t].charCodeAt(0)]=-2;for(let t=0;t<Os.length;t+=1)e[Os[t].charCodeAt(0)]=t;return e})();function df(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Os[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Os[n]),t.queuedBits-=6}}function mg(e,t,r){const n=t_[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function ff(e){const t=[],r=s=>{t.push(String.fromCodePoint(s))},n={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},i=s=>{o_(s,n,r)};for(let s=0;s<e.length;s+=1)mg(e.charCodeAt(s),o,i);return t.join("")}function r_(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function n_(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const o=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}r_(n,t)}}function o_(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function i_(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};for(let o=0;o<e.length;o+=1)mg(e.charCodeAt(o),r,n);return new Uint8Array(t)}function s_(e){const t=[];return n_(e,r=>t.push(r)),new Uint8Array(t)}function a_(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};return e.forEach(o=>df(o,r,n)),df(null,r,n),t.join("")}function l_(e){return Math.round(Date.now()/1e3)+e}function u_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const ft=()=>typeof window<"u"&&typeof document<"u",Sr={tested:!1,writable:!1},gg=()=>{if(!ft())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Sr.tested)return Sr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Sr.tested=!0,Sr.writable=!0}catch{Sr.tested=!0,Sr.writable=!1}return Sr.writable};function c_(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,i)=>{t[i]=o})}catch{}return r.searchParams.forEach((n,o)=>{t[o]=n}),t}const vg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>vr(()=>Promise.resolve().then(()=>qn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},d_=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",rn=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},br=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Qt=async(e,t)=>{await e.removeItem(t)};class ca{constructor(){this.promise=new ca.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}ca.promiseConstructor=Promise;function Ka(e){const t=e.split(".");if(t.length!==3)throw new fu("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!J1.test(t[n]))throw new fu("JWT not in base64url format");return{header:JSON.parse(ff(t[0])),payload:JSON.parse(ff(t[1])),signature:i_(t[2]),raw:{header:t[0],payload:t[1]}}}async function f_(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function h_(e,t){return new Promise((n,o)=>{(async()=>{for(let i=0;i<1/0;i++)try{const s=await e(i);if(!t(i,null,s)){n(s);return}}catch(s){if(!t(i,s)){o(s);return}}})()})}function p_(e){return("0"+e.toString(16)).substr(-2)}function m_(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let o="";for(let i=0;i<56;i++)o+=r.charAt(Math.floor(Math.random()*n));return o}return crypto.getRandomValues(t),Array.from(t,p_).join("")}async function g_(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(n);return Array.from(o).map(i=>String.fromCharCode(i)).join("")}async function v_(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await g_(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Yr(e,t,r=!1){const n=m_();let o=n;r&&(o+="/PASSWORD_RECOVERY"),await rn(e,`${t}-code-verifier`,o);const i=await v_(n);return[i,n===i?"plain":"s256"]}const y_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function w_(e){const t=e.headers.get(cu);if(!t||!t.match(y_))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function x_(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function __(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const k_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Xr(e){if(!k_.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ga(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function hf(e){return JSON.parse(JSON.stringify(e))}var S_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const $r=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),b_=[502,503,504];async function pf(e){var t;if(!d_(e))throw new du($r(e),0);if(b_.includes(e.status))throw new du($r(e),e.status);let r;try{r=await e.json()}catch(i){throw new pg($r(i),i)}let n;const o=w_(e);if(o&&o.getTime()>=hg["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new uf($r(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Xt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,s)=>i&&typeof s=="string",!0))throw new uf($r(r),e.status,r.weak_password.reasons);throw new Y1($r(r),e.status||500,n)}const E_=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(n),Object.assign(Object.assign({},o),r))};async function W(e,t,r,n){var o;const i=Object.assign({},n==null?void 0:n.headers);i[cu]||(i[cu]=hg["2024-01-01"].name),n!=null&&n.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const s=(o=n==null?void 0:n.query)!==null&&o!==void 0?o:{};n!=null&&n.redirectTo&&(s.redirect_to=n.redirectTo);const a=Object.keys(s).length?"?"+new URLSearchParams(s).toString():"",l=await C_(e,t,r+a,{headers:i,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function C_(e,t,r,n,o,i){const s=E_(t,n,o,i);let a;try{a=await e(r,Object.assign({},s))}catch(l){throw console.error(l),new du($r(l),0)}if(a.ok||await pf(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await pf(l)}}function It(e){var t;let r=null;$_(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=l_(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function mf(e){const t=It(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function nr(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function j_(e){return{data:e,error:null}}function P_(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i}=e,s=S_(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i},l=Object.assign({},s);return{data:{properties:a,user:l},error:null}}function T_(e){return e}function $_(e){return e.access_token&&e.refresh_token&&e.expires_in}const Ja=["global","local","others"];var R_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};class A_{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=vg(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=Ja[0]){if(Ja.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ja.join(", ")}`);try{return await W(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(M(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await W(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:nr})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=R_(t,["options"]),o=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(o.new_email=n==null?void 0:n.newEmail,delete o.newEmail),await W(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:P_,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(M(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await W(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:nr})}catch(r){if(M(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,o,i,s,a,l;try{const u={nextPage:null,lastPage:0,total:0},c=await W(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&i!==void 0?i:""},xform:T_});if(c.error)throw c.error;const f=await c.json(),p=(s=c.headers.get("x-total-count"))!==null&&s!==void 0?s:0,y=(l=(a=c.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return y.length>0&&(y.forEach(w=>{const v=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(w.split(";")[1].split("=")[1]);u[`${S}Page`]=v}),u.total=parseInt(p)),{data:Object.assign(Object.assign({},f),u),error:null}}catch(u){if(M(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){Xr(t);try{return await W(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:nr})}catch(r){if(M(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){Xr(t);try{return await W(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:nr})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){Xr(t);try{return await W(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:nr})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){Xr(t.userId);try{const{data:r,error:n}=await W(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:n}}catch(r){if(M(r))return{data:null,error:r};throw r}}async _deleteFactor(t){Xr(t.userId),Xr(t.id);try{return{data:await W(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(M(r))return{data:null,error:r};throw r}}}function gf(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function O_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Zr={debug:!!(globalThis&&gg()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class yg extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class I_ extends yg{}async function L_(e,t,r){Zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),Zr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async o=>{if(o){Zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,o.name);try{return await r()}finally{Zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,o.name)}}else{if(t===0)throw Zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new I_(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Zr.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}O_();const N_={url:V1,storageKey:K1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:G1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function vf(e,t,r){return await r()}const en={};class Go{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Go.nextInstanceID,Go.nextInstanceID+=1,this.instanceID>0&&ft()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},N_),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new A_({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=vg(o.fetch),this.lock=o.lock||vf,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:ft()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=L_:this.lock=vf,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:gg()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=gf(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=gf(this.memoryStorage)),ft()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=en[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){en[this.storageKey]=Object.assign(Object.assign({},en[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=en[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){en[this.storageKey]=Object.assign(Object.assign({},en[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${fg}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=c_(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),ft()&&this.detectSessionInUrl&&n!=="none"){const{data:o,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),e_(i)){const l=(t=i.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:s,redirectType:a}=o;return this._debug("#_initialize()","detected session in URL",s,"redirect type",a),await this._saveSession(s),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return M(r)?{error:r}:{error:new pg("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,o;try{const i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:It}),{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,u=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(M(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(t){var r,n,o;try{let i;if("email"in t){const{email:c,password:f,options:p}=t;let y=null,w=null;this.flowType==="pkce"&&([y,w]=await Yr(this.storage,this.storageKey)),i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:c,password:f,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:y,code_challenge_method:w},xform:It})}else if("phone"in t){const{phone:c,password:f,options:p}=t;i=await W(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:f,data:(n=p==null?void 0:p.data)!==null&&n!==void 0?n:{},channel:(o=p==null?void 0:p.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:It})}else throw new Pi("You must provide either an email or phone number and a password");const{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,u=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(M(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(t){try{let r;if("email"in t){const{email:i,password:s,options:a}=t;r=await W(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:mf})}else if("phone"in t){const{phone:i,password:s,options:a}=t;r=await W(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:mf})}else throw new Pi("You must provide either an email or phone number and a password");const{data:n,error:o}=r;return o?{data:{user:null,session:null},error:o}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new ji}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:o})}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,o,i;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(i=t.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,o,i,s,a,l,u,c,f,p,y;let w,v;if("message"in t)w=t.message,v=t.signature;else{const{chain:S,wallet:h,statement:m,options:g}=t;let k;if(ft())if(typeof h=="object")k=h;else{const E=window;if("solana"in E&&typeof E.solana=="object"&&("signIn"in E.solana&&typeof E.solana.signIn=="function"||"signMessage"in E.solana&&typeof E.solana.signMessage=="function"))k=E.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof h!="object"||!(g!=null&&g.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=h}const b=new URL((r=g==null?void 0:g.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in k&&k.signIn){const E=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},g==null?void 0:g.signInWithSolana),{version:"1",domain:b.host,uri:b.href}),m?{statement:m}:null));let C;if(Array.isArray(E)&&E[0]&&typeof E[0]=="object")C=E[0];else if(E&&typeof E=="object"&&"signedMessage"in E&&"signature"in E)C=E;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in C&&"signature"in C&&(typeof C.signedMessage=="string"||C.signedMessage instanceof Uint8Array)&&C.signature instanceof Uint8Array)w=typeof C.signedMessage=="string"?C.signedMessage:new TextDecoder().decode(C.signedMessage),v=C.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");w=[`${b.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),...m?["",m,""]:[""],"Version: 1",`URI: ${b.href}`,`Issued At: ${(o=(n=g==null?void 0:g.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((i=g==null?void 0:g.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${g.signInWithSolana.notBefore}`]:[],...!((s=g==null?void 0:g.signInWithSolana)===null||s===void 0)&&s.expirationTime?[`Expiration Time: ${g.signInWithSolana.expirationTime}`]:[],...!((a=g==null?void 0:g.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${g.signInWithSolana.chainId}`]:[],...!((l=g==null?void 0:g.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${g.signInWithSolana.nonce}`]:[],...!((u=g==null?void 0:g.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${g.signInWithSolana.requestId}`]:[],...!((f=(c=g==null?void 0:g.signInWithSolana)===null||c===void 0?void 0:c.resources)===null||f===void 0)&&f.length?["Resources",...g.signInWithSolana.resources.map(C=>`- ${C}`)]:[]].join(`
`);const E=await k.signMessage(new TextEncoder().encode(w),"utf8");if(!E||!(E instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");v=E}}try{const{data:S,error:h}=await W(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:w,signature:a_(v)},!((p=t.options)===null||p===void 0)&&p.captchaToken?{gotrue_meta_security:{captcha_token:(y=t.options)===null||y===void 0?void 0:y.captchaToken}}:null),xform:It});if(h)throw h;return!S||!S.session||!S.user?{data:{user:null,session:null},error:new ji}:(S.session&&(await this._saveSession(S.session),await this._notifyAllSubscribers("SIGNED_IN",S.session)),{data:Object.assign({},S),error:h})}catch(S){if(M(S))return{data:{user:null,session:null},error:S};throw S}}async _exchangeCodeForSession(t){const r=await br(this.storage,`${this.storageKey}-code-verifier`),[n,o]=(r??"").split("/");try{const{data:i,error:s}=await W(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:It});if(await Qt(this.storage,`${this.storageKey}-code-verifier`),s)throw s;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new ji}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:o??null}),error:s})}catch(i){if(M(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(t){try{const{options:r,provider:n,token:o,access_token:i,nonce:s}=t,a=await W(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:o,access_token:i,nonce:s,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:It}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new ji}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,o,i,s;try{if("email"in t){const{email:a,options:l}=t;let u=null,c=null;this.flowType==="pkce"&&([u,c]=await Yr(this.storage,this.storageKey));const{error:f}=await W(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:f}}if("phone"in t){const{phone:a,options:l}=t,{data:u,error:c}=await W(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(s=l==null?void 0:l.channel)!==null&&s!==void 0?s:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:c}}throw new Pi("You must provide either an email or phone number.")}catch(a){if(M(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var r,n;try{let o,i;"options"in t&&(o=(r=t.options)===null||r===void 0?void 0:r.redirectTo,i=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:s,error:a}=await W(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:i}}),redirectTo:o,xform:It});if(a)throw a;if(!s)throw new Error("An error occurred on token verification.");const l=s.session,u=s.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(o){if(M(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var r,n,o;try{let i=null,s=null;return this.flowType==="pkce"&&([i,s]=await Yr(this.storage,this.storageKey)),await W(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:s}),headers:this.headers,xform:j_})}catch(i){if(M(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Xt;const{error:o}=await W(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(M(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:o,options:i}=t,{error:s}=await W(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:s}}else if("phone"in t){const{phone:n,type:o,options:i}=t,{data:s,error:a}=await W(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:s==null?void 0:s.message_id},error:a}}throw new Pi("You must provide either an email or phone number and a type")}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await br(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<Ha:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const s=await br(this.userStorage,this.storageKey+"-user");s!=null&&s.user?t.user=s.user:t.user=Ga()}if(this.storage.isServer&&t.user){let s=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,u,c)=>(!s&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),s=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,c))})}return{data:{session:t},error:null}}const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{session:null},error:i}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await W(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:nr}):await this._useSession(async r=>{var n,o,i;const{data:s,error:a}=r;if(a)throw a;return!(!((n=s.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Xt}:await W(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(o=s.session)===null||o===void 0?void 0:o.access_token)!==null&&i!==void 0?i:void 0,xform:nr})})}catch(r){if(M(r))return Z1(r)&&(await this._removeSession(),await Qt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:o,error:i}=n;if(i)throw i;if(!o.session)throw new Xt;const s=o.session;let a=null,l=null;this.flowType==="pkce"&&t.email!=null&&([a,l]=await Yr(this.storage,this.storageKey));const{data:u,error:c}=await W(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:s.access_token,xform:nr});if(c)throw c;return s.user=u.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),{data:{user:s.user},error:null}})}catch(n){if(M(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Xt;const r=Date.now()/1e3;let n=r,o=!0,i=null;const{payload:s}=Ka(t.access_token);if(s.exp&&(n=s.exp,o=n<=r),o){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};i=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;i={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(r){if(M(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:s,error:a}=r;if(a)throw a;t=(n=s.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Xt;const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{user:null,session:null},error:i}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(M(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!ft())throw new Ti("No browser detected.");if(t.error||t.error_description||t.error_code)throw new Ti(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new lf("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ti("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new lf("No code detected.");const{data:m,error:g}=await this._exchangeCodeForSession(t.code);if(g)throw g;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:m.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:o,access_token:i,refresh_token:s,expires_in:a,expires_at:l,token_type:u}=t;if(!i||!a||!s||!u)throw new Ti("No session defined in URL");const c=Math.round(Date.now()/1e3),f=parseInt(a);let p=c+f;l&&(p=parseInt(l));const y=p-c;y*1e3<=tn&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${f}s`);const w=p-f;c-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,p,c):c-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,p,c);const{data:v,error:S}=await this._getUser(i);if(S)throw S;const h={provider_token:n,provider_refresh_token:o,access_token:i,expires_in:f,expires_at:p,refresh_token:s,token_type:u,user:v.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:h,redirectType:t.type},error:null}}catch(n){if(M(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await br(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{error:i};const s=(n=o.session)===null||n===void 0?void 0:n.access_token;if(s){const{error:a}=await this.admin.signOut(s,t);if(a&&!(X1(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Qt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=u_(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,o;try{const{data:{session:i},error:s}=r;if(s)throw s;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",t,"session",i)}catch(i){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",i),console.error(i)}})}async resetPasswordForEmail(t,r={}){let n=null,o=null;this.flowType==="pkce"&&([n,o]=await Yr(this.storage,this.storageKey,!0));try{return await W(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(M(i))return{data:null,error:i};throw i}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(M(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:o}=await this._useSession(async i=>{var s,a,l,u,c;const{data:f,error:p}=i;if(p)throw p;const y=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(s=t.options)===null||s===void 0?void 0:s.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await W(this.fetch,"GET",y,{headers:this.headers,jwt:(c=(u=f.session)===null||u===void 0?void 0:u.access_token)!==null&&c!==void 0?c:void 0})});if(o)throw o;return ft()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(M(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)throw s;return await W(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(M(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await h_(async o=>(o>0&&await f_(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await W(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:It})),(o,i)=>{const s=200*Math.pow(2,o);return i&&Va(i)&&Date.now()+s-n<tn})}catch(n){if(this._debug(r,"error",n),M(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),ft()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const o=await br(this.storage,this.storageKey);if(o&&this.userStorage){let s=await br(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!s&&(s={user:o.user},await rn(this.userStorage,this.storageKey+"-user",s)),o.user=(t=s==null?void 0:s.user)!==null&&t!==void 0?t:Ga()}else if(o&&!o.user&&!o.user){const s=await br(this.storage,this.storageKey+"-user");s&&(s!=null&&s.user)?(o.user=s.user,await Qt(this.storage,this.storageKey+"-user"),await rn(this.storage,this.storageKey,o)):o.user=Ga()}if(this._debug(n,"session from storage",o),!this._isValidSession(o)){this._debug(n,"session is not valid"),o!==null&&await this._removeSession();return}const i=((r=o.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Ha;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${Ha}s`),i){if(this.autoRefreshToken&&o.refresh_token){const{error:s}=await this._callRefreshToken(o.refresh_token);s&&(console.error(s),Va(s)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",s),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:s,error:a}=await this._getUser(o.access_token);!a&&(s!=null&&s.user)?(o.user=s.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(s){console.error("Error getting user data:",s),this._debug(n,"error getting user data, skipping SIGNED_IN notification",s)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(n,"error",o),console.error(o);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Xt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new ca;const{data:i,error:s}=await this._refreshAccessToken(t);if(s)throw s;if(!i.session)throw new Xt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const a={session:i.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(i){if(this._debug(o,"error",i),M(i)){const s={session:null,error:i};return Va(i)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(s),s}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,r,n=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const i=[],s=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,r)}catch(l){i.push(l)}});if(await Promise.all(s),i.length>0){for(let a=0;a<i.length;a+=1)console.error(i[a]);throw i[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await rn(this.userStorage,this.storageKey+"-user",{user:r.user});const o=Object.assign({},r);delete o.user;const i=hf(o);await rn(this.storage,this.storageKey,i)}else{const o=hf(r);await rn(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await Qt(this.storage,this.storageKey),await Qt(this.storage,this.storageKey+"-code-verifier"),await Qt(this.storage,this.storageKey+"-user"),this.userStorage&&await Qt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&ft()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),tn);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((n.expires_at*1e3-t)/tn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${tn}ms, refresh threshold is ${uu} ticks`),o<=uu&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof yg)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ft()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const o=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&o.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&o.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,s]=await Yr(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(s)}`});o.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);o.push(i.toString())}return n!=null&&n.skipBrowserRedirect&&o.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await W(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(M(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)return{data:null,error:s};const a=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:u}=await W(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return u?{data:null,error:u}:(t.factorType==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(r){if(M(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{data:null,error:i};const{data:s,error:a}=await W(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:a})})}catch(r){if(M(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await W(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(M(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],o=n.filter(s=>s.factor_type==="totp"&&s.status==="verified"),i=n.filter(s=>s.factor_type==="phone"&&s.status==="verified");return{data:{all:n,totp:o,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:o},error:i}=t;if(i)return{data:null,error:i};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=Ka(o.access_token);let a=null;s.aal&&(a=s.aal);let l=a;((n=(r=o.user.factors)===null||r===void 0?void 0:r.filter(f=>f.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const c=s.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(a=>a.kid===t);if(n)return n;const o=Date.now();if(n=this.jwks.keys.find(a=>a.kid===t),n&&this.jwks_cached_at+Q1>o)return n;const{data:i,error:s}=await W(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(s)throw s;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=o,n=i.keys.find(a=>a.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:y,error:w}=await this.getSession();if(w||!y.session)return{data:null,error:w};n=y.session.access_token}const{header:o,payload:i,signature:s,raw:{header:a,payload:l}}=Ka(n);r!=null&&r.allowExpired||x_(i.exp);const u=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!u){const{error:y}=await this.getUser(n);if(y)throw y;return{data:{claims:i,header:o,signature:s},error:null}}const c=__(o.alg),f=await crypto.subtle.importKey("jwk",u,c,!0,["verify"]);if(!await crypto.subtle.verify(c,f,s,s_(`${a}.${l}`)))throw new fu("Invalid JWT signature");return{data:{claims:i,header:o,signature:s},error:null}}catch(n){if(M(n))return{data:null,error:n};throw n}}}Go.nextInstanceID=0;const z_=Go;class D_ extends z_{constructor(t){super(t)}}var U_=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{u(n.next(c))}catch(f){s(f)}}function l(c){try{u(n.throw(c))}catch(f){s(f)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((n=n.apply(e,t||[])).next())})};class F_{constructor(t,r,n){var o,i,s;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const a=q1(t),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const u=`sb-${l.hostname.split(".")[0]}-auth-token`,c={db:N1,realtime:D1,auth:Object.assign(Object.assign({},z1),{storageKey:u}),global:L1},f=H1(n??{},c);this.storageKey=(o=f.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(i=f.global.headers)!==null&&i!==void 0?i:{},f.accessToken?(this.accessToken=f.accessToken,this.auth=new Proxy({},{get:(p,y)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(y)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((s=f.auth)!==null&&s!==void 0?s:{},this.headers,f.global.fetch),this.fetch=B1(r,this._getAccessToken.bind(this),f.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},f.realtime)),this.rest=new r1(new URL("rest/v1",l).href,{headers:this.headers,schema:f.db.schema,fetch:this.fetch}),this.storage=new A1(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),f.accessToken||this._listenForAuthEvents()}get functions(){return new Ax(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return U_(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,storageKey:i,flowType:s,lock:a,debug:l},u,c){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new D_({url:this.authUrl.href,headers:Object.assign(Object.assign({},f),u),storageKey:i,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,flowType:s,lock:a,debug:l,fetch:c,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new w1(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const M_=(e,t,r)=>new F_(e,t,r);function B_(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}B_()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const I=M_("https://mdmknxkztpimoedhdjci.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A"),wg=x.createContext(),W_=({children:e})=>{const[t,r]=x.useState(!1),[n,o]=x.useState(null),[i,s]=x.useState(null),a=async(y,w)=>{try{r(!0);const{data:v,error:S}=await I.from("usuarios").select("idUsuario, nombre, usuario, correo, idRol").eq("usuario",y).eq("contraseña",w).single();if(S)throw console.error("Error de Supabase:",S),S.code==="PGRST116"?new Error("Usuario o contraseña incorrectos"):new Error(`Error de base de datos: ${S.message}`);if(!v)throw new Error("Usuario o contraseña incorrectos");const h={id:v.idUsuario,nombre:v.nombre,usuario:v.usuario,correo:v.correo,idRol:v.idRol,rol:"Administrador",type:"admin"};return o(h),s(null),localStorage.setItem("user",JSON.stringify(h)),localStorage.removeItem("employeeData"),{success:!0,user:h}}catch(v){return console.error("Error en login:",v),{success:!1,error:v.message}}finally{r(!1)}},l=x.useCallback(y=>{const w={id:y.idEmpleado,idEmpleado:y.idEmpleado,codigoEmpleado:y.codigoEmpleado,empleado:y.empleado,idPlanta:y.idPlanta,planta:y.planta,idEsquemaPago:y.idEsquemaPago||null,type:"employee"};return s(w),o(null),localStorage.setItem("employeeData",JSON.stringify(w)),localStorage.removeItem("user"),{success:!0,employee:w}},[]),u=x.useCallback(()=>{o(null),s(null),localStorage.removeItem("user"),localStorage.removeItem("employeeData")},[]),c=x.useCallback(()=>{try{const y=localStorage.getItem("user"),w=localStorage.getItem("employeeData");if(y){const v=JSON.parse(y);return o(v),s(null),v}if(w){const v=JSON.parse(w);return s(v),o(null),v}}catch(y){console.error("Error al obtener usuario guardado:",y),localStorage.removeItem("user"),localStorage.removeItem("employeeData")}return null},[]),f=x.useCallback(y=>{if(i){const w={...i,...y};return s(w),localStorage.setItem("employeeData",JSON.stringify(w)),w}return null},[i]);x.useEffect(()=>{c()},[c]);const p={user:n,employeeData:i,loading:t,adminLogin:a,employeeLogin:l,logout:u,getCurrentUser:c,updateEmployeeData:f};return d.jsx(wg.Provider,{value:p,children:e})},Vn=()=>{const e=x.useContext(wg);if(!e)throw new Error("useAppAuth debe usarse dentro de AuthProvider");return e},xg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("plantas").select("idPlanta, planta").order("planta");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching plantas:",a)}finally{n(!1)}})()},[]),{plantas:e,loading:r,error:o}},_g=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("esquemasPago").select("idEsquemaPago, esquemaPago").order("esquemaPago");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching esquemas de pago:",a)}finally{n(!1)}})()},[]),{esquemas:e,loading:r,error:o}},kg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("tiposSolicitud").select("idTipoSolicitud, tipoSolicitud").order("tipoSolicitud");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching tipos de solicitud:",a)}finally{n(!1)}})()},[]),{tipos:e,loading:r,error:o}},Sg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null);return x.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await I.from("prioridades").select("idPrioridad, prioridad").order("idPrioridad");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching prioridades:",a)}finally{n(!1)}})()},[]),{prioridades:e,loading:r,error:o}},q_=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(null);return{createTicket:async i=>{try{t(!0),n(null);const{data:s}=await I.from("empleados").select("idPlanta").eq("idEmpleado",i.idEmpleado).single();if(!s)throw new Error("No se encontró información del empleado");const{data:a}=await I.from("asignaciones").select("idUsuario").eq("idPlanta",s.idPlanta).eq("idTipoSolicitud",i.idTipoSolicitud).single();if(!a)throw new Error("No se encontró usuario asignado para esta combinación de planta y tipo de solicitud");const{data:l,error:u}=await I.from("tickets").insert([{idEmpleado:i.idEmpleado,idTipoSolicitud:i.idTipoSolicitud,descripcion:i.descripcion,idPrioridad:i.idPrioridad}]).select().single();if(u)throw u;const{error:c}=await I.from("seguimientos").insert([{idTicket:l.idTicket,idUsuario:a.idUsuario,idEstado:1}]);if(c)throw c;return{success:!0,ticket:l}}catch(s){return n(s.message),console.error("Error creating ticket:",s),{success:!1,error:s.message}}finally{t(!1)}},loading:e,error:r}},bg=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(null),o=x.useCallback(async l=>{t(!0),n(null);try{const{data:u,error:c}=await I.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("codigoEmpleado",l).single();if(c){if(c.code==="PGRST116")return{success:!0,empleado:null};throw c}return{success:!0,empleado:u}}catch(u){return console.error("Error al buscar empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),i=x.useCallback(async(l,u,c,f)=>{t(!0),n(null);try{const{data:p,error:y}=await I.from("empleados").insert([{codigoEmpleado:l,nombre:u,idPlanta:c,idEsquemaPago:f}]).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(y)throw y;return{success:!0,empleado:p}}catch(p){return console.error("Error al crear empleado:",p),n(p.message),{success:!1,error:p.message}}finally{t(!1)}},[]),s=x.useCallback(async l=>{t(!0),n(null);try{const{data:u,error:c}=await I.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("idEmpleado",l).single();if(c)throw c;return{success:!0,empleado:u}}catch(u){return console.error("Error al obtener empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),a=x.useCallback(async(l,u)=>{t(!0),n(null);try{const{data:c,error:f}=await I.from("empleados").update({idEsquemaPago:u}).eq("idEmpleado",l).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(f)throw f;return{success:!0,empleado:c}}catch(c){return console.error("Error al actualizar esquema de pago:",c),n(c.message),{success:!1,error:c.message}}finally{t(!1)}},[]);return{loading:e,error:r,buscarEmpleadoPorCodigo:o,crearEmpleado:i,obtenerEmpleadoPorId:s,actualizarEsquemaPago:a}},H_=()=>{const[e,t]=x.useState(""),[r,n]=x.useState(""),[o,i]=x.useState(""),[s,a]=x.useState(""),[l,u]=x.useState(""),[c,f]=x.useState(!1),[p,y]=x.useState(1),{employeeLogin:w}=Vn(),v=Bn(),{plantas:S,loading:h}=xg(),{esquemas:m,loading:g}=_g(),{buscarEmpleadoPorCodigo:k,crearEmpleado:b,loading:E}=bg(),C=async $=>{var H;if($.preventDefault(),u(""),!e.trim()){u("Por favor, ingrese su código de empleado");return}if(!/^\d+$/.test(e)){u("El código de empleado debe contener solo números");return}f(!0);try{const R=await k(e.trim());if(!R.success){u("Error al buscar empleado: "+R.error),f(!1);return}if(R.empleado){const J={idEmpleado:R.empleado.idEmpleado,codigoEmpleado:R.empleado.codigoEmpleado,empleado:R.empleado.nombre,idPlanta:R.empleado.idPlanta,planta:(H=R.empleado.plantas)==null?void 0:H.planta,idEsquemaPago:R.empleado.idEsquemaPago||null};w(J),v("/employee")}else y(2)}catch(R){u("Error al procesar la búsqueda"),console.error("Error:",R)}finally{f(!1)}},T=async $=>{var H;if($.preventDefault(),u(""),!r.trim()||!o||!s){u("Por favor, complete todos los campos");return}f(!0);try{const R=await b(e.trim(),r.trim(),o,s);if(!R.success){u("Error al registrar empleado: "+R.error),f(!1);return}w({idEmpleado:R.empleado.idEmpleado,codigoEmpleado:R.empleado.codigoEmpleado,empleado:R.empleado.nombre,idPlanta:R.empleado.idPlanta,planta:(H=R.empleado.plantas)==null?void 0:H.planta,idEsquemaPago:R.empleado.idEsquemaPago||null}),v("/employee")}catch(R){u("Error al procesar el registro"),console.error("Error:",R)}finally{f(!1)}},L=()=>{y(1),n(""),i(""),a(""),u("")};return p===1?d.jsxs(yf,{onSubmit:C,children:[d.jsx(xf,{children:"Acceso Empleado"}),d.jsx(wf,{children:"Ingresa tu código de empleado para acceder al sistema"}),l&&d.jsx(bf,{children:l}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Número de Empleado"}),d.jsx(V_,{type:"text",inputMode:"numeric",pattern:"[0-9]*",placeholder:"Ej: 12345",value:e,onChange:$=>{const H=$.target.value.replace(/\D/g,"");t(H)},disabled:c||E,required:!0,autoComplete:"employee-id"})]}),d.jsx(Sf,{type:"submit",disabled:c||E,children:c||E?"Verificando...":"Acceder"})]}):d.jsxs(yf,{onSubmit:T,children:[d.jsx(xf,{children:"Registro de Empleado"}),d.jsx(wf,{children:"No encontramos tu código de empleado. Por favor, completa la siguiente información:"}),l&&d.jsx(bf,{children:l}),d.jsxs(G_,{children:["Código de empleado: ",d.jsx("strong",{children:e})]}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Nombre Completo"}),d.jsx(K_,{type:"text",placeholder:"Ej: Juan Pérez García",value:r,onChange:$=>n($.target.value),disabled:c||E||g,required:!0,autoComplete:"name"})]}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Planta"}),h?d.jsx(kf,{disabled:!0,children:"Cargando plantas..."}):d.jsxs(_f,{value:o,onChange:$=>i($.target.value),disabled:c||E||g,required:!0,children:[d.jsx("option",{value:"",children:"Seleccione su planta..."}),S.map($=>d.jsx("option",{value:$.idPlanta,children:$.planta},$.idPlanta))]})]}),d.jsxs($i,{children:[d.jsx(Ri,{children:"Esquema de Pago"}),g?d.jsx(kf,{disabled:!0,children:"Cargando esquemas..."}):d.jsxs(_f,{value:s,onChange:$=>a($.target.value),disabled:c||E||g,required:!0,children:[d.jsx("option",{value:"",children:"Seleccione su esquema de pago..."}),m.map($=>d.jsx("option",{value:$.idEsquemaPago,children:$.esquemaPago},$.idEsquemaPago))]})]}),d.jsxs(J_,{children:[d.jsx(Q_,{type:"button",onClick:L,disabled:c||E||g,children:"Volver"}),d.jsx(Sf,{type:"submit",disabled:c||E||g,style:{flex:1},children:c||E||g?"Registrando...":"Registrar y Acceder"})]})]})},yf=_.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,wf=_.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,xf=_.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,$i=_.div`
  margin-bottom: 1.5rem;
`,Ri=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,Eg=_.input`
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
`,V_=_(Eg)`
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
`,K_=_(Eg)``,_f=_.select`
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
`,kf=_.div`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: var(--color-gray);
`,Sf=_.button`
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
`,bf=_.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,G_=_.div`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.9rem;
`,J_=_.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Q_=_.button`
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
`,Y_=()=>{const[e,t]=x.useState(""),[r,n]=x.useState(""),[o,i]=x.useState(""),{adminLogin:s,loading:a}=Vn(),l=Bn(),u=async c=>{if(c.preventDefault(),i(""),!e.trim()||!r.trim()){i("Por favor, complete todos los campos");return}const f=await s(e.trim(),r);f.success?l("/admin"):i(f.error)};return d.jsxs(X_,{onSubmit:u,children:[d.jsx(ek,{children:"Acceso Administrador"}),d.jsx(Z_,{children:"Ingresa tus credenciales de administrador para acceder al panel de control"}),o&&d.jsx(rk,{children:o}),d.jsxs(Ef,{children:[d.jsx(Cf,{children:"Usuario"}),d.jsx(jf,{type:"text",placeholder:"Usuario",value:e,onChange:c=>t(c.target.value),disabled:a,autoComplete:"username"})]}),d.jsxs(Ef,{children:[d.jsx(Cf,{children:"Contraseña"}),d.jsx(jf,{type:"password",placeholder:"Contraseña",value:r,onChange:c=>n(c.target.value),disabled:a,autoComplete:"current-password"})]}),d.jsx(tk,{type:"submit",disabled:a,children:a?"Iniciando sesión...":"Iniciar Sesión"})]})},X_=_.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,Z_=_.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,ek=_.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,Ef=_.div`
  margin-bottom: 1.5rem;
`,Cf=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,jf=_.input`
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
`,tk=_.button`
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
`,rk=_.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,nk="/ventanilla/assets/logo-DOgx6EZv.png",ok=()=>{const[e,t]=x.useState("employee"),{user:r,employeeData:n}=Vn(),o=Bn();return x.useEffect(()=>{r&&r.type==="admin"?o("/admin"):n&&n.type==="employee"&&o("/employee")},[r,n,o]),d.jsxs(ik,{children:[d.jsxs(sk,{children:[d.jsx("img",{src:nk,alt:"Logo de la empresa",style:{height:"80px"}}),d.jsx(ak,{children:"Ventanilla de atención al empleado"})]}),d.jsx(lk,{children:d.jsxs(uk,{children:[d.jsxs(ck,{children:[d.jsxs(Pf,{$active:e==="employee",onClick:()=>t("employee"),children:[d.jsx(Tf,{children:"👤"}),"Empleado"]}),d.jsxs(Pf,{$active:e==="admin",onClick:()=>t("admin"),children:[d.jsx(Tf,{children:"🔑"}),"Administrador"]})]}),d.jsxs(dk,{children:[e==="employee"&&d.jsx(H_,{}),e==="admin"&&d.jsx(Y_,{})]})]})})]})},ik=_.div`
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
`,sk=_.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    /* Removido el filtro que estaba causando problemas */
  }
`,ak=_.h1`
  color: var(--color-primary);
  font-size: 28px;
  font-weight: 600;
  margin: 16px 0 0 0;
`,lk=_.div`
  width: 100%;
  max-width: 500px;
`,uk=_.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,ck=_.div`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,Pf=_.button`
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
`,Tf=_.span`
  font-size: 16px;
`,dk=_.div`
  padding: 0;
`,fk=e=>{const[t,r]=x.useState([]),[n,o]=x.useState(!0),[i,s]=x.useState(null),a=x.useRef(!1),l=x.useRef(null),u=x.useCallback(async(c={})=>{if(e)try{o(!0);const f=async h=>{var m;try{if((m=h.seguimientos)==null?void 0:m.find(b=>b.idEstado===1))return{success:!0,mensaje:"Ya tiene seguimiento inicial"};const{error:k}=await I.from("seguimientos").insert({idTicket:h.idTicket,idUsuario:null,idEstado:1});if(k)throw k;return{success:!0,mensaje:"Seguimiento inicial creado"}}catch(g){return console.error("Error creando seguimiento inicial:",g),{success:!1,error:g.message}}};let p=I.from("tickets").select(`
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
        `).order("idTicket",{ascending:!1});if((e==null?void 0:e.idRol)===2){const{data:h}=await I.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);if(!(h&&h.length>0)){r([]),o(!1);return}}if(c.planta){const{data:h}=await I.from("empleados").select("idEmpleado").eq("idPlanta",c.planta);if(h&&h.length>0){const m=h.map(g=>g.idEmpleado);p=p.in("idEmpleado",m)}else{r([]),o(!1);return}}if(c.tipoSolicitud&&(p=p.eq("idTipoSolicitud",c.tipoSolicitud)),c.prioridad&&(p=p.eq("idPrioridad",c.prioridad)),c.empleado){const{data:h}=await I.from("empleados").select("idEmpleado").or(`codigoEmpleado.ilike.%${c.empleado}%,nombre.ilike.%${c.empleado}%`);if(h&&h.length>0){const m=h.map(g=>g.idEmpleado);p=p.in("idEmpleado",m)}else{r([]),o(!1);return}}const{data:y,error:w}=await p;if(w)throw w;let v=y||[];const S=v.filter(h=>{var m;return!((m=h.seguimientos)!=null&&m.find(g=>g.idEstado===1))});if(S.length>0){const h=S.map(m=>f(m));try{await Promise.all(h);const{data:m}=await p;m&&(v=m)}catch(m){console.error("Error en migración de seguimientos:",m)}}if((e==null?void 0:e.idRol)!==1)if(e.idRol===3){const{data:h}=await I.from("delegaciones").select("idTicket").eq("idUsuario",e.id).eq("bActivo",!0);if(h&&h.length>0){const m=h.map(g=>g.idTicket);v=v.filter(g=>m.includes(g.idTicket))}else v=[]}else{const{data:h}=await I.from("asignaciones").select("idPlanta, idTipoSolicitud").eq("idUsuario",e.id);h&&h.length>0?v=v.filter(m=>h.some(k=>{var b;return((b=m.empleados)==null?void 0:b.idPlanta)===k.idPlanta&&m.idTipoSolicitud===k.idTipoSolicitud})):v=[]}c.sortBy==="prioridad"?v.sort((h,m)=>h.idPrioridad-m.idPrioridad):v.sort((h,m)=>{var b,E,C,T;const g=(E=(b=h.seguimientos)==null?void 0:b.find(L=>L.idEstado===1))==null?void 0:E.fecha,k=(T=(C=m.seguimientos)==null?void 0:C.find(L=>L.idEstado===1))==null?void 0:T.fecha;return!g&&!k?0:g?k?new Date(k)-new Date(g):-1:1}),r(v),s(null)}catch(f){console.error("Error fetching tickets:",f),s(f.message)}finally{o(!1)}},[e]);return x.useEffect(()=>{e&&(l.current!==e.id||!a.current)&&(l.current=e.id,a.current=!0,u())},[e,u]),{tickets:t,loading:n,error:i,refetchTickets:u}},hk=e=>({total:e.length,sinAtender:e.filter(r=>r.idEstado===1).length,reasignados:e.filter(r=>r.idEstado===2).length,atendidos:e.filter(r=>r.idEstado===3).length,cerrados:e.filter(r=>r.idEstado===4).length,cancelados:e.filter(r=>r.idEstado===5).length}),Cg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const{data:s,error:a}=await I.from("asignaciones").select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `);if(a)throw a;t(s||[])}catch(s){console.error("Error fetching asignaciones:",s)}finally{n(!1)}})()},[]);const o=x.useCallback((i,s)=>{var l;const a=e.find(u=>u.idPlanta===i&&u.idTipoSolicitud===s);return((l=a==null?void 0:a.usuarios)==null?void 0:l.nombre)||"No asignado"},[e]);return{asignaciones:e,loading:r,getResponsable:o}},pk=e=>{const[t,r]=x.useState(!1),n=x.useCallback(async(l,u,c)=>{var f;try{r(!0);const{error:p}=await I.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:3});if(p)throw p;const{data:y,error:w}=await I.from("atenciones").insert({idTicket:l,respuesta:c}).select().single();if(w)throw w;const{error:v}=await I.from("tickets").update({idEstado:3}).eq("idTicket",l);if(v)throw v;const{error:S}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);return S&&!((f=S.message)!=null&&f.includes("0 rows"))&&console.warn("Error al desactivar delegaciones:",S),{success:!0,atencion:y}}catch(p){return console.error("Error al registrar la atención:",p),{success:!1,error:p.message}}finally{r(!1)}},[]),o=x.useCallback(async(l,u,c)=>{try{r(!0);const{error:f}=await I.from("ticket_tokens").update({usado:!0,fecha_uso:new Date().toISOString()}).eq("id_ticket",l).eq("usado",!1);f&&console.warn("Advertencia al invalidar tokens en delegación:",f);const{data:p,error:y}=await I.from("tickets").select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `).eq("idTicket",l).single();if(y)throw y;const{data:w,error:v}=await I.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",c).single();if(v)throw v;const{error:S}=await I.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:2});if(S)throw S;const{error:h}=await I.from("tickets").update({idEstado:2}).eq("idTicket",l);if(h)throw h;const{error:m}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(m)throw m;const{error:g}=await I.from("delegaciones").insert({idTicket:l,idUsuario:c});if(g)throw g;try{const{enviarNotificacionDelegacion:k}=await vr(()=>import("./notificationService-Mo_VqlYd.js"),__vite__mapDeps([])),b=await k(p,w);b.success?console.log("Notificación enviada exitosamente:",{token:b.token,directLink:b.directLink,emailSent:b.emailResult.success}):console.warn("Error enviando notificación (delegación completada):",b.error)}catch(k){console.warn("Error en sistema de notificaciones (delegación completada):",k)}return{success:!0,mensaje:"Ticket delegado exitosamente.",ticketData:p,usuarioDestino:w}}catch(f){return console.error("Error al delegar el ticket:",f),{success:!1,error:f.message}}finally{r(!1)}},[]),i=x.useCallback(async(l,u,c)=>{try{r(!0);const{error:f}=await I.from("seguimientos").insert({idTicket:l,idUsuario:u,idEstado:5});if(f)throw f;const{data:p,error:y}=await I.from("atenciones").insert({idTicket:l,respuesta:c}).select().single();if(y)throw y;const{error:w}=await I.from("tickets").update({idEstado:5}).eq("idTicket",l);if(w)throw w;return{success:!0,atencion:p}}catch(f){return console.error("Error al cancelar el ticket:",f),{success:!1,error:f.message}}finally{r(!1)}},[]),s=x.useCallback(async(l,u)=>{if(!e)return{success:!1,error:"Usuario no disponible"};r(!0);try{const{error:c}=await I.from("ticket_tokens").update({usado:!0,fecha_uso:new Date().toISOString()}).eq("id_ticket",l).eq("usado",!1);c&&console.warn("Advertencia al invalidar tokens anteriores:",c);const{error:f}=await I.from("seguimientos").insert({idTicket:l,idUsuario:e.id,idEstado:2});if(f)throw f;const{error:p}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(p)throw p;const{error:y}=await I.from("delegaciones").insert({idTicket:l,idUsuario:u});if(y)throw y;try{const{data:w,error:v}=await I.from("usuarios").select("idUsuario, idRol, correo, nombre").eq("idUsuario",u).single();if(!v&&w&&w.idRol===3){const{data:S,error:h}=await I.from("tickets").select(`
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            `).eq("idTicket",l).single();if(!h&&S){const{enviarNotificacionDelegacion:m}=await vr(()=>import("./notificationService-Mo_VqlYd.js"),__vite__mapDeps([])),g=await m(S,w);g.success?console.log("Notificación de reasignación enviada exitosamente:",{token:g.token,email:w.correo}):console.error("Error al enviar notificación de reasignación:",g.error)}}}catch(w){console.error("Error en proceso de notificación de reasignación:",w)}return{success:!0}}catch(c){return console.error("Error al re-asignar el ticket:",c),{success:!1,error:c.message}}finally{r(!1)}},[e]),a=x.useCallback(async l=>{r(!0);try{const{error:u}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",l).eq("bActivo",!0);if(u)throw u;return{success:!0}}catch(u){return console.error("Error al autoasignarse el ticket:",u),{success:!1,error:u.message}}finally{r(!1)}},[]);return{crearAtencion:n,delegarTicket:o,cancelarTicket:i,reasignarTicket:s,autoasignarTicket:a,loading:t}},jg=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(null),o=x.useCallback(async(s,a=null)=>{try{t(!0),n(null);let l=3;a===5?l=5:a===3&&(l=3);const{data:u,error:c}=await I.from("seguimientos").select(`
          idUsuario,
          fecha,
          usuarios (
            nombre
          )
        `).eq("idTicket",s).eq("idEstado",l).order("fecha",{ascending:!1}).limit(1).single();return c?(console.error("Error obteniendo seguimiento:",c),null):!u||!u.usuarios?null:{nombre:u.usuarios.nombre,fecha:u.fecha}}catch(l){return console.error("Error en obtenerUsuarioQueAtendio:",l),n(l.message),null}finally{t(!1)}},[]),i=x.useCallback(async s=>{if(!s||s.length===0)return{};try{t(!0),n(null);const{data:a,error:l}=await I.from("seguimientos").select(`
          idTicket,
          idUsuario,
          fecha,
          usuarios (
            nombre,
            apellidos
          )
        `).in("idTicket",s).eq("idEstado",3).order("fecha",{ascending:!1});if(l)return console.error("Error obteniendo seguimientos:",l),{};const u={};return a.forEach(c=>{!u[c.idTicket]&&c.usuarios&&(u[c.idTicket]={nombre:`${c.usuarios.nombre} ${c.usuarios.apellidos}`.trim(),fecha:c.fecha})}),u}catch(a){return console.error("Error en obtenerUsuariosQueAtendieron:",a),n(a.message),{}}finally{t(!1)}},[]);return{obtenerUsuarioQueAtendio:o,obtenerUsuariosQueAtendieron:i,loading:e,error:r}},nt=e=>{if(!e)return"Fecha no disponible";if(e.includes("T")&&e.includes("+00:00")){const r=e.split("T")[0],n=e.split("T")[1].split("+")[0],[o,i,s]=r.split("-"),[a,l]=n.split(":");return`${s}/${i}/${o}, ${a}:${l}`}return new Date(e).toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},mk=({user:e,onLogout:t})=>d.jsxs(gk,{children:[d.jsxs(vk,{children:[d.jsx("h1",{children:"Dashboard Administrativo"}),d.jsxs("p",{children:["Bienvenido, ",e==null?void 0:e.nombre]})]}),d.jsx(yk,{onClick:t,children:"Cerrar Sesión"})]}),gk=_.header`
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
`,vk=_.div`
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
`,yk=_.button`
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
`,wk=({stats:e,statsFilter:t,onStatsFilterChange:r})=>{const n={sinAtender:{id:1,label:"Sin Atender",color:"var(--color-estado-sin-atender)",count:e.sinAtender},reasignados:{id:2,label:"Asignados",color:"var(--color-estado-delegado)",count:e.reasignados},atendidos:{id:3,label:"Atendidos",color:"var(--color-estado-atendido)",count:e.atendidos},cerrados:{id:4,label:"Cerrados",color:"var(--color-estado-cerrado)",count:e.cerrados},cancelados:{id:5,label:"Cancelados",color:"var(--color-estado-cancelado)",count:e.cancelados}},o=i=>{r(t===i?null:i)};return d.jsxs(xk,{children:[d.jsxs(_k,{children:["Tickets: ",e.total]}),d.jsx(kk,{children:Object.entries(n).map(([i,s])=>d.jsxs(Sk,{$active:t===i,$color:s.color,onClick:()=>o(i),children:[d.jsx(bk,{$active:t===i,$color:s.color,children:s.count}),d.jsx(Ek,{$active:t===i,$color:s.color,children:s.label})]},i))})]})},xk=_.div`
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
  }
`,_k=_.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`,kk=_.div`
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
`,Sk=_.div`
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
`,bk=_.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  margin-bottom: 0.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`,Ek=_.div`
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,Ck=({tempFilters:e,onTempFilterChange:t,onApplyFilters:r,onClearFilters:n,plantas:o,tipos:i,prioridades:s})=>{const[a,l]=x.useState(!1);return d.jsxs(jk,{children:[d.jsxs(Pk,{onClick:()=>l(!a),children:[d.jsx("h3",{children:"Filtros"}),d.jsx(Tk,{$expanded:a,children:a?"▲":"▼"})]}),a&&d.jsxs($k,{children:[d.jsxs(Rk,{children:[d.jsxs(Ai,{children:[d.jsx("label",{children:"Planta:"}),d.jsxs("select",{value:e.planta,onChange:u=>t("planta",u.target.value),children:[d.jsx("option",{value:"",children:"Todas"}),o.map(u=>d.jsx("option",{value:u.idPlanta,children:u.planta},u.idPlanta))]})]}),d.jsxs(Ai,{children:[d.jsx("label",{children:"Tipo:"}),d.jsxs("select",{value:e.tipoSolicitud,onChange:u=>t("tipoSolicitud",u.target.value),children:[d.jsx("option",{value:"",children:"Todos"}),i.sort((u,c)=>u.idTipoSolicitud-c.idTipoSolicitud).map(u=>d.jsx("option",{value:u.idTipoSolicitud,children:u.tipoSolicitud},u.idTipoSolicitud))]})]}),d.jsxs(Ai,{children:[d.jsx("label",{children:"Prioridad:"}),d.jsxs("select",{value:e.prioridad,onChange:u=>t("prioridad",u.target.value),children:[d.jsx("option",{value:"",children:"Todas"}),s.map(u=>d.jsx("option",{value:u.idPrioridad,children:u.prioridad},u.idPrioridad))]})]}),d.jsxs(Ai,{children:[d.jsx("label",{children:"Empleado:"}),d.jsx("input",{type:"text",placeholder:"Código o nombre...",value:e.empleado,onChange:u=>t("empleado",u.target.value)})]})]}),d.jsxs(Ak,{children:[d.jsx("label",{children:"Ordenar por:"}),d.jsxs("select",{value:e.sortBy,onChange:u=>t("sortBy",u.target.value),children:[d.jsx("option",{value:"fecha",children:"Fecha de creación"}),d.jsx("option",{value:"prioridad",children:"Prioridad"})]})]}),d.jsxs(Ok,{children:[d.jsx(Lk,{onClick:n,children:"Limpiar"}),d.jsx(Ik,{onClick:r,children:"Aplicar"})]})]})]})},jk=_.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`,Pk=_.div`
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
`,Tk=_.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`,$k=_.div`
  padding: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`,Rk=_.div`
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
`,Ai=_.div`
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
`,Ak=_.div`
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
`,Ok=_.div`
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
`,Ik=_.button`
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
`,Lk=_.button`
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
`,hu=({ticket:e,mode:t="employee",formatDate:r,getPriorityColor:n,getResponsable:o,onAtender:i,onVerRespuesta:s,onShowDetails:a,isResolved:l=!1,isExpanded:u=!1,onToggleExpand:c,currentUser:f=null})=>{var k,b,E,C,T,L,$,H;const p=R=>{var J,fe;if(R.idEstado===2&&((J=R.delegaciones)==null?void 0:J.length)>0){const ae=R.delegaciones.find(ce=>ce.bActivo===!0);return((fe=ae==null?void 0:ae.usuarios)==null?void 0:fe.nombre)||null}return null},y=R=>{var fe,ae;const J=(ae=(fe=R.seguimientos)==null?void 0:fe.find(ce=>ce.idEstado===1))==null?void 0:ae.fecha;return J?r?r(J):nt(J):"Pendiente seguimiento inicial"},w=R=>{var J,fe,ae,ce,ke,j,O,N;switch(R.idEstado){case 1:return y(R);case 2:{const z=(fe=(J=R.seguimientos)==null?void 0:J.find(D=>D.idEstado===2))==null?void 0:fe.fecha;return z?r?r(z):nt(z):y(R)}case 3:{const z=(ce=(ae=R.seguimientos)==null?void 0:ae.find(D=>D.idEstado===3))==null?void 0:ce.fecha;return z?r?r(z):nt(z):y(R)}case 4:{const z=(j=(ke=R.seguimientos)==null?void 0:ke.find(D=>D.idEstado===4))==null?void 0:j.fecha;return z?r?r(z):nt(z):y(R)}case 5:{const z=(N=(O=R.seguimientos)==null?void 0:O.find(D=>D.idEstado===5))==null?void 0:N.fecha;return z?r?r(z):nt(z):y(R)}default:return y(R)}},v=()=>{switch(e.idEstado){case 1:return"var(--color-estado-sin-atender)";case 2:return"var(--color-estado-delegado)";case 3:return"var(--color-estado-atendido)";case 4:return"var(--color-estado-cerrado)";case 5:return"var(--color-estado-cancelado)";default:return"#ffc107"}},S=R=>{switch(R){case 1:return"Sin atender";case 2:return"Asignado";case 3:return"Atendido";case 4:return"Cerrado";case 5:return"Cancelado";default:return"Pendiente"}},h=R=>{switch(R){case 1:return"Fecha de creación:";case 2:return"Fecha de asignación:";case 3:return"Fecha de atención:";case 4:return"Fecha de cierre:";case 5:return"Fecha de cancelación:";default:return"Fecha de creación:"}},m=R=>{switch(R){case 1:return"var(--color-estado-sin-atender)";case 2:return"var(--color-estado-delegado)";case 3:return"var(--color-estado-atendido)";case 4:return"var(--color-estado-cerrado)";case 5:return"var(--color-estado-cancelado)";default:return"#ffc107"}},g=t==="employee"?l:e.atenciones&&e.atenciones.length>0;return d.jsxs(Nk,{$isResolved:g,$borderColor:v(),$isExpanded:u,children:[d.jsxs(zk,{onClick:()=>c&&c(e.idTicket),children:[d.jsxs(Dk,{children:[d.jsx(Fk,{$priority:n(e.idPrioridad),children:(k=e.prioridades)==null?void 0:k.prioridad}),d.jsxs(Mk,{children:["#",e.idTicket]})]}),d.jsx(Uk,{children:t==="admin"?g?d.jsx(Kk,{children:d.jsx(Gk,{onClick:R=>{R.stopPropagation(),s&&s(e)},title:"Ver respuesta del ticket",children:d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),d.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}):d.jsxs(Bk,{children:[d.jsx(Wk,{onClick:R=>{R.stopPropagation(),i&&i(e)},children:"Atender"}),d.jsx($f,{onClick:R=>{R.stopPropagation(),c&&c(e.idTicket)},children:u?"▲":"▼"})]}):d.jsxs(qk,{children:[d.jsx(Hk,{$estadoColor:m(e.idEstado),onClick:R=>{R.stopPropagation(),a&&a(e)},children:S(e.idEstado)}),d.jsx($f,{onClick:R=>{R.stopPropagation(),c&&c(e.idTicket)},children:u?"▲":"▼"})]})})]}),d.jsx(Vk,{$isExpanded:u,children:t==="admin"?d.jsxs(d.Fragment,{children:[d.jsxs(Er,{children:[d.jsx(Ot,{children:"Empleado:"}),d.jsxs(Cr,{children:[(b=e.empleados)==null?void 0:b.nombre," - Código:"," ",(E=e.empleados)==null?void 0:E.codigoEmpleado]})]}),d.jsxs(Er,{children:[d.jsx(Ot,{children:"Planta:"}),d.jsx(Cr,{children:(T=(C=e.empleados)==null?void 0:C.plantas)==null?void 0:T.planta})]}),d.jsxs(Er,{children:[d.jsx(Ot,{children:"Fecha:"}),d.jsx(Cr,{children:w(e)})]}),o&&d.jsxs(Er,{children:[d.jsx(Ot,{children:(f==null?void 0:f.idRol)===3?e.idEstado===2?"Delegado a:":"Asignado por:":e.idEstado===2?"Delegado a:":"Responsable:"}),d.jsx(Cr,{children:e.idEstado===2&&p(e)?p(e):o((L=e.empleados)==null?void 0:L.idPlanta,e.idTipoSolicitud)})]}),d.jsxs(Rf,{children:[d.jsx(Ot,{children:"Descripción:"}),d.jsx(Af,{children:e.descripcion})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs(Er,{children:[d.jsx(Ot,{children:h(e.idEstado)}),d.jsx(Cr,{children:w(e)})]}),d.jsxs(Er,{children:[d.jsx(Ot,{children:"Tipo:"}),d.jsx(Cr,{children:($=e.tiposSolicitud)==null?void 0:$.tipoSolicitud})]}),d.jsxs(Rf,{children:[d.jsx(Ot,{children:"Descripción:"}),d.jsx(Af,{children:e.descripcion})]}),o&&d.jsxs(Er,{children:[d.jsx(Ot,{children:e.idEstado===2?"Delegado a:":"Responsable:"}),d.jsx(Cr,{children:e.idEstado===2&&p(e)?p(e):o((H=e.empleados)==null?void 0:H.idPlanta,e.idTipoSolicitud)})]})]})})]})},Nk=_.div`
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
`,zk=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${e=>e.$isResolved?"#f8f9fa":"white"};
  border-bottom: ${e=>e.$isExpanded?"1px solid #e9ecef":"none"};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`,Dk=_.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`,Uk=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Fk=_.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$priority};
`,Mk=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Bk=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wk=_.button`
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
`,qk=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hk=_.button`
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
`,$f=_.button`
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
`,Vk=_.div`
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
`,Er=_.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`,Ot=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.8rem;
  min-width: 120px;

  @media (max-width: 768px) {
    min-width: auto;
    font-size: 0.75rem;
  }
`,Cr=_.span`
  color: #495057;
  font-size: 0.8rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 0.75rem;
  }
`,Rf=_.div`
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e9ecef;
`,Kk=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Gk=_.button`
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
`,Af=_.div`
  color: #495057;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jk=({tickets:e,mode:t="admin",onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,expandedTicketId:a,onToggleExpand:l,currentUser:u=null})=>e.length===0?d.jsx(Of,{children:d.jsx(Yk,{children:"No se encontraron tickets"})}):d.jsx(Of,{children:d.jsx(Qk,{children:e.map(c=>d.jsx(hu,{ticket:c,mode:t,onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,isExpanded:a===c.idTicket,onToggleExpand:l,currentUser:u},c.idTicket))})}),Of=_.div`
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
`,Qk=_.div`
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
`,Yk=_.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  margin: 1rem;
`,Xk=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0),[o,i]=x.useState(null),s=async()=>{try{n(!0),i(null);const{data:a,error:l}=await I.from("usuarios").select("*").order("idUsuario",{ascending:!1});if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching users:",a)}finally{n(!1)}};return x.useEffect(()=>{s()},[]),{users:e,loading:r,error:o,refetch:s}},Zk=({ticket:e,isOpen:t,onClose:r,mode:n="view",onSubmit:o,onDelegate:i,onReassign:s=null,onSelfAssign:a=null,loading:l=!1,usuarioQueAtendio:u=null,currentUser:c=null})=>{var b,E,C,T,L,$,H,R,J,fe,ae,ce,ke;const[f,p]=x.useState(""),[y,w]=x.useState(""),[v,S]=x.useState(""),{users:h}=Xk(),m=()=>{if(y==="respond"){if(!f.trim()){alert("Debe ingresar una respuesta");return}o==null||o(f.trim(),"respond")}else if(y==="delegate"){if(!v){alert("Debe seleccionar un usuario para delegar");return}i==null||i(v)}else if(y==="cancel"){if(!f.trim()){alert("Debe ingresar el motivo de cancelación");return}o==null||o(f.trim(),"cancel")}else if(y==="reassign"){if(!v){alert("Debe seleccionar un usuario para re-asignar");return}s==null||s(v)}else if(y==="selfassign"){if(!f.trim()){alert("Debe ingresar una respuesta");return}a==null||a(),o==null||o(f.trim(),"respond")}else{if(!f.trim()&&n==="attend"){alert("Debe ingresar una respuesta");return}o==null||o(f.trim())}},g=()=>{p(""),w(""),S(""),r==null||r()},k=j=>{p(""),S(""),w(j)};return!t||!e?null:d.jsx(eS,{children:d.jsxs(tS,{children:[d.jsxs(rS,{children:[d.jsxs(nS,{children:[d.jsx(fS,{$priority:(E=(b=e.prioridades)==null?void 0:b.prioridad)==null?void 0:E.toLowerCase(),children:(C=e.prioridades)==null?void 0:C.prioridad}),d.jsxs("h3",{children:["#",e.idTicket]})]}),d.jsx(oS,{onClick:g,children:"×"})]}),d.jsxs(iS,{children:[d.jsx(uS,{children:d.jsxs(cS,{children:[(T=e.empleados)==null?void 0:T.nombre," (",(L=e.empleados)==null?void 0:L.codigoEmpleado,") -"," ",(H=($=e.empleados)==null?void 0:$.plantas)==null?void 0:H.planta]})}),d.jsxs(kS,{children:[d.jsx(SS,{children:"Fecha de generación:"})," ",d.jsx(bS,{children:(J=(R=e.seguimientos)==null?void 0:R.find(j=>j.idEstado===1))!=null&&J.fecha?nt(e.seguimientos.find(j=>j.idEstado===1).fecha):"No disponible"})]}),d.jsxs(dS,{children:["Tipo: ",(fe=e.tiposSolicitud)==null?void 0:fe.tipoSolicitud]}),d.jsx(hS,{children:d.jsx(pS,{children:e.descripcion})}),n==="attend"&&e.idEstado===2&&c&&(c.idRol===1||c.idRol===2)&&e.delegaciones&&e.delegaciones.length>0&&d.jsx(xS,{children:e.delegaciones.filter(j=>j.bActivo===!0).map(j=>{var O;return d.jsxs(_S,{children:[d.jsx("strong",{children:"Reasignado a:"})," ",((O=j.usuarios)==null?void 0:O.nombre)||"Usuario desconocido"]},j.idDelegacion)})}),n==="attend"&&e.idEstado===2&&c&&(c.idRol===1||c.idRol===2)&&d.jsxs(If,{children:[d.jsx(oo,{$active:y==="reassign",onClick:()=>k("reassign"),children:"Re-asignar"}),d.jsx(oo,{$active:y==="selfassign",onClick:()=>k("selfassign"),children:"Autoasignar"})]}),y==="reassign"&&d.jsxs(Df,{children:[d.jsx(Uf,{children:"Re-asignar a:"}),d.jsxs(Lf,{value:v,onChange:j=>S(j.target.value),children:[d.jsx("option",{value:"",children:"Seleccione un usuario"}),h.filter(j=>{var N,z;const O=((z=(N=e.delegaciones)==null?void 0:N.filter(D=>D.bActivo===!0))==null?void 0:z.map(D=>{var Oe;return(Oe=D.usuarios)==null?void 0:Oe.idUsuario}))||[];return j.idRol===3&&!O.includes(j.idUsuario)}).map(j=>d.jsx("option",{value:j.idUsuario,children:j.nombre},j.idUsuario))]})]}),y==="selfassign"&&d.jsxs(Nf,{children:[d.jsx(zf,{children:e.idEstado===5?"Su motivo de cancelación:":"Su respuesta:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>p(j.target.value),placeholder:e.idEstado===5?"Escriba su motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),n==="attend"&&e.idEstado===1&&d.jsxs(d.Fragment,{children:[d.jsxs(If,{children:[d.jsx(oo,{$active:y==="respond",onClick:()=>k("respond"),children:"Responder"}),d.jsx(oo,{$active:y==="delegate",onClick:()=>k("delegate"),children:"Reasignar"}),d.jsx(oo,{$active:y==="cancel",onClick:()=>k("cancel"),children:"Cancelar"})]}),y==="respond"&&d.jsxs(Nf,{children:[d.jsx(zf,{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>p(j.target.value),placeholder:e.idEstado===5?"Escriba el motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),y==="delegate"&&d.jsxs(Df,{children:[d.jsx(Uf,{children:"Delegar a:"}),d.jsxs(Lf,{value:v,onChange:j=>S(j.target.value),children:[d.jsx("option",{value:"",children:"Seleccione un usuario"}),h.filter(j=>j.idRol===3).map(j=>d.jsx("option",{value:j.idUsuario,children:j.nombre},j.idUsuario))]})]}),y==="cancel"&&d.jsxs(mS,{children:[d.jsx(gS,{children:"Motivo de cancelación:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>p(j.target.value),placeholder:"Escriba el motivo por el cual se cancela este ticket..."})]})]}),n==="attend"&&e.idEstado!==1&&!(e.idEstado===2&&c&&(c.idRol===1||c.idRol===2))&&d.jsxs(d.Fragment,{children:[d.jsx("label",{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),d.jsx(Oi,{rows:"4",value:f,onChange:j=>p(j.target.value),placeholder:e.idEstado===5?"Escriba el motivo de cancelación...":"Escriba su respuesta al ticket..."})]}),n==="response"&&d.jsxs(d.Fragment,{children:[d.jsxs(vS,{children:[d.jsx(yS,{children:e.idEstado===5?"Motivo de cancelación:":"Respuesta:"}),d.jsx(wS,{children:((ce=(ae=e.atenciones)==null?void 0:ae[0])==null?void 0:ce.respuesta)||(e.idEstado===5?"No hay motivo de cancelación disponible":"No hay respuesta disponible")})]}),d.jsxs(lS,{children:[d.jsx("strong",{children:e.idEstado===5?"Cancelado por:":"Atendido por:"})," ",(u==null?void 0:u.nombre)||"No disponible",d.jsx("br",{}),d.jsx("strong",{children:e.idEstado===5?"Fecha de cancelación:":"Fecha de atención:"})," ",u!=null&&u.fecha?nt(u.fecha):"No disponible"]}),e.idEstado===4&&((ke=e.atenciones)==null?void 0:ke[0])&&d.jsxs(ES,{children:[d.jsx(CS,{children:"Evaluación del Empleado"}),e.atenciones[0].calificacion&&d.jsxs(jS,{children:[d.jsx(PS,{children:"Calificación:"}),d.jsx(TS,{$rating:e.atenciones[0].calificacion,children:[1,2,3].map(j=>d.jsx($S,{$filled:j<=e.atenciones[0].calificacion,children:"★"},j))})]}),e.atenciones[0].comentario&&d.jsxs(RS,{children:[d.jsx(AS,{children:"Comentario del empleado:"}),d.jsx(OS,{children:e.atenciones[0].comentario})]}),!e.atenciones[0].calificacion&&!e.atenciones[0].comentario&&d.jsx(IS,{children:"El empleado no proporcionó evaluación del servicio"})]})]})]}),n!=="response"&&e.idEstado!==4&&(n==="attend"&&e.idEstado===1&&y||n==="attend"&&e.idEstado===2&&y||n==="attend"&&e.idEstado!==1&&!(e.idEstado===2&&c&&(c.idRol===1||c.idRol===2))||n!=="attend")&&d.jsx(sS,{children:n==="attend"&&d.jsx(aS,{onClick:m,disabled:l||y==="respond"&&!f.trim()||y==="cancel"&&!f.trim()||y==="delegate"&&!v||y==="reassign"&&!v||y==="selfassign"&&!f.trim(),children:l?"Enviando...":y==="delegate"?"Reasignar Ticket":y==="cancel"?"Cancelar Ticket":y==="reassign"?"Re-asignar Ticket":y==="selfassign"?"Autoasignar y Responder":"Enviar Respuesta"})})]})})},eS=_.div`
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
`,tS=_.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`,rS=_.div`
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
`,nS=_.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,oS=_.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`,iS=_.div`
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
`,Oi=_.textarea`
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
`,sS=_.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
`,aS=_.button`
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
`,lS=_.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`,uS=_.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,cS=_.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,dS=_.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,fS=_.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  background: ${e=>{switch(e.$priority){case"alta":return"#dc3545";case"media":return"#fd7e14";case"baja":return"#28a745";default:return"#6c757d"}}};

  color: white;
`,hS=_.div`
  margin-bottom: 1.5rem;
`,pS=_.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,If=_.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,oo=_.button`
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
`,Lf=_.select`
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
`,Nf=_.div`
  margin-top: 1rem;
`,zf=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Df=_.div`
  margin-top: 1rem;
`,Uf=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,mS=_.div`
  margin-top: 1rem;
`,gS=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,vS=_.div`
  margin-bottom: 1.5rem;
`,yS=_.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,wS=_.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,xS=_.div`
  margin-bottom: 1.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`,_S=_.p`
  margin: 1rem;
  color: #424242;
  font-size: 1rem;
  font-weight: 500;
  vertical-align: middle;
`,kS=_.div`
  margin-bottom: 0.5rem;
`,SS=_.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,bS=_.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  display: inline;
`,ES=_.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f0f8f5;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  border-left: 4px solid #28a745;
`,CS=_.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
`,jS=_.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,PS=_.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,TS=_.div`
  display: flex;
  gap: 0.2rem;
`,$S=_.span`
  font-size: 1.2rem;
  color: ${e=>e.$filled?"#ffc107":"#e9ecef"};
  text-shadow: ${e=>e.$filled?"0 0 1px rgba(0,0,0,0.3)":"none"};
`,RS=_.div`
  margin-bottom: 0.5rem;
`,AS=_.div`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,OS=_.div`
  padding: 0.75rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2rem;
  font-style: italic;
`,IS=_.div`
  color: #6c757d;
  font-style: italic;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
`,LS=()=>{const{user:e,logout:t}=Vn(),[r,n]=x.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[o,i]=x.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[s,a]=x.useState("sinAtender"),[l,u]=x.useState({show:!1,mode:"view",ticket:null}),[c,f]=x.useState(null),[p,y]=x.useState(null),{tickets:w,loading:v,refetchTickets:S}=fk(e),h=hk(w),{getResponsable:m}=Cg(),{crearAtencion:g,delegarTicket:k,cancelarTicket:b,reasignarTicket:E,autoasignarTicket:C,loading:T}=pk(e),{obtenerUsuarioQueAtendio:L}=jg(),{plantas:$}=xg(),{tipos:H}=kg(),{prioridades:R}=Sg();x.useEffect(()=>{e&&S(r)},[r,e,S]);const J=(F,X)=>{i(Ke=>({...Ke,[F]:X}))},fe=()=>{n(o)},ae=()=>{const F={planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"};i(F),n(F)},ce=F=>{u({show:!0,mode:"attend",ticket:F})},ke=async F=>{u({show:!0,mode:"response",ticket:F});try{const X=await L(F.idTicket,F.idEstado);f(X)}catch(X){console.error("Error obteniendo usuario que atendió:",X),f(null)}},j=()=>{u({show:!1,mode:"view",ticket:null}),f(null)},O=async(F,X="respond")=>{let Ke;try{X==="respond"?Ke=await g(l.ticket.idTicket,e.id,F):X==="cancel"&&(Ke=await b(l.ticket.idTicket,e.id,F)),Ke.success?(j(),S(r)):alert("Error al procesar la solicitud: "+Ke.error)}catch(At){alert("Error inesperado: "+At.message)}},N=async F=>{const X=await k(l.ticket.idTicket,e.id,F);X.success?(j(),S(r)):alert("Error al delegar el ticket: "+X.error)},z=async F=>{if(!l.ticket)return;const X=await E(l.ticket.idTicket,F);X.success?(j(),S(r)):alert("Error al re-asignar el ticket: "+X.error)},D=async()=>{if(!l.ticket)return;const F=await C(l.ticket.idTicket);F.success||alert("Error al autoasignarse el ticket: "+F.error)},Oe=F=>{y(p===F?null:F)},je=w.filter(F=>{if((e==null?void 0:e.idRol)===3||!s)return!0;switch(s){case"sinAtender":return F.idEstado===1;case"reasignados":return F.idEstado===2;case"atendidos":return F.idEstado===3;case"cerrados":return F.idEstado===4;case"cancelados":return F.idEstado===5;default:return!0}}),He=F=>{a(F)},Se=F=>{switch(F){case 3:return"#E06363";case 2:return"#E0C563";case 1:return"#636EE0";default:return"#6c757d"}},Ve=F=>nt(F);return v?d.jsx(Ff,{children:d.jsx(zS,{children:"Cargando dashboard..."})}):d.jsxs(Ff,{children:[d.jsxs(NS,{children:[d.jsx(mk,{user:e,onLogout:t}),(e==null?void 0:e.idRol)!==3&&d.jsx(wk,{stats:h,statsFilter:s,onStatsFilterChange:He}),d.jsx(Ck,{tempFilters:o,onTempFilterChange:J,onApplyFilters:fe,onClearFilters:ae,plantas:$,tipos:H,prioridades:R})]}),d.jsx(Jk,{tickets:je,mode:"admin",onAtender:ce,onVerRespuesta:ke,getResponsable:m,formatDate:Ve,getPriorityColor:Se,expandedTicketId:p,onToggleExpand:Oe,currentUser:e}),d.jsx(Zk,{ticket:l.ticket,isOpen:l.show,onClose:j,mode:l.mode,onSubmit:O,onDelegate:N,onReassign:z,onSelfAssign:D,currentUser:e,loading:T,usuarioQueAtendio:c})]})},Ff=_.div`
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
`,NS=_.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,zS=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: var(--color-gray);
`,DS=e=>{const[t,r]=x.useState([]),[n,o]=x.useState(!1),[i,s]=x.useState(null);x.useEffect(()=>{(async()=>{if(e){o(!0),s(null);try{const{data:p,error:y}=await I.from("tickets").select(`
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
          `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(y)throw y;r(p||[])}catch(p){s(p.message),console.error("Error fetching employee tickets:",p)}finally{o(!1)}}})()},[e]);const a=async()=>{if(e){o(!0),s(null);try{const{data:f,error:p}=await I.from("tickets").select(`
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
        `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(p)throw p;r(f||[])}catch(f){s(f.message),console.error("Error fetching employee tickets:",f)}finally{o(!1)}}},l=async(f,p,y="")=>{try{o(!0),s(null);const{data:w,error:v}=await I.from("atenciones").select("*").eq("idTicket",f);if(v)throw new Error(`Error consultando atenciones: ${v.message}`);if(!w||w.length===0)throw new Error(`No se encontró ninguna atención previa para el ticket ${f}. El ticket debe haber sido atendido antes de poder calificarlo.`);const{error:S}=await I.from("tickets").update({idEstado:4}).eq("idTicket",f);if(S)throw new Error(`Error actualizando ticket: ${S.message}`);const{error:h}=await I.from("seguimientos").insert({idTicket:f,idEstado:4,fecha:new Date().toISOString()});if(h)throw new Error(`Error insertando seguimiento: ${h.message}`);const m=w[0].idAtencion,{data:g,error:k}=await I.from("atenciones").update({calificacion:p,comentario:y}).eq("idAtencion",m).select();if(k)throw new Error(`Error actualizando atención: ${k.message}`);if(!g||g.length===0)throw new Error("No se pudo actualizar la atención. El registro pudo haber sido modificado por otra transacción.");return await a(),{success:!0,message:"Calificación enviada correctamente"}}catch(w){const v=w.message||"Error desconocido al calificar ticket";return s(v),{success:!1,error:v}}finally{o(!1)}},u=t.filter(f=>!f.atenciones||f.atenciones.length===0),c=t.filter(f=>f.atenciones&&f.atenciones.length>0);return{tickets:t,pendingTickets:u,resolvedTickets:c,loading:n,error:i,refetch:a,calificarTicket:l}},US=({employeeData:e,onTicketSubmitted:t,onBack:r})=>{const[n,o]=x.useState({idTipoSolicitud:"",descripcion:"",idPrioridad:""}),[i,s]=x.useState({}),{tipos:a,loading:l}=kg(),{prioridades:u,loading:c}=Sg(),{createTicket:f,loading:p}=q_(),y=(h,m)=>{o(g=>({...g,[h]:m})),i[h]&&s(g=>({...g,[h]:""}))},w=()=>{const h={};return n.idTipoSolicitud||(h.idTipoSolicitud="Debe seleccionar un tipo de solicitud"),n.descripcion.trim()||(h.descripcion="Debe proporcionar una descripción"),n.idPrioridad||(h.idPrioridad="Debe seleccionar una prioridad"),s(h),Object.keys(h).length===0},v=async h=>{if(h.preventDefault(),!w())return;const m={idEmpleado:e.idEmpleado,idTipoSolicitud:parseInt(n.idTipoSolicitud),descripcion:n.descripcion.trim(),idPrioridad:parseInt(n.idPrioridad)},g=await f(m);g.success&&t(g.ticket)};return l||c?d.jsx(Mf,{children:d.jsx(FS,{children:"Cargando formulario..."})}):d.jsx(Mf,{children:d.jsxs(KS,{children:[d.jsxs(GS,{children:[r&&d.jsx(VS,{onClick:r,type:"button",title:"Volver",children:"← Volver"}),d.jsx(JS,{children:"Crear Nueva Solicitud"})]}),d.jsxs(MS,{onSubmit:v,children:[d.jsxs(BS,{children:[d.jsxs(Bf,{children:[d.jsx(Qa,{children:"Tipo de Solicitud *"}),d.jsxs(Wf,{value:n.idTipoSolicitud,onChange:h=>y("idTipoSolicitud",h.target.value),hasError:i.idTipoSolicitud,children:[d.jsx("option",{value:"",children:"Seleccione un tipo..."}),a.sort((h,m)=>h.idTipoSolicitud-m.idTipoSolicitud).map(h=>d.jsx("option",{value:h.idTipoSolicitud,children:h.tipoSolicitud},h.idTipoSolicitud))]}),i.idTipoSolicitud&&d.jsx(Ya,{children:i.idTipoSolicitud})]}),d.jsxs(Bf,{children:[d.jsx(Qa,{children:"Prioridad *"}),d.jsxs(Wf,{value:n.idPrioridad,onChange:h=>y("idPrioridad",h.target.value),hasError:i.idPrioridad,children:[d.jsx("option",{value:"",children:"Seleccione una prioridad..."}),u.map(h=>d.jsx("option",{value:h.idPrioridad,children:h.prioridad},h.idPrioridad))]}),i.idPrioridad&&d.jsx(Ya,{children:i.idPrioridad})]})]}),d.jsxs(WS,{children:[d.jsx(Qa,{children:"Descripción del Problema *"}),d.jsx(qS,{rows:"3",placeholder:"Describe detalladamente tu solicitud o problema...",value:n.descripcion,onChange:h=>y("descripcion",h.target.value),hasError:i.descripcion}),i.descripcion&&d.jsx(Ya,{children:i.descripcion})]}),d.jsx(HS,{type:"submit",disabled:p,children:p?"📋 Creando ticket...":"📋 Crear Ticket"})]})]})})},Mf=_.div`
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
`,FS=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-gray);
  font-size: 1.1rem;
`,MS=_.form`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,BS=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`,WS=_.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,Bf=_.div`
  display: flex;
  flex-direction: column;
`,Qa=_.label`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,Wf=_.select`
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
`,qS=_.textarea`
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
`,Ya=_.span`
  color: var(--color-danger);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`,HS=_.button`
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
`,VS=_.button`
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
`,KS=_.div`
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
`,GS=_.div`
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
`,JS=_.h2`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`,QS=({employeeData:e,onLogout:t})=>{var X,Ke,At,ct;const{logout:r}=Vn(),[n,o]=x.useState("pending"),[i,s]=x.useState(!1),[a,l]=x.useState(null),[u,c]=x.useState(!0),[f,p]=x.useState(null),[y,w]=x.useState(!1),[v,S]=x.useState(null),[h,m]=x.useState(null),[g,k]=x.useState(1),[b,E]=x.useState(""),[C,T]=x.useState(!1),[L,$]=x.useState(!1),{buscarEmpleadoPorCodigo:H}=bg(),{esquemas:R}=_g(),{getResponsable:J}=Cg(),{obtenerUsuarioQueAtendio:fe}=jg(),{pendingTickets:ae,resolvedTickets:ce,loading:ke,error:j,refetch:O,calificarTicket:N}=DS(a==null?void 0:a.idEmpleado),z=u||ke;x.useEffect(()=>{(async()=>{if(e!=null&&e.codigoEmpleado){c(!0);try{const le=await H(e.codigoEmpleado);le.success&&le.empleado?l(le.empleado):(console.warn("No se encontró el empleado en BD, usando datos de sesión"),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}}))}catch(le){console.error("Error al buscar empleado:",le),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}finally{c(!1)}}})()},[e,H]);const D=U=>{switch(U){case 1:return"#dc3545";case 2:return"#ffc107";case 3:return"#28a745";default:return"#6c757d"}},Oe=U=>nt(U),je=U=>{p(f===U?null:U)},He=async U=>{if(S(U),w(!0),m(null),k(1),E(""),T(!1),U.idEstado===3||U.idEstado===5||U.atenciones&&U.atenciones.length>0)try{const le=await fe(U.idTicket,U.idEstado);m(le),U.idEstado===3&&U.atenciones&&U.atenciones.length>0&&(!U.atenciones[0].calificacion||U.atenciones[0].calificacion===0)&&T(!0)}catch(le){console.error("Error obteniendo usuario que atendió/canceló:",le),m(null)}},Se=async()=>{if(!(b.trim()&&g===1&&!window.confirm("Has escrito un comentario pero tienes la calificación mínima (1 estrella). ¿Deseas continuar?"))){$(!0);try{const U=await N(v.idTicket,g,b);U.success?(alert("Calificación enviada exitosamente. El ticket ha sido cerrado."),T(!1),w(!1)):alert(`Error al enviar la calificación: ${U.error}`)}catch(U){console.error("Error enviando calificación:",U),alert("Error al enviar la calificación. Inténtalo de nuevo.")}finally{$(!1)}}},Ve=()=>{s(!1),O()},F=()=>{r(),t&&t()};return i?d.jsx(US,{employeeData:a||e,onTicketSubmitted:Ve,onLogout:F,onBack:()=>s(!1)}):d.jsxs(YS,{children:[d.jsxs(XS,{children:[d.jsxs(eb,{children:[d.jsxs(tb,{children:[d.jsx(nb,{children:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}),d.jsxs(ob,{children:["Código:"," ",(a==null?void 0:a.codigoEmpleado)||(e==null?void 0:e.codigoEmpleado)," ","| Planta:"," ",((X=a==null?void 0:a.plantas)==null?void 0:X.planta)||(e==null?void 0:e.planta)," | Esquema:"," ",((Ke=R.find(U=>U.idEsquemaPago===((a==null?void 0:a.idEsquemaPago)||(e==null?void 0:e.idEsquemaPago))))==null?void 0:Ke.esquemaPago)||"No configurado"]})]}),d.jsx(rb,{children:d.jsx(ib,{onClick:F,children:"Cerrar Sesión"})})]}),d.jsxs(sb,{children:[d.jsxs(qf,{$active:n==="pending",onClick:()=>{o("pending"),p(null)},children:["Tickets Pendientes (",ae.length,")"]}),d.jsxs(qf,{$active:n==="resolved",onClick:()=>{o("resolved"),p(null)},children:["Tickets Resueltos (",ce.length,")"]})]})]}),d.jsx(ZS,{children:d.jsx(ab,{children:d.jsx(lb,{children:z?d.jsx(db,{children:"Cargando tickets..."}):j?d.jsxs(fb,{children:["Error al cargar tickets: ",j]}):d.jsx(d.Fragment,{children:n==="pending"?d.jsx(d.Fragment,{children:ae.length===0?d.jsxs(Hf,{children:[d.jsx(Vf,{children:"📋"}),d.jsx(Kf,{children:"No tienes tickets pendientes"}),d.jsx(Gf,{children:"Aquí aparecerán los tickets que hayas creado y aún no han sido atendidos."})]}):ae.map(U=>d.jsx(hu,{ticket:U,mode:"employee",formatDate:Oe,getPriorityColor:D,getResponsable:J,isResolved:!1,isExpanded:f===U.idTicket,onToggleExpand:je,onShowDetails:He},U.idTicket))}):d.jsx(d.Fragment,{children:ce.length===0?d.jsxs(Hf,{children:[d.jsx(Vf,{children:"✅"}),d.jsx(Kf,{children:"No tienes tickets resueltos"}),d.jsx(Gf,{children:"Aquí aparecerán los tickets que hayan sido atendidos."})]}):ce.map(U=>d.jsx(hu,{ticket:U,mode:"employee",formatDate:Oe,getPriorityColor:D,getResponsable:J,isResolved:!0,isExpanded:f===U.idTicket,onToggleExpand:je,onShowDetails:He},U.idTicket))})})})})}),d.jsx(ub,{children:d.jsx(cb,{onClick:()=>s(!0),children:"+ Crear Nuevo Ticket"})}),y&&d.jsx(hb,{children:d.jsxs(pb,{children:[d.jsxs(mb,{children:[d.jsxs(wb,{children:[d.jsx(xb,{$color:D(v==null?void 0:v.idPrioridad),children:(At=v==null?void 0:v.prioridades)==null?void 0:At.prioridad}),d.jsxs("h3",{children:["#",v==null?void 0:v.idTicket]})]}),d.jsx(gb,{onClick:()=>w(!1),children:"×"})]}),d.jsxs(Eb,{children:[d.jsxs(fo,{children:[d.jsx(ho,{children:"Fecha de creación:"}),d.jsx(po,{children:(()=>{var le,Kn;const U=(Kn=(le=v==null?void 0:v.seguimientos)==null?void 0:le.find(ii=>ii.idEstado===1))==null?void 0:Kn.fecha;return U?nt(U):"Pendiente seguimiento inicial"})()})]}),d.jsxs(fo,{children:[d.jsx(ho,{children:"Tipo:"}),d.jsx(po,{children:(ct=v==null?void 0:v.tiposSolicitud)==null?void 0:ct.tipoSolicitud})]}),d.jsx(_b,{children:d.jsx(kb,{children:v==null?void 0:v.descripcion})}),v!=null&&v.atenciones&&v.atenciones.length>0||(v==null?void 0:v.idEstado)===5?d.jsxs(d.Fragment,{children:[(v==null?void 0:v.atenciones)&&v.atenciones.length>0&&d.jsxs(Sb,{children:[d.jsx(bb,{children:"Respuesta:"}),d.jsx(Pb,{children:v.atenciones[0].respuesta||"No hay respuesta disponible"})]}),d.jsxs(vb,{$idEstado:v==null?void 0:v.idEstado,children:[d.jsxs(fo,{children:[d.jsx(ho,{children:(v==null?void 0:v.idEstado)===5?"Cancelado por:":"Atendido por:"}),d.jsx(po,{children:(h==null?void 0:h.nombre)||"No disponible"})]}),d.jsxs(fo,{children:[d.jsx(ho,{children:(v==null?void 0:v.idEstado)===5?"Fecha de cancelación:":"Fecha de atención:"}),d.jsx(po,{children:(()=>{var Kn,ii;const U=(v==null?void 0:v.idEstado)===5?5:3,le=(ii=(Kn=v==null?void 0:v.seguimientos)==null?void 0:Kn.find(Pg=>Pg.idEstado===U))==null?void 0:ii.fecha;return le?nt(le):"No disponible"})()})]})]}),(v==null?void 0:v.atenciones)&&v.atenciones.length>0&&v.atenciones[0].calificacion&&v.atenciones[0].calificacion>0&&d.jsxs(Ib,{children:[d.jsx(yb,{children:"Tu calificación:"}),d.jsx(Lb,{children:Array.from({length:3},(U,le)=>d.jsx(Nb,{$filled:le<v.atenciones[0].calificacion,children:"★"},le))}),v.atenciones[0].comentario&&d.jsxs(zb,{children:[d.jsx("strong",{children:"Tu comentario:"})," ",v.atenciones[0].comentario]})]})]}):null,C&&(v==null?void 0:v.idEstado)===3&&d.jsxs(d.Fragment,{children:[d.jsx(Tb,{children:"¿Cómo lo calificarías?"}),d.jsx($b,{children:Array.from({length:3},(U,le)=>d.jsx(Rb,{$filled:le<g,onClick:()=>k(le+1)},le))}),d.jsx(Ab,{placeholder:"Comentario adicional (opcional)",value:b,onChange:U=>E(U.target.value),rows:2})]})]}),d.jsxs(Cb,{children:[C&&(v==null?void 0:v.idEstado)===3&&d.jsx(Ob,{onClick:Se,disabled:L,children:L?"Enviando...":"Enviar Calificación"}),d.jsx(jb,{onClick:()=>w(!1),children:"Cerrar"})]})]})})]})},YS=_.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,XS=_.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`,ZS=_.div`
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
`,eb=_.header`
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
`,tb=_.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,rb=_.div`
  display: flex;
  align-items: center;
`,nb=_.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
`,ob=_.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,ib=_.button`
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
`,sb=_.div`
  display: flex;
  background: #e9ecef;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`,ab=_.div`
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
`,qf=_.button`
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
`,lb=_.section`
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
`,ub=_.div`
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
`,cb=_.button`
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
`,db=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  min-height: 300px;
`,fb=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
  min-height: 300px;
`,Hf=_.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  min-height: 300px;
`,Vf=_.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Kf=_.h3`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`,Gf=_.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,hb=_.div`
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
`,pb=_.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`,mb=_.div`
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
`,gb=_.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`,fo=_.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.4rem 0;
  border-bottom: 1px dotted #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`,ho=_.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
  min-width: fit-content;
  margin-right: 1rem;
`,po=_.span`
  color: #495057;
  font-size: 0.9rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
  }
`,vb=_.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  background: ${e=>{switch(e.$idEstado){case 5:return"var(--color-estado-cancelado-bg)";case 3:return"#e9f7ef";default:return"#e9f7ef"}}};
  border-radius: 4px;
  border-left: 4px solid ${e=>{switch(e.$idEstado){case 5:return"var(--color-estado-cancelado)";case 3:return"#28a745";default:return"#28a745"}}};
  
  ${fo} {
    padding: 0.25rem 0;
    margin-bottom: 0;
  }
  
  ${ho} {
    font-size: 0.85rem;
  }
  
  ${po} {
    font-size: 0.85rem;
  }
`,yb=_.div`
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,wb=_.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,xb=_.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$color||"var(--color-gray)"};
`,_b=_.div`
  margin-bottom: 1rem;
`,kb=_.p`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid var(--color-primary);
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
  margin: 0;
`,Sb=_.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
`,bb=_.h5`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-weight: 600;
`,Eb=_.div`
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
`,Cb=_.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
`,jb=_.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #5a6268;
  }
`,Pb=_.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-bottom: 1rem;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`,Tb=_.h5`
  margin: 1.5rem 0 0.8rem 0;
  color: var(--color-primary);
  text-align: center;
  font-size: 1rem;
`,$b=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
`,Rb=_.button`
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
`,Ab=_.textarea`
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
`,Ob=_.button`
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
`,Ib=_.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #e8f5e8;
  border-radius: 4px;
  border: 1px solid #28a745;
`,Lb=_.div`
  display: inline-flex;
  margin-left: 0.5rem;
`,Nb=_.span`
  color: ${e=>e.$filled?"#ffc107":"#ddd"};
  font-size: 1.2rem;
`,zb=_.div`
  margin-top: 0.5rem;
  font-style: italic;
  color: #495057;
`,Db=()=>{var v,S,h,m;const{token:e}=O0(),t=Bn(),[r,n]=x.useState(null),[o,i]=x.useState(!0),[s,a]=x.useState(!1),[l,u]=x.useState(""),[c,f]=x.useState(null),[p,y]=x.useState(!1);x.useEffect(()=>{e&&(async()=>{try{i(!0);const{data:k,error:b}=await I.from("ticket_tokens").select(`
            *,
            tickets (
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            ),
            usuarios (nombre, correo)
          `).eq("token",e).eq("usado",!1).gt("fecha_expiracion",new Date().toISOString()).single();if(b||!k)throw(b==null?void 0:b.code)==="PGRST116"?new Error("Enlace inválido, expirado o ya utilizado. Este ticket puede haber sido reasignado a otro usuario."):new Error("Enlace inválido, expirado o ya utilizado");if(k.tickets.idEstado!==2)throw new Error("Este ticket ya no está disponible para responder");const{data:E,error:C}=await I.from("delegaciones").select("bActivo").eq("idTicket",k.tickets.idTicket).eq("idUsuario",k.id_usuario).eq("bActivo",!0).single();if(C||!E)throw new Error("Este ticket ha sido reasignado a otro usuario. Tu enlace ya no es válido.");const{data:T,error:L}=await I.from("seguimientos").select("fecha").eq("idTicket",k.tickets.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();T&&!L&&(k.tickets.fechaCreacion=T.fecha),n(k)}catch(k){console.error("Error cargando ticket:",k),f(k.message)}finally{i(!1)}})()},[e]);const w=async()=>{if(!l.trim()){f("Por favor escribe una respuesta");return}try{a(!0),f(null);const{error:g}=await I.from("atenciones").insert({idTicket:r.tickets.idTicket,respuesta:l.trim()});if(g)throw g;const{error:k}=await I.from("seguimientos").insert({idTicket:r.tickets.idTicket,idUsuario:r.id_usuario,idEstado:3});if(k)throw k;const{error:b}=await I.from("tickets").update({idEstado:3}).eq("idTicket",r.tickets.idTicket);if(b)throw b;const{error:E}=await I.from("ticket_tokens").update({usado:!0}).eq("token",e);if(E)throw E;const{error:C}=await I.from("delegaciones").update({bActivo:!1}).eq("idTicket",r.tickets.idTicket).eq("idUsuario",r.id_usuario);if(C)throw C;y(!0),setTimeout(()=>{window.close(),t("/")},3e3)}catch(g){console.error("Error enviando respuesta:",g),f("Error enviando la respuesta: "+g.message)}finally{a(!1)}};return o?d.jsx(Ii,{children:d.jsxs(tE,{children:[d.jsx(rE,{}),d.jsx("p",{children:"Cargando ticket..."})]})}):c?d.jsx(Ii,{children:d.jsxs(nE,{children:[d.jsx(oE,{children:"❌"}),d.jsx(iE,{children:"Enlace No Válido"}),d.jsx(sE,{children:c}),d.jsx(aE,{children:"Este enlace puede haber expirado, ya fue utilizado, o el ticket ya no está disponible para responder."})]})}):p?d.jsx(Ii,{children:d.jsxs(lE,{children:[d.jsx(uE,{children:"✅"}),d.jsx(cE,{children:"¡Respuesta Enviada!"}),d.jsx(dE,{children:"Tu respuesta ha sido registrada exitosamente. El ticket ha sido marcado como atendido."}),d.jsx(fE,{children:"Esta ventana se cerrará automáticamente en unos segundos..."})]})}):d.jsx(Ii,{children:d.jsxs(Ub,{children:[d.jsxs(Fb,{children:[d.jsx(Mb,{children:"🎫"}),d.jsx(Bb,{children:d.jsxs(Wb,{children:["Ticket #",r.tickets.idTicket]})})]}),d.jsxs(qb,{children:[d.jsxs(Li,{children:[d.jsx(Ni,{children:"Empleado:"}),d.jsx(zi,{children:((v=r.tickets.empleados)==null?void 0:v.nombre)||"No especificado"})]}),d.jsxs(Li,{children:[d.jsx(Ni,{children:"Planta:"}),d.jsx(zi,{children:((h=(S=r.tickets.empleados)==null?void 0:S.plantas)==null?void 0:h.planta)||"No especificada"})]}),d.jsxs(Li,{children:[d.jsx(Ni,{children:"Tipo:"}),d.jsx(zi,{children:((m=r.tickets.tiposSolicitud)==null?void 0:m.tipoSolicitud)||"No especificado"})]}),d.jsxs(Li,{children:[d.jsx(Ni,{children:"Fecha:"}),d.jsx(zi,{children:nt(r.tickets.fechaCreacion)})]})]}),d.jsxs(Hb,{children:[d.jsx(Jf,{children:"Descripción del Problema"}),d.jsx(Vb,{children:r.tickets.descripcion})]}),d.jsxs(Kb,{children:[d.jsx(Jf,{children:"Tu Respuesta"}),d.jsx(Gb,{value:l,onChange:g=>u(g.target.value),placeholder:"Escribe aquí tu respuesta o solución al problema...",rows:4,disabled:s}),d.jsxs(Jb,{$isNearLimit:l.length>400,children:[l.length,"/500 caracteres"]})]}),c&&d.jsxs(hE,{children:["❌ ",c]}),d.jsxs(Qb,{children:[d.jsx(Yb,{onClick:w,disabled:!l.trim()||s,children:s?"Enviando...":"Enviar Respuesta y Cerrar Ticket"}),d.jsx(Xb,{children:"Una vez enviada la respuesta, el ticket se marcará como atendido y este enlace quedará deshabilitado."})]}),d.jsx(Zb,{children:d.jsxs(eE,{children:["Respondiendo como: ",d.jsx("strong",{children:r.usuarios.nombre})," (",r.usuarios.correo,")"]})})]})})},Ii=_.div`
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
`,Ub=_.div`
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
`,Fb=_.div`
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
`,Mb=_.div`
  font-size: 36px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`,Bb=_.div`
  flex: 1;
`,Wb=_.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,qb=_.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,Li=_.div`
  display: flex;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 6px;
  }
`,Ni=_.span`
  font-weight: 600;
  color: #374151;
  width: 120px;
  flex-shrink: 0;
`,zi=_.span`
  color: #1f2937;
  flex: 1;
`,Hb=_.div`
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,Jf=_.h3`
  margin: 0 0 10px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Vb=_.div`
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
`,Kb=_.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,Gb=_.textarea`
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
`,Jb=_.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
  color: ${e=>e.$isNearLimit?"#ef4444":"#6b7280"};
`,Qb=_.div`
  padding: 20px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,Yb=_.button`
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
`,Xb=_.p`
  text-align: center;
  margin: 10px 0 0 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Zb=_.div`
  background: #e5e7eb;
  padding: 15px 20px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`,eE=_.p`
  margin: 0;
  text-align: center;
  color: #374151;
  font-size: 13px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,tE=_.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`,rE=_.div`
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
`,nE=_.div`
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
`,oE=_.div`
  font-size: 64px;
  margin-bottom: 20px;
`,iE=_.h2`
  color: #dc2626;
  margin: 0 0 15px 0;
  font-size: 24px;
`,sE=_.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,aE=_.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,lE=_.div`
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
`,uE=_.div`
  font-size: 64px;
  margin-bottom: 20px;
`,cE=_.h2`
  color: #059669;
  margin: 0 0 15px 0;
  font-size: 24px;
`,dE=_.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,fE=_.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,hE=_.div`
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
`,pE=()=>{const{user:e,employeeData:t,logout:r,loading:n}=Vn();return n?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.2rem"},children:"Cargando..."}):d.jsxs(G0,{children:[d.jsx(Tr,{path:"/ticket/:token",element:d.jsx(Db,{})}),d.jsx(Tr,{path:"/admin",element:e&&e.type==="admin"?d.jsx(LS,{}):d.jsx(Gr,{to:"/login",replace:!0})}),d.jsx(Tr,{path:"/employee",element:t&&t.type==="employee"?d.jsx(QS,{employeeData:t,onLogout:r}):d.jsx(Gr,{to:"/login",replace:!0})}),d.jsx(Tr,{path:"/login",element:d.jsx(ok,{})}),d.jsx(Tr,{path:"/",element:e&&e.type==="admin"?d.jsx(Gr,{to:"/admin",replace:!0}):t&&t.type==="employee"?d.jsx(Gr,{to:"/employee",replace:!0}):d.jsx(Gr,{to:"/login",replace:!0})}),d.jsx(Tr,{path:"*",element:d.jsx(Gr,{to:"/",replace:!0})})]})};function mE(){return d.jsxs(vw,{basename:"/ventanilla",children:[d.jsx(Px,{}),d.jsx(W_,{children:d.jsx(pE,{})})]})}Xa.createRoot(document.getElementById("root")).render(d.jsx(Tt.StrictMode,{children:d.jsx(mE,{})}));export{I as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}