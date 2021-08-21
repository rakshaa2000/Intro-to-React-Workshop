import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.IncrementItem}
        >
          Click to increment by 1
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.DecreaseItem}
        >
          Click to decrease by 1
        </Button>
        <h1>{this.state.clicks}</h1>
      </div>
    );
  }
}

export default Counter;
