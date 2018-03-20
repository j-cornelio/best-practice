import React, { Component } from 'react';
import PropTypes from 'prop-types';


/*

https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce

A render prop is a function prop that a component uses to know what to render

render a regular component with a function prop that it can use to share some state with you

inside <Mouse>'s render, we can use that prop to know what to render

-> The main concept to understand here is that the <Mouse> component essentially exposes its state to the <App> component by calling its render prop. Therefore, <App> can render whatever it wants with that state. 


gonna give mouse a render
prop and say hey "Mouse here's a children
function here's a render prop you use
that give me your state and I'll tell
you what to render"

no more "where did i get this state or props"

GOAL: How can we share code.
behavior encapsulated in a regular component

es6 classes

PROBLEMS FIXED:
where state, props come from, so explixit.  mouse is giving us state in render callback
no naming collisions.
dynamic composition - take the output of Mouse and pipes it to another component
*/

class Mouse extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div className="heart" onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}//

// passing Mouse a prop as function
const MouseTracker = () => (
  <div style={{ height: '100%' }}>
    <Mouse render={({ x, y }) => (
      // The render prop gives us the state we need
      // to render whatever we want here.
      <h1>The mouse position is ({x}, {y})</h1>
    )}/>
  </div>
);

export default MouseTracker;