"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={},i=void 0,l={unversionedId:"features/portfolio/po/plot",id:"features/portfolio/po/plot",title:"plot",description:".. role:: python(code)",source:"@site/sdk/features/portfolio/po/plot.md",sourceDirName:"features/portfolio/po",slug:"/features/portfolio/po/plot",permalink:"/sdk/features/portfolio/po/plot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nco",permalink:"/sdk/features/portfolio/po/nco"},next:{title:"property",permalink:"/sdk/features/portfolio/po/property"}},s={},u=[],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.plot(\nweights, data: pandas.core.frame.DataFrame,\ncategory: Dict = None,\ntitle_opt: str = '',\nfreq: str = 'D',\nrisk_measure: str = 'MV',\nrisk_free_rate: float = 0,\nalpha: float = 0.05,\na_sim: float = 100,\nbeta: float = None,\nb_sim: float = None,\npie: bool = False,\nhist: bool = False,\ndd: bool = False,\nrc_chart: bool = False,\nheat: bool = False,\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nPlot additional charts\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  weights: Dict\nDict of portfolio weights\ndata: pd.DataFrame\nDataFrame of stock returns\ntitle_opt: str\nTitle to be used on the pie chart\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_measure: str, optional\nThe risk measure used to optimize the portfolio. If model is 'NCO',\nthe risk measures available depends on the objective function.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Variance.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'VaR': Value at Risk.\n  - 'CVaR': Conditional Value at Risk.\n  - 'TG': Tail Gini.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization (Minimax).\n  - 'RG': Range of returns.\n  - 'CVRG': CVaR range of returns.\n  - 'TGRG': Tail Gini range of returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'DaR': Drawdown at Risk of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).\n  - 'ADD_Rel': Average Drawdown of compounded cumulative returns.\n  - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.\n  - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.\n  - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.\n  - 'UCI_Rel': Ulcer Index of compounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns.\nUsed for 'FLPM' and 'SLPM'. The default is 0.\nalpha: float, optional\nSignificance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.\nThe default is 0.05.\na_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of losses. The default is 100.\nbeta: float, optional\nSignificance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.\nThe default is None.\nb_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.\nThe default is None.\npie : bool, optional\nDisplay a pie chart of values, by default False\nhist : bool, optional\nDisplay a histogram with risk measures, by default False\ndd : bool, optional\nDisplay a drawdown chart with risk measures, by default False\nrc-chart : float, optional\nDisplay a risk contribution chart for assets, by default False\nheat : float, optional\nDisplay a heatmap of correlation matrix with dendrogram, by default False\nexternal_axes: Optional[List","[plt.Axes]","]\nOptional axes to plot data on\nchart: bool\nFlag to display chart"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.plot(\nweights, data: pandas.core.frame.DataFrame,\ncategory: Dict = None,\ntitle_opt: str = '',\nfreq: str = 'D',\nrisk_measure: str = 'MV',\nrisk_free_rate: float = 0,\nalpha: float = 0.05,\na_sim: float = 100,\nbeta: float = None,\nb_sim: float = None,\npie: bool = False,\nhist: bool = False,\ndd: bool = False,\nrc_chart: bool = False,\nheat: bool = False,\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nPlot additional charts\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  weights: Dict\nDict of portfolio weights\ndata: pd.DataFrame\nDataFrame of stock returns\ntitle_opt: str\nTitle to be used on the pie chart\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_measure: str, optional\nThe risk measure used to optimize the portfolio. If model is 'NCO',\nthe risk measures available depends on the objective function.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Variance.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'VaR': Value at Risk.\n  - 'CVaR': Conditional Value at Risk.\n  - 'TG': Tail Gini.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization (Minimax).\n  - 'RG': Range of returns.\n  - 'CVRG': CVaR range of returns.\n  - 'TGRG': Tail Gini range of returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'DaR': Drawdown at Risk of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).\n  - 'ADD_Rel': Average Drawdown of compounded cumulative returns.\n  - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.\n  - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.\n  - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.\n  - 'UCI_Rel': Ulcer Index of compounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns.\nUsed for 'FLPM' and 'SLPM'. The default is 0.\nalpha: float, optional\nSignificance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.\nThe default is 0.05.\na_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of losses. The default is 100.\nbeta: float, optional\nSignificance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.\nThe default is None.\nb_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.\nThe default is None.\npie : bool, optional\nDisplay a pie chart of values, by default False\nhist : bool, optional\nDisplay a histogram with risk measures, by default False\ndd : bool, optional\nDisplay a drawdown chart with risk measures, by default False\nrc-chart : float, optional\nDisplay a risk contribution chart for assets, by default False\nheat : float, optional\nDisplay a heatmap of correlation matrix with dendrogram, by default False\nexternal_axes: Optional[List","[plt.Axes]","]\nOptional axes to plot data on\nchart: bool\nFlag to display chart"))))}d.isMDXComponent=!0}}]);