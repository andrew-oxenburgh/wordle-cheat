import { Signal, useSignalEffect } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
import Dropdown from 'react-bootstrap/Dropdown'
import { listOfBakes } from './warmer-schema.utils'

const BakesDropdown = ({ selectedBake }: { selectedBake: Signal<string> }) => {
    useSignals()
    useSignalEffect(() => { })
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedBake.value}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {listOfBakes().map((bake) => (
                    <Dropdown.Item key={bake} onClick={() => { selectedBake.value = bake }}>
                        {bake}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown >
    )
}

export default BakesDropdown
