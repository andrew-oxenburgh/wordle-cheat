import { Container, Card, Button } from 'react-bootstrap';
import TextInputComponent from './TextInputComponent';
const StringHelper = () => {
   // Add your string helper logic here

   return (
      <Container>
         <h2>String Helper Page</h2>
         <Card>
            <Card.Body>
               <Card.Title>String Helper Tool</Card.Title>
               <Card.Text>
                  Put your text in here, and see what you get
               </Card.Text>
               <Card.Text>
                  <TextInputComponent />
               </Card.Text>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default StringHelper;
