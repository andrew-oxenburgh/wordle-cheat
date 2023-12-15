import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import fiveLetterwords from '../../config/five-letter-words'
import fourLetterWords from '../../config/four-letter-words'
import commonWords from '../../config/common-words'

import * as R from 'ramda'

import CopyablText from '../../components/CopyableText';
import PageBody from '../../components/PageBody'
let words = fiveLetterwords.concat(fourLetterWords).concat(commonWords)

words = R.uniq(words)
const separators: string = '-_~.@'
const numWords = words.length

const useStyles = createUseStyles({
   button: {
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
   },
   password: {
      fontFamily: 'monospace',
      border: '1px solid black',
      padding: '1em',
   },
   alert: {
      position: 'absolute',
      bottom: '10em',
      left: '1em',
   }
});

const createPassword = () => {
   let password = ''
   password += words[Math.floor(Math.random() * numWords)].toLowerCase()
   password += separators[Math.floor(Math.random() * separators.length)]
   password += words[Math.floor(Math.random() * numWords)].toUpperCase()
   password += separators[Math.floor(Math.random() * separators.length)]
   password += words[Math.floor(Math.random() * numWords)].toLowerCase()
   if (password.length < 15) {
      password += separators[Math.floor(Math.random() * separators.length)]
      password += words[Math.floor(Math.random() * numWords)].toLowerCase()

   }
   return password;
}

const JSSComponent: React.FC = () => {
   const classes = useStyles();
   const [password, setPassword] = useState(createPassword());;

   const handleButtonClick = () => {
      setPassword(createPassword())
   };

   return (
      <>
         <PageBody name="password-generator">
            <Card>
               <Card.Body>
                  <Card.Title>A suggested password</Card.Title>
                  <Card.Text>
                     I strongly recommend you don't use this password generator!!

                  </Card.Text>

                  <Card.Text>
                     I created it as fun little project

                  </Card.Text>
                  <CopyablText text={password} warning="please don't use this password!" />
                  <Card.Footer>
                     <Button
                        aria-label="create a new password"
                        className={classes.button} onClick={handleButtonClick}>create new password
                     </Button>
                  </Card.Footer>
               </Card.Body>
            </Card>
         </PageBody>
      </>
   );
};

export default JSSComponent;