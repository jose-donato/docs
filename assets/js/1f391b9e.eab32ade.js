"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13085],{14247:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),n=a(86010),c=a(1944),s=a(35281),o=a(23427),r=a(53458),m=a(70541);const i="mdxPageWrapper_j9I6";function d(e){const{content:t}=e,{metadata:{title:a,description:d,frontMatter:g}}=t,{wrapperClassName:u,hide_table_of_contents:k}=g;return l.createElement(c.FG,{className:(0,n.Z)(u??s.k.wrapper.mdxPages,s.k.page.mdxPage)},l.createElement(c.d,{title:a,description:d}),l.createElement(o.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,n.Z)("row",i)},l.createElement("div",{className:(0,n.Z)("col",!k&&"col--8")},l.createElement("article",null,l.createElement(r.Z,null,l.createElement(t,null)))),!k&&t.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(m.Z,{toc:t.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level}))))))}},77362:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010),c=a(66505),s=a(19500);function o(e){let{children:t,className:a}=e;return l.createElement(c.Z,{as:"pre",tabIndex:0,className:(0,n.Z)(s.Z.codeBlockStandalone,"thin-scrollbar",a)},l.createElement("code",{className:s.Z.codeBlockLines},t))}},56918:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(87462),n=a(67294),c=a(86010),s=a(86668),o=a(66412),r=a(37016),m=a(85448),i=a(23746),d=a(78397),g=a(15291),u=a(12601),k=a(66505),N=a(19500);function b(e){let{children:t,className:a="",metastring:b,title:Z,showLineNumbers:p,language:E}=e;const{prism:{defaultLanguage:v,magicComments:h}}=(0,s.L)(),C=E??(0,r.Vo)(a)??v,f=(0,o.p)(),L=(0,m.F)(),_=(0,r.bc)(b)||Z,{lineClassNames:x,code:B}=(0,r.nZ)(t,{metastring:b,language:C,magicComments:h}),y=p??(0,r.nt)(b);return n.createElement(k.Z,{as:"div",className:(0,c.Z)(a,C&&!a.includes(`language-${C}`)&&`language-${C}`)},_&&n.createElement("div",{className:N.Z.codeBlockTitle},_),n.createElement("div",{className:N.Z.codeBlockContent},n.createElement(i.ZP,(0,l.Z)({},i.lG,{theme:f,code:B,language:C??"text"}),(e=>{let{className:t,tokens:a,getLineProps:l,getTokenProps:s}=e;return n.createElement("pre",{tabIndex:0,ref:L.codeBlockRef,className:(0,c.Z)(t,N.Z.codeBlock,"thin-scrollbar")},n.createElement("code",{className:(0,c.Z)(N.Z.codeBlockLines,y&&N.Z.codeBlockLinesWithNumbering)},a.map(((e,t)=>n.createElement(d.Z,{key:t,line:e,getLineProps:l,getTokenProps:s,classNames:x[t],showLineNumbers:y})))))})),n.createElement("div",{className:N.Z.buttonGroup},(L.isEnabled||L.isCodeScrollable)&&n.createElement(u.Z,{className:N.Z.codeButton,onClick:()=>L.toggle(),isEnabled:L.isEnabled}),n.createElement(g.Z,{className:N.Z.codeButton,code:B}))))}},70541:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(87462),n=a(67294),c=a(86010),s=a(38769);const o="tableOfContents_jeP5";function r(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,c.Z)(o,"thin-scrollbar text-sm mt-[48px] xl:max-w-[216px]",t)},n.createElement("p",{className:"uppercase text-sm font-bold text-grey-600 dark:text-grey-200 tracking-widest mb-2"},"On this page"),n.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"text-grey-400 capitalize !no-underline",linkActiveClassName:"!text-white"})))}},38769:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(87462),n=a(67294),c=a(86668),s=a(39665),o=a(96841),r=a(86010);function m(e){let{toc:t,className:a,linkClassName:l,isChild:c}=e;return t.length?n.createElement("ul",{className:c?"list-none ml-1 border-l border-grey-300 dark:border-grey-600 mt-2":"border-l border-grey-300 dark:border-grey-600 list-none pl-4"},t.map(((e,t)=>n.createElement("li",{key:e.id,className:(0,r.Z)({"pb-1":0===t,"py-1":0!==t,"pl-3":c})},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}const i=n.memo(m);function d(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:g,...u}=e;const k=(0,c.L)(),N=d??k.tableOfContents.minHeadingLevel,b=g??k.tableOfContents.maxHeadingLevel,Z=(0,s.b)({toc:t,minHeadingLevel:N,maxHeadingLevel:b}),p=(0,n.useMemo)((()=>{if(r&&m)return{linkClassName:r,linkActiveClassName:m,minHeadingLevel:N,maxHeadingLevel:b}}),[r,m,N,b]);return(0,o.S)(p),n.createElement(i,(0,l.Z)({toc:Z,className:a,linkClassName:r},u))}},19500:(e,t,a)=>{a.d(t,{Z:()=>l});const l={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);