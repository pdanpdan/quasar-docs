(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[192],{"7e3b":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Configure VS Code",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("This guide assumes you have already installed Quasar CLI 1.0 or greater and Visual Studio Code.")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"standard-es-lint-rules"},on:{click:function(s){return t.copyHeading("standard-es-lint-rules")}}},[t._v("Standard ES-Lint rules")]),e("p",[t._v("Without some customizations the default formatting in VS Code will generate a seemingly endless number of errors when "),e("code",{staticClass:"doc-token"},[t._v("quasar dev")]),t._v(" or "),e("code",{staticClass:"doc-token"},[t._v("quasar build")]),t._v(" commands are run because they include a call to es-lint with the ruleset specified when you create a project. The configuration in this guide is for the standard ruleset.")]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"install-vs-code-extensions-for-standard"},on:{click:function(s){return t.copyHeading("install-vs-code-extensions-for-standard")}}},[t._v("Install VS Code Extensions for Standard")]),e("ul",[e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}},[t._v("ESLint")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=octref.vetur"}},[t._v("Vetur")])],1)]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"update-vs-code-settings-file-for-standard"},on:{click:function(s){return t.copyHeading("update-vs-code-settings-file-for-standard")}}},[t._v("Update VS Code settings file for Standard")]),e("p",[t._v("To edit the settings, use the command "),e("code",{staticClass:"doc-token"},[t._v("Open Settings JSON")]),t._v(" in the Command Palette in the View menu (ctrl+shift+p).")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"editor.formatOnPaste"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"editor.formatOnSave"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"editor.codeActionsOnSave"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"source.fixAll"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"javascript.format.insertSpaceBeforeFunctionParenthesis"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"javascript.format.placeOpenBraceOnNewLineForControlBlocks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"javascript.format.placeOpenBraceOnNewLineForFunctions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"typescript.format.insertSpaceBeforeFunctionParenthesis"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"typescript.format.placeOpenBraceOnNewLineForControlBlocks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"typescript.format.placeOpenBraceOnNewLineForFunctions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"vetur.format.defaultFormatter.html"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js-beautify-html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"vetur.format.defaultFormatter.js"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vscode-typescript"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"test-standard-on-a-new-quasar-project"},on:{click:function(s){return t.copyHeading("test-standard-on-a-new-quasar-project")}}},[t._v("Test Standard on a new Quasar project")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# I selected default values for all options to create this guide")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create quasar\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or:")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init quasar\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# ..then select "App with Quasar CLI" and "Quasar v1" options')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ..and project folder: qt")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verify it runs without error")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" qt\n$ quasar dev\n")])]),e("p",[t._v("You can now edit files without violating the standard es-lint rules!")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"prettier-es-lint-rules"},on:{click:function(s){return t.copyHeading("prettier-es-lint-rules")}}},[t._v("Prettier ES-Lint rules")]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"install-vs-code-extensions-for-prettier"},on:{click:function(s){return t.copyHeading("install-vs-code-extensions-for-prettier")}}},[t._v("Install VS Code Extensions for Prettier")]),e("ul",[e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}},[t._v("ESLint")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"}},[t._v("Prettier")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=octref.vetur"}},[t._v("Vetur")])],1)]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"update-vs-code-settings-file-for-prettier"},on:{click:function(s){return t.copyHeading("update-vs-code-settings-file-for-prettier")}}},[t._v("Update VS Code settings file for Prettier")]),e("p",[t._v("To edit the settings use the command "),e("code",{staticClass:"doc-token"},[t._v("Open Settings JSON")]),t._v(" in the Command Palette in the View menu (ctrl+shift+p).")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"editor.formatOnPaste"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"editor.formatOnSave"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"editor.codeActionsOnSave"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"source.fixAll"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"vetur.format.defaultFormatter.html"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettyhtml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"vetur.format.defaultFormatter.js"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier-eslint"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"test-prettier-on-a-new-quasar-project"},on:{click:function(s){return t.copyHeading("test-prettier-on-a-new-quasar-project")}}},[t._v("Test Prettier on a new Quasar project")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# I selected default values for all options to create this guide")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# except for the linting profile, I selected prettier instead of standard")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create quasar\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or:")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init quasar\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# ..then select "App with Quasar CLI" and "Quasar v1" options')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ..and project folder: qtp")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verify it runs without error")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" qtp\n$ quasar dev\n")])]),e("p",[t._v("You can now edit files without violating the standard es-lint rules!")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"recommended-additional-vs-code-extensions-and-settings-updates"},on:{click:function(s){return t.copyHeading("recommended-additional-vs-code-extensions-and-settings-updates")}}},[t._v("Recommended additional VS Code extensions and settings updates")]),e("ul",[e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"}},[t._v("Auto Rename Tag")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"}},[t._v("Auto Close Tag")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"}},[t._v("Bracket Pair Colorizer")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}},[t._v("ESLint")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=lacroixdavid1.vscode-format-context-menu"}},[t._v("Format in context menus")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"}},[t._v("GitLens")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"}},[t._v("Import Cost")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented"}},[t._v("Sass")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint"}},[t._v("Sass Lint")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus"}},[t._v("language-stylus")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script"}},[t._v("npm")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"}},[t._v("npm Intellisense")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"}},[t._v("Prettier")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-attrs-sorter"}},[t._v("Sorting HTML and Jade attributes")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight"}},[t._v("TODO Highlight")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=octref.vetur"}},[t._v("Vetur")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek"}},[t._v("Vue Peek")])],1),e("li",[e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons"}},[t._v("VS Code Icons")])],1)]),e("p",[t._v("To edit the settings use the command "),e("code",{staticClass:"doc-token"},[t._v("Open Settings JSON")]),t._v(" in the Command Palette in the View menu (ctrl+shift+p).")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"attrsSorter.order"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"is"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-for"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-if"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-else-if"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-else"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-show"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-cloak"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-once"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-pre"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ref"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-slot"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-slot.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#.*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slot"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-model"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-model.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-bind"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-bind.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-text"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-text.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-html.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"class"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v-on.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data-.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ng-.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"for"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"href"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"values"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aria-.+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$unknown$"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"todohighlight.isEnable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"todohighlight.include"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.jsx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.tsx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.php"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.css"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.scss"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.vue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.styl"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"workbench.iconTheme"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vscode-icons"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"debugging-a-quasar-project-in-vs-code"},on:{click:function(s){return t.copyHeading("debugging-a-quasar-project-in-vs-code")}}},[t._v("Debugging a Quasar project in VS Code")]),e("ol",[e("li",[t._v("First, head to "),e("doc-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"}},[t._v("Debugger for Chrome")]),t._v(" and read it thoroughly.")],1),e("li",[t._v("Then, since Quasar is based on Vue, you will also want to refer to "),e("doc-link",{attrs:{to:"https://v2.vuejs.org/v2/cookbook/debugging-in-vscode.html"}},[t._v("Vue Cookbook for VSCode debugging")]),t._v(" for setting up debugging Vue apps.")],1)]),e("p",[t._v("The best approach is to open that in a browser beside this page so you can review these instructions as you are reading those instructions. And apply the changes to your project as you go.")]),e("p",[t._v("The first step of the Vue cookbook says it is to enable source maps. Quasar automatically enables source maps for development mode. Here is "),e("doc-link",{attrs:{to:"https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html"}},[t._v("a good article")]),t._v(" that describes the different values for the "),e("doc-link",{attrs:{to:"https://webpack.js.org/configuration/devtool/"}},[t._v("webpack devtool setting")]),t._v(" (the one that turns on or off source maps.) Quasar uses "),e("em",[t._v("cheap-module-eval-source-map")]),t._v(" by default.")],1),e("p",[t._v("While "),e("code",{staticClass:"doc-token"},[t._v("cheap-module-eval-source-map")]),t._v(" may build faster, it makes debugging harder and it makes debugging in VSCode near impossible. The recommended value of devtool in this case is "),e("code",{staticClass:"doc-token"},[t._v("source-map")]),t._v(". This makes debugging in VSCode work properly due to your full vue source files being available in the built in chrome debugger thus it will be easier to find your original source and easier to correctly locate the line that you want to set the break point to. If you want to enable this, you would add this line to your "),e("em",[t._v("quasar.config.js")]),t._v(" file:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is a configuration passed on")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to the underlying Webpack")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devtool")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-map'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("p",[t._v("Then you need to tell VSCode to add a configuration to the debugger. The easiest way to do that is to click on the bug icon on the action bar (for ltr languages, that is the bar on the far left). Once you click on that bug icon, the file tree area will switch to the debug and run area. Click on the gear icon in the title bar of that window and it will bring up a file called "),e("em",[t._v("launch.json")]),t._v(". This is where you put the different configurations of launching the application to be debugged. Here are the settings for launching a Quasar app in Chrome. For the Firefox version, look at the Vue cookbook mentioned above.")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"request"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Quasar App: chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"webRoot"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}/src"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"breakOnLoad"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sourceMapPathOverrides"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"webpack:///./src/*"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${webRoot}/*"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("p",[t._v("Now save the file, then select that configuration in the drop down on the title bar of the debug and run pane. Before you can launch the debugger, the app must be running. From the command line, launch dev mode of your app with "),e("code",{staticClass:"doc-token"},[t._v("quasar dev")]),t._v(". Then click the green “go” button in the debug and run pane to launch the debugging session and attach to your running app. You can now set break points and control step over/in/out etc, all from VSCode. You can also launch the built in Chrome debugger and it will stay in sync. This might be useful if you also have the "),e("doc-link",{attrs:{to:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"}},[t._v("Vue devtools")]),t._v(" installed (highly recommended).")],1),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("If you just want to use the Chrome or Firefox debuggers but you find it hard to locate the right source file in the browser source tab then you can use the debugger statement in your code to force the debugger to stop on that line and bring up the proper source code.")])])])},n=[],r=e("8669"),o={name:"DocMarkdownPage",created:function(){this.metaTitle="Configure VS Code",this.metaDesc="How to configure VSCode for best usage with Quasar.",this.nav=[{name:"Upgrade guide",category:"Getting Started",path:"/start/upgrade-guide",dir:"left"},{name:"Contribution Guide",category:"Contribution Guide",path:"/contribution-guide/contribution-guide",dir:"right"}],this.toc=[{id:"standard-es-lint-rules",title:"Standard ES-Lint rules"},{id:"install-vs-code-extensions-for-standard",title:"Install VS Code Extensions for Standard",sub:!0},{id:"update-vs-code-settings-file-for-standard",title:"Update VS Code settings file for Standard",sub:!0},{id:"test-standard-on-a-new-quasar-project",title:"Test Standard on a new Quasar project",sub:!0},{id:"prettier-es-lint-rules",title:"Prettier ES-Lint rules"},{id:"install-vs-code-extensions-for-prettier",title:"Install VS Code Extensions for Prettier",sub:!0},{id:"update-vs-code-settings-file-for-prettier",title:"Update VS Code settings file for Prettier",sub:!0},{id:"test-prettier-on-a-new-quasar-project",title:"Test Prettier on a new Quasar project",sub:!0},{id:"recommended-additional-vs-code-extensions-and-settings-updates",title:"Recommended additional VS Code extensions and settings updates"},{id:"debugging-a-quasar-project-in-vs-code",title:"Debugging a Quasar project in VS Code"}],this.copyHeading=r["a"]}},p=o,i=e("2877"),c=Object(i["a"])(p,a,n,!1,null,null,null);s["default"]=c.exports}}]);