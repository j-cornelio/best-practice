import React, { Component }   from 'react';
import Emitter                from 'event-emitter';

class MyEmitter extends Emitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
  console.log('an event occurred!');
});

myEmitter.emit('event', 'a', 'b');

class EventEmitter extends Component {
  render() {
    return (
      <div>
        <p>event emitter</p>
      </div>
    );
  }
}

export default EventEmitter;