import React, { Suspense, useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import WordleCheat from './pages/wordleOne/WordleCheat'
import Cheater from './pages/wordleCheatTwo/Cheater'
import TextHelper from './pages/textHelper/TextHelper'
import DraggyGamey from './pages/draggyGamey/DraggyGamey'
import SumnerTides from './pages/sumnerTides/SumnerTides'
import Welcome from './pages/welcome/Welcome'
import Loader from './components/Loader'
// import 'bootstrap/dist/css/bootstrap.css';
import './config/mvp-override.scss'
import { version } from './config/config'
// dynamic because possibly big imports
const NetflixGenre = React.lazy(() => import('./pages/netflixGenre/NetflixGenre'))
const MarkdownPage = React.lazy(() => import('./pages/markdownPages/MarkdownPage'))
const PasswordGenerator = React.lazy(() => import('./pages/passwordGenerator/PasswordGenerator'))
const Home = React.lazy(() => import('./pages/home/Home'))
const PrintPage = React.lazy(() => import('./pages/printPage/PrintPage'))
const Desktop = React.lazy(() => import('./Desktop'))

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
               <NavDropdown title="Wordle Cheats" id="wordle-cheats">
                  <NavDropdown.Item href="#/wordle-one">My First Wordle Cheat</NavDropdown.Item>
                  <NavDropdown.Item href="#/wordle-two">My Second Wordle Cheat</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Sundry" id="sundry">
                  <NavDropdown.Item href="#/text-helper">Text Helper</NavDropdown.Item>
                  <NavDropdown.Item href="#/netflix-genre">Netflix By Genre</NavDropdown.Item>
                  <NavDropdown.Item href="#/sumner-tides">Sumner Tides</NavDropdown.Item>
                  <NavDropdown.Item href="#/draggy-gamey">Draggy Gamey</NavDropdown.Item>
                  <NavDropdown.Item href="#/draggy-gamey">Draggy Gamey</NavDropdown.Item>
                  <NavDropdown.Item href="#/print-page">Print Page</NavDropdown.Item>
                  <NavDropdown.Item href="#/welcome">Welcome</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Blogs" id="blogs">
                  <NavDropdown.Item href="#/markdown/examplePage">Some Thoughts on Replit</NavDropdown.Item>
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
                  <Route path="/print-page" element={<PrintPage />} />
                  <Route path="*" element={<TextHelper />} />
                  <Route path="/netflix-genre" element={
                     <Suspense fallback={<Loader />}>
                        <NetflixGenre />
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
                  <Route path="/desktop" element={
                     <Suspense fallback={<Loader />}>
                        <Desktop />
                     </Suspense>
                  } />
               </Routes>
            </main>
            <Footer />
         </Router>
      </>
   )
}
