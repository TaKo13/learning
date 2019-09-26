import React, { Component } from 'react';
// import logo from './logo.svg';
import './App1.css';

class Clock extends React.Component {
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
        <h1> Current time {this.state.date.toLocaleTimeString()} </h1>
      </div>
    );
  }
}

export default Clock;
