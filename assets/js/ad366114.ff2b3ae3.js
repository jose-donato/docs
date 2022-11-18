"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={title:"cnews",description:"OpenBB Terminal Function"},o="cnews",c={unversionedId:"features/stocks/discovery/cnews",id:"features/stocks/discovery/cnews",title:"cnews",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/discovery/cnews.md",sourceDirName:"features/stocks/discovery",slug:"/features/stocks/discovery/cnews",permalink:"/terminal/features/stocks/discovery/cnews",draft:!1,tags:[],version:"current",frontMatter:{title:"cnews",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"asc",permalink:"/terminal/features/stocks/discovery/asc"},next:{title:"divcal",permalink:"/terminal/features/stocks/discovery/divcal"}},i={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cnews"},"cnews"),(0,r.kt)("p",null,"Customized news. ","[Source: Seeking Alpha]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"usage: cnews [-t {top-news,on-the-move,market-pulse,notable-calls,buybacks,commodities,crypto,issuance,global,guidance,ipos,spacs,politics,m-a,consumer,energy,financials,healthcare,mlps,reits,technology}] [-l LIMIT]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_type"),(0,r.kt)("td",{parentName:"tr",align:null},"number of news to display"),(0,r.kt)("td",{parentName:"tr",align:null},"Top-News"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"top-news, on-the-move, market-pulse, notable-calls, buybacks, commodities, crypto, issuance, global, guidance, ipos, spacs, politics, m-a, consumer, energy, financials, healthcare, mlps, reits, technology")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"limit of news to display"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 03:52 (\ud83e\udd8b) /stocks/disc/ $ cnews\n2022-02-15 19:04:21 - 3800509 - ViacomCBS earnings call: A flood of content feeding transformation to Paramount\nhttps://seekingalpha.com/news/3800509-viacomcbs-earnings-call-a-flood-of-content-feeding-transformation-to-paramount\n\n2022-02-15 16:26:46 - 3800415 - ViacomCBS rebranding company as Paramount Global\nhttps://seekingalpha.com/news/3800415-viacomcbs-rebranding-company-as-paramount-global\n\n2022-02-15 16:25:33 - 3800411 - Airbnb stock soars after guidance comes in strong\nhttps://seekingalpha.com/news/3800411-airbnb-stock-soars-after-guidance-comes-in-strong\n\n2022-02-15 16:25:05 - 3800410 - ViacomCBS rebranding company as Paramount Global\nhttps://seekingalpha.com/news/3800410-viacomcbs-rebranding-company-as-paramount-global\n\n2022-02-15 16:14:45 - 3800380 - ViacomCBS dips as profits dip despite revenue beat, streaming gains\nhttps://seekingalpha.com/news/3800380-viacomcbs-dips-as-profits-dip-despite-revenue-beat-streaming-gains\n\n2022-02-15 16:14:20 - 3800378 - Wynn Resorts trades lower after earnings, Encore Boston sale\nhttps://seekingalpha.com/news/3800378-wynn-resorts-trades-lower-after-earnings-encore-boston-sale\n\n2022 Feb 16, 03:52 (\ud83e\udd8b) /stocks/disc/ $ cnews -t buybacks\n2022-02-15 16:24:36 - 3800409 - DHI launches new $15M in stock repurchase program\nhttps://seekingalpha.com/news/3800409-dhi-launches-new-15m-in-stock-repurchase-program\n\n2022-02-15 16:20:21 - 3800395 - Upstart stock soars after Q4 earnings beat, strong guidance, stock buyback\nhttps://seekingalpha.com/news/3800395-upstart-stock-soars-after-q4-earnings-beat-strong-guidance-stock-buyback\n\n2022-02-15 16:17:07 - 3800387 - Upstart announces $400M share repurchase program\nhttps://seekingalpha.com/news/3800387-upstart-announces-400m-share-repurchase-program\n\n2022-02-15 08:04:55 - 3800026 - GCM Grosvenor reports Q4 results, increases stock repurchase plan by $20M\nhttps://seekingalpha.com/news/3800026-gcm-grosvenor-reports-q4-results-increases-stock-repurchase-plan-by-20m\n\n2022-02-15 08:04:08 - 3800020 - Middlefield Banc declares $0.17 dividend; expands stock buyback plan\nhttps://seekingalpha.com/news/3800020-middlefield-banc-corp-declares-0_17-dividend\n\n2022-02-15 07:26:40 - 3799989 - LGI Homes expands stock repurchase program by $200M\nhttps://seekingalpha.com/news/3799989-lgi-homes-expands-stock-repurchase-program-by-200m\n")))}m.isMDXComponent=!0}}]);