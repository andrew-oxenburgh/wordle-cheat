import { useState } from 'react'
import { createUseStyles } from 'react-jss'

import * as R from 'ramda'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import fiveLetterwords from '#/config/five-letter-words'
import fourLetterWords from '#/config/four-letter-words'
import commonWords from '#/config/common-words'

import CopyablText from '#/components/CopyableText'
import PageBody from '#/components/structural/PageBody'

let words = fiveLetterwords.concat(fourLetterWords).concat(commonWords)

words = R.uniq(words)
const separators: string = '-_~.@'
const numWords = words.length

const useStyles = createUseStyles({
    button: {
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
    },
    password: {
        fontFamily: 'monospace',
        border: '1px solid black',
        padding: '1em',
    },
    alert: {
        position: 'absolute',
        bottom: '10em',
        left: '1em',
    },
    card: {
        maxWidth: '30em',
        margin: 'auto',
    },
})


function* randomNumberGenerator(): Generator<number> {
    const array = new Uint32Array(10)
    while (true) {
        crypto.getRandomValues(array)
        for (const r of array) {
            const n = (r / 5000) % 1
            yield n
        }
    }
}

const rnd = randomNumberGenerator()

const randomWord = (): string => {
    return words[Math.floor(rnd.next().value * numWords)].toLowerCase()
}

const randomSeparator = (): string => {
    return separators[Math.floor(rnd.next().value * separators.length)]
}

const createPassword = () => {
    let password = ''
    password += randomWord()
    password += randomSeparator()
    password += randomWord()
    password += randomSeparator()
    password += randomWord()
    if (password.length < 15) {
        password += randomSeparator()
        password += randomWord()

    }
    return password
}

const JSSComponent: React.FC = () => {
    const [password, setPassword] = useState(createPassword())

    const handleButtonClick = () => {
        setPassword(createPassword())
    }

    const classes = useStyles()
    return (
        <>
            <PageBody name="password-generator">
                <Card className={classes.card}>
                    <Card.Body>
                        <Card.Title>A suggested password</Card.Title>
                        <Card.Text>
                            I strongly recommend you don't use this password generator!!

                        </Card.Text>

                        <Card.Text>
                            I created it as fun little project

                        </Card.Text>
                        <CopyablText text={password} warning="please don't use this password!" />
                        <Card.Footer>
                            <Button
                                aria-label="create a new password"
                                className={classes.button} onClick={handleButtonClick}>create new password
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </PageBody>
        </>
    )
}

export default JSSComponent
