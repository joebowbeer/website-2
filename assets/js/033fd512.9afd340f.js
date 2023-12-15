"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[7888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:11,description:"The orchestration process to get artifacts ready for rollout"},a="Workflow Orchestration",s={unversionedId:"capabilities/workflow-orchestration",id:"capabilities/workflow-orchestration",title:"Workflow Orchestration",description:"The orchestration process to get artifacts ready for rollout",source:"@site/docs/capabilities/workflow-orchestration.mdx",sourceDirName:"capabilities",slug:"/capabilities/workflow-orchestration",permalink:"/docs/capabilities/workflow-orchestration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/capabilities/workflow-orchestration.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"The orchestration process to get artifacts ready for rollout"},sidebar:"tutorialSidebar",previous:{title:"Continuous Delivery (CD)",permalink:"/docs/capabilities/continuous-delivery"},next:{title:"Service Discovery",permalink:"/docs/capabilities/service-discovery"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"workflow-orchestration"},"Workflow Orchestration"),(0,n.kt)("p",null,"This is the tooling that allows for explicit orchestration of tasks. Usually this involves the process to get applications ready for delievery."),(0,n.kt)("p",null,"This can be things like defining the set of activities deemed necessary as part of CI, including but not limited to running tests (unit tests, smoke tests, integration tests, acceptance tests, etc), validations, verifications, and configuration changes to the deployment environments."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Frequently imperative definitions of steps to be completed"),(0,n.kt)("li",{parentName:"ul"},"Can use DSL for describing state machines or graphs"),(0,n.kt)("li",{parentName:"ul"},"Can enable side effects like notifications or manual interventions")))}f.isMDXComponent=!0}}]);