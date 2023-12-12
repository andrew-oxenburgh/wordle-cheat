import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import InfoThing from '../../components/InfoThing'
import UnderConstructionThing from '../../components/UnderConstructionThing';
import PageHeader, { HeaderType } from '../../components/PageHeader'

const help = (
   <InfoThing>
      Wordle 2!!!
   </InfoThing>
)

const header: HeaderType = {
   title: 'Wordle 2',
   prev: {
      name: 'wordle 1',
      link: '#/cheat'
   },
   next: {
      name: 'text helper',
      link: '#/text-helper'
   },
}

const Guesses = () => {
   const [inputValue, setInputValue] = useState('');

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(event.target.value);
   };

   return (
      <Container>
         <PageHeader header={header} />
         <h3>Seriously, don't even look at me!!!</h3>

         {help}
         <UnderConstructionThing />
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