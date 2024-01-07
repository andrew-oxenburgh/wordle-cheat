import { useState, useEffect, Fragment } from 'react'

import Form from 'react-bootstrap/Form'

import { stringConversion } from './lib/textUtils'
import { StringInspectionType } from './lib/textHelper.types'
import CopyableText from '../../components/CopyableText'

type StringInspectionProps = {
    inspection: StringInspectionType
}

const StringInspectionDisplay: React.FC<StringInspectionProps> = ({ inspection }) => {
    return (
        <>
            {inspection.kinds.map((kind) => (
                <Fragment key={kind.kind}>
                    <div>{kind.kind} Conversions</div>
                    <div >
                        {kind.conversions.map((conversion) => (
                            <CopyableText text={conversion.value} key={conversion.name} />
                        ))}
                    </div>
                </Fragment>
            ))
            }
        </ >
    )
}

export const ConversionComponent = () => {
    const [text, setText] = useState('https://open.spotify.com/track/7FpBQ067pHB67deawpbbcY?thing=other-thing')
    const [conversions, setConversions] = useState<StringInspectionType>({
        input: '',
        kinds: [],
    })
    useEffect(() => {
        setConversions(stringConversion(text))
    }, [text])
    return (
        <>
            <Form.Control
                as="textarea"
                autoFocus
                type="text"
                value={text}
                placeholder="Enter a URL"

                onChange={(e) => setText(e.target.value)} />
            <StringInspectionDisplay inspection={conversions} />
        </>
    )
}

export default ConversionComponent
