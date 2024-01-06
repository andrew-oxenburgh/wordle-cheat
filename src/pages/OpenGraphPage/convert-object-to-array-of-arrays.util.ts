/* eslint @typescript-eslint/no-unsafe-argument: "off" */

import * as R from 'ramda'

export type OutputType = [string, string][]

export const convertOgObjectToOgArray = (inp: any, prefix = ''): OutputType => {
    return R.reduce((acc: OutputType, key: string) => {
        const val = inp[key]
        const newKey: string = key.split(/(?=[A-Z])/).join(':').toLowerCase()
        if (['requestUrl', 'success', 'charset', 'favicon'].indexOf(key) !== -1) {
            return acc
        }
        if (['string', 'number'].indexOf(typeof val) >= 0) {
            acc.push([(prefix + newKey).toString(), val.toString() as string])
        } else if (Array.isArray(val)) {
            // val is array of objects

            const sub = R.map((img: any) => {
                return [...convertOgObjectToOgArray(img, prefix + newKey + ':')]
            }, val)

            acc.push(...sub[0])
        }
        return acc
    }, [] as OutputType, R.keys(inp))
}

export default {}
