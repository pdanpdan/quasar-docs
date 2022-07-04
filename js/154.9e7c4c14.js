(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[154],{d587:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Quasar CLI Installation",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("Make sure that you have Node >=10 and NPM >=5 installed on your machine.")]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[t("strong",[e._v("Do not use any Node version higher than 12")]),e._v(". Webpack 4 does not support any Node version higher than 12 (Node 12 is supported) and we cannot move to Webpack 5 without making breaking changes. If you require Node.js 14+, please take a look at "),t("doc-link",{attrs:{to:"https://v2.quasar.dev"}},[e._v("Quasar v2")]),e._v(" instead (which is based on Webpack 5).")],1)]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[t("strong",[e._v("Do not use uneven versions of Node i.e. 11, 13, etc.")]),e._v(" These versions are not tested with Quasar and often cause issues due to their experimental nature. We highly recommend always using the LTS version of Node.")])]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Node.js >=10 is required.")]),e._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @quasar/cli\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @quasar/cli\n")])]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("If you are using Yarn, make sure that the Yarn "),t("doc-link",{attrs:{to:"https://yarnpkg.com/lang/en/docs/cli/global/"}},[e._v("global install location")]),e._v(" is in your PATH:")],1),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# in ~/.bashrc or equivalent")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global bin"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v('"')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for fish-shell:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" -U fish_user_paths "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("yarn global bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$fish_user_paths")]),e._v("\n")])]),t("p",[e._v("Under Windows, modify user’s PATH environment variable. If you are using yarn then add "),t("code",{staticClass:"doc-token"},[e._v("%LOCALAPPDATA%\\yarn\\bin")]),e._v(", otherwise if you’re using npm then add "),t("code",{staticClass:"doc-token"},[e._v("%APPDATA%\\npm")]),e._v(".")])]),t("p",[e._v("Then we create a project folder with Quasar CLI:")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" create quasar\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or:")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init quasar\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# ..then select "App with Quasar CLI" and "Quasar v1" options')]),e._v("\n")])]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("Some "),t("strong",[e._v("advanced")]),e._v(" scenarios require to use a custom starter kit (eg. testing or personal presets). In those "),t("strong",[e._v("rare")]),e._v(" cases, you can use "),t("code",{staticClass:"doc-token"},[e._v("--kit")]),e._v(" option. Read more about this into "),t("doc-link",{attrs:{to:"/quasar-cli/commands-list#create"}},[e._v("create command")]),e._v(" description. Remember that the recommended way to go is through writing a Quasar App Extension though.")],1)]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("WSL2")]),t("p",[e._v("Microsoft’s recommended "),t("doc-link",{attrs:{to:"https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2"}},[e._v("Nodejs development environment setup in WSL2")]),e._v(".")],1),t("p",[e._v("When using WSL2 (Windows Subsystem for Linux) "),t("doc-link",{attrs:{to:"https://docs.microsoft.com/en-us/windows/wsl/compare-versions#performance-across-os-file-systems"}},[e._v("Microsoft recommends")]),e._v(" keeping files in the linux file sytem to maximize performance.  Projects will build around 3X slower and HMR (Hot Module Reload) will not work ("),t("doc-link",{attrs:{to:"/quasar-cli/quasar-conf-js#docker-and-wsl-issues-with-hmr"}},[e._v("without a hack")]),e._v(") if the project files are on the Windows mount instead of the local linux file system.  This is also true in Docker for Windows based development environments.")],1)]),t("p",[e._v("Note that you don’t need separate projects if you want to build any of the available platforms. This one project can seamlessly handle all of them.")]),t("p",[e._v("To continue your learning about Quasar, you should familiarize yourself with the Quasar CLI in depth, because you will be using it a lot.")]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"how-it-works"},on:{click:function(t){return e.copyHeading("how-it-works")}}},[e._v("How it works")]),t("p",[e._v("Quasar CLI is made up of two packages: "),t("code",{staticClass:"doc-token"},[e._v("@quasar/cli")]),e._v(" and "),t("code",{staticClass:"doc-token"},[e._v("@quasar/app")]),e._v(". The first one is optional and only allows you to create a project folder and globally run Quasar commands. The second package is the heart of it and it gets installed into every Quasar project folder.")]),t("p",[e._v("Once a project folder has been generated, Quasar CLI will only help in running "),t("code",{staticClass:"doc-token"},[e._v("@quasar/app")]),e._v("’s commands globally. You don’t need it for anything else at this point. To ensure full independence from Quasar CLI you can write npm scripts (in your "),t("code",{staticClass:"doc-token"},[e._v("package.json")]),e._v(") to run Quasar commands. It is "),t("code",{staticClass:"doc-token"},[e._v("@quasar/app")]),e._v(" (which is specific to each project) that will run all the CLI commands.")]),t("p",[e._v("Example of adding a few npm scripts into your "),t("code",{staticClass:"doc-token"},[e._v("package.json")]),e._v(":")]),t("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"quasar dev"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"quasar build"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"build:pwa"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"quasar build -m pwa"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),t("p",[e._v("The above will allow you to run "),t("code",{staticClass:"doc-token"},[e._v("$ yarn dev")]),e._v(" or "),t("code",{staticClass:"doc-token"},[e._v("$ yarn build")]),e._v(" without the need of a globally installed "),t("code",{staticClass:"doc-token"},[e._v("@quasar/cli")]),e._v(", should you wish to do so.")]),t("p",[e._v("Alternatively, you can even use "),t("doc-link",{attrs:{to:"https://github.com/npm/npx"}},[e._v("npx")]),e._v(" to run quasar commands without the need of a globally installed "),t("code",{staticClass:"doc-token"},[e._v("@quasar/cli")]),e._v(".")],1),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ npx quasar dev\n")])])])},n=[],o=a("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Quasar CLI Installation",this.metaDesc="How to install the Quasar CLI on your development machine.",this.nav=[{name:"Get help!",category:"Security",path:"/security/get-help",dir:"left"},{name:"Upgrade guide",category:"Quasar CLI",path:"/quasar-cli/app-upgrade-guide",dir:"right"}],this.toc=[{id:"how-it-works",title:"How it works"}],this.copyHeading=o["a"]}},c=r,i=a("2877"),l=Object(i["a"])(c,s,n,!1,null,null,null);t["default"]=l.exports}}]);