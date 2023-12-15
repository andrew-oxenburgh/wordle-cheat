import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown'
import PageBody from '../../components/PageBody'

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
      <PageBody name="blogs" >
         <ReactMarkdown
            children={content}
         />
      </PageBody>
   );
};

export default MarkdownPage;
