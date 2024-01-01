import * as _ from 'lodash'
import { ConversionType } from './textHelper.types'

export const textConversions = (s: string): ConversionType[] => {
    const ret = []

    ret.push({
        name: 'upperCase',
        value: _.upperCase(s),
    })
    ret.push({
        name: 'lowerCase',
        value: _.lowerCase(s),
    })
    ret.push({
        name: 'kebabCase',
        value: _.kebabCase(s),
    })
    ret.push({
        name: 'camelCase',
        value: _.camelCase(s),
    })
    ret.push({
        name: 'capitalize',
        value: _.capitalize(s),
    })
    ret.push({
        name: 'escape',
        value: _.escape(s),
    })
    return ret
}
