//import React, { Component, PropTypes }  from 'react'
import React                   from 'react'
import { connect }             from 'react-redux'
import { handleVisibility }    from '../../actions/'

const FilterLink = ({ filter, children, handleVisibility }) => (
  <a href="#"
  	onClick={ e => {
  		e.preventDefault();
  		handleVisibility(filter)
  	} }
  >
  	{children}
  </a>
)//

const mapStateToProps = () => ( {} );

const mapDispatch = (dispatch) => {
  return {
  	handleVisibility: (filter) => dispatch( handleVisibility(filter) )
  }
}

export default connect(mapStateToProps, mapDispatch)(FilterLink);

FilterLink.defaultProps = {};