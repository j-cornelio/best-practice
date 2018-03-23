import React, { Component } from 'react';
import Manipulate         		from '../components/HOC/ManipulateProps';

//const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

class User extends Component{
  render(){
  	const { user } = this.props;
  	return (
	   <h5>{user}</h5>
	)
  }
};//
//composition is better than inheritance.  where is the composition happening.  where composing new behavior?  

export default Manipulate(User); // right here

/*
doing it statically, outside the render function.  at the module level scope.  at component creation time.

react flow is very dynamic

HOC components do not compose dynamically.  you compose dem once outside render, all dynamic composition happens inside render  
*/