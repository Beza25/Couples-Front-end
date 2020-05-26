import React, { Component } from 'react';
import Chat from "./Chat";
import Text from "./Text";
// header("Access-Control-Allow-Origin: *");

class ChatContainer extends Component {

    constructor(props) {
        super(props)
        // debugger
        this.state= {
            texts: this.props.userTexts,
            message: {}
        }
    }

    // messages created by user before texts = this.props.UserText


    createText = (text) => {
        // userId should be dynamic !!!!!!!!!!!
        const newText = {
            user_id: this.props.currentUser.id,
            content: text
        } 
        fetch("http://localhost:3001/messages", {   
        method: 'POST', // or 'PUT'
        headers: {
                'Content-Type': 'application/json',
              
                'Accept': 'application/json'
                },
        body: JSON.stringify(newText),
        })
        .then(response => response.json())
        .then(newText => {
            console.log('Success:', newText);

            this.setState({message: newText, texts: [...this.state.texts, newText.textObj]})
        
        })}
       

// when submit => Post fetch  "http://localhost:3001/messages" 
// (at this point the api has all the user text so I just have to show that text)then
// change the DOM to show previous and existing user's text

// 
    

    render() {
        console.log(this.state.message)
        
        return (
           
           <div>
               <div className= "container">
                    <div className="row">
                        
                        <div className="col-6"> 
        
                            <h1>{this.props.currentUser.name}</h1>
            
                            
                            {this.state.texts.map((userText,index) => <Chat text={userText} key={index} message = {this.state.message}/> ) }
                        </div>
                        <br/>
                        <div className="col-6">
                            <h1>Partner</h1>

                            {this.state.texts.map((partnerText,index) => <Chat text={partnerText} key={index} message = {this.state.message}/> ) }
                        </div>
                    </div>
                </div>
                <br/>
                <div >
                    <Text  createText = {this.createText}/>
                </div>
            

           </div>

            
        );
    }

}

export default ChatContainer