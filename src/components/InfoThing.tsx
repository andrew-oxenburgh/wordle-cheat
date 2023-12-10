import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createUseStyles } from 'react-jss';
import { faInfo as icon } from '@fortawesome/free-solid-svg-icons'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { ReactNode } from 'react';

interface HelpThingProps {
   children?: ReactNode;
}



const useStyles = createUseStyles({
   helpButton: {
      position: 'fixed',
      bottom: '0em',
      left: '0em',
      width: '3em',
      zIndex: 1000,
      borderRadius: '4em',
      border: '4px solid black',
      '&:hover': {
         border: '4px solid black',
      }
   },
   helpContent: {
      position: 'fixed',
      top: '70px',
      right: '20px',
      zIndex: 1000,
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
   },
   helpIcon: {

   }
});

const InfoThing: React.FC<HelpThingProps> = ({ children }) => {
   const [showHelp, setShowHelp] = useState(false);
   const toggleHelp = () => setShowHelp(!showHelp);

   const classes = useStyles()

   return (
      <Container>
         <Button
            onClick={toggleHelp}
            className={classes.helpButton}
            variant="warning"
            id="info"
         >
            <OverlayTrigger delay={500} overlay={<Tooltip id='info'>About this page</Tooltip>}>
               <FontAwesomeIcon size="1x" icon={icon} />
            </OverlayTrigger>

         </Button>
         {showHelp && (
            <Offcanvas
               show={showHelp}
               onHide={toggleHelp}
               placement="top"
            >
               <Offcanvas.Header closeButton>
                  <Offcanvas.Title>About</Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  {children}
               </Offcanvas.Body>
            </Offcanvas>

         )
         }
      </Container >
   )
}

export default InfoThing;
