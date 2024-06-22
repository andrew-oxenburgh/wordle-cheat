import PageBody from '#/components/structural/PageBody'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { itemPositions, warmerWidth } from './items.config'
import { listOfBakes } from './warmer-schema.utils'
import { ItemTray } from './ItemTray'
import Dropdown from 'react-bootstrap/Dropdown'
import { useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime'
import { Signal } from '@preact/signals-react'
import Button from 'react-bootstrap/Button'
import * as R from 'ramda'
import { useState } from 'react'
import { BakeItems } from './item-props'

const BakesDropdown = ({ selectedBake }: { selectedBake: Signal<string> }) => {
    useSignals()
    useSignalEffect(() => { })
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedBake.value}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {listOfBakes().map((bake) => (
                    <Dropdown.Item key={bake} onClick={() => { selectedBake.value = bake }}>
                        {bake}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown >
    )
}

const WarmerScheme: React.FC = () => {
    const selectedBake = useSignal(listOfBakes()[0])
    useSignals()
    useSignalEffect(() => { })

    const [itemCounts, setItemCounts] = useState<BakeItems[]>([])

    const setItemCount = (itemId: string) => {
        return (inc: number) => {
            const newCounts = {...itemCounts}
            if (!newCounts[itemId]){
                newCounts[itemId] = 0
            }
            newCounts[itemId] = newCounts[itemId] + inc
            setItemCounts(newCounts)
            console.log(newCounts)
        }
    }

    const pickList = () => {
        // eslint-disable-next-line no-console
        console.log('pick list', itemCounts)

    }

    const warmerConfig = R.splitEvery(warmerWidth, itemPositions)
    return (
        <PageBody name="warmer-scheme">
            <Container className='m-0'>
                <BakesDropdown selectedBake={selectedBake} />
                {warmerConfig.map((row: string[], rowIndex: number) => (
                    <Row key={rowIndex}>
                        {row.map((item: string, colIndex) => (
                            <Col key={colIndex} className="p-1">
                                {
                                    <ItemTray
                                        itemId={item}
                                        selectedBake={selectedBake.value}
                                        setItemCount={setItemCount(item)}
                                        counter={itemCounts[item] || 0 }
                                    />
                                }
                            </Col>
                        ))}
                    </Row>
                ))}
                <Button onClick={() => {
                    pickList()
                }}>create pick list</Button>
            </Container>
        </PageBody >
    )
}

export default WarmerScheme
