import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navStyle = {
    color: "rgb(83, 17, 17)",
  };
  return (
    <nav>
      <img
        src="src/client/components/TestComponent/img3.jpeg"
        alt="MealSharing logo"
        width="180"
        height="120"
      />
      <ul className="nav-links">
        <Link to={"/"} style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to={"/meals"} style={navStyle}>
          <li>Meals</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Header;
