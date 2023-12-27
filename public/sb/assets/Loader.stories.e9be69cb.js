import{r as y,R as r}from"./index.6988984c.js";import{u as f,c as h}from"./ThemeProvider.27d7aa5f.js";import{j as E}from"./jsx-runtime.e697e4ce.js";import{c as N}from"./react-jss.esm.e82dbf81.js";import"./_commonjsHelpers.b8add541.js";import"./inheritsLoose.4bb5a079.js";const i=y.exports.forwardRef(({bsPrefix:e,variant:a,animation:p="border",size:n,as:d="div",className:u,...g},x)=>{e=f(e,"spinner");const s=`${e}-${p}`;return E.exports.jsx(d,{ref:x,...g,className:h(u,s,n&&`${s}-${n}`,a&&`text-${a}`)})});i.displayName="Spinner";const S=N({spinner:{color:"blue",padding:"10px",width:"10em",height:"10em",margin:"auto"},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"20em"}}),l=()=>{const e=S();return r.createElement("div",{className:e.container},r.createElement("h1",{className:e.spinner},"Dynamic import!!!!"),r.createElement(i,{className:e.spinner,animation:"border",role:"status",variant:"primary"},r.createElement("span",{className:"visually-hidden"},"Loading...")))},w={title:"Sketches/Loader",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={args:{text:"button"},render:()=>r.createElement(r.Fragment,null,r.createElement(l,null))};var o,m,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'button'
    // label: 'Button',
  },
  render: () => <>
    <Loader />
  </>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["Primary"];export{t as Primary,B as __namedExportsOrder,w as default};
