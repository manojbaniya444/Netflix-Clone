import React from "react";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user } = useAuthContext();
  // console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default Protected;
