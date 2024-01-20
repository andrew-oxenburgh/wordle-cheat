import { createUseStyles } from 'react-jss'
import { ClickCounter } from './ClickCounter'
import { width, height, numOfCells } from './config'

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
    container: {
        display: 'flex',
        alignContent: 'center',
    },
})


export const Game = () => {
    const classes = useStyles()
    return (<div className={classes.grid}>
        {Array(numOfCells).fill(null).map((_, index) => (
            <ClickCounter key={index} _color={'white'} />
        ))}
    </div>
    )
}
