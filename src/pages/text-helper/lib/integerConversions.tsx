import { ConversionType } from './textHelper.types'
import toInteger from 'lodash/toInteger'

const toDateTime = (s: string): string => {
    try {
        return new Date(toInteger(s)).toISOString()
    } catch (e) {
        return 'invalid date ' + s
    }
}

export const integerConversions = (s: string): ConversionType[] => {
    const ret = []

    ret.push({
        name: 'locale',
        value: toInteger(s).toLocaleString(),
    })
    ret.push({
        name: 'date',
        value: toDateTime(s),
    })
    return ret
}

