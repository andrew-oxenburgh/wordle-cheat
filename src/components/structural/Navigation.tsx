import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { useLocation, Location } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { pageDefinitions, version } from '../../config/config'
import { appMinMaxWidth } from './structural.config'
import { getMetaValue } from '#/config/isDevMode'
import { ButtonWithTooltip } from '../ButtonWithTooltip'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


export const navBarStyle = {
    borderRadius: '3px',
    ...appMinMaxWidth,
    margin: 'auto',
    width: '100%',
    padding: '0 1em',
}

const Example = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const s = getMetaValue('VITE__BUILD_DATE') as string
    const dateInDay = dayjs(new Date(s))
    const buildDateStr = dateInDay.format('ddd YYYY/MM/DD HH:mm:ss')
    const sinceBuild = dateInDay.fromNow()
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
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}


const Navigation = () => {
    const [expanded, setExpanded] = useState(false)
    const location: Location = useLocation()
    return (
        <>
            <Navbar expanded={expanded} bg="light" style={navBarStyle}>
                <Navbar.Brand href="#/">Sketches</Navbar.Brand>
                <Example />

                <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ position: 'absolute', right: '1em' }}>
                    <Nav onSelect={() => { setExpanded(false) }}>
                        <NavDropdown title="Sketches" id="wordle-cheats">
                            {pageDefinitions.map((page) => {
                                const icon = (<FontAwesomeIcon border size="lg" color="green" fixedWidth icon={page.icon as IconProp} />)
                                return (
                                    <NavDropdown.Item
                                        active={true === page.link.endsWith(location.pathname)}
                                        key={page.title} href={page.link}>{icon}&nbsp;{page.title}</NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                        <Nav.Link href="/sb/index.html" target="_blank" rel="noopener noreferrer">Storybook</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
