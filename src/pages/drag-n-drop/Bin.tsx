import { useDroppable } from '@dnd-kit/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash as icon } from '@fortawesome/free-solid-svg-icons/faTrash'

export const Bin = (props: any) => {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    })
    const style = {
        color: isOver ? 'green' : undefined,
        background: isOver ? 'red' : undefined,
        position: 'absolute',
        right: '50%',
        bottom: '0',
        transform: 'translate(-50 %, -50 %)',
        fontSize: '300%',
    }

    if (props.show) {
        return (
            <div ref={setNodeRef} style={style}>
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
            </div>
        )
    }
    return ''
}
