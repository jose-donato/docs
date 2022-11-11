"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"features/stocks/options/load/load",id:"features/stocks/options/load/load",title:"load",description:"Load a ticker into the Options menu",source:"@site/terminal/features/stocks/options/load/load.md",sourceDirName:"features/stocks/options/load",slug:"/features/stocks/options/load/",permalink:"/docs/terminal/features/stocks/options/load/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/options/load/load.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"info",permalink:"/docs/terminal/features/stocks/options/info/"},next:{title:"oi",permalink:"/docs/terminal/features/stocks/options/oi/"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"usage: load [-t TICKER] [--source {tradier,yf}] [-h]\n")),(0,r.kt)("p",null,"Load a ticker into the Options menu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"optional arguments:\n  -t TICKER, --ticker TICKER\n                        Stock ticker (default: None)\n  --source  {tradier ,yf}    Tradier or Yahoo Finance (default: tradier)\n                        Source to get option expirations from (default: None)\n  -h, --help            show this help message (default: False)\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 Feb 16, 09:13 (\u2728) /stocks/options/ $ load TSLA\n\n2022 Feb 16, 09:13 (\u2728) /stocks/options/ $ ?\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Stocks - Options \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502     unu           show unusual options activity [Fdscanner.com]                                                                                                                                                                                                              \u2502\n\u2502     calc          basic call/put PnL calculator                                                                                                                                                                                                                              \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502     load          load new ticker                                                                                                                                                                                                                                            \u2502\n\u2502     exp           see and set expiration dates                                                                                                                                                                                                                               \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502 Ticker: TSLA                                                                                                                                                                                                                                                                 \u2502\n\u2502 Expiry: None                                                                                                                                                                                                                                                                 \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502     pcr           display put call ratio for ticker [AlphaQuery.com]                                                                                                                                                                                                         \u2502\n\u2502     info          display option information (volatility, IV rank etc) [Barchart.com]                                                                                                                                                                                        \u2502\n\u2502     chains        display option chains with greeks [Tradier]                                                                                                                                                                                                                \u2502\n\u2502     oi            plot open interest [Tradier/YFinance]                                                                                                                                                                                                                      \u2502\n\u2502     vol           plot volume [Tradier/YFinance]                                                                                                                                                                                                                             \u2502\n\u2502     voi           plot volume and open interest [Tradier/YFinance]                                                                                                                                                                                                           \u2502\n\u2502     hist          plot option history [Tradier]                                                                                                                                                                                                                              \u2502\n\u2502     vsurf         show 3D volatility surface [Yfinance]                                                                                                                                                                                                                      \u2502\n\u2502     grhist        plot option greek history [Syncretism.io]                                                                                                                                                                                                                  \u2502\n\u2502     plot          plot variables provided by the user [Yfinance]                                                                                                                                                                                                             \u2502\n\u2502     parity        shows whether options are above or below expected price [Yfinance]                                                                                                                                                                                         \u2502\n\u2502     binom         shows the value of an option using binomial options pricing [Yfinance]                                                                                                                                                                                     \u2502\n\u2502     greeks        shows the greeks for a given option [Yfinance]                                                                                                                                                                                                             \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502 >   screen        screens tickers based on preset [Syncretism.io]                                                                                                                                                                                                            \u2502\n\u2502 >   payoff        shows payoff diagram for a selection of options [Yfinance]                                                                                                                                                                                                 \u2502\n\u2502 >   pricing       shows options pricing and risk neutral valuation [Yfinance]                                                                                                                                                                                                \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Gamestonk Terminal \u2500\u256f\n")))}u.isMDXComponent=!0}}]);