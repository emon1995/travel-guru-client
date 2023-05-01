import React, { useContext } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import fb from "../../assets/images/icons/fb.png";
import google from "../../assets/images/icons/google.png";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      toast.error("Password at least 8 char");
    }
    if ((name, email, password)) {
      register(email, password)
        .then((result) => {
          console.log(result.user);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="login">
      <div>
        <div className="login-form register-form">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" />
            <br />
            <input type="email" name="email" placeholder="Username or Email" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <button className="btn btn-login">Register</button>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="yellow" to={"/auth/login"}>
              Login
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

export default Register;
