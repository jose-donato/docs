"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76522],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),_=u(t),d=a,b=_["".concat(l,".").concat(d)]||_[d]||s[d]||o;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=_;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},55456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={title:"binance_available_quotes_for_each_coin",description:"OpenBB SDK Function"},i="binance_available_quotes_for_each_coin",c={unversionedId:"functions/crypto/dd/binance_available_quotes_for_each_coin",id:"functions/crypto/dd/binance_available_quotes_for_each_coin",title:"binance_available_quotes_for_each_coin",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/dd/binance_available_quotes_for_each_coin.md",sourceDirName:"functions/crypto/dd",slug:"/functions/crypto/dd/binance_available_quotes_for_each_coin",permalink:"/sdk/functions/crypto/dd/binance_available_quotes_for_each_coin",draft:!1,tags:[],version:"current",frontMatter:{title:"binance_available_quotes_for_each_coin",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"basic",permalink:"/sdk/functions/crypto/dd/basic"},next:{title:"candles",permalink:"/sdk/functions/crypto/dd/candles"}},l={},u=[{value:"openbb_terminal.cryptocurrency.due_diligence.binance_model.get_binance_available_quotes_for_each_coin",id:"openbb_terminalcryptocurrencydue_diligencebinance_modelget_binance_available_quotes_for_each_coin",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binance_available_quotes_for_each_coin"},"binance_available_quotes_for_each_coin"),(0,a.kt)("h2",{id:"openbb_terminalcryptocurrencydue_diligencebinance_modelget_binance_available_quotes_for_each_coin"},"openbb_terminal.cryptocurrency.due_diligence.binance_model.get_binance_available_quotes_for_each_coin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/due_diligence/binance_model.py'",title:"'openbb_terminal/cryptocurrency/due_diligence/binance_model.py'"},"def get_binance_available_quotes_for_each_coin() -> dict\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L77"},"Source Code")),(0,a.kt)("p",null,"Description: Helper methods that for every coin available on Binance add all quote assets. ","[Source: Binance]"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dict"),(0,a.kt)("td",{parentName:"tr",align:null},"All quote assets for given coin",(0,a.kt)("br",null),"{'ETH' : ","['BTC', 'USDT' ...]",", 'UNI' : ","['ETH', 'BTC','BUSD', ...]")))),(0,a.kt)("h2",{id:"examples"},"Examples"))}s.isMDXComponent=!0}}]);