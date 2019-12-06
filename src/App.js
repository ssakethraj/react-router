import React, { Component } from "react";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Contact from "./Components/About";
import Header from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    isLoggedin: false
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleLogin = () => {
    const { value } = this.state;
    if (value !== "") {
      this.setState({
        isLoggedin: true
      });
    }
    console.log("Value", this.state.value);
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            path="/"
            render={props => {
              return (
                <Header
                  {...props}
                  value={this.state.value}
                  isLoggedin={this.state.isLoggedin}
                />
              );
            }}
          />
          <Route
            path="/home"
            render={props => {
              return <Home {...props} value={this.state.value} />;
            }}
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/signin"
            render={props => {
              return (
                <Signin
                  {...props}
                  handleChange={this.handleChange}
                  value={this.state.value}
                  handleLogin={this.handleLogin}
                  isLoggedin={this.state.isLoggedin}
                />
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
