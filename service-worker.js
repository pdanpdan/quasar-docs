if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-1e28b66a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.0d18e804.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.c07bf27d.css",revision:null},{url:"/quasar-docs/css/13.96af82c5.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.add5568a.css",revision:null},{url:"/quasar-docs/css/16.e41fb891.css",revision:null},{url:"/quasar-docs/css/17.40810d73.css",revision:null},{url:"/quasar-docs/css/18.64943849.css",revision:null},{url:"/quasar-docs/css/19.b04235c4.css",revision:null},{url:"/quasar-docs/css/20.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.90c2fb3f.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.ecf30d56.css",revision:null},{url:"/quasar-docs/css/9.e1800b45.css",revision:null},{url:"/quasar-docs/css/app.ae805b2f.css",revision:null},{url:"/quasar-docs/css/demo.d4141ee4.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.55e9c550.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c934fe77.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"bfb844ef8c876bdc1dc1c1ae807705ea"},{url:"/quasar-docs/js/10.888db9d3.js",revision:null},{url:"/quasar-docs/js/100.aac64755.js",revision:null},{url:"/quasar-docs/js/101.e8988311.js",revision:null},{url:"/quasar-docs/js/102.0c6bb2de.js",revision:null},{url:"/quasar-docs/js/103.9433e9fd.js",revision:null},{url:"/quasar-docs/js/104.a0f6008a.js",revision:null},{url:"/quasar-docs/js/105.a20bf7c0.js",revision:null},{url:"/quasar-docs/js/106.1a0d5bc7.js",revision:null},{url:"/quasar-docs/js/107.6d99f3fb.js",revision:null},{url:"/quasar-docs/js/108.23f13cd4.js",revision:null},{url:"/quasar-docs/js/109.1d98a80b.js",revision:null},{url:"/quasar-docs/js/11.d11521ed.js",revision:null},{url:"/quasar-docs/js/110.baf11daf.js",revision:null},{url:"/quasar-docs/js/111.4af10916.js",revision:null},{url:"/quasar-docs/js/112.f77720b3.js",revision:null},{url:"/quasar-docs/js/113.82877c45.js",revision:null},{url:"/quasar-docs/js/114.ccb0eb12.js",revision:null},{url:"/quasar-docs/js/115.12f2f3ca.js",revision:null},{url:"/quasar-docs/js/116.42dfd8a2.js",revision:null},{url:"/quasar-docs/js/117.7b4bf91a.js",revision:null},{url:"/quasar-docs/js/118.91163f8e.js",revision:null},{url:"/quasar-docs/js/119.0d0354c1.js",revision:null},{url:"/quasar-docs/js/12.fd96faa4.js",revision:null},{url:"/quasar-docs/js/120.c31aa617.js",revision:null},{url:"/quasar-docs/js/121.5308e5a3.js",revision:null},{url:"/quasar-docs/js/122.8e38d66a.js",revision:null},{url:"/quasar-docs/js/123.5908b098.js",revision:null},{url:"/quasar-docs/js/124.870e8816.js",revision:null},{url:"/quasar-docs/js/125.02a5d789.js",revision:null},{url:"/quasar-docs/js/126.a9b1efff.js",revision:null},{url:"/quasar-docs/js/127.d6fdadb3.js",revision:null},{url:"/quasar-docs/js/128.2f5ad7ec.js",revision:null},{url:"/quasar-docs/js/129.aa8cde9d.js",revision:null},{url:"/quasar-docs/js/13.ddb6cdba.js",revision:null},{url:"/quasar-docs/js/130.8ffd4bb1.js",revision:null},{url:"/quasar-docs/js/131.c9bf6187.js",revision:null},{url:"/quasar-docs/js/132.51fe3c79.js",revision:null},{url:"/quasar-docs/js/133.e915991e.js",revision:null},{url:"/quasar-docs/js/134.8d82879f.js",revision:null},{url:"/quasar-docs/js/135.c66d93f4.js",revision:null},{url:"/quasar-docs/js/136.3fb8df63.js",revision:null},{url:"/quasar-docs/js/137.d8c9189f.js",revision:null},{url:"/quasar-docs/js/138.dad24e1a.js",revision:null},{url:"/quasar-docs/js/139.aaa46b83.js",revision:null},{url:"/quasar-docs/js/14.e8257887.js",revision:null},{url:"/quasar-docs/js/140.72760b3f.js",revision:null},{url:"/quasar-docs/js/141.54466fe3.js",revision:null},{url:"/quasar-docs/js/142.947d34c8.js",revision:null},{url:"/quasar-docs/js/143.a5a16070.js",revision:null},{url:"/quasar-docs/js/144.6dac634e.js",revision:null},{url:"/quasar-docs/js/145.73da6725.js",revision:null},{url:"/quasar-docs/js/146.4e0edd33.js",revision:null},{url:"/quasar-docs/js/147.8ab3e61b.js",revision:null},{url:"/quasar-docs/js/148.643bda45.js",revision:null},{url:"/quasar-docs/js/149.2b954e20.js",revision:null},{url:"/quasar-docs/js/15.201366b2.js",revision:null},{url:"/quasar-docs/js/150.3c60bc41.js",revision:null},{url:"/quasar-docs/js/151.8a635dc1.js",revision:null},{url:"/quasar-docs/js/152.a662fd5a.js",revision:null},{url:"/quasar-docs/js/153.0846a809.js",revision:null},{url:"/quasar-docs/js/154.46817214.js",revision:null},{url:"/quasar-docs/js/155.6b4eff25.js",revision:null},{url:"/quasar-docs/js/156.b775c0d7.js",revision:null},{url:"/quasar-docs/js/157.6fe23747.js",revision:null},{url:"/quasar-docs/js/158.2e6846ed.js",revision:null},{url:"/quasar-docs/js/159.d10d3676.js",revision:null},{url:"/quasar-docs/js/16.6956ea32.js",revision:null},{url:"/quasar-docs/js/160.fc40f8ff.js",revision:null},{url:"/quasar-docs/js/161.48b23e5f.js",revision:null},{url:"/quasar-docs/js/162.ff22ae81.js",revision:null},{url:"/quasar-docs/js/163.61d2b52b.js",revision:null},{url:"/quasar-docs/js/164.44524277.js",revision:null},{url:"/quasar-docs/js/165.a738e145.js",revision:null},{url:"/quasar-docs/js/166.eaf90c49.js",revision:null},{url:"/quasar-docs/js/167.b8492828.js",revision:null},{url:"/quasar-docs/js/168.4b6501c8.js",revision:null},{url:"/quasar-docs/js/169.f976f74f.js",revision:null},{url:"/quasar-docs/js/17.e8688558.js",revision:null},{url:"/quasar-docs/js/170.210d6a7d.js",revision:null},{url:"/quasar-docs/js/171.62efbaf5.js",revision:null},{url:"/quasar-docs/js/172.a80fe8d8.js",revision:null},{url:"/quasar-docs/js/173.4f959a23.js",revision:null},{url:"/quasar-docs/js/174.8f879b84.js",revision:null},{url:"/quasar-docs/js/175.4c5a25cd.js",revision:null},{url:"/quasar-docs/js/176.f01a60d7.js",revision:null},{url:"/quasar-docs/js/177.34fdf28f.js",revision:null},{url:"/quasar-docs/js/178.2374c979.js",revision:null},{url:"/quasar-docs/js/179.2d7ef521.js",revision:null},{url:"/quasar-docs/js/18.eecec326.js",revision:null},{url:"/quasar-docs/js/180.b6a00513.js",revision:null},{url:"/quasar-docs/js/181.1d20416c.js",revision:null},{url:"/quasar-docs/js/182.2c320ef4.js",revision:null},{url:"/quasar-docs/js/183.a2416fdf.js",revision:null},{url:"/quasar-docs/js/184.d1429135.js",revision:null},{url:"/quasar-docs/js/185.627da2fb.js",revision:null},{url:"/quasar-docs/js/186.6388eafe.js",revision:null},{url:"/quasar-docs/js/187.5d4820bb.js",revision:null},{url:"/quasar-docs/js/188.877e4801.js",revision:null},{url:"/quasar-docs/js/189.f6c76a0e.js",revision:null},{url:"/quasar-docs/js/19.44e48bbb.js",revision:null},{url:"/quasar-docs/js/190.b8e89a1a.js",revision:null},{url:"/quasar-docs/js/191.bb743606.js",revision:null},{url:"/quasar-docs/js/192.00b53881.js",revision:null},{url:"/quasar-docs/js/193.68162539.js",revision:null},{url:"/quasar-docs/js/194.6e70c3b5.js",revision:null},{url:"/quasar-docs/js/195.52f699cd.js",revision:null},{url:"/quasar-docs/js/196.a860cb22.js",revision:null},{url:"/quasar-docs/js/197.86323b45.js",revision:null},{url:"/quasar-docs/js/198.55ad55f5.js",revision:null},{url:"/quasar-docs/js/199.64a737ff.js",revision:null},{url:"/quasar-docs/js/20.4978f73d.js",revision:null},{url:"/quasar-docs/js/200.afeff943.js",revision:null},{url:"/quasar-docs/js/201.dc5767e3.js",revision:null},{url:"/quasar-docs/js/202.7f74bbac.js",revision:null},{url:"/quasar-docs/js/203.42c3c95f.js",revision:null},{url:"/quasar-docs/js/204.461ae1b6.js",revision:null},{url:"/quasar-docs/js/205.a6bb24ae.js",revision:null},{url:"/quasar-docs/js/206.5f0f1f45.js",revision:null},{url:"/quasar-docs/js/207.25b88fd6.js",revision:null},{url:"/quasar-docs/js/208.ab8089e8.js",revision:null},{url:"/quasar-docs/js/209.9383802b.js",revision:null},{url:"/quasar-docs/js/21.c36bbbbf.js",revision:null},{url:"/quasar-docs/js/210.024842da.js",revision:null},{url:"/quasar-docs/js/211.2f3720f2.js",revision:null},{url:"/quasar-docs/js/212.35f39468.js",revision:null},{url:"/quasar-docs/js/213.acd3696b.js",revision:null},{url:"/quasar-docs/js/214.1c964787.js",revision:null},{url:"/quasar-docs/js/215.babd61a9.js",revision:null},{url:"/quasar-docs/js/216.1274b9b9.js",revision:null},{url:"/quasar-docs/js/217.f7cd5406.js",revision:null},{url:"/quasar-docs/js/218.3ecaa9be.js",revision:null},{url:"/quasar-docs/js/219.35f78e27.js",revision:null},{url:"/quasar-docs/js/22.a4fcecaa.js",revision:null},{url:"/quasar-docs/js/220.f0872f07.js",revision:null},{url:"/quasar-docs/js/221.05e9ec6d.js",revision:null},{url:"/quasar-docs/js/222.77065d87.js",revision:null},{url:"/quasar-docs/js/223.64849b8c.js",revision:null},{url:"/quasar-docs/js/224.7f367cb2.js",revision:null},{url:"/quasar-docs/js/225.68d23cc3.js",revision:null},{url:"/quasar-docs/js/226.c4ce0838.js",revision:null},{url:"/quasar-docs/js/227.75a78a1d.js",revision:null},{url:"/quasar-docs/js/228.32dd3d34.js",revision:null},{url:"/quasar-docs/js/229.d6a4a5c5.js",revision:null},{url:"/quasar-docs/js/23.83c83ed3.js",revision:null},{url:"/quasar-docs/js/230.4879b3c9.js",revision:null},{url:"/quasar-docs/js/231.3b642321.js",revision:null},{url:"/quasar-docs/js/232.ceb24f9f.js",revision:null},{url:"/quasar-docs/js/233.1716c632.js",revision:null},{url:"/quasar-docs/js/234.1e72d8f9.js",revision:null},{url:"/quasar-docs/js/235.7eec502b.js",revision:null},{url:"/quasar-docs/js/236.1731b885.js",revision:null},{url:"/quasar-docs/js/237.464584e4.js",revision:null},{url:"/quasar-docs/js/238.f52dcc32.js",revision:null},{url:"/quasar-docs/js/239.a56145e1.js",revision:null},{url:"/quasar-docs/js/24.b628d7de.js",revision:null},{url:"/quasar-docs/js/240.20036c6a.js",revision:null},{url:"/quasar-docs/js/241.0b2c6bc3.js",revision:null},{url:"/quasar-docs/js/242.da30b742.js",revision:null},{url:"/quasar-docs/js/243.20cd56c2.js",revision:null},{url:"/quasar-docs/js/244.18ab35a1.js",revision:null},{url:"/quasar-docs/js/245.5068b5b5.js",revision:null},{url:"/quasar-docs/js/246.53ca6442.js",revision:null},{url:"/quasar-docs/js/247.32f186c3.js",revision:null},{url:"/quasar-docs/js/248.2391e77b.js",revision:null},{url:"/quasar-docs/js/249.0ffae6b7.js",revision:null},{url:"/quasar-docs/js/25.079c12b9.js",revision:null},{url:"/quasar-docs/js/250.521347fc.js",revision:null},{url:"/quasar-docs/js/251.bdaa9720.js",revision:null},{url:"/quasar-docs/js/252.d768572d.js",revision:null},{url:"/quasar-docs/js/253.32adb61c.js",revision:null},{url:"/quasar-docs/js/254.7325ecbb.js",revision:null},{url:"/quasar-docs/js/255.64d546d5.js",revision:null},{url:"/quasar-docs/js/256.04f3513c.js",revision:null},{url:"/quasar-docs/js/257.81b071aa.js",revision:null},{url:"/quasar-docs/js/258.5677d56a.js",revision:null},{url:"/quasar-docs/js/259.dc7a3c3d.js",revision:null},{url:"/quasar-docs/js/26.1bd92322.js",revision:null},{url:"/quasar-docs/js/260.93360141.js",revision:null},{url:"/quasar-docs/js/261.bf5d8219.js",revision:null},{url:"/quasar-docs/js/262.969e0961.js",revision:null},{url:"/quasar-docs/js/263.5d10fe94.js",revision:null},{url:"/quasar-docs/js/264.81253b4e.js",revision:null},{url:"/quasar-docs/js/265.d64d535e.js",revision:null},{url:"/quasar-docs/js/266.cd5f7be5.js",revision:null},{url:"/quasar-docs/js/267.077895b9.js",revision:null},{url:"/quasar-docs/js/268.3c883f33.js",revision:null},{url:"/quasar-docs/js/269.2f08d295.js",revision:null},{url:"/quasar-docs/js/27.43ae1113.js",revision:null},{url:"/quasar-docs/js/270.38db78cb.js",revision:null},{url:"/quasar-docs/js/271.05b85f8e.js",revision:null},{url:"/quasar-docs/js/272.cf48d06d.js",revision:null},{url:"/quasar-docs/js/273.04f8cddf.js",revision:null},{url:"/quasar-docs/js/274.fcb2b848.js",revision:null},{url:"/quasar-docs/js/275.1630abc3.js",revision:null},{url:"/quasar-docs/js/276.bff124a9.js",revision:null},{url:"/quasar-docs/js/277.c0abdb6d.js",revision:null},{url:"/quasar-docs/js/278.e491d210.js",revision:null},{url:"/quasar-docs/js/279.702cde75.js",revision:null},{url:"/quasar-docs/js/28.8435bd15.js",revision:null},{url:"/quasar-docs/js/280.1bb75c50.js",revision:null},{url:"/quasar-docs/js/281.afc9e9a4.js",revision:null},{url:"/quasar-docs/js/282.7b6d4e03.js",revision:null},{url:"/quasar-docs/js/283.018c31c0.js",revision:null},{url:"/quasar-docs/js/284.9f1b0512.js",revision:null},{url:"/quasar-docs/js/285.37aee258.js",revision:null},{url:"/quasar-docs/js/286.dfc89e0e.js",revision:null},{url:"/quasar-docs/js/287.ff97ba65.js",revision:null},{url:"/quasar-docs/js/288.816fc0cd.js",revision:null},{url:"/quasar-docs/js/289.bcdd6dc1.js",revision:null},{url:"/quasar-docs/js/29.3e93ed8a.js",revision:null},{url:"/quasar-docs/js/290.967a45f5.js",revision:null},{url:"/quasar-docs/js/291.420a9251.js",revision:null},{url:"/quasar-docs/js/30.c0587f4a.js",revision:null},{url:"/quasar-docs/js/31.7b17a0f3.js",revision:null},{url:"/quasar-docs/js/32.760c474d.js",revision:null},{url:"/quasar-docs/js/33.a4f915f1.js",revision:null},{url:"/quasar-docs/js/34.bcf4e317.js",revision:null},{url:"/quasar-docs/js/35.d1c59b7e.js",revision:null},{url:"/quasar-docs/js/36.0b872e68.js",revision:null},{url:"/quasar-docs/js/37.e2c46140.js",revision:null},{url:"/quasar-docs/js/38.36b6d577.js",revision:null},{url:"/quasar-docs/js/39.1ac31b00.js",revision:null},{url:"/quasar-docs/js/40.f44ff9c6.js",revision:null},{url:"/quasar-docs/js/41.65e30b5f.js",revision:null},{url:"/quasar-docs/js/42.b27480d1.js",revision:null},{url:"/quasar-docs/js/43.fcff6d1d.js",revision:null},{url:"/quasar-docs/js/44.b7bdd6b2.js",revision:null},{url:"/quasar-docs/js/45.19142752.js",revision:null},{url:"/quasar-docs/js/46.85e85dd2.js",revision:null},{url:"/quasar-docs/js/47.509f29d7.js",revision:null},{url:"/quasar-docs/js/48.0772c073.js",revision:null},{url:"/quasar-docs/js/49.d74b064f.js",revision:null},{url:"/quasar-docs/js/5.0debad1d.js",revision:null},{url:"/quasar-docs/js/50.72733f41.js",revision:null},{url:"/quasar-docs/js/51.05e0621d.js",revision:null},{url:"/quasar-docs/js/52.f9760775.js",revision:null},{url:"/quasar-docs/js/53.2bc5d0ba.js",revision:null},{url:"/quasar-docs/js/54.03bd81f2.js",revision:null},{url:"/quasar-docs/js/55.0f3dec8f.js",revision:null},{url:"/quasar-docs/js/56.91b9825f.js",revision:null},{url:"/quasar-docs/js/57.cce78953.js",revision:null},{url:"/quasar-docs/js/58.d6cb8d00.js",revision:null},{url:"/quasar-docs/js/59.f3edaad7.js",revision:null},{url:"/quasar-docs/js/6.3eb3f849.js",revision:null},{url:"/quasar-docs/js/60.50255d5b.js",revision:null},{url:"/quasar-docs/js/61.2f366c17.js",revision:null},{url:"/quasar-docs/js/62.7688feac.js",revision:null},{url:"/quasar-docs/js/63.e7dd3319.js",revision:null},{url:"/quasar-docs/js/64.5206a22b.js",revision:null},{url:"/quasar-docs/js/65.45c10257.js",revision:null},{url:"/quasar-docs/js/66.f90ff535.js",revision:null},{url:"/quasar-docs/js/67.344d5cb0.js",revision:null},{url:"/quasar-docs/js/68.6401065d.js",revision:null},{url:"/quasar-docs/js/69.f708c070.js",revision:null},{url:"/quasar-docs/js/7.d6531706.js",revision:null},{url:"/quasar-docs/js/70.aab47a59.js",revision:null},{url:"/quasar-docs/js/71.4de9a7ac.js",revision:null},{url:"/quasar-docs/js/72.1f4d4c02.js",revision:null},{url:"/quasar-docs/js/73.2c9edc5c.js",revision:null},{url:"/quasar-docs/js/74.472825a4.js",revision:null},{url:"/quasar-docs/js/75.7b03d90a.js",revision:null},{url:"/quasar-docs/js/76.066614f9.js",revision:null},{url:"/quasar-docs/js/77.6dd89631.js",revision:null},{url:"/quasar-docs/js/78.297f702f.js",revision:null},{url:"/quasar-docs/js/79.35518306.js",revision:null},{url:"/quasar-docs/js/8.3488ab52.js",revision:null},{url:"/quasar-docs/js/80.93e32f06.js",revision:null},{url:"/quasar-docs/js/81.e8319d97.js",revision:null},{url:"/quasar-docs/js/82.bc4770ba.js",revision:null},{url:"/quasar-docs/js/83.211855f6.js",revision:null},{url:"/quasar-docs/js/84.3b46f7a9.js",revision:null},{url:"/quasar-docs/js/85.7b916d21.js",revision:null},{url:"/quasar-docs/js/86.eaa34431.js",revision:null},{url:"/quasar-docs/js/87.ac57bab0.js",revision:null},{url:"/quasar-docs/js/88.5305ecd2.js",revision:null},{url:"/quasar-docs/js/89.5ba6c832.js",revision:null},{url:"/quasar-docs/js/9.b6c6dcf3.js",revision:null},{url:"/quasar-docs/js/90.ceb917f5.js",revision:null},{url:"/quasar-docs/js/91.3dfbfd16.js",revision:null},{url:"/quasar-docs/js/92.901809a9.js",revision:null},{url:"/quasar-docs/js/93.70ca6af5.js",revision:null},{url:"/quasar-docs/js/94.471977f3.js",revision:null},{url:"/quasar-docs/js/95.f3fad6c9.js",revision:null},{url:"/quasar-docs/js/96.f9e5614d.js",revision:null},{url:"/quasar-docs/js/97.809bdb84.js",revision:null},{url:"/quasar-docs/js/98.f01a84de.js",revision:null},{url:"/quasar-docs/js/99.40acbcbd.js",revision:null},{url:"/quasar-docs/js/app.0575a63f.js",revision:null},{url:"/quasar-docs/js/demo-source.52015378.js",revision:null},{url:"/quasar-docs/js/demo.b84939a9.js",revision:null},{url:"/quasar-docs/js/quasar-api.253b07c4.js",revision:null},{url:"/quasar-docs/js/vendor.5c9624e6.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
