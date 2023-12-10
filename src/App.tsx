import WordleCheat from './wordleOne/WordleCheat';
import Cheater from './wordleCheatTwo/Cheater';
import TextHelper from './textHelper/TextHelper'
import NetflixGenre from './netflixGenre/NetflixGenre'
import MarkdownPage from './markdownPages/MarkdownPage'

import Home from './home/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Navigation() {
   return (
      <Navbar bg="dark" variant="dark" expand="lg">
         <Container>
            <Navbar.Brand href="#/">Andrew Oxenburgh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#/home">Home</Nav.Link>
                  <Nav.Link href="#/cheat">Wordle Cheat One</Nav.Link>
                  <Nav.Link href="#/cheatTwo">Wordle Cheat Two</Nav.Link>
                  <Nav.Link href="#/textHelper">Text Helper</Nav.Link>
                  <Nav.Link href="#/netflixGenre">Netflix By Genre</Nav.Link> {/* NetflixGenre link */}
                  <Nav.Link href="#/markdown/examplePage">My First Markdown!!!</Nav.Link> {/* NetflixGenre link */}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default function App() {
   return (
      <>
         <Router>
            <Navigation />
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cheat" element={<WordleCheat />} />
                  <Route path="/cheatTwo" element={<Cheater />} />
                  <Route path="/textHelper" element={<TextHelper />} />
                  <Route path="*" element={<TextHelper />} />
                  <Route path="/netflixGenre" element={<NetflixGenre />} /> {/* NetflixGenre route */}
                  <Route path="/markdown/:pageName" element={<MarkdownPage />} />
               </Routes>
            </main>
         </Router>
      </>
   );
}
