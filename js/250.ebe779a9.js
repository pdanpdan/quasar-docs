(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[250],{"407e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Range",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("The QRange component is a great way to offer the user the selection of a sub-range of values between a minimum and maximum value, with optional steps to select those values. An example use case for the Range component would be to offer a price range selection.")]),t("p",[e._v("Also check out its “sibling”, the "),t("doc-link",{attrs:{to:"/vue-components/slider"}},[e._v("QSlider")]),e._v(" component.")],1),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qrange-api"},on:{click:function(t){return e.copyHeading("qrange-api")}}},[e._v("QRange API")]),t("doc-api",{attrs:{file:"QRange"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),t("p",[e._v("Notice we are using an object for the selection, which holds values for both the lower value of the selected range - "),t("code",{staticClass:"doc-token"},[e._v("rangeValues.min")]),e._v(" and the higher value - "),t("code",{staticClass:"doc-token"},[e._v("rangeValues.max")]),e._v(".")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"standard"},on:{click:function(t){return e.copyHeading("standard")}}},[e._v("Standard")]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("You are responsible for accommodating the space around QSlider so that the label and marker labels won’t overlap the other content on your page. You can use CSS margin or padding for this purpose.")])]),t("doc-example",{attrs:{title:"Standard",file:"QRange/Standard"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"vertical"},on:{click:function(t){return e.copyHeading("vertical")}}},[e._v("Vertical")]),t("doc-example",{attrs:{title:"Vertical orientation",file:"QRange/Vertical"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-inner-min-max"},on:{click:function(t){return e.copyHeading("with-inner-min-max")}}},[e._v("With inner min/max "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.17+"}})],1),t("p",[e._v("Sometimes you need to restrict the model value to an interval inside of the track’s length. For this purpose, use "),t("code",{staticClass:"doc-token"},[e._v("inner-min")]),e._v(" and "),t("code",{staticClass:"doc-token"},[e._v("inner-max")]),e._v(" props. First prop needs to be higher or equal to "),t("code",{staticClass:"doc-token"},[e._v("min")]),e._v(" prop while the latter needs to be lower or equal to the "),t("code",{staticClass:"doc-token"},[e._v("max")]),e._v(" prop.")]),t("doc-example",{attrs:{title:"Inner min/max",file:"QRange/InnerMinMax"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-step"},on:{click:function(t){return e.copyHeading("with-step")}}},[e._v("With step")]),t("doc-example",{attrs:{title:"With Step",file:"QRange/Step"}}),t("p",[e._v("The "),t("code",{staticClass:"doc-token"},[e._v("step")]),e._v(" property can also be a floating point number (or numeric "),t("code",{staticClass:"doc-token"},[e._v("0")]),e._v(" if you need infinite precision).")]),t("doc-example",{attrs:{title:"Floating point",file:"QRange/FloatingPoint"}}),t("doc-example",{attrs:{title:"Snaps to steps",file:"QRange/Snap"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-label"},on:{click:function(t){return e.copyHeading("with-label")}}},[e._v("With label")]),t("p",[e._v("In the example below, move the slider to see the label.")]),t("doc-example",{attrs:{title:"With label",file:"QRange/Label"}}),t("doc-example",{attrs:{title:"Always display label",file:"QRange/LabelAlways"}}),t("doc-example",{attrs:{title:"Custom label values",file:"QRange/LabelValue"}}),t("p",[e._v("The example below is better highlighting how QRange handles label positioning so that it always stays inside the QRange’s box horizontally.")]),t("doc-example",{attrs:{title:"Long label",file:"QRange/LabelLong"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"markers"},on:{click:function(t){return e.copyHeading("markers")}}},[e._v("Markers")]),t("doc-example",{attrs:{title:"Markers",file:"QRange/Markers"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"marker-labels"},on:{click:function(t){return e.copyHeading("marker-labels")}}},[e._v("Marker labels "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.17+"}})],1),t("doc-example",{attrs:{title:"Marker labels",file:"QRange/MarkerLabels"}}),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP on slots")]),t("p",[e._v("In order to use the marker label slots (see below), you must enable them by using the "),t("code",{staticClass:"doc-token"},[e._v("marker-labels")]),e._v(" prop.")])]),t("doc-example",{attrs:{title:"Marker label slots",file:"QRange/MarkerLabelSlots"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"other-customizations"},on:{click:function(t){return e.copyHeading("other-customizations")}}},[e._v("Other customizations "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.17+"}})],1),t("doc-example",{attrs:{title:"Color customizations",file:"QRange/RangeColoring"}}),t("doc-example",{attrs:{title:"Hide selection bar",file:"QRange/NoSelection"}}),t("doc-example",{attrs:{title:"Custom track images",file:"QRange/TrackImages"}}),t("doc-example",{attrs:{title:"Track & thumb size",file:"QRange/RangeSizes"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dragging-range"},on:{click:function(t){return e.copyHeading("dragging-range")}}},[e._v("Dragging range")]),t("p",[e._v("Use the "),t("code",{staticClass:"doc-token"},[e._v("drag-range")]),e._v(" or "),t("code",{staticClass:"doc-token"},[e._v("drag-only-range")]),e._v(" props to allow the user to move the selected range or only a predetermined range as a whole.")]),t("doc-example",{attrs:{title:"Drag range",file:"QRange/Drag"}}),t("doc-example",{attrs:{title:"Drag range + snap to step",file:"QRange/DragSnap"}}),t("doc-example",{attrs:{title:"Drag only range (fixed interval)",file:"QRange/DragOnly"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"lazy-input"},on:{click:function(t){return e.copyHeading("lazy-input")}}},[e._v("Lazy input")]),t("doc-example",{attrs:{title:"Lazy input",file:"QRange/Lazy"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"null-values"},on:{click:function(t){return e.copyHeading("null-values")}}},[e._v("Null values")]),t("doc-example",{attrs:{title:"Null values",file:"QRange/Null"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"reverse"},on:{click:function(t){return e.copyHeading("reverse")}}},[e._v("Reverse "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.5+"}})],1),t("doc-example",{attrs:{title:"In reverse",file:"QRange/Reverse"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dark-readonly-disable"},on:{click:function(t){return e.copyHeading("dark-readonly-disable")}}},[e._v("Dark, readonly, disable")]),t("doc-example",{attrs:{title:"Dark",file:"QRange/Dark",dark:""}}),t("doc-example",{attrs:{title:"Readonly",file:"QRange/Readonly"}}),t("doc-example",{attrs:{title:"Disable",file:"QRange/Disable"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-qitem"},on:{click:function(t){return e.copyHeading("with-qitem")}}},[e._v("With QItem")]),t("doc-example",{attrs:{title:"With QItem",file:"QRange/List"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"native-form-submit"},on:{click:function(t){return e.copyHeading("native-form-submit")}}},[e._v("Native form submit "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9+"}})],1),t("p",[e._v("When dealing with a native form which has an "),t("code",{staticClass:"doc-token"},[e._v("action")]),e._v(" and a "),t("code",{staticClass:"doc-token"},[e._v("method")]),e._v(" (eg. when using Quasar with ASP.NET controllers), you need to specify the "),t("code",{staticClass:"doc-token"},[e._v("name")]),e._v(" property on QRange, otherwise formData will not contain it (if it should):")]),t("doc-example",{attrs:{title:"Native form",file:"QRange/NativeForm"}})],1)},n=[],o=a("8669"),l={name:"DocMarkdownPage",created:function(){this.metaTitle="Range",this.metaDesc="The QRange Vue component offers a way for the user to select from a sub-range of values between a maximum and maximum value, with optional steps.",this.related=[{name:"Slider",category:"Form Components",path:"/vue-components/slider"},{name:"Field (wrapper)",category:"Form Components",path:"/vue-components/field"}],this.nav=[{name:"Slider",category:"Form Components",path:"/vue-components/slider",dir:"left"},{name:"Time Picker",category:"Form Components",path:"/vue-components/time",dir:"right"}],this.toc=[{id:"qrange-api",title:"QRange API"},{id:"usage",title:"Usage"},{id:"standard",title:"Standard",sub:!0},{id:"vertical",title:"Vertical",sub:!0},{id:"with-inner-min-max",title:"With inner min/max",sub:!0},{id:"with-step",title:"With step",sub:!0},{id:"with-label",title:"With label",sub:!0},{id:"markers",title:"Markers",sub:!0},{id:"marker-labels",title:"Marker labels",sub:!0},{id:"other-customizations",title:"Other customizations",sub:!0},{id:"dragging-range",title:"Dragging range",sub:!0},{id:"lazy-input",title:"Lazy input",sub:!0},{id:"null-values",title:"Null values",sub:!0},{id:"reverse",title:"Reverse",sub:!0},{id:"dark-readonly-disable",title:"Dark, readonly, disable",sub:!0},{id:"with-qitem",title:"With QItem",sub:!0},{id:"native-form-submit",title:"Native form submit",sub:!0}],this.copyHeading=o["a"]}},s=l,r=a("2877"),c=Object(r["a"])(s,i,n,!1,null,null,null);t["default"]=c.exports}}]);