import * as R from 'ramda'

type PageName = {
   name: string
   longDesc?: string[],
   shortDesc?: string
   link?: string
   bg?: string
}

const pageList: PageName[] = [
   {
      name: 'home',
      longDesc: [
         'Home Page. An intro and what not'
      ],
      link: '#/home',
      bg: 'warning'
   },
   {
      name: 'wordle-one',
      longDesc: [
         'My first attempt at a Wordle Cheat.',
         'It works, but it\'s a bit dodgy'
      ]
   },
   {
      name: 'wordle-two',
      longDesc: [
         'My second attempt at a Wordle Cheat.',
         'Still very much a work in progress'
      ]

   },
   {
      name: 'text-helper',
      longDesc: [
         'Paste in some text and it\'ll make suggestions about what to do with it.',
         'It works, but it\'s a bit dodgy'
      ]
   },
   {
      name: 'netflix-genre',
      longDesc: [
         'Netflix provides a bunch of codes that aren\'t in their app',
      ]
   },
   {
      name: 'sumner-tides',
      longDesc: [
         'Still a WIP',
      ]
   },
   {
      name: 'draggy-gamey',
      longDesc: [
         'Play with this. It doesn\'t quite work on mobile',
      ]
   },
   {
      name: 'password-generator',
      longDesc: [
         'Generate a "good" password.'
      ]
   },
   {
      name: 'blogs',
      link: '#/markdown/examplePage'
   },
]

function kebabCaseToTitleCase(str: string): string {
   return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export type PageInfoType = {
   title: string;
   link: string;
   name: string;
   bg: string,
   nextPage: string;
   prevPage: string;
   underConstruction: boolean;
   shortDesc: string;
   longDesc: string[];
}

const pageInfo: PageInfoType[] = R.reduce((acc: any, page: PageName) => {
   const title = kebabCaseToTitleCase(page.name)
   const placeInList = R.findIndex(R.propEq(page.name, 'name'))(pageList)
   let prevPos = (placeInList - 1)
   prevPos = prevPos < 0 ? (pageList.length - 1) : prevPos
   const prev = pageList[prevPos].name ? pageList[prevPos].name : pageList[prevPos]

   const nextPos = (placeInList + 1) % pageList.length
   const next = pageList[nextPos].name ? pageList[nextPos].name : pageList[nextPos]

   acc.push({
      title,
      link: '#/' + page.name,
      prevPage: prev,
      nextPage: next,
      underConstruction: false,
      bg: 'none',
      shortDesc: `This is a ${title} page`,
      longDesc: [`This is a ${title} page`,
         'with a longer description'],
      ...page
   })
   return acc
}, [], pageList)

const findPageInfo = (name: string) => R.find(R.propEq(name, 'name'))(pageInfo) // => {a: 2}

export default pageInfo
export {
   pageInfo,
   findPageInfo
}