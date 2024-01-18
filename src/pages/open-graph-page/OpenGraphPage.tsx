import React, { useRef, useState } from 'react'

import { createUseStyles } from 'react-jss'
import { useEffectOnce } from 'usehooks-ts'

import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

import { OgObject } from 'open-graph-scraper/dist/lib/types'
import JSONPretty from 'react-json-pretty'

import PageBody from '#/components/structural/PageBody'
import OpenGraphCard from '#/components/OpenGraphCard'

import { NormalisedType, presets } from './open-graph.types'
import { normalise } from './open-graph.utils'
import { getOgGraph } from './open-graph-page'
import { convertOgObjectToOgArray } from './convert-object-to-array-of-arrays.util'

import 'react-json-pretty/themes/1337.css'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

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
    const [url, setUrl] = useState('https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY')
    const [loading, setLoading] = useState<boolean>(false)
    const [normalisedGraph, setNormalisedGraph] = useState<NormalisedType | null>(null)
    const [ogGraph, setOgGraph] = useState<OgObject | null>(null)
    const [status, setStatus] = useState('')
    const classes = useStyles()
    const urlRef = useRef(null)

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
                <Card style={cardStyle}>
                    <Card.Header>
                        Open Graph
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Enter a url, and we'll extract all the OG data and present it in a kind of nice way
                        </Card.Text>
                        <Form.Control
                            as="textarea"
                            id="urlTextArea2"
                            ref={urlRef}
                            autoFocus
                            type="text"
                            value={url}
                            placeholder="Enter a URL..."
                            onChange={(e) => setUrl(e.target.value)}
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
                    </Card.Body>
                </Card>

                <OpenGraphCard normalisedGraph={normalisedGraph} loading={loading} cardStyle={cardStyle} />
                {
                    ogGraph && (
                        <>
                            <Card style={cardStyle}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1" style={{ background: 'rgb(30, 30, 30)' }}>
                                        <Accordion.Header>Data as is from scraper</Accordion.Header>
                                        <Accordion.Body className={classes.accordianBody}>
                                            <JSONPretty id="json-pretty" data={ogGraph} />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card>
                            <Card style={cardStyle}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Open Graph Data</Accordion.Header>
                                        <Accordion.Body className={classes.accordianBody}>
                                            <Table size="sm" striped bordered hover style={{ fontSize: 'small' }}>
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
                            </Card >
                        </>
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
