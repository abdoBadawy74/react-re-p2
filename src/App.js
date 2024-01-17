import { Component } from "react";
import { Home } from "./Home";
import  About  from "./About";
import Contacts from "./Contacts";
import Parent from "./Parent";
import Gallary from "./Gallary";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

export class App extends Component {
  state = {};

  // jsx
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="parent" element={<Parent></Parent>}></Route>
            <Route path="contacts" element={<Contacts></Contacts>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="gallary" element={<Gallary></Gallary>}></Route>

          </Routes>


        </div>
        <Footer></Footer>
      </div>
    );
  }
}
