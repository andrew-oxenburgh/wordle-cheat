import * as R from 'ramda'
import { ItemProps, ItemType } from './item-props'
import { items, bakes } from './items.config'

export const itemById = (id: string): ItemProps => {
    return (R.find(R.propEq(id, 'id'))(items) || {
        id: 'none',
        name: 'none',
        desc: 'none',
        defaultLevel: 0,
        alts: [],
        type: 'none',
    }) as ItemProps
}

export const itemsByType = (arg0: ItemType): string[] => {
    return R.pluck('id', R.filter(R.propEq(arg0, 'type'))(items)) as string[]
}

export const allItemIds = (): string[] => {
    return R.pluck('id', items) as string[]
}

export const allItemNames = (): string[] => {
    return R.pluck('name', items) as string[]
}

export const listOfBakes = (): string[] => {
    return R.keys(bakes) as string[]
}

export const expectedLevelByBakeAndItemId = (bake: string, itemId: string): number => {
    return bakes[bake]?.items[itemId]
}
