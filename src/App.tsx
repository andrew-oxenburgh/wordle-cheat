import React from 'react'

import './config/firebase'

import { HashRouter as Router } from 'react-router-dom'
// import './config/mvp-override.scss'
import 'bootstrap/dist/css/bootstrap.css'


// dynamic because possibly big imports
import PageFooter from './components/structural/PageFooter'
import { Navigation } from './Navigation'
import { WCRoutes } from './WCRoutes'

export type LazyComponentType = {
    name: string
    link?: string
    lazyComponent: any
}

const lazyComponents: LazyComponentType[] = [
    // {
    //    name: 'blogs',
    //    link: '#/markdown/examplePage',
    //    lazyComponent: React.lazy(() => (import('./pages/markdown-pages')))
    // },
    {
        name: 'password-generator',
        lazyComponent: React.lazy(() => (import('./pages/password-generator'))),
    },
    {
        name: 'draggey-gamey',
        lazyComponent: React.lazy(() => (import('./pages/draggey-gamey'))),
    },
    {
        name: 'sumner-tides',
        lazyComponent: React.lazy(() => (import('./pages/sumner-tides'))),
    },
    {
        name: 'text-helper',
        lazyComponent: React.lazy(() => (import('./pages/text-helper'))),
    },
    {
        name: 'netflix-genre',
        lazyComponent: React.lazy(() => (import('./pages/netflix-genre'))),
    },
    {
        name: 'print-page',
        lazyComponent: React.lazy(() => (import('./pages/print-page'))),
    },
    {
        name: 'emoji-search',
        lazyComponent: React.lazy(() => (import('./pages/emoji-search'))),
    },
    {
        name: 'wordle-one',
        lazyComponent: React.lazy(() => (import('./pages/wordle-one'))),
    },
    {
        name: 'wordle-two',
        lazyComponent: React.lazy(() => (import('./pages/wordle-two'))),
    },
    {
        name: 'open-graph',
        lazyComponent: React.lazy(() => (import('./pages/OpenGraphPage'))),
    },
]

export const navBarStyle = {
    padding: '0 3em',
    borderRadius: '3px',
    width: '30em',
    margin: 'auto',
}

const App = () => {
    return (
        <>
            <Router>
                <header style={{ padding: 0 }}>
                    <Navigation />
                </header>
                <main style={{ padding: 0, backgroundColor: '#eae4ff' }}>
                    <WCRoutes lazyComponents={lazyComponents} />
                </main>
                <PageFooter />
            </Router>
        </>
    )
}

export default App


