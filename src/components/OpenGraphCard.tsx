import * as R from 'ramda'
import {
    ArticleGraphFields,
    ArticleGraphType,
    MusicGraphFields,
    MusicGraphType,
    NormalisedType
} from '../pages/OpenGraphPage/open-graph.types'
import Loader from './Loader'
import Card from 'react-bootstrap/esm/Card'
import Image from 'react-bootstrap/esm/Image'

const ArticleCard = ({ graph }: { graph: ArticleGraphType }) => {
    return (
        <>
            <hr />
            <h4>ARTICLE</h4>
            {
                R.reduce((acc: any, f: string) => {
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

const MusicCard = ({ graph }: { graph: MusicGraphType }) => {
    return (
        <>
            <hr />
            <h4>Music</h4>
            {
                R.reduce((acc: any, f: string) => {
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
        </>
    )
}

const OpenGraphCard = ({ loading, normalisedGraph }: { loading: boolean; normalisedGraph: NormalisedType | null }) => {
    // console.log(JSON.stringify(normalisedGraph, null, 4))


    if (loading) {
        return (
            <Loader title="" />
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
        <Card key={JSON.stringify(normalisedGraph)}>
            <Card.Header>
                {normalisedGraph?.favicon &&
                    <Image max-width="32" src={normalisedGraph.favicon} />}
                {normalisedGraph?.siteName &&
                    <span>{' ' + normalisedGraph.siteName}</span>}
            </Card.Header>
            <Card.Body>
                {normalisedGraph.title && <h3>{normalisedGraph?.title}</h3>}
                <p>{normalisedGraph?.description}</p>
                <p>{normalisedGraph?.siteName}</p>
                {normalisedGraph.url && <Card.Link href={normalisedGraph.url} target="_blank" rel="noopener noreferrer">{normalisedGraph.url}</Card.Link>}
            </Card.Body>
            {normalisedGraph?.image &&
                <Card.Img src={normalisedGraph?.image.url}></Card.Img>}

            {normalisedGraph?.article && (
                <ArticleCard graph={normalisedGraph.article} />
            )}
            {normalisedGraph?.type === 'website' && (
                <h3>Website</h3>
            )}
            {normalisedGraph.music && (
                <MusicCard graph={normalisedGraph.music} />
            )}
        </Card>
    )
}

export default OpenGraphCard
