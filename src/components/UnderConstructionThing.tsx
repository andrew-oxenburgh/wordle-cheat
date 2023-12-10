// UnderConstructionBanner.tsx
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHardHat as icon } from '@fortawesome/free-solid-svg-icons'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const useStyles = createUseStyles({

   '@keyframes bounce': {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-25px)' },
   },
   banner: {
      animation: '$bounce 1s 3',
      animationTimingFunction: 'ease-in-out',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: '0em',
      left: '3em',
      height: '2.9em',
      color: 'black',
      background: 'yellow',
      width: '3em',
      zIndex: 1000,
      borderRadius: '4em',
      border: '4px solid black',
   },
   icon: {
   }
});

const UnderConstructionThing: React.FC = () => {
   const classes = useStyles();

   return (
      <div id='banner' className={classes.banner}>
         <OverlayTrigger delay={500} overlay={<Tooltip id='banner'>This Page still under construction</Tooltip>}>
            <FontAwesomeIcon className={classes.icon} size="1x" icon={icon} />
         </OverlayTrigger>
      </div>
   );
};

export default UnderConstructionThing;
