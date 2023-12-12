import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy as icon } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert'

const useStyles = createUseStyles({
   button: {
      position: 'relative',
      backgroundColor: 'lightblue',
      borderRadius: '0.5em',
      border: '1px solid darkblue',
      padding: '10px',
      cursor: 'pointer',
      '&:hover': {
         backgroundColor: 'skyblue',
      },
   },
   alert: {
      position: 'absolute',
      bottom: '10em',
      left: '1em',
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
         <Alert className={classes.alert} dismissible show={show} onClose={closeAlert} variant="success">
            {warning && <Alert.Heading>{warning}</Alert.Heading>}
            Copied to clipboard!
         </Alert>
      </div >
   );
};

export default CopyableText;