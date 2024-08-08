import Table from 'react-bootstrap/Table'
import * as R from 'ramda'
import { BakeItems } from './item.props'

const PickList = ({ items }: { items: BakeItems }) => {
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
                {R.keys(items).map((item: string, index: number) => (
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

export default PickList
