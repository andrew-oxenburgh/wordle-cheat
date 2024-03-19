import { useState } from 'react'
import * as R from 'ramda'
import useMobileDetect from '@groupher/use-mobile-detect-hook'

import { createUseStyles } from 'react-jss'
import { type Item, _items } from './utils'
import { EtAl } from './EtAl'
import { Camera } from './Camera'
import { Album } from './Album'

export const useStyles = createUseStyles({
    container: {
        width: '100%',
        maxWidth: '60em',
        height: '30em',
        display: 'flex',
        border: 'green 7px dashed',
        flexFlow: 'row wrap',
        position: 'relative',
    },
})

export const BeSpectacled = () => {
    const [items, setItems] = useState(_items)
    const [cnt, setCnt] = useState(100)
    const [photoBooth, setPhotoBooth] = useState(false)
    const detectDeviceType = useMobileDetect()

    const appendImage = (item: Item) => {
        const newItems: Item[] = R.concat(items, [item])
        setItems(...[newItems])
        setCnt(cnt + 1)
    }

    const saveImage = (img: string): void => {
        if (items.length < 6) {
            appendImage({
                id: cnt,
                text: 'XXXXXXXXXXXXXX',
                img,
            })
        }
        setPhotoBooth(false)
    }

    const deleteMe = (id: number) => {
        const newItems: Item[] = R.filter((i: Item) => { return i.id !== id }, items)
        setItems(newItems)
    }

    const openPhotoBooth = () => {
        setPhotoBooth(true)
    }

    const cancel = () => {
        setPhotoBooth(false)
    }

    return (
        <>
            {photoBooth ?
                <Camera
                    onCancel={cancel}
                    saveImage={saveImage}
                /> :
                <Album
                    items={items}
                    setItems={setItems}
                    deleteMe={deleteMe}
                    openPhotoBooth={openPhotoBooth}
                />
            }
            <EtAl
                items={items}
                setItems={setItems}
                detectDeviceType={detectDeviceType}
            />
        </>
    )
}
