import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import fb from "../../assets/images/icons/fb.png";
import google from "../../assets/images/icons/google.png";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if ((!email, !password)) {
      toast.error("Please enter value");
    }

    if ((email, password)) {
      logIn(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="login">
      <div>
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Username or Email" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <button className="btn btn-login">Login</button>
          </form>
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
