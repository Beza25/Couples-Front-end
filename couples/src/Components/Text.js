import React, { Component } from 'react';


class Text extends Component{


    // make a POST fetch => change the state of content to user's input 
    // render it on the Chat container with the username

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     {this.props.}

    // }

    handleSubmit = (e) =>{
        // get the value of the user's input
        e.preventDefault() 
        let input = e.target.content.value
        this.props.createText(input)
    }

   
    
    render(){
        return(
            <div>
                <form className="ui form" onSubmit= {this.handleSubmit} >
                    <div className="field">
                        <input type="text" name="content" placeholder= "Text..."/>
                    </div>

                </form>

            </div>
        );
    }
}

export default Text