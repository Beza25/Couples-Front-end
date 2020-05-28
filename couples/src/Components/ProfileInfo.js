import React, { Component } from 'react';
import moment from 'moment';


class ProfileInfo extends Component{
    

    render (){
        // console.log(this.props.currentUser)
        return(
          <div>

          <div className="top">
              <div className="card">
                  <div className="content">
                  <div className="header">
                      <h1 className ="greetings"> {this.props.currentUser.name}'s Profile</h1>
                  </div>
                  </div>
            

                </div>    
          </div>
          <div className="bottom">
          <div  className= "profile-card">
            <div className="ui card">
               
               <div className="image">
                 <img src={this.props.currentUser.img}/>
               </div>
              
               <div className="content">
                 <a className="header">{this.props.currentUser.name}</a>
             
                 <div className="meta">
                  Birth Day: <span className="date"> {moment(this.props.currentUser.birthday).format("MMM Do YYYY")} </span>
                 </div>
               
               </div>
               <div className="extra content">
                   Partner:
       
                 <a>
                   <i className="user icon"></i>
                   {this.props.partner.name}
                 </a>
               </div>
               <div className="extra content">
                   <button className="ui teal button" onClick= {this.props.handleEdit}>Edit Profile</button>
       
               </div>
   
             </div>

          </div>

          </div>
       
        
          </div>
            

        );
    }

}

export default ProfileInfo

    // {/* <div class="meta">
    //             <span class="date">{gender} </span>
    //           </div> */}
    //             {/* <div class="description">
    //             Kristy is an art director living in New York.
    //           </div> */}