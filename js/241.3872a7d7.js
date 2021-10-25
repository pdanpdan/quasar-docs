(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[241],{d7d7:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Option Group",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[o("p",[t._v("The QOptionGroup component is a helper component that allows you better control for grouping binary (on or off, true or false, 1 or 0) form input components like checkboxes, radios or toggles. A good use for this component is for offering a set of options or settings to turn on and off.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qoptiongroup-api"},on:{click:function(e){return t.copyHeading("qoptiongroup-api")}}},[t._v("QOptionGroup API")]),o("doc-api",{attrs:{file:"QOptionGroup"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(e){return t.copyHeading("usage")}}},[t._v("Usage")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"standard"},on:{click:function(e){return t.copyHeading("standard")}}},[t._v("Standard")]),o("doc-example",{attrs:{title:"Standard",file:"QOptionGroup/Standard"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-qcheckbox-or-qtoggle"},on:{click:function(e){return t.copyHeading("with-qcheckbox-or-qtoggle")}}},[t._v("With QCheckbox or QToggle")]),o("doc-example",{attrs:{title:"With checkboxes",file:"QOptionGroup/Checkbox"}}),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("The model for checkboxes/toggles must be an array.")])]),o("doc-example",{attrs:{title:"With toggles",file:"QOptionGroup/Toggle"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"using-label-slots"},on:{click:function(e){return t.copyHeading("using-label-slots")}}},[t._v("Using label slots "),o("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.16+"}})],1),o("p",[t._v("There are two types of slots. A generic one ("),o("code",{staticClass:"doc-token"},[t._v("label")]),t._v(") which applies to all options, unless a more specific index-based one is used ("),o("code",{staticClass:"doc-token"},[t._v("label-N")]),t._v(" where N is the 0-based index of the option). Both types of slots receive the respective option as parameter.")]),o("p",[t._v("Notice how we use the specific label slot for first option (option at index 0) and we also add a QTooltip.")]),o("doc-example",{attrs:{title:"Label slots",file:"QOptionGroup/LabelSlots"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-labels-on-left-side"},on:{click:function(e){return t.copyHeading("with-labels-on-left-side")}}},[t._v("With labels on left side")]),o("doc-example",{attrs:{title:"With option labels on the left side",file:"QOptionGroup/Label"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"inline"},on:{click:function(e){return t.copyHeading("inline")}}},[t._v("Inline")]),o("doc-example",{attrs:{title:"Inline",file:"QOptionGroup/Inline"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dense"},on:{click:function(e){return t.copyHeading("dense")}}},[t._v("Dense")]),o("doc-example",{attrs:{title:"Dense and inline",file:"QOptionGroup/DenseInline"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"disable"},on:{click:function(e){return t.copyHeading("disable")}}},[t._v("Disable")]),o("doc-example",{attrs:{title:"Disabled",file:"QOptionGroup/Disable"}}),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("The objects within the "),o("code",{staticClass:"doc-token"},[t._v("options")]),t._v(" array can hold any of the props found in QToggle, QCheckbox or QRadio for instance "),o("code",{staticClass:"doc-token"},[t._v("disable")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("leftLabel")]),t._v(". See below for an example.")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"disable-certain-options"},on:{click:function(e){return t.copyHeading("disable-certain-options")}}},[t._v("Disable Certain Options")]),o("doc-example",{attrs:{title:"Disable Certain Options",file:"QOptionGroup/DisableCertainOptions"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dark"},on:{click:function(e){return t.copyHeading("dark")}}},[t._v("Dark")]),o("doc-example",{attrs:{title:"On a dark background",file:"QOptionGroup/Dark",dark:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"native-form-submit"},on:{click:function(e){return t.copyHeading("native-form-submit")}}},[t._v("Native form submit "),o("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9+"}})],1),o("p",[t._v("When dealing with a native form which has an "),o("code",{staticClass:"doc-token"},[t._v("action")]),t._v(" and a "),o("code",{staticClass:"doc-token"},[t._v("method")]),t._v(" (eg. when using Quasar with ASP.NET controllers), you need to specify the "),o("code",{staticClass:"doc-token"},[t._v("name")]),t._v(" property on QOptionGroup, otherwise formData will not contain it (if it should) - all value are converted to string (native behaviour, so do not use Object values):")]),o("doc-example",{attrs:{title:"Native form",file:"QOptionGroup/NativeForm"}})],1)},a=[],n=o("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="Option Group",this.metaDesc="The QOptionGroup Vue component allows you better control for grouping binary form input components like checkboxes, radios or toggles.",this.related=[{name:"Radio",category:"Form Components",path:"/vue-components/radio"},{name:"Checkbox",category:"Form Components",path:"/vue-components/checkbox"},{name:"Toggle",category:"Form Components",path:"/vue-components/toggle"},{name:"Button Toggle",category:"Form Components",path:"/vue-components/button-toggle"}],this.nav=[{name:"Button Toggle",category:"Form Components",path:"/vue-components/button-toggle",dir:"left"},{name:"Slider",category:"Form Components",path:"/vue-components/slider",dir:"right"}],this.toc=[{id:"qoptiongroup-api",title:"QOptionGroup API"},{id:"usage",title:"Usage"},{id:"standard",title:"Standard",sub:!0},{id:"with-qcheckbox-or-qtoggle",title:"With QCheckbox or QToggle",sub:!0},{id:"using-label-slots",title:"Using label slots",sub:!0},{id:"with-labels-on-left-side",title:"With labels on left side",sub:!0},{id:"inline",title:"Inline",sub:!0},{id:"dense",title:"Dense",sub:!0},{id:"disable",title:"Disable",sub:!0},{id:"disable-certain-options",title:"Disable Certain Options",sub:!0},{id:"dark",title:"Dark",sub:!0},{id:"native-form-submit",title:"Native form submit",sub:!0}],this.copyHeading=n["a"]}},l=s,c=o("2877"),r=Object(c["a"])(l,i,a,!1,null,null,null);e["default"]=r.exports}}]);