import { it, expect, describe } from 'vitest'
import subtractNewCountsFromPicklist from './subtractNewCountsFromPicklist'

describe('subtractNewCountsFromPicklist', () => {
    it('should correctly subtract newCounts from picklist', () => {
        const picklist = { apple: 10, banana: 5 }
        const counts = { apple: 3, banana: 1 }
        const expected = { apple: 7, banana: 4 }
        expect(subtractNewCountsFromPicklist(picklist, counts)).toEqual(expected)
    })

    it('should not allow negative values in the picklist', () => {
        const picklist = { apple: 2, banana: 1 }
        const counts = { apple: 3, banana: 2 }
        const expected = { apple: 0, banana: 0 }
        expect(subtractNewCountsFromPicklist(picklist, counts)).toEqual(expected)
    })
    it('should have only from pick list, ignore additional', () => {
        const picklist = { apple: 2}
        const counts = { apple: 3, banana: 2 }
        const expected = { apple: 0}
        expect(subtractNewCountsFromPicklist(picklist, counts)).toEqual(expected)
    })
    it('should have all from pick list, assume 0 counts', () => {
        const picklist = { apple: 2, banana: 1 }
        const counts = { apple: 3 }
        const expected = { apple: 0, banana: 1 }
        expect(subtractNewCountsFromPicklist(picklist, counts)).toEqual(expected)
    })
    it('should have all from pick list, even when empty', () => {
        const picklist = { apple: 2, banana: 1 }
        const counts = {}
        const expected = { apple: 2, banana: 1 }
        expect(subtractNewCountsFromPicklist(picklist, counts)).toEqual(expected)
    })
    it('should have all from pick list, even when null', () => {
        const picklist = { apple: 2, banana: 1 }
        const counts = null
        const expected = { apple: 2, banana: 1 }
        expect(subtractNewCountsFromPicklist(picklist, counts)).toEqual(expected)
    })
    it('should accept empty picklist', () => {
        const picklist = { }
        const counts = { apple: 3 }
        const expected = {  }
        expect(subtractNewCountsFromPicklist(picklist, counts)).toEqual(expected)
    })
})
