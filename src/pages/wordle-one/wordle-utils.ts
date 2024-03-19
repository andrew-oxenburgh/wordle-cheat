import * as R from 'ramda'
import fiveLetterWords from '#/config/five-letter-words'
/* eslint @typescript-eslint/restrict-template-expressions: "off" */
/* eslint @typescript-eslint/no-unsafe-return: "off" */

const _scrabbleLetterWeighting = {
    a: 9,
    b: 2,
    c: 2,
    d: 4,
    e: 12,
    f: 2,
    g: 3,
    h: 2,
    i: 9,
    j: 1,
    k: 1,
    l: 4,
    m: 2,
    n: 6,
    o: 8,
    p: 2,
    q: 1,
    r: 6,
    s: 4,
    t: 6,
    u: 4,
    v: 2,
    w: 2,
    x: 2,
    y: 2,
    z: 1,
}

const LOWERCASE_ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const findWordsWithoutTheseLetters = (form: WordleForm): Promise<string[]> => {
    let ignoreLetters: string = form.unused
    ignoreLetters = ignoreLetters + R.map((pos: PositionEntity) => {
        return pos.known + pos.unknown
    })(form.position)
    const letters = '[^' + R.uniq(ignoreLetters).join('') + ']'
    const re = new RegExp(`^${R.repeat(letters, 5).join('')}$`)
    return R.reduce((acc: string[], word: string) => {
        if (re.test(word)) {
            acc.push(word)
        }
        return acc
    })([], fiveLetterWords)
}

export const createRegEx = (form: WordleForm): Promise<string[]> => {
    const unused = (fm: WordleForm, off: number) => {
        if (fm.position[off].known) {
            return fm.position[off].known[0]
        }
        let ret = `[^${fm.unused}${fm.position[off].unknown}]`
        if (ret === '[^]') {
            ret = '.'
        }
        return ret
    }
    let allRightLetters = R.flatten(R.reduce((acc: any, pos: any) => {
        acc.push(pos.known)
        acc.push(pos.unknown)
        return acc
    }, [], form.position)).join('')
    allRightLetters = allRightLetters.split('')
    allRightLetters = R.uniq(allRightLetters).join('')
    allRightLetters = R.sort((a: string, b: string) => a.localeCompare(b), allRightLetters)
    allRightLetters = R.join('', allRightLetters)

    const letters = [
        unused(form, 0),
        unused(form, 1),
        unused(form, 2),
        unused(form, 3),
        unused(form, 4),
    ]
    const regexp = `^${letters.join('')}$`

    const re = new RegExp(regexp)

    return R.reduce((acc: string[], word: string) => {
        const lettersInCommon = R.intersection(allRightLetters, word).join('')
        if (re.test(word) && (lettersInCommon.length === allRightLetters.length)) {
            acc.push(word)
        }
        return acc
    })([], fiveLetterWords)
}

export const sanitise = (value: string): string => {
    let v: string[] = value.toLowerCase().split('')
    v = R.uniq(v)
    v = R.without([','], v)
    v = R.intersection(v, LOWERCASE_ALPHA)
    return v.join('')
}

export const retrieveJsonFromStorageWithDefault = (key: string, defaultValue: WordleForm): WordleForm => {
    try {
        const item: (string | null) = window.localStorage.getItem(key)
        if (item) {
            return JSON.parse(item)
        } else {
            return { ...defaultValue }
        }
    } catch (err) {
        return { ...defaultValue }
    }
}

export const putJsonInStorage = (key: string, value: WordleForm): void => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export const WORDLE_CHEAT_FORM = 'WORDLE_CHEAT_FORM'

export interface PositionEntity {
    known: string
    unknown: string
}

export interface WordleForm {
    unused: string
    position: (PositionEntity)[]
}

export const FORM: WordleForm = {
    unused: '',
    position: [
        {
            known: '',
            unknown: '',
        },
        {
            known: '',
            unknown: '',
        },
        {
            known: '',
            unknown: '',
        },
        {
            known: '',
            unknown: '',
        },
        {
            known: '',
            unknown: '',
        },
    ],
}
