import PageBody from '#/components/structural/PageBody'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import './printPage.css'
import 'react-markdown-editor-lite/lib/index.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const mdParser = new MarkdownIt(/* Markdown-it options */)

const PrintPage = () => {
    return (
        <PageBody name="print-page" >
            <Card>
                <Card.Header className="position-relative ps-3">
                    Write some text, do some light formatting, and
                    <Button
                        size="sm"
                        variant="light"
                        className="ms-2 me-2 border"
                        onClick={() => window.print()}
                    > Print </Button>
                    it directly!! Too easy!!
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
