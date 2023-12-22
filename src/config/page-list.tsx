import * as R from 'ramda'
import * as _ from 'lodash'
import { initPageList } from './page-definitions'

export type PageName = {
   name: string
   title: string
   longDesc: string[]
   shortDesc: string
   link: string
   bg: string
   underConstruction: boolean
}

const fulfilPageDefaults = (page: Partial<PageName>) => {
   const title = _.startCase(page.name)
   return {
      title,
      longDesc: [
         title
      ],
      shortDesc: title,
      link: '#/' + page.name,
      underConstruction: false,
      ...page
   }
}
export const pageList: PageName[] = R.map(fulfilPageDefaults, initPageList)
console.log(JSON.stringify(pageList, null, 2))
