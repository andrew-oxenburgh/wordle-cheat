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
