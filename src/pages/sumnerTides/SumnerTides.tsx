// filename: src/pages/SumnerTides.tsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import useSWR from 'swr'

import niwaExample from './niwa-dummy-data'


// "lat" is required. 
// "long" must be larger than or equal to 160. 
// "long" must be less than or equal to -175.
const sumner = {
   lat: -43.5821,
   long: 172.7564
}

const debug = true

// Fetch data from a URL with credentials header
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


const SumnerTides = () => {
   const url = `/tides/data?lat=${sumner.lat}&long=${sumner.long}`
   const { data, error, isLoading } = useSWR(url, fetchData(url))

   if (error) return <div>failed to load</div>
   if (isLoading) return <div>loading...</div>

   return (
      <Container>
         <h1>Sumner Tides Information</h1>
         <hr />
         <img src="/public/niwa-dummy-chart.svg" />
         {JSON.stringify(data, null, 4)}
      </Container>
   );
};

export default SumnerTides;
