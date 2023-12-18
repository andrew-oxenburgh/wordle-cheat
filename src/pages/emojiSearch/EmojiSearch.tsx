import { createUseStyles } from 'react-jss';
import PageBody from '../../components/PageBody';
const useStyles = createUseStyles({
   myComponent: {
      color: 'blue',
      backgroundColor: 'lightgray',
      padding: '10px',
   },
});

// const emojiApiKey = process.env['EMOJI_API']

const MyComponent = () => {
   const classes = useStyles();
   return (
      <PageBody name="emoji-search" >
         <div className={classes.myComponent}>
            <h1>Emoji Search</h1>
            <p>This is a simple emoji search app.</p>
         </div>
      </PageBody>
   )
}

export default MyComponent;