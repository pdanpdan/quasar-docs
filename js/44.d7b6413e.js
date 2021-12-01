(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"685b":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Icon Genie CLI Installation",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[n("p",[e._v("Make sure that you have Node >=10 and NPM >=5 installed on your machine.")]),n("div",{staticClass:"doc-note doc-note--warning"},[n("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),n("p",[n("strong",[e._v("Do not use uneven versions of Node i.e. 11, 13, etc.")]),e._v(" These versions aren’t tested with Quasar and often cause issues due to their experimental nature. We highly recommend always using the LTS version of Node.")])]),n("p",[e._v("You will be installing the Icon Genie CLI globally. You don’t need to install it in your project folder.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Node.js >=10 is required.")]),e._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @quasar/icongenie\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @quasar/icongenie\n")])]),n("p",[e._v("This will install the "),n("code",{staticClass:"doc-token"},[e._v("icongenie")]),e._v(" command line tool.")]),n("div",{staticClass:"doc-note doc-note--tip"},[n("p",{staticClass:"doc-note__title"},[e._v("Attention developers on Windows")]),n("p",[e._v("If you get an error like “pngquant failed to build” then you need to also globally install windows-build-tools (“yarn global add windows-build-tools” or “npm install --global windows-build-tools”). Then go to C:\\Users\\<windows_username>\\.windows-build-tools and run vs_BuildTools.exe. From there select npm/yarn and python to install. After this step it might require you to reboot your machine, otherwise you can now install @quasar/icongenie.")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installation-tips"},on:{click:function(t){return e.copyHeading("installation-tips")}}},[e._v("Installation tips")]),n("p",[e._v("If you are using Yarn, make sure that the Yarn "),n("doc-link",{attrs:{to:"https://yarnpkg.com/lang/en/docs/cli/global/"}},[e._v("global install location")]),e._v(" is in your PATH:")],1),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# in ~/.bashrc or equivalent")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global bin"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v('"')]),e._v("\n")])]),n("p",[e._v("Under Windows, modify user’s PATH environment variable. If you are using yarn then add "),n("code",{staticClass:"doc-token"},[e._v("%LOCALAPPDATA%\\yarn\\bin")]),e._v(", otherwise if you’re using npm then add "),n("code",{staticClass:"doc-token"},[e._v("%APPDATA%\\npm")]),e._v(".")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"upgrading-to-icon-genie-v2"},on:{click:function(t){return e.copyHeading("upgrading-to-icon-genie-v2")}}},[e._v("Upgrading to Icon Genie v2")]),n("p",[e._v("This section applies to those that have been using Icon Genie v1 and are now upgrading to Icon Genie v2.")]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"npm-package-name-change"},on:{click:function(t){return e.copyHeading("npm-package-name-change")}}},[e._v("NPM package name change")]),n("p",[e._v("Version 1 was a Quasar "),n("doc-link",{attrs:{to:"/app-extensions/introduction"}},[e._v("App Extension")]),e._v(" and so you installed it into your project folder. The new version (v2) does NOT need to be installed locally as it is installed globally. Your CI/CD will not need it as it is a one-time process and the output files (images) will be added directly to your project folder.")],1),n("p",[e._v("As a consequence, please uninstall Icon Genie v1 from your project folder:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# from your Quasar CLI project folder:")]),e._v("\n$ quasar ext remove @quasar/icon-genie\n")])]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"input-files"},on:{click:function(t){return e.copyHeading("input-files")}}},[e._v("Input files")]),n("p",[e._v("With version 1 you required to have an app-icon.png and an app-splashscreen.png (at a fixed width and height). This is no longer the case with version 2. You will now just need a png file (its name can be anything) with transparency and with minimum of 64x64 px (but the higher, the better! – recommended min size: 1024x1024) for the icon, and then another optional png (any name) for the background of the splash screens (min 128x128 px, but recommended minimum is 1024x1024 px).")]),n("p",[e._v("The splash screens work in a completely different manner too. They will get generated with the icon on top of the optional background. The size ratio of the icon to width or height (whichever is lower) can be adjusted with the CLI params ("),n("code",{staticClass:"doc-token"},[e._v("--splashscreen-icon-ratio")]),e._v("). You can even tell Icon Genie that the ratio is 0 so it won’t add the icon on top of the background.")]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"output-files"},on:{click:function(t){return e.copyHeading("output-files")}}},[e._v("Output files")]),n("p",[e._v("We have refined the list of icons and splash screens that are generated to match the latest standards and to also avoid duplication. So you will notice that some of the older files don’t get generated anymore and some are completely new. Icon Genie will now tell you what tags you need to add (if any) to your /src/index.template.html ("),n("strong",[e._v("you can copy paste the tags and replace your old ones")]),e._v(") – so be mindful about the list of tags.")]),n("p",[e._v("It might be a good idea to delete all your current icon/splashscreen files and let Icon Genie do its job again. This way you will be sure that what you’re left with is actually used in your Quasar App.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"whats-new-in-icon-genie-v2"},on:{click:function(t){return e.copyHeading("whats-new-in-icon-genie-v2")}}},[e._v("What’s new in Icon Genie v2")]),n("p",[e._v("Icon Genie v2 is a complete rewrite from top to bottom.")]),n("ul",[n("li",[e._v("Icon Genie is now a CLI on its own, not a Quasar App Extension any more.")]),n("li",[e._v("The input files (for the icon and the background) can have any name, be placed anywhere, and they don’t need to have a fixed width + height. Starting with v2.1, the icon input file does not needs to have same width and height. Also, the icon input file is now automatically trimmed.")]),n("li",[e._v("You can now configure a padding for the icon input file. (v2.1+)")]),n("li",[e._v("We have refined the list of icons and splash screens that get generated to match the latest standards and to also avoid duplication.")]),n("li",[e._v("Splash screens are created in a better manner, with the icon on top of the background (with the icon having any size ratio that you want, including 0 which means: “I only want the background image with no icon on top”)")]),n("li",[e._v("New commands: "),n("doc-link",{attrs:{to:"/icongenie/command-list#generate"}},[e._v("generate")]),e._v(", "),n("doc-link",{attrs:{to:"/icongenie/command-list#verify"}},[e._v("verify")]),e._v(", and "),n("doc-link",{attrs:{to:"/icongenie/command-list#profile"}},[e._v("profile")]),e._v(", each with its own purpose.")],1),n("li",[e._v("The "),n("code",{staticClass:"doc-token"},[e._v("generate")]),e._v(" command now also shows you what tags you need in your "),n("code",{staticClass:"doc-token"},[e._v("/src/index.template.html")]),e._v(" file.")]),n("li",[e._v("The "),n("code",{staticClass:"doc-token"},[e._v("verify")]),e._v(" command can even check if every file is in the right place and it has the right width by height.")]),n("li",[e._v("A lot of new parameters: quality, svg-color, png-color, splashscreen-color, splashscreen-icon-ratio, etc etc. Check the "),n("doc-link",{attrs:{to:"/icongenie/command-list"}},[e._v("command list")]),e._v(" page.")],1),n("li",[e._v("You can now control each type of asset (ico, png, splashscreen, …) for each Quasar mode individually, each with its own settings/parameters. Check the "),n("code",{staticClass:"doc-token"},[e._v("--filter")]),e._v(", "),n("code",{staticClass:"doc-token"},[e._v("--quality")]),e._v(" and all the color parameters. One good use case is with the "),n("code",{staticClass:"doc-token"},[e._v(".ico")]),e._v(" files.")]),n("li",[e._v("Automation is now possible through Icon Genie "),n("doc-link",{attrs:{to:"/icongenie/profile-files"}},[e._v("profile files")]),e._v(".")],1),n("li",[e._v("You can now "),n("strong",[e._v("generate your own custom image files")]),e._v(" using the Icon Genie API through the "),n("doc-link",{attrs:{to:"/icongenie/profile-files"}},[e._v("profile files")]),e._v(".")],1)]),n("p",[e._v("Finally, we need to emphasize again on the "),n("code",{staticClass:"doc-token"},[e._v("quality")]),e._v(" parameter, which will dictate how good-looking and how big (KB) your images will be.")])])},a=[],i=n("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="Icon Genie CLI Installation",this.metaDesc="How to install the Icon Genie CLI on your development machine.",this.nav=[{name:"Introduction",category:"Icon Genie CLI",path:"/icongenie/introduction",dir:"left"},{name:"Command list",category:"Icon Genie CLI",path:"/icongenie/command-list",dir:"right"}],this.toc=[{id:"installation-tips",title:"Installation tips"},{id:"upgrading-to-icon-genie-v2",title:"Upgrading to Icon Genie v2"},{id:"npm-package-name-change",title:"NPM package name change",sub:!0},{id:"input-files",title:"Input files",sub:!0},{id:"output-files",title:"Output files",sub:!0},{id:"whats-new-in-icon-genie-v2",title:"What’s new in Icon Genie v2"}],this.copyHeading=i["a"]}},c=s,l=n("2877"),r=Object(l["a"])(c,o,a,!1,null,null,null);t["default"]=r.exports}}]);