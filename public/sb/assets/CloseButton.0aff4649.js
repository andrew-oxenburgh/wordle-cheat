import{p}from"./index.0125c4c8.js";import{R as M,r as O}from"./index.6988984c.js";import{c as $e,a as Ye}from"./inheritsLoose.4bb5a079.js";import{_ as re}from"./react-jss.esm.e82dbf81.js";import{c as dn}from"./ThemeProvider.27d7aa5f.js";import{j as Dt}from"./jsx-runtime.e697e4ce.js";import{R as st}from"./index.c7753fe6.js";function Cn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Cn(Object(e),!0).forEach(function(a){C(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Cn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function _t(t){return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_t(t)}function Ue(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Pn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function We(t,n,e){return n&&Pn(t.prototype,n),e&&Pn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function vn(t,n){return Xe(t)||Be(t,n)||ie(t,n)||Ke()}function gt(t){return He(t)||Ge(t)||ie(t)||Ve()}function He(t){if(Array.isArray(t))return Kt(t)}function Xe(t){if(Array.isArray(t))return t}function Ge(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Be(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function ie(t,n){if(!!t){if(typeof t=="string")return Kt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Kt(t,n)}}function Kt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nn=function(){},pn={},oe={},se=null,fe={mark:Nn,measure:Nn};try{typeof window<"u"&&(pn=window),typeof document<"u"&&(oe=document),typeof MutationObserver<"u"&&(se=MutationObserver),typeof performance<"u"&&(fe=performance)}catch{}var qe=pn.navigator||{},Tn=qe.userAgent,In=Tn===void 0?"":Tn,X=pn,y=oe,_n=se,xt=fe;X.document;var z=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",le=~In.indexOf("MSIE")||~In.indexOf("Trident/"),kt,wt,Et,At,Ot,D="___FONT_AWESOME___",qt=16,ue="fa",ce="svg-inline--fa",Q="data-fa-i2svg",Zt="data-fa-pseudo-element",Ze="data-fa-pseudo-element-pending",bn="data-prefix",gn="data-icon",Rn="fontawesome-i2svg",Qe="async",Je=["HTML","HEAD","STYLE","SCRIPT"],me=function(){try{return!0}catch{return!1}}(),h="classic",w="sharp",hn=[h,w];function ht(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var mt=ht((kt={},C(kt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(kt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),kt)),dt=ht((wt={},C(wt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(wt,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wt)),vt=ht((Et={},C(Et,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(Et,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Et)),ta=ht((At={},C(At,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(At,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),At)),na=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,de="fa-layers-text",ea=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,aa=ht((Ot={},C(Ot,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(Ot,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ot)),ve=[1,2,3,4,5,6,7,8,9,10],ra=ve.concat([11,12,13,14,15,16,17,18,19,20]),ia=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pt=new Set;Object.keys(dt[h]).map(pt.add.bind(pt));Object.keys(dt[w]).map(pt.add.bind(pt));var oa=[].concat(hn,gt(pt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(ve.map(function(t){return"".concat(t,"x")})).concat(ra.map(function(t){return"w-".concat(t)})),ut=X.FontAwesomeConfig||{};function sa(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function fa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var la=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];la.forEach(function(t){var n=vn(t,2),e=n[0],a=n[1],r=fa(sa(e));r!=null&&(ut[a]=r)})}var pe={styleDefault:"solid",familyDefault:"classic",cssPrefix:ue,replacementClass:ce,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ut.familyPrefix&&(ut.cssPrefix=ut.familyPrefix);var it=m(m({},pe),ut);it.autoReplaceSvg||(it.observeMutations=!1);var d={};Object.keys(pe).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){it[t]=e,ct.forEach(function(a){return a(d)})},get:function(){return it[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){it.cssPrefix=n,ct.forEach(function(e){return e(d)})},get:function(){return it.cssPrefix}});X.FontAwesomeConfig=d;var ct=[];function ua(t){return ct.push(t),function(){ct.splice(ct.indexOf(t),1)}}var U=qt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ca(t){if(!(!t||!z)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(n,a),t}}var ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bt(){for(var t=12,n="";t-- >0;)n+=ma[Math.random()*62|0];return n}function ot(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function yn(t){return t.classList?ot(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function be(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(be(t[e]),'" ')},"").trim()}function Ft(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function xn(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function va(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function pa(t){var n=t.transform,e=t.width,a=e===void 0?qt:e,r=t.height,i=r===void 0?qt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&le?f+="translate(".concat(n.x/U-a/2,"em, ").concat(n.y/U-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/U,"em), calc(-50% + ").concat(n.y/U,"em)) "):f+="translate(".concat(n.x/U,"em, ").concat(n.y/U,"em) "),f+="scale(".concat(n.size/U*(n.flipX?-1:1),", ").concat(n.size/U*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ba=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ge(){var t=ue,n=ce,e=d.cssPrefix,a=d.replacementClass,r=ba;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Ln=!1;function Wt(){d.autoAddCss&&!Ln&&(ca(ge()),Ln=!0)}var ga={mixout:function(){return{dom:{css:ge,insertCss:Wt}}},hooks:function(){return{beforeDOMElementCreation:function(){Wt()},beforeI2svg:function(){Wt()}}}},F=X||{};F[D]||(F[D]={});F[D].styles||(F[D].styles={});F[D].hooks||(F[D].hooks={});F[D].shims||(F[D].shims=[]);var R=F[D],he=[],ha=function t(){y.removeEventListener("DOMContentLoaded",t),Rt=1,he.map(function(n){return n()})},Rt=!1;z&&(Rt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Rt||y.addEventListener("DOMContentLoaded",ha));function ya(t){!z||(Rt?setTimeout(t,0):he.push(t))}function yt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?be(t):"<".concat(n," ").concat(da(a),">").concat(i.map(yt).join(""),"</").concat(n,">")}function Mn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var xa=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Ht=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?xa(e,r):e,f,l,u;for(a===void 0?(f=1,u=n[i[0]]):(f=0,u=a);f<o;f++)l=i[f],u=s(u,n[l],l,n);return u};function ka(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Qt(t){var n=ka(t);return n.length===1?n[0].toString(16):null}function wa(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Dn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Jt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Dn(n);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(t,Dn(n)):R.styles[t]=m(m({},R.styles[t]||{}),i),t==="fas"&&Jt("fa",n)}var St,Ct,Pt,nt=R.styles,Ea=R.shims,Aa=(St={},C(St,h,Object.values(vt[h])),C(St,w,Object.values(vt[w])),St),kn=null,ye={},xe={},ke={},we={},Ee={},Oa=(Ct={},C(Ct,h,Object.keys(mt[h])),C(Ct,w,Object.keys(mt[w])),Ct);function Sa(t){return~oa.indexOf(t)}function Ca(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Sa(r)?r:null}var Ae=function(){var n=function(i){return Ht(nt,function(o,s,f){return o[f]=Ht(s,i,{}),o},{})};ye=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),xe=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Ee=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in nt||d.autoFetchSvg,a=Ht(Ea,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ke=a.names,we=a.unicodes,kn=jt(d.styleDefault,{family:d.familyDefault})};ua(function(t){kn=jt(t.styleDefault,{family:d.familyDefault})});Ae();function wn(t,n){return(ye[t]||{})[n]}function Pa(t,n){return(xe[t]||{})[n]}function Z(t,n){return(Ee[t]||{})[n]}function Oe(t){return ke[t]||{prefix:null,iconName:null}}function Na(t){var n=we[t],e=wn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function G(){return kn}var En=function(){return{prefix:null,iconName:null,rest:[]}};function jt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=mt[a][t],i=dt[a][t]||dt[a][r],o=t in R.styles?t:null;return i||o||null}var Fn=(Pt={},C(Pt,h,Object.keys(vt[h])),C(Pt,w,Object.keys(vt[w])),Pt);function zt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},C(n,h,"".concat(d.cssPrefix,"-").concat(h)),C(n,w,"".concat(d.cssPrefix,"-").concat(w)),n),o=null,s=h;(t.includes(i[h])||t.some(function(l){return Fn[h].includes(l)}))&&(s=h),(t.includes(i[w])||t.some(function(l){return Fn[w].includes(l)}))&&(s=w);var f=t.reduce(function(l,u){var c=Ca(d.cssPrefix,u);if(nt[u]?(u=Aa[s].includes(u)?ta[s][u]:u,o=u,l.prefix=u):Oa[s].indexOf(u)>-1?(o=u,l.prefix=jt(u,{family:s})):c?l.iconName=c:u!==d.replacementClass&&u!==i[h]&&u!==i[w]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var v=o==="fa"?Oe(l.iconName):{},b=Z(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||b||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!nt.far&&nt.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},En());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(nt.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=Z(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=G()||"fas"),f}var Ta=function(){function t(){Ue(this,t),this.definitions={}}return We(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),Jt(s,o[s]);var f=vt[h][s];f&&Jt(f,o[s]),Ae()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(e[s][c]=l)}),e[s][f]=l}),e}}]),t}(),jn=[],et={},rt={},Ia=Object.keys(rt);function _a(t,n){var e=n.mixoutsTo;return jn=t,et={},Object.keys(rt).forEach(function(a){Ia.indexOf(a)===-1&&delete rt[a]}),jn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),_t(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){et[o]||(et[o]=[]),et[o].push(i[o])})}a.provides&&a.provides(rt)}),e}function tn(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=et[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function J(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=et[t]||[];r.forEach(function(i){i.apply(null,e)})}function j(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return rt[t]?rt[t].apply(null,n):void 0}function nn(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||G();if(!!n)return n=Z(e,n)||n,Mn(Se.definitions,e,n)||Mn(R.styles,e,n)}var Se=new Ta,Ra=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,J("noAuto")},La={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(J("beforeI2svg",n),j("pseudoElements2svg",n),j("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ya(function(){Da({autoReplaceSvgRoot:e}),J("watch",n)})}},Ma={icon:function(n){if(n===null)return null;if(_t(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Z(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=jt(n[0]);return{prefix:a,iconName:Z(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(na))){var r=zt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:Z(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=G();return{prefix:i,iconName:Z(i,n)||n}}}},I={noAuto:Ra,config:d,dom:La,parse:Ma,library:Se,findIconDefinition:nn,toHtml:yt},Da=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function $t(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return yt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!z){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Fa(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(xn(o)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=Ft(m(m({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ja(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function An(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,u=t.titleId,c=t.extra,v=t.watchable,b=v===void 0?!1:v,g=a.found?a:e,S=g.width,x=g.height,P=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(Y){return c.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(c.classes).join(" "),E={children:[],attributes:m(m({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(x)})},N=P&&!~c.classes.indexOf("fa-fw")?{width:"".concat(S/x*16*.0625,"em")}:{};b&&(E.attributes[Q]=""),f&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||bt())},children:[f]}),delete E.attributes.title);var A=m(m({},E),{},{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:m(m({},N),c.styles)}),T=a.found&&e.found?j("generateAbstractMask",A)||{children:[],attributes:{}}:j("generateAbstractIcon",A)||{children:[],attributes:{}},_=T.children,Ut=T.attributes;return A.children=_,A.attributes=Ut,s?ja(A):Fa(A)}function zn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[Q]="");var u=m({},o.styles);xn(r)&&(u.transform=pa({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var c=Ft(u);c.length>0&&(l.style=c);var v=[];return v.push({tag:"span",attributes:l,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function za(t){var n=t.content,e=t.title,a=t.extra,r=m(m(m({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Ft(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Xt=R.styles;function en(t){var n=t[0],e=t[1],a=t.slice(4),r=vn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var $a={found:!1,width:512,height:512};function Ya(t,n){!me&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function an(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=G()),new Promise(function(a,r){if(j("missingIconAbstract"),e==="fa"){var i=Oe(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Xt[n]&&Xt[n][t]){var o=Xt[n][t];return a(en(o))}Ya(t,n),a(m(m({},$a),{},{icon:d.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}var $n=function(){},rn=d.measurePerformance&&xt&&xt.mark&&xt.measure?xt:{mark:$n,measure:$n},ft='FA "6.5.1"',Ua=function(n){return rn.mark("".concat(ft," ").concat(n," begins")),function(){return Ce(n)}},Ce=function(n){rn.mark("".concat(ft," ").concat(n," ends")),rn.measure("".concat(ft," ").concat(n),"".concat(ft," ").concat(n," begins"),"".concat(ft," ").concat(n," ends"))},On={begin:Ua,end:Ce},Tt=function(){};function Yn(t){var n=t.getAttribute?t.getAttribute(Q):null;return typeof n=="string"}function Wa(t){var n=t.getAttribute?t.getAttribute(bn):null,e=t.getAttribute?t.getAttribute(gn):null;return n&&e}function Ha(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Xa(){if(d.autoReplaceSvg===!0)return It.replace;var t=It[d.autoReplaceSvg];return t||It.replace}function Ga(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Ba(t){return y.createElement(t)}function Pe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ga:Ba:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Pe(o,{ceFn:a}))}),r}function Va(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var It={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Pe(r),e)}),e.getAttribute(Q)===null&&d.keepOriginalSource){var a=y.createComment(Va(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~yn(e).indexOf(d.replacementClass))return It.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return yt(s)}).join(`
`);e.setAttribute(Q,""),e.innerHTML=o}};function Un(t){t()}function Ne(t,n){var e=typeof n=="function"?n:Tt;if(t.length===0)e();else{var a=Un;d.mutateApproach===Qe&&(a=X.requestAnimationFrame||Un),a(function(){var r=Xa(),i=On.begin("mutate");t.map(r),i(),e()})}}var Sn=!1;function Te(){Sn=!0}function on(){Sn=!1}var Lt=null;function Wn(t){if(!!_n&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?Tt:n,a=t.nodeCallback,r=a===void 0?Tt:a,i=t.pseudoElementsCallback,o=i===void 0?Tt:i,s=t.observeMutationsRoot,f=s===void 0?y:s;Lt=new _n(function(l){if(!Sn){var u=G();ot(l).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Yn(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Yn(c.target)&&~ia.indexOf(c.attributeName))if(c.attributeName==="class"&&Wa(c.target)){var v=zt(yn(c.target)),b=v.prefix,g=v.iconName;c.target.setAttribute(bn,b||u),g&&c.target.setAttribute(gn,g)}else Ha(c.target)&&r(c.target)})}}),z&&Lt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ka(){!Lt||Lt.disconnect()}function qa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Za(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=zt(yn(t));return r.prefix||(r.prefix=G()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Pa(r.prefix,t.innerText)||wn(r.prefix,Qt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Qa(t){var n=ot(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||bt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ja(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Za(t),a=e.iconName,r=e.prefix,i=e.rest,o=Qa(t),s=tn("parseNodeAttributes",{},t),f=n.styleParser?qa(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var tr=R.styles;function Ie(t){var n=d.autoReplaceSvg==="nest"?Hn(t,{styleParser:!1}):Hn(t);return~n.extra.classes.indexOf(de)?j("generateLayersText",t,n):j("generateSvgReplacementMutation",t,n)}var B=new Set;hn.map(function(t){B.add("fa-".concat(t))});Object.keys(mt[h]).map(B.add.bind(B));Object.keys(mt[w]).map(B.add.bind(B));B=gt(B);function Xn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var e=y.documentElement.classList,a=function(c){return e.add("".concat(Rn,"-").concat(c))},r=function(c){return e.remove("".concat(Rn,"-").concat(c))},i=d.autoFetchSvg?B:hn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(tr));i.includes("fa")||i.push("fa");var o=[".".concat(de,":not([").concat(Q,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ot(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=On.begin("onTree"),l=s.reduce(function(u,c){try{var v=Ie(c);v&&u.push(v)}catch(b){me||b.name==="MissingIcon"&&console.error(b)}return u},[]);return new Promise(function(u,c){Promise.all(l).then(function(v){Ne(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),u()})}).catch(function(v){f(),c(v)})})}function nr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ie(t).then(function(e){e&&Ne([e],n)})}function er(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:nn(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:nn(r||{})),t(a,m(m({},e),{},{mask:r}))}}var ar=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?L:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,l=e.maskId,u=l===void 0?null:l,c=e.title,v=c===void 0?null:c,b=e.titleId,g=b===void 0?null:b,S=e.classes,x=S===void 0?[]:S,P=e.attributes,k=P===void 0?{}:P,E=e.styles,N=E===void 0?{}:E;if(!!n){var A=n.prefix,T=n.iconName,_=n.icon;return $t(m({type:"icon"},n),function(){return J("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(g||bt()):(k["aria-hidden"]="true",k.focusable="false")),An({icons:{main:en(_),mask:f?en(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:m(m({},L),r),symbol:o,title:v,maskId:u,titleId:g,extra:{attributes:k,styles:N,classes:x}})})}},rr={mixout:function(){return{icon:er(ar)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Xn,e.nodeCallback=nr,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,i=e.callback,o=i===void 0?function(){}:i;return Xn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,u=a.mask,c=a.maskId,v=a.extra;return new Promise(function(b,g){Promise.all([an(r,s),u.iconName?an(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var x=vn(S,2),P=x[0],k=x[1];b([e,An({icons:{main:P,mask:k},prefix:s,iconName:r,transform:f,symbol:l,maskId:c,title:i,titleId:o,extra:v,watchable:!0})])}).catch(g)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Ft(s);f.length>0&&(r.style=f);var l;return xn(o)&&(l=j("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},ir={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return $t({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(gt(i)).join(" ")},children:o}]})}}}},or={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,u=a.styles,c=u===void 0?{}:u;return $t({type:"counter",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:a}),za({content:e.toString(),title:i,extra:{attributes:l,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(gt(s))}})})}}}},sr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,u=a.attributes,c=u===void 0?{}:u,v=a.styles,b=v===void 0?{}:v;return $t({type:"text",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:a}),zn({content:e,transform:m(m({},L),i),title:s,extra:{attributes:c,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(gt(l))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(le){var l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/l,f=u.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,zn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},fr=new RegExp('"',"ug"),Gn=[1105920,1112319];function lr(t){var n=t.replace(fr,""),e=wa(n,0),a=e>=Gn[0]&&e<=Gn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Qt(r?n[0]:n),isSecondary:a||r}}function Bn(t,n){var e="".concat(Ze).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=ot(t.children),o=i.filter(function(_){return _.getAttribute(Zt)===n})[0],s=X.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(ea),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?w:h,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?dt[v][f[2].toLowerCase()]:aa[v][l],g=lr(c),S=g.value,x=g.isSecondary,P=f[0].startsWith("FontAwesome"),k=wn(b,S),E=k;if(P){var N=Na(S);N.iconName&&N.prefix&&(k=N.iconName,b=N.prefix)}if(k&&!x&&(!o||o.getAttribute(bn)!==b||o.getAttribute(gn)!==E)){t.setAttribute(e,E),o&&t.removeChild(o);var A=Ja(),T=A.extra;T.attributes[Zt]=n,an(k,b).then(function(_){var Ut=An(m(m({},A),{},{icons:{main:_,mask:En()},prefix:b,iconName:E,extra:T,watchable:!0})),Y=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=Ut.map(function(ze){return yt(ze)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ur(t){return Promise.all([Bn(t,"::before"),Bn(t,"::after")])}function cr(t){return t.parentNode!==document.head&&!~Je.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vn(t){if(!!z)return new Promise(function(n,e){var a=ot(t.querySelectorAll("*")).filter(cr).map(ur),r=On.begin("searchPseudoElements");Te(),Promise.all(a).then(function(){r(),on(),n()}).catch(function(){r(),on(),e()})})}var mr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Vn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;d.searchPseudoElements&&Vn(r)}}},Kn=!1,dr={mixout:function(){return{dom:{unwatch:function(){Te(),Kn=!0}}}},hooks:function(){return{bootstrap:function(){Wn(tn("mutationObserverCallbacks",{}))},noAuto:function(){Ka()},watch:function(e){var a=e.observeMutationsRoot;Kn?on():Wn(tn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},qn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},vr={mixout:function(){return{parse:{transform:function(e){return qn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=qn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(l," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:c,path:v};return{tag:"g",attributes:m({},b.outer),children:[{tag:"g",attributes:m({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),b.path)}]}]}}}},Gt={x:0,y:0,width:"100%",height:"100%"};function Zn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function pr(t){return t.tag==="g"?t.children:[t]}var br={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?zt(r.split(" ").map(function(o){return o.trim()})):En();return i.prefix||(i.prefix=G()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,l=i.width,u=i.icon,c=o.width,v=o.icon,b=va({transform:f,containerWidth:c,iconWidth:l}),g={tag:"rect",attributes:m(m({},Gt),{},{fill:"white"})},S=u.children?{children:u.children.map(Zn)}:{},x={tag:"g",attributes:m({},b.inner),children:[Zn(m({tag:u.tag,attributes:m(m({},u.attributes),b.path)},S))]},P={tag:"g",attributes:m({},b.outer),children:[x]},k="mask-".concat(s||bt()),E="clip-".concat(s||bt()),N={tag:"mask",attributes:m(m({},Gt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,P]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:pr(v)},N]};return a.push(A,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(k,")")},Gt)}),{children:a,attributes:r}}}},gr={provides:function(n){var e=!1;X.matchMedia&&(e=X.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},hr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},yr=[ga,rr,ir,or,sr,mr,dr,vr,br,gr,hr];_a(yr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var sn=I.parse;I.findIconDefinition;I.toHtml;var xr=I.icon;I.layer;I.text;I.counter;function Qn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function H(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Qn(Object(e),!0).forEach(function(a){at(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Qn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Mt(t){return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mt(t)}function at(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function kr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function wr(t,n){if(t==null)return{};var e=kr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(e[a]=t[a]))}return e}function fn(t){return Er(t)||Ar(t)||Or(t)||Sr()}function Er(t){if(Array.isArray(t))return ln(t)}function Ar(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Or(t,n){if(!!t){if(typeof t=="string")return ln(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ln(t,n)}}function ln(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Sr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cr(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,u=t.spinReverse,c=t.pulse,v=t.fixedWidth,b=t.inverse,g=t.border,S=t.listItem,x=t.flip,P=t.size,k=t.rotation,E=t.pull,N=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":c,"fa-fw":v,"fa-inverse":b,"fa-border":g,"fa-li":S,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},at(n,"fa-".concat(P),typeof P<"u"&&P!==null),at(n,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),at(n,"fa-pull-".concat(E),typeof E<"u"&&E!==null),at(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(N).map(function(A){return N[A]?A:null}).filter(function(A){return A})}function Pr(t){return t=t-0,t===t}function _e(t){return Pr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Nr=["style"];function Tr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ir(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=_e(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[Tr(r)]=i:n[r]=i,n},{})}function Re(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return Re(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,l){var u=n.attributes[l];switch(l){case"class":f.attrs.className=u,delete n.attributes.class;break;case"style":f.attrs.style=Ir(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=u:f.attrs[_e(l)]=u}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=wr(e,Nr);return r.attrs.style=H(H({},r.attrs.style),o),t.apply(void 0,[n.tag,H(H({},r.attrs),s)].concat(fn(a)))}var Le=!1;try{Le=!0}catch{}function _r(){if(!Le&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Jn(t){if(t&&Mt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(sn.icon)return sn.icon(t);if(t===null)return null;if(t&&Mt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Bt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?at({},t,n):{}}var Yt=M.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Jn(e),u=Bt("classes",[].concat(fn(Cr(t)),fn(i.split(" ")))),c=Bt("transform",typeof t.transform=="string"?sn.transform(t.transform):t.transform),v=Bt("mask",Jn(a)),b=xr(l,H(H(H(H({},u),c),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return _r("Could not find icon",l),null;var g=b.abstract,S={ref:n};return Object.keys(t).forEach(function(x){Yt.defaultProps.hasOwnProperty(x)||(S[x]=t[x])}),Rr(g[0],S)});Yt.displayName="FontAwesomeIcon";Yt.propTypes={beat:p.exports.bool,border:p.exports.bool,beatFade:p.exports.bool,bounce:p.exports.bool,className:p.exports.string,fade:p.exports.bool,flash:p.exports.bool,mask:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),maskId:p.exports.string,fixedWidth:p.exports.bool,inverse:p.exports.bool,flip:p.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),listItem:p.exports.bool,pull:p.exports.oneOf(["right","left"]),pulse:p.exports.bool,rotation:p.exports.oneOf([0,90,180,270]),shake:p.exports.bool,size:p.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.exports.bool,spinPulse:p.exports.bool,spinReverse:p.exports.bool,symbol:p.exports.oneOfType([p.exports.bool,p.exports.string]),title:p.exports.string,titleId:p.exports.string,transform:p.exports.oneOfType([p.exports.string,p.exports.object]),swapOpacity:p.exports.bool};Yt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Rr=Re.bind(null,M.createElement);function te(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function Lr(t){var n=Mr(t,"string");return typeof n=="symbol"?n:String(n)}function Mr(t,n){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Dr(t,n,e){var a=O.exports.useRef(t!==void 0),r=O.exports.useState(n),i=r[0],o=r[1],s=t!==void 0,f=a.current;return a.current=s,!s&&f&&i!==n&&o(n),[s?t:i,O.exports.useCallback(function(l){for(var u=arguments.length,c=new Array(u>1?u-1:0),v=1;v<u;v++)c[v-1]=arguments[v];e&&e.apply(void 0,[l].concat(c)),o(l)},[e])]}function bi(t,n){return Object.keys(n).reduce(function(e,a){var r,i=e,o=i[te(a)],s=i[a],f=re(i,[te(a),a].map(Lr)),l=n[a],u=Dr(s,o,t[l]),c=u[0],v=u[1];return $e({},f,(r={},r[a]=c,r[l]=v,r))},t)}function Fr(t){const n=O.exports.useRef(t);return O.exports.useEffect(()=>{n.current=t},[t]),n}function gi(t){const n=Fr(t);return O.exports.useCallback(function(...e){return n.current&&n.current(...e)},[n])}const hi=t=>O.exports.forwardRef((n,e)=>Dt.exports.jsx("div",{...n,ref:e,className:dn(n.className,t)})),ne={disabled:!1},Me=M.createContext(null);var jr=function(n){return n.scrollTop},lt="unmounted",V="exited",W="entering",K="entered",un="exiting",$=function(t){Ye(n,t);function n(a,r){var i;i=t.call(this,a,r)||this;var o=r,s=o&&!o.isMounting?a.enter:a.appear,f;return i.appearStatus=null,a.in?s?(f=V,i.appearStatus=W):f=K:a.unmountOnExit||a.mountOnEnter?f=lt:f=V,i.state={status:f},i.nextCallback=null,i}n.getDerivedStateFromProps=function(r,i){var o=r.in;return o&&i.status===lt?{status:V}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(r){var i=null;if(r!==this.props){var o=this.state.status;this.props.in?o!==W&&o!==K&&(i=W):(o===W||o===K)&&(i=un)}this.updateStatus(!1,i)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var r=this.props.timeout,i,o,s;return i=o=s=r,r!=null&&typeof r!="number"&&(i=r.exit,o=r.enter,s=r.appear!==void 0?r.appear:o),{exit:i,enter:o,appear:s}},e.updateStatus=function(r,i){if(r===void 0&&(r=!1),i!==null)if(this.cancelNextCallback(),i===W){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this);o&&jr(o)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===V&&this.setState({status:lt})},e.performEnter=function(r){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:r,f=this.props.nodeRef?[s]:[st.findDOMNode(this),s],l=f[0],u=f[1],c=this.getTimeouts(),v=s?c.appear:c.enter;if(!r&&!o||ne.disabled){this.safeSetState({status:K},function(){i.props.onEntered(l)});return}this.props.onEnter(l,u),this.safeSetState({status:W},function(){i.props.onEntering(l,u),i.onTransitionEnd(v,function(){i.safeSetState({status:K},function(){i.props.onEntered(l,u)})})})},e.performExit=function(){var r=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:st.findDOMNode(this);if(!i||ne.disabled){this.safeSetState({status:V},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:un},function(){r.props.onExiting(s),r.onTransitionEnd(o.exit,function(){r.safeSetState({status:V},function(){r.props.onExited(s)})})})},e.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(r,i){i=this.setNextCallback(i),this.setState(r,i)},e.setNextCallback=function(r){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,r(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},e.onTransitionEnd=function(r,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],l=f[0],u=f[1];this.props.addEndListener(l,u)}r!=null&&setTimeout(this.nextCallback,r)},e.render=function(){var r=this.state.status;if(r===lt)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=re(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return M.createElement(Me.Provider,{value:null},typeof o=="function"?o(r,s):M.cloneElement(M.Children.only(o),s))},n}(M.Component);$.contextType=Me;$.propTypes={};function tt(){}$.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:tt,onEntering:tt,onEntered:tt,onExit:tt,onExiting:tt,onExited:tt};$.UNMOUNTED=lt;$.EXITED=V;$.ENTERING=W;$.ENTERED=K;$.EXITING=un;function zr(t){return t&&t.ownerDocument||document}function $r(t){var n=zr(t);return n&&n.defaultView||window}function Yr(t,n){return $r(t).getComputedStyle(t,n)}var Ur=/([A-Z])/g;function Wr(t){return t.replace(Ur,"-$1").toLowerCase()}var Hr=/^ms-/;function Nt(t){return Wr(t).replace(Hr,"-ms-")}var Xr=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Gr(t){return!!(t&&Xr.test(t))}function De(t,n){var e="",a="";if(typeof n=="string")return t.style.getPropertyValue(Nt(n))||Yr(t).getPropertyValue(Nt(n));Object.keys(n).forEach(function(r){var i=n[r];!i&&i!==0?t.style.removeProperty(Nt(r)):Gr(r)?a+=r+"("+i+") ":e+=Nt(r)+": "+i+";"}),a&&(e+="transform: "+a+";"),t.style.cssText+=";"+e}const Br=!!(typeof window<"u"&&window.document&&window.document.createElement);var cn=!1,mn=!1;try{var Vt={get passive(){return cn=!0},get once(){return mn=cn=!0}};Br&&(window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,!0))}catch{}function Vr(t,n,e,a){if(a&&typeof a!="boolean"&&!mn){var r=a.once,i=a.capture,o=e;!mn&&r&&(o=e.__once||function s(f){this.removeEventListener(n,s,i),e.call(this,f)},e.__once=o),t.addEventListener(n,o,cn?a:i)}t.addEventListener(n,e,a)}function Kr(t,n,e,a){var r=a&&typeof a!="boolean"?a.capture:a;t.removeEventListener(n,e,r),e.__once&&t.removeEventListener(n,e.__once,r)}function Fe(t,n,e,a){return Vr(t,n,e,a),function(){Kr(t,n,e,a)}}function qr(t,n,e,a){if(e===void 0&&(e=!1),a===void 0&&(a=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(n,e,a),t.dispatchEvent(r)}}function Zr(t){var n=De(t,"transitionDuration")||"",e=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*e}function Qr(t,n,e){e===void 0&&(e=5);var a=!1,r=setTimeout(function(){a||qr(t,"transitionend",!0)},n+e),i=Fe(t,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(r),i()}}function Jr(t,n,e,a){e==null&&(e=Zr(t)||0);var r=Qr(t,e,a),i=Fe(t,"transitionend",n);return function(){r(),i()}}function ee(t,n){const e=De(t,n)||"",a=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*a}function ti(t,n){const e=ee(t,"transitionDuration"),a=ee(t,"transitionDelay"),r=Jr(t,i=>{i.target===t&&(r(),n(i))},e+a)}function ni(t){t.offsetHeight}const ae=t=>!t||typeof t=="function"?t:n=>{t.current=n};function ei(t,n){const e=ae(t),a=ae(n);return r=>{e&&e(r),a&&a(r)}}function ai(t,n){return O.exports.useMemo(()=>ei(t,n),[t,n])}function ri(t){return t&&"setState"in t?st.findDOMNode(t):t!=null?t:null}const ii=M.forwardRef(({onEnter:t,onEntering:n,onEntered:e,onExit:a,onExiting:r,onExited:i,addEndListener:o,children:s,childRef:f,...l},u)=>{const c=O.exports.useRef(null),v=ai(c,f),b=T=>{v(ri(T))},g=T=>_=>{T&&c.current&&T(c.current,_)},S=O.exports.useCallback(g(t),[t]),x=O.exports.useCallback(g(n),[n]),P=O.exports.useCallback(g(e),[e]),k=O.exports.useCallback(g(a),[a]),E=O.exports.useCallback(g(r),[r]),N=O.exports.useCallback(g(i),[i]),A=O.exports.useCallback(g(o),[o]);return Dt.exports.jsx($,{ref:u,...l,onEnter:S,onEntered:P,onEntering:x,onExit:k,onExited:N,onExiting:E,addEndListener:A,nodeRef:c,children:typeof s=="function"?(T,_)=>s(T,{..._,ref:b}):M.cloneElement(s,{ref:b})})}),oi={[W]:"show",[K]:"show"},si=O.exports.forwardRef(({className:t,children:n,transitionClasses:e={},onEnter:a,...r},i)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...r},s=O.exports.useCallback((f,l)=>{ni(f),a==null||a(f,l)},[a]);return Dt.exports.jsx(ii,{ref:i,addEndListener:ti,...o,onEnter:s,childRef:n.ref,children:(f,l)=>O.exports.cloneElement(n,{...l,className:dn("fade",t,n.props.className,oi[f],e[f])})})});si.displayName="Fade";const fi={"aria-label":p.exports.string,onClick:p.exports.func,variant:p.exports.oneOf(["white"])},je=O.exports.forwardRef(({className:t,variant:n,"aria-label":e="Close",...a},r)=>Dt.exports.jsx("button",{ref:r,type:"button",className:dn("btn-close",n&&`btn-close-${n}`,t),"aria-label":e,...a}));je.displayName="CloseButton";je.propTypes=fi;export{je as C,W as E,si as F,ii as T,bi as a,Yt as b,Br as c,hi as d,ai as e,un as f,K as g,ri as h,Dr as i,Fe as l,zr as o,De as s,ti as t,gi as u};
