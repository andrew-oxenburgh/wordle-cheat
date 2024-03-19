
export type NiwaDataType = {
    metadata: {
        latitude: number
        longitude: number
        datum: string
        start: string
        days: number
        interval: number
        height: string
    }
    values: {
        time: string
        value: number
    }[]
}

const niwaExample: NiwaDataType = {
    'metadata': {
        'latitude': -28.948,
        'longitude': 155,
        'datum': 'LAT',
        'start': '2023-12-09T11:00:00.000Z',
        'days': 7,
        'interval': 0,
        'height': 'LAT = 0.922m below MSL',
    },
    'values': [
        {
            'time': '2023-12-09T13:19:00Z',
            'value': 0.3,
        },
        {
            'time': '2023-12-09T19:56:00Z',
            'value': 1.58,
        },
        {
            'time': '2023-12-10T02:13:00Z',
            'value': 0.49,
        },
        {
            'time': '2023-12-10T07:52:00Z',
            'value': 1.3,
        },
        {
            'time': '2023-12-10T13:57:00Z',
            'value': 0.26,
        },
        {
            'time': '2023-12-10T20:35:00Z',
            'value': 1.7,
        },
        {
            'time': '2023-12-11T02:59:00Z',
            'value': 0.4,
        },
        {
            'time': '2023-12-11T08:38:00Z',
            'value': 1.3,
        },
        {
            'time': '2023-12-11T14:35:00Z',
            'value': 0.21,
        },
        {
            'time': '2023-12-11T21:16:00Z',
            'value': 1.81,
        },
        {
            'time': '2023-12-12T03:46:00Z',
            'value': 0.33,
        },
        {
            'time': '2023-12-12T09:23:00Z',
            'value': 1.29,
        },
        {
            'time': '2023-12-12T15:16:00Z',
            'value': 0.19,
        },
        {
            'time': '2023-12-12T21:58:00Z',
            'value': 1.9,
        },
        {
            'time': '2023-12-13T04:32:00Z',
            'value': 0.28,
        },
        {
            'time': '2023-12-13T10:10:00Z',
            'value': 1.28,
        },
        {
            'time': '2023-12-13T15:58:00Z',
            'value': 0.18,
        },
        {
            'time': '2023-12-13T22:41:00Z',
            'value': 1.95,
        },
        {
            'time': '2023-12-14T05:20:00Z',
            'value': 0.25,
        },
        {
            'time': '2023-12-14T10:58:00Z',
            'value': 1.26,
        },
        {
            'time': '2023-12-14T16:43:00Z',
            'value': 0.19,
        },
        {
            'time': '2023-12-14T23:27:00Z',
            'value': 1.96,
        },
        {
            'time': '2023-12-15T06:10:00Z',
            'value': 0.24,
        },
        {
            'time': '2023-12-15T11:49:00Z',
            'value': 1.23,
        },
        {
            'time': '2023-12-15T17:31:00Z',
            'value': 0.23,
        },
        {
            'time': '2023-12-16T00:16:00Z',
            'value': 1.92,
        },
        {
            'time': '2023-12-16T07:02:00Z',
            'value': 0.25,
        },
    ],
}

export default niwaExample
