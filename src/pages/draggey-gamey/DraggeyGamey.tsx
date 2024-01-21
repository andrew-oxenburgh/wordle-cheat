import { signal } from '@preact/signals-react'

import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'
import { Legend } from './Legend'
import { GameBoard } from './GameBoard'
import { colors } from './config'
import Button from 'react-bootstrap/Button'
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'
import { loggerError } from '#/config/logger'

export const dragColor = signal<string>(colors[1])

const DraggyGamey: React.FC = () => {
    const downloadAsMimeType = (canvas: HTMLCanvasElement, mimeType: string) => {
        const dataURL = canvas.toDataURL(`image/${mimeType}`)
        downloadjs(dataURL, `download.${mimeType}`, `image/${mimeType}`)
    }

    const printIt = async () => {
        try {
            const board =
                document.getElementById('game-board')
            if (!board) {
                return
            }
            const canvas = await html2canvas(board)
            downloadAsMimeType(canvas, 'webp')
            downloadAsMimeType(canvas, 'png')
            downloadAsMimeType(canvas, 'jpg')
            downloadAsMimeType(canvas, 'svg')
        } catch (e) {
            loggerError(e)
        }

    }

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
                    <Card.Footer
                        onClick={() => void printIt()}
                    >
                        <Button>download</Button>
                    </Card.Footer>
                </Card>
            </PageBody>
        </>
    )
}

export default DraggyGamey
