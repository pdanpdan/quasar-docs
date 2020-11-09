(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[165],{"87ec":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("doc-page",{attrs:{title:"Dialog Plugin",related:t.related,nav:t.nav}},[s("p",[t._v("Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).")]),s("p",[t._v("From a UI perspective, you can think of Dialogs as a type of floating modal, which covers only a portion of the screen. This means Dialogs should only be used for quick user actions only.")]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("Dialogs can also be used as a component in your Vue file templates (for complex use-cases, like specific form components, selectable options, etc.). For this, go to "),s("doc-link",{attrs:{to:"/vue-components/dialog"}},[t._v("QDialog")]),t._v(" page.")],1)]),s("p",[t._v("The advantage of using Dialogs as Quasar Plugins as opposed to QDialog component is that the plugin can also be called from outside of Vue space and doesn’t require you to manage their templates. But as a result, their customization cannot be compared to their component counterpart.")]),s("p",[t._v("However, "),s("strong",[t._v("you can also supply a component for the Dialog Plugin to render")]),t._v(" (see the “Invoking custom component” section) which is a great way to avoid cluttering your Vue templates with inline dialogs (and it will also help you better organize your project files and also reuse dialogs).")]),s("p",[t._v("With the QDialog plugin, you can programmatically build three types of dialogs with the following form content:")]),s("ol",[s("li",[t._v("A prompt dialog - asking the user to fill in some sort of data in an input field.")]),s("li",[t._v("A set of options for the user to select from using either radio buttons or toggles (singular selection only) or check boxes (for multiple selections).")]),s("li",[t._v("A simple confirmation dialog, where the user can cancel or give her “ok” for a particular action or input.")])]),s("p",[t._v("In order to create #1, the prompting input form, you have the "),s("code",{staticClass:"doc-token"},[t._v("prompt")]),t._v(" property within the "),s("code",{staticClass:"doc-token"},[t._v("opts")]),t._v(" object.")]),s("p",[t._v("In order to create #2, the options selection form, you have the "),s("code",{staticClass:"doc-token"},[t._v("options")]),t._v(" property within the "),s("code",{staticClass:"doc-token"},[t._v("opts")]),t._v(" object.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(a){return t.copyHeading("Installation")}}},[t._v("Installation")]),s("doc-installation",{attrs:{plugins:"Dialog"}}),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(a){return t.copyHeading("Usage")}}},[t._v("Usage")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// outside of a Vue file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Dialog "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inside of a Vue file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("Please check the API card to see what the returned Object is.")]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Predefined"},on:{click:function(a){return t.copyHeading("Predefined")}}},[t._v("Predefined")]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("For all the examples below, also see the browser console while you check them out.")])]),s("div",{staticClass:"doc-note doc-note--warning"},[s("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),s("p",[t._v("This is not an exhaustive list of what you can do with Dialogs as Quasar Plugins. For further exploration check out the API section.")])]),s("doc-example",{attrs:{title:"Basic",file:"Dialog/Basic"}}),s("doc-example",{attrs:{title:"Dark mode",file:"Dialog/Dark"}}),s("doc-example",{attrs:{title:"Radios, Checkboxes, Toggles",file:"Dialog/Pickers"}}),s("doc-example",{attrs:{title:"Other options",file:"Dialog/OtherOptions"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic-validation"},on:{click:function(a){return t.copyHeading("Basic-validation")}}},[t._v("Basic validation "),s("q-badge",{attrs:{align:"top",label:"v1.8+"}})],1),s("p",[t._v("There is a basic validation system that you can use so that the user won’t be able to submit the dialog (click/tap on “OK” or press "),s("kbd",[t._v("ENTER")]),t._v(") until the expected values are filled in.")]),s("doc-example",{attrs:{title:"Prompt with validation",file:"Dialog/ValidationPrompt"}}),s("doc-example",{attrs:{title:"Options with validation",file:"Dialog/ValidationOptions"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Progress"},on:{click:function(a){return t.copyHeading("Progress")}}},[t._v("Progress "),s("q-badge",{attrs:{align:"top",label:"v1.13.3+"}})],1),s("doc-example",{attrs:{title:"Showing progress",file:"Dialog/Progress"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Using-HTML"},on:{click:function(a){return t.copyHeading("Using-HTML")}}},[t._v("Using HTML")]),s("p",[t._v("You can use HTML on title and message if you specify the "),s("code",{staticClass:"doc-token"},[t._v("html: true")]),t._v(" prop. "),s("strong",[t._v("Please note that this can lead to XSS attacks")]),t._v(", so make sure that you sanitize the message by yourself.")]),s("doc-example",{attrs:{title:"Unsafe HTML message",file:"Dialog/UnsafeHtml"}}),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Invoking-custom-component"},on:{click:function(a){return t.copyHeading("Invoking-custom-component")}}},[t._v("Invoking custom component")]),s("p",[t._v("You can also invoke your own custom component rather than relying on the default one that the Dialog plugin comes with out of the box. But in this case you will be responsible for handling everything (including your own component props).")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CustomComponent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'..path.to.component..'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional if you want to have access to")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Router, Vuex store, and so on, in your")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// custom component:")]),t._v("\n  parent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// becomes child of this Vue node")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ("this" points to your Vue component)')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// (prop was called "root" in < 1.1.0 and')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// still works, but recommending to switch")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// to the more appropriate "parent" name)')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// props forwarded to component")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// (everything except "component" and "parent" props above):')]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...more.props...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onOk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OK'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCancel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cancel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDismiss")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Called on OK or Cancel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("div",{staticClass:"doc-note doc-note--warning"},[s("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),s("p",[t._v("Your custom component however must follow the interface described below in order to perfectly hook into the Dialog plugin. "),s("strong",[t._v("Notice the “REQUIRED” comments")]),t._v(" and take it as is – just a bare-bone example, nothing more.")])]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-dialog")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@hide")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onDialogHide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-card")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("q-dialog-plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n        ...content\n        ... use q-card-section for it?\n      --\x3e")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- buttons example --\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-card-actions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("align")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onOKClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cancel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onCancelClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-card-actions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-card")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...your custom props")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// following method is REQUIRED")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// (don\'t change its name --\x3e "show")')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// following method is REQUIRED")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// (don\'t change its name --\x3e "hide")')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDialogHide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required to be emitted")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// when QDialog emits "hide" event')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hide'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onOKClick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// on OK, it is REQUIRED to")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// emit "ok" event (with optional payload)')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// before hiding the QDialog")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ok'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or with payload: this.$emit('ok', { ... })")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// then hiding dialog")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCancelClick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we just need to hide dialog")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Cordova%2FCapacitor-back-button"},on:{click:function(a){return t.copyHeading("Cordova%2FCapacitor-back-button")}}},[t._v("Cordova/Capacitor back button")]),s("p",[t._v("Quasar handles the back button for you by default so it can hide any opened Dialogs instead of the default behavior which is to return to the previous page (which is not a nice user experience).")]),s("p",[t._v("However, should you wish to disable this behavior, edit your /quasar.conf.js file:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for Cordova (only!):")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  framework"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cordova"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar handles app exit on mobile phone back button.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.9.3+ for true/false, v1.12.6+ for '*' wildcard and array values")]),t._v("\n        backButtonExit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On the other hand, the following completely")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disables Quasar's back button management.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.14.1+")]),t._v("\n        backButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for Capacitor (only!)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and Quasar v1.9.3+:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  framework"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      capacitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar handles app exit on mobile phone back button.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.9.3+ for true/false, v1.12.6+ for '*' wildcard and array values")]),t._v("\n        backButtonExit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On the other hand, the following completely")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disables Quasar's back button management.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.14.1+")]),t._v("\n        backButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Dialog-API"},on:{click:function(a){return t.copyHeading("Dialog-API")}}},[t._v("Dialog API")]),s("doc-api",{attrs:{file:"Dialog"}})],1)},e=[],o=s("8669"),r="Dialog Plugin | Quasar Framework",p="A Quasar plugin that provides an easy way to display a prompt, choice, confirmation or alert in the form of a dialog.",c={meta:{title:"Dialog Plugin",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created:function(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Predefined",title:"Predefined",sub:!0},{id:"Basic-validation",title:"Basic validation",sub:!0},{id:"Progress",title:"Progress",sub:!0},{id:"Using-HTML",title:"Using HTML",sub:!0},{id:"Invoking-custom-component",title:"Invoking custom component",sub:!0},{id:"Cordova%2FCapacitor-back-button",title:"Cordova/Capacitor back button"},{id:"Dialog-API",title:"Dialog API"}],this.related=[{name:"Dialog",category:"Vue Components",path:"/vue-components/dialog"},{name:"Bottom Sheet",category:"Quasar Plugins",path:"/quasar-plugins/bottom-sheet"}],this.nav=[{name:"Dark",category:"Quasar Plugins",path:"/quasar-plugins/dark",dir:"left"},{name:"Loading",category:"Quasar Plugins",path:"/quasar-plugins/loading",dir:"right"}]},methods:{copyHeading:o["a"]}},i=c,l=s("2877"),v=Object(l["a"])(i,n,e,!1,null,null,null);a["default"]=v.exports}}]);