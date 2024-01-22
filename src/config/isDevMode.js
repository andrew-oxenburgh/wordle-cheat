/**
 * Doing this in js to get around typing issue
 */

import { logger } from './logger'

export const isProdMode = () => {
    return import.meta.env.MODE === 'production'
}


export const isDevMode = () => {
    return import.meta.env.MODE === 'development'
}

// in a JS file to get around a TS error
export const getMetaValue = (name) => {
    return import.meta.env[name]
}

export const showEnv = () => {
    logger('import.meta.env', import.meta.env)
    logger('import.meta', import.meta)
}


export default {}
