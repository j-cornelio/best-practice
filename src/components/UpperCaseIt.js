import React from 'react';
import UpperCase        from '../components/HOC/dave_caddia/UpperCase';

//const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

const User = ({ user }) => (
   <h5>{user}</h5>
);//

export default UpperCase('user')(User);