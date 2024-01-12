import { Row } from 'react-bootstrap/Row';

import { expect, test, describe } from 'vitest'
import { BoardState, ColsState, LetterState, RowsState, State, calcCols, calcRows } from "./wordle.utils"
import * as R from 'ramda'

const arrayOfBlanks = (width: number): BoardState => R.times(() => {
    return {
        letter: '',
        state: State.NONE
    }
}, width)


const arrayOfOne = (): LetterState[] => arrayOfBlanks(1)
const arrayOfTwo = (): LetterState[] => arrayOfBlanks(2)

const blankLetter = (): LetterState => {
    return {
        letter: '',
        state: State.NONE
    }
}

function findPattern(board: BoardState): string[] {
    const cols: ColsState = calcCols(board)
    if (cols.length === 1) return ['a-z'];
    if (cols.length === 2) return ['a-z', 'a-z']
    return [];
}

const LETTER_A = { state: State.NONE, letter: 'a' };
const LETTER_B = { state: State.NONE, letter: 'b' };
const LETTER_C = { state: State.NONE, letter: 'c' };
const LETTER_D = { state: State.NONE, letter: 'd' };
const LETTER_E = { state: State.NONE, letter: 'e' };
const LETTER_F = { state: State.NONE, letter: 'f' };

describe('blank boards', () => {
    test('one by one NONE allows all letters', () => {
        expect(findPattern(arrayOfOne())).toEqual(['a-z']);
    })
    test('two by one NONE allows all letters in array of 2', () => {
        expect(findPattern(arrayOfTwo())).toEqual(['a-z', 'a-z']);
    })
})
describe('calcRows', () => {
    test('one by one', () => {
        expect(calcRows(arrayOfOne())).toEqual([[blankLetter()]]);
    })
    test('one row of 2', () => {
        const input = arrayOfTwo()
        input[1].letter = 't'
        const actual = calcRows(input)
        const expected = [
            [blankLetter(), { ...blankLetter(), letter: 't' }],
        ]
        expect(actual).toEqual(expected);
    })

    test('three rows of 1', () => {
        const input: BoardState = arrayOfBlanks(3)
        input[1].letter = 't'
        const expected: RowsState = [
            arrayOfOne(),
            [{ state: State.NONE, letter: 't' }],
            arrayOfOne(),
        ]
        expect(calcRows(input, 1)).toEqual(expected);
    })
    test('2 rows of 2', () => {
        const input: BoardState = [
            LETTER_A,
            LETTER_B,
            LETTER_C,
            LETTER_D
        ]
        const expected: RowsState = [
            [
                LETTER_A,
                LETTER_B,
            ],
            [
                LETTER_C,
                LETTER_D,
            ]
        ]
        expect(calcRows(input, 2)).toEqual(expected);
    })
    test('2 columns of 1', () => {
        const input: BoardState = [
            LETTER_A,
            LETTER_B,
        ]
        const expected: ColsState = [[
            LETTER_A,
        ], [
            LETTER_B,
        ]]
        expect(calcCols(input, 2)).toEqual(expected);
    })
    test('1 columns of 2', () => {
        const input: BoardState = [
            LETTER_A,
            LETTER_B,
        ]
        const expected: ColsState = [[
            LETTER_A,
            LETTER_B,
        ]]
        expect(calcCols(input, 1)).toEqual(expected);
    })
    test('2 columns of 2', () => {
        const input: BoardState = [
            LETTER_A,
            LETTER_B,
            LETTER_C,
            LETTER_D,
        ]
        const expected: ColsState = [[
            LETTER_A,
            LETTER_C,
        ], [
            LETTER_B,
            LETTER_D,
        ]]
        expect(calcCols(input, 2)).toEqual(expected);
    })
    test('2 columns of 3', () => {
        const input: BoardState = [
            LETTER_A,
            LETTER_B,
            LETTER_C,
            LETTER_D,
            LETTER_E,
            LETTER_F,
        ]
        const expected: ColsState = [[
            LETTER_A,
            LETTER_C,
            LETTER_E,
        ], [
            LETTER_B,
            LETTER_D,
            LETTER_F,
        ]]
        expect(calcCols(input, 2)).toEqual(expected);
    })

    test('2 rows of 3', () => {
        const input: BoardState = [
            LETTER_A,
            LETTER_B,
            LETTER_C,
            LETTER_D,
            LETTER_E,
            LETTER_F,
        ]
        const expected: ColsState = [[
            LETTER_A,
            LETTER_B,
            LETTER_C,
        ], [
            LETTER_D,
            LETTER_E,
            LETTER_F,
        ]]
        expect(calcRows(input, 3)).toEqual(expected);
    })
})

describe.skip('HERE board', () => {
    test('one by one', () => {
        const board = arrayOfOne()
        board[0].state = State.HERE;
        expect(findPattern(board)).toEqual(['a']);
    })
})

export default {}