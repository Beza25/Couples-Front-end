import React, { Component } from 'react';
import SideBar from '../Components/SideBar';
import ChatContainer from '../Components/ChatContainer';


class MainPage extends Component{

  

    render (){
        return(
           <div >
               <h1> Welcome {this.props.currentUser.name}</h1>
            <div className= "container">
                <div className="row">
                    <div className="col-4">
                        <h1>SideBar</h1>
                        <SideBar />
                    
                    </div>
                    <div className="col-8">
                        <h1> Chat</h1>
                    
                        <ChatContainer currentUser={this.props.currentUser} userTexts= {this.props.userTexts} />
                    </div>
                </div>
            </div>
           </div>
        );
    }

}

export default MainPage