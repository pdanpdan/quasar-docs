(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[265],{"0016":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("doc-page",{attrs:{title:"Tabs",related:t.related,nav:t.nav}},[s("p",[t._v("Tabs are a way of displaying more information using less window real estate. This page describes the tab selection part through QTabs, QTab and QRouteTab.")]),s("p",[t._v("One common use case for this component is in Layout’s header/footer. Please refer to "),s("doc-link",{attrs:{to:"/layout/layout"}},[t._v("Layouts")]),t._v(" and "),s("doc-link",{attrs:{to:"/layout/header-and-footer#example--playing-with-qtabs"}},[t._v("Header & Footer")]),t._v(" for references.")],1),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("Works great along with "),s("doc-link",{attrs:{to:"/vue-components/tab-panels"}},[t._v("QTabPanels")]),t._v(", a component which refers strictly to the panels (tab content) themselves.")],1)]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installation"},on:{click:function(a){return t.copyHeading("installation")}}},[t._v("Installation")]),s("p",[t._v("Cherry-pick only what you are using from list below.")]),s("doc-installation",{attrs:{components:["QTabs","QTab","QRouteTab"]}}),s("div",{staticClass:"doc-note doc-note--warning"},[s("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),s("p",[t._v("QRouteTab won’t and cannot work with the UMD version because in that environment you don’t have Vue Router.")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(a){return t.copyHeading("usage")}}},[t._v("Usage")]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("QTabs can be scrolled horizontally when the width is longer than the container width. Adjust your browser accordingly to see this in action.")]),s("p",[t._v("On a desktop you will see chevrons on either side that can be clicked.")]),s("p",[t._v("On a mobile, you can pan the tabs with your finger.")]),s("p",[t._v("If you want to force arrows to be visible on mobile use "),s("code",{staticClass:"doc-token"},[t._v("mobile-arrows")]),t._v(" prop.")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"basic"},on:{click:function(a){return t.copyHeading("basic")}}},[t._v("Basic")]),s("doc-example",{attrs:{title:"Basic",file:"QTabs/Basic"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"outside-inside-and-visible-on-mobile-arrows"},on:{click:function(a){return t.copyHeading("outside-inside-and-visible-on-mobile-arrows")}}},[t._v("Outside, inside and visible on mobile arrows")]),s("doc-example",{attrs:{title:"Outside, inside and visible on mobile arrows",file:"QTabs/ArrowsModifiers"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"vertical"},on:{click:function(a){return t.copyHeading("vertical")}}},[t._v("Vertical")]),s("doc-example",{attrs:{title:"Vertical (example with QSplitter)",file:"QTabs/Vertical"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dense"},on:{click:function(a){return t.copyHeading("dense")}}},[t._v("Dense")]),s("doc-example",{attrs:{title:"Dense",file:"QTabs/Dense"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"individual-colors"},on:{click:function(a){return t.copyHeading("individual-colors")}}},[t._v("Individual colors")]),s("doc-example",{attrs:{title:"Individual colors",file:"QTabs/IndividualColor"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"ripple"},on:{click:function(a){return t.copyHeading("ripple")}}},[t._v("Ripple")]),s("doc-example",{attrs:{title:"No ripple and custom ripple color",file:"QTabs/Ripples"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-indicator"},on:{click:function(a){return t.copyHeading("custom-indicator")}}},[t._v("Custom indicator")]),s("p",[t._v("In the examples below, please notice the last two QTabs: indicator at top and no indicator.")]),s("doc-example",{attrs:{title:"Custom indicator",file:"QTabs/CustomIndicator"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"tab-notifications"},on:{click:function(a){return t.copyHeading("tab-notifications")}}},[t._v("Tab notifications")]),s("p",[t._v("There are multiple ways to display tab notifications: with a QBadge, through an alert dot or (v1.9.14+) an alert icon (can be any).")]),s("doc-example",{attrs:{title:"Tab notifications",file:"QTabs/Notifying"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"alignment"},on:{click:function(a){return t.copyHeading("alignment")}}},[t._v("Alignment")]),s("p",[t._v("QTabs are responsive and the "),s("code",{staticClass:"doc-token"},[t._v("align")]),t._v(" prop (see below) becomes active when the container width (not window width) is bigger than the configured breakpoint. For demoing purposes, the tabs below have breakpoint disabled.")]),s("doc-example",{attrs:{title:"Alignment",file:"QTabs/Alignment"}}),s("p",[t._v("In the second QTabs from the example below, if window width is below 1024px then the “Movies” and “Photos” tabs will be replaced by a “More…” dropdown.")]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-dropdown"},on:{click:function(a){return t.copyHeading("with-dropdown")}}},[t._v("With dropdown")]),s("doc-example",{attrs:{title:"With a dropdown",file:"QTabs/Dropdown"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"on-qtoolbar"},on:{click:function(a){return t.copyHeading("on-qtoolbar")}}},[t._v("On QToolbar")]),s("p",[t._v("Notice we need to specify the "),s("code",{staticClass:"doc-token"},[t._v("shrink")]),t._v(" prop. By default, QTabs tries to expand to all the available horizontal space, but in this case we are using it as a child of QToolbar so we don’t want that.")]),s("doc-example",{attrs:{title:"Tabs in a QToolbar",file:"QTabs/TabsInToolbar"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dynamic-update"},on:{click:function(a){return t.copyHeading("dynamic-update")}}},[t._v("Dynamic update")]),s("doc-example",{attrs:{title:"Dynamic tabs",file:"QTabs/DynamicTabs"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"along-with-qtabspanel"},on:{click:function(a){return t.copyHeading("along-with-qtabspanel")}}},[t._v("Along with QTabsPanel")]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("QTabPanels can be used as standalone too. They do not depend on the presence of a QTabs. Also, they can be placed anywhere within a page, not just near a QTabs.")])]),s("doc-example",{attrs:{title:"Tabs with tab panels",file:"QTabs/TabsWithTabpanels"}}),s("p",[t._v("More info: "),s("doc-link",{attrs:{to:"/vue-components/tab-panels"}},[t._v("Tab Panels")]),t._v(".")],1),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"connecting-to-vue-router"},on:{click:function(a){return t.copyHeading("connecting-to-vue-router")}}},[t._v("Connecting to Vue Router")]),s("p",[t._v("You can use tabs together with Vue Router through "),s("code",{staticClass:"doc-token"},[t._v("QRouteTab")]),t._v(" component.\nThis component inherits everything from QTab, however it also has "),s("code",{staticClass:"doc-token"},[t._v("router-link")]),t._v(" properties bound to it. These allow for listening to the current app route and also triggering a route when clicked/tapped.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-tabs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/mails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alarm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/alarms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-tabs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("div",{staticClass:"doc-note doc-note--warning"},[s("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),s("p",[t._v("QRouteTab becomes “active” depending on your app’s route and not due to the v-model. So the initial value of v-model or changing the v-model directly will not also change the route of your app.")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"handling-custom-navigation"},on:{click:function(a){return t.copyHeading("handling-custom-navigation")}}},[t._v("Handling custom navigation")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("q-pa-md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("q-gutter-y-md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-tabs")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("no-caps")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bg-orange text-white shadow-2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" } }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Activate in 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navDelay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" } }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Do nothing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navCancel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" } }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Navigate to the second tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navRedirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-route-tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ query: { tab: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" } }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Navigate immediatelly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navPass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-tabs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navDelay")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we cancel the default navigation")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('triggering navigation in 2s')")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('navigating as promised 2s ago')")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navCancel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we cancel the default navigation")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navRedirect")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we cancel the default navigation")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" query"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" noScroll"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navPass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qtabs-api"},on:{click:function(a){return t.copyHeading("qtabs-api")}}},[t._v("QTabs API")]),s("doc-api",{attrs:{file:"QTabs"}}),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qtab-api"},on:{click:function(a){return t.copyHeading("qtab-api")}}},[t._v("QTab API")]),s("doc-api",{attrs:{file:"QTab"}}),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qroutetab-api"},on:{click:function(a){return t.copyHeading("qroutetab-api")}}},[t._v("QRouteTab API")]),s("doc-api",{attrs:{file:"QRouteTab"}})],1)},e=[],o=s("8669"),r="Tabs | Quasar Framework",p="The QTabs, QTab and QRouteTab Vue components are a way of helping the user navigate between pages or tab panels.",c={meta:{title:"Tabs",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created:function(){this.$root.store.toc=[{id:"installation",title:"Installation"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"outside-inside-and-visible-on-mobile-arrows",title:"Outside, inside and visible on mobile arrows",sub:!0},{id:"vertical",title:"Vertical",sub:!0},{id:"dense",title:"Dense",sub:!0},{id:"individual-colors",title:"Individual colors",sub:!0},{id:"ripple",title:"Ripple",sub:!0},{id:"custom-indicator",title:"Custom indicator",sub:!0},{id:"tab-notifications",title:"Tab notifications",sub:!0},{id:"alignment",title:"Alignment",sub:!0},{id:"with-dropdown",title:"With dropdown",sub:!0},{id:"on-qtoolbar",title:"On QToolbar",sub:!0},{id:"dynamic-update",title:"Dynamic update",sub:!0},{id:"along-with-qtabspanel",title:"Along with QTabsPanel",sub:!0},{id:"connecting-to-vue-router",title:"Connecting to Vue Router"},{id:"handling-custom-navigation",title:"Handling custom navigation",sub:!0},{id:"qtabs-api",title:"QTabs API"},{id:"qtab-api",title:"QTab API"},{id:"qroutetab-api",title:"QRouteTab API"}],this.related=[{name:"Tab Panels",category:"Vue Components",path:"/vue-components/tab-panels"},{name:"Button Toggle",category:"Form Components",path:"/vue-components/button-toggle"},{name:"Icon",category:"Vue Components",path:"/vue-components/icon"},{name:"Badge",category:"Vue Components",path:"/vue-components/badge"}],this.nav=[{name:"Table",category:"Vue Components",path:"/vue-components/table",dir:"left"},{name:"Tab Panels",category:"Vue Components",path:"/vue-components/tab-panels",dir:"right"}]},methods:{copyHeading:o["a"]}},i=c,l=s("2877"),u=Object(l["a"])(i,n,e,!1,null,null,null);a["default"]=u.exports}}]);