import React, { Component } from 'react';
// import { Icon, Popup } from 'semantic-ui-react'
// import { Message } from 'semantic-ui-react'
import moment from 'moment';


class Chat extends Component {

    // constructor(){
    //     super()
    //     this.state= {
    //         isLiked: false
    //     }
    // }

    // onClick => Change the APi's favioute true => change the DOM of chat to red
    //  PATCH fetch request (with the isFavorited = true ) => 
    //  accept the params and update the isFavorited  => render the Message
    //  if the message.isFavoted true => change color 

    // liked =() =>{
    //     // this.setState({isLiked.isfavorited: this.props.text.isfavorited})

    // }

    render() {
        console.log(this.props.text)
        // console.log(this.props.text.created_at)
        
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

