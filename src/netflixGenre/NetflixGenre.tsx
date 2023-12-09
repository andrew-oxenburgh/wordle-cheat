import React from 'react';
import { Container } from 'react-bootstrap';
import genres from './genres'

const NetflixGenre = () => {
   return (
      <Container>
         <h1>Netflix Genre</h1>
         {Object.entries(genres).map(([category, genreCodes]) => (
            <div key={category}>
               <h2>{category}</h2>
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
            </div>
         ))}
      </Container>
   );
};

export default NetflixGenre;
