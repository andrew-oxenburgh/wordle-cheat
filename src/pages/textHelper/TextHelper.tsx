import Card from 'react-bootstrap/Card';

import ConversionComponent from './ConversionComponent';
import PageBody from '../../components/PageBody'

const TextHelper = () => {
   return (
      <PageBody name="text-helper" >
         <Card>
            <Card.Body>
               <Card.Text>
                  Converts strings into a bunch of useful formats
               </Card.Text>
               <Card.Text>
                  Try numbers, words, sentences
               </Card.Text>
               <ConversionComponent />
            </Card.Body>
         </Card>
      </PageBody>
   );
}

export default TextHelper;
