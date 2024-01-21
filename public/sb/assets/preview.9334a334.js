/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{d as O}from"./index.67736049.js";let R;const T=new Uint8Array(16);function N(){if(!R&&(R=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(T)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function D(t,e=0){return r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]}const V=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_={randomUUID:V};function A(t,e,n){if(_.randomUUID&&!e&&!t)return _.randomUUID();t=t||{};const o=t.random||(t.rng||N)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=o[i];return e}return D(o)}var P=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){let t=String(this.code).padStart(4,"0");return`SB_${this.category}_${t}`}get name(){let t=this.constructor.name;return`${this.fullErrorCode} (${t})`}get message(){let t;return this.documentation===!0?t=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation=="string"?t=this.documentation:Array.isArray(this.documentation)&&(t=`
${this.documentation.map(e=>`	- ${e}`).join(`
`)}`),`${this.template()}${t!=null?`

More info: ${t}
`:""}`}},S=(t=>(t.PREVIEW_CLIENT_LOGGER="PREVIEW_CLIENT-LOGGER",t.PREVIEW_CHANNELS="PREVIEW_CHANNELS",t.PREVIEW_CORE_EVENTS="PREVIEW_CORE-EVENTS",t.PREVIEW_INSTRUMENTER="PREVIEW_INSTRUMENTER",t.PREVIEW_API="PREVIEW_API",t.PREVIEW_REACT_DOM_SHIM="PREVIEW_REACT-DOM-SHIM",t.PREVIEW_ROUTER="PREVIEW_ROUTER",t.PREVIEW_THEMING="PREVIEW_THEMING",t.RENDERER_HTML="RENDERER_HTML",t.RENDERER_PREACT="RENDERER_PREACT",t.RENDERER_REACT="RENDERER_REACT",t.RENDERER_SERVER="RENDERER_SERVER",t.RENDERER_SVELTE="RENDERER_SVELTE",t.RENDERER_VUE="RENDERER_VUE",t.RENDERER_VUE3="RENDERER_VUE3",t.RENDERER_WEB_COMPONENTS="RENDERER_WEB-COMPONENTS",t))(S||{}),b=class extends P{constructor(t){super(),this.data=t,this.category="PREVIEW_API",this.code=2,this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return O`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated?`
This is deprecated and won't work in Storybook 8 anymore.
`:""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};const{addons:W}=__STORYBOOK_MODULE_PREVIEW_API__,{global:m}=__STORYBOOK_MODULE_GLOBAL__;var f="storybook/actions",w=`${f}/action-event`,U={depth:10,clearOnStoryChange:!0,limit:50},h=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:h(n,e)},M=t=>!!(typeof t=="object"&&t&&h(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),v=t=>{if(M(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),o=n?.value;return typeof o=="object"&&o?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(o.constructor.prototype)}),e}return t},x=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?A():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(t,e={}){let n={...U,...e},o=function(...i){if(e.implicit){let l=("__STORYBOOK_PREVIEW__"in m?m.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(l){let a=!window?.FEATURES?.disallowImplicitActionsInRenderV8,u=new b({phase:l.phase,name:t,deprecated:a});if(a)console.warn(u);else throw u}}let E=W.getChannel(),s=x(),c=5,d=i.map(v),y=i.length>1?d:d[0],I={id:s,count:0,data:{name:t,args:y},options:{...n,maxDepth:c+(n.depth||3),allowFunction:n.allowFunction||!1}};E.emit(w,I)};return o.isAction=!0,o}var g=(t,e)=>typeof e[t]>"u"&&!(t in e),j=t=>{let{initialArgs:e,argTypes:n,id:o,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!n)return{};let E=new RegExp(i.argTypesRegex);return Object.entries(n).filter(([s])=>!!E.test(s)).reduce((s,[c,d])=>(g(c,e)&&(s[c]=p(c,{implicit:!0,id:o})),s),{})},$=t=>{let{initialArgs:e,argTypes:n,parameters:{actions:o}}=t;return o?.disable||!n?{}:Object.entries(n).filter(([i,E])=>!!E.action).reduce((i,[E,s])=>(g(E,e)&&(i[E]=p(typeof s.action=="string"?s.action:E)),i),{})},B=[$,j],k=t=>{let{args:e,parameters:{actions:n}}=t;n?.disable||Object.entries(e).filter(([,o])=>typeof o=="function"&&"_isMockFunction"in o&&o._isMockFunction).forEach(([o,i])=>{let E=i.getMockImplementation();if(E?._actionAttached!==!0&&E?.isAction!==!0){let s=(...c)=>(p(o)(...c),E?.(...c));s._actionAttached=!0,i.mockImplementation(s)}})},H=[k];export{B as argsEnhancers,H as loaders};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/