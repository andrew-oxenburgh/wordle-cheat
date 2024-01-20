import * as R from 'ramda'

const colorList: string[] = ['white', 'blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'teal', 'olive', 'navy', 'maroon', 'aqua', 'lime', 'fuchsia']
const numColors = 5
export const colors: string[] = R.take(numColors, colorList)

export const width = 8
export const height = width
export const numOfCells = width * height

