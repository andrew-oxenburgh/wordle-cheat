import React, { useState } from 'react'
import PageBody from '../../components/structural/PageBody'
import { OgObject } from 'open-graph-scraper/dist/lib/types'
import { NormalisedType, normalise, presets } from './my-links.utils'
import OpenGraphCard from '../../components/OpenGraphCard'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Accordion from 'react-bootstrap/esm/Accordion'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/1337.css'
import { createUseStyles } from 'react-jss'
// import { initializeApp } from 'firebase/app'
// const app = initializeApp()

const regex = /^(https?:\/\/)?/i
export const removeProtocol = (url: string) => {
    return url.replace(regex, '')
}

const useStyles = createUseStyles({
    accordianBody: {
        padding: '0',
    },
})


const MyLinks: React.FC = () => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const [normalisedGraph, setNormalisedGraph] = useState<NormalisedType | null>(null)
    const [ogGraph, setOgGraph] = useState<OgObject | null>(null)
    const [status, setStatus] = useState('')
    const classes = useStyles()
    const fillCard = async (site: string) => {
        // app
        try {
            if (site !== url) {
                setUrl(site)
            }
            setLoading(true)
            setOgGraph(null)
            const newUrl = removeProtocol(site)

            const path = 'http://localhost:5001/sketch-oxenburgh/us-central1/ogGraph?url=' + newUrl


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


                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Preset url's
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            presets.map((preset) => (
                                <Dropdown.Item
                                    key={preset}
                                    onClick={() => void fillCard(preset)}>
                                    {preset}
                                </Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>

                <Button type="submit" className="btn btn-primary"
                    disabled={loading}
                    onClick={() => void onClick()}
                >{loading ? 'Loading...' : 'Submit'}</Button>

                <OpenGraphCard normalisedGraph={normalisedGraph} loading={loading} />
                {
                    ogGraph && (
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Open Graph Data</Accordion.Header>
                                <Accordion.Body className={classes.accordianBody}>
                                    <JSONPretty id="json-pretty" data={ogGraph} />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                }
                <pre>
                    {status}
                </pre>

            </PageBody >
        </>
    )
}

export default MyLinks
