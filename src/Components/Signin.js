import React from "react";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  render() {
    const {
      value,
      handleChange,
      handleLogin,
      isLoggedin,
      history
    } = this.props;
    const { state } = history.location;
    if (isLoggedin) {
      return <Redirect to={state ? state.prevLocation : "/home"} />;
    }
    return (
      <div>
        <input value={value} type="text" id="input" onChange={handleChange} />
        <button onClick={handleLogin}>login</button>
      </div>
    );
  }
}

export default Signin;
