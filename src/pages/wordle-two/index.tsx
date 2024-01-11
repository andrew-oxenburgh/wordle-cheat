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

function Letter({ l, onStatusChange }: { l: LetterState, onStatusChange: () => void }): JSX.Element {
    const [letter, setLetter] = useState<LetterState>(l)
    const onClick = () => {
        setLetter(
            {
                letter: letter.letter,
                state: incrState(letter.state)
            })
        onStatusChange()
    }
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

    return (
        <Button onClick={onClick} variant={variant(letter)}>
            {letter.letter}
        </Button>
    )
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

const WordleTwo = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<LetterState[]>(initedLetters)
    const [next, setNext] = useState<number>(0)
    const onkeydown = (event: KeyboardEvent): void => {
        const k = event.key
        console.log('k', k)
        if (k === 'Backspace' || k === 'Delete') {
            setInputValue([...inputValue.slice(0, -1)])
            setNext(next - 1)
            return
        }

        if (notNormalLetter(k)) {
            return
        }

        if (inputValue.length < _width * _height) {
            const newLetters = [...inputValue]
            newLetters[next].letter = k.toLowerCase()
            setInputValue(newLetters)
            setNext(next + 1)
            return
        }
    }

    type VoidFunction = () => void;

    function onStatusChange(offset: number): VoidFunction {
        return (): void => {
            console.log('offset', offset)
        }
    }

    console.log('inputValue', inputValue)

    return (
        <div onKeyDown={onkeydown} tabIndex={0}>
            <PageBody name="wordle-two">
                <h3>Seriously, don't even look at me!!!</h3>
                {Array.from({ length: _height }).map((_, rowIndex) => (
                    <Row key={rowIndex}>
                        {Array.from({ length: _width }).map((__, colIndex) => (
                            <Col key={colIndex}>
                                <Letter
                                    l={inputValue[_width * rowIndex + colIndex]}
                                    onStatusChange={onStatusChange(_width * rowIndex + colIndex)}
                                />
                            </Col>
                        ))}
                    </Row>
                ))}
            </PageBody>
        </div>
    )
}

export default WordleTwo
