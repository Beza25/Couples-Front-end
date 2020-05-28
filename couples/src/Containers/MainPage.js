import React, { Component } from 'react';

import ChatContainer from '../Components/ChatContainer';
import {Link} from 'react-router-dom';


class MainPage extends Component{

    constructor() {
        super()
        this.state= {
            showSpecialDates:false 

        }
    }


    render (){

       
        return(
           <div >

                <h1> Welcome {this.props.currentUser.name}</h1>
               
                <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <h2>SideBar</h2>
                        <Link to = "/specialDates"> 
                            <div className="ui blue submit button" > Special Dates </div>
                        </Link>
                        
                    </div>
                    <div className="column">
                        <h2> Chat</h2>

                        <ChatContainer 
                            currentUser={this.props.currentUser} 
                            userTexts= {this.props.userTexts}
                            partner= {this.props.partner}
                            pTexts= {this.props.pTexts}
                            />
                    </div>
                </div>
                <div className="ui vertical divider">
                    and
                </div>
                </div>
    }

           </div>
       
        );
    }

}

export default MainPage