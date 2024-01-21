/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{_ as b}from"./extends.946277fc.js";import{a as y,j as P}from"./ThemeProvider.c81a5c7d.js";import{r as d}from"./index.5fa2b10e.js";function v(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function m(t){var r=x(t,"string");return typeof r=="symbol"?r:String(r)}function x(t,r){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var e=n.call(t,r||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function j(t,r,n){var e=d.exports.useRef(t!==void 0),o=d.exports.useState(r),u=o[0],s=o[1],c=t!==void 0,p=e.current;return e.current=c,!c&&p&&u!==r&&s(r),[c?t:u,d.exports.useCallback(function(f){for(var a=arguments.length,l=new Array(a>1?a-1:0),i=1;i<a;i++)l[i-1]=arguments[i];n&&n.apply(void 0,[f].concat(l)),s(f)},[n])]}function R(t,r){return Object.keys(r).reduce(function(n,e){var o,u=n,s=u[v(e)],c=u[e],p=y(u,[v(e),e].map(m)),f=r[e],a=j(c,s,t[f]),l=a[0],i=a[1];return b({},p,(o={},o[e]=l,o[f]=i,o))},t)}const w=["as","disabled"];function S(t,r){if(t==null)return{};var n={},e=Object.keys(t),o,u;for(u=0;u<e.length;u++)o=e[u],!(r.indexOf(o)>=0)&&(n[o]=t[o]);return n}function K(t){return!t||t.trim()==="#"}function O({tagName:t,disabled:r,href:n,target:e,rel:o,role:u,onClick:s,tabIndex:c=0,type:p}){t||(n!=null||e!=null||o!=null?t="a":t="button");const f={tagName:t};if(t==="button")return[{type:p||"button",disabled:r},f];const a=i=>{if((r||t==="a"&&K(n))&&i.preventDefault(),r){i.stopPropagation();return}s?.(i)},l=i=>{i.key===" "&&(i.preventDefault(),a(i))};return t==="a"&&(n||(n="#"),r&&(n=void 0)),[{role:u??"button",disabled:void 0,tabIndex:r?void 0:c,href:n,target:t==="a"?e:void 0,"aria-disabled":r||void 0,rel:t==="a"?o:void 0,onClick:a,onKeyDown:l},f]}const _=d.exports.forwardRef((t,r)=>{let{as:n,disabled:e}=t,o=S(t,w);const[u,{tagName:s}]=O(Object.assign({tagName:n,disabled:e},o));return P.exports.jsx(s,Object.assign({},o,u,{ref:r}))});_.displayName="Button";export{R as a,j as b,O as u};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/