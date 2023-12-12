import useSWR from 'swr'

import Container from 'react-bootstrap/Container';

import InfoThing from '../../components/InfoThing'
import UnderConstructionThing from '../../components/UnderConstructionThing';
import PageHeader, { HeaderType } from '../../components/PageHeader'

import niwaExample from './niwa-dummy-data'

const help = (
   <InfoThing>
      Niwa Data
   </InfoThing>
)

// "lat" is required. 
// "long" must be larger than or equal to 160. 
// "long" must be less than or equal to -175.
const sumner = {
   lat: -43.5821,
   long: 172.7564
}

const debug = true

const fetchData = (path: string) => {
   const url = 'https://api.niwa.co.nz' + path
   return async () => {
      if (debug) {
         return niwaExample
      }
      const response = await fetch(url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'cache-control': 'max-age=600',
            'x-apikey': 'gKg3KIWByMdd6WZ1aXYnUa8QFIAW7FHa',
            'Authorization': 'Bearer gKg3KIWByMdd6WZ1aXYnUa8QFIAW7FHa'
         },
      });
      console.log('resp = ' + JSON.stringify(response))
      const data = await response.json();
      console.log('data = ' + JSON.stringify(data))
      return data;
   }
};

const header: HeaderType = {
   title: 'sumner tides',
   prev: {
      name: 'netflix by genre',
      link: '#/netflixGenre'
   },
   next: {
      name: 'draggy gamey',
      link: '#/draggy-gamey'
   },
}


const SumnerTides = () => {
   const url = `/tides/data?lat=${sumner.lat}&long=${sumner.long}`
   const { data, error, isLoading } = useSWR(url, fetchData(url))

   if (error) return <div>failed to load</div>
   if (isLoading) return <div>loading...</div>

   return (
      <Container>
         {help}
         <UnderConstructionThing/>
         <PageHeader header={header} />
         <hr />
         <img src="/public/niwa-dummy-chart.svg" />
         {JSON.stringify(data, null, 4)}
      </Container>
   );
};

export default SumnerTides;
