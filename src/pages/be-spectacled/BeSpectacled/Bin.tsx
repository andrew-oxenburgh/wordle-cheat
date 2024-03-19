import { useDroppable } from '@dnd-kit/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash as icon } from '@fortawesome/free-solid-svg-icons/faTrash'
import { createUseStyles } from 'react-jss'
import { DELETEABLE } from './utils'

const defOpacity = 0.1

const useStyles = createUseStyles({
    bin: {
        position: 'absolute',
        left: 'calc(50% - 0.5em)',
        bottom: '0',
        fontSize: '300%',
        opacity: defOpacity,
    },
})

export const Bin = ({ show }: { show: boolean }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: DELETEABLE,
    })
    const classes = useStyles()
    return (
        <div className={classes.bin}
            style={{
                color: isOver ? 'green' : undefined,
                background: isOver ? 'red' : undefined,
                opacity: (show ? 1 : defOpacity),
                transition: 'all 1s ease',
            }}
        >
            <span ref={setNodeRef} >
                <FontAwesomeIcon icon={icon} />
            </span>
        </div>
    )
}
