"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={},o=void 0,l={unversionedId:"features/stocks/ba/redditsent",id:"features/stocks/ba/redditsent",title:"redditsent",description:".. role:: python(code)",source:"@site/terminal/features/stocks/ba/redditsent.md",sourceDirName:"features/stocks/ba",slug:"/features/stocks/ba/redditsent",permalink:"/terminal/features/stocks/ba/redditsent",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/ba/redditsent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"queries",permalink:"/terminal/features/stocks/ba/queries"},next:{title:"regions",permalink:"/terminal/features/stocks/ba/regions"}},i={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.ba.redditsent(\nsymbol: str,\nlimit: int = 100,\nsortby: str = 'relevance',\ntime_frame: str = 'week',\nfull_search: bool = True,\nsubreddits: str = 'all',\nchart: bool = False,\n) -> Tuple","[pandas.core.frame.DataFrame, list, float]","\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nFinds posts related to a specific search term in Reddit\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},'  symbol: str\nTicker symbol to search for\nlimit: int\nNumber of posts to get per subreddit\nsortby: str\nSearch type\nPossibilities: "relevance", "hot", "top", "new", or "comments"\ntime_frame: str\nRelative time of post\nPossibilities: "hour", "day", "week", "month", "year", "all"\nfull_search: bool\nEnable comprehensive search for ticker\nsubreddits: str\nComma-separated list of subreddits\nchart: bool\nFlag to display chart'))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  tuple","[pd.DataFrame, list, float]",":\nDataframe of submissions related to the search term,\nList of polarity scores,\nAverage polarity score"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.ba.redditsent(\nsymbol: str,\nsortby: str = 'relevance',\nlimit: int = 100,\ngraphic: bool = False,\ntime_frame: str = 'week',\nfull_search: bool = True,\nsubreddits: str = 'all',\ndisplay: bool = False,\nexport: str = '',\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nDetermine Reddit sentiment about a search term\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  symbol: str\nThe ticker symbol being search for in Reddit\nsortby: str\nType of search\nlimit: str\nNumber of posts to get at most\ngraphic: bool\nDisplays box and whisker plot\ntime_frame: str\nTime frame for search\nfull_search: bool\nEnable comprehensive search for ticker\nsubreddits: str\nComma-separated list of subreddits\ndisplay: bool\nEnable printing of raw sentiment values for each post\nexport: str\nFormat to export data\nexternal_axes: Optional[List","[plt.Axes]","]\nIf supplied, expect 1 external axis\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);