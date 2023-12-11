
import React, { useState } from 'react';
import { signal } from "@preact/signals-react";
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

const colorList: string[] = ['white', 'blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'teal', 'olive', 'navy', 'maroon', 'aqua', 'lime', 'fuchsia'];
// const colors: string[] = ['#000', '#444', '#888', '#aaa', '#eee']

const numColors = 4

const width = 8
const height = width
const numOfCells = width * height
const colors = R.take(numColors, colorList)

const isBeingDragged = signal(-1);

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
         background: color,
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
            border: '1px solid transparent',
            transition: 'border 3s ease',
         },
      }
      return acc
   }, {}, colors)


const useStylesClicks = createUseStyles(colorCss);

const ClickCounter: React.FC = () => {
   const [clickCount, setClickCount] = useState(0);
   const [dragged, setDragged] = useState(false);
   const classes = useStylesClicks();

   const handleButtonClick = () => {
      setClickCount((clickCount + 1) % numColors);
   };

   const handleDraggedOver = () => {
      if (isBeingDragged.value > -1) {
         setClickCount(isBeingDragged.value);
      }
   };

   const handleDragMe = () => {
      isBeingDragged.value = clickCount
      setDragged(true)
   }

   const handleUndragMe = () => {
      isBeingDragged.value = -1
      setDragged(false)
   }

   return (
      <div
         className={classes['color_' + clickCount]}
         onClick={handleButtonClick}
         onMouseEnter={handleDraggedOver}
         onMouseDown={handleDragMe}
         onMouseUp={handleUndragMe}
      />
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
   return (
      <Container className={classes.container}>
         <h2>Draggy Gamey</h2>
         {help}
         <GridComponent />
      </Container>
   );
};

export default DraggyGamey;
