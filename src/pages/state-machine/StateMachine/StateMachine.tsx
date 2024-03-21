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
    TX_TAKE_AGAIN,
    createMachine,
} from './state-machine'
import { useCounter } from 'usehooks-ts'

const parse = (id: string): number => {
    return parseInt(id, 10)
}

const StateMachine = () => {
    const [machine, setMachine] = useState(createMachine())
    const [itemId, setItemId] = useState(7)
    const [inited, setInited] = useState(false)
    const counter = useCounter(0)

    const idRef = useRef(null)
    const fromRef = useRef(null)
    const toRef = useRef(null)
    const takeRef = useRef(null)

    useEffect(() => {
        if (!inited) {
            setInited(true)
            machine.observe('onMove', () => {
                console.log('move')
            })
        }
    })

    const onRequest = () => {
        machine.request()
        setMachine(machine)
        counter.increment()
        setItemId(counter.count)
        takeRef.current.value = counter.count
    }
    const onTake = () => {
        const takeId: string = takeRef.current.value
        setItemId(parseInt(takeId, 10))
        machine.take()
        setMachine(machine)
        counter.increment()
    }
    const onAccept = () => {
        machine.accept({ id: itemId })
        setMachine(machine)
        counter.increment()
    }
    const onClear = () => {
        machine.clear()
        setMachine(machine)
        counter.increment()
    }
    const onCancelTake = () => {
        machine.cancelTake()
        setMachine(machine)
        counter.increment()
    }
    const cancelAccept = () => {
        machine.cancelAccept()
        setMachine(machine)
        counter.increment()
    }
    const onTakeAgain = () => {
        machine.takeAgain()
        setMachine(machine)
        counter.increment()
        takeRef.current.value = counter.count

    }
    const onDelete = () => {
        try {
            const id: string = idRef.current.value
            machine.delete(parse(id))
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
            machine.move(parse(from), parse(to))
            setMachine(machine)
            counter.increment()
        } catch (e) {
            //
        }
    }

    const h4Class = (state: string): string => {
        return 'text-center ' +
            (machine.state === state ? '' : 'text-body-tertiary')
    }

    const buttonClass = (): string => {
        return 'm-1'
    }

    const stateClass = (): string => {
        return 'border border-primary-subtle p-3'
    }

    const stateStyle = (state: string): any => {
        return (state === machine.state ? {
            transition: 'all 0.1s ease-in',
        } : {
            filter: 'blur(4px)',
        })
    }

    return (
        <>
            <h1 className="text-center">
                {machine.state}
            </h1>
            <h5>
                This will increment on every action = {counter.count}
            </h5>
            <p>
                transitions available to "{machine.state}" -&gt; {JSON.stringify(machine.transitions())}
            </p>
            <div
                className={stateClass('album')}
                style={stateStyle('album')}
            >
                <h4 className={h4Class('album')}>
                    Album
                </h4>
                <button
                    className={buttonClass()}
                    onClick={onRequest}
                    disabled={
                        machine.transitions().indexOf(TX_REQUEST) < 0 ||
                        !machine.canRequest()
                    }
                >
                    Request - turn on the camera
                    {machine.canRequest() ? '' : 'can only create 6'}
                </button>
                <br
                />
                <button
                    className={buttonClass()}
                    onClick={onDelete}
                    disabled={machine.transitions().indexOf(TX_DELETE) < 0}
                >
                    delete with id
                </button>
                <input type="number" ref={idRef} />
                <br />
                <button
                    className={buttonClass()}
                    onClick={onMove}
                    disabled={machine.transitions().indexOf(TX_MOVE) < 0}
                >
                    move with positions starting from 0
                </button>
                <input type="number" ref={fromRef} />
                <input type="number" ref={toRef} />
                <br />
                <button
                    className={buttonClass()}
                    onClick={onClear}
                    disabled={machine.transitions().indexOf(TX_CLEAR) < 0}
                >
                    clear
                </button>
            </div>
            <div
                className={stateClass('photobooth')}
                style={stateStyle('photobooth')}
            >
                <h4 className={h4Class('photobooth')}>
                    Photobooth
                </h4>
                <button
                    className={buttonClass()}
                    onClick={onTake}
                    disabled={machine.transitions().indexOf(TX_TAKE) < 0}
                >
                    Take photo with id of ----
                </button>
                <input
                    type="number"
                    ref={takeRef}
                    defaultValue={itemId}
                    disabled={machine.transitions().indexOf(TX_TAKE) < 0}
                />
                <br />

                <button
                    className={buttonClass()}
                    onClick={onCancelTake}
                    disabled={machine.transitions().indexOf(TX_CANCEL_TAKE) < 0}
                >
                    Cancel Take - I don't want to take a photo
                </button>
            </div>
            <div
                className={stateClass('accept')}
                style={stateStyle('accept')}

            >
                <h4 className={h4Class('accept')}>
                    Accept
                </h4>
                <button
                    className={buttonClass()}
                    onClick={onAccept}
                    disabled={machine.transitions().indexOf(TX_ACCEPT) < 0}
                >
                    accept {itemId} into the album
                </button>
                <button
                    className={buttonClass()}
                    onClick={cancelAccept}
                    disabled={machine.transitions().indexOf(TX_CANCEL_ACCEPT) < 0}
                >
                    Cancel Accept on {itemId}
                </button>
                <button
                    className={buttonClass()}
                    onClick={onTakeAgain}
                    disabled={machine.transitions().indexOf(TX_TAKE_AGAIN) < 0}
                >
                    Discard {itemId} and try again
                </button>
            </div>
            {(
                <div
                    className="p-2 border border-primary text-center m-2 d-flex flex-row"
                >
                    <p
                        className="align-middle h-100 d-inline-block"
                    >items:</p>
                    {machine.getItems().map((item: any) => <div
                        className="p-2 border border-primary text-center m-2"
                        style={{ width: '3em' }}
                        key={item.id}>{item.id}</div>)}
                </div>
            )}
        </>
    )
}

export default StateMachine
