/* eslint-disable no-console */
import { expect, test, describe, beforeEach } from 'vitest'
import StateMachine from 'javascript-state-machine'
import { Item, _items } from './utils'

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

const createMachine = () => new StateMachine({
    init: STT_ALBUM,
    transitions: [
        { name: TX_REQUEST, from: STT_ALBUM, to: STT_PHOTOBOOTH },
        { name: TX_TAKE, from: STT_PHOTOBOOTH, to: STT_ACCEPT },
        { name: TX_ACCEPT, from: STT_ACCEPT, to: STT_ALBUM },
        { name: TX_CANCEL_ACCEPT, from: STT_ACCEPT, to: STT_ALBUM },
        { name: TX_CANCEL_TAKE, from: STT_PHOTOBOOTH, to: STT_ALBUM },
    ],
    data: {
        items: _items,
    },
    methods: {
        onRequest: (o: any) => { console.log('I req', o.fsm.items[1]) },
        onTake: () => { console.log('I tak') },
        onAccept: () => { console.log('I accept') },
        onCancelAccept: () => { console.log('I cancel accept') },
        onCancelTake: () => { console.log('I cancel take') },
        describe: () => {
            console.log('I am ' + this.items)
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
        expect(fsm.request({ thing: 7 })).toBeTruthy()
        expect(fsm.state).toEqual(STT_PHOTOBOOTH)
        expect(fsm.take()).toBeTruthy()
        expect(fsm.state).toEqual(STT_ACCEPT)
        expect(fsm.accept()).toBeTruthy()
        expect(fsm.state).toEqual(STT_ALBUM)
    })
    test('VIEW_ALBUM - can only REQUEST', () => {
        expect(fsm.state).toEqual(STT_ALBUM)
        expect(fsm.transitions()).toEqual([TX_REQUEST])
        expect(fsm.request()).toBeTruthy()
        expect(fsm.state).toEqual(STT_PHOTOBOOTH)
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