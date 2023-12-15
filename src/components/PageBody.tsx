import { ReactNode } from 'react';

import Container from 'react-bootstrap/Container';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
   container: {
      backgroundColor: 'white',
      borderRadius: '1em',
      border: '1px solid black',
      margin: '0 auto 4em auto',
      alignContent: 'center',
      justifyContent: 'center',
      height: '100%',
      maxWidth: 'var(--thing-width)',
      cursor: 'default',
      padding: '1em',
      overflow: 'none',
   },
});

interface ChildrenProps {
   children?: ReactNode
}

const PageBody: React.FC<ChildrenProps> = ({ children }) => {
   const classes = useStyles();
   return (
      <Container className={classes.container}>
         {children}
      </Container>
   );
};

export default PageBody;