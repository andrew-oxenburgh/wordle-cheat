
import Card from 'react-bootstrap/Card'
import PageBody from '../../components/structural/PageBody'

const MyLinks: React.FC = () => {
    return (
        <>
            <PageBody name="my-links">
                <h3>My Links!!!</h3>
                <Card>
                    <Card.Header>
                        1st link
                    </Card.Header>
                    <Card.Body>
                        <Card.Link href="https://www.google.com" target="_blank">Google</Card.Link>
                    </Card.Body>

                </Card>
            </PageBody>
        </>
    )
}

export default MyLinks
