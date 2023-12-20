
import React, { useState, Suspense } from 'react'
import { createUseStyles } from 'react-jss';

const WordleCheat = React.lazy(() => import('./pages/wordleOne/WordleCheat'))
const Cheater = React.lazy(() => import('./pages/wordleCheatTwo/Cheater'))
const TextHelper = React.lazy(() => import('./pages/textHelper/TextHelper'))
const DraggyGamey = React.lazy(() => import('./pages/draggyGamey/DraggyGamey'))
const SumnerTides = React.lazy(() => import('./pages/sumnerTides/SumnerTides'))
const Welcome = React.lazy(() => import('./pages/welcome/Welcome'))
const NetflixGenre = React.lazy(() => import('./pages/netflixGenre/NetflixGenre'))
const MarkdownPage = React.lazy(() => import('./pages/markdownPages/MarkdownPage'))
const PasswordGenerator = React.lazy(() => import('./pages/passwordGenerator/PasswordGenerator'))
const Home = React.lazy(() => import('./pages/home/Home'))
const PrintPage = React.lazy(() => import('./pages/printPage/PrintPage'))

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from './components/Loader'

const useStyles = createUseStyles({
   chacter: {
      // fontSize: "150%"
   },
});

const pages = [
   WordleCheat,
   Cheater,
   TextHelper,
   DraggyGamey,
   SumnerTides,
   Welcome,
   NetflixGenre,
   MarkdownPage,
   PasswordGenerator,
   Home,
   PrintPage
];



const Desktop = () => {
   return (
      <Container fluid>
         <Row>
            {pages.map((Page, index) =>
            (<>
               <Col sm="6" md="4" lg="2" style={{ paddingTop: '1em' }}>
                  <Suspense key={index} fallback={<Loader />}>
                     <Page key={index} />
                  </Suspense>
               </Col>
            </>
            ))}
         </Row>
      </Container>
   )
}

export default Desktop;

