
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
      partner: null,
      pTexts:[],
      updated: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/users")
    .then(resp => resp.json())
    .then(userArr => this.setState({users: userArr}))
    
  }

  updateUser = (userInfo) =>{
    
    this.setState({currentUser: userInfo.userObj, 
                  userTexts: userInfo.userTexts,
                  partner: userInfo.partner,
                  pTexts: userInfo.p_texts

                 })
  }

  //if current urser is null show loginform
  // else redirect to mainpage

  handleEdit = (user) => {
    // 
    this.setState({currentUser: user})
  }
  updated = () => {
    this.setState({updated:true})
  }

  render() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <NavBar title='navBar' icon="https://cdn5.vectorstock.com/i/1000x1000/55/84/love-couple-logo-vector-7545584.jpg" color="blue" subtitle="List of Paintng" />
      <Switch> 
          <Route exact path= "/" render= { ()=>(
            this.state.currentUser === null? <LoginForm updateUser = {this.updateUser}/> :<Redirect to="/mainPage" />
          )} /> 
          <Route exact path= "/mainPage" render= { ()=>(
            this.state.currentUser ? <MainPage 
             currentUser={this.state.currentUser}
              userTexts= {this.state.userTexts}
              partner= {this.state.partner}
              pTexts= {this.state.pTexts}
              />:
            <Redirect to="/" />
            )} />

     
          <Route exact path= "/profile" render= { ()=> ( 
            this.state.currentUser ?  <ProfileContainer 
                                          currentUser={this.state.currentUser} 
                                          partner= {this.state.partner} 
                                          handleEdit = {this.handleEdit}
                                          updated = {this.update}
                                      /> : <Redirect to="/" />
         
          )} /> 
          <Route render= { ()=><div> Page Not Found 404</div>} /> 
        </Switch>
     </BrowserRouter>
      
    </div>
  );
}
}

export default App;
