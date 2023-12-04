import WordleCheat from './wordle/WordleCheat';
import Home from './home/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
   return (
      <>
         <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
               <Navbar.Brand href="/">Wordle Helper</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/cheat">Wordle Cheat</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <main>
            <Router>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cheat" element={<WordleCheat />} />
               </Routes>
            </Router>
         </main>
      </>
   );
}
