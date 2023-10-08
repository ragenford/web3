import React from "react";
import Logo from "./../../images/logoVinci.png";

const Header = ({ course }) => {
  return (
    <div>
      <img src={Logo} alt="logo Vinci"></img>
      <h1>{course}</h1>
    </div>
  );
};

export default Header;
