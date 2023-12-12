import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy as icon } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert'

const useStyles = createUseStyles({
   button: {
      backgroundColor: 'lightblue',
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
         backgroundColor: 'skyblue',
      },
   },
   alert: {
      position: 'absolute',
      bottom: '10em',
      left: '1em',
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
         <span className={classes.button} onClick={onCopy}>
            <FontAwesomeIcon icon={icon} /> &nbsp;
            {text}
         </span>
         <Alert className={classes.alert} dismissible show={show} onClose={closeAlert} variant="success">
            {warning && <Alert.Heading>{warning}</Alert.Heading>}
            Copied to clipboard!
         </Alert>
      </div >
   );
};

export default CopyableText;