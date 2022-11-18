"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"watchlist",description:"OpenBB Terminal Function"},o="watchlist",i={unversionedId:"features/stocks/behavioural analysis/watchlist",id:"features/stocks/behavioural analysis/watchlist",title:"watchlist",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/behavioural analysis/watchlist.md",sourceDirName:"features/stocks/behavioural analysis",slug:"/features/stocks/behavioural analysis/watchlist",permalink:"/terminal/features/stocks/behavioural analysis/watchlist",draft:!1,tags:[],version:"current",frontMatter:{title:"watchlist",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"trending",permalink:"/terminal/features/stocks/behavioural analysis/trending"},next:{title:"wsb",permalink:"/terminal/features/stocks/behavioural analysis/wsb"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"watchlist"},"watchlist"),(0,a.kt)("p",null,"Print other users watchlist. ","[Source: Reddit]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: watchlist [-l LIMIT]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"limit of posts with watch lists retrieved."),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:52 (\ud83e\udd8b) /stocks/ba/ $ watchlist\n2022-02-16 14:16:31 - Morning Update for Wednesday, 2/16/22\nhttps://old.reddit.com/r/StockMarket/comments/stwy68/morning_update_for_wednesday_21622/\n\n2022-02-15 08:18:07 - Don't let family, friends, etc. influence you that you cannot make it + some general stock advice.\nhttps://old.reddit.com/r/Daytrading/comments/ssy2sw/dont_let_family_friends_etc_influence_you_that/\n\n2022-02-14 11:49:01 - Let's investigate stocks in Europe, Euronext ($ENX.PA) write up.\nhttps://old.reddit.com/r/stocks/comments/ss8sxb/lets_investigate_stocks_in_europe_euronext_enxpa/\n\n2022-02-13 21:46:46 - Looking for a platform that displays (or screens by) basic financial data with a good UI.\nhttps://old.reddit.com/r/stocks/comments/srtwxi/looking_for_a_platform_that_displays_or_screens/\n\n2022-02-11 17:31:13 - Clear Blue Technologies $CBLU.V $CBUTF QUICK LOOK, watchlist + portfolio addition \ud83d\udc40\ud83d\udc40 \ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbb\nhttps://old.reddit.com/r/RobinHoodPennyStocks/comments/sq4t5o/clear_blue_technologies_cbluv_cbutf_quick_look/\n")))}p.isMDXComponent=!0}}]);