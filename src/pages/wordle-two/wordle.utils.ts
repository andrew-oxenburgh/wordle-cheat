import * as R from 'ramda'

export enum State {
    'NONE' = 0,
    'NOT_USED',
    'USED',
    'HERE'
}

export const incrState = (state: State): State => {
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

export interface LetterState {
    letter: string
    state: State
}

export type BoardState = LetterState[]

export type RowsState = LetterState[][];
export type ColsState = LetterState[][];


export function notNormalLetter(input: string): boolean {
    return ! /^[A-Za-z]$/.test(input);
}

export const blankBoard = (w: number, h: number): BoardState => R.times(
    () => {
        return {
            letter: '-',
            state: State.NONE
        }
    },
    w * h,
)

export const variant = (state: State): string => {
    switch (state) {
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

export function calcRows(board: BoardState, width = 5): RowsState {
    const ret = R.splitEvery(width, board)
    return ret
}

export function calcCols(board: BoardState, width = 5): ColsState {
    let ret: ColsState = []
    const indexedReduce = R.addIndex(R.reduce)
    ret = indexedReduce((acc: ColsState, val: LetterState, inx: number) => {
        const col = inx % width
        const row = inx - col * width
        acc[col] = acc[col] || []
        acc[col].push(val)
        return acc
    }, ret, board)
    return ret
}


export default {}