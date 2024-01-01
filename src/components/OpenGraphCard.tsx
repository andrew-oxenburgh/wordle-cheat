import React, { useState } from 'react';
import PageBody from './structural/PageBody';
import { OgObject } from 'open-graph-scraper/dist/lib/types';
import { NormalisedType, normalise } from '../pages/my-links/my-links.utils';
import Loader from './Loader';
import Card from 'react-bootstrap/esm/Card';
import Image from 'react-bootstrap/esm/Image';

const OpenGraphCard = ({ loading, normalisedGraph }: { loading: boolean, normalisedGraph: NormalisedType | null }) => {
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
                    <Image width="32" src={normalisedGraph.favicon} />}
                {normalisedGraph?.siteName &&
                    <span>{' ' + normalisedGraph.siteName}</span>}
            </Card.Header>
            <Card.Body>
                {normalisedGraph.title && <h3>{normalisedGraph?.title}</h3>}
                <p>{normalisedGraph?.description}</p>
                <p>{normalisedGraph?.type}</p>
                <p>{normalisedGraph?.siteName}</p>
                {normalisedGraph.url && <Card.Link href={normalisedGraph.url} target="_blank" rel="noopener noreferrer">{normalisedGraph.url}</Card.Link>}
            </Card.Body>
            {normalisedGraph?.image &&
                <Card.Img src={normalisedGraph?.image.url}></Card.Img>}
        </Card>
    )
}

export default OpenGraphCard;