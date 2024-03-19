
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical as icon } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'
import { faTimes as cross } from '@fortawesome/free-solid-svg-icons/faTimes'

import { createUseStyles } from 'react-jss'

import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { Item, animateLayoutChanges } from './utils'

export const useStyles = createUseStyles({
    card: {
        border: '1px orange solid',
        position: 'relative',
        padding: '0.5em',
        minWidth: '33.33%',
        maxWidth: '33.33%',
        height: '50%',
    },
    ellipsis: {
        position: 'absolute',
        right: '0.4em',
        border: '1px dashed grey',
        borderRadius: '0.5em',
        padding: '0 0.5em',
        background: 'white',
        '&:hover': {
            background: 'red',
        },
    },
    img: {
        width: '100%',
        // height: '90%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    captureButton: {
        position: 'absolute',
        bottom: '50%',
        left: '50%',
        // width: '100%',
    },
})
type AlbumFrameType = {
    data: Item
    style: any
    deleteMe: () => void
}

export const PhotoFrame = ({ data, style, deleteMe }: AlbumFrameType) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        animateLayoutChanges,
        id: data.id,
        transition: {
            duration: 1000, // milliseconds
            easing: 'ease-out',
        },
    })

    const dynamicCardStyle = {
        transform: CSS.Transform.toString(transform as Transform),
        transition,
        ...(style ? style : {}),
        position: 'relative',
    }

    const classes = useStyles()

    return (
        <div style={dynamicCardStyle} className={classes.card}>
            {data.img && <img className={classes.img} src={data.img} />}
            <span
                className={classes.ellipsis}
                ref={setNodeRef}
                {...attributes}
                {...listeners}>
                <h3>{data.id}</h3>
                <FontAwesomeIcon icon={icon} />
            </span>
            <Button style={{
                position: 'absolute',
                background: 'red',
                borderRadius: '2em',
                fontSize: '125%',
                color: 'white',
                fontWeight: 'bold',
                padding: '3px 8px',
                opacity: '50%',
                border: '3px solid white',
            }} onClick={() => void deleteMe()}>
                <FontAwesomeIcon icon={cross} />
            </Button>
        </div>
    )
}
