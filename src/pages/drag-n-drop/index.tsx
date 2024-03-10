// PAGE: drag-n-drop

import PageBody from '#/components/structural/PageBody'
import { createUseStyles } from 'react-jss'
import { SimpleDragNDrop } from './SimpleDragNDrop'
import { GridDragNDrop } from './GridDragNDrop/GridDragNDrop'

const useStyles = createUseStyles({
    demo: {
        border: '1px solid red',
        margin: '1em',
    },
})

const DragNDropWrapper: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
            <PageBody name="drag-n-drop">
                <div className={classes.demo}>
                    <SimpleDragNDrop />
                </div>
                <div className={classes.demo}>
                    <GridDragNDrop />
                </div>
            </PageBody >
        </div>
    )
}

export default DragNDropWrapper
