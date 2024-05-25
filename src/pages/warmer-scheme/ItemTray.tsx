import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { ItemTrayProps } from './item-props'
import { useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime'

export const ItemTray: React.FC<ItemTrayProps> = ({ item, expectedLevel }) => {
    const counter = useSignal(0)
    useSignals()
    useSignalEffect(() => { })

    if (!item) {
        return (
            <>
                unknown
            </>
        )
    }
    const id = item.id
    const name = item.name
    const desc = item.desc
    const cardHeight = { height: '13em' }
    const w3em = {
        display: 'inline-block',
        width: '3em',
    }
    const sq5em = {
        width: '5em',
        height: '5em',
        position: 'absolute' as any,
        top: '0.2em',
        right: '0.5em',
    }
    const add = () => {
        counter.value++
    }
    const subtract = () => {
        if (counter.value > 0) {
            counter.value--
        }
    }
    return (
        <Card className="p-1 m-1" >
            <Card.Body style={cardHeight}>
                <div className="d-flex">
                    <div className='w-75'>
                        <h5 className="w-100">{name}</h5>
                        <i>{desc}</i>
                        <div>expectedLevel: {expectedLevel}</div>
                        <div>top up level: {expectedLevel - counter.value}</div>
                        <br />
                        <span className="w-100">
                            <span style={w3em}>{counter.value}</span>
                            <ButtonGroup aria-label="Basic example" className="w-50">
                                <Button
                                    variant="light"
                                    onClick={add}
                                >+</Button>
                                <Button
                                    onClick={subtract}
                                    variant="light"
                                >-</Button>
                            </ButtonGroup>
                        </span>
                    </div>
                    <Card.Img
                        src={`/warmer-scheme/img/${id}.png`}
                        className="ml-auto"
                        style={sq5em}
                    />
                </div>
            </Card.Body>
        </Card>
    )
}

