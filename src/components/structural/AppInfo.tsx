import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { version } from '../../config/config'
import { getMetaValue } from '#/config/isDevMode'
import { ButtonWithTooltip } from '../ButtonWithTooltip'
import dayjs from 'dayjs'
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useLocalStorage } from 'usehooks-ts'

export const AppInfo = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const s = getMetaValue('VITE__BUILD_DATE') as string
    const dateInDay = dayjs(new Date(s))
    const buildDateStr = dateInDay.format('ddd YYYY/MM/DD HH:mm:ss')
    const sinceBuild = dateInDay.fromNow()

    const [acceptCookies, setAcceptCookies] = useLocalStorage('accept-cookies', false)

    return (
        <>
            <ButtonWithTooltip
                onClick={handleShow}
                size='sm'
                variant='light'
                tipText='about sketches'>
                <i className='fs-6 text-black-50 text-decoration-underline'>
                    ({version})
                </i>
            </ButtonWithTooltip>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Andrews Sketches</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Build Date:</td>
                                <td>
                                    {buildDateStr} <br />
                                    ({sinceBuild})
                                </td>
                            </tr>
                            <tr>
                                <td>Version:</td>
                                <td>{version}</td>
                            </tr>
                            <tr>
                                <td>Cookies are</td>
                                <td>
                                    <ToggleButton
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="secondary"
                                        checked={acceptCookies}
                                        value="1"
                                        onChange={(e) => setAcceptCookies(!acceptCookies)}
                                    >
                                        {
                                            acceptCookies ? 'accepted' : 'not accepted'
                                        }
                                    </ToggleButton>

                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}
