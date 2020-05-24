import React, { Component } from 'react';
import SideBar from '../Components/SideBar';
import ChatContainer from '../Components/ChatContainer';


class MainPage extends Component{

    render (){
        return(
           <div >
               <h1> MainPage</h1>
            <div className= "container">
                <div className="row">
                    <div className="col-4">
                        <h1>SideBar</h1>
                        <SideBar />
                    
                    </div>
                    <div className="col-8">
                        <h1> Chat</h1>
                        <ChatContainer />
                    </div>
                </div>
            </div>
           </div>
        );
    }

}

export default MainPage