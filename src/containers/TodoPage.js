import React, { Component }      from 'react';
import TodosWrapper             from '../components/Todos/TodosWrapper'; 
//var people = [{name:'aaa'}, {name:'bbb'}, {name:'ccc'}, ]

class HOCpage extends Component {
  render() {
    return (
      <div>
        <TodosWrapper />
      </div>
    );
  }
}

export default HOCpage;