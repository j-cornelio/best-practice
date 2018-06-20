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
  	return <p>reference child component with ref attribute.  gives access to Instance object</p>
  }
}//


class TheParent extends Component {
  componentDidMount() {
    //var myRef = this.foo.myFunc();
  }

  render() {
    return (
      <TheChild ref={ foo => this.foo = foo } name="big 'vlad" />
    );
  }
}

export default TheParent;