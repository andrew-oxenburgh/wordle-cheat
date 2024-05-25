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
    const h5em = { height: '5em' }
    const sq5em = {
        width: '5em',
        height: '5em',
        position: 'absolute' as any,
        top: '0.2em',
        right: '0.5em',
    }
    return (
        <Card className="p-1 m-1" >
            <Card.Body style={h5em}>
                <div className="d-flex">
                    <div className='w-75'>
                        <h5 className="w-100">{name}</h5>
                        <i>{desc}</i>
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

