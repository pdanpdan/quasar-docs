(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[150],{d5a2:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Directory Structure",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[e("p",[t._v("This is the structure of a project with all modes installed. There’s no reason to be intimidated though!")]),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("If you are a beginner, all you’ll need to care about is "),e("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" (Quasar App Config file), "),e("code",{staticClass:"doc-token"},[t._v("/src/router")]),t._v(", "),e("code",{staticClass:"doc-token"},[t._v("/src/layouts")]),t._v(", "),e("code",{staticClass:"doc-token"},[t._v("/src/pages")]),t._v(" and optionally "),e("code",{staticClass:"doc-token"},[t._v("/src/assets")]),t._v(".")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── public/                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pure static assets (directly copied)")]),t._v("\n├── src/\n│   ├── assets/              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dynamic assets (processed by webpack)")]),t._v("\n│   ├── components/          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .vue components used in pages & layouts")]),t._v("\n│   ├── css/                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CSS/Stylus/Sass/... files for your app")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── app.styl\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   └── quasar.variables.styl "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Quasar Stylus variables for you to tweak")]),t._v("\n│   ├── layouts/             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# layout .vue files")]),t._v("\n│   ├── pages/               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# page .vue files")]),t._v("\n│   ├── boot/                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# boot files (app initialization code)")]),t._v("\n│   ├── router/              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vue Router")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── index.js         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vue Router definition")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   └── routes.js        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App Routes definitions")]),t._v("\n│   ├── store/               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── index.js         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store definition")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   ├── "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store Module...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   └── "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store Module...")]),t._v("\n│   ├── App.vue              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# root Vue component of your App")]),t._v("\n│   └── index.template.html  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Template for index.html")]),t._v("\n├── src-ssr/                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSR specific code (like production Node webserver)")]),t._v("\n├── src-pwa/                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PWA specific code (like Service Worker)")]),t._v("\n├── src-cordova/             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Cordova generated folder used to create Mobile Apps")]),t._v("\n├── src-electron/            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Electron specific code (like "main" thread)')]),t._v("\n├── src-bex/                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# BEX (browser extension) specific code (like "main" thread)')]),t._v("\n├── dist/                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# where production builds go")]),t._v("\n│   ├── spa/                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example when building SPA")]),t._v("\n│   ├── ssr/                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example when building SSR")]),t._v("\n│   ├── electron/            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example when building Electron")]),t._v("\n│   └── "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n├── quasar.conf.js           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Quasar App Config file")]),t._v("\n├── babel.config.js          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Babeljs config")]),t._v("\n├── .editorconfig            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# editor config")]),t._v("\n├── .eslintignore            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ESlint ignore paths")]),t._v("\n├── .eslintrc.js             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ESlint config")]),t._v("\n├── .postcssrc.js            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PostCSS config")]),t._v("\n├── .stylintrc               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stylus lint config")]),t._v("\n├── .gitignore               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GIT ignore paths")]),t._v("\n├── package.json             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm scripts and dependencies")]),t._v("\n└── README.md                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# readme for your website/App")]),t._v("\n")])])])},n=[],o=s("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Directory Structure",this.metaDesc="The structure of a Quasar app with explanations for each folder and file.",this.nav=[{name:"Supporting TypeScript",category:"Quasar CLI",path:"/quasar-cli/supporting-ts",dir:"left"},{name:"Build Commands",category:"Quasar CLI",path:"/quasar-cli/build-commands",dir:"right"}],this.toc=[],this.copyHeading=o["a"]}},c=r,p=s("2877"),l=Object(p["a"])(c,a,n,!1,null,null,null);e["default"]=l.exports}}]);