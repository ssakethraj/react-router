import React from "react";
import { Link } from "react-router-dom";

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
        {!props.isLoggedin ? <button>Signin</button> : <button>Signout</button>}
      </Link>
    </ul>
  );
}

export default Navbar;
