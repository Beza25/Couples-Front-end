import React, { Component } from 'react';
// import { Icon, Popup } from 'semantic-ui-react'
// import { Message } from 'semantic-ui-react'
import moment from 'moment';


class Chat extends Component {


    render() {
      
        
        return (

     
         
            <div onDoubleClick = {() => this.props.deleteText(this.props.text.id)}onClick = {() => this.props.updateText(this.props.text)}>
                <br/>
                <div> {this.props.user} {moment(this.props.text.created_at).format('LT') }</div>
                  <div className="ui message">
                     
                    <div className="content">
                        
                        <h4>

                        {this.props.text.content}
                        </h4>

                        {this.props.text.isfavorited?
                        <div className="ui labeled button" tabIndex="0">
                          <i className="red heart icon"></i> Like
                        </div>
                        : null
                    }


                    </div>
                </div>

            </div>
        );
      }
}
export default Chat;
// {color: this.props.text.isfavorited? "red": "black" }

