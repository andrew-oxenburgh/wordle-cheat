import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoThing from '../../components/InfoThing'
import UnderConstructionThing from '../../components/UnderConstructionThing';
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
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
         <PageBody>
            <PageHeader name="wordle-two" />
            <h3>Seriously, don't even look at me!!!</h3>

            {help}
            <UnderConstructionThing />

            <Guesses />
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
         </PageBody>
      </>
   );
}

export default Cheater;