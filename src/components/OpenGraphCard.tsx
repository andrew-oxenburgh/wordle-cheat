import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import * as R from 'ramda'
import {
    ArticleGraphFields,
    ArticleGraphType,
    MusicGraphFields,
    MusicGraphType,
    NormalisedType,
} from '../pages/open-graph-page/open-graph.types'
import Loader from './Loader'


/* eslint-disable-next-line */
const ArticleCard = ({ graph }: { graph: ArticleGraphType }) => {
    return (
        <>
            <hr />
            <h4>ARTICLE</h4>
            {
                R.reduce((acc: JSX.Element[], f: string) => {
                    const val: any = graph[f as keyof ArticleGraphType]
                    if (!val) {
                        return acc
                    }
                    acc.push(
                        <p key={val}>{f} = {val}</p>
                    )
                    return acc
                }, [], ArticleGraphFields)
            }
        </>
    )
}

const MusicCard = ({ graph, cardStyle = {} }: { graph: MusicGraphType; cardStyle: object }) => {
    return (
        <Card style={cardStyle}>
            <Card.Header>Music</Card.Header>
            <Card.Body>
                {
                    R.reduce((acc: JSX.Element[], f: string) => {
                        const val: any = graph[f as keyof MusicGraphType]

                        if (!val) {
                            return acc
                        }
                        if (f === 'musician' || f === 'album' || f === 'audio') {
                            acc.push(
                                <a href={val} target='_blank' key={val} rel="noopener noreferrer">{f}</a>
                            )
                        } else {
                            acc.push(
                                <p key={val}>{f} : {val}</p>
                            )
                        }
                        return acc
                    }, [], MusicGraphFields)
                }
            </Card.Body>
        </Card>
    )
}

type OpenGraphCardType = {
    loading: boolean
    normalisedGraph: NormalisedType | null
    cardStyle: object
}

const OpenGraphCard = ({ loading, normalisedGraph, cardStyle = {} }: OpenGraphCardType) => {
    if (loading) {
        return (
            <Card style={{
                // height: '80em',
            }}>
                <Card.Body>
                    <Loader title="loading OG data..." />
                </Card.Body>
            </Card>
        )
    }

    if (!normalisedGraph) {
        return (
            <Card>
                <Card.Header>
                    Choose a URL
                </Card.Header>
            </Card>
        )
    }
    return (
        <>
            <Card key={JSON.stringify(normalisedGraph)} style={cardStyle}>
                <Card.Header>
                    <>
                        {
                            normalisedGraph?.favicon && (
                                <Image src={normalisedGraph.favicon} title="favicon" />
                            )
                        }
                        <span>&nbsp;</span>
                        {
                            normalisedGraph.title || 'Results'
                        }
                    </>
                </Card.Header>
                <Card.Body>
                    {
                        normalisedGraph?.image &&
                        <Card.Img src={normalisedGraph?.image.url} title="image.url" />
                    }

                    {normalisedGraph?.siteName &&
                        <span>{' ' + normalisedGraph.siteName}</span>}
                    <p>{normalisedGraph?.description}</p>
                    <p>{normalisedGraph?.siteName}</p>
                    {normalisedGraph.url &&
                        <Card.Link href={normalisedGraph.url} target="_blank" rel="noopener noreferrer">
                            {normalisedGraph.url
                            }
                        </Card.Link>
                    }
                </Card.Body>

                {/* {normalisedGraph?.article && (
                <ArticleCard graph={normalisedGraph.article} />
            )} */}
                {/* {normalisedGraph?.type === 'website' && (
                <h3>Website</h3>
            )} */}
            </Card>
            {normalisedGraph.music && (
                <MusicCard graph={normalisedGraph.music} cardStyle={cardStyle} />
            )}
        </>
    )
}

export default OpenGraphCard
