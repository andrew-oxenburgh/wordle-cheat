import { downloadFilename } from '#/config/config'
import { loggerError } from '#/config/logger'
import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
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

export const downloadIt = async (document: Document, eleId: string, mimeType: string) => {
    try {
        const board = document.getElementById(eleId)
        if (!board) {
            return
        }
        const affirm = confirm('Press OK to download')

        if (!affirm) {
            return
        }

        const canvas = await html2canvas(board)
        const dataURL = canvas.toDataURL(`image/${mimeType}`)
        downloadjs(dataURL, `${downloadFilename}.${mimeType}`, `image/${mimeType}`)
    } catch (e) {
        loggerError(e)
    }
}


