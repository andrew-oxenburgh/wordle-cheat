import * as R from 'ramda'
import Stack from 'react-bootstrap/Stack'
import { dragColor } from '.'
import { colors, getTextColor } from './config'
import Button from 'react-bootstrap/Button'
import { effect } from '@preact/signals-react'

export const Legend = () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    effect(() => { })
    return <Stack direction="horizontal" gap={3}>
        {R.map((color: string) => {
            const isSelected = color === dragColor.value
            return (
                <Button key={color}
                    style={{
                        backgroundColor: color,
                        color: getTextColor(color),
                        //     width: '5em',
                        //     height: '2em',
                        border: isSelected ? '4px solid black' : '4px solid whitesmoke',
                    }}
                    onClick={() => dragColor.value = color}
                >
                    {color}
                </Button>
            )
        }, colors)}
    </Stack>
}
