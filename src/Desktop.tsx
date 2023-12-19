
import { useState } from 'react'
import { createUseStyles } from 'react-jss';
import WordleCheat from './pages/wordleOne/WordleCheat'
import Cheater from './pages/wordleCheatTwo/Cheater'
import Container from 'react-bootstrap/Container';
import TextHelper from './pages/textHelper/TextHelper'
import DraggyGamey from './pages/draggyGamey/DraggyGamey'
import SumnerTides from './pages/sumnerTides/SumnerTides'
import Welcome from './pages/welcome/Welcome'
const useStyles = createUseStyles({
   chacter: {
      // fontSize: "150%"
   },
});
const Desktop = () => {
   const classes = useStyles();
   const [alert, setAlert] = useState<string | null>(null);

   const onCopy = (ch: string) => {
      return () => {
         navigator.clipboard.writeText(ch)
         setAlert(ch + 'Copied to clipboard!')
      }
   }

   return (
      <Container>
         <WordleCheat/>
         <Cheater/>
         <Welcome/>
         <TextHelper/>
         <DraggyGamey/>
         <SumnerTides/>

      </Container>
   )
}

export default Desktop;

/**
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
**/