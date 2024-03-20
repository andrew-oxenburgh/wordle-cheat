import StateMachine from 'javascript-state-machine'
import { Item, _items } from './utils'
import * as R from 'ramda'
// states
export const STT_ALBUM = 'album'
export const STT_PHOTOBOOTH = 'photobooth'
export const STT_ACCEPT = 'accept'

// transitions
export const TX_REQUEST = 'request'
export const TX_TAKE = 'take'
export const TX_ACCEPT = 'accept'
export const TX_CANCEL_ACCEPT = 'cancel_accept'
export const TX_CANCEL_TAKE = 'cancel_take'
export const TX_DELETE = 'delete'

function thing(): string { return (this.items.length < 6 ? STT_PHOTOBOOTH : STT_ALBUM) }

export const createMachine = () => new StateMachine({
    init: STT_ALBUM,
    transitions: [
        { name: TX_REQUEST, from: STT_ALBUM, to: thing },
        { name: TX_TAKE, from: STT_PHOTOBOOTH, to: STT_ACCEPT },
        { name: TX_ACCEPT, from: STT_ACCEPT, to: STT_ALBUM },
        { name: TX_CANCEL_ACCEPT, from: STT_ACCEPT, to: STT_ALBUM },
        { name: TX_CANCEL_TAKE, from: STT_PHOTOBOOTH, to: STT_ALBUM },
        { name: TX_DELETE, from: STT_ALBUM, to: STT_ALBUM },
    ],
    data: {
        items: [],
    },
    methods: {
        onAfterRequest: (o: any) => {
            return (o.fsm.items.length < 6)
        },
        onAfterAccept: (o: any, i: Item) => {
            o.fsm.items.push(i)
        },
        onAfterDelete(o: any, id: number) {
            if (!id) {
                return false
            }
            this.items = R.filter((i: Item) => { return i.id !== id }, this.items)
        },
        getItems(): Item[] {
            return R.clone(this.items)
        },
    },
})

