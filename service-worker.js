if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-1e28b66a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.afe1a32e.css",revision:null},{url:"/quasar-docs/css/11.07f9719d.css",revision:null},{url:"/quasar-docs/css/12.cd1b576e.css",revision:null},{url:"/quasar-docs/css/13.c07bf27d.css",revision:null},{url:"/quasar-docs/css/14.96af82c5.css",revision:null},{url:"/quasar-docs/css/15.99064edf.css",revision:null},{url:"/quasar-docs/css/16.add5568a.css",revision:null},{url:"/quasar-docs/css/17.e41fb891.css",revision:null},{url:"/quasar-docs/css/18.40810d73.css",revision:null},{url:"/quasar-docs/css/19.64943849.css",revision:null},{url:"/quasar-docs/css/20.b04235c4.css",revision:null},{url:"/quasar-docs/css/5.ad3185aa.css",revision:null},{url:"/quasar-docs/css/6.49f735a0.css",revision:null},{url:"/quasar-docs/css/7.b3abe3ba.css",revision:null},{url:"/quasar-docs/css/8.d2b53414.css",revision:null},{url:"/quasar-docs/css/9.29113f00.css",revision:null},{url:"/quasar-docs/css/app.8af65047.css",revision:null},{url:"/quasar-docs/css/demo.0719bcae.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.0d57c481.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.ae520e14.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"376ea37e5cb34c6a05c640df3b080e16"},{url:"/quasar-docs/js/10.2f212404.js",revision:null},{url:"/quasar-docs/js/100.7360bea3.js",revision:null},{url:"/quasar-docs/js/101.88e1c9ab.js",revision:null},{url:"/quasar-docs/js/102.4f84ec1b.js",revision:null},{url:"/quasar-docs/js/103.eda46bf4.js",revision:null},{url:"/quasar-docs/js/104.8a6e259d.js",revision:null},{url:"/quasar-docs/js/105.b2b32bde.js",revision:null},{url:"/quasar-docs/js/106.3d31bb6a.js",revision:null},{url:"/quasar-docs/js/107.75c2b9db.js",revision:null},{url:"/quasar-docs/js/108.f9e32d68.js",revision:null},{url:"/quasar-docs/js/109.eab2a2ef.js",revision:null},{url:"/quasar-docs/js/11.4b514242.js",revision:null},{url:"/quasar-docs/js/110.9ad0a7a4.js",revision:null},{url:"/quasar-docs/js/111.0a15bc6f.js",revision:null},{url:"/quasar-docs/js/112.675e73a5.js",revision:null},{url:"/quasar-docs/js/113.e379953e.js",revision:null},{url:"/quasar-docs/js/114.fed4b602.js",revision:null},{url:"/quasar-docs/js/115.7385420f.js",revision:null},{url:"/quasar-docs/js/116.18473676.js",revision:null},{url:"/quasar-docs/js/117.b09acb51.js",revision:null},{url:"/quasar-docs/js/118.95619e28.js",revision:null},{url:"/quasar-docs/js/119.14d8fab6.js",revision:null},{url:"/quasar-docs/js/12.3757c910.js",revision:null},{url:"/quasar-docs/js/120.dae34822.js",revision:null},{url:"/quasar-docs/js/121.9840600c.js",revision:null},{url:"/quasar-docs/js/122.4fb23747.js",revision:null},{url:"/quasar-docs/js/123.8da89356.js",revision:null},{url:"/quasar-docs/js/124.dd561712.js",revision:null},{url:"/quasar-docs/js/125.f682e449.js",revision:null},{url:"/quasar-docs/js/126.5559fb35.js",revision:null},{url:"/quasar-docs/js/127.e150f2ee.js",revision:null},{url:"/quasar-docs/js/128.28861d1b.js",revision:null},{url:"/quasar-docs/js/129.7540846d.js",revision:null},{url:"/quasar-docs/js/13.4b35487c.js",revision:null},{url:"/quasar-docs/js/130.55fd0029.js",revision:null},{url:"/quasar-docs/js/131.52f95716.js",revision:null},{url:"/quasar-docs/js/132.6b3d0e6c.js",revision:null},{url:"/quasar-docs/js/133.5c2a17f6.js",revision:null},{url:"/quasar-docs/js/134.1311259b.js",revision:null},{url:"/quasar-docs/js/135.68a57bea.js",revision:null},{url:"/quasar-docs/js/136.deeb1e5d.js",revision:null},{url:"/quasar-docs/js/137.2e835de3.js",revision:null},{url:"/quasar-docs/js/138.5fc5fea5.js",revision:null},{url:"/quasar-docs/js/139.c7533683.js",revision:null},{url:"/quasar-docs/js/14.b6714968.js",revision:null},{url:"/quasar-docs/js/140.cbef98e4.js",revision:null},{url:"/quasar-docs/js/141.dce867f9.js",revision:null},{url:"/quasar-docs/js/142.bb831394.js",revision:null},{url:"/quasar-docs/js/143.9794ae89.js",revision:null},{url:"/quasar-docs/js/144.921c6c2b.js",revision:null},{url:"/quasar-docs/js/145.ba00c481.js",revision:null},{url:"/quasar-docs/js/146.48d404a7.js",revision:null},{url:"/quasar-docs/js/147.9fc0d2d1.js",revision:null},{url:"/quasar-docs/js/148.54682227.js",revision:null},{url:"/quasar-docs/js/149.43c5ded5.js",revision:null},{url:"/quasar-docs/js/15.0f50b3dc.js",revision:null},{url:"/quasar-docs/js/150.596e256b.js",revision:null},{url:"/quasar-docs/js/151.3bce4d94.js",revision:null},{url:"/quasar-docs/js/152.e9a4c701.js",revision:null},{url:"/quasar-docs/js/153.89e69fe6.js",revision:null},{url:"/quasar-docs/js/154.084739e8.js",revision:null},{url:"/quasar-docs/js/155.bb2ae9a6.js",revision:null},{url:"/quasar-docs/js/156.88eb0943.js",revision:null},{url:"/quasar-docs/js/157.f84a5310.js",revision:null},{url:"/quasar-docs/js/158.560323ba.js",revision:null},{url:"/quasar-docs/js/159.0c28a1af.js",revision:null},{url:"/quasar-docs/js/16.377faf49.js",revision:null},{url:"/quasar-docs/js/160.730eb8f6.js",revision:null},{url:"/quasar-docs/js/161.2b6edf54.js",revision:null},{url:"/quasar-docs/js/162.bb6e7228.js",revision:null},{url:"/quasar-docs/js/163.def5bf9e.js",revision:null},{url:"/quasar-docs/js/164.9901b223.js",revision:null},{url:"/quasar-docs/js/165.2dccf6a0.js",revision:null},{url:"/quasar-docs/js/166.712bc1df.js",revision:null},{url:"/quasar-docs/js/167.9d9ce800.js",revision:null},{url:"/quasar-docs/js/168.8660e369.js",revision:null},{url:"/quasar-docs/js/169.b0b44f98.js",revision:null},{url:"/quasar-docs/js/17.e4b83a04.js",revision:null},{url:"/quasar-docs/js/170.b87907af.js",revision:null},{url:"/quasar-docs/js/171.2306f928.js",revision:null},{url:"/quasar-docs/js/172.14f981eb.js",revision:null},{url:"/quasar-docs/js/173.e6f25b8a.js",revision:null},{url:"/quasar-docs/js/174.9ab06880.js",revision:null},{url:"/quasar-docs/js/175.0b0d7f2f.js",revision:null},{url:"/quasar-docs/js/176.5ca3185c.js",revision:null},{url:"/quasar-docs/js/177.2b11baa4.js",revision:null},{url:"/quasar-docs/js/178.d2aa3741.js",revision:null},{url:"/quasar-docs/js/179.467ec07a.js",revision:null},{url:"/quasar-docs/js/18.ced3202d.js",revision:null},{url:"/quasar-docs/js/180.2caf18cf.js",revision:null},{url:"/quasar-docs/js/181.0ed3694a.js",revision:null},{url:"/quasar-docs/js/182.e3571315.js",revision:null},{url:"/quasar-docs/js/183.613a5982.js",revision:null},{url:"/quasar-docs/js/184.dc1532c1.js",revision:null},{url:"/quasar-docs/js/185.efb1e80a.js",revision:null},{url:"/quasar-docs/js/186.c12a819d.js",revision:null},{url:"/quasar-docs/js/187.43bd9096.js",revision:null},{url:"/quasar-docs/js/188.c45ba8d6.js",revision:null},{url:"/quasar-docs/js/189.21dcd1a9.js",revision:null},{url:"/quasar-docs/js/19.491dd339.js",revision:null},{url:"/quasar-docs/js/190.628ee1ef.js",revision:null},{url:"/quasar-docs/js/191.c072c6f2.js",revision:null},{url:"/quasar-docs/js/192.1383462f.js",revision:null},{url:"/quasar-docs/js/193.3532598d.js",revision:null},{url:"/quasar-docs/js/194.03248361.js",revision:null},{url:"/quasar-docs/js/195.421d81b7.js",revision:null},{url:"/quasar-docs/js/196.87dc501a.js",revision:null},{url:"/quasar-docs/js/197.b4bd155f.js",revision:null},{url:"/quasar-docs/js/198.e0e48d95.js",revision:null},{url:"/quasar-docs/js/199.9fe1cfd3.js",revision:null},{url:"/quasar-docs/js/20.dd2e813e.js",revision:null},{url:"/quasar-docs/js/200.40aa2881.js",revision:null},{url:"/quasar-docs/js/201.fbb1dced.js",revision:null},{url:"/quasar-docs/js/202.e8f075f8.js",revision:null},{url:"/quasar-docs/js/203.2e03ed06.js",revision:null},{url:"/quasar-docs/js/204.42cc491f.js",revision:null},{url:"/quasar-docs/js/205.ae266e33.js",revision:null},{url:"/quasar-docs/js/206.a9fc61df.js",revision:null},{url:"/quasar-docs/js/207.88e8ba44.js",revision:null},{url:"/quasar-docs/js/208.6f276bff.js",revision:null},{url:"/quasar-docs/js/209.6de1ae71.js",revision:null},{url:"/quasar-docs/js/21.c9ae6784.js",revision:null},{url:"/quasar-docs/js/210.49522cf8.js",revision:null},{url:"/quasar-docs/js/211.2c4215fd.js",revision:null},{url:"/quasar-docs/js/212.9de52bf6.js",revision:null},{url:"/quasar-docs/js/213.9e7e852c.js",revision:null},{url:"/quasar-docs/js/214.7cf23176.js",revision:null},{url:"/quasar-docs/js/215.6801e821.js",revision:null},{url:"/quasar-docs/js/216.9a304108.js",revision:null},{url:"/quasar-docs/js/217.c3dbd9ec.js",revision:null},{url:"/quasar-docs/js/218.8c9dbc33.js",revision:null},{url:"/quasar-docs/js/219.455c5e2d.js",revision:null},{url:"/quasar-docs/js/22.e5a29c3e.js",revision:null},{url:"/quasar-docs/js/220.7ed5b011.js",revision:null},{url:"/quasar-docs/js/221.41ef5b11.js",revision:null},{url:"/quasar-docs/js/222.6b343628.js",revision:null},{url:"/quasar-docs/js/223.79508617.js",revision:null},{url:"/quasar-docs/js/224.75aae343.js",revision:null},{url:"/quasar-docs/js/225.50f0d2ea.js",revision:null},{url:"/quasar-docs/js/226.28258032.js",revision:null},{url:"/quasar-docs/js/227.f2059b4f.js",revision:null},{url:"/quasar-docs/js/228.96e668b1.js",revision:null},{url:"/quasar-docs/js/229.de705332.js",revision:null},{url:"/quasar-docs/js/23.0e4eea40.js",revision:null},{url:"/quasar-docs/js/230.9cf19908.js",revision:null},{url:"/quasar-docs/js/231.46fd0a60.js",revision:null},{url:"/quasar-docs/js/232.a655eece.js",revision:null},{url:"/quasar-docs/js/233.4ec5b81a.js",revision:null},{url:"/quasar-docs/js/234.6f2659c6.js",revision:null},{url:"/quasar-docs/js/235.ce87203a.js",revision:null},{url:"/quasar-docs/js/236.f3bc0d85.js",revision:null},{url:"/quasar-docs/js/237.39ad590d.js",revision:null},{url:"/quasar-docs/js/238.2e41f27a.js",revision:null},{url:"/quasar-docs/js/239.8c74a3db.js",revision:null},{url:"/quasar-docs/js/24.c80ee731.js",revision:null},{url:"/quasar-docs/js/240.b3495a93.js",revision:null},{url:"/quasar-docs/js/241.ed741457.js",revision:null},{url:"/quasar-docs/js/242.a9e1b6c5.js",revision:null},{url:"/quasar-docs/js/243.b1d5cd0d.js",revision:null},{url:"/quasar-docs/js/244.48e10ac9.js",revision:null},{url:"/quasar-docs/js/245.8e326e87.js",revision:null},{url:"/quasar-docs/js/246.e01af956.js",revision:null},{url:"/quasar-docs/js/247.cc6cf7e3.js",revision:null},{url:"/quasar-docs/js/248.1dd23d15.js",revision:null},{url:"/quasar-docs/js/249.9eac867e.js",revision:null},{url:"/quasar-docs/js/25.1a1e94cc.js",revision:null},{url:"/quasar-docs/js/250.7802d1e7.js",revision:null},{url:"/quasar-docs/js/251.3d2724a5.js",revision:null},{url:"/quasar-docs/js/252.90d7e44b.js",revision:null},{url:"/quasar-docs/js/253.aa4c297e.js",revision:null},{url:"/quasar-docs/js/254.bccbbb97.js",revision:null},{url:"/quasar-docs/js/255.ab709c31.js",revision:null},{url:"/quasar-docs/js/256.18725661.js",revision:null},{url:"/quasar-docs/js/257.20817759.js",revision:null},{url:"/quasar-docs/js/258.faba5a90.js",revision:null},{url:"/quasar-docs/js/259.273aaf85.js",revision:null},{url:"/quasar-docs/js/26.1d320e2a.js",revision:null},{url:"/quasar-docs/js/260.dd652265.js",revision:null},{url:"/quasar-docs/js/261.cfd07654.js",revision:null},{url:"/quasar-docs/js/262.5295f7d4.js",revision:null},{url:"/quasar-docs/js/263.59a00a9f.js",revision:null},{url:"/quasar-docs/js/264.b51978c0.js",revision:null},{url:"/quasar-docs/js/265.ec1c227c.js",revision:null},{url:"/quasar-docs/js/266.5fca91ec.js",revision:null},{url:"/quasar-docs/js/267.43a163e5.js",revision:null},{url:"/quasar-docs/js/268.acbb1903.js",revision:null},{url:"/quasar-docs/js/269.42cce543.js",revision:null},{url:"/quasar-docs/js/27.36d6e6ff.js",revision:null},{url:"/quasar-docs/js/270.a782ca2d.js",revision:null},{url:"/quasar-docs/js/271.0a495baf.js",revision:null},{url:"/quasar-docs/js/272.3ca40528.js",revision:null},{url:"/quasar-docs/js/273.afdc67e0.js",revision:null},{url:"/quasar-docs/js/274.645b97b8.js",revision:null},{url:"/quasar-docs/js/275.9943f0ad.js",revision:null},{url:"/quasar-docs/js/276.3b6c5365.js",revision:null},{url:"/quasar-docs/js/277.8306b089.js",revision:null},{url:"/quasar-docs/js/278.21f6be7d.js",revision:null},{url:"/quasar-docs/js/279.bd2ff833.js",revision:null},{url:"/quasar-docs/js/28.ffd3aa84.js",revision:null},{url:"/quasar-docs/js/280.8ceb6dfb.js",revision:null},{url:"/quasar-docs/js/281.c8ca5f99.js",revision:null},{url:"/quasar-docs/js/282.9a633423.js",revision:null},{url:"/quasar-docs/js/283.093ed49d.js",revision:null},{url:"/quasar-docs/js/284.4ad4d923.js",revision:null},{url:"/quasar-docs/js/285.6237c0e8.js",revision:null},{url:"/quasar-docs/js/286.dd811f19.js",revision:null},{url:"/quasar-docs/js/287.754d1ca6.js",revision:null},{url:"/quasar-docs/js/288.5c936282.js",revision:null},{url:"/quasar-docs/js/289.890dfbe1.js",revision:null},{url:"/quasar-docs/js/29.93574ad8.js",revision:null},{url:"/quasar-docs/js/290.a6ef93cd.js",revision:null},{url:"/quasar-docs/js/30.4b51d610.js",revision:null},{url:"/quasar-docs/js/31.d696fc7a.js",revision:null},{url:"/quasar-docs/js/32.437fca43.js",revision:null},{url:"/quasar-docs/js/33.60cfb526.js",revision:null},{url:"/quasar-docs/js/34.81da2a2e.js",revision:null},{url:"/quasar-docs/js/35.409cfcc8.js",revision:null},{url:"/quasar-docs/js/36.6569888b.js",revision:null},{url:"/quasar-docs/js/37.3d18eb77.js",revision:null},{url:"/quasar-docs/js/38.70bb6046.js",revision:null},{url:"/quasar-docs/js/39.6f294349.js",revision:null},{url:"/quasar-docs/js/40.3f761b36.js",revision:null},{url:"/quasar-docs/js/41.a6e8777d.js",revision:null},{url:"/quasar-docs/js/42.61317026.js",revision:null},{url:"/quasar-docs/js/43.6b6d925f.js",revision:null},{url:"/quasar-docs/js/44.e9ef331e.js",revision:null},{url:"/quasar-docs/js/45.aca44ce6.js",revision:null},{url:"/quasar-docs/js/46.e016361c.js",revision:null},{url:"/quasar-docs/js/47.bdf54426.js",revision:null},{url:"/quasar-docs/js/48.9817759b.js",revision:null},{url:"/quasar-docs/js/49.f668cd1d.js",revision:null},{url:"/quasar-docs/js/5.b9cc486f.js",revision:null},{url:"/quasar-docs/js/50.45a87406.js",revision:null},{url:"/quasar-docs/js/51.cb357077.js",revision:null},{url:"/quasar-docs/js/52.7af79418.js",revision:null},{url:"/quasar-docs/js/53.0264d7f4.js",revision:null},{url:"/quasar-docs/js/54.71f64cb8.js",revision:null},{url:"/quasar-docs/js/55.44bf5a5d.js",revision:null},{url:"/quasar-docs/js/56.c2fad82d.js",revision:null},{url:"/quasar-docs/js/57.33d5ac1c.js",revision:null},{url:"/quasar-docs/js/58.84eb887c.js",revision:null},{url:"/quasar-docs/js/59.151cd1b1.js",revision:null},{url:"/quasar-docs/js/6.83856ff2.js",revision:null},{url:"/quasar-docs/js/60.482329c0.js",revision:null},{url:"/quasar-docs/js/61.f565065e.js",revision:null},{url:"/quasar-docs/js/62.e1634cc3.js",revision:null},{url:"/quasar-docs/js/63.1f61605f.js",revision:null},{url:"/quasar-docs/js/64.39c3c29b.js",revision:null},{url:"/quasar-docs/js/65.9f69c74a.js",revision:null},{url:"/quasar-docs/js/66.201a6c85.js",revision:null},{url:"/quasar-docs/js/67.c3cdf1a4.js",revision:null},{url:"/quasar-docs/js/68.0adda8c0.js",revision:null},{url:"/quasar-docs/js/69.07de638b.js",revision:null},{url:"/quasar-docs/js/7.a5da970e.js",revision:null},{url:"/quasar-docs/js/70.b8d88d8f.js",revision:null},{url:"/quasar-docs/js/71.7266344e.js",revision:null},{url:"/quasar-docs/js/72.fecf2340.js",revision:null},{url:"/quasar-docs/js/73.b3efa76c.js",revision:null},{url:"/quasar-docs/js/74.21d87995.js",revision:null},{url:"/quasar-docs/js/75.24d46fcd.js",revision:null},{url:"/quasar-docs/js/76.ccfc4c4b.js",revision:null},{url:"/quasar-docs/js/77.2bb64992.js",revision:null},{url:"/quasar-docs/js/78.a0b35ab6.js",revision:null},{url:"/quasar-docs/js/79.1f347116.js",revision:null},{url:"/quasar-docs/js/8.2667fcc2.js",revision:null},{url:"/quasar-docs/js/80.6e5dd389.js",revision:null},{url:"/quasar-docs/js/81.c58e54ac.js",revision:null},{url:"/quasar-docs/js/82.e1ee8ed8.js",revision:null},{url:"/quasar-docs/js/83.2b532220.js",revision:null},{url:"/quasar-docs/js/84.db1b8485.js",revision:null},{url:"/quasar-docs/js/85.50734d11.js",revision:null},{url:"/quasar-docs/js/86.c02e5b2d.js",revision:null},{url:"/quasar-docs/js/87.090cc00c.js",revision:null},{url:"/quasar-docs/js/88.6358c5ff.js",revision:null},{url:"/quasar-docs/js/89.e5d3cb7b.js",revision:null},{url:"/quasar-docs/js/9.e4904baf.js",revision:null},{url:"/quasar-docs/js/90.d3cc127e.js",revision:null},{url:"/quasar-docs/js/91.837e3483.js",revision:null},{url:"/quasar-docs/js/92.dafb702f.js",revision:null},{url:"/quasar-docs/js/93.13d9f921.js",revision:null},{url:"/quasar-docs/js/94.7b2f7645.js",revision:null},{url:"/quasar-docs/js/95.d81c9013.js",revision:null},{url:"/quasar-docs/js/96.2729e956.js",revision:null},{url:"/quasar-docs/js/97.54a39ee2.js",revision:null},{url:"/quasar-docs/js/98.04b32da2.js",revision:null},{url:"/quasar-docs/js/99.19e19a98.js",revision:null},{url:"/quasar-docs/js/app.4ffee2d5.js",revision:null},{url:"/quasar-docs/js/demo-source.14ea718e.js",revision:null},{url:"/quasar-docs/js/demo.cac46b81.js",revision:null},{url:"/quasar-docs/js/quasar-api.a52479fa.js",revision:null},{url:"/quasar-docs/js/vendor.47dec6bc.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"c204d8a4789b4bbf39245c6d39f17e25"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
