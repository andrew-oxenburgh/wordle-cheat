import { ConversionType } from './textHelper.types'

export const urlConversions = (s: string): ConversionType[] => {
    const ret = []
    const url = new URL(s)

    const addPair = (s1: string, s2: string) => {
        if (!s1 || !s2) {
            return ''
        }
        return '|' + s1 + '|' + s2 + '|\n'
    }
    let table = '\n\n| attr| val |\n| ---- | ---- |\n' +
        addPair('protocol', url.protocol) +
        addPair('host', url.hostname) +
        addPair('port', url.port) +
        addPair('pathname', url.pathname) +
        addPair('search', url.search) +
        '\n\n'

    if (url.search) {
        table += '#### search parms\n\n' +
            '| name | val |\n| ---- | ---- |\n'
        const parms = url.searchParams
        for (const [key, value] of parms) {
            table += '|' + key + '|' + value + '|\n'
        }

    }

    ret.push({
        name: 'url',
        value: table,
    })
    return ret
}

// value: `
// protocol: ${url.protocol},

// host: ${url.host},

// port: ${url.port},

// pathname: ${url.pathname},

// search: ${url.search},
//         `

