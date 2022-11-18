"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"trading_pairs",description:"OpenBB SDK Function"},l="trading_pairs",o={unversionedId:"functions/crypto/dd/trading_pairs",id:"functions/crypto/dd/trading_pairs",title:"trading_pairs",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/dd/trading_pairs.md",sourceDirName:"functions/crypto/dd",slug:"/functions/crypto/dd/trading_pairs",permalink:"/sdk/functions/crypto/dd/trading_pairs",draft:!1,tags:[],version:"current",frontMatter:{title:"trading_pairs",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"trading_pair_info",permalink:"/sdk/functions/crypto/dd/trading_pair_info"},next:{title:"twitter",permalink:"/sdk/functions/crypto/dd/twitter"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trading_pairs"},"trading_pairs"),(0,i.kt)("p",null,"Helper method that return all trading pairs on binance. Methods ause this data for input for e.g"),(0,i.kt)("p",null,"Source Code: [",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L21"},"link"),"]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def _get_trading_pairs() -> List[dict]\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"This function does not take any parameters."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"List","[dict]"),(0,i.kt)("td",{parentName:"tr",align:null},"list of dictionaries in format:",(0,i.kt)("br",null),"[",(0,i.kt)("br",null),"{'symbol': 'ETHBTC', 'status': 'TRADING', 'baseAsset': 'ETH', 'baseAssetPrecision': 8,",(0,i.kt)("br",null),"'quoteAsset': 'BTC', 'quotePrecision': 8, 'quoteAssetPrecision': 8,",(0,i.kt)("br",null),"'baseCommissionPrecision': 8, 'quoteCommissionPrecision': 8,",(0,i.kt)("br",null),"'orderTypes': ","['LIMIT', 'LIMIT_MAKER', 'MARKET', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT_LIMIT']",",",(0,i.kt)("br",null),"'icebergAllowed': True,",(0,i.kt)("br",null),"'ocoAllowed': True,",(0,i.kt)("br",null),"'quoteOrderQtyMarketAllowed': True,",(0,i.kt)("br",null),"'isSpotTradingAllowed': True,",(0,i.kt)("br",null),"'isMarginTradingAllowed': True,",(0,i.kt)("br",null),"'filters': ","[{'filterType': 'PRICE_FILTER', 'minPrice': '0.00000100',",(0,i.kt)("br",null),"'maxPrice': '922327.00000000', 'tickSize': '0.00000100'},",(0,i.kt)("br",null),"{'filterType': 'PERCENT_PRICE', 'multiplierUp': '5', 'multiplierDown': '0.2', 'avgPriceMins': 5},",(0,i.kt)("br",null),"{'filterType': 'LOT_SIZE', 'minQty': '0.00100000', 'maxQty': '100000.00000000', 'stepSize': '0.00100000'},",(0,i.kt)("br",null),"{'filterType': 'MIN_NOTIONAL', 'minNotional': '0.00010000', 'applyToMarket': True, 'avgPriceMins': 5},",(0,i.kt)("br",null),"{'filterType': 'ICEBERG_PARTS', 'limit': 10}, {'filterType': 'MARKET_LOT_SIZE', 'minQty': '0.00000000',",(0,i.kt)("br",null),"'maxQty': '930.49505347', 'stepSize': '0.00000000'}, {'filterType': 'MAX_NUM_ORDERS', 'maxNumOrders': 200},",(0,i.kt)("br",null),"{'filterType': 'MAX_NUM_ALGO_ORDERS', 'maxNumAlgoOrders': 5}]",", 'permissions': ","['SPOT', 'MARGIN']","},",(0,i.kt)("br",null),"...",(0,i.kt)("br",null),"]")))),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);