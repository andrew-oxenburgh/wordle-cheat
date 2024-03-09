import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical as icon } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'
import Webcam from 'react-webcam'
import Button from 'react-bootstrap/esm/Button'
import { useCallback, useRef } from 'react'

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

    const card = {
        transform: CSS.Transform.toString(transform as Transform),
        transition,
        border: '1px orange solid',
        position: 'relative',
        ...(props.style ? props.style : {}),
        padding: '0.5em',
    }

    const ellipsis = {
        position: 'absolute',
        right: '0.4em',
    }

    const img = {
        width: '90%',
        height: '90%',
        position: 'absolute',
        top: 0,
        left: 0,
    }

    if (props.data.id === 'camera') {
        return (
            <div style={card}>
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
        <div style={card}>
            <span style={ellipsis} ref={setNodeRef} {...attributes} {...listeners}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <h3>{props.data.id}</h3>
            {props.data.img && <img style={img} src={props.data.img} />}
        </div>
    )
}
