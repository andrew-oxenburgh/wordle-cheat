/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
MIT License
https://github.com/andrew-oxenburgh/wordle-cheat/blob/21d063ecd90cf635497a692146bdf3dc196196e6/LICENSE.md
mailto:andrew.oxenburgh@gmail.com
https://oxenburgh.dev
https://github.com/andrew-oxenburgh/
https://github.com/andrew-oxenburgh/wordle-cheat/
*/
import{R as o}from"./index.6988984c.js";const u=o.createContext({});function c(t){return e;function e(r){const n=a(r.components);return o.createElement(t,{...r,allComponents:n})}}function a(t){const e=o.useContext(u);return o.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const i={};function f({components:t,children:e,disableParentContext:r}){let n;return r?n=typeof t=="function"?t({}):t||i:n=a(t),o.createElement(u.Provider,{value:n},e)}export{u as M,f as a,a as u,c as w};

/*
Copyright (c) 2023, 2024 Andrew Oxenburgh
*/