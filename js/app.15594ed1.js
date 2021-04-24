(function(e){function t(t){for(var c,a,u=t[0],s=t[1],i=t[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(l.length)l.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var b=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},a420:function(e,t,n){"use strict";n("ee7e")},a766:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function r(e,t,n,r,o,a){const u=Object(c["j"])("Dashboard");return Object(c["g"])(),Object(c["c"])(u,{msg:"Arc Crypto Monitor"})}const o={class:"dashboard"},a={class:"title"},u=Object(c["d"])("div",{class:"description"},"Simple crypto coin monitoring solution for fellow geeks ☺️ 🤖",-1);function s(e,t,n,r,s,i){const b=Object(c["j"])("Table");return Object(c["g"])(),Object(c["c"])("div",o,[Object(c["d"])("div",a,Object(c["k"])(e.msg),1),u,Object(c["d"])(b)])}const i={class:"table-header"},b=Object(c["d"])("thead",null,[Object(c["d"])("tr",null,[Object(c["d"])("th",null,"Coin"),Object(c["d"])("th",null,"Value")])],-1);function d(e,t,n,r,o,a){const u=Object(c["j"])("Search"),s=Object(c["j"])("CurrencyButtonGroup");return Object(c["g"])(),Object(c["c"])("div",null,[Object(c["d"])("div",i,[Object(c["d"])("div",null,[Object(c["d"])(u)]),Object(c["d"])(s)]),Object(c["d"])("table",null,[b,Object(c["d"])("tbody",null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.getCoinsByName,(t,n)=>(Object(c["g"])(),Object(c["c"])("tr",{key:n},[Object(c["d"])("td",null,Object(c["k"])(t.name),1),Object(c["d"])("td",null,Object(c["k"])(e.getPriceByCurrency(t)),1)]))),128))])])])}var l=n("9ab4");const p={class:"button-group"};function f(e,t,n,r,o,a){return Object(c["g"])(),Object(c["c"])("div",p,[Object(c["d"])("button",{class:e.getActiveButton(e.CurrencyType.EUR),onClick:t[1]||(t[1]=t=>e.setActiveCurrency(e.CurrencyType.EUR))},"EUR",2),Object(c["d"])("button",{class:e.getActiveButton(e.CurrencyType.USD),onClick:t[2]||(t[2]=t=>e.setActiveCurrency(e.CurrencyType.USD))},"USD",2),Object(c["d"])("button",{class:e.getActiveButton(e.CurrencyType.RUB),onClick:t[3]||(t[3]=t=>e.setActiveCurrency(e.CurrencyType.RUB))},"RUB",2)])}var h,j,O,y;(function(e){e["sourceCurrency"]="FROMSYMBOL",e["destCurrency"]="TOSYMBOL",e["price"]="PRICE"})(h||(h={})),function(e){e["EUR"]="EUR",e["USD"]="USD",e["RUB"]="RUB"}(j||(j={})),function(e){e["setUsdToRub"]="setUsdToRub",e["updateCoinsByConnection"]="updateCoinsByConnection",e["updateSearchData"]="updateSearchData",e["setActiveCurrency"]="setActiveCurrency"}(O||(O={})),function(e){e["getUsdToRubRate"]="getUsdToRubRate",e["openTickerSubConnection"]="openTickerSubConnection",e["updateSearchData"]="updateSearchData",e["setActiveCurrency"]="setActiveCurrency"}(y||(y={}));var v=n("5502"),C=Object(c["e"])({name:"CurrencyButtonGroup",data:function(){return{CurrencyType:j}},computed:Object(l["a"])({},Object(v["d"])({activeCurrency:function(e){return e.activeCurrency}})),methods:Object(l["a"])(Object(l["a"])({},Object(v["b"])(["setActiveCurrency"])),{getActiveButton:function(e){return this.activeCurrency===e?"bg-white shadow":""}})});C.render=f;var m=C;const g={class:"search-box"};function S(e,t,n,r,o,a){const u=Object(c["j"])("Icon");return Object(c["g"])(),Object(c["c"])("div",g,[Object(c["d"])(u,{class:"ml-4",name:"search"}),Object(c["n"])(Object(c["d"])("input",{class:"search-input","onUpdate:modelValue":t[1]||(t[1]=t=>e.searchData=t),onInput:t[2]||(t[2]=(...t)=>e.setSearch&&e.setSearch(...t)),type:"text",placeholder:"Search"},null,544),[[c["l"],e.searchData]])])}const U={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 60 60"};function R(e,t,n,r,o,a){return Object(c["g"])(),Object(c["c"])("svg",U,[Object(c["d"])("path",{d:e.path},null,8,["d"])])}const D={search:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"};var T=Object(c["e"])({name:"Icon",props:{name:String},computed:{path(){return D[this.name]}}});T.render=R;var B=T,w=Object(c["e"])({name:"Search",components:{Icon:B},data:function(){return{searchData:""}},computed:Object(l["a"])({},Object(v["d"])({activeCurrency:function(e){return e.activeCurrency}})),methods:Object(l["a"])(Object(l["a"])({},Object(v["b"])(["updateSearchData"])),{setSearch:function(){this.updateSearchData(this.searchData)}})});w.render=S;var k=w,A=Object(c["e"])({name:"Table",components:{CurrencyButtonGroup:m,Search:k},computed:Object(l["a"])(Object(l["a"])({},Object(v["d"])({activeCurrency:function(e){return e.activeCurrency}})),Object(v["c"])(["getCoinsByName"])),methods:Object(l["a"])(Object(l["a"])({},Object(v["b"])(["getUsdToRubRate","openTickerSubConnection"])),{getPriceByCurrency:function(e){return e[this.activeCurrency]+" "+this.activeCurrency}}),beforeMount:function(){this.getUsdToRubRate(),this.openTickerSubConnection()}});A.render=d;var x=A,M=Object(c["e"])({name:"Dashboard",components:{Table:x},props:{msg:String}});M.render=s;var E=M,P=Object(c["e"])({name:"App",components:{Dashboard:E}});n("a420");P.render=r;var _=P,z=function(e,t){return void 0===e&&(e="usd"),void 0===t&&(t="rub"),Object(l["b"])(void 0,void 0,Promise,(function(){var n,c;return Object(l["c"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+e+"/"+t+".json")];case 1:return n=r.sent(),200===n.status?[2,n.json().then((function(e){return e[t]}))]:(console.log("Can't fetch USD to RUB exchange rate. Status Code: "+n.status+". Using default."),[3,3]);case 2:return c=r.sent(),console.log("Can't fetch USD to RUB exchange rate. Using default.",c),[3,3];case 3:return[2]}}))}))},I=z,N="btc, eth, xrp, xlm, bch, ada, xtz, ltc, eos, zrx, rep",J=N.toUpperCase().split(", "),G=J.map((function(e){return"2~Coinbase~"+e+"~USD"})),L=J.map((function(e){return"2~Coinbase~"+e+"~EUR"})),V=Object(l["d"])(G,L),W="35c7ef71c64f11a95f1b0ee0c58f6218af91236d8c30bd3133f9a30811dc00a3",Y=function(){try{var e=new WebSocket("wss://streamer.cryptocompare.com/v2?api_key="+W);return e.onopen=function(){console.log("Successfully connected to the CryptoCompare server...");var t={action:"SubAdd",subs:null!==V&&void 0!==V?V:["2~Coinbase~BTC~USD"]};e.send(JSON.stringify(t))},e}catch(t){return console.log(t),t.message}},F=Y,q=function(){var e={};return J.forEach((function(t){e[t]={name:t,USD:0,EUR:0,RUB:0}})),e},H=Symbol(),K=Object(v["a"])({state:{coins:q(),usdToRub:77,searchData:"",activeCurrency:j.USD},getters:{getCoinsByName:function(e){var t=e.coins,n=e.searchData,c=[];return Object.entries(t).map((function(e){var t=e[0],r=e[1];t.startsWith(n)&&c.push(r)})),c.length?c:Object.values(t)}},mutations:{setUsdToRub:function(e,t){e.usdToRub=t},setActiveCurrency:function(e,t){e.activeCurrency=t},updateSearchData:function(e,t){e.searchData=t},updateCoinsByConnection:function(e,t){var n=e.coins,c=e.usdToRub;t.onmessage=function(e){var t=JSON.parse(e.data);switch(t[h.destCurrency]){case j.EUR:t[h.price]&&(n[t[h.sourceCurrency]].EUR=t[h.price]);break;case j.USD:t[h.price]&&(n[t[h.sourceCurrency]].USD=t[h.price],n[t[h.sourceCurrency]].RUB=Math.trunc(t[h.price]*c*100)/100);break}}}},actions:{getUsdToRubRate:function(e){var t=e.commit;return I().then((function(e){e&&t(O.setUsdToRub,e)}))},setActiveCurrency:function(e,t){var n=e.commit;n(O.setActiveCurrency,t)},updateSearchData:function(e,t){var n=e.commit;n(O.updateSearchData,t)},openTickerSubConnection:function(e){var t=e.commit,n=F();n&&t(O.updateCoinsByConnection,n)}},modules:{}});n("a766");Object(c["b"])(_).use(K,H).mount("#app")},ee7e:function(e,t,n){}});
//# sourceMappingURL=app.15594ed1.js.map