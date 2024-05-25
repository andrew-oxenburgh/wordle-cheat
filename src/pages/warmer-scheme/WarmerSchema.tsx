import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { itemPositions } from './items.config'
import { itemById } from './warmer-schema.utils'
import { ItemTray } from './ItemTray'

const WarmerScheme: React.FC = () => {
    return (
        <PageBody name="warmer-scheme">
            <Container>
                {itemPositions.map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        {row.map((item, colIndex) => (
                            <Col key={colIndex}>
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
