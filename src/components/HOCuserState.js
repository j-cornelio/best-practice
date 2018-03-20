import React, { Component } from 'react';
import ManipulateState         		from '../components/HOC/ManipulateState';

//const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

class User extends Component{

  render(){
  	return (
	   <div>
	   	<p>{this.props.city}</p>
	   	<button onClick={this.props.onChange}>change</button>
	   </div>
	)
  }
};//

export default ManipulateState(User);