/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{r as p,R as s}from"./index.5fa2b10e.js";import{c as d}from"./react-jss.esm.cfe63abc.js";import{u as h,j as g,c as u}from"./ThemeProvider.c81a5c7d.js";const n=p.exports.forwardRef(({bsPrefix:e,variant:a,animation:i="border",size:t,as:c="div",className:o,...m},l)=>{e=h(e,"spinner");const r=`${e}-${i}`;return g.exports.jsx(c,{ref:l,...m,className:u(o,r,t&&`${r}-${t}`,a&&`text-${a}`)})});n.displayName="Spinner";const x=d({container:{width:"100%",height:"100%"},heading:{textAlign:"center",margin:"auto"},spinner:{display:"inherit",width:"50%",height:"50%",margin:"2em auto"}}),S=({title:e="waiting..."})=>{const a=x();return s.createElement("div",{className:a.container},e&&s.createElement("h1",{className:a.heading},e),s.createElement(n,{as:"div",className:a.spinner,variant:"primary"},s.createElement("span",{className:"visually-hidden"},"Loading...")))};export{S as L};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/