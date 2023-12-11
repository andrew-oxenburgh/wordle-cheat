import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
      }
   ],
   server: {
      host: '0.0.0.0',
   }
})
