import React, { KeyboardEventHandler, useState } from 'react'
import * as R from 'ramda'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PageBody from '../../components/structural/PageBody'
import Button from 'react-bootstrap/Button'

const _width = 5
const _height = 6

enum State {
    'NONE' = 0,
    'NOT_USED',
    'USED',
    'HERE'
}

const incrState = (state: State): State => {
    switch (state) {
        case State.NONE:
            return State.NOT_USED
        case State.NOT_USED:
            return State.USED
        case State.USED:
            return State.HERE
        case State.HERE:
            return State.NONE
    }
}

interface LetterState {
    letter: string
    state: State
}

function notNormalLetter(input: string): boolean {
    return ! /^[A-Za-z]$/.test(input);
}

const initedLetters: LetterState[] = R.times(
    () => {
        return {
            letter: '-',
            state: State.NONE
        }
    },
    _width * _height,
)

const variant = (state: LetterState): string => {
    switch (state.state) {
        case State.NONE:
            return 'secondary'
        case State.NOT_USED:
            return 'light'
        case State.USED:
            return 'warning'
        case State.HERE:
            return 'success'
    }
}

const WordleTwo = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<LetterState[]>(initedLetters)
    const [next, setNext] = useState<number>(0)
    const onkeydown = (event: KeyboardEvent): void => {
        const k = event.key
        if (k === 'Backspace' || k === 'Delete') {
            setInputValue([...inputValue.slice(0, -1)])
            setNext(next - 1)
            return
        }

        if (notNormalLetter(k)) {
            return
        }

        if (next < _width * _height) {
            const newLetters = [...inputValue]
            newLetters[next].letter = k.toLowerCase()
            setInputValue(newLetters)
            setNext(next + 1)
            return
        }
    }

    type VoidFunction = () => void;

    function onClick(offset: number): VoidFunction {
        return (): void => {
            const newLetters = [...inputValue]
            newLetters[offset].state = incrState(newLetters[offset].state)
            setInputValue(newLetters)
        }
    }

    const onClear = () => {
        setInputValue(initedLetters)
        setNext(0)
    }

    return (
        <div onKeyDown={onkeydown} tabIndex={0}>
            <PageBody name="wordle-two">
                <h3>Seriously, don't even look at me!!!</h3>
                {Array.from({ length: _height }).map((_, rowIndex) => (
                    <Row key={rowIndex}>
                        {Array.from({ length: _width }).map((__, colIndex) => (
                            <Col key={colIndex}>
                                <Button
                                    variant={variant(inputValue[rowIndex * _width + colIndex])}
                                    onClick={onClick(_width * rowIndex + colIndex)}
                                    disabled={rowIndex * _width + colIndex > next - 1}
                                >
                                    {inputValue[_width * rowIndex + colIndex].letter}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                ))}
                <Button variant="primary" onClick={onClear}>
                    clear
                </Button>
            </PageBody>
        </div>
    )
}

export default WordleTwo
