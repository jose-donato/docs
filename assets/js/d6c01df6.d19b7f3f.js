"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i="plot",o={unversionedId:"functions/portfolio/po/plot",id:"functions/portfolio/po/plot",title:"plot",description:"portfoliooptimizationoptimizerview.additionalplots",source:"@site/sdk/functions/portfolio/po/plot.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/plot",permalink:"/docs/sdk/functions/portfolio/po/plot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nco",permalink:"/docs/sdk/functions/portfolio/po/nco"},next:{title:"property",permalink:"/docs/sdk/functions/portfolio/po/property"}},p={},u=[{value:"portfolio_optimization_optimizer_view.additional_plots",id:"portfolio_optimization_optimizer_viewadditional_plots",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plot"},"plot"),(0,r.kt)("h2",{id:"portfolio_optimization_optimizer_viewadditional_plots"},"portfolio_optimization_optimizer_view.additional_plots"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_stars_history(repo: str):\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L3740"},"Source Code")),(0,r.kt)("p",null,"Description: Plot additional charts"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weights"),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Dict of portfolio weights"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"DataFrame of stock returns"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title_opt"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Title to be used on the pie chart"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'D' for daily returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'W' for weekly returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'M' for monthly returns. | value | True |\n| risk_measure | str | The risk measure used to optimize the portfolio. If model is 'NCO',\nthe risk measures available depends on the objective function.\nThe default is 'MV'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MV': Variance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MAD': Mean Absolute Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MSV': Semi Standard Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'FLPM': First Lower Partial Moment (Omega Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'SLPM': Second Lower Partial Moment (Sortino Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'VaR': Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVaR': Conditional Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'TG': Tail Gini.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EVaR': Entropic Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'WR': Worst Realization (Minimax).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'RG': Range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVRG': CVaR range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'TGRG': Tail Gini range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD': Average Drawdown of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'DaR': Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI': Ulcer Index of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD_Rel': Average Drawdown of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'DaR_Rel': Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI_Rel': Ulcer Index of compounded cumulative returns. | is | True |\n| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns.\nUsed for 'FLPM' and 'SLPM'. The default is 0. | 0 | True |\n| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.\nThe default is 0.05. | 0.05 | True |\n| a_sim | float | Number of CVaRs used to approximate Tail Gini of losses. The default is 100. | 100 | True |\n| beta | float | Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.\nThe default is None. | None | True |\n| b_sim | float | Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.\nThe default is None. | None | True |\n| pie | bool | Display a pie chart of values, by default False | False | True |\n| hist | bool | Display a histogram with risk measures, by default False | False | True |\n| dd | bool | Display a drawdown chart with risk measures, by default False | False | True |\n| rc-chart | float | Display a risk contribution chart for assets, by default False | False | True |\n| heat | float | Display a heatmap of correlation matrix with dendrogram, by default False | False | True |\n| external_axes | Optional[List","[plt.Axes]","] | Optional axes to plot data on | None | False |"))),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"examples"},"Examples"))}m.isMDXComponent=!0}}]);