import React, {Component} from 'react';
import './Clock.css';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
let secondsStyle, minutesStyle, hoursStyle;

export default class Clock extends Component {

    setAnalogStyles() {
        let hoursTransform = 30;
        if(this.props.date.getMinutes() > 30) {
            hoursTransform = 31;
        }
        secondsStyle = {transform: ['rotateZ(' + this.props.date.getSeconds() * 6 + 'deg)']};
        minutesStyle = {transform: ['rotateZ(' + this.props.date.getMinutes() * 6 + 'deg)']};
        hoursStyle = {transform: ['rotateZ(' + this.props.date.getHours() * hoursTransform + 'deg)']};
    }

    render() {
        const time = this.props.date.toLocaleTimeString([], timeOptions);
        const date = this.props.date.toLocaleDateString("en-Uk", dateOptions);

        if(this.props.type === "analog") {
            this.setAnalogStyles();
        }

        return (
            <div className={this.props.type}>
                <div className="clock show">
                    <div className="hours" style={ hoursStyle }>{ time[0] + time[1] }</div>
                    <div className="minutes" style={ minutesStyle }>{ time[3] + time[4] }</div>
                    <div className="seconds" style={ secondsStyle }>{ time[6] + time[7] }</div>
                </div>
                <div className="DateView">
                    { date }
                </div>
            </div>
        );
    }
}
