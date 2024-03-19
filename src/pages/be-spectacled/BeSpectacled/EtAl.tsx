import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Item, _items } from './utils';

export const EtAl = ({ detectDeviceType, setItems, items }: {
    detectDeviceType: any;
    setItems: any;
    items: Item[];
}) => {
    return (<div>
        <h3>About the grid</h3>
        <Button variant="primary" style={{
            position: 'relative',
        }} onClick={() => setItems(_items)}>reset grid for testing</Button>
        <Button variant="primary" style={{
            position: 'relative',
        }} onClick={() => setItems([])}>clear grid</Button>
        <p>devices = {JSON.stringify(detectDeviceType)}</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>txt</th>
                    <th>img</th>
                </tr>
            </thead>
            <tbody>
                {items?.length ? items.map((item: any) => {
                    if (!item) {
                        return '';
                    }

                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.text}</td>
                        <td>
                            <img style={{
                                width: '100px',
                            }} src={item.img} />
                        </td>
                    </tr>;
                }) : <p>no items</p>}
            </tbody>
        </Table>
    </div>);
};
