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
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20em',
    },
})

const Loader = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <h1 className={classes.spinner} >Dynamic import!!!!</h1>
            <Spinner className={classes.spinner} animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
