import React 			from 'react';
import HasTimeouts      from './HOC/medium/HasTimeouts';

//const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

const TimeShow = ({addTimeout, clearTimeouts}) => {
  return (
    <h4 onClick={addTimeout(() => console.log('works!'), 2222)}>Time</h4>
  )
}

export default HasTimeouts(TimeShow);