import { signal } from '@preact/signals-react'

import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'
import { Legend } from './Legend'
import { Game } from './Game'
import { colors } from './config'

export const dragColor = signal<string>(colors[1])

const DraggyGamey: React.FC = () => {
    return (
        <>
            <PageBody name="draggey-gamey">
                <Card style={{ maxWidth: '30em', margin: 'auto' }}
                >
                    <Card.Header>
                        a fun little game
                    </Card.Header>
                    <Card.Body>
                        <Legend />
                        <Game />
                    </Card.Body>
                </Card>
            </PageBody>
        </>
    )
}

export default DraggyGamey
