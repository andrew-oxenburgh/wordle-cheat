import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy as icon } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert'
import { useInterval } from 'usehooks-ts'

const useStyles = createUseStyles({
   button: {
      position: 'relative',
      backgroundColor: 'lightblue',
      borderRadius: '0.5em',
      border: '1px solid darkblue',
      padding: '10px',
      margin: '1em 0 2em 0',
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
      fontSize: '75%',
      fontWeight: 'bold',
      background: 'lightblue',
      border: '1px solid blue',
   }
});

interface Props {
   text: string
   warning?: string
}

const CopyableText: React.FC<Props> = ({ text, warning = '' }) => {
   const classes = useStyles();
   const [show, setShow] = useState(false);
   const closeAlert = () => setShow(false);
   const showAlert = () => setShow(true);
   const onCopy = () => {
      navigator.clipboard.writeText(text)
      showAlert()
   }

   useInterval(
      closeAlert,
      2000
   )

   return (
      <div>
         <div className={classes.button} onClick={onCopy}>
            <div className={classes.title}>
               copyable text
            </div>
            <div>
               <FontAwesomeIcon icon={icon} /> &nbsp;
               {text}
            </div>
         </div>
         <Alert className={classes.alert} dismissible show={show} onClose={closeAlert} variant="warning">
            {warning && <Alert.Heading>{warning}</Alert.Heading>}
            Copied to clipboard!
         </Alert>
      </div >
   );
};

export default CopyableText;