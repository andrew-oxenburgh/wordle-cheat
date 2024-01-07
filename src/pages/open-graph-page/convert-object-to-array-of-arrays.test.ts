import { OgObject } from 'open-graph-scraper/dist/lib/types'

import { convertOgObjectToOgArray } from './convert-object-to-array-of-arrays.util'
import { TwoStringColumns } from './open-graph.types'

test('convert array', () => {
    const input = {
        'musicAlbum': ['https://example.com/image.png'],
    }
    const expectedOutput: TwoStringColumns = [
        ['music:album', 'https://example.com/image.png'],
    ]
    const res = convertOgObjectToOgArray(input)
    expect(res).toStrictEqual(expectedOutput)

})
test('convert images', () => {
    const input: OgObject = {
        'ogImage': [{
            'width': 300,
            'url': 'https://example.com/image.png',
        }],
    }
    const expectedOutput: TwoStringColumns = [
        ['og:image:width', '300'],
        ['og:image:url', 'https://example.com/image.png'],
    ]
    const res = convertOgObjectToOgArray(input)
    expect(res).toStrictEqual(expectedOutput)
})

test('convert single value back to OG format', () => {
    expect(convertOgObjectToOgArray({
        'ogTitle': 'Open Graph protocol',
    })).toStrictEqual([['og:title', 'Open Graph protocol']])
})

test('convert 2 values back to OG format', () => {
    expect(convertOgObjectToOgArray({
        'ogTitle': 'Open Graph protocol',
        'ogDesc': 'desc',
    })).toStrictEqual([
        ['og:title', 'Open Graph protocol'],
        ['og:desc', 'desc'],
    ])
})

test('convert multiple value back to OG format', () => {
    const input: OgObject = {
        'ogTitle': 'Open Graph protocol',
        'ogType': 'website',
        'ogUrl': 'https://ogp.me/',
        'ogDescription': 'The Open Graph protocol enables any web page to become a rich object in a social graph.',
        'charset': 'utf-8',
        'requestUrl': 'http://ogp.me/',
        'success': true,
    }
    const expectedOutput: TwoStringColumns = [
        ['og:title', 'Open Graph protocol'],
        ['og:type', 'website'],
        ['og:url', 'https://ogp.me/'],
        ['og:description', 'The Open Graph protocol enables any web page to become a rich object in a social graph.'],
    ]
    expect(convertOgObjectToOgArray(input)).toStrictEqual(expectedOutput)
})


const spotify = {
    'ogSiteName': 'Spotify',
    'musicDuration': '163',
    'musicAlbum': [
        'https://open.spotify.com/album/1xRcR4iSouBrfVhuqFkPAJ',
    ],
    'musicAlbumTrack': '5',
    'musicReleaseDate': '2020-04-03',
    'alAndroidAppName': 'Spotify',
    'alAndroidPackage': 'com.spotify.music',
    'alAndroidUrl': 'spotify://track/7FpBQ067pHB67deawpbbcY',
    'alIosAppName': 'Spotify',
    'alIosAppStoreId': '324684580',
    'alIosUrl': 'spotify://track/7FpBQ067pHB67deawpbbcY',
    'twitterSite': '@spotify',
    'twitterTitle': 'Body Like A Back Road',
    'twitterDescription': 'Sam Hunt · Song · 2020',
    'twitterCard': 'summary',
    'musicMusician': [
        'https://open.spotify.com/artist/2kucQ9jQwuD8jWdtR9Ef38',
    ],
    'ogTitle': 'Body Like A Back Road',
    'ogDescription': 'Sam Hunt · Song · 2020',
    'ogUrl': 'https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY',
    'ogType': 'music.song',
    'ogAudio': 'https://p.scdn.co/mp3-preview/06b53d2665f94946d2fc6971aa76a15a390cda0e',
    'ogAudioType': 'audio/mpeg',
    'ogImage': [
        {
            'url': 'https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c',
        },
    ],
    'twitterImage': [
        {
            'url': 'https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c',
        },
    ],
    'ogLocale': 'en',
    'favicon': 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png',
    'charset': 'utf-8',
    'requestUrl': 'http://open.spotify.com/track/7FpBQ067pHB67deawpbbcY',
    'success': true,
}

test('convert spotify', () => {
    const expectedOutput: TwoStringColumns = [
        [
            'og:site:name',
            'Spotify',
        ],
        [
            'music:duration',
            '163',
        ],
        [
            'music:album',
            'https://open.spotify.com/album/1xRcR4iSouBrfVhuqFkPAJ',
        ],
        [
            'music:album:track',
            '5',
        ],
        [
            'music:release:date',
            '2020-04-03',
        ],
        [
            'al:android:app:name',
            'Spotify',
        ],
        [
            'al:android:package',
            'com.spotify.music',
        ],
        [
            'al:android:url',
            'spotify://track/7FpBQ067pHB67deawpbbcY',
        ],
        [
            'al:ios:app:name',
            'Spotify',
        ],
        [
            'al:ios:app:store:id',
            '324684580',
        ],
        [
            'al:ios:url',
            'spotify://track/7FpBQ067pHB67deawpbbcY',
        ],
        [
            'twitter:site',
            '@spotify',
        ],
        [
            'twitter:title',
            'Body Like A Back Road',
        ],
        [
            'twitter:description',
            'Sam Hunt · Song · 2020',
        ],
        [
            'twitter:card',
            'summary',
        ],
        [
            'music:musician',
            'https://open.spotify.com/artist/2kucQ9jQwuD8jWdtR9Ef38',
        ],
        [
            'og:title',
            'Body Like A Back Road',
        ],
        [
            'og:description',
            'Sam Hunt · Song · 2020',
        ],
        [
            'og:url',
            'https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY',
        ],
        [
            'og:type',
            'music.song',
        ],
        [
            'og:audio',
            'https://p.scdn.co/mp3-preview/06b53d2665f94946d2fc6971aa76a15a390cda0e',
        ],
        [
            'og:audio:type',
            'audio/mpeg',
        ],
        [
            'og:image:url',
            'https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c',
        ],
        [
            'twitter:image:url',
            'https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c',
        ],
        [
            'og:locale',
            'en',
        ],
    ]
    const newLocal = convertOgObjectToOgArray(spotify)
    expect(newLocal).toStrictEqual(expectedOutput)
})

export default {}
