import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <NavLink to="/">Back</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </div>
  );
};

export default Header;
