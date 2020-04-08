import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
//import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      // <ul className="topnav">
      //   <li>
      //     <a href="/">
      //       <h2>Navoda's Digest</h2>
      //     </a>
      //   </li>
      //   <li className="right">
      //     {/* <h2><a href="/contact">Contact</a></h2> */}
      //   </li>
      // </ul>

      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <h1>Navoda's Digest</h1>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-right" id="basicExampleNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
