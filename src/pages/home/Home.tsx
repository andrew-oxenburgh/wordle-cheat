import * as R from 'ramda'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faArrowRight as arrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoThing from '../../components/InfoThing'
import PageHeader, { HeaderType } from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
const help = (
   <InfoThing>
      Home Page Info!!!
   </InfoThing>
)

const header: HeaderType = {
   title: 'Home',
   next: {
      name: 'wordle cheat one',
      link: '#/cheat'
   },
   prev: {
      name: 'blog',
      link: '#/markdown/examplePage'
   }
}

type CardType = {
   header: string
   text: string[]
   bg?: string
   link?: {
      href: string
      text: string
   }
};

const cards: CardType[] = [
   {
      header: 'Featured',
      bg: "warning",
      text: [
         'A bunch of coolish utilities',
         'A rule of thumb might be "If it\'s not here, it\'s not cool."'
      ],
      link: {
         href: '#/password-generator',
         text: 'Password Generator'
      }
   },
   {
      header: 'Draggy Gamey',
      text: [
      ],
      link: {
         href: '#/draggy-gamey',
         text: 'draggy gamey'
      }
   },
   {
      header: 'Password Generator',
      text: [
         'This is really just a toy!!!!',
         'It\'ll create quite strong password\'s, but please don\'t trust it with your life.'
      ],
      link: {
         href: '#/password-generator',
         text: 'Password Generator'
      }
   },
   {
      header: 'Wordle One',
      text: [
         'This was my first attempt at a Wordle Cheat',
         'It works, but it\'s a bit dodgy'
      ],
      link: {
         href: '#/cheat',
         text: 'wordle cheat one'
      }
   },
   {
      header: 'Wordle Cheat Two',
      text: [
         'Second attempt, but very much under construction'
      ],
      link: {
         href: '#/cheat',
         text: 'wordle cheat one'
      }
   },
   {
      header: 'Text Helper',
      text: [
         'Accepts some text and offers some transforms you could copy and use'
      ],
      link: {
         href: '#/textHelper',
         text: 'text helper'
      }
   },
   {
      header: 'Netflix Genre Codes',
      text: [
         'Netflix has hundreds of codes to use, and they can be hard to find and use',
         'This provides a nice way to use them'
      ],
      link: {
         href: '#/netflixGenre',
         text: 'Netflix Genre Codes'
      }
   },
   {
      header: 'Sumner Tides',
      text: [
         'Getting Sumner Tide info from NIWA'
      ],
      link: {
         href: '#/sumner-tides',
         text: 'Sumner Tides'
      }
   },
   {
      header: 'Blog Post',
      text: [
         'Some thoughts on replit'
      ],
      link: {
         href: '#/markdown/examplePage',
         text: 'Some Thoughts on Replit'
      }
   },
]

const HomeContent = () => {
   const mapIndexed = R.addIndex(R.map);
   return (
      <Row style={{ width: '100%', margin: '0 auto', padding: 0 }}>
         {
            R.map((card: CardType) => {
               return (
                  <Col xs="12" sm="12" md="6" lg="3" xl="2" key={card.header}>
                     <Card
                        bg={card.bg}
                        style={{ margin: '0.5em 0' }}
                     >
                        <Card.Header>
                           <Card.Link href={card.link?.href}>
                              <FontAwesomeIcon icon={arrow} size="xl" />
                           </Card.Link>
                           &nbsp;{card.header}
                        </Card.Header>
                        <Card.Body>
                           {
                              mapIndexed((line: string, idx: number) => {
                                 return (<Card.Text key={idx}>
                                    {line}
                                 </Card.Text>)
                              }, card.text)
                           }
                           {card.link &&
                              <Card.Link href={card.link.href}>
                              </Card.Link>
                           }
                        </Card.Body>
                     </Card>
                  </Col>
               )
            }, cards)
         }
      </Row>
   )
}

function Home() {
   return (
      <PageBody>
         <PageHeader header={header} />
         {help}
         <HomeContent />
      </PageBody>
   );
};

export default Home;