"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88173],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),m=i,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||n;return o?r.createElement(d,a(a({ref:t},c),{},{components:o})):r.createElement(d,a({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<n;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},85241:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=o(87462),i=(o(67294),o(3905));const n={},a=void 0,s={unversionedId:"features/common/qa/qqplot/qqplot",id:"features/common/qa/qqplot/qqplot",title:"qqplot",description:"Display Q-Q plot vs normal quantiles. See the Wiki page on this topic here//en.wikipedia.org/wiki/Q\u2013Q_plot",source:"@site/content/terminal/features/common/qa/qqplot/qqplot.md",sourceDirName:"features/common/qa/qqplot",slug:"/features/common/qa/qqplot/",permalink:"/docs/terminal/features/common/qa/qqplot/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/qa/qqplot/qqplot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pick",permalink:"/docs/terminal/features/common/qa/pick/"},next:{title:"quantile",permalink:"/docs/terminal/features/common/qa/quantile/"}},l={},p=[],c={toc:p};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"usage: qqplot [-h]\n")),(0,i.kt)("p",null,"Display Q-Q plot vs normal quantiles. See the Wiki page on this topic here: ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Q%E2%80%93Q_plot"},"https://en.wikipedia.org/wiki/Q\u2013Q_plot")),(0,i.kt)("p",null,"A Q\u2013Q plot is used to compare the shapes of distributions, providing a graphical view of how properties such as location, scale, and skewness are similar or different in the two distributions. Q\u2013Q plots can be used to compare collections of data, or theoretical distributions. The use of Q\u2013Q plots to compare two samples of data can be viewed as a non-parametric approach to comparing their underlying distributions. A Q\u2013Q plot is generally a more powerful approach to do this than the common technique of comparing histograms of the two samples, but requires more skill to interpret. Q\u2013Q plots are commonly used to compare a data set to a theoretical model."),(0,i.kt)("p",null,'The points plotted in a Q\u2013Q plot are always non-decreasing when viewed from left to right. If the two distributions being compared are identical, the Q\u2013Q plot follows the 45\xb0 line y = x. If the two distributions agree after linearly transforming the values in one of the distributions, then the Q\u2013Q plot follows some line, but not necessarily the line y = x. If the general trend of the Q\u2013Q plot is flatter than the line y = x, the distribution plotted on the horizontal axis is more dispersed than the distribution plotted on the vertical axis. Conversely, if the general trend of the Q\u2013Q plot is steeper than the line y = x, the distribution plotted on the vertical axis is more dispersed than the distribution plotted on the horizontal axis. Q\u2013Q plots are often arced, or "S" shaped, indicating that one of the distributions is more skewed than the other, or that one of the distributions has heavier tails than the other.'),(0,i.kt)("p",null,"Although a Q\u2013Q plot is based on quantiles, in a standard Q\u2013Q plot it is not possible to determine which point in the Q\u2013Q plot determines a given quantile. For example, it is not possible to determine the median of either of the two distributions being compared by inspecting the Q\u2013Q plot. Some Q\u2013Q plots indicate the deciles to make determinations such as this possible."),(0,i.kt)("p",null,'The intercept and slope of a linear regression between the quantiles gives a measure of the relative location and relative scale of the samples. If the median of the distribution plotted on the horizontal axis is 0, the intercept of a regression line is a measure of location, and the slope is a measure of scale. The distance between medians is another measure of relative location reflected in a Q\u2013Q plot. The "probability plot correlation coefficient" (PPCC plot) is the correlation coefficient between the paired sample quantiles. The closer the correlation coefficient is to one, the closer the distributions are to being shifted, scaled versions of each other. For distributions with a single shape parameter, the probability plot correlation coefficient plot provides a method for estimating the shape parameter \u2013 one simply computes the correlation coefficient for different values of the shape parameter, and uses the one with the best fit, just as if one were comparing distributions of different types.'),(0,i.kt)("p",null,"Another common use of Q\u2013Q plots is to compare the distribution of a sample to a theoretical distribution, such as the standard normal distribution N(0,1), as in a normal probability plot. As in the case when comparing two samples of data, one orders the data (formally, computes the order statistics), then plots them against certain quantiles of the theoretical distribution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help  show this help message (default: False)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154307858-acd1a7d0-bb40-4639-a69c-c316749a90ab.png",alt:"qqplot"})))}h.isMDXComponent=!0}}]);