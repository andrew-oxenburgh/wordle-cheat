export type Conversion = {
   name: string,
   value: string
}

export type Interpretation = {
   kind: 'integer' | 'text' | 'geo'
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
