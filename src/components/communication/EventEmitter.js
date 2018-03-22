import React, { Component }   from 'react';
import Emitter                from 'event-emitter';

class MyEmitter extends Emitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  alert('an event occurred!');
});

myEmitter.emit('event');

class EventEmitter extends Component {
  componentDidMount() {
 
  }
  render() {
    return (
      <div>
        <h4>event</h4>
      </div>
    );
  }
}

export default EventEmitter;