import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { pageDefinitions, version } from './config/config'
import { useLocation, Location } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const navBarStyle = {
    padding: '0 3em',
    borderRadius: '3px',
    width: '30em',
    margin: 'auto',
}

const Navigation = () => {
    const [expanded, setExpanded] = useState(false)
    const location: Location = useLocation()
    return (
        <Navbar expanded={expanded} bg="dark" variant="dark" expand="sm" style={navBarStyle}>
            <Navbar.Brand href="#/">Sketches <span style={{ fontSize: '50%' }}>({version})</span></Navbar.Brand>
            <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onSelect={() => { setExpanded(false) }} className="me-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
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
                    <Nav.Link href="/sb/index.html" target="_blank">Storybook</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
