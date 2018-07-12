import React, { Component }         from 'react'
import Chat                 		from './Chat'
import { handleSend, handleAddTodo } 				from '../../actions/index'
import SockJS                   	from 'node-sockjs-client'
import { connect }          from 'react-redux'

class WebSocket extends Component {  
  componentDidMount(){
    const sock = new SockJS('https://chat-server.azurewebsites.net/chat');

    sock.onopen = () => {
        console.log('open');
        sock.send('hi vlad');
    };
     
     sock.onmessage = (e)  => {
         console.log('message', e.data);

         this.props.onSendChatMessage( e.data )
    };
     
    sock.onclose = () => console.log('close');
  }

  render() {
    return (
      <h1>chat</h1>
    );
  }
}//

const mapStateToProps = ({ chat }) => {
	console.log('WebSocket state', chat);
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendChatMessage: (val) => dispatch( handleSend(val) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebSocket);