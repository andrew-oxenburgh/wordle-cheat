import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera as camera } from '@fortawesome/free-solid-svg-icons/faCamera'
import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { animateLayoutChanges } from './utils'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    card: {
        border: '1px orange solid',
        position: 'relative',
        padding: '0.5em',
        minWidth: '33.33%',
        maxWidth: '33.33%',
        height: '50%',
    },
    captureButton: {
        position: 'absolute',
        top: 'calc(50% - 1em)',
        left: 'calc(50% - 2em)',
        // width: '100%',
    },
})

export type PhotoBoothType = {
    openPhotoBooth: any
    style: any
    show: boolean
}

export const GotoPhotoBooth = ({ openPhotoBooth, style, show }: PhotoBoothType) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        animateLayoutChanges,
        id: 'camera',
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
    if (!show) {
        return ''
    }
    return (
        <div style={dynamicCardStyle} className={classes.card}>
            <Button className={classes.captureButton} onClick={openPhotoBooth}>
                <FontAwesomeIcon icon={camera} />
            </Button>
        </div>
    )
}
