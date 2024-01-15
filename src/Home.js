import { Component } from "react";

export class Home extends Component {
  state = {
    count: 0,
  };

  changeCount = () => {
    let myCount = this.state.count;
    myCount = Math.random();
    this.setState({count:myCount})
  };

  render() {
    return (
      <div>
        <h2>Home Component</h2>
        <h5>count : {this.state.count}</h5>
        <button onClick={()=>this.changeCount()} className="btn btn-info">Change</button>
      </div>
    );
  }
}
