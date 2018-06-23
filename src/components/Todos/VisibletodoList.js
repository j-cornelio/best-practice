//import React, { Component, PropTypes }  from 'react'
import React                   from 'react'
import { connect }                            from 'react-redux'
import { handleToggleTodo }    from '../../actions/'
//import { connect }             from 'react-redux'

//https://egghead.io/lessons/react-redux-extracting-container-components-visibletodolist-addtodo

//presentational component, don't specify behavior
const Todo = ({ text, completed, handleToggleTodo }) => (
  <li 
      onClick={
        //handleToggleTodo.bind(this, id)
        handleToggleTodo
      }
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
)//

// acts as container component - 20
const TodoList = ({ todos, handleToggleTodo }) => {
  return (
    <ul className="todos">
      { todos.map( todo => (
          <Todo 
            key={todo.id} 
            //handleToggleTodo={handleToggleTodo}
             //handleToggleTodo={() => handleToggleTodo(todo.id)}  
             handleToggleTodo={handleToggleTodo.bind(this, todo.id)}  
            {...todo} />
        )) 
      }
    </ul>
  )
}

const VisibletodoList = ({ todos, filter, handleToggleTodo }) => {//call this func before rending dem
  const getVisibleTodos = (mytodos, filter) => {
    switch(filter){
      case 'SHOW_ALL':
        return mytodos;

      case 'SHOW_COMPLETED':
        return mytodos.filter( t => t.completed );

      case 'SHOW_ACTIVE':
        return mytodos.filter( t => !t.completed );

      default:
          return mytodos
    }
  }
  
  return (
    <TodoList todos={getVisibleTodos(todos, filter)} handleToggleTodo={handleToggleTodo}  />
  )
}

const mapStateToProps = ({ todos, visibilityFilter }) => {
  return {
    todos,
    filter: visibilityFilter
  }
};

const mapDispatch = (dispatch) => {
  return {
    handleToggleTodo: (id) => dispatch( handleToggleTodo(id) )
  }
}

export default connect(mapStateToProps, mapDispatch)(VisibletodoList);

VisibletodoList.defaultProps = {
  visibleTodos: []
};