import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useLocation, Location } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { pageDefinitions, version } from '../../config/config'
import { appMinMaxWidth } from './structural.config'

export const navBarStyle = {
    borderRadius: '3px',
    ...appMinMaxWidth,
    margin: 'auto',
    width: '100%',
    padding: '0 1em',
}

const Navigation = () => {
    const [expanded, setExpanded] = useState(false)
    const location: Location = useLocation()
    return (
        <Navbar expanded={expanded} bg="light" style={navBarStyle}>
            <Navbar.Brand href="#/">Sketches <span className="fst-italic text-secondary">(v.{version})</span></Navbar.Brand>
            <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ position: 'absolute', right: '1em' }}>
                <Nav onSelect={() => { setExpanded(false) }}>
                    <NavDropdown title="Sketches" id="wordle-cheats">
                        {pageDefinitions.map((page) => {
                            const icon = (<FontAwesomeIcon border size="lg" color="tomato" fixedWidth icon={page.icon as IconProp} />)
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
