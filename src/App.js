import React, { Component } from "react";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import About from "./Components/About";
import Header from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";

const PrivateRoute = ({ path, Component, isLoggedin }) => {
  return (
    <Route
      path={path}
      render={props => {
        console.log("Location of component", props.location);
        if (isLoggedin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: { prevLocation: props.location.pathname }
              }}
            />
          );
        }
      }}
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    // this.isLoggedin = false;

    this.state = {
      value: "",
      isLoggedin: false
    };
  }
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
              if (this.state.isLoggedin) {
                return <Home {...props} value={this.state.value} />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          />
          <PrivateRoute
            path="/watchlist"
            Component={WatchList}
            isLoggedin={this.state.isLoggedin}
          />
          <PrivateRoute
            path="/about"
            Component={About}
            isLoggedin={this.state.isLoggedin}
          />
          {/* <Route
            path="/watchlist"
            render={props => {
              if (this.state.isLoggedin) {
                return <WatchList {...props} value={this.state.value} />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          /> */}
          {/* <Route
            path="/about"
            render={props => {
              if (this.state.isLoggedin) {
                return <About {...props} value={this.state.value} />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          /> */}
          <Route
            path="/signin"
            render={props => {
              // no access to previous pathname
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
