import ReactMarkdown from 'react-markdown'
import PageBody from '#/components/structural/PageBody'


const Welcome = () => {
    return (
        <PageBody name="welcome">
            <ReactMarkdown children={`
A Sketchpad, so I can try out a few different things.

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
        </PageBody>
    )
}

export default Welcome


