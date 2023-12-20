import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageBody from '../../components/PageBody'

const Guesses = () => {
   const [inputValue, setInputValue] = useState('');

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(event.target.value);
   };

   return (
      <>
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
      </>
   );
};

function Cheater() {
   return (
      <>
         <PageBody name="wordle-two">
            <h3>Seriously, don't even look at me!!!</h3>
            <Guesses />
            {Array.from({ length: 4 }).map((_, rowIndex) => (
               <Row key={rowIndex}>
                  {Array.from({ length: 5 }).map((_, colIndex) => (
                     <Col key={colIndex}>
                        <div>
                           Row {rowIndex + 1} Col {colIndex + 1}
                        </div>
                     </Col>
                  ))}
               </Row>
            ))}
         </PageBody>
      </>
   );
}

export default Cheater;