import { createUseStyles } from 'react-jss'
import * as R from 'ramda'
import CompareSketchWithImage from '../../components/CompareSketchWithImage'
import imgUrl from './the-onion-snippet-1.png'

const hrColor = 'rgb(200,200,200)'
const sketchBackgroundColor = 'rgba(34, 34, 34, 0.04)'
const headlineFontColorHover = 'rgb(34, 34, 34)'
const fontColor = 'black'

const width = '319px'
const height = '552px'

export const useStyles = createUseStyles({
    theOnion: {
        fontFamily: 'EB Garamond, serif',
        background: sketchBackgroundColor,
        color: fontColor,
        maxWidth: width,
        maxHeight: height,
        overflow: 'hidden',
        margin: '0.5em',
    },
    title: {
        display: 'inline-block',
        fontSize: '1.8em',
        fontWeight: 'bolder',
        paddingTop: '0.2em',
        verticalAlign: 'bottom',
        marginBottom: '5px',
        '&::after': {
            content: '"------------"',
            maxHeight: 0,
            marginLeft: '0.5em',
            overflow: 'hidden',
            overflowBlock: 'hidden',
            color: 'green',
        },
    },
    headline: {
        fontSize: '1.13em',
        fontWeight: 'bold',
        marginBottom: '3px',
        lineHeight: '19px',
        '&:hover': {
            color: headlineFontColorHover,
            cursor: 'pointer',
        },
    },
    hr: {
        borderColor: hrColor,
        margin: '0.91em',
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
            <span className={classes.title}>Trending</span>
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
        <CompareSketchWithImage
            img={imgUrl}
            width={width}
            height={height}
        >
            <TheOnion />
        </CompareSketchWithImage>
    )
}

export default ImitationOnion
