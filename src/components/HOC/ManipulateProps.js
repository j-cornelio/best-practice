import React, { Component } from 'react';

const MP = (WrappedComponent) => (
  class PP extends Component {
    render() {
    	const newProps = {
    		user: 'xxx'
    	}
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
)

export default MP;