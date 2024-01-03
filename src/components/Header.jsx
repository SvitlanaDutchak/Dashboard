import React from "react";
import logo from "../images/logo.png";
import { Navigation } from "../components/Navigation";
import { User } from "./User";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <img src={logo} alt="logo" />
        <h1 className="title">Dashboard</h1>
      </div>
      <Navigation /> 
      <User />
    </div>
  );
};
