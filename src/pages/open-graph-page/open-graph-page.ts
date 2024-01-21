import { getFunctions, httpsCallable } from 'firebase/functions'

import { OgObject } from 'open-graph-scraper/dist/lib/types'

import app from '#/config/firebase'
import { loggerError } from '#/config/logger'
import { isDevMode } from '#/config/isDevMode'

export const getOgGraph = async (url: string): Promise<OgObject> => {
    try {
        const functions = getFunctions(app)
        const httpCaller = httpsCallable(functions, 'ogGraph', {
            timeout: 15000,
        })

        const result = await httpCaller({ url }) as {
            data: {
                graph: OgObject
            }
        }
        const json = result?.data.graph || { success: false } as OgObject
        return json
    } catch (error) {
        loggerError(error)
        const msg = isDevMode() ?
            'Error: in Dev mode. are you running the emulator?'
            : 'Error: not in DEV mode. Are your Google Cloud Functions there?'

        loggerError(msg)
        return {
            success: false,
            error: msg,
        }
    }
}
