/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{R as n,r as a}from"./index.5fa2b10e.js";import{r as E}from"./index.058c3d87.js";import"./_commonjsHelpers.b8add541.js";var i={},m=E.exports;i.createRoot=m.createRoot,i.hydrateRoot=m.hydrateRoot;var s=new Map,R=({callback:e,children:t})=>{let r=a.exports.useRef();return a.exports.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},x=async(e,t)=>{let r=await f(t);return new Promise(o=>{r.render(n.createElement(R,{callback:()=>o(null)},e))})},u=(e,t)=>{let r=s.get(e);r&&(r.unmount(),s.delete(e))},f=async e=>{let t=s.get(e);return t||(t=i.createRoot(e),s.set(e,t)),t};const{global:w}=__STORYBOOK_MODULE_GLOBAL__;var{FRAMEWORK_OPTIONS:g}=w,v=(e,t)=>{let{id:r,component:o}=t;if(!o)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return n.createElement(o,{...e})},y=class extends a.exports.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:e}=this.state,{showMain:t}=this.props;e||t()}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},l=g?.strictMode?a.exports.StrictMode:a.exports.Fragment;async function C({storyContext:e,unboundStoryFn:t,showMain:r,showException:o,forceRemount:d},c){let p=n.createElement(y,{showMain:r,showException:o},n.createElement(t,{...e})),h=l?n.createElement(l,null,p):p;return d&&u(c),await x(h,c),()=>u(c)}var D={renderer:"react"};export{D as parameters,v as render,C as renderToCanvas};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/