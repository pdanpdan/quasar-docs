(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"8c36":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:e.view}},[e.pick.header?a("q-header",{attrs:{reveal:e.cfg.headerReveal,elevated:"elevated"===e.cfg.headerSep,bordered:"bordered"===e.cfg.headerSep,"height-hint":"98"},model:{value:e.play.header,callback:function(t){e.$set(e.play,"header",t)},expression:"play.header"}},[a("q-toolbar",[e.pick.left?a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:e.mdiMenu},on:{click:function(t){e.play.left=!e.play.left}}}):e._e(),a("q-toolbar-title",[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg"}})]),e._v("\n        Layout Builder\n      ")],1),e.pick.right?a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:e.mdiMenu},on:{click:function(t){e.play.right=!e.play.right}}}):e._e()],1),e.pick.navtabs?a("q-tabs",{attrs:{align:"left"},model:{value:e.navTabModel,callback:function(t){e.navTabModel=t},expression:"navTabModel"}},[a("q-tab",{attrs:{name:"tab1",label:"Tab One"}}),a("q-tab",{attrs:{name:"tab2",label:"Tab Two"}}),a("q-tab",{attrs:{name:"tab3",label:"Tab Three"}})],1):e._e()],1):e._e(),a("q-page-container",[a("q-page",{staticClass:"flex justify-center items-start",attrs:{padding:""}},[a("q-stepper",{ref:"stepper",staticStyle:{"max-width":"600px"},attrs:{animated:"","header-nav":"",flat:"",bordered:"","alternative-labels":"",contracted:e.isContracted,color:"secondary"},scopedSlots:e._u([{key:"navigation",fn:function(){return[a("q-stepper-navigation",[a("q-separator",{attrs:{spaced:""}}),a("div",{staticClass:"row q-col-gutter-sm"},["play"!==e.step?a("div",{staticClass:"col-12 col-sm-auto"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"Continue"},on:{click:function(t){return e.$refs.stepper.next()}}})],1):e._e(),a("div",{staticClass:"col-12 col-sm-auto"},[a("q-btn",{staticClass:"full-width",attrs:{color:"black",label:"Export Layout"},on:{click:function(t){e.exportDialog=!0}}})],1)])],1)]},proxy:!0}]),model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("q-step",{attrs:{name:"pick",title:"Pick Layout Parts",icon:e.mdiViewDashboard}},[a("div",{staticClass:"column"},[a("q-toggle",{attrs:{label:"I want a QHeader"},model:{value:e.pick.header,callback:function(t){e.$set(e.pick,"header",t)},expression:"pick.header"}}),a("q-toggle",{attrs:{label:"I want a QFooter"},model:{value:e.pick.footer,callback:function(t){e.$set(e.pick,"footer",t)},expression:"pick.footer"}}),a("q-toggle",{attrs:{label:"I want a left-side QDrawer"},model:{value:e.pick.left,callback:function(t){e.$set(e.pick,"left",t)},expression:"pick.left"}}),a("q-toggle",{attrs:{label:"I want a right-side QDrawer"},model:{value:e.pick.right,callback:function(t){e.$set(e.pick,"right",t)},expression:"pick.right"}}),a("q-toggle",{attrs:{disable:!e.pick.header,label:"I want navigation tabs (requires QHeader)"},model:{value:e.pick.navtabs,callback:function(t){e.$set(e.pick,"navtabs",t)},expression:"pick.navtabs"}})],1)]),a("q-step",{staticClass:"q-pb-lg",attrs:{name:"cfg",title:"Configure Layout Parts",icon:e.mdiCog}},[a("div",{staticClass:"q-mb-md text-grey-8"},[e._v('Layout "View"')]),a("div",{staticClass:"q-mb-lg rounded-borders overflow-hidden shadow-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"h"===e.topL?"bg-primary text-white":"bg-orange text-grey-9"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"l",value:"l"},{label:"h",value:"h"}]},model:{value:e.topL,callback:function(t){e.topL=t},expression:"topL"}})],1),a("div",{staticClass:"col-6 q-pa-md flex flex-center bg-primary text-white"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"h",value:"h"},{label:"H",value:"H"}]},model:{value:e.topC,callback:function(t){e.topC=t},expression:"topC"}})],1),a("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"h"===e.topR?"bg-primary text-white":"bg-orange text-grey-9"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"r",value:"r"},{label:"h",value:"h"}]},model:{value:e.topR,callback:function(t){e.topR=t},expression:"topR"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 q-px-md q-py-xl flex flex-center bg-orange text-grey-9"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"l",value:"l"},{label:"L",value:"L"}]},model:{value:e.middleL,callback:function(t){e.middleL=t},expression:"middleL"}})],1),a("div",{staticClass:"col-6 q-px-md q-py-xl flex flex-center"},[e._v("\n                Page\n              ")]),a("div",{staticClass:"col-3 q-px-md q-py-xl flex flex-center bg-orange text-grey-9"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"r",value:"r"},{label:"R",value:"R"}]},model:{value:e.middleR,callback:function(t){e.middleR=t},expression:"middleR"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"f"===e.bottomL?"bg-grey-8 text-white":"bg-orange text-grey-9"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"l",value:"l"},{label:"f",value:"f"}]},model:{value:e.bottomL,callback:function(t){e.bottomL=t},expression:"bottomL"}})],1),a("div",{staticClass:"col-6 q-pa-md flex flex-center bg-grey-8 text-white"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"f",value:"f"},{label:"F",value:"F"}]},model:{value:e.bottomC,callback:function(t){e.bottomC=t},expression:"bottomC"}})],1),a("div",{staticClass:"col-3 q-pa-md flex flex-center",class:"f"===e.bottomR?"bg-grey-8 text-white":"bg-orange text-grey-9"},[a("q-option-group",{attrs:{inline:"",color:"white","keep-color":"",dense:"",options:[{label:"r",value:"r"},{label:"f",value:"f"}]},model:{value:e.bottomR,callback:function(t){e.bottomR=t},expression:"bottomR"}})],1)])]),e.pick.header?[a("div",{staticClass:"q-pt-lg q-pb-sm text-grey-8"},[e._v("Header")]),a("div",{staticClass:"q-pl-lg q-gutter-y-sm"},[a("q-toggle",{attrs:{label:"Header Reaveal"},model:{value:e.cfg.headerReveal,callback:function(t){e.$set(e.cfg,"headerReveal",t)},expression:"cfg.headerReveal"}}),a("q-select",{staticStyle:{"max-width":"200px"},attrs:{label:"Separator type",outlined:"",dense:"","options-dense":"","map-options":"","emit-value":"",options:e.sepOptions,"options-cover":""},model:{value:e.cfg.headerSep,callback:function(t){e.$set(e.cfg,"headerSep",t)},expression:"cfg.headerSep"}})],1)]:e._e(),e.pick.footer?[a("div",{staticClass:"q-pt-lg q-pb-sm text-grey-8"},[e._v("Footer")]),a("div",{staticClass:"q-pl-lg q-gutter-y-sm"},[a("q-toggle",{attrs:{label:"Footer Reveal"},model:{value:e.cfg.footerReveal,callback:function(t){e.$set(e.cfg,"footerReveal",t)},expression:"cfg.footerReveal"}}),a("q-select",{staticStyle:{"max-width":"200px"},attrs:{label:"Separator type",outlined:"",dense:"","options-dense":"","map-options":"","emit-value":"",options:e.sepOptions,"options-cover":""},model:{value:e.cfg.footerSep,callback:function(t){e.$set(e.cfg,"footerSep",t)},expression:"cfg.footerSep"}})],1)]:e._e(),e.pick.left?[a("div",{staticClass:"q-pt-lg q-pb-sm text-grey-8"},[e._v("Left-side Drawer")]),a("div",{staticClass:"q-pl-lg q-gutter-y-sm"},[a("q-toggle",{attrs:{label:"Overlay mode"},model:{value:e.cfg.leftOverlay,callback:function(t){e.$set(e.cfg,"leftOverlay",t)},expression:"cfg.leftOverlay"}}),a("q-select",{staticStyle:{"max-width":"200px"},attrs:{label:"Behavior",outlined:"",dense:"","options-dense":"","map-options":"","emit-value":"",options:e.drawerBehaviorOptions,"options-cover":""},model:{value:e.cfg.leftBehavior,callback:function(t){e.$set(e.cfg,"leftBehavior",t)},expression:"cfg.leftBehavior"}}),a("q-select",{staticStyle:{"max-width":"200px"},attrs:{label:"Separator type",outlined:"",dense:"","options-dense":"","map-options":"","emit-value":"",options:e.sepOptions,"options-cover":""},model:{value:e.cfg.leftSep,callback:function(t){e.$set(e.cfg,"leftSep",t)},expression:"cfg.leftSep"}})],1)]:e._e(),e.pick.right?[a("div",{staticClass:"q-pt-lg q-pb-sm text-grey-8"},[e._v("Right-side Drawer")]),a("div",{staticClass:"q-pl-lg q-gutter-y-sm"},[a("q-toggle",{attrs:{label:"Overlay mode"},model:{value:e.cfg.rightOverlay,callback:function(t){e.$set(e.cfg,"rightOverlay",t)},expression:"cfg.rightOverlay"}}),a("q-select",{staticStyle:{"max-width":"200px"},attrs:{label:"Behavior",outlined:"",dense:"","options-dense":"","map-options":"","emit-value":"",options:e.drawerBehaviorOptions,"options-cover":""},model:{value:e.cfg.rightBehavior,callback:function(t){e.$set(e.cfg,"rightBehavior",t)},expression:"cfg.rightBehavior"}}),a("q-select",{staticStyle:{"max-width":"200px"},attrs:{label:"Separator type",outlined:"",dense:"","options-dense":"","map-options":"","emit-value":"",options:e.sepOptions,"options-cover":""},model:{value:e.cfg.rightSep,callback:function(t){e.$set(e.cfg,"rightSep",t)},expression:"cfg.rightSep"}})],1)]:e._e()],2),a("q-step",{attrs:{name:"play",title:"Play with Layout",icon:e.mdiPlayCircleOutline}},[a("div",{staticClass:"column"},[a("q-toggle",{attrs:{label:"Visible Header"},model:{value:e.play.header,callback:function(t){e.$set(e.play,"header",t)},expression:"play.header"}}),a("q-toggle",{attrs:{label:"Visible Footer"},model:{value:e.play.footer,callback:function(t){e.$set(e.play,"footer",t)},expression:"play.footer"}}),a("q-toggle",{attrs:{label:"Visible left-side Drawer"},model:{value:e.play.left,callback:function(t){e.$set(e.play,"left",t)},expression:"play.left"}}),a("q-toggle",{attrs:{label:"Visible right-side Drawer"},model:{value:e.play.right,callback:function(t){e.$set(e.play,"right",t)},expression:"play.right"}}),a("q-toggle",{attrs:{label:"Inject Drawer content for scrolling"},model:{value:e.play.scroll,callback:function(t){e.$set(e.play,"scroll",t)},expression:"play.scroll"}})],1)])],1),a("q-dialog",{model:{value:e.exportDialog,callback:function(t){e.exportDialog=t},expression:"exportDialog"}},[a("q-card",[a("div",{staticClass:"bg-code export-code"},[a("doc-code",{attrs:{lang:"html"}},[e._v(e._s(e.layoutExport))])],1),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",flat:"",label:"Close"}})],1)],1)],1)],1)],1),e.pick.left?a("q-drawer",{attrs:{"show-if-above":"",behavior:e.cfg.leftBehavior,overlay:e.cfg.leftOverlay,elevated:"elevated"===e.cfg.leftSep,bordered:"bordered"===e.cfg.leftSep,breakpoint:1023},model:{value:e.play.left,callback:function(t){e.$set(e.play,"left",t)},expression:"play.left"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-item-label",{attrs:{header:""}},[e._v("Left Drawer")]),e.play.scroll?a("div",{staticClass:"text-grey",staticStyle:{padding:"25px 16px 16px"}},e._l(50,(function(t){return a("p",{key:"right-"+t},[a("em",[e._v("Left Drawer has intended scroll")])])})),0):e._e()],1)],1):e._e(),e.pick.right?a("q-drawer",{attrs:{"show-if-above":"",side:"right",behavior:e.cfg.rightBehavior,overlay:e.cfg.rightOverlay,elevated:"elevated"===e.cfg.rightSep,bordered:"bordered"===e.cfg.rightSep,breakpoint:1023},model:{value:e.play.right,callback:function(t){e.$set(e.play,"right",t)},expression:"play.right"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 204px)","margin-top":"204px"}},[a("q-item-label",{attrs:{header:""}},[e._v("Right Drawer")]),e.play.scroll?a("div",{staticClass:"text-grey",staticStyle:{padding:"25px 16px 16px"}},e._l(50,(function(t){return a("p",{key:"right-"+t},[a("em",[e._v("Right Drawer has intended scroll")])])})),0):e._e()],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"204px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("div",{staticClass:"text-weight-bold"},[e._v("Razvan Stoenescu")]),a("div",[e._v("@rstoenescu")])],1)])],1):e._e(),e.pick.footer?a("q-footer",{staticClass:"bg-grey-8",attrs:{reveal:e.cfg.footerReveal,elevated:"elevated"===e.cfg.footerSep,bordered:"bordered"===e.cfg.footerSep},model:{value:e.play.footer,callback:function(t){e.$set(e.play,"footer",t)},expression:"play.footer"}},[a("q-toolbar",[e.pick.left?a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:e.mdiMenu},on:{click:function(t){e.play.left=!e.play.left}}}):e._e(),a("q-toolbar-title",[e._v("Quasar")]),e.pick.right?a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:e.mdiMenu},on:{click:function(t){e.play.right=!e.play.right}}}):e._e()],1)],1):e._e()],1)},o=[],r=a("5218"),i=a("c8c3"),s={created(){this.mdiMenu=r["qb"],this.mdiViewDashboard=r["Rb"],this.mdiCog=r["C"],this.mdiPlayCircleOutline=r["Fb"],this.drawerBehaviorOptions=[{label:"Behave Normal",value:"default"},{label:"Behave Mobile",value:"mobile"},{label:"Behave Desktop",value:"desktop"}],this.sepOptions=[{label:"None",value:"none"},{label:"Elevated",value:"elevated"},{label:"Bordered",value:"bordered"}]},meta:{title:"Layout Builder",meta:Object(i["a"])("Layout Builder | Quasar Framework","Tool to build Quasar layouts. Configure the layout parts then export the code.")},data(){return{topL:"h",topC:"H",topR:"h",middleL:"l",middleR:"R",bottomL:"f",bottomC:"F",bottomR:"f",navTabModel:"tab1",step:"pick",exportDialog:!1,pick:{header:!0,footer:!0,left:!0,right:!0,navtabs:!0},cfg:{headerReveal:!1,headerSep:"elevated",footerReveal:!1,footerSep:"elevated",leftBehavior:"default",leftOverlay:!1,leftSep:"bordered",rightBehavior:"default",rightOverlay:!1,rightSep:"bordered"},play:{header:!0,footer:!0,left:!1,right:!1,scroll:!0}}},computed:{isContracted(){return!0===this.$q.screen.lt.sm||!0===this.$q.screen.md&&!0===this.play.left&&!1===this.cfg.leftOverlay&&!0===this.play.right&&!1===this.cfg.rightOverlay},bgTopL(){return"h"===this.topL?"bg-primary":"bg-orange"},bgTopR(){return"h"===this.topR?"bg-primary":"bg-orange"},bgBottomL(){return"f"===this.bottomL?"bg-grey-8":"bg-orange"},bgBottomR(){return"f"===this.bottomR?"bg-grey-8":"bg-orange"},view(){const e=`${this.topL}${this.topC}${this.topR}`,t=`${this.middleL}p${this.middleR}`,a=`${this.bottomL}${this.bottomC}${this.bottomR}`;return`${e} ${t} ${a}`},layoutExport(){let e=`<template>\n  <q-layout view="${this.view}">\n`;return this.pick.header&&(e+=`\n    <q-header ${this.cfg.headerReveal?"reveal ":""}${"none"!==this.cfg.headerSep?this.cfg.headerSep+" ":""}class="bg-primary text-white"${this.pick.navtabs?' height-hint="98"':""}>\n      <q-toolbar>${this.pick.left?'\n        <q-btn dense flat round icon="menu" @click="left = !left" />\n':""}\n        <q-toolbar-title>\n          <q-avatar>\n            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">\n          </q-avatar>\n          Title\n        </q-toolbar-title>${this.pick.right?'\n\n        <q-btn dense flat round icon="menu" @click="right = !right" />':""}\n      </q-toolbar>${this.pick.navtabs?'\n\n      <q-tabs align="left">\n        <q-route-tab to="/page1" label="Page One" />\n        <q-route-tab to="/page2" label="Page Two" />\n        <q-route-tab to="/page3" label="Page Three" />\n      </q-tabs>':""}\n    </q-header>\n`),this.pick.left&&(e+=`\n    <q-drawer ${"mobile"===this.cfg.leftBehavior||this.cfg.leftOverlay?"":"show-if-above "}v-model="left" side="left"${this.cfg.leftOverlay?" overlay":""}${"default"!==this.cfg.leftBehavior?` behavior="${this.cfg.leftBehavior}"`:""}${"none"!==this.cfg.leftSep?" "+this.cfg.leftSep:""}>\n      \x3c!-- drawer content --\x3e\n    </q-drawer>\n`),this.pick.right&&(e+=`\n    <q-drawer ${"mobile"===this.cfg.rightBehavior||this.cfg.rightOverlay?"":"show-if-above "}v-model="right" side="right"${this.cfg.rightOverlay?" overlay":""}${"default"!==this.cfg.rightBehavior?` behavior="${this.cfg.rightBehavior}"`:""}${"none"!==this.cfg.rightSep?" "+this.cfg.rightSep:""}>\n      \x3c!-- drawer content --\x3e\n    </q-drawer>\n`),e+="\n    <q-page-container>\n      <router-view />\n    </q-page-container>\n",this.pick.footer&&(e+=`\n    <q-footer ${this.cfg.footerReveal?"reveal ":""}${"none"!==this.cfg.footerSep?this.cfg.footerSep+" ":""}class="bg-grey-8 text-white">\n      <q-toolbar>\n        <q-toolbar-title>\n          <q-avatar>\n            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">\n          </q-avatar>\n          Title\n        </q-toolbar-title>\n      </q-toolbar>\n    </q-footer>\n`),e+=`\n  </q-layout>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {${this.pick.left?"\n      left: false"+(this.pick.right?",":""):""}${this.pick.right?"\n      right: false":""}\n    }\n  }\n}\n<\/script>`,e}}},n=s,c=(a("a3773"),a("2877")),p=Object(c["a"])(n,l,o,!1,null,null,null);t["default"]=p.exports},a3773:function(e,t,a){"use strict";var l=a("cfad"),o=a.n(l);o.a},cfad:function(e,t,a){}}]);