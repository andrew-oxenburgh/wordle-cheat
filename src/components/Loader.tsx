import { createUseStyles } from 'react-jss'
import Spinner from 'react-bootstrap/Spinner'


const useStyles = createUseStyles({
    spinner: {
        color: 'blue',
        padding: '10px',
        width: '10em',
        height: '10em',
        margin: 'auto',
    },
    container: {
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '35em',
    },
})

const Loader = ({ title = 'Dynamic Import!!!!' }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {title && <h1 className={classes.spinner} >{title}</h1>}
            <Spinner className={classes.spinner} animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
