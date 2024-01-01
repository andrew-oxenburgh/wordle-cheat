import{r as i,R as n}from"./index.6988984c.js";import{L as Z}from"./Loader.2689b4ad.js";import{u as l,c as p}from"./ThemeProvider.27d7aa5f.js";import{j as s}from"./jsx-runtime.e697e4ce.js";import{d as U}from"./divWithClassName.5e29a31d.js";import{p as g}from"./index.0125c4c8.js";import"./_commonjsHelpers.b8add541.js";import"./react-jss.esm.e82dbf81.js";import"./inheritsLoose.4bb5a079.js";const R=i.exports.forwardRef(({className:t,bsPrefix:e,as:a="div",...o},r)=>(e=l(e,"card-body"),s.exports.jsx(a,{ref:r,className:p(t,e),...o})));R.displayName="CardBody";const E=R,L=i.exports.forwardRef(({className:t,bsPrefix:e,as:a="div",...o},r)=>(e=l(e,"card-footer"),s.exports.jsx(a,{ref:r,className:p(t,e),...o})));L.displayName="CardFooter";const z=L,q=i.exports.createContext(null);q.displayName="CardHeaderContext";const G=q,H=i.exports.forwardRef(({bsPrefix:t,className:e,as:a="div",...o},r)=>{const c=l(t,"card-header"),d=i.exports.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return s.exports.jsx(G.Provider,{value:d,children:s.exports.jsx(a,{ref:r,...o,className:p(e,c)})})});H.displayName="CardHeader";const ee=H,D=i.exports.forwardRef(({bsPrefix:t,className:e,variant:a,as:o="img",...r},c)=>{const d=l(t,"card-img");return s.exports.jsx(o,{ref:c,className:p(a?`${d}-${a}`:d,e),...r})});D.displayName="CardImg";const te=D,W=i.exports.forwardRef(({className:t,bsPrefix:e,as:a="div",...o},r)=>(e=l(e,"card-img-overlay"),s.exports.jsx(a,{ref:r,className:p(t,e),...o})));W.displayName="CardImgOverlay";const ae=W,$=i.exports.forwardRef(({className:t,bsPrefix:e,as:a="a",...o},r)=>(e=l(e,"card-link"),s.exports.jsx(a,{ref:r,className:p(t,e),...o})));$.displayName="CardLink";const re=$,oe=U("h6"),F=i.exports.forwardRef(({className:t,bsPrefix:e,as:a=oe,...o},r)=>(e=l(e,"card-subtitle"),s.exports.jsx(a,{ref:r,className:p(t,e),...o})));F.displayName="CardSubtitle";const ne=F,O=i.exports.forwardRef(({className:t,bsPrefix:e,as:a="p",...o},r)=>(e=l(e,"card-text"),s.exports.jsx(a,{ref:r,className:p(t,e),...o})));O.displayName="CardText";const ie=O,se=U("h5"),X=i.exports.forwardRef(({className:t,bsPrefix:e,as:a=se,...o},r)=>(e=l(e,"card-title"),s.exports.jsx(a,{ref:r,className:p(t,e),...o})));X.displayName="CardTitle";const ce=X,Y=i.exports.forwardRef(({bsPrefix:t,className:e,bg:a,text:o,border:r,body:c=!1,children:d,as:b="div",...Q},P)=>{const K=l(t,"card");return s.exports.jsx(b,{ref:P,...Q,className:p(e,K,a&&`bg-${a}`,o&&`text-${o}`,r&&`border-${r}`),children:c?s.exports.jsx(E,{children:d}):d})});Y.displayName="Card";const m=Object.assign(Y,{Img:te,Title:ce,Subtitle:ne,Body:E,Link:re,Text:ie,Header:ee,Footer:z,ImgOverlay:ae});g.exports.string,g.exports.bool,g.exports.bool,g.exports.bool,g.exports.bool;const M=i.exports.forwardRef(({bsPrefix:t,className:e,fluid:a=!1,rounded:o=!1,roundedCircle:r=!1,thumbnail:c=!1,...d},b)=>(t=l(t,"img"),s.exports.jsx("img",{ref:b,...d,className:p(e,a&&`${t}-fluid`,o&&"rounded",r&&"rounded-circle",c&&`${t}-thumbnail`)})));M.displayName="Image";const le=M,u=({loading:t,normalisedGraph:e})=>t?n.createElement(Z,{title:""}):e?n.createElement(m,{key:JSON.stringify(e)},n.createElement(m.Header,null,(e==null?void 0:e.favicon)&&n.createElement(le,{width:"32",src:e.favicon}),(e==null?void 0:e.siteName)&&n.createElement("span",null," "+e.siteName)),n.createElement(m.Body,null,e.title&&n.createElement("h3",null,e==null?void 0:e.title),n.createElement("p",null,e==null?void 0:e.description),n.createElement("p",null,e==null?void 0:e.type),n.createElement("p",null,e==null?void 0:e.siteName),e.url&&n.createElement(m.Link,{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url)),(e==null?void 0:e.image)&&n.createElement(m.Img,{src:e==null?void 0:e.image.url})):n.createElement(m,null,n.createElement(m.Header,null,"Choose a URL"));try{u.displayName="OpenGraphCard",u.__docgenInfo={description:"",displayName:"OpenGraphCard",props:{loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},normalisedGraph:{defaultValue:null,description:"",name:"normalisedGraph",required:!0,type:{name:"NormalisedType | null"}}}}}catch{}const V={"cnn-home":{url:"https://edition.cnn.com/",graph:{ogTitle:"Breaking News, Latest News and Videos | CNN",twitterTitle:"Breaking News, Latest News and Videos | CNN",twitterDescription:"View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.",ogDescription:"View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.",ogType:"website",twitterCard:"summary_large_image",ogUrl:"https://www.cnn.com",articleTag:"cnn news, daily news, breaking news, news today, current events",author:"Monica Sarkar",twitterSite:"@cnn",articlePublisher:"https://www.facebook.com/CNN",ogSiteName:"CNN",ogImage:[{url:"https://media.cnn.com/api/v1/images/stellar/prod/240101124218-israeli-soldiers-gaza-border-122923.jpg?c=16x9&q=h_720,w_1280,c_fill",type:"jpg",width:3e3,height:2e3},{url:"https://media.cnn.com/api/v1/images/stellar/prod/231231220458-xi-jinping-122923.jpg?c=16x9&q=h_720,w_1280,c_fill",type:"jpg",width:3e3,height:2550},{url:"https://media.cnn.com/api/v1/images/stellar/prod/cnn-fast-master-1920x1080-a.png?c=16x9&q=w_850,c_fill",type:"png",width:1920,height:1080},{url:"https://media.cnn.com/api/v1/images/stellar/prod/230921125545-jose-andres-family-in-spain-101-digital-clip-extra.jpg?c=16x9&q=h_438,w_780,c_fill",type:"jpg",width:1920,height:1080},{url:"https://media.cnn.com/api/v1/images/stellar/prod/231231185008-07-nye-2024-hong-kong.jpg?c=16x9&q=h_438,w_780,c_fill",type:"jpg",width:3e3,height:2e3},{url:"https://media.cnn.com/api/v1/images/stellar/prod/231231100041-alexey-navalny-04-26-2023.jpg?c=16x9&q=h_144,w_256,c_fill",type:"jpg",width:2182,height:1464},{url:"https://media.cnn.com/api/v1/images/stellar/prod/231229150005-jeremy-renner-041123.jpg?c=16x9&q=h_144,w_256,c_fill",type:"jpg",width:2500,height:1406},{url:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1474327882.jpg?c=16x9&q=h_144,w_256,c_fill",type:"jpg",width:2e3,height:1721},{url:"https://media.cnn.com/api/v1/images/stellar/prod/160713170505-07-david-cameron-downing-street-0713.jpg?q=x_55,y_95,h_1060,w_1884,c_crop/h_144,w_256",type:"jpg",width:2e3,height:1428},{url:"https://media.cnn.com/api/v1/images/stellar/prod/231231053046-trump-campaign-iowa-121923.jpg?c=16x9&q=h_438,w_780,c_fill",type:"jpg",width:3e3,height:2e3}],ogLocale:"en",favicon:"/media/sites/cnn/favicon.ico",charset:"utf-8",requestUrl:"http://edition.cnn.com/",success:!0}},caAmJu:{url:"https://www.caamju.org/",graph:{ogType:"website",ogUrl:"http://www.canamju.org/canamju",ogDescription:"Welcome to the new Canterbury Amateur Judo Club web site. Find information about becoming a member, training times and competitions.",ogImage:[{url:"https:"}],ogTitle:"CAN AM JU  - Judo the Martial Art -  The Sport - Judo Self Defence - Home",charset:"utf-8",requestUrl:"http://canamju.org",success:!0}},"cnn-story":{url:"https://edition.cnn.com/2023/12/31/asia/india-pakistan-bangladesh-srilanka-elections-2024-intl-hnk/index.html",graph:{ogTitle:"Democracy\u2019s grand test. More than a billion people will head to the polls in South Asia in 2024 | CNN",twitterTitle:"Democracy\u2019s grand test. More than a billion people will head to the polls in South Asia in 2024 | CNN",twitterDescription:"An election boycotted by the main opposition as the world\u2019s longest serving female prime minister looks set to extend her rule.",ogDescription:"An election boycotted by the main opposition as the world\u2019s longest serving female prime minister looks set to extend her rule.",ogType:"article",twitterCard:"summary_large_image",ogUrl:"https://www.cnn.com/2023/12/31/asia/india-pakistan-bangladesh-srilanka-elections-2024-intl-hnk/index.html",articlePublishedTime:"2023-12-30T21:00:26.125Z",articleModifiedTime:"2023-12-30T21:00:26.125Z",author:"Rhea Mogul",twitterSite:"@CNN",articlePublisher:"https://www.facebook.com/CNN",ogSiteName:"CNN",ogImage:[{url:"https://media.cnn.com/api/v1/images/stellar/prod/231222123805-bangladesh-election-posters-1220.jpg?c=16x9&q=w_800,c_fill",type:"jpg"}],twitterImage:[{url:"https://media.cnn.com/api/v1/images/stellar/prod/231222123805-bangladesh-election-posters-1220.jpg?c=16x9&q=w_800,c_fill"}],ogLocale:"en",favicon:"/media/sites/cnn/favicon.ico",charset:"utf-8",requestUrl:"http://edition.cnn.com/2023/12/31/asia/india-pakistan-bangladesh-srilanka-elections-2024-intl-hnk/index.html",success:!0}},minimal:{url:"refactoring.com/catalog/extractFunction.html",graph:{ogTitle:"Extract Function",charset:"uft-8",requestUrl:"http://refactoring.com/catalog/extractFunction.html",success:!0}},spotify:{url:"https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY",graph:{ogSiteName:"Spotify",musicDuration:"163",musicAlbum:["https://open.spotify.com/album/1xRcR4iSouBrfVhuqFkPAJ"].join(", "),musicAlbumTrack:"5",musicReleaseDate:"2020-04-03",alAndroidAppName:"Spotify",alAndroidPackage:"com.spotify.music",alAndroidUrl:"spotify://track/7FpBQ067pHB67deawpbbcY",alIosAppName:"Spotify",alIosAppStoreId:"324684580",alIosUrl:"spotify://track/7FpBQ067pHB67deawpbbcY",twitterSite:"@spotify",twitterTitle:"Body Like A Back Road",twitterDescription:"Sam Hunt \xB7 Song \xB7 2020",twitterCard:"summary",musicMusician:["https://open.spotify.com/artist/2kucQ9jQwuD8jWdtR9Ef38"].join(", "),ogTitle:"Body Like A Back Road",ogDescription:"Sam Hunt \xB7 Song \xB7 2020",ogUrl:"https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY",ogType:"music.song",ogAudio:"https://p.scdn.co/mp3-preview/06b53d2665f94946d2fc6971aa76a15a390cda0e",ogAudioType:"audio/mpeg",ogImage:[{url:"https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c"}],twitterImage:[{url:"https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c"}],ogLocale:"en",favicon:"https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png",charset:"utf-8",requestUrl:"http://open.spotify.com/track/7FpBQ067pHB67deawpbbcY",success:!0}},youtube:{url:"https://www.youtube.com/watch?v=jpXWl-skfuk",graph:{ogSiteName:"YouTube",ogUrl:"https://www.youtube.com/watch?v=jpXWl-skfuk",ogTitle:"Boebert's Latest Political Stunt Backfires Spectacularly",ogDescription:"Republican Congressman Lauren Boebert announced she'll be switching districts in an attempt to keep a seat in the House of Representatives. Yasmin Khan break...",alIosAppStoreId:"544007664",alIosAppName:"YouTube",alIosUrl:"vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks",alAndroidUrl:"vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks",alWebUrl:"http://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks",ogType:"video.other",alAndroidAppName:"YouTube",alAndroidPackage:"com.google.android.youtube",twitterCard:"player",twitterSite:"@youtube",twitterUrl:"https://www.youtube.com/watch?v=jpXWl-skfuk",twitterTitle:"Boebert's Latest Political Stunt Backfires Spectacularly",twitterDescription:"Republican Congressman Lauren Boebert announced she'll be switching districts in an attempt to keep a seat in the House of Representatives. Yasmin Khan break...",twitterAppNameiPhone:"YouTube",twitterAppIdiPhone:"544007664",twitterAppNameiPad:"YouTube",twitterAppIdiPad:"544007664",twitterAppUrliPhone:"vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks",twitterAppUrliPad:"vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks",twitterAppNameGooglePlay:"YouTube",twitterAppIdGooglePlay:"com.google.android.youtube",twitterAppUrlGooglePlay:"https://www.youtube.com/watch?v=jpXWl-skfuk",ogImage:[{height:720,url:"https://i.ytimg.com/vi/jpXWl-skfuk/maxresdefault.jpg",width:1280,type:"jpg"}],ogVideo:[{height:720,type:"text/html",url:"https://www.youtube.com/embed/jpXWl-skfuk",width:1280}],twitterImage:[{url:"https://i.ytimg.com/vi/jpXWl-skfuk/maxresdefault.jpg"}],twitterPlayer:[{height:720,url:"https://www.youtube.com/embed/jpXWl-skfuk",width:1280}],ogLocale:"en-GB",ogDate:"2023-12-29T12:00:17-08:00",favicon:"https://www.youtube.com/s/desktop/28b0985e/img/favicon.ico",charset:"UTF-8",requestUrl:"http://www.youtube.com/watch?v=jpXWl-skfuk",success:!0}}},J=(t,e)=>{var r,c;let a="";try{a=t.favicon?new URL(t.favicon,t.ogUrl||t.requestUrl||e).toString():""}catch{}return{title:t.ogTitle||t.twitterTitle||"",type:t.ogType||"website",url:t.ogUrl||t.twitterUrl||e,description:t.ogDescription||t.twitterDescription||"",image:((r=t.ogImage)==null?void 0:r[0])||((c=t.twitterImage)==null?void 0:c[0])||null,favicon:a,success:!0,siteName:t.ogSiteName||t.twitterSite||""}},be={title:"Sketches/OpenGraphCard/websites/cnn",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{normalisedGraph:{control:"text"},loading:{control:"boolean"}}},w={render:()=>n.createElement(u,{normalisedGraph:null,loading:!1})},h={render:()=>n.createElement(u,{normalisedGraph:null,loading:!0})},f={name:"cnn.com - home",render:()=>n.createElement(u,{normalisedGraph:J(V["cnn-home"].graph,"https://www.cnn.com"),loading:!1})},y={name:"cnn.com - story",render:()=>n.createElement(n.Fragment,null,n.createElement("i",null,"a cnn story"),n.createElement(u,{normalisedGraph:J(V["cnn-story"].graph,"https://www.cnn.com"),loading:!1}))};var k,x,N;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <OpenGraphCard normalisedGraph={null} loading={false} />
}`,...(N=(x=w.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var C,j,v;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <OpenGraphCard normalisedGraph={null} loading={true} />
}`,...(v=(j=h.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var _,S,T;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'cnn.com - home',
  render: () => <OpenGraphCard normalisedGraph={normalise(examples['cnn-home'].graph, 'https://www.cnn.com')} loading={false} />
}`,...(T=(S=f.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,I,B;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'cnn.com - story',
  render: () => <>
            <i>a cnn story</i>
            <OpenGraphCard normalisedGraph={normalise(examples['cnn-story'].graph, 'https://www.cnn.com')} loading={false} />
        </>
}`,...(B=(I=y.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const ke=["Initial","Loading","CnnRoot","CnnStory"];export{f as CnnRoot,y as CnnStory,w as Initial,h as Loading,ke as __namedExportsOrder,be as default};
