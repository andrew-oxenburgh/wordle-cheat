import { useState, useRef, useEffect } from 'react'
import useResizeElement from 'react-hook-resizable-element'

import Form from 'react-bootstrap/Form'

import { StringInspectionType } from './lib/textHelper.types'
import CopyableText from '#/components/CopyableText'
import { stringConversion } from './lib/textUtils'

type StringInspectionProps = {
    inspection: StringInspectionType
}

const StringInspectionDisplay: React.FC<StringInspectionProps> = ({ inspection }) => {
    return (
        <>
            {inspection.kinds.map((kind) => (
                <div key={kind.kind}>
                    <div>{kind.kind} Conversions</div>
                    <div >
                        {kind.conversions.map((conversion) => (
                            <CopyableText text={conversion.value} key={conversion.name} />
                        ))}
                    </div>
                </div>
            ))
            }
        </ >
    )
}

export const ConversionComponent = () => {
    const textAreaEle = useRef(null)
    const [text, setText] = useState('https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY?thing=other-thing')
    const [conversions, setConversions] = useState<StringInspectionType>({
        input: '',
        kinds: [],
    })
    useResizeElement(textAreaEle, [text])
    useEffect(() => {
        setConversions(stringConversion(text))
    }, [text])
    return (
        <>
            <Form.Control
                as="textarea"
                id="urlTextArea"
                ref={textAreaEle}
                autoFocus
                type="text"
                value={text}
                placeholder="Enter some text..."
                onChange={(e) => setText(e.target.value)}
            />
            <StringInspectionDisplay
                inspection={conversions} />
        </>
    )
}

export default ConversionComponent
