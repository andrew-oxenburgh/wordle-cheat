import { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Button from 'react-bootstrap/esm/Button'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container: {
        width: '100%',
        maxWidth: '60em',
        height: '30em',
        display: 'flex',
        border: 'green 7px dashed',
        flexFlow: 'row wrap',
        position: 'relative',
    },
    captureButton: {
        position: 'absolute',
        bottom: '10px',
        left: 'calc(50% - 5px)',
    },
    cancelButton: {
        position: 'absolute',
        bottom: '10px',
        left: 'calc(25% - 5px)',
    },
})
export const Camera = ({ saveImage, onCancel }: {
    saveImage: (img: string) => void
    onCancel: () => void
}) => {
    const [inited, setInited] = useState(false)
    const classes = useStyles()
    const webcamRef = useRef(null)

    const capture = () => {
        try {
            const imageSrc: string = webcamRef?.current?.getScreenshot()
            // console.log(imageSrc)
            saveImage(imageSrc)
        } catch (e) {
            console.error('error', e)
        }
    }

    return (
        <div className={classes.container}>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMedia={() => setInited(true)} />
            {inited && <Button className={classes.captureButton} onClick={capture}>click</Button>}
            <Button className={classes.cancelButton} onClick={onCancel}>cancel</Button>
        </div>
    )
}
