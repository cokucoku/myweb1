(function(t){function e(e){for(var i,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b6528":"ab97dc0f","chunk-2d0b68f8":"7c1ccb37","chunk-2d0d6f02":"5c39013b","chunk-2d0e95df":"5f28802d","chunk-4fe07028":"88924ed9","chunk-6eb39049":"d886bd0e","chunk-756292d5":"1e3a759c","chunk-c859aff6":"ef864806","chunk-d48c9266":"0fae1f70","chunk-d85f2228":"8fe4a853","chunk-fe51c73c":"174dbe89"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=a[t]=[e,i]}));e.push(n[2]=i);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var u=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));i["a"].use(a["a"]);var r=[{path:"/",component:function(){return n.e("chunk-2d0b68f8").then(n.bind(null,"1e4b"))},meta:{title:"首页"}},{path:"/articles",component:function(){return n.e("chunk-4fe07028").then(n.bind(null,"0482"))},meta:{title:"文章"}},{path:"/techs",component:function(){return n.e("chunk-756292d5").then(n.bind(null,"024c"))},meta:{title:"前端"}},{path:"/mottos",component:function(){return n.e("chunk-2d0b6528").then(n.bind(null,"1d54"))},meta:{title:"格言"}},{path:"/articles/:id",component:function(){return n.e("chunk-d85f2228").then(n.bind(null,"9a8c"))},meta:{title:"文章详情",detail:!0}},{path:"/techs/:id",component:function(){return n.e("chunk-c859aff6").then(n.bind(null,"6691"))},meta:{title:"前端详情",detail:!0}},{path:"/works",component:function(){return n.e("chunk-fe51c73c").then(n.bind(null,"d057"))},meta:{title:"作品"}},{path:"/lifes",component:function(){return n.e("chunk-6eb39049").then(n.bind(null,"c42e"))},meta:{title:"生活"}},{path:"/lifes/:id",component:function(){return n.e("chunk-d48c9266").then(n.bind(null,"0e76"))},meta:{title:"生活详情",detail:!0}},{path:"/about",component:function(){return n.e("chunk-2d0d6f02").then(n.bind(null,"754b"))},meta:{title:"关于"}},{path:"/404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},meta:{title:"404"}},{path:"*",redirect:"/404"}],o=new a["a"]({routes:r,linkActiveClass:"active",linkExactActiveClass:"exact-active",scrollBehavior:function(){return{x:0,y:0}}}),c=o,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"web",class:{index:t.index}},[t.index?t._e():n("div",{staticClass:"navbar"},[n("div",{staticClass:"sidebar-button",on:{click:function(e){t.expdown=!t.expdown}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])]),n("router-link",{staticClass:"home-link",attrs:{to:"/",tag:"a"}}),n("div",{staticClass:"searcharea"},[n("div",{staticClass:"search-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{autocomplete:"off"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t.suggestList.length>0?n("ul",{staticClass:"suggestions"},t._l(t.suggestList,(function(e,i){return n("li",{key:i},[n("router-link",{attrs:{to:"/"+t.currentPath+"/"+e.id,tag:"a"}},[t._v(t._s(i+1)+"、"+t._s(e.title))])],1)})),0):t._e()]),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.expdown,expression:"expdown"}],staticClass:"nav-links"},[n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/articles",tag:"a"}},[t._v("文章")])],1),n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/techs",tag:"a"}},[t._v("前端")])],1),n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/works",tag:"a"}},[t._v("作品")])],1),n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/lifes",tag:"a"}},[t._v("生活")])],1),n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/mottos",tag:"a"}},[t._v("格言")])],1),n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/about",tag:"a"}},[t._v("关于")])],1)])])],1),t.index?n("header",[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/",tag:"a"}})],1),n("nav",[n("ul",[n("router-link",{attrs:{to:"/articles",tag:"li"}},[t._v("文章")]),n("router-link",{attrs:{to:"/techs",tag:"li"}},[t._v("前端")]),n("router-link",{attrs:{to:"/works",tag:"li"}},[t._v("作品")]),n("router-link",{attrs:{to:"/lifes",tag:"li"}},[t._v("生活")]),n("router-link",{attrs:{to:"/mottos",tag:"li"}},[t._v("格言")]),n("router-link",{attrs:{to:"/about",tag:"li"}},[t._v("关于")])],1)])]):t._e(),n("router-view",{attrs:{expleft:t.expleft,expup:t.expup},on:{"update:expup":function(e){t.expup=e}}}),n("ul",{staticClass:"rightNav"},[t.detail?n("li",{staticClass:"iconfont icon-menu pc",on:{click:t.navleft}}):t._e(),t.detail?n("li",{staticClass:"iconfont icon-menu mobile",on:{click:t.navup}}):t._e(),n("li",{staticClass:"iconfont icon-l-goToTop",on:{click:t.totop}})]),n("ad")],1)},u=[],l=(n("ac1f"),n("841c"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newyearad"},[n("div",{staticClass:"mark"}),n("div",{staticClass:"win"},[n("i",{staticClass:"close"},[t._v("x")]),n("div",{staticClass:"nr"},[n("h2",[t._v("兔年身体健康")]),n("img",{attrs:{src:"https://s1.ax1x.com/2022/12/30/pSpBJKA.png"}}),n("div",{staticClass:"text"})])])])}],f=(n("1276"),n("d81d"),n("5319"),{name:"ad",data:function(){return{}},mounted:function(){var t=document.querySelector(".newyearad"),e=t.querySelector(".close");function n(t,e,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var a="expires="+i.toUTCString();document.cookie=t+"="+e+";"+a+";path=/"}function i(t){var e,n,i=t+"=",a=document.cookie,r=a.split(";");return r.map((function(t){e=t.replace(/\s+/g,""),0==e.indexOf(i)&&(n=e.substring(i.length,e.length))})),n}e.addEventListener("click",(function(){t.style.display="none"})),i("newYear")?t.style.display="none":(t.style.display="block",n("newYear","newYear",1))},methods:{},computed:{}}),p=f,h=(n("abd7"),n("2877")),m=Object(h["a"])(p,l,d,!1,null,null,null),v=m.exports,b=(n("a806"),n("c461"),n("7f7f")),k={name:"myweb",components:{ad:v},data:function(){return{currentPath:"",keyword:"",suggestList:[],expdown:!0,index:!1,detail:!1,expleft:!0,expup:!1}},mounted:function(){var t=window.innerWidth,e=this;function n(t){t>768?(e.expleft=!0,e.expup=!1,e.expdown=!0):(e.expleft=!1,e.expup=!1,e.expdown=!1)}n(t),window.addEventListener("resize",(function(){t=window.innerWidth,n(t)}));(function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?3384d95e63352dd4d880e5b0aa3b3f9a";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)})()},methods:{totop:function(){document.documentElement.scrollIntoView({behavior:"smooth",block:"start"})},navleft:function(){this.expleft=!this.expleft},navup:function(){this.expup=!this.expup}},computed:{},watch:{keyword:{immediate:!0,handler:function(t){var e,n=this;this.$route.path.indexOf("article")>-1?(e="article",this.currentPath="articles"):this.$route.path.indexOf("tech")>-1?(e="techs",this.currentPath="techs"):this.$route.path.indexOf("life")>-1?(e="life",this.currentPath="lifes"):(e="article",this.currentPath="articles"),fetch("https://www.fastmock.site/mock/5f854ec44ed74b246903c6e75806ec14/api/"+e).then((function(t){return t.json()})).then((function(e){var i=new b["a"]({fields:["title"],storeFields:["title"],searchOptions:{fuzzy:16}});i.addAll(e),t=t.toLowerCase();var a=i.search(t,{filter:function(e){return e.title.toLowerCase().indexOf(t)>-1}});n.suggestList=a}))}},$route:function(t){this.expup=!1,this.keyword="",this.suggestList=[];var e=window.innerWidth;this.expdown=e>768,this.expleft=!0,"/"===t.fullPath?this.index=!0:this.index=!1,t.meta.detail?this.detail=!0:this.detail=!1}}},w=k,g=Object(h["a"])(w,s,u,!1,null,null,null),x=g.exports,y="leeao";function _(t){var e="";return e=t?t+"-"+y:t,e}c.afterEach((function(t){t.params.id?document.title=_(t.meta.title+"-"+t.params.id):document.title=_(t.meta.title)}));n("9f21");i["a"].config.productionTip=!1,new i["a"]({router:c,render:function(t){return t(x)}}).$mount("#app")},"7c47":function(t,e,n){},a806:function(t,e,n){},abd7:function(t,e,n){"use strict";n("7c47")},c461:function(t,e,n){}});
//# sourceMappingURL=app.95dd5441.js.map