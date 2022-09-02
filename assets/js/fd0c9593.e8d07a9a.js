"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19098],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||l[d]||r;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],u={title:"Configuring PingIdentity (SAML)",weight:1200},p=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",title:"Configuring PingIdentity (SAML)",description:"Available as of v2.0.7",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Configuring PingIdentity (SAML)",weight:1200},sidebar:"tutorialSidebar",previous:{title:"Configuring Keycloak (SAML)",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak"},next:{title:"Configuring Okta (SAML)",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml"}},s={},l=[],m={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.0.7")),(0,r.kt)("p",null,"If your organization uses Ping Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"You must have a ",(0,r.kt)("a",{parentName:"li",href:"https://www.pingidentity.com/"},"Ping IdP Server")," configured."),(0,r.kt)("li",{parentName:"ul"},"Following are the Rancher Service Provider URLs needed for configuration:\nMetadata URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/ping/saml/metadata"),"\nAssertion Consumer Service (ACS) URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/ping/saml/acs"),"\nNote that these URLs will not return valid data until the authentication configuration is saved in Rancher."),(0,r.kt)("li",{parentName:"ul"},"Export a ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata.xml")," file from your IdP Server. For more information, see the ",(0,r.kt)("a",{parentName:"li",href:"https://documentation.pingidentity.com/pingfederate/pf83/index.shtml#concept_exportingMetadata.html"},"PingIdentity documentation"),"."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,r.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"PingIdentity"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Ping Account")," form. Ping IdP lets you specify what data store you want to use. You can either add a database or use an existing ldap server. For example, if you select your Active Directory (AD) server, the examples below describe how you can map AD attributes to fields within Rancher."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Display Name Field"),": Enter the AD attribute that contains the display name of users (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"displayName"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Name Field"),": Enter the AD attribute that contains the user name/given name (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"givenName"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UID Field"),": Enter an AD attribute that is unique to every user (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"sAMAccountName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"distinguishedName"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Groups Field"),": Make entries for managing group memberships (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"memberOf"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Entity ID Field")," (optional): The published, protocol-dependent, unique identifier of your partner. This ID defines your organization as the entity operating the server for SAML 2.0 transactions. This ID may have been obtained out-of-band or via a SAML metadata file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rancher API Host"),": Enter the URL for your Rancher Server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Private Key")," and ",(0,r.kt)("strong",{parentName:"p"},"Certificate"),": This is a key-certificate pair to create a secure shell between Rancher and your IdP."),(0,r.kt)("p",{parentName:"li"},"You can generate one using an openssl command. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IDP-metadata"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file that you ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.pingidentity.com/pingfederate/pf83/index.shtml#concept_exportingMetadata.html"},"exported from your IdP server"),"."))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Ping Account")," form, click ",(0,r.kt)("strong",{parentName:"p"},"Authenticate with Ping"),", which is at the bottom of the page."),(0,r.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Ping IdP to validate your Rancher PingIdentity configuration."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the IdP login page.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with PingIdentity. Your users can now sign into Rancher using their PingIdentity logins."),(0,r.kt)("p",null,"{{< saml_caveats >}}"))}d.isMDXComponent=!0}}]);