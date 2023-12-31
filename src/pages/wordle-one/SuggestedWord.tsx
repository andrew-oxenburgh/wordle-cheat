import Badge from 'react-bootstrap/Badge'

import PropTypes from 'prop-types'

const SuggestedWord = ({ word }: { word: string }): JSX.Element => {
    return (<span>
        <Badge
            as="h3"
            bg="primary"
            style={{
                fontSize: '150%',
                marginLeft: '0.5em',
                width: '5em',
            }}
        >
            {word}
        </Badge>
    </span>)
}

SuggestedWord.propTypes = {
    word: PropTypes.string,
}

export default SuggestedWord
