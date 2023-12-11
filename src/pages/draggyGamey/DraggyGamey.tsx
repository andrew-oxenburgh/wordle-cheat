
import React, { useState } from 'react';
import UnderConstructionThing from '../../components/UnderConstructionThing'
import InfoThing from '../../components/InfoThing'
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container'
import * as R from 'ramda'

const help = (
   <InfoThing height="50%">
      <h2>Draggy Gamey</h2>
      <p>
         This is a "game" where you can drag the pointer around, or click on squares to do things!!!
      </p>
   </InfoThing>
)

const colors: string[] = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'teal', 'olive', 'navy', 'maroon', 'aqua', 'lime', 'fuchsia'];
// const colors: string[] = ['#000', '#444', '#888', '#aaa', '#eee']

const numColors = colors.length

const width = 20
const height = 20
const numOfCells = width * height

const useStyles = createUseStyles({
   grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(${width}, 1fr)`,
      gridTemplateRows: `repeat(${height}, 1fr)`,
      width: '20em',
      height: '20em',
      padding: 0,
      border: '1px solid black',
   },
   container: {
      width: '100%',
      height: 'auto',
   }
});

const reduceWithIndex = R.addIndex(R.reduce)

const colorCss = reduceWithIndex(
   (acc: any, color: string, idx: number) => {
      acc['color_' + idx] = {
         backgroundColor: color,
         width: '100%',
         height: '100%',
         borderRadius: 0,
         padding: 0,
         margin: 0,
         // border: '5px solid none',
         '&:hover': {
            border: '1px solid #222',
            transition: '0.1s'
         },
         '&:not(:hover)': {
            border: '1px solid none',
            transition: '30s'
         },
         transition: '0.1s'

      }
      return acc
   }, {}, colors)


const useStylesClicks = createUseStyles(colorCss);

const ClickCounter: React.FC = () => {
   const [clickCount, setClickCount] = useState(0);
   const classes = useStylesClicks();

   const handleButtonClick = () => {
      setClickCount((clickCount + 1) % numColors);
   };

   return (
      <div className={classes['color_' + clickCount]} onClick={handleButtonClick}>{' '}</div>
   );
};

const GridComponent: React.FC = () => {
   const classes = useStyles();

   return (
      <div className={classes.grid}>
         {Array(numOfCells).fill(null).map((_, index) => (
            <ClickCounter key={index} />
         ))}
      </div>
   );
};

const DraggyGamey: React.FC = () => {
   const classes = useStyles();
   const [clear, setClear] = useState(0)
   const onClear = () => {
      setClear(clear + 1)
   }

   return (
      <Container className={classes.container}>
         <h2>Draggy Gamey</h2>
         <p>
            <i>(should be Clicky Gamey)</i>
         </p>
         {help}
         <GridComponent />
         <UnderConstructionThing />
      </Container>
   );
};

export default DraggyGamey;
