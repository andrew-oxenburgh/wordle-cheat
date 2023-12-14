import * as R from 'ramda'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faArrowRight as arrow } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoThing from '../../components/InfoThing'
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'

import pageInfo, { PageInfoType } from '../config'

const help = (
   <InfoThing>
      <h3>App Info</h3>
      This has not been really optimised. Lighthouse scores are not great.
   </InfoThing>
)

const HomeContent = () => {
   const mapIndexed = R.addIndex(R.map);
   return (
      <Row style={{ width: '100%', margin: '0 auto', padding: 0 }}>
         {
            R.reduce((acc: any, card: PageInfoType) => {
               acc.push (
                  <Col xs="6" sm="6" md="3" lg="3" xl="2" key={card.title} >
                     <Card
                        bg={card.bg}
                        style={{ margin: '0.5em 0' }}
                     >
                        <Card.Header>
                           <Card.Link href={card.link}>
                              <FontAwesomeIcon icon={arrow} size="xl" />
                           </Card.Link>
                           &nbsp;{card.title}
                        </Card.Header>
                        <Card.Body>
                           {
                              mapIndexed((line: string, idx: number) => {
                                 return (<Card.Text key={idx}>
                                    {line}
                                 </Card.Text>)
                              }, card.longDesc)
                           }
                           {card.link &&
                              <Card.Link href={card.link}>
                              </Card.Link>
                           }
                        </Card.Body>
                     </Card>
                  </Col>
               )
               return acc
            }, [], pageInfo)
         }
      </Row>
   )
}

function Home() {
   return (
      <PageBody>
         <PageHeader name="home" />
         {help}
         <HomeContent />
      </PageBody>
   );
};

export default Home;