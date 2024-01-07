import React, { useState } from 'react'
import PageBody from '../../components/structural/PageBody'
import { OgObject } from 'open-graph-scraper/dist/lib/types'
import { NormalisedType, presets } from './open-graph.types'
import { normalise } from './open-graph.utils'
import { getOgGraph } from './open-graph-page'
import OpenGraphCard from '../../components/OpenGraphCard'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Accordion from 'react-bootstrap/esm/Accordion'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/1337.css'
import { createUseStyles } from 'react-jss'
import { useEffectOnce } from 'usehooks-ts'
import { convertOgObjectToOgArray } from './convert-object-to-array-of-arrays.util'
import Table from 'react-bootstrap/Table'

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
    const [url, setUrl] = useState('https://ogp.me/')
    const [loading, setLoading] = useState<boolean>(false)
    const [normalisedGraph, setNormalisedGraph] = useState<NormalisedType | null>(null)
    const [ogGraph, setOgGraph] = useState<OgObject | null>(null)
    const [status, setStatus] = useState('')
    const classes = useStyles()

    useEffectOnce(() => {
        const fill = async () => {
            setLoading(true)
            await fillCard(url)
        }
        void fill()
    })

    const fillCard = async (site: string) => {
        try {
            if (site !== url) {
                setUrl(site)
            }

            setLoading(true)
            setNormalisedGraph(null)
            setOgGraph(null)

            const newUrl = removeProtocol(site)
            if (!newUrl) {
                setStatus('No URL provided')
                return
            }

            const json = await getOgGraph(newUrl)
            if (!json.success) {
                setStatus(json.error || 'error')
                return
            }
            setNormalisedGraph(normalise(json, site))
            setOgGraph(json)
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error)
            setStatus(JSON.stringify(error))
        } finally {
            setLoading(false)
        }
    }
    const onClick = () => {
        void fillCard(url)
    }

    return (
        <>
            <PageBody name="open-graph">

                <h3>Open Graph</h3>
                <p>Enter a url, and we'll extract all the OG data and present it in a kind of nice way</p>
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
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>og:tag</th>
                                                <th>value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {convertOgObjectToOgArray(ogGraph).map((row) => {
                                                if (row.length >= 2) {
                                                    return (
                                                        <tr key={row.join('/')}>
                                                            <td>{row[0]}</td>
                                                            <td>{row[1]}</td>
                                                        </tr>
                                                    )
                                                }
                                            }
                                            )}
                                        </tbody>
                                    </Table>
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
