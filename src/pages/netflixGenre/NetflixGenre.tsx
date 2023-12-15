import Accordion from 'react-bootstrap/Accordion';

import InfoThing from '../../components/InfoThing'
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
import genres from './genres'

const help = (
   <InfoThing height="60%">
      <p>
         Netflix has hundres of categories, a lot of which it doesn't show you,
         or, often are just empty. There's some gold here though, so I wrote this little app
         to help you choose.
      </p>
      <p>
         It's been helpfully further categorized, but check this out.
      </p>
      <h4>Notes:</h4>
      <ul>
         <li>
            Uses a dynamic import. The config file is a teeny big (6k), so just chunking it up.
         </li>
      </ul>
      <h4>Thanks To:</h4>
      <ul>
         <li>
            <a target="_blank" href="https://github.com/vrachieru/netflix-categories/blob//categories.json">
               Victor Rachieru for his categorizations
            </a>
         </li>
      </ul>
   </InfoThing>
)

const NetflixGenre = () => {
   return (
      <PageBody>
         {help}
         <PageHeader name="netflix-genre" />
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
      </PageBody>
   );
};

export default NetflixGenre;
