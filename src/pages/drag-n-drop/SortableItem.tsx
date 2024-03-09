import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical as icon } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'

export const SortableItem = (props: any) => {
    const {
        attributes, listeners, setNodeRef, transform, transition,
    } = useSortable({ id: props.data.id })

    const card = {
        transform: CSS.Transform.toString(transform as Transform),
        transition,
        border: '1px orange solid',
        position: 'relative',
        ...(props.style ? props.style : {}),
        padding: '0.5em',
    }

    const ellipsis = {
        position: 'absolute',
        right: '0.4em',
    }

    if (props.data.id === 'camera') {
        const constraints = {
            video: {},
        }

        const takePhoto = async () => {
            const m = await navigator.mediaDevices.getUserMedia({ video: {} })
            console.log(m)
        }

        void takePhoto()
        return (
            <div style={card}>
                CAMERA
            </div>
        )
    }

    return (
        <div style={card}>
            <span style={ellipsis} ref={setNodeRef} {...attributes} {...listeners}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <h3>{props.data.id}</h3>
            <br />
            {props.data.text}
            <br />
            {props.delete ? 'delete' : ''}
        </div>
    )
}
