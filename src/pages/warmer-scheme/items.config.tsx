import { Bakes, ItemOrder, ItemProps } from './item-props'

export const items: ItemProps[] = [
    {
        id: 'jalapeno-bites',
        name: 'jalapeno bites',
        alts: [],
        desc: 'small, light, crumbed',
        type: 'bite',
        defaultLevel: 6,
    },
    {
        id: 'angus-cheese-mustard',
        name: 'angus cheese and mustard',
        alts: [],
        desc: 'line of mustard seed across',
        type: 'gourmet-pie',
        defaultLevel: 3,
    },
    {
        id: 'louisiana-bites',
        name: 'louisiana bites',
        alts: [],
        desc: 'small, light, crumbed',
        type: 'bite',
        defaultLevel: 6,
    },
    {
        id: 'chicken-cordon-bleu',
        name: 'chicken cordon bleu',
        alts: [],
        desc: 'dome shaped, crumbed',
        type: 'toppa',
        defaultLevel: 4,
    },
    {
        id: 'southern-toppa',
        name: 'southern toppa',
        alts: [],
        desc: 'round and crumbed',
        type: 'toppa',
        defaultLevel: 2,
    },
    {
        id: 'mac-and-cheese',
        name: 'mac and cheese',
        alts: [],
        desc: 'unknown',
        type: 'toppa',
        defaultLevel: 2,
    },
    {
        id: 'lasagne-toppa',
        name: 'lasagne toppa',
        alts: [],
        desc: 'golden square with white line',
        type: 'toppa',
        defaultLevel: 2,
    },
    {
        id: 'butter-chicken',
        name: 'butter chicken',
        alts: [],
        desc: 'covered in paprika',
        type: 'gourmet-pie',
        defaultLevel: 4,
    },
    {
        id: 'mince-cheese',
        name: 'mince & cheese',
        alts: [
            'Z special Mince * Cheese Classic',
        ],
        desc: 'V hole',
        type: 'classic-pie',
        defaultLevel: 6,
    },
    {
        id: 'mince',
        name: 'mince',
        alts: [
            'Z special Mince Classic',
        ],
        desc: '2 holes',
        type: 'classic-pie',
        defaultLevel: 2,
    },
    {
        id: 'steak-cheese',
        name: 'steak & cheese',
        alts: [
            'Z special Steak & Cheese Classic',
        ],
        desc: '1 hole',
        type: 'classic-pie',
        defaultLevel: 6,
    },
    {
        id: 'steak-bacon-cheese',
        name: 'steak, bacon & cheese',
        alts: [
            'Z special Steak Bacon & Cheese Classic',
        ],
        desc: '4 holes',
        type: 'classic-pie',
        defaultLevel: 4,
    },
    {
        id: 'vegan-chorizo-roll',
        name: 'vegan chorizo sausage roll',
        alts: [
        ],
        desc: 'lightly dusted with flour',
        type: 'classic-pie',
        defaultLevel: 2,
    },
    {
        id: 'vegan-sausage-roll',
        name: 'vegan sausage roll',
        alts: [
        ],
        desc: 'poppy seeds',
        type: 'classic-pie',
        defaultLevel: 2,
    },
    {
        id: 'spinach-feta-roll',
        name: 'spinach feta roll',
        alts: [
        ],
        desc: 'poppy seeds',
        type: 'classic-pie',
        defaultLevel: 2,
    },
]

export const itemPositions: ItemOrder = [
    'butter-chicken',
    'chicken-cordon-bleu',
    'jalapeno-bites',
    'lasagne-toppa',
    'louisiana-bites',
    'mac-and-cheese',
    'mince',
    'mince-cheese',
    'southern-toppa',
    'spinach-feta-roll',
    'steak-bacon-cheese',
    'steak-cheese',
    'vegan-chorizo-roll',
    'vegan-sausage-roll',
]

export const warmerWidth = 5

export const bakes: Bakes = {
    'saturday-morning': {
        name: 'saturday morning',
        when: 'every saturday ready for 8am',
        items: {
        },
    },
    'weekday-morning': {
        name: 'weekday morning',
        when: 'every weekday ready for 6am',
        items: {
            'butter-chicken': 3,
            'mince-cheese': 2,
            'steak-cheese': 1,
            'steak-bacon-cheese': 8,
            'vegan-chorizo-roll': 3,
        },
    },
    'midnight': {
        name: 'midnight',
        when: 'every day ready for 12am',
        items: {
            'butter-chicken': 2,
            'mince-cheese': 2,
            'steak-cheese': 1,
            'steak-bacon-cheese': 9,
            'vegan-chorizo-roll': 3,
        },
    },
}
