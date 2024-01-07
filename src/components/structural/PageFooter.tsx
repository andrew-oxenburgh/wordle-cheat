import { createUseStyles } from 'react-jss'
import ReplitThing from '../ReplitThing'
import GithubThing from '../GithubThing'
import UnderConstructionThing from '../UnderConstructionThing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles({
    footer: {
        width: '100%',
        height: '3.5em',
        position: 'static',
        margin: 'auto',
    },
    footerContent: {
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
        margin: 'auto',
        height: '3.5em',
        left: 0,
        bottom: 0,
        paddingRight: '0.5em',
        minWidth: '30em',
        maxWidth: '30em',
        justifyContent: 'flex-end',
        display: 'flex',
        borderRadius: '3px',
    },
})

const PageFooter = ({ underConstruction = false }) => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent + ' bg-dark'} >
                <ReplitThing />
                &nbsp;
                <GithubThing />
                {
                    underConstruction && (
                        <UnderConstructionThing />
                    )
                }
            </div >
        </footer >
    )
}

export default PageFooter
