import React, { Component }                 from 'react'

class BaseButton extends Component {  
  render() {
    return (
      <div>
        <button disabled={true}>Click me</button>
      </div>
    );
  }
}

export default BaseButton;