import PageBody from '#/components/structural/PageBody'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import './printPage.css'
import 'react-markdown-editor-lite/lib/index.css'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'

const mdParser = new MarkdownIt(/* Markdown-it options */)

const PrintPage = () => {
    return (
        <PageBody name="print-page" >
            <Card>
                <Card.Header>
                    Write some markup and print it directly
                    <Button
                        onClick={() => window.print()}
                    >Print</Button>
                </Card.Header>
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={(text) => mdParser.render(text)}
                />
            </Card>
        </PageBody>
    )
}

export default PrintPage
