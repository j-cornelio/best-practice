import React, { useState }   			from 'react';

const MaterialPage = () => {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <p>count {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
} 
  

export default MaterialPage;