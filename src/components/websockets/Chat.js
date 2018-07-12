import React    from 'react'

const Chat = ({ messages, actions }) => {	
	let input = null; 
	const show = messages.map( el => <p key={el}>{el}</p> )

	const handleFormSubmit = e => {
		e.preventDefault();

		actions.send( input.value );
	};

	return (
		<div className="container">
	        <form onSubmit={ handleFormSubmit }>
	          <div className="form-group">
	            <div className="input-group">
	              <input type="text" ref={node => input = node} className="" />
	              <span className="input-group-btn">
	                <button type="submit" className="btn btn-primary">Send</button>
	              </span>
	            </div>
	          </div>
	        </form>
	        <ul>
	            {show}
	        </ul>
	  </div>
	);
}

export default Chat;

Chat.defaultProps = {
  actions: ()=>{},
  message: []
};