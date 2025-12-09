import React, { Component } from 'react';
import './Counter.css'; // Import the CSS file
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div className="counter-container">
        <p className="counter-text">Count: {this.state.count}</p>
        <button className="counter-button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
