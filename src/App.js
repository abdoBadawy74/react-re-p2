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
        {/* <Parent></Parent> */}
        <h2>App Component</h2>
        <Gallary></Gallary>
      </div>
    );
  }
}
