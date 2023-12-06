import { Container, Card, Button } from 'react-bootstrap';

const StringHelper = () => {
   // Add your string helper logic here

   return (
      <Container>
         <h2>String Helper Page</h2>
         <Card>
            <Card.Body>
               <Card.Title>String Helper Tool</Card.Title>
               <Card.Text>
                  This is where you can add your string helper tools and functionality.
                 

               </Card.Text>
               <Button variant="primary">Use String Helper</Button>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default StringHelper;
