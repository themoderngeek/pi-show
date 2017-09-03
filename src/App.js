import React, {Component} from 'react';
import './App.css';
import Clock from "./components/clock/index";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="App">
                <Clock date={this.state.date}/>
            </div>
        );
    }
}

export default App;
