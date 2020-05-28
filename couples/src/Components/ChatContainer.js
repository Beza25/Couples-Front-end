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
            this.setState({texts: [...this.state.texts, newText]})

        
        })}
       

// when submit => Post fetch  "http://localhost:3001/messages" 
// (at this point the api has all the user text so I just have to show that text)then
// change the DOM to show previous and existing user's text

 deleteText = (id) => {

    console.log("delete text")
    
    fetch(`http://localhost:3001/messages/${id}`, {
        method:"DELETE"
    })
    let messages = this.state.texts 
   const filteredText = messages.filter(message => message.id !== id)
   this.setState({texts: filteredText})
 }

 updateText =(text) =>{

     console.log("attempt to update", text)
     fetch(`http://localhost:3001/messages/${text.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({isfavorited: !text.isfavorited})
     }).then( resp => resp.json())
     .then(text => {
        console.log(text)
        let  messages = this.state.texts
        messages.forEach( message => { if (message.id === text.id ) { message.isfavorited = text.isfavorited} }) 
        this.setState({texts: messages})
     })

 }
 
  
    render() {
        return (   
           <div>
               <div className= "container">
                    <div className="row">
                        
                        <div className="col-6"> 
        
                            <h1 className= "chat-Text" >{this.props.currentUser.name}</h1>
                            {this.state.texts.map((userText,index) => <Chat text={userText}
                                     key={index} 
                                     user= {this.props.currentUser.name} 
                                     deleteText= {this.deleteText} 
                                     updateText = {this.updateText}
                                
                                      /> ) }
                        </div>
                        <br/>
                        <div className="col-6">
                            <h1 className= "chat-Text">Partner</h1>

                            {this.props.pTexts.map((partnerText,index) => <Chat text={partnerText} key={index} user= {this.props.partner.name} deleteText= {this.deleteText} />  ) }
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