// PAGE: emoji-search

import { KeyboardEventHandler, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import PageBody from '#/components/structural/PageBody'
import { cardStyle } from '#/components/structural/structural.config'

const useStyles = createUseStyles({
    chacter: {
        // fontSize: "150%"
    },
    emoji: {
        cursor: 'crosshair',
        width: '25%',
        // fontSize: '400%',
        textAlign: 'center',
    },
    alert: {
        position: 'absolute',
        top: '4em',
        right: '1em',
        // zIndex: 10,
    },
})
const emojiRoot = 'https://emoji-api.com/'
const pathAll = emojiRoot + 'emojis'

const emojiApiKey = '3c852c8687a973f3017ad721b796f6232306d17e'

// eslint-disable-next-line
const findAll = () => {
    return `${pathAll}?access_key=${emojiApiKey}`
}

const search = (qry: string) => {
    return `${pathAll}?search=${qry}&access_key=${emojiApiKey}`
}

// eslint-disable-next-line
const find = (name: string) => {
    return `${pathAll}/${name}?access_key=${emojiApiKey}`
}

type EmojiVariantType = {
    slug: string
    character: string
}
type EmojiType = {
    slug: string
    character: string
    unicodeName: string
    codePoint: string
    group: string
    subGroup: string
    variants: EmojiVariantType[]
}

const EmojiSearch = () => {
    const [alert, setAlert] = useState<string>('')
    const [searchTerm, setSearchTerm] = useState('monkey')
    const [searched, setSearched] = useState('')
    const [results, setResults] = useState<EmojiType[]>([])
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const fetchSearch = async () => {
        try {
            setLoading(true)
            setResults([])
            const response: Response = await fetch(search(searchTerm))
            if (response.ok) {
                const data = await response.json()
                if (!data || data?.status === 'error') {
                    setResults([])
                } else {
                    setResults(data as EmojiType[])
                }
            } else {
                throw new Error('Failed to fetch data')
            }
        } finally {
            setLoading(false)
            setSearched(searchTerm)
        }
    }

    useEffect(() => {
        // initial search
        void fetchSearch()
    }, [])

    // pressed button
    const handleClick = () => {
        void fetchSearch()
    }

    // pressed Enter
    const onKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'Enter') {
            void fetchSearch()
        }
        return
    }

    const keyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const onCopy = (ch: string) => {
        const copy = async () => {
            await navigator.clipboard.writeText(ch)
            setAlert(ch + 'Copied to clipboard!')
        }
        return () => {
            void copy()
        }
    }
    const buttonText = () => {
        if (loading) {
            return 'Loading...'
        }
        if (searchTerm.length < 3) {
            return '3 letters needed'
        }
        return 'Search'
    }

    return (
        <PageBody name="emoji-search" >
            <Card style={cardStyle} className="mb-3 mt-4">
                <Card.Header>Looking for an emoji?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Then look no further...
                    </Card.Text>
                    <Card.Text>
                        Change the search term, et voila!!
                    </Card.Text>
                    <Card.Text>
                        Click on the emoji to copy it into the clipboard
                    </Card.Text>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                as="input"
                                onChange={keyChange}
                                onKeyDown={onKeyDown as unknown as KeyboardEventHandler}
                                value={searchTerm}
                                type="text"
                                placeholder="search..."
                                autoFocus
                            />
                            <Form.Text className="text-muted">
                                more than 3 letters, please...
                            </Form.Text>
                        </Form.Group>
                        <Button className="w-100 mt-3 mb-3" variant="primary" disabled={searchTerm.length < 3 || loading} type="submit" onClick={handleClick}>
                            {buttonText()}
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Card.Text className="text-center fw-bold" >
                        {results.length === 0 ? 'No Emojis Found' : `${results.length} Emojis found`}
                    </Card.Text>
                </Card.Footer>
            </Card>
            {
                alert !== '' && (
                    <Alert className={classes.alert} dismissible onClose={() => { setAlert('') }}>
                        {alert}
                    </Alert>
                )
            }
            <Card style={cardStyle}>
                <Card.Header>Found {results.length} results with search term "{searched}"</Card.Header>
                <Card.Body>
                    <Table size="sm" striped bordered hover>
                        <thead>
                            <tr>
                                <th>slug</th>
                                <th>unicode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results?.length ?
                                    (results.map((emoji: EmojiType) => (
                                        <tr key={emoji.slug}>
                                            <td className={classes.chacter}>{emoji.slug.replace(/\w+-\w+-/, '').replaceAll('-', ' ')}</td>
                                            <td className={classes.emoji} width="25%" onClick={onCopy(emoji.character)}>
                                                {emoji.character}
                                            </td>
                                        </tr>
                                    )))
                                    : (
                                        <tr>
                                            <td className={classes.chacter}>-</td>
                                            <td className={classes.emoji} width="25%">
                                                -
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </PageBody>
    )
}

export default EmojiSearch
