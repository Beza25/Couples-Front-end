import React, { Component } from 'react';
import ProfileEdit from "../Components/ProfileEdit";
import ProfileInfo from "../Components/ProfileInfo";


class ProfileContainer extends Component{
    constructor(){
        super()
        this.state={
            editClicked: false,
            submitClicked: false
        }
    }

    handleEdit= () => {
        this.setState({editClicked: true})
       
    }
    render (){
        return(
            <div className="background-img"  textAlign='center' style={{ height: '100vh' }}>
             
                   {this.state.editClicked ?  <ProfileEdit currentUser = {this.props.currentUser}
                                                            handleEdit = {this.props.handleEdit}
                                                /> : 
                     <ProfileInfo  currentUser = {this.props.currentUser} 
                                    partner= {this.props.partner}
                                    handleEdit={this.handleEdit} 
                        />
                    }
                    
            </div>

        );
    }

}

export default ProfileContainer