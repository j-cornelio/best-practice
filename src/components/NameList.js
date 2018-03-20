import React, { Component } from 'react';
import Loader         from '../components/HOC/Loader';

//const data = [{name:'vlad'}];
//{data.map((el, idx) => <p key={el.name}>{el.name}</p>)}

class NameList extends Component{
	state = { last: 'cornelio' }

  render(){
  	const { name } = this.props;
  	return (
	   <h5>{name} {this.state.last}</h5>
	)
  }
};//

export default Loader('name')(NameList);