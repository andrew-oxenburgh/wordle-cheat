import { ButtonWithTooltip } from '../ButtonWithTooltip'
import { useLocalStorage } from 'usehooks-ts'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

const AcceptCookies = () => {
    const [acceptCookies, setAcceptCookies] = useLocalStorage('accept-cookies', false)
    const willAcceptCookies = () => setAcceptCookies(true)
    return (
        acceptCookies ?
            ''
            :
            (
                <ToastContainer
                    position='middle-center'
                >
                    <Toast>
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
                                accept cookies?
                            </ButtonWithTooltip>
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            )
    )
}

export default AcceptCookies
