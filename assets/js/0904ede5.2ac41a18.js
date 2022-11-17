"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57924],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,o(o({ref:e},d),{},{components:a})):n.createElement(g,o({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44726:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Alternative",keywords:["alts"],excerpt:"Alternative Menus in the OpenBB Terminal"},o=void 0,l={unversionedId:"guides/guides/alternative",id:"guides/guides/alternative",title:"Alternative",description:"Investors utilize alternative data to analyze a company or investment that is not available through typical data sources (financial statements, SEC filings, management presentations, press releases, etc.). Traditional data sources do not provide investors with as accurate, timely, or granular insights and measurements into corporate performance as alternative data does. Increases in computing power and personal device usage have resulted in tremendous data production during the previous ten years. As a result, a slew of new businesses have sprung up to collect, clean, analyze, and interpret data in order to sell it as a product that might help investors make better decisions.",source:"@site/content/sdk/guides/guides/alternative.md",sourceDirName:"guides/guides",slug:"/guides/guides/alternative",permalink:"/sdk/guides/guides/alternative",draft:!1,tags:[],version:"current",frontMatter:{title:"Alternative",keywords:["alts"],excerpt:"Alternative Menus in the OpenBB Terminal"},sidebar:"tutorialSidebar",previous:{title:"View vs Models",permalink:"/sdk/guides/basics/view-vs-models"},next:{title:"Cryptocurrency",permalink:"/sdk/guides/guides/crypto"}},s={},p=[{value:"How to Use",id:"how-to-use",level:2},{value:"Covid",id:"covid",level:3},{value:"OSS",id:"oss",level:3},{value:"Examples - OSS",id:"examples---oss",level:2},{value:"alt.oss.top",id:"altosstop",level:3},{value:"alt.oss.summary",id:"altosssummary",level:3}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Investors utilize alternative data to analyze a company or investment that is not available through typical data sources (financial statements, SEC filings, management presentations, press releases, etc.). Traditional data sources do not provide investors with as accurate, timely, or granular insights and measurements into corporate performance as alternative data does. Increases in computing power and personal device usage have resulted in tremendous data production during the previous ten years. As a result, a slew of new businesses have sprung up to collect, clean, analyze, and interpret data in order to sell it as a product that might help investors make better decisions."),(0,r.kt)("p",null,"The Alternative module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb.alt")),(0,r.kt)("p",null,"A brief description below highlights the main Functions and Modules available in the ETF SDK"),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"\u200b\nThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n")),(0,r.kt)("p",null,"A brief description below highlights the main Functions and Modules available in the Alternative SDK"),(0,r.kt)("h3",{id:"covid"},"Covid"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.global_deaths"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"historical deaths for given country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.slopes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Load cases and find slope over period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.stat"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Show historical cases and deaths by country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.global_cases"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"historical cases for given country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.ov"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"overview historical cases and deaths by country")))),(0,r.kt)("h3",{id:"oss"},"OSS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.top"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Get top repositories")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.search"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Search repositories")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.history"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Display a repo star history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.ross"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Startups from ross index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.github_data"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Get repository stats")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.summary"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Get repository summary")))),(0,r.kt)("p",null,"Alteratively you can print the contents of the ETF SDK with:\n\u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.alt.covid)\nhelp(openbb.alt.oss)\n")),(0,r.kt)("h2",{id:"examples---oss"},"Examples - OSS"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use some of the OSS SDK commands you will need a GitHub API key - you can get one ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"here"))),(0,r.kt)("h3",{id:"altosstop"},"alt.oss.top"),(0,r.kt)("p",null,"\u200b\nThe alt.oss.top SDK command lets you display top repositories\n\u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"etf_list = pd.DataFrame.from_dict(openbb.alt.oss.top()).transpose()\ncategories = list(etf_list['category'].drop_duplicates())\ncategories = pd.DataFrame(categories[1::], columns = ['Type'])\n\u200b\ncategories.head(6)\n")),(0,r.kt)("h3",{id:"altosssummary"},"alt.oss.summary"),(0,r.kt)("p",null,"The alt.oss.summary SDK command lets you display top repositories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'summary = pd.DataFrame.from_dict(openbb.alt.oss.summary(repo="openbb-finance/openbbterminal"))\nprint(summary)\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"right"},"OpenBBTerminal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Owner"),(0,r.kt)("td",{parentName:"tr",align:"right"},"OpenBB-finance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2020-12-20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Last Update"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2022-11-17")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Topics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"artificial-intelligence, crypto, cryptocurrenc...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Stars"),(0,r.kt)("td",{parentName:"tr",align:"right"},"17643")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Forks"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1849")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Open Issues"),(0,r.kt)("td",{parentName:"tr",align:"right"},"152")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Language"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"License"),(0,r.kt)("td",{parentName:"tr",align:"right"},"MIT License")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Releases"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Last Release Downloads"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10201")))),(0,r.kt)("p",null,"\u200b"))}m.isMDXComponent=!0}}]);