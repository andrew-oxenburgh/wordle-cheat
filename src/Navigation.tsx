import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { pageDefinitions, version } from './config/config'
import { navBarStyle } from './App'

export const Navigation = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <Navbar expanded={expanded} bg="dark" variant="dark" expand="sm" style={navBarStyle}>
            <Navbar.Brand href="#/">Sketches <span style={{ fontSize: '50%' }}>({version})</span></Navbar.Brand>
            <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onSelect={() => { setExpanded(false) }} className="me-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <NavDropdown title="Sketches" id="wordle-cheats">
                        {pageDefinitions.map((page) => (
                            <NavDropdown.Item key={page.title} href={page.link}>{page.title}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <Nav.Link href="/sb/index.html" target="_blank">Storybook</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
