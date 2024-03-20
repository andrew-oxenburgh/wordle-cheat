/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-console */
import { expect, test, describe, beforeEach } from 'vitest'
import StateMachine from 'javascript-state-machine'
import { Item, _items } from './utils'
import * as R from 'ramda'

// states
const STT_ALBUM = 'album'
const STT_PHOTOBOOTH = 'photobooth'
const STT_ACCEPT = 'accept'

// transitions
const TX_REQUEST = 'request'
const TX_TAKE = 'take'
const TX_ACCEPT = 'accept'
const TX_CANCEL_ACCEPT = 'cancel_accept'
const TX_CANCEL_TAKE = 'cancel_take'
const TX_DELETE = 'delete'

type ItemsType = {
    fsm: {
        items: Item[]
        getItems: () => Item[]
    }
}

const createMachine = () => new StateMachine({
    init: STT_ALBUM,
    transitions: [
        { name: TX_REQUEST, from: STT_ALBUM, to: STT_PHOTOBOOTH },
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
        // onRequest: () => { console.log('request') },
        // onTake: () => { console.log('take') },
        onAfterAccept: (o: any, i: Item) => {
            // console.log('accept')
            o.fsm.items.push(i)
        },
        onAfterDelete: (o: any, id: number) => {
            if (!id) {
                return false
            }
            o.fsm.items = R.filter((i: Item) => { return i.id !== id }, o.fsm.items)
        },
        onCancelAccept: () => { console.log('cancel accept') },
        onCancelTake: () => { console.log('cancel take') },
        desc() {
            console.log('items ', this.getItems())
        },
        getItems(): Item[] {
            // clone, for safety
            return R.clone(this.items)
        },
    },
})

let fsm = createMachine()

describe('state machine', () => {
    beforeEach(() => {
        fsm = createMachine()
    })
    test('straight through - view, take, accept', () => {
        expect(fsm.state).toEqual(STT_ALBUM)
        expect(fsm.getItems()).toEqual([])

        expect(fsm.request()).toBeTruthy()
        expect(fsm.state).toEqual(STT_PHOTOBOOTH)
        expect(fsm.take()).toBeTruthy()
        expect(fsm.state).toEqual(STT_ACCEPT)
        expect(fsm.getItems()).toEqual([])

        expect(fsm.accept({ img: 'image', id: 44 })).toBeTruthy()
        expect(fsm.getItems()).toEqual([{ img: 'image', id: 44 }])
        expect(fsm.state).toEqual(STT_ALBUM)
    })
    describe('VIEW_ALBUM', () => {
        test('can REQUEST and DELETE', () => {
            expect(fsm.transitions()).toEqual([TX_REQUEST, TX_DELETE])
        })
        test('REQUEST goes to PHOTO_BOOTH', () => {
            expect(fsm.request()).toBeTruthy()
            expect(fsm.state).toEqual(STT_PHOTOBOOTH)
        })
        test('DELETE without id stays in ALBUM', () => {
            expect(fsm.delete()).toBeFalsy()
        })
        test('DELETE existing item with id', () => {
            expect(fsm.getItems.length).toEqual(0)
            fsm.items = [{ img: '', id: 22 }]
            expect(fsm.getItems().length).toEqual(1)
            expect(fsm.delete(22)).toBeTruthy()
            expect(fsm.getItems.length).toEqual(0)
        })
        test('do not DELETE non-existing item', () => {
            expect(fsm.getItems.length).toEqual(0)
            fsm.items = [{ img: '', id: 22 }]
            expect(fsm.getItems().length).toEqual(1)
            expect(fsm.delete(23)).toBeTruthy()
            expect(fsm.getItems().length).toEqual(1)
        })
    })
    describe('TAKE_PHOTO', () => {
        const gotoTake = () => {
            expect(fsm.state).toEqual(STT_ALBUM)
            fsm.request()
            expect(fsm.state).toEqual(STT_PHOTOBOOTH)
        }
        test('can TAKE photo or cancel', () => {
            gotoTake()
            expect(fsm.transitions()).toEqual([TX_TAKE, TX_CANCEL_TAKE])
        })
        test('take photo, go to accept page', () => {
            gotoTake()
            expect(fsm.take()).toBeTruthy()
            expect(fsm.state).toEqual(STT_ACCEPT)
        })
        test('cancel photo, go to album page', () => {
            gotoTake()
            expect(fsm.cancelTake()).toBeTruthy()
            expect(fsm.state).toEqual(STT_ALBUM)
        })
    })
    describe('ACCEPT_PHOTO', () => {
        const gotoAccept = () => {
            expect(fsm.state).toEqual(STT_ALBUM)
            fsm.request()
            fsm.take()
            expect(fsm.state).toEqual(STT_ACCEPT)
        }
        test('can accept photo or cancel', () => {
            gotoAccept()
            expect(fsm.transitions()).toEqual([TX_ACCEPT, TX_CANCEL_ACCEPT])
        })
        test('accept, go to album page', () => {
            gotoAccept()
            expect(fsm.accept()).toBeTruthy()
            expect(fsm.state).toEqual(STT_ALBUM)
        })
        test('not accept, go to album page', () => {
            gotoAccept()
            expect(fsm.cancelAccept()).toBeTruthy()
            expect(fsm.state).toEqual(STT_ALBUM)
        })
    })
})
