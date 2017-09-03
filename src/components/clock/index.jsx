import React, {Component} from 'react';
import './Clock.css';

export default class Clock extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        const time = this.props.date.toLocaleTimeString([], {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        return (
            <div className="digital">
                {time}
            </div>
        );
    }
}