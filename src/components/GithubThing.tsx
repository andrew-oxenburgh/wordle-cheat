import { createUseStyles } from 'react-jss'
import { ButtonWithTooltip } from './ButtonWithTooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = createUseStyles({
    button: {
        background: 'red',
        paddingLeft: '0.5em',
    },
    text: {
        marginLeft: '0.2em',
    },
})
const url = 'https://github.com/andrew-oxenburgh/wordle-cheat'
const GithubThing: React.FC = () => {
    const classes = useStyles()
    return (
        <span >
            <ButtonWithTooltip
                aria-label={'View source in GitHub'}
                className={classes.button}
                variant="dark"
                href={url}
                target="_blank"
                tipText="Github"
                placement="top"
            >
                <FontAwesomeIcon icon={['fab', 'github']} />
                <span className={classes.text}>github</span>
            </ButtonWithTooltip>
        </span>
    )
}

export default GithubThing
