import { createUseStyles } from 'react-jss'

import ReplitThing from '../ReplitThing'
import GithubThing from '../GithubThing'
import UnderConstructionThing from '../UnderConstructionThing'
import { appMaxWidth, appMinWidth } from './structural.config'

const useStyles = createUseStyles({
    footer: {
        position: 'static',
        margin: 'auto',
        ...appMaxWidth,
        ...appMinWidth,
        textAlign: 'center',
        height: '3.5em',
        left: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        display: 'flex',
        borderRadius: '3px',
        padding: '0.4em',
    },
})

const PageFooter = ({ underConstruction = false }) => {
    const classes = useStyles()
    return (
        <footer className={classes.footer + ' bg-dark'}>
            <ReplitThing />
            &nbsp;
            <GithubThing />
            {
                underConstruction && (
                    <UnderConstructionThing />
                )
            }
        </footer >
    )
}

export default PageFooter
