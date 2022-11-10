"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20948],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=o.createContext({}),s=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),f=s(r),m=n,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||a;return r?o.createElement(d,l(l({ref:e},u),{},{components:r})):o.createElement(d,l({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78359:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},l=void 0,i={unversionedId:"features/portfolio/rsortino",id:"features/portfolio/rsortino",title:"rsortino",description:".. role:: python(code)",source:"@site/terminal/features/portfolio/rsortino.md",sourceDirName:"features/portfolio",slug:"/features/portfolio/rsortino",permalink:"/terminal/features/portfolio/rsortino",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/rsortino.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rsharpe",permalink:"/terminal/features/portfolio/rsharpe"},next:{title:"rsquare",permalink:"/terminal/features/portfolio/rsquare"}},p={},s=[],u={toc:s};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"To obtain charts, make sure to add :python:",(0,n.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nportfolio.rsortino(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nrisk_free_rate: float = 0,\nwindow: str = '1y',\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nGet rolling sortino\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  portfolio : PortfolioModel\nPortfolio object\nwindow: str\ninterval for window to consider\nPossible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y\nrisk_free_rate: float\nValue to use for risk free rate in sharpe/other calculations\nchart: bool\nFlag to display chart"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  pd.DataFrame\nRolling sortino ratio DataFrame"))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nportfolio.rsortino(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nrisk_free_rate: float = 0,\nwindow: str = '1y',\nexport: str = '',\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nDisplay rolling sortino\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  portfolio : PortfolioModel\nPortfolio object\nrisk_free_rate: float\nValue to use for risk free rate in sharpe/other calculations\nwindow: str\ninterval for window to consider\nexport: str\nExport to file\nexternal_axes: Optional[List","[plt.Axes]","]\nOptional axes to display plot on\nchart: bool\nFlag to display chart"))))}c.isMDXComponent=!0}}]);