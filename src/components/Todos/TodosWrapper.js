//import React, { Component, PropTypes }  from 'react'
import React, { Component }                   from 'react'
import { connect }                            from 'react-redux'
import { handleAddTodo, handleToggleTodo }    from '../../actions/'
import FilterLink                             from './FilterLink'
import TodoList                             from './TodoList'

//call this func before rending dem
const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter( t => t.completed );

    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed );
  }
}

class TodosWrapper extends Component{
  handleData = (val) => {
    if(val === '') return 
    this.props.handleAddTodo(val)
  }

  render(){
    let input = null;
    const { todos, handleToggleTodo, visibilityFilter } = this.props;

    let visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <div>
        <pre>props: {JSON.stringify(this.props)}</pre>
        <h4>Add Todo</h4>

        <input ref={ node => input = node } type="text" />

        <button onClick={() => {
          this.handleData(input.value);
          input.value = '';
          input.focus()
        }}>Add Todo</button>
        
        <p>
          Show: {' | '}
          <FilterLink filter='SHOW_ALL'>All</FilterLink>
          {' | '}
          <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
          {' | '}
          <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
          {' | '}
        </p>

        <TodoList visibleTodos={visibleTodos} handleToggleTodo={handleToggleTodo} />
      </div>
    )
  }
}//

const mapStateToProps = ({ todos, visibilityFilter }) => {
  return {
    todos,
    visibilityFilter,
  }
};

const mapDispatch = (dispatch) => {
  return {
    handleAddTodo: (val) => dispatch( handleAddTodo(val) ),
    handleToggleTodo: (id) => dispatch( handleToggleTodo(id) )
  }
}

export default connect(mapStateToProps, mapDispatch)(TodosWrapper);

TodosWrapper.defaultProps = {
  todos: [],
  message: ''
};