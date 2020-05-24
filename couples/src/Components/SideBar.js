import React, {Component} from 'react';
import SpecialDaysContainer from "./SDsContainer";
import {Link} from 'react-router-dom';
// import { BrowserRouter, Route, Switch} from 'react-router-dom';

class SideBar extends Component{
    render() {
        return (
            <div>
                 {/* <BrowserRouter> 
                    <Switch> */}
                    <div className="ui relaxed divided list">
                        <div className="item">
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                            {/* <Route exact path= "/specialDayContaine" render= { ()=> <SpecialDaysContainer /> } />  */}
                            {/* <Link to="/specialDay"><h1> SpecialDaysContainer </h1></Link> */}
                            <h1> SpecialDaysContainer </h1>
                            <SpecialDaysContainer />

                            </div>
                        </div>
                        <div className="item">
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <Link to="/themes">   <h1> Themes</h1></Link>         
                            </div>
                        </div>
                        </div>
                    {/* </Switch>
                 </BrowserRouter> */}
  
            
                
            </div>
        );
    }
}

export default SideBar

