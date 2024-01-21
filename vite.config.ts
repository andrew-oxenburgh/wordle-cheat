/** @type {import('vite').UserConfig} */
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'
import removeConsole from 'vite-plugin-remove-console'
import { splitVendorChunkPlugin } from 'vite'
import BannerInjection from 'vite-plugin-banner-injection'
import { banner, footer } from './src/config/banners'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
const config = ({ mode }: { mode: string }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    return {
        esbuild: {
            jsxInject: `import React from 'react'`
        },
        plugins: [
            // tsconfigPaths(),
            react({
                // so I can use preact-signals-react in my components
                jsxRuntime: 'classic',
            }),
            {
                name: 'markdown-loader',
                // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                transform: (code: string, id: string) => {
                    if (id.slice(-3) === '.md') {
                        // For .md files, get the raw content
                        return `export default ${JSON.stringify(code)};`
                    }
                    if (id === '##date') {
                        // For .md files, get the raw content
                        return `export default {date: "${new Date().toString()}"}`
                    }
                },
            },
            alias({
                // for rollup
                entries: [
                    {
                        find: '#',
                        replacement: resolve(projectRootDir, 'src'),
                    },
                    {
                        find: '##date',
                        replacement: 'hello, world',
                    },
                ],
            }),
            BannerInjection({
                banner,
                footer,
            }),

            removeConsole(),
            splitVendorChunkPlugin(),
        ],
        server: {
            // port: 5000,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: `@import "./src/config/mvp-override.scss";`
                },
            },
        },
        resolve: {
            alias: [
                { find: '#/', replacement: path.resolve(__dirname, 'src') },
            ],
        },
        build: {
            // sourcemap: true,
            manifest: true,
            // minify: true,
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    // about: resolve(__dirname, 'about.html'),
                },
                onwarn: (log: any, handler: any) => {
                    // hide these
                    if (log.code === 'MODULE_LEVEL_DIRECTIVE') {
                        return
                    }
                    handler(log)
                },
            },
            chunkSizeWarningLimit: 1024,
            target: [
                'es2020',
                'edge108', /* 2022-nov */
                'firefox107', /* 2022-nov */
                'chrome104', /* 2022-aug */
                'safari15', /* 2022-jul */
            ],
        },
    }
}
export default defineConfig(config)
