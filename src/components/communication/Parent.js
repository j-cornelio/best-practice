import React, { Component }      from 'react';

class SiblingA extends Component {
  handleMyFunc = (data) => {
    this.props.myFunc(data)
  }

  render(){
    let { myProp } = this.props;

    return (
      <div>
        <h3>{myProp}</h3>
        <button onClick={this.handleMyFunc.bind(this, 'from AAA')}>send A</button>
      </div>
    )
  }
};//

class SiblingB extends Component {
  handleMyFunc = (data) => {
    this.props.myFunc(data)
  } 

  render(){
    let { myProp } = this.props;
    return (
      <div>
        <h3>{myProp}</h3>
        <button onClick={this.handleMyFunc.bind(this, 'from BBB')}>send B</button>
      </div>
    )
  }
};//

class Parent extends Component {
  state = {
    propA: 'prop A',
    propB: 'prop B',
  }

  siblingAFunc = (data) => {
    console.log('%c siblingAFunc --> ', 'background: orange; color: white', data);
    this.setState((state) => ({propB: data}));
  }

  siblingBFunc = (data) => {
    console.log('%c siblingBFunc --> ', 'background: orange; color: white', data);
    this.setState((state) => ({propA: data}));
  }

  render() {
    const { propA, propB } = this.state;

    return (
      <div>
        <SiblingA
          myProp={propA}
          myFunc={this.siblingAFunc}
        />
        <SiblingB
          myProp={propB}
          myFunc={this.siblingBFunc}
        />
      </div>
    );
  }
}

export default Parent;