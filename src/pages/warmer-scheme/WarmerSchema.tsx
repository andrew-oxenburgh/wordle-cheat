import PageBody from '#/components/structural/PageBody'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { itemPositions } from './items.config'
import { itemById, listOfBakes } from './warmer-schema.utils'
import { ItemTray } from './ItemTray'
import Dropdown from 'react-bootstrap/Dropdown'
import { useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime'

const BakesDropdown: React.FC = () => {
    const selectedBake = useSignal(listOfBakes()[0])
    useSignals()
    useSignalEffect(() => { })
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedBake.value}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {listOfBakes().map((bake, index) => (
                    <Dropdown.Item key={bake} onClick={() => selectedBake.value = bake}>
                        {bake}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown >
    )
}

const WarmerScheme: React.FC = () => {
    return (
        <PageBody name="warmer-scheme">
            <Container className='m-0'>
                <BakesDropdown />
                {itemPositions.map((row, rowIndex) => (
                    <Row key={rowIndex} className='m-0'>
                        {row.map((item, colIndex) => (
                            <Col key={colIndex} className="w-50">
                                {
                                    <ItemTray
                                        item={itemById(item)}
                                    />
                                }
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </PageBody >
    )
}

export default WarmerScheme
