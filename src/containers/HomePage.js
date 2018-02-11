import React      		from 'react';
import Composition   	from './Composition';

const Home = ({match}) => 
  <div>
    <h3>{match.params.page}</h3>
    <Composition />
  </div>

export default Home;