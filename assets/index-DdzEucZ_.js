(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function sx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Jh={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function EM(){if(k_)return el;k_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return el.Fragment=e,el.jsx=a,el.jsxs=a,el}var q_;function TM(){return q_||(q_=1,Jh.exports=EM()),Jh.exports}var wt=TM(),$h={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function bM(){if(Y_)return ae;Y_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(R){return R===null||typeof R!="object"?null:(R=M&&R[M]||R["@@iterator"],typeof R=="function"?R:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function z(R,k,pt){this.props=R,this.context=k,this.refs=x,this.updater=pt||w}z.prototype.isReactComponent={},z.prototype.setState=function(R,k){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,k,"setState")},z.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function O(){}O.prototype=z.prototype;function U(R,k,pt){this.props=R,this.context=k,this.refs=x,this.updater=pt||w}var nt=U.prototype=new O;nt.constructor=U,S(nt,z.prototype),nt.isPureReactComponent=!0;var F=Array.isArray;function P(){}var G={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function C(R,k,pt){var ot=pt.ref;return{$$typeof:o,type:R,key:k,ref:ot!==void 0?ot:null,props:pt}}function I(R,k){return C(R.type,k,R.props)}function lt(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function rt(R){var k={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(pt){return k[pt]})}var gt=/\/+/g;function ct(R,k){return typeof R=="object"&&R!==null&&R.key!=null?rt(""+R.key):k.toString(36)}function q(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(P,P):(R.status="pending",R.then(function(k){R.status==="pending"&&(R.status="fulfilled",R.value=k)},function(k){R.status==="pending"&&(R.status="rejected",R.reason=k)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function it(R,k,pt,ot,Tt){var Rt=typeof R;(Rt==="undefined"||Rt==="boolean")&&(R=null);var It=!1;if(R===null)It=!0;else switch(Rt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(R.$$typeof){case o:case e:It=!0;break;case v:return It=R._init,it(It(R._payload),k,pt,ot,Tt)}}if(It)return Tt=Tt(R),It=ot===""?"."+ct(R,0):ot,F(Tt)?(pt="",It!=null&&(pt=It.replace(gt,"$&/")+"/"),it(Tt,k,pt,"",function(be){return be})):Tt!=null&&(lt(Tt)&&(Tt=I(Tt,pt+(Tt.key==null||R&&R.key===Tt.key?"":(""+Tt.key).replace(gt,"$&/")+"/")+It)),k.push(Tt)),1;It=0;var Et=ot===""?".":ot+":";if(F(R))for(var bt=0;bt<R.length;bt++)ot=R[bt],Rt=Et+ct(ot,bt),It+=it(ot,k,pt,Rt,Tt);else if(bt=b(R),typeof bt=="function")for(R=bt.call(R),bt=0;!(ot=R.next()).done;)ot=ot.value,Rt=Et+ct(ot,bt++),It+=it(ot,k,pt,Rt,Tt);else if(Rt==="object"){if(typeof R.then=="function")return it(q(R),k,pt,ot,Tt);throw k=String(R),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return It}function K(R,k,pt){if(R==null)return R;var ot=[],Tt=0;return it(R,ot,"","",function(Rt){return k.call(pt,Rt,Tt++)}),ot}function xt(R){if(R._status===-1){var k=R._result,pt=k();pt.then(function(ot){(R._status===0||R._status===-1)&&(R._status=1,R._result=ot,pt.status===void 0&&(pt.status="fulfilled",pt.value=ot))},function(ot){(R._status===0||R._status===-1)&&(R._status=2,R._result=ot,pt.status===void 0&&(pt.status="rejected",pt.reason=ot))}),R._status===-1&&(R._status=0,R._result=pt)}if(R._status===1)return R._result.default;throw R._result}var yt=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function Dt(R){var k=G.T,pt={};pt.types=k!==null?k.types:null,G.T=pt;try{var ot=R(),Tt=G.S;Tt!==null&&Tt(pt,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(P,yt)}catch(Rt){yt(Rt)}finally{k!==null&&pt.types!==null&&(k.types=pt.types),G.T=k}}function ee(R){var k=G.T;if(k!==null){var pt=k.types;pt===null?k.types=[R]:pt.indexOf(R)===-1&&pt.push(R)}else Dt(ee.bind(null,R))}var ge={map:K,forEach:function(R,k,pt){K(R,function(){k.apply(this,arguments)},pt)},count:function(R){var k=0;return K(R,function(){k++}),k},toArray:function(R){return K(R,function(k){return k})||[]},only:function(R){if(!lt(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ae.Activity=g,ae.Children=ge,ae.Component=z,ae.Fragment=a,ae.Profiler=u,ae.PureComponent=U,ae.StrictMode=s,ae.Suspense=p,ae.ViewTransition=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ae.__COMPILER_RUNTIME={__proto__:null,c:function(R){return G.H.useMemoCache(R)}},ae.addTransitionType=ee,ae.cache=function(R){return function(){return R.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(R,k,pt){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ot=S({},R.props),Tt=R.key;if(k!=null)for(Rt in k.key!==void 0&&(Tt=""+k.key),k)!N.call(k,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&k.ref===void 0||(ot[Rt]=k[Rt]);var Rt=arguments.length-2;if(Rt===1)ot.children=pt;else if(1<Rt){for(var It=Array(Rt),Et=0;Et<Rt;Et++)It[Et]=arguments[Et+2];ot.children=It}return C(R.type,Tt,ot)},ae.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:f,_context:R},R},ae.createElement=function(R,k,pt){var ot,Tt={},Rt=null;if(k!=null)for(ot in k.key!==void 0&&(Rt=""+k.key),k)N.call(k,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(Tt[ot]=k[ot]);var It=arguments.length-2;if(It===1)Tt.children=pt;else if(1<It){for(var Et=Array(It),bt=0;bt<It;bt++)Et[bt]=arguments[bt+2];Tt.children=Et}if(R&&R.defaultProps)for(ot in It=R.defaultProps,It)Tt[ot]===void 0&&(Tt[ot]=It[ot]);return C(R,Rt,Tt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(R){return{$$typeof:d,render:R}},ae.isValidElement=lt,ae.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:xt}},ae.memo=function(R,k){return{$$typeof:_,type:R,compare:k===void 0?null:k}},ae.startTransition=Dt,ae.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ae.use=function(R){return G.H.use(R)},ae.useActionState=function(R,k,pt){return G.H.useActionState(R,k,pt)},ae.useCallback=function(R,k){return G.H.useCallback(R,k)},ae.useContext=function(R){return G.H.useContext(R)},ae.useDebugValue=function(){},ae.useDeferredValue=function(R,k){return G.H.useDeferredValue(R,k)},ae.useEffect=function(R,k){return G.H.useEffect(R,k)},ae.useEffectEvent=function(R){return G.H.useEffectEvent(R)},ae.useId=function(){return G.H.useId()},ae.useImperativeHandle=function(R,k,pt){return G.H.useImperativeHandle(R,k,pt)},ae.useInsertionEffect=function(R,k){return G.H.useInsertionEffect(R,k)},ae.useLayoutEffect=function(R,k){return G.H.useLayoutEffect(R,k)},ae.useMemo=function(R,k){return G.H.useMemo(R,k)},ae.useOptimistic=function(R,k){return G.H.useOptimistic(R,k)},ae.useReducer=function(R,k,pt){return G.H.useReducer(R,k,pt)},ae.useRef=function(R){return G.H.useRef(R)},ae.useState=function(R){return G.H.useState(R)},ae.useSyncExternalStore=function(R,k,pt){return G.H.useSyncExternalStore(R,k,pt)},ae.useTransition=function(){return G.H.useTransition()},ae.version="19.3.1",ae}var W_;function Mp(){return W_||(W_=1,$h.exports=bM()),$h.exports}var Un=Mp();const AM=sx(Un);var td={exports:{}},nl={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function RM(){return j_||(j_=1,(function(o){function e(q,it){var K=q.length;q.push(it);t:for(;0<K;){var xt=K-1>>>1,yt=q[xt];if(0<u(yt,it))q[xt]=it,q[K]=yt,K=xt;else break t}}function a(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var it=q[0],K=q.pop();if(K!==it){q[0]=K;t:for(var xt=0,yt=q.length,Dt=yt>>>1;xt<Dt;){var ee=2*(xt+1)-1,ge=q[ee],R=ee+1,k=q[R];if(0>u(ge,K))R<yt&&0>u(k,ge)?(q[xt]=k,q[R]=K,xt=R):(q[xt]=ge,q[ee]=K,xt=ee);else if(R<yt&&0>u(k,K))q[xt]=k,q[R]=K,xt=R;else break t}}return it}function u(q,it){var K=q.sortIndex-it.sortIndex;return K!==0?K:q.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],_=[],v=1,g=null,y=3,M=!1,b=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(q){for(var it=a(_);it!==null;){if(it.callback===null)s(_);else if(it.startTime<=q)s(_),it.sortIndex=it.expirationTime,e(p,it);else break;it=a(_)}}function nt(q){if(w=!1,U(q),!b)if(a(p)!==null)b=!0,F||(F=!0,lt());else{var it=a(_);it!==null&&ct(nt,it.startTime-q)}}var F=!1,P=-1,G=5,N=-1;function C(){return S?!0:!(o.unstable_now()-N<G)}function I(){if(S=!1,F){var q=o.unstable_now();N=q;var it=!0;try{t:{b=!1,w&&(w=!1,z(P),P=-1),M=!0;var K=y;try{e:{for(U(q),g=a(p);g!==null&&!(g.expirationTime>q&&C());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,y=g.priorityLevel;var yt=xt(g.expirationTime<=q);if(q=o.unstable_now(),typeof yt=="function"){g.callback=yt,U(q),it=!0;break e}g===a(p)&&s(p),U(q)}else s(p);g=a(p)}if(g!==null)it=!0;else{var Dt=a(_);Dt!==null&&ct(nt,Dt.startTime-q),it=!1}}break t}finally{g=null,y=K,M=!1}it=void 0}}finally{it?lt():F=!1}}}var lt;if(typeof O=="function")lt=function(){O(I)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=I,lt=function(){gt.postMessage(null)}}else lt=function(){x(I,0)};function ct(q,it){P=x(function(){q(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(q){switch(y){case 1:case 2:case 3:var it=3;break;default:it=y}var K=y;y=it;try{return q()}finally{y=K}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(q,it){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var K=y;y=q;try{return it()}finally{y=K}},o.unstable_scheduleCallback=function(q,it,K){var xt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xt+K:xt):K=xt,q){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=K+yt,q={id:v++,callback:it,priorityLevel:q,startTime:K,expirationTime:yt,sortIndex:-1},K>xt?(q.sortIndex=K,e(_,q),a(p)===null&&q===a(_)&&(w?(z(P),P=-1):w=!0,ct(nt,K-xt))):(q.sortIndex=yt,e(p,q),b||M||(b=!0,F||(F=!0,lt()))),q},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(q){var it=y;return function(){var K=y;y=it;try{return q.apply(this,arguments)}finally{y=K}}}})(nd)),nd}var Z_;function CM(){return Z_||(Z_=1,ed.exports=RM()),ed.exports}var id={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function wM(){if(K_)return Mn;K_=1;var o=Mp();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mn.browser=function(v){return{$$typeof:f,_reason:v}},Mn.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(v,g,null,y)},Mn.flushSync=function(v){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=y,s.d.f()}},Mn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},Mn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Mn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,M=_(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:w}):y==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Mn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=_(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},Mn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,M=_(y,g.crossOrigin);s.d.L(v,y,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Mn.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=_(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},Mn.requestFormReset=function(v){s.d.r(v)},Mn.unstable_batchedUpdates=function(v,g){return v(g)},Mn.useFormState=function(v,g,y){return p.H.useFormState(v,g,y)},Mn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Mn.version="19.3.1",Mn}var Q_;function DM(){if(Q_)return id.exports;Q_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=wM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function UM(){if(J_)return nl;J_=1;var o=CM(),e=Mp(),a=DM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return p(l),t;if(c===r)return p(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var m=!1,E=l.child;E;){if(E===i){m=!0,i=l,r=c;break}if(E===r){m=!0,r=l,i=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===i){m=!0,i=c,r=l;break}if(E===r){m=!0,r=c,i=l;break}E=E.sibling}if(!m)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],i=y(t);return i===null||w(n,t,i.child,{foundSelf:!1}),n}function w(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,n,i.child,r))return!0;i=i.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,z=null;function O(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function U(t,n,i){return t===i?(z=t,!1):t===n?(z!==null&&(x=t),!0):!1}function nt(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function F(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var P=Object.assign,G=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),lt=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Dt=Symbol.for("react.activity"),ee=Symbol.for("react.legacy_hidden"),ge=Symbol.for("react.memo_cache_sentinel"),R=Symbol.for("react.view_transition"),k=Symbol.for("react.recoverable"),pt=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=pt&&t[pt]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case rt:return"Profiler";case lt:return"StrictMode";case it:return"Suspense";case K:return"SuspenseList";case Dt:return"Activity";case R:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ct:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Rt(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Rt(t(n))}catch{}}return null}var It=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},V=[],ve=-1;function Jt(t){return{current:t}}function Kt(t){0>ve||(t.current=V[ve],V[ve]=null,ve--)}function At(t,n){ve++,V[ve]=t.current,t.current=n}var oe=Jt(null),kt=Jt(null),D=Jt(null),T=Jt(null);function $(t,n){switch(At(D,n),At(kt,t),At(oe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$0(n),t=t_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Kt(oe),At(oe,t)}function mt(){Kt(oe),Kt(kt),Kt(D)}function vt(t){var n=t.memoizedState;n!==null&&(Cs._currentValue=n.memoizedState,At(T,t)),n=oe.current;var i=t_(n,t.type);n!==i&&(At(kt,t),At(oe,i))}function ht(t){kt.current===t&&(Kt(oe),Kt(kt)),T.current===t&&(Kt(T),Cs._currentValue=be)}var qt,Ut;function Nt(t){if(qt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",Ut=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+Ut}var he=!1;function St(t,n){if(!t||he)return"";he=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(Ct){var X=Ct}Reflect.construct(t,[],dt)}else{try{dt.call()}catch(Ct){X=Ct}dt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),dt=!0,new t}finally{dt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ct){X=Ct}(dt=t())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(Ct){if(Ct&&X&&typeof Ct.stack=="string")return[Ct.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var L=m.split(`
`),W=E.split(`
`);for(l=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(r===L.length||l===W.length)for(r=L.length-1,l=W.length-1;1<=r&&0<=l&&L[r]!==W[l];)l--;for(;1<=r&&0<=l;r--,l--)if(L[r]!==W[l]){if(r!==1||l!==1)do if(r--,l--,0>l||L[r]!==W[l]){var et=`
`+L[r].replace(" at new "," at ");return t.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",t.displayName)),et}while(1<=r&&0<=l);break}}}finally{he=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Nt(i):""}function Vt(t,n){switch(t.tag){case 26:case 27:case 5:return Nt(t.type);case 16:return Nt("Lazy");case 13:return t.child!==n&&n!==null?Nt("Suspense Fallback"):Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return St(t.type,!1);case 11:return St(t.type.render,!1);case 1:return St(t.type,!0);case 31:return Nt("Activity");case 30:return Nt("ViewTransition");default:return""}}function te(t){try{var n="",i=null;do n+=Vt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ie=Object.prototype.hasOwnProperty,Gt=o.unstable_scheduleCallback,_e=o.unstable_cancelCallback,le=o.unstable_shouldYield,Ie=o.unstable_requestPaint,H=o.unstable_now,Ot=o.unstable_getCurrentPriorityLevel,ut=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,zt=o.unstable_NormalPriority,Ft=o.unstable_LowPriority,re=o.unstable_IdlePriority,We=o.log,fn=o.unstable_setDisableYieldValue,Ee=null,Ye=null;function hn(t){if(typeof We=="function"&&fn(t),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Ee,t)}catch{}}var bn=Math.clz32?Math.clz32:uo,El=Math.log,Qi=Math.LN2;function uo(t){return t>>>=0,t===0?32:31-(El(t)/Qi|0)|0}var ur=256,cr=262144,Ji=4194304;function Oi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $i(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=Oi(r):(m&=E,m!==0?l=Oi(m):i||(i=E&~t,i!==0&&(l=Oi(i))))):(E=r&~c,E!==0?l=Oi(E):m!==0?l=Oi(m):i||(i=r&~t,i!==0&&(l=Oi(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function co(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-bn(i),l=1<<r;n|=t[r],i&=~l}return n}function Ac(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tl(){var t=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),t}function fo(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function A(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function j(t,n,i,r,l,c){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,W=t.hiddenUpdates;for(i=m&~i;0<i;){var et=31-bn(i),dt=1<<et;E[et]=0,L[et]=-1;var X=W[et];if(X!==null)for(W[et]=null,et=0;et<X.length;et++){var tt=X[et];tt!==null&&(tt.lane&=-536870913)}i&=~dt}r!==0&&at(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~n))}function at(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-bn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function st(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-bn(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function Z(t,n){var i=n&-n;return i=(i&42)!==0?1:Mt(i),(i&(t.suspendedLanes|n))!==0?0:i}function Mt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wt(){var t=bt.p;return t!==0?t:(t=window.event,t===void 0?32:B_(t.type))}function jt(t,n){var i=bt.p;try{return bt.p=t,n()}finally{bt.p=i}}var $t=Math.random().toString(36).slice(2),Zt="__reactFiber$"+$t,Bt="__reactProps$"+$t,pe="__reactContainer$"+$t,Oe="__reactEvents$"+$t,Ge="__reactListeners$"+$t,An="__reactHandles$"+$t,we="__reactResources$"+$t,Yt="__reactMarker$"+$t,Xn="__reactLoad$"+$t;function Te(t){delete t[Zt],delete t[Bt],delete t[Ge],delete t[An]}function sn(t){var n;if(n=t[Zt])return n;for(var i=t.parentNode;i;){if(n=i[pe]||i[Zt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=__(t);t!==null;){if(i=t[Zt])return i;t=__(t)}return n}t=i,i=t.parentNode}return null}function Zn(t){if(t=t[Zt]||t[pe]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function on(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ci(t){var n=t[we];return n||(n=t[we]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(t){t[Yt]=!0}function Kn(t){t[Xn]=void 0}var Aa=new Set,On={};function Rn(t,n){zn(t,n),zn(t+"Capture",n)}function zn(t,n){for(On[t]=n,t=0;t<n.length;t++)Aa.add(n[t])}var bl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bp={},Ip={};function Vx(t){return ie.call(Ip,t)?!0:ie.call(Bp,t)?!1:bl.test(t)?Ip[t]=!0:(Bp[t]=!0,!1)}var Ue=!1;function Fp(){var t=Ue;return Ue=!1,t}function Al(t,n,i){if(Vx(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function Rl(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ta(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function Qn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xx(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Rc(t){if(!t._valueTracker){var n=Hp(t)?"checked":"value";t._valueTracker=Xx(t,n,""+t[n])}}function Gp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=Hp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var kx=/[\n"\\]/g;function fi(t){return t.replace(kx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cc(t,n,i,r,l,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qn(n)):t.value!==""+Qn(n)&&(t.value=""+Qn(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?m==="number"&&t.value==n?wc(t,Qn(t.value)):wc(t,Qn(n)):i!=null?wc(t,Qn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Qn(E):t.removeAttribute("name")}function Vp(t,n,i,r,l,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Rc(t);return}i=i!=null?""+Qn(i):"",n=n!=null?""+Qn(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Rc(t)}function wc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Yr(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Qn(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Xp(t,n,i){if(n!=null&&(n=""+Qn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Qn(i):""}function kp(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=Qn(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Rc(t)}function Wr(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var qx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qp(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||qx.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Yp(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ue=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(qp(t,l,r),Ue=!0)}else for(var c in n)n.hasOwnProperty(c)&&qp(t,c,n[c])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(t){return Wx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Uc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Zr=null;function Wp(t){var n=Zn(t);if(n&&(t=n.stateNode)){var i=t[Bt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[Bt]||null;if(!l)throw Error(s(90));Cc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&Gp(r)}break t;case"textarea":Xp(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Yr(t,!!i.multiple,n,!1)}}}var Lc=!1;function jp(t,n,i){if(Lc)return t(n,i);Lc=!0;try{var r=t(n);return r}finally{if(Lc=!1,(jr!==null||Zr!==null)&&(Cu(),jr&&(n=jr,t=Zr,Zr=jr=null,Wp(n),t)))for(n=0;n<t.length;n++)Wp(t[n])}}function ho(t,n){var i=t.stateNode;if(i===null)return null;var r=i[Bt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(ea)try{var po={};Object.defineProperty(po,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Oc=!1}var Ra=null,zc=null,wl=null;function Zp(){if(wl)return wl;var t,n=zc,i=n.length,r,l="value"in Ra?Ra.value:Ra.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var m=i-t;for(r=1;r<=m&&n[i-r]===l[c-r];r++);return wl=l.slice(t,1<r?1-r:void 0)}function Dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function Kp(){return!1}function Pn(t){function n(i,r,l,c,m){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ul:Kp,this.isPropagationStopped=Kp,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),n}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Pn(Ca),mo=P({},Ca,{view:0,detail:0}),jx=Pn(mo),Pc,Bc,go,Ll=P({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Pc=t.screenX-go.screenX,Bc=t.screenY-go.screenY):Bc=Pc=0,go=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Qp=Pn(Ll),Zx=P({},Ll,{dataTransfer:0}),Kx=Pn(Zx),Qx=P({},mo,{relatedTarget:0}),Ic=Pn(Qx),Jx=P({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=Pn(Jx),ty=P({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ey=Pn(ty),ny=P({},Ca,{data:0}),Jp=Pn(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ry[t])?!!n[t]:!1}function Fc(){return sy}var oy=P({},mo,{key:function(t){if(t.key){var n=iy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=Pn(oy),uy=P({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Pn(uy),cy=P({},Ca,{submitter:0}),fy=Pn(cy),hy=P({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),dy=Pn(hy),py=P({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=Pn(py),gy=P({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=Pn(gy),vy=P({},Ca,{newState:0,oldState:0,source:0}),xy=Pn(vy),yy=[9,13,27,32],Hc=ea&&"CompositionEvent"in window,_o=null;ea&&"documentMode"in document&&(_o=document.documentMode);var Sy=ea&&"TextEvent"in window&&!_o,tm=ea&&(!Hc||_o&&8<_o&&11>=_o),em=" ",nm=!1;function im(t,n){switch(t){case"keyup":return yy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function My(t,n){switch(t){case"compositionend":return am(n);case"keypress":return n.which!==32?null:(nm=!0,em);case"textInput":return t=n.data,t===em&&nm?null:t;default:return null}}function Ey(t,n){if(Kr)return t==="compositionend"||!Hc&&im(t,n)?(t=Zp(),wl=zc=Ra=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tm&&n.locale!=="ko"?null:n.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ty[t.type]:n==="textarea"}function sm(t,n,i,r){jr?Zr?Zr.push(r):Zr=[r]:jr=r,n=Ou(n,"onChange"),0<n.length&&(i=new Nl("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var vo=null,xo=null;function by(t){W0(t,0)}function Ol(t){var n=on(t);if(Gp(n))return t}function om(t,n){if(t==="change")return n}var lm=!1;if(ea){var Gc;if(ea){var Vc="oninput"in document;if(!Vc){var um=document.createElement("div");um.setAttribute("oninput","return;"),Vc=typeof um.oninput=="function"}Gc=Vc}else Gc=!1;lm=Gc&&(!document.documentMode||9<document.documentMode)}function cm(){vo&&(vo.detachEvent("onpropertychange",fm),xo=vo=null)}function fm(t){if(t.propertyName==="value"&&Ol(xo)){var n=[];sm(n,xo,t,Nc(t)),jp(by,n)}}function Ay(t,n,i){t==="focusin"?(cm(),vo=n,xo=i,vo.attachEvent("onpropertychange",fm)):t==="focusout"&&cm()}function Ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(xo)}function Cy(t,n){if(t==="click")return Ol(n)}function wy(t,n){if(t==="input"||t==="change")return Ol(n)}function Dy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:Dy;function yo(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!ie.call(n,l)||!Jn(t[l],n[l]))return!1}return!0}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,n){var i=hm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=hm(i)}}function pm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Xc(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Uy=ea&&"documentMode"in document&&11>=document.documentMode,Qr=null,qc=null,So=null,Yc=!1;function gm(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Yc||Qr==null||Qr!==Xc(r)||(r=Qr,"selectionStart"in r&&kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&yo(So,r)||(So=r,r=Ou(qc,"onSelect"),0<r.length&&(n=new Nl("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=Qr)))}function fr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Jr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Wc={},_m={};ea&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function hr(t){if(Wc[t])return Wc[t];if(!Jr[t])return t;var n=Jr[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in _m)return Wc[t]=n[i];return t}var vm=hr("animationend"),xm=hr("animationiteration"),ym=hr("animationstart"),Ny=hr("transitionrun"),Ly=hr("transitionstart"),Oy=hr("transitioncancel"),Sm=hr("transitionend"),Mm=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function Mi(t,n){Mm.set(t,n),Rn(n,[t])}var zy=0;function na(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ai.identifierPrefix;var i=zy++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Em(t){if(t==null||typeof t=="string")return t;var n=null,i=vs;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ia(t,n){return t=Em(t),n=Em(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],$r=0,Zc=0;function Pl(){for(var t=$r,n=Zc=$r=0;n<t;){var i=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}c!==0&&Tm(i,l,c)}}function Bl(t,n,i,r){hi[$r++]=t,hi[$r++]=n,hi[$r++]=i,hi[$r++]=r,Zc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Kc(t,n,i,r){return Bl(t,n,i,r),Il(t)}function dr(t,n){return Bl(t,null,null,n),Il(t)}function Tm(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-bn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Il(t){if(50<Xo)throw Xo=0,Ru=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ts={};function Py(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,i,r){return new Py(t,n,i,r)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,n){var i=t.alternate;return i===null?(i=kn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function bm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Fl(t,n,i,r,l,c){var m=0;if(r=t,typeof r=="function")Qc(r)&&(m=1);else if(typeof r=="string")m=cM(t,i,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Dt:return t=kn(31,i,n,l),t.elementType=Dt,t.lanes=c,t;case I:return pr(i.children,l,c,n);case lt:m=8,l|=24;break;case rt:return t=kn(12,i,n,l|2),t.elementType=rt,t.lanes=c,t;case it:return t=kn(13,i,n,l),t.elementType=it,t.lanes=c,t;case K:return t=kn(19,i,n,l),t.elementType=K,t.lanes=c,t;case ee:case R:return t=l|32,t=kn(30,i,n,t),t.elementType=R,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ct:m=10;break t;case gt:m=9;break t;case q:m=11;break t;case xt:m=14;break t;case yt:m=16,r=null;break t}m=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=kn(m,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function pr(t,n,i,r){return t=kn(7,t,r,n),t.lanes=i,t}function Jc(t,n,i){return t=kn(6,t,null,n),t.lanes=i,t}function Am(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function $c(t,n,i){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rm=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var i=Rm.get(t);return i!==void 0?i:(n={value:t,source:n,stack:te(n)},Rm.set(t,n),n)}return{value:t,source:n,stack:te(n)}}var es=[],ns=0,Hl=null,Mo=0,pi=[],mi=0,wa=null,Pi=1,Bi="";function ra(t,n){es[ns++]=Mo,es[ns++]=Hl,Hl=t,Mo=n}function Cm(t,n,i){pi[mi++]=Pi,pi[mi++]=Bi,pi[mi++]=wa,wa=t;var r=Pi;t=Bi;var l=32-bn(r)-1;r&=~(1<<l),i+=1;var c=32-bn(n)+l;if(30<c){var m=l-l%5;c=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Pi=1<<32-bn(n)+l|i<<l|r,Bi=c+t}else Pi=1<<c|i<<l|r,Bi=t}function Gl(t){t.return!==null&&(ra(t,1),Cm(t,1,0))}function tf(t){for(;t===Hl;)Hl=es[--ns],es[ns]=null,Mo=es[--ns],es[ns]=null;for(;t===wa;)wa=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function wm(t,n){pi[mi++]=Pi,pi[mi++]=Bi,pi[mi++]=wa,Pi=n.id,Bi=n.overflow,wa=t}var dn=null,Xe=null,me=!1,Da=null,gi=!1,ef=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(di(n,t)),ef}function Dm(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[Zt]=t,n[Bt]=r,i){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Vp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),kp(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||Q0(n.textContent,i)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||Ua(t,!0)}function Vl(t){for(dn=t.return;dn;)switch(dn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:dn=dn.return}}function is(t){if(t!==dn)return!1;if(!me)return Vl(t),me=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Nh(t.type,t.memoizedProps)),i=!i),i&&Xe&&Ua(t),Vl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=g_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=g_(t)}else n===27?(n=Xe,Wa(t.type)?(t=Gh,Gh=null,Xe=t):Xe=n):Xe=dn?vi(t.stateNode.nextSibling):null;return!0}function mr(){Xe=dn=null,me=!1}function nf(){var t=Da;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Da=null),t}function Eo(t){Da===null?Da=[t]:Da.push(t)}var af=Jt(null),gr=null,sa=null;function Na(t,n,i){At(af,n._currentValue),n._currentValue=i}function oa(t){t._currentValue=af.current,Kt(af)}function Xl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function rf(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var L=0;L<n.length;L++)if(E.context===n[L]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Xl(c.return,i,t),r||(m=null);break t}c=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),Xl(m,i,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),Xl(l.return,i,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function _r(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var E=l.type;Jn(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===T.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Cs):t=[Cs])}l=l.return}return t!==null&&rf(n,t,i,r),n.flags|=262144,t!==null}function kl(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vr(t){gr=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _n(t){return Um(gr,t)}function ql(t,n){return gr===null&&vr(t),Um(t,n)}function Um(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},sa===null){if(t===null)throw Error(s(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return i}var By=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Iy=o.unstable_scheduleCallback,Fy=o.unstable_NormalPriority,tn={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new By,data:new Map,refCount:0}}function To(t){t.refCount--,t.refCount===0&&Iy(Fy,function(){t.controller.abort()})}function Nm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var bo=null;function Hy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ao=null,of=0,xr=0,as=null;function Gy(t,n){if(Ao===null){var i=Ao=[];of=0,xr=Eh(),as={status:"pending",value:void 0,then:function(r){i.push(r)}}}return of++,n.then(Lm,Lm),n}function Lm(){if(--of===0&&(bo=null,Ao!==null)){as!==null&&(as.status="fulfilled");var t=Ao;Ao=null,xr=0,as=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Vy(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Om=Et.S;Et.S=function(t,n){if(A0=H(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Gy(t,n),bo!==null)for(var i=Ms;i!==null;)Nm(i,bo),i=i.next;if(i=t.types,i!==null){for(var r=Ms;r!==null;)Nm(r,i),r=r.next;if(xr!==0){r=bo,r===null&&(r=bo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Om!==null&&Om(t,n)};var yr=Jt(null);function lf(){var t=yr.current;return t!==null?t:Ve.pooledCache}function Yl(t,n){n===null?At(yr,yr.current):At(yr,n.pool)}function zm(){var t=lf();return t===null?null:{parent:tn._currentValue,pool:t}}var rs=Error(s(460)),uf=Error(s(474)),Wl=Error(s(542)),jl={then:function(){}};function Pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(zi,zi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t}throw Mr=n,rs}}function Sr(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Mr=i,rs):i}}var Mr=null;function Im(){if(Mr===null)throw Error(s(459));var t=Mr;return Mr=null,t}function Fm(t){if(t===rs||t===Wl)throw Error(s(483))}var ss=null,Ro=0;function Zl(t){var n=Ro;return Ro+=1,ss===null&&(ss=[]),Bm(ss,t,n)}function La(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Kl(t,n){throw n.$$typeof===G?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Hm(t){function n(Y,B){if(t){var J=Y.deletions;J===null?(Y.deletions=[B],Y.flags|=16):J.push(B)}}function i(Y,B){if(!t)return null;for(;B!==null;)n(Y,B),B=B.sibling;return null}function r(Y){for(var B=new Map;Y!==null;)Y.key===null?B.set(Y.index,Y):B.set(Y.key,Y),Y=Y.sibling;return B}function l(Y,B){return Y=aa(Y,B),Y.index=0,Y.sibling=null,Y}function c(Y,B,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<B?(Y.flags|=2,B):J):(Y.flags|=134217730,B)):(Y.flags|=1048576,B)}function m(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,B,J,ft){return B===null||B.tag!==6?(B=Jc(J,Y.mode,ft),B.return=Y,B):(B=l(B,J),B.return=Y,B)}function L(Y,B,J,ft){var Ht=J.type;return Ht===I?(Y=et(Y,B,J.props.children,ft,J.key),La(Y,J),Y):B!==null&&(B.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===yt&&Sr(Ht)===B.type)?(B=l(B,J.props),La(B,J),B.return=Y,B):(B=Fl(J.type,J.key,J.props,null,Y.mode,ft),La(B,J),B.return=Y,B)}function W(Y,B,J,ft){return B===null||B.tag!==4||B.stateNode.containerInfo!==J.containerInfo||B.stateNode.implementation!==J.implementation?(B=$c(J,Y.mode,ft),B.return=Y,B):(B=l(B,J.children||[]),B.return=Y,B)}function et(Y,B,J,ft,Ht){return B===null||B.tag!==7?(B=pr(J,Y.mode,ft,Ht),B.return=Y,B):(B=l(B,J),B.return=Y,B)}function dt(Y,B,J){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Jc(""+B,Y.mode,J),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case N:return J=Fl(B.type,B.key,B.props,null,Y.mode,J),La(J,B),J.return=Y,J;case C:return B=$c(B,Y.mode,J),B.return=Y,B;case yt:return B=Sr(B),dt(Y,B,J)}if(It(B)||ot(B))return B=pr(B,Y.mode,J,null),B.return=Y,B;if(typeof B.then=="function")return dt(Y,Zl(B),J);if(B.$$typeof===ct)return dt(Y,ql(Y,B),J);Kl(Y,B)}return null}function X(Y,B,J,ft){var Ht=B!==null?B.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:E(Y,B,""+J,ft);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case N:return J.key===Ht?L(Y,B,J,ft):null;case C:return J.key===Ht?W(Y,B,J,ft):null;case yt:return J=Sr(J),X(Y,B,J,ft)}if(It(J)||ot(J))return Ht!==null?null:et(Y,B,J,ft,null);if(typeof J.then=="function")return X(Y,B,Zl(J),ft);if(J.$$typeof===ct)return X(Y,B,ql(Y,J),ft);Kl(Y,J)}return null}function tt(Y,B,J,ft,Ht){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return Y=Y.get(J)||null,E(B,Y,""+ft,Ht);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case N:return Y=Y.get(ft.key===null?J:ft.key)||null,L(B,Y,ft,Ht);case C:return Y=Y.get(ft.key===null?J:ft.key)||null,W(B,Y,ft,Ht);case yt:return ft=Sr(ft),tt(Y,B,J,ft,Ht)}if(It(ft)||ot(ft))return Y=Y.get(J)||null,et(B,Y,ft,Ht,null);if(typeof ft.then=="function")return tt(Y,B,J,Zl(ft),Ht);if(ft.$$typeof===ct)return tt(Y,B,J,ql(B,ft),Ht);Kl(B,ft)}return null}function Ct(Y,B,J,ft){for(var Ht=null,Me=null,Qt=B,ne=B=0,an=null;Qt!==null&&ne<J.length;ne++){Qt.index>ne?(an=Qt,Qt=null):an=Qt.sibling;var Ae=X(Y,Qt,J[ne],ft);if(Ae===null){Qt===null&&(Qt=an);break}t&&Qt&&Ae.alternate===null&&n(Y,Qt),B=c(Ae,B,ne),Me===null?Ht=Ae:Me.sibling=Ae,Me=Ae,Qt=an}if(ne===J.length)return i(Y,Qt),me&&ra(Y,ne),Ht;if(Qt===null){for(;ne<J.length;ne++)Qt=dt(Y,J[ne],ft),Qt!==null&&(B=c(Qt,B,ne),Me===null?Ht=Qt:Me.sibling=Qt,Me=Qt);return me&&ra(Y,ne),Ht}for(Qt=r(Qt);ne<J.length;ne++)an=tt(Qt,Y,ne,J[ne],ft),an!==null&&(t&&(Ae=an.alternate,Ae!==null&&Qt.delete(Ae.key===null?ne:Ae.key)),B=c(an,B,ne),Me===null?Ht=an:Me.sibling=an,Me=an);return t&&Qt.forEach(function(Ja){return n(Y,Ja)}),me&&ra(Y,ne),Ht}function Xt(Y,B,J,ft){if(J==null)throw Error(s(151));for(var Ht=null,Me=null,Qt=B,ne=B=0,an=null,Ae=J.next();Qt!==null&&!Ae.done;ne++,Ae=J.next()){Qt.index>ne?(an=Qt,Qt=null):an=Qt.sibling;var Ja=X(Y,Qt,Ae.value,ft);if(Ja===null){Qt===null&&(Qt=an);break}t&&Qt&&Ja.alternate===null&&n(Y,Qt),B=c(Ja,B,ne),Me===null?Ht=Ja:Me.sibling=Ja,Me=Ja,Qt=an}if(Ae.done)return i(Y,Qt),me&&ra(Y,ne),Ht;if(Qt===null){for(;!Ae.done;ne++,Ae=J.next())Ae=dt(Y,Ae.value,ft),Ae!==null&&(B=c(Ae,B,ne),Me===null?Ht=Ae:Me.sibling=Ae,Me=Ae);return me&&ra(Y,ne),Ht}for(Qt=r(Qt);!Ae.done;ne++,Ae=J.next())Ae=tt(Qt,Y,ne,Ae.value,ft),Ae!==null&&(t&&(an=Ae.alternate,an!==null&&Qt.delete(an.key===null?ne:an.key)),B=c(Ae,B,ne),Me===null?Ht=Ae:Me.sibling=Ae,Me=Ae);return t&&Qt.forEach(function(MM){return n(Y,MM)}),me&&ra(Y,ne),Ht}function ce(Y,B,J,ft){if(typeof J=="object"&&J!==null&&J.type===I&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case N:t:{for(var Ht=J.key;B!==null;){if(B.key===Ht){if(Ht=J.type,Ht===I){if(B.tag===7){i(Y,B.sibling),ft=l(B,J.props.children),La(ft,J),ft.return=Y,Y=ft;break t}}else if(B.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===yt&&Sr(Ht)===B.type){i(Y,B.sibling),ft=l(B,J.props),La(ft,J),ft.return=Y,Y=ft;break t}i(Y,B);break}else n(Y,B);B=B.sibling}J.type===I?(ft=pr(J.props.children,Y.mode,ft,J.key),La(ft,J),ft.return=Y,Y=ft):(ft=Fl(J.type,J.key,J.props,null,Y.mode,ft),La(ft,J),ft.return=Y,Y=ft)}return m(Y);case C:t:{for(Ht=J.key;B!==null;){if(B.key===Ht)if(B.tag===4&&B.stateNode.containerInfo===J.containerInfo&&B.stateNode.implementation===J.implementation){i(Y,B.sibling),ft=l(B,J.children||[]),ft.return=Y,Y=ft;break t}else{i(Y,B);break}else n(Y,B);B=B.sibling}ft=$c(J,Y.mode,ft),ft.return=Y,Y=ft}return m(Y);case yt:return J=Sr(J),ce(Y,B,J,ft)}if(It(J))return Ct(Y,B,J,ft);if(ot(J)){if(Ht=ot(J),typeof Ht!="function")throw Error(s(150));return J=Ht.call(J),Xt(Y,B,J,ft)}if(typeof J.then=="function")return ce(Y,B,Zl(J),ft);if(J.$$typeof===ct)return ce(Y,B,ql(Y,J),ft);Kl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,B!==null&&B.tag===6?(i(Y,B.sibling),ft=l(B,J),ft.return=Y,Y=ft):(i(Y,B),ft=Jc(J,Y.mode,ft),ft.return=Y,Y=ft),m(Y)):i(Y,B)}return function(Y,B,J,ft){try{Ro=0;var Ht=ce(Y,B,J,ft);return ss=null,Ht}catch(Qt){if(Qt===rs||Qt===Wl)throw Qt;var Me=kn(29,Qt,null,Y.mode);return Me.lanes=ft,Me.return=Y,Me}finally{}}}var Er=Hm(!0),Gm=Hm(!1),Oa=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Il(t),Tm(t,null,i),n}return Bl(t,r,n,i),Il(t)}function Co(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,st(t,i)}}function hf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var df=!1;function wo(){if(df){var t=as;if(t!==null)throw t}}function Do(t,n,i,r){df=!1;var l=t.updateQueue;Oa=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var L=E,W=L.next;L.next=null,m===null?c=W:m.next=W,m=L;var et=t.alternate;et!==null&&(et=et.updateQueue,E=et.lastBaseUpdate,E!==m&&(E===null?et.firstBaseUpdate=W:E.next=W,et.lastBaseUpdate=L))}if(c!==null){var dt=l.baseState;m=0,et=W=L=null,E=c;do{var X=E.lane&-536870913,tt=X!==E.lane;if(tt?(Se&X)===X:(r&X)===X){X!==0&&X===xr&&(df=!0),et!==null&&(et=et.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ct=t,Xt=E;X=n;var ce=i;switch(Xt.tag){case 1:if(Ct=Xt.payload,typeof Ct=="function"){dt=Ct.call(ce,dt,X);break t}dt=Ct;break t;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Xt.payload,X=typeof Ct=="function"?Ct.call(ce,dt,X):Ct,X==null)break t;dt=P({},dt,X);break t;case 2:Oa=!0}}X=E.callback,X!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[X]:tt.push(X))}else tt={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},et===null?(W=et=tt,L=dt):et=et.next=tt,m|=X;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);et===null&&(L=dt),l.baseState=L,l.firstBaseUpdate=W,l.lastBaseUpdate=et,c===null&&(l.shared.lanes=0),Xa|=m,t.lanes=m,t.memoizedState=dt}}function Vm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Xm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Vm(i[t],n)}var Ba=Jt(null),Ql=Jt(0);function km(t,n){t=ha,At(Ql,t),At(Ba,n),ha=t|n.baseLanes}function pf(){At(Ql,ha),At(Ba,Ba.current)}function mf(){ha=Ql.current,Kt(Ba),Kt(Ql)}var vn=Jt(null),Cn=null;function Ia(t){var n=t.alternate;At(xn,xn.current&1),At(vn,t),Cn===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Cn=t)}function gf(t){At(xn,xn.current),At(vn,t),Cn===null&&(Cn=t)}function qm(t){t.tag===22?(At(xn,xn.current),At(vn,t),Cn===null&&(Cn=t)):Fa()}function Fa(){At(xn,xn.current),At(vn,vn.current)}function $n(t){Kt(vn),Cn===t&&(Cn=null),Kt(xn)}var xn=Jt(0);function Uo(t,n){At(vn,vn.current),At(xn,n)}function _f(t){Kt(xn),Kt(vn),Cn===t&&(Cn=null)}function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Fh(i)||Hh(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,ue=null,Fe=null,en=null,$l=!1,os=!1,Tr=!1,tu=0,No=0,ls=null,Xy=0;function Ke(){throw Error(s(321))}function vf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Jn(t[i],n[i]))return!1;return!0}function xf(t,n,i,r,l,c){return la=c,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?Cg:wg,Tr=!1,c=i(r,l),Tr=!1,os&&(c=Wm(n,i,r,l)),Ym(t),c}function Ym(t){Et.H=ou;var n=Fe!==null&&Fe.next!==null;if(la=0,en=Fe=ue=null,$l=!1,No=0,ls=null,n)throw Error(s(300));t===null||nn||(t=t.dependencies,t!==null&&kl(t)&&(nn=!0))}function Wm(t,n,i,r){ue=t;var l=0;do{if(os&&(ls=null),No=0,os=!1,25<=l)throw Error(s(301));if(l+=1,en=Fe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=Qy,c=n(i,r)}while(os);return c}function ky(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(ue.flags|=1024),n}function yf(){var t=tu!==0;return tu=0,t}function Sf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Mf(t){if($l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$l=!1}la=0,en=Fe=ue=null,os=!1,No=tu=0,ls=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=t:en=en.next=t,en}function $e(){if(Fe===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Fe=t;else{if(t===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},en===null?ue.memoizedState=en=t:en=en.next=t}return en}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=No;return No+=1,ls===null&&(ls=[]),t=Bm(ls,t,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?Cg:wg),t}function nu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===k)return;if(t.$$typeof===ct)return _n(t)}throw Error(s(438,String(t)))}function Ef(t){var n=null,i=ue.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=eu(),ue.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=ge;return n.index++,i}function ua(t,n){return typeof n=="function"?n(t):n}function iu(t){var n=$e();return Tf(n,Fe,t)}function Tf(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=m=null,L=null,W=n,et=!1;do{var dt=W.lane&-536870913;if(dt!==W.lane?(Se&dt)===dt:(la&dt)===dt){var X=W.revertLane;if(X===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),dt===xr&&(et=!0);else if((la&X)===X){W=W.next,X===xr&&(et=!0);continue}else dt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=dt,m=c):L=L.next=dt,ue.lanes|=X,Xa|=X;dt=W.action,Tr&&i(c,dt),c=W.hasEagerState?W.eagerState:i(c,dt)}else X={lane:dt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=X,m=c):L=L.next=X,ue.lanes|=dt,Xa|=dt;W=W.next}while(W!==null&&W!==n);if(L===null?m=c:L.next=E,!Jn(c,t.memoizedState)&&(nn=!0,et&&(i=as,i!==null)))throw i;t.memoizedState=c,t.baseState=m,t.baseQueue=L,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function bf(t){var n=$e(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do c=t(c,m.action),m=m.next;while(m!==l);Jn(c,n.memoizedState)||(nn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function jm(t,n,i){var r=ue,l=$e(),c=me;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var m=!Jn((Fe||l).memoizedState,i);if(m&&(l.memoizedState=i,nn=!0),l=l.queue,Cf(Qm.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||m||en!==null&&(en.memoizedState.tag&1)!==0,us(t?9:8,{destroy:void 0},Km.bind(null,r,l,i,n),null),t){if(r.flags|=2048,Ve===null)throw Error(s(349));c||(la&127)!==0||Zm(r,n,i)}return i}function Zm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=ue.updateQueue,n===null?(n=eu(),ue.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Km(t,n,i,r){n.value=i,n.getSnapshot=r,Jm(n)&&$m(t)}function Qm(t,n,i){return i(function(){Jm(n)&&$m(t)})}function Jm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Jn(t,i)}catch{return!0}}function $m(t){var n=dr(t,2);n!==null&&jn(n,t,2)}function Af(t){var n=Bn();if(typeof t=="function"){var i=t;if(t=i(),Tr){hn(!0);try{i()}finally{hn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function tg(t,n,i,r){return t.baseState=i,Tf(t,Fe,typeof r=="function"?r:ua)}function qy(t,n,i,r,l){if(su(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};Et.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,eg(n,c)):(c.next=i.next,n.pending=i.next=c)}}function eg(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Et.T,m={};m.types=c!==null?c.types:null,Et.T=m;try{var E=i(l,r),L=Et.S;L!==null&&L(m,E),ng(t,n,E)}catch(W){Rf(t,n,W)}finally{c!==null&&m.types!==null&&(c.types=m.types),Et.T=c}}else try{c=i(l,r),ng(t,n,c)}catch(W){Rf(t,n,W)}}function ng(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){ig(t,n,r)},function(r){return Rf(t,n,r)}):ig(t,n,i)}function ig(t,n,i){n.status="fulfilled",n.value=i,ag(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,eg(t,i)))}function Rf(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,ag(n),n=n.next;while(n!==r)}t.action=null}function ag(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rg(t,n){return n}function sg(t,n){if(me){var i=Ve.formState;if(i!==null){t:{var r=ue;if(me){if(Xe){e:{for(var l=Xe,c=gi;l.nodeType!==8;){if(!c){l=null;break e}if(l=vi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Xe=vi(l.nextSibling),r=l.data==="F!";break t}}Ua(r)}r=!1}r&&(n=i[0])}}return i=Bn(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:n},i.queue=r,i=bg.bind(null,ue,r),r.dispatch=i,r=Af(!1),c=Lf.bind(null,ue,!1,r.queue),r=Bn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=qy.bind(null,ue,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function og(t){var n=$e();return lg(n,Fe,t)}function lg(t,n,i){if(n=Tf(t,n,rg)[0],t=iu(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Lo(n)}catch(m){throw m===rs?Wl:m}else r=n;n=$e();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(ue.flags|=2048,us(9,{destroy:void 0},Yy.bind(null,l,i),null)),[r,c,t]}function Yy(t,n){t.action=n}function ug(t){var n=$e(),i=Fe;if(i!==null)return lg(n,i,t);$e(),n=n.memoizedState,i=$e();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function us(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=eu(),ue.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function cg(){return $e().memoizedState}function au(t,n,i,r){var l=Bn();ue.flags|=t,l.memoizedState=us(1|n,{destroy:void 0},i,r===void 0?null:r)}function ru(t,n,i,r){var l=$e();r=r===void 0?null:r;var c=l.memoizedState.inst;Fe!==null&&r!==null&&vf(r,Fe.memoizedState.deps)?l.memoizedState=us(n,c,i,r):(ue.flags|=t,l.memoizedState=us(1|n,c,i,r))}function fg(t,n){au(8390656,8,t,n)}function Cf(t,n){ru(2048,8,t,n)}function Wy(t){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=eu(),ue.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function hg(t){var n=$e().memoizedState;return Wy({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dg(t,n){return ru(4,2,t,n)}function pg(t,n){return ru(4,4,t,n)}function mg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gg(t,n,i){i=i!=null?i.concat([t]):null,ru(4,4,mg.bind(null,n,t),i)}function wf(){}function _g(t,n){var i=$e();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&vf(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function vg(t,n){var i=$e();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&vf(n,r[1]))return r[0];if(r=t(),Tr){hn(!0);try{t()}finally{hn(!1)}}return i.memoizedState=[r,n],r}function Df(t,n,i){return i===void 0||(la&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=C0(),ue.lanes|=t,Xa|=t,i)}function xg(t,n,i,r){return Jn(i,n)?i:Ba.current!==null?(t=Df(t,i,r),Jn(t,n)||(nn=!0),t):(la&106)===0||(la&1073741824)!==0&&(Se&261930)===0?(nn=!0,t.memoizedState=i):(t=C0(),ue.lanes|=t,Xa|=t,n)}function yg(t,n,i,r,l){var c=bt.p;bt.p=c!==0&&8>c?c:8;var m=Et.T,E={};E.types=m!==null?m.types:null,Et.T=E,Lf(t,!1,n,i);try{var L=l(),W=Et.S;if(W!==null&&W(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var et=Vy(L,r);Oo(t,n,et,ii(t))}else Oo(t,n,r,ii(t))}catch(dt){Oo(t,n,{then:function(){},status:"rejected",reason:dt},ii())}finally{bt.p=c,m!==null&&E.types!==null&&(m.types=E.types),Et.T=m}}function jy(){}function Uf(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=Sg(t).queue;yg(t,l,n,be,i===null?jy:function(){return Mg(t),i(r)})}function Sg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:be},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mg(t){var n=Sg(t);n.next===null&&(n=t.alternate.memoizedState),Oo(t,n.next.queue,{},ii())}function Nf(){return _n(Cs)}function Eg(){return $e().memoizedState}function Tg(){return $e().memoizedState}function Zy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ii();t=za(i);var r=Pa(n,t,i);r!==null&&(jn(r,n,i),Co(r,n,i)),n={cache:sf()},t.payload=n;return}n=n.return}}function Ky(t,n,i){var r=ii();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},su(t)?Ag(n,i):(i=Kc(t,n,i,r),i!==null&&(jn(i,t,r),Rg(i,n,r)))}function bg(t,n,i){var r=ii();Oo(t,n,i,r)}function Oo(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(su(t))Ag(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,E=c(m,i);if(l.hasEagerState=!0,l.eagerState=E,Jn(E,m))return Bl(t,n,l,0),Ve===null&&Pl(),!1}catch{}finally{}if(i=Kc(t,n,l,r),i!==null)return jn(i,t,r),Rg(i,n,r),!0}return!1}function Lf(t,n,i,r){if(r={lane:2,revertLane:Eh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},su(t)){if(n)throw Error(s(479))}else n=Kc(t,i,r,2),n!==null&&jn(n,t,2)}function su(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Ag(t,n){os=$l=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Rg(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,st(t,i)}}var ou={readContext:_n,use:nu,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke,useEffectEvent:Ke},Cg={readContext:_n,use:nu,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:_n,useEffect:fg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,au(4194308,4,mg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return au(4194308,4,t,n)},useInsertionEffect:function(t,n){au(4,2,t,n)},useMemo:function(t,n){var i=Bn();n=n===void 0?null:n;var r=t();if(Tr){hn(!0);try{t()}finally{hn(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=Bn();if(i!==void 0){var l=i(n);if(Tr){hn(!0);try{i(n)}finally{hn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Ky.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Af(t);var n=t.queue,i=bg.bind(null,ue,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:wf,useDeferredValue:function(t,n){var i=Bn();return Df(i,t,n)},useTransition:function(){var t=Af(!1);return t=yg.bind(null,ue,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=ue,l=Bn();if(me){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),Ve===null)throw Error(s(349));(Se&127)!==0||Zm(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,fg(Qm.bind(null,r,c,t),[t]),r.flags|=2048,us(9,{destroy:void 0},Km.bind(null,r,c,i,n),null),i},useId:function(){var t=Bn(),n=Ve.identifierPrefix;if(me){var i=Bi,r=Pi;i=(r&~(1<<32-bn(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=tu++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Xy++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Nf,useFormState:sg,useActionState:sg,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Lf.bind(null,ue,!0,i),i.dispatch=n,[t,n]},useMemoCache:Ef,useCacheRefresh:function(){return Bn().memoizedState=Zy.bind(null,ue)},useEffectEvent:function(t){var n=Bn(),i={impl:t};return n.memoizedState=i,function(){if((Ne&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},wg={readContext:_n,use:nu,useCallback:_g,useContext:_n,useEffect:Cf,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:iu,useRef:cg,useState:function(){return iu(ua)},useDebugValue:wf,useDeferredValue:function(t,n){var i=$e();return xg(i,Fe.memoizedState,t,n)},useTransition:function(){var t=iu(ua)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:jm,useId:Eg,useHostTransitionStatus:Nf,useFormState:og,useActionState:og,useOptimistic:function(t,n){var i=$e();return tg(i,Fe,t,n)},useMemoCache:Ef,useCacheRefresh:Tg,useEffectEvent:hg},Qy={readContext:_n,use:nu,useCallback:_g,useContext:_n,useEffect:Cf,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:bf,useRef:cg,useState:function(){return bf(ua)},useDebugValue:wf,useDeferredValue:function(t,n){var i=$e();return Fe===null?Df(i,t,n):xg(i,Fe.memoizedState,t,n)},useTransition:function(){var t=bf(ua)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:jm,useId:Eg,useHostTransitionStatus:Nf,useFormState:ug,useActionState:ug,useOptimistic:function(t,n){var i=$e();return Fe!==null?tg(i,Fe,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:Tg,useEffectEvent:hg};function Of(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:P({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var zf={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=ii(),l=za(r);l.payload=n,i!=null&&(l.callback=i),n=Pa(t,l,r),n!==null&&(jn(n,t,r),Co(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=ii(),l=za(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Pa(t,l,r),n!==null&&(jn(n,t,r),Co(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ii(),r=za(i);r.tag=2,n!=null&&(r.callback=n),n=Pa(t,r,i),n!==null&&(jn(n,t,i),Co(n,t,i))}};function Dg(t,n,i,r,l,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):n.prototype&&n.prototype.isPureReactComponent?!yo(i,r)||!yo(l,c):!0}function Ug(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&zf.enqueueReplaceState(n,n.state,null)}function br(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=P({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Ng(t){zl(t)}function Lg(t){console.error(t)}function Og(t){zl(t)}function lu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function zg(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Pf(t,n,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){lu(t,n)},i}function Pg(t){return t=za(t),t.tag=3,t}function Bg(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){zg(n,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){zg(n,i,r),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Jy(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&_r(n,i,l,!0),i=vn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Cn===null?wu():i.alternate===null&&Qe===0&&(Qe=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===jl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),yh(t,r,l)),!1;case 22:return i.flags|=65536,r===jl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),yh(t,r,l)),!1}throw Error(s(435,i.tag))}return yh(t,r,l),wu(),!1}if(me)return n=vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==ef&&(t=Error(s(422),{cause:r}),Eo(di(t,i)))):(r!==ef&&(n=Error(s(423),{cause:r}),Eo(di(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=di(r,i),l=Pf(t.stateNode,r,l),hf(t,l),Qe!==4&&(Qe=2)),!1;var c=Error(s(520),{cause:r});if(c=di(c,i),Vo===null?Vo=[c]:Vo.push(c),Qe!==4&&(Qe=2),n===null)return!0;r=di(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Pf(i.stateNode,r,t),hf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ka===null||!ka.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Pg(l),Bg(l,t,i,r),hf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Bf=Error(s(461)),nn=!1;function ln(t,n,i,r){n.child=t===null?Gm(n,null,i,r):Er(n,t.child,i,r)}function Ig(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var m={};for(var E in r)E!=="ref"&&(m[E]=r[E])}else m=r;return vr(n),r=xf(t,n,i,m,c,l),E=yf(),t!==null&&!nn?(Sf(t,n,l),ca(t,n,l)):(me&&E&&Gl(n),n.flags|=1,ln(t,n,r,l),n.child)}function Fg(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!Qc(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,Hg(t,n,c,r,l)):(t=Fl(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!qf(t,l)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:yo,i(m,r)&&t.ref===n.ref)return ca(t,n,l)}return n.flags|=1,t=aa(c,r),t.ref=n.ref,t.return=n,n.child=t}function Hg(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(yo(c,r)&&t.ref===n.ref)if(nn=!1,n.pendingProps=r=c,qf(t,l))(t.flags&131072)!==0&&(nn=!0);else return n.lanes=t.lanes,ca(t,n,l)}return If(t,n,i,r,l)}function Gg(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Vg(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,c!==null?c.cachePool:null),c!==null?km(n,c):pf(),qm(n);else return r=n.lanes=536870912,Vg(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Yl(n,c.cachePool),km(n,c),Fa(),n.memoizedState=null):(t!==null&&Yl(n,null),pf(),Fa());return ln(t,n,l,i),n.child}function zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vg(t,n,i,r,l){var c=lf();return c=c===null?null:{parent:tn._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Yl(n,null),pf(),qm(n),t!==null&&_r(t,n,r,!0),n.childLanes=l,null}function uu(t,n){return n=cu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xg(t,n,i){return Er(n,t.child,null,i),t=uu(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function $y(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(me){if(r.mode==="hidden")return t=uu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},zo(null,t);if(gf(n),(t=Xe)?(t=m_(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},i=Am(t),i.return=n,n.child=i,dn=n,Xe=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return uu(n,r)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(gf(n),l)if(n.flags&256)n.flags&=-257,n=Xg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(nn||_r(t,n,i,!1),l=(i&t.childLanes)!==0,nn||l){if(Ba.current===null){if(r=Ve,r!==null&&(m=Z(r,i),m!==0&&m!==c.retryLane))throw c.retryLane=m,dr(t,m),jn(r,t,m),Bf;wu()}n=Xg(t,n,i)}else t=c.treeContext,Xe=vi(m.nextSibling),dn=n,me=!0,Da=null,gi=!1,t!==null&&wm(n,t),n=uu(n,r),n.flags|=134221824;return n}return t=aa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function cs(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function If(t,n,i,r,l){return vr(n),i=xf(t,n,i,r,void 0,l),r=yf(),t!==null&&!nn?(Sf(t,n,l),ca(t,n,l)):(me&&r&&Gl(n),n.flags|=1,ln(t,n,i,l),n.child)}function kg(t,n,i,r,l,c){return vr(n),n.updateQueue=null,i=Wm(n,r,i,l),Ym(t),r=yf(),t!==null&&!nn?(Sf(t,n,c),ca(t,n,c)):(me&&r&&Gl(n),n.flags|=1,ln(t,n,i,c),n.child)}function qg(t,n,i,r,l){if(vr(n),n.stateNode===null){var c=ts,m=i.contextType;typeof m=="object"&&m!==null&&(c=_n(m)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=zf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},cf(n),m=i.contextType,c.context=typeof m=="object"&&m!==null?_n(m):ts,c.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Of(n,i,m,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&zf.enqueueReplaceState(c,c.state,null),Do(n,r,c,l),wo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,L=br(i,E);c.props=L;var W=c.context,et=i.contextType;m=ts,typeof et=="object"&&et!==null&&(m=_n(et));var dt=i.getDerivedStateFromProps;et=typeof dt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,et||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==m)&&Ug(n,c,r,m),Oa=!1;var X=n.memoizedState;c.state=X,Do(n,r,c,l),wo(),W=n.memoizedState,E||X!==W||Oa?(typeof dt=="function"&&(Of(n,i,dt,r),W=n.memoizedState),(L=Oa||Dg(n,i,L,r,X,W,m))?(et||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=W),c.props=r,c.state=W,c.context=m,r=L):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,ff(t,n),m=n.memoizedProps,et=br(i,m),c.props=et,dt=n.pendingProps,X=c.context,W=i.contextType,L=ts,typeof W=="object"&&W!==null&&(L=_n(W)),E=i.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==dt||X!==L)&&Ug(n,c,r,L),Oa=!1,X=n.memoizedState,c.state=X,Do(n,r,c,l),wo();var tt=n.memoizedState;m!==dt||X!==tt||Oa||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof E=="function"&&(Of(n,i,E,r),tt=n.memoizedState),(et=Oa||Dg(n,i,et,r,X,tt,L)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,tt,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,tt,L)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=tt),c.props=r,c.state=tt,c.context=L,r=et):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,cs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Er(n,t.child,null,l),n.child=Er(n,null,i,l)):ln(t,n,i,l),n.memoizedState=c.state,t=n.child):t=ca(t,n,l),t}function Yg(t,n,i,r){return mr(),n.flags|=256,ln(t,n,i,r),n.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:zm()}}function Gf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ni),t}function Wg(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(me){if(l?Ia(n):Fa(),(t=Xe)?(t=m_(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},i=Am(t),i.return=n,n.child=i,dn=n,Xe=null)):t=null,t===null)throw Ua(n);return Hh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Fa(),l=n.mode,c=cu({mode:"hidden",children:c},l),r=pr(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Hf(i),r.childLanes=Gf(t,m,i),n.memoizedState=Ff,zo(null,r)):(Ia(n),Vf(n,c))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return tS(t,n,c,m,r,L,E,i)}return l?(Fa(),l=r.fallback,c=n.mode,E=t.child,L=E.sibling,r=aa(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,L!==null?l=aa(L,l):(l=pr(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,zo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Hf(i):(c=l.cachePool,c!==null?(E=tn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=zm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Gf(t,m,i),n.memoizedState=Ff,zo(t.child,r)):(Ia(n),i=t.child,t=i.sibling,i=aa(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=i,n.memoizedState=null,i)}function Vf(t,n){return n=cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function cu(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function fu(t,n,i){return Er(n,t.child,null,i),t=Vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function tS(t,n,i,r,l,c,m,E){if(i)return n.flags&256?(Ia(n),n.flags&=-257,fu(t,n,E)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,null):(Fa(),c=l.fallback,m=n.mode,l=cu({mode:"visible",children:l.children},m),c=pr(c,m,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Er(n,t.child,null,E),l=n.child,l.memoizedState=Hf(E),l.childLanes=Gf(t,r,E),n.memoizedState=Ff,zo(null,l));if(Ia(n),Hh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Eo({value:l,source:null,stack:null})),fu(t,n,E)}if(nn||_r(t,n,E,!1),r=(E&t.childLanes)!==0,nn||r){if(Ba.current!==null)return fu(t,n,E);if(r=Ve,r!==null&&(l=Z(r,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,dr(t,l),jn(r,t,l),Bf;return Fh(c)||wu(),fu(t,n,E)}return Fh(c)?(n.flags|=192,n.child=t.child,null):(t=m.treeContext,Xe=vi(c.nextSibling),dn=n,me=!0,Da=null,gi=!1,t!==null&&wm(n,t),n=Vf(n,l.children),n.flags|=134221824,n)}function jg(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Xl(t.return,n,i)}function Zg(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&Jl(i)===null&&(n=t),t=t.sibling}return n}function hu(t,n,i,r,l,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=l,m.treeForkCount=c)}function Xf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function kf(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var m=xn.current;if(n.flags&128)return Uo(n,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,n.flags|=128):m&=1,Uo(n,m),l==="backwards"&&t!==null?(Xf(t),ln(t,n,r,i),Xf(t)):ln(t,n,r,i),r=me?Mo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,i,n);else if(t.tag===19)jg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Zg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Xf(n)),hu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Jl(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}hu(n,!0,i,null,c,r);break;case"together":hu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=Zg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),hu(n,!1,l,i,c,r)}return n.child}function Kg(t,n,i){var r=n.pendingProps;return Na(n,n.type,r.value),ln(t,n,r.children,i),n.child}function ca(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(_r(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=aa(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=aa(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function eS(t,n,i){switch(n.tag){case 3:$(n,n.stateNode.containerInfo),Na(n,tn,t.memoizedState.cache),mr();break;case 27:case 5:vt(n);break;case 4:$(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ia(n),n.flags|=128,null;r=_r(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?Wg(t,n,i):(Ia(n),t=ca(t,n,i),t!==null?t.sibling:null)}Ia(n);break;case 19:if(n.flags&128)return kf(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(_r(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return kf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(n,xn.current),r)break;return null;case 22:return n.lanes=0,Gg(t,n,i,n.pendingProps);case 24:Na(n,tn,t.memoizedState.cache)}return ca(t,n,i)}function Qg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)nn=!0;else{if(!qf(t,i)&&(n.flags&128)===0)return nn=!1,eS(t,n,i);nn=(t.flags&131072)!==0}else nn=!1,me&&(n.flags&1048576)!==0&&Cm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Sr(n.elementType),n.type=t,typeof t=="function")Qc(t)?(r=br(t,r),n.tag=1,n=qg(null,n,t,r,i)):(n.tag=0,n=If(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===q){n.tag=11,n=Ig(null,n,t,r,i);break t}else if(l===xt){n.tag=14,n=Fg(null,n,t,r,i);break t}else if(l===ct){n.tag=10,n.type=t,n=Kg(null,n,i);break t}}throw n=Rt(t)||t,Error(s(306,n,""))}}return n;case 0:return If(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=br(r,n.pendingProps),qg(t,n,r,l,i);case 3:t:{if($(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,ff(t,n),Do(n,r,null,i);var m=n.memoizedState;if(r=m.cache,Na(n,tn,r),r!==c.cache&&rf(n,[tn],i,!0),wo(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Yg(t,n,r,i);break t}else if(r!==l){l=di(Error(s(424)),n),Eo(l),n=Yg(t,n,r,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=vi(t.firstChild),dn=n,me=!0,Da=null,gi=!0,i=Gm(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(mr(),r===l){n=ca(t,n,i);break t}ln(t,n,r,i)}n=n.child}return n;case 26:return cs(t,n),t===null?(i=M_(n.type,null,n.pendingProps,null))?n.memoizedState=i:me||(n.stateNode=e_(n.type,n.pendingProps,D.current,n)):n.memoizedState=M_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return vt(n),t===null&&me&&(r=n.stateNode=v_(n.type,n.pendingProps,D.current),dn=n,gi=!0,l=Xe,Wa(n.type)?(Gh=l,Xe=vi(r.firstChild)):Xe=l),ln(t,n,n.pendingProps.children,i),cs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&me&&((l=r=Xe)&&(r=ZS(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,dn=n,Xe=vi(r.firstChild),gi=!1,l=!0):l=!1),l||Ua(n)),vt(n),l=n.type,c=n.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,Nh(l,c)?r=null:m!==null&&Nh(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=xf(t,n,ky,null,null,i),Cs._currentValue=l),cs(t,n),ln(t,n,r,i),n.child;case 6:return t===null&&me&&((t=i=Xe)&&(i=KS(i,n.pendingProps,gi),i!==null?(n.stateNode=i,dn=n,Xe=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Wg(t,n,i);case 4:return $(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Er(n,null,r,i):ln(t,n,r,i),n.child;case 11:return Ig(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,cs(t,n),ln(t,n,r,i),n.child;case 8:return ln(t,n,n.pendingProps.children,i),n.child;case 12:return ln(t,n,n.pendingProps.children,i),n.child;case 10:return Kg(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,vr(n),l=_n(l),r=r(l),n.flags|=1,ln(t,n,r,i),n.child;case 14:return Fg(t,n,n.type,n.pendingProps,i);case 15:return Hg(t,n,n.type,n.pendingProps,i);case 19:return kf(t,n,i);case 31:return $y(t,n,i);case 22:return Gg(t,n,i,n.pendingProps);case 24:return vr(n),r=_n(tn),t===null?(l=lf(),l===null&&(l=Ve,c=sf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},cf(n),Na(n,tn,l)):((t.lanes&i)!==0&&(ff(t,n),Do(n,null,null,i),wo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Na(n,tn,r)):(r=c.cache,Na(n,tn,r),r!==l.cache&&rf(n,[tn],i,!0))),ln(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:me&&Gl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:cs(t,n),ln(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(t){t.flags|=4}function Yf(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?A_(n,r):A_(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(N0())t.flags|=8192;else throw Mr=jl,uf}else t.flags&=-16777217}function Jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R_(n))if(N0())t.flags|=8192;else throw Mr=jl,uf}function du(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Tl():536870912,t.lanes|=n,ms|=n)}function Po(t,n){if(!me)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function nS(t,n,i){var r=n.pendingProps;switch(tf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),oa(tn),mt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(is(n)?fa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nf())),ke(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(fa(n),c!==null?(ke(n),Jg(n,c)):(ke(n),Yf(n,l,null,r,i))):c?c!==t.memoizedState?(fa(n),ke(n),Jg(n,c)):(ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&fa(n),ke(n),Yf(n,l,t,r,i)),null;case 27:if(ht(n),i=D.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&fa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),n.subtreeFlags&=-33554433,null}t=oe.current,is(n)?Dm(n):(t=v_(l,r,i),n.stateNode=t,fa(n))}return ke(n),n.subtreeFlags&=-33554433,null;case 5:if(ht(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&fa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),n.subtreeFlags&=-33554433,null}if(c=oe.current,is(n))Dm(n);else{var m=Wo(D.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}c[Zt]=n,c[Bt]=r;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=c;t:switch(Sn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&fa(n)}}return ke(n),n.subtreeFlags&=-33554433,Yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&fa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=D.current,is(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=dn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Zt]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Q0(t.nodeValue,i)),t||Ua(n,!0)}else t=Wo(t).createTextNode(r),t[Zt]=n,n.stateNode=t}return ke(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=is(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Zt]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),t=!1}else i=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=is(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Zt]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),l=!1}else l=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),du(n,n.updateQueue),ke(n),null);case 4:return mt(),t===null&&Rh(n.stateNode.containerInfo),n.flags|=67108864,ke(n),null;case 10:return oa(n.type),ke(n),null;case 19:if(_f(n),r=n.memoizedState,r===null)return ke(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Po(r,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Jl(t),c!==null){for(n.flags|=128,Po(r,!1),t=c.updateQueue,n.updateQueue=t,du(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)bm(i,t),i=i.sibling;return Uo(n,xn.current&1|2),me&&ra(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&H()>bu&&(n.flags|=128,l=!0,Po(r,!1),n.lanes=4194304)}else{if(!l)if(t=Jl(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,du(n,t),Po(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!me)return ke(n),null}else 2*H()-r.renderingStartTime>bu&&i!==536870912&&(n.flags|=128,l=!0,Po(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=H(),t.sibling=null,c=xn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||me?Uo(n,c):(i=c,At(vn,n),At(xn,i),Cn===null&&(Cn=n)),me&&ra(n,r.treeForkCount),t}return ke(n),null;case 22:case 23:return $n(n),mf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),i=n.updateQueue,i!==null&&du(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&Kt(yr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),oa(tn),ke(n),null;case 25:return null;case 30:return n.flags|=33554432,ke(n),null}throw Error(s(156,n.tag))}function iS(t,n){switch(tf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return oa(tn),mt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return _f(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return mt(),null;case 10:return oa(n.type),null;case 22:case 23:return $n(n),mf(),t!==null&&Kt(yr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return oa(tn),null;case 25:return null;default:return null}}function $g(t,n){switch(tf(n),n.tag){case 3:oa(tn),mt();break;case 26:case 27:case 5:ht(n);break;case 4:mt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:_f(n);break;case 10:oa(n.type);break;case 22:case 23:$n(n),mf(),t!==null&&Kt(yr);break;case 24:oa(tn)}}function Bo(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,m=i.inst;r=c(),m.destroy=r}i=i.next}while(i!==l)}}catch(E){Pe(n,n.return,E)}}function Ha(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var m=r.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=n;var L=i,W=E;try{W()}catch(et){Pe(l,L,et)}}}r=r.next}while(r!==c)}}catch(et){Pe(n,n.return,et)}}function t0(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Xm(n,i)}catch(r){Pe(t,t.return,r)}}}function e0(t,n,i){i.props=br(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Pe(t,n,r)}}function Ii(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=na(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=l_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var m=new ai(t);g(t.child,!1,WS,m,void 0,void 0),t.stateNode=m}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Pe(t,n,E)}}function yn(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Pe(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Pe(t,n,l)}else i.current=null}function pu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)p_(t.stateNode,n[i])}function n0(t){for(var n=t.return;n!==null&&(jf(n)&&p_(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Io(t){for(var n=t.return;n!==null&&(jf(n)&&jS(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Wf(t){return t.tag===5||t.tag===3||t.tag===27}function jf(t){return t&&t.tag===7&&t.stateNode!==null}function Zf(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Pe(t,t.return,l)}}function Kf(t,n,i){try{var r=t.stateNode;wS(r,t.type,i,n),r[Bt]=n}catch(l){Pe(t,t.return,l)}}function i0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Qf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=zi)),pu(t,r),Ue=!0;else if(l!==4&&(l===27&&(pu(t,r),r=null,Wa(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(Jf(t,n,i,r),t=t.sibling;t!==null;)Jf(t,n,i,r),t=t.sibling}function mu(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),pu(t,r),Ue=!0;else if(l!==4&&(l===27&&(pu(t,r),r=null,Wa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(mu(t,n,i,r),t=t.sibling;t!==null;)mu(t,n,i,r),t=t.sibling}function a0(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Sn(n,r,i),n[Zt]=t,n[Bt]=i}catch(c){Pe(t,t.return,c)}}var gu=!1,ti=null;function r0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(gu=!0)}var Fi=null;function s0(){var t=Fi;return Fi=null,t}var qn=0;function fs(t,n,i,r,l){return qn=0,o0(t.child,n,i,r,l)}function o0(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(r!==null){var E=zh(m);r.push(E),E.view&&(c=!0)}else c||zh(m).view&&(c=!0);gu=!0,s_(m,qn===0?n:n+"_"+qn,i),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||o0(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function Hi(t,n){for(;t!==null;)t.tag===5?o_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Hi(t.child,n)),t=t.sibling}function _u(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(_u(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=ia(n.default,n.share),n!=="none"&&(fs(t,i,n,null,!1)||Hi(t.child,!1))}t=t.sibling}}function $f(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=na(r,i),c=ia(r.default,i.paired?r.share:r.enter);c!=="none"?fs(t,l,c,null,!1)?(_u(t),i.paired||n||xs(t,r.onEnter)):Hi(t.child,!1):_u(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)$f(t,n),t=t.sibling;else _u(t)}function th(t){if(ti!==null&&ti.size!==0){var n=ti;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ia(i.default,i.share);if(c!=="none"&&(fs(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,xs(t,i.onShare)):Hi(t.child,!1)),n.delete(r),n.size===0)break}}}th(t)}t=t.sibling}}}function eh(t){if(t.tag===30){var n=t.memoizedProps,i=na(n,t.stateNode),r=ti!==null?ti.get(i):void 0,l=ia(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(fs(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ti.delete(i),xs(t,n.onShare)):xs(t,n.onExit):Hi(t.child,!1)),ti!==null&&th(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)eh(t),t=t.sibling;else ti!==null&&th(t)}function l0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=na(n,t.stateNode);n=ia(n.default,n.update),t.flags&=-5,n!=="none"&&fs(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&l0(t);t=t.sibling}}function nh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Hi(t.child,!1))}nh(t)}t=t.sibling}}function vu(t){if(t.tag===30)t.stateNode.paired=null,Hi(t.child,!1),nh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)vu(t),t=t.sibling;else nh(t)}function u0(t){for(t=t.child;t!==null;)t.tag===30?Hi(t.child,!1):(t.subtreeFlags&33554432)!==0&&u0(t),t=t.sibling}function ih(t,n,i,r,l,c,m){for(var E=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(c!==null&&qn<c.length){var W=c[qn],et=zh(L);(W.view||et.view)&&(E=!0);var dt;if(dt=(t.flags&4)===0)if(et.clip)dt=!0;else{dt=W.rect;var X=et.rect;dt=dt.y!==X.y||dt.x!==X.x||dt.height!==X.height||dt.width!==X.width}dt&&(t.flags|=4),et.abs?et=!W.abs:(W=W.rect,et=et.rect,et=W.height!==et.height||W.width!==et.width),et&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&s_(L,qn===0?i:i+"_"+qn,l),E&&(t.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(L,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?t.flags|=n.flags&32:ih(t,n.child,i,r,l,c,m)&&(E=!0));n=n.sibling}return E}function c0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=na(i,r),c=ia(i.default,i.update),m;m=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;qn=0,l=ih(r,E,l,l,c,m,!1),(t.flags&4)!==0&&l&&xs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&c0(t);t=t.sibling}}var pn=!1,Le=!1,Gi=!1,ah=!1,f0=typeof WeakSet=="function"?WeakSet:Set,mn=null,Vi=!1,Fo=!1,xu=!1,rh=!1;function aS(t,n,i){if(t=t.containerInfo,Dh=ws,t=mm(t),kc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,L=-1,W=-1,et=0,dt=0,X=t,tt=null;e:for(;;){for(var Ct;X!==r||c!==0&&X.nodeType!==3||(L=E+c),X!==m||l!==0&&X.nodeType!==3||(W=E+l),X.nodeType===3&&(E+=X.nodeValue.length),(Ct=X.firstChild)!==null;)tt=X,X=Ct;for(;;){if(X===t)break e;if(tt===r&&++et===c&&(L=E),tt===m&&++dt===l&&(W=E),(Ct=X.nextSibling)!==null)break;X=tt,tt=X.parentNode}X=Ct}r=L===-1||W===-1?null:{start:L,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(Uh={focusedElem:t,selectionRange:r},ws=!1,i=(i&335544064)===i,mn=n,n=i?9270:1024;mn!==null;){if(t=mn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&eh(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&r0(t),yu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&eh(r),yu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&r0(t),yu(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,mn=r):(i&&l0(t),yu(i))}}ti=null}function yu(t){for(;mn!==null;){var n=mn,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var m=br(n.type,l);i=c.getSnapshotBeforeUpdate(m,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Pe(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)Ih(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Ih(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=na(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ia(l.default,l.update),l!=="none"&&fs(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,mn=r;break}mn=n.return}}function h0(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i),r&4&&Bo(5,i);break;case 1:if(Xi(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(m){Pe(i,i.return,m)}else{var l=br(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Pe(i,i.return,m)}}r&64&&t0(i),r&512&&Ii(i,i.return);break;case 3:if(Xi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Xm(t,n)}catch(m){Pe(i,i.return,m)}}break;case 27:n===null&&r&4&&a0(i);case 26:case 5:Xi(t,i),n===null&&r&4&&Zf(i),r&512&&Ii(i,i.return);break;case 12:Xi(t,i);break;case 31:Xi(t,i),r&4&&g0(t,i);break;case 13:Xi(t,i),r&4&&_0(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=gS.bind(null,i),QS(t,i))));break;case 22:if(r=i.memoizedState!==null||pn,!r){var c=n!==null&&n.memoizedState!==null||Le;n=pn,l=Le,pn=r,(Le=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),bi(t,i,r)):Xi(t,i),pn=n,Le=l}break;case 30:Xi(t,i),r&512&&Ii(i,i.return);break;case 7:r&512&&Ii(i,i.return);default:Xi(t,i)}}function sh(t,n){for(t=t.child;t!==null;)d0(t,n),t=t.sibling}function d0(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(L){Pe(t,t.return,L)}oh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(L){Pe(t,t.return,L)}break;case 18:try{var E=t.stateNode;n?r_(E,!0):r_(t.stateNode,!1)}catch(L){Pe(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&sh(t,n);break;default:sh(t,n)}}function oh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:d0(i,r);break t;case 22:i.memoizedState===null&&oh(i,r);break t;default:oh(i,r)}}t=t.sibling}}function p0(t){var n=t.alternate;n!==null&&(t.alternate=null,p0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Yn=!1;function Ei(t,n,i){for(i=i.child;i!==null;)m0(t,n,i),i=i.sibling}function m0(t,n,i){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ee,i)}catch{}switch(i.tag){case 26:Le||yn(i,n),Ei(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Le&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Le||yn(i,n),Io(i);var r=je,l=Yn;Wa(i.type)&&(je=i.stateNode,Yn=!1),Ei(t,n,i),x_(i.stateNode,i.type,i.memoizedProps),je=r,Yn=l;break;case 5:Le||yn(i,n),Io(i);case 6:if(i.tag===6&&Io(i),r=je,l=Yn,je=null,Ei(t,n,i),je=r,Yn=l,je!==null)if(Yn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(i.stateNode),Ue=!0}catch(c){Pe(i,n,c)}else try{je.removeChild(i.stateNode),Ue=!0}catch(c){Pe(i,n,c)}break;case 18:je!==null&&(Yn?(t=je,a_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ds(t)):a_(je,i.stateNode));break;case 4:r=je,l=Yn,je=i.stateNode.containerInfo,Yn=!0,Ei(t,n,i),je=r,Yn=l;break;case 0:case 11:case 14:case 15:Ha(2,i,n),Le||Ha(4,i,n),Ei(t,n,i);break;case 1:Le||(yn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&e0(i,n,r)),Ei(t,n,i);break;case 21:Ei(t,n,i);break;case 22:Le=(r=Le)||i.memoizedState!==null,Ei(t,n,i),Le=r;break;case 30:yn(i,n),Ei(t,n,i);break;case 7:Le||yn(i,n),Ei(t,n,i);break;default:Ei(t,n,i)}}function g0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ds(t)}catch(i){Pe(n,n.return,i)}}}function _0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ds(t)}catch(i){Pe(n,n.return,i)}}function rS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new f0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new f0),n;default:throw Error(s(435,t.tag))}}function Su(t,n){var i=rS(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=_S.bind(null,t,r);r.then(l,l)}})}function In(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],m=t,E=n,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(Wa(L.type)){je=L.stateNode,Yn=!1;break t}break;case 5:je=L.stateNode,Yn=!1;break t;case 3:case 4:je=L.stateNode.containerInfo,Yn=!0;break t}L=L.return}if(je===null)throw Error(s(160));m0(m,E,c),je=null,Yn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)v0(n,t,i),n=n.sibling}var Ti=null;function v0(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var m=r[c];m.ref.impl=m.nextImpl}In(n,t,i),Fn(t),l&4&&(Ha(3,t,t.return),Bo(3,t),Ha(5,t,t.return));break;case 1:In(n,t,i),Fn(t),l&512&&(Le||r===null||yn(r,r.return)),l&64&&pn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=Ti,In(n,t,i),Fn(t),l&512&&(Le||r===null||yn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(pn)t.stateNode=e_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Yt]||r[Zt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Sn(r,n,i),r[Zt]=t,se(r),n=r;break t;case"link":if(c=b_("link","href",l).get(n+(i.href||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(m,1);break e}}r=l.createElement(n),Sn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=b_("meta","content",l).get(n+(i.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(m,1);break e}}r=l.createElement(n),Sn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[Zt]=t,se(r),n=r}t.stateNode=n}else pn||qh(c,t.type,t.stateNode);else t.stateNode=T_(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Le||n.parentNode.removeChild(n)):l.count--,i===null?pn||qh(c,t.type,t.stateNode):T_(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,r.memoizedProps);break;case 27:In(n,t,i),Fn(t),l&512&&(Le||r===null||yn(r,r.return)),r!==null&&l&4&&Kf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Gi,Gi=!1,In(n,t,i),Gi=c,Fn(t),l&512&&(Le||r===null||yn(r,r.return)),t.flags&32){n=t.stateNode;try{Wr(n,""),Ue=!0}catch(et){Pe(t,t.return,et)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Kf(t,n,r!==null?r.memoizedProps:n)),l&1024&&(ah=!0);break;case 6:if(In(n,t,i),Fn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,Ue=!0}catch(et){Pe(t,t.return,et)}}break;case 3:if(Ue=!1,Pu=null,c=Ti,Ti=jo(n.containerInfo),In(n,t,i),Ti=c,Fn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ds(n.containerInfo)}catch(et){Pe(t,t.return,et)}ah&&(ah=!1,x0(t)),Ue=!1;break;case 4:l=Gi,Gi=pn,r=Fp(),c=Ti,Ti=jo(t.stateNode.containerInfo),In(n,t,i),Fn(t),Ti=c,Ue&&Fo&&(xu=!0),Ue=r,Gi=l;break;case 12:In(n,t,i),Fn(t);break;case 31:In(n,t,i),Fn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Su(t,n)));break;case 13:In(n,t,i),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Tu=H()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Su(t,n)));break;case 22:c=t.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var E=pn,L=Le,W=Gi;pn=E||c,Gi=W||c,Le=L||m,In(n,t,i),Le=L,Gi=W,pn=E,Fn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||m||pn||Le||(n=m||Le,i=pn,r=Le,pn=c||pn,Le=n,Ga(t,2),pn=i,Le=r),!c&&Gi||sh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Su(t,i))));break;case 19:In(n,t,i),Fn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Su(t,n)));break;case 30:l&512&&(Le||r===null||yn(r,r.return)),l=Fp(),c=Fo,m=(i&335544064)===i,E=t.memoizedProps,Fo=m&&ia(E.default,E.update)!=="none",In(n,t,i),Fn(t),m&&r!==null&&Ue&&(t.flags|=4),Fo=c,Ue=l;break;case 21:break;case 7:l&512&&(Le||r===null||yn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:In(n,t,i),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(i0(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(jf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Wf(l))break;l=l.return}var m=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,L=Qf(t);mu(t,L,E,m);break;case 5:var W=i.stateNode;i.flags&32&&(Wr(W,""),i.flags&=-33);var et=Qf(t);mu(t,et,W,m);break;case 3:case 4:var dt=i.stateNode.containerInfo,X=Qf(t);Jf(t,X,dt,m);break;default:throw Error(s(161))}}catch(tt){Pe(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function x0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;x0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,ws=!0,n.reset(),ws=!1),t=t.sibling}}function hs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)y0(n,t),n=n.sibling;else c0(n)}function y0(t,n){var i=t.alternate;if(i===null)$f(t,!1);else switch(t.tag){case 3:if(rh=Vi=!1,s0(),hs(n,t),!Vi&&!xu){if(t=Fi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];o_(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),rh=!0}Fi=null;break;case 5:hs(n,t);break;case 4:r=Vi,Vi=!1,hs(n,t),Vi&&(xu=!0),Vi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?$f(t,!1):hs(n,t));break;case 30:r=Vi,l=s0(),Vi=!1,hs(n,t),Vi&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;n=na(c,m),m=na(i.memoizedProps,m);var E=ia(c.default,c.update);E==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,qn=0,n=ih(t,i,n,m,E,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(xs(t,t.memoizedProps.onUpdate),Fi=l):l!==null&&(l.push.apply(l,Fi),Fi=l),Vi=(t.flags&32)!==0?!0:r;break;default:hs(n,t)}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h0(t,n.alternate,n),n=n.sibling}function Ga(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Ga(i,r);break;case 1:yn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&e0(i,i.return,l),Ga(i,r);break;case 27:(r&2)!==0&&x_(i.stateNode,i.type,i.memoizedProps);case 5:yn(i,i.return),i.tag!==5&&i.tag!==27||Io(i),Ga(i,r);break;case 6:Io(i);break;case 26:yn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Le||l.parentNode.removeChild(l),Ga(i,r);break;case 22:i.memoizedState===null&&Ga(i,r);break;case 30:yn(i,i.return),Ga(i,r);break;case 7:yn(i,i.return);default:Ga(i,r)}t=t.sibling}}function bi(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,m=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:bi(l,c,i),Bo(4,c);break;case 1:if(bi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(et){Pe(r,r.return,et)}if(r=c,l=r.updateQueue,l!==null){var L=r.stateNode;try{var W=l.shared.hiddenCallbacks;if(W!==null)for(l.shared.hiddenCallbacks=null,l=0;l<W.length;l++)Vm(W[l],L)}catch(et){Pe(r,r.return,et)}}E&&m&64&&t0(c),Ii(c,c.return);break;case 27:(i&2)!==0&&a0(c);case 5:c.tag!==5&&c.tag!==27||n0(c),bi(l,c,i),E&&r===null&&m&4&&Zf(c),Ii(c,c.return);break;case 6:n0(c);break;case 26:L=c.stateNode,c.memoizedState!==null||L===null||pn||qh(jo(L.ownerDocument),c.type,L),bi(l,c,i),E&&r===null&&m&4&&Zf(c),Ii(c,c.return);break;case 12:bi(l,c,i);break;case 31:bi(l,c,i),E&&m&4&&g0(l,c);break;case 13:bi(l,c,i),E&&m&4&&_0(l,c);break;case 22:c.memoizedState===null&&bi(l,c,i),Ii(c,c.return);break;case 30:bi(l,c,i),Ii(c,c.return);break;case 7:Ii(c,c.return);default:bi(l,c,i)}n=n.sibling}}function lh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&To(i))}function uh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t))}function _i(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)S0(t,n,i,r),n=n.sibling;else l&&u0(n)}function S0(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&vu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,i,r),c&2048&&Bo(9,n);break;case 1:_i(t,n,i,r);break;case 3:_i(t,n,i,r),l&&rh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&To(c)));break;case 12:if(c&2048){_i(t,n,i,r),c=n.stateNode;try{var m=n.memoizedProps,E=m.id,L=m.onPostCommit;typeof L=="function"&&L(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Pe(n,n.return,W)}}else _i(t,n,i,r);break;case 31:_i(t,n,i,r);break;case 13:_i(t,n,i,r);break;case 23:break;case 22:m=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&vu(E),m._visibility&2?_i(t,n,i,r):Ho(t,n)):(l&&E!==null&&E.memoizedState!==null&&vu(n),m._visibility&2?_i(t,n,i,r):(m._visibility|=2,ds(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&lh(E,n);break;case 24:_i(t,n,i,r),c&2048&&uh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Hi(c.child,!0),Hi(n.child,!0))),_i(t,n,i,r);break;default:_i(t,n,i,r)}}function ds(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,m=n,E=i,L=r,W=m.flags;switch(m.tag){case 0:case 11:case 15:ds(c,m,E,L,l),Bo(8,m);break;case 23:break;case 22:var et=m.stateNode;m.memoizedState!==null?et._visibility&2?ds(c,m,E,L,l):Ho(c,m):(et._visibility|=2,ds(c,m,E,L,l)),l&&W&2048&&lh(m.alternate,m);break;case 24:ds(c,m,E,L,l),l&&W&2048&&uh(m.alternate,m);break;default:ds(c,m,E,L,l)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Ho(i,r),l&2048&&lh(r.alternate,r);break;case 24:Ho(i,r),l&2048&&uh(r.alternate,r);break;default:Ho(i,r)}n=n.sibling}}var Ar=8192;function Rr(t,n,i){if(t.subtreeFlags&Ar)for(t=t.child;t!==null;)M0(t,n,i),t=t.sibling}function M0(t,n,i){switch(t.tag){case 26:Rr(t,n,i),t.flags&Ar&&(t.memoizedState!==null?fM(i,Ti,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&w_(i,t)));break;case 5:Rr(t,n,i),t.flags&Ar&&(t=t.stateNode,(n&335544128)===n&&w_(i,t));break;case 3:case 4:var r=Ti;Ti=jo(t.stateNode.containerInfo),Rr(t,n,i),Ti=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ar,Ar=16777216,Rr(t,n,i),Ar=r):Rr(t,n,i));break;case 30:if((t.flags&Ar)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ti===null&&(ti=new Map),ti.set(r,l)}Rr(t,n,i);break;default:Rr(t,n,i)}}function E0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];mn=r,b0(r,t)}E0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)T0(t),t=t.sibling}function T0(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Mu(t)):Go(t);break;default:Go(t)}}function Mu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];mn=r,b0(r,t)}E0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Mu(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Mu(n));break;default:Mu(n)}t=t.sibling}}function b0(t,n){for(;mn!==null;){var i=mn;switch(i.tag){case 0:case 11:case 15:Ha(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:To(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,mn=r;else t:for(i=t;mn!==null;){r=mn;var l=r.sibling,c=r.return;if(p0(r),r===i){mn=null;break t}if(l!==null){l.return=c,mn=l;break t}mn=c}}}var sS={getCacheForType:function(t){var n=_n(tn),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return _n(tn).controller.signal}},oS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ve=null,xe=null,Se=0,ze=0,ei=null,Va=!1,ps=!1,ch=!1,ha=0,Qe=0,Xa=0,Cr=0,Eu=0,ni=0,ms=0,Vo=null,Wn=null,fh=!1,Tu=0,A0=0,bu=1/0,Au=null,ka=null,Ze=0,Ai=null,wr=null,ki=0,hh=0,dh=null,R0=null,gs=null,_s=null,vs=null,Xo=0,Ru=null;function ii(){return(Ne&2)!==0&&Se!==0?Se&-Se:Et.T!==null?Eh():Wt()}function C0(){if(ni===0)if((Se&536870912)===0||me){var t=cr;cr<<=1,(cr&3932160)===0&&(cr=262144),ni=t}else ni=536870912;return t=vn.current,t!==null&&(t.flags|=32),ni}function xs(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=l_(na(t.memoizedProps,i))),_s===null&&(_s=[]),_s.push(n.bind(null,r))}}function jn(t,n,i){(t===Ve&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(ys(t,0),qa(t,Se,ni,!1)),A(t,i),((Ne&2)===0||t!==Ve)&&(t===Ve&&((Ne&2)===0&&(Cr|=i),Qe===4&&qa(t,Se,ni,!1)),qi(t))}function w0(t,n,i){if((Ne&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||ba(t,n),l=r?cS(t,n):mh(t,n,!0),c=r;do{if(l===0){ps&&!r&&qa(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!lS(i)){l=mh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var E=t;l=Vo;var L=E.current.memoizedState.isDehydrated;if(L&&(ys(E,m).flags|=256),m=mh(E,m,!1),m!==2&&m!==6){if(ch&&!L){E.errorRecoveryDisabledLanes|=c,Cr|=c,l=4;break t}c=Wn,Wn=l,c!==null&&(Wn===null?Wn=c:Wn.push.apply(Wn,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){ys(t,0),qa(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qa(r,n,ni,!Va);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Tu+300-H(),10<l)){if(qa(r,n,ni,!Va),$i(r,0,!0)!==0)break t;ki=n,r.timeoutHandle=Oh(D0.bind(null,r,i,Wn,Au,fh,n,ni,Cr,ms,Va,c,"Throttled",-0,0),l);break t}D0(r,i,Wn,Au,fh,n,ni,Cr,ms,Va,c,null,-0,0)}}break}while(!0);qi(t)}function D0(t,n,i,r,l,c,m,E,L,W,et,dt,X,tt){t.timeoutHandle=-1;var Ct=n.subtreeFlags,Xt=(c&335544064)===c;if(dt=null,(Xt||Ct&8192||(Ct&16785408)===16785408)&&(dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ti=null,M0(n,c,dt),Xt&&(Ct=dt,Xt=t.containerInfo,Xt=(Xt.nodeType===9?Xt:Xt.ownerDocument).__reactViewTransition,Xt!=null&&(Ct.count++,Ct.waitingForViewTransition=!0,Ct=Qo.bind(Ct),Xt.finished.then(Ct,Ct))),Ct=(c&62914560)===c?Tu-H():(c&4194048)===c?A0-H():0,Ct=hM(dt,Ct),Ct!==null)){ki=c,t.cancelPendingCommit=Ct(I0.bind(null,t,n,c,i,r,l,m,E,L,W,et,dt,null,X,tt)),qa(t,c,m,!W);return}I0(t,n,c,i,r,l,m,E,L,W,et,dt)}function lS(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Jn(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,i,r){n=co(t,n),n&=~Eu,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-bn(l),m=1<<c;r[c]=-1,l&=~m}i!==0&&at(t,i,n)}function Cu(){return(Ne&6)===0?(ko(0),!1):!0}function ph(){if(xe!==null){if(ze===0)var t=xe.return;else t=xe,sa=gr=null,Mf(t),ss=null,Ro=0,t=xe;for(;t!==null;)$g(t.alternate,t),t=t.return;xe=null}}function ys(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,NS(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ki=0,ph(),Ve=t,xe=i=aa(t.current,null),Se=n,ze=0,ei=null,Va=!1,ps=ba(t,n),ch=!1,ms=ni=Eu=Cr=Xa=Qe=0,Wn=Vo=null,fh=!1,ha=co(t,n),Pl(),i}function U0(t,n){ue=null,Et.H=ou,n===rs||n===Wl?(n=Im(),ze=3):n===uf?(n=Im(),ze=4):ze=n===Bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,xe===null&&(Qe=1,lu(t,di(n,t.current)))}function N0(){var t=vn.current;return t===null?!0:(Se&4194048)===Se?Cn===null:(Se&62914560)===Se||(Se&536870912)!==0?t===Cn:!1}function L0(){var t=Et.H;return Et.H=ou,t===null?ou:t}function O0(){var t=Et.A;return Et.A=sS,t}function wu(){Qe=4,Va||(Se&4194048)!==Se&&vn.current!==null||(ps=!0),(Xa&134217727)===0&&(Cr&134217727)===0||Ve===null||qa(Ve,Se,ni,!1)}function mh(t,n,i){var r=Ne;Ne|=2;var l=L0(),c=O0();(Ve!==t||Se!==n)&&(Au=null,ys(t,n)),n=!1;var m=Qe;t:do try{if(ze!==0&&xe!==null){var E=xe,L=ei;switch(ze){case 8:ph(),m=6;break t;case 3:case 2:case 9:case 6:vn.current===null&&(n=!0);var W=ze;if(ze=0,ei=null,Ss(t,E,L,W),i&&ps){m=0;break t}break;default:W=ze,ze=0,ei=null,Ss(t,E,L,W)}}uS(),m=Qe;break}catch(et){U0(t,et)}while(!0);return n&&t.shellSuspendCounter++,sa=gr=null,Ne=r,Et.H=l,Et.A=c,xe===null&&(Ve=null,Se=0,Pl()),m}function uS(){for(;xe!==null;)z0(xe)}function cS(t,n){var i=Ne;Ne|=2;var r=L0(),l=O0();Ve!==t||Se!==n?(Au=null,bu=H()+500,ys(t,n)):ps=ba(t,n);t:do try{if(ze!==0&&xe!==null){n=xe;var c=ei;e:switch(ze){case 1:ze=0,ei=null,Ss(t,n,c,1);break;case 2:case 9:if(Pm(c)){ze=0,ei=null,P0(n);break}n=function(){ze!==2&&ze!==9||Ve!==t||(ze=7),qi(t)},c.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Pm(c)?(ze=0,ei=null,P0(n)):(ze=0,ei=null,Ss(t,n,c,7));break;case 5:var m=null;switch(xe.tag){case 26:m=xe.memoizedState;case 5:case 27:var E=xe;if(m?R_(m):E.stateNode.complete){ze=0,ei=null;var L=E.sibling;if(L!==null)xe=L;else{var W=E.return;W!==null?(xe=W,Du(W)):xe=null}break e}}ze=0,ei=null,Ss(t,n,c,5);break;case 6:ze=0,ei=null,Ss(t,n,c,6);break;case 8:ph(),Qe=6;break t;default:throw Error(s(462))}}fS();break}catch(et){U0(t,et)}while(!0);return sa=gr=null,Et.H=r,Et.A=l,Ne=i,xe!==null?0:(Ve=null,Se=0,Pl(),Qe)}function fS(){for(;xe!==null&&!le();)z0(xe)}function z0(t){var n=Qg(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?Du(t):xe=n}function P0(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=kg(i,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=kg(i,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Mf(n);var r=n;r===dn&&(me?(Vl(r),r.tag===5&&r.stateNode!=null&&(Xe=r.stateNode)):(Vl(r),me=!0));default:$g(i,n),n=xe=bm(n,ha),n=Qg(i,n,ha)}t.memoizedProps=t.pendingProps,n===null?Du(t):xe=n}function Ss(t,n,i,r){sa=gr=null,Mf(n),ss=null,Ro=0;var l=n.return;try{if(Jy(t,l,n,i,Se)){Qe=1,lu(t,di(i,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;Qe=1,lu(t,di(i,t.current)),xe=null;return}n.flags&32768?(me||r===1?t=!0:ps||(Se&536870912)!==0?t=!1:(Va=t=!0,(r===2||r===9||r===3||r===6)&&(r=vn.current,r!==null&&r.tag===13&&(r.flags|=16384))),B0(n,t)):Du(n)}function Du(t){var n=t;do{if((n.flags&32768)!==0){B0(n,Va);return}t=n.return;var i=nS(n.alternate,n,ha);if(i!==null){xe=i;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);Qe===0&&(Qe=5)}function B0(t,n){do{var i=iS(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);Qe=6,xe=null}function I0(t,n,i,r,l,c,m,E,L,W,et,dt){t.cancelPendingCommit=null;do Uu();while(Ze!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ve&&(xe=Ve=null,Se=0),wr=n,Ai=t,ki=i,dh=l,R0=r,hS(t,n,i,m,E,L,dt)}}function hS(t,n,i,r,l,c,m){var E=n.lanes|n.childLanes;if(hh=E,E|=Zc,j(t,i,E,r,l,c),_s=null,(i&335544064)===i?(vs=Hy(t),r=10262):(vs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,vS(zt,function(){return xh(),null})):(t.callbackNode=null,t.callbackPriority=0),gu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null,l=bt.p,bt.p=2,c=Ne,Ne|=4;try{aS(t,n,i)}finally{Ne=c,bt.p=l,Et.T=r}}Ze=1,gu?gs=IS(m,t.containerInfo,vs,gh,_h,pS,vh,xh,dS):(gh(),_h(),vh())}function dS(t){if(Ze!==0){var n=Ai.onRecoverableError;n(t,{componentStack:null})}}function pS(){Ze===3&&(Ze=0,y0(wr,Ai),Ze=4)}function gh(){if(Ze===1){Ze=0;var t=Ai,n=wr,i=ki,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null;var l=bt.p;bt.p=2;var c=Ne;Ne|=4;try{Fo=xu=!1,v0(n,t,i),i=Uh;var m=mm(t.containerInfo),E=i.focusedElem,L=i.selectionRange;if(m!==E&&E&&E.ownerDocument&&pm(E.ownerDocument.documentElement,E)){if(L!==null&&kc(E)){var W=L.start,et=L.end;if(et===void 0&&(et=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(et,E.value.length);else{var dt=E.ownerDocument||document,X=dt&&dt.defaultView||window;if(X.getSelection){var tt=X.getSelection(),Ct=E.textContent.length,Xt=Math.min(L.start,Ct),ce=L.end===void 0?Xt:Math.min(L.end,Ct);!tt.extend&&Xt>ce&&(m=ce,ce=Xt,Xt=m);var Y=dm(E,Xt),B=dm(E,ce);if(Y&&B&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==B.node||tt.focusOffset!==B.offset)){var J=dt.createRange();J.setStart(Y.node,Y.offset),tt.removeAllRanges(),Xt>ce?(tt.addRange(J),tt.extend(B.node,B.offset)):(J.setEnd(B.node,B.offset),tt.addRange(J))}}}}for(dt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&dt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ft=dt[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}ws=!!Dh,Uh=Dh=null}finally{Ne=c,bt.p=l,Et.T=r}}t.current=n,Ze=2}}function _h(){if(Ze===2){Ze=0;var t=Ai,n=wr,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Et.T,Et.T=null;var r=bt.p;bt.p=2;var l=Ne;Ne|=4;try{h0(t,n.alternate,n)}finally{Ne=l,bt.p=r,Et.T=i}}Ze=3}}function vh(){if(Ze===4||Ze===3){Ze=0;var t=gs;gs=null,Ie();var n=Ai,i=wr,r=ki,l=R0,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?Ze=5:(Ze=0,wr=Ai=null,F0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ka=null),Pt(r),i=i.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Et.T,c=bt.p,bt.p=2,Et.T=null;try{for(var m=n.onRecoverableError,E=0;E<l.length;E++){var L=l[E];m(L.value,{componentStack:L.stack})}}finally{Et.T=i,bt.p=c}}if(l=_s,m=vs,vs=null,l!==null&&(_s=null,m===null&&(m=[]),t!==null))for(L=0;L<l.length;L++)i=(0,l[L])(m),i!==void 0&&t.finished.finally(i);(ki&3)!==0&&Uu(),qi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Ru?Xo++:(Xo=0,Ru=n):(Xo=0,Ru=null),ko(0)}}function F0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,To(n)))}function Uu(){return gs!==null&&(gs.skipTransition(),gs=null),gh(),_h(),vh(),xh()}function xh(){if(Ze!==5)return!1;var t=Ai,n=hh;hh=0;var i=Pt(ki),r=Et.T,l=bt.p;try{bt.p=32>i?32:i,Et.T=null,i=dh,dh=null;var c=Ai,m=ki;if(Ze=0,wr=Ai=null,ki=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,T0(c.current),S0(c,c.current,m,i),Ne=E,ko(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ee,c)}catch{}return!0}finally{bt.p=l,Et.T=r,F0(t,n)}}function H0(t,n,i){n=di(i,n),n=Pf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(A(t,2),qi(t))}function Pe(t,n,i){if(t.tag===3)H0(t,t,i);else for(;n!==null;){if(n.tag===3){H0(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ka===null||!ka.has(r))){t=di(i,t),i=Pg(2),r=Pa(n,i,2),r!==null&&(Bg(i,r,n,t),A(r,2),qi(r));break}}n=n.return}}function yh(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new oS;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(ch=!0,l.add(i),t=mS.bind(null,t,n,i),n.then(t,t))}function mS(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ve===t&&(Se&i)===i&&((Qe===4||Qe===3&&(Se&62914560)===Se&&300>H()-Tu)&&(Ne&2)===0?ys(t,0):Eu|=i,ms===Se&&(ms=0)),qi(t)}function G0(t,n){n===0&&(n=Tl()),t=dr(t,n),t!==null&&(A(t,n),qi(t))}function gS(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),G0(t,i)}function _S(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),G0(t,i)}function vS(t,n){return Gt(t,n)}var Ms=null,Es=null,Sh=!1,Nu=!1,Mh=!1,Ya=0;function qi(t){t!==Es&&t.next===null&&(Es===null?Ms=Es=t:Es=Es.next=t),Nu=!0,Sh||(Sh=!0,yS())}function ko(t,n){if(!Mh&&Nu){Mh=!0;do for(var i=!1,r=Ms;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var m=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-bn(42|t)+1)-1,c&=l&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,q0(r,c))}else c=Se,c=$i(r,r===Ve?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||ba(r,c)||(i=!0,q0(r,c));r=r.next}while(i);Mh=!1}}function xS(){V0()}function V0(){Nu=Sh=!1;var t=0;Ya!==0&&US()&&(t=Ya);for(var n=H(),i=null,r=Ms;r!==null;){var l=r.next,c=X0(r,n);c===0?(r.next=null,i===null?Ms=l:i.next=l,l===null&&(Es=i)):(i=r,(t!==0||(c&3)!==0)&&(Nu=!0)),r=l}Ze!==0&&Ze!==5||ko(t),Ya!==0&&(Ya=0)}function X0(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-bn(c),E=1<<m,L=l[m];L===-1?((E&i)===0||(E&r)!==0)&&(l[m]=Ac(E,n)):L<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ve,i=Se,i=$i(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&_e(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||ba(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&_e(r),Pt(i)){case 2:case 8:i=_t;break;case 32:i=zt;break;case 268435456:i=re;break;default:i=zt}return r=k0.bind(null,t),i=Gt(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&_e(r),t.callbackPriority=2,t.callbackNode=null,2}function k0(t,n){if(Ze!==0&&Ze!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Uu()&&t.callbackNode!==i)return null;var r=Se;return r=$i(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(w0(t,r,n),X0(t,H()),t.callbackNode!=null&&t.callbackNode===i?k0.bind(null,t):null)}function q0(t,n){if(Uu())return null;w0(t,n,!0)}function yS(){LS(function(){(Ne&6)!==0?Gt(ut,xS):V0()})}function Eh(){if(Ya===0){var t=xr;t===0&&(t=ur,ur<<=1,(ur&261888)===0&&(ur=256)),Ya=t}return Ya}function Y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cl(t)}function SS(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=Y0((l[Bt]||null).action),m=r.submitter;m&&(n=(n=m[Bt]||null)?Y0(n.formAction):m.getAttribute("formAction"),n!==null&&(c=n,m=null));var E=new Nl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ya!==0){var L=new FormData(l,m);Uf(i,{pending:!0,data:L,method:l.method,action:c},null,L)}}else typeof c=="function"&&(E.preventDefault(),L=new FormData(l,m),Uf(i,{pending:!0,data:L,method:l.method,action:c},c,L))},currentTarget:l}]})}}for(var Th=0;Th<jc.length;Th++){var bh=jc[Th],MS=bh.toLowerCase(),ES=bh[0].toUpperCase()+bh.slice(1);Mi(MS,"on"+ES)}Mi(vm,"onAnimationEnd"),Mi(xm,"onAnimationIteration"),Mi(ym,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Ny,"onTransitionRun"),Mi(Ly,"onTransitionStart"),Mi(Oy,"onTransitionCancel"),Mi(Sm,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function W0(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var m=r.length-1;0<=m;m--){var E=r[m],L=E.instance,W=E.currentTarget;if(E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(et){zl(et)}l.currentTarget=null,c=L}else for(m=0;m<r.length;m++){if(E=r[m],L=E.instance,W=E.currentTarget,E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(et){zl(et)}l.currentTarget=null,c=L}}}}function ye(t,n){var i=n[Oe];i===void 0&&(i=n[Oe]=new Set);var r=t+"__bubble";i.has(r)||(j0(n,t,2,!1),i.add(r))}function Ah(t,n,i){var r=0;n&&(r|=4),j0(i,t,r,n)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function Rh(t){if(!t[Lu]){t[Lu]=!0,Aa.forEach(function(i){i!=="selectionchange"&&(TS.has(i)||Ah(i,!1,t),Ah(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Lu]||(n[Lu]=!0,Ah("selectionchange",!1,n))}}function j0(t,n,i,r){switch(B_(n)){case 2:var l=gM;break;case 8:l=_M;break;default:l=Wh}i=l.bind(null,n,i,t),l=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Ch(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=r.return;m!==null;){var L=m.tag;if((L===3||L===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=sn(E),m===null)return;if(L=m.tag,L===5||L===6||L===26||L===27){r=c=m;continue t}E=E.parentNode}}r=r.return}jp(function(){var W=c,et=Nc(i),dt=[];t:{var X=Mm.get(t);if(X!==void 0){var tt=Nl,Ct=t;switch(t){case"keypress":if(Dl(i)===0)break t;case"keydown":case"keyup":tt=ly;break;case"focusin":Ct="focus",tt=Ic;break;case"focusout":Ct="blur",tt=Ic;break;case"beforeblur":case"afterblur":tt=Ic;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=dy;break;case vm:case xm:case ym:tt=$x;break;case Sm:tt=my;break;case"scroll":case"scrollend":tt=jx;break;case"wheel":tt=_y;break;case"copy":case"cut":case"paste":tt=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=$p;break;case"submit":tt=fy;break;case"toggle":case"beforetoggle":tt=xy}var Xt=(n&4)!==0,ce=!Xt&&(t==="scroll"||t==="scrollend"),Y=Xt?X!==null?X+"Capture":null:X;Xt=[];for(var B=W,J;B!==null;){var ft=B;if(J=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||J===null||Y===null||(ft=ho(B,Y),ft!=null&&Xt.push(Yo(B,ft,J))),ce)break;B=B.return}0<Xt.length&&(X=new tt(X,Ct,null,i,et),dt.push({event:X,listeners:Xt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",tt&&i!==Uc&&(Ct=i.relatedTarget||i.fromElement)&&(sn(Ct)||Ct[pe]))break t;(X||tt)&&(Ct=et.window===et?et:(tt=et.ownerDocument)?tt.defaultView||tt.parentWindow:window,X?(tt=i.relatedTarget||i.toElement,X=W,tt=tt?sn(tt):null,tt!==null&&(ce=f(tt),Xt=tt.tag,tt!==ce||Xt!==5&&Xt!==27&&Xt!==6)&&(tt=null)):(X=null,tt=W),X!==tt&&(Xt=Qp,ft="onMouseLeave",Y="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=$p,ft="onPointerLeave",Y="onPointerEnter",B="pointer"),ce=X==null?Ct:on(X),J=tt==null?Ct:on(tt),Ct=new Xt(ft,B+"leave",X,i,et),Ct.target=ce,Ct.relatedTarget=J,ft=null,sn(et)===W&&(Xt=new Xt(Y,B+"enter",tt,i,et),Xt.target=J,Xt.relatedTarget=ce,ft=Xt),ce=ft,Xt=X&&tt?F(X,tt,bS):null,X!==null&&Z0(dt,Ct,X,Xt,!1),tt!==null&&ce!==null&&Z0(dt,ce,tt,Xt,!0)))}t:{if(X=W?on(W):window,tt=X.nodeName&&X.nodeName.toLowerCase(),tt==="select"||tt==="input"&&X.type==="file")var Ht=om;else if(rm(X))if(lm)Ht=wy;else{Ht=Ry;var Me=Ay}else tt=X.nodeName,!tt||tt.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Dc(W.elementType)&&(Ht=om):Ht=Cy;if(Ht&&(Ht=Ht(t,W))){sm(dt,Ht,i,et);break t}Me&&Me(t,X,W)}switch(Me=W?on(W):window,t){case"focusin":(rm(Me)||Me.contentEditable==="true")&&(Qr=Me,qc=W,So=null);break;case"focusout":So=qc=Qr=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,gm(dt,i,et);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":gm(dt,i,et)}var Qt;if(Hc)t:{switch(t){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Kr?im(t,i)&&(ne="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ne="onCompositionStart");ne&&(tm&&i.locale!=="ko"&&(Kr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Kr&&(Qt=Zp()):(Ra=et,zc="value"in Ra?Ra.value:Ra.textContent,Kr=!0)),Me=Ou(W,ne),0<Me.length&&(ne=new Jp(ne,t,null,i,et),dt.push({event:ne,listeners:Me}),Qt?ne.data=Qt:(Qt=am(i),Qt!==null&&(ne.data=Qt)))),(Qt=Sy?My(t,i):Ey(t,i))&&(ne=Ou(W,"onBeforeInput"),0<ne.length&&(Me=new Jp("onBeforeInput","beforeinput",null,i,et),dt.push({event:Me,listeners:ne}),Me.data=Qt)),SS(dt,t,W,i,et)}W0(dt,n)})}function Yo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Ou(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=ho(t,i),l!=null&&r.unshift(Yo(t,l,c)),l=ho(t,n),l!=null&&r.push(Yo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function bS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z0(t,n,i,r,l){for(var c=n._reactName,m=[];i!==null&&i!==r;){var E=i,L=E.alternate,W=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||W===null||(L=W,l?(W=ho(i,c),W!=null&&m.unshift(Yo(i,W,L))):l||(W=ho(i,c),W!=null&&m.push(Yo(i,W,L)))),i=i.return}m.length!==0&&t.push({event:n,listeners:m})}var AS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function K0(t){return(typeof t=="string"?t:""+t).replace(AS,`
`).replace(RS,"")}function Q0(t,n){return n=K0(n),K0(t)===n}function Be(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Wr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Wr(t,""+r);else return;break;case"className":Rl(t,"class",r);break;case"tabIndex":Rl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Rl(t,i,r);break;case"style":Yp(t,r,c);return;case"data":if(n!=="object"){Rl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Cl(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&Be(t,n,"name",l.name,l,null),Be(t,n,"formEncType",l.formEncType,l,null),Be(t,n,"formMethod",l.formMethod,l,null),Be(t,n,"formTarget",l.formTarget,l,null)):(Be(t,n,"encType",l.encType,l,null),Be(t,n,"method",l.method,l,null),Be(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Cl(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=zi);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Cl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),Al(t,"popover",r);break;case"xlinkActuate":ta(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ta(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ta(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ta(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ta(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ta(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ta(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ta(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ta(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Al(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Yx.get(i)||i,Al(t,i,r);else return}Ue=!0}function wh(t,n,i,r,l,c){switch(i){case"style":Yp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Wr(t,r);else if(typeof r=="number"||typeof r=="bigint")Wr(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!On.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[Bt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}Ue=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Al(t,i,r)}return}Ue=!0}function Sn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,c,m,i,null)}}l&&Be(t,n,"srcSet",i.srcSet,i,null),r&&Be(t,n,"src",i.src,i,null);return;case"input":ye("invalid",t);var E=c=m=l=null,L=null,W=null;for(r in i)if(i.hasOwnProperty(r)){var et=i[r];if(et!=null)switch(r){case"name":l=et;break;case"type":m=et;break;case"checked":L=et;break;case"defaultChecked":W=et;break;case"value":c=et;break;case"defaultValue":E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Be(t,n,r,et,i,null)}}Vp(t,c,E,L,W,m,l,!1);return;case"select":ye("invalid",t),r=m=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":r=E;default:Be(t,n,l,E,i,null)}n=c,i=m,t.multiple=!!r,n!=null?Yr(t,!!r,n,!1):i!=null&&Yr(t,!!r,i,!0);return;case"textarea":ye("invalid",t),c=l=r=null;for(m in i)if(i.hasOwnProperty(m)&&(E=i[m],E!=null))switch(m){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Be(t,n,m,E,i,null)}kp(t,r,l,c);return;case"option":for(L in i)if(i.hasOwnProperty(L)&&(r=i[L],r!=null))switch(L){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Be(t,n,L,r,i,null)}return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<qo.length;r++)ye(qo[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in i)if(i.hasOwnProperty(W)&&(r=i[W],r!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,W,r,i,null)}return;default:if(Dc(n)){for(et in i)i.hasOwnProperty(et)&&(r=i[et],r!==void 0&&wh(t,n,et,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Be(t,n,E,r,i,null))}var CS={};function wS(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,E=null,L=null,W=null,et=null;for(tt in i){var dt=i[tt];if(i.hasOwnProperty(tt)&&dt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":L=dt;default:r.hasOwnProperty(tt)||Be(t,n,tt,null,r,dt)}}for(var X in r){var tt=r[X];if(dt=i[X],r.hasOwnProperty(X)&&(tt!=null||dt!=null))switch(X){case"type":tt!==dt&&(Ue=!0),c=tt;break;case"name":tt!==dt&&(Ue=!0),l=tt;break;case"checked":tt!==dt&&(Ue=!0),W=tt;break;case"defaultChecked":tt!==dt&&(Ue=!0),et=tt;break;case"value":tt!==dt&&(Ue=!0),m=tt;break;case"defaultValue":tt!==dt&&(Ue=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==dt&&Be(t,n,X,tt,r,dt)}}Cc(t,m,E,L,W,et,c,l);return;case"select":tt=m=E=X=null;for(c in i)if(L=i[c],i.hasOwnProperty(c)&&L!=null)switch(c){case"value":break;case"multiple":tt=L;default:r.hasOwnProperty(c)||Be(t,n,c,null,r,L)}for(l in r)if(c=r[l],L=i[l],r.hasOwnProperty(l)&&(c!=null||L!=null))switch(l){case"value":c!==L&&(Ue=!0),X=c;break;case"defaultValue":c!==L&&(Ue=!0),E=c;break;case"multiple":c!==L&&(Ue=!0),m=c;default:c!==L&&Be(t,n,l,c,r,L)}n=E,i=m,r=tt,X!=null?Yr(t,!!i,X,!1):!!r!=!!i&&(n!=null?Yr(t,!!i,n,!0):Yr(t,!!i,i?[]:"",!1));return;case"textarea":tt=X=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Be(t,n,E,null,r,l)}for(m in r)if(l=r[m],c=i[m],r.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":l!==c&&(Ue=!0),X=l;break;case"defaultValue":l!==c&&(Ue=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Be(t,n,m,l,r,c)}Xp(t,X,tt);return;case"option":for(var Ct in i)if(X=i[Ct],i.hasOwnProperty(Ct)&&X!=null&&!r.hasOwnProperty(Ct))switch(Ct){case"selected":t.selected=!1;break;default:Be(t,n,Ct,null,r,X)}for(L in r)if(X=r[L],tt=i[L],r.hasOwnProperty(L)&&X!==tt&&(X!=null||tt!=null))switch(L){case"selected":X!==tt&&(Ue=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Be(t,n,L,X,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in i)X=i[Xt],i.hasOwnProperty(Xt)&&X!=null&&!r.hasOwnProperty(Xt)&&Be(t,n,Xt,null,r,X);for(W in r)if(X=r[W],tt=i[W],r.hasOwnProperty(W)&&X!==tt&&(X!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,n));break;default:Be(t,n,W,X,r,tt)}return;default:if(Dc(n)){for(var ce in i)X=i[ce],i.hasOwnProperty(ce)&&X!==void 0&&!r.hasOwnProperty(ce)&&wh(t,n,ce,void 0,r,X);for(et in r)X=r[et],tt=i[et],!r.hasOwnProperty(et)||X===tt||X===void 0&&tt===void 0||wh(t,n,et,X,r,tt);return}}for(var Y in i)X=i[Y],i.hasOwnProperty(Y)&&X!=null&&!r.hasOwnProperty(Y)&&Be(t,n,Y,null,r,X);for(dt in r)X=r[dt],tt=i[dt],!r.hasOwnProperty(dt)||X===tt||X==null&&tt==null||Be(t,n,dt,X,r,tt)}function J0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,m=l.initiatorType,E=l.duration;if(c&&E&&J0(m)){for(m=0,E=l.responseEnd,r+=1;r<i.length;r++){var L=i[r],W=L.startTime;if(W>E)break;var et=L.transferSize,dt=L.initiatorType;et&&J0(dt)&&(L=L.responseEnd,m+=et*(L<E?1:(E-W)/(L-W)))}if(--r,n+=8*(c+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dh=null,Uh=null;function Wo(t){return t.nodeType===9?t:t.ownerDocument}function $0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function e_(t,n,i,r){return i=Wo(i).createElement(t),i[Zt]=r,i[Bt]=n,Sn(i,t,n),se(i),i}function Nh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lh=null;function US(){var t=window.event;return t&&t.type==="popstate"?t===Lh?!1:(Lh=t,!0):(Lh=null,!1)}var Oh=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,i_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Oh,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(t){return n_.resolve(null).then(t).catch(OS)}:Oh;function OS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function a_(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ds(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Vh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Vh(i);for(var c=i.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[Yt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=m}}else i==="body"&&Vh(t.ownerDocument.body);i=l}while(i);Ds(n)}function r_(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function s_(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function o_(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function zS(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function zh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return zS(n,i,t)}function PS(t){return t.documentElement.clientHeight}function BS(t){this.addEventListener("load",t),this.addEventListener("error",t)}function IS(t,n,i,r,l,c,m,E,L){var W=n.nodeType===9?n:n.ownerDocument;try{var et=W.startViewTransition({update:function(){var X=W.defaultView,tt=X.navigation&&X.navigation.transition,Ct=W.fonts.status;r();var Xt=[];if(Ct==="loaded"&&(PS(W),W.fonts.status==="loading"&&Xt.push(W.fonts.ready)),Ct=Xt.length,t!==null)for(var ce=t.suspenseyImages,Y=0,B=0;B<ce.length;B++){var J=ce[B];if(!J.complete){var ft=J.getBoundingClientRect();if(0<ft.bottom&&0<ft.right&&ft.top<X.innerHeight&&ft.left<X.innerWidth){if(Y+=C_(J),Y>Bu){Xt.length=Ct;break}J=new Promise(BS.bind(J)),Xt.push(J)}}}if(0<Xt.length)return X=Promise.race([Promise.all(Xt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,X]):X).then(c,c);if(l(),tt)return tt.finished.then(c,c);c()},types:i});W.__reactViewTransition=et;var dt=[];return et.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<X.length;tt++){var Ct=X[tt],Xt=Ct.effect,ce=Xt.pseudoElement;if(ce!=null&&ce.startsWith("::view-transition")){dt.push(Ct),Ct=Xt.getKeyframes();for(var Y=ce=void 0,B=!0,J=0;J<Ct.length;J++){var ft=Ct[J],Ht=ft.width;if(ce===void 0)ce=Ht;else if(ce!==Ht){B=!1;break}if(Ht=ft.height,Y===void 0)Y=Ht;else if(Y!==Ht){B=!1;break}delete ft.width,delete ft.height,ft.transform==="none"&&delete ft.transform}B&&ce!==void 0&&Y!==void 0&&(Xt.setKeyframes(Ct),B=getComputedStyle(Xt.target,Xt.pseudoElement),B.width!==ce||B.height!==Y)&&(B=Ct[0],B.width=ce,B.height=Y,B=Ct[Ct.length-1],B.width=ce,B.height=Y,Xt.setKeyframes(Ct))}}m()},function(X){W.__reactViewTransition===et&&(W.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&L(X)}finally{r(),l(),m()}}),et.finished.finally(function(){for(var X=0;X<dt.length;X++)dt[X].cancel();W.__reactViewTransition===et&&(W.__reactViewTransition=null),E()}),et}catch{return r(),l(),m(),null}}function Dr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Dr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Dr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Dr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function l_(t){return{name:t,group:new Dr("group",t),imagePair:new Dr("image-pair",t),old:new Dr("old",t),new:new Dr("new",t)}}function ai(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ai.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(c_(c,t,n,i)===-1){var m=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(L){m.removeEventListener(t,n,i),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),r!==null&&(l=m.removeEventListener.bind(m,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ts(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),g(this._fragmentFiber.child,!1,FS,t,E,r)}this._eventListeners=c}};function FS(t,n,i,r){return S(t).addEventListener(n,i,r),!1}ai.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=c_(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=Ts(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,HS,t,i,l),r.splice(n,1),c!==null&&c()}};function HS(t,n,i,r){return S(t).removeEventListener(n,i,r),!1}function Ts(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function u_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function c_(t,n,i,r){if(t.length===0)return-1;r=u_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&u_(c.optionsOrUseCapture)===r)return l}return-1}ai.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Ts(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Ts(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ai.prototype.focus=function(t){g(this._fragmentFiber.child,!0,f_,t,void 0,void 0)};function f_(t,n){return t.tag===6?!1:(t=S(t),JS(t,n))}ai.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,Ph,n,void 0,void 0);for(var i=n.length-1;0<=i&&!f_(n[i],t);i--);};function Ph(t,n){return n.push(t),!1}ai.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=Wo(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,GS,t,void 0,void 0))};function GS(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ai.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,VS,t,void 0,void 0)};function VS(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}ai.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,XS,t,void 0,void 0);for(var i=n=0;i<Ri.length;i++){var r=Ri[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ri[n++]=r}Ri.length=n}};function XS(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Ri=[],Bh=!1;function kS(t,n,i){Ri.push({fragmentInstance:t,observer:n,instance:i}),Bh||(Bh=!0,$S(function(){Bh=!1;var r=Ri;Ri=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ai.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,qS,t,void 0,void 0),t};function qS(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}ai.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},ai.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];g(this._fragmentFiber.child,!1,Ph,i,void 0,void 0);var r=S(n);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(i[0]),l=S(i[i.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),L=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||YS(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function YS(t,n,i,r,l){var c=sn(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=y(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=F(i,c,nt),n===null?n=!1:(g(n,!0,O,c,i),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=F(r,c,nt),n===null?n=!1:(g(n,!0,U,c,r),c=x,z=x=null,n=c!==null)),n):!1}function h_(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ai.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Ph,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=S(r),h_(t,i);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=S(l),h_(l,i)):S(l).scrollIntoView(t),r+=i?-1:1}};function WS(t,n){return t=S(t),d_(t,n),!1}function d_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function p_(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Ts(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var m=0,E=0;E<Ri.length;E++){var L=Ri[E];(L.fragmentInstance!==n||L.observer!==c||L.instance!==t)&&(Ri[m++]=L)}Ri.length=m,c.observe(t)}),d_(t,n))}function jS(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Ts(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?kS(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Ih(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Ih(i),Te(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ZS(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Yt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function KS(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=vi(t.nextSibling),t===null))return null;return t}function m_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Fh(t){return t.data==="$?"||t.data==="$~"}function Hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function QS(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gh=null;function g_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return vi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function __(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function JS(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function $S(t){i_(function(){i_(function(n){return t(n)})})}function v_(t,n,i){switch(n=Wo(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function x_(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Be(t,n,r,null,CS,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zi&&(t.onclick=null),Te(t)}function Vh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Te(t)}var xi=new Map,y_=new Set;function jo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var da=bt.d;bt.d={f:tM,r:eM,D:nM,C:iM,L:aM,m:rM,X:oM,S:sM,M:lM};function tM(){var t=da.f(),n=Cu();return t||n}function eM(t){var n=Zn(t);n!==null&&n.tag===5&&n.type==="form"?Mg(n):da.r(t)}var bs=typeof document>"u"?null:document;function S_(t,n,i){var r=bs;if(r&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),y_.has(l)||(y_.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Sn(n,"link",t),se(n),r.head.appendChild(n)))}}function nM(t){da.D(t),S_("dns-prefetch",t,null)}function iM(t,n){da.C(t,n),S_("preconnect",t,n)}function aM(t,n,i){da.L(t,n,i);var r=bs;if(r&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+fi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+fi(i.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(n){case"style":c=As(t);break;case"script":c=Rs(t)}if(!(xi.has(c)||(t=P({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),xi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Zo(c))||n==="script"&&r.querySelector(Ko(c))))){var m=r.createElement("link");Sn(m,"link",t),n==="style"&&(m[Xn]=!0,m.onload=m.onerror=function(){Kn(m)}),se(m),r.head.appendChild(m)}}}function rM(t,n){da.m(t,n);var i=bs;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Rs(t)}if(!xi.has(c)&&(t=P({rel:"modulepreload",href:t},n),xi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ko(c)))return}r=i.createElement("link"),Sn(r,"link",t),se(r),i.head.appendChild(r)}}}function sM(t,n,i){da.S(t,n,i);var r=bs;if(r&&t){var l=ci(r).hoistableStyles,c=As(t);n=n||"default";var m=l.get(c);if(!m){var E={loading:0,preload:null};if(m=r.querySelector(Zo(c)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},i),(i=xi.get(c))&&Xh(t,i);var L=m=r.createElement("link");se(L),Sn(L,"link",t),L._p=new Promise(function(W,et){L.onload=W,L.onerror=et}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,zu(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(c,m)}}}function oM(t,n){da.X(t,n);var i=bs;if(i&&t){var r=ci(i).hoistableScripts,l=Rs(t),c=r.get(l);c||(c=i.querySelector(Ko(l)),c||(t=P({src:t,async:!0},n),(n=xi.get(l))&&kh(t,n),c=i.createElement("script"),se(c),Sn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function lM(t,n){da.M(t,n);var i=bs;if(i&&t){var r=ci(i).hoistableScripts,l=Rs(t),c=r.get(l);c||(c=i.querySelector(Ko(l)),c||(t=P({src:t,async:!0,type:"module"},n),(n=xi.get(l))&&kh(t,n),c=i.createElement("script"),se(c),Sn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function M_(t,n,i,r){var l=(l=D.current)?jo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=As(i.href),n=ci(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=As(i.href);var c=ci(l).hoistableStyles,m=c.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=l.querySelector(Zo(t)))?c._p||(m.instance=c,m.state.loading=5):(c=xi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},xi.set(t,c)),uM(l,t,c,m.state))),n&&r===null)throw Error(s(528,""));return m}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Rs(i),n=ci(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function As(t){return'href="'+fi(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function E_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function uM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Xn]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Xn]=!0,n.onload=n.onerror=Kn.bind(null,n),Sn(n,"link",i),se(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Rs(t){return'[src="'+fi(t)+'"]'}function Ko(t){return"script[async]"+t}function T_(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+fi(i.href)+'"]');if(r)return n.instance=r,se(r),r;var l=P({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),se(r),Sn(r,"style",l),zu(r,i.precedence,t),n.instance=r;case"stylesheet":l=As(i.href);var c=t.querySelector(Zo(l));if(c)return n.state.loading|=4,n.instance=c,se(c),c;r=E_(i),(l=xi.get(l))&&Xh(r,l),c=(t.ownerDocument||t).createElement("link"),se(c);var m=c;return m._p=new Promise(function(E,L){m.onload=E,m.onerror=L}),Sn(c,"link",r),n.state.loading|=4,zu(c,i.precedence,t),n.instance=c;case"script":return c=Rs(i.src),(l=t.querySelector(Ko(c)))?(n.instance=l,se(l),l):(r=i,(l=xi.get(c))&&(r=P({},i),kh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),se(l),Sn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,zu(r,i.precedence,t));return n.instance}function zu(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,m=0;m<r.length;m++){var E=r[m];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Xh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function kh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pu=null;function b_(t,n,i){if(Pu===null){var r=new Map,l=Pu=new Map;l.set(i,r)}else l=Pu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Yt]||c[Zt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(n)||"";m=t+m;var E=r.get(m);E?E.push(c):r.set(m,[c])}}return r}function qh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function cM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function A_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function R_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function C_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function w_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=C_(n),t.suspenseyImages.push(n)),t=dM.bind(t),n.decode().then(t,t))}function fM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=As(r.href),c=n.querySelector(Zo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Qo.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,se(c);return}c=n.ownerDocument||n,r=E_(r),(l=xi.get(l))&&Xh(r,l),c=c.createElement("link"),se(c);var m=c;m._p=new Promise(function(E,L){m.onload=E,m.onerror=L}),Sn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Qo.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Bu=0;function hM(t,n){return t.stylesheets&&t.count===0&&Fu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Bu===0&&(Bu=62500*DS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Bu?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function D_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Fu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Qo(){this.count--,D_(this)}function dM(){this.imgCount--,D_(this)}var Iu=null;function Fu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Iu=new Map,n.forEach(pM,t),Iu=null,Qo.call(t))}function pM(t,n){if(!(n.state.loading&4)){var i=Iu.get(t);if(i)var r=i.get(null);else{i=new Map,Iu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),c=i.get(m)||r,c===r&&i.set(null,l),i.set(m,l),this.count++,r=Qo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Cs={$$typeof:ct,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function mM(t,n,i,r,l,c,m,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function U_(t,n,i,r,l,c,m,E,L,W,et,dt){return t=new mM(t,n,i,m,L,W,et,dt,E),n=1,c===!0&&(n|=24),c=kn(3,null,null,n),t.current=c,c.stateNode=t,n=sf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},cf(c),t}function N_(t){return t?(t=ts,t):ts}function L_(t,n,i,r,l,c){l=N_(l),r.context===null?r.context=l:r.pendingContext=l,r=za(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Pa(t,r,n),i!==null&&(jn(i,t,n),Co(i,t,n))}function O_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Yh(t,n){O_(t,n),(t=t.alternate)&&O_(t,n)}function z_(t){if(t.tag===13||t.tag===31){var n=dr(t,67108864);n!==null&&jn(n,t,67108864),Yh(t,67108864)}}function P_(t){if(t.tag===13||t.tag===31){var n=ii();n=Mt(n);var i=dr(t,n);i!==null&&jn(i,t,n),Yh(t,n)}}var ws=!0;function gM(t,n,i,r){var l=Et.T;Et.T=null;var c=bt.p;try{bt.p=2,Wh(t,n,i,r)}finally{bt.p=c,Et.T=l}}function _M(t,n,i,r){var l=Et.T;Et.T=null;var c=bt.p;try{bt.p=8,Wh(t,n,i,r)}finally{bt.p=c,Et.T=l}}function Wh(t,n,i,r){if(ws){var l=jh(r);if(l===null)Ch(t,n,r,Hu,i),I_(t,r);else if(xM(l,t,n,i,r))r.stopPropagation();else if(I_(t,r),n&4&&-1<vM.indexOf(t)){for(;l!==null;){var c=Zn(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=Oi(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var L=1<<31-bn(m);E.entanglements[1]|=L,m&=~L}qi(c),(Ne&6)===0&&(bu=H()+500,ko(0))}}break;case 31:case 13:E=dr(c,2),E!==null&&jn(E,c,2),Cu(),Yh(c,2)}if(c=jh(r),c===null&&Ch(t,n,r,Hu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Ch(t,n,r,null,i)}}function jh(t){return t=Nc(t),Zh(t)}var Hu=null;function Zh(t){if(Hu=null,t=sn(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===31){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hu=t,null}function B_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case ut:return 2;case _t:return 8;case zt:case Ft:return 32;case re:return 268435456;default:return 32}default:return 32}}var Kh=!1,ja=null,Za=null,Ka=null,Jo=new Map,$o=new Map,Qa=[],vM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I_(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function tl(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=Zn(n),n!==null&&z_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function xM(t,n,i,r,l){switch(n){case"focusin":return ja=tl(ja,t,n,i,r,l),!0;case"dragenter":return Za=tl(Za,t,n,i,r,l),!0;case"mouseover":return Ka=tl(Ka,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return Jo.set(c,tl(Jo.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,$o.set(c,tl($o.get(c)||null,t,n,i,r,l)),!0}return!1}function F_(t){var n=sn(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,jt(t.priority,function(){P_(i)});return}}else if(n===31){if(n=d(i),n!==null){t.blockedOn=n,jt(t.priority,function(){P_(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=jh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Uc=r,i.target.dispatchEvent(r),Uc=null}else return n=Zn(i),n!==null&&z_(n),t.blockedOn=i,!1;n.shift()}return!0}function H_(t,n,i){Gu(t)&&i.delete(n)}function yM(){Kh=!1,ja!==null&&Gu(ja)&&(ja=null),Za!==null&&Gu(Za)&&(Za=null),Ka!==null&&Gu(Ka)&&(Ka=null),Jo.forEach(H_),$o.forEach(H_)}function Vu(t,n){t.blockedOn===n&&(t.blockedOn=null,Kh||(Kh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yM)))}var Xu=null;function G_(t){Xu!==t&&(Xu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xu===t&&(Xu=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(Zh(r||i)===null)continue;break}var c=Zn(i);c!==null&&(t.splice(n,3),n-=3,Uf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ds(t){function n(L){return Vu(L,t)}ja!==null&&Vu(ja,t),Za!==null&&Vu(Za,t),Ka!==null&&Vu(Ka,t),Jo.forEach(n),$o.forEach(n);for(var i=0;i<Qa.length;i++){var r=Qa[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Qa.length&&(i=Qa[0],i.blockedOn===null);)F_(i),i.blockedOn===null&&Qa.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],m=l[Bt]||null;if(typeof c=="function")m||G_(i);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[Bt]||null)E=m.formAction;else if(Zh(l)!==null)continue}else E=m.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),G_(i)}}}function V_(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Qh(t){this._internalRoot=t}ku.prototype.render=Qh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=ii();L_(i,r,t,n,null,null)},ku.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;L_(t.current,2,null,t,null,null),Cu(),n[pe]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var n=Wt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Qa.length&&n!==0&&n<Qa[i].priority;i++);Qa.splice(i,0,t),i===0&&F_(t)}};var X_=e.version;if(X_!=="19.3.1")throw Error(s(527,X_,"19.3.1"));bt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var SM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Ee=qu.inject(SM),Ye=qu}catch{}}return nl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=Ng,c=Lg,m=Og;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=U_(t,1,!1,null,null,i,r,null,l,c,m,V_),t[pe]=n.current,Rh(t),new Qh(n)},nl.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Ng,m=Lg,E=Og,L=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(L=i.formState)),n=U_(t,1,!0,n,i??null,r,l,L,c,m,E,V_),n.context=N_(null),i=n.current,r=ii(),r=Mt(r),l=za(r),l.callback=null,Pa(i,l,r),i=r,n.current.lanes=i,A(n,i),qi(n),t[pe]=n.current,Rh(t),new ku(n)},nl.version="19.3.1",nl}var $_;function NM(){if($_)return td.exports;$_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=UM(),td.exports}var LM=NM();const OM=sx(LM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ox=(...o)=>o.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Un.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},p)=>Un.createElement("svg",{ref:p,...PM,width:e,height:e,stroke:o,strokeWidth:s?Number(a)*24/Number(e):a,className:ox("lucide",u),...d},[...h.map(([_,v])=>Un.createElement(_,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=(o,e)=>{const a=Un.forwardRef(({className:s,...u},f)=>Un.createElement(BM,{ref:f,iconNode:e,className:ox(`lucide-${zM(o)}`,s),...u}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Ep("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Ep("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Ep("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="170",GM=0,tv=1,VM=2,lx=1,XM=2,xa=3,lr=0,Vn=1,ya=2,sr=0,Ks=1,ev=2,nv=3,iv=4,kM=5,Fr=100,qM=101,YM=102,WM=103,jM=104,ZM=200,KM=201,QM=202,JM=203,zd=204,Pd=205,$M=206,tE=207,eE=208,nE=209,iE=210,aE=211,rE=212,sE=213,oE=214,Bd=0,Id=1,Fd=2,$s=3,Hd=4,Gd=5,Vd=6,Xd=7,ux=0,lE=1,uE=2,or=0,cE=1,fE=2,hE=3,cx=4,dE=5,pE=6,mE=7,fx=300,to=301,eo=302,kd=303,qd=304,Mc=306,pl=1e3,Gr=1001,Yd=1002,li=1003,gE=1004,Yu=1005,Wi=1006,ad=1007,Vr=1008,Ea=1009,hx=1010,dx=1011,ml=1012,bp=1013,Xr=1014,ji=1015,_l=1016,Ap=1017,Rp=1018,no=1020,px=35902,mx=1021,gx=1022,Ni=1023,_x=1024,vx=1025,Qs=1026,io=1027,Cp=1028,wp=1029,xx=1030,Dp=1031,Up=1033,pc=33776,mc=33777,gc=33778,_c=33779,Wd=35840,jd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,tp=37808,ep=37809,np=37810,ip=37811,ap=37812,rp=37813,sp=37814,op=37815,lp=37816,up=37817,cp=37818,fp=37819,hp=37820,dp=37821,vc=36492,pp=36494,mp=36495,yx=36283,gp=36284,_p=36285,vp=36286,_E=3200,vE=3201,Sx=0,xE=1,rr="",oi="srgb",ro="srgb-linear",Ec="linear",He="srgb",Us=7680,av=519,yE=512,SE=513,ME=514,Mx=515,EE=516,TE=517,bE=518,AE=519,rv=35044,sv="300 es",Sa=2e3,yc=2001;class so{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){if(this._listeners===void 0)return;const u=this._listeners[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ov=1234567;const hl=Math.PI/180,gl=180/Math.PI;function oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[a&63|128]+wn[a>>8&255]+"-"+wn[a>>16&255]+wn[a>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function Nn(o,e,a){return Math.max(e,Math.min(a,o))}function Np(o,e){return(o%e+e)%e}function RE(o,e,a,s,u){return s+(o-e)*(u-s)/(a-e)}function CE(o,e,a){return o!==e?(a-o)/(e-o):0}function dl(o,e,a){return(1-a)*o+a*e}function wE(o,e,a,s){return dl(o,e,1-Math.exp(-a*s))}function DE(o,e=1){return e-Math.abs(Np(o,e*2)-e)}function UE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*(3-2*o))}function NE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*o*(o*(o*6-15)+10))}function LE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function OE(o,e){return o+Math.random()*(e-o)}function zE(o){return o*(.5-Math.random())}function PE(o){o!==void 0&&(ov=o);let e=ov+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BE(o){return o*hl}function IE(o){return o*gl}function FE(o){return(o&o-1)===0&&o!==0}function HE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function GE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function VE(o,e,a,s,u){const f=Math.cos,h=Math.sin,d=f(a/2),p=h(a/2),_=f((e+s)/2),v=h((e+s)/2),g=f((e-s)/2),y=h((e-s)/2),M=f((s-e)/2),b=h((s-e)/2);switch(u){case"XYX":o.set(d*v,p*g,p*y,d*_);break;case"YZY":o.set(p*y,d*v,p*g,d*_);break;case"ZXZ":o.set(p*g,p*y,d*v,d*_);break;case"XZX":o.set(d*v,p*b,p*M,d*_);break;case"YXY":o.set(p*M,d*v,p*b,d*_);break;case"ZYZ":o.set(p*b,p*M,d*v,d*_);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function Ws(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ns={DEG2RAD:hl,RAD2DEG:gl,generateUUID:oo,clamp:Nn,euclideanModulo:Np,mapLinear:RE,inverseLerp:CE,lerp:dl,damp:wE,pingpong:DE,smoothstep:UE,smootherstep:NE,randInt:LE,randFloat:OE,randFloatSpread:zE,seededRandom:PE,degToRad:BE,radToDeg:IE,isPowerOfTwo:FE,ceilPowerOfTwo:HE,floorPowerOfTwo:GE,setQuaternionFromProperEuler:VE,normalize:Hn,denormalize:Ws};class Ce{constructor(e=0,a=0){Ce.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*u+e.x,this.y=f*u+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(e,a,s,u,f,h,d,p,_){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,p,_)}set(e,a,s,u,f,h,d,p,_){const v=this.elements;return v[0]=e,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=p,v[6]=s,v[7]=h,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],p=s[6],_=s[1],v=s[4],g=s[7],y=s[2],M=s[5],b=s[8],w=u[0],S=u[3],x=u[6],z=u[1],O=u[4],U=u[7],nt=u[2],F=u[5],P=u[8];return f[0]=h*w+d*z+p*nt,f[3]=h*S+d*O+p*F,f[6]=h*x+d*U+p*P,f[1]=_*w+v*z+g*nt,f[4]=_*S+v*O+g*F,f[7]=_*x+v*U+g*P,f[2]=y*w+M*z+b*nt,f[5]=y*S+M*O+b*F,f[8]=y*x+M*U+b*P,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8];return a*h*v-a*d*_-s*f*v+s*d*p+u*f*_-u*h*p}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8],g=v*h-d*_,y=d*p-v*f,M=_*f-h*p,b=a*g+s*y+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=g*w,e[1]=(u*_-v*s)*w,e[2]=(d*s-u*h)*w,e[3]=y*w,e[4]=(v*a-u*p)*w,e[5]=(u*f-d*a)*w,e[6]=M*w,e[7]=(s*p-_*a)*w,e[8]=(h*a-s*f)*w,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,h,d){const p=Math.cos(f),_=Math.sin(f);return this.set(s*p,s*_,-s*(p*h+_*d)+h+e,-u*_,u*p,-u*(-_*h+p*d)+d+a,0,0,1),this}scale(e,a){return this.premultiply(rd.makeScale(e,a)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,a){return this.premultiply(rd.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new fe;function Ex(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Sc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function XE(){const o=Sc("canvas");return o.style.display="block",o}const lv={};function ul(o){o in lv||(lv[o]=!0,console.warn(o))}function kE(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function qE(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function YE(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const De={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(o,e,a){return this.enabled===!1||e===a||!e||!a||(this.spaces[e].transfer===He&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b)),this.spaces[e].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===He&&(o.r=Js(o.r),o.g=Js(o.g),o.b=Js(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===rr?Ec:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,a){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Js(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const uv=[.64,.33,.3,.6,.15,.06],cv=[.2126,.7152,.0722],fv=[.3127,.329],hv=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);De.define({[ro]:{primaries:uv,whitePoint:fv,transfer:Ec,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:cv,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:uv,whitePoint:fv,transfer:He,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:cv,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}});let Ls;class WE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ls===void 0&&(Ls=Sc("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=Ls}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=Sc("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Ma(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Ma(a[s]/255)*255):a[s]=Ma(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jE=0;class Tx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(sd(u[h].image)):f.push(sd(u[h]))}else f=sd(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?WE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZE=0;class Ln extends so{constructor(e=Ln.DEFAULT_IMAGE,a=Ln.DEFAULT_MAPPING,s=Gr,u=Gr,f=Wi,h=Vr,d=Ni,p=Ea,_=Ln.DEFAULT_ANISOTROPY,v=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=oo(),this.name="",this.source=new Tx(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=fx;Ln.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,a=0,s=0,u=1){Je.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const p=e.elements,_=p[0],v=p[4],g=p[8],y=p[1],M=p[5],b=p[9],w=p[2],S=p[6],x=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+w)<.1&&Math.abs(b+S)<.1&&Math.abs(_+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const O=(_+1)/2,U=(M+1)/2,nt=(x+1)/2,F=(v+y)/4,P=(g+w)/4,G=(b+S)/4;return O>U&&O>nt?O<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(O),u=F/s,f=P/s):U>nt?U<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(U),s=F/u,f=G/u):nt<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(nt),s=P/f,u=G/f),this.set(s,u,f,a),this}let z=Math.sqrt((S-b)*(S-b)+(g-w)*(g-w)+(y-v)*(y-v));return Math.abs(z)<.001&&(z=1),this.x=(S-b)/z,this.y=(g-w)/z,this.z=(y-v)/z,this.w=Math.acos((_+M+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this.w=Math.max(e.w,Math.min(a.w,this.w)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this.w=Math.max(e,Math.min(a,this.w)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KE extends so{constructor(e=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=1,this.scissor=new Je(0,0,e,a),this.scissorTest=!1,this.viewport=new Je(0,0,e,a);const u={width:e,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new Ln(u,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,u=e.textures.length;s<u;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const a=Object.assign({},e.texture.image);return this.texture.source=new Tx(a),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends KE{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class bx extends Ln{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=li,this.minFilter=li,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QE extends Ln{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=li,this.minFilter=li,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,h,d){let p=s[u+0],_=s[u+1],v=s[u+2],g=s[u+3];const y=f[h+0],M=f[h+1],b=f[h+2],w=f[h+3];if(d===0){e[a+0]=p,e[a+1]=_,e[a+2]=v,e[a+3]=g;return}if(d===1){e[a+0]=y,e[a+1]=M,e[a+2]=b,e[a+3]=w;return}if(g!==w||p!==y||_!==M||v!==b){let S=1-d;const x=p*y+_*M+v*b+g*w,z=x>=0?1:-1,O=1-x*x;if(O>Number.EPSILON){const nt=Math.sqrt(O),F=Math.atan2(nt,x*z);S=Math.sin(S*F)/nt,d=Math.sin(d*F)/nt}const U=d*z;if(p=p*S+y*U,_=_*S+M*U,v=v*S+b*U,g=g*S+w*U,S===1-d){const nt=1/Math.sqrt(p*p+_*_+v*v+g*g);p*=nt,_*=nt,v*=nt,g*=nt}}e[a]=p,e[a+1]=_,e[a+2]=v,e[a+3]=g}static multiplyQuaternionsFlat(e,a,s,u,f,h){const d=s[u],p=s[u+1],_=s[u+2],v=s[u+3],g=f[h],y=f[h+1],M=f[h+2],b=f[h+3];return e[a]=d*b+v*g+p*M-_*y,e[a+1]=p*b+v*y+_*g-d*M,e[a+2]=_*b+v*M+d*y-p*g,e[a+3]=v*b-d*g-p*y-_*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,_=d(s/2),v=d(u/2),g=d(f/2),y=p(s/2),M=p(u/2),b=p(f/2);switch(h){case"XYZ":this._x=y*v*g+_*M*b,this._y=_*M*g-y*v*b,this._z=_*v*b+y*M*g,this._w=_*v*g-y*M*b;break;case"YXZ":this._x=y*v*g+_*M*b,this._y=_*M*g-y*v*b,this._z=_*v*b-y*M*g,this._w=_*v*g+y*M*b;break;case"ZXY":this._x=y*v*g-_*M*b,this._y=_*M*g+y*v*b,this._z=_*v*b+y*M*g,this._w=_*v*g-y*M*b;break;case"ZYX":this._x=y*v*g-_*M*b,this._y=_*M*g+y*v*b,this._z=_*v*b-y*M*g,this._w=_*v*g+y*M*b;break;case"YZX":this._x=y*v*g+_*M*b,this._y=_*M*g+y*v*b,this._z=_*v*b-y*M*g,this._w=_*v*g-y*M*b;break;case"XZY":this._x=y*v*g-_*M*b,this._y=_*M*g-y*v*b,this._z=_*v*b+y*M*g,this._w=_*v*g+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],p=a[9],_=a[2],v=a[6],g=a[10],y=s+d+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(f-_)*M,this._z=(h-u)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-p)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+_)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(f-_)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-u)/M,this._x=(f+_)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,h=e._w,d=a._x,p=a._y,_=a._z,v=a._w;return this._x=s*v+h*d+u*_-f*p,this._y=u*v+h*p+f*d-s*_,this._z=f*v+h*_+s*p-u*d,this._w=h*v-s*d-u*p-f*_,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const _=Math.sqrt(p),v=Math.atan2(_,d),g=Math.sin((1-a)*v)/_,y=Math.sin(a*v)/_;return this._w=h*g+this._w*y,this._x=s*g+this._x*y,this._y=u*g+this._y*y,this._z=f*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,a=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(pv.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(pv.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,h=e.y,d=e.z,p=e.w,_=2*(h*u-d*s),v=2*(d*a-f*u),g=2*(f*s-h*a);return this.x=a+p*_+h*g-d*v,this.y=s+p*v+d*_-f*g,this.z=u+p*g+f*v-h*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,h=a.x,d=a.y,p=a.z;return this.x=u*p-f*d,this.y=f*h-s*p,this.z=s*d-u*h,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new Q,pv=new vl;class qr{constructor(e=new Q(1/0,1/0,1/0),a=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ci):Ci.fromBufferAttribute(f,h),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Wu.copy(s.boundingBox)),Wu.applyMatrix4(e.matrixWorld),this.union(Wu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),ju.subVectors(this.max,il),Os.subVectors(e.a,il),zs.subVectors(e.b,il),Ps.subVectors(e.c,il),$a.subVectors(zs,Os),tr.subVectors(Ps,zs),Ur.subVectors(Os,Ps);let a=[0,-$a.z,$a.y,0,-tr.z,tr.y,0,-Ur.z,Ur.y,$a.z,0,-$a.x,tr.z,0,-tr.x,Ur.z,0,-Ur.x,-$a.y,$a.x,0,-tr.y,tr.x,0,-Ur.y,Ur.x,0];return!ld(a,Os,zs,Ps,ju)||(a=[1,0,0,0,1,0,0,0,1],!ld(a,Os,zs,Ps,ju))?!1:(Zu.crossVectors($a,tr),a=[Zu.x,Zu.y,Zu.z],ld(a,Os,zs,Ps,ju))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ci=new Q,Wu=new qr,Os=new Q,zs=new Q,Ps=new Q,$a=new Q,tr=new Q,Ur=new Q,il=new Q,ju=new Q,Zu=new Q,Nr=new Q;function ld(o,e,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Nr.fromArray(o,f);const d=u.x*Math.abs(Nr.x)+u.y*Math.abs(Nr.y)+u.z*Math.abs(Nr.z),p=e.dot(Nr),_=a.dot(Nr),v=s.dot(Nr);if(Math.max(-Math.max(p,_,v),Math.min(p,_,v))>d)return!1}return!0}const JE=new qr,al=new Q,ud=new Q;class xl{constructor(e=new Q,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):JE.setFromPoints(e).getCenter(s);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const a=al.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(al,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(ud)),this.expandByPoint(al.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ma=new Q,cd=new Q,Ku=new Q,er=new Q,fd=new Q,Qu=new Q,hd=new Q;class Ax{constructor(e=new Q,a=new Q(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=ma.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,a),ma.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){cd.copy(e).add(a).multiplyScalar(.5),Ku.copy(a).sub(e).normalize(),er.copy(this.origin).sub(cd);const f=e.distanceTo(a)*.5,h=-this.direction.dot(Ku),d=er.dot(this.direction),p=-er.dot(Ku),_=er.lengthSq(),v=Math.abs(1-h*h);let g,y,M,b;if(v>0)if(g=h*p-d,y=h*d-p,b=f*v,g>=0)if(y>=-b)if(y<=b){const w=1/v;g*=w,y*=w,M=g*(g+h*y+2*d)+y*(h*g+y+2*p)+_}else y=f,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*p)+_;else y=-f,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*p)+_;else y<=-b?(g=Math.max(0,-(-h*f+d)),y=g>0?-f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+_):y<=b?(g=0,y=Math.min(Math.max(-f,-p),f),M=y*(y+2*p)+_):(g=Math.max(0,-(h*f+d)),y=g>0?f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+_);else y=h>0?-f:f,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*p)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,g),u&&u.copy(cd).addScaledVector(Ku,y),M}intersectSphere(e,a){ma.subVectors(e.center,this.origin);const s=ma.dot(this.direction),u=ma.dot(ma)-s*s,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,a):this.at(d,a)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,h,d,p;const _=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return _>=0?(s=(e.min.x-y.x)*_,u=(e.max.x-y.x)*_):(s=(e.max.x-y.x)*_,u=(e.min.x-y.x)*_),v>=0?(f=(e.min.y-y.y)*v,h=(e.max.y-y.y)*v):(f=(e.max.y-y.y)*v,h=(e.min.y-y.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),g>=0?(d=(e.min.z-y.z)*g,p=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,p=(e.min.z-y.z)*g),s>p||d>u)||((d>s||s!==s)&&(s=d),(p<u||u!==u)&&(u=p),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,a,s,u,f){fd.subVectors(a,e),Qu.subVectors(s,e),hd.crossVectors(fd,Qu);let h=this.direction.dot(hd),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;er.subVectors(this.origin,e);const p=d*this.direction.dot(Qu.crossVectors(er,Qu));if(p<0)return null;const _=d*this.direction.dot(fd.cross(er));if(_<0||p+_>h)return null;const v=-d*er.dot(hd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,a,s,u,f,h,d,p,_,v,g,y,M,b,w,S){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,p,_,v,g,y,M,b,w,S)}set(e,a,s,u,f,h,d,p,_,v,g,y,M,b,w,S){const x=this.elements;return x[0]=e,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=h,x[9]=d,x[13]=p,x[2]=_,x[6]=v,x[10]=g,x[14]=y,x[3]=M,x[7]=b,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Bs.setFromMatrixColumn(e,0).length(),f=1/Bs.setFromMatrixColumn(e,1).length(),h=1/Bs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(u),_=Math.sin(u),v=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const y=h*v,M=h*g,b=d*v,w=d*g;a[0]=p*v,a[4]=-p*g,a[8]=_,a[1]=M+b*_,a[5]=y-w*_,a[9]=-d*p,a[2]=w-y*_,a[6]=b+M*_,a[10]=h*p}else if(e.order==="YXZ"){const y=p*v,M=p*g,b=_*v,w=_*g;a[0]=y+w*d,a[4]=b*d-M,a[8]=h*_,a[1]=h*g,a[5]=h*v,a[9]=-d,a[2]=M*d-b,a[6]=w+y*d,a[10]=h*p}else if(e.order==="ZXY"){const y=p*v,M=p*g,b=_*v,w=_*g;a[0]=y-w*d,a[4]=-h*g,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*v,a[9]=w-y*d,a[2]=-h*_,a[6]=d,a[10]=h*p}else if(e.order==="ZYX"){const y=h*v,M=h*g,b=d*v,w=d*g;a[0]=p*v,a[4]=b*_-M,a[8]=y*_+w,a[1]=p*g,a[5]=w*_+y,a[9]=M*_-b,a[2]=-_,a[6]=d*p,a[10]=h*p}else if(e.order==="YZX"){const y=h*p,M=h*_,b=d*p,w=d*_;a[0]=p*v,a[4]=w-y*g,a[8]=b*g+M,a[1]=g,a[5]=h*v,a[9]=-d*v,a[2]=-_*v,a[6]=M*g+b,a[10]=y-w*g}else if(e.order==="XZY"){const y=h*p,M=h*_,b=d*p,w=d*_;a[0]=p*v,a[4]=-g,a[8]=_*v,a[1]=y*g+w,a[5]=h*v,a[9]=M*g-b,a[2]=b*g-M,a[6]=d*v,a[10]=w*g+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,tT)}lookAt(e,a,s){const u=this.elements;return ri.subVectors(e,a),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),nr.crossVectors(s,ri),nr.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),nr.crossVectors(s,ri)),nr.normalize(),Ju.crossVectors(ri,nr),u[0]=nr.x,u[4]=Ju.x,u[8]=ri.x,u[1]=nr.y,u[5]=Ju.y,u[9]=ri.y,u[2]=nr.z,u[6]=Ju.z,u[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],p=s[8],_=s[12],v=s[1],g=s[5],y=s[9],M=s[13],b=s[2],w=s[6],S=s[10],x=s[14],z=s[3],O=s[7],U=s[11],nt=s[15],F=u[0],P=u[4],G=u[8],N=u[12],C=u[1],I=u[5],lt=u[9],rt=u[13],gt=u[2],ct=u[6],q=u[10],it=u[14],K=u[3],xt=u[7],yt=u[11],Dt=u[15];return f[0]=h*F+d*C+p*gt+_*K,f[4]=h*P+d*I+p*ct+_*xt,f[8]=h*G+d*lt+p*q+_*yt,f[12]=h*N+d*rt+p*it+_*Dt,f[1]=v*F+g*C+y*gt+M*K,f[5]=v*P+g*I+y*ct+M*xt,f[9]=v*G+g*lt+y*q+M*yt,f[13]=v*N+g*rt+y*it+M*Dt,f[2]=b*F+w*C+S*gt+x*K,f[6]=b*P+w*I+S*ct+x*xt,f[10]=b*G+w*lt+S*q+x*yt,f[14]=b*N+w*rt+S*it+x*Dt,f[3]=z*F+O*C+U*gt+nt*K,f[7]=z*P+O*I+U*ct+nt*xt,f[11]=z*G+O*lt+U*q+nt*yt,f[15]=z*N+O*rt+U*it+nt*Dt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],h=e[1],d=e[5],p=e[9],_=e[13],v=e[2],g=e[6],y=e[10],M=e[14],b=e[3],w=e[7],S=e[11],x=e[15];return b*(+f*p*g-u*_*g-f*d*y+s*_*y+u*d*M-s*p*M)+w*(+a*p*M-a*_*y+f*h*y-u*h*M+u*_*v-f*p*v)+S*(+a*_*g-a*d*M-f*h*g+s*h*M+f*d*v-s*_*v)+x*(-u*d*v-a*p*g+a*d*y+u*h*g-s*h*y+s*p*v)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8],g=e[9],y=e[10],M=e[11],b=e[12],w=e[13],S=e[14],x=e[15],z=g*S*_-w*y*_+w*p*M-d*S*M-g*p*x+d*y*x,O=b*y*_-v*S*_-b*p*M+h*S*M+v*p*x-h*y*x,U=v*w*_-b*g*_+b*d*M-h*w*M-v*d*x+h*g*x,nt=b*g*p-v*w*p-b*d*y+h*w*y+v*d*S-h*g*S,F=a*z+s*O+u*U+f*nt;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=z*P,e[1]=(w*y*f-g*S*f-w*u*M+s*S*M+g*u*x-s*y*x)*P,e[2]=(d*S*f-w*p*f+w*u*_-s*S*_-d*u*x+s*p*x)*P,e[3]=(g*p*f-d*y*f-g*u*_+s*y*_+d*u*M-s*p*M)*P,e[4]=O*P,e[5]=(v*S*f-b*y*f+b*u*M-a*S*M-v*u*x+a*y*x)*P,e[6]=(b*p*f-h*S*f-b*u*_+a*S*_+h*u*x-a*p*x)*P,e[7]=(h*y*f-v*p*f+v*u*_-a*y*_-h*u*M+a*p*M)*P,e[8]=U*P,e[9]=(b*g*f-v*w*f-b*s*M+a*w*M+v*s*x-a*g*x)*P,e[10]=(h*w*f-b*d*f+b*s*_-a*w*_-h*s*x+a*d*x)*P,e[11]=(v*d*f-h*g*f-v*s*_+a*g*_+h*s*M-a*d*M)*P,e[12]=nt*P,e[13]=(v*w*u-b*g*u+b*s*y-a*w*y-v*s*S+a*g*S)*P,e[14]=(b*d*u-h*w*u-b*s*p+a*w*p+h*s*S-a*d*S)*P,e[15]=(h*g*u-v*d*u+v*s*p-a*g*p-h*s*y+a*d*y)*P,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=e.x,d=e.y,p=e.z,_=f*h,v=f*d;return this.set(_*h+s,_*d-u*p,_*p+u*d,0,_*d+u*p,v*d+s,v*p-u*h,0,_*p-u*d,v*p+u*h,f*p*p+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,h){return this.set(1,s,f,0,e,1,h,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,p=a._w,_=f+f,v=h+h,g=d+d,y=f*_,M=f*v,b=f*g,w=h*v,S=h*g,x=d*g,z=p*_,O=p*v,U=p*g,nt=s.x,F=s.y,P=s.z;return u[0]=(1-(w+x))*nt,u[1]=(M+U)*nt,u[2]=(b-O)*nt,u[3]=0,u[4]=(M-U)*F,u[5]=(1-(y+x))*F,u[6]=(S+z)*F,u[7]=0,u[8]=(b+O)*P,u[9]=(S-z)*P,u[10]=(1-(y+w))*P,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let f=Bs.set(u[0],u[1],u[2]).length();const h=Bs.set(u[4],u[5],u[6]).length(),d=Bs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],wi.copy(this);const _=1/f,v=1/h,g=1/d;return wi.elements[0]*=_,wi.elements[1]*=_,wi.elements[2]*=_,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,a.setFromRotationMatrix(wi),s.x=f,s.y=h,s.z=d,this}makePerspective(e,a,s,u,f,h,d=Sa){const p=this.elements,_=2*f/(a-e),v=2*f/(s-u),g=(a+e)/(a-e),y=(s+u)/(s-u);let M,b;if(d===Sa)M=-(h+f)/(h-f),b=-2*h*f/(h-f);else if(d===yc)M=-h/(h-f),b=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,a,s,u,f,h,d=Sa){const p=this.elements,_=1/(a-e),v=1/(s-u),g=1/(h-f),y=(a+e)*_,M=(s+u)*v;let b,w;if(d===Sa)b=(h+f)*g,w=-2*g;else if(d===yc)b=f*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*_,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Bs=new Q,wi=new qe,$E=new Q(0,0,0),tT=new Q(1,1,1),nr=new Q,Ju=new Q,ri=new Q,mv=new qe,gv=new vl;class Zi{constructor(e=0,a=0,s=0,u=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],p=u[1],_=u[5],v=u[9],g=u[2],y=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,_)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,_),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mv,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return gv.setFromEuler(this),this.setFromQuaternion(gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class Lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eT=0;const _v=new Q,Is=new vl,ga=new qe,$u=new Q,rl=new Q,nT=new Q,iT=new vl,vv=new Q(1,0,0),xv=new Q(0,1,0),yv=new Q(0,0,1),Sv={type:"added"},aT={type:"removed"},Fs={type:"childadded",child:null},dd={type:"childremoved",child:null};class Tn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new Q,a=new Zi,s=new vl,u=new Q(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new qe},normalMatrix:{value:new fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Is.setFromAxisAngle(e,a),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,a){return Is.setFromAxisAngle(e,a),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,a){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?$u.copy(e):$u.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(rl,$u,this.up):ga.lookAt($u,rl,this.up),this.quaternion.setFromRotationMatrix(ga),u&&(ga.extractRotation(u.matrixWorld),Is.setFromRotationMatrix(ga),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sv),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(aT),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sv),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(e,a);if(h!==void 0)return h}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,nT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,iT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let _=0,v=p.length;_<v;_++){const g=p[_];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,_=this.material.length;p<_;p++)d.push(f(e.materials,this.material[p]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];u.animations.push(f(e.animations,p))}}if(a){const d=h(e.geometries),p=h(e.materials),_=h(e.textures),v=h(e.images),g=h(e.shapes),y=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),_.length>0&&(s.textures=_),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const p=[];for(const _ in d){const v=d[_];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}Tn.DEFAULT_UP=new Q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Q,_a=new Q,pd=new Q,va=new Q,Hs=new Q,Gs=new Q,Mv=new Q,md=new Q,gd=new Q,_d=new Q,vd=new Je,xd=new Je,yd=new Je;class Ui{constructor(e=new Q,a=new Q,s=new Q){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),Di.subVectors(e,a),u.cross(Di);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){Di.subVectors(u,a),_a.subVectors(s,a),pd.subVectors(e,a);const h=Di.dot(Di),d=Di.dot(_a),p=Di.dot(pd),_=_a.dot(_a),v=_a.dot(pd),g=h*_-d*d;if(g===0)return f.set(0,0,0),null;const y=1/g,M=(_*p-d*v)*y,b=(h*v-d*p)*y;return f.set(1-M-b,b,M)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,a,s,u,f,h,d,p){return this.getBarycoord(e,a,s,u,va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,va.x),p.addScaledVector(h,va.y),p.addScaledVector(d,va.z),p)}static getInterpolatedAttribute(e,a,s,u,f,h){return vd.setScalar(0),xd.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,a),xd.fromBufferAttribute(e,s),yd.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(vd,f.x),h.addScaledVector(xd,f.y),h.addScaledVector(yd,f.z),h}static isFrontFacing(e,a,s,u){return Di.subVectors(s,a),_a.subVectors(e,a),Di.cross(_a).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Di.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Ui.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Ui.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let h,d;Hs.subVectors(u,s),Gs.subVectors(f,s),md.subVectors(e,s);const p=Hs.dot(md),_=Gs.dot(md);if(p<=0&&_<=0)return a.copy(s);gd.subVectors(e,u);const v=Hs.dot(gd),g=Gs.dot(gd);if(v>=0&&g<=v)return a.copy(u);const y=p*g-v*_;if(y<=0&&p>=0&&v<=0)return h=p/(p-v),a.copy(s).addScaledVector(Hs,h);_d.subVectors(e,f);const M=Hs.dot(_d),b=Gs.dot(_d);if(b>=0&&M<=b)return a.copy(f);const w=M*_-p*b;if(w<=0&&_>=0&&b<=0)return d=_/(_-b),a.copy(s).addScaledVector(Gs,d);const S=v*b-M*g;if(S<=0&&g-v>=0&&M-b>=0)return Mv.subVectors(f,u),d=(g-v)/(g-v+(M-b)),a.copy(u).addScaledVector(Mv,d);const x=1/(S+w+y);return h=w*x,d=y*x,a.copy(s).addScaledVector(Hs,h).addScaledVector(Gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Sd(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Re{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.toWorkingColorSpace(this,a),this}setRGB(e,a,s,u=De.workingColorSpace){return this.r=e,this.g=a,this.b=s,De.toWorkingColorSpace(this,u),this}setHSL(e,a,s,u=De.workingColorSpace){if(e=Np(e,1),a=Nn(a,0,1),s=Nn(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=Sd(h,f,e+1/3),this.g=Sd(h,f,e),this.b=Sd(h,f,e-1/3)}return De.toWorkingColorSpace(this,u),this}setStyle(e,a=oi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=oi){const s=Rx[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return De.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Nn(Dn.r*255,0,255))*65536+Math.round(Nn(Dn.g*255,0,255))*256+Math.round(Nn(Dn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=De.workingColorSpace){De.fromWorkingColorSpace(Dn.copy(this),a);const s=Dn.r,u=Dn.g,f=Dn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let p,_;const v=(d+h)/2;if(d===h)p=0,_=0;else{const g=h-d;switch(_=v<=.5?g/(h+d):g/(2-h-d),h){case s:p=(u-f)/g+(u<f?6:0);break;case u:p=(f-s)/g+2;break;case f:p=(s-u)/g+4;break}p/=6}return e.h=p,e.s=_,e.l=v,e}getRGB(e,a=De.workingColorSpace){return De.fromWorkingColorSpace(Dn.copy(this),a),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=oi){De.fromWorkingColorSpace(Dn.copy(this),e);const a=Dn.r,s=Dn.g,u=Dn.b;return e!==oi?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+a,ir.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(ir),e.getHSL(tc);const s=dl(ir.h,tc.h,a),u=dl(ir.s,tc.s,a),f=dl(ir.l,tc.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Re;Re.NAMES=Rx;let rT=0;class yl extends so{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=oo(),this.name="",this.blending=Ks,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Pd,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Pd&&(s.blendDst=this.blendDst),this.blendEquation!==Fr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(a){const f=u(e.textures),h=u(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Op extends yl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new Q,ec=new Ce;class Li{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=rv,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)ec.fromBufferAttribute(this,a),ec.applyMatrix3(e),this.setXY(a,ec.x,ec.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)rn.fromBufferAttribute(this,a),rn.applyMatrix3(e),this.setXYZ(a,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)rn.fromBufferAttribute(this,a),rn.applyMatrix4(e),this.setXYZ(a,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)rn.fromBufferAttribute(this,a),rn.applyNormalMatrix(e),this.setXYZ(a,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)rn.fromBufferAttribute(this,a),rn.transformDirection(e),this.setXYZ(a,rn.x,rn.y,rn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=Ws(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Ws(a,this.array)),a}setX(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Ws(a,this.array)),a}setY(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Ws(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Ws(a,this.array)),a}setW(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array),u=Hn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array),u=Hn(u,this.array),f=Hn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rv&&(e.usage=this.usage),e}}class Cx extends Li{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class wx extends Li{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class ui extends Li{constructor(e,a,s){super(new Float32Array(e),a,s)}}let sT=0;const yi=new qe,Md=new Tn,Vs=new Q,si=new qr,sl=new qr,gn=new Q;class Ta extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ex(e)?wx:Cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new fe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,a,s){return yi.makeTranslation(e,a,s),this.applyMatrix4(yi),this}scale(e,a,s){return yi.makeScale(e,a,s),this.applyMatrix4(yi),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ui(s,3))}else{for(let s=0,u=a.count;s<u;s++){const f=e[s];a.setXYZ(s,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];si.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(si.min,sl.min),si.expandByPoint(gn),gn.addVectors(si.max,sl.max),si.expandByPoint(gn)):(si.expandByPoint(sl.min),si.expandByPoint(sl.max))}si.getCenter(s);let u=0;for(let f=0,h=e.count;f<h;f++)gn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(gn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],p=this.morphTargetsRelative;for(let _=0,v=d.count;_<v;_++)gn.fromBufferAttribute(d,_),p&&(Vs.fromBufferAttribute(e,_),gn.add(Vs)),u=Math.max(u,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<s.count;G++)d[G]=new Q,p[G]=new Q;const _=new Q,v=new Q,g=new Q,y=new Ce,M=new Ce,b=new Ce,w=new Q,S=new Q;function x(G,N,C){_.fromBufferAttribute(s,G),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,C),y.fromBufferAttribute(f,G),M.fromBufferAttribute(f,N),b.fromBufferAttribute(f,C),v.sub(_),g.sub(_),M.sub(y),b.sub(y);const I=1/(M.x*b.y-b.x*M.y);isFinite(I)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(I),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(I),d[G].add(w),d[N].add(w),d[C].add(w),p[G].add(S),p[N].add(S),p[C].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let G=0,N=z.length;G<N;++G){const C=z[G],I=C.start,lt=C.count;for(let rt=I,gt=I+lt;rt<gt;rt+=3)x(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const O=new Q,U=new Q,nt=new Q,F=new Q;function P(G){nt.fromBufferAttribute(u,G),F.copy(nt);const N=d[G];O.copy(N),O.sub(nt.multiplyScalar(nt.dot(N))).normalize(),U.crossVectors(F,N);const I=U.dot(p[G])<0?-1:1;h.setXYZW(G,O.x,O.y,O.z,I)}for(let G=0,N=z.length;G<N;++G){const C=z[G],I=C.start,lt=C.count;for(let rt=I,gt=I+lt;rt<gt;rt+=3)P(e.getX(rt+0)),P(e.getX(rt+1)),P(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const u=new Q,f=new Q,h=new Q,d=new Q,p=new Q,_=new Q,v=new Q,g=new Q;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,w),h.fromBufferAttribute(a,S),v.subVectors(h,f),g.subVectors(u,f),v.cross(g),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),d.add(v),p.add(v),_.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(S,_.x,_.y,_.z)}else for(let y=0,M=a.count;y<M;y+=3)u.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),h.fromBufferAttribute(a,y+2),v.subVectors(h,f),g.subVectors(u,f),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)gn.fromBufferAttribute(e,a),gn.normalize(),e.setXYZ(a,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,p){const _=d.array,v=d.itemSize,g=d.normalized,y=new _.constructor(p.length*v);let M=0,b=0;for(let w=0,S=p.length;w<S;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*v;for(let x=0;x<v;x++)y[b++]=_[M++]}return new Li(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Ta,s=this.index.array,u=this.attributes;for(const d in u){const p=u[d],_=e(p,s);a.setAttribute(d,_)}const f=this.morphAttributes;for(const d in f){const p=[],_=f[d];for(let v=0,g=_.length;v<g;v++){const y=_[v],M=e(y,s);p.push(M)}a.morphAttributes[d]=p}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const _=h[d];a.addGroup(_.start,_.count,_.materialIndex)}return a}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const _ in p)p[_]!==void 0&&(e[_]=p[_]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const p in s){const _=s[p];e.data.attributes[p]=_.toJSON(e.data)}const u={};let f=!1;for(const p in this.morphAttributes){const _=this.morphAttributes[p],v=[];for(let g=0,y=_.length;g<y;g++){const M=_[g];v.push(M.toJSON(e.data))}v.length>0&&(u[p]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(a));const u=e.attributes;for(const _ in u){const v=u[_];this.setAttribute(_,v.clone(a))}const f=e.morphAttributes;for(const _ in f){const v=[],g=f[_];for(let y=0,M=g.length;y<M;y++)v.push(g[y].clone(a));this.morphAttributes[_]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let _=0,v=h.length;_<v;_++){const g=h[_];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new qe,Lr=new Ax,nc=new xl,Tv=new Q,ic=new Q,ac=new Q,rc=new Q,Ed=new Q,sc=new Q,bv=new Q,oc=new Q;class En extends Tn{constructor(e=new Ta,a=new Op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){sc.set(0,0,0);for(let p=0,_=f.length;p<_;p++){const v=d[p],g=f[p];v!==0&&(Ed.fromBufferAttribute(g,e),h?sc.addScaledVector(Ed,v):sc.addScaledVector(Ed.sub(a),v))}a.add(sc)}return a}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nc.copy(s.boundingSphere),nc.applyMatrix4(f),Lr.copy(e.ray).recast(e.near),!(nc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(nc,Tv)===null||Lr.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(f).invert(),Lr.copy(e.ray).applyMatrix4(Ev),!(s.boundingBox!==null&&Lr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,Lr)))}_computeIntersections(e,a,s){let u;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,g=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=y.length;b<w;b++){const S=y[b],x=h[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,nt=O;U<nt;U+=3){const F=d.getX(U),P=d.getX(U+1),G=d.getX(U+2);u=lc(this,x,e,s,_,v,g,F,P,G),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=S.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const z=d.getX(S),O=d.getX(S+1),U=d.getX(S+2);u=lc(this,h,e,s,_,v,g,z,O,U),u&&(u.faceIndex=Math.floor(S/3),a.push(u))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,w=y.length;b<w;b++){const S=y[b],x=h[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,nt=O;U<nt;U+=3){const F=U,P=U+1,G=U+2;u=lc(this,x,e,s,_,v,g,F,P,G),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=S.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const z=S,O=S+1,U=S+2;u=lc(this,h,e,s,_,v,g,z,O,U),u&&(u.faceIndex=Math.floor(S/3),a.push(u))}}}}function oT(o,e,a,s,u,f,h,d){let p;if(e.side===Vn?p=s.intersectTriangle(h,f,u,!0,d):p=s.intersectTriangle(u,f,h,e.side===lr,d),p===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const _=a.ray.origin.distanceTo(oc);return _<a.near||_>a.far?null:{distance:_,point:oc.clone(),object:o}}function lc(o,e,a,s,u,f,h,d,p,_){o.getVertexPosition(d,ic),o.getVertexPosition(p,ac),o.getVertexPosition(_,rc);const v=oT(o,e,a,s,ic,ac,rc,bv);if(v){const g=new Q;Ui.getBarycoord(bv,ic,ac,rc,g),u&&(v.uv=Ui.getInterpolatedAttribute(u,d,p,_,g,new Ce)),f&&(v.uv1=Ui.getInterpolatedAttribute(f,d,p,_,g,new Ce)),h&&(v.normal=Ui.getInterpolatedAttribute(h,d,p,_,g,new Q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:_,normal:new Q,materialIndex:0};Ui.getNormal(ic,ac,rc,y.normal),v.face=y,v.barycoord=g}return v}class Sl extends Ta{constructor(e=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const p=[],_=[],v=[],g=[];let y=0,M=0;b("z","y","x",-1,-1,s,a,e,h,f,0),b("z","y","x",1,-1,s,a,-e,h,f,1),b("x","z","y",1,1,e,s,a,u,h,2),b("x","z","y",1,-1,e,s,-a,u,h,3),b("x","y","z",1,-1,e,a,s,u,f,4),b("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(p),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(v,3)),this.setAttribute("uv",new ui(g,2));function b(w,S,x,z,O,U,nt,F,P,G,N){const C=U/P,I=nt/G,lt=U/2,rt=nt/2,gt=F/2,ct=P+1,q=G+1;let it=0,K=0;const xt=new Q;for(let yt=0;yt<q;yt++){const Dt=yt*I-rt;for(let ee=0;ee<ct;ee++){const ge=ee*C-lt;xt[w]=ge*z,xt[S]=Dt*O,xt[x]=gt,_.push(xt.x,xt.y,xt.z),xt[w]=0,xt[S]=0,xt[x]=F>0?1:-1,v.push(xt.x,xt.y,xt.z),g.push(ee/P),g.push(1-yt/G),it+=1}}for(let yt=0;yt<G;yt++)for(let Dt=0;Dt<P;Dt++){const ee=y+Dt+ct*yt,ge=y+Dt+ct*(yt+1),R=y+(Dt+1)+ct*(yt+1),k=y+(Dt+1)+ct*yt;p.push(ee,ge,k),p.push(ge,R,k),K+=6}d.addGroup(M,K,N),M+=K,y+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function Gn(o){const e={};for(let a=0;a<o.length;a++){const s=ao(o[a]);for(const u in s)e[u]=s[u]}return e}function lT(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function Dx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const uT={clone:ao,merge:Gn};var cT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends yl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cT,this.fragmentShader=fT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=lT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Ux extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Sa}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new Q,Av=new Ce,Rv=new Ce;class Si extends Ux{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,a){return this.getViewBounds(e,Av,Rv),a.subVectors(Rv,Av)}setViewOffset(e,a,s,u,f,h){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(hl*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,_=h.fullHeight;f+=h.offsetX*u/p,a-=h.offsetY*s/_,u*=h.width/p,s*=h.height/_}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Xs=-90,ks=1;class hT extends Tn{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Si(Xs,ks,e,a);u.layers=this.layers,this.add(u);const f=new Si(Xs,ks,e,a);f.layers=this.layers,this.add(f);const h=new Si(Xs,ks,e,a);h.layers=this.layers,this.add(h);const d=new Si(Xs,ks,e,a);d.layers=this.layers,this.add(d);const p=new Si(Xs,ks,e,a);p.layers=this.layers,this.add(p);const _=new Si(Xs,ks,e,a);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,p]=a;for(const _ of a)this.remove(_);if(e===Sa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of a)this.add(_),_.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,_,v]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,f),e.setRenderTarget(s,1,u),e.render(a,h),e.setRenderTarget(s,2,u),e.render(a,d),e.setRenderTarget(s,3,u),e.render(a,p),e.setRenderTarget(s,4,u),e.render(a,_),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,u),e.render(a,v),e.setRenderTarget(g,y,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Nx extends Ln{constructor(e,a,s,u,f,h,d,p,_,v){e=e!==void 0?e:[],a=a!==void 0?a:to,super(e,a,s,u,f,h,d,p,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dT extends kr{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Nx(u,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Wi}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new Sl(5,5,5),f=new Ki({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:sr});f.uniforms.tEquirect.value=a;const h=new En(u,f),d=a.minFilter;return a.minFilter===Vr&&(a.minFilter=Wi),new hT(1,10,this).update(e,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,a,s,u){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(a,s,u);e.setRenderTarget(f)}}const Td=new Q,pT=new Q,mT=new fe;class Br{constructor(e=new Q(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=Td.subVectors(s,a).cross(pT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(Td),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||mT.getNormalMatrix(e),u=this.coplanarPoint(Td).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new xl,uc=new Q;class zp{constructor(e=new Br,a=new Br,s=new Br,u=new Br,f=new Br,h=new Br){this.planes=[e,a,s,u,f,h]}set(e,a,s,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=Sa){const s=this.planes,u=e.elements,f=u[0],h=u[1],d=u[2],p=u[3],_=u[4],v=u[5],g=u[6],y=u[7],M=u[8],b=u[9],w=u[10],S=u[11],x=u[12],z=u[13],O=u[14],U=u[15];if(s[0].setComponents(p-f,y-_,S-M,U-x).normalize(),s[1].setComponents(p+f,y+_,S+M,U+x).normalize(),s[2].setComponents(p+h,y+v,S+b,U+z).normalize(),s[3].setComponents(p-h,y-v,S-b,U-z).normalize(),s[4].setComponents(p-d,y-g,S-w,U-O).normalize(),a===Sa)s[5].setComponents(p+d,y+g,S+w,U+O).normalize();else if(a===yc)s[5].setComponents(d,g,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Or.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(uc.x=u.normal.x>0?e.max.x:e.min.x,uc.y=u.normal.y>0?e.max.y:e.min.y,uc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lx(){let o=null,e=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function gT(o){const e=new WeakMap;function a(d,p){const _=d.array,v=d.usage,g=_.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,_,v),d.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(_ instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,_){const v=p.array,g=p.updateRanges;if(o.bindBuffer(_,d),g.length===0)o.bufferSubData(_,0,v);else{g.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<g.length;M++){const b=g[y],w=g[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++y,g[y]=w)}g.length=y+1;for(let M=0,b=g.length;M<b;M++){const w=g[M];o.bufferSubData(_,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const _=e.get(d);if(_===void 0)e.set(d,a(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(_.buffer,d,p),_.version=d.version}}return{get:u,remove:f,update:h}}class Ml extends Ta{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,h=a/2,d=Math.floor(s),p=Math.floor(u),_=d+1,v=p+1,g=e/d,y=a/p,M=[],b=[],w=[],S=[];for(let x=0;x<v;x++){const z=x*y-h;for(let O=0;O<_;O++){const U=O*g-f;b.push(U,-z,0),w.push(0,0,1),S.push(O/d),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let z=0;z<d;z++){const O=z+_*x,U=z+_*(x+1),nt=z+1+_*(x+1),F=z+1+_*x;M.push(O,U,F),M.push(U,nt,F)}this.setIndex(M),this.setAttribute("position",new ui(b,3)),this.setAttribute("normal",new ui(w,3)),this.setAttribute("uv",new ui(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var _T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ET=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WT="gl_FragColor = linearToOutputTexel( gl_FragColor );",jT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ib=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ib=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:_T,alphahash_pars_fragment:vT,alphamap_fragment:xT,alphamap_pars_fragment:yT,alphatest_fragment:ST,alphatest_pars_fragment:MT,aomap_fragment:ET,aomap_pars_fragment:TT,batching_pars_vertex:bT,batching_vertex:AT,begin_vertex:RT,beginnormal_vertex:CT,bsdfs:wT,iridescence_fragment:DT,bumpmap_pars_fragment:UT,clipping_planes_fragment:NT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:OT,clipping_planes_vertex:zT,color_fragment:PT,color_pars_fragment:BT,color_pars_vertex:IT,color_vertex:FT,common:HT,cube_uv_reflection_fragment:GT,defaultnormal_vertex:VT,displacementmap_pars_vertex:XT,displacementmap_vertex:kT,emissivemap_fragment:qT,emissivemap_pars_fragment:YT,colorspace_fragment:WT,colorspace_pars_fragment:jT,envmap_fragment:ZT,envmap_common_pars_fragment:KT,envmap_pars_fragment:QT,envmap_pars_vertex:JT,envmap_physical_pars_fragment:u1,envmap_vertex:$T,fog_vertex:t1,fog_pars_vertex:e1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:o1,lights_pars_begin:l1,lights_toon_fragment:c1,lights_toon_pars_fragment:f1,lights_phong_fragment:h1,lights_phong_pars_fragment:d1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:_1,lights_fragment_end:v1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:M1,map_fragment:E1,map_pars_fragment:T1,map_particle_fragment:b1,map_particle_pars_fragment:A1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:C1,morphinstance_vertex:w1,morphcolor_vertex:D1,morphnormal_vertex:U1,morphtarget_pars_vertex:N1,morphtarget_vertex:L1,normal_fragment_begin:O1,normal_fragment_maps:z1,normal_pars_fragment:P1,normal_pars_vertex:B1,normal_vertex:I1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:V1,iridescence_pars_fragment:X1,opaque_fragment:k1,packing:q1,premultiplied_alpha_fragment:Y1,project_vertex:W1,dithering_fragment:j1,dithering_pars_fragment:Z1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:$1,shadowmap_vertex:tb,shadowmask_pars_fragment:eb,skinbase_vertex:nb,skinning_pars_vertex:ib,skinning_vertex:ab,skinnormal_vertex:rb,specularmap_fragment:sb,specularmap_pars_fragment:ob,tonemapping_fragment:lb,tonemapping_pars_fragment:ub,transmission_fragment:cb,transmission_pars_fragment:fb,uv_pars_fragment:hb,uv_pars_vertex:db,uv_vertex:pb,worldpos_vertex:mb,background_vert:gb,background_frag:_b,backgroundCube_vert:vb,backgroundCube_frag:xb,cube_vert:yb,cube_frag:Sb,depth_vert:Mb,depth_frag:Eb,distanceRGBA_vert:Tb,distanceRGBA_frag:bb,equirect_vert:Ab,equirect_frag:Rb,linedashed_vert:Cb,linedashed_frag:wb,meshbasic_vert:Db,meshbasic_frag:Ub,meshlambert_vert:Nb,meshlambert_frag:Lb,meshmatcap_vert:Ob,meshmatcap_frag:zb,meshnormal_vert:Pb,meshnormal_frag:Bb,meshphong_vert:Ib,meshphong_frag:Fb,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Vb,meshtoon_frag:Xb,points_vert:kb,points_frag:qb,shadow_vert:Yb,shadow_frag:Wb,sprite_vert:jb,sprite_frag:Zb},Lt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Yi={basic:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Re(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Gn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Gn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Re(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Gn([Lt.points,Lt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Gn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Gn([Lt.common,Lt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Gn([Lt.sprite,Lt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Gn([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Gn([Lt.lights,Lt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Yi.physical={uniforms:Gn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const cc={r:0,b:0,g:0},zr=new Zi,Kb=new qe;function Qb(o,e,a,s,u,f,h){const d=new Re(0);let p=f===!0?0:1,_,v,g=null,y=0,M=null;function b(z){let O=z.isScene===!0?z.background:null;return O&&O.isTexture&&(O=(z.backgroundBlurriness>0?a:e).get(O)),O}function w(z){let O=!1;const U=b(z);U===null?x(d,p):U&&U.isColor&&(x(U,1),O=!0);const nt=o.xr.getEnvironmentBlendMode();nt==="additive"?s.buffers.color.setClear(0,0,0,1,h):nt==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,O){const U=b(O);U&&(U.isCubeTexture||U.mapping===Mc)?(v===void 0&&(v=new En(new Sl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ao(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(nt,F,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),zr.copy(O.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(zr)),v.material.toneMapped=De.getTransfer(U.colorSpace)!==He,(g!==U||y!==U.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=U,y=U.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(_===void 0&&(_=new En(new Ml(2,2),new Ki({name:"BackgroundMaterial",uniforms:ao(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(_)),_.material.uniforms.t2D.value=U,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.toneMapped=De.getTransfer(U.colorSpace)!==He,U.matrixAutoUpdate===!0&&U.updateMatrix(),_.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||y!==U.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=U,y=U.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null))}function x(z,O){z.getRGB(cc,Dx(o)),s.buffers.color.setClear(cc.r,cc.g,cc.b,O,h)}return{getClearColor:function(){return d},setClearColor:function(z,O=1){d.set(z),p=O,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,x(d,p)},render:w,addToRenderList:S}}function Jb(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=y(null);let f=u,h=!1;function d(C,I,lt,rt,gt){let ct=!1;const q=g(rt,lt,I);f!==q&&(f=q,_(f.object)),ct=M(C,rt,lt,gt),ct&&b(C,rt,lt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,U(C,I,lt,rt),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function p(){return o.createVertexArray()}function _(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,I,lt){const rt=lt.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ct=gt[I.id];ct===void 0&&(ct={},gt[I.id]=ct);let q=ct[rt];return q===void 0&&(q=y(p()),ct[rt]=q),q}function y(C){const I=[],lt=[],rt=[];for(let gt=0;gt<a;gt++)I[gt]=0,lt[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,I,lt,rt){const gt=f.attributes,ct=I.attributes;let q=0;const it=lt.getAttributes();for(const K in it)if(it[K].location>=0){const yt=gt[K];let Dt=ct[K];if(Dt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Dt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Dt=C.instanceColor)),yt===void 0||yt.attribute!==Dt||Dt&&yt.data!==Dt.data)return!0;q++}return f.attributesNum!==q||f.index!==rt}function b(C,I,lt,rt){const gt={},ct=I.attributes;let q=0;const it=lt.getAttributes();for(const K in it)if(it[K].location>=0){let yt=ct[K];yt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const Dt={};Dt.attribute=yt,yt&&yt.data&&(Dt.data=yt.data),gt[K]=Dt,q++}f.attributes=gt,f.attributesNum=q,f.index=rt}function w(){const C=f.newAttributes;for(let I=0,lt=C.length;I<lt;I++)C[I]=0}function S(C){x(C,0)}function x(C,I){const lt=f.newAttributes,rt=f.enabledAttributes,gt=f.attributeDivisors;lt[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),gt[C]!==I&&(o.vertexAttribDivisor(C,I),gt[C]=I)}function z(){const C=f.newAttributes,I=f.enabledAttributes;for(let lt=0,rt=I.length;lt<rt;lt++)I[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),I[lt]=0)}function O(C,I,lt,rt,gt,ct,q){q===!0?o.vertexAttribIPointer(C,I,lt,gt,ct):o.vertexAttribPointer(C,I,lt,rt,gt,ct)}function U(C,I,lt,rt){w();const gt=rt.attributes,ct=lt.getAttributes(),q=I.defaultAttributeValues;for(const it in ct){const K=ct[it];if(K.location>=0){let xt=gt[it];if(xt===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const yt=xt.normalized,Dt=xt.itemSize,ee=e.get(xt);if(ee===void 0)continue;const ge=ee.buffer,R=ee.type,k=ee.bytesPerElement,pt=R===o.INT||R===o.UNSIGNED_INT||xt.gpuType===bp;if(xt.isInterleavedBufferAttribute){const ot=xt.data,Tt=ot.stride,Rt=xt.offset;if(ot.isInstancedInterleavedBuffer){for(let It=0;It<K.locationSize;It++)x(K.location+It,ot.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let It=0;It<K.locationSize;It++)S(K.location+It);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let It=0;It<K.locationSize;It++)O(K.location+It,Dt/K.locationSize,R,yt,Tt*k,(Rt+Dt/K.locationSize*It)*k,pt)}else{if(xt.isInstancedBufferAttribute){for(let ot=0;ot<K.locationSize;ot++)x(K.location+ot,xt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ot=0;ot<K.locationSize;ot++)S(K.location+ot);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let ot=0;ot<K.locationSize;ot++)O(K.location+ot,Dt/K.locationSize,R,yt,Dt*k,Dt/K.locationSize*ot*k,pt)}}else if(q!==void 0){const yt=q[it];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(K.location,yt);break;case 3:o.vertexAttrib3fv(K.location,yt);break;case 4:o.vertexAttrib4fv(K.location,yt);break;default:o.vertexAttrib1fv(K.location,yt)}}}}z()}function nt(){G();for(const C in s){const I=s[C];for(const lt in I){const rt=I[lt];for(const gt in rt)v(rt[gt].object),delete rt[gt];delete I[lt]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const I=s[C.id];for(const lt in I){const rt=I[lt];for(const gt in rt)v(rt[gt].object),delete rt[gt];delete I[lt]}delete s[C.id]}function P(C){for(const I in s){const lt=s[I];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const gt in rt)v(rt[gt].object),delete rt[gt];delete lt[C.id]}}function G(){N(),h=!0,f!==u&&(f=u,_(f.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:G,resetDefaultState:N,dispose:nt,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:S,disableUnusedAttributes:z}}function $b(o,e,a){let s;function u(_){s=_}function f(_,v){o.drawArrays(s,_,v),a.update(v,s,1)}function h(_,v,g){g!==0&&(o.drawArraysInstanced(s,_,v,g),a.update(v,s,g))}function d(_,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,_,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];a.update(M,s,1)}function p(_,v,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<_.length;b++)h(_[b],v[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(s,_,0,v,0,y,0,g);let b=0;for(let w=0;w<g;w++)b+=v[w]*y[w];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function tA(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(P){return!(P!==Ni&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const G=P===_l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ea&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ji&&!G)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=a.precision!==void 0?a.precision:"highp";const v=p(_);v!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",v,"instead."),_=v);const g=a.logarithmicDepthBuffer===!0,y=a.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),nt=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:_,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:nt,maxSamples:F}}function eA(o){const e=this;let a=null,s=0,u=!1,f=!1;const h=new Br,d=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||s!==0||u;return u=y,s=g.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,y){a=v(g,y,0)},this.setState=function(g,y,M){const b=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!u||b===null||b.length===0||f&&!S)f?v(null):_();else{const z=f?0:s,O=z*4;let U=x.clippingState||null;p.value=U,U=v(b,y,O,M);for(let nt=0;nt!==O;++nt)U[nt]=a[nt];x.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function _(){p.value!==a&&(p.value=a,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,y,M,b){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=p.value,b!==!0||S===null){const x=M+w*4,z=y.matrixWorldInverse;d.getNormalMatrix(z),(S===null||S.length<x)&&(S=new Float32Array(x));for(let O=0,U=M;O!==w;++O,U+=4)h.copy(g[O]).applyMatrix4(z,d),h.normal.toArray(S,U),S[U+3]=h.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function nA(o){let e=new WeakMap;function a(h,d){return d===kd?h.mapping=to:d===qd&&(h.mapping=eo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===kd||d===qd)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new dT(p.height);return _.fromEquirectangularTexture(o,h),e.set(h,_),h.addEventListener("dispose",u),a(_.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}class Ox extends Ux{constructor(e=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=u+a,p=u-a;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}const js=4,Cv=[.125,.215,.35,.446,.526,.582],Hr=20,bd=new Ox,wv=new Re;let Ad=null,Rd=0,Cd=0,wd=!1;const Ir=(1+Math.sqrt(5))/2,qs=1/Ir,Dv=[new Q(-Ir,qs,0),new Q(Ir,qs,0),new Q(-qs,0,Ir),new Q(qs,0,Ir),new Q(0,Ir,-qs),new Q(0,Ir,qs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100){Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,u,f),a>0&&this._blur(f,0,0,a),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===to||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:_l,format:Ni,colorSpace:ro,depthBuffer:!1},u=Uv(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uv(e,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(f)),this._blurMaterial=aA(f,e,a)}return u}_compileMaterial(e){const a=new En(this._lodPlanes[0],e);this._renderer.compile(a,bd)}_sceneToCubeUV(e,a,s,u){const d=new Si(90,1,a,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(wv),v.toneMapping=or,v.autoClear=!1;const M=new Op({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),b=new En(new Sl,M);let w=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,w=!0):(M.color.copy(wv),w=!0);for(let x=0;x<6;x++){const z=x%3;z===0?(d.up.set(0,p[x],0),d.lookAt(_[x],0,0)):z===1?(d.up.set(0,0,p[x]),d.lookAt(0,_[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,_[x]));const O=this._cubeSize;fc(u,z*O,x>2?O:0,O,O),v.setRenderTarget(u),w&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=y,v.autoClear=g,e.background=S}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===to||e.mapping===eo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new En(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;fc(a,0,0,3*p,2*p),s.setRenderTarget(a),s.render(h,bd)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Dv[(u-f-1)%Dv.length];this._blur(e,f-1,f,h,d)}a.autoClear=s}_blur(e,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,a,s,u,"latitudinal",f),this._halfBlur(h,e,s,s,u,"longitudinal",f)}_halfBlur(e,a,s,u,f,h,d){const p=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new En(this._lodPlanes[u],_),y=_.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Hr-1),w=f/b,S=isFinite(f)?1+Math.floor(v*w):Hr;S>Hr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Hr}`);const x=[];let z=0;for(let P=0;P<Hr;++P){const G=P/w,N=Math.exp(-G*G/2);x.push(N),P===0?z+=N:P<S&&(z+=2*N)}for(let P=0;P<x.length;P++)x[P]=x[P]/z;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=b,y.mipInt.value=O-s;const U=this._sizeLods[u],nt=3*U*(u>O-js?u-O+js:0),F=4*(this._cubeSize-U);fc(a,nt,F,3*U,2*U),p.setRenderTarget(a),p.render(g,bd)}}function iA(o){const e=[],a=[],s=[];let u=o;const f=o-js+1+Cv.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let p=1/d;h>o-js?p=Cv[h-o+js-1]:h===0&&(p=0),s.push(p);const _=1/(d-2),v=-_,g=1+_,y=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,w=3,S=2,x=1,z=new Float32Array(w*b*M),O=new Float32Array(S*b*M),U=new Float32Array(x*b*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,G=F>2?0:-1,N=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];z.set(N,w*b*F),O.set(y,S*b*F);const C=[F,F,F,F,F,F];U.set(C,x*b*F)}const nt=new Ta;nt.setAttribute("position",new Li(z,w)),nt.setAttribute("uv",new Li(O,S)),nt.setAttribute("faceIndex",new Li(U,x)),e.push(nt),u>js&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function Uv(o,e,a){const s=new kr(o,e,a);return s.texture.mapping=Mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fc(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function aA(o,e,a){const s=new Float32Array(Hr),u=new Q(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Nv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Lv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rA(o){let e=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const p=d.mapping,_=p===kd||p===qd,v=p===to||p===eo;if(_||v){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return a===null&&(a=new xp(o)),g=_?a.fromEquirectangular(d,g):a.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return _&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new xp(o)),g=_?a.fromEquirectangular(d):a.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function u(d){let p=0;const _=6;for(let v=0;v<_;v++)d[v]!==void 0&&p++;return p===_}function f(d){const p=d.target;p.removeEventListener("dispose",f);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function sA(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&ul("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function oA(o,e,a,s){const u={},f=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const w=y.morphAttributes[b];for(let S=0,x=w.length;S<x;S++)e.remove(w[S])}y.removeEventListener("dispose",h),delete u[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function d(g,y){return u[y.id]===!0||(y.addEventListener("dispose",h),u[y.id]=!0,a.memory.geometries++),y}function p(g){const y=g.attributes;for(const b in y)e.update(y[b],o.ARRAY_BUFFER);const M=g.morphAttributes;for(const b in M){const w=M[b];for(let S=0,x=w.length;S<x;S++)e.update(w[S],o.ARRAY_BUFFER)}}function _(g){const y=[],M=g.index,b=g.attributes.position;let w=0;if(M!==null){const z=M.array;w=M.version;for(let O=0,U=z.length;O<U;O+=3){const nt=z[O+0],F=z[O+1],P=z[O+2];y.push(nt,F,F,P,P,nt)}}else if(b!==void 0){const z=b.array;w=b.version;for(let O=0,U=z.length/3-1;O<U;O+=3){const nt=O+0,F=O+1,P=O+2;y.push(nt,F,F,P,P,nt)}}else return;const S=new(Ex(y)?wx:Cx)(y,1);S.version=w;const x=f.get(g);x&&e.remove(x),f.set(g,S)}function v(g){const y=f.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&_(g)}else _(g);return f.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function lA(o,e,a){let s;function u(y){s=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function p(y,M){o.drawElements(s,M,f,y*h),a.update(M,s,1)}function _(y,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,y*h,b),a.update(M,s,b))}function v(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,y,0,b);let S=0;for(let x=0;x<b;x++)S+=M[x];a.update(S,s,1)}function g(y,M,b,w){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)_(y[x]/h,M[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,f,y,0,w,0,b);let x=0;for(let z=0;z<b;z++)x+=M[z]*w[z];a.update(x,s,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function uA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function cA(o,e,a){const s=new WeakMap,u=new Je;function f(h,d,p){const _=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let C=function(){G.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let nt=d.attributes.position.count*U,F=1;nt>e.maxTextureSize&&(F=Math.ceil(nt/e.maxTextureSize),nt=e.maxTextureSize);const P=new Float32Array(nt*F*4*g),G=new bx(P,nt,F,g);G.type=ji,G.needsUpdate=!0;const N=U*4;for(let I=0;I<g;I++){const lt=x[I],rt=z[I],gt=O[I],ct=nt*F*4*I;for(let q=0;q<lt.count;q++){const it=q*N;b===!0&&(u.fromBufferAttribute(lt,q),P[ct+it+0]=u.x,P[ct+it+1]=u.y,P[ct+it+2]=u.z,P[ct+it+3]=0),w===!0&&(u.fromBufferAttribute(rt,q),P[ct+it+4]=u.x,P[ct+it+5]=u.y,P[ct+it+6]=u.z,P[ct+it+7]=0),S===!0&&(u.fromBufferAttribute(gt,q),P[ct+it+8]=u.x,P[ct+it+9]=u.y,P[ct+it+10]=u.z,P[ct+it+11]=gt.itemSize===4?u.w:1)}}y={count:g,texture:G,size:new Ce(nt,F)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let S=0;S<_.length;S++)b+=_[S];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",_)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function fA(o,e,a,s){let u=new WeakMap;function f(p){const _=s.render.frame,v=p.geometry,g=e.get(p,v);if(u.get(g)!==_&&(e.update(g),u.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),u.get(p)!==_&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;u.get(y)!==_&&(y.update(),u.set(y,_))}return g}function h(){u=new WeakMap}function d(p){const _=p.target;_.removeEventListener("dispose",d),a.remove(_.instanceMatrix),_.instanceColor!==null&&a.remove(_.instanceColor)}return{update:f,dispose:h}}class zx extends Ln{constructor(e,a,s,u,f,h,d,p,_,v=Qs){if(v!==Qs&&v!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Qs&&(s=Xr),s===void 0&&v===io&&(s=no),super(null,u,f,h,d,p,v,s,_),this.isDepthTexture=!0,this.image={width:e,height:a},this.magFilter=d!==void 0?d:li,this.minFilter=p!==void 0?p:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}const Px=new Ln,Ov=new zx(1,1),Bx=new bx,Ix=new QE,Fx=new Nx,zv=[],Pv=[],Bv=new Float32Array(16),Iv=new Float32Array(9),Fv=new Float32Array(4);function lo(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=zv[u];if(f===void 0&&(f=new Float32Array(u),zv[u]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=a,o[h].toArray(f,d)}return f}function un(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function cn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function Tc(o,e){let a=Pv[e];a===void 0&&(a=new Int32Array(e),Pv[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function hA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function dA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(un(a,e))return;o.uniform2fv(this.addr,e),cn(a,e)}}function pA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(un(a,e))return;o.uniform3fv(this.addr,e),cn(a,e)}}function mA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(un(a,e))return;o.uniform4fv(this.addr,e),cn(a,e)}}function gA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(un(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(a,e)}else{if(un(a,s))return;Fv.set(s),o.uniformMatrix2fv(this.addr,!1,Fv),cn(a,s)}}function _A(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(un(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(a,e)}else{if(un(a,s))return;Iv.set(s),o.uniformMatrix3fv(this.addr,!1,Iv),cn(a,s)}}function vA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(un(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(a,e)}else{if(un(a,s))return;Bv.set(s),o.uniformMatrix4fv(this.addr,!1,Bv),cn(a,s)}}function xA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function yA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(un(a,e))return;o.uniform2iv(this.addr,e),cn(a,e)}}function SA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(un(a,e))return;o.uniform3iv(this.addr,e),cn(a,e)}}function MA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(un(a,e))return;o.uniform4iv(this.addr,e),cn(a,e)}}function EA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function TA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(un(a,e))return;o.uniform2uiv(this.addr,e),cn(a,e)}}function bA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(un(a,e))return;o.uniform3uiv(this.addr,e),cn(a,e)}}function AA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(un(a,e))return;o.uniform4uiv(this.addr,e),cn(a,e)}}function RA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Ov.compareFunction=Mx,f=Ov):f=Px,a.setTexture2D(e||f,u)}function CA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||Ix,u)}function wA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||Fx,u)}function DA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||Bx,u)}function UA(o){switch(o){case 5126:return hA;case 35664:return dA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return _A;case 35676:return vA;case 5124:case 35670:return xA;case 35667:case 35671:return yA;case 35668:case 35672:return SA;case 35669:case 35673:return MA;case 5125:return EA;case 36294:return TA;case 36295:return bA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return CA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return DA}}function NA(o,e){o.uniform1fv(this.addr,e)}function LA(o,e){const a=lo(e,this.size,2);o.uniform2fv(this.addr,a)}function OA(o,e){const a=lo(e,this.size,3);o.uniform3fv(this.addr,a)}function zA(o,e){const a=lo(e,this.size,4);o.uniform4fv(this.addr,a)}function PA(o,e){const a=lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function BA(o,e){const a=lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function IA(o,e){const a=lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function FA(o,e){o.uniform1iv(this.addr,e)}function HA(o,e){o.uniform2iv(this.addr,e)}function GA(o,e){o.uniform3iv(this.addr,e)}function VA(o,e){o.uniform4iv(this.addr,e)}function XA(o,e){o.uniform1uiv(this.addr,e)}function kA(o,e){o.uniform2uiv(this.addr,e)}function qA(o,e){o.uniform3uiv(this.addr,e)}function YA(o,e){o.uniform4uiv(this.addr,e)}function WA(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);un(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(e[h]||Px,f[h])}function jA(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);un(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(e[h]||Ix,f[h])}function ZA(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);un(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(e[h]||Fx,f[h])}function KA(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);un(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(e[h]||Bx,f[h])}function QA(o){switch(o){case 5126:return NA;case 35664:return LA;case 35665:return OA;case 35666:return zA;case 35674:return PA;case 35675:return BA;case 35676:return IA;case 5124:case 35670:return FA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return VA;case 5125:return XA;case 36294:return kA;case 36295:return qA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return KA}}class JA{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=UA(a.type)}}class $A{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=QA(a.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,a[d.id],s)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function Hv(o,e){o.seq.push(e),o.map[e.id]=e}function eR(o,e,a){const s=o.name,u=s.length;for(Dd.lastIndex=0;;){const f=Dd.exec(s),h=Dd.lastIndex;let d=f[1];const p=f[2]==="]",_=f[3];if(p&&(d=d|0),_===void 0||_==="["&&h+2===u){Hv(a,_===void 0?new JA(d,o,e):new $A(d,o,e));break}else{let g=a.map[d];g===void 0&&(g=new tR(d),Hv(a,g)),a=g}}}class xc{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(a,u),h=e.getUniformLocation(a,f.name);eR(f,h,this)}}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in a&&s.push(h)}return s}}function Gv(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const nR=37297;let iR=0;function aR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const Vv=new fe;function rR(o){De._getMatrix(Vv,De.workingColorSpace,o);const e=`mat3( ${Vv.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Xv(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=o.getShaderInfoLog(e).trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return a.toUpperCase()+`

`+u+`

`+aR(o.getShaderSource(e),h)}else return u}function sR(o,e){const a=rR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function oR(o,e){let a;switch(e){case cE:a="Linear";break;case fE:a="Reinhard";break;case hE:a="Cineon";break;case cx:a="ACESFilmic";break;case pE:a="AgX";break;case mE:a="Neutral";break;case dE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const hc=new Q;function lR(){De.getLuminanceCoefficients(hc);const o=hc.x.toFixed(4),e=hc.y.toFixed(4),a=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function cR(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function fR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return a}function cl(o){return o!==""}function kv(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(o){return o.replace(hR,pR)}const dR=new Map;function pR(o,e){let a=de[e];if(a===void 0){const s=dR.get(e);if(s!==void 0)a=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return yp(a)}const mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(o){return o.replace(mR,gR)}function gR(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function Wv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _R(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===XM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===xa&&(e="SHADOWMAP_TYPE_VSM"),e}function vR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case eo:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function yR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ux:e="ENVMAP_BLENDING_MULTIPLY";break;case lE:e="ENVMAP_BLENDING_MIX";break;case uE:e="ENVMAP_BLENDING_ADD";break}return e}function SR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function MR(o,e,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const p=_R(a),_=vR(a),v=xR(a),g=yR(a),y=SR(a),M=uR(a),b=cR(f),w=u.createProgram();let S,x,z=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(cl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(cl).join(`
`),x.length>0&&(x+=`
`)):(S=[Wv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),x=[Wv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.envMap?"#define "+v:"",a.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==or?"#define TONE_MAPPING":"",a.toneMapping!==or?de.tonemapping_pars_fragment:"",a.toneMapping!==or?oR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,sR("linearToOutputTexel",a.outputColorSpace),lR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(cl).join(`
`)),h=yp(h),h=kv(h,a),h=qv(h,a),d=yp(d),d=kv(d,a),d=qv(d,a),h=Yv(h),d=Yv(d),a.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",a.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=z+S+h,U=z+x+d,nt=Gv(u,u.VERTEX_SHADER,O),F=Gv(u,u.FRAGMENT_SHADER,U);u.attachShader(w,nt),u.attachShader(w,F),a.index0AttributeName!==void 0?u.bindAttribLocation(w,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function P(I){if(o.debug.checkShaderErrors){const lt=u.getProgramInfoLog(w).trim(),rt=u.getShaderInfoLog(nt).trim(),gt=u.getShaderInfoLog(F).trim();let ct=!0,q=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,nt,F);else{const it=Xv(u,nt,"vertex"),K=Xv(u,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+lt+`
`+it+`
`+K)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||gt==="")&&(q=!1);q&&(I.diagnostics={runnable:ct,programLog:lt,vertexShader:{log:rt,prefix:S},fragmentShader:{log:gt,prefix:x}})}u.deleteShader(nt),u.deleteShader(F),G=new xc(u,w),N=fR(u,w)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=u.getProgramParameter(w,nR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=iR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=nt,this.fragmentShader=F,this}let ER=0;class TR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new bR(e),a.set(e,s)),s}}class bR{constructor(e){this.id=ER++,this.code=e,this.usedTimes=0}}function AR(o,e,a,s,u,f,h){const d=new Lp,p=new TR,_=new Set,v=[],g=u.logarithmicDepthBuffer,y=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return _.add(N),N===0?"uv":`uv${N}`}function S(N,C,I,lt,rt){const gt=lt.fog,ct=rt.geometry,q=N.isMeshStandardMaterial?lt.environment:null,it=(N.isMeshStandardMaterial?a:e).get(N.envMap||q),K=it&&it.mapping===Mc?it.image.height:null,xt=b[N.type];N.precision!==null&&(M=u.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const yt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Dt=yt!==void 0?yt.length:0;let ee=0;ct.morphAttributes.position!==void 0&&(ee=1),ct.morphAttributes.normal!==void 0&&(ee=2),ct.morphAttributes.color!==void 0&&(ee=3);let ge,R,k,pt;if(xt){const Ee=Yi[xt];ge=Ee.vertexShader,R=Ee.fragmentShader}else ge=N.vertexShader,R=N.fragmentShader,p.update(N),k=p.getVertexShaderID(N),pt=p.getFragmentShaderID(N);const ot=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Rt=rt.isInstancedMesh===!0,It=rt.isBatchedMesh===!0,Et=!!N.map,bt=!!N.matcap,be=!!it,V=!!N.aoMap,ve=!!N.lightMap,Jt=!!N.bumpMap,Kt=!!N.normalMap,At=!!N.displacementMap,oe=!!N.emissiveMap,kt=!!N.metalnessMap,D=!!N.roughnessMap,T=N.anisotropy>0,$=N.clearcoat>0,mt=N.dispersion>0,vt=N.iridescence>0,ht=N.sheen>0,qt=N.transmission>0,Ut=T&&!!N.anisotropyMap,Nt=$&&!!N.clearcoatMap,he=$&&!!N.clearcoatNormalMap,St=$&&!!N.clearcoatRoughnessMap,Vt=vt&&!!N.iridescenceMap,te=vt&&!!N.iridescenceThicknessMap,ie=ht&&!!N.sheenColorMap,Gt=ht&&!!N.sheenRoughnessMap,_e=!!N.specularMap,le=!!N.specularColorMap,Ie=!!N.specularIntensityMap,H=qt&&!!N.transmissionMap,Ot=qt&&!!N.thicknessMap,ut=!!N.gradientMap,_t=!!N.alphaMap,zt=N.alphaTest>0,Ft=!!N.alphaHash,re=!!N.extensions;let We=or;N.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(We=o.toneMapping);const fn={shaderID:xt,shaderType:N.type,shaderName:N.name,vertexShader:ge,fragmentShader:R,defines:N.defines,customVertexShaderID:k,customFragmentShaderID:pt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:It,batchingColor:It&&rt._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&rt.instanceColor!==null,instancingMorph:Rt&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ro,alphaToCoverage:!!N.alphaToCoverage,map:Et,matcap:bt,envMap:be,envMapMode:be&&it.mapping,envMapCubeUVHeight:K,aoMap:V,lightMap:ve,bumpMap:Jt,normalMap:Kt,displacementMap:y&&At,emissiveMap:oe,normalMapObjectSpace:Kt&&N.normalMapType===xE,normalMapTangentSpace:Kt&&N.normalMapType===Sx,metalnessMap:kt,roughnessMap:D,anisotropy:T,anisotropyMap:Ut,clearcoat:$,clearcoatMap:Nt,clearcoatNormalMap:he,clearcoatRoughnessMap:St,dispersion:mt,iridescence:vt,iridescenceMap:Vt,iridescenceThicknessMap:te,sheen:ht,sheenColorMap:ie,sheenRoughnessMap:Gt,specularMap:_e,specularColorMap:le,specularIntensityMap:Ie,transmission:qt,transmissionMap:H,thicknessMap:Ot,gradientMap:ut,opaque:N.transparent===!1&&N.blending===Ks&&N.alphaToCoverage===!1,alphaMap:_t,alphaTest:zt,alphaHash:Ft,combine:N.combine,mapUv:Et&&w(N.map.channel),aoMapUv:V&&w(N.aoMap.channel),lightMapUv:ve&&w(N.lightMap.channel),bumpMapUv:Jt&&w(N.bumpMap.channel),normalMapUv:Kt&&w(N.normalMap.channel),displacementMapUv:At&&w(N.displacementMap.channel),emissiveMapUv:oe&&w(N.emissiveMap.channel),metalnessMapUv:kt&&w(N.metalnessMap.channel),roughnessMapUv:D&&w(N.roughnessMap.channel),anisotropyMapUv:Ut&&w(N.anisotropyMap.channel),clearcoatMapUv:Nt&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:he&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:te&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&w(N.sheenRoughnessMap.channel),specularMapUv:_e&&w(N.specularMap.channel),specularColorMapUv:le&&w(N.specularColorMap.channel),specularIntensityMapUv:Ie&&w(N.specularIntensityMap.channel),transmissionMapUv:H&&w(N.transmissionMap.channel),thicknessMapUv:Ot&&w(N.thicknessMap.channel),alphaMapUv:_t&&w(N.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Kt||T),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ct.attributes.uv&&(Et||_t),fog:!!gt,useFog:N.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Tt,skinning:rt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:We,decodeVideoTexture:Et&&N.map.isVideoTexture===!0&&De.getTransfer(N.map.colorSpace)===He,decodeVideoTextureEmissive:oe&&N.emissiveMap.isVideoTexture===!0&&De.getTransfer(N.emissiveMap.colorSpace)===He,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ya,flipSided:N.side===Vn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:re&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&N.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return fn.vertexUv1s=_.has(1),fn.vertexUv2s=_.has(2),fn.vertexUv3s=_.has(3),_.clear(),fn}function x(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const I in N.defines)C.push(I),C.push(N.defines[I]);return N.isRawShaderMaterial===!1&&(z(C,N),O(C,N),C.push(o.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function z(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function O(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function U(N){const C=b[N.type];let I;if(C){const lt=Yi[C];I=uT.clone(lt.uniforms)}else I=N.uniforms;return I}function nt(N,C){let I;for(let lt=0,rt=v.length;lt<rt;lt++){const gt=v[lt];if(gt.cacheKey===C){I=gt,++I.usedTimes;break}}return I===void 0&&(I=new MR(o,C,N,f),v.push(I)),I}function F(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function P(N){p.remove(N)}function G(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:U,acquireProgram:nt,releaseProgram:F,releaseShaderCache:P,programs:v,dispose:G}}function RR(){let o=new WeakMap;function e(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function CR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function jv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Zv(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function h(g,y,M,b,w,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:M,groupOrder:b,renderOrder:g.renderOrder,z:w,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=M,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=w,x.group=S),e++,x}function d(g,y,M,b,w,S){const x=h(g,y,M,b,w,S);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function p(g,y,M,b,w,S){const x=h(g,y,M,b,w,S);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function _(g,y){a.length>1&&a.sort(g||CR),s.length>1&&s.sort(y||jv),u.length>1&&u.sort(y||jv)}function v(){for(let g=e,y=o.length;g<y;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:p,finish:v,sort:_}}function wR(){let o=new WeakMap;function e(s,u){const f=o.get(s);let h;return f===void 0?(h=new Zv,o.set(s,[h])):u>=f.length?(h=new Zv,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:e,dispose:a}}function DR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new Q,color:new Re};break;case"SpotLight":a={position:new Q,direction:new Q,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new Q,color:new Re,distance:0,decay:0};break;case"HemisphereLight":a={direction:new Q,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":a={color:new Re,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=a,a}}}function UR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let NR=0;function LR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function OR(o){const e=new DR,a=UR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new Q);const u=new Q,f=new qe,h=new qe;function d(_){let v=0,g=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,b=0,w=0,S=0,x=0,z=0,O=0,U=0,nt=0,F=0,P=0;_.sort(LR);for(let N=0,C=_.length;N<C;N++){const I=_[N],lt=I.color,rt=I.intensity,gt=I.distance,ct=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=lt.r*rt,g+=lt.g*rt,y+=lt.b*rt;else if(I.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(I.sh.coefficients[q],rt);P++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const it=I.shadow,K=a.get(I);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=I.shadow.matrix,z++}s.directional[M]=q,M++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(lt).multiplyScalar(rt),q.distance=gt,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,s.spot[w]=q;const it=I.shadow;if(I.map&&(s.spotLightMap[nt]=I.map,nt++,it.updateMatrices(I),I.castShadow&&F++),s.spotLightMatrix[w]=it.matrix,I.castShadow){const K=a.get(I);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,s.spotShadow[w]=K,s.spotShadowMap[w]=ct,U++}w++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(lt).multiplyScalar(rt),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=q,S++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const it=I.shadow,K=a.get(I);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,K.shadowCameraNear=it.camera.near,K.shadowCameraFar=it.camera.far,s.pointShadow[b]=K,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=I.shadow.matrix,O++}s.point[b]=q,b++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(rt),q.groundColor.copy(I.groundColor).multiplyScalar(rt),s.hemi[x]=q,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const G=s.hash;(G.directionalLength!==M||G.pointLength!==b||G.spotLength!==w||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==z||G.numPointShadows!==O||G.numSpotShadows!==U||G.numSpotMaps!==nt||G.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=S,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+nt-F,s.spotLightMap.length=nt,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=P,G.directionalLength=M,G.pointLength=b,G.spotLength=w,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=z,G.numPointShadows=O,G.numSpotShadows=U,G.numSpotMaps=nt,G.numLightProbes=P,s.version=NR++)}function p(_,v){let g=0,y=0,M=0,b=0,w=0;const S=v.matrixWorldInverse;for(let x=0,z=_.length;x<z;x++){const O=_[x];if(O.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(S),g++}else if(O.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),h.identity(),f.copy(O.matrixWorld),f.premultiply(S),h.extractRotation(f),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),y++}else if(O.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:d,setupView:p,state:s}}function Kv(o){const e=new OR(o),a=[],s=[];function u(v){_.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){e.setup(a)}function p(v){e.setupView(a,v)}const _={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:_,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function zR(o){let e=new WeakMap;function a(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new Kv(o),e.set(u,[d])):f>=h.length?(d=new Kv(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:a,dispose:s}}class PR extends yl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BR extends yl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HR(o,e,a){let s=new zp;const u=new Ce,f=new Ce,h=new Je,d=new PR({depthPacking:vE}),p=new BR,_={},v=a.maxTextureSize,g={[lr]:Vn,[Vn]:lr,[ya]:ya},y=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:IR,fragmentShader:FR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ta;b.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new En(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lx;let x=this.type;this.render=function(F,P,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const N=o.getRenderTarget(),C=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(sr),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=x!==xa&&this.type===xa,gt=x===xa&&this.type!==xa;for(let ct=0,q=F.length;ct<q;ct++){const it=F[ct],K=it.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;u.copy(K.mapSize);const xt=K.getFrameExtents();if(u.multiply(xt),f.copy(K.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/xt.x),u.x=f.x*xt.x,K.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/xt.y),u.y=f.y*xt.y,K.mapSize.y=f.y)),K.map===null||rt===!0||gt===!0){const Dt=this.type!==xa?{minFilter:li,magFilter:li}:{};K.map!==null&&K.map.dispose(),K.map=new kr(u.x,u.y,Dt),K.map.texture.name=it.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const yt=K.getViewportCount();for(let Dt=0;Dt<yt;Dt++){const ee=K.getViewport(Dt);h.set(f.x*ee.x,f.y*ee.y,f.x*ee.z,f.y*ee.w),lt.viewport(h),K.updateMatrices(it,Dt),s=K.getFrustum(),U(P,G,K.camera,it,this.type)}K.isPointLightShadow!==!0&&this.type===xa&&z(K,G),K.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(N,C,I)};function z(F,P){const G=e.update(w);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new kr(u.x,u.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,G,y,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,G,M,w,null)}function O(F,P,G,N){let C=null;const I=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)C=I;else if(C=G.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const lt=C.uuid,rt=P.uuid;let gt=_[lt];gt===void 0&&(gt={},_[lt]=gt);let ct=gt[rt];ct===void 0&&(ct=C.clone(),gt[rt]=ct,P.addEventListener("dispose",nt)),C=ct}if(C.visible=P.visible,C.wireframe=P.wireframe,N===xa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:g[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=G}return C}function U(F,P,G,N,C){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===xa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const rt=e.update(F),gt=F.material;if(Array.isArray(gt)){const ct=rt.groups;for(let q=0,it=ct.length;q<it;q++){const K=ct[q],xt=gt[K.materialIndex];if(xt&&xt.visible){const yt=O(F,xt,N,C);F.onBeforeShadow(o,F,P,G,rt,yt,K),o.renderBufferDirect(G,null,rt,yt,F,K),F.onAfterShadow(o,F,P,G,rt,yt,K)}}}else if(gt.visible){const ct=O(F,gt,N,C);F.onBeforeShadow(o,F,P,G,rt,ct,null),o.renderBufferDirect(G,null,rt,ct,F,null),F.onAfterShadow(o,F,P,G,rt,ct,null)}}const lt=F.children;for(let rt=0,gt=lt.length;rt<gt;rt++)U(lt[rt],P,G,N,C)}function nt(F){F.target.removeEventListener("dispose",nt);for(const G in _){const N=_[G],C=F.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const GR={[Bd]:Id,[Fd]:Vd,[Hd]:Xd,[$s]:Gd,[Id]:Bd,[Vd]:Fd,[Xd]:Hd,[Gd]:$s};function VR(o,e){function a(){let H=!1;const Ot=new Je;let ut=null;const _t=new Je(0,0,0,0);return{setMask:function(zt){ut!==zt&&!H&&(o.colorMask(zt,zt,zt,zt),ut=zt)},setLocked:function(zt){H=zt},setClear:function(zt,Ft,re,We,fn){fn===!0&&(zt*=We,Ft*=We,re*=We),Ot.set(zt,Ft,re,We),_t.equals(Ot)===!1&&(o.clearColor(zt,Ft,re,We),_t.copy(Ot))},reset:function(){H=!1,ut=null,_t.set(-1,0,0,0)}}}function s(){let H=!1,Ot=!1,ut=null,_t=null,zt=null;return{setReversed:function(Ft){if(Ot!==Ft){const re=e.get("EXT_clip_control");Ot?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const We=zt;zt=null,this.setClear(We)}Ot=Ft},getReversed:function(){return Ot},setTest:function(Ft){Ft?ot(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Ft){ut!==Ft&&!H&&(o.depthMask(Ft),ut=Ft)},setFunc:function(Ft){if(Ot&&(Ft=GR[Ft]),_t!==Ft){switch(Ft){case Bd:o.depthFunc(o.NEVER);break;case Id:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case $s:o.depthFunc(o.LEQUAL);break;case Hd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ft}},setLocked:function(Ft){H=Ft},setClear:function(Ft){zt!==Ft&&(Ot&&(Ft=1-Ft),o.clearDepth(Ft),zt=Ft)},reset:function(){H=!1,ut=null,_t=null,zt=null,Ot=!1}}}function u(){let H=!1,Ot=null,ut=null,_t=null,zt=null,Ft=null,re=null,We=null,fn=null;return{setTest:function(Ee){H||(Ee?ot(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ee){Ot!==Ee&&!H&&(o.stencilMask(Ee),Ot=Ee)},setFunc:function(Ee,Ye,hn){(ut!==Ee||_t!==Ye||zt!==hn)&&(o.stencilFunc(Ee,Ye,hn),ut=Ee,_t=Ye,zt=hn)},setOp:function(Ee,Ye,hn){(Ft!==Ee||re!==Ye||We!==hn)&&(o.stencilOp(Ee,Ye,hn),Ft=Ee,re=Ye,We=hn)},setLocked:function(Ee){H=Ee},setClear:function(Ee){fn!==Ee&&(o.clearStencil(Ee),fn=Ee)},reset:function(){H=!1,Ot=null,ut=null,_t=null,zt=null,Ft=null,re=null,We=null,fn=null}}}const f=new a,h=new s,d=new u,p=new WeakMap,_=new WeakMap;let v={},g={},y=new WeakMap,M=[],b=null,w=!1,S=null,x=null,z=null,O=null,U=null,nt=null,F=null,P=new Re(0,0,0),G=0,N=!1,C=null,I=null,lt=null,rt=null,gt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,it=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=it>=1):K.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=it>=2);let xt=null,yt={};const Dt=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),ge=new Je().fromArray(Dt),R=new Je().fromArray(ee);function k(H,Ot,ut,_t){const zt=new Uint8Array(4),Ft=o.createTexture();o.bindTexture(H,Ft),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let re=0;re<ut;re++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,zt):o.texImage2D(Ot+re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,zt);return Ft}const pt={};pt[o.TEXTURE_2D]=k(o.TEXTURE_2D,o.TEXTURE_2D,1),pt[o.TEXTURE_CUBE_MAP]=k(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[o.TEXTURE_2D_ARRAY]=k(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pt[o.TEXTURE_3D]=k(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ot(o.DEPTH_TEST),h.setFunc($s),Jt(!1),Kt(tv),ot(o.CULL_FACE),V(sr);function ot(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function Tt(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function Rt(H,Ot){return g[H]!==Ot?(o.bindFramebuffer(H,Ot),g[H]=Ot,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ot),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function It(H,Ot){let ut=M,_t=!1;if(H){ut=y.get(Ot),ut===void 0&&(ut=[],y.set(Ot,ut));const zt=H.textures;if(ut.length!==zt.length||ut[0]!==o.COLOR_ATTACHMENT0){for(let Ft=0,re=zt.length;Ft<re;Ft++)ut[Ft]=o.COLOR_ATTACHMENT0+Ft;ut.length=zt.length,_t=!0}}else ut[0]!==o.BACK&&(ut[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ut)}function Et(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const bt={[Fr]:o.FUNC_ADD,[qM]:o.FUNC_SUBTRACT,[YM]:o.FUNC_REVERSE_SUBTRACT};bt[WM]=o.MIN,bt[jM]=o.MAX;const be={[ZM]:o.ZERO,[KM]:o.ONE,[QM]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[iE]:o.SRC_ALPHA_SATURATE,[eE]:o.DST_COLOR,[$M]:o.DST_ALPHA,[JM]:o.ONE_MINUS_SRC_COLOR,[Pd]:o.ONE_MINUS_SRC_ALPHA,[nE]:o.ONE_MINUS_DST_COLOR,[tE]:o.ONE_MINUS_DST_ALPHA,[aE]:o.CONSTANT_COLOR,[rE]:o.ONE_MINUS_CONSTANT_COLOR,[sE]:o.CONSTANT_ALPHA,[oE]:o.ONE_MINUS_CONSTANT_ALPHA};function V(H,Ot,ut,_t,zt,Ft,re,We,fn,Ee){if(H===sr){w===!0&&(Tt(o.BLEND),w=!1);return}if(w===!1&&(ot(o.BLEND),w=!0),H!==kM){if(H!==S||Ee!==N){if((x!==Fr||U!==Fr)&&(o.blendEquation(o.FUNC_ADD),x=Fr,U=Fr),Ee)switch(H){case Ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ev:o.blendFunc(o.ONE,o.ONE);break;case nv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ev:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case nv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case iv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}z=null,O=null,nt=null,F=null,P.set(0,0,0),G=0,S=H,N=Ee}return}zt=zt||Ot,Ft=Ft||ut,re=re||_t,(Ot!==x||zt!==U)&&(o.blendEquationSeparate(bt[Ot],bt[zt]),x=Ot,U=zt),(ut!==z||_t!==O||Ft!==nt||re!==F)&&(o.blendFuncSeparate(be[ut],be[_t],be[Ft],be[re]),z=ut,O=_t,nt=Ft,F=re),(We.equals(P)===!1||fn!==G)&&(o.blendColor(We.r,We.g,We.b,fn),P.copy(We),G=fn),S=H,N=!1}function ve(H,Ot){H.side===ya?Tt(o.CULL_FACE):ot(o.CULL_FACE);let ut=H.side===Vn;Ot&&(ut=!ut),Jt(ut),H.blending===Ks&&H.transparent===!1?V(sr):V(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),f.setMask(H.colorWrite);const _t=H.stencilWrite;d.setTest(_t),_t&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),oe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function Kt(H){H!==GM?(ot(o.CULL_FACE),H!==I&&(H===tv?o.cullFace(o.BACK):H===VM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),I=H}function At(H){H!==lt&&(q&&o.lineWidth(H),lt=H)}function oe(H,Ot,ut){H?(ot(o.POLYGON_OFFSET_FILL),(rt!==Ot||gt!==ut)&&(o.polygonOffset(Ot,ut),rt=Ot,gt=ut)):Tt(o.POLYGON_OFFSET_FILL)}function kt(H){H?ot(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function D(H){H===void 0&&(H=o.TEXTURE0+ct-1),xt!==H&&(o.activeTexture(H),xt=H)}function T(H,Ot,ut){ut===void 0&&(xt===null?ut=o.TEXTURE0+ct-1:ut=xt);let _t=yt[ut];_t===void 0&&(_t={type:void 0,texture:void 0},yt[ut]=_t),(_t.type!==H||_t.texture!==Ot)&&(xt!==ut&&(o.activeTexture(ut),xt=ut),o.bindTexture(H,Ot||pt[H]),_t.type=H,_t.texture=Ot)}function $(){const H=yt[xt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function mt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(H){ge.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),ge.copy(H))}function Gt(H){R.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),R.copy(H))}function _e(H,Ot){let ut=_.get(Ot);ut===void 0&&(ut=new WeakMap,_.set(Ot,ut));let _t=ut.get(H);_t===void 0&&(_t=o.getUniformBlockIndex(Ot,H.name),ut.set(H,_t))}function le(H,Ot){const _t=_.get(Ot).get(H);p.get(Ot)!==_t&&(o.uniformBlockBinding(Ot,_t,H.__bindingPointIndex),p.set(Ot,_t))}function Ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},xt=null,yt={},g={},y=new WeakMap,M=[],b=null,w=!1,S=null,x=null,z=null,O=null,U=null,nt=null,F=null,P=new Re(0,0,0),G=0,N=!1,C=null,I=null,lt=null,rt=null,gt=null,ge.set(0,0,o.canvas.width,o.canvas.height),R.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ot,disable:Tt,bindFramebuffer:Rt,drawBuffers:It,useProgram:Et,setBlending:V,setMaterial:ve,setFlipSided:Jt,setCullFace:Kt,setLineWidth:At,setPolygonOffset:oe,setScissorTest:kt,activeTexture:D,bindTexture:T,unbindTexture:$,compressedTexImage2D:mt,compressedTexImage3D:vt,texImage2D:Vt,texImage3D:te,updateUBOMapping:_e,uniformBlockBinding:le,texStorage2D:he,texStorage3D:St,texSubImage2D:ht,texSubImage3D:qt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Nt,scissor:ie,viewport:Gt,reset:Ie}}function Qv(o,e,a,s){const u=XR(s);switch(a){case mx:return o*e;case _x:return o*e;case vx:return o*e*2;case Cp:return o*e/u.components*u.byteLength;case wp:return o*e/u.components*u.byteLength;case xx:return o*e*2/u.components*u.byteLength;case Dp:return o*e*2/u.components*u.byteLength;case gx:return o*e*3/u.components*u.byteLength;case Ni:return o*e*4/u.components*u.byteLength;case Up:return o*e*4/u.components*u.byteLength;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jd:case Kd:return Math.max(o,16)*Math.max(e,8)/4;case Wd:case Zd:return Math.max(o,8)*Math.max(e,8)/2;case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case np:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ip:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case op:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case lp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case vc:case pp:case mp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case yx:case gp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case _p:case vp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function XR(o){switch(o){case Ea:case hx:return{byteLength:1,components:1};case ml:case dx:case _l:return{byteLength:2,components:1};case Ap:case Rp:return{byteLength:2,components:4};case Xr:case bp:case ji:return{byteLength:4,components:1};case px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function kR(o,e,a,s,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Ce,v=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,T){return M?new OffscreenCanvas(D,T):Sc("canvas")}function w(D,T,$){let mt=1;const vt=kt(D);if((vt.width>$||vt.height>$)&&(mt=$/Math.max(vt.width,vt.height)),mt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ht=Math.floor(mt*vt.width),qt=Math.floor(mt*vt.height);g===void 0&&(g=b(ht,qt));const Ut=T?b(ht,qt):g;return Ut.width=ht,Ut.height=qt,Ut.getContext("2d").drawImage(D,0,0,ht,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ht+"x"+qt+")."),Ut}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function S(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,T,$,mt,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ht=T;if(T===o.RED&&($===o.FLOAT&&(ht=o.R32F),$===o.HALF_FLOAT&&(ht=o.R16F),$===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.R8UI),$===o.UNSIGNED_SHORT&&(ht=o.R16UI),$===o.UNSIGNED_INT&&(ht=o.R32UI),$===o.BYTE&&(ht=o.R8I),$===o.SHORT&&(ht=o.R16I),$===o.INT&&(ht=o.R32I)),T===o.RG&&($===o.FLOAT&&(ht=o.RG32F),$===o.HALF_FLOAT&&(ht=o.RG16F),$===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RG8UI),$===o.UNSIGNED_SHORT&&(ht=o.RG16UI),$===o.UNSIGNED_INT&&(ht=o.RG32UI),$===o.BYTE&&(ht=o.RG8I),$===o.SHORT&&(ht=o.RG16I),$===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),$===o.UNSIGNED_INT&&(ht=o.RGB32UI),$===o.BYTE&&(ht=o.RGB8I),$===o.SHORT&&(ht=o.RGB16I),$===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),$===o.UNSIGNED_INT&&(ht=o.RGBA32UI),$===o.BYTE&&(ht=o.RGBA8I),$===o.SHORT&&(ht=o.RGBA16I),$===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),T===o.RGBA){const qt=vt?Ec:De.getTransfer(mt);$===o.FLOAT&&(ht=o.RGBA32F),$===o.HALF_FLOAT&&(ht=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ht=qt===He?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function U(D,T){let $;return D?T===null||T===Xr||T===no?$=o.DEPTH24_STENCIL8:T===ji?$=o.DEPTH32F_STENCIL8:T===ml&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xr||T===no?$=o.DEPTH_COMPONENT24:T===ji?$=o.DEPTH_COMPONENT32F:T===ml&&($=o.DEPTH_COMPONENT16),$}function nt(D,T){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==li&&D.minFilter!==Wi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),G(T),T.isVideoTexture&&v.delete(T)}function P(D){const T=D.target;T.removeEventListener("dispose",P),C(T)}function G(D){const T=s.get(D);if(T.__webglInit===void 0)return;const $=D.source,mt=y.get($);if(mt){const vt=mt[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&N(D),Object.keys(mt).length===0&&y.delete($)}s.remove(D)}function N(D){const T=s.get(D);o.deleteTexture(T.__webglTexture);const $=D.source,mt=y.get($);delete mt[T.__cacheKey],h.memory.textures--}function C(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let vt=0;vt<T.__webglFramebuffer[mt].length;vt++)o.deleteFramebuffer(T.__webglFramebuffer[mt][vt]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=D.textures;for(let mt=0,vt=$.length;mt<vt;mt++){const ht=s.get($[mt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove($[mt])}s.remove(D)}let I=0;function lt(){I=0}function rt(){const D=I;return D>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+u.maxTextures),I+=1,D}function gt(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ct(D,T){const $=s.get(D);if(D.isVideoTexture&&At(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const mt=D.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R($,D,T);return}}a.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+T)}function q(D,T){const $=s.get(D);if(D.version>0&&$.__version!==D.version){R($,D,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+T)}function it(D,T){const $=s.get(D);if(D.version>0&&$.__version!==D.version){R($,D,T);return}a.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+T)}function K(D,T){const $=s.get(D);if(D.version>0&&$.__version!==D.version){k($,D,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+T)}const xt={[pl]:o.REPEAT,[Gr]:o.CLAMP_TO_EDGE,[Yd]:o.MIRRORED_REPEAT},yt={[li]:o.NEAREST,[gE]:o.NEAREST_MIPMAP_NEAREST,[Yu]:o.NEAREST_MIPMAP_LINEAR,[Wi]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[Vr]:o.LINEAR_MIPMAP_LINEAR},Dt={[yE]:o.NEVER,[AE]:o.ALWAYS,[SE]:o.LESS,[Mx]:o.LEQUAL,[ME]:o.EQUAL,[bE]:o.GEQUAL,[EE]:o.GREATER,[TE]:o.NOTEQUAL};function ee(D,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Wi||T.magFilter===ad||T.magFilter===Yu||T.magFilter===Vr||T.minFilter===Wi||T.minFilter===ad||T.minFilter===Yu||T.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,xt[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,xt[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,xt[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,Dt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==Yu&&T.minFilter!==Vr||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ge(D,T){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const mt=T.source;let vt=y.get(mt);vt===void 0&&(vt={},y.set(mt,vt));const ht=gt(T);if(ht!==D.__cacheKey){vt[ht]===void 0&&(vt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),vt[ht].usedTimes++;const qt=vt[D.__cacheKey];qt!==void 0&&(vt[D.__cacheKey].usedTimes--,qt.usedTimes===0&&N(T)),D.__cacheKey=ht,D.__webglTexture=vt[ht].texture}return $}function R(D,T,$){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const vt=ge(D,T),ht=T.source;a.bindTexture(mt,D.__webglTexture,o.TEXTURE0+$);const qt=s.get(ht);if(ht.version!==qt.__version||vt===!0){a.activeTexture(o.TEXTURE0+$);const Ut=De.getPrimaries(De.workingColorSpace),Nt=T.colorSpace===rr?null:De.getPrimaries(T.colorSpace),he=T.colorSpace===rr||Ut===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let St=w(T.image,!1,u.maxTextureSize);St=oe(T,St);const Vt=f.convert(T.format,T.colorSpace),te=f.convert(T.type);let ie=O(T.internalFormat,Vt,te,T.colorSpace,T.isVideoTexture);ee(mt,T);let Gt;const _e=T.mipmaps,le=T.isVideoTexture!==!0,Ie=qt.__version===void 0||vt===!0,H=ht.dataReady,Ot=nt(T,St);if(T.isDepthTexture)ie=U(T.format===io,T.type),Ie&&(le?a.texStorage2D(o.TEXTURE_2D,1,ie,St.width,St.height):a.texImage2D(o.TEXTURE_2D,0,ie,St.width,St.height,0,Vt,te,null));else if(T.isDataTexture)if(_e.length>0){le&&Ie&&a.texStorage2D(o.TEXTURE_2D,Ot,ie,_e[0].width,_e[0].height);for(let ut=0,_t=_e.length;ut<_t;ut++)Gt=_e[ut],le?H&&a.texSubImage2D(o.TEXTURE_2D,ut,0,0,Gt.width,Gt.height,Vt,te,Gt.data):a.texImage2D(o.TEXTURE_2D,ut,ie,Gt.width,Gt.height,0,Vt,te,Gt.data);T.generateMipmaps=!1}else le?(Ie&&a.texStorage2D(o.TEXTURE_2D,Ot,ie,St.width,St.height),H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,St.width,St.height,Vt,te,St.data)):a.texImage2D(o.TEXTURE_2D,0,ie,St.width,St.height,0,Vt,te,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){le&&Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,ie,_e[0].width,_e[0].height,St.depth);for(let ut=0,_t=_e.length;ut<_t;ut++)if(Gt=_e[ut],T.format!==Ni)if(Vt!==null)if(le){if(H)if(T.layerUpdates.size>0){const zt=Qv(Gt.width,Gt.height,T.format,T.type);for(const Ft of T.layerUpdates){const re=Gt.data.subarray(Ft*zt/Gt.data.BYTES_PER_ELEMENT,(Ft+1)*zt/Gt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,Ft,Gt.width,Gt.height,1,Vt,re)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Gt.width,Gt.height,St.depth,Vt,Gt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,ie,Gt.width,Gt.height,St.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?H&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Gt.width,Gt.height,St.depth,Vt,te,Gt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,ut,ie,Gt.width,Gt.height,St.depth,0,Vt,te,Gt.data)}else{le&&Ie&&a.texStorage2D(o.TEXTURE_2D,Ot,ie,_e[0].width,_e[0].height);for(let ut=0,_t=_e.length;ut<_t;ut++)Gt=_e[ut],T.format!==Ni?Vt!==null?le?H&&a.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,Gt.width,Gt.height,Vt,Gt.data):a.compressedTexImage2D(o.TEXTURE_2D,ut,ie,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?H&&a.texSubImage2D(o.TEXTURE_2D,ut,0,0,Gt.width,Gt.height,Vt,te,Gt.data):a.texImage2D(o.TEXTURE_2D,ut,ie,Gt.width,Gt.height,0,Vt,te,Gt.data)}else if(T.isDataArrayTexture)if(le){if(Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,ie,St.width,St.height,St.depth),H)if(T.layerUpdates.size>0){const ut=Qv(St.width,St.height,T.format,T.type);for(const _t of T.layerUpdates){const zt=St.data.subarray(_t*ut/St.data.BYTES_PER_ELEMENT,(_t+1)*ut/St.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Vt,te,zt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Vt,te,St.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,ie,St.width,St.height,St.depth,0,Vt,te,St.data);else if(T.isData3DTexture)le?(Ie&&a.texStorage3D(o.TEXTURE_3D,Ot,ie,St.width,St.height,St.depth),H&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Vt,te,St.data)):a.texImage3D(o.TEXTURE_3D,0,ie,St.width,St.height,St.depth,0,Vt,te,St.data);else if(T.isFramebufferTexture){if(Ie)if(le)a.texStorage2D(o.TEXTURE_2D,Ot,ie,St.width,St.height);else{let ut=St.width,_t=St.height;for(let zt=0;zt<Ot;zt++)a.texImage2D(o.TEXTURE_2D,zt,ie,ut,_t,0,Vt,te,null),ut>>=1,_t>>=1}}else if(_e.length>0){if(le&&Ie){const ut=kt(_e[0]);a.texStorage2D(o.TEXTURE_2D,Ot,ie,ut.width,ut.height)}for(let ut=0,_t=_e.length;ut<_t;ut++)Gt=_e[ut],le?H&&a.texSubImage2D(o.TEXTURE_2D,ut,0,0,Vt,te,Gt):a.texImage2D(o.TEXTURE_2D,ut,ie,Vt,te,Gt);T.generateMipmaps=!1}else if(le){if(Ie){const ut=kt(St);a.texStorage2D(o.TEXTURE_2D,Ot,ie,ut.width,ut.height)}H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,te,St)}else a.texImage2D(o.TEXTURE_2D,0,ie,Vt,te,St);S(T)&&x(mt),qt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function k(D,T,$){if(T.image.length!==6)return;const mt=ge(D,T),vt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+$);const ht=s.get(vt);if(vt.version!==ht.__version||mt===!0){a.activeTexture(o.TEXTURE0+$);const qt=De.getPrimaries(De.workingColorSpace),Ut=T.colorSpace===rr?null:De.getPrimaries(T.colorSpace),Nt=T.colorSpace===rr||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const he=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Vt=[];for(let _t=0;_t<6;_t++)!he&&!St?Vt[_t]=w(T.image[_t],!0,u.maxCubemapSize):Vt[_t]=St?T.image[_t].image:T.image[_t],Vt[_t]=oe(T,Vt[_t]);const te=Vt[0],ie=f.convert(T.format,T.colorSpace),Gt=f.convert(T.type),_e=O(T.internalFormat,ie,Gt,T.colorSpace),le=T.isVideoTexture!==!0,Ie=ht.__version===void 0||mt===!0,H=vt.dataReady;let Ot=nt(T,te);ee(o.TEXTURE_CUBE_MAP,T);let ut;if(he){le&&Ie&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,_e,te.width,te.height);for(let _t=0;_t<6;_t++){ut=Vt[_t].mipmaps;for(let zt=0;zt<ut.length;zt++){const Ft=ut[zt];T.format!==Ni?ie!==null?le?H&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Ft.width,Ft.height,ie,Ft.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,_e,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Ft.width,Ft.height,ie,Gt,Ft.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,_e,Ft.width,Ft.height,0,ie,Gt,Ft.data)}}}else{if(ut=T.mipmaps,le&&Ie){ut.length>0&&Ot++;const _t=kt(Vt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,_e,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){le?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt[_t].width,Vt[_t].height,ie,Gt,Vt[_t].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,_e,Vt[_t].width,Vt[_t].height,0,ie,Gt,Vt[_t].data);for(let zt=0;zt<ut.length;zt++){const re=ut[zt].image[_t].image;le?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,re.width,re.height,ie,Gt,re.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,_e,re.width,re.height,0,ie,Gt,re.data)}}else{le?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ie,Gt,Vt[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,_e,ie,Gt,Vt[_t]);for(let zt=0;zt<ut.length;zt++){const Ft=ut[zt];le?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,ie,Gt,Ft.image[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,_e,ie,Gt,Ft.image[_t])}}}S(T)&&x(o.TEXTURE_CUBE_MAP),ht.__version=vt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function pt(D,T,$,mt,vt,ht){const qt=f.convert($.format,$.colorSpace),Ut=f.convert($.type),Nt=O($.internalFormat,qt,Ut,$.colorSpace),he=s.get(T),St=s.get($);if(St.__renderTarget=T,!he.__hasExternalTextures){const Vt=Math.max(1,T.width>>ht),te=Math.max(1,T.height>>ht);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?a.texImage3D(vt,ht,Nt,Vt,te,T.depth,0,qt,Ut,null):a.texImage2D(vt,ht,Nt,Vt,te,0,qt,Ut,null)}a.bindFramebuffer(o.FRAMEBUFFER,D),Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,vt,St.__webglTexture,0,Jt(T)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,vt,St.__webglTexture,ht),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ot(D,T,$){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const mt=T.depthTexture,vt=mt&&mt.isDepthTexture?mt.type:null,ht=U(T.stencilBuffer,vt),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Jt(T);Kt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ht,T.width,T.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,D)}else{const mt=T.textures;for(let vt=0;vt<mt.length;vt++){const ht=mt[vt],qt=f.convert(ht.format,ht.colorSpace),Ut=f.convert(ht.type),Nt=O(ht.internalFormat,qt,Ut,ht.colorSpace),he=Jt(T);$&&Kt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,he,Nt,T.width,T.height):Kt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,he,Nt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ct(T.depthTexture,0);const vt=mt.__webglTexture,ht=Jt(T);if(T.depthTexture.format===Qs)Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(T.depthTexture.format===io)Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Rt(D){const T=s.get(D),$=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const mt=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",vt)};mt.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=mt}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Tt(T.__webglFramebuffer,D)}else if($){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),ot(T.__webglDepthbuffer[mt],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ht)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ot(T.__webglDepthbuffer,D,!1);else{const mt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,vt)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function It(D,T,$){const mt=s.get(D);T!==void 0&&pt(mt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Rt(D)}function Et(D){const T=D.texture,$=s.get(D),mt=s.get(T);D.addEventListener("dispose",P);const vt=D.textures,ht=D.isWebGLCubeRenderTarget===!0,qt=vt.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,h.memory.textures++),ht){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)$.__webglFramebuffer[Ut][Nt]=o.createFramebuffer()}else $.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,Nt=vt.length;Ut<Nt;Ut++){const he=s.get(vt[Ut]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Kt(D)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Nt=vt[Ut];$.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const he=f.convert(Nt.format,Nt.colorSpace),St=f.convert(Nt.type),Vt=O(Nt.internalFormat,he,St,Nt.colorSpace,D.isXRRenderTarget===!0),te=Jt(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Vt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ot($.__webglDepthRenderbuffer,D,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){a.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),ee(o.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)pt($.__webglFramebuffer[Ut][Nt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Nt);else pt($.__webglFramebuffer[Ut],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(qt){for(let Ut=0,Nt=vt.length;Ut<Nt;Ut++){const he=vt[Ut],St=s.get(he);a.bindTexture(o.TEXTURE_2D,St.__webglTexture),ee(o.TEXTURE_2D,he),pt($.__webglFramebuffer,D,he,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),S(he)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ut,mt.__webglTexture),ee(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)pt($.__webglFramebuffer[Nt],D,T,o.COLOR_ATTACHMENT0,Ut,Nt);else pt($.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,Ut,0);S(T)&&x(Ut),a.unbindTexture()}D.depthBuffer&&Rt(D)}function bt(D){const T=D.textures;for(let $=0,mt=T.length;$<mt;$++){const vt=T[$];if(S(vt)){const ht=z(D),qt=s.get(vt).__webglTexture;a.bindTexture(ht,qt),x(ht),a.unbindTexture()}}}const be=[],V=[];function ve(D){if(D.samples>0){if(Kt(D)===!1){const T=D.textures,$=D.width,mt=D.height;let vt=o.COLOR_BUFFER_BIT;const ht=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(D),Ut=T.length>1;if(Ut)for(let Nt=0;Nt<T.length;Nt++)a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Nt=0;Nt<T.length;Nt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Nt]);const he=s.get(T[Nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,he,0)}o.blitFramebuffer(0,0,$,mt,0,0,$,mt,vt,o.NEAREST),p===!0&&(be.length=0,V.length=0,be.push(o.COLOR_ATTACHMENT0+Nt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(be.push(ht),V.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,be))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Nt=0;Nt<T.length;Nt++){a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Nt]);const he=s.get(T[Nt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,he,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Jt(D){return Math.min(u.maxSamples,D.samples)}function Kt(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function At(D){const T=h.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function oe(D,T){const $=D.colorSpace,mt=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==ro&&$!==rr&&(De.getTransfer($)===He?(mt!==Ni||vt!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function kt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(_.width=D.naturalWidth||D.width,_.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(_.width=D.displayWidth,_.height=D.displayHeight):(_.width=D.width,_.height=D.height),_}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=ct,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=K,this.rebindTextures=It,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Kt}function qR(o,e){function a(s,u=rr){let f;const h=De.getTransfer(u);if(s===Ea)return o.UNSIGNED_BYTE;if(s===Ap)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Rp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===px)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===hx)return o.BYTE;if(s===dx)return o.SHORT;if(s===ml)return o.UNSIGNED_SHORT;if(s===bp)return o.INT;if(s===Xr)return o.UNSIGNED_INT;if(s===ji)return o.FLOAT;if(s===_l)return o.HALF_FLOAT;if(s===mx)return o.ALPHA;if(s===gx)return o.RGB;if(s===Ni)return o.RGBA;if(s===_x)return o.LUMINANCE;if(s===vx)return o.LUMINANCE_ALPHA;if(s===Qs)return o.DEPTH_COMPONENT;if(s===io)return o.DEPTH_STENCIL;if(s===Cp)return o.RED;if(s===wp)return o.RED_INTEGER;if(s===xx)return o.RG;if(s===Dp)return o.RG_INTEGER;if(s===Up)return o.RGBA_INTEGER;if(s===pc||s===mc||s===gc||s===_c)if(h===He)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===pc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_c)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===pc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_c)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wd||s===jd||s===Zd||s===Kd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Wd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qd||s===Jd||s===$d)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Qd||s===Jd)return h===He?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===$d)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===hp||s===dp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===tp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ep)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===np)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ip)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ap)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===op)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===up)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return h===He?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vc||s===pp||s===mp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===vc)return h===He?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yx||s===gp||s===_p||s===vp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===vc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===gp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_p)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===no?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}class YR extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WR={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,h=null;const d=this._targetRay,p=this._grip,_=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(_&&e.hand){h=!0;for(const w of e.hand.values()){const S=a.getJointPose(w,s),x=this._getHandJoint(_,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=_.joints["index-finger-tip"],g=_.joints["thumb-tip"],y=v.position.distanceTo(g.position),M=.02,b=.005;_.inputState.pinching&&y>M+b?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&y<=M-b&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(WR)))}return d!==null&&(d.visible=u!==null),p!==null&&(p.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new fl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}const jR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a,s){if(this.texture===null){const u=new Ln,f=e.properties.get(u);f.__webglTexture=a.texture,(a.depthNear!=s.depthNear||a.depthFar!=s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=u}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new Ki({vertexShader:jR,fragmentShader:ZR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new En(new Ml(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QR extends so{constructor(e,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",p=1,_=null,v=null,g=null,y=null,M=null,b=null;const w=new KR,S=a.getContextAttributes();let x=null,z=null;const O=[],U=[],nt=new Ce;let F=null;const P=new Si;P.viewport=new Je;const G=new Si;G.viewport=new Je;const N=[P,G],C=new YR;let I=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let k=O[R];return k===void 0&&(k=new Ud,O[R]=k),k.getTargetRaySpace()},this.getControllerGrip=function(R){let k=O[R];return k===void 0&&(k=new Ud,O[R]=k),k.getGripSpace()},this.getHand=function(R){let k=O[R];return k===void 0&&(k=new Ud,O[R]=k),k.getHandSpace()};function rt(R){const k=U.indexOf(R.inputSource);if(k===-1)return;const pt=O[k];pt!==void 0&&(pt.update(R.inputSource,R.frame,_||h),pt.dispatchEvent({type:R.type,data:R.inputSource}))}function gt(){u.removeEventListener("select",rt),u.removeEventListener("selectstart",rt),u.removeEventListener("selectend",rt),u.removeEventListener("squeeze",rt),u.removeEventListener("squeezestart",rt),u.removeEventListener("squeezeend",rt),u.removeEventListener("end",gt),u.removeEventListener("inputsourceschange",ct);for(let R=0;R<O.length;R++){const k=U[R];k!==null&&(U[R]=null,O[R].disconnect(k))}I=null,lt=null,w.reset(),e.setRenderTarget(x),M=null,y=null,g=null,u=null,z=null,ge.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(nt.width,nt.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){f=R,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){d=R,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function(R){_=R},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(R){if(u=R,u!==null){if(x=e.getRenderTarget(),u.addEventListener("select",rt),u.addEventListener("selectstart",rt),u.addEventListener("selectend",rt),u.addEventListener("squeeze",rt),u.addEventListener("squeezestart",rt),u.addEventListener("squeezeend",rt),u.addEventListener("end",gt),u.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await a.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(nt),u.renderState.layers===void 0){const k={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,k),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new kr(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Ea,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let k=null,pt=null,ot=null;S.depth&&(ot=S.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,k=S.stencil?io:Qs,pt=S.stencil?no:Xr);const Tt={colorFormat:a.RGBA8,depthFormat:ot,scaleFactor:f};g=new XRWebGLBinding(u,a),y=g.createProjectionLayer(Tt),u.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new kr(y.textureWidth,y.textureHeight,{format:Ni,type:Ea,depthTexture:new zx(y.textureWidth,y.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),_=null,h=await u.requestReferenceSpace(d),ge.setContext(u),ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ct(R){for(let k=0;k<R.removed.length;k++){const pt=R.removed[k],ot=U.indexOf(pt);ot>=0&&(U[ot]=null,O[ot].disconnect(pt))}for(let k=0;k<R.added.length;k++){const pt=R.added[k];let ot=U.indexOf(pt);if(ot===-1){for(let Rt=0;Rt<O.length;Rt++)if(Rt>=U.length){U.push(pt),ot=Rt;break}else if(U[Rt]===null){U[Rt]=pt,ot=Rt;break}if(ot===-1)break}const Tt=O[ot];Tt&&Tt.connect(pt)}}const q=new Q,it=new Q;function K(R,k,pt){q.setFromMatrixPosition(k.matrixWorld),it.setFromMatrixPosition(pt.matrixWorld);const ot=q.distanceTo(it),Tt=k.projectionMatrix.elements,Rt=pt.projectionMatrix.elements,It=Tt[14]/(Tt[10]-1),Et=Tt[14]/(Tt[10]+1),bt=(Tt[9]+1)/Tt[5],be=(Tt[9]-1)/Tt[5],V=(Tt[8]-1)/Tt[0],ve=(Rt[8]+1)/Rt[0],Jt=It*V,Kt=It*ve,At=ot/(-V+ve),oe=At*-V;if(k.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(oe),R.translateZ(At),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),Tt[10]===-1)R.projectionMatrix.copy(k.projectionMatrix),R.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const kt=It+At,D=Et+At,T=Jt-oe,$=Kt+(ot-oe),mt=bt*Et/D*kt,vt=be*Et/D*kt;R.projectionMatrix.makePerspective(T,$,mt,vt,kt,D),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function xt(R,k){k===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(k.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(u===null)return;let k=R.near,pt=R.far;w.texture!==null&&(w.depthNear>0&&(k=w.depthNear),w.depthFar>0&&(pt=w.depthFar)),C.near=G.near=P.near=k,C.far=G.far=P.far=pt,(I!==C.near||lt!==C.far)&&(u.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,lt=C.far),P.layers.mask=R.layers.mask|2,G.layers.mask=R.layers.mask|4,C.layers.mask=P.layers.mask|G.layers.mask;const ot=R.parent,Tt=C.cameras;xt(C,ot);for(let Rt=0;Rt<Tt.length;Rt++)xt(Tt[Rt],ot);Tt.length===2?K(C,P,G):C.projectionMatrix.copy(P.projectionMatrix),yt(R,C,ot)};function yt(R,k,pt){pt===null?R.matrix.copy(k.matrixWorld):(R.matrix.copy(pt.matrixWorld),R.matrix.invert(),R.matrix.multiply(k.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(k.projectionMatrix),R.projectionMatrixInverse.copy(k.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=gl*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(R){p=R,y!==null&&(y.fixedFoveation=R),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=R)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let Dt=null;function ee(R,k){if(v=k.getViewerPose(_||h),b=k,v!==null){const pt=v.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let ot=!1;pt.length!==C.cameras.length&&(C.cameras.length=0,ot=!0);for(let Rt=0;Rt<pt.length;Rt++){const It=pt[Rt];let Et=null;if(M!==null)Et=M.getViewport(It);else{const be=g.getViewSubImage(y,It);Et=be.viewport,Rt===0&&(e.setRenderTargetTextures(z,be.colorTexture,y.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(z))}let bt=N[Rt];bt===void 0&&(bt=new Si,bt.layers.enable(Rt),bt.viewport=new Je,N[Rt]=bt),bt.matrix.fromArray(It.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(It.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Et.x,Et.y,Et.width,Et.height),Rt===0&&(C.matrix.copy(bt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ot===!0&&C.cameras.push(bt)}const Tt=u.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Rt=g.getDepthInformation(pt[0]);Rt&&Rt.isValid&&Rt.texture&&w.init(e,Rt,u.renderState)}}for(let pt=0;pt<O.length;pt++){const ot=U[pt],Tt=O[pt];ot!==null&&Tt!==void 0&&Tt.update(ot,k,_||h)}Dt&&Dt(R,k),k.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:k}),b=null}const ge=new Lx;ge.setAnimationLoop(ee),this.setAnimationLoop=function(R){Dt=R},this.dispose=function(){}}}const Pr=new Zi,JR=new qe;function $R(o,e){function a(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,Dx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function u(S,x,z,O,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),g(S,x)):x.isMeshPhongMaterial?(f(S,x),v(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,U)):x.isMeshMatcapMaterial?(f(S,x),b(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),w(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?p(S,x,z,O):x.isSpriteMaterial?_(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,a(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Vn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,a(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Vn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,a(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,a(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const z=e.get(x),O=z.envMap,U=z.envMapRotation;O&&(S.envMap.value=O,Pr.copy(U),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),S.envMapRotation.value.setFromMatrix4(JR.makeRotationFromEuler(Pr)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,z,O){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*z,S.scale.value=O*.5,x.map&&(S.map.value=x.map,a(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,z){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const z=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function t2(o,e,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,O){const U=O.program;s.uniformBlockBinding(z,U)}function _(z,O){let U=u[z.id];U===void 0&&(b(z),U=v(z),u[z.id]=U,z.addEventListener("dispose",S));const nt=O.program;s.updateUBOMapping(z,nt);const F=e.render.frame;f[z.id]!==F&&(y(z),f[z.id]=F)}function v(z){const O=g();z.__bindingPointIndex=O;const U=o.createBuffer(),nt=z.__size,F=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,nt,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function g(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const O=u[z.id],U=z.uniforms,nt=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let F=0,P=U.length;F<P;F++){const G=Array.isArray(U[F])?U[F]:[U[F]];for(let N=0,C=G.length;N<C;N++){const I=G[N];if(M(I,F,N,nt)===!0){const lt=I.__offset,rt=Array.isArray(I.value)?I.value:[I.value];let gt=0;for(let ct=0;ct<rt.length;ct++){const q=rt[ct],it=w(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,gt),gt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,O,U,nt){const F=z.value,P=O+"_"+U;if(nt[P]===void 0)return typeof F=="number"||typeof F=="boolean"?nt[P]=F:nt[P]=F.clone(),!0;{const G=nt[P];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return nt[P]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function b(z){const O=z.uniforms;let U=0;const nt=16;for(let P=0,G=O.length;P<G;P++){const N=Array.isArray(O[P])?O[P]:[O[P]];for(let C=0,I=N.length;C<I;C++){const lt=N[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,ct=rt.length;gt<ct;gt++){const q=rt[gt],it=w(q),K=U%nt,xt=K%it.boundary,yt=K+xt;U+=xt,yt!==0&&nt-yt<it.storage&&(U+=nt-yt),lt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=U,U+=it.storage}}}const F=U%nt;return F>0&&(U+=nt-F),z.__size=U,z.__cache={},this}function w(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function S(z){const O=z.target;O.removeEventListener("dispose",S);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(u[O.id]),delete u[O.id],delete f[O.id]}function x(){for(const z in u)o.deleteBuffer(u[z]);h=[],u={},f={}}return{bind:p,update:_,dispose:x}}class e2{constructor(e={}){const{canvas:a=XE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),w=new Int32Array(4);let S=null,x=null;const z=[],O=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=or,this.toneMappingExposure=1;const U=this;let nt=!1,F=0,P=0,G=null,N=-1,C=null;const I=new Je,lt=new Je;let rt=null;const gt=new Re(0);let ct=0,q=a.width,it=a.height,K=1,xt=null,yt=null;const Dt=new Je(0,0,q,it),ee=new Je(0,0,q,it);let ge=!1;const R=new zp;let k=!1,pt=!1;const ot=new qe,Tt=new qe,Rt=new Q,It=new Je,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function be(){return G===null?K:1}let V=s;function ve(A,j){return a.getContext(A,j)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Tp}`),a.addEventListener("webglcontextlost",_t,!1),a.addEventListener("webglcontextrestored",zt,!1),a.addEventListener("webglcontextcreationerror",Ft,!1),V===null){const j="webgl2";if(V=ve(j,A),V===null)throw ve(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Jt,Kt,At,oe,kt,D,T,$,mt,vt,ht,qt,Ut,Nt,he,St,Vt,te,ie,Gt,_e,le,Ie,H;function Ot(){Jt=new sA(V),Jt.init(),le=new qR(V,Jt),Kt=new tA(V,Jt,e,le),At=new VR(V,Jt),Kt.reverseDepthBuffer&&y&&At.buffers.depth.setReversed(!0),oe=new uA(V),kt=new RR,D=new kR(V,Jt,At,kt,Kt,le,oe),T=new nA(U),$=new rA(U),mt=new gT(V),Ie=new Jb(V,mt),vt=new oA(V,mt,oe,Ie),ht=new fA(V,vt,mt,oe),ie=new cA(V,Kt,D),St=new eA(kt),qt=new AR(U,T,$,Jt,Kt,Ie,St),Ut=new $R(U,kt),Nt=new wR,he=new zR(Jt),te=new Qb(U,T,$,At,ht,M,p),Vt=new HR(U,ht,Kt),H=new t2(V,oe,Kt,At),Gt=new $b(V,Jt,oe),_e=new lA(V,Jt,oe),oe.programs=qt.programs,U.capabilities=Kt,U.extensions=Jt,U.properties=kt,U.renderLists=Nt,U.shadowMap=Vt,U.state=At,U.info=oe}Ot();const ut=new QR(U,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(q,it,!1))},this.getSize=function(A){return A.set(q,it)},this.setSize=function(A,j,at=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,it=j,a.width=Math.floor(A*K),a.height=Math.floor(j*K),at===!0&&(a.style.width=A+"px",a.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(q*K,it*K).floor()},this.setDrawingBufferSize=function(A,j,at){q=A,it=j,K=at,a.width=Math.floor(A*at),a.height=Math.floor(j*at),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Dt)},this.setViewport=function(A,j,at,st){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,j,at,st),At.viewport(I.copy(Dt).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,j,at,st){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,j,at,st),At.scissor(lt.copy(ee).multiplyScalar(K).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){At.setScissorTest(ge=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,j=!0,at=!0){let st=0;if(A){let Z=!1;if(G!==null){const Mt=G.texture.format;Z=Mt===Up||Mt===Dp||Mt===wp}if(Z){const Mt=G.texture.type,Pt=Mt===Ea||Mt===Xr||Mt===ml||Mt===no||Mt===Ap||Mt===Rp,Wt=te.getClearColor(),jt=te.getClearAlpha(),$t=Wt.r,Zt=Wt.g,Bt=Wt.b;Pt?(b[0]=$t,b[1]=Zt,b[2]=Bt,b[3]=jt,V.clearBufferuiv(V.COLOR,0,b)):(w[0]=$t,w[1]=Zt,w[2]=Bt,w[3]=jt,V.clearBufferiv(V.COLOR,0,w))}else st|=V.COLOR_BUFFER_BIT}j&&(st|=V.DEPTH_BUFFER_BIT),at&&(st|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",_t,!1),a.removeEventListener("webglcontextrestored",zt,!1),a.removeEventListener("webglcontextcreationerror",Ft,!1),Nt.dispose(),he.dispose(),kt.dispose(),T.dispose(),$.dispose(),ht.dispose(),Ie.dispose(),H.dispose(),qt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",bn),ut.removeEventListener("sessionend",El),Qi.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),nt=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),nt=!1;const A=oe.autoReset,j=Vt.enabled,at=Vt.autoUpdate,st=Vt.needsUpdate,Z=Vt.type;Ot(),oe.autoReset=A,Vt.enabled=j,Vt.autoUpdate=at,Vt.needsUpdate=st,Vt.type=Z}function Ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const j=A.target;j.removeEventListener("dispose",re),We(j)}function We(A){fn(A),kt.remove(A)}function fn(A){const j=kt.get(A).programs;j!==void 0&&(j.forEach(function(at){qt.releaseProgram(at)}),A.isShaderMaterial&&qt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,at,st,Z,Mt){j===null&&(j=Et);const Pt=Z.isMesh&&Z.matrixWorld.determinant()<0,Wt=Ac(A,j,at,st,Z);At.setMaterial(st,Pt);let jt=at.index,$t=1;if(st.wireframe===!0){if(jt=vt.getWireframeAttribute(at),jt===void 0)return;$t=2}const Zt=at.drawRange,Bt=at.attributes.position;let pe=Zt.start*$t,Oe=(Zt.start+Zt.count)*$t;Mt!==null&&(pe=Math.max(pe,Mt.start*$t),Oe=Math.min(Oe,(Mt.start+Mt.count)*$t)),jt!==null?(pe=Math.max(pe,0),Oe=Math.min(Oe,jt.count)):Bt!=null&&(pe=Math.max(pe,0),Oe=Math.min(Oe,Bt.count));const Ge=Oe-pe;if(Ge<0||Ge===1/0)return;Ie.setup(Z,st,Wt,at,jt);let An,we=Gt;if(jt!==null&&(An=mt.get(jt),we=_e,we.setIndex(An)),Z.isMesh)st.wireframe===!0?(At.setLineWidth(st.wireframeLinewidth*be()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if(Z.isLine){let Yt=st.linewidth;Yt===void 0&&(Yt=1),At.setLineWidth(Yt*be()),Z.isLineSegments?we.setMode(V.LINES):Z.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else Z.isPoints?we.setMode(V.POINTS):Z.isSprite&&we.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)we.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))we.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Yt=Z._multiDrawStarts,Xn=Z._multiDrawCounts,Te=Z._multiDrawCount,sn=jt?mt.get(jt).bytesPerElement:1,Zn=kt.get(st).currentProgram.getUniforms();for(let on=0;on<Te;on++)Zn.setValue(V,"_gl_DrawID",on),we.render(Yt[on]/sn,Xn[on])}else if(Z.isInstancedMesh)we.renderInstances(pe,Ge,Z.count);else if(at.isInstancedBufferGeometry){const Yt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xn=Math.min(at.instanceCount,Yt);we.renderInstances(pe,Ge,Xn)}else we.render(pe,Ge)};function Ee(A,j,at){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,$i(A,j,at),A.side=lr,A.needsUpdate=!0,$i(A,j,at),A.side=ya):$i(A,j,at)}this.compile=function(A,j,at=null){at===null&&(at=A),x=he.get(at),x.init(j),O.push(x),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),A!==at&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const st=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Mt=Z.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){const Wt=Mt[Pt];Ee(Wt,at,Z),st.add(Wt)}else Ee(Mt,at,Z),st.add(Mt)}),O.pop(),x=null,st},this.compileAsync=function(A,j,at=null){const st=this.compile(A,j,at);return new Promise(Z=>{function Mt(){if(st.forEach(function(Pt){kt.get(Pt).currentProgram.isReady()&&st.delete(Pt)}),st.size===0){Z(A);return}setTimeout(Mt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ye=null;function hn(A){Ye&&Ye(A)}function bn(){Qi.stop()}function El(){Qi.start()}const Qi=new Lx;Qi.setAnimationLoop(hn),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(A){Ye=A,ut.setAnimationLoop(A),A===null?Qi.stop():Qi.start()},ut.addEventListener("sessionstart",bn),ut.addEventListener("sessionend",El),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(nt===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,j,G),x=he.get(A,O.length),x.init(j),O.push(x),Tt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),R.setFromProjectionMatrix(Tt),pt=this.localClippingEnabled,k=St.init(this.clippingPlanes,pt),S=Nt.get(A,z.length),S.init(),z.push(S),ut.enabled===!0&&ut.isPresenting===!0){const Mt=U.xr.getDepthSensingMesh();Mt!==null&&uo(Mt,j,-1/0,U.sortObjects)}uo(A,j,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(xt,yt),bt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,bt&&te.addToRenderList(S,A),this.info.render.frame++,k===!0&&St.beginShadows();const at=x.state.shadowsArray;Vt.render(at,A,j),k===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Z=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Mt=j.cameras;if(Z.length>0)for(let Pt=0,Wt=Mt.length;Pt<Wt;Pt++){const jt=Mt[Pt];cr(st,Z,A,jt)}bt&&te.render(A);for(let Pt=0,Wt=Mt.length;Pt<Wt;Pt++){const jt=Mt[Pt];ur(S,A,jt,jt.viewport)}}else Z.length>0&&cr(st,Z,A,j),bt&&te.render(A),ur(S,A,j);G!==null&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(U,A,j),Ie.resetDefaultState(),N=-1,C=null,O.pop(),O.length>0?(x=O[O.length-1],k===!0&&St.setGlobalState(U.clippingPlanes,x.state.camera)):x=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function uo(A,j,at,st){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||R.intersectsSprite(A)){st&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);const Pt=ht.update(A),Wt=A.material;Wt.visible&&S.push(A,Pt,Wt,at,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||R.intersectsObject(A))){const Pt=ht.update(A),Wt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),It.copy(Pt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(Wt)){const jt=Pt.groups;for(let $t=0,Zt=jt.length;$t<Zt;$t++){const Bt=jt[$t],pe=Wt[Bt.materialIndex];pe&&pe.visible&&S.push(A,Pt,pe,at,It.z,Bt)}}else Wt.visible&&S.push(A,Pt,Wt,at,It.z,null)}}const Mt=A.children;for(let Pt=0,Wt=Mt.length;Pt<Wt;Pt++)uo(Mt[Pt],j,at,st)}function ur(A,j,at,st){const Z=A.opaque,Mt=A.transmissive,Pt=A.transparent;x.setupLightsView(at),k===!0&&St.setGlobalState(U.clippingPlanes,at),st&&At.viewport(I.copy(st)),Z.length>0&&Ji(Z,j,at),Mt.length>0&&Ji(Mt,j,at),Pt.length>0&&Ji(Pt,j,at),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function cr(A,j,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new kr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?_l:Ea,minFilter:Vr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Mt=x.state.transmissionRenderTarget[st.id],Pt=st.viewport||I;Mt.setSize(Pt.z,Pt.w);const Wt=U.getRenderTarget();U.setRenderTarget(Mt),U.getClearColor(gt),ct=U.getClearAlpha(),ct<1&&U.setClearColor(16777215,.5),U.clear(),bt&&te.render(at);const jt=U.toneMapping;U.toneMapping=or;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),k===!0&&St.setGlobalState(U.clippingPlanes,st),Ji(A,at,st),D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Bt=0,pe=j.length;Bt<pe;Bt++){const Oe=j[Bt],Ge=Oe.object,An=Oe.geometry,we=Oe.material,Yt=Oe.group;if(we.side===ya&&Ge.layers.test(st.layers)){const Xn=we.side;we.side=Vn,we.needsUpdate=!0,Oi(Ge,at,st,An,we,Yt),we.side=Xn,we.needsUpdate=!0,Zt=!0}}Zt===!0&&(D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt))}U.setRenderTarget(Wt),U.setClearColor(gt,ct),$t!==void 0&&(st.viewport=$t),U.toneMapping=jt}function Ji(A,j,at){const st=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Mt=A.length;Z<Mt;Z++){const Pt=A[Z],Wt=Pt.object,jt=Pt.geometry,$t=st===null?Pt.material:st,Zt=Pt.group;Wt.layers.test(at.layers)&&Oi(Wt,j,at,jt,$t,Zt)}}function Oi(A,j,at,st,Z,Mt){A.onBeforeRender(U,j,at,st,Z,Mt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(U,j,at,st,A,Mt),Z.transparent===!0&&Z.side===ya&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,U.renderBufferDirect(at,j,st,Z,A,Mt),Z.side=lr,Z.needsUpdate=!0,U.renderBufferDirect(at,j,st,Z,A,Mt),Z.side=ya):U.renderBufferDirect(at,j,st,Z,A,Mt),A.onAfterRender(U,j,at,st,Z,Mt)}function $i(A,j,at){j.isScene!==!0&&(j=Et);const st=kt.get(A),Z=x.state.lights,Mt=x.state.shadowsArray,Pt=Z.state.version,Wt=qt.getParameters(A,Z.state,Mt,j,at),jt=qt.getProgramCacheKey(Wt);let $t=st.programs;st.environment=A.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(A.isMeshStandardMaterial?$:T).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",re),$t=new Map,st.programs=$t);let Zt=$t.get(jt);if(Zt!==void 0){if(st.currentProgram===Zt&&st.lightsStateVersion===Pt)return co(A,Wt),Zt}else Wt.uniforms=qt.getUniforms(A),A.onBeforeCompile(Wt,U),Zt=qt.acquireProgram(Wt,jt),$t.set(jt,Zt),st.uniforms=Wt.uniforms;const Bt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=St.uniform),co(A,Wt),st.needsLights=fo(A),st.lightsStateVersion=Pt,st.needsLights&&(Bt.ambientLightColor.value=Z.state.ambient,Bt.lightProbe.value=Z.state.probe,Bt.directionalLights.value=Z.state.directional,Bt.directionalLightShadows.value=Z.state.directionalShadow,Bt.spotLights.value=Z.state.spot,Bt.spotLightShadows.value=Z.state.spotShadow,Bt.rectAreaLights.value=Z.state.rectArea,Bt.ltc_1.value=Z.state.rectAreaLTC1,Bt.ltc_2.value=Z.state.rectAreaLTC2,Bt.pointLights.value=Z.state.point,Bt.pointLightShadows.value=Z.state.pointShadow,Bt.hemisphereLights.value=Z.state.hemi,Bt.directionalShadowMap.value=Z.state.directionalShadowMap,Bt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Bt.spotShadowMap.value=Z.state.spotShadowMap,Bt.spotLightMatrix.value=Z.state.spotLightMatrix,Bt.spotLightMap.value=Z.state.spotLightMap,Bt.pointShadowMap.value=Z.state.pointShadowMap,Bt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=Zt,st.uniformsList=null,Zt}function ba(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=xc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function co(A,j){const at=kt.get(A);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function Ac(A,j,at,st,Z){j.isScene!==!0&&(j=Et),D.resetTextureUnits();const Mt=j.fog,Pt=st.isMeshStandardMaterial?j.environment:null,Wt=G===null?U.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ro,jt=(st.isMeshStandardMaterial?$:T).get(st.envMap||Pt),$t=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Zt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Bt=!!at.morphAttributes.position,pe=!!at.morphAttributes.normal,Oe=!!at.morphAttributes.color;let Ge=or;st.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ge=U.toneMapping);const An=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,we=An!==void 0?An.length:0,Yt=kt.get(st),Xn=x.state.lights;if(k===!0&&(pt===!0||A!==C)){const On=A===C&&st.id===N;St.setState(st,A,On)}let Te=!1;st.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Xn.state.version||Yt.outputColorSpace!==Wt||Z.isBatchedMesh&&Yt.batching===!1||!Z.isBatchedMesh&&Yt.batching===!0||Z.isBatchedMesh&&Yt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Yt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Yt.instancing===!1||!Z.isInstancedMesh&&Yt.instancing===!0||Z.isSkinnedMesh&&Yt.skinning===!1||!Z.isSkinnedMesh&&Yt.skinning===!0||Z.isInstancedMesh&&Yt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Yt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Yt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Yt.instancingMorph===!1&&Z.morphTexture!==null||Yt.envMap!==jt||st.fog===!0&&Yt.fog!==Mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==St.numPlanes||Yt.numIntersection!==St.numIntersection)||Yt.vertexAlphas!==$t||Yt.vertexTangents!==Zt||Yt.morphTargets!==Bt||Yt.morphNormals!==pe||Yt.morphColors!==Oe||Yt.toneMapping!==Ge||Yt.morphTargetsCount!==we)&&(Te=!0):(Te=!0,Yt.__version=st.version);let sn=Yt.currentProgram;Te===!0&&(sn=$i(st,j,Z));let Zn=!1,on=!1,ci=!1;const se=sn.getUniforms(),Kn=Yt.uniforms;if(At.useProgram(sn.program)&&(Zn=!0,on=!0,ci=!0),st.id!==N&&(N=st.id,on=!0),Zn||C!==A){At.buffers.depth.getReversed()?(ot.copy(A.projectionMatrix),qE(ot),YE(ot),se.setValue(V,"projectionMatrix",ot)):se.setValue(V,"projectionMatrix",A.projectionMatrix),se.setValue(V,"viewMatrix",A.matrixWorldInverse);const Rn=se.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,Rt.setFromMatrixPosition(A.matrixWorld)),Kt.logarithmicDepthBuffer&&se.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&se.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,on=!0,ci=!0)}if(Z.isSkinnedMesh){se.setOptional(V,Z,"bindMatrix"),se.setOptional(V,Z,"bindMatrixInverse");const On=Z.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),se.setValue(V,"boneTexture",On.boneTexture,D))}Z.isBatchedMesh&&(se.setOptional(V,Z,"batchingTexture"),se.setValue(V,"batchingTexture",Z._matricesTexture,D),se.setOptional(V,Z,"batchingIdTexture"),se.setValue(V,"batchingIdTexture",Z._indirectTexture,D),se.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&se.setValue(V,"batchingColorTexture",Z._colorsTexture,D));const Aa=at.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&ie.update(Z,at,sn),(on||Yt.receiveShadow!==Z.receiveShadow)&&(Yt.receiveShadow=Z.receiveShadow,se.setValue(V,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Kn.envMap.value=jt,Kn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(Kn.envMapIntensity.value=j.environmentIntensity),on&&(se.setValue(V,"toneMappingExposure",U.toneMappingExposure),Yt.needsLights&&Tl(Kn,ci),Mt&&st.fog===!0&&Ut.refreshFogUniforms(Kn,Mt),Ut.refreshMaterialUniforms(Kn,st,K,it,x.state.transmissionRenderTarget[A.id]),xc.upload(V,ba(Yt),Kn,D)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(xc.upload(V,ba(Yt),Kn,D),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&se.setValue(V,"center",Z.center),se.setValue(V,"modelViewMatrix",Z.modelViewMatrix),se.setValue(V,"normalMatrix",Z.normalMatrix),se.setValue(V,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const On=st.uniformsGroups;for(let Rn=0,zn=On.length;Rn<zn;Rn++){const bl=On[Rn];H.update(bl,sn),H.bind(bl,sn)}}return sn}function Tl(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function fo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,j,at){kt.get(A.texture).__webglTexture=j,kt.get(A.depthTexture).__webglTexture=at;const st=kt.get(A);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=at===void 0,st.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const at=kt.get(A);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,at=0){G=A,F=j,P=at;let st=!0,Z=null,Mt=!1,Pt=!1;if(A){const jt=kt.get(A);if(jt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(V.FRAMEBUFFER,null),st=!1;else if(jt.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(jt.__hasExternalTextures)D.rebindTextures(A,kt.get(A.texture).__webglTexture,kt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Bt=A.depthTexture;if(jt.__boundDepthTexture!==Bt){if(Bt!==null&&kt.has(Bt)&&(A.width!==Bt.image.width||A.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Pt=!0);const Zt=kt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?Z=Zt[j][at]:Z=Zt[j],Mt=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Z=kt.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?Z=Zt[at]:Z=Zt,I.copy(A.viewport),lt.copy(A.scissor),rt=A.scissorTest}else I.copy(Dt).multiplyScalar(K).floor(),lt.copy(ee).multiplyScalar(K).floor(),rt=ge;if(At.bindFramebuffer(V.FRAMEBUFFER,Z)&&st&&At.drawBuffers(A,Z),At.viewport(I),At.scissor(lt),At.setScissorTest(rt),Mt){const jt=kt.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,jt.__webglTexture,at)}else if(Pt){const jt=kt.get(A.texture),$t=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.__webglTexture,at||0,$t)}N=-1},this.readRenderTargetPixels=function(A,j,at,st,Z,Mt,Pt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Wt=Wt[Pt]),Wt){At.bindFramebuffer(V.FRAMEBUFFER,Wt);try{const jt=A.texture,$t=jt.format,Zt=jt.type;if(!Kt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-st&&at>=0&&at<=A.height-Z&&V.readPixels(j,at,st,Z,le.convert($t),le.convert(Zt),Mt)}finally{const jt=G!==null?kt.get(G).__webglFramebuffer:null;At.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(A,j,at,st,Z,Mt,Pt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Wt=Wt[Pt]),Wt){const jt=A.texture,$t=jt.format,Zt=jt.type;if(!Kt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-st&&at>=0&&at<=A.height-Z){At.bindFramebuffer(V.FRAMEBUFFER,Wt);const Bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.bufferData(V.PIXEL_PACK_BUFFER,Mt.byteLength,V.STREAM_READ),V.readPixels(j,at,st,Z,le.convert($t),le.convert(Zt),0);const pe=G!==null?kt.get(G).__webglFramebuffer:null;At.bindFramebuffer(V.FRAMEBUFFER,pe);const Oe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await kE(V,Oe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Mt),V.deleteBuffer(Bt),V.deleteSync(Oe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,at=0){A.isTexture!==!0&&(ul("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const st=Math.pow(2,-at),Z=Math.floor(A.image.width*st),Mt=Math.floor(A.image.height*st),Pt=j!==null?j.x:0,Wt=j!==null?j.y:0;D.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,at,0,0,Pt,Wt,Z,Mt),At.unbindTexture()},this.copyTextureToTexture=function(A,j,at=null,st=null,Z=0){A.isTexture!==!0&&(ul("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,A=arguments[1],j=arguments[2],Z=arguments[3]||0,at=null);let Mt,Pt,Wt,jt,$t,Zt,Bt,pe,Oe;const Ge=A.isCompressedTexture?A.mipmaps[Z]:A.image;at!==null?(Mt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Wt=at.isBox3?at.max.z-at.min.z:1,jt=at.min.x,$t=at.min.y,Zt=at.isBox3?at.min.z:0):(Mt=Ge.width,Pt=Ge.height,Wt=Ge.depth||1,jt=0,$t=0,Zt=0),st!==null?(Bt=st.x,pe=st.y,Oe=st.z):(Bt=0,pe=0,Oe=0);const An=le.convert(j.format),we=le.convert(j.type);let Yt;j.isData3DTexture?(D.setTexture3D(j,0),Yt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Yt=V.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Yt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Xn=V.getParameter(V.UNPACK_ROW_LENGTH),Te=V.getParameter(V.UNPACK_IMAGE_HEIGHT),sn=V.getParameter(V.UNPACK_SKIP_PIXELS),Zn=V.getParameter(V.UNPACK_SKIP_ROWS),on=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ge.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ge.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zt);const ci=A.isDataArrayTexture||A.isData3DTexture,se=j.isDataArrayTexture||j.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Kn=kt.get(A),Aa=kt.get(j),On=kt.get(Kn.__renderTarget),Rn=kt.get(Aa.__renderTarget);At.bindFramebuffer(V.READ_FRAMEBUFFER,On.__webglFramebuffer),At.bindFramebuffer(V.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let zn=0;zn<Wt;zn++)ci&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(A).__webglTexture,Z,Zt+zn),A.isDepthTexture?(se&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(j).__webglTexture,Z,Oe+zn),V.blitFramebuffer(jt,$t,Mt,Pt,Bt,pe,Mt,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST)):se?V.copyTexSubImage3D(Yt,Z,Bt,pe,Oe+zn,jt,$t,Mt,Pt):V.copyTexSubImage2D(Yt,Z,Bt,pe,Oe+zn,jt,$t,Mt,Pt);At.bindFramebuffer(V.READ_FRAMEBUFFER,null),At.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else se?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Yt,Z,Bt,pe,Oe,Mt,Pt,Wt,An,we,Ge.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Yt,Z,Bt,pe,Oe,Mt,Pt,Wt,An,Ge.data):V.texSubImage3D(Yt,Z,Bt,pe,Oe,Mt,Pt,Wt,An,we,Ge):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Z,Bt,pe,Mt,Pt,An,we,Ge.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Z,Bt,pe,Ge.width,Ge.height,An,Ge.data):V.texSubImage2D(V.TEXTURE_2D,Z,Bt,pe,Mt,Pt,An,we,Ge);V.pixelStorei(V.UNPACK_ROW_LENGTH,Xn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Te),V.pixelStorei(V.UNPACK_SKIP_PIXELS,sn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,on),Z===0&&j.generateMipmaps&&V.generateMipmap(Yt),At.unbindTexture()},this.copyTextureToTexture3D=function(A,j,at=null,st=null,Z=0){return A.isTexture!==!0&&(ul("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,st=arguments[1]||null,A=arguments[2],j=arguments[3],Z=arguments[4]||0),ul('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,at,st,Z)},this.initRenderTarget=function(A){kt.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),At.unbindTexture()},this.resetState=function(){F=0,P=0,G=null,At.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorspace=De._getDrawingBufferColorSpace(e),a.unpackColorSpace=De._getUnpackColorSpace()}}class Hx extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class n2 extends Ln{constructor(e=null,a=1,s=1,u,f,h,d,p,_=li,v=li,g,y){super(null,h,d,p,_,v,u,f,g,y),this.isDataTexture=!0,this.image={data:e,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jv extends Li{constructor(e,a,s,u=1){super(e,a,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=u}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ys=new qe,$v=new qe,dc=[],tx=new qr,i2=new qe,ol=new En,ll=new xl;class a2 extends En{constructor(e,a,s){super(e,a),this.isInstancedMesh=!0,this.instanceMatrix=new Jv(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let u=0;u<s;u++)this.setMatrixAt(u,i2)}computeBoundingBox(){const e=this.geometry,a=this.count;this.boundingBox===null&&(this.boundingBox=new qr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Ys),tx.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(tx)}computeBoundingSphere(){const e=this.geometry,a=this.count;this.boundingSphere===null&&(this.boundingSphere=new xl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Ys),ll.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(ll)}copy(e,a){return super.copy(e,a),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,a){a.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,a){a.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,a){const s=a.morphTargetInfluences,u=this.morphTexture.source.data.data,f=s.length+1,h=e*f+1;for(let d=0;d<s.length;d++)s[d]=u[h+d]}raycast(e,a){const s=this.matrixWorld,u=this.count;if(ol.geometry=this.geometry,ol.material=this.material,ol.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(s),e.ray.intersectsSphere(ll)!==!1))for(let f=0;f<u;f++){this.getMatrixAt(f,Ys),$v.multiplyMatrices(s,Ys),ol.matrixWorld=$v,ol.raycast(e,dc);for(let h=0,d=dc.length;h<d;h++){const p=dc[h];p.instanceId=f,p.object=this,a.push(p)}dc.length=0}}setColorAt(e,a){this.instanceColor===null&&(this.instanceColor=new Jv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),a.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,a){a.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,a){const s=a.morphTargetInfluences,u=s.length+1;this.morphTexture===null&&(this.morphTexture=new n2(new Float32Array(u*this.count),u,this.count,Cp,ji));const f=this.morphTexture.source.data.data;let h=0;for(let _=0;_<s.length;_++)h+=s[_];const d=this.geometry.morphTargetsRelative?1:1-h,p=u*e;f[p]=d,f.set(s,p+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class r2 extends Ln{constructor(e,a,s,u,f,h,d,p,_){super(e,a,s,u,f,h,d,p,_),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bc extends Ta{constructor(e=1,a=32,s=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:s,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let _=0;const v=[],g=new Q,y=new Q,M=[],b=[],w=[],S=[];for(let x=0;x<=s;x++){const z=[],O=x/s;let U=0;x===0&&h===0?U=.5/a:x===s&&p===Math.PI&&(U=-.5/a);for(let nt=0;nt<=a;nt++){const F=nt/a;g.x=-e*Math.cos(u+F*f)*Math.sin(h+O*d),g.y=e*Math.cos(h+O*d),g.z=e*Math.sin(u+F*f)*Math.sin(h+O*d),b.push(g.x,g.y,g.z),y.copy(g).normalize(),w.push(y.x,y.y,y.z),S.push(F+U,1-O),z.push(_++)}v.push(z)}for(let x=0;x<s;x++)for(let z=0;z<a;z++){const O=v[x][z+1],U=v[x][z],nt=v[x+1][z],F=v[x+1][z+1];(x!==0||h>0)&&M.push(O,U,F),(x!==s-1||p<Math.PI)&&M.push(U,nt,F)}this.setIndex(M),this.setAttribute("position",new ui(b,3)),this.setAttribute("normal",new ui(w,3)),this.setAttribute("uv",new ui(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zs extends Ta{constructor(e=1,a=.4,s=12,u=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:s,tubularSegments:u,arc:f},s=Math.floor(s),u=Math.floor(u);const h=[],d=[],p=[],_=[],v=new Q,g=new Q,y=new Q;for(let M=0;M<=s;M++)for(let b=0;b<=u;b++){const w=b/u*f,S=M/s*Math.PI*2;g.x=(e+a*Math.cos(S))*Math.cos(w),g.y=(e+a*Math.cos(S))*Math.sin(w),g.z=a*Math.sin(S),d.push(g.x,g.y,g.z),v.x=e*Math.cos(w),v.y=e*Math.sin(w),y.subVectors(g,v).normalize(),p.push(y.x,y.y,y.z),_.push(b/u),_.push(M/s)}for(let M=1;M<=s;M++)for(let b=1;b<=u;b++){const w=(u+1)*M+b-1,S=(u+1)*(M-1)+b-1,x=(u+1)*(M-1)+b,z=(u+1)*M+b;h.push(w,S,z),h.push(S,x,z)}this.setIndex(h),this.setAttribute("position",new ui(d,3)),this.setAttribute("normal",new ui(p,3)),this.setAttribute("uv",new ui(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class s2 extends yl{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sx,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nd extends s2{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gx extends Tn{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}const Ld=new qe,ex=new Q,nx=new Q;class o2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,s=this.matrix;ex.setFromMatrixPosition(e.matrixWorld),a.position.copy(ex),nx.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(nx),a.updateMatrixWorld(),Ld.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class l2 extends o2{constructor(){super(new Ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ix extends Gx{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new l2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class u2 extends Gx{constructor(e,a){super(e,a),this.isAmbientLight=!0,this.type="AmbientLight"}}const ax=new qe;class c2{constructor(e,a,s=0,u=1/0){this.ray=new Ax(e,a),this.near=s,this.far=u,this.camera=null,this.layers=new Lp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(a.near+a.far)/(a.near-a.far)).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):console.error("THREE.Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return ax.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ax),this}intersectObject(e,a=!0,s=[]){return Sp(e,this,s,a),s.sort(rx),s}intersectObjects(e,a=!0,s=[]){for(let u=0,f=e.length;u<f;u++)Sp(e[u],this,s,a);return s.sort(rx),s}}function rx(o,e){return o.distance-e.distance}function Sp(o,e,a,s){let u=!0;if(o.layers.test(e.layers)&&o.raycast(e,a)===!1&&(u=!1),u===!0&&s===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Sp(f[h],e,a,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);const f2=`
  varying vec2 vUv;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,h2=`
  uniform float uTime;
  uniform vec2 uRingCenter;
  uniform float uRingScale;
  uniform vec2 uRippleCenter;
  uniform float uRippleAge;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  vec2 hash2(vec2 p) {
    return fract(
      sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453
    );
  }

  // Smooth 2nd-order Voronoi distance for sharp spiderweb sunlight caustics
  float voronoiCaustic(vec2 x, float time) {
    vec2 n = floor(x);
    vec2 f = fract(x);
    float f1 = 8.0;
    float f2 = 8.0;

    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 o = hash2(n + g);
        o = 0.5 + 0.44 * sin(time * 1.35 + 6.2831 * o);
        vec2 r = g - f + o;
        float d = dot(r, r);
        if (d < f1) {
          f2 = f1;
          f1 = d;
        } else if (d < f2) {
          f2 = d;
        }
      }
    }
    float edge = sqrt(f2) - sqrt(f1);
    return exp(-edge * 6.2);
  }

  void main() {
    vec2 p = vWorldPos.xy * 0.42;

    // Interactive click / pointer ripple wave distortion
    vec2 toRipple = vWorldPos.xy - uRippleCenter;
    float rippleDist = length(toRipple);
    float rippleWave = 0.0;
    if (uRippleAge < 4.5) {
      float radius = uRippleAge * 2.4;
      float band = exp(-pow(rippleDist - radius, 2.0) * 3.5);
      rippleWave = sin((rippleDist - radius) * 14.0) * band * (1.0 - uRippleAge / 4.5) * 0.055;
      p += normalize(toRipple + 0.0001) * rippleWave;
    }

    // Gentle organic water refraction distortion
    vec2 warp = vec2(
      sin(p.y * 2.7 + uTime * 0.9) + cos(p.x * 2.1 - uTime * 0.7),
      cos(p.x * 2.5 + uTime * 0.8) + sin(p.y * 3.1 + uTime * 0.65)
    ) * 0.14;

    vec2 uvDistorted = p + warp;

    // Subtle submerged ceramic pool tile grid
    vec2 tileGrid = abs(fract(uvDistorted * 3.6 - 0.5) - 0.5) / fwidth(uvDistorted * 3.6);
    float tileLine = 1.0 - min(min(tileGrid.x, tileGrid.y), 1.0);

    // Base turquoise-aqua swimming pool water gradient matching Float Club
    vec3 deepAqua = vec3(0.06, 0.62, 0.70);
    vec3 midTurquoise = vec3(0.13, 0.76, 0.82);
    vec3 brightCyan = vec3(0.36, 0.91, 0.87);

    float radialGrad = clamp(length(vWorldPos.xy) * 0.11, 0.0, 1.0);
    vec3 waterColor = mix(brightCyan, midTurquoise, radialGrad * 0.75);
    waterColor = mix(waterColor, deepAqua, smoothstep(0.35, 1.0, radialGrad) * 0.45);
    waterColor = mix(waterColor, deepAqua * 0.88, tileLine * 0.08);

    // Dual-scale Voronoi caustic networks (primary sharp + secondary fine shimmer)
    float c1 = voronoiCaustic(uvDistorted * 2.15 + vec2(uTime * 0.08, -uTime * 0.05), uTime);
    float c2 = voronoiCaustic(uvDistorted * 3.65 - vec2(uTime * 0.06, uTime * 0.09) + 3.4, uTime * 1.15);
    float c3 = voronoiCaustic(uvDistorted * 1.25 + vec2(-uTime * 0.04, uTime * 0.06), uTime * 0.8);

    float causticNet = pow(clamp(c1 * 0.68 + c2 * 0.45 + c3 * 0.35, 0.0, 1.35), 1.65);

    // Subtle chromatic dispersion on bright caustic filaments
    vec3 causticTint = vec3(0.88, 1.0, 0.98) * causticNet * 0.68;
    waterColor += causticTint;

    // Submerged Pool Floor Shadow & Refractive Caustic Halo directly beneath the 3D Float Ring
    vec2 shadowOffset = vWorldPos.xy - (uRingCenter + vec2(-0.12, -0.34));
    float rDist = length(shadowOffset) / uRingScale;

    // Torus shadow profile (outer radius ~1.95, inner hole ~0.85)
    float torusBand = smoothstep(0.52, 0.92, rDist) * (1.0 - smoothstep(1.62, 2.18, rDist));
    // Soft underwater caustic focus ring around the shadow edge
    float causticFocus = exp(-pow(rDist - 1.92, 2.0) * 9.0) * 0.28 +
                         exp(-pow(rDist - 0.68, 2.0) * 12.0) * 0.22;

    vec3 shadowTeal = vec3(0.03, 0.40, 0.46);
    waterColor = mix(waterColor, shadowTeal, torusBand * 0.56);
    waterColor += vec3(0.75, 0.98, 0.95) * causticFocus * (0.6 + 0.4 * c1);

    // Add bright ring highlight when user clicks water ripple
    if (uRippleAge < 4.5) {
      waterColor += vec3(0.95, 1.0, 1.0) * max(0.0, rippleWave * 6.5);
    }

    gl_FragColor = vec4(waterColor, 1.0);
  }
`;function d2(){const o=document.createElement("canvas");o.width=2048,o.height=512;const e=o.getContext("2d"),a=8,s=o.width/a;for(let f=0;f<a;f++){const h=f%2===0,d=f*s;if(h){const p=e.createLinearGradient(0,0,0,o.height);p.addColorStop(0,"#F57C2C"),p.addColorStop(.5,"#F26D1D"),p.addColorStop(1,"#E05A0E"),e.fillStyle=p}else{const p=e.createLinearGradient(0,0,0,o.height);p.addColorStop(0,"#FFFFFF"),p.addColorStop(.5,"#FAF8F4"),p.addColorStop(1,"#EDEAE2"),e.fillStyle=p}e.fillRect(d,0,s+1,o.height),e.fillStyle="rgba(120, 55, 20, 0.14)",e.fillRect(d,0,4,o.height)}const u=new r2(o);return u.wrapS=pl,u.wrapT=pl,u.colorSpace=oi,u.anisotropy=8,u}function p2(o){const e=new Hx,a=new bc(20,32,24),s=new Ki({side:Vn,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vDir;
      void main() {
        // Upper hemisphere: bright summer sky + warm sun studio softbox
        // Lower hemisphere: glowing turquoise pool bounce light
        vec3 skyWhite = vec3(0.96, 0.99, 1.0);
        vec3 sunWarm = vec3(1.0, 0.98, 0.90);
        vec3 poolBounce = vec3(0.12, 0.82, 0.88);

        vec3 col = vDir.y > 0.0
          ? mix(skyWhite, sunWarm, pow(max(0.0, vDir.y), 2.0))
          : mix(poolBounce, vec3(0.05, 0.52, 0.60), -vDir.y);

        float sunSpot = pow(max(0.0, dot(vDir, normalize(vec3(0.25, 0.88, 0.42)))), 14.0);
        col += vec3(1.0, 0.99, 0.94) * sunSpot * 1.4;
        gl_FragColor = vec4(col, 1.0);
      }
    `});e.add(new En(a,s));const u=new xp(o);u.compileCubemapShader();const f=u.fromScene(e,.03).texture;return u.dispose(),a.dispose(),s.dispose(),f}const m2=({scrollProgress:o,isPaused:e,onTriggerRipple:a})=>{const s=Un.useRef(null),u=Un.useRef({scrollProgress:o,isPaused:e});return Un.useEffect(()=>{u.current={scrollProgress:o,isPaused:e}},[o,e]),Un.useEffect(()=>{const f=s.current;if(!f)return;const h=new e2({antialias:!0,powerPreference:"high-performance"});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setSize(f.clientWidth,f.clientHeight),h.toneMapping=cx,h.toneMappingExposure=1.08,f.appendChild(h.domElement);const d=new Hx,p=new Si(36,f.clientWidth/f.clientHeight,.1,100);p.position.set(0,-1.65,6.85),p.lookAt(0,-.15,0);const _=p2(h);d.environment=_;const v={uTime:{value:0},uRingCenter:{value:new Ce(0,.2)},uRingScale:{value:1},uRippleCenter:{value:new Ce(0,0)},uRippleAge:{value:10}},g=new Ki({uniforms:v,vertexShader:f2,fragmentShader:h2}),y=new En(new Ml(32,24),g);y.position.z=-.32,d.add(y);const M=new fl;M.position.set(0,.22,.15),d.add(M);const b=d2(),w=new Nd({map:b,roughness:.14,metalness:.02,clearcoat:1,clearcoatRoughness:.08,reflectivity:.95,envMapIntensity:1.25}),S=1.38,x=.54,z=new Zs(S,x,80,192);z.scale(1,1,.86);const O=new En(z,w);M.add(O);const U=new Nd({color:"#F4F1EA",roughness:.25,clearcoat:.8,transparent:!0,opacity:.88}),nt=new En(new Zs(S-x+.015,.024,16,128),U);nt.scale.set(1,1,.35),M.add(nt);const F=new En(new Zs(S+x-.015,.022,16,128),U);F.scale.set(1,1,.35),M.add(F);const P=new Op({map:b,transparent:!0,opacity:.24,color:"#88F4FA"}),G=new En(new Zs(S*1.02,x*.96,36,96),P);G.position.set(-.04,-.18,-.26),G.scale.set(1.02,1.02,.45),M.add(G);const N=210,C=new bc(1,14,12),I=new Nd({color:"#FFFFFF",roughness:.02,metalness:.05,transmission:.85,ior:1.333,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2.2}),lt=new a2(C,I,N),rt=new Tn;let gt=42;const ct=()=>(gt=gt*16807%2147483647,(gt-1)/2147483646);for(let V=0;V<N;V++){const ve=ct()*Math.PI*2,Jt=(ct()-.5)*1.85,Kt=Math.cos(Jt),At=Math.sin(Jt),oe=(S+x*At)*Math.cos(ve),kt=(S+x*At)*Math.sin(ve),D=x*Kt*.86;rt.position.set(oe,kt,D);const T=At*Math.cos(ve),$=At*Math.sin(ve),mt=Kt;rt.lookAt(oe+T,kt+$,D+mt);const vt=ct(),ht=vt>.84?.026+ct()*.014:vt>.45?.015+ct()*.009:.008+ct()*.006;rt.scale.set(ht,ht*(.85+ct()*.35),ht*.52),rt.updateMatrix(),lt.setMatrixAt(V,rt.matrix)}lt.instanceMatrix.needsUpdate=!0,M.add(lt);const q=new u2("#D8FAFC",1.45);d.add(q);const it=new ix("#FFFDF4",2.85);it.position.set(1.8,3.2,6.5),d.add(it);const K=new ix("#6CF5FF",1.35);K.position.set(-3.5,-2.5,3),d.add(K);const xt=new c2,yt=new Ce,Dt={x:0,y:0,targetX:0,targetY:0},ee=V=>{const ve=f.getBoundingClientRect();Dt.targetX=(V.clientX-ve.left)/ve.width*2-1,Dt.targetY=-((V.clientY-ve.top)/ve.height)*2+1},ge=V=>{const ve=f.getBoundingClientRect();yt.x=(V.clientX-ve.left)/ve.width*2-1,yt.y=-((V.clientY-ve.top)/ve.height)*2+1,xt.setFromCamera(yt,p);const Jt=xt.intersectObject(y);Jt.length>0&&(v.uRippleCenter.value.set(Jt[0].point.x,Jt[0].point.y),v.uRippleAge.value=0,a())};window.addEventListener("mousemove",ee),window.addEventListener("mousedown",ge);const R=()=>{f&&(p.aspect=f.clientWidth/f.clientHeight,p.updateProjectionMatrix(),h.setSize(f.clientWidth,f.clientHeight))};window.addEventListener("resize",R);const k=[{camPos:new Q(0,-1.75,6.55),lookAt:new Q(0,-.12,0),ringPos:new Q(0,.22,.15),ringRot:new Q(-.08,.04,.18),ringScale:1},{camPos:new Q(.05,-.55,4.35),lookAt:new Q(.02,.02,0),ringPos:new Q(-.04,.06,.22),ringRot:new Q(-.02,.06,.42),ringScale:1.12},{camPos:new Q(-.15,-1.55,5.85),lookAt:new Q(0,-.05,0),ringPos:new Q(.02,.08,.18),ringRot:new Q(-.06,-.04,.68),ringScale:1.02},{camPos:new Q(.55,-1.85,5.15),lookAt:new Q(.1,.05,0),ringPos:new Q(-.12,.15,.2),ringRot:new Q(-.12,.12,1.05),ringScale:1.06},{camPos:new Q(-.45,-1.65,5.65),lookAt:new Q(-.05,0,0),ringPos:new Q(.14,.12,.16),ringRot:new Q(-.05,-.08,1.42),ringScale:1},{camPos:new Q(0,-2.35,7.65),lookAt:new Q(0,.08,0),ringPos:new Q(0,-.18,.14),ringRot:new Q(-.14,.02,1.85),ringScale:.88}];let pt=0,ot=performance.now(),Tt=0;const Rt=new Q,It=new Q,Et=new Q(0,-.12,0),bt=new Q,be=V=>{Tt=requestAnimationFrame(be);const ve=Math.min(.05,(V-ot)/1e3);ot=V;const{scrollProgress:Jt,isPaused:Kt}=u.current;Kt||(pt+=ve),v.uTime.value=pt,v.uRippleAge.value+=ve,Dt.x+=(Dt.targetX-Dt.x)*.06,Dt.y+=(Dt.targetY-Dt.y)*.06;const At=Math.min(4.9999,Math.max(0,Jt*5)),oe=Math.floor(At),kt=At-oe,D=kt*kt*(3-2*kt),T=k[oe],$=k[Math.min(5,oe+1)];Rt.lerpVectors(T.camPos,$.camPos,D),Rt.x+=Dt.x*.18,Rt.y+=Dt.y*.14,It.lerpVectors(T.lookAt,$.lookAt,D),p.position.lerp(Rt,.08),Et.lerp(It,.08),p.lookAt(Et);const mt=Math.sin(pt*.85)*.045,vt=Math.cos(pt*.72)*.055,ht=Math.sin(pt*1.35)*.03;bt.lerpVectors(T.ringPos,$.ringPos,D),M.position.x=Ns.lerp(M.position.x,bt.x+mt,.08),M.position.y=Ns.lerp(M.position.y,bt.y+vt,.08),M.position.z=bt.z+ht;const qt=Ns.lerp(T.ringRot.x,$.ringRot.x,D)+Math.sin(pt*.95)*.035+Dt.y*.05,Ut=Ns.lerp(T.ringRot.y,$.ringRot.y,D)+Math.cos(pt*.82)*.035+Dt.x*.05,Nt=Ns.lerp(T.ringRot.z,$.ringRot.z,D)+pt*.06;M.rotation.set(qt,Ut,Nt);const he=Ns.lerp(T.ringScale,$.ringScale,D);M.scale.setScalar(he),v.uRingCenter.value.set(M.position.x,M.position.y),v.uRingScale.value=he,h.render(d,p)};return Tt=requestAnimationFrame(be),()=>{cancelAnimationFrame(Tt),window.removeEventListener("mousemove",ee),window.removeEventListener("mousedown",ge),window.removeEventListener("resize",R),h.dispose(),_.dispose(),b.dispose(),f.contains(h.domElement)&&f.removeChild(h.domElement)}},[a]),wt.jsx("div",{ref:s,className:"fixed inset-0 w-full h-full z-0 cursor-pointer",title:"Click anywhere on the turquoise pool water to send a sun ripple"})},Od=({className:o="w-10 h-10"})=>wt.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,"aria-hidden":"true",children:[wt.jsx("circle",{cx:"24",cy:"24",r:"9.5",stroke:"#FDE047",strokeWidth:"3.2",fill:"rgba(253, 224, 71, 0.14)"}),wt.jsx("line",{x1:"24",y1:"4",x2:"24",y2:"10.5",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"}),wt.jsx("line",{x1:"24",y1:"37.5",x2:"24",y2:"44",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"}),wt.jsx("line",{x1:"4",y1:"24",x2:"10.5",y2:"24",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"}),wt.jsx("line",{x1:"37.5",y1:"24",x2:"44",y2:"24",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"}),wt.jsx("line",{x1:"9.8",y1:"9.8",x2:"14.5",y2:"14.5",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"}),wt.jsx("line",{x1:"33.5",y1:"33.5",x2:"38.2",y2:"38.2",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"}),wt.jsx("line",{x1:"38.2",y1:"9.8",x2:"33.5",y2:"14.5",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"}),wt.jsx("line",{x1:"14.5",y1:"33.5",x2:"9.8",y2:"38.2",stroke:"#FDE047",strokeWidth:"3.2",strokeLinecap:"round"})]}),g2=()=>wt.jsxs("svg",{width:"28",height:"24",viewBox:"0 0 28 24",fill:"none","aria-hidden":"true",children:[wt.jsx("line",{x1:"24",y1:"6",x2:"12",y2:"2",stroke:"#FDE047",strokeWidth:"3",strokeLinecap:"round"}),wt.jsx("line",{x1:"22",y1:"12",x2:"6",y2:"12",stroke:"#FDE047",strokeWidth:"3",strokeLinecap:"round"}),wt.jsx("line",{x1:"24",y1:"18",x2:"12",y2:"22",stroke:"#FDE047",strokeWidth:"3",strokeLinecap:"round"})]}),_2=()=>wt.jsxs("svg",{width:"28",height:"24",viewBox:"0 0 28 24",fill:"none","aria-hidden":"true",children:[wt.jsx("line",{x1:"4",y1:"6",x2:"16",y2:"2",stroke:"#FDE047",strokeWidth:"3",strokeLinecap:"round"}),wt.jsx("line",{x1:"6",y1:"12",x2:"22",y2:"12",stroke:"#FDE047",strokeWidth:"3",strokeLinecap:"round"}),wt.jsx("line",{x1:"4",y1:"18",x2:"16",y2:"22",stroke:"#FDE047",strokeWidth:"3",strokeLinecap:"round"})]}),v2=["A little less hurry","Let the day drift","Nowhere to be","Just warm water","Unplug the noise","Stay a little longer"];function x2(){const[o,e]=Un.useState(0),[a,s]=Un.useState(0),[u,f]=Un.useState(!1),[h,d]=Un.useState(0);Un.useEffect(()=>{const v=()=>{const g=document.documentElement.scrollHeight-window.innerHeight;if(g<=0)return;const y=Math.min(1,Math.max(0,window.scrollY/g));e(y);const M=Math.min(5,Math.floor(y*6+.12));s(M)};return window.addEventListener("scroll",v,{passive:!0}),()=>window.removeEventListener("scroll",v)},[]);const p=Un.useCallback(()=>{d(v=>v+1)},[]),_=v=>{const g=document.documentElement.scrollHeight-window.innerHeight,y=v/5*g;window.scrollTo({top:y,behavior:"smooth"})};return wt.jsxs("div",{className:"relative min-h-[600vh] w-full font-float-body select-none",children:[wt.jsx(m2,{scrollProgress:o,isPaused:u,rippleCount:h,onTriggerRipple:p}),wt.jsxs("header",{className:"fixed top-0 left-0 right-0 z-30 px-7 sm:px-12 py-6 flex items-center justify-between pointer-events-none",children:[wt.jsxs("button",{type:"button",onClick:()=>_(0),className:"pointer-events-auto font-float-display text-2xl sm:text-[28px] font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(11,59,66,0.22)] flex items-baseline cursor-pointer",children:[wt.jsx("span",{children:"float club"}),wt.jsx("span",{className:"text-[#FDE047] ml-0.5",children:"."})]}),wt.jsxs("div",{className:"pointer-events-auto flex items-center gap-4",children:[wt.jsx("span",{className:"text-xs sm:text-sm font-semibold text-[#0B3B42] tracking-tight",children:"Take your time"}),wt.jsx("button",{type:"button",onClick:()=>f(v=>!v),"aria-label":u?"Resume pool float motion":"Pause pool float motion",className:"w-10 h-10 rounded-full border border-[#0B3B42]/25 bg-white/30 hover:bg-white/45 backdrop-blur-md flex items-center justify-center text-[#0B3B42] shadow-sm transition cursor-pointer",children:u?wt.jsx(FM,{className:"w-4 h-4 fill-[#0B3B42] ml-0.5"}):wt.jsx(IM,{className:"w-4 h-4 fill-[#0B3B42]"})})]})]}),wt.jsx("nav",{"aria-label":"Pool Story Chapters",className:"fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-end gap-5",children:v2.map((v,g)=>{const y=a===g;return wt.jsx("button",{type:"button",onClick:()=>_(g),title:v,"aria-label":`Jump to chapter ${g+1}: ${v}`,className:"group py-1.5 pl-4 flex items-center justify-end cursor-pointer focus:outline-none",children:wt.jsx("span",{className:`block h-[2.5px] rounded-full transition-all duration-300 ${y?"w-5 bg-[#0B3B42]":"w-2.5 bg-[#0B3B42]/45 group-hover:w-4 group-hover:bg-[#0B3B42]/80"}`})},v)})}),wt.jsx("section",{className:"relative h-screen w-full flex flex-col items-center justify-end pb-12 sm:pb-14 px-6 z-10 pointer-events-none",children:wt.jsxs("div",{className:"text-center max-w-6xl mx-auto",children:[wt.jsx("h1",{className:"font-float-display text-5xl sm:text-7xl md:text-[88px] lg:text-[104px] font-bold leading-[0.98] text-pool-headline tracking-tight",children:"A little less hurry."}),wt.jsxs("div",{className:"mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-5",children:[wt.jsx(Od,{className:"w-9 h-9 sm:w-11 sm:h-11 shrink-0"}),wt.jsx("p",{className:"text-base sm:text-xl md:text-[23px] font-semibold text-[#083A42] tracking-tight",children:"The best part of today is taking your time."}),wt.jsx(Od,{className:"w-9 h-9 sm:w-11 sm:h-11 shrink-0"})]})]})}),wt.jsx("section",{className:"relative h-screen w-full flex items-end justify-end pb-16 sm:pb-24 px-8 sm:px-20 lg:px-32 z-10 pointer-events-none",children:wt.jsxs("div",{className:"text-left max-w-xl",children:[wt.jsxs("h2",{className:"font-float-display text-5xl sm:text-7xl md:text-[84px] font-bold leading-[0.96] text-pool-headline",children:["Let the",wt.jsx("br",{}),"day drift."]}),wt.jsx("p",{className:"mt-4 text-base sm:text-xl font-semibold text-[#083A42] tracking-tight",children:"Nothing on the agenda but this."})]})}),wt.jsxs("section",{className:"relative h-screen w-full flex flex-col justify-between py-14 sm:py-20 px-8 sm:px-16 lg:px-24 z-10 pointer-events-none",children:[wt.jsx("div",{className:"self-end text-right pr-4 sm:pr-16",children:wt.jsx("p",{className:"text-base sm:text-xl font-semibold text-[#083A42] tracking-tight",children:"Nothing on the agenda but this."})}),wt.jsx("div",{className:"self-start text-left max-w-lg",children:wt.jsxs("h2",{className:"font-float-display text-5xl sm:text-7xl md:text-[84px] font-bold leading-[0.96] text-pool-headline",children:["Nowhere",wt.jsx("br",{}),"to be."]})})]}),wt.jsx("section",{className:"relative h-screen w-full flex items-center justify-end px-8 sm:px-20 lg:px-28 z-10 pointer-events-none",children:wt.jsxs("div",{className:"text-left max-w-lg",children:[wt.jsxs("h2",{className:"font-float-display text-5xl sm:text-7xl md:text-[82px] font-bold leading-[0.96] text-pool-headline",children:["Just warm",wt.jsx("br",{}),"water."]}),wt.jsxs("div",{className:"mt-4 flex items-center gap-3",children:[wt.jsx(Od,{className:"w-8 h-8 shrink-0"}),wt.jsx("p",{className:"text-base sm:text-xl font-semibold text-[#083A42] tracking-tight",children:"Sun on your shoulders and quiet ripples."})]})]})}),wt.jsx("section",{className:"relative h-screen w-full flex items-end justify-start pb-20 px-8 sm:px-20 lg:px-28 z-10 pointer-events-none",children:wt.jsxs("div",{className:"text-left max-w-xl",children:[wt.jsxs("h2",{className:"font-float-display text-5xl sm:text-7xl md:text-[82px] font-bold leading-[0.96] text-pool-headline",children:["Unplug",wt.jsx("br",{}),"the noise."]}),wt.jsx("p",{className:"mt-4 text-base sm:text-xl font-semibold text-[#083A42] tracking-tight",children:"Float until the afternoon slows down."})]})}),wt.jsxs("section",{className:"relative h-screen w-full flex flex-col items-center justify-between py-20 sm:py-24 px-6 z-10 pointer-events-none",children:[wt.jsxs("div",{className:"text-center mt-2",children:[wt.jsx("h2",{className:"font-float-display text-5xl sm:text-7xl md:text-[80px] font-bold leading-[1.0] text-pool-headline-outline",children:"Stay a little longer."}),wt.jsxs("div",{className:"mt-3 flex items-center justify-center gap-3",children:[wt.jsx(g2,{}),wt.jsx("p",{className:"font-float-display text-xl sm:text-2xl font-bold text-pool-headline-outline",children:"The day can wait."}),wt.jsx(_2,{})]})]}),wt.jsx("div",{className:"pointer-events-auto relative flex items-center justify-center mb-2",children:wt.jsxs("button",{type:"button",onClick:()=>_(0),"aria-label":"Replay Float Club from the beginning",className:"group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FDE047] hover:bg-[#FFE869] border-[3px] border-white shadow-[0_8px_24px_rgba(11,59,66,0.28)] transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer",children:[wt.jsxs("svg",{viewBox:"0 0 100 100",className:"absolute -inset-3.5 w-[calc(100%+28px)] h-[calc(100%+28px)] pointer-events-none","aria-hidden":"true",children:[wt.jsx("line",{x1:"50",y1:"2",x2:"50",y2:"9",stroke:"#FDE047",strokeWidth:"3.5",strokeLinecap:"round"}),wt.jsx("line",{x1:"74",y1:"8",x2:"69",y2:"14",stroke:"#FDE047",strokeWidth:"3.5",strokeLinecap:"round"}),wt.jsx("line",{x1:"92",y1:"26",x2:"85",y2:"30",stroke:"#FDE047",strokeWidth:"3.5",strokeLinecap:"round"}),wt.jsx("line",{x1:"98",y1:"50",x2:"91",y2:"50",stroke:"#FDE047",strokeWidth:"3.5",strokeLinecap:"round"})]}),wt.jsx(HM,{className:"w-7 h-7 sm:w-8 sm:h-8 text-[#0B3B42] stroke-[2.8] transition-transform duration-500 group-hover:-rotate-90"})]})})]})]})}OM.createRoot(document.getElementById("root")).render(wt.jsx(AM.StrictMode,{children:wt.jsx(x2,{})}));
