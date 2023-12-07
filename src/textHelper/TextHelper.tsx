import { Container, Card, Button } from 'react-bootstrap';
import ConversionComponent from './ConversionComponent';
const TextHelper = () => {
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
                  <ConversionComponent />
               </Card.Text>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default TextHelper;
