
import React, { useState, Suspense } from 'react'
import { createUseStyles } from 'react-jss'

const WordleCheat = React.lazy(() => import('./pages/wordle-one'))
const Cheater = React.lazy(() => import('./pages/wordle-two'))
const TextHelper = React.lazy(() => import('./pages/text-helper'))
const DraggyGamey = React.lazy(() => import('./pages/draggey-gamey'))
const SumnerTides = React.lazy(() => import('./pages/sumner-tides'))
const Welcome = React.lazy(() => import('./pages/welcome'))
const NetflixGenre = React.lazy(() => import('./pages/netflix-genre'))
const MarkdownPage = React.lazy(() => import('./pages/markdown-pages'))
const PasswordGenerator = React.lazy(() => import('./pages/password-generator'))
const EmojiSearch = React.lazy(() => import('./pages/emoji-search'))
const PrintPage = React.lazy(() => import('./pages/print-page'))

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loader from './components/Loader'

const useStyles = createUseStyles({
   page: {
      paddingTop: '1em',
      maxWidth: '50em',
      maxHeight: '50em',
      overflow: 'scroll',
      // fontSize: "150%"
   },
})

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
   EmojiSearch,
   // Home,
   PrintPage,
]

const Desktop = () => {
   const classes = useStyles()
   return (
      <Container fluid style={{ paddingBottom: '4em' }}>
         <Row>
            {pages.map((Page, index) =>
            (<>
               <Col sm="6" md="4" lg="3" xl="3" className={classes.page}>
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

export default Desktop
