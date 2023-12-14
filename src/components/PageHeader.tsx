import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
import { faArrowAltCircleRight as rightArrow } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';

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

export type HeaderType = {
   title: string;
   next: {
      name: string;
      link: string;
   };
   prev: {
      name: string;
      link: string;
   };
};

interface Props {
   header: HeaderType
}

const PageHeader: React.FC<Props> = ({ header }) => {
   const classes = useStyles();
   return (
      <div className={classes.pageHeader}>
         <div className={classes.arrows}>
            {header.next?.link &&
               <a href={header.prev?.link}
                  className={classes.leftArrow}>
                  <FontAwesomeIcon icon={leftArrow} size="2xl" />
               </a>
            }
            {
               <a href={header.next?.link}
                  className={classes.rightArrow}>

                  <FontAwesomeIcon icon={rightArrow} size="2xl" />
               </a>
            }
         </div>
         <span className={classes.title}>{header.title}</span>
      </div>
   );
}

export default PageHeader