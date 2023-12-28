import camelCase from 'lodash/camelCase'
import capitalize from 'lodash/capitalize'
import kebabCase from 'lodash/kebabCase'
import escape from 'lodash/escape'

import { ConversionType } from './textHelper.types'

export function textConversions(s: string): ConversionType[] {
    const ret = []

    ret.push({
        name: 'upperCase',
        value: s.toUpperCase(),
    })
    ret.push({
        name: 'lowerCase',
        value: s.toLowerCase(),
    })
    ret.push({
        name: 'kebabCase',
        value: kebabCase(s),
    })
    ret.push({
        name: 'camelCase',
        value: camelCase(s),
    })
    ret.push({
        name: 'capitalize',
        value: capitalize(s),
    })
    ret.push({
        name: 'escape',
        value: escape(s),
    })
    return ret
}
