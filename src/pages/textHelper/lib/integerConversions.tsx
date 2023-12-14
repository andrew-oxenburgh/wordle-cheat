import { Conversion } from './textHelper.types'
import * as _ from 'lodash'

const toDateTime = (s: string): string => {
   try {
      return new Date(_.toInteger(s)).toISOString()
   } catch (e) {
      return 'invalid date ' + s
   }
}

export function integerConversions(s: string): Conversion[] {
   const ret = []

   ret.push({
      name: 'locale',
      value: _.toInteger(s).toLocaleString()
   })
   ret.push({
      name: 'date',
      value: toDateTime(s)
   })
   return ret
}

