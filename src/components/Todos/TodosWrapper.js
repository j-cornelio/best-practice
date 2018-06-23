//import React, { Component, PropTypes }  from 'react'
import React, { Component }                 from 'react'
import FilterLink                           from './FilterLink'
import VisibletodoList                             from './VisibletodoList'
import AddTodo                              from './AddTodo'
//drawback - pass props down da tree.  breaks emcapsulation, parent has to know too much about data child component needs

const Footer = () => (
  <p>
      Show: {' | '}
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      {' | '}
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
      {' | '}
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
      {' | '}
    </p>
)

class TodosWrapper extends Component{
  onTodoClick = (val) => {
    if(val === '') return 
    this.props.handleAddTodo(val)
  }

  render(){
    return (
      <div>
        <pre>props: {JSON.stringify(this.props)}</pre>
        <h4>Add Todo</h4>

        <AddTodo />
        
        <Footer />

        <VisibletodoList />
      </div>
    )
  }
}//

export default TodosWrapper;

TodosWrapper.defaultProps = {
  todos: [],
  message: ''
};