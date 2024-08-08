import PageBody from '#/components/structural/PageBody'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { itemPositions, warmerWidth } from './items.config'
import { listOfBakes } from './warmer-schema.utils'
import { ItemTray } from './ItemTray'
import { useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime'
import Button from 'react-bootstrap/Button'
import * as R from 'ramda'
import { useState } from 'react'
import { BakeItems } from './item.props'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import BakesDropdown from './BakesDropdown'
import PickList from './PickList'

const WarmerScheme: React.FC = () => {
    const selectedBake = useSignal(listOfBakes()[0])
    useSignals()
    useSignalEffect(() => { })
    const [showPickList, setShowPickList] = useState<boolean>(false)
    const [showTrayDetails, setShowTrayDetails] = useState<boolean>(false)

    const [itemCounts, setItemCounts] = useState<BakeItems>({})

    const setItemCount = (itemId: string) => {
        return (inc: number) => {
            const newCounts: BakeItems = { ...itemCounts }
            if (!newCounts[itemId]) {
                newCounts[itemId] = 0
            }
            newCounts[itemId] = newCounts[itemId] + inc

            // function to subtract newCounts from picklist

            setItemCounts(newCounts)
            // eslint-disable-next-line no-console
            console.log(newCounts)
        }
    }

    const warmerConfig = R.splitEvery(warmerWidth, itemPositions)
    return (
        <PageBody name="warmer-scheme">
            <Container className='m-0'>
                <Button onClick={() => {
                    setShowPickList(!showPickList)
                }}>toggle pick list</Button>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="show deatils"
                    onChange={(evt) => {
                        setShowTrayDetails(evt.target.checked)
                    }}
                />
                {
                    showPickList ? (<PickList items={itemCounts}/>) :
                        (
                            <>
                                <BakesDropdown selectedBake={selectedBake} />
                                {warmerConfig.map((row: string[], rowIndex: number) => (
                                    <Row key={rowIndex}>
                                        {row.map((item: string, colIndex) => (
                                            <Col key={colIndex} className="p-1">
                                                {
                                                    <ItemTray
                                                        showTrayDetails={showTrayDetails}
                                                        itemId={item}
                                                        selectedBake={selectedBake.value}
                                                        setItemCount={setItemCount(item)}
                                                        counter={itemCounts[item] || 0}
                                                    />
                                                }
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </>
                        )
                }

            </Container>
        </PageBody >
    )
}

export default WarmerScheme
