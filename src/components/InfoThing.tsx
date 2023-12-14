import { useState, ReactNode } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo as icon } from '@fortawesome/free-solid-svg-icons/faInfo'

interface HelpThingProps {
   children: ReactNode
   height?: string
}

const useStyles = createUseStyles({
   helpButton: {
      position: 'fixed',
      bottom: '0em',
      left: '0.5em',
      width: '3em',
      zIndex: 1000,
      borderRadius: '4em',
      border: '4px solid black',
      '&:hover': {
         border: '4px solid black',
      }
   },
});

const InfoThing: React.FC<HelpThingProps> = ({ children, height = "30%" }) => {
   const [showHelp, setShowHelp] = useState(false);
   const toggleHelp = () => setShowHelp(!showHelp);

   const classes = useStyles()

   return (
      <Container>
         <Button
            onClick={toggleHelp}
            aria-label={"Help button"}
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
               style={{ height }}
            >
               <Offcanvas.Header closeButton>
                  <Offcanvas.Title>About this page</Offcanvas.Title>
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
