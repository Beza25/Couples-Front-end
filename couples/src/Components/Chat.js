import React, { Component } from 'react';
// import { Icon, Popup } from 'semantic-ui-react'
// import { Message } from 'semantic-ui-react'


class Chat extends Component {

    


    render() {
        // console.log(this.props)
        return (
         
            <div>
                <div> You {this.props.message.texted_at}</div>
                  <div className="ui message">
                     
                    <div className="content">
                    
                        <h4>
                        {this.props.text.content}
                        </h4>
                    </div>
                </div>

            </div>
        );
      }
}
export default Chat;

