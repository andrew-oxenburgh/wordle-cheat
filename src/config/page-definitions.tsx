import { PageName } from './page-list'

export const initPageList: Partial<PageName>[] = [
   {
      name: 'welcome',
      title: 'Andrew\'s Sketch Pad',
      longDesc: [
         'This is a showcase of some doodles by me.',
         'Seriously, just sketches, you know, for fun.',
      ],
      link: '#/welcome',
   },
   {
      name: 'emoji-search',
      longDesc: [
         'Very brutal look up.',
      ],
      link: '#/emoji-search',
   },
   {
      name: 'print-page',
      longDesc: [
         'Print Page',
      ],
      link: '#/print-page',
   },
   {
      name: 'home',
      longDesc: [
         'Home Page. An intro and what not',
      ],
      link: '#/home',
      bg: 'warning',
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
         'It works, but it\'s a bit dodgy',
      ],
   },
   {
      name: 'netflix-genre',
      longDesc: [
         'Netflix provides a bunch of codes that aren\'t in their app',
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
      name: 'draggy-gamey',
      longDesc: [
         'Play with this. It doesn\'t quite work on mobile',
      ],
   },
   {
      name: 'password-generator',
      longDesc: [
         'Generate a "good" password.',
      ],
   },
   {
      name: 'blogs',
      link: '#/markdown/examplePage',
   },
]
