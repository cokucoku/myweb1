(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efd69"],{"9a8c":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"articles"},[s("div",{staticClass:"li"},[s("div",{staticClass:"title"},[t._v(t._s(t.info.title))]),s("div",{staticClass:"time"},[t._v(t._s(t.info.time))]),s("router-link",{staticClass:"author",attrs:{tag:"div",to:"/techs"}},[s("div",{staticClass:"tx"}),s("div",{staticClass:"text"},[s("div",{staticClass:"who"},[t._v("Web前端前沿")]),s("div",{staticClass:"whojs"},[t._v("致力于有趣的前端效果实现")])]),s("div",{staticClass:"arrow"})]),s("div",{staticClass:"kong"}),s("div",{staticClass:"ms",domProps:{innerHTML:t._s(t.info.nr)},on:{click:t.opimg}}),s("div",{staticClass:"footerline"},[t._v("- EOF -")]),s("div",{staticClass:"kong"}),s("router-link",{staticClass:"author",attrs:{tag:"div",to:"/techs"}},[s("div",{staticClass:"tx"}),s("div",{staticClass:"text"},[s("div",{staticClass:"who"},[t._v("Web前端前沿")]),s("div",{staticClass:"whojs"},[t._v("致力于有趣的前端效果实现")])]),s("div",{staticClass:"arrow"})]),s("div",{staticClass:"kong"}),s("div",{staticClass:"kong"}),s("div",{staticClass:"hot"},[s("div",{staticClass:"bt"},[t._v("推荐阅读")]),s("div",{staticClass:"tjlist"},[s("ul",t._l(t.tjlist,(function(i,a){return s("router-link",{key:a,attrs:{tag:"li",to:"/articles/"+i.id}},[t._v(t._s(i.title)+" ")])})),1)])])],1)]),s("transition",{attrs:{name:"mys"}},[t.expup?s("div",{staticClass:"mark",on:{click:t.gb}}):t._e()]),s("ul",{staticClass:"listall",class:{expleft:t.expleft&&t.ispc,expup:t.expup&&!t.ispc}},[s("h2",[t._v("文章列表"),s("i",{staticClass:"iconfont icon-close",on:{click:t.gb}})]),t._l(t.articles,(function(i,a){return s("router-link",{key:a,attrs:{tag:"li",to:"/articles/"+i.id}},[t._v(t._s(i.title)+" ")])}))],2)],1)])},e=[],n=(s("4de4"),s("d3b7"),s("a9e3"),s("4ec3")),l={name:"articles",data:function(){return{info:{},articles:[],tjlist:[],ispc:!0}},props:{expleft:{type:Boolean,default:!0},expup:{type:Boolean,default:!1}},created:function(){var t=this,i={app_key:"1D5AF16FD7D90EE3C5CF70D088249505",model_name:"article",perpage:1e3,order:["mtime DESC","id DESC"]};Object(n["c"])(i).then((function(i){t.articles=i.data.list;var s=t.articles.filter((function(t){return 1===t.tj}));t.tjlist=s;var a=document.querySelector(".listall").offsetHeight-55,e=24*t.articles.length;document.querySelector(".listall").style.cssText=e>a?"--gd:-15":"--gd:0"}))},mounted:function(){var t=window.innerWidth,i=this;function s(t){i.ispc=t>768}s(t),window.addEventListener("resize",(function(){t=window.innerWidth,s(t)}))},watch:{$route:{handler:function(t){var i=this,s=Number(t.params.id),a={app_key:"1D5AF16FD7D90EE3C5CF70D088249505",model_name:"article",id:s};Object(n["b"])(a).then((function(t){i.info=t.data.data}))},immediate:!0},expup:{handler:function(t){t?document.body.classList.add("dj"):setTimeout((function(){document.body.classList.remove("dj")}),400)},immediate:!0}},methods:{gb:function(){this.$emit("update:expup",!1)},opimg:function(){var t=event.target;t.tagName.toLowerCase().indexOf("img")>-1&&window.open(t.src)}},computed:{}},c=l,o=s("2877"),r=Object(o["a"])(c,a,e,!1,null,null,null);i["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0efd69.d2ae59e2.js.map