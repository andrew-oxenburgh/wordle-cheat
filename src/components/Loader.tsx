import { createUseStyles } from 'react-jss'
import Spinner from 'react-bootstrap/Spinner'

const useStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%',

    },
    heading: {
        textAlign: 'center',
        margin: 'auto',
    },
    spinner: {
        display: 'inherit',
        width: '50%',
        height: '50%',
        margin: '2em auto',
    },
})

/**
 * 
 *  shows the user when we're loading something.
 * 
 * Fills the whole container.
 */
const Loader = ({ title = 'waiting...' }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {title && <h1 className={classes.heading} >{title}</h1>}
            <Spinner
                as="div"
                className={classes.spinner}
                variant='primary'
            >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
