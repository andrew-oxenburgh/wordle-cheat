import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import ReactMarkdown from 'react-markdown'

import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import * as config from '#/config/config'
import InfoThing from '../InfoThing'
import { ButtonWithTooltip } from '../ButtonWithTooltip'
import { appMaxWidth } from './structural.config'

const buttonStyle = {
    fontSize: '1.5em',
    padding: '0 0.3em',
    borderRadius: '0.5em',
}

const useStyles = createUseStyles({
    pageHeader: {
        textAlign: 'center',
        textAnchor: 'middle',
        marginBottom: '1em',
        // paddingBottom: '0.5em',
        overflow: 'none',
        height: 'fit-content',
        position: 'relative',
        minWidth: '100%',
        ...appMaxWidth,
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
    name: string
    desc: string
}

const PageHeader: React.FC<Props> = ({ name }) => {
    const classes = useStyles()
    const [showInfo, setShowInfo] = useState(false)
    const header: config.PageInfoType = config.findPageInfo(name)
    const nextLink: string = config.findPageInfo(header.nextPage).link
    const prevLink: string = config.findPageInfo(header.prevPage).link
    const onClick = () => { setShowInfo(true) }

    const icon = (<FontAwesomeIcon color="tomato" fixedWidth icon={header.icon as IconProp} />)
    return (
        <div className={classes.pageHeader}>
            <div className={classes.backdrop}>
                <ButtonWithTooltip as="a" href={prevLink}
                    className={classes.leftArrow}
                    tipText="previous sketch">
                    &larr;
                </ButtonWithTooltip>
                <ButtonWithTooltip as="a" href={nextLink}
                    className={classes.rightArrow}
                    tipText="next sketch">
                    &rarr;
                </ButtonWithTooltip>
                <ButtonWithTooltip
                    className={classes.info}
                    onClick={onClick}
                    aria-label={'Help button'}
                    variant="warning"
                    id="info"
                    tipText="sketch info"
                >
                    &#9432;
                </ButtonWithTooltip>

            </div>
            <h3>{icon} {header.title}</h3>

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
