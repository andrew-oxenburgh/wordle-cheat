import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import {
   createRegEx,
   findWordsWithoutTheseLetters,
   FORM,
   putJsonInStorage,
   retrieveJsonFromStorageWithDefault,
   sanitise,
   WORDLE_CHEAT_FORM,
   WordleForm,
} from './wordle-utils'
import { createUseStyles } from 'react-jss'
import WordList from './WordList'

const wcInput = {
   background: 'green',
   fontSize: '1.4em',
   fontWeight: 'bold',
   borderRadius: 20,
   borderColor: 'black',
   borderWidth: 2,
   borderStyle: 'solid',
   margin: 0,
   transition: 'border-color 0.1s',
   '&:not(:hover)': {
      transition: 'border-color 0.1s'
   },
   '& span': {
      fontWeight: 'bold'
   }
}

const useStyles = createUseStyles({
   wcInput,
   doesntContain: {
      ...wcInput,
      background: 'slategrey',
      color: 'white',
      '&:focus': {
         background: 'lightGrey',
         colour: 'black'
      }
   },
   containButNotHere: {
      ...wcInput,
      background: 'yellow',
      color: 'black',
      '&:focus': {
         background: 'khaki',
         colour: 'black'
      }
   },
   here: {
      ...wcInput,
      background: 'green',
      color: 'white',
      '&:focus': {
         background: 'lightGreen',
         colour: 'black'
      }
   },
   myLabel: {
      fontStyle: 'italic'
   },
   githubFloat: {
      position: 'fixed',
      left: 10,
      bottom: 10
   }
})


WordleCheat.propTypes = {
   debug: PropTypes.bool
}

function WordleCheat({ debug = false }: { debug?: boolean }): JSX.Element {
   const [form, setForm] = useState<WordleForm>(retrieveJsonFromStorageWithDefault(WORDLE_CHEAT_FORM, FORM))
   const [words, setWords] = useState<string[]>([])
   const [unchosen, setUnchosen] = useState<string[]>([])

   const classes = useStyles()

   useEffect(() => {
      setForm(retrieveJsonFromStorageWithDefault(WORDLE_CHEAT_FORM, FORM))
   }, [])

   useEffect(() => {
      putJsonInStorage(WORDLE_CHEAT_FORM, form)
   }, [form])

   function changeUnusedLetters(evt: any) {
      let value = evt.target.value
      value = sanitise(value)
      setForm({ ...form, unused: value })
   }

   function changeKnownLetters(pos: string, number: number) {
      return (evt: any) => {
         const value = evt.target.value
         if (pos === 'known' && value.length > 1) {
            return
         }
         if (pos === 'unknown' && value.length > 4) {
            return
         }
         const newForm: WordleForm = { ...form }
         if (pos === 'known') {
            newForm.position[number]['known'] = sanitise(value)
         } else {
            newForm.position[number]['unknown'] = sanitise(value)
         }
         setForm(newForm)
      }
   }

   const onFindWords = async () => {
      setWords(await createRegEx(form))
   }
   const onFindUnchosen = async () => {
      setUnchosen(await findWordsWithoutTheseLetters(form))
   }

   return (
      <>
         <Container fluid={true}
            style={{
               maxWidth: '30em',
            }}
         >
            <Card>
               <Card.Body>
                  <Card.Title as="h2">Total Wordle Cheat</Card.Title>
                  <Card.Text as="div" style={{
                     width: '100%',
                     margin: 0,
                  }}>
                     <Form style={{
                        width: '100%',
                     }}>
                        <Form.Group>
                           <Form.Label>definitely doesn&apos;t contain</Form.Label>
                           <p>
                              Turns to lowercase and orders alphabetically
                           </p>
                           <Form.Control
                              className={classes.doesntContain}
                              style={{
                                 width: '15em'
                              }}
                              type="text"
                              autoComplete="off"
                              name="unusedLetters"
                              placeholder="put letters here"
                              value={form.unused}
                              onChange={changeUnusedLetters} />
                           <Form.Text>
                              lower case, no duplicates
                           </Form.Text>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>contains, and position unknown</Form.Label>
                           <Container fluid={true} style={{
                              maxWidth: '50em',
                           }}>
                              <Row>
                                 {R.map((ndx: number) => {
                                    return (
                                       <Col
                                          key={`knownLetter-${ndx}`}
                                       >
                                          <Form.Control
                                             className={classes.containButNotHere}
                                             autoComplete="off"
                                             type="text"
                                             id={`knownLetter-unknownPlace-${ndx}`}
                                             name={`knownLetter-${ndx}`}
                                             value={form.position[ndx]['unknown']}
                                             onChange={changeKnownLetters('unknown', ndx)} />
                                       </Col>
                                    )

                                 })([0, 1, 2, 3, 4])
                                 }
                              </Row>
                           </Container>
                        </Form.Group>

                        <Form.Group>
                           <Form.Label>contains, and position known</Form.Label>
                           <Container fluid="sm" style={{
                              maxWidth: '50em',
                           }}>

                              <Row>
                                 {R.map((ndx: number) => {
                                    return (
                                       <Col
                                          key={`knownLetter-${ndx}`}
                                       >
                                          <Form.Control
                                             className={classes.here}
                                             type="text"
                                             autoComplete="off"
                                             name={`knownLetter-${ndx}`}
                                             value={form.position[ndx]['known']}
                                             onChange={changeKnownLetters('known', ndx)} />
                                       </Col>
                                    )

                                 })([0, 1, 2, 3, 4])
                                 }
                              </Row>
                           </Container>
                        </Form.Group>
                        <Form.Group>
                           <Container style={{
                              marginTop: '1em',
                           }}>
                              <Row>
                                 <Col xs="3">
                                    <Button aria-label="clear form" variant="warning"
                                       onClick={() => setForm({ ...FORM })}>
                                       clear form
                                    </Button>
                                 </Col>
                                 <Col xs="3">
                                    <Button aria-label="find words that fit" variant="primary"
                                       onClick={onFindWords}>
                                       find words
                                    </Button>
                                 </Col>
                                 <Col xs="6">
                                    <Button aria-label="find words using letters unchosen yet"
                                       variant="primary" onClick={onFindUnchosen}>
                                       find words using letters unchosen yet
                                    </Button>
                                 </Col>
                              </Row>
                           </Container>
                        </Form.Group>
                     </Form>
                  </Card.Text>
               </Card.Body>
            </Card>
            <WordList words={words} title="suggestions - for completion" />
            <WordList words={unchosen} title="suggestions - to discover unfound letters" />
            {debug && <Card>
               <Card.Header>debug ifo</Card.Header>
               <Card.Body>
                  <pre>
                     {
                        JSON.stringify(form, null, 4)
                     }
                  </pre>
               </Card.Body>
            </Card>
            }
         </Container>
         <div className={classes.githubFloat} >
            <a href='https://github.com/andrew-oxenburgh/wordle-cheat' target="_blank"><img alt='GitHub' src='https://img.shields.io/badge/github-100000?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=black&color=black' /></a>
         </div>
      </>
   )
}

export default WordleCheat
