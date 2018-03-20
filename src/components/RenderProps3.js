import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scroll extends Component{
	static propTypes = {
		render: PropTypes.func
	}

	state = { y: 0 }

	handleWindowScroll = (e) => {
		this.setState( (prevState) => {
			return {
				y: window.scrollY
			}
		})
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleWindowScroll)
	}

	render(){
		return (
			<div>
				{this.props.render(this.state)}
			</div>
		)
	}
}//

const WindowScroll = () => (
	<Scroll render={ ({y}) => {
		return (
			<div>
				<h1>{y}</h1>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
				<p>xxx</p>
			</div>
		)
	}} />
)

export default WindowScroll;