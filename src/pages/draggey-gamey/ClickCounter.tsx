import { useState } from 'react'
import { Styles, createUseStyles } from 'react-jss'
import * as R from 'ramda'

const colorList: string[] = ['white', 'blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'teal', 'olive', 'navy', 'maroon', 'aqua', 'lime', 'fuchsia']
const numColors = 5
export const colors: string[] = R.take(numColors, colorList)


import { dragColor } from '.'

const colorCss: Styles = R.reduce(
    (acc: any, color: string) => {
        acc['color_' + color] = {
            background: color,
            width: '100%',
            height: '100%',
            borderRadius: 0,
            padding: 0,
            margin: 0,
            // border: '5px solid none',
            '&:hover': {
                border: '1px solid #222',
                transition: '0.1s',
            },
            '&:not(:hover)': {
                border: '1px solid transparent',
                transition: 'border 3s ease',
            },
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return acc
    }, {}, colors)

const useStylesClicks = createUseStyles(colorCss)

export const ClickCounter = ({ _color }: { _color: string }) => {
    const classes = useStylesClicks()
    const [color, setColor] = useState<string>(_color)

    const onClick = () => setColor(dragColor.value)
    return (
        <button
            className={classes['color_' + color]}
            aria-label={'Click me button '}
            onClick={onClick}
            onDragOver={onClick} />
    )
}
