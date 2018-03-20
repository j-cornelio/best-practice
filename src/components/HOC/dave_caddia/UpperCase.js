import React, { Component }      from 'react';

function Upper() {
  // Which returns a function that takes a component...
  return function(WrappedComponent) {
    // It creates a new wrapper component...
    class MakeUpper extends Component {
      render() {
        const newProps = {
          user: this.props.user.toUpperCase()
        }
        // And it renders the component it was given
        return <WrappedComponent {...this.props} {...newProps} />;
      }
    }
    return MakeUpper;
  }
}

export default Upper;