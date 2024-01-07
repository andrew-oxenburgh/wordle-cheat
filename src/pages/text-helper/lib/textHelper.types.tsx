export type ConversionType = {
    name: string
    value: string
}

export type InterpretationType = {
    kind: 'integer' | 'text' | 'geo' | 'url'
    conversions: ConversionType[]
}

export type StringInspectionType = {
    input: string
    kinds: InterpretationType[]
}

// eslint-disable-next-line
const exampleResult: StringInspectionType = {
    // input string
    input: '1',
    // all the different available types
    kinds: [
        {
            kind: 'integer',
            conversions: [
                {
                    name: 'date',
                    value: '12-34-56',
                },
                {
                    name: 'locale',
                    value: '1',
                },
            ],
        },
    ],
}
