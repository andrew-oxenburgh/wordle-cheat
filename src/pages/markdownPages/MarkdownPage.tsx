import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import InfoThing from '../../components/InfoThing'

import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown'
import PageHeader, { HeaderType } from '../../components/PageHeader'

const help = (
   <InfoThing>
      <h3>Markdown Pages</h3>
      This is my blog posting stuff using react-markdown and dynamic links
   </InfoThing>
)

const header: HeaderType = {
   title: 'Blogs',
   prev: {
      name: 'password generator',
      link: '#/password-generator'
   },
   next: {
      name: 'home',
      link: '#/'
   },
}




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
         <PageHeader header={header} />

         <ReactMarkdown
            children={content}
         />
      </Container>
   );
};

export default MarkdownPage;
