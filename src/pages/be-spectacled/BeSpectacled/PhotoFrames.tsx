import { PhotoFrame } from './PhotoFrame'
import { Item } from './utils'

type PhotoFramesType = {
    items: Item[]
    itemStyle: any
    deleteMe: (id: number) => void
}

export const PhotoFrames = ({ items, itemStyle, deleteMe }: PhotoFramesType) => {
    return (
        items && items.map(
            (item: Item) => {
                return (<PhotoFrame
                    style={itemStyle}
                    key={item.id}
                    data={item}
                    deleteMe={() => deleteMe(item.id)}
                />)
            })
    )

}
