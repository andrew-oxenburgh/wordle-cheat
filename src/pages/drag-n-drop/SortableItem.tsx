import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

export const SortableItem = (props: any) => {
    const {
        attributes, listeners, setNodeRef, transform, transition,
    } = useSortable({ id: props.data.id })

    const style = {
        transform: CSS.Transform.toString(transform as Transform),
        transition,
        border: '1px orange solid',
        ...(props.style ? props.style : {}),
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {props.data.id}
            <br />
            {props.data.text}
            <br />
            {props.delete ? 'delete' : ''}
        </div>
    )
}
