import React                from 'react'
import { connect }          from 'react-redux'
import { handleAddTodo }    from '../../actions/'

const AddTodo = ({ onTodoClick }) => {
  let input = null;
  
  const handleKeyPress = (e) => {
    if(e.charCode === 13){
      onTodoClick(input.value);
      input.value = '';
      input.focus()
    }
  }

  return (
    <div>
      <input
        onKeyPress={handleKeyPress}
        ref={ node => input = node }
        type="text" />

      <button onClick={() => {
        if( input.value.length === 0) return false;

        onTodoClick(input.value);
        input.value = '';
        input.focus()
      }}>Add Todo</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (val) => dispatch( handleAddTodo(val) )
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
