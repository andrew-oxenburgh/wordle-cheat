import { useDroppable } from '@dnd-kit/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash as icon } from '@fortawesome/free-solid-svg-icons/faTrash'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    bin: {
        position: 'absolute',
        right: '50%',
        bottom: '0',
        fontSize: '300%',
    },
})

export const Bin = ({ show }: { show: boolean }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: 'deleteable',
    })
    const classes = useStyles()
    if (show) {
        return (
            <div className={classes.bin}
                style={{
                    color: isOver ? 'green' : undefined,
                    background: isOver ? 'red' : undefined,
                }}
            >
                <span ref={setNodeRef} >
                    <FontAwesomeIcon icon={icon} />
                </span>
            </div>
        )
    }
    return ''
}
