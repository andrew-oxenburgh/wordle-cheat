import { Conversion } from './textHelper.types'
import * as _ from 'lodash'

export function integerConversions(s: string): Conversion[] {
   const ret = []

   ret.push({
      name: 'locale',
      value: s.toLocaleString()
   })
   ret.push({
      name: 'date',
      value: new Date(_.toInteger(s)).toISOString()
   })
   return ret
}

