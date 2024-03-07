/* eslint-disable no-console */

import DraggableList from '#/components/ReactDraggableList'
import PlanetItem from './PlanetItem'
import { PlanetListItem } from './example-types'
import { useState } from 'react'

const Example = () => {
    const [container, setContainer] = useState(false)
    const [list, setList] = useState([
        { name: 'Mercury' },
        { name: 'Venus' },
        { name: 'Earth', subtitle: true },
        { name: 'Mars' },
        { name: 'Jupiter' },
        { name: 'Saturn', subtitle: true },
        { name: 'Uranus', subtitle: true },
        { name: 'Neptune' },
    ]
    )
    const _togglePluto = () => {
        const noPluto = list.filter((item) => item.name !== 'Venus')
        if (noPluto.length !== list.length) {
            setList(noPluto)
        } else {
            setList([{ name: 'Venus' }].concat(list))
        }
    }

    const _toggleContainer = () => {
        setContainer(!container)
    }

    const _onListChange = (newList: readonly PlanetListItem[]) => {
        setList(newList as PlanetListItem[])
    }

    return (
        <div className="main"
            style={{
                overscrollBehavior: 'none',
            }}
        >
            <div className="intro">
                <div>
                    <input
                        type="button"
                        value="Toggle Venus"
                        onClick={() => _togglePluto()} />
                    <input
                        type="button"
                        value="Toggle Container"
                        onClick={() => _toggleContainer()} />
                    <input
                        type="button"
                        value="show list"
                        onClick={() => console.log(list)} />
                </div>
            </div>
            <DraggableList
                itemKey="name"
                template={PlanetItem}
                list={list}
                // onDragStart={() => console.log('drag start')}
                // onDragEnd={() => console.log('drag end')}
                onMoveEnd={(newList) => _onListChange(newList as readonly PlanetListItem[])}
            />
            <footer>Footer here.</footer>
        </div>
    )
}

export default Example
