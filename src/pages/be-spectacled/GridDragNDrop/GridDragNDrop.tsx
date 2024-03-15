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

import { SortableItem } from './SortableItem'
import { Bin } from './Bin'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { createUseStyles } from 'react-jss'
import { customCollisionDetectionAlgorithm } from './customCollisionDetectionAlgorithm'

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

export const GridDragNDrop = () => {
    const [items, setItems] = useState(_items)
    const [dragging, setDragging] = useState(false)
    const [cnt, setCnt] = useState(100)
    const [deletable, setDeletable] = useState<UniqueIdentifier>('-1')

    const detectDeviceType = useMobileDetect()

    const sensor = detectDeviceType.isMobile ? TouchSensor : PointerSensor


    const sensors = useSensors(
        useSensor(sensor)
    )


    const findIemIndexById = (id: UniqueIdentifier): number => {
        return R.findIndex((v: Item) => (v.id === id), items) as number
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over?.id === 'deleteable') {
            setDragging(true)
            setDeletable(active.id)
            const newItems: Item[] = R.filter((i: Item) => { return i.id !== active.id }, items)
            setItems(newItems)
        } else if (active.id !== over?.id) {
            setItems((i: Item[]) => {
                const oldIndex = findIemIndexById(active.id)
                const newIndex = findIemIndexById((over?.id || -1))
                return arrayMove(i, oldIndex, newIndex)
            })
        }
        setDragging(false)
        setDeletable(-1)
    }

    const itemStyle = {
        minWidth: '33.33%',
        maxWidth: '33.33%',
        height: '50%',
    }

    // const context = {
    //     position: 'absolute',
    //     width: '25em',
    // }

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
                collisionDetection={customCollisionDetectionAlgorithm}
                onDragEnd={handleDragEnd}
                onDragStart={() => { setDragging(true) }}
            >
                <div style={{ position: 'relative' }}>
                    <SortableContext
                        items={items}
                    >
                        <div className={classes.container}>
                            {items && items.map(
                                (item: Item) => {
                                    return (<SortableItem
                                        delete={item.id === deletable}
                                        style={itemStyle}
                                        key={item.id}
                                        id={item.id}
                                        data={item}
                                        deleteMe={() => deleteMe(item.id)}
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
            <div>
                <h3>About the grid</h3>
                <Button variant="primary" style={{
                    position: 'relative',
                }} onClick={() => setItems(_items)}>reset grid for testing</Button>
                <p>devices = {JSON.stringify(detectDeviceType)}</p>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>txt</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.length ? items.map(
                            (item: any) => {
                                if (!item) {
                                    return ''
                                }
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.text}</td>
                                        <td>
                                            <img style={{
                                                width: '100px',
                                            }} src={item.img} />
                                        </td>
                                    </tr>
                                )
                            })
                            : <p>no items</p>}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
