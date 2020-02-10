import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar(props) {
  return (
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/watchlist">
        <li>Watch list</li>
      </Link>
      <Link to="/signin">
        {!props.user ? <button>Signin</button> : <button>Signout</button>}
      </Link>
    </ul>
  );
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStateToProps)(Navbar);
