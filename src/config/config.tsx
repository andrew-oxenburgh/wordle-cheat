import * as R from 'ramda'
import { pageList, PageName } from './page-list'

const version = '4.1.1'

function kebabCaseToTitleCase(str: string): string {
   return str.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
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
      ...page,
   })
   return acc
}, [], pageList)

const findPageInfo = (name: string) => R.find(R.propEq(name, 'name'))(pageInfo) // => {a: 2}

export default pageInfo
export {
   pageInfo,
   findPageInfo,
   version,
}
