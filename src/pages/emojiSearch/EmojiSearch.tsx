import { createUseStyles } from 'react-jss';

import PageBody from '../../components/PageBody';
const useStyles = createUseStyles({
   myComponent: {
   },
});
const emojiRoot = 'https://emoji-api.com/'
const pathAll = emojiRoot + 'emojis'

const emojiApiKey = '3c852c8687a973f3017ad721b796f6232306d17e'

const findAll = () => {
   return `${pathAll}?access_key=${emojiApiKey}`
}

const search = (qry: string) => {
   return `${pathAll}?search=${qry}&access_key=${emojiApiKey}`
}

const find = (name: string) => {
   return `${pathAll}/${name}?access_key=${emojiApiKey}`
}

const MyComponent = () => {
   const classes = useStyles();
   return (
      <PageBody name="emoji-search" >
         <div className={classes.myComponent}>
            <a href="https://emoji-api.com/">emoji-api</a>
            <p>This is a simple emoji search app.</p>
            <a href={findAll()} target="_blank">all</a>
            <br />
            <a href={search('computer')} target="_blank">search for computer</a>
            <br />
            <p>{find('grinning-squinting-face')}</p>
            <a href={find('grinning-squinting-face')} target="_blank">find grinning-squinting-face</a>
            <br />
            <a href="https://emoji-api.com/emojis/e0-7-desktop-computer?access_key=3c852c8687a973f3017ad721b796f6232306d17e" target="_blank">specific emoji</a>
            <br />
            <a href="https://emoji-api.com/categories/travel-places?access_key=3c852c8687a973f3017ad721b796f6232306d17e" target="_blank">all cetagories</a>
            <br />
            <a href="https://emoji-api.com/categories/travel-places?access_key=3c852c8687a973f3017ad721b796f6232306d17e" target="_blank">specific category</a>
         </div>
      </PageBody>
   )
}

export default MyComponent;