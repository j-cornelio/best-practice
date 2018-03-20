import React from 'react';
//import PropTypes from 'prop-types';

const Grid = ({children}) => {
	//console.log('GRID: ', React.Children);
	return (
		<div>
			{React.Children.map(children, (child, idx) => {
				if(idx  < 1) return;
				return child;
			})}
		</div> 
	)
}//


const Child = () => (
	<p>tab</p>
)

const RenderMe = () => (
	<Grid>
		<Child />
		<Child />
		<Child />
	</Grid>
)

export default RenderMe;