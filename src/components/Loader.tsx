import Spinner from 'react-bootstrap/Spinner'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   spinner: {
      color: 'blue',
      padding: '10px',
      width: '10em',
      height: '10em',
      margin: 'auto',
   },
})

const Loader = () => {
   const classes = useStyles()
   return (
      <>
         <Spinner className={classes.spinner} animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
         </Spinner>
      </>
   )
}

export default Loader
