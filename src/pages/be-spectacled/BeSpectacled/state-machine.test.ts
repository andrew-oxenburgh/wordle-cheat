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
        // onCancelAccept: () => { console.log('cancel accept') },
        // onCancelTake: () => { console.log('cancel take') },
        getItems: () => {
            // clone, for safety
            return R.clone(fsm.items)
        },
    },
})

let fsm = createMachine()

describe('state machine', () => {
    function assertStateIs(s: string) {
        expect(fsm.state).toEqual(s)
    }

    function assertAlbumSizeIs(l: number) {
        expect(fsm.getItems().length).toEqual(l)
    }

    function assertAlbumIsEmpty() {
        expect(fsm.getItems().length).toEqual(0)
    }

    function assertAlbumIs(items: Item[]) {
        expect(fsm.getItems()).toEqual(items)
    }

    function assertValidTransactions(txs: string[]) {
        expect(fsm.transitions()).toEqual(txs)
    }

    beforeEach(() => {
        fsm = createMachine()
    })
    test('straight through - view, take, accept', () => {
        assertStateIs(STT_ALBUM)
        assertAlbumIsEmpty()

        fsm.request()
        assertStateIs(STT_PHOTOBOOTH)
        fsm.take()
        assertStateIs(STT_ACCEPT)
        assertAlbumIsEmpty()

        expect(fsm.accept({ img: 'image', id: 44, text: '' })).toBeTruthy()
        assertAlbumSizeIs(1)
        assertAlbumIs([{ img: 'image', id: 44, text: '' }])
        assertStateIs(STT_ALBUM)
    })
    test('straight through - view, take, cancel', () => {
        assertStateIs(STT_ALBUM)
        assertAlbumIsEmpty()

        fsm.request()
        assertStateIs(STT_PHOTOBOOTH)
        fsm.cancelTake()
        assertStateIs(STT_ALBUM)
        assertAlbumIsEmpty()
    })
    test('straight through - view, take, accept, cancel', () => {
        fsm.request()
        fsm.take()
        fsm.cancelAccept()
        assertStateIs(STT_ALBUM)
        assertAlbumIsEmpty()

    })
    describe('VIEW_ALBUM', () => {
        test('can REQUEST and DELETE', () => {
            assertValidTransactions([TX_REQUEST, TX_DELETE])
        })
        test('REQUEST goes to PHOTO_BOOTH', () => {
            fsm.request()
            assertStateIs(STT_PHOTOBOOTH)
        })
        test('DELETE without id stays in ALBUM', () => {
            fsm.delete()
            assertStateIs(STT_ALBUM)
        })
        test('DELETE existing item with id', () => {
            assertAlbumIsEmpty()
            fsm.items = [{ img: '', id: 22 }]
            assertAlbumSizeIs(1)
            expect(fsm.delete(22), 'should delete existing item').toBeTruthy()
            assertAlbumIsEmpty()
        })
        test('do not DELETE non-existing item', () => {
            assertAlbumIsEmpty()
            fsm.items = [{ img: '', id: 22 }]
            assertAlbumSizeIs(1)
            expect(fsm.delete(23), 'should not delete no existing item').toBeTruthy()
            assertAlbumSizeIs(1)
        })
    })
    describe('TAKE_PHOTO', () => {
        const gotoTake = () => {
            assertStateIs(STT_ALBUM)
            fsm.request()
            assertStateIs(STT_PHOTOBOOTH)
        }
        test('can TAKE photo or cancel', () => {
            gotoTake()
            assertValidTransactions([TX_TAKE, TX_CANCEL_TAKE])
        })
        test('take photo, go to accept page', () => {
            gotoTake()
            fsm.take()
            assertStateIs(STT_ACCEPT)
        })
        test('cancel photo, go to album page', () => {
            gotoTake()
            fsm.cancelTake()
            assertStateIs(STT_ALBUM)
        })
    })
    describe('ACCEPT_PHOTO', () => {
        const gotoAccept = () => {
            assertStateIs(STT_ALBUM)
            fsm.request()
            fsm.take()
            assertStateIs(STT_ACCEPT)
        }
        test('can accept photo or cancel', () => {
            gotoAccept()
            expect(fsm.transitions()).toEqual([TX_ACCEPT, TX_CANCEL_ACCEPT])
        })
        test('accept, go to album page', () => {
            gotoAccept()
            expect(fsm.accept()).toBeTruthy()
            assertStateIs(STT_ALBUM)
        })
        test('not accept, go to album page', () => {
            gotoAccept()
            expect(fsm.cancelAccept()).toBeTruthy()
            assertStateIs(STT_ALBUM)
        })
    })
})

