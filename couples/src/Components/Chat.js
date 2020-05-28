import React, { Component } from 'react';
// import { Icon, Popup } from 'semantic-ui-react'
// import { Message } from 'semantic-ui-react'
import moment from 'moment';


class Chat extends Component {


    render() {
      
        
        return (
         
            <div onDoubleClick = {() => this.props.deleteText(this.props.text.id)}onClick = {() => this.props.updateText(this.props.text.id)}>
                <br/>
                <div> {this.props.user} {moment(this.props.text.created_at).format('LT') }</div>
                  <div className="ui message">
                     
                    <div className="content">
                        
                        <h4 style = {{color: this.props.text.isfavorited? "red": "black" }}>
                        {this.props.text.content}
                        </h4>
                    </div>
                </div>

            </div>
        );
      }
}
export default Chat;
// 

