import React, { Component, PropTypes }  from 'react'
import { connect }                      from 'react-redux'
import { handleAddTodo }                from '../../actions/'

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

  render(){
    let input = null;
    const { todos, handleAddTodo, message } = this.props;

    return (
      <div>
        <pre>props: {JSON.stringify(this.props)}</pre>
        <h4>Add Todo</h4>
        <h1>{message}</h1>
        <input ref={ node => input = node } type="text" />

        {/*<button onClick={this.handleData(this.input)}>handleData</button>*/}

        <button onClick={() => {
          this.handleData(input.value);
          input.value = '';
          input.focus()
        }}>Add Todo</button>

        <ul>
          { todos.map(todo => <li>{todo.name}</li>) }
        </ul>
      </div>
    )
  }
}//

const mapStateToProps = (state) => {
  console.log('STATE: -> ', state)
  return {
    //todos: state.todosData.todos,
    //message: state.todosData.message,
  }
};

const mapDispatch = (dispath) => {
  return {
    handleAddTodo: (val) => dispath( handleAddTodo(val) )
  }
}

export default connect(mapStateToProps, mapDispatch)(TodosWrapper);

TodosWrapper.defaultProps = {
  todos: [],
  message: ''
};