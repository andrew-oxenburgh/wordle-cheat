import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home() {
   return (
      <Container>
         <h1>Welcome to Wordle Helper!</h1>
         <p>This is a simple tool to assist you in solving Wordle puzzles.</p>
         <p>
            <Button variant="primary" href="#/cheat">Start Cheating</Button>
         </p>
      </Container>
   );
};

export default Home;