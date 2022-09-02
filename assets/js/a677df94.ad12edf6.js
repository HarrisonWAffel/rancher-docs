"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[32165],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?t.createElement(d,a(a({ref:n},s),{},{components:r})):t.createElement(d,a({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73912:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"Example YAML File",weight:501,aliases:["/rancher/v2.0-v2.4/en/tools/pipelines/reference/","/rancher/v2.0-v2.4/en/k8s-in-rancher/pipelines/example"]},p=void 0,c={unversionedId:"reference-guides/pipelines/example-yaml",id:"version-2.0-2.4/reference-guides/pipelines/example-yaml",title:"Example YAML File",description:"Pipelines can be configured either through the UI or using a yaml file in the repository, i.e. .rancher-pipeline.yml or .rancher-pipeline.yaml.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/pipelines/example-yaml.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/example-yaml",permalink:"/v2.0-v2.4/reference-guides/pipelines/example-yaml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/pipelines/example-yaml.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Example YAML File",weight:501,aliases:["/rancher/v2.0-v2.4/en/tools/pipelines/reference/","/rancher/v2.0-v2.4/en/k8s-in-rancher/pipelines/example"]},sidebar:"tutorialSidebar",previous:{title:"Example Repositories",permalink:"/v2.0-v2.4/reference-guides/pipelines/example-repositories"},next:{title:"v2.0.x Pipeline Documentation",permalink:"/v2.0-v2.4/reference-guides/pipelines/v2.0.x"}},s={},u=[],m={toc:u};function f(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pipelines can be configured either through the UI or using a yaml file in the repository, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yaml"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"k8s-in-rancher/pipelines/config"},"pipeline configuration reference"),", we provide examples of how to configure each feature using the Rancher UI or using YAML configuration."),(0,o.kt)("p",null,"Below is a full example ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-pipeline.yml")," for those who want to jump right in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# example\nstages:\n  - name: Build something\n    # Conditions for stages\n    when:\n      branch: master\n      event: [ push, pull_request ]\n    # Multiple steps run concurrently\n    steps:\n    - runScriptConfig:\n        image: busybox\n        shellScript: echo ${FIRST_KEY} && echo ${ALIAS_ENV}\n      # Set environment variables in container for the step\n      env:\n        FIRST_KEY: VALUE\n        SECOND_KEY: VALUE2\n      # Set environment variables from project secrets\n      envFrom:\n      - sourceName: my-secret\n        sourceKey: secret-key\n        targetKey: ALIAS_ENV\n    - runScriptConfig:\n        image: busybox\n        shellScript: date -R\n      # Conditions for steps\n      when:\n        branch: [ master, dev ]\n        event: push\n  - name: Publish my image\n    steps:\n    - publishImageConfig:\n        dockerfilePath: ./Dockerfile\n        buildContext: .\n        tag: rancher/rancher:v2.0.0\n        # Optionally push to remote registry\n        pushRemote: true\n        registry: reg.example.com\n  - name: Deploy some workloads\n    steps:\n    - applyYamlConfig:\n        path: ./deployment.yaml\n# branch conditions for the pipeline\nbranch:\n  include: [ master, feature/*]\n  exclude: [ dev ]\n# timeout in minutes\ntimeout: 30\nnotification:\n  recipients:\n  - # Recipient\n    recipient: "#mychannel"\n    # ID of Notifier\n    notifier: "c-wdcsr:n-c9pg7"\n  - recipient: "test@example.com"\n    notifier: "c-wdcsr:n-lkrhd"\n  # Select which statuses you want the notification to be sent  \n  condition: ["Failed", "Success", "Changed"]\n  # Ability to override the default message (Optional)\n  message: "my-message"\n')))}f.isMDXComponent=!0}}]);