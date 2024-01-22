export enum LetterState {
    'NONE' = 0,
    'NOT_USED',
    'USED',
    'HERE'
}

export type LetterType = {
    letter: string
    state: LetterState
}

export type BoardState = LetterType[]

export type RowsState = LetterType[][]
export type ColsState = LetterType[][]

export default {}
