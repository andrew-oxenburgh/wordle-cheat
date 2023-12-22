import Toast from 'react-bootstrap/Toast'
import { createUseStyles } from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHardHat as icon } from '@fortawesome/free-solid-svg-icons/faHardHat'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useEffect, useState } from 'react'

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

   useEffect(()=>{
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
