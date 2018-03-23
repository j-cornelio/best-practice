import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends Component{
	renderChildren = () => {
		return React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				name: this.props.name
			})
		});
	}

	render(){
		return (
			<div>
				{this.renderChildren()}
			</div> 
		)
	}
}//

const RadioButton = ({ children, name }) => (
	<div>
		<label>
			<input type="radio" name={name} value={children.toLowerCase()} />
			{children}
		</label>
	</div>
)

const RenderMe = () => (
	<RadioGroup name="contact">
		<RadioButton>Email</RadioButton>
		<RadioButton>Phone</RadioButton>
		<RadioButton>Mail</RadioButton>
	</RadioGroup>
)

export default RenderMe;

RadioGroup.propTypes = {
	children: PropTypes.array.isRequired
}

RadioButton.propTypes = {
	children: PropTypes.string.isRequired,
	name: PropTypes.string
}