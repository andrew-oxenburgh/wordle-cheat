import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoThing from '../../components/InfoThing'
import UnderConstructionThing from '../../components/UnderConstructionThing';

const help = (
   <InfoThing>
      Wordle 2!!!
   </InfoThing>
)

const Guesses = () => {
   const [inputValue, setInputValue] = useState('');

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(event.target.value);
   };

   return (
      <Container>
         <h1>My Second Wordle Cheat</h1>
         {help}
         <UnderConstructionThing/>
         <Row>
            <Col>
               <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Multi-line Input</Form.Label>
                     <Form.Control
                        as="textarea"
                        rows={3}
                        value={inputValue}
                        onChange={handleChange}
                     />
                  </Form.Group>
               </Form>
            </Col>
         </Row>
      </Container>
   );
};

function Cheater() {
   return (
      <>
         <Guesses />
         <Container>
            {Array.from({ length: 4 }).map((_, rowIndex) => (
               <Row key={rowIndex} className="mb-4">
                  {Array.from({ length: 5 }).map((_, colIndex) => (
                     <Col key={colIndex}>
                        <div className="p-3 border bg-light">
                           Row {rowIndex + 1} Col {colIndex + 1}
                        </div>
                     </Col>
                  ))}
               </Row>
            ))}
         </Container>
      </>
   );
}

export default Cheater;