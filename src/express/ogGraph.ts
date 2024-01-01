import ogs from 'open-graph-scraper'
import { OgObject } from 'open-graph-scraper/dist/lib/types'

type Og = Partial<{
    ogTitle: string
    ogType: string
    ogUrl: string
    ogDescription: string
    ogImage: Image[]
    charset: string
    requestUrl: string
    success: boolean
}>

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

export type FailType = {
    success: false
}

const normalise = (og: OgObject): NormalisedType => {
    return {
        title: og.ogTitle || og.twitterTitle || '',
        type: og.ogType || '',
        url: og.ogUrl || og.twitterUrl || '',
        description: og.ogDescription || og.twitterDescription || '',
        image: og.ogImage?.[0] || og.twitterImage?.[0] || null,
        favicon: og.favicon || '',
        success: true,
        siteName: og.ogSiteName || og.twitterSite || ''
    }
}

export default {
    graph: async (url: string): Promise<NormalisedType | FailType> => {
        try {
            const options = {
                url,
            };
            const res = await ogs(options);
            if (res.error) {
                return {
                    success: false,
                }
            }
            return normalise(res.result)

        } catch (e) {
            return {
                success: false
            }
        }
    },

}