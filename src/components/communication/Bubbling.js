import React      from 'react';

class ParentComponent extends React.Component {
  render() {
    return (
      <div onKeyUp={this.handleKeyUp}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    );
  }

  handleKeyUp = (event) => {
	console.log('%c target --> ', 'background: lime; color: white', event.target.value);
	console.log('%c type --> ', 'background: lime; color: white', event.type);
    // This function will be called for the 'onkeyup'
    // event in any <input/> fields rendered by any of
    // my child components.
  }
}

export default ParentComponent;