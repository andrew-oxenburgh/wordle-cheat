import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
import { faArrowAltCircleRight as rightArrow } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';
import * as config from '../pages/config'
const useStyles = createUseStyles({
   pageHeader: {
      textAlign: 'center',
      textAnchor: 'middle',
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0.5em',
      overflow: 'none',
      height: 'fit-content',
   },
   arrows: {

   },
   leftArrow: {
      float: 'left',
      marginLeft: '2em',
      marginTop: '0.2em',
   },
   rightArrow: {
      float: 'right',
      marginRight: '2em',
      marginTop: '0.2em',
   },
   title: {
      color: 'black',
      fontSize: '1.5em',
   }
});

interface Props {
   name: string
}

const PageHeader: React.FC<Props> = ({ name }) => {
   const classes = useStyles();
   const header: config.PageInfoType = config.findPageInfo(name)

   const nextLink: string = config.findPageInfo(header.nextPage).link;
   const prevLink: string = config.findPageInfo(header.prevPage).link;
   return (
      <div className={classes.pageHeader}>
         <div className={classes.arrows}>
            <a href={prevLink}
               className={classes.leftArrow}>
               <FontAwesomeIcon icon={leftArrow} size="2xl" />
            </a>

            <a href={nextLink}
               className={classes.rightArrow}>

               <FontAwesomeIcon icon={rightArrow} size="2xl" />
            </a>

         </div>
         <span className={classes.title}>{header.title}</span>
      </div>
   );
}

export default PageHeader