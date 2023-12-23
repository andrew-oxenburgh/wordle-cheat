import * as R from 'ramda'
import startCase from 'lodash/startCase'

export type PageNameType = 'home' | 'welcome' | 'emoji-search'
   | 'print-page' | 'wordle-one' | 'wordle-two' | 'text-helper'
   | 'netflix-genre' | 'sumner-tides' | 'draggey-gamey' | 'password-generator'

export type PageInfoType = {
   title: string;
   link: string;
   name: PageNameType;
   bg: string,
   nextPage: string;
   prevPage: string;
   underConstruction: boolean;
   shortDesc: string;
   longDesc: string[];
}

export const _initPageList: Partial<PageInfoType>[] = [
   {
      name: 'welcome',
      title: 'Andrew\'s Sketch Pad',
      longDesc: [
         'This is a showcase of some doodles by me.',
         'Seriously, just sketches, you know, for fun.',
         'I\'ve written heaps of these things, and it\'s nice to get them all under the one roof',
      ],
      link: '#/welcome',
   },
   {
      name: 'emoji-search',
      longDesc: [
         'Very brutal look up.',
         'I\'m using an API, but it\'s just a single call. Nothing complicated',
      ],
      link: '#/emoji-search',
   },
   {
      name: 'print-page',
      longDesc: [
         'Print Page',
         'Sometimes you just want to print off some text, a list or something. ',
         'With this Doodle you can paste the text in and do some formatting using Markdown, and then print it out. ',
      ],
      link: '#/print-page',
   },
   {
      name: 'wordle-one',
      longDesc: [
         'My first attempt at a Wordle Cheat.',
         'It works, but it\'s a bit dodgy',
      ],
   },
   {
      name: 'wordle-two',
      longDesc: [
         'My second attempt at a Wordle Cheat.',
         'Still very much a work in progress',
      ],
      underConstruction: true,
   },
   {
      name: 'text-helper',
      longDesc: [
         'Paste in some text and it\'ll make suggestions about what to do with it.',
      ],
   },
   {
      name: 'netflix-genre',
      longDesc: [
         'Netflix provides a bunch of codes that aren\'t in their app.',
         'Here they all, with links to Netflix.',
      ],
   },
   {
      name: 'sumner-tides',
      longDesc: [
         'Still a WIP',
      ],
      underConstruction: true,
   },
   {
      name: 'draggey-gamey',
      longDesc: [
         'Play with this. It doesn\'t quite work on mobile',
         'click on squares to change their colours. Drag a ' +
         'square to change the squares over which you have dragged that colour',
      ],
   },
   {
      name: 'password-generator',
      longDesc: [
         'Generate a "good" password.',
      ],
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
      ...page,
   }
}
export const pageConfig: PageInfoType[] = R.map(fulfilPageDefaults, _initPageList)
