import React, { Component }         from 'react'
import Chat                 		from './Chat'
import { handleSend } 				from '../../actions/index'
import SockJS                   	from 'node-sockjs-client'
import { connect }          		from 'react-redux'

class WebSocket extends Component { 
	static defaultProps = {
		messages: []
	}

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

    this.setState(() => ({actions: sock}))
  }

  render() {
    return (
      <Chat {...this.props} {...this.state} />
    );
  }
}//

const mapStateToProps = ({ chat }) => {
	//console.log('WebSocket state', chat);
  return {
    messages: chat.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendChatMessage: (val) => dispatch( handleSend(val) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebSocket);