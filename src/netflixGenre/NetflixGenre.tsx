import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import genres from './genres'

const NetflixGenre = () => {
   return (
      <Container>
         <h1>Netflix Genre</h1>
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
                                       href={"https://www.netflix.com/browse/genre/" + code}
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
      </Container>
   );
};

export default NetflixGenre;