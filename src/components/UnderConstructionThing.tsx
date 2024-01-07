import { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Toast from 'react-bootstrap/Toast'

const useStyles = createUseStyles({
    banner: {
        justifyContent: 'center',
        position: 'fixed',
        bottom: '8em',
        right: '3em',
    },
    icon: {
    },
})

const UnderConstructionThing: React.FC = () => {
    const classes = useStyles()

    useEffect(() => {
        setOpen(true)
    }, [])

    const [open, setOpen] = useState<boolean>(true)

    const onClose = () => {
        setOpen(false)
    }

    return (
        <Toast bg="warning" show={open} className={classes.banner} onClose={onClose}>
            <Toast.Header>Under Construction</Toast.Header>
            <Toast.Body><em>This page has some work to be done on it.</em></Toast.Body>
        </Toast>
    )
}

export default UnderConstructionThing
