import React from 'react';
import Loader         from '../components/HOC/Loader';

const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

const NameList = ({name}) => {
  return (
    <h5>{name}</h5>
  )
};//

export default Loader('name')(NameList);