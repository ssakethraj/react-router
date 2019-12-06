import React from "react";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  render() {
    const { value, handleChange, handleLogin, isLoggedin } = this.props;
    if (isLoggedin) {
      return <Redirect to="/home" />;
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
