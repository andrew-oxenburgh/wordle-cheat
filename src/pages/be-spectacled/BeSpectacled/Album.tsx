import { useState } from 'react'
import * as R from 'ramda'
import useMobileDetect from '@groupher/use-mobile-detect-hook'
import {
    DndContext,
    TouchSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
} from '@dnd-kit/sortable'
import { GotoPhotoBooth } from './GotoPhotoBooth'
import { Bin } from './Bin'
import { deleteCollisionDetection } from './deleteCollisionDetection'
import { DELETEABLE, findItemIndexById, type Item } from './utils'
import { PhotoFrames } from './PhotoFrames'
import { useStyles } from './BeSpectacled'

export const Album = ({ items, setItems, openPhotoBooth, deleteMe }: {
    items: Item[]
    setItems: (items: Item[] | ((items: Item[]) => Item[])) => void
    openPhotoBooth: () => void
    deleteMe: (id: number) => void
}) => {
    const [dragging, setDragging] = useState(false)
    const detectDeviceType = useMobileDetect()

    const sensors = useSensors(
        useSensor(detectDeviceType.isMobile ? TouchSensor : PointerSensor)
    )
    const classes = useStyles()
    const itemStyle = {
        minWidth: '33.33%',
        maxWidth: '33.33%',
        height: '50%',
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over?.id === DELETEABLE) {
            setDragging(true)
            const newItems: Item[] = R.filter((i: Item) => { return i.id !== active.id }, items)
            setItems(newItems)
        } else if (active.id !== over?.id) {
            setItems((i: Item[]) => {
                const oldIndex = findItemIndexById(active.id, i)
                const newIndex = findItemIndexById((over?.id || -1), i)
                return arrayMove(i, oldIndex, newIndex)
            })
        }
        setDragging(false)
    }
    return (<DndContext
        // measuring={measuringConfig}
        sensors={sensors}
        collisionDetection={deleteCollisionDetection}
        onDragEnd={handleDragEnd}
        onDragStart={() => { setDragging(true) }}
    >
        <div style={{ position: 'relative' }}>
            <SortableContext
                items={items}
            >
                <div className={classes.container}>
                    <PhotoFrames
                        items={items}
                        itemStyle={itemStyle}
                        deleteMe={deleteMe} />
                    <GotoPhotoBooth
                        show={items.length < 6}
                        style={itemStyle}
                        key={'camera'}
                        openPhotoBooth={openPhotoBooth} />
                </div>
            </SortableContext>
            <Bin show={dragging} />
        </div>
    </DndContext>)
}
