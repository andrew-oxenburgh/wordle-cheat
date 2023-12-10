import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
   footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px 0',
      position: 'fixed',
      height: '3em',
      left: 0,
      bottom: 0,
      width: '100%',
   },
});

function Footer() {
   const classes = useStyles();

   return (
      <footer className={classes.footer}>
         Andrew Oxenburgh - demo
      </footer>
   );
}

export default Footer