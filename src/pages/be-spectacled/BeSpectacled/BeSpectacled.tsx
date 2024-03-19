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
    UniqueIdentifier,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
} from '@dnd-kit/sortable'

import { PhotoBooth } from './PhotoBooth'
import { Bin } from './Bin'
import { createUseStyles } from 'react-jss'
import { deleteCollisionDetection } from './deleteCollisionDetection'
import { Item, _items } from './utils'
import { EtAl } from './EtAl'
import { PhotoFrames } from './PhotoFrames'

const useStyles = createUseStyles({
    container: {
        width: '100%',
        maxWidth: '60em',
        height: '30em',
        display: 'flex',
        border: 'green 7px dashed',
        flexFlow: 'row wrap',
    },
})

export const BeSpectacled = () => {
    const [items, setItems] = useState(_items)
    const [dragging, setDragging] = useState(false)
    const [cnt, setCnt] = useState(100)

    const detectDeviceType = useMobileDetect()

    const sensors = useSensors(
        useSensor(detectDeviceType.isMobile ? TouchSensor : PointerSensor)
    )

    const findItemIndexById = (id: UniqueIdentifier): number => {
        return R.findIndex((v: Item) => (v.id === id), items) as number
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over?.id === 'deleteable') {
            setDragging(true)
            const newItems: Item[] = R.filter((i: Item) => { return i.id !== active.id }, items)
            setItems(newItems)
        } else if (active.id !== over?.id) {
            setItems((i: Item[]) => {
                const oldIndex = findItemIndexById(active.id)
                const newIndex = findItemIndexById((over?.id || -1))
                return arrayMove(i, oldIndex, newIndex)
            })
        }
        setDragging(false)
    }

    const itemStyle = {
        minWidth: '33.33%',
        maxWidth: '33.33%',
        height: '50%',
    }

    const appendImage = (item: Item) => {
        const newItems: Item[] = R.concat(items, [item])
        setItems(...[newItems])
        setCnt(cnt + 1)
    }

    const saveImage = (img: string): void => {
        if (items.length < 6) {
            appendImage({
                id: cnt,
                text: 'XXXXXXXXXXXXXX',
                img,
            })
        }
    }

    const deleteMe = (id: number) => {
        const newItems: Item[] = R.filter((i: Item) => { return i.id !== id }, items)
        setItems(newItems)
    }

    const classes = useStyles()
    return (
        <>
            <DndContext
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
                                deleteMe={deleteMe}
                            />
                            <PhotoBooth
                                show={items.length < 6}
                                style={itemStyle}
                                key={'camera'}
                                saveImage={saveImage}
                            />
                        </div>
                    </SortableContext>
                    <Bin show={dragging} />
                </div>
            </DndContext>
            <EtAl
                items={items}
                setItems={setItems}
                detectDeviceType={detectDeviceType}
            />
        </>
    )
}
