import { createUseStyles } from 'react-jss'
import Button from 'react-bootstrap/Button'
import * as config from '../config/config'
const useStyles = createUseStyles({
   pageHeader: {
      textAlign: 'center',
      textAnchor: 'middle',
      maxWidth: '30em',
      marginBottom: '1em',
      // paddingBottom: '0.5em',
      overflow: 'none',
      height: 'fit-content',
   },
   leftArrow: {
      float: 'left',
      // marginLeft: '1em',
      marginTop: '0.2em',
      fontWeight: 'bold',
      fontSize: '1em',
      padding: '0 0.3em',
      margin: 0,
      borderRadius: '2em',
   },
   rightArrow: {
      float: 'right',
      // marginRight: '1em',
      marginTop: '0.2em',
      fontWeight: 'bold',
      fontSize: '1em',
      padding: '0 0.3em',
      margin: 0,
      borderRadius: '2em',
   },
   title: {
      color: 'black',
      fontSize: '2em',
   },
})

interface Props {
   name: string
}

const PageHeader: React.FC<Props> = ({ name }) => {
   const classes = useStyles()
   const header: config.PageInfoType = config.findPageInfo(name)
   const nextLink: string = config.findPageInfo(header.nextPage).link
   const prevLink: string = config.findPageInfo(header.prevPage).link
   return (
      <div className={classes.pageHeader}>
         <div>
            <Button as="a" href={prevLink}
               className={classes.leftArrow}>
               &larr;
            </Button>

            <Button as="a" href={nextLink}
               className={classes.rightArrow}>
               &rarr;
            </Button>
         </div>
         <h3>{header.title}</h3>
      </div>
   )
}

export default PageHeader
