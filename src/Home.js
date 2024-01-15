import { Component } from "react";

export class Home extends Component {
  state = {
    productName: "toshipa",
  };

  render() {
    return <h2 className="text-center">Name : {this.state.productName}</h2>;
  }
}
