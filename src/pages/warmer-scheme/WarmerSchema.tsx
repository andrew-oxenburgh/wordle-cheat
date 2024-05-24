import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import * as R from 'ramda'

type ItemProps = {
    id: string
    name: string
    desc: string
    alts?: string[]
}

const items: ItemProps[] = [
    {
        id: 'butter-chicken',
        name: 'butter chicken',
        alts: [],
        desc: 'covered in paprika',
    },
    {
        id: 'mince-cheese',
        name: 'mince & cheese',
        alts: [
            'Z special Mince * Cheese Classic',
        ],
        desc: 'V hole',
    },
    {
        id: 'mince',
        name: 'mince',
        alts: [
            'Z special Mince Classic',
        ],
        desc: '2 holes',
    },
    {
        id: 'steak-cheese',
        name: 'steak & cheese',
        alts: [
            'Z special Steak & Cheese Classic',
        ],
        desc: '1 hole',
    },
    {
        id: 'steak-bacon-cheese',
        name: 'steak, bacon & cheese',
        alts: [
            'Z special Steak Bacon & Cheese Classic',
        ],
        desc: '4 holes',
    },
]

const itemPositions: string[][] = [
    ['butter-chicken', 'mince-cheese'],
    ['steak-cheese', 'steak-bacon-cheese'],
]

type ItemTrayProps = {
    item: ItemProps
}

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

const WarmerScheme = () => {
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
