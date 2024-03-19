import * as R from 'ramda'
import { BoardState, ColsState, Letter, LetterState, RowsState } from './wordle.type'

export const incrState = (state: LetterState): LetterState => {
    switch (state) {
        case LetterState.NONE:
            return LetterState.NOT_USED
        case LetterState.NOT_USED:
            return LetterState.USED
        case LetterState.USED:
            return LetterState.HERE
        case LetterState.HERE:
            return LetterState.NONE
    }
}

export const notNormalLetter = (input: string): boolean => {
    return ! /^[A-Za-z]$/.test(input)
}

export const blankBoard = (w: number, h: number): BoardState => {
    return R.times(
        () => {
            return {
                letter: '-',
                state: LetterState.NONE,
            }
        },
        w * h,
    ) as BoardState
}

export const variant = (state: LetterState): string => {
    switch (state) {
        case LetterState.NONE:
            return 'secondary'
        case LetterState.NOT_USED:
            return 'light'
        case LetterState.USED:
            return 'warning'
        case LetterState.HERE:
            return 'success'
    }
}

export const calcRows = (board: BoardState, width = 5): RowsState => {
    const ret = R.splitEvery(width, board)
    return ret as RowsState
}

export const calcCols = (board: BoardState, width = 5): ColsState => {
    let ret: ColsState = []
    const indexedReduce = R.addIndex(R.reduce)
    ret = indexedReduce((acc: ColsState, val: Letter, inx: number) => {
        const col = inx % width
        acc[col] = acc[col] || []
        acc[col].push(val)
        return acc
    }, ret, board)
    return ret
}

export default {}
