import { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

import Container from 'react-bootstrap/Container'

import PageHeader from './PageHeader'
import { ErrorBoundary } from '../ErrorBoundary'
import { PageInfoType, findPageInfo } from '#/config/config'
import { appMinMaxWidth } from './structural.config'
import AcceptCookies from './AcceptCookies'

const useStyles = createUseStyles({
    pageBodyContainer: {
        backgroundColor: 'white',
        borderRadius: '3px',
        border: '1px solid black',
        alignContent: 'center',
        justifyContent: 'center',
        cursor: 'default',
        padding: '1em',
        overflow: 'none',
        ...appMinMaxWidth,
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
        <Container className={classes.pageBodyContainer} {...args}>
            <PageHeader name={name} desc={header.longDesc} />
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
            <AcceptCookies />
        </Container>
    )
}

export default PageBody
