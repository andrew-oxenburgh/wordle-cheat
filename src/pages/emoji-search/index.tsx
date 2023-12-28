
import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Toast from 'react-bootstrap/Toast'
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
        fontSize: '400%',
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
    const [_, setLoading] = useState(false)
    const classes = useStyles()
    const handleClick = () => {
        const handle = async () => {
            try {
                setLoading(true)
                const response = await fetch(search(searchTerm))
                if (response.ok) {
                    const data = await response.json()
                    if (data?.status === 'error') {
                        setResults([])
                    } else {
                        setResults(data)
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
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && event.currentTarget === event.target) {
            void handleClick()
        }
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

    return (
        <PageBody name="emoji-search" >
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Search</Card.Title>
                    <Form.Control onKeyPress={handleKeyPress} onChange={handleChange} type="text" placeholder="Search..." />
                    <Button variant="primary" onClick={handleClick}
                        disabled={searchTerm.length < 3}
                    >search</Button>
                </Card.Body>
            </Card>
            <Toast bg="info">
                <Toast.Body>{results.length === 0 ? 'No Emojis Found' : `${results.length} Emojis found`}</Toast.Body>
            </Toast>

            {alert !== '' && (
                <Alert className={classes.alert} dismissible onClose={() => { setAlert('') }}>
                    {alert}
                </Alert>
            )
            }

            <p></p>
            <Table size="sm" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>slug</th>
                        <th>unicode</th>
                    </tr>
                </thead>
                <tbody>
                    {results?.map((emoji: EmojiType) => (
                        <tr key={emoji.slug}>
                            <td className={classes.chacter}>{emoji.slug.replace(/\w+-\w+-/, '').replaceAll('-', ' ')}</td>
                            <td className={classes.emoji} width="25%" onClick={onCopy(emoji.character)}>
                                {emoji.character}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </PageBody>
    )
}

export default EmojiSearch

/**
            <a href="https://emoji-api.com/">emoji-api</a>
            <p>This is a simple emoji search app.</p>
            <a href={findAll()} target="_blank">all</a>
            <br />
            <a href={search('computer')} target="_blank">search for computer</a>
            <br />
            <p>{find('grinning-squinting-face')}</p>
            <a href={find('grinning-squinting-face')} target="_blank">find grinning-squinting-face</a>
            <br />
            <a href="https://emoji-api.com/emojis/e0-7-desktop-computer?access_key=3c852c8687a973f3017ad721b796f6232306d17e" target="_blank">specific emoji</a>
            <br />
            <a href="https://emoji-api.com/categories/travel-places?access_key=3c852c8687a973f3017ad721b796f6232306d17e" target="_blank">all cetagories</a>
            <br />
            <a href="https://emoji-api.com/categories/travel-places?access_key=3c852c8687a973f3017ad721b796f6232306d17e" target="_blank">specific category</a>
 **/
