import { OgObject } from "open-graph-scraper/dist/lib/types"

type Image = Partial<{
    height: string | number
    type: string
    url: string
    width: string | number
}>

export type NormalisedType = {
    title: string
    siteName: string
    type: string
    url: string
    description: string
    image: Image | null | undefined
    favicon: string
    success: boolean
}

export const normalise = (og: OgObject, url: string): NormalisedType => {
    let favicon = ''

    try {
        favicon = og.favicon ? new URL(og.favicon, og.ogUrl || og.requestUrl || url).toString() : ''
    } catch (error) {
        // 
    }

    const ret = {
        title: og.ogTitle || og.twitterTitle || '',
        type: og.ogType || 'website',
        url: og.ogUrl || og.twitterUrl || url,
        description: og.ogDescription || og.twitterDescription || '',
        image: og.ogImage?.[0] || og.twitterImage?.[0] || null,
        favicon,
        success: true,
        siteName: og.ogSiteName || og.twitterSite || ''
    }
    return ret
}

export const ogTypeIcons: {
    [key: string]: string
} = {
    'article': 'fa-newspaper-o',
    "website": "fa-globe",
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
