// PAGE: draggey-gamey

import { effect, signal } from '@preact/signals-react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import PageBody from '#/components/structural/PageBody'
import { Legend } from './Legend'
import { GameBoard } from './GameBoard'
import * as config from './config'
import { DownloadPanel } from './DownloadPanel'
import { useState } from 'react'

export const dragColor = signal<string>(config.colors[1])

const DraggyGamey: React.FC = () => {
    effect(()=>{})
    const [width, setWidth] = useState<number>(config.width)
    const [numColors, setNumColors] = useState<number>(config.numColors)

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
                        <>
                            <Form>
                                <Form.Group>
                                    <Form.Label>size of square grid</Form.Label>
                                    <Form.Control
                                        type="number"
                                        onChange={(e)=>{
                                            const _width = parseInt(e.target.value, 10)
                                            if(_width >= 4 && _width <= 44){
                                                setWidth(_width)
                                            }
                                        }}
                                        value={width}
                                    />
                                    <Form.Text muted>
                                        Width of the square? from 1 to {44}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>number of colors</Form.Label>
                                    <Form.Control
                                        type="number"
                                        onChange={(e)=>{
                                            const _numColors = parseInt(e.target.value, 10)
                                            if(_numColors >= 1 && _numColors <= config.tileColorList.length){
                                                setNumColors(_numColors)
                                            }
                                        }}
                                        value={numColors}
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        How many colors? from 1 to {config.tileColorList.length}
                                    </Form.Text>

                                </Form.Group>
                            </Form>
                        </>
                        <Legend numColors={numColors}/>
                        <GameBoard id="game-board" width={width} />
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

