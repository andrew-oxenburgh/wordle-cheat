import { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Button from 'react-bootstrap/Button'
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
    spinner: {
        position: 'absolute',
        left: 'calc(50% - 2.5em)',
        top: 'calc(50% - 2.5em)',
        width: '5em',
        height: '5em',
    },
})
export const Camera = ({ saveImage, onCancel }: {
    saveImage: (img: string) => void
    onCancel: () => void
}) => {
    const [inited, setInited] = useState(false)
    const classes = useStyles()
    const webcamRef = useRef<Webcam>(null)

    const capture = () => {
        try {
            const imageSrc = webcamRef?.current?.getScreenshot()
            if (imageSrc) {
                saveImage(imageSrc)
            }
            // console.log(imageSrc)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('error', e)
        }
    }

    return (
        <div className={classes.container + ' align-content-center'}>
            {!inited && <div className={classes.spinner + ' spinner-border'}></div>}
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMedia={() => { setInited(true) }} />
            {inited && <Button className={classes.captureButton} onClick={capture}>click</Button>}
            <Button className={classes.cancelButton} onClick={onCancel}>cancel</Button>
        </div>
    )
}
