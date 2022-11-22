"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Introduction to the Options Menu",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","voi","volatility","vsurf","chains","parity","binom","screen","pricing","hedge","pcr","info","hist","grhist","plot","parity"],date:"2022-06-07",type:"guides",status:"publish",excerpt:"This guide introduces the user to Options submenu, within the Stocks menu.",geekdocCollapseSection:!0},r=void 0,s={unversionedId:"guides/stocks/options",id:"guides/stocks/options",title:"Introduction to the Options Menu",description:"The Options menu provides the user with a comprehensive set of tools for analyzing equity options. This guide provides an overview of the menu and demonstrates commands in context. Using this menu correctly will require understanding terminology and math specific to the asset class. Wikipedia is a great resource for definitions and for learning about the mechanics of derivatives, read it here. These are complex, leveraged, financial instruments requiring specialized knoweledge and a different frame-of-mind than the approach of an equities long-only investor. Always conduct thorough due diligence.",source:"@site/content/terminal/guides/stocks/options.md",sourceDirName:"guides/stocks",slug:"/guides/stocks/options",permalink:"/terminal/guides/stocks/options",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction to the Options Menu",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","voi","volatility","vsurf","chains","parity","binom","screen","pricing","hedge","pcr","info","hist","grhist","plot","parity"],date:"2022-06-07",type:"guides",status:"publish",excerpt:"This guide introduces the user to Options submenu, within the Stocks menu.",geekdocCollapseSection:!0},sidebar:"tutorialSidebar",previous:{title:"Insider Trading",permalink:"/terminal/guides/stocks/ins"},next:{title:"Stock Screener",permalink:"/terminal/guides/stocks/screener"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Options menu provides the user with a comprehensive set of tools for analyzing equity options. This guide provides an overview of the menu and demonstrates commands in context. Using this menu correctly will require understanding terminology and math specific to the asset class. Wikipedia is a great resource for definitions and for learning about the mechanics of derivatives, read it ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Option_(finance)",target:"_blank"},"here"),". These are complex, leveraged, financial instruments requiring specialized knoweledge and a different frame-of-mind than the approach of an equities long-only investor. Always conduct thorough due diligence.",(0,a.kt)("br",null)),(0,a.kt)("h2",null,"Submenus Available"),(0,a.kt)("p",null,"At the bottom of the menu, and near the top, there are items prefaced with ",(0,a.kt)("inlineCode",{parentName:"p"},">"),". Like everywhere else in the OpenBB Terminal, this indicates the presence of a submenu.",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"screen")," is a dedicated options screener that uses ",(0,a.kt)("inlineCode",{parentName:"p"},".ini")," files from the local installation folder ",(0,a.kt)("inlineCode",{parentName:"p"},"/OpenBBTerminal/openbb_terminal/stocks/options/presets/"),". Refer to the Options Screener Guide ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/screen/",target:"_blank"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"pricing")," is another method for calculating options prices. See the guide for this submenu ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/pricing/",target:"_blank"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hedge")," is a group of features for calculating a delta-neutral position. The guide for this submenu is located ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/hedge/",target:"_blank"},"here"),"."))),(0,a.kt)("h2",null,"How to use the Options Menu"),(0,a.kt)("p",null,"Navigate to the menu by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),", from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stocks")," menu, and then pressing enter. Alternatively, absolute path navigation can jump straight there, from anywhere. ",(0,a.kt)("inlineCode",{parentName:"p"},"/stocks/options")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172717122-a857dd69-6e79-4773-996a-74ea71f8ee86.png",alt:"The Options Menu"})),(0,a.kt)("h3",null,"Market Coverage and Data Sources"),(0,a.kt)("p",null,"At the time of writing, OpenBB is able to provide coverage only for US-listed equity and ETF options. While not officially supported, some additional markets and index options may be accessible with yFinance as the source. Coverage will be added as the product grows to incorporate more community contributions but, for now, it is safe to generalize equity options as referring to US-listed companies on a major exchange and are priced in $USD.",(0,a.kt)("br",null),"\nBy default, the Terminal loads a ticker using ",(0,a.kt)("a",{href:"https://developer.tradier.com/",target:"_blank"},"Tradier")," as the source. It's not perfect but the price is right. Sign up for a free developer account and then enter that token using the ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/#accessing-other-sources-of-data-via-api-keys",target:"_blank"},(0,a.kt)("inlineCode",{parentName:"p"},"keys"))," function. Alternatively, there is a choice to use yFinance data sets by attaching the argument as shown below. Help dialogues are displayed for any command by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," to the string. It is worth noting that this load command is different than the load command elsewhere."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ load -h\nusage: load [-t TICKER] [--source {tradier,yf}] [-h]\n\nLoad a ticker into option menu\n\noptional arguments:\n  -t TICKER, --ticker TICKER\n                        Stock ticker (default: None)\n  --source  {tradier ,yf}    Tradier or Yahoo Finance (default: tr)\n                        Source to get option expirations from (default: None)\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Having the working foundation of knowledge will make most commands, as pictured above, somewhat intuitive. ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," is attachable to any command to print the help dialogue in the Terminal. Refer to the ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/",target:"_blank"},"user documentation")," for details on any individual feature. Browse the commands on the left side of the page to read about any particular command."),(0,a.kt)("h2",null,"Examples"),(0,a.kt)("p",null,"To begin, a ticker must be loaded with an expiration date selected. Enter these commands to display the list of expiration dates for AAPL options chains."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ load aapl\n\n(\ud83e\udd8b) /stocks/options/ $ exp\n\n   Available expiry dates\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Identifier \u2503 Date       \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 0          \u2502 2022-05-20 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1          \u2502 2022-05-27 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2          \u2502 2022-06-03 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 3          \u2502 2022-06-10 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 4          \u2502 2022-06-17 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 5          \u2502 2022-06-24 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 6          \u2502 2022-07-01 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 7          \u2502 2022-07-15 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 8          \u2502 2022-08-19 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 9          \u2502 2022-09-16 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 10         \u2502 2022-10-21 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 11         \u2502 2022-11-18 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 12         \u2502 2022-12-16 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 13         \u2502 2023-01-20 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 14         \u2502 2023-03-17 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 15         \u2502 2023-06-16 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 16         \u2502 2023-09-15 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 17         \u2502 2024-01-19 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 18         \u2502 2024-06-21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Choose an expiration date with the corresponding Identifier value on the left."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ exp 16\nExpiration set to 2023-09-15\n")),(0,a.kt)("p",null,"Setting the chain for analysis will change the text colour at the bottom of the Options menu. These commands require loaded data."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172724623-dbb16566-5dfa-482c-a67e-948e01444ca8.png",alt:"The Options menu with a loaded ticker and expiration date"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," command displays a table of notable statistics."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ info\n\n                Options Information\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Info                  \u2503 Value                   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 Implied Volatility    \u2502   38.07%  (  -1.48%)    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Historical Volatility \u2502   42.90%                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IV Percentile         \u2502   95%                   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IV Rank               \u2502   78.41%                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IV High               \u2502   43.37% on 04/26/22    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IV Low                \u2502   18.80% on 06/11/21    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Put/Call Vol Ratio    \u2502  0.81                   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Today's Volume        \u2502  2,045,793              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Volume Avg (30-Day)   \u2502  1,293,501              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Put/Call OI Ratio     \u2502  0.88                   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Today's Open Interest \u2502  8,226,541              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Open Int (30-Day)     \u2502  7,576,733              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"An adjustable-period put/call ratio chart is called according to the timeline selected by the user."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Length of 180 days:",(0,a.kt)("br",null))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ pcr 180\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172721035-2c1b3191-430a-4bb4-86be-f932abb87215.png",alt:"180 day window for put/call ratio"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Length of 90 days:",(0,a.kt)("br",null))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ pcr 90\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172721388-4fa23c20-6813-4bcd-bc4f-964ff8562112.png",alt:"90 day window for put/call ratio"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Length of 30 days:",(0,a.kt)("br",null))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ pcr 30\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172721482-d7d32681-850e-4d01-b9bb-ca9a59bf83e6.png",alt:"30 day window for put/call ratio"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Length of 10 days:",(0,a.kt)("br",null))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ pcr 10\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172721584-a953166e-b923-4bb6-ab98-ee777f087add.png",alt:"10 day window for put/call ratio"})),(0,a.kt)("p",null,"The chain's open interest and current volume can be visualized with, ",(0,a.kt)("inlineCode",{parentName:"p"},"voi")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ voi\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172721788-cc801a19-9625-4180-b948-46d4a51da343.png",alt:"Volume & Open Interest"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"chains")," command will display pricing, volume, open interest, and greeks data as a snapshot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ chains\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172721931-7d1b98f6-ebc5-44ae-8feb-e045f963c40c.png",alt:"chains command"})),(0,a.kt)("p",null,"Narrow the focus with min/max filters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ chains -m 50 -M 100\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172722075-565c0465-18ac-4426-98a7-54eaa331ef81.png",alt:"Chains command with min/max filters"})),(0,a.kt)("p",null,"Additional Greeks are accessible through the command, ",(0,a.kt)("inlineCode",{parentName:"p"},"greeks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ greeks\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172722192-37dafb44-5267-495a-b158-afaabd911593.png",alt:"greeks command"})),(0,a.kt)("p",null,"See the effects of monetary policy by adjusting for the risk-free rate of return, and factor in dividend payments."),(0,a.kt)("a",{href:"https://www.investopedia.com/ask/answers/042215/what-does-positive-theta-mean-credit-spreads.asp",target:"_blank"},"Investopedia"),'``` "Credit spreads naturally carry a positive theta, meaning they benefit from the passage of time." ``` ```` (\ud83e\udd8b) /stocks/options/ $ greeks -d 0.67 -r 1 -m 50 -M 200 -a ```` Greeks for Apple Sep/23 calls, using a RFR of 1% and dividend yield of 0.67%',(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172722357-6389fdc7-19ed-4960-900c-9bd9953630e2.png",alt:"Options greeks with adjustments"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"binom")," will calculate options values using ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Binomial_options_pricing_model",target:"_blank"},"binomial pricing models"),"."),(0,a.kt)("p",null,"Display a probabilities distribution chart using the optional argument ",(0,a.kt)("inlineCode",{parentName:"p"},"--plot")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ binom --plot\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172722694-9a4b782e-9ec5-4b47-a31a-e5b9dd04eeba.png",alt:"Probabilities distribution using binomial pricing, for AAPL options expiring Sep/23"})),(0,a.kt)("p",null,"Visualize the volume of puts and calls in a chain with ",(0,a.kt)("inlineCode",{parentName:"p"},"vol")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ vol -m 0 -M 250\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172722818-1cdf1d8c-2a8a-4ede-a455-041b3066dcb3.png",alt:"Puts and calls volume for AAPL 09/23 expiration"})),(0,a.kt)("p",null,"Plot the open interest in a similar fashion with ",(0,a.kt)("inlineCode",{parentName:"p"},"oi")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ oi\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172722959-edab3c32-a3f3-47db-80be-a33e382ddd9a.png",alt:"Open interest for AAPL expiring 2023-09-15"})),(0,a.kt)("p",null,"Historical OHLC pricing for individual contracts can be viewed with ",(0,a.kt)("inlineCode",{parentName:"p"},"hist")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ hist -p -s 70\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172723074-cd013225-9fc9-4eeb-adeb-ccc8a99f661a.png",alt:"Price history for AAPL $70 put expiring 2023-09-15"})),(0,a.kt)("p",null,"Plot the hisotorical greek data with, ",(0,a.kt)("inlineCode",{parentName:"p"},"grhist")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ grhist -s 70 -p -g rho\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172723243-71b7e323-c3c4-4c7e-a463-f56d916a87fe.png",alt:"Historical Rho for $70 09/23 AAPL Put"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"plot")," gives the user flexibility to chart different variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ plot -p -x ltd -y s\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172723361-e57c656a-2202-4822-abc0-080c5f99d3e4.png",alt:"Stike vs Last Trade Date for Apple puts expiring Sep/23"})),(0,a.kt)("p",null,"Show the volatility surface of the entire chain using the command, ",(0,a.kt)("inlineCode",{parentName:"p"},"vsurf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/ $ vsurf\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172723670-f1e3bc37-2655-4414-b0cb-3e173b48825d.png",alt:"Volatility surface of QQQ"})),(0,a.kt)("h2",null,"Additional Resources for Equity Options"),(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/screen/",target:"_blank"},"Introduction to the Options Screener"),(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/hedge/",target:"_blank"},"Introduction to the Options Hedge Menu"),(0,a.kt)("a",{href:"https://www.investopedia.com/options-basics-tutorial-4583012",target:"_blank"},"Investopedia's Options Basics Tutorial"))}u.isMDXComponent=!0}}]);