import { useEffect, useState } from 'react'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import { SortableItem } from './SortableItem'

export const GridDragNDrop = () => {
    const [items, setItems] = useState(['1', '2', '3', '4', '5', '6'])
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    useEffect(() => {
        console.log(items)
    }, [items])

    const handleDragEnd = (event: any) => {
        const { active, over } = event

        if (active.id !== over.id) {
            setItems((i: any) => {
                const oldIndex = i.indexOf(active.id)
                const newIndex = i.indexOf(over.id)

                return arrayMove(i, oldIndex, newIndex)
            })
        }
    }
    const container = {
        width: '3fr',
        height: '15em',
        display: 'flex',
        border: 'red 2px dashed',
        flexFlow: 'row wrap',
    }

    const item = {
        minWidth: '33.33%',
        height: '50%',
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items}
            // strategy={verticalListSortingStrategy}
            >
                <div style={container}>
                    {items.map((id) => <SortableItem style={item} key={id} id={id} data={'khkjhkjhkjh'} />)}
                </div>
            </SortableContext>
        </DndContext>
    )
}
