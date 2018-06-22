//import React, { Component, PropTypes }  from 'react'
import React, { Component }    from 'react'
import { connect }             from 'react-redux'
import { handleVisibility }    from '../../actions/'

const Link = ({ active, children, visibility }) => {
	if(active)
		return <span>{children}</span>
	
	return (
		 <a href="#"
		  	onClick={ e => {
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
const FilterLink = ({ filter, visibilityFilter, children, visibilityFunc }) => {		
	return (
		<Link 
			active		= {filter === visibilityFilter} 
			children	= {children} 
			visibility  = {visibilityFunc.bind(this, filter)} />
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

export default connect(mapStateToProps, mapDispatch)(FilterLink);

FilterLink.defaultProps = {};