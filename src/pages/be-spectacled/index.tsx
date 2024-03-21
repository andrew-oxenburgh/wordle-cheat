// PAGE: drag-n-drop

import PageBody from '#/components/structural/PageBody'
import { createUseStyles } from 'react-jss'
import { BeSpectacled } from './BeSpectacled/BeSpectacled'
import StateMachine from './StateMachine/StateMachine'

const useStyles = createUseStyles({
    demo: {
        border: '1px solid red',
        margin: '1em',
    },
})

const DragNDropWrapper: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
            <PageBody name="be-spectacled">
                {/* <div className={classes.demo}>
                    <SimpleDragNDrop />
                </div> */}
                <div className={classes.demo}>
                    {/* <BeSpectacled /> */}
                    <StateMachine />
                </div>
            </PageBody >
        </div>
    )
}

export default DragNDropWrapper
