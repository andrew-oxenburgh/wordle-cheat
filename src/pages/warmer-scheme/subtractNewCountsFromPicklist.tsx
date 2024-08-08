import { BakeItems } from './item.props'
import * as R from 'ramda'

const subtractNewCountsFromPicklist = (picklist: BakeItems, newCounts: BakeItems): BakeItems => {
    // Create a copy of picklist to avoid mutating the original object
    const updatedPicklist: BakeItems = R.clone(picklist)

    R.forEachObjIndexed((value: number, key: string) => {
        // Check if the key exists in the picklist
        if (R.has(key, updatedPicklist)) {
            // Subtract the value from the picklist, ensuring it doesn't go below zero
            updatedPicklist[key] = Math.max(0, updatedPicklist[key] - value)
        }
    }, newCounts)

    return updatedPicklist
}

export default subtractNewCountsFromPicklist

