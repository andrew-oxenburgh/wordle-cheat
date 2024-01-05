import React, { Suspense, useState } from 'react'
import * as R from 'ramda'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './config/firebase'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import './config/mvp-override.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { pageDefinitions, version } from './config/config'

import Welcome from './pages/welcome'

import Loader from './components/Loader'
import Desktop from './Desktop'
// dynamic because possibly big imports
import PageFooter from './components/structural/PageFooter'

type LazyComponentType = {
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
        name: 'my-links',
        lazyComponent: React.lazy(() => (import('./pages/my-links'))),
    },
]

const Navigation = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <Navbar expanded={expanded} bg="dark" variant="dark" expand="sm" style={{ margin: '0 auto', paddingLeft: '1em' }}>
            <Navbar.Brand href="#/">Sketches <span style={{ fontSize: '50%' }}>({version})</span></Navbar.Brand>
            <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onSelect={() => { setExpanded(false) }} className="me-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <NavDropdown title="Sketches" id="wordle-cheats">
                        {pageDefinitions.map((page) => (
                            <NavDropdown.Item key={page.title} href={page.link}>{page.title}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <Nav.Link href="/sb/index.html" target="_blank" >Storybook</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const App = () => {
    return (
        <>
            <Router>
                <header style={{ padding: 0 }}>
                    <Navigation />
                </header>
                <main style={{ padding: 0, marginBottom: '25px', backgroundColor: '#eae4ff' }}>
                    <Routes>
                        {
                            R.map((page: LazyComponentType) => {
                                const path = page.link || '/' + page.name
                                const Comp = page.lazyComponent
                                return (
                                    <Route path={path} key={path} element={
                                        <Suspense fallback={<Loader />}>
                                            <Comp />
                                        </Suspense>

                                    } />

                                )
                            }, lazyComponents)
                        }

                        <Route path="/welcome" element={<Welcome />} />
                        <Route path="/" element={<Welcome />} />
                        <Route path="*" element={<p >404 page not found </p>} />
                        <Route path="/desktop" element={<Desktop />} />

                    </Routes>
                </main>
                <PageFooter />
            </Router>
        </>
    )
}

export default App
