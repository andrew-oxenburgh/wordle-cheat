
import React, { useState } from 'react';
import { signal } from "@preact/signals-react";
import InfoThing from '../../components/InfoThing'
import { createUseStyles } from 'react-jss';
import * as R from 'ramda'
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
import Card from 'react-bootstrap/Card';
const help = (
   <InfoThing height="50%">
      <h2>Draggy Gamey</h2>
      <p>
         This is a "game" where you can drag the pointer around, or click on squares to do things!!!
      </p>
      <p>
         Click to change the colors of that square
      </p>
      <p>
         Press and drag to change the colors of the square you drag over. This doesn't work on a mobile yet.
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
      width: '22em',
      height: '22em',
      padding: 0,
      border: '1px solid black',
   },
   container: {
      display: 'flex',
      justifyContent: 'center'
      // width: '100em',
      // height: '100em',
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
      <button
         className={classes['color_' + clickCount]}
         onClick={handleButtonClick}
         aria-label={"Click me button " + clickCount}
         onMouseDown={handleDragMe}
         onMouseEnter={handleDraggedOver}
         onMouseUp={handleUndragMe}

      //todo: make it work for mobile
      />
   )
};

const GridComponent: React.FC = () => {
   const classes = useStyles();
   const handleUndragMe = () => {
      isBeingDragged.value = -1
   }

   return (
      <div className={classes.grid}
         onMouseLeave={handleUndragMe}
      >
         {Array(numOfCells).fill(null).map((_, index) => (
            <ClickCounter key={index} />
         ))}
      </div>
   );
};

const DraggyGamey: React.FC = () => {
   const classes = useStyles();
   return (<>
      <PageBody>
         {help}
         <PageHeader name="draggy-gamey" />
         {/* {help} */}
         <Card>
            <Card.Body>
               <GridComponent />
            </Card.Body>
         </Card>
      </PageBody>
   </>
   );
};

export default DraggyGamey;
