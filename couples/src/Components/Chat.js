import React, { Component } from 'react';


class Chat extends Component {
    render() {
        return (
            <div className= "container">
                <div className="row">
                    <div className="col-4">
                        <h1> Partner_A</h1>
                        <h5> {this.props.text.content}</h5>
                
                    </div>
                    <br/>
                    <div className="col-8">
                        <h1> Partner_B</h1>
                        <h5> hi love</h5>
                    
                    </div>
                </div>
            </div>
        );
      }
}
export default Chat;
