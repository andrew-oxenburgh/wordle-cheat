import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import WordleCheat from './pages/wordleOne/WordleCheat';
import Cheater from './pages/wordleCheatTwo/Cheater';
import TextHelper from './pages/textHelper/TextHelper'
import NetflixGenre from './pages/netflixGenre/NetflixGenre'
import MarkdownPage from './pages/markdownPages/MarkdownPage'
import SumnerTides from './pages/sumnerTides/SumnerTides';
import Home from './pages/home/Home';

function Navigation() {
   const [expanded, setExpanded] = useState(false);

   return (
      <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg" style={{ margin: 0 }}>
         <Container>
            <Navbar.Brand href="#/">Andrew Oxenburgh</Navbar.Brand>
            <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav onSelect={() => { setExpanded(false) }} className="me-auto">
                  <Nav.Link href="#/home">Home</Nav.Link>
                  <Nav.Link href="#/cheat">Wordle One Cheat </Nav.Link>
                  <Nav.Link href="#/cheatTwo">Wordle Cheat Two</Nav.Link>
                  <Nav.Link href="#/textHelper">Text Helper</Nav.Link>
                  <Nav.Link href="#/netflixGenre">Netflix By Genre</Nav.Link> {/* NetflixGenre link */}
                  <Nav.Link href="#/markdown/examplePage">My First Markdown!!!</Nav.Link> {/* NetflixGenre link */}
                  <Nav.Link href="#/sumner-tides">Sumner Tides</Nav.Link>
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
            <main style={{ padding: 0 }}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cheat" element={<WordleCheat />} />
                  <Route path="/cheatTwo" element={<Cheater />} />
                  <Route path="/textHelper" element={<TextHelper />} />
                  <Route path="*" element={<TextHelper />} />
                  <Route path="/netflixGenre" element={<NetflixGenre />} /> {/* NetflixGenre route */}
                  <Route path="/sumner-tides" element={<SumnerTides />} />
                  <Route path="/markdown/:pageName" element={<MarkdownPage />} />
               </Routes>
            </main>
         </Router>
      </>
   );
}
