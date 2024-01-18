import { createUseStyles } from 'react-jss'
import * as R from 'ramda'
import CompareSketchWithImage from '#/components/CompareSketchWithImage'
import imgUrl from './sketch-countdown.png'
import tpUrl from "./toilet-paper.webp"
import butterUrl from "./butter.webp"
import Stack from 'react-bootstrap/esm/Stack'

const width = '475px'
const height = '457px'

type PriceDataType = {
    title: string
    unitPrice: string
    price: string[]
    imgUrl: string
}

const priceData: PriceDataType[] = [
    {
        title: 'Essentials Toilet Paper 12Pk White 2ply',
        unitPrice: '$0.14 / 100ss',
        price: ['$', '3', '00'],
        imgUrl: tpUrl
    },
    {
        title: 'Countdown Butter Salted',
        unitPrice: '500g $0.88 / 100g',
        price: ['$', '4', '39'],
        imgUrl: butterUrl
    },
]

export const useStyles = createUseStyles({
    countdown: {
        background: 'white',
        color: 'black',
        maxWidth: width,
        maxHeight: height,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        fontFamily: 'Helvetica, sans-serif',
    },
    product: {
        background: 'orange',
        border: '1px solid black',
        width: '50%',
        height: '100%',
        position: 'relative',
    },
    header: {
        background: 'red',
        fontWeight: '800',
        paddingLeft: '0.5em',
        paddingTop: '0.2em',
        color: 'white',
        border: '1px solid black',
        height: '2em',
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    main: {
        background: 'white',
        border: 'solid 5px yellow',
        position: 'absolute',
        top: '2em',
        height: 'calc(100% - 4em - 2.6em)',
        width: '100%',
    },
    footer: {
        background: 'green',
        color: 'white',
        border: '1em solid white',
        padding: '0.5em 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
    },
    note: {
        width: '32px',
        height: '32px',
        background: 'pink',
        position: 'absolute',
        top: '0',
        right: '0',
    },
    img: {
        width: '78%',
        margin: '1em 0 0 1em'
    },
    text: {
        height: '45%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginLeft: '0.5em',
        fontSize: '1em',
    },
    title: {
        marginBottom: '1em',
    },
    unitPrice: {
        marginBottom: '1em'
    },
    price: {
        border: '5px solid black',
        width: '100%',
        height: '4em',
        verticalAlign: 'top',
        position: 'relative'
    },
    priceDollarSign: {
        fontSize: '150%',
        position: 'absolute',
        top: 0,
    },
    priceDollars: {
        position: 'absolute',
        top: 0,
        fontSize: '300%',
    },
    priceCents: {
        position: 'absolute',
        top: 0,
        fontSize: '150%',
    },
})

function ProuctHeader() {
    const classes = useStyles()
    return (
        <header className={classes.header}>
            Low Price
        </header>
    )
}

function ProuctMain({ product }: { product: PriceDataType }) {
    const classes = useStyles()
    return (
        <main className={classes.main}>
            <div className={classes.note} />
            <img className={classes.img} src={product.imgUrl} alt={product.title} />
            <div className={classes.text}>
                <div className={classes.title}>{product.title}</div>
                <div className={classes.unitPrice}>{product.unitPrice}</div>
                <Price price={product.price} />
            </div>
        </main>
    )
}

function Price({ price }: { price: string[] }) {
    const classes = useStyles()
    return (
        <div className={classes.price}>
            <span className={classes.priceDollarSign}>{price[0]}</span>
            <span className={classes.priceDollars}>{price[1]}</span>
            <span className={classes.priceCents}>{price[2]}</span>
        </div>
    )
}

function ProuctFooter() {
    const classes = useStyles()
    return (
        <header className={classes.footer}>
            Add to trolley
        </header>
    )
}

export const Countdown = () => {
    const classes = useStyles()
    const mapIndexed = R.addIndex(R.map)
    return (
        <Stack direction='horizontal' gap={3} className={classes.countdown}>
            <span className={classes.product}>
                <ProuctHeader />
                <ProuctMain product={priceData[0]} />
                <ProuctFooter />
            </span>
            <span className={classes.product}>
                <ProuctHeader />
                <ProuctMain product={priceData[1]} />
                <ProuctFooter />
            </span>
        </Stack>
    )
}

const SketchCountdown = () => {
    return (
        <CompareSketchWithImage
            img={imgUrl}
            width={width}
            height={height}
            name="sketch-countdown"
            inspirationUrl="https://www.countdown.co.nz/"
        >
            <Countdown />
        </CompareSketchWithImage>
    )
}

export default SketchCountdown
