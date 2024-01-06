import { OgObject } from 'open-graph-scraper/dist/lib/types';
import * as R from 'ramda'


type OutputType = [string, string][];


const convert = (inp: any, prefix = ''): OutputType => {
    return R.reduce((acc: OutputType, key: string) => {
        const val = inp[key] as any
        const newKey = key.split(/(?=[A-Z])/).join(':').toLowerCase()
        if (['requestUrl', 'success', 'charset'].indexOf(key) !== -1) {
            return acc
        }
        if (['string', 'number'].indexOf(typeof val) >= 0) {
            acc.push([prefix + newKey, val.toString()])
        } else if (Array.isArray(val)) {
            // val is array of objects

            const sub = R.map((img: any) => {
                return convert(img, prefix + newKey + ':')
            }, val)




            // console.log('val', val)
            // const subArray = R.toPairs(val)
            // console.log('subArray', subArray)
            // const sub = convert(subArray, newKey + ':')
            acc.push(...sub)
        }
        return acc
    }, [] as OutputType, R.keys(inp))
    // return [["ogTitle", "Open Graph protocol"]]
}

test('convert images', () => {
    const input: OgObject = {
        'ogImage': [{
            'width': 300,
            'url': "https://example.com/image.png"
        }]
    }
    const expectedOutput: OutputType = [
        ["og:image:width", "300"],
        ["og:image:url", "https://example.com/image.png"],
    ]
    expect(convert(input)).toStrictEqual(expectedOutput);
});


test('convert single value back to OG format', () => {
    expect(convert({
        "ogTitle": "Open Graph protocol"
    })).toStrictEqual([["og:title", "Open Graph protocol"]]);
});

test('convert 2 values back to OG format', () => {
    expect(convert({
        "ogTitle": "Open Graph protocol",
        "ogDesc": "desc"
    })).toStrictEqual([
        ["og:title", "Open Graph protocol"],
        ["og:desc", "desc"]
    ]);
});

test('convert multiple value back to OG format', () => {
    const input: OgObject = {
        "ogTitle": "Open Graph protocol",
        "ogType": "website",
        "ogUrl": "https://ogp.me/",
        "ogDescription": "The Open Graph protocol enables any web page to become a rich object in a social graph.",
        "charset": "utf-8",
        "requestUrl": "http://ogp.me/",
        "success": true
    }
    const expectedOutput: OutputType = [
        ["og:title", "Open Graph protocol"],
        ["og:type", "website"],
        ["og:url", "https://ogp.me/"],
        ["og:description", "The Open Graph protocol enables any web page to become a rich object in a social graph."],
    ]
    expect(convert(input)).toStrictEqual(expectedOutput);
})

export default {}