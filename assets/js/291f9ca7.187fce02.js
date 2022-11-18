"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"getdd",description:"OpenBB Terminal Function"},o="getdd",s={unversionedId:"features/stocks/behavioural analysis/getdd",id:"features/stocks/behavioural analysis/getdd",title:"getdd",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/behavioural analysis/getdd.md",sourceDirName:"features/stocks/behavioural analysis",slug:"/features/stocks/behavioural analysis/getdd",permalink:"/terminal/features/stocks/behavioural analysis/getdd",draft:!1,tags:[],version:"current",frontMatter:{title:"getdd",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"bullbear",permalink:"/terminal/features/stocks/behavioural analysis/bullbear"},next:{title:"headlines",permalink:"/terminal/features/stocks/behavioural analysis/headlines"}},i={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getdd"},"getdd"),(0,a.kt)("p",null,"Print top stock's due diligence from other users. ","[Source: Reddit]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: getdd [-l LIMIT] [-d DAYS] [-a]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"limit of posts to retrieve."),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"days"),(0,a.kt)("td",{parentName:"tr",align:null},"number of prior days to look for."),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"all"),(0,a.kt)("td",{parentName:"tr",align:null},"search through all flairs (apart from Yolo and Meme), otherwise we focus on specific flairs: DD, technical analysis, Catalyst, News, Advice, Chart"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:18 (\ud83e\udd8b) /stocks/ba/ $ getdd -d 50\n2022-02-15 17:51:11 - $ATVI free money even if MSFT deal falls through.\nhttps://old.reddit.com/r/wallstreetbets/comments/st8s1i/atvi_free_money_even_if_msft_deal_falls_through/\n\n2022-02-10 05:10:31 - PTON: The safest investment you can make\nhttps://old.reddit.com/r/stocks/comments/soycgc/pton_the_safest_investment_you_can_make/\n\n2022-02-09 01:47:49 - Why only retards are selling the (near) bottom on $FB and are about to get metacucked \ud83d\ude4a\nhttps://old.reddit.com/r/wallstreetbets/comments/so19al/why_only_retards_are_selling_the_near_bottom_on/)\n\n2022-02-08 02:53:43 - If You Cannot Beat Them, Join Them - Congress Trading & Retail Traders\nhttps://old.reddit.com/r/wallstreetbets/comments/sn90qs/if_you_cannot_beat_them_join_them_congress/\n\n2022-02-03 20:01:06 - Thoughts on only buying large market cap stocks (Top 100, 100 billion market cap+, and significant index weighting)?\nhttps://old.reddit.com/r/stocks/comments/sjsqhu/thoughts_on_only_buying_large_market_cap_stocks/\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);