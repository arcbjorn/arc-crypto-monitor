(function(e){function t(t){for(var c,u,s=t[0],i=t[1],a=t[2],l=0,d=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(c=!1)}c&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},o={app:0},r=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var b=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},a420:function(e,t,n){"use strict";n("ee7e")},a766:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,u){const s=Object(c["j"])("Dashboard");return Object(c["g"])(),Object(c["c"])(s,{msg:"Arc Crypto Monitor"})}const r={class:"dashboard"},u={class:"title"},s=Object(c["d"])("div",{class:"description"},"Simple crypto coin monitoring solution for fellow geeks ☺️ 🤖",-1);function i(e,t,n,o,i,a){const b=Object(c["j"])("Table");return Object(c["g"])(),Object(c["c"])("div",r,[Object(c["d"])("div",u,Object(c["k"])(e.msg),1),s,Object(c["d"])(b)])}const a=Object(c["d"])("thead",null,[Object(c["d"])("tr",null,[Object(c["d"])("th",null,"Coin"),Object(c["d"])("th",null,"Value")])],-1);function b(e,t,n,o,r,u){return Object(c["g"])(),Object(c["c"])("table",null,[a,Object(c["d"])("tbody",null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(Object.values(e.coins),(t,n)=>(Object(c["g"])(),Object(c["c"])("tr",{key:n},[Object(c["d"])("td",null,Object(c["k"])(t.name),1),Object(c["d"])("td",null,Object(c["k"])(e.getPriceByCurrency(t)),1)]))),128))])])}var l,d,f,p,O=n("9ab4"),j=n("5502");(function(e){e["sourceCurrency"]="FROMSYMBOL",e["destCurrency"]="TOSYMBOL",e["price"]="PRICE"})(l||(l={})),function(e){e["EUR"]="EUR",e["USD"]="USD",e["RUB"]="RUB"}(d||(d={})),function(e){e["setUsdToRub"]="setUsdToRub",e["updateCoinsByConnection"]="updateCoinsByConnection"}(f||(f={})),function(e){e["getUsdToRubRate"]="getUsdToRubRate",e["openTickerSubConnection"]="openTickerSubConnection"}(p||(p={}));var y=Object(c["e"])({name:"Table",data:function(){return{currency:d.USD}},computed:Object(O["a"])({},Object(j["c"])(["coins","usdToRub"])),methods:Object(O["a"])(Object(O["a"])({},Object(j["b"])(["getUsdToRubRate","openTickerSubConnection"])),{getPriceByCurrency:function(e){return e[this.currency]+" "+this.currency}}),beforeMount:function(){this.getUsdToRubRate(),this.openTickerSubConnection()},mounted:function(){console.log(this.coins)}});y.render=b;var h=y,g=Object(c["e"])({name:"Dashboard",components:{Table:h},props:{msg:String}});g.render=i;var m=g,v=Object(c["e"])({name:"App",components:{Dashboard:m}});n("a420");v.render=o;var C=v,U=function(e,t){return void 0===e&&(e="usd"),void 0===t&&(t="rub"),Object(O["b"])(void 0,void 0,Promise,(function(){var n,c;return Object(O["c"])(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+e+"/"+t+".json")];case 1:return n=o.sent(),200===n.status?[2,n.json().then((function(e){return e[t]}))]:(console.log("Can't fetch USD to RUB exchange rate. Status Code: "+n.status+". Using default."),[3,3]);case 2:return c=o.sent(),console.log("Can't fetch USD to RUB exchange rate. Using default.",c),[3,3];case 3:return[2]}}))}))},R=U,S="btc, eth, xrp, xlm, bch, ada, xtz, ltc, eos, zrx, rep",T=S.toUpperCase().split(", "),k=T.map((function(e){return"2~Coinbase~"+e+"~USD"})),w=T.map((function(e){return"2~Coinbase~"+e+"~EUR"})),B=Object(O["d"])(k,w),D="35c7ef71c64f11a95f1b0ee0c58f6218af91236d8c30bd3133f9a30811dc00a3",x=function(){try{var e=new WebSocket("wss://streamer.cryptocompare.com/v2?api_key="+D);return e.onopen=function(){console.log("Successfully connected to the CryptoCompare server...");var t={action:"SubAdd",subs:null!==B&&void 0!==B?B:["2~Coinbase~BTC~USD"]};e.send(JSON.stringify(t))},e}catch(t){return console.log(t),t.message}},P=x,M=function(){var e={};return T.forEach((function(t){e[t]={name:t,USD:0,EUR:0,RUB:0}})),e},E=Symbol(),_=Object(j["a"])({state:{coins:M(),usdToRub:77},mutations:{setUsdToRub:function(e,t){e.usdToRub=t},updateCoinsByConnection:function(e,t){t.onmessage=function(t){var n=JSON.parse(t.data);switch(console.log(n),n[l.sourceCurrency]&&(e.coins[n[l.sourceCurrency]].name=n[l.sourceCurrency]),n[l.destCurrency]){case d.EUR:n[l.price]&&(e.coins[n[l.sourceCurrency]].EUR=n[l.price]);break;case d.USD:n[l.price]&&(e.coins[n[l.sourceCurrency]].USD=n[l.price],e.coins[n[l.sourceCurrency]].RUB=Math.trunc(n[l.price]*e.usdToRub));break}}}},actions:{getUsdToRubRate:function(e){var t=e.commit;return R().then((function(e){e&&t(f.setUsdToRub,e)}))},openTickerSubConnection:function(e){var t=e.commit,n=P();n&&t(f.updateCoinsByConnection,n)}},modules:{}});n("a766");Object(c["b"])(C).use(_,E).mount("#app")},ee7e:function(e,t,n){}});
//# sourceMappingURL=app.c6d7850e.js.map