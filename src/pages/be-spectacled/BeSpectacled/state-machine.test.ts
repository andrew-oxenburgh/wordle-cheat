/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-console */
import { expect, test, describe, beforeEach } from 'vitest'
import {
    STT_ACCEPT,
    STT_ALBUM,
    STT_PHOTOBOOTH,
    TX_ACCEPT,
    TX_CANCEL_ACCEPT,
    TX_CANCEL_TAKE,
    TX_DELETE,
    TX_REQUEST,
    TX_TAKE,
    createMachine,
} from './state-machine'

import * as R from 'ramda'
import { Item } from './utils'

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
    test('can\'t request more than 6 photos', () => {
        function addItem(id: number) {
            fsm.request()
            fsm.take()
            fsm.accept({ id, img: '', text: '' })
        }
        assertAlbumIsEmpty()

        R.forEach((i: number) => {
            addItem(i + 10)
            assertAlbumSizeIs(i)

        }, R.range(1, 7))

        assertAlbumSizeIs(6)
        assertStateIs(STT_ALBUM)

        expect(fsm.request()).toBeFalsy()
        assertStateIs(STT_ALBUM)
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

