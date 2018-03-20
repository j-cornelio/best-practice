import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mouse extends Component {
  static propTypes = {
    render: PropTypes.func
  }
  state = { x: 0, y: 0 }

handleMove = (e) => {
	this.setState({
		x: e.clientX,
		y: e.clientY
	})
}

	render(){
		return (
			<div onMouseMove={this.handleMove}>
				{this.props.render(this.state)}
			</div> 
		)
	}
}//

const RenderMe = () => (
	<Mouse render={ ({ x, y }) => {
		return <h1>move: {x}, {y}</h1>
	}} />
)

export default RenderMe;