import React from 'react';
import './App.css';


class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 0
    }
  } 

  tick() {
    this.setState(state=>({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container">
        <h1>A Simple React Timer App</h1>
        <div>
          <p className="para">Timer: {this.state.seconds}</p>
        </div>
      </div>
    );
  }
}
export default Timer;