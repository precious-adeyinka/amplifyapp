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
      <div>
        <img src="logo.svg" alt="" />
        <div>
        Seconds: {this.state.seconds}
        </div>
      </div>
    );
  }
}
export default Timer;