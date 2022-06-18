(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"997a":function(t,a,s){},b44e:function(t,a,s){"use strict";s("997a")},e537:function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Theming",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[s("p",[t._v("One of the most important parts of a website/app is to build a brand for it. First step is to choose the brand colors that you are going to use and this is what the tool below helps you with.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"theme-builder"},on:{click:function(a){return t.copyHeading("theme-builder")}}},[t._v("Theme Builder")]),s("p",[t._v("Click on the colored buttons besides the layout below and when you are ready, hit the "),s("code",{staticClass:"doc-token"},[t._v("Export")]),t._v(" button at the bottom. Recommended way is to go with the Sass/SCSS form.")]),s("theme-builder",{staticClass:"q-py-lg"}),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIPS")]),s("ul",[s("li",[t._v("Sass/SCSS is only available if you have Quasar v1.1.1+ and your project is managed by Quasar CLI through @quasar/app v1.1+.")]),s("li",[s("code",{staticClass:"doc-token"},[t._v("dark")]),t._v(" was added in Quasar v1.3.")])])])],1)},e=[],n=s("8669"),c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"theme-picker"}},[s("div",{staticClass:"row items-stretch"},[s("div",{class:t.$q.screen.gt.xs?"column q-gutter-md":"row q-gutter-sm q-mb-md"},t._l(t.list,(function(a){return s("q-btn",{key:"picker-"+a,attrs:{color:a,"text-color":!0===t.dark[a]?"white":"black","no-caps":"",glossy:"",unelevated:""}},[s("div",{staticClass:"text-caption text-weight-light"},[s("div",{staticClass:"text-capitalize"},[t._v(t._s(a))]),s("div",[t._v(t._s(t.colors[a]))])]),s("q-menu",{attrs:{anchor:"top start",self:"top start"}},[s("q-color",{model:{value:t.colors[a],callback:function(s){t.$set(t.colors,a,s)},expression:"colors[color]"}})],1)],1)})),1),s("div",{staticClass:"col",class:t.$q.screen.gt.xs?"q-pl-md":""},[s("div",{staticClass:"relative-position fit rounded-borders shadow-2 bg-white overflow-hidden",class:t.pageClass},[s("div",{class:"bg-primary text-"+(!0===t.dark.primary?"white shadow-2":"black")},[s("q-bar",{attrs:{dense:"",dark:t.dark.primary}},[s("q-space"),s("q-icon",{staticClass:"q-mr-xs",staticStyle:{opacity:"0.5"},attrs:{name:t.fasSquare,size:"12px"}}),s("q-icon",{staticClass:"q-mr-xs",staticStyle:{opacity:"0.5"},attrs:{name:t.fasCircle,size:"12px"}}),s("q-icon",{staticClass:"q-mr-sm rotate-90",staticStyle:{opacity:"0.5"},attrs:{name:t.fasPlay,size:"12px"}})],1),s("q-toolbar",[s("q-btn",{attrs:{flat:"",dense:"",round:"",icon:t.mdiArrowLeft}}),s("q-space"),s("q-toggle",{staticClass:"q-mr-sm",attrs:{dense:"",dark:t.dark.primary,color:"red",label:"Dark page"},model:{value:t.darkMode,callback:function(a){t.darkMode=a},expression:"darkMode"}}),s("q-btn",{attrs:{flat:"",dense:"",round:"",icon:t.mdiMagnify}}),s("q-btn",{attrs:{flat:"",dense:"",round:"",icon:t.mdiMenu}})],1),s("q-toolbar",{attrs:{inset:""}},[s("q-toolbar-title",[t._v("Quasar")])],1)],1),s("div",{staticClass:"q-px-md q-py-lg"},[s("div",{staticClass:"row q-col-gutter-md"},t._l(t.sideColors,(function(a){return s("div",{key:"card-"+a,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3"},[s("q-card",{class:"bg-"+a+" text-"+(!0===t.dark[a]?"white":"black"),attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"text-h6 row no-wrap items-center"},[s("div",{staticClass:"ellipsis text-capitalize"},[t._v(t._s(a))]),s("q-space"),"secondary"!==a&&"dark"!==a?s("q-icon",{attrs:{name:t.$q.iconSet.type[a],size:"24px"}}):t._e()],1)]),s("q-card-section",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")])],1)],1)})),0),s("q-btn",{staticClass:"absolute",staticStyle:{bottom:"16px",right:"16px"},attrs:{fab:"",icon:t.mdiMapMarkerRadius,color:"accent","text-color":!0===t.dark.accent?"white":"black"}})],1)])])]),s("q-separator",{staticClass:"q-mt-lg q-mb-sm"}),s("div",{staticClass:"col-12 row items-center justify-end q-gutter-md"},[s("q-btn",{attrs:{color:"black",label:"Export"},on:{click:function(a){t.exportDialog=!0}}})],1),s("q-dialog",{model:{value:t.exportDialog,callback:function(a){t.exportDialog=a},expression:"exportDialog"}},[s("q-card",[s("q-tabs",{staticClass:"text-grey-7",attrs:{"active-color":"brand-primary",align:"justify"},model:{value:t.exportTab,callback:function(a){t.exportTab=a},expression:"exportTab"}},[s("q-tab",{attrs:{name:"sass","no-caps":"",label:"Sass"}}),s("q-tab",{attrs:{name:"scss","no-caps":"",label:"SCSS"}}),s("q-tab",{attrs:{name:"styl","no-caps":"",label:"Stylus"}}),s("q-tab",{attrs:{name:"quasar-cli","no-caps":"",label:"Quasar CLI"}}),s("q-tab",{attrs:{name:"umd","no-caps":"",label:"UMD"}}),s("q-tab",{attrs:{name:"vue-cli","no-caps":"",label:"Vue CLI"}})],1),s("q-separator"),s("q-tab-panels",{staticClass:"bg-code",attrs:{animated:""},model:{value:t.exportTab,callback:function(a){t.exportTab=a},expression:"exportTab"}},[s("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"sass"}},[s("doc-code",{attrs:{copy:"",code:t.sassExport}})],1),s("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"scss"}},[s("doc-code",{attrs:{copy:"",code:t.scssExport}})],1),s("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"styl"}},[s("doc-code",{attrs:{copy:"",code:t.stylusExport}})],1),s("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"quasar-cli"}},[s("doc-code",{attrs:{copy:"",code:t.quasarCliExport}})],1),s("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"umd"}},[s("doc-code",{attrs:{copy:"",code:t.umdExport}})],1),s("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"vue-cli"}},[s("doc-code",{attrs:{copy:"",code:t.vueCliExport}})],1)],1),s("q-separator"),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"brand-primary",flat:"",label:"Close"}})],1)],1)],1)],1)},r=[],i=(s("d3b7"),s("159b"),s("99af"),s("b178")),l=s("e821"),d=s("bc01"),p=i["k"].setBrand,h=i["k"].luminosity,u={created:function(){var t=this;this.fasSquare=l["z"],this.fasCircle=l["s"],this.fasPlay=l["x"],this.mdiArrowLeft=d["f"],this.mdiMagnify=d["vb"],this.mdiMenu=d["xb"],this.mdiMapMarkerRadius=d["wb"],this.watcherList=[],this.list.forEach((function(a){t.watcherList.push(t.$watch((function(){return t.colors[a]}),(function(s){t.update(a,s)})))}))},beforeDestroy:function(){this.watcherList.forEach((function(t){t()}))},data:function(){return{colors:{primary:"#027BE3",secondary:"#26A69A",accent:"#9C27B0",dark:"#1d1d1d","dark-page":"#121212",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"},dark:{primary:!0,secondary:!0,accent:!0,dark:!0,"dark-page":!0,positive:!0,negative:!0,info:!1,warning:!1},darkMode:!1,exportDialog:!1,exportTab:"sass",list:["primary","secondary","accent","dark","dark-page","positive","negative","info","warning"],sideColors:["secondary","dark","positive","negative","info","warning"]}},computed:{pageClass:function(){return!0===this.darkMode?"bg-dark-page text-white":"bg-white text-black"},sassExport:function(){return"// src/css/quasar.variables.sass\n\n"+"$primary   : ".concat(this.colors.primary,"\n")+"$secondary : ".concat(this.colors.secondary,"\n")+"$accent    : ".concat(this.colors.accent,"\n\n")+"$dark      : ".concat(this.colors.dark,"\n")+"$dark-page : ".concat(this.colors["dark-page"],"\n\n")+"$positive  : ".concat(this.colors.positive,"\n")+"$negative  : ".concat(this.colors.negative,"\n")+"$info      : ".concat(this.colors.info,"\n")+"$warning   : ".concat(this.colors.warning)},scssExport:function(){return"// src/css/quasar.variables.scss\n\n"+"$primary   : ".concat(this.colors.primary,";\n")+"$secondary : ".concat(this.colors.secondary,";\n")+"$accent    : ".concat(this.colors.accent,";\n\n")+"$dark      : ".concat(this.colors.dark,";\n")+"$dark-page : ".concat(this.colors["dark-page"],";\n\n")+"$positive  : ".concat(this.colors.positive,";\n")+"$negative  : ".concat(this.colors.negative,";\n")+"$info      : ".concat(this.colors.info,";\n")+"$warning   : ".concat(this.colors.warning,";")},stylusExport:function(){return"// src/css/quasar.variables.styl\n\n"+"$primary   = ".concat(this.colors.primary,"\n")+"$secondary = ".concat(this.colors.secondary,"\n")+"$accent    = ".concat(this.colors.accent,"\n\n")+"$dark      = ".concat(this.colors.dark,"\n")+"$dark-page = ".concat(this.colors["dark-page"],"\n\n")+"$positive  = ".concat(this.colors.positive,"\n")+"$negative  = ".concat(this.colors.negative,"\n")+"$info      = ".concat(this.colors.info,"\n")+"$warning   = ".concat(this.colors.warning)},quasarCliExport:function(){return"// quasar.conf.js\n// (will not work for IE11)\n\nreturn {\n  framework: {\n    config: {\n      brand: {\n        primary: '".concat(this.colors.primary,"',\n        secondary: '").concat(this.colors.secondary,"',\n        accent: '").concat(this.colors.accent,"',\n\n        dark: '").concat(this.colors.dark,"',\n        'dark-page': '").concat(this.colors["dark-page"],"',\n\n        positive: '").concat(this.colors.positive,"',\n        negative: '").concat(this.colors.negative,"',\n        info: '").concat(this.colors.info,"',\n        warning: '").concat(this.colors.warning,"'\n      }\n    }\n  }\n}")},umdExport:function(){return"// place before including Quasar UMD script\n// (will not work for IE11)\n\nwindow.quasarConfig = {\n  brand: {\n    primary: '".concat(this.colors.primary,"',\n    secondary: '").concat(this.colors.secondary,"',\n    accent: '").concat(this.colors.accent,"',\n\n    dark: '").concat(this.colors.dark,"',\n    'dark-page': '").concat(this.colors["dark-page"],"',\n\n    positive: '").concat(this.colors.positive,"',\n    negative: '").concat(this.colors.negative,"',\n    info: '").concat(this.colors.info,"',\n    warning: '").concat(this.colors.warning,"'\n  }\n}")},vueCliExport:function(){return"// main.js\n// (will not work for IE11)\n\nVue.use(Quasar, {\n  config: {\n    brand: {\n      primary: '".concat(this.colors.primary,"',\n      secondary: '").concat(this.colors.secondary,"',\n      accent: '").concat(this.colors.accent,"',\n\n      dark: '").concat(this.colors.dark,"',\n      'dark-page': '").concat(this.colors["dark-page"],"',\n\n      positive: '").concat(this.colors.positive,"',\n      negative: '").concat(this.colors.negative,"',\n      info: '").concat(this.colors.info,"',\n      warning: '").concat(this.colors.warning,"'\n    }\n  }\n})")}},methods:{update:function(t,a){p(t,a,document.getElementById("theme-picker")),this.dark[t]=h(a)<=.4}}},m=u,g=(s("b44e"),s("2877")),b=Object(g["a"])(m,c,r,!1,null,null,null),y=b.exports,v={name:"DocMarkdownPage",components:{ThemeBuilder:y},created:function(){this.metaTitle="Theming",this.metaDesc="Theme builder for a Quasar app with which you can play with the brand colors.",this.related=[{name:"Dark Mode",category:"Style & Identity",path:"/style/dark-mode"}],this.nav=[{name:"Color Palette",category:"Style & Identity",path:"/style/color-palette",dir:"left"},{name:"Dark Mode",category:"Style & Identity",path:"/style/dark-mode",dir:"right"}],this.toc=[{id:"theme-builder",title:"Theme Builder"}],this.copyHeading=n["a"]}},f=v,k=Object(g["a"])(f,o,e,!1,null,null,null);a["default"]=k.exports}}]);