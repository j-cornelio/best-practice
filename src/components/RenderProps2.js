import React, { Component } from 'react';
/*
Objective - encapsulating the behavior in a reusable way

const Cat = ({mouse}) => 
	<img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />

class MouseWithCat extends Component {
  ... 
  // passing state:
  <Cat mouse={this.state} /> ); } }

const MouseTracker = () => <MouseWithCat />

function prop that it uses to dynamically determine what to render–a render prop.

Now, instead of effectively cloning the <Mouse> component and hard-coding something else in its render method to solve for a specific use case, we instead provide a render prop that <Mouse> can use to dynamically determine what it renders.

More concretely, a render prop is a function prop that a component uses to know what to render.


*/

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="../images/garfield.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}//

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '150px', outline: '1px solid red' }} onMouseMove={this.handleMouseMove}>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}//

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

export default MouseTracker;