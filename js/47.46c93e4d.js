(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{4984:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Layout Drawer",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[o("p",[e._v("QLayout allows you to configure your views as a 3x3 matrix, containing optional left-side and/or right-side Drawers. If you haven’t already, please read "),o("doc-link",{attrs:{to:"/layout/layout"}},[e._v("QLayout")]),e._v(" documentation page first.")],1),o("p",[e._v("QDrawer is the sidebar part of your QLayout.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qdrawer-api"},on:{click:function(t){return e.copyHeading("qdrawer-api")}}},[e._v("QDrawer API")]),o("doc-api",{attrs:{file:"QDrawer"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"layout-builder"},on:{click:function(t){return e.copyHeading("layout-builder")}}},[e._v("Layout Builder")]),o("p",[e._v("Scaffold your layout(s) by clicking on the button below.")]),o("q-btn",{attrs:{push:"",color:"brand-primary","icon-right":"launch",label:"Layout Builder",type:"a",href:"layout-builder",target:"_blank",rel:"noopener noreferrer"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("ul",[o("li",[e._v("Since QDrawer needs a layout and QLayout by default manages the entire window, then for demoing purposes we are going to use containerized QLayouts. But remember that by no means you are required to use containerized QLayouts for QDrawer.")]),o("li",[e._v("If the QDrawer content also has images and you want to use touch actions to close it, you might want to add "),o("code",{staticClass:"doc-token"},[e._v('draggable="false"')]),e._v(" to them, otherwise the native browser behavior might interfere in a negative way.")]),o("li",[e._v("If you use a QScrollArea as the content of a QDrawer wrap it in a "),o("code",{staticClass:"doc-token"},[e._v('<div class="fit overflow-hidden">')]),e._v(" and use a "),o("code",{staticClass:"doc-token"},[e._v("fit")]),e._v(" class on the QScrollArea to prevent unwanted scrollbars to show on the QDrawer.")]),o("li",[e._v("If you use a QScrollArea with some fixed elements on top and/or bottom as the content of a QDrawer wrap them in a "),o("code",{staticClass:"doc-token"},[e._v('<div class="fit overflow-hidden column no-wrap">')]),e._v(" and use a "),o("code",{staticClass:"doc-token"},[e._v("col")]),e._v(" class on the QScrollArea to get automatic height for the QScrollArea and to prevent unwanted scrollbars to show on the QDrawer.")])])]),o("div",{staticClass:"doc-note doc-note--danger"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("By default, QDrawer has touch actions attached to it. If this interferes with your drawer content components, disable it by specifying the Boolean "),o("code",{staticClass:"doc-token"},[e._v("no-swipe-close")]),e._v(" property.")])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("When QDrawer is set into overlay mode, "),o("strong",[e._v("it will force it to go into fixed position")]),e._v(", regardless if QLayout’s “view” prop is configured with  “l/r” or “L/R”. Also, "),o("strong",[e._v("if on iOS platform and QLayout is containerized")]),e._v(", the fixed position will also be forced upon QDrawer due to platform limitations that cannot be overcome.")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"basic"},on:{click:function(t){return e.copyHeading("basic")}}},[e._v("Basic")]),o("doc-example",{attrs:{title:"Basic",file:"QDrawer/Basic"}}),o("p",[e._v("Consider using QItems with routing props (like "),o("code",{staticClass:"doc-token"},[e._v("to")]),e._v(") below. For demoing purposes these props have not been added as it would break the UMD version.")]),o("doc-example",{attrs:{title:"With navigation menu",file:"QDrawer/Menu"}}),o("doc-example",{attrs:{title:"Seamless menu",file:"QDrawer/MenuSeamless"}}),o("doc-example",{attrs:{title:"Header Picture",file:"QDrawer/HeaderPicture"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"mini-mode"},on:{click:function(t){return e.copyHeading("mini-mode")}}},[e._v("Mini-mode")]),o("p",[e._v("Drawer can operate in two modes: ‘normal’ and ‘mini’, and you can switch between them by using the Boolean "),o("code",{staticClass:"doc-token"},[e._v("mini")]),e._v(" property on QLayoutDrawer.")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Please note that "),o("strong",[o("code",{staticClass:"doc-token"},[e._v("mini")]),e._v(" mode")]),e._v(" does not apply when in "),o("strong",[e._v("mobile")]),e._v(" behavior.")])]),o("p",[e._v("There are some CSS classes that will help you customize the drawer when dealing with “mini” mode. These are very useful especially when using the “click” trigger:")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[e._v("CSS Class")]),o("th",{staticClass:"text-left"},[e._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("code",{staticClass:"doc-token"},[e._v("q-mini-drawer-hide")])]),o("td",[e._v("Hide when drawer is in “mini” mode.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[e._v("q-mini-drawer-only")])]),o("td",[e._v("Show only when drawer is in “mini” mode.")])])])]),o("p",[e._v("You can also write your own CSS classes based on the fact that QLayoutDrawer has "),o("code",{staticClass:"doc-token"},[e._v("q-drawer--standard")]),e._v(" CSS class when in “normal” mode and "),o("code",{staticClass:"doc-token"},[e._v("q-drawer--mini")]),e._v(" when in “mini” mode. Also, when drawer is in “mobile” behavior, it gets "),o("code",{staticClass:"doc-token"},[e._v("q-drawer--mobile")]),e._v(" CSS class.")]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"mouseover-mouseout-trigger"},on:{click:function(t){return e.copyHeading("mouseover-mouseout-trigger")}}},[e._v("Mouseover/mouseout trigger")]),o("p",[e._v("Consider using QItems with routing props (like "),o("code",{staticClass:"doc-token"},[e._v("to")]),e._v(") below. For demoing purposes these props have not been added as it would break the UMD version.")]),o("doc-example",{attrs:{title:"Mini-mode with mouseover/mouseout trigger",file:"QDrawer/MiniMouseEvents"}}),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"mini-to-overlay"},on:{click:function(t){return e.copyHeading("mini-to-overlay")}}},[e._v("Mini to overlay")]),o("p",[e._v("The "),o("code",{staticClass:"doc-token"},[e._v("mini-to-overlay")]),e._v(" Boolean property will always set your drawer with fixed position, regardless of your configuration from the "),o("code",{staticClass:"doc-token"},[e._v("view")]),e._v(" prop, but will occupy space on the layout only as wide as when in mini-mode.")]),o("doc-example",{attrs:{title:"Mini to overlay",file:"QDrawer/MiniToOverlay"}}),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"click-trigger"},on:{click:function(t){return e.copyHeading("click-trigger")}}},[e._v("Click trigger")]),o("p",[e._v("In the example below, when in “mini” mode, if the user clicks on Drawer then we switch to normal mode.")]),o("p",[e._v("Consider using QItems with routing props (like "),o("code",{staticClass:"doc-token"},[e._v("to")]),e._v(") below. For demoing purposes these props have not been added as it would break the UMD version.")]),o("doc-example",{attrs:{title:"Mini-mode with click trigger",file:"QDrawer/MiniClickEvent"}}),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"slots"},on:{click:function(t){return e.copyHeading("slots")}}},[e._v("Slots")]),o("p",[e._v("By default, when in “mini” mode, Quasar CSS hides a few DOM elements to provide a neat narrow drawer. But there may certainly be use-cases where you need a deep tweak. You can use the “mini” Vue slot of QLayoutDrawer just for that. The content of this slot will replace your drawer’s default content when in “mini” mode.")]),o("doc-example",{attrs:{title:"Mini-mode with slot",file:"QDrawer/MiniSlot"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"overlay-mode"},on:{click:function(t){return e.copyHeading("overlay-mode")}}},[e._v("Overlay mode")]),o("p",[e._v("The overlay mode prevents the drawer from occupying space on the layout and rather hover over the page instead. This will always set your drawer with fixed position, regardless of your configuration from the "),o("code",{staticClass:"doc-token"},[e._v("view")]),e._v(" prop.")]),o("p",[e._v("On the example below, click the menu icon to see the drawer in action. It’s best viewed on a desktop with a window of at least 500px width (this is the breakpoint that is set on this demo).")]),o("doc-example",{attrs:{title:"Overlay mode",file:"QDrawer/OverlayMode"}})],1)},i=[],r=o("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="Layout Drawer",this.metaDesc="How to use the QDrawer component. The sidebars of your Quasar app.",this.related=[{name:"Layout",category:"Layout and Grid",path:"/layout/layout"},{name:"List & List Items",category:"Vue Components",path:"/vue-components/list-and-list-items"}],this.nav=[{name:"Layout Header and Footer",category:"Layout and Grid",path:"/layout/header-and-footer",dir:"left"},{name:"Layout Page",category:"Layout and Grid",path:"/layout/page",dir:"right"}],this.toc=[{id:"qdrawer-api",title:"QDrawer API"},{id:"layout-builder",title:"Layout Builder"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"mini-mode",title:"Mini-mode",sub:!0},{id:"overlay-mode",title:"Overlay mode",sub:!0}],this.copyHeading=r["a"]}},n=s,d=o("2877"),l=Object(d["a"])(n,a,i,!1,null,null,null);t["default"]=l.exports}}]);