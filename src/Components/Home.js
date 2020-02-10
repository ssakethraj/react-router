import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return <div>Hello {props.user.name}</div>;
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStateToProps)(Home);
