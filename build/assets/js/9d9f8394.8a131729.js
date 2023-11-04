"use strict";(self.webpackChunkasync_wrapper_docs=self.webpackChunkasync_wrapper_docs||[]).push([[360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),f=o,y=l["".concat(p,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Troubleshooting",c={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Extracting .execute function",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/async-wrapper/docs/troubleshooting",draft:!1,editUrl:"https://github.com/MHassanTariq/async-wrapper-docs/tree/master/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using with async function",permalink:"/async-wrapper/docs/how-to-use/using-with-async-func"},next:{title:"TypeScript",permalink:"/async-wrapper/docs/typescript"}},p={},s=[{value:"Extracting <code>.execute</code> function",id:"extracting-execute-function",level:2}],u={toc:s},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"extracting-execute-function"},"Extracting ",(0,o.kt)("inlineCode",{parentName:"h2"},".execute")," function"),(0,o.kt)("p",null,"If you try to extract the execute function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncWrapper")," object and using the newly created function like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const exec = asyncWrapper.execute;\nexec(asynFunc, 1);\n")),(0,o.kt)("p",null,"This will break the functionality since the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute")," function is heavily dependent on the values, and functions that are supported by the ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncWrapper")," class. To use them, the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute")," function uses the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," a lot. Therefore, due to the ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/5911532/15890201"},"problem with this")," in JavaScript, the scope of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is changed, resulting in an error."),(0,o.kt)("p",null,"You can solve this by directly wrapping your async function with ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncWrapper.execute"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await asyncWrapper.execute(asynFunc, 1);\n")))}d.isMDXComponent=!0}}]);