import { createUseStyles } from 'react-jss'
import Button from 'react-bootstrap/Button'
import * as config from '../../config/config'
import InfoThing from '../InfoThing'
import Container from 'react-bootstrap/esm/Container'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'

const buttonStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    padding: '0 0.3em',
    borderRadius: '2em',
}

const useStyles = createUseStyles({
    pageHeader: {
        textAlign: 'center',
        textAnchor: 'middle',
        maxWidth: '30em',
        marginBottom: '1em',
        // paddingBottom: '0.5em',
        overflow: 'none',
        height: 'fit-content',
        position: 'relative',
    },
    backdrop: {
        width: '100%',
        position: 'absolute',
    },
    leftArrow: {
        float: 'left',
        ...buttonStyle,
    },
    rightArrow: {
        float: 'right',
        ...buttonStyle,
    },
    info: {
        float: 'right',
        ...buttonStyle,
        marginRight: '0.2em',
    },
    title: {
        color: 'black',
        fontSize: '2em',
    },
})

interface Props {
    name: string,
    desc: string
}

const PageHeader: React.FC<Props> = ({ name, desc }) => {
    const classes = useStyles()
    const [showInfo, setShowInfo] = useState(false)
    const header: config.PageInfoType = config.findPageInfo(name)
    const nextLink: string = config.findPageInfo(header.nextPage).link
    const prevLink: string = config.findPageInfo(header.prevPage).link
    const onClick = () => { setShowInfo(true) }
    return (
        <div className={classes.pageHeader}>
            <div className={classes.backdrop}>
                <Button as="a" href={prevLink}
                    className={classes.leftArrow}>
                    &larr;
                </Button>
                <Button as="a" href={nextLink}
                    className={classes.rightArrow}>
                    &rarr;
                </Button>
                <Button
                    className={classes.info}
                    onClick={onClick}
                    aria-label={'Help button'}
                    variant="warning"
                    id="info"
                >
                    &#9432;

                </Button>

            </div>
            <h3>{header.title}</h3>

            <InfoThing height={header.height} show={showInfo} onHide={() => {
                setShowInfo(false)
            }}>
                <Container>
                    <ReactMarkdown
                        children={header.longDesc}
                    />
                </Container>
            </InfoThing>

        </div>
    )
}

export default PageHeader
