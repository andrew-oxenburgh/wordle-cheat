import * as R from 'ramda'
import { pageConfig, PageInfoType, PageNameType } from './_page-list'

const version = '4.1.3'

function kebabCaseToTitleCase(str: string): string {
   return str.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

const pageDefinitions: PageInfoType[] = R.reduce((acc: any, page: Partial<PageInfoType>) => {
   const name: PageNameType | undefined = page?.name
   if (!name) {
      return
   }
   const title = kebabCaseToTitleCase(name)
   const placeInList = R.findIndex(R.propEq(page.name, 'name'))(pageConfig)
   let prevPos = (placeInList - 1)
   prevPos = prevPos < 0 ? (pageConfig.length - 1) : prevPos
   const prev = pageConfig[prevPos].name ? pageConfig[prevPos].name : pageConfig[prevPos]

   const nextPos = (placeInList + 1) % pageConfig.length
   const next = pageConfig[nextPos].name ? pageConfig[nextPos].name : pageConfig[nextPos]

   acc.push({
      title,
      link: '#/' + name,
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
}, [], pageConfig)

const findPageInfo = (name: string) => R.find(R.propEq(name, 'name'))(pageDefinitions)

export {
   pageDefinitions,
   findPageInfo,
   version,
}
export type { PageInfoType }

export default {}
