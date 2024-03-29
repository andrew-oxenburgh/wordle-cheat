// PAGE: wordle-one

import { useEffect, useState } from 'react'
import * as R from 'ramda'

import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import PageBody from '#/components/structural/PageBody'

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
import WordList from './WordList'
import { GenericEventType } from '#/config/config-types'

const wcInput = {
    background: 'green',
    fontSize: '1.4em',
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    margin: 'auto',
    transition: 'border-color 0.1s',
    '&:not(:hover)': {
        transition: 'border-color 0.1s',
    },
    '& span': {
        fontWeight: 'bold',
    },
}

const useStyles = createUseStyles({
    doesntContain: {
        ...wcInput,
        background: 'slategrey',
        color: 'white',
        '&:focus': {
            background: 'lightGrey',
            colour: 'black',
        },
    },
    containButNotHere: {
        ...wcInput,
        background: 'yellow',
        width: '4em',
        fontSize: '1.1em',
        color: 'black',
        margin: 'auto',
        // padding: '0 0 0 0.2em ',
        '&:focus': {
            background: 'khaki',
            colour: 'black',
        },
    },
    here: {
        ...wcInput,
        minWidth: '1em',
        background: 'green',
        color: 'white',
        '&:focus': {
            background: 'lightGreen',
            colour: 'black',
        },
    },
    myLabel: {
        fontStyle: 'italic',
    },
})

const WordleOne = ({ debug = false }: { debug?: boolean }): JSX.Element => {
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

    const changeUnusedLetters = (evt: GenericEventType) => {
        let value: string = evt.target.value
        value = sanitise(value)
        setForm({ ...form, unused: value })
    }

    const changeKnownLetters = (pos: string, n: number) => {
        return (evt: GenericEventType): void => {
            const value: string = evt.target.value
            if (pos === 'known' && value.length > 1) {
                return
            }
            if (pos === 'unknown' && value.length > 4) {
                return
            }
            const newForm: WordleForm = { ...form }
            if (pos === 'known') {
                newForm.position[n].known = sanitise(value)
            } else {
                newForm.position[n].unknown = sanitise(value)
            }
            setForm(newForm)
        }
    }

    const onFindWords = () => {
        void (async () => {
            setWords(await createRegEx(form))
        })()
    }

    const onFindUnchosen = () => {
        void (async () => {
            setUnchosen(await findWordsWithoutTheseLetters(form))
        })()
    }

    return (
        <PageBody name='wordle-one'>
            <Card style={{ maxWidth: '30em', margin: 'auto' }}>
                <Form style={{
                    width: '100%',
                }}>
                    <Form.Group>

                        {/* UNUSED LETTERS */}
                        <Form.Label>definitely doesn&apos;t contain</Form.Label>
                        <p>
                                Turns to lowercase and orders alphabetically
                        </p>
                        <Form.Control
                            className={classes.doesntContain}
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
                        {/* USED, BUT NOT HERE */}
                        <Container fluid={true} >
                            <Row                                >
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
                                                value={form.position[ndx].unknown}
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
                        {/* USED and HERE!!! */}
                        <Container fluid="sm">
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
                                                value={form.position[ndx].known}
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
            </Card>
        </PageBody>
    )
}

WordleOne.propTypes = {
    debug: PropTypes.bool,
}

export default WordleOne
