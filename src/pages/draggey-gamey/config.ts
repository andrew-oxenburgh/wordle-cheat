import * as R from 'ramda'

const tileColorList: string[] = [
    'white',
    'blue',
    'red',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'black',
    'white',
    'gray',
    'cyan',
    'magenta',
    'teal',
    'olive',
    'navy',
    'maroon',
    'aqua',
    'lime',
    'fuchsia',
]
const numColors = 5
export const colors: string[] = R.take(numColors, tileColorList)

export const getTextColor = (color: string): string => {
    const lightColors = [
        'white',
        'yellow',
    ]
    if (lightColors.includes(color)) {
        return 'black'
    }
    return 'white'
}

export const width = 8
export const height = width
export const numOfCells = width * height

