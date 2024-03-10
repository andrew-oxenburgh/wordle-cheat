import { useState } from 'react'
import * as R from 'ramda'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    UniqueIdentifier,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'

import { SortableItem } from './SortableItem'
import { Bin } from './Bin'
import Button from 'react-bootstrap/esm/Button'

type Item = {
    id: number
    text: string
    hide?: boolean
    deleting?: boolean
    img?: string
}

const _items: Item[] = [
    {
        id: 1,
        text: 'one',
        deleting: false,
        hide: false,
    },
    {
        id: 2,
        text: 'two',
        hide: false,
    },
    {
        id: 3,
        text: 'three',
        hide: false,
    },
    {
        id: 4,
        text: 'four',
        hide: false,
    },
    // {
    //     id: 5,
    //     text: 'five',
    //     hide: false,
    // },
    // {
    //     id: 6,
    //     text: 'six',
    //     hide: false,
    // },
]

export const GridDragNDrop = () => {
    const [items, setItems] = useState(_items)
    const [dragging, setDragging] = useState(false)
    const [cnt, setCnt] = useState(100)
    const [deletable, setDeletable] = useState<UniqueIdentifier>('-1')
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const findIemIndexById = (id: UniqueIdentifier): number => {
        return R.findIndex((v: any) => (v.id === id), items)
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over?.id === 'droppable') {
            setDeletable(active.id)
            setDragging(true)
            const oldIndex = findIemIndexById(active.id)
            const newItems: Item[] = R.remove(oldIndex, 1, items)
            setItems(...[newItems])
        } else if (active.id !== over?.id) {
            setItems((i: Item) => {
                const oldIndex = findIemIndexById(active.id)
                const newIndex = findIemIndexById((over?.id))
                return arrayMove(i, oldIndex, newIndex)
            })
        }
        setDragging(false)
        setDeletable(-1)
    }
    const container = {
        width: '100%',
        height: '15em',
        display: 'flex',
        border: 'green 7px dashed',
        flexFlow: 'row wrap',
    }

    const itemStyle = {
        minWidth: '33.33%',
        maxWidth: '33.33%',
        height: '50%',
    }

    const context = {
        position: 'absolute',
        width: '25em',
    }

    const appendImage = (item: Item) => {
        // console.log('appendImage item cnt = ' + items.length)
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

    return (
        <>
            <Button onClick={() => setItems(_items)}>clear all</Button>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                onDragStart={() => { setDragging(true) }}
            >
                <div style={context}>
                    <SortableContext
                        items={items}
                    // strategy={verticalListSortingStrategy}
                    >
                        <div style={container}>
                            {items?.length && items.map(
                                (item: any) => {
                                    if (!item) {
                                        return ''
                                    }
                                    return (<SortableItem
                                        delete={item.id === deletable}
                                        style={itemStyle}
                                        key={item.id}
                                        id={item.id}
                                        data={item}
                                    />)
                                })
                            }
                            {(items.length < 6) && <SortableItem
                                delete={false}
                                style={itemStyle}
                                key={'camera'}
                                id={'camera'}
                                data={{
                                    id: 'camera',
                                    saveImage,
                                }}
                            />
                            }
                        </div>
                    </SortableContext>
                    <Bin show={dragging} />
                </div>
            </DndContext>
        </>
    )
}
