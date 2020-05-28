import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';


class NewSpecialDay extends Component{

    constructor() {
        super()
        this.state= {
            title: "",
            location: "",
            sDate: ""
        }
    }

    // need user's info
    // request Post fetch with ( title, date, location)
    // need to send resp from post fetch to app so that it can update the arr of special dates
    // send back the specal dates to render on the DOM 

   handleChange =(e) =>{

    this.setState({ [e.target.name]: e.target.value})



   }

    // createSD= (e) =>{
    //     e.preventDefault()
    //     const specialDay = {
    //         title: this.state.title,
    //         location: this.state.location,
    //         sDate: this.sDate
            
    //     }

    //     fetch("http://localhost:3001/special_dates",{
    //         method: "POST",
    //         headers: {
    //             "Content-type": "Application/json"
    //         },
    //         body: JSON.stringify(specialDay)
    //     }).then(resp => resp.json)
    //     .then(specialDay => console.log(specialDay))
    //     console.log("Atempt to create SD")

    // }


    render() {
      
        return (
            <div>
                <div className="ui calendar" id="inline_calendar">
                    </div>
                <Form onSubmit={this.createSD}>
                    <Form.Group widths='equal'>
                    <Form.Input fluid label='Title' placeholder='Title'
                    name= "title" 
                     value={this.state.title}
                     onChange={this.handleChange} 
                     />
{/* 
$('#date_calendar')
  .calendar({
    type: 'date'
  })
; */}
                
                    {/* <DateInput
                    name="sDate"
                    placeholder="Date"
                    value={this.state.date}
                    iconPosition="left"
                    type= date
                    onChange={this.handleChange}
                    /> */}
                    <Form.Input fluid label='Last name' placeholder='Location'
                     name="location"
                     value={this.state.location}
                     onChange={this.handleChange} 
                     />

                    </Form.Group>
                    <button className="ui teal button">Submit</button>
                   
                </Form>
                

            </div>
        );
    }
}

export default NewSpecialDay