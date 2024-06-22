export type ItemType =
    'gourmet-pie' |
    'classic-pie' |
    'toppa' |
    'tender' |
    'bite'

export type ItemProps = {
    id: string
    type: ItemType
    name: string
    desc: string
    alts?: string[]
    defaultLevel: number
}

export type ItemTrayProps = {
    itemId: string
    selectedBake: string
    setItemCount: (count: number) => void
    counter: number
}

export type ItemOrder = string[]

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
