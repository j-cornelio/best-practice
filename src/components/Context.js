import React, { Component } from 'react';
import PropTypes from 'prop-types';

const data = [{text:'aaa', id:0}, {text:'bbb', id:1}, {text:'bbb', id:2}, {text:'ccc', id:3}];

// components have to be classes.  instead of props now gets it from context

class Button extends Component {
	static contextTypes = {    // <==
	  color: PropTypes.string
	}
	
  render() {
  	const { color } = this.context; // <==
    return (
      <button style={{background: color}}>
        {this.props.children}
      </button>
    );
  }
}//

//not concerned with color
const Message = ({text, color}) => (
  <div>
  	{/* {text} <Button color={color}>Delete</Button> */}
    {text} <Button>Delete</Button>
  </div>
)

//context provider
class MessageList extends Component {
  getChildContext() {  // <==
    return {color: "lime"};
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message key={message.id} text={message.text} />
    );
    return <div>{children}</div>;
  }
}
MessageList.childContextTypes = { // <==
  color: PropTypes.string
};

const ContextWrap = () => (
	<MessageList messages={data} />
)

export default ContextWrap;