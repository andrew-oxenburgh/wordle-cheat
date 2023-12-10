// UnderConstructionBanner.tsx
import React from 'react';
import { createUseStyles } from 'react-jss';

const centerBannerStyle = {
   left: '50%',
   transform: 'translateX(-50%)',
};

const useStyles = createUseStyles({
   banner: {
      ...centerBannerStyle,
      position: 'fixed',
      bottom: 10,
      width: '80%',
      backgroundColor: 'yellow',
      padding: '10px',
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
      zIndex: 0,
      marginBottom: '',
      border: '1px solid black',
      borderRadius: '2em'
   },
});

const UnderConstructionThing: React.FC = () => {
   const classes = useStyles();

   return (
      <div className={classes.banner}>
         This page still in dev
      </div>
   );
};

export default UnderConstructionThing;
