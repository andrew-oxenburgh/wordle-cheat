import * as R from 'ramda'
import { ItemProps, ItemType } from './item-props'
import { items, bakes } from './items.config'

export const itemById = (id: string): ItemProps => {
    return R.find(R.propEq(id, 'id'))(items) || {
        id: 'none',
        name: 'none',
        desc: 'none',
        defaultLevel: 0,
    }
}

export const itemsByType = (arg0: ItemType) => {
    return R.pluck('id', R.filter(R.propEq(arg0, 'type'))(items))
}

export const allItemIds = () => {
    return R.pluck('id', items)
}

export const allItemNames = () => {
    return R.pluck('name', items)
}

export const listOfBakes = (): string[] => {
    return R.keys(bakes)
}

export const expectedLevelByBakeAndItemId = (bake: string, itemId: string): number => {
    return bakes[bake]?.items[itemId]
}
