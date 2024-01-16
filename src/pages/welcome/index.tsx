import ReactMarkdown from 'react-markdown'
import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/esm/Card'


const Welcome = () => {
    return (
        <PageBody name="welcome">
            <Card style={{ maxWidth: '30em', margin: 'auto' }}>
                <Card.Header>
                    A Sketchpad, so I can try out a few different things.
                </Card.Header>
                <Card.Body>
                    <ReactMarkdown children={`

Like:
 - replit
 - react in a proper app
 - replit extensions
 - dynamic imports
 - get better at Ramda
 - Vite
 - Make a couple of these things more public
 - code chunking by using dynamic imports
 - trying out various techniques, like 
         `} />
                </Card.Body>
            </Card >
        </PageBody>
    )
}

export default Welcome


