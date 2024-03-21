import { useState } from 'react'
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
import { useCounter } from 'usehooks-ts'

const StateMachine = (props: any) => {
    const [machine, setMachine] = useState(createMachine())
    const counter = useCounter(0)
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
    return (
        <>
            <p>
                {machine.state}
            </p>
            <p>
                {counter.count}
            </p>
            <p>
                <button onClick={request}>
                    Request
                </button>
            </p>
            <p>
                <button onClick={take}>
                    Take
                </button>
            </p>
            <p>
                <button onClick={accept}>
                    accept
                </button>
            </p>
            <p>
                {JSON.stringify(machine.getItems())}
            </p>

        </>
    )
}

export default StateMachine
