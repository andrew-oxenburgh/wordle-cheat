import React, { Suspense, useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import './config/mvp-override.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { version } from './config/config'

import WordleCheat from './pages/wordle-one'
import Cheater from './pages/wordle-cheat-two'
import TextHelper from './pages/text-helper'
import DraggyGamey from './pages/draggey-gamey'
import SumnerTides from './pages/sumner-tides'
import EmojiSearch from './pages/emoji-search'
import Welcome from './pages/welcome'
import Loader from './components/Loader'
import Desktop from './Desktop'
// dynamic because possibly big imports
const NetflixGenre = React.lazy(() => import('./pages/netflix-genre'))
const MarkdownPage = React.lazy(() => import('./pages/markdown-pages'))
const PasswordGenerator = React.lazy(() => import('./pages/password-generator'))
const Home = React.lazy(() => import('./pages/home'))
const PrintPage = React.lazy(() => import('./pages/print-page'))
import {pageList} from './config/page-list'
import Footer from './components/Footer'

function Navigation() {
   const [expanded, setExpanded] = useState(false)
   return (
      <Navbar expanded={expanded} bg="dark" variant="dark" expand="sm" style={{ margin: '0 auto', paddingLeft: '1em' }}>
         <Navbar.Brand href="#/">Andrew Oxenburgh <span style={{ fontSize: '50%' }}>({version})</span></Navbar.Brand>
         <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav onSelect={() => { setExpanded(false) }} className="me-auto">
               <Nav.Link href="#/">Home</Nav.Link>
               <NavDropdown title="Sketches" id="wordle-cheats">
                  {pageList.map((page, index) => (
                     <NavDropdown.Item key={index} href={page.link}>{page.title}</NavDropdown.Item>
                  ))}
                  </NavDropdown>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default function App() {
   return (
      <>
         <Router>
            <header style={{ padding: 0 }}>
               <Navigation />
            </header>
            <main style={{ padding: 0, marginBottom: '25px', backgroundColor: '#eae4ff' }}>
               <Routes>
                  <Route path="/home" element={
                     <Suspense fallback={<Loader />}>
                        <Home />
                     </Suspense>

                  } />

                  <Route path="/" element={<Welcome />} />
                  <Route path="/Welcome" element={<Welcome />} />
                  <Route path="/wordle-one" element={<WordleCheat />} />
                  <Route path="/wordle-two" element={<Cheater />} />
                  <Route path="/text-helper" element={<TextHelper />} />
                  <Route path="/emoji-search" element={<EmojiSearch />} />
                  <Route path="*" element={<TextHelper />} />
                  <Route path="/print-page-genre" element={
                     <Suspense fallback={<Loader />}>
                        <PrintPage />
                     </Suspense>
                  } />
                  <Route path="/netflix-genre" element={
                     <Suspense fallback={<Loader />}>
                        <NetflixGenre />
                     </Suspense>
                  } />
                  <Route path="/password-generator" element={
                     <Suspense fallback={<Loader />}>
                        <PasswordGenerator />
                     </Suspense>
                  } />
                  <Route path="/sumner-tides" element={<SumnerTides />} />
                  <Route path="/draggy-gamey" element={<DraggyGamey />} />
                  <Route path="/markdown/:pageName" element={
                     <Suspense fallback={<Loader />}>
                        <MarkdownPage />
                     </Suspense>
                  } />
                  <Route path="/desktop" element={<Desktop/>} />
               </Routes>
            </main>
            <Footer />
         </Router>
      </>
   )
}
