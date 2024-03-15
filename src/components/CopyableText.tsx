import { useState } from 'react'

import { createUseStyles } from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy as icon } from '@fortawesome/free-solid-svg-icons/faCopy'
import Alert from 'react-bootstrap/Alert'
import { useInterval } from 'usehooks-ts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import style from './style.module.css'

const useStyles = createUseStyles({
    button: {
        position: 'relative',
        borderRadius: '0.5em',
        minHeight: '3em',
        minWidth: '15em',
        maxWidth: '100%',
        height: 'fit-content',
        border: '1px solid darkblue',
        padding: '0 10px 0 10px',
        margin: '1em 0 1.5em 0',
        cursor: 'pointer',
    },
    alert: {
        position: 'absolute',
        top: '1em',
        right: '0',
        zIndex: 10,
    },
    title: {
        position: 'absolute',
        top: '-1.05em',
        left: '1em',
        padding: '0 0.5em 0 0.5em',
        color: 'blue',
        borderRadius: '1em',
        fontSize: '60%',
        fontWeight: 'bold',
        background: 'lightblue',
        border: '1px solid blue',
    },
})

type CopyableTextProps = {
    text: string
    warning?: string
    time?: number
}

/**
 * Create a field to show text, and
 */
const CopyableText = ({ text, warning, time = 3000 }: CopyableTextProps) => {
    const classes = useStyles()
    const [show, setShow] = useState(false)
    const closeAlert = () => setShow(false)
    const showAlert = () => setShow(true)


    const onCopy = () => {
        const copy = async () => {
            await navigator.clipboard.writeText(text)
            showAlert()
        }

        void copy()
    }

    useInterval(
        closeAlert,
        time,
    )

    const createMarkdown = () => {
        return (
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className={style.markdown}
            >
                {text}
            </ReactMarkdown>
        )
    }

    return (
        <div>
            <div
                className={classes.button}
                onClick={onCopy}
                aria-label={'Copy to clipboard button'}
            >
                <div className={classes.title}>
                    copyable text
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <span style={{ clear: 'both' }}>
                        {createMarkdown()}
                    </span>
                </div>
            </div>
            <Alert className={classes.alert} dismissible show={show} onClose={closeAlert} variant="warning">
                {warning && <Alert.Heading>{warning}</Alert.Heading>}
                Copied to clipboard!
            </Alert>
        </div >
    )
}

export default CopyableText
