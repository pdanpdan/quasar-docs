(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[97],{"25ca":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{title:"Preparation for Capacitor App",nav:t.nav}},[a("p",[t._v("Before we dive in to the actual development, we need to do some preparation work.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"1.-Installation"},on:{click:function(e){return t.copyHeading("1.-Installation")}}},[t._v("1. Installation")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Android-setup"},on:{click:function(e){return t.copyHeading("Android-setup")}}},[t._v("Android setup")]),a("ul",[a("li",[a("p",[t._v("You will need to install Android Studio and the Android platform SDK on your machine. You can "),a("doc-link",{attrs:{to:"https://developer.android.com/studio/index.html"}},[t._v("download the Android Studio here")]),t._v(" and follow these "),a("doc-link",{attrs:{to:"https://developer.android.com/studio/install.html"}},[t._v("installation steps")]),t._v(" afterwards.")],1)]),a("li",[a("p",[t._v("Make sure that after you install the Android SDK you then accept its licenses. Open the terminal and go to the folder where the SDK was installed, in tools/bin and call "),a("code",{staticClass:"doc-token"},[t._v("sdkmanager --licenses")]),t._v(".")])]),a("li",[a("p",[t._v("Add Android installation to your path:")])])]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Unix-(macOS%2C-linux)"},on:{click:function(e){t.copyHeading("Unix-(macOS%2C-linux)")}}},[t._v("Unix (macOS, linux)")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ANDROID_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/Android/Sdk"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ANDROID_HOME")]),t._v("/tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ANDROID_HOME")]),t._v("/platform-tools\n")])]),a("blockquote",{staticClass:"doc-note"},[a("p",[t._v("Please note that sometimes the "),a("code",{staticClass:"doc-token"},[t._v("/Android/Sdk")]),t._v(" folder is added inside "),a("code",{staticClass:"doc-token"},[t._v("/Library/")]),t._v(" inside your user folder. Check your user folder and if the "),a("code",{staticClass:"doc-token"},[t._v("/Android/")]),t._v(" folder is only inside "),a("code",{staticClass:"doc-token"},[t._v("/Library/")]),t._v(" do: "),a("code",{staticClass:"doc-token"},[t._v('export ANDROID_HOME="$HOME/Library/Android/Sdk"')]),t._v(" instead.")])]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Windows"},on:{click:function(e){return t.copyHeading("Windows")}}},[t._v("Windows")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("setx ANDROID_HOME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"')]),t._v("\nsetx path "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%path%;%ANDROID_HOME%'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v('ools;%ANDROID_HOME%\\platform-tools"')]),t._v("\n")])]),a("ul",[a("li",[a("p",[t._v("Start Android studio (check the executable in the folder that you installed it in). Next step is to install the individual SDKs:")])]),a("li",[a("p",[t._v("Open the “Configure” menu at the bottom of the window:")]),a("p",[a("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-Menu.png",alt:"",title:"SDK manager"}})])]),a("li",[a("p",[t._v("Select the desired SDKs and click on “Apply” to install the SDKs.")]),a("p",[a("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-selection.png",alt:"",title:"SDK selection"}})])])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"iOS-setup"},on:{click:function(e){return t.copyHeading("iOS-setup")}}},[t._v("iOS setup")]),a("p",[t._v("You will need a macOS with "),a("doc-link",{attrs:{to:"https://developer.apple.com/xcode/"}},[t._v("Xcode")]),t._v(" installed. After you’ve installed it, open Xcode in order to get the license prompt. Accept the license, then you can close it.")],1),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"2.-Add-Capacitor-Quasar-Mode"},on:{click:function(e){return t.copyHeading("2.-Add-Capacitor-Quasar-Mode")}}},[t._v("2. Add Capacitor Quasar Mode")]),a("p",[t._v("In order to develop/build a Mobile app, we need to add the Capacitor mode to our Quasar project. This will use the Capacitor CLI to generate a Capacitor project in "),a("code",{staticClass:"doc-token"},[t._v("/src-capacitor")]),t._v(" folder.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar mode "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" capacitor\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"3.-Start-Developing"},on:{click:function(e){return t.copyHeading("3.-Start-Developing")}}},[t._v("3. Start Developing")]),a("p",[t._v("To start a dev server with HMR, run the command below:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar dev -m capacitor -T "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("p",[t._v("Once the dev server is ready, your IDE will open (Android Studio or Xcode)and from there you can manually select the emulator (or multiple ones simultaneously!) and install the dev app on it/them. You can also run the dev app on a connected mobile/tablet device.")]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. "),a("strong",[t._v("DO NOT UPGRADE GRADLE")]),t._v(" as it will break the Capacitor project. Same goes for any other requested upgrades.")]),a("img",{staticClass:"q-my-md fit rounded-borders",staticStyle:{"max-width":"350px"},attrs:{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle upgrade"}}),a("p",[t._v("If you encounter any IDE errors then click on File > Invalidate caches and restart.")]),a("img",{staticClass:"q-mt-md fit rounded-borders",staticStyle:{"max-width":"350px"},attrs:{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade"}})])])},n=[],s=a("8669");const r="Preparation for Capacitor App | Quasar Framework",i="What you need to do before developing a Quasar hybrid mobile app with Capacitor.";var d={meta:{title:"Preparation for Capacitor App",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:i},ogDesc:{name:"og:description",content:i},twitterDesc:{name:"twitter:description",content:i}}},created(){this.$root.store.toc=[{id:"1.-Installation",title:"1. Installation"},{id:"Android-setup",title:"Android setup",sub:!0},{id:"iOS-setup",title:"iOS setup",sub:!0},{id:"2.-Add-Capacitor-Quasar-Mode",title:"2. Add Capacitor Quasar Mode"},{id:"3.-Start-Developing",title:"3. Start Developing"}],this.nav=[{name:"Introduction",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/introduction",dir:"left"},{name:"Configuring Capacitor",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/configuring-capacitor",dir:"right"}]},methods:{copyHeading:s["a"]}},c=d,l=a("2877"),p=Object(l["a"])(c,o,n,!1,null,null,null);e["default"]=p.exports}}]);