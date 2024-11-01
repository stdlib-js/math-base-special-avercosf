// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"",u=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,u,i,a;if(null==t)return r.call(t);e=t[f],a=f,n=null!=(i=t)&&o.call(i,a);try{t[f]=void 0}catch(n){return r.call(t)}return u=r.call(t),n?t[f]=e:delete t[f],u}:function(t){return r.call(t)},i="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,l=function(){var t,n,r;if("function"!=typeof c)return!1;try{n=new c([1,3.14,-3.14,5e40]),r=n,t=(i&&r instanceof Float32Array||"[object Float32Array]"===u(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===a}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")},p=new l(1),d="function"==typeof t?t:function(t){return p[0]=t,p[0]},b=Math.sqrt;function s(t){return d(b(d(t)))}var m="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0,v=function(){var t,n,r;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(m&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?h:function(){throw new Error("not implemented")},w=new l(1),S=new v(w.buffer),F=new v(1),g=new l(F.buffer),U=d(3.141592653589793);function T(t){return 0===t?.16666586697101593:d(.16666586697101593+d(t*d(-.04274342209100723+d(-.008656363002955914*t))))}var j=3.1415925026,I=1.5707962513,N=7.5497894159e-8,M=-4096,O=1.4901161193847656e-8,E=-.7066296339,x=d(I+N);function P(t){var n,r,o,e,f,u,i,a,c,y,l;return function(t){return t!=t}(t)||(t=d(t))<-1||t>1?NaN:1===t?0:-1===t?U:(o=function(t){return Math.abs(t)}(t),o<.5?o<=O?x:(e=d(t*t),f=d(e*T(e)),u=d(1+d(e*E)),i=d(f/u),d(I-d(t-d(N-d(t*i))))):t<-.5?(e=d(.5*d(1+t)),f=d(e*T(e)),u=d(1+d(e*E)),a=s(e),i=d(f/u),y=d(d(i*a)-N),d(j-d(2*d(a+y)))):(n=function(t){return w[0]=t,S[0]}(a=s(e=d(.5*d(1-t)))),l=n&M,F[0]=l,r=g[0],c=d(d(e-d(r*r))/d(a+r)),f=d(e*T(e)),u=d(1+d(e*E)),i=d(f/u),y=d(d(i*a)+c),d(2*d(r+y))))}return function(t){return P(d(1+d(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).avercosf=n();
//# sourceMappingURL=browser.js.map
