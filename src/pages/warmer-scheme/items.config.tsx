import { ItemProps } from './item-props'

export const items: ItemProps[] = [
    {
        id: 'butter-chicken',
        name: 'butter chicken',
        alts: [],
        desc: 'covered in paprika',
    },
    {
        id: 'mince-cheese',
        name: 'mince & cheese',
        alts: [
            'Z special Mince * Cheese Classic',
        ],
        desc: 'V hole',
    },
    {
        id: 'mince',
        name: 'mince',
        alts: [
            'Z special Mince Classic',
        ],
        desc: '2 holes',
    },
    {
        id: 'steak-cheese',
        name: 'steak & cheese',
        alts: [
            'Z special Steak & Cheese Classic',
        ],
        desc: '1 hole',
    },
    {
        id: 'steak-bacon-cheese',
        name: 'steak, bacon & cheese',
        alts: [
            'Z special Steak Bacon & Cheese Classic',
        ],
        desc: '4 holes',
    },
]

export const itemPositions: string[][] = [
    ['butter-chicken', 'mince-cheese'],
    ['steak-cheese', 'steak-bacon-cheese'],
]
