if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-784e4639"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.afe1a32e.css",revision:null},{url:"/quasar-docs/css/11.07f9719d.css",revision:null},{url:"/quasar-docs/css/12.cd1b576e.css",revision:null},{url:"/quasar-docs/css/13.c07bf27d.css",revision:null},{url:"/quasar-docs/css/14.96af82c5.css",revision:null},{url:"/quasar-docs/css/15.99064edf.css",revision:null},{url:"/quasar-docs/css/16.add5568a.css",revision:null},{url:"/quasar-docs/css/17.e41fb891.css",revision:null},{url:"/quasar-docs/css/18.40810d73.css",revision:null},{url:"/quasar-docs/css/19.64943849.css",revision:null},{url:"/quasar-docs/css/20.b04235c4.css",revision:null},{url:"/quasar-docs/css/5.ad3185aa.css",revision:null},{url:"/quasar-docs/css/6.49f735a0.css",revision:null},{url:"/quasar-docs/css/7.b3abe3ba.css",revision:null},{url:"/quasar-docs/css/8.d2b53414.css",revision:null},{url:"/quasar-docs/css/9.29113f00.css",revision:null},{url:"/quasar-docs/css/app.27c35941.css",revision:null},{url:"/quasar-docs/css/demo.031ff5e7.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.f9e3a827.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.a563f825.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"e16322662d0e3783d4f0a379ca07d01c"},{url:"/quasar-docs/js/10.5d152f6a.js",revision:null},{url:"/quasar-docs/js/100.e6144ae4.js",revision:null},{url:"/quasar-docs/js/101.201f71de.js",revision:null},{url:"/quasar-docs/js/102.b67daddb.js",revision:null},{url:"/quasar-docs/js/103.82b829b5.js",revision:null},{url:"/quasar-docs/js/104.1d5456f5.js",revision:null},{url:"/quasar-docs/js/105.8aed8ed8.js",revision:null},{url:"/quasar-docs/js/106.a3867931.js",revision:null},{url:"/quasar-docs/js/107.666b514b.js",revision:null},{url:"/quasar-docs/js/108.26b01ebb.js",revision:null},{url:"/quasar-docs/js/109.5c5025ce.js",revision:null},{url:"/quasar-docs/js/11.2ac38f3d.js",revision:null},{url:"/quasar-docs/js/110.6c64a033.js",revision:null},{url:"/quasar-docs/js/111.5cc323b0.js",revision:null},{url:"/quasar-docs/js/112.1138721e.js",revision:null},{url:"/quasar-docs/js/113.81449d8a.js",revision:null},{url:"/quasar-docs/js/114.ec57e98e.js",revision:null},{url:"/quasar-docs/js/115.9fb8cb80.js",revision:null},{url:"/quasar-docs/js/116.234c039b.js",revision:null},{url:"/quasar-docs/js/117.52125c66.js",revision:null},{url:"/quasar-docs/js/118.de35693b.js",revision:null},{url:"/quasar-docs/js/119.8a865d15.js",revision:null},{url:"/quasar-docs/js/12.3533519f.js",revision:null},{url:"/quasar-docs/js/120.9d5204fb.js",revision:null},{url:"/quasar-docs/js/121.8d4e2baa.js",revision:null},{url:"/quasar-docs/js/122.21285f29.js",revision:null},{url:"/quasar-docs/js/123.c3813ab0.js",revision:null},{url:"/quasar-docs/js/124.8529d010.js",revision:null},{url:"/quasar-docs/js/125.1434e290.js",revision:null},{url:"/quasar-docs/js/126.1e4a5839.js",revision:null},{url:"/quasar-docs/js/127.6792cdb5.js",revision:null},{url:"/quasar-docs/js/128.ef37a6ad.js",revision:null},{url:"/quasar-docs/js/129.735a68a2.js",revision:null},{url:"/quasar-docs/js/13.6e4ac4b0.js",revision:null},{url:"/quasar-docs/js/130.437bddff.js",revision:null},{url:"/quasar-docs/js/131.87a5edfe.js",revision:null},{url:"/quasar-docs/js/132.9452aaa0.js",revision:null},{url:"/quasar-docs/js/133.1d595ff8.js",revision:null},{url:"/quasar-docs/js/134.5c605246.js",revision:null},{url:"/quasar-docs/js/135.b82aa580.js",revision:null},{url:"/quasar-docs/js/136.1bad9065.js",revision:null},{url:"/quasar-docs/js/137.f521bd59.js",revision:null},{url:"/quasar-docs/js/138.a5fe4dbf.js",revision:null},{url:"/quasar-docs/js/139.50164304.js",revision:null},{url:"/quasar-docs/js/14.42cb5468.js",revision:null},{url:"/quasar-docs/js/140.e7bd103f.js",revision:null},{url:"/quasar-docs/js/141.c73e2fa9.js",revision:null},{url:"/quasar-docs/js/142.1e07389a.js",revision:null},{url:"/quasar-docs/js/143.1f85ecb5.js",revision:null},{url:"/quasar-docs/js/144.83c9d4f4.js",revision:null},{url:"/quasar-docs/js/145.612228d5.js",revision:null},{url:"/quasar-docs/js/146.09702be8.js",revision:null},{url:"/quasar-docs/js/147.ae84d46d.js",revision:null},{url:"/quasar-docs/js/148.59cc5de1.js",revision:null},{url:"/quasar-docs/js/149.44beecb6.js",revision:null},{url:"/quasar-docs/js/15.d08fffd8.js",revision:null},{url:"/quasar-docs/js/150.1d869480.js",revision:null},{url:"/quasar-docs/js/151.a29f8fa3.js",revision:null},{url:"/quasar-docs/js/152.5db97dc1.js",revision:null},{url:"/quasar-docs/js/153.4b8d7d1e.js",revision:null},{url:"/quasar-docs/js/154.e6e14596.js",revision:null},{url:"/quasar-docs/js/155.7b276a97.js",revision:null},{url:"/quasar-docs/js/156.da602a14.js",revision:null},{url:"/quasar-docs/js/157.209a3ed9.js",revision:null},{url:"/quasar-docs/js/158.3029d577.js",revision:null},{url:"/quasar-docs/js/159.b77e3502.js",revision:null},{url:"/quasar-docs/js/16.0b4aee41.js",revision:null},{url:"/quasar-docs/js/160.bd0db809.js",revision:null},{url:"/quasar-docs/js/161.91e6d663.js",revision:null},{url:"/quasar-docs/js/162.3e875f3d.js",revision:null},{url:"/quasar-docs/js/163.258ba947.js",revision:null},{url:"/quasar-docs/js/164.e12d11ad.js",revision:null},{url:"/quasar-docs/js/165.2d58ab76.js",revision:null},{url:"/quasar-docs/js/166.194e08ab.js",revision:null},{url:"/quasar-docs/js/167.c4faa091.js",revision:null},{url:"/quasar-docs/js/168.2537c615.js",revision:null},{url:"/quasar-docs/js/169.0269ef5a.js",revision:null},{url:"/quasar-docs/js/17.3c6d3814.js",revision:null},{url:"/quasar-docs/js/170.a60dab1a.js",revision:null},{url:"/quasar-docs/js/171.80603a6d.js",revision:null},{url:"/quasar-docs/js/172.f0eb1edb.js",revision:null},{url:"/quasar-docs/js/173.40a5f53d.js",revision:null},{url:"/quasar-docs/js/174.6a014216.js",revision:null},{url:"/quasar-docs/js/175.76612149.js",revision:null},{url:"/quasar-docs/js/176.55437bf5.js",revision:null},{url:"/quasar-docs/js/177.55e5a3df.js",revision:null},{url:"/quasar-docs/js/178.9c1870c6.js",revision:null},{url:"/quasar-docs/js/179.ea73a2ce.js",revision:null},{url:"/quasar-docs/js/18.33346b5a.js",revision:null},{url:"/quasar-docs/js/180.5e81c0da.js",revision:null},{url:"/quasar-docs/js/181.c9000b35.js",revision:null},{url:"/quasar-docs/js/182.96cd5f0d.js",revision:null},{url:"/quasar-docs/js/183.a7fad5e6.js",revision:null},{url:"/quasar-docs/js/184.8fcdd3da.js",revision:null},{url:"/quasar-docs/js/185.21f57ff9.js",revision:null},{url:"/quasar-docs/js/186.06862dd2.js",revision:null},{url:"/quasar-docs/js/187.f8bc0ac7.js",revision:null},{url:"/quasar-docs/js/188.c35bca06.js",revision:null},{url:"/quasar-docs/js/189.b4a8548f.js",revision:null},{url:"/quasar-docs/js/19.5497f131.js",revision:null},{url:"/quasar-docs/js/190.4b1fc5d2.js",revision:null},{url:"/quasar-docs/js/191.0a2eb787.js",revision:null},{url:"/quasar-docs/js/192.b9da36cd.js",revision:null},{url:"/quasar-docs/js/193.4f28abc8.js",revision:null},{url:"/quasar-docs/js/194.537f8e71.js",revision:null},{url:"/quasar-docs/js/195.4e869c39.js",revision:null},{url:"/quasar-docs/js/196.a1cc636b.js",revision:null},{url:"/quasar-docs/js/197.dcc8535d.js",revision:null},{url:"/quasar-docs/js/198.bc19c948.js",revision:null},{url:"/quasar-docs/js/199.b65d18d6.js",revision:null},{url:"/quasar-docs/js/20.c57b3039.js",revision:null},{url:"/quasar-docs/js/200.3c79b667.js",revision:null},{url:"/quasar-docs/js/201.72394181.js",revision:null},{url:"/quasar-docs/js/202.8d55703a.js",revision:null},{url:"/quasar-docs/js/203.caf5fe6f.js",revision:null},{url:"/quasar-docs/js/204.7b373c60.js",revision:null},{url:"/quasar-docs/js/205.fa964932.js",revision:null},{url:"/quasar-docs/js/206.29e5207d.js",revision:null},{url:"/quasar-docs/js/207.203327b2.js",revision:null},{url:"/quasar-docs/js/208.755c6860.js",revision:null},{url:"/quasar-docs/js/209.5081067e.js",revision:null},{url:"/quasar-docs/js/21.1a37d875.js",revision:null},{url:"/quasar-docs/js/210.9042bdc9.js",revision:null},{url:"/quasar-docs/js/211.010cf0f4.js",revision:null},{url:"/quasar-docs/js/212.4b1a96cb.js",revision:null},{url:"/quasar-docs/js/213.a29423cc.js",revision:null},{url:"/quasar-docs/js/214.b43586ce.js",revision:null},{url:"/quasar-docs/js/215.f8555379.js",revision:null},{url:"/quasar-docs/js/216.85ea9821.js",revision:null},{url:"/quasar-docs/js/217.103a0ee1.js",revision:null},{url:"/quasar-docs/js/218.feda58e6.js",revision:null},{url:"/quasar-docs/js/219.8d393629.js",revision:null},{url:"/quasar-docs/js/22.118c9342.js",revision:null},{url:"/quasar-docs/js/220.445b2eff.js",revision:null},{url:"/quasar-docs/js/221.88b70a4f.js",revision:null},{url:"/quasar-docs/js/222.76ce5583.js",revision:null},{url:"/quasar-docs/js/223.5f3cb3b8.js",revision:null},{url:"/quasar-docs/js/224.81313bde.js",revision:null},{url:"/quasar-docs/js/225.85b5e3a3.js",revision:null},{url:"/quasar-docs/js/226.c1c0be40.js",revision:null},{url:"/quasar-docs/js/227.ee327623.js",revision:null},{url:"/quasar-docs/js/228.77ea06d6.js",revision:null},{url:"/quasar-docs/js/229.a705a644.js",revision:null},{url:"/quasar-docs/js/23.5f90c2d7.js",revision:null},{url:"/quasar-docs/js/230.0bffc27b.js",revision:null},{url:"/quasar-docs/js/231.7f87af14.js",revision:null},{url:"/quasar-docs/js/232.76502004.js",revision:null},{url:"/quasar-docs/js/233.0729f44f.js",revision:null},{url:"/quasar-docs/js/234.04c51cdd.js",revision:null},{url:"/quasar-docs/js/235.fbd95614.js",revision:null},{url:"/quasar-docs/js/236.cf9e8c6d.js",revision:null},{url:"/quasar-docs/js/237.8684466d.js",revision:null},{url:"/quasar-docs/js/238.750e231e.js",revision:null},{url:"/quasar-docs/js/239.d434ab32.js",revision:null},{url:"/quasar-docs/js/24.135ae1b5.js",revision:null},{url:"/quasar-docs/js/240.5c7faea2.js",revision:null},{url:"/quasar-docs/js/241.65bbd67d.js",revision:null},{url:"/quasar-docs/js/242.48e02c94.js",revision:null},{url:"/quasar-docs/js/243.cff881df.js",revision:null},{url:"/quasar-docs/js/244.f56e5e7d.js",revision:null},{url:"/quasar-docs/js/245.7bd1b3f6.js",revision:null},{url:"/quasar-docs/js/246.9990e32d.js",revision:null},{url:"/quasar-docs/js/247.104e7191.js",revision:null},{url:"/quasar-docs/js/248.bb14bef6.js",revision:null},{url:"/quasar-docs/js/249.8f00b2f7.js",revision:null},{url:"/quasar-docs/js/25.67f50f66.js",revision:null},{url:"/quasar-docs/js/250.3c108c6a.js",revision:null},{url:"/quasar-docs/js/251.92a709c3.js",revision:null},{url:"/quasar-docs/js/252.d231c6d6.js",revision:null},{url:"/quasar-docs/js/253.f1d1bfa1.js",revision:null},{url:"/quasar-docs/js/254.7065765e.js",revision:null},{url:"/quasar-docs/js/255.77bf1f26.js",revision:null},{url:"/quasar-docs/js/256.871e84f3.js",revision:null},{url:"/quasar-docs/js/257.f2c855d8.js",revision:null},{url:"/quasar-docs/js/258.fddfbc95.js",revision:null},{url:"/quasar-docs/js/259.41ee7c1e.js",revision:null},{url:"/quasar-docs/js/26.8789e819.js",revision:null},{url:"/quasar-docs/js/260.35dc9b7c.js",revision:null},{url:"/quasar-docs/js/261.91be1713.js",revision:null},{url:"/quasar-docs/js/262.c2f37fff.js",revision:null},{url:"/quasar-docs/js/263.ddb8ecf8.js",revision:null},{url:"/quasar-docs/js/264.9a4fa893.js",revision:null},{url:"/quasar-docs/js/265.f8ef8a23.js",revision:null},{url:"/quasar-docs/js/266.d2b3ea99.js",revision:null},{url:"/quasar-docs/js/267.7cfd3035.js",revision:null},{url:"/quasar-docs/js/268.eba1eed5.js",revision:null},{url:"/quasar-docs/js/269.2ac7cf89.js",revision:null},{url:"/quasar-docs/js/27.ed958a62.js",revision:null},{url:"/quasar-docs/js/270.028bbafd.js",revision:null},{url:"/quasar-docs/js/271.7685520b.js",revision:null},{url:"/quasar-docs/js/272.99cde033.js",revision:null},{url:"/quasar-docs/js/273.2a914c0f.js",revision:null},{url:"/quasar-docs/js/274.0726b5ad.js",revision:null},{url:"/quasar-docs/js/275.b2d2b9b3.js",revision:null},{url:"/quasar-docs/js/276.67242327.js",revision:null},{url:"/quasar-docs/js/277.6a28ebd3.js",revision:null},{url:"/quasar-docs/js/278.fc1fa4ab.js",revision:null},{url:"/quasar-docs/js/279.89e65d3b.js",revision:null},{url:"/quasar-docs/js/28.2259a965.js",revision:null},{url:"/quasar-docs/js/280.0963a642.js",revision:null},{url:"/quasar-docs/js/281.d1ec45f1.js",revision:null},{url:"/quasar-docs/js/282.b87c7588.js",revision:null},{url:"/quasar-docs/js/283.f080749d.js",revision:null},{url:"/quasar-docs/js/284.c5730ae1.js",revision:null},{url:"/quasar-docs/js/285.afa80395.js",revision:null},{url:"/quasar-docs/js/286.9265d633.js",revision:null},{url:"/quasar-docs/js/287.a23fc6ff.js",revision:null},{url:"/quasar-docs/js/288.2cdc3162.js",revision:null},{url:"/quasar-docs/js/289.f5496575.js",revision:null},{url:"/quasar-docs/js/29.a0b37b31.js",revision:null},{url:"/quasar-docs/js/290.79990b8b.js",revision:null},{url:"/quasar-docs/js/30.4ae3d9b7.js",revision:null},{url:"/quasar-docs/js/31.3b6d12e5.js",revision:null},{url:"/quasar-docs/js/32.99c20af4.js",revision:null},{url:"/quasar-docs/js/33.0b696f29.js",revision:null},{url:"/quasar-docs/js/34.ed5ef431.js",revision:null},{url:"/quasar-docs/js/35.839a0494.js",revision:null},{url:"/quasar-docs/js/36.36d3f90a.js",revision:null},{url:"/quasar-docs/js/37.0eaef24a.js",revision:null},{url:"/quasar-docs/js/38.e8a58a85.js",revision:null},{url:"/quasar-docs/js/39.727e2103.js",revision:null},{url:"/quasar-docs/js/40.0cf891d8.js",revision:null},{url:"/quasar-docs/js/41.118fd61d.js",revision:null},{url:"/quasar-docs/js/42.7b964f2b.js",revision:null},{url:"/quasar-docs/js/43.0b01df05.js",revision:null},{url:"/quasar-docs/js/44.183adbe9.js",revision:null},{url:"/quasar-docs/js/45.942e8ddc.js",revision:null},{url:"/quasar-docs/js/46.bbcb4d07.js",revision:null},{url:"/quasar-docs/js/47.ec5a4dd4.js",revision:null},{url:"/quasar-docs/js/48.e0f374b7.js",revision:null},{url:"/quasar-docs/js/49.680dca38.js",revision:null},{url:"/quasar-docs/js/5.63667502.js",revision:null},{url:"/quasar-docs/js/50.8d93b660.js",revision:null},{url:"/quasar-docs/js/51.3c774f99.js",revision:null},{url:"/quasar-docs/js/52.d847fc9a.js",revision:null},{url:"/quasar-docs/js/53.ff831335.js",revision:null},{url:"/quasar-docs/js/54.b6e084cd.js",revision:null},{url:"/quasar-docs/js/55.0acfc05b.js",revision:null},{url:"/quasar-docs/js/56.7b14c423.js",revision:null},{url:"/quasar-docs/js/57.adc19d5e.js",revision:null},{url:"/quasar-docs/js/58.b228ff9c.js",revision:null},{url:"/quasar-docs/js/59.f0d2e43d.js",revision:null},{url:"/quasar-docs/js/6.ce7c1871.js",revision:null},{url:"/quasar-docs/js/60.66b03f80.js",revision:null},{url:"/quasar-docs/js/61.adf26bbe.js",revision:null},{url:"/quasar-docs/js/62.edf9116d.js",revision:null},{url:"/quasar-docs/js/63.2ab1c892.js",revision:null},{url:"/quasar-docs/js/64.47959d6f.js",revision:null},{url:"/quasar-docs/js/65.c204e705.js",revision:null},{url:"/quasar-docs/js/66.251a6d81.js",revision:null},{url:"/quasar-docs/js/67.cc69de90.js",revision:null},{url:"/quasar-docs/js/68.92901521.js",revision:null},{url:"/quasar-docs/js/69.e91a2488.js",revision:null},{url:"/quasar-docs/js/7.fc280212.js",revision:null},{url:"/quasar-docs/js/70.554a6a63.js",revision:null},{url:"/quasar-docs/js/71.5909d045.js",revision:null},{url:"/quasar-docs/js/72.86db30d4.js",revision:null},{url:"/quasar-docs/js/73.efe995b5.js",revision:null},{url:"/quasar-docs/js/74.6dc524bb.js",revision:null},{url:"/quasar-docs/js/75.e7d22bae.js",revision:null},{url:"/quasar-docs/js/76.9c51796c.js",revision:null},{url:"/quasar-docs/js/77.11884b86.js",revision:null},{url:"/quasar-docs/js/78.a753ae4d.js",revision:null},{url:"/quasar-docs/js/79.8a676104.js",revision:null},{url:"/quasar-docs/js/8.52475a74.js",revision:null},{url:"/quasar-docs/js/80.24a32a82.js",revision:null},{url:"/quasar-docs/js/81.0b9430b6.js",revision:null},{url:"/quasar-docs/js/82.17190ff2.js",revision:null},{url:"/quasar-docs/js/83.61db1133.js",revision:null},{url:"/quasar-docs/js/84.b931b1b2.js",revision:null},{url:"/quasar-docs/js/85.f837cbfc.js",revision:null},{url:"/quasar-docs/js/86.d3beee13.js",revision:null},{url:"/quasar-docs/js/87.99daec26.js",revision:null},{url:"/quasar-docs/js/88.e6a62fae.js",revision:null},{url:"/quasar-docs/js/89.15f67452.js",revision:null},{url:"/quasar-docs/js/9.969c4af6.js",revision:null},{url:"/quasar-docs/js/90.7e5f798e.js",revision:null},{url:"/quasar-docs/js/91.bb667b0b.js",revision:null},{url:"/quasar-docs/js/92.6370e265.js",revision:null},{url:"/quasar-docs/js/93.1ce91e67.js",revision:null},{url:"/quasar-docs/js/94.77af2eb4.js",revision:null},{url:"/quasar-docs/js/95.85e9c0c2.js",revision:null},{url:"/quasar-docs/js/96.5345d38b.js",revision:null},{url:"/quasar-docs/js/97.d44a4049.js",revision:null},{url:"/quasar-docs/js/98.3e990c1b.js",revision:null},{url:"/quasar-docs/js/99.61651932.js",revision:null},{url:"/quasar-docs/js/app.1579d449.js",revision:null},{url:"/quasar-docs/js/demo-source.aa6fff48.js",revision:null},{url:"/quasar-docs/js/demo.9da6b61a.js",revision:null},{url:"/quasar-docs/js/quasar-api.b39f5559.js",revision:null},{url:"/quasar-docs/js/vendor.8b185ed7.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"c204d8a4789b4bbf39245c6d39f17e25"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
