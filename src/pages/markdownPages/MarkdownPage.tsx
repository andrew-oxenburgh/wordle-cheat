import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import InfoThing from '../../components/InfoThing'

import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown'
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'

const help = (
   <InfoThing>
      <h3>Markdown Pages</h3>
      This is my blog posting stuff using react-markdown and dynamic links
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
      <PageBody>
         {help}
         <PageHeader name="blogs" />
         <ReactMarkdown
            children={content}
         />
      </PageBody>
   );
};

export default MarkdownPage;
