"use strict";var s=function(f,i){return function(){return i||f((i={exports:{}}).exports,i),i.exports}};var y=s(function(D,m){
var q=8;function O(f,i,e,n){var v,r,u;if(f<=0)return e;if(n===1){if(u=f%q,u>0)for(r=0;r<u;r++)e[r]=i;if(f<q)return e;for(r=u;r<f;r+=q)e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=i,e[r+4]=i,e[r+5]=i,e[r+6]=i,e[r+7]=i;return e}for(n<0?v=(1-f)*n:v=0,r=0;r<f;r++)e[v]=i,v+=n;return e}m.exports=O
});var j=s(function(F,d){
var o=8;function b(f,i,e,n,v){var r,u,t;if(f<=0)return e;if(r=v,n===1){if(u=f%o,u>0)for(t=0;t<u;t++)e[r]=i,r+=n;if(f<o)return e;for(t=u;t<f;t+=o)e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=i,e[r+4]=i,e[r+5]=i,e[r+6]=i,e[r+7]=i,r+=o;return e}for(t=0;t<f;t++)e[r]=i,r+=n;return e}d.exports=b
});var _=s(function(G,R){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=y(),k=j();g(M,"ndarray",k);R.exports=M
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=_(),c,E=z(w(__dirname,"./native.js"));A(E)?c=B:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
