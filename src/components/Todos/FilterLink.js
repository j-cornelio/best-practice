//import React, { Component, PropTypes }  from 'react'
import React                   from 'react'
import { connect }             from 'react-redux'
import { handleVisibility }    from '../../actions/'

const FilterLink = ({ filter, children, handleVisibility, currentFilter }) => {
	if(currentFilter === filter)
		return <span>{children}</span>
	
	return (

		 <a href="#"
		  	onClick={ e => {
		  		e.preventDefault();
		  		handleVisibility(filter)
		  	} }
		  >
		  	{children}
		 </a>
	)
}

const mapStateToProps = () => ( {} );

const mapDispatch = (dispatch) => {
  return {
  	handleVisibility: (filter) => dispatch( handleVisibility(filter) )
  }
}

export default connect(mapStateToProps, mapDispatch)(FilterLink);

FilterLink.defaultProps = {};