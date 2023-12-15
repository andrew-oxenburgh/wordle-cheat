import useSWR from 'swr'

import Card from 'react-bootstrap/Card';

import InfoThing from '../../components/InfoThing'
import UnderConstructionThing from '../../components/UnderConstructionThing';
import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
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
            'x-apikey': 'XXXXXXX',

            'Authorization': 'Bearer XXXXXXXX'
         },
      });
      const data = await response.json();
      return data;
   }
};

const SumnerTides = () => {
   const url = `/tides/data?lat=${sumner.lat}&long=${sumner.long}`
   const { data, error, isLoading } = useSWR(url, fetchData(url))

   if (error) return <div>failed to load</div>
   if (isLoading) return <div>loading...</div>

   return (
      <PageBody>
         {help}
         <UnderConstructionThing />
         <PageHeader name="sumner-tides" />
         <img src="/public/niwa-dummy-chart.svg" style={{ objectFit: 'cover', width: '100%' }} />
         {JSON.stringify(data, null, 4)}
      </PageBody>
   );
};

export default SumnerTides;
