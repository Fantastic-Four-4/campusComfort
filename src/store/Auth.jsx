import React, { useEffect, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth({ children }) {
  const { user, userToken, loading, isAuthenticated } =
    useSelector((state) => state.user);
  // console.log(checkAuthLoading)
  // console.log(loading)
  // console.log(userToken)
  // console.log(user)

  // console.log(isAuthenticated)

  console.log("1");

 
  if (loading) {
    return <p>
      <BiLoader/>
    </p>;
  }
  console.log("2");

  if (!userToken || isAuthenticated === false) {
    return <Navigate to={"/login"} />;
  }

  console.log("3");
  return <>{children}</>;
}

export default Auth;
