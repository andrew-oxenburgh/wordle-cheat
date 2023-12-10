import { Container, Card, Button } from 'react-bootstrap';
import ConversionComponent from './ConversionComponent';
const TextHelper = () => {
   // Add your string helper logic here

   return (
      <Container>
         <Card>
            <Card.Body>
               <Card.Title>String Helper Tool</Card.Title>
               <Card.Text>
                  Converts strings into a bunch of useful formats
               </Card.Text>
               <Card.Text>
                  Try numbers, words, sentences
               </Card.Text>
               <ConversionComponent />
            </Card.Body>
         </Card>
      </Container>
   );
}

export default TextHelper;
