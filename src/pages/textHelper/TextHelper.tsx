import Card from 'react-bootstrap/Card';

import ConversionComponent from './ConversionComponent';
import InfoThing from '../../components/InfoThing'
import PageHeader, { HeaderType } from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
const help = (
   <InfoThing>
      Text Helper
   </InfoThing>
)

const header: HeaderType = {
   title: 'text helper',
   prev: {
      name: 'wordle 2',
      link: '#/cheatTwo'
   },
   next: {
      name: 'netflix by genre',
      link: '#/netflixGenre'
   },
}

const TextHelper = () => {
   return (
      <PageBody>
         <PageHeader header={header} />
         {help}
         <Card>
            <Card.Text>
               Converts strings into a bunch of useful formats
            </Card.Text>
            <Card.Text>
               Try numbers, words, sentences
            </Card.Text>
            <ConversionComponent />
         </Card>
      </PageBody>
   );
}

export default TextHelper;
