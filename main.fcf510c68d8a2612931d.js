!function(){var t={981:function(){function t(){document.querySelector(".overlay").classList.add("active"),document.body.classList.add("no-scroll")}function e(){document.querySelector(".overlay").classList.remove("active"),document.body.classList.remove("no-scroll")}document.querySelectorAll(".btn__open").forEach((function(e){e.addEventListener("click",t)})),document.querySelector(".modal__close").addEventListener("click",e),window.addEventListener("click",(function(t){(t.target.classList.contains("modal")||t.target.classList.contains("overlay"))&&e()})),document.querySelector(".modal__btn").addEventListener("click",e)},91:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},248:function(t,e,n){"use strict";t.exports=n.p+"assets/backside.png"},449:function(t,e,n){"use strict";t.exports=n.p+"assets/backside_hover-bottom.png"},307:function(t,e,n){"use strict";t.exports=n.p+"assets/backside_hover-top.png"},755:function(t,e,n){"use strict";t.exports=n.p+"assets/engine.png"},487:function(t,e,n){"use strict";t.exports=n.p+"assets/face_hover-bottom.png"},571:function(t,e,n){"use strict";t.exports=n.p+"assets/face_hover-top.png"},793:function(t,e,n){"use strict";t.exports=n.p+"assets/logo.png"},545:function(t,e,n){"use strict";t.exports=n.p+"assets/phone.svg"},348:function(t,e,n){"use strict";t.exports=n.p+"assets/telemetry.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){"use strict";var t=n(91),e=n.n(t),o=new URL(n(793),n.b),r=new URL(n(545),n.b),s=new URL(n(571),n.b),c=new URL(n(487),n.b),i=new URL(n(248),n.b),u=new URL(n(307),n.b),a=new URL(n(449),n.b),p=new URL(n(755),n.b),l=new URL(n(348),n.b);e()(o),e()(r),e()(s),e()(c),e()(i),e()(u),e()(a),e()(p),e()(l),n(981)}()}();