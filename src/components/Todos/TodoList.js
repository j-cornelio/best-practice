//import React, { Component, PropTypes }  from 'react'
import React                   from 'react'
import { connect }             from 'react-redux'
import { handleVisibility }    from '../../actions/'

const Todo = ({ text, completed, id, handleToggleTodo }) => (
  <li onClick={
        handleToggleTodo.bind(this, id)
      }
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
)//

const TodoList = ({ visibleTodos, handleToggleTodo }) => (
  <ul>
    { visibleTodos.map( todo => (
        <Todo key={todo.id} handleToggleTodo={handleToggleTodo} {...todo} />
      )) 
    }
  </ul>
)

export default TodoList;

TodoList.defaultProps = {};