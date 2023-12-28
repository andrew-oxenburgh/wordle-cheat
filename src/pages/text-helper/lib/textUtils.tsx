import { textConversions } from './textConversions'
import { integerConversions } from './integerConversions'
import { StringInspectionType, InterpretationType } from './textHelper.types'

function notNumber(s: string): boolean {
    return isNaN(parseInt(s.trim(), 10))
}

function isInteger(s: string): boolean {
    return !isNaN(parseInt(s.trim(), 10))
}

export const isLatLong = (s: string): boolean => {
    const latLongRegex = /\b([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?))\s*([nNsS])\b\s+([-+]?([1-9]?\d(\.\d+)?|1[0-7]\d(\.\d+)?|180(\.0+)?))\s*([eEwW])\b/g
    return !!s.match(latLongRegex)
}

export const getLatLong = (s: string) => {
    const latLongRegex = /\b([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?))\s*([nNsS])\b\s+([-+]?([1-9]?\d(\.\d+)?|1[0-7]\d(\.\d+)?|180(\.0+)?))\s*([eEwW])\b/g
    return s.match(latLongRegex)
}

export function stringConversion(s: string): StringInspectionType {
    const ret: StringInspectionType = {
        input: s,
        kinds: [],
    }
    if (s.trim().length === 0) {
        return ret
    }

    const kinds: InterpretationType[] = []

    if (notNumber(s)) {
        kinds.push({
            kind: 'text',
            conversions: textConversions(s.trim()),
        })
    }

    if (isInteger(s)) {
        kinds.push({
            kind: 'integer',
            conversions: integerConversions(s.trim()),
        })
    }
    // if (isLatLong(s)) {
    //    kinds.push({
    //       kind: 'geo',
    //       conversions: latLongConversions(s.trim())
    //    })
    // }

    ret.kinds = kinds
    return ret

}

export { }
