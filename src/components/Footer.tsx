import { createUseStyles } from 'react-jss'
import ReplitThing from './ReplitThing'
import GithubThing from './GithubThing'
import UnderConstructionThing from './UnderConstructionThing'
const useStyles = createUseStyles({
   footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px 0',
      margin: '0 auto',
      position: 'fixed',
      height: '3.5em',
      left: 0,
      bottom: 0,
      paddingRight: '0.5em',
      width: '100%',
      maxWidth: 'var(--width-content)',
      justifyContent: 'flex-end',
   },
})

function Footer({underConstruction}: {underConstruction: boolean}) {
   const classes = useStyles()
   return (
      <footer className={classes.footer}>
         <ReplitThing />
         &nbsp;
         <GithubThing />
         {
            underConstruction && (
               <UnderConstructionThing/>
            )
         }
      </footer>
   )
}

export default Footer
