if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-1e28b66a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.b07171aa.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.c07bf27d.css",revision:null},{url:"/quasar-docs/css/13.96af82c5.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.add5568a.css",revision:null},{url:"/quasar-docs/css/16.e41fb891.css",revision:null},{url:"/quasar-docs/css/17.40810d73.css",revision:null},{url:"/quasar-docs/css/18.64943849.css",revision:null},{url:"/quasar-docs/css/19.b04235c4.css",revision:null},{url:"/quasar-docs/css/20.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.b1df0b34.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.ecf30d56.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.d2b889a9.css",revision:null},{url:"/quasar-docs/css/demo.d4141ee4.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.73d1c707.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4e5d88c6.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"25771d25782ffe74868ca9d54e475bc2"},{url:"/quasar-docs/js/10.e6b03379.js",revision:null},{url:"/quasar-docs/js/100.2f66ba87.js",revision:null},{url:"/quasar-docs/js/101.8ffe8b2b.js",revision:null},{url:"/quasar-docs/js/102.a8d0ffa1.js",revision:null},{url:"/quasar-docs/js/103.a6390302.js",revision:null},{url:"/quasar-docs/js/104.0c950de4.js",revision:null},{url:"/quasar-docs/js/105.a39b97c0.js",revision:null},{url:"/quasar-docs/js/106.7cffb124.js",revision:null},{url:"/quasar-docs/js/107.c211efab.js",revision:null},{url:"/quasar-docs/js/108.a55642bc.js",revision:null},{url:"/quasar-docs/js/109.cbb027e2.js",revision:null},{url:"/quasar-docs/js/11.f2fc884a.js",revision:null},{url:"/quasar-docs/js/110.6bd4fc55.js",revision:null},{url:"/quasar-docs/js/111.17d649d8.js",revision:null},{url:"/quasar-docs/js/112.d1a8cadc.js",revision:null},{url:"/quasar-docs/js/113.dc46b9d9.js",revision:null},{url:"/quasar-docs/js/114.193042e9.js",revision:null},{url:"/quasar-docs/js/115.b867509b.js",revision:null},{url:"/quasar-docs/js/116.d6743cea.js",revision:null},{url:"/quasar-docs/js/117.5b37461c.js",revision:null},{url:"/quasar-docs/js/118.f3ddb833.js",revision:null},{url:"/quasar-docs/js/119.8381aed1.js",revision:null},{url:"/quasar-docs/js/12.4085406a.js",revision:null},{url:"/quasar-docs/js/120.8056c219.js",revision:null},{url:"/quasar-docs/js/121.09622363.js",revision:null},{url:"/quasar-docs/js/122.a407c0a0.js",revision:null},{url:"/quasar-docs/js/123.a9eadb19.js",revision:null},{url:"/quasar-docs/js/124.2c636b1a.js",revision:null},{url:"/quasar-docs/js/125.d29f433f.js",revision:null},{url:"/quasar-docs/js/126.5c051e6d.js",revision:null},{url:"/quasar-docs/js/127.4c6dbba0.js",revision:null},{url:"/quasar-docs/js/128.d4674485.js",revision:null},{url:"/quasar-docs/js/129.acbe4fc5.js",revision:null},{url:"/quasar-docs/js/13.5baacc14.js",revision:null},{url:"/quasar-docs/js/130.0144b2ae.js",revision:null},{url:"/quasar-docs/js/131.4887eb4c.js",revision:null},{url:"/quasar-docs/js/132.bd3c0734.js",revision:null},{url:"/quasar-docs/js/133.c9947054.js",revision:null},{url:"/quasar-docs/js/134.a51dfa30.js",revision:null},{url:"/quasar-docs/js/135.c794ff80.js",revision:null},{url:"/quasar-docs/js/136.019cf71f.js",revision:null},{url:"/quasar-docs/js/137.5f9c1280.js",revision:null},{url:"/quasar-docs/js/138.d1796884.js",revision:null},{url:"/quasar-docs/js/139.cacfd385.js",revision:null},{url:"/quasar-docs/js/14.9212706c.js",revision:null},{url:"/quasar-docs/js/140.52dcf740.js",revision:null},{url:"/quasar-docs/js/141.d1c462fd.js",revision:null},{url:"/quasar-docs/js/142.7e8eb4f0.js",revision:null},{url:"/quasar-docs/js/143.1efa3634.js",revision:null},{url:"/quasar-docs/js/144.511ba131.js",revision:null},{url:"/quasar-docs/js/145.f57daa8d.js",revision:null},{url:"/quasar-docs/js/146.57d2370a.js",revision:null},{url:"/quasar-docs/js/147.ab1125c2.js",revision:null},{url:"/quasar-docs/js/148.a1faafe4.js",revision:null},{url:"/quasar-docs/js/149.30ce8985.js",revision:null},{url:"/quasar-docs/js/15.b7a29cef.js",revision:null},{url:"/quasar-docs/js/150.b86220f6.js",revision:null},{url:"/quasar-docs/js/151.9c8362c2.js",revision:null},{url:"/quasar-docs/js/152.94ac6748.js",revision:null},{url:"/quasar-docs/js/153.d6ed87ff.js",revision:null},{url:"/quasar-docs/js/154.9e050bea.js",revision:null},{url:"/quasar-docs/js/155.5c9d58af.js",revision:null},{url:"/quasar-docs/js/156.74715cc6.js",revision:null},{url:"/quasar-docs/js/157.5b4fb6a8.js",revision:null},{url:"/quasar-docs/js/158.3ea24a80.js",revision:null},{url:"/quasar-docs/js/159.f33af7c0.js",revision:null},{url:"/quasar-docs/js/16.a91d10ef.js",revision:null},{url:"/quasar-docs/js/160.1e8ea31b.js",revision:null},{url:"/quasar-docs/js/161.f90aafe1.js",revision:null},{url:"/quasar-docs/js/162.9fc4786a.js",revision:null},{url:"/quasar-docs/js/163.cedc889a.js",revision:null},{url:"/quasar-docs/js/164.3b0618dd.js",revision:null},{url:"/quasar-docs/js/165.013a3b14.js",revision:null},{url:"/quasar-docs/js/166.1a29483b.js",revision:null},{url:"/quasar-docs/js/167.bddac887.js",revision:null},{url:"/quasar-docs/js/168.0b37a38a.js",revision:null},{url:"/quasar-docs/js/169.a01ab194.js",revision:null},{url:"/quasar-docs/js/17.2661add0.js",revision:null},{url:"/quasar-docs/js/170.513c4908.js",revision:null},{url:"/quasar-docs/js/171.24699975.js",revision:null},{url:"/quasar-docs/js/172.f5b44602.js",revision:null},{url:"/quasar-docs/js/173.4d964dc8.js",revision:null},{url:"/quasar-docs/js/174.ca4359a3.js",revision:null},{url:"/quasar-docs/js/175.56f8299f.js",revision:null},{url:"/quasar-docs/js/176.edbe50d7.js",revision:null},{url:"/quasar-docs/js/177.e7084c64.js",revision:null},{url:"/quasar-docs/js/178.7a054b3e.js",revision:null},{url:"/quasar-docs/js/179.c9d74559.js",revision:null},{url:"/quasar-docs/js/18.a09ba13d.js",revision:null},{url:"/quasar-docs/js/180.ed523a6f.js",revision:null},{url:"/quasar-docs/js/181.76ed3ae7.js",revision:null},{url:"/quasar-docs/js/182.7377a184.js",revision:null},{url:"/quasar-docs/js/183.28b6e00d.js",revision:null},{url:"/quasar-docs/js/184.7d954835.js",revision:null},{url:"/quasar-docs/js/185.5a9fb31c.js",revision:null},{url:"/quasar-docs/js/186.7b3c9a77.js",revision:null},{url:"/quasar-docs/js/187.2680850c.js",revision:null},{url:"/quasar-docs/js/188.4f798b15.js",revision:null},{url:"/quasar-docs/js/189.43679be1.js",revision:null},{url:"/quasar-docs/js/19.53ec74cd.js",revision:null},{url:"/quasar-docs/js/190.3bbecee5.js",revision:null},{url:"/quasar-docs/js/191.7cb4c32b.js",revision:null},{url:"/quasar-docs/js/192.f88c4fa4.js",revision:null},{url:"/quasar-docs/js/193.03658609.js",revision:null},{url:"/quasar-docs/js/194.83d5af57.js",revision:null},{url:"/quasar-docs/js/195.ee528b47.js",revision:null},{url:"/quasar-docs/js/196.3ab16015.js",revision:null},{url:"/quasar-docs/js/197.eb76ad6b.js",revision:null},{url:"/quasar-docs/js/198.3821d024.js",revision:null},{url:"/quasar-docs/js/199.71b873d5.js",revision:null},{url:"/quasar-docs/js/20.85a1b5d5.js",revision:null},{url:"/quasar-docs/js/200.55680f78.js",revision:null},{url:"/quasar-docs/js/201.aa9e8549.js",revision:null},{url:"/quasar-docs/js/202.795f7ee8.js",revision:null},{url:"/quasar-docs/js/203.bf6d21b2.js",revision:null},{url:"/quasar-docs/js/204.a303eb10.js",revision:null},{url:"/quasar-docs/js/205.b09cac5f.js",revision:null},{url:"/quasar-docs/js/206.ddbc1df7.js",revision:null},{url:"/quasar-docs/js/207.4c3891aa.js",revision:null},{url:"/quasar-docs/js/208.86a89d65.js",revision:null},{url:"/quasar-docs/js/209.25c18f80.js",revision:null},{url:"/quasar-docs/js/21.37df6819.js",revision:null},{url:"/quasar-docs/js/210.3d5c1354.js",revision:null},{url:"/quasar-docs/js/211.3c2f98cf.js",revision:null},{url:"/quasar-docs/js/212.a4248321.js",revision:null},{url:"/quasar-docs/js/213.c942c89a.js",revision:null},{url:"/quasar-docs/js/214.1e36cfde.js",revision:null},{url:"/quasar-docs/js/215.1d275ed8.js",revision:null},{url:"/quasar-docs/js/216.8dd5ecfb.js",revision:null},{url:"/quasar-docs/js/217.8cfc4ebc.js",revision:null},{url:"/quasar-docs/js/218.5fff3981.js",revision:null},{url:"/quasar-docs/js/219.e41480f3.js",revision:null},{url:"/quasar-docs/js/22.57b3c274.js",revision:null},{url:"/quasar-docs/js/220.a43982d8.js",revision:null},{url:"/quasar-docs/js/221.862e8276.js",revision:null},{url:"/quasar-docs/js/222.f373df92.js",revision:null},{url:"/quasar-docs/js/223.fd8d8988.js",revision:null},{url:"/quasar-docs/js/224.e332c656.js",revision:null},{url:"/quasar-docs/js/225.5fc460c3.js",revision:null},{url:"/quasar-docs/js/226.2187403e.js",revision:null},{url:"/quasar-docs/js/227.68c8d76a.js",revision:null},{url:"/quasar-docs/js/228.8b854625.js",revision:null},{url:"/quasar-docs/js/229.39bae12b.js",revision:null},{url:"/quasar-docs/js/23.b3c2eb63.js",revision:null},{url:"/quasar-docs/js/230.a5e232d1.js",revision:null},{url:"/quasar-docs/js/231.fedc4681.js",revision:null},{url:"/quasar-docs/js/232.a303dfaf.js",revision:null},{url:"/quasar-docs/js/233.97424a3d.js",revision:null},{url:"/quasar-docs/js/234.86734b25.js",revision:null},{url:"/quasar-docs/js/235.a475ff81.js",revision:null},{url:"/quasar-docs/js/236.4cac1d32.js",revision:null},{url:"/quasar-docs/js/237.dbbff254.js",revision:null},{url:"/quasar-docs/js/238.319424fb.js",revision:null},{url:"/quasar-docs/js/239.6a87aa4b.js",revision:null},{url:"/quasar-docs/js/24.b16ee5cb.js",revision:null},{url:"/quasar-docs/js/240.c28d5e7e.js",revision:null},{url:"/quasar-docs/js/241.47f0af13.js",revision:null},{url:"/quasar-docs/js/242.b6c590b9.js",revision:null},{url:"/quasar-docs/js/243.8c8e87c3.js",revision:null},{url:"/quasar-docs/js/244.d923fb53.js",revision:null},{url:"/quasar-docs/js/245.c81ec0a5.js",revision:null},{url:"/quasar-docs/js/246.721b914b.js",revision:null},{url:"/quasar-docs/js/247.8b6be526.js",revision:null},{url:"/quasar-docs/js/248.c8f2b314.js",revision:null},{url:"/quasar-docs/js/249.59f2a520.js",revision:null},{url:"/quasar-docs/js/25.452cd3d7.js",revision:null},{url:"/quasar-docs/js/250.b04b2d96.js",revision:null},{url:"/quasar-docs/js/251.5fca23a5.js",revision:null},{url:"/quasar-docs/js/252.25ff15e9.js",revision:null},{url:"/quasar-docs/js/253.a6a6f1fc.js",revision:null},{url:"/quasar-docs/js/254.c6168bb3.js",revision:null},{url:"/quasar-docs/js/255.5cfda679.js",revision:null},{url:"/quasar-docs/js/256.0bdf696c.js",revision:null},{url:"/quasar-docs/js/257.426307e6.js",revision:null},{url:"/quasar-docs/js/258.5b7dc373.js",revision:null},{url:"/quasar-docs/js/259.0dd2f05b.js",revision:null},{url:"/quasar-docs/js/26.19cd76b4.js",revision:null},{url:"/quasar-docs/js/260.376af26f.js",revision:null},{url:"/quasar-docs/js/261.b7dff882.js",revision:null},{url:"/quasar-docs/js/262.d519d88e.js",revision:null},{url:"/quasar-docs/js/263.bf060225.js",revision:null},{url:"/quasar-docs/js/264.a3783324.js",revision:null},{url:"/quasar-docs/js/265.efb307be.js",revision:null},{url:"/quasar-docs/js/266.8f5c4d5f.js",revision:null},{url:"/quasar-docs/js/267.2ee385eb.js",revision:null},{url:"/quasar-docs/js/268.8a19f599.js",revision:null},{url:"/quasar-docs/js/269.2b7a1e33.js",revision:null},{url:"/quasar-docs/js/27.cabe083f.js",revision:null},{url:"/quasar-docs/js/270.77374224.js",revision:null},{url:"/quasar-docs/js/271.648d373b.js",revision:null},{url:"/quasar-docs/js/272.941e0419.js",revision:null},{url:"/quasar-docs/js/273.6ff4dc18.js",revision:null},{url:"/quasar-docs/js/274.4c9d8193.js",revision:null},{url:"/quasar-docs/js/275.e087feea.js",revision:null},{url:"/quasar-docs/js/276.54920cea.js",revision:null},{url:"/quasar-docs/js/277.2daa9164.js",revision:null},{url:"/quasar-docs/js/278.3792b653.js",revision:null},{url:"/quasar-docs/js/279.ce9596e1.js",revision:null},{url:"/quasar-docs/js/28.d4c1d430.js",revision:null},{url:"/quasar-docs/js/280.841e6f0d.js",revision:null},{url:"/quasar-docs/js/281.915595b9.js",revision:null},{url:"/quasar-docs/js/282.50afd929.js",revision:null},{url:"/quasar-docs/js/283.c06bd884.js",revision:null},{url:"/quasar-docs/js/284.fc06d43f.js",revision:null},{url:"/quasar-docs/js/285.88831647.js",revision:null},{url:"/quasar-docs/js/286.13ed3d58.js",revision:null},{url:"/quasar-docs/js/287.a65a4545.js",revision:null},{url:"/quasar-docs/js/288.383032b3.js",revision:null},{url:"/quasar-docs/js/289.2ab35a1d.js",revision:null},{url:"/quasar-docs/js/29.993e65e7.js",revision:null},{url:"/quasar-docs/js/290.378012c9.js",revision:null},{url:"/quasar-docs/js/291.7194351e.js",revision:null},{url:"/quasar-docs/js/30.1604b91a.js",revision:null},{url:"/quasar-docs/js/31.1074cc0b.js",revision:null},{url:"/quasar-docs/js/32.e22b693b.js",revision:null},{url:"/quasar-docs/js/33.1665fdf6.js",revision:null},{url:"/quasar-docs/js/34.e7c18c7f.js",revision:null},{url:"/quasar-docs/js/35.acc453ad.js",revision:null},{url:"/quasar-docs/js/36.1db24636.js",revision:null},{url:"/quasar-docs/js/37.01d8b456.js",revision:null},{url:"/quasar-docs/js/38.7f4384d5.js",revision:null},{url:"/quasar-docs/js/39.fd681446.js",revision:null},{url:"/quasar-docs/js/40.5fabfafd.js",revision:null},{url:"/quasar-docs/js/41.17fe8947.js",revision:null},{url:"/quasar-docs/js/42.b44fe341.js",revision:null},{url:"/quasar-docs/js/43.acb2c1c8.js",revision:null},{url:"/quasar-docs/js/44.6758d016.js",revision:null},{url:"/quasar-docs/js/45.97224645.js",revision:null},{url:"/quasar-docs/js/46.948acca1.js",revision:null},{url:"/quasar-docs/js/47.8a96aea7.js",revision:null},{url:"/quasar-docs/js/48.edf5a9c4.js",revision:null},{url:"/quasar-docs/js/49.29aa1290.js",revision:null},{url:"/quasar-docs/js/5.4d38ede0.js",revision:null},{url:"/quasar-docs/js/50.3b142188.js",revision:null},{url:"/quasar-docs/js/51.450a9607.js",revision:null},{url:"/quasar-docs/js/52.a8fc1be2.js",revision:null},{url:"/quasar-docs/js/53.4e1a7683.js",revision:null},{url:"/quasar-docs/js/54.4be2e0b1.js",revision:null},{url:"/quasar-docs/js/55.3f876d74.js",revision:null},{url:"/quasar-docs/js/56.56e57ce0.js",revision:null},{url:"/quasar-docs/js/57.908197e8.js",revision:null},{url:"/quasar-docs/js/58.5a07af80.js",revision:null},{url:"/quasar-docs/js/59.fec03c3f.js",revision:null},{url:"/quasar-docs/js/6.102960bb.js",revision:null},{url:"/quasar-docs/js/60.cb52ac7b.js",revision:null},{url:"/quasar-docs/js/61.ae925b17.js",revision:null},{url:"/quasar-docs/js/62.509e3447.js",revision:null},{url:"/quasar-docs/js/63.52bcf080.js",revision:null},{url:"/quasar-docs/js/64.c2bd85f7.js",revision:null},{url:"/quasar-docs/js/65.98487766.js",revision:null},{url:"/quasar-docs/js/66.1501e6dc.js",revision:null},{url:"/quasar-docs/js/67.6ba40d87.js",revision:null},{url:"/quasar-docs/js/68.b22b39bd.js",revision:null},{url:"/quasar-docs/js/69.09f83c05.js",revision:null},{url:"/quasar-docs/js/7.36b70a64.js",revision:null},{url:"/quasar-docs/js/70.6bf77046.js",revision:null},{url:"/quasar-docs/js/71.5ecfd4f9.js",revision:null},{url:"/quasar-docs/js/72.7f1fff01.js",revision:null},{url:"/quasar-docs/js/73.d738bd43.js",revision:null},{url:"/quasar-docs/js/74.dbcb34a2.js",revision:null},{url:"/quasar-docs/js/75.3ba70c28.js",revision:null},{url:"/quasar-docs/js/76.cf9c5ce5.js",revision:null},{url:"/quasar-docs/js/77.a667f139.js",revision:null},{url:"/quasar-docs/js/78.e0e3b75e.js",revision:null},{url:"/quasar-docs/js/79.7623cd2a.js",revision:null},{url:"/quasar-docs/js/8.ba65c720.js",revision:null},{url:"/quasar-docs/js/80.84fa4c6b.js",revision:null},{url:"/quasar-docs/js/81.bb113a31.js",revision:null},{url:"/quasar-docs/js/82.c28ebd70.js",revision:null},{url:"/quasar-docs/js/83.b276d6d7.js",revision:null},{url:"/quasar-docs/js/84.d5cece17.js",revision:null},{url:"/quasar-docs/js/85.d3528ca3.js",revision:null},{url:"/quasar-docs/js/86.e0635134.js",revision:null},{url:"/quasar-docs/js/87.bdfcdb98.js",revision:null},{url:"/quasar-docs/js/88.30bcc660.js",revision:null},{url:"/quasar-docs/js/89.b055f5a4.js",revision:null},{url:"/quasar-docs/js/9.7bebd1a0.js",revision:null},{url:"/quasar-docs/js/90.b75d6327.js",revision:null},{url:"/quasar-docs/js/91.6d417e26.js",revision:null},{url:"/quasar-docs/js/92.b12bbf5a.js",revision:null},{url:"/quasar-docs/js/93.091fb377.js",revision:null},{url:"/quasar-docs/js/94.7afbf137.js",revision:null},{url:"/quasar-docs/js/95.bba4daa5.js",revision:null},{url:"/quasar-docs/js/96.7ed2761c.js",revision:null},{url:"/quasar-docs/js/97.d964fef7.js",revision:null},{url:"/quasar-docs/js/98.8fbaf532.js",revision:null},{url:"/quasar-docs/js/99.87962da8.js",revision:null},{url:"/quasar-docs/js/app.8217c7c9.js",revision:null},{url:"/quasar-docs/js/demo-source.5ab85569.js",revision:null},{url:"/quasar-docs/js/demo.9bcb752f.js",revision:null},{url:"/quasar-docs/js/quasar-api.19c4e123.js",revision:null},{url:"/quasar-docs/js/vendor.be7b0b4b.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
