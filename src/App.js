import { Component } from "react";
import { Home } from "./Home";
import { About } from "./About";
import Contacts from "./Contacts";
import Parent from "./Parent";
import Gallary from "./Gallary";

export class App extends Component {
  state = {};

  // jsx
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Home></Home>
            </div>
            <div className="col-md-6">
              <Gallary></Gallary>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
