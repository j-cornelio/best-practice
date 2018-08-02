import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scroll extends Component{
	static propTypes = {
		render: PropTypes.func
	}

	state = { y: 0 }

	handleWindowScroll = () => {
		this.setState( () => ({ y: window.scrollY }) )
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleWindowScroll)
	}

// render function being called, return UI, passing data to it
	
	render(){
		return (
			<div> 
				{this.props.render( this.state )}
			</div>
		)
	}
}//

// passing state and destructuring y.  returns whatever UI you want. return DIV with H1 and many Ps
const WindowScroll = () => (
	<Scroll render={ ({ y }) => (
			<div>
				<h1>{y}</h1>
				<p>a rend prop is a function  prop that a component uses to know what to render</p>
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
	} />
)

export default WindowScroll;