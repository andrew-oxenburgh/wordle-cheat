import { useState, useEffect, Fragment } from 'react'

import { stringConversion } from './lib/textUtils'
import { StringInspectionType } from './lib/textHelper.types'
import CopyableText from '../../components/CopyableText'

import { createUseStyles } from 'react-jss'
import Form from 'react-bootstrap/Form'

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
})

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
    const classes = useStyles()
    return (
        <>
            <Form.Control
                as="input"
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
