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

export const bakes = {
    'saturday-morning': {
        name: 'saturday morning',
        when: 'every saturday ready for 8am',
        items: {
            'butter-chicken': '3',
            'mince-cheese': '2',
            'steak-cheese': '1',
            'steak-bacon-cheese': '7',
        },
    },
    'weekday-morning': {
        name: 'weekday morning',
        when: 'every weekday ready for 6am',
        items: {
            'butter-chicken': '3',
            'mince-cheese': '2',
            'steak-cheese': '1',
            'steak-bacon-cheese': '6',
        },
    },
    'midnight': {
        name: 'midnight',
        when: 'every day ready for 12am',
        items: {
            'butter-chicken': '7',
            'mince-cheese': '2',
            'steak-cheese': '1',
            'steak-bacon-cheese': '5',
        },
    },
}
