import { getFunctions, httpsCallable } from 'firebase/functions'
import { MusicSongObject, OgObject } from 'open-graph-scraper/dist/lib/types'
import app from '../../config/firebase'

type Image = Partial<{
    height: string | number
    type: string
    url: string
    width: string | number
}>

export type ArticleGraphType = {
    author?: string
    expirationTime?: string
    modifiedTime?: string
    publishedTime?: string
    publisher?: string
    section?: string
    tag?: string
}

export const ArticleGraphFields: string[] = [
    'author',
    'expirationTime',
    'modifiedTime',
    'publishedTime',
    'publisher',
    'section',
]

export type MusicGraphType = {
    album?: string
    albumDisc?: string
    albumTrack?: string
    albumUrl?: string
    creator?: string
    duration?: string
    musician?: string
    releaseDate?: string
    song?: MusicSongObject[] | null
    audio?: string

    /* These objects are ommitted */
    // songDisc?: string | string[] | null[];
    // songProperty?: string | string[] | null[];
    // songTrack?: number | string[] | null[];
    // songUrl?: string | string[] | null[];
}

export const MusicGraphFields: string[] = [
    'album',
    'albumDisc',
    'albumTrack',
    'albumUrl',
    'creator',
    'duration',
    'musician',
    'releaseDate',
    'song',
    'audio',
    // 'songDisc',
    // 'songProperty',
    // 'songTrack',
    // 'songUrl'
]

export type NormalisedType = {
    title: string
    siteName: string
    type: string
    url: string
    description: string
    image: Image | null | undefined
    favicon: string
    success: boolean
    article?: ArticleGraphType | null
    music?: MusicGraphType | null
}

export const normalise = (og: OgObject, url: string): NormalisedType => {
    let favicon = ''

    try {
        favicon = og.favicon ? new URL(og.favicon, og.ogUrl || og.requestUrl || url).toString() : ''
    } catch (error) {
        //
    }

    const ret: NormalisedType = {
        title: og.ogTitle || og.twitterTitle || '',
        type: og.ogType || 'website',
        url: og.ogUrl || og.twitterUrl || url,
        description: og.ogDescription || og.twitterDescription || '',
        image: og.ogImage?.[0] || og.twitterImage?.[0] || null,
        favicon,
        success: true,
        siteName: og.ogSiteName || og.twitterSite || '',
    }

    if (og?.ogType === 'article') {
        ret.article = {
            expirationTime: og.articleExpirationTime || '',
            modifiedTime: og.articleModifiedTime || '',
            publishedTime: og.articlePublishedTime || '',
            publisher: og.articlePublisher || '',
            section: og.articleSection || '',
            tag: og.articleTag || '',
            author: og.author || og.articleAuthor || '',
        }
    }

    if (og?.ogType?.startsWith('music')) {
        ret.music = {
            album: og.musicAlbum || '',
            albumDisc: og.musicAlbumDisc || '',
            albumTrack: og.musicAlbumTrack || '',
            albumUrl: og.musicAlbumUrl || '',
            creator: og.musicCreator || '',
            duration: og.musicDuration || '',
            musician: og.musicMusician || '',
            releaseDate: og.musicReleaseDate || '',
            song: og.musicSong || null,
            audio: og.ogAudio || '',
            // songDisc: og.musicSongDisc || null,
            // songProperty: og.musicSongProperty || '',
            // songTrack: og.musicSongTrack || null,
            // songUrl: og.musicSongUrl || null,
        }
    }


    return ret
}

export const ogTypeIcons: {
    [key: string]: string
} = {
    'article': 'fa-newspaper-o',
    'website': 'fa-globe',
    'music': 'fa-music',
    'video': 'fa-video-camera',
    'image': 'fa-image',
    'profile': 'fa-user',
    'author': 'fa-user',
    'articleTag': 'fa-tags',
    'articleAuthor': 'fa-user',
    'articlePublisher': 'fa-building',
}

export const icon = (t: string): string => {
    return ogTypeIcons[t] || ''
}

export const presets: string[] = [
    'cnn.com',
    'cnn.it',
    'https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY',
    'https://react-bootstrap.netlify.app/docs/components/dropdowns/',
    'https://edition.cnn.com/2023/12/31/asia/india-pakistan-bangladesh-srilanka-elections-2024-intl-hnk/index.html',
]

export const getOgGraph = async (url: string): Promise<OgObject> => {
    const functions = getFunctions(app)
    const httpCaller = httpsCallable(functions, 'ogGraph')

    const result = await httpCaller({ url }) as {
        data: {
            graph: OgObject
        }
    }
    const json = result?.data.graph || { success: false } as OgObject
    return json
}

