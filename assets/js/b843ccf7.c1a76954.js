"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"spac",description:"OpenBB Terminal Function"},s="Behavioural Analysis",l={unversionedId:"features/stocks/ba/spac",id:"features/stocks/ba/spac",title:"spac",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/ba/spac.md",sourceDirName:"features/stocks/ba",slug:"/features/stocks/ba/spac",permalink:"/terminal/features/stocks/ba/spac",draft:!1,tags:[],version:"current",frontMatter:{title:"spac",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"snews",permalink:"/terminal/features/stocks/ba/snews"},next:{title:"spacc",permalink:"/terminal/features/stocks/ba/spacc"}},i={},c=[{value:"spac",id:"spac",level:2},{value:"Description",id:"description",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"behavioural-analysis"},"Behavioural Analysis"),(0,a.kt)("h2",{id:"spac"},"spac"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Show other users SPACs announcement. ","[Source: Reddit]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: spac [-l N_LIMIT]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_limit"),(0,a.kt)("td",{parentName:"tr",align:null},"limit of posts with SPACs retrieved."),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:42 (\ud83e\udd8b) /stocks/ba/ $ spac\n2022-02-15 22:31:56 - 2020 vs 2021\nhttps://old.reddit.com/r/wallstreetbets/comments/stfcdu/2020_vs_2021/\n\n2022-02-15 20:05:35 - Calls on the \u201cW\u201d this week should print\u2026Wynn and Walmart calls baby..\nhttps://old.reddit.com/r/wallstreetbets/comments/stbz5h/calls_on_the_w_this_week_should_printwynn_and/\n\n2022-02-13 18:09:23 - APEX Clearing, Peak 6, a power couple, poker and a failed SPAC.\nhttps://old.reddit.com/r/Superstonk/comments/srovzk/apex_clearing_peak_6_a_power_couple_poker_and_a/\n\n2022-02-11 19:30:21 - SPAC founders DO get 20% of hundreds of millions in stock for their 25k investment. And the par value for shares is so low, some fuckery can be done!\nhttps://old.reddit.com/r/Superstonk/comments/sq7hcz/spac_founders_do_get_20_of_hundreds_of_millions/\n\n2022-02-11 15:16:40 - In Q4 Citadel Advisors LLC bought 6.39% of FTCV - the SPAC that eToro will merge with in order to go public.\nhttps://old.reddit.com/r/Superstonk/comments/sq1qv8/in_q4_citadel_advisors_llc_bought_639_of_ftcv_the/\n\nThe following stock tickers have been mentioned more than once across the previous SPACs:\n3 GME, 2 POST, 2 FTCV\n")))}u.isMDXComponent=!0}}]);