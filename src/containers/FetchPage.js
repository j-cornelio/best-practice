import React     	  from 'react';
import Weather      	from '../components/fetch/Weather';
import Weather2      	from '../components/fetch/Weather-async';

const FetchPage = () => (
  <div> 
  	<Weather />
  	<Weather2 />
  </div>
);

export default FetchPage;