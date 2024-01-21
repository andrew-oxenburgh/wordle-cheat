const script = (s) => `npm run scripts run ${s} `

const scripts = (s) => {
    if (typeof s === 'string') {
        return script(s)
    }
    return s.map((t) => script(t)).join(' && ')
}

/**
 * For deploy:
 * jest
 * lint
 * build:clean
 * build:client
 * build:storybook
 * build:preview
 * commit
 * upPatch
 * commit
 * firebase:deploy
 */

module.exports = {
}