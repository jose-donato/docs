"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Degiro",l={unversionedId:"features/portfolio/bro/degiro/degiro",id:"features/portfolio/bro/degiro/degiro",title:"Degiro",description:"This menu aims to contain several commands that are available to a user through his Degiro account.",source:"@site/terminal/features/portfolio/bro/degiro/degiro.md",sourceDirName:"features/portfolio/bro/degiro",slug:"/features/portfolio/bro/degiro/",permalink:"/docs/terminal/features/portfolio/bro/degiro/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/bro/degiro/degiro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"orders",permalink:"/docs/terminal/features/portfolio/bro/coinbase/orders/"},next:{title:"cancel",permalink:"/docs/terminal/features/portfolio/bro/degiro/cancel/"}},p={},s=[{value:"Credentials",id:"credentials",level:2},{value:"2FA",id:"2fa",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"degiro"},"Degiro"),(0,a.kt)("p",null,"This menu aims to contain several commands that are available to a user through his Degiro account."),(0,a.kt)("p",null,"In order to be able to use these, just ensure you connect to your degiro account by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," first."),(0,a.kt)("h2",{id:"credentials"},"Credentials"),(0,a.kt)("p",null,"In order to login you need to update ",(0,a.kt)("a",{parentName:"p",href:"/openbb_terminal/config_terminal.py"},"config file")," with the following credentials:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DG_USERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Username used to log into Degiro's website.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DG_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password used to log into Degiro's website.")))),(0,a.kt)("p",null,"This can either be done manually or through the ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," menu."),(0,a.kt)("h2",{id:"2fa"},"2FA"),(0,a.kt)("p",null,"In order to use 2FA you need to update ",(0,a.kt)("a",{parentName:"p",href:"/openbb_terminal/config_terminal.py"},"config file"),"."),(0,a.kt)("p",null,"We provide 2 alternatives:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Manually typing the ",(0,a.kt)("inlineCode",{parentName:"p"},"OneTimePassword")," each time you login. To do this, after setting your credentials as explained above, go to sub-menu ",(0,a.kt)("inlineCode",{parentName:"p"},"portfolio/bro/degiro")," and type ",(0,a.kt)("inlineCode",{parentName:"p"},"login -otp OneTimePassword"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"OneTimePassword")," is the secret key generated by your authenticator.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Automatically generate your ",(0,a.kt)("inlineCode",{parentName:"p"},"OneTimePassword"),". No need to manually input it again."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DG_TOTP_SECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"This secret key will let OpenBB terminal generate the ",(0,a.kt)("inlineCode",{parentName:"td"},"OneTimePassword")," for you.")))),(0,a.kt)("p",null,"If you provide your ",(0,a.kt)("inlineCode",{parentName:"p"},"DG_TOTP_SECRET"),", you won't have to type your ",(0,a.kt)("inlineCode",{parentName:"p"},"OneTimePassword"),", OpenBB terminal will generate it for you\nat each connection."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DG_TOTP_SECRET")," is the text representation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"QRCODE")," that Degiro's provide you when you enable 2FA."),(0,a.kt)("p",null,"More information on 2FA credentials, in the documentation of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chavithra/degiro-connector"},"degiro-connector library"),"."))}d.isMDXComponent=!0}}]);