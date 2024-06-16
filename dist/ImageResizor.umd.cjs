(function(d,x){typeof exports=="object"&&typeof module<"u"?module.exports=x():typeof define=="function"&&define.amd?define(x):(d=typeof globalThis<"u"?globalThis:d||self,d["quill-image-resizor"]=x())})(this,function(){"use strict";var Bt;var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Lt(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var N=Lt;function Ut(t){return t}var k=Ut,qt=N,K=Math.max;function zt(t,e,r){return e=K(e===void 0?t.length-1:e,0),function(){for(var i=arguments,s=-1,a=K(i.length-e,0),n=Array(a);++s<a;)n[s]=i[e+s];s=-1;for(var o=Array(e+1);++s<e;)o[s]=i[s];return o[e]=r(n),qt(t,this,o)}}var Ft=zt;function Rt(t){return function(){return t}}var Gt=Rt,Nt=typeof d=="object"&&d&&d.Object===Object&&d,W=Nt,kt=W,Kt=typeof self=="object"&&self&&self.Object===Object&&self,Wt=kt||Kt||Function("return this")(),g=Wt,Zt=g,Vt=Zt.Symbol,Z=Vt,V=Z,X=Object.prototype,Xt=X.hasOwnProperty,Yt=X.toString,A=V?V.toStringTag:void 0;function Qt(t){var e=Xt.call(t,A),r=t[A];try{t[A]=void 0;var i=!0}catch{}var s=Yt.call(t);return i&&(e?t[A]=r:delete t[A]),s}var Jt=Qt,te=Object.prototype,ee=te.toString;function re(t){return ee.call(t)}var ie=re,Y=Z,ae=Jt,se=ie,ne="[object Null]",oe="[object Undefined]",Q=Y?Y.toStringTag:void 0;function le(t){return t==null?t===void 0?oe:ne:Q&&Q in Object(t)?ae(t):se(t)}var C=le;function he(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var p=he,ce=C,ue=p,de="[object AsyncFunction]",pe="[object Function]",fe="[object GeneratorFunction]",ge="[object Proxy]";function ve(t){if(!ue(t))return!1;var e=ce(t);return e==pe||e==fe||e==de||e==ge}var H=ve,ye=g,be=ye["__core-js_shared__"],_e=be,L=_e,J=function(){var t=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function me(t){return!!J&&J in t}var $e=me,xe=Function.prototype,Ae=xe.toString;function Oe(t){if(t!=null){try{return Ae.call(t)}catch{}try{return t+""}catch{}}return""}var we=Oe,Ce=H,Se=$e,je=p,Te=we,Me=/[\\^$.*+?()[\]{}|]/g,Ie=/^\[object .+?Constructor\]$/,De=Function.prototype,Pe=Object.prototype,Ee=De.toString,Be=Pe.hasOwnProperty,He=RegExp("^"+Ee.call(Be).replace(Me,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Le(t){if(!je(t)||Se(t))return!1;var e=Ce(t)?He:Ie;return e.test(Te(t))}var Ue=Le;function qe(t,e){return t==null?void 0:t[e]}var ze=qe,Fe=Ue,Re=ze;function Ge(t,e){var r=Re(t,e);return Fe(r)?r:void 0}var U=Ge,Ne=U,ke=function(){try{var t=Ne(Object,"defineProperty");return t({},"",{}),t}catch{}}(),tt=ke,Ke=Gt,et=tt,We=k,Ze=et?function(t,e){return et(t,"toString",{configurable:!0,enumerable:!1,value:Ke(e),writable:!0})}:We,Ve=Ze,Xe=800,Ye=16,Qe=Date.now;function Je(t){var e=0,r=0;return function(){var i=Qe(),s=Ye-(i-r);if(r=i,s>0){if(++e>=Xe)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var tr=Je,er=Ve,rr=tr,ir=rr(er),ar=ir,sr=k,nr=Ft,or=ar;function lr(t,e){return or(nr(t,e,sr),t+"")}var rt=lr;function hr(){this.__data__=[],this.size=0}var cr=hr;function ur(t,e){return t===e||t!==t&&e!==e}var S=ur,dr=S;function pr(t,e){for(var r=t.length;r--;)if(dr(t[r][0],e))return r;return-1}var j=pr,fr=j,gr=Array.prototype,vr=gr.splice;function yr(t){var e=this.__data__,r=fr(e,t);if(r<0)return!1;var i=e.length-1;return r==i?e.pop():vr.call(e,r,1),--this.size,!0}var br=yr,_r=j;function mr(t){var e=this.__data__,r=_r(e,t);return r<0?void 0:e[r][1]}var $r=mr,xr=j;function Ar(t){return xr(this.__data__,t)>-1}var Or=Ar,wr=j;function Cr(t,e){var r=this.__data__,i=wr(r,t);return i<0?(++this.size,r.push([t,e])):r[i][1]=e,this}var Sr=Cr,jr=cr,Tr=br,Mr=$r,Ir=Or,Dr=Sr;function v(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}v.prototype.clear=jr,v.prototype.delete=Tr,v.prototype.get=Mr,v.prototype.has=Ir,v.prototype.set=Dr;var T=v,Pr=T;function Er(){this.__data__=new Pr,this.size=0}var Br=Er;function Hr(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var Lr=Hr;function Ur(t){return this.__data__.get(t)}var qr=Ur;function zr(t){return this.__data__.has(t)}var Fr=zr,Rr=U,Gr=g,Nr=Rr(Gr,"Map"),it=Nr,kr=U,Kr=kr(Object,"create"),M=Kr,at=M;function Wr(){this.__data__=at?at(null):{},this.size=0}var Zr=Wr;function Vr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Xr=Vr,Yr=M,Qr="__lodash_hash_undefined__",Jr=Object.prototype,ti=Jr.hasOwnProperty;function ei(t){var e=this.__data__;if(Yr){var r=e[t];return r===Qr?void 0:r}return ti.call(e,t)?e[t]:void 0}var ri=ei,ii=M,ai=Object.prototype,si=ai.hasOwnProperty;function ni(t){var e=this.__data__;return ii?e[t]!==void 0:si.call(e,t)}var oi=ni,li=M,hi="__lodash_hash_undefined__";function ci(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=li&&e===void 0?hi:e,this}var ui=ci,di=Zr,pi=Xr,fi=ri,gi=oi,vi=ui;function y(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}y.prototype.clear=di,y.prototype.delete=pi,y.prototype.get=fi,y.prototype.has=gi,y.prototype.set=vi;var yi=y,st=yi,bi=T,_i=it;function mi(){this.size=0,this.__data__={hash:new st,map:new(_i||bi),string:new st}}var $i=mi;function xi(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Ai=xi,Oi=Ai;function wi(t,e){var r=t.__data__;return Oi(e)?r[typeof e=="string"?"string":"hash"]:r.map}var I=wi,Ci=I;function Si(t){var e=Ci(this,t).delete(t);return this.size-=e?1:0,e}var ji=Si,Ti=I;function Mi(t){return Ti(this,t).get(t)}var Ii=Mi,Di=I;function Pi(t){return Di(this,t).has(t)}var Ei=Pi,Bi=I;function Hi(t,e){var r=Bi(this,t),i=r.size;return r.set(t,e),this.size+=r.size==i?0:1,this}var Li=Hi,Ui=$i,qi=ji,zi=Ii,Fi=Ei,Ri=Li;function b(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}b.prototype.clear=Ui,b.prototype.delete=qi,b.prototype.get=zi,b.prototype.has=Fi,b.prototype.set=Ri;var Gi=b,Ni=T,ki=it,Ki=Gi,Wi=200;function Zi(t,e){var r=this.__data__;if(r instanceof Ni){var i=r.__data__;if(!ki||i.length<Wi-1)return i.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ki(i)}return r.set(t,e),this.size=r.size,this}var Vi=Zi,Xi=T,Yi=Br,Qi=Lr,Ji=qr,ta=Fr,ea=Vi;function _(t){var e=this.__data__=new Xi(t);this.size=e.size}_.prototype.clear=Yi,_.prototype.delete=Qi,_.prototype.get=Ji,_.prototype.has=ta,_.prototype.set=ea;var ra=_,nt=tt;function ia(t,e,r){e=="__proto__"&&nt?nt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var q=ia,aa=q,sa=S;function na(t,e,r){(r!==void 0&&!sa(t[e],r)||r===void 0&&!(e in t))&&aa(t,e,r)}var ot=na;function oa(t){return function(e,r,i){for(var s=-1,a=Object(e),n=i(e),o=n.length;o--;){var l=n[t?o:++s];if(r(a[l],l,a)===!1)break}return e}}var la=oa,ha=la,ca=ha(),ua=ca,D={exports:{}};D.exports,function(t,e){var r=g,i=e&&!e.nodeType&&e,s=i&&!0&&t&&!t.nodeType&&t,a=s&&s.exports===i,n=a?r.Buffer:void 0,o=n?n.allocUnsafe:void 0;function l(c,u){if(u)return c.slice();var f=c.length,$=o?o(f):new c.constructor(f);return c.copy($),$}t.exports=l}(D,D.exports);var da=D.exports,pa=g,fa=pa.Uint8Array,ga=fa,lt=ga;function va(t){var e=new t.constructor(t.byteLength);return new lt(e).set(new lt(t)),e}var ya=va,ba=ya;function _a(t,e){var r=e?ba(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var ma=_a;function $a(t,e){var r=-1,i=t.length;for(e||(e=Array(i));++r<i;)e[r]=t[r];return e}var xa=$a,Aa=p,ht=Object.create,Oa=function(){function t(){}return function(e){if(!Aa(e))return{};if(ht)return ht(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),wa=Oa;function Ca(t,e){return function(r){return t(e(r))}}var Sa=Ca,ja=Sa,Ta=ja(Object.getPrototypeOf,Object),ct=Ta,Ma=Object.prototype;function Ia(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Ma;return t===r}var ut=Ia,Da=wa,Pa=ct,Ea=ut;function Ba(t){return typeof t.constructor=="function"&&!Ea(t)?Da(Pa(t)):{}}var Ha=Ba;function La(t){return t!=null&&typeof t=="object"}var O=La,Ua=C,qa=O,za="[object Arguments]";function Fa(t){return qa(t)&&Ua(t)==za}var Ra=Fa,dt=Ra,Ga=O,pt=Object.prototype,Na=pt.hasOwnProperty,ka=pt.propertyIsEnumerable,Ka=dt(function(){return arguments}())?dt:function(t){return Ga(t)&&Na.call(t,"callee")&&!ka.call(t,"callee")},ft=Ka,Wa=Array.isArray,gt=Wa,Za=9007199254740991;function Va(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Za}var vt=Va,Xa=H,Ya=vt;function Qa(t){return t!=null&&Ya(t.length)&&!Xa(t)}var z=Qa,Ja=z,ts=O;function es(t){return ts(t)&&Ja(t)}var rs=es,P={exports:{}};function is(){return!1}var as=is;P.exports,function(t,e){var r=g,i=as,s=e&&!e.nodeType&&e,a=s&&!0&&t&&!t.nodeType&&t,n=a&&a.exports===s,o=n?r.Buffer:void 0,l=o?o.isBuffer:void 0,c=l||i;t.exports=c}(P,P.exports);var yt=P.exports,ss=C,ns=ct,os=O,ls="[object Object]",hs=Function.prototype,cs=Object.prototype,bt=hs.toString,us=cs.hasOwnProperty,ds=bt.call(Object);function ps(t){if(!os(t)||ss(t)!=ls)return!1;var e=ns(t);if(e===null)return!0;var r=us.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&bt.call(r)==ds}var fs=ps,gs=C,vs=vt,ys=O,bs="[object Arguments]",_s="[object Array]",ms="[object Boolean]",$s="[object Date]",xs="[object Error]",As="[object Function]",Os="[object Map]",ws="[object Number]",Cs="[object Object]",Ss="[object RegExp]",js="[object Set]",Ts="[object String]",Ms="[object WeakMap]",Is="[object ArrayBuffer]",Ds="[object DataView]",Ps="[object Float32Array]",Es="[object Float64Array]",Bs="[object Int8Array]",Hs="[object Int16Array]",Ls="[object Int32Array]",Us="[object Uint8Array]",qs="[object Uint8ClampedArray]",zs="[object Uint16Array]",Fs="[object Uint32Array]",h={};h[Ps]=h[Es]=h[Bs]=h[Hs]=h[Ls]=h[Us]=h[qs]=h[zs]=h[Fs]=!0,h[bs]=h[_s]=h[Is]=h[ms]=h[Ds]=h[$s]=h[xs]=h[As]=h[Os]=h[ws]=h[Cs]=h[Ss]=h[js]=h[Ts]=h[Ms]=!1;function Rs(t){return ys(t)&&vs(t.length)&&!!h[gs(t)]}var Gs=Rs;function Ns(t){return function(e){return t(e)}}var ks=Ns,E={exports:{}};E.exports,function(t,e){var r=W,i=e&&!e.nodeType&&e,s=i&&!0&&t&&!t.nodeType&&t,a=s&&s.exports===i,n=a&&r.process,o=function(){try{var l=s&&s.require&&s.require("util").types;return l||n&&n.binding&&n.binding("util")}catch{}}();t.exports=o}(E,E.exports);var Ks=E.exports,Ws=Gs,Zs=ks,_t=Ks,mt=_t&&_t.isTypedArray,Vs=mt?Zs(mt):Ws,$t=Vs;function Xs(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}var xt=Xs,Ys=q,Qs=S,Js=Object.prototype,tn=Js.hasOwnProperty;function en(t,e,r){var i=t[e];(!(tn.call(t,e)&&Qs(i,r))||r===void 0&&!(e in t))&&Ys(t,e,r)}var rn=en,an=rn,sn=q;function nn(t,e,r,i){var s=!r;r||(r={});for(var a=-1,n=e.length;++a<n;){var o=e[a],l=i?i(r[o],t[o],o,r,t):void 0;l===void 0&&(l=t[o]),s?sn(r,o,l):an(r,o,l)}return r}var on=nn;function ln(t,e){for(var r=-1,i=Array(t);++r<t;)i[r]=e(r);return i}var hn=ln,cn=9007199254740991,un=/^(?:0|[1-9]\d*)$/;function dn(t,e){var r=typeof t;return e=e??cn,!!e&&(r=="number"||r!="symbol"&&un.test(t))&&t>-1&&t%1==0&&t<e}var At=dn,pn=hn,fn=ft,gn=gt,vn=yt,yn=At,bn=$t,_n=Object.prototype,mn=_n.hasOwnProperty;function $n(t,e){var r=gn(t),i=!r&&fn(t),s=!r&&!i&&vn(t),a=!r&&!i&&!s&&bn(t),n=r||i||s||a,o=n?pn(t.length,String):[],l=o.length;for(var c in t)(e||mn.call(t,c))&&!(n&&(c=="length"||s&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||yn(c,l)))&&o.push(c);return o}var xn=$n;function An(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var On=An,wn=p,Cn=ut,Sn=On,jn=Object.prototype,Tn=jn.hasOwnProperty;function Mn(t){if(!wn(t))return Sn(t);var e=Cn(t),r=[];for(var i in t)i=="constructor"&&(e||!Tn.call(t,i))||r.push(i);return r}var In=Mn,Dn=xn,Pn=In,En=z;function Bn(t){return En(t)?Dn(t,!0):Pn(t)}var Ot=Bn,Hn=on,Ln=Ot;function Un(t){return Hn(t,Ln(t))}var qn=Un,wt=ot,zn=da,Fn=ma,Rn=xa,Gn=Ha,Ct=ft,St=gt,Nn=rs,kn=yt,Kn=H,Wn=p,Zn=fs,Vn=$t,jt=xt,Xn=qn;function Yn(t,e,r,i,s,a,n){var o=jt(t,r),l=jt(e,r),c=n.get(l);if(c){wt(t,r,c);return}var u=a?a(o,l,r+"",t,e,n):void 0,f=u===void 0;if(f){var $=St(l),G=!$&&kn(l),Ht=!$&&!G&&Vn(l);u=l,$||G||Ht?St(o)?u=o:Nn(o)?u=Rn(o):G?(f=!1,u=zn(l,!0)):Ht?(f=!1,u=Fn(l,!0)):u=[]:Zn(l)||Ct(l)?(u=o,Ct(o)?u=Xn(o):(!Wn(o)||Kn(o))&&(u=Gn(l))):f=!1}f&&(n.set(l,u),s(u,l,i,a,n),n.delete(l)),wt(t,r,u)}var Qn=Yn,Jn=ra,to=ot,eo=ua,ro=Qn,io=p,ao=Ot,so=xt;function Tt(t,e,r,i,s){t!==e&&eo(e,function(a,n){if(s||(s=new Jn),io(a))ro(t,e,n,r,Tt,i,s);else{var o=i?i(so(t,n),a,n+"",t,e,s):void 0;o===void 0&&(o=a),to(t,n,o)}},ao)}var Mt=Tt,no=Mt,It=p;function Dt(t,e,r,i,s,a){return It(t)&&It(e)&&(a.set(e,t),no(t,e,void 0,Dt,a),a.delete(e)),t}var oo=Dt,lo=S,ho=z,co=At,uo=p;function po(t,e,r){if(!uo(r))return!1;var i=typeof e;return(i=="number"?ho(r)&&co(e,r.length):i=="string"&&e in r)?lo(r[e],t):!1}var fo=po,go=rt,vo=fo;function yo(t){return go(function(e,r){var i=-1,s=r.length,a=s>1?r[s-1]:void 0,n=s>2?r[2]:void 0;for(a=t.length>3&&typeof a=="function"?(s--,a):void 0,n&&vo(r[0],r[1],n)&&(a=s<3?void 0:a,s=1),e=Object(e);++i<s;){var o=r[i];o&&t(e,o,i,a)}return e})}var bo=yo,_o=Mt,mo=bo,$o=mo(function(t,e,r,i){_o(t,e,r,i)}),xo=$o,Ao=N,Oo=rt,wo=oo,Co=xo,So=Oo(function(t){return t.push(void 0,wo),Ao(Co,void 0,t)}),jo=So;const To=x(jo),Mo={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"0"}};class F{constructor(e){this.onCreate=()=>{},this.onDestroy=()=>{},this.onUpdate=()=>{},this.overlay=e.overlay,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate}}class Io extends F{constructor(e){super(e),this.display=null,this.onCreate=()=>{var r;this.display=document.createElement("div"),Object.assign(this.display.style,this.options.displayStyles),(r=this.overlay)==null||r.appendChild(this.display)},this.onDestroy=()=>{},this.onUpdate=()=>{if(!this.display||!this.img)return;const r=this.getCurrentSize();if(this.display.innerHTML=r.join(" &times; "),r[0]>120&&r[1]>30)Object.assign(this.display.style,{right:"4px",bottom:"4px",left:"auto"});else if(this.img.style.float=="right"){const i=this.display.getBoundingClientRect();Object.assign(this.display.style,{right:"auto",bottom:`-${i.height+4}px`,left:`-${i.width+4}px`})}else{const i=this.display.getBoundingClientRect();Object.assign(this.display.style,{right:`-${i.width+4}px`,bottom:`-${i.height+4}px`,left:"auto"})}},this.getCurrentSize=()=>{var r,i;return[((r=this.img)==null?void 0:r.width)||0,((i=this.img)==null?void 0:i.height)||0]}}}const Do=`<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z"/>
  <path class="ql-fill" d="M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z"/>
  <path class="ql-fill" d="M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z"/>
  <path class="ql-fill" d="M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z"/>
  <rect class="ql-fill" x="2" y="6" width="8" height="6" rx="1" ry="1"/>
</svg>`,Po=`<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z"/>
  <path class="ql-fill" d="M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z"/>
  <rect class="ql-fill" x="3" y="6" width="12" height="6" rx="1" ry="1"/>
</svg>`,Eo=`<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z"/>
  <path class="ql-fill" d="M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z"/>
  <path class="ql-fill" d="M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z"/>
  <path class="ql-fill" d="M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z"/>
  <rect class="ql-fill" x="8" y="6" width="8" height="6" rx="1" ry="1" transform="translate(24 18) rotate(-180)"/>
</svg>`,Bo=`<svg class="" viewbox="0 0 18 18">
  <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>
  <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>
  <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>
  <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>
  <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect>
</svg>`,Ho=window.Quill.import("formats/image"),Pt=["alt","height","width","style"];class Lo extends Ho{static formats(e){return Pt.reduce(function(r,i){return e.hasAttribute(i)&&(r[i]=e.getAttribute(i)),r},{})}format(e,r){Pt.indexOf(e)>-1?r?this.domNode.setAttribute(e,r):this.domNode.removeAttribute(e):super.format(e,r)}}window.Quill.register(Lo,!0);const R=window.Quill.imports.parchment,m=new R.StyleAttributor("float","float"),w=new R.StyleAttributor("margin","margin"),B=new R.StyleAttributor("display","display");class Uo extends F{constructor(e){super(e),this.alignments=[],this.onCreate=()=>{var r;this.toolbar=document.createElement("div"),Object.assign(this.toolbar.style,this.options.toolbarStyles),(r=this.overlay)==null||r.appendChild(this.toolbar),this._defineAlignments(),this._addToolbarButtons()},this.onDestroy=()=>{},this.onUpdate=()=>{},this._defineAlignments=()=>{this.alignments=[{icon:Do,apply:()=>{B.add(this.img,"inline"),m.add(this.img,"left"),w.add(this.img,"0 1em 1em 0")},isApplied:()=>m.value(this.img)==="left"},{icon:Po,apply:()=>{B.add(this.img,"block"),m.remove(this.img),w.add(this.img,"auto")},isApplied:()=>w.value(this.img)==="auto"},{icon:Eo,apply:()=>{B.add(this.img,"inline"),m.add(this.img,"right"),w.add(this.img,"0 0 1em 1em")},isApplied:()=>m.value(this.img)==="right"},{icon:Bo,apply:()=>{this.img&&(this.img.removeAttribute("width"),this.img.removeAttribute("height"))},isApplied:()=>!1}]},this._addToolbarButtons=()=>{const r=[];this.alignments.forEach((i,s)=>{var n;const a=document.createElement("span");r.push(a),a.innerHTML=i.icon,a.addEventListener("click",()=>{r.forEach(o=>o.style.filter=""),i.isApplied()?(m.remove(this.img),w.remove(this.img),B.remove(this.img)):(this._selectButton(a),i.apply()),this.requestUpdate()}),Object.assign(a.style,this.options.toolbarButtonStyles),s>0&&(a.style.borderLeftWidth="0"),Object.assign(a.children[0].style,this.options.toolbarButtonSvgStyles),i.isApplied()&&this._selectButton(a),(n=this.toolbar)==null||n.appendChild(a)})},this._selectButton=r=>{r.style.filter="invert(20%)"}}}class qo extends F{constructor(e){super(e),this.boxes=[],this.dragBox=null,this.dragStartX=0,this.dragStartY=0,this.preDragWidth=0,this.preDragHeight=0,this.preDragARatio=0,this.onCreate=()=>{this.boxes=[],this.addBox("e-resize"),this.addBox("n-resize"),this.addBox("nwse-resize"),this.positionBoxes()},this.onDestroy=()=>{this.setCursor("")},this.positionBoxes=()=>{var s,a;const r=`${-parseFloat(((s=this.options.handleStyles)==null?void 0:s.width.toString())||"0")/2}px`,i=`${-parseFloat(((a=this.options.handleStyles)==null?void 0:a.height.toString())||"0")/2}px`;[{right:r,top:`calc(50% - ${i.slice(1)})`},{left:`calc(50% - ${r.slice(1)})`,bottom:i},{right:r,bottom:i}].forEach((n,o)=>{Object.assign(this.boxes[o].style,n)})},this.addBox=r=>{var s,a,n;const i=document.createElement("div");Object.assign(i.style,this.options.handleStyles),i.style.cursor=r,i.style.width=`${((s=this.options.handleStyles)==null?void 0:s.width)||0}px`,i.style.height=`${((a=this.options.handleStyles)==null?void 0:a.height)||0}px`,i.addEventListener("mousedown",this.handleMousedown,!1),(n=this.overlay)==null||n.appendChild(i),this.boxes.push(i)},this.handleMousedown=r=>{var i,s,a,n;this.dragBox=r.target,this.dragStartX=r.clientX,this.dragStartY=r.clientY,this.preDragWidth=((i=this.img)==null?void 0:i.width)||((s=this.img)==null?void 0:s.naturalWidth)||0,this.preDragHeight=((a=this.img)==null?void 0:a.height)||((n=this.img)==null?void 0:n.naturalHeight)||0,this.preDragARatio=this.preDragHeight/this.preDragWidth,this.setCursor(this.dragBox.style.cursor),document.addEventListener("mousemove",this.handleDrag,!1),document.addEventListener("mouseup",this.handleMouseup,!1)},this.handleMouseup=()=>{this.setCursor(""),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleMouseup)},this.handleDrag=r=>{if(this.img){if(this.dragBox===this.boxes[1]){const i=r.clientY-this.dragStartY;this.img.height=Math.round(this.preDragHeight+i)}else{const i=r.clientX-this.dragStartX;if(this.dragBox===this.boxes[0])this.img.width=Math.round(this.preDragWidth+i);else{const s=this.preDragWidth+i;this.img.width=Math.round(s),this.img.height=Math.round(s*this.preDragARatio)}}this.requestUpdate()}},this.setCursor=r=>{[document.body,this.img].forEach(s=>{s&&(s.style.cursor=r)})}}}const zo=Object.freeze(["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"]),Fo={DisplaySize:Io,Toolbar:Uo,Resize:qo};class Et{constructor(e,r={}){var s;this.moduleClasses=[],this.modules=[],this.onUpdate=()=>{this.repositionElements(),this.modules.forEach(a=>{a.onUpdate()})},this.removeModules=()=>{this.modules.forEach(a=>{a.onDestroy()}),this.modules=[]},this.handleClick=a=>{var o;const n=a.target;if(((o=n==null?void 0:n.tagName)==null?void 0:o.toUpperCase())==="IMG"){if(this.img===n)return;this.img&&this.hide(),this.show(n)}else this.img&&this.hide()},this.show=a=>{this.img=a,this.showOverlay(),this.initializeModules()},this.showOverlay=()=>{this.overlay&&this.hideOverlay(),this.quill.setSelection(null),this.setUserSelect("none"),document.addEventListener("keyup",this.checkImageKeyUp,!0),this.quill.root.addEventListener("input",this.checkImageInput,!0),this.overlay=document.createElement("div"),Object.assign(this.overlay.style,this.options.overlayStyles),this.quill.root.parentNode.appendChild(this.overlay),this.repositionElements()},this.hideOverlay=()=>{this.overlay&&(this.quill.root.parentNode.removeChild(this.overlay),this.overlay=void 0,document.removeEventListener("keyup",this.checkImageKeyUp),this.quill.root.removeEventListener("input",this.checkImageInput),this.setUserSelect(""))},this.repositionElements=()=>{if(!this.overlay||!this.img)return;const a=this.quill.root.parentNode,n=this.img.getBoundingClientRect(),o=a.getBoundingClientRect();Object.assign(this.overlay.style,{left:`${n.left-o.left-1+a.scrollLeft}px`,top:`${n.top-o.top+a.scrollTop}px`,width:`${n.width}px`,height:`${n.height}px`})},this.hide=()=>{this.hideOverlay(),this.removeModules(),this.img=void 0},this.setUserSelect=a=>{zo.forEach(n=>{this.quill.root.style[n]=a,document.documentElement.style[n]=a})},this.checkImageKeyUp=a=>{var n;this.img&&(["Backspace","Delete"].includes(a.code)&&((n=window.Quill)==null||n.find(this.img).deleteAt(0)),this.hide())},this.checkImageInput=a=>{var n;this.img&&(["deleteContentForward","deleteContentBackward"].includes(a.inputType)&&((n=window.Quill)==null||n.find(this.img).deleteAt(0)),this.hide())},this.initializeModules=this.initializeModules.bind(this),this.quill=e,this.options=To({},r,Mo),(s=r.modules)!=null&&s.length&&(this.moduleClasses=r.modules.slice()),this.quill.root.addEventListener("click",this.handleClick,!1);const i=this.quill.root.parentNode;i.style.position=i.style.position||"relative",this.modules=[],this.moduleClasses=this.options.modules||[]}initializeModules(){var e;this.removeModules(),this.modules=((e=this.moduleClasses)==null?void 0:e.map(r=>new(Fo[r]||r)(this)))||[],this.modules.forEach(r=>{r.onCreate()}),this.onUpdate()}}return(Bt=window.Quill)==null||Bt.register("modules/imageResizor",Et),Et});
