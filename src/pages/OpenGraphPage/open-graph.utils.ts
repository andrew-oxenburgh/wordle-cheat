import { OgObject } from 'open-graph-scraper/dist/lib/types'
import { NormalisedType } from './open-graph.types'

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

export default {}
