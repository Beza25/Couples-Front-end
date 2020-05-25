import React, { Component } from 'react';
import {  Segment} from "semantic-ui-react";
//  Message 

class LoginForm extends Component{

    //when the a user login 

    render (){
        return(
            <div>
             
                <Segment>
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                        <div className="ui form">
                            <div className="field">
                            <label>Username</label>
                            <div className="ui left icon input">
                                <input type="text" placeholder="Username"/>
                                <i className="user icon"></i>
                            </div>
                            </div>
                            <div className="field">
                            <label>Password</label>
                            <div className="ui left icon input">
                                <input type="password"/>
                                <i className="lock icon"></i>
                            </div>
                            </div>
                            <div className="ui blue submit button">Login</div>
                        </div>
                        </div>
                        <div className="middle aligned column">
                        <div className="ui big button">
                            <i className="signup icon"></i>
                            Sign Up
                        </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        Or
                    </div>
                    </div>
                </Segment>
            </div>
           

        );
    }

}

export default LoginForm