(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[95],{7214:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t._self._c;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"App Icons for Capacitor",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("Capacitor is one of the most complicated of all of the build targets as far as icons go, because not only do you need to place the icons in specific folders, you also need to register them in config files for both platforms (Android, iOS).")]),a("p",[t._v("If you discover one file that is new or missing, please "),a("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/issues"}},[t._v("open an issue")]),t._v(".")],1),a("img",{staticStyle:{float:"right","max-width":"15%","min-width":"240px","padding-top":"40px"},attrs:{src:"https://cdn.quasar.dev/img/iconfactory.png"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"icon-genie-cli"},on:{click:function(a){return t.copyHeading("icon-genie-cli")}}},[t._v("Icon Genie CLI")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("We highly recommend using the "),a("doc-link",{attrs:{to:"/icongenie/introduction"}},[t._v("Icon Genie CLI")]),t._v(", because it consumes a source icon and automatically clones, scales, minifies and places the icons in the appropriate directories for you. When needed, it also tells you what tags you’ll need to add to your /src/index.template.html file.")],1)]),a("p",[t._v("Quickly bootstrap the necessary images with Icon Genie CLI. For a complete list of options, please visit the "),a("doc-link",{attrs:{to:"/icongenie/command-list"}},[t._v("Icon Genie CLI")]),t._v(" command list page.")],1),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ icongenie generate -m capacitor -i /path/to/source/icon.png "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b /path/to/background.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("p",[t._v("Depending on what packager (electron-packager or electron-builder) you will be using, please see their docs on how to hook the icons.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"manual-instructions"},on:{click:function(a){return t.copyHeading("manual-instructions")}}},[t._v("Manual instructions")]),a("p",[t._v("Unless you are using the Icon Genie app extension, these are the files that you need to replace:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n├── android\n│   └── app\n│       └── src\n│           └── main\n│               └── res\n│                   ├── drawable\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xhdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxhdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   └── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxxhdpi\n│                       ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                       ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                       └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n└── ios\n    └── App\n        └── App\n            └── Assets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xcassets\n                ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appiconset\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("20x20@1x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("20x20@2x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("20x20@2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("20x20@3x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("29x29@1x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("29x29@2x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("29x29@2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("29x29@3x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("40x40@1x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("40x40@2x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("40x40@2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("40x40@3x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("@2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("60x60@2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("60x60@3x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("76x76@1x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("76x76@2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   └── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("83")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("5x83"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("@2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                └── Splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageset\n                    ├── splash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("2732x2732"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                    ├── splash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("2732x2732"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                    └── splash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("2732x2732"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n")])])])},p=[],e=n("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="App Icons for Capacitor",this.metaDesc="How to manage the app icons for a Quasar hybrid mobile app with Capacitor.",this.nav=[{name:"Configuring Capacitor",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/configuring-capacitor",dir:"left"},{name:"Capacitor API",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/capacitor-api",dir:"right"}],this.toc=[{id:"icon-genie-cli",title:"Icon Genie CLI"},{id:"manual-instructions",title:"Manual instructions"}],this.copyHeading=e["a"]}},o=r,c=n("2877"),i=Object(c["a"])(o,s,p,!1,null,null,null);a["default"]=i.exports}}]);