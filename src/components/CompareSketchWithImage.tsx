import PageBody from '#/components/structural/PageBody';
import Card from 'react-bootstrap/esm/Card';
import Image from 'react-bootstrap/esm/Image';
import Stack from 'react-bootstrap/esm/Stack';
import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss'

type CompareChildWithImageProps = {
    img: string,
    children: ReactNode
}

export const useStyles = createUseStyles({
    card: {
        maxWidth: '50%',
        minWidth: '395px',
        margin: 'auto',
        marginTop: 0
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

export const CompareSketchWithImage = ({ img, children }: CompareChildWithImageProps) => {
    const classes = useStyles();
    return (
        <PageBody name="imitation-onion">
            <h5>Doesn't work so well on a mobile.</h5>
            <Stack direction="horizontal" gap={3}>
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                        My Copy
                    </Card.Header>
                    <Card.Body className={classes.cardBody}>
                        {children}
                    </Card.Body>
                </Card>
                <Card style={{ width: '50%', minWidth: '395px', margin: 'auto', marginTop: 0 }}>
                    <Card.Header className={classes.cardHeader}>
                        The Original
                    </Card.Header>
                    <Card.Body className={classes.cardBody}>
                        <Image width="100%" src={img} />
                    </Card.Body>
                </Card>
            </Stack>
        </PageBody>
    );
};

export default CompareSketchWithImage
