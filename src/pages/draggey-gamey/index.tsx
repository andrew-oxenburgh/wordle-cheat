import { useState } from 'react'
import { signal } from '@preact/signals-react'
import { Styles, createUseStyles } from 'react-jss'
import * as R from 'ramda'

import PageBody from '../../components/structural/PageBody'

const colorList: string[] = ['white', 'blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'teal', 'olive', 'navy', 'maroon', 'aqua', 'lime', 'fuchsia']
// const colors: string[] = ['#000', '#444', '#888', '#aaa', '#eee']

const numColors = 5

const width = 8
const height = width
const numOfCells = width * height
const colors = R.take(numColors, colorList)

const isBeingDragged = signal(-1)

const useStyles = createUseStyles({
    grid: {
        display: 'grid',
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gridTemplateRows: `repeat(${height}, 1fr)`,
        width: 'auto',
        maxWidth: '24em',
        minHeight: '24em',
        margin: 'auto',
        padding: 0,
        border: '1px solid black',
    },
    container: {
        display: 'flex',
        alignContent: 'center',
    },
})

const reduceWithIndex = R.addIndex(R.reduce)

const colorCss: Styles = reduceWithIndex(
    (acc: any, color: string, idx: number) => {
        acc['color_' + idx] = {
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
interface Props {
    clicks: number
}


const ClickCounter: React.FC<Props> = ({ clicks = 0 }) => {
    const [clickCount, setClickCount] = useState(clicks % numColors)

    const [_, setDragged] = useState(false)
    const classes = useStylesClicks()

    const handleButtonClick = () => {
        setClickCount((clickCount + 1) % numColors)
    }

    const handleDraggedOver = () => {
        if (isBeingDragged.value > -1) {
            setClickCount(isBeingDragged.value)
        }
    }

    const handleDragMe = () => {
        isBeingDragged.value = clickCount
        setDragged(true)
    }

    const handleUndragMe = () => {
        isBeingDragged.value = -1
        setDragged(false)
    }

    return (
        <button
            className={classes['color_' + clickCount]}
            onClick={handleButtonClick}
            aria-label={'Click me button ' + clickCount}
            onMouseDown={handleDragMe}
            onMouseEnter={handleDraggedOver}
            onMouseUp={handleUndragMe}

        // todo: make it work for mobile
        />
    )
}

const GridComponent: React.FC = () => {
    const classes = useStyles()
    const handleUndragMe = () => {
        isBeingDragged.value = -1
    }

    return (
        <div className={classes.grid}
            onMouseLeave={handleUndragMe}
        >
            {Array(numOfCells).fill(null).map((_, index) => (
                <ClickCounter key={index} clicks={index} />
            ))}
        </div>
    )
}

const DraggyGamey: React.FC = () => {
    return (
        <>
            <PageBody name="draggey-gamey">
                <GridComponent />
            </PageBody>
        </>
    )
}

export default DraggyGamey
