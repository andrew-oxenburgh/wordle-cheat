/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{r as a,R as x}from"./index.5fa2b10e.js";import{u as N,j as d,c as O}from"./ThemeProvider.c81a5c7d.js";import{d as Le,e as ve,b as De,u as Ie,a as He,r as pe,c as he,i as _e,h as $e}from"./hasClass.a859b233.js";import{o as We,b as L,c as Ke,u as T,l as me,T as Ge,t as Ue,E as ye,d as Ve,e as Xe,F as Pe}from"./Fade.e64bfd51.js";import{R as Ye}from"./index.058c3d87.js";import{C as Qe}from"./CloseButton.a05e3a3a.js";import{d as Je}from"./divWithClassName.d6dd0e1f.js";import"./_commonjsHelpers.b8add541.js";import"./index.0125c4c8.js";function ze(t){const e=a.exports.useRef(null);return a.exports.useEffect(()=>{e.current=t}),e.current}const Te=a.exports.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:s,...r},o)=>{const p=N(t,"container"),i=typeof e=="string"?`-${e}`:"-fluid";return d.exports.jsx(n,{ref:o,...r,className:O(s,e?`${p}${i}`:p)})});Te.displayName="Container";const ce=new WeakMap,ge=(t,e)=>{if(!t||!e)return;const n=ce.get(e)||new Map;ce.set(e,n);let s=n.get(t);return s||(s=e.matchMedia(t),s.refCount=0,n.set(s.media,s)),s};function Ze(t,e=typeof window>"u"?void 0:window){const n=ge(t,e),[s,r]=a.exports.useState(()=>n?n.matches:!1);return Le(()=>{let o=ge(t,e);if(!o)return r(!1);let p=ce.get(e);const i=()=>{r(o.matches)};return o.refCount++,o.addListener(i),i(),()=>{o.removeListener(i),o.refCount--,o.refCount<=0&&p?.delete(o.media),o=void 0}},[t]),s}function qe(t){const e=Object.keys(t);function n(i,l){return i===l?l:i?`${i} and ${l}`:l}function s(i){return e[Math.min(e.indexOf(i)+1,e.length-1)]}function r(i){const l=s(i);let u=t[l];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function o(i){let l=t[i];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function p(i,l,u){let m;typeof i=="object"?(m=i,u=l,l=!0):(l=l||!0,m={[i]:l});let M=a.exports.useMemo(()=>Object.entries(m).reduce((g,[w,E])=>((E==="up"||E===!0)&&(g=n(g,o(w))),(E==="down"||E===!0)&&(g=n(g,r(w))),g),""),[JSON.stringify(m)]);return Ze(M,u)}return p}const et=qe({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function ae(t){t===void 0&&(t=We());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}const tt="data-rr-ui-";function nt(t){return`${tt}${t}`}function st(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const xe=nt("modal-open");class de{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:s=!1}={}){this.handleContainerOverflow=n,this.isRTL=s,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return st(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[s]:r.style[s]},e.scrollBarWidth&&(n[s]=`${parseInt(L(r,s)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(xe,""),L(r,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(xe),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const ot=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function rt(t,e){if(t==null)return{};var n={},s=Object.keys(t),r,o;for(o=0;o<s.length;o++)r=s[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}let ie;function at(t){return ie||(ie=new de({ownerDocument:t?.document})),ie}function it(t){const e=ve(),n=t||at(e),s=a.exports.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>n.add(s.current),remove:()=>n.remove(s.current),isTopModal:()=>n.isTopModal(s.current),setDialogRef:a.exports.useCallback(r=>{s.current.dialog=r},[]),setBackdropRef:a.exports.useCallback(r=>{s.current.backdrop=r},[])})}const Oe=a.exports.forwardRef((t,e)=>{let{show:n=!1,role:s="dialog",className:r,style:o,children:p,backdrop:i=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:m,transition:M,runTransition:g,backdropTransition:w,runBackdropTransition:E,autoFocus:X=!0,enforceFocus:P=!0,restoreFocus:Y=!0,restoreFocusOptions:Q,renderDialog:D,renderBackdrop:J=c=>d.exports.jsx("div",Object.assign({},c)),manager:I,container:z,onShow:k,onHide:B=()=>{},onExit:H,onExited:_,onExiting:Z,onEnter:q,onEntering:j,onEntered:$}=t,W=rt(t,ot);const v=ve(),y=De(z),f=it(I),ee=Ie(),te=ze(n),[A,K]=a.exports.useState(!n),C=a.exports.useRef(null);a.exports.useImperativeHandle(e,()=>f,[f]),Ke&&!te&&n&&(C.current=ae(v?.document)),n&&A&&K(!1);const S=T(()=>{if(f.add(),se.current=me(document,"keydown",Se),ne.current=me(document,"focus",()=>setTimeout(F),!0),k&&k(),X){var c,fe;const re=ae((c=(fe=f.dialog)==null?void 0:fe.ownerDocument)!=null?c:v?.document);f.dialog&&re&&!he(f.dialog,re)&&(C.current=re,f.dialog.focus())}}),h=T(()=>{if(f.remove(),se.current==null||se.current(),ne.current==null||ne.current(),Y){var c;(c=C.current)==null||c.focus==null||c.focus(Q),C.current=null}});a.exports.useEffect(()=>{!n||!y||S()},[n,y,S]),a.exports.useEffect(()=>{!A||h()},[A,h]),He(()=>{h()});const F=T(()=>{if(!P||!ee()||!f.isTopModal())return;const c=ae(v?.document);f.dialog&&c&&!he(f.dialog,c)&&f.dialog.focus()}),Ae=T(c=>{c.target===c.currentTarget&&(u?.(c),i===!0&&B())}),Se=T(c=>{l&&_e(c)&&f.isTopModal()&&(m?.(c),c.defaultPrevented||B())}),ne=a.exports.useRef(),se=a.exports.useRef(),Fe=(...c)=>{K(!0),_?.(...c)};if(!y)return null;const ue=Object.assign({role:s,ref:f.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},W,{style:o,className:r,tabIndex:-1});let oe=D?D(ue):d.exports.jsx("div",Object.assign({},ue,{children:a.exports.cloneElement(p,{role:"document"})}));oe=pe(M,g,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:H,onExiting:Z,onExited:Fe,onEnter:q,onEntering:j,onEntered:$,children:oe});let G=null;return i&&(G=J({ref:f.setBackdropRef,onClick:Ae}),G=pe(w,E,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:G})),d.exports.jsx(d.exports.Fragment,{children:Ye.createPortal(d.exports.jsxs(d.exports.Fragment,{children:[G,oe]}),y)})});Oe.displayName="Modal";const lt=Object.assign(Oe,{Manager:de}),we=a.exports.forwardRef(({className:t,bsPrefix:e,as:n="div",...s},r)=>(e=N(e,"offcanvas-body"),d.exports.jsx(n,{ref:r,className:O(t,e),...s})));we.displayName="OffcanvasBody";const ct={[ye]:"show",[Xe]:"show"},Ce=a.exports.forwardRef(({bsPrefix:t,className:e,children:n,in:s=!1,mountOnEnter:r=!1,unmountOnExit:o=!1,appear:p=!1,...i},l)=>(t=N(t,"offcanvas"),d.exports.jsx(Ge,{ref:l,addEndListener:Ue,in:s,mountOnEnter:r,unmountOnExit:o,appear:p,...i,childRef:n.ref,children:(u,m)=>a.exports.cloneElement(n,{...m,className:O(e,n.props.className,(u===ye||u===Ve)&&`${t}-toggling`,ct[u])})})));Ce.displayName="OffcanvasToggling";const Re=a.exports.createContext({onHide(){}}),be=a.exports.createContext(null);be.displayName="NavbarContext";const dt=a.exports.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:s,children:r,...o},p)=>{const i=a.exports.useContext(Re),l=T(()=>{i?.onHide(),s?.()});return d.exports.jsxs("div",{ref:p,...o,children:[r,n&&d.exports.jsx(Qe,{"aria-label":t,variant:e,onClick:l})]})}),Ne=a.exports.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:s=!1,...r},o)=>(t=N(t,"offcanvas-header"),d.exports.jsx(dt,{ref:o,...r,className:O(e,t),closeLabel:n,closeButton:s})));Ne.displayName="OffcanvasHeader";const ut=Je("h5"),Me=a.exports.forwardRef(({className:t,bsPrefix:e,as:n=ut,...s},r)=>(e=N(e,"offcanvas-title"),d.exports.jsx(n,{ref:r,className:O(t,e),...s})));Me.displayName="OffcanvasTitle";function ft(t,e){t.classList?t.classList.add(e):$e(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}var pt=Function.prototype.bind.call(Function.prototype.call,[].slice);function R(t,e){return pt(t.querySelectorAll(e))}function Ee(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ht(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Ee(t.className,e):t.setAttribute("class",Ee(t.className&&t.className.baseVal||"",e))}const b={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class ke extends de{adjustAndStore(e,n,s){const r=n.style[e];n.dataset[e]=r,L(n,{[e]:`${parseFloat(L(n,e))+s}px`})}restore(e,n){const s=n.dataset[e];s!==void 0&&(delete n.dataset[e],L(n,{[e]:s}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(ft(n,"modal-open"),!e.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";R(n,b.FIXED_CONTENT).forEach(o=>this.adjustAndStore(s,o,e.scrollBarWidth)),R(n,b.STICKY_CONTENT).forEach(o=>this.adjustAndStore(r,o,-e.scrollBarWidth)),R(n,b.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(r,o,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();ht(n,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";R(n,b.FIXED_CONTENT).forEach(o=>this.restore(s,o)),R(n,b.STICKY_CONTENT).forEach(o=>this.restore(r,o)),R(n,b.NAVBAR_TOGGLER).forEach(o=>this.restore(r,o))}}let le;function mt(t){return le||(le=new ke(t)),le}function gt(t){return d.exports.jsx(Ce,{...t})}function xt(t){return d.exports.jsx(Pe,{...t})}const Be=a.exports.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":s,placement:r="start",responsive:o,show:p=!1,backdrop:i=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:m,onShow:M,onHide:g,container:w,autoFocus:E=!0,enforceFocus:X=!0,restoreFocus:P=!0,restoreFocusOptions:Y,onEntered:Q,onExit:D,onExiting:J,onEnter:I,onEntering:z,onExited:k,backdropClassName:B,manager:H,renderStaticNode:_=!1,...Z},q)=>{const j=a.exports.useRef();t=N(t,"offcanvas");const{onToggle:$}=a.exports.useContext(be)||{},[W,v]=a.exports.useState(!1),y=et(o||"xs","up");a.exports.useEffect(()=>{v(o?p&&!y:p)},[p,o,y]);const f=T(()=>{$?.(),g?.()}),ee=a.exports.useMemo(()=>({onHide:f}),[f]);function te(){return H||(u?(j.current||(j.current=new ke({handleContainerOverflow:!1})),j.current):mt())}const A=(h,...F)=>{h&&(h.style.visibility="visible"),I?.(h,...F)},K=(h,...F)=>{h&&(h.style.visibility=""),k?.(...F)},C=a.exports.useCallback(h=>d.exports.jsx("div",{...h,className:O(`${t}-backdrop`,B)}),[B,t]),S=h=>d.exports.jsx("div",{...h,...Z,className:O(e,o?`${t}-${o}`:t,`${t}-${r}`),"aria-labelledby":s,children:n});return d.exports.jsxs(d.exports.Fragment,{children:[!W&&(o||_)&&S({}),d.exports.jsx(Re.Provider,{value:ee,children:d.exports.jsx(lt,{show:W,ref:q,backdrop:i,container:w,keyboard:l,autoFocus:E,enforceFocus:X&&!u,restoreFocus:P,restoreFocusOptions:Y,onEscapeKeyDown:m,onShow:M,onHide:f,onEnter:A,onEntering:z,onEntered:Q,onExit:D,onExiting:J,onExited:K,manager:te(),transition:gt,backdropTransition:xt,renderBackdrop:C,renderDialog:S})})]})});Be.displayName="Offcanvas";const U=Object.assign(Be,{Body:we,Header:Ne,Title:Me}),je=({children:t="",height:e,show:n=!1,onHide:s})=>x.createElement(Te,null,x.createElement(U,{show:n,onHide:s,placement:"top",style:{height:e}},x.createElement(U.Header,{closeButton:!0},x.createElement(U.Title,null,"About this page")),x.createElement(U.Body,null,t))),{useArgs:Et}=__STORYBOOK_MODULE_PREVIEW_API__,Mt={title:"Sketches/InfoThing",component:je,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{height:{control:"text",description:"height. May be a percentage"},show:{control:"boolean"},onHide:{control:"function"}}},V={args:{height:"50%",show:!1},render:t=>{const[{show:e},n]=Et(),s=()=>{n({show:!e})};return x.createElement(x.Fragment,null,x.createElement(je,{...t,onHide:s},x.createElement("p",null,"some kiddies")))}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    height: '50%',
    show: false
  },
  render: args => {
    const [{
      show
    }, updateArgs] = useArgs();
    const onHide = () => {
      updateArgs({
        show: !show
      });
    };
    return <>
            <InfoThing {...args} onHide={onHide}>
                <p>some kiddies</p>
            </InfoThing>
        </>;
  }
}`,...V.parameters?.docs?.source}}};const kt=["Primary"];export{V as Primary,kt as __namedExportsOrder,Mt as default};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/