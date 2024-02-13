// PAGE: draggey-gamey

import { effect, signal } from '@preact/signals-react'
import Card from 'react-bootstrap/Card'

import PageBody from '#/components/structural/PageBody'
import { Legend } from './Legend'
import { GameBoard } from './GameBoard'
import { colors } from './config'
import { DownloadPanel } from './DownloadPanel'

export const dragColor = signal<string>(colors[1])

const DraggyGamey: React.FC = () => {
    effect(()=>{})
    return (
        <>
            <PageBody name="draggey-gamey">
                <Card style={{ maxWidth: '30em', margin: 'auto' }}
                >
                    <Card.Header>
                        Let's play a little game
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Select a colour from the legend and click or drag to change the colors of squares
                        </Card.Text>
                        <Card.Text>
                            Then download your attractive art!!
                        </Card.Text>
                        <Legend />
                        <GameBoard id="game-board" />
                    </Card.Body>
                    <Card.Footer>
                        <DownloadPanel eleId="game-board" />
                    </Card.Footer>
                </Card>
            </PageBody >
        </>
    )
}

export default DraggyGamey

