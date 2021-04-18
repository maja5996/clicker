import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Clicker extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container">
        <span className="clicker-display d-flex align-items-center bg-light text-secondary">
          {this.state.count}
        </span>
        <button className="btn btn-success " onClick={this.handleIncrement}>
          +
        </button>
        <button className="btn btn-warning" onClick={this.handleReset}>
          Reset
        </button>
        <button className="btn btn-danger" onClick={this.handleDecrement}>
          -
        </button>
      </div>
    );
  }
}

export default Clicker;
