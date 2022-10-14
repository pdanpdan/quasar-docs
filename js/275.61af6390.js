(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[275],{7778:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Tree",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("Quasar Tree represents a highly configurable component that displays hierarchical data, such as a table of contents in a tree structure.")]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qtree-api"},on:{click:function(t){return e.copyHeading("qtree-api")}}},[e._v("QTree API")]),t("doc-api",{attrs:{file:"QTree"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"basic"},on:{click:function(t){return e.copyHeading("basic")}}},[e._v("Basic")]),t("doc-example",{attrs:{title:"Basic",file:"QTree/Basic"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"no-connector-lines"},on:{click:function(t){return e.copyHeading("no-connector-lines")}}},[e._v("No connector lines "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.5.10+"}})],1),t("doc-example",{attrs:{title:"No connectors",file:"QTree/NoConnectors"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dense"},on:{click:function(t){return e.copyHeading("dense")}}},[e._v("Dense "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.17+"}})],1),t("doc-example",{attrs:{title:"Dense",file:"QTree/DenseTree"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dark"},on:{click:function(t){return e.copyHeading("dark")}}},[e._v("Dark")]),t("doc-example",{attrs:{title:"Dark",file:"QTree/Dark",dark:""}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"perf-considerations"},on:{click:function(t){return e.copyHeading("perf-considerations")}}},[e._v("Perf considerations "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.21.1+"}})],1),t("p",[e._v("When using relatively large data, for performance we recommend using the "),t("code",{staticClass:"doc-token"},[e._v("no-transition")]),e._v(" Boolean prop which will account for a significant runtime speed improvement.")]),t("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[e._v("<q-tree no-transition ...\n")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"integrated-example"},on:{click:function(t){return e.copyHeading("integrated-example")}}},[e._v("Integrated example")]),t("doc-example",{attrs:{title:"With QSplitter and QTabPanels",file:"QTree/Splitter"}}),t("p",[e._v("More info: "),t("doc-link",{attrs:{to:"/vue-components/splitter"}},[e._v("QSplitter")]),e._v(", "),t("doc-link",{attrs:{to:"/vue-components/tab-panels"}},[e._v("QTabPanels")]),e._v(".")],1),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"customize-content"},on:{click:function(t){return e.copyHeading("customize-content")}}},[e._v("Customize content")]),t("p",[e._v("Notice (in the example below) the default header and body slot customization.")]),t("doc-example",{attrs:{title:"Default header and body slots",file:"QTree/SlotsDefault"}}),t("p",[e._v("Notice (in the example below) the custom header and body slots.")]),t("doc-example",{attrs:{title:"Customizing nodes",file:"QTree/SlotsCustomized"}}),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("Clicking or pressing "),t("code",{staticClass:"doc-token"},[e._v("SPACE")]),e._v(" or "),t("code",{staticClass:"doc-token"},[e._v("ENTER")]),e._v(" on the custom header selects the tree item (and the custom header is blurred).")]),t("p",[e._v("If you don’t want this to happen just wrap the content of the custom header in a "),t("code",{staticClass:"doc-token"},[e._v("<div @click.stop @keypress.stop>")]),e._v(" (or add the listeners to the respective component/element that is emitting them).")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"accordion-filtering-and-selectable"},on:{click:function(t){return e.copyHeading("accordion-filtering-and-selectable")}}},[e._v("Accordion, filtering and selectable")]),t("p",[e._v("In the example below, sibling nodes get contracted when one gets expanded.")]),t("doc-example",{attrs:{title:"Accordion mode",file:"QTree/Accordion"}}),t("doc-example",{attrs:{title:"Filtering nodes",file:"QTree/FilterDefault"}}),t("doc-example",{attrs:{title:"Selectable nodes",file:"QTree/Selectable"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"lazy-loading"},on:{click:function(t){return e.copyHeading("lazy-loading")}}},[e._v("Lazy loading")]),t("doc-example",{attrs:{title:"Lazy loading nodes",file:"QTree/LazyLoad"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"selection-vs-ticking-expansion"},on:{click:function(t){return e.copyHeading("selection-vs-ticking-expansion")}}},[e._v("Selection vs ticking, expansion")]),t("ul",[t("li",[e._v("Selection (through QTree "),t("code",{staticClass:"doc-token"},[e._v("selected")]),e._v(" prop) refers to the currently selected node (gets highlighted with different background).")]),t("li",[e._v("Ticking (through QTree "),t("code",{staticClass:"doc-token"},[e._v("ticked")]),e._v(" prop) refers to the checkbox associated with each node.")]),t("li",[e._v("Expansion (through QTree "),t("code",{staticClass:"doc-token"},[e._v("expanded")]),e._v(" prop) refers to the nodes that are expanded.")])]),t("p",[e._v("All properties above require to be dynamically bound using "),t("code",{staticClass:"doc-token"},[e._v(".sync")]),e._v(" modifier in order for them to work correctly ("),t("code",{staticClass:"doc-token"},[e._v("v-bind:<prop_name>.sync")]),e._v(" or "),t("code",{staticClass:"doc-token"},[e._v(":<prop_name>.sync")]),e._v(").\n"),t("doc-example",{attrs:{title:"Syncing node properties",file:"QTree/Sync"}})],1),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"tick-strategy"},on:{click:function(t){return e.copyHeading("tick-strategy")}}},[e._v("Tick strategy")]),t("p",[e._v("There are three ticking strategy: ‘leaf’, ‘leaf-filtered’, ‘strict’ with an additional (and default) ‘none’ which disables ticking.")]),t("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Strategy")]),t("th",{staticClass:"text-left"},[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("leaf")]),t("td",[e._v("Ticked nodes are only the leaves. Ticking a node influences the parent’s ticked state too (parent becomes partially ticked or ticked), as well as its children (all tickable children become ticked).")])]),t("tr",[t("td",[e._v("leaf-filtered")]),t("td",[e._v("Same concept as "),t("code",{staticClass:"doc-token"},[e._v("leaf")]),e._v(", only that this strategy applies only to filtered nodes (the nodes that remain visible after filtering).")])]),t("tr",[t("td",[e._v("strict")]),t("td",[e._v("Ticked nodes are independent of parent or children tick state.")])])])]),t("p",[e._v("You can apply a global tick strategy for a QTree and locally change the ticking strategy for a certain node by specifying the "),t("code",{staticClass:"doc-token"},[e._v("tickStrategy")]),e._v(" in the "),t("code",{staticClass:"doc-token"},[e._v("nodes")]),e._v(" model.")]),t("doc-example",{attrs:{title:"Tick strategy",file:"QTree/TickStrategy"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-filter-method"},on:{click:function(t){return e.copyHeading("custom-filter-method")}}},[e._v("Custom filter method")]),t("p",[e._v("You can customize the filtering method by specifying the "),t("code",{staticClass:"doc-token"},[e._v("filter-method")]),e._v(" prop. The method below filters by input if it also has ‘(*)’:")]),t("doc-example",{attrs:{title:"Custom filter",file:"QTree/FilterCustom"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"nodes-model-structure"},on:{click:function(t){return e.copyHeading("nodes-model-structure")}}},[e._v("Nodes model structure")]),t("p",[e._v("The following describes a node’s properties that are taken into account by QTree’s v-model.")]),t("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Node Property")]),t("th",{staticClass:"text-left"},[e._v("Type")]),t("th",{staticClass:"text-left"},[e._v("Behavior when not present")]),t("th",{staticClass:"text-left"},[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("<nodeKey>")]),t("td",[e._v("String, Number")]),t("td",[e._v("An error is generated")]),t("td",[e._v("Node’s key. The key is picked from the key specified in "),t("code",{staticClass:"doc-token"},[e._v("nodeKey")]),e._v(" property.")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("String")]),t("td",[e._v("The item has no label")]),t("td",[e._v("Node’s label. When "),t("code",{staticClass:"doc-token"},[e._v("labelKey")]),e._v(" prop is set the label is picked from that key.")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("String")]),t("td",[e._v("The default icon is used")]),t("td",[e._v("Node’s icon.")])]),t("tr",[t("td",[e._v("iconColor")]),t("td",[e._v("String")]),t("td",[e._v("The inherited color is used")]),t("td",[e._v("Node’s icon color. One from Quasar Color Palette.")])]),t("tr",[t("td",[e._v("img")]),t("td",[e._v("String")]),t("td",[e._v("No image is displayed")]),t("td",[e._v("Node’s image. Use /public folder. Example: ‘mountains.png’")])]),t("tr",[t("td",[e._v("avatar")]),t("td",[e._v("String")]),t("td",[e._v("No avatar is displayed")]),t("td",[e._v("Node’s avatar. Use /public folder. Example: ‘boy-avatar.png’")])]),t("tr",[t("td",[e._v("children")]),t("td",[e._v("Array")]),t("td",[e._v("This node has no sub-nodes")]),t("td",[e._v("Array of nodes as children.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("Boolean")]),t("td",[e._v("The node is enabled")]),t("td",[e._v("Is node disabled?")])]),t("tr",[t("td",[e._v("expandable")]),t("td",[e._v("Boolean")]),t("td",[e._v("The node is expandable")]),t("td",[e._v("Is node expandable?")])]),t("tr",[t("td",[e._v("selectable")]),t("td",[e._v("Boolean")]),t("td",[e._v("The node is selectable")]),t("td",[e._v("Is node selectable?")])]),t("tr",[t("td",[e._v("handler")]),t("td",[e._v("Function")]),t("td",[e._v("No extra function is called")]),t("td",[e._v("Custom function that should be called on click on node. Receives "),t("code",{staticClass:"doc-token"},[e._v("node")]),e._v(" as parameter.")])]),t("tr",[t("td",[e._v("tickable")]),t("td",[e._v("Boolean")]),t("td",[e._v("The node is tickable according to tick strategy")]),t("td",[e._v("When using a tick strategy, each node shows a checkbox. Should a node’s checkbox be disabled?")])]),t("tr",[t("td",[e._v("noTick")]),t("td",[e._v("Boolean")]),t("td",[e._v("Node displays a checkbox")]),t("td",[e._v("When using a tick strategy, should node display a checkbox?")])]),t("tr",[t("td",[e._v("tickStrategy")]),t("td",[e._v("String")]),t("td",[e._v("Tick strategy ‘none’ is used")]),t("td",[e._v("Override global tick strategy for this node only. One of ‘leaf’, ‘leaf-filtered’, ‘strict’, ‘none’.")])]),t("tr",[t("td",[e._v("lazy")]),t("td",[e._v("Boolean")]),t("td",[e._v("Children are not lazy loaded")]),t("td",[e._v("Should children be lazy loaded? In this case also don’t specify ‘children’ prop.")])]),t("tr",[t("td",[e._v("header")]),t("td",[e._v("String")]),t("td",[e._v("Slot ‘default-header’ is used")]),t("td",[e._v("Node header scoped slot name, without the required ‘header-’ prefix. Example: ‘story’ refers to ‘header-story’ scoped slot.")])]),t("tr",[t("td",[e._v("body")]),t("td",[e._v("String")]),t("td",[e._v("Slot ‘default-body’ is used")]),t("td",[e._v("Node body scoped slot name, without the required ‘body-’ prefix. Example: ‘story’ refers to ‘body-story’ scoped slot.")])])])])],1)},i=[],n=o("8669"),d={name:"DocMarkdownPage",created:function(){this.metaTitle="Tree",this.metaDesc="The QTree is a highly configurable Vue component which displays hierarchical data, such as a table of contents in a tree structure.",this.nav=[{name:"Tooltip",category:"Vue Components",path:"/vue-components/tooltip",dir:"left"},{name:"Uploader",category:"Vue Components",path:"/vue-components/uploader",dir:"right"}],this.toc=[{id:"qtree-api",title:"QTree API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"no-connector-lines",title:"No connector lines",sub:!0},{id:"dense",title:"Dense",sub:!0},{id:"dark",title:"Dark",sub:!0},{id:"perf-considerations",title:"Perf considerations",sub:!0},{id:"integrated-example",title:"Integrated example",sub:!0},{id:"customize-content",title:"Customize content",sub:!0},{id:"accordion-filtering-and-selectable",title:"Accordion, filtering and selectable",sub:!0},{id:"lazy-loading",title:"Lazy loading",sub:!0},{id:"selection-vs-ticking-expansion",title:"Selection vs ticking, expansion",sub:!0},{id:"tick-strategy",title:"Tick strategy",sub:!0},{id:"custom-filter-method",title:"Custom filter method",sub:!0},{id:"nodes-model-structure",title:"Nodes model structure",sub:!0}],this.copyHeading=n["a"]}},s=d,c=o("2877"),r=Object(c["a"])(s,a,i,!1,null,null,null);t["default"]=r.exports}}]);