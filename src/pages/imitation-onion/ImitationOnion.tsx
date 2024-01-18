import { createUseStyles } from 'react-jss'
import * as R from 'ramda'
import CompareSketchWithImage from '../../components/CompareSketchWithImage'
import imgUrl from './the-onion-snippet-1.png'

const hrColor = 'rgb(200,200,200)'
const sketchBackgroundColor = 'rgba(34, 34, 34, 0.04)'
const headlineFontColor_hover = 'rgb(34, 34, 34)'
const fontColor = 'black'

export const useStyles = createUseStyles({
    theOnion: {
        fontFamily: 'EB Garamond, serif',
        background: sketchBackgroundColor,
        color: fontColor,
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
            borderTop: 'solid green 3px',
        },
    },
    headline: {
        margin: '0 0 0 0.4em',
        fontSize: '1.50em',
        marginBottom: '3px',
        lineHeight: '33px',
        '&:hover': {
            color: headlineFontColor_hover,
            cursor: 'pointer'
        }
    },
    cardBody: {
        padding: 0,
    },
    hr: {
        borderColor: hrColor,
        margin: '0.91em',
    },
    cardHeader: {
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '150%',
    },
})

const headlines = [
    'Nation Settles For Jimmy John\'s',
    'Teen Mom Wants Another One',
    'No Scan Do',
    'Mannequin In White Wedding Dress Clearly Not Virgin ',
    'Study Finds Children Of Divorce Better Prepared For Life\'s Relentless Misery ',
    'Gen Z Explains Why They Are \'Resetting\' Their Virginity ',
    'Millions Watch Emmys For Rare Glimpse At TV Actors ',
    'Dog Urged To Pay Attention While Dog on TV ',
]

export const TheOnion = () => {
    const classes = useStyles()
    const mapIndexed = R.addIndex(R.map)
    return (
        <div className={classes.theOnion}>
            <h6 className={classes.title}>Trending</h6>
            {
                mapIndexed((v: string, ndx: number) => {
                    const hasHr = (ndx !== headlines.length)
                    return (
                        <div key={v}>
                            <p className={classes.headline}>{v} </p>
                            {hasHr && <hr className={classes.hr} />}
                        </div>
                    )

                }, headlines)
            }
        </div >
    )
}

const ImitationOnion = () => {
    return (
        <CompareSketchWithImage img={imgUrl}>
            <TheOnion />
        </CompareSketchWithImage>
    )
}

export default ImitationOnion
