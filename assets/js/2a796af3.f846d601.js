"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"ratios",description:"OpenBB Terminal Function"},o="ratios",l={unversionedId:"features/stocks/fundamental analysis/ratios",id:"features/stocks/fundamental analysis/ratios",title:"ratios",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/fundamental analysis/ratios.md",sourceDirName:"features/stocks/fundamental analysis",slug:"/features/stocks/fundamental analysis/ratios",permalink:"/terminal/features/stocks/fundamental analysis/ratios",draft:!1,tags:[],version:"current",frontMatter:{title:"ratios",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"quote",permalink:"/terminal/features/stocks/fundamental analysis/quote"},next:{title:"score",permalink:"/terminal/features/stocks/fundamental analysis/score"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ratios"},"ratios"),(0,n.kt)("p",null,"Prints in-depth ratios of a company over time. This can be either quarterly or annually. This contains, among other things, Price-to-Book Ratio, Payout Ratio and Operating Cycle. The following fields are expected: Asset turnover, Capital expenditure coverage ratio, Cash conversion cycle, Cash flow coverage ratios, Cash flow to debt ratio, Cash per share, Cash ratio, Company equity multiplier, Current ratio, Days of inventory outstanding, Days of payables outstanding, Days of sales outstanding, Debt equity ratio, Debt ratio, Dividend paid and capex coverage ratio, Dividend payout ratio, Dividend yield, Ebit per revenue, Ebt per ebit, Effective tax rate, Enterprise value multiple, Fixed asset turnover, Free cash flow operating cash flow ratio, Free cash flow per share, Gross profit margin, Inventory turnover, Long term debt to capitalization, Net income per EBT, Net profit margin, Operating cash flow per share, Operating cash flow sales ratio, Operating cycle, Operating profit margin, Payables turnover, Payout ratio, Pretax profit margin, Price book value ratio, Price cash flow ratio, Price earnings ratio, Price earnings to growth ratio, Price fair value, Price sales ratio, Price to book ratio, Price to free cash flows ratio, Price to operating cash flows ratio, Price to sales ratio, Quick ratio, Receivables turnover, Return on assets, Return on capital employed, Return on equity, Short term coverage ratios, and Total debt to capitalization. ","[Source: Financial Modeling Prep]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"usage: ratios [-l LIMIT] [-q]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit of latest years/quarters."),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"b_quarter"),(0,n.kt)("td",{parentName:"tr",align:null},"Quarter fundamental data flag."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))))}p.isMDXComponent=!0}}]);