"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66280],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80705:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"3. Install Rancher",weight:300,aliases:["/rancher/v2.x/en/installation/other-installation-methods/behind-proxy/install-rancher/"]},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",title:"3. Install Rancher",description:"Now that you have a running RKE cluster, you can install Rancher in it. For security reasons all traffic to Rancher must be encrypted with TLS. For this tutorial you are going to automatically issue a self-signed certificate through cert-manager. In a real-world use-case you will likely use Let's Encrypt or provide your own certificate.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1662141087,formattedLastUpdatedAt:"9/2/2022",frontMatter:{title:"3. Install Rancher",weight:300,aliases:["/rancher/v2.x/en/installation/other-installation-methods/behind-proxy/install-rancher/"]},sidebar:"tutorialSidebar",previous:{title:"2. Install Kubernetes",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"},next:{title:"Install/Upgrade Rancher with RancherD",permalink:"/v2.5/pages-for-subheaders/install-rancher-on-linux"}},u={},p=[{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Install Rancher",id:"install-rancher",level:3},{value:"Additional Resources",id:"additional-resources",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Now that you have a running RKE cluster, you can install Rancher in it. For security reasons all traffic to Rancher must be encrypted with TLS. For this tutorial you are going to automatically issue a self-signed certificate through ",(0,l.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager"),". In a real-world use-case you will likely use Let's Encrypt or provide your own certificate."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," These installation instructions assume you are using Helm 3.")),(0,l.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,l.kt)("p",null,"Add the cert-manager helm repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,l.kt)("p",null,"Create a namespace for cert-manager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create namespace cert-manager\n")),(0,l.kt)("p",null,"Install the CustomResourceDefinitions of cert-manager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.5.1/cert-manager.crds.yaml\n")),(0,l.kt)("p",null,"And install it with Helm. Note that cert-manager also needs your proxy configured in case it needs to communicate with Let's Encrypt or other external certificate issuers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade --install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager --version v1.5.1 \\\n  --set http_proxy=http://${proxy_host} \\\n  --set https_proxy=http://${proxy_host} \\\n  --set noProxy=127.0.0.0/8\\\\,10.0.0.0/8\\\\,cattle-system.svc\\\\,172.16.0.0/12\\\\,192.168.0.0/16\\\\,.svc\\\\,.cluster.local\n")),(0,l.kt)("p",null,"Now you should wait until cert-manager is finished starting up:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl rollout status deployment -n cert-manager cert-manager\nkubectl rollout status deployment -n cert-manager cert-manager-webhook\n")),(0,l.kt)("h3",{id:"install-rancher"},"Install Rancher"),(0,l.kt)("p",null,"Next you can install Rancher itself. First add the helm repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,l.kt)("p",null,"Create a namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create namespace cattle-system\n")),(0,l.kt)("p",null,"And install Rancher with Helm. Rancher also needs a proxy configuration so that it can communicate with external application catalogs or retrieve Kubernetes version update metadata."),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher.cattle-system")," must be added to the noProxy list (as shown below) so that Fleet can communicate directly to Rancher with Kubernetes service DNS using service discovery."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade --install rancher rancher-latest/rancher \\\n   --namespace cattle-system \\\n   --set hostname=rancher.example.com \\\n   --set proxy=http://${proxy_host}\n   --set noProxy=127.0.0.0/8\\\\,10.0.0.0/8\\\\,cattle-system.svc\\\\,172.16.0.0/12\\\\,192.168.0.0/16\\\\,.svc\\\\,.cluster.local,rancher.cattle-system\n")),(0,l.kt)("p",null,"After waiting for the deployment to finish:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl rollout status deployment -n cattle-system rancher\n")),(0,l.kt)("p",null,"You can now navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"https://rancher.example.com")," and start using Rancher."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," If you don't intend to send telemetry data, opt out ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/faq/telemetry"},"telemetry")," during the initial login. Leaving this active in an air-gapped environment can cause issues if the sockets cannot be opened successfully.")),(0,l.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,l.kt)("p",null,"These resources could be helpful when installing Rancher:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/installation-references/helm-chart-options"},"Rancher Helm chart options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS secrets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting Rancher Kubernetes Installations"))))}d.isMDXComponent=!0}}]);