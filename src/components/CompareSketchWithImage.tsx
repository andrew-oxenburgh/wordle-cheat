import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'
import { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    card: {
        maxWidth: '50%',
        margin: 'auto',
        marginTop: 0,
    },
    cardHeader: {
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '150%',
    },
    cardBody: {
        padding: 0,
    },
})

type CompareChildWithImageProps = {
    img: string
    children: ReactNode
    width: number | string
    height: number | string
    hideImage?: boolean
    name: string
    inspirationUrl: string
}

export const CompareSketchWithImage = ({
    img, children, width, height,
    hideImage = false,
    inspirationUrl, name }: CompareChildWithImageProps) => {
    const classes = useStyles()
    const cardStyle = {
        width,
        minWidth: width,
        maxWidth: width,
    }
    const cardBodyStyle = {
        width,
        minWidth: width,
        maxWidth: width,
        height,
    }
    return (
        <PageBody name={name}>
            <a href={inspirationUrl} target="_blank" rel="noreferrer">
                Inspiration
            </a>
            <Stack direction="horizontal" gap={3}>
                <Card
                    className={classes.card}
                    style={cardStyle}
                >
                    <Card.Header className={classes.cardHeader}>
                        My Copy
                    </Card.Header>
                    <Card.Body
                        className={classes.cardBody}
                        style={cardBodyStyle}
                    >
                        {children}
                    </Card.Body>
                </Card>

                {!hideImage &&
                    <Card
                        className={classes.card}
                        style={cardStyle}
                    >
                        <Card.Header className={classes.cardHeader}>
                            The Original
                        </Card.Header>
                        <Card.Body
                            className={classes.cardBody}
                            style={cardBodyStyle}
                        >
                            <Image width="100%" src={img} />
                        </Card.Body>
                    </Card>
                }
            </Stack>
        </PageBody>
    )
}

export default CompareSketchWithImage
