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
    const warmerConfig = R.splitEvery(warmerWidth, itemPositions)
    return (
        <PageBody name="warmer-scheme">
            <Container className='m-0'>
                <BakesDropdown selectedBake={selectedBake} />
                {warmerConfig.map((row: string[], rowIndex: number) => (
                    <Row key={rowIndex}>
                        {row.map((item, colIndex) => (
                            <Col key={colIndex} className="p-1">
                                {
                                    <ItemTray
                                        itemId={item}
                                        selectedBake={selectedBake.value}
                                    />
                                }
                            </Col>
                        ))}
                    </Row>
                ))}
                <Button onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('bake', selectedBake.value)
                }}>create pick list</Button>
            </Container>
        </PageBody >
    )
}

export default WarmerScheme
