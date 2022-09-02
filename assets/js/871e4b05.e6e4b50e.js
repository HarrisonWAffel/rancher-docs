"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42653],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Release Notes",aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/release-notes","/rancher/v2.0-v2.4/en/istio/legacy/release-notes","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/release-notes","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/release-notes/"]},l="Istio 1.5.8",c={unversionedId:"explanations/integrations-in-rancher/istio/release-notes",id:"version-2.0-2.4/explanations/integrations-in-rancher/istio/release-notes",title:"Release Notes",description:"Important note on 1.5.x versions",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/release-notes.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/release-notes",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/release-notes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/release-notes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Release Notes",aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/release-notes","/rancher/v2.0-v2.4/en/istio/legacy/release-notes","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/release-notes","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/release-notes/"]},sidebar:"tutorialSidebar",previous:{title:"Disabling Istio",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/disable-istio"},next:{title:"Cluster Logging",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-logging"}},u={},p=[{value:"Important note on 1.5.x versions",id:"important-note-on-15x-versions",level:3},{value:"Known Issues",id:"known-issues",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"istio-158"},"Istio 1.5.8"),(0,o.kt)("h3",{id:"important-note-on-15x-versions"},"Important note on 1.5.x versions"),(0,o.kt)("p",null,"When upgrading from any 1.4 version of Istio to any 1.5 version, the Rancher installer will delete several resources in order to complete the upgrade, at which point they will be immediately re-installed. This includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-reader-service-account"),". If your Istio installation is using this service account be aware that any secrets tied to the service account will be deleted. Most notably this will ",(0,o.kt)("strong",{parentName:"p"},"break specific ",(0,o.kt)("a",{parentName:"strong",href:"https://archive.istio.io/v1.4/docs/setup/install/multicluster/"},"multi-cluster deployments")),". Downgrades back to 1.4 are not possible."),(0,o.kt)("p",null,"See the official upgrade notes for additional information on the 1.5 release and upgrading from 1.4: ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/news/releases/1.5.x/announcing-1.5/upgrade-notes/"},"https://istio.io/latest/news/releases/1.5.x/announcing-1.5/upgrade-notes/")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Rancher continues to use the Helm installation method, which produces a different architecture from an istioctl installation.")),(0,o.kt)("h3",{id:"known-issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Kiali traffic graph is currently not working ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/istio/istio/issues/24924"},"#24924"))))}f.isMDXComponent=!0}}]);