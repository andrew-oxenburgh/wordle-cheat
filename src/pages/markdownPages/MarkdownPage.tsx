import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import 'mvp.css' 
import { Container } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
   markdownContainer: {
      height: 'auto',
      background: 'orange',
      position: 'relative',
      top: 0
   }
});


const MarkdownPage = () => {
   const { pageName } = useParams();
   const [content, setContent] = useState('');
   const classes = useStyles()

   useEffect(() => {
      const loadContent = async () => {
         try {
            const markdownContent = await import(`./content/${pageName}.md`);
            setContent(markdownContent.default);
         } catch (error) {
            setContent('# 404\nPage not found.');
         }
      };

      loadContent();
   }, [pageName]);

   return (
      <Container
      >
         <ReactMarkdown
            children={content}
         />
      </Container>
   );
};

export default MarkdownPage;
