"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26976],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return g}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=i,p=d["".concat(c,".").concat(g)]||d[g]||l[g]||o;return t?n.createElement(p,a(a({ref:r},f),{},{components:t})):n.createElement(p,a({ref:r},f))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15449:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"Configuring Microsoft Active Directory Federation Service (SAML)",weight:1205,aliases:["/rancher/v2.x/en/admin-settings/authentication/microsoft-adfs/"]},c=void 0,u={unversionedId:"pages-for-subheaders/configure-microsoft-ad-federation-service-saml",id:"version-2.5/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",title:"Configuring Microsoft Active Directory Federation Service (SAML)",description:"If your organization uses Microsoft Active Directory Federation Services (AD FS) for user authentication, you can configure Rancher to allow your users to log in using their AD FS credentials.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",permalink:"/v2.5/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",weight:1205,aliases:["/rancher/v2.x/en/admin-settings/authentication/microsoft-adfs/"]},sidebar:"tutorialSidebar",previous:{title:"Configuring Okta (SAML)",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml"},next:{title:"1. Configuring Microsoft AD FS for Rancher",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"}},f={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Outline",id:"setup-outline",level:2},{value:"Next: Configuring Microsoft AD FS for Rancher",id:"next-configuring-microsoft-ad-fs-for-rancher",level:3}],d={toc:l};function g(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your organization uses Microsoft Active Directory Federation Services (AD FS) for user authentication, you can configure Rancher to allow your users to log in using their AD FS credentials."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You must have Rancher installed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Obtain your Rancher Server URL. During AD FS configuration, substitute this URL for the ",(0,o.kt)("inlineCode",{parentName:"li"},"<RANCHER_SERVER>")," placeholder."),(0,o.kt)("li",{parentName:"ul"},"You must have a global administrator account on your Rancher installation.")),(0,o.kt)("p",null,"You must have a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services"},"Microsoft AD FS Server")," configured."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Obtain your AD FS Server IP/DNS name. During AD FS configuration, substitute this IP/DNS name for the ",(0,o.kt)("inlineCode",{parentName:"li"},"<AD_SERVER>")," placeholder."),(0,o.kt)("li",{parentName:"ul"},"You must have access to add ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-relying-party-trust"},"Relying Party Trusts")," on your AD FS Server.")),(0,o.kt)("h2",{id:"setup-outline"},"Setup Outline"),(0,o.kt)("p",null,"Setting up Microsoft AD FS with Rancher Server requires configuring AD FS on your Active Directory server, and configuring Rancher to utilize your AD FS server. The following pages serve as guides for setting up Microsoft AD FS authentication on your Rancher installation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"1. Configuring Microsoft AD FS for Rancher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},"2. Configuring Rancher for Microsoft AD FS"))),(0,o.kt)("p",null,"{{< saml_caveats >}}"),(0,o.kt)("h3",{id:"next-configuring-microsoft-ad-fs-for-rancher"},(0,o.kt)("a",{parentName:"h3",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"Next: Configuring Microsoft AD FS for Rancher")))}g.isMDXComponent=!0}}]);