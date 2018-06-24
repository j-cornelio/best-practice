//import React, { Component, PropTypes }  from 'react'
import React    				from 'react'
import { connect }              from 'react-redux'
import { handleVisibility }     from '../../actions/'

const Link = ({ active, children, visibility }) => {
	if(active)
		return <span>{children}</span>
	
	return (
		 <a href="#"
		  	onClick={ (e) => {
		  		e.preventDefault();
		  		visibility()
		  	} }
		  >
		  	{children}
		 </a>
	)
}//

/*
	separed the Link presentational component from FilterLInk Container component, connected to dA Redux Store.
	makes data flow less explit, makes easy to use FilterLink in any component w/o worrying about passing additional data. (vid23) 
*/
const FilterLink = ({ filter, children, visibilityFilter, visibilityFunc }) => {		
	return (
		<Link
			active={filter === visibilityFilter} // expression and pass boolean - KOOL***
			children={children} 
			visibility={visibilityFunc.bind(this, filter)} /> // bind and pass data
	)
}

const mapStateToProps = ({ visibilityFilter }) => {
	return {
		visibilityFilter,
	}
};

const mapDispatch = (dispatch) => {
  return {
  	visibilityFunc: (filter) => dispatch( handleVisibility(filter) )
  }
}

export default connect(mapStateToProps, mapDispatch)( FilterLink );

FilterLink.defaultProps = {
	visibilityFilter: '',  
	children: '',
	visibilityFunc: function(){}
};