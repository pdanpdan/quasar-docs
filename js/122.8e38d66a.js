(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[122],{"209b":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Troubleshooting and Tips",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"q-electron"},on:{click:function(s){return t.copyHeading("q-electron")}}},[t._v("$q.electron")]),e("p",[t._v("While you are developing with Electron Mode, you can access "),e("code",{staticClass:"doc-token"},[t._v("this.$q.electron")]),t._v(" in your Vue files. This is an alias to the "),e("code",{staticClass:"doc-token"},[t._v("electron")]),t._v(" Object when imported.")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimize")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("electron"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remote"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BrowserWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFocusedWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// equivalent to:")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      remote"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BrowserWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFocusedWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("div",{staticClass:"doc-note doc-note--warning"},[e("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),e("p",[t._v("Accessing "),e("code",{staticClass:"doc-token"},[t._v("this.$q.electron")]),t._v(" requires that the "),e("doc-link",{attrs:{to:"/quasar-cli/developing-electron-apps/node-integration"}},[t._v("Node Integration")]),t._v(" is kept turned “on”.")],1)]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"read-and-write-local-files"},on:{click:function(s){return t.copyHeading("read-and-write-local-files")}}},[t._v("Read & Write Local Files")]),e("p",[t._v("One great benefit of using Electron is the ability to access the user’s file system. This enables you to read and write files on the local system. To help avoid Chromium restrictions and writing to your application’s internal files, make sure to make use of electron’s APIs, specifically the app.getPath(name) function. This helper method can get you file paths to system directories such as the user’s desktop, system temporary files, etc.")]),e("p",[t._v("We can use the userData directory, which is reserved specifically for our application, so we can have confidence other programs or other user interactions should not tamper with this file space.")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" filePath "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remote"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userData'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/some.file'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"debugging-main-process"},on:{click:function(s){return t.copyHeading("debugging-main-process")}}},[t._v("Debugging Main Process")]),e("p",[t._v("When running your application in development you may have noticed a message from the main process mentioning a remote debugger. Ever since the release of electron@^1.7.2, remote debugging over the Inspect API was introduced and can be easily accessed by opening the provided link with Google Chrome or through another debugger that can remotely attach to the process using the default port of 5858, such as Visual Studio Code.")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("┏ Electron -------------------\n\n  Debugger listening on port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5858")]),t._v(".\n  Warning: This is an experimental feature and could change at any time.\n  To start debugging, "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" the following URL "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Chrome:\n      chrome-devtools://devtools/bundled/inspector.html?experiments"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("v8only")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ws")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5858/22271e96-df65-4bab-9207-da8c71117641\n\n┗ ----------------------------\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"application-does-not-open-on-windows-with-dark-theme"},on:{click:function(s){return t.copyHeading("application-does-not-open-on-windows-with-dark-theme")}}},[t._v("Application does not open on Windows with Dark Theme")]),e("p",[t._v("Some Chrome DevTools Extensions do not play well with Windows Dark Theme on electron 6+. Quasar offers a workaround in the default "),e("code",{staticClass:"doc-token"},[t._v("electron-main.js")]),t._v(", that removes the "),e("code",{staticClass:"doc-token"},[t._v("DevTools Extensions")]),t._v(" before starting the application.")]),e("pre",{pre:!0,attrs:{class:"doc-code language-javascript"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-javascript"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BrowserWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nativeTheme "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win32'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nativeTheme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shouldUseDarkColors "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlinkSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userData'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DevTools Extensions'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("p",[t._v("Please follow "),e("doc-link",{attrs:{to:"https://github.com/electron/electron/issues/19468"}},[t._v("electron bug report")]),t._v(" for more details.")],1)])},a=[],o=e("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Troubleshooting and Tips",this.metaDesc="Tips and tricks for a Quasar desktop app with Electron.",this.nav=[{name:"Electron Security Concerns",category:"Developing Electron Apps",path:"/quasar-cli/developing-electron-apps/electron-security-concerns",dir:"left"},{name:"Introduction",category:"Developing Browser Extensions",path:"/quasar-cli/developing-browser-extensions/introduction",dir:"right"}],this.toc=[{id:"q-electron",title:"$q.electron"},{id:"read-and-write-local-files",title:"Read & Write Local Files"},{id:"debugging-main-process",title:"Debugging Main Process"},{id:"application-does-not-open-on-windows-with-dark-theme",title:"Application does not open on Windows with Dark Theme"}],this.copyHeading=o["a"]}},p=r,c=e("2877"),i=Object(c["a"])(p,n,a,!1,null,null,null);s["default"]=i.exports}}]);