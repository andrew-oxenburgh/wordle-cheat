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
import Table from 'react-bootstrap/Table'

const PickList = ({ items }: { items: BakeItems[] }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>count</th>
                </tr>
            </thead>
            <tbody>
                {R.keys(items).map((item, index) => (
                    <tr key={item}>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                        <td>{items[item]}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

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
    const [pickList, setShowPickList] = useState<boolean>(false)

    const [itemCounts, setItemCounts] = useState<BakeItems[]>([])

    const setItemCount = (itemId: string) => {
        return (inc: number) => {
            const newCounts: BakeItems[] = { ...itemCounts }
            if (!newCounts[itemId]) {
                newCounts[itemId] = 0
            }
            newCounts[itemId] = newCounts[itemId] + inc
            setItemCounts(newCounts)
            // eslint-disable-next-line no-console
            console.log(newCounts)
        }
    }

    const warmerConfig = R.splitEvery(warmerWidth, itemPositions)
    return (
        <PageBody name="warmer-scheme">
            <Container className='m-0'>
                <Button onClick={() => {
                    setShowPickList(!pickList)
                }}>toggle pick list</Button>

                {
                    pickList ? (<PickList items={itemCounts}/>) :
                        (
                            <>
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
                                                        counter={itemCounts[item] || 0}
                                                    />
                                                }
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </>
                        )
                }

            </Container>
        </PageBody >
    )
}

export default WarmerScheme
