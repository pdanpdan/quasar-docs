(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"4cfc":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c");var s=function(){var t=this,e=t._self._c;return e("q-layout",{staticClass:"GNL__layout bg-grey-1",attrs:{view:"hHh lpR fFf"}},[e("q-header",{staticClass:"bg-white text-grey-8",attrs:{elevated:"","height-hint":"64"}},[e("q-toolbar",{staticClass:"GNL__toolbar"},[e("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$q.screen.gt.xs?e("q-toolbar-title",{staticClass:"row items-center no-wrap",attrs:{shrink:""}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"}}),e("span",{staticClass:"q-ml-sm"},[t._v("News")])]):t._e(),e("q-space"),e("q-input",{staticClass:"GNL__toolbar-input",attrs:{outlined:"",dense:"",color:"bg-grey-7 shadow-1",placeholder:"Search for topics, locations & sources"},scopedSlots:t._u([{key:"prepend",fn:function(){return[""===t.search?e("q-icon",{attrs:{name:"search"}}):e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(e){t.search=""}}})]},proxy:!0},{key:"append",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"arrow_drop_down"}},[e("q-menu",{attrs:{anchor:"bottom end",self:"top end"}},[e("div",{staticClass:"q-pa-md",staticStyle:{width:"400px"}},[e("div",{staticClass:"text-body2 text-grey q-mb-md"},[t._v("\n                    Narrow your search results\n                  ")]),e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-3 text-subtitle2 text-grey"},[t._v("\n                      Exact phrase\n                    ")]),e("div",{staticClass:"col-9 q-pl-md"},[e("q-input",{attrs:{dense:""},model:{value:t.exactPhrase,callback:function(e){t.exactPhrase=e},expression:"exactPhrase"}})],1),e("div",{staticClass:"col-3 text-subtitle2 text-grey"},[t._v("\n                      Has words\n                    ")]),e("div",{staticClass:"col-9 q-pl-md"},[e("q-input",{attrs:{dense:""},model:{value:t.hasWords,callback:function(e){t.hasWords=e},expression:"hasWords"}})],1),e("div",{staticClass:"col-3 text-subtitle2 text-grey"},[t._v("\n                      Exclude words\n                    ")]),e("div",{staticClass:"col-9 q-pl-md"},[e("q-input",{attrs:{dense:""},model:{value:t.excludeWords,callback:function(e){t.excludeWords=e},expression:"excludeWords"}})],1),e("div",{staticClass:"col-3 text-subtitle2 text-grey"},[t._v("\n                      Website\n                    ")]),e("div",{staticClass:"col-9 q-pl-md"},[e("q-input",{attrs:{dense:""},model:{value:t.byWebsite,callback:function(e){t.byWebsite=e},expression:"byWebsite"}})],1),e("div",{staticClass:"col-12 q-pt-lg row justify-end"},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticStyle:{"min-width":"68px"},attrs:{flat:"",dense:"","no-caps":"",color:"grey-7",size:"md",label:"Search"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticStyle:{"min-width":"68px"},attrs:{flat:"",dense:"","no-caps":"",color:"grey-7",size:"md",label:"Clear"},on:{click:t.onClear}})],1)])])])],1)]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("q-space"),e("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[t.$q.screen.gt.sm?e("q-btn",{attrs:{round:"",dense:"",flat:"",color:"text-grey-7",icon:"apps"}},[e("q-tooltip",[t._v("Google Apps")])],1):t._e(),e("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"notifications"}},[e("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n              2\n            ")]),e("q-tooltip",[t._v("Notifications")])],1),e("q-btn",{attrs:{round:"",flat:""}},[e("q-avatar",{attrs:{size:"26px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),e("q-tooltip",[t._v("Account")])],1)],1)],1)],1),e("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-white",width:280},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[e("q-scroll-area",{staticClass:"fit"},[e("q-list",{staticClass:"text-grey-8",attrs:{padding:""}},[t._l(t.links1,(function(a){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.text,staticClass:"GNL__drawer-item",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:a.icon}})],1),e("q-item-section",[e("q-item-label",[t._v(t._s(a.text))])],1)],1)})),e("q-separator",{staticClass:"q-my-sm",attrs:{inset:""}}),t._l(t.links2,(function(a){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.text,staticClass:"GNL__drawer-item",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:a.icon}})],1),e("q-item-section",[e("q-item-label",[t._v(t._s(a.text))])],1)],1)})),e("q-separator",{staticClass:"q-my-sm",attrs:{inset:""}}),t._l(t.links3,(function(a){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.text,staticClass:"GNL__drawer-item",attrs:{clickable:""}},[e("q-item-section",[e("q-item-label",[t._v(t._s(a.text)+" "),a.icon?e("q-icon",{attrs:{name:a.icon}}):t._e()],1)],1)],1)})),e("div",{staticClass:"q-mt-md"},[e("div",{staticClass:"flex flex-center q-gutter-xs"},[e("a",{staticClass:"GNL__drawer-footer-link",attrs:{href:"javascript:void(0)","aria-label":"Privacy"}},[t._v("Privacy")]),e("span",[t._v(" · ")]),e("a",{staticClass:"GNL__drawer-footer-link",attrs:{href:"javascript:void(0)","aria-label":"Terms"}},[t._v("Terms")]),e("span",[t._v(" · ")]),e("a",{staticClass:"GNL__drawer-footer-link",attrs:{href:"javascript:void(0)","aria-label":"About"}},[t._v("About Google")])])])],2)],1)],1),e("q-page-container",[e("router-view")],1)],1)},i=[],r=a("e821"),n={name:"GoogleNewsLayout",data:function(){return{leftDrawerOpen:!1,search:"",showAdvanced:!1,showDateOptions:!1,exactPhrase:"",hasWords:"",excludeWords:"",byWebsite:"",byDate:"Any time",links1:[{icon:"web",text:"Top stories"},{icon:"person",text:"For you"},{icon:"star_border",text:"Favourites"},{icon:"search",text:"Saved searches"}],links2:[{icon:"flag",text:"Canada"},{icon:r["u"],text:"World"},{icon:"place",text:"Local"},{icon:"domain",text:"Business"},{icon:"memory",text:"Technology"},{icon:"local_movies",text:"Entertainment"},{icon:"directions_bike",text:"Sports"},{icon:r["v"],text:"Science"},{icon:"fitness_center",text:"Health "}],links3:[{icon:"",text:"Language & region"},{icon:"",text:"Settings"},{icon:"open_in_new",text:"Get the Android app"},{icon:"open_in_new",text:"Get the iOS app"},{icon:"",text:"Send feedback"},{icon:"open_in_new",text:"Help"}]}},methods:{onClear:function(){this.exactPhrase="",this.hasWords="",this.excludeWords="",this.byWebsite="",this.byDate="Any time"},changeDate:function(t){this.byDate=t,this.showDateOptions=!1}}},o=n,c=(a("bec3"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,null,null);e["default"]=l.exports},ba26:function(t,e,a){},bec3:function(t,e,a){"use strict";a("ba26")}}]);