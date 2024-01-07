import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import PageBody from '../../components/structural/PageBody'
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
        top: '1em',
        right: '1em',
        zIndex: 10,
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
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState<EmojiType[]>([])
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const handleClick = () => {
        const handle = async () => {
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
            }
        }
        void handle()
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                as="input"
                                onChange={handleChange}
                                type="text"
                                placeholder="search..."
                                autoFocus
                            />
                            <Form.Text className="text-muted">
                                more than 3 letters, please...
                            </Form.Text>
                        </Form.Group>
                        <Button className="w-100" variant="primary" disabled={searchTerm.length < 3 || loading} type="submit" onClick={handleClick}>
                            {buttonText()}
                        </Button>
                    </Form>
                    <Card.Text className="w-100 bg-info rounded text-center mt-1 p-1" >
                        {results.length === 0 ? 'No Emojis Found' : `${results.length} Emojis found`}
                    </Card.Text>
                </Card.Body>
            </Card>

            {alert !== '' && (
                <Alert className={classes.alert} dismissible onClose={() => { setAlert('') }}>
                    {alert}
                </Alert>
            )
            }

            <Table size="sm" striped bordered hover variant="dark">
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
        </PageBody>
    )
}

export default EmojiSearch
