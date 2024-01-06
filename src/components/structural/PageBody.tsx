import { ReactNode } from 'react'

import Container from 'react-bootstrap/Container'

import { createUseStyles } from 'react-jss'
import PageHeader from './PageHeader'
import { PageInfoType, findPageInfo } from '../../config/config'
import { ErrorBoundary } from './ErrorBoundary'

const useStyles = createUseStyles({
    container: {
        backgroundColor: 'white',
        borderRadius: '3px',
        border: '1px solid black',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
        maxWidth: '30em',
        cursor: 'default',
        padding: '1em',
        overflow: 'none',
    },
})

interface ChildrenProps {
    children?: ReactNode
    name: string
}

const PageBody: React.FC<ChildrenProps> = ({ children, name, ...args }) => {
    const classes = useStyles()
    const header: PageInfoType = findPageInfo(name)
    return (
        <Container className={classes.container} {...args}>
            <PageHeader name={name} desc={header.longDesc} />
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </Container>
    )
}

export default PageBody
