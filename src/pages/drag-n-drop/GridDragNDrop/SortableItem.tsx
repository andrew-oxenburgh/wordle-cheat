/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable, defaultAnimateLayoutChanges } from '@dnd-kit/sortable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical as icon } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'
import { faTimes as cross } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faCamera as camera } from '@fortawesome/free-solid-svg-icons/faCamera'
import Webcam from 'react-webcam'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { Active, UniqueIdentifier } from '@dnd-kit/core'
import { SortableTransition } from '@dnd-kit/sortable/dist/hooks/types'

type LayoutChanges = {
    active: Active | null
    containerId: UniqueIdentifier
    isDragging: boolean
    isSorting: boolean
    id: UniqueIdentifier
    index: number
    items: UniqueIdentifier[]
    previousItems: UniqueIdentifier[]
    previousContainerId: UniqueIdentifier
    newIndex: number
    transition: SortableTransition | null
    wasDragging: boolean

}
function animateLayoutChanges(args: LayoutChanges) {
    const { isSorting, wasDragging } = args

    if (isSorting || wasDragging) {
        return defaultAnimateLayoutChanges(args)
    }

    return true
}

const useStyles = createUseStyles({
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
export const SortableItem = (props: any) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        animateLayoutChanges,
        id: props.data.id,
        transition: {
            duration: 1000, // milliseconds
            easing: 'ease-out',
        },
    })

    const webcamRef = useRef(null)
    const capture = () => {
        const imageSrc = webcamRef?.current?.getScreenshot()
        // console.log(imageSrc)
        props.data.saveImage(imageSrc)
    }

    // console.log(CSS.Transform.toString(transform as Transform))

    const dynamicCardStyle = {
        transform: CSS.Transform.toString(transform as Transform),
        transition,
        ...(props.style ? props.style : {}),
        position: 'relative',
    }

    const classes = useStyles()

    if (props.data.id === 'camera') {
        return (
            <div style={dynamicCardStyle} className={classes.card}>
                Camera
                <Webcam
                    style={{
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    audio={false}
                    // height={'100px'}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                // width={'100em'}
                // videoConstraints={{}}
                />
                <Button className={classes.captureButton} onClick={capture}>
                    <FontAwesomeIcon icon={camera} />
                </Button>
            </div>
        )
    }

    return (
        <div style={dynamicCardStyle} className={classes.card}>
            {props.data.img && <img className={classes.img} src={props.data.img} />}
            <span className={classes.ellipsis} ref={setNodeRef} {...attributes} {...listeners}>
                <h3>{props.data.id}</h3>
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
            }} onClick={() => props.deleteMe()}>
                <FontAwesomeIcon icon={cross} />
            </Button>
        </div>
    )
}
