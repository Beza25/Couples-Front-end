import React, {Component} from 'react';
import NewSpecialDay from "../Components/NewSpecialDay";
import SpecialDayCard from "../Components/SDCard";
import Search from "../Components/Search";



class SpecialDaysContainer extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         showForm: false
    //     }
    // }
    // getForm = ()=>{
    //     console.log("Creat a special day")
    //     this.setState({showForm: !this.state.showForm})
    // }

    render() {
        return (
            <div textAlign='center' style={{ height: '100vh' }}  >

                <div className="ui center aligned basic segment">
                    <div className="ui left icon action input">
        
                        <Search onChange={this.props.onChange} searchTerm = {this.props.searchTerm} />
                    </div>
                    <div className="ui horizontal divider">
                        
                    </div>
                    {/* <div className="ui teal labeled icon button" onClick={this.getForm}>
                        Create Special Day
                        <i className="add icon"></i>
                    </div> */}
                    {/* {this.state.showForm ?  <NewSpecialDay  /> :  null} */}
                    <div className="ui horizontal divider"> </div>

                       {this.props.filtered.map(specialDay =>  <SpecialDayCard  key={specialDay.id} specialDate = {specialDay}/> )} 

                    
                </div>
                

                    

                

            </div>
        );
    }
}

export default SpecialDaysContainer