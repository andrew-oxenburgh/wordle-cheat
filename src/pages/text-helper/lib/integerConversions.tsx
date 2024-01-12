import { ConversionType } from './textHelper.types'

const toDateTime = (s: string): string => {
    try {
        return new Date(s).toISOString()
    } catch (e) {
        return 'invalid date ' + s
    }
}

export const integerConversions = (s: string): ConversionType[] => {
    const ret = []

    ret.push({
        name: 'locale',
        value: s.toLocaleString(),
    })
    ret.push({
        name: 'date',
        value: toDateTime(s),
    })
    return ret
}

