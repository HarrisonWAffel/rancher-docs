"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37534],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,c=h["".concat(o,".").concat(m)]||h[m]||d[m]||l;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),s=a(67392),o=a(7094),u=a(12466),p="tabList__CuJ",d="tabItem_LNqP";function h(e){var t,a,i=e.lazy,h=e.block,m=e.defaultValue,c=e.values,f=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),R=y.tabGroupChoices,E=y.setTabGroupChoices,w=(0,r.useState)(v),A=w[0],T=w[1],C=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=R[f];null!=O&&O!==A&&b.some((function(e){return e.value===O}))&&T(O)}var x=function(e){var t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==A&&(I(t),T(n),null!=f&&E(f,String(n)))},F=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=C.indexOf(e.currentTarget)+1;a=null!=(n=C[r])?n:C[0];break;case"ArrowLeft":var l,i=C.indexOf(e.currentTarget)-1;a=null!=(l=C[i])?l:C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":h},g)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return C.push(e)},onKeyDown:F,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function m(e){var t=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},10978:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(65488),s=a(85162),o=["components"],u={title:"Enabling Experimental Features",weight:17,aliases:["/rancher/v2.5/en/installation/options/feature-flags/","/rancher/v2.5/en/admin-settings/feature-flags/","/rancher/v2.x/en/installation/resources/feature-flags/"]},p=void 0,d={unversionedId:"pages-for-subheaders/enable-experimental-features",id:"version-2.5/pages-for-subheaders/enable-experimental-features",title:"Enabling Experimental Features",description:"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an unsupported storage type outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/enable-experimental-features.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/enable-experimental-features",permalink:"/v2.5/pages-for-subheaders/enable-experimental-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/enable-experimental-features.md",tags:[],version:"2.5",lastUpdatedAt:1662094798,formattedLastUpdatedAt:"9/1/2022",frontMatter:{title:"Enabling Experimental Features",weight:17,aliases:["/rancher/v2.5/en/installation/options/feature-flags/","/rancher/v2.5/en/admin-settings/feature-flags/","/rancher/v2.x/en/installation/resources/feature-flags/"]},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/v2.5/pages-for-subheaders/advanced-options"},next:{title:"Running on ARM64 (Experimental)",permalink:"/v2.5/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"}},h={},m=[{value:"Enabling Features for Kubernetes Installs",id:"enabling-features-for-kubernetes-installs",level:3},{value:"Rendering the Helm Chart for Air Gap Installations",id:"rendering-the-helm-chart-for-air-gap-installations",level:3},{value:"Enabling Features for Docker Installs",id:"enabling-features-for-docker-installs",level:3},{value:"Disabling Features with the Rancher UI",id:"disabling-features-with-the-rancher-ui",level:3},{value:"Disabling Features with the Rancher API",id:"disabling-features-with-the-rancher-api",level:3}],c={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},"unsupported storage type")," outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default."),(0,l.kt)("p",null,"The features can be enabled in three ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-when-starting-rancher"},"Enable features when starting Rancher.")," When installing Rancher with a CLI, you can use a feature flag to enable a feature by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-ui"},"Enable features from the Rancher UI")," by going to the ",(0,l.kt)("strong",{parentName:"li"},"Settings")," page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-api"},"Enable features with the Rancher API")," after installing Rancher.")),(0,l.kt)("p",null,"Each feature has two values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A default value, which can be configured with a flag or environment variable from the command line"),(0,l.kt)("li",{parentName:"ul"},"A set value, which can be configured with the Rancher API or UI")),(0,l.kt)("p",null,"If no value has been set, Rancher uses the default value."),(0,l.kt)("p",null,"Because the API sets the actual value and the command line sets the default value, that means that if you enable or disable a feature with the API or UI, it will override any value set with the command line."),(0,l.kt)("p",null,"For example, if you install Rancher, then set a feature flag to true with the Rancher API, then upgrade Rancher with a command that sets the feature flag to false, the default value will still be false, but the feature will still be enabled because it was set with the Rancher API. If you then deleted the set value (true) with the Rancher API, setting it to NULL, the default value (false) would take effect."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," There are some feature flags that may require a restart of the Rancher server container. These features that require a restart are marked in the table of these docs and in the UI.")),(0,l.kt)("p",null,"The following is a list of the feature flags available in Rancher:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fleet"),": Rancher comes with ",(0,l.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," preinstalled in v2.5+."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"istio-virtual-service-ui"),": This feature enables a ",(0,l.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"},"UI to create, read, update, and delete Istio virtual services and destination rules"),", which are traffic management features of Istio."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unsupported-storage-drivers"),": This feature ",(0,l.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},"allows unsupported storage drivers.")," In other words, it enables types for storage providers and provisioners that are not enabled by default.")),(0,l.kt)("p",null,"The below table shows the availability and default value for feature flags in Rancher:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature Flag Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Available as of"),(0,l.kt)("th",{parentName:"tr",align:null},"Rancher Restart Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dashboard")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.4.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dashboard")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"GA* and no longer a feature flag"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.5.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.3.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"GA*"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.3.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"proxy")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.4.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"proxy")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Discontinued"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.5.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unsupported-storage-drivers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.3.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fleet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"GA*"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.5.0"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"*"," Generally Available. This feature is included in Rancher and it is not experimental."),(0,l.kt)("h1",{id:"enabling-features-when-starting-rancher"},"Enabling Features when Starting Rancher"),(0,l.kt)("p",null,"When you install Rancher, enable the feature you want with a feature flag. The command is different depending on whether you are installing Rancher on a single node or if you are doing a Kubernetes Installation of Rancher."),(0,l.kt)("h3",{id:"enabling-features-for-kubernetes-installs"},"Enabling Features for Kubernetes Installs"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Values set from the Rancher API will override the value passed in through the command line.")),(0,l.kt)("p",null,"When installing Rancher with a Helm chart, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set")," option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher-latest/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set 'extraEnv[0].name=CATTLE_FEATURES'\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'\n")),(0,l.kt)("p",null,"Note: If you are installing an alpha version, Helm requires adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"--devel")," option to the command."),(0,l.kt)("h3",{id:"rendering-the-helm-chart-for-air-gap-installations"},"Rendering the Helm Chart for Air Gap Installations"),(0,l.kt)("p",null,"For an air gap installation of Rancher, you need to add a Helm chart repository and render a Helm template before installing Rancher with Helm. For details, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap installation documentation.")),(0,l.kt)("p",null,"Here is an example of a command for passing in the feature flag names when rendering the Helm template. In the below example, two features are enabled by passing the feature flag names in a comma separated list."),(0,l.kt)("p",null,"The Helm 3 command is as follows:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n  --no-hooks \\ # prevent files for Helm hooks from being generated\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES'\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'\n"))),(0,l.kt)(s.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES'\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'\n")))),(0,l.kt)("p",null,"The Helm 2 command is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES'\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'\n")),(0,l.kt)("h3",{id:"enabling-features-for-docker-installs"},"Enabling Features for Docker Installs"),(0,l.kt)("p",null,"When installing Rancher with Docker, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--features")," option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d -p 80:80 -p 443:443 \\\n  --restart=unless-stopped \\\n  rancher/rancher:rancher-latest \\\n  --features=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true\n")),(0,l.kt)("h1",{id:"enabling-features-with-the-rancher-ui"},"Enabling Features with the Rancher UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,l.kt)("strong",{parentName:"li"},"Settings.")),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Feature Flags")," tab. You will see a list of experimental features."),(0,l.kt)("li",{parentName:"ol"},"To enable a feature, go to the disabled feature you want to enable and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee"," > Activate."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,l.kt)("h3",{id:"disabling-features-with-the-rancher-ui"},"Disabling Features with the Rancher UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,l.kt)("strong",{parentName:"li"},"Settings.")),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Feature Flags")," tab. You will see a list of experimental features."),(0,l.kt)("li",{parentName:"ol"},"To disable a feature, go to the enabled feature you want to disable and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee"," > Deactivate."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."),(0,l.kt)("h1",{id:"enabling-features-with-the-rancher-api"},"Enabling Features with the Rancher API"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,l.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,l.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,l.kt)("strong",{parentName:"li"},"Edit.")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,l.kt)("strong",{parentName:"li"},"True.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Show Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Send Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Close."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,l.kt)("h3",{id:"disabling-features-with-the-rancher-api"},"Disabling Features with the Rancher API"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,l.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,l.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,l.kt)("strong",{parentName:"li"},"Edit.")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,l.kt)("strong",{parentName:"li"},"False.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Show Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Send Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Close."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."))}f.isMDXComponent=!0}}]);