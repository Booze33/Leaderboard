"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"body {\r\n  background-color: #f4cd93;\r\n  margin: 10% 0 0 0;\r\n  display: flex;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  place-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.body {\r\n  width: 60vw;\r\n}\r\n\r\n.grid {\r\n  width: 60vw;\r\n  display: grid;\r\n  gap: 2rem;\r\n  grid-template-columns: repeat(2, 50%);\r\n}\r\n\r\n.display {\r\n  border: 2px solid #0541a9;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbutton {\r\n  height: 1.5rem;\r\n  width: 4rem;\r\n  border: 2px solid #000;\r\n}\r\n\r\n.input {\r\n  margin-bottom: 1rem;\r\n  border: 2px solid #000;\r\n  height: 2rem;\r\n}\r\n\r\n.button {\r\n  margin-left: 83%;\r\n}\r\n",""]);const c=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},654:(e,n,t)=>{var r=t(379),a=t.n(r),o=t(795),s=t.n(o),c=t(569),i=t.n(c),u=t(565),d=t.n(u),l=t(216),p=t.n(l),f=t(589),m=t.n(f),h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),a()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],u=r.base?i[0]+r.base:i[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var p=t(l),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=t(o[s]);n[c].references--}for(var i=r(e,a),u=0;u<o.length;u++){var d=t(o[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=i}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},138:(e,n,t)=>{t.a(e,(async(e,n)=>{try{t(654);const e="My game",r="1d1Kcgt6tjFXpA9MWYES",a=async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/",{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({name:e})});return(await n.json()).Id},o=await a(),s=async()=>{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/",{headers:{Authorization:`Bearer ${r}`}}),n=await e.json();let t="";n.result.forEach((e=>{t+=`<div>${e.user}: ${e.score}</div>`})),document.querySelector(".display").innerHTML=t};document.getElementById("refresh").addEventListener("click",s);const c=async()=>{const e=document.querySelector(".name").value.trim(),n=document.querySelector(".score").value;if(!e||!/^[a-zA-Z\s]*$/.test(e))return;const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1d1Kcgt6tjFXpA9MWYES/scores/",{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({user:e,score:n,gameID:o})});(await t.json()).className="this"};document.getElementById("submit").addEventListener("click",c),n()}catch(e){n(e)}}),1)}},e=>{e(e.s=138)}]);