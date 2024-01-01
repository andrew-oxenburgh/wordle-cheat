import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import PageBody from '../../components/structural/PageBody'
import { ImageObject } from 'open-graph-scraper/dist/lib/types'
import { NormalisedType } from '../../express/ogGraph'

type ShownGraphType = {
    title: string
    url: string
    description: string
    images: ImageObject[]
}
const regex = /^(https?:\/\/)?/i;
function removeProtocol(url: string) {
    return url.replace(regex, '')
}

const MyLinks: React.FC = () => {
    const [url, setUrl] = useState('')
    const [graph, setGraph] = useState<NormalisedType | null>(null)
    const [status, setStatus] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const newUrl = removeProtocol(url);
        // console.log(newUrl); // output: example.com

        const path = '/api/graph?url=' + newUrl
        try {
            const response = await fetch(path)
            const json = await response.json()
            // console.log(json)
            setGraph(json)
        } catch (error) {
            setStatus(JSON.stringify(error))
        }
    }

    return (
        <>
            <PageBody name="my-links">
                <Card>
                    {graph?.siteName && <Card.Header>
                        {graph.siteName}
                    </Card.Header>
                    }
                    {
                        graph &&
                        <Card.Body>
                            {graph.title && <h3>{graph?.title}</h3>}
                            <p>{graph?.description}</p>
                            <p>{graph?.type}</p>
                            <p>{graph?.siteName}</p>
                            {graph.url && <Card.Link href={graph.url} target="_blank" rel="noopener noreferrer">{graph.url}</Card.Link>}
                        </Card.Body>
                    }
                    {graph?.image &&
                        <Card.Img src={graph?.image.url}></Card.Img>
                    }
                    <Card.Footer>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="url"
                                    placeholder="Enter a URL"
                                    value={url}
                                    onChange={(event) => setUrl(event.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <pre>
                            {status}
                        </pre>
                    </Card.Footer>
                </Card>
                <pre>
                    {JSON.stringify(graph, null, 4)}
                </pre>
            </PageBody>
        </>
    )
}

export default MyLinks