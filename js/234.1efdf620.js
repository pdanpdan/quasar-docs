(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[234],{cea4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{title:"List and List Items",related:t.related,nav:t.nav}},[a("p",[t._v("The QList and QItem are a group of components which can work together to present multiple line items vertically as a single continuous element. They are best suited for displaying similar data types as rows of information, such as a contact list, a playlist or menu. Each row is called an Item. QItem can also be used outside of a QList too.")]),a("p",[t._v("Lists can encapsulate Items or Item-like components, for example "),a("doc-link",{attrs:{to:"/vue-components/expansion-item"}},[t._v("QExpansionItem")]),t._v(" or "),a("doc-link",{attrs:{to:"/vue-components/slide-item"}},[t._v("QSlideItem")]),t._v(". Also "),a("doc-link",{attrs:{to:"/vue-components/separator"}},[t._v("QSeparator")]),t._v(" can be used to split up sections, where needed.")],1),a("p",[t._v("List Items have the following pre-built child components:")]),a("ul",[a("li",[a("p",[a("strong",[t._v("QItemSection")]),t._v(" - An item section can have several uses for particular content. They are controlled via the "),a("code",{staticClass:"doc-token"},[t._v("avatar")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("thumbnail")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("side")]),t._v(" props. With no props, it will render the main section of your QItem (which spans to the fullest of available space).")])]),a("li",[a("p",[a("strong",[t._v("QItemLabel")]),t._v(" - An item label is useful for predefined text content type within a QItemSection, or for header-like content of the QList itself.")])])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),a("doc-installation",{attrs:{components:["QList","QItem","QItemSection","QItemLabel"]}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(e){return t.copyHeading("Basic")}}},[t._v("Basic")]),a("doc-example",{attrs:{title:"Basic",file:"QItem/Basic"}}),a("doc-example",{attrs:{title:"On a dark background",file:"QItem/Dark",dark:""}}),a("doc-example",{attrs:{title:"Dense",file:"QItem/Dense"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"QItemSection"},on:{click:function(e){return t.copyHeading("QItemSection")}}},[t._v("QItemSection")]),a("doc-example",{attrs:{title:"Left avatar/thumbnail QItemSection",file:"QItem/AvatarLeft"}}),a("doc-example",{attrs:{title:"Right avatar/thumbnail QItemSection",file:"QItem/AvatarRight"}}),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("When you have multi-line items, you could use "),a("code",{staticClass:"doc-token"},[t._v("top")]),t._v(" property on QItemSection side/avatar to align the sections to top, overriding default middle alignment.")])]),a("doc-example",{attrs:{title:"Side QItemSection",file:"QItem/SideSection"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Active-state"},on:{click:function(e){return t.copyHeading("Active-state")}}},[t._v("Active state")]),a("doc-example",{attrs:{title:"Active prop",file:"QItem/ActiveState"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"QItemLabel"},on:{click:function(e){return t.copyHeading("QItemLabel")}}},[t._v("QItemLabel")]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("Notice you can handle label overflow with "),a("code",{staticClass:"doc-token"},[t._v("lines")]),t._v(" prop, telling it how many lines it can span. However, this feature uses Webkit specific CSS so won’t work in IE/Edge.")])]),a("doc-example",{attrs:{title:"ItemLabel",file:"QItem/ItemLabel"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"More-involved-examples"},on:{click:function(e){return t.copyHeading("More-involved-examples")}}},[t._v("More involved examples")]),a("doc-example",{attrs:{title:"Contact list",file:"QItem/ExampleContacts"}}),a("doc-example",{attrs:{title:"Settings",file:"QItem/ExampleSettings"}}),a("doc-example",{attrs:{title:"Emails",file:"QItem/ExampleEmails"}}),a("doc-example",{attrs:{title:"Folder listing",file:"QItem/ExampleFolders"}}),a("p",[t._v("For demoing purposes in the example below, we’re using the "),a("code",{staticClass:"doc-token"},[t._v("active")]),t._v(" prop instead of QItem’s router props ("),a("code",{staticClass:"doc-token"},[t._v("to")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("exact")]),t._v("). UMD doesn’t have Vue Router so you wouldn’t be able to play with it in Codepen/jsFiddle.")]),a("doc-example",{attrs:{title:"Menu",file:"QItem/ExampleMenu"}}),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("For more complex menus, consider also using "),a("doc-link",{attrs:{to:"/vue-components/expansion-item"}},[t._v("QExpansionItem")]),t._v(".")],1)]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Connecting-to-Vue-Router"},on:{click:function(e){return t.copyHeading("Connecting-to-Vue-Router")}}},[t._v("Connecting to Vue Router")]),a("p",[t._v("You can use QItems together with Vue Router through "),a("code",{staticClass:"doc-token"},[t._v("<router-link>")]),t._v(" properties bound to it. These allow for listening to the current app route and also triggering a route when clicked/tapped.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/inbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-item-section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-icon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("inbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-item-section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-item-section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Inbox\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-item-section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QList-API"},on:{click:function(e){return t.copyHeading("QList-API")}}},[t._v("QList API")]),a("doc-api",{attrs:{file:"QList"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QItem-API"},on:{click:function(e){return t.copyHeading("QItem-API")}}},[t._v("QItem API")]),a("doc-api",{attrs:{file:"QItem"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QItemSection-API"},on:{click:function(e){return t.copyHeading("QItemSection-API")}}},[t._v("QItemSection API")]),a("doc-api",{attrs:{file:"QItemSection"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QItemLabel-API"},on:{click:function(e){return t.copyHeading("QItemLabel-API")}}},[t._v("QItemLabel API")]),a("doc-api",{attrs:{file:"QItemLabel"}})],1)},s=[],o=a("8669");const i="List and List Items | Quasar Framework",c="How to use the QList, QItem, QItemSection and QItemLabel Vue components.";var l={meta:{title:"List and List Items",meta:{title:{name:"title",content:i},ogTitle:{name:"og:title",content:i},twitterTitle:{name:"twitter:title",content:i},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"QItemSection",title:"QItemSection",sub:!0},{id:"Active-state",title:"Active state",sub:!0},{id:"QItemLabel",title:"QItemLabel",sub:!0},{id:"More-involved-examples",title:"More involved examples",sub:!0},{id:"Connecting-to-Vue-Router",title:"Connecting to Vue Router",sub:!0},{id:"QList-API",title:"QList API"},{id:"QItem-API",title:"QItem API"},{id:"QItemSection-API",title:"QItemSection API"},{id:"QItemLabel-API",title:"QItemLabel API"}],this.related=[{name:"Expansion Item",category:"Vue Components",path:"/vue-components/expansion-item"},{name:"Slide Item",category:"Vue Components",path:"/vue-components/slide-item"},{name:"Separator",category:"Vue Components",path:"/vue-components/separator"}],this.nav=[{name:"Linear Progress",category:"Vue Components",path:"/vue-components/linear-progress",dir:"left"},{name:"Markup Table",category:"Vue Components",path:"/vue-components/markup-table",dir:"right"}]},methods:{copyHeading:o["a"]}},r=l,p=a("2877"),d=Object(p["a"])(r,n,s,!1,null,null,null);e["default"]=d.exports}}]);