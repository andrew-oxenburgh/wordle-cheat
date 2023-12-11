import { createUseStyles } from 'react-jss';
import ReplitThing from './ReplitThing'
import GithubThing from './GithubThing'
const useStyles = createUseStyles({
   footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px 0',
      position: 'fixed',
      height: '3.5em',
      left: 0,
      bottom: 0,
      paddingRight: '0.5em',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
   },
});

function Footer() {
   const classes = useStyles();
   return (
      <footer className={classes.footer}>
         <ReplitThing />
         &nbsp;
         <GithubThing />
      </footer>
   );
}

export default Footer