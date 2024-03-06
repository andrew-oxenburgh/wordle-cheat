/* eslint-disable no-console */

export interface PlanetListItem {
    name: string
    subtitle?: boolean
}

export interface PlanetProps {
    item: PlanetListItem
    itemSelected: number
    dragHandleProps: object
}
export interface PlanetState {
    value: number
}
