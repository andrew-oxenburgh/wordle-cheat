/* eslint-disable */
import { it, expect, describe } from 'vitest'
import inputData from './all-emoji.json'

const data: EmojiType[] = inputData

import { EmpojiMap, TagsMap, calcMapTags, toMap, removeMetaData, calcTagsForObject, EmojiType } from './all-emoji'
import * as R from 'ramda'

const example = [
    {
        'slug': 'e1-0-grinning-face',
        'character': '\ud83d\ude00',
        'unicodeName': 'E1.0 grinning face',
        'codePoint': '1F600',
        'group': 'smileys-emotion',
        'subGroup': 'face-smiling',
    },
    {
        'slug': 'e0-6-grinning-face-with-big-eyes',
        'character': '\ud83d\ude03',
        'unicodeName': 'E0.6 grinning face with big eyes',
        'codePoint': '1F603',
        'group': 'smileys-emotion',
        'subGroup': 'face-smiling',
    },
    {
        'slug': 'e0-6-grinning-face-with-smiling-eyes',
        'character': '\ud83d\ude04',
        'unicodeName': 'E0.6 grinning face with smiling eyes',
        'codePoint': '1F604',
        'group': 'smileys-emotion',
        'subGroup': 'face-smiling',
    },
    {
        'slug': 'e0-6-skull',
        'character': '\ud83d\udc80',
        'unicodeName': 'E0.6 skull',
        'codePoint': '1F480',
        'group': 'smileys-emotion',
        'subGroup': 'face-negative',
    },
    {
        'slug': 'e1-0-skull-and-crossbones',
        'character': '\u2620\ufe0f',
        'unicodeName': 'E1.0 skull and crossbones',
        'codePoint': '2620 FE0F',
        'group': 'smileys-emotion',
        'subGroup': 'face-negative',
    },
    {
        'slug': 'e15-0-leftwards-pushing-hand',
        'character': '\ud83e\udef7',
        'unicodeName': 'E15.0 leftwards pushing hand',
        'codePoint': '1FAF7',
        'group': 'people-body',
        'subGroup': 'hand-fingers-open',
    },
]

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
