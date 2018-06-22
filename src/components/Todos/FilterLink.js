//import React, { Component, PropTypes }  from 'react'
import React, { Component }                   from 'react'
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

class FilterLink extends Component{
	render(){
		const { filter, visibilityFilter, children, visibilityFunc } = this.props;
		
		return (
			<Link 
				active		= {filter === visibilityFilter} 
				children	= {children} 
				visibility  = {() => visibilityFunc(filter)} />
		)
	}
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