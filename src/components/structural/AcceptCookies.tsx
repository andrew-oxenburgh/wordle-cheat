import { createUseStyles } from 'react-jss'
import { ButtonWithTooltip } from '../ButtonWithTooltip'
import { useLocalStorage } from 'usehooks-ts'
import Toast from 'react-bootstrap/esm/Toast'

const useStyles = createUseStyles({
    button: {
        background: 'red',
        paddingLeft: '0.5em',
    },
    text: {
        marginLeft: '0.2em',
    },
})


const AcceptCookies = () => {
    const [acceptCookies, setAcceptCookies] = useLocalStorage('accept-cookies', false)
    const willAcceptCookies = () => setAcceptCookies(true)
    const classes = useStyles()
    return (
        acceptCookies ?
            ''
            :
            (
                <Toast>
                    <Toast.Header>
                        <p>accept cookies?</p>
                    </Toast.Header>
                    <Toast.Body>
                        <ButtonWithTooltip
                            tipText={'click to accept'}
                            onClick={willAcceptCookies}>
                            <p>kjhkjshfdkjhkjhsdfkjh</p>
                        </ButtonWithTooltip>
                    </Toast.Body>
                </Toast>
            )
    )
}

export default AcceptCookies
