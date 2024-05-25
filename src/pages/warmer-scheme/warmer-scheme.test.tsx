import { itemById } from './warmer-schema.utils'
import { it, expect, describe } from 'vitest'

describe('itemById', () => {
    const items = [
        { id: 'butter-chicken', name: 'Butter Chicken', desc: 'Delicious Indian dish' },
        { id: 'mince-cheese', name: 'Mince and Cheese', desc: 'Classic pie filling' },
    ]

    it('returns the correct item when given a valid id', () => {
        const item = itemById('butter-chicken')
        expect(item).toEqual({
            id: 'butter-chicken',
            name: 'butter chicken',
            desc: 'covered in paprika',
            alts: [],
        })
    })

    it('returns the default item when given an invalid id', () => {
        const item = itemById('invalid-id')
        expect(item).toEqual({ id: 'none', name: 'none', desc: 'none' })
    })
})
