import{_ as Ue,c as Ke}from"./client-only.92af7aea.js";import{d as Qe,e as ue,j as _,I as z,J as We,_ as Te,q as B,k as T,K as j,l as R,L as $,M as $e,N as Ge,O as Je,u as Xe,o as Ye,F as Ze,G as et,H as tt,m as V,s as fe}from"./entry.28691676.js";import{V as de,R as nt,P as ot,a as rt,u as st,c as it,n as A,M as ct,aq as lt,f as he}from"./psrdnoise.6a9cb26e.js";import{T as at}from"./Tube1.b771666a.js";const M=/^[a-z0-9]+(-[a-z0-9]+)*$/,U=(e,n,t,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),u={provider:o.length>0?o[0]:r,prefix:l,name:c};return n&&!N(u)?null:u}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return n&&!N(c)?null:c}if(t&&r===""){const c={provider:r,prefix:"",name:s};return n&&!N(c,t)?null:c}return null},N=(e,n)=>e?!!((e.provider===""||e.provider.match(M))&&(n&&e.prefix===""||e.prefix.match(M))&&e.name.match(M)):!1,Me=Object.freeze({left:0,top:0,width:16,height:16}),H=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),K=Object.freeze({...Me,...H}),X=Object.freeze({...K,body:"",hidden:!1});function ut(e,n){const t={};!e.hFlip!=!n.hFlip&&(t.hFlip=!0),!e.vFlip!=!n.vFlip&&(t.vFlip=!0);const r=((e.rotate||0)+(n.rotate||0))%4;return r&&(t.rotate=r),t}function pe(e,n){const t=ut(e,n);for(const r in X)r in H?r in e&&!(r in t)&&(t[r]=H[r]):r in n?t[r]=n[r]:r in e&&(t[r]=e[r]);return t}function ft(e,n){const t=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(t[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(n||Object.keys(t).concat(Object.keys(r))).forEach(s),o}function dt(e,n,t){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=pe(r[c]||o[c],s)}return i(n),t.forEach(i),pe(e,s)}function Pe(e,n){const t=[];if(typeof e!="object"||typeof e.icons!="object")return t;e.not_found instanceof Array&&e.not_found.forEach(o=>{n(o,null),t.push(o)});const r=ft(e);for(const o in r){const s=r[o];s&&(n(o,dt(e,o,s)),t.push(o))}return t}const ht={provider:"",aliases:{},not_found:{},...Me};function G(e,n){for(const t in n)if(t in e&&typeof e[t]!=typeof n[t])return!1;return!0}function Le(e){if(typeof e!="object"||e===null)return null;const n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!G(e,ht))return null;const t=n.icons;for(const o in t){const s=t[o];if(!o.match(M)||typeof s.body!="string"||!G(s,X))return null}const r=n.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(M)||typeof i!="string"||!t[i]&&!r[i]||!G(s,X))return null}return n}const ge=Object.create(null);function pt(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function I(e,n){const t=ge[e]||(ge[e]=Object.create(null));return t[n]||(t[n]=pt(e,n))}function re(e,n){return Le(n)?Pe(n,(t,r)=>{r?e.icons[t]=r:e.missing.add(t)}):[]}function gt(e,n,t){try{if(typeof t.body=="string")return e.icons[n]={...t},!0}catch{}return!1}let P=!1;function Ee(e){return typeof e=="boolean"&&(P=e),P}function mt(e){const n=typeof e=="string"?U(e,!0,P):e;if(n){const t=I(n.provider,n.prefix),r=n.name;return t.icons[r]||(t.missing.has(r)?null:void 0)}}function yt(e,n){const t=U(e,!0,P);if(!t)return!1;const r=I(t.provider,t.prefix);return gt(r,t.name,n)}function bt(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),P&&!n&&!e.prefix){let o=!1;return Le(e)&&(e.prefix="",Pe(e,(s,i)=>{i&&yt(s,i)&&(o=!0)})),o}const t=e.prefix;if(!N({provider:n,prefix:t,name:"a"}))return!1;const r=I(n,t);return!!re(r,e)}const je=Object.freeze({width:null,height:null}),Ae=Object.freeze({...je,...H}),wt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,xt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function me(e,n,t){if(n===1)return e;if(t=t||100,typeof e=="number")return Math.ceil(e*n*t)/t;if(typeof e!="string")return e;const r=e.split(wt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=xt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*n*t)/t)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const St=e=>e==="unset"||e==="undefined"||e==="none";function _t(e,n){const t={...K,...e},r={...Ae,...n},o={left:t.left,top:t.top,width:t.width,height:t.height};let s=t.body;[t,r].forEach(w=>{const h=[],a=w.hFlip,d=w.vFlip;let p=w.rotate;a?d?p+=2:(h.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),h.push("scale(-1 1)"),o.top=o.left=0):d&&(h.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),h.push("scale(1 -1)"),o.top=o.left=0);let b;switch(p<0&&(p-=Math.floor(p/4)*4),p=p%4,p){case 1:b=o.height/2+o.top,h.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:h.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,h.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}p%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),h.length&&(s='<g transform="'+h.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,u=o.height;let f,g;i===null?(g=c===null?"1em":c==="auto"?u:c,f=me(g,l/u)):(f=i==="auto"?l:i,g=c===null?me(f,u/l):c==="auto"?u:c);const y={},x=(w,h)=>{St(h)||(y[w]=h.toString())};return x("width",f),x("height",g),y.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+u.toString(),{attributes:y,body:s}}const vt=/\sid="(\S+)"/g,It="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ct=0;function kt(e,n=It){const t=[];let r;for(;r=vt.exec(e);)t.push(r[1]);if(!t.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return t.forEach(s=>{const i=typeof n=="function"?n(s):n+(Ct++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Y=Object.create(null);function Ft(e,n){Y[e]=n}function Z(e){return Y[e]||Y[""]}function se(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ie=Object.create(null),F=["https://api.simplesvg.com","https://api.unisvg.com"],q=[];for(;F.length>0;)F.length===1||Math.random()>.5?q.push(F.shift()):q.push(F.pop());ie[""]=se({resources:["https://api.iconify.design"].concat(q)});function Tt(e,n){const t=se(n);return t===null?!1:(ie[e]=t,!0)}function ce(e){return ie[e]}const Mt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ye=Mt();function Pt(e,n){const t=ce(e);if(!t)return 0;let r;if(!t.maxURL)r=0;else{let o=0;t.resources.forEach(i=>{o=Math.max(o,i.length)});const s=n+".json?icons=";r=t.maxURL-o-t.path.length-s.length}return r}function Lt(e){return e===404}const Et=(e,n,t)=>{const r=[],o=Pt(e,n),s="icons";let i={type:s,provider:e,prefix:n,icons:[]},c=0;return t.forEach((l,u)=>{c+=l.length+1,c>=o&&u>0&&(r.push(i),i={type:s,provider:e,prefix:n,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function jt(e){if(typeof e=="string"){const n=ce(e);if(n)return n.path}return"/"}const At=(e,n,t)=>{if(!ye){t("abort",424);return}let r=jt(n.provider);switch(n.type){case"icons":{const s=n.prefix,c=n.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=n.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:t("abort",400);return}let o=503;ye(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{t(Lt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?t("abort",s):t("next",o)});return}setTimeout(()=>{t("success",s)})}).catch(()=>{t("next",o)})},Ot={prepare:Et,send:At};function zt(e){const n={loaded:[],missing:[],pending:[]},t=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=t[s]||(t[s]=Object.create(null)),u=l[i]||(l[i]=I(s,i));let f;c in u.icons?f=n.loaded:i===""||u.missing.has(c)?f=n.missing:f=n.pending;const g={provider:s,prefix:i,name:c};f.push(g)}),n}function Oe(e,n){e.forEach(t=>{const r=t.loaderCallbacks;r&&(t.loaderCallbacks=r.filter(o=>o.id!==n))})}function Nt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let t=!1;const r=e.provider,o=e.prefix;n.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const u=l.name;if(e.icons[u])i.loaded.push({provider:r,prefix:o,name:u});else if(e.missing.has(u))i.missing.push({provider:r,prefix:o,name:u});else return t=!0,!0;return!1}),i.pending.length!==c&&(t||Oe([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let qt=0;function Dt(e,n,t){const r=qt++,o=Oe.bind(null,t,r);if(!n.pending.length)return o;const s={id:r,icons:n,callback:e,abort:o};return t.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Bt(e,n=!0,t=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?U(o,n,t):o;s&&r.push(s)}),r}var Rt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Vt(e,n,t,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let m=e.resources.slice(0);for(i=[];m.length>1;){const S=Math.floor(Math.random()*m.length);i.push(m[S]),m=m.slice(0,S).concat(m.slice(S+1))}i=i.concat(m)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",u=0,f,g=null,y=[],x=[];typeof r=="function"&&x.push(r);function w(){g&&(clearTimeout(g),g=null)}function h(){l==="pending"&&(l="aborted"),w(),y.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),y=[]}function a(m,S){S&&(x=[]),typeof m=="function"&&x.push(m)}function d(){return{startTime:c,payload:n,status:l,queriesSent:u,queriesPending:y.length,subscribe:a,abort:h}}function p(){l="failed",x.forEach(m=>{m(void 0,f)})}function b(){y.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),y=[]}function W(m,S,k){const E=S!=="success";switch(y=y.filter(v=>v!==m),l){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(S==="abort"){f=k,p();return}if(E){f=k,y.length||(i.length?C():p());return}if(w(),b(),!e.random){const v=e.resources.indexOf(m.resource);v!==-1&&v!==e.index&&(e.index=v)}l="completed",x.forEach(v=>{v(k)})}function C(){if(l!=="pending")return;w();const m=i.shift();if(m===void 0){if(y.length){g=setTimeout(()=>{w(),l==="pending"&&(b(),p())},e.timeout);return}p();return}const S={status:"pending",resource:m,callback:(k,E)=>{W(S,k,E)}};y.push(S),u++,g=setTimeout(C,e.rotate),t(m,n,S.callback)}return setTimeout(C),d}function ze(e){const n={...Rt,...e};let t=[];function r(){t=t.filter(c=>c().status==="pending")}function o(c,l,u){const f=Vt(n,c,l,(g,y)=>{r(),u&&u(g,y)});return t.push(f),f}function s(c){return t.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{n.index=c},getIndex:()=>n.index,cleanup:r}}function be(){}const J=Object.create(null);function Ht(e){if(!J[e]){const n=ce(e);if(!n)return;const t=ze(n),r={config:n,redundancy:t};J[e]=r}return J[e]}function Ut(e,n,t){let r,o;if(typeof e=="string"){const s=Z(e);if(!s)return t(void 0,424),be;o=s.send;const i=Ht(e);i&&(r=i.redundancy)}else{const s=se(e);if(s){r=ze(s);const i=e.resources?e.resources[0]:"",c=Z(i);c&&(o=c.send)}}return!r||!o?(t(void 0,424),be):r.query(n,o,t)().abort}const we="iconify2",L="iconify",Ne=L+"-count",xe=L+"-version",qe=36e5,Kt=168;function ee(e,n){try{return e.getItem(n)}catch{}}function le(e,n,t){try{return e.setItem(n,t),!0}catch{}}function Se(e,n){try{e.removeItem(n)}catch{}}function te(e,n){return le(e,Ne,n.toString())}function ne(e){return parseInt(ee(e,Ne))||0}const Q={local:!0,session:!0},De={local:new Set,session:new Set};let ae=!1;function Qt(e){ae=e}let O=typeof window>"u"?{}:window;function Be(e){const n=e+"Storage";try{if(O&&O[n]&&typeof O[n].length=="number")return O[n]}catch{}Q[e]=!1}function Re(e,n){const t=Be(e);if(!t)return;const r=ee(t,xe);if(r!==we){if(r){const c=ne(t);for(let l=0;l<c;l++)Se(t,L+l.toString())}le(t,xe,we),te(t,0);return}const o=Math.floor(Date.now()/qe)-Kt,s=c=>{const l=L+c.toString(),u=ee(t,l);if(typeof u=="string"){try{const f=JSON.parse(u);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&n(f,c))return!0}catch{}Se(t,l)}};let i=ne(t);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,te(t,i)):De[e].add(c))}function Ve(){if(!ae){Qt(!0);for(const e in Q)Re(e,n=>{const t=n.data,r=n.provider,o=t.prefix,s=I(r,o);if(!re(s,t).length)return!1;const i=t.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Wt(e,n){const t=e.lastModifiedCached;if(t&&t>=n)return t===n;if(e.lastModifiedCached=n,t)for(const r in Q)Re(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===n});return!0}function $t(e,n){ae||Ve();function t(r){let o;if(!Q[r]||!(o=Be(r)))return;const s=De[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=ne(o),!te(o,i+1))return;const c={cached:Math.floor(Date.now()/qe),provider:e.provider,data:n};return le(o,L+i.toString(),JSON.stringify(c))}n.lastModified&&!Wt(e,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),t("local")||t("session"))}function _e(){}function Gt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Nt(e)}))}function Jt(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=Z(t)))return;s.prepare(t,r,o).forEach(c=>{Ut(t,c,l=>{if(typeof l!="object")c.icons.forEach(u=>{e.missing.add(u)});else try{const u=re(e,l);if(!u.length)return;const f=e.pendingIcons;f&&u.forEach(g=>{f.delete(g)}),$t(e,l)}catch(u){console.error(u)}Gt(e)})})}))}const Xt=(e,n)=>{const t=Bt(e,!0,Ee()),r=zt(t);if(!r.pending.length){let l=!0;return n&&setTimeout(()=>{l&&n(r.loaded,r.missing,r.pending,_e)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:u,prefix:f}=l;if(f===c&&u===i)return;i=u,c=f,s.push(I(u,f));const g=o[u]||(o[u]=Object.create(null));g[f]||(g[f]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:f,name:g}=l,y=I(u,f),x=y.pendingIcons||(y.pendingIcons=new Set);x.has(g)||(x.add(g),o[u][f].push(g))}),s.forEach(l=>{const{provider:u,prefix:f}=l;o[u][f].length&&Jt(l,o[u][f])}),n?Dt(n,r,s):_e};function Yt(e,n){const t={...e};for(const r in n){const o=n[r],s=typeof o;r in je?(o===null||o&&(s==="string"||s==="number"))&&(t[r]=o):s===typeof t[r]&&(t[r]=r==="rotate"?o%4:o)}return t}const Zt=/[\s,]+/;function en(e,n){n.split(Zt).forEach(t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function tn(e,n=0){const t=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(t===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(t!==e){let o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-t.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return n}function nn(e,n){let t=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in n)t+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}function on(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function rn(e){return"data:image/svg+xml,"+on(e)}function sn(e){return'url("'+rn(e)+'")'}const ve={...Ae,inline:!1},cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ln={display:"inline-block"},oe={backgroundColor:"currentColor"},He={backgroundColor:"transparent"},Ie={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ce={webkitMask:oe,mask:oe,background:He};for(const e in Ce){const n=Ce[e];for(const t in Ie)n[e+t]=Ie[t]}const D={};["horizontal","vertical"].forEach(e=>{const n=e.slice(0,1)+"Flip";D[e+"-flip"]=n,D[e.slice(0,1)+"-flip"]=n,D[e+"Flip"]=n});function ke(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Fe=(e,n)=>{const t=Yt(ve,n),r={...cn},o=n.mode||"svg",s={},i=n.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let h in n){const a=n[h];if(a!==void 0)switch(h){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":t[h]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&en(t,a);break;case"color":s.color=a;break;case"rotate":typeof a=="string"?t[h]=tn(a):typeof a=="number"&&(t[h]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete r["aria-hidden"];break;default:{const d=D[h];d?(a===!0||a==="true"||a===1)&&(t[d]=!0):ve[h]===void 0&&(r[h]=a)}}}const l=_t(e,t),u=l.attributes;if(t.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,u);let h=0,a=n.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),r.innerHTML=kt(l.body,a?()=>a+"ID"+h++:"iconifyVue"),ue("svg",r)}const{body:f,width:g,height:y}=e,x=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),w=nn(f,{...u,width:g+"",height:y+""});return r.style={...s,"--svg":sn(w),width:ke(u.width),height:ke(u.height),...ln,...x?oe:He,...c},ue("span",r)};Ee(!0);Ft("",Ot);if(typeof document<"u"&&typeof window<"u"){Ve();const e=window;if(e.IconifyPreload!==void 0){const n=e.IconifyPreload,t="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!bt(r))&&console.error(t)}catch{console.error(t)}})}if(e.IconifyProviders!==void 0){const n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let t in n){const r="IconifyProviders["+t+"] is invalid.";try{const o=n[t];if(typeof o!="object"||!o||o.resources===void 0)continue;Tt(t,o)||console.error(r)}catch{console.error(r)}}}}const an={...K,body:""},un=Qe({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,n){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let t;if(typeof e!="string"||(t=U(e,!1,!0))===null)return this.abortLoading(),null;const r=mt(t);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:e,abort:Xt([t],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,n&&n(e));const o=["iconify"];return t.prefix!==""&&o.push("iconify--"+t.prefix),t.provider!==""&&o.push("iconify--"+t.provider),{data:r,classes:o}}},render(){this.counter;const e=this.$attrs,n=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!n)return Fe(an,e);let t=e;return n.classes&&(t={...e,class:(typeof e.class=="string"?e.class+" ":"")+n.classes.join(" ")}),Fe({...K,...n.data},t)}}),fn={__name:"Icon",setup(e){return(n,t)=>(_(),z(We(un)))}},dn=fn;const hn={props:{to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},size:{type:String,required:!1,default:null},type:{type:String,required:!1,default:null},light:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:null},iconSvg:{type:String,required:!1,default:null},iconAlign:{type:String,required:!1,default:null},iconFill:{type:String,required:!1,default:null},iconStroke:{type:String,required:!1,default:null},onClick:{type:Function,required:!1,default:()=>{}}},setup(e,{slots:n}){const t=e.to?"router-link":e.href?"a":"button",r=!!n.default;return{tag:t,hasSlot:r}},computed:{tagAttributes(){const e={};return this.to!==null?e.to=this.to:this.href?e.href=this.href:e.type="button",e},classes(){const e={btn:!0};return this.size&&(e["btn-".concat(this.size)]=!0),this.type&&(e["btn-".concat(this.type)]=!0),this.light&&(e["btn-light"]=!0),e},svgStyles(){const e={};return this.iconFill&&(e.fill=this.iconFill),this.iconStroke&&(e.stroke=this.iconStroke),e}}},pn=["xlink:href"],gn={key:2},mn=["xlink:href"];function yn(e,n,t,r,o,s){const i=dn;return _(),z(Je(r.tag),Ge(s.tagAttributes,{class:s.classes,onClick:t.onClick}),{default:B(()=>[t.iconSvg&&t.iconAlign!=="right"?(_(),T("svg",{key:0,style:j(s.svgStyles)},[R("use",{"xlink:href":"#".concat(t.iconSvg)},null,8,pn)],4)):t.icon&&t.iconAlign!=="right"?(_(),z(i,{key:1,icon:t.icon,style:j(s.svgStyles)},null,8,["icon","style"])):$("",!0),r.hasSlot?(_(),T("span",gn,[$e(e.$slots,"default")])):$("",!0),t.iconSvg&&t.iconAlign==="right"?(_(),T("svg",{key:3,style:j(s.svgStyles)},[R("use",{"xlink:href":"#".concat(t.iconSvg)},null,8,mn)],4)):t.icon&&t.iconAlign==="right"?(_(),z(i,{key:4,icon:t.icon,style:j(s.svgStyles)},null,8,["icon","style"])):$("",!0)]),_:3},16,["class","onClick"])}const bn=Te(hn,[["render",yn]]);const wn={class:"controls"},xn={__name:"Tubes.client",setup(e){const n=Xe().$device;let t,r;const o=new Array(4),s=new Array(32),i=new de,c=new nt,l=new ot(new de(0,0,1),0),u=new rt,f={pause:!1,pointerHover:!1};Ye(()=>{Ze(()=>{t=st({id:"webgl-main",postprocessing:{effects:[{EffectClass:lt,args:[{mipmapBlur:!0,luminanceThreshold:0,luminanceSmoothing:.05,intensity:3,radius:.815}]}]}}),t.minPixelRatio=2,t.maxPixelRatio=2,t.cameraMaxAspect=1.7,t.resize(),t.camera.position.set(0,0,5),t.camera.lookAt(0,0,0),t.updateWorldSize(),r=it(t.camera,t.canvas),r.enableRotate=!1,r.enablePan=!1,r.addEventListener("change",()=>{t.updateWorldSize()});const a=5,d=100,p=["#6c483b","#0b0fc4","#b78e1c","#f408dd"];o[0]=new A(p[0],d),o[0].position.set(-a,-a,a),t.scene.add(o[0]),o[1]=new A(p[1],d),o[1].position.set(a,a,a),t.scene.add(o[1]),o[2]=new A(p[2],d),o[2].position.set(-a,a,a),t.scene.add(o[2]),o[3]=new A(p[3],d),o[3].position.set(a,-a,a),t.scene.add(o[3]);for(let b=0;b<s.length;b++){const W=he.randFloat(.005,.05),C=he.randInt(32,128),m=new ct({color:Math.random()*16777215,metalness:1,roughness:.25});s[b]=new at({radius:W,tubularSegments:C},m),s[b].castShadow=!0,s[b].receiveShadow=!0,s[b].timeDelta=Math.random()*100,t.scene.add(s[b])}document.addEventListener("pointermove",y),t.on("update",g)}),et().on("device.resize",()=>{t&&t.resize()}),document.addEventListener("keydown",x)});function g(a){if(r.update(),!n.pointer.hover){const d=a.elapsed;i.x=Math.cos(d*2.5)*t.size.wHeight*.25,i.y=Math.sin(d*1.6)*t.size.wHeight*.25,i.z=Math.cos(d*1.3)*t.size.wHeight*.25}if(!f.pause)for(let d=0;d<s.length;d++){const p=s[d];p.lerpTo(i,.5,a.elapsed+p.timeDelta)}}function y(a){f.pointerHover=!0,u.copy(n.pointer.relative),c.setFromCamera(u,t.camera),t.camera.getWorldDirection(l.normal),c.ray.intersectPlane(l,i)}function x(a){a.code==="Space"?f.pause=!f.pause:a.code==="KeyL"?h():a.code==="KeyT"?w():a.code==="KeyC"&&(h(),w())}function w(){const a=[];for(let d=0;d<s.length;d++){const p=Math.random()*16777215;a.push(p),s[d].material.color.set(p)}console.log("randomTubesColors",a.map(d=>"#"+(d&16777215).toString(16).padStart(6,"0")))}function h(){const a=[];for(let d=0;d<o.length;d++){const p=Math.random()*16777215;a.push(p),o[d].color.set(p)}console.log("randomLightsColors",a.map(d=>"#"+(d&16777215).toString(16).padStart(6,"0")))}return tt(()=>{document.removeEventListener("pointermove",y),document.removeEventListener("keydown",x),r==null||r.dispose(),t&&(t.off("update",g),t.scene.clear(),t.dispose())}),(a,d)=>{const p=bn;return _(),T("div",null,[R("canvas",{id:"webgl-main",onClick:d[0]||(d[0]=b=>{h(),w()})}),R("div",wn,[V(p,{type:"secondary",light:"",size:"sm",onClick:h},{default:B(()=>[fe(" Lights Colors ")]),_:1}),V(p,{type:"secondary",light:"",size:"sm",onClick:w},{default:B(()=>[fe(" Tubes Colors ")]),_:1})])])}}},Sn=xn,_n=Ke(Sn),vn={},In={class:"test"};function Cn(e,n){const t=_n,r=Ue;return _(),T("div",In,[V(r,null,{default:B(()=>[V(t)]),_:1})])}const Pn=Te(vn,[["render",Cn]]);export{Pn as default};
