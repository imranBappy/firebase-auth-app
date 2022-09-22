import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { AuthContext } from "./Layout";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
