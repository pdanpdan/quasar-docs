if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-999b939b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.b07171aa.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.c07bf27d.css",revision:null},{url:"/quasar-docs/css/13.96af82c5.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.add5568a.css",revision:null},{url:"/quasar-docs/css/16.e41fb891.css",revision:null},{url:"/quasar-docs/css/17.40810d73.css",revision:null},{url:"/quasar-docs/css/18.64943849.css",revision:null},{url:"/quasar-docs/css/19.b04235c4.css",revision:null},{url:"/quasar-docs/css/20.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.b1df0b34.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.c4fa22ac.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.70ebb849.css",revision:null},{url:"/quasar-docs/css/demo.4aa6cc19.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.81048c6d.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.12730e02.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"6cc3b4c940bc9ece138564fc3b90bdf6"},{url:"/quasar-docs/js/10.0ca04a2d.js",revision:null},{url:"/quasar-docs/js/100.2c06acb9.js",revision:null},{url:"/quasar-docs/js/101.c1398db1.js",revision:null},{url:"/quasar-docs/js/102.2abd02a1.js",revision:null},{url:"/quasar-docs/js/103.e277a3aa.js",revision:null},{url:"/quasar-docs/js/104.b8b38ba2.js",revision:null},{url:"/quasar-docs/js/105.6cd67f9e.js",revision:null},{url:"/quasar-docs/js/106.5aa7f4ce.js",revision:null},{url:"/quasar-docs/js/107.f4bcdef0.js",revision:null},{url:"/quasar-docs/js/108.28862960.js",revision:null},{url:"/quasar-docs/js/109.aa767c32.js",revision:null},{url:"/quasar-docs/js/11.f0ae3e8b.js",revision:null},{url:"/quasar-docs/js/110.3cc1d40c.js",revision:null},{url:"/quasar-docs/js/111.c817265a.js",revision:null},{url:"/quasar-docs/js/112.e9356a0f.js",revision:null},{url:"/quasar-docs/js/113.7ffef60b.js",revision:null},{url:"/quasar-docs/js/114.c1440f11.js",revision:null},{url:"/quasar-docs/js/115.f7594e5b.js",revision:null},{url:"/quasar-docs/js/116.4759ab0d.js",revision:null},{url:"/quasar-docs/js/117.51e15f50.js",revision:null},{url:"/quasar-docs/js/118.7419bfff.js",revision:null},{url:"/quasar-docs/js/119.c0386a7d.js",revision:null},{url:"/quasar-docs/js/12.442a55e5.js",revision:null},{url:"/quasar-docs/js/120.204793af.js",revision:null},{url:"/quasar-docs/js/121.2bf7ee9f.js",revision:null},{url:"/quasar-docs/js/122.dff9ed12.js",revision:null},{url:"/quasar-docs/js/123.92cc77db.js",revision:null},{url:"/quasar-docs/js/124.0696c22a.js",revision:null},{url:"/quasar-docs/js/125.d77a3e0a.js",revision:null},{url:"/quasar-docs/js/126.d8412c9f.js",revision:null},{url:"/quasar-docs/js/127.3e89798e.js",revision:null},{url:"/quasar-docs/js/128.4127d518.js",revision:null},{url:"/quasar-docs/js/129.fc506798.js",revision:null},{url:"/quasar-docs/js/13.bc682b41.js",revision:null},{url:"/quasar-docs/js/130.015f7814.js",revision:null},{url:"/quasar-docs/js/131.307a5d92.js",revision:null},{url:"/quasar-docs/js/132.0ec2461a.js",revision:null},{url:"/quasar-docs/js/133.b1b504b3.js",revision:null},{url:"/quasar-docs/js/134.fa27045e.js",revision:null},{url:"/quasar-docs/js/135.afd907e6.js",revision:null},{url:"/quasar-docs/js/136.982a4e02.js",revision:null},{url:"/quasar-docs/js/137.5a632336.js",revision:null},{url:"/quasar-docs/js/138.c70ecbd0.js",revision:null},{url:"/quasar-docs/js/139.0083cf3d.js",revision:null},{url:"/quasar-docs/js/14.7fc7f9c2.js",revision:null},{url:"/quasar-docs/js/140.b615ed9f.js",revision:null},{url:"/quasar-docs/js/141.94b75c7f.js",revision:null},{url:"/quasar-docs/js/142.41c8183b.js",revision:null},{url:"/quasar-docs/js/143.b4ba5a21.js",revision:null},{url:"/quasar-docs/js/144.340f49ac.js",revision:null},{url:"/quasar-docs/js/145.4716d8a0.js",revision:null},{url:"/quasar-docs/js/146.8b452a0c.js",revision:null},{url:"/quasar-docs/js/147.d1b2df6c.js",revision:null},{url:"/quasar-docs/js/148.91d48812.js",revision:null},{url:"/quasar-docs/js/149.323dc093.js",revision:null},{url:"/quasar-docs/js/15.8df5ffbc.js",revision:null},{url:"/quasar-docs/js/150.ed6ecf5f.js",revision:null},{url:"/quasar-docs/js/151.33660efe.js",revision:null},{url:"/quasar-docs/js/152.e4b19632.js",revision:null},{url:"/quasar-docs/js/153.71016972.js",revision:null},{url:"/quasar-docs/js/154.bb5b3164.js",revision:null},{url:"/quasar-docs/js/155.4b9d6ead.js",revision:null},{url:"/quasar-docs/js/156.cd1a9d03.js",revision:null},{url:"/quasar-docs/js/157.e0495fe2.js",revision:null},{url:"/quasar-docs/js/158.9976592e.js",revision:null},{url:"/quasar-docs/js/159.e28d90b3.js",revision:null},{url:"/quasar-docs/js/16.0bedc734.js",revision:null},{url:"/quasar-docs/js/160.e6a33007.js",revision:null},{url:"/quasar-docs/js/161.d4cf9656.js",revision:null},{url:"/quasar-docs/js/162.cbe1de08.js",revision:null},{url:"/quasar-docs/js/163.eb8a4a7c.js",revision:null},{url:"/quasar-docs/js/164.aaea2e72.js",revision:null},{url:"/quasar-docs/js/165.880c7861.js",revision:null},{url:"/quasar-docs/js/166.371ceded.js",revision:null},{url:"/quasar-docs/js/167.31c01d4e.js",revision:null},{url:"/quasar-docs/js/168.871f9405.js",revision:null},{url:"/quasar-docs/js/169.3f778fc5.js",revision:null},{url:"/quasar-docs/js/17.521cf6c7.js",revision:null},{url:"/quasar-docs/js/170.e60095a0.js",revision:null},{url:"/quasar-docs/js/171.7b674359.js",revision:null},{url:"/quasar-docs/js/172.776a3ae5.js",revision:null},{url:"/quasar-docs/js/173.f43d8582.js",revision:null},{url:"/quasar-docs/js/174.378495ca.js",revision:null},{url:"/quasar-docs/js/175.2a4ebb01.js",revision:null},{url:"/quasar-docs/js/176.039e4db7.js",revision:null},{url:"/quasar-docs/js/177.03f7dca1.js",revision:null},{url:"/quasar-docs/js/178.0e57a075.js",revision:null},{url:"/quasar-docs/js/179.85e4b04b.js",revision:null},{url:"/quasar-docs/js/18.6d215504.js",revision:null},{url:"/quasar-docs/js/180.c6158e2a.js",revision:null},{url:"/quasar-docs/js/181.27aebbc1.js",revision:null},{url:"/quasar-docs/js/182.0c1945bd.js",revision:null},{url:"/quasar-docs/js/183.a8cf997f.js",revision:null},{url:"/quasar-docs/js/184.167975ff.js",revision:null},{url:"/quasar-docs/js/185.7df52a83.js",revision:null},{url:"/quasar-docs/js/186.64b7f5c4.js",revision:null},{url:"/quasar-docs/js/187.3a6d2fff.js",revision:null},{url:"/quasar-docs/js/188.bf7a261a.js",revision:null},{url:"/quasar-docs/js/189.48340443.js",revision:null},{url:"/quasar-docs/js/19.d5a678b7.js",revision:null},{url:"/quasar-docs/js/190.54919f5c.js",revision:null},{url:"/quasar-docs/js/191.e5cc139c.js",revision:null},{url:"/quasar-docs/js/192.29453e52.js",revision:null},{url:"/quasar-docs/js/193.dac3f9d2.js",revision:null},{url:"/quasar-docs/js/194.f7bad760.js",revision:null},{url:"/quasar-docs/js/195.a4c02906.js",revision:null},{url:"/quasar-docs/js/196.21e025a6.js",revision:null},{url:"/quasar-docs/js/197.d6734c27.js",revision:null},{url:"/quasar-docs/js/198.ad7ef4c1.js",revision:null},{url:"/quasar-docs/js/199.bd6eeba4.js",revision:null},{url:"/quasar-docs/js/20.641da73f.js",revision:null},{url:"/quasar-docs/js/200.990eb0f7.js",revision:null},{url:"/quasar-docs/js/201.887ec87c.js",revision:null},{url:"/quasar-docs/js/202.50b2af1b.js",revision:null},{url:"/quasar-docs/js/203.aff7d29e.js",revision:null},{url:"/quasar-docs/js/204.054fa8ff.js",revision:null},{url:"/quasar-docs/js/205.71cf9f0e.js",revision:null},{url:"/quasar-docs/js/206.3ecf4ec1.js",revision:null},{url:"/quasar-docs/js/207.a28966e7.js",revision:null},{url:"/quasar-docs/js/208.8b03928f.js",revision:null},{url:"/quasar-docs/js/209.ea71226e.js",revision:null},{url:"/quasar-docs/js/21.28fde842.js",revision:null},{url:"/quasar-docs/js/210.aa7aac5e.js",revision:null},{url:"/quasar-docs/js/211.5e1bf103.js",revision:null},{url:"/quasar-docs/js/212.8c747acf.js",revision:null},{url:"/quasar-docs/js/213.afdc1d33.js",revision:null},{url:"/quasar-docs/js/214.0e3f9f6c.js",revision:null},{url:"/quasar-docs/js/215.546decd1.js",revision:null},{url:"/quasar-docs/js/216.84549f7c.js",revision:null},{url:"/quasar-docs/js/217.5158fa0a.js",revision:null},{url:"/quasar-docs/js/218.87d40370.js",revision:null},{url:"/quasar-docs/js/219.4fb8f822.js",revision:null},{url:"/quasar-docs/js/22.e2ac8046.js",revision:null},{url:"/quasar-docs/js/220.ffe3acbc.js",revision:null},{url:"/quasar-docs/js/221.85689370.js",revision:null},{url:"/quasar-docs/js/222.6dd6032e.js",revision:null},{url:"/quasar-docs/js/223.9045fce1.js",revision:null},{url:"/quasar-docs/js/224.49ed56cc.js",revision:null},{url:"/quasar-docs/js/225.11a904b1.js",revision:null},{url:"/quasar-docs/js/226.4eeab6a7.js",revision:null},{url:"/quasar-docs/js/227.0e3168bc.js",revision:null},{url:"/quasar-docs/js/228.2b9d4493.js",revision:null},{url:"/quasar-docs/js/229.5ace4327.js",revision:null},{url:"/quasar-docs/js/23.9cffcfa4.js",revision:null},{url:"/quasar-docs/js/230.b33864ee.js",revision:null},{url:"/quasar-docs/js/231.ebb83d4f.js",revision:null},{url:"/quasar-docs/js/232.b29b4cee.js",revision:null},{url:"/quasar-docs/js/233.31f9be1b.js",revision:null},{url:"/quasar-docs/js/234.1305f260.js",revision:null},{url:"/quasar-docs/js/235.76454ad2.js",revision:null},{url:"/quasar-docs/js/236.effe5fd7.js",revision:null},{url:"/quasar-docs/js/237.2d7a5d9a.js",revision:null},{url:"/quasar-docs/js/238.eb59dfee.js",revision:null},{url:"/quasar-docs/js/239.781a059e.js",revision:null},{url:"/quasar-docs/js/24.5f810adb.js",revision:null},{url:"/quasar-docs/js/240.e72f039e.js",revision:null},{url:"/quasar-docs/js/241.2da02267.js",revision:null},{url:"/quasar-docs/js/242.45ccea23.js",revision:null},{url:"/quasar-docs/js/243.de2c5f0d.js",revision:null},{url:"/quasar-docs/js/244.2f0274b6.js",revision:null},{url:"/quasar-docs/js/245.28ab17e2.js",revision:null},{url:"/quasar-docs/js/246.6872f483.js",revision:null},{url:"/quasar-docs/js/247.d0b5d34e.js",revision:null},{url:"/quasar-docs/js/248.be2b32cf.js",revision:null},{url:"/quasar-docs/js/249.f2299249.js",revision:null},{url:"/quasar-docs/js/25.61fa598b.js",revision:null},{url:"/quasar-docs/js/250.377489b4.js",revision:null},{url:"/quasar-docs/js/251.8b3b87e6.js",revision:null},{url:"/quasar-docs/js/252.f1231761.js",revision:null},{url:"/quasar-docs/js/253.2468693d.js",revision:null},{url:"/quasar-docs/js/254.f706d3ec.js",revision:null},{url:"/quasar-docs/js/255.0ef149ea.js",revision:null},{url:"/quasar-docs/js/256.72bfeaee.js",revision:null},{url:"/quasar-docs/js/257.82094f67.js",revision:null},{url:"/quasar-docs/js/258.d960e929.js",revision:null},{url:"/quasar-docs/js/259.2cc806da.js",revision:null},{url:"/quasar-docs/js/26.a706f5c8.js",revision:null},{url:"/quasar-docs/js/260.d330cc7b.js",revision:null},{url:"/quasar-docs/js/261.2ab1b160.js",revision:null},{url:"/quasar-docs/js/262.fd105580.js",revision:null},{url:"/quasar-docs/js/263.a8ce72f2.js",revision:null},{url:"/quasar-docs/js/264.0d59508a.js",revision:null},{url:"/quasar-docs/js/265.20e72a27.js",revision:null},{url:"/quasar-docs/js/266.f57bc7b9.js",revision:null},{url:"/quasar-docs/js/267.1d07e884.js",revision:null},{url:"/quasar-docs/js/268.66548280.js",revision:null},{url:"/quasar-docs/js/269.1790c112.js",revision:null},{url:"/quasar-docs/js/27.2353bff6.js",revision:null},{url:"/quasar-docs/js/270.69a26bf8.js",revision:null},{url:"/quasar-docs/js/271.2bb78a59.js",revision:null},{url:"/quasar-docs/js/272.08a6f13b.js",revision:null},{url:"/quasar-docs/js/273.5d04480a.js",revision:null},{url:"/quasar-docs/js/274.8957ac29.js",revision:null},{url:"/quasar-docs/js/275.9a47eb79.js",revision:null},{url:"/quasar-docs/js/276.f1ffa9fb.js",revision:null},{url:"/quasar-docs/js/277.f7b1b68c.js",revision:null},{url:"/quasar-docs/js/278.c0c71d4f.js",revision:null},{url:"/quasar-docs/js/279.de6a5cc8.js",revision:null},{url:"/quasar-docs/js/28.aa26774f.js",revision:null},{url:"/quasar-docs/js/280.28b7705a.js",revision:null},{url:"/quasar-docs/js/281.89ba3cc0.js",revision:null},{url:"/quasar-docs/js/282.5d4d229c.js",revision:null},{url:"/quasar-docs/js/283.6a16830a.js",revision:null},{url:"/quasar-docs/js/284.5a10a0ba.js",revision:null},{url:"/quasar-docs/js/285.0e81e515.js",revision:null},{url:"/quasar-docs/js/286.66bea827.js",revision:null},{url:"/quasar-docs/js/287.6b7c9140.js",revision:null},{url:"/quasar-docs/js/288.ec7943a0.js",revision:null},{url:"/quasar-docs/js/289.c200d818.js",revision:null},{url:"/quasar-docs/js/29.d51f2c38.js",revision:null},{url:"/quasar-docs/js/290.35119c3c.js",revision:null},{url:"/quasar-docs/js/291.1e1e5aa0.js",revision:null},{url:"/quasar-docs/js/30.30588825.js",revision:null},{url:"/quasar-docs/js/31.9d7ebff8.js",revision:null},{url:"/quasar-docs/js/32.3c681081.js",revision:null},{url:"/quasar-docs/js/33.2b5df66d.js",revision:null},{url:"/quasar-docs/js/34.128b7fdf.js",revision:null},{url:"/quasar-docs/js/35.c2b75d87.js",revision:null},{url:"/quasar-docs/js/36.6eadf101.js",revision:null},{url:"/quasar-docs/js/37.3b375a46.js",revision:null},{url:"/quasar-docs/js/38.92e98ae2.js",revision:null},{url:"/quasar-docs/js/39.d410fa50.js",revision:null},{url:"/quasar-docs/js/40.1d3df778.js",revision:null},{url:"/quasar-docs/js/41.9427f2a7.js",revision:null},{url:"/quasar-docs/js/42.4f0432f4.js",revision:null},{url:"/quasar-docs/js/43.1d606ca7.js",revision:null},{url:"/quasar-docs/js/44.be8f8050.js",revision:null},{url:"/quasar-docs/js/45.6415a422.js",revision:null},{url:"/quasar-docs/js/46.90efc810.js",revision:null},{url:"/quasar-docs/js/47.b21126a3.js",revision:null},{url:"/quasar-docs/js/48.4857a527.js",revision:null},{url:"/quasar-docs/js/49.d10b679f.js",revision:null},{url:"/quasar-docs/js/5.d76bc95c.js",revision:null},{url:"/quasar-docs/js/50.7e588fe7.js",revision:null},{url:"/quasar-docs/js/51.cf1c57a1.js",revision:null},{url:"/quasar-docs/js/52.bbddaea1.js",revision:null},{url:"/quasar-docs/js/53.ed80712d.js",revision:null},{url:"/quasar-docs/js/54.9680c21a.js",revision:null},{url:"/quasar-docs/js/55.a1eb3166.js",revision:null},{url:"/quasar-docs/js/56.ef0bd76d.js",revision:null},{url:"/quasar-docs/js/57.40dfc0b7.js",revision:null},{url:"/quasar-docs/js/58.c5255328.js",revision:null},{url:"/quasar-docs/js/59.71f5ae1b.js",revision:null},{url:"/quasar-docs/js/6.c16c71d6.js",revision:null},{url:"/quasar-docs/js/60.fd3d4809.js",revision:null},{url:"/quasar-docs/js/61.8a4b6310.js",revision:null},{url:"/quasar-docs/js/62.0e09e158.js",revision:null},{url:"/quasar-docs/js/63.f07fa4a2.js",revision:null},{url:"/quasar-docs/js/64.d90b7c86.js",revision:null},{url:"/quasar-docs/js/65.e16582a8.js",revision:null},{url:"/quasar-docs/js/66.420702a1.js",revision:null},{url:"/quasar-docs/js/67.1e817e5e.js",revision:null},{url:"/quasar-docs/js/68.e61f1106.js",revision:null},{url:"/quasar-docs/js/69.1b78526b.js",revision:null},{url:"/quasar-docs/js/7.09bc00ec.js",revision:null},{url:"/quasar-docs/js/70.03227e92.js",revision:null},{url:"/quasar-docs/js/71.c3f3cfc3.js",revision:null},{url:"/quasar-docs/js/72.f77855b4.js",revision:null},{url:"/quasar-docs/js/73.4c18082c.js",revision:null},{url:"/quasar-docs/js/74.567b6d0c.js",revision:null},{url:"/quasar-docs/js/75.cc179064.js",revision:null},{url:"/quasar-docs/js/76.4fffacd1.js",revision:null},{url:"/quasar-docs/js/77.83131121.js",revision:null},{url:"/quasar-docs/js/78.8d455eda.js",revision:null},{url:"/quasar-docs/js/79.8828eb64.js",revision:null},{url:"/quasar-docs/js/8.709fff5c.js",revision:null},{url:"/quasar-docs/js/80.48cd2d02.js",revision:null},{url:"/quasar-docs/js/81.8bc9eff1.js",revision:null},{url:"/quasar-docs/js/82.5dff5513.js",revision:null},{url:"/quasar-docs/js/83.3f19802e.js",revision:null},{url:"/quasar-docs/js/84.408c1a50.js",revision:null},{url:"/quasar-docs/js/85.bebc2f30.js",revision:null},{url:"/quasar-docs/js/86.1d4a7682.js",revision:null},{url:"/quasar-docs/js/87.166f5ea7.js",revision:null},{url:"/quasar-docs/js/88.f4dffcf8.js",revision:null},{url:"/quasar-docs/js/89.226390b8.js",revision:null},{url:"/quasar-docs/js/9.e4641904.js",revision:null},{url:"/quasar-docs/js/90.82d3ab37.js",revision:null},{url:"/quasar-docs/js/91.173fef30.js",revision:null},{url:"/quasar-docs/js/92.eac60b91.js",revision:null},{url:"/quasar-docs/js/93.9266d329.js",revision:null},{url:"/quasar-docs/js/94.c9ea8bea.js",revision:null},{url:"/quasar-docs/js/95.6978a571.js",revision:null},{url:"/quasar-docs/js/96.93dd064b.js",revision:null},{url:"/quasar-docs/js/97.062db507.js",revision:null},{url:"/quasar-docs/js/98.361b23e0.js",revision:null},{url:"/quasar-docs/js/99.9ce8ab90.js",revision:null},{url:"/quasar-docs/js/app.43bc8c95.js",revision:null},{url:"/quasar-docs/js/demo-source.419b6062.js",revision:null},{url:"/quasar-docs/js/demo.11d52f62.js",revision:null},{url:"/quasar-docs/js/quasar-api.a7cd5b41.js",revision:null},{url:"/quasar-docs/js/vendor.3acd5a59.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
