import { Component } from "react";
import Button from "../buttons/button";

class Counter extends Component {
  state = {
    count: 0,
  };

  Inc = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {}
    );
  };

  Dec = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  Reset = () => {
    this.setState(
      {
        count: 0,
      },
      () => {}
    );
  };

  render() {
    return (
      <>
        <p style={{ textAlign: "center" }}> {this.state.count}</p>
        <button onClick={this.Inc}>Increase </button>
        <button onClick={this.Dec}>Decrease </button>
        <button onClick={this.Reset}>Reset</button>

        {/* <Button click={this.Inc} text="+"></Button>
        <Button text="-"></Button>
        <Button text="Reset"></Button> */}
      </>
    );
  }
}

export default Counter;
