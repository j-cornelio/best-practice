import React, { Component }   from 'react';
import EventEmitter           from 'event-emitter';

// just bubbles up the DOM tree

const allItems = ['eat', 'sleep', 'code'];
 
class Client {
  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  on(eventName, listener) {
    this.eventEmitter.on(eventName, listener);
  }

  removeEventListener(eventName, listener) {
    this.eventEmitter.removeListener(eventName, listener);
  }

  emit(event, payload, error = false) {
    this.eventEmitter.emit(event, payload, error);
  }

  getEventEmitter() {
    return this.eventEmitter;
  }
}

let client = new Client();
 
const TodoItem = ({ item }) => <li>{item}</li>; //

class TodoList extends Component {
  state = { allItems }
  
  componentWillMount() {
    client.on('TODO_ADDED', this.addEvent); // Listen for event
  }
  
  componentWillUnmount(){
    client.removeListener('TODO_ADDED', this.addEvent);
  }
  
  render() {
    let { items } = this.props,
        allitems  = items.map( item => <TodoItem key={item} item={item} /> );//

    return(
      <div>
        <ul>{allitems}</ul>
        <NewTodoItem />
      </div>
    );
  }//

  addEvent = ({ newItem }) => {
    allItems.push(newItem);
    this.setState( (prevState, props) => ({ allItems }));

    // this.setState( (prevState, props) => (
    //     { allItems: [
    //         ...prevState,
    //         newItem
    //       ] }
    // ) );
  }
}
 
class NewTodoItem extends Component {
  componentDidMount(){
    this.input.focus();
  }
  render(){
    this.input = null;
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={(a) => this.input = a} type="text" />
      </form>
    );
  }//

  onSubmit = (e) => {
    e.preventDefault();
    let newItem = this.input.value;
    client.emit('TODO_ADDED', { newItem });
    this.input.value = '';
  }
}

const EventEmitterWrap = ()  => 
  <TodoList items={allItems} />

export default EventEmitterWrap;