(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{4255:function(t,e,a){},cb1d:function(t,e,a){"use strict";a("4255")},fe06f:function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c");var s=function(){var t=this,e=t._self._c;return e("q-layout",{staticClass:"GPLAY__layout bg-grey-3",attrs:{view:"hHh LpR fFf"}},[e("q-header",{staticClass:"bg-grey-3 text-grey-9",attrs:{reveal:"","height-hint":"60"}},[e("q-toolbar",{staticClass:"GPLAY__toolbar text-grey-6"},[this.$q.platform.is.mobile||!t.leftDrawerOpen?e("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}):t._e(),t.$q.screen.gt.xs?e("div",{staticClass:"q-pr-lg"},[e("img",{staticClass:"GPLAY__logo",attrs:{src:"https://cdn.quasar.dev/img/layout-gallery/logo-google-play.png"}})]):t._e(),e("q-space"),e("div",{staticClass:"GPLAY__toolbar-input-container row no-wrap"},[e("q-input",{staticClass:"bg-white col",attrs:{dense:"",outlined:"",square:"",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("q-btn",{staticClass:"GPLAY__toolbar-input-btn",attrs:{color:"primary",icon:"search",unelevated:""}})],1),e("q-space"),e("div",{staticClass:"q-pl-md q-gutter-sm row no-wrap items-center"},[e("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",size:"14px",icon:"apps"}},[e("q-tooltip",[t._v("Google Apps")])],1),e("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"notifications"}},[e("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            2\n          ")]),e("q-tooltip",[t._v("Notifications")])],1),e("q-btn",{attrs:{round:"",flat:""}},[e("q-avatar",{attrs:{size:"26px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),e("q-tooltip",[t._v("Account")])],1)],1)],1)],1),e("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-3 text-grey-7",width:200},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[e("q-list",[e("q-item",{staticClass:"GPLAY__drawer-link bg-grey-10 text-grey-3",attrs:{clickable:""}},[e("q-item-section",{staticClass:"text-grey-1",attrs:{avatar:""}},[e("q-icon",{attrs:{name:"weekend"}})],1),e("q-item-section",{staticClass:"text-grey-3"},[e("q-item-label",[t._v("Entertainment")])],1)],1),e("q-item",{staticClass:"GPLAY__drawer-link GPLAY__drawer-link--apps",attrs:{clickable:""}},[e("q-item-section",{staticClass:"bg-green-7 text-grey-1 text-center",attrs:{avatar:""}},[e("q-icon",{attrs:{name:"android"}})],1),e("q-item-section",{staticClass:"apps-text"},[e("q-item-label",[t._v("Apps")])],1)],1),e("q-item",{staticClass:"GPLAY__drawer-link GPLAY__drawer-link--movies",attrs:{clickable:""}},[e("q-item-section",{staticClass:"movies-icon bg-red-7 text-grey-1 text-center",attrs:{avatar:""}},[e("q-icon",{attrs:{name:"local_movies"}})],1),e("q-item-section",{staticClass:"movies-text"},[e("q-item-label",[t._v("Movies & TV")])],1)],1),e("q-item",{staticClass:"GPLAY__drawer-link GPLAY__drawer-link--music",attrs:{clickable:""}},[e("q-item-section",{staticClass:"music-icon bg-orange-7 text-grey-1 text-center",attrs:{avatar:""}},[e("q-avatar",{attrs:{size:"22px",color:"white","text-color":"orange-7",icon:"music_note"}})],1),e("q-item-section",{staticClass:"music-text"},[e("q-item-label",[t._v("Music")])],1)],1),e("q-item",{staticClass:"GPLAY__drawer-link GPLAY__drawer-link--books",attrs:{clickable:""}},[e("q-item-section",{staticClass:"books-icon bg-blue-7 text-grey-1 text-center",attrs:{avatar:""}},[e("q-icon",{attrs:{name:"book"}})],1),e("q-item-section",{staticClass:"books-text"},[e("q-item-label",[t._v("Books")])],1)],1),e("q-item",{staticClass:"GPLAY__drawer-link GPLAY__drawer-link--devices",attrs:{clickable:""}},[e("q-item-section",{staticClass:"devices-icon bg-blue-grey-7 text-grey-1 text-center",attrs:{avatar:""}},[e("q-icon",{attrs:{name:"devices"}})],1),e("q-item-section",{staticClass:"devices-text"},[e("q-item-label",[t._v("Devices")])],1)],1),e("q-separator",{staticClass:"q-mb-md"}),t._l(t.links1,(function(a){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.text,staticClass:"GPLAY__drawer-item",attrs:{dense:"",clickable:""}},[e("q-item-section",{staticClass:"text-grey-8"},[e("q-item-label",[t._v(t._s(a.text))])],1)],1)}))],2)],1),e("q-page-container",[e("router-view"),e("q-page-sticky",{attrs:{expand:"",position:"top"}},[e("q-toolbar",{staticClass:"GPLAY__sticky bg-white q-px-xl"},[e("q-space"),e("q-btn",{staticClass:"GPLAY__sticky-help",attrs:{icon:"help",dense:"",flat:"",size:"12px"}}),e("q-btn",{staticClass:"GPLAY__sticky-settings q-ml-md",attrs:{icon:"settings",dense:"",flat:"",size:"12px"}})],1)],1)],1)],1)},i=[],r={name:"GooglePlayLayout",data:function(){return{leftDrawerOpen:!1,search:"",storage:.26,links1:[{text:"Account"},{text:"Payment methods"},{text:"My subscriptions"},{text:"Redeem"},{text:"Buy gift card"},{text:"My wishlist"},{text:"My Play activity"},{text:"Parent guide"}]}}},c=r,l=(a("cb1d"),a("2877")),n=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=n.exports}}]);