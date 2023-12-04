import { Container, Form, Row, Col } from 'react-bootstrap';

import React, { useState } from 'react';

const Guesses = () => {
   const [inputValue, setInputValue] = useState('');

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(event.target.value);
   };

   return (
      <Container>
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