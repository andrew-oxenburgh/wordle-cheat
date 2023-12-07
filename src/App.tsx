import WordleCheat from './wordleOne/WordleCheat';
import Cheater from './wordleCheatTwo/Cheater';
import TextHelper from './textHelper/TextHelper'

import Home from './home/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Navigation() {
   return (
      <Navbar bg="dark" variant="dark" expand="lg">
         <Container>
            <Navbar.Brand href="#/">Wordle Helper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#/home">Home</Nav.Link>
                  <Nav.Link href="#/cheat">Wordle Cheat One</Nav.Link>
                  <Nav.Link href="#/cheatTwo">Wordle Cheat Two</Nav.Link>
                  <Nav.Link href="#/stringHelper">String Helper</Nav.Link> {/* New stringHelper link */}
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
                  <Route path="/" element={<WordleCheat />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cheat" element={<WordleCheat />} />
                  <Route path="/cheatTwo" element={<Cheater />} />
                  <Route path="/stringHelper" element={<TextHelper />} />
                  <Route path="*" element={<Cheater />} />
               </Routes>
            </main>
         </Router>
      </>
   );
}
