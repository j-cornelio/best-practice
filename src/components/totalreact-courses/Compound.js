import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({children}) => {
	// const res = React.Children.map(children, () => {
	// 	return React.cloneElement(child)
	// })

	return (
		<div>
			<p>tab</p>
		</div> 
	)
}//

const Tab = () => (
	<p>tab</p>
)

const RenderMe = () => (
	<Tabs>
		<Tab />
		<Tab />
		<Tab />
	</Tabs>
)

export default RenderMe;