import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy as icon } from '@fortawesome/free-solid-svg-icons/faCopy'
import Alert from 'react-bootstrap/Alert'
import { useInterval } from 'usehooks-ts'

const useStyles = createUseStyles({
   button: {
      position: 'relative',
      backgroundColor: 'lightblue',
      borderRadius: '0.5em',
      minHeight: '3em',
      minWidth: '15em',
      maxWidth: '100%',
      height: 'fit-content',
      border: '1px solid darkblue',
      padding: '0 10px 0 10px',
      margin: '1em 0 1.5em 0',
      cursor: 'pointer',
      '&:hover': {
         backgroundColor: 'skyblue',
      },
      fontFamily: 'monospace',
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

interface Props {
   text: string
   warning?: string
   time?: number
}

/**
 * Create a field to show text, and if you click it, it copies that text into your clipboard
 * showing a message, with optional heading.
 */
const CopyableText: React.FC<Props> = ({ text, warning = '', time = 3000 }) => {
   const classes = useStyles()
   const [show, setShow] = useState(false)
   const closeAlert = () => setShow(false)
   const showAlert = () => setShow(true)
   const onCopy = () => {
      navigator.clipboard.writeText(text)
      showAlert()
   }

   useInterval(
      closeAlert,
      time,
   )

   return (
      <div>
         <button
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
               <span>
                  &nbsp;{text}
               </span>
            </div>
         </button>
         <Alert className={classes.alert} dismissible show={show} onClose={closeAlert} variant="warning">
            {warning && <Alert.Heading>{warning}</Alert.Heading>}
            Copied to clipboard!
         </Alert>
      </div >
   )
}

export default CopyableText
