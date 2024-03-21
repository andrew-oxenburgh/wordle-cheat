/* eslint-disable no-console */
import { useEffect, useRef, useState } from 'react'
import {
    TX_ACCEPT,
    TX_CANCEL_ACCEPT,
    TX_CANCEL_TAKE,
    TX_CLEAR,
    TX_DELETE,
    TX_MOVE,
    TX_REQUEST,
    TX_TAKE,
    createMachine,
} from './state-machine'
import { useCounter } from 'usehooks-ts'

const StateMachine = () => {
    const [machine, setMachine] = useState(createMachine())
    const [inited, setInited] = useState(false)
    const counter = useCounter(0)

    const idRef = useRef(null)
    const fromRef = useRef(null)
    const toRef = useRef(null)

    useEffect(() => {
        if (!inited) {
            setInited(true)
            machine.observe('onMove', () => {
                console.log('move')
            })
        }
    })

    const request = () => {
        machine.request()
        setMachine(machine)
        counter.increment()
    }
    const take = () => {
        machine.take()
        setMachine(machine)
        counter.increment()
    }
    const accept = () => {
        machine.accept({ id: counter.count })
        setMachine(machine)
        counter.increment()
    }
    const clear = () => {
        machine.clear()
        setMachine(machine)
        counter.increment()
    }
    const cancelTake = () => {
        machine.cancelTake()
        setMachine(machine)
        counter.increment()
    }
    const cancelAccept = () => {
        machine.cancelAccept()
        setMachine(machine)
        counter.increment()
    }
    const onDelete = () => {
        try {
            const id: string = idRef.current.value
            machine.delete(parseInt(id, 10))
            setMachine(machine)
            counter.increment()
        } catch (e) {
            console.log(e)
        }
    }
    const onMove = () => {
        try {
            const from: string = fromRef.current.value
            const to: string = toRef.current.value
            machine.move(parseInt(from, 10), parseInt(to, 10))
            setMachine(machine)
            counter.increment()
        } catch (e) {
            //
        }
    }

    const listItems = (
        <ul>
            {
                machine.getItems().map((item: any) => <li key={item.id}>{JSON.stringify(item)}</li>)
            }
        </ul>
    )

    return (
        <>
            <p>
                {machine.state}
            </p>
            <p>
                {counter.count}
            </p>
            <p>
                {JSON.stringify(machine.transitions())}
            </p>
            <p>
                {JSON.stringify(machine.transitions().indexOf('request'))}
            </p>
            <p>
                <button
                    onClick={request}
                    disabled={machine.transitions().indexOf(TX_REQUEST) < 0}
                >
                    Request
                </button>
            </p>
            <p>
                <button
                    onClick={take}
                    disabled={machine.transitions().indexOf(TX_TAKE) < 0}
                >
                    Take
                </button>
                <button
                    onClick={cancelTake}
                    disabled={machine.transitions().indexOf(TX_CANCEL_TAKE) < 0}
                >
                    Cancel Take
                </button>
            </p>
            <p>
                <button
                    onClick={accept}
                    disabled={machine.transitions().indexOf(TX_ACCEPT) < 0}
                >
                    accept
                </button>
                <button
                    onClick={cancelAccept}
                    disabled={machine.transitions().indexOf(TX_CANCEL_ACCEPT) < 0}
                >
                    Cancel Accept
                </button>
            </p>
            <p>
                <button
                    onClick={onDelete}
                    disabled={machine.transitions().indexOf(TX_DELETE) < 0}
                >
                    delete
                </button>
                <input type="text" ref={idRef} />
            </p >
            <p>
                <button
                    onClick={onMove}
                    disabled={machine.transitions().indexOf(TX_MOVE) < 0}
                >
                    move
                </button>
                <input type="text" ref={fromRef} />
                <input type="text" ref={toRef} />
            </p >
            <p>
                <button
                    onClick={clear}
                    disabled={machine.transitions().indexOf(TX_CLEAR) < 0}
                >
                    clear
                </button>
            </p >
            {listItems}
            <pre>
                {JSON.stringify(machine.getItems(), null, 4)}
            </pre>
        </>
    )
}

export default StateMachine
