import * as R from 'ramda'
import { ItemProps } from './item-props'
import { items, bakes } from './items.config'

export const itemById = (id: string): ItemProps => {
    return R.find(R.propEq(id, 'id'))(items) || {
        id: 'none',
        name: 'none',
        desc: 'none',
        alts: [''],
    }
}

export const listOfBakes = (): string[] => {
    return R.keys(bakes)
}
