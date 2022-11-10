"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,c={unversionedId:"features/common/ba/watchlist/watchlist",id:"features/common/ba/watchlist/watchlist",title:"watchlist",description:"Searches Reddit for users' watchlists.",source:"@site/terminal/features/common/ba/watchlist/watchlist.md",sourceDirName:"features/common/ba/watchlist",slug:"/features/common/ba/watchlist/",permalink:"/docs/terminal/features/common/ba/watchlist/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/common/ba/watchlist/watchlist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trending",permalink:"/docs/terminal/features/common/ba/trending/"},next:{title:"wsb",permalink:"/docs/terminal/features/common/ba/wsb/"}},i={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: watchlist [-l N_LIMIT] [-h]\n")),(0,o.kt)("p",null,"Searches ",(0,o.kt)("a",{parentName:"p",href:"https://reddit.com"},"Reddit")," for users' watchlists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -l N_LIMIT, --limit N_LIMIT\n                        limit of posts with watchlists retrieved. (default: 5)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Feb 16, 10:52 (\u2728) /stocks/ba/ $ watchlist\n2022-02-16 14:16:31 - Morning Update for Wednesday, 2/16/22\nhttps://old.reddit.com/r/StockMarket/comments/stwy68/morning_update_for_wednesday_21622/\n\n2022-02-15 08:18:07 - Don't let family, friends, etc. influence you that you cannot make it + some general stock advice.\nhttps://old.reddit.com/r/Daytrading/comments/ssy2sw/dont_let_family_friends_etc_influence_you_that/\n\n2022-02-14 11:49:01 - Let's investigate stocks in Europe, Euronext ($ENX.PA) write up.\nhttps://old.reddit.com/r/stocks/comments/ss8sxb/lets_investigate_stocks_in_europe_euronext_enxpa/\n\n2022-02-13 21:46:46 - Looking for a platform that displays (or screens by) basic financial data with a good UI.\nhttps://old.reddit.com/r/stocks/comments/srtwxi/looking_for_a_platform_that_displays_or_screens/\n\n2022-02-11 17:31:13 - Clear Blue Technologies $CBLU.V $CBUTF QUICK LOOK, watchlist + portfolio addition \ud83d\udc40\ud83d\udc40 \ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbb\nhttps://old.reddit.com/r/RobinHoodPennyStocks/comments/sq4t5o/clear_blue_technologies_cbluv_cbutf_quick_look/\n")))}p.isMDXComponent=!0}}]);