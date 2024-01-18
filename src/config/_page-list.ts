import * as R from 'ramda'
import startCase from 'lodash/startCase'

export type PageNameType = 'home' | 'welcome' | 'emoji-search'
| 'print-page' | 'wordle-one' | 'wordle-two' | 'text-helper'
| 'netflix-genre' | 'sumner-tides' | 'draggey-gamey' | 'password-generator'
| 'open-graph' | 'imitation-onion' | 'sketch-countdown'

export type PageInfoType = {
    title: string
    link: string
    name: PageNameType
    bg: string
    height: string
    nextPage: string
    prevPage: string
    underConstruction: boolean
    shortDesc: string
    longDesc: string
    icon: string
}

type CreditsType = {
    [key: string]: {
        url: string
        text: string
    }
}

const credits: CreditsType = {
    'open-graph-scraper': {
        url: 'https://github.com/jshemas/openGraphScraper',
        text: 'open-graph-scraper by jshemas',
    },
    'google-cloud-functions': {
        url: 'https://cloud.google.com/functions',
        text: 'Google Cloud Functions by Google',
    },
    'emoji-api': {
        url: 'https://emoji-api.com/',
        text: 'Open Emoji API',
    },
}

const creditLink = (name: string): string => {
    return `[${credits[name].text}](${credits[name].url})`
}

export const _initPageList: Partial<PageInfoType>[] = [
    {
        name: 'welcome',
        title: 'Andrew\'s Sketch\'s',
        longDesc:
            'This is a showcase of some doodles by me.' +
            'Seriously, just sketches, you know, for fun.' +
            'I\'ve written heaps of these things, and it\'s nice to get them all under the one roof',

        link: '#/welcome',
        icon: 'home',
    },
    {
        name: 'open-graph',
        title: 'OpenGraph Viewer',
        height: '80%',
        icon: 'link',
        longDesc: `
### View OpenGraph Card
OpenGraph is a protocol that enables websites to control the presentation of shared content on social media platforms.

I used a scraper package in a cloud function to get the OpenGraph card for a given URL.

Technologies:
 - ${creditLink('open-graph-scraper')} 
 - ${creditLink('google-cloud-functions')} 

       `,
        link: '#/open-graph',
    },
    {
        name: 'emoji-search',
        icon: 'icons',
        longDesc:
            `
### Emoji Search

Just a fun little thing

Very brutal look up. The functionality is in the [Emoji API](https://emoji-api.com/).
            
I\'m using an API, but it\'s just a single call. Nothing complicated

Technologies:
 - ${creditLink('emoji-api')}

`,
        link: '#/emoji-search',
    },
    {
        name: 'print-page',
        icon: 'print',
        longDesc: `
## Print Page\n

Sometimes you just want to print off some text, a list or something. 

With *this* Sketch you can paste the text in and do some light 
formatting using the editor, and then print it out.
        `,
        link: '#/print-page',
    },
    {
        name: 'wordle-one',
        icon: 'puzzle-piece',
        longDesc:
            'My first attempt at a Wordle Cheat' +
            '\nIt works, but it\'s a bit dodgy',
    },
    {
        name: 'wordle-two',
        longDesc: 'My second attempt at a Wordle Cheat.\nStill very much a work in progress',
        icon: 'puzzle-piece',
        underConstruction: true,
    },
    {
        name: 'text-helper',
        icon: 'pencil',
        longDesc: 'Paste in some text and it\'ll make suggestions about what to do with it.',
    },
    {
        name: 'password-generator',
        icon: 'key',
        longDesc: 'Generate a "good" password.',
    },
    {
        name: 'netflix-genre',
        icon: 'film',
        longDesc:
            'Netflix provides a bunch of codes that aren\'t in their app.' +
            '\nHere they all, with links to Netflix.',
    },
    {
        name: 'sumner-tides',
        icon: 'sun',
        longDesc: 'Still a WIP',
        underConstruction: true,
    },
    {
        name: 'draggey-gamey',
        icon: 'gamepad',
        longDesc: [
            'Play with this. It doesn\'t quite work on mobile',
            'click on squares to change their colours. Drag a ' +
            'square to change the squares over which you have dragged that colour',
        ].join('\n'),
    },
    {
        name: 'imitation-onion',
        icon: 'explosion',
        longDesc: `
### Recreate a snippet from somewhere on the web.

In this case I chose The Onion.
        `,
    },
    {
        name: 'sketch-countdown',
        icon: 'explosion',
        longDesc: `
### Recreate a snippet from somewhere on the web.

In this case I chose Countdown.
        `,
    },
    // {
    //    name: 'blogs',
    //    link: '/markdown/examplePage',
    // },
]

const fulfilPageDefaults = (page: Partial<PageInfoType>) => {
    const title = startCase(page.name)
    return {
        title,
        longDesc: [
            title,
        ],
        shortDesc: title,
        link: '/#/' + page.name,
        underConstruction: false,
        height: '70%',
        icon: 'key',
        ...page,
    }
}
export const pageConfig: PageInfoType[] = R.map(fulfilPageDefaults, _initPageList)
