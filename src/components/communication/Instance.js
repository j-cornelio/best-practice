import React, { Component }     from 'react';

/*
	ref placed on Instance and gives access to all methods n state of component
*/

class TheChild extends Component {
	state = {name: 'vlad'}

  myFunc() {
    return "instance method";
  }

  render(){
  	return <p>child component with ref</p>
  }
}//


class TheParent extends Component {
  componentDidMount() {
    //var x = this.foo.myFunc();
    
    // console.log('x: ', x);
    // console.log('this.foo: ', this.foo.state);
  }

  render() {
    return (
      <TheChild ref={ foo => this.foo = foo } />
    );
  }
}

export default TheParent;