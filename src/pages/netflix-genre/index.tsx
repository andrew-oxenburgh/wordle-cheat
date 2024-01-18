import Accordion from 'react-bootstrap/Accordion'

import PageBody from '#/components/structural/PageBody'
import genres from './genres'
import Card from 'react-bootstrap/Card'

const NetflixGenre = () => {
    return (
        <PageBody name="netflix-genre">
            <Card style={{ maxWidth: '30em', margin: 'auto' }}>
                <Accordion defaultActiveKey="0" flush>
                    {Object.entries(genres).map(([category, genreCodes]) => (
                        <Accordion.Item eventKey={category} key={category}>
                            <Accordion.Header>{category}</Accordion.Header>
                            <Accordion.Body>

                                <table className='table table-striped' width="80%">
                                    <thead>
                                        <tr>
                                            <th>Genre</th>
                                            <th>Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(genreCodes).map(([genre, code]) => (
                                            <tr key={genre}>
                                                <td>
                                                    <a target="_blank"
                                                        href={'https://www.netflix.com/browse/genre/' + code}
                                                        rel="noopener noreferrer"
                                                    >
                                                        {genre}
                                                    </a>
                                                </td>
                                                <td width="10%">{code}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Card>
        </PageBody >
    )
}

export default NetflixGenre
