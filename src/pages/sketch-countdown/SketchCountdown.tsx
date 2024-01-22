// PAGE: sketch-countdown

import { createUseStyles } from 'react-jss'
import CompareSketchWithImage from '#/components/CompareSketchWithImage'
import imgUrl from './sketch-countdown.png?inline'
import tpUrl from './toilet-paper.webp?inline'
import butterUrl from './butter.webp?inline'
import Stack from 'react-bootstrap/esm/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage as messageIcon } from '@fortawesome/free-solid-svg-icons/faMessage'

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
        imgUrl: tpUrl,
    },
    {
        title: 'Countdown Butter Salted',
        unitPrice: '500g $0.88 / 100g',
        price: ['$', '4', '39'],
        imgUrl: butterUrl,
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
        fontFamily: 'Open Sans, sans - serif',
    },
    product: {
        // background: 'orange',
        border: '1px solid black',
        width: '50%',
        height: '100%',
        position: 'relative',
    },
    header: {
        background: '#e10000',
        fontWeight: '800',
        fontSize: '0.9em',
        paddingLeft: '0.5em',
        paddingTop: '0.2em',
        color: 'white',
        border: '1px solid black',
        height: '2em',
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    main: {
        background: 'white',
        position: 'absolute',
        top: '2em',
        height: 'calc(100% - 4em - 2.6em)',
        width: 'calc(100% - 0.5em)',
        marginLeft: '0.5em',
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
        position: 'absolute',
        top: '6px',
        right: '6px',
    },
    img: {
        width: '73%',
        margin: '1em 0 0 1em',
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
        marginBottom: '1em',
    },
    price: {
        width: '100%',
    },
    priceDollarSign: {
        lineHeight: '1em',
        fontSize: '150%',
        display: 'inline-block',
        verticalAlign: 'top',
        paddingTop: '0.35em',
    },
    priceDollars: {
        fontSize: '300%',
        lineHeight: '1em',
        display: 'inline-block',
        verticalAlign: 'top',
    },
    priceCents: {
        fontSize: '150%',
        lineHeight: '1em',
        display: 'inline-block',
        verticalAlign: 'top',
        paddingTop: '0.25em',
    },
})

const ProuctHeader = () => {
    const classes = useStyles()
    return (
        <header className={classes.header}>
            LOW PRICE
        </header>
    )
}

const ProuctMain = ({ product }: { product: PriceDataType }) => {
    const classes = useStyles()
    return (
        <main className={classes.main}>
            <div className={classes.note}>
                <FontAwesomeIcon
                    icon={messageIcon}
                    size='2x'
                    color='green'
                />
            </div>
            <img className={classes.img} src={product.imgUrl} title={product.title} />
            <div className={classes.text}>
                <div className={classes.title}>{product.title}</div>
                <div className={classes.unitPrice}>{product.unitPrice}</div>
                <Price price={product.price} />
            </div>
        </main>
    )
}

const Price = ({ price }: { price: string[] }) => {
    const classes = useStyles()
    return (
        <div className={classes.price}>
            <span className={classes.priceDollarSign}>{price[0]}</span>
            <span className={classes.priceDollars}>{price[1]}</span>
            <span className={classes.priceCents}>{price[2]}</span>
        </div>
    )
}

const ProuctFooter = () => {
    const classes = useStyles()
    return (
        <header className={classes.footer}>
            Add to trolley
        </header>
    )
}

export const Countdown = () => {
    const classes = useStyles()
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
