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
    TX_CLEAR,
    TX_DELETE,
    TX_REQUEST,
    TX_TAKE,
    createMachine,
} from './state-machine'

import * as R from 'ramda'
import { Item } from '../BeSpectacled/utils'

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

    function addItems(j: number) {
        function addItem(id: number) {
            fsm.request()
            fsm.take()
            fsm.accept({ id, img: '', text: '' })
        }
        assertAlbumIsEmpty()

        R.forEach((i: number) => {
            addItem(i + 10)
            assertAlbumSizeIs(i)
        }, R.range(1, 1 + j))
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
        addItems(6)

        assertAlbumSizeIs(6)
        assertStateIs(STT_ALBUM)

        expect(fsm.request()).toBeFalsy()
        assertStateIs(STT_ALBUM)
    })
    test('can request photo', () => {
        assertAlbumSizeIs(0)
        expect(fsm.canRequest()).toBeTruthy()
        fsm.items.push({})
        assertAlbumSizeIs(1)
        expect(fsm.canRequest()).toBeTruthy()
        fsm.items.push({})
        assertAlbumSizeIs(2)
        expect(fsm.canRequest()).toBeTruthy()
        fsm.items.push({})
        assertAlbumSizeIs(3)
        expect(fsm.canRequest()).toBeTruthy()
        fsm.items.push({})
        assertAlbumSizeIs(4)
        expect(fsm.canRequest()).toBeTruthy()
        fsm.items.push({})
        assertAlbumSizeIs(5)
        expect(fsm.canRequest()).toBeTruthy()
        fsm.items.push({})
        assertAlbumSizeIs(6)
        expect(fsm.canRequest(), 'can\'t add a final request').toBeFalsy()
    })
    describe('VIEW_ALBUM', () => {
        test('can REQUEST and DELETE', () => {
            assertValidTransactions([TX_REQUEST, TX_DELETE, TX_CLEAR])
        })
        test('REQUEST goes to PHOTO_BOOTH', () => {
            fsm.request()
            assertStateIs(STT_PHOTOBOOTH)
        })
        describe('VIEW_ALBUM CLEAR', () => {
            test('can CLEAR empty ALBUM', () => {
                assertAlbumIsEmpty()
                fsm.clear()
                assertStateIs(STT_ALBUM)
                assertAlbumIsEmpty()
            })
            test('can CLEAR with 1 item', () => {
                assertAlbumIsEmpty()
                fsm.request()
                fsm.take()
                fsm.accept({ id: 88 })
                assertAlbumSizeIs(1)
                fsm.clear()
                assertStateIs(STT_ALBUM)
                assertAlbumIsEmpty()
            })
            test('can CLEAR with many item', () => {
                addItems(3)
                assertStateIs(STT_ALBUM)

                assertAlbumSizeIs(3)
                fsm.clear()
                assertStateIs(STT_ALBUM)
                assertAlbumIsEmpty()
            })
        })
        describe('VIEW_ALBUM DELETE', () => {
            test('DELETE without id stays in ALBUM', () => {
                assertAlbumIsEmpty()
                fsm.delete()
                assertStateIs(STT_ALBUM)
                assertAlbumIsEmpty()
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

