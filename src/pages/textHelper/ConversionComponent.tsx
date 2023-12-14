import { useState, useEffect, Fragment } from 'react';

import { stringConversion } from './lib/textUtils'
import { StringInspection } from './lib/textHelper.types'
import CopyableText from '../../components/CopyableText'
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

   return (
      <>
         <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
         <StringInspectionDisplay inspection={conversions} />
      </>
   );
};

export default ConversionComponent