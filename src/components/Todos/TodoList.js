//import React, { Component, PropTypes }  from 'react'
import React                   from 'react'
import { connect }             from 'react-redux'
import { handleVisibility }    from '../../actions/'

//presentational component, don't specify behavior
const Todo = ({ text, completed, id, handleToggleTodo }) => (
  <li 
      onClick={
        handleToggleTodo.bind(this, id)
        //handleToggleTodo
      }
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
)//

// acts as container component - 20
const TodoList = ({ visibleTodos, handleToggleTodo }) => (
  <ul className="todos">
    { visibleTodos.map( todo => (
        <Todo 
          key={todo.id} 
          handleToggleTodo={handleToggleTodo}
          // handleToggleTodo={() => handleToggleTodo(todo.id)}  
          {...todo} />
      )) 
    }
  </ul>
)

export default TodoList;

TodoList.defaultProps = {
  visibleTodos: []
};