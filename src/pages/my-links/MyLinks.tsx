import React, { useState } from 'react'
import PageBody from '../../components/structural/PageBody'
import { OgObject } from 'open-graph-scraper/dist/lib/types'
import { NormalisedType, normalise, presets } from './my-links.utils'
import OpenGraphCard from '../../components/OpenGraphCard'
import Button from 'react-bootstrap/esm/Button'

const regex = /^(https?:\/\/)?/i
export const removeProtocol = (url: string) => {
    return url.replace(regex, '')
}


const MyLinks: React.FC = () => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const [normalisedGraph, setNormalisedGraph] = useState<NormalisedType | null>(null)
    const [ogGraph, setOgGraph] = useState<OgObject>({})
    const [status, setStatus] = useState('')

    const fillCard = async (site: string) => {
        try {
            if (site !== url) {
                setUrl(site)
            }
            setLoading(true)
            setOgGraph({})
            const newUrl = removeProtocol(site)

            const path = '/api/graph?url=' + newUrl
            const response = await fetch(path)
            const json: OgObject = await response.json()
            const normalised = normalise(json, site)
            setNormalisedGraph(normalised)

            setOgGraph(json)
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error)
            setStatus(JSON.stringify(error))
        } finally {
            setLoading(false)
        }
    }
    const onClick = async () => {
        await fillCard(url)
    }

    return (
        <>
            <PageBody name="my-links">
                <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter a URL"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                />

                {
                    presets.map((preset) => (
                        <Button
                            key={preset}
                            variant="secondary"
                            onClick={() => void fillCard(preset)}>
                            {preset}
                        </Button>
                    ))
                }
                <Button type="submit" className="btn btn-primary"
                    disabled={loading}
                    onClick={() => void onClick()}
                >{loading ? 'Loading...' : 'Submit'}</Button>

                <OpenGraphCard normalisedGraph={normalisedGraph} loading={loading} />
                <pre>
                    {JSON.stringify(ogGraph, null, 4)}
                </pre>
                <pre>
                    {status}
                </pre>

            </PageBody >
        </>
    )
}

export default MyLinks
