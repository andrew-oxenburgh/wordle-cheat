import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

import * as R from 'ramda'

import SuggestedWord from './SuggestedWord'

const WordList = ({ words, title }: { words: string[]; title: string }): JSX.Element => {
    return (
        <Card style={{ maxWidth: '40em' }}>
            <Card.Body>
                <Card.Title as="h4">{title}</Card.Title>
                <Card.Text>possible words = {words.length}</Card.Text>
                <span style={{
                    overflow: 'clip',
                    display: 'inline-block',
                    fontFamily: 'monospace',
                }}>
                    {
                        R.map((word: string) => {
                            return (
                                <SuggestedWord key={word} word={word} />
                            )
                        })(R.take(40, words))
                    }
                </span>
            </Card.Body>
        </Card>
    )
}

WordList.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
}

export default WordList


