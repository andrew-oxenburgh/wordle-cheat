import * as _ from 'lodash'
import { textConversions } from './textConversions'
import { integerConversions } from './integerConversions'
import { StringInspection, Conversion, Interpretation } from './textHelper.types'

function notNumber(s: string): boolean {
   return isNaN(parseInt(s.trim()))
}

function isInteger(s: string): boolean {
   return !isNaN(parseInt(s.trim()))
}

function isGeo(s: string): boolean {
   return !isNaN(parseInt(s.trim()))
}

const isLatLong = (s: string): boolean => {
   const latLongRegex = /\b([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?))\s*([nNsS])\b\s+([-+]?([1-9]?\d(\.\d+)?|1[0-7]\d(\.\d+)?|180(\.0+)?))\s*([eEwW])\b/g;
   return !! s.match(latLongRegex);
};

export function stringConversion(s: string): StringInspection {
   const ret: StringInspection = {
      input: s,
      kinds: []
   }
   if (s.trim().length === 0) {
      return ret
   }

   const kinds: Interpretation[] = []

   if (notNumber(s)) {
      kinds.push({
         kind: 'text',
         conversions: textConversions(s.trim())
      })
   }

   if (isInteger(s)) {
      kinds.push({
         kind: 'integer',
         conversions: integerConversions(s.trim())
      })
   }
   // if (isLatLong(s)) {
   //    kinds.push({
   //       kind: 'geo',
   //       conversions: latLongConversions(s.trim())
   //    })
   // }

   ret.kinds = kinds
   return ret

}

export { }