import React, { Component } from 'react';


class Text extends Component{
    render(){
        return(
            <div>
                <form className="ui form">
                    <div className="field">
                        <input type="text" placeholder= "Text..."/>
                    </div>

                </form>

            </div>
        );
    }
}

export default Text