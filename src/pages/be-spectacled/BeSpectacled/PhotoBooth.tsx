import { useRef } from 'react'
import Webcam from 'react-webcam'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera as camera } from '@fortawesome/free-solid-svg-icons/faCamera'
import { CSS, Transform } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { useStyles } from './PhotoFrame'
import { animateLayoutChanges } from './utils'

export type PhotoBoothType = {
    saveImage: any
    style: any
    show: boolean
}

export const PhotoBooth = ({ saveImage, style, show }: PhotoBoothType) => {
    const {
        transform, transition,
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
    const webcamRef = useRef(null)
    const capture = () => {
        const imageSrc: string = webcamRef?.current?.getScreenshot()
        saveImage(imageSrc)
    }
    if (!show) {
        return ''
    }
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
                ref={webcamRef} screenshotFormat="image/jpeg" // width={'100em'}
            />
            <Button className={classes.captureButton} onClick={capture}>
                <FontAwesomeIcon icon={camera} />
            </Button>
        </div>
    )
}
