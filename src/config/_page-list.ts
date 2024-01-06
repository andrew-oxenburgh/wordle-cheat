import * as R from 'ramda'
import { startCase } from 'lodash'

export type PageNameType = 'home' | 'welcome' | 'emoji-search'
| 'print-page' | 'wordle-one' | 'wordle-two' | 'text-helper'
| 'netflix-genre' | 'sumner-tides' | 'draggey-gamey' | 'password-generator'
| 'open-graph'

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
}

const creditLink = (name: string): string => {
    return `[${credits[name].text}](${credits[name].url})`
}

export const _initPageList: Partial<PageInfoType>[] = [
    {
        name: 'welcome',
        title: 'Andrew\'s Sketch Pad',
        longDesc:
            'This is a showcase of some doodles by me.' +
            'Seriously, just sketches, you know, for fun.' +
            'I\'ve written heaps of these things, and it\'s nice to get them all under the one roof',

        link: '#/welcome',
    },
    {
        name: 'open-graph',
        title: 'View OpenGraph Card',
        height: '80%',
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
        longDesc:
            'Very brutal look up.' +
            '\nI\'m using an API, but it\'s just a single call. Nothing complicated',
        link: '#/emoji-search',
    },
    {
        name: 'print-page',
        longDesc:
            'Print Page' +
            'Sometimes you just want to print off some text, a list or something. ' +
            'With this Doodle you can paste the text in and do some formatting using Markdown, and then print it out. ',
        link: '#/print-page',
    },
    {
        name: 'wordle-one',
        longDesc:
            'My first attempt at a Wordle Cheat' +
            '\nIt works, but it\'s a bit dodgy',
    },
    {
        name: 'wordle-two',
        longDesc: 'My second attempt at a Wordle Cheat.\nStill very much a work in progress',

        underConstruction: true,
    },
    {
        name: 'text-helper',
        longDesc: 'Paste in some text and it\'ll make suggestions about what to do with it.',
    },
    {
        name: 'netflix-genre',
        longDesc:
            'Netflix provides a bunch of codes that aren\'t in their app.' +
            '\nHere they all, with links to Netflix.',

    },
    {
        name: 'sumner-tides',
        longDesc: 'Still a WIP',
        underConstruction: true,
    },
    {
        name: 'draggey-gamey',
        longDesc: [
            'Play with this. It doesn\'t quite work on mobile',
            'click on squares to change their colours. Drag a ' +
            'square to change the squares over which you have dragged that colour',
        ].join('\n'),
    },
    {
        name: 'password-generator',
        longDesc: 'Generate a "good" password.',
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
        height: '30%',
        ...page,
    }
}
export const pageConfig: PageInfoType[] = R.map(fulfilPageDefaults, _initPageList)
