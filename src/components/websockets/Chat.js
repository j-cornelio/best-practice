import React    from 'react'

const Chat = ({ messages, actions }) => {	
	let input=null, count=0; 
	const list = messages.map( el => <li key={count+=1}>{el}</li> )
//
	const handleFormSubmit = e => {
		e.preventDefault();

		actions.send( input.value );

		input.value = '';
	};

	return (
		<div className="container">
	        <form onSubmit={ handleFormSubmit }>
	          <div className="form-group">
	            <div className="input-group">
	              <input type="text" ref={node => input = node} className="" onKeyPress={(e) => {
	              	if(e.charCode === 13){
	              		handleFormSubmit(e);
	              	}
	              }} />
	              <span className="input-group-btn">
	                <button type="submit" className="btn btn-primary">Send</button>
	              </span>
	            </div>
	          </div>
	        </form>
	        <ul>
	            {list}
	        </ul>
	  </div>
	);
}

export default Chat;

Chat.defaultProps = {
  actions: ()=>{},
  message: []
};