/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{r as l,R as t}from"./index.5fa2b10e.js";import{c as d}from"./react-jss.esm.cfe63abc.js";import{u,j as x,c as h}from"./ThemeProvider.c81a5c7d.js";const n=l.exports.forwardRef(({bsPrefix:e,variant:a,animation:i="border",size:s,as:o="div",className:c,...m},p)=>{e=u(e,"spinner");const r=`${e}-${i}`;return x.exports.jsx(o,{ref:p,...m,className:h(c,r,s&&`${r}-${s}`,a&&`text-${a}`)})});n.displayName="Spinner";const f={maxWidth:"900px"},g=d({spinner:{color:"blue",padding:"10px",width:"10em",height:"10em",margin:"auto"},container:{background:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"35em",margin:"auto",...f}}),$=({title:e="Dynamic Import!!!!"})=>{const a=g();return t.createElement("div",{className:a.container},e&&t.createElement("h1",{className:a.spinner},e),t.createElement(n,{className:a.spinner,animation:"border",role:"status",variant:"primary"},t.createElement("span",{className:"visually-hidden"},"Loading...")))};export{$ as L};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/