import { DndContext } from '@dnd-kit/core'
import { useDroppable } from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core'
import { CSS, Transform } from '@dnd-kit/utilities'
import { useState } from 'react'

const Draggable = (props: any) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    })

    const txStyle = {
        transform: CSS.Translate.toString(transform as Transform),
    }

    return (
        <button ref={setNodeRef} style={txStyle} {...listeners} {...attributes}>
            {props.children}
        </button>
    )
}

const Droppable = (props: any) => {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    })
    const style = {
        color: isOver ? 'green' : undefined,
        background: isOver ? 'red' : undefined,
    }

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    )
}

export const SimpleDragNDrop = () => {
    const [isDropped, setIsDropped] = useState(false)
    const draggableMarkup = (
        <Draggable>Drag me</Draggable>
    )

    const handleDragEnd = (event: any) => {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true)
        }
    }

    return <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
            {isDropped ? draggableMarkup : 'Drop here'}
        </Droppable>
    </DndContext>
}
