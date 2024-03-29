// FAV: Navigation

import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useLocation, Location } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { pageDefinitions } from '../../config/config'
import { appMinMaxWidth } from './structural.config'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { AppInfo } from './AppInfo'
import { createUseStyles } from 'react-jss'

dayjs.extend(relativeTime)

const useStyles = createUseStyles({
    navBar: {
        borderRadius: '3px',
        ...appMinMaxWidth,
        margin: 'auto',
        width: '100%',
        padding: '0 1em',
    },
    navBarCollapse: {
        position: 'absolute',
        right: '1em',
    },
})

const Navigation = () => {
    const [expanded, setExpanded] = useState(false)
    const location: Location = useLocation()
    const classes = useStyles()
    return (
        <>
            <Navbar expanded={true} bg="light" className={classes.navBar}>
                <Navbar.Brand href="#/">Sketches</Navbar.Brand>
                <AppInfo />
                <Navbar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={classes.navBarCollapse}>
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
