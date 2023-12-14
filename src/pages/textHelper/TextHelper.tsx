import Card from 'react-bootstrap/Card';

import ConversionComponent from './ConversionComponent';
import InfoThing from '../../components/InfoThing'
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
const help = (
   <InfoThing>
      Text Helper
   </InfoThing>
)

const TextHelper = () => {
   return (
      <PageBody>
         <PageHeader name="text-helper"/>
         {help}
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
