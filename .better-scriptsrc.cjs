const script = (s) => `npm run scripts run ${s} `

const scripts = (s) => {
    if (typeof s === 'string') {
        return script(s)
    }
    return s.map((t) => script(t)).join(' && ')
}

module.exports = {
    "dev": "vite",
    "storybook": "storybook dev",
    // "storybookDocs": "storybook dev --docs",
    "test": "jest",
    "lint": "eslint -c .eslintrc.cjs --ext .ts,.tsx ./src --fix",
    "upPatch": "npm version patch --force",
    "upMinor": "npm version minor --force",
    "build:client": "vite build",
    "build:storybook": "storybook build --docs -o public/sb",
    "build:clean": "rimraf dist/",
    "build:preview": "vite preview",
}