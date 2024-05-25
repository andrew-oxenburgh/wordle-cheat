import * as R from 'ramda'
import { ItemProps } from './item-props'
import { items } from './items.config'

export const itemById = (id: string): ItemProps => {
    return R.find(R.propEq(id, 'id'))(items) || {
        id: 'none',
        name: 'none',
        desc: 'none',
        alts: [''],
    }
}
