import { createUseStyles } from 'react-jss'
import { ButtonWithTooltip } from '../ButtonWithTooltip'
import { useLocalStorage } from 'usehooks-ts'
import Toast from 'react-bootstrap/Toast'

const useStyles = createUseStyles({
    toast: {
        position: 'fixed',
        bottom: 10,
        left: 10,
        width: 'calc(100% - 20px)',
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
                <Toast className={classes.toast}>
                    <Toast.Header closeButton={false}>
                        <p>Accept Cookies</p>
                    </Toast.Header>
                    <Toast.Body>
                        <p>
                            The one cookie is a google tracking cookie.
                        </p>
                        <ButtonWithTooltip
                            tipText={'click to accept all cookies'}
                            placement='top'
                            onClick={willAcceptCookies}>
                            <p>accept cookies?</p>
                        </ButtonWithTooltip>
                    </Toast.Body>
                </Toast>
            )
    )
}

export default AcceptCookies
