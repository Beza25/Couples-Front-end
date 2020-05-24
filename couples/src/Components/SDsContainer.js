import React, {Component} from 'react';
import SpecialDay from "./SpecialDay";
import SpecialDayCard from "./SDCard";



class SpecialDaysContainer extends Component{
    render() {
        return (
            <div>
                 <h1>
                     Special Days Container
                 </h1>
                 <div> 
                    <h1>
                        Special Calander (Create and Edit )
                    </h1>
                     <SpecialDay />
                </div>
                 
                 <div>
                    <h1>
                        Special Card (Delete)
                    </h1>
                     <SpecialDayCard />

                 </div>

            </div>
        );
    }
}

export default SpecialDaysContainer