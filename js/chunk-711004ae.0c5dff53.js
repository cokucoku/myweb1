(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711004ae"],{"04d1":function(t,e,i){var n=i("342f"),r=n.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},"1e4b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"bg"},[t.bginfo.pic?i("img",{attrs:{src:t.bginfo.pic}}):i("video",{attrs:{src:t.bginfo.video,preload:"auto",autoplay:"",loop:"",muted:""},domProps:{muted:!0},on:{click:function(e){return e.stopPropagation(),t.openvo.apply(null,arguments)}}}),i("div",{staticClass:"text"},[i("span",[t._v(t._s(t.bginfo.picname))]),i("span",[t._v(t._s(t.bginfo.picadd))])])]),i("div",{staticClass:"content",staticStyle:{"flex-direction":"column"}},[i("div",{staticClass:"top"},[i("router-link",{attrs:{tag:"a",to:"/articles/"+t.articles.id}},[i("div",{staticClass:"time"},[t._v(t._s(t.articles.time))]),i("div",{staticClass:"title"},[t._v(t._s(t.articles.title))]),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.articles.tpic}})])])],1),i("div",{staticClass:"top"},[i("router-link",{attrs:{tag:"a",to:"/lifes/"+t.lifes.id}},[i("div",{staticClass:"time"},[t._v(t._s(t.lifes.time))]),i("div",{staticClass:"title"},[t._v(t._s(t.lifes.title))]),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.lifes.tpic}})])])],1)])])},r=[],a=(i("4e82"),i("ac1f"),i("5319"),i("4ec3")),s={name:"index",data:function(){return{sw:window.innerWidth,sh:window.innerHeight,bginfo:{},articles:{},lifes:{}}},created:function(){var t=this,e={app_key:"1D5AF16FD7D90EE3C5CF70D088249505",model_name:"bgimg",perpage:1e3},i={app_key:"1D5AF16FD7D90EE3C5CF70D088249505",model_name:"article",perpage:1e3},n={app_key:"1D5AF16FD7D90EE3C5CF70D088249505",model_name:"life",perpage:1e3};Object(a["c"])(e).then((function(e){e=e.data.list;var i=Math.floor(Math.random()*e.length);t.bginfo=e[i]})),Object(a["c"])(i).then((function(e){e=e.data.list,e.sort((function(t,e){var i=t.mtime.replace(/-/g,""),n=e.mtime.replace(/-/g,"");return i>n&&t.id>e.id?-1:1})),t.articles=e[0]})),Object(a["c"])(n).then((function(e){e=e.data.list,e.sort((function(t,e){var i=t.mtime.replace(/-/g,""),n=e.mtime.replace(/-/g,"");return i>n&&t.id>e.id?-1:1})),t.lifes=e[0]}))},methods:{openvo:function(){var t=event.currentTarget;t.muted=!1}},computed:{}},o=s,c=i("2877"),l=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=l.exports},"4e82":function(t,e,i){"use strict";var n=i("23e7"),r=i("e330"),a=i("59ed"),s=i("7b0b"),o=i("07fa"),c=i("577e"),l=i("d039"),u=i("addb"),d=i("a640"),f=i("04d1"),p=i("d998"),v=i("2d00"),g=i("512c"),m=[],h=r(m.sort),b=r(m.push),C=l((function(){m.sort(void 0)})),_=l((function(){m.sort(null)})),w=d("sort"),k=!l((function(){if(v)return v<70;if(!(f&&f>3)){if(p)return!0;if(g)return g<603;var t,e,i,n,r="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(n=0;n<47;n++)m.push({k:e+n,v:i})}for(m.sort((function(t,e){return e.v-t.v})),n=0;n<m.length;n++)e=m[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}})),D=C||!_||!w||!k,x=function(t){return function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:c(e)>c(i)?1:-1}};n({target:"Array",proto:!0,forced:D},{sort:function(t){void 0!==t&&a(t);var e=s(this);if(k)return void 0===t?h(e):h(e,t);var i,n,r=[],c=o(e);for(n=0;n<c;n++)n in e&&b(r,e[n]);u(r,x(t)),i=r.length,n=0;while(n<i)e[n]=r[n++];while(n<c)delete e[n++];return e}})},"512c":function(t,e,i){var n=i("342f"),r=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},addb:function(t,e,i){var n=i("4dae"),r=Math.floor,a=function(t,e){var i=t.length,c=r(i/2);return i<8?s(t,e):o(t,a(n(t,0,c),e),a(n(t,c),e),e)},s=function(t,e){var i,n,r=t.length,a=1;while(a<r){n=a,i=t[a];while(n&&e(t[n-1],i)>0)t[n]=t[--n];n!==a++&&(t[n]=i)}return t},o=function(t,e,i,n){var r=e.length,a=i.length,s=0,o=0;while(s<r||o<a)t[s+o]=s<r&&o<a?n(e[s],i[o])<=0?e[s++]:i[o++]:s<r?e[s++]:i[o++];return t};t.exports=a},d998:function(t,e,i){var n=i("342f");t.exports=/MSIE|Trident/.test(n)}}]);
//# sourceMappingURL=chunk-711004ae.0c5dff53.js.map