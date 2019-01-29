import React, { Component } from "react";
import "./App.css";

class App extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="App">
        <div className="purple-blue">
          <div className="header-text">
            <h1>Hey There!</h1>
            <h2>
              My name is Lauren. I am a designer and developer.
              <br />
              Let's create something great together.
            </h2>
          </div>
        </div>
        <div className="meantime">
          <div className="icons">
            <a href="https://www.linkedin.com/in/lauren4c/">
              <ion-icon name="logo-linkedin" />
            </a>
            <a href="https://github.com/lauren4c">
              <ion-icon name="logo-github" />
            </a>
            <a href="http://www.coroflot.com/lauren4c">
              <ion-icon name="brush" />
            </a>
            <a href="https://4cblocjams.netlify.com/">
              <ion-icon name="code-working" />
            </a>
            <a href="mailto:lauren4c@gmail.com">
              <ion-icon name="send" />
            </a>
          </div>
        </div>
        <div className="footer">
          <p className="footer-text">
            Hand-coded in Summit County, Colorado. ©{this.getYear()} Lauren
            Forcey
          </p>
        </div>
      </div>
    );
  }
}

export default App;
// <p>
//   In the meantime, if you need any design assistance or help with
//   your // small business website, //{" "}
//   <a href="mailto:lauren4c@gmail.com">send Lauren an email.</a>{" "}
