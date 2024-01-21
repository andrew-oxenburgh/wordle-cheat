/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{R as c,r as n}from"./index.6988984c.js";import{r as m}from"./index.c7753fe6.js";var a={},s=m.exports;a.createRoot=s.createRoot,a.hydrateRoot=s.hydrateRoot;var o=new Map,R=({callback:e,children:t})=>{let r=n.exports.useRef();return n.exports.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},l=async(e,t)=>{let r=await p(t);return new Promise(u=>{r.render(c.createElement(R,{callback:()=>u(null)},e))})},f=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},p=async e=>{let t=o.get(e);return t||(t=a.createRoot(e),o.set(e,t)),t};export{l as r,f as u};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/