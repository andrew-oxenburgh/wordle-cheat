/**
 * Doing this in js to get around typing issue
 */

export const isDevMode = () => {
    return import.meta.env.MODE === 'development';
}

export default {}