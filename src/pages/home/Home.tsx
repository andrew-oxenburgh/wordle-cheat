import * as R from 'ramda'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { createUseStyles } from 'react-jss';

import InfoThing from '../../components/InfoThing'

const help = (
   <InfoThing>
      Home Page Info!!!
   </InfoThing>
)

const useStyles = createUseStyles({
   cardContainer: {
      margin: '0em 1em 1em 0em',
   },
   container: {
      marginTop: '1em'
   }
});

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
         href: '#/draggy-gamey',
         text: 'Draggy Gamey'
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

function Home() {
   const classes = useStyles()
   const mapIndexed = R.addIndex(R.map);

   return (
      <Container className={classes.container}>
         {help}
         <Row>
            {
               R.map((card: CardType) => {
                  return (
                     <Col xs="12" sm="12" md="6" lg="3" xl="2" key={card.header}>
                        <Card
                           className={classes.cardContainer}
                           bg={card.bg}
                        >
                           <Card.Header>{card.header}</Card.Header>
                           <Card.Body>
                              {
                                 mapIndexed((line: string, idx: number) => {
                                    return (<Card.Text key={idx}>
                                       {line}
                                    </Card.Text>)
                                 }, card.text)
                              }
                              {card.link &&
                                 <Card.Link href={card.link.href}>{card.link.text}</Card.Link>
                              }
                           </Card.Body>
                        </Card>
                     </Col>
                  )
               }, cards)
            }
         </Row>
      </Container>
   );
};

export default Home;