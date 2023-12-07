import React, { useState, useEffect } from 'react';
import { stringConversion } from './lib/textUtils'
import { StringInspection } from './lib/textHelper.types'
import { createUseStyles } from 'react-jss'

const useStles = createUseStyles({
   kindTitle: {
      maxWidth: '7em',
      minWidth: '7em',
      display: "inline-block",
      border: 'lightgrey 1px solid'
   }
})

type StringInspectionProps = {
   inspection: StringInspection;
};

const StringInspectionDisplay: React.FC<StringInspectionProps> = ({ inspection }) => {
   const classes = useStles()
   return (
      <div>
         <h3>Input: {inspection.input}</h3>
         <h4>Kinds:</h4>
         <ul>
            {inspection.kinds.map(kind => (
               <div key={kind.kind}>
                  <h5>Kind: {kind.kind}</h5>
                  <ul>
                     {kind.conversions.map(conversion => (
                        <li key={conversion.name}>
                           <span className={classes.kindTitle}>{conversion.name}:</span> {conversion.value}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </ul>
      </div>
   );
};


const ConversionComponent = () => {
   const [text, setText] = useState('');
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

export default ConversionComponent;
