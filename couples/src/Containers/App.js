
import React, { Component } from 'react';
import '../App.css';
import NavBar from'./NavBar' ;
import LoginForm from './LoginForm';
import MainPage from './MainPage';
import ProfileContainer from './ProfileContainer';



// import { render } from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    console.log("Component Did Mount")
  }

  render() {
  return (
    <div className="App">
      
     
     <BrowserRouter>
     <NavBar title='Paintr' icon="https://cdn5.vectorstock.com/i/1000x1000/55/84/love-couple-logo-vector-7545584.jpg" color="blue" subtitle="List of Paintng" />
      <Switch> 
          <Route exact path= "/" render= { ()=> <LoginForm />} /> 
          <Route exact path= "/mainPage" render= { ()=> <MainPage />} /> 
          <Route exact path= "/profile" render= { ()=> <ProfileContainer />} /> 
          <Route render= { ()=><div> Page Not Found 404</div>} /> 
        </Switch>
     </BrowserRouter>
      
    </div>
  );
}
}

export default App;
