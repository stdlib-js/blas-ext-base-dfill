"use strict";var s=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=s(function(C,a){
var v=8;function l(t,r,e,n,_){var i,f,u;if(t<=0)return e;if(i=_,n===1){if(f=t%v,f>0)for(u=0;u<f;u++)e[i]=r,i+=n;if(t<v)return e;for(u=f;u<t;u+=v)e[i]=r,e[i+1]=r,e[i+2]=r,e[i+3]=r,e[i+4]=r,e[i+5]=r,e[i+6]=r,e[i+7]=r,i+=v;return e}for(u=0;u<t;u++)e[i]=r,i+=n;return e}a.exports=l
});var c=s(function(D,d){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=o();function O(t,r,e,n){return M(t,r,e,n,E(t,n))}d.exports=O
});var j=s(function(F,m){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),g=o();b(y,"ndarray",g);m.exports=y
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),q,R=w(k(__dirname,"./native.js"));z(R)?q=A:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
