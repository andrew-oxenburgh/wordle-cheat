
import { expect, test, describe } from 'vitest'
import { blankBoard, BoardState } from "./wordle.utils"

const oneByOne = blankBoard(1, 1)
const twoByOne = blankBoard(2, 1)
function findPattern(board: BoardState): string[] {
    if (board.length === 1) return ['a-z'];
    if (board.length === 2) return ['a-z', 'a-z']
    return [];
}

describe('wordle.utils', () => {
    test('one by one NONE allows all letters', () => {
        expect(findPattern(oneByOne)).toEqual(['a-z']);
    })
    test('two by one NONE allows all letters in array of 2', () => {
        expect(findPattern(twoByOne)).toEqual(['a-z', 'a-z']);
    })
})

export default {}
