import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Signin extends React.Component {
  state = {
    value: ""
  };
  handleLogin = () => {
    // dispatch an action
    const { dispatch } = this.props;
    const { value } = this.state;
    dispatch({
      type: "LOGIN",
      payload: {
        name: value
      }
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { history, user } = this.props;
    const { value } = this.state;
    const { state } = history.location;
    if (user) {
      return <Redirect to={state ? state.prevLocation : "/home"} />;
    }
    return (
      <div>
        <input
          value={value}
          type="text"
          id="input"
          onChange={this.handleChange}
        />
        <button onClick={this.handleLogin}>login</button>
      </div>
    );
  }
}

const mapStateToprops = state => {
  console.log("Reduc state", state);
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

// const SigninRedux = connect(mapStateToprops, mapDispatchToProps);

// export default SigninRedux(Signin);

export default connect(mapStateToprops, mapDispatchToProps)(Signin);

// function connect(msp, mdp) {
//   const newStateProps = msp(state);
//   const newDispatchProps = mdp(state);
//   const redux = Component => {
//     return <Component {...newStateProps} {...newDispatchProps} />;
//   };
//   return redux;
// }
