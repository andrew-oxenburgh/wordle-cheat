import * as _ from 'lodash'

type Conversion = {
   name: string,
   value: string
}

type Interpretation = {
   kind: 'integer' | 'text'
   conversions: Conversion[]
}

export type StringInspection = {
   input: string,
   kinds: Interpretation[]
}

// @ts-ignore
const exampleResult: StringInspection = {
   // input string
   input: '1',
   // all the different available types
   kinds: [
      {
         kind: 'integer',
         conversions: [
            {
               name: 'date',
               value: '12-34-56'
            },
            {
               name: 'locale',
               value: '1'
            },
         ]
      }
   ]
}

function integerConversions(s: string): Conversion[] {
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

function textConversions(s: string): Conversion[] {
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

export function stringConversion(s: string): StringInspection {
   const ret: StringInspection = {
      input: s,
      kinds: []
   }
   if(s.trim().length === 0){
      return ret
   }

   const kinds: Interpretation[] = []

   if (isNaN(parseInt(s.trim()))) {
      kinds.push({
         kind: 'text',
         conversions: textConversions(s.trim())
      })
   } else {
      kinds.push({
         kind: 'integer',
         conversions: integerConversions(s.trim())
      })
   }

   ret.kinds = kinds
   return ret
}

export { }