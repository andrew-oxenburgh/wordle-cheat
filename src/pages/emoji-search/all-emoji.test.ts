import { it, expect, describe } from 'vitest'
import inputData from './all-emoji.json'

const data: EmojiType[] = inputData

import { EmpojiMap, TagsMap, calcMapTags, toMap, removeMetaData, calcTagsForObject, EmojiType } from './all-emoji'
import * as R from 'ramda'

const _exampleOne = {
    slug: 'e0-6-grinning-face-with-big-eyes',
    character: '\ud83d\ude03',
    unicodeName: 'E0.6 grinning face with big eyes',
    codePoint: '1F603',
    group: 'group',
    subGroup: 'subgroup',
}

const _exampleTwo = {
    slug: 'e0-6-face-with-tears-of-joy',
    character: '\ud83d\ude02',
    unicodeName: 'E0.6 face with tears of joy',
    codePoint: '1F602',
    group: 'group',
    subGroup: 'subgroup',
}

const _exampleArray = [
    { ..._exampleOne },
]

const _exampleMap: EmpojiMap = {
    'grinning-face-with-big-eyes': {
        ..._exampleOne,
        tags: ['grinning', 'face', 'big', 'eyes', 'subgroup', 'group'].sort(),
        name: 'grinning-face-with-big-eyes',
    },
}

describe('all-emoji', () => {
    describe('find tags and their owners in a map', () => {
        it('empty array to empty map', () => {
            const ret: TagsMap = calcMapTags({})
            expect(ret).toEqual({})
            expect(Object.keys(ret)).toEqual([])
        })
        it('single array', () => {
            const expected = {
                big: ['grinning-face-with-big-eyes'],
                eyes: ['grinning-face-with-big-eyes'],
                face: ['grinning-face-with-big-eyes'],
                grinning: ['grinning-face-with-big-eyes'],
                group: ['grinning-face-with-big-eyes'],
                subgroup: ['grinning-face-with-big-eyes'],
            }
            const map = _exampleMap
            const ret = calcMapTags(map)
            expect(ret).toEqual(expected)
        })
        it('multiple array', () => {
            const expected = {
                big: ['grinning-face-with-big-eyes'],
                eyes: ['grinning-face-with-big-eyes'],
                face: [
                    'face-with-tears-of-joy',
                    'grinning-face-with-big-eyes',
                ],
                group: [
                    'face-with-tears-of-joy',
                    'grinning-face-with-big-eyes',
                ],
                grinning: ['grinning-face-with-big-eyes'],
                joy: ['face-with-tears-of-joy'],
                subgroup: [
                    'face-with-tears-of-joy',
                    'grinning-face-with-big-eyes',
                ],
                tears: ['face-with-tears-of-joy'],
            }
            const array = [
                { ..._exampleOne },
                { ..._exampleTwo },
            ]
            const map = toMap(array)
            const ret = calcMapTags(map)
            expect(ret).toEqual(expected)
        })
    })
    describe('removeMetaData', () => {
        it('one', () => {
            const inp = {
                ..._exampleOne,
                slug: 'a-g-expected',
            }
            expect(removeMetaData(inp)).toBe('expected')
        })
        it('many', () => {
            const inp = {
                ..._exampleOne,
                slug: 'a-g-expected-one',
            }
            expect(removeMetaData(inp)).toBe('expected-one')
        })
        it('fail gracefully', () => {
            const inp: EmojiType = {
                ..._exampleOne,
                slug: '',
            }
            expect(removeMetaData(inp)).toBe('')
        })
    })
    describe('calcTags for an Emoji', () => {
        it('one', () => {
            const inp = {
                ..._exampleOne,
                slug: 'a-g-expected',
            }
            expect(calcTagsForObject(inp)).toStrictEqual(['expected', 'group', 'subgroup',
            ].sort())
        })

        it('many', () => {
            const inp = {
                ..._exampleOne,
                slug: 'a-g-expected-one',
            }
            const actual = calcTagsForObject(inp)
            expect(actual).toStrictEqual([
                'expected',
                'group',
                'one',
                'subgroup',
            ].sort())
        })
        it('ignore ignored', () => {
            const inp = {
                ..._exampleOne,
                slug: 'a-g-to-with-expected-one',
            }
            expect(calcTagsForObject(inp)).toStrictEqual(['expected', 'one'
                , 'group', 'subgroup',
            ].sort())
        })
        it('fail gracefully', () => {
            const inp = {
                ..._exampleOne,
                slug: 'a',
            }
            expect(calcTagsForObject(inp)).toStrictEqual([
                'group', 'subgroup',
            ])
        })
    })
    describe('checking data', () => {
        it('should have the right number of emojis', () => {
            expect(data.length).toEqual(1859)
        })
    })
    describe('make an object', () => {
        it('tx array into map', () => {
            const inp = _exampleArray
            const ret = toMap(inp)
            expect(ret).toEqual(_exampleMap)
        })
    })
})

describe('generate enriched data', () => {
    it('map of data', async () => {
        const map = toMap(data)
        const tagAndEmoji: TagsMap = calcMapTags(map)
        const tags = R.uniq(R.keys(tagAndEmoji)).sort()


        type ArrayOfPairsOfStrings = [string, string]
        const tagFreqCount: ArrayOfPairsOfStrings = R.reduce((acc: ArrayOfPairsOfStrings, tag: string) => {
            const cnt = tagAndEmoji[tag][1]
            if (tagAndEmoji[cnt]) {
                tagAndEmoji[cnt].push(tag)
            } else {
                tagAndEmoji[cnt] = [tag]

            }
            return acc
        }, [], R.keys(tagAndEmoji))

        // let tagFreqTable = R.reduce((acc, _val) => {

        //     return acc
        // }, [], tagFreqCount)

        // await expect(map).toMatchFileSnapshot('./derived/emojisMap.json')
        // await expect(tagAndEmoji).toMatchFileSnapshot('./derived/tagAndEmoji.json')
        // await expect(tags).toMatchFileSnapshot('./derived/tags.json')
        // await expect(heatMap).toMatchFileSnapshot('./derived/heatMap.json')
    })
})


export default {}
