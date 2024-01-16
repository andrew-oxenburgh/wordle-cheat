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
    "dev": "vite",
    "storybook": "storybook dev",
    // "storybookDocs": "storybook dev --docs",
    "test": "jest",
    "upPatch": "npm version patch --force",
    "upMinor": "npm version minor --force",
    "build:client": "vite build",
    "build:storybook": "storybook build --docs -o dist/sb",
    "build:clean": "rimraf dist/",
    "build:preview": "vite preview",
    "firebase:deploy": "firebase deploy --only hosting "
}