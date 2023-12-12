import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight as rightArrow } from '@fortawesome/free-solid-svg-icons';

const useStyles = createUseStyles({
   pageHeader: {
      textAlign: 'center',
   },
   leftArrow: {
      position: 'absolute',
      left: '1em'
   },
   rightArrow: {
      position: 'absolute',
      right: '1em'
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
      <h1 className={classes.pageHeader}>
         {header.next?.link &&
            <a href={header.prev?.link}
               className={classes.leftArrow}>
               <FontAwesomeIcon icon={leftArrow} />
            </a>
         }
         {header.title}
         {
            <a href={header.next?.link}
               className={classes.rightArrow}>

               <FontAwesomeIcon icon={rightArrow} />
            </a>
         }
      </h1>
   );
}

export default PageHeader