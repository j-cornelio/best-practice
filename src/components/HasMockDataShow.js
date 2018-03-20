import React, { Component } from 'react';
import HasTimeouts         	from './HOC/medium/HasTimeouts';

//const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

const TimeShow = () => {
  return (
    <h4>Time</h4>
  )
}

export default HasTimeouts(TimeShow)