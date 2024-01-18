/** @type {import('vite').UserConfig} */
// import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'
import removeConsole from 'vite-plugin-remove-console';
import { splitVendorChunkPlugin } from 'vite'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
const config = ({ command, mode }) => {
   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

   return {
      plugins: [
         // tsconfigPaths(),
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
         alias({
            // for rollup
            entries: [
               {
                  find: '#',
                  replacement: resolve(projectRootDir, 'src')
               }
            ]
         }),
         removeConsole(),
         splitVendorChunkPlugin()
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
      },
      resolve: {
         alias: [
            { find: '#/', replacement: path.resolve(__dirname, 'src') },
         ],
      },

   }
}
export default defineConfig(config)
