import { MusicSongObject } from 'open-graph-scraper/dist/lib/types'

type Image = Partial<{
    height: string | number
    type: string
    url: string
    width: string | number
}>

export type TwoStringColumns = [string, string][]

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
