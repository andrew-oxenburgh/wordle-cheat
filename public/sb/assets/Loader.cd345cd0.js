/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{r as d,R as r}from"./index.6988984c.js";import{c as u}from"./react-jss.esm.890d2279.js";import{u as y,c as f}from"./ThemeProvider.f0af18c7.js";import{j as x}from"./jsx-runtime.e697e4ce.js";const i=d.exports.forwardRef(({bsPrefix:e,variant:a,animation:o="border",size:t,as:c="div",className:m,...p},l)=>{e=y(e,"spinner");const s=`${e}-${o}`;return x.exports.jsx(c,{ref:l,...p,className:f(m,s,t&&`${s}-${t}`,a&&`text-${a}`)})});i.displayName="Spinner";const g={maxWidth:"900px"},h=u({spinner:{color:"blue",padding:"10px",width:"10em",height:"10em",margin:"auto"},container:{background:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"35em",margin:"auto",...g}}),n=({title:e="Dynamic Import!!!!"})=>{const a=h();return r.createElement("div",{className:a.container},e&&r.createElement("h1",{className:a.spinner},e),r.createElement(i,{className:a.spinner,animation:"border",role:"status",variant:"primary"},r.createElement("span",{className:"visually-hidden"},"Loading...")))};try{n.displayName="Loader",n.__docgenInfo={description:"",displayName:"Loader",props:{title:{defaultValue:{value:"Dynamic Import!!!!"},description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{n as L};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/