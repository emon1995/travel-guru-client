import React from "react";
import "./Auth.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth" style={{ color: "black" }}>
      <Header style={{ color: "black" }} color={false}></Header>
      <hr />
      <Outlet />
    </div>
  );
};

export default Auth;
