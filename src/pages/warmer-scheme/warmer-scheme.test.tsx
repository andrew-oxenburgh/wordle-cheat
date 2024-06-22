import { itemById, itemsByType, allItemIds, allItemNames } from './warmer-schema.utils'
import { it, expect, describe } from 'vitest'

describe('items', () => {
    describe('itemById', () => {
        it('returns the correct item when given a valid id', () => {
            const item = itemById('butter-chicken')
            expect(item).toEqual({
                id: 'butter-chicken',
                name: 'butter chicken',
                desc: 'covered in paprika',
                alts: [],
                type: 'gourmet-pie',
            })
        })
        it('returns the default item when given an invalid id', () => {
            const item = itemById('invalid-id')
            expect(item).toEqual({ id: 'none', name: 'none', desc: 'none' })
        })
    })

    describe('itemsByType', () => {
        it('returns all gourmet pies', () => {
            const items = itemsByType('gourmet-pie')
            expect(items).toEqual([
                'angus-cheese-mustard',
                'butter-chicken',
            ])
        })
        it('returns all classic pies', () => {
            const items = itemsByType('classic-pie').sort()
            const expected = [
                'mince-cheese',
                'steak-cheese',
                'steak-bacon-cheese',
                'mince',
            ].sort()
            expect(items).toEqual(expected)
        })
    })
    describe('allItems', () => {
        it('returns all item names', () => {
            const items = allItemNames().sort()
            expect(items).toEqual([
                'butter chicken',
                'chicken cordon bleu',
                'jalapeno bites',
                'lasagne toppa',
                'louisiana bites',
                'mac and cheese',
                'mince',
                'mince & cheese',
                'southern toppa',
                'spinach feta roll',
                'steak & cheese',
                'steak, bacon & cheese',
                'vegan chorizo sausage roll',
                'vegan sausage roll',
            ].sort())
        })
        it('returns all item ids', () => {
            const items = allItemIds().sort()
            expect(items).toEqual([
                'butter-chicken',
                'chicken-cordon-bleu',
                'jalapeno-bites',
                'lasagne-toppa',
                'louisiana-bites',
                'mac-and-cheese',
                'mince',
                'mince-cheese',
                'southern-toppa',
                'spinach-feta-roll',
                'steak-bacon-cheese',
                'steak-cheese',
                'vegan-chorizo-roll',
                'vegan-sausage-roll',
            ].sort())
        })
    })
})
