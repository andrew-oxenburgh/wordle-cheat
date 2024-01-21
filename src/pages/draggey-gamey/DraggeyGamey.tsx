import { signal } from '@preact/signals-react'

import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'
import { Legend } from './Legend'
import { GameBoard } from './GameBoard'
import { colors } from './config'
import { Download } from './Download'

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
                        <GameBoard id="game-board" />
                    </Card.Body>
                    <Card.Footer>
                        <Download eleId="game-board" />
                    </Card.Footer>
                </Card>
            </PageBody >
        </>
    )
}

export default DraggyGamey

