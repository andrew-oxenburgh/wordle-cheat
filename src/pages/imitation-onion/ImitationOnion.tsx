import PageBody from '#/components/structural/PageBody'
import Card from 'react-bootstrap/esm/Card'
import Image from 'react-bootstrap/esm/Image'
import Stack from 'react-bootstrap/esm/Stack'
import { createUseStyles } from 'react-jss'
import imgUrl from './the-onion-snippet-1.png'
import * as R from 'ramda'

const useStyles = createUseStyles({
    fraud: {
        fontFamily: 'EB Garamond, serif',
        backgroundColor: 'rgba(34, 34, 34, 0.04)',
        width: '100%',
        color: 'black',

    },
    title: {
        fontSize: '2.1em',
        fontWeight: 'bolder',
        paddingTop: '0.2em',
        margin: '0 0 0.8em 0.4em',
        '&::after': {
            content: '""',
            marginLeft: '1em',
            width: '30%',
            color: 'green',
            display: 'inline-block',
            borderTop: 'solid green 3px'
        }
    },
    headline: {
        margin: '0 0 0 0.4em',
        fontSize: '1.50em',
        marginBottom: '3px',
        lineHeight: '33px'
    },
    cardBody: {
        padding: 0,
        transform: 'scale(0.95)'

    },
    hr: {
        margin: '0.91em',
    },
    cardHeader: {
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '150%',
    }
})

const headlines = [
    "Nation Settles For Jimmy John's",
    "Teen Mom Wants Another One",
    "No Scan Do",
    "Mannequin In White Wedding Dress Clearly Not Virgin ",
    "Study Finds Children Of Divorce Better Prepared For Life's Relentless Misery ",
    "Gen Z Explains Why They Are 'Resetting' Their Virginity ",
    "Millions Watch Emmys For Rare Glimpse At TV Actors ",
    "Dog Urged To Pay Attention While Dog on TV ",
]

const Fraud = () => {
    const classes = useStyles()
    const mapIndexed = R.addIndex(R.map)
    return (
        <div className={classes.fraud}>
            <h6 className={classes.title}>Trending</h6>
            {
                mapIndexed((v: string, ndx: number) => {
                    const hasHr = (ndx !== headlines.length)
                    return (
                        <>
                            <p className={classes.headline}>{v} </p>
                            {hasHr && <hr className={classes.hr} />}
                        </>
                    )

                }, headlines)
            }
        </div >
    )
}

const ImitationOnion = () => {
    const classes = useStyles()
    return (
        <PageBody name="imitation-onion">
            <h5>Doesn't work so well on a mobile.</h5>
            <Stack direction="horizontal" gap={3}>
                <Card style={{ maxWidth: '50%', minWidth: '395px', margin: 'auto', marginTop: 0 }}>
                    <Card.Header className={classes.cardHeader} >
                        My Copy
                    </Card.Header>
                    <Card.Body className={classes.cardBody}>
                        <Fraud />
                    </Card.Body>
                </Card >
                <Card style={{ width: '50%', minWidth: '395px', margin: 'auto', marginTop: 0 }}>
                    <Card.Header className={classes.cardHeader}>
                        The Original
                    </Card.Header>
                    <Card.Body className={classes.cardBody}>
                        <Image width="100%" src={imgUrl} />
                    </Card.Body>

                </Card >
            </Stack>
        </PageBody>
    )
}

export default ImitationOnion