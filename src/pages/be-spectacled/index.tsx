// PAGE: drag-n-drop

import PageBody from '#/components/structural/PageBody'
import { createUseStyles } from 'react-jss'
import { BeSpectacled } from './BeSpectacled/BeSpectacled'

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
                <div className={classes.demo}>
                    <BeSpectacled />
                </div>
            </PageBody >
        </div>
    )
}

export default DragNDropWrapper
