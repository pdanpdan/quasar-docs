(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103],{"875d":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Publishing to Store",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("So, you’ve finished working on your Mobile App. Now it’s time to deploy it. Let’s learn how.")]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"android-publishing"},on:{click:function(t){return e.copyHeading("android-publishing")}}},[e._v("Android Publishing")]),t("p",[e._v("To generate a release build for Android, we can use the following Quasar CLI command:")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ quasar build -m capacitor -T android\n")])]),t("p",[e._v("This will compile the web assets (and if “–ide” param is also specified, it will open up Android Studio IDE where you need to trigger a release build).")]),t("p",[e._v("Next, we find our unsigned APK file generated by the Android Studio. Now, we need to sign the unsigned APK and run an alignment utility on it to optimize it and prepare it for the app store. If you already have a signing key, skip these steps and use that one instead.")]),t("p",[e._v("Let’s generate our private key using the keytool command that comes with the JDK. If this tool isn’t found, refer to the installation guide:")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2048")]),e._v(" -validity "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20000")]),e._v("\n")])]),t("p",[e._v("You’ll first be prompted to create a password for the keystore. Then, answer the rest of the nice tool’s questions and when it’s all done, you should have a file called my-release-key.keystore created in the current directory.")]),t("div",{staticClass:"doc-note doc-note--danger"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("Make sure to save this file somewhere safe and secure, if you lose it you won’t be able to submit updates to your app!")])]),t("p",[e._v("To sign the unsigned APK, run the jarsigner tool which is also included in the JDK:")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path-to-unsigned-apk-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" alias_name\n")])]),t("p",[e._v("This signs the apk in place. Finally, we need to run the zip align tool to optimize the APK. The zipalign tool can be found in "),t("code",{staticClass:"doc-token"},[e._v("/path/to/Android/sdk/build-tools/VERSION/zipalign")]),e._v(". For example, on OS X with Android Studio installed, zipalign is in "),t("code",{staticClass:"doc-token"},[e._v("~/Library/Android/sdk/build-tools/VERSION/zipalign")]),e._v(":")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ zipalign -v "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path-to-same-apk-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" HelloWorld.apk\n")])]),t("p",[e._v("Now we have our final release binary called HelloWorld.apk and we can release this on the Google Play Store for all the world to enjoy!")]),t("p",[e._v("(There are a few other ways to sign APKs. Refer to the official Android App Signing documentation for more information.)")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"google-play-store"},on:{click:function(t){return e.copyHeading("google-play-store")}}},[e._v("Google Play Store")]),t("p",[e._v("Now that we have our release APK ready for the Google Play Store, we can create a Play Store listing and upload our APK.")]),t("p",[e._v("To start, you’ll need to visit the "),t("doc-link",{attrs:{to:"https://play.google.com/apps/publish"}},[e._v("Google Play Store Developer Console")]),e._v(" and create a new developer account. Unfortunately, this is not free. However, the cost is only $25 compared to Apple’s $99.")],1),t("p",[e._v("Once you have a developer account, you can go ahead and click “Publish an Android App on Google Play”.")]),t("p",[e._v("Then, you can go ahead and click the button to edit the store listing (We will upload an APK later). You’ll want to fill out the description for the app.")]),t("p",[e._v("When you are ready, upload the APK for the release build and publish the listing. Be patient and your hard work should be live in the wild!")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"updating-your-app"},on:{click:function(t){return e.copyHeading("updating-your-app")}}},[e._v("Updating your App")]),t("p",[e._v("As you develop your app, you’ll want to update it periodically.")]),t("p",[e._v("In order for the Google Play Store to accept updated APKs, you’ll need to bump the app version (from "),t("code",{staticClass:"doc-token"},[e._v("/package.json")]),e._v(" or from "),t("code",{staticClass:"doc-token"},[e._v("/quasar.conf.js > capacitor > version")]),e._v(", then rebuild the app for release.")]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"ios-publishing"},on:{click:function(t){return e.copyHeading("ios-publishing")}}},[e._v("iOS Publishing")]),t("p",[e._v("First, you need to enroll in "),t("doc-link",{attrs:{to:"https://developer.apple.com/programs/"}},[e._v("Apple Developer Program")]),e._v(". As with Google, if you have a personal account with Apple, you can create an additional one for your applications.")],1),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"connecting-xcode-with-your-developer-account"},on:{click:function(t){return e.copyHeading("connecting-xcode-with-your-developer-account")}}},[e._v("Connecting Xcode with your developer account")]),t("p",[e._v("After you receive your developer status, open Xcode on your Mac and go to Preferences > Accounts. Add your account to Xcode by clicking the "),t("code",{staticClass:"doc-token"},[e._v("+")]),e._v(" button on the lower left-hand side and follow the instructions.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"signing"},on:{click:function(t){return e.copyHeading("signing")}}},[e._v("Signing")]),t("p",[e._v("Now that you linked Xcode with your developer account, go to Preferences > Accounts, select your Apple Id on the left-hand side and then click the View Details button shown on the previous image.")]),t("p",[e._v("Click the Create button next to the iOS Distribution option.")]),t("p",[e._v("You can learn more about maintaining your signing identities and certificates from the official documentation.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"setting-up-the-app-identifier"},on:{click:function(t){return e.copyHeading("setting-up-the-app-identifier")}}},[e._v("Setting up the app identifier")]),t("p",[e._v("Next, through the Apple Developer Member Center we’ll set up the app ID identifier details. Identifiers are used to allow an app to have access to certain app services like for example Apple Pay. You can login to Apple Developer Member Center with your Apple ID and password.")]),t("p",[e._v("Once you’re logged in you should choose Certificates, Identifiers, and Profiles option. Also select the Identifiers option under the iOS Apps. Then select the "),t("code",{staticClass:"doc-token"},[e._v("+")]),e._v(" button in order to add a new iOS App ID.")]),t("p",[e._v("Then you’ll have to set the name of your app, use the Explicit App ID option and set the Bundle ID to the value of the id in your capacitor.config.json.")]),t("p",[e._v("Additionally, you’ll have to choose any of the services that need to be enabled. For example, if you use Apple Pay or Wallet in your app, you need to choose those option.")]),t("p",[e._v("You can learn more about registering app identifiers from the "),t("doc-link",{attrs:{to:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html"}},[e._v("official documentation")]),e._v(".")],1),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"creating-the-app-listing"},on:{click:function(t){return e.copyHeading("creating-the-app-listing")}}},[e._v("Creating the app listing")]),t("p",[e._v("Apple uses iTunes Connect to manage app submissions. After your login, you should select the My Apps button, and on the next screen select the "),t("code",{staticClass:"doc-token"},[e._v("+")]),e._v(" button, just below the iTunes Connect My Apps header.")]),t("p",[e._v("This will show three options in a dropdown, and you should select the New App. After this the popup appears where you have to choose the name of the application, platform, primary language, bundle ID and SKU.")]),t("p",[e._v("Once you’re done, click on the Create button and you’ll be presented with a screen where you’ll have to set some basic options like Privacy Policy URL, category and sub category.")]),t("p",[e._v("Now, before we fill out everything in the listing, we’ll build our app and get it uploaded with Xcode. Then you’ll come back to finish the listing.")]),t("p",[e._v("You can learn more about managing your app in iTunes Connect from the "),t("doc-link",{attrs:{to:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/UsingiTunesConnect/UsingiTunesConnect.html"}},[e._v("official documentation")]),e._v(".")],1),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"building-the-app-for-production"},on:{click:function(t){return e.copyHeading("building-the-app-for-production")}}},[e._v("Building the app for production")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ quasar build -m capacitor -T ios\n")])]),t("p",[e._v("This will compile the web assets (and if “–ide” param is also specified, it will open up Xcode where you need to trigger a release build).")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"configuring-the-project-in-xcode"},on:{click:function(t){return e.copyHeading("configuring-the-project-in-xcode")}}},[e._v("Configuring the project in Xcode")]),t("p",[e._v("Once Xcode opens up the project (“–ide” param required), you should see the details about your app in the general view.")]),t("p",[e._v("You should just check that the bundle identifier is set up correctly, so that it’s the same as the value you specified earlier in the app ID. Also, make sure that the version and build numbers are correct. Team option should be set to your Apple developer account. Under the deployment target you can choose which devices your application will support.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"creating-an-archive-of-the-application"},on:{click:function(t){return e.copyHeading("creating-an-archive-of-the-application")}}},[e._v("Creating an archive of the application")]),t("p",[e._v("In Xcode, select Product > Scheme > Edit Scheme to open the scheme editor. Next, select the Archive from the list on the left-hand side. Make sure that the Build configuration is set to Release.")]),t("p",[e._v("To create an archive, choose a Generic iOS Device, or your device if it’s connected to your Mac (you can’t create an archive if simulator is selected), from the Scheme toolbar menu in the project editor.")]),t("p",[e._v("Next, select Product > Archive, and the Archive organizer appears and displays the new archive.")]),t("p",[e._v("At this point you can click the "),t("code",{staticClass:"doc-token"},[e._v("Upload to App Store...")]),e._v(" button, and if everything goes fine you’ll have an uploaded app, and the only thing that’s left to do is to complete the iTunes Connect listing and submit it for review!")]),t("p",[e._v("At this point you should get an email from iTunes Connect shortly after you uploaded the archive with the content.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"finishing-the-app-list-process"},on:{click:function(t){return e.copyHeading("finishing-the-app-list-process")}}},[e._v("Finishing the app list process")]),t("p",[e._v("Now you should head back to the iTunes Connect portal and login. Next, click on the Pricing and Availability on the left-hand side under APP STORE INFORMATION.")]),t("p",[e._v("You don’t have to worry about forgetting to insert any crucial and required information about your application, since you’ll be notified about what’s missing and what needs to be added/changed if you try to submit the app for review before all details are filled in.")]),t("p",[e._v("Next, click on the 1.0 Prepare for Submission button on the left-hand side, as shown on the image below. When we uploaded our archive, iTunes Connect automatically determined which device sizes are supported. You’ll need to upload at least one screenshot image for each of the various app sizes that were detected by iTunes Connect.")]),t("p",[e._v("Next, you’ll have to insert Description, Keywords, Support URL and Marketing URL (optionally).")]),t("p",[e._v("In the Build section you have to click on the "),t("code",{staticClass:"doc-token"},[e._v("+")]),e._v(" button and select the build that was uploaded through Xcode in the previous steps.")]),t("p",[e._v("Next, you’ll have to upload the icon, edit the rating, and set some additional info like copyright and your information. Note that the size of the icon that you’ll have to upload here will have to be 1024 by 1024 pixels. Thankfully, you can use the splash.png from the second tutorial. If you’re the sole developer then the data in the App Review Information should be your own. Finally, as the last option, you can leave the default checked option that once your app is approved that it is automatically released to the App Store.")]),t("p",[e._v("Now that we’re finished with adding all of the details to the app listing, we can press Save and then Submit for Review. Finally, you’ll be presented with the last form that you’ll have to fill out.")]),t("p",[e._v("After you submit your app for review you’ll see the status of it in the My Apps as Waiting for review, as shown on the image below. Also, shortly after you submit your app for review you’ll get a confirmation email from iTunes Connect that your app is in review.")]),t("p",[e._v("Apple prides itself with a manual review process, which basically means it can take several days for your app to be reviewed. You’ll be notified of any issues or updates to your app status.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"updating-the-app"},on:{click:function(t){return e.copyHeading("updating-the-app")}}},[e._v("Updating the app")]),t("p",[e._v("Since you’ll probably want to update your app at some point you’ll first need to bump the app version (from "),t("code",{staticClass:"doc-token"},[e._v("/package.json")]),e._v("), then rebuild the app for release. Once Xcode opens, follow the same steps all over again.")]),t("p",[e._v("Once you submit for the review, you’ll have to wait for the review process again.")])])},a=[],n=o("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="Publishing to Store",this.metaDesc="How to publish a Quasar hybrid mobile app with Capacitor to Google Play Store and to Apple App Store.",this.nav=[{name:"Managing Google Analytics",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/managing-google-analytics",dir:"left"},{name:"Introduction",category:"Developing Cordova Apps",path:"/quasar-cli/developing-cordova-apps/introduction",dir:"right"}],this.toc=[{id:"android-publishing",title:"Android Publishing"},{id:"google-play-store",title:"Google Play Store",sub:!0},{id:"updating-your-app",title:"Updating your App",sub:!0},{id:"ios-publishing",title:"iOS Publishing"},{id:"connecting-xcode-with-your-developer-account",title:"Connecting Xcode with your developer account",sub:!0},{id:"signing",title:"Signing",sub:!0},{id:"setting-up-the-app-identifier",title:"Setting up the app identifier",sub:!0},{id:"creating-the-app-listing",title:"Creating the app listing",sub:!0},{id:"building-the-app-for-production",title:"Building the app for production",sub:!0},{id:"configuring-the-project-in-xcode",title:"Configuring the project in Xcode",sub:!0},{id:"creating-an-archive-of-the-application",title:"Creating an archive of the application",sub:!0},{id:"finishing-the-app-list-process",title:"Finishing the app list process",sub:!0},{id:"updating-the-app",title:"Updating the app",sub:!0}],this.copyHeading=n["a"]}},r=s,l=o("2877"),p=Object(l["a"])(r,i,a,!1,null,null,null);t["default"]=p.exports}}]);