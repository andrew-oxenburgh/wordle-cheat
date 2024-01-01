import ogs from 'open-graph-scraper'
import { OgObject } from 'open-graph-scraper/dist/lib/types'

export type FailType = {
    success: false
}

export default {
    graph: async (url: string): Promise<OgObject> => {
        try {
            const options = {
                url,
            }
            const res = await ogs(options)
            if (res.error) {
                return {
                    success: false,
                }
            }
            return res.result

        } catch (e) {
            return {
                success: false,
            }
        }
    },

}
