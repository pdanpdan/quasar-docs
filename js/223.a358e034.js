(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[223],{"45b1":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"QDate",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("The QDate component provides a method to input date. Currently it supports Gregorian (default) and Persian calendars.")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("For handling date and/or time, also check out "),a("doc-link",{attrs:{to:"/quasar-utils/date-utils"}},[t._v("Quasar Date Utils")]),t._v(".")],1)]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qdate-api"},on:{click:function(e){return t.copyHeading("qdate-api")}}},[t._v("QDate API")]),a("doc-api",{attrs:{file:"QDate"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(e){return t.copyHeading("usage")}}},[t._v("Usage")]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("Notice that the actual date(s) of the model are all in String format.")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"basic"},on:{click:function(e){return t.copyHeading("basic")}}},[t._v("Basic")]),a("doc-example",{attrs:{title:"Basic",file:"QDate/Basic",overflow:""}}),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("For landscape mode, you can use it along with "),a("code",{staticClass:"doc-token"},[t._v("$q.screen")]),t._v(" to make QDate responsive. Example: "),a("code",{staticClass:"doc-token"},[t._v(':landscape="$q.screen.gt.xs"')]),t._v(". More info: "),a("doc-link",{attrs:{to:"/options/screen-plugin"}},[t._v("Quasar Screen Plugin")]),t._v(".")],1)]),a("doc-example",{attrs:{title:"Landscape",file:"QDate/Landscape",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"multiple-selection"},on:{click:function(e){return t.copyHeading("multiple-selection")}}},[t._v("Multiple selection "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.13+"}})],1),a("p",[t._v("Notice below that the model is an Array and we specify the “multiple” prop.")]),a("p",[t._v("Clicking on an already selected day will deselect it.")]),a("doc-example",{attrs:{title:"Multiple days",file:"QDate/SelectionMultiple",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"range-selection"},on:{click:function(e){return t.copyHeading("range-selection")}}},[t._v("Range selection "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.13+"}})],1),a("p",[t._v("Notice in the examples below that the model is an Object (single selection) or an Array of Objects (multiple selection).")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIPS")]),a("ul",[a("li",[t._v("Clicking on an already selected day will deselect it.")]),a("li",[t._v("The user’s current editing range can also be set programmatic through the "),a("code",{staticClass:"doc-token"},[t._v("setEditingRange")]),t._v(" method (check the API card).")]),a("li",[t._v("There are three useful events in regards to the current editing range: "),a("code",{staticClass:"doc-token"},[t._v("range-start")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("range-change")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("range-end")]),t._v(" (check the API card).")])])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("The "),a("code",{staticClass:"doc-token"},[t._v("range")]),t._v(" property is only partially compatible with the "),a("code",{staticClass:"doc-token"},[t._v("options")]),t._v(" prop: selected ranges might also include “unselectable” days.")])]),a("doc-example",{attrs:{title:"Single Range",file:"QDate/SelectionRange",overflow:""}}),a("doc-example",{attrs:{title:"Multiple ranges",file:"QDate/SelectionRangeMultiple",overflow:""}}),a("ul",[a("li",[t._v("Use 2 components to allow easy interval selection")])]),a("doc-example",{attrs:{title:"Interval selection",file:"QDate/IntervalSelection",overflow:""}}),a("ul",[a("li",[t._v("Adjust the selection to match a fixed interval")])]),a("doc-example",{attrs:{title:"Week selection",file:"QDate/WeekSelection",overflow:""}}),a("ul",[a("li",[t._v("Limit the minimum and maximum selection length")])]),a("doc-example",{attrs:{title:"Constrained interval selection",file:"QDate/IntervalSelectionConstrained",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-title-and-subtitle"},on:{click:function(e){return t.copyHeading("custom-title-and-subtitle")}}},[t._v("Custom title and subtitle")]),a("p",[t._v("When not in ‘minimal’ mode, QDate has a computed header title and subtitle. You can override it, like in the example below.")]),a("p",[t._v("When clicking on title then the QDate’s view is changed to the calendar and when clicking on subtitle, the view will switch to year picking.")]),a("doc-example",{attrs:{title:"Custom title and subtitle",file:"QDate/CustomTitleSubtitle",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"functionality"},on:{click:function(e){return t.copyHeading("functionality")}}},[t._v("Functionality")]),a("p",[t._v("When model is unfilled (like "),a("code",{staticClass:"doc-token"},[t._v("null")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("void 0")]),t._v("/"),a("code",{staticClass:"doc-token"},[t._v("undefined")]),t._v(") QDate still has to show the calendar for a month of a year. You can use "),a("code",{staticClass:"doc-token"},[t._v("default-year-month")]),t._v(" prop for this, otherwise the current month of the year will be shown:")]),a("doc-example",{attrs:{title:"Default year month",file:"QDate/DefaultYearMonth",overflow:""}}),a("p",[t._v("The default view can be changed.")]),a("doc-example",{attrs:{title:"Default view",file:"QDate/DefaultView",overflow:""}}),a("p",[t._v("The first day of the week is applied depending on the "),a("doc-link",{attrs:{to:"/options/quasar-language-packs"}},[t._v("Quasar Language Pack")]),t._v(" that you’ve set, but you can also force it, like in the example below.")],1),a("doc-example",{attrs:{title:"First day of week",file:"QDate/FirstDayOfWeek",overflow:""}}),a("p",[t._v("Clicking on the “Today” button sets date to current user date. Requires the header, so you can’t use it along with “minimal” mode:")]),a("doc-example",{attrs:{title:"Today button",file:"QDate/TodayBtn",overflow:""}}),a("doc-example",{attrs:{title:"Disable and readonly",file:"QDate/DisableReadonly",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"model-mask"},on:{click:function(e){return t.copyHeading("model-mask")}}},[t._v("Model mask")]),a("p",[t._v("The default model mask is "),a("code",{staticClass:"doc-token"},[t._v("YYYY/MM/DD")]),t._v(", however you can use custom ones too.")]),a("p",[t._v("The "),a("code",{staticClass:"doc-token"},[t._v("mask")]),t._v(" prop tokens can be found at "),a("doc-link",{attrs:{to:"/quasar-utils/date-utils#format-for-display"}},[t._v("Quasar Utils > Date utils")]),t._v(".")],1),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("Note on SSR")]),a("p",[t._v("Using "),a("code",{staticClass:"doc-token"},[t._v("x")]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v("X")]),t._v(" (timestamps) in the mask may cause hydration errors on the client, because decoding the model String must be done with "),a("code",{staticClass:"doc-token"},[t._v("new Date()")]),t._v(" which takes into account the local timezone. As a result, if the server is in a different timezone than the client, then the rendered output of the server will differ than the one on the client so hydration will fail.")])]),a("div",{staticClass:"doc-note doc-note--danger"},[a("p",{staticClass:"doc-note__title"},[t._v("Note on persian calendar")]),a("p",[t._v("When using the persian calendar, the mask for QDate is forced to "),a("code",{staticClass:"doc-token"},[t._v("YYYY/MM/DD")]),t._v(".")])]),a("doc-example",{attrs:{title:"Simple mask",file:"QDate/MaskSimple",overflow:""}}),a("p",[t._v("If you want to insert strings (including "),a("code",{staticClass:"doc-token"},[t._v("[")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("]")]),t._v(" characters) into your mask, make sure you escape them by surrounding them with "),a("code",{staticClass:"doc-token"},[t._v("[")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("]")]),t._v(", otherwise the characters might be interpreted as format tokens.")]),a("doc-example",{attrs:{title:"Mask with escaped characters",file:"QDate/MaskEscape",overflow:""}}),a("p",[t._v("Using the mask to connect a QDate and "),a("doc-link",{attrs:{to:"/vue-components/time"}},[t._v("QTime")]),t._v(" to the same model:")],1),a("doc-example",{attrs:{title:"QDate and QTime on same model",file:"QDate/MaskDateTime",overflow:""}}),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("If you want to programmatically set the value of QDate, you can do so by just re-assigning the value that you pass. However, the updated value needs to be a string in the same format as your mask. Eg. in the case your mask is "),a("code",{staticClass:"doc-token"},[t._v("'dddd, MMM D, YYYY'")]),t._v(", passing "),a("code",{staticClass:"doc-token"},[t._v("'2019/04/28'")]),t._v(" as value won’t work, you would need to pass "),a("code",{staticClass:"doc-token"},[t._v("'Sunday, Apr 28, 2019'")]),t._v(" instead.")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-ad-hoc-locale"},on:{click:function(e){return t.copyHeading("custom-ad-hoc-locale")}}},[t._v("Custom ad-hoc locale")]),a("p",[t._v("If, for some reason, you need to use a custom ad-hoc locale rather than the current Quasar Language Pack that has been set, you can use the "),a("code",{staticClass:"doc-token"},[t._v("locale")]),t._v(" prop:")]),a("doc-example",{attrs:{title:"Custom ad-hoc locale",file:"QDate/CustomLocale",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"coloring"},on:{click:function(e){return t.copyHeading("coloring")}}},[t._v("Coloring")]),a("doc-example",{attrs:{title:"Coloring",file:"QDate/Color",overflow:""}}),a("doc-example",{attrs:{title:"Dark",file:"QDate/Dark",overflow:"",dark:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"highlighting-events"},on:{click:function(e){return t.copyHeading("highlighting-events")}}},[t._v("Highlighting events")]),a("p",[t._v("The first example is using an array and the second example is using a function.")]),a("doc-example",{attrs:{title:"Events",file:"QDate/Events",overflow:""}}),a("doc-example",{attrs:{title:"Event color",file:"QDate/EventColor",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"day-scoped-slot"},on:{click:function(e){return t.copyHeading("day-scoped-slot")}}},[t._v("Day scoped slot")]),a("p",[t._v("You can use the "),a("code",{staticClass:"doc-token"},[t._v("day")]),t._v(" scoped slot to render custom event markers or tooltips specific to each day.")]),a("doc-example",{attrs:{title:"Day slot",file:"QDate/DaySlot",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"limiting-options"},on:{click:function(e){return t.copyHeading("limiting-options")}}},[t._v("Limiting options")]),a("ul",[a("li",[t._v("You can use the "),a("code",{staticClass:"doc-token"},[t._v("options")]),t._v(" prop to limit user selection to certain times.")]),a("li",[t._v("Alternatively, for a more in-depth way of limiting options, you can also supply a function (second and third example below) to "),a("code",{staticClass:"doc-token"},[t._v("options-fn")]),t._v(" prop.")])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("The "),a("code",{staticClass:"doc-token"},[t._v("options")]),t._v(" property is only partially compatible with the "),a("code",{staticClass:"doc-token"},[t._v("range")]),t._v(" prop. Ranges might contain “unselectable” days.")])]),a("doc-example",{attrs:{title:"Options",file:"QDate/Options",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"applying-navigation-boundaries"},on:{click:function(e){return t.copyHeading("applying-navigation-boundaries")}}},[t._v("Applying navigation boundaries "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.13+"}})],1),a("p",[t._v("In the example below the navigation is restricted between 2020/07 and 2020/09.")]),a("doc-example",{attrs:{title:"Navigation boundaries",file:"QDate/NavigationBoundaries",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-additional-buttons"},on:{click:function(e){return t.copyHeading("with-additional-buttons")}}},[t._v("With additional buttons "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.2.8+"}})],1),a("p",[t._v("You can use the default slot for adding buttons:")]),a("doc-example",{attrs:{title:"With additional buttons",file:"QDate/AdditionalButtons",overflow:""}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-qsplitter-and-qtabpanels"},on:{click:function(e){return t.copyHeading("with-qsplitter-and-qtabpanels")}}},[t._v("With QSplitter and QTabPanels")]),a("doc-example",{attrs:{title:"With QSplitter and QTabPanels",file:"QDate/Splitter"}}),a("p",[t._v("More info: "),a("doc-link",{attrs:{to:"/vue-components/splitter"}},[t._v("QSplitter")]),t._v(", "),a("doc-link",{attrs:{to:"/vue-components/tab-panels"}},[t._v("QTabPanels")]),t._v(".")],1),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-qinput"},on:{click:function(e){return t.copyHeading("with-qinput")}}},[t._v("With QInput")]),a("doc-example",{attrs:{title:"With QInput",file:"QDate/Input"}}),a("p",[t._v("Connecting a QDate and QTime with same model on a QInput:")]),a("doc-example",{attrs:{title:"QDate and QTime with QInput",file:"QDate/InputFull",overflow:""}}),a("p",[t._v("The following are "),a("strong",[t._v("helpers")]),t._v(" for QInput "),a("code",{staticClass:"doc-token"},[t._v("mask")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("rules")]),t._v(" props. You can use these for convenience or write the string specifying your "),a("doc-link",{attrs:{to:"/vue-components/input#mask"}},[t._v("custom needs")]),t._v(".")],1),a("ul",[a("li",[t._v("Property "),a("code",{staticClass:"doc-token"},[t._v("mask")]),t._v(" helpers: "),a("doc-link",{attrs:{to:"https://github.com/pdanpdan/quasar/blob/dev-pdan/ui/src/mixins/mask.js#L2"}},[t._v("full list")]),t._v(".")],1),a("li",[t._v("Property "),a("code",{staticClass:"doc-token"},[t._v("rules")]),t._v(" helpers: "),a("doc-link",{attrs:{to:"https://github.com/pdanpdan/quasar/blob/dev-pdan/ui/src/utils/patterns.js"}},[t._v("full list")]),t._v(".")],1)]),a("p",[t._v("Examples: “date”, “time”, “fulltime”.")]),a("p",[t._v("More info: "),a("doc-link",{attrs:{to:"/vue-components/input"}},[t._v("QInput")]),t._v(".")],1),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"persian-calendar"},on:{click:function(e){return t.copyHeading("persian-calendar")}}},[t._v("Persian calendar")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("You can couple this with a Quasar "),a("doc-link",{attrs:{to:"/options/quasar-language-packs"}},[t._v("language pack")]),t._v(" such as Persian (Farsi, "),a("code",{staticClass:"doc-token"},[t._v("fa-ir")]),t._v(") to have the QDate strings translated too, for the full experience.")],1)]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("When using the persian calendar, the mask for QDate is forced to "),a("code",{staticClass:"doc-token"},[t._v("YYYY/MM/DD")]),t._v(".")])]),a("q-btn",{attrs:{href:"https://codepen.io/rstoenescu/pen/MWKpbNa",target:"_blank",label:"See example","icon-right":"launch",color:"brand-primary"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"native-form-submit"},on:{click:function(e){return t.copyHeading("native-form-submit")}}},[t._v("Native form submit "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9+"}})],1),a("p",[t._v("When dealing with a native form which has an "),a("code",{staticClass:"doc-token"},[t._v("action")]),t._v(" and a "),a("code",{staticClass:"doc-token"},[t._v("method")]),t._v(" (eg. when using Quasar with ASP.NET controllers), you need to specify the "),a("code",{staticClass:"doc-token"},[t._v("name")]),t._v(" property on QDate, otherwise formData will not contain it (if it should):")]),a("doc-example",{attrs:{title:"Native form",file:"QDate/NativeForm"}})],1)},i=[],s=a("8669"),n={name:"DocMarkdownPage",created:function(){this.metaTitle="QDate",this.metaDesc="The QDate Vue component provides a method to input dates from Gregorian or Persian calendars.",this.related=[{name:"Time Picker",category:"Form Components",path:"/vue-components/time"},{name:"Date Utils",category:"Quasar Utils",path:"/quasar-utils/date-utils"},{name:"Field (wrapper)",category:"Form Components",path:"/vue-components/field"}],this.nav=[{name:"Time Picker",category:"Form Components",path:"/vue-components/time",dir:"left"},{name:"Icon",category:"Vue Components",path:"/vue-components/icon",dir:"right"}],this.toc=[{id:"qdate-api",title:"QDate API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"multiple-selection",title:"Multiple selection",sub:!0},{id:"range-selection",title:"Range selection",sub:!0},{id:"custom-title-and-subtitle",title:"Custom title and subtitle",sub:!0},{id:"functionality",title:"Functionality",sub:!0},{id:"model-mask",title:"Model mask",sub:!0},{id:"custom-ad-hoc-locale",title:"Custom ad-hoc locale",sub:!0},{id:"coloring",title:"Coloring",sub:!0},{id:"highlighting-events",title:"Highlighting events",sub:!0},{id:"day-scoped-slot",title:"Day scoped slot",sub:!0},{id:"limiting-options",title:"Limiting options",sub:!0},{id:"applying-navigation-boundaries",title:"Applying navigation boundaries",sub:!0},{id:"with-additional-buttons",title:"With additional buttons",sub:!0},{id:"with-qsplitter-and-qtabpanels",title:"With QSplitter and QTabPanels",sub:!0},{id:"with-qinput",title:"With QInput",sub:!0},{id:"persian-calendar",title:"Persian calendar",sub:!0},{id:"native-form-submit",title:"Native form submit",sub:!0}],this.copyHeading=s["a"]}},l=n,c=a("2877"),d=Object(c["a"])(l,o,i,!1,null,null,null);e["default"]=d.exports}}]);