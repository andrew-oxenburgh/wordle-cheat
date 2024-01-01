import { OgObject } from 'open-graph-scraper/dist/lib/types'

type ExamplesType = {
    [key: string]: {
        url: string
        graph: OgObject
    }
}

const examples: ExamplesType = {
    'cnn-home': {
        url: 'https://edition.cnn.com/',
        graph: {
            'ogTitle': 'Breaking News, Latest News and Videos | CNN',
            'twitterTitle': 'Breaking News, Latest News and Videos | CNN',
            'twitterDescription': 'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.',
            'ogDescription': 'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.',
            'ogType': 'website',
            'twitterCard': 'summary_large_image',
            'ogUrl': 'https://www.cnn.com',
            'articleTag': 'cnn news, daily news, breaking news, news today, current events',
            'author': 'Monica Sarkar',
            'twitterSite': '@cnn',
            'articlePublisher': 'https://www.facebook.com/CNN',
            'ogSiteName': 'CNN',
            'ogImage': [
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/240101124218-israeli-soldiers-gaza-border-122923.jpg?c=16x9&q=h_720,w_1280,c_fill',
                    'type': 'jpg',
                    'width': 3000,
                    'height': 2000,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/231231220458-xi-jinping-122923.jpg?c=16x9&q=h_720,w_1280,c_fill',
                    'type': 'jpg',
                    'width': 3000,
                    'height': 2550,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/cnn-fast-master-1920x1080-a.png?c=16x9&q=w_850,c_fill',
                    'type': 'png',
                    'width': 1920,
                    'height': 1080,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/230921125545-jose-andres-family-in-spain-101-digital-clip-extra.jpg?c=16x9&q=h_438,w_780,c_fill',
                    'type': 'jpg',
                    'width': 1920,
                    'height': 1080,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/231231185008-07-nye-2024-hong-kong.jpg?c=16x9&q=h_438,w_780,c_fill',
                    'type': 'jpg',
                    'width': 3000,
                    'height': 2000,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/231231100041-alexey-navalny-04-26-2023.jpg?c=16x9&q=h_144,w_256,c_fill',
                    'type': 'jpg',
                    'width': 2182,
                    'height': 1464,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/231229150005-jeremy-renner-041123.jpg?c=16x9&q=h_144,w_256,c_fill',
                    'type': 'jpg',
                    'width': 2500,
                    'height': 1406,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1474327882.jpg?c=16x9&q=h_144,w_256,c_fill',
                    'type': 'jpg',
                    'width': 2000,
                    'height': 1721,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/160713170505-07-david-cameron-downing-street-0713.jpg?q=x_55,y_95,h_1060,w_1884,c_crop/h_144,w_256',
                    'type': 'jpg',
                    'width': 2000,
                    'height': 1428,
                },
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/231231053046-trump-campaign-iowa-121923.jpg?c=16x9&q=h_438,w_780,c_fill',
                    'type': 'jpg',
                    'width': 3000,
                    'height': 2000,
                },
            ],
            'ogLocale': 'en',
            'favicon': '/media/sites/cnn/favicon.ico',
            'charset': 'utf-8',
            'requestUrl': 'http://edition.cnn.com/',
            'success': true,
        },
    },
    'caAmJu': {
        url: 'https://www.caamju.org/',
        graph: {
            'ogType': 'website',
            'ogUrl': 'http://www.canamju.org/canamju',
            'ogDescription': 'Welcome to the new Canterbury Amateur Judo Club web site. Find information about becoming a member, training times and competitions.',
            'ogImage': [
                {
                    'url': 'https:',
                },
            ],
            'ogTitle': 'CAN AM JU  - Judo the Martial Art -  The Sport - Judo Self Defence - Home',
            'charset': 'utf-8',
            'requestUrl': 'http://canamju.org',
            'success': true,
        },

    },
    'cnn-story': {
        url: 'https://edition.cnn.com/2023/12/31/asia/india-pakistan-bangladesh-srilanka-elections-2024-intl-hnk/index.html',
        graph: {
            'ogTitle': 'Democracy’s grand test. More than a billion people will head to the polls in South Asia in 2024 | CNN',
            'twitterTitle': 'Democracy’s grand test. More than a billion people will head to the polls in South Asia in 2024 | CNN',
            'twitterDescription': 'An election boycotted by the main opposition as the world’s longest serving female prime minister looks set to extend her rule.',
            'ogDescription': 'An election boycotted by the main opposition as the world’s longest serving female prime minister looks set to extend her rule.',
            'ogType': 'article',
            'twitterCard': 'summary_large_image',
            'ogUrl': 'https://www.cnn.com/2023/12/31/asia/india-pakistan-bangladesh-srilanka-elections-2024-intl-hnk/index.html',
            'articlePublishedTime': '2023-12-30T21:00:26.125Z',
            'articleModifiedTime': '2023-12-30T21:00:26.125Z',
            'author': 'Rhea Mogul',
            'twitterSite': '@CNN',
            'articlePublisher': 'https://www.facebook.com/CNN',
            'ogSiteName': 'CNN',
            'ogImage': [
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/231222123805-bangladesh-election-posters-1220.jpg?c=16x9&q=w_800,c_fill',
                    'type': 'jpg',
                },
            ],
            'twitterImage': [
                {
                    'url': 'https://media.cnn.com/api/v1/images/stellar/prod/231222123805-bangladesh-election-posters-1220.jpg?c=16x9&q=w_800,c_fill',
                },
            ],
            'ogLocale': 'en',
            'favicon': '/media/sites/cnn/favicon.ico',
            'charset': 'utf-8',
            'requestUrl': 'http://edition.cnn.com/2023/12/31/asia/india-pakistan-bangladesh-srilanka-elections-2024-intl-hnk/index.html',
            'success': true,
        },
    },
    'minimal': {
        url: 'refactoring.com/catalog/extractFunction.html',
        graph: {
            ogTitle: 'Extract Function',
            charset: 'uft-8',
            requestUrl: 'http://refactoring.com/catalog/extractFunction.html',
            success: true,
        },
    },
    'spotify': {
        url: 'https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY',
        graph: {
            'ogSiteName': 'Spotify',
            'musicDuration': '163',
            'musicAlbum': ['https://open.spotify.com/album/1xRcR4iSouBrfVhuqFkPAJ'].join(', '),
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
            'musicMusician': ['https://open.spotify.com/artist/2kucQ9jQwuD8jWdtR9Ef38'].join(', '),
            'ogTitle': 'Body Like A Back Road',
            'ogDescription': 'Sam Hunt · Song · 2020',
            'ogUrl': 'https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY',
            'ogType': 'music.song',
            'ogAudio': 'https://p.scdn.co/mp3-preview/06b53d2665f94946d2fc6971aa76a15a390cda0e',
            'ogAudioType': 'audio/mpeg',
            'ogImage': [
                { 'url': 'https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c' },
            ],
            'twitterImage': [
                { 'url': 'https://i.scdn.co/image/ab67616d0000b273b5529363386deb522a4f586c' },
            ],
            'ogLocale': 'en',
            'favicon': 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png',
            'charset': 'utf-8',
            'requestUrl': 'http://open.spotify.com/track/7FpBQ067pHB67deawpbbcY',
            'success': true,
        },
    },
    'youtube': {
        url: 'https://www.youtube.com/watch?v=jpXWl-skfuk',
        graph: {
            ogSiteName: 'YouTube',
            ogUrl: 'https://www.youtube.com/watch?v=jpXWl-skfuk',
            ogTitle: 'Boebert\'s Latest Political Stunt Backfires Spectacularly',
            ogDescription: 'Republican Congressman Lauren Boebert announced she\'ll be switching districts in an attempt to keep a seat in the House of Representatives. Yasmin Khan break...',
            alIosAppStoreId: '544007664',
            alIosAppName: 'YouTube',
            alIosUrl: 'vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks',
            alAndroidUrl: 'vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks',
            alWebUrl: 'http://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks',
            ogType: 'video.other',
            alAndroidAppName: 'YouTube',
            alAndroidPackage: 'com.google.android.youtube',
            twitterCard: 'player',
            twitterSite: '@youtube',
            twitterUrl: 'https://www.youtube.com/watch?v=jpXWl-skfuk',
            twitterTitle: 'Boebert\'s Latest Political Stunt Backfires Spectacularly',
            twitterDescription: 'Republican Congressman Lauren Boebert announced she\'ll be switching districts in an attempt to keep a seat in the House of Representatives. Yasmin Khan break...',
            twitterAppNameiPhone: 'YouTube',
            twitterAppIdiPhone: '544007664',
            twitterAppNameiPad: 'YouTube',
            twitterAppIdiPad: '544007664',
            twitterAppUrliPhone: 'vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks',
            twitterAppUrliPad: 'vnd.youtube://www.youtube.com/watch?v=jpXWl-skfuk&feature=applinks',
            twitterAppNameGooglePlay: 'YouTube',
            twitterAppIdGooglePlay: 'com.google.android.youtube',
            twitterAppUrlGooglePlay: 'https://www.youtube.com/watch?v=jpXWl-skfuk',
            ogImage: [
                {
                    height: 720,
                    url: 'https://i.ytimg.com/vi/jpXWl-skfuk/maxresdefault.jpg',
                    width: 1280,
                    type: 'jpg',
                },
            ],
            ogVideo: [
                {
                    height: 720,
                    type: 'text/html',
                    url: 'https://www.youtube.com/embed/jpXWl-skfuk',
                    width: 1280,
                },
            ],
            twitterImage: [
                {
                    url: 'https://i.ytimg.com/vi/jpXWl-skfuk/maxresdefault.jpg',
                },
            ],
            twitterPlayer: [
                {
                    height: 720,
                    url: 'https://www.youtube.com/embed/jpXWl-skfuk',
                    width: 1280,
                },
            ],
            ogLocale: 'en-GB',
            ogDate: '2023-12-29T12:00:17-08:00',
            favicon: 'https://www.youtube.com/s/desktop/28b0985e/img/favicon.ico',
            charset: 'UTF-8',
            requestUrl: 'http://www.youtube.com/watch?v=jpXWl-skfuk',
            success: true,
        },

    },
}

export default examples
