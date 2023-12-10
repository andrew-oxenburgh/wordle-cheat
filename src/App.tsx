import React, { Suspense, useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import WordleCheat from './pages/wordleOne/WordleCheat';
import Cheater from './pages/wordleCheatTwo/Cheater';
import TextHelper from './pages/textHelper/TextHelper'
import SumnerTides from './pages/sumnerTides/SumnerTides';
import Home from './pages/home/Home';

// dynamic because possibly big imports
const NetflixGenre = React.lazy(() => import('./pages/netflixGenre/NetflixGenre'));
const MarkdownPage = React.lazy(() => import('./pages/markdownPages/MarkdownPage'));
import Footer from './components/Footer';

function Navigation() {
   const [expanded, setExpanded] = useState(false);

   return (
      <Navbar expanded={expanded} bg="dark" variant="dark" expand="sm" style={{ margin: 0 }}>
         <Container>
            <Navbar.Brand href="#/">Andrew Oxenburgh</Navbar.Brand>
            <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav onSelect={() => { setExpanded(false) }} className="me-auto">
                  <Nav.Link href="#/home">Home</Nav.Link>
                  <NavDropdown title="Wordle Cheats" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#/cheat">My first cheat</NavDropdown.Item>
                     <NavDropdown.Item href="#/cheatTwo">My second cheat</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Sundry" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#/textHelper">My first cheat</NavDropdown.Item>
                     <NavDropdown.Item href="#/netflixGenre">My second cheat</NavDropdown.Item>
                     <NavDropdown.Item href="#/sumner-tides">My second cheat</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Blogs" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#/markdown/examplePage">Some Thoughts on Replit</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

const headerStyle = { margin: 0, padding: 0 }

export default function App() {
   return (
      <>
         <Router>
            <header style={headerStyle}>
               <Navigation />
            </header>
            <main style={{ padding: 0, marginBottom: '25px' }}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cheat" element={<WordleCheat />} />
                  <Route path="/cheatTwo" element={<Cheater />} />
                  <Route path="/textHelper" element={<TextHelper />} />
                  <Route path="*" element={<TextHelper />} />
                  <Route path="/netflixGenre" element={
                     <Suspense fallback={<div>Loading...</div>}>
                        <NetflixGenre />
                     </Suspense>
                  } />
                  <Route path="/sumner-tides" element={<SumnerTides />} />
                  <Route path="/markdown/:pageName" element={
                     <Suspense fallback={<div>Loading...</div>}>
                        <MarkdownPage />
                     </Suspense>
                  } />
               </Routes>
            </main>
            <Footer />
         </Router>
      </>
   );
}
