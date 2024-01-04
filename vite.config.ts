/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import express from './express-plugin'


// https://vitejs.dev/config/
const config = (props) => {
   console.log('props, props', props)
   return {
      plugins: [
         react({
            // so I can use preact-signals-react in my components
            jsxRuntime: "classic",
         }),
         {
            name: "markdown-loader",
            transform(code, id) {
               if (id.slice(-3) === ".md") {
                  // For .md files, get the raw content
                  return `export default ${JSON.stringify(code)};`;
               }
            }
         },
         express('express.js')
      ],
      server: {
         // port: 5000,
      },
      css: {
         preprocessorOptions: {
            scss: {
               // additionalData: `@import "./src/config/mvp-override.scss";`
            }
         }
      }
   }
}
export default defineConfig(config)
