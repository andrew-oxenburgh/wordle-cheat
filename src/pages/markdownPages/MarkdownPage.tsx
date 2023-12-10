import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import Container from 'react-bootstrap/Container';
import InfoThing from '../../components/InfoThing'

const help = (
   <InfoThing>
      Markdown info (well, blogs!!)
   </InfoThing>
)


const MarkdownPage = () => {
   const { pageName } = useParams();
   const [content, setContent] = useState('');

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
         {help}
         <ReactMarkdown
            children={content}
         />
      </Container>
   );
};

export default MarkdownPage;
