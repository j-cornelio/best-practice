import React   from 'react';


const hasTimeouts = WrappedComponent => {
  class HasTimeouts extends React.Component {
     timeouts = []

    addTimeout = (func, delay) => {
      this.timeouts.push(setTimeout(func, delay))
    }

    clearTimeouts = () => {
      this.timeouts.forEach(clearTimeout)
    }

    render() {
      return (
        <WrappedComponent
          addTimeout={this.addTimeout}
          clearTimeouts={this.clearTimeouts}
          {...this.props} 
        />
      )
    }
  }

  return HasTimeouts
}


export default hasTimeouts;