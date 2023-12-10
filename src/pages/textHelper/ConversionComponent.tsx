import React, { useState, useEffect, Fragment } from 'react';

import { createUseStyles } from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard as icon } from '@fortawesome/free-solid-svg-icons'

import { stringConversion } from './lib/textUtils'
import { Conversion, StringInspection } from './lib/textHelper.types'

type StringInspectionProps = {
   inspection: StringInspection;
};

type ConversionElementProps = {
   conversion: Conversion;
};

const useStles = createUseStyles({
   element: {
      position: 'relative',
      marginTop: 20,
      '&:hover': {
         // visibility: 'hidden',
         overflow: 'none',
         '&,icon': {
            color: 'blue'
         }
      }
   },
   kindTitle: {
      display: "inline-block",
      position: 'absolute',
      top: -10,
      fontSize: '70%',
      color: 'darkblue'
   },
   kindValue: {
      // marginLeft: 20,
   },
   icon: {
      width: '2em',
      color: 'red',
      position: 'absolute',
      top: -10,
      // display: 'none',
   }
})

function camelCaseToWords(input: string): string {
   return input.replace(/([A-Z])/g, ' $1').toLowerCase();
}

const ConversionElement: React.FC<ConversionElementProps> = ({ conversion }) => {
   const classes = useStles()
   const [hover, setHover] = useState(false)

   function onClick(s: string) {
      return function() {
         console.log(s)
         navigator.clipboard.writeText(s)
      }
   }

   return (
      <>
         <div key={conversion.name}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={classes.element}
            onClick={onClick(conversion.value)}
         >
            <div className={classes.kindTitle}>{camelCaseToWords(conversion.name)}</div>
            {
               hover &&
               <FontAwesomeIcon icon={icon} className={classes.icon} />
            }
            <div className={classes.kindValue}>
               {conversion.value}
            </div>
         </div>
      </>
   )
}

const StringInspectionDisplay: React.FC<StringInspectionProps> = ({ inspection }) => {
   return (
      <>
         {inspection.kinds.map(kind => (
            <Fragment key={kind.kind}>
               <div>{kind.kind} Conversions</div>
               <div>
                  {kind.conversions.map(conversion => (
                     <ConversionElement key={conversion.name} conversion={conversion} />
                  ))}
               </div>
            </Fragment>
         ))
         }
      </ >
   );
};

export const ConversionComponent = () => {
   const [text, setText] = useState('hello, world');
   const [conversions, setConversions] = useState<StringInspection>({
      input: '',
      kinds: []
   });
   useEffect(() => {
      setConversions(stringConversion(text))
   }, [text]);

   return (
      <>
         <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
         <StringInspectionDisplay inspection={conversions} />
      </>
   );
};

export default ConversionComponent