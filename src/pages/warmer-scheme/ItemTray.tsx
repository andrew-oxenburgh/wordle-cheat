import Card from 'react-bootstrap/Card'
import { ItemTrayProps } from './item-props'

export const ItemTray: React.FC<ItemTrayProps> = ({ item }) => {
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
    return (
        <Card >
            <Card.Img src={`/warmer-scheme/img/${id}.png`} />
            <Card.Title>{name}</Card.Title>
            <Card.Header>{desc}</Card.Header>
        </Card>
    )
}

