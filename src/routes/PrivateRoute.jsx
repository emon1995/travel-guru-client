import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);

  if (user) {
    return <div>{children}</div>;
  }
  return (
    <Navigate to={`/auth/login`} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
