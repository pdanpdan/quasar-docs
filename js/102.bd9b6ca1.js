(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[102],{"25ca":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Preparation for Capacitor App",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[e("p",[t._v("Before we dive in to the actual development, we need to do some preparation work.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"1-installation"},on:{click:function(e){return t.copyHeading("1-installation")}}},[t._v("1. Installation")]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"android-setup"},on:{click:function(e){return t.copyHeading("android-setup")}}},[t._v("Android setup")]),e("ul",[e("li",[e("p",[t._v("You will need to install Android Studio and the Android platform SDK on your machine. You can "),e("doc-link",{attrs:{to:"https://developer.android.com/studio/index.html"}},[t._v("download the Android Studio here")]),t._v(" and follow these "),e("doc-link",{attrs:{to:"https://developer.android.com/studio/install.html"}},[t._v("installation steps")]),t._v(" afterwards.")],1)]),e("li",[e("p",[t._v("Make sure that after you install the Android SDK you then accept its licenses. Open the terminal and go to the folder where the SDK was installed, in tools/bin and call "),e("code",{staticClass:"doc-token"},[t._v("sdkmanager --licenses")]),t._v(".")])])]),e("div",{staticClass:"doc-note doc-note--warning"},[e("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),e("p",[t._v("The environmental variable "),e("code",{staticClass:"doc-token"},[t._v("ANDROID_HOME")]),t._v(" has been deprecated and replaced with "),e("code",{staticClass:"doc-token"},[t._v("ANDROID_SDK_ROOT")]),t._v(". Depending on your version of Android Studio you may need one or the other. It doesn’t hurt to have both set.")])]),e("ul",[e("li",[t._v("Add Android installation to your path:")])]),e("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"unix-macos-linux-"},on:{click:function(e){return t.copyHeading("unix-macos-linux-")}}},[t._v("Unix (macOS, linux)")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ANDROID_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/Android/Sdk"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ANDROID_SDK_ROOT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/Android/Sdk"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ANDROID_SDK_ROOT")]),t._v("/tools"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ANDROID_SDK_ROOT")]),t._v("/platform-tools\n")])]),e("blockquote",{staticClass:"doc-note"},[e("p",[t._v("Please note that sometimes the "),e("code",{staticClass:"doc-token"},[t._v("/Android/Sdk")]),t._v(" folder is added inside "),e("code",{staticClass:"doc-token"},[t._v("/Library/")]),t._v(" inside your user folder. Check your user folder and if the "),e("code",{staticClass:"doc-token"},[t._v("/Android/")]),t._v(" folder is only inside "),e("code",{staticClass:"doc-token"},[t._v("/Library/")]),t._v(" do: "),e("code",{staticClass:"doc-token"},[t._v('export ANDROID_SDK_ROOT="$HOME/Library/Android/Sdk"')]),t._v(" or "),e("code",{staticClass:"doc-token"},[t._v('export ANDROID_HOME="$HOME/Library/Android/Sdk"')]),t._v(" instead.")])]),e("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"windows"},on:{click:function(e){return t.copyHeading("windows")}}},[t._v("Windows")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("setx ANDROID_HOME "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"')]),t._v("\nsetx ANDROID_SDK_ROOT "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"')]),t._v("\nsetx path "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%path%;%ANDROID_SDK_ROOT%'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v('ools;%ANDROID_SDK_ROOT%\\platform-tools"')]),t._v("\n")])]),e("ul",[e("li",[e("p",[t._v("Start Android studio (check the executable in the folder that you installed it in). Next step is to install the individual SDKs:")])]),e("li",[e("p",[t._v("Open the “Configure” menu at the bottom of the window:")]),e("p",[e("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-Menu.png",alt:"",title:"SDK manager"}})])]),e("li",[e("p",[t._v("Select the desired SDKs and click on “Apply” to install the SDKs.")]),e("p",[e("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-selection.png",alt:"",title:"SDK selection"}})])])]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"ios-setup"},on:{click:function(e){return t.copyHeading("ios-setup")}}},[t._v("iOS setup")]),e("p",[t._v("You will need a macOS with "),e("doc-link",{attrs:{to:"https://developer.apple.com/xcode/"}},[t._v("Xcode")]),t._v(" installed. After you’ve installed it, open Xcode in order to get the license prompt. Accept the license, then you can close it.")],1),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"2-add-capacitor-quasar-mode"},on:{click:function(e){return t.copyHeading("2-add-capacitor-quasar-mode")}}},[t._v("2. Add Capacitor Quasar Mode")]),e("p",[t._v("In order to develop/build a Mobile app, we need to add the Capacitor mode to our Quasar project. This will use the Capacitor CLI to generate a Capacitor project in "),e("code",{staticClass:"doc-token"},[t._v("/src-capacitor")]),t._v(" folder.")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar mode "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" capacitor\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"3-start-developing"},on:{click:function(e){return t.copyHeading("3-start-developing")}}},[t._v("3. Start Developing")]),e("p",[t._v("To start a dev server with HMR, run the command below:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar dev -m capacitor -T "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),e("p",[t._v("Once the dev server is ready, your IDE will open (Android Studio or Xcode) and from there you can manually select the emulator (or multiple ones simultaneously!) and install the dev app on it/them. You can also run the dev app on a connected mobile/tablet device.")]),e("div",{staticClass:"doc-note doc-note--warning"},[e("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),e("p",[t._v("In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. "),e("strong",[t._v("DO NOT UPGRADE GRADLE")]),t._v(" as it will break the Capacitor project. Same goes for any other requested upgrades.")]),e("img",{staticClass:"q-my-md fit rounded-borders",staticStyle:{"max-width":"350px"},attrs:{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle upgrade"}}),e("p",[t._v("If you encounter any IDE errors then click on File > Invalidate caches and restart.")]),e("img",{staticClass:"q-mt-md fit rounded-borders",staticStyle:{"max-width":"350px"},attrs:{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade"}})])])},o=[],n=a("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Preparation for Capacitor App",this.metaDesc="What you need to do before developing a Quasar hybrid mobile app with Capacitor.",this.nav=[{name:"Introduction",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/introduction",dir:"left"},{name:"Capacitor versions",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/capacitor-version-support",dir:"right"}],this.toc=[{id:"1-installation",title:"1. Installation"},{id:"android-setup",title:"Android setup",sub:!0},{id:"ios-setup",title:"iOS setup",sub:!0},{id:"2-add-capacitor-quasar-mode",title:"2. Add Capacitor Quasar Mode"},{id:"3-start-developing",title:"3. Start Developing"}],this.copyHeading=n["a"]}},i=r,d=a("2877"),c=Object(d["a"])(i,s,o,!1,null,null,null);e["default"]=c.exports}}]);