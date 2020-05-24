import React, { Component } from 'react';
import Chat from "./Chat";
import Text from "./Text";

class ChatContainer extends Component {
    render() {
        return (
            <div >
                <Chat /> 
                <Text />
        
           </div>
        );
    }

}

export default ChatContainer