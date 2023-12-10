import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import ConversionComponent from './ConversionComponent';
import InfoThing from '../../components/InfoThing'

const help = (
   <InfoThing>
      Text Helper
   </InfoThing>
)

const TextHelper = () => {
   return (
      <Container>
         {help}
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
