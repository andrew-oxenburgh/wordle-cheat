export type LazyComponentType = {
    name: string
    link?: string
    lazyComponent: any
}

export const lazyComponents: LazyComponentType[] = [
    // {
    //    name: 'blogs',
    //    link: '#/markdown/examplePage',
    //    lazyComponent: React.lazy(() => (import('./pages/markdown-pages')))
    // },
    {
        name: 'password-generator',
        lazyComponent: React.lazy(() => import('./pages/password-generator')),
    },
    {
        name: 'imitation-onion',
        lazyComponent: React.lazy(() => import('./pages/imitation-onion')),
    },
    {
        name: 'draggey-gamey',
        lazyComponent: React.lazy(() => import('./pages/draggey-gamey')),
    },
    {
        name: 'sumner-tides',
        lazyComponent: React.lazy(() => import('./pages/sumner-tides')),
    },
    {
        name: 'text-helper',
        lazyComponent: React.lazy(() => import('./pages/text-helper')),
    },
    {
        name: 'netflix-genre',
        lazyComponent: React.lazy(() => import('./pages/netflix-genre')),
    },
    {
        name: 'print-page',
        lazyComponent: React.lazy(() => import('./pages/print-page')),
    },
    {
        name: 'emoji-search',
        lazyComponent: React.lazy(() => import('./pages/emoji-search')),
    },
    {
        name: 'wordle-one',
        lazyComponent: React.lazy(() => import('./pages/wordle-one')),
    },
    {
        name: 'wordle-two',
        lazyComponent: React.lazy(() => import('./pages/wordle-two')),
    },
    {
        name: 'open-graph',
        lazyComponent: React.lazy(() => import('./pages/open-graph-page')),
    },
    {
        name: 'sketch-countdown',
        lazyComponent: React.lazy(() => import('./pages/sketch-countdown')),
    },
    {
        name: 'be-spectacled',
        lazyComponent: React.lazy(() => import('./pages/be-spectacled')),
    },
    {
        name: 'state-machine',
        lazyComponent: React.lazy(() => import('./pages/state-machine')),
    },
    {
        name: 'warmer-scheme',
        lazyComponent: React.lazy(() => import('./pages/warmer-scheme')),
    },
]
