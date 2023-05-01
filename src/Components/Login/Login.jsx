import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import fb from "../../assets/images/icons/fb.png";
import google from "../../assets/images/icons/google.png";

const Login = () => {
  return (
    <div className="login">
      <div>
        <div className="login-form">
          <h1>Login</h1>
          <input type="email" name="email" placeholder="Username or Email" />
          <br />
          <input type="password" name="password" placeholder="Password" />
          <br />
          <button className="btn btn-login">Login</button>
          <p>
            Don't have an account?{" "}
            <Link className="yellow" to={"/auth/register"}>
              Create an account
            </Link>
          </p>
        </div>
        <div className="social">
          <img src={fb} alt="fb" />
          <p>Continue with Facebook</p>
        </div>
        <div className="social">
          <img src={google} alt="fb" />
          <p>Continue with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
