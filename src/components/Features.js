import React, { Component, Fragment } from 'react';
import ReactDOM 		from 'react-dom';
//import PropTypes 		from 'prop-types';
import moment 			from 'moment';

/*
portals allows you to render any react component in any DOM element on da page
*/
// eslint-disable-next-line
class ErrorBoundary extends Component{
	state = {
		hasError: false,
	}

	componentDidCatch(error, info){
		console.log('oh noooo! An error that said: ', error.message);

		this.state((state, props) => ({ hasError: true }))
	}

	render(){
		return this.state.hasError ? <h4>Doom</h4> : this.props.children
	}
}//
// eslint-disable-next-line
const User = ({ data }) => (
	<span>{data.username}</span>
);//

const notificationEl = document.querySelector('#notification');

// const FromPrettyDate = ({ date }) => (
// 	<span>{moment(date, 'MM-DD-YYY').fromNow('')}</span>
// );

const PrettyDate = ({ date }) => (
	moment(date).format('MM-DD-YYYY')
);//

const Notification = ({ children }) => (
	ReactDOM.createPortal(
		<div className="notification">{children}</div>,
		notificationEl
	)
);

const Frag = () => (
	<Fragment>
		<h6>sup</h6>
		<h6>son</h6>
	</Fragment>
);//

class Features extends Component{
	render(){
		const date = { month: new Date().getMonth(), day: new Date().getDate(), year: new Date().getFullYear() }

		return (
			<section id="stuff">
				<Notification>this a notice</Notification>
				<p>React 16 Features</p>
				<p>can return strings from components</p>
				<i>
					<PrettyDate date={date} />
				</i>
				<Frag />
				{/* <ErrorBoundary>
					<User name="xxx" />
				</ErrorBoundary> */}
			</section> 
		)
	}
}//

// const Features = () => (
// 	<p>Features</p>
// )

export default Features;
//
// RadioGroup.propTypes = {
// 	children: PropTypes.array.isRequired
// }

// RadioButton.propTypes = {
// 	children: PropTypes.string.isRequired,
// 	name: PropTypes.string
// }