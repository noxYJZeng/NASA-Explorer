const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IssTracker-CihJSm67.js","assets/IssTracker-eGgdhLUU.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ll(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},hr=[],bn=()=>{},gd=()=>!1,vo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Il=n=>n.startsWith("onUpdate:"),It=Object.assign,Ul=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vd=Object.prototype.hasOwnProperty,nt=(n,e)=>vd.call(n,e),He=Array.isArray,dr=n=>xo(n)==="[object Map]",uf=n=>xo(n)==="[object Set]",Ve=n=>typeof n=="function",St=n=>typeof n=="string",_i=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",ff=n=>(ht(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),hf=Object.prototype.toString,xo=n=>hf.call(n),xd=n=>xo(n).slice(8,-1),df=n=>xo(n)==="[object Object]",Nl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Sd=/-(\w)/g,di=So(n=>n.replace(Sd,(e,t)=>t?t.toUpperCase():"")),Md=/\B([A-Z])/g,ki=So(n=>n.replace(Md,"-$1").toLowerCase()),pf=So(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bo=So(n=>n?`on${pf(n)}`:""),ci=(n,e)=>!Object.is(n,e),Ws=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},mf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ra=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let mc;const Mo=()=>mc||(mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?bd(i):Fl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||ht(n))return n}const Ed=/;(?![^(]*\))/g,yd=/:([^]+)/,Td=/\/\*[^]*?\*\//g;function bd(n){const e={};return n.replace(Td,"").split(Ed).forEach(t=>{if(t){const i=t.split(yd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ui(n){let e="";if(St(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=ui(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wd=Ll(Ad);function _f(n){return!!n||n===""}const gf=n=>!!(n&&n.__v_isRef===!0),cr=n=>St(n)?n:n==null?"":He(n)||ht(n)&&(n.toString===hf||!Ve(n.toString))?gf(n)?cr(n.value):JSON.stringify(n,vf,2):String(n),vf=(n,e)=>gf(e)?vf(n,e.value):dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[zo(i,s)+" =>"]=r,t),{})}:uf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>zo(t))}:_i(e)?zo(e):ht(e)&&!He(e)&&!df(e)?String(e):e,zo=(n,e="")=>{var t;return _i(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Rd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cd(){return Kt}let ut;const Ho=new WeakSet;class xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ho.has(this)&&(Ho.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_c(this),Ef(this);const e=ut,t=mn;ut=this,mn=!0;try{return this.fn()}finally{yf(this),ut=e,mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zl(e);this.deps=this.depsTail=void 0,_c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ho.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ca(this)&&this.run()}get dirty(){return Ca(this)}}let Sf=0,Gr,Wr;function Mf(n,e=!1){if(n.flags|=8,e){n.next=Wr,Wr=n;return}n.next=Gr,Gr=n}function Ol(){Sf++}function Bl(){if(--Sf>0)return;if(Wr){let e=Wr;for(Wr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Gr;){let e=Gr;for(Gr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ef(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),zl(i),Pd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ca(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Tf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Kr))return;n.globalVersion=Kr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ca(n)){n.flags&=-3;return}const t=ut,i=mn;ut=n,mn=!0;try{Ef(n);const r=n.fn(n._value);(e.version===0||ci(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ut=t,mn=i,yf(n),n.flags&=-3}}function zl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)zl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let mn=!0;const bf=[];function gi(){bf.push(mn),mn=!1}function vi(){const n=bf.pop();mn=n===void 0?!0:n}function _c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let Kr=0;class Dd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ut||!mn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new Dd(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,Af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,Kr++,this.notify(e)}notify(e){Ol();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bl()}}}function Af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Pa=new WeakMap,Ni=Symbol(""),Da=Symbol(""),Zr=Symbol("");function Dt(n,e,t){if(mn&&ut){let i=Pa.get(n);i||Pa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Hl),r.map=i,r.key=t),r.track()}}function Bn(n,e,t,i,r,s){const o=Pa.get(n);if(!o){Kr++;return}const a=l=>{l&&l.trigger()};if(Ol(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&Nl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Zr||!_i(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Zr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ni)),dr(n)&&a(o.get(Da)));break;case"delete":l||(a(o.get(Ni)),dr(n)&&a(o.get(Da)));break;case"set":dr(n)&&a(o.get(Ni));break}}Bl()}function Xi(n){const e=tt(n);return e===n?e:(Dt(e,"iterate",Zr),on(n)?e:e.map(Lt))}function Eo(n){return Dt(n=tt(n),"iterate",Zr),n}const Ld={__proto__:null,[Symbol.iterator](){return ko(this,Symbol.iterator,Lt)},concat(...n){return Xi(this).concat(...n.map(e=>He(e)?Xi(e):e))},entries(){return ko(this,"entries",n=>(n[1]=Lt(n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(Lt),arguments)},find(n,e){return Cn(this,"find",n,e,Lt,arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,Lt,arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Vo(this,"includes",n)},indexOf(...n){return Vo(this,"indexOf",n)},join(n){return Xi(this).join(n)},lastIndexOf(...n){return Vo(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return Dr(this,"pop")},push(...n){return Dr(this,"push",n)},reduce(n,...e){return gc(this,"reduce",n,e)},reduceRight(n,...e){return gc(this,"reduceRight",n,e)},shift(){return Dr(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return Dr(this,"splice",n)},toReversed(){return Xi(this).toReversed()},toSorted(n){return Xi(this).toSorted(n)},toSpliced(...n){return Xi(this).toSpliced(...n)},unshift(...n){return Dr(this,"unshift",n)},values(){return ko(this,"values",Lt)}};function ko(n,e,t){const i=Eo(n),r=i[e]();return i!==n&&!on(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Id=Array.prototype;function Cn(n,e,t,i,r,s){const o=Eo(n),a=o!==n&&!on(n),l=o[e];if(l!==Id[e]){const f=l.apply(n,s);return a?Lt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Lt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function gc(n,e,t,i){const r=Eo(n);let s=t;return r!==n&&(on(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Lt(a),l,n)}),r[e](s,...i)}function Vo(n,e,t){const i=tt(n);Dt(i,"iterate",Zr);const r=i[e](...t);return(r===-1||r===!1)&&Gl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function Dr(n,e,t=[]){gi(),Ol();const i=tt(n)[e].apply(n,t);return Bl(),vi(),i}const Ud=Ll("__proto__,__v_isRef,__isVue"),wf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(_i));function Nd(n){_i(n)||(n=String(n));const e=tt(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class Rf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Xd:Lf:s?Df:Pf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=Ld[t]))return l;if(t==="hasOwnProperty")return Nd}const a=Reflect.get(e,t,At(e)?e:i);return(_i(t)?wf.has(t):Ud(t))||(r||Dt(e,"get",t),s)?a:At(a)?o&&Nl(t)?a:a.value:ht(a)?r?Uf(a):yo(a):a}}class Cf extends Rf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Fi(s);if(!on(i)&&!Fi(i)&&(s=tt(s),i=tt(i)),!He(e)&&At(s)&&!At(i))return l?!1:(s.value=i,!0)}const o=He(e)&&Nl(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,At(e)?e:r);return e===tt(r)&&(o?ci(i,s)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!_i(t)||!wf.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",He(e)?"length":Ni),Reflect.ownKeys(e)}}class Fd extends Rf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Od=new Cf,Bd=new Fd,zd=new Cf(!0);const La=n=>n,_s=n=>Reflect.getPrototypeOf(n);function Hd(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=dr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?La:e?Ia:Lt;return!e&&Dt(s,"iterate",l?Da:Ni),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function kd(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(ci(r,a)&&Dt(o,"get",r),Dt(o,"get",a));const{has:l}=_s(o),c=e?La:n?Ia:Lt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Dt(tt(r),"iterate",Ni),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(ci(r,a)&&Dt(o,"has",r),Dt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?La:n?Ia:Lt;return!n&&Dt(l,"iterate",Ni),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return It(t,n?{add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear")}:{add(r){!e&&!on(r)&&!Fi(r)&&(r=tt(r));const s=tt(this);return _s(s).has.call(s,r)||(s.add(r),Bn(s,"add",r,r)),this},set(r,s){!e&&!on(s)&&!Fi(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=_s(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ci(s,u)&&Bn(o,"set",r,s):Bn(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=_s(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Bn(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&Bn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hd(r,n,e)}),t}function kl(n,e){const t=kd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Vd={get:kl(!1,!1)},Gd={get:kl(!1,!0)},Wd={get:kl(!0,!1)};const Pf=new WeakMap,Df=new WeakMap,Lf=new WeakMap,Xd=new WeakMap;function qd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yd(n){return n.__v_skip||!Object.isExtensible(n)?0:qd(xd(n))}function yo(n){return Fi(n)?n:Vl(n,!1,Od,Vd,Pf)}function If(n){return Vl(n,!1,zd,Gd,Df)}function Uf(n){return Vl(n,!0,Bd,Wd,Lf)}function Vl(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Yd(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function pr(n){return Fi(n)?pr(n.__v_raw):!!(n&&n.__v_isReactive)}function Fi(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function Gl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function jd(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&mf(n,"__v_skip",!0),n}const Lt=n=>ht(n)?yo(n):n,Ia=n=>ht(n)?Uf(n):n;function At(n){return n?n.__v_isRef===!0:!1}function Zt(n){return Nf(n,!1)}function $d(n){return Nf(n,!0)}function Nf(n,e){return At(n)?n:new Kd(n,e)}class Kd{constructor(e,t){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||on(e)||Fi(e);e=i?e:tt(e),ci(e,t)&&(this._rawValue=e,this._value=i?e:Lt(e),this.dep.trigger())}}function ze(n){return At(n)?n.value:n}const Zd={get:(n,e,t)=>e==="__v_raw"?n:ze(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ff(n){return pr(n)?n:new Proxy(n,Zd)}class Jd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return Mf(this,!0),!0}get value(){const e=this.dep.track();return Tf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qd(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new Jd(i,r,t)}const vs={},oo=new WeakMap;let Ci;function ep(n,e=!1,t=Ci){if(t){let i=oo.get(t);i||oo.set(t,i=[]),i.push(n)}}function tp(n,e,t=lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=M=>r?M:on(M)||r===!1||r===0?zn(M,1):zn(M);let u,f,h,d,g=!1,S=!1;if(At(n)?(f=()=>n.value,g=on(n)):pr(n)?(f=()=>c(n),g=!0):He(n)?(S=!0,g=n.some(M=>pr(M)||on(M)),f=()=>n.map(M=>{if(At(M))return M.value;if(pr(M))return c(M);if(Ve(M))return l?l(M,2):M()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){gi();try{h()}finally{vi()}}const M=Ci;Ci=u;try{return l?l(n,3,[d]):n(d)}finally{Ci=M}}:f=bn,e&&r){const M=f,D=r===!0?1/0:r;f=()=>zn(M(),D)}const m=Cd(),p=()=>{u.stop(),m&&m.active&&Ul(m.effects,u)};if(s&&e){const M=e;e=(...D)=>{M(...D),p()}}let R=S?new Array(n.length).fill(vs):vs;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const D=u.run();if(r||g||(S?D.some((P,L)=>ci(P,R[L])):ci(D,R))){h&&h();const P=Ci;Ci=u;try{const L=[D,R===vs?void 0:S&&R[0]===vs?[]:R,d];l?l(e,3,L):e(...L),R=D}finally{Ci=P}}}else u.run()};return a&&a(T),u=new xf(f),u.scheduler=o?()=>o(T,!1):T,d=M=>ep(M,!1,u),h=u.onStop=()=>{const M=oo.get(u);if(M){if(l)l(M,4);else for(const D of M)D();oo.delete(u)}},e?i?T(!0):R=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function zn(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,At(n))zn(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)zn(n[i],e,t);else if(uf(n)||dr(n))n.forEach(i=>{zn(i,e,t)});else if(df(n)){for(const i in n)zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function as(n,e,t,i){try{return i?n(...i):n()}catch(r){To(r,e,t)}}function wn(n,e,t,i){if(Ve(n)){const r=as(n,e,t,i);return r&&ff(r)&&r.catch(s=>{To(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(wn(n[s],e,t,i));return r}}function To(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){gi(),as(s,null,10,[n,l,c]),vi();return}}np(n,t,r,i,o)}function np(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let Sn=-1;const mr=[];let ri=null,or=0;const Of=Promise.resolve();let ao=null;function Bf(n){const e=ao||Of;return n?e.then(this?n.bind(this):n):e}function ip(n){let e=Sn+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=Jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Wl(n){if(!(n.flags&1)){const e=Jr(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=Jr(t)?Ot.push(n):Ot.splice(ip(e),0,n),n.flags|=1,zf()}}function zf(){ao||(ao=Of.then(kf))}function rp(n){He(n)?mr.push(...n):ri&&n.id===-1?ri.splice(or+1,0,n):n.flags&1||(mr.push(n),n.flags|=1),zf()}function vc(n,e,t=Sn+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Hf(n){if(mr.length){const e=[...new Set(mr)].sort((t,i)=>Jr(t)-Jr(i));if(mr.length=0,ri){ri.push(...e);return}for(ri=e,or=0;or<ri.length;or++){const t=ri[or];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ri=null,or=0}}const Jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function kf(n){try{for(Sn=0;Sn<Ot.length;Sn++){const e=Ot[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),as(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<Ot.length;Sn++){const e=Ot[Sn];e&&(e.flags&=-2)}Sn=-1,Ot.length=0,Hf(),ao=null,(Ot.length||mr.length)&&kf()}}let sn=null,Vf=null;function lo(n){const e=sn;return sn=n,Vf=n&&n.type.__scopeId||null,e}function Xs(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&wc(-1);const s=lo(e);let o;try{o=n(...r)}finally{lo(s),i._d&&wc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gf(n,e){if(sn===null)return n;const t=Co(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=lt]=e[r];s&&(Ve(s)&&(s={mounted:s,updated:s}),s.deep&&zn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Mi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(gi(),wn(l,t,8,[n.el,a,n,e]),vi())}}const sp=Symbol("_vte"),op=n=>n.__isTeleport;function Xl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Xl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vi(n,e){return Ve(n)?It({name:n.name},e,{setup:n}):n}function Wf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function co(n,e,t,i,r=!1){if(He(n)){n.forEach((g,S)=>co(g,e&&(He(e)?e[S]:e),t,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&co(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Co(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState,h=tt(f),d=f===lt?()=>!1:g=>nt(h,g);if(c!=null&&c!==l&&(St(c)?(u[c]=null,d(c)&&(f[c]=null)):At(c)&&(c.value=null)),Ve(l))as(l,a,12,[o,u]);else{const g=St(l),S=At(l);if(g||S){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?He(p)&&Ul(p,s):He(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,$t(m,t)):m()}}}Mo().requestIdleCallback;Mo().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,Xf=n=>n.type.__isKeepAlive;function ap(n,e){qf(n,"a",e)}function lp(n,e){qf(n,"da",e)}function qf(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(bo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Xf(r.parent.vnode)&&cp(i,e,t,r),r=r.parent}}function cp(n,e,t,i){const r=bo(e,n,i,!0);jf(()=>{Ul(i[e],r)},t)}function bo(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{gi();const a=ls(t),l=wn(e,t,n,o);return a(),vi(),l});return i?r.unshift(s):r.push(s),s}}const jn=n=>(e,t=Bt)=>{(!es||n==="sp")&&bo(n,(...i)=>e(...i),t)},up=jn("bm"),Ao=jn("m"),fp=jn("bu"),hp=jn("u"),Yf=jn("bum"),jf=jn("um"),dp=jn("sp"),pp=jn("rtg"),mp=jn("rtc");function _p(n,e=Bt){bo("ec",n,e)}const gp=Symbol.for("v-ndc");function GE(n,e,t,i){let r;const s=t,o=He(n);if(o||St(n)){const a=o&&pr(n);let l=!1;a&&(l=!on(n),n=Eo(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Lt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ua=n=>n?_h(n)?Co(n):Ua(n.parent):null,qr=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ua(n.parent),$root:n=>Ua(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kf(n),$forceUpdate:n=>n.f||(n.f=()=>{Wl(n.update)}),$nextTick:n=>n.n||(n.n=Bf.bind(n.proxy)),$watch:n=>Bp.bind(n)}),Go=(n,e)=>n!==lt&&!n.__isScriptSetup&&nt(n,e),vp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Go(i,e))return o[e]=1,i[e];if(r!==lt&&nt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(t!==lt&&nt(t,e))return o[e]=4,t[e];Na&&(o[e]=0)}}const u=qr[e];let f,h;if(u)return e==="$attrs"&&Dt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==lt&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Go(r,e)?(r[e]=t,!0):i!==lt&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==lt&&nt(n,o)||Go(e,o)||(a=s[0])&&nt(a,o)||nt(i,o)||nt(qr,o)||nt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Na=!0;function xp(n){const e=Kf(n),t=n.proxy,i=n.ctx;Na=!1,e.beforeCreate&&Sc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:S,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:T,unmounted:M,render:D,renderTracked:P,renderTriggered:L,errorCaptured:B,serverPrefetch:b,expose:y,inheritAttrs:I,components:ee,directives:q,filters:ne}=e;if(c&&Sp(c,i,null),o)for(const re in o){const H=o[re];Ve(H)&&(i[re]=H.bind(t))}if(r){const re=r.call(t,t);ht(re)&&(n.data=yo(re))}if(Na=!0,s)for(const re in s){const H=s[re],me=Ve(H)?H.bind(t,t):Ve(H.get)?H.get.bind(t,t):bn,xe=!Ve(H)&&Ve(H.set)?H.set.bind(t):bn,Ae=hn({get:me,set:xe});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:De=>Ae.value=De})}if(a)for(const re in a)$f(a[re],i,t,re);if(l){const re=Ve(l)?l.call(t):l;Reflect.ownKeys(re).forEach(H=>{qs(H,re[H])})}u&&Sc(u,n,"c");function K(re,H){He(H)?H.forEach(me=>re(me.bind(t))):H&&re(H.bind(t))}if(K(up,f),K(Ao,h),K(fp,d),K(hp,g),K(ap,S),K(lp,m),K(_p,B),K(mp,P),K(pp,L),K(Yf,R),K(jf,M),K(dp,b),He(y))if(y.length){const re=n.exposed||(n.exposed={});y.forEach(H=>{Object.defineProperty(re,H,{get:()=>t[H],set:me=>t[H]=me})})}else n.exposed||(n.exposed={});D&&n.render===bn&&(n.render=D),I!=null&&(n.inheritAttrs=I),ee&&(n.components=ee),q&&(n.directives=q),b&&Wf(n)}function Sp(n,e,t=bn){He(n)&&(n=Fa(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=_n(r.from||i,r.default,!0):s=_n(r.from||i):s=_n(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Sc(n,e,t){wn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $f(n,e,t,i){let r=i.includes(".")?uh(t,i):()=>t[i];if(St(n)){const s=e[n];Ve(s)&&Ys(r,s)}else if(Ve(n))Ys(r,n.bind(t));else if(ht(n))if(He(n))n.forEach(s=>$f(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Ys(r,s,n)}}function Kf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>uo(l,c,o,!0)),uo(l,e,o)),ht(e)&&s.set(e,l),l}function uo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&uo(n,s,t,!0),r&&r.forEach(o=>uo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Mp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Mp={data:Mc,props:Ec,emits:Ec,methods:Hr,computed:Hr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Hr,directives:Hr,watch:yp,provide:Mc,inject:Ep};function Mc(n,e){return e?n?function(){return It(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Ep(n,e){return Hr(Fa(n),Fa(e))}function Fa(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Hr(n,e){return n?It(Object.create(null),n,e):e}function Ec(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:It(Object.create(null),xc(n),xc(e??{})):e}function yp(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Zf(){return{app:null,config:{isNativeTag:gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tp=0;function bp(n,e){return function(i,r=null){Ve(i)||(i=It({},i)),r!=null&&!ht(r)&&(r=null);const s=Zf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Tp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:sm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||xt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Co(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(wn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=_r;_r=c;try{return u()}finally{_r=f}}};return c}}let _r=null;function qs(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function _n(n,e,t=!1){const i=Bt||sn;if(i||_r){const r=_r?_r._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Jf={},Qf=()=>Object.create(Jf),eh=n=>Object.getPrototypeOf(n)===Jf;function Ap(n,e,t,i=!1){const r={},s=Qf();n.propsDefaults=Object.create(null),th(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:If(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function wp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(wo(n.emitsOptions,h))continue;const d=e[h];if(l)if(nt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=di(h);r[g]=Oa(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{th(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=ki(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Oa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&Bn(n.attrs,"set","")}function th(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vr(l))continue;const c=e[l];let u;r&&nt(r,u=di(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Oa(r,l,f,c[f],n,!nt(c,f))}}return o}function Oa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ls(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ki(t))&&(i=!0))}return i}const Rp=new WeakMap;function nh(n,e,t=!1){const i=t?Rp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,d]=nh(f,e,!0);It(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,hr),hr;if(He(s))for(let u=0;u<s.length;u++){const f=di(s[u]);yc(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=di(u);if(yc(f)){const h=s[u],d=o[f]=He(h)||Ve(h)?{type:h}:It({},h),g=d.type;let S=!1,m=!0;if(He(g))for(let p=0;p<g.length;++p){const R=g[p],T=Ve(R)&&R.name;if(T==="Boolean"){S=!0;break}else T==="String"&&(m=!1)}else S=Ve(g)&&g.name==="Boolean";d[0]=S,d[1]=m,(S||nt(d,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function yc(n){return n[0]!=="$"&&!Vr(n)}const ih=n=>n[0]==="_"||n==="$stable",ql=n=>He(n)?n.map(En):[En(n)],Cp=(n,e,t)=>{if(e._n)return e;const i=Xs((...r)=>ql(e(...r)),t);return i._c=!1,i},rh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ih(r))continue;const s=n[r];if(Ve(s))e[r]=Cp(r,s,i);else if(s!=null){const o=ql(s);e[r]=()=>o}}},sh=(n,e)=>{const t=ql(e);n.slots.default=()=>t},oh=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Pp=(n,e,t)=>{const i=n.slots=Qf();if(n.vnode.shapeFlag&32){const r=e._;r?(oh(i,e,t),t&&mf(i,"_",r,!0)):rh(e,i)}else e&&sh(n,e)},Dp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:oh(r,e,t):(s=!e.$stable,rh(e,r)),o=e}else e&&(sh(n,e),o={default:1});if(s)for(const a in r)!ih(a)&&o[a]==null&&delete r[a]},$t=Xp;function Lp(n){return Ip(n)}function Ip(n,e){const t=Mo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=bn,insertStaticContent:g}=n,S=(A,w,v,Q=null,j=null,G=null,Z=void 0,le=null,$=!!w.dynamicChildren)=>{if(A===w)return;A&&!Lr(A,w)&&(Q=U(A),De(A,j,G,!0),A=null),w.patchFlag===-2&&($=!1,w.dynamicChildren=null);const{type:x,ref:_,shapeFlag:C}=w;switch(x){case Ro:m(A,w,v,Q);break;case Oi:p(A,w,v,Q);break;case js:A==null&&R(w,v,Q,Z);break;case Mn:ee(A,w,v,Q,j,G,Z,le,$);break;default:C&1?D(A,w,v,Q,j,G,Z,le,$):C&6?q(A,w,v,Q,j,G,Z,le,$):(C&64||C&128)&&x.process(A,w,v,Q,j,G,Z,le,$,ae)}_!=null&&j&&co(_,A&&A.ref,G,w||A,!w)},m=(A,w,v,Q)=>{if(A==null)i(w.el=a(w.children),v,Q);else{const j=w.el=A.el;w.children!==A.children&&c(j,w.children)}},p=(A,w,v,Q)=>{A==null?i(w.el=l(w.children||""),v,Q):w.el=A.el},R=(A,w,v,Q)=>{[A.el,A.anchor]=g(A.children,w,v,Q,A.el,A.anchor)},T=({el:A,anchor:w},v,Q)=>{let j;for(;A&&A!==w;)j=h(A),i(A,v,Q),A=j;i(w,v,Q)},M=({el:A,anchor:w})=>{let v;for(;A&&A!==w;)v=h(A),r(A),A=v;r(w)},D=(A,w,v,Q,j,G,Z,le,$)=>{w.type==="svg"?Z="svg":w.type==="math"&&(Z="mathml"),A==null?P(w,v,Q,j,G,Z,le,$):b(A,w,j,G,Z,le,$)},P=(A,w,v,Q,j,G,Z,le)=>{let $,x;const{props:_,shapeFlag:C,transition:z,dirs:W}=A;if($=A.el=o(A.type,G,_&&_.is,_),C&8?u($,A.children):C&16&&B(A.children,$,null,Q,j,Wo(A,G),Z,le),W&&Mi(A,null,Q,"created"),L($,A,A.scopeId,Z,Q),_){for(const pe in _)pe!=="value"&&!Vr(pe)&&s($,pe,null,_[pe],G,Q);"value"in _&&s($,"value",null,_.value,G),(x=_.onVnodeBeforeMount)&&xn(x,Q,A)}W&&Mi(A,null,Q,"beforeMount");const V=Up(j,z);V&&z.beforeEnter($),i($,w,v),((x=_&&_.onVnodeMounted)||V||W)&&$t(()=>{x&&xn(x,Q,A),V&&z.enter($),W&&Mi(A,null,Q,"mounted")},j)},L=(A,w,v,Q,j)=>{if(v&&d(A,v),Q)for(let G=0;G<Q.length;G++)d(A,Q[G]);if(j){let G=j.subTree;if(w===G||hh(G.type)&&(G.ssContent===w||G.ssFallback===w)){const Z=j.vnode;L(A,Z,Z.scopeId,Z.slotScopeIds,j.parent)}}},B=(A,w,v,Q,j,G,Z,le,$=0)=>{for(let x=$;x<A.length;x++){const _=A[x]=le?si(A[x]):En(A[x]);S(null,_,w,v,Q,j,G,Z,le)}},b=(A,w,v,Q,j,G,Z)=>{const le=w.el=A.el;let{patchFlag:$,dynamicChildren:x,dirs:_}=w;$|=A.patchFlag&16;const C=A.props||lt,z=w.props||lt;let W;if(v&&Ei(v,!1),(W=z.onVnodeBeforeUpdate)&&xn(W,v,w,A),_&&Mi(w,A,v,"beforeUpdate"),v&&Ei(v,!0),(C.innerHTML&&z.innerHTML==null||C.textContent&&z.textContent==null)&&u(le,""),x?y(A.dynamicChildren,x,le,v,Q,Wo(w,j),G):Z||H(A,w,le,null,v,Q,Wo(w,j),G,!1),$>0){if($&16)I(le,C,z,v,j);else if($&2&&C.class!==z.class&&s(le,"class",null,z.class,j),$&4&&s(le,"style",C.style,z.style,j),$&8){const V=w.dynamicProps;for(let pe=0;pe<V.length;pe++){const ce=V[pe],we=C[ce],Ce=z[ce];(Ce!==we||ce==="value")&&s(le,ce,we,Ce,j,v)}}$&1&&A.children!==w.children&&u(le,w.children)}else!Z&&x==null&&I(le,C,z,v,j);((W=z.onVnodeUpdated)||_)&&$t(()=>{W&&xn(W,v,w,A),_&&Mi(w,A,v,"updated")},Q)},y=(A,w,v,Q,j,G,Z)=>{for(let le=0;le<w.length;le++){const $=A[le],x=w[le],_=$.el&&($.type===Mn||!Lr($,x)||$.shapeFlag&70)?f($.el):v;S($,x,_,null,Q,j,G,Z,!0)}},I=(A,w,v,Q,j)=>{if(w!==v){if(w!==lt)for(const G in w)!Vr(G)&&!(G in v)&&s(A,G,w[G],null,j,Q);for(const G in v){if(Vr(G))continue;const Z=v[G],le=w[G];Z!==le&&G!=="value"&&s(A,G,le,Z,j,Q)}"value"in v&&s(A,"value",w.value,v.value,j)}},ee=(A,w,v,Q,j,G,Z,le,$)=>{const x=w.el=A?A.el:a(""),_=w.anchor=A?A.anchor:a("");let{patchFlag:C,dynamicChildren:z,slotScopeIds:W}=w;W&&(le=le?le.concat(W):W),A==null?(i(x,v,Q),i(_,v,Q),B(w.children||[],v,_,j,G,Z,le,$)):C>0&&C&64&&z&&A.dynamicChildren?(y(A.dynamicChildren,z,v,j,G,Z,le),(w.key!=null||j&&w===j.subTree)&&ah(A,w,!0)):H(A,w,v,_,j,G,Z,le,$)},q=(A,w,v,Q,j,G,Z,le,$)=>{w.slotScopeIds=le,A==null?w.shapeFlag&512?j.ctx.activate(w,v,Q,Z,$):ne(w,v,Q,j,G,Z,$):fe(A,w,$)},ne=(A,w,v,Q,j,G,Z)=>{const le=A.component=Qp(A,Q,j);if(Xf(A)&&(le.ctx.renderer=ae),em(le,!1,Z),le.asyncDep){if(j&&j.registerDep(le,K,Z),!A.el){const $=le.subTree=xt(Oi);p(null,$,w,v)}}else K(le,A,w,v,j,G,Z)},fe=(A,w,v)=>{const Q=w.component=A.component;if(Gp(A,w,v))if(Q.asyncDep&&!Q.asyncResolved){re(Q,w,v);return}else Q.next=w,Q.update();else w.el=A.el,Q.vnode=w},K=(A,w,v,Q,j,G,Z)=>{const le=()=>{if(A.isMounted){let{next:C,bu:z,u:W,parent:V,vnode:pe}=A;{const ve=lh(A);if(ve){C&&(C.el=pe.el,re(A,C,Z)),ve.asyncDep.then(()=>{A.isUnmounted||le()});return}}let ce=C,we;Ei(A,!1),C?(C.el=pe.el,re(A,C,Z)):C=pe,z&&Ws(z),(we=C.props&&C.props.onVnodeBeforeUpdate)&&xn(we,V,C,pe),Ei(A,!0);const Ce=bc(A),ue=A.subTree;A.subTree=Ce,S(ue,Ce,f(ue.el),U(ue),A,j,G),C.el=Ce.el,ce===null&&Wp(A,Ce.el),W&&$t(W,j),(we=C.props&&C.props.onVnodeUpdated)&&$t(()=>xn(we,V,C,pe),j)}else{let C;const{el:z,props:W}=w,{bm:V,m:pe,parent:ce,root:we,type:Ce}=A,ue=Xr(w);Ei(A,!1),V&&Ws(V),!ue&&(C=W&&W.onVnodeBeforeMount)&&xn(C,ce,w),Ei(A,!0);{we.ce&&we.ce._injectChildStyle(Ce);const ve=A.subTree=bc(A);S(null,ve,v,Q,A,j,G),w.el=ve.el}if(pe&&$t(pe,j),!ue&&(C=W&&W.onVnodeMounted)){const ve=w;$t(()=>xn(C,ce,ve),j)}(w.shapeFlag&256||ce&&Xr(ce.vnode)&&ce.vnode.shapeFlag&256)&&A.a&&$t(A.a,j),A.isMounted=!0,w=v=Q=null}};A.scope.on();const $=A.effect=new xf(le);A.scope.off();const x=A.update=$.run.bind($),_=A.job=$.runIfDirty.bind($);_.i=A,_.id=A.uid,$.scheduler=()=>Wl(_),Ei(A,!0),x()},re=(A,w,v)=>{w.component=A;const Q=A.vnode.props;A.vnode=w,A.next=null,wp(A,w.props,Q,v),Dp(A,w.children,v),gi(),vc(A),vi()},H=(A,w,v,Q,j,G,Z,le,$=!1)=>{const x=A&&A.children,_=A?A.shapeFlag:0,C=w.children,{patchFlag:z,shapeFlag:W}=w;if(z>0){if(z&128){xe(x,C,v,Q,j,G,Z,le,$);return}else if(z&256){me(x,C,v,Q,j,G,Z,le,$);return}}W&8?(_&16&&Se(x,j,G),C!==x&&u(v,C)):_&16?W&16?xe(x,C,v,Q,j,G,Z,le,$):Se(x,j,G,!0):(_&8&&u(v,""),W&16&&B(C,v,Q,j,G,Z,le,$))},me=(A,w,v,Q,j,G,Z,le,$)=>{A=A||hr,w=w||hr;const x=A.length,_=w.length,C=Math.min(x,_);let z;for(z=0;z<C;z++){const W=w[z]=$?si(w[z]):En(w[z]);S(A[z],W,v,null,j,G,Z,le,$)}x>_?Se(A,j,G,!0,!1,C):B(w,v,Q,j,G,Z,le,$,C)},xe=(A,w,v,Q,j,G,Z,le,$)=>{let x=0;const _=w.length;let C=A.length-1,z=_-1;for(;x<=C&&x<=z;){const W=A[x],V=w[x]=$?si(w[x]):En(w[x]);if(Lr(W,V))S(W,V,v,null,j,G,Z,le,$);else break;x++}for(;x<=C&&x<=z;){const W=A[C],V=w[z]=$?si(w[z]):En(w[z]);if(Lr(W,V))S(W,V,v,null,j,G,Z,le,$);else break;C--,z--}if(x>C){if(x<=z){const W=z+1,V=W<_?w[W].el:Q;for(;x<=z;)S(null,w[x]=$?si(w[x]):En(w[x]),v,V,j,G,Z,le,$),x++}}else if(x>z)for(;x<=C;)De(A[x],j,G,!0),x++;else{const W=x,V=x,pe=new Map;for(x=V;x<=z;x++){const _e=w[x]=$?si(w[x]):En(w[x]);_e.key!=null&&pe.set(_e.key,x)}let ce,we=0;const Ce=z-V+1;let ue=!1,ve=0;const Pe=new Array(Ce);for(x=0;x<Ce;x++)Pe[x]=0;for(x=W;x<=C;x++){const _e=A[x];if(we>=Ce){De(_e,j,G,!0);continue}let Oe;if(_e.key!=null)Oe=pe.get(_e.key);else for(ce=V;ce<=z;ce++)if(Pe[ce-V]===0&&Lr(_e,w[ce])){Oe=ce;break}Oe===void 0?De(_e,j,G,!0):(Pe[Oe-V]=x+1,Oe>=ve?ve=Oe:ue=!0,S(_e,w[Oe],v,null,j,G,Z,le,$),we++)}const Ne=ue?Np(Pe):hr;for(ce=Ne.length-1,x=Ce-1;x>=0;x--){const _e=V+x,Oe=w[_e],ke=_e+1<_?w[_e+1].el:Q;Pe[x]===0?S(null,Oe,v,ke,j,G,Z,le,$):ue&&(ce<0||x!==Ne[ce]?Ae(Oe,v,ke,2):ce--)}}},Ae=(A,w,v,Q,j=null)=>{const{el:G,type:Z,transition:le,children:$,shapeFlag:x}=A;if(x&6){Ae(A.component.subTree,w,v,Q);return}if(x&128){A.suspense.move(w,v,Q);return}if(x&64){Z.move(A,w,v,ae);return}if(Z===Mn){i(G,w,v);for(let C=0;C<$.length;C++)Ae($[C],w,v,Q);i(A.anchor,w,v);return}if(Z===js){T(A,w,v);return}if(Q!==2&&x&1&&le)if(Q===0)le.beforeEnter(G),i(G,w,v),$t(()=>le.enter(G),j);else{const{leave:C,delayLeave:z,afterLeave:W}=le,V=()=>i(G,w,v),pe=()=>{C(G,()=>{V(),W&&W()})};z?z(G,V,pe):pe()}else i(G,w,v)},De=(A,w,v,Q=!1,j=!1)=>{const{type:G,props:Z,ref:le,children:$,dynamicChildren:x,shapeFlag:_,patchFlag:C,dirs:z,cacheIndex:W}=A;if(C===-2&&(j=!1),le!=null&&co(le,null,v,A,!0),W!=null&&(w.renderCache[W]=void 0),_&256){w.ctx.deactivate(A);return}const V=_&1&&z,pe=!Xr(A);let ce;if(pe&&(ce=Z&&Z.onVnodeBeforeUnmount)&&xn(ce,w,A),_&6)de(A.component,v,Q);else{if(_&128){A.suspense.unmount(v,Q);return}V&&Mi(A,null,w,"beforeUnmount"),_&64?A.type.remove(A,w,v,ae,Q):x&&!x.hasOnce&&(G!==Mn||C>0&&C&64)?Se(x,w,v,!1,!0):(G===Mn&&C&384||!j&&_&16)&&Se($,w,v),Q&&je(A)}(pe&&(ce=Z&&Z.onVnodeUnmounted)||V)&&$t(()=>{ce&&xn(ce,w,A),V&&Mi(A,null,w,"unmounted")},v)},je=A=>{const{type:w,el:v,anchor:Q,transition:j}=A;if(w===Mn){te(v,Q);return}if(w===js){M(A);return}const G=()=>{r(v),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(A.shapeFlag&1&&j&&!j.persisted){const{leave:Z,delayLeave:le}=j,$=()=>Z(v,G);le?le(A.el,G,$):$()}else G()},te=(A,w)=>{let v;for(;A!==w;)v=h(A),r(A),A=v;r(w)},de=(A,w,v)=>{const{bum:Q,scope:j,job:G,subTree:Z,um:le,m:$,a:x}=A;Tc($),Tc(x),Q&&Ws(Q),j.stop(),G&&(G.flags|=8,De(Z,A,w,v)),le&&$t(le,w),$t(()=>{A.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Se=(A,w,v,Q=!1,j=!1,G=0)=>{for(let Z=G;Z<A.length;Z++)De(A[Z],w,v,Q,j)},U=A=>{if(A.shapeFlag&6)return U(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const w=h(A.anchor||A.el),v=w&&w[sp];return v?h(v):w};let ie=!1;const oe=(A,w,v)=>{A==null?w._vnode&&De(w._vnode,null,null,!0):S(w._vnode||null,A,w,null,null,null,v),w._vnode=A,ie||(ie=!0,vc(),Hf(),ie=!1)},ae={p:S,um:De,m:Ae,r:je,mt:ne,mc:B,pc:H,pbc:y,n:U,o:n};return{render:oe,hydrate:void 0,createApp:bp(oe)}}function Wo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ei({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Up(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ah(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&ah(o,a)),a.type===Ro&&(a.el=o.el)}}function Np(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function lh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lh(e)}function Tc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Fp=Symbol.for("v-scx"),Op=()=>_n(Fp);function Ys(n,e,t){return ch(n,e,t)}function ch(n,e,t=lt){const{immediate:i,deep:r,flush:s,once:o}=t,a=It({},t),l=e&&i||!e&&s!=="post";let c;if(es){if(s==="sync"){const d=Op();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=bn,d.resume=bn,d.pause=bn,d}}const u=Bt;a.call=(d,g,S)=>wn(d,u,g,S);let f=!1;s==="post"?a.scheduler=d=>{$t(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Wl(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=tp(n,e,a);return es&&(c?c.push(h):l&&h()),h}function Bp(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?uh(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=ls(this),a=ch(r,s.bind(i),t);return o(),a}function uh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const zp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${di(e)}Modifiers`]||n[`${ki(e)}Modifiers`];function Hp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&zp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>St(u)?u.trim():u)),o.number&&(r=t.map(Ra)));let a,l=i[a=Bo(e)]||i[a=Bo(di(e))];!l&&s&&(l=i[a=Bo(ki(e))]),l&&wn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,wn(c,n,6,r)}}function fh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=fh(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):It(o,s),ht(n)&&i.set(n,o),o)}function wo(n,e){return!n||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,ki(e))||nt(n,e))}function bc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:S}=n,m=lo(n);let p,R;try{if(t.shapeFlag&4){const M=r||i,D=M;p=En(c.call(D,M,u,f,d,h,g)),R=a}else{const M=e;p=En(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),R=e.props?a:kp(a)}}catch(M){Yr.length=0,To(M,n,1),p=xt(Oi)}let T=p;if(R&&S!==!1){const M=Object.keys(R),{shapeFlag:D}=T;M.length&&D&7&&(s&&M.some(Il)&&(R=Vp(R,s)),T=Mr(T,R,!1,!0))}return t.dirs&&(T=Mr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Xl(T,t.transition),p=T,lo(m),p}const kp=n=>{let e;for(const t in n)(t==="class"||t==="style"||vo(t))&&((e||(e={}))[t]=n[t]);return e},Vp=(n,e)=>{const t={};for(const i in n)(!Il(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Gp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ac(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!wo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ac(i,o,c):!0:!!o;return!1}function Ac(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!wo(t,s))return!0}return!1}function Wp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const hh=n=>n.__isSuspense;function Xp(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):rp(n)}const Mn=Symbol.for("v-fgt"),Ro=Symbol.for("v-txt"),Oi=Symbol.for("v-cmt"),js=Symbol.for("v-stc"),Yr=[];let Jt=null;function Pt(n=!1){Yr.push(Jt=n?null:[])}function qp(){Yr.pop(),Jt=Yr[Yr.length-1]||null}let Qr=1;function wc(n,e=!1){Qr+=n,n<0&&Jt&&e&&(Jt.hasOnce=!0)}function dh(n){return n.dynamicChildren=Qr>0?Jt||hr:null,qp(),Qr>0&&Jt&&Jt.push(n),n}function Vt(n,e,t,i,r,s){return dh(at(n,e,t,i,r,s,!0))}function ph(n,e,t,i,r){return dh(xt(n,e,t,i,r,!0))}function fo(n){return n?n.__v_isVNode===!0:!1}function Lr(n,e){return n.type===e.type&&n.key===e.key}const mh=({key:n})=>n??null,$s=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||At(n)||Ve(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function at(n,e=null,t=null,i=0,r=null,s=n===Mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mh(e),ref:e&&$s(e),scopeId:Vf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(Yl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),Qr>0&&!o&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const xt=Yp;function Yp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gp)&&(n=Oi),fo(n)){const a=Mr(n,e,!0);return t&&Yl(a,t),Qr>0&&!s&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(n)]=a:Jt.push(a)),a.patchFlag=-2,a}if(rm(n)&&(n=n.__vccOpts),e){e=jp(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=ui(a)),ht(l)&&(Gl(l)&&!He(l)&&(l=It({},l)),e.style=Fl(l))}const o=St(n)?1:hh(n)?128:op(n)?64:ht(n)?4:Ve(n)?2:0;return at(n,e,t,i,r,o,s,!0)}function jp(n){return n?Gl(n)||eh(n)?It({},n):n:null}function Mr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Kp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&mh(c),ref:e&&e.ref?t&&s?He(s)?s.concat($s(e)):[s,$s(e)]:$s(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mr(n.ssContent),ssFallback:n.ssFallback&&Mr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Xl(u,l.clone(u)),u}function gr(n=" ",e=0){return xt(Ro,null,n,e)}function $p(n,e){const t=xt(js,null,n);return t.staticCount=e,t}function ii(n="",e=!1){return e?(Pt(),ph(Oi,null,n)):xt(Oi,null,n)}function En(n){return n==null||typeof n=="boolean"?xt(Oi):He(n)?xt(Mn,null,n.slice()):fo(n)?si(n):xt(Ro,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mr(n)}function Yl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!eh(e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[gr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Kp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ui([e.class,i.class]));else if(r==="style")e.style=Fl([e.style,i.style]);else if(vo(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function xn(n,e,t,i=null){wn(n,e,7,[t,i])}const Zp=Zf();let Jp=0;function Qp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Zp,s={uid:Jp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nh(i,r),emitsOptions:fh(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hp.bind(null,s),n.ce&&n.ce(s),s}let Bt=null,ho,Ba;{const n=Mo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ho=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),Ba=e("__VUE_SSR_SETTERS__",t=>es=t)}const ls=n=>{const e=Bt;return ho(n),n.scope.on(),()=>{n.scope.off(),ho(e)}},Rc=()=>{Bt&&Bt.scope.off(),ho(null)};function _h(n){return n.vnode.shapeFlag&4}let es=!1;function em(n,e=!1,t=!1){e&&Ba(e);const{props:i,children:r}=n.vnode,s=_h(n);Ap(n,i,s,e),Pp(n,r,t);const o=s?tm(n,e):void 0;return e&&Ba(!1),o}function tm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vp);const{setup:i}=t;if(i){gi();const r=n.setupContext=i.length>1?im(n):null,s=ls(n),o=as(i,n,0,[n.props,r]),a=ff(o);if(vi(),s(),(a||n.sp)&&!Xr(n)&&Wf(n),a){if(o.then(Rc,Rc),e)return o.then(l=>{Cc(n,l)}).catch(l=>{To(l,n,0)});n.asyncDep=o}else Cc(n,o)}else gh(n)}function Cc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Ff(e)),gh(n)}function gh(n,e,t){const i=n.type;n.render||(n.render=i.render||bn);{const r=ls(n);gi();try{xp(n)}finally{vi(),r()}}}const nm={get(n,e){return Dt(n,"get",""),n[e]}};function im(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,nm),slots:n.slots,emit:n.emit,expose:e}}function Co(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ff(jd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function rm(n){return Ve(n)&&"__vccOpts"in n}const hn=(n,e)=>Qd(n,e,es);function vh(n,e,t){const i=arguments.length;return i===2?ht(e)&&!He(e)?fo(e)?xt(n,null,[e]):xt(n,e):xt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&fo(t)&&(t=[t]),xt(n,e,t))}const sm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let za;const Pc=typeof window<"u"&&window.trustedTypes;if(Pc)try{za=Pc.createPolicy("vue",{createHTML:n=>n})}catch{}const xh=za?n=>za.createHTML(n):n=>n,om="http://www.w3.org/2000/svg",am="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Dc=On&&On.createElement("template"),lm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?On.createElementNS(om,n):e==="mathml"?On.createElementNS(am,n):t?On.createElement(n,{is:t}):On.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Dc.innerHTML=xh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Dc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cm=Symbol("_vtc");function um(n,e,t){const i=n[cm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const po=Symbol("_vod"),Sh=Symbol("_vsh"),fm={beforeMount(n,{value:e},{transition:t}){n[po]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ir(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ir(n,!0),i.enter(n)):i.leave(n,()=>{Ir(n,!1)}):Ir(n,e))},beforeUnmount(n,{value:e}){Ir(n,e)}};function Ir(n,e){n.style.display=e?n[po]:"none",n[Sh]=!e}const hm=Symbol(""),dm=/(^|;)\s*display\s*:/;function pm(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ks(i,a,"")}else for(const o in e)t[o]==null&&Ks(i,o,"");for(const o in t)o==="display"&&(s=!0),Ks(i,o,t[o])}else if(r){if(e!==t){const o=i[hm];o&&(t+=";"+o),i.cssText=t,s=dm.test(t)}}else e&&n.removeAttribute("style");po in n&&(n[po]=s?i.display:"",n[Sh]&&(i.display="none"))}const Lc=/\s*!important$/;function Ks(n,e,t){if(He(t))t.forEach(i=>Ks(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=mm(n,e);Lc.test(t)?n.setProperty(ki(i),t.replace(Lc,""),"important"):n[i]=t}}const Ic=["Webkit","Moz","ms"],Xo={};function mm(n,e){const t=Xo[e];if(t)return t;let i=di(e);if(i!=="filter"&&i in n)return Xo[e]=i;i=pf(i);for(let r=0;r<Ic.length;r++){const s=Ic[r]+i;if(s in n)return Xo[e]=s}return e}const Uc="http://www.w3.org/1999/xlink";function Nc(n,e,t,i,r,s=wd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Uc,e.slice(6,e.length)):n.setAttributeNS(Uc,e,t):t==null||s&&!_f(t)?n.removeAttribute(e):n.setAttribute(e,s?"":_i(t)?String(t):t)}function Fc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?xh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=_f(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function ar(n,e,t,i){n.addEventListener(e,t,i)}function _m(n,e,t,i){n.removeEventListener(e,t,i)}const Oc=Symbol("_vei");function gm(n,e,t,i,r=null){const s=n[Oc]||(n[Oc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=vm(e);if(i){const c=s[e]=Mm(i,r);ar(n,a,c,l)}else o&&(_m(n,a,o,l),s[e]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function vm(n){let e;if(Bc.test(n)){e={};let i;for(;i=n.match(Bc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ki(n.slice(2)),e]}let qo=0;const xm=Promise.resolve(),Sm=()=>qo||(xm.then(()=>qo=0),qo=Date.now());function Mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;wn(Em(i,t.value),e,5,[i])};return t.value=n,t.attached=Sm(),t}function Em(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const zc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ym=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?um(n,i,o):e==="style"?pm(n,t,i):vo(e)?Il(e)||gm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tm(n,e,i,o))?(Fc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?Fc(n,di(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Nc(n,e,i,o))};function Tm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&zc(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return zc(e)&&St(t)?!1:e in n}const Hc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return He(e)?t=>Ws(e,t):e};function bm(n){n.target.composing=!0}function kc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yo=Symbol("_assign"),Am={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Yo]=Hc(r);const s=i||r.props&&r.props.type==="number";ar(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Ra(a)),n[Yo](a)}),t&&ar(n,"change",()=>{n.value=n.value.trim()}),e||(ar(n,"compositionstart",bm),ar(n,"compositionend",kc),ar(n,"change",kc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Yo]=Hc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ra(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},wm=It({patchProp:ym},lm);let Vc;function Rm(){return Vc||(Vc=Lp(wm))}const Cm=(...n)=>{const e=Rm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Dm(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Pm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Pm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Dm(n){return St(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const lr=typeof document<"u";function Mh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Lm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Mh(n.default)}const et=Object.assign;function jo(n,e){const t={};for(const i in e){const r=e[i];t[i]=vn(r)?r.map(n):n(r)}return t}const jr=()=>{},vn=Array.isArray,Eh=/#/g,Im=/&/g,Um=/\//g,Nm=/=/g,Fm=/\?/g,yh=/\+/g,Om=/%5B/g,Bm=/%5D/g,Th=/%5E/g,zm=/%60/g,bh=/%7B/g,Hm=/%7C/g,Ah=/%7D/g,km=/%20/g;function jl(n){return encodeURI(""+n).replace(Hm,"|").replace(Om,"[").replace(Bm,"]")}function Vm(n){return jl(n).replace(bh,"{").replace(Ah,"}").replace(Th,"^")}function Ha(n){return jl(n).replace(yh,"%2B").replace(km,"+").replace(Eh,"%23").replace(Im,"%26").replace(zm,"`").replace(bh,"{").replace(Ah,"}").replace(Th,"^")}function Gm(n){return Ha(n).replace(Nm,"%3D")}function Wm(n){return jl(n).replace(Eh,"%23").replace(Fm,"%3F")}function Xm(n){return n==null?"":Wm(n).replace(Um,"%2F")}function ts(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const qm=/\/$/,Ym=n=>n.replace(qm,"");function $o(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Zm(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ts(o)}}function jm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Gc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function $m(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Er(e.matched[i],t.matched[r])&&wh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Er(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function wh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Km(n[t],e[t]))return!1;return!0}function Km(n,e){return vn(n)?Wc(n,e):vn(e)?Wc(e,n):n===e}function Wc(n,e){return vn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Zm(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ns;(function(n){n.pop="pop",n.push="push"})(ns||(ns={}));var $r;(function(n){n.back="back",n.forward="forward",n.unknown=""})($r||($r={}));function Jm(n){if(!n)if(lr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Ym(n)}const Qm=/^[^#]+#/;function e_(n,e){return n.replace(Qm,"#")+e}function t_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Po=()=>({left:window.scrollX,top:window.scrollY});function n_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=t_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xc(n,e){return(history.state?history.state.position-e:-1)+n}const ka=new Map;function i_(n,e){ka.set(n,e)}function r_(n){const e=ka.get(n);return ka.delete(n),e}let s_=()=>location.protocol+"//"+location.host;function Rh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Gc(l,"")}return Gc(t,n)+i+r}function o_(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=Rh(n,location),g=t.value,S=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=S?h.position-S.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:ns.pop,direction:m?m>0?$r.forward:$r.back:$r.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:Po()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function qc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Po():null}}function a_(n){const{history:e,location:t}=window,i={value:Rh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:s_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,qc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=et({},r.value,e.state,{forward:l,scroll:Po()});s(u.current,u,!0);const f=et({},qc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function l_(n){n=Jm(n);const e=a_(n),t=o_(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=et({location:"",base:n,go:i,createHref:e_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function c_(n){return typeof n=="string"||n&&typeof n=="object"}function Ch(n){return typeof n=="string"||typeof n=="symbol"}const Ph=Symbol("");var Yc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Yc||(Yc={}));function yr(n,e){return et(new Error,{type:n,[Ph]:!0},e)}function Pn(n,e){return n instanceof Error&&Ph in n&&(e==null||!!(n.type&e))}const jc="[^/]+?",u_={sensitive:!1,strict:!1,start:!0,end:!0},f_=/[.+*?^${}()[\]/\\]/g;function h_(n,e){const t=et({},u_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(f_,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:S,optional:m,regexp:p}=h;s.push({name:g,repeatable:S,optional:m});const R=p||jc;if(R!==jc){d+=10;try{new RegExp(`(${R})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+M.message)}}let T=S?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,d+=20,m&&(d+=-8),S&&(d+=-20),R===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:S,optional:m}=d,p=g in c?c[g]:"";if(vn(p)&&!S)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=vn(p)?p.join("/"):p;if(!R)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function d_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Dh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=d_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if($c(i))return 1;if($c(r))return-1}return r.length-i.length}function $c(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const p_={type:0,value:""},m_=/[a-zA-Z0-9_]/;function __(n){if(!n)return[[]];if(n==="/")return[[p_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:m_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function g_(n,e,t){const i=h_(__(n.path),t),r=et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function v_(n,e){const t=[],i=new Map;e=Qc({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,S=Zc(f);S.aliasOf=d&&d.record;const m=Qc(e,f),p=[S];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of M)p.push(Zc(et({},S,{components:d?d.record.components:S.components,path:D,aliasOf:d?d.record:S})))}let R,T;for(const M of p){const{path:D}=M;if(h&&D[0]!=="/"){const P=h.record.path,L=P[P.length-1]==="/"?"":"/";M.path=h.record.path+(D&&L+D)}if(R=g_(M,h,m),d?d.alias.push(R):(T=T||R,T!==R&&T.alias.push(R),g&&f.name&&!Jc(R)&&o(f.name)),Lh(R)&&l(R),S.children){const P=S.children;for(let L=0;L<P.length;L++)s(P[L],R,d&&d.children[L])}d=d||R}return T?()=>{o(T)}:jr}function o(f){if(Ch(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=M_(f,t);t.splice(h,0,f),f.record.name&&!Jc(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},S,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw yr(1,{location:f});m=d.record.name,g=et(Kc(h.params,d.keys.filter(T=>!T.optional).concat(d.parent?d.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Kc(f.params,d.keys.map(T=>T.name))),S=d.stringify(g)}else if(f.path!=null)S=f.path,d=t.find(T=>T.re.test(S)),d&&(g=d.parse(S),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!d)throw yr(1,{location:f,currentLocation:h});m=d.record.name,g=et({},h.params,f.params),S=d.stringify(g)}const p=[];let R=d;for(;R;)p.unshift(R.record),R=R.parent;return{name:m,path:S,params:g,matched:p,meta:S_(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Kc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Zc(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:x_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function x_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Jc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function S_(n){return n.reduce((e,t)=>et(e,t.meta),{})}function Qc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function M_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Dh(n,e[s])<0?i=s:t=s+1}const r=E_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function E_(n){let e=n;for(;e=e.parent;)if(Lh(e)&&Dh(n,e)===0)return e}function Lh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function y_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(yh," "),o=s.indexOf("="),a=ts(o<0?s:s.slice(0,o)),l=o<0?null:ts(s.slice(o+1));if(a in e){let c=e[a];vn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function eu(n){let e="";for(let t in n){const i=n[t];if(t=Gm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(vn(i)?i.map(s=>s&&Ha(s)):[i&&Ha(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function T_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const b_=Symbol(""),tu=Symbol(""),Do=Symbol(""),$l=Symbol(""),Va=Symbol("");function Ur(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function oi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(yr(4,{from:t,to:e})):h instanceof Error?l(h):c_(h)?l(yr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Ko(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Mh(l)){const u=(l.__vccOpts||l)[e];u&&s.push(oi(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Lm(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&oi(d,t,i,o,a,r)()}))}}return s}function nu(n){const e=_n(Do),t=_n($l),i=hn(()=>{const l=ze(n.to);return e.resolve(l)}),r=hn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Er.bind(null,u));if(h>-1)return h;const d=iu(l[c-2]);return c>1&&iu(u)===d&&f[f.length-1].path!==d?f.findIndex(Er.bind(null,l[c-2])):h}),s=hn(()=>r.value>-1&&C_(t.params,i.value.params)),o=hn(()=>r.value>-1&&r.value===t.matched.length-1&&wh(t.params,i.value.params));function a(l={}){if(R_(l)){const c=e[ze(n.replace)?"replace":"push"](ze(n.to)).catch(jr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:hn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function A_(n){return n.length===1?n[0]:n}const w_=Vi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:nu,setup(n,{slots:e}){const t=yo(nu(n)),{options:i}=_n(Do),r=hn(()=>({[ru(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ru(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&A_(e.default(t));return n.custom?s:vh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Zs=w_;function R_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function C_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!vn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function iu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ru=(n,e,t)=>n??e??t,P_=Vi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=_n(Va),r=hn(()=>n.route||i.value),s=_n(tu,0),o=hn(()=>{let c=ze(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=hn(()=>r.value.matched[o.value]);qs(tu,hn(()=>o.value+1)),qs(b_,a),qs(Va,r);const l=Zt();return Ys(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Er(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return su(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=vh(h,et({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return su(t.default,{Component:m,route:c})||m}}});function su(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ih=P_;function D_(n){const e=v_(n.routes,n),t=n.parseQuery||y_,i=n.stringifyQuery||eu,r=n.history,s=Ur(),o=Ur(),a=Ur(),l=$d(Kn);let c=Kn;lr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jo.bind(null,U=>""+U),f=jo.bind(null,Xm),h=jo.bind(null,ts);function d(U,ie){let oe,ae;return Ch(U)?(oe=e.getRecordMatcher(U),ae=ie):ae=U,e.addRoute(ae,oe)}function g(U){const ie=e.getRecordMatcher(U);ie&&e.removeRoute(ie)}function S(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,ie){if(ie=et({},ie||l.value),typeof U=="string"){const v=$o(t,U,ie.path),Q=e.resolve({path:v.path},ie),j=r.createHref(v.fullPath);return et(v,Q,{params:h(Q.params),hash:ts(v.hash),redirectedFrom:void 0,href:j})}let oe;if(U.path!=null)oe=et({},U,{path:$o(t,U.path,ie.path).path});else{const v=et({},U.params);for(const Q in v)v[Q]==null&&delete v[Q];oe=et({},U,{params:f(v)}),ie.params=f(ie.params)}const ae=e.resolve(oe,ie),Ue=U.hash||"";ae.params=u(h(ae.params));const A=jm(i,et({},U,{hash:Vm(Ue),path:ae.path})),w=r.createHref(A);return et({fullPath:A,hash:Ue,query:i===eu?T_(U.query):U.query||{}},ae,{redirectedFrom:void 0,href:w})}function R(U){return typeof U=="string"?$o(t,U,l.value.path):et({},U)}function T(U,ie){if(c!==U)return yr(8,{from:ie,to:U})}function M(U){return L(U)}function D(U){return M(et(R(U),{replace:!0}))}function P(U){const ie=U.matched[U.matched.length-1];if(ie&&ie.redirect){const{redirect:oe}=ie;let ae=typeof oe=="function"?oe(U):oe;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=R(ae):{path:ae},ae.params={}),et({query:U.query,hash:U.hash,params:ae.path!=null?{}:U.params},ae)}}function L(U,ie){const oe=c=p(U),ae=l.value,Ue=U.state,A=U.force,w=U.replace===!0,v=P(oe);if(v)return L(et(R(v),{state:typeof v=="object"?et({},Ue,v.state):Ue,force:A,replace:w}),ie||oe);const Q=oe;Q.redirectedFrom=ie;let j;return!A&&$m(i,ae,oe)&&(j=yr(16,{to:Q,from:ae}),Ae(ae,ae,!0,!1)),(j?Promise.resolve(j):y(Q,ae)).catch(G=>Pn(G)?Pn(G,2)?G:xe(G):H(G,Q,ae)).then(G=>{if(G){if(Pn(G,2))return L(et({replace:w},R(G.to),{state:typeof G.to=="object"?et({},Ue,G.to.state):Ue,force:A}),ie||Q)}else G=ee(Q,ae,!0,w,Ue);return I(Q,ae,G),G})}function B(U,ie){const oe=T(U,ie);return oe?Promise.reject(oe):Promise.resolve()}function b(U){const ie=te.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(U):U()}function y(U,ie){let oe;const[ae,Ue,A]=L_(U,ie);oe=Ko(ae.reverse(),"beforeRouteLeave",U,ie);for(const v of ae)v.leaveGuards.forEach(Q=>{oe.push(oi(Q,U,ie))});const w=B.bind(null,U,ie);return oe.push(w),Se(oe).then(()=>{oe=[];for(const v of s.list())oe.push(oi(v,U,ie));return oe.push(w),Se(oe)}).then(()=>{oe=Ko(Ue,"beforeRouteUpdate",U,ie);for(const v of Ue)v.updateGuards.forEach(Q=>{oe.push(oi(Q,U,ie))});return oe.push(w),Se(oe)}).then(()=>{oe=[];for(const v of A)if(v.beforeEnter)if(vn(v.beforeEnter))for(const Q of v.beforeEnter)oe.push(oi(Q,U,ie));else oe.push(oi(v.beforeEnter,U,ie));return oe.push(w),Se(oe)}).then(()=>(U.matched.forEach(v=>v.enterCallbacks={}),oe=Ko(A,"beforeRouteEnter",U,ie,b),oe.push(w),Se(oe))).then(()=>{oe=[];for(const v of o.list())oe.push(oi(v,U,ie));return oe.push(w),Se(oe)}).catch(v=>Pn(v,8)?v:Promise.reject(v))}function I(U,ie,oe){a.list().forEach(ae=>b(()=>ae(U,ie,oe)))}function ee(U,ie,oe,ae,Ue){const A=T(U,ie);if(A)return A;const w=ie===Kn,v=lr?history.state:{};oe&&(ae||w?r.replace(U.fullPath,et({scroll:w&&v&&v.scroll},Ue)):r.push(U.fullPath,Ue)),l.value=U,Ae(U,ie,oe,w),xe()}let q;function ne(){q||(q=r.listen((U,ie,oe)=>{if(!de.listening)return;const ae=p(U),Ue=P(ae);if(Ue){L(et(Ue,{replace:!0,force:!0}),ae).catch(jr);return}c=ae;const A=l.value;lr&&i_(Xc(A.fullPath,oe.delta),Po()),y(ae,A).catch(w=>Pn(w,12)?w:Pn(w,2)?(L(et(R(w.to),{force:!0}),ae).then(v=>{Pn(v,20)&&!oe.delta&&oe.type===ns.pop&&r.go(-1,!1)}).catch(jr),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),H(w,ae,A))).then(w=>{w=w||ee(ae,A,!1),w&&(oe.delta&&!Pn(w,8)?r.go(-oe.delta,!1):oe.type===ns.pop&&Pn(w,20)&&r.go(-1,!1)),I(ae,A,w)}).catch(jr)}))}let fe=Ur(),K=Ur(),re;function H(U,ie,oe){xe(U);const ae=K.list();return ae.length?ae.forEach(Ue=>Ue(U,ie,oe)):console.error(U),Promise.reject(U)}function me(){return re&&l.value!==Kn?Promise.resolve():new Promise((U,ie)=>{fe.add([U,ie])})}function xe(U){return re||(re=!U,ne(),fe.list().forEach(([ie,oe])=>U?oe(U):ie()),fe.reset()),U}function Ae(U,ie,oe,ae){const{scrollBehavior:Ue}=n;if(!lr||!Ue)return Promise.resolve();const A=!oe&&r_(Xc(U.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return Bf().then(()=>Ue(U,ie,A)).then(w=>w&&n_(w)).catch(w=>H(w,U,ie))}const De=U=>r.go(U);let je;const te=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:S,resolve:p,options:n,push:M,replace:D,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:me,install(U){const ie=this;U.component("RouterLink",Zs),U.component("RouterView",Ih),U.config.globalProperties.$router=ie,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),lr&&!je&&l.value===Kn&&(je=!0,M(r.location).catch(Ue=>{}));const oe={};for(const Ue in Kn)Object.defineProperty(oe,Ue,{get:()=>l.value[Ue],enumerable:!0});U.provide(Do,ie),U.provide($l,If(oe)),U.provide(Va,l);const ae=U.unmount;te.add(U),U.unmount=function(){te.delete(U),te.size<1&&(c=Kn,q&&q(),q=null,l.value=Kn,je=!1,re=!1),ae()}}};function Se(U){return U.reduce((ie,oe)=>ie.then(()=>b(oe)),Promise.resolve())}return de}function L_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Er(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Er(c,l))||r.push(l))}return[t,i,r]}function I_(){return _n(Do)}function U_(n){return _n($l)}const N_="/assets/logo-CVrRAZ0k.png",F_={class:"w-full max-w-4xl mx-auto flex items-center justify-between mb-8"},O_=["src"],B_={class:"flex items-center space-x-4"},z_=Vi({__name:"Navbar",props:{isDark:{type:Boolean}},setup(n){const e=U_(),t=I_();function i(){sessionStorage.setItem("forceReload","true"),t.push("/apod").then(()=>{window.location.reload()})}return(r,s)=>(Pt(),Vt("nav",F_,[at("div",{class:"flex items-center space-x-2 cursor-pointer",onClick:i},[at("img",{src:ze(N_),alt:"Logo",class:"w-7 h-7"},null,8,O_),s[1]||(s[1]=at("span",{class:"text-xl font-bold text-blue-600 dark:text-blue-400"}," NASA Explorer ",-1))]),at("div",B_,[xt(ze(Zs),{to:"/apod",class:ui(["nav-link",{active:ze(e).path==="/apod"}])},{default:Xs(()=>s[2]||(s[2]=[gr("APOD")])),_:1},8,["class"]),xt(ze(Zs),{to:"/asteroids",class:ui(["nav-link",{active:ze(e).path==="/asteroids"}])},{default:Xs(()=>s[3]||(s[3]=[gr("Asteroids")])),_:1},8,["class"]),xt(ze(Zs),{to:"/iss",class:ui(["nav-link",{active:ze(e).path==="/iss"}])},{default:Xs(()=>s[4]||(s[4]=[gr("ISS Tracker")])),_:1},8,["class"]),at("button",{onClick:s[0]||(s[0]=o=>r.$emit("toggle-dark")),class:"ml-4 px-3 py-1 text-sm border rounded bg-gray-100 text-black border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"},cr(r.isDark?"🌞 Light":"🌙 Dark"),1)])]))}}),Kl=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},H_=Kl(z_,[["__scopeId","data-v-6aef763b"]]),k_={class:"mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-6 pb-4 px-4 w-full"},V_=Vi({__name:"Footer",setup(n){return(e,t)=>(Pt(),Vt("footer",k_,t[0]||(t[0]=[$p('<div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 flex-wrap mb-2"><span> Powered by <a href="https://api.nasa.gov/" target="_blank" class="hover:text-blue-600 transition"> NASA Open APIs </a></span><span> Developed with curiosity by <a href="https://github.com/noxYJZeng" target="_blank" class="hover:text-blue-600 transition inline-flex items-center gap-1"> Nox Zeng <i class="fab fa-github text-base"></i></a> © 2025 </span></div><div class="flex justify-center items-center gap-4"><span>Contact:</span><a href="mailto:xzeng97@gatech.edu" class="hover:text-blue-600 transition" title="Email"><i class="fas fa-envelope text-lg"></i></a><a href="https://www.linkedin.com/in/nox-zeng-2a6161294/" target="_blank" class="hover:text-blue-600 transition" title="LinkedIn"><i class="fab fa-linkedin text-lg"></i></a></div>',2)])))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="176",vr={ROTATE:0,DOLLY:1,PAN:2},ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G_=0,ou=1,W_=2,Uh=1,X_=2,Fn=3,pi=0,Gt=1,Hn=2,fi=0,xr=1,Ga=2,au=3,lu=4,q_=5,Di=100,Y_=101,j_=102,$_=103,K_=104,Z_=200,J_=201,Q_=202,eg=203,Wa=204,Xa=205,tg=206,ng=207,ig=208,rg=209,sg=210,og=211,ag=212,lg=213,cg=214,qa=0,Ya=1,ja=2,Tr=3,$a=4,Ka=5,Za=6,Ja=7,Nh=0,ug=1,fg=2,hi=0,hg=1,dg=2,pg=3,mg=4,_g=5,gg=6,vg=7,Fh=300,br=301,Ar=302,Qa=303,el=304,Lo=306,tl=1e3,Ii=1001,nl=1002,gn=1003,xg=1004,xs=1005,Tn=1006,Zo=1007,Ui=1008,qn=1009,Oh=1010,Bh=1011,is=1012,Jl=1013,Bi=1014,kn=1015,cs=1016,Ql=1017,ec=1018,rs=1020,zh=35902,Hh=1021,kh=1022,pn=1023,ss=1026,os=1027,Vh=1028,tc=1029,Gh=1030,nc=1031,ic=1033,Js=33776,Qs=33777,eo=33778,to=33779,il=35840,rl=35841,sl=35842,ol=35843,al=36196,ll=37492,cl=37496,ul=37808,fl=37809,hl=37810,dl=37811,pl=37812,ml=37813,_l=37814,gl=37815,vl=37816,xl=37817,Sl=37818,Ml=37819,El=37820,yl=37821,no=36492,Tl=36494,bl=36495,Wh=36283,Al=36284,wl=36285,Rl=36286,Sg=3200,Mg=3201,Eg=0,yg=1,li="",nn="srgb",wr="srgb-linear",mo="linear",st="srgb",qi=7680,cu=519,Tg=512,bg=513,Ag=514,Xh=515,wg=516,Rg=517,Cg=518,Pg=519,uu=35044,fu="300 es",Vn=2e3,_o=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,Cl=180/Math.PI;function us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Dg(n,e){return(n%e+e)%e}function Jo(n,e,t){return(1-t)*n+t*e}function Nr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Lg={DEG2RAD:io};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],S=r[0],m=r[3],p=r[6],R=r[1],T=r[4],M=r[7],D=r[2],P=r[5],L=r[8];return s[0]=o*S+a*R+l*D,s[3]=o*m+a*T+l*P,s[6]=o*p+a*M+l*L,s[1]=c*S+u*R+f*D,s[4]=c*m+u*T+f*P,s[7]=c*p+u*M+f*L,s[2]=h*S+d*R+g*D,s[5]=h*m+d*T+g*P,s[8]=h*p+d*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=d*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new We;function qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ig(){const n=go("canvas");return n.style.display="block",n}const hu={};function ro(n){n in hu||(hu[n]=!0,console.warn(n))}function Ug(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ng(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const du=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Og(){const n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Sr(r.r),r.g=Sr(r.g),r.b=Sr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?mo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:mo,toXYZ:du,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:du,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const Ze=Og();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class Bg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=go("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zg=0;class rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ea(r[o].image)):s.push(ea(r[o]))}else s=ea(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hg=0;class Wt extends Gi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=Ii,r=Ii,s=Tn,o=Ui,a=pn,l=qn,c=Wt.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=us(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Fh;Wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(d+1)/2,D=(p+1)/2,P=(u+h)/4,L=(f+S)/4,B=(g+m)/4;return T>M&&T>D?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=L/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=B/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=L/s,r=B/s),this.set(i,r,s,t),this}let R=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(f-S)/R,this.z=(h-u)/R,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kg extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new rc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends kg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yh extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vg extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=S;return}if(f!==S||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*S,R=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const D=Math.sqrt(T),P=Math.atan2(D,p*R);m=Math.sin(m*P)/D,a=Math.sin(a*P)/D}const M=a*R;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+S*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new k,mu=new Hi;class fs{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ms.subVectors(this.max,Fr),ji.subVectors(e.a,Fr),$i.subVectors(e.b,Fr),Ki.subVectors(e.c,Fr),Zn.subVectors($i,ji),Jn.subVectors(Ki,$i),yi.subVectors(ji,Ki);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-yi.z,yi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,yi.z,0,-yi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-yi.y,yi.x,0];return!na(t,ji,$i,Ki,Ms)||(t=[1,0,0,0,1,0,0,0,1],!na(t,ji,$i,Ki,Ms))?!1:(Es.crossVectors(Zn,Jn),t=[Es.x,Es.y,Es.z],na(t,ji,$i,Ki,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new k,new k,new k,new k,new k,new k,new k,new k],cn=new k,Ss=new fs,ji=new k,$i=new k,Ki=new k,Zn=new k,Jn=new k,yi=new k,Fr=new k,Ms=new k,Es=new k,Ti=new k;function na(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ti.fromArray(n,s);const a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gg=new fs,Or=new k,ia=new k;class Io{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(ia)),this.expandByPoint(Or.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new k,ra=new k,ys=new k,Qn=new k,sa=new k,Ts=new k,oa=new k;class sc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ra.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=Qn.dot(this.direction),l=-Qn.dot(ys),c=Qn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const S=1/u;f*=S,h*=S,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ra).addScaledVector(ys,h),d}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){sa.subVectors(t,e),Ts.subVectors(i,e),oa.crossVectors(sa,Ts);let o=this.direction.dot(oa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(Ts.crossVectors(Qn,Ts));if(l<0)return null;const c=a*this.direction.dot(sa.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(oa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,S,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,S,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,S=c*f;t[0]=h+S*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,S=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wg,e,Xg)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ei.crossVectors(i,Yt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ei.crossVectors(i,Yt)),ei.normalize(),bs.crossVectors(Yt,ei),r[0]=ei.x,r[4]=bs.x,r[8]=Yt.x,r[1]=ei.y,r[5]=bs.y,r[9]=Yt.y,r[2]=ei.z,r[6]=bs.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],S=i[6],m=i[10],p=i[14],R=i[3],T=i[7],M=i[11],D=i[15],P=r[0],L=r[4],B=r[8],b=r[12],y=r[1],I=r[5],ee=r[9],q=r[13],ne=r[2],fe=r[6],K=r[10],re=r[14],H=r[3],me=r[7],xe=r[11],Ae=r[15];return s[0]=o*P+a*y+l*ne+c*H,s[4]=o*L+a*I+l*fe+c*me,s[8]=o*B+a*ee+l*K+c*xe,s[12]=o*b+a*q+l*re+c*Ae,s[1]=u*P+f*y+h*ne+d*H,s[5]=u*L+f*I+h*fe+d*me,s[9]=u*B+f*ee+h*K+d*xe,s[13]=u*b+f*q+h*re+d*Ae,s[2]=g*P+S*y+m*ne+p*H,s[6]=g*L+S*I+m*fe+p*me,s[10]=g*B+S*ee+m*K+p*xe,s[14]=g*b+S*q+m*re+p*Ae,s[3]=R*P+T*y+M*ne+D*H,s[7]=R*L+T*I+M*fe+D*me,s[11]=R*B+T*ee+M*K+D*xe,s[15]=R*b+T*q+M*re+D*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],S=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+S*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],S=e[13],m=e[14],p=e[15],R=f*m*c-S*h*c+S*l*d-a*m*d-f*l*p+a*h*p,T=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*S*c-g*f*c+g*a*d-o*S*d-u*a*p+o*f*p,D=g*f*l-u*S*l-g*a*h+o*S*h+u*a*m-o*f*m,P=t*R+i*T+r*M+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=R*L,e[1]=(S*h*s-f*m*s-S*r*d+i*m*d+f*r*p-i*h*p)*L,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*p+i*l*p)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*L,e[4]=T*L,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*L,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*L,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*L,e[8]=M*L,e[9]=(g*f*s-u*S*s-g*i*d+t*S*d+u*i*p-t*f*p)*L,e[10]=(o*S*s-g*a*s+g*i*c-t*S*c-o*i*p+t*a*p)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*L,e[12]=D*L,e[13]=(u*S*r-g*f*r+g*i*h-t*S*h-u*i*m+t*f*m)*L,e[14]=(g*a*r-o*S*r-g*i*l+t*S*l+o*i*m-t*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,S=o*u,m=o*f,p=a*f,R=l*c,T=l*u,M=l*f,D=i.x,P=i.y,L=i.z;return r[0]=(1-(S+p))*D,r[1]=(d+M)*D,r[2]=(g-T)*D,r[3]=0,r[4]=(d-M)*P,r[5]=(1-(h+p))*P,r[6]=(m+R)*P,r[7]=0,r[8]=(g+T)*L,r[9]=(m-R)*L,r[10]=(1-(h+S))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const c=1/s,u=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===Vn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_o)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,S;if(a===Vn)g=(o+s)*f,S=-2*f;else if(a===_o)g=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new k,un=new _t,Wg=new k(0,0,0),Xg=new k(1,1,1),ei=new k,bs=new k,Yt=new k,_u=new _t,gu=new Hi;class Yn{constructor(e=0,t=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qg=0;const vu=new k,Ji=new Hi,In=new _t,As=new k,Br=new k,Yg=new k,jg=new Hi,xu=new k(1,0,0),Su=new k(0,1,0),Mu=new k(0,0,1),Eu={type:"added"},$g={type:"removed"},Qi={type:"childadded",child:null},aa={type:"childremoved",child:null};class Xt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new k,t=new Yn,i=new Hi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new We}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Br,As,this.up):In.lookAt(As,Br,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(In),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($g),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new k(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new k,Un=new k,la=new k,Nn=new k,er=new k,tr=new k,yu=new k,ca=new k,ua=new k,fa=new k,ha=new mt,da=new mt,pa=new mt;class dn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Un.subVectors(i,t),la.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Un),l=fn.dot(la),c=Un.dot(Un),u=Un.dot(la),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ha.setScalar(0),da.setScalar(0),pa.setScalar(0),ha.fromBufferAttribute(e,t),da.fromBufferAttribute(e,i),pa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ha,s.x),o.addScaledVector(da,s.y),o.addScaledVector(pa,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Un.subVectors(e,t),fn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,i),tr.subVectors(s,i),ca.subVectors(e,i);const l=er.dot(ca),c=tr.dot(ca);if(l<=0&&c<=0)return t.copy(i);ua.subVectors(e,r);const u=er.dot(ua),f=tr.dot(ua);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(er,o);fa.subVectors(e,s);const d=er.dot(fa),g=tr.dot(fa);if(g>=0&&d<=g)return t.copy(s);const S=d*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(tr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return yu.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(yu,a);const p=1/(m+S+h);return o=S*p,a=h*p,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Dg(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ma(o,s,e+1/3),this.g=ma(o,s,e),this.b=ma(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=$h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ze.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Ye(Ct.r*255,0,255))*65536+Math.round(Ye(Ct.g*255,0,255))*256+Math.round(Ye(Ct.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=nn){Ze.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ws);const i=Jo(ti.h,ws.h,t),r=Jo(ti.s,ws.s,t),s=Jo(ti.l,ws.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new it;it.NAMES=$h;let Kg=0;class hs extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=us(),this.name="",this.type="Material",this.blending=xr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kh extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new k,Rs=new qe;let Zg=0;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uu,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),e}}class Zh extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jh extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jg=0;const tn=new _t,_a=new Xt,nr=new k,jt=new fs,zr=new fs,Tt=new k;class $n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Jh:Zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(jt.min,zr.min),jt.expandByPoint(Tt),Tt.addVectors(jt.max,zr.max),jt.expandByPoint(Tt)):(jt.expandByPoint(zr.min),jt.expandByPoint(zr.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),Tt.add(nr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new k,l[B]=new k;const c=new k,u=new k,f=new k,h=new qe,d=new qe,g=new qe,S=new k,m=new k;function p(B,b,y){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,B),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[B].add(S),a[b].add(S),a[y].add(S),l[B].add(m),l[b].add(m),l[y].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,b=R.length;B<b;++B){const y=R[B],I=y.start,ee=y.count;for(let q=I,ne=I+ee;q<ne;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new k,M=new k,D=new k,P=new k;function L(B){D.fromBufferAttribute(r,B),P.copy(D);const b=a[B];T.copy(b),T.sub(D.multiplyScalar(D.dot(b))).normalize(),M.crossVectors(P,b);const I=M.dot(l[B])<0?-1:1;o.setXYZW(B,T.x,T.y,T.z,I)}for(let B=0,b=R.length;B<b;++B){const y=R[B],I=y.start,ee=y.count;for(let q=I,ne=I+ee;q<ne;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?d=l[S]*a.data.stride+a.offset:d=l[S]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new An(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new _t,bi=new sc,Cs=new Io,bu=new k,Ps=new k,Ds=new k,Ls=new k,ga=new k,Is=new k,Au=new k,Us=new k;class Gn extends Xt{constructor(e=new $n,t=new Kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ga.fromBufferAttribute(f,e),o?Is.addScaledVector(ga,u):Is.addScaledVector(ga.sub(t),u))}t.add(Is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(s),bi.copy(e.ray).recast(e.near),!(Cs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Cs,bu)===null||bi.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Tu.copy(s).invert(),bi.copy(e.ray).applyMatrix4(Tu),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=o[m.materialIndex],R=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=R,D=T;M<D;M+=3){const P=a.getX(M),L=a.getX(M+1),B=a.getX(M+2);r=Ns(this,p,e,i,c,u,f,P,L,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const R=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);r=Ns(this,o,e,i,c,u,f,R,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=o[m.materialIndex],R=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=R,D=T;M<D;M+=3){const P=M,L=M+1,B=M+2;r=Ns(this,p,e,i,c,u,f,P,L,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const R=m,T=m+1,M=m+2;r=Ns(this,o,e,i,c,u,f,R,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Qg(n,e,t,i,r,s,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;Us.copy(a),Us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:n}}function Ns(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ps),n.getVertexPosition(l,Ds),n.getVertexPosition(c,Ls);const u=Qg(n,e,t,i,Ps,Ds,Ls,Au);if(u){const f=new k;dn.getBarycoord(Au,Ps,Ds,Ls,f),r&&(u.uv=dn.getInterpolatedAttribute(r,a,l,c,f,new qe)),s&&(u.uv1=dn.getInterpolatedAttribute(s,a,l,c,f,new qe)),o&&(u.normal=dn.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};dn.getNormal(Ps,Ds,Ls,h.normal),u.face=h,u.barycoord=f}return u}class ds extends $n{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(f,2));function g(S,m,p,R,T,M,D,P,L,B,b){const y=M/L,I=D/B,ee=M/2,q=D/2,ne=P/2,fe=L+1,K=B+1;let re=0,H=0;const me=new k;for(let xe=0;xe<K;xe++){const Ae=xe*I-q;for(let De=0;De<fe;De++){const je=De*y-ee;me[S]=je*R,me[m]=Ae*T,me[p]=ne,c.push(me.x,me.y,me.z),me[S]=0,me[m]=0,me[p]=P>0?1:-1,u.push(me.x,me.y,me.z),f.push(De/L),f.push(1-xe/B),re+=1}}for(let xe=0;xe<B;xe++)for(let Ae=0;Ae<L;Ae++){const De=h+Ae+fe*xe,je=h+Ae+fe*(xe+1),te=h+(Ae+1)+fe*(xe+1),de=h+(Ae+1)+fe*xe;l.push(De,je,de),l.push(je,te,de),H+=6}a.addGroup(d,H,b),d+=H,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=Rr(n[t]);for(const r in i)e[r]=i[r]}return e}function ev(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const tv={clone:Rr,merge:Ft};var nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ed extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new k,wu=new qe,Ru=new qe;class rn extends ed{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Ru),t.subVectors(Ru,wu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class rv extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new rn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new rn(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new rn(ir,rr,e,t);a.layers=this.layers,this.add(a);const l=new rn(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new rn(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class td extends Wt{constructor(e=[],t=br,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sv extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new td(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ds(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:fi});s.uniforms.tEquirect.value=t;const o=new Gn(r,s),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Tn),new rv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Fs extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ov={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class av extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xa=new k,lv=new k,cv=new We;class ai{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xa.subVectors(i,t).cross(lv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cv.getNormalMatrix(e),r=this.coplanarPoint(xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Io,Os=new k;class nd{constructor(e=new ai,t=new ai,i=new ai,r=new ai,s=new ai,o=new ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],S=r[10],m=r[11],p=r[12],R=r[13],T=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-d,M-p).normalize(),i[1].setComponents(l+s,h+c,m+d,M+p).normalize(),i[2].setComponents(l+o,h+u,m+g,M+R).normalize(),i[3].setComponents(l-o,h-u,m-g,M-R).normalize(),i[4].setComponents(l-a,h-f,m-S,M-T).normalize(),t===Vn)i[5].setComponents(l+a,h+f,m+S,M+T).normalize();else if(t===_o)i[5].setComponents(a,f,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Os.x=r.normal.x>0?e.max.x:e.min.x,Os.y=r.normal.y>0?e.max.y:e.min.y,Os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class id extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cu=new _t,Pl=new sc,Bs=new Io,zs=new k;class uv extends Xt{constructor(e=new $n,t=new id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;Cu.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(Cu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,S=d;g<S;g++){const m=c.getX(g);zs.fromBufferAttribute(f,m),Pu(zs,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,S=d;g<S;g++)zs.fromBufferAttribute(f,g),Pu(zs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pu(n,e,t,i,r,s,o){const a=Pl.distanceSqToPoint(n);if(a<t){const l=new k;Pl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rd extends Wt{constructor(e,t,i=Bi,r,s,o,a=gn,l=gn,c,u=ss){if(u!==ss&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uo extends $n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],S=[],m=[];for(let p=0;p<u;p++){const R=p*h-o;for(let T=0;T<c;T++){const M=T*f-s;g.push(M,-R,0),S.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const T=R+c*p,M=R+c*(p+1),D=R+1+c*(p+1),P=R+1+c*p;d.push(T,M,P),d.push(M,D,P)}this.setIndex(d),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(S,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}class fv extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dv extends ed{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pv extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Du();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Du(){return performance.now()}class Lu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _v extends Gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Iu(n,e,t,i){const r=gv(i);switch(t){case Hh:return n*e;case Vh:return n*e/r.components*r.byteLength;case tc:return n*e/r.components*r.byteLength;case Gh:return n*e*2/r.components*r.byteLength;case nc:return n*e*2/r.components*r.byteLength;case kh:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case ic:return n*e*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:case ol:return Math.max(n,16)*Math.max(e,8)/4;case il:case sl:return Math.max(n,8)*Math.max(e,8)/2;case al:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case no:case Tl:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wh:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wl:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gv(n){switch(n){case qn:case Oh:return{byteLength:1,components:1};case is:case Bh:case cs:return{byteLength:2,components:1};case Ql:case ec:return{byteLength:2,components:4};case Bi:case Jl:case kn:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],S=f[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const S=f[d];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
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
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bv=`#ifdef USE_AOMAP
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
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wv=`#ifdef USE_BATCHING
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
#endif`,Rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
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
#endif`,Iv=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
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
#endif`,g0=`struct PhysicalMaterial {
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
}`,v0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
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
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ix=`float getShadowMask() {
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
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
}`,Ax=`#define DISTANCE
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
}`,wx=`#define DISTANCE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Ux=`#define LAMBERT
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
}`,Nx=`#define LAMBERT
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
}`,Fx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define NORMAL
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
}`,Hx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,Vx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
}`,Wx=`#define TOON
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
}`,Xx=`#define TOON
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
}`,qx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,$x=`uniform vec3 color;
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
}`,Kx=`uniform float rotation;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:xv,alphahash_pars_fragment:Sv,alphamap_fragment:Mv,alphamap_pars_fragment:Ev,alphatest_fragment:yv,alphatest_pars_fragment:Tv,aomap_fragment:bv,aomap_pars_fragment:Av,batching_pars_vertex:wv,batching_vertex:Rv,begin_vertex:Cv,beginnormal_vertex:Pv,bsdfs:Dv,iridescence_fragment:Lv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Ov,color_fragment:Bv,color_pars_fragment:zv,color_pars_vertex:Hv,color_vertex:kv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:qv,emissivemap_fragment:Yv,emissivemap_pars_fragment:jv,colorspace_fragment:$v,colorspace_pars_fragment:Kv,envmap_fragment:Zv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Qv,envmap_pars_vertex:e0,envmap_physical_pars_fragment:f0,envmap_vertex:t0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:r0,fog_pars_fragment:s0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:u0,lights_toon_fragment:h0,lights_toon_pars_fragment:d0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:_0,lights_physical_pars_fragment:g0,lights_fragment_begin:v0,lights_fragment_maps:x0,lights_fragment_end:S0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:T0,map_fragment:b0,map_pars_fragment:A0,map_particle_fragment:w0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:D0,morphcolor_vertex:L0,morphnormal_vertex:I0,morphtarget_pars_vertex:U0,morphtarget_vertex:N0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:z0,normal_vertex:H0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:j0,project_vertex:$0,dithering_fragment:K0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:sx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:ux,tonemapping_pars_fragment:fx,transmission_fragment:hx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:_x,worldpos_vertex:gx,background_vert:vx,background_frag:xx,backgroundCube_vert:Sx,backgroundCube_frag:Mx,cube_vert:Ex,cube_frag:yx,depth_vert:Tx,depth_frag:bx,distanceRGBA_vert:Ax,distanceRGBA_frag:wx,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Dx,meshbasic_vert:Lx,meshbasic_frag:Ix,meshlambert_vert:Ux,meshlambert_frag:Nx,meshmatcap_vert:Fx,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:zx,meshphong_vert:Hx,meshphong_frag:kx,meshphysical_vert:Vx,meshphysical_frag:Gx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:jx,shadow_frag:$x,sprite_vert:Kx,sprite_frag:Zx},ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yn={basic:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ft([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ft([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ft([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ft([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ft([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ft([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ft([ge.common,ge.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ft([ge.lights,ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};yn.physical={uniforms:Ft([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Hs={r:0,b:0,g:0},wi=new Yn,Jx=new _t;function Qx(n,e,t,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function S(T){let M=!1;const D=g(T);D===null?p(a,l):D&&D.isColor&&(p(D,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const D=g(M);D&&(D.isCubeTexture||D.mapping===Lo)?(u===void 0&&(u=new Gn(new ds(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Rr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wi.copy(M.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(wi)),u.material.toneMapped=Ze.getTransfer(D.colorSpace)!==st,(f!==D||h!==D.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=D,h=D.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Gn(new Uo(2,2),new mi({name:"BackgroundMaterial",uniforms:Rr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(D.colorSpace)!==st,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||h!==D.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=D,h=D.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(Hs,Qh(n)),i.buffers.color.setClear(Hs.r,Hs.g,Hs.b,M,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:S,addToRenderList:m,dispose:R}}function eS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,I,ee,q,ne){let fe=!1;const K=f(q,ee,I);s!==K&&(s=K,c(s.object)),fe=d(y,q,ee,ne),fe&&g(y,q,ee,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,M(y,I,ee,q),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,I,ee){const q=ee.wireframe===!0;let ne=i[y.id];ne===void 0&&(ne={},i[y.id]=ne);let fe=ne[I.id];fe===void 0&&(fe={},ne[I.id]=fe);let K=fe[q];return K===void 0&&(K=h(l()),fe[q]=K),K}function h(y){const I=[],ee=[],q=[];for(let ne=0;ne<t;ne++)I[ne]=0,ee[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ee,attributeDivisors:q,object:y,attributes:{},index:null}}function d(y,I,ee,q){const ne=s.attributes,fe=I.attributes;let K=0;const re=ee.getAttributes();for(const H in re)if(re[H].location>=0){const xe=ne[H];let Ae=fe[H];if(Ae===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),xe===void 0||xe.attribute!==Ae||Ae&&xe.data!==Ae.data)return!0;K++}return s.attributesNum!==K||s.index!==q}function g(y,I,ee,q){const ne={},fe=I.attributes;let K=0;const re=ee.getAttributes();for(const H in re)if(re[H].location>=0){let xe=fe[H];xe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ae={};Ae.attribute=xe,xe&&xe.data&&(Ae.data=xe.data),ne[H]=Ae,K++}s.attributes=ne,s.attributesNum=K,s.index=q}function S(){const y=s.newAttributes;for(let I=0,ee=y.length;I<ee;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const ee=s.newAttributes,q=s.enabledAttributes,ne=s.attributeDivisors;ee[y]=1,q[y]===0&&(n.enableVertexAttribArray(y),q[y]=1),ne[y]!==I&&(n.vertexAttribDivisor(y,I),ne[y]=I)}function R(){const y=s.newAttributes,I=s.enabledAttributes;for(let ee=0,q=I.length;ee<q;ee++)I[ee]!==y[ee]&&(n.disableVertexAttribArray(ee),I[ee]=0)}function T(y,I,ee,q,ne,fe,K){K===!0?n.vertexAttribIPointer(y,I,ee,ne,fe):n.vertexAttribPointer(y,I,ee,q,ne,fe)}function M(y,I,ee,q){S();const ne=q.attributes,fe=ee.getAttributes(),K=I.defaultAttributeValues;for(const re in fe){const H=fe[re];if(H.location>=0){let me=ne[re];if(me===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const xe=me.normalized,Ae=me.itemSize,De=e.get(me);if(De===void 0)continue;const je=De.buffer,te=De.type,de=De.bytesPerElement,Se=te===n.INT||te===n.UNSIGNED_INT||me.gpuType===Jl;if(me.isInterleavedBufferAttribute){const U=me.data,ie=U.stride,oe=me.offset;if(U.isInstancedInterleavedBuffer){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,U.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ae=0;ae<H.locationSize;ae++)T(H.location+ae,Ae/H.locationSize,te,xe,ie*de,(oe+Ae/H.locationSize*ae)*de,Se)}else{if(me.isInstancedBufferAttribute){for(let U=0;U<H.locationSize;U++)p(H.location+U,me.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let U=0;U<H.locationSize;U++)m(H.location+U);n.bindBuffer(n.ARRAY_BUFFER,je);for(let U=0;U<H.locationSize;U++)T(H.location+U,Ae/H.locationSize,te,xe,Ae*de,Ae/H.locationSize*U*de,Se)}}else if(K!==void 0){const xe=K[re];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(H.location,xe);break;case 3:n.vertexAttrib3fv(H.location,xe);break;case 4:n.vertexAttrib4fv(H.location,xe);break;default:n.vertexAttrib1fv(H.location,xe)}}}}R()}function D(){B();for(const y in i){const I=i[y];for(const ee in I){const q=I[ee];for(const ne in q)u(q[ne].object),delete q[ne];delete I[ee]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const ee in I){const q=I[ee];for(const ne in q)u(q[ne].object),delete q[ne];delete I[ee]}delete i[y.id]}function L(y){for(const I in i){const ee=i[I];if(ee[y.id]===void 0)continue;const q=ee[y.id];for(const ne in q)u(q[ne].object),delete q[ne];delete ee[y.id]}}function B(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:m,disableUnusedAttributes:R}}function tS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let S=0;S<f;S++)g+=u[S]*h[S];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==pn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const B=L===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==qn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==kn&&!B)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:D,maxSamples:P}}function iS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ai,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,T=R*4;let M=p.clippingState||null;l.value=M,M=u(g,h,T,d);for(let D=0;D!==T;++D)M[D]=t[D];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const p=d+S*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=d;T!==S;++T,M+=4)o.copy(f[T]).applyMatrix4(R,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function rS(n){let e=new WeakMap;function t(o,a){return a===Qa?o.mapping=br:a===el&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qa||a===el)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const fr=4,Uu=[.125,.215,.35,.446,.526,.582],Li=20,Sa=new dv,Nu=new it;let Ma=null,Ea=0,ya=0,Ta=!1;const Pi=(1+Math.sqrt(5))/2,sr=1/Pi,Fu=[new k(-Pi,sr,0),new k(Pi,sr,0),new k(-sr,0,Pi),new k(sr,0,Pi),new k(0,Pi,-sr),new k(0,Pi,sr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],sS=new k;class Ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=sS}=s;Ma=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Ea,ya),this._renderer.xr.enabled=Ta,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:cs,format:pn,colorSpace:wr,depthBuffer:!1},r=Bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(s)),this._blurMaterial=aS(s,e,t)}return r}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,r,s){const l=new rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Nu),f.toneMapping=hi,f.autoClear=!1;const g=new Kh({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),S=new Gn(new ds,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Nu),m=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):T===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const M=this._cubeSize;ks(r,T*M,R>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(S,l),f.render(e,l)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fu[(r-s-1)%Fu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Li-1),S=s/g,m=isFinite(s)?1+Math.floor(u*S):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let R=0;for(let L=0;L<Li;++L){const B=L/S,b=Math.exp(-B*B/2);p.push(b),L===0?R+=b:L<m&&(R+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/R;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const M=this._sizeLods[r],D=3*M*(r>T-fr?r-T+fr:0),P=4*(this._cubeSize-M);ks(t,D,P,3*M,2*M),l.setRenderTarget(t),l.render(f,Sa)}}function oS(n){const e=[],t=[],i=[];let r=n;const s=n-fr+1+Uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-fr?l=Uu[o-n+fr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,S=3,m=2,p=1,R=new Float32Array(S*g*d),T=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let P=0;P<d;P++){const L=P%3*2/3-1,B=P>2?0:-1,b=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];R.set(b,S*g*P),T.set(h,m*g*P);const y=[P,P,P,P,P,P];M.set(y,p*g*P)}const D=new $n;D.setAttribute("position",new An(R,S)),D.setAttribute("uv",new An(T,m)),D.setAttribute("faceIndex",new An(M,p)),e.push(D),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bu(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aS(n,e,t){const i=new Float32Array(Li),r=new k(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zu(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Hu(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function lS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qa||l===el,u=l===br||l===Ar;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ou(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Ou(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let S=0;if(d!==null){const R=d.array;S=d.version;for(let T=0,M=R.length;T<M;T+=3){const D=R[T+0],P=R[T+1],L=R[T+2];h.push(D,P,P,L,L,D)}}else if(g!==void 0){const R=g.array;S=g.version;for(let T=0,M=R.length/3-1;T<M;T+=3){const D=T+0,P=T+1,L=T+2;h.push(D,P,P,L,L,D)}}else return;const m=new(qh(h)?Jh:Zh)(h,1);m.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function fS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,S){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],S[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,S,0,g);let p=0;for(let R=0;R<g;R++)p+=d[R]*S[R];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dS(n,e,t){const i=new WeakMap,r=new mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let T=0;d===!0&&(T=1),g===!0&&(T=2),S===!0&&(T=3);let M=a.attributes.position.count*T,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*D*4*f),L=new Yh(P,M,D,f);L.type=kn,L.needsUpdate=!0;const B=T*4;for(let y=0;y<f;y++){const I=m[y],ee=p[y],q=R[y],ne=M*D*4*y;for(let fe=0;fe<I.count;fe++){const K=fe*B;d===!0&&(r.fromBufferAttribute(I,fe),P[ne+K+0]=r.x,P[ne+K+1]=r.y,P[ne+K+2]=r.z,P[ne+K+3]=0),g===!0&&(r.fromBufferAttribute(ee,fe),P[ne+K+4]=r.x,P[ne+K+5]=r.y,P[ne+K+6]=r.z,P[ne+K+7]=0),S===!0&&(r.fromBufferAttribute(q,fe),P[ne+K+8]=r.x,P[ne+K+9]=r.y,P[ne+K+10]=r.z,P[ne+K+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new qe(M,D)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function pS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const od=new Wt,ku=new rd(1,1),ad=new Yh,ld=new Vg,cd=new td,Vu=[],Gu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vu[r];if(s===void 0&&(s=new Float32Array(r),Vu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function xS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),yt(t,i)}}function SS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Xu.set(i),n.uniformMatrix3fv(this.addr,!1,Xu),yt(t,i)}}function MS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Wu.set(i),n.uniformMatrix4fv(this.addr,!1,Wu),yt(t,i)}}function ES(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function AS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function PS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ku.compareFunction=Xh,s=ku):s=od,t.setTexture2D(e||s,r)}function DS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ld,r)}function LS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cd,r)}function IS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ad,r)}function US(n){switch(n){case 5126:return mS;case 35664:return _S;case 35665:return gS;case 35666:return vS;case 35674:return xS;case 35675:return SS;case 35676:return MS;case 5124:case 35670:return ES;case 35667:case 35671:return yS;case 35668:case 35672:return TS;case 35669:case 35673:return bS;case 5125:return AS;case 36294:return wS;case 36295:return RS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return IS}}function NS(n,e){n.uniform1fv(this.addr,e)}function FS(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function OS(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function BS(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function zS(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HS(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kS(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VS(n,e){n.uniform1iv(this.addr,e)}function GS(n,e){n.uniform2iv(this.addr,e)}function WS(n,e){n.uniform3iv(this.addr,e)}function XS(n,e){n.uniform4iv(this.addr,e)}function qS(n,e){n.uniform1uiv(this.addr,e)}function YS(n,e){n.uniform2uiv(this.addr,e)}function jS(n,e){n.uniform3uiv(this.addr,e)}function $S(n,e){n.uniform4uiv(this.addr,e)}function KS(n,e,t){const i=this.cache,r=e.length,s=No(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||od,s[o])}function ZS(n,e,t){const i=this.cache,r=e.length,s=No(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ld,s[o])}function JS(n,e,t){const i=this.cache,r=e.length,s=No(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cd,s[o])}function QS(n,e,t){const i=this.cache,r=e.length,s=No(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ad,s[o])}function eM(n){switch(n){case 5126:return NS;case 35664:return FS;case 35665:return OS;case 35666:return BS;case 35674:return zS;case 35675:return HS;case 35676:return kS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return qS;case 36294:return YS;case 36295:return jS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return QS}}class tM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=US(t.type)}}class nM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eM(t.type)}}class iM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function rM(n,e,t){const i=n.name,r=i.length;for(ba.lastIndex=0;;){const s=ba.exec(i),o=ba.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yu(t,c===void 0?new tM(a,n,e):new nM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new iM(a),Yu(t,f)),t=f}}}class so{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ju(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sM=37297;let oM=0;function aM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $u=new We;function lM(n){Ze._getMatrix($u,Ze.workingColorSpace,n);const e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case mo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ku(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aM(n.getShaderSource(e),o)}else return r}function cM(n,e){const t=lM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uM(n,e){let t;switch(e){case hg:t="Linear";break;case dg:t="Reinhard";break;case pg:t="Cineon";break;case mg:t="ACESFilmic";break;case gg:t="AgX";break;case vg:t="Neutral";break;case _g:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new k;function fM(){Ze.getLuminanceCoefficients(Vs);const n=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function dM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function kr(n){return n!==""}function Zu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(mM,gM)}const _M=new Map;function gM(n,e){let t=Xe[e];if(t===void 0){const i=_M.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const vM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(n){return n.replace(vM,xM)}function xM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ef(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function MM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Ar:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function yM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nh:e="ENVMAP_BLENDING_MULTIPLY";break;case ug:e="ENVMAP_BLENDING_MIX";break;case fg:e="ENVMAP_BLENDING_ADD";break}return e}function TM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=SM(t),c=MM(t),u=EM(t),f=yM(t),h=TM(t),d=hM(t),g=dM(s),S=r.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hi?uM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,cM("linearToOutputTexel",t.outputColorSpace),fM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=Dl(o),o=Zu(o,t),o=Ju(o,t),a=Dl(a),a=Zu(a,t),a=Ju(a,t),o=Qu(o),a=Qu(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=R+m+o,M=R+p+a,D=ju(r,r.VERTEX_SHADER,T),P=ju(r,r.FRAGMENT_SHADER,M);r.attachShader(S,D),r.attachShader(S,P),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function L(I){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(S).trim(),q=r.getShaderInfoLog(D).trim(),ne=r.getShaderInfoLog(P).trim();let fe=!0,K=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,D,P);else{const re=Ku(r,D,"vertex"),H=Ku(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ee+`
`+re+`
`+H)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||ne==="")&&(K=!1);K&&(I.diagnostics={runnable:fe,programLog:ee,vertexShader:{log:q,prefix:m},fragmentShader:{log:ne,prefix:p}})}r.deleteShader(D),r.deleteShader(P),B=new so(r,S),b=pM(r,S)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,sM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=P,this}let AM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RM(e),t.set(e,i)),i}}class RM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function CM(n,e,t,i,r,s,o){const a=new jh,l=new wM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,I,ee,q){const ne=ee.fog,fe=q.geometry,K=b.isMeshStandardMaterial?ee.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),H=re&&re.mapping===Lo?re.image.height:null,me=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const xe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Ae=xe!==void 0?xe.length:0;let De=0;fe.morphAttributes.position!==void 0&&(De=1),fe.morphAttributes.normal!==void 0&&(De=2),fe.morphAttributes.color!==void 0&&(De=3);let je,te,de,Se;if(me){const rt=yn[me];je=rt.vertexShader,te=rt.fragmentShader}else je=b.vertexShader,te=b.fragmentShader,l.update(b),de=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const U=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),oe=q.isInstancedMesh===!0,ae=q.isBatchedMesh===!0,Ue=!!b.map,A=!!b.matcap,w=!!re,v=!!b.aoMap,Q=!!b.lightMap,j=!!b.bumpMap,G=!!b.normalMap,Z=!!b.displacementMap,le=!!b.emissiveMap,$=!!b.metalnessMap,x=!!b.roughnessMap,_=b.anisotropy>0,C=b.clearcoat>0,z=b.dispersion>0,W=b.iridescence>0,V=b.sheen>0,pe=b.transmission>0,ce=_&&!!b.anisotropyMap,we=C&&!!b.clearcoatMap,Ce=C&&!!b.clearcoatNormalMap,ue=C&&!!b.clearcoatRoughnessMap,ve=W&&!!b.iridescenceMap,Pe=W&&!!b.iridescenceThicknessMap,Ne=V&&!!b.sheenColorMap,_e=V&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,ke=!!b.specularColorMap,ct=!!b.specularIntensityMap,N=pe&&!!b.transmissionMap,Ee=pe&&!!b.thicknessMap,J=!!b.gradientMap,se=!!b.alphaMap,Te=b.alphaTest>0,ye=!!b.alphaHash,Ge=!!b.extensions;let dt=hi;b.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(dt=n.toneMapping);const wt={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:te,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ae,batchingColor:ae&&q._colorsTexture!==null,instancing:oe,instancingColor:oe&&q.instanceColor!==null,instancingMorph:oe&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:wr,alphaToCoverage:!!b.alphaToCoverage,map:Ue,matcap:A,envMap:w,envMapMode:w&&re.mapping,envMapCubeUVHeight:H,aoMap:v,lightMap:Q,bumpMap:j,normalMap:G,displacementMap:h&&Z,emissiveMap:le,normalMapObjectSpace:G&&b.normalMapType===yg,normalMapTangentSpace:G&&b.normalMapType===Eg,metalnessMap:$,roughnessMap:x,anisotropy:_,anisotropyMap:ce,clearcoat:C,clearcoatMap:we,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ue,dispersion:z,iridescence:W,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:V,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Oe,specularColorMap:ke,specularIntensityMap:ct,transmission:pe,transmissionMap:N,thicknessMap:Ee,gradientMap:J,opaque:b.transparent===!1&&b.blending===xr&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:Te,alphaHash:ye,combine:b.combine,mapUv:Ue&&S(b.map.channel),aoMapUv:v&&S(b.aoMap.channel),lightMapUv:Q&&S(b.lightMap.channel),bumpMapUv:j&&S(b.bumpMap.channel),normalMapUv:G&&S(b.normalMap.channel),displacementMapUv:Z&&S(b.displacementMap.channel),emissiveMapUv:le&&S(b.emissiveMap.channel),metalnessMapUv:$&&S(b.metalnessMap.channel),roughnessMapUv:x&&S(b.roughnessMap.channel),anisotropyMapUv:ce&&S(b.anisotropyMap.channel),clearcoatMapUv:we&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&S(b.sheenRoughnessMap.channel),specularMapUv:Oe&&S(b.specularMap.channel),specularColorMapUv:ke&&S(b.specularColorMap.channel),specularIntensityMapUv:ct&&S(b.specularIntensityMap.channel),transmissionMapUv:N&&S(b.transmissionMap.channel),thicknessMapUv:Ee&&S(b.thicknessMap.channel),alphaMapUv:se&&S(b.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(G||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!fe.attributes.uv&&(Ue||se),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ie,skinning:q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:De,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ue&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:le&&b.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hn,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)y.push(I),y.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(R(y,b),T(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function R(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function T(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const y=g[b.type];let I;if(y){const ee=yn[y];I=tv.clone(ee.uniforms)}else I=b.uniforms;return I}function D(b,y){let I;for(let ee=0,q=u.length;ee<q;ee++){const ne=u[ee];if(ne.cacheKey===y){I=ne,++I.usedTimes;break}}return I===void 0&&(I=new bM(n,y,b,s),u.push(I)),I}function P(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function L(b){l.remove(b)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:B}}function PM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function DM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,S,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:S,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=S,p.group=m),e++,p}function a(f,h,d,g,S,m){const p=o(f,h,d,g,S,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,S,m){const p=o(f,h,d,g,S,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||DM),i.length>1&&i.sort(h||tf),r.length>1&&r.sort(h||tf)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function LM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new nf,n.set(i,[o])):r>=s.length?(o=new nf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function UM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NM=0;function FM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OM(n){const e=new IM,t=UM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new _t,o=new _t;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,S=0,m=0,p=0,R=0,T=0,M=0,D=0,P=0,L=0;c.sort(FM);for(let b=0,y=c.length;b<y;b++){const I=c[b],ee=I.color,q=I.intensity,ne=I.distance,fe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=ee.r*q,f+=ee.g*q,h+=ee.b*q;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],q);L++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const re=I.shadow,H=t.get(I);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=fe,i.directionalShadowMatrix[d]=I.shadow.matrix,R++}i.directional[d]=K,d++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(ee).multiplyScalar(q),K.distance=ne,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[S]=K;const re=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,re.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[S]=re.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[S]=H,i.spotShadowMap[S]=fe,M++}S++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(ee).multiplyScalar(q),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const re=I.shadow,H=t.get(I);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=fe,i.pointShadowMatrix[g]=I.shadow.matrix,T++}i.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(q),K.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==d||B.pointLength!==g||B.spotLength!==S||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==R||B.numPointShadows!==T||B.numSpotShadows!==M||B.numSpotMaps!==D||B.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+D-P,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,B.directionalLength=d,B.pointLength=g,B.spotLength=S,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=R,B.numPointShadows=T,B.numSpotShadows=M,B.numSpotMaps=D,B.numLightProbes=L,i.version=NM++)}function l(c,u){let f=0,h=0,d=0,g=0,S=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function rf(n){const e=new OM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function BM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rf(n),e.set(r,[a])):s>=o.length?(a=new rf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`;function kM(n,e,t){let i=new nd;const r=new qe,s=new qe,o=new mt,a=new fv({depthPacking:Mg}),l=new hv,c={},u=t.maxTextureSize,f={[pi]:Gt,[Gt]:pi,[Hn]:Hn},h=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:zM,fragmentShader:HM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Gn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(P,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(fi),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=p!==Fn&&this.type===Fn,ne=p===Fn&&this.type!==Fn;for(let fe=0,K=P.length;fe<K;fe++){const re=P[fe],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const me=H.getFrameExtents();if(r.multiply(me),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,H.mapSize.y=s.y)),H.map===null||q===!0||ne===!0){const Ae=this.type!==Fn?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new zi(r.x,r.y,Ae),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const xe=H.getViewportCount();for(let Ae=0;Ae<xe;Ae++){const De=H.getViewport(Ae);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),ee.viewport(o),H.updateMatrices(re,Ae),i=H.getFrustum(),M(L,B,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===Fn&&R(H,B),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,I)};function R(P,L){const B=e.update(S);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new zi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,B,h,S,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,B,d,S,null)}function T(P,L,B,b){let y=null;const I=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)y=I;else if(y=B.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const ee=y.uuid,q=L.uuid;let ne=c[ee];ne===void 0&&(ne={},c[ee]=ne);let fe=ne[q];fe===void 0&&(fe=y.clone(),ne[q]=fe,L.addEventListener("dispose",D)),y=fe}if(y.visible=L.visible,y.wireframe=L.wireframe,b===Fn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ee=n.properties.get(y);ee.light=B}return y}function M(P,L,B,b,y){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Fn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const q=e.update(P),ne=P.material;if(Array.isArray(ne)){const fe=q.groups;for(let K=0,re=fe.length;K<re;K++){const H=fe[K],me=ne[H.materialIndex];if(me&&me.visible){const xe=T(P,me,b,y);P.onBeforeShadow(n,P,L,B,q,xe,H),n.renderBufferDirect(B,null,q,xe,P,H),P.onAfterShadow(n,P,L,B,q,xe,H)}}}else if(ne.visible){const fe=T(P,ne,b,y);P.onBeforeShadow(n,P,L,B,q,fe,null),n.renderBufferDirect(B,null,q,fe,P,null),P.onAfterShadow(n,P,L,B,q,fe,null)}}const ee=P.children;for(let q=0,ne=ee.length;q<ne;q++)M(ee[q],L,B,b,y)}function D(P){P.target.removeEventListener("dispose",D);for(const B in c){const b=c[B],y=P.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const VM={[qa]:Ya,[ja]:Za,[$a]:Ja,[Tr]:Ka,[Ya]:qa,[Za]:ja,[Ja]:$a,[Ka]:Tr};function GM(n,e){function t(){let N=!1;const Ee=new mt;let J=null;const se=new mt(0,0,0,0);return{setMask:function(Te){J!==Te&&!N&&(n.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){N=Te},setClear:function(Te,ye,Ge,dt,wt){wt===!0&&(Te*=dt,ye*=dt,Ge*=dt),Ee.set(Te,ye,Ge,dt),se.equals(Ee)===!1&&(n.clearColor(Te,ye,Ge,dt),se.copy(Ee))},reset:function(){N=!1,J=null,se.set(-1,0,0,0)}}}function i(){let N=!1,Ee=!1,J=null,se=null,Te=null;return{setReversed:function(ye){if(Ee!==ye){const Ge=e.get("EXT_clip_control");ye?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ee=ye;const dt=Te;Te=null,this.setClear(dt)}},getReversed:function(){return Ee},setTest:function(ye){ye?U(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ye){J!==ye&&!N&&(n.depthMask(ye),J=ye)},setFunc:function(ye){if(Ee&&(ye=VM[ye]),se!==ye){switch(ye){case qa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=ye}},setLocked:function(ye){N=ye},setClear:function(ye){Te!==ye&&(Ee&&(ye=1-ye),n.clearDepth(ye),Te=ye)},reset:function(){N=!1,J=null,se=null,Te=null,Ee=!1}}}function r(){let N=!1,Ee=null,J=null,se=null,Te=null,ye=null,Ge=null,dt=null,wt=null;return{setTest:function(rt){N||(rt?U(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(rt){Ee!==rt&&!N&&(n.stencilMask(rt),Ee=rt)},setFunc:function(rt,an,Rn){(J!==rt||se!==an||Te!==Rn)&&(n.stencilFunc(rt,an,Rn),J=rt,se=an,Te=Rn)},setOp:function(rt,an,Rn){(ye!==rt||Ge!==an||dt!==Rn)&&(n.stencilOp(rt,an,Rn),ye=rt,Ge=an,dt=Rn)},setLocked:function(rt){N=rt},setClear:function(rt){wt!==rt&&(n.clearStencil(rt),wt=rt)},reset:function(){N=!1,Ee=null,J=null,se=null,Te=null,ye=null,Ge=null,dt=null,wt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,S=!1,m=null,p=null,R=null,T=null,M=null,D=null,P=null,L=new it(0,0,0),B=0,b=!1,y=null,I=null,ee=null,q=null,ne=null;const fe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,re=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=re>=2);let me=null,xe={};const Ae=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),je=new mt().fromArray(Ae),te=new mt().fromArray(De);function de(N,Ee,J,se){const Te=new Uint8Array(4),ye=n.createTexture();n.bindTexture(N,ye),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<J;Ge++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Ee+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return ye}const Se={};Se[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Tr),j(!1),G(ou),U(n.CULL_FACE),v(fi);function U(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ie(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function oe(N,Ee){return f[N]!==Ee?(n.bindFramebuffer(N,Ee),f[N]=Ee,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ae(N,Ee){let J=d,se=!1;if(N){J=h.get(Ee),J===void 0&&(J=[],h.set(Ee,J));const Te=N.textures;if(J.length!==Te.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Ge=Te.length;ye<Ge;ye++)J[ye]=n.COLOR_ATTACHMENT0+ye;J.length=Te.length,se=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,se=!0);se&&n.drawBuffers(J)}function Ue(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const A={[Di]:n.FUNC_ADD,[Y_]:n.FUNC_SUBTRACT,[j_]:n.FUNC_REVERSE_SUBTRACT};A[$_]=n.MIN,A[K_]=n.MAX;const w={[Z_]:n.ZERO,[J_]:n.ONE,[Q_]:n.SRC_COLOR,[Wa]:n.SRC_ALPHA,[sg]:n.SRC_ALPHA_SATURATE,[ig]:n.DST_COLOR,[tg]:n.DST_ALPHA,[eg]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[rg]:n.ONE_MINUS_DST_COLOR,[ng]:n.ONE_MINUS_DST_ALPHA,[og]:n.CONSTANT_COLOR,[ag]:n.ONE_MINUS_CONSTANT_COLOR,[lg]:n.CONSTANT_ALPHA,[cg]:n.ONE_MINUS_CONSTANT_ALPHA};function v(N,Ee,J,se,Te,ye,Ge,dt,wt,rt){if(N===fi){S===!0&&(ie(n.BLEND),S=!1);return}if(S===!1&&(U(n.BLEND),S=!0),N!==q_){if(N!==m||rt!==b){if((p!==Di||M!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,M=Di),rt)switch(N){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.ONE,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}R=null,T=null,D=null,P=null,L.set(0,0,0),B=0,m=N,b=rt}return}Te=Te||Ee,ye=ye||J,Ge=Ge||se,(Ee!==p||Te!==M)&&(n.blendEquationSeparate(A[Ee],A[Te]),p=Ee,M=Te),(J!==R||se!==T||ye!==D||Ge!==P)&&(n.blendFuncSeparate(w[J],w[se],w[ye],w[Ge]),R=J,T=se,D=ye,P=Ge),(dt.equals(L)===!1||wt!==B)&&(n.blendColor(dt.r,dt.g,dt.b,wt),L.copy(dt),B=wt),m=N,b=!1}function Q(N,Ee){N.side===Hn?ie(n.CULL_FACE):U(n.CULL_FACE);let J=N.side===Gt;Ee&&(J=!J),j(J),N.blending===xr&&N.transparent===!1?v(fi):v(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const se=N.stencilWrite;a.setTest(se),se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function G(N){N!==G_?(U(n.CULL_FACE),N!==I&&(N===ou?n.cullFace(n.BACK):N===W_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),I=N}function Z(N){N!==ee&&(K&&n.lineWidth(N),ee=N)}function le(N,Ee,J){N?(U(n.POLYGON_OFFSET_FILL),(q!==Ee||ne!==J)&&(n.polygonOffset(Ee,J),q=Ee,ne=J)):ie(n.POLYGON_OFFSET_FILL)}function $(N){N?U(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function x(N){N===void 0&&(N=n.TEXTURE0+fe-1),me!==N&&(n.activeTexture(N),me=N)}function _(N,Ee,J){J===void 0&&(me===null?J=n.TEXTURE0+fe-1:J=me);let se=xe[J];se===void 0&&(se={type:void 0,texture:void 0},xe[J]=se),(se.type!==N||se.texture!==Ee)&&(me!==J&&(n.activeTexture(J),me=J),n.bindTexture(N,Ee||Se[N]),se.type=N,se.texture=Ee)}function C(){const N=xe[me];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function z(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function _e(N){te.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function Oe(N,Ee){let J=c.get(Ee);J===void 0&&(J=new WeakMap,c.set(Ee,J));let se=J.get(N);se===void 0&&(se=n.getUniformBlockIndex(Ee,N.name),J.set(N,se))}function ke(N,Ee){const se=c.get(Ee).get(N);l.get(Ee)!==se&&(n.uniformBlockBinding(Ee,se,N.__bindingPointIndex),l.set(Ee,se))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,xe={},f={},h=new WeakMap,d=[],g=null,S=!1,m=null,p=null,R=null,T=null,M=null,D=null,P=null,L=new it(0,0,0),B=0,b=!1,y=null,I=null,ee=null,q=null,ne=null,je.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:U,disable:ie,bindFramebuffer:oe,drawBuffers:ae,useProgram:Ue,setBlending:v,setMaterial:Q,setFlipSided:j,setCullFace:G,setLineWidth:Z,setPolygonOffset:le,setScissorTest:$,activeTexture:x,bindTexture:_,unbindTexture:C,compressedTexImage2D:z,compressedTexImage3D:W,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:Ce,texStorage3D:ue,texSubImage2D:V,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:we,scissor:Ne,viewport:_e,reset:ct}}function WM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,_){return d?new OffscreenCanvas(x,_):go("canvas")}function S(x,_,C){let z=1;const W=$(x);if((W.width>C||W.height>C)&&(z=C/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const V=Math.floor(z*W.width),pe=Math.floor(z*W.height);f===void 0&&(f=g(V,pe));const ce=_?g(V,pe):f;return ce.width=V,ce.height=pe,ce.getContext("2d").drawImage(x,0,0,V,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+V+"x"+pe+")."),ce}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function R(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(x,_,C,z,W=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=_;if(_===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),_===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),_===n.RGBA){const pe=W?mo:Ze.getTransfer(z);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=pe===st?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(x,_){let C;return x?_===null||_===Bi||_===rs?C=n.DEPTH24_STENCIL8:_===kn?C=n.DEPTH32F_STENCIL8:_===is&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bi||_===rs?C=n.DEPTH_COMPONENT24:_===kn?C=n.DEPTH_COMPONENT32F:_===is&&(C=n.DEPTH_COMPONENT16),C}function D(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==gn&&x.minFilter!==Tn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function P(x){const _=x.target;_.removeEventListener("dispose",P),B(_),_.isVideoTexture&&u.delete(_)}function L(x){const _=x.target;_.removeEventListener("dispose",L),y(_)}function B(x){const _=i.get(x);if(_.__webglInit===void 0)return;const C=x.source,z=h.get(C);if(z){const W=z[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&b(x),Object.keys(z).length===0&&h.delete(C)}i.remove(x)}function b(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const C=x.source,z=h.get(C);delete z[_.__cacheKey],o.memory.textures--}function y(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let W=0;W<_.__webglFramebuffer[z].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[z][W]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=x.textures;for(let z=0,W=C.length;z<W;z++){const V=i.get(C[z]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(C[z])}i.remove(x)}let I=0;function ee(){I=0}function q(){const x=I;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),I+=1,x}function ne(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function fe(x,_){const C=i.get(x);if(x.isVideoTexture&&Z(x),x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(C,x,_);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function K(x,_){const C=i.get(x);if(x.version>0&&C.__version!==x.version){te(C,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function re(x,_){const C=i.get(x);if(x.version>0&&C.__version!==x.version){te(C,x,_);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function H(x,_){const C=i.get(x);if(x.version>0&&C.__version!==x.version){de(C,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const me={[tl]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[nl]:n.MIRRORED_REPEAT},xe={[gn]:n.NEAREST,[xg]:n.NEAREST_MIPMAP_NEAREST,[xs]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Zo]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},Ae={[Tg]:n.NEVER,[Pg]:n.ALWAYS,[bg]:n.LESS,[Xh]:n.LEQUAL,[Ag]:n.EQUAL,[Cg]:n.GEQUAL,[wg]:n.GREATER,[Rg]:n.NOTEQUAL};function De(x,_){if(_.type===kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Tn||_.magFilter===Zo||_.magFilter===xs||_.magFilter===Ui||_.minFilter===Tn||_.minFilter===Zo||_.minFilter===xs||_.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,me[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,me[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,me[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,xe[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==xs&&_.minFilter!==Ui||_.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function je(x,_){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",P));const z=_.source;let W=h.get(z);W===void 0&&(W={},h.set(z,W));const V=ne(_);if(V!==x.__cacheKey){W[V]===void 0&&(W[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),W[V].usedTimes++;const pe=W[x.__cacheKey];pe!==void 0&&(W[x.__cacheKey].usedTimes--,pe.usedTimes===0&&b(_)),x.__cacheKey=V,x.__webglTexture=W[V].texture}return C}function te(x,_,C){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const W=je(x,_),V=_.source;t.bindTexture(z,x.__webglTexture,n.TEXTURE0+C);const pe=i.get(V);if(V.version!==pe.__version||W===!0){t.activeTexture(n.TEXTURE0+C);const ce=Ze.getPrimaries(Ze.workingColorSpace),we=_.colorSpace===li?null:Ze.getPrimaries(_.colorSpace),Ce=_.colorSpace===li||ce===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ue=S(_.image,!1,r.maxTextureSize);ue=le(_,ue);const ve=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Ne=T(_.internalFormat,ve,Pe,_.colorSpace,_.isVideoTexture);De(z,_);let _e;const Oe=_.mipmaps,ke=_.isVideoTexture!==!0,ct=pe.__version===void 0||W===!0,N=V.dataReady,Ee=D(_,ue);if(_.isDepthTexture)Ne=M(_.format===os,_.type),ct&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ve,Pe,null));else if(_.isDataTexture)if(Oe.length>0){ke&&ct&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Oe[0].width,Oe[0].height);for(let J=0,se=Oe.length;J<se;J++)_e=Oe[J],ke?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,ve,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,J,Ne,_e.width,_e.height,0,ve,Pe,_e.data);_.generateMipmaps=!1}else ke?(ct&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,ue.width,ue.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Pe,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ve,Pe,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,Oe[0].width,Oe[0].height,ue.depth);for(let J=0,se=Oe.length;J<se;J++)if(_e=Oe[J],_.format!==pn)if(ve!==null)if(ke){if(N)if(_.layerUpdates.size>0){const Te=Iu(_e.width,_e.height,_.format,_.type);for(const ye of _.layerUpdates){const Ge=_e.data.subarray(ye*Te/_e.data.BYTES_PER_ELEMENT,(ye+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ye,_e.width,_e.height,1,ve,Ge)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,ue.depth,ve,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ne,_e.width,_e.height,ue.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,ue.depth,ve,Pe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ne,_e.width,_e.height,ue.depth,0,ve,Pe,_e.data)}else{ke&&ct&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Oe[0].width,Oe[0].height);for(let J=0,se=Oe.length;J<se;J++)_e=Oe[J],_.format!==pn?ve!==null?ke?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,ve,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,J,Ne,_e.width,_e.height,0,ve,Pe,_e.data)}else if(_.isDataArrayTexture)if(ke){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,ue.width,ue.height,ue.depth),N)if(_.layerUpdates.size>0){const J=Iu(ue.width,ue.height,_.format,_.type);for(const se of _.layerUpdates){const Te=ue.data.subarray(se*J/ue.data.BYTES_PER_ELEMENT,(se+1)*J/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,ve,Pe,Te)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Pe,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,ve,Pe,ue.data);else if(_.isData3DTexture)ke?(ct&&t.texStorage3D(n.TEXTURE_3D,Ee,Ne,ue.width,ue.height,ue.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Pe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,ve,Pe,ue.data);else if(_.isFramebufferTexture){if(ct)if(ke)t.texStorage2D(n.TEXTURE_2D,Ee,Ne,ue.width,ue.height);else{let J=ue.width,se=ue.height;for(let Te=0;Te<Ee;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ne,J,se,0,ve,Pe,null),J>>=1,se>>=1}}else if(Oe.length>0){if(ke&&ct){const J=$(Oe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,J.width,J.height)}for(let J=0,se=Oe.length;J<se;J++)_e=Oe[J],ke?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve,Pe,_e):t.texImage2D(n.TEXTURE_2D,J,Ne,ve,Pe,_e);_.generateMipmaps=!1}else if(ke){if(ct){const J=$(ue);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,J.width,J.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Pe,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ve,Pe,ue);m(_)&&p(z),pe.__version=V.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function de(x,_,C){if(_.image.length!==6)return;const z=je(x,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+C);const V=i.get(W);if(W.version!==V.__version||z===!0){t.activeTexture(n.TEXTURE0+C);const pe=Ze.getPrimaries(Ze.workingColorSpace),ce=_.colorSpace===li?null:Ze.getPrimaries(_.colorSpace),we=_.colorSpace===li||pe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!Ce&&!ue?ve[se]=S(_.image[se],!0,r.maxCubemapSize):ve[se]=ue?_.image[se].image:_.image[se],ve[se]=le(_,ve[se]);const Pe=ve[0],Ne=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),Oe=T(_.internalFormat,Ne,_e,_.colorSpace),ke=_.isVideoTexture!==!0,ct=V.__version===void 0||z===!0,N=W.dataReady;let Ee=D(_,Pe);De(n.TEXTURE_CUBE_MAP,_);let J;if(Ce){ke&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Oe,Pe.width,Pe.height);for(let se=0;se<6;se++){J=ve[se].mipmaps;for(let Te=0;Te<J.length;Te++){const ye=J[Te];_.format!==pn?Ne!==null?ke?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,ye.width,ye.height,Ne,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,ye.width,ye.height,Ne,_e,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Oe,ye.width,ye.height,0,Ne,_e,ye.data)}}}else{if(J=_.mipmaps,ke&&ct){J.length>0&&Ee++;const se=$(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Oe,se.width,se.height)}for(let se=0;se<6;se++)if(ue){ke?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,Ne,_e,ve[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,ve[se].width,ve[se].height,0,Ne,_e,ve[se].data);for(let Te=0;Te<J.length;Te++){const Ge=J[Te].image[se].image;ke?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Ge.width,Ge.height,Ne,_e,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Oe,Ge.width,Ge.height,0,Ne,_e,Ge.data)}}else{ke?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,_e,ve[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,Ne,_e,ve[se]);for(let Te=0;Te<J.length;Te++){const ye=J[Te];ke?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Ne,_e,ye.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Oe,Ne,_e,ye.image[se])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),V.__version=W.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Se(x,_,C,z,W,V){const pe=s.convert(C.format,C.colorSpace),ce=s.convert(C.type),we=T(C.internalFormat,pe,ce,C.colorSpace),Ce=i.get(_),ue=i.get(C);if(ue.__renderTarget=_,!Ce.__hasExternalTextures){const ve=Math.max(1,_.width>>V),Pe=Math.max(1,_.height>>V);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,V,we,ve,Pe,_.depth,0,pe,ce,null):t.texImage2D(W,V,we,ve,Pe,0,pe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),G(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,W,ue.__webglTexture,0,j(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,W,ue.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(x,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const z=_.depthTexture,W=z&&z.isDepthTexture?z.type:null,V=M(_.stencilBuffer,W),pe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=j(_);G(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,V,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,x)}else{const z=_.textures;for(let W=0;W<z.length;W++){const V=z[W],pe=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),we=T(V.internalFormat,pe,ce,V.colorSpace),Ce=j(_);C&&G(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,we,_.width,_.height):G(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,we,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,we,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),fe(_.depthTexture,0);const W=z.__webglTexture,V=j(_);if(_.depthTexture.format===ss)G(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===os)G(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function oe(x){const _=i.get(x),C=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=z}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const z=x.texture.mipmaps;z&&z.length>0?ie(_.__webglFramebuffer[0],x):ie(_.__webglFramebuffer,x)}else if(C){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),U(_.__webglDepthbuffer[z],x,!1);else{const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,V)}}else{const z=x.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),U(_.__webglDepthbuffer,x,!1);else{const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(x,_,C){const z=i.get(x);_!==void 0&&Se(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&oe(x)}function Ue(x){const _=x.texture,C=i.get(x),z=i.get(_);x.addEventListener("dispose",L);const W=x.textures,V=x.isWebGLCubeRenderTarget===!0,pe=W.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),V){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let we=0;we<_.mipmaps.length;we++)C.__webglFramebuffer[ce][we]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ce=0,we=W.length;ce<we;ce++){const Ce=i.get(W[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&G(x)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<W.length;ce++){const we=W[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const Ce=s.convert(we.format,we.colorSpace),ue=s.convert(we.type),ve=T(we.internalFormat,Ce,ue,we.colorSpace,x.isXRRenderTarget===!0),Pe=j(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ve,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),U(C.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),De(n.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)Se(C.__webglFramebuffer[ce][we],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we);else Se(C.__webglFramebuffer[ce],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ce=0,we=W.length;ce<we;ce++){const Ce=W[ce],ue=i.get(Ce);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),De(n.TEXTURE_2D,Ce),Se(C.__webglFramebuffer,x,Ce,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ce)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ce=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,z.__webglTexture),De(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)Se(C.__webglFramebuffer[we],x,_,n.COLOR_ATTACHMENT0,ce,we);else Se(C.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,ce,0);m(_)&&p(ce),t.unbindTexture()}x.depthBuffer&&oe(x)}function A(x){const _=x.textures;for(let C=0,z=_.length;C<z;C++){const W=_[C];if(m(W)){const V=R(x),pe=i.get(W).__webglTexture;t.bindTexture(V,pe),p(V),t.unbindTexture()}}}const w=[],v=[];function Q(x){if(x.samples>0){if(G(x)===!1){const _=x.textures,C=x.width,z=x.height;let W=n.COLOR_BUFFER_BIT;const V=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(x),ce=_.length>1;if(ce)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const we=x.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const ue=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,C,z,0,0,C,z,W,n.NEAREST),l===!0&&(w.length=0,v.length=0,w.push(n.COLOR_ATTACHMENT0+Ce),x.depthBuffer&&x.resolveDepthBuffer===!1&&(w.push(V),v.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const ue=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function j(x){return Math.min(r.maxSamples,x.samples)}function G(x){const _=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(x){const _=o.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function le(x,_){const C=x.colorSpace,z=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==wr&&C!==li&&(Ze.getTransfer(C)===st?(z!==pn||W!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function $(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=K,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=ae,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=G}function XM(n,e){function t(i,r=li){let s;const o=Ze.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oh)return n.BYTE;if(i===Bh)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===Jl)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===cs)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===kh)return n.RGB;if(i===pn)return n.RGBA;if(i===ss)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===Vh)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===Gh)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===Js||i===Qs||i===eo||i===to)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===rl||i===sl||i===ol)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ll||i===cl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===al||i===ll)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===_l||i===gl||i===vl||i===xl||i===Sl||i===Ml||i===El||i===yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ul)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ml)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===Tl||i===bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===no)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wh||i===Al||i===wl||i===Rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===no)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
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

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mi({vertexShader:qM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new Uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $M extends Gi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const S=new jM,m=t.getContextAttributes();let p=null,R=null;const T=[],M=[],D=new qe;let P=null;const L=new rn;L.viewport=new mt;const B=new rn;B.viewport=new mt;const b=[L,B],y=new pv;let I=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=T[te];return de===void 0&&(de=new va,T[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=T[te];return de===void 0&&(de=new va,T[te]=de),de.getGripSpace()},this.getHand=function(te){let de=T[te];return de===void 0&&(de=new va,T[te]=de),de.getHandSpace()};function q(te){const de=M.indexOf(te.inputSource);if(de===-1)return;const Se=T[de];Se!==void 0&&(Se.update(te.inputSource,te.frame,c||o),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",fe);for(let te=0;te<T.length;te++){const de=M[te];de!==null&&(M[te]=null,T[te].disconnect(de))}I=null,ee=null,S.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,R=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",fe),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,U=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=m.stencil?os:ss,U=m.stencil?rs:Bi);const oe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),R=new zi(h.textureWidth,h.textureHeight,{format:pn,type:qn,depthTexture:new rd(h.textureWidth,h.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),R=new zi(d.framebufferWidth,d.framebufferHeight,{format:pn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function fe(te){for(let de=0;de<te.removed.length;de++){const Se=te.removed[de],U=M.indexOf(Se);U>=0&&(M[U]=null,T[U].disconnect(Se))}for(let de=0;de<te.added.length;de++){const Se=te.added[de];let U=M.indexOf(Se);if(U===-1){for(let oe=0;oe<T.length;oe++)if(oe>=M.length){M.push(Se),U=oe;break}else if(M[oe]===null){M[oe]=Se,U=oe;break}if(U===-1)break}const ie=T[U];ie&&ie.connect(Se)}}const K=new k,re=new k;function H(te,de,Se){K.setFromMatrixPosition(de.matrixWorld),re.setFromMatrixPosition(Se.matrixWorld);const U=K.distanceTo(re),ie=de.projectionMatrix.elements,oe=Se.projectionMatrix.elements,ae=ie[14]/(ie[10]-1),Ue=ie[14]/(ie[10]+1),A=(ie[9]+1)/ie[5],w=(ie[9]-1)/ie[5],v=(ie[8]-1)/ie[0],Q=(oe[8]+1)/oe[0],j=ae*v,G=ae*Q,Z=U/(-v+Q),le=Z*-v;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(le),te.translateZ(Z),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ie[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $=ae+Z,x=Ue+Z,_=j-le,C=G+(U-le),z=A*Ue/x*$,W=w*Ue/x*$;te.projectionMatrix.makePerspective(_,C,z,W,$,x),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,Se=te.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),y.near=B.near=L.near=de,y.far=B.far=L.far=Se,(I!==y.near||ee!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,ee=y.far),L.layers.mask=te.layers.mask|2,B.layers.mask=te.layers.mask|4,y.layers.mask=L.layers.mask|B.layers.mask;const U=te.parent,ie=y.cameras;me(y,U);for(let oe=0;oe<ie.length;oe++)me(ie[oe],U);ie.length===2?H(y,L,B):y.projectionMatrix.copy(L.projectionMatrix),xe(te,y,U)};function xe(te,de,Se){Se===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Cl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let Ae=null;function De(te,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(R,d.framebuffer),e.setRenderTarget(R));let U=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,U=!0);for(let ae=0;ae<Se.length;ae++){const Ue=Se[ae];let A=null;if(d!==null)A=d.getViewport(Ue);else{const v=f.getViewSubImage(h,Ue);A=v.viewport,ae===0&&(e.setRenderTargetTextures(R,v.colorTexture,v.depthStencilTexture),e.setRenderTarget(R))}let w=b[ae];w===void 0&&(w=new rn,w.layers.enable(ae),w.viewport=new mt,b[ae]=w),w.matrix.fromArray(Ue.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ue.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(A.x,A.y,A.width,A.height),ae===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),U===!0&&y.cameras.push(w)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(Se[0]);ae&&ae.isValid&&ae.texture&&S.init(e,ae,r.renderState)}}for(let Se=0;Se<T.length;Se++){const U=M[Se],ie=T[Se];U!==null&&ie!==void 0&&ie.update(U,de,c||o)}Ae&&Ae(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const je=new sd;je.setAnimationLoop(De),this.setAnimationLoop=function(te){Ae=te},this.dispose=function(){}}}const Ri=new Yn,KM=new _t;function ZM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,R,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),T=R.envMap,M=R.envMapRotation;T&&(m.envMap.value=T,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(Ri)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const M=T.program;i.uniformBlockBinding(R,M)}function c(R,T){let M=r[R.id];M===void 0&&(g(R),M=u(R),r[R.id]=M,R.addEventListener("dispose",m));const D=T.program;i.updateUBOMapping(R,D);const P=e.render.frame;s[R.id]!==P&&(h(R),s[R.id]=P)}function u(R){const T=f();R.__bindingPointIndex=T;const M=n.createBuffer(),D=R.__size,P=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const T=r[R.id],M=R.uniforms,D=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,L=M.length;P<L;P++){const B=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,y=B.length;b<y;b++){const I=B[b];if(d(I,P,b,D)===!0){const ee=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let ne=0;for(let fe=0;fe<q.length;fe++){const K=q[fe],re=S(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,ee+ne,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,ne),ne+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(R,T,M,D){const P=R.value,L=T+"_"+M;if(D[L]===void 0)return typeof P=="number"||typeof P=="boolean"?D[L]=P:D[L]=P.clone(),!0;{const B=D[L];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return D[L]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function g(R){const T=R.uniforms;let M=0;const D=16;for(let L=0,B=T.length;L<B;L++){const b=Array.isArray(T[L])?T[L]:[T[L]];for(let y=0,I=b.length;y<I;y++){const ee=b[y],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let ne=0,fe=q.length;ne<fe;ne++){const K=q[ne],re=S(K),H=M%D,me=H%re.boundary,xe=H+me;M+=me,xe!==0&&D-xe<re.storage&&(M+=D-xe),ee.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=M,M+=re.storage}}}const P=M%D;return P>0&&(M+=D-P),R.__size=M,R.__cache={},this}function S(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class QM{constructor(e={}){const{canvas:t=Ig(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),S=new Int32Array(4);let m=null,p=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=nn;let P=0,L=0,B=null,b=-1,y=null;const I=new mt,ee=new mt;let q=null;const ne=new it(0);let fe=0,K=t.width,re=t.height,H=1,me=null,xe=null;const Ae=new mt(0,0,K,re),De=new mt(0,0,K,re);let je=!1;const te=new nd;let de=!1,Se=!1;const U=new _t,ie=new _t,oe=new k,ae=new mt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function w(){return B===null?H:1}let v=i;function Q(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ye,!1),v===null){const F="webgl2";if(v=Q(F,E),v===null)throw Q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,G,Z,le,$,x,_,C,z,W,V,pe,ce,we,Ce,ue,ve,Pe,Ne,_e,Oe,ke,ct,N;function Ee(){j=new cS(v),j.init(),ke=new XM(v,j),G=new nS(v,j,e,ke),Z=new GM(v,j),G.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),le=new hS(v),$=new PM,x=new WM(v,j,Z,$,G,ke,le),_=new rS(M),C=new lS(M),z=new vv(v),ct=new eS(v,z),W=new uS(v,z,le,ct),V=new pS(v,W,z,le),Ne=new dS(v,G,x),ue=new iS($),pe=new CM(M,_,C,j,G,ct,ue),ce=new ZM(M,$),we=new LM,Ce=new BM(j),Pe=new Qx(M,_,C,Z,V,d,l),ve=new kM(M,V,G),N=new JM(v,le,G,Z),_e=new tS(v,j,le),Oe=new fS(v,j,le),le.programs=pe.programs,M.capabilities=G,M.extensions=j,M.properties=$,M.renderLists=we,M.shadowMap=ve,M.state=Z,M.info=le}Ee();const J=new $M(M,v);this.xr=J,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(K,re,!1))},this.getSize=function(E){return E.set(K,re)},this.setSize=function(E,F,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,re=F,t.width=Math.floor(E*H),t.height=Math.floor(F*H),X===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(K*H,re*H).floor()},this.setDrawingBufferSize=function(E,F,X){K=E,re=F,H=X,t.width=Math.floor(E*X),t.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Ae)},this.setViewport=function(E,F,X,Y){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,F,X,Y),Z.viewport(I.copy(Ae).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(De)},this.setScissor=function(E,F,X,Y){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,F,X,Y),Z.scissor(ee.copy(De).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){Z.setScissorTest(je=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let Y=0;if(E){let O=!1;if(B!==null){const he=B.texture.format;O=he===ic||he===nc||he===tc}if(O){const he=B.texture.type,Me=he===qn||he===Bi||he===is||he===rs||he===Ql||he===ec,be=Pe.getClearColor(),Re=Pe.getClearAlpha(),Be=be.r,Fe=be.g,Le=be.b;Me?(g[0]=Be,g[1]=Fe,g[2]=Le,g[3]=Re,v.clearBufferuiv(v.COLOR,0,g)):(S[0]=Be,S[1]=Fe,S[2]=Le,S[3]=Re,v.clearBufferiv(v.COLOR,0,S))}else Y|=v.COLOR_BUFFER_BIT}F&&(Y|=v.DEPTH_BUFFER_BIT),X&&(Y|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Pe.dispose(),we.dispose(),Ce.dispose(),$.dispose(),_.dispose(),C.dispose(),V.dispose(),ct.dispose(),N.dispose(),pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",lc),J.removeEventListener("sessionend",cc),xi.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=le.autoReset,F=ve.enabled,X=ve.autoUpdate,Y=ve.needsUpdate,O=ve.type;Ee(),le.autoReset=E,ve.enabled=F,ve.autoUpdate=X,ve.needsUpdate=Y,ve.type=O}function ye(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ge(E){const F=E.target;F.removeEventListener("dispose",Ge),dt(F)}function dt(E){wt(E),$.remove(E)}function wt(E){const F=$.get(E).programs;F!==void 0&&(F.forEach(function(X){pe.releaseProgram(X)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,Y,O,he){F===null&&(F=Ue);const Me=O.isMesh&&O.matrixWorld.determinant()<0,be=fd(E,F,X,Y,O);Z.setMaterial(Y,Me);let Re=X.index,Be=1;if(Y.wireframe===!0){if(Re=W.getWireframeAttribute(X),Re===void 0)return;Be=2}const Fe=X.drawRange,Le=X.attributes.position;let $e=Fe.start*Be,Je=(Fe.start+Fe.count)*Be;he!==null&&($e=Math.max($e,he.start*Be),Je=Math.min(Je,(he.start+he.count)*Be)),Re!==null?($e=Math.max($e,0),Je=Math.min(Je,Re.count)):Le!=null&&($e=Math.max($e,0),Je=Math.min(Je,Le.count));const gt=Je-$e;if(gt<0||gt===1/0)return;ct.setup(O,Y,be,X,Re);let pt,Ke=_e;if(Re!==null&&(pt=z.get(Re),Ke=Oe,Ke.setIndex(pt)),O.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*w()),Ke.setMode(v.LINES)):Ke.setMode(v.TRIANGLES);else if(O.isLine){let Ie=Y.linewidth;Ie===void 0&&(Ie=1),Z.setLineWidth(Ie*w()),O.isLineSegments?Ke.setMode(v.LINES):O.isLineLoop?Ke.setMode(v.LINE_LOOP):Ke.setMode(v.LINE_STRIP)}else O.isPoints?Ke.setMode(v.POINTS):O.isSprite&&Ke.setMode(v.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ro("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,bt=O._multiDrawCounts,Qe=O._multiDrawCount,ln=Re?z.get(Re).bytesPerElement:1,Wi=$.get(Y).currentProgram.getUniforms();for(let qt=0;qt<Qe;qt++)Wi.setValue(v,"_gl_DrawID",qt),Ke.render(Ie[qt]/ln,bt[qt])}else if(O.isInstancedMesh)Ke.renderInstances($e,gt,O.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bt=Math.min(X.instanceCount,Ie);Ke.renderInstances($e,gt,bt)}else Ke.render($e,gt)};function rt(E,F,X){E.transparent===!0&&E.side===Hn&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,ms(E,F,X),E.side=pi,E.needsUpdate=!0,ms(E,F,X),E.side=Hn):ms(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),p=Ce.get(X),p.init(F),T.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==X&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const Y=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const be=he[Me];rt(be,X,O),Y.add(be)}else rt(he,X,O),Y.add(he)}),p=T.pop(),Y},this.compileAsync=function(E,F,X=null){const Y=this.compile(E,F,X);return new Promise(O=>{function he(){if(Y.forEach(function(Me){$.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){O(E);return}setTimeout(he,10)}j.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let an=null;function Rn(E){an&&an(E)}function lc(){xi.stop()}function cc(){xi.start()}const xi=new sd;xi.setAnimationLoop(Rn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(E){an=E,J.setAnimationLoop(E),E===null?xi.stop():xi.start()},J.addEventListener("sessionstart",lc),J.addEventListener("sessionend",cc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,F,B),p=Ce.get(E,T.length),p.init(F),T.push(p),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(ie),Se=this.localClippingEnabled,de=ue.init(this.clippingPlanes,Se),m=we.get(E,R.length),m.init(),R.push(m),J.enabled===!0&&J.isPresenting===!0){const he=M.xr.getDepthSensingMesh();he!==null&&Fo(he,F,-1/0,M.sortObjects)}Fo(E,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(me,xe),A=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,A&&Pe.addToRenderList(m,E),this.info.render.frame++,de===!0&&ue.beginShadows();const X=p.state.shadowsArray;ve.render(X,E,F),de===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const he=F.cameras;if(O.length>0)for(let Me=0,be=he.length;Me<be;Me++){const Re=he[Me];fc(Y,O,E,Re)}A&&Pe.render(E);for(let Me=0,be=he.length;Me<be;Me++){const Re=he[Me];uc(m,E,Re,Re.viewport)}}else O.length>0&&fc(Y,O,E,F),A&&Pe.render(E),uc(m,E,F);B!==null&&L===0&&(x.updateMultisampleRenderTarget(B),x.updateRenderTargetMipmap(B)),E.isScene===!0&&E.onAfterRender(M,E,F),ct.resetDefaultState(),b=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],de===!0&&ue.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Fo(E,F,X,Y){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){Y&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Me=V.update(E),be=E.material;be.visible&&m.push(E,Me,be,X,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const Me=V.update(E),be=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ae.copy(Me.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(ie)),Array.isArray(be)){const Re=Me.groups;for(let Be=0,Fe=Re.length;Be<Fe;Be++){const Le=Re[Be],$e=be[Le.materialIndex];$e&&$e.visible&&m.push(E,Me,$e,X,ae.z,Le)}}else be.visible&&m.push(E,Me,be,X,ae.z,null)}}const he=E.children;for(let Me=0,be=he.length;Me<be;Me++)Fo(he[Me],F,X,Y)}function uc(E,F,X,Y){const O=E.opaque,he=E.transmissive,Me=E.transparent;p.setupLightsView(X),de===!0&&ue.setGlobalState(M.clippingPlanes,X),Y&&Z.viewport(I.copy(Y)),O.length>0&&ps(O,F,X),he.length>0&&ps(he,F,X),Me.length>0&&ps(Me,F,X),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fc(E,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new zi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?cs:qn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const he=p.state.transmissionRenderTarget[Y.id],Me=Y.viewport||I;he.setSize(Me.z*M.transmissionResolutionScale,Me.w*M.transmissionResolutionScale);const be=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(ne),fe=M.getClearAlpha(),fe<1&&M.setClearColor(16777215,.5),M.clear(),A&&Pe.render(X);const Re=M.toneMapping;M.toneMapping=hi;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),de===!0&&ue.setGlobalState(M.clippingPlanes,Y),ps(E,X,Y),x.updateMultisampleRenderTarget(he),x.updateRenderTargetMipmap(he),j.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Le=0,$e=F.length;Le<$e;Le++){const Je=F[Le],gt=Je.object,pt=Je.geometry,Ke=Je.material,Ie=Je.group;if(Ke.side===Hn&&gt.layers.test(Y.layers)){const bt=Ke.side;Ke.side=Gt,Ke.needsUpdate=!0,hc(gt,X,Y,pt,Ke,Ie),Ke.side=bt,Ke.needsUpdate=!0,Fe=!0}}Fe===!0&&(x.updateMultisampleRenderTarget(he),x.updateRenderTargetMipmap(he))}M.setRenderTarget(be),M.setClearColor(ne,fe),Be!==void 0&&(Y.viewport=Be),M.toneMapping=Re}function ps(E,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,he=E.length;O<he;O++){const Me=E[O],be=Me.object,Re=Me.geometry,Be=Me.group;let Fe=Me.material;Fe.allowOverride===!0&&Y!==null&&(Fe=Y),be.layers.test(X.layers)&&hc(be,F,X,Re,Fe,Be)}}function hc(E,F,X,Y,O,he){E.onBeforeRender(M,F,X,Y,O,he),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,F,X,Y,E,he),O.transparent===!0&&O.side===Hn&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,M.renderBufferDirect(X,F,Y,O,E,he),O.side=pi,O.needsUpdate=!0,M.renderBufferDirect(X,F,Y,O,E,he),O.side=Hn):M.renderBufferDirect(X,F,Y,O,E,he),E.onAfterRender(M,F,X,Y,O,he)}function ms(E,F,X){F.isScene!==!0&&(F=Ue);const Y=$.get(E),O=p.state.lights,he=p.state.shadowsArray,Me=O.state.version,be=pe.getParameters(E,O.state,he,F,X),Re=pe.getProgramCacheKey(be);let Be=Y.programs;Y.environment=E.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(E.isMeshStandardMaterial?C:_).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",Ge),Be=new Map,Y.programs=Be);let Fe=Be.get(Re);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===Me)return pc(E,be),Fe}else be.uniforms=pe.getUniforms(E),E.onBeforeCompile(be,M),Fe=pe.acquireProgram(be,Re),Be.set(Re,Fe),Y.uniforms=be.uniforms;const Le=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ue.uniform),pc(E,be),Y.needsLights=dd(E),Y.lightsStateVersion=Me,Y.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function dc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=so.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function pc(E,F){const X=$.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function fd(E,F,X,Y,O){F.isScene!==!0&&(F=Ue),x.resetTextureUnits();const he=F.fog,Me=Y.isMeshStandardMaterial?F.environment:null,be=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:wr,Re=(Y.isMeshStandardMaterial?C:_).get(Y.envMap||Me),Be=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,Je=!!X.morphAttributes.color;let gt=hi;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=M.toneMapping);const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ke=pt!==void 0?pt.length:0,Ie=$.get(Y),bt=p.state.lights;if(de===!0&&(Se===!0||E!==y)){const Ut=E===y&&Y.id===b;ue.setState(Y,E,Ut)}let Qe=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==bt.state.version||Ie.outputColorSpace!==be||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==Re||Y.fog===!0&&Ie.fog!==he||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ue.numPlanes||Ie.numIntersection!==ue.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==Fe||Ie.morphTargets!==Le||Ie.morphNormals!==$e||Ie.morphColors!==Je||Ie.toneMapping!==gt||Ie.morphTargetsCount!==Ke)&&(Qe=!0):(Qe=!0,Ie.__version=Y.version);let ln=Ie.currentProgram;Qe===!0&&(ln=ms(Y,F,O));let Wi=!1,qt=!1,Pr=!1;const ft=ln.getUniforms(),Qt=Ie.uniforms;if(Z.useProgram(ln.program)&&(Wi=!0,qt=!0,Pr=!0),Y.id!==b&&(b=Y.id,qt=!0),Wi||y!==E){Z.buffers.depth.getReversed()?(U.copy(E.projectionMatrix),Ng(U),Fg(U),ft.setValue(v,"projectionMatrix",U)):ft.setValue(v,"projectionMatrix",E.projectionMatrix),ft.setValue(v,"viewMatrix",E.matrixWorldInverse);const zt=ft.map.cameraPosition;zt!==void 0&&zt.setValue(v,oe.setFromMatrixPosition(E.matrixWorld)),G.logarithmicDepthBuffer&&ft.setValue(v,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ft.setValue(v,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,qt=!0,Pr=!0)}if(O.isSkinnedMesh){ft.setOptional(v,O,"bindMatrix"),ft.setOptional(v,O,"bindMatrixInverse");const Ut=O.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(v,"boneTexture",Ut.boneTexture,x))}O.isBatchedMesh&&(ft.setOptional(v,O,"batchingTexture"),ft.setValue(v,"batchingTexture",O._matricesTexture,x),ft.setOptional(v,O,"batchingIdTexture"),ft.setValue(v,"batchingIdTexture",O._indirectTexture,x),ft.setOptional(v,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(v,"batchingColorTexture",O._colorsTexture,x));const en=X.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ne.update(O,X,ln),(qt||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,ft.setValue(v,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qt.envMap.value=Re,Qt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Qt.envMapIntensity.value=F.environmentIntensity),qt&&(ft.setValue(v,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&hd(Qt,Pr),he&&Y.fog===!0&&ce.refreshFogUniforms(Qt,he),ce.refreshMaterialUniforms(Qt,Y,H,re,p.state.transmissionRenderTarget[E.id]),so.upload(v,dc(Ie),Qt,x)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(so.upload(v,dc(Ie),Qt,x),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ft.setValue(v,"center",O.center),ft.setValue(v,"modelViewMatrix",O.modelViewMatrix),ft.setValue(v,"normalMatrix",O.normalMatrix),ft.setValue(v,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ut=Y.uniformsGroups;for(let zt=0,Oo=Ut.length;zt<Oo;zt++){const Si=Ut[zt];N.update(Si,ln),N.bind(Si,ln)}}return ln}function hd(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function dd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,F,X){const Y=$.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=F,$.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const X=$.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const pd=v.createFramebuffer();this.setRenderTarget=function(E,F=0,X=0){B=E,P=F,L=X;let Y=!0,O=null,he=!1,Me=!1;if(E){const Re=$.get(E);if(Re.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(v.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)x.setupRenderTarget(E);else if(Re.__hasExternalTextures)x.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Le=E.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&$.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const Fe=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?O=Fe[F][X]:O=Fe[F],he=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?O=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[X]:O=Fe,I.copy(E.viewport),ee.copy(E.scissor),q=E.scissorTest}else I.copy(Ae).multiplyScalar(H).floor(),ee.copy(De).multiplyScalar(H).floor(),q=je;if(X!==0&&(O=pd),Z.bindFramebuffer(v.FRAMEBUFFER,O)&&Y&&Z.drawBuffers(E,O),Z.viewport(I),Z.scissor(ee),Z.setScissorTest(q),he){const Re=$.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,X)}else if(Me){const Re=$.get(E.texture),Be=F;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Re.__webglTexture,X,Be)}else if(E!==null&&X!==0){const Re=$.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Re.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(E,F,X,Y,O,he,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){Z.bindFramebuffer(v.FRAMEBUFFER,be);try{const Re=E.texture,Be=Re.format,Fe=Re.type;if(!G.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-Y&&X>=0&&X<=E.height-O&&v.readPixels(F,X,Y,O,ke.convert(Be),ke.convert(Fe),he)}finally{const Re=B!==null?$.get(B).__webglFramebuffer:null;Z.bindFramebuffer(v.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,Y,O,he,Me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(F>=0&&F<=E.width-Y&&X>=0&&X<=E.height-O){Z.bindFramebuffer(v.FRAMEBUFFER,be);const Re=E.texture,Be=Re.format,Fe=Re.type;if(!G.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.bufferData(v.PIXEL_PACK_BUFFER,he.byteLength,v.STREAM_READ),v.readPixels(F,X,Y,O,ke.convert(Be),ke.convert(Fe),0);const $e=B!==null?$.get(B).__webglFramebuffer:null;Z.bindFramebuffer(v.FRAMEBUFFER,$e);const Je=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Ug(v,Je,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,he),v.deleteBuffer(Le),v.deleteSync(Je),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){const Y=Math.pow(2,-X),O=Math.floor(E.image.width*Y),he=Math.floor(E.image.height*Y),Me=F!==null?F.x:0,be=F!==null?F.y:0;x.setTexture2D(E,0),v.copyTexSubImage2D(v.TEXTURE_2D,X,0,0,Me,be,O,he),Z.unbindTexture()};const md=v.createFramebuffer(),_d=v.createFramebuffer();this.copyTextureToTexture=function(E,F,X=null,Y=null,O=0,he=null){he===null&&(O!==0?(ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=O,O=0):he=0);let Me,be,Re,Be,Fe,Le,$e,Je,gt;const pt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(X!==null)Me=X.max.x-X.min.x,be=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Fe=X.min.y,Le=X.isBox3?X.min.z:0;else{const en=Math.pow(2,-O);Me=Math.floor(pt.width*en),be=Math.floor(pt.height*en),E.isDataArrayTexture?Re=pt.depth:E.isData3DTexture?Re=Math.floor(pt.depth*en):Re=1,Be=0,Fe=0,Le=0}Y!==null?($e=Y.x,Je=Y.y,gt=Y.z):($e=0,Je=0,gt=0);const Ke=ke.convert(F.format),Ie=ke.convert(F.type);let bt;F.isData3DTexture?(x.setTexture3D(F,0),bt=v.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),bt=v.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),bt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=v.getParameter(v.UNPACK_ROW_LENGTH),ln=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Wi=v.getParameter(v.UNPACK_SKIP_PIXELS),qt=v.getParameter(v.UNPACK_SKIP_ROWS),Pr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,pt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,pt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Be),v.pixelStorei(v.UNPACK_SKIP_ROWS,Fe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Le);const ft=E.isDataArrayTexture||E.isData3DTexture,Qt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const en=$.get(E),Ut=$.get(F),zt=$.get(en.__renderTarget),Oo=$.get(Ut.__renderTarget);Z.bindFramebuffer(v.READ_FRAMEBUFFER,zt.__webglFramebuffer),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,Oo.__webglFramebuffer);for(let Si=0;Si<Re;Si++)ft&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,$.get(E).__webglTexture,O,Le+Si),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,$.get(F).__webglTexture,he,gt+Si)),v.blitFramebuffer(Be,Fe,Me,be,$e,Je,Me,be,v.DEPTH_BUFFER_BIT,v.NEAREST);Z.bindFramebuffer(v.READ_FRAMEBUFFER,null),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||$.has(E)){const en=$.get(E),Ut=$.get(F);Z.bindFramebuffer(v.READ_FRAMEBUFFER,md),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,_d);for(let zt=0;zt<Re;zt++)ft?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,en.__webglTexture,O,Le+zt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,en.__webglTexture,O),Qt?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ut.__webglTexture,he,gt+zt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ut.__webglTexture,he),O!==0?v.blitFramebuffer(Be,Fe,Me,be,$e,Je,Me,be,v.COLOR_BUFFER_BIT,v.NEAREST):Qt?v.copyTexSubImage3D(bt,he,$e,Je,gt+zt,Be,Fe,Me,be):v.copyTexSubImage2D(bt,he,$e,Je,Be,Fe,Me,be);Z.bindFramebuffer(v.READ_FRAMEBUFFER,null),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Qt?E.isDataTexture||E.isData3DTexture?v.texSubImage3D(bt,he,$e,Je,gt,Me,be,Re,Ke,Ie,pt.data):F.isCompressedArrayTexture?v.compressedTexSubImage3D(bt,he,$e,Je,gt,Me,be,Re,Ke,pt.data):v.texSubImage3D(bt,he,$e,Je,gt,Me,be,Re,Ke,Ie,pt):E.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,he,$e,Je,Me,be,Ke,Ie,pt.data):E.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,he,$e,Je,pt.width,pt.height,Ke,pt.data):v.texSubImage2D(v.TEXTURE_2D,he,$e,Je,Me,be,Ke,Ie,pt);v.pixelStorei(v.UNPACK_ROW_LENGTH,Qe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ln),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Wi),v.pixelStorei(v.UNPACK_SKIP_ROWS,qt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Pr),he===0&&F.generateMipmaps&&v.generateMipmap(bt),Z.unbindTexture()},this.copyTextureToTexture3D=function(E,F,X=null,Y=null,O=0){return ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,X,Y,O)},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&x.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),Z.unbindTexture()},this.resetState=function(){P=0,L=0,B=null,Z.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const sf={type:"change"},ac={type:"start"},ud={type:"end"},Gs=new sc,of=new ai,eE=Math.cos(70*Lg.DEG2RAD),Mt=new k,kt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Aa=1e-6;class tE extends _v{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:ur.ROTATE,TWO:ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Hi,this._lastTargetPosition=new k,this._quat=new Hi().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lu,this._sphericalDelta=new Lu,this._scale=1,this._panOffset=new k,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new k,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iE.bind(this),this._onPointerDown=nE.bind(this),this._onPointerUp=rE.bind(this),this._onContextMenu=fE.bind(this),this._onMouseWheel=aE.bind(this),this._onKeyDown=lE.bind(this),this._onTouchStart=cE.bind(this),this._onTouchMove=uE.bind(this),this._onMouseDown=sE.bind(this),this._onMouseMove=oE.bind(this),this._interceptControlDown=hE.bind(this),this._interceptControlUp=dE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sf),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),r<-Math.PI?r+=kt:r>Math.PI&&(r-=kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gs.origin.copy(this.object.position),Gs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gs.direction))<eE?this.object.lookAt(this.target):(of.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gs.intersectPlane(of,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Aa||this._lastTargetPosition.distanceToSquared(this.target)>Aa?(this.dispatchEvent(sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Mt.copy(r).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function iE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function rE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case vr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case vr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(ac)}function oE(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function aE(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(ac),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ud))}function lE(n){this.enabled!==!1&&this._handleKeyDown(n)}function cE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ur.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case ur.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case ur.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case ur.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(ac)}function uE(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function fE(n){this.enabled!==!1&&n.preventDefault()}function hE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pE=Vi({__name:"CosmicLoading",props:{fade:{type:Boolean}},setup(n){let e,t,i,r=0;return Ao(()=>{var m;t=new av,t.background=new it(16),i=new rn(60,window.innerWidth/window.innerHeight,1,1e3),i.position.set(0,4,21),e=new QM({antialias:!0}),e.setSize(window.innerWidth,window.innerHeight),(m=document.getElementById("cosmic-container"))==null||m.appendChild(e.domElement);const s=new tE(i,e.domElement);s.enableDamping=!0,s.enablePan=!1;const o={time:{value:0}},a=[],l=[],c=()=>{l.push(Math.random()*Math.PI,Math.random()*Math.PI*2,(Math.random()*.9+.1)*Math.PI*.1,Math.random()*.9+.1)},u=new Array(5e4).fill(0).map(()=>(a.push(Math.random()*1.5+.5),c(),new k().randomDirection().multiplyScalar(Math.random()*.5+9.5)));for(let p=0;p<1e5;p++){const M=Math.pow(Math.random(),1.5),D=Math.sqrt(40*40*M+(1-M)*10*10);u.push(new k().setFromCylindricalCoords(D,Math.random()*2*Math.PI,(Math.random()-.5)*2)),a.push(Math.random()*1.5+.5),c()}const f=new $n().setFromPoints(u);f.setAttribute("sizes",new Xn(a,1)),f.setAttribute("shift",new Xn(l,4));const h=new id({size:.125,transparent:!0,depthTest:!1,blending:Ga,onBeforeCompile:p=>{p.uniforms.time=o.time,p.vertexShader=`
          uniform float time;
          attribute float sizes;
          attribute vec4 shift;
          varying vec3 vColor;
          varying float d;
          ${p.vertexShader}
        `.replace("gl_PointSize = size;","gl_PointSize = size * sizes;").replace("#include <color_vertex>",`#include <color_vertex>
            d = length(abs(position)/vec3(40.,10.,40.));
            d = clamp(d, 0., 1.);
            float pulse = 0.5 + 0.5 * sin(time + d * 10.0);
            vColor = mix(vec3(0.1,0.1,0.3), vec3(0.6,0.7,1.0), pulse);`).replace("#include <begin_vertex>",`#include <begin_vertex>
              float t = time;
              float moveT = mod(shift.x + shift.z * t, PI2);
              float moveS = mod(shift.y + shift.z * t, PI2);
              transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS)*sin(moveT)) * shift.w;`),p.fragmentShader=`
          varying vec3 vColor;
          varying float d;
          ${p.fragmentShader}
        `.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
             float dist = length(gl_PointCoord.xy - 0.5);`).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d));")}}),d=new uv(f,h);d.rotation.order="ZYX",d.rotation.z=.2,t.add(d);const g=new mv,S=()=>{o.time.value=g.getElapsedTime(),d.rotation.y=g.getElapsedTime()*.05,s.update(),e.render(t,i),r=requestAnimationFrame(S)};S(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)})}),Yf(()=>{cancelAnimationFrame(r),e.dispose()}),(s,o)=>(Pt(),Vt("div",{id:"cosmic-container",class:ui({fadeOut:s.fade})},o[0]||(o[0]=[at("div",{class:"welcome-text"},[gr("Welcome to"),at("br"),gr("NASA Explorer")],-1),at("div",{class:"loading-text"},"Loading...",-1)]),2))}}),mE=Kl(pE,[["__scopeId","data-v-f0d10be1"]]),_E={class:"min-h-screen text-black dark:text-white transition-colors duration-300 py-12 px-4 flex flex-col items-center"},gE=Vi({__name:"App",setup(n){const e=Zt(!1),t=Zt(!0),i=Zt(!1);function r(o){document.documentElement.classList.toggle("dark",o)}function s(){e.value=!e.value,r(e.value)}return Ao(()=>{e.value=window.matchMedia("(prefers-color-scheme: dark)").matches,r(e.value),setTimeout(()=>{t.value=!1,setTimeout(()=>{i.value=!0},2200)},5e3)}),(o,a)=>(Pt(),Vt("div",{class:ui([{dark:e.value},"bg-gray-50 dark:bg-gray-900"])},[i.value?ii("",!0):(Pt(),ph(mE,{key:0,fade:!t.value,class:"fixed inset-0 z-[9999]"},null,8,["fade"])),Gf(at("div",_E,[xt(H_,{isDark:e.value,onToggleDark:s},null,8,["isDark"]),xt(ze(Ih))],512),[[fm,!t.value]]),xt(V_)],2))}}),vE="modulepreload",xE=function(n){return"/"+n},af={},lf=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=xE(l),l in af)return;af[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":vE,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},SE="oYN9Rk9B6Bm2Kp3sfgr1cnZUH8mbxeHvIrpoKV1U",ME=5;function wa(n=new Date){const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function cf(n){const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)}function EE(){const n=wa(),e=Zt(n),t=Zt(null),i=Zt(!1),r=Zt(""),s=Zt("");async function o(h){const d=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${SE}&date=${h}`);if(!d.ok)throw d.status===404||d.status===400?new Error("NOT_READY"):new Error("NETWORK");return d.json()}async function a(){i.value=!0,r.value="",s.value="",t.value=null;try{const d=await o(e.value);t.value=d,e.value=d.date,i.value=!1;return}catch(d){if(d.message!=="NOT_READY"){r.value="Network error – please try again later.",i.value=!1;return}}let h=cf(e.value);for(let d=1;d<=ME;d++){h.setDate(h.getDate()-1);const g=wa(h);try{const S=await o(g);t.value=S,e.value=S.date,s.value=`Content is shown according to NASA's official publish time — displaying ${S.date}.`,i.value=!1;return}catch(S){if(S.message!=="NOT_READY"){r.value="Network error – please try again later.",i.value=!1;return}}}r.value="NASA has not published a new APOD in the last few days.",i.value=!1}function l(){e.value=n,a()}Ao(a);function c(h){const d=cf(e.value);d.setDate(d.getDate()+h),!(d>new Date)&&(e.value=wa(d),a())}function u(){c(-1)}function f(){c(1)}return{today:n,selectedDate:e,apod:t,loading:i,error:r,notice:s,fetchApod:a,goToToday:l,prevDay:u,nextDay:f}}const yE={ref:"card",class:"w-full max-w-2xl mx-auto rounded-2xl shadow-lg p-6 text-center bg-white dark:bg-gray-800 transition relative"},TE=["disabled"],bE=["disabled"],AE=["max"],wE={key:0,class:"mt-4 text-yellow-600 dark:text-yellow-400 text-sm italic"},RE={key:1,class:"mt-4 text-gray-500 dark:text-gray-400"},CE={key:2,class:"mt-4 text-red-500 dark:text-red-400"},PE={key:3,class:"mt-6"},DE={class:"text-2xl font-semibold mb-2"},LE={key:0,class:"mx-auto max-w-md"},IE=["src","alt"],UE={key:0,class:"mt-3 text-xs text-gray-400 dark:text-gray-500 italic"},NE={key:0,class:"relative inline-block"},FE=["src","alt"],OE=["src"],BE={class:"mt-4 text-left text-sm text-gray-700 dark:text-gray-200 px-6"},zE=Vi({__name:"HomePage",setup(n){const{today:e,selectedDate:t,apod:i,loading:r,error:s,notice:o,fetchApod:a,goToToday:l,prevDay:c,nextDay:u}=EE(),f=Zt(!1),h=Zt(!1),d=Zt(null),g=Zt(!1);function S(){const M=d.value;if(!M)return;const D=M.getBoundingClientRect(),P=window.scrollY+D.top+D.height/2-window.innerHeight/2;window.scrollTo({top:P,behavior:"smooth"}),g.value=!1}function m(){g.value&&S()}function p(){c(),g.value=!0}function R(){u(),g.value=!0}function T(){var M;(M=i.value)!=null&&M.hdurl&&window.open(i.value.hdurl,"_blank")}return(M,D)=>(Pt(),Vt("div",yE,[at("button",{ref:"prevBtn",class:"nav-btn left-8",disabled:ze(r),onClick:p},D[6]||(D[6]=[at("svg",{viewBox:"0 0 24 24",class:"w-5 h-5 fill-white -translate-x-[2px]"},[at("polygon",{points:"15,6 9,12 15,18"})],-1)]),8,TE),at("button",{ref:"nextBtn",class:"nav-btn right-8",disabled:ze(r)||ze(t)===ze(e),onClick:R},D[7]||(D[7]=[at("svg",{viewBox:"0 0 24 24",class:"w-5 h-5 fill-white translate-x-[2px]"},[at("polygon",{points:"9,6 15,12 9,18"})],-1)]),8,bE),D[8]||(D[8]=at("h1",{class:"text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"}," Astronomy Picture of the Day ",-1)),D[9]||(D[9]=at("p",{class:"text-gray-600 dark:text-gray-300"}," Explore the Astronomy Picture of the Day from NASA's open API. ",-1)),D[10]||(D[10]=at("p",{class:"text-xs text-gray-400 dark:text-gray-500 italic"}," Content is shown according to local time ",-1)),Gf(at("input",{type:"date",max:ze(e),"onUpdate:modelValue":D[0]||(D[0]=P=>At(t)?t.value=P:null),onChange:D[1]||(D[1]=(...P)=>ze(a)&&ze(a)(...P)),class:"mt-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded"},null,40,AE),[[Am,ze(t)]]),at("button",{class:"mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition",onClick:D[2]||(D[2]=(...P)=>ze(l)&&ze(l)(...P))}," Get Today's Image "),ze(o)?(Pt(),Vt("div",wE,cr(ze(o)),1)):ii("",!0),ze(r)?(Pt(),Vt("div",RE,"Loading…")):ze(s)?(Pt(),Vt("div",CE,"Error: "+cr(ze(s)),1)):ii("",!0),ze(i)?(Pt(),Vt("div",PE,[at("h2",DE,cr(ze(i).title),1),ze(i).media_type==="image"?(Pt(),Vt("div",LE,[at("img",{ref_key:"imageEl",ref:d,src:f.value&&ze(i).hdurl?ze(i).hdurl:ze(i).url,alt:ze(i).title,onLoad:m,class:"w-full rounded shadow transition duration-300 hover:scale-105 hover:brightness-110 cursor-zoom-in",onMouseenter:D[3]||(D[3]=P=>ze(i).hdurl&&(f.value=!0)),onMouseleave:D[4]||(D[4]=P=>f.value=!1),onClick:T},null,40,IE),ze(i).hdurl?(Pt(),Vt("p",UE," Click to open in new tab ")):ii("",!0)])):ze(i).media_type==="video"?(Pt(),Vt(Mn,{key:1},[ze(i).thumbnail_url&&!h.value?(Pt(),Vt("div",NE,[at("img",{src:ze(i).thumbnail_url,alt:ze(i).title,class:"mx-auto rounded shadow max-w-md"},null,8,FE),at("button",{onClick:D[5]||(D[5]=P=>h.value=!0),class:"absolute inset-0 flex items-center justify-center text-white text-5xl bg-black/40 hover:bg-black/60 rounded"}," ▶ ")])):ii("",!0),!ze(i).thumbnail_url||h.value?(Pt(),Vt("iframe",{key:1,src:ze(i).url,class:"mx-auto rounded shadow max-w-md aspect-video",allowfullscreen:""},null,8,OE)):ii("",!0)],64)):ii("",!0),at("p",BE,cr(ze(i).explanation),1)])):ii("",!0)],512))}}),HE=Kl(zE,[["__scopeId","data-v-f8179147"]]),kE=[{path:"/",redirect:"/apod"},{path:"/apod",component:HE,name:"APOD"},{path:"/asteroids",component:()=>lf(()=>import("./AsteroidStats-C7G9Q_CY.js"),[]),name:"Asteroids"},{path:"/iss",component:()=>lf(()=>import("./IssTracker-CihJSm67.js"),__vite__mapDeps([0,1])),name:"ISS"}],VE=D_({history:l_(),routes:kE});Cm(gE).use(VE).mount("#app");export{Mn as F,Kl as _,at as a,ii as b,Vt as c,Vi as d,GE as e,Pt as f,jf as g,Ys as h,Yf as i,ui as j,gr as k,fm as l,ph as m,Bf as n,Ao as o,Zt as r,cr as t,ze as u,Am as v,Gf as w};
