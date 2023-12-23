import { ReactNode } from 'react'

import Container from 'react-bootstrap/Container'

import { createUseStyles } from 'react-jss'
import InfoThing from '../InfoThing'
import PageHeader from './PageHeader'
import { PageInfoType, findPageInfo } from '../../config/config'
import { ErrorBoundary } from './ErrorBoundary'
import PageFooter from './PageFooter'
const useStyles = createUseStyles({
   container: {
      backgroundColor: 'white',
      borderRadius: '1em',
      border: '1px solid black',
      margin: '0 auto 4em auto',
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
   children?: ReactNode,
   name: string,
}

const PageBody: React.FC<ChildrenProps> = ({ children, name, ...args }) => {
   const classes = useStyles()
   const header: PageInfoType = findPageInfo(name)
   return (
      <Container className={classes.container} {...args}>
         <PageHeader name={name} />

         <InfoThing height="50%">
            <h3>{header.shortDesc}</h3>

            <Container>
               {header.longDesc.map((desc, index) => (
                  <p key={index}>{desc}</p>
               ))}
            </Container>
         </InfoThing>
         <ErrorBoundary>
            {children}
         </ErrorBoundary>
         <PageFooter underConstruction={header.underConstruction} />
      </Container>
   )
}

export default PageBody