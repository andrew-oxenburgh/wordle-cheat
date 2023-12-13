import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import fiveLetterwords from '../../wordle-words'
import fourLetterWords from '../../four-letter-words'
import commonWords from '../../common-words'

import * as R from 'ramda'

import CopyablText from '../../components/CopyableText';
import InfoThing from '../../components/InfoThing'
import PageHeader, { HeaderType } from '../../components/PageHeader'

let words = fiveLetterwords.concat(fourLetterWords).concat(commonWords)

words = R.uniq(words)
const separators: string = '-_~.@'
const numWords = words.length

const help = (
   <InfoThing height="50%">
      <h3>Password Generator</h3>
      <p>
         Just a fun little app.
      </p>
      <ol>
         <li>
            I used a couple of 4 and 5 letter word lists I found on the web.
         </li>
         <li>
            There are {numWords.toLocaleString()} seed words.
         </li>

         <li>
            I get 3 random words from the concatenated list, add a random separator, and make the outer words lower case, and the middle word uppercase.
         </li>
      </ol>
   </InfoThing >
)


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
   const [copyCount, setCopyCount] = useState(1);;
   const [show, setShow] = useState(false);

   const handleButtonClick = () => {
      setPassword(createPassword())
   };

   const copy = () => {
      navigator.clipboard.writeText(password)
      setShow(true)
      setCopyCount(copyCount + 1)
   }

   const header: HeaderType = {
      title: 'password generator',
      prev: {
         name: 'draggy gamey',
         link: '#/draggy-gamey'
      },
      next: {
         name: 'blog',
         link: '#/markdown/examplePage'
      },
   }


   return (
      <>
         <Container>
            {help}
            <PageHeader header={header} />
            <Card>
               <Card.Body>
                  <Card.Title>A suggested password</Card.Title>
                  <Card.Text>
                     <p>
                        I strongly recommend you don't use this password generator!!
                     </p>
                     <p>
                        I created it as fun little project
                     </p>
                     <CopyablText text={password} warning="please don't use this password!" />
                  </Card.Text>
                  <Card.Footer>
                     <button className={classes.button} onClick={handleButtonClick}>create new password</button>
                  </Card.Footer>
               </Card.Body>
            </Card>
         </Container>
      </>
   );
};

export default JSSComponent;