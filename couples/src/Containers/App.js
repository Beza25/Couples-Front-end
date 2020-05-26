
import React, { Component } from 'react';
import '../App.css';
import NavBar from'./NavBar' ;
import LoginForm from './LoginForm';
import MainPage from './MainPage';
import ProfileContainer from './ProfileContainer';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {

  constructor(){
    super()
    this.state={
      users: [],
      currentUser: null,
      userTexts: [],
      showMainPage: false,
    }
  }

  componentDidMount(){
    console.log("Component Did Mount")
    fetch("http://localhost:3001/users")
    .then(resp => resp.json())
    .then(userArr => this.setState({users: userArr}))
    
  }

  updateUser = (userInfo) =>{
    this.setState({currentUser: userInfo.userObj, 
                  userTexts: userInfo.userTexts,
                showMainPage: true })
  }

  //if current urser is null show loginform
  // else redirect to mainpage

  

  render() {
  return (
    <div className="App">
      
     
     <BrowserRouter>
     <NavBar title='Paintr' icon="https://cdn5.vectorstock.com/i/1000x1000/55/84/love-couple-logo-vector-7545584.jpg" color="blue" subtitle="List of Paintng" />
      <Switch> 
          <Route exact path= "/" render= { ()=>(
            this.state.currentUser === null? <LoginForm updateUser = {this.updateUser}/> :<Redirect to="/mainPage" />
          )} /> 
          <Route exact path= "/mainPage" render= { ()=>(
            this.state.currentUser ? <MainPage  currentUser={this.state.currentUser} userTexts= {this.state.userTexts}/>:
            <Redirect to="/" />
            )} />

     
          <Route exact path= "/profile" render= { ()=> ( 
            this.state.currentUser ?  <ProfileContainer  /> : <Redirect to="/" />
         
          )} /> 
          <Route render= { ()=><div> Page Not Found 404</div>} /> 
        </Switch>
     </BrowserRouter>
      
    </div>
  );
}
}

export default App;
