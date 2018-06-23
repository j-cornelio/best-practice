import React                from 'react'
import { connect }          from 'react-redux'
import { handleAddTodo }    from '../../actions/'

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

const mapStateToProps = () => {
  return { }
};

const mapDispatch = (dispatch) => {
  return {
    onTodoClick: (val) => dispatch( handleAddTodo(val) )
  }
}

export default connect(mapStateToProps, mapDispatch)(AddTodo);
