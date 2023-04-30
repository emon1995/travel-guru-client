import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="header-img">
        <img src={logo} alt="logo" />
      </Link>
      <div className="header-item">
        <div className="header-input-icon">
          <BiSearch className="header-icon" />
          <input
            type="text"
            name="search"
            placeholder="search you Destination"
          />
        </div>
        <ul className="header-nav">
          <li>
            <ActiveLink className="link-li" to={`/`}>
              News
            </ActiveLink>{" "}
          </li>
          <li>
            <ActiveLink to={`/destination`}>Destination</ActiveLink>{" "}
          </li>
          <li>
            <ActiveLink to={`/blog`}>Blog</ActiveLink>
          </li>
          <li>
            <ActiveLink to={`/contact`}>Contact</ActiveLink>
          </li>
          <li>
            <button className="btn">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
