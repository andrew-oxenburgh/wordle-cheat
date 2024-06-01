export type ItemProps = {
    id: string
    name: string
    desc: string
    alts?: string[]
}

export type ItemTrayProps = {
    item: ItemProps
    expectedLevel: number
}

export type ItemPositions = string[][]

export type BakeItems = {
    [key: string]: number
}

export type Bake = {
    name: string
    when: string
    items: BakeItems
}

export type Bakes = {
    [key: string]: Bake
}
