import PageBody from '#/components/structural/PageBody'
import MdEditor from 'react-markdown-editor-lite'

import MarkdownIt from 'markdown-it'

import './printPage.css'

import 'react-markdown-editor-lite/lib/index.css'

const mdParser = new MarkdownIt(/* Markdown-it options */)

const PrintPage = () => {
    return (
        <PageBody name="print-page" >
            <MdEditor
                style={{ height: '500px' }}
                renderHTML={(text) => mdParser.render(text)}
            />
        </PageBody>
    )
}

export default PrintPage
