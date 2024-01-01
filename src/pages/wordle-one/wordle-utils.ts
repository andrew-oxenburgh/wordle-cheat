import * as R from 'ramda'

/* eslint @typescript-eslint/restrict-template-expressions: "off" */
/* eslint @typescript-eslint/no-unsafe-return: "off" */

const getWords = async (): Promise<string[]> => {
    const ret = await import('../../config/five-letter-words')
    return ret.default
}

const LOWERCASE_ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const findWordsWithoutTheseLetters = async (form: WordleForm): Promise<string[]> => {
    let ignoreLetters: string = form.unused
    ignoreLetters = ignoreLetters + R.map((pos: PositionEntity) => {
        return pos.known + pos.unknown
    })(form.position)
    const letters = '[^' + R.uniq(ignoreLetters).join('') + ']'
    const re = new RegExp(`^${R.repeat(letters, 5).join('')}$`)
    const words = await getWords()
    return R.reduce((acc: string[], word: string) => {
        if (re.test(word)) {
            acc.push(word)
        }
        return acc
    })([], words)
}

export const createRegEx = async (form: WordleForm): Promise<string[]> => {
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
    const words = await getWords()

    return R.reduce((acc: string[], word: string) => {
        const lettersInCommon = R.intersection(allRightLetters, word).join('')
        if (re.test(word) && (lettersInCommon.length === allRightLetters.length)) {
            acc.push(word)
        }
        return acc
    })([], words)
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
    unused: [],
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
