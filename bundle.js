!function(){var t={550:function(t){function e(t){const r=document.getElementById(t);this.sliderRoot=r||document.querySelector(".sim-slider"),this.sliderList=this.sliderRoot.querySelector(".sim-slider-list"),this.sliderElements=this.sliderList.querySelectorAll(".sim-slider-element"),this.sliderElemFirst=this.sliderList.querySelector(".sim-slider-element"),this.leftArrow=this.sliderRoot.querySelector("div.sim-slider-arrow-left"),this.rightArrow=this.sliderRoot.querySelector("div.sim-slider-arrow-right"),this.indicatorDots=this.sliderRoot.querySelector("div.sim-slider-dots"),this.options=e.defaults,e.initialize(this)}e.defaults={loop:!0,auto:!0,interval:5e3,arrows:!0,dots:!0},e.prototype.elemPrev=function(t){t=t||1;const e=this.currentElement;this.currentElement-=t,this.currentElement<0&&(this.currentElement=this.elemCount-1),this.options.loop||(0===this.currentElement&&(this.leftArrow.style.display="none"),this.rightArrow.style.display="block"),this.sliderElements[this.currentElement].style.opacity="1",this.sliderElements[e].style.opacity="0",this.options.dots&&(this.dotOn(e),this.dotOff(this.currentElement))},e.prototype.elemNext=function(t){t=t||1;const e=this.currentElement;this.currentElement+=t,this.currentElement>=this.elemCount&&(this.currentElement=0),this.options.loop||(this.currentElement===this.elemCount-1&&(this.rightArrow.style.display="none"),this.leftArrow.style.display="block"),this.sliderElements[this.currentElement].style.opacity="1",this.sliderElements[e].style.opacity="0",this.options.dots&&(this.dotOn(e),this.dotOff(this.currentElement))},e.prototype.dotOn=function(t){this.indicatorDotsAll[t].style.cssText="background-color:#BBB; cursor:pointer;"},e.prototype.dotOff=function(t){this.indicatorDotsAll[t].style.cssText="background-color:#556; cursor:default;"},e.initialize=function(t){t.elemCount=t.sliderElements.length,t.currentElement=0;let e=r();function r(){return(new Date).getTime()}function i(){t.autoScroll=setInterval((()=>{const i=r();i-e+10>t.options.interval&&(e=i,t.elemNext())}),t.options.interval)}if(t.elemCount<=1&&(t.options.auto=!1,t.options.arrows=!1,t.options.dots=!1,t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.elemCount>=1&&(t.sliderElemFirst.style.opacity="1"),t.options.loop?t.options.auto&&(i(),t.sliderList.addEventListener("mouseenter",(()=>{clearInterval(t.autoScroll)}),!1),t.sliderList.addEventListener("mouseleave",i,!1)):(t.leftArrow.style.display="none",t.options.auto=!1),t.options.arrows?(t.leftArrow.addEventListener("click",(()=>{const i=r();i-e>1e3&&(e=i,t.elemPrev())}),!1),t.rightArrow.addEventListener("click",(()=>{const i=r();i-e>1e3&&(e=i,t.elemNext())}),!1)):(t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.options.dots){let i,o="";for(let e=0;e<t.elemCount;e++)o+='<span class="sim-dot"></span>';t.indicatorDots.innerHTML=o,t.indicatorDotsAll=t.sliderRoot.querySelectorAll("span.sim-dot");for(let o=0;o<t.elemCount;o++)t.indicatorDotsAll[o].addEventListener("click",(()=>{i=Math.abs(o-t.currentElement),o<t.currentElement?(e=r(),t.elemPrev(i)):o>t.currentElement&&(e=r(),t.elemNext(i))}),!1);t.dotOff(0);for(let e=1;e<t.elemCount;e++)t.dotOn(e)}},t.exports=e},518:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var i=r(81),o=r.n(i),n=r(645),s=r.n(n)()(o());s.push([t.id,"*{margin:0;padding:0;box-sizing:border-box}h1{font-size:78px;text-shadow:2px 2px 3px #a3a3a3}body{color:#fff;padding:30px 5%;text-align:center;background-color:skyblue}html{height:100vh}a{font-size:32px}.address{display:flex;flex-direction:column;font-size:28px}nav{display:flex;justify-content:center;margin-bottom:2rem;gap:30rem}article{background-color:#fff;max-width:50rem;color:#000;margin:2rem auto;border-radius:20px}h2{margin-top:1rem;margin-bottom:1rem}.mainList{margin-bottom:2rem}.view{margin-bottom:2rem}li img{height:380px;width:100%;object-fit:cover}.sim-slider{position:relative}.sim-slider-list{margin:0;padding:0;list-style-type:none;position:relative}.sim-slider-element{width:100%;transition:opacity 1s ease-in;opacity:0;position:absolute;z-index:2;left:0;top:0;display:block}div.sim-slider-arrow-left,div.sim-slider-arrow-right{width:40px;height:80px;position:absolute;cursor:pointer;opacity:.6;z-index:4}div.sim-slider-arrow-left img,div.sim-slider-arrow-right img{width:100%}div.sim-slider-arrow-left{left:10px;top:40%;display:block}div.sim-slider-arrow-right{right:10px;top:40%;display:block}div.sim-slider-arrow-left:hover{opacity:1}div.sim-slider-arrow-right:hover{opacity:1}div.sim-slider-dots{width:100%;height:auto;position:absolute;left:0;bottom:0;z-index:3;text-align:center}span.sim-dot{width:10px;height:10px;margin:5px 7px;padding:0;display:inline-block;background-color:#bbb;border-radius:5px;cursor:pointer}",""]);const l=s},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",i=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),i&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),i&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,i,o,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(i)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&s[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:function(t){"use strict";t.exports=function(t){return t[1]}},379:function(t){"use strict";var e=[];function r(t){for(var r=-1,i=0;i<e.length;i++)if(e[i].identifier===t){r=i;break}return r}function i(t,i){for(var n={},s=[],l=0;l<t.length;l++){var a=t[l],c=i.base?a[0]+i.base:a[0],d=n[c]||0,u="".concat(c," ").concat(d);n[c]=d+1;var p=r(u),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,i);i.byIndex=l,e.splice(l,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var n=i(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<n.length;s++){var l=r(n[s]);e[l].references--}for(var a=i(t,o),c=0;c<n.length;c++){var d=r(n[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}n=a}}},569:function(t){"use strict";var e={};t.exports=function(t,r){var i=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,r){"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var i="";r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,o&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}");var n=r.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={id:i,exports:{}};return t[i](n,n.exports,r),n.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.nc=void 0,function(){"use strict";var t=r(379),e=r.n(t),i=r(795),o=r.n(i),n=r(569),s=r.n(n),l=r(565),a=r.n(l),c=r(216),d=r.n(c),u=r(589),p=r.n(u),m=r(518),f={};f.styleTagTransform=p(),f.setAttributes=a(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=r(550);document.addEventListener("DOMContentLoaded",(()=>{new h}))}()}();