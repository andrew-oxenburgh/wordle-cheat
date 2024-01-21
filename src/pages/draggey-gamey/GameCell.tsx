import { useState } from 'react'
import { Styles, createUseStyles } from 'react-jss'
import * as R from 'ramda'

import { dragColor } from './DraggeyGamey'
import { colors } from './config'
import { effect } from '@preact/signals-react'

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
                border: '1px dashed whitesmoke',
                transition: 'border 3s ease',
            },
        }
        return acc
    }, {}, colors)

const useStylesClicks = createUseStyles(colorCss)

export const GameCell = ({ _color }: { _color: string }) => {
    effect(() => { })
    const classes = useStylesClicks()
    const [color, setColor] = useState<string>(_color)

    const onClick = () => setColor(dragColor.value)
    return (
        <button
            draggable="true"
            className={classes['color_' + color]}
            aria-label={'Click me button '}
            onClick={onClick}
            onDragStart={onClick}
            onDrag={onClick}
            onDragOver={onClick}
            onDragCapture={onClick}
            onDrop={onClick}
            style={{
                borderColor: dragColor.value,
            }}
        />
    )
}
