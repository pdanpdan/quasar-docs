if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-ee815bea"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.29113f00.css",revision:null},{url:"/quasar-docs/css/11.afe1a32e.css",revision:null},{url:"/quasar-docs/css/12.07f9719d.css",revision:null},{url:"/quasar-docs/css/13.cd1b576e.css",revision:null},{url:"/quasar-docs/css/14.c07bf27d.css",revision:null},{url:"/quasar-docs/css/15.96af82c5.css",revision:null},{url:"/quasar-docs/css/16.99064edf.css",revision:null},{url:"/quasar-docs/css/17.add5568a.css",revision:null},{url:"/quasar-docs/css/18.e41fb891.css",revision:null},{url:"/quasar-docs/css/19.40810d73.css",revision:null},{url:"/quasar-docs/css/20.64943849.css",revision:null},{url:"/quasar-docs/css/21.b04235c4.css",revision:null},{url:"/quasar-docs/css/6.ad3185aa.css",revision:null},{url:"/quasar-docs/css/7.49f735a0.css",revision:null},{url:"/quasar-docs/css/8.b3abe3ba.css",revision:null},{url:"/quasar-docs/css/9.d2b53414.css",revision:null},{url:"/quasar-docs/css/app.4a87cc5b.css",revision:null},{url:"/quasar-docs/css/demo.ce051c18.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.3a3e0eb8.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.404ad2ff.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"0d004dbffada5508df1a30df4c0f53b4"},{url:"/quasar-docs/js/10.bf898696.js",revision:null},{url:"/quasar-docs/js/100.7fd5bf6d.js",revision:null},{url:"/quasar-docs/js/101.eb525c78.js",revision:null},{url:"/quasar-docs/js/102.011bea76.js",revision:null},{url:"/quasar-docs/js/103.2a1b3a5b.js",revision:null},{url:"/quasar-docs/js/104.a805ea36.js",revision:null},{url:"/quasar-docs/js/105.9fbb319c.js",revision:null},{url:"/quasar-docs/js/106.7cb05676.js",revision:null},{url:"/quasar-docs/js/107.3c4a2f38.js",revision:null},{url:"/quasar-docs/js/108.08ea8fb2.js",revision:null},{url:"/quasar-docs/js/109.8e338092.js",revision:null},{url:"/quasar-docs/js/11.52954a19.js",revision:null},{url:"/quasar-docs/js/110.6c3b7b68.js",revision:null},{url:"/quasar-docs/js/111.d7695373.js",revision:null},{url:"/quasar-docs/js/112.9d133e76.js",revision:null},{url:"/quasar-docs/js/113.e639eabf.js",revision:null},{url:"/quasar-docs/js/114.dd8c80d2.js",revision:null},{url:"/quasar-docs/js/115.23a40817.js",revision:null},{url:"/quasar-docs/js/116.a215ec56.js",revision:null},{url:"/quasar-docs/js/117.6c66d470.js",revision:null},{url:"/quasar-docs/js/118.dfa78e40.js",revision:null},{url:"/quasar-docs/js/119.2f72d8a2.js",revision:null},{url:"/quasar-docs/js/12.0118375d.js",revision:null},{url:"/quasar-docs/js/120.d816f7de.js",revision:null},{url:"/quasar-docs/js/121.0d3fe542.js",revision:null},{url:"/quasar-docs/js/122.98788ef4.js",revision:null},{url:"/quasar-docs/js/123.8e484e00.js",revision:null},{url:"/quasar-docs/js/124.2ea34f1e.js",revision:null},{url:"/quasar-docs/js/125.79d678b1.js",revision:null},{url:"/quasar-docs/js/126.6ff34174.js",revision:null},{url:"/quasar-docs/js/127.02f46aae.js",revision:null},{url:"/quasar-docs/js/128.57b90e93.js",revision:null},{url:"/quasar-docs/js/129.ee452858.js",revision:null},{url:"/quasar-docs/js/13.68f31481.js",revision:null},{url:"/quasar-docs/js/130.220f35a0.js",revision:null},{url:"/quasar-docs/js/131.97e9e55e.js",revision:null},{url:"/quasar-docs/js/132.9c79a62d.js",revision:null},{url:"/quasar-docs/js/133.48389f0e.js",revision:null},{url:"/quasar-docs/js/134.965aca10.js",revision:null},{url:"/quasar-docs/js/135.8f890140.js",revision:null},{url:"/quasar-docs/js/136.4f68e643.js",revision:null},{url:"/quasar-docs/js/137.aa9f8234.js",revision:null},{url:"/quasar-docs/js/138.da273d26.js",revision:null},{url:"/quasar-docs/js/139.95b2ab43.js",revision:null},{url:"/quasar-docs/js/14.a41166d8.js",revision:null},{url:"/quasar-docs/js/140.17f57f9f.js",revision:null},{url:"/quasar-docs/js/141.6dd5b79d.js",revision:null},{url:"/quasar-docs/js/142.e2dc05ea.js",revision:null},{url:"/quasar-docs/js/143.a50e6b36.js",revision:null},{url:"/quasar-docs/js/144.a089651d.js",revision:null},{url:"/quasar-docs/js/145.50d3d6cc.js",revision:null},{url:"/quasar-docs/js/146.98a5d342.js",revision:null},{url:"/quasar-docs/js/147.16fc5140.js",revision:null},{url:"/quasar-docs/js/148.31708657.js",revision:null},{url:"/quasar-docs/js/149.c2bd8e2f.js",revision:null},{url:"/quasar-docs/js/15.48ddf990.js",revision:null},{url:"/quasar-docs/js/150.599f9c6c.js",revision:null},{url:"/quasar-docs/js/151.e2bb9ea8.js",revision:null},{url:"/quasar-docs/js/152.566501b0.js",revision:null},{url:"/quasar-docs/js/153.36c64571.js",revision:null},{url:"/quasar-docs/js/154.5c47276d.js",revision:null},{url:"/quasar-docs/js/155.2a3adcc2.js",revision:null},{url:"/quasar-docs/js/156.3ad1f590.js",revision:null},{url:"/quasar-docs/js/157.fbd0eef6.js",revision:null},{url:"/quasar-docs/js/158.5faaf2db.js",revision:null},{url:"/quasar-docs/js/159.006895fe.js",revision:null},{url:"/quasar-docs/js/16.67b0ca82.js",revision:null},{url:"/quasar-docs/js/160.11427258.js",revision:null},{url:"/quasar-docs/js/161.dabbeeb1.js",revision:null},{url:"/quasar-docs/js/162.b4e461bd.js",revision:null},{url:"/quasar-docs/js/163.e0e47f96.js",revision:null},{url:"/quasar-docs/js/164.3df3200d.js",revision:null},{url:"/quasar-docs/js/165.6f2126e3.js",revision:null},{url:"/quasar-docs/js/166.c608595b.js",revision:null},{url:"/quasar-docs/js/167.2b438e12.js",revision:null},{url:"/quasar-docs/js/168.2a41c16b.js",revision:null},{url:"/quasar-docs/js/169.7c62b321.js",revision:null},{url:"/quasar-docs/js/17.3204f4a3.js",revision:null},{url:"/quasar-docs/js/170.697362be.js",revision:null},{url:"/quasar-docs/js/171.ee1aa69e.js",revision:null},{url:"/quasar-docs/js/172.5bcf2e4d.js",revision:null},{url:"/quasar-docs/js/173.3489ec20.js",revision:null},{url:"/quasar-docs/js/174.c79a7600.js",revision:null},{url:"/quasar-docs/js/175.044370e1.js",revision:null},{url:"/quasar-docs/js/176.6f4d68f0.js",revision:null},{url:"/quasar-docs/js/177.2d8fe270.js",revision:null},{url:"/quasar-docs/js/178.6a8956d9.js",revision:null},{url:"/quasar-docs/js/179.6b76c7da.js",revision:null},{url:"/quasar-docs/js/18.c4fc1bec.js",revision:null},{url:"/quasar-docs/js/180.73a72905.js",revision:null},{url:"/quasar-docs/js/181.21f9437c.js",revision:null},{url:"/quasar-docs/js/182.b965eeab.js",revision:null},{url:"/quasar-docs/js/183.c5305cce.js",revision:null},{url:"/quasar-docs/js/184.c6a3abbe.js",revision:null},{url:"/quasar-docs/js/185.c6e59a46.js",revision:null},{url:"/quasar-docs/js/186.ab8b4eb1.js",revision:null},{url:"/quasar-docs/js/187.a85a9168.js",revision:null},{url:"/quasar-docs/js/188.279633a4.js",revision:null},{url:"/quasar-docs/js/189.f8e9668f.js",revision:null},{url:"/quasar-docs/js/19.8523890e.js",revision:null},{url:"/quasar-docs/js/190.bb532e3d.js",revision:null},{url:"/quasar-docs/js/191.c86d5a7e.js",revision:null},{url:"/quasar-docs/js/192.58e9319e.js",revision:null},{url:"/quasar-docs/js/193.a2d7f156.js",revision:null},{url:"/quasar-docs/js/194.4d7c060e.js",revision:null},{url:"/quasar-docs/js/195.fc70f6d1.js",revision:null},{url:"/quasar-docs/js/196.794ed64c.js",revision:null},{url:"/quasar-docs/js/197.d5e27beb.js",revision:null},{url:"/quasar-docs/js/198.189a9a58.js",revision:null},{url:"/quasar-docs/js/199.a4f189ad.js",revision:null},{url:"/quasar-docs/js/20.d47d3254.js",revision:null},{url:"/quasar-docs/js/200.b08e9d45.js",revision:null},{url:"/quasar-docs/js/201.527fb011.js",revision:null},{url:"/quasar-docs/js/202.8f9c0622.js",revision:null},{url:"/quasar-docs/js/203.6f2f1ee8.js",revision:null},{url:"/quasar-docs/js/204.07805dfc.js",revision:null},{url:"/quasar-docs/js/205.8ac47d81.js",revision:null},{url:"/quasar-docs/js/206.db2e8fb7.js",revision:null},{url:"/quasar-docs/js/207.c77a7f78.js",revision:null},{url:"/quasar-docs/js/208.ca54ab6f.js",revision:null},{url:"/quasar-docs/js/209.5ea656fa.js",revision:null},{url:"/quasar-docs/js/21.1bdaa9a3.js",revision:null},{url:"/quasar-docs/js/210.4a434eb2.js",revision:null},{url:"/quasar-docs/js/211.eaaef1af.js",revision:null},{url:"/quasar-docs/js/212.661023c5.js",revision:null},{url:"/quasar-docs/js/213.554ce3e6.js",revision:null},{url:"/quasar-docs/js/214.df77139b.js",revision:null},{url:"/quasar-docs/js/215.772893d2.js",revision:null},{url:"/quasar-docs/js/216.38be9bb9.js",revision:null},{url:"/quasar-docs/js/217.35f73611.js",revision:null},{url:"/quasar-docs/js/218.6037522d.js",revision:null},{url:"/quasar-docs/js/219.09654f3b.js",revision:null},{url:"/quasar-docs/js/22.0215e9f3.js",revision:null},{url:"/quasar-docs/js/220.7bb2e8f9.js",revision:null},{url:"/quasar-docs/js/221.5ba787c3.js",revision:null},{url:"/quasar-docs/js/222.c6940e9c.js",revision:null},{url:"/quasar-docs/js/223.e8f72c22.js",revision:null},{url:"/quasar-docs/js/224.dcfaf027.js",revision:null},{url:"/quasar-docs/js/225.36791f5b.js",revision:null},{url:"/quasar-docs/js/226.5f138c7a.js",revision:null},{url:"/quasar-docs/js/227.ea744afb.js",revision:null},{url:"/quasar-docs/js/228.a21c0e05.js",revision:null},{url:"/quasar-docs/js/229.95809ebe.js",revision:null},{url:"/quasar-docs/js/23.58b80548.js",revision:null},{url:"/quasar-docs/js/230.aac20920.js",revision:null},{url:"/quasar-docs/js/231.1f4653fe.js",revision:null},{url:"/quasar-docs/js/232.8004c3c0.js",revision:null},{url:"/quasar-docs/js/233.1fdec30d.js",revision:null},{url:"/quasar-docs/js/234.b6e6f2ff.js",revision:null},{url:"/quasar-docs/js/235.94ba83c4.js",revision:null},{url:"/quasar-docs/js/236.ab70d9bc.js",revision:null},{url:"/quasar-docs/js/237.6b263a2c.js",revision:null},{url:"/quasar-docs/js/238.14df0b60.js",revision:null},{url:"/quasar-docs/js/239.acb7012b.js",revision:null},{url:"/quasar-docs/js/24.0dac0dc9.js",revision:null},{url:"/quasar-docs/js/240.a823a6d9.js",revision:null},{url:"/quasar-docs/js/241.a0149d66.js",revision:null},{url:"/quasar-docs/js/242.f1085620.js",revision:null},{url:"/quasar-docs/js/243.9481aabe.js",revision:null},{url:"/quasar-docs/js/244.9a4c41d2.js",revision:null},{url:"/quasar-docs/js/245.52aa959e.js",revision:null},{url:"/quasar-docs/js/246.619b2ddc.js",revision:null},{url:"/quasar-docs/js/247.5c707f9c.js",revision:null},{url:"/quasar-docs/js/248.c53f645e.js",revision:null},{url:"/quasar-docs/js/249.7d1679b1.js",revision:null},{url:"/quasar-docs/js/25.0edce4bc.js",revision:null},{url:"/quasar-docs/js/250.87de74b4.js",revision:null},{url:"/quasar-docs/js/251.a5354006.js",revision:null},{url:"/quasar-docs/js/252.88c0c1de.js",revision:null},{url:"/quasar-docs/js/253.f36e9663.js",revision:null},{url:"/quasar-docs/js/254.103b0392.js",revision:null},{url:"/quasar-docs/js/255.e8bfc1f3.js",revision:null},{url:"/quasar-docs/js/256.7449b70c.js",revision:null},{url:"/quasar-docs/js/257.64138a9f.js",revision:null},{url:"/quasar-docs/js/258.9bc169de.js",revision:null},{url:"/quasar-docs/js/259.39ffc74c.js",revision:null},{url:"/quasar-docs/js/26.e2309306.js",revision:null},{url:"/quasar-docs/js/260.e872b0a8.js",revision:null},{url:"/quasar-docs/js/261.15a85ab8.js",revision:null},{url:"/quasar-docs/js/262.88f3644d.js",revision:null},{url:"/quasar-docs/js/263.9cd9a2bc.js",revision:null},{url:"/quasar-docs/js/264.c9ce9cf6.js",revision:null},{url:"/quasar-docs/js/265.e22b7181.js",revision:null},{url:"/quasar-docs/js/266.60b65644.js",revision:null},{url:"/quasar-docs/js/267.578cc103.js",revision:null},{url:"/quasar-docs/js/268.783a0010.js",revision:null},{url:"/quasar-docs/js/269.1a2adf50.js",revision:null},{url:"/quasar-docs/js/27.2cb6e06a.js",revision:null},{url:"/quasar-docs/js/270.8576d62d.js",revision:null},{url:"/quasar-docs/js/271.a1ea2afc.js",revision:null},{url:"/quasar-docs/js/272.d6c13db9.js",revision:null},{url:"/quasar-docs/js/273.990919db.js",revision:null},{url:"/quasar-docs/js/274.9211eb05.js",revision:null},{url:"/quasar-docs/js/275.6cc2d064.js",revision:null},{url:"/quasar-docs/js/276.4b080018.js",revision:null},{url:"/quasar-docs/js/277.a03a7106.js",revision:null},{url:"/quasar-docs/js/278.6a9b4eb8.js",revision:null},{url:"/quasar-docs/js/279.9e4d3556.js",revision:null},{url:"/quasar-docs/js/28.e39631b5.js",revision:null},{url:"/quasar-docs/js/280.639f502d.js",revision:null},{url:"/quasar-docs/js/281.5a051ce4.js",revision:null},{url:"/quasar-docs/js/282.d3cdb35c.js",revision:null},{url:"/quasar-docs/js/283.21142325.js",revision:null},{url:"/quasar-docs/js/284.aad1710e.js",revision:null},{url:"/quasar-docs/js/285.cdc86a2d.js",revision:null},{url:"/quasar-docs/js/286.639e8e72.js",revision:null},{url:"/quasar-docs/js/287.a54af3b6.js",revision:null},{url:"/quasar-docs/js/288.796c3656.js",revision:null},{url:"/quasar-docs/js/289.13d13fe9.js",revision:null},{url:"/quasar-docs/js/29.df8c3e8e.js",revision:null},{url:"/quasar-docs/js/290.8b385cc2.js",revision:null},{url:"/quasar-docs/js/30.f4d05322.js",revision:null},{url:"/quasar-docs/js/31.79500801.js",revision:null},{url:"/quasar-docs/js/32.862b3813.js",revision:null},{url:"/quasar-docs/js/33.82c45046.js",revision:null},{url:"/quasar-docs/js/34.82282e8d.js",revision:null},{url:"/quasar-docs/js/35.9c1b57d3.js",revision:null},{url:"/quasar-docs/js/36.60334f19.js",revision:null},{url:"/quasar-docs/js/37.ba07a987.js",revision:null},{url:"/quasar-docs/js/38.8fb4ca60.js",revision:null},{url:"/quasar-docs/js/39.14bb690d.js",revision:null},{url:"/quasar-docs/js/40.3235085b.js",revision:null},{url:"/quasar-docs/js/41.e8dcc52f.js",revision:null},{url:"/quasar-docs/js/42.78d44ded.js",revision:null},{url:"/quasar-docs/js/43.7663dc97.js",revision:null},{url:"/quasar-docs/js/44.71b7260e.js",revision:null},{url:"/quasar-docs/js/45.a13e918f.js",revision:null},{url:"/quasar-docs/js/46.c04cdd49.js",revision:null},{url:"/quasar-docs/js/47.aa7a5e12.js",revision:null},{url:"/quasar-docs/js/48.66dac49a.js",revision:null},{url:"/quasar-docs/js/49.3c8bd69a.js",revision:null},{url:"/quasar-docs/js/50.d95d1e00.js",revision:null},{url:"/quasar-docs/js/51.68aef941.js",revision:null},{url:"/quasar-docs/js/52.258b00d3.js",revision:null},{url:"/quasar-docs/js/53.4883df23.js",revision:null},{url:"/quasar-docs/js/54.ca2370aa.js",revision:null},{url:"/quasar-docs/js/55.2d4ee476.js",revision:null},{url:"/quasar-docs/js/56.db5962d7.js",revision:null},{url:"/quasar-docs/js/57.e82f59b1.js",revision:null},{url:"/quasar-docs/js/58.c2f2c37f.js",revision:null},{url:"/quasar-docs/js/59.db8150b4.js",revision:null},{url:"/quasar-docs/js/6.fe5a8da5.js",revision:null},{url:"/quasar-docs/js/60.b50dfff2.js",revision:null},{url:"/quasar-docs/js/61.d9ebc338.js",revision:null},{url:"/quasar-docs/js/62.a68cf6c1.js",revision:null},{url:"/quasar-docs/js/63.87d7ca30.js",revision:null},{url:"/quasar-docs/js/64.2ac96df1.js",revision:null},{url:"/quasar-docs/js/65.e2da6066.js",revision:null},{url:"/quasar-docs/js/66.d727051b.js",revision:null},{url:"/quasar-docs/js/67.4ed882c3.js",revision:null},{url:"/quasar-docs/js/68.87edc986.js",revision:null},{url:"/quasar-docs/js/69.5dec250b.js",revision:null},{url:"/quasar-docs/js/7.aa1a72f9.js",revision:null},{url:"/quasar-docs/js/70.ed8c846a.js",revision:null},{url:"/quasar-docs/js/71.7ac104b2.js",revision:null},{url:"/quasar-docs/js/72.6330dce2.js",revision:null},{url:"/quasar-docs/js/73.194b051d.js",revision:null},{url:"/quasar-docs/js/74.80de07fd.js",revision:null},{url:"/quasar-docs/js/75.48748bdc.js",revision:null},{url:"/quasar-docs/js/76.435f1dcb.js",revision:null},{url:"/quasar-docs/js/77.058e1183.js",revision:null},{url:"/quasar-docs/js/78.8a8b12e2.js",revision:null},{url:"/quasar-docs/js/79.d5c11d83.js",revision:null},{url:"/quasar-docs/js/8.2e3f07c0.js",revision:null},{url:"/quasar-docs/js/80.0850a675.js",revision:null},{url:"/quasar-docs/js/81.ff875eca.js",revision:null},{url:"/quasar-docs/js/82.ab37dbc6.js",revision:null},{url:"/quasar-docs/js/83.a47778c0.js",revision:null},{url:"/quasar-docs/js/84.24c435ef.js",revision:null},{url:"/quasar-docs/js/85.0625384f.js",revision:null},{url:"/quasar-docs/js/86.1edfc7cd.js",revision:null},{url:"/quasar-docs/js/87.b72dc7bb.js",revision:null},{url:"/quasar-docs/js/88.ec34e57e.js",revision:null},{url:"/quasar-docs/js/89.4f7de6e7.js",revision:null},{url:"/quasar-docs/js/9.f5b89ee8.js",revision:null},{url:"/quasar-docs/js/90.31f3c166.js",revision:null},{url:"/quasar-docs/js/91.b40f7646.js",revision:null},{url:"/quasar-docs/js/92.599dbf5d.js",revision:null},{url:"/quasar-docs/js/93.adbecc36.js",revision:null},{url:"/quasar-docs/js/94.8f8b009e.js",revision:null},{url:"/quasar-docs/js/95.c911738a.js",revision:null},{url:"/quasar-docs/js/96.5f8501de.js",revision:null},{url:"/quasar-docs/js/97.e41d84d2.js",revision:null},{url:"/quasar-docs/js/98.7bc9b28f.js",revision:null},{url:"/quasar-docs/js/99.1187c9d9.js",revision:null},{url:"/quasar-docs/js/algolia.5b2f768a.js",revision:null},{url:"/quasar-docs/js/app.789ad37a.js",revision:null},{url:"/quasar-docs/js/demo-source.3fb1114d.js",revision:null},{url:"/quasar-docs/js/demo.aff811e2.js",revision:null},{url:"/quasar-docs/js/quasar-api.1cfb597e.js",revision:null},{url:"/quasar-docs/js/vendor.d19bc04b.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"c15dffb863ee26e6a65f29e071adcec4"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
