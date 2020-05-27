import React, {Component} from 'react';



class Search extends Component{

    render() {
     
        return (
            
                <div className="ui left icon action input">
                    <i className="search icon"></i>
                    <input type="text" placeholder="spcial day" onChange = {this.props.onChange} value={this.props.searchTerm} />
                    <div className="ui blue submit button">Search</div>
                
                    </div>
         
        );
    }
}

export default Search