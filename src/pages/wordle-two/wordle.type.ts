export enum LetterState {
    'NONE' = 0,
    'NOT_USED',
    'USED',
    'HERE'
}

export type Letter = {
    letter: string
    state: LetterState
}

export type BoardState = Letter[]

export type RowsState = Letter[][]
export type ColsState = Letter[][]

export default {}
