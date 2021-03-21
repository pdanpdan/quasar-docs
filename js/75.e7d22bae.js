(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{ab4a:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("doc-page",{attrs:{title:"App CLI v2 Upgrade Guide",related:t.related,nav:t.nav}},[a("blockquote",{staticClass:"doc-note"},[a("ul",[a("li",[t._v("This guide refers to upgrading a Quasar app from "),a("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" v1 to using v2.")]),a("li",[t._v("Please note that "),a("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("quasar")]),t._v(" are different packages (one is the Quasar App CLI and one is the Quasar UI), each one with its own version.")])])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"whats-new-in-v2"},on:{click:function(s){return t.copyHeading("whats-new-in-v2")}}},[t._v("What’s new in v2")]),a("ul",[a("li",[a("doc-link",{attrs:{to:"/quasar-cli/browser-compatibility"}},[t._v("Browser compatibility")]),t._v(" is now more clearly expressed.")],1),a("li",[t._v("The JS transpilation (with the help of Babel) has been rethought from the ground up (now using core-js v3). It will now transpile based on the "),a("doc-link",{attrs:{to:"/quasar-cli/browser-compatibility"}},[t._v("Browser compatibility")]),t._v(" that you configure. It will no longer go transpiling directly to ES5, but it will look for exactly what JS features need transpiling based on the configured browsers. Be mindful about it though, as it is sufficient to add one “bad apple” in the options list and that will dumb down your code back to ES5.")],1),a("li",[t._v("The “modern build” is no longer necessary due to the above. However, if you want to disable transpiling (it’s perfectly equivalent), now you can: quasar.conf.js > build > transpile: false.")]),a("li",[t._v("Support for a "),a("code",{staticClass:"doc-token"},[t._v("/public")]),t._v(" folder which replaces "),a("code",{staticClass:"doc-token"},[t._v("/src/statics")]),t._v(". The new folder will allow you to supply static content at the root/app base level, rather than as statics/*. One useful example: robots.txt")]),a("li",[t._v("SSR mode now supports a custom publicPath too")]),a("li",[t._v("The configured publicPath is now applied to dev mode by default")]),a("li",[t._v("Capacitor v2 and Workbox v5 support")]),a("li",[t._v("Simpler quasar.conf.js > build > transpileDependencies; it now supports String (auto transforms it to `/node_modules/…') and Regexes too")]),a("li",[t._v("Simpler quasar.conf.js > build > env; you no longer need to JSON.stringify each value (you now must not!)")]),a("li",[t._v("Simpler quasar.conf.js > framework config Object; “all” prop has been renamed to “importStrategy” and it allows “all” or “auto” (the default) values")]),a("li",[t._v("New param for boot files and preFetch (publicPath); the “redirect()” method now fully supports a Vue Router location Object (on all build modes, on server-side or client-side); preFetch hook now also receive “urlPath” param")]),a("li",[t._v("New API method for App Extension’s install script: api.renderFile()")]),a("li",[t._v("Temporarily removed quasar.conf.js > build > preloadChunks (until compatibility is ensured with html-webpack-plugin v4)")]),a("li",[t._v("Upgraded to latest version of Typescript (v3.9.5 as of writing these lines; will also require “quasar” v1.12.6)")]),a("li",[t._v("Lots of other improvements and fixes")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"upgrade-guide"},on:{click:function(s){return t.copyHeading("upgrade-guide")}}},[t._v("Upgrade Guide")]),a("p",[t._v("Following this guide should take you at most 5 minutes to complete.")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"required-steps"},on:{click:function(s){return t.copyHeading("required-steps")}}},[t._v("Required steps")]),a("ul",[a("li",[a("p",[t._v("Dependencies")]),a("ul",[a("li",[t._v("remove “resolutions” > “@babel/parser” if it’s in your "),a("code",{staticClass:"doc-token"},[t._v("/package.json")])]),a("li",[t._v("Manually yarn/npm install @quasar/app v2: "),a("code",{staticClass:"doc-token"},[t._v("yarn add --dev @quasar/app@^2.0.0")]),t._v(" (or "),a("code",{staticClass:"doc-token"},[t._v("npm install --save-dev @quasar/app@^2.0.0")]),t._v(").")]),a("li",[t._v("if you are using PWA (or SSR+PWA) mode, you’ll also need to install workbox-webpack-plugin@^5.0.0 (or ^4.0.0 – v4 came with @quasar/app v1) – this package is no longer supplied by “@quasar/app”: "),a("code",{staticClass:"doc-token"},[t._v("yarn add --dev workbox-webpack-plugin@^5.0.0")]),t._v(" (or "),a("code",{staticClass:"doc-token"},[t._v("npm install --save-dev workbox-webpack-plugin@^5.0.0")]),t._v(")")]),a("li",[t._v("yarn/npm install core-js v3: "),a("code",{staticClass:"doc-token"},[t._v("yarn add core-js@^3.0.0")]),t._v(" (or "),a("code",{staticClass:"doc-token"},[t._v("npm install core-js@^3.0.0")]),t._v(")")]),a("li",[t._v("IMPORTANT: Run "),a("code",{staticClass:"doc-token"},[t._v("quasar upgrade -i")]),t._v(" to ensure the latest versions of all Quasar packages are installed")])])]),a("li",[a("p",[t._v("Edit your "),a("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" file:")]),a("ul",[a("li",[t._v("rename “all” to “importStrategy” (valid values: ‘auto’ or ‘all’; ‘auto’ is the default)")]),a("li",[t._v("remove “supportIE” (it’s now handled through package.json > browserslist)")]),a("li",[t._v("remove “build” > “modern” if it’s there (no longer needed due to the superior "),a("doc-link",{attrs:{to:"/quasar-cli/browser-compatibility"}},[t._v("browser compatibility")]),t._v(" strategy)")],1),a("li",[t._v("remove “build” > “webpackManifest” and “forceDevPublicPath” (no longer used/necessary)")]),a("li",[t._v("edit your “build” > “env”: remove the use of JSON.stringify(); instead of "),a("code",{staticClass:"doc-token"},[t._v("someProp: JSON.stringify('some-value')")]),t._v(" -> "),a("code",{staticClass:"doc-token"},[t._v("someProp: 'some-value'")])]),a("li",[t._v("remove “build” > “preloadChunk” (temporarily removed until it’s compatible with html-webpack-plugin v4)")])])]),a("li",[a("p",[t._v("Edit your "),a("code",{staticClass:"doc-token"},[t._v("/package.json")]),t._v(" file:")]),a("ul",[a("li",[t._v("remove “cordovaId” and “capacitorId” if they are there")]),a("li",[t._v("update “browserslist”; "),a("doc-link",{attrs:{to:"/quasar-cli/browser-compatibility"}},[t._v("what it does")]),t._v("; get inspired from the default value which is:")],1)]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browserslist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 10 Chrome versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 10 Firefox versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 4 Edge versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 7 Safari versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 8 Android versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 8 ChromeAndroid versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 8 FirefoxAndroid versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 10 iOS versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 5 Opera versions"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("p",[t._v("IE11 support is now enabled only if “browserslist” contains it ("),a("code",{staticClass:"doc-token"},[t._v("ie 11")]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v("ie >= 11")]),t._v(") or if any of your queries silently includes it (example: "),a("code",{staticClass:"doc-token"},[t._v("> 0.5%")]),t._v(").")])]),a("li",[a("p",[t._v("Update to the newly "),a("code",{staticClass:"doc-token"},[t._v("/public")]),t._v(" folder (which replaces the old "),a("code",{staticClass:"doc-token"},[t._v("/src/statics")]),t._v("):")]),a("ul",[a("li",[t._v("do a global search and replace for “statics/” and replace with “” (empty string), including in "),a("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(".")]),a("li",[t._v("move "),a("code",{staticClass:"doc-token"},[t._v("/src/statics/*")]),t._v(" to "),a("code",{staticClass:"doc-token"},[t._v("/public/*")]),t._v("; then move “/public/icons/favicon.ico” directly under “/public”")])])]),a("li",[a("p",[t._v("Edit your "),a("code",{staticClass:"doc-token"},[t._v("/src/index.template.html")]),t._v(" file:")]),a("ul",[a("li",[t._v("search for “htmlWebpackPlugin.options.” and replace with “” (empty string)")]),a("li",[t._v("update the favicon.ico "),a("code",{staticClass:"doc-token"},[t._v("<link>")]),t._v(" to point to "),a("code",{staticClass:"doc-token"},[t._v('href="favicon.ico"')]),t._v(" instead of “statics/icons/favicon.ico” (some browsers or tools require a favicon.ico to be present at root level, which is one of the things that q/app v2 can now offer)")])])]),a("li",[a("p",[t._v("You can upgrade your /src-capacitor dependencies to Capacitor v2 (which supports Android X); full support is included (thanks to help from Capacitor team) for both versions now; please review the Capacitor (v1 to v2) upgrade guide too! helpful links: "),a("doc-link",{attrs:{to:"https://ionicframework.com/blog/announcing-capacitor-2-0/"}},[t._v("announcement on capacitor v2")]),t._v(", "),a("doc-link",{attrs:{to:"https://capacitor.ionicframework.com/docs/android/updating/#from-1-5-1-to-2-0-0"}},[t._v("upgrade guide")]),t._v(", "),a("doc-link",{attrs:{to:"https://github.com/ionic-team/capacitor/releases/tag/2.0.0"}},[t._v("release notes")])],1)]),a("li",[a("p",[t._v("For Typescript devs: Make sure that you also upgrade the "),a("code",{staticClass:"doc-token"},[t._v("quasar")]),t._v(" package to v.12.6+. Internal types of features related only to Quasar CLI (eg. "),a("code",{staticClass:"doc-token"},[t._v("BootFileParams")]),t._v(") have been moved under "),a("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" (previously they were provided by "),a("code",{staticClass:"doc-token"},[t._v("quasar")]),t._v(" package). If you have any reference to them in your code, change the import statement to use "),a("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" or consider switching to use the much cleaner wrapper functions provided by "),a("code",{staticClass:"doc-token"},[t._v("quasar/wrappers")])])]),a("li",[a("p",[t._v("The "),a("code",{staticClass:"doc-token"},[t._v("webpack-html-plugin")]),t._v(" package has been upgraded to v4; if you have tampered with the default config for it, please "),a("doc-link",{attrs:{to:"https://github.com/jantimon/html-webpack-plugin/blob/master/CHANGELOG.md#400-2020-03-23"}},[t._v("review it")])],1)]),a("li",[a("p",[t._v("The "),a("code",{staticClass:"doc-token"},[t._v("copy-webpack-plugin")]),t._v(" package has been upgraded to v6; if you have tampered with the default config for it, please "),a("doc-link",{attrs:{to:"https://github.com/webpack-contrib/copy-webpack-plugin/blob/master/CHANGELOG.md#600-2020-05-15"}},[t._v("review it")])],1)]),a("li",[a("p",[t._v("If you’re building with SSR mode, then custom publicPath can now be used, but it requires a small change to all your app.use() statements:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for ALL app.use() statements")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in /src-ssr/ files:")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from:")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<path>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to:")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<path>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("li",[a("p",[t._v("If you are building with Electron replace "),a("code",{staticClass:"doc-token"},[t._v("QUASAR_NODE_INTEGRATION")]),t._v(" in your main thread file (/src-electron/main-process/main.js) with "),a("code",{staticClass:"doc-token"},[t._v("process.env.QUASAR_NODE_INTEGRATION")]),t._v(" (if it is present)")])]),a("li",[a("p",[t._v("Also, if using Electron, make the following replacement in your /src-electron/main-process/main.js:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OLD way")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PROD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__statics "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'statics'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\\\")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NEW way (replace above with this)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PROD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__statics "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __dirname\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"optional-steps"},on:{click:function(s){return t.copyHeading("optional-steps")}}},[t._v("Optional steps")]),a("p",[t._v("The following steps are optional, but recommended.")]),a("ul",[a("li",[a("p",[t._v("If you are using "),a("doc-link",{attrs:{to:"/icongenie/introduction"}},[t._v("IconGenie CLI")]),t._v(" then please upgrade it to v2.3+ which introduces support for @quasar/app v2 projects.")],1)]),a("li",[a("p",[t._v("Edit your "),a("code",{staticClass:"doc-token"},[t._v("/src/router/routes.js")]),t._v(" file:")]),a("p",[t._v("Instead of:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Always leave this as last one")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MODE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ssr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/Error404.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("…place this:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Always leave this as last one")]),t._v("\nroutes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/Error404.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])},n=[],o=a("8669"),r="App CLI v2 Upgrade Guide | Quasar Framework",p="How to upgrade a Quasar app to @quasar/app v2.",i={meta:{title:"App CLI v2 Upgrade Guide",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created:function(){this.$root.store.toc=[{id:"whats-new-in-v2",title:"What’s new in v2"},{id:"upgrade-guide",title:"Upgrade Guide"},{id:"required-steps",title:"Required steps",sub:!0},{id:"optional-steps",title:"Optional steps",sub:!0}],this.related=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],this.nav=[{name:"Installation",category:"Quasar CLI",path:"/quasar-cli/installation",dir:"left"},{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js",dir:"right"}]},methods:{copyHeading:o["a"]}},c=i,l=a("2877"),v=Object(l["a"])(c,e,n,!1,null,null,null);s["default"]=v.exports}}]);