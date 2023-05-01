import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = ({ color }) => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={`${color ? "white" : "black"} header`}>
      <Link to={"/"} className="header-img">
        <img src={logo} alt="logo" />
      </Link>
      <div className={`${color ? "white" : "black"} header-item`}>
        <div className="header-input-icon">
          <BiSearch className="header-icon" />
          <input
            type="text"
            name="search"
            placeholder="search you Destination"
          />
        </div>
        <ul className={`${color ? "white" : "black"} header-nav`}>
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
          {user?.email && <li>{user?.email}</li>}
          {user ? (
            <li>
              <button onClick={handleLogOut} className="btn">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to={`/auth/login`} className="btn">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
