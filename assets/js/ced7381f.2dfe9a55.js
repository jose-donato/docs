"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,i={unversionedId:"features/economy/bigmac/bigmac",id:"features/economy/bigmac/bigmac",title:"bigmac",description:"The notion that in the long run exchange rates should move towards the rate that would equalise the prices of an identical basket of goods and services (in this case, a burger) in any two countries. Burgernomics was never intended as a precise gauge of currency misalignment, merely a tool to make exchange-rate theory more digestible. Yet the Big Mac index has become a global standard, included in several economic textbooks and the subject of dozens of academic studies.",source:"@site/terminal/features/economy/bigmac/bigmac.md",sourceDirName:"features/economy/bigmac",slug:"/features/economy/bigmac/",permalink:"/docs/terminal/features/economy/bigmac/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/economy/bigmac/bigmac.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Economy",permalink:"/docs/terminal/features/economy/"},next:{title:"edebt",permalink:"/docs/terminal/features/economy/edebt/"}},s={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: bigmac [--codes] [-c COUNTRIES] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}] [--raw]\n")),(0,a.kt)("p",null,"The notion that in the long run exchange rates should move towards the rate that would equalise the prices of an identical basket of goods and services (in this case, a burger) in any two countries. Burgernomics was never intended as a precise gauge of currency misalignment, merely a tool to make exchange-rate theory more digestible. Yet the Big Mac index has become a global standard, included in several economic textbooks and the subject of dozens of academic studies."),(0,a.kt)("p",null,"Big Mac prices are from McDonald\u2019s directly and from reporting around the world; exchange rates are from Thomson Reuters; GDP and population data used to calculate the euro area averages are from Eurostat and GDP per person data are from the IMF World Economic Outlook reports."),(0,a.kt)("p",null,"The Big Mac PPP exchange rate between two countries is obtained by dividing the price of a Big Mac in one country (in its currency) by the price of a Big Mac in another country (in its currency)."),(0,a.kt)("p",null,"Source of the data can be found ",(0,a.kt)("a",{parentName:"p",href:"https://data.nasdaq.com/data/ECONOMIST-the-economist-big-mac-index"},"here")," and a list of country codes for this feature can be found ",(0,a.kt)("a",{parentName:"p",href:"https://static.quandl.com/ECONOMIST_Descriptions/economist_country_codes.csv"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  --codes               Flag to show all country codes (default: False)\n  -c COUNTRIES, --countries COUNTRIES\n                        Country codes to get data for. (default: USA)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n  --raw                 Flag to display raw data (default: False)\n")),(0,a.kt)("p",null,"Sample usage, which gets the index for 5 different countries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bigmac -c USA,EUR,MEX,CAN,RUS\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/158362967-8353fa50-2eb1-43b0-9cbb-bc3c3aec2e2a.png",alt:"bigmac"})))}d.isMDXComponent=!0}}]);