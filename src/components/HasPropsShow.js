import React, { Component } from 'react';
import HasProps         	from './HOC/medium/HasProps';

//const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

const HasPropsShow = ({sample}) => {
	console.log('PROPS: ', sample)
  return (
    <h4>{sample}</h4>
  )
}

export default HasProps({sample: 'Sample Prop'})(HasPropsShow);