import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical as icon } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'
import Webcam from 'react-webcam'
import Button from 'react-bootstrap/Button'
import { useCallback, useRef } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    card: {
        border: '1px orange solid',
        position: 'relative',
        padding: '0.5em',
    },
    ellipsis: {
        position: 'absolute',
        right: '0.4em',
        border: '1px dashed grey',
        borderRadius: '0.5em',
        padding: '0 0.5em',
        '&:hover': {
            background: 'red',
        },
    },
    img: {
        width: '90%',
        height: '90%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
})
export const SortableItem = (props: any) => {
    const {
        attributes, listeners, setNodeRef, transform, transition,
    } = useSortable({ id: props.data.id })

    const webcamRef = useRef(null)
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef?.current?.getScreenshot()
            // console.log(imageSrc)
            props.data.saveImage(imageSrc)
        },
        [webcamRef]
    )

    const dynamicCardStyle = {
        transform: CSS.Transform.toString(transform as Transform),
        transition,
        ...(props.style ? props.style : {}),
    }

    const classes = useStyles()

    if (props.data.id === 'camera') {
        return (
            <div style={dynamicCardStyle} className={classes.card}>
                CAMERA
                {/* <Webcam
                    audio={false}
                    height={300}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={300}
                // videoConstraints={{}}
                /> */}
                {/* <Button onClick={capture}> Capture photo</Button> */}
            </div>
        )
    }

    return (
        <div style={dynamicCardStyle} className={classes.card}>
            <span className={classes.ellipsis} ref={setNodeRef} {...attributes} {...listeners}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <h3>{props.data.id}</h3>
            {props.data.img && <img className={classes.img} src={props.data.img} />}
        </div>
    )
}
