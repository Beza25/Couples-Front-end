import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
// import {  Segment} from "semantic-ui-react";
//  Message 

class LoginForm extends Component{
    constructor(){
        super()
        this.state= {
            username: "",
            password: "",
        }
    }

    //when the a user login 

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value } )
    }

    handleSubmit =(e) =>  {
        e.preventDefault()
        // get the value of user input and save it to the state
        // post fetch the user => pass the user info App
        // App => MainPage => Change the Dom to show the MainPage
        // let loginInfo = {
        //     username: this.state.user,
    
        // }
        fetch("http://localhost:3001/login", {   
        method: 'POST', // or 'PUT'
        headers: {
                'Content-Type': 'application/json',
              
                'Accept': 'application/json'
                },
                // {username: this.state.username}
        body: JSON.stringify( {username: this.state.username}),
        })
        .then(response => response.json())
        .then(userInfo => {
            if (userInfo.error_message){
                alert (userInfo.error_message)
            }else{
                this.props.updateUser(userInfo)
            }
          
        })
    }
    

    render (){
       
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image /> Log-in to your account
                </Header>
                <Form size='large' onSubmit= {this.handleSubmit}>
                    <Segment stacked>
                    <Form.Input fluid icon='user'
                     iconPosition='left' 
                     placeholder='username' 
                     name = "username"
                     value = {this.state.username}
                    // value = "rach"
                     onChange={this.handleChange}
                     />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
                </Grid.Column>
            </Grid>
        );
    }

}

export default LoginForm