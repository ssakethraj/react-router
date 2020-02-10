import React, { Component } from "react";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import About from "./Components/About";
import Header from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

const PrivateRoute = ({ path, Component, user }) => {
  return (
    <Route
      path={path}
      render={props => {
        console.log("Location of component", props.location);
        if (user) {
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
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Header} />
          <Route
            path="/home"
            render={props => {
              if (user) {
                return <Home {...props} />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          />
          <PrivateRoute path="/watchlist" Component={WatchList} user={user} />
          <PrivateRoute path="/about" Component={About} user={user} />
          {/* <Route
            path="/watchlist"
            render={props => {
              if (user) {
                return <WatchList {...props}  />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          /> */}
          {/* <Route
            path="/about"
            render={props => {
              if (user) {
                return <About {...props}  />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          /> */}
          <Route path="/signin" component={Signin} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStateToProps)(App);
