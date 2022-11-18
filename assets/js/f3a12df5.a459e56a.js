"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={title:"spacc",description:"OpenBB Terminal Function"},l="spacc",o={unversionedId:"features/stocks/behavioural analysis/spacc",id:"features/stocks/behavioural analysis/spacc",title:"spacc",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/behavioural analysis/spacc.md",sourceDirName:"features/stocks/behavioural analysis",slug:"/features/stocks/behavioural analysis/spacc",permalink:"/terminal/features/stocks/behavioural analysis/spacc",draft:!1,tags:[],version:"current",frontMatter:{title:"spacc",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"spac",permalink:"/terminal/features/stocks/behavioural analysis/spac"},next:{title:"stalker",permalink:"/terminal/features/stocks/behavioural analysis/stalker"}},i={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spacc"},"spacc"),(0,a.kt)("p",null,"Print other users SPACs announcement under subreddit 'SPACs'. ","[Source: Reddit]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: spacc [-l N_LIMIT] [-p]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_limit"),(0,a.kt)("td",{parentName:"tr",align:null},"limit of posts with SPACs retrieved"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"b_popular"),(0,a.kt)("td",{parentName:"tr",align:null},"popular flag, if true the posts retrieved are based on score rather than time"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:43 (\ud83e\udd8b) /stocks/ba/ $ spacc\n2022-02-16 11:35:01 - I scraped r/SPACs for the top ticker mentions in the last 24H. Here are the results (Wednesday February 16, 2022)\nhttps://old.reddit.com/r/SPACs/comments/sttsnl/i_scraped_rspacs_for_the_top_ticker_mentions_in/\n\n2022-02-16 09:26:19 - PPGH Gogoro confirms that it is expected to list overseas in the first quarter of this year\nhttps://old.reddit.com/r/SPACs/comments/strs9m/ppgh_gogoro_confirms_that_it_is_expected_to_list/\n\n2022-02-16 08:00:16 - Announcements x Daily Discussion for Wednesday, February 16, 2022\nhttps://old.reddit.com/r/SPACs/comments/stqhci/announcements_x_daily_discussion_for_wednesday/\n\n2022-02-15 15:10:40 - Did IBKR resolve my SPAC redemptions wrongly?\nhttps://old.reddit.com/r/SPACs/comments/st52xb/did_ibkr_resolve_my_spac_redemptions_wrongly/\n\nThe following stock tickers have been mentioned more than once across the previous SPACs:\n8 CCAC, 6 IBKR, 3 CLBT, 3 SLDP, 2 VIAC, 2 CND\n")))}u.isMDXComponent=!0}}]);