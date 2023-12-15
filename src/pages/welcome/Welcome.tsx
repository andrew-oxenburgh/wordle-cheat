import { createUseStyles } from 'react-jss';
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
import Loader from '../../components/Loader'
const useStyles = createUseStyles({
   myComponent: {
      color: 'blue',
      backgroundColor: 'lightgray',
      padding: '10px',
   },
});

const Welcome = () => {
   const classes = useStyles();
   return (
      <PageBody>
         <PageHeader name="welcome" />
         <i>Here's the loading spinner you see around</i>
         <Loader/>
      </PageBody>
   )
}

export default Welcome;