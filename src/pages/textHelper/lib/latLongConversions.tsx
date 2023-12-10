// textConversions.ts

import * as _ from 'lodash'
import { Conversion } from './textHelper.types'

export function textConversions(s: string): Conversion[] {
   const ret = []

   ret.push({
      name: 'upperCase',
      value: s.toUpperCase()
   })
   ret.push({
      name: 'lowerCase',
      value: s.toLowerCase()
   })
   ret.push({
      name: 'kebabCase',
      value: _.kebabCase(s)
   })
   ret.push({
      name: 'camelCase',
      value: _.camelCase(s)
   })
   ret.push({
      name: 'capitalize',
      value: _.capitalize(s)
   })
   ret.push({
      name: 'escape',
      value: _.escape(s)
   })
   return ret
}