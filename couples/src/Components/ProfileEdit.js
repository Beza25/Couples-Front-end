import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class ProfileEdit extends Component{

    // when edit is clicked I want to show the input value with the value already there 
    constructor(props){
        super(props)
        this.state = {
            name: this.props.currentUser.name,
            username: this.props.currentUser.username,
            gender: this.props.currentUser.gender,
            img: this.props.currentUser.img
        }
    }

    // onChange of input = change the state 
    //  Put fetch request with user's input value
    // Pass along what you get from the fetch to App
    //  Change the app's info

    handleName =(e) =>{
        this.setState({ name: e.target.value})
    }
    handleUsername =(e) =>{
        this.setState({username: e.target.value})
    }
    handleImg=(e) =>{
        this.setState({img: e.target.value})
    }
    handleGender = (e) => {
        this.setState({gender: e.target.value})
    }


    handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Atempting to submit")
        const id = this.props.currentUser.id
        let user = {
            user_id: this.props.currentUser.id,
            name: this.state.name,
            username: this.state.username,
            img: this.state.img,
            gender: this.state.gender
        }

        fetch(`http://localhost:3001/users/${id}`,{
            method: "PATCH",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify(user)

        }).then(resp => resp.json())
        .then(user => {
         
            console.log(user) 
            this.props.handleEdit(user)
            alert("Updated Sucesssfully")
        })
    }
    render (){
       
        return(
            <div className= "profile-card">
               
                <div className="ui card">
                <h1>Edit Profile</h1>
                <div className="image">
                    <img src={this.props.currentUser.img}/>
                </div>

                <Form onSubmit ={this.handleSubmit}>
                    <Form.Field  >
                        <label>First Name</label>
                        <input placeholder='First Name' name= "name" value= {this.state.name} onChange = {this.handleName}/>
                    </Form.Field>
                    <Form.Field  >
                        <label>User Name</label>
                        <input placeholder='username'  name= "username" value= {this.state.username} onChange ={this.handleUsername} />
                    </Form.Field>
                    <Form.Field >
                        <label>Edit image</label>
                        <input placeholder='img url' name= "img" value= {this.state.img} onChange={this.handleImg}/>
                    </Form.Field>
                    <Form.Field>
                        <div className="ui form" value={this.state.gener} onChange={this.handleGender}>
                            <div className="field">
                                <select>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                    </Form.Field>
                     <Button type='submit' className= "ui teal button">Submit</Button>
                    </Form>
                </div> 
            </div>

        );
    }

}

export default ProfileEdit


{/* <Form.Select value={this.state.gender}
                            fluid
                            label='Gender'
                            options={options}
                            placeholder='Gender'
                            onChange={this.handleGender}
                        />
                        
                </Form> */}