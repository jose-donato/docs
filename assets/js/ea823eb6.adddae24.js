"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=i.createContext({}),l=function(e){var t=i.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,s=d["".concat(b,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(s,o(o({ref:t},p),{},{components:n})):i.createElement(s,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={title:"ob",description:"OpenBB Terminal Function"},o="Due Diligence",c={unversionedId:"features/crypto/dd/ob",id:"features/crypto/dd/ob",title:"ob",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/crypto/dd/ob.md",sourceDirName:"features/crypto/dd",slug:"/features/crypto/dd/ob",permalink:"/terminal/features/crypto/dd/ob",draft:!1,tags:[],version:"current",frontMatter:{title:"ob",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"nonzero",permalink:"/terminal/features/crypto/dd/nonzero"},next:{title:"oi",permalink:"/terminal/features/crypto/dd/oi"}},b={},l=[{value:"ob",id:"ob",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"due-diligence"},"Due Diligence"),(0,r.kt)("h2",{id:"ob"},"ob"),(0,r.kt)("h3",{id:"description"},"Description:"),(0,r.kt)("p",null,"Get the order book for selected coin"),(0,r.kt)("h3",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"usage: ob\n          [-e {aax,alpaca,ascendex,bequant,bibox,bigone,binance,binancecoinm,binanceus,binanceusdm,bit2c,bitbank,bitbay,bitbns,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,blockchaincom,btcalpha,btcbox,btcex,btcmarkets,btctradeua,btcturk,buda,bw,bybit,bytetrade,cex,coinbase,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinspot,crex24,cryptocom,currencycom,delta,deribit,digifinex,eqonex,exmo,flowbtc,fmfwio,ftx,ftxus,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,itbit,kraken,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,liquid,luno,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,probit,qtrade,ripio,stex,therock,tidebit,tidex,timex,tokocrypto,upbit,wavesexchange,wazirx,whitebit,woo,yobit,zaif,zb,zipmex,zonda}]\n          [--vs VS]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange to search for order book"),(0,r.kt)("td",{parentName:"tr",align:null},"binance"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"aax, alpaca, ascendex, bequant, bibox, bigone, binance, binancecoinm, binanceus, binanceusdm, bit2c, bitbank, bitbay, bitbns, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, blockchaincom, btcalpha, btcbox, btcex, btcmarkets, btctradeua, btcturk, buda, bw, bybit, bytetrade, cex, coinbase, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinspot, crex24, cryptocom, currencycom, delta, deribit, digifinex, eqonex, exmo, flowbtc, fmfwio, ftx, ftxus, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, itbit, kraken, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, liquid, luno, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, probit, qtrade, ripio, stex, therock, tidebit, tidex, timex, tokocrypto, upbit, wavesexchange, wazirx, whitebit, woo, yobit, zaif, zb, zipmex, zonda")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vs"),(0,r.kt)("td",{parentName:"tr",align:null},"Quote currency (what to view coin vs)"),(0,r.kt)("td",{parentName:"tr",align:null},"usdt"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))))}u.isMDXComponent=!0}}]);