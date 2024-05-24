import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import * as R from 'ramda'
import { ItemTrayProps } from './item-props'
import { items, itemPositions } from './items.config'

const itemById = (id: string) => {
    return R.find(R.propEq(id, 'id'))(items)
}

const ItemTray: React.FC<ItemTrayProps> = ({ item }) => {
    if (!item) {
        return (
            <Card>unknown</Card>
        )
    }
    const id = item.id
    const name = item.name
    const desc = item.desc
    return (<Card>
        <Container>
            <Row>
                <Col>
                    <h5>{name}</h5>
                    {desc}
                </Col>
                <Col>
                    <Image
                        width="100"
                        src={`/warmer-scheme/img/${id}.png`}
                        alt={name}
                    />
                </Col>
            </Row>
        </Container>
    </Card>)
}

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
