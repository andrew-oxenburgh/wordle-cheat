import { Active, UniqueIdentifier } from '@dnd-kit/core'
import { defaultAnimateLayoutChanges } from '@dnd-kit/sortable'
import { SortableTransition } from '@dnd-kit/sortable/dist/hooks/types'

export type Item = {
    id: number
    text: string
    hide?: boolean
    deleting?: boolean
    img?: string
}

export const _items: Item[] = [
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

type LayoutChanges = {
    active: Active | null
    containerId: UniqueIdentifier
    isDragging: boolean
    isSorting: boolean
    id: UniqueIdentifier
    index: number
    items: UniqueIdentifier[]
    previousItems: UniqueIdentifier[]
    previousContainerId: UniqueIdentifier
    newIndex: number
    transition: SortableTransition | null
    wasDragging: boolean
}

export const animateLayoutChanges = (args: LayoutChanges) => {
    const { isSorting, wasDragging } = args

    if (isSorting || wasDragging) {
        return defaultAnimateLayoutChanges(args)
    }

    return true
}

