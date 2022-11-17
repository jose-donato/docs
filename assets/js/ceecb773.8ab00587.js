"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,_=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(_,o(o({ref:t},u),{},{components:r})):n.createElement(_,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"ownership",description:"OpenBB Terminal Function"},o="Screener",s={unversionedId:"features/stocks/screener/ownership",id:"features/stocks/screener/ownership",title:"ownership",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/screener/ownership.md",sourceDirName:"features/stocks/screener",slug:"/features/stocks/screener/ownership",permalink:"/terminal/features/stocks/screener/ownership",draft:!1,tags:[],version:"current",frontMatter:{title:"ownership",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/terminal/features/stocks/screener/overview"},next:{title:"performance",permalink:"/terminal/features/stocks/screener/performance"}},i={},p=[{value:"ownership",id:"ownership",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"screener"},"Screener"),(0,a.kt)("h2",{id:"ownership"},"ownership"),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("p",null,"Prints ownership data of the companies that meet the pre-set filtering."),(0,a.kt)("h3",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: ownership [-p Desired preset.] [-l LIMIT] [-r] [-s SORT [SORT ...]]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"preset"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,a.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"5pct_above_low,  analyst_strong_buy,  break_out_stocks,  buffett_like,  bull_runs_over_10pct,  channel_up_and_low_debt_and_sma_50and200,  cheap_bottom_dividend,  cheap_dividend,  cheap_oversold,  continued_momentum_scan,  death_cross,  golden_cross,  golden_cross_penny,  growth_stocks,  heavy_inst_ins,  high_vol_and_low_debt,  modified_dreman,  modified_neff,  news_scanner,  oversold,  oversold_under_3dol,  oversold_under_5dol,  potential_reversals,  recent_growth_and_support,  rosenwald,  rosenwald_gtfo,  sexy_year,  short_squeeze_scan,  simplistic_momentum_scanner_under_7dol,  stocks_strong_support_levels,  template,  top_performers_all,  top_performers_healthcare,  top_performers_tech,  undervalue,  under_15dol_stocks,  unusual_volume,  value_stocks,  weak_support_and_top_performers,  top_gainers,  top_losers,  new_high,  new_low,  most_volatile,  most_active,  overbought,  downgrades,  upgrades,  earnings_before,  earnings_after,  recent_insider_buying,  recent_insider_selling,  major_news,  horizontal_sr,  tl_resistance,  tl_support,  wedge_up,  wedge_down,  wedge,  triangle_ascending,  triangle_descending,  channel_up,  channel_down,  channel,  double_top,  double_bottom,  multiple_top,  multiple_bottom,  head_shoulders,  head_shoulders_inverse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))))}c.isMDXComponent=!0}}]);