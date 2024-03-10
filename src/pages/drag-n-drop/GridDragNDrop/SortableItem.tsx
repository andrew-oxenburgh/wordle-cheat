import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical as icon } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'
import Webcam from 'react-webcam'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import { createUseStyles } from 'react-jss'

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
        // width: '90%',
        // height: '90%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    captureButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
    },
})
export const SortableItem = (props: any) => {
    const {
        attributes, listeners, setNodeRef, transform, transition,
    } = useSortable({ id: props.data.id })

    const webcamRef = useRef(null)
    const capture = () => {
        const imageSrc = webcamRef?.current?.getScreenshot()
        // console.log(imageSrc)
        props.data.saveImage(imageSrc)
    }

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
                <Button className={classes.captureButton} onClick={capture}> Capture photo</Button>
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
        </div>
    )
}
