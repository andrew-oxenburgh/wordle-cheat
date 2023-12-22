import { useState, useEffect, Fragment } from 'react';

import { stringConversion } from './lib/textUtils'
import { StringInspection } from './lib/textHelper.types'
import CopyableText from '../../components/CopyableText'

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
   input: {
      width: '100%',
      height: '2.5em',
      fontSize: '1em',
      border: '1px solid darkblue',
      borderRadius: '0.5em',
      padding: '0 10px 0 10px',
      margin: '1em 0 1.5em 0',
   },
});

type StringInspectionProps = {
   inspection: StringInspection;
};

const StringInspectionDisplay: React.FC<StringInspectionProps> = ({ inspection }) => {
   return (
      <>
         {inspection.kinds.map(kind => (
            <Fragment key={kind.kind}>
               <div>{kind.kind} Conversions</div>
               <div >
                  {kind.conversions.map(conversion => (
                     <CopyableText text={conversion.value} key={conversion.name} />
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
   const classes = useStyles();
   return (
      <>
         <input className={classes.input} type="text" value={text} onChange={(e) => setText(e.target.value)} />
         <StringInspectionDisplay inspection={conversions} />
      </>
   );
};

export default ConversionComponent