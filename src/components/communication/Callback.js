import React, { Component }      from 'react';
import PropTypes from 'prop-types';

const DATA = [{name:'aaa', id:0}, {name:'bbb', id:1}, {name:'ccc', id:2}];

const List = ({name, id, handleSend}) => <li onClick={handleSend.bind(null, id)}>{name}</li>//

List.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  handleSend: PropTypes.func
};

class MyChild extends Component {
	static propTypes = {
	  myFunc: PropTypes.func.isRequired,
	  data: PropTypes.arrayOf(
	  	PropTypes.shape({
		  	name: PropTypes.string,
		  	id: PropTypes.number
	  })).isRequired
	}

	state = {name: 'vlad'};

  handleSend = (id) => this.props.myFunc(id);

  render(){
  	let { data } = this.props;
  	return (
		<ul>
			{
				data.map(el => 
					<List key={el.id} handleSend={this.handleSend} {...el} />)
			}
		</ul>
  	)
  }
}//
// 	data.map(el => <li onClick={this.handleSend.bind(this, el.id)} key={el.id}>{el.name}</li>)


class Callback extends Component{
	handleChildFunc(id){
		console.log('%c ID --> ', 'background: green; color: lime', id);
	} 
	render(){
		return (
			<div>
				<p>Callback as prop - send data up from child to parent.  Parent passes func down to the child. The child can use that prop func to communicate with its parent.</p>
				<p>click and see console</p>
				<MyChild data={DATA} myFunc={this.handleChildFunc} />
			</div>
		)
	}
}

export default Callback;