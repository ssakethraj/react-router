import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/signin">
        {!props.isLoggedin ? <button>Signin</button> : <button>Signout</button>}
      </Link>
    </ul>
  );
}

export default Navbar;
