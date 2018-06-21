//import React, { Component, PropTypes }  from 'react'
import React, { Component }  from 'react'
import { connect }                      from 'react-redux'
import { handleAddTodo, handleToggleTodo }                from '../../actions/'

class TodosWrapper extends Component{
  constructor(props){
    super(props);
    this.handleData = this.handleData.bind(this);
  }

  handleData(val){
    if(val === '') return 
    this.props.handleAddTodo(val)
  }

  handleData2 = (val) => {
    console.log(val)
  }

  handleToggleTodo = (val) => {
    console.log(val)
  }

  render(){
    let input = null;
    const { todos, handleToggleTodo } = this.props;
    return (
      <div>
        <pre>props: {JSON.stringify(this.props)}</pre>
        <h4>Add Todo</h4>

        <input ref={ node => input = node } type="text" />

        {/*<button onClick={this.handleData(this.input)}>handleData</button>*/}

        <button onClick={() => {
          this.handleData(input.value);
          input.value = '';
          input.focus()
        }}>Add Todo</button>

        <ul>
          { todos.map(todo => 
              <li key={todo.id} onClick={
                  handleToggleTodo.bind(this, todo.id)
                }
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                >{todo.text}
              </li>) }
        </ul>
      </div>
    )
  }
}//

const mapStateToProps = ({ todos, visibilityFilter }) => {
  //console.log('STATE: -> ', state)
  return {
    todos,
    visibilityFilter,
    //message: state.todosData.message,
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