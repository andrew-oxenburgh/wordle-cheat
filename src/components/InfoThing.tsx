import { ReactNode } from 'react'

import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'

interface InfoThingProps {
    children?: ReactNode
    height?: string
    show: boolean
    onHide: () => void
}

/**
 * Creates a button to press to show more info. The content is
 * shown in a drop down Overlay
 */
const InfoThing: React.FC<InfoThingProps> = ({ children = '', height, show = false, onHide }) => {
    return (
        <Container>
            <Offcanvas
                show={show}
                onHide={onHide}
                placement="top"
                style={{ height }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>About this page</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {children}
                </Offcanvas.Body>
            </Offcanvas>
        </Container >
    )
}

export default InfoThing
