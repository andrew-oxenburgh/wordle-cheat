import { ReactNode } from 'react';

import Container from 'react-bootstrap/Container';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
   container: {
      backgroundColor: '#eae4ff',
      alignContent: 'center',
      justifyContent: 'center',
      height: '100%',
      maxWidth: '50em',
      cursor: 'default'
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