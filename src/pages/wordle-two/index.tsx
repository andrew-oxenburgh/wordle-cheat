import { KeyboardEventHandler, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PageBody from '../../components/structural/PageBody'
import Button from 'react-bootstrap/Button'
import {
    BoardState,
    State,
    notNormalLetter,
    variant,
    blankBoard,
    incrState,
} from './wordle.utils'

const _width = 5
const _height = 6

const Legend = (
    <>
        <span>
            <Button size='lg' variant={variant(State.NONE)}
            >
                -
            </Button>
            None
        </span>
        <span>
            <Button size='lg' variant={variant(State.NOT_USED)}>
                -
            </Button>
            Not Used
        </span>
        <span>
            <Button size='lg' variant={variant(State.USED)}>
                -
            </Button>
            Used
        </span>
        <span>
            <Button size='lg' variant={variant(State.HERE)}>
                -
            </Button>
            Here
        </span>
    </>
)
const WordleTwo = (): JSX.Element => {
    const [boardState, setBoardState] = useState<BoardState>((blankBoard(_width, _height)))
    const [next, setNext] = useState<number>(0)
    const onkeydown = (event: KeyboardEvent): void => {
        const k = event.key
        if (event.metaKey || event.ctrlKey) {
            return
        }

        if (
            k === 'Backspace' ||
            k === 'Delete') {
            if (next > 0) {
                const newBoardState: BoardState = [...boardState]
                newBoardState[next - 1] = {
                    letter: '-',
                    state: State.NONE
                }
                setBoardState(newBoardState)
                setNext(next - 1)
            }
            return
        }

        if (notNormalLetter(k)) {
            return
        }

        if (next < _width * _height) {
            const newLetters = [...boardState]
            newLetters[next].letter = k.toLowerCase()
            setBoardState(newLetters)
            setNext(next + 1)
            return
        }
    }

    type VoidFunction = () => void;

    function onClick(offset: number): VoidFunction {
        return (): void => {
            const newLetters = [...boardState]
            newLetters[offset].state = incrState(newLetters[offset].state)
            setBoardState(newLetters)
        }
    }

    const onClear = () => {
        setBoardState(blankBoard(_width, _height))
        setNext(0)
    }

    return (
        <div onKeyDown={onkeydown as unknown as KeyboardEventHandler} tabIndex={0}>
            <PageBody name="wordle-two">
                <h3>Seriously, don't even look at me!!!</h3>
                {Legend}
                {Array.from({ length: _height }).map((_, rowIndex) => (
                    <Row key={rowIndex}>
                        {Array.from({ length: _width }).map((__, colIndex) => (
                            <Col key={colIndex}>
                                <Button
                                    size="lg"
                                    variant={variant(boardState[rowIndex * _width + colIndex].state)}
                                    onClick={onClick(_width * rowIndex + colIndex)}
                                    disabled={rowIndex * _width + colIndex > next - 1}
                                >
                                    {boardState[_width * rowIndex + colIndex].letter}
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