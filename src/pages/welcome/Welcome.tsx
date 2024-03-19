// PAGE: welcome

import ReactMarkdown from 'react-markdown'
import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'

const Welcome = () => {
    return (
        <PageBody name="welcome">
            <Card style={{ maxWidth: '30em', margin: 'auto' }}>
                <Card.Header>
                    Sketch Pad
                </Card.Header>
                <Card.Body>
                    <ReactMarkdown children={`
I've written a bunch of these over years, and thought it'd be nice to get them all in one place.

I'm using Vite/React/Bootstrap with a Google Cloud Functions back end.

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

