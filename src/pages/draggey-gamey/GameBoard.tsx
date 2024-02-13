import { createUseStyles } from 'react-jss'
import { GameCell } from './GameCell'
import { width, height, numOfCells } from './config'
import Container from 'react-bootstrap/esm/Container'
import { dragColor } from '.'
import { effect } from '@preact/signals-react'

export const useStyles = createUseStyles({
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
})

export const GameBoard = ({ id = '' }) => {
    const classes = useStyles()
    effect(() => { })
    return (<Container id={id} className={classes.grid}
        style={{
            borderColor: dragColor.value,
        }}
    >
        {
            Array(numOfCells).fill(null).map((_, index) => (
                <GameCell key={index} _color={'white'} />
            ))
        }
    </Container >
    )
}
