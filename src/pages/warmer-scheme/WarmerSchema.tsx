import PageBody from '#/components/structural/PageBody'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { itemPositions } from './items.config'
import { itemById } from './warmer-schema.utils'
import { ItemTray } from './ItemTray'

const WarmerScheme: React.FC = () => {
    return (
        <PageBody name="warmer-scheme">
            <Container className='m-0'>
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
