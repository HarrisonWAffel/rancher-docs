"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50318],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,y=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66389:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={title:"Assigning Pod Security Policies",weight:2260},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",title:"Assigning Pod Security Policies",description:"Pod Security Policies are objects that control security-sensitive aspects of pod specification (like root privileges).",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Assigning Pod Security Policies",weight:2260},sidebar:"tutorialSidebar",previous:{title:"Adding a Pod Security Policy",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},next:{title:"Project Administration",permalink:"/v2.0-v2.4/pages-for-subheaders/manage-projects"}},l={},d=[{value:"Adding a Default Pod Security Policy",id:"adding-a-default-pod-security-policy",level:2}],p={toc:d};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pod Security Policies")," are objects that control security-sensitive aspects of pod specification (like root privileges)."),(0,o.kt)("h2",{id:"adding-a-default-pod-security-policy"},"Adding a Default Pod Security Policy"),(0,o.kt)("p",null,"When you create a new cluster with RKE, you can configure it to apply a PSP immediately. As you create the cluster, use the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Options")," to enable a PSP. The PSP assigned to the cluster will be the default PSP for projects within the cluster."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:"),"\nCreate a Pod Security Policy within Rancher. Before you can assign a default PSP to a new cluster, you must have a PSP available for assignment. For instruction, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),".\n",(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nFor security purposes, we recommend assigning a PSP as you create your clusters.")),(0,o.kt)("p",null,"To enable a default Pod Security Policy, set the ",(0,o.kt)("strong",{parentName:"p"},"Pod Security Policy Support")," option to  ",(0,o.kt)("strong",{parentName:"p"},"Enabled"),", and then make a selection from the ",(0,o.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down."),(0,o.kt)("p",null,"When the cluster finishes provisioning, the PSP you selected is applied to all projects within the cluster."))}g.isMDXComponent=!0}}]);