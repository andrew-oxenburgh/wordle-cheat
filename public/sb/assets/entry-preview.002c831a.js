/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{R as o,r as i}from"./index.6988984c.js";import{u as m,r as d}from"./react-18.959cd981.js";import"./_commonjsHelpers.b8add541.js";import"./index.c7753fe6.js";const{global:u}=__STORYBOOK_MODULE_GLOBAL__;var{FRAMEWORK_OPTIONS:a}=u,_=(r,e)=>{let{id:n,component:t}=e;if(!t)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);return o.createElement(t,{...r})},E=class extends i.exports.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:r}=this.state,{showMain:e}=this.props;r||e()}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:e}},c=a!=null&&a.strictMode?i.exports.StrictMode:i.exports.Fragment;async function C({storyContext:r,unboundStoryFn:e,showMain:n,showException:t,forceRemount:l},s){let p=o.createElement(E,{showMain:n,showException:t},o.createElement(e,{...r})),h=c?o.createElement(c,null,p):p;return l&&m(s),await d(h,s),()=>m(s)}var D={renderer:"react"};export{D as parameters,_ as render,C as renderToCanvas};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/