import * as R from 'ramda'
import Stack from 'react-bootstrap/esm/Stack'
import { dragColor } from './DraggeyGamey'
import { colors } from './config'

export const Legend = () => {
    return <Stack direction="horizontal" gap={3}>
        {R.map((color: string) => {
            const isSelected = color === dragColor.value
            return (
                <div key={color}
                    style={{
                        backgroundColor: color,
                        width: '2em',
                        height: '2em',
                        border: isSelected ? '4px solid black' : '4px solid transparent',
                        borderRadius: '50%',
                    }}
                    onClick={() => dragColor.value = color}
                >
                    {color}
                </div>
            )
        }, colors)}
        {dragColor.value}
    </Stack>
}
