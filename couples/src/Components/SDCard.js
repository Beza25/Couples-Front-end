import React, {Component} from 'react';
import moment from 'moment';
import { Card } from 'semantic-ui-react'


class SpecialDayCard extends Component{
    render() {
        console.log(this.props.specialDate)
        return (
            <Card.Group itemsPerRow={3}>
                    <div class="ui card">
                        <div class="content">
                        <div class="header">{this.props.specialDate.title}
                        </div>
                        <br/>
                            <div class="meta">
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