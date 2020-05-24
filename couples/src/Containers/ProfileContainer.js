import React, { Component } from 'react';
import ProfileEdit from "../Components/ProfileEdit";
import ProfileInfo from "../Components/ProfileInfo";

class ProfileContainer extends Component{

    render (){
        return(
            <div>
                <h1>
                    ProfileContainer

                </h1>
                <ProfileEdit />
                <ProfileInfo />
             
            </div>

        );
    }

}

export default ProfileContainer