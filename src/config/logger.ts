/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-console */

export const logger = (msg: any, ...optionalParams: any[]) => {
    console.log(msg, ...optionalParams)
}

export const loggerWarn = (msg: any, ...optionalParams: any[]) => {
    console.warn(msg, ...optionalParams)
}

export const loggerError = (msg: any, ...optionalParams: any[]) => {
    console.error(msg, ...optionalParams)
}

