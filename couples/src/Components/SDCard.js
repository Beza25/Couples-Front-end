import React, {Component} from 'react';
import moment from 'moment';
import { Card } from 'semantic-ui-react'


class SpecialDayCard extends Component{
    render() {
  
        return (
            <Card.Group itemsPerRow={3}>
                    <div className="ui card">
                        <div className="content">
                        <div className="header">{this.props.specialDate.title}
                        </div>
                        <br/>
                            <div className="meta">
                            <span>{moment(this.props.specialDate.special_day).format("MMM Do YYYY")} </span>
                            </div>
                            <br/>
                            <p>
                                Location: {this.props.specialDate.location}
                            </p>
                        </div>
                        </div>
            </Card.Group>
        );
    }
}

export default SpecialDayCard