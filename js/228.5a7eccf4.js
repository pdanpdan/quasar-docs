(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[228],{2138:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Field",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("The QField component is used to provide common functionality and aspect to form components. It uses "),t("code",{staticClass:"doc-token"},[e._v(":value")]),e._v(" (or "),t("code",{staticClass:"doc-token"},[e._v("v-model")]),e._v(" if you want to use "),t("code",{staticClass:"doc-token"},[e._v("clearable")]),e._v(" property) to have knowledge of the model of the component inside. It has support for labels, hints, errors, validation, and comes in a variety of styles and colors.")]),t("p",[e._v("QField allows you to display any form control (or almost anything as a matter of fact) inside it. Just place your desired content inside the "),t("code",{staticClass:"doc-token"},[e._v("control")]),e._v(" slot.")]),t("div",{staticClass:"doc-note doc-note--danger"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("Do NOT wrap QInput, QFile or QSelect with QField as these components already inherit QField.")])]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qfield-api"},on:{click:function(t){return e.copyHeading("qfield-api")}}},[e._v("QField API")]),t("doc-api",{attrs:{file:"QField"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"design"},on:{click:function(t){return e.copyHeading("design")}}},[e._v("Design")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("The examples below use dumb content (text) just to show you the design that QField can use. For checking out examples that wrap real components, see the “Basic Features” section.")])]),t("div",{staticClass:"doc-note doc-note--danger"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("QField does not (and should not) manage your "),t("code",{staticClass:"doc-token"},[e._v("control")]),e._v(" slot, so if you use "),t("code",{staticClass:"doc-token"},[e._v("label")]),e._v(" prop, it might be a good idea to also specify "),t("code",{staticClass:"doc-token"},[e._v("stack-label")]),e._v(", otherwise it might overlap your control when QField is not focused.")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"overview"},on:{click:function(t){return e.copyHeading("overview")}}},[e._v("Overview")]),t("p",[e._v("For your QField you can use only one of the main designs ("),t("code",{staticClass:"doc-token"},[e._v("filled")]),e._v(", "),t("code",{staticClass:"doc-token"},[e._v("outlined")]),e._v(", "),t("code",{staticClass:"doc-token"},[e._v("outlined-md")]),e._v(", "),t("code",{staticClass:"doc-token"},[e._v("standout")]),e._v(", "),t("code",{staticClass:"doc-token"},[e._v("borderless")]),e._v("). You cannot use multiple as they are self-exclusive.")]),t("doc-example",{attrs:{title:"Design Overview",file:"QField/DesignOverview"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"coloring"},on:{click:function(t){return e.copyHeading("coloring")}}},[e._v("Coloring")]),t("doc-example",{attrs:{title:"Coloring",file:"QField/Coloring"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"standard"},on:{click:function(t){return e.copyHeading("standard")}}},[e._v("Standard")]),t("doc-example",{attrs:{title:"Standard",file:"QField/DesignStandard"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"filled"},on:{click:function(t){return e.copyHeading("filled")}}},[e._v("Filled")]),t("doc-example",{attrs:{title:"Filled",file:"QField/DesignFilled"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"outlined"},on:{click:function(t){return e.copyHeading("outlined")}}},[e._v("Outlined")]),t("doc-example",{attrs:{title:"Outlined",file:"QField/DesignOutlined"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"outlined-material-design"},on:{click:function(t){return e.copyHeading("outlined-material-design")}}},[e._v("Outlined - Material Design")]),t("doc-example",{attrs:{title:"Outlined - Material Design",file:"QField/DesignOutlinedMD"}}),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("If you use a "),t("code",{staticClass:"doc-token"},[e._v("prepend")]),e._v(" slot with something else than a default size icon then set on the component a CSS variable named "),t("code",{staticClass:"doc-token"},[e._v("--q-field-prepend-size")]),e._v(" with the (unitless) width of the content of the "),t("code",{staticClass:"doc-token"},[e._v("prepend")]),e._v(" slot (without the padding of the slot), so that the label can align on the correct position when floated.")]),t("p",[e._v("There is a similar CSS variable "),t("code",{staticClass:"doc-token"},[e._v("--q-field-append-size")]),e._v(" to adjust the length of the border at the end of the label when you use "),t("code",{staticClass:"doc-token"},[e._v("append")]),e._v(" slots (by default it works with one standard size icon or the "),t("code",{staticClass:"doc-token"},[e._v("clearable")]),e._v(" prop).")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"standout"},on:{click:function(t){return e.copyHeading("standout")}}},[e._v("Standout")]),t("doc-example",{attrs:{title:"Standout",file:"QField/DesignStandout"}}),t("p",[e._v("One of the most appropriate use cases for Standout design is in a QToolbar:")]),t("doc-example",{attrs:{title:"Standout in QToolbar",file:"QField/StandoutToolbar"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"borderless"},on:{click:function(t){return e.copyHeading("borderless")}}},[e._v("Borderless")]),t("p",[e._v("The "),t("code",{staticClass:"doc-token"},[e._v("borderless")]),e._v(" design allows you to seamlessly integrate your QField into other components without QField drawing a border around itself or changing its background color:")]),t("doc-example",{attrs:{title:"Borderless",file:"QField/Borderless"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"rounded-design"},on:{click:function(t){return e.copyHeading("rounded-design")}}},[e._v("Rounded design")]),t("p",[e._v("The "),t("code",{staticClass:"doc-token"},[e._v("rounded")]),e._v(" prop only works along with Filled, Outlined and Standout designs, as showcased in the example below:")]),t("doc-example",{attrs:{title:"Rounded",file:"QField/Rounded"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"square-borders"},on:{click:function(t){return e.copyHeading("square-borders")}}},[e._v("Square borders")]),t("p",[e._v("The "),t("code",{staticClass:"doc-token"},[e._v("square")]),e._v(" prop only makes sense along with Filled, Outlined and Standout designs, as showcased in the example below:")]),t("doc-example",{attrs:{title:"Square borders",file:"QField/SquareBorders"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dark-background"},on:{click:function(t){return e.copyHeading("dark-background")}}},[e._v("Dark background")]),t("doc-example",{attrs:{title:"Dark",file:"QField/Dark",dark:""}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"basic-features"},on:{click:function(t){return e.copyHeading("basic-features")}}},[e._v("Basic features")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"clearable"},on:{click:function(t){return e.copyHeading("clearable")}}},[e._v("Clearable")]),t("p",[e._v("As a helper, you can use "),t("code",{staticClass:"doc-token"},[e._v("clearable")]),e._v(" prop so user can reset model to "),t("code",{staticClass:"doc-token"},[e._v("null")]),e._v(" through an appended icon.")]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("If using "),t("code",{staticClass:"doc-token"},[e._v("clearable")]),e._v(" you must use "),t("code",{staticClass:"doc-token"},[e._v("v-model")]),e._v(" or listen on "),t("code",{staticClass:"doc-token"},[e._v("@input")]),e._v(" and update the value.")])]),t("doc-example",{attrs:{title:"Clearable",file:"QField/Clearable"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"control-types"},on:{click:function(t){return e.copyHeading("control-types")}}},[e._v("Control types")]),t("p",[e._v("Anything you place inside the "),t("code",{staticClass:"doc-token"},[e._v("control")]),e._v(" slot will be used as content of the field. We provide a few examples of controls below.")]),t("doc-example",{attrs:{title:"Control types",file:"QField/ControlTypes"}}),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("Most of the form controls always render something visible, so you if you’re using a "),t("code",{staticClass:"doc-token"},[e._v("label")]),e._v(" then you might want to set it along with "),t("code",{staticClass:"doc-token"},[e._v("stack-label")]),e._v(", otherwise the label will overlap the enclosed control.")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"prefix-and-suffix"},on:{click:function(t){return e.copyHeading("prefix-and-suffix")}}},[e._v("Prefix and suffix")]),t("doc-example",{attrs:{title:"Prefix and suffix",file:"QField/PrefixSuffix"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-label"},on:{click:function(t){return e.copyHeading("custom-label")}}},[e._v("Custom Label")]),t("p",[e._v("Using the "),t("code",{staticClass:"doc-token"},[e._v("label")]),e._v(" slot you can customize the aspect of the label or add special features as "),t("code",{staticClass:"doc-token"},[e._v("QTooltip")]),e._v(".")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("Do not forget to set the "),t("code",{staticClass:"doc-token"},[e._v("label-slot")]),e._v(" property.")]),t("p",[e._v("If you want to interact with the content of the label (QTooltip) add the "),t("code",{staticClass:"doc-token"},[e._v("all-pointer-events")]),e._v(" class on the element in the slot.")])]),t("doc-example",{attrs:{title:"Custom label",file:"QField/CustomLabel"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"slots-with-qbtn-type-submit"},on:{click:function(t){return e.copyHeading("slots-with-qbtn-type-submit")}}},[e._v("Slots with QBtn type “submit”")]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("When placing a QBtn with type “submit” in one of the “before”, “after”, “prepend”, or “append” slots of a QField, QInput or QSelect, you should also add a "),t("code",{staticClass:"doc-token"},[e._v("@click")]),e._v(" listener on the QBtn in question. This listener should call the method that submits your form. All “click” events in such slots are not propagated to their parent elements.")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"loading-state"},on:{click:function(t){return e.copyHeading("loading-state")}}},[e._v("Loading state")]),t("doc-example",{attrs:{title:"Loading state",file:"QField/LoadingState"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"validation"},on:{click:function(t){return e.copyHeading("validation")}}},[e._v("Validation")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"internal-validation"},on:{click:function(t){return e.copyHeading("internal-validation")}}},[e._v("Internal validation")]),t("p",[e._v("You can validate QField components with "),t("code",{staticClass:"doc-token"},[e._v(":rules")]),e._v(" prop. Specify array of embedded rules or your own validators. Your custom validator will be a function which returns "),t("code",{staticClass:"doc-token"},[e._v("true")]),e._v(" if validator succeeds or "),t("code",{staticClass:"doc-token"},[e._v("String")]),e._v(" with error message if it doesn’t succeed.")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("By default, for perf reasons, a change in the rules does not trigger a new validation until the model changes. In order to trigger the validation when rules change too, then use "),t("code",{staticClass:"doc-token"},[e._v("reactive-rules")]),e._v(" Boolean prop. The downside is a performance penalty (so use it when you really need this only!) and it can be slightly mitigated by using a computed prop as value for the rules (and not specify them inline in the vue template).")])]),t("p",[e._v("This is so you can write convenient rules of shape like:")]),t("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("value")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" condition "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" errorMessage\n")])]),t("p",[e._v("For example:")]),t("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("value")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Value should be lower'")]),e._v("\n")])]),t("p",[e._v("You can reset the validation by calling "),t("code",{staticClass:"doc-token"},[e._v("resetValidation()")]),e._v(" method on the QField.")]),t("doc-example",{attrs:{title:"Basic",file:"QField/ValidationRequired"}}),t("doc-example",{attrs:{title:"Maximum value",file:"QField/ValidationMaxValue"}}),t("p",[e._v("If you set "),t("code",{staticClass:"doc-token"},[e._v("lazy-rules")]),e._v(", validation starts after first blur. Starting with v1.11+, if "),t("code",{staticClass:"doc-token"},[e._v("lazy-rules")]),e._v(" is set to "),t("code",{staticClass:"doc-token"},[e._v("ondemand")]),e._v(" String, then validation will be triggered only when component’s validate() method is manually called or when the wrapper QForm submits itself.")]),t("doc-example",{attrs:{title:"Lazy rules",file:"QField/ValidationLazy"}}),t("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"async-rules"},on:{click:function(t){return e.copyHeading("async-rules")}}},[e._v("Async rules")]),t("p",[e._v("Rules can be async too, by using async/await or by directly returning a Promise.")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("Consider coupling async rules with "),t("code",{staticClass:"doc-token"},[e._v("debounce")]),e._v(" prop to avoid calling the async rules immediately on each keystroke, which might be detrimental to performance.")])]),t("doc-example",{attrs:{title:"Async rules",file:"QField/ValidationAsync"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"external-validation"},on:{click:function(t){return e.copyHeading("external-validation")}}},[e._v("External validation")]),t("p",[e._v("You can also use external validation and only pass "),t("code",{staticClass:"doc-token"},[e._v("error")]),e._v(" and "),t("code",{staticClass:"doc-token"},[e._v("error-message")]),e._v(" (enable "),t("code",{staticClass:"doc-token"},[e._v("bottom-slots")]),e._v(" to display this error message).")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("Depending on your needs, you might connect "),t("doc-link",{attrs:{to:"https://vuelidate.netlify.com/"}},[e._v("Vuelidate")]),e._v(" (our recommended approach) or some other validation library to QField.")],1)]),t("doc-example",{attrs:{title:"External",file:"QField/ValidationExternal"}}),t("p",[e._v("You can also customize the slot for error message:")]),t("doc-example",{attrs:{title:"Slot for error message",file:"QField/ValidationSlots"}})],1)},s=[],i=o("8669"),n={name:"DocMarkdownPage",created:function(){this.metaTitle="Field",this.metaDesc="The QField Vue component is used to provide common functionality and aspect to form components.",this.nav=[{name:"Form",category:"Form Components",path:"/vue-components/form",dir:"left"},{name:"Radio",category:"Form Components",path:"/vue-components/radio",dir:"right"}],this.toc=[{id:"qfield-api",title:"QField API"},{id:"design",title:"Design"},{id:"overview",title:"Overview",sub:!0},{id:"coloring",title:"Coloring",sub:!0},{id:"standard",title:"Standard",sub:!0},{id:"filled",title:"Filled",sub:!0},{id:"outlined",title:"Outlined",sub:!0},{id:"outlined-material-design",title:"Outlined - Material Design",sub:!0},{id:"standout",title:"Standout",sub:!0},{id:"borderless",title:"Borderless",sub:!0},{id:"rounded-design",title:"Rounded design",sub:!0},{id:"square-borders",title:"Square borders",sub:!0},{id:"dark-background",title:"Dark background",sub:!0},{id:"basic-features",title:"Basic features"},{id:"clearable",title:"Clearable",sub:!0},{id:"control-types",title:"Control types",sub:!0},{id:"prefix-and-suffix",title:"Prefix and suffix",sub:!0},{id:"custom-label",title:"Custom Label",sub:!0},{id:"slots-with-qbtn-type-submit",title:"Slots with QBtn type “submit”",sub:!0},{id:"loading-state",title:"Loading state",sub:!0},{id:"validation",title:"Validation"},{id:"internal-validation",title:"Internal validation",sub:!0},{id:"external-validation",title:"External validation",sub:!0}],this.copyHeading=i["a"]}},l=n,d=o("2877"),c=Object(d["a"])(l,a,s,!1,null,null,null);t["default"]=c.exports}}]);