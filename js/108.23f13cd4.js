(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[108],{"70f7":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Preparation for Cordova App",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("Before we dive in to the actual development, we need to do some preparation work.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"1-installation"},on:{click:function(e){return t.copyHeading("1-installation")}}},[t._v("1. Installation")]),a("p",[t._v("First step is to make sure you got the Cordova CLI installed and the necessary SDKs.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g cordova\n")])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("Depending on your version of Android Studio, you might need to re-enable the “Android SDK Tools”. You can do this by going\nto “Tools > SDK Manager > SDK Tools” then un-ticking “Hide Obsolete Packages” and tick “Android SDK Tools (Obsolete)”.\n"),a("strong",[t._v("The instructions below assume this has been done.")])])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("The environmental variable "),a("code",{staticClass:"doc-token"},[t._v("ANDROID_HOME")]),t._v(" has been deprecated and replaced with "),a("code",{staticClass:"doc-token"},[t._v("ANDROID_SDK_ROOT")]),t._v(". Depending on your version of Android Studio you may need one or the other. It doesn’t hurt to have both set.")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"android-setup"},on:{click:function(e){return t.copyHeading("android-setup")}}},[t._v("Android setup")]),a("ul",[a("li",[a("p",[t._v("After this step you will need to install the Android platform SDK on your machine. You can "),a("doc-link",{attrs:{to:"https://developer.android.com/studio/index.html"}},[t._v("download the Android Studio here")]),t._v(" and follow these "),a("doc-link",{attrs:{to:"https://developer.android.com/studio/install.html"}},[t._v("installation steps")]),t._v(" afterwards.")],1)]),a("li",[a("p",[t._v("Make sure that after you install the Android SDK you then accept its licenses. Open the terminal and go to the folder where the SDK was installed, in tools/bin and call "),a("code",{staticClass:"doc-token"},[t._v("sdkmanager --licenses")]),t._v(".")])]),a("li",[a("p",[t._v("Add Android installation to your path:")])])]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"unix-macos-linux-"},on:{click:function(e){return t.copyHeading("unix-macos-linux-")}}},[t._v("Unix (macOS, linux)")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ANDROID_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/Android/Sdk"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ANDROID_SDK_ROOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/Android/Sdk"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ANDROID_SDK_ROOT")]),t._v("/tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ANDROID_SDK_ROOT")]),t._v("/platform-tools\n")])]),a("blockquote",{staticClass:"doc-note"},[a("p",[t._v("Please note that sometimes the "),a("code",{staticClass:"doc-token"},[t._v("/Android/Sdk")]),t._v(" folder is added inside "),a("code",{staticClass:"doc-token"},[t._v("/Library/")]),t._v(" inside your user folder. Check your user folder and if the "),a("code",{staticClass:"doc-token"},[t._v("/Android/")]),t._v(" folder is only inside "),a("code",{staticClass:"doc-token"},[t._v("/Library/")]),t._v(" do: "),a("code",{staticClass:"doc-token"},[t._v('export ANDROID_SDK_ROOT="$HOME/Library/Android/Sdk"')]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v('export ANDROID_HOME="$HOME/Library/Android/Sdk"')]),t._v(" instead.")])]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"windows"},on:{click:function(e){return t.copyHeading("windows")}}},[t._v("Windows")]),a("p",[t._v("After installing Android Studio, you need to install two more pieces of software:")]),a("ul",[a("li",[t._v("JDK from Oracle. It can be found "),a("doc-link",{attrs:{to:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"}},[t._v("here")])],1),a("li",[t._v("Gradle. It used to usable from Android Studio but now you have to install it separately. There is a very specific version that cordova requires. You can download it "),a("doc-link",{attrs:{to:"https://downloads.gradle-dn.com/distributions/gradle-4.10.3-all.zip"}},[t._v("here")])],1)]),a("p",[t._v("Then you will have to set environment variables. You will need to set the following variables. Cordova has a good guide for it already. It can be found "),a("doc-link",{attrs:{to:"https://cordova.apache.org/docs/en/latest/guide/platforms/android/#setting-environment-variables"}},[t._v("here")]),t._v(". You need to:")],1),a("ul",[a("li",[t._v("add ANDROID_SDK_ROOT. It can safely be set to: “%USERPROFILE%\\AppData\\Local\\Android\\Sdk”")]),a("li",[t._v("add two ANDROID_SDK_ROOT directories to your path: %ANDROID_SDK_ROOT%\\tools;%ANDROID_SDK_ROOT%\\platform-tools")]),a("li",[t._v("add Gradle to your path. Note that gradle does not have an installer. You just put the binary files where you want them, then add the bin directory to your path.")])]),a("p",[t._v("If you have an init script for your command prompt or powershell, you can try this:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("setx ANDROID_HOME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"')]),t._v("\nsetx ANDROID_SDK_ROOT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"')]),t._v("\nsetx path "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%path%;%ANDROID_SDK_ROOT%'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v("ools;%ANDROID_SDK_ROOT%\\platform-tools;<gradle_path>"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v('in;"')]),t._v("\n")])]),a("p",[t._v("After the tools are installed, setup Android Studio with the correct SDK and create a virtual machine.")]),a("ul",[a("li",[a("p",[t._v("Start Android studio (check the executable in the folder that you installed it in). Next step is to install the individual SDKs:")])]),a("li",[a("p",[t._v("Open the “Configure” menu at the bottom of the window:")]),a("p",[a("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-Menu.png",alt:"",title:"SDK manager"}})])]),a("li",[a("p",[t._v("Select the desired SDKs. As per December 2019 Cordova requires android-28 (Android 9.0 - Pie) so be sure to include it. Click on “Apply” to install the SDKs.")]),a("p",[a("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-selection.png",alt:"",title:"SDK selection"}})])])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"ios-setup"},on:{click:function(e){return t.copyHeading("ios-setup")}}},[t._v("iOS setup")]),a("p",[t._v("You will need a macOS with "),a("doc-link",{attrs:{to:"https://developer.apple.com/xcode/"}},[t._v("Xcode")]),t._v(" installed. After you’ve installed it, open Xcode in order to get the license prompt. Accept the license, then you can close it.")],1),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"2-add-cordova-quasar-mode"},on:{click:function(e){return t.copyHeading("2-add-cordova-quasar-mode")}}},[t._v("2. Add Cordova Quasar Mode")]),a("p",[t._v("In order to develop/build a Mobile app, we need to add the Cordova mode to our Quasar project. What this does is that it uses Cordova CLI to generate a Cordova project in "),a("code",{staticClass:"doc-token"},[t._v("/src-cordova")]),t._v(" folder. "),a("code",{staticClass:"doc-token"},[t._v("/src-cordova/www")]),t._v(" folder will be overwritten each time you build.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar mode "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" cordova\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"3-add-platform"},on:{click:function(e){return t.copyHeading("3-add-platform")}}},[t._v("3. Add Platform")]),a("p",[t._v("To switch to the cordova project, type:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("$ cd src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cordova\n")])]),a("p",[t._v("Target platforms get installed on demand by Quasar CLI. However, if you want to add a platform manually, type:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("$ cordova platform add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("p",[t._v("To verify that everything is in order, type:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ cordova requirements\n")])]),a("blockquote",{staticClass:"doc-note"},[a("p",[t._v("On some newer Debian-based operating systems you might face a very persistent problem when running "),a("code",{staticClass:"doc-token"},[t._v("cordova requirements")]),t._v(". Please see the "),a("doc-link",{attrs:{to:"/quasar-cli/developing-cordova-apps/troubleshooting-and-tips#android-sdk-not-found-after-installation-of-the-sdk"}},[t._v("“Android SDK not found” after installation")]),t._v(" section for assistance.")],1)]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"switching-to-ios-wkwebview"},on:{click:function(e){return t.copyHeading("switching-to-ios-wkwebview")}}},[t._v("Switching to iOS WkWebView")]),a("p",[t._v("Switching to WKWebView is highly recommended (but optional!) as UIWebView has been deprecated in iOS 12.0 as described in this Cordova blog post: "),a("doc-link",{attrs:{to:"https://cordova.apache.org/news/2018/08/01/future-cordova-ios-webview.html"}},[t._v("https://cordova.apache.org/news/2018/08/01/future-cordova-ios-webview.html")]),t._v(".")],1),a("p",[a("strong",[t._v("However, choose wisely if you want to replace the default webview. Each comes with its own caveats.")]),t._v(" Make sure that you visit the link above.")]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"option-1-ionic-webview-plugin"},on:{click:function(e){return t.copyHeading("option-1-ionic-webview-plugin")}}},[t._v("Option 1: Ionic Webview Plugin")]),a("ol",[a("li",[t._v("Install Ionic Webview Plugin")])]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# from /src-cordova")]),t._v("\n$ cordova plugin "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" cordova-plugin-ionic-webview\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Add ScrollEnabled Preference to Config.xml")])]),a("pre",{pre:!0,attrs:{class:"doc-code language-xml"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-xml"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("platform")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("preference")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ScrollEnabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("platform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Consult Ionic Docs for caveats on WkWebViewPlugin")])]),a("ul",[a("li",[a("doc-link",{attrs:{to:"https://beta.ionicframework.com/docs/building/webview"}},[t._v("https://beta.ionicframework.com/docs/building/webview")])],1),a("li",[a("doc-link",{attrs:{to:"https://github.com/ionic-team/cordova-plugin-ionic-webview"}},[t._v("https://github.com/ionic-team/cordova-plugin-ionic-webview")])],1)]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"option-2-cordova-wkwebviewengine-plugin"},on:{click:function(e){return t.copyHeading("option-2-cordova-wkwebviewengine-plugin")}}},[t._v("Option 2: Cordova WkWebviewEngine Plugin")]),a("ol",[a("li",[t._v("Install Cordova WkWebviewEngine Plugin")])]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# from /src-cordova")]),t._v("\n$ cordova plugin "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" cordova-plugin-wkwebview-engine\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("For caveats and more info, visit: "),a("doc-link",{attrs:{to:"https://github.com/apache/cordova-plugin-wkwebview-engine"}},[t._v("https://github.com/apache/cordova-plugin-wkwebview-engine")])],1)]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"4-start-developing"},on:{click:function(e){return t.copyHeading("4-start-developing")}}},[t._v("4. Start Developing")]),a("p",[t._v("If you want to jump right in and start developing, you can skip step #2 and #3 commands and issue one of the commands below. If you have a mobile/tablet device connected to your machine, you can also run the dev app on it instead of in an emulator.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar dev -m cordova -T "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# passing extra parameters and/or options to")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# underlying "cordova" executable:')]),t._v("\n$ quasar dev -m ios -- some params --and options --here\n")])]),a("p",[t._v("This will add Cordova mode and project automatically, if it is missing.")]),a("p",[t._v("However, if you wish to open the IDE (Android Studio / Xcode) and from there to manually select the emulator (or multiple ones simultaneously!) to run the dev app on it/them:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar dev -m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ios"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --ide\n")])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. "),a("strong",[t._v("DO NOT UPGRADE GRADLE")]),t._v(" as it will break the Cordova project. Same goes for any other requested upgrades.")]),a("img",{staticClass:"q-my-md fit rounded-borders",staticStyle:{"max-width":"350px"},attrs:{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle upgrade"}}),a("p",[t._v("If you encounter any IDE errors then click on File > Invalidate caches and restart.")]),a("img",{staticClass:"q-mt-md fit rounded-borders",staticStyle:{"max-width":"350px"},attrs:{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade"}})])])},s=[],n=a("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Preparation for Cordova App",this.metaDesc="What you need to do before developing a Quasar hybrid mobile app with Cordova.",this.nav=[{name:"Introduction",category:"Developing Cordova Apps",path:"/quasar-cli/developing-cordova-apps/introduction",dir:"left"},{name:"Configuring Cordova",category:"Developing Cordova Apps",path:"/quasar-cli/developing-cordova-apps/configuring-cordova",dir:"right"}],this.toc=[{id:"1-installation",title:"1. Installation"},{id:"android-setup",title:"Android setup",sub:!0},{id:"ios-setup",title:"iOS setup",sub:!0},{id:"2-add-cordova-quasar-mode",title:"2. Add Cordova Quasar Mode"},{id:"3-add-platform",title:"3. Add Platform"},{id:"switching-to-ios-wkwebview",title:"Switching to iOS WkWebView",sub:!0},{id:"4-start-developing",title:"4. Start Developing"}],this.copyHeading=n["a"]}},i=r,d=a("2877"),c=Object(d["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports}}]);