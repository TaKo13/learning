import React, { Component } from 'react';
// import logo from './logo.svg';x
import './App1.css';

function ShowBanner(props) {
  if (props.time > 45) {
    return <div className="rest_block"> Relaxation </div>;
  } else {
    return <div className="work_block"> Time to work on yourself</div>;
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1> Current time {this.state.date.toLocaleTimeString()} </h1>
      </div>
    );
  }
}

export default Clock;
