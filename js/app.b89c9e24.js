(function(e){function t(t){for(var n,a,d=t[0],u=t[1],s=t[2],l=0,i=[];l<d.length;l++)a=d[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&i.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(i.length)i.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,d=1;d<r.length;d++){var u=r[d];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var b=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},a420:function(e,t,r){"use strict";r("ee7e")},a766:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var n=r("7a23");function o(e,t,r,o,c,a){const d=Object(n["h"])("Dashboard");return Object(n["f"])(),Object(n["b"])(d,{msg:"Arc Crypto Monitor"})}const c={class:"container mx-auto px-4"},a={class:"font-bold text-4xl p-2"},d=Object(n["c"])("div",{class:"block bg-green-200 p-4 my-6 rounded-md text-md"},"Simple crypto coin monitoring solution for fellow geeks ☺️ 🤖",-1);function u(e,t,r,o,u,s){const b=Object(n["h"])("Table");return Object(n["f"])(),Object(n["b"])("div",c,[Object(n["c"])("div",a,Object(n["i"])(e.msg),1),d,Object(n["c"])(b)])}const s={class:"mx-auto table-fixed border-separate border border-green-800 rounded-md min-w-3/4"},b=Object(n["c"])("thead",null,[Object(n["c"])("tr",null,[Object(n["c"])("th",{class:"py-2 text-xl w-1/2"},"Coin"),Object(n["c"])("th",{class:"py-2 text-xl w-1/2"},"Value")])],-1),l=Object(n["c"])("tbody",null,[Object(n["c"])("tr",null,[Object(n["c"])("td",{class:"border border-green-600 rounded-md py-2"},"BTC"),Object(n["c"])("td",{class:"border border-green-600 rounded-md py-2"},"50.000 USD")]),Object(n["c"])("tr",null,[Object(n["c"])("td",{class:"border border-green-600 rounded-md py-2"},"ETH"),Object(n["c"])("td",{class:"border border-green-600 rounded-md py-2"},"25.000 USD")]),Object(n["c"])("tr",null,[Object(n["c"])("td",{class:"border border-green-600 rounded-md py-2"},"DOGE"),Object(n["c"])("td",{class:"border border-green-600 rounded-md py-2"},"15.000 USD")])],-1);function i(e,t,r,o,c,a){return Object(n["f"])(),Object(n["b"])("table",s,[b,l])}var p=r("5502"),f=Symbol(),O=Object(p["a"])({state:{tickers:[]},mutations:{},actions:{},modules:{}});function j(){return Object(p["b"])(f)}var m=Object(n["d"])({name:"Table",props:{msg:String},setup:function(){var e=j().state;console.log(e.tickers)},created:function(){}});m.render=i;var g=m,y=Object(n["d"])({name:"Dashboard",components:{Table:g},props:{msg:String},setup:function(){var e=j().state;console.log(e.tickers)},created:function(){}});y.render=u;var v=y,h=Object(n["d"])({name:"App",components:{Dashboard:v}});r("a420");h.render=o;var x=h;r("a766");Object(n["a"])(x).use(O,f).mount("#app")},ee7e:function(e,t,r){}});
//# sourceMappingURL=app.b89c9e24.js.map