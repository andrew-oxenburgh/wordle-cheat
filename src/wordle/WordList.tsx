import Card from 'react-bootstrap/Card'
import * as R from 'ramda'
import SuggestedWord from './SuggestedWord'
import PropTypes from 'prop-types'
import React from 'react'
import './WordList.css'

WordList.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string
}

function WordList({words, title}: { words: string[], title: string }): JSX.Element {
    return (
        <Card className="WordList">
            <Card.Body>
                <Card.Title as="h4">{title}</Card.Title>
                <Card.Text>possible words = {words.length}</Card.Text>
                <span style={{
                    overflow: 'clip',
                    display: 'inline-block',
                    fontFamily: 'monospace'
                }}>
                    {
                        R.map((word: string) => {
                            return (
                                <SuggestedWord key={word} word={word}/>
                            )
                        })(R.take(40, words))
                    }
                </span>
            </Card.Body>
        </Card>
    )
}

export default WordList
