import React from 'react';

const Presentation = ({title, message, toggleVisibility, isVisible}) => (
	<div>
		<h1>{title}</h1>
		{isVisible ? <p>I am isVisible</p> : <p>Not Visible</p>}
		<p>{message}</p>
		<button onClick={toggleVisibility}>Click me</button>
	</div>
);

export default Presentation;