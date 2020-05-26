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
        }
    }
    createText = (text) => {
       
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
            this.setState({message: newText, texts: [...this.state.texts, newText]})
        
        })}
       

// when submit => Post fetch  "http://localhost:3001/messages" 
// (at this point the api has all the user text so I just have to show that text)then
// change the DOM to show previous and existing user's text

    
    render() {
        return (   
           <div>
               <div className= "container">
                    <div className="row">
                        
                        <div className="col-6"> 
        
                            <h1>{this.props.currentUser.name}</h1>
            
                            
                            {this.state.texts.map((userText,index) => <Chat text={userText} key={index} user= {this.props.currentUser.name} /> ) }
                        </div>
                        <br/>
                        <div className="col-6">
                            <h1>Partner</h1>

                            {this.props.pTexts.map((partnerText,index) => <Chat text={partnerText} key={index} user= {this.props.partner.name}/>  ) }
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