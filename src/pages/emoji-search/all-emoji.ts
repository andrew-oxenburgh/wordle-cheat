import * as R from 'ramda'

export type EmojiType = {
    slug: string
    character: string
    unicodeName: string
    codePoint: string
    group: string
    subGroup: string
    tags?: string[]
    name?: string
}
export type EmpojiMap = {
    [key: string]: EmojiType
}
export type TagsMap = {
    [key: string]: string[]
}
export const removeMetaData = (val: EmojiType) => {
    return val.slug.split('-').slice(2).join('-')
}
export const calcTagsForObject = (val: EmojiType): string[] => {
    let ret = [
        ...val.slug.split('-').slice(2),
        ...val.group.split('-'),
        ...val.subGroup.split('-'),
    ]
    ret = R.without(tagsToIgnore, ret)
    ret = R.uniq(ret)
    ret = R.sort((a: string, b: string) => {
        return a.localeCompare(b)
    }, ret)
    return ret
}
export const toMap = (inp: EmojiType[]) => {
    const ret = {} as EmpojiMap
    R.reduce((acc: EmpojiMap, val: EmojiType) => {
        const key = removeMetaData(val)
        val.tags = calcTagsForObject(val)
        val.name = key
        acc[key] = val
        return acc
    }, ret, inp)
    return ret
}
const tagsToIgnore: string[] = [
    'of', 'with', 'to', 'the', 'a',
]

/**
 * @param map: EmpojiMap
 * @returns a sorted list tags with matching sorted emojis
 */
export const calcMapTags = (map: EmpojiMap): TagsMap => {
    let ret = {} as TagsMap
    R.reduce((acc: TagsMap, key: string) => {
        const emo = map[key]
        const name = emo.name
        const tags = emo.tags

        if (!name || !tags) {
            return
        }
        R.forEach((tag: string) => {
            if (tagsToIgnore.indexOf(tag) >= 0) {
                return
            }
            if (acc[tag]) {
                acc[tag].push(name)
            } else {
                acc[tag] = [name]
            }
        }, tags)
        return acc
    }, ret, R.keys(map))

    ret = R.map((tags: string[]) => {
        return tags.sort()
    }, ret)

    return ret
}
