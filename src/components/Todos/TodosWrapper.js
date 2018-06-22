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

const AddTodo = ({ onTodoClick }) => {
  let input = null;
  
  return (
    <div>
      <input ref={ node => input = node } type="text" />

      <button onClick={() => {
        onTodoClick(input.value);
        input.value = '';
        input.focus()
      }}>Add Todo</button>
    </div>
  )
}

const Footer = ({ visibilityFilter }) => (
  <p>
      Show: {' | '}
      <FilterLink currentFilter={visibilityFilter} filter='SHOW_ALL'>All</FilterLink>
      {' | '}
      <FilterLink currentFilter={visibilityFilter} filter='SHOW_ACTIVE'>Active</FilterLink>
      {' | '}
      <FilterLink currentFilter={visibilityFilter} filter='SHOW_COMPLETED'>Completed</FilterLink>
      {' | '}
    </p>
)

class TodosWrapper extends Component{
  onTodoClick = (val) => {
    if(val === '') return 
    this.props.handleAddTodo(val)
  }

  render(){
    const { todos, handleToggleTodo, visibilityFilter } = this.props;

    let visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <div>
        <pre>props: {JSON.stringify(this.props)}</pre>
        <h4>Add Todo</h4>

        <AddTodo onTodoClick={this.onTodoClick} />
        
        <Footer visibilityFilter={visibilityFilter} />

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