import{r as y,R as E}from"./index.084da61e.js";import{c as N,a as jn,b as ir}from"./inheritsLoose.4bb5a079.js";import{p as w}from"./index.8286d943.js";import{j as F}from"./jsx-runtime.a39df4dc.js";import{R as Ae}from"./index.0d4bc1cf.js";import"./_commonjsHelpers.b8add541.js";function yt(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var va={exports:{}},R={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=typeof Symbol=="function"&&Symbol.for,_n=M?Symbol.for("react.element"):60103,Mn=M?Symbol.for("react.portal"):60106,xt=M?Symbol.for("react.fragment"):60107,wt=M?Symbol.for("react.strict_mode"):60108,kt=M?Symbol.for("react.profiler"):60114,St=M?Symbol.for("react.provider"):60109,Pt=M?Symbol.for("react.context"):60110,$n=M?Symbol.for("react.async_mode"):60111,Rt=M?Symbol.for("react.concurrent_mode"):60111,Ot=M?Symbol.for("react.forward_ref"):60112,Et=M?Symbol.for("react.suspense"):60113,Ei=M?Symbol.for("react.suspense_list"):60120,At=M?Symbol.for("react.memo"):60115,Ct=M?Symbol.for("react.lazy"):60116,Ai=M?Symbol.for("react.block"):60121,Ci=M?Symbol.for("react.fundamental"):60117,Ti=M?Symbol.for("react.responder"):60118,Ii=M?Symbol.for("react.scope"):60119;function L(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _n:switch(e=e.type,e){case $n:case Rt:case xt:case kt:case wt:case Et:return e;default:switch(e=e&&e.$$typeof,e){case Pt:case Ot:case Ct:case At:case St:return e;default:return t}}case Mn:return t}}}function ha(e){return L(e)===Rt}R.AsyncMode=$n;R.ConcurrentMode=Rt;R.ContextConsumer=Pt;R.ContextProvider=St;R.Element=_n;R.ForwardRef=Ot;R.Fragment=xt;R.Lazy=Ct;R.Memo=At;R.Portal=Mn;R.Profiler=kt;R.StrictMode=wt;R.Suspense=Et;R.isAsyncMode=function(e){return ha(e)||L(e)===$n};R.isConcurrentMode=ha;R.isContextConsumer=function(e){return L(e)===Pt};R.isContextProvider=function(e){return L(e)===St};R.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_n};R.isForwardRef=function(e){return L(e)===Ot};R.isFragment=function(e){return L(e)===xt};R.isLazy=function(e){return L(e)===Ct};R.isMemo=function(e){return L(e)===At};R.isPortal=function(e){return L(e)===Mn};R.isProfiler=function(e){return L(e)===kt};R.isStrictMode=function(e){return L(e)===wt};R.isSuspense=function(e){return L(e)===Et};R.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xt||e===Rt||e===kt||e===wt||e===Et||e===Ei||typeof e=="object"&&e!==null&&(e.$$typeof===Ct||e.$$typeof===At||e.$$typeof===St||e.$$typeof===Pt||e.$$typeof===Ot||e.$$typeof===Ci||e.$$typeof===Ti||e.$$typeof===Ii||e.$$typeof===Ai)};R.typeOf=L;(function(e){e.exports=R})(va);var Ln=va.exports,Ni={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ji={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pa={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dn={};Dn[Ln.ForwardRef]=_i;Dn[Ln.Memo]=pa;function or(e){return Ln.isMemo(e)?pa:Dn[e.$$typeof]||Ni}var Mi=Object.defineProperty,$i=Object.getOwnPropertyNames,sr=Object.getOwnPropertySymbols,Li=Object.getOwnPropertyDescriptor,Di=Object.getPrototypeOf,fr=Object.prototype;function ga(e,t,r){if(typeof t!="string"){if(fr){var n=Di(t);n&&n!==fr&&ga(e,n,r)}var a=$i(t);sr&&(a=a.concat(sr(t)));for(var i=or(e),o=or(t),s=0;s<a.length;++s){var f=a[s];if(!ji[f]&&!(r&&r[f])&&!(o&&o[f])&&!(i&&i[f])){var l=Li(t,f);try{Mi(e,f,l)}catch{}}}}return e}var Fi=ga,zi=!0;function lr(e,t){if(!zi){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}var ba={};Object.defineProperty(ba,"__esModule",{value:!0});ba.default=Ui;function Ui(e){return e.displayName||e.name||(typeof e=="string"&&e.length>0?e:"Unknown")}function Xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mt(){return mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},mt.apply(this,arguments)}function Wi(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function X(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Yi(e){var t=function(r){Wi(n,r);function n(){for(var i,o=arguments.length,s=new Array(o),f=0;f<o;f++)s[f]=arguments[f];return i=r.call.apply(r,[this].concat(s))||this,Xe(X(X(i)),"cachedTheme",void 0),Xe(X(X(i)),"lastOuterTheme",void 0),Xe(X(X(i)),"lastTheme",void 0),Xe(X(X(i)),"renderProvider",function(l){var u=i.props.children;return E.createElement(e.Provider,{value:i.getTheme(l)},u)}),i}var a=n.prototype;return a.getTheme=function(o){if(this.props.theme!==this.lastTheme||o!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=o,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var s=this.props.theme;this.cachedTheme=s(o)}else{var f=this.props.theme;this.cachedTheme=o?mt({},o,f):f}return this.cachedTheme},a.render=function(){var o=this.props.children;return o?E.createElement(e.Consumer,null,this.renderProvider):null},n}(E.Component);return t}function Vi(e){return function(r){var n=E.forwardRef(function(a,i){return E.createElement(e.Consumer,null,function(o){return E.createElement(r,mt({theme:o,ref:i},a))})});return Fi(n,r),n}}function Hi(e){var t=function(){var n=E.useContext(e);return n};return t}function Gi(e){return{context:e,withTheme:Vi(e),useTheme:Hi(e),ThemeProvider:Yi(e)}}var ya=y.exports.createContext();Gi(ya);var ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se=(typeof window>"u"?"undefined":ur(window))==="object"&&(typeof document>"u"?"undefined":ur(document))==="object"&&document.nodeType===9;function Le(e){return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(e)}function Ki(e,t){if(Le(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Le(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bi(e){var t=Ki(e,"string");return Le(t)==="symbol"?t:String(t)}function cr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Bi(n.key),n)}}function Fn(e,t,r){return t&&cr(e.prototype,t),r&&cr(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var Xi={}.constructor;function nn(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map(nn);if(e.constructor!==Xi)return e;var t={};for(var r in e)t[r]=nn(e[r]);return t}function Tt(e,t,r){e===void 0&&(e="unnamed");var n=r.jss,a=nn(t),i=n.plugins.onCreateRule(e,a,r);return i||(e[0],null)}var dr=function(t,r){for(var n="",a=0;a<t.length&&t[a]!=="!important";a++)n&&(n+=r),n+=t[a];return n},ce=function(t){if(!Array.isArray(t))return t;var r="";if(Array.isArray(t[0]))for(var n=0;n<t.length&&t[n]!=="!important";n++)r&&(r+=", "),r+=dr(t[n]," ");else r=dr(t,", ");return t[t.length-1]==="!important"&&(r+=" !important"),r};function Pe(e){return e&&e.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Ee(e,t){for(var r="",n=0;n<t;n++)r+="  ";return r+e}function De(e,t,r){r===void 0&&(r={});var n="";if(!t)return n;var a=r,i=a.indent,o=i===void 0?0:i,s=t.fallbacks;r.format===!1&&(o=-1/0);var f=Pe(r),l=f.linebreak,u=f.space;if(e&&o++,s)if(Array.isArray(s))for(var c=0;c<s.length;c++){var m=s[c];for(var h in m){var g=m[h];g!=null&&(n&&(n+=l),n+=Ee(h+":"+u+ce(g)+";",o))}}else for(var b in s){var k=s[b];k!=null&&(n&&(n+=l),n+=Ee(b+":"+u+ce(k)+";",o))}for(var A in t){var S=t[A];S!=null&&A!=="fallbacks"&&(n&&(n+=l),n+=Ee(A+":"+u+ce(S)+";",o))}return!n&&!r.allowEmpty||!e?n:(o--,n&&(n=""+l+n+l),Ee(""+e+u+"{"+n,o)+Ee("}",o))}var qi=/([[\].#*$><+~=|^:(),"'`\s])/g,mr=typeof CSS<"u"&&CSS.escape,zn=function(e){return mr?mr(e):e.replace(qi,"\\$1")},xa=function(){function e(r,n,a){this.type="style",this.isProcessed=!1;var i=a.sheet,o=a.Renderer;this.key=r,this.options=a,this.style=n,i?this.renderer=i.renderer:o&&(this.renderer=new o)}var t=e.prototype;return t.prop=function(n,a,i){if(a===void 0)return this.style[n];var o=i?i.force:!1;if(!o&&this.style[n]===a)return this;var s=a;(!i||i.process!==!1)&&(s=this.options.jss.plugins.onChangeValue(a,n,this));var f=s==null||s===!1,l=n in this.style;if(f&&!l&&!o)return this;var u=f&&l;if(u?delete this.style[n]:this.style[n]=s,this.renderable&&this.renderer)return u?this.renderer.removeProperty(this.renderable,n):this.renderer.setProperty(this.renderable,n,s),this;var c=this.options.sheet;return c&&c.attached,this},e}(),rn=function(e){jn(t,e);function t(n,a,i){var o;o=e.call(this,n,a,i)||this;var s=i.selector,f=i.scoped,l=i.sheet,u=i.generateId;return s?o.selectorText=s:f!==!1&&(o.id=u(ir(ir(o)),l),o.selectorText="."+zn(o.id)),o}var r=t.prototype;return r.applyTo=function(a){var i=this.renderer;if(i){var o=this.toJSON();for(var s in o)i.setProperty(a,s,o[s])}return this},r.toJSON=function(){var a={};for(var i in this.style){var o=this.style[i];typeof o!="object"?a[i]=o:Array.isArray(o)&&(a[i]=ce(o))}return a},r.toString=function(a){var i=this.options.sheet,o=i?i.options.link:!1,s=o?N({},a,{allowEmpty:!0}):a;return De(this.selectorText,this.style,s)},Fn(t,[{key:"selector",set:function(a){if(a!==this.selectorText){this.selectorText=a;var i=this.renderer,o=this.renderable;if(!(!o||!i)){var s=i.setSelector(o,a);s||i.replaceRule(o,this)}}},get:function(){return this.selectorText}}]),t}(xa),Ji={onCreateRule:function(t,r,n){return t[0]==="@"||n.parent&&n.parent.type==="keyframes"?null:new rn(t,r,n)}},Lt={indent:1,children:!0},Zi=/@([\w-]+)/,Qi=function(){function e(r,n,a){this.type="conditional",this.isProcessed=!1,this.key=r;var i=r.match(Zi);this.at=i?i[1]:"unknown",this.query=a.name||"@"+this.at,this.options=a,this.rules=new It(N({},a,{parent:this}));for(var o in n)this.rules.add(o,n[o]);this.rules.process()}var t=e.prototype;return t.getRule=function(n){return this.rules.get(n)},t.indexOf=function(n){return this.rules.indexOf(n)},t.addRule=function(n,a,i){var o=this.rules.add(n,a,i);return o?(this.options.jss.plugins.onProcessRule(o),o):null},t.replaceRule=function(n,a,i){var o=this.rules.replace(n,a,i);return o&&this.options.jss.plugins.onProcessRule(o),o},t.toString=function(n){n===void 0&&(n=Lt);var a=Pe(n),i=a.linebreak;if(n.indent==null&&(n.indent=Lt.indent),n.children==null&&(n.children=Lt.children),n.children===!1)return this.query+" {}";var o=this.rules.toString(n);return o?this.query+" {"+i+o+i+"}":""},e}(),eo=/@container|@media|@supports\s+/,to={onCreateRule:function(t,r,n){return eo.test(t)?new Qi(t,r,n):null}},Dt={indent:1,children:!0},no=/@keyframes\s+([\w-]+)/,an=function(){function e(r,n,a){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var i=r.match(no);i&&i[1]?this.name=i[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=a;var o=a.scoped,s=a.sheet,f=a.generateId;this.id=o===!1?this.name:zn(f(this,s)),this.rules=new It(N({},a,{parent:this}));for(var l in n)this.rules.add(l,n[l],N({},a,{parent:this}));this.rules.process()}var t=e.prototype;return t.toString=function(n){n===void 0&&(n=Dt);var a=Pe(n),i=a.linebreak;if(n.indent==null&&(n.indent=Dt.indent),n.children==null&&(n.children=Dt.children),n.children===!1)return this.at+" "+this.id+" {}";var o=this.rules.toString(n);return o&&(o=""+i+o+i),this.at+" "+this.id+" {"+o+"}"},e}(),ro=/@keyframes\s+/,ao=/\$([\w-]+)/g,on=function(t,r){return typeof t=="string"?t.replace(ao,function(n,a){return a in r?r[a]:n}):t},vr=function(t,r,n){var a=t[r],i=on(a,n);i!==a&&(t[r]=i)},io={onCreateRule:function(t,r,n){return typeof t=="string"&&ro.test(t)?new an(t,r,n):null},onProcessStyle:function(t,r,n){return r.type!=="style"||!n||("animation-name"in t&&vr(t,"animation-name",n.keyframes),"animation"in t&&vr(t,"animation",n.keyframes)),t},onChangeValue:function(t,r,n){var a=n.options.sheet;if(!a)return t;switch(r){case"animation":return on(t,a.keyframes);case"animation-name":return on(t,a.keyframes);default:return t}}},oo=function(e){jn(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.toString=function(a){var i=this.options.sheet,o=i?i.options.link:!1,s=o?N({},a,{allowEmpty:!0}):a;return De(this.key,this.style,s)},t}(xa),so={onCreateRule:function(t,r,n){return n.parent&&n.parent.type==="keyframes"?new oo(t,r,n):null}},fo=function(){function e(r,n,a){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=r,this.style=n,this.options=a}var t=e.prototype;return t.toString=function(n){var a=Pe(n),i=a.linebreak;if(Array.isArray(this.style)){for(var o="",s=0;s<this.style.length;s++)o+=De(this.at,this.style[s]),this.style[s+1]&&(o+=i);return o}return De(this.at,this.style,n)},e}(),lo=/@font-face/,uo={onCreateRule:function(t,r,n){return lo.test(t)?new fo(t,r,n):null}},co=function(){function e(r,n,a){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=r,this.style=n,this.options=a}var t=e.prototype;return t.toString=function(n){return De(this.key,this.style,n)},e}(),mo={onCreateRule:function(t,r,n){return t==="@viewport"||t==="@-ms-viewport"?new co(t,r,n):null}},vo=function(){function e(r,n,a){this.type="simple",this.isProcessed=!1,this.key=r,this.value=n,this.options=a}var t=e.prototype;return t.toString=function(n){if(Array.isArray(this.value)){for(var a="",i=0;i<this.value.length;i++)a+=this.key+" "+this.value[i]+";",this.value[i+1]&&(a+=`
`);return a}return this.key+" "+this.value+";"},e}(),ho={"@charset":!0,"@import":!0,"@namespace":!0},po={onCreateRule:function(t,r,n){return t in ho?new vo(t,r,n):null}},hr=[Ji,to,io,so,uo,mo,po],go={process:!0},pr={force:!0,process:!0},It=function(){function e(r){this.map={},this.raw={},this.index=[],this.counter=0,this.options=r,this.classes=r.classes,this.keyframes=r.keyframes}var t=e.prototype;return t.add=function(n,a,i){var o=this.options,s=o.parent,f=o.sheet,l=o.jss,u=o.Renderer,c=o.generateId,m=o.scoped,h=N({classes:this.classes,parent:s,sheet:f,jss:l,Renderer:u,generateId:c,scoped:m,name:n,keyframes:this.keyframes,selector:void 0},i),g=n;n in this.raw&&(g=n+"-d"+this.counter++),this.raw[g]=a,g in this.classes&&(h.selector="."+zn(this.classes[g]));var b=Tt(g,a,h);if(!b)return null;this.register(b);var k=h.index===void 0?this.index.length:h.index;return this.index.splice(k,0,b),b},t.replace=function(n,a,i){var o=this.get(n),s=this.index.indexOf(o);o&&this.remove(o);var f=i;return s!==-1&&(f=N({},i,{index:s})),this.add(n,a,f)},t.get=function(n){return this.map[n]},t.remove=function(n){this.unregister(n),delete this.raw[n.key],this.index.splice(this.index.indexOf(n),1)},t.indexOf=function(n){return this.index.indexOf(n)},t.process=function(){var n=this.options.jss.plugins;this.index.slice(0).forEach(n.onProcessRule,n)},t.register=function(n){this.map[n.key]=n,n instanceof rn?(this.map[n.selector]=n,n.id&&(this.classes[n.key]=n.id)):n instanceof an&&this.keyframes&&(this.keyframes[n.name]=n.id)},t.unregister=function(n){delete this.map[n.key],n instanceof rn?(delete this.map[n.selector],delete this.classes[n.key]):n instanceof an&&delete this.keyframes[n.name]},t.update=function(){var n,a,i;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(n=arguments.length<=0?void 0:arguments[0],a=arguments.length<=1?void 0:arguments[1],i=arguments.length<=2?void 0:arguments[2]):(a=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],n=null),n)this.updateOne(this.get(n),a,i);else for(var o=0;o<this.index.length;o++)this.updateOne(this.index[o],a,i)},t.updateOne=function(n,a,i){i===void 0&&(i=go);var o=this.options,s=o.jss.plugins,f=o.sheet;if(n.rules instanceof e){n.rules.update(a,i);return}var l=n.style;if(s.onUpdate(a,n,f,i),i.process&&l&&l!==n.style){s.onProcessStyle(n.style,n,f);for(var u in n.style){var c=n.style[u],m=l[u];c!==m&&n.prop(u,c,pr)}for(var h in l){var g=n.style[h],b=l[h];g==null&&g!==b&&n.prop(h,null,pr)}}},t.toString=function(n){for(var a="",i=this.options.sheet,o=i?i.options.link:!1,s=Pe(n),f=s.linebreak,l=0;l<this.index.length;l++){var u=this.index[l],c=u.toString(n);!c&&!o||(a&&(a+=f),a+=c)}return a},e}(),wa=function(){function e(r,n){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=N({},n,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),n.Renderer&&(this.renderer=new n.Renderer(this)),this.rules=new It(this.options);for(var a in r)this.rules.add(a,r[a]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(n,a,i){var o=this.queue;this.attached&&!o&&(this.queue=[]);var s=this.rules.add(n,a,i);return s?(this.options.jss.plugins.onProcessRule(s),this.attached?(this.deployed&&(o?o.push(s):(this.insertRule(s),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),s):(this.deployed=!1,s)):null},t.replaceRule=function(n,a,i){var o=this.rules.get(n);if(!o)return this.addRule(n,a,i);var s=this.rules.replace(n,a,i);return s&&this.options.jss.plugins.onProcessRule(s),this.attached?(this.deployed&&this.renderer&&(s?o.renderable&&this.renderer.replaceRule(o.renderable,s):this.renderer.deleteRule(o)),s):(this.deployed=!1,s)},t.insertRule=function(n){this.renderer&&this.renderer.insertRule(n)},t.addRules=function(n,a){var i=[];for(var o in n){var s=this.addRule(o,n[o],a);s&&i.push(s)}return i},t.getRule=function(n){return this.rules.get(n)},t.deleteRule=function(n){var a=typeof n=="object"?n:this.rules.get(n);return!a||this.attached&&!a.renderable?!1:(this.rules.remove(a),this.attached&&a.renderable&&this.renderer?this.renderer.deleteRule(a.renderable):!0)},t.indexOf=function(n){return this.rules.indexOf(n)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var n;return(n=this.rules).update.apply(n,arguments),this},t.updateOne=function(n,a,i){return this.rules.updateOne(n,a,i),this},t.toString=function(n){return this.rules.toString(n)},e}(),bo=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(n,a,i){for(var o=0;o<this.registry.onCreateRule.length;o++){var s=this.registry.onCreateRule[o](n,a,i);if(s)return s}return null},t.onProcessRule=function(n){if(!n.isProcessed){for(var a=n.options.sheet,i=0;i<this.registry.onProcessRule.length;i++)this.registry.onProcessRule[i](n,a);n.style&&this.onProcessStyle(n.style,n,a),n.isProcessed=!0}},t.onProcessStyle=function(n,a,i){for(var o=0;o<this.registry.onProcessStyle.length;o++)a.style=this.registry.onProcessStyle[o](a.style,a,i)},t.onProcessSheet=function(n){for(var a=0;a<this.registry.onProcessSheet.length;a++)this.registry.onProcessSheet[a](n)},t.onUpdate=function(n,a,i,o){for(var s=0;s<this.registry.onUpdate.length;s++)this.registry.onUpdate[s](n,a,i,o)},t.onChangeValue=function(n,a,i){for(var o=n,s=0;s<this.registry.onChangeValue.length;s++)o=this.registry.onChangeValue[s](o,a,i);return o},t.use=function(n,a){a===void 0&&(a={queue:"external"});var i=this.plugins[a.queue];i.indexOf(n)===-1&&(i.push(n),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(o,s){for(var f in s)f in o&&o[f].push(s[f]);return o},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),yo=function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(n){var a=this.registry,i=n.options.index;if(a.indexOf(n)===-1){if(a.length===0||i>=this.index){a.push(n);return}for(var o=0;o<a.length;o++)if(a[o].options.index>i){a.splice(o,0,n);return}}},t.reset=function(){this.registry=[]},t.remove=function(n){var a=this.registry.indexOf(n);this.registry.splice(a,1)},t.toString=function(n){for(var a=n===void 0?{}:n,i=a.attached,o=yt(a,["attached"]),s=Pe(o),f=s.linebreak,l="",u=0;u<this.registry.length;u++){var c=this.registry[u];i!=null&&c.attached!==i||(l&&(l+=f),l+=c.toString(o))}return l},Fn(e,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),e}(),je=new yo,sn=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),fn="2f1acc6c3a606b082e5eef5e54414ffb";sn[fn]==null&&(sn[fn]=0);var gr=sn[fn]++,br=function(t){t===void 0&&(t={});var r=0,n=function(i,o){r+=1;var s="",f="";return o&&(o.options.classNamePrefix&&(f=o.options.classNamePrefix),o.options.jss.id!=null&&(s=String(o.options.jss.id))),t.minify?""+(f||"c")+gr+s+r:f+i.key+"-"+gr+(s?"-"+s:"")+"-"+r};return n},ka=function(t){var r;return function(){return r||(r=t()),r}},xo=function(t,r){try{return t.attributeStyleMap?t.attributeStyleMap.get(r):t.style.getPropertyValue(r)}catch{return""}},wo=function(t,r,n){try{var a=n;if(Array.isArray(n)&&(a=ce(n)),t.attributeStyleMap)t.attributeStyleMap.set(r,a);else{var i=a?a.indexOf("!important"):-1,o=i>-1?a.substr(0,i-1):a;t.style.setProperty(r,o,i>-1?"important":"")}}catch{return!1}return!0},ko=function(t,r){try{t.attributeStyleMap?t.attributeStyleMap.delete(r):t.style.removeProperty(r)}catch{}},So=function(t,r){return t.selectorText=r,t.selectorText===r},Sa=ka(function(){return document.querySelector("head")});function Po(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.attached&&n.options.index>t.index&&n.options.insertionPoint===t.insertionPoint)return n}return null}function Ro(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.attached&&n.options.insertionPoint===t.insertionPoint)return n}return null}function Oo(e){for(var t=Sa(),r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(n.nodeType===8&&n.nodeValue.trim()===e)return n}return null}function Eo(e){var t=je.registry;if(t.length>0){var r=Po(t,e);if(r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element};if(r=Ro(t,e),r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element.nextSibling}}var n=e.insertionPoint;if(n&&typeof n=="string"){var a=Oo(n);if(a)return{parent:a.parentNode,node:a.nextSibling}}return!1}function Ao(e,t){var r=t.insertionPoint,n=Eo(t);if(n!==!1&&n.parent){n.parent.insertBefore(e,n.node);return}if(r&&typeof r.nodeType=="number"){var a=r,i=a.parentNode;i&&i.insertBefore(e,a.nextSibling);return}Sa().appendChild(e)}var Co=ka(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),yr=function(t,r,n){try{"insertRule"in t?t.insertRule(r,n):"appendRule"in t&&t.appendRule(r)}catch{return!1}return t.cssRules[n]},xr=function(t,r){var n=t.cssRules.length;return r===void 0||r>n?n:r},To=function(){var t=document.createElement("style");return t.textContent=`
`,t},Io=function(){function e(r){this.getPropertyValue=xo,this.setProperty=wo,this.removeProperty=ko,this.setSelector=So,this.hasInsertedRules=!1,this.cssRules=[],r&&je.add(r),this.sheet=r;var n=this.sheet?this.sheet.options:{},a=n.media,i=n.meta,o=n.element;this.element=o||To(),this.element.setAttribute("data-jss",""),a&&this.element.setAttribute("media",a),i&&this.element.setAttribute("data-meta",i);var s=Co();s&&this.element.setAttribute("nonce",s)}var t=e.prototype;return t.attach=function(){if(!(this.element.parentNode||!this.sheet)){Ao(this.element,this.sheet.options);var n=Boolean(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&n&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(!!this.sheet){var n=this.element.parentNode;n&&n.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},t.deploy=function(){var n=this.sheet;if(!!n){if(n.options.link){this.insertRules(n.rules);return}this.element.textContent=`
`+n.toString()+`
`}},t.insertRules=function(n,a){for(var i=0;i<n.index.length;i++)this.insertRule(n.index[i],i,a)},t.insertRule=function(n,a,i){if(i===void 0&&(i=this.element.sheet),n.rules){var o=n,s=i;if(n.type==="conditional"||n.type==="keyframes"){var f=xr(i,a);if(s=yr(i,o.toString({children:!1}),f),s===!1)return!1;this.refCssRule(n,f,s)}return this.insertRules(o.rules,s),s}var l=n.toString();if(!l)return!1;var u=xr(i,a),c=yr(i,l,u);return c===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(n,u,c),c)},t.refCssRule=function(n,a,i){n.renderable=i,n.options.parent instanceof wa&&this.cssRules.splice(a,0,i)},t.deleteRule=function(n){var a=this.element.sheet,i=this.indexOf(n);return i===-1?!1:(a.deleteRule(i),this.cssRules.splice(i,1),!0)},t.indexOf=function(n){return this.cssRules.indexOf(n)},t.replaceRule=function(n,a){var i=this.indexOf(n);return i===-1?!1:(this.element.sheet.deleteRule(i),this.cssRules.splice(i,1),this.insertRule(a,i))},t.getRules=function(){return this.element.sheet.cssRules},e}(),No=0,jo=function(){function e(r){this.id=No++,this.version="10.10.0",this.plugins=new bo,this.options={id:{minify:!1},createGenerateId:br,Renderer:Se?Io:null,plugins:[]},this.generateId=br({minify:!1});for(var n=0;n<hr.length;n++)this.plugins.use(hr[n],{queue:"internal"});this.setup(r)}var t=e.prototype;return t.setup=function(n){return n===void 0&&(n={}),n.createGenerateId&&(this.options.createGenerateId=n.createGenerateId),n.id&&(this.options.id=N({},this.options.id,n.id)),(n.createGenerateId||n.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),n.insertionPoint!=null&&(this.options.insertionPoint=n.insertionPoint),"Renderer"in n&&(this.options.Renderer=n.Renderer),n.plugins&&this.use.apply(this,n.plugins),this},t.createStyleSheet=function(n,a){a===void 0&&(a={});var i=a,o=i.index;typeof o!="number"&&(o=je.index===0?0:je.index+1);var s=new wa(n,N({},a,{jss:this,generateId:a.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:o}));return this.plugins.onProcessSheet(s),s},t.removeStyleSheet=function(n){return n.detach(),je.remove(n),this},t.createRule=function(n,a,i){if(a===void 0&&(a={}),i===void 0&&(i={}),typeof n=="object")return this.createRule(void 0,n,a);var o=N({},i,{name:n,jss:this,Renderer:this.options.Renderer});o.generateId||(o.generateId=this.generateId),o.classes||(o.classes={}),o.keyframes||(o.keyframes={});var s=Tt(n,a,o);return s&&this.plugins.onProcessRule(s),s},t.use=function(){for(var n=this,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return i.forEach(function(s){n.plugins.use(s)}),this},e}(),Pa=function(t){return new jo(t)},wr=function(){function e(){this.length=0,this.sheets=new WeakMap}var t=e.prototype;return t.get=function(n){var a=this.sheets.get(n);return a&&a.sheet},t.add=function(n,a){this.sheets.has(n)||(this.length++,this.sheets.set(n,{sheet:a,refs:0}))},t.manage=function(n){var a=this.sheets.get(n);if(a)return a.refs===0&&a.sheet.attach(),a.refs++,a.sheet;lr(!1,"[JSS] SheetsManager: can't find sheet to manage")},t.unmanage=function(n){var a=this.sheets.get(n);a?a.refs>0&&(a.refs--,a.refs===0&&a.sheet.detach()):lr(!1,"SheetsManager: can't find sheet to unmanage")},Fn(e,[{key:"size",get:function(){return this.length}}]),e}(),Un=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Ra(e){var t=null;for(var r in e){var n=e[r],a=typeof n;if(a==="function")t||(t={}),t[r]=n;else if(a==="object"&&n!==null&&!Array.isArray(n)){var i=Ra(n);i&&(t||(t={}),t[r]=i)}}return t}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */Pa();var Oa=Date.now(),Ft="fnValues"+Oa,zt="fnStyle"+ ++Oa,_o=function(){return{onCreateRule:function(r,n,a){if(typeof n!="function")return null;var i=Tt(r,{},a);return i[zt]=n,i},onProcessStyle:function(r,n){if(Ft in n||zt in n)return r;var a={};for(var i in r){var o=r[i];typeof o=="function"&&(delete r[i],a[i]=o)}return n[Ft]=a,r},onUpdate:function(r,n,a,i){var o=n,s=o[zt];s&&(o.style=s(r)||{});var f=o[Ft];if(f)for(var l in f)o.prop(l,f[l](r),i)}}};const Mo=_o;function $o(e){var t,r=e.Symbol;return typeof r=="function"?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}var ge;typeof self<"u"?ge=self:typeof window<"u"?ge=window:typeof global<"u"?ge=global:typeof module<"u"?ge=module:ge=Function("return this")();var kr=$o(ge),Sr=function(t){return t&&t[kr]&&t===t[kr]()},Lo=function(t){return{onCreateRule:function(n,a,i){if(!Sr(a))return null;var o=a,s=Tt(n,{},i);return o.subscribe(function(f){for(var l in f)s.prop(l,f[l],t)}),s},onProcessRule:function(n){if(!(n&&n.type!=="style")){var a=n,i=a.style,o=function(u){var c=i[u];if(!Sr(c))return"continue";delete i[u],c.subscribe({next:function(h){a.prop(u,h,t)}})};for(var s in i)var f=o(s)}}}};const Do=Lo;var Fo=/;\n/,zo=function(t){for(var r={},n=t.split(Fo),a=0;a<n.length;a++){var i=(n[a]||"").trim();if(!!i){var o=i.indexOf(":");if(o!==-1){var s=i.substr(0,o).trim(),f=i.substr(o+1).trim();r[s]=f}}}return r},Uo=function(t){typeof t.style=="string"&&(t.style=zo(t.style))};function Wo(){return{onProcessRule:Uo}}var ee="@global",ln="@global ",Yo=function(){function e(r,n,a){this.type="global",this.at=ee,this.isProcessed=!1,this.key=r,this.options=a,this.rules=new It(N({},a,{parent:this}));for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var t=e.prototype;return t.getRule=function(n){return this.rules.get(n)},t.addRule=function(n,a,i){var o=this.rules.add(n,a,i);return o&&this.options.jss.plugins.onProcessRule(o),o},t.replaceRule=function(n,a,i){var o=this.rules.replace(n,a,i);return o&&this.options.jss.plugins.onProcessRule(o),o},t.indexOf=function(n){return this.rules.indexOf(n)},t.toString=function(n){return this.rules.toString(n)},e}(),Vo=function(){function e(r,n,a){this.type="global",this.at=ee,this.isProcessed=!1,this.key=r,this.options=a;var i=r.substr(ln.length);this.rule=a.jss.createRule(i,n,N({},a,{parent:this}))}var t=e.prototype;return t.toString=function(n){return this.rule?this.rule.toString(n):""},e}(),Ho=/\s*,\s*/g;function Ea(e,t){for(var r=e.split(Ho),n="",a=0;a<r.length;a++)n+=t+" "+r[a].trim(),r[a+1]&&(n+=", ");return n}function Go(e,t){var r=e.options,n=e.style,a=n?n[ee]:null;if(!!a){for(var i in a)t.addRule(i,a[i],N({},r,{selector:Ea(i,e.selector)}));delete n[ee]}}function Ko(e,t){var r=e.options,n=e.style;for(var a in n)if(!(a[0]!=="@"||a.substr(0,ee.length)!==ee)){var i=Ea(a.substr(ee.length),e.selector);t.addRule(i,n[a],N({},r,{selector:i})),delete n[a]}}function Bo(){function e(r,n,a){if(!r)return null;if(r===ee)return new Yo(r,n,a);if(r[0]==="@"&&r.substr(0,ln.length)===ln)return new Vo(r,n,a);var i=a.parent;return i&&(i.type==="global"||i.options.parent&&i.options.parent.type==="global")&&(a.scoped=!1),!a.selector&&a.scoped===!1&&(a.selector=r),null}function t(r,n){r.type!=="style"||!n||(Go(r,n),Ko(r,n))}return{onCreateRule:e,onProcessRule:t}}var ut=function(t){return t&&typeof t=="object"&&!Array.isArray(t)},Ut="extendCurrValue"+Date.now();function Xo(e,t,r,n){var a=typeof e.extend;if(a==="string"){if(!r)return;var i=r.getRule(e.extend);if(!i||i===t)return;var o=i.options.parent;if(o){var s=o.rules.raw[e.extend];fe(s,t,r,n)}return}if(Array.isArray(e.extend)){for(var f=0;f<e.extend.length;f++){var l=e.extend[f],u=typeof l=="string"?N({},e,{extend:l}):e.extend[f];fe(u,t,r,n)}return}for(var c in e.extend){if(c==="extend"){fe(e.extend.extend,t,r,n);continue}if(ut(e.extend[c])){c in n||(n[c]={}),fe(e.extend[c],t,r,n[c]);continue}n[c]=e.extend[c]}}function qo(e,t,r,n){for(var a in e)if(a!=="extend"){if(ut(n[a])&&ut(e[a])){fe(e[a],t,r,n[a]);continue}if(ut(e[a])){n[a]=fe(e[a],t,r);continue}n[a]=e[a]}}function fe(e,t,r,n){return n===void 0&&(n={}),Xo(e,t,r,n),qo(e,t,r,n),n}function Jo(){function e(r,n,a){return"extend"in r?fe(r,n,a):r}function t(r,n,a){if(n!=="extend")return r;if(r==null||r===!1){for(var i in a[Ut])a.prop(i,null);return a[Ut]=null,null}if(typeof r=="object"){for(var o in r)a.prop(o,r[o]);a[Ut]=r}return null}return{onProcessStyle:e,onChangeValue:t}}var Pr=/\s*,\s*/g,Zo=/&/g,Qo=/\$([\w-]+)/g;function es(){function e(a,i){return function(o,s){var f=a.getRule(s)||i&&i.getRule(s);return f?f.selector:s}}function t(a,i){for(var o=i.split(Pr),s=a.split(Pr),f="",l=0;l<o.length;l++)for(var u=o[l],c=0;c<s.length;c++){var m=s[c];f&&(f+=", "),f+=m.indexOf("&")!==-1?m.replace(Zo,u):u+" "+m}return f}function r(a,i,o){if(o)return N({},o,{index:o.index+1});var s=a.options.nestingLevel;s=s===void 0?1:s+1;var f=N({},a.options,{nestingLevel:s,index:i.indexOf(a)+1});return delete f.name,f}function n(a,i,o){if(i.type!=="style")return a;var s=i,f=s.options.parent,l,u;for(var c in a){var m=c.indexOf("&")!==-1,h=c[0]==="@";if(!(!m&&!h)){if(l=r(s,f,l),m){var g=t(c,s.selector);u||(u=e(f,o)),g=g.replace(Qo,u);var b=s.key+"-"+c;"replaceRule"in f?f.replaceRule(b,a[c],N({},l,{selector:g})):f.addRule(b,a[c],N({},l,{selector:g}))}else h&&f.addRule(c,{},l).addRule(s.key,a[c],{selector:s.selector});delete a[c]}}return a}return{onProcessStyle:n}}function un(e,t){if(!t)return!0;if(Array.isArray(t)){for(var r=0;r<t.length;r++){var n=un(e,t[r]);if(!n)return!1}return!0}if(t.indexOf(" ")>-1)return un(e,t.split(" "));var a=e.options.parent;if(t[0]==="$"){var i=a.getRule(t.substr(1));return!i||i===e?!1:(a.classes[e.key]+=" "+a.classes[i.key],!0)}return a.classes[e.key]+=" "+t,!0}function ts(){function e(t,r){return"composes"in t&&(un(r,t.composes),delete t.composes),t}return{onProcessStyle:e}}var ns=/[A-Z]/g,rs=/^ms-/,Wt={};function as(e){return"-"+e.toLowerCase()}function Aa(e){if(Wt.hasOwnProperty(e))return Wt[e];var t=e.replace(ns,as);return Wt[e]=rs.test(t)?"-"+t:t}function vt(e){var t={};for(var r in e){var n=r.indexOf("--")===0?r:Aa(r);t[n]=e[r]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(vt):t.fallbacks=vt(e.fallbacks)),t}function is(){function e(r){if(Array.isArray(r)){for(var n=0;n<r.length;n++)r[n]=vt(r[n]);return r}return vt(r)}function t(r,n,a){if(n.indexOf("--")===0)return r;var i=Aa(n);return n===i?r:(a.prop(i,r),null)}return{onProcessStyle:e,onChangeValue:t}}var d=Un&&CSS?CSS.px:"px",qe=Un&&CSS?CSS.ms:"ms",ve=Un&&CSS?CSS.percent:"%",os={"animation-delay":qe,"animation-duration":qe,"background-position":d,"background-position-x":d,"background-position-y":d,"background-size":d,border:d,"border-bottom":d,"border-bottom-left-radius":d,"border-bottom-right-radius":d,"border-bottom-width":d,"border-left":d,"border-left-width":d,"border-radius":d,"border-right":d,"border-right-width":d,"border-top":d,"border-top-left-radius":d,"border-top-right-radius":d,"border-top-width":d,"border-width":d,"border-block":d,"border-block-end":d,"border-block-end-width":d,"border-block-start":d,"border-block-start-width":d,"border-block-width":d,"border-inline":d,"border-inline-end":d,"border-inline-end-width":d,"border-inline-start":d,"border-inline-start-width":d,"border-inline-width":d,"border-start-start-radius":d,"border-start-end-radius":d,"border-end-start-radius":d,"border-end-end-radius":d,margin:d,"margin-bottom":d,"margin-left":d,"margin-right":d,"margin-top":d,"margin-block":d,"margin-block-end":d,"margin-block-start":d,"margin-inline":d,"margin-inline-end":d,"margin-inline-start":d,padding:d,"padding-bottom":d,"padding-left":d,"padding-right":d,"padding-top":d,"padding-block":d,"padding-block-end":d,"padding-block-start":d,"padding-inline":d,"padding-inline-end":d,"padding-inline-start":d,"mask-position-x":d,"mask-position-y":d,"mask-size":d,height:d,width:d,"min-height":d,"max-height":d,"min-width":d,"max-width":d,bottom:d,left:d,top:d,right:d,inset:d,"inset-block":d,"inset-block-end":d,"inset-block-start":d,"inset-inline":d,"inset-inline-end":d,"inset-inline-start":d,"box-shadow":d,"text-shadow":d,"column-gap":d,"column-rule":d,"column-rule-width":d,"column-width":d,"font-size":d,"font-size-delta":d,"letter-spacing":d,"text-decoration-thickness":d,"text-indent":d,"text-stroke":d,"text-stroke-width":d,"word-spacing":d,motion:d,"motion-offset":d,outline:d,"outline-offset":d,"outline-width":d,perspective:d,"perspective-origin-x":ve,"perspective-origin-y":ve,"transform-origin":ve,"transform-origin-x":ve,"transform-origin-y":ve,"transform-origin-z":ve,"transition-delay":qe,"transition-duration":qe,"vertical-align":d,"flex-basis":d,"shape-margin":d,size:d,gap:d,grid:d,"grid-gap":d,"row-gap":d,"grid-row-gap":d,"grid-column-gap":d,"grid-template-rows":d,"grid-template-columns":d,"grid-auto-rows":d,"grid-auto-columns":d,"box-shadow-x":d,"box-shadow-y":d,"box-shadow-blur":d,"box-shadow-spread":d,"font-line-height":d,"text-shadow-x":d,"text-shadow-y":d,"text-shadow-blur":d};function Ca(e){var t=/(-[a-z])/g,r=function(o){return o[1].toUpperCase()},n={};for(var a in e)n[a]=e[a],n[a.replace(t,r)]=e[a];return n}var ss=Ca(os);function _e(e,t,r){if(t==null)return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=_e(e,t[n],r);else if(typeof t=="object")if(e==="fallbacks")for(var a in t)t[a]=_e(a,t[a],r);else for(var i in t)t[i]=_e(e+"-"+i,t[i],r);else if(typeof t=="number"&&isNaN(t)===!1){var o=r[e]||ss[e];return o&&!(t===0&&o===d)?typeof o=="function"?o(t).toString():""+t+o:t.toString()}return t}function fs(e){e===void 0&&(e={});var t=Ca(e);function r(a,i){if(i.type!=="style")return a;for(var o in a)a[o]=_e(o,a[o],t);return a}function n(a,i){return _e(i,a,t)}return{onProcessStyle:r,onChangeValue:n}}var ls={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},us={position:!0,size:!0},Je={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,delay:null,"iteration-count":null,iterationCount:null,direction:null,"fill-mode":null,fillMode:null,"play-state":null,playState:null},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},Yt={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height","line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};function cs(e,t,r){return e.map(function(n){return Ia(n,t,r,!1,!0)})}function Ta(e,t,r,n){return r[t]==null?e:e.length===0?[]:Array.isArray(e[0])?Ta(e[0],t,r,n):typeof e[0]=="object"?cs(e,t,n):[e]}function Ia(e,t,r,n,a){if(!(Je[t]||Yt[t]))return[];var i=[];if(Yt[t]&&(e=ds(e,r,Yt[t],n)),Object.keys(e).length)for(var o in Je[t]){if(e[o]){Array.isArray(e[o])?i.push(us[o]===null?e[o]:e[o].join(" ")):i.push(e[o]);continue}Je[t][o]!=null&&i.push(Je[t][o])}return!i.length||a?i:[i]}function ds(e,t,r,n){for(var a in r){var i=r[a];if(typeof e[a]<"u"&&(n||!t.prop(i))){var o,s=Fe((o={},o[i]=e[a],o),t)[i];n?t.style.fallbacks[i]=s:t.style[i]=s}delete e[a]}return e}function Fe(e,t,r){for(var n in e){var a=e[n];if(Array.isArray(a)){if(!Array.isArray(a[0])){if(n==="fallbacks"){for(var i=0;i<e.fallbacks.length;i++)e.fallbacks[i]=Fe(e.fallbacks[i],t,!0);continue}e[n]=Ta(a,n,ls,t),e[n].length||delete e[n]}}else if(typeof a=="object"){if(n==="fallbacks"){e.fallbacks=Fe(e.fallbacks,t,!0);continue}e[n]=Ia(a,n,t,r),e[n].length||delete e[n]}else e[n]===""&&delete e[n]}return e}function ms(){function e(t,r){if(!t||r.type!=="style")return t;if(Array.isArray(t)){for(var n=0;n<t.length;n++)t[n]=Fe(t[n],r);return t}return Fe(t,r)}return{onProcessStyle:e}}function cn(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function vs(e){if(Array.isArray(e))return cn(e)}function hs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ps(e,t){if(!!e){if(typeof e=="string")return cn(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return cn(e,t)}}function gs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bs(e){return vs(e)||hs(e)||ps(e)||gs()}var Ce="",dn="",Na="",ja="",ys=Se&&"ontouchstart"in document.documentElement;if(Se){var Vt={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},xs=document.createElement("p"),Ht=xs.style,ws="Transform";for(var Gt in Vt)if(Gt+ws in Ht){Ce=Gt,dn=Vt[Gt];break}Ce==="Webkit"&&"msHyphens"in Ht&&(Ce="ms",dn=Vt.ms,ja="edge"),Ce==="Webkit"&&"-apple-trailing-word"in Ht&&(Na="apple")}var x={js:Ce,css:dn,vendor:Na,browser:ja,isTouch:ys};function ks(e){return e[1]==="-"||x.js==="ms"?e:"@"+x.css+"keyframes"+e.substr(10)}var Ss={noPrefill:["appearance"],supportedProperty:function(t){return t!=="appearance"?!1:x.js==="ms"?"-webkit-"+t:x.css+t}},Ps={noPrefill:["color-adjust"],supportedProperty:function(t){return t!=="color-adjust"?!1:x.js==="Webkit"?x.css+"print-"+t:t}},Rs=/[-\s]+(.)?/g;function Os(e,t){return t?t.toUpperCase():""}function Wn(e){return e.replace(Rs,Os)}function te(e){return Wn("-"+e)}var Es={noPrefill:["mask"],supportedProperty:function(t,r){if(!/^mask/.test(t))return!1;if(x.js==="Webkit"){var n="mask-image";if(Wn(n)in r)return t;if(x.js+te(n)in r)return x.css+t}return t}},As={noPrefill:["text-orientation"],supportedProperty:function(t){return t!=="text-orientation"?!1:x.vendor==="apple"&&!x.isTouch?x.css+t:t}},Cs={noPrefill:["transform"],supportedProperty:function(t,r,n){return t!=="transform"?!1:n.transform?t:x.css+t}},Ts={noPrefill:["transition"],supportedProperty:function(t,r,n){return t!=="transition"?!1:n.transition?t:x.css+t}},Is={noPrefill:["writing-mode"],supportedProperty:function(t){return t!=="writing-mode"?!1:x.js==="Webkit"||x.js==="ms"&&x.browser!=="edge"?x.css+t:t}},Ns={noPrefill:["user-select"],supportedProperty:function(t){return t!=="user-select"?!1:x.js==="Moz"||x.js==="ms"||x.vendor==="apple"?x.css+t:t}},js={supportedProperty:function(t,r){if(!/^break-/.test(t))return!1;if(x.js==="Webkit"){var n="WebkitColumn"+te(t);return n in r?x.css+"column-"+t:!1}if(x.js==="Moz"){var a="page"+te(t);return a in r?"page-"+t:!1}return!1}},_s={supportedProperty:function(t,r){if(!/^(border|margin|padding)-inline/.test(t))return!1;if(x.js==="Moz")return t;var n=t.replace("-inline","");return x.js+te(n)in r?x.css+n:!1}},Ms={supportedProperty:function(t,r){return Wn(t)in r?t:!1}},$s={supportedProperty:function(t,r){var n=te(t);return t[0]==="-"||t[0]==="-"&&t[1]==="-"?t:x.js+n in r?x.css+t:x.js!=="Webkit"&&"Webkit"+n in r?"-webkit-"+t:!1}},Ls={supportedProperty:function(t){return t.substring(0,11)!=="scroll-snap"?!1:x.js==="ms"?""+x.css+t:t}},Ds={supportedProperty:function(t){return t!=="overscroll-behavior"?!1:x.js==="ms"?x.css+"scroll-chaining":t}},Fs={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},zs={supportedProperty:function(t,r){var n=Fs[t];return n&&x.js+te(n)in r?x.css+n:!1}},_a={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},Us=Object.keys(_a),Ws=function(t){return x.css+t},Ys={supportedProperty:function(t,r,n){var a=n.multiple;if(Us.indexOf(t)>-1){var i=_a[t];if(!Array.isArray(i))return x.js+te(i)in r?x.css+i:!1;if(!a)return!1;for(var o=0;o<i.length;o++)if(!(x.js+te(i[0])in r))return!1;return i.map(Ws)}return!1}},Ma=[Ss,Ps,Es,As,Cs,Ts,Is,Ns,js,_s,Ms,$s,Ls,Ds,zs,Ys],Rr=Ma.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),Vs=Ma.filter(function(e){return e.noPrefill}).reduce(function(e,t){return e.push.apply(e,bs(t.noPrefill)),e},[]),Te,oe={};if(Se){Te=document.createElement("p");var Kt=window.getComputedStyle(document.documentElement,"");for(var Bt in Kt)isNaN(Bt)||(oe[Kt[Bt]]=Kt[Bt]);Vs.forEach(function(e){return delete oe[e]})}function mn(e,t){if(t===void 0&&(t={}),!Te)return e;if(oe[e]!=null)return oe[e];(e==="transition"||e==="transform")&&(t[e]=e in Te.style);for(var r=0;r<Rr.length&&(oe[e]=Rr[r](e,Te.style,t),!oe[e]);r++);try{Te.style[e]=""}catch{return!1}return oe[e]}var he={},Hs={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},Gs=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,J;function Ks(e,t,r){if(t==="var")return"var";if(t==="all")return"all";if(r==="all")return", all";var n=t?mn(t):", "+mn(r);return n||t||r}Se&&(J=document.createElement("p"));function Or(e,t){var r=t;if(!J||e==="content")return t;if(typeof r!="string"||!isNaN(parseInt(r,10)))return r;var n=e+r;if(he[n]!=null)return he[n];try{J.style[e]=r}catch{return he[n]=!1,!1}if(Hs[e])r=r.replace(Gs,Ks);else if(J.style[e]===""&&(r=x.css+r,r==="-ms-flex"&&(J.style[e]="-ms-flexbox"),J.style[e]=r,J.style[e]===""))return he[n]=!1,!1;return J.style[e]="",he[n]=r,he[n]}function Bs(){function e(a){if(a.type==="keyframes"){var i=a;i.at=ks(i.at)}}function t(a){for(var i in a){var o=a[i];if(i==="fallbacks"&&Array.isArray(o)){a[i]=o.map(t);continue}var s=!1,f=mn(i);f&&f!==i&&(s=!0);var l=!1,u=Or(f,ce(o));u&&u!==o&&(l=!0),(s||l)&&(s&&delete a[i],a[f||i]=u||o)}return a}function r(a,i){return i.type!=="style"?a:t(a)}function n(a,i){return Or(i,ce(a))||a}return{onProcessRule:e,onProcessStyle:r,onChangeValue:n}}function Xs(){var e=function(r,n){return r.length===n.length?r>n?1:-1:r.length-n.length};return{onProcessStyle:function(r,n){if(n.type!=="style")return r;for(var a={},i=Object.keys(r).sort(e),o=0;o<i.length;o++)a[i[o]]=r[i[o]];return a}}}var qs=function(t){return t===void 0&&(t={}),{plugins:[Mo(),Do(t.observable),Wo(),Bo(),Jo(),es(),ts(),is(),fs(t.defaultUnit),ms(),Bs(),Xs()]}};const Js=qs;var Zs=Number.MIN_SAFE_INTEGER||-1e9,Qs=function(){return Zs++},ef=y.exports.createContext({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!Se}),Er=new Map,Yn=function(t,r){var n=t.managers;if(n)return n[r]||(n[r]=new wr),n[r];var a=Er.get(r);return a||(a=new wr,Er.set(r,a)),a},Ar=function(t){var r=t.sheet,n=t.context,a=t.index,i=t.theme;if(!!r){var o=Yn(n,a);o.manage(i),n.registry&&n.registry.add(r)}},tf=function(t){if(!!t.sheet){var r=Yn(t.context,t.index);r.unmanage(t.theme)}},nf=Pa(Js()),$a=new WeakMap,La=function(t){return $a.get(t)},rf=function(t,r){$a.set(t,r)},af=function(t){var r=t.styles;return typeof r!="function"?r:r(t.theme)};function of(e,t){var r;e.context.id&&e.context.id.minify!=null&&(r=e.context.id.minify);var n=e.context.classNamePrefix||"";e.name&&!r&&(n+=e.name.replace(/\s/g,"-")+"-");var a="";return e.name&&(a=e.name+", "),a+=typeof e.styles=="function"?"Themed":"Unthemed",N({},e.sheetOptions,{index:e.index,meta:a,classNamePrefix:n,link:t,generateId:e.sheetOptions&&e.sheetOptions.generateId?e.sheetOptions.generateId:e.context.generateId})}var sf=function(t){if(!t.context.disableStylesGeneration){var r=Yn(t.context,t.index),n=r.get(t.theme);if(n)return n;var a=t.context.jss||nf,i=af(t),o=Ra(i),s=a.createStyleSheet(i,of(t,o!==null));return rf(s,{dynamicStyles:o,styles:i}),r.add(t.theme,s),s}},ff=function(t,r){for(var n in r)t.deleteRule(r[n])},lf=function(t,r,n){for(var a in n)r.updateOne(n[a],t)},uf=function(t,r){var n=La(t);if(!!n){var a={};for(var i in n.dynamicStyles)for(var o=t.rules.index.length,s=t.addRule(i,n.dynamicStyles[i]),f=o;f<t.rules.index.length;f++){var l=t.rules.index[f];t.updateOne(l,r),a[s===l?i:l.key]=l}return a}},cf=function(t,r){if(!r)return t.classes;var n=La(t);if(!n)return t.classes;var a={};for(var i in n.styles)a[i]=t.classes[i],i in r&&(a[i]+=" "+t.classes[r[i].key]);return a};function Cr(e){return e?y.exports.useEffect:E.useInsertionEffect||y.exports.useLayoutEffect}var Xt={},df=function(t,r){r===void 0&&(r={});var n=r,a=n.index,i=a===void 0?Qs():a,o=n.theming,s=n.name,f=yt(n,["index","theming","name"]),l=o&&o.context||ya,u=function(h){return typeof t=="function"&&(h||y.exports.useContext(l))||Xt},c={};return function(h){var g=y.exports.useRef(!0),b=y.exports.useContext(ef),k=u(h&&h.theme),A=y.exports.useMemo(function(){var O=sf({context:b,styles:t,name:s,theme:k,index:i,sheetOptions:f});return O&&b.isSSR&&Ar({index:i,context:b,sheet:O,theme:k}),[O,O?uf(O,h):null]},[b,k]),S=A[0],P=A[1];Cr(b.isSSR)(function(){S&&P&&!g.current&&lf(h,S,P)},[h]),Cr(b.isSSR)(function(){return S&&Ar({index:i,context:b,sheet:S,theme:k}),function(){S&&(tf({index:i,context:b,sheet:S,theme:k}),P&&ff(S,P))}},[S]);var _=y.exports.useMemo(function(){return S&&P?cf(S,P):c},[S,P]);return y.exports.useDebugValue(_),y.exports.useDebugValue(k===Xt?"No theme":k),y.exports.useEffect(function(){g.current=!1}),_}};function Tr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Tr(Object(r),!0).forEach(function(n){j(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tr(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ht(e){return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(e)}function mf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ir(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function vf(e,t,r){return t&&Ir(e.prototype,t),r&&Ir(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vn(e,t){return pf(e)||bf(e,t)||Da(e,t)||xf()}function He(e){return hf(e)||gf(e)||Da(e)||yf()}function hf(e){if(Array.isArray(e))return vn(e)}function pf(e){if(Array.isArray(e))return e}function gf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bf(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,i=!1,o,s;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(n.push(o.value),!(t&&n.length===t));a=!0);}catch(f){i=!0,s=f}finally{try{!a&&r.return!=null&&r.return()}finally{if(i)throw s}}return n}}function Da(e,t){if(!!e){if(typeof e=="string")return vn(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return vn(e,t)}}function vn(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function yf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nr=function(){},Hn={},Fa={},za=null,Ua={mark:Nr,measure:Nr};try{typeof window<"u"&&(Hn=window),typeof document<"u"&&(Fa=document),typeof MutationObserver<"u"&&(za=MutationObserver),typeof performance<"u"&&(Ua=performance)}catch{}var wf=Hn.navigator||{},jr=wf.userAgent,_r=jr===void 0?"":jr,ne=Hn,T=Fa,Mr=za,Ze=Ua;ne.document;var G=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Wa=~_r.indexOf("MSIE")||~_r.indexOf("Trident/"),Qe,et,tt,nt,rt,Y="___FONT_AWESOME___",hn=16,Ya="fa",Va="svg-inline--fa",de="data-fa-i2svg",pn="data-fa-pseudo-element",kf="data-fa-pseudo-element-pending",Gn="data-prefix",Kn="data-icon",$r="fontawesome-i2svg",Sf="async",Pf=["HTML","HEAD","STYLE","SCRIPT"],Ha=function(){try{return!0}catch{return!1}}(),C="classic",I="sharp",Bn=[C,I];function Ge(e){return new Proxy(e,{get:function(r,n){return n in r?r[n]:r[C]}})}var ze=Ge((Qe={},j(Qe,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),j(Qe,I,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Qe)),Ue=Ge((et={},j(et,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),j(et,I,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),et)),We=Ge((tt={},j(tt,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),j(tt,I,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),tt)),Rf=Ge((nt={},j(nt,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),j(nt,I,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),nt)),Of=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ga="fa-layers-text",Ef=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Af=Ge((rt={},j(rt,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),j(rt,I,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),rt)),Ka=[1,2,3,4,5,6,7,8,9,10],Cf=Ka.concat([11,12,13,14,15,16,17,18,19,20]),Tf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ye=new Set;Object.keys(Ue[C]).map(Ye.add.bind(Ye));Object.keys(Ue[I]).map(Ye.add.bind(Ye));var If=[].concat(Bn,He(Ye),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(Ka.map(function(e){return"".concat(e,"x")})).concat(Cf.map(function(e){return"w-".concat(e)})),Me=ne.FontAwesomeConfig||{};function Nf(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var _f=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_f.forEach(function(e){var t=Vn(e,2),r=t[0],n=t[1],a=jf(Nf(r));a!=null&&(Me[n]=a)})}var Ba={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ya,replacementClass:Va,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Me.familyPrefix&&(Me.cssPrefix=Me.familyPrefix);var ke=v(v({},Ba),Me);ke.autoReplaceSvg||(ke.observeMutations=!1);var p={};Object.keys(Ba).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(r){ke[e]=r,$e.forEach(function(n){return n(p)})},get:function(){return ke[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){ke.cssPrefix=t,$e.forEach(function(r){return r(p)})},get:function(){return ke.cssPrefix}});ne.FontAwesomeConfig=p;var $e=[];function Mf(e){return $e.push(e),function(){$e.splice($e.indexOf(e),1)}}var q=hn,W={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $f(e){if(!(!e||!G)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=T.head.childNodes,n=null,a=r.length-1;a>-1;a--){var i=r[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return T.head.insertBefore(t,n),e}}var Lf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ve(){for(var e=12,t="";e-- >0;)t+=Lf[Math.random()*62|0];return t}function Re(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Xn(e){return e.classList?Re(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Df(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Xa(e[r]),'" ')},"").trim()}function Nt(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function qn(e){return e.size!==W.size||e.x!==W.x||e.y!==W.y||e.rotate!==W.rotate||e.flipX||e.flipY}function Ff(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:f,path:l}}function zf(e){var t=e.transform,r=e.width,n=r===void 0?hn:r,a=e.height,i=a===void 0?hn:a,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&Wa?f+="translate(".concat(t.x/q-n/2,"em, ").concat(t.y/q-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/q,"em), calc(-50% + ").concat(t.y/q,"em)) "):f+="translate(".concat(t.x/q,"em, ").concat(t.y/q,"em) "),f+="scale(".concat(t.size/q*(t.flipX?-1:1),", ").concat(t.size/q*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Uf=`:root, :host {
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
}`;function qa(){var e=Ya,t=Va,r=p.cssPrefix,n=p.replacementClass,a=Uf;if(r!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(n))}return a}var Lr=!1;function qt(){p.autoAddCss&&!Lr&&($f(qa()),Lr=!0)}var Wf={mixout:function(){return{dom:{css:qa,insertCss:qt}}},hooks:function(){return{beforeDOMElementCreation:function(){qt()},beforeI2svg:function(){qt()}}}},V=ne||{};V[Y]||(V[Y]={});V[Y].styles||(V[Y].styles={});V[Y].hooks||(V[Y].hooks={});V[Y].shims||(V[Y].shims=[]);var U=V[Y],Ja=[],Yf=function e(){T.removeEventListener("DOMContentLoaded",e),pt=1,Ja.map(function(t){return t()})},pt=!1;G&&(pt=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),pt||T.addEventListener("DOMContentLoaded",Yf));function Vf(e){!G||(pt?setTimeout(e,0):Ja.push(e))}function Ke(e){var t=e.tag,r=e.attributes,n=r===void 0?{}:r,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xa(e):"<".concat(t," ").concat(Df(n),">").concat(i.map(Ke).join(""),"</").concat(t,">")}function Dr(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var Hf=function(t,r){return function(n,a,i,o){return t.call(r,n,a,i,o)}},Jt=function(t,r,n,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Hf(r,a):r,f,l,u;for(n===void 0?(f=1,u=t[i[0]]):(f=0,u=n);f<o;f++)l=i[f],u=s(u,t[l],l,t);return u};function Gf(e){for(var t=[],r=0,n=e.length;r<n;){var a=e.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){var i=e.charCodeAt(r++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),r--)}else t.push(a)}return t}function gn(e){var t=Gf(e);return t.length===1?t[0].toString(16):null}function Kf(e,t){var r=e.length,n=e.charCodeAt(t),a;return n>=55296&&n<=56319&&r>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function Fr(e){return Object.keys(e).reduce(function(t,r){var n=e[r],a=!!n.icon;return a?t[n.iconName]=n.icon:t[r]=n,t},{})}function bn(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,a=n===void 0?!1:n,i=Fr(t);typeof U.hooks.addPack=="function"&&!a?U.hooks.addPack(e,Fr(t)):U.styles[e]=v(v({},U.styles[e]||{}),i),e==="fas"&&bn("fa",t)}var at,it,ot,be=U.styles,Bf=U.shims,Xf=(at={},j(at,C,Object.values(We[C])),j(at,I,Object.values(We[I])),at),Jn=null,Za={},Qa={},ei={},ti={},ni={},qf=(it={},j(it,C,Object.keys(ze[C])),j(it,I,Object.keys(ze[I])),it);function Jf(e){return~If.indexOf(e)}function Zf(e,t){var r=t.split("-"),n=r[0],a=r.slice(1).join("-");return n===e&&a!==""&&!Jf(a)?a:null}var ri=function(){var t=function(i){return Jt(be,function(o,s,f){return o[f]=Jt(s,i,{}),o},{})};Za=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){a[f.toString(16)]=o})}return a}),Qa=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){a[f]=o})}return a}),ni=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(f){a[f]=o}),a});var r="far"in be||p.autoFetchSvg,n=Jt(Bf,function(a,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!r&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:f}),a},{names:{},unicodes:{}});ei=n.names,ti=n.unicodes,Jn=jt(p.styleDefault,{family:p.familyDefault})};Mf(function(e){Jn=jt(e.styleDefault,{family:p.familyDefault})});ri();function Zn(e,t){return(Za[e]||{})[t]}function Qf(e,t){return(Qa[e]||{})[t]}function ue(e,t){return(ni[e]||{})[t]}function ai(e){return ei[e]||{prefix:null,iconName:null}}function el(e){var t=ti[e],r=Zn("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function re(){return Jn}var Qn=function(){return{prefix:null,iconName:null,rest:[]}};function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.family,n=r===void 0?C:r,a=ze[n][e],i=Ue[n][e]||Ue[n][a],o=e in U.styles?e:null;return i||o||null}var zr=(ot={},j(ot,C,Object.keys(We[C])),j(ot,I,Object.keys(We[I])),ot);function _t(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.skipLookups,a=n===void 0?!1:n,i=(t={},j(t,C,"".concat(p.cssPrefix,"-").concat(C)),j(t,I,"".concat(p.cssPrefix,"-").concat(I)),t),o=null,s=C;(e.includes(i[C])||e.some(function(l){return zr[C].includes(l)}))&&(s=C),(e.includes(i[I])||e.some(function(l){return zr[I].includes(l)}))&&(s=I);var f=e.reduce(function(l,u){var c=Zf(p.cssPrefix,u);if(be[u]?(u=Xf[s].includes(u)?Rf[s][u]:u,o=u,l.prefix=u):qf[s].indexOf(u)>-1?(o=u,l.prefix=jt(u,{family:s})):c?l.iconName=c:u!==p.replacementClass&&u!==i[C]&&u!==i[I]&&l.rest.push(u),!a&&l.prefix&&l.iconName){var m=o==="fa"?ai(l.iconName):{},h=ue(l.prefix,l.iconName);m.prefix&&(o=null),l.iconName=m.iconName||h||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!be.far&&be.fas&&!p.autoFetchSvg&&(l.prefix="fas")}return l},Qn());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===I&&(be.fass||p.autoFetchSvg)&&(f.prefix="fass",f.iconName=ue(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=re()||"fas"),f}var tl=function(){function e(){mf(this,e),this.definitions={}}return vf(e,[{key:"add",value:function(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){r.definitions[s]=v(v({},r.definitions[s]||{}),o[s]),bn(s,o[s]);var f=We[C][s];f&&bn(f,o[s]),ri()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,l=o.icon,u=l[2];r[s]||(r[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(r[s][c]=l)}),r[s][f]=l}),r}}]),e}(),Ur=[],ye={},we={},nl=Object.keys(we);function rl(e,t){var r=t.mixoutsTo;return Ur=e,ye={},Object.keys(we).forEach(function(n){nl.indexOf(n)===-1&&delete we[n]}),Ur.forEach(function(n){var a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(r[o]=a[o]),ht(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){r[o]||(r[o]={}),r[o][s]=a[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){ye[o]||(ye[o]=[]),ye[o].push(i[o])})}n.provides&&n.provides(we)}),r}function yn(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];var i=ye[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function me(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=ye[e]||[];a.forEach(function(i){i.apply(null,r)})}function H(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return we[e]?we[e].apply(null,t):void 0}function xn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,r=e.prefix||re();if(!!t)return t=ue(r,t)||t,Dr(ii.definitions,r,t)||Dr(U.styles,r,t)}var ii=new tl,al=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,me("noAuto")},il={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(me("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Vf(function(){sl({autoReplaceSvgRoot:r}),me("watch",t)})}},ol={icon:function(t){if(t===null)return null;if(ht(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ue(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=jt(t[0]);return{prefix:n,iconName:ue(n,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Of))){var a=_t(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||re(),iconName:ue(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=re();return{prefix:i,iconName:ue(i,t)||t}}}},D={noAuto:al,config:p,dom:il,parse:ol,library:ii,findIconDefinition:xn,toHtml:Ke},sl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot,n=r===void 0?T:r;(Object.keys(U.styles).length>0||p.autoFetchSvg)&&G&&p.autoReplaceSvg&&D.dom.i2svg({node:n})};function Mt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Ke(n)})}}),Object.defineProperty(e,"node",{get:function(){if(!!G){var n=T.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function fl(e){var t=e.children,r=e.main,n=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(qn(o)&&r.found&&!n.found){var s=r.width,f=r.height,l={x:s/f/2,y:.5};a.style=Nt(v(v({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ll(e){var t=e.prefix,r=e.iconName,n=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},a),{},{id:o}),children:n}]}]}function er(e){var t=e.icons,r=t.main,n=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,l=e.maskId,u=e.titleId,c=e.extra,m=e.watchable,h=m===void 0?!1:m,g=n.found?n:r,b=g.width,k=g.height,A=a==="fak",S=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(B){return c.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(c.classes).join(" "),P={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(k)})},_=A&&!~c.classes.indexOf("fa-fw")?{width:"".concat(b/k*16*.0625,"em")}:{};h&&(P.attributes[de]=""),f&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Ve())},children:[f]}),delete P.attributes.title);var O=v(v({},P),{},{prefix:a,iconName:i,main:r,mask:n,maskId:l,transform:o,symbol:s,styles:v(v({},_),c.styles)}),$=n.found&&r.found?H("generateAbstractMask",O)||{children:[],attributes:{}}:H("generateAbstractIcon",O)||{children:[],attributes:{}},z=$.children,$t=$.attributes;return O.children=z,O.attributes=$t,s?ll(O):fl(O)}function Wr(e){var t=e.content,r=e.width,n=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,l=v(v(v({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[de]="");var u=v({},o.styles);qn(a)&&(u.transform=zf({transform:a,startCentered:!0,width:r,height:n}),u["-webkit-transform"]=u.transform);var c=Nt(u);c.length>0&&(l.style=c);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function ul(e){var t=e.content,r=e.title,n=e.extra,a=v(v(v({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),i=Nt(n.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),r&&o.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),o}var Zt=U.styles;function wn(e){var t=e[0],r=e[1],n=e.slice(4),a=Vn(n,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(le.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(le.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:r,icon:o}}var cl={found:!1,width:512,height:512};function dl(e,t){!Ha&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function kn(e,t){var r=t;return t==="fa"&&p.styleDefault!==null&&(t=re()),new Promise(function(n,a){if(H("missingIconAbstract"),r==="fa"){var i=ai(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Zt[t]&&Zt[t][e]){var o=Zt[t][e];return n(wn(o))}dl(e,t),n(v(v({},cl),{},{icon:p.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}var Yr=function(){},Sn=p.measurePerformance&&Ze&&Ze.mark&&Ze.measure?Ze:{mark:Yr,measure:Yr},Ie='FA "6.5.1"',ml=function(t){return Sn.mark("".concat(Ie," ").concat(t," begins")),function(){return oi(t)}},oi=function(t){Sn.mark("".concat(Ie," ").concat(t," ends")),Sn.measure("".concat(Ie," ").concat(t),"".concat(Ie," ").concat(t," begins"),"".concat(Ie," ").concat(t," ends"))},tr={begin:ml,end:oi},ct=function(){};function Vr(e){var t=e.getAttribute?e.getAttribute(de):null;return typeof t=="string"}function vl(e){var t=e.getAttribute?e.getAttribute(Gn):null,r=e.getAttribute?e.getAttribute(Kn):null;return t&&r}function hl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function pl(){if(p.autoReplaceSvg===!0)return dt.replace;var e=dt[p.autoReplaceSvg];return e||dt.replace}function gl(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function bl(e){return T.createElement(e)}function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.ceFn,n=r===void 0?e.tag==="svg"?gl:bl:r;if(typeof e=="string")return T.createTextNode(e);var a=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(si(o,{ceFn:n}))}),a}function yl(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var dt={replace:function(t){var r=t[0];if(r.parentNode)if(t[1].forEach(function(a){r.parentNode.insertBefore(si(a),r)}),r.getAttribute(de)===null&&p.keepOriginalSource){var n=T.createComment(yl(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(t){var r=t[0],n=t[1];if(~Xn(r).indexOf(p.replacementClass))return dt.replace(t);var a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,f){return f===p.replacementClass||f.match(a)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return Ke(s)}).join(`
`);r.setAttribute(de,""),r.innerHTML=o}};function Hr(e){e()}function fi(e,t){var r=typeof t=="function"?t:ct;if(e.length===0)r();else{var n=Hr;p.mutateApproach===Sf&&(n=ne.requestAnimationFrame||Hr),n(function(){var a=pl(),i=tr.begin("mutate");e.map(a),i(),r()})}}var nr=!1;function li(){nr=!0}function Pn(){nr=!1}var gt=null;function Gr(e){if(!!Mr&&!!p.observeMutations){var t=e.treeCallback,r=t===void 0?ct:t,n=e.nodeCallback,a=n===void 0?ct:n,i=e.pseudoElementsCallback,o=i===void 0?ct:i,s=e.observeMutationsRoot,f=s===void 0?T:s;gt=new Mr(function(l){if(!nr){var u=re();Re(l).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Vr(c.addedNodes[0])&&(p.searchPseudoElements&&o(c.target),r(c.target)),c.type==="attributes"&&c.target.parentNode&&p.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Vr(c.target)&&~Tf.indexOf(c.attributeName))if(c.attributeName==="class"&&vl(c.target)){var m=_t(Xn(c.target)),h=m.prefix,g=m.iconName;c.target.setAttribute(Gn,h||u),g&&c.target.setAttribute(Kn,g)}else hl(c.target)&&a(c.target)})}}),G&&gt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xl(){!gt||gt.disconnect()}function wl(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(n,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),r}function kl(e){var t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",a=_t(Xn(e));return a.prefix||(a.prefix=re()),t&&r&&(a.prefix=t,a.iconName=r),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=Qf(a.prefix,e.innerText)||Zn(a.prefix,gn(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Sl(e){var t=Re(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),r=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return p.autoA11y&&(r?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(n||Ve()):(t["aria-hidden"]="true",t.focusable="false")),t}function Pl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:W,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=kl(e),n=r.iconName,a=r.prefix,i=r.rest,o=Sl(e),s=yn("parseNodeAttributes",{},e),f=t.styleParser?wl(e):[];return v({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:W,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Rl=U.styles;function ui(e){var t=p.autoReplaceSvg==="nest"?Kr(e,{styleParser:!1}):Kr(e);return~t.extra.classes.indexOf(Ga)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}var ae=new Set;Bn.map(function(e){ae.add("fa-".concat(e))});Object.keys(ze[C]).map(ae.add.bind(ae));Object.keys(ze[I]).map(ae.add.bind(ae));ae=He(ae);function Br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();var r=T.documentElement.classList,n=function(c){return r.add("".concat($r,"-").concat(c))},a=function(c){return r.remove("".concat($r,"-").concat(c))},i=p.autoFetchSvg?ae:Bn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Rl));i.includes("fa")||i.push("fa");var o=[".".concat(Ga,":not([").concat(de,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(de,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Re(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();var f=tr.begin("onTree"),l=s.reduce(function(u,c){try{var m=ui(c);m&&u.push(m)}catch(h){Ha||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,c){Promise.all(l).then(function(m){fi(m,function(){n("active"),n("complete"),a("pending"),typeof t=="function"&&t(),f(),u()})}).catch(function(m){f(),c(m)})})}function Ol(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ui(e).then(function(r){r&&fi([r],t)})}function El(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:xn(t||{}),a=r.mask;return a&&(a=(a||{}).icon?a:xn(a||{})),e(n,v(v({},r),{},{mask:a}))}}var Al=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,a=n===void 0?W:n,i=r.symbol,o=i===void 0?!1:i,s=r.mask,f=s===void 0?null:s,l=r.maskId,u=l===void 0?null:l,c=r.title,m=c===void 0?null:c,h=r.titleId,g=h===void 0?null:h,b=r.classes,k=b===void 0?[]:b,A=r.attributes,S=A===void 0?{}:A,P=r.styles,_=P===void 0?{}:P;if(!!t){var O=t.prefix,$=t.iconName,z=t.icon;return Mt(v({type:"icon"},t),function(){return me("beforeDOMElementCreation",{iconDefinition:t,params:r}),p.autoA11y&&(m?S["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(g||Ve()):(S["aria-hidden"]="true",S.focusable="false")),er({icons:{main:wn(z),mask:f?wn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:$,transform:v(v({},W),a),symbol:o,title:m,maskId:u,titleId:g,extra:{attributes:S,styles:_,classes:k}})})}},Cl={mixout:function(){return{icon:El(Al)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=Br,r.nodeCallback=Ol,r}}},provides:function(t){t.i2svg=function(r){var n=r.node,a=n===void 0?T:n,i=r.callback,o=i===void 0?function(){}:i;return Br(a,o)},t.generateSvgReplacementMutation=function(r,n){var a=n.iconName,i=n.title,o=n.titleId,s=n.prefix,f=n.transform,l=n.symbol,u=n.mask,c=n.maskId,m=n.extra;return new Promise(function(h,g){Promise.all([kn(a,s),u.iconName?kn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var k=Vn(b,2),A=k[0],S=k[1];h([r,er({icons:{main:A,mask:S},prefix:s,iconName:a,transform:f,symbol:l,maskId:c,title:i,titleId:o,extra:m,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(r){var n=r.children,a=r.attributes,i=r.main,o=r.transform,s=r.styles,f=Nt(s);f.length>0&&(a.style=f);var l;return qn(o)&&(l=H("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:a}}}},Tl={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.classes,i=a===void 0?[]:a;return Mt({type:"layer"},function(){me("beforeDOMElementCreation",{assembler:r,params:n});var o=[];return r(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(He(i)).join(" ")},children:o}]})}}}},Il={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.title,i=a===void 0?null:a,o=n.classes,s=o===void 0?[]:o,f=n.attributes,l=f===void 0?{}:f,u=n.styles,c=u===void 0?{}:u;return Mt({type:"counter",content:r},function(){return me("beforeDOMElementCreation",{content:r,params:n}),ul({content:r.toString(),title:i,extra:{attributes:l,styles:c,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(He(s))}})})}}}},Nl={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,i=a===void 0?W:a,o=n.title,s=o===void 0?null:o,f=n.classes,l=f===void 0?[]:f,u=n.attributes,c=u===void 0?{}:u,m=n.styles,h=m===void 0?{}:m;return Mt({type:"text",content:r},function(){return me("beforeDOMElementCreation",{content:r,params:n}),Wr({content:r,transform:v(v({},W),i),title:s,extra:{attributes:c,styles:h,classes:["".concat(p.cssPrefix,"-layers-text")].concat(He(l))}})})}}},provides:function(t){t.generateLayersText=function(r,n){var a=n.title,i=n.transform,o=n.extra,s=null,f=null;if(Wa){var l=parseInt(getComputedStyle(r).fontSize,10),u=r.getBoundingClientRect();s=u.width/l,f=u.height/l}return p.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([r,Wr({content:r.innerHTML,width:s,height:f,transform:i,title:a,extra:o,watchable:!0})])}}},jl=new RegExp('"',"ug"),Xr=[1105920,1112319];function _l(e){var t=e.replace(jl,""),r=Kf(t,0),n=r>=Xr[0]&&r<=Xr[1],a=t.length===2?t[0]===t[1]:!1;return{value:gn(a?t[0]:t),isSecondary:n||a}}function qr(e,t){var r="".concat(kf).concat(t.replace(":","-"));return new Promise(function(n,a){if(e.getAttribute(r)!==null)return n();var i=Re(e.children),o=i.filter(function(z){return z.getAttribute(pn)===t})[0],s=ne.getComputedStyle(e,t),f=s.getPropertyValue("font-family").match(Ef),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),n();if(f&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),m=~["Sharp"].indexOf(f[2])?I:C,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Ue[m][f[2].toLowerCase()]:Af[m][l],g=_l(c),b=g.value,k=g.isSecondary,A=f[0].startsWith("FontAwesome"),S=Zn(h,b),P=S;if(A){var _=el(b);_.iconName&&_.prefix&&(S=_.iconName,h=_.prefix)}if(S&&!k&&(!o||o.getAttribute(Gn)!==h||o.getAttribute(Kn)!==P)){e.setAttribute(r,P),o&&e.removeChild(o);var O=Pl(),$=O.extra;$.attributes[pn]=t,kn(S,h).then(function(z){var $t=er(v(v({},O),{},{icons:{main:z,mask:Qn()},prefix:h,iconName:P,extra:$,watchable:!0})),B=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=$t.map(function(Oi){return Ke(Oi)}).join(`
`),e.removeAttribute(r),n()}).catch(a)}else n()}else n()})}function Ml(e){return Promise.all([qr(e,"::before"),qr(e,"::after")])}function $l(e){return e.parentNode!==document.head&&!~Pf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Jr(e){if(!!G)return new Promise(function(t,r){var n=Re(e.querySelectorAll("*")).filter($l).map(Ml),a=tr.begin("searchPseudoElements");li(),Promise.all(n).then(function(){a(),Pn(),t()}).catch(function(){a(),Pn(),r()})})}var Ll={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=Jr,r}}},provides:function(t){t.pseudoElements2svg=function(r){var n=r.node,a=n===void 0?T:n;p.searchPseudoElements&&Jr(a)}}},Zr=!1,Dl={mixout:function(){return{dom:{unwatch:function(){li(),Zr=!0}}}},hooks:function(){return{bootstrap:function(){Gr(yn("mutationObserverCallbacks",{}))},noAuto:function(){xl()},watch:function(r){var n=r.observeMutationsRoot;Zr?Pn():Gr(yn("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Qr=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},r)},Fl={mixout:function(){return{parse:{transform:function(r){return Qr(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var a=n.getAttribute("data-fa-transform");return a&&(r.transform=Qr(a)),r}}},provides:function(t){t.generateAbstractTransformGrouping=function(r){var n=r.main,a=r.transform,i=r.containerWidth,o=r.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),c={transform:"".concat(f," ").concat(l," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:m};return{tag:"g",attributes:v({},h.outer),children:[{tag:"g",attributes:v({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:v(v({},n.icon.attributes),h.path)}]}]}}}},Qt={x:0,y:0,width:"100%",height:"100%"};function ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zl(e){return e.tag==="g"?e.children:[e]}var Ul={hooks:function(){return{parseNodeAttributes:function(r,n){var a=n.getAttribute("data-fa-mask"),i=a?_t(a.split(" ").map(function(o){return o.trim()})):Qn();return i.prefix||(i.prefix=re()),r.mask=i,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(t){t.generateAbstractMask=function(r){var n=r.children,a=r.attributes,i=r.main,o=r.mask,s=r.maskId,f=r.transform,l=i.width,u=i.icon,c=o.width,m=o.icon,h=Ff({transform:f,containerWidth:c,iconWidth:l}),g={tag:"rect",attributes:v(v({},Qt),{},{fill:"white"})},b=u.children?{children:u.children.map(ea)}:{},k={tag:"g",attributes:v({},h.inner),children:[ea(v({tag:u.tag,attributes:v(v({},u.attributes),h.path)},b))]},A={tag:"g",attributes:v({},h.outer),children:[k]},S="mask-".concat(s||Ve()),P="clip-".concat(s||Ve()),_={tag:"mask",attributes:v(v({},Qt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,A]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:zl(m)},_]};return n.push(O,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},Qt)}),{children:n,attributes:a}}}},Wl={provides:function(t){var r=!1;ne.matchMedia&&(r=ne.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:v(v({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=v(v({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||s.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:v(v({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:v(v({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Yl={hooks:function(){return{parseNodeAttributes:function(r,n){var a=n.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return r.symbol=i,r}}}},Vl=[Wf,Cl,Tl,Il,Nl,Ll,Dl,Fl,Ul,Wl,Yl];rl(Vl,{mixoutsTo:D});D.noAuto;D.config;D.library;D.dom;var Rn=D.parse;D.findIconDefinition;D.toHtml;var Hl=D.icon;D.layer;D.text;D.counter;function ta(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ta(Object(r),!0).forEach(function(n){xe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ta(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function bt(e){return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bt(e)}function xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Gl(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Kl(e,t){if(e==null)return{};var r=Gl(e,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function On(e){return Bl(e)||Xl(e)||ql(e)||Jl()}function Bl(e){if(Array.isArray(e))return En(e)}function Xl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ql(e,t){if(!!e){if(typeof e=="string")return En(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return En(e,t)}}function En(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Jl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zl(e){var t,r=e.beat,n=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,f=e.spin,l=e.spinPulse,u=e.spinReverse,c=e.pulse,m=e.fixedWidth,h=e.inverse,g=e.border,b=e.listItem,k=e.flip,A=e.size,S=e.rotation,P=e.pull,_=(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":c,"fa-fw":m,"fa-inverse":h,"fa-border":g,"fa-li":b,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},xe(t,"fa-".concat(A),typeof A<"u"&&A!==null),xe(t,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),xe(t,"fa-pull-".concat(P),typeof P<"u"&&P!==null),xe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(O){return _[O]?O:null}).filter(function(O){return O})}function Ql(e){return e=e-0,e===e}function ci(e){return Ql(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var eu=["style"];function tu(e){return e.charAt(0).toUpperCase()+e.slice(1)}function nu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var n=r.indexOf(":"),a=ci(r.slice(0,n)),i=r.slice(n+1).trim();return a.startsWith("webkit")?t[tu(a)]=i:t[a]=i,t},{})}function di(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(f){return di(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,l){var u=t.attributes[l];switch(l){case"class":f.attrs.className=u,delete t.attributes.class;break;case"style":f.attrs.style=nu(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=u:f.attrs[ci(l)]=u}return f},{attrs:{}}),i=r.style,o=i===void 0?{}:i,s=Kl(r,eu);return a.attrs.style=Q(Q({},a.attrs.style),o),e.apply(void 0,[t.tag,Q(Q({},a.attrs),s)].concat(On(n)))}var mi=!1;try{mi=!0}catch{}function ru(){if(!mi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function na(e){if(e&&bt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Rn.icon)return Rn.icon(e);if(e===null)return null;if(e&&bt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function en(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}var Be=E.forwardRef(function(e,t){var r=e.icon,n=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,f=e.maskId,l=na(r),u=en("classes",[].concat(On(Zl(e)),On(i.split(" ")))),c=en("transform",typeof e.transform=="string"?Rn.transform(e.transform):e.transform),m=en("mask",na(n)),h=Hl(l,Q(Q(Q(Q({},u),c),m),{},{symbol:a,title:o,titleId:s,maskId:f}));if(!h)return ru("Could not find icon",l),null;var g=h.abstract,b={ref:t};return Object.keys(e).forEach(function(k){Be.defaultProps.hasOwnProperty(k)||(b[k]=e[k])}),au(g[0],b)});Be.displayName="FontAwesomeIcon";Be.propTypes={beat:w.exports.bool,border:w.exports.bool,beatFade:w.exports.bool,bounce:w.exports.bool,className:w.exports.string,fade:w.exports.bool,flash:w.exports.bool,mask:w.exports.oneOfType([w.exports.object,w.exports.array,w.exports.string]),maskId:w.exports.string,fixedWidth:w.exports.bool,inverse:w.exports.bool,flip:w.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:w.exports.oneOfType([w.exports.object,w.exports.array,w.exports.string]),listItem:w.exports.bool,pull:w.exports.oneOf(["right","left"]),pulse:w.exports.bool,rotation:w.exports.oneOf([0,90,180,270]),shake:w.exports.bool,size:w.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.exports.bool,spinPulse:w.exports.bool,spinReverse:w.exports.bool,symbol:w.exports.oneOfType([w.exports.bool,w.exports.string]),title:w.exports.string,titleId:w.exports.string,transform:w.exports.oneOfType([w.exports.string,w.exports.object]),swapOpacity:w.exports.bool};Be.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var au=di.bind(null,E.createElement),vi={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",r="copy",n=448,a=512,i=[],o="f0c5",s="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z";e.definition={prefix:t,iconName:r,icon:[n,a,i,o,s]},e.faCopy=e.definition,e.prefix=t,e.iconName=r,e.width=n,e.height=a,e.ligatures=i,e.unicode=o,e.svgPathData=s,e.aliases=i})(vi);var hi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var n=[],a=0;a<arguments.length;a++){var i=arguments[a];if(!!i){var o=typeof i;if(o==="string"||o==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var s=r.apply(null,i);s&&n.push(s)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var f in i)t.call(i,f)&&i[f]&&n.push(f)}}}return n.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(hi);const Oe=hi.exports;function ra(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function iu(e){var t=ou(e,"string");return typeof t=="symbol"?t:String(t)}function ou(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function su(e,t,r){var n=y.exports.useRef(e!==void 0),a=y.exports.useState(t),i=a[0],o=a[1],s=e!==void 0,f=n.current;return n.current=s,!s&&f&&i!==t&&o(t),[s?e:i,y.exports.useCallback(function(l){for(var u=arguments.length,c=new Array(u>1?u-1:0),m=1;m<u;m++)c[m-1]=arguments[m];r&&r.apply(void 0,[l].concat(c)),o(l)},[r])]}function fu(e,t){return Object.keys(t).reduce(function(r,n){var a,i=r,o=i[ra(n)],s=i[n],f=yt(i,[ra(n),n].map(iu)),l=t[n],u=su(s,o,e[l]),c=u[0],m=u[1];return N({},f,(a={},a[n]=c,a[l]=m,a))},e)}function lu(e){const t=y.exports.useRef(e);return y.exports.useEffect(()=>{t.current=e},[e]),t}function pi(e){const t=lu(e);return y.exports.useCallback(function(...r){return t.current&&t.current(...r)},[t])}const uu=["xxl","xl","lg","md","sm","xs"],cu="xs",du=y.exports.createContext({prefixes:{},breakpoints:uu,minBreakpoint:cu});function rr(e,t){const{prefixes:r}=y.exports.useContext(du);return e||r[t]||t}const mu=e=>y.exports.forwardRef((t,r)=>F.exports.jsx("div",{...t,ref:r,className:Oe(t.className,e)})),gi=mu("h4");gi.displayName="DivStyledAsH4";const bi=y.exports.forwardRef(({className:e,bsPrefix:t,as:r=gi,...n},a)=>(t=rr(t,"alert-heading"),F.exports.jsx(r,{ref:a,className:Oe(e,t),...n})));bi.displayName="AlertHeading";const vu=["as","disabled"];function hu(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function pu(e){return!e||e.trim()==="#"}function yi({tagName:e,disabled:t,href:r,target:n,rel:a,role:i,onClick:o,tabIndex:s=0,type:f}){e||(r!=null||n!=null||a!=null?e="a":e="button");const l={tagName:e};if(e==="button")return[{type:f||"button",disabled:t},l];const u=m=>{if((t||e==="a"&&pu(r))&&m.preventDefault(),t){m.stopPropagation();return}o==null||o(m)},c=m=>{m.key===" "&&(m.preventDefault(),u(m))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:i!=null?i:"button",disabled:void 0,tabIndex:t?void 0:s,href:r,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?a:void 0,onClick:u,onKeyDown:c},l]}const gu=y.exports.forwardRef((e,t)=>{let{as:r,disabled:n}=e,a=hu(e,vu);const[i,{tagName:o}]=yi(Object.assign({tagName:r,disabled:n},a));return F.exports.jsx(o,Object.assign({},a,i,{ref:t}))});gu.displayName="Button";const bu=["onKeyDown"];function yu(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function xu(e){return!e||e.trim()==="#"}const xi=y.exports.forwardRef((e,t)=>{let{onKeyDown:r}=e,n=yu(e,bu);const[a]=yi(Object.assign({tagName:"a"},n)),i=pi(o=>{a.onKeyDown(o),r==null||r(o)});return xu(n.href)||n.role==="button"?F.exports.jsx("a",Object.assign({ref:t},n,a,{onKeyDown:i})):F.exports.jsx("a",Object.assign({ref:t},n,{onKeyDown:r}))});xi.displayName="Anchor";const wi=y.exports.forwardRef(({className:e,bsPrefix:t,as:r=xi,...n},a)=>(t=rr(t,"alert-link"),F.exports.jsx(r,{ref:a,className:Oe(e,t),...n})));wi.displayName="AlertLink";const aa={disabled:!1},ki=E.createContext(null);var wu=function(t){return t.scrollTop},Ne="unmounted",ie="exited",Z="entering",se="entered",An="exiting",K=function(e){jn(t,e);function t(n,a){var i;i=e.call(this,n,a)||this;var o=a,s=o&&!o.isMounting?n.enter:n.appear,f;return i.appearStatus=null,n.in?s?(f=ie,i.appearStatus=Z):f=se:n.unmountOnExit||n.mountOnEnter?f=Ne:f=ie,i.state={status:f},i.nextCallback=null,i}t.getDerivedStateFromProps=function(a,i){var o=a.in;return o&&i.status===Ne?{status:ie}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(a){var i=null;if(a!==this.props){var o=this.state.status;this.props.in?o!==Z&&o!==se&&(i=Z):(o===Z||o===se)&&(i=An)}this.updateStatus(!1,i)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var a=this.props.timeout,i,o,s;return i=o=s=a,a!=null&&typeof a!="number"&&(i=a.exit,o=a.enter,s=a.appear!==void 0?a.appear:o),{exit:i,enter:o,appear:s}},r.updateStatus=function(a,i){if(a===void 0&&(a=!1),i!==null)if(this.cancelNextCallback(),i===Z){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ae.findDOMNode(this);o&&wu(o)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ie&&this.setState({status:Ne})},r.performEnter=function(a){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:a,f=this.props.nodeRef?[s]:[Ae.findDOMNode(this),s],l=f[0],u=f[1],c=this.getTimeouts(),m=s?c.appear:c.enter;if(!a&&!o||aa.disabled){this.safeSetState({status:se},function(){i.props.onEntered(l)});return}this.props.onEnter(l,u),this.safeSetState({status:Z},function(){i.props.onEntering(l,u),i.onTransitionEnd(m,function(){i.safeSetState({status:se},function(){i.props.onEntered(l,u)})})})},r.performExit=function(){var a=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:Ae.findDOMNode(this);if(!i||aa.disabled){this.safeSetState({status:ie},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:An},function(){a.props.onExiting(s),a.onTransitionEnd(o.exit,function(){a.safeSetState({status:ie},function(){a.props.onExited(s)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(a,i){i=this.setNextCallback(i),this.setState(a,i)},r.setNextCallback=function(a){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,a(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},r.onTransitionEnd=function(a,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:Ae.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],l=f[0],u=f[1];this.props.addEndListener(l,u)}a!=null&&setTimeout(this.nextCallback,a)},r.render=function(){var a=this.state.status;if(a===Ne)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=yt(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E.createElement(ki.Provider,{value:null},typeof o=="function"?o(a,s):E.cloneElement(E.Children.only(o),s))},t}(E.Component);K.contextType=ki;K.propTypes={};function pe(){}K.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:pe,onEntering:pe,onEntered:pe,onExit:pe,onExiting:pe,onExited:pe};K.UNMOUNTED=Ne;K.EXITED=ie;K.ENTERING=Z;K.ENTERED=se;K.EXITING=An;function ku(e){return e&&e.ownerDocument||document}function Su(e){var t=ku(e);return t&&t.defaultView||window}function Pu(e,t){return Su(e).getComputedStyle(e,t)}var Ru=/([A-Z])/g;function Ou(e){return e.replace(Ru,"-$1").toLowerCase()}var Eu=/^ms-/;function st(e){return Ou(e).replace(Eu,"-ms-")}var Au=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Cu(e){return!!(e&&Au.test(e))}function Si(e,t){var r="",n="";if(typeof t=="string")return e.style.getPropertyValue(st(t))||Pu(e).getPropertyValue(st(t));Object.keys(t).forEach(function(a){var i=t[a];!i&&i!==0?e.style.removeProperty(st(a)):Cu(a)?n+=a+"("+i+") ":r+=st(a)+": "+i+";"}),n&&(r+="transform: "+n+";"),e.style.cssText+=";"+r}const Tu=!!(typeof window<"u"&&window.document&&window.document.createElement);var Cn=!1,Tn=!1;try{var tn={get passive(){return Cn=!0},get once(){return Tn=Cn=!0}};Tu&&(window.addEventListener("test",tn,tn),window.removeEventListener("test",tn,!0))}catch{}function Iu(e,t,r,n){if(n&&typeof n!="boolean"&&!Tn){var a=n.once,i=n.capture,o=r;!Tn&&a&&(o=r.__once||function s(f){this.removeEventListener(t,s,i),r.call(this,f)},r.__once=o),e.addEventListener(t,o,Cn?n:i)}e.addEventListener(t,r,n)}function Nu(e,t,r,n){var a=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(t,r,a),r.__once&&e.removeEventListener(t,r.__once,a)}function Pi(e,t,r,n){return Iu(e,t,r,n),function(){Nu(e,t,r,n)}}function ju(e,t,r,n){if(r===void 0&&(r=!1),n===void 0&&(n=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,r,n),e.dispatchEvent(a)}}function _u(e){var t=Si(e,"transitionDuration")||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function Mu(e,t,r){r===void 0&&(r=5);var n=!1,a=setTimeout(function(){n||ju(e,"transitionend",!0)},t+r),i=Pi(e,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(a),i()}}function $u(e,t,r,n){r==null&&(r=_u(e)||0);var a=Mu(e,r,n),i=Pi(e,"transitionend",t);return function(){a(),i()}}function ia(e,t){const r=Si(e,t)||"",n=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*n}function Lu(e,t){const r=ia(e,"transitionDuration"),n=ia(e,"transitionDelay"),a=$u(e,i=>{i.target===e&&(a(),t(i))},r+n)}function Du(e){e.offsetHeight}const oa=e=>!e||typeof e=="function"?e:t=>{e.current=t};function Fu(e,t){const r=oa(e),n=oa(t);return a=>{r&&r(a),n&&n(a)}}function zu(e,t){return y.exports.useMemo(()=>Fu(e,t),[e,t])}function Uu(e){return e&&"setState"in e?Ae.findDOMNode(e):e!=null?e:null}const Wu=E.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:n,onExiting:a,onExited:i,addEndListener:o,children:s,childRef:f,...l},u)=>{const c=y.exports.useRef(null),m=zu(c,f),h=$=>{m(Uu($))},g=$=>z=>{$&&c.current&&$(c.current,z)},b=y.exports.useCallback(g(e),[e]),k=y.exports.useCallback(g(t),[t]),A=y.exports.useCallback(g(r),[r]),S=y.exports.useCallback(g(n),[n]),P=y.exports.useCallback(g(a),[a]),_=y.exports.useCallback(g(i),[i]),O=y.exports.useCallback(g(o),[o]);return F.exports.jsx(K,{ref:u,...l,onEnter:b,onEntered:A,onEntering:k,onExit:S,onExited:_,onExiting:P,addEndListener:O,nodeRef:c,children:typeof s=="function"?($,z)=>s($,{...z,ref:h}):E.cloneElement(s,{ref:h})})}),Yu={[Z]:"show",[se]:"show"},In=y.exports.forwardRef(({className:e,children:t,transitionClasses:r={},onEnter:n,...a},i)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},s=y.exports.useCallback((f,l)=>{Du(f),n==null||n(f,l)},[n]);return F.exports.jsx(Wu,{ref:i,addEndListener:Lu,...o,onEnter:s,childRef:t.ref,children:(f,l)=>y.exports.cloneElement(t,{...l,className:Oe("fade",e,t.props.className,Yu[f],r[f])})})});In.displayName="Fade";const Vu={"aria-label":w.exports.string,onClick:w.exports.func,variant:w.exports.oneOf(["white"])},ar=y.exports.forwardRef(({className:e,variant:t,"aria-label":r="Close",...n},a)=>F.exports.jsx("button",{ref:a,type:"button",className:Oe("btn-close",t&&`btn-close-${t}`,e),"aria-label":r,...n}));ar.displayName="CloseButton";ar.propTypes=Vu;const Ri=y.exports.forwardRef((e,t)=>{const{bsPrefix:r,show:n=!0,closeLabel:a="Close alert",closeVariant:i,className:o,children:s,variant:f="primary",onClose:l,dismissible:u,transition:c=In,...m}=fu(e,{show:"onClose"}),h=rr(r,"alert"),g=pi(A=>{l&&l(!1,A)}),b=c===!0?In:c,k=F.exports.jsxs("div",{role:"alert",...b?void 0:m,ref:t,className:Oe(o,h,f&&`${h}-${f}`,u&&`${h}-dismissible`),children:[u&&F.exports.jsx(ar,{onClick:g,"aria-label":a,variant:i}),s]});return b?F.exports.jsx(b,{unmountOnExit:!0,...m,ref:void 0,in:n,children:k}):n?k:null});Ri.displayName="Alert";const sa=Object.assign(Ri,{Link:wi,Heading:bi});globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;function Hu(e,t){const r=y.exports.useRef(e);Gu(()=>{r.current=e},[e]),y.exports.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Gu=typeof window<"u"?y.exports.useLayoutEffect:y.exports.useEffect,Ku=df({button:{position:"relative",backgroundColor:"lightblue",borderRadius:"0.5em",minHeight:"3em",minWidth:"15em",maxWidth:"100%",height:"fit-content",border:"1px solid darkblue",padding:"0 10px 0 10px",margin:"1em 0 1.5em 0",cursor:"pointer","&:hover":{backgroundColor:"skyblue"},fontFamily:"monospace"},alert:{position:"absolute",top:"1em",right:"0",zIndex:10},title:{position:"absolute",top:"-1.05em",left:"1em",padding:"0 0.5em 0 0.5em",color:"blue",borderRadius:"1em",fontSize:"60%",fontWeight:"bold",background:"lightblue",border:"1px solid blue"}}),Nn=({text:e,warning:t="",time:r=3e3})=>{const n=Ku(),[a,i]=y.exports.useState(!1),o=()=>i(!1),s=()=>i(!0),f=()=>{navigator.clipboard.writeText(e),s()};return Hu(o,r),E.createElement("div",null,E.createElement("button",{className:n.button,onClick:f,"aria-label":"Copy to clipboard button"},E.createElement("div",{className:n.title},"copyable text"),E.createElement("div",null,E.createElement("span",null,E.createElement(Be,{icon:vi.faCopy})),E.createElement("span",null,"\xA0",e))),E.createElement(sa,{className:n.alert,dismissible:!0,show:a,onClose:o,variant:"warning"},t&&E.createElement(sa.Heading,null,t),"Copied to clipboard!"))};try{Nn.displayName="CopyableText",Nn.__docgenInfo={description:`Create a field to show text, and if you click it, it copies that text into your clipboard
showing a message, with optional heading.`,displayName:"CopyableText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},warning:{defaultValue:{value:""},description:"",name:"warning",required:!1,type:{name:"string"}},time:{defaultValue:{value:"3000"},description:"",name:"time",required:!1,type:{name:"number"}}}}}catch{}const ec={title:"Sketches/CopyableText",component:Nn,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text",description:"Overwritten description"},warning:{control:"text",description:"Adds a title to the tooptip."},time:{control:"number",description:"How long does the dialog show for, in ms."}}},ft={args:{text:"lljlkjljlk"}},lt={args:{text:"lljlkjljlk",warning:"be careful"}};var fa,la,ua;ft.parameters={...ft.parameters,docs:{...(fa=ft.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  args: {
    text: 'lljlkjljlk'
    // label: 'Button',
  }
}`,...(ua=(la=ft.parameters)==null?void 0:la.docs)==null?void 0:ua.source}}};var ca,da,ma;lt.parameters={...lt.parameters,docs:{...(ca=lt.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    text: 'lljlkjljlk',
    warning: 'be careful'
  }
}`,...(ma=(da=lt.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};const tc=["Primary","Warning"];export{ft as Primary,lt as Warning,tc as __namedExportsOrder,ec as default};
