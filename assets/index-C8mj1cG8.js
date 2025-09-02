(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Fg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var Xf={exports:{}},js={},Zf={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),Mg=Symbol.for("react.portal"),Bg=Symbol.for("react.fragment"),qg=Symbol.for("react.strict_mode"),Wg=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),Vg=Symbol.for("react.context"),Gg=Symbol.for("react.forward_ref"),Kg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),Qg=Symbol.for("react.lazy"),_u=Symbol.iterator;function Yg(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var eh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},th=Object.assign,rh={};function Nn(e,t,r){this.props=e,this.context=t,this.refs=rh,this.updater=r||eh}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nh(){}nh.prototype=Nn.prototype;function dc(e,t,r){this.props=e,this.context=t,this.refs=rh,this.updater=r||eh}var fc=dc.prototype=new nh;fc.constructor=dc;th(fc,Nn.prototype);fc.isPureReactComponent=!0;var ju=Array.isArray,oh=Object.prototype.hasOwnProperty,hc={current:null},ih={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)oh.call(t,n)&&!ih.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Vo,type:e,key:i,ref:s,props:o,_owner:hc.current}}function Xg(e,t){return{$$typeof:Vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vo}function Zg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Cu=/\/+/g;function na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zg(""+e.key):t.toString(36)}function Ti(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vo:case Mg:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+na(s,0):n,ju(o)?(r="",e!=null&&(r=e.replace(Cu,"$&/")+"/"),Ti(o,t,r,"",function(c){return c})):o!=null&&(pc(o)&&(o=Xg(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Cu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",ju(e))for(var a=0;a<e.length;a++){i=e[a];var l=n+na(i,a);s+=Ti(i,t,r,l,o)}else if(l=Yg(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=n+na(i,a++),s+=Ti(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ni(e,t,r){if(e==null)return e;var n=[],o=0;return Ti(e,n,"","",function(i){return t.call(r,i,o++)}),n}function ev(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},$i={transition:null},tv={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:$i,ReactCurrentOwner:hc};W.Children={map:ni,forEach:function(e,t,r){ni(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Nn;W.Fragment=Bg;W.Profiler=Wg;W.PureComponent=dc;W.StrictMode=qg;W.Suspense=Kg;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;W.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=th({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=hc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)oh.call(t,l)&&!ih.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:Vo,type:e.type,key:o,ref:i,props:n,_owner:s}};W.createContext=function(e){return e={$$typeof:Vg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hg,_context:e},e.Consumer=e};W.createElement=sh;W.createFactory=function(e){var t=sh.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Gg,render:e}};W.isValidElement=pc;W.lazy=function(e){return{$$typeof:Qg,_payload:{_status:-1,_result:e},_init:ev}};W.memo=function(e,t){return{$$typeof:Jg,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Ne.current.useCallback(e,t)};W.useContext=function(e){return Ne.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ne.current.useEffect(e,t)};W.useId=function(){return Ne.current.useId()};W.useImperativeHandle=function(e,t,r){return Ne.current.useImperativeHandle(e,t,r)};W.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ne.current.useMemo(e,t)};W.useReducer=function(e,t,r){return Ne.current.useReducer(e,t,r)};W.useRef=function(e){return Ne.current.useRef(e)};W.useState=function(e){return Ne.current.useState(e)};W.useSyncExternalStore=function(e,t,r){return Ne.current.useSyncExternalStore(e,t,r)};W.useTransition=function(){return Ne.current.useTransition()};W.version="18.2.0";Zf.exports=W;var w=Zf.exports;const jt=Dg(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=w,nv=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),iv=Object.prototype.hasOwnProperty,sv=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function ah(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)iv.call(t,n)&&!av.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:nv,type:e,key:i,ref:s,props:o,_owner:sv.current}}js.Fragment=ov;js.jsx=ah;js.jsxs=ah;Xf.exports=js;var d=Xf.exports,Ka={},lh={exports:{}},Qe={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,$){var O=R.length;R.push($);e:for(;0<O;){var L=O-1>>>1,U=R[L];if(0<o(U,$))R[L]=$,R[O]=U,O=L;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var $=R[0],O=R.pop();if(O!==$){R[0]=O;e:for(var L=0,U=R.length,Ue=U>>>1;L<Ue;){var Ce=2*(L+1)-1,F=R[Ce],G=Ce+1,at=R[G];if(0>o(F,O))G<U&&0>o(at,F)?(R[L]=at,R[G]=O,L=G):(R[L]=F,R[Ce]=O,L=Ce);else if(G<U&&0>o(at,O))R[L]=at,R[G]=O,L=G;else break e}}return $}function o(R,$){var O=R.sortIndex-$.sortIndex;return O!==0?O:R.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,h=3,v=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var $=r(c);$!==null;){if($.callback===null)n(c);else if($.startTime<=R)n(c),$.sortIndex=$.expirationTime,t(l,$);else break;$=r(c)}}function k(R){if(x=!1,p(R),!y)if(r(l)!==null)y=!0,re(_);else{var $=r(c);$!==null&&ce(k,$.startTime-R)}}function _(R,$){y=!1,x&&(x=!1,m(C),C=-1),v=!0;var O=h;try{for(p($),f=r(l);f!==null&&(!(f.expirationTime>$)||R&&!V());){var L=f.callback;if(typeof L=="function"){f.callback=null,h=f.priorityLevel;var U=L(f.expirationTime<=$);$=e.unstable_now(),typeof U=="function"?f.callback=U:f===r(l)&&n(l),p($)}else n(l);f=r(l)}if(f!==null)var Ue=!0;else{var Ce=r(c);Ce!==null&&ce(k,Ce.startTime-$),Ue=!1}return Ue}finally{f=null,h=O,v=!1}}var j=!1,E=null,C=-1,A=5,N=-1;function V(){return!(e.unstable_now()-N<A)}function ye(){if(E!==null){var R=e.unstable_now();N=R;var $=!0;try{$=E(!0,R)}finally{$?Q():(j=!1,E=null)}}else j=!1}var Q;if(typeof g=="function")Q=function(){g(ye)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,we=je.port2;je.port1.onmessage=ye,Q=function(){we.postMessage(null)}}else Q=function(){S(ye,0)};function re(R){E=R,j||(j=!0,Q())}function ce(R,$){C=S(function(){R(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,re(_))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var O=h;h=$;try{return R()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=h;h=R;try{return $()}finally{h=O}},e.unstable_scheduleCallback=function(R,$,O){var L=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?L+O:L):O=L,R){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=O+U,R={id:u++,callback:$,priorityLevel:R,startTime:O,expirationTime:U,sortIndex:-1},O>L?(R.sortIndex=O,t(c,R),r(l)===null&&R===r(c)&&(x?(m(C),C=-1):x=!0,ce(k,O-L))):(R.sortIndex=U,t(l,R),y||v||(y=!0,re(_))),R},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(R){var $=h;return function(){var O=h;h=$;try{return R.apply(this,arguments)}finally{h=O}}}})(uh);ch.exports=uh;var lv=ch.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh=w,Je=lv;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fh=new Set,jo={};function Br(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(jo[e]=t,e=0;e<t.length;e++)fh.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tu={},$u={};function uv(e){return Ja.call($u,e)?!0:Ja.call(Tu,e)?!1:cv.test(e)?$u[e]=!0:(Tu[e]=!0,!1)}function dv(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fv(e,t,r,n){if(t===null||typeof t>"u"||dv(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var mc=/[\-:]([a-z])/g;function gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mc,gc);_e[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mc,gc);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mc,gc);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function vc(e,t,r,n){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fv(t,r,o,n)&&(r=null),n||o===null?uv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Wt=dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),rn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),hh=Symbol.for("react.provider"),ph=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),Ya=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),mh=Symbol.for("react.offscreen"),Pu=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,oa;function so(e){if(oa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);oa=t&&t[1]||""}return`
`+oa+e}var ia=!1;function sa(e,t){if(!e||ia)return"";ia=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ia=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?so(e):""}function hv(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=sa(e.type,!1),e;case 11:return e=sa(e.type.render,!1),e;case 1:return e=sa(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case rn:return"Portal";case Qa:return"Profiler";case yc:return"StrictMode";case Ya:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ph:return(e.displayName||"Context")+".Consumer";case hh:return(e._context.displayName||"Context")+".Provider";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function pv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mv(e){var t=gh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ii(e){e._valueTracker||(e._valueTracker=mv(e))}function vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=gh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var r=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ru(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=vr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yh(e,t){t=t.checked,t!=null&&vc(e,"checked",t,!1)}function tl(e,t){yh(e,t);var r=vr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rl(e,t.type,r):t.hasOwnProperty("defaultValue")&&rl(e,t.type,vr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Au(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function rl(e,t,r){(t!=="number"||Ki(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ao=Array.isArray;function gn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+vr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(ao(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:vr(r)}}function wh(e,t){var r=vr(t.value),n=vr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,bh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Co(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gv=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){gv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function kh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function Sh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=kh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var vv=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function il(e,t){if(t){if(vv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,vn=null,yn=null;function Lu(e){if(e=Jo(e)){if(typeof ll!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Rs(t),ll(e.stateNode,e.type,t))}}function Eh(e){vn?yn?yn.push(e):yn=[e]:vn=e}function _h(){if(vn){var e=vn,t=yn;if(yn=vn=null,Lu(e),t)for(e=0;e<t.length;e++)Lu(t[e])}}function jh(e,t){return e(t)}function Ch(){}var aa=!1;function Th(e,t,r){if(aa)return e(t,r);aa=!0;try{return jh(e,t,r)}finally{aa=!1,(vn!==null||yn!==null)&&(Ch(),_h())}}function To(e,t){var r=e.stateNode;if(r===null)return null;var n=Rs(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var cl=!1;if(Dt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){cl=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{cl=!1}function yv(e,t,r,n,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var po=!1,Ji=null,Qi=!1,ul=null,wv={onError:function(e){po=!0,Ji=e}};function xv(e,t,r,n,o,i,s,a,l){po=!1,Ji=null,yv.apply(wv,arguments)}function bv(e,t,r,n,o,i,s,a,l){if(xv.apply(this,arguments),po){if(po){var c=Ji;po=!1,Ji=null}else throw Error(T(198));Qi||(Qi=!0,ul=c)}}function qr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function $h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(qr(e)!==e)throw Error(T(188))}function kv(e){var t=e.alternate;if(!t){if(t=qr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Nu(o),e;if(i===n)return Nu(o),t;i=i.sibling}throw Error(T(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s)throw Error(T(189))}}if(r.alternate!==n)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function Ph(e){return e=kv(e),e!==null?Rh(e):null}function Rh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rh(e);if(t!==null)return t;e=e.sibling}return null}var Ah=Je.unstable_scheduleCallback,zu=Je.unstable_cancelCallback,Sv=Je.unstable_shouldYield,Ev=Je.unstable_requestPaint,de=Je.unstable_now,_v=Je.unstable_getCurrentPriorityLevel,kc=Je.unstable_ImmediatePriority,Ih=Je.unstable_UserBlockingPriority,Yi=Je.unstable_NormalPriority,jv=Je.unstable_LowPriority,Oh=Je.unstable_IdlePriority,Cs=null,Ct=null;function Cv(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Cs,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Pv,Tv=Math.log,$v=Math.LN2;function Pv(e){return e>>>=0,e===0?32:31-(Tv(e)/$v|0)|0}var ai=64,li=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?n=lo(a):(i&=s,i!==0&&(n=lo(i)))}else s=r&~o,s!==0?n=lo(s):i!==0&&(n=lo(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-pt(t),o=1<<r,n|=e[r],t&=~o;return n}function Rv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Av(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-pt(i),a=1<<s,l=o[s];l===-1?(!(a&r)||a&n)&&(o[s]=Rv(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lh(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function la(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Go(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=r}function Iv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-pt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Sc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-pt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var J=0;function Nh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zh,Ec,Uh,Dh,Fh,fl=!1,ci=[],lr=null,cr=null,ur=null,$o=new Map,Po=new Map,rr=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(t.pointerId)}}function Qn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Jo(t),t!==null&&Ec(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Lv(e,t,r,n,o){switch(t){case"focusin":return lr=Qn(lr,e,t,r,n,o),!0;case"dragenter":return cr=Qn(cr,e,t,r,n,o),!0;case"mouseover":return ur=Qn(ur,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return $o.set(i,Qn($o.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Po.set(i,Qn(Po.get(i)||null,e,t,r,n,o)),!0}return!1}function Mh(e){var t=Pr(e.target);if(t!==null){var r=qr(t);if(r!==null){if(t=r.tag,t===13){if(t=$h(r),t!==null){e.blockedOn=t,Fh(e.priority,function(){Uh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);al=n,r.target.dispatchEvent(n),al=null}else return t=Jo(r),t!==null&&Ec(t),e.blockedOn=r,!1;t.shift()}return!0}function Du(e,t,r){Pi(e)&&r.delete(t)}function Nv(){fl=!1,lr!==null&&Pi(lr)&&(lr=null),cr!==null&&Pi(cr)&&(cr=null),ur!==null&&Pi(ur)&&(ur=null),$o.forEach(Du),Po.forEach(Du)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Nv)))}function Ro(e){function t(o){return Yn(o,e)}if(0<ci.length){Yn(ci[0],e);for(var r=1;r<ci.length;r++){var n=ci[r];n.blockedOn===e&&(n.blockedOn=null)}}for(lr!==null&&Yn(lr,e),cr!==null&&Yn(cr,e),ur!==null&&Yn(ur,e),$o.forEach(t),Po.forEach(t),r=0;r<rr.length;r++)n=rr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<rr.length&&(r=rr[0],r.blockedOn===null);)Mh(r),r.blockedOn===null&&rr.shift()}var wn=Wt.ReactCurrentBatchConfig,Zi=!0;function zv(e,t,r,n){var o=J,i=wn.transition;wn.transition=null;try{J=1,_c(e,t,r,n)}finally{J=o,wn.transition=i}}function Uv(e,t,r,n){var o=J,i=wn.transition;wn.transition=null;try{J=4,_c(e,t,r,n)}finally{J=o,wn.transition=i}}function _c(e,t,r,n){if(Zi){var o=hl(e,t,r,n);if(o===null)ya(e,t,n,es,r),Uu(e,n);else if(Lv(o,e,t,r,n))n.stopPropagation();else if(Uu(e,n),t&4&&-1<Ov.indexOf(e)){for(;o!==null;){var i=Jo(o);if(i!==null&&zh(i),i=hl(e,t,r,n),i===null&&ya(e,t,n,es,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else ya(e,t,n,null,r)}}var es=null;function hl(e,t,r,n){if(es=null,e=bc(n),e=Pr(e),e!==null)if(t=qr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=$h(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return es=e,null}function Bh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_v()){case kc:return 1;case Ih:return 4;case Yi:case jv:return 16;case Oh:return 536870912;default:return 16}default:return 16}}var ir=null,jc=null,Ri=null;function qh(){if(Ri)return Ri;var e,t=jc,r=t.length,n,o="value"in ir?ir.value:ir.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Ri=o.slice(e,1<n?1-n:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Fu(){return!1}function Ye(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ui:Fu,this.isPropagationStopped=Fu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=Ye(zn),Ko=le({},zn,{view:0,detail:0}),Dv=Ye(Ko),ca,ua,Xn,Ts=le({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ca=e.screenX-Xn.screenX,ua=e.screenY-Xn.screenY):ua=ca=0,Xn=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Mu=Ye(Ts),Fv=le({},Ts,{dataTransfer:0}),Mv=Ye(Fv),Bv=le({},Ko,{relatedTarget:0}),da=Ye(Bv),qv=le({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=Ye(qv),Hv=le({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=Ye(Hv),Gv=le({},zn,{data:0}),Bu=Ye(Gv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qv[e])?!!t[e]:!1}function Tc(){return Yv}var Xv=le({},Ko,{key:function(e){if(e.key){var t=Kv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zv=Ye(Xv),e0=le({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qu=Ye(e0),t0=le({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),r0=Ye(t0),n0=le({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=Ye(n0),i0=le({},Ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=Ye(i0),a0=[9,13,27,32],$c=Dt&&"CompositionEvent"in window,mo=null;Dt&&"documentMode"in document&&(mo=document.documentMode);var l0=Dt&&"TextEvent"in window&&!mo,Wh=Dt&&(!$c||mo&&8<mo&&11>=mo),Wu=" ",Hu=!1;function Hh(e,t){switch(e){case"keyup":return a0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function c0(e,t){switch(e){case"compositionend":return Vh(t);case"keypress":return t.which!==32?null:(Hu=!0,Wu);case"textInput":return e=t.data,e===Wu&&Hu?null:e;default:return null}}function u0(e,t){if(on)return e==="compositionend"||!$c&&Hh(e,t)?(e=qh(),Ri=jc=ir=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wh&&t.locale!=="ko"?null:t.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d0[e.type]:t==="textarea"}function Gh(e,t,r,n){Eh(n),t=ts(t,"onChange"),0<t.length&&(r=new Cc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var go=null,Ao=null;function f0(e){op(e,0)}function $s(e){var t=ln(e);if(vh(t))return e}function h0(e,t){if(e==="change")return t}var Kh=!1;if(Dt){var fa;if(Dt){var ha="oninput"in document;if(!ha){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),ha=typeof Gu.oninput=="function"}fa=ha}else fa=!1;Kh=fa&&(!document.documentMode||9<document.documentMode)}function Ku(){go&&(go.detachEvent("onpropertychange",Jh),Ao=go=null)}function Jh(e){if(e.propertyName==="value"&&$s(Ao)){var t=[];Gh(t,Ao,e,bc(e)),Th(f0,t)}}function p0(e,t,r){e==="focusin"?(Ku(),go=t,Ao=r,go.attachEvent("onpropertychange",Jh)):e==="focusout"&&Ku()}function m0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $s(Ao)}function g0(e,t){if(e==="click")return $s(t)}function v0(e,t){if(e==="input"||e==="change")return $s(t)}function y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:y0;function Io(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Ja.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,t){var r=Ju(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ju(r)}}function Qh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yh(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ki(e.document)}return t}function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function w0(e){var t=Yh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Qh(r.ownerDocument.documentElement,r)){if(n!==null&&Pc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Qu(r,i);var s=Qu(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x0=Dt&&"documentMode"in document&&11>=document.documentMode,sn=null,pl=null,vo=null,ml=!1;function Yu(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ml||sn==null||sn!==Ki(n)||(n=sn,"selectionStart"in n&&Pc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vo&&Io(vo,n)||(vo=n,n=ts(pl,"onSelect"),0<n.length&&(t=new Cc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=sn)))}function di(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var an={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},pa={},Xh={};Dt&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Ps(e){if(pa[e])return pa[e];if(!an[e])return e;var t=an[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Xh)return pa[e]=t[r];return e}var Zh=Ps("animationend"),ep=Ps("animationiteration"),tp=Ps("animationstart"),rp=Ps("transitionend"),np=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(e,t){np.set(e,t),Br(t,[e])}for(var ma=0;ma<Xu.length;ma++){var ga=Xu[ma],b0=ga.toLowerCase(),k0=ga[0].toUpperCase()+ga.slice(1);wr(b0,"on"+k0)}wr(Zh,"onAnimationEnd");wr(ep,"onAnimationIteration");wr(tp,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(rp,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Zu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,bv(n,t,void 0,e),e.currentTarget=null}function op(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Zu(o,a,c),i=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Zu(o,a,c),i=l}}}if(Qi)throw e=ul,Qi=!1,ul=null,e}function Z(e,t){var r=t[xl];r===void 0&&(r=t[xl]=new Set);var n=e+"__bubble";r.has(n)||(ip(t,e,2,!1),r.add(n))}function va(e,t,r){var n=0;t&&(n|=4),ip(r,e,n,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Oo(e){if(!e[fi]){e[fi]=!0,fh.forEach(function(r){r!=="selectionchange"&&(S0.has(r)||va(r,!1,e),va(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,va("selectionchange",!1,t))}}function ip(e,t,r,n){switch(Bh(t)){case 1:var o=zv;break;case 4:o=Uv;break;default:o=_c}r=o.bind(null,t,r,e),o=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function ya(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Pr(a),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}a=a.parentNode}}n=n.return}Th(function(){var c=i,u=bc(r),f=[];e:{var h=np.get(e);if(h!==void 0){var v=Cc,y=e;switch(e){case"keypress":if(Ai(r)===0)break e;case"keydown":case"keyup":v=Zv;break;case"focusin":y="focus",v=da;break;case"focusout":y="blur",v=da;break;case"beforeblur":case"afterblur":v=da;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=r0;break;case Zh:case ep:case tp:v=Wv;break;case rp:v=o0;break;case"scroll":v=Dv;break;case"wheel":v=s0;break;case"copy":case"cut":case"paste":v=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qu}var x=(t&4)!==0,S=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,p;g!==null;){p=g;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,m!==null&&(k=To(g,m),k!=null&&x.push(Lo(g,k,p)))),S)break;g=g.return}0<x.length&&(h=new v(h,y,null,r,u),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&r!==al&&(y=r.relatedTarget||r.fromElement)&&(Pr(y)||y[Ft]))break e;if((v||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=c,y=y?Pr(y):null,y!==null&&(S=qr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=Mu,k="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=qu,k="onPointerLeave",m="onPointerEnter",g="pointer"),S=v==null?h:ln(v),p=y==null?h:ln(y),h=new x(k,g+"leave",v,r,u),h.target=S,h.relatedTarget=p,k=null,Pr(u)===c&&(x=new x(m,g+"enter",y,r,u),x.target=p,x.relatedTarget=S,k=x),S=k,v&&y)t:{for(x=v,m=y,g=0,p=x;p;p=Vr(p))g++;for(p=0,k=m;k;k=Vr(k))p++;for(;0<g-p;)x=Vr(x),g--;for(;0<p-g;)m=Vr(m),p--;for(;g--;){if(x===m||m!==null&&x===m.alternate)break t;x=Vr(x),m=Vr(m)}x=null}else x=null;v!==null&&ed(f,h,v,x,!1),y!==null&&S!==null&&ed(f,S,y,x,!0)}}e:{if(h=c?ln(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var _=h0;else if(Vu(h))if(Kh)_=v0;else{_=m0;var j=p0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=g0);if(_&&(_=_(e,c))){Gh(f,_,r,u);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&rl(h,"number",h.value)}switch(j=c?ln(c):window,e){case"focusin":(Vu(j)||j.contentEditable==="true")&&(sn=j,pl=c,vo=null);break;case"focusout":vo=pl=sn=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Yu(f,r,u);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Yu(f,r,u)}var E;if($c)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else on?Hh(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(Wh&&r.locale!=="ko"&&(on||C!=="onCompositionStart"?C==="onCompositionEnd"&&on&&(E=qh()):(ir=u,jc="value"in ir?ir.value:ir.textContent,on=!0)),j=ts(c,C),0<j.length&&(C=new Bu(C,e,null,r,u),f.push({event:C,listeners:j}),E?C.data=E:(E=Vh(r),E!==null&&(C.data=E)))),(E=l0?c0(e,r):u0(e,r))&&(c=ts(c,"onBeforeInput"),0<c.length&&(u=new Bu("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:c}),u.data=E))}op(f,t)})}function Lo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ts(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=To(e,r),i!=null&&n.unshift(Lo(e,i,o)),i=To(e,t),i!=null&&n.push(Lo(e,i,o))),e=e.return}return n}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ed(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,c=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&c!==null&&(a=c,o?(l=To(r,i),l!=null&&s.unshift(Lo(r,l,a))):o||(l=To(r,i),l!=null&&s.push(Lo(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var E0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function td(e){return(typeof e=="string"?e:""+e).replace(E0,`
`).replace(_0,"")}function hi(e,t,r){if(t=td(t),td(e)!==t&&r)throw Error(T(425))}function rs(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(e){return rd.resolve(null).then(e).catch(T0)}:wl;function T0(e){setTimeout(function(){throw e})}function wa(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Ro(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Ro(t)}function dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),_t="__reactFiber$"+Un,No="__reactProps$"+Un,Ft="__reactContainer$"+Un,xl="__reactEvents$"+Un,$0="__reactListeners$"+Un,P0="__reactHandles$"+Un;function Pr(e){var t=e[_t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ft]||r[_t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=nd(e);e!==null;){if(r=e[_t])return r;e=nd(e)}return t}e=r,r=e.parentNode}return null}function Jo(e){return e=e[_t]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Rs(e){return e[No]||null}var bl=[],cn=-1;function xr(e){return{current:e}}function te(e){0>cn||(e.current=bl[cn],bl[cn]=null,cn--)}function X(e,t){cn++,bl[cn]=e.current,e.current=t}var yr={},Ae=xr(yr),Be=xr(!1),zr=yr;function Sn(e,t){var r=e.type.contextTypes;if(!r)return yr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qe(e){return e=e.childContextTypes,e!=null}function ns(){te(Be),te(Ae)}function od(e,t,r){if(Ae.current!==yr)throw Error(T(168));X(Ae,t),X(Be,r)}function sp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(T(108,pv(e)||"Unknown",o));return le({},r,n)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yr,zr=Ae.current,X(Ae,e),X(Be,Be.current),!0}function id(e,t,r){var n=e.stateNode;if(!n)throw Error(T(169));r?(e=sp(e,t,zr),n.__reactInternalMemoizedMergedChildContext=e,te(Be),te(Ae),X(Ae,e)):te(Be),X(Be,r)}var Ot=null,As=!1,xa=!1;function ap(e){Ot===null?Ot=[e]:Ot.push(e)}function R0(e){As=!0,ap(e)}function br(){if(!xa&&Ot!==null){xa=!0;var e=0,t=J;try{var r=Ot;for(J=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ot=null,As=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),Ah(kc,br),o}finally{J=t,xa=!1}}return null}var un=[],dn=0,is=null,ss=0,Xe=[],Ze=0,Ur=null,Lt=1,Nt="";function jr(e,t){un[dn++]=ss,un[dn++]=is,is=e,ss=t}function lp(e,t,r){Xe[Ze++]=Lt,Xe[Ze++]=Nt,Xe[Ze++]=Ur,Ur=e;var n=Lt;e=Nt;var o=32-pt(n)-1;n&=~(1<<o),r+=1;var i=32-pt(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,Lt=1<<32-pt(t)+o|r<<o|n,Nt=i+e}else Lt=1<<i|r<<o|n,Nt=e}function Rc(e){e.return!==null&&(jr(e,1),lp(e,1,0))}function Ac(e){for(;e===is;)is=un[--dn],un[dn]=null,ss=un[--dn],un[dn]=null;for(;e===Ur;)Ur=Xe[--Ze],Xe[Ze]=null,Nt=Xe[--Ze],Xe[Ze]=null,Lt=Xe[--Ze],Xe[Ze]=null}var Ke=null,Ge=null,ne=!1,ht=null;function cp(e,t){var r=tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function sd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ur!==null?{id:Lt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ke=e,Ge=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(ne){var t=Ge;if(t){var r=t;if(!sd(e,t)){if(kl(e))throw Error(T(418));t=dr(r.nextSibling);var n=Ke;t&&sd(e,t)?cp(n,r):(e.flags=e.flags&-4097|2,ne=!1,Ke=e)}}else{if(kl(e))throw Error(T(418));e.flags=e.flags&-4097|2,ne=!1,Ke=e}}}function ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function pi(e){if(e!==Ke)return!1;if(!ne)return ad(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Ge)){if(kl(e))throw up(),Error(T(418));for(;t;)cp(e,t),t=dr(t.nextSibling)}if(ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ge=dr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Ke?dr(e.stateNode.nextSibling):null;return!0}function up(){for(var e=Ge;e;)e=dr(e.nextSibling)}function En(){Ge=Ke=null,ne=!1}function Ic(e){ht===null?ht=[e]:ht.push(e)}var A0=Wt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var as=xr(null),ls=null,fn=null,Oc=null;function Lc(){Oc=fn=ls=null}function Nc(e){var t=as.current;te(as),e._currentValue=t}function El(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function xn(e,t){ls=e,Oc=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Oc!==e)if(e={context:e,memoizedValue:t,next:null},fn===null){if(ls===null)throw Error(T(308));fn=e,ls.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return t}var Rr=null;function zc(e){Rr===null?Rr=[e]:Rr.push(e)}function dp(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,zc(t)):(r.next=o.next,o.next=r),t.interleaved=r,Mt(e,n)}function Mt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var tr=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,H&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Mt(e,r)}return o=n.interleaved,o===null?(t.next=t,zc(n)):(t.next=o.next,o.next=t),n.interleaved=t,Mt(e,r)}function Ii(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Sc(e,r)}}function ld(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function cs(e,t,r,n){var o=e.updateQueue;tr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;s=0,u=c=l=null,a=i;do{var h=a.lane,v=a.eventTime;if((n&h)===h){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(h=t,v=r,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=le({},f,h);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=f):u=u.next=v,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(u===null&&(l=f),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Fr|=s,e.lanes=s,e.memoizedState=f}}function cd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(T(191,o));o.call(n)}}}var hp=new dh.Component().refs;function _l(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:le({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Is={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Le(),o=pr(e),i=zt(n,o);i.payload=t,r!=null&&(i.callback=r),t=fr(e,i,o),t!==null&&(mt(t,e,o,n),Ii(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Le(),o=pr(e),i=zt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=fr(e,i,o),t!==null&&(mt(t,e,o,n),Ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Le(),n=pr(e),o=zt(r,n);o.tag=2,t!=null&&(o.callback=t),t=fr(e,o,n),t!==null&&(mt(t,e,n,r),Ii(t,e,n))}};function ud(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Io(r,n)||!Io(o,i):!0}function pp(e,t,r){var n=!1,o=yr,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(o=qe(t)?zr:Ae.current,n=t.contextTypes,i=(n=n!=null)?Sn(e,o):yr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Is,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function dd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function jl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=hp,Uc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ot(i):(i=qe(t)?zr:Ae.current,o.context=Sn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_l(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Is.enqueueReplaceState(o,o.state,null),cs(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var n=r.stateNode}if(!n)throw Error(T(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===hp&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fd(e){var t=e._init;return t(e._payload)}function mp(e){function t(m,g){if(e){var p=m.deletions;p===null?(m.deletions=[g],m.flags|=16):p.push(g)}}function r(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function n(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function o(m,g){return m=mr(m,g),m.index=0,m.sibling=null,m}function i(m,g,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<g?(m.flags|=2,g):p):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,p,k){return g===null||g.tag!==6?(g=Ca(p,m.mode,k),g.return=m,g):(g=o(g,p),g.return=m,g)}function l(m,g,p,k){var _=p.type;return _===nn?u(m,g,p.props.children,k,p.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===er&&fd(_)===g.type)?(k=o(g,p.props),k.ref=Zn(m,g,p),k.return=m,k):(k=Di(p.type,p.key,p.props,null,m.mode,k),k.ref=Zn(m,g,p),k.return=m,k)}function c(m,g,p,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==p.containerInfo||g.stateNode.implementation!==p.implementation?(g=Ta(p,m.mode,k),g.return=m,g):(g=o(g,p.children||[]),g.return=m,g)}function u(m,g,p,k,_){return g===null||g.tag!==7?(g=Lr(p,m.mode,k,_),g.return=m,g):(g=o(g,p),g.return=m,g)}function f(m,g,p){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ca(""+g,m.mode,p),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oi:return p=Di(g.type,g.key,g.props,null,m.mode,p),p.ref=Zn(m,null,g),p.return=m,p;case rn:return g=Ta(g,m.mode,p),g.return=m,g;case er:var k=g._init;return f(m,k(g._payload),p)}if(ao(g)||Kn(g))return g=Lr(g,m.mode,p,null),g.return=m,g;mi(m,g)}return null}function h(m,g,p,k){var _=g!==null?g.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:a(m,g,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oi:return p.key===_?l(m,g,p,k):null;case rn:return p.key===_?c(m,g,p,k):null;case er:return _=p._init,h(m,g,_(p._payload),k)}if(ao(p)||Kn(p))return _!==null?null:u(m,g,p,k,null);mi(m,p)}return null}function v(m,g,p,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(p)||null,a(g,m,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case oi:return m=m.get(k.key===null?p:k.key)||null,l(g,m,k,_);case rn:return m=m.get(k.key===null?p:k.key)||null,c(g,m,k,_);case er:var j=k._init;return v(m,g,p,j(k._payload),_)}if(ao(k)||Kn(k))return m=m.get(p)||null,u(g,m,k,_,null);mi(g,k)}return null}function y(m,g,p,k){for(var _=null,j=null,E=g,C=g=0,A=null;E!==null&&C<p.length;C++){E.index>C?(A=E,E=null):A=E.sibling;var N=h(m,E,p[C],k);if(N===null){E===null&&(E=A);break}e&&E&&N.alternate===null&&t(m,E),g=i(N,g,C),j===null?_=N:j.sibling=N,j=N,E=A}if(C===p.length)return r(m,E),ne&&jr(m,C),_;if(E===null){for(;C<p.length;C++)E=f(m,p[C],k),E!==null&&(g=i(E,g,C),j===null?_=E:j.sibling=E,j=E);return ne&&jr(m,C),_}for(E=n(m,E);C<p.length;C++)A=v(E,m,C,p[C],k),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?C:A.key),g=i(A,g,C),j===null?_=A:j.sibling=A,j=A);return e&&E.forEach(function(V){return t(m,V)}),ne&&jr(m,C),_}function x(m,g,p,k){var _=Kn(p);if(typeof _!="function")throw Error(T(150));if(p=_.call(p),p==null)throw Error(T(151));for(var j=_=null,E=g,C=g=0,A=null,N=p.next();E!==null&&!N.done;C++,N=p.next()){E.index>C?(A=E,E=null):A=E.sibling;var V=h(m,E,N.value,k);if(V===null){E===null&&(E=A);break}e&&E&&V.alternate===null&&t(m,E),g=i(V,g,C),j===null?_=V:j.sibling=V,j=V,E=A}if(N.done)return r(m,E),ne&&jr(m,C),_;if(E===null){for(;!N.done;C++,N=p.next())N=f(m,N.value,k),N!==null&&(g=i(N,g,C),j===null?_=N:j.sibling=N,j=N);return ne&&jr(m,C),_}for(E=n(m,E);!N.done;C++,N=p.next())N=v(E,m,C,N.value,k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?C:N.key),g=i(N,g,C),j===null?_=N:j.sibling=N,j=N);return e&&E.forEach(function(ye){return t(m,ye)}),ne&&jr(m,C),_}function S(m,g,p,k){if(typeof p=="object"&&p!==null&&p.type===nn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case oi:e:{for(var _=p.key,j=g;j!==null;){if(j.key===_){if(_=p.type,_===nn){if(j.tag===7){r(m,j.sibling),g=o(j,p.props.children),g.return=m,m=g;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===er&&fd(_)===j.type){r(m,j.sibling),g=o(j,p.props),g.ref=Zn(m,j,p),g.return=m,m=g;break e}r(m,j);break}else t(m,j);j=j.sibling}p.type===nn?(g=Lr(p.props.children,m.mode,k,p.key),g.return=m,m=g):(k=Di(p.type,p.key,p.props,null,m.mode,k),k.ref=Zn(m,g,p),k.return=m,m=k)}return s(m);case rn:e:{for(j=p.key;g!==null;){if(g.key===j)if(g.tag===4&&g.stateNode.containerInfo===p.containerInfo&&g.stateNode.implementation===p.implementation){r(m,g.sibling),g=o(g,p.children||[]),g.return=m,m=g;break e}else{r(m,g);break}else t(m,g);g=g.sibling}g=Ta(p,m.mode,k),g.return=m,m=g}return s(m);case er:return j=p._init,S(m,g,j(p._payload),k)}if(ao(p))return y(m,g,p,k);if(Kn(p))return x(m,g,p,k);mi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,g!==null&&g.tag===6?(r(m,g.sibling),g=o(g,p),g.return=m,m=g):(r(m,g),g=Ca(p,m.mode,k),g.return=m,m=g),s(m)):r(m,g)}return S}var _n=mp(!0),gp=mp(!1),Qo={},Tt=xr(Qo),zo=xr(Qo),Uo=xr(Qo);function Ar(e){if(e===Qo)throw Error(T(174));return e}function Dc(e,t){switch(X(Uo,t),X(zo,e),X(Tt,Qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}te(Tt),X(Tt,t)}function jn(){te(Tt),te(zo),te(Uo)}function vp(e){Ar(Uo.current);var t=Ar(Tt.current),r=ol(t,e.type);t!==r&&(X(zo,e),X(Tt,r))}function Fc(e){zo.current===e&&(te(Tt),te(zo))}var se=xr(0);function us(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=[];function Mc(){for(var e=0;e<ba.length;e++)ba[e]._workInProgressVersionPrimary=null;ba.length=0}var Oi=Wt.ReactCurrentDispatcher,ka=Wt.ReactCurrentBatchConfig,Dr=0,ae=null,ge=null,xe=null,ds=!1,yo=!1,Do=0,I0=0;function Te(){throw Error(T(321))}function Bc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!vt(e[r],t[r]))return!1;return!0}function qc(e,t,r,n,o,i){if(Dr=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?z0:U0,e=r(n,o),yo){i=0;do{if(yo=!1,Do=0,25<=i)throw Error(T(301));i+=1,xe=ge=null,t.updateQueue=null,Oi.current=D0,e=r(n,o)}while(yo)}if(Oi.current=fs,t=ge!==null&&ge.next!==null,Dr=0,xe=ge=ae=null,ds=!1,t)throw Error(T(300));return e}function Wc(){var e=Do!==0;return Do=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ae.memoizedState=xe=e:xe=xe.next=e,xe}function it(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=xe===null?ae.memoizedState:xe.next;if(t!==null)xe=t,ge=e;else{if(e===null)throw Error(T(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ae.memoizedState=xe=e:xe=xe.next=e}return xe}function Fo(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=it(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=ge,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((Dr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=n):l=l.next=f,ae.lanes|=u,Fr|=u}c=c.next}while(c!==null&&c!==i);l===null?s=n:l.next=a,vt(n,t.memoizedState)||(Me=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,Fr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ea(e){var t=it(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);vt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function yp(){}function wp(e,t){var r=ae,n=it(),o=t(),i=!vt(n.memoizedState,o);if(i&&(n.memoizedState=o,Me=!0),n=n.queue,Hc(kp.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(r.flags|=2048,Mo(9,bp.bind(null,r,n,o,t),void 0,null),ke===null)throw Error(T(349));Dr&30||xp(r,t,o)}return o}function xp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bp(e,t,r,n){t.value=r,t.getSnapshot=n,Sp(t)&&Ep(e)}function kp(e,t,r){return r(function(){Sp(t)&&Ep(e)})}function Sp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!vt(e,r)}catch{return!0}}function Ep(e){var t=Mt(e,1);t!==null&&mt(t,e,1,-1)}function hd(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t.queue=e,e=e.dispatch=N0.bind(null,ae,e),[t.memoizedState,e]}function Mo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function _p(){return it().memoizedState}function Li(e,t,r,n){var o=kt();ae.flags|=e,o.memoizedState=Mo(1|t,r,void 0,n===void 0?null:n)}function Os(e,t,r,n){var o=it();n=n===void 0?null:n;var i=void 0;if(ge!==null){var s=ge.memoizedState;if(i=s.destroy,n!==null&&Bc(n,s.deps)){o.memoizedState=Mo(t,r,i,n);return}}ae.flags|=e,o.memoizedState=Mo(1|t,r,i,n)}function pd(e,t){return Li(8390656,8,e,t)}function Hc(e,t){return Os(2048,8,e,t)}function jp(e,t){return Os(4,2,e,t)}function Cp(e,t){return Os(4,4,e,t)}function Tp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $p(e,t,r){return r=r!=null?r.concat([e]):null,Os(4,4,Tp.bind(null,t,e),r)}function Vc(){}function Pp(e,t){var r=it();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Bc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Rp(e,t){var r=it();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Bc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ap(e,t,r){return Dr&21?(vt(r,t)||(r=Lh(),ae.lanes|=r,Fr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=r)}function O0(e,t){var r=J;J=r!==0&&4>r?r:4,e(!0);var n=ka.transition;ka.transition={};try{e(!1),t()}finally{J=r,ka.transition=n}}function Ip(){return it().memoizedState}function L0(e,t,r){var n=pr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Op(e))Lp(t,r);else if(r=dp(e,t,r,n),r!==null){var o=Le();mt(r,e,n,o),Np(r,t,n)}}function N0(e,t,r){var n=pr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Op(e))Lp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,r);if(o.hasEagerState=!0,o.eagerState=a,vt(a,s)){var l=t.interleaved;l===null?(o.next=o,zc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=dp(e,t,o,n),r!==null&&(o=Le(),mt(r,e,n,o),Np(r,t,n))}}function Op(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Lp(e,t){yo=ds=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Np(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Sc(e,r)}}var fs={readContext:ot,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},z0={readContext:ot,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:pd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Li(4194308,4,Tp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var r=kt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=kt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=L0.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Vc,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=O0.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ae,o=kt();if(ne){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),ke===null)throw Error(T(349));Dr&30||xp(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,pd(kp.bind(null,n,i,e),[e]),n.flags|=2048,Mo(9,bp.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=kt(),t=ke.identifierPrefix;if(ne){var r=Nt,n=Lt;r=(n&~(1<<32-pt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Do++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=I0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},U0={readContext:ot,useCallback:Pp,useContext:ot,useEffect:Hc,useImperativeHandle:$p,useInsertionEffect:jp,useLayoutEffect:Cp,useMemo:Rp,useReducer:Sa,useRef:_p,useState:function(){return Sa(Fo)},useDebugValue:Vc,useDeferredValue:function(e){var t=it();return Ap(t,ge.memoizedState,e)},useTransition:function(){var e=Sa(Fo)[0],t=it().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:wp,useId:Ip,unstable_isNewReconciler:!1},D0={readContext:ot,useCallback:Pp,useContext:ot,useEffect:Hc,useImperativeHandle:$p,useInsertionEffect:jp,useLayoutEffect:Cp,useMemo:Rp,useReducer:Ea,useRef:_p,useState:function(){return Ea(Fo)},useDebugValue:Vc,useDeferredValue:function(e){var t=it();return ge===null?t.memoizedState=e:Ap(t,ge.memoizedState,e)},useTransition:function(){var e=Ea(Fo)[0],t=it().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:wp,useId:Ip,unstable_isNewReconciler:!1};function Cn(e,t){try{var r="",n=t;do r+=hv(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function _a(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function zp(e,t,r){r=zt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ps||(ps=!0,zl=n),Cl(e,t)},r}function Up(e,t,r){r=zt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Cl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Cl(e,t),typeof n!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function md(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new F0;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=ey.bind(null,e,t,r),t.then(e,e))}function gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vd(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=zt(-1,1),t.tag=2,fr(r,t,1))),r.lanes|=1),e)}var M0=Wt.ReactCurrentOwner,Me=!1;function Oe(e,t,r,n){t.child=e===null?gp(t,null,r,n):_n(t,e.child,r,n)}function yd(e,t,r,n,o){r=r.render;var i=t.ref;return xn(t,o),n=qc(e,t,r,n,i,o),r=Wc(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(ne&&r&&Rc(t),t.flags|=1,Oe(e,t,n,o),t.child)}function wd(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!eu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Dp(e,t,i,n,o)):(e=Di(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:Io,r(s,n)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=mr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Dp(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Io(i,n)&&e.ref===t.ref)if(Me=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return Tl(e,t,r,n,o)}function Fp(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(pn,Ve),Ve|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(pn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,X(pn,Ve),Ve|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,X(pn,Ve),Ve|=n;return Oe(e,t,o,r),t.child}function Mp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,r,n,o){var i=qe(r)?zr:Ae.current;return i=Sn(t,i),xn(t,o),r=qc(e,t,r,n,i,o),n=Wc(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(ne&&n&&Rc(t),t.flags|=1,Oe(e,t,r,o),t.child)}function xd(e,t,r,n,o){if(qe(r)){var i=!0;os(t)}else i=!1;if(xn(t,o),t.stateNode===null)Ni(e,t),pp(t,r,n),jl(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=ot(c):(c=qe(r)?zr:Ae.current,c=Sn(t,c));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==c)&&dd(t,s,n,c),tr=!1;var h=t.memoizedState;s.state=h,cs(t,n,s,o),l=t.memoizedState,a!==n||h!==l||Be.current||tr?(typeof u=="function"&&(_l(t,r,u,n),l=t.memoizedState),(a=tr||ud(t,r,a,n,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=c,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,fp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ut(t.type,a),s.props=c,f=t.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=qe(r)?zr:Ae.current,l=Sn(t,l));var v=r.getDerivedStateFromProps;(u=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&dd(t,s,n,l),tr=!1,h=t.memoizedState,s.state=h,cs(t,n,s,o);var y=t.memoizedState;a!==f||h!==y||Be.current||tr?(typeof v=="function"&&(_l(t,r,v,n),y=t.memoizedState),(c=tr||ud(t,r,c,n,h,y,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),s.props=n,s.state=y,s.context=l,n=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return $l(e,t,r,n,i,o)}function $l(e,t,r,n,o,i){Mp(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&id(t,r,!1),Bt(e,t,i);n=t.stateNode,M0.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=_n(t,e.child,null,i),t.child=_n(t,null,a,i)):Oe(e,t,a,i),t.memoizedState=n.state,o&&id(t,r,!0),t.child}function Bp(e){var t=e.stateNode;t.pendingContext?od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&od(e,t.context,!1),Dc(e,t.containerInfo)}function bd(e,t,r,n,o){return En(),Ic(o),t.flags|=256,Oe(e,t,r,n),t.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qp(e,t,r){var n=t.pendingProps,o=se.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(se,o&1),e===null)return Sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=zs(s,n,0,null),e=Lr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Rl(r),t.memoizedState=Pl,e):Gc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return B0(e,t,s,n,a,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=mr(o,l),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=mr(a,i):(i=Lr(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?Rl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=Pl,n}return i=e.child,e=i.sibling,n=mr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Gc(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,r,n){return n!==null&&Ic(n),_n(t,e.child,null,r),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function B0(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=_a(Error(T(422))),gi(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=zs({mode:"visible",children:n.children},o,0,null),i=Lr(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&_n(t,e.child,null,s),t.child.memoizedState=Rl(s),t.memoizedState=Pl,i);if(!(t.mode&1))return gi(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(T(419)),n=_a(i,n,void 0),gi(e,t,s,n)}if(a=(s&e.childLanes)!==0,Me||a){if(n=ke,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),mt(n,e,o,-1))}return Zc(),n=_a(Error(T(421))),gi(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ty.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=dr(o.nextSibling),Ke=t,ne=!0,ht=null,e!==null&&(Xe[Ze++]=Lt,Xe[Ze++]=Nt,Xe[Ze++]=Ur,Lt=e.id,Nt=e.overflow,Ur=t),t=Gc(t,n.children),t.flags|=4096,t)}function kd(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),El(e.return,t,r)}function ja(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Wp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Oe(e,t,n.children,r),n=se.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,r,t);else if(e.tag===19)kd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(X(se,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&us(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ja(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&us(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ja(t,!0,r,null,i);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=mr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=mr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function q0(e,t,r){switch(t.tag){case 3:Bp(t),En();break;case 5:vp(t);break;case 1:qe(t.type)&&os(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;X(as,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(X(se,se.current&1),t.flags|=128,null):r&t.child.childLanes?qp(e,t,r):(X(se,se.current&1),e=Bt(e,t,r),e!==null?e.sibling:null);X(se,se.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Wp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(se,se.current),n)break;return null;case 22:case 23:return t.lanes=0,Fp(e,t,r)}return Bt(e,t,r)}var Hp,Al,Vp,Gp;Hp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Al=function(){};Vp=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Ar(Tt.current);var i=null;switch(r){case"input":o=el(e,o),n=el(e,n),i=[];break;case"select":o=le({},o,{value:void 0}),n=le({},n,{value:void 0}),i=[];break;case"textarea":o=nl(e,o),n=nl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=rs)}il(r,n);var s;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var l=n[c];if(a=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Gp=function(e,t,r,n){r!==n&&(t.flags|=4)};function eo(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function W0(e,t,r){var n=t.pendingProps;switch(Ac(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return qe(t.type)&&ns(),$e(t),null;case 3:return n=t.stateNode,jn(),te(Be),te(Ae),Mc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Fl(ht),ht=null))),Al(e,t),$e(t),null;case 5:Fc(t);var o=Ar(Uo.current);if(r=t.type,e!==null&&t.stateNode!=null)Vp(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(T(166));return $e(t),null}if(e=Ar(Tt.current),pi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[_t]=t,n[No]=i,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<co.length;o++)Z(co[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":Ru(n,i),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Z("invalid",n);break;case"textarea":Iu(n,i),Z("invalid",n)}il(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&hi(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&hi(n.textContent,a,e),o=["children",""+a]):jo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",n)}switch(r){case"input":ii(n),Au(n,i,!0);break;case"textarea":ii(n),Ou(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=rs)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[_t]=t,e[No]=n,Hp(e,t,!1,!1),t.stateNode=e;e:{switch(s=sl(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<co.length;o++)Z(co[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":Ru(e,n),o=el(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=le({},n,{value:void 0}),Z("invalid",e);break;case"textarea":Iu(e,n),o=nl(e,n),Z("invalid",e);break;default:o=n}il(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Sh(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bh(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Co(e,l):typeof l=="number"&&Co(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&vc(e,i,l,s))}switch(r){case"input":ii(e),Au(e,n,!1);break;case"textarea":ii(e),Ou(e);break;case"option":n.value!=null&&e.setAttribute("value",""+vr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?gn(e,!!n.multiple,i,!1):n.defaultValue!=null&&gn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=rs)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Gp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(T(166));if(r=Ar(Uo.current),Ar(Tt.current),pi(t)){if(n=t.stateNode,r=t.memoizedProps,n[_t]=t,(i=n.nodeValue!==r)&&(e=Ke,e!==null))switch(e.tag){case 3:hi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[_t]=t,t.stateNode=n}return $e(t),null;case 13:if(te(se),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ge!==null&&t.mode&1&&!(t.flags&128))up(),En(),t.flags|=98560,i=!1;else if(i=pi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[_t]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),i=!1}else ht!==null&&(Fl(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):Zc())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return jn(),Al(e,t),e===null&&Oo(t.stateNode.containerInfo),$e(t),null;case 10:return Nc(t.type._context),$e(t),null;case 17:return qe(t.type)&&ns(),$e(t),null;case 19:if(te(se),i=t.memoizedState,i===null)return $e(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)eo(i,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=us(e),s!==null){for(t.flags|=128,eo(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return X(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>Tn&&(t.flags|=128,n=!0,eo(i,!1),t.lanes=4194304)}else{if(!n)if(e=us(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ne)return $e(t),null}else 2*de()-i.renderingStartTime>Tn&&r!==1073741824&&(t.flags|=128,n=!0,eo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,r=se.current,X(se,n?r&1|2:r&1),t):($e(t),null);case 22:case 23:return Xc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ve&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function H0(e,t){switch(Ac(t),t.tag){case 1:return qe(t.type)&&ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),te(Be),te(Ae),Mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fc(t),null;case 13:if(te(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(se),null;case 4:return jn(),null;case 10:return Nc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var vi=!1,Pe=!1,V0=typeof WeakSet=="function"?WeakSet:Set,I=null;function hn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ue(e,t,n)}else r.current=null}function Il(e,t,r){try{r()}catch(n){ue(e,t,n)}}var Sd=!1;function G0(e,t){if(gl=Zi,e=Yh(),Pc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=e,h=null;t:for(;;){for(var v;f!==r||o!==0&&f.nodeType!==3||(a=s+o),f!==i||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===r&&++c===o&&(a=s),h===i&&++u===n&&(l=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(vl={focusedElem:e,selectionRange:r},Zi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:ut(t.type,x),S);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){ue(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=Sd,Sd=!1,y}function wo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Il(t,r,i)}o=o.next}while(o!==n)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ol(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Kp(e){var t=e.alternate;t!==null&&(e.alternate=null,Kp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[No],delete t[xl],delete t[$0],delete t[P0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jp(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=rs));else if(n!==4&&(e=e.child,e!==null))for(Ll(e,t,r),e=e.sibling;e!==null;)Ll(e,t,r),e=e.sibling}function Nl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Nl(e,t,r),e=e.sibling;e!==null;)Nl(e,t,r),e=e.sibling}var Se=null,dt=!1;function Vt(e,t,r){for(r=r.child;r!==null;)Qp(e,t,r),r=r.sibling}function Qp(e,t,r){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Cs,r)}catch{}switch(r.tag){case 5:Pe||hn(r,t);case 6:var n=Se,o=dt;Se=null,Vt(e,t,r),Se=n,dt=o,Se!==null&&(dt?(e=Se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(dt?(e=Se,r=r.stateNode,e.nodeType===8?wa(e.parentNode,r):e.nodeType===1&&wa(e,r),Ro(e)):wa(Se,r.stateNode));break;case 4:n=Se,o=dt,Se=r.stateNode.containerInfo,dt=!0,Vt(e,t,r),Se=n,dt=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Il(r,t,s),o=o.next}while(o!==n)}Vt(e,t,r);break;case 1:if(!Pe&&(hn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){ue(r,t,a)}Vt(e,t,r);break;case 21:Vt(e,t,r);break;case 22:r.mode&1?(Pe=(n=Pe)||r.memoizedState!==null,Vt(e,t,r),Pe=n):Vt(e,t,r);break;default:Vt(e,t,r)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new V0),t.forEach(function(n){var o=ry.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function lt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,dt=!1;break e;case 3:Se=a.stateNode.containerInfo,dt=!0;break e;case 4:Se=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(Se===null)throw Error(T(160));Qp(i,s,o),Se=null,dt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ue(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yp(t,e),t=t.sibling}function Yp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),bt(e),n&4){try{wo(3,e,e.return),Ls(3,e)}catch(x){ue(e,e.return,x)}try{wo(5,e,e.return)}catch(x){ue(e,e.return,x)}}break;case 1:lt(t,e),bt(e),n&512&&r!==null&&hn(r,r.return);break;case 5:if(lt(t,e),bt(e),n&512&&r!==null&&hn(r,r.return),e.flags&32){var o=e.stateNode;try{Co(o,"")}catch(x){ue(e,e.return,x)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&yh(o,i),sl(a,s);var c=sl(a,i);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?Sh(o,f):u==="dangerouslySetInnerHTML"?bh(o,f):u==="children"?Co(o,f):vc(o,u,f,c)}switch(a){case"input":tl(o,i);break;case"textarea":wh(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?gn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?gn(o,!!i.multiple,i.defaultValue,!0):gn(o,!!i.multiple,i.multiple?[]:"",!1))}o[No]=i}catch(x){ue(e,e.return,x)}}break;case 6:if(lt(t,e),bt(e),n&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ue(e,e.return,x)}}break;case 3:if(lt(t,e),bt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ro(t.containerInfo)}catch(x){ue(e,e.return,x)}break;case 4:lt(t,e),bt(e);break;case 13:lt(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qc=de())),n&4&&_d(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Pe=(c=Pe)||u,lt(t,e),Pe=c):lt(t,e),bt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(I=e,u=e.child;u!==null;){for(f=I=u;I!==null;){switch(h=I,v=h.child,h.tag){case 0:case 11:case 14:case 15:wo(4,h,h.return);break;case 1:hn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ue(n,r,x)}}break;case 5:hn(h,h.return);break;case 22:if(h.memoizedState!==null){Cd(f);continue}}v!==null?(v.return=h,I=v):Cd(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kh("display",s))}catch(x){ue(e,e.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ue(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:lt(t,e),bt(e),n&4&&_d(e);break;case 21:break;default:lt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Jp(r)){var n=r;break e}r=r.return}throw Error(T(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Co(o,""),n.flags&=-33);var i=Ed(e);Nl(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,a=Ed(e);Ll(e,a,s);break;default:throw Error(T(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K0(e,t,r){I=e,Xp(e)}function Xp(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||vi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=vi;var c=Pe;if(vi=s,(Pe=l)&&!c)for(I=o;I!==null;)s=I,l=s.child,s.tag===22&&s.memoizedState!==null?Td(o):l!==null?(l.return=s,I=l):Td(o);for(;i!==null;)I=i,Xp(i),i=i.sibling;I=o,vi=a,Pe=c}jd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):jd(e)}}function jd(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Ls(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Pe)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:ut(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cd(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}cd(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Pe||t.flags&512&&Ol(t)}catch(h){ue(t,t.return,h)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function Cd(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function Td(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ls(4,t)}catch(l){ue(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){ue(t,o,l)}}var i=t.return;try{Ol(t)}catch(l){ue(t,i,l)}break;case 5:var s=t.return;try{Ol(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var J0=Math.ceil,hs=Wt.ReactCurrentDispatcher,Kc=Wt.ReactCurrentOwner,rt=Wt.ReactCurrentBatchConfig,H=0,ke=null,he=null,Ee=0,Ve=0,pn=xr(0),ve=0,Bo=null,Fr=0,Ns=0,Jc=0,xo=null,De=null,Qc=0,Tn=1/0,Rt=null,ps=!1,zl=null,hr=null,yi=!1,sr=null,ms=0,bo=0,Ul=null,zi=-1,Ui=0;function Le(){return H&6?de():zi!==-1?zi:zi=de()}function pr(e){return e.mode&1?H&2&&Ee!==0?Ee&-Ee:A0.transition!==null?(Ui===0&&(Ui=Lh()),Ui):(e=J,e!==0||(e=window.event,e=e===void 0?16:Bh(e.type)),e):1}function mt(e,t,r,n){if(50<bo)throw bo=0,Ul=null,Error(T(185));Go(e,r,n),(!(H&2)||e!==ke)&&(e===ke&&(!(H&2)&&(Ns|=r),ve===4&&nr(e,Ee)),We(e,n),r===1&&H===0&&!(t.mode&1)&&(Tn=de()+500,As&&br()))}function We(e,t){var r=e.callbackNode;Av(e,t);var n=Xi(e,e===ke?Ee:0);if(n===0)r!==null&&zu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&zu(r),t===1)e.tag===0?R0($d.bind(null,e)):ap($d.bind(null,e)),C0(function(){!(H&6)&&br()}),r=null;else{switch(Nh(n)){case 1:r=kc;break;case 4:r=Ih;break;case 16:r=Yi;break;case 536870912:r=Oh;break;default:r=Yi}r=sm(r,Zp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zp(e,t){if(zi=-1,Ui=0,H&6)throw Error(T(327));var r=e.callbackNode;if(bn()&&e.callbackNode!==r)return null;var n=Xi(e,e===ke?Ee:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=gs(e,n);else{t=n;var o=H;H|=2;var i=tm();(ke!==e||Ee!==t)&&(Rt=null,Tn=de()+500,Or(e,t));do try{X0();break}catch(a){em(e,a)}while(!0);Lc(),hs.current=i,H=o,he!==null?t=0:(ke=null,Ee=0,t=ve)}if(t!==0){if(t===2&&(o=dl(e),o!==0&&(n=o,t=Dl(e,o))),t===1)throw r=Bo,Or(e,0),nr(e,n),We(e,de()),r;if(t===6)nr(e,n);else{if(o=e.current.alternate,!(n&30)&&!Q0(o)&&(t=gs(e,n),t===2&&(i=dl(e),i!==0&&(n=i,t=Dl(e,i))),t===1))throw r=Bo,Or(e,0),nr(e,n),We(e,de()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(T(345));case 2:Cr(e,De,Rt);break;case 3:if(nr(e,n),(n&130023424)===n&&(t=Qc+500-de(),10<t)){if(Xi(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wl(Cr.bind(null,e,De,Rt),t);break}Cr(e,De,Rt);break;case 4:if(nr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-pt(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=de()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*J0(n/1960))-n,10<n){e.timeoutHandle=wl(Cr.bind(null,e,De,Rt),n);break}Cr(e,De,Rt);break;case 5:Cr(e,De,Rt);break;default:throw Error(T(329))}}}return We(e,de()),e.callbackNode===r?Zp.bind(null,e):null}function Dl(e,t){var r=xo;return e.current.memoizedState.isDehydrated&&(Or(e,t).flags|=256),e=gs(e,t),e!==2&&(t=De,De=r,t!==null&&Fl(t)),e}function Fl(e){De===null?De=e:De.push.apply(De,e)}function Q0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~Jc,t&=~Ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-pt(t),n=1<<r;e[r]=-1,t&=~n}}function $d(e){if(H&6)throw Error(T(327));bn();var t=Xi(e,0);if(!(t&1))return We(e,de()),null;var r=gs(e,t);if(e.tag!==0&&r===2){var n=dl(e);n!==0&&(t=n,r=Dl(e,n))}if(r===1)throw r=Bo,Or(e,0),nr(e,t),We(e,de()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,De,Rt),We(e,de()),null}function Yc(e,t){var r=H;H|=1;try{return e(t)}finally{H=r,H===0&&(Tn=de()+500,As&&br())}}function Mr(e){sr!==null&&sr.tag===0&&!(H&6)&&bn();var t=H;H|=1;var r=rt.transition,n=J;try{if(rt.transition=null,J=1,e)return e()}finally{J=n,rt.transition=r,H=t,!(H&6)&&br()}}function Xc(){Ve=pn.current,te(pn)}function Or(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,j0(r)),he!==null)for(r=he.return;r!==null;){var n=r;switch(Ac(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ns();break;case 3:jn(),te(Be),te(Ae),Mc();break;case 5:Fc(n);break;case 4:jn();break;case 13:te(se);break;case 19:te(se);break;case 10:Nc(n.type._context);break;case 22:case 23:Xc()}r=r.return}if(ke=e,he=e=mr(e.current,null),Ee=Ve=t,ve=0,Bo=null,Jc=Ns=Fr=0,De=xo=null,Rr!==null){for(t=0;t<Rr.length;t++)if(r=Rr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}Rr=null}return e}function em(e,t){do{var r=he;try{if(Lc(),Oi.current=fs,ds){for(var n=ae.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}ds=!1}if(Dr=0,xe=ge=ae=null,yo=!1,Do=0,Kc.current=null,r===null||r.return===null){ve=1,Bo=t,he=null;break}e:{var i=e,s=r.return,a=r,l=t;if(t=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=gd(s);if(v!==null){v.flags&=-257,vd(v,s,a,i,t),v.mode&1&&md(i,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){md(i,c,t),Zc();break e}l=Error(T(426))}}else if(ne&&a.mode&1){var S=gd(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),vd(S,s,a,i,t),Ic(Cn(l,a));break e}}i=l=Cn(l,a),ve!==4&&(ve=2),xo===null?xo=[i]:xo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=zp(i,l,t);ld(i,m);break e;case 1:a=l;var g=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(hr===null||!hr.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Up(i,a,t);ld(i,k);break e}}i=i.return}while(i!==null)}nm(r)}catch(_){t=_,he===r&&r!==null&&(he=r=r.return);continue}break}while(!0)}function tm(){var e=hs.current;return hs.current=fs,e===null?fs:e}function Zc(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||!(Fr&268435455)&&!(Ns&268435455)||nr(ke,Ee)}function gs(e,t){var r=H;H|=2;var n=tm();(ke!==e||Ee!==t)&&(Rt=null,Or(e,t));do try{Y0();break}catch(o){em(e,o)}while(!0);if(Lc(),H=r,hs.current=n,he!==null)throw Error(T(261));return ke=null,Ee=0,ve}function Y0(){for(;he!==null;)rm(he)}function X0(){for(;he!==null&&!Sv();)rm(he)}function rm(e){var t=im(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?nm(e):he=t,Kc.current=null}function nm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=H0(r,t),r!==null){r.flags&=32767,he=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(r=W0(r,t,Ve),r!==null){he=r;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function Cr(e,t,r){var n=J,o=rt.transition;try{rt.transition=null,J=1,Z0(e,t,r,n)}finally{rt.transition=o,J=n}return null}function Z0(e,t,r,n){do bn();while(sr!==null);if(H&6)throw Error(T(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Iv(e,i),e===ke&&(he=ke=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||yi||(yi=!0,sm(Yi,function(){return bn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=rt.transition,rt.transition=null;var s=J;J=1;var a=H;H|=4,Kc.current=null,G0(e,r),Yp(r,e),w0(vl),Zi=!!gl,vl=gl=null,e.current=r,K0(r),Ev(),H=a,J=s,rt.transition=i}else e.current=r;if(yi&&(yi=!1,sr=e,ms=o),i=e.pendingLanes,i===0&&(hr=null),Cv(r.stateNode),We(e,de()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ps)throw ps=!1,e=zl,zl=null,e;return ms&1&&e.tag!==0&&bn(),i=e.pendingLanes,i&1?e===Ul?bo++:(bo=0,Ul=e):bo=0,br(),null}function bn(){if(sr!==null){var e=Nh(ms),t=rt.transition,r=J;try{if(rt.transition=null,J=16>e?16:e,sr===null)var n=!1;else{if(e=sr,sr=null,ms=0,H&6)throw Error(T(331));var o=H;for(H|=4,I=e.current;I!==null;){var i=I,s=i.child;if(I.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(I=c;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:wo(8,u,i)}var f=u.child;if(f!==null)f.return=u,I=f;else for(;I!==null;){u=I;var h=u.sibling,v=u.return;if(Kp(u),u===c){I=null;break}if(h!==null){h.return=v,I=h;break}I=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}I=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,I=s;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,I=m;break e}I=i.return}}var g=e.current;for(I=g;I!==null;){s=I;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,I=p;else e:for(s=g;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ls(9,a)}}catch(_){ue(a,a.return,_)}if(a===s){I=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,I=k;break e}I=a.return}}if(H=o,br(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Cs,e)}catch{}n=!0}return n}finally{J=r,rt.transition=t}}return!1}function Pd(e,t,r){t=Cn(r,t),t=zp(e,t,1),e=fr(e,t,1),t=Le(),e!==null&&(Go(e,1,t),We(e,t))}function ue(e,t,r){if(e.tag===3)Pd(e,e,r);else for(;t!==null;){if(t.tag===3){Pd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(hr===null||!hr.has(n))){e=Cn(r,e),e=Up(t,e,1),t=fr(t,e,1),e=Le(),t!==null&&(Go(t,1,e),We(t,e));break}}t=t.return}}function ey(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&r,ke===e&&(Ee&r)===r&&(ve===4||ve===3&&(Ee&130023424)===Ee&&500>de()-Qc?Or(e,0):Jc|=r),We(e,t)}function om(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var r=Le();e=Mt(e,t),e!==null&&(Go(e,t,r),We(e,r))}function ty(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),om(e,r)}function ry(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(t),om(e,r)}var im;im=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Me=!1,q0(e,t,r);Me=!!(e.flags&131072)}else Me=!1,ne&&t.flags&1048576&&lp(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ni(e,t),e=t.pendingProps;var o=Sn(t,Ae.current);xn(t,r),o=qc(null,t,n,e,o,r);var i=Wc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(n)?(i=!0,os(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Uc(t),o.updater=Is,t.stateNode=o,o._reactInternals=t,jl(t,n,e,r),t=$l(null,t,n,!0,i,r)):(t.tag=0,ne&&i&&Rc(t),Oe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=oy(n),e=ut(n,e),o){case 0:t=Tl(null,t,n,e,r);break e;case 1:t=xd(null,t,n,e,r);break e;case 11:t=yd(null,t,n,e,r);break e;case 14:t=wd(null,t,n,ut(n.type,e),r);break e}throw Error(T(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),Tl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),xd(e,t,n,o,r);case 3:e:{if(Bp(t),e===null)throw Error(T(387));n=t.pendingProps,i=t.memoizedState,o=i.element,fp(e,t),cs(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Cn(Error(T(423)),t),t=bd(e,t,n,r,o);break e}else if(n!==o){o=Cn(Error(T(424)),t),t=bd(e,t,n,r,o);break e}else for(Ge=dr(t.stateNode.containerInfo.firstChild),Ke=t,ne=!0,ht=null,r=gp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(En(),n===o){t=Bt(e,t,r);break e}Oe(e,t,n,r)}t=t.child}return t;case 5:return vp(t),e===null&&Sl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,yl(n,o)?s=null:i!==null&&yl(n,i)&&(t.flags|=32),Mp(e,t),Oe(e,t,s,r),t.child;case 6:return e===null&&Sl(t),null;case 13:return qp(e,t,r);case 4:return Dc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=_n(t,null,n,r):Oe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),yd(e,t,n,o,r);case 7:return Oe(e,t,t.pendingProps,r),t.child;case 8:return Oe(e,t,t.pendingProps.children,r),t.child;case 12:return Oe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,X(as,n._currentValue),n._currentValue=s,i!==null)if(vt(i.value,s)){if(i.children===o.children&&!Be.current){t=Bt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=zt(-1,r&-r),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),El(i.return,r,t),a.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),El(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Oe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,xn(t,r),o=ot(o),n=n(o),t.flags|=1,Oe(e,t,n,r),t.child;case 14:return n=t.type,o=ut(n,t.pendingProps),o=ut(n.type,o),wd(e,t,n,o,r);case 15:return Dp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),Ni(e,t),t.tag=1,qe(n)?(e=!0,os(t)):e=!1,xn(t,r),pp(t,n,o),jl(t,n,o,r),$l(null,t,n,!0,e,r);case 19:return Wp(e,t,r);case 22:return Fp(e,t,r)}throw Error(T(156,t.tag))};function sm(e,t){return Ah(e,t)}function ny(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,r,n){return new ny(e,t,r,n)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oy(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wc)return 11;if(e===xc)return 14}return 2}function mr(e,t){var r=e.alternate;return r===null?(r=tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Di(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")eu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case nn:return Lr(r.children,o,i,t);case yc:s=8,o|=8;break;case Qa:return e=tt(12,r,t,o|2),e.elementType=Qa,e.lanes=i,e;case Ya:return e=tt(13,r,t,o),e.elementType=Ya,e.lanes=i,e;case Xa:return e=tt(19,r,t,o),e.elementType=Xa,e.lanes=i,e;case mh:return zs(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hh:s=10;break e;case ph:s=9;break e;case wc:s=11;break e;case xc:s=14;break e;case er:s=16,n=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=tt(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Lr(e,t,r,n){return e=tt(7,e,n,t),e.lanes=r,e}function zs(e,t,r,n){return e=tt(22,e,n,t),e.elementType=mh,e.lanes=r,e.stateNode={isHidden:!1},e}function Ca(e,t,r){return e=tt(6,e,null,t),e.lanes=r,e}function Ta(e,t,r){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iy(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tu(e,t,r,n,o,i,s,a,l){return e=new iy(e,t,r,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(i),e}function sy(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function am(e){if(!e)return yr;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if(qe(r))return sp(e,r,t)}return t}function lm(e,t,r,n,o,i,s,a,l){return e=tu(r,n,!0,e,o,i,s,a,l),e.context=am(null),r=e.current,n=Le(),o=pr(r),i=zt(n,o),i.callback=t??null,fr(r,i,o),e.current.lanes=o,Go(e,o,n),We(e,n),e}function Us(e,t,r,n){var o=t.current,i=Le(),s=pr(o);return r=am(r),t.context===null?t.context=r:t.pendingContext=r,t=zt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=fr(o,t,s),e!==null&&(mt(e,o,s,i),Ii(e,o,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ru(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function ay(){return null}var cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}Ds.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Us(e,t,null,null)};Ds.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mr(function(){Us(null,e,null,null)}),t[Ft]=null}};function Ds(e){this._internalRoot=e}Ds.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<rr.length&&t!==0&&t<rr[r].priority;r++);rr.splice(r,0,e),r===0&&Mh(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function ly(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var c=vs(s);i.call(c)}}var s=lm(t,n,e,0,null,!1,!1,"",Ad);return e._reactRootContainer=s,e[Ft]=s.current,Oo(e.nodeType===8?e.parentNode:e),Mr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var c=vs(l);a.call(c)}}var l=tu(e,0,!1,null,null,!1,!1,"",Ad);return e._reactRootContainer=l,e[Ft]=l.current,Oo(e.nodeType===8?e.parentNode:e),Mr(function(){Us(t,l,r,n)}),l}function Ms(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=vs(s);a.call(l)}}Us(t,s,e,o)}else s=ly(r,t,e,o,n);return vs(s)}zh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=lo(t.pendingLanes);r!==0&&(Sc(t,r|1),We(t,de()),!(H&6)&&(Tn=de()+500,br()))}break;case 13:Mr(function(){var n=Mt(e,1);if(n!==null){var o=Le();mt(n,e,1,o)}}),ru(e,1)}};Ec=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var r=Le();mt(t,e,134217728,r)}ru(e,134217728)}};Uh=function(e){if(e.tag===13){var t=pr(e),r=Mt(e,t);if(r!==null){var n=Le();mt(r,e,t,n)}ru(e,t)}};Dh=function(){return J};Fh=function(e,t){var r=J;try{return J=e,t()}finally{J=r}};ll=function(e,t,r){switch(t){case"input":if(tl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Rs(n);if(!o)throw Error(T(90));vh(n),tl(n,o)}}}break;case"textarea":wh(e,r);break;case"select":t=r.value,t!=null&&gn(e,!!r.multiple,t,!1)}};jh=Yc;Ch=Mr;var cy={usingClientEntryPoint:!1,Events:[Jo,ln,Rs,Eh,_h,Yc]},to={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uy={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ph(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{Cs=wi.inject(uy),Ct=wi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy;Qe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(T(200));return sy(e,t,null,r)};Qe.createRoot=function(e,t){if(!ou(e))throw Error(T(299));var r=!1,n="",o=cm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tu(e,1,!1,null,null,r,!1,n,o),e[Ft]=t.current,Oo(e.nodeType===8?e.parentNode:e),new nu(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Ph(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Mr(e)};Qe.hydrate=function(e,t,r){if(!Fs(t))throw Error(T(200));return Ms(null,e,t,!0,r)};Qe.hydrateRoot=function(e,t,r){if(!ou(e))throw Error(T(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=cm;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=lm(t,null,e,1,r??null,o,!1,i,s),e[Ft]=t.current,Oo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ds(t)};Qe.render=function(e,t,r){if(!Fs(t))throw Error(T(200));return Ms(null,e,t,!1,r)};Qe.unmountComponentAtNode=function(e){if(!Fs(e))throw Error(T(40));return e._reactRootContainer?(Mr(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};Qe.unstable_batchedUpdates=Yc;Qe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Fs(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ms(e,t,r,!1,n)};Qe.version="18.2.0-next-9e3b772b8-20220608";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(e){console.error(e)}}um(),lh.exports=Qe;var dy=lh.exports,Id=dy;Ka.createRoot=Id.createRoot,Ka.hydrateRoot=Id.hydrateRoot;const fy="modulepreload",hy=function(e){return"/ventanilla/"+e},Od={},Dn=function(t,r,n){let o=Promise.resolve();return r&&r.length>0&&(document.getElementsByTagName("link"),o=Promise.all(r.map(i=>{if(i=hy(i),i in Od)return;Od[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":fy,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))),o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Ld="popstate";function py(e={}){function t(n,o){let{pathname:i,search:s,hash:a}=n.location;return Ml("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:qo(o)}return gy(t,r,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function my(){return Math.random().toString(36).substring(2,10)}function Nd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ml(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Fn(t):t,state:r,key:t&&t.key||n||my()}}function qo({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function gy(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:i=!1}=n,s=o.history,a="POP",l=null,c=u();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function u(){return(s.state||{idx:null}).idx}function f(){a="POP";let S=u(),m=S==null?null:S-c;c=S,l&&l({action:a,location:x.location,delta:m})}function h(S,m){a="PUSH";let g=Ml(x.location,S,m);c=u()+1;let p=Nd(g,c),k=x.createHref(g);try{s.pushState(p,"",k)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;o.location.assign(k)}i&&l&&l({action:a,location:x.location,delta:1})}function v(S,m){a="REPLACE";let g=Ml(x.location,S,m);c=u();let p=Nd(g,c),k=x.createHref(g);s.replaceState(p,"",k),i&&l&&l({action:a,location:x.location,delta:0})}function y(S){return vy(S)}let x={get action(){return a},get location(){return e(o,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Ld,f),l=S,()=>{o.removeEventListener(Ld,f),l=null}},createHref(S){return t(o,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(S){return s.go(S)}};return x}function vy(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),oe(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:qo(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function dm(e,t,r="/"){return yy(e,t,r,!1)}function yy(e,t,r,n){let o=typeof t=="string"?Fn(t):t,i=qt(o.pathname||"/",r);if(i==null)return null;let s=fm(e);wy(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=Py(i);a=Ty(s[l],c,n)}return a}function fm(e,t=[],r=[],n="",o=!1){let i=(s,a,l=o,c)=>{let u={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(n)&&l)return;oe(u.relativePath.startsWith(n),`Absolute route path "${u.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(n.length)}let f=Ut([n,u.relativePath]),h=r.concat(u);s.children&&s.children.length>0&&(oe(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),fm(s.children,t,h,f,l)),!(s.path==null&&!s.index)&&t.push({path:f,score:jy(f,s.index),routesMeta:h})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of hm(s.path))i(s,a,!0,c)}),t}function hm(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let s=hm(n.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function wy(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Cy(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var xy=/^:[\w-]+$/,by=3,ky=2,Sy=1,Ey=10,_y=-2,zd=e=>e==="*";function jy(e,t){let r=e.split("/"),n=r.length;return r.some(zd)&&(n+=_y),t&&(n+=ky),r.filter(o=>!zd(o)).reduce((o,i)=>o+(xy.test(i)?by:i===""?Sy:Ey),n)}function Cy(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Ty(e,t,r=!1){let{routesMeta:n}=e,o={},i="/",s=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=ys({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!f&&c&&r&&!n[n.length-1].route.index&&(f=ys({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Ut([i,f.pathname]),pathnameBase:Oy(Ut([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Ut([i,f.pathnameBase]))}return s}function ys(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=$y(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:n.reduce((c,{paramName:u,isOptional:f},h)=>{if(u==="*"){let y=a[h]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return f&&!v?c[u]=void 0:c[u]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function $y(e,t=!1,r=!0){yt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Py(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function qt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Ry(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Fn(e):e;return{pathname:r?r.startsWith("/")?r:Ay(r,t):t,search:Ly(n),hash:Ny(o)}}function Ay(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function $a(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Iy(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function iu(e){let t=Iy(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function su(e,t,r,n=!1){let o;typeof e=="string"?o=Fn(e):(o={...e},oe(!o.pathname||!o.pathname.includes("?"),$a("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),$a("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),$a("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=r;else{let f=t.length-1;if(!n&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=Ry(o,a),c=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var Ut=e=>e.join("/").replace(/\/\/+/g,"/"),Oy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ny=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var pm=["POST","PUT","PATCH","DELETE"];new Set(pm);var Uy=["GET",...pm];new Set(Uy);var Mn=w.createContext(null);Mn.displayName="DataRouter";var Bs=w.createContext(null);Bs.displayName="DataRouterState";w.createContext(!1);var mm=w.createContext({isTransitioning:!1});mm.displayName="ViewTransition";var Dy=w.createContext(new Map);Dy.displayName="Fetchers";var Fy=w.createContext(null);Fy.displayName="Await";var wt=w.createContext(null);wt.displayName="Navigation";var Yo=w.createContext(null);Yo.displayName="Location";var xt=w.createContext({outlet:null,matches:[],isDataRoute:!1});xt.displayName="Route";var au=w.createContext(null);au.displayName="RouteError";function My(e,{relative:t}={}){oe(Bn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=w.useContext(wt),{hash:o,pathname:i,search:s}=Xo(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Ut([r,i])),n.createHref({pathname:a,search:s,hash:o})}function Bn(){return w.useContext(Yo)!=null}function Ht(){return oe(Bn(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Yo).location}var gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vm(e){w.useContext(wt).static||w.useLayoutEffect(e)}function qn(){let{isDataRoute:e}=w.useContext(xt);return e?ew():By()}function By(){oe(Bn(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Mn),{basename:t,navigator:r}=w.useContext(wt),{matches:n}=w.useContext(xt),{pathname:o}=Ht(),i=JSON.stringify(iu(n)),s=w.useRef(!1);return vm(()=>{s.current=!0}),w.useCallback((l,c={})=>{if(yt(s.current,gm),!s.current)return;if(typeof l=="number"){r.go(l);return}let u=su(l,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Ut([t,u.pathname])),(c.replace?r.replace:r.push)(u,c.state,c)},[t,r,i,o,e])}w.createContext(null);function ym(){let{matches:e}=w.useContext(xt),t=e[e.length-1];return t?t.params:{}}function Xo(e,{relative:t}={}){let{matches:r}=w.useContext(xt),{pathname:n}=Ht(),o=JSON.stringify(iu(r));return w.useMemo(()=>su(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function qy(e,t){return wm(e,t)}function wm(e,t,r,n){var m;oe(Bn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=w.useContext(wt),{matches:i}=w.useContext(xt),s=i[i.length-1],a=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";xm(l,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let f=Ht(),h;if(t){let g=typeof t=="string"?Fn(t):t;oe(c==="/"||((m=g.pathname)==null?void 0:m.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),h=g}else h=f;let v=h.pathname||"/",y=v;if(c!=="/"){let g=c.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=dm(e,{pathname:y});yt(u||x!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),yt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Ky(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:Ut([c,o.encodeLocation?o.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Ut([c,o.encodeLocation?o.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r,n);return t&&S?w.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},S):S}function Wy(){let e=Zy(),t=zy(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:o},r):null,s)}var Hy=w.createElement(Wy,null),Vy=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?w.createElement(xt.Provider,{value:this.props.routeContext},w.createElement(au.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Gy({routeContext:e,match:t,children:r}){let n=w.useContext(Mn);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(xt.Provider,{value:e},r)}function Ky(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let l=o.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);oe(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let s=!1,a=-1;if(r)for(let l=0;l<o.length;l++){let c=o[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:u,errors:f}=r,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||h){s=!0,a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}return o.reduceRight((l,c,u)=>{let f,h=!1,v=null,y=null;r&&(f=i&&c.route.id?i[c.route.id]:void 0,v=c.route.errorElement||Hy,s&&(a<0&&u===0?(xm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,y=null):a===u&&(h=!0,y=c.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,u+1)),S=()=>{let m;return f?m=v:h?m=y:c.route.Component?m=w.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=l,w.createElement(Gy,{match:c,routeContext:{outlet:l,matches:x,isDataRoute:r!=null},children:m})};return r&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?w.createElement(Vy,{location:r.location,revalidation:r.revalidation,component:v,error:f,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):S()},null)}function lu(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jy(e){let t=w.useContext(Mn);return oe(t,lu(e)),t}function Qy(e){let t=w.useContext(Bs);return oe(t,lu(e)),t}function Yy(e){let t=w.useContext(xt);return oe(t,lu(e)),t}function cu(e){let t=Yy(e),r=t.matches[t.matches.length-1];return oe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Xy(){return cu("useRouteId")}function Zy(){var n;let e=w.useContext(au),t=Qy("useRouteError"),r=cu("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function ew(){let{router:e}=Jy("useNavigate"),t=cu("useNavigate"),r=w.useRef(!1);return vm(()=>{r.current=!0}),w.useCallback(async(o,i={})=>{yt(r.current,gm),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Ud={};function xm(e,t,r){!t&&!Ud[e]&&(Ud[e]=!0,yt(!1,r))}w.memo(tw);function tw({routes:e,future:t,state:r}){return wm(e,void 0,r,t)}function Gr({to:e,replace:t,state:r,relative:n}){oe(Bn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=w.useContext(wt);yt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=w.useContext(xt),{pathname:s}=Ht(),a=qn(),l=su(e,iu(i),s,n==="path"),c=JSON.stringify(l);return w.useEffect(()=>{a(JSON.parse(c),{replace:t,state:r,relative:n})},[a,c,n,t,r]),null}function Yt(e){oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rw({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:i=!1}){oe(!Bn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:s,navigator:o,static:i,future:{}}),[s,o,i]);typeof r=="string"&&(r=Fn(r));let{pathname:l="/",search:c="",hash:u="",state:f=null,key:h="default"}=r,v=w.useMemo(()=>{let y=qt(l,s);return y==null?null:{location:{pathname:y,search:c,hash:u,state:f,key:h},navigationType:n}},[s,l,c,u,f,h,n]);return yt(v!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:w.createElement(wt.Provider,{value:a},w.createElement(Yo.Provider,{children:t,value:v}))}function nw({children:e,location:t}){return qy(Bl(e),t)}function Bl(e,t=[]){let r=[];return w.Children.forEach(e,(n,o)=>{if(!w.isValidElement(n))return;let i=[...t,o];if(n.type===w.Fragment){r.push.apply(r,Bl(n.props.children,i));return}oe(n.type===Yt,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),oe(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Bl(n.props.children,i)),r.push(s)}),r}var Fi="get",Mi="application/x-www-form-urlencoded";function qs(e){return e!=null&&typeof e.tagName=="string"}function ow(e){return qs(e)&&e.tagName.toLowerCase()==="button"}function iw(e){return qs(e)&&e.tagName.toLowerCase()==="form"}function sw(e){return qs(e)&&e.tagName.toLowerCase()==="input"}function aw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lw(e,t){return e.button===0&&(!t||t==="_self")&&!aw(e)}var xi=null;function cw(){if(xi===null)try{new FormData(document.createElement("form"),0),xi=!1}catch{xi=!0}return xi}var uw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pa(e){return e!=null&&!uw.has(e)?(yt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mi}"`),null):e}function dw(e,t){let r,n,o,i,s;if(iw(e)){let a=e.getAttribute("action");n=a?qt(a,t):null,r=e.getAttribute("method")||Fi,o=Pa(e.getAttribute("enctype"))||Mi,i=new FormData(e)}else if(ow(e)||sw(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(n=l?qt(l,t):null,r=e.getAttribute("formmethod")||a.getAttribute("method")||Fi,o=Pa(e.getAttribute("formenctype"))||Pa(a.getAttribute("enctype"))||Mi,i=new FormData(a,e),!cw()){let{name:c,type:u,value:f}=e;if(u==="image"){let h=c?`${c}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else c&&i.append(c,f)}}else{if(qs(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Fi,n=null,o=Mi,s=e}return i&&o==="text/plain"&&(s=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fw(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&qt(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function hw(e,t){if(e.id in t)return t[e.id];try{let r=await Dn(()=>import(e.module),__vite__mapDeps([]));return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pw(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function mw(e,t,r){let n=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let s=await hw(i,r);return s.links?s.links():[]}return[]}));return ww(n.flat(1).filter(pw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Dd(e,t,r,n,o,i){let s=(l,c)=>r[c]?l.route.id!==r[c].route.id:!0,a=(l,c)=>{var u;return r[c].pathname!==l.pathname||((u=r[c].route.path)==null?void 0:u.endsWith("*"))&&r[c].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,c)=>s(l,c)||a(l,c)):i==="data"?t.filter((l,c)=>{var f;let u=n.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(s(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function gw(e,t,{includeHydrateFallback:r}={}){return vw(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function vw(e){return[...new Set(e)]}function yw(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function ww(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let i=JSON.stringify(yw(o));return r.has(i)||(r.add(i),n.push({key:i,link:o})),n},[])}function bm(){let e=w.useContext(Mn);return uu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function xw(){let e=w.useContext(Bs);return uu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var du=w.createContext(void 0);du.displayName="FrameworkContext";function km(){let e=w.useContext(du);return uu(e,"You must render this element inside a <HydratedRouter> element"),e}function bw(e,t){let r=w.useContext(du),[n,o]=w.useState(!1),[i,s]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:f}=t,h=w.useRef(null);w.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=m=>{m.forEach(g=>{s(g.isIntersecting)})},S=new IntersectionObserver(x,{threshold:.5});return h.current&&S.observe(h.current),()=>{S.disconnect()}}},[e]),w.useEffect(()=>{if(n){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[n]);let v=()=>{o(!0)},y=()=>{o(!1),s(!1)};return r?e!=="intent"?[i,h,{}]:[i,h,{onFocus:ro(a,v),onBlur:ro(l,y),onMouseEnter:ro(c,v),onMouseLeave:ro(u,y),onTouchStart:ro(f,v)}]:[!1,h,{}]}function ro(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function kw({page:e,...t}){let{router:r}=bm(),n=w.useMemo(()=>dm(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?w.createElement(Ew,{page:e,matches:n,...t}):null}function Sw(e){let{manifest:t,routeModules:r}=km(),[n,o]=w.useState([]);return w.useEffect(()=>{let i=!1;return mw(e,t,r).then(s=>{i||o(s)}),()=>{i=!0}},[e,t,r]),n}function Ew({page:e,matches:t,...r}){let n=Ht(),{manifest:o,routeModules:i}=km(),{basename:s}=bm(),{loaderData:a,matches:l}=xw(),c=w.useMemo(()=>Dd(e,t,l,o,n,"data"),[e,t,l,o,n]),u=w.useMemo(()=>Dd(e,t,l,o,n,"assets"),[e,t,l,o,n]),f=w.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let y=new Set,x=!1;if(t.forEach(m=>{var p;let g=o.routes[m.route.id];!g||!g.hasLoader||(!c.some(k=>k.route.id===m.route.id)&&m.route.id in a&&((p=i[m.route.id])!=null&&p.shouldRevalidate)||g.hasClientLoader?x=!0:y.add(m.route.id))}),y.size===0)return[];let S=fw(e,s,"data");return x&&y.size>0&&S.searchParams.set("_routes",t.filter(m=>y.has(m.route.id)).map(m=>m.route.id).join(",")),[S.pathname+S.search]},[s,a,n,o,c,t,e,i]),h=w.useMemo(()=>gw(u,o),[u,o]),v=Sw(u);return w.createElement(w.Fragment,null,f.map(y=>w.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...r})),h.map(y=>w.createElement("link",{key:y,rel:"modulepreload",href:y,...r})),v.map(({key:y,link:x})=>w.createElement("link",{key:y,nonce:r.nonce,...x})))}function _w(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sm&&(window.__reactRouterVersion="7.8.1")}catch{}function jw({basename:e,children:t,window:r}){let n=w.useRef();n.current==null&&(n.current=py({window:r,v5Compat:!0}));let o=n.current,[i,s]=w.useState({action:o.action,location:o.location}),a=w.useCallback(l=>{w.startTransition(()=>s(l))},[s]);return w.useLayoutEffect(()=>o.listen(a),[o,a]),w.createElement(rw,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var Em=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_m=w.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f,...h},v){let{basename:y}=w.useContext(wt),x=typeof c=="string"&&Em.test(c),S,m=!1;if(typeof c=="string"&&x&&(S=c,Sm))try{let A=new URL(window.location.href),N=c.startsWith("//")?new URL(A.protocol+c):new URL(c),V=qt(N.pathname,y);N.origin===A.origin&&V!=null?c=V+N.search+N.hash:m=!0}catch{yt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=My(c,{relative:o}),[p,k,_]=bw(n,h),j=Pw(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:o,viewTransition:f});function E(A){t&&t(A),A.defaultPrevented||j(A)}let C=w.createElement("a",{...h,..._,href:S||g,onClick:m||i?t:E,ref:_w(v,k),target:l,"data-discover":!x&&r==="render"?"true":void 0});return p&&!x?w.createElement(w.Fragment,null,C,w.createElement(kw,{page:g})):C});_m.displayName="Link";var Cw=w.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:i,to:s,viewTransition:a,children:l,...c},u){let f=Xo(s,{relative:c.relative}),h=Ht(),v=w.useContext(Bs),{navigator:y,basename:x}=w.useContext(wt),S=v!=null&&Lw(f)&&a===!0,m=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,g=h.pathname,p=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(g=g.toLowerCase(),p=p?p.toLowerCase():null,m=m.toLowerCase()),p&&x&&(p=qt(p,x)||p);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let _=g===m||!o&&g.startsWith(m)&&g.charAt(k)==="/",j=p!=null&&(p===m||!o&&p.startsWith(m)&&p.charAt(m.length)==="/"),E={isActive:_,isPending:j,isTransitioning:S},C=_?t:void 0,A;typeof n=="function"?A=n(E):A=[n,_?"active":null,j?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let N=typeof i=="function"?i(E):i;return w.createElement(_m,{...c,"aria-current":C,className:A,ref:u,style:N,to:s,viewTransition:a},typeof l=="function"?l(E):l)});Cw.displayName="NavLink";var Tw=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:i,method:s=Fi,action:a,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:f,...h},v)=>{let y=Iw(),x=Ow(a,{relative:c}),S=s.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&Em.test(a),g=p=>{if(l&&l(p),p.defaultPrevented)return;p.preventDefault();let k=p.nativeEvent.submitter,_=(k==null?void 0:k.getAttribute("formmethod"))||s;y(k||p.currentTarget,{fetcherKey:t,method:_,navigate:r,replace:o,state:i,relative:c,preventScrollReset:u,viewTransition:f})};return w.createElement("form",{ref:v,method:S,action:x,onSubmit:n?l:g,...h,"data-discover":!m&&e==="render"?"true":void 0})});Tw.displayName="Form";function $w(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jm(e){let t=w.useContext(Mn);return oe(t,$w(e)),t}function Pw(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:i,viewTransition:s}={}){let a=qn(),l=Ht(),c=Xo(e,{relative:i});return w.useCallback(u=>{if(lw(u,t)){u.preventDefault();let f=r!==void 0?r:qo(l)===qo(c);a(e,{replace:f,state:n,preventScrollReset:o,relative:i,viewTransition:s})}},[l,a,c,r,n,t,e,o,i,s])}var Rw=0,Aw=()=>`__${String(++Rw)}__`;function Iw(){let{router:e}=jm("useSubmit"),{basename:t}=w.useContext(wt),r=Xy();return w.useCallback(async(n,o={})=>{let{action:i,method:s,encType:a,formData:l,body:c}=dw(n,t);if(o.navigate===!1){let u=o.fetcherKey||Aw();await e.fetch(u,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||s,formEncType:o.encType||a,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||s,formEncType:o.encType||a,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Ow(e,{relative:t}={}){let{basename:r}=w.useContext(wt),n=w.useContext(xt);oe(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),i={...Xo(e||".",{relative:t})},s=Ht();if(e==null){i.search=s.search;let a=new URLSearchParams(i.search),l=a.getAll("index");if(l.some(u=>u==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let u=a.toString();i.search=u?`?${u}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:Ut([r,i.pathname])),qo(i)}function Lw(e,{relative:t}={}){let r=w.useContext(mm);oe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=jm("useViewTransitionState"),o=Xo(e,{relative:t});if(!r.isTransitioning)return!1;let i=qt(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=qt(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ys(o.pathname,s)!=null||ys(o.pathname,i)!=null}var Re=function(){return Re=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Re.apply(this,arguments)};function $n(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var ee="-ms-",ko="-moz-",K="-webkit-",Cm="comm",Ws="rule",fu="decl",Nw="@import",Tm="@keyframes",zw="@layer",$m=Math.abs,hu=String.fromCharCode,ql=Object.assign;function Uw(e,t){return be(e,0)^45?(((t<<2^be(e,0))<<2^be(e,1))<<2^be(e,2))<<2^be(e,3):0}function Pm(e){return e.trim()}function At(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Bi(e,t,r){return e.indexOf(t,r)}function be(e,t){return e.charCodeAt(t)|0}function Pn(e,t,r){return e.slice(t,r)}function Et(e){return e.length}function Rm(e){return e.length}function uo(e,t){return t.push(e),e}function Dw(e,t){return e.map(t).join("")}function Fd(e,t){return e.filter(function(r){return!At(r,t)})}var Hs=1,Rn=1,Am=0,st=0,fe=0,Wn="";function Vs(e,t,r,n,o,i,s,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Hs,column:Rn,length:s,return:"",siblings:a}}function Xt(e,t){return ql(Vs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kr(e){for(;e.root;)e=Xt(e.root,{children:[e]});uo(e,e.siblings)}function Fw(){return fe}function Mw(){return fe=st>0?be(Wn,--st):0,Rn--,fe===10&&(Rn=1,Hs--),fe}function gt(){return fe=st<Am?be(Wn,st++):0,Rn++,fe===10&&(Rn=1,Hs++),fe}function Nr(){return be(Wn,st)}function qi(){return st}function Gs(e,t){return Pn(Wn,e,t)}function Wl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bw(e){return Hs=Rn=1,Am=Et(Wn=e),st=0,[]}function qw(e){return Wn="",e}function Ra(e){return Pm(Gs(st-1,Hl(e===91?e+2:e===40?e+1:e)))}function Ww(e){for(;(fe=Nr())&&fe<33;)gt();return Wl(e)>2||Wl(fe)>3?"":" "}function Hw(e,t){for(;--t&&gt()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Gs(e,qi()+(t<6&&Nr()==32&&gt()==32))}function Hl(e){for(;gt();)switch(fe){case e:return st;case 34:case 39:e!==34&&e!==39&&Hl(fe);break;case 40:e===41&&Hl(e);break;case 92:gt();break}return st}function Vw(e,t){for(;gt()&&e+fe!==57;)if(e+fe===84&&Nr()===47)break;return"/*"+Gs(t,st-1)+"*"+hu(e===47?e:gt())}function Gw(e){for(;!Wl(Nr());)gt();return Gs(e,st)}function Kw(e){return qw(Wi("",null,null,null,[""],e=Bw(e),0,[0],e))}function Wi(e,t,r,n,o,i,s,a,l){for(var c=0,u=0,f=s,h=0,v=0,y=0,x=1,S=1,m=1,g=0,p="",k=o,_=i,j=n,E=p;S;)switch(y=g,g=gt()){case 40:if(y!=108&&be(E,f-1)==58){Bi(E+=B(Ra(g),"&","&\f"),"&\f",$m(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Ra(g);break;case 9:case 10:case 13:case 32:E+=Ww(y);break;case 92:E+=Hw(qi()-1,7);continue;case 47:switch(Nr()){case 42:case 47:uo(Jw(Vw(gt(),qi()),t,r,l),l);break;default:E+="/"}break;case 123*x:a[c++]=Et(E)*m;case 125*x:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+u:m==-1&&(E=B(E,/\f/g,"")),v>0&&Et(E)-f&&uo(v>32?Bd(E+";",n,r,f-1,l):Bd(B(E," ","")+";",n,r,f-2,l),l);break;case 59:E+=";";default:if(uo(j=Md(E,t,r,c,u,o,a,p,k=[],_=[],f,i),i),g===123)if(u===0)Wi(E,t,j,j,k,i,f,a,_);else switch(h===99&&be(E,3)===110?100:h){case 100:case 108:case 109:case 115:Wi(e,j,j,n&&uo(Md(e,j,j,0,0,o,a,p,o,k=[],f,_),_),o,_,f,a,n?k:_);break;default:Wi(E,j,j,j,[""],_,0,a,_)}}c=u=v=0,x=m=1,p=E="",f=s;break;case 58:f=1+Et(E),v=y;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&Mw()==125)continue}switch(E+=hu(g),g*x){case 38:m=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(Et(E)-1)*m,m=1;break;case 64:Nr()===45&&(E+=Ra(gt())),h=Nr(),u=f=Et(p=E+=Gw(qi())),g++;break;case 45:y===45&&Et(E)==2&&(x=0)}}return i}function Md(e,t,r,n,o,i,s,a,l,c,u,f){for(var h=o-1,v=o===0?i:[""],y=Rm(v),x=0,S=0,m=0;x<n;++x)for(var g=0,p=Pn(e,h+1,h=$m(S=s[x])),k=e;g<y;++g)(k=Pm(S>0?v[g]+" "+p:B(p,/&\f/g,v[g])))&&(l[m++]=k);return Vs(e,t,r,o===0?Ws:a,l,c,u,f)}function Jw(e,t,r,n){return Vs(e,t,r,Cm,hu(Fw()),Pn(e,2,-2),0,n)}function Bd(e,t,r,n,o){return Vs(e,t,r,fu,Pn(e,0,n),Pn(e,n+1,-1),n,o)}function Im(e,t,r){switch(Uw(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return ko+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+ko+e+ee+e+e;case 5936:switch(be(e,t+11)){case 114:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+ee+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+ee+e+e;case 6165:return K+e+ee+"flex-"+e+e;case 5187:return K+e+B(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return K+e+ee+"flex-item-"+B(e,/flex-|-self/g,"")+(At(e,/flex-|baseline/)?"":ee+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return K+e+ee+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+ee+B(e,"shrink","negative")+e;case 5292:return K+e+ee+B(e,"basis","preferred-size")+e;case 6060:return K+"box-"+B(e,"-grow","")+K+e+ee+B(e,"grow","positive")+e;case 4554:return K+B(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!At(e,/flex-|baseline/))return ee+"grid-column-align"+Pn(e,t)+e;break;case 2592:case 3360:return ee+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,At(n.props,/grid-\w+-end/)})?~Bi(e+(r=r[t].value),"span",0)?e:ee+B(e,"-start","")+e+ee+"grid-row-span:"+(~Bi(r,"span",0)?At(r,/\d+/):+At(r,/\d+/)-+At(e,/\d+/))+";":ee+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return At(n.props,/grid-\w+-start/)})?e:ee+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(be(e,t+1)){case 109:if(be(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+ko+(be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bi(e,"stretch",0)?Im(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,l,c){return ee+o+":"+i+c+(s?ee+o+"-span:"+(a?l:+l-+i)+c:"")+e});case 4949:if(be(e,t+6)===121)return B(e,":",":"+K)+e;break;case 6444:switch(be(e,be(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(be(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+ee+"$2box$3")+e;case 100:return B(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function ws(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Qw(e,t,r,n){switch(e.type){case zw:if(e.children.length)break;case Nw:case fu:return e.return=e.return||e.value;case Cm:return"";case Tm:return e.return=e.value+"{"+ws(e.children,n)+"}";case Ws:if(!Et(e.value=e.props.join(",")))return""}return Et(r=ws(e.children,n))?e.return=e.value+"{"+r+"}":""}function Yw(e){var t=Rm(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function Xw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Zw(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case fu:e.return=Im(e.value,e.length,r);return;case Tm:return ws([Xt(e,{value:B(e.value,"@","@"+K)})],n);case Ws:if(e.length)return Dw(r=e.props,function(o){switch(At(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kr(Xt(e,{props:[B(o,/:(read-\w+)/,":"+ko+"$1")]})),Kr(Xt(e,{props:[o]})),ql(e,{props:Fd(r,n)});break;case"::placeholder":Kr(Xt(e,{props:[B(o,/:(plac\w+)/,":"+K+"input-$1")]})),Kr(Xt(e,{props:[B(o,/:(plac\w+)/,":"+ko+"$1")]})),Kr(Xt(e,{props:[B(o,/:(plac\w+)/,ee+"input-$1")]})),Kr(Xt(e,{props:[o]})),ql(e,{props:Fd(r,n)});break}return""})}}var ex={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He={},An=typeof process<"u"&&He!==void 0&&(He.REACT_APP_SC_ATTR||He.SC_ATTR)||"data-styled",Om="active",Lm="data-styled-version",Ks="6.1.19",pu=`/*!sc*/
`,xs=typeof window<"u"&&typeof document<"u",tx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==""?He.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&He.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.SC_DISABLE_SPEEDY!==void 0&&He.SC_DISABLE_SPEEDY!==""&&He.SC_DISABLE_SPEEDY!=="false"&&He.SC_DISABLE_SPEEDY),rx={},Js=Object.freeze([]),In=Object.freeze({});function Nm(e,t,r){return r===void 0&&(r=In),e.theme!==r.theme&&e.theme||t||r.theme}var zm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ox=/(^-|-$)/g;function qd(e){return e.replace(nx,"-").replace(ox,"")}var ix=/(a)(d)/gi,bi=52,Wd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vl(e){var t,r="";for(t=Math.abs(e);t>bi;t=t/bi|0)r=Wd(t%bi)+r;return(Wd(t%bi)+r).replace(ix,"$1-$2")}var Aa,Um=5381,mn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Dm=function(e){return mn(Um,e)};function mu(e){return Vl(Dm(e)>>>0)}function sx(e){return e.displayName||e.name||"Component"}function Ia(e){return typeof e=="string"&&!0}var Fm=typeof Symbol=="function"&&Symbol.for,Mm=Fm?Symbol.for("react.memo"):60115,ax=Fm?Symbol.for("react.forward_ref"):60112,lx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ux=((Aa={})[ax]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Aa[Mm]=Bm,Aa);function Hd(e){return("type"in(t=e)&&t.type.$$typeof)===Mm?Bm:"$$typeof"in e?ux[e.$$typeof]:lx;var t}var dx=Object.defineProperty,fx=Object.getOwnPropertyNames,Vd=Object.getOwnPropertySymbols,hx=Object.getOwnPropertyDescriptor,px=Object.getPrototypeOf,Gd=Object.prototype;function qm(e,t,r){if(typeof t!="string"){if(Gd){var n=px(t);n&&n!==Gd&&qm(e,n,r)}var o=fx(t);Vd&&(o=o.concat(Vd(t)));for(var i=Hd(e),s=Hd(t),a=0;a<o.length;++a){var l=o[a];if(!(l in cx||r&&r[l]||s&&l in s||i&&l in i)){var c=hx(t,l);try{dx(e,l,c)}catch{}}}}return e}function On(e){return typeof e=="function"}function gu(e){return typeof e=="object"&&"styledComponentId"in e}function Ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bs(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Wo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gl(e,t,r){if(r===void 0&&(r=!1),!r&&!Wo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Gl(e[n],t[n]);else if(Wo(t))for(var n in t)e[n]=Gl(e[n],t[n]);return e}function vu(e,t){Object.defineProperty(e,"toString",{value:t})}function Zo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Zo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(pu);return r},e}(),Hi=new Map,ks=new Map,Vi=1,ki=function(e){if(Hi.has(e))return Hi.get(e);for(;ks.has(Vi);)Vi++;var t=Vi++;return Hi.set(e,t),ks.set(t,e),t},gx=function(e,t){Vi=t+1,Hi.set(e,t),ks.set(t,e)},vx="style[".concat(An,"][").concat(Lm,'="').concat(Ks,'"]'),yx=new RegExp("^".concat(An,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wx=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},xx=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(pu),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var l=a.match(yx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(gx(u,c),wx(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},Kd=function(e){for(var t=document.querySelectorAll(vx),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(An)!==Om&&(xx(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function bx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wm=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(An,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(An,Om),n.setAttribute(Lm,Ks);var s=bx();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},kx=function(){function e(t){this.element=Wm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw Zo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Sx=function(){function e(t){this.element=Wm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ex=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jd=xs,_x={isServer:!xs,useCSSOMInjection:!tx},Ss=function(){function e(t,r,n){t===void 0&&(t=In),r===void 0&&(r={});var o=this;this.options=Re(Re({},_x),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&xs&&Jd&&(Jd=!1,Kd(this)),vu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",c=function(f){var h=function(m){return ks.get(m)}(f);if(h===void 0)return"continue";var v=i.names.get(h),y=s.getGroup(f);if(v===void 0||!v.size||y.length===0)return"continue";var x="".concat(An,".g").concat(f,'[id="').concat(h,'"]'),S="";v!==void 0&&v.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(y).concat(x,'{content:"').concat(S,'"}').concat(pu)},u=0;u<a;u++)c(u);return l}(o)})}return e.registerId=function(t){return ki(t)},e.prototype.rehydrate=function(){!this.server&&xs&&Kd(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Re(Re({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Ex(o):n?new kx(o):new Sx(o)}(this.options),new mx(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ki(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ki(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ki(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jx=/&/g,Cx=/^\s*\/\/.*$/gm;function Hm(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Hm(r.children,t)),r})}function Tx(e){var t,r,n,o=In,i=o.options,s=i===void 0?In:i,a=o.plugins,l=a===void 0?Js:a,c=function(h,v,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):h},u=l.slice();u.push(function(h){h.type===Ws&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(jx,r).replace(n,c))}),s.prefix&&u.push(Zw),u.push(Qw);var f=function(h,v,y,x){v===void 0&&(v=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var S=h.replace(Cx,""),m=Kw(y||v?"".concat(y," ").concat(v," { ").concat(S," }"):S);s.namespace&&(m=Hm(m,s.namespace));var g=[];return ws(m,Yw(u.concat(Xw(function(p){return g.push(p)})))),g};return f.hash=l.length?l.reduce(function(h,v){return v.name||Zo(15),mn(h,v.name)},Um).toString():"",f}var $x=new Ss,Kl=Tx(),Vm=jt.createContext({shouldForwardProp:void 0,styleSheet:$x,stylis:Kl});Vm.Consumer;jt.createContext(void 0);function Jl(){return w.useContext(Vm)}var Gm=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Kl);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,vu(this,function(){throw Zo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kl),this.name+t.hash},e}(),Px=function(e){return e>="A"&&e<="Z"};function Qd(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Px(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Km=function(e){return e==null||e===!1||e===""},Jm=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Km(i)&&(Array.isArray(i)&&i.isCss||On(i)?n.push("".concat(Qd(o),":"),i,";"):Wo(i)?n.push.apply(n,$n($n(["".concat(o," {")],Jm(i),!1),["}"],!1)):n.push("".concat(Qd(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ex||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function gr(e,t,r,n){if(Km(e))return[];if(gu(e))return[".".concat(e.styledComponentId)];if(On(e)){if(!On(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return gr(o,t,r,n)}var i;return e instanceof Gm?r?(e.inject(r,n),[e.getName(n)]):[e]:Wo(e)?Jm(e):Array.isArray(e)?Array.prototype.concat.apply(Js,e.map(function(s){return gr(s,t,r,n)})):[e.toString()]}function Qm(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(On(r)&&!gu(r))return!1}return!0}var Rx=Dm(Ks),Ax=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Qm(t),this.componentId=r,this.baseHash=mn(Rx,r),this.baseStyle=n,Ss.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Ir(o,this.staticRulesId);else{var i=bs(gr(this.rules,t,r,n)),s=Vl(mn(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=Ir(o,s),this.staticRulesId=s}else{for(var l=mn(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var h=bs(gr(f,t,r,n));l=mn(l,h+u),c+=h}}if(c){var v=Vl(l>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(c,".".concat(v),void 0,this.componentId)),o=Ir(o,v)}}return o},e}(),yu=jt.createContext(void 0);yu.Consumer;var Oa={};function Ix(e,t,r){var n=gu(e),o=e,i=!Ia(e),s=t.attrs,a=s===void 0?Js:s,l=t.componentId,c=l===void 0?function(k,_){var j=typeof k!="string"?"sc":qd(k);Oa[j]=(Oa[j]||0)+1;var E="".concat(j,"-").concat(mu(Ks+j+Oa[j]));return _?"".concat(_,"-").concat(E):E}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(k){return Ia(k)?"styled.".concat(k):"Styled(".concat(sx(k),")")}(e):u,h=t.displayName&&t.componentId?"".concat(qd(t.displayName),"-").concat(t.componentId):t.componentId||c,v=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(n&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(k,_){return x(k,_)&&S(k,_)}}else y=x}var m=new Ax(r,h,n?o.componentStyle:void 0);function g(k,_){return function(j,E,C){var A=j.attrs,N=j.componentStyle,V=j.defaultProps,ye=j.foldedComponentIds,Q=j.styledComponentId,je=j.target,we=jt.useContext(yu),re=Jl(),ce=j.shouldForwardProp||re.shouldForwardProp,R=Nm(E,we,V)||In,$=function(F,G,at){for(var Sr,$t=Re(Re({},G),{className:void 0,theme:at}),ri=0;ri<F.length;ri+=1){var M=On(Sr=F[ri])?Sr($t):Sr;for(var ie in M)$t[ie]=ie==="className"?Ir($t[ie],M[ie]):ie==="style"?Re(Re({},$t[ie]),M[ie]):M[ie]}return G.className&&($t.className=Ir($t.className,G.className)),$t}(A,E,R),O=$.as||je,L={};for(var U in $)$[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&$.theme===R||(U==="forwardedAs"?L.as=$.forwardedAs:ce&&!ce(U,O)||(L[U]=$[U]));var Ue=function(F,G){var at=Jl(),Sr=F.generateAndInjectStyles(G,at.styleSheet,at.stylis);return Sr}(N,$),Ce=Ir(ye,Q);return Ue&&(Ce+=" "+Ue),$.className&&(Ce+=" "+$.className),L[Ia(O)&&!zm.has(O)?"class":"className"]=Ce,C&&(L.ref=C),w.createElement(O,L)}(p,k,_)}g.displayName=f;var p=jt.forwardRef(g);return p.attrs=v,p.componentStyle=m,p.displayName=f,p.shouldForwardProp=y,p.foldedComponentIds=n?Ir(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=n?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(_){for(var j=[],E=1;E<arguments.length;E++)j[E-1]=arguments[E];for(var C=0,A=j;C<A.length;C++)Gl(_,A[C],!0);return _}({},o.defaultProps,k):k}}),vu(p,function(){return".".concat(p.styledComponentId)}),i&&qm(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Yd(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Xd=function(e){return Object.assign(e,{isCss:!0})};function wu(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(On(e)||Wo(e))return Xd(gr(Yd(Js,$n([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?gr(n):Xd(gr(Yd(n,t)))}function Ql(e,t,r){if(r===void 0&&(r=In),!t)throw Zo(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,wu.apply(void 0,$n([o],i,!1)))};return n.attrs=function(o){return Ql(e,t,Re(Re({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Ql(e,t,Re(Re({},r),o))},n}var Ym=function(e){return Ql(Ix,e)},b=Ym;zm.forEach(function(e){b[e]=Ym(e)});var Ox=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Qm(t),Ss.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(bs(gr(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Ss.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Lx(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=wu.apply(void 0,$n([e],t,!1)),o="sc-global-".concat(mu(JSON.stringify(n))),i=new Ox(n,o),s=function(l){var c=Jl(),u=jt.useContext(yu),f=jt.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(f,l,c.styleSheet,u,c.stylis),jt.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,l,c.styleSheet,u,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,f,h){if(i.isStatic)i.renderStyles(l,rx,u,h);else{var v=Re(Re({},c),{theme:Nm(c,f,s.defaultProps)});i.renderStyles(l,v,u,h)}}return jt.memo(s)}function Nx(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=bs(wu.apply(void 0,$n([e],t,!1))),o=mu(n);return new Gm(o,n)}const zx=Lx`
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
`,Ux=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Dn(()=>Promise.resolve().then(()=>Hn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class xu extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class Dx extends xu{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class Zd extends xu{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class ef extends xu{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Yl;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(Yl||(Yl={}));var Fx=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class Mx{constructor(t,{headers:r={},customFetch:n,region:o=Yl.Any}={}){this.url=t,this.headers=r,this.region=o,this.fetch=Ux(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return Fx(this,void 0,void 0,function*(){try{const{headers:o,method:i,body:s}=r;let a={},{region:l}=r;l||(l=this.region);const c=new URL(`${this.url}/${t}`);l&&l!=="any"&&(a["x-region"]=l,c.searchParams.set("forceFunctionRegion",l));let u;s&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",u=s):typeof s=="string"?(a["Content-Type"]="text/plain",u=s):typeof FormData<"u"&&s instanceof FormData?u=s:(a["Content-Type"]="application/json",u=JSON.stringify(s)));const f=yield this.fetch(c.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),o),body:u}).catch(x=>{throw new Dx(x)}),h=f.headers.get("x-relay-error");if(h&&h==="true")throw new Zd(f);if(!f.ok)throw new ef(f);let v=((n=f.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),y;return v==="application/json"?y=yield f.json():v==="application/octet-stream"?y=yield f.blob():v==="text/event-stream"?y=f:v==="multipart/form-data"?y=yield f.formData():y=yield f.text(),{data:y,error:null,response:f}}catch(o){return{data:null,error:o,response:o instanceof ef||o instanceof Zd?o.context:void 0}}})}}var Fe={},bu={},Qs={},ei={},Ys={},Xs={},Bx=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},Ln=Bx();const qx=Ln.fetch,Xm=Ln.fetch.bind(Ln),Zm=Ln.Headers,Wx=Ln.Request,Hx=Ln.Response,Hn=Object.freeze(Object.defineProperty({__proto__:null,Headers:Zm,Request:Wx,Response:Hx,default:Xm,fetch:qx},Symbol.toStringTag,{value:"Module"})),Vx=Fg(Hn);var Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});let Gx=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};Zs.default=Gx;var eg=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xs,"__esModule",{value:!0});const Kx=eg(Vx),Jx=eg(Zs);let Qx=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=Kx.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let o=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var s,a,l;let c=null,u=null,f=null,h=i.status,v=i.statusText;if(i.ok){if(this.method!=="HEAD"){const m=await i.text();m===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?u=m:u=JSON.parse(m))}const x=(s=this.headers.Prefer)===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),S=(a=i.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");x&&S&&S.length>1&&(f=parseInt(S[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(u)&&(u.length>1?(c={code:"PGRST116",details:`Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},u=null,f=null,h=406,v="Not Acceptable"):u.length===1?u=u[0]:u=null)}else{const x=await i.text();try{c=JSON.parse(x),Array.isArray(c)&&i.status===404&&(u=[],c=null,h=200,v="OK")}catch{i.status===404&&x===""?(h=204,v="No Content"):c={message:x}}if(c&&this.isMaybeSingle&&(!((l=c==null?void 0:c.details)===null||l===void 0)&&l.includes("0 rows"))&&(c=null,h=200,v="OK"),c&&this.shouldThrowOnError)throw new Jx.default(c)}return{error:c,data:u,count:f,status:h,statusText:v}});return this.shouldThrowOnError||(o=o.catch(i=>{var s,a,l;return{error:{message:`${(s=i==null?void 0:i.name)!==null&&s!==void 0?s:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),o.then(t,r)}returns(){return this}overrideTypes(){return this}};Xs.default=Qx;var Yx=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ys,"__esModule",{value:!0});const Xx=Yx(Xs);let Zx=class extends Xx.default{select(t){let r=!1;const n=(t??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:o,referencedTable:i=o}={}){const s=i?`${i}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const o=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(o,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:o=n}={}){const i=typeof o>"u"?"offset":`${o}.offset`,s=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(s,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:o=!1,wal:i=!1,format:s="text"}={}){var a;const l=[t?"analyze":null,r?"verbose":null,n?"settings":null,o?"buffers":null,i?"wal":null].filter(Boolean).join("|"),c=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${s}; for="${c}"; options=${l};`,s==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};Ys.default=Zx;var e1=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ei,"__esModule",{value:!0});const t1=e1(Ys);let r1=class extends t1.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:o}={}){let i="";o==="plain"?i="pl":o==="phrase"?i="ph":o==="websearch"&&(i="w");const s=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${i}fts${s}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const o=n?`${n}.or`:"or";return this.url.searchParams.append(o,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};ei.default=r1;var n1=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qs,"__esModule",{value:!0});const no=n1(ei);let o1=class{constructor(t,{headers:r={},schema:n,fetch:o}){this.url=t,this.headers=r,this.schema=n,this.fetch=o}select(t,{head:r=!1,count:n}={}){const o=r?"HEAD":"GET";let i=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!i?"":(a==='"'&&(i=!i),a)).join("");return this.url.searchParams.set("select",s),n&&(this.headers.Prefer=`count=${n}`),new no.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const o="POST",i=[];if(this.headers.Prefer&&i.push(this.headers.Prefer),r&&i.push(`count=${r}`),n||i.push("missing=default"),this.headers.Prefer=i.join(","),Array.isArray(t)){const s=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(s.length>0){const a=[...new Set(s)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new no.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:o,defaultToNull:i=!0}={}){const s="POST",a=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&a.push(this.headers.Prefer),o&&a.push(`count=${o}`),i||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((c,u)=>c.concat(Object.keys(u)),[]);if(l.length>0){const c=[...new Set(l)].map(u=>`"${u}"`);this.url.searchParams.set("columns",c.join(","))}}return new no.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",o=[];return this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),this.headers.Prefer=o.join(","),new no.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new no.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};Qs.default=o1;var ea={},ta={};Object.defineProperty(ta,"__esModule",{value:!0});ta.version=void 0;ta.version="0.0.0-automated";Object.defineProperty(ea,"__esModule",{value:!0});ea.DEFAULT_HEADERS=void 0;const i1=ta;ea.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${i1.version}`};var tg=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});const s1=tg(Qs),a1=tg(ei),l1=ea;let c1=class rg{constructor(t,{headers:r={},schema:n,fetch:o}={}){this.url=t,this.headers=Object.assign(Object.assign({},l1.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=o}from(t){const r=new URL(`${this.url}/${t}`);return new s1.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new rg(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:o=!1,count:i}={}){let s;const a=new URL(`${this.url}/rpc/${t}`);let l;n||o?(s=n?"HEAD":"GET",Object.entries(r).filter(([u,f])=>f!==void 0).map(([u,f])=>[u,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([u,f])=>{a.searchParams.append(u,f)})):(s="POST",l=r);const c=Object.assign({},this.headers);return i&&(c.Prefer=`count=${i}`),new a1.default({method:s,url:a,headers:c,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};bu.default=c1;var Vn=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.PostgrestError=Fe.PostgrestBuilder=Fe.PostgrestTransformBuilder=Fe.PostgrestFilterBuilder=Fe.PostgrestQueryBuilder=Fe.PostgrestClient=void 0;const ng=Vn(bu);Fe.PostgrestClient=ng.default;const og=Vn(Qs);Fe.PostgrestQueryBuilder=og.default;const ig=Vn(ei);Fe.PostgrestFilterBuilder=ig.default;const sg=Vn(Ys);Fe.PostgrestTransformBuilder=sg.default;const ag=Vn(Xs);Fe.PostgrestBuilder=ag.default;const lg=Vn(Zs);Fe.PostgrestError=lg.default;var u1=Fe.default={PostgrestClient:ng.default,PostgrestQueryBuilder:og.default,PostgrestFilterBuilder:ig.default,PostgrestTransformBuilder:sg.default,PostgrestBuilder:ag.default,PostgrestError:lg.default};const{PostgrestClient:d1,PostgrestQueryBuilder:Oj,PostgrestFilterBuilder:Lj,PostgrestTransformBuilder:Nj,PostgrestBuilder:zj,PostgrestError:Uj}=u1;class f1{static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"&&process.versions&&process.versions.node){const r=parseInt(process.versions.node.split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const h1="2.15.1",p1=`realtime-js/${h1}`,m1="1.0.0",Xl=1e4,g1=1e3,v1=100;var So;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(So||(So={}));var pe;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(pe||(pe={}));var ft;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(ft||(ft={}));var Zl;(function(e){e.websocket="websocket"})(Zl||(Zl={}));var $r;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})($r||($r={}));class y1{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const o=r.getUint8(1),i=r.getUint8(2);let s=this.HEADER_LENGTH+2;const a=n.decode(t.slice(s,s+o));s=s+o;const l=n.decode(t.slice(s,s+i));s=s+i;const c=JSON.parse(n.decode(t.slice(s,t.byteLength)));return{ref:null,topic:a,event:l,payload:c}}}class cg{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Y;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Y||(Y={}));const tf=(e,t,r={})=>{var n;const o=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((i,s)=>(i[s]=w1(s,e,t,o),i),{})},w1=(e,t,r,n)=>{const o=t.find(a=>a.name===e),i=o==null?void 0:o.type,s=r[e];return i&&!n.includes(i)?ug(i,s):ec(s)},ug=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return S1(t,r)}switch(e){case Y.bool:return x1(t);case Y.float4:case Y.float8:case Y.int2:case Y.int4:case Y.int8:case Y.numeric:case Y.oid:return b1(t);case Y.json:case Y.jsonb:return k1(t);case Y.timestamp:return E1(t);case Y.abstime:case Y.date:case Y.daterange:case Y.int4range:case Y.int8range:case Y.money:case Y.reltime:case Y.text:case Y.time:case Y.timestamptz:case Y.timetz:case Y.tsrange:case Y.tstzrange:return ec(t);default:return ec(t)}},ec=e=>e,x1=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},b1=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},k1=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},S1=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let i;const s=e.slice(1,r);try{i=JSON.parse("["+s+"]")}catch{i=s?s.split(","):[]}return i.map(a=>ug(t,a))}return e},E1=e=>typeof e=="string"?e.replace(" ","T"):e,dg=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"};class La{constructor(t,r,n={},o=Xl){this.channel=t,this.event=r,this.payload=n,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var rf;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(rf||(rf={}));class Eo{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Eo.syncState(this.state,o,i,s),this.pendingDiffs.forEach(l=>{this.state=Eo.syncDiff(this.state,l,i,s)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},o=>{const{onJoin:i,onLeave:s,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Eo.syncDiff(this.state,o,i,s),a())}),this.onJoin((o,i,s)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:i,newPresences:s})}),this.onLeave((o,i,s)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:i,leftPresences:s})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,o){const i=this.cloneDeep(t),s=this.transformState(r),a={},l={};return this.map(i,(c,u)=>{s[c]||(l[c]=u)}),this.map(s,(c,u)=>{const f=i[c];if(f){const h=u.map(S=>S.presence_ref),v=f.map(S=>S.presence_ref),y=u.filter(S=>v.indexOf(S.presence_ref)<0),x=f.filter(S=>h.indexOf(S.presence_ref)<0);y.length>0&&(a[c]=y),x.length>0&&(l[c]=x)}else a[c]=u}),this.syncDiff(i,{joins:a,leaves:l},n,o)}static syncDiff(t,r,n,o){const{joins:i,leaves:s}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),o||(o=()=>{}),this.map(i,(a,l)=>{var c;const u=(c=t[a])!==null&&c!==void 0?c:[];if(t[a]=this.cloneDeep(l),u.length>0){const f=t[a].map(v=>v.presence_ref),h=u.filter(v=>f.indexOf(v.presence_ref)<0);t[a].unshift(...h)}n(a,u,l)}),this.map(s,(a,l)=>{let c=t[a];if(!c)return;const u=l.map(f=>f.presence_ref);c=c.filter(f=>u.indexOf(f.presence_ref)<0),t[a]=c,o(a,c,l),c.length===0&&delete t[a]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const o=t[n];return"metas"in o?r[n]=o.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):r[n]=o,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var nf;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(nf||(nf={}));var _o;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(_o||(_o={}));var It;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(It||(It={}));class ku{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=pe.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new La(this,ft.join,this.params,this.timeout),this.rejoinTimer=new cg(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=pe.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=pe.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=pe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=pe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=pe.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ft.reply,{},(o,i)=>{this._trigger(this._replyEventName(i),o)}),this.presence=new Eo(this),this.broadcastEndpointURL=dg(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,o;if(this.socket.isConnected()||this.socket.connect(),this.state==pe.closed){const{config:{broadcast:i,presence:s,private:a}}=this.params,l=(o=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(h=>h.filter))!==null&&o!==void 0?o:[],c=!!this.bindings[_o.PRESENCE]&&this.bindings[_o.PRESENCE].length>0,u={},f={broadcast:i,presence:Object.assign(Object.assign({},s),{enabled:c}),postgres_changes:l,private:a};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(h=>t==null?void 0:t(It.CHANNEL_ERROR,h)),this._onClose(()=>t==null?void 0:t(It.CLOSED)),this.updateJoinPayload(Object.assign({config:f},u)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:h})=>{var v;if(this.socket.setAuth(),h===void 0){t==null||t(It.SUBSCRIBED);return}else{const y=this.bindings.postgres_changes,x=(v=y==null?void 0:y.length)!==null&&v!==void 0?v:0,S=[];for(let m=0;m<x;m++){const g=y[m],{filter:{event:p,schema:k,table:_,filter:j}}=g,E=h&&h[m];if(E&&E.event===p&&E.schema===k&&E.table===_&&E.filter===j)S.push(Object.assign(Object.assign({},g),{id:E.id}));else{this.unsubscribe(),this.state=pe.errored,t==null||t(It.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=S,t&&t(It.SUBSCRIBED);return}}).receive("error",h=>{this.state=pe.errored,t==null||t(It.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(h).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(It.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===pe.joined&&t===_o.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(t,r,n)}async send(t,r={}){var n,o;if(!this._canPush()&&t.type==="broadcast"){const{event:i,payload:s}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:s,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((o=c.body)===null||o===void 0?void 0:o.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var s,a,l;const c=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(s=this.params)===null||s===void 0?void 0:s.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),c.receive("ok",()=>i("ok")),c.receive("error",()=>i("error")),c.receive("timeout",()=>i("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=pe.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ft.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(o=>{n=new La(this,ft.leave,{},t),n.receive("ok",()=>{r(),o("ok")}).receive("timeout",()=>{r(),o("timed out")}).receive("error",()=>{o("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=pe.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const o=new AbortController,i=setTimeout(()=>o.abort(),n),s=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(i),s}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new La(this,t,r,n);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>v1){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var o,i;const s=t.toLocaleLowerCase(),{close:a,error:l,leave:c,join:u}=ft;if(n&&[a,l,c,u].indexOf(s)>=0&&n!==this._joinRef())return;let h=this._onMessage(s,r,n);if(r&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(v=>{var y,x,S;return((y=v.filter)===null||y===void 0?void 0:y.event)==="*"||((S=(x=v.filter)===null||x===void 0?void 0:x.event)===null||S===void 0?void 0:S.toLocaleLowerCase())===s}).map(v=>v.callback(h,n)):(i=this.bindings[s])===null||i===void 0||i.filter(v=>{var y,x,S,m,g,p;if(["broadcast","presence","postgres_changes"].includes(s))if("id"in v){const k=v.id,_=(y=v.filter)===null||y===void 0?void 0:y.event;return k&&((x=r.ids)===null||x===void 0?void 0:x.includes(k))&&(_==="*"||(_==null?void 0:_.toLocaleLowerCase())===((S=r.data)===null||S===void 0?void 0:S.type.toLocaleLowerCase()))}else{const k=(g=(m=v==null?void 0:v.filter)===null||m===void 0?void 0:m.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return k==="*"||k===((p=r==null?void 0:r.event)===null||p===void 0?void 0:p.toLocaleLowerCase())}else return v.type.toLocaleLowerCase()===s}).map(v=>{if(typeof h=="object"&&"ids"in h){const y=h.data,{schema:x,table:S,commit_timestamp:m,type:g,errors:p}=y;h=Object.assign(Object.assign({},{schema:x,table:S,commit_timestamp:m,eventType:g,new:{},old:{},errors:p}),this._getPayloadRecords(y))}v.callback(h,n)})}_isClosed(){return this.state===pe.closed}_isJoined(){return this.state===pe.joined}_isJoining(){return this.state===pe.joining}_isLeaving(){return this.state===pe.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const o=t.toLocaleLowerCase(),i={type:o,filter:r,callback:n};return this.bindings[o]?this.bindings[o].push(i):this.bindings[o]=[i],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(o=>{var i;return!(((i=o.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===n&&ku.isEqual(o.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(ft.close,{},t)}_onError(t){this._on(ft.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=pe.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=tf(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=tf(t.columns,t.old_record)),r}}const of=()=>{},Si={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},_1=[1e3,2e3,5e3,1e4],j1=1e4,C1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class T1{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Xl,this.transport=null,this.heartbeatIntervalMs=Si.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=of,this.ref=0,this.reconnectTimer=null,this.logger=of,this.conn=null,this.sendBuffer=[],this.serializer=new y1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...s)=>Dn(()=>Promise.resolve().then(()=>Hn),void 0).then(({default:a})=>a(...s)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):i=fetch,(...s)=>i(...s)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${Zl.websocket}`,this.httpEndpoint=dg(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=f1.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:m1}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},t?this.conn.close(t,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case So.connecting:return $r.Connecting;case So.open:return $r.Open;case So.closing:return $r.Closing;default:return $r.Closed}}isConnected(){return this.connectionState()===$r.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,o=this.getChannels().find(i=>i.topic===n);if(o)return o;{const i=new ku(`realtime:${t}`,r,this);return this.channels.push(i),i}}push(t){const{topic:r,event:n,payload:o,ref:i}=t,s=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${i})`,o),this.isConnected()?s():this.sendBuffer.push(s)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(g1,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},Si.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{r.topic==="phoenix"&&r.event==="phx_reply"&&this.heartbeatCallback(r.payload.status==="ok"?"ok":"error"),r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:o,payload:i,ref:s}=r,a=s?`(${s})`:"",l=i.status||"";this.log("receive",`${l} ${n} ${o} ${a}`.trim(),i),this.channels.filter(c=>c._isMember(n)).forEach(c=>c._trigger(o,i,s)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(ft.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",o=new URLSearchParams(r);return`${t}${n}${o}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([C1],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r;t?r=t:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const o={access_token:r,version:p1};r&&n.updateJoinPayload(o),n.joinedOnce&&n._isJoined()&&n._push(ft.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new cg(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Si.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,o,i,s,a,l,c;if(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:Xl,this.heartbeatIntervalMs=(o=t==null?void 0:t.heartbeatIntervalMs)!==null&&o!==void 0?o:Si.HEARTBEAT_INTERVAL,this.worker=(i=t==null?void 0:t.worker)!==null&&i!==void 0?i:!1,this.accessToken=(s=t==null?void 0:t.accessToken)!==null&&s!==void 0?s:null,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(a=t==null?void 0:t.reconnectAfterMs)!==null&&a!==void 0?a:u=>_1[u-1]||j1,this.encode=(l=t==null?void 0:t.encode)!==null&&l!==void 0?l:(u,f)=>f(JSON.stringify(u)),this.decode=(c=t==null?void 0:t.decode)!==null&&c!==void 0?c:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}class Su extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function me(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class $1 extends Su{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class tc extends Su{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var P1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const fg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Dn(()=>Promise.resolve().then(()=>Hn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},R1=()=>P1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Dn(()=>Promise.resolve().then(()=>Hn),void 0)).Response:Response}),rc=e=>{if(Array.isArray(e))return e.map(r=>rc(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const o=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));t[o]=rc(n)}),t},A1=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var Wr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const Na=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),I1=(e,t,r)=>Wr(void 0,void 0,void 0,function*(){const n=yield R1();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(o=>{const i=e.status||500,s=(o==null?void 0:o.statusCode)||i+"";t(new $1(Na(o),i,s))}).catch(o=>{t(new tc(Na(o),o))}):t(new tc(Na(e),e))}),O1=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?o:(A1(n)?(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),o.body=JSON.stringify(n)):o.body=n,t!=null&&t.duplex&&(o.duplex=t.duplex),Object.assign(Object.assign({},o),r))};function ti(e,t,r,n,o,i){return Wr(this,void 0,void 0,function*(){return new Promise((s,a)=>{e(r,O1(t,n,o,i)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>s(l)).catch(l=>I1(l,a,n))})})}function Es(e,t,r,n){return Wr(this,void 0,void 0,function*(){return ti(e,"GET",t,r,n)})}function St(e,t,r,n,o){return Wr(this,void 0,void 0,function*(){return ti(e,"POST",t,n,o,r)})}function nc(e,t,r,n,o){return Wr(this,void 0,void 0,function*(){return ti(e,"PUT",t,n,o,r)})}function L1(e,t,r,n){return Wr(this,void 0,void 0,function*(){return ti(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function hg(e,t,r,n,o){return Wr(this,void 0,void 0,function*(){return ti(e,"DELETE",t,n,o,r)})}var Ie=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const N1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},sf={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class z1{constructor(t,r={},n,o){this.url=t,this.headers=r,this.bucketId=n,this.fetch=fg(o)}uploadOrUpdate(t,r,n,o){return Ie(this,void 0,void 0,function*(){try{let i;const s=Object.assign(Object.assign({},sf),o);let a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(s.upsert)});const l=s.metadata;typeof Blob<"u"&&n instanceof Blob?(i=new FormData,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",n)):typeof FormData<"u"&&n instanceof FormData?(i=n,i.append("cacheControl",s.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=n,a["cache-control"]=`max-age=${s.cacheControl}`,a["content-type"]=s.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(a=Object.assign(Object.assign({},a),o.headers));const c=this._removeEmptyFolders(r),u=this._getFinalPath(c),f=yield(t=="PUT"?nc:St)(this.fetch,`${this.url}/object/${u}`,i,Object.assign({headers:a},s!=null&&s.duplex?{duplex:s.duplex}:{}));return{data:{path:c,id:f.Id,fullPath:f.Key},error:null}}catch(i){if(me(i))return{data:null,error:i};throw i}})}upload(t,r,n){return Ie(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,o){return Ie(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(t),s=this._getFinalPath(i),a=new URL(this.url+`/object/upload/sign/${s}`);a.searchParams.set("token",r);try{let l;const c=Object.assign({upsert:sf.upsert},o),u=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",c.cacheControl)):(l=n,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType);const f=yield nc(this.fetch,a.toString(),l,{headers:u});return{data:{path:i,fullPath:f.Key},error:null}}catch(l){if(me(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,r){return Ie(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const o=Object.assign({},this.headers);r!=null&&r.upsert&&(o["x-upsert"]="true");const i=yield St(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:o}),s=new URL(this.url+i.url),a=s.searchParams.get("token");if(!a)throw new Su("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:a},error:null}}catch(n){if(me(n))return{data:null,error:n};throw n}})}update(t,r,n){return Ie(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return Ie(this,void 0,void 0,function*(){try{return{data:yield St(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(me(o))return{data:null,error:o};throw o}})}copy(t,r,n){return Ie(this,void 0,void 0,function*(){try{return{data:{path:(yield St(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(me(o))return{data:null,error:o};throw o}})}createSignedUrl(t,r,n){return Ie(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),i=yield St(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${s}`)},{data:i,error:null}}catch(o){if(me(o))return{data:null,error:o};throw o}})}createSignedUrls(t,r,n){return Ie(this,void 0,void 0,function*(){try{const o=yield St(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),i=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:o.map(s=>Object.assign(Object.assign({},s),{signedUrl:s.signedURL?encodeURI(`${this.url}${s.signedURL}${i}`):null})),error:null}}catch(o){if(me(o))return{data:null,error:o};throw o}})}download(t,r){return Ie(this,void 0,void 0,function*(){const o=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),s=i?`?${i}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield Es(this.fetch,`${this.url}/${o}/${a}${s}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(me(a))return{data:null,error:a};throw a}})}info(t){return Ie(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield Es(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:rc(n),error:null}}catch(n){if(me(n))return{data:null,error:n};throw n}})}exists(t){return Ie(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield L1(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(me(n)&&n instanceof tc){const o=n.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),o=[],i=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";i!==""&&o.push(i);const a=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});l!==""&&o.push(l);let c=o.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${c}`)}}}remove(t){return Ie(this,void 0,void 0,function*(){try{return{data:yield hg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}list(t,r,n){return Ie(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},N1),r),{prefix:t||""});return{data:yield St(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},n),error:null}}catch(o){if(me(o))return{data:null,error:o};throw o}})}listV2(t,r){return Ie(this,void 0,void 0,function*(){try{const n=Object.assign({},t);return{data:yield St(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(me(n))return{data:null,error:n};throw n}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const U1="2.11.0",D1={"X-Client-Info":`storage-js/${U1}`};var Jr=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class F1{constructor(t,r={},n,o){const i=new URL(t);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href,this.headers=Object.assign(Object.assign({},D1),r),this.fetch=fg(n)}listBuckets(){return Jr(this,void 0,void 0,function*(){try{return{data:yield Es(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(me(t))return{data:null,error:t};throw t}})}getBucket(t){return Jr(this,void 0,void 0,function*(){try{return{data:yield Es(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Jr(this,void 0,void 0,function*(){try{return{data:yield St(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(me(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Jr(this,void 0,void 0,function*(){try{return{data:yield nc(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(me(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Jr(this,void 0,void 0,function*(){try{return{data:yield St(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Jr(this,void 0,void 0,function*(){try{return{data:yield hg(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}}class M1 extends F1{constructor(t,r={},n,o){super(t,r,n,o)}from(t){return new z1(this.url,this.headers,t,this.fetch)}}const B1="2.55.0";let fo="";typeof Deno<"u"?fo="deno":typeof document<"u"?fo="web":typeof navigator<"u"&&navigator.product==="ReactNative"?fo="react-native":fo="node";const q1={"X-Client-Info":`supabase-js-${fo}/${B1}`},W1={headers:q1},H1={schema:"public"},V1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},G1={};var K1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const J1=e=>{let t;return e?t=e:typeof fetch>"u"?t=Xm:t=fetch,(...r)=>t(...r)},Q1=()=>typeof Headers>"u"?Zm:Headers,Y1=(e,t,r)=>{const n=J1(r),o=Q1();return(i,s)=>K1(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let c=new o(s==null?void 0:s.headers);return c.has("apikey")||c.set("apikey",e),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(i,Object.assign(Object.assign({},s),{headers:c}))})};var X1=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};function Z1(e){return e.endsWith("/")?e:e+"/"}function eb(e,t){var r,n;const{db:o,auth:i,realtime:s,global:a}=e,{db:l,auth:c,realtime:u,global:f}=t,h={db:Object.assign(Object.assign({},l),o),auth:Object.assign(Object.assign({},c),i),realtime:Object.assign(Object.assign({},u),s),storage:{},global:Object.assign(Object.assign(Object.assign({},f),a),{headers:Object.assign(Object.assign({},(r=f==null?void 0:f.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>X1(this,void 0,void 0,function*(){return""})};return e.accessToken?h.accessToken=e.accessToken:delete h.accessToken,h}const pg="2.71.1",en=30*1e3,oc=3,za=oc*en,tb="http://localhost:9999",rb="supabase.auth.token",nb={"X-Client-Info":`gotrue-js/${pg}`},ic="X-Supabase-Api-Version",mg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},ob=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,ib=10*60*1e3;class Eu extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function D(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class sb extends Eu{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function ab(e){return D(e)&&e.name==="AuthApiError"}class gg extends Eu{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class kr extends Eu{constructor(t,r,n,o){super(t,n,o),this.name=r,this.status=n}}class Zt extends kr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function lb(e){return D(e)&&e.name==="AuthSessionMissingError"}class Ei extends kr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class _i extends kr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class ji extends kr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function cb(e){return D(e)&&e.name==="AuthImplicitGrantRedirectError"}class af extends kr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class sc extends kr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function Ua(e){return D(e)&&e.name==="AuthRetryableFetchError"}class lf extends kr{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class ac extends kr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const _s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),cf=` 	
\r=`.split(""),ub=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<cf.length;t+=1)e[cf[t].charCodeAt(0)]=-2;for(let t=0;t<_s.length;t+=1)e[_s[t].charCodeAt(0)]=t;return e})();function uf(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(_s[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(_s[n]),t.queuedBits-=6}}function vg(e,t,r){const n=ub[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function df(e){const t=[],r=s=>{t.push(String.fromCodePoint(s))},n={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},i=s=>{hb(s,n,r)};for(let s=0;s<e.length;s+=1)vg(e.charCodeAt(s),o,i);return t.join("")}function db(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function fb(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const o=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}db(n,t)}}function hb(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function pb(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};for(let o=0;o<e.length;o+=1)vg(e.charCodeAt(o),r,n);return new Uint8Array(t)}function mb(e){const t=[];return fb(e,r=>t.push(r)),new Uint8Array(t)}function gb(e){const t=[],r={queue:0,queuedBits:0},n=o=>{t.push(o)};return e.forEach(o=>uf(o,r,n)),uf(null,r,n),t.join("")}function vb(e){return Math.round(Date.now()/1e3)+e}function yb(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const ct=()=>typeof window<"u"&&typeof document<"u",Er={tested:!1,writable:!1},yg=()=>{if(!ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Er.tested)return Er.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Er.tested=!0,Er.writable=!0}catch{Er.tested=!0,Er.writable=!1}return Er.writable};function wb(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,i)=>{t[i]=o})}catch{}return r.searchParams.forEach((n,o)=>{t[o]=n}),t}const wg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>Dn(()=>Promise.resolve().then(()=>Hn),void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},xb=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",tn=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},_r=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Gt=async(e,t)=>{await e.removeItem(t)};class ra{constructor(){this.promise=new ra.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}ra.promiseConstructor=Promise;function Da(e){const t=e.split(".");if(t.length!==3)throw new ac("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!ob.test(t[n]))throw new ac("JWT not in base64url format");return{header:JSON.parse(df(t[0])),payload:JSON.parse(df(t[1])),signature:pb(t[2]),raw:{header:t[0],payload:t[1]}}}async function bb(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function kb(e,t){return new Promise((n,o)=>{(async()=>{for(let i=0;i<1/0;i++)try{const s=await e(i);if(!t(i,null,s)){n(s);return}}catch(s){if(!t(i,s)){o(s);return}}})()})}function Sb(e){return("0"+e.toString(16)).substr(-2)}function Eb(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let o="";for(let i=0;i<56;i++)o+=r.charAt(Math.floor(Math.random()*n));return o}return crypto.getRandomValues(t),Array.from(t,Sb).join("")}async function _b(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(n);return Array.from(o).map(i=>String.fromCharCode(i)).join("")}async function jb(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await _b(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Qr(e,t,r=!1){const n=Eb();let o=n;r&&(o+="/PASSWORD_RECOVERY"),await tn(e,`${t}-code-verifier`,o);const i=await jb(n);return[i,n===i?"plain":"s256"]}const Cb=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Tb(e){const t=e.headers.get(ic);if(!t||!t.match(Cb))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function $b(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function Pb(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Rb=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Yr(e){if(!Rb.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Fa(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function ff(e){return JSON.parse(JSON.stringify(e))}var Ab=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Tr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Ib=[502,503,504];async function hf(e){var t;if(!xb(e))throw new sc(Tr(e),0);if(Ib.includes(e.status))throw new sc(Tr(e),e.status);let r;try{r=await e.json()}catch(i){throw new gg(Tr(i),i)}let n;const o=Tb(e);if(o&&o.getTime()>=mg["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new lf(Tr(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Zt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,s)=>i&&typeof s=="string",!0))throw new lf(Tr(r),e.status,r.weak_password.reasons);throw new sb(Tr(r),e.status||500,n)}const Ob=(e,t,r,n)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(n),Object.assign(Object.assign({},o),r))};async function q(e,t,r,n){var o;const i=Object.assign({},n==null?void 0:n.headers);i[ic]||(i[ic]=mg["2024-01-01"].name),n!=null&&n.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const s=(o=n==null?void 0:n.query)!==null&&o!==void 0?o:{};n!=null&&n.redirectTo&&(s.redirect_to=n.redirectTo);const a=Object.keys(s).length?"?"+new URLSearchParams(s).toString():"",l=await Lb(e,t,r+a,{headers:i,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function Lb(e,t,r,n,o,i){const s=Ob(t,n,o,i);let a;try{a=await e(r,Object.assign({},s))}catch(l){throw console.error(l),new sc(Tr(l),0)}if(a.ok||await hf(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await hf(l)}}function Pt(e){var t;let r=null;Db(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=vb(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function pf(e){const t=Pt(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function or(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function Nb(e){return{data:e,error:null}}function zb(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i}=e,s=Ab(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:r,hashed_token:n,redirect_to:o,verification_type:i},l=Object.assign({},s);return{data:{properties:a,user:l},error:null}}function Ub(e){return e}function Db(e){return e.access_token&&e.refresh_token&&e.expires_in}const Ma=["global","local","others"];var Fb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};class Mb{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=wg(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=Ma[0]){if(Ma.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ma.join(", ")}`);try{return await q(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(D(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await q(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:or})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=Fb(t,["options"]),o=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(o.new_email=n==null?void 0:n.newEmail,delete o.newEmail),await q(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:zb,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(D(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await q(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:or})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,o,i,s,a,l;try{const c={nextPage:null,lastPage:0,total:0},u=await q(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&i!==void 0?i:""},xform:Ub});if(u.error)throw u.error;const f=await u.json(),h=(s=u.headers.get("x-total-count"))!==null&&s!==void 0?s:0,v=(l=(a=u.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return v.length>0&&(v.forEach(y=>{const x=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(y.split(";")[1].split("=")[1]);c[`${S}Page`]=x}),c.total=parseInt(h)),{data:Object.assign(Object.assign({},f),c),error:null}}catch(c){if(D(c))return{data:{users:[]},error:c};throw c}}async getUserById(t){Yr(t);try{return await q(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:or})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){Yr(t);try{return await q(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:or})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){Yr(t);try{return await q(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:or})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){Yr(t.userId);try{const{data:r,error:n}=await q(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:n}}catch(r){if(D(r))return{data:null,error:r};throw r}}async _deleteFactor(t){Yr(t.userId),Yr(t.id);try{return{data:await q(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(D(r))return{data:null,error:r};throw r}}}function mf(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function Bb(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Xr={debug:!!(globalThis&&yg()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class xg extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class qb extends xg{}async function Wb(e,t,r){Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async o=>{if(o){Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,o.name);try{return await r()}finally{Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,o.name)}}else{if(t===0)throw Xr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new qb(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Xr.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}Bb();const Hb={url:tb,storageKey:rb,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:nb,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function gf(e,t,r){return await r()}const Zr={};class Ho{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ho.nextInstanceID,Ho.nextInstanceID+=1,this.instanceID>0&&ct()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},Hb),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new Mb({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=wg(o.fetch),this.lock=o.lock||gf,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:ct()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=Wb:this.lock=gf,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:yg()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=mf(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=mf(this.memoryStorage)),ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=Zr[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){Zr[this.storageKey]=Object.assign(Object.assign({},Zr[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=Zr[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){Zr[this.storageKey]=Object.assign(Object.assign({},Zr[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${pg}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=wb(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),ct()&&this.detectSessionInUrl&&n!=="none"){const{data:o,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),cb(i)){const l=(t=i.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:s,redirectType:a}=o;return this._debug("#_initialize()","detected session in URL",s,"redirect type",a),await this._saveSession(s),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return D(r)?{error:r}:{error:new gg("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,o;try{const i=await q(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:Pt}),{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if(D(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(t){var r,n,o;try{let i;if("email"in t){const{email:u,password:f,options:h}=t;let v=null,y=null;this.flowType==="pkce"&&([v,y]=await Qr(this.storage,this.storageKey)),i=await q(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:u,password:f,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:v,code_challenge_method:y},xform:Pt})}else if("phone"in t){const{phone:u,password:f,options:h}=t;i=await q(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:f,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},channel:(o=h==null?void 0:h.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Pt})}else throw new _i("You must provide either an email or phone number and a password");const{data:s,error:a}=i;if(a||!s)return{data:{user:null,session:null},error:a};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if(D(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(t){try{let r;if("email"in t){const{email:i,password:s,options:a}=t;r=await q(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:pf})}else if("phone"in t){const{phone:i,password:s,options:a}=t;r=await q(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:pf})}else throw new _i("You must provide either an email or phone number and a password");const{data:n,error:o}=r;return o?{data:{user:null,session:null},error:o}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new Ei}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:o})}catch(r){if(D(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,o,i;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(i=t.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,o,i,s,a,l,c,u,f,h,v;let y,x;if("message"in t)y=t.message,x=t.signature;else{const{chain:S,wallet:m,statement:g,options:p}=t;let k;if(ct())if(typeof m=="object")k=m;else{const j=window;if("solana"in j&&typeof j.solana=="object"&&("signIn"in j.solana&&typeof j.solana.signIn=="function"||"signMessage"in j.solana&&typeof j.solana.signMessage=="function"))k=j.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(p!=null&&p.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=m}const _=new URL((r=p==null?void 0:p.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in k&&k.signIn){const j=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},p==null?void 0:p.signInWithSolana),{version:"1",domain:_.host,uri:_.href}),g?{statement:g}:null));let E;if(Array.isArray(j)&&j[0]&&typeof j[0]=="object")E=j[0];else if(j&&typeof j=="object"&&"signedMessage"in j&&"signature"in j)E=j;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in E&&"signature"in E&&(typeof E.signedMessage=="string"||E.signedMessage instanceof Uint8Array)&&E.signature instanceof Uint8Array)y=typeof E.signedMessage=="string"?E.signedMessage:new TextDecoder().decode(E.signedMessage),x=E.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${_.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),...g?["",g,""]:[""],"Version: 1",`URI: ${_.href}`,`Issued At: ${(o=(n=p==null?void 0:p.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((i=p==null?void 0:p.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${p.signInWithSolana.notBefore}`]:[],...!((s=p==null?void 0:p.signInWithSolana)===null||s===void 0)&&s.expirationTime?[`Expiration Time: ${p.signInWithSolana.expirationTime}`]:[],...!((a=p==null?void 0:p.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${p.signInWithSolana.chainId}`]:[],...!((l=p==null?void 0:p.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${p.signInWithSolana.nonce}`]:[],...!((c=p==null?void 0:p.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${p.signInWithSolana.requestId}`]:[],...!((f=(u=p==null?void 0:p.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||f===void 0)&&f.length?["Resources",...p.signInWithSolana.resources.map(E=>`- ${E}`)]:[]].join(`
`);const j=await k.signMessage(new TextEncoder().encode(y),"utf8");if(!j||!(j instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");x=j}}try{const{data:S,error:m}=await q(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:gb(x)},!((h=t.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(v=t.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:Pt});if(m)throw m;return!S||!S.session||!S.user?{data:{user:null,session:null},error:new Ei}:(S.session&&(await this._saveSession(S.session),await this._notifyAllSubscribers("SIGNED_IN",S.session)),{data:Object.assign({},S),error:m})}catch(S){if(D(S))return{data:{user:null,session:null},error:S};throw S}}async _exchangeCodeForSession(t){const r=await _r(this.storage,`${this.storageKey}-code-verifier`),[n,o]=(r??"").split("/");try{const{data:i,error:s}=await q(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:Pt});if(await Gt(this.storage,`${this.storageKey}-code-verifier`),s)throw s;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new Ei}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:o??null}),error:s})}catch(i){if(D(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(t){try{const{options:r,provider:n,token:o,access_token:i,nonce:s}=t,a=await q(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:o,access_token:i,nonce:s,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:Pt}),{data:l,error:c}=a;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Ei}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(r){if(D(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,o,i,s;try{if("email"in t){const{email:a,options:l}=t;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await Qr(this.storage,this.storageKey));const{error:f}=await q(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:f}}if("phone"in t){const{phone:a,options:l}=t,{data:c,error:u}=await q(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(s=l==null?void 0:l.channel)!==null&&s!==void 0?s:"sms"}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:u}}throw new _i("You must provide either an email or phone number.")}catch(a){if(D(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var r,n;try{let o,i;"options"in t&&(o=(r=t.options)===null||r===void 0?void 0:r.redirectTo,i=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:s,error:a}=await q(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:i}}),redirectTo:o,xform:Pt});if(a)throw a;if(!s)throw new Error("An error occurred on token verification.");const l=s.session,c=s.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(o){if(D(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var r,n,o;try{let i=null,s=null;return this.flowType==="pkce"&&([i,s]=await Qr(this.storage,this.storageKey)),await q(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:s}),headers:this.headers,xform:Nb})}catch(i){if(D(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Zt;const{error:o}=await q(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(D(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:o,options:i}=t,{error:s}=await q(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:s}}else if("phone"in t){const{phone:n,type:o,options:i}=t,{data:s,error:a}=await q(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:o,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:s==null?void 0:s.message_id},error:a}}throw new _i("You must provide either an email or phone number and a type")}catch(r){if(D(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await _r(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<za:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const s=await _r(this.userStorage,this.storageKey+"-user");s!=null&&s.user?t.user=s.user:t.user=Fa()}if(this.storage.isServer&&t.user){let s=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,c,u)=>(!s&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),s=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,u))})}return{data:{session:t},error:null}}const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{session:null},error:i}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await q(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:or}):await this._useSession(async r=>{var n,o,i;const{data:s,error:a}=r;if(a)throw a;return!(!((n=s.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Zt}:await q(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(o=s.session)===null||o===void 0?void 0:o.access_token)!==null&&i!==void 0?i:void 0,xform:or})})}catch(r){if(D(r))return lb(r)&&(await this._removeSession(),await Gt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:o,error:i}=n;if(i)throw i;if(!o.session)throw new Zt;const s=o.session;let a=null,l=null;this.flowType==="pkce"&&t.email!=null&&([a,l]=await Qr(this.storage,this.storageKey));const{data:c,error:u}=await q(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:s.access_token,xform:or});if(u)throw u;return s.user=c.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),{data:{user:s.user},error:null}})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Zt;const r=Date.now()/1e3;let n=r,o=!0,i=null;const{payload:s}=Da(t.access_token);if(s.exp&&(n=s.exp,o=n<=r),o){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};i=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;i={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(r){if(D(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:s,error:a}=r;if(a)throw a;t=(n=s.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Zt;const{session:o,error:i}=await this._callRefreshToken(t.refresh_token);return i?{data:{user:null,session:null},error:i}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(D(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!ct())throw new ji("No browser detected.");if(t.error||t.error_description||t.error_code)throw new ji(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new af("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new ji("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new af("No code detected.");const{data:g,error:p}=await this._exchangeCodeForSession(t.code);if(p)throw p;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:g.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:o,access_token:i,refresh_token:s,expires_in:a,expires_at:l,token_type:c}=t;if(!i||!a||!s||!c)throw new ji("No session defined in URL");const u=Math.round(Date.now()/1e3),f=parseInt(a);let h=u+f;l&&(h=parseInt(l));const v=h-u;v*1e3<=en&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${f}s`);const y=h-f;u-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,h,u):u-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",y,h,u);const{data:x,error:S}=await this._getUser(i);if(S)throw S;const m={provider_token:n,provider_refresh_token:o,access_token:i,expires_in:f,expires_at:h,refresh_token:s,token_type:c,user:x.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:m,redirectType:t.type},error:null}}catch(n){if(D(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await _r(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{error:i};const s=(n=o.session)===null||n===void 0?void 0:n.access_token;if(s){const{error:a}=await this.admin.signOut(s,t);if(a&&!(ab(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Gt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=yb(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,o;try{const{data:{session:i},error:s}=r;if(s)throw s;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",t,"session",i)}catch(i){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",i),console.error(i)}})}async resetPasswordForEmail(t,r={}){let n=null,o=null;this.flowType==="pkce"&&([n,o]=await Qr(this.storage,this.storageKey,!0));try{return await q(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(D(i))return{data:null,error:i};throw i}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(D(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:o}=await this._useSession(async i=>{var s,a,l,c,u;const{data:f,error:h}=i;if(h)throw h;const v=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(s=t.options)===null||s===void 0?void 0:s.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await q(this.fetch,"GET",v,{headers:this.headers,jwt:(u=(c=f.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(o)throw o;return ct()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(D(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)throw s;return await q(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(D(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await kb(async o=>(o>0&&await bb(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await q(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Pt})),(o,i)=>{const s=200*Math.pow(2,o);return i&&Ua(i)&&Date.now()+s-n<en})}catch(n){if(this._debug(r,"error",n),D(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),ct()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const o=await _r(this.storage,this.storageKey);if(o&&this.userStorage){let s=await _r(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!s&&(s={user:o.user},await tn(this.userStorage,this.storageKey+"-user",s)),o.user=(t=s==null?void 0:s.user)!==null&&t!==void 0?t:Fa()}else if(o&&!o.user&&!o.user){const s=await _r(this.storage,this.storageKey+"-user");s&&(s!=null&&s.user)?(o.user=s.user,await Gt(this.storage,this.storageKey+"-user"),await tn(this.storage,this.storageKey,o)):o.user=Fa()}if(this._debug(n,"session from storage",o),!this._isValidSession(o)){this._debug(n,"session is not valid"),o!==null&&await this._removeSession();return}const i=((r=o.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<za;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${za}s`),i){if(this.autoRefreshToken&&o.refresh_token){const{error:s}=await this._callRefreshToken(o.refresh_token);s&&(console.error(s),Ua(s)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",s),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:s,error:a}=await this._getUser(o.access_token);!a&&(s!=null&&s.user)?(o.user=s.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(s){console.error("Error getting user data:",s),this._debug(n,"error getting user data, skipping SIGNED_IN notification",s)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(n,"error",o),console.error(o);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Zt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new ra;const{data:i,error:s}=await this._refreshAccessToken(t);if(s)throw s;if(!i.session)throw new Zt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const a={session:i.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(i){if(this._debug(o,"error",i),D(i)){const s={session:null,error:i};return Ua(i)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(s),s}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,r,n=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const i=[],s=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,r)}catch(l){i.push(l)}});if(await Promise.all(s),i.length>0){for(let a=0;a<i.length;a+=1)console.error(i[a]);throw i[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await tn(this.userStorage,this.storageKey+"-user",{user:r.user});const o=Object.assign({},r);delete o.user;const i=ff(o);await tn(this.storage,this.storageKey,i)}else{const o=ff(r);await tn(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await Gt(this.storage,this.storageKey),await Gt(this.storage,this.storageKey+"-code-verifier"),await Gt(this.storage,this.storageKey+"-user"),this.userStorage&&await Gt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&ct()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),en);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((n.expires_at*1e3-t)/en);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${en}ms, refresh threshold is ${oc} ticks`),o<=oc&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof xg)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ct()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const o=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&o.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&o.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,s]=await Qr(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(s)}`});o.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);o.push(i.toString())}return n!=null&&n.skipBrowserRedirect&&o.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await q(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(D(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,o;const{data:i,error:s}=r;if(s)return{data:null,error:s};const a=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:c}=await q(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return c?{data:null,error:c}:(t.factorType==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(r){if(D(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;if(i)return{data:null,error:i};const{data:s,error:a}=await q(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:a})})}catch(r){if(D(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:o,error:i}=r;return i?{data:null,error:i}:await q(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=o==null?void 0:o.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(D(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],o=n.filter(s=>s.factor_type==="totp"&&s.status==="verified"),i=n.filter(s=>s.factor_type==="phone"&&s.status==="verified");return{data:{all:n,totp:o,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:o},error:i}=t;if(i)return{data:null,error:i};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=Da(o.access_token);let a=null;s.aal&&(a=s.aal);let l=a;((n=(r=o.user.factors)===null||r===void 0?void 0:r.filter(f=>f.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const u=s.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:u},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(a=>a.kid===t);if(n)return n;const o=Date.now();if(n=this.jwks.keys.find(a=>a.kid===t),n&&this.jwks_cached_at+ib>o)return n;const{data:i,error:s}=await q(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(s)throw s;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=o,n=i.keys.find(a=>a.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:v,error:y}=await this.getSession();if(y||!v.session)return{data:null,error:y};n=v.session.access_token}const{header:o,payload:i,signature:s,raw:{header:a,payload:l}}=Da(n);r!=null&&r.allowExpired||$b(i.exp);const c=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!c){const{error:v}=await this.getUser(n);if(v)throw v;return{data:{claims:i,header:o,signature:s},error:null}}const u=Pb(o.alg),f=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,f,s,mb(`${a}.${l}`)))throw new ac("Invalid JWT signature");return{data:{claims:i,header:o,signature:s},error:null}}catch(n){if(D(n))return{data:null,error:n};throw n}}}Ho.nextInstanceID=0;const Vb=Ho;class Gb extends Vb{constructor(t){super(t)}}var Kb=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(f){s(f)}}function l(u){try{c(n.throw(u))}catch(f){s(f)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};class Jb{constructor(t,r,n){var o,i,s;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const a=Z1(t),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const c=`sb-${l.hostname.split(".")[0]}-auth-token`,u={db:H1,realtime:G1,auth:Object.assign(Object.assign({},V1),{storageKey:c}),global:W1},f=eb(n??{},u);this.storageKey=(o=f.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(i=f.global.headers)!==null&&i!==void 0?i:{},f.accessToken?(this.accessToken=f.accessToken,this.auth=new Proxy({},{get:(h,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((s=f.auth)!==null&&s!==void 0?s:{},this.headers,f.global.fetch),this.fetch=Y1(r,this._getAccessToken.bind(this),f.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},f.realtime)),this.rest=new d1(new URL("rest/v1",l).href,{headers:this.headers,schema:f.db.schema,fetch:this.fetch}),this.storage=new M1(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),f.accessToken||this._listenForAuthEvents()}get functions(){return new Mx(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return Kb(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,storageKey:i,flowType:s,lock:a,debug:l},c,u){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Gb({url:this.authUrl.href,headers:Object.assign(Object.assign({},f),c),storageKey:i,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:o,flowType:s,lock:a,debug:l,fetch:u,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new T1(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const Qb=(e,t,r)=>new Jb(e,t,r);function Yb(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}Yb()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const P=Qb("https://mdmknxkztpimoedhdjci.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbWtueGt6dHBpbW9lZGhkamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyOTM4NjcsImV4cCI6MjA3MDg2OTg2N30.XSNPCxPyfau3cRy6OLkzEFQuW_GrbXi39sPEr0l3q3A"),bg=w.createContext(),Xb=({children:e})=>{const[t,r]=w.useState(!0),[n,o]=w.useState(!1),[i,s]=w.useState(null),[a,l]=w.useState(null),[c,u]=w.useState(null),f=async(p,k)=>{u(null);try{o(!0);const{data:_,error:j}=await P.from("usuarios").select("idUsuario, nombre, usuario, correo, idRol").eq("usuario",p).eq("contraseña",k).single();if(j)throw j.code==="PGRST116"?new Error("Usuario o contraseña incorrectos"):new Error(`Error de base de datos: ${j.message}`);if(!_)throw new Error("Usuario o contraseña incorrectos");const E={id:_.idUsuario,idUsuario:_.idUsuario,nombre:_.nombre,usuario:_.usuario,correo:_.correo,idRol:_.idRol,rol:"Administrador",type:"admin"};return s(E),l(null),localStorage.setItem("user",JSON.stringify(E)),localStorage.removeItem("employeeData"),{success:!0,user:E}}catch(_){return u(_.message),{success:!1,error:_.message}}finally{o(!1)}},h=w.useCallback(p=>{const k={id:p.idEmpleado,idEmpleado:p.idEmpleado,codigoEmpleado:p.codigoEmpleado,empleado:p.empleado,correo:p.correo||null,idPlanta:p.idPlanta,planta:p.planta,idEsquemaPago:p.idEsquemaPago||null,type:"employee"};return l(k),s(null),localStorage.setItem("employeeData",JSON.stringify(k)),localStorage.removeItem("user"),{success:!0,employee:k}},[]),v=w.useCallback(()=>{s(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("employeeData")},[]),y=w.useCallback(async p=>{try{o(!0);const k={id:p.idUsuario,idUsuario:p.idUsuario,nombre:p.nombre,usuario:p.usuario||p.correo,correo:p.correo,idRol:p.idRol,rol:"Administrador",type:"admin"};return s(k),l(null),localStorage.setItem("user",JSON.stringify(k)),localStorage.removeItem("employeeData"),{success:!0,user:k}}catch(k){throw console.error("Error en auto-login:",k),u("Error en autenticación automática"),k}finally{o(!1)}},[]),x=()=>{try{const p=localStorage.getItem("user"),k=localStorage.getItem("employeeData");if(p){const _=JSON.parse(p);return s(_),l(null),_}if(k){const _=JSON.parse(k);return l(_),s(null),_}}catch(p){console.error("Error al obtener usuario guardado:",p),localStorage.removeItem("user"),localStorage.removeItem("employeeData")}return null},S=w.useCallback(p=>{if(a){const k={...a,...p};return l(k),localStorage.setItem("employeeData",JSON.stringify(k)),k}return null},[a]),m=w.useCallback(()=>{u(null)},[]);w.useEffect(()=>{x(),r(!1)},[]);const g={user:i,employeeData:a,loading:n,initializing:t,authError:c,adminLogin:f,adminAutoLogin:y,employeeLogin:h,logout:v,getCurrentUser:x,updateEmployeeData:S,clearAuthError:m};return d.jsx(bg.Provider,{value:g,children:e})},Gn=()=>{const e=w.useContext(bg);if(!e)throw new Error("useAppAuth debe usarse dentro de AuthProvider");return e},z={container:`
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
  `},lc={nuevo:{title:"Nuevo Ticket Asignado",action:"asignado",actionText:"Se te ha asignado un nuevo ticket para atención:"},delegado:{title:"Ticket Delegado",action:"delegado",actionText:"Se te ha delegado un ticket para atención:"},reasignado:{title:"Ticket Reasignado",action:"reasignado",actionText:"Se te ha reasignado un ticket para atención:"},respondido:{title:"Tu Ticket Ha Sido Respondido",action:"respondido",actionText:"Tu solicitud ha sido atendida. Puedes ver la respuesta y calificar nuestro servicio:"}},kg=({ticket:e,usuario:t,directLink:r,fechaCreacion:n="Fecha no disponible",tipo:o="nuevo"})=>{var s,a,l,c,u;const i=lc[o]||lc.nuevo;return`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${i.title}</title>
    </head>
    <body style="${z.container}">
      
      <div style="${z.header}">
        <h1 style="${z.title}">${i.title}</h1>
        <p style="${z.subtitle}">Sistema de Atención EZI</p>
      </div>

      <div style="${z.content}">
        
        <div style="${z.card}">
          <h2 style="${z.greeting}">Hola ${t.nombre},</h2>
          <p style="font-size: 16px; margin-bottom: 20px;">
            ${i.actionText}
          </p>

          <div style="${z.infoSection}">
            <table style="${z.infoTable}">
              <tr>
                <td style="${z.infoLabel}">Ticket:</td>
                <td style="${z.infoValue}">#${e.idTicket}</td>
              </tr>
              <tr>
                <td style="${z.infoLabel}">Empleado:</td>
                <td style="${z.infoValue}">${((s=e.empleados)==null?void 0:s.nombre)||"No especificado"}</td>
              </tr>
              <tr>
                <td style="${z.infoLabel}">Planta:</td>
                <td style="${z.infoValue}">${((l=(a=e.empleados)==null?void 0:a.plantas)==null?void 0:l.planta)||"No especificada"}</td>
              </tr>
              <tr>
                <td style="${z.infoLabel}">Tipo:</td>
                <td style="${z.infoValue}">${((c=e.tiposSolicitud)==null?void 0:c.tipoSolicitud)||"No especificado"}</td>
              </tr>
              <tr>
                <td style="${z.infoLabel}">Prioridad:</td>
                <td style="${z.infoValue}">${((u=e.prioridades)==null?void 0:u.prioridad)||"Normal"}</td>
              </tr>
              <tr>
                <td style="${z.infoLabel}">Fecha:</td>
                <td style="${z.infoValue}">${n}</td>
              </tr>
            </table>
          </div>

          <div style="${z.descriptionSection}">
            <p style="${z.descriptionTitle}">Descripción:</p>
            <p style="${z.descriptionText}">
              "${e.descripcion}"
            </p>
          </div>

          <div style="${z.buttonSection}">
            <a href="${r}" 
               style="${z.button}"
               target="_blank">
              Ver y Responder Ticket
            </a>
          </div>

          <div style="${z.noteSection}">
            <p style="${z.noteText}">
              <strong>Acceso directo:</strong> Este enlace te permite ver y responder el ticket sin necesidad de iniciar sesión. 
              Válido por 7 días.
            </p>
          </div>

        </div>

        <div style="${z.footer}">
          <p style="margin: 0;">
            Sistema de Tickets - EZI<br>
            Este email fue generado automáticamente por el sistema de gestión de tickets.
          </p>
        </div>

      </div>
    </body>
    </html>
  `},Zb=({ticket:e,empleado:t,atencion:r,fechaCreacion:n,fechaRespuesta:o,adminNombre:i,directLink:s})=>{var l;const a=lc.respondido;return`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${a.title}</title>
    </head>
    <body style="${z.container}">
      
      <div style="${z.header}">
        <h1 style="${z.title}">${a.title}</h1>
        <p style="${z.subtitle}">Sistema de Atención EZI</p>
      </div>

      <div style="${z.content}">
        
        <div style="${z.card}">
          <h2 style="${z.greeting}">Hola ${t.nombre},</h2>
          <p style="font-size: 16px; margin-bottom: 20px;">
            ${a.actionText}
          </p>

          <div style="${z.infoSection}">
            <table style="${z.infoTable}">
              <tr>
                <td style="${z.infoLabel}">Ticket:</td>
                <td style="${z.infoValue}">#${e.idTicket}</td>
              </tr>
              <tr>
                <td style="${z.infoLabel}">Fecha de creación:</td>
                <td style="${z.infoValue}">${n}</td>
              </tr>
              <tr>
                <td style="${z.infoLabel}">Prioridad:</td>
                <td style="${z.infoValue}">${((l=e.prioridades)==null?void 0:l.prioridad)||"Normal"}</td>
              </tr>
            </table>
          </div>

          <div style="${z.descriptionSection}">
            <p style="${z.descriptionTitle}">Tu solicitud original:</p>
            <p style="${z.descriptionText}">
              "${e.descripcion}"
            </p>
          </div>

          <div style="background: #f0f9ff; border: 1px solid #0284c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0; color: #0c4a6e; font-size: 18px;">📋 Respuesta del equipo:</h3>
            <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #0284c7;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">
                ${r.respuesta}
              </p>
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #bae6fd;">
              <p style="margin: 0; font-size: 14px; color: #0369a1;">
                <strong>Atendido por:</strong> ${i} <br>
                <strong>Fecha de respuesta:</strong> ${o}
              </p>
            </div>
          </div>

          <div style="${z.buttonSection}">
            <a href="${s}" 
               style="${z.button}"
               target="_blank">
              Ver Respuesta y Calificar Servicio
            </a>
          </div>

          <div style="${z.noteSection}">
            <p style="${z.noteText}">
              <strong>Califica nuestro servicio:</strong> Usa el enlace anterior para ver tu respuesta completa y calificar la atención recibida. 
              Tu opinión nos ayuda a mejorar. Enlace válido por 7 días.
            </p>
          </div>

        </div>

        <div style="${z.footer}">
          <p style="margin: 0;">
            Sistema de Tickets - EZI<br>
            Este email fue generado automáticamente por el sistema de gestión de tickets.
          </p>
        </div>

      </div>
    </body>
    </html>
  `},Sg=async(e,t=null,r=null)=>{try{if(!t&&!r)throw new Error("Debe proporcionar idUsuario o idEmpleado");const n=crypto.randomUUID(),o=new Date;o.setDate(o.getDate()+7);const i={token:n,idTicket:e,fecha_expiracion:o.toISOString(),bActivo:!0};r?i.idEmpleado=r:t&&(i.idUsuario=t);const{error:s}=await P.from("ticket_tokens").insert(i);if(s)throw s;return n}catch(n){throw console.error("Error generando token:",n),n}},ek=async e=>{try{const{data:t,error:r}=await P.from("ticket_tokens").select(`
        *,
        tickets (
          *,
          empleados (nombre, plantas (planta)),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad),
          estados (estado),
          atenciones (respuesta, calificacion, comentario, fechaAtencion, usuarios (nombre))
        ),
        usuarios (nombre, correo),
        empleados!idEmpleado (idEmpleado, nombre, correo)
      `).eq("token",e).eq("bActivo",!0).gt("fecha_expiracion",new Date().toISOString()).single();if(r||!t)throw new Error("Token inválido o expirado");return t}catch(t){throw console.error("Error validando token:",t),t}},tk=async e=>{try{const{error:t}=await P.from("ticket_tokens").update({bActivo:!1}).eq("token",e);if(t)throw t}catch(t){throw console.error("Error desactivando token:",t),t}},rk=async(e,t)=>{try{const r=await Sg(e.idTicket,t.idUsuario,null),o=`https://andresdramos.github.io/ventanilla/ticket/${r}`,{data:i,error:s}=await P.from("seguimientos").select("fecha").eq("idTicket",e.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();let a="Fecha no disponible";i&&!s&&(a=new Date(i.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}));const l=kg({ticket:e,usuario:t,directLink:o,fechaCreacion:a,tipo:"nuevo"}),f=await(await fetch("https://ventanilla-ezi.netlify.app/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({destinatario:t.correo,asunto:`Nuevo Ticket Asignado - #${e.idTicket}`,mensaje:l})})).json();if(!f.success)throw new Error(f.error||"Error enviando email");return{success:!0,token:r,directLink:o,emailResult:{success:!0,messageId:"internal-email-"+Date.now(),to:t.correo}}}catch(r){return console.error("Error enviando notificación de ticket nuevo:",r),{success:!1,error:r.message}}},nk=async(e,t,r)=>{var n;try{if(!t.correo)return console.warn("Empleado sin correo electrónico, no se envía notificación"),{success:!1,error:"Empleado sin correo electrónico registrado"};const o=await Sg(e.idTicket,null,t.idEmpleado),s=`https://andresdramos.github.io/ventanilla/respuesta/${o}`,{data:a,error:l}=await P.from("seguimientos").select("fecha").eq("idTicket",e.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();let c="Fecha no disponible";a&&!l&&(c=new Date(a.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}));const{data:u,error:f}=await P.from("atenciones").select(`
        respuesta,
        usuarios (nombre)
      `).eq("idTicket",e.idTicket).single();if(f||!u)throw new Error("No se pudo obtener la información de la respuesta");const{data:h,error:v}=await P.from("seguimientos").select("fecha").eq("idTicket",e.idTicket).eq("idEstado",3).order("fecha",{ascending:!1}).limit(1).single();let y="Fecha no disponible";h&&!v&&(y=new Date(h.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}));const x=Zb({ticket:e,empleado:t,atencion:u,fechaCreacion:c,fechaRespuesta:y,adminNombre:((n=u.usuarios)==null?void 0:n.nombre)||"Administrador",directLink:s}),g=await(await fetch("https://ventanilla-ezi.netlify.app/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({destinatario:t.correo,asunto:`Tu Ticket Ha Sido Respondido - #${e.idTicket}`,mensaje:x})})).json();if(!g.success)throw new Error(g.error||"Error enviando email");return{success:!0,token:o,directLink:s,emailResult:{success:!0,messageId:"response-email-"+Date.now(),to:t.correo}}}catch(o){return console.error("Error enviando notificación de respuesta:",o),{success:!1,error:o.message}}},Eg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("plantas").select("idPlanta, planta").order("planta");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching plantas:",a)}finally{n(!1)}})()},[]),{plantas:e,loading:r,error:o}},_g=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("esquemasPago").select("idEsquemaPago, esquemaPago").order("esquemaPago");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching esquemas de pago:",a)}finally{n(!1)}})()},[]),{esquemas:e,loading:r,error:o}},jg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("tiposSolicitud").select("idTipoSolicitud, tipoSolicitud").order("tipoSolicitud");if(l)throw l;t(a||[])}catch(a){i(a.message)}finally{n(!1)}})()},[]),{tipos:e,loading:r,error:o}},Cg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{n(!0);const{data:a,error:l}=await P.from("prioridades").select("idPrioridad, prioridad").order("idPrioridad");if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching prioridades:",a)}finally{n(!1)}})()},[]),{prioridades:e,loading:r,error:o}},ok=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null);return{createTicket:async i=>{try{t(!0),n(null);const{data:s}=await P.from("empleados").select("idPlanta").eq("idEmpleado",i.idEmpleado).single();if(!s)throw new Error("No se encontró información del empleado");const{data:a}=await P.from("asignaciones").select("idUsuario").eq("idPlanta",s.idPlanta).eq("idTipoSolicitud",i.idTipoSolicitud).single();if(!a)throw new Error("No se encontró usuario asignado para esta combinación de planta y tipo de solicitud");const{data:l,error:c}=await P.from("tickets").insert([{idEmpleado:i.idEmpleado,idTipoSolicitud:i.idTipoSolicitud,descripcion:i.descripcion,idPrioridad:i.idPrioridad}]).select().single();if(c)throw c;const{error:u}=await P.from("seguimientos").insert([{idTicket:l.idTicket,idUsuario:a.idUsuario,idEstado:1}]);if(u)throw u;try{const{data:f,error:h}=await P.from("tickets").select(`
            *,
            empleados (
              nombre,
              plantas (planta)
            ),
            tiposSolicitud (tipoSolicitud),
            prioridades (prioridad)
          `).eq("idTicket",l.idTicket).single(),{data:v,error:y}=await P.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",a.idUsuario).single();if(!h&&!y&&f&&v){const x=await rk(f,v);x.success?console.log("📨 Notificación enviada exitosamente"):console.error("❌ Error enviando notificación:",x.error)}else console.error("❌ Error obteniendo datos para notificación:",{ticketCompletoError:h,usuarioError:y,hasTicketCompleto:!!f,hasUsuarioAsignado:!!v})}catch(f){console.warn("⚠️ Error en sistema de notificaciones (ticket creado exitosamente):",f.message)}return{success:!0,ticket:l}}catch(s){return n(s.message),console.error("Error creating ticket:",s),{success:!1,error:s.message}}finally{t(!1)}},loading:e,error:r}},Tg=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null),o=w.useCallback(async c=>{t(!0),n(null);try{const{data:u,error:f}=await P.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          correo,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("codigoEmpleado",c).single();if(f){if(f.code==="PGRST116")return{success:!0,empleado:null};throw f}return{success:!0,empleado:u}}catch(u){return console.error("Error al buscar empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),i=w.useCallback(async(c,u,f,h,v=null)=>{t(!0),n(null);try{const{data:y,error:x}=await P.from("empleados").insert([{codigoEmpleado:c,nombre:u,idPlanta:f,idEsquemaPago:h,correo:v}]).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          correo,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(x)throw x;return{success:!0,empleado:y}}catch(y){return console.error("Error al crear empleado:",y),n(y.message),{success:!1,error:y.message}}finally{t(!1)}},[]),s=w.useCallback(async c=>{t(!0),n(null);try{const{data:u,error:f}=await P.from("empleados").select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          correo,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).eq("idEmpleado",c).single();if(f)throw f;return{success:!0,empleado:u}}catch(u){return console.error("Error al obtener empleado:",u),n(u.message),{success:!1,error:u.message}}finally{t(!1)}},[]),a=w.useCallback(async(c,u)=>{t(!0),n(null);try{const{data:f,error:h}=await P.from("empleados").update({idEsquemaPago:u}).eq("idEmpleado",c).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(h)throw h;return{success:!0,empleado:f}}catch(f){return console.error("Error al actualizar esquema de pago:",f),n(f.message),{success:!1,error:f.message}}finally{t(!1)}},[]),l=w.useCallback(async(c,u)=>{t(!0),n(null);try{const{data:f,error:h}=await P.from("empleados").update({correo:u}).eq("idEmpleado",c).select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          correo,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `).single();if(h)throw h;return{success:!0,empleado:f}}catch(f){return console.error("Error al actualizar correo:",f),n(f.message),{success:!1,error:f.message}}finally{t(!1)}},[]);return{loading:e,error:r,buscarEmpleadoPorCodigo:o,crearEmpleado:i,obtenerEmpleadoPorId:s,actualizarEsquemaPago:a,actualizarCorreo:l}},ik=({isOpen:e,onEmailSaved:t})=>{const[r,n]=w.useState(""),[o,i]=w.useState(!1),[s,a]=w.useState(""),l=u=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u),c=async u=>{if(u.preventDefault(),a(""),!r.trim()){a("Por favor, ingrese su correo electrónico");return}if(!l(r.trim())){a("Por favor, ingrese un correo electrónico válido");return}i(!0);try{const f=await t(r.trim());if(!f.success){a(f.error||"Error al guardar el correo electrónico"),i(!1);return}n(""),a("")}catch(f){a("Error al guardar el correo electrónico"),console.error("Error:",f)}finally{i(!1)}};return e?d.jsx(sk,{children:d.jsxs(ak,{children:[d.jsx(lk,{children:d.jsx(ck,{children:"Correo Electrónico Requerido"})}),d.jsxs(uk,{children:[d.jsx(dk,{children:"Para mejorar nuestro servicio, necesitamos tu correo electrónico para enviarte notificaciones cuando tus tickets sean atendidos."}),d.jsxs(fk,{onSubmit:c,children:[s&&d.jsx(gk,{children:s}),d.jsxs(hk,{children:[d.jsx(pk,{children:"Correo Electrónico *"}),d.jsx(mk,{type:"email",placeholder:"tu.correo@ejemplo.com",value:r,onChange:u=>n(u.target.value),disabled:o,required:!0})]}),d.jsx(vk,{children:d.jsx(wk,{type:"submit",disabled:o||!r.trim(),children:o?"Guardando...":"Guardar Correo"})})]})]})]})}):null},sk=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
`,ak=b.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`,lk=b.div`
  padding: 30px 30px 20px 30px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
`,ck=b.h2`
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 600;
`,uk=b.div`
  padding: 30px;
`,dk=b.p`
  color: #495057;
  line-height: 1.6;
  margin-bottom: 25px;
  text-align: center;
  background: #e3f2fd;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`,fk=b.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,hk=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pk=b.label`
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
`,mk=b.input`
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`,gk=b.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 4px solid #dc3545;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,vk=b.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 10px;
`,yk=b.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,wk=b(yk)`
  background: #007bff;
  color: white;

  &:hover:not(:disabled) {
    background: #0056b3;
  }
`,xk=()=>{const[e,t]=w.useState(""),[r,n]=w.useState(""),[o,i]=w.useState(""),[s,a]=w.useState(""),[l,c]=w.useState(""),[u,f]=w.useState(""),[h,v]=w.useState(!1),[y,x]=w.useState(1),[S,m]=w.useState(!1),[g,p]=w.useState(null),{employeeLogin:k}=Gn(),_=qn(),{plantas:j,loading:E}=Eg(),{esquemas:C,loading:A}=_g(),{buscarEmpleadoPorCodigo:N,crearEmpleado:V,actualizarCorreo:ye,loading:Q}=Tg(),je=async $=>{var O;if($.preventDefault(),f(""),!e.trim()){f("Por favor, ingrese su código de empleado");return}if(!/^\d+$/.test(e)){f("El código de empleado debe contener solo números");return}v(!0);try{const L=await N(e.trim());if(!L.success){f("Error al buscar empleado: "+L.error),v(!1);return}if(L.empleado){if(!L.empleado.correo){p(L.empleado),m(!0),v(!1);return}const U={idEmpleado:L.empleado.idEmpleado,codigoEmpleado:L.empleado.codigoEmpleado,empleado:L.empleado.nombre,correo:L.empleado.correo,idPlanta:L.empleado.idPlanta,planta:(O=L.empleado.plantas)==null?void 0:O.planta,idEsquemaPago:L.empleado.idEsquemaPago||null};k(U),_("/employee")}else x(2)}catch(L){f("Error al procesar la búsqueda"),console.error("Error:",L)}finally{v(!1)}},we=async $=>{var O;try{const L=await ye(g.idEmpleado,$);if(!L.success)return{success:!1,error:L.error};const U={...g,correo:$},Ue={idEmpleado:U.idEmpleado,codigoEmpleado:U.codigoEmpleado,empleado:U.nombre,correo:U.correo,idPlanta:U.idPlanta,planta:(O=U.plantas)==null?void 0:O.planta,idEsquemaPago:U.idEsquemaPago||null};return k(Ue),m(!1),p(null),_("/employee"),{success:!0}}catch(L){return{success:!1,error:L.message}}},re=()=>{var O;const $={idEmpleado:g.idEmpleado,codigoEmpleado:g.codigoEmpleado,empleado:g.nombre,correo:null,idPlanta:g.idPlanta,planta:(O=g.plantas)==null?void 0:O.planta,idEsquemaPago:g.idEsquemaPago||null};k($),m(!1),p(null),_("/employee")},ce=async $=>{var O;if($.preventDefault(),f(""),!r.trim()||!s||!l){f("Por favor, complete todos los campos obligatorios");return}v(!0);try{const L=await V(e.trim(),r.trim(),s,l,o.trim()||null);if(!L.success){f("Error al registrar empleado: "+L.error),v(!1);return}k({idEmpleado:L.empleado.idEmpleado,codigoEmpleado:L.empleado.codigoEmpleado,empleado:L.empleado.nombre,correo:L.empleado.correo,idPlanta:L.empleado.idPlanta,planta:(O=L.empleado.plantas)==null?void 0:O.planta,idEsquemaPago:L.empleado.idEsquemaPago||null}),_("/employee")}catch(L){f("Error al procesar el registro"),console.error("Error:",L)}finally{v(!1)}},R=()=>{x(1),n(""),i(""),a(""),c(""),f("")};return y===1?d.jsxs(d.Fragment,{children:[d.jsxs(vf,{onSubmit:je,children:[d.jsx(wf,{children:"Acceso Empleado"}),d.jsx(yf,{children:"Ingresa tu código de empleado para acceder al sistema"}),u&&d.jsx(Ef,{children:u}),d.jsxs(oo,{children:[d.jsx(io,{children:"Número de Empleado"}),d.jsx(bk,{type:"text",inputMode:"numeric",pattern:"[0-9]*",placeholder:"Ej: 12345",value:e,onChange:$=>{const O=$.target.value.replace(/\D/g,"");t(O)},disabled:h||Q,required:!0,autoComplete:"employee-id"})]}),d.jsx(Sf,{type:"submit",disabled:h||Q,children:h||Q?"Verificando...":"Acceder"})]}),d.jsx(ik,{isOpen:S,employeeData:g,onEmailSaved:we,onCancel:re})]}):d.jsxs(vf,{onSubmit:ce,children:[d.jsx(wf,{children:"Registro de Empleado"}),d.jsx(yf,{children:"No encontramos tu código de empleado. Por favor, completa la siguiente información:"}),u&&d.jsx(Ef,{children:u}),d.jsxs(kk,{children:["Código de empleado: ",d.jsx("strong",{children:e})]}),d.jsxs(oo,{children:[d.jsx(io,{children:"Nombre Completo"}),d.jsx(xf,{type:"text",placeholder:"Ej: Juan Pérez García",value:r,onChange:$=>n($.target.value),disabled:h||Q||A,required:!0,autoComplete:"name"})]}),d.jsxs(oo,{children:[d.jsx(io,{children:"Correo Electrónico"}),d.jsx(xf,{type:"email",placeholder:"tu.correo@ejemplo.com",value:o,onChange:$=>i($.target.value),disabled:h||Q||A,autoComplete:"email"})]}),d.jsxs(oo,{children:[d.jsx(io,{children:"Planta"}),E?d.jsx(kf,{disabled:!0,children:"Cargando plantas..."}):d.jsxs(bf,{value:s,onChange:$=>a($.target.value),disabled:h||Q||A,required:!0,children:[d.jsx("option",{value:"",children:"Seleccione su planta"}),j.map($=>d.jsx("option",{value:$.idPlanta,children:$.planta},$.idPlanta))]})]}),d.jsxs(oo,{children:[d.jsx(io,{children:"Esquema de Pago"}),A?d.jsx(kf,{disabled:!0,children:"Cargando esquemas..."}):d.jsxs(bf,{value:l,onChange:$=>c($.target.value),disabled:h||Q||A,required:!0,children:[d.jsx("option",{value:"",children:"Seleccione su esquema"}),C.map($=>d.jsx("option",{value:$.idEsquemaPago,children:$.esquemaPago},$.idEsquemaPago))]})]}),d.jsxs(Sk,{children:[d.jsx(Ek,{type:"button",onClick:R,disabled:h||Q||A,children:"Volver"}),d.jsx(Sf,{type:"submit",disabled:h||Q||A,style:{flex:1},children:h||Q||A?"Registrando...":"Registrar y Acceder"})]})]})},vf=b.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,yf=b.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,wf=b.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,oo=b.div`
  margin-bottom: 1.5rem;
`,io=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,$g=b.input`
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
`,bk=b($g)`
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
`,xf=b($g)``,bf=b.select`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-white);
  transition: border-color 0.2s ease;
  min-width: 100%;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`,kf=b.div`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: var(--color-gray);
`,Sf=b.button`
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
`,Ef=b.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
`,kk=b.div`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.9rem;
`,Sk=b.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Ek=b.button`
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
`,_k=()=>{const[e,t]=w.useState(""),[r,n]=w.useState(""),[o,i]=w.useState(!1),{adminLogin:s,authError:a,clearAuthError:l}=Gn(),c=qn(),u=w.useRef(null);w.useEffect(()=>{u.current&&u.current.focus()},[]);const f=async h=>{if(h.preventDefault(),h.stopPropagation(),!(!e.trim()||!r.trim())){l(),i(!0);try{(await s(e.trim(),r)).success&&(t(""),n(""),c("/admin"))}catch(v){console.error("Error en handleSubmit:",v)}finally{i(!1)}}};return d.jsxs(jk,{onSubmit:f,children:[d.jsx(Tk,{children:"Acceso Administrador"}),d.jsx(Ck,{children:"Ingresa tus credenciales de administrador para acceder al panel de control"}),a&&d.jsxs(Pk,{$shake:!!a,children:[d.jsx(Rk,{children:"⚠️"}),a]}),d.jsxs(_f,{children:[d.jsx(jf,{children:"Usuario"}),d.jsx(Cf,{ref:u,type:"text",placeholder:"Ingrese su usuario",value:e,onChange:h=>{t(h.target.value),a&&l()},disabled:o,autoComplete:"username",$hasError:a&&!e.trim()})]}),d.jsxs(_f,{children:[d.jsx(jf,{children:"Contraseña"}),d.jsx(Cf,{type:"password",placeholder:"Ingrese su contraseña",value:r,onChange:h=>{n(h.target.value),a&&l()},disabled:o,autoComplete:"current-password",$hasError:a&&!r.trim()})]}),d.jsx($k,{type:"submit",disabled:o||!e.trim()||!r.trim(),onSubmit:h=>h.preventDefault(),children:o?d.jsxs(d.Fragment,{children:[d.jsx(Ak,{}),"Iniciando sesión..."]}):"Iniciar Sesión"})]})},jk=b.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`,Ck=b.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,Tk=b.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,_f=b.div`
  margin-bottom: 1.5rem;
`,jf=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`,Cf=b.input`
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
`,$k=b.button`
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
`,Pk=b.div`
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
`,Rk=b.span`
  font-size: 1rem;
  flex-shrink: 0;
`,Ak=b.div`
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
`,Ik="/ventanilla/assets/logo-DOgx6EZv.png",Ok=()=>{const[e,t]=w.useState("employee");return d.jsxs(Lk,{children:[d.jsxs(Nk,{children:[d.jsx("img",{src:Ik,alt:"Logo de la empresa",style:{height:"80px"}}),d.jsx(zk,{children:"Ventanilla de atención al empleado"})]}),d.jsx(Uk,{children:d.jsxs(Dk,{children:[d.jsxs(Fk,{children:[d.jsxs(Tf,{$active:e==="employee",onClick:()=>t("employee"),children:[d.jsx($f,{children:"👤"}),"Empleado"]}),d.jsxs(Tf,{$active:e==="admin",onClick:()=>t("admin"),children:[d.jsx($f,{children:"🔑"}),"Administrador"]})]}),d.jsxs(Mk,{children:[e==="employee"&&d.jsx(xk,{}),e==="admin"&&d.jsx(_k,{})]})]})})]})},Lk=b.div`
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
`,Nk=b.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    /* Removido el filtro que estaba causando problemas */
  }
`,zk=b.h1`
  color: var(--color-primary);
  font-size: 28px;
  font-weight: 600;
  margin: 16px 0 0 0;
`,Uk=b.div`
  width: 100%;
  max-width: 500px;
`,Dk=b.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,Fk=b.div`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`,Tf=b.button`
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
`,$f=b.span`
  font-size: 16px;
`,Mk=b.div`
  padding: 0;
`,Bk=(e,t=[])=>{const[r,n]=w.useState([]),[o,i]=w.useState(!0),[s,a]=w.useState(null),l=w.useRef(!1),c=w.useRef(null),u=w.useCallback(async(f={})=>{if(e){if(e.idRol===2&&(!t||t.length===0)){const v=l.current?Date.now()-15e3:Date.now();if(Date.now()-v<15e3)return}try{i(!0);const h=async p=>{var k;try{if((k=p.seguimientos)==null?void 0:k.find(E=>E.idEstado===1))return{success:!0,mensaje:"Ya tiene seguimiento inicial"};const{error:j}=await P.from("seguimientos").insert({idTicket:p.idTicket,idUsuario:null,idEstado:1});if(j)throw j;return{success:!0,mensaje:"Seguimiento inicial creado"}}catch(_){return console.error("Error creando seguimiento inicial:",_),{success:!1,error:_.message}}};let v=P.from("tickets").select(`
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
        `).order("idTicket",{ascending:!1}),y=null;if((e==null?void 0:e.idRol)===2){if(!e.idUsuario||!t||t.length===0){n([]),i(!1);return}const p=t.filter(C=>C.idUsuario===e.idUsuario);if(p.length===0){n([]),i(!1);return}const k=p.map(C=>P.from("empleados").select("idEmpleado").eq("idPlanta",C.idPlanta)),j=(await Promise.all(k)).flatMap(C=>C.data||[]);if(y=[...new Set(j.map(C=>C.idEmpleado))],y.length===0){n([]),i(!1);return}v=v.in("idEmpleado",y);const E=[...new Set(p.map(C=>C.idTipoSolicitud))];v=v.in("idTipoSolicitud",E)}if(f.planta){const{data:p}=await P.from("empleados").select("idEmpleado").eq("idPlanta",f.planta);if(p&&p.length>0){const k=p.map(_=>_.idEmpleado);if(y){const _=k.filter(j=>y.includes(j));if(_.length===0){n([]),i(!1);return}v=v.in("idEmpleado",_)}else v=v.in("idEmpleado",k)}else{n([]),i(!1);return}}if(f.tipoSolicitud&&(v=v.eq("idTipoSolicitud",f.tipoSolicitud)),f.prioridad&&(v=v.eq("idPrioridad",f.prioridad)),f.empleado){const{data:p}=await P.from("empleados").select("idEmpleado").or(`codigoEmpleado.ilike.%${f.empleado}%,nombre.ilike.%${f.empleado}%`);if(p&&p.length>0){const k=p.map(_=>_.idEmpleado);if(y){const _=k.filter(j=>y.includes(j));if(_.length===0){n([]),i(!1);return}v=v.in("idEmpleado",_)}else v=v.in("idEmpleado",k)}else{n([]),i(!1);return}}const{data:x,error:S}=await v;if(S)throw S;let m=x||[];const g=m.filter(p=>{var k;return!((k=p.seguimientos)!=null&&k.find(_=>_.idEstado===1))});if(g.length>0){const p=g.map(k=>h(k));try{await Promise.all(p);const{data:k}=await v;k&&(m=k)}catch(k){console.error("Error en migración de seguimientos:",k)}}f.sortBy==="prioridad"?m.sort((p,k)=>p.idPrioridad-k.idPrioridad):m.sort((p,k)=>{var E,C,A,N;const _=(C=(E=p.seguimientos)==null?void 0:E.find(V=>V.idEstado===1))==null?void 0:C.fecha,j=(N=(A=k.seguimientos)==null?void 0:A.find(V=>V.idEstado===1))==null?void 0:N.fecha;return!_&&!j?0:_?j?new Date(j)-new Date(_):-1:1}),n(m),a(null)}catch(h){console.error("Error fetching tickets:",h),a(h.message)}finally{i(!1)}}},[e,t]);return w.useEffect(()=>{e&&(c.current!==e.idUsuario||!l.current)&&(c.current=e.idUsuario,l.current=!0,e.idRol===2?t&&t.length>0&&u():u())},[e,u,t]),{tickets:r,loading:o,error:s,refetchTickets:u}},qk=e=>({total:e.length,sinAtender:e.filter(r=>r.idEstado===1).length,reasignados:e.filter(r=>r.idEstado===2).length,atendidos:e.filter(r=>r.idEstado===3).length,cerrados:e.filter(r=>r.idEstado===4).length,cancelados:e.filter(r=>r.idEstado===5).length}),Pg=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0);w.useEffect(()=>{(async()=>{try{const s=new Promise((u,f)=>setTimeout(()=>f(new Error("Timeout al cargar asignaciones")),1e4)),a=P.from("asignaciones").select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `),{data:l,error:c}=await Promise.race([a,s]);if(c)throw c;t(l||[])}catch(s){console.error("Error fetching asignaciones:",s),t([])}finally{n(!1)}})()},[]);const o=w.useCallback((i,s)=>{var l;const a=e.find(c=>c.idPlanta===i&&c.idTipoSolicitud===s);return((l=a==null?void 0:a.usuarios)==null?void 0:l.nombre)||"No asignado"},[e]);return{asignaciones:e,loading:r,getResponsable:o}},Wk=e=>{const[t,r]=w.useState(!1),n=w.useCallback(async(a,l,c)=>{var u;try{r(!0);const{error:f}=await P.from("seguimientos").insert({idTicket:a,idUsuario:l,idEstado:3});if(f)throw f;const{data:h,error:v}=await P.from("atenciones").insert({idTicket:a,idUsuario:l,respuesta:c}).select().single();if(v)throw v;const{error:y}=await P.from("tickets").update({idEstado:3}).eq("idTicket",a);if(y)throw y;try{const{data:x,error:S}=await P.from("tickets").select(`
            *,
            empleados (
              idEmpleado,
              nombre,
              correo,
              plantas (planta)
            ),
            tiposSolicitud (tipoSolicitud),
            prioridades (prioridad)
          `).eq("idTicket",a).single();if(!S&&((u=x==null?void 0:x.empleados)!=null&&u.correo)){const m=await nk(x,x.empleados,h);m.success?console.log("Notificación de respuesta enviada exitosamente"):console.warn("Error enviando notificación de respuesta:",m.error)}}catch(x){console.warn("Error en el sistema de notificaciones:",x)}return{success:!0,atencion:h}}catch(f){return console.error("Error al registrar la atención:",f),{success:!1,error:f.message}}finally{r(!1)}},[]),o=w.useCallback(async(a,l,c)=>{try{r(!0);const{error:u}=await P.from("seguimientos").insert({idTicket:a,idUsuario:l,idEstado:5});if(u)throw u;const{data:f,error:h}=await P.from("atenciones").insert({idTicket:a,respuesta:c}).select().single();if(h)throw h;const{error:v}=await P.from("tickets").update({idEstado:5}).eq("idTicket",a);if(v)throw v;return{success:!0,atencion:f}}catch(u){return console.error("Error al cancelar el ticket:",u),{success:!1,error:u.message}}finally{r(!1)}},[]),i=w.useCallback(async(a,l)=>{if(!e)return{success:!1,error:"Usuario no disponible"};r(!0);try{const{error:c}=await P.from("seguimientos").insert({idTicket:a,idUsuario:e.idUsuario,idEstado:2});if(c)throw c;return{success:!0}}catch(c){return console.error("Error al re-asignar el ticket:",c),{success:!1,error:c.message}}finally{r(!1)}},[e]),s=w.useCallback(async a=>({success:!0}),[]);return{crearAtencion:n,cancelarTicket:o,reasignarTicket:i,autoasignarTicket:s,loading:t}},Rg=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(null),o=w.useCallback(async(s,a=null)=>{var l,c;try{if(t(!0),n(null),!s||isNaN(parseInt(s)))return null;const{data:u,error:f}=await P.from("atenciones").select(`
          idUsuario,
          usuarios (
            nombre
          )
        `).eq("idTicket",parseInt(s)).limit(1).maybeSingle();if(!f&&((l=u==null?void 0:u.usuarios)!=null&&l.nombre))return{nombre:u.usuarios.nombre,fecha:null};const{data:h,error:v}=await P.from("tickets").select("idEmpleado, idTipoSolicitud").eq("idTicket",s).maybeSingle();if(!v&&h){const{data:y,error:x}=await P.from("empleados").select("idPlanta").eq("idEmpleado",h.idEmpleado).maybeSingle();if(!x&&y){const{data:S,error:m}=await P.from("asignaciones").select(`
              usuarios (
                nombre
              )
            `).eq("idTipoSolicitud",h.idTipoSolicitud).eq("idPlanta",y.idPlanta).maybeSingle();if(!m&&((c=S==null?void 0:S.usuarios)!=null&&c.nombre))return{nombre:S.usuarios.nombre,fecha:null}}}return null}catch(u){return console.error("Error en obtenerUsuarioQueAtendio:",u),n(u.message),null}finally{t(!1)}},[]),i=w.useCallback(async s=>{var a;if(!s||s.length===0)return{};try{t(!0),n(null);const{data:l,error:c}=await P.from("atenciones").select(`
          idTicket,
          idUsuario,
          usuarios (
            nombre
          )
        `).in("idTicket",s),u={};!c&&l&&l.forEach(h=>{var v;(v=h.usuarios)!=null&&v.nombre&&(u[h.idTicket]={nombre:h.usuarios.nombre,fecha:null})});const f=s.filter(h=>!u[h]);if(f.length>0){const{data:h,error:v}=await P.from("tickets").select("idTicket, idEmpleado, idTipoSolicitud").in("idTicket",f);if(!v&&h)for(const y of h){const{data:x,error:S}=await P.from("empleados").select("idPlanta").eq("idEmpleado",y.idEmpleado).maybeSingle();if(!S&&x){const{data:m,error:g}=await P.from("asignaciones").select(`
                  usuarios (
                    nombre
                  )
                `).eq("idTipoSolicitud",y.idTipoSolicitud).eq("idPlanta",x.idPlanta).maybeSingle();!g&&((a=m==null?void 0:m.usuarios)!=null&&a.nombre)&&(u[y.idTicket]={nombre:m.usuarios.nombre,fecha:null})}}}return u}catch(l){return console.error("Error en obtenerUsuariosQueAtendieron:",l),n(l.message),{}}finally{t(!1)}},[]);return{obtenerUsuarioQueAtendio:o,obtenerUsuariosQueAtendieron:i,loading:e,error:r}},et=e=>{if(!e)return"Fecha no disponible";if(e.includes("T")&&e.includes("+00:00")){const r=e.split("T")[0],n=e.split("T")[1].split("+")[0],[o,i,s]=r.split("-"),[a,l]=n.split(":");return`${s}/${i}/${o}, ${a}:${l}`}return new Date(e).toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},Hk=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0),[o,i]=w.useState(null),s=async()=>{try{n(!0),i(null);const{data:a,error:l}=await P.from("usuarios").select("*").order("idUsuario",{ascending:!1});if(l)throw l;t(a||[])}catch(a){i(a.message),console.error("Error fetching users:",a)}finally{n(!1)}};return w.useEffect(()=>{s()},[]),{users:e,loading:r,error:o,refetch:s}},cc=({selectedUser:e,onUserSelect:t,placeholder:r="Seleccionar usuario...",disabled:n=!1,allowedRoles:o=[2,3],customFilter:i=null})=>{const[s,a]=w.useState(!1),[l,c]=w.useState(""),[u,f]=w.useState([]),[h,v]=w.useState({top:0,left:0,width:0}),y=w.useRef(null),x=w.useRef(null),{users:S}=Hk();w.useEffect(()=>{let E=S.filter(C=>o.includes(C.idRol));i&&(E=E.filter(i)),l&&(E=E.filter(C=>C.nombre.toLowerCase().includes(l.toLowerCase()))),f(E)},[S,l,o,i]),w.useEffect(()=>{const E=N=>{y.current&&!y.current.contains(N.target)&&a(!1)},C=()=>{s&&m()},A=()=>{s&&m()};return document.addEventListener("mousedown",E),window.addEventListener("resize",C),window.addEventListener("scroll",A,!0),()=>{document.removeEventListener("mousedown",E),window.removeEventListener("resize",C),window.removeEventListener("scroll",A,!0)}},[s]);const m=()=>{if(x.current){const E=x.current.getBoundingClientRect();v({top:E.bottom+window.scrollY,left:E.left+window.scrollX,width:E.width})}},g=E=>{t(E.idUsuario),a(!1),c("")},p=()=>{n||(s||m(),a(!s))},k=E=>{c(E.target.value),s||(m(),a(!0))},_=()=>{if(e){const E=S.find(C=>C.idUsuario===parseInt(e));return E?E.nombre:""}return l||""},j=()=>e&&!s?"":r;return d.jsxs(Vk,{ref:y,children:[d.jsxs(Gk,{ref:x,children:[d.jsx(Kk,{type:"text",value:_(),onChange:k,onClick:p,placeholder:j(),disabled:n,$hasValue:!!e}),d.jsx(Jk,{$isOpen:s,$disabled:n,onClick:p,children:"▼"})]}),s&&!n&&d.jsx(Qk,{$top:h.top,$left:h.left,$width:h.width,children:u.length>0?u.map(E=>d.jsx(Yk,{onClick:()=>g(E),$selected:e===E.idUsuario.toString(),children:E.nombre},E.idUsuario)):d.jsx(Xk,{children:l?"No se encontraron usuarios":"No hay usuarios disponibles"})})]})},Vk=b.div`
  position: relative;
  width: 100%;
  z-index: 1000;
`,Gk=b.div`
  position: relative;
  display: flex;
  align-items: center;
`,Kk=b.input`
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
`,Jk=b.div`
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
`,Qk=b.ul`
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
`,Yk=b.li`
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
`,Xk=b.li`
  padding: 0.75rem;
  color: #6c757d;
  font-style: italic;
  text-align: center;
  background: #f8f9fa;
`,Zk=Nx`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,eS=b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${e=>e.height||"200px"};
  width: 100%;
  gap: 1rem;
`,tS=b.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: ${e=>e.size||"40px"};
  height: ${e=>e.size||"40px"};
  animation: ${Zk} 1s linear infinite;
`,rS=b.div`
  color: ${e=>e.$textColor||"#6c757d"};
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
`,nS=({size:e="40px",height:t="200px",text:r="Cargando...",showText:n=!0,textColor:o="#6c757d"})=>d.jsxs(eS,{height:t,children:[d.jsx(tS,{size:e}),n&&d.jsx(rS,{$textColor:o,children:r})]}),oS=({user:e,onLogout:t})=>d.jsxs(iS,{children:[d.jsxs(sS,{children:[d.jsx("h1",{children:"Dashboard Administrativo"}),d.jsxs("p",{children:["Bienvenido, ",e==null?void 0:e.nombre]})]}),d.jsx(aS,{onClick:t,children:"Cerrar Sesión"})]}),iS=b.header`
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
`,sS=b.div`
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
`,aS=b.button`
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
`,lS=({stats:e,statsFilter:t,onStatsFilterChange:r})=>{const n={sinAtender:{id:1,label:"Nuevos",color:"var(--color-estado-sin-atender)",count:e.sinAtender},reasignados:{id:2,label:"Asignados",color:"var(--color-estado-delegado)",count:e.reasignados},atendidos:{id:3,label:"Atendidos",color:"var(--color-estado-atendido)",count:e.atendidos},cerrados:{id:4,label:"Cerrados",color:"var(--color-estado-cerrado)",count:e.cerrados},cancelados:{id:5,label:"Cancelados",color:"var(--color-estado-cancelado)",count:e.cancelados}},o=i=>{r(t===i?null:i)};return d.jsxs(cS,{children:[d.jsxs(uS,{children:["Tickets: ",e.total]}),d.jsx(dS,{children:Object.entries(n).map(([i,s])=>d.jsxs(fS,{$active:t===i,$color:s.color,onClick:()=>o(i),children:[d.jsx(hS,{$active:t===i,$color:s.color,children:s.count}),d.jsx(pS,{$active:t===i,$color:s.color,children:s.label})]},i))})]})},cS=b.div`
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
  }
`,uS=b.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`,dS=b.div`
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
`,fS=b.div`
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
`,hS=b.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  margin-bottom: 0.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`,pS=b.div`
  color: ${e=>e.$active?e.$color:"var(--color-gray)"};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,mS=({tempFilters:e,onTempFilterChange:t,onApplyFilters:r,onClearFilters:n,plantas:o,tipos:i,prioridades:s})=>{const[a,l]=w.useState(!1);return d.jsxs(gS,{children:[d.jsxs(vS,{onClick:()=>l(!a),children:[d.jsx("h3",{children:"Filtros"}),d.jsx(yS,{$expanded:a,children:a?"▲":"▼"})]}),a&&d.jsxs(wS,{children:[d.jsxs(xS,{children:[d.jsxs(Ci,{children:[d.jsx("label",{children:"Planta:"}),d.jsxs("select",{value:e.planta,onChange:c=>t("planta",c.target.value),children:[d.jsx("option",{value:"",children:"Todas"}),o.map(c=>d.jsx("option",{value:c.idPlanta,children:c.planta},c.idPlanta))]})]}),d.jsxs(Ci,{children:[d.jsx("label",{children:"Tipo:"}),d.jsxs("select",{value:e.tipoSolicitud,onChange:c=>t("tipoSolicitud",c.target.value),children:[d.jsx("option",{value:"",children:"Todos"}),i.sort((c,u)=>c.idTipoSolicitud-u.idTipoSolicitud).map(c=>d.jsx("option",{value:c.idTipoSolicitud,children:c.tipoSolicitud},c.idTipoSolicitud))]})]}),d.jsxs(Ci,{children:[d.jsx("label",{children:"Prioridad:"}),d.jsxs("select",{value:e.prioridad,onChange:c=>t("prioridad",c.target.value),children:[d.jsx("option",{value:"",children:"Todas"}),s.map(c=>d.jsx("option",{value:c.idPrioridad,children:c.prioridad},c.idPrioridad))]})]}),d.jsxs(Ci,{children:[d.jsx("label",{children:"Empleado:"}),d.jsx("input",{type:"text",placeholder:"Código o nombre...",value:e.empleado,onChange:c=>t("empleado",c.target.value)})]})]}),d.jsxs(bS,{children:[d.jsx("label",{children:"Ordenar por:"}),d.jsxs("select",{value:e.sortBy,onChange:c=>t("sortBy",c.target.value),children:[d.jsx("option",{value:"fecha",children:"Fecha de creación"}),d.jsx("option",{value:"prioridad",children:"Prioridad"})]})]}),d.jsxs(kS,{children:[d.jsx(ES,{onClick:n,children:"Limpiar"}),d.jsx(SS,{onClick:r,children:"Aplicar"})]})]})]})},gS=b.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`,vS=b.div`
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
`,yS=b.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`,wS=b.div`
  padding: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`,xS=b.div`
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
`,bS=b.div`
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
`,kS=b.div`
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
`,SS=b.button`
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
`,ES=b.button`
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
`,Ag=(e,t,r)=>{const[n,o]=w.useState(null);return w.useEffect(()=>{(async()=>{var a,l;if(!e||!e.idTicket){o(null);return}try{const{data:c,error:u}=await P.from("ticket_tokens").select("idUsuario").eq("idTicket",e.idTicket).eq("bActivo",!0).maybeSingle();let f=null;if(!u&&(c!=null&&c.idUsuario))f=c.idUsuario;else{if(e.idTipoSolicitud&&e.idEmpleado)try{const{data:h,error:v}=await P.from("empleados").select("idPlanta").eq("idEmpleado",e.idEmpleado).single();if(!v&&(h!=null&&h.idPlanta)){const{data:y,error:x}=await P.from("asignaciones").select("idUsuario").eq("idTipoSolicitud",e.idTipoSolicitud).eq("idPlanta",h.idPlanta).single();!x&&(y!=null&&y.idUsuario)&&(f=y.idUsuario)}}catch{}f||(f=((a=e.asignaciones)==null?void 0:a.idUsuario)||null)}if(f){const{data:h,error:v}=await P.from("usuarios").select("nombre").eq("idUsuario",f).single();!v&&(h!=null&&h.nombre)?o(h.nombre):o(null)}else o(null)}catch{const u=(l=e.asignaciones)==null?void 0:l.idUsuario;if(u)try{const{data:f,error:h}=await P.from("usuarios").select("nombre").eq("idUsuario",u).single();!h&&(f!=null&&f.nombre)?o(f.nombre):o(null)}catch{o(null)}else o(null)}})()},[e]),w.useMemo(()=>{var h;const s=()=>n,a=()=>{var y,x;const v=(x=(y=e.seguimientos)==null?void 0:y.find(S=>S.idEstado===1))==null?void 0:x.fecha;return v?r?r(v):et(v):"Pendiente seguimiento inicial"},l=()=>{const v={1:()=>a(),2:()=>{var x,S;const y=(S=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===2))==null?void 0:S.fecha;return y?r?r(y):et(y):a()},3:()=>{var x,S;const y=(S=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===3))==null?void 0:S.fecha;return y?r?r(y):et(y):a()},4:()=>{var x,S;const y=(S=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===4))==null?void 0:S.fecha;return y?r?r(y):et(y):a()},5:()=>{var x,S;const y=(S=(x=e.seguimientos)==null?void 0:x.find(m=>m.idEstado===5))==null?void 0:S.fecha;return y?r?r(y):et(y):a()}};return v[e.idEstado]?v[e.idEstado]():a()},c=()=>({1:"Sin atender",2:"Asignado",3:"Atendido",4:"Cerrado",5:"Cancelado"})[e.idEstado]||"Pendiente",u=()=>({1:"var(--color-estado-sin-atender)",2:"var(--color-estado-delegado)",3:"var(--color-estado-atendido)",4:"var(--color-estado-cerrado)",5:"var(--color-estado-cancelado)"})[e.idEstado]||"#ffc107",f=()=>({1:"Fecha de creación:",2:"Fecha de asignación:",3:"Fecha de atención:",4:"Fecha de cierre:",5:"Fecha de cancelación:"})[e.idEstado]||"Fecha de creación:";return{usuarioDelegado:s(),fechaCreacion:a(),fechaRelevante:l(),estadoTexto:c(),estadoColor:u(),etiquetaFecha:f(),borderColor:u(),isResolved:t==="admin"?((h=e.atenciones)==null?void 0:h.length)>0:!1}},[e,t,r,n])},_S=b.div`
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
`,jS=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${e=>e.$isResolved?"#f8f9fa":"white"};
  border-bottom: ${e=>e.$isExpanded?"1px solid #e9ecef":"none"};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`,CS=b.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`,TS=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$S=b.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${e=>e.$priority||"var(--color-secondary)"};
`,PS=b.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,RS=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,AS=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,IS=b.button`
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
`,OS=b.button`
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
`,LS=b.button`
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
`,Ig=b.button`
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
`,NS=b.div`
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
`,Kt=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #f8f9fa;
`,Jt=b.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
  min-width: 120px;
`,Qt=b.span`
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
`;const zS=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,US=({ticket:e,ticketData:t,onAtender:r,onVerRespuesta:n,isExpanded:o,onToggleExpand:i})=>{const s=c=>{c.stopPropagation(),r==null||r(e)},a=c=>{c.stopPropagation(),n==null||n(e)},l=c=>{c.stopPropagation(),i==null||i()};return d.jsxs(d.Fragment,{children:[t.isResolved?d.jsx(zS,{children:d.jsx(OS,{onClick:a,title:"Ver respuesta del ticket",children:d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),d.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}):d.jsx(RS,{children:d.jsx(IS,{onClick:s,children:"Atender"})}),d.jsx(Ig,{onClick:l,children:o?"▲":"▼"})]})},DS=({ticket:e,ticketData:t,onShowDetails:r,isExpanded:n,onToggleExpand:o})=>{const i=a=>{a.stopPropagation(),r==null||r(e)},s=a=>{a.stopPropagation(),o==null||o()};return d.jsxs(d.Fragment,{children:[d.jsx(AS,{children:d.jsx(LS,{$estadoColor:t.estadoColor,onClick:i,title:"Ver detalles del ticket",children:t.estadoTexto})}),d.jsx(Ig,{onClick:s,children:n?"▲":"▼"})]})},FS=({ticket:e,mode:t,ticketData:r,getPriorityColor:n,onAtender:o,onVerRespuesta:i,onShowDetails:s,isExpanded:a,onToggleExpand:l})=>{var c;return d.jsxs(jS,{$isResolved:r.isResolved,$isExpanded:a,onClick:l,children:[d.jsxs(CS,{children:[d.jsx($S,{$priority:n(e.idPrioridad),children:(c=e.prioridades)==null?void 0:c.prioridad}),d.jsxs(PS,{children:["#",e.idTicket]})]}),d.jsx(TS,{children:t==="admin"?d.jsx(US,{ticket:e,ticketData:r,onAtender:o,onVerRespuesta:i,isExpanded:a,onToggleExpand:l}):d.jsx(DS,{ticket:e,ticketData:r,onShowDetails:s,isExpanded:a,onToggleExpand:l})})]})},MS=(e,t,r)=>r==="employee"?"Asignado a:":(e==null?void 0:e.idRol)===3?t===2?"Asignado a:":"Asignado por:":"Asignado a:",BS=(e,t,r)=>{var n;return t.usuarioDelegado?t.usuarioDelegado:(r==null?void 0:r((n=e.empleados)==null?void 0:n.idPlanta,e.idTipoSolicitud))||"No asignado"},qS=(e,t=20)=>e?e.length>t?`${e.substring(0,t).trim()}...`:e:"",WS=({ticket:e,mode:t,ticketData:r,getResponsable:n,currentUser:o,isExpanded:i})=>{var l,c,u,f;const s=MS(o,e.idEstado,t),a=BS(e,r,n);return d.jsx(NS,{$isExpanded:i,children:t==="admin"?d.jsxs(d.Fragment,{children:[d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:"Empleado:"}),d.jsx(Qt,{$isExpanded:i,children:qS((l=e.empleados)==null?void 0:l.nombre)})]}),d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:"Código:"}),d.jsx(Qt,{$isExpanded:i,children:(c=e.empleados)==null?void 0:c.codigoEmpleado})]}),d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:"Fecha:"}),d.jsx(Qt,{$isExpanded:i,children:r.fechaRelevante})]}),d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:"Tipo:"}),d.jsx(Qt,{$isExpanded:i,children:(u=e.tiposSolicitud)==null?void 0:u.tipoSolicitud})]}),n&&d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:s}),d.jsx(Qt,{$isExpanded:i,children:a})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:r.etiquetaFecha}),d.jsx(Qt,{$isExpanded:i,children:r.fechaRelevante})]}),d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:"Tipo:"}),d.jsx(Qt,{$isExpanded:i,children:(f=e.tiposSolicitud)==null?void 0:f.tipoSolicitud})]}),n&&d.jsxs(Kt,{$isExpanded:i,children:[d.jsx(Jt,{$isExpanded:i,children:s}),d.jsx(Qt,{$isExpanded:i,children:a})]})]})})},uc=({ticket:e,mode:t="employee",formatDate:r,getPriorityColor:n,getResponsable:o,onAtender:i,onVerRespuesta:s,onShowDetails:a,isExpanded:l=!1,onToggleExpand:c,currentUser:u=null})=>{const f=Ag(e,t,r),h=()=>{c==null||c(e.idTicket)};return d.jsxs(_S,{$borderColor:f.borderColor,$isResolved:f.isResolved,$isExpanded:l,children:[d.jsx(FS,{ticket:e,mode:t,ticketData:f,getPriorityColor:n,onAtender:i,onVerRespuesta:s,onShowDetails:a,isExpanded:l,onToggleExpand:h}),d.jsx(WS,{ticket:e,mode:t,ticketData:f,getResponsable:o,currentUser:u,isExpanded:l})]})},HS=({tickets:e,mode:t="admin",onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,expandedTicketId:a,onToggleExpand:l,currentUser:c=null})=>e.length===0?d.jsx(Pf,{children:d.jsx(GS,{children:"No se encontraron tickets"})}):d.jsx(Pf,{children:d.jsx(VS,{children:e.map(u=>d.jsx(uc,{ticket:u,mode:t,onAtender:r,onVerRespuesta:n,getResponsable:o,formatDate:i,getPriorityColor:s,isExpanded:a===u.idTicket,onToggleExpand:l,currentUser:c},u.idTicket))})}),Pf=b.div`
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
`,VS=b.div`
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
`,GS=b.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  margin: 1rem;
`,KS=(e,t)=>{const[r,n]=w.useState(""),[o,i]=w.useState(""),[s,a]=w.useState(""),[l,c]=w.useState(1),[u,f]=w.useState("");w.useEffect(()=>{e||h()},[e]);const h=()=>{n(""),i(""),a(""),c(1),f("")};return{respuesta:r,setRespuesta:p=>{n(p)},actionType:o,setActionType:i,selectedUser:s,setSelectedUser:p=>{a(p)},calificacion:l,setCalificacion:p=>{c(p)},comentario:u,setComentario:p=>{f(p)},resetState:h,handleClose:()=>{h(),t==null||t()},handleActionChange:p=>{n(""),a(""),i(p)}}},JS=({onSubmit:e,onDelegate:t,onReassign:r,onSelfAssign:n})=>({handleSubmit:(i,s,a)=>{switch(i){case"respond":case"cancel":if(!s.trim())return alert(i==="cancel"?"Debe ingresar un motivo de cancelación":"Debe ingresar una respuesta"),!1;break;case"delegate":if(!a)return alert("Debe seleccionar un usuario para delegar"),!1;break;case"reassign":if(!a)return alert("Debe seleccionar un usuario para reasignar"),!1;break;case"selfassign":if(!s.trim())return alert("Debe ingresar una respuesta"),!1;break;default:return alert("Debe seleccionar una acción"),!1}try{switch(i){case"respond":e==null||e(s.trim(),"respond");break;case"cancel":e==null||e(s.trim(),"cancel");break;case"delegate":t==null||t(a);break;case"reassign":r==null||r(a);break;case"selfassign":n==null||n(),setTimeout(()=>{e==null||e(s.trim(),"respond")},100);break;default:return!1}return!0}catch(l){return console.error("Error en handleSubmit:",l),alert("Error al procesar la acción. Inténtalo de nuevo."),!1}}}),QS=b.div`
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
`,YS=b.div`
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
`,XS=b.div`
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
`,ZS=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,eE=b.button`
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
`,tE=b.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;

  background: ${e=>{var t;switch((t=e.$priority)==null?void 0:t.toLowerCase()){case"alta":return"#E06363";case"media":return"#E0C563";case"baja":return"#636EE0";default:return"#6c757d"}}};
`,rE=b.div`
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
`,nE=b.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,oE=b.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,iE=b.p`
  margin-bottom: 1rem;
  color: var(--color-primary);
`,sE=b.span`
  font-weight: 600;
`,aE=b.span`
  color: #495057;
`,lE=b.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`,cE=b.div`
  margin-bottom: 1.5rem;
`,uE=b.div`
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
`;const Rf=b.div`
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid var(--color-accent);
`,Ba=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,qa=b.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
`,Wa=b.span`
  color: #495057;
  font-size: 0.85rem;
`,dE=b.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,fE=b.button`
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
`,hE=b.div`
  margin-top: 1rem;
`,pE=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,mE=b.textarea`
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
`,Af=b.div`
  margin-top: 1rem;
`,If=b.label`
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
`;const gE=b.div`
  margin-bottom: 1.5rem;
`,Of=b.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`,vE=b.h5`
  margin: 0 0 0.75rem 0;
  color: var(--color-primary);
  font-weight: 600;
`,yE=b.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`,wE=b.div`
  margin-top: 0.5rem;
  padding: 0;
  background: none;
  border: none;
  font-size: 0.75rem;
  opacity: 0.85;
`,Lf=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Nf=b.span`
  font-weight: 500;
  color: #6c757d;
  font-size: 0.7rem;
`,zf=b.span`
  color: #495057;
  font-size: 0.7rem;
  font-weight: 400;
`,xE=b.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`,bE=b.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,kE=b.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,SE=b.button`
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
`,EE=b.div`
  text-align: left;
`,_E=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,jE=b.textarea`
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
`,CE=b.div`
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
`,TE=({ticket:e,onClose:t})=>{var r,n;return d.jsxs(XS,{children:[d.jsxs(ZS,{children:[d.jsx(tE,{$priority:(r=e.prioridades)==null?void 0:r.prioridad,children:(n=e.prioridades)==null?void 0:n.prioridad}),d.jsxs("h3",{children:["#",e.idTicket]})]}),d.jsx(eE,{onClick:t,children:"×"})]})},$E=({ticket:e})=>{var r,n,o,i,s,a,l;const t=(n=(r=e.seguimientos)==null?void 0:r.find(c=>c.idEstado===1))!=null&&n.fecha?et(e.seguimientos.find(c=>c.idEstado===1).fecha):"No disponible";return d.jsxs(d.Fragment,{children:[d.jsx(nE,{children:d.jsxs(oE,{children:[(o=e.empleados)==null?void 0:o.nombre," (",(i=e.empleados)==null?void 0:i.codigoEmpleado,") -"," ",(a=(s=e.empleados)==null?void 0:s.plantas)==null?void 0:a.planta]})}),d.jsxs(iE,{children:[d.jsx(sE,{children:"Fecha de generación:"})," ",d.jsx(aE,{children:t})]}),d.jsxs(lE,{children:["Tipo: ",(l=e.tiposSolicitud)==null?void 0:l.tipoSolicitud]}),d.jsx(cE,{children:d.jsx(uE,{children:e.descripcion})})]})},PE=({ticket:e,mode:t})=>{var n,o;const r=Ag(e,"admin",i=>et(i));if(!e||t==="response")return null;if(e.idEstado===1)return d.jsx(Rf,{children:d.jsxs(Ba,{children:[d.jsx(qa,{children:"Asignado a:"}),d.jsx(Wa,{children:(r==null?void 0:r.usuarioDelegado)||"Determinando asignación..."})]})});if(e.idEstado===2){const i=(o=(n=e.seguimientos)==null?void 0:n.find(s=>s.idEstado===2))==null?void 0:o.fecha;return d.jsx(d.Fragment,{children:d.jsxs(Rf,{children:[d.jsxs(Ba,{children:[d.jsx(qa,{children:"Asignado a:"}),d.jsx(Wa,{children:(r==null?void 0:r.usuarioDelegado)||"Usuario no disponible"})]}),d.jsxs(Ba,{children:[d.jsx(qa,{children:"Fecha de asignación:"}),d.jsx(Wa,{children:i?et(i):"Fecha no disponible"})]})]})})}return null},RE=(e,t)=>{if(!e||!t)return[];const r=[];return(t.idRol===1||t.idRol===2||t.idRol===3)&&(e.idEstado===1&&(r.push({type:"respond",label:"Responder"}),r.push({type:"cancel",label:"Cancelar"}),(t.idRol===1||t.idRol===2)&&r.push({type:"delegate",label:"Asignar"})),e.idEstado===2&&(r.push({type:"respond",label:"Responder"}),r.push({type:"cancel",label:"Cancelar"}),(t.idRol===1||t.idRol===2)&&r.push({type:"reassign",label:"Reasignar"}))),r},AE=(e,t=!1)=>{if(t)return"Procesando...";switch(e){case"respond":return"Enviar Respuesta";case"cancel":return"Cancelar Ticket";case"delegate":return"Asignar";case"reassign":return"Reasignar";case"selfassign":return"Autoasignar y Responder";default:return"Procesar"}},IE=(e,t,r,n)=>{if(n)return!1;switch(e){case"respond":case"cancel":case"selfassign":return t.trim().length>0;case"delegate":case"reassign":return r.length>0;default:return!1}},OE=(e,t)=>{if((t==null?void 0:t.idEstado)===5)return"Motivo de cancelación:";switch(e){case"cancel":return"Motivo de cancelación:";case"respond":case"selfassign":default:return"Su respuesta:"}},LE=e=>{switch(e){case"cancel":return"Ingrese el motivo por el cual se cancela este ticket...";case"respond":case"selfassign":default:return"Ingrese su respuesta aquí..."}},Df=({ticket:e,mode:t,currentUser:r,modalState:n})=>{if(t==="rating")return d.jsxs(xE,{children:[d.jsx(bE,{children:"¿Cómo calificarías el servicio?"}),d.jsx(kE,{children:Array.from({length:3},(i,s)=>d.jsx(SE,{type:"button",$filled:s<n.calificacion,onClick:()=>n.setCalificacion(s+1),children:s<n.calificacion?"★":"☆"},s))}),d.jsxs(EE,{children:[d.jsx(_E,{children:"Comentario adicional (opcional):"}),d.jsx(jE,{value:n.comentario,onChange:i=>n.setComentario(i.target.value),placeholder:"Comparte tu experiencia con el servicio...",rows:3})]})]});if(t!=="attend")return null;const o=RE(e,r);return d.jsxs(d.Fragment,{children:[o.length>0&&d.jsx(dE,{children:o.map(i=>d.jsx(fE,{$active:n.actionType===i.type,onClick:()=>n.handleActionChange(i.type),children:i.label},i.type))}),d.jsx(NE,{actionType:n.actionType,ticket:e,modalState:n})]})},NE=({actionType:e,ticket:t,modalState:r})=>{switch(e){case"respond":case"selfassign":case"cancel":return d.jsxs(hE,{children:[d.jsx(pE,{children:OE(e,t)}),d.jsx(mE,{value:r.respuesta,onChange:n=>r.setRespuesta(n.target.value),placeholder:LE(e),rows:6})]});case"delegate":return d.jsxs(Af,{children:[d.jsx(If,{children:"Seleccionar usuario para delegar:"}),d.jsx(cc,{selectedUser:r.selectedUser,onUserSelect:n=>r.setSelectedUser(n),placeholder:"Seleccione un usuario...",allowedRoles:[2,3],customFilter:n=>{var s,a,l,c,u;if(n.idUsuario===((s=r.currentUser)==null?void 0:s.id))return!1;const o=(l=(a=t.atenciones)==null?void 0:a[0])==null?void 0:l.idUsuario;if(o&&n.idUsuario===o)return!1;const i=(u=(c=t.ticket_tokens)==null?void 0:c.find(f=>f.bActivo))==null?void 0:u.idUsuario;return!(i&&n.idUsuario===i)}})]});case"reassign":return d.jsxs(Af,{children:[d.jsx(If,{children:"Seleccionar usuario para reasignar:"}),d.jsx(cc,{selectedUser:r.selectedUser,onUserSelect:n=>r.setSelectedUser(n),placeholder:"Seleccione un usuario...",allowedRoles:[2,3],customFilter:n=>{var s,a,l,c,u;if(n.idUsuario===((s=r.currentUser)==null?void 0:s.id))return!1;const o=(l=(a=t.atenciones)==null?void 0:a[0])==null?void 0:l.idUsuario;if(o&&n.idUsuario===o)return!1;const i=(u=(c=t.ticket_tokens)==null?void 0:c.find(f=>f.bActivo))==null?void 0:u.idUsuario;return!(i&&n.idUsuario===i)}})]});default:return null}},zE=({ticket:e,usuarioQueAtendio:t})=>{var s;if(!e)return null;const r=e.atenciones&&e.atenciones.length>0&&e.atenciones[0].respuesta,n=e.atenciones&&e.atenciones.length>0,o=n?e.atenciones[0]:null,i=((s=o==null?void 0:o.usuarios)==null?void 0:s.nombre)||(t==null?void 0:t.nombre)||"No disponible";return d.jsxs(gE,{children:[r&&d.jsxs(d.Fragment,{children:[d.jsx(vE,{children:"Respuesta:"}),d.jsx(yE,{children:o.respuesta})]}),(n||e.idEstado===5||e.idEstado===3)&&d.jsxs(wE,{children:[d.jsxs(Lf,{children:[d.jsx(Nf,{children:e.idEstado===5?"Cancelado por:":"Atendido por:"}),d.jsx(zf,{children:i})]}),d.jsxs(Lf,{children:[d.jsx(Nf,{children:e.idEstado===5?"Fecha de cancelación:":"Fecha de atención:"}),d.jsx(zf,{children:(()=>{var c,u;const a=e.idEstado===5?5:3,l=(u=(c=e.seguimientos)==null?void 0:c.find(f=>f.idEstado===a))==null?void 0:u.fecha;return l?et(l):"No disponible"})()})]})]}),e.idEstado===4&&(o==null?void 0:o.calificacion)&&o.calificacion>0&&d.jsx(Of,{children:d.jsxs("div",{children:[d.jsxs("div",{style:{marginBottom:"0.5rem"},children:[d.jsx("strong",{children:"Calificación del empleado:"}),d.jsxs("span",{style:{marginLeft:"0.5rem",fontSize:"1.2rem",color:"#ffc107"},children:["★".repeat(o.calificacion),"☆".repeat(3-o.calificacion)]}),d.jsxs("span",{style:{marginLeft:"0.25rem",fontSize:"0.9rem",color:"#6c757d"},children:["(",o.calificacion,"/3)"]})]}),o.comentario&&o.comentario.trim()&&d.jsxs("div",{style:{marginTop:"0.5rem"},children:[d.jsx("strong",{children:"Comentarios del empleado:"}),d.jsxs("div",{style:{marginTop:"0.25rem",padding:"0.5rem",background:"#f8f9fa",borderRadius:"4px",fontStyle:"italic",color:"#495057"},children:["“",o.comentario,"”"]})]})]})}),e.idEstado===5&&d.jsxs(Of,{style:{background:"#fff3cd",borderLeftColor:"#ffc107",color:"#856404"},children:[d.jsx("strong",{children:"Estado:"})," Este ticket ha sido cancelado."]})]})},UE=({mode:e,actionType:t,loading:r,onSubmit:n,respuesta:o,selectedUser:i,calificacion:s})=>{const a=e==="attend"&&t,l=e==="rating",c=f=>{f.preventDefault(),n==null||n()},u=s>=1&&s<=3;return d.jsxs(CE,{children:[a&&d.jsx(Uf,{onClick:c,disabled:!IE(t,o,i,r),children:AE(t,r)}),l&&d.jsx(Uf,{onClick:c,disabled:!u||r,children:r?"Enviando...":"Enviar Calificación"})]})},Og=({ticket:e,isOpen:t,onClose:r,mode:n="view",onSubmit:o,onDelegate:i,onReassign:s,onSelfAssign:a,loading:l=!1,usuarioQueAtendio:c=null,currentUser:u=null})=>{var S;const f=KS(t,r),h=JS({onSubmit:o,onDelegate:i,onReassign:s,onSelfAssign:a});if(!t||!e)return null;const v=()=>{if(n==="rating"&&o){o({calificacion:f.calificacion,comentario:f.comentario});return}h.handleSubmit(f.actionType,f.respuesta,f.selectedUser)&&f.resetState()},y=n==="response"||n==="view"&&(e.idEstado===3||e.idEstado===4||e.idEstado===5)||e.atenciones&&e.atenciones.length>0&&e.atenciones[0].respuesta,x=n==="rating"||n==="view"&&e.idEstado===3&&(u==null?void 0:u.tipo)==="employee"&&((S=e.atenciones)==null?void 0:S[0])&&(!e.atenciones[0].calificacion||e.atenciones[0].calificacion===0);return d.jsx(QS,{children:d.jsxs(YS,{children:[d.jsx(TE,{ticket:e,onClose:f.handleClose}),d.jsxs(rE,{children:[d.jsx($E,{ticket:e}),d.jsx(PE,{ticket:e,mode:n,currentUser:u}),y&&d.jsx(zE,{ticket:e,usuarioQueAtendio:c}),x?d.jsx(Df,{ticket:e,mode:"rating",currentUser:u,modalState:f}):y?null:d.jsx(Df,{ticket:e,mode:n,currentUser:u,modalState:f})]}),d.jsx(UE,{mode:x?"rating":n,actionType:f.actionType,loading:l,onSubmit:v,respuesta:f.respuesta,selectedUser:f.selectedUser,onClose:f.handleClose,calificacion:f.calificacion})]})})},DE=()=>{const{user:e,logout:t}=Gn(),[r,n]=w.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[o,i]=w.useState({planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"}),[s,a]=w.useState("sinAtender"),[l,c]=w.useState({show:!1,mode:"view",ticket:null}),[u,f]=w.useState(null),[h,v]=w.useState(null),{asignaciones:y,loading:x,getResponsable:S}=Pg(),{tickets:m,loading:g,refetchTickets:p}=Bk(e,y),k=qk(m),{crearAtencion:_,delegarTicket:j,cancelarTicket:E,reasignarTicket:C,autoasignarTicket:A,loading:N}=Wk(e),{obtenerUsuarioQueAtendio:V}=Rg(),{plantas:ye}=Eg(),{tipos:Q}=jg(),{prioridades:je}=Cg();w.useEffect(()=>{e&&p(r)},[r,e,p]);const we=(M,ie)=>{i(Hr=>({...Hr,[M]:ie}))},re=()=>{n(o)},ce=()=>{const M={planta:"",tipoSolicitud:"",prioridad:"",empleado:"",sortBy:"fecha"};i(M),n(M)},R=M=>{c({show:!0,mode:"attend",ticket:M})},$=async M=>{c({show:!0,mode:"response",ticket:M});try{const ie=await V(M.idTicket,M.idEstado);f(ie)}catch(ie){console.error("Error obteniendo usuario que atendió:",ie),f(null)}},O=()=>{c({show:!1,mode:"view",ticket:null}),f(null)},L=async(M,ie="respond")=>{let Hr;try{ie==="respond"?Hr=await _(l.ticket.idTicket,e.id,M):ie==="cancel"&&(Hr=await E(l.ticket.idTicket,e.id,M)),Hr.success?(O(),p(r)):alert("Error al procesar la solicitud: "+Hr.error)}catch(Ug){alert("Error inesperado: "+Ug.message)}},U=async M=>{const ie=await j(l.ticket.idTicket,e.id,M);ie.success?(O(),p(r)):alert("Error al delegar el ticket: "+ie.error)},Ue=async M=>{if(!l.ticket)return;const ie=await C(l.ticket.idTicket,M);ie.success?(O(),p(r)):alert("Error al re-asignar el ticket: "+ie.error)},Ce=async()=>{if(!l.ticket)return;const M=await A(l.ticket.idTicket);M.success||alert("Error al autoasignarse el ticket: "+M.error)},F=M=>{v(h===M?null:M)},G=m.filter(M=>{if((e==null?void 0:e.idRol)===3||!s)return!0;switch(s){case"sinAtender":return M.idEstado===1;case"reasignados":return M.idEstado===2;case"atendidos":return M.idEstado===3;case"cerrados":return M.idEstado===4;case"cancelados":return M.idEstado===5;default:return!0}}),at=M=>{a(M)},Sr=M=>{switch(M){case 3:return"#E06363";case 2:return"#E0C563";case 1:return"#636EE0";default:return"#6c757d"}},$t=M=>et(M);return(e==null?void 0:e.idRol)===2&&x||g?d.jsx(Ff,{children:d.jsx(nS,{height:"50vh",size:"60px",text:"Cargando tickets y configuración..."})}):d.jsxs(Ff,{children:[d.jsxs(FE,{children:[d.jsx(oS,{user:e,onLogout:t}),(e==null?void 0:e.idRol)!==3&&d.jsx(lS,{stats:k,statsFilter:s,onStatsFilterChange:at}),d.jsx(mS,{tempFilters:o,onTempFilterChange:we,onApplyFilters:re,onClearFilters:ce,plantas:ye,tipos:Q,prioridades:je})]}),d.jsx(HS,{tickets:G,mode:"admin",onAtender:R,onVerRespuesta:$,getResponsable:S,formatDate:$t,getPriorityColor:Sr,expandedTicketId:h,onToggleExpand:F,currentUser:e}),d.jsx(Og,{ticket:l.ticket,isOpen:l.show,onClose:O,mode:l.mode,onSubmit:L,onDelegate:U,onReassign:Ue,onSelfAssign:Ce,currentUser:e,loading:N,usuarioQueAtendio:u})]})},Ff=b.div`
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
`,FE=b.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ME=e=>{const[t,r]=w.useState([]),[n,o]=w.useState(!1),[i,s]=w.useState(null);w.useEffect(()=>{(async()=>{if(e){o(!0),s(null);try{const{data:h,error:v}=await P.from("tickets").select(`
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
          `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(v)throw v;r(h||[])}catch(h){s(h.message),console.error("Error fetching employee tickets:",h)}finally{o(!1)}}})()},[e]);const a=async()=>{if(e){o(!0),s(null);try{const{data:f,error:h}=await P.from("tickets").select(`
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
        `).eq("idEmpleado",e).order("idTicket",{ascending:!1});if(h)throw h;r(f||[])}catch(f){s(f.message),console.error("Error fetching employee tickets:",f)}finally{o(!1)}}},l=async(f,h,v="")=>{try{o(!0),s(null);const{data:y,error:x}=await P.from("atenciones").select("*").eq("idTicket",f);if(x)throw new Error(`Error consultando atenciones: ${x.message}`);if(!y||y.length===0)throw new Error(`No se encontró ninguna atención previa para el ticket ${f}. El ticket debe haber sido atendido antes de poder calificarlo.`);const{error:S}=await P.from("tickets").update({idEstado:4}).eq("idTicket",f);if(S)throw new Error(`Error actualizando ticket: ${S.message}`);const{error:m}=await P.from("seguimientos").insert({idTicket:f,idEstado:4,fecha:new Date().toISOString()});if(m)throw new Error(`Error insertando seguimiento: ${m.message}`);const g=y[0].idAtencion,{data:p,error:k}=await P.from("atenciones").update({calificacion:h,comentario:v}).eq("idAtencion",g).select();if(k)throw new Error(`Error actualizando atención: ${k.message}`);if(!p||p.length===0)throw new Error("No se pudo actualizar la atención. El registro pudo haber sido modificado por otra transacción.");return await a(),{success:!0,message:"Calificación enviada correctamente"}}catch(y){const x=y.message||"Error desconocido al calificar ticket";return s(x),{success:!1,error:x}}finally{o(!1)}},c=t.filter(f=>!f.atenciones||f.atenciones.length===0),u=t.filter(f=>f.atenciones&&f.atenciones.length>0);return{tickets:t,pendingTickets:c,resolvedTickets:u,loading:n,error:i,refetch:a,calificarTicket:l}},BE=({employeeData:e,onTicketSubmitted:t,onBack:r})=>{const[n,o]=w.useState({idTipoSolicitud:"",descripcion:"",idPrioridad:""}),[i,s]=w.useState({}),{tipos:a,loading:l}=jg(),{prioridades:c,loading:u}=Cg(),{createTicket:f,loading:h}=ok(),v=(m,g)=>{o(p=>({...p,[m]:g})),i[m]&&s(p=>({...p,[m]:""}))},y=()=>{const m={};return n.idTipoSolicitud||(m.idTipoSolicitud="Debe seleccionar un tipo de solicitud"),n.descripcion.trim()||(m.descripcion="Debe proporcionar una descripción"),n.idPrioridad||(m.idPrioridad="Debe seleccionar una prioridad"),s(m),Object.keys(m).length===0},x=async m=>{if(m.preventDefault(),!y())return;const g={idEmpleado:e.idEmpleado,idTipoSolicitud:parseInt(n.idTipoSolicitud),descripcion:n.descripcion.trim(),idPrioridad:parseInt(n.idPrioridad)},p=await f(g);p.success&&t(p.ticket)};return l||u?d.jsx(Mf,{children:d.jsx(qE,{children:"Cargando formulario..."})}):d.jsx(Mf,{children:d.jsxs(QE,{children:[d.jsxs(YE,{children:[r&&d.jsx(JE,{onClick:r,type:"button",title:"Volver",children:"← Volver"}),d.jsx(XE,{children:"Crear Nueva Solicitud"})]}),d.jsxs(WE,{onSubmit:x,children:[d.jsxs(HE,{children:[d.jsxs(Bf,{children:[d.jsx(Ha,{children:"Tipo de Solicitud *"}),d.jsxs(qf,{value:n.idTipoSolicitud,onChange:m=>v("idTipoSolicitud",m.target.value),hasError:i.idTipoSolicitud,children:[d.jsx("option",{value:"",children:"Seleccione un tipo..."}),a.sort((m,g)=>m.idTipoSolicitud-g.idTipoSolicitud).map(m=>d.jsx("option",{value:m.idTipoSolicitud,children:m.tipoSolicitud},m.idTipoSolicitud))]}),i.idTipoSolicitud&&d.jsx(Va,{children:i.idTipoSolicitud})]}),d.jsxs(Bf,{children:[d.jsx(Ha,{children:"Prioridad *"}),d.jsxs(qf,{value:n.idPrioridad,onChange:m=>v("idPrioridad",m.target.value),hasError:i.idPrioridad,children:[d.jsx("option",{value:"",children:"Seleccione una prioridad..."}),c.map(m=>d.jsx("option",{value:m.idPrioridad,children:m.prioridad},m.idPrioridad))]}),i.idPrioridad&&d.jsx(Va,{children:i.idPrioridad})]})]}),d.jsxs(VE,{children:[d.jsx(Ha,{children:"Descripción del Problema *"}),d.jsx(GE,{rows:"3",placeholder:"Describe detalladamente tu solicitud o problema...",value:n.descripcion,onChange:m=>v("descripcion",m.target.value),hasError:i.descripcion}),i.descripcion&&d.jsx(Va,{children:i.descripcion})]}),d.jsx(KE,{type:"submit",disabled:h,children:h?"📋 Creando ticket...":"📋 Crear Ticket"})]})]})})},Mf=b.div`
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
`,qE=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-gray);
  font-size: 1.1rem;
`,WE=b.form`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,HE=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`,VE=b.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,Bf=b.div`
  display: flex;
  flex-direction: column;
`,Ha=b.label`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`,qf=b.select`
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
`,GE=b.textarea`
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
`,KE=b.button`
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
`,JE=b.button`
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
`,QE=b.div`
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
`,YE=b.div`
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
`,XE=b.h2`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`,ZE=({employeeData:e,onLogout:t})=>{var U,Ue,Ce;const{logout:r}=Gn(),[n,o]=w.useState("pending"),[i,s]=w.useState(!1),[a,l]=w.useState(null),[c,u]=w.useState(!0),[f,h]=w.useState(null),[v,y]=w.useState(!1),[x,S]=w.useState(null),[m,g]=w.useState(null),[p,k]=w.useState(!1),{buscarEmpleadoPorCodigo:_}=Tg(),{esquemas:j}=_g(),{getResponsable:E}=Pg(),{obtenerUsuarioQueAtendio:C}=Rg(),{pendingTickets:A,resolvedTickets:N,loading:V,error:ye,refetch:Q,calificarTicket:je}=ME(a==null?void 0:a.idEmpleado),we=c||V;w.useEffect(()=>{(async()=>{if(e!=null&&e.codigoEmpleado){u(!0);try{const G=await _(e.codigoEmpleado);G.success&&G.empleado?l(G.empleado):l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,correo:e.correo,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}catch(G){console.error("Error al buscar empleado:",G),l({idEmpleado:e.idEmpleado,codigoEmpleado:e.codigoEmpleado,nombre:e.empleado,correo:e.correo,idPlanta:e.idPlanta,plantas:{planta:e.planta}})}finally{u(!1)}}})()},[e,_]);const re=F=>{switch(F){case 1:return"#dc3545";case 2:return"#ffc107";case 3:return"#28a745";default:return"#6c757d"}},ce=F=>et(F),R=F=>{h(f===F?null:F)},$=async F=>{if(S(F),y(!0),g(null),F.idEstado===3||F.idEstado===5||F.atenciones&&F.atenciones.length>0)try{const G=await C(F.idTicket,F.idEstado);g(G)}catch(G){console.error("Error obteniendo usuario que atendió/canceló:",G),g(null)}},O=()=>{s(!1),Q()},L=()=>{r(),t&&t()};return i?d.jsx(BE,{employeeData:a||e,onTicketSubmitted:O,onLogout:L,onBack:()=>s(!1)}):d.jsxs(e_,{children:[d.jsxs(t_,{children:[d.jsxs(n_,{children:[d.jsxs(o_,{children:[d.jsx(s_,{children:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}),d.jsxs(a_,{children:["Código:"," ",(a==null?void 0:a.codigoEmpleado)||(e==null?void 0:e.codigoEmpleado)," ","| Planta:"," ",((U=a==null?void 0:a.plantas)==null?void 0:U.planta)||(e==null?void 0:e.planta)," | Esquema:"," ",((Ue=j.find(F=>F.idEsquemaPago===((a==null?void 0:a.idEsquemaPago)||(e==null?void 0:e.idEsquemaPago))))==null?void 0:Ue.esquemaPago)||"No configurado",((a==null?void 0:a.correo)||(e==null?void 0:e.correo))&&d.jsxs(d.Fragment,{children:[" | Correo: ",(a==null?void 0:a.correo)||(e==null?void 0:e.correo)]})]})]}),d.jsx(i_,{children:d.jsx(l_,{onClick:L,children:"Cerrar Sesión"})})]}),d.jsxs(c_,{children:[d.jsxs(Wf,{$active:n==="pending",onClick:()=>{o("pending"),h(null)},children:["Tickets Pendientes (",A.length,")"]}),d.jsxs(Wf,{$active:n==="resolved",onClick:()=>{o("resolved"),h(null)},children:["Tickets Resueltos (",N.length,")"]})]})]}),d.jsx(r_,{children:d.jsx(u_,{children:d.jsx(d_,{children:we?d.jsx(p_,{children:"Cargando tickets..."}):ye?d.jsxs(m_,{children:["Error al cargar tickets: ",ye]}):d.jsx(d.Fragment,{children:n==="pending"?d.jsx(d.Fragment,{children:A.length===0?d.jsxs(Hf,{children:[d.jsx(Vf,{children:"📋"}),d.jsx(Gf,{children:"No tienes tickets pendientes"}),d.jsx(Kf,{children:"Aquí aparecerán los tickets que hayas creado y aún no han sido atendidos."})]}):A.map(F=>d.jsx(uc,{ticket:F,mode:"employee",formatDate:ce,getPriorityColor:re,getResponsable:E,isResolved:!1,isExpanded:f===F.idTicket,onToggleExpand:R,onShowDetails:$},F.idTicket))}):d.jsx(d.Fragment,{children:N.length===0?d.jsxs(Hf,{children:[d.jsx(Vf,{children:"✅"}),d.jsx(Gf,{children:"No tienes tickets resueltos"}),d.jsx(Kf,{children:"Aquí aparecerán los tickets que hayan sido atendidos."})]}):N.map(F=>d.jsx(uc,{ticket:F,mode:"employee",formatDate:ce,getPriorityColor:re,getResponsable:E,isResolved:!0,isExpanded:f===F.idTicket,onToggleExpand:R,onShowDetails:$},F.idTicket))})})})})}),d.jsx(f_,{children:d.jsx(h_,{onClick:()=>s(!0),children:"+ Crear Nuevo Ticket"})}),d.jsx(Og,{ticket:x,isOpen:v,onClose:()=>y(!1),mode:(x==null?void 0:x.idEstado)===3&&((Ce=x==null?void 0:x.atenciones)!=null&&Ce[0])&&(!x.atenciones[0].calificacion||x.atenciones[0].calificacion===0)?"rating":"view",onSubmit:async F=>{if(F.calificacion){k(!0);try{const G=await je(x.idTicket,F.calificacion,F.comentario||"");G.success?(alert("Calificación enviada exitosamente. El ticket ha sido cerrado."),y(!1)):alert(`Error al enviar la calificación: ${G.error}`)}catch(G){console.error("Error enviando calificación:",G),alert("Error al enviar la calificación. Inténtalo de nuevo.")}finally{k(!1)}}},loading:p,usuarioQueAtendio:m,currentUser:{tipo:"employee",idUsuario:(a==null?void 0:a.idEmpleado)||(e==null?void 0:e.idEmpleado),nombre:(a==null?void 0:a.nombre)||(e==null?void 0:e.empleado)}})]})},e_=b.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
`,t_=b.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`,r_=b.div`
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
`,n_=b.header`
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
`,o_=b.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,i_=b.div`
  display: flex;
  align-items: center;
`,s_=b.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
`,a_=b.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,l_=b.button`
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
`,c_=b.div`
  display: flex;
  background: #e9ecef;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`,u_=b.div`
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 30vw;
`,Wf=b.button`
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
`,d_=b.section`
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
`,f_=b.div`
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
`,h_=b.button`
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
`,p_=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  min-height: 300px;
`,m_=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
  min-height: 300px;
`,Hf=b.div`
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
`,Gf=b.h3`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`,Kf=b.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`,g_=()=>{const{token:e}=ym(),t=qn(),[r,n]=w.useState(null),[o,i]=w.useState(!0),[s,a]=w.useState(""),[l,c]=w.useState(null),[u,f]=w.useState(!1),[h,v]=w.useState("responder"),[y,x]=w.useState(""),[S,m]=w.useState([]),[g,p]=w.useState(!1),[k,_]=w.useState(""),[j,E]=w.useState(!1);return w.useEffect(()=>{(async()=>{try{const{data:A,error:N}=await P.from("usuarios").select("idUsuario, nombre, correo").eq("idRol",3).order("nombre");if(N)throw N;m(A||[])}catch(A){console.error("Error cargando usuarios:",A)}})()},[]),w.useEffect(()=>{e&&(async()=>{if(!e){c("Token no encontrado en la URL"),i(!1);return}try{i(!0);const A=await v_(e);n(A)}catch(A){console.error("Error cargando ticket:",A),c(A.message)}finally{i(!1)}})()},[e]),{ticket:r,loading:o,response:s,setResponse:a,error:l,setError:c,success:u,setSuccess:f,actionType:h,setActionType:v,selectedUser:y,setSelectedUser:x,users:S,isSubmitting:g,setIsSubmitting:p,responseMessage:k,setResponseMessage:_,isSubmitted:j,setIsSubmitted:E,token:e,navigate:t}},v_=async e=>{const{data:t,error:r}=await P.from("ticket_tokens").select("*").eq("token",e).eq("bActivo",!0).gt("fecha_expiracion",new Date().toISOString()).single();if(r||!t)throw(r==null?void 0:r.code)==="PGRST116"?new Error("Enlace inválido, expirado o ya utilizado. Este ticket puede haber sido reasignado a otro usuario."):new Error("Enlace inválido, expirado o ya utilizado");const n=t.idTicket||t.id_ticket,{data:o,error:i}=await P.from("tickets").select(`
      *,
      empleados (nombre, codigoEmpleado, idPlanta, plantas (planta)),
      tiposSolicitud (tipoSolicitud),
      prioridades (prioridad),
      estados (estado)
    `).eq("idTicket",n).single();if(i||!o)throw new Error("Ticket no encontrado");const s=t.idUsuario||t.id_usuario,{data:a}=await P.from("usuarios").select("idUsuario, nombre, correo, idRol").eq("idUsuario",s).single(),l={...t,tickets:o,usuarios:a};if(l.tickets.idEstado!==1&&l.tickets.idEstado!==2)throw new Error("Este ticket ya no está disponible para responder");const{data:c,error:u}=await P.from("seguimientos").select("fecha").eq("idTicket",l.tickets.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();return c&&!u&&(l.tickets.fechaCreacion=c.fecha),l},y_=(e,t,r)=>({handleSubmitResponse:async(s,a,l,c)=>{if(!s.trim()){l("Por favor escribe una respuesta");return}try{a(!0),l(null);const{error:u}=await P.from("atenciones").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,respuesta:s.trim()});if(u)throw new Error(`Error creando atención: ${u.message}`);const{error:f}=await P.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:3});if(f)throw new Error(`Error creando seguimiento: ${f.message}`);const{error:h}=await P.from("tickets").update({idEstado:3}).eq("idTicket",e.tickets.idTicket);if(h)throw new Error(`Error actualizando ticket: ${h.message}`);const{error:v}=await P.from("ticket_tokens").update({bActivo:!1}).eq("token",t);if(v)throw new Error(`Error desactivando token: ${v.message}`);c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){console.error("Error enviando respuesta:",u),l(u.message)}finally{a(!1)}},handleReasignTicket:async(s,a,l,c)=>{if(!s){alert("Seleccione un usuario para reasignar");return}try{a(!0);const{error:u}=await P.from("ticket_tokens").update({bActivo:!1}).eq("token",t);if(u)throw new Error(`Error desactivando token: ${u.message}`);const{data:f,error:h}=await P.from("tickets").select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `).eq("idTicket",e.tickets.idTicket).single();if(h)throw new Error(`Error obteniendo ticket: ${h.message}`);const{data:v,error:y}=await P.from("usuarios").select("idUsuario, nombre, correo").eq("idUsuario",s).single();if(y)throw new Error(`Error obteniendo usuario: ${y.message}`);const{error:x}=await P.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:2});if(x)throw new Error(`Error creando seguimiento: ${x.message}`);const{error:S}=await P.from("tickets").update({idEstado:2}).eq("idTicket",e.tickets.idTicket);if(S)throw new Error(`Error actualizando ticket: ${S.message}`);const m=crypto.randomUUID(),g=new Date;g.setDate(g.getDate()+7);const{error:p}=await P.from("ticket_tokens").insert({token:m,idTicket:e.tickets.idTicket,idUsuario:s,fecha_expiracion:g.toISOString(),bActivo:!0});if(p)throw new Error(`Error creando token: ${p.message}`);try{const _=`https://andresdramos.github.io/ventanilla/ticket/${m}`,{data:j,error:E}=await P.from("seguimientos").select("fecha").eq("idTicket",f.idTicket).eq("idEstado",1).order("fecha",{ascending:!0}).limit(1).single();let C="Fecha no disponible";j&&!E&&(C=new Date(j.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}));const A=kg({ticket:f,usuario:v,directLink:_,fechaCreacion:C,tipo:"reasignado"}),ye=await(await fetch("https://ventanilla-ezi.netlify.app/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({destinatario:v.correo,asunto:`Ticket Reasignado para Atención - #${f.idTicket}`,mensaje:A})})).json();ye.success||console.warn("⚠️ Email no enviado en reasignación:",ye.error)}catch(k){console.warn("⚠️ Error en sistema de notificaciones de reasignación:",k.message)}l("Ticket reasignado exitosamente. Se ha enviado una notificación al usuario asignado."),c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){throw console.error("Error reasignando ticket:",u),new Error("Error al reasignar el ticket: "+u.message)}finally{a(!1)}},handleCancelTicket:async(s,a,l,c)=>{if(!s.trim()){alert("Debe ingresar el motivo de cancelación");return}try{a(!0),await P.from("atenciones").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,respuesta:s.trim()}),await P.from("seguimientos").insert({idTicket:e.tickets.idTicket,idUsuario:e.idUsuario,idEstado:5}),await P.from("tickets").update({idEstado:5}).eq("idTicket",e.tickets.idTicket),await P.from("ticket_tokens").update({bActivo:!1}).eq("token",t),l("Ticket cancelado exitosamente"),c(!0),setTimeout(()=>{window.close(),r("/")},3e3)}catch(u){throw console.error("Error cancelando ticket:",u),new Error("Error al cancelar el ticket: "+u.message)}finally{a(!1)}}}),ar=b.div`
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
`,w_=b.div`
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
`,x_=b.div`
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
`,b_=b.div`
  flex: 1;
`,k_=b.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Jf=b.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,S_=b.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`,E_=b.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,__=b.div`
  margin-bottom: 0.5rem;
`,j_=b.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`,C_=b.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  display: inline;
`,T_=b.h4`
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
`,$_=b.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`,P_=b.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,R_=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,Ga=b.button`
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
`,Qf=b.textarea`
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
`,Yf=b.div`
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
`;const A_=b.div`
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
`,I_=b.div`
  padding: 20px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`,O_=b.button`
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
`,L_=b.p`
  text-align: center;
  margin: 10px 0 0 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,N_=b.div`
  background: #e5e7eb;
  padding: 15px 20px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`,z_=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`,U_=b.p`
  margin: 0;
  color: #374151;
  font-size: 13px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,D_=b.button`
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
`,F_=b.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`,M_=b.div`
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
`,B_=b.div`
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
`,q_=b.div`
  font-size: 64px;
  margin-bottom: 20px;
`,W_=b.h2`
  color: #dc2626;
  margin: 0 0 15px 0;
  font-size: 24px;
`,H_=b.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,V_=b.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,G_=b.div`
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
`,K_=b.div`
  font-size: 64px;
  margin-bottom: 20px;
`,J_=b.h2`
  color: #059669;
  margin: 0 0 15px 0;
  font-size: 24px;
`,Q_=b.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`,Y_=b.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`,X_=({ticket:e})=>{const{adminAutoLogin:t}=Gn(),r=async()=>{const n=e.usuarios;if(n.idRol===2)try{(await t(n)).success?setTimeout(()=>{window.open("/ventanilla/admin","_blank")},200):(console.warn("⚠️ Auto-login falló, abriendo sin autenticación"),window.open("/ventanilla/admin","_blank"))}catch(o){console.error("❌ Error en auto-login:",o),window.open("/ventanilla/admin","_blank")}else window.open("/ventanilla/admin","_blank")};return d.jsxs(x_,{children:[d.jsx(b_,{children:d.jsxs(k_,{children:["Ticket #",e.tickets.idTicket]})}),d.jsx(D_,{onClick:r,title:"Ir al panel de administrador",children:"Panel Admin"})]})},Z_=({ticket:e})=>{var t,r,n,o,i;return d.jsxs(d.Fragment,{children:[d.jsxs(Jf,{children:[d.jsx(S_,{children:d.jsxs(E_,{children:[((t=e.tickets.empleados)==null?void 0:t.nombre)||"No especificado"," ","(",d.jsx("span",{children:((r=e.tickets.empleados)==null?void 0:r.codigoEmpleado)||"No especificado"}),") - ",((o=(n=e.tickets.empleados)==null?void 0:n.plantas)==null?void 0:o.planta)||"No especificada"]})}),d.jsxs(__,{children:[d.jsx(j_,{children:"Fecha de generación:"})," ",d.jsx(C_,{children:et(e.tickets.fechaCreacion)})]}),d.jsxs(T_,{children:["Tipo: ",((i=e.tickets.tiposSolicitud)==null?void 0:i.tipoSolicitud)||"No especificado"]})]}),d.jsxs(Jf,{children:[d.jsx(Gi,{children:"Descripción del Problema"}),d.jsx($_,{children:e.tickets.descripcion})]})]})},ej=(e,t)=>{if(t)return"Procesando...";switch(e){case"responder":return"Enviar Respuesta y Cerrar Ticket";case"reasignar":return"Reasignar Ticket";case"cancelar":return"Cancelar Ticket";default:return"Procesar"}},tj=e=>{switch(e){case"responder":return"Una vez enviada la respuesta, el ticket se marcará como atendido.";case"reasignar":return"El ticket será reasignado al usuario seleccionado.";case"cancelar":return"El ticket será marcado como cancelado con el motivo especificado.";default:return""}},rj=e=>{switch(e){case"reasignar":return"¡Ticket Reasignado!";case"cancelar":return"¡Ticket Cancelado!";default:return"¡Respuesta Enviada!"}},nj=({ticketData:e,actions:t})=>{var x;const{actionType:r,setActionType:n,response:o,setResponse:i,selectedUser:s,setSelectedUser:a,isSubmitting:l,error:c,ticket:u}=e,f=(x=u==null?void 0:u.usuarios)==null?void 0:x.idRol,v=(()=>{const S=["responder"];return f===2?["responder","reasignar","cancelar"]:f===3?["responder"]:S})();w.useEffect(()=>{v.includes(r)||n(v[0]||"responder")},[r,v,n]);const y=async()=>{try{switch(r){case"responder":await t.handleSubmitResponse(o,e.setIsSubmitting,e.setError,e.setSuccess);break;case"reasignar":await t.handleReasignTicket(s,e.setIsSubmitting,e.setResponseMessage,e.setIsSubmitted);break;case"cancelar":await t.handleCancelTicket(o,e.setIsSubmitting,e.setResponseMessage,e.setIsSubmitted);break;default:throw new Error("Acción no válida")}}catch(S){e.setError(S.message)}};return d.jsxs(d.Fragment,{children:[d.jsxs(P_,{children:[d.jsxs(R_,{children:[v.includes("responder")&&d.jsx(Ga,{$selected:r==="responder",onClick:()=>n("responder"),children:"Responder"}),v.includes("reasignar")&&d.jsx(Ga,{$selected:r==="reasignar",onClick:()=>n("reasignar"),children:"Reasignar"}),v.includes("cancelar")&&d.jsx(Ga,{$selected:r==="cancelar",onClick:()=>n("cancelar"),children:"Cancelar"})]}),d.jsx(oj,{actionType:r,response:o,setResponse:i,selectedUser:s,setSelectedUser:a,isSubmitting:l})]}),c&&d.jsxs(A_,{children:["❌ ",c]}),d.jsxs(I_,{children:[d.jsx(O_,{onClick:y,disabled:l||r==="responder"&&!o.trim()||r==="reasignar"&&!s||r==="cancelar"&&!o.trim(),children:ej(r,l)}),d.jsx(L_,{children:tj(r)})]})]})},oj=({actionType:e,response:t,setResponse:r,selectedUser:n,setSelectedUser:o,isSubmitting:i})=>{switch(e){case"responder":return d.jsxs("div",{children:[d.jsx(Gi,{children:"Tu Respuesta"}),d.jsx(Qf,{value:t,onChange:s=>r(s.target.value),placeholder:"Escribe aquí tu respuesta o solución al problema...",rows:4,disabled:i}),d.jsxs(Yf,{$isNearLimit:t.length>400,children:[t.length,"/500 caracteres"]})]});case"reasignar":return d.jsxs("div",{children:[d.jsx(Gi,{children:"Reasignar a"}),d.jsx(cc,{selectedUser:n,onUserSelect:o,placeholder:"Seleccionar usuario para reasignación...",excludeRoles:[1],disabled:i})]});case"cancelar":return d.jsxs("div",{children:[d.jsx(Gi,{children:"Motivo de cancelación"}),d.jsx(Qf,{value:t,onChange:s=>r(s.target.value),placeholder:"Describe el motivo por el cual se cancela este ticket...",rows:4,disabled:i}),d.jsxs(Yf,{$isNearLimit:t.length>400,children:[t.length,"/500 caracteres"]})]});default:return null}},ij=({ticket:e})=>d.jsx(N_,{children:d.jsx(z_,{children:d.jsxs(U_,{children:["Respondiendo como: ",d.jsx("strong",{children:e.usuarios.nombre})," (",e.usuarios.correo,")"]})})}),sj=({ticketData:e,actions:t})=>d.jsxs(w_,{children:[d.jsx(X_,{ticket:e.ticket}),d.jsx(Z_,{ticket:e.ticket}),d.jsx(nj,{ticketData:e,actions:t}),d.jsx(ij,{ticket:e.ticket})]}),Lg=()=>d.jsxs(F_,{children:[d.jsx(M_,{}),d.jsx("p",{children:"Cargando ticket..."})]}),Ng=({error:e})=>d.jsxs(B_,{children:[d.jsx(q_,{children:"❌"}),d.jsx(W_,{children:"Enlace No Válido"}),d.jsx(H_,{children:e}),d.jsx(V_,{children:"Este enlace puede haber expirado, ya fue utilizado, o el ticket ya no está disponible para responder."})]}),zg=({actionType:e,responseMessage:t})=>{const r=()=>t||"Tu respuesta ha sido registrada exitosamente. El ticket ha sido marcado como atendido.";return d.jsxs(G_,{children:[d.jsx(K_,{children:"✅"}),d.jsx(J_,{children:rj(e)}),d.jsx(Q_,{children:r()}),d.jsx(Y_,{children:"Esta ventana se cerrará automáticamente en unos segundos..."})]})},aj=()=>{const e=g_(),t=y_(e.ticket,e.token,e.navigate),{loading:r,error:n,success:o,isSubmitted:i,actionType:s,responseMessage:a}=e;return r?d.jsx(ar,{children:d.jsx(Lg,{})}):n?d.jsx(ar,{children:d.jsx(Ng,{error:n})}):o||i?d.jsx(ar,{children:d.jsx(zg,{actionType:s,responseMessage:a})}):d.jsx(ar,{children:d.jsx(sj,{ticketData:e,actions:t})})},lj=()=>{const{token:e}=ym(),t=qn(),[r,n]=w.useState(!0),[o,i]=w.useState(null),[s,a]=w.useState(!1),[l,c]=w.useState(!1),[u,f]=w.useState(""),[h,v]=w.useState(null),[y,x]=w.useState(null),[S,m]=w.useState(null),[g,p]=w.useState(""),[k,_]=w.useState(""),[j,E]=w.useState(0),[C,A]=w.useState(""),[N,V]=w.useState(!1);return w.useEffect(()=>{(async()=>{var je,we;if(!e){i("Token de acceso no proporcionado"),n(!1);return}try{n(!0);const re=await ek(e);if(!re.idEmpleado||re.idUsuario){i("Este enlace es para administradores. Los empleados deben usar el enlace de respuesta."),n(!1);return}if(!re.tickets||!re.empleados){i("No se pudieron cargar los datos del ticket."),n(!1);return}v(re.tickets),x(re.empleados);const ce=(je=re.tickets.atenciones)==null?void 0:je[0];if(!ce)throw new Error("No se encontró respuesta para este ticket");m(ce),p(((we=ce.usuarios)==null?void 0:we.nombre)||"Administrador");const{data:R,error:$}=await P.from("seguimientos").select("fecha").eq("idTicket",re.tickets.idTicket).eq("idEstado",3).order("fecha",{ascending:!1}).limit(1).single();R&&!$&&_(new Date(R.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),ce.calificacion!==null&&ce.calificacion!==void 0&&(E(ce.calificacion),A(ce.comentario||""),c(!0),f("Ya has calificado este ticket anteriormente."))}catch(re){console.error("Error cargando datos del ticket:",re),i(re.message||"Error al cargar la información del ticket")}finally{n(!1)}})()},[e]),{loading:r,error:o,success:s,isSubmitted:l,responseMessage:u,ticket:h,empleado:y,atencion:S,adminNombre:g,fechaRespuesta:k,token:e,calificacion:j,comentario:C,submittingRating:N,submitRating:async(Q,je="")=>{if(!h||!y||!S){i("Datos del ticket no disponibles");return}try{V(!0),i(null);const{error:we}=await P.from("atenciones").update({calificacion:Q,comentario:je.trim()||null,fechaCalificacion:new Date().toISOString()}).eq("idTicket",h.idTicket);if(we)throw new Error("Error al guardar la calificación: "+we.message);await tk(e),E(Q),A(je),a(!0),c(!0),f(`¡Gracias por calificar nuestro servicio con ${Q} ${Q===1?"estrella":"estrellas"}!`),console.log("✅ Calificación guardada exitosamente")}catch(we){console.error("Error enviando calificación:",we),i(we.message||"Error al enviar la calificación")}finally{V(!1)}},setCalificacion:E,setComentario:A,navigate:t}},cj=b.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
  overflow: hidden;
`,uj=b.div`
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: white;
  padding: 30px;
  text-align: center;

  h1 {
    margin: 0 0 10px 0;
    font-size: 28px;
    font-weight: 600;
  }

  p {
    margin: 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,dj=b.div`
  padding: 30px;
`,fj=b.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;

  h3 {
    margin: 0 0 16px 0;
    color: #1e293b;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,hj=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;

  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;

    .label {
      font-weight: 500;
      color: #64748b;
    }

    .value {
      color: #1e293b;
      font-weight: 600;
    }
  }
`,pj=b.div`
  margin-top: 16px;

  .label {
    font-weight: 500;
    color: #64748b;
    margin-bottom: 8px;
  }

  .text {
    color: #374151;
    line-height: 1.6;
    padding: 12px;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-style: italic;
  }
`,mj=b.div`
  background: #f0f9ff;
  border: 2px solid #0284c7;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;

  h3 {
    margin: 0 0 20px 0;
    color: #0c4a6e;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,gj=b.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #0284c7;
  margin-bottom: 16px;

  p {
    margin: 0;
    color: #374151;
    line-height: 1.6;
    font-size: 16px;
  }
`,vj=b.div`
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  border-top: 1px solid #bae6fd;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }

    .icon {
      color: #0369a1;
    }

    .label {
      font-weight: 500;
      color: #0369a1;
    }

    .value {
      color: #0c4a6e;
    }
  }
`,yj=b.div`
  background: #fefefe;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    text-align: center;
  }

  .rating-description {
    text-align: center;
    color: #6b7280;
    margin-bottom: 24px;
    line-height: 1.6;
  }
`,wj=b.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;

  .star {
    font-size: 32px;
    color: #d1d5db;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover,
    &.filled {
      color: #fbbf24;
      transform: scale(1.1);
    }

    &:hover {
      filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));
    }

    &.disabled {
      cursor: default;
      
      &:hover {
        transform: none;
        filter: none;
      }
    }
  }
`,xj=b.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  font-size: 12px;
  color: #9ca3af;

  span {
    text-align: center;
    max-width: 60px;
  }
`,bj=b.div`
  margin-top: 24px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    resize: vertical;
    font-family: inherit;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #0284c7;
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
    }

    &:disabled {
      background-color: #f9fafb;
      color: #9ca3af;
    }
  }

  .char-count {
    text-align: right;
    font-size: 12px;
    color: #9ca3af;
    margin-top: 4px;
  }
`,kj=b.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
`,Sj=b.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &.primary {
    background: #0284c7;
    color: white;

    &:hover:not(:disabled) {
      background: #0369a1;
      transform: translateY(-1px);
    }

    &:disabled {
      background: #9ca3af;
      cursor: not-allowed;
    }
  }

  &.secondary {
    background: #f8fafc;
    color: #64748b;
    border-color: #e2e8f0;

    &:hover:not(:disabled) {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`,Ej=b.div`
  text-align: center;
  padding: 20px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  color: #166534;

  .icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    opacity: 0.8;
  }
`,_j=({responseData:e})=>{var k,_;const{ticket:t,empleado:r,atencion:n,adminNombre:o,fechaRespuesta:i,calificacion:s,comentario:a,isSubmitted:l,submittingRating:c,submitRating:u}=e,[f,h]=w.useState(s||0),[v,y]=w.useState(a||"");if(!t||!r||!n)return null;const x=t.fechaCreacion?new Date(t.fechaCreacion).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric"}):"No disponible",S=((k=t.prioridades)==null?void 0:k.prioridad)||"Normal",m=((_=t.tiposSolicitud)==null?void 0:_.tipoSolicitud)||"Consulta General",g=()=>{if(f===0){alert("Por favor selecciona una calificación de 1 a 3 estrellas");return}u(f,v)},p=()=>{const j=[];for(let E=1;E<=3;E++)j.push(d.jsx("span",{className:`star ${E<=f?"filled":""} ${l?"disabled":""}`,onClick:l?void 0:()=>h(E),children:"⭐"},E));return j};return d.jsxs(cj,{children:[d.jsxs(uj,{children:[d.jsx("h1",{children:"Tu Ticket Ha Sido Respondido"}),d.jsxs("p",{children:["Hola ",r.nombre,", hemos atendido tu solicitud"]})]}),d.jsxs(dj,{children:[d.jsxs(fj,{children:[d.jsx("h3",{children:"🎫 Información del Ticket"}),d.jsxs(hj,{children:[d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"label",children:"Ticket:"}),d.jsxs("span",{className:"value",children:["#",t.idTicket]})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"label",children:"Fecha creación:"}),d.jsx("span",{className:"value",children:x})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"label",children:"Prioridad:"}),d.jsx("span",{className:"value",children:S})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"label",children:"Tipo:"}),d.jsx("span",{className:"value",children:m})]})]}),d.jsxs(pj,{children:[d.jsx("div",{className:"label",children:"Tu solicitud original:"}),d.jsxs("div",{className:"text",children:["“",t.descripcion,"”"]})]})]}),d.jsxs(mj,{children:[d.jsx("h3",{children:"📋 Respuesta del Equipo"}),d.jsx(gj,{children:d.jsx("p",{children:n.respuesta})}),d.jsxs(vj,{children:[d.jsxs("div",{className:"meta-item",children:[d.jsx("span",{className:"icon",children:"👤"}),d.jsx("span",{className:"label",children:"Atendido por:"}),d.jsx("span",{className:"value",children:o})]}),d.jsxs("div",{className:"meta-item",children:[d.jsx("span",{className:"icon",children:"📅"}),d.jsx("span",{className:"label",children:"Fecha de respuesta:"}),d.jsx("span",{className:"value",children:i})]})]})]}),d.jsxs(yj,{children:[d.jsx("h3",{children:"Califica Nuestro Servicio"}),l?d.jsxs(Ej,{children:[d.jsx("div",{className:"icon",children:"✅"}),d.jsx("h4",{children:"¡Gracias por tu calificación!"}),d.jsxs("p",{children:["Calificaste nuestro servicio con ",s," ",s===1?"estrella":"estrellas",".",a&&d.jsxs(d.Fragment,{children:[d.jsx("br",{}),d.jsx("strong",{children:"Tu comentario:"})," “",a,"”"]})]})]}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"rating-description",children:"¿Cómo fue la atención que recibiste? Tu opinión nos ayuda a mejorar."}),d.jsx(wj,{children:p()}),d.jsxs(xj,{children:[d.jsx("span",{children:"Necesita mejorar"}),d.jsx("span",{children:"Buena atención"}),d.jsx("span",{children:"Excelente servicio"})]}),d.jsxs(bj,{children:[d.jsx("label",{htmlFor:"comment",children:"Comentarios adicionales (opcional):"}),d.jsx("textarea",{id:"comment",value:v,onChange:j=>y(j.target.value),placeholder:"Cuéntanos más sobre tu experiencia...",maxLength:500,disabled:l}),d.jsxs("div",{className:"char-count",children:[v.length,"/500"]})]}),d.jsx(kj,{children:d.jsx(Sj,{className:"primary",onClick:g,disabled:c||f===0,children:c?"Enviando...":"Enviar Calificación"})})]})]})]})]})},jj=()=>{const e=lj(),{loading:t,error:r,success:n,isSubmitted:o,responseMessage:i}=e;return t?d.jsx(ar,{children:d.jsx(Lg,{})}):r?d.jsx(ar,{children:d.jsx(Ng,{error:r})}):n||o?d.jsx(ar,{children:d.jsx(zg,{actionType:"calificacion",responseMessage:i||"¡Gracias por tu calificación! Tu opinión nos ayuda a mejorar nuestro servicio."})}):d.jsx(ar,{children:d.jsx(_j,{responseData:e})})},Cj=()=>{const{user:e,employeeData:t,initializing:r}=Gn(),n=Ht();return r?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.2rem"},children:"Cargando..."}):d.jsxs(nw,{children:[d.jsx(Yt,{path:"/ticket/:token",element:d.jsx(aj,{})}),d.jsx(Yt,{path:"/respuesta/:token",element:d.jsx(jj,{})}),d.jsx(Yt,{path:"/login",element:d.jsx(Ok,{})}),d.jsx(Yt,{path:"/admin/*",element:e&&e.type==="admin"?d.jsx(DE,{}):d.jsx(Gr,{to:"/login",state:{from:n},replace:!0})}),d.jsx(Yt,{path:"/employee/*",element:t&&t.type==="employee"?d.jsx(ZE,{employeeData:t}):d.jsx(Gr,{to:"/login",state:{from:n},replace:!0})}),d.jsx(Yt,{path:"/",element:e&&e.type==="admin"?d.jsx(Gr,{to:"/admin",replace:!0}):t&&t.type==="employee"?d.jsx(Gr,{to:"/employee",replace:!0}):d.jsx(Gr,{to:"/login",replace:!0})}),d.jsx(Yt,{path:"*",element:d.jsx(Gr,{to:"/",replace:!0})})]})};function Tj(){return d.jsxs(jw,{basename:"/ventanilla",children:[d.jsx(zx,{}),d.jsx(Xb,{children:d.jsx(Cj,{})})]})}Ka.createRoot(document.getElementById("root")).render(d.jsx(jt.StrictMode,{children:d.jsx(Tj,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}