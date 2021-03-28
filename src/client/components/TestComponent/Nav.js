import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  const navStyle = {
    color: "rgb(145, 253, 248)",
  };
  return (
    <nav>
      <img
        src="src/client/components/TestComponent/testImg.png"
        alt="MealSharing logo"
        width="150"
        height="80"
      />
      <ul className="nav-links">
        <Link to={"/meals"} style={navStyle}>
          <li>Meals</li>
        </Link>
        <Link to={"/reservations"} style={navStyle}>
          <li>Reservations</li>
        </Link>
        <Link to={"/reviews"} style={navStyle}>
          <li>Reviews</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
