(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[269],{"0016":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t._self._c;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Tabs",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("Tabs are a way of displaying more information using less window real estate. This page describes the tab selection part through QTabs, QTab and QRouteTab.")]),a("p",[t._v("One common use case for this component is in Layout’s header/footer. Please refer to "),a("doc-link",{attrs:{to:"/layout/layout"}},[t._v("Layouts")]),t._v(" and "),a("doc-link",{attrs:{to:"/layout/header-and-footer#example--playing-with-qtabs"}},[t._v("Header & Footer")]),t._v(" for references.")],1),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("Works great along with "),a("doc-link",{attrs:{to:"/vue-components/tab-panels"}},[t._v("QTabPanels")]),t._v(", a component which refers strictly to the panels (tab content) themselves.")],1)]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qtabs-api"},on:{click:function(a){return t.copyHeading("qtabs-api")}}},[t._v("QTabs API")]),a("doc-api",{attrs:{file:"QTabs"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qtab-api"},on:{click:function(a){return t.copyHeading("qtab-api")}}},[t._v("QTab API")]),a("doc-api",{attrs:{file:"QTab"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qroutetab-api"},on:{click:function(a){return t.copyHeading("qroutetab-api")}}},[t._v("QRouteTab API")]),a("doc-api",{attrs:{file:"QRouteTab"}}),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("QRouteTab won’t and cannot work with the UMD version because in that environment you don’t have Vue Router.")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(a){return t.copyHeading("usage")}}},[t._v("Usage")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("QTabs can be scrolled horizontally when the width is longer than the container width. Adjust your browser accordingly to see this in action.")]),a("p",[t._v("On a desktop you will see chevrons on either side that can be clicked.")]),a("p",[t._v("On a mobile, you can pan the tabs with your finger.")]),a("p",[t._v("If you want to force arrows to be visible on mobile use "),a("code",{staticClass:"doc-token"},[t._v("mobile-arrows")]),t._v(" prop.")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"basic"},on:{click:function(a){return t.copyHeading("basic")}}},[t._v("Basic")]),a("doc-example",{attrs:{title:"Basic",file:"QTabs/Basic"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"outside-inside-and-visible-on-mobile-arrows"},on:{click:function(a){return t.copyHeading("outside-inside-and-visible-on-mobile-arrows")}}},[t._v("Outside, inside and visible on mobile arrows")]),a("doc-example",{attrs:{title:"Outside, inside and visible on mobile arrows",file:"QTabs/ArrowsModifiers"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"vertical"},on:{click:function(a){return t.copyHeading("vertical")}}},[t._v("Vertical")]),a("doc-example",{attrs:{title:"Vertical (example with QSplitter)",file:"QTabs/Vertical"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dense"},on:{click:function(a){return t.copyHeading("dense")}}},[t._v("Dense")]),a("doc-example",{attrs:{title:"Dense",file:"QTabs/Dense"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"individual-colors"},on:{click:function(a){return t.copyHeading("individual-colors")}}},[t._v("Individual colors")]),a("doc-example",{attrs:{title:"Individual colors",file:"QTabs/IndividualColor"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"ripple"},on:{click:function(a){return t.copyHeading("ripple")}}},[t._v("Ripple")]),a("doc-example",{attrs:{title:"No ripple and custom ripple color",file:"QTabs/Ripples"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-indicator"},on:{click:function(a){return t.copyHeading("custom-indicator")}}},[t._v("Custom indicator")]),a("p",[t._v("In the examples below, please notice the last two QTabs: indicator at top and no indicator.")]),a("doc-example",{attrs:{title:"Custom indicator",file:"QTabs/CustomIndicator"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"tab-notifications"},on:{click:function(a){return t.copyHeading("tab-notifications")}}},[t._v("Tab notifications")]),a("p",[t._v("There are multiple ways to display tab notifications: with a QBadge, through an alert dot or (v1.9.14+) an alert icon (can be any).")]),a("doc-example",{attrs:{title:"Tab notifications",file:"QTabs/Notifying"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"alignment"},on:{click:function(a){return t.copyHeading("alignment")}}},[t._v("Alignment")]),a("p",[t._v("QTabs are responsive and the "),a("code",{staticClass:"doc-token"},[t._v("align")]),t._v(" prop (see below) becomes active when the container width (not window width) is bigger than the configured breakpoint. For demoing purposes, the tabs below have breakpoint disabled.")]),a("doc-example",{attrs:{title:"Alignment",file:"QTabs/Alignment"}}),a("p",[t._v("In the second QTabs from the example below, if window width is below 1024px then the “Movies” and “Photos” tabs will be replaced by a “More…” dropdown.")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-dropdown"},on:{click:function(a){return t.copyHeading("with-dropdown")}}},[t._v("With dropdown")]),a("doc-example",{attrs:{title:"With a dropdown",file:"QTabs/Dropdown"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"on-qtoolbar"},on:{click:function(a){return t.copyHeading("on-qtoolbar")}}},[t._v("On QToolbar")]),a("p",[t._v("Notice we need to specify the "),a("code",{staticClass:"doc-token"},[t._v("shrink")]),t._v(" prop. By default, QTabs tries to expand to all the available horizontal space, but in this case we are using it as a child of QToolbar so we don’t want that.")]),a("doc-example",{attrs:{title:"Tabs in a QToolbar",file:"QTabs/TabsInToolbar"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dynamic-update"},on:{click:function(a){return t.copyHeading("dynamic-update")}}},[t._v("Dynamic update")]),a("doc-example",{attrs:{title:"Dynamic tabs",file:"QTabs/DynamicTabs"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"along-with-qtabspanel"},on:{click:function(a){return t.copyHeading("along-with-qtabspanel")}}},[t._v("Along with QTabsPanel")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("QTabPanels can be used as standalone too. They do not depend on the presence of a QTabs. Also, they can be placed anywhere within a page, not just near a QTabs.")])]),a("doc-example",{attrs:{title:"Tabs with tab panels",file:"QTabs/TabsWithTabpanels"}}),a("p",[t._v("More info: "),a("doc-link",{attrs:{to:"/vue-components/tab-panels"}},[t._v("Tab Panels")]),t._v(".")],1),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"connecting-to-vue-router"},on:{click:function(a){return t.copyHeading("connecting-to-vue-router")}}},[t._v("Connecting to Vue Router")]),a("p",[t._v("You can use tabs together with Vue Router through "),a("code",{staticClass:"doc-token"},[t._v("QRouteTab")]),t._v(" component.\nThis component inherits everything from QTab, however it also has "),a("code",{staticClass:"doc-token"},[t._v("router-link")]),t._v(" properties bound to it. These allow for listening to the current app route and also triggering a route when clicked/tapped.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-tabs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/mails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alarm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/alarms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-tabs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("QRouteTab becomes “active” depending on your app’s route and not due to the v-model. So the initial value of v-model or changing the v-model directly will not also change the route of your app.")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"handling-custom-navigation"},on:{click:function(a){return t.copyHeading("handling-custom-navigation")}}},[t._v("Handling custom navigation")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("q-pa-md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("q-gutter-y-md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-tabs")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("no-caps")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bg-orange text-white shadow-2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: '1' } }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Activate in 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navDelay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: '2' } }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Do nothing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navCancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: '3' } }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Navigate to the second tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navRedirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: '4' } }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Navigate immediatelly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navPass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-tabs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("navDelay")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we cancel the default navigation")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('triggering navigation in 2s')")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('navigating as promised 2s ago')")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("navCancel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we cancel the default navigation")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("navRedirect")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we cancel the default navigation")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tab")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("noScroll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("navPass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])],1)},e=[],o=s("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Tabs",this.metaDesc="The QTabs, QTab and QRouteTab Vue components are a way of helping the user navigate between pages or tab panels.",this.related=[{name:"Tab Panels",category:"Vue Components",path:"/vue-components/tab-panels"},{name:"Button Toggle",category:"Form Components",path:"/vue-components/button-toggle"},{name:"Icon",category:"Vue Components",path:"/vue-components/icon"},{name:"Badge",category:"Vue Components",path:"/vue-components/badge"}],this.nav=[{name:"Table",category:"Vue Components",path:"/vue-components/table",dir:"left"},{name:"Tab Panels",category:"Vue Components",path:"/vue-components/tab-panels",dir:"right"}],this.toc=[{id:"qtabs-api",title:"QTabs API"},{id:"qtab-api",title:"QTab API"},{id:"qroutetab-api",title:"QRouteTab API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"outside-inside-and-visible-on-mobile-arrows",title:"Outside, inside and visible on mobile arrows",sub:!0},{id:"vertical",title:"Vertical",sub:!0},{id:"dense",title:"Dense",sub:!0},{id:"individual-colors",title:"Individual colors",sub:!0},{id:"ripple",title:"Ripple",sub:!0},{id:"custom-indicator",title:"Custom indicator",sub:!0},{id:"tab-notifications",title:"Tab notifications",sub:!0},{id:"alignment",title:"Alignment",sub:!0},{id:"with-dropdown",title:"With dropdown",sub:!0},{id:"on-qtoolbar",title:"On QToolbar",sub:!0},{id:"dynamic-update",title:"Dynamic update",sub:!0},{id:"along-with-qtabspanel",title:"Along with QTabsPanel",sub:!0},{id:"connecting-to-vue-router",title:"Connecting to Vue Router"},{id:"handling-custom-navigation",title:"Handling custom navigation",sub:!0}],this.copyHeading=o["a"]}},p=r,c=s("2877"),i=Object(c["a"])(p,n,e,!1,null,null,null);a["default"]=i.exports}}]);