import { useState } from 'react'

const PlanetItem = ({ item, itemSelected, dragHandleProps }: { item: any; itemSelected?: any; dragHandleProps?: any }) => {
    // console.log(item)
    const [value, setValue] = useState(0)
    const _inc = () => {
        setValue(value + 1)
    }

    const scale = itemSelected * 0.05 + 1
    const shadow = itemSelected * 15 + 1

    return (
        <div
            className="dragHandle"
            {...dragHandleProps}
            style={{
                transform: `scale(${scale})`,
                boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2 * shadow}px 0px`,
            }}
        >
            <h2>{item.name}</h2>
            {item.subtitle && (
                <div className="subtitle">
                    This item has a subtitle visible while dragging
                </div>
            )}
            <div>
                <input type="button" value={value} onClick={() => _inc()} />
            </div>
        </div>
    )
}

export default PlanetItem
