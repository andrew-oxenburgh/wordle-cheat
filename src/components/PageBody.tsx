import React, { ReactNode } from 'react';

import Container from 'react-bootstrap/Container';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
   container: {
      color: 'red',
      backgroundColor: '#eae4ff',
      alignContent: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: 0,
      margin: 'auto'
      // add more styles here
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