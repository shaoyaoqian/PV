(function(w,b){typeof exports=="object"&&typeof module!="undefined"?b(exports):typeof define=="function"&&define.amd?define(["exports"],b):(w=typeof globalThis!="undefined"?globalThis:w||self,b(w.LALA={}))})(this,function(w){"use strict";var yn=Object.defineProperty;var bn=(w,b,T)=>b in w?yn(w,b,{enumerable:!0,configurable:!0,writable:!0,value:T}):w[b]=T;var X=(w,b,T)=>(bn(w,typeof b!="symbol"?b+"":b,T),T);var b=Object.defineProperty,T=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e,n)=>(T(t,typeof e!="symbol"?e+"":e,n),n);function oe(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function yt(t){if(g(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=I(s)?fe(s):yt(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(I(t)||O(t))return t}const ce=/;(?![^(]*\))/g,le=/:(.+)/;function fe(t){const e={};return t.split(ce).forEach(n=>{if(n){const s=n.split(le);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bt(t){let e="";if(I(t))e=t;else if(g(t))for(let n=0;n<t.length;n++){const s=bt(t[n]);s&&(e+=s+" ")}else if(O(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ue(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=W(t[s],e[s]);return n}function W(t,e){if(t===e)return!0;let n=xt(t),s=xt(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=g(t),s=g(e),n||s)return n&&s?ue(t,e):!1;if(n=O(t),s=O(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),f=e.hasOwnProperty(o);if(c&&!f||!c&&f||!W(t[o],e[o]))return!1}}return String(t)===String(e)}function Y(t,e){return t.findIndex(n=>W(n,e))}const ae=Object.assign,pe=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},he=Object.prototype.hasOwnProperty,tt=(t,e)=>he.call(t,e),g=Array.isArray,et=t=>wt(t)==="[object Map]",xt=t=>t instanceof Date,I=t=>typeof t=="string",nt=t=>typeof t=="symbol",O=t=>t!==null&&typeof t=="object",de=Object.prototype.toString,wt=t=>de.call(t),ge=t=>wt(t).slice(8,-1),st=t=>I(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_t=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},me=/-(\w)/g,ve=_t(t=>t.replace(me,(e,n)=>n?n.toUpperCase():"")),ye=/\B([A-Z])/g,$t=_t(t=>t.replace(ye,"-$1").toLowerCase()),be=(t,e)=>!Object.is(t,e),kt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xe;function St(t,e){e=e||xe,e&&e.active&&e.effects.push(t)}const Ot=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Et=t=>(t.w&E)>0,jt=t=>(t.n&E)>0,we=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=E},_e=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Et(r)&&!jt(r)?r.delete(t):e[n++]=r,r.w&=~E,r.n&=~E}e.length=n}},rt=new WeakMap;let H=0,E=1;const it=30,J=[];let P;const q=Symbol(""),At=Symbol("");class $e{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],St(this,s)}run(){if(!this.active)return this.fn();if(!J.includes(this))try{return J.push(P=this),Ee(),E=1<<++H,H<=it?we(this):Rt(this),this.fn()}finally{H<=it&&_e(this),E=1<<--H,Ct(),J.pop();const e=J.length;P=e>0?J[e-1]:void 0}}stop(){this.active&&(Rt(this),this.onStop&&this.onStop(),this.active=!1)}}function Rt(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function ke(t,e){t.effect&&(t=t.effect.fn);const n=new $e(t);e&&(ae(n,e),e.scope&&St(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Se(t){t.effect.stop()}let K=!0;const ot=[];function Oe(){ot.push(K),K=!1}function Ee(){ot.push(K),K=!0}function Ct(){const t=ot.pop();K=t===void 0?!0:t}function V(t,e,n){if(!je())return;let s=rt.get(t);s||rt.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ot()),Ae(r)}function je(){return K&&P!==void 0}function Ae(t,e){let n=!1;H<=it?jt(t)||(t.n|=E,n=!Et(t)):n=!t.has(P),n&&(t.add(P),P.deps.push(t))}function ct(t,e,n,s,r,i){const o=rt.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&g(t))o.forEach((f,l)=>{(l==="length"||l>=s)&&c.push(f)});else switch(n!==void 0&&c.push(o.get(n)),e){case"add":g(t)?st(n)&&c.push(o.get("length")):(c.push(o.get(q)),et(t)&&c.push(o.get(At)));break;case"delete":g(t)||(c.push(o.get(q)),et(t)&&c.push(o.get(At)));break;case"set":et(t)&&c.push(o.get(q));break}if(c.length===1)c[0]&&Tt(c[0]);else{const f=[];for(const l of c)l&&f.push(...l);Tt(Ot(f))}}function Tt(t,e){for(const n of g(t)?t:[...t])(n!==P||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Re=oe("__proto__,__v_isRef,__isVue"),Nt=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(nt)),Ce=Mt(),Te=Mt(!0),Pt=Ne();function Ne(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=M(this);for(let i=0,o=this.length;i<o;i++)V(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(M)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oe();const s=M(this)[e].apply(this,n);return Ct(),s}}),t}function Mt(t=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&r===(t?e?Fe:Lt:e?ze:Bt).get(n))return n;const i=g(n);if(!t&&i&&tt(Pt,s))return Reflect.get(Pt,s,r);const o=Reflect.get(n,s,r);return(nt(s)?Nt.has(s):Re(s))||(t||V(n,"get",s),e)?o:lt(o)?!i||!st(s)?o.value:o:O(o)?t?Je(o):z(o):o}}const Pe=Me();function Me(t=!1){return function(e,n,s,r){let i=e[n];if(!t&&!Ze(s)&&(s=M(s),i=M(i),!g(e)&&lt(i)&&!lt(s)))return i.value=s,!0;const o=g(e)&&st(n)?Number(n)<e.length:tt(e,n),c=Reflect.set(e,n,s,r);return e===M(r)&&(o?be(s,i)&&ct(e,"set",n,s):ct(e,"add",n,s)),c}}function Be(t,e){const n=tt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ct(t,"delete",e,void 0),s}function Le(t,e){const n=Reflect.has(t,e);return(!nt(e)||!Nt.has(e))&&V(t,"has",e),n}function We(t){return V(t,"iterate",g(t)?"length":q),Reflect.ownKeys(t)}const Ie={get:Ce,set:Pe,deleteProperty:Be,has:Le,ownKeys:We},Ke={get:Te,set(t,e){return!0},deleteProperty(t,e){return!0}},Bt=new WeakMap,ze=new WeakMap,Lt=new WeakMap,Fe=new WeakMap;function De(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function He(t){return t.__v_skip||!Object.isExtensible(t)?0:De(ge(t))}function z(t){return t&&t.__v_isReadonly?t:Wt(t,!1,Ie,null,Bt)}function Je(t){return Wt(t,!0,Ke,null,Lt)}function Wt(t,e,n,s,r){if(!O(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=He(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return r.set(t,c),c}function Ze(t){return!!(t&&t.__v_isReadonly)}function M(t){const e=t&&t.__v_raw;return e?M(e):t}function lt(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();let ft=!1;const G=[],qe=Promise.resolve(),U=t=>qe.then(t),It=t=>{G.includes(t)||G.push(t),ft||(ft=!0,U(Ve))},Ve=()=>{for(const t of G)t();G.length=0,ft=!1},Ge=/^(spellcheck|draggable|form|list|type)$/,ut=({el:t,get:e,effect:n,arg:s,modifiers:r})=>{let i;s==="class"&&(t._class=t.className),n(()=>{let o=e();if(s)r!=null&&r.camel&&(s=ve(s)),at(t,s,o,i);else{for(const c in o)at(t,c,o[c],i&&i[c]);for(const c in i)(!o||!(c in o))&&at(t,c,null)}i=o})},at=(t,e,n,s)=>{if(e==="class")t.setAttribute("class",bt(t._class?[t._class,n]:n)||"");else if(e==="style"){n=yt(n);const{style:r}=t;if(!n)t.removeAttribute("style");else if(I(n))n!==s&&(r.cssText=n);else{for(const i in n)pt(r,i,n[i]);if(s&&!I(s))for(const i in s)n[i]==null&&pt(r,i,"")}}else!(t instanceof SVGElement)&&e in t&&!Ge.test(e)?(t[e]=n,e==="value"&&(t._value=n)):e==="true-value"?t._trueValue=n:e==="false-value"?t._falseValue=n:n!=null?t.setAttribute(e,n):t.removeAttribute(e)},Kt=/\s*!important$/,pt=(t,e,n)=>{g(n)?n.forEach(s=>pt(t,e,s)):e.startsWith("--")?t.setProperty(e,n):Kt.test(n)?t.setProperty($t(e),n.replace(Kt,""),"important"):t[e]=n},j=(t,e)=>{const n=t.getAttribute(e);return n!=null&&t.removeAttribute(e),n},A=(t,e,n,s)=>{t.addEventListener(e,n,s)},Ue=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Qe=["ctrl","shift","alt","meta"],Xe={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qe.some(n=>t[`${n}Key`]&&!e[n])},zt=({el:t,get:e,exp:n,arg:s,modifiers:r})=>{if(!s)return;let i=Ue.test(n)?e(`(e => ${n}(e))`):e(`($event => { ${n} })`);if(s==="vue:mounted"){U(i);return}else if(s==="vue:unmounted")return()=>i();if(r){s==="click"&&(r.right&&(s="contextmenu"),r.middle&&(s="mouseup"));const o=i;i=c=>{if(!("key"in c&&!($t(c.key)in r))){for(const f in r){const l=Xe[f];if(l&&l(c,r))return}return o(c)}}}A(t,s,i,r)},Ye=({el:t,get:e,effect:n})=>{const s=t.style.display;n(()=>{t.style.display=e()?s:"none"})},Ft=({el:t,get:e,effect:n})=>{n(()=>{t.textContent=Dt(e())})},Dt=t=>t==null?"":O(t)?JSON.stringify(t,null,2):String(t),tn=({el:t,get:e,effect:n})=>{n(()=>{t.innerHTML=e()})},en=({el:t,exp:e,get:n,effect:s,modifiers:r})=>{const i=t.type,o=n(`(val) => { ${e} = val }`),{trim:c,number:f=i==="number"}=r||{};if(t.tagName==="SELECT"){const l=t;A(t,"change",()=>{const u=Array.prototype.filter.call(l.options,a=>a.selected).map(a=>f?kt(R(a)):R(a));o(l.multiple?u:u[0])}),s(()=>{const u=n(),a=l.multiple;for(let p=0,x=l.options.length;p<x;p++){const y=l.options[p],_=R(y);if(a)g(u)?y.selected=Y(u,_)>-1:y.selected=u.has(_);else if(W(R(y),u)){l.selectedIndex!==p&&(l.selectedIndex=p);return}}!a&&l.selectedIndex!==-1&&(l.selectedIndex=-1)})}else if(i==="checkbox"){A(t,"change",()=>{const u=n(),a=t.checked;if(g(u)){const p=R(t),x=Y(u,p),y=x!==-1;if(a&&!y)o(u.concat(p));else if(!a&&y){const _=[...u];_.splice(x,1),o(_)}}else o(Ht(t,a))});let l;s(()=>{const u=n();g(u)?t.checked=Y(u,R(t))>-1:u!==l&&(t.checked=W(u,Ht(t,!0))),l=u})}else if(i==="radio"){A(t,"change",()=>{o(R(t))});let l;s(()=>{const u=n();u!==l&&(t.checked=W(u,R(t)))})}else{const l=u=>c?u.trim():f?kt(u):u;A(t,"compositionstart",nn),A(t,"compositionend",sn),A(t,r!=null&&r.lazy?"change":"input",()=>{t.composing||o(l(t.value))}),c&&A(t,"change",()=>{t.value=t.value.trim()}),s(()=>{if(t.composing)return;const u=t.value,a=n();document.activeElement===t&&l(u)===a||u!==a&&(t.value=a)})}},R=t=>"_value"in t?t._value:t.value,Ht=(t,e)=>{const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e},nn=t=>{t.target.composing=!0},sn=t=>{const e=t.target;e.composing&&(e.composing=!1,rn(e,"input"))},rn=(t,e)=>{const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)},Jt=Object.create(null),Z=(t,e,n)=>Zt(t,`return(${e})`,n),Zt=(t,e,n)=>{const s=Jt[e]||(Jt[e]=on(e));try{return s(t,n)}catch(r){console.error(r)}},on=t=>{try{return new Function("$data","$el",`with($data){${t}}`)}catch(e){return console.error(`${e.message} in expression: ${t}`),()=>{}}},cn=({el:t,ctx:e,exp:n,effect:s})=>{U(()=>s(()=>Zt(e.scope,n,t)))},ln={bind:ut,on:zt,show:Ye,text:Ft,html:tn,model:en,effect:cn},fn=(t,e,n)=>{const s=t.parentElement,r=new Comment("v-if");s.insertBefore(r,t);const i=[{exp:e,el:t}];let o,c;for(;(o=t.nextElementSibling)&&(c=null,j(o,"v-else")===""||(c=j(o,"v-else-if")));)s.removeChild(o),i.push({exp:c,el:o});const f=t.nextSibling;s.removeChild(t);let l,u=-1;const a=()=>{l&&(s.insertBefore(r,l.el),l.remove(),l=void 0)};return n.effect(()=>{for(let p=0;p<i.length;p++){const{exp:x,el:y}=i[p];if(!x||Z(n.scope,x)){p!==u&&(a(),l=new gt(y,n),l.insert(s,r),s.removeChild(r),u=p);return}}u=-1,a()}),f},un=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,qt=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,an=/^\(|\)$/g,pn=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,hn=(t,e,n)=>{const s=e.match(un);if(!s)return;const r=t.nextSibling,i=t.parentElement,o=new Text("");i.insertBefore(o,t),i.removeChild(t);const c=s[2].trim();let f=s[1].trim().replace(an,"").trim(),l,u=!1,a,p,x="key",y=t.getAttribute(x)||t.getAttribute(x=":key")||t.getAttribute(x="v-bind:key");y&&(t.removeAttribute(x),x==="key"&&(y=JSON.stringify(y)));let _;(_=f.match(qt))&&(f=f.replace(qt,"").trim(),a=_[1].trim(),_[2]&&(p=_[2].trim())),(_=f.match(pn))&&(l=_[1].split(",").map(m=>m.trim()),u=f[0]==="[");let re=!1,B,Q,mt;const vn=m=>{const $=new Map,h=[];if(g(m))for(let d=0;d<m.length;d++)h.push(vt($,m[d],d));else if(typeof m=="number")for(let d=0;d<m;d++)h.push(vt($,d+1,d));else if(O(m)){let d=0;for(const v in m)h.push(vt($,m[v],d++,v))}return[h,$]},vt=(m,$,h,d)=>{const v={};l?l.forEach((L,C)=>v[L]=$[u?C:L]):v[f]=$,d?(a&&(v[a]=d),p&&(v[p]=h)):a&&(v[a]=h);const D=Yt(n,v),k=y?Z(D.scope,y):h;return m.set(k,h),D.key=k,D},ie=(m,$)=>{const h=new gt(t,m);return h.key=m.key,h.insert(i,$),h};return n.effect(()=>{const m=Z(n.scope,c),$=mt;if([Q,mt]=vn(m),!re)B=Q.map(h=>ie(h,o)),re=!0;else{for(let k=0;k<B.length;k++)mt.has(B[k].key)||B[k].remove();const h=[];let d=Q.length,v,D;for(;d--;){const k=Q[d],L=$.get(k.key);let C;L==null?C=ie(k,v?v.el:o):(C=B[L],Object.assign(C.ctx.scope,k.scope),L!==d&&(B[L+1]!==v||D===v)&&(D=C,C.insert(i,v?v.el:o))),h.unshift(v=C)}B=h}}),r},Vt=({el:t,ctx:{scope:{$refs:e}},get:n,effect:s})=>{let r;return s(()=>{const i=n();e[i]=t,r&&i!==r&&delete e[r],r=i}),()=>{r&&delete e[r]}},dn=/^(?:v-|:|@)/,gn=/\.([\w-]+)/g;let ht=!1;const Gt=(t,e)=>{const n=t.nodeType;if(n===1){const s=t;if(s.hasAttribute("v-pre"))return;j(s,"v-cloak");let r;if(r=j(s,"v-if"))return fn(s,r,e);if(r=j(s,"v-for"))return hn(s,r,e);if((r=j(s,"v-scope"))||r===""){const c=r?Z(e.scope,r):{};e=Yt(e,c),c.$template&&mn(s,c.$template)}const i=j(s,"v-once")!=null;i&&(ht=!0),(r=j(s,"ref"))&&dt(s,Vt,`"${r}"`,e),Ut(s,e);const o=[];for(const{name:c,value:f}of[...s.attributes])dn.test(c)&&c!=="v-cloak"&&(c==="v-model"?o.unshift([c,f]):c[0]==="@"||/^v-on\b/.test(c)?o.push([c,f]):Qt(s,c,f,e));for(const[c,f]of o)Qt(s,c,f,e);i&&(ht=!1)}else if(n===3){const s=t.data;if(s.includes(e.delimiters[0])){let r=[],i=0,o;for(;o=e.delimitersRE.exec(s);){const c=s.slice(i,o.index);c&&r.push(JSON.stringify(c)),r.push(`$s(${o[1]})`),i=o.index+o[0].length}i<s.length&&r.push(JSON.stringify(s.slice(i))),dt(t,Ft,r.join("+"),e)}}else n===11&&Ut(t,e)},Ut=(t,e)=>{let n=t.firstChild;for(;n;)n=Gt(n,e)||n.nextSibling},Qt=(t,e,n,s)=>{let r,i,o;if(e=e.replace(gn,(c,f)=>((o||(o={}))[f]=!0,"")),e[0]===":")r=ut,i=e.slice(1);else if(e[0]==="@")r=zt,i=e.slice(1);else{const c=e.indexOf(":"),f=c>0?e.slice(2,c):e.slice(2);r=ln[f]||s.dirs[f],i=c>0?e.slice(c+1):void 0}r&&(r===ut&&i==="ref"&&(r=Vt),dt(t,r,n,s,i,o),t.removeAttribute(e))},dt=(t,e,n,s,r,i)=>{const o=e({el:t,get:(c=n)=>Z(s.scope,c,t),effect:s.effect,ctx:s,exp:n,arg:r,modifiers:i});o&&s.cleanups.push(o)},mn=(t,e)=>{if(e[0]==="#"){const n=document.querySelector(e);t.appendChild(n.content.cloneNode(!0));return}t.innerHTML=e},Xt=t=>{const e={delimiters:["{{","}}"],delimitersRE:/\{\{([^]+?)\}\}/g,...t,scope:t?t.scope:z({}),dirs:t?t.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(ht)return It(n),n;const s=ke(n,{scheduler:()=>It(s)});return e.effects.push(s),s}};return e},Yt=(t,e={})=>{const n=t.scope,s=Object.create(n);Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)),s.$refs=Object.create(n.$refs);const r=z(new Proxy(s,{set(i,o,c,f){return f===r&&!i.hasOwnProperty(o)?Reflect.set(n,o,c):Reflect.set(i,o,c,f)}}));return te(r),{...t,scope:r}},te=t=>{for(const e of Object.keys(t))typeof t[e]=="function"&&(t[e]=t[e].bind(t))};class gt{constructor(e,n,s=!1){N(this,"template"),N(this,"ctx"),N(this,"key"),N(this,"parentCtx"),N(this,"isFragment"),N(this,"start"),N(this,"end"),this.isFragment=e instanceof HTMLTemplateElement,s?this.template=e:this.isFragment?this.template=e.content.cloneNode(!0):this.template=e.cloneNode(!0),s?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=Xt(n)),Gt(this.template,this.ctx)}get el(){return this.start||this.template}insert(e,n=null){if(this.isFragment)if(this.start){let s=this.start,r;for(;s&&(r=s.nextSibling,e.insertBefore(s,n),s!==this.end);)s=r}else this.start=new Text(""),this.end=new Text(""),e.insertBefore(this.end,n),e.insertBefore(this.start,this.end),e.insertBefore(this.template,this.end);else e.insertBefore(this.template,n)}remove(){if(this.parentCtx&&pe(this.parentCtx.blocks,this),this.start){const e=this.start.parentNode;let n=this.start,s;for(;n&&(s=n.nextSibling,e.removeChild(n),n!==this.end);)n=s}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(e=>{e.teardown()}),this.ctx.effects.forEach(Se),this.ctx.cleanups.forEach(e=>e())}}const ee=t=>t.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),ne=t=>{const e=Xt();if(t&&(e.scope=z(t),te(e.scope),t.$delimiters)){const[s,r]=e.delimiters=t.$delimiters;e.delimitersRE=new RegExp(ee(s)+"([^]+?)"+ee(r),"g")}e.scope.$s=Dt,e.scope.$nextTick=U,e.scope.$refs=Object.create(null);let n;return{directive(s,r){return r?(e.dirs[s]=r,this):e.dirs[s]},mount(s){if(typeof s=="string"&&(s=document.querySelector(s),!s))return;s=s||document.documentElement;let r;return s.hasAttribute("v-scope")?r=[s]:r=[...s.querySelectorAll("[v-scope]")].filter(i=>!i.matches("[v-scope] [v-scope]")),r.length||(r=[s]),n=r.map(i=>new gt(i,e,!0)),this},unmount(){n.forEach(s=>s.teardown())}}},se=document.currentScript;se&&se.hasAttribute("init")&&ne().mount();const S=class{static initializeStore(e){S.store=z(e),S.registerScope("globalStore",S.store)}static registerScope(e,n){S.scopes[e]=n}static registerDirective(e,n){S.directives.push([e,n])}static mount(e){const n=ne(S.scopes);return S.directives.forEach(s=>n.directive(...s)),n.mount(e),n}};let F=S;X(F,"store",z({})),X(F,"scopes",{globalStore:S.store}),X(F,"directives",[]),w.PV=F,Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
