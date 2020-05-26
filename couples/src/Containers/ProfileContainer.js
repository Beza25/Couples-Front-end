import React, { Component } from 'react';
import ProfileEdit from "../Components/ProfileEdit";
import ProfileInfo from "../Components/ProfileInfo";
import { Dropdown } from 'semantic-ui-react'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

class ProfileContainer extends Component{
    constructor(){
        super()
        this.state={
            editClicked: false
        }
    }

    handleEdit= () => {
        this.setState({editClicked: true})
    }

    // When the button is clicked render the edit form 
   

    render (){
       
        
       
        return(
            <div>
                <h1>
                    ProfileContainer

                </h1>
                <div>
                <ProfileInfo  currentUser = {this.props.currentUser} partner= {this.props.partner} handleEdit={this.handleEdit}/>

                </div>
               
               <div>
                   {this.state.editClicked? <ProfileEdit />: null }
               
               </div>
                

             
               
             
            </div>

        );
    }

}

export default ProfileContainer