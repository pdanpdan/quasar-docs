(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{1452:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Layout",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[o("p",[e._v("The QLayout is a component designed to manage the entire window and wrap page content with elements such as a navigational bar or a drawer. Multiple pages can share the same QLayout, so the code is reusable, which is one of their key points.")]),o("p",[o("strong",[e._v("QLayout is NOT mandatory")]),e._v(", but it does help you to better structure your website/app. It has a number of features which offer you major benefits in simplifying your website/app’s layout design, right out of the box.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qlayout-api"},on:{click:function(t){return e.copyHeading("qlayout-api")}}},[e._v("QLayout API")]),o("doc-api",{attrs:{file:"QLayout"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"layout-builder"},on:{click:function(t){return e.copyHeading("layout-builder")}}},[e._v("Layout Builder")]),o("p",[e._v("Scaffold your layout(s) by clicking on the button below.")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("The Layout Builder might use components not already inserted into quasar.conf.js.")]),o("p",[e._v("You are likely going to need the following components - QLayout, QHeader, QToolbar, QToolbarTitle, QBtn, QAvatar, QTabs, QRouteTab, QDrawer, QPageContainer, QFooter.")])]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("Keep an eye on your developer console for handy helpers on which components are being used but not declared in your quasar.conf.js file.")])]),o("q-btn",{attrs:{push:"",color:"brand-primary","icon-right":"launch",label:"Layout Builder",href:"layout-builder",target:"_blank",rel:"noopener noreferrer"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("Using margin CSS will break the layout")]),o("p",[e._v("QLayout depends on taking up the whole screen and so QPageContainer, QHeader, QFooter and QLayoutDrawer positions are managed by it (through the "),o("code",{staticClass:"doc-token"},[e._v("view")]),e._v(" prop). You "),o("strong",[e._v("cannot")]),e._v(" use "),o("em",[e._v("CSS margins")]),e._v(" as a style neither on QLayout itself nor on any of the QLayout components mentioned above. However you can safely use "),o("em",[e._v("CSS padding")]),e._v(".")])]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("If your layout uses Vue Router sub-routes (recommended), then it makes sense to use Vue’s "),o("code",{staticClass:"doc-token"},[e._v("<router-view />")]),e._v(" component, which is just a placeholder where sub-routes are injected. For more information, please read "),o("doc-link",{attrs:{to:"/layout/routing-with-layouts-and-pages"}},[e._v("Routing with Layouts and Pages")]),e._v(".")],1)]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"understanding-the-view-prop"},on:{click:function(t){return e.copyHeading("understanding-the-view-prop")}}},[e._v("Understanding the “view” prop")]),o("p",[e._v("Quasar introduces a unique and excellent layout concept, which allows you to easily structure layouts to work in certain ways, by simply changing a short string notation.")]),o("p",[e._v("To explain how this works, imagine your Layout is a 3x3 matrix of containers (depicted in blue below). The first row of containers would be the header and the last row would be the footer. The first column of containers would be the “left” and last column would be the “right”. The center of the matrix, below the header and above the footer, would be the page or main content container.")]),o("p",[e._v("This matrix of containers or “QLayout View” can be represented by a string that you should supply to the "),o("code",{staticClass:"doc-token"},[e._v("view")]),e._v(" property of QLayout. This string must contain exactly 11 characters:")]),o("ul",[o("li",[e._v("3 defining the header row")]),o("li",[e._v("then a space")]),o("li",[e._v("3 defining the middle row")]),o("li",[e._v("a space")]),o("li",[e._v("then 3 defining the footer row")])]),o("view-prop"),o("p",[e._v("The letters shown above are also case sensitive. For example, using at least one “L” (uppercase character instead of lowercase) will make your layout left side (drawer) be in a fixed position. Same applies for “H” (header), “F” (footer) and finally “R” (right side / drawer).")]),o("view-play"),o("p",[e._v("For example, if you want your layout’s right side / drawer to be placed on the right of the header, page and footer, you’d use "),o("code",{staticClass:"doc-token"},[e._v("hhr lpr ffr")]),e._v(". If you’d like to also make it fixed, just transform one "),o("code",{staticClass:"doc-token"},[e._v("r")]),e._v(" character to uppercase, like this: "),o("code",{staticClass:"doc-token"},[e._v("hhr lpR ffr")]),e._v(", or "),o("code",{staticClass:"doc-token"},[e._v("hhR lpr ffr")]),e._v(" or "),o("code",{staticClass:"doc-token"},[e._v("hhr lpr ffR")]),e._v(".")]),o("p",[e._v("These settings are completely up to you to use as you’d like. You could even go wild with a setup like this: "),o("code",{staticClass:"doc-token"},[e._v("lhh LpR ffr")]),e._v(". Try it out!")]),o("q-btn",{attrs:{push:"",color:"red","icon-right":"launch",label:"Layout Builder",href:"layout-builder",target:"_blank",rel:"noopener noreferrer"}}),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("ul",[o("li",[e._v("It is important that you specify all sections of a QLayout, even if you don’t use them. For example, even if you don’t use footer or right side drawer, still specify them within your QLayout’s "),o("code",{staticClass:"doc-token"},[e._v("view")]),e._v(" prop.")]),o("li",[e._v("When QDrawer is set into overlay mode, "),o("strong",[e._v("it will force it to go into fixed position")]),e._v(", regardless if QLayout’s “view” prop is configured with  “l/r” or “L/R”. Also, "),o("strong",[e._v("if on iOS platform and QLayout is containerized")]),e._v(", the fixed position will also be forced upon QDrawer due to platform limitations that cannot be overcome.")])])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"containerized-qlayout"},on:{click:function(t){return e.copyHeading("containerized-qlayout")}}},[e._v("Containerized QLayout")]),o("p",[e._v("By default, QLayout is managing the entire window. However, you can also use QLayout as a container (with specific height and width) to isolate it somewhere in your pages.")]),o("div",{staticClass:"doc-note doc-note--danger"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Not supported in IE11.")])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Please note that it "),o("strong",[e._v("requires a CSS height (or min-height) being set explicitly")]),e._v(", otherwise it can’t and it won’t work.")])]),o("p",[e._v("In the example below, there is a containerized QLayout with drawers on each side (breakpoint of 700px on the left-side drawer and 500px on the right-side drawer). The breakpoint does not refer to the window width, but to the actual width of the QLayout container.")]),o("doc-example",{attrs:{title:"Containerized QLayout",file:"QLayout/Container"}}),o("doc-example",{attrs:{title:"In a QDialog",file:"QLayout/ContainerDialog"}})],1)},i=[],s=o("8669"),n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"q-mt-lg"},[o("div",{staticClass:"q-pb-xs row no-wrap items-center q-col-gutter-xs"},[o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm"},[e._v("Header")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("l/h")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("h/H")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("r/h")])])]),o("div",{staticClass:"q-pb-xs row no-wrap items-center q-col-gutter-xs"},[o("div",{staticClass:"col-3"}),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("l/L")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("p")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("r/R")])])]),o("div",{staticClass:"q-pb-xs row no-wrap items-center q-col-gutter-xs"},[o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm"},[e._v("Footer")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("l/f")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("f/F")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm bg-primary text-white flex flex-center rounded-borders"},[e._v("r/f")])])]),o("div",{staticClass:"q-pb-xs row no-wrap items-center q-col-gutter-xs"},[o("div",{staticClass:"col-3"}),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm flex flex-center"},[e._v("Left")])]),o("div",{staticClass:"col-3"}),o("div",{staticClass:"col-3"},[o("div",{staticClass:"q-pa-sm flex flex-center"},[e._v("Right")])])])])}],l=o("2877"),c={},d=Object(l["a"])(c,n,r,!1,null,null,null),u=d.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"q-mt-lg q-mb-sm rounded-borders overflow-hidden shadow-2"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"h"===e.topL?"bg-brand-primary text-white":"bg-orange text-grey-9"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"l",value:"l"},{label:"h",value:"h"}]},model:{value:e.topL,callback:function(t){e.topL=t},expression:"topL"}})],1),o("div",{staticClass:"col-6 q-pa-md flex flex-center bg-brand-primary text-white"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"h",value:"h"},{label:"H",value:"H"}]},model:{value:e.topC,callback:function(t){e.topC=t},expression:"topC"}})],1),o("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"h"===e.topR?"bg-brand-primary text-white":"bg-orange text-grey-9"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"r",value:"r"},{label:"h",value:"h"}]},model:{value:e.topR,callback:function(t){e.topR=t},expression:"topR"}})],1)]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-3 q-px-md q-py-xl flex flex-center bg-orange text-grey-9"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"l",value:"l"},{label:"L",value:"L"}]},model:{value:e.middleL,callback:function(t){e.middleL=t},expression:"middleL"}})],1),o("div",{staticClass:"col-6 q-px-md q-py-xl flex flex-center"},[e._v("\n        p\n      ")]),o("div",{staticClass:"col-3 q-px-md q-py-xl flex flex-center bg-orange text-grey-9"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"r",value:"r"},{label:"R",value:"R"}]},model:{value:e.middleR,callback:function(t){e.middleR=t},expression:"middleR"}})],1)]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"f"===e.bottomL?"bg-grey-8 text-white":"bg-orange text-grey-9"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"l",value:"l"},{label:"f",value:"f"}]},model:{value:e.bottomL,callback:function(t){e.bottomL=t},expression:"bottomL"}})],1),o("div",{staticClass:"col-6 q-pa-md flex flex-center bg-grey-8 text-white"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"f",value:"f"},{label:"F",value:"F"}]},model:{value:e.bottomC,callback:function(t){e.bottomC=t},expression:"bottomC"}})],1),o("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"f"===e.bottomR?"bg-grey-8 text-white":"bg-orange text-grey-9"},[o("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"r",value:"r"},{label:"f",value:"f"}]},model:{value:e.bottomR,callback:function(t){e.bottomR=t},expression:"bottomR"}})],1)])]),o("div",{staticClass:"flex flex-center"},[o("div",{staticClass:"q-pa-sm bg-grey-4 rounded-borders"},[e._v("\n      View: "),o("q-badge",{attrs:{label:e.view}})],1)])])},h=[],v=(o("99af"),{data:function(){return{topL:"h",topC:"H",topR:"h",middleL:"L",middleR:"r",bottomL:"f",bottomC:"F",bottomR:"f"}},computed:{view:function(){var e="".concat(this.topL).concat(this.topC).concat(this.topR),t="".concat(this.middleL,"p").concat(this.middleR),o="".concat(this.bottomL).concat(this.bottomC).concat(this.bottomR);return"".concat(e," ").concat(t," ").concat(o)}}}),g=v,y=Object(l["a"])(g,p,h,!1,null,null,null),f=y.exports,m={name:"DocMarkdownPage",components:{ViewProp:u,ViewPlay:f},created:function(){this.metaTitle="Layout",this.metaDesc="How to use the QLayout component. Manages the whole window of your Quasar app.",this.related=[{name:"Layout Header and Footer",category:"Layout and Grid",path:"/layout/header-and-footer"},{name:"Layout Drawer",category:"Layout and Grid",path:"/layout/drawer"},{name:"Layout Page",category:"Layout and Grid",path:"/layout/page"},{name:"Page Sticky",category:"Layout and Grid",path:"/layout/page-sticky"},{name:"Page Scroller",category:"Layout and Grid",path:"/layout/page-scroller"},{name:"Floating Action Button",category:"Vue Components",path:"/vue-components/floating-action-button"}],this.nav=[{name:"Flex Playground",category:"Flex Grid",path:"/layout/grid/flex-playground",dir:"left"},{name:"Routing with Layouts and Pages",category:"Layout and Grid",path:"/layout/routing-with-layouts-and-pages",dir:"right"}],this.toc=[{id:"qlayout-api",title:"QLayout API"},{id:"layout-builder",title:"Layout Builder"},{id:"usage",title:"Usage"},{id:"understanding-the-view-prop",title:"Understanding the “view” prop",sub:!0},{id:"containerized-qlayout",title:"Containerized QLayout",sub:!0}],this.copyHeading=s["a"]}},b=m,w=Object(l["a"])(b,a,i,!1,null,null,null);t["default"]=w.exports}}]);