"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91215],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},24001:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"UI for Istio Virtual Services and Destination Rules",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/options/feature-flags/istio-virtual-service-ui"]},l=void 0,u={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",title:"UI for Istio Virtual Services and Destination Rules",description:"This feature enables a UI that lets you create, read, update and delete virtual services and destination rules, which are traffic management features of Istio.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662069460,formattedLastUpdatedAt:"9/1/2022",frontMatter:{title:"UI for Istio Virtual Services and Destination Rules",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/options/feature-flags/istio-virtual-service-ui"]},sidebar:"tutorialSidebar",previous:{title:"Allow Unsupported Storage Drivers",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},next:{title:"Kubernetes Installation Using Helm 2",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2"}},c={},f=[],p={toc:f};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This feature enables a UI that lets you create, read, update and delete virtual services and destination rules, which are traffic management features of Istio."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," Turning on this feature does not enable Istio. A cluster administrator needs to ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/istio-setup-guide"},"enable Istio for the cluster")," in order to use the feature.")),(0,i.kt)("p",null,"To enable or disable this feature, refer to the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/feature-flags"},"the main page about enabling experimental features.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Available as of"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"GA"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.2")))),(0,i.kt)("h1",{id:"about-this-feature"},"About this Feature"),(0,i.kt)("p",null,"A central advantage of Istio's traffic management features is that they allow dynamic request routing, which is useful for canary deployments, blue/green deployments, or A/B testing."),(0,i.kt)("p",null,"When enabled, this feature turns on a page that lets you configure some traffic management features of Istio using the Rancher UI. Without this feature, you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage traffic with Istio."),(0,i.kt)("p",null,"The feature enables two UI tabs: one tab for ",(0,i.kt)("strong",{parentName:"p"},"Virtual Services")," and another for ",(0,i.kt)("strong",{parentName:"p"},"Destination Rules.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Virtual services")," intercept and direct traffic to your Kubernetes services, allowing you to direct percentages of traffic from a request to different services. You can use them to define a set of routing rules to apply when a host is addressed. For details, refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/"},"Istio documentation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destination rules")," serve as the single source of truth about which service versions are available to receive traffic from virtual services. You can use these resources to define policies that apply to traffic that is intended for a service after routing has occurred. For details, refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule"},"Istio documentation."))),(0,i.kt)("p",null,"To see these tabs,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the project view in Rancher and click ",(0,i.kt)("strong",{parentName:"li"},"Resources > Istio.")),(0,i.kt)("li",{parentName:"ol"},"You will see tabs for ",(0,i.kt)("strong",{parentName:"li"},"Traffic Graph,")," which has the Kiali network visualization integrated into the UI, and ",(0,i.kt)("strong",{parentName:"li"},"Traffic Metrics,")," which shows metrics for the success rate and request volume of traffic to your services, among other metrics. Next to these tabs, you should see the tabs for ",(0,i.kt)("strong",{parentName:"li"},"Virtual Services")," and ",(0,i.kt)("strong",{parentName:"li"},"Destination Rules."))))}d.isMDXComponent=!0}}]);