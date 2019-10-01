import React, { Component } from 'react';
// import logo from './logo.svg';
import './App1.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.myClick = this.myClick.bind(this);
  }

  myClick() {
    document.getElementsByClassName('wrapper')[0].style.backgroundColor =
      '#FFE333';
  }

  render() {
    return (
      <button onClick={this.myClick} className="clicker">
        Change design
      </button>
    );
  }
}

export default Button;
