import React, { Component } from 'react';
import Chat from "./Chat";
import Text from "./Text";
// header("Access-Control-Allow-Origin: *");

class ChatContainer extends Component {

    constructor() {
        super()
        this.state= {
            texts: [],
            message: {}
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/messages")
        .then(resp => resp.json())
        .then(textArr => {

            this.setState({texts: textArr})
            console.log(this.state.texts)
        })
    }

    createText = (text) => {

        // userId should be dynamic !!!!!!!!!!!
        const newText = {
            user_id: 6,
            content: text
        } 
        fetch("http://localhost:3001/messages", {   
        method: 'POST', // or 'PUT'
        headers: {
                'Content-Type': 'application/json',
                credentials: 'include',
                'Accept': 'application/json'
                },
        body: JSON.stringify(newText),
        })
        .then(response => response.json())
        .then(newText => {
            console.log('Success:', newText);
            this.setState({message: newText})
        })}
    

    render() {
        return (
            <div >
                <Chat text={this.state.message}/> 
                <Text  createText = {this.createText}/>
        
           </div>
        );
    }

}

export default ChatContainer