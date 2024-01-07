import { getFunctions, httpsCallable } from 'firebase/functions'

import { OgObject } from 'open-graph-scraper/dist/lib/types'

import app from '../../config/firebase'

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
