(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"2cbb":function(t,e,a){"use strict";a("3b02b")},"3b02b":function(t,e,a){},fcb8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"bg-grey-1",attrs:{view:"lHh Lpr fff"}},[a("q-header",{staticClass:"bg-white text-grey-8",attrs:{elevated:"","height-hint":"64"}},[a("q-toolbar",{staticClass:"GPL__toolbar",staticStyle:{height:"64px"}},[a("q-btn",{staticClass:"q-mx-md",attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$q.screen.gt.sm?a("q-toolbar-title",{staticClass:"row items-center no-wrap",attrs:{shrink:""}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"}}),a("span",{staticClass:"q-ml-sm"},[t._v("Photos")])]):t._e(),a("q-space"),a("q-input",{staticClass:"GPL__toolbar-input",attrs:{dense:"",standout:"bg-primary",placeholder:"Search"},scopedSlots:t._u([{key:"prepend",fn:function(){return[""===t.search?a("q-icon",{attrs:{name:"search"}}):a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(e){t.search=""}}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.$q.screen.gt.xs?a("q-btn",{staticClass:"q-ml-sm q-px-md",attrs:{flat:"",dense:"","no-wrap":"",color:"primary",icon:"add","no-caps":"",label:"Create"}},[a("q-menu",{attrs:{anchor:"top right",self:"top right"}},[a("q-list",{staticClass:"text-grey-8",staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{"aria-hidden":"true"}},[a("q-item-section",{staticClass:"text-uppercase text-grey-7",staticStyle:{"font-size":"0.7rem"}},[t._v("Create New")])],1),t._l(t.createMenu,(function(e){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e.text,attrs:{clickable:"","aria-hidden":"true"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[t._v(t._s(e.text))])],1)}))],2)],1)],1):t._e(),t.$q.screen.gt.xs?a("q-btn",{staticClass:"q-ml-sm q-px-md",attrs:{flat:"",dense:"","no-wrap":"",color:"primary",icon:"cloud_upload","no-caps":"",label:"Upload"}}):t._e(),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"text-grey-7",icon:"apps"}},[a("q-tooltip",[t._v("Google Apps")])],1),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"notifications"}},[a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            2\n          ")]),a("q-tooltip",[t._v("Notifications")])],1),a("q-btn",{attrs:{round:"",flat:""}},[a("q-avatar",{attrs:{size:"26px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("q-tooltip",[t._v("Account")])],1)],1)],1)],1),a("q-drawer",{attrs:{bordered:"",behavior:"mobile"},on:{click:function(e){t.leftDrawerOpen=!1}},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-toolbar",{staticClass:"GPL__toolbar"},[a("q-toolbar-title",{staticClass:"row items-center text-grey-8"},[a("img",{staticClass:"q-pl-md",attrs:{src:"https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"}}),a("span",{staticClass:"q-ml-sm"},[t._v("Photos")])])],1),a("q-list",{attrs:{padding:""}},[t._l(t.links1,(function(e){return a("q-item",{key:e.text,staticClass:"GPL__drawer-item",attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.text))])],1)],1)})),a("q-separator",{staticClass:"q-my-md"}),t._l(t.links2,(function(e){return a("q-item",{key:e.text,staticClass:"GPL__drawer-item",attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.text))])],1)],1)})),a("q-separator",{staticClass:"q-my-md"}),t._l(t.links3,(function(e){return a("q-item",{key:e.text,staticClass:"GPL__drawer-item",attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.text))])],1)],1)})),a("q-separator",{staticClass:"q-my-md"}),a("q-item",{staticClass:"GPL__drawer-item GPL__drawer-item--storage",attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"cloud"}})],1),a("q-item-section",{attrs:{top:""}},[a("q-item-label",[t._v("Storage")]),a("q-linear-progress",{staticClass:"q-my-sm",attrs:{value:t.storage}}),a("q-item-label",{attrs:{caption:""}},[t._v("2.6 GB of 15 GB")])],1)],1)],2)],1)],1),a("q-page-container",{staticClass:"GPL__page-container"},[a("router-view"),t.$q.screen.gt.sm?a("q-page-sticky",{attrs:{expand:"",position:"left"}},[a("div",{staticClass:"fit q-pt-xl q-px-sm column"},[a("q-btn",{staticClass:"GPL__side-btn",attrs:{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px"}},[a("q-icon",{attrs:{size:"22px",name:"photo"}}),a("div",{staticClass:"GPL__side-btn__label"},[t._v("Photos")])],1),a("q-btn",{staticClass:"GPL__side-btn",attrs:{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px"}},[a("q-icon",{attrs:{size:"22px",name:"collections_bookmark"}}),a("div",{staticClass:"GPL__side-btn__label"},[t._v("Albums")])],1),a("q-btn",{staticClass:"GPL__side-btn",attrs:{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px"}},[a("q-icon",{attrs:{size:"22px",name:"assistant"}}),a("div",{staticClass:"GPL__side-btn__label"},[t._v("Assistant")]),a("q-badge",{staticStyle:{top:"8px",right:"16px"},attrs:{floating:"",color:"red","text-color":"white"}},[t._v("\n            1\n          ")])],1),a("q-btn",{staticClass:"GPL__side-btn",attrs:{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px"}},[a("q-icon",{attrs:{size:"22px",name:"group"}}),a("div",{staticClass:"GPL__side-btn__label"},[t._v("Sharing")])],1),a("q-btn",{staticClass:"GPL__side-btn",attrs:{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px"}},[a("q-icon",{attrs:{size:"22px",name:"import_contacts"}}),a("div",{staticClass:"GPL__side-btn__label"},[t._v("Photo books")])],1)],1)]):t._e()],1)],1)},o=[],i={name:"GooglePhotosLayout",data:function(){return{leftDrawerOpen:!1,search:"",storage:.26,links1:[{icon:"photo",text:"Photos"},{icon:"photo_album",text:"Albums"},{icon:"assistant",text:"Assistant"},{icon:"people",text:"Sharing"},{icon:"book",text:"Photo books"}],links2:[{icon:"archive",text:"Archive"},{icon:"delete",text:"Trash"}],links3:[{icon:"settings",text:"Settings"},{icon:"help",text:"Help & Feedback"},{icon:"get_app",text:"App Downloads"}],createMenu:[{icon:"photo_album",text:"Album"},{icon:"people",text:"Shared Album"},{icon:"movie",text:"Movie"},{icon:"library_books",text:"Animation"},{icon:"dashboard",text:"Collage"},{icon:"book",text:"Photo book"}]}}},r=i,n=(a("2cbb"),a("2877")),c=Object(n["a"])(r,s,o,!1,null,null,null);e["default"]=c.exports}}]);