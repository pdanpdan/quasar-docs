(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{cb68:function(t,e,s){"use strict";s("ce9d")},ce9d:function(t,e,s){},e24c:function(t,e,s){"use strict";s.r(e);s("4de4"),s("d3b7");var i=function(){var t=this,e=t._self._c;return e("q-layout",{staticClass:"bg-grey-1"},[e("q-header",{staticClass:"text-white",staticStyle:{background:"#24292e"},attrs:{elevated:"","height-hint":"61.59"}},[e("q-toolbar",{staticClass:"q-py-sm q-px-md"},[e("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",dense:"",flat:"",ripple:!1,icon:t.fabGithub,size:"19px",color:"white","no-caps":""}}),e("q-select",{ref:"search",staticClass:"GL__toolbar-select",staticStyle:{width:"300px"},attrs:{dark:"",dense:"",standout:"","use-input":"","hide-selected":"",color:"black","stack-label":!1,label:"Search or jump to...",options:t.filteredOptions},on:{filter:t.filter},scopedSlots:t._u([{key:"append",fn:function(){return[e("img",{attrs:{src:"https://cdn.quasar.dev/img/layout-gallery/img-github-search-key-slash.svg"}})]},proxy:!0},{key:"no-option",fn:function(){return[e("q-item",[e("q-item-section",[e("div",{staticClass:"text-center"},[e("q-spinner-pie",{attrs:{color:"grey-5",size:"24px"}})],1)])],1)]},proxy:!0},{key:"option",fn:function(s){return[e("q-item",t._g(t._b({staticClass:"GL__select-GL__menu-link"},"q-item",s.itemProps,!1),s.itemEvents),[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"collections_bookmark"}})],1),e("q-item-section",[e("q-item-label",{domProps:{innerHTML:t._s(s.opt.label)}})],1),e("q-item-section",{class:{"default-type":!s.opt.type},attrs:{side:""}},[e("q-btn",{staticClass:"bg-grey-1 q-px-sm",attrs:{outline:"",dense:"","no-caps":"","text-color":"blue-grey-5",size:"12px"}},[t._v("\n                "+t._s(s.opt.type||"Jump to")+"\n                "),e("q-icon",{attrs:{name:"subdirectory_arrow_left",size:"14px"}})],1)],1)],1)]}}]),model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t.$q.screen.gt.sm?e("div",{staticClass:"GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"},[e("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Pull requests\n        ")]),e("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Issues\n        ")]),e("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Marketplace\n        ")]),e("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Explore\n        ")])]):t._e(),e("q-space"),e("div",{staticClass:"q-pl-sm q-gutter-sm row items-center no-wrap"},[t.$q.screen.gt.xs?e("q-btn",{attrs:{dense:"",flat:"",round:"",size:"sm",icon:"notifications"}}):t._e(),t.$q.screen.gt.xs?e("q-btn",{attrs:{dense:"",flat:""}},[e("div",{staticClass:"row items-center no-wrap"},[e("q-icon",{attrs:{name:"add",size:"20px"}}),e("q-icon",{staticStyle:{"margin-left":"-2px"},attrs:{name:"arrow_drop_down",size:"16px"}})],1),e("q-menu",{attrs:{"auto-close":""}},[e("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("New repository")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Import repository")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("New gist")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("New organization")])],1),e("q-separator"),e("q-item-label",{attrs:{header:""}},[t._v("This repository")]),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("New issue")])],1)],1)],1)],1):t._e(),e("q-btn",{attrs:{dense:"",flat:"","no-wrap":""}},[e("q-avatar",{attrs:{rounded:"",size:"20px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar3.jpg"}})]),e("q-icon",{attrs:{name:"arrow_drop_down",size:"16px"}}),e("q-menu",{attrs:{"auto-close":""}},[e("q-list",{attrs:{dense:""}},[e("q-item",{staticClass:"GL__menu-link-signed-in"},[e("q-item-section",[e("div",[t._v("Signed in as "),e("strong",[t._v("Mary")])])])],1),e("q-separator"),e("q-item",{staticClass:"GL__menu-link-status",attrs:{clickable:""}},[e("q-item-section",[e("div",[e("q-icon",{attrs:{name:"tag_faces",color:"blue-9",size:"18px"}}),t._v("\n                    Set your status\n                  ")],1)])],1),e("q-separator"),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Your profile")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Your repositories")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Your projects")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Your stars")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Your gists")])],1),e("q-separator"),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Help")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Settings")])],1),e("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[e("q-item-section",[t._v("Sign out")])],1)],1)],1)],1)],1)],1)],1),e("q-page-container",[e("router-view")],1)],1)},a=[],n=s("448a"),r=s.n(n),o=(s("ac1f"),s("841c"),s("d81d"),s("99af"),s("caad"),s("2532"),s("e821")),c=["quasarframework/quasar","quasarframework/quasar-awesome"],l={name:"MyLayout",data:function(){return{text:"",options:null,filteredOptions:[]}},methods:{filter:function(t,e){var s=this;if(null===this.options)return setTimeout((function(){s.options=c,s.$refs.search.filter("")}),2e3),void e();e(""!==t?function(){s.filteredOptions=[{label:t,type:"In this repository"},{label:t,type:"All GitHub"}].concat(r()(s.options.filter((function(e){return e.toLowerCase().includes(t.toLowerCase())})).map((function(t){return{label:t}}))))}:function(){s.filteredOptions=s.options.map((function(t){return{label:t}}))})}},created:function(){this.fabGithub=o["h"]}},u=l,m=(s("cb68"),s("2877")),p=Object(m["a"])(u,i,a,!1,null,null,null);e["default"]=p.exports}}]);