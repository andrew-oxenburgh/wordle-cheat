
import * as R from 'ramda'

import { TwoStringColumns } from './open-graph.types'

export const convertOgObjectToOgArray = (inp: any, prefix = ''): TwoStringColumns => {
    return R.reduce((acc: TwoStringColumns, key: string) => {
        const val = inp[key]
        const newKey: string = key.split(/(?=[A-Z])/).join(':').toLowerCase()
        if (['requestUrl', 'success', 'charset', 'favicon'].indexOf(key) !== -1) {
            return acc
        }
        if (['string', 'number'].indexOf(typeof val) >= 0) {
            acc.push([(prefix + newKey).toString(), val.toString() as string])
        } else if (Array.isArray(val)) {
            // val is array of strings
            if (typeof val[0] === 'string') {
                acc.push([newKey, val[0]])
            } else {
                // val is array of objects

                const sub = R.map((img: any) => {
                    return [...convertOgObjectToOgArray(img, prefix + newKey + ':')]
                }, val)

                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                acc.push(...sub[0])
            }
        }
        return acc
    }, [] as TwoStringColumns, R.keys(inp))
}

export default {}
